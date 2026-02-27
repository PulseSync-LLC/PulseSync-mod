'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.sendRefreshRepositoryMeta =
    exports.sendRefreshTracksAvailability =
    exports.sendAnalyticsOnFirstLaunch =
    exports.sendOpenDeeplink =
    exports.sendPlayerAction =
    exports.sendRefreshApplicationData =
    exports.sendUpdateAvailable =
    exports.sendLoadReleaseNotes =
    exports.sendProbabilityBucket =
    exports.handleApplicationEvents =
    exports.sendNativeStoreUpdate =
        void 0;
const electron_1 = require('electron');
const events_js_1 = require('./types/events.js');
const cookies_js_1 = require('./constants/cookies.js');
const Logger_js_1 = require('./packages/logger/Logger.js');
const updater_js_1 = require('./lib/updater.js');
const tray_js_1 = require('./lib/tray.js');
const appSuspension_js_1 = require('./lib/appSuspension.js');
const store_js_1 = require('./lib/store.js');
const state_js_1 = require('./lib/state.js');
const toggleWindowVisibility_js_1 = require('./lib/window/toggleWindowVisibility.js');
const toggleMaximize_js_1 = require('./lib/window/toggleMaximize.js');
const minimize_js_1 = require('./lib/window/minimize.js');
const handleDeeplink_js_1 = require('./lib/handlers/handleDeeplink.js');
const loadReleaseNotes_js_1 = require('./lib/loadReleaseNotes.js');
const deviceInfo_js_1 = require('./lib/deviceInfo.js');

const isAccelerator = require('electron-is-accelerator');
const { getAllowedUrls } = require('./lib/handlers/handleHeadersReceived/corsHandler');
const trackDownloader_js_1 = require('./lib/trackDownloader/trackDownloader.js');
const { getFfmpegUpdater } = require('./lib/ffmpegInstaller.js');
const { getPulseSyncAppInstaller } = require('./lib/pulsesyncAppInstaller.js');
const taskBarExtension_js_1 = require('./lib/taskBarExtension/taskBarExtension.js');
const scrobbleManager_js_1 = require('./lib/scrobble/index.js');
const { getPulseSyncManager } = require('./lib/pulsesync/PulseSyncManager.js');
const miniPlayer_js_1 = require('./lib/miniplayer/miniplayer.js');
const discordRichPresence_js_1 = require('./lib/discordRichPresence.js');

const playerActions_js_1 = require('./types/playerActions.js');
const platform_js_1 = require('./types/platform.js');
const config_js_1 = require('./config.js');
const getSortedDescReleaseNotesKeys_js_1 = require('./lib/releaseNotes/getSortedDescReleaseNotesKeys.js');
const removeNewerReleaseNotes_js_1 = require('./lib/releaseNotes/removeNewerReleaseNotes.js');
const formatters_js_1 = require('./lib/i18n/formatters.js');
const stringToAST_js_1 = require('./lib/i18n/stringToAST.js');
const gt_js_1 = __importDefault(require('semver/functions/gt.js'));
const valid_js_1 = __importDefault(require('semver/functions/valid.js'));
const i18nKeys_js_1 = require('./constants/i18nKeys.js');
const dateToDDMonthYYYYProps_js_1 = require('./lib/date/dateToDDMonthYYYYProps.js');
const eventsLogger = new Logger_js_1.Logger('Events');
const { throttle } = require('./lib/utils.js');
const crypto = require('crypto');

let mainWindow = undefined;
let isPlayerReady = false;
let downloadQueue = Promise.resolve();

const MiniPlayer = miniPlayer_js_1.getMiniPlayer();

MiniPlayer.updateSettingsState(store_js_1.getModSettings());

const PROGRESS_BAR_THROTTLE_MS = 200;
let pulseSyncManager_js_1;
const isBoolean = (value) => {
    return typeof value === 'boolean';
};

