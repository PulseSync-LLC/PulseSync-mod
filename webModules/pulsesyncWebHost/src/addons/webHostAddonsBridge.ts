import { WEB_HOST_ADDONS_EVENT, WEB_HOST_ADDONS_SNAPSHOT_EVENT } from '../constants'
import type { WebHostAddonsSnapshot } from './contracts'
import { applyWebHostAddonsSnapshot } from './webHostAddonLoader'

let listenerRegistered = false

async function requestSnapshot() {
    if (!window.desktopEvents?.invoke) {
        window.setTimeout(() => void requestSnapshot(), 500)
        return
    }

    try {
        const snapshot = await window.desktopEvents.invoke<WebHostAddonsSnapshot>(WEB_HOST_ADDONS_SNAPSHOT_EVENT)
        applyWebHostAddonsSnapshot(snapshot)
    } catch (error) {
        console.warn('[PulseSync WebHost] Failed to request addon snapshot:', error)
        window.setTimeout(() => void requestSnapshot(), 500)
    }
}

export function startWebHostAddonsBridge() {
    if (!listenerRegistered) {
        if (!window.desktopEvents?.on) {
            window.setTimeout(startWebHostAddonsBridge, 500)
            return
        }

        listenerRegistered = true
        window.desktopEvents.on(WEB_HOST_ADDONS_EVENT, (_event, snapshot) => applyWebHostAddonsSnapshot(snapshot))
    }

    void requestSnapshot()
}
