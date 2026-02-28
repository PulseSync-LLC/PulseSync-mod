'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
global.requireIfExists = (path) => {
    try {
        return require(path);
    } catch (e) {
        return false;
    }
};
const electron_1 = require('electron');
const path = require('path');
const fs = require('fs');
const config_js_1 = require('./config.js');
const platform_js_1 = require('./types/platform.js');
const Logger_js_1 = require('./packages/logger/Logger.js');
const systemMenu_js_1 = require('./lib/systemMenu.js');
const taskBarExtension_js_1 = require('./lib/taskBarExtension/taskBarExtension.js');
const tray_js_1 = require('./lib/tray.js');
const singleInstance_js_1 = require('./lib/singleInstance.js');
const createWindow_js_1 = require('./lib/window/createWindow.js');
const updater_js_1 = require('./lib/updater.js');
const miniPlayer_js_1 = require('./lib/miniplayer/miniplayer.js');
const { getFfmpegUpdater } = require('./lib/ffmpegInstaller.js');
const { initUserCountMetric } = require('./lib/metrics');

const events_js_1 = require('./events.js');
const customTitleBar_js_1 = require('./lib/customTitleBar.js');
const loadURL_js_1 = require('./lib/loadURL.js');
const deviceInfo_js_1 = require('./lib/deviceInfo.js');
const safeRedirects_js_1 = require('./lib/safeRedirects.js');
const handleCrash_js_1 = require('./lib/handlers/handleCrash.js');
const handleExternalLink_js_1 = require('./lib/handlers/handleExternalLink.js');
const handleWindowLifecycleEvents_js_1 = require('./lib/handlers/handleWindowLifecycleEvents.js');
const handleDeeplink_js_1 = require('./lib/handlers/handleDeeplink.js');
const handleUncaughtException_js_1 = require('./lib/handlers/handleUncaughtException.js');
const handleWindowSessionEvents_js_1 = require('./lib/handlers/handleWindowSessionEvents.js');
const handleWindowReady_js_1 = require('./lib/handlers/handleWindowReady.js');
const handleHeadersReceived_js_1 = require('./lib/handlers/handleHeadersReceived/handleHeadersReceived.js');
const handleBackgroundTasks_js_1 = require('./lib/handlers/handleBackgroundTasks.js');
const store_js_1 = require('./lib/store');
Logger_js_1.Logger.setupLogger();

const logger = new Logger_js_1.Logger('Main');

logger.log('Application starting...');
logger.log(process.argv);

if (store_js_1.get('sendModAnonymizedMetrics') ?? true) {
    initUserCountMetric({
        endpointUrl: 'https://ru-node-1.pulsesync.dev/api/v2/metrics',
        apiKey: 'l4lRNGW8mFQDmBBIEd0ZJSeI9ARRcgSaf_p5kkpmCvw',
        modVersion: config_js_1.config.modification.version,
    });
}

function initSessionStoragePath() {
    if (
        (store_js_1.getModSettings()?.downloader.useCustomPathForSessionStorage ?? false) &&
        fs.existsSync(store_js_1.getModSettings()?.downloader.customPathForSessionStorage)
    ) {
        if (electron_1.app.getPath('sessionData') === store_js_1.getModSettings().downloader.customPathForSessionStorage) return;
        logger.log('Custom path for session storage requested:', store_js_1.getModSettings()?.downloader.customPathForSessionStorage);
        const previousSessionStoragePath = electron_1.app.getPath('sessionData');
        electron_1.app.setPath('sessionData', path.join(store_js_1.getModSettings()?.downloader.customPathForSessionStorage, electron_1.app.getName()));
        fs.cpSync(previousSessionStoragePath, electron_1.app.getPath('sessionData'), {
            recursive: true,
            force: true,
            preserveTimestamps: true,
            filter: (src, destination) => {
                return !['config.json', '.updaterId', 'logs'].some((el) => src.endsWith(el));
            },
        });
    } else {
        if (electron_1.app.getPath('sessionData') === electron_1.app.getPath('userData')) return;
        logger.log('Default path for session storage requested');
        const previousSessionStoragePath = electron_1.app.getPath('sessionData');
        electron_1.app.setPath('sessionData', electron_1.app.getPath('userData'));
        fs.cpSync(previousSessionStoragePath, electron_1.app.getPath('sessionData'), {
            recursive: true,
            force: true,
            preserveTimestamps: true,
            filter: (src, destination) => {
                return !['config.json', '.updaterId', 'logs'].some((el) => src.endsWith(el));
            },
        });
    }
}