const updateGlobalShortcuts = () => {
    eventsLogger.info('(GlobalShortcuts) Update triggered.');
    electron_1.globalShortcut.unregisterAll();

    const modSettings = store_js_1.getModSettings();

    eventsLogger.info('(GlobalShortcuts) modSettings.globalShortcuts:', modSettings?.globalShortcuts);

    if (modSettings?.globalShortcuts?.enable) {
        const shortcuts = Object.entries(modSettings.globalShortcuts);
        shortcuts.forEach((shortcut) => {
            if (shortcut[0] === 'enable') return;

            if (shortcut[1] && isAccelerator(shortcut[1])) {
                electron_1.globalShortcut.register(shortcut[1], () => {
                    const commands = shortcut[0].split(' ');
                    commands.forEach((command) => {
                        const [action, value] = command.split('|');
                        sendPlayerAction(mainWindow, playerActions_js_1.PlayerActions[action], value);
                    });
                });
            } else {
                eventsLogger.warn(`(GlobalShortcuts) ${shortcut[0]} is not registered. Invalid accelerator: ${shortcut[1]}`);
            }
        });
        eventsLogger.info('(GlobalShortcuts) Registered.');
    } else {
        eventsLogger.info('(GlobalShortcuts) Unregistered all.');
    }
};

const restartApplication = (safeMode = false) => {
    if (safeMode) {
        electron_1.app.relaunch({ args: ['--safe-mode'] });
    } else {
        electron_1.app.relaunch();
    }
    electron_1.app.exit();
};

