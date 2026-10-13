# AGENTS.md

## Scope and working agreements

This file applies to the `PulseSync-mod` repository and describes its `dev` layout. The project modifies the Yandex Music desktop application; it is separate from PulseSync-client and the other sibling repositories.

- Confirm the Git root, current branch, and `git status --short` before editing. Do not switch branches or rewrite history merely because this guide describes `dev`.
- When working in the multi-project workspace, read [../AGENTS.md](../AGENTS.md) if present. Keep this file usable in a standalone checkout too: the essential project rules are included below.
- Follow applicable instruction files from the repository root to the working directory. An `AGENTS.override.md` takes precedence over `AGENTS.md` in the same directory. Do not create additional instruction files unless requested.
- Treat an implementation request as authorization to complete the relevant changes and validation. Keep inspection and plan-only requests read-only. Resolve routine choices without another approval round; ask only for blocking ambiguity or an action outside the authorized scope.
- Preserve unrelated edits, formatting changes, and generated artifacts. Keep patches in the responsible subsystem; avoid incidental refactors or explanatory comments for obvious code.
- Existing tests may be read and run. Do not create, modify, or expand tests unless the user explicitly requests test changes.
- Use subagents only when the user or applicable instructions explicitly request delegation.
- Reply in Russian unless asked otherwise. Report the change, validation, and any remaining limitation. End messages reporting an important change with an English Conventional Commit title. A suggested title does not authorize a commit or push; do those only when requested.

## Find the owner first

Prefer available codebase-memory MCP tools for structural discovery: confirm the indexed project, then use `search_graph`, `trace_path`, and `get_code_snippet`. Check relevant paths with `check_index_coverage`. If the graph is unavailable, stale, partial, or excludes the code, use direct source reads and `rg`; disclose the evidence limitation. Use `rg` directly for strings, configs, instructions, and generated chunks outside index coverage.

Identify the actual consumer and exact source tree before editing. `src/` is the active application tree; `extracted/<version>@...` is a separate snapshot. If the user names a snapshot, work on that exact version. Do not infer that a matching chunk in another version is equivalent.

| Area | Owner / source |
| --- | --- |
| CLI and build, extraction, migration, release workflows | `toolset.js`, `toolset/commands/`, `toolset/utils/` |
| Electron main process, windows, tray, IPC, native integrations | `src/main/` |
| Renderer assets, modified upstream application and bundled chunks | `src/app/`, including `src/app/_next/` |
| PulseSync renderer runtime, audio, DOM, events and features | `webModules/pulsesyncRuntime/src/` |
| WebHost, addon loading, isolated bridge, slots and system addons | `webModules/pulsesyncWebHost/src/` |
| Settings UI, schema, controls, integrations and navigation | `webModules/pulsesyncSettings/src/` |
| Mini-player React/Vite frontend | `webModules/miniplayer/src/` |
| Windows taskbar thumbnail and WASAPI helpers | `native/setIconicThumbnail/`, `native/wasapiExclusive/` |
| Data comparison and maintenance | `dataminer/`, `docs/`, `patches/` |

For settings, start with `schema/sections/` for declarations, `components/controls/` and `components/settings/` for shared UI, and `features/` for custom integrations. Prefer an existing shared control over a separate implementation.

## Source and build boundaries

- Edit `webModules/` sources for features owned there. WebHost imports `pulsesyncSettings/src/systemAddon.ts`; its production build includes the settings UI. A standalone settings build is not the deployed WebHost bundle.
- `pulsesyncWebHost` builds `dist/host.js`, `dist/host.css`, and `dist/isolated.js`. The toolset copies that output into the selected application tree at `app/pulsesync-web/`.
- `pulsesyncRuntime` builds `dist/runtime.js`; the toolset copies its output into the selected application tree at `app/pulsesync-runtime/`.
- Mini-player builds directly into `src/main/lib/miniplayer/renderer/`. Change its source in `webModules/miniplayer/`.
- The toolset's renderer build cache includes settings sources as an input to WebHost. Use the existing build/install flow in `toolset/utils/buildUtils.js` and `toolset/utils/commandTasks.js`; do not manually patch generated copies or force cache invalidation without a reason.
- `src/app/_next/` contains bundled upstream code that is deliberately edited by this mod. When the task belongs to a chunk, patch the exact active chunk narrowly and preserve its module/export and loading contracts. Do not rewrite bundler comma expressions merely to change formatter output.
- Preserve Electron initialization order, IPC/event contracts, and the boundaries between the renderer runtime, WebHost and isolated addon bridge. Do not add a second integration path for behavior already owned by one of them.
- Validate source changes and perform required generation for the requested deliverable. A local `dist/` build does not mean the installed application was updated; say which stage was completed.

## Setup and commands

Use the package scripts in the directory that owns the change. The toolset uses Yarn; keep the existing package manager and local lockfiles. Install dependencies only where needed, including `pulsesyncSettings` when building WebHost. Check installed dependency engine requirements rather than assuming an old Node version works.

The following are references, not a checklist to execute on every task:

