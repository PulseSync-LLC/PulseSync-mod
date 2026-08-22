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
    exports.sendOpenModSettingsDeeplink =
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
const pulsesyncDevConfig_js_1 = require('./lib/pulsesyncDevConfig.js');

const isAccelerator = require('electron-is-accelerator');
const modUpdater_js_1 = require('./lib/modUpdater.js');

const { getAllowedUrls } = require('./lib/handlers/handleHeadersReceived/corsHandler');
const trackDownloader_js_1 = require('./lib/trackDownloader/trackDownloader.js');
const { getFfmpegUpdater } = require('./lib/ffmpegInstaller.js');
const { getYtDlpInstaller } = require('./lib/ytDlpInstaller.js');
const { getPulseSyncAppInstaller } = require('./lib/pulsesyncAppInstaller.js');
const taskBarExtension_js_1 = require('./lib/taskBarExtension/taskBarExtension.js');
const scrobbleManager_js_1 = require('./lib/scrobble/index.js');
const { getPulseSyncManager } = require('./lib/pulsesync/PulseSyncManager.js');
const miniPlayer_js_1 = require('./lib/miniplayer/miniplayer.js');
const discordRichPresence_js_1 = require('./lib/discordRichPresence.js');
const { getYandexStationRuntime } = require('./lib/yandexStation/YandexStationRuntime.js');
const { registerYandexStationIpc } = require('./lib/yandexStation/registerYandexStationIpc.js');
const nativeAudioOutput = require('./lib/nativeAudioOutput.js');

const playerActions_js_1 = require('./types/playerActions.js');
const platform_js_1 = require('./types/platform.js');
const config_js_1 = require('./config.js');
const getSortedDescReleaseNotesKeys_js_1 = require('./lib/releaseNotes/getSortedDescReleaseNotesKeys.js');
const removeNewerReleaseNotes_js_1 = require('./lib/releaseNotes/removeNewerReleaseNotes.js');
const formatters_js_1 = require('./lib/i18n/formatters.js');
const stringToAST_js_1 = require('./lib/i18n/stringToAST.js');
const { sendFeaturesMetric, sendDownloadTracksMetric, sendExperimentsMetric } = require('./lib/metrics.js');
const gt_js_1 = __importDefault(require('semver/functions/gt.js'));
const valid_js_1 = __importDefault(require('semver/functions/valid.js'));
const i18nKeys_js_1 = require('./constants/i18nKeys.js');
const dateToDDMonthYYYYProps_js_1 = require('./lib/date/dateToDDMonthYYYYProps.js');
const eventsLogger = new Logger_js_1.Logger('Events');
const saveFileToLocalDiskLogger = new Logger_js_1.Logger('SaveFileToLocalDisk');
const yandexStationLogger = new Logger_js_1.Logger('YandexStation');
const { throttle } = require('./lib/utils.js');
const crypto = require('crypto');
const fs = require('fs');
const nodePath = require('node:path');
const iconv = require('iconv-lite');

let mainWindow = undefined;
let isPlayerReady = false;
let isApplicationInitFinished = false;
let applicationInitFinishedAt = 0;
let downloadQueue = Promise.resolve();
let isGlobalShortcutsRecordingActive = false;
let toastOperationNonce = 0;
let isLastFmStartupAuthProbeHandled = false;
let pendingLastFmStartupAuthErrorToast = false;
let unsubscribeYaspAudioFormatChanged = null;
let unsubscribeWasapiExclusiveOutputStateChanged = null;
const activeTrackDownloadControllers = new Map();
const WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY = 'modSettings.nativeAudioOutput.wasapiExclusiveDeviceId';
const WASAPI_EXCLUSIVE_OUTPUT_ENABLED_SETTING_KEY = 'modSettings.nativeAudioOutput.enableWasapiExclusiveOutput';
const WASAPI_EXCLUSIVE_FORCE_FULL_VOLUME_SETTING_KEY = 'modSettings.nativeAudioOutput.forceWasapiExclusiveFullVolume';
const YASP_CHUNK_TAP_ENABLED_SETTING_KEY = 'modSettings.nativeAudioOutput.enableYaspChunkTap';
const ISOLATED_ADDON_WORLD_ID_START = 10000;
const isolatedAddonWorldIds = new Map();
let nextIsolatedAddonWorldId = ISOLATED_ADDON_WORLD_ID_START;
let isolatedAddonRuntimeSource = null;

const getIsolatedAddonWorldId = (webContents, addonId) => {
    const key = `${webContents.id}:${addonId}`;
    let worldId = isolatedAddonWorldIds.get(key);
    if (!worldId) {
        worldId = nextIsolatedAddonWorldId++;
        isolatedAddonWorldIds.set(key, worldId);
    }
    return worldId;
};

const getIsolatedAddonRuntimeSource = () => {
    if (!pulsesyncDevConfig_js_1.pulseSyncDevConfig.enabled && isolatedAddonRuntimeSource) return isolatedAddonRuntimeSource;
    const runtimePath = nodePath.join(electron_1.app.getAppPath(), 'app', 'pulsesync-web', 'isolated.js');
    const runtimeSource = fs.readFileSync(runtimePath, 'utf8');
    if (!pulsesyncDevConfig_js_1.pulseSyncDevConfig.enabled) isolatedAddonRuntimeSource = runtimeSource;
    return runtimeSource;
};

const MiniPlayer = miniPlayer_js_1.getMiniPlayer();

MiniPlayer.updateSettingsState(store_js_1.getModSettings());

const PROGRESS_BAR_THROTTLE_MS = 200;
const PULSESYNC_APP_AUTO_INSTALL_ENABLED = false;
const PLAYLIST_LINK_IMPORT_TRACK_READY = 'PLAYLIST_LINK_IMPORT_TRACK_READY';
const PLAYLIST_LINK_IMPORT_UPLOAD_STATE = 'PLAYLIST_LINK_IMPORT_UPLOAD_STATE';
const PLAYLIST_LINK_IMPORT_UPLOAD_TIMEOUT_MS = 15 * 60 * 1000;
const PLAYLIST_LINK_IMPORT_MAX_FILE_SIZE_BYTES = 0x19000000;
const playlistLinkImportUploadWaiters = new Map();
let pulseSyncManager_js_1;
const repairPlaylistLinkImportMessage = (value) => {
    let text = String(value || '');

    for (let attempt = 0; attempt < 2 && /(?:Р.|С.){2,}/.test(text); attempt += 1) {
        const repaired = iconv.encode(text, 'windows-1251').toString('utf8');
        if (!repaired || repaired.includes('\uFFFD') || repaired === text) break;
        text = repaired;
    }

    return text;
};
const isBoolean = (value) => {
    return typeof value === 'boolean';
};

