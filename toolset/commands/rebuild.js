const { createDirectBuildTask } = require('../utils/commandTasks.js');

module.exports = {
    name: 'rebuild',
    description: 'шорткат для build -d --noNativeModules --forceOpen',
    order: 80,
    usage: 'rebuild [--src=<path>] [--lastExtracted] [--oldYMHashOverride=<hash>]',
    flags: ['src', 'lastExtracted', 'oldYMHashOverride'],
    createTasks() {
        return [
            createDirectBuildTask({
                title: 'Пересборка установленной Яндекс Музыки',
                srcPath: (context) => context.options.src,
                noMinify: true,
                noNativeModules: false,
                forceOpen: true,
                modernize: false,
            }),
        ];
    },
};
