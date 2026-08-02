import type { PulseSyncAddonFactory } from '../../pulsesyncWebHost/src/contracts'
import App from './App'

export const PULSESYNC_SETTINGS_ADDON_ID = 'pulsesync.settings'

export const pulseSyncSettingsAddon: PulseSyncAddonFactory = () => ({
  id: PULSESYNC_SETTINGS_ADDON_ID,
  name: 'PulseSync Settings',
  component: App,
  activate(api) {
    api.logger.info('System addon loaded')
  },
})
