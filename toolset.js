const path = require('path');
const minimist = require('minimist');
const { installToolsetConsoleStyles } = require('./toolset/utils/logger.js');
const { createToolsetCore } = require('./toolset/core.js');
const { loadCommands } = require('./toolset/utils/loadCommands.js');
const { resolveCommandOptions } = require('./toolset/utils/options.js');
const { printHelp } = require('./toolset/utils/help.js');
const { runCommand } = require('./toolset/utils/taskRunner.js');
const { createForceOpenTask } = require('./toolset/utils/commandTasks.js');

installToolsetConsoleStyles();

(async () => {
    const args = minimist(process.argv.slice(2));
    const rawCommandName = args._?.[0];
    const commandName = rawCommandName ?? 'help';

    const core = await createToolsetCore();
    const commands = await loadCommands(path.join(__dirname, 'toolset', 'commands'));
    const command = commands.get(commandName) ?? commands.get('help');

    if (!command) {
        throw new Error('Команда help не зарегистрирована');
    }

    if (rawCommandName && !commands.has(rawCommandName)) {
        console.warn('Неизвестная команда:', rawCommandName, '\nИнтерпретирую как help...');
    }

    if (command.name === 'help') {
        await command.execute({
            args,
            core,
            commands,
            printHelp,
        });
        return;
    }

    const options = await resolveCommandOptions(command.name, args, core);
    const afterTasks = options.forceOpen ? [createForceOpenTask()] : [];

    await runCommand(
        command,
        {
            args,
            core,
            options,
            commands,
            printHelp,
            state: {},
        },
        { afterTasks },
    );
})();
