import { ADDON_RECOVERY_EVENT, SHOW_TOAST_EVENT } from '../constants'
import { ISOLATED_ADDON_RUNTIME } from '../runtimeModes'
import type { WebHostAddonsSnapshot, WebHostAsset } from './contracts'
import { IsolatedAddonRuntime, type IsolatedAddonFailure } from './isolated/IsolatedAddonRuntime'
import { CssThemeRuntime } from './theme/CssThemeRuntime'

type WebHostAssetRuntime = {
    start: () => Promise<void>
    destroy: () => void
}

type AppliedAddon = {
    asset: WebHostAsset
    runtime: WebHostAssetRuntime
}

const appliedAddons = new Map<string, AppliedAddon>()
let lastAppliedHash = ''

function normalizeId(value: unknown) {
    return String(value ?? '').trim()
}

function getFailure(error: unknown, fallbackCategory = 'addon-start-failed'): IsolatedAddonFailure {
    const message = error instanceof Error ? error.message : String(error)
    const categoryMatch = /^([a-z0-9-]+):\s*/i.exec(message)
    return {
        category: categoryMatch?.[1] || fallbackCategory,
        message: categoryMatch ? message.slice(categoryMatch[0].length) : message,
        ...(error instanceof Error && error.stack ? { stack: error.stack } : {}),
    }
}

function shouldPersistQuarantine(failure: IsolatedAddonFailure) {
    return !failure.category.startsWith('webhost-')
}

function removeAddon(addonId: string) {
    const applied = appliedAddons.get(addonId)
    if (applied?.asset.type === 'web-addon') window.__PULSESYNC_WEB_HOST__?.unregisterAddon(addonId)
    applied?.runtime.destroy()
    appliedAddons.delete(addonId)
}

async function persistWebHostQuarantine(addon: WebHostAsset, failure: IsolatedAddonFailure) {
    if (addon.type !== 'web-addon' || !addon.fingerprint || !window.desktopEvents?.invoke) return
    try {
        await window.desktopEvents.invoke(ADDON_RECOVERY_EVENT, {
            runtime: 'webhost',
            action: 'quarantine',
            addonId: addon.id,
            fingerprint: addon.fingerprint,
            reason: failure.category,
        })
    } catch (error) {
        console.error(`[PulseSync WebHost] Failed to persist quarantine for ${addon.id}:`, error)
    }
}

async function showRecoveryToast(addon: WebHostAsset, failure: IsolatedAddonFailure) {
    if (!window.desktopEvents?.invoke) return
    try {
        await window.desktopEvents.invoke(SHOW_TOAST_EVENT, {
            ownerId: `webhost-recovery-${addon.id}`,
            message: `Аддон «${addon.name}» автоматически отключён после ошибки.`,
            durationMs: 7000,
        })
    } catch (error) {
        console.warn(`[PulseSync WebHost] Failed to show recovery notification for ${addon.id}:`, error, failure.category)
    }
}

function handleAddonFailure(addon: WebHostAsset, runtime: WebHostAssetRuntime, failure: IsolatedAddonFailure) {
    const applied = appliedAddons.get(addon.id)
    if (!applied || applied.runtime !== runtime) return

    console.error(`[PulseSync WebHost] ${addon.type} ${addon.id} failed: ${failure.category}: ${failure.message}`, failure.stack ?? '')
    lastAppliedHash = ''
    removeAddon(addon.id)

    if (addon.type === 'web-addon' && shouldPersistQuarantine(failure)) {
        void persistWebHostQuarantine(addon, failure)
        void showRecoveryToast(addon, failure)
    }
}

function startAddon(addon: WebHostAsset) {
    let runtime: WebHostAssetRuntime
    if (addon.type === 'theme') {
        runtime = new CssThemeRuntime(addon)
    } else {
        runtime = new IsolatedAddonRuntime(addon, failure => handleAddonFailure(addon, runtime, failure))
    }

    appliedAddons.set(addon.id, { asset: addon, runtime })
    void runtime.start().catch(error => handleAddonFailure(addon, runtime, getFailure(error)))
}

function applyAddon(addon: WebHostAsset) {
    removeAddon(addon.id)
    startAddon(addon)
}

function normalizeAddon(value: unknown): WebHostAsset | null {
    if (!value || typeof value !== 'object') return null
    const addon = value as Partial<WebHostAsset> & { type?: unknown; code?: unknown; fingerprint?: unknown }
    const id = normalizeId(addon.id)
    if (!id) return null

    const baseAsset = {
        id,
        name: normalizeId(addon.name) || id,
        directoryName: normalizeId(addon.directoryName) || id,
        ...(typeof addon.version === 'string' ? { version: addon.version } : {}),
        ...(normalizeId(addon.fingerprint) ? { fingerprint: normalizeId(addon.fingerprint) } : {}),
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
        if (!nextAddons.has(addonId)) removeAddon(addonId)
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
