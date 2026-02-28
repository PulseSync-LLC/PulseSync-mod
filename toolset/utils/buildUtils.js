function createBuildUtils(runtime, { packageUtils, extractUtils, integrityUtils, appControlUtils }) {
    const { asar, fs, fsp, path, crypto, minify, execSync } = runtime.deps;
    const { REPO_ROOT, SRC_PATH, DEFAULT_DIST_PATH, MINIFIED_SRC_PATH, DIRECT_DIST_PATH, PRETTIER_CONFIG_PATH, EXTRACTED_DIR_PATH } = runtime.constants;

    async function minifyDir(srcDir, destDir) {
        await fsp.mkdir(destDir, { recursive: true });
        const items = await fsp.readdir(srcDir);

        for (const item of items) {
            const srcPath = path.join(srcDir, item);
            const destPath = path.join(destDir, item);
            const stat = await fsp.stat(srcPath);

            if (stat.isFile() && srcPath.endsWith('.js')) {
                try {
                    console.time(`    Минифицирован: ${destPath}`);
                    const code = await fsp.readFile(srcPath, 'utf8');
                    const result = await minify(code);
                    if (result.error) {
                        console.error(`    Ошибка минификации ${destPath}:`, result.error);
                        continue;
                    }
                    await fsp.writeFile(destPath, result.code, 'utf8');
                    console.timeEnd(`    Минифицирован: ${destPath}`);
                } catch (error) {
                    console.warn(`    Ошибка при минификации ${destPath}:`, error);
                    await fsp.cp(srcPath, destPath, { recursive: true });
                    console.log(`    Пропущен и скопирован: ${destPath}`);
                }
            } else if (stat.isDirectory()) {
                await minifyDir(srcPath, destPath);
            } else {
                await fsp.cp(srcPath, destPath, { recursive: true });
                console.log(`    Скопирован: ${destPath}`);
            }
        }
    }

    function hashDirFiltered(dir, ignore = ['node_modules', 'dist', 'build', '.build-meta.json', '.git', '.DS_Store']) {
        const hash = crypto.createHash('sha256');

        function walk(currentPath) {
            const entries = fs.readdirSync(currentPath, { withFileTypes: true });
            for (const entry of entries) {
                if (ignore.includes(entry.name)) continue;

                const fullPath = path.join(currentPath, entry.name);
                if (entry.isDirectory()) {
                    walk(fullPath);
                } else {
                    hash.update(entry.name);
                    hash.update(fs.readFileSync(fullPath));
                }
            }
        }

        walk(dir);
        return hash.digest('hex');
    }

    function getNativeBuildKey(nativeDir) {
        return crypto
            .createHash('sha256')
            .update(
                JSON.stringify({
                    sourcesHash: hashDirFiltered(nativeDir),
                    abi: process.versions.modules,
                    platform: process.platform,
                    arch: process.arch,
                }),
            )
            .digest('hex');
    }

    async function buildNativeModule(moduleName) {
        const nativeDir = path.join(REPO_ROOT, 'native', moduleName);
        const gypPath = path.join(nativeDir, 'binding.gyp');
        if (!fs.existsSync(gypPath)) {
            throw new Error(`Не найден binding.gyp в ${nativeDir}`);
        }

        const gyp = JSON.parse(
            fs
                .readFileSync(gypPath, 'utf8')
                .replace(/\/\/.*$/gm, '')
                .replace(/,\s*]/g, ']')
                .replace(/,\s*}/g, '}'),
        );

        const targetName = gyp.targets?.[0]?.target_name;
        if (!targetName) {
            throw new Error('Не удалось получить target_name');
        }

        const destDir = path.join(REPO_ROOT, 'src', 'main', 'native_modules', targetName);
        const destNode = path.join(destDir, `${targetName}.node`);
        const metaPath = path.join(destDir, '.build-meta.json');
        const buildKey = getNativeBuildKey(nativeDir);

        if (fs.existsSync(destNode) && fs.existsSync(metaPath) && JSON.parse(fs.readFileSync(metaPath, 'utf8')).buildKey === buildKey) {
            console.log(`⏩ Нативный модуль ${targetName} актуален — сборка пропущена`);
            return;
        }

        console.log(`🔨 Сборка нативного модуля: ${targetName}`);
        execSync('yarn run build', { cwd: nativeDir, stdio: 'inherit' });

        const builtNode = path.join(nativeDir, 'build', 'Release', `${targetName}.node`);
        await fsp.mkdir(destDir, { recursive: true });
        await fsp.copyFile(builtNode, destNode);

        const jsDir = path.join(nativeDir, 'js');
        if (fs.existsSync(jsDir)) {
            for (const file of await fsp.readdir(jsDir)) {
                await fsp.copyFile(path.join(jsDir, file), path.join(destDir, file));
            }
        }

        fs.writeFileSync(
            metaPath,
            JSON.stringify(
                {
                    buildKey,
                    builtAt: new Date().toISOString(),
                },
                null,
                2,
            ),
        );

        console.log(`✅ Модуль ${targetName} собран`);
    }

    async function buildNativeModules() {
        console.log('Собираю нативные модули');
        const nativeDir = path.join(REPO_ROOT, 'native');
        const modules = (await fsp.readdir(nativeDir, { withFileTypes: true })).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
        for (const moduleName of modules) {
            await buildNativeModule(moduleName);
        }
    }

    async function buildMiniPlayer(force = false) {
        const miniPlayerDir = path.join(REPO_ROOT, 'miniplayer');
        const metaPath = path.join(miniPlayerDir, '.build-meta.json');

        if (!fs.existsSync(miniPlayerDir)) {
            console.log('Миниплеер не найден, сборка пропущена');
            return;
        }

        const buildKey = crypto
            .createHash('sha256')
            .update(
                JSON.stringify({
                    sourcesHash: hashDirFiltered(miniPlayerDir),
                    node: process.version,
                    platform: process.platform,
                    arch: process.arch,
                }),
            )
            .digest('hex');

        if (!force && fs.existsSync(metaPath)) {
            const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
            if (meta.buildKey === buildKey) {
                console.log('⏩ Миниплеер актуален — сборка пропущена');
                return;
            }
        }

        console.log('🎵 Сборка миниплеера...');
        console.time('Миниплеер собран');

        execSync('yarn', {
            cwd: miniPlayerDir,
            stdio: 'inherit',
        });

        execSync('yarn run build', {
            cwd: miniPlayerDir,
            stdio: 'inherit',
        });

        console.timeEnd('Миниплеер собран');

        fs.writeFileSync(
            metaPath,
            JSON.stringify(
                {
                    buildKey,
                    builtAt: new Date().toISOString(),
                },
                null,
                2,
            ),
        );

        console.log('✅ Миниплеер успешно собран');
    }

    async function build(
        { srcPath = SRC_PATH, destDir = DEFAULT_DIST_PATH, noMinify = false, noNativeModules = false } = {
            srcPath: SRC_PATH,
            destDir: DEFAULT_DIST_PATH,
            noMinify: false,
        },
    ) {
        let workPath = srcPath;

        await buildMiniPlayer();

        const isMac = process.platform === 'darwin';
        if (!noNativeModules && !isMac) {
            await buildNativeModules();
        }

        if (!noMinify) {
            console.log('Минификация...');
            console.time('Минификация завершена');
            await minifyDir(srcPath, MINIFIED_SRC_PATH);
            console.timeEnd('Минификация завершена');
            workPath = MINIFIED_SRC_PATH;
        }

        console.log('Архивация из ' + workPath + ' в ' + destDir);
        console.time('Архивация завершена');
        await asar.createPackageWithOptions(workPath, destDir, { unpackDir: '**/node_modules/{sharp,@img}/**/*' });
        console.timeEnd('Архивация завершена');

        if (!noMinify) {
            await fsp.rm(MINIFIED_SRC_PATH, { recursive: true });
            console.log('Минифицированный код отчищен');
        }
    }

    async function buildDirectly(src, noMinify = false, noNativeModules = false, forceOpen = false) {
        if (process.platform === 'darwin' && integrityUtils.checkIfSystemIntegrityProtectionEnabled()) {
            console.log('System Integrity Protection включён. Обход невозможен, пожалуйста, отключите SIP для File System и попробуйте снова.');
            return false;
        }

        integrityUtils.rememberCurrentAsarHash(DIRECT_DIST_PATH);
        const shouldReopen = await appControlUtils.closeYandexMusic();

        await build({
            srcPath: src,
            destDir: DIRECT_DIST_PATH,
            noMinify,
            noNativeModules,
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
        await integrityUtils.bypassAsarIntegrity();

        if (shouldReopen || forceOpen) {
            console.log('Запуск Яндекс Музыки...');
            await appControlUtils.launchYandexMusic();
            console.log('Яндекс Музыка запущена');
        }
    }

    async function spoof(type = 'extracted') {
        console.log('Спуфинг...');
        console.time('Спуфинг завершён');
        const versions = await extractUtils.getLatestYMVersion(type);
        console.log('Последняя версия ЯМ', versions);
        const result = await packageUtils.modifyPackage({ version: versions.version, buildInfo: versions.buildInfo });

        console.timeEnd('Спуфинг завершён');
        console.log('Спуфнуто с', result.oldVersion, 'до', result.newVersion);
        return result;
    }

    async function prettifyLatestPure() {
        console.log('Форматирование через Prettier');
        console.time('Форматирование завершено');
        const latestPureDir = await extractUtils.getLatestExtractedSrcDir();
        if (!latestPureDir) return;

        const baseName = path.basename(latestPureDir, '@pure');
        const prettyDir = path.join(EXTRACTED_DIR_PATH, `${baseName}@pretty`);
        await fsp.rm(prettyDir, { recursive: true, force: true });
        await fsp.cp(latestPureDir, prettyDir, { recursive: true });
        execSync(`prettier --config "${PRETTIER_CONFIG_PATH}" --ignore-path "${path.join(REPO_ROOT, '.prettierignore')}" --write "${prettyDir}"`);
        console.timeEnd('Форматирование завершено');
    }

    return {
        build,
        buildDirectly,
        spoof,
        prettifyLatestPure,
    };
}

module.exports = {
    createBuildUtils,
};
