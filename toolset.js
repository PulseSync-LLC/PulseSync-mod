const path = require('path');
const minimist = require('minimist');
const { createToolsetCore } = require('./toolset/core.js');
const { loadCommands } = require('./toolset/utils/loadCommands.js');
const { resolveCommandOptions } = require('./toolset/utils/options.js');
const { printHelp } = require('./toolset/utils/help.js');

(async () => {
    const args = minimist(process.argv.slice(2));
    const rawCommandName = args._?.[0];
    const commandName = rawCommandName ?? 'help';

    console.log(args);

    const core = await createToolsetCore();
    const commands = await loadCommands(path.join(__dirname, 'toolset', 'commands'));
    const command = commands.get(commandName) ?? commands.get('help');

    if (!command) {
        throw new Error('Help command is not registered');
    }

    if (rawCommandName && !commands.has(rawCommandName)) {
        console.log('Неизвестная команда:', rawCommandName, '\nИнтерпретирую как help...');
    }

    const shouldMeasureExecutionTime = rawCommandName && command.name !== 'help';

    if (shouldMeasureExecutionTime) {
        console.time(`${rawCommandName} исполнен за`);
    }

    try {
        const options = await resolveCommandOptions(command.name, args, core);
        await command.execute({
            args,
            core,
            options,
            commands,
            printHelp,
        });

        const isYmRunning = await core.appControlUtils.isYandexMusicRunning();
        if (!isYmRunning && options.forceOpen) {
            console.log('Запуск Яндекс Музыки...');
            await core.appControlUtils.launchYandexMusic();
            console.log('Яндекс Музыка запущена');
        }
    } finally {
        if (shouldMeasureExecutionTime) {
            console.timeEnd(`${rawCommandName} исполнен за`);
        }
    }
})();
