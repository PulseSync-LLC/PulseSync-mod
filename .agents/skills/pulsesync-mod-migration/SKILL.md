---
name: pulsesync-mod-migration
description: Migrate PulseSync-mod to an extracted Yandex Music build by sectors, preserving commented and unmarked mod changes across main, renderer, webpack modules and CSS. Use for planning or implementing upstream version ports in this repository.
---

# PulseSync-mod migration

Respond to the user in Russian. Work from the `PulseSync-mod` Git root. Use three inputs: the clean old upstream, the committed old mod, and the clean new upstream. After the user's sync, current `src` is the migration destination; retrieve old features from the donor.

## Start or resume

1. Read repository instructions; check root, branch, status, and recent commits. Preserve others' edits. Create branches, commit, or push only within the user's current authorization; this skill grants none of those permissions itself.
2. On resume, find the existing `analysis/<migration>` directory and read its manifest, ledger, and progress. Legacy workspaces may have `inventory.json`, `port-ledger.json`, and `PROGRESS.md` without a manifest: continue from them; the new CLI does not import that schema. Do not rerun `init` over existing work or rebuild the old inventory from already synced `src`.
3. Derive the baseline from **the old donor's** `src/package.json → modification.realYMVersion`, not `package.json.version` or a version assumed in the request. Verify the exact `extracted/<version>@pretty` snapshots, including `app`, `package.json`, and main-process code. Clean extracted builds often place `index.js`/`preload.js` at the root; the mod uses `src/main/`. Treat a sync already performed by the user as completed work.
4. Use codebase-memory for structural discovery when available. Generated `_next` assets and snapshots often lack index coverage: check coverage, then read the exact files directly. Graph absence is not evidence that a feature is absent.

## Tools

Run these commands from the repository root with an installed Node executable. If the Yarn shim fails, invoke Node directly; use local `node_modules` dependencies.

```powershell
node toolset.js migrate-sectors init --donor=<old-mod-ref> --baseline=extracted/<old>@pretty --target=extracted/<new>@pretty --workDir=analysis/ym-<new>-sectors
node toolset.js migrate-sectors status --workDir=analysis/ym-<new>-sectors
node toolset.js migrate-sectors status --workDir=analysis/ym-<new>-sectors --sector=player
node toolset.js migrate-sectors prepare --workDir=analysis/ym-<new>-sectors --item=P00001 --targetFile=app/_next/static/chunks/<chunk>.js --targetModule=<new-id>
node toolset.js migrate-sectors align --workDir=analysis/ym-<new>-sectors --item=P00001
node toolset.js migrate-sectors align --workDir=analysis/ym-<new>-sectors --item=P00001 --mapping=analysis/ym-<new>-sectors/mapping.json --run=reviewed
```

`init` reads the donor directly from Git and records its full commit SHA and input hashes. It leaves the checkout, app/main sync, and application checks untouched. It writes only to a new subdirectory of `analysis/` and refuses to overwrite existing workspaces or prepared items.

`inventory.json` and `manifest.json` define the original inputs. Edit `ledger.json` to record sectors, dispositions, target paths, semantic notes, and local commits. Candidates and automatic sector assignments are heuristics. All discovered copies are retained; an unchanged module ID does not guarantee an unchanged purpose. Read [references/workbench.md](references/workbench.md) for ledger and preparation details.

`align` implements the AST workflow used during the manual migration: imports/module IDs, parameters, unique declaration shapes, short gaps between anchors, nested scopes, and capture protection. It writes aligned inputs, diffs, a merge draft, and `bindings.json` into a separate run; it does not apply them to `src`. For this operation, read [references/alignment.md](references/alignment.md) for manual mappings and ambiguity handling.

Existing `migrate-report` and `migrate-todo` commands help inspect main/preload/events and feature anchors. Always supply the baseline explicitly: their historical default does not describe the current mod version. If the renderer is already synced, their `--srcRoot` must point to the old mod; these commands do not read a Git donor. Use this overview alongside the complete patch inventory.

## Sectors and substeps

Start with this sequence and adjust boundaries to actual dependencies:

| Sector | Substeps |
| --- | --- |
| 0. Main | New upstream lifecycle/IPC/preload; mod services; bridge compatibility |
| 1. Bootstrap | Loader; entry points; runtime/WebHost source contracts |
| 2. Resources/models | Resource hooks; metadata/replacements; models and all route copies |
| 3. Store/flows | Lyrics/providers/cache; upload/import/retry; settings/experiments |
| 4. Player/audio | Desktop/player state; audio graph; Ynison/local restore/auth gates |
| 5. Native UI | Hosts/slots; menus/settings/titlebar; player/fullscreen/lyrics/cast |
| 6. Wave/CSS | Worker/animation; wave controls; CSS and JS bindings; assets/maps |
| 6.4. Review | Unmarked changes; complete file deltas; all duplicates |
| 7. Final | Port completeness; checks; builds; separate runtime smoke evidence |

Before porting, create `PROGRESS.md` in the workspace: stages, substeps, the completed sync boundary, current sector, next action, and local commits. If the user requested tests at the end, defer **all** syntax/lint/typecheck/build/tests/runtime checks until stage 7. AST parsing for inventory and diff preparation is analysis, not evidence that checks passed. Do not create new test files without an explicit request.

For each substep:

1. Read `mod.diff` (base → donor) and `upstream.diff` (base → target), including changes outside comments. `file-review` covers edits outside marked blocks; a marked module may also contain unmarked changes.
2. Identify the new owner by purpose, exports, dependencies, and callers. Compare multiple candidates for renamed or reused IDs. Confirm each route copy separately.
3. `prepare` extracts the entire enclosing module for marker/unmarked-module items, or the entire file for file-review/CSS items. With multiple candidates, specify the exact file and module ID; `--baseFile` selects a different baseline path. Handle new modules and deleted files manually when one of the three inputs is missing.
4. Run `align` for JS and review `bindings.json`, `mod.aligned.diff`, `upstream.aligned.diff`, and `merge.aligned.txt`. Resolve ambiguous module IDs/exports/scopes/bindings with `--mapping` and a new `--run`. The tool checks alpha-normalized AST preservation during binding renames; correspondence to the new upstream remains a draft, and gap/owner/similarity heuristics require review. Preserve new fields, initializer order, diagnostics, and guards while porting the mod delta. `prepare`'s `merge.txt` remains a raw comparison. Adapt CSS/HTML manually using the three inputs. Never rename identifiers with global text replacement.
5. Edit the owning layer: `webModules` for runtime/WebHost/settings, the exact `_next` chunk for bundled upstream code, and `src/main` for Electron. Fix WebHost/runtime sources before generating their bundles. Format only owned code; do not reformat entire large upstream chunks.
6. Update ledger and progress after each logical block. `ported` records a code transfer, not successful runtime behavior. When local commits are authorized, save completed substeps separately and follow the current signing policy. End messages reporting important changes with an English Conventional Commit title.

## Contracts with previous regressions

- Ynison: queue/position persistence and restoration have a lifecycle separate from the network connection. Check delayed authorization/subscription, both experiment modes, empty initial state, and plugin application order. Preserve auth/subscription gates when repairing restoration.
- Cast: the regular player bar must keep lyrics and show Cast beside it when enabled; only the wave controls swap lyrics and Cast. Reading a global getter alone does not subscribe the parent to setting changes. Enabling the setting and connecting to a speaker are separate states.
- CSS: review spacing, labels, current class mappings, and markup together. Porting CSS or JS alone can leave clipping and duplicate controls.
- Main entry/bootstrap, webpack maps/lazy chunks, HTML/RSC assets, and build IDs belong to the target upstream. Port the required delta while retaining the new upstream file structure.

## Final stage

After all sectors have been ported, run:

```powershell
node toolset.js migrate-sectors check --workDir=analysis/ym-<new>-sectors
node toolset.js migrate-sectors audit --workDir=analysis/ym-<new>-sectors
```

`check` verifies unchanged snapshot inputs, original marker issues, dispositions, and target files/modules. `audit` checks static renderer module/export/lazy/asset references. Either command can fail; neither establishes application behavior.

Then check touched JS/JSON/CSS syntax, current marker balance, `git diff --check`, relevant existing checks, and source builds from package scripts. Install production runtime/WebHost outputs through the existing toolset build flow when required by the deliverable. Main may currently be JS: verify that a suitable tsconfig exists before running `tsc`. Inspect publishing/direct-install/rebuild commands before selecting one by name.

Update `modification.realYMVersion` after the app/main port is consistent. In the final report, distinguish ledger completeness, static/build evidence, and actual runtime smoke evidence. Explicitly list unverified cold start/restore, playback, UI/settings, cast, and platform-specific audio features. Keep work artifacts in `analysis/`; preserve preparation history, snapshots, and tools.
