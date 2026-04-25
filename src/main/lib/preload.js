'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const electron_1 = require('electron');
const config_js_1 = require('../config.js');
const getInitialTheme_js_1 = require('./getInitialTheme.js');
const deviceInfo_js_1 = require('./deviceInfo.js');
const theme_js_1 = require('../types/theme.js');
const playerActions_js_1 = require('../types/playerActions.js');
const hostnamePatterns_js_1 = require('../constants/hostnamePatterns.js');
const deviceInfo = (0, deviceInfo_js_1.getDeviceInfo)();
const store_js_1 = require('./store.js');
const events_js_1 = require('../types/events.js');
const PULSESYNC_TITLEBAR_STYLE_ID = 'pulsesync-non-premium-titlebar-guard';
const PULSESYNC_TITLEBAR_TEXT_CLASS = 'TitleBar_pulseText__FhYv';
const PULSESYNC_TITLEBAR_TEXT_SELECTOR = '[class*="TitleBar_root"] > span[class*="TitleBar_pulseText"], [class*="TitleBar_root"] > .TitleBar_pulseText__FhYv, [class*="TitleBar_root"] > [class*="TitleBar_pulseText"]';
const PULSESYNC_FOREIGN_TITLEBAR_SELECTOR =
    '[class*="TitleBar_root"] > [id*="custom-titlebar"], [class*="TitleBar_root"] > [class*="custom-titlebar"], [class*="TitleBar_root"] > [data-titlebar-replacement]';
