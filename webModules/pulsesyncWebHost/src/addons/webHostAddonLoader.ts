import type { WebHostAddonsSnapshot, WebHostAsset } from './contracts'
import { IsolatedAddonRuntime } from './isolated/IsolatedAddonRuntime'
import { CssThemeRuntime } from './theme/CssThemeRuntime'
import { ISOLATED_ADDON_RUNTIME } from '../runtimeModes'

type WebHostAssetRuntime = {
    start: () => Promise<void>
    destroy: () => void
}

type AppliedAddon = {
    asset: WebHostAsset
    runtime: WebHostAssetRuntime
}

const appliedAddons = new Map<string, AppliedAddon>()
const lastKnownGoodAddons = new Map<string, WebHostAsset>()
let lastAppliedHash = ''

function normalizeId(value: unknown) {
    return String(value ?? '').trim()
}

function removeAddon(addonId: string, forgetLastKnownGood = false) {
    const applied = appliedAddons.get(addonId)
    if (applied?.asset.type === 'web-addon') window.__PULSESYNC_WEB_HOST__?.unregisterAddon(addonId)
    applied?.runtime.destroy()
    appliedAddons.delete(addonId)
    if (forgetLastKnownGood) lastKnownGoodAddons.delete(addonId)
}

function startAddon(addon: WebHostAsset, rollbackAddon?: WebHostAsset) {
    const runtime = addon.type === 'theme' ? new CssThemeRuntime(addon) : new IsolatedAddonRuntime(addon)
    appliedAddons.set(addon.id, { asset: addon, runtime })
    void runtime
        .start()
        .then(() => {
            if (appliedAddons.get(addon.id)?.runtime === runtime) lastKnownGoodAddons.set(addon.id, addon)
        })
        .catch(error => {
            if (appliedAddons.get(addon.id)?.runtime !== runtime) return
            console.error(`[PulseSync WebHost] Failed to start ${addon.type} ${addon.id}:`, error)
            lastAppliedHash = ''
            removeAddon(addon.id)

            if (!rollbackAddon) {
                if (lastKnownGoodAddons.get(addon.id) === addon) lastKnownGoodAddons.delete(addon.id)
                return
            }

            console.warn(`[PulseSync WebHost] Restoring last working ${rollbackAddon.type} ${addon.id}`)
            startAddon(rollbackAddon)
        })
}

function applyAddon(addon: WebHostAsset) {
    const rollbackAddon = lastKnownGoodAddons.get(addon.id)
    removeAddon(addon.id)
    startAddon(addon, rollbackAddon)
}

function normalizeAddon(value: unknown): WebHostAsset | null {
    if (!value || typeof value !== 'object') return null
    const addon = value as Partial<WebHostAsset> & { type?: unknown; code?: unknown }
    const id = normalizeId(addon.id)
    if (!id) return null

    const baseAsset = {
        id,
        name: normalizeId(addon.name) || id,
        directoryName: normalizeId(addon.directoryName) || id,
        ...(typeof addon.version === 'string' ? { version: addon.version } : {}),
        css: typeof addon.css === 'string' ? addon.css : '',
    }

    if (addon.type === 'theme') {
        if (!baseAsset.css.trim() || baseAsset.css.trim() === '{}') return null
        if (typeof addon.code === 'string' && addon.code.trim()) return null
        return { ...baseAsset, type: 'theme' }
    }

    if (addon.type !== undefined && addon.type !== 'web-addon') return null
    const code = typeof addon.code === 'string' ? addon.code : ''
    if (!code.trim()) return null
    return { ...baseAsset, type: 'web-addon', code }
}

function normalizeSnapshot(value: unknown): WebHostAddonsSnapshot | null {
    if (!value || typeof value !== 'object') return null
    const snapshot = value as Partial<WebHostAddonsSnapshot>
    if (snapshot.runtime !== undefined && snapshot.runtime !== ISOLATED_ADDON_RUNTIME) return null

    return {
        runtime: ISOLATED_ADDON_RUNTIME,
        hash: normalizeId(snapshot.hash),
        addons: Array.isArray(snapshot.addons) ? snapshot.addons.map(normalizeAddon).filter((addon): addon is WebHostAsset => addon !== null) : [],
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
        const previousCode = previous?.asset.type === 'web-addon' ? previous.asset.code : ''
        const nextCode = addon.type === 'web-addon' ? addon.code : ''
        if (!previous || previous.asset.type !== addon.type || previous.asset.css !== addon.css || previousCode !== nextCode) applyAddon(addon)
    }

    lastAppliedHash = snapshot.hash
    console.info('[PulseSync WebHost] addon snapshot applied', { assets: nextAddons.size })
    return true
}
