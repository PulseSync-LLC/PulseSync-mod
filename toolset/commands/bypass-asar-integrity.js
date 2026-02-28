module.exports = {
    name: 'bypass-asar-integrity',
    description: 'обходит проверку целостности asar',
    order: 70,
    usage: 'bypass-asar-integrity [--dest=<path>] [--oldYMHashOverride=<hash>]',
    flags: ['dest', 'oldYMHashOverride'],
    async execute({ core, options }) {
        await core.integrityUtils.bypassAsarIntegrity(options.dest);
    },
};
