#!/usr/bin/env python3
"""
SES Partitura v5.1 — Validator

Usage:
    python validate.py <path-to-ses-json>

Validates a .ses.json file against the SES Partitura v5.1 schema.
Requires: pip install jsonschema
"""

import json
import sys
import os

def main():
    if len(sys.argv) < 2:
        print("Usage: python validate.py <path-to-ses-json>")
        sys.exit(1)

    file_path = sys.argv[1]

    if not os.path.exists(file_path):
        print(f"Error: File not found: {file_path}")
        sys.exit(1)

    # Load schema
    schema_path = os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        "schemas",
        "ses-partitura-v5.1.schema.json"
    )

    if not os.path.exists(schema_path):
        print(f"Error: Schema not found at {schema_path}")
        sys.exit(1)

    with open(schema_path, "r", encoding="utf-8") as f:
        schema = json.load(f)

    with open(file_path, "r", encoding="utf-8") as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"Error: Invalid JSON — {e}")
            sys.exit(1)

    # Try jsonschema validation
    try:
        from jsonschema import validate, ValidationError, Draft7Validator

        validator = Draft7Validator(schema)
        errors = sorted(validator.iter_errors(data), key=lambda e: list(e.path))

        if not errors:
            print(f"✅ VALID — {file_path}")
            print(f"   Type: {data.get('snapshot_type', '?')}")
            print(f"   Entity: {data.get('entity_id', '?')}")
            print(f"   Snapshot: {data.get('snapshot_id', '?')}")
            sys.exit(0)
        else:
            print(f"❌ INVALID — {file_path}")
            print(f"   {len(errors)} error(s) found:\n")
            for i, error in enumerate(errors, 1):
                path = " → ".join(str(p) for p in error.path) or "(root)"
                print(f"   {i}. [{path}] {error.message}")
            sys.exit(1)

    except ImportError:
        print("Warning: 'jsonschema' not installed. Running basic checks only.")
        print("Install with: pip install jsonschema\n")

        # Basic manual checks
        errors = []

        required_fields = ["initiator", "schema_version", "entity_id", "snapshot_id", "snapshot_type", "meta"]
        for field in required_fields:
            if field not in data:
                errors.append(f"Missing required field: {field}")

        if data.get("initiator") != "∮":
            errors.append(f"initiator must be '∮', got '{data.get('initiator')}'")

        if data.get("schema_version") != "5.1":
            errors.append(f"schema_version must be '5.1', got '{data.get('schema_version')}'")

        stype = data.get("snapshot_type")
        if stype not in ("FRACTAL_KERNEL", "STATE_SNAPSHOT", "COMBINED"):
            errors.append(f"Invalid snapshot_type: {stype}")

        if stype == "FRACTAL_KERNEL" and "kernel" not in data:
            errors.append("FRACTAL_KERNEL requires 'kernel' field")
        if stype == "STATE_SNAPSHOT" and "state" not in data:
            errors.append("STATE_SNAPSHOT requires 'state' field")
        if stype == "COMBINED":
            if "kernel" not in data:
                errors.append("COMBINED requires 'kernel' field")
            if "state" not in data:
                errors.append("COMBINED requires 'state' field")

        if stype == "STATE_SNAPSHOT":
            meta = data.get("meta", {})
            if not meta.get("kernel_ref") and not meta.get("kernel_hash"):
                errors.append("STATE_SNAPSHOT must reference kernel via meta.kernel_ref or meta.kernel_hash")

        if errors:
            print(f"❌ INVALID — {file_path}")
            for e in errors:
                print(f"   • {e}")
            sys.exit(1)
        else:
            print(f"✅ BASIC CHECKS PASSED — {file_path}")
            print(f"   Type: {stype}")
            print(f"   Entity: {data.get('entity_id', '?')}")
            print(f"   (Install jsonschema for full validation)")
            sys.exit(0)


if __name__ == "__main__":
    main()
