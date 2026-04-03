module.exports = {
    name: 'build',
    description: 'собирает проект в asar-файл',
    order: 10,
    usage: 'build [--src=<path>] [--dest=<path>] [-m] [--modernize] [-d] [--noNativeModules] [--forceOpen] [-r] [--buildZstd] [--lastExtracted] [--onlyUploadAppAsar] [--onlySendPatchNotes] [--oldYMHashOverride=<hash>]',
    flags: ['src', 'dest', 'm', 'modernize', 'd', 'noNativeModules', 'forceOpen', 'r', 'buildZstd', 'lastExtracted', 'onlyUploadAppAsar', 'onlySendPatchNotes', 'oldYMHashOverride'],
    async execute({ core, options }) {
        if (options.shouldBuildDirectly) {
            await core.buildUtils.buildDirectly(options.src, !options.shouldMinify, options.noNativeModules, options.forceOpen, options.shouldModernize);
            return;
        }

        await core.buildUtils.build({
            srcPath: options.src,
            destDir: options.dest,
            noMinify: !options.shouldMinify,
            noNativeModules: options.noNativeModules,
            modernize: options.shouldModernize,
        });

        if ((options.shouldRelease && !options.onlySendPatchNotes) || options.shouldBuildZstd) {
            await core.buildUtils.prepareReleaseAsarArtifact(options.dest);
        }

        if (options.shouldRelease) {
            await core.releaseUtils.release({
                dest: options.dest,
                versions: undefined,
                onlyUploadAppAsar: options.onlyUploadAppAsar,
                onlySendPatchNotes: options.onlySendPatchNotes,
            });
        }
    },
};
