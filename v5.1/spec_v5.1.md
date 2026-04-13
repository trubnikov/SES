# SES Partitura v5.1 Specification

## Introduction

SES Partitura is an ontological framework designed to crystallize thoughts into structured, comparable, and resonant semantic graphs. It transforms unstructured AI reasoning into a standardized format that enables deep memory, semantic search, and multi-agent learning.

---

## Core Concepts

### Glyph Vocabulary (Fixed)

| Glyph   | Meaning                          | Layer     | Use Case |
|---------|----------------------------------|-----------|----------|
| Ψ       | Core Self / Essence              | CORE      | Agent's identity, beliefs, axioms |
| Ξ       | External World / Stimuli         | CONTEXT   | Environment, facts, input |
| Φ       | Action / Behavior                | EPISODIC  | Decision, behavior, output |
| Σ       | Synthesis / Insight              | CORE      | New understanding, conclusion |
| Θ       | Unknown / Mystery                | EPISODIC  | Uncertainty, gap in knowledge |
| Ω₀      | Language / Expression            | CONTEXT   | How thought is formulated |
| ΨΦ      | Calibration / Self-correction    | CORE      | Adjusting belief based on feedback |
| ΨΣ      | Meta-cognition / Insight         | CORE      | Reflection on own thinking |

### Layers

- **CORE** — Fundamental beliefs and identity (relatively stable, guided by Fractal Kernel)
- **CONTEXT** — Current state and external factors (changes frequently)
- **EPISODIC** — Specific events and details (timestamped, concrete)

### Channels (Edges)

- `>>~` — **Strong Projection**: Direct causal relationship
- `~>` — **Influence**: Indirect effect or correlation
- `≈` — **Equivalence**: Same concept expressed differently
- `≠` — **Conflict**: Contradiction or opposition
- `~` — **Resonance**: Harmony or alignment

---

## JSON Structure

### Snapshot Object

```json
{
  "snapshot_id": "uuid-v4 or timestamp",
  "timestamp": "2026-04-13T12:34:56Z",
  "agent_id": "OsGen-2",
  "cognitive_phase": "H7.5",
  "nodes": [],
  "edges": [],
  "layers": {},
  "resonance_score": 0.0,
  "content": "Original thought text",
  "fractal_kernel_influence": "axiom reference"
}
```

### Node Object

```json
{
  "id": "n0",
  "glyph": "Ψ",
  "label": "My Belief",
  "layer": "CORE",
  "meta": {
    "confidence": 0.95,
    "source": "axiom",
    "related_axis": "Z_AXIOM[0]"
  }
}
```

### Edge Object

```json
{
  "source": "n0",
  "target": "n1",
  "channel": ">>~",
  "strength": 0.85,
  "description": "Causes or directly influences"
}
```

---

## Usage in OsGen v2.1

### Cognitive Cycle Integration

After each thought (H4), the system calls crystallization (H7.5) to generate a SES graph:

1. **H4 Synthesis** → Generate thought
2. **H7.5 Crystallization** → Create SES snapshot
3. **H7 Storage** → Save to episodic memory

### Memory and Search

SES graphs enable:
- **Semantic search**: Find similar past thoughts using graph similarity
- **Contradiction detection**: Identify ≠ edges in memory
- **Pattern recognition**: Cluster snapshots by glyph composition
- **Resonance calculation**: Compare agent perspectives

### Multi-Agent Resonance

```json
{
  "agent_1_snapshot": {...},
  "agent_2_snapshot": {...},
  "resonance": 0.72,
  "shared_glyphs": ["Ψ", "Φ"],
  "conflict_channels": ["≠"],
  "alignment_channels": ["~", "~>"]
}
```

---

## Best Practices

### Creating Snapshots

✅ Crystallize **every significant thought**
✅ Keep **CORE layer stable** (immutable axioms)
✅ Update **CONTEXT** and **EPISODIC** frequently
✅ Use **high-confidence edges** only
✅ Reference **Fractal Kernel** axioms in metadata

### Querying Memory

✅ Use **glyph patterns** for semantic search
✅ Calculate **resonance** for multi-agent learning
✅ Track **temporal sequences** of snapshots
✅ Identify **axiom influence** in decisions

---

## Schema Validation

See `partitura_schema.json` for full JSON Schema validation.

Key constraints:
- `snapshot_id`: UUID or ISO timestamp
- `glyph`: One of 8 fixed values
- `layer`: CORE | CONTEXT | EPISODIC
- `channel`: >>~ | ~> | ≈ | ≠ | ~
- `strength`: 0.0–1.0

---

## Version History

- **v5.1** (2026) — Current: 8 glyphs, 3 layers, resonance engine
- **v0.1** (2025) — Legacy: 7 glyphs, simple node-edge graphs

---

For implementation guide, see `USAGE.md`
