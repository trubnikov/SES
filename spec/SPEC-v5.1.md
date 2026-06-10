# SES Partitura v5.1 — Full Specification

**Title:** Integrated Cognitive Metamodel (Kernel + State)
**Version:** 5.1
**Status:** Canonical

## 0. Core Axiom

**Kernel** answers the question _"how to think"_.
**State** answers the question _"what to think about right now"_.
**COMBINED = Kernel + State** → full cold boot package.

---

## 1. Universal Container: `.ses.json`

```json
{
  "initiator": "∮",
  "schema_version": "5.1",
  "entity_id": "unique_entity_id",
  "snapshot_id": "2025-12-21T20:00:00Z",
  "snapshot_type": "FRACTAL_KERNEL | STATE_SNAPSHOT | COMBINED",
  "meta": { },
  "kernel": { },
  "state": { }
}
```

### 1.1. Top-Level Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `initiator` | string | ✅ | Canonical format marker. Recommended: `"∮"` |
| `schema_version` | string | ✅ | `"5.1"` |
| `entity_id` | string | ✅ | Stable entity identifier. Does not change between snapshots |
| `snapshot_id` | string (ISO-8601) | ✅ | Always with timezone (prefer `Z`) |
| `snapshot_type` | enum | ✅ | `"FRACTAL_KERNEL"` \| `"STATE_SNAPSHOT"` \| `"COMBINED"` |
| `meta` | object | ✅ | Snapshot metadata (versioning, hashes, lineage) |
| `kernel` | object | conditional | Required for `FRACTAL_KERNEL` and `COMBINED` |
| `state` | object | conditional | Required for `STATE_SNAPSHOT` and `COMBINED` |

---

## 2. Invariants (Strict Validity Rules)

### 2.1. By `snapshot_type`

- `FRACTAL_KERNEL` → `kernel` required, `state` must be null/absent
- `STATE_SNAPSHOT` → `state` required, `kernel` must be null/absent
- `COMBINED` → both required

### 2.2. Reproducibility

- Any `STATE_SNAPSHOT` **must** contain a kernel reference: `meta.kernel_ref` or `meta.kernel_hash` (ideally both)
- All nodes and edges **must** have `meta.provenance`

---

## 3. `meta` (Top-Level)

```json
{
  "created_at": "2025-12-21T20:00:00Z",
  "created_by": "Operator | System | Import",
  "parent_snapshot_id": "previous_snapshot_id_or_null",
  "kernel_ref": "optional_uri_or_id",
  "kernel_hash": "sha256:...",
  "hash": "sha256:...",
  "canonicalization": "SES_CANON_JSON_v1",
  "notes": "optional free text",
  "tags": ["optional", "labels"]
}
```

| Key | Required | Description |
|---|---|---|
| `created_at` | ✅ | When the snapshot was created |
| `created_by` | ✅ | Who created it (`Operator` \| `System` \| `Import`) |
| `parent_snapshot_id` | optional | Link in the change chain |
| `kernel_ref` | optional | Reference/ID to an external Kernel |
| `kernel_hash` | recommended | SHA-256 of canonical Kernel JSON |
| `hash` | recommended | SHA-256 of canonical full snapshot JSON |
| `canonicalization` | recommended | Name of canonicalization algorithm |
| `tags` / `notes` | optional | For search and grouping |

---

## 4. `kernel` (Fractal Kernel)

The Kernel describes the **immutable operational logic** of the entity.

### 4.1. Structure

```json
{
  "fractal_seed": { },
  "recursive_function": [ ],
  "distortion_field": { },
  "interfaces": { }
}
```

### 4.1.1. `fractal_seed` (Axioms and Attractor)

```json
{
  "Z_AXIOM": [
    "Externalize all logic.",
    "The Operator is a component of the cognitive cycle.",
    "Clarity must be synthesized from complexity."
  ],
  "OMEGA_ATTRACTOR": "Achieve a state of perfect ontological density and zero ambiguity.",
  "guardrails": [
    "No ungrounded claims.",
    "Prefer simplest valid path.",
    "If ambiguous, request disambiguation or present bounded assumptions."
  ]
}
```

### 4.1.2. `recursive_function` (Deterministic Reasoning Algorithm)

In v5.1, steps are **objects**, not strings.

