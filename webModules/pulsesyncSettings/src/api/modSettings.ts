import type { PulseSyncAddonApi } from '../../../pulsesyncWebHost/src/contracts'

export type ModSettingsApi = {
  applyR128Normalization: (enabled: boolean) => void
  getModSetting: (key: string) => Promise<unknown>
  getModSettingSnapshot: (key: string) => unknown
  getDisplayMaxFps: () => number
  getPlatform: () => string
  getPremiumStatus: () => Promise<boolean>
  getLastFmUser: () => Promise<unknown>
  getLastFmYnisonAvailability: () => Promise<boolean>
  getSelectedWasapiExclusiveDeviceId: () => Promise<unknown>
  getWasapiExclusiveStatus: () => Promise<unknown>
  listWasapiExclusiveDevices: () => Promise<unknown>
  loginLastFm: () => Promise<unknown>
  logoutLastFm: () => Promise<unknown>
  onLastFmUserInfoChange: (listener: (value: unknown) => void) => () => void
  refreshPlayerBar: () => void
  selectWasapiExclusiveDevice: (deviceId: string | null) => Promise<unknown>
  setAutoStartupStatus: (isEnabled: boolean) => void
  setModSetting: (key: string, value: unknown) => Promise<unknown>
  selectModSettingDirectory: (key: string) => Promise<unknown>
  setGlobalShortcutsRecording: (isRecording: boolean) => void
  onModSettingChange: (
    key: string,
    listener: (value: unknown) => void,
  ) => () => void
}

export function getModSettingsApi(
  addonApi: PulseSyncAddonApi | undefined,
): ModSettingsApi | undefined {
  const api = addonApi?.pulsesyncApi as Partial<ModSettingsApi> | undefined
  if (
    typeof api?.applyR128Normalization !== 'function' ||
    typeof api.getModSetting !== 'function' ||
    typeof api.getModSettingSnapshot !== 'function' ||
    typeof api.getDisplayMaxFps !== 'function' ||
    typeof api.getPlatform !== 'function' ||
    typeof api.getPremiumStatus !== 'function' ||
    typeof api.getLastFmUser !== 'function' ||
    typeof api.getLastFmYnisonAvailability !== 'function' ||
    typeof api.getSelectedWasapiExclusiveDeviceId !== 'function' ||
    typeof api.getWasapiExclusiveStatus !== 'function' ||
    typeof api.listWasapiExclusiveDevices !== 'function' ||
    typeof api.loginLastFm !== 'function' ||
    typeof api.logoutLastFm !== 'function' ||
    typeof api.onLastFmUserInfoChange !== 'function' ||
    typeof api.refreshPlayerBar !== 'function' ||
    typeof api.selectWasapiExclusiveDevice !== 'function' ||
    typeof api.setAutoStartupStatus !== 'function' ||
    typeof api.setModSetting !== 'function' ||
    typeof api.selectModSettingDirectory !== 'function' ||
    typeof api.setGlobalShortcutsRecording !== 'function' ||
    typeof api.onModSettingChange !== 'function'
  ) {
    return undefined
  }

  return api as ModSettingsApi
}
