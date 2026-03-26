const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const DEFAULT_TREE_IGNORES = ['**/node_modules/**', '**/.git/**', '**/.DS_Store', '**/dist/**', '**/build/**'];
const MAIN_SRC_GLOBS = ['**/*.{js,cjs,mjs}'];
const MAIN_SRC_IGNORES = [
    '**/node_modules/**',
    '**/translations/compiled/**',
    '**/lib/miniplayer/renderer/**',
    '**/lib/preload.js',
    '**/lib/miniplayer/preload.js',
    '**/lib/scrobble/services/lastfm/preload.js',
];
const PREVIEW_LIMIT = 15;
const FEATURE_TEXT_GLOBS = ['**/*.{js,cjs,mjs,json,css}'];
const FEATURE_TEXT_IGNORES = [
    '**/node_modules/**',
    '**/.git/**',
    '**/translations/compiled/**',
    '**/.DS_Store',
    '**/dist/**',
    '**/build/**',
];
const FEATURE_DEFINITIONS = [
    {
        id: 'download_to_file_ui',
        title: 'Download To File UI',
        roots: ['app'],
        patterns: ['Скачать в файл', 'sendDownloadTrack(', 'sendDownloadTracks('],
        candidatePatterns: [
            'TRACK_CONTEXT_MENU',
            'ALBUM_CONTEXT_MENU',
            'PLAYLIST_CONTEXT_MENU',
            'CONTEXT_MENU_DOWNLOAD_BUTTON',
            'sendDownloadTrack',
            'sendDownloadTracks',
        ],
        note: 'Вернуть menu items для track/album/playlist и привязать к desktop bridge.',
    },
    {
        id: 'playlist_import_by_link_ui',
        title: 'Playlist Import By Link UI',
        roots: ['app'],
        patterns: ['playlistLinkImporter', 'Импортировать по ссылке', 'prefetchTrack(', 'importTrack('],
        candidatePatterns: ['PLAYLIST_HEADER_UPLOAD_UGC_BUTTON', 'ugc.upload-track', 'Загрузить трек', 'appendFiles('],
        note: 'Перенести modal + prefetch/import flow в playlist UGC chunk.',
    },
    {
        id: 'download_to_file_bridge',
        title: 'Download To File Bridge',
        roots: ['main'],
        patterns: ['DOWNLOAD_TRACK', 'DOWNLOAD_TRACKS', 'saveFileToLocalDisk', 'sendDownloadTrack', 'sendDownloadTracks'],
        targetFileHints: {
            main: ['index.js', 'preload.js', 'events.js', 'types/events.js', 'lib/preload.js'],
        },
        note: 'Проверить main events/types/preload bridge для DOWNLOAD_TRACK и DOWNLOAD_TRACKS.',
    },
    {
        id: 'playlist_import_by_link_bridge',
        title: 'Playlist Import By Link Bridge',
        roots: ['main'],
        patterns: ['playlist-import-track-from-link', 'playlist-prefetch-track-from-link', 'playlistLinkImporter'],
        targetFileHints: {
            main: ['index.js', 'preload.js', 'events.js', 'lib/preload.js'],
        },
        note: 'Проверить ipc handlers и exposeInMainWorld для playlistLinkImporter.',
    },
    {
        id: 'player_bar_settings_ui',
        title: 'Player Bar Settings UI',
        roots: ['app'],
        patterns: [
            'forcePlayerBarRerender',
            'modSettings.playerBarEnhancement.changeDislikeButtonPos',
            'modSettings.playerBarEnhancement.alwaysShowTimestamps',
            'modSettings.playerBarEnhancement.showCodecInsteadOfQualityMark',
            'modSettings.playerBarEnhancement.disablePerTrackColors',
            'modSettings.playerBarEnhancement.alwaysWideBar',
            'modSettings.playerBarEnhancement.playButtonType',
            'modSettings.r128Normalization',
        ],
        candidatePatterns: [
            'playerBarEnhancement',
            'forcePlayerBarRerender',
            'showCodecInsteadOfQualityMark',
            'alwaysShowTimestamps',
            'changeDislikeButtonPos',
            'disablePerTrackColors',
            'alwaysWideBar',
            'playButtonType',
            'r128Normalization',
        ],
        targetFileHints: {
            app: ['_next/static/chunks/app/**/settings/page-*.js'],
        },
        note: 'Проверить settings UI для player bar toggles, forcePlayerBarRerender и R128 normalization.',
    },
    {
        id: 'player_bar_runtime_ui',
        title: 'Player Bar Runtime UI',
        roots: ['app'],
        patterns: [
            'window.forcePlayerBarRerender =',
            'window.CHANGE_DISLIKE_BUTTON_POS()',
            'window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.()',
            'window.DISABLE_PER_TRACK_COLORS?.()',
            'window.ALWAYS_WIDE_BAR?.()',
            'modSettings.r128Normalization',
            'r128Enabled',
            ' kbps`',
        ],
        candidatePatterns: [
            'playerBar',
            'forcePlayerBarRerender',
            'realBitrate',
            'ALWAYS_SHOW_PLAYER_TIMESTAMPS',
            'CHANGE_DISLIKE_BUTTON_POS',
            'DISABLE_PER_TRACK_COLORS',
            'ALWAYS_WIDE_BAR',
            'r128Normalization',
            'codecMap',
            'qualityMap',
        ],
        targetFileHints: {
            app: [
                '_next/static/chunks/1141-*.js',
                '_next/static/chunks/3658-*.js',
                '_next/static/chunks/1015-*.js',
                '_next/static/chunks/5924-*.js',
                '_next/static/chunks/a7e8490a.*.js',
            ],
        },
        note: 'Проверить runtime player bar: bitrate/codec label, timestamps, dislike swap, colors, wide bar и R128 toggle.',
    },
    {
        id: 'player_bar_css',
        title: 'Player Bar CSS',
        roots: ['app'],
        patterns: ['.modSettings_alwaysWideBar'],
        candidatePatterns: ['modSettings_alwaysWideBar', '--player-average-color-background', '--player-average-color-content'],
        targetFileHints: {
            app: ['_next/static/css/*.css'],
        },
        note: 'Проверить CSS для wide bar и связанных player bar styles.',
    },
    {
        id: 'player_bar_bridge',
        title: 'Player Bar Bridge',
        roots: ['main'],
        patterns: [
            'playerBarEnhancement.showCodecInsteadOfQualityMark',
            'ALWAYS_SHOW_PLAYER_TIMESTAMPS',
            'CHANGE_DISLIKE_BUTTON_POS',
            'DISABLE_PER_TRACK_COLORS',
            'ALWAYS_WIDE_BAR',
            'playButtonType',
            'r128Normalization',
            'WebNextPlayerBarYellowButton',
        ],
        candidatePatterns: [
            'playerBarEnhancement',
            'showCodecInsteadOfQualityMark',
            'ALWAYS_SHOW_PLAYER_TIMESTAMPS',
            'CHANGE_DISLIKE_BUTTON_POS',
            'DISABLE_PER_TRACK_COLORS',
            'ALWAYS_WIDE_BAR',
            'playButtonType',
            'r128Normalization',
            'WebNextPlayerBarYellowButton',
        ],
        targetFileHints: {
            main: [
                'index.js',
                'preload.js',
                'events.js',
                'lib/preload.js',
                'lib/store.js',
                'lib/miniplayer/miniplayer.js',
                'lib/taskBarExtension/taskBarExtension.js',
            ],
        },
        note: 'Проверить store/preload/miniplayer/taskbar bridge для player bar enhancements и R128 normalization.',
    },
];

