module.exports = {
    name: 'pretty',
    description: 'форматирует extracted-билд через Prettier',
    order: 90,
    usage: 'pretty [--src=<path>] [--dest=<path>] [--lastExtracted] [--modernize]',
    flags: ['src', 'dest', 'lastExtracted', 'modernize'],
    async execute({ core, options }) {
        await core.buildUtils.prettifySource({
            srcPath: options.src,
            destDir: options.dest,
            modernize: options.shouldModernize,
        });
    },
};
