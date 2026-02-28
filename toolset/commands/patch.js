module.exports = {
    name: 'patch',
    description: 'патчит извлечённый билд для разблокировки девтулзов и дев панели',
    order: 60,
    usage: 'patch [--src=<path>] [-d] [-m] [--noNativeModules] [--forceOpen]',
    flags: ['src', 'd', 'm', 'noNativeModules', 'forceOpen'],
    async execute({ core, options }) {
        await core.patchUtils.patchExtractedBuild(options.src);

        if (options.shouldBuildDirectly) {
            await core.buildUtils.buildDirectly(options.src, !options.shouldMinify, options.noNativeModules, options.forceOpen);
        }
    },
};
