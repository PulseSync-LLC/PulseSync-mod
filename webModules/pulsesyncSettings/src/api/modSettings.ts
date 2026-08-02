import type { PulseSyncAddonApi } from '../../../pulsesyncWebHost/src/contracts'

export type ModSettingsApi = {
  getModSetting: (key: string) => Promise<unknown>
  setModSetting: (key: string, value: unknown) => Promise<unknown>
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
    typeof api?.getModSetting !== 'function' ||
    typeof api.setModSetting !== 'function' ||
    typeof api.onModSettingChange !== 'function'
  ) {
    return undefined
  }

  return api as ModSettingsApi
}
