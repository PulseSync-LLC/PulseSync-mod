module.exports = {
    name: 'pretty',
    description: 'форматирует extracted-билд через Oxfmt',
    order: 90,
    usage: 'pretty [--src=<path>] [--dest=<path>] [--lastExtracted]',
    flags: ['src', 'dest', 'lastExtracted'],
    createTasks({ options }) {
        return [
            {
                title: 'Форматирование extracted-билда',
                task: async ({ core }) => {
                    await core.buildUtils.prettifySource({
                        srcPath: options.src,
                        destDir: options.dest,
                    });
                },
            },
        ];
    },
};
