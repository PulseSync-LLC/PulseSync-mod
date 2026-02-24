'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.createWindow = void 0;
const node_path_1 = __importDefault(require('node:path'));
const electron_1 = require('electron');
const config_js_1 = require('../../config.js');
const platform_js_1 = require('../../types/platform.js');
const deviceInfo_js_1 = require('../deviceInfo.js');
const store_js_1 = require('../store.js');
const toggleWindowVisibility_js_1 = require('./toggleWindowVisibility.js');

const minBounds = {
    minWidth: 768,
    minHeight: 650,
};

const dimensions = (store_js_1.getModSettings()?.window?.saveWindowDimensionsOnRestart ?? true) ? store_js_1.getWindowDimensions() : undefined;
let position = store_js_1.getModSettings()?.window?.saveWindowPositionOnRestart ? store_js_1.getWindowPosition() : undefined;
const isWithinDisplayBounds = (pos, display) => {
    const area = display.workArea;
    return pos.x >= area.x && pos.y >= area.y && pos.x < area.x + area.width && pos.y < area.y + area.height;
};

const createWindow = async () => {
    const withFrame = [platform_js_1.Platform.WINDOWS, platform_js_1.Platform.MACOS].includes(deviceInfo_js_1.devicePlatform);
    let scaleFactor = 1;
    if (position) {
        const primaryDisplay = electron_1.screen.getPrimaryDisplay(),
            nearestDisplay = electron_1.screen.getDisplayNearestPoint(position);
        scaleFactor = 1 / (nearestDisplay?.scaleFactor ?? primaryDisplay.scaleFactor);
        if (!isWithinDisplayBounds(position, nearestDisplay)) {
            position = undefined;
        }
        const usedDisplay = nearestDisplay ?? primaryDisplay;
        store_js_1.setWindowMonitor(usedDisplay.id);
    } else {
        const primaryDisplay = electron_1.screen.getPrimaryDisplay();
        store_js_1.setWindowMonitor(primaryDisplay.id);
    }
    const window = new electron_1.BrowserWindow({
        show: false,
        frame: withFrame,
        titleBarStyle: 'hidden',
        backgroundColor: '#FFF',
        trafficLightPosition: {
            x: 16,
            y: 10,
        },
        ...minBounds,
        width: (dimensions?.width ?? 1280) * scaleFactor,
        height: (dimensions?.height ?? 800) * scaleFactor,
        ...(position ? { x: position.x, y: position.y } : { center: true }),
        webPreferences: {
            devTools: config_js_1.config.app.enableDevTools || store_js_1.getDevMode(),
            webSecurity: config_js_1.config.app.enableWebSecurity,
            nodeIntegrationInWorker: true,
            nodeIntegration: false,
            contextIsolation: true,
            autoplayPolicy: 'no-user-gesture-required',
            preload: node_path_1.default.join(__dirname, '..', 'preload.js'),
        },
    });
    window.isMainWindow = true;
    window.once('ready-to-show', () => {
        const shouldShow = !(store_js_1.getModSettings()?.window?.minimizedStart ?? false);

        if ((dimensions?.maximized ?? false) && shouldShow) window.maximize();
        window.setSize(dimensions?.width ?? 1280, dimensions?.height ?? 800);

        (0, toggleWindowVisibility_js_1.toggleWindowVisibility)(window, shouldShow);
    });
    return window;
};
exports.createWindow = createWindow;
