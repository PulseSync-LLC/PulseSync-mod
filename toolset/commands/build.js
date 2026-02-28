module.exports = {
    name: 'build',
    description: 'собирает проект в asar-файл',
    order: 10,
    usage: 'build [--src=<path>] [--dest=<path>] [-m] [-d] [--noNativeModules] [--forceOpen] [-r] [--lastExtracted] [--onlyUploadAppAsar] [--oldYMHashOverride=<hash>]',
    flags: ['src', 'dest', 'm', 'd', 'noNativeModules', 'forceOpen', 'r', 'lastExtracted', 'onlyUploadAppAsar', 'oldYMHashOverride'],
    async execute({ core, options }) {
        if (options.shouldBuildDirectly) {
            await core.buildUtils.buildDirectly(options.src, !options.shouldMinify, options.noNativeModules, options.forceOpen);
            return;
        }

        await core.buildUtils.build({
            srcPath: options.src,
            destDir: options.dest,
            noMinify: !options.shouldMinify,
            noNativeModules: options.noNativeModules,
        });

        if (options.shouldRelease) {
            await core.releaseUtils.release({
                dest: options.dest,
                versions: undefined,
                onlyUploadAppAsar: options.onlyUploadAppAsar,
            });
        }
    },
};
