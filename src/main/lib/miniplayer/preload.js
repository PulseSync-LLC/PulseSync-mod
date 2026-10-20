const electron = require('electron');

const subscribe = (channel, listener) => {
    const wrappedListener = (_event, ...args) => listener(...args);
    electron.ipcRenderer.on(channel, wrappedListener);
    return () => electron.ipcRenderer.removeListener(channel, wrappedListener);
};

electron.contextBridge.exposeInMainWorld('PLATFORM', process.platform);
electron.contextBridge.exposeInMainWorld('musicDesktop', {
    pulsesync: {
        miniplayer: {
            ready: () => electron.ipcRenderer.send('MINIPLAYER_READY'),
            togglePin: () => electron.ipcRenderer.send('MINIPLAYER_TOGGLE_PIN'),
            playerAction: (action, value) => electron.ipcRenderer.send('MINIPLAYER_PLAYER_ACTION', action, value),
            onPlayerState: (listener) => subscribe('MINIPLAYER_PLAYER_STATE', listener),
            onSettingsState: (listener) => subscribe('MINIPLAYER_SETTINGS_STATE', listener),
        },
    },
});
