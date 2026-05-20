const util = require('util');

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

async function withTaskConsole(task, action) {
    const originalConsole = {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error,
        time: console.time,
        timeLog: console.timeLog,
        timeEnd: console.timeEnd,
    };
    const timers = new Map();

    console.log = (...args) => appendTaskOutput(task, formatConsoleArgs(args));
    console.info = (...args) => appendTaskOutput(task, formatConsoleArgs(args));
    console.warn = (...args) => appendTaskOutput(task, formatConsoleArgs(args));
    console.error = (...args) => appendTaskOutput(task, formatConsoleArgs(args));
    console.time = (label = 'default') => {
        timers.set(label, process.hrtime.bigint());
    };
    console.timeLog = (label = 'default', ...args) => {
        const startTime = timers.get(label);
        if (!startTime) {
            appendTaskOutput(task, `Таймер не найден: ${label}`);
            return;
        }

        const durationMs = Number(process.hrtime.bigint() - startTime) / 1e6;
        const suffix = args.length ? ` ${formatConsoleArgs(args)}` : '';
        appendTaskOutput(task, `${label}: ${formatDuration(durationMs)}${suffix}`);
    };
    console.timeEnd = (label = 'default') => {
        const startTime = timers.get(label);
        if (!startTime) {
            appendTaskOutput(task, `Таймер не найден: ${label}`);
            return;
        }

        timers.delete(label);
        const durationMs = Number(process.hrtime.bigint() - startTime) / 1e6;
        appendTaskOutput(task, `${label}: ${formatDuration(durationMs)}`);
    };

    try {
        return await action();
    } finally {
        console.log = originalConsole.log;
        console.info = originalConsole.info;
        console.warn = originalConsole.warn;
        console.error = originalConsole.error;
        console.time = originalConsole.time;
        console.timeLog = originalConsole.timeLog;
        console.timeEnd = originalConsole.timeEnd;
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
