import { createRoot } from 'react-dom/client'
import { startWebHostAddonsBridge } from './addons/webHostAddonsBridge'
import { ADDON_QUEUE_GLOBAL, WEB_HOST_API_VERSION, WEB_HOST_GLOBAL, WEB_HOST_ROOT_ID } from './constants'
import type { PulseSyncAddonFactory } from './contracts'
import { PulseSyncWebHost } from './components/PulseSyncWebHost'
import { createWebHostApi } from './runtime/createWebHostApi'
import { startLegacyAssetsBridge } from './legacy/legacyAssetsBridge'
import { installSystemAddons } from './systemAddons/installSystemAddons'

function getOrCreateRootContainer() {
    const container = document.getElementById(WEB_HOST_ROOT_ID) ?? document.createElement('div')
    container.id = WEB_HOST_ROOT_ID
    container.style.display = 'contents'
    if (!container.isConnected) document.body.append(container)
    return container
}

function createLiveAddonQueue(installAddon: (factory: PulseSyncAddonFactory) => Promise<unknown>) {
    const liveQueue: PulseSyncAddonFactory[] = []
    let acceptedFactories = 0

    Object.defineProperty(liveQueue, 'push', {
        value: (...factories: PulseSyncAddonFactory[]) => {
            acceptedFactories += factories.length
            factories.forEach(factory => {
                void installAddon(factory).catch(error => console.error('PulseSync addon failed to install', error))
            })
            return acceptedFactories
        },
        configurable: false,
        enumerable: false,
        writable: false,
    })

    return liveQueue
}

export async function bootstrapWebHost() {
    if (window.__PULSESYNC_WEB_HOST__) return window.__PULSESYNC_WEB_HOST__

    const hostApi = createWebHostApi()

    createRoot(getOrCreateRootContainer()).render(<PulseSyncWebHost />)
    const systemAddonIds = await installSystemAddons(hostApi)

    Object.defineProperty(window, WEB_HOST_GLOBAL, {
        value: hostApi,
        configurable: false,
        enumerable: false,
        writable: false,
    })

    const pendingFactories = [...(window.__PULSESYNC_ADDON_QUEUE__ ?? [])]
    const liveQueue = createLiveAddonQueue(hostApi.installAddon)

    Object.defineProperty(window, ADDON_QUEUE_GLOBAL, {
        value: liveQueue,
        configurable: false,
        enumerable: false,
        writable: false,
    })

    startLegacyAssetsBridge()
    startWebHostAddonsBridge()

    for (const factory of pendingFactories) {
        try {
            await hostApi.installAddon(factory)
        } catch (error) {
            console.error('Queued PulseSync addon failed to install', error)
        }
    }

    window.dispatchEvent(new CustomEvent('pulsesync-web-host-ready', { detail: { apiVersion: WEB_HOST_API_VERSION } }))
    console.info('[PulseSync WebHost] ready', {
        apiVersion: WEB_HOST_API_VERSION,
        reactVersion: hostApi.React.version,
        systemAddons: systemAddonIds,
        queuedAddons: pendingFactories.length,
    })
    return hostApi
}
