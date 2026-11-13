const { execFile } = require('node:child_process');
const { existsSync } = require('node:fs');
const net = require('node:net');
const path = require('node:path');
const { setTimeout: delay } = require('node:timers/promises');
const { promisify } = require('node:util');
const { app } = require('electron');
const { Logger } = require('../../packages/logger/Logger.js');
const { windowsAccelerator } = require('./windowsAccelerator.js');

const runFile = promisify(execFile);
const logger = new Logger('WindowsHotkeys');
const PREFIX = 'PulseSync.Hotkeys.v1.';
const MAX_BINDINGS = 512;
const systemDir = path.join(process.env.SystemRoot || 'C:\\Windows', 'System32');
const taskScheduler = path.join(systemDir, 'schtasks.exe');
const powershell = path.join(systemDir, 'WindowsPowerShell', 'v1.0', 'powershell.exe');
let userSid;
let configuration;
let revision = 0;
let connection;
let taskInstalled;

function isSupported() {
    return process.platform === 'win32' && process.arch === 'x64';
}

function bundledHelperPath() {
    const appPath = app.getAppPath().replace(/\.asar$/i, '.asar.unpacked');
    return path.join(appPath, 'main', 'native_modules', 'pulsesync_hotkeys', 'pulsesync_hotkeys.exe');
}

function installedHelperPath(sid) {
    const programFiles = process.env.ProgramW6432 || process.env.ProgramFiles;
    if (!programFiles) throw new Error('Не удалось найти папку Program Files');
    return path.join(programFiles, PREFIX + sid, 'pulsesync_hotkeys.exe');
}

async function getUserSid() {
    if (!userSid) {
        const { stdout } = await runFile(path.join(systemDir, 'whoami.exe'), ['/user', '/fo', 'csv', '/nh'], { windowsHide: true });
        userSid = stdout.match(/"((?:S-1)(?:-\d+)+)"/)?.[1];
        if (!userSid) throw new Error('Не удалось определить SID пользователя Windows');
    }
    return userSid;
}

async function getStatus() {
    if (!isSupported()) return { available: false, installed: false };
    const sid = await getUserSid();
    const hasExecutable = existsSync(installedHelperPath(sid));
    const hasTask = await runFile(taskScheduler, ['/Query', '/TN', PREFIX + sid], { windowsHide: true }).then(
        () => true,
        () => false,
    );
    taskInstalled = hasExecutable && hasTask;
    const installed = hasExecutable || hasTask;
    return { available: installed || existsSync(bundledHelperPath()), installed };
}

async function runElevated(executable, action, sid) {
    // The elevated executable receives the original SID and rejects another account's credentials.
    const command = [
        "$ErrorActionPreference = 'Stop'",
        'try { $p = Start-Process -FilePath $env:PULSESYNC_HOTKEYS_EXE -ArgumentList $env:PULSESYNC_HOTKEYS_ARGS -Verb RunAs -PassThru -Wait } catch { [Console]::Error.WriteLine($_.Exception.Message); exit 100 }',
        'exit $p.ExitCode',
    ].join('; ');
    try {
        await runFile(powershell, ['-NoProfile', '-NonInteractive', '-Command', command], {
            windowsHide: true,
            env: { ...process.env, PULSESYNC_HOTKEYS_EXE: executable, PULSESYNC_HOTKEYS_ARGS: `${action} ${sid}` },
        });
    } catch (error) {
        logger.warn('Elevated helper failed', { action, code: error.code, stderr: error.stderr?.trim() });
        if (error.code === 100) throw new Error('Windows не запустила помощник. Проверь, что запрос UAC подтверждён.');
        const operation = action === 'install' ? 'установить' : 'удалить';
        throw new Error(`Не удалось ${operation} системный помощник (код ${error.code ?? 'неизвестен'}).`);
    }
}

async function configure(action) {
    if (configuration) return configuration;
    if (!isSupported()) throw new Error('Windows helper доступен только на Windows x64');
    const executable = bundledHelperPath();
    if (!existsSync(executable)) throw new Error('В сборке отсутствует системный помощник.');
    stop();
    const operation = (async () => {
        const sid = await getUserSid();
        await runElevated(executable, action, sid);
        const status = await getStatus();
        if (action === 'install' ? !taskInstalled : status.installed) throw new Error('Windows не подтвердил изменение задания');
        return status;
    })();
    configuration = operation;
    try {
        return await operation;
    } catch (error) {
        logger.warn('Helper configuration failed', error.message);
        throw error;
    } finally {
        configuration = undefined;
    }
}

