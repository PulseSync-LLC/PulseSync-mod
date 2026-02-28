module.exports = {
    name: 'extract',
    description: 'извлекает новый билд из приложения',
    order: 50,
    usage: 'extract [--src=<path>] [--extractType=<type>] [--withoutPure] [-f] [-p] [-d] [-m] [-b] [--forceOpen]',
    flags: ['src', 'extractType', 'withoutPure', 'f', 'p', 'd', 'm', 'b', 'forceOpen'],
    async execute({ core, options }) {
        const { extracted } = await core.extractUtils.extractBuild(options.force, options.src, options.extractType, !options.withoutPure);

        if (options.shouldPatch) {
            await core.patchUtils.patchExtractedBuild(extracted);
        }

        if (options.shouldBuildDirectly) {
            await core.buildUtils.buildDirectly(extracted, !options.shouldMinify, options.noNativeModules, options.forceOpen);
        }

        if (options.shouldBuild) {
            await core.buildUtils.build({
                srcPath: extracted,
                destDir: core.constants.DEFAULT_PATCHED_DIST_PATH,
                noMinify: !options.shouldMinify,
                noNativeModules: options.noNativeModules,
            });
        }
    },
};