let cachedTitlebarVisibilitySettings = null;
const getIsPremiumUserSync = () => {
    try {
        return Boolean(electron_1.ipcRenderer.sendSync('isPremiumUserSync'));
    } catch (error) {
        return false;
    }
};
const getTitlebarVisibilitySettings = () => {
    if (cachedTitlebarVisibilitySettings) {
        return cachedTitlebarVisibilitySettings;
    }

    const hidePulseSyncVersion = Boolean(store_js_1.getModSettings()?.window?.hidePulseSyncVersionInTitleBar);
    const isPremium = getIsPremiumUserSync();
    cachedTitlebarVisibilitySettings = {
        hidePulseSyncVersion,
        isPremium,
        shouldHidePulseSyncVersion: hidePulseSyncVersion && isPremium,
    };
    return cachedTitlebarVisibilitySettings;
};
const resetTitlebarVisibilitySettings = () => {
    cachedTitlebarVisibilitySettings = null;
};
const shouldHidePulseSyncVersionInTitleBar = () => {
    try {
        return getTitlebarVisibilitySettings().shouldHidePulseSyncVersion;
    } catch (error) {
        return false;
    }
};
const cleanupNonPremiumTitlebarBranding = () => {
    window.document.getElementById(PULSESYNC_TITLEBAR_STYLE_ID)?.remove();
    for (const element of window.document.querySelectorAll('[data-pulsesync-titlebar-branding-owned="true"]')) {
        element.remove();
    }
};
const ensureNonPremiumTitlebarBranding = () => {
    const titlebarVisibilitySettings = getTitlebarVisibilitySettings();
    if (titlebarVisibilitySettings.shouldHidePulseSyncVersion || titlebarVisibilitySettings.isPremium) {
        cleanupNonPremiumTitlebarBranding();
        return;
    }

    const titleBar = window.document.querySelector('[class*="TitleBar_root"]');
    if (!titleBar) return;

    const brandingText = `PulseSync ${config_js_1.config.modification.version}`;
    const head = window.document.head || window.document.documentElement;
    if (head) {
        let styleElement = window.document.getElementById(PULSESYNC_TITLEBAR_STYLE_ID);
        const guardCss = `
            ${PULSESYNC_TITLEBAR_TEXT_SELECTOR} {
                display: inline !important;
                visibility: visible !important;
                opacity: 1 !important;
                width: auto !important;
                height: auto !important;
                max-width: none !important;
                min-width: 0 !important;
                overflow: visible !important;
                pointer-events: none !important;
                position: relative !important;
            }

            ${PULSESYNC_FOREIGN_TITLEBAR_SELECTOR} {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                width: 0 !important;
                height: 0 !important;
                overflow: hidden !important;
            }
        `;

        if (!styleElement) {
            styleElement = window.document.createElement('style');
            styleElement.id = PULSESYNC_TITLEBAR_STYLE_ID;
            head.appendChild(styleElement);
        }
        if (styleElement.textContent !== guardCss) {
            styleElement.textContent = guardCss;
        }
    }

    let pulseText = titleBar.querySelector('span[class*="TitleBar_pulseText"], .TitleBar_pulseText__FhYv, [class*="TitleBar_pulseText"]');
    if (!pulseText) {
        pulseText = window.document.createElement('span');
        pulseText.className = PULSESYNC_TITLEBAR_TEXT_CLASS;
        pulseText.setAttribute('data-pulsesync-titlebar-branding-owned', 'true');
        titleBar.insertBefore(pulseText, titleBar.firstChild || null);
    }

    if (pulseText.textContent !== brandingText) {
        pulseText.textContent = brandingText;
    }

    if (pulseText.getAttribute('data-pulsesync-titlebar-branding') !== 'true') {
        pulseText.setAttribute('data-pulsesync-titlebar-branding', 'true');
    }

    const setImportantStyle = (element, property, value) => {
        if (element.style.getPropertyValue(property) === value && element.style.getPropertyPriority(property) === 'important') {
            return;
        }
        element.style.setProperty(property, value, 'important');
    };

    setImportantStyle(pulseText, 'display', 'inline');
    setImportantStyle(pulseText, 'visibility', 'visible');
    setImportantStyle(pulseText, 'opacity', '1');
    setImportantStyle(pulseText, 'width', 'auto');
    setImportantStyle(pulseText, 'height', 'auto');
    setImportantStyle(pulseText, 'overflow', 'visible');

    for (const element of titleBar.querySelectorAll('[id*="custom-titlebar"], [class*="custom-titlebar"], [data-titlebar-replacement]')) {
        if (element === pulseText) continue;
        element.remove();
    }
};
const installNonPremiumTitlebarBrandingGuard = () => {
    const titlebarVisibilitySettings = getTitlebarVisibilitySettings();
    if (titlebarVisibilitySettings.shouldHidePulseSyncVersion) return;
    if (titlebarVisibilitySettings.isPremium) return;

    let scheduled = false;
    let applyingBranding = false;
    let titlebarObserver = null;
    let titlebarObserverTarget = null;
    const runGuard = () => {
        scheduled = false;
        if (applyingBranding) {
            return;
        }

        applyingBranding = true;
        try {
            ensureNonPremiumTitlebarBranding();
            observeTitlebar();
        } finally {
            applyingBranding = false;
        }
    };
    const scheduleGuard = () => {
        if (scheduled) return;
        scheduled = true;
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(runGuard);
            return;
        }
        window.setTimeout(runGuard, 16);
    };
    const observeTitlebar = () => {
        if (!window.MutationObserver) return;

        const titleBar = window.document.querySelector('[class*="TitleBar_root"]');
        if (!titleBar || titlebarObserverTarget === titleBar) {
            return;
        }

        titlebarObserver?.disconnect();
        titlebarObserverTarget = titleBar;
        titlebarObserver = new MutationObserver(() => {
            if (applyingBranding) {
                return;
            }
            scheduleGuard();
        });
        titlebarObserver.observe(titleBar, {
            childList: true,
        });
    };

    ensureNonPremiumTitlebarBranding();
    observeTitlebar();

    electron_1.ipcRenderer.on(events_js_1.Events.NATIVE_STORE_UPDATE, (event, key, value) => {
        store_js_1.updateCache?.(key, value);
        if (typeof key === 'string' && key.startsWith('modSettings')) {
            resetTitlebarVisibilitySettings();
            scheduleGuard();
        }
    });

    if (!window.MutationObserver) return;
    const observer = new MutationObserver(() => {
        if (applyingBranding) {
            return;
        }
        if (!titlebarObserverTarget?.isConnected) {
            scheduleGuard();
        }
    });
    const observeTarget = window.document.body || window.document.documentElement;
    if (observeTarget) {
        observer.observe(observeTarget, {
            subtree: true,
            childList: true,
        });
    }
};

electron_1.contextBridge.exposeInMainWorld('IS_PREMIUM_USER', () => electron_1.ipcRenderer.invoke('isPremiumUser'));
electron_1.contextBridge.exposeInMainWorld('HIDE_PULSESYNC_VERSION_IN_TITLEBAR', () => shouldHidePulseSyncVersionInTitleBar());
electron_1.contextBridge.exposeInMainWorld('IS_DEVTOOLS_ENABLED', Boolean(store_js_1.getDevMode()));