function createMigrationUtils(runtime) {
    const { fsp } = runtime.deps;
    const { SRC_PATH, TEMP_DIR } = runtime.constants;

    async function pathExists(targetPath) {
        try {
            await fsp.access(targetPath);
            return true;
        } catch {
            return false;
        }
    }

    async function ensureDir(targetPath) {
        await fsp.mkdir(targetPath, { recursive: true });
    }

    async function readJson(filePath) {
        return JSON.parse(await fsp.readFile(filePath, 'utf8'));
    }

    async function writeJson(filePath, value) {
        await ensureDir(path.dirname(filePath));
        await fsp.writeFile(filePath, JSON.stringify(value, null, 2), 'utf8');
    }

    async function writeText(filePath, value) {
        await ensureDir(path.dirname(filePath));
        await fsp.writeFile(filePath, value, 'utf8');
    }

    async function listRelativeFiles(rootDir, ignore = DEFAULT_TREE_IGNORES) {
        if (!(await pathExists(rootDir))) {
            return [];
        }

        const files = await fg(['**/*'], {
            cwd: rootDir,
            onlyFiles: true,
            dot: true,
            ignore,
        });
        return files.sort((left, right) => left.localeCompare(right));
    }

    async function listRelativeTextFiles(rootDir, extraIgnore = []) {
        if (!(await pathExists(rootDir))) {
            return [];
        }

        const files = await fg(FEATURE_TEXT_GLOBS, {
            cwd: rootDir,
            onlyFiles: true,
            dot: true,
            ignore: [...FEATURE_TEXT_IGNORES, ...extraIgnore],
        });

        return files.sort((left, right) => left.localeCompare(right));
    }

    async function compareDirectoryTrees(leftDir, rightDir) {
        const [leftFiles, rightFiles] = await Promise.all([listRelativeFiles(leftDir), listRelativeFiles(rightDir)]);
        const leftSet = new Set(leftFiles);
        const rightSet = new Set(rightFiles);

        const added = rightFiles.filter((file) => !leftSet.has(file));
        const removed = leftFiles.filter((file) => !rightSet.has(file));
        const shared = leftFiles.filter((file) => rightSet.has(file));
        const changed = [];

        for (const relativePath of shared) {
            const leftPath = path.join(leftDir, relativePath);
            const rightPath = path.join(rightDir, relativePath);
            const [leftBuffer, rightBuffer] = await Promise.all([fsp.readFile(leftPath), fsp.readFile(rightPath)]);

            if (leftBuffer.equals(rightBuffer)) {
                continue;
            }

            changed.push({
                path: relativePath,
                leftBytes: leftBuffer.byteLength,
                rightBytes: rightBuffer.byteLength,
                deltaBytes: rightBuffer.byteLength - leftBuffer.byteLength,
            });
        }

        changed.sort((left, right) => left.path.localeCompare(right.path));

        return {
            leftDir,
            rightDir,
            counts: {
                leftFiles: leftFiles.length,
                rightFiles: rightFiles.length,
                added: added.length,
                removed: removed.length,
                changed: changed.length,
                unchanged: shared.length - changed.length,
            },
            added,
            removed,
            changed,
        };
    }

    function diffRecord(leftRecord = {}, rightRecord = {}) {
        const added = [];
        const removed = [];
        const changed = [];
        const keys = [...new Set([...Object.keys(leftRecord), ...Object.keys(rightRecord)])].sort((left, right) => left.localeCompare(right));

        for (const key of keys) {
            if (!(key in leftRecord)) {
                added.push({ key, value: rightRecord[key] });
                continue;
            }

            if (!(key in rightRecord)) {
                removed.push({ key, value: leftRecord[key] });
                continue;
            }

            if (JSON.stringify(leftRecord[key]) !== JSON.stringify(rightRecord[key])) {
                changed.push({
                    key,
                    leftValue: leftRecord[key],
                    rightValue: rightRecord[key],
                });
            }
        }

        return { added, removed, changed };
    }

    async function comparePackageJson(leftPath, rightPath) {
        const [leftPackage, rightPackage] = await Promise.all([readJson(leftPath), readJson(rightPath)]);
        const leftMain = { ...leftPackage };
        const rightMain = { ...rightPackage };

        delete leftMain.dependencies;
        delete leftMain.devDependencies;
        delete rightMain.dependencies;
        delete rightMain.devDependencies;

        return {
            leftPath,
            rightPath,
            fields: diffRecord(leftMain, rightMain),
            dependencies: diffRecord(leftPackage.dependencies, rightPackage.dependencies),
            devDependencies: diffRecord(leftPackage.devDependencies, rightPackage.devDependencies),
        };
    }

    function tryResolveString(node, scope, depth = 0) {
        if (!node || depth > 6) {
            return null;
        }

        switch (node.type) {
            case 'StringLiteral':
                return node.value;
            case 'TemplateLiteral':
                return node.expressions.length === 0 ? node.quasis.map((item) => item.value.cooked).join('') : null;
            case 'MemberExpression':
                if (!node.computed && node.property?.type === 'Identifier') {
                    return node.property.name;
                }
                if (node.computed && node.property?.type === 'StringLiteral') {
                    return node.property.value;
                }
                return null;
            case 'Identifier': {
                const binding = scope?.getBinding?.(node.name);
                const init = binding?.path?.node?.init;
                return init ? tryResolveString(init, binding.path.scope, depth + 1) : null;
            }
            case 'TSAsExpression':
            case 'TypeCastExpression':
                return tryResolveString(node.expression, scope, depth + 1);
            default:
                return null;
        }
    }

    function getPropertyName(node) {
        if (!node) {
            return null;
        }

        if (!node.computed && node.property?.type === 'Identifier') {
            return node.property.name;
        }

        if (node.computed && node.property?.type === 'StringLiteral') {
            return node.property.value;
        }

        return null;
    }

    function normalizeSignalTarget(objectCode) {
        const normalized = objectCode.replace(/\s+/g, '');

        if (normalized.includes('ipcMain')) {
            return 'ipcMain';
        }
        if (normalized.includes('ipcRenderer')) {
            return 'ipcRenderer';
        }
        if (normalized.includes('contextBridge')) {
            return 'contextBridge';
        }
        if (normalized.includes('webContents')) {
            return 'webContents';
        }
        if (normalized === 'app' || normalized.endsWith('.app')) {
            return 'app';
        }
        if (normalized.includes('globalShortcut')) {
            return 'globalShortcut';
        }
        if (normalized.includes('protocol')) {
            return 'protocol';
        }
        if (normalized.includes('session.defaultSession')) {
            return 'session.defaultSession';
        }

        return objectCode;
    }

    function isInterestingSignal(target, action) {
        if (!target || !action) {
            return false;
        }

        if (target === 'ipcMain') {
            return ['on', 'once', 'handle', 'handleOnce'].includes(action);
        }

        if (target === 'ipcRenderer') {
            return ['on', 'once', 'send', 'sendSync', 'invoke', 'emit'].includes(action);
        }

        if (target === 'webContents') {
            return ['on', 'once', 'send'].includes(action);
        }

        if (target === 'app') {
            return ['on', 'once'].includes(action);
        }

        if (target === 'globalShortcut') {
            return action === 'register';
        }

        if (target === 'contextBridge') {
            return action === 'exposeInMainWorld';
        }

        return false;
    }

    async function collectSignalFiles(entryPath, mode) {
        if (!(await pathExists(entryPath))) {
            return [];
        }

        const stat = await fsp.stat(entryPath);
        if (stat.isFile()) {
            return [entryPath];
        }

        if (mode === 'src-main') {
            const files = await fg(MAIN_SRC_GLOBS, {
                cwd: entryPath,
                absolute: true,
                ignore: MAIN_SRC_IGNORES,
            });
            return files.sort((left, right) => left.localeCompare(right));
        }

        const files = await fg(['**/*.{js,cjs,mjs}'], {
            cwd: entryPath,
            absolute: true,
            ignore: DEFAULT_TREE_IGNORES,
        });
        return files.sort((left, right) => left.localeCompare(right));
    }

    async function extractSignals(entryPath, mode) {
        const files = await collectSignalFiles(entryPath, mode);
        const signals = [];

        for (const filePath of files) {
            const source = await fsp.readFile(filePath, 'utf8');
            let ast;

            try {
                ast = parser.parse(source, {
                    sourceType: 'unambiguous',
                    plugins: [
                        'jsx',
                        'typescript',
                        'classProperties',
                        'classPrivateProperties',
                        'classPrivateMethods',
                        'decorators-legacy',
                        'dynamicImport',
                        'optionalChaining',
                        'nullishCoalescingOperator',
                        'topLevelAwait',
                        'objectRestSpread',
                    ],
                });
            } catch (error) {
                signals.push({
                    kind: 'parse-error',
                    filePath,
                    message: error.message,
                });
                continue;
            }

            traverse(ast, {
                CallExpression(callPath) {
                    if (callPath.node.callee.type !== 'MemberExpression') {
                        return;
                    }

                    const action = getPropertyName(callPath.node.callee);
                    if (!action) {
                        return;
                    }

                    const objectCode = generate(callPath.node.callee.object, { concise: true }).code;
                    const target = normalizeSignalTarget(objectCode);
                    if (!isInterestingSignal(target, action)) {
                        return;
                    }

                    const event = tryResolveString(callPath.node.arguments[0], callPath.scope);
                    if (!event) {
                        return;
                    }

                    signals.push({
                        target,
                        action,
                        event,
                        filePath,
                        line: callPath.node.loc?.start.line ?? null,
                        column: callPath.node.loc?.start.column ?? null,
                    });
                },
            });
        }

        return signals;
    }

    function extractEventEnumValues(source) {
        const values = new Set();
        const regex = /\bEvents\[['"]([^'"]+)['"]\]\s*=\s*['"]([^'"]+)['"]/g;

        for (const match of source.matchAll(regex)) {
            values.add(match[2]);
        }

        return [...values].sort((left, right) => left.localeCompare(right));
    }

    async function extractEventEnum(entryPath) {
        if (!(await pathExists(entryPath))) {
            return [];
        }

        const stat = await fsp.stat(entryPath);
        const files = stat.isFile()
            ? [entryPath]
            : await fg(['**/*.{js,cjs,mjs}'], {
                  cwd: entryPath,
                  absolute: true,
                  ignore: DEFAULT_TREE_IGNORES,
              });

        const values = new Set();

        for (const filePath of files) {
            const source = await fsp.readFile(filePath, 'utf8');
            extractEventEnumValues(source).forEach((value) => values.add(value));
        }

        return [...values].sort((left, right) => left.localeCompare(right));
    }

    function keyBySignal(signal) {
        return `${signal.target}::${signal.action}::${signal.event}`;
    }

    function createSignalMap(signals) {
        const signalMap = new Map();

        for (const signal of signals) {
            if (signal.kind === 'parse-error') {
                continue;
            }

            const key = keyBySignal(signal);
            const existing = signalMap.get(key);

            if (existing) {
                existing.locations.push({
                    filePath: signal.filePath,
                    line: signal.line,
                    column: signal.column,
                });
                continue;
            }

            signalMap.set(key, {
                ...signal,
                locations: [
                    {
                        filePath: signal.filePath,
                        line: signal.line,
                        column: signal.column,
                    },
                ],
            });
        }

        return signalMap;
    }

    function compareSignals(leftSignals, rightSignals) {
        const leftMap = createSignalMap(leftSignals);
        const rightMap = createSignalMap(rightSignals);
        const leftKeys = new Set(leftMap.keys());
        const rightKeys = new Set(rightMap.keys());

        const added = [...rightKeys]
            .filter((key) => !leftKeys.has(key))
            .map((key) => rightMap.get(key))
            .sort(sortSignals);
        const removed = [...leftKeys]
            .filter((key) => !rightKeys.has(key))
            .map((key) => leftMap.get(key))
            .sort(sortSignals);
        const shared = [...rightKeys]
            .filter((key) => leftKeys.has(key))
            .map((key) => rightMap.get(key))
            .sort(sortSignals);

        return {
            counts: {
                left: leftMap.size,
                right: rightMap.size,
                added: added.length,
                removed: removed.length,
                shared: shared.length,
            },
            added,
            removed,
            shared,
        };
    }

    function sortSignals(left, right) {
        return (
            left.target.localeCompare(right.target) ||
            left.action.localeCompare(right.action) ||
            left.event.localeCompare(right.event) ||
            left.filePath.localeCompare(right.filePath)
        );
    }

    function compareSets(leftValues, rightValues) {
        const leftSet = new Set(leftValues);
        const rightSet = new Set(rightValues);

        const added = rightValues.filter((value) => !leftSet.has(value));
        const removed = leftValues.filter((value) => !rightSet.has(value));
        const shared = rightValues.filter((value) => leftSet.has(value));

        return {
            counts: {
                left: leftValues.length,
                right: rightValues.length,
                added: added.length,
                removed: removed.length,
                shared: shared.length,
            },
            added: [...added].sort((left, right) => left.localeCompare(right)),
            removed: [...removed].sort((left, right) => left.localeCompare(right)),
            shared: [...shared].sort((left, right) => left.localeCompare(right)),
        };
    }

    function intersectPathLists(leftList, rightList) {
        const rightSet = new Set(rightList);
        return leftList.filter((item) => rightSet.has(item)).sort((left, right) => left.localeCompare(right));
    }

    function getPreviewList(items, mapper = (item) => item) {
        return items.slice(0, PREVIEW_LIMIT).map(mapper);
    }

    function formatPreviewSection(title, items, mapper = (item) => item) {
        if (!items.length) {
            return [`${title}: 0`];
        }

        const lines = [`${title}: ${items.length}`];
        getPreviewList(items, mapper).forEach((item) => lines.push(`- ${item}`));
        if (items.length > PREVIEW_LIMIT) {
            lines.push(`- ... ещё ${items.length - PREVIEW_LIMIT}`);
        }
        return lines;
    }

    function formatSignalPreview(signal) {
        const location = signal.locations?.[0];
        const locationSuffix = location ? ` (${path.basename(location.filePath)}:${location.line ?? '?'})` : '';
        return `${signal.target}.${signal.action} "${signal.event}"${locationSuffix}`;
    }

    function formatPackageDiffSummary(packageDiff) {
        const lines = [];
        lines.push(
            `Поля package.json: +${packageDiff.fields.added.length} / ~${packageDiff.fields.changed.length} / -${packageDiff.fields.removed.length}`,
        );
        lines.push(
            `dependencies: +${packageDiff.dependencies.added.length} / ~${packageDiff.dependencies.changed.length} / -${packageDiff.dependencies.removed.length}`,
        );
        lines.push(
            `devDependencies: +${packageDiff.devDependencies.added.length} / ~${packageDiff.devDependencies.changed.length} / -${packageDiff.devDependencies.removed.length}`,
        );
        return lines;
    }

    async function scanFeatureInRoot(rootDir, feature, rootName) {
        if (!(await pathExists(rootDir))) {
            return {
                rootDir,
                present: false,
                hitCount: 0,
                files: [],
            };
        }

        const files = await listRelativeTextFiles(rootDir, rootName === 'main' ? ['app/**'] : []);
        const matches = [];

        for (const relativePath of files) {
            const absolutePath = path.join(rootDir, relativePath);
            const source = await fsp.readFile(absolutePath, 'utf8');
            const matchedPatterns = feature.patterns.filter((pattern) => source.includes(pattern));

            if (!matchedPatterns.length) {
                continue;
            }

            matches.push({
                path: relativePath,
                matchedPatterns,
            });
        }

        return {
            rootDir,
            present: matches.length > 0,
            hitCount: matches.length,
            files: matches,
        };
    }

    async function scanCandidateFilesInRoot(rootDir, feature, rootName) {
        const candidatePatterns = feature.candidatePatterns ?? [];
        const targetHints = feature.targetFileHints?.[rootName] ?? [];
        const candidates = new Map();

        if (await pathExists(rootDir)) {
            const extraIgnore = rootName === 'main' ? ['app/**'] : [];
            const files = await listRelativeTextFiles(rootDir, extraIgnore);

            if (candidatePatterns.length) {
                for (const relativePath of files) {
                    const absolutePath = path.join(rootDir, relativePath);
                    const source = await fsp.readFile(absolutePath, 'utf8');
                    const matchedPatterns = candidatePatterns.filter((pattern) => source.includes(pattern));

                    if (!matchedPatterns.length) {
                        continue;
                    }

                    candidates.set(relativePath, {
                        path: relativePath,
                        matchedPatterns,
                        viaHint: false,
                        score: matchedPatterns.length,
                    });
                }
            }

            for (const hintPath of targetHints) {
                const resolvedHintPaths = /[*?[\]{}]/.test(hintPath)
                    ? await fg([hintPath], {
                          cwd: rootDir,
                          onlyFiles: true,
                          dot: true,
                          ignore: [...FEATURE_TEXT_IGNORES, ...extraIgnore],
                      })
                    : (await pathExists(path.join(rootDir, hintPath)))
                      ? [hintPath]
                      : [];

                for (const resolvedHintPath of resolvedHintPaths) {
                    const existing = candidates.get(resolvedHintPath);
                    if (existing) {
                        existing.viaHint = true;
                        existing.score += 3;
                        continue;
                    }

                    candidates.set(resolvedHintPath, {
                        path: resolvedHintPath,
                        matchedPatterns: [],
                        viaHint: true,
                        score: 3,
                    });
                }
            }
        }

        return [...candidates.values()].sort((left, right) => {
            return (
                right.score - left.score ||
                Number(right.viaHint) - Number(left.viaHint) ||
                right.matchedPatterns.length - left.matchedPatterns.length ||
                left.path.localeCompare(right.path)
            );
        });
    }

    async function scanFeatures({ baselineRoot, srcRoot, targetRoot }) {
        const roots = {
            baseline: {
                app: path.join(baselineRoot, 'app'),
                main: baselineRoot,
            },
            src: {
                app: path.join(srcRoot, 'app'),
                main: path.join(srcRoot, 'main'),
            },
            target: targetRoot
                ? {
                      app: path.join(targetRoot, 'app'),
                      main: targetRoot,
                  }
                : null,
        };

        const featureResults = [];

        for (const feature of FEATURE_DEFINITIONS) {
            const baselineMatches = [];
            const srcMatches = [];
            const targetMatches = [];

            for (const rootName of feature.roots) {
                baselineMatches.push(await scanFeatureInRoot(roots.baseline[rootName], feature, rootName));
                srcMatches.push(await scanFeatureInRoot(roots.src[rootName], feature, rootName));
                if (roots.target) {
                    targetMatches.push(await scanFeatureInRoot(roots.target[rootName], feature, rootName));
                }
            }

            const baselinePresent = baselineMatches.some((item) => item.present);
            const srcPresent = srcMatches.some((item) => item.present);
            const targetPresent = targetMatches.some((item) => item.present);
            const targetCandidates = roots.target
                ? (
                      await Promise.all(
                          feature.roots.map((rootName) => scanCandidateFilesInRoot(roots.target[rootName], feature, rootName)),
                      )
                  ).flat()
                : [];

            featureResults.push({
                id: feature.id,
                title: feature.title,
                roots: feature.roots,
                patterns: feature.patterns,
                note: feature.note ?? null,
                baseline: {
                    present: baselinePresent,
                    hits: baselineMatches.flatMap((item) => item.files),
                },
                src: {
                    present: srcPresent,
                    hits: srcMatches.flatMap((item) => item.files),
                },
                target: roots.target
                    ? {
                          present: targetPresent,
                          hits: targetMatches.flatMap((item) => item.files),
                          candidates: targetCandidates,
                      }
                    : null,
                status: {
                    customInSrc: !baselinePresent && srcPresent,
                    missingInTarget: roots.target ? srcPresent && !targetPresent : false,
                    regainedInTarget: roots.target ? !baselinePresent && srcPresent && targetPresent : false,
                },
            });
        }

        return featureResults;
    }

    function formatFeatureAuditSection(featureResults, includeTarget = false) {
        const lines = ['## Feature Audit', ''];

        for (const feature of featureResults) {
            lines.push(
                `${feature.title}: baseline=${feature.baseline.present ? 'yes' : 'no'} / src=${feature.src.present ? 'yes' : 'no'}${
                    includeTarget ? ` / target=${feature.target?.present ? 'yes' : 'no'}` : ''
                }`,
            );

            if (feature.status.customInSrc) {
                lines.push('- custom feature detected in src');
            }
            if (feature.status.missingInTarget) {
                lines.push('- missing in target');
            }
            if (feature.status.regainedInTarget) {
                lines.push('- present in target after migration');
            }
            if (feature.note) {
                lines.push(`- note: ${feature.note}`);
            }

            const previewHits = includeTarget ? feature.target?.hits ?? [] : feature.src.hits;
            formatPreviewSection('Key files', previewHits, (item) => `${item.path} [${item.matchedPatterns.join(', ')}]`).forEach((line) => lines.push(line));
            if (includeTarget && feature.status.missingInTarget) {
                formatPreviewSection(
                    'Target candidates',
                    feature.target?.candidates ?? [],
                    (item) => `${item.path}${item.matchedPatterns.length ? ` [${item.matchedPatterns.join(', ')}]` : ''}${item.viaHint ? ' {hint}' : ''}`,
                ).forEach((line) => lines.push(line));
            }
            lines.push('');
        }

        return lines;
    }

    function buildMigrationTodo(report) {
        const items = [];

        report.mergeHints.mainSignalsToMerge.forEach((signal) => {
            items.push({
                type: 'main-signal',
                priority: 'high',
                title: `Merge main signal ${signal.target}.${signal.action}("${signal.event}")`,
                sourceFiles: signal.locations?.map((location) => location.filePath) ?? [signal.filePath],
                targetCandidates: [signal.filePath],
                note: 'main переносить из src, затем добрать этот upstream signal в новый bundled main',
            });
        });

        report.mergeHints.preloadSignalsToMerge.forEach((signal) => {
            items.push({
                type: 'preload-signal',
                priority: 'high',
                title: `Merge preload signal ${signal.target}.${signal.action}("${signal.event}")`,
                sourceFiles: signal.locations?.map((location) => location.filePath) ?? [signal.filePath],
                targetCandidates: [signal.filePath],
                note: 'перенести новый preload signal в src-based preload',
            });
        });

        report.mergeHints.eventConstantsToMerge.forEach((eventName) => {
            items.push({
                type: 'event-constant',
                priority: 'medium',
                title: `Merge event constant ${eventName}`,
                sourceFiles: [],
                targetCandidates: [],
                note: 'добавить новую upstream event-константу в src main/types',
            });
        });

        (report.mergeHints.featuresMissingInTarget ?? []).forEach((feature) => {
            items.push({
                type: 'feature',
                priority: feature.id.endsWith('_bridge') ? 'high' : 'high',
                title: feature.title,
                sourceFiles: feature.src.hits.map((item) => item.path),
                targetCandidates: (feature.target?.candidates ?? []).map((item) => item.path),
                note: feature.note,
                sourceAnchors: feature.src.hits,
                targetAnchors: feature.target?.candidates ?? [],
            });
        });

        return {
            context: report.context,
            summary: {
                mainSignalsToMerge: report.mergeHints.mainSignalsToMerge.length,
                preloadSignalsToMerge: report.mergeHints.preloadSignalsToMerge.length,
                eventConstantsToMerge: report.mergeHints.eventConstantsToMerge.length,
                missingFeatures: (report.mergeHints.featuresMissingInTarget ?? []).length,
            },
            items,
        };
    }

    function buildMigrationTodoText(todo) {
        const lines = [];

        lines.push('# Migration TODO');
        lines.push('');
        lines.push(`Baseline: ${todo.context.baselineRoot}`);
        lines.push(`Source: ${todo.context.srcRoot}`);
        if (todo.context.targetRoot) {
            lines.push(`Target: ${todo.context.targetRoot}`);
        }
        lines.push('');
        lines.push(
            `Summary: main=${todo.summary.mainSignalsToMerge}, preload=${todo.summary.preloadSignalsToMerge}, events=${todo.summary.eventConstantsToMerge}, features=${todo.summary.missingFeatures}`,
        );
        lines.push('');

        todo.items.forEach((item, index) => {
            lines.push(`## ${index + 1}. ${item.title}`);
            lines.push('');
            lines.push(`- type: ${item.type}`);
            lines.push(`- priority: ${item.priority}`);
            if (item.note) {
                lines.push(`- note: ${item.note}`);
            }
            formatPreviewSection('src files', item.sourceFiles).forEach((line) => lines.push(line));
            formatPreviewSection('target candidates', item.targetCandidates).forEach((line) => lines.push(line));
            if (item.sourceAnchors?.length) {
                formatPreviewSection(
                    'src anchors',
                    item.sourceAnchors,
                    (anchor) => `${anchor.path} [${anchor.matchedPatterns.join(', ')}]`,
                ).forEach((line) => lines.push(line));
            }
            if (item.targetAnchors?.length) {
                formatPreviewSection(
                    'target anchors',
                    item.targetAnchors,
                    (anchor) =>
                        `${anchor.path}${anchor.matchedPatterns.length ? ` [${anchor.matchedPatterns.join(', ')}]` : ''}${
                            anchor.viaHint ? ' {hint}' : ''
                        }`,
                ).forEach((line) => lines.push(line));
            }
            lines.push('');
        });

        return lines.join('\n').concat('\n');
    }

    async function writeMigrationTodo(todo, outputDir) {
        const resolvedOutputDir = outputDir ?? todo.context.reportDir;
        const todoPath = path.join(resolvedOutputDir, 'migration-todo.md');
        const todoJsonPath = path.join(resolvedOutputDir, 'migration-todo.json');

        await Promise.all([writeText(todoPath, buildMigrationTodoText(todo)), writeJson(todoJsonPath, todo)]);

        return {
            todoPath,
            todoJsonPath,
        };
    }

    function formatDirectoryDiffSummary(title, directoryDiff) {
        return [
            `${title}: +${directoryDiff.counts.added} / ~${directoryDiff.counts.changed} / -${directoryDiff.counts.removed}`,
            ...formatPreviewSection('Добавленные файлы', directoryDiff.added),
            ...formatPreviewSection('Изменённые файлы', directoryDiff.changed, (item) => `${item.path} (${item.deltaBytes >= 0 ? '+' : ''}${item.deltaBytes} B)`),
            ...formatPreviewSection('Удалённые файлы', directoryDiff.removed),
        ];
    }

    function buildReportText(report) {
        const lines = [];

        lines.push(`# Migration Report`);
        lines.push('');
        lines.push(`Baseline: ${report.context.baselineRoot}`);
        lines.push(`Source: ${report.context.srcRoot}`);
        if (report.context.targetRoot) {
            lines.push(`Target: ${report.context.targetRoot}`);
        }
        lines.push('');
        lines.push('## Baseline -> src');
        lines.push('');
        lines.push(...formatPackageDiffSummary(report.baselineToSrc.packageDiff));
        lines.push('');
        lines.push(...formatDirectoryDiffSummary('app', report.baselineToSrc.appDiff));
        lines.push('');
        lines.push(
            `main signals: +${report.baselineToSrc.mainSignals.counts.added} / -${report.baselineToSrc.mainSignals.counts.removed} относительно baseline`,
        );
        lines.push(...formatPreviewSection('Кастомные main-сигналы src', report.baselineToSrc.mainSignals.added, formatSignalPreview));
        lines.push(...formatPreviewSection('Удалённые baseline main-сигналы', report.baselineToSrc.mainSignals.removed, formatSignalPreview));
        lines.push('');
        lines.push(
            `preload signals: +${report.baselineToSrc.preloadSignals.counts.added} / -${report.baselineToSrc.preloadSignals.counts.removed} относительно baseline`,
        );
        lines.push(...formatPreviewSection('Кастомные preload-сигналы src', report.baselineToSrc.preloadSignals.added, formatSignalPreview));
        lines.push(...formatPreviewSection('Удалённые baseline preload-сигналы', report.baselineToSrc.preloadSignals.removed, formatSignalPreview));
        lines.push('');
        lines.push(
            `event constants: +${report.baselineToSrc.eventConstants.counts.added} / -${report.baselineToSrc.eventConstants.counts.removed} относительно baseline`,
        );
        lines.push(...formatPreviewSection('Кастомные event-константы src', report.baselineToSrc.eventConstants.added));
        lines.push(...formatPreviewSection('Удалённые event-константы baseline', report.baselineToSrc.eventConstants.removed));
        lines.push('');
        lines.push(...formatFeatureAuditSection(report.featureAudit, false));

        if (report.baselineToTarget) {
            lines.push('');
            lines.push('## Baseline -> target');
            lines.push('');
            lines.push(...formatPackageDiffSummary(report.baselineToTarget.packageDiff));
            lines.push('');
            lines.push(...formatDirectoryDiffSummary('app', report.baselineToTarget.appDiff));
            lines.push('');
            lines.push(
                `upstream main signals: +${report.baselineToTarget.mainSignals.counts.added} / -${report.baselineToTarget.mainSignals.counts.removed} относительно baseline`,
            );
            lines.push(...formatPreviewSection('Новые upstream main-сигналы', report.baselineToTarget.mainSignals.added, formatSignalPreview));
            lines.push('');
            lines.push(
                `upstream preload signals: +${report.baselineToTarget.preloadSignals.counts.added} / -${report.baselineToTarget.preloadSignals.counts.removed} относительно baseline`,
            );
            lines.push(...formatPreviewSection('Новые upstream preload-сигналы', report.baselineToTarget.preloadSignals.added, formatSignalPreview));
            lines.push('');
            lines.push(
                `upstream event constants: +${report.baselineToTarget.eventConstants.counts.added} / -${report.baselineToTarget.eventConstants.counts.removed} относительно baseline`,
            );
            lines.push(...formatPreviewSection('Новые upstream event-константы', report.baselineToTarget.eventConstants.added));
            lines.push('');
            lines.push('## Merge hints');
            lines.push('');
            lines.push('main переносить из src, затем вручную или полуручно влить новые upstream-сигналы ниже.');
            lines.push(...formatPreviewSection('Новые main-сигналы target, которых нет в src', report.mergeHints.mainSignalsToMerge, formatSignalPreview));
            lines.push(...formatPreviewSection('Новые preload-сигналы target, которых нет в src', report.mergeHints.preloadSignalsToMerge, formatSignalPreview));
            lines.push(...formatPreviewSection('Новые event-константы target, которых нет в src', report.mergeHints.eventConstantsToMerge));
            lines.push(...formatPreviewSection('Конфликтные app-файлы (менялись и в src, и upstream)', report.mergeHints.appChangedOverlap));
            lines.push(...formatPreviewSection('Новые upstream app-файлы', report.baselineToTarget.appDiff.added));
            lines.push(...formatPreviewSection('Кастомные фичи src, отсутствующие в target', report.mergeHints.featuresMissingInTarget, (item) => item.title));
            lines.push('');
            lines.push(...formatFeatureAuditSection(report.featureAudit, true));
        }

        return lines.join('\n').concat('\n');
    }

    async function analyzeMigration({ baselineRoot, srcRoot = SRC_PATH, targetRoot = null, reportDir = null }) {
        const resolvedReportDir =
            reportDir ??
            path.join(
                TEMP_DIR,
                'migration-reports',
                `${path.basename(baselineRoot)}__${targetRoot ? path.basename(targetRoot) : 'src-analysis'}`,
            );

        const baselineMainPath = path.join(baselineRoot, 'index.js');
        const baselinePreloadPath = path.join(baselineRoot, 'preload.js');
        const baselineAppPath = path.join(baselineRoot, 'app');
        const baselinePackagePath = path.join(baselineRoot, 'package.json');

        const srcMainPath = path.join(srcRoot, 'main');
        const srcPreloadPath = path.join(srcRoot, 'main', 'lib', 'preload.js');
        const srcAppPath = path.join(srcRoot, 'app');
        const srcPackagePath = path.join(srcRoot, 'package.json');

        const [baselineAppDiff, baselinePackageDiff, baselineMainSignals, srcMainSignals, baselinePreloadSignals, srcPreloadSignals, baselineEventConstants, srcEventConstants] =
            await Promise.all([
                compareDirectoryTrees(baselineAppPath, srcAppPath),
                comparePackageJson(baselinePackagePath, srcPackagePath),
                extractSignals(baselineMainPath, 'main-file'),
                extractSignals(srcMainPath, 'src-main'),
                extractSignals(baselinePreloadPath, 'preload-file'),
                extractSignals(srcPreloadPath, 'preload-file'),
                extractEventEnum(baselineMainPath),
                extractEventEnum(path.join(srcMainPath, 'types')),
            ]);
        const featureAudit = await scanFeatures({ baselineRoot, srcRoot, targetRoot });

        const report = {
            context: {
                baselineRoot,
                srcRoot,
                targetRoot,
                reportDir: resolvedReportDir,
            },
            baselineToSrc: {
                appDiff: baselineAppDiff,
                packageDiff: baselinePackageDiff,
                mainSignals: compareSignals(baselineMainSignals, srcMainSignals),
                preloadSignals: compareSignals(baselinePreloadSignals, srcPreloadSignals),
                eventConstants: compareSets(baselineEventConstants, srcEventConstants),
            },
            featureAudit,
            artifacts: {},
        };

        if (targetRoot) {
            const targetMainPath = path.join(targetRoot, 'index.js');
            const targetPreloadPath = path.join(targetRoot, 'preload.js');
            const targetAppPath = path.join(targetRoot, 'app');
            const targetPackagePath = path.join(targetRoot, 'package.json');

            const [
                baselineTargetAppDiff,
                baselineTargetPackageDiff,
                targetMainSignals,
                targetPreloadSignals,
                targetEventConstants,
            ] = await Promise.all([
                compareDirectoryTrees(baselineAppPath, targetAppPath),
                comparePackageJson(baselinePackagePath, targetPackagePath),
                extractSignals(targetMainPath, 'main-file'),
                extractSignals(targetPreloadPath, 'preload-file'),
                extractEventEnum(targetMainPath),
            ]);

            const srcToTargetMainSignals = compareSignals(srcMainSignals, targetMainSignals);
            const srcToTargetPreloadSignals = compareSignals(srcPreloadSignals, targetPreloadSignals);
            const srcToTargetEventConstants = compareSets(srcEventConstants, targetEventConstants);

            report.baselineToTarget = {
                appDiff: baselineTargetAppDiff,
                packageDiff: baselineTargetPackageDiff,
                mainSignals: compareSignals(baselineMainSignals, targetMainSignals),
                preloadSignals: compareSignals(baselinePreloadSignals, targetPreloadSignals),
                eventConstants: compareSets(baselineEventConstants, targetEventConstants),
            };
            report.mergeHints = {
                mainSignalsToMerge: srcToTargetMainSignals.added,
                preloadSignalsToMerge: srcToTargetPreloadSignals.added,
                eventConstantsToMerge: srcToTargetEventConstants.added,
                featuresMissingInTarget: featureAudit.filter((feature) => feature.status.missingInTarget),
                appChangedOverlap: intersectPathLists(
                    report.baselineToSrc.appDiff.changed.map((item) => item.path),
                    baselineTargetAppDiff.changed.map((item) => item.path),
                ),
            };
        }

        const reportText = buildReportText(report);
        await ensureDir(resolvedReportDir);

        await Promise.all([
            writeText(path.join(resolvedReportDir, 'report.md'), reportText),
            writeJson(path.join(resolvedReportDir, 'summary.json'), report),
        ]);

        report.artifacts = {
            reportPath: path.join(resolvedReportDir, 'report.md'),
            summaryPath: path.join(resolvedReportDir, 'summary.json'),
        };

        return report;
    }

    return {
        analyzeMigration,
        buildReportText,
        buildMigrationTodo,
        buildMigrationTodoText,
        writeMigrationTodo,
        pathExists,
    };
}

module.exports = {
    createMigrationUtils,
};
