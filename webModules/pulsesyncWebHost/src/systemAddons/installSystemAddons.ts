import { pulseSyncSettingsAddon } from '../../../pulsesyncSettings/src/systemAddon'
import type { PulseSyncAddonFactory, PulseSyncWebHostApi } from '../contracts'
import { registerSystemAddon } from '../runtime/registry'

const systemAddonFactories: readonly PulseSyncAddonFactory[] = [pulseSyncSettingsAddon]

export async function installSystemAddons(hostApi: PulseSyncWebHostApi) {
    const installedAddonIds: string[] = []

    for (const factory of systemAddonFactories) {
        try {
            const definition = await factory(hostApi)
            if (!definition) throw new Error('System addon factory returned no definition')
            registerSystemAddon(definition)
            installedAddonIds.push(definition.id)
        } catch (error) {
            console.error('[PulseSync WebHost] Failed to install system addon:', error)
        }
    }

    return installedAddonIds
}