| Working directory | Command | Purpose / effects |
| --- | --- | --- |
| Repository root | `node toolset.js help` or `node toolset.js help build` | Inspect CLI commands and flags |
| Repository root | `yarn dev` | Starts the integrated development workflow: Vite/HMR, watch builds and Electron restarts; may install missing module dependencies |
| `webModules/pulsesyncSettings/` | `yarn exec tsc -b`, `yarn lint` | Settings typecheck and Oxlint |
| `webModules/pulsesyncSettings/` | `yarn build` | Standalone settings preview build |
| `webModules/pulsesyncWebHost/` | `yarn build`, `yarn lint` | Production host and isolated bundles, including settings; Oxlint |
| `webModules/pulsesyncRuntime/` | `yarn build`, `yarn lint` | Runtime typecheck/bundle and Oxlint |
| `webModules/miniplayer/` | `yarn build`, `yarn lint` | Writes the mini-player renderer into `src/main/`; ESLint |
| `src/` | `yarn build` | Runs the Electron main-process TypeScript build |
| Repository root | `node toolset.js pretty --src=<path> --dest=<path>` | Formats an extracted application copy with Oxfmt; resolve source/destination before running |

Read the relevant script/command implementation before operations with external effects:

- `buildMod` passes `-d`; direct builds and `rebuildMod` can replace the installed application's archive. `rebuild` also requests opening the application. These are not ordinary typechecks.
- `buildModProd`, `buildModTest`, and `buildMin` use different minification/modernization/direct-build combinations. Inspect their definitions and `build` flags rather than choosing by name.
- `downloadLatest`, `onUpdate`, and `onUpdate:noAP` perform download/extraction/formatting/patching/rebuild stages. Run only the stages needed for the task.
- `release` and `src/` package scripts have publishing effects (`electron-builder --publish always` in `src/`). Publication requires authorization.
- Native package builds install dependencies and invoke `node-gyp`; use them only for relevant native work.

## Formatting and code style

Oxfmt is the formatter on `dev`. Use the nearest `.oxfmtrc.json`; do not reintroduce Prettier, dprint, or a formatter postprocessor unless the user requests a tooling change.

- Root and `src/`: 4 spaces, single quotes, semicolons, trailing commas, `arrowParens: always`, width 170.
- `webModules/miniplayer/` and `webModules/pulsesyncWebHost/` have their own configs: no semicolons, `arrowParens: avoid`, width 150. Settings and runtime currently inherit the root profile.
- Keep CommonJS in the toolset and existing TypeScript/ESM conventions in the web modules. Match surrounding naming and UI patterns.
- Format only relevant files. A repository-wide `oxfmt .` or `yarn format` can rewrite many bundled/historical files; inspect scope before running it. Additional grouping parentheses around sequence expressions are accepted Oxfmt output.
- Preserve the existing language of user-facing text, normally Russian. Do not translate logs, labels or documentation as an unrelated cleanup.

## Validation

- Use the smallest relevant existing checks. For toolset JS, syntax-check touched files and inspect the relevant CLI path. For modified chunks, check syntax at the exact path. For web modules, use the relevant lint/typecheck/build commands above.
- After settings changes, check settings itself and build WebHost when the task requires the production bundle. The settings preview alone does not verify integration into Yandex Music.
- The root `test` script is a placeholder that exits with an error. Do not present it as a useful test suite.
- Static checks establish syntax/types/buildability, not live playback, clipboard behavior, addon activation, installed-app behavior, CI success or publication. Report runtime checks only if actually performed; identify any missing proof.
- For documentation-only edits, check referenced paths, scripts, conflicting instructions and `git diff --check`. Do not start servers, build the app or run release workflows for prose changes.
- Stop once the scoped checks pass; broaden validation only for a concrete unresolved risk or required gate.

## Preserve local and historical data

- Leave dependency trees, native binaries, `.env`, `.idea`, downloaded assets and release artifacts alone unless the task requires them.
- Treat `extracted/`, `builds/`, `minified/`, `modernized/` and `temp/` as separate generated or historical trees. Never choose an arbitrary version or overwrite a snapshot as part of an unrelated fix.
- Do not rewrite historical `patches/` or release-facing `PATCHNOTES.md` unless the task concerns them. Change lockfiles only as part of requested dependency work.
- Cleanup must stay within explicitly targeted generated paths. Preserve `tools/` and `analysis/` if present unless their removal is requested. Never use a cleanup operation to erase unrelated local work.

## Code Review Rules

- Flag edits to a generated WebHost/runtime/mini-player bundle when the responsible source remains unfixed; fix the source and use its build flow.
- Flag changes to chunk module/export identifiers or asset references that leave consumers pointing at an incompatible bundle; verify the exact renderer entry and consumer together.
- Flag changes that cross Electron/renderer/isolated-addon boundaries without preserving the existing contract; use the established bridge for the requested surface.
- Flag claims of installed-app or release success supported only by compilation. Require evidence for the claimed stage; leave routine formatting checks to tooling.
