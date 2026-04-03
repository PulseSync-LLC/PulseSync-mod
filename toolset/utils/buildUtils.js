function createBuildUtils(runtime, { packageUtils, extractUtils, integrityUtils, appControlUtils, modernizeUtils, zstdUtils }) {
    const { asar, fs, fsp, path, crypto, minify, execSync } = runtime.deps;
    const { REPO_ROOT, SRC_PATH, DEFAULT_DIST_PATH, MODERNIZED_SRC_PATH, MINIFIED_SRC_PATH, DIRECT_DIST_PATH, PRETTIER_CONFIG_PATH } = runtime.constants;

    const MINIFIABLE_EXTENSIONS = new Set(['.js', '.mjs', '.cjs']);

    function isMinifiableFile(filePath) {
        return MINIFIABLE_EXTENSIONS.has(path.extname(filePath).toLowerCase());
    }

    async function minifyDir(srcDir, destDir) {
        await fsp.mkdir(destDir, { recursive: true });
        const items = await fsp.readdir(srcDir);

        for (const item of items) {
            const srcPath = path.join(srcDir, item);
            const destPath = path.join(destDir, item);
            const stat = await fsp.stat(srcPath);

            if (stat.isDirectory()) {
                await minifyDir(srcPath, destPath);
                continue;
            }

            if (!stat.isFile() || !isMinifiableFile(srcPath)) {
                await fsp.cp(srcPath, destPath, { recursive: true, force: true });
                continue;
            }

            try {
                console.time(`    Минифицирован: ${destPath}`);
                const code = await fsp.readFile(srcPath, 'utf8');
                const result = await minify(code);

                if (result.error) {
                    console.error(`    Ошибка минификации ${destPath}:`, result.error);
                    await fsp.cp(srcPath, destPath, { recursive: true, force: true });
                    continue;
                }

                await fsp.writeFile(destPath, result.code, 'utf8');
                console.timeEnd(`    Минифицирован: ${destPath}`);
            } catch (error) {
                console.warn(`    Ошибка при минификации ${destPath}:`, error);
                await fsp.cp(srcPath, destPath, { recursive: true, force: true });
                console.log(`    Пропущен и скопирован: ${destPath}`);
            }
        }
    }

    function hashDirFiltered(dir, ignore = ['node_modules', 'dist', 'build', '.build-meta.json', '.git', '.DS_Store']) {
        const hash = crypto.createHash('sha256');

        function walk(currentPath) {
            const entries = fs.readdirSync(currentPath, { withFileTypes: true });
            for (const entry of entries) {
                if (ignore.includes(entry.name)) {
                    continue;
                }

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
            console.log(`Нативный модуль ${targetName} актуален, сборка пропущена`);
            return;
        }

        console.log(`Сборка нативного модуля: ${targetName}`);
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

        console.log(`Модуль ${targetName} собран`);
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
                console.log('Миниплеер актуален, сборка пропущена');
                return;
            }
        }

        console.log('Сборка миниплеера...');
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

        console.log('Миниплеер успешно собран');
    }

    function deriveOutputDir(srcPath, extractedSuffix) {
        const baseName = path.basename(srcPath);
        const parentDir = path.dirname(srcPath);

        if (baseName.endsWith('@pure')) {
            return path.join(parentDir, `${baseName.slice(0, -'@pure'.length)}${extractedSuffix}`);
        }

        const fallbackSuffix = extractedSuffix.startsWith('@') ? `-${extractedSuffix.slice(1)}` : extractedSuffix;
        return path.join(parentDir, `${baseName}${fallbackSuffix}`);
    }

    function logModernizeSummary(summary) {
        console.log('Сводка модернизации:');
        for (const line of modernizeUtils.formatSummary(summary)) {
            console.log(`  ${line}`);
        }

        if (summary.errors.length > 0) {
            const preview = summary.errors.slice(0, 5);
            for (const entry of preview) {
                console.warn(`  Скопировано без изменений после ошибки парсинга: ${entry.filePath}`);
            }

            if (summary.errors.length > preview.length) {
                console.warn(`  ...и ещё ${summary.errors.length - preview.length} файлов`);
            }
        }
    }

    async function prepareModernizedSource(srcPath, destPath) {
        await fsp.rm(destPath, { recursive: true, force: true });
        const summary = await modernizeUtils.modernizeDirectory(srcPath, destPath);
        logModernizeSummary(summary);
        return summary;
    }

    async function build(
        { srcPath = SRC_PATH, destDir = DEFAULT_DIST_PATH, noMinify = false, noNativeModules = false, modernize = false } = {
            srcPath: SRC_PATH,
            destDir: DEFAULT_DIST_PATH,
            noMinify: false,
            noNativeModules: false,
            modernize: false,
        },
    ) {
        let workPath = srcPath;
        const cleanupPaths = [];

        await buildMiniPlayer();

        const isMac = process.platform === 'darwin';
        if (!noNativeModules && !isMac) {
            await buildNativeModules();
        }

        try {
            if (modernize) {
                console.log('Модернизация...');
                console.time('Модернизация завершена');
                await prepareModernizedSource(workPath, MODERNIZED_SRC_PATH);
                console.timeEnd('Модернизация завершена');
                workPath = MODERNIZED_SRC_PATH;
                cleanupPaths.push(MODERNIZED_SRC_PATH);
            }

            if (!noMinify) {
                console.log('Минификация...');
                console.time('Минификация завершена');
                await fsp.rm(MINIFIED_SRC_PATH, { recursive: true, force: true });
                await minifyDir(workPath, MINIFIED_SRC_PATH);
                console.timeEnd('Минификация завершена');
                workPath = MINIFIED_SRC_PATH;
                cleanupPaths.push(MINIFIED_SRC_PATH);
            }

            console.log(`Архивация из ${workPath} в ${destDir}`);
            console.time('Архивация завершена');
            await asar.createPackageWithOptions(workPath, destDir, { unpackDir: '**/node_modules/{sharp,@img}/**/*' });
            console.timeEnd('Архивация завершена');
        } finally {
            for (const cleanupPath of cleanupPaths.reverse()) {
                await fsp.rm(cleanupPath, { recursive: true, force: true });
            }

            if (cleanupPaths.includes(MINIFIED_SRC_PATH)) {
                console.log('Временный минифицированный код удалён');
            }

            if (cleanupPaths.includes(MODERNIZED_SRC_PATH)) {
                console.log('Временный модернизированный код удалён');
            }
        }
    }

    async function prepareReleaseAsarArtifact(asarPath = DEFAULT_DIST_PATH) {
        console.log(`Подготовка zstd-артефакта для релиза: ${asarPath}.zst`);
        console.time('Подготовка zstd-артефакта завершена');
        const artifactPath = await zstdUtils.ensureCompressedAsarArtifact(asarPath);
        console.timeEnd('Подготовка zstd-артефакта завершена');
        return artifactPath;
    }

    async function buildDirectly(src, noMinify = false, noNativeModules = false, forceOpen = false, modernize = false) {
        if (process.platform === 'darwin' && integrityUtils.checkIfSystemIntegrityProtectionEnabled()) {
            console.log('System Integrity Protection включён. Отключите SIP для File System и попробуйте снова.');
            return false;
        }

        integrityUtils.rememberCurrentAsarHash(DIRECT_DIST_PATH);
        const shouldReopen = await appControlUtils.closeYandexMusic();

        await build({
            srcPath: src,
            destDir: DIRECT_DIST_PATH,
            noMinify,
            noNativeModules,
            modernize,
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
        console.log('Спуфинг версии package...');
        console.time('Спуфинг завершён');
        const versions = await extractUtils.getLatestYMVersion(type);
        console.log('Последняя версия YM', versions);
        const result = await packageUtils.modifyPackage({ version: versions.version, buildInfo: versions.buildInfo });

        console.timeEnd('Спуфинг завершён');
        console.log('Спуфнуто с', result.oldVersion, 'до', result.newVersion);
        return result;
    }

    async function modernizeSource({ srcPath, destDir } = {}) {
        const resolvedSrc = srcPath ?? (await extractUtils.getLatestExtractedSrcDir());
        if (!resolvedSrc) {
            return undefined;
        }

        const resolvedDest = destDir ?? deriveOutputDir(resolvedSrc, '@modernized');
        console.log('Модернизация...');
        console.time('Модернизация завершена');
        const summary = await prepareModernizedSource(resolvedSrc, resolvedDest);
        console.timeEnd('Модернизация завершена');
        console.log(`Результат модернизации: ${resolvedDest}`);

        return {
            srcPath: resolvedSrc,
            destDir: resolvedDest,
            summary,
        };
    }

    async function prettifySource({ srcPath, destDir, modernize = false } = {}) {
        const resolvedSrc = srcPath ?? (await extractUtils.getLatestExtractedSrcDir());
        if (!resolvedSrc) {
            return undefined;
        }

        const resolvedDest = destDir ?? deriveOutputDir(resolvedSrc, modernize ? '@modernized-pretty' : '@pretty');
        console.log('Форматирование через Prettier');
        console.time('Форматирование завершено');

        if (modernize) {
            await prepareModernizedSource(resolvedSrc, resolvedDest);
        } else {
            await fsp.rm(resolvedDest, { recursive: true, force: true });
            await fsp.cp(resolvedSrc, resolvedDest, { recursive: true, force: true });
        }

        execSync(`prettier --config "${PRETTIER_CONFIG_PATH}" --ignore-path "${path.join(REPO_ROOT, '.prettierignore')}" --write "${resolvedDest}"`);
        console.timeEnd('Форматирование завершено');
        console.log(`Результат pretty: ${resolvedDest}`);

        return {
            srcPath: resolvedSrc,
            destDir: resolvedDest,
        };
    }

    async function prettifyLatestPure(options = {}) {
        return prettifySource(options);
    }

    return {
        build,
        prepareReleaseAsarArtifact,
        buildDirectly,
        spoof,
        modernizeSource,
        prettifySource,
        prettifyLatestPure,
    };
}

module.exports = {
    createBuildUtils,
};
