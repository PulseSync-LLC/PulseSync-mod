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
    if (!window.musicDesktop?.pulsesync.addons.getLegacySnapshot) {
        window.setTimeout(() => void requestSnapshot(), 500)

        return
    }

    try {
        const snapshot = await window.musicDesktop.pulsesync.addons.getLegacySnapshot<LegacyAssetsSnapshot>()

        await queueSnapshot(snapshot)
    } catch (error) {
        console.warn('[PulseSync WebHost] Failed to request legacy assets snapshot:', error)
        window.setTimeout(() => void requestSnapshot(), 500)
    }
}

export function startLegacyAssetsBridge() {
    if (!listenerRegistered) {
        if (!window.musicDesktop?.pulsesync.addons.onLegacyChange) {
            window.setTimeout(startLegacyAssetsBridge, 500)

            return
        }

        listenerRegistered = true
        window.musicDesktop.pulsesync.addons.onLegacyChange(snapshot => void queueSnapshot(snapshot))
    }

    void requestSnapshot()
}
