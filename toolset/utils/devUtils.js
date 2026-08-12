const { pathToFileURL } = require('node:url');

const WEB_HOST_PORT = 5173;
const MINIPLAYER_PORT = 5174;
const DEV_HOST = '127.0.0.1';

function createDevUtils(runtime, { appControlUtils }) {
    const { fs, path, execSync, spawn } = runtime.deps;
    const { REPO_ROOT, SRC_PATH } = runtime.constants;

    const webModulesDir = path.join(REPO_ROOT, 'webModules');
    const webHostDir = path.join(webModulesDir, 'pulsesyncWebHost');
    const runtimeDir = path.join(webModulesDir, 'pulsesyncRuntime');
    const settingsDir = path.join(webModulesDir, 'pulsesyncSettings');
    const miniPlayerDir = path.join(webModulesDir, 'miniplayer');
    const webHostUrl = `http://${DEV_HOST}:${WEB_HOST_PORT}`;
    const miniPlayerUrl = `http://${DEV_HOST}:${MINIPLAYER_PORT}`;

    function ensureProjectDependencies(projectDir) {
        const vitePackagePath = path.join(projectDir, 'node_modules', 'vite', 'package.json');
        if (fs.existsSync(vitePackagePath)) return;

        console.log(`[dev] Установка зависимостей ${path.relative(REPO_ROOT, projectDir)}...`);
        execSync('corepack yarn install --frozen-lockfile', {
            cwd: projectDir,
            env: process.env,
            stdio: 'inherit',
        });
    }

    async function importProjectVite(projectDir) {
        const viteEntryPath = path.join(projectDir, 'node_modules', 'vite', 'dist', 'node', 'index.js');
        return import(pathToFileURL(viteEntryPath).href);
    }

    async function startViteServer(projectDir, port, configFileName = 'vite.config.ts') {
        const vite = await importProjectVite(projectDir);
        const server = await vite.createServer({
            configFile: path.join(projectDir, configFileName),
            root: projectDir,
            server: {
                host: DEV_HOST,
                port,
                strictPort: true,
            },
        });

        await server.listen();
        server.printUrls();
        return server;
    }

    function waitForInitialBuild(watcher, displayName) {
        return new Promise((resolve, reject) => {
            const handleEvent = (event) => {
                if (event.code === 'END') {
                    watcher.off('event', handleEvent);
                    console.log(`[dev] ${displayName}: начальная сборка готова`);
                    resolve();
                } else if (event.code === 'ERROR') {
                    watcher.off('event', handleEvent);
                    reject(event.error);
                }
            };

            watcher.on('event', handleEvent);
        });
    }

    async function startWatchBuild(projectDir, configFileName, outDir, displayName) {
        const vite = await importProjectVite(projectDir);
        const watcher = await vite.build({
            configFile: path.join(projectDir, configFileName),
            root: projectDir,
            build: {
                emptyOutDir: false,
                outDir,
                watch: {},
            },
        });

        if (!watcher || typeof watcher.on !== 'function') {
            throw new Error(`${displayName}: Vite не вернул build watcher`);
        }

        await waitForInitialBuild(watcher, displayName);
        return watcher;
    }

    function resolveElectronExecutable() {
        const electronModulePath = require.resolve('electron', { paths: [REPO_ROOT] });
        return require(electronModulePath);
    }

    async function start() {
        [webHostDir, runtimeDir, settingsDir, miniPlayerDir].forEach(ensureProjectDependencies);

        await appControlUtils.closeYandexMusic();

        const resources = [];
        let electronProcess;
        let mainWatcher;
        let restartTimer;
        let restartRequested = false;
        let shuttingDown = false;
        let resolveFinished;
        const finished = new Promise((resolve) => {
            resolveFinished = resolve;
        });

        const closeResource = async (resource) => {
            try {
                await resource?.close?.();
            } catch (error) {
                console.warn('[dev] Не удалось корректно остановить ресурс:', error.message);
            }
        };

        const shutdown = async () => {
            if (shuttingDown) return;
            shuttingDown = true;
            clearTimeout(restartTimer);
            mainWatcher?.close();
            mainWatcher = undefined;

            if (electronProcess && !electronProcess.killed) electronProcess.kill();
            electronProcess = undefined;

            await Promise.all(resources.reverse().map(closeResource));
            resolveFinished();
        };

        const spawnElectron = () => {
            if (shuttingDown) return;

            console.log('[dev] Запуск Electron из src...');
            electronProcess = spawn(resolveElectronExecutable(), [SRC_PATH], {
                cwd: REPO_ROOT,
                env: {
                    ...process.env,
                    PULSESYNC_DEV: '1',
                    PULSESYNC_WEB_HOST_DEV_URL: webHostUrl,
                    PULSESYNC_MINIPLAYER_DEV_URL: miniPlayerUrl,
                    PULSESYNC_DEV_RESOURCES_PATH: path.dirname(runtime.constants.DIRECT_DIST_PATH),
                },
                stdio: 'inherit',
            });

            electronProcess.once('exit', (code, signal) => {
                electronProcess = undefined;
                if (shuttingDown) return;
                if (restartRequested) {
                    restartRequested = false;
                    spawnElectron();
                    return;
                }

                console.log(`[dev] Electron завершён${signal ? ` (${signal})` : ` с кодом ${code ?? 0}`}`);
                void shutdown();
            });
        };

        const scheduleElectronRestart = (fileName) => {
            if (shuttingDown || restartRequested) return;
            clearTimeout(restartTimer);
            restartTimer = setTimeout(() => {
                if (shuttingDown) return;
                console.log(`[dev] Изменён src/main/${fileName}. Перезапуск Electron...`);
                restartRequested = true;
                if (electronProcess) {
                    if (!electronProcess.killed) electronProcess.kill();
                } else {
                    restartRequested = false;
                    spawnElectron();
                }
            }, 250);
        };

        const handleSignal = () => void shutdown();
        process.once('SIGINT', handleSignal);
        process.once('SIGTERM', handleSignal);

        try {
            console.log('[dev] Запуск Vite HMR для PulseSync WebHost и настроек...');
            resources.push(await startViteServer(webHostDir, WEB_HOST_PORT));

            console.log('[dev] Запуск Vite HMR для миниплеера...');
            resources.push(await startViteServer(miniPlayerDir, MINIPLAYER_PORT, 'vite.config.js'));

            console.log('[dev] Запуск watch-сборок PulseSync Runtime и isolated runtime...');
            resources.push(await startWatchBuild(runtimeDir, 'vite.config.ts', path.join(SRC_PATH, 'app', 'pulsesync-runtime'), 'PulseSync Runtime'));
            resources.push(await startWatchBuild(webHostDir, 'vite.isolated.config.ts', path.join(SRC_PATH, 'app', 'pulsesync-web'), 'PulseSync isolated runtime'));

            mainWatcher = fs.watch(path.join(SRC_PATH, 'main'), { recursive: true }, (_eventType, fileName) => {
                const normalizedFileName = String(fileName ?? '').replaceAll('\\', '/');
                if (!normalizedFileName || normalizedFileName.startsWith('lib/miniplayer/renderer/')) return;
                scheduleElectronRestart(normalizedFileName);
            });

            spawnElectron();
            console.log('[dev] Dev-режим запущен. Нажмите Ctrl+C для остановки.');
            await finished;
        } catch (error) {
            await shutdown();
            throw error;
        } finally {
            process.off('SIGINT', handleSignal);
            process.off('SIGTERM', handleSignal);
        }
    }

    return {
        start,
    };
}

module.exports = {
    createDevUtils,
};
