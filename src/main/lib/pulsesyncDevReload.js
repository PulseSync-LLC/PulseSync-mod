'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
exports.setupPulseSyncDevReload = void 0;

const fs = require('node:fs');
const path = require('node:path');
const electron_1 = require('electron');
const pulsesyncDevConfig_js_1 = require('./pulsesyncDevConfig.js');

const RELOAD_DEBOUNCE_MS = 150;

const setupPulseSyncDevReload = (window) => {
    if (!pulsesyncDevConfig_js_1.pulseSyncDevConfig.enabled) return () => {};

    const appDirectory = path.join(electron_1.app.getAppPath(), 'app');
    const watchedFiles = [
        { directory: appDirectory, fileName: 'pulsesync-bootstrap.js' },
        { directory: path.join(appDirectory, 'pulsesync-runtime'), fileName: 'runtime.js' },
        { directory: path.join(appDirectory, 'pulsesync-web'), fileName: 'isolated.js' },
    ];
    const watchers = [];
    let reloadTimer;

    const scheduleReload = (label) => {
        clearTimeout(reloadTimer);
        reloadTimer = setTimeout(() => {
            if (window.isDestroyed() || window.webContents.isDestroyed()) return;
            console.info(`[PulseSync Dev] ${label} обновлён, перезагрузка renderer`);
            window.webContents.reloadIgnoringCache();
        }, RELOAD_DEBOUNCE_MS);
    };

    for (const watchedFile of watchedFiles) {
        if (!fs.existsSync(watchedFile.directory)) continue;
        const watcher = fs.watch(watchedFile.directory, (_eventType, fileName) => {
            if (String(fileName ?? '') === watchedFile.fileName) scheduleReload(watchedFile.fileName);
        });
        watchers.push(watcher);
    }

    const dispose = () => {
        clearTimeout(reloadTimer);
        watchers.forEach((watcher) => watcher.close());
    };
    window.once('closed', dispose);
    return dispose;
};

exports.setupPulseSyncDevReload = setupPulseSyncDevReload;
