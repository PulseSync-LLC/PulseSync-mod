module.exports = {
    name: 'spoof',
    description: 'подменяет версию приложения в src на последнюю',
    order: 20,
    usage: 'spoof [-b] [-r] [-m] [--modernize] [--noNativeModules] [--dest=<path>] [--buildZstd] [--onlyUploadAppAsar] [--onlySendPatchNotes]',
    flags: ['b', 'r', 'm', 'modernize', 'noNativeModules', 'dest', 'buildZstd', 'onlyUploadAppAsar', 'onlySendPatchNotes'],
    async execute({ core, options }) {
        const versions = await core.buildUtils.spoof('extracted');

        if (options.shouldBuild || options.shouldRelease) {
            await core.buildUtils.build({
                destDir: options.dest,
                noMinify: !options.shouldMinify,
                noNativeModules: options.noNativeModules,
                modernize: options.shouldModernize,
            });
        }

        if ((options.shouldRelease && !options.onlySendPatchNotes) || options.shouldBuildZstd) {
            await core.buildUtils.prepareReleaseAsarArtifact(options.dest);
        }

        if (options.shouldRelease) {
            await core.releaseUtils.release({
                dest: options.dest,
                versions,
                onlyUploadAppAsar: options.onlyUploadAppAsar,
                onlySendPatchNotes: options.onlySendPatchNotes,
            });
        }
    },
};
