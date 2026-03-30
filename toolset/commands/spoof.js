module.exports = {
    name: 'spoof',
    description: 'подменяет версию приложения в src на последнюю',
    order: 20,
    usage: 'spoof [-b] [-r] [-m] [--modernize] [--noNativeModules] [--dest=<path>] [--onlyUploadAppAsar] [--onlySendPatchNotes]',
    flags: ['b', 'r', 'm', 'modernize', 'noNativeModules', 'dest', 'onlyUploadAppAsar', 'onlySendPatchNotes'],
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
