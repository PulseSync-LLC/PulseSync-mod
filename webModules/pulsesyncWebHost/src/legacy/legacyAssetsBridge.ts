import { LEGACY_ASSETS_EVENT, LEGACY_ASSETS_SNAPSHOT_EVENT } from '../constants'
import type { LegacyAssetsSnapshot } from './contracts'
import { applyLegacyAssetsSnapshot } from './legacyAssetLoader'

let listenerRegistered = false

async function requestSnapshot() {
    if (!window.desktopEvents?.invoke) {
        window.setTimeout(() => void requestSnapshot(), 500)
        return
    }

    try {
        const snapshot = await window.desktopEvents.invoke<LegacyAssetsSnapshot>(LEGACY_ASSETS_SNAPSHOT_EVENT)
        applyLegacyAssetsSnapshot(snapshot)
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
        window.desktopEvents.on(LEGACY_ASSETS_EVENT, (_event, snapshot) => applyLegacyAssetsSnapshot(snapshot))
    }

    void requestSnapshot()
}
