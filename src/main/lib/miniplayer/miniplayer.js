const electron = require('electron');
const path = require('path');
const fs = require('fs');
const store_js_1 = require('../store.js');
const pulsesyncDevConfig_js_1 = require('../pulsesyncDevConfig.js');
const hex2hsl = require('./hex2hsl.js');
const isMacOS = process.platform === 'darwin';

class MiniPlayer {
    constructor() {
        this.window = null;
        this.onPlayerActionCallback = null;
        this.lastPlayerState = null;
        this.lastSettingsState = null;
        this.appliedMacPinState = null;
        this.handleMiniPlayerEvents();
    }

    destroy() {
        if (this.window && !this.window.isDestroyed()) {
            this.window.close();
        } else {
            this.window = null;
        }
    }

    handleMiniPlayerEvents() {
        const isMiniPlayerEvent = (event) => this.window && !this.window.isDestroyed() && event.sender === this.window.webContents;

        electron.ipcMain.on('MINIPLAYER_TOGGLE_PIN', (event) => {
            if (!isMiniPlayerEvent(event)) return;
            this.togglePinned();
        });
        electron.ipcMain.on('MINIPLAYER_PLAYER_ACTION', (event, action, value) => {
            if (!isMiniPlayerEvent(event)) return;
            this.onPlayerActionCallback?.(action, value);
        });
        electron.ipcMain.on('MINIPLAYER_READY', (event) => {
            if (!isMiniPlayerEvent(event)) return;
            event.sender.send('MINIPLAYER_PLAYER_STATE', this.lastPlayerState);
            event.sender.send('MINIPLAYER_SETTINGS_STATE', this.lastSettingsState);
        });
    }

    createMiniPlayer() {
        if (this.window && !this.window.isDestroyed()) {
            if (this.window.isMinimized()) this.window.restore();
            this.window.show();
            this.window.focus();
            return this.window;
        }

        const dimensions = (this.lastSettingsState?.miniplayer?.saveDimensions ?? true) ? this.lastSettingsState?.miniplayer?.window : undefined;
        let position = this.lastSettingsState?.miniplayer?.savePosition ? this.lastSettingsState?.miniplayer?.window : undefined;

        const isWithinDisplayBounds = (pos, display) => {
            const area = display.workArea;
            return pos.x >= area.x && pos.y >= area.y && pos.x < area.x + area.width && pos.y < area.y + area.height;
        };

        let scaleFactor = 1;
        if (Number.isFinite(position?.x) && Number.isFinite(position?.y)) {
            const primaryDisplay = electron.screen.getPrimaryDisplay(),
                nearestDisplay = electron.screen.getDisplayNearestPoint(position) ?? primaryDisplay;

            if (!isMacOS) scaleFactor = 1 / (nearestDisplay.scaleFactor ?? primaryDisplay.scaleFactor);

            if (!isWithinDisplayBounds(position, nearestDisplay)) {
                position = undefined;
            }
        } else {
            position = undefined;
        }

        const allowedTrackColors = !this.lastSettingsState?.playerBarEnhancement?.disablePerTrackColors;
        const trackColor = this.lastPlayerState?.track?.derivedColors?.average;

        const backgroundColor = trackColor && allowedTrackColors ? hex2hsl(trackColor, 20).css : '#141414';

        const miniPlayerWindow = new electron.BrowserWindow({
            width: (dimensions?.width ?? 380) * scaleFactor,
            height: (dimensions?.height ?? 590) * scaleFactor,
            minWidth: 275,
            minHeight: 200,
            ...(position ? { x: position.x, y: position.y } : { center: true }),
            backgroundColor: backgroundColor,
            frame: isMacOS,
            resizable: true,
            minimizable: false,
            ...(isMacOS
                ? {
                      show: false,
                      titleBarStyle: 'hiddenInset',
                      trafficLightPosition: { x: 12, y: 10 },
                      maximizable: false,
                      fullscreenable: false,
                  }
                : {}),
            webPreferences: {
                devTools: true,
                webSecurity: true,
                nodeIntegration: false,
                contextIsolation: true,
                preload: path.join(__dirname, 'preload.js'),
            },
        });
        this.window = miniPlayerWindow;
        this.appliedMacPinState = null;

        if (isMacOS) miniPlayerWindow.setWindowButtonVisibility(true);

        let resizeTimer = null;
        let moveTimer = null;
        const saveWindowSize = () => {
            if (miniPlayerWindow.isDestroyed()) return;
            const bounds = isMacOS ? miniPlayerWindow.getNormalBounds() : null;
            const size = bounds ? [bounds.width, bounds.height] : miniPlayerWindow.getSize();
            store_js_1.set('modSettings.miniplayer.window.width', size[0]);
            store_js_1.set('modSettings.miniplayer.window.height', size[1]);
        };
        const saveWindowPosition = () => {
            if (miniPlayerWindow.isDestroyed()) return;
            const bounds = isMacOS ? miniPlayerWindow.getNormalBounds() : null;
            const position = bounds ? [bounds.x, bounds.y] : miniPlayerWindow.getPosition();
            store_js_1.set('modSettings.miniplayer.window.x', position[0]);
            store_js_1.set('modSettings.miniplayer.window.y', position[1]);
        };

        if (isMacOS) {
            miniPlayerWindow.on('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(saveWindowSize, 150);
            });
            miniPlayerWindow.on('move', () => {
                clearTimeout(moveTimer);
                moveTimer = setTimeout(saveWindowPosition, 150);
            });
            miniPlayerWindow.on('close', () => {
                clearTimeout(resizeTimer);
                clearTimeout(moveTimer);
                saveWindowSize();
                saveWindowPosition();
            });
        } else {
            miniPlayerWindow.on('resized', saveWindowSize);
            miniPlayerWindow.on('moved', saveWindowPosition);
        }

