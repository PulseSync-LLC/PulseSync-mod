import { LEGACY_ASSETS_EVENT, LEGACY_ASSETS_SNAPSHOT_EVENT } from '../constants'
import type { LegacyAssetsSnapshot } from './contracts'
import { applyLegacyAssetsSnapshot } from './legacyAssetLoader'

let listenerRegistered = false
let applyQueue = Promise.resolve()

function queueSnapshot(snapshot: unknown) {
    applyQueue = applyQueue
        .then(() => applyLegacyAssetsSnapshot(snapshot))
        .then(() => undefined)
        .catch(error => console.error('[PulseSync WebHost] Failed to apply legacy assets snapshot:', error))
    return applyQueue
}

async function requestSnapshot() {
    if (!window.desktopEvents?.invoke) {
        window.setTimeout(() => void requestSnapshot(), 500)
        return
    }

    try {
        const snapshot = await window.desktopEvents.invoke<LegacyAssetsSnapshot>(LEGACY_ASSETS_SNAPSHOT_EVENT)
        await queueSnapshot(snapshot)
    } catch (error) {
        console.warn('[PulseSync WebHost] Failed to request legacy assets snapshot:', error)
        window.setTimeout(() => void requestSnapshot(), 500)
    }
}

export function startLegacyAssetsBridge() {
    if (!listenerRegistered) {
        if (!window.desktopEvents?.on) {
            window.setTimeout(startLegacyAssetsBridge, 500)
            return
        }
        listenerRegistered = true
        window.desktopEvents.on(LEGACY_ASSETS_EVENT, (_event, snapshot) => void queueSnapshot(snapshot))
    }

    void requestSnapshot()
}
