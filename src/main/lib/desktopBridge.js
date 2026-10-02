'use strict';
const electron = require('electron');
const { IpcChannel, RendererTrustProfile } = require('../types/desktop.js');
const { classifyRendererUrl } = require('./desktopPolicy.js');
const isRecord = (value) => {
    return typeof value === 'object' && value !== null;
};
const isDesktopRuntimeInfo = (value) => {
    if (!isRecord(value) || !isRecord(value.deviceInfo)) {
        return false;
    }
    const { deviceInfo } = value;
    return (
        typeof value.version === 'string' &&
        typeof value.branch === 'string' &&
        (value.platform === 'darwin' || value.platform === 'win32' || value.platform === 'linux') &&
        typeof value.deviceHostname === 'string' &&
        typeof deviceInfo.manufacturer === 'string' &&
        typeof deviceInfo.model === 'string' &&
        typeof deviceInfo.uuid === 'string' &&
        typeof deviceInfo.os === 'string' &&
        typeof deviceInfo.os_version === 'string' &&
        typeof deviceInfo.device_id === 'string' &&
        typeof deviceInfo.clid === 'number'
    );
};
const subscribe = (channel, listener) => {
    const wrappedListener = (_event, ...args) => {
        listener(...args);
    };
    electron.ipcRenderer.on(channel, wrappedListener);
    return () => {
        electron.ipcRenderer.removeListener(channel, wrappedListener);
    };
};
const createMusicDesktopBridge = (runtime) => ({
    runtime,
    window: {
        minimize: () => electron.ipcRenderer.send(IpcChannel.WINDOW_MINIMIZE),
        maximize: () => electron.ipcRenderer.send(IpcChannel.WINDOW_MAXIMIZE),
        close: () => electron.ipcRenderer.send(IpcChannel.WINDOW_CLOSE),
    },
    app: {
        ready: (language) => electron.ipcRenderer.send(IpcChannel.APPLICATION_READY, language),
        setTheme: (theme) => electron.ipcRenderer.send(IpcChannel.APPLICATION_THEME, theme),
        installUpdate: () => electron.ipcRenderer.send(IpcChannel.INSTALL_UPDATE),
        onUpdateAvailable: (listener) => subscribe(IpcChannel.UPDATE_AVAILABLE, listener),
        onRefreshData: (listener) => subscribe(IpcChannel.REFRESH_APPLICATION_DATA, listener),
        onFirstLaunch: (listener) => subscribe(IpcChannel.FIRST_LAUNCH, listener),
        onProbabilityBucket: (listener) => subscribe(IpcChannel.PROBABILITY_BUCKET, listener),
        onLoadReleaseNotes: (listener) => subscribe(IpcChannel.LOAD_RELEASE_NOTES, listener),
    },
    authorization: {
        getPassportLogin: () => electron.ipcRenderer.invoke(IpcChannel.GET_PASSPORT_LOGIN),
        getYandexUid: () => electron.ipcRenderer.invoke(IpcChannel.GET_YANDEX_UID),
        reportDiagnostic: (payload) => electron.ipcRenderer.send(IpcChannel.AUTH_DIAGNOSTIC, payload),
    },
    player: {
        reportState: (state) => electron.ipcRenderer.send(IpcChannel.PLAYER_STATE, state),
        onAction: (listener) => subscribe(IpcChannel.PLAYER_ACTION, listener),
    },
    navigation: {
        onOpenDeeplink: (listener) => subscribe(IpcChannel.OPEN_DEEPLINK, listener),
    },
    offline: {
        notifyTracksAvailabilityUpdated: () => electron.ipcRenderer.send(IpcChannel.TRACKS_AVAILABILITY_UPDATED),
        notifyRepositoryMetaUpdated: () => electron.ipcRenderer.send(IpcChannel.REPOSITORY_META_UPDATED),
        onRefreshTracksAvailability: (listener) => subscribe(IpcChannel.REFRESH_TRACKS_AVAILABILITY, listener),
        onRefreshRepositoryMeta: (listener) => subscribe(IpcChannel.REFRESH_REPOSITORY_META, listener),
    },
    files: {
        savePng: (defaultPath, buffer) => electron.ipcRenderer.send(IpcChannel.SAVE_PNG_IMAGE_TO_LOCAL_DISK, { defaultPath, buffer }),
    },
});

const exposeDesktopBridge = () => {
    if (window !== window.top) return false;
    const profile = classifyRendererUrl(window.location.href);
    if (profile === RendererTrustProfile.AUTH) {
        electron.contextBridge.exposeInMainWorld('musicDesktopCommon', { window: { close: () => electron.ipcRenderer.send(IpcChannel.COMMON_WINDOW_CLOSE) } });
    }
    if (profile !== RendererTrustProfile.APPLICATION) return false;
    const runtime = electron.ipcRenderer.sendSync(IpcChannel.BOOTSTRAP);
    if (!isDesktopRuntimeInfo(runtime)) return false;
    electron.contextBridge.exposeInMainWorld('musicDesktop', createMusicDesktopBridge(runtime));
    return true;
};
module.exports = { exposeDesktopBridge, isDesktopRuntimeInfo };
