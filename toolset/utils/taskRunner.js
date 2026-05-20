const { Listr } = require('listr2');
const { installSkippedRendererStyle, SKIPPED_RENDERER_STYLE, wrapTaskDefinitions } = require('./listrOutput.js');

function resolveRenderer() {
    return process.env.TOOLSET_RENDERER ?? (process.stdout.isTTY ? 'default' : 'verbose');
}

function normalizeTasks(command, context) {
    if (typeof command.createTasks === 'function') {
        return command.createTasks(context);
    }

    if (typeof command.execute === 'function') {
        return [
            {
                title: `Выполнение команды ${command.name}`,
                task: () => command.execute(context),
            },
        ];
    }

    throw new Error(`Команда ${command.name} не содержит createTasks или execute`);
}

async function runCommand(command, context, { afterTasks = [] } = {}) {
    installSkippedRendererStyle();

    const runtimeMessages = context.core?.runtime?.state?.runtimeMessages ?? [];
    const beforeTasks = runtimeMessages.length
        ? [
              {
                  title: 'Runtime окружение',
                  task: (_context, task) => {
                      task.output = runtimeMessages.join('\n');
                  },
              },
          ]
        : [];
    const tasks = wrapTaskDefinitions([...beforeTasks, ...normalizeTasks(command, context), ...afterTasks].filter(Boolean));

    if (!tasks.length) {
        return context;
    }

    const runner = new Listr(tasks, {
        concurrent: false,
        exitOnError: true,
        renderer: resolveRenderer(),
        rendererOptions: {
            ...SKIPPED_RENDERER_STYLE,
            collapseSubtasks: false,
            collapseSkips: false,
            clearOutput: false,
            showSkipMessage: true,
            showTimer: true,
            suffixSkips: true,
        },
    });

    await runner.run(context);
    return context;
}

module.exports = {
    runCommand,
};
