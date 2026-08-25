import type { RuntimeServices } from './contracts';
import { ensurePulseSyncApi } from './api/pulsesyncApi';
import { requestInitialAddonSettingsSnapshot } from './api/addonSettingsBridge';
import { getLastWasapiOutputState, bindWasapiCrossfadePlayer, installNativeAudioOutputMonitor, installWasapiPlayerSeekProxy, syncWasapiCrossfadePolicy, syncWasapiPlayerHold } from './audio/wasapi';
import { installWebAudioGraphMonitor } from './audio/webAudioGraph';
import { installYaspNativeAudioHooks } from './audio/yasp';
import { installFindCssRuleHelper } from './dom/findCssRule';
import { registerDesktopListeners } from './events/desktopEvents';
import { installTrackQualityApi } from './features/trackQuality';
import { installYandexStationPlayerProxy } from './features/yandexStation';

const runtimeServices: RuntimeServices = {
    getLastWasapiOutputState,
    installStationPlayerProxy: installYandexStationPlayerProxy,
    installWasapiPlayerSeekProxy,
    bindWasapiCrossfadePlayer,
    syncWasapiCrossfadePolicy,
    syncWasapiPlayerHold,
};

const ensureApi = () => ensurePulseSyncApi(runtimeServices);

export function bootstrapPulseSyncRuntime() {
    if (window.__pulsesyncBridgeInitialized) return false;

    installFindCssRuleHelper();
    installWebAudioGraphMonitor();
    installTrackQualityApi();
    installNativeAudioOutputMonitor();
    installYaspNativeAudioHooks();
    ensureApi();
    registerDesktopListeners(ensureApi);
    window.__pulsesyncBridgeInitialized = true;
    void requestInitialAddonSettingsSnapshot(ensureApi);
    console.info('[PulseSync Runtime] ready', { apiVersion: 1 });
    return true;
}

void bootstrapPulseSyncRuntime();