const getLastFmScrobbler = () => scrobbleManager_js_1.scrobblerManager.getScrobblerByType('Last.fm');

const waitForPlaylistLinkImportUpload = (trackToken) => {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            playlistLinkImportUploadWaiters.delete(trackToken);
            reject(new Error('Истекло время ожидания загрузки трека в Яндекс Музыку'));
        }, PLAYLIST_LINK_IMPORT_UPLOAD_TIMEOUT_MS);
        timeout.unref?.();

        playlistLinkImportUploadWaiters.set(trackToken, {
            resolve: (payload) => {
                clearTimeout(timeout);
                playlistLinkImportUploadWaiters.delete(trackToken);
                resolve(payload);
            },
            reject: (error) => {
                clearTimeout(timeout);
                playlistLinkImportUploadWaiters.delete(trackToken);
                reject(error);
            },
        });
    });
};

const normalizeSubstitutedTrack = (track) => {
    if (!track) return;

    const substituted = track.substituted;
    if (substituted) {
        track.title = substituted.title ?? track.title;
        track.artists = substituted.artists ?? track.artists;
        track.version = substituted.version ?? track.version;
        track.derivedColors = substituted.derivedColors ?? track.derivedColors;
        track.ogImage = substituted.ogImage ?? substituted.coverUri ?? track.ogImage;
        track.isSubstituted = true;
    }

    track.coverUri =
        substituted?.coverUri ||
        substituted?.ogImage ||
        substituted?.cover?.uri ||
        substituted?.albums?.[0]?.coverUri ||
        track.albums?.[0]?.coverUri ||
        track.ogImage ||
        track.cover?.uri ||
        track.coverUri;
};

const getLastFmScrobblingState = () => {
    const lastFmEnabled = Boolean(store_js_1.getModSettings()?.scrobblers?.lastfm?.enable);
    if (!lastFmEnabled) {
        return 'disabled';
    }

    const lastFmScrobbler = getLastFmScrobbler();
    return lastFmScrobbler?.isLoggedIn?.() ? 'enabled_logged_in' : 'enabled_logged_out';
};

const withDerivedFeatureMetrics = (modSettings) => ({
    ...modSettings,
    scrobblers: {
        ...modSettings?.scrobblers,
        lastfm: {
            ...modSettings?.scrobblers?.lastfm,
            scrobblingState: getLastFmScrobblingState(),
        },
    },
});

const buildLastFmScrobblingStatePatch = () => ({
    modSettings: {
        scrobblers: {
            lastfm: {
                scrobblingState: getLastFmScrobblingState(),
            },
        },
    },
});

const buildFeaturesSnapshot = () => {
    return {
        sendModAnonymizedMetrics: store_js_1.get('sendModAnonymizedMetrics'),
        enableYnisonPlayerRemoteControl: store_js_1.get('enableYnisonPlayerRemoteControl'),
        ynisonInterceptPlayback: store_js_1.get('ynisonInterceptPlayback'),
        autoUpdates: store_js_1.get('autoUpdates'),
        modSettings: withDerivedFeatureMetrics(store_js_1.getModSettings()),
    };
};

const buildFeaturesPatch = (path, value) => {
    if (!path || typeof path !== 'string') {
        return null;
    }

    if (path.startsWith('modSettings.globalShortcuts.') && path !== 'modSettings.globalShortcuts.enable' && path !== 'modSettings.globalShortcuts.enabled') {
        return null;
    }

    const patch = {};
    const keys = path.split('.');
    const lastKey = keys.pop();
    let current = patch;

    for (const key of keys) {
        current[key] = {};
        current = current[key];
    }

    current[lastKey] = value;

    if (path.startsWith('modSettings.scrobblers.lastfm.')) {
        patch.modSettings = patch.modSettings || {};
        patch.modSettings.scrobblers = patch.modSettings.scrobblers || {};
        patch.modSettings.scrobblers.lastfm = {
            ...(patch.modSettings.scrobblers.lastfm || {}),
            scrobblingState: getLastFmScrobblingState(),
        };
    }

    return patch;
};

