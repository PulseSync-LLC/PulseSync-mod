module.exports = {
    name: 'release',
    description: 'загружает asar на сервер и отправляет патчноут',
    order: 30,
    usage: 'release [--dest=<path>] [--onlyUploadAppAsar] [--onlySendPatchNotes]',
    flags: ['dest', 'onlyUploadAppAsar', 'onlySendPatchNotes'],
    async execute({ core, options }) {
        await core.releaseUtils.release({
            dest: options.dest,
            versions: undefined,
            onlyUploadAppAsar: options.onlyUploadAppAsar,
            onlySendPatchNotes: options.onlySendPatchNotes,
        });
    },
};
