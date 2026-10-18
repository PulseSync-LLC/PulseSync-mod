# Workbench: inputs and ledger

Command reference: `node toolset.js help migrate-sectors`. Baseline/target paths point to the root of an exact extracted build containing `package.json`, not to `app` or `_next`. `prepare` uses logical `targetFile`/`baseFile` paths (`app/...` or `main/...`); for flat layouts it maps `main/index.js` and `main/preload.js` to upstream files at the root. `ledger.targets[].file` is relative to the repository (`src/app/...`, `src/main/...`).

## Workspace files

| File | Purpose |
| --- | --- |
| `manifest.json` | Donor SHA, baseline/target versions and roots, hashes of supported snapshot text inputs and inventory |
| `inventory.json` | Immutable marker pairs, changed/added unmarked modules, complete changed/added files, and files removed by the donor |
| `ledger.json` | Editable sectors, substeps, and a disposition for each inventory ID |
| `PROGRESS.md` | Agent-maintained stages, completed substeps, commits, and validation limits |
| `work/Pxxxxx/` | Extracted inputs, diffs, and raw merge draft |
| `renderer-links.json` | Final static renderer audit report |

Inventory does not store every source file body: the donor is read from its saved commit, and baseline/target from their snapshot roots. Keep that commit and the snapshots until migration is complete. Hashes cover supported text formats, not native binaries, fonts, or images. Review added snapshot files separately; they do not retroactively become original inventory items.

New `inventory.moduleCandidates` entries cover dependencies of changed factories as well as patch owners. This lets `align` remap imports without version-specific ID constants. Older workspaces lacking this field still use owner candidates from items and a manual `moduleIds` map. Do not overwrite an original inventory to add this field.

Full-file reviews intentionally overlap marker/module items: they cover changes outside comments and module wrappers. Item counts do not equal feature counts or runtime checks. Record a disposition for each duplicate separately. Legacy migration inventories may use a different schema; the new tool does not import them automatically.

## Editing the ledger

Example after a manual port:

```json
{
  "id": "P00001",
  "sector": "player",
  "disposition": "ported",
  "targets": [{ "file": "src/app/_next/static/chunks/<new-chunk>.js", "module": "<new-id>" }],
  "note": "Ported local restore while preserving the new state format and account gates.",
  "commit": "<local-commit>"
}
```

Omit `module` for CSS/main/standalone JS. Reassign sectors to the actual owner; add sectors/substeps to `ledger.sectors` as needed while keeping IDs unique. Never delete or duplicate inventory IDs in `ledger.items`.

Dispositions:

- `pending`: not yet resolved; final check fails.
- `ported`: delta adapted; target paths and a semantic note are required.
- `upstream`: target upstream already provides the behavior; target paths and an equivalence explanation are required.
- `obsolete`: intentionally no longer needed; a note is required and target paths are optional. Do not use it to hide unresolved features or bypass the agreed scope.

Fill `commit` after an authorized local commit. It is a navigation field, not proof of GPG signing or CI success. `status` writes nothing. `check` validates structural completeness, not the semantic correctness of notes or decisions.

## Preparation and manual adaptation

```powershell
node toolset.js migrate-sectors prepare --workDir=analysis/ym-<new>-sectors --item=P00001 --targetFile=app/_next/static/chunks/<new>.js --targetModule=<new-id>
```

`--targetModule` is required when the selected file has multiple candidates. You may supply a manually verified correspondence absent from heuristic candidates. Pass module ID zero as `--targetModule=0`; the CLI normalizes it to a string.

- `base.txt`: old clean upstream module or file.
- `donor.txt`: old mod from Git.
- `target.txt`: new clean upstream.
- `mod.diff`: base → donor, including unmarked changes in the enclosing module.
- `upstream.diff`: base → target.
- `merge.txt`: output of `git merge-file --diff3 -p donor base target`; may contain conflicts. Even a conflict-free merge requires binding review.
- `selection.json`: chosen paths/module IDs and Git conflict count (127 means 127 or more).

Extracts use `.txt` because a webpack object property is not a standalone JS program. Wrap it in `({ ... })` for Babel parsing and account for the offset when applying text edits. Review the merge before applying it; do not execute extracted modules to determine correspondence.

To prepare again, rename the previous `work/Pxxxxx` with a meaningful suffix, preserving manual edits; the tool refuses to overwrite results. A fresh inventory requires a separate directory and newly frozen inputs, not changes to the old manifest/hash.

After preparing JS, use `align` for binding renames: [AST alignment and mapping overrides](alignment.md). For CSS/HTML, use the raw three-way diff. Large `missingDonorBindings` counts are expected when main has been heavily reorganized into separate services; the report does not replace manual main adaptation.

## Final audit

```powershell
node toolset.js migrate-sectors audit --workDir=analysis/ym-<new>-sectors
```

The audit reads current `src/app`, not the original target snapshot. It writes a workspace report and refuses to overwrite it: rename the old report with a meaningful suffix before rerunning. It supports the webpack push-table format of current desktop extracted builds. An unsupported loader/resolver is an error, not a zero-missing result.

Checks cover direct numeric webpack requires, available named export declarations, numeric lazy chunks, standard JS/CSS maps, and HTML/RSC static asset references. Unknown/dynamic exports and dynamic import IDs limit coverage; global identifiers are candidates for manual review. This does not analyze runtime branches, CSS layout, auth/subscription semantics, or playback. Loader URL resolvers alone are evaluated in an empty VM context with a timeout; other renderer code is not executed.