const updateGlobalShortcuts = () => {
    eventsLogger.info('(GlobalShortcuts) Update triggered.');
    electron_1.globalShortcut.unregisterAll();

    const modSettings = store_js_1.getModSettings();

    eventsLogger.info('(GlobalShortcuts) modSettings.globalShortcuts:', modSettings?.globalShortcuts);

    if (isGlobalShortcutsRecordingActive) {
        eventsLogger.info('(GlobalShortcuts) Registration skipped while keybind recording is active.');
        return;
    }

    if (modSettings?.globalShortcuts?.enable) {
        const shortcuts = Object.entries(modSettings.globalShortcuts);
        shortcuts.forEach((shortcut) => {
            if (shortcut[0] === 'enable') return;

            if (shortcut[1] && isAccelerator(shortcut[1])) {
                electron_1.globalShortcut.register(shortcut[1], () => {
                    const commands = shortcut[0].split(' ');
                    commands.forEach((command) => {
                        const [actionName, value] = command.split('|');
                        const action = playerActions_js_1.PlayerActions[actionName];
                        const isVolumePercentAction = [
                            playerActions_js_1.PlayerActions.SET_VOLUME,
                            playerActions_js_1.PlayerActions.INCREASE_VOLUME,
                            playerActions_js_1.PlayerActions.DECREASE_VOLUME,
                        ].includes(action);

                        if (isVolumePercentAction && !Number.isFinite(Number(value))) {
                            eventsLogger.warn(`(GlobalShortcuts) ${command} is skipped. Invalid volume value: ${value}`);
                            return;
                        }

                        const normalizedValue = isVolumePercentAction ? Math.min(Math.max(Number(value), 0), 100) / 100 : value;
                        sendPlayerAction(mainWindow, action, normalizedValue);
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

const handleSaveToLocalDisk = async (defaultPath, buffer) => {
    const { canceled, filePath } = await electron_1.dialog.showSaveDialog({
        defaultPath,
    });
    if (canceled || !filePath) {
        return;
    }
    fs.writeFile(filePath, Buffer.from(buffer), (error) => {
        if (error) {
            saveFileToLocalDiskLogger.error('Error saving file to local disk', error);
        }
    });
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
    let applicationInitFinishedTimeout;
    let appSafeModeRestartTimeout;
    let safeModeRestartInterval;

    const isMainWindowBackgrounded = () => {
        const startsMinimized = store_js_1.getModSettings()?.window?.minimizedStart ?? false;
        return state_js_1.state.isWindowHidden || state_js_1.state.isMinimized || mainWindow?.isMinimized?.() || (startsMinimized && mainWindow?.isVisible?.() === false);
    };

    const handleApplicationInitFinishedTimeout = () => {
        applicationInitFinishedTimeout && clearTimeout(applicationInitFinishedTimeout);
        safeModeRestartInterval && clearInterval(safeModeRestartInterval);
        appSafeModeRestartTimeout && clearTimeout(appSafeModeRestartTimeout);

        applicationInitFinishedTimeout = setTimeout(() => {
            if (!isSafeMode) {
                eventsLogger.error('APPLICATION_INIT_FINISHED event timeout reached. Prompt safe mode restart.');
                mainWindow.webContents.send(events_js_1.Events.APP_STALL);
                let progress = 0;
                safeModeRestartInterval = setInterval(() => {
                    sendProgressBarChange(window, 'safeModeRestart', Math.round(progress / 2), `${Math.round(20 - (progress / 10))} сек`);
                    progress += 1;
                }, 100);
                appSafeModeRestartTimeout = setTimeout(() => {
                    eventsLogger.error('Safe mode restart timeout reached. Restarting in safe mode.');
                    clearInterval(safeModeRestartInterval);
                    restartApplication(true);
                }, 21000);
            }
        }, 20 * 1000);
    };

    const updater = (0, updater_js_1.getUpdater)();
    const trackDownloader = new trackDownloader_js_1.TrackDownloader(window);
    const yandexStationRuntime = getYandexStationRuntime({
        logger: yandexStationLogger,
        session: window.webContents.session,
    });

    registerYandexStationIpc(electron_1.ipcMain, {
        runtime: yandexStationRuntime,
    });
    yandexStationRuntime.on('stateChanged', (state) => {
        if (window?.webContents && typeof window.webContents.send === 'function') {
            window.webContents.send(events_js_1.Events.YANDEX_STATION_STATE, state);
        }
    });
    yandexStationRuntime.on('playbackStateChanged', (state) => {
        if (window?.webContents && typeof window.webContents.send === 'function') {
            window.webContents.send(events_js_1.Events.YANDEX_STATION_PLAYBACK_STATE, state);
        }
    });
    unsubscribeYaspAudioFormatChanged?.();
    unsubscribeYaspAudioFormatChanged = nativeAudioOutput.onYaspAudioFormatChanged((format) => {
        if (window?.webContents && typeof window.webContents.send === 'function') {
            window.webContents.send(events_js_1.Events.NATIVE_AUDIO_OUTPUT_YASP_AUDIO_FORMAT_CHANGED, format);
        }
    });
    unsubscribeWasapiExclusiveOutputStateChanged?.();
    unsubscribeWasapiExclusiveOutputStateChanged = nativeAudioOutput.onWasapiExclusiveOutputStateChanged((state) => {
        if (window?.webContents && typeof window.webContents.send === 'function') {
            window.webContents.send(events_js_1.Events.NATIVE_AUDIO_OUTPUT_WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED, state);
        }
    });
    if (store_js_1.getModSettings()?.playerBarEnhancement?.enableYandexStationCast ?? true) {
        yandexStationRuntime.start();
    }

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
        const toastID = `trackDownload|${trackId}`;
        const toastNonce = sendBasicToastCreate(window, toastID, trackName ? 'Загрузка трека: ' + trackName : 'Загрузка трека...', false);

        let callback = (progressRenderer, progressWindow) => {
            sendProgressBarChange(window, toastID, progressRenderer * 100, undefined, toastNonce);
            window.setProgressBar(progressWindow);
        };

        eventsLogger.info('Event received', events_js_1.Events.DOWNLOAD_TRACK);
        await trackDownloader.downloadSingleTrack(trackId, throttle(callback, PROGRESS_BAR_THROTTLE_MS));
        setTimeout(() => sendBasicToastDismiss(window, toastID, toastNonce), 2000);
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

        const toastID = `trackDownload|${hash}`;
        const abortController = new AbortController();
        const toastNonce = sendBasicToastCreate(window, toastID, message, 'Отменить', events_js_1.Events.DOWNLOAD_TRACKS_CANCEL, (operationNonce) => ({
            toastID,
            operationNonce,
        }));
        activeTrackDownloadControllers.set(toastNonce, abortController);

        eventsLogger.info('Event received', events_js_1.Events.DOWNLOAD_TRACKS);

        const resetProgress = (statusLabel) => {
            sendProgressBarChange(window, toastID, -1, statusLabel, toastNonce);
            window.setProgressBar(-1);
        };

        const callback = (progressRenderer, progressWindow, statusLabel) => {
            if (abortController.signal.aborted || progressRenderer < 0 || progressWindow < 0) {
                resetProgress(statusLabel);
                return;
            }

            sendProgressBarChange(window, toastID, progressRenderer * 100, statusLabel, toastNonce);
            window.setProgressBar(progressWindow);
        };

        const queuedAt = Date.now();
        downloadQueue = downloadQueue
            .then(async () => {
                const startedAt = Date.now();
                let failed = false;
                let downloadResult;

                try {
                    if (abortController.signal.aborted) {
                        return;
                    }

                    downloadResult = await trackDownloader.downloadMultipleTracks(trackIds, dirName, throttle(callback, PROGRESS_BAR_THROTTLE_MS), {
                        signal: abortController.signal,
                    });
                } catch (e) {
                    if (abortController.signal.aborted) {
                        eventsLogger.info('Multiple track download canceled:', toastID);
                    } else {
                        failed = true;
                        eventsLogger.error('Error downloading multiple tracks:', e, e.stack);
                    }
                } finally {
                    const elapsedMs = Date.now() - startedAt;
                    const timingMetric = {
                        toastID,
                        dirType,
                        dirName,
                        tracksCount: trackIds.length,
                        elapsedMs,
                        elapsedSeconds: Number((elapsedMs / 1000).toFixed(3)),
                        queueWaitMs: startedAt - queuedAt,
                        canceled: abortController.signal.aborted,
                        failed,
                    };
                    eventsLogger.info('DOWNLOAD_TRACKS timing', timingMetric);

                    const downloaderSettings = store_js_1.getModSettings()?.downloader ?? {};
                    if (downloadResult?.queueMetrics || timingMetric.canceled || timingMetric.failed) {
                        void sendDownloadTracksMetric({
                            timing: {
                                dirType,
                                tracksCount: trackIds.length,
                                elapsedMs: timingMetric.elapsedMs,
                                elapsedSeconds: timingMetric.elapsedSeconds,
                                queueWaitMs: timingMetric.queueWaitMs,
                                canceled: timingMetric.canceled,
                                failed: timingMetric.failed,
                            },
                            pipeline: downloadResult?.queueMetrics ?? null,
                            settings: {
                                concurrencyPreset: downloaderSettings.concurrencyPreset ?? 'adaptive',
                                useMP3: downloaderSettings.useMP3 ?? false,
                                addM3UToPlaylists: downloaderSettings.addM3UToPlaylists ?? false,
                            },
                        });
                    }
                    activeTrackDownloadControllers.delete(toastNonce);
                    resetProgress(abortController.signal.aborted ? 'Отменено' : undefined);
                    setTimeout(() => {
                        sendBasicToastDismiss(window, toastID, toastNonce);
                    }, 2000);
                }
            })
            .catch((err) => {
                eventsLogger.error('Download queue error:', err);
            });
    });

    electron_1.ipcMain.on(events_js_1.Events.DOWNLOAD_TRACKS_CANCEL, (event, payload = {}) => {
        const toastID = payload?.toastID;
        const operationNonce = payload?.operationNonce;
        const abortController = operationNonce ? activeTrackDownloadControllers.get(operationNonce) : undefined;

        if (!abortController) {
            eventsLogger.warn('No active multiple track download to cancel:', toastID, operationNonce);
            return;
        }

        eventsLogger.info('Canceling multiple track download:', toastID);
        abortController.abort(new Error('Multiple track download canceled by user'));
        sendProgressBarChange(window, toastID, -1, 'Отменено', operationNonce);
        window.setProgressBar(-1);
        activeTrackDownloadControllers.delete(operationNonce);
    });

    electron_1.app.on('will-quit', () => {
        activeTrackDownloadControllers.forEach((abortController) => {
            if (!abortController.signal.aborted) {
                abortController.abort(new Error('Application is closing'));
            }
        });
        activeTrackDownloadControllers.clear();
        trackDownloader.abortActiveDownloads(new Error('Application is closing'));
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
    electron_1.ipcMain.handle('scrobble-lastfm-login', async () => {
        await getLastFmScrobbler().login();
        void sendFeaturesMetric(buildLastFmScrobblingStatePatch());
    });

    electron_1.ipcMain.handle('scrobble-lastfm-logout', async () => {
        await getLastFmScrobbler().logout();
        void sendFeaturesMetric(buildLastFmScrobblingStatePatch());
    });

    electron_1.ipcMain.handle('scrobble-lastfm-get-user', () => {
        const lastFmScrobbler = getLastFmScrobbler();
        const isStartupAuthProbe = !isLastFmStartupAuthProbeHandled;
        const hasStoredSession = lastFmScrobbler.isLoggedIn();
        isLastFmStartupAuthProbeHandled = true;

        return lastFmScrobbler.api.getUserInfo().catch((error) => {
            if (!isStartupAuthProbe || !hasStoredSession || error?.status !== 403) {
                throw error;
            }

            if (isApplicationInitFinished) {
                sendBasicToastCreate(window, 'lastFmStartupAuthError', 'Не удалось авторизоваться в LastFM. Подробнее на странице настроек скробблинга', 'Ясно');
            } else {
                pendingLastFmStartupAuthErrorToast = true;
            }

            return undefined;
        });
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
    electron_1.ipcMain.on(PLAYLIST_LINK_IMPORT_UPLOAD_STATE, (event, payload) => {
        const trackToken = payload?.trackToken;
        const status = payload?.status;
        if (!trackToken || !status) return;

        eventsLogger.info('Playlist link import upload state', {
            trackToken,
            status,
            attempt: payload?.attempt,
            stage: payload?.stage,
            fileSize: payload?.fileSize,
            timeoutMs: payload?.timeoutMs,
            error: payload?.error,
        });
        const waiter = playlistLinkImportUploadWaiters.get(trackToken);
        if (!waiter || status === 'accepted' || status === 'uploading' || status === 'attempt-failed') return;

        if (status === 'uploaded') {
            waiter.resolve(payload);
            return;
        }

        if (status === 'failed' || status === 'cancelled') {
            const errorMessage = payload?.error || (status === 'cancelled' ? 'Загрузка трека отменена' : 'Не удалось загрузить трек в Яндекс Музыку');
            waiter.reject(new Error(errorMessage));
        }
    });
    electron_1.ipcMain.handle('playlist-import-track-from-link', async (event, payload) => {
        const link = payload?.url;
        const importID = payload?.importID;
        const toastID = `trackImport|${crypto.createHash('md5').update(`${link}|${Date.now()}`).digest('hex')}`;

        eventsLogger.info('Event received playlist-import-track-from-link', link);
        const toastNonce = sendBasicToastCreate(window, toastID, 'Импорт треков по ссылке | #s', false);

        const progressCallback = (progressRenderer, progressWindow, statusLabel) => {
            sendProgressBarChange(window, toastID, Math.max(progressRenderer, 0) * 100, statusLabel, toastNonce);
            window.setProgressBar(progressWindow);
        };

        let importedTrackIndex = 0;

        try {
            const importedTracks = await trackDownloader.importTracksFromUrl(link, throttle(progressCallback, PROGRESS_BAR_THROTTLE_MS), {
                collectTracks: false,
                onTrackReady: async (importedTrack) => {
                    if (!importID) {
                        return;
                    }
                    if (importedTrack.buffer.byteLength > PLAYLIST_LINK_IMPORT_MAX_FILE_SIZE_BYTES) {
                        throw new Error('Файл слишком большой для загрузки в Яндекс Музыку');
                    }

                    importedTrackIndex += 1;
                    const trackToken = `${importID}|${importedTrackIndex}|${crypto.randomUUID()}`;
                    const uploadResultPromise = waitForPlaylistLinkImportUpload(trackToken);
                    const arrayBuffer = importedTrack.buffer.buffer.slice(
                        importedTrack.buffer.byteOffset,
                        importedTrack.buffer.byteOffset + importedTrack.buffer.byteLength,
                    );

                    progressCallback(0.99, 0.99, `Загрузка в Яндекс Музыку: ${importedTrack.fileName}`);
                    try {
                        window.webContents.send(PLAYLIST_LINK_IMPORT_TRACK_READY, {
                            importID,
                            trackToken,
                            fileName: importedTrack.fileName,
                            mimeType: importedTrack.mimeType,
                            arrayBuffer,
                        });
                    } catch (error) {
                        playlistLinkImportUploadWaiters.get(trackToken)?.reject(error);
                    }

                    await uploadResultPromise;
                },
            });
            const successLabel =
                importedTracks.failedCount > 0
                    ? importedTracks.importedCount > 0
                        ? `${importedTracks.importedCount} / ${importedTracks.totalCount}`
                        : 'Ошибка'
                    : 'Готово';

            progressCallback(1, 1, successLabel);
            setTimeout(() => {
                sendBasicToastDismiss(window, toastID, toastNonce);
                window.setProgressBar(-1);
            }, 2000);

            if (importedTracks.failedCount > 0) {
                eventsLogger.warn(`Import from link completed with skipped tracks: ${importedTracks.failedCount}/${importedTracks.totalCount}`, importedTracks.errors);
            }

            return {
                importID,
                importedCount: importedTracks.importedCount,
                totalCount: importedTracks.totalCount,
                failedCount: importedTracks.failedCount,
                errors: Array.isArray(importedTracks.errors) ? importedTracks.errors.map(repairPlaylistLinkImportMessage) : [],
            };
        } catch (error) {
            const rawMessage = error instanceof Error ? error.message : 'Не удалось импортировать треки по ссылке';
            const errorMessage = repairPlaylistLinkImportMessage(
                String(rawMessage)
                    .split(/\r\n|[\r\n]/)
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .at(-1),
            );

            sendProgressBarChange(window, toastID, 0, 'Ошибка', toastNonce);
            window.setProgressBar(-1);
            setTimeout(() => {
                sendBasicToastDismiss(window, toastID, toastNonce);
            }, 2500);
            eventsLogger.error('Error importing tracks from link:', error, error?.stack);
            throw new Error(errorMessage || 'Не удалось импортировать треки по ссылке');
        }
    });
    electron_1.ipcMain.handle('playlist-prefetch-track-from-link', async (event, payload) => {
        const link = payload?.url;

        eventsLogger.info('Event received playlist-prefetch-track-from-link', link);

        try {
            const prefetchedInfo = await trackDownloader.prefetchTracksFromUrl(link);

            return {
                isAvailable: true,
                trackCount: prefetchedInfo.trackCount,
                isPlaylist: prefetchedInfo.isPlaylist,
                artist: prefetchedInfo.artist,
                title: prefetchedInfo.title,
            };
        } catch (error) {
            const rawMessage = error instanceof Error ? error.message : 'Не удалось проверить ссылку';
            const errorMessage = repairPlaylistLinkImportMessage(
                String(rawMessage)
                    .split(/\r\n|[\r\n]/)
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .at(-1),
            );

            eventsLogger.warn('Prefetch for link import failed:', errorMessage);
            return {
                isAvailable: false,
                trackCount: 0,
                isPlaylist: false,
                title: null,
                message: errorMessage || 'Не удалось проверить ссылку',
            };
        }
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
        void sendFeaturesMetric(buildFeaturesSnapshot());

        applicationReadyTimeOut && clearTimeout(applicationReadyTimeOut);

        isPlayerReady = false;
        isApplicationInitFinished = isMainWindowBackgrounded() || Date.now() - applicationInitFinishedAt < 3000;

        if (!isApplicationInitFinished) {
            handleApplicationInitFinishedTimeout();
        }

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
            const ffmpegToastNonce = sendBasicToastCreate(window, 'ffmpeg', 'Обновление компонента: ffmpeg', false);

            let callback = (progressRenderer, progressWindow) => {
                sendProgressBarChange(window, 'ffmpeg', progressRenderer * 100, undefined, ffmpegToastNonce);
                window.setProgressBar(progressWindow);
            };
            ffmpegInstaller
                .ensureInstalled(throttle(callback, PROGRESS_BAR_THROTTLE_MS))
                .then(() => {
                    sendBasicToastDismiss(window, 'ffmpeg', ffmpegToastNonce);
                })
                .catch((err) => {
                    sendProgressBarChange(window, 'ffmpeg', -1, undefined, ffmpegToastNonce);
                    eventsLogger.error(err);
                    setTimeout(() => {
                        sendBasicToastDismiss(window, 'ffmpeg', ffmpegToastNonce);
                    }, 2500);
                });
        }

        const ytDlpInstaller = getYtDlpInstaller();
        if (await ytDlpInstaller.hasInstalledBinary()) {
            const isInstalled = await ytDlpInstaller.isInstalled();
            if (!isInstalled) {
                const ytDlpToastNonce = sendBasicToastCreate(window, 'yt-dlp', 'Обновление компонента: yt-dlp', false);

                let callback = (progressRenderer, progressWindow) => {
                    sendProgressBarChange(window, 'yt-dlp', progressRenderer * 100, undefined, ytDlpToastNonce);
                    window.setProgressBar(progressWindow);
                };
                ytDlpInstaller
                    .ensureInstalled(throttle(callback, PROGRESS_BAR_THROTTLE_MS))
                    .then(() => {
                        sendBasicToastDismiss(window, 'yt-dlp', ytDlpToastNonce);
                    })
                    .catch((err) => {
                        sendProgressBarChange(window, 'yt-dlp', -1, undefined, ytDlpToastNonce);
                        eventsLogger.error(err);
                        setTimeout(() => {
                            sendBasicToastDismiss(window, 'yt-dlp', ytDlpToastNonce);
                        }, 2500);
                    });
            }
        }

        if (PULSESYNC_APP_AUTO_INSTALL_ENABLED) {
            const pulseSyncInstaller = getPulseSyncAppInstaller();
            if (!(await pulseSyncInstaller.isInstalled())) {
                const pulseSyncAppToastNonce = sendBasicToastCreate(window, 'pulsesync-app', 'Установка PulseSync', false);
                let callback = (progressRenderer, progressWindow) => {
                    sendProgressBarChange(window, 'pulsesync-app', progressRenderer * 100, undefined, pulseSyncAppToastNonce);
                    window.setProgressBar(progressWindow);
                };
                try {
                    await pulseSyncInstaller.ensureInstalled(throttle(callback, PROGRESS_BAR_THROTTLE_MS));
                } catch (e) {
                    eventsLogger.error('PulseSync app installation failed:', e, e.stack);
                } finally {
                    sendBasicToastDismiss(window, 'pulsesync-app', pulseSyncAppToastNonce);
                }
            }
        }
    });
    electron_1.ipcMain.on(events_js_1.Events.APPLICATION_INIT_FINISHED, () => {
        eventsLogger.info('Event received', events_js_1.Events.APPLICATION_INIT_FINISHED);

        isApplicationInitFinished = true;
        applicationInitFinishedAt = Date.now();
        applicationInitFinishedTimeout && clearTimeout(applicationInitFinishedTimeout);
        appSafeModeRestartTimeout && clearTimeout(appSafeModeRestartTimeout);
        safeModeRestartInterval && clearInterval(safeModeRestartInterval);
        sendBasicToastDismiss(window, 'safeModeRestart');

        if (isSafeMode) sendBasicToastCreate(window, 'safeModeNoticeToast', 'Безопасный режим. Аддоны отключены.', 'Ясно');
        if (pendingLastFmStartupAuthErrorToast) {
            pendingLastFmStartupAuthErrorToast = false;
            sendBasicToastCreate(window, 'lastFmStartupAuthError', 'Не удалось авторизоваться в LastFM. Подробнее на странице настроек скробблинга', 'Ясно');
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
        eventsLogger.info('Event received', events_js_1.Events.PLAYER_STATE, {
            status: data?.status,
            trackId: data?.track?.id,
            position: data?.progress?.position,
            seekEventSequence: data?.seekEventSequence,
        });

        try {
            nativeAudioOutput.updateWasapiExclusivePlayerState(data);
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

            normalizeSubstitutedTrack(data?.track);
            normalizeSubstitutedTrack(data?.previousTrack);
            normalizeSubstitutedTrack(data?.nextTrack);

            const isActiveState = ['paused', 'playing'].includes(data?.status);
            const isPlayable = isPlayerReady && data.status !== 'idle' && isActiveState;

            MiniPlayer.updatePlayerState(structuredClone(data));
            (0, taskBarExtension_js_1.onPlayerStateChange)(window, data);

            if (isPlayable) {
                (0, tray_js_1.updateTrayMenu)(window);
                (0, scrobbleManager_js_1.handlePlayingStateEvent)(structuredClone(data));
                (0, pulseSyncManager_js_1.updatePlayerState)(structuredClone(data));
                (0, discordRichPresence_js_1.discordRichPresence)(structuredClone(data));
                return;
            }
        } catch (e) {
            eventsLogger.error('Error handling player state event:', e, e.stack);
        }

        if (data.track && !isPlayerReady) {
            isPlayerReady = true;

            if (store_js_1.getModSettings()?.vibeAnimationEnhancement?.autoLaunchOnAppStartup) {
                eventsLogger.info('Auto launch enabled: toggling play');
                exports.sendPlayerAction(window, playerActions_js_1.PlayerActions.TOGGLE_PLAY);
            }
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
        await (0, modUpdater_js_1.getModUpdater)().onUpdateDownload(throttle(callback, PROGRESS_BAR_THROTTLE_MS));
    });

    electron_1.ipcMain.on(events_js_1.Events.INSTALL_MOD_UPDATE, async (event, data) => {
        eventsLogger.info(`Event received`, events_js_1.Events.INSTALL_MOD_UPDATE);
        await (0, modUpdater_js_1.getModUpdater)().onInstallUpdate();
    });

    const setNativeStoreValue = (key, value) => {
        if (key === 'modSettings.window.hidePulseSyncVersionInTitleBar') {
            const isPremium = Boolean(getPulseSyncManager()?.isPremiumUser);
            if (value && !isPremium) {
                eventsLogger.warn('Blocked non-premium attempt to hide PulseSync version in title bar');
                value = false;
            }
        }
        store_js_1.set(key, value);
        if ('string' == typeof key && ('modSettings.globalShortcuts' === key || key.startsWith('modSettings.globalShortcuts.'))) {
            updateGlobalShortcuts();
        }
        if (key === 'modSettings.playerBarEnhancement.enableYandexStationCast') {
            if (value) {
                yandexStationRuntime.start();
            } else {
                void yandexStationRuntime.stop();
            }
        }
        if (key === WASAPI_EXCLUSIVE_OUTPUT_ENABLED_SETTING_KEY && value !== true) {
            nativeAudioOutput.stopWasapiExclusiveOutput('output disabled');
        }
        if (key === YASP_CHUNK_TAP_ENABLED_SETTING_KEY && value !== true) {
            nativeAudioOutput.stopWasapiExclusiveOutput('YASP tap disabled');
        }
        if (key === WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY) {
            nativeAudioOutput.stopWasapiExclusiveOutput('device changed');
        }
        if (
            key === WASAPI_EXCLUSIVE_OUTPUT_ENABLED_SETTING_KEY ||
            key === YASP_CHUNK_TAP_ENABLED_SETTING_KEY ||
            key === WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY
        ) {
            nativeAudioOutput.refreshWasapiExclusiveDefaultDeviceMonitor();
        }
        if (key === WASAPI_EXCLUSIVE_FORCE_FULL_VOLUME_SETTING_KEY) {
            nativeAudioOutput.refreshWasapiExclusiveVolumePolicy();
        }
        MiniPlayer.updateSettingsState(store_js_1.getModSettings());
        const featurePatch = buildFeaturesPatch(key, value);
        if (featurePatch) {
            void sendFeaturesMetric(featurePatch);
        }
        return value;
    };
    electron_1.ipcMain.handle(events_js_1.Events.NATIVE_STORE_GET, (event, key) => {
        eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_STORE_GET, key);
        return store_js_1.get(key);
    });
    electron_1.ipcMain.handle(events_js_1.Events.NATIVE_STORE_SET, (event, key, value) => {
        eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_STORE_SET, key, value);
        return setNativeStoreValue(key, value);
    });
    electron_1.ipcMain.on(events_js_1.Events.NATIVE_STORE_SET, (event, key, value) => {
        eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_STORE_SET, key, value);
        setNativeStoreValue(key, value);
    });
    electron_1.ipcMain.on(events_js_1.Events.EXPERIMENTS_METRIC, (event, experiments) => {
        eventsLogger.info(`Event received`, events_js_1.Events.EXPERIMENTS_METRIC);
        void sendExperimentsMetric(experiments);
    });
    electron_1.ipcMain.on(events_js_1.Events.NATIVE_AUDIO_OUTPUT_CONFIGURE_YASP_SOURCE, (event, payload) => {
        nativeAudioOutput.configureYaspSource(payload);
    });
    electron_1.ipcMain.on(events_js_1.Events.NATIVE_AUDIO_OUTPUT_YASP_CHUNK, (event, payload, chunk) => {
        nativeAudioOutput.receiveYaspChunk(payload, chunk);
    });
    electron_1.ipcMain.on(events_js_1.Events.NATIVE_AUDIO_OUTPUT_RESET_YASP_SOURCE, (event, payload) => {
        nativeAudioOutput.resetYaspSource(payload);
    });
    electron_1.ipcMain.on(events_js_1.Events.NATIVE_AUDIO_OUTPUT_WASAPI_AUDIO_PARKING_STATE, (event, payload) => {
        nativeAudioOutput.updateWasapiExclusiveAudioParkingState(payload);
    });
    electron_1.ipcMain.on(events_js_1.Events.NATIVE_AUDIO_OUTPUT_WASAPI_PLAYER_SEEK, (event, payload) => {
        eventsLogger.info('Event received', events_js_1.Events.NATIVE_AUDIO_OUTPUT_WASAPI_PLAYER_SEEK, payload);
        nativeAudioOutput.seekWasapiExclusiveOutput(payload);
    });
    electron_1.ipcMain.handle(events_js_1.Events.NATIVE_AUDIO_OUTPUT_GET_YASP_AUDIO_FORMAT, () => {
        eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_AUDIO_OUTPUT_GET_YASP_AUDIO_FORMAT);
        return nativeAudioOutput.getYaspAudioFormat();
    });
    electron_1.ipcMain.handle(events_js_1.Events.NATIVE_AUDIO_OUTPUT_GET_WASAPI_EXCLUSIVE_STATUS, () => {
        eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_AUDIO_OUTPUT_GET_WASAPI_EXCLUSIVE_STATUS);
        return {
            ...nativeAudioOutput.getWasapiExclusiveStatus(),
            selectedDeviceId: store_js_1.get(WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY) ?? null,
        };
    });
    electron_1.ipcMain.handle(events_js_1.Events.NATIVE_AUDIO_OUTPUT_LIST_WASAPI_EXCLUSIVE_DEVICES, (event, options = {}) => {
        eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_AUDIO_OUTPUT_LIST_WASAPI_EXCLUSIVE_DEVICES);
        return nativeAudioOutput.listWasapiExclusiveDevices({
            includeDisabled: Boolean(options?.includeDisabled),
            includeFormats: options?.includeFormats !== false,
        });
    });
    electron_1.ipcMain.handle(events_js_1.Events.NATIVE_AUDIO_OUTPUT_GET_WASAPI_EXCLUSIVE_DEVICE, () => {
        eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_AUDIO_OUTPUT_GET_WASAPI_EXCLUSIVE_DEVICE);
        return store_js_1.get(WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY) ?? null;
    });
    electron_1.ipcMain.handle(events_js_1.Events.NATIVE_AUDIO_OUTPUT_SELECT_WASAPI_EXCLUSIVE_DEVICE, (event, deviceId) => {
        eventsLogger.info(`Event received`, events_js_1.Events.NATIVE_AUDIO_OUTPUT_SELECT_WASAPI_EXCLUSIVE_DEVICE);
        const normalizedDeviceId = typeof deviceId === 'string' && deviceId.trim() ? deviceId.trim() : null;

        if (normalizedDeviceId) {
            const device = nativeAudioOutput.listWasapiExclusiveDevices({ includeDisabled: true, includeFormats: false }).find((item) => item.id === normalizedDeviceId);
            if (!device) {
                throw new Error('WASAPI exclusive device not found');
            }
            if (device.state !== 'active') {
                throw new Error(`WASAPI exclusive device is not active: ${device.state}`);
            }
        }

        store_js_1.set(WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY, normalizedDeviceId);
        nativeAudioOutput.stopWasapiExclusiveOutput('device changed');
        nativeAudioOutput.refreshWasapiExclusiveDefaultDeviceMonitor();
        return normalizedDeviceId;
    });
    electron_1.ipcMain.on(events_js_1.Events.GLOBAL_SHORTCUTS_RECORDING_STATE, (event, value) => {
        eventsLogger.info(`Event received`, events_js_1.Events.GLOBAL_SHORTCUTS_RECORDING_STATE, value);
        isGlobalShortcutsRecordingActive = Boolean(value);
        updateGlobalShortcuts();
    });

    electron_1.ipcMain.on(events_js_1.Events.TOGGLE_MINIPLAYER, (event) => {
        eventsLogger.info(`Event received`, events_js_1.Events.TOGGLE_MINIPLAYER);
        MiniPlayer.toggle();
    });

    electron_1.ipcMain.on(events_js_1.Events.SAVE_FILE_TO_LOCAL_DISK, async (event, defaultPath, buffer) => {
        eventsLogger.info('Event handle', events_js_1.Events.SAVE_FILE_TO_LOCAL_DISK);
        handleSaveToLocalDisk(defaultPath, buffer);
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
const sendProgressBarChange = (window, elementType, progress, statusLabel, operationNonce) => {
    window.webContents.send(events_js_1.Events.PROGRESS_BAR_CHANGE, elementType, progress, Date.now(), statusLabel, operationNonce);
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
const sendBasicToastCreate = (window = mainWindow, toastID, message, dismissable, actionEvent, actionPayload) => {
    const operationNonce = `${Date.now()}:${++toastOperationNonce}`;
    const resolvedActionPayload = typeof actionPayload === 'function' ? actionPayload(operationNonce) : actionPayload;
    window.webContents.send(events_js_1.Events.BASIC_TOAST_CREATE, toastID, message, dismissable, operationNonce, actionEvent, resolvedActionPayload);
    eventsLogger.info('Event sent', events_js_1.Events.BASIC_TOAST_CREATE, toastID, message);
    return operationNonce;
};
exports.sendBasicToastCreate = sendBasicToastCreate;
const sendBasicToastDismiss = (window = mainWindow, toastID, operationNonce) => {
    window.webContents.send(events_js_1.Events.BASIC_TOAST_DISMISS, toastID, Date.now(), operationNonce);
    eventsLogger.info('Event sent', events_js_1.Events.BASIC_TOAST_DISMISS, toastID);
};
exports.sendBasicToastDismiss = sendBasicToastDismiss;
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
const sendOpenModSettingsDeeplink = (window, pathname) => {
    window.webContents.send(events_js_1.Events.PULSESYNC_OPEN_SETTINGS_DEEPLINK, pathname);
    eventsLogger.info('Event sent', events_js_1.Events.PULSESYNC_OPEN_SETTINGS_DEEPLINK);
};
exports.sendOpenModSettingsDeeplink = sendOpenModSettingsDeeplink;
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

electron_1.ipcMain.handle(events_js_1.Events.PULSESYNC_SETTINGS_SNAPSHOT, () => {
    try {
        const mgr = pulseSyncManager_js_1 || (mainWindow ? (0, getPulseSyncManager)(mainWindow) : null);
        return mgr?.getAddonSettingsSnapshot?.() ?? {};
    } catch (err) {
        eventsLogger.error('PULSESYNC_SETTINGS_SNAPSHOT handler failed:', err);
        return {};
    }
});

electron_1.ipcMain.handle(events_js_1.Events.PULSESYNC_LEGACY_ASSETS_SNAPSHOT, () => {
    try {
        const mgr = pulseSyncManager_js_1 || (mainWindow ? (0, getPulseSyncManager)(mainWindow) : null);
        return mgr?.getLegacyAssetsSnapshot?.() ?? { runtime: 'legacy', revision: 0, styles: [], scripts: [] };
    } catch (err) {
        eventsLogger.error('PULSESYNC_LEGACY_ASSETS_SNAPSHOT handler failed:', err);
        return { runtime: 'legacy', revision: 0, styles: [], scripts: [] };
    }
});

electron_1.ipcMain.handle(events_js_1.Events.PULSESYNC_WEBHOST_ADDONS_SNAPSHOT, () => {
    try {
        const mgr = pulseSyncManager_js_1 || (mainWindow ? (0, getPulseSyncManager)(mainWindow) : null);
        return mgr?.getWebHostAddonsSnapshot?.() ?? { runtime: 'isolated', hash: '', addons: [] };
    } catch (err) {
        eventsLogger.error('PULSESYNC_WEBHOST_ADDONS_SNAPSHOT handler failed:', err);
        return { runtime: 'isolated', hash: '', addons: [] };
    }
});

electron_1.ipcMain.handle(events_js_1.Events.PULSESYNC_ISOLATED_ADDON_EXECUTE, async (event, payload) => {
    if (!mainWindow || event.sender !== mainWindow.webContents) throw new Error('PulseSync isolated addon rejected an unknown sender');

    const addon = payload?.addon;
    const addonId = typeof addon?.id === 'string' ? addon.id.trim() : '';
    const code = typeof payload?.code === 'string' ? payload.code : '';
    const channelToken = typeof payload?.channelToken === 'string' ? payload.channelToken : '';
    const apiMethods = Array.isArray(payload?.apiMethods) ? payload.apiMethods.filter((method) => typeof method === 'string').slice(0, 64) : [];

    if (!addonId || addonId.length > 160 || addonId.includes('\0')) throw new Error('PulseSync isolated addon id is invalid');
    if (!code.trim() || code.length > 10_000_000) throw new Error(`PulseSync isolated addon ${addonId} has invalid code`);
    if (!/^[a-f0-9-]{36}$/i.test(channelToken)) throw new Error(`PulseSync isolated addon ${addonId} has an invalid channel token`);

    const worldId = getIsolatedAddonWorldId(event.sender, addonId);
    const init = {
        addon: {
            id: addonId,
            name: typeof addon.name === 'string' ? addon.name : addonId,
            directoryName: typeof addon.directoryName === 'string' ? addon.directoryName : addonId,
            ...(typeof addon.version === 'string' ? { version: addon.version } : {}),
        },
        apiMethods,
        initialSettings: payload?.initialSettings ?? {},
        channelToken,
    };
    const initCode = `Object.defineProperty(globalThis, '__PULSESYNC_ISOLATED_INIT__', { value: ${JSON.stringify(init)}, configurable: true });\nnull;`;
    const runtimeCode = `${getIsolatedAddonRuntimeSource()}\n;null;`;
    const addonCode = `${code}\n;null;`;
    const sourceBase = `pulsesync-isolated://${encodeURIComponent(addonId)}`;

    await event.sender.executeJavaScriptInIsolatedWorld(worldId, [
        { code: initCode, url: `${sourceBase}/bootstrap.js` },
        { code: runtimeCode, url: `${sourceBase}/runtime.js` },
        { code: addonCode, url: `${sourceBase}/addon.js` },
    ]);

    return { runtime: 'isolated', worldId };
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
