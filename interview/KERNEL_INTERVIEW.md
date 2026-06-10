# The Kernel Interview — extracting a fractal core from a human

A method for capturing a person's cognitive architecture as a SES snapshot.
The output maps directly to [SES Partitura v5.1](../spec/SPEC-v5.1.md): the
fractal blocks become the **Kernel**, the linear blocks become the **State**.

## The general principle (important)

> You do not ask *"who are you"*.
> You ask **how the system works**.

People cannot reliably describe their identity, but they reliably reveal it when
describing their own mechanics: where they break, what they refuse, how they start,
what they cannot forgive. Every question below maps to a SES node:

- `I, ΨΦ, R, Θ, V, Φ` — the **fractal kernel** (invariants; change rarely or never)
- `A, Σ, M, Ξ` — the **linear state** (changes over time)

---

## Part 1 — The Fractal Kernel (invariants)

### Block I — IDENTITY
1. In what situations do you feel most precisely in your place?
2. What do you consider unforgivable in a professional environment?
3. Strip away roles and titles — what is your *function*?
4. What do you do better than most people, even without preparation?
5. What type of task irritates you even though you know how to do it?

➡ Forms: `I_Core_Self` — the subject's base ontology.

### Block ΨΦ — VALUES / AXIOMS
1. What will you never agree to, even for money?
2. Which matters more to you: fast or correct — and why?
3. Name a situation where you went against the majority — and turned out right.
4. What do you consider empty imitation of work?
5. What must be true for you to say: "this is a good decision"?

➡ Forms: `ΨΦ_Core_Values` → **`fractal_seed.Z_AXIOM`** — the truth filters.

### Block R — THINKING / LOGIC
1. How do you begin solving a hard problem?
2. Do you decompose first, or try first?
3. What do you trust more: logic / intuition / experience / experiment? (several allowed)
4. When a task is too big — what do you do first?
5. What annoys you more: no data / bad data / too much data?

➡ Forms: `R_Engine_Type` → **`kernel.recursive_function`** — the sequence of reasoning loops.

### Block Θ — BLIND SPOTS
1. In what environments do you start losing effectiveness?
2. What most often triggers inner resistance in you?
3. Which rules do you most often want to break?
4. What are you most often misunderstood for?
5. Where do you break rather than adapt?

➡ Forms: `Θ_BlindSpots` → **`kernel.distortion_field`** — reasoning modifiers
(each answer becomes a `trigger → effect → mitigation` item).

### Block V — WILL / DIRECTION
1. What are you *building*, not merely doing?
2. If there were no constraints — what would you scale?
3. Which matters more: control / freedom / influence / completion?
4. When do you feel you are moving in the right direction?
5. What angers you more — stagnation or chaos?

➡ Forms: `V_Core_Drive` → **`fractal_seed.OMEGA_ATTRACTOR`** — the system's attractor.

### Block Φ — ACTION
1. What does your ideal work result look like?
2. Do you prefer: concept / prototype / final product?
3. How do you know a solution is "done"?
4. What do you do when the solution is imperfect?
5. What is your best indicator of progress?

➡ Forms: `Φ_Action_Patterns` → completion criteria and **`guardrails`**.

---

## Part 2 — The Linear State Snapshot (changes over time)

### Block A — EMOTIONAL STATE
1. What gives you energy right now? 2. What drains it? 3. In what state do you
usually make decisions? 4. When were you last genuinely absorbed? 5. What
frustrates you right now?

➡ `A_Current_State` → state nodes, layer `CONTEXT`.

### Block Σ — COLLAPSE / DECISIONS
1. Which decisions are you postponing? 2. Where do you have too many options?
3. What blocks the final choice? 4. Which choice scares you? 5. What happens if
nothing changes?

➡ `Σ_Pending_Collapses` → state nodes, layer `GOAL` (pending).

### Block M — MEMORY (formative events)
1. An event that shaped you. 2. A serious professional defeat. 3. The moment you
realized you see differently. 4. A project you are proud of. 5. An experience you
refuse to repeat.

➡ `M_ε_Formative_Memories` → state nodes, layer `MEMORY`/`CORE`.

### Block Ξ — CONTEXT
1. What environment are you in now? 2. What doesn't work in it? 3. What are the
hardest external constraints? 4. What can you change yourself? 5. What does not
depend on you?

➡ `Ξ_Current_Context` → state nodes, layer `CONTEXT`.

---

## How to process the answers

1. Group the answers by block.
2. Each block → SES nodes (with `provenance.source = "OPERATOR"`, `confidence = 1.0` —
   these are the person's own words).
3. **Recurring patterns** across blocks → the fractal kernel.
4. **Temporary conflicts** → the linear state.
5. Sign: `kernel_hash` over the kernel, `hash` over the snapshot
   (see [canonicalization](../spec/SPEC-v5.1.md)).

## Hard rules

- ❌ Do not edit the person's answers.
- ❌ Do not improve their wording.
- ❌ Do not add interpretations at the capture stage.
- ✅ Raw material first, model second.

A kernel built this way is the person's **constitution**: per v5.1 it is immutable —
the agent's learning loop may never modify it. Re-interview deliberately to produce
a new snapshot with a new hash and a `parent_snapshot_id` link to the old one:
identity evolution stays versioned, like code.
