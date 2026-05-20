module.exports = {
    name: 'upload-unpacked',
    description: 'упаковывает и загружает shared app.asar.unpacked на сервер',
    order: 31,
    usage: 'upload-unpacked [--src=<path>]',
    flags: ['src'],
    createTasks({ options }) {
        return [
            {
                title: 'Упаковка и загрузка app.asar.unpacked',
                task: async ({ core }) => {
                    await core.releaseUtils.uploadUnpacked({
                        sourcePath: options.src,
                    });
                },
            },
        ];
    },
};
