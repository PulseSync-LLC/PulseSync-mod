import type { WebHostAddonsSnapshot } from './contracts'
import { applyWebHostAddonsSnapshot } from './webHostAddonLoader'

let listenerRegistered = false

async function requestSnapshot() {
    if (!window.musicDesktop?.pulsesync.addons.getWebHostSnapshot) {
        window.setTimeout(() => void requestSnapshot(), 500)

        return
    }

    try {
        const snapshot = await window.musicDesktop.pulsesync.addons.getWebHostSnapshot<WebHostAddonsSnapshot>()

        applyWebHostAddonsSnapshot(snapshot)
    } catch (error) {
        console.warn('[PulseSync WebHost] Failed to request addon snapshot:', error)
        window.setTimeout(() => void requestSnapshot(), 500)
    }
}

export function startWebHostAddonsBridge() {
    if (!listenerRegistered) {
        if (!window.musicDesktop?.pulsesync.addons.onWebHostChange) {
            window.setTimeout(startWebHostAddonsBridge, 500)

            return
        }

        listenerRegistered = true
        window.musicDesktop.pulsesync.addons.onWebHostChange(snapshot => applyWebHostAddonsSnapshot(snapshot))
    }

    void requestSnapshot()
}
