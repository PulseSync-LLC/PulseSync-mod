module.exports = {
    name: 'bypass-asar-integrity',
    description: 'обходит проверку целостности asar',
    order: 70,
    usage: 'bypass-asar-integrity [--dest=<path>] [--oldYMHashOverride=<hash>]',
    flags: ['dest', 'oldYMHashOverride'],
    createTasks({ options }) {
        return [
            {
                title: 'Обход проверки целостности app.asar',
                task: async ({ core }) => {
                    await core.integrityUtils.bypassAsarIntegrity(options.dest);
                },
            },
        ];
    },
};
