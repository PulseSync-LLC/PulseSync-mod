import type { WebHostAddonAsset, WebHostAddonsSnapshot } from './contracts'
import { IsolatedAddonRuntime } from './isolated/IsolatedAddonRuntime'
import { ISOLATED_ADDON_RUNTIME } from '../runtimeModes'

type AppliedAddon = {
    asset: WebHostAddonAsset
    runtime: IsolatedAddonRuntime
}

const appliedAddons = new Map<string, AppliedAddon>()
const lastKnownGoodAddons = new Map<string, WebHostAddonAsset>()
let lastAppliedHash = ''

function normalizeId(value: unknown) {
    return String(value ?? '').trim()
}

function removeAddon(addonId: string, forgetLastKnownGood = false) {
    window.__PULSESYNC_WEB_HOST__?.unregisterAddon(addonId)
    appliedAddons.get(addonId)?.runtime.destroy()
    appliedAddons.delete(addonId)
    if (forgetLastKnownGood) lastKnownGoodAddons.delete(addonId)
}

function startAddon(addon: WebHostAddonAsset, rollbackAddon?: WebHostAddonAsset) {
    const runtime = new IsolatedAddonRuntime(addon)
    appliedAddons.set(addon.id, { asset: addon, runtime })
    void runtime
        .start()
        .then(() => {
            if (appliedAddons.get(addon.id)?.runtime === runtime) lastKnownGoodAddons.set(addon.id, addon)
        })
        .catch(error => {
            if (appliedAddons.get(addon.id)?.runtime !== runtime) return
            console.error(`[PulseSync WebHost] Failed to start isolated addon ${addon.id}:`, error)
            lastAppliedHash = ''
            removeAddon(addon.id)

            if (!rollbackAddon) {
                if (lastKnownGoodAddons.get(addon.id) === addon) lastKnownGoodAddons.delete(addon.id)
                return
            }

            console.warn(`[PulseSync WebHost] Restoring last working isolated addon ${addon.id}`)
            startAddon(rollbackAddon)
        })
}

function applyAddon(addon: WebHostAddonAsset) {
    const rollbackAddon = lastKnownGoodAddons.get(addon.id)
    removeAddon(addon.id)
    startAddon(addon, rollbackAddon)
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
        if (!nextAddons.has(addonId)) removeAddon(addonId, true)
    }

    for (const addon of nextAddons.values()) {
        const previous = appliedAddons.get(addon.id)
        if (!previous || previous.asset.css !== addon.css || previous.asset.code !== addon.code) applyAddon(addon)
    }

    lastAppliedHash = snapshot.hash
    console.info('[PulseSync WebHost] isolated addon snapshot applied', { addons: nextAddons.size })
    return true
}
