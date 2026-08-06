import type { WebHostAddonAsset, WebHostAddonsSnapshot } from './contracts'
import { IsolatedAddonRuntime } from './isolated/IsolatedAddonRuntime'
import { ISOLATED_ADDON_RUNTIME } from '../runtimeModes'

type AppliedAddon = {
    code: string
    css: string
    runtime: IsolatedAddonRuntime
}

const appliedAddons = new Map<string, AppliedAddon>()
let lastAppliedHash = ''

function normalizeId(value: unknown) {
    return String(value ?? '').trim()
}

function removeAddon(addonId: string) {
    window.__PULSESYNC_WEB_HOST__?.unregisterAddon(addonId)
    appliedAddons.get(addonId)?.runtime.destroy()
    appliedAddons.delete(addonId)
}

function applyAddon(addon: WebHostAddonAsset) {
    removeAddon(addon.id)
    const runtime = new IsolatedAddonRuntime(addon)
    appliedAddons.set(addon.id, { code: addon.code, css: addon.css, runtime })
    void runtime.start().catch(error => {
        if (appliedAddons.get(addon.id)?.runtime !== runtime) return
        console.error(`[PulseSync WebHost] Failed to start isolated addon ${addon.id}:`, error)
        removeAddon(addon.id)
    })
}

function normalizeAddon(value: unknown): WebHostAddonAsset | null {
    if (!value || typeof value !== 'object') return null
    const addon = value as Partial<WebHostAddonAsset>
    const id = normalizeId(addon.id)
    if (!id) return null

    return {
        id,
        name: normalizeId(addon.name) || id,
        directoryName: normalizeId(addon.directoryName) || id,
        ...(typeof addon.version === 'string' ? { version: addon.version } : {}),
        css: typeof addon.css === 'string' ? addon.css : '',
        code: typeof addon.code === 'string' ? addon.code : '',
    }
}

function normalizeSnapshot(value: unknown): WebHostAddonsSnapshot | null {
    if (!value || typeof value !== 'object') return null
    const snapshot = value as Partial<WebHostAddonsSnapshot>
    if (snapshot.runtime !== undefined && snapshot.runtime !== ISOLATED_ADDON_RUNTIME) return null

    return {
        runtime: ISOLATED_ADDON_RUNTIME,
        hash: normalizeId(snapshot.hash),
        addons: Array.isArray(snapshot.addons)
            ? snapshot.addons.map(normalizeAddon).filter((addon): addon is WebHostAddonAsset => addon !== null)
            : [],
    }
}

export function applyWebHostAddonsSnapshot(value: unknown) {
    const snapshot = normalizeSnapshot(value)
    if (!snapshot || (snapshot.hash && snapshot.hash === lastAppliedHash)) return false

    const nextAddons = new Map(snapshot.addons.map(addon => [addon.id, addon]))

    for (const addonId of appliedAddons.keys()) {
        if (!nextAddons.has(addonId)) removeAddon(addonId)
    }

    for (const addon of nextAddons.values()) {
        const previous = appliedAddons.get(addon.id)
        if (!previous || previous.css !== addon.css || previous.code !== addon.code) applyAddon(addon)
    }

    lastAppliedHash = snapshot.hash
    console.info('[PulseSync WebHost] isolated addon snapshot applied', { addons: nextAddons.size })
    return true
}
