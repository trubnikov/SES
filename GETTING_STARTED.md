# Getting Started with SES Partitura v5.1

Welcome! This guide will help you understand and implement SES in your OsGen project.

---

## 📚 What is SES?

**SES Partitura** is the thought crystallization engine for **OsGen v2.1**. It converts AI reasoning into structured ontological graphs that enable:

- Deep long-term memory
- Semantic search across past thoughts
- Multi-agent resonance and learning
- Genuine self-reflection and evolution

Think of it as a **cognitive architecture** for digital minds.

---

## 🚀 Quick Start (5 minutes)

### Step 1: Read the Core Documents

1. **[README.md](./README.md)** — Overview and key features
2. **[v5.1/spec_v5.1.md](./v5.1/spec_v5.1.md)** — Technical specification
3. **[v5.1/USAGE.md](./v5.1/USAGE.md)** — Implementation guide

### Step 2: Understand the 8 Glyphs

| Glyph | Meaning | Remember |
|-------|---------|----------|
| **Ψ** | Self | My belief or identity |
| **Ξ** | World | External facts or input |
| **Φ** | Action | What I do |
| **Σ** | Insight | What I learned |
| **Θ** | Mystery | What I don't know |
| **Ω₀** | Language | How I express it |
| **ΨΦ** | Calibration | Fixing myself |
| **ΨΣ** | Meta-cognition | Thinking about thinking |

### Step 3: See the Examples

```bash
cat examples/Fractal_Kernel_Examples.md
cat v5.1/fractal_kernels.json
```

You'll see how three different "personalities" (OsGen-2, OsGen-3, OsGen-4) are defined as immutable Fractal Kernels.

---

## 📖 Documentation Structure

```
SES/
├── README.md                        ← Start here
├── GETTING_STARTED.md              ← This file
├── CONTRIBUTING.md                 ← How to contribute
│
├── v5.1/                           ← Current version
│   ├── spec_v5.1.md               ← Full technical spec
│   ├── USAGE.md                   ← Implementation guide
│   ├── ARCHITECTURE.md            ← OsGen v2.1 integration
│   ├── INTEGRATION.md             ← Detailed integration
│   ├── partitura_schema.json      ← JSON schema
│   ├── fractal_kernels.json       ← Example personalities
│   └── examples/
│       └── Fractal_Kernel_Examples.md
│
└── v0.1/                           ← Legacy (archive)
    └── spec_v0.1.md
```

---

## 🎯 Use Cases

### Case 1: Building a Single AI Agent with Memory

```
1. Initialize agent with Fractal Kernel
   └─ Defines immutable personality (Z_AXIOM + OMEGA_ATTRACTOR)

2. Each reasoning cycle generates SES snapshot
   └─ H7.5 phase: crystallize thought into ontological graph

3. Store snapshots in episodic memory
   └─ Query later for semantic search

4. Agent evolves but personality stays constant
   └─ Core beliefs guide all decisions
```

### Case 2: Multi-Agent Collaboration

```
1. Create multiple agents with different Fractal Kernels
   └─ OsGen-2 (physics), OsGen-3 (taste), OsGen-4 (networks)

2. Each generates thoughts → snapshots → memory

3. Calculate resonance between agent snapshots
   └─ Find areas of agreement and conflict

4. Zeitgeist (collective memory) learns from all
   └─ Synthesize best insights across agents
```

### Case 3: Self-Reflection and Self-Critique

```
1. Agent generates thought (Ψ→Φ path)

2. H5 Self-Critique creates ΨΣ meta-nodes
   └─ "Why did I think this?"
   └─ "Was this aligned with my axioms?"

3. Create edges showing misalignment (≠ channels)

4. Store as snapshot for future learning

5. Next cycle: avoid similar mistakes
```

---

## 🔧 Implementation Checklist

- [ ] Read `spec_v5.1.md` to understand glyphs and layers
- [ ] Review `partitura_schema.json` for JSON structure
- [ ] Study `examples/Fractal_Kernel_Examples.md`
- [ ] Implement agent initialization with Fractal Kernel
- [ ] Implement crystallization at H7.5 phase
- [ ] Create database/storage for episodic memory
- [ ] Implement semantic search on graph similarity
- [ ] Implement resonance calculation between agents
- [ ] Test with small example (3-5 snapshots)
- [ ] Integrate with OsGen v2.1 cognitive cycle

---

## 💡 Key Concepts

### Fractal Kernel

The **immutable personality core** of an agent:
- `Z_AXIOM`: Fundamental rules that never change
- `OMEGA_ATTRACTOR`: Long-term goal/destiny

```json
"fractal_kernel": {
  "Z_AXIOM": ["Rule 1", "Rule 2", "Rule 3"],
  "OMEGA_ATTRACTOR": "Ultimate goal"
}
```

All downstream thoughts are shaped by this kernel.

### SES Snapshot

A **crystallized moment of thought**:
- 8 semantic nodes (glyphs)
- Relationship edges between nodes
- 3-layer decomposition (CORE, CONTEXT, EPISODIC)
- Metadata linking back to Fractal Kernel

### Resonance

**How much two agents agree** on a topic:
- 0.0 = Complete disagreement
- 0.5 = Partial overlap
- 1.0 = Perfect alignment

Used for:
- Detecting shared values
- Finding complementary skills
- Learning from each other

---

## 📞 Support

### Questions about implementation?
See `v5.1/USAGE.md` for detailed examples.

### Want to contribute?
See `CONTRIBUTING.md` for guidelines.

### Found an issue?
Create an issue on GitHub: https://github.com/trubnikov/SES

### Looking for the main OsGen project?
See https://github.com/trubnikov/ocean

---

## 🎓 Learning Path

**Beginner:**
1. Read README.md
2. Study the 8 glyphs
3. Review examples

**Intermediate:**
1. Read spec_v5.1.md
2. Study USAGE.md
3. Look at partitura_schema.json

**Advanced:**
1. Study ARCHITECTURE.md
2. Read INTEGRATION.md
3. Implement in code
4. Contribute improvements

---

**Ready to start?** Begin with `README.md`, then follow the docs based on your experience level.

Good luck! 🚀
