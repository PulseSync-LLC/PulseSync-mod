const { Events } = require('../../types/events.js');
const { getYandexStationRuntime } = require('./YandexStationRuntime.js');

/**
 * Register read-only main-process IPC handlers for cached Yandex Station startup data.
 *
 * Renderer example:
 * const accountSpeakers = await window.electron.ipcRenderer.invoke(Events.GET_ACCOUNT_SPEAKERS);
 * const localSpeakers = await window.electron.ipcRenderer.invoke(Events.GET_LOCAL_SPEAKERS);
 */
function registerYandexStationIpc(ipcMain, options = {}) {
    const runtime = options.runtime ?? getYandexStationRuntime(options.runtimeOptions);

    ipcMain.handle(Events.GET_ACCOUNT_SPEAKERS, () => {
        return runtime.getAccountSpeakersCache();
    });

    ipcMain.handle(Events.GET_LOCAL_SPEAKERS, () => {
        return runtime.getLocalSpeakersCache();
    });

    ipcMain.handle(Events.YANDEX_STATION_SELECT_SPEAKER, async (event, iotDeviceId) => {
        return await runtime.selectSpeaker(iotDeviceId);
    });

    ipcMain.handle(Events.YANDEX_STATION_CLEAR_SPEAKER, () => {
        return runtime.clearSpeaker();
    });

    ipcMain.handle(Events.YANDEX_STATION_GET_ACTIVE_SPEAKER, () => {
        return runtime.getActiveSpeaker();
    });

    ipcMain.handle(Events.YANDEX_STATION_CONTROL, async (event, action, payload = {}) => {
        return await runtime.sendMediaCommand(action, payload);
    });

    return runtime;
}

module.exports = {
    registerYandexStationIpc,
};
