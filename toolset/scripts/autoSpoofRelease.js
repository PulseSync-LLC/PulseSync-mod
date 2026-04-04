const minimist = require('minimist');
const { createToolsetCore } = require('../core.js');

async function main() {
    const args = minimist(process.argv.slice(2), {
        boolean: ['force', 'minify', 'modernize', 'noNativeModules', 'onlyUploadAppAsar', 'onlySendPatchNotes'],
        string: ['version', 'dest'],
    });

    const force = Boolean(args.force);
    const versionOverride = args.version ?? null;
    const shouldMinify = Boolean(args.minify);
    const shouldModernize = Boolean(args.modernize);
    const noNativeModules = Boolean(args.noNativeModules);
    const onlyUploadAppAsar = Boolean(args.onlyUploadAppAsar);
    const onlySendPatchNotes = Boolean(args.onlySendPatchNotes);

    const core = await createToolsetCore();
    const { fs, path } = core.runtime.deps;
    const srcPackagePath = path.join(core.constants.SRC_PATH, 'package.json');
    const currentVersion = JSON.parse(fs.readFileSync(srcPackagePath, 'utf8')).version;

    let targetVersion = versionOverride;
    if (!targetVersion) {
        const latestInfo = await core.extractUtils.fetchLatestYmYaml();
        targetVersion = latestInfo?.version ?? null;
    }

    if (!targetVersion) {
        throw new Error('Не удалось определить целевую версию Yandex Music для спуфа');
    }

    console.log(`Текущая версия в src/package.json: ${currentVersion}`);
    console.log(`Целевая версия для спуфа: ${targetVersion}`);

    if (!force && currentVersion === targetVersion) {
        console.log('Спуф не требуется: версия уже актуальна, релиз пропущен');
        return;
    }

    const extractedDir = await core.extractUtils.downloadAndExtractYm({
        versionOverride,
        force,
    });

    if (!extractedDir) {
        throw new Error('Не удалось скачать и извлечь актуальный билд Yandex Music');
    }

    console.log(`Подготовлен extracted-источник: ${extractedDir}`);

    const versions = await core.buildUtils.spoof('extracted');
    const dest = args.dest ?? core.constants.DEFAULT_DIST_PATH;

    await core.buildUtils.build({
        destDir: dest,
        noMinify: !shouldMinify,
        noNativeModules,
        modernize: shouldModernize,
    });

    if (!onlySendPatchNotes) {
        await core.buildUtils.prepareReleaseAsarArtifact(dest);
    }

    await core.releaseUtils.release({
        dest,
        versions,
        onlyUploadAppAsar,
        onlySendPatchNotes,
    });
}

main().catch((error) => {
    console.error(error?.stack ?? error?.message ?? error);
    process.exit(1);
});