function stop() {
    connection?.socket?.destroy();
    connection = undefined;
}

function pause() {
    if (!connection?.ready) {
        stop();
        return;
    }
    revision = (revision + 1) >>> 0;
    Object.assign(connection, { revision, keys: [], callbacks: [], onFallback: () => {} });
    sendBindings(connection);
}

function connectOnce(address) {
    return new Promise((resolve, reject) => {
        const socket = net.createConnection(address);
        const timer = setTimeout(() => socket.destroy(new Error('Windows helper pipe timeout')), 500);
        socket.once('error', reject);
        socket.once('close', () => clearTimeout(timer));
        socket.once('connect', () => {
            clearTimeout(timer);
            resolve(socket);
        });
    });
}

async function connect(state) {
    try {
        const sid = await getUserSid();
        if (connection !== state) return;
        await getStatus();
        if (!taskInstalled || connection !== state) {
            fallback(state);
            return;
        }
        const deadline = Date.now() + 5500;
        let nextLaunch = 0;
        while (connection === state && Date.now() < deadline) {
            if (Date.now() >= nextLaunch) {
                await runFile(taskScheduler, ['/Run', '/TN', PREFIX + sid], { windowsHide: true });
                nextLaunch = Date.now() + 1000;
            }
            const socket = await connectOnce(`\\\\.\\pipe\\${PREFIX}${sid}`).catch(() => null);
            if (socket) {
                if (connection !== state) {
                    socket.destroy();
                    return;
                }
                state.socket = socket;
                await watch(state);
                return;
            }
            await delay(75);
        }
    } catch (error) {
        logger.warn('Helper startup failed', error.message);
    }
    fallback(state);
}

function watch(state) {
    return new Promise((resolve) => {
        const socket = state.socket;
        let buffer = '';
        const handshake = setTimeout(() => socket.destroy(), 1000);
        socket.setEncoding('ascii');
        socket.on('data', (chunk) => {
            buffer += chunk;
            const lines = buffer.split('\n');
            buffer = lines.pop();
            if (buffer.length > 64 || lines.some((line) => line.length > 64)) {
                socket.destroy();
                return;
            }
            for (const line of lines) {
                if (connection !== state) return;
                if (!state.ready && line === 'ready') {
                    clearTimeout(handshake);
                    state.ready = true;
                    sendBindings(state);
                    state.onReady(state.remaining);
                    continue;
                }
                const match = /^(\d+) (\d+)$/.exec(line);
                if (state.ready && match && Number(match[1]) === state.revision) state.callbacks[Number(match[2])]?.();
            }
        });
        socket.on('error', (error) => logger.warn('Helper pipe failed', error.message));
        socket.once('close', () => {
            clearTimeout(handshake);
            fallback(state);
            resolve();
        });
    });
}

function sendBindings(state) {
    if (state.ready) state.socket.write([state.revision, ...state.keys].join(' ') + '\n');
}

function fallback(state) {
    if (connection !== state) return;
    stop();
    state.onFallback();
}

function setBindings(entries, { onReady, onFallback }) {
    if (!entries.length || configuration || !isSupported()) {
        stop();
        return entries;
    }
    const bindings = new Map();
    const remaining = [];
    for (const entry of entries) {
        const key = windowsAccelerator(entry.accelerator);
        if (bindings.has(key)) continue;
        if (key !== null && bindings.size < MAX_BINDINGS) {
            bindings.set(key, entry.callback);
        } else {
            remaining.push(entry);
        }
    }
    if (!bindings.size || taskInstalled === false) {
        stop();
        return entries;
    }
    const state = connection ?? {};
    const existing = state === connection;
    revision = (revision + 1) >>> 0;
    Object.assign(state, {
        revision,
        keys: [...bindings.keys()],
        callbacks: [...bindings.values()],
        onReady,
        onFallback,
        remaining,
    });
    connection = state;
    if (existing) sendBindings(state);
    else void connect(state);
    return state.ready ? remaining : entries;
}

module.exports = { getStatus, configure, setBindings, pause, stop };
