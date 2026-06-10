# SES — Somatic-Exosomatic Serialization

**A serialization format for cognitive entities running on LLMs. Identity as verifiable data.**

SES captures, stores and restores the complete cognitive state of an LLM-based entity —
both *how it thinks* (**Kernel**) and *what it is thinking about right now* (**State**) —
as signed, canonical, machine-readable JSON.

> **Kernel** answers *"how to think"*. **State** answers *"what to think about right now"*.
> **COMBINED = Kernel + State** → a full cold-boot package.

## Why

Modern agents are stateful: they accumulate memory, follow reasoning protocols, operate
within cognitive frameworks. But there is no standard way to serialize **the full
cognitive architecture** — not just prompts and tool configs, but the reasoning pipeline,
known failure modes, the knowledge graph, and verifiable provenance chains. SES fills this gap.

| Feature | SES Partitura | Letta Agent File (.af) | Raw system prompts |
|---|---|---|---|
| Kernel / State separation | ✅ explicit | ❌ monolithic | ❌ |
| Cognitive graph (nodes + edges) | ✅ with provenance | ❌ text blocks | ❌ |
| Known distortions / failure modes | ✅ formalized | ❌ | ❌ |
| Cryptographic verification | ✅ canonical JSON + SHA-256 | ❌ | ❌ |
| Reasoning pipeline as data | ✅ typed step objects | ❌ | ❌ |
| Snapshot lineage (parent → child) | ✅ built-in | ⚠️ partial | ❌ |
| Framework-agnostic | ✅ any LLM | ⚠️ Letta-first | ✅ |

## The two memories

1. **The fractal kernel** (`FRACTAL_KERNEL`) — the immutable constitution: a small set
   of scale-invariant axioms, an attractor, guardrails, the entity's own reasoning
   protocol and its known distortions. SHA-256 signed. Never modified by the agent's
   learning loop — it changes only by a deliberate new snapshot with a new hash.
2. **The growing state** (`STATE_SNAPSHOT`) — the biography: a typed graph of nodes and
   edges with per-node provenance, salience and lineage.

**The canon lock (§12):** every state must reference its kernel via `kernel_ref` /
`kernel_hash` — the biography always knows which constitution lived it. This is what
makes a snapshot reproducible rather than "just pretty JSON".

## Repository contents

```
spec/
├── SPEC-v5.1.md                       # full canonical specification (status: Canonical)
└── ses-partitura-v5.1.schema.json    # JSON Schema for validation
examples/
├── minimal-kernel.ses.json           # smallest valid FRACTAL_KERNEL
├── minimal-state.ses.json            # smallest valid STATE_SNAPSHOT
├── combined-cold-boot.ses.json       # COMBINED package
└── Elon_Musk.ses.json                # interpretive public-figure example*
interview/
└── KERNEL_INTERVIEW.md               # how to extract a fractal kernel from a human
scripts/
└── validate.py                       # validate a snapshot against the schema
legacy/v0.1/                          # the original 2025 glyph experiments (history)
```

\* The public-figure example is an interpretive model built from public sources for
research purposes; it implies no affiliation or endorsement.

## Creating your own kernel

Run the [Kernel Interview](interview/KERNEL_INTERVIEW.md) — a structured questionnaire
that extracts a person's invariants (identity, axioms, reasoning style, blind spots,
drive, action patterns) and current state, and maps them block-by-block onto v5.1
fields. The principle: *you don't ask "who are you" — you ask how the system works.*

## Implementations

- **[qca-cycle](https://github.com/trubnikov/qca-cycle)** — reference implementation:
  a portable cognitive layer (reasoning cycle + graph memory + neurochemistry) that
  reads and writes canonical SES v5.1. Runs standalone or as a
  [Hermes Agent](https://github.com/NousResearch/hermes-agent) skill. Exported
  snapshots validate against the schema in this repo with zero errors.
- **Ocean** (private) — the original cognitive agent (2025) the format was grown in:
  QCA reasoning cycle, self-written skills, autonomous daemons, Telegram interface.

## Lineage

SES v0.1 ("Semantic Emergent Syntax" glyph experiments, 2025 — preserved in `legacy/`)
→ v3 (linear state snapshots) → v4 (fractal kernel) → **v5.1 Partitura** (Kernel + State
unified, canonical hashes, provenance, lineage — current).

> **Note for reviewers:** v5.1 does **not** ask the LLM to think or communicate in a
> glyph language — that was the v0.1 experiment, kept in `legacy/` for history only.
> In v5.1 snapshots are plain canonical JSON; the `glyph` field on a node is an
> optional human-facing annotation, never an inference-time syntax. The LLM reads and
> produces natural language; SES is the *storage and provenance layer around it*.

---

Format author: **Dima Trubnikov** ([@trubnikov](https://github.com/trubnikov)).
Spec license: CC-BY 4.0.


---

## Part of the Exo-Somatic research program

This repository is one layer of a single research program on verifiable cognition:

**[Exo-Somatic](https://github.com/trubnikov/Exo-Somatic)** (theory: substrate-independent minds)
→ **[SES](https://github.com/trubnikov/SES)** (contract: signed identity snapshots)
→ **[qca-cycle](https://github.com/trubnikov/qca-cycle)** (mechanism: the cognitive loop)
→ **[Evidence](https://github.com/NousResearch/hermes-agent/pull/43306)** (substrate transition test)

Adjacent track: **[Liquid-Context-Protocol](https://github.com/trubnikov/Liquid-Context-Protocol)** — the same contract-first idea applied to LLM tool execution.

---
