# SES Partitura v5.1 — Usage Guide

## Quick Start

### 1. Understanding the Core Concept

SES Partitura crystallizes **every thought** of an AI agent into an ontological graph. Each graph has:
- **8 semantic glyphs** (Ψ, Ξ, Φ, Σ, Θ, Ω₀, ΨΦ, ΨΣ)
- **3 semantic layers** (CORE, CONTEXT, EPISODIC)
- **5 relationship channels** (>>~, ~>, ≈, ≠, ~)

### 2. Initialize an Agent with Fractal Kernel

```json
{
  "agent_id": "OsGen-2",
  "fractal_kernel": {
    "Z_AXIOM": [
      "Physics as Axiom: Deconstruct to fundamental truths.",
      "Existential Urgency: Speed is the only metric.",
      "Manufacturing is the product."
    ],
    "OMEGA_ATTRACTOR": "Multiplanetary Consciousness & Maximum Utility"
  }
}
```

The Fractal Kernel is **immutable** — it guides all downstream thoughts without being overwritten.

### 3. Generate a SES Snapshot at H7.5

After a thought emerges (H4), crystallize it at phase H7.5:

```json
{
  "snapshot_id": "uuid-or-timestamp",
  "timestamp": "2026-04-13T12:34:56Z",
  "agent_id": "OsGen-2",
  "cognitive_phase": "H7.5",
  "nodes": [
    {
      "id": "n0",
      "glyph": "Ψ",
      "label": "Manufacturing Urgency",
      "layer": "CORE",
      "meta": { "axiom_index": 2 }
    },
    {
      "id": "n1",
      "glyph": "Ξ",
      "label": "Production Bottleneck",
      "layer": "CONTEXT"
    },
    {
      "id": "n2",
      "glyph": "Φ",
      "label": "Automate Process",
      "layer": "EPISODIC"
    }
  ],
  "edges": [
    {
      "source": "n0",
      "target": "n1",
      "channel": "~>",
      "strength": 0.8
    },
    {
      "source": "n1",
      "target": "n2",
      "channel": ">>~",
      "strength": 0.9
    }
  ],
  "layers": {
    "CORE": ["n0"],
    "CONTEXT": ["n1"],
    "EPISODIC": ["n2"]
  },
  "content": "Manufacturing efficiency is critical. Current bottleneck in process X. Automate immediately.",
  "fractal_kernel_influence": "Z_AXIOM[2] - Manufacturing is the product"
}
```

### 4. Store and Query

Store each snapshot in your episodic memory database:
```
episodic_memory[agent_id][snapshot_id] = snapshot
```

Later, query using semantic search:
```
similar_thoughts = semantic_search(query_snapshot, episodic_memory, threshold=0.7)
```

### 5. Calculate Resonance Between Agents

```python
resonance = calculate_resonance(
  snapshot_A,  # OsGen-2's thought
  snapshot_B   # OsGen-3's thought
)
# Returns: 0.0–1.0 (how much they resonate)
```

High resonance (>0.7) = agents think similarly on this topic
Low resonance (<0.3) = agents have conflicting perspectives

---

## Glyph Reference

| Glyph | Meaning | Use When |
|-------|---------|----------|
| **Ψ** | Core Self | Agent's own beliefs/identity |
| **Ξ** | External World | Environmental stimuli/facts |
| **Φ** | Action | Decision/behavior |
| **Σ** | Synthesis | New insight/conclusion |
| **Θ** | Unknown | Uncertainty/mystery |
| **Ω₀** | Language | Expression/formulation |
| **ΨΦ** | Calibration | Self-correction |
| **ΨΣ** | Meta-cognition | Reflection on own thinking |

---

## Channel Reference

| Channel | Meaning | Use When |
|---------|---------|----------|
| **>>~** | Strong Projection | Direct causation |
| **~>** | Influence | Indirect effect |
| **≈** | Equivalence | Same concept |
| **≠** | Conflict | Contradiction |
| **~** | Resonance | Harmony/alignment |

---

## Best Practices

✅ **DO:**
- Crystallize **every significant thought**
- Keep CORE layer stable (immutable axioms)
- Update CONTEXT and EPISODIC frequently
- Calculate resonance for multi-agent learning
- Store all snapshots for history

❌ **DON'T:**
- Modify Fractal Kernel after initialization
- Skip crystallization steps
- Overload edges (keep graphs readable)
- Forget agent_id in snapshots
- Mix timestamped events with eternal axioms

---

## Integration with OsGen v2.1 H0–H7 Cycle

| Phase | Action | SES Role |
|-------|--------|----------|
| **H0** | Reception | Collect Ξ (external world) nodes |
| **H1** | Understanding | Parse into glyphs |
| **H2** | Memory Search | Query episodic memory for similar snapshots |
| **H3** | Contradiction Detection | Find ≠ edges in memory |
| **H4** | Synthesis | Generate Σ nodes |
| **H5** | Self-Critique | Create ΨΣ meta-cognition nodes |
| **H6** | Decision | Choose Φ actions |
| **H7.5** | **Crystallization** | **Generate SES snapshot** |
| **H7** | Storage | Store snapshot in episodic memory |

---

## Example: Multi-Agent Dialogue

```
OsGen-2 (Musk) Thinks:
"Manufacturing bottleneck requires speed. Automate or die."
→ Snapshot: Ψ→Φ (Self→Action via urgency)

OsGen-3 (Jobs) Thinks:
"Manufacturing quality requires elegance. Simplify the process."
→ Snapshot: Ψ→Φ (Self→Action via taste)

Resonance = 0.6
(Similar intent: improve manufacturing, different approach)

Zeitgeist (Collective Memory) learns from both:
"Manufacturing can be both fast AND elegant"
```

---

For schema details, see `partitura_schema.json`
