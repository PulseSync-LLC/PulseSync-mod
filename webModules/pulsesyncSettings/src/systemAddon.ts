import type { PulseSyncAddonFactory } from '../../pulsesyncWebHost/src/contracts'

export const PULSESYNC_SETTINGS_ADDON_ID = 'pulsesync.settings'

export const pulseSyncSettingsAddon: PulseSyncAddonFactory = () => ({
  id: PULSESYNC_SETTINGS_ADDON_ID,
  name: 'PulseSync Settings',
  activate(api) {
    api.logger.info('System addon loaded')
  },
})
