function createIdentityChalk() {
    const identity = (value) => value;

    return new Proxy(identity, {
        apply(_target, _thisArg, args) {
            return args[0];
        },
        get() {
            return identity;
        },
    });
}

function loadChalk() {
    try {
        return require('chalk');
    } catch {
        return createIdentityChalk();
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

function createConsolePainter(chalk) {
    function paintInfo(message) {
        const trimmed = message.trim();

        if (!trimmed) {
            return message;
        }

        if (trimmed.includes('================================')) {
            return chalk.gray(message);
        }

        if (trimmed.startsWith('node toolset.js')) {
            return chalk.cyanBright(message);
        }

        if (/^\s*[-*]/.test(trimmed)) {
            return chalk.blueBright(message);
        }

        return chalk.cyan(message);
    }

    return {
        log(message) {
            return paintInfo(message);
        },
        warn(message) {
            return chalk.yellow(message);
        },
        error(message) {
            return chalk.redBright(message);
        },
        success(message) {
            return chalk.green(message);
        },
    };
}

function installToolsetConsoleStyles() {
    if (global.__TOOLSET_CONSOLE_STYLED__) {
        return;
    }

    global.__TOOLSET_CONSOLE_STYLED__ = true;

    const chalk = loadChalk();
    const painter = createConsolePainter(chalk);
    const timers = new Map();
    const rawLog = console.log.bind(console);
    const rawWarn = console.warn.bind(console);
    const rawError = console.error.bind(console);

    function paintArgs(kind, args) {
        if (args.length === 0) {
            return args;
        }

        const [first, ...rest] = args;
        if (typeof first !== 'string') {
            return args;
        }

        if (kind === 'warn') {
            return [painter.warn(first), ...rest];
        }

        if (kind === 'error') {
            return [painter.error(first), ...rest];
        }

        return [painter.log(first), ...rest];
    }

    console.log = (...args) => rawLog(...paintArgs('log', args));
    console.info = (...args) => rawLog(...paintArgs('log', args));
    console.warn = (...args) => rawWarn(...paintArgs('warn', args));
    console.error = (...args) => rawError(...paintArgs('error', args));

    console.time = (label = 'default') => {
        timers.set(label, process.hrtime.bigint());
    };

    console.timeLog = (label = 'default', ...args) => {
        const startTime = timers.get(label);
        if (!startTime) {
            rawWarn(painter.warn(`Таймер не найден: ${label}`), ...args);
            return;
        }

        const durationMs = Number(process.hrtime.bigint() - startTime) / 1e6;
        rawLog(painter.success(`${label}: ${formatDuration(durationMs)}`), ...args);
    };

    console.timeEnd = (label = 'default') => {
        const startTime = timers.get(label);
        if (!startTime) {
            rawWarn(painter.warn(`Таймер не найден: ${label}`));
            return;
        }

        timers.delete(label);
        const durationMs = Number(process.hrtime.bigint() - startTime) / 1e6;
        rawLog(painter.success(`${label}: ${formatDuration(durationMs)}`));
    };
}

module.exports = {
    installToolsetConsoleStyles,
};
