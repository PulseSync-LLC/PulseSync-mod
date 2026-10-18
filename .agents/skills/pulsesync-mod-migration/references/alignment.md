# AST alignment

Run `prepare`, then:

```powershell
node toolset.js migrate-sectors align --workDir=analysis/ym-<new>-sectors --item=P00001
```

Results go to a new `work/P00001/aligned/auto/` directory. Original `base.txt`, `donor.txt`, `target.txt`, `merge.txt`, `src`, and ledger remain unchanged. Use a different run name for another attempt with manual refinements:

```powershell
node toolset.js migrate-sectors align --workDir=analysis/ym-<new>-sectors --item=P00001 --mapping=analysis/ym-<new>-sectors/mapping.json --run=reviewed
```

## Tool behavior

1. Selects a module ID map. An exact upstream body match takes priority among candidates; otherwise the best score must be ≥ 0.7 with a margin ≥ 0.15. Unambiguous `ported/upstream` ledger targets override candidates; manual mappings override those. The owner ID comes from the `prepare` selection. Similarity is a heuristic, not a probability. Decisions and their sources are recorded.
2. Rewrites only numeric calls to the actual webpack require binding in base and donor. Shadowed parameters with the same name and unrelated numbers are preserved. `require.e` uses a separate chunk ID map. Export maps support namespace aliases, direct `require(id).export`, destructuring imports, and `require.d(exports, ...)`. Exact string replacements require an explicit map.
3. Matches factory parameters by role/position, declarations by unique alpha-normalized shape, then equally sized short gaps between anchors (up to 20 root bindings or 8 nested bindings). Shapes retain static property names, literals, unbound globals, and distinct binding references. Gap and owner matches are marked as drafts.
4. Matches nested scopes by matched owners or unique shape, reporting ambiguous callback/block scopes. Destructured parameters/locals are identified by property role or array position. Missing donor scopes/bindings are reported rather than invented.
5. Renames through Babel binding objects. Expands shorthand while preserving public object keys, including `{ value = default }`. Assigns unique `pulseSyncMigration_*` names to conflicting bindings to prevent collisions and captures. Supports cyclic name swaps; labels, noncomputed member names, and strings are not renamed as variables.
6. Reparses output and compares the alpha-normalized AST before and after the **binding-only** stage. Structural or binding changes cause failure before the run is written. Intentional module/export/string contract edits are reviewed separately in diffs.
7. Infers a module's own renamed exports from uniquely matched root bindings referenced by getters. Dependency exports use the supplied map; complex/ambiguous own getters appear in `unresolvedOwnExports`.
8. Produces aligned diffs and a three-way merge. Conflict counts do not prove correspondence. The alpha check verifies structural preservation of renaming, not equivalence between upstream versions or dynamic string-based name lookup.

## Run files

| File | Purpose |
| --- | --- |
| `base.aligned.txt` | Clean old base using new names and configured contract IDs |
| `donor.aligned.txt` | Old mod with the same transformations |
| `target.txt` | Original new input |
| `mod.aligned.diff` | Mod delta after alignment |
| `upstream.aligned.diff` | New upstream changes relative to the aligned base |
| `merge.aligned.txt` | Raw three-way draft using aligned inputs |
| `bindings.json` | Scope/binding map, module map provenance, captures, unresolved entries, input hashes, and conflicts |
| `mapping.template.json` | Map to copy and refine for the next run |

Compare the aligned delta with original `mod.diff`: preserve upstream additions, guards, and new initializer calls. Review every `order-gap-draft`, `owner-draft`, `similarity-draft`, unresolved, and missing entry before porting code into `src`. Read each `captureRenames` entry: its unique name preserves bindings but may need manual reconciliation with the target.

## Manual map

Copy `mapping.template.json` to a separate JSON file alongside the workspace. Example schema with illustrative IDs:

```json
{
  "moduleIds": { "100": "200" },
  "chunkIds": { "10": "20" },
  "exports": { "100": { "Old": "New" } },
  "strings": { "OldComponent_root__abc": "NewComponent_root__def" },
  "bindings": [
    { "scope": "root", "from": "oldComponent", "to": "newComponent" },
    { "scope": "root/binding:oldComponent@0", "from": "oldLocal", "to": "newLocal", "donor": "oldLocal" }
  ],
  "scopes": [
    { "from": "root/binding:oldComponent@0", "to": "root/binding:newComponent@0", "donor": "root/binding:oldComponent@0" }
  ]
}
```

Copy exact `scope` selectors from `bindings.json`; do not infer them from function names. `from/to` refer to base/target; `donor` can specify a different old-mod name or scope. `bindings[].scope` defaults to `root`. Unknown names, missing manual donor bindings, incompatible scopes, multiple bindings mapped to one name, and owner IDs contradicting the selection cause errors.

`exports` is keyed by the **old module ID**, before `moduleIds` is applied. Review the corresponding dependency before mapping its exports: an identically named getter alone does not prove equivalence. Own export inference is recorded in `inferredOwnExports` and included in the next template. Reuse `moduleIds`, `chunkIds`, `exports`, and `strings` across items as appropriate; `bindings/scopes` belong to a specific input triple and must be reviewed for each module.

Inspect same-ID reuse carefully: correspondence must preserve the module's purpose, not merely refer to an existing number. If upstream changed the architecture or replaced a function/class, leave unresolved parts for manual adaptation. The tool prepares a draft; business-logic porting and runtime regression fixes require review beyond AST similarity.