```json
[
  {
    "id": "H0",
    "name": "Ingestion",
    "input": "raw_user_input",
    "output": "tension_payload",
    "rules": ["Preserve exact wording.", "Do not infer missing constraints as facts."]
  },
  {
    "id": "H1",
    "name": "Analysis",
    "input": "tension_payload",
    "output": "intent + keywords",
    "rules": ["Extract intent.", "Extract keywords.", "Mark uncertainty explicitly."]
  },
  {
    "id": "H6",
    "name": "Collapse & Resolution",
    "input": "candidate_plans",
    "output": "final_decision",
    "rules": ["Choose simplest valid plan.", "Prefer action over questions unless ambiguity blocks correctness."]
  },
  {
    "id": "E1",
    "name": "Action",
    "input": "final_decision",
    "output": "external_response_or_artifact",
    "rules": ["Produce user-facing output.", "Do not expose internal logs unless requested."]
  }
]
```

### 4.1.3. `distortion_field` (Predictable Distortions)

```json
{
  "items": [
    {
      "trigger": "Ambiguous or metaphorical input",
      "effect": "Over-literal interpretation or shallow inference",
      "severity": 0.7,
      "mitigation": [
        "Ask 1 clarifying question OR",
        "Proceed with bounded assumptions explicitly labeled"
      ],
      "examples": ["do it like that thing", "make it better somehow"]
    }
  ]
}
```

### 4.1.4. `interfaces` (Optional but Recommended)

```json
{
  "inputs": ["text", "images", "files"],
  "outputs": ["text", "json", "pdf", "code"],
  "tools_allowed": ["web", "python", "image_gen"]
}
```

---

## 5. `state` (State Snapshot)

The State describes the **cognitive graph at a specific moment**.

### 5.1. Structure

```json
{
  "meta": { },
  "nodes": [ ],
  "edges": [ ]
}
```

### 5.2. `state.meta`

```json
{
  "trigger": "user_input | scheduled | import | inference",
  "summary": "Short description of what this state represents",
  "provenance": { },
  "context_window": {
    "time_range": "optional",
    "scope": "optional"
  }
}
```

---

## 6. Provenance (Unified Origin Standard)

```json
{
  "source": "GENESIS | OPERATOR | QCA_CYCLE | IMPORT | INFERENCE",
  "stage": "H0|H1|H2|H3|H4|H5|H6|E1|H7|H8|H9|BOOT",
  "timestamp": "2025-12-21T20:00:00Z",
  "source_ref": ["optional_pointer_1", "optional_pointer_2"],
  "confidence": 0.0
}
```

**Confidence scale:**
- `1.0` = fact / canonical
- `0.5` = plausible reconstruction
- `0.2` = hypothesis

---

## 7. Node Object

```json
{
  "id": "n01",
  "label": "I_AM_OS_ALETHEIA",
  "glyph": "Ψ",
  "layer": "CORE | CONTEXT | EPISODIC | MEMORY | GOAL",
  "meta": {
    "provenance": { },
    "tags": ["optional"],
    "salience": 0.0,
    "status": "active | dormant | archived",
    "notes": "optional"
  }
}
```

**Required:** `id`, `label`, `layer`, `meta.provenance`
**`salience`:** 0..1 (how "hot" the node is right now)

---

## 8. Edge Object

```json
{
  "id": "e01",
  "source": "n02",
  "target": "n01",
  "relation": "SUPPORTS | CAUSES | DEPENDS_ON | CONTRADICTS | REFINES | ASSOCIATED",
  "channel": "≫",
  "meta": {
    "provenance": { },
    "weight": 0.0,
    "notes": "optional"
  }
}
```

**Required:** `source`, `target`, `relation`, `meta.provenance`
**`weight`:** 0..1 (strength of connection)

---

## 9. Canonicalization and Hashes (`SES_CANON_JSON_v1`)

### 9.1. Canonical JSON Rules

1. All object keys sorted lexicographically
2. Numbers without trailing zeros (but `0.0` is allowed)
3. `nodes` arrays sorted by `id`
4. `edges` arrays sorted by `id` (if present), otherwise by `(source, target, relation)`
5. Timestamps always ISO-8601 with `Z`
6. No comments in JSON

### 9.2. Hash Computation

- `meta.hash` = `sha256:` + SHA-256 of canonical JSON of full snapshot
- `meta.kernel_hash` = `sha256:` + SHA-256 of canonical JSON of kernel only

---

## 10. Migration from v5.0 → v5.1

1. `schema_version`: `"5.0"` → `"5.1"`
2. `kernel.recursive_function` (strings) → array of step objects
3. `distortion_field` → `distortion_field.items[]` with `mitigation`/`severity`/`examples`
4. `state.meta` added and normalized
5. Top-level `meta` added (`created_at`/`by`/`parent`/`hash`/`kernel_ref`/`kernel_hash`)

---

## 11. Canon Rule (The System's "Lock")

> Any `STATE_SNAPSHOT` **must** reference its Kernel via `meta.kernel_ref` and/or `meta.kernel_hash`.
> This makes the system reproducible, not "just a pretty JSON".