const handleApplicationEvents = (window) => {
    mainWindow = window;
    eventsLogger.info('Application events handler initialized');

    const isSafeMode = process.argv.includes('--safe-mode');

    const applicationReadyTimeOut = setTimeout(() => {
        if (!isSafeMode) {
            eventsLogger.error('Application ready event timeout reached. Restarting in safe mode.');
            restartApplication(true);
        }
    }, 5000);
    let playerReadyTimeout;
    let appSafeModeRestartTimeout;
    let safeModeRestartInterval;

    const updater = (0, updater_js_1.getUpdater)();
    const trackDownloader = new trackDownloader_js_1.TrackDownloader(window);

    updateGlobalShortcuts();

    pulseSyncManager_js_1 = getPulseSyncManager(window);
    pulseSyncManager_js_1.start();
    scrobbleManager_js_1.handleRegisterPulseSyncScrobbler(pulseSyncManager_js_1);

    electron_1.ipcMain.on(events_js_1.Events.DOWNLOAD_CURRENT_TRACK, async (event, trackId) => {
        let callback = (progressRenderer, progressWindow) => {
            sendProgressBarChange(window, 'trackDownloadCurrent', progressRenderer * 100);
            window.setProgressBar(progressWindow);
        };

        eventsLogger.info('Event received', events_js_1.Events.DOWNLOAD_CURRENT_TRACK);
        await trackDownloader.downloadSingleTrack(trackId, throttle(callback, PROGRESS_BAR_THROTTLE_MS));
    });

    electron_1.ipcMain.on(events_js_1.Events.DOWNLOAD_TRACK, async (event, trackId, trackName = '') => {
        sendBasicToastCreate(window, `trackDownload|${trackId}`, trackName ? 'Загрузка трека: ' + trackName : 'Загрузка трека...', false);

        let callback = (progressRenderer, progressWindow) => {
            sendProgressBarChange(window, `trackDownload|${trackId}`, progressRenderer * 100);
            window.setProgressBar(progressWindow);
        };

        eventsLogger.info('Event received', events_js_1.Events.DOWNLOAD_TRACK);
        await trackDownloader.downloadSingleTrack(trackId, throttle(callback, PROGRESS_BAR_THROTTLE_MS));
        setTimeout(() => sendBasicToastDismiss(window, `trackDownload|${trackId}`), 2000);
    });

    electron_1.ipcMain.on(events_js_1.Events.DOWNLOAD_TRACKS, (event, trackIds, dirType = undefined, dirName = undefined) => {
        if (!trackIds?.length) return;

        const hash = crypto
            .createHash('md5')
            .update([dirType, ...trackIds].join('|'))
            .digest('hex');

        let message = 'Загрузка треков...';
        if (dirName) {
            switch (dirType) {
                case 'album':
                    message = `Загрузка альбома | #s | ${dirName}`;
                    break;
                case 'playlist':
                    message = `Загрузка плейлиста | #s | ${dirName}`;
                    break;
                case 'single':
                    message = `Загрузка сингла | #s | ${dirName}`;
                    break;
                case 'podcast':
                    message = `Загрузка подкаста | #s | ${dirName}`;
                    break;
                case 'audiobook':
                    message = `Загрузка аудиокниги | #s | ${dirName}`;
                    break;
                default:
                    message = `Загрузка треков | #s | ${dirName}`;
            }
        }

        sendBasicToastCreate(window, `trackDownload|${hash}`, message, false);

        eventsLogger.info('Event received', events_js_1.Events.DOWNLOAD_TRACKS);

        const callback = (progressRenderer, progressWindow, statusLabel) => {
            sendProgressBarChange(window, `trackDownload|${hash}`, progressRenderer * 100, statusLabel);
            window.setProgressBar(progressWindow);
        };

        downloadQueue = downloadQueue
            .then(async () => {
                try {
                    await trackDownloader.downloadMultipleTracks(trackIds, dirName, throttle(callback, PROGRESS_BAR_THROTTLE_MS));
                } catch (e) {
                    eventsLogger.error('Error downloading multiple tracks:', e, e.stack);
                } finally {
                    setTimeout(() => {
                        sendBasicToastDismiss(window, `trackDownload|${hash}`);
                    }, 2000);
                }
            })
            .catch((err) => {
                eventsLogger.error('Download queue error:', err);
            });
    });

    electron_1.app.on('will-quit', () => {
        electron_1.globalShortcut.unregisterAll();
    });

    electron_1.app.on('child-process-gone', (event, { type, reason }) => {
        if (type === 'GPU') mainWindow?.webContents.send(events_js_1.Events.GPU_STALL, reason);
    });

    electron_1.ipcMain.on(events_js_1.Events.APPLICATION_RESTART, (event, { safeMode = false }) => {
        eventsLogger.info('Event received', events_js_1.Events.APPLICATION_RESTART);
        restartApplication(safeMode);
    });

    electron_1.ipcMain.handle('scrobble-login', () => {
        scrobbleManager_js_1.scrobblerManager.getScrobblers().forEach((scrobbler) => {
            scrobbler.login();
        });
    });
    electron_1.ipcMain.handle('scrobble-logout', () => {
        scrobbleManager_js_1.scrobblerManager.getScrobblers().forEach((scrobbler) => {
            scrobbler.logout();
        });
    });
    electron_1.ipcMain.handle('scrobble-lastfm-login', () => {
        scrobbleManager_js_1.scrobblerManager.getScrobblerByType('Last.fm').login();
    });

    electron_1.ipcMain.handle('scrobble-lastfm-logout', () => {
        scrobbleManager_js_1.scrobblerManager.getScrobblerByType('Last.fm').logout();
    });

    electron_1.ipcMain.handle('scrobble-lastfm-get-user', () => {
        return scrobbleManager_js_1.scrobblerManager.getScrobblerByType('Last.fm').api.getUserInfo();
    });
    electron_1.ipcMain.handle('scrobble-lastfm-get-current-playing-track', (event, user) => {
        return scrobbleManager_js_1.scrobblerManager.getScrobblerByType('Last.fm').api.getCurrentPlayingTrack(user);
    });
    electron_1.ipcMain.handle('openConfigFile', async () => {
        return await electron_1.shell.openPath(electron_1.app.getPath('userData') + '/config.json');
    });
    electron_1.ipcMain.handle('setPathWithNativeDialog', async (event, key, defaultPath = undefined, properties = undefined) => {
        const { canceled, filePaths } = await electron_1.dialog.showOpenDialog({
            defaultPath: defaultPath,
            properties: properties,
        });
        if (canceled || !filePaths) return;

        store_js_1.set(key, filePaths[0]);

        sendNativeStoreUpdate(key, filePaths[0], mainWindow);
    });
    electron_1.ipcMain.on('autoStartupStatus', async (event, data) => {
        electron_1.app.setLoginItemSettings({
            openAtLogin: data ?? false,
            path: electron_1.app.getPath('exe'),
        });
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_MINIMIZE, () => {
        eventsLogger.info('Event received', events_js_1.Events.WINDOW_MINIMIZE);
        (0, minimize_js_1.minimize)(window);
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_MAXIMIZE, () => {
        eventsLogger.info('Event received', events_js_1.Events.WINDOW_MAXIMIZE);
        (0, toggleMaximize_js_1.toggleMaximize)(window);
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_CLOSE, () => {
        eventsLogger.info('Event received', events_js_1.Events.WINDOW_CLOSE);
        if ([platform_js_1.Platform.WINDOWS, platform_js_1.Platform.LINUX].includes(deviceInfo_js_1.devicePlatform)) {
            if (store_js_1.getModSettings()?.window?.toTray ?? state_js_1.state.player.isPlaying) {
                (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(window, false);
            } else {
                electron_1.app.quit();
            }
        } else {
            electron_1.app.quit();
        }
    });
    electron_1.ipcMain.on(events_js_1.Events.INSTALL_UPDATE, () => {
        eventsLogger.info('Event received', events_js_1.Events.INSTALL_UPDATE);
        updater.install();
    });
    electron_1.ipcMain.on(events_js_1.Events.APP_STALL_CANCEL_RESTART, () => {
        eventsLogger.info('Event received', events_js_1.Events.APP_STALL_CANCEL_RESTART);
        appSafeModeRestartTimeout && clearTimeout(appSafeModeRestartTimeout);
        safeModeRestartInterval && clearInterval(safeModeRestartInterval);
    });
    electron_1.ipcMain.on(events_js_1.Events.APPLICATION_READY, async (event, language) => {
        eventsLogger.info('Event received', events_js_1.Events.APPLICATION_READY);

        clearTimeout(applicationReadyTimeOut);

        isPlayerReady = false;

        playerReadyTimeout = setTimeout(() => {
            if (!isSafeMode) {
                eventsLogger.error('PLAYER_READY event timeout reached. Prompt safe mode restart.');
                mainWindow.webContents.send(events_js_1.Events.APP_STALL);
                let progress = 0;
                safeModeRestartInterval = setInterval(() => {
                    sendProgressBarChange(window, 'safeModeRestart', progress, `${Math.round(10 - progress / 10)} сек`);
                    progress += 1;
                }, 100);
                appSafeModeRestartTimeout = setTimeout(() => {
                    eventsLogger.error('Safe mode restart timeout reached. Restarting in safe mode.');
                    clearInterval(safeModeRestartInterval);
                    restartApplication(true);
                }, 11000);
            }
        }, 60 * 1000);

        (0, pulseSyncManager_js_1.readyEvent)();
        (0, deviceInfo_js_1.logHardwareInfo)();
        (0, pulseSyncManager_js_1.validatePremium)();

        if (state_js_1.state.deeplink) {
            (0, handleDeeplink_js_1.navigateToDeeplink)(window, state_js_1.state.deeplink);
        }
        if (updater.latestAvailableVersion) {
            (0, exports.sendUpdateAvailable)(window, updater.latestAvailableVersion);
        }
        if ((0, store_js_1.isFirstLaunch)()) {
            (0, exports.sendAnalyticsOnFirstLaunch)(window);
        }
        (0, exports.sendProbabilityBucket)(window, updater.getProbabilityBucket());
        if (store_js_1.getModSettings()?.vibeAnimationEnhancement?.autoLaunchOnAppStartup) {
            setTimeout(() => {
                if (!state_js_1.state.player.isPlaying) {
                    exports.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_PLAY);
                }
            }, 4000);
        }

        const version = electron_1.app.getVersion();
        const releaseNotes = await (0, loadReleaseNotes_js_1.loadReleaseNotes)(language);
        if (!releaseNotes) {
            return;
        }
        const { [`${i18nKeys_js_1.KEY_DESKTOP_RELEASE_NOTES_DEFAULT}`]: defaultReleaseNote, ...otherNotes } = releaseNotes;
        let translationsReleaseNotes = (0, removeNewerReleaseNotes_js_1.removeNewerReleaseNotes)(otherNotes, version);
        const sortedDescReleaseNotesKeys = (0, getSortedDescReleaseNotesKeys_js_1.getSortedDescReleaseNotesKeys)(translationsReleaseNotes);
        const latestVersion = sortedDescReleaseNotesKeys[0];
        if (!latestVersion) {
            return;
        }
        const extractedVersion = (0, getSortedDescReleaseNotesKeys_js_1.extractVersion)(latestVersion);
        if (
            (0, valid_js_1.default)(extractedVersion) &&
            (0, valid_js_1.default)(version) &&
            (0, gt_js_1.default)(version, extractedVersion) &&
            Array.isArray(defaultReleaseNote)
        ) {
            const dateString = `<date>${(0, formatters_js_1.formatDate)({
                date: config_js_1.config.buildInfo.BUILD_TIME,
                options: (0, dateToDDMonthYYYYProps_js_1.dateToDDMonthYYYYProps)(),
                language,
            })}</date>\n`;
            const dateAST = (0, stringToAST_js_1.stringToAST)(dateString);
            translationsReleaseNotes = {
                ...translationsReleaseNotes,
                [`${i18nKeys_js_1.RELEASE_NOTES_KEY_PREFIX}${version}`]: [...dateAST, ...defaultReleaseNote],
            };
            sortedDescReleaseNotesKeys.unshift(`${i18nKeys_js_1.RELEASE_NOTES_KEY_PREFIX}${version}`);
        }
        (0, exports.sendLoadReleaseNotes)({
            window,
            needToShowReleaseNotes: (0, store_js_1.needToShowReleaseNotes)(),
            sortedDescReleaseNotesKeys,
            translationsReleaseNotes,
        });
        const ffmpegInstaller = getFfmpegUpdater();

        if (!(await ffmpegInstaller.isInstalled())) {
            sendBasicToastCreate(window, 'ffmpeg', 'Обновление компонента: ffmpeg', false);

            let callback = (progressRenderer, progressWindow) => {
                sendProgressBarChange(window, 'ffmpeg', progressRenderer * 100);
                window.setProgressBar(progressWindow);
            };
            ffmpegInstaller
                .ensureInstalled(throttle(callback, PROGRESS_BAR_THROTTLE_MS))
                .then(() => {
                    sendBasicToastDismiss(window, 'ffmpeg');
                })
                .catch((err) => {
                    sendProgressBarChange(window, 'ffmpeg', -1);
                    eventsLogger.error(err);
                    setTimeout(() => {
                        sendBasicToastDismiss(window, 'ffmpeg');
                    }, 2500);
                });
        } else {
        }

        const pulseSyncInstaller = getPulseSyncAppInstaller();
        if (!(await pulseSyncInstaller.isInstalled())) {
            sendBasicToastCreate(window, 'pulsesync-app', 'Установка PulseSync', false);
            let callback = (progressRenderer, progressWindow) => {
                sendProgressBarChange(window, 'pulsesync-app', progressRenderer * 100);
                window.setProgressBar(progressWindow);
            };
            try {
                await pulseSyncInstaller.ensureInstalled(throttle(callback, PROGRESS_BAR_THROTTLE_MS));
            } catch (e) {
                eventsLogger.error('PulseSync app installation failed:', e, e.stack);
            } finally {
                sendBasicToastDismiss(window, 'pulsesync-app');
            }
        }
    });
    electron_1.ipcMain.on(events_js_1.Events.APPLICATION_THEME, (event, backgroundColor) => {
        eventsLogger.info('Event received', events_js_1.Events.APPLICATION_THEME);
        window.setBackgroundColor(backgroundColor);
    });
    electron_1.ipcMain.on(events_js_1.Events.TRACKS_AVAILABILITY_UPDATED, (event) => {
        const [, setTracksAvailabilityUpdatedAt] = store_js_1.tracksAvailabilityUpdatedAt;
        eventsLogger.info('Event received', events_js_1.Events.TRACKS_AVAILABILITY_UPDATED);
        setTracksAvailabilityUpdatedAt(Date.now());
    });
    electron_1.ipcMain.on(events_js_1.Events.REPOSITORY_META_UPDATED, (event) => {
        const [, setRepositoryMetaUpdatedAtStoreValue] = store_js_1.repositoryMetaUpdatedAt;
        eventsLogger.info('Event received', events_js_1.Events.REPOSITORY_META_UPDATED);
        setRepositoryMetaUpdatedAtStoreValue(Date.now());
    });
    electron_1.ipcMain.on(events_js_1.Events.DOWNLOAD_INFO, (event, data) => {
        eventsLogger.info('Event received', events_js_1.Events.DOWNLOAD_INFO, data);
        (0, pulseSyncManager_js_1.updateDownloadInfo)(data);
    });
    electron_1.ipcMain.handle(events_js_1.Events.GET_CORS, () => {
        return getAllowedUrls();
    });
    electron_1.ipcMain.on(events_js_1.Events.PLAYER_STATE, (event, data) => {
        eventsLogger.info(`Event received`, events_js_1.Events.PLAYER_STATE, data);

        if (isBoolean(data.isPlaying)) {
            state_js_1.state.player.isPlaying = data.isPlaying;
            (0, appSuspension_js_1.toggleAppSuspension)(data.isPlaying, (store_js_1.getModSettings()?.window?.preventDisplaySleep ?? false) && window.isVisible());
        }
        if (isBoolean(data.canMoveBackward)) {
            state_js_1.state.player.canMoveBackward = data.canMoveBackward;
        }
        if (isBoolean(data.canMoveForward)) {
            state_js_1.state.player.canMoveForward = data.canMoveForward;
        }

        const isActiveState = ['paused', 'playing'].includes(data?.status);
        const isPlayable = isPlayerReady && (data.status !== 'idle') && isActiveState;

        MiniPlayer.updatePlayerState(structuredClone(data));
        (0, taskBarExtension_js_1.onPlayerStateChange)(window, structuredClone(data));

        if (isPlayable) {
            (0, tray_js_1.updateTrayMenu)(window);
            (0, scrobbleManager_js_1.handlePlayingStateEvent)(structuredClone(data));
            (0, pulseSyncManager_js_1.updatePlayerState)(structuredClone(data));
            (0, discordRichPresence_js_1.discordRichPresence)(structuredClone(data));
            return;
        }

        if (data.status === 'idle' && data.track && !isPlayerReady) {
            if (store_js_1.getModSettings()?.vibeAnimationEnhancement?.autoLaunchOnAppStartup) {
                eventsLogger.info('Auto launch enabled: toggling play');
                exports.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_PLAY);
            }
            isPlayerReady = true;
            playerReadyTimeout && clearTimeout(playerReadyTimeout);
            appSafeModeRestartTimeout && clearTimeout(appSafeModeRestartTimeout);
            sendBasicToastDismiss(window, 'safeModeRestart');

            if (isSafeMode) sendBasicToastCreate(window, 'safeModeNoticeToast', 'Безопасный режим. Аддоны отключены.', 'Ясно');
        }
    });
    electron_1.ipcMain.on(events_js_1.Events.YNISON_STATE, (event, data) => {
        eventsLogger.info(`Event received`, events_js_1.Events.YNISON_STATE, data);
        (0, scrobbleManager_js_1.handlePlayingStateEventFromYnison)(structuredClone(data));
        (0, discordRichPresence_js_1.fromYnisonState)(structuredClone(data));
    });

    electron_1.ipcMain.on(events_js_1.Events.DOWNLOAD_MOD_UPDATE, async (event, data) => {
        eventsLogger.info(`Event received`, events_js_1.Events.DOWNLOAD_MOD_UPDATE);

        let callback = (progressRenderer, progressWindow) => {
            sendProgressBarChange(window, 'modUpdateToast', progressRenderer * 100);
            window.setProgressBar(progressWindow);
        };
        //await (0, modUpdater_js_1.getModUpdater)().onUpdateDownload(throttle(callback, PROGRESS_BAR_THROTTLE_MS));
    });

    electron_1.ipcMain.on(events_js_1.Events.INSTALL_MOD_UPDATE, async (event, data) => {
        eventsLogger.info(`Event received`, events_js_1.Events.INSTALL_MOD_UPDATE);
        //await (0, modUpdater_js_1.getModUpdater)().onInstallUpdate();
    });

    electron_1.ipcMain.on(events_js_1.Events.NATIVE_STORE_SET, (event, key, value) => {
        eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_STORE_SET, key, value);
        if (key === 'modSettings.window.hidePulseSyncVersionInTitleBar') {
            const isPremium = Boolean(getPulseSyncManager()?.isPremiumUser);
            if (value && !isPremium) {
                eventsLogger.warn('Blocked non-premium attempt to hide PulseSync version in title bar');
                value = false;
            }
        }
        store_js_1.set(key, value);
        if (key === 'modSettings.globalShortcuts.enable') {
            updateGlobalShortcuts();
        }
        MiniPlayer.updateSettingsState(store_js_1.getModSettings());
    });

    electron_1.ipcMain.on(events_js_1.Events.TOGGLE_MINIPLAYER, (event) => {
        eventsLogger.info(`Event received`, events_js_1.Events.TOGGLE_MINIPLAYER);
        MiniPlayer.toggle();
    });

    electron_1.ipcMain.handle(events_js_1.Events.GET_PASSPORT_LOGIN, async () => {
        eventsLogger.info('Event handle', events_js_1.Events.GET_PASSPORT_LOGIN);
        try {
            const cookie = await electron_1.session.defaultSession.cookies.get({
                name: cookies_js_1.PASSPORT_LOGIN,
                domain: cookies_js_1.PASSPORT_LOGIN_DOMAIN,
            });
            return cookie?.[0]?.value;
        } catch (error) {
            eventsLogger.error(`${events_js_1.Events.GET_PASSPORT_LOGIN} event failed.`, error);
            return;
        }
    });
    electron_1.ipcMain.handle(events_js_1.Events.GET_YANDEX_UID, async () => {
        eventsLogger.info('Event handle', events_js_1.Events.GET_YANDEX_UID);
        try {
            const cookie = await electron_1.session.defaultSession.cookies.get({
                name: cookies_js_1.YANDEX_ID,
                domain: cookies_js_1.PASSPORT_LOGIN_DOMAIN,
            });
            return cookie?.[0]?.value;
        } catch (error) {
            eventsLogger.error(`${events_js_1.Events.GET_YANDEX_UID} event failed.`, error);
            return;
        }
    });
};
const sendProgressBarChange = (window, elementType, progress, statusLabel) => {
    window.webContents.send(events_js_1.Events.PROGRESS_BAR_CHANGE, elementType, progress, Date.now(), statusLabel);
    eventsLogger.info('Event sent', events_js_1.Events.PROGRESS_BAR_CHANGE, elementType, progress);
};

exports.sendProgressBarChange = sendProgressBarChange;
const sendLastFmUserInfoUpdated = (window = mainWindow, userinfo) => {
    window.webContents.send(events_js_1.Events.LASTFM_USERINFO_UPDATE, userinfo);
    eventsLogger.info('Event sent', events_js_1.Events.LASTFM_USERINFO_UPDATE, userinfo);
};

exports.sendLastFmUserInfoUpdated = sendLastFmUserInfoUpdated;
exports.handleApplicationEvents = handleApplicationEvents;
const sendProbabilityBucket = (window, bucket) => {
    window.webContents.send(events_js_1.Events.PROBABILITY_BUCKET, bucket);
    eventsLogger.info('Event sent', events_js_1.Events.PROBABILITY_BUCKET, bucket);
};
exports.sendProbabilityBucket = sendProbabilityBucket;
const sendLoadReleaseNotes = ({ window, needToShowReleaseNotes, sortedDescReleaseNotesKeys, translationsReleaseNotes }) => {
    window.webContents.send(events_js_1.Events.LOAD_RELEASE_NOTES, {
        needToShowReleaseNotes,
        sortedDescReleaseNotesKeys,
        translationsReleaseNotes,
    });
    eventsLogger.info('Event sent', events_js_1.Events.LOAD_RELEASE_NOTES);
};
exports.sendLoadReleaseNotes = sendLoadReleaseNotes;
const sendUpdateAvailable = (window, version) => {
    window.webContents.send(events_js_1.Events.UPDATE_AVAILABLE, version);
    eventsLogger.info('Event sent', events_js_1.Events.UPDATE_AVAILABLE, version);
};
exports.sendUpdateAvailable = sendUpdateAvailable;
const sendModUpdateAvailable = (window, currVersion, newVersion) => {
    window.webContents.send(events_js_1.Events.MOD_UPDATE_AVAILABLE, currVersion, newVersion, Date.now());
    eventsLogger.info('Event sent', events_js_1.Events.MOD_UPDATE_AVAILABLE, currVersion, newVersion);
};
exports.sendModUpdateAvailable = sendModUpdateAvailable;
const sendBasicToastCreate = (window, toastID, message, dismissable) => {
    window.webContents.send(events_js_1.Events.BASIC_TOAST_CREATE, toastID, message, dismissable, Date.now());
    eventsLogger.info('Event sent', events_js_1.Events.BASIC_TOAST_CREATE, toastID, message);
};
const sendBasicToastDismiss = (window, toastID) => {
    window.webContents.send(events_js_1.Events.BASIC_TOAST_DISMISS, toastID, Date.now());
    eventsLogger.info('Event sent', events_js_1.Events.BASIC_TOAST_DISMISS, toastID);
};
const sendRefreshApplicationData = (window) => {
    window.webContents.send(events_js_1.Events.REFRESH_APPLICATION_DATA);
    eventsLogger.info('Event sent', events_js_1.Events.REFRESH_APPLICATION_DATA);
};
exports.sendRefreshApplicationData = sendRefreshApplicationData;
const sendPlayerAction = (window, action, value) => {
    window.webContents.send(events_js_1.Events.PLAYER_ACTION, action, value, Date.now());
    eventsLogger.info('Event sent', events_js_1.Events.PLAYER_ACTION, action, value, Date.now());
};
exports.sendPlayerAction = sendPlayerAction;
const sendOpenDeeplink = (window, pathname) => {
    window.webContents.send(events_js_1.Events.OPEN_DEEPLINK, pathname);
    eventsLogger.info('Event sent', events_js_1.Events.OPEN_DEEPLINK);
};
exports.sendOpenDeeplink = sendOpenDeeplink;
const sendAnalyticsOnFirstLaunch = (window) => {
    window.webContents.send(events_js_1.Events.FIRST_LAUNCH);
    eventsLogger.info('Event send', events_js_1.Events.FIRST_LAUNCH);
};
exports.sendAnalyticsOnFirstLaunch = sendAnalyticsOnFirstLaunch;
const sendRefreshTracksAvailability = (window) => {
    window.webContents.send(events_js_1.Events.REFRESH_TRACKS_AVAILABILITY);
    eventsLogger.info('Event sent', events_js_1.Events.REFRESH_TRACKS_AVAILABILITY);
};
exports.sendRefreshTracksAvailability = sendRefreshTracksAvailability;
const sendRefreshRepositoryMeta = (window) => {
    window.webContents.send(events_js_1.Events.REFRESH_REPOSITORY_META);
    eventsLogger.info('Event send', events_js_1.Events.REFRESH_REPOSITORY_META);
};
exports.sendRefreshRepositoryMeta = sendRefreshRepositoryMeta;

const sendNativeStoreUpdate = (key, value, window = undefined) => {
    const win = window ?? mainWindow;
    if (win && win.webContents && typeof win.webContents.send === 'function') {
        win.webContents.send(events_js_1.Events.NATIVE_STORE_UPDATE, key, value);
        eventsLogger.info('Event sent', events_js_1.Events.NATIVE_STORE_UPDATE, key, value);
        MiniPlayer.updateSettingsState(store_js_1.getModSettings());
    } else {
        eventsLogger.warn('Event not sent, window is undefined or does not support webContents.send', events_js_1.Events.NATIVE_STORE_UPDATE, key, value);
    }
};
exports.sendNativeStoreUpdate = sendNativeStoreUpdate;

const zoomIn = () => {
    eventsLogger.info('Event handle', 'zoom-in');
    return (mainWindow.webContents.zoomFactor = Math.min(mainWindow.webContents.zoomFactor + 0.05, 2.0));
};

exports.zoomIn = zoomIn;

const zoomOut = () => {
    eventsLogger.info('Event handle', 'zoom-out');
    return (mainWindow.webContents.zoomFactor = Math.max(mainWindow.webContents.zoomFactor - 0.05, 0.75));
};
exports.zoomOut = zoomOut;

const resetZoom = () => {
    eventsLogger.info('Event handle', 'reset-zoom');
    return (mainWindow.webContents.zoomFactor = 1.0);
};

exports.resetZoom = resetZoom;

const getZoomLevel = () => {
    eventsLogger.info('Event handle', 'get-zoom-level');
    return mainWindow.webContents.zoomFactor;
};

exports.getZoomLevel = getZoomLevel;

const setZoomLevel = (event, level) => {
    eventsLogger.info('Event handle', 'set-zoom-level', level);
    return (mainWindow.webContents.zoomFactor = Math.min(Math.max(level ?? 1.0, 0.75), 2.0));
};

electron_1.ipcMain.handle('get-enabled-addons', () => {
    eventsLogger.info('Event handle', 'get-enabled-addons');
    try {
        const mgr = pulseSyncManager_js_1 || (mainWindow ? (0, getPulseSyncManager)(mainWindow) : null);
        if (!mgr) {
            return { addons: [], themes: [] };
        }
        return mgr.getEnabledAddons();
    } catch (err) {
        eventsLogger.error('get-enabled-addons handler failed:', err);
        return { addons: [], themes: [] };
    }
});

exports.setZoomLevel = setZoomLevel;
exports.pulseSyncManager = pulseSyncManager_js_1;
electron_1.ipcMain.handle('zoom-in', zoomIn);
electron_1.ipcMain.handle('zoom-out', zoomOut);
electron_1.ipcMain.handle('reset-zoom', resetZoom);
electron_1.ipcMain.handle('get-zoom-level', getZoomLevel);
electron_1.ipcMain.handle('set-zoom-level', setZoomLevel);

MiniPlayer.onPlayerAction((action, value) => {
    sendPlayerAction(mainWindow, action, value);
});

electron_1.ipcMain.handle('isPremiumUser', () => {
    eventsLogger.info('Event handle', 'isPremiumUser');
    return getPulseSyncManager().isPremiumUser;
});
electron_1.ipcMain.on('isPremiumUserSync', (event) => {
    event.returnValue = Boolean(getPulseSyncManager()?.isPremiumUser);
});
