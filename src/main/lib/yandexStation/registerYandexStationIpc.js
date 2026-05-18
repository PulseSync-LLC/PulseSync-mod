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

    return runtime;
}

module.exports = {
    registerYandexStationIpc,
};
