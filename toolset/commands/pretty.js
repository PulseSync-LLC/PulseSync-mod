module.exports = {
    name: 'pretty',
    description: 'форматирует последний extracted@pure через Prettier',
    order: 90,
    usage: 'pretty',
    flags: [],
    async execute({ core }) {
        await core.buildUtils.prettifyLatestPure();
    },
};
