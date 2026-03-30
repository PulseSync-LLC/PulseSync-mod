module.exports = {
    name: 'modernize',
    description: 'модернизирует extracted-билд, вырезая лишние полифилы',
    order: 85,
    usage: 'modernize [--src=<path>] [--dest=<path>] [--lastExtracted]',
    flags: ['src', 'dest', 'lastExtracted'],
    async execute({ core, options }) {
        await core.buildUtils.modernizeSource({
            srcPath: options.src,
            destDir: options.dest,
        });
    },
};
