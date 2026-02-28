module.exports = {
    name: 'rebuild',
    description: 'шорткат для build -d --noNativeModules --forceOpen',
    order: 80,
    usage: 'rebuild [--src=<path>] [--lastExtracted] [--oldYMHashOverride=<hash>]',
    flags: ['src', 'lastExtracted', 'oldYMHashOverride'],
    async execute({ core, options }) {
        await core.buildUtils.buildDirectly(options.src, true, false, true);
    },
};
