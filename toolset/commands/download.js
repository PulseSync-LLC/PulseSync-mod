module.exports = {
    name: 'download',
    description: 'скачивает установщик YM и распаковывает app.asar в ./extracted/<version>@pure',
    order: 40,
    usage: 'download [--version=<semver>] [-f]',
    flags: ['version', 'f'],
    createTasks({ options }) {
        return [
            {
                title: 'Скачивание и извлечение Яндекс Музыки',
                task: async ({ core }) => {
                    await core.extractUtils.downloadAndExtractYm({ versionOverride: options.downloadVersion, force: options.force });
                },
            },
        ];
    },
};
