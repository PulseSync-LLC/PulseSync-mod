const util = require('util');
const { AsyncLocalStorage } = require('node:async_hooks');

const taskConsoleContext = new AsyncLocalStorage();
let activeTaskConsoles = 0;
let originalConsole;

function formatConsoleArg(arg) {
    if (typeof arg === 'string') {
        return arg;
    }

    return util.inspect(arg, {
        colors: false,
        depth: 4,
        breakLength: 160,
    });
}

function formatConsoleArgs(args) {
    return args.map(formatConsoleArg).join(' ');
}

function appendTaskOutput(task, message) {
    if (!message) {
        return;
    }

    task.output = message;
}

function dimSkipReason(message) {
    if (typeof message !== 'string' || !message || process.env.NO_COLOR) {
        return message;
    }

    return `\u001b[2m${message}\u001b[22m`;
}

function dimRendererText(message = '') {
    return dimSkipReason(message);
}

const SKIPPED_RENDERER_STYLE = {
    color: {
        SKIPPED: dimRendererText,
        SKIPPED_WITH_COLLAPSE: dimRendererText,
        SKIPPED_WITHOUT_COLLAPSE: dimRendererText,
    },
    icon: {
        SKIPPED: '○',
        SKIPPED_WITH_COLLAPSE: '○',
        SKIPPED_WITHOUT_COLLAPSE: '○',
    },
};

function installSkippedRendererStyle() {
    try {
        const listr2 = require('listr2');

        if (listr2.LISTR_LOGGER_STYLE) {
            listr2.LISTR_LOGGER_STYLE.icon.SKIPPED = SKIPPED_RENDERER_STYLE.icon.SKIPPED;
            listr2.LISTR_LOGGER_STYLE.color.SKIPPED = SKIPPED_RENDERER_STYLE.color.SKIPPED;
        }

        if (listr2.LISTR_DEFAULT_RENDERER_STYLE) {
            listr2.LISTR_DEFAULT_RENDERER_STYLE.icon.SKIPPED_WITH_COLLAPSE = SKIPPED_RENDERER_STYLE.icon.SKIPPED_WITH_COLLAPSE;
            listr2.LISTR_DEFAULT_RENDERER_STYLE.icon.SKIPPED_WITHOUT_COLLAPSE = SKIPPED_RENDERER_STYLE.icon.SKIPPED_WITHOUT_COLLAPSE;
            listr2.LISTR_DEFAULT_RENDERER_STYLE.color.SKIPPED_WITH_COLLAPSE = SKIPPED_RENDERER_STYLE.color.SKIPPED_WITH_COLLAPSE;
            listr2.LISTR_DEFAULT_RENDERER_STYLE.color.SKIPPED_WITHOUT_COLLAPSE = SKIPPED_RENDERER_STYLE.color.SKIPPED_WITHOUT_COLLAPSE;
        }
    } catch {
        // Styling is best-effort; command execution should not depend on renderer internals.
    }
}

function wrapSkip(skip) {
    if (typeof skip === 'string') {
        return dimSkipReason(skip);
    }

    if (typeof skip !== 'function') {
        return skip;
    }

    return async (...args) => {
        const result = await skip(...args);
        return typeof result === 'string' ? dimSkipReason(result) : result;
    };
}

function installTaskConsole() {
    originalConsole = {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error,
        time: console.time,
        timeLog: console.timeLog,
        timeEnd: console.timeEnd,
    };
    for (const method of ['log', 'info', 'warn', 'error']) {
        console[method] = (...args) => {
            const context = taskConsoleContext.getStore();
            if (context) appendTaskOutput(context.task, formatConsoleArgs(args));
            else originalConsole[method](...args);
        };
    }
    console.time = (label = 'default') => {
        const context = taskConsoleContext.getStore();
        if (context) context.timers.set(label, process.hrtime.bigint());
        else originalConsole.time(label);
    };
    console.timeLog = (label = 'default', ...args) => {
        const context = taskConsoleContext.getStore();
        if (!context) return originalConsole.timeLog(label, ...args);

        const startTime = context.timers.get(label);
        if (!startTime) {
            appendTaskOutput(context.task, `Таймер не найден: ${label}`);
            return;
        }

        const durationMs = Number(process.hrtime.bigint() - startTime) / 1e6;
        const suffix = args.length ? ` ${formatConsoleArgs(args)}` : '';
        appendTaskOutput(context.task, `${label}: ${formatDuration(durationMs)}${suffix}`);
    };
    console.timeEnd = (label = 'default') => {
        const context = taskConsoleContext.getStore();
        if (!context) return originalConsole.timeEnd(label);

        const startTime = context.timers.get(label);
        if (!startTime) {
            appendTaskOutput(context.task, `Таймер не найден: ${label}`);
            return;
        }

        context.timers.delete(label);
        const durationMs = Number(process.hrtime.bigint() - startTime) / 1e6;
        appendTaskOutput(context.task, `${label}: ${formatDuration(durationMs)}`);
    };
}

async function withTaskConsole(task, action) {
    if (activeTaskConsoles === 0) installTaskConsole();
    activeTaskConsoles++;

    try {
        return await taskConsoleContext.run({ task, timers: new Map() }, action);
    } finally {
        activeTaskConsoles--;
        if (activeTaskConsoles === 0) Object.assign(console, originalConsole);
    }
}

function formatDuration(durationMs) {
    if (durationMs < 1000) {
        return `${durationMs.toFixed(2)}ms`;
    }

    const durationSec = durationMs / 1000;
    if (durationSec < 60) {
        return `${durationSec.toFixed(2)}s`;
    }

    const minutes = Math.floor(durationSec / 60);
    const seconds = durationSec % 60;
    return `${minutes}m ${seconds.toFixed(2)}s`;
}

function wrapTaskDefinition(taskDefinition) {
    if (!taskDefinition || typeof taskDefinition.task !== 'function') {
        return taskDefinition;
    }

    return {
        ...taskDefinition,
        skip: wrapSkip(taskDefinition.skip),
        task: (context, task) => withTaskConsole(task, () => taskDefinition.task(context, task)),
    };
}

function wrapTaskDefinitions(taskDefinitions) {
    return taskDefinitions.map(wrapTaskDefinition);
}

module.exports = {
    appendTaskOutput,
    dimSkipReason,
    installSkippedRendererStyle,
    SKIPPED_RENDERER_STYLE,
    withTaskConsole,
    wrapTaskDefinition,
    wrapTaskDefinitions,
};
