// SemanticNamer ASI - Figma plugin main code
// Calls Groq API (Llama-3-8B) to rename layers within a selected frame
// according to platform-specific naming conventions.

const GROQ_API_KEY = 'YOUR_GROQ_API_KEY_HERE';
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama3-8b-8192';

interface PrunedNode {
    id: string;
    name: string;
    type: string;
    children: PrunedNode[];
}

figma.showUI(__html__, { width: 320, height: 220 });

const sendStatus = (text: string): void => {
    figma.ui.postMessage({ type: 'status-update', text });
};

const traverse = (node: SceneNode): PrunedNode => {
    const pruned: PrunedNode = {
        id: node.id,
        name: node.name,
        type: node.type,
        children: []
    };

    if ('children' in node) {
        for (const child of node.children) {
            pruned.children.push(traverse(child as SceneNode));
        }
    }

    return pruned;
};

const createSystemPrompt = (platform: string, layerTree: string): string => {
    return `You are an expert Design System Architect and Senior Engineer. Your task is to rename layers in a provided hierarchical tree structure based on the target platform: ${platform}.

**Target Platform:** ${platform}

**Rules:**
- **iOS (SwiftUI):** Use UpperCamelCase for components/views (e.g., \`UserProfileCard\`). Use lowerCamelCase for elements inside them (e.g., \`userNameLabel\`, \`profileAvatarImage\`). Be specific about types: \`View\`, \`Button\`, \`Text\`, \`Image\`.
- **Android (XML/Compose):** Use snake_case for layer IDs (e.g., \`user_profile_card\`, \`user_name_text_view\`). Use UpperCamelCase for component definitions (\`UserProfileCard\`).
- **Web (BEM):** Use BEM naming convention: \`block__element--modifier\` (e.g., \`auth-form__input--error\`, \`header__title\`).
- **Flutter:** Use \`UpperCamelCase\` for Widgets (\`UserProfileCard\`) and \`lowerCamelCase\` for variables/instances (\`userNameText\`, \`profileAvatar\`).
- Analyze the hierarchy. Infer the purpose of each layer from its children and current name.
- Be concise and logical.

**Input Tree:**
${layerTree}

**Output Format:**
You MUST return ONLY a valid JSON object mapping the layer ID to its new name. Do not include any other text, explanations, or markdown formatting like \`\`\`json. Your entire response must be parseable by JSON.parse().
`;
};

figma.ui.onmessage = async (msg: { type: string; platform?: string }) => {
    if (msg.type !== 'rename-layers') {
        return;
    }

    const platform = msg.platform || 'iOS (SwiftUI)';
    const selection = figma.currentPage.selection;

    if (selection.length !== 1) {
        sendStatus('Error: Please select exactly one frame.');
        return;
    }

    const selected = selection[0];
    if (selected.type !== 'FRAME') {
        sendStatus('Error: Selected node must be a FRAME.');
        return;
    }

    sendStatus('Extracting layer tree...');
    const layerTree = traverse(selected);
    const layerTreeString = JSON.stringify(layerTree, null, 2);
    const systemPrompt = createSystemPrompt(platform, layerTreeString);

    sendStatus('Sending to Groq API...');

    let responseText: string;
    try {
        const response = await fetch(GROQ_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: 'Rename the layers based on the provided tree and rules. Return only the JSON mapping.' }
                ],
                temperature: 0.2,
                response_format: { type: 'json_object' }
            })
        });

        if (!response.ok) {
            const errBody = await response.text();
            sendStatus(`Error: Groq API ${response.status} - ${errBody.slice(0, 120)}`);
            return;
        }

        const data = await response.json();
        responseText = data?.choices?.[0]?.message?.content;

        if (!responseText) {
            sendStatus('Error: Empty response from Groq API.');
            return;
        }
    } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        sendStatus(`Error: Network/API failure - ${msg}`);
        return;
    }

    let nameMap: Record<string, string>;
    try {
        nameMap = JSON.parse(responseText);
    } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        sendStatus(`Error: Failed to parse LLM JSON - ${msg}`);
        return;
    }

    sendStatus('Applying new names...');

    let renamedCount = 0;
    for (const id of Object.keys(nameMap)) {
        const newName = nameMap[id];
        if (typeof newName !== 'string' || newName.length === 0) {
            continue;
        }
        try {
            const node = await figma.getNodeByIdAsync(id);
            if (node && 'name' in node) {
                (node as BaseNode & { name: string }).name = newName;
                renamedCount++;
            }
        } catch (err) {
            // Skip nodes that can't be found or renamed
        }
    }

    sendStatus(`Success! Renamed ${renamedCount} layers.`);
};