electron_1.contextBridge.exposeInMainWorld('DISPLAY_MAX_FPS', store_js_1.getDisplayMaxFps());
electron_1.contextBridge.exposeInMainWorld('ENABLE_YNISON_REMOTE_CONTROL', Boolean(store_js_1.getEnableYnisonRemoteControl()));
electron_1.contextBridge.exposeInMainWorld('YNISON_INTERCEPT_PLAYBACK', Boolean(store_js_1.getYnisonInterceptPlayback()));
electron_1.contextBridge.exposeInMainWorld('GLOBAL_SHORTCUTS', Boolean(store_js_1.getGlobalShortcuts()));
electron_1.contextBridge.exposeInMainWorld('VERSION', String(config_js_1.config.buildInfo.VERSION));
electron_1.contextBridge.exposeInMainWorld('PULSE_VERSION', String(config_js_1.config.modification.version));
electron_1.contextBridge.exposeInMainWorld('ENABLED_ADDONS', async () => electron_1.ipcRenderer.invoke('get-enabled-addons'));
electron_1.contextBridge.exposeInMainWorld('HOST_VERSION', String(config_js_1.config.modification.realYMVersion));
electron_1.contextBridge.exposeInMainWorld('SHOW_CODEC_INSTEAD_OF_QUALITY_MARK', () =>
    Boolean(store_js_1.getModSettings()?.playerBarEnhancement.showCodecInsteadOfQualityMark),
);
electron_1.contextBridge.exposeInMainWorld('BRANCH', String(config_js_1.config.buildInfo.BRANCH));
electron_1.contextBridge.exposeInMainWorld('PLATFORM', deviceInfo.os);
electron_1.contextBridge.exposeInMainWorld('DEVICE_INFO', deviceInfo);
electron_1.contextBridge.exposeInMainWorld('DEVICE_HOSTNAME', (0, deviceInfo_js_1.getDeviceHostname)());
electron_1.contextBridge.exposeInMainWorld('PLAYER_ACTIONS', playerActions_js_1.PlayerActions);
electron_1.contextBridge.exposeInMainWorld('VIBE_ANIMATION_INTENSITY_COEFFICIENT', () => store_js_1.getModSettings()?.vibeAnimationEnhancement?.vibeIntensityCoefficient);
electron_1.contextBridge.exposeInMainWorld('VIBE_ANIMATION_MAX_FPS', () => store_js_1.getModSettings()?.vibeAnimationEnhancement?.maxFPS);
electron_1.contextBridge.exposeInMainWorld('VIBE_ANIMATION_USE_DYNAMIC_ENERGY', () => store_js_1.getModSettings()?.vibeAnimationEnhancement?.useDynamicEnergy);
electron_1.contextBridge.exposeInMainWorld('VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY', () => store_js_1.getModSettings()?.vibeAnimationEnhancement?.smoothDynamicEnergy);
electron_1.contextBridge.exposeInMainWorld(
    'VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY_COEFFICIENT',
    () => store_js_1.getModSettings()?.vibeAnimationEnhancement?.smoothDynamicEnergyCoefficient,
);
electron_1.contextBridge.exposeInMainWorld('VIBE_ANIMATION_PLAY_ON_ANY_ENTITY', () => store_js_1.getModSettings()?.vibeAnimationEnhancement?.playVibeOnAnyEntity);
electron_1.contextBridge.exposeInMainWorld('VIBE_ANIMATION_USE_CUSTOM_COLORS', () => store_js_1.getModSettings()?.vibeAnimationEnhancement?.useCustomColors);
electron_1.contextBridge.exposeInMainWorld('VIBE_ANIMATION_DISABLE_RENDERING', () => store_js_1.getModSettings()?.vibeAnimationEnhancement?.disableRendering);
electron_1.contextBridge.exposeInMainWorld('ALWAYS_SHOW_PLAYER_TIMESTAMPS', () => store_js_1.getModSettings()?.playerBarEnhancement?.alwaysShowTimestamps);
electron_1.contextBridge.exposeInMainWorld('CHANGE_DISLIKE_BUTTON_POS', () => store_js_1.getModSettings()?.playerBarEnhancement?.changeDislikeButtonPos);
electron_1.contextBridge.exposeInMainWorld('DISABLE_PER_TRACK_COLORS', () => store_js_1.getModSettings()?.playerBarEnhancement?.disablePerTrackColors);
electron_1.contextBridge.exposeInMainWorld('ALWAYS_WIDE_BAR', () => store_js_1.getModSettings()?.playerBarEnhancement?.alwaysWideBar);
electron_1.contextBridge.exposeInMainWorld('DEFAULT_MUSIC_EXPERIMENT_OVERRIDES', () => store_js_1.getDefaultExperimentOverrides());
electron_1.contextBridge.exposeInMainWorld('ENABLE_ENDLESS_MUSIC', () => store_js_1.getModSettings()?.vibeAnimationEnhancement?.enableEndlessMusic);
electron_1.contextBridge.exposeInMainWorld('ALLOWED_URLS', {
    get: () => electron_1.ipcRenderer.invoke('GET_CORS'),
});
electron_1.contextBridge.exposeInMainWorld('desktopEvents', {
    send(name, ...args) {
        electron_1.ipcRenderer.send(name, ...args);
    },
    on(name, callback) {
        const listener = (event, ...args) => {
            callback(event, ...args);
        };

        electron_1.ipcRenderer.on(name, listener);

        return () => {
            electron_1.ipcRenderer.off(name, listener);
        };
    },
    off(name, listener) {
        electron_1.ipcRenderer.off(name, listener);
    },
    invoke(name, ...args) {
        return electron_1.ipcRenderer.invoke(name, ...args);
    },
    emit(name, ...args) {
        console.debug('emitted', name, ...args);
        return electron_1.ipcRenderer.emit(name, ...args);
    },
});
electron_1.contextBridge.exposeInMainWorld('nativeSettings', {
    set(key, value) {
        electron_1.ipcRenderer.send(events_js_1.Events.NATIVE_STORE_SET, key, value);
    },
    get(key) {
        return store_js_1.get(key);
    },
    setPathWithNativeDialog(key, defaultPath = undefined, properties = undefined) {
        electron_1.ipcRenderer.invoke('setPathWithNativeDialog', key, defaultPath, properties);
    },
});
electron_1.contextBridge.exposeInMainWorld('globalShortcutsControl', {
    setRecordingState(isRecording) {
        electron_1.ipcRenderer.send(events_js_1.Events.GLOBAL_SHORTCUTS_RECORDING_STATE, Boolean(isRecording));
    },
});
electron_1.contextBridge.exposeInMainWorld('scrobble', {
    login: () => electron_1.ipcRenderer.invoke('scrobble-login'),
    logout: () => electron_1.ipcRenderer.invoke('scrobble-logout'),
    lastfmLogin: () => electron_1.ipcRenderer.invoke('scrobble-lastfm-login'),
    lastfmLogout: () => electron_1.ipcRenderer.invoke('scrobble-lastfm-logout'),
    lastfmGetUser: () => electron_1.ipcRenderer.invoke('scrobble-lastfm-get-user'),
    lastfmGetResnet: (user) => electron_1.ipcRenderer.invoke('scrobble-lastfm-get-current-playing-track', user),
});

