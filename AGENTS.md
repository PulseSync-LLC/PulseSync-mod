# AGENTS.md

## Purpose
- This repository contains `PulseSync-mod`, a modification layer for the Yandex Music desktop application.
- The project mixes several kinds of code in one repo:
  - application source files for the desktop client
  - injected renderer-side mod code
  - Electron main-process code
  - a separate mini-player frontend
  - maintenance, extraction, migration, and release tooling
- Before making changes, identify which subsystem the task belongs to and stay inside that scope.

## How To Work In This Repo
- Prefer small, targeted changes over broad refactors.
- Preserve the current architecture and naming unless the task explicitly asks for restructuring.
- Do not “clean up” unrelated files while working on a focused request.
- Follow the formatting and style already used in the specific directory you modify.
- When behavior is unclear, inspect nearby files first and copy the local pattern.

## Repository Map

### Root
- `package.json` contains the main toolset scripts for extracting, patching, rebuilding, and releasing the mod.
- `toolset.js` is the CLI entrypoint for internal automation commands.
- `toolset/` contains the implementation of those commands and shared utilities.
- `README.md` describes the project from the product/user perspective.
- `PATCHNOTES.md` is release-facing documentation and should only be changed when the task is related to release notes or user-visible changelog content.

### Desktop App Sources
- `src/` contains the unpacked Yandex Music desktop app source used by the modding workflow.
- `src/main/` is the Electron main-process area.
  - This is where app lifecycle, windows, tray/menu integration, background tasks, updaters, handlers, and native integrations live.
- `src/app/` is the renderer/web app side.
  - It includes static HTML/text assets and injected browser-side scripts such as `pulsesync.js`.
- Treat `src/` as production application code. Changes here should be deliberate and minimal because they affect the shipped app.

### Mini-player
- `miniplayer/` is a separate React + Vite project.
- It has its own `package.json`, ESLint config, Prettier config, and frontend code under `miniplayer/src/`.
- Changes here should follow the local style rather than the root app style.

### Native / Utilities / Maintenance
- `native/setIconicThumbnail/` contains a native helper package.
- `dataminer/` contains utilities for mining or comparing data across versions.
- `docs/migrations/` contains migration-related documentation.
- `patches/` contains patch artifacts and patch-related files. Do not casually rewrite historical patch files without a task-specific reason.

### Historical / Large Trees
- `extracted/` contains extracted application snapshots for many versions.
- `builds/` contains build outputs or build-related artifacts.
- These directories are large, semi-generated, and often historical. Only touch them if the task explicitly targets them.

## Files And Directories To Avoid Editing By Default
- Do not edit vendored or generated content unless the task explicitly requires it:
  - `node_modules/`
  - `src/node_modules/`
  - `miniplayer/node_modules/`
  - `builds/`
  - `extracted/`
- Avoid modifying environment or local-machine files unless requested:
  - `.env`
  - `.idea/`
  - release artifacts
  - downloaded binaries
- Do not update lockfiles, generated bundles, or extracted snapshots unless they are part of the requested work.

## Style And Formatting Rules

### Root And `src/`
- The root project and `src/` use the same Prettier style:
  - 4-space indentation
  - semicolons enabled
  - single quotes
  - trailing commas
  - `arrowParens: always`
  - wide line length (`printWidth: 170`)
- Use the existing CommonJS / current JavaScript style where present.
- Keep surrounding code style intact instead of partially converting files to another style.

### `miniplayer/`
- `miniplayer/` uses a different formatting profile:
  - 4-space indentation
  - no semicolons
  - single quotes
  - trailing commas
  - `arrowParens: avoid`
  - narrower `printWidth`
- Respect the local React/Vite frontend conventions in this subtree.

### Language And Text
- Match the surrounding language for logs, labels, and UI copy.
- This repository uses both English and Russian, but user-facing strings and console output are often Russian.
- Do not translate existing text unless the task asks for it.

## Build And Tooling Commands

### Root Toolset
- Main entry:
  - `node toolset.js help`
- Common scripts from the root `package.json`:
  - `npm run buildMod`
  - `npm run buildModProd`
  - `npm run rebuildMod`
  - `npm run buildModTest`
  - `npm run buildMin`
  - `npm run downloadLatest`
  - `npm run migrateReport`
  - `npm run migrateTodo`

### `src/`
- Build command:
  - `cd src && npm run build`

### `miniplayer/`
- Development/build commands:
  - `cd miniplayer && npm run dev`
  - `cd miniplayer && npm run build`
  - `cd miniplayer && npm run lint`

## Validation Strategy
- Validate only the area you changed.
- Start with the smallest useful command before running expensive workflows.
- Good examples:
  - for `toolset/` changes, start with `node toolset.js help` or another targeted command path
  - for `miniplayer/` changes, use `cd miniplayer && npm run lint` and/or `npm run build`
  - for `src/` changes, use `cd src && npm run build` when the edited code affects the packaged app flow
- Avoid heavy workflows unless they are necessary for the task:
  - full rebuilds
  - extraction runs
  - release scripts
  - download/update pipelines
- The root `npm test` script is intentionally not useful here; do not rely on it as validation.

## Editing Guidance By Area

### When Editing `toolset/`
- Keep commands and utilities composable.
- Prefer reusing existing helper modules under `toolset/utils/` or adjacent command patterns.
- Do not change command names, CLI flags, or release behavior unless required.

### When Editing `src/main/`
- Be careful with startup flow, event wiring, updaters, window lifecycle, tray logic, and native integrations.
- Preserve existing initialization order unless the task specifically involves startup behavior.
- Avoid unrelated cleanup in large entry files such as the main Electron bootstrap path.

### When Editing `src/app/`
- Preserve compatibility with the existing injected runtime.
- Prefer additive, minimal changes around existing hooks and API exposure patterns.
- Be careful when touching global objects, event bridges, and renderer/main communication.

### When Editing `miniplayer/`
- Treat it as an independent frontend app with its own conventions.
- Prefer local component/context/util patterns already used in `miniplayer/src/`.
- Keep styling and UI behavior consistent with the rest of the mini-player.

## Safety Notes
- This repo includes historical extracted versions and build artifacts; changing the wrong copy is easy. Verify the target path before editing.
- If a task mentions a versioned snapshot under `extracted/`, confirm the exact version directory and whether the change belongs there or in active sources under `src/`.
- Respect existing package-manager files. Do not switch package managers or regenerate lockfiles unless explicitly asked.
- Do not run destructive cleanup commands unless the user clearly requested them.

## Good Default Behavior For Future Agents
- Read the nearest config and adjacent implementation before patching.
- Keep changes narrow and explain why a file was chosen if multiple similar files exist.
- Prefer minimal validation that proves the edited path still works.
- Call out when a task appears to target generated, extracted, or historical content so the user can confirm intent.