(0, store_js_1.init)();
(0, handleUncaughtException_js_1.handleUncaughtException)();
(0, singleInstance_js_1.checkForSingleInstance)();
(0, handleDeeplink_js_1.handleDeeplinkOnApplicationStartup)();

if (!(store_js_1.getModSettings()?.enableHardwareAcceleration ?? true)) {
    electron_1.app.disableHardwareAcceleration();
}

if (store_js_1.getModSettings()?.tryEnableSurroundAudio ?? false) {
    electron_1.app.commandLine.appendSwitch('try-supported-channel-layouts');
    electron_1.app.commandLine.appendSwitch('force-wave-audio');
    electron_1.app.commandLine.appendSwitch('disable-audio-output-resampler');

    logger.log(
        '--try-supported-channel-layouts:',
        electron_1.app.commandLine.hasSwitch('try-supported-channel-layouts'),
        '--force-wave-audio:',
        electron_1.app.commandLine.hasSwitch('force-wave-audio'),
        '--disable-audio-output-resampler:',
        electron_1.app.commandLine.hasSwitch('disable-audio-output-resampler'),
    );
}

const angleEngines = ['default', 'd3d11', 'd3d9', 'gl', 'd3d11on12', 'gles', 'warp'];

if (
    angleEngines.includes(store_js_1.getModSettings()?.hardwareAcceleration?.angleEngine ?? 'default') &&
    (store_js_1.getModSettings()?.enableHardwareAcceleration ?? true)
) {
    electron_1.app.commandLine.appendSwitch('use-angle', store_js_1.getModSettings()?.hardwareAcceleration?.angleEngine ?? 'default');
    logger.log('--use-angle:', electron_1.app.commandLine.getSwitchValue('use-angle'));
}

initSessionStoragePath();
const MiniPlayer = miniPlayer_js_1.getMiniPlayer();

(async () => {
    const updater = (0, updater_js_1.getUpdater)();
    const ffmpegInstaller = getFfmpegUpdater({
        repo: 'foreA-adoxid/ffmpeg-builds',
        tagName: 'ffmpeg-binaries',
    });
    electron_1.app.setAppUserModelId('ru.yandex.desktop.music');
    await electron_1.app.whenReady();
    const window = await (0, createWindow_js_1.createWindow)();
    (0, systemMenu_js_1.setupSystemMenu)(window);
    if ([platform_js_1.Platform.WINDOWS, platform_js_1.Platform.LINUX].includes(deviceInfo_js_1.devicePlatform)) {
        (0, tray_js_1.setupTray)(window);
    }
    if (platform_js_1.Platform.WINDOWS === deviceInfo_js_1.devicePlatform) {
        await (0, taskBarExtension_js_1.taskBarExtension)(window);
    }
    (0, deviceInfo_js_1.updateMaxDisplayFrameRateRefresh)();
    (0, safeRedirects_js_1.safeRedirects)(window);
    (0, handleWindowReady_js_1.handleWindowReady)(window);
    (0, handleWindowLifecycleEvents_js_1.handleWindowLifecycleEvents)(window);
    (0, handleWindowSessionEvents_js_1.handleWindowSessionEvents)(window);
    (0, events_js_1.handleApplicationEvents)(window);
    (0, handleExternalLink_js_1.handleExternalLink)(window);
    (0, handleDeeplink_js_1.handleDeeplink)(window);
    (0, handleHeadersReceived_js_1.handleHeadersReceived)(window);
    (0, handleBackgroundTasks_js_1.handleBackgroundTasks)(window);
    (0, handleCrash_js_1.handleCrash)();
    await (0, loadURL_js_1.loadURL)(window);
    if ([platform_js_1.Platform.WINDOWS, platform_js_1.Platform.LINUX].includes(deviceInfo_js_1.devicePlatform)) {
        (0, customTitleBar_js_1.createCustomTitleBar)(window);
    }
    if (store_js_1.getModSettings()?.appAutoUpdates.enableAppAutoUpdate ?? config_js_1.config.app.enableAutoUpdate) {
        updater.start();
        updater.onUpdate((version) => {
            (0, events_js_1.sendUpdateAvailable)(window, version);
        });
    }
})();