        miniPlayerWindow.once('ready-to-show', () => {
            if (miniPlayerWindow.isDestroyed() || this.window !== miniPlayerWindow) return;
            if (isMacOS) {
                this.applySettings();
                miniPlayerWindow.show();
            } else {
                miniPlayerWindow.show();
                this.applySettings();
            }
        });

        miniPlayerWindow.on('closed', () => {
            clearTimeout(resizeTimer);
            clearTimeout(moveTimer);
            if (this.window === miniPlayerWindow) {
                this.window = null;
                this.appliedMacPinState = null;
            }
        });

        const devUrl = pulsesyncDevConfig_js_1.pulseSyncDevConfig.miniPlayerUrl;
        const builtIndex = path.join(__dirname, 'renderer', 'index.html');

        if (devUrl) {
            miniPlayerWindow.loadURL(devUrl);
        } else if (fs.existsSync(builtIndex)) {
            miniPlayerWindow.loadFile(builtIndex);
        }

        return miniPlayerWindow;
    }

    applySettings() {
        if (!this.window || this.window.isDestroyed() || !this.lastSettingsState) return;

        const alwaysOnTop = this.lastSettingsState.miniplayer?.window?.alwaysOnTop ?? true;
        if (isMacOS) {
            if (this.appliedMacPinState !== alwaysOnTop) {
                this.appliedMacPinState = alwaysOnTop;
                this.window.setAlwaysOnTop(alwaysOnTop, 'floating');
                this.window.setVisibleOnAllWorkspaces(alwaysOnTop, { visibleOnFullScreen: alwaysOnTop });
            }
            return;
        }

        this.window.setAlwaysOnTop(alwaysOnTop, 'normal');
        this.window.setSkipTaskbar(alwaysOnTop ? (this.lastSettingsState.miniplayer?.skipTaskbar ?? false) : false, 'normal');
    }

    updatePlayerState(data) {
        this.lastPlayerState = data;
        this.lastPlayerState.progress = data.progress.position;
        this.lastPlayerState.timestamp = Date.now();
        if (this.window && !this.window.isDestroyed()) {
            this.window.webContents.send('MINIPLAYER_PLAYER_STATE', this.lastPlayerState);
        }
    }

    updateSettingsState(data) {
        if (this.window && !this.window.isDestroyed()) {
            this.window.webContents.send('MINIPLAYER_SETTINGS_STATE', data);
        }
        this.lastSettingsState = data;
        this.applySettings();
    }

    onPlayerAction(callback) {
        this.onPlayerActionCallback = callback;
    }

    toggle() {
        if (this.window && !this.window.isDestroyed()) {
            if (isMacOS && this.window.isMinimized()) {
                this.createMiniPlayer();
                return;
            }
            this.destroy();
        } else {
            this.createMiniPlayer();
        }
    }

    togglePinned() {
        if (this.lastSettingsState?.miniplayer?.window?.alwaysOnTop ?? true) {
            store_js_1.set('modSettings.miniplayer.window.alwaysOnTop', false);
        } else {
            store_js_1.set('modSettings.miniplayer.window.alwaysOnTop', true);
        }
    }
}

exports.MiniPlayer = MiniPlayer;
exports.getMiniPlayer = (() => {
    let miniPlayer;
    return () => {
        if (!miniPlayer) {
            miniPlayer = new MiniPlayer();
        }
        return miniPlayer;
    };
})();