electron_1.contextBridge.exposeInMainWorld('zoomControl', {
    zoomIn: () => electron_1.ipcRenderer.invoke('zoom-in'),
    zoomOut: () => electron_1.ipcRenderer.invoke('zoom-out'),
    resetZoom: () => electron_1.ipcRenderer.invoke('reset-zoom'),
    getZoomLevel: () => electron_1.ipcRenderer.invoke('get-zoom-level'),
    setZoomLevel: (level) => electron_1.ipcRenderer.invoke('set-zoom-level', level),
});

electron_1.contextBridge.exposeInMainWorld('autoStartupStatus', (data) => electron_1.ipcRenderer.send('autoStartupStatus', data));
electron_1.contextBridge.exposeInMainWorld('openConfigFile', () => electron_1.ipcRenderer.invoke('openConfigFile'));
electron_1.contextBridge.exposeInMainWorld('playlistLinkImporter', {
    prefetchTrack: (url) => electron_1.ipcRenderer.invoke('playlist-prefetch-track-from-link', { url }),
    importTrack: (url, importID) => electron_1.ipcRenderer.invoke('playlist-import-track-from-link', { url, importID }),
    onTrackImported: (callback) => {
        const listener = (event, payload) => {
            callback(payload);
        };

        electron_1.ipcRenderer.on('PLAYLIST_LINK_IMPORT_TRACK_READY', listener);

        return () => {
            electron_1.ipcRenderer.off('PLAYLIST_LINK_IMPORT_TRACK_READY', listener);
        };
    },
});
window.document.addEventListener('DOMContentLoaded', () => {
    const theme = (0, getInitialTheme_js_1.getInitialTheme)();
    if (hostnamePatterns_js_1.applicationHostnamePattern.test(window.location.hostname)) {
        window.document.documentElement.style.backgroundColor = theme === theme_js_1.Theme.Light ? '#FFFFFF' : '#000000';
        installNonPremiumTitlebarBrandingGuard();
    }
});
electron_1.contextBridge.exposeInMainWorld('loadWorker', (workerName) => {
    const fs = require('fs');
    const path = require('path');
    const workerPath = path.join(__dirname, 'workers', `${path.parse(workerName).name}.js`);
    const code = fs.readFileSync(workerPath);
    return code.toString('utf-8');
});
