module.exports = {
    name: 'upload-unpacked',
    description: 'упаковывает и загружает shared app.asar.unpacked на сервер',
    order: 31,
    usage: 'upload-unpacked [--src=<path>]',
    flags: ['src'],
    async execute({ core, options }) {
        await core.releaseUtils.uploadUnpacked({
            sourcePath: options.src,
        });
    },
};
