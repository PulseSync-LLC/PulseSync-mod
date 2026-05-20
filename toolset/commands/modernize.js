module.exports = {
    name: 'modernize',
    description: 'модернизирует extracted-билд, вырезая лишние полифилы',
    order: 85,
    usage: 'modernize [--src=<path>] [--dest=<path>] [--lastExtracted]',
    flags: ['src', 'dest', 'lastExtracted'],
    createTasks({ options }) {
        return [
            {
                title: 'Модернизация extracted-билда',
                task: async ({ core }) => {
                    await core.buildUtils.modernizeSource({
                        srcPath: options.src,
                        destDir: options.dest,
                    });
                },
            },
        ];
    },
};
