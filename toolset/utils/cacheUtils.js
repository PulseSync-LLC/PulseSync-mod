function createCacheUtils(runtime) {
    const { fs, fsp, path } = runtime.deps;
    const { REPO_ROOT } = runtime.constants;

    async function getModuleDirectories(directory, marker) {
        const moduleRoot = path.join(REPO_ROOT, directory);
        if (!fs.existsSync(moduleRoot)) return [];
        return (await fsp.readdir(moduleRoot, { withFileTypes: true }))
            .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(moduleRoot, entry.name, marker)))
            .map((entry) => path.join(directory, entry.name));
    }

    async function getBuildCacheEntries() {
        const webModules = await getModuleDirectories('webModules', 'package.json');
        const nativeModules = await getModuleDirectories('native', 'native-build.json');
        return [
            ...webModules.map((directory) => ({
                title: `Веб-модуль ${path.basename(directory)}`,
                paths: ['.build-meta.json', 'dist', 'node_modules/.vite', 'node_modules/.vite-temp', 'node_modules/.tmp'].map((cachePath) =>
                    path.join(directory, cachePath),
                ),
            })),
            ...nativeModules.map((directory) => ({
                title: `Нативный модуль ${path.basename(directory)}`,
                paths: ['.build-meta.json', 'rust/target', 'target', 'build', 'dist'].map((cachePath) => path.join(directory, cachePath)),
            })),
            {
                title: 'Собранные копии модулей в src',
                paths: ['src/main/lib/miniplayer/renderer', 'src/app/pulsesync-web', 'src/app/pulsesync-runtime', 'src/main/native_modules'],
            },
        ];
    }

    function isInsideDirectory(directory, target) {
        const relative = path.relative(directory, target);
        return relative && relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
    }

    async function clearBuildCachePaths(paths) {
        const repositoryRoot = await fsp.realpath(REPO_ROOT);
        const targets = [];
        for (const relativePath of paths) {
            const target = path.resolve(REPO_ROOT, relativePath);
            if (!isInsideDirectory(path.resolve(REPO_ROOT), target)) {
                throw new Error(`Путь кеша находится вне репозитория: ${target}`);
            }

            let resolvedTarget;
            try {
                resolvedTarget = await fsp.realpath(target);
            } catch (error) {
                if (error.code === 'ENOENT') continue;
                throw error;
            }
            if (!isInsideDirectory(repositoryRoot, resolvedTarget)) {
                throw new Error(`Путь кеша ссылается за пределы репозитория: ${target}`);
            }
            targets.push({ target, relativePath });
        }

        for (const { target } of targets) {
            await fsp.rm(target, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
        }
        return targets.map(({ relativePath }) => relativePath);
    }

    return { getBuildCacheEntries, clearBuildCachePaths };
}

module.exports = { createCacheUtils };
