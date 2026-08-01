import type { WebHostAddonAsset, WebHostAddonsSnapshot } from './contracts'

type AppliedAddon = {
    code: string
    css: string
}

const appliedAddons = new Map<string, AppliedAddon>()
let lastAppliedHash = ''

function normalizeId(value: unknown) {
    return String(value ?? '').trim()
}

function getStyleElementId(addonId: string) {
    return `pulsesync-web-addon-style-${addonId}`
}

function getScriptElementId(addonId: string) {
    return `pulsesync-web-addon-script-${addonId}`
}

function removeAddon(addonId: string) {
    window.__PULSESYNC_WEB_HOST__?.unregisterAddon(addonId)
    document.getElementById(getStyleElementId(addonId))?.remove()
    document.getElementById(getScriptElementId(addonId))?.remove()
    appliedAddons.delete(addonId)
}

function applyStyle(addonId: string, css: string) {
    const styleId = getStyleElementId(addonId)
    const existingStyle = document.getElementById(styleId)

    if (!css.trim()) {
        existingStyle?.remove()
        return
    }

    const style = existingStyle instanceof HTMLStyleElement ? existingStyle : document.createElement('style')
    style.id = styleId
    style.dataset.pulsesyncAddon = addonId
    style.textContent = css
    if (!style.isConnected) (document.head || document.documentElement).appendChild(style)
}

function applyScript(addonId: string, code: string) {
    window.__PULSESYNC_WEB_HOST__?.unregisterAddon(addonId)
    document.getElementById(getScriptElementId(addonId))?.remove()
    if (!code.trim()) return

    const script = document.createElement('script')
    script.id = getScriptElementId(addonId)
    script.dataset.pulsesyncAddon = addonId
    script.textContent = `${code}\n//# sourceURL=pulsesync-addon://${encodeURIComponent(addonId)}/script.js`
    ;(document.head || document.documentElement).appendChild(script)
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

    return {
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
        if (previous?.css !== addon.css) applyStyle(addon.id, addon.css)
        if (previous?.code !== addon.code) applyScript(addon.id, addon.code)
        appliedAddons.set(addon.id, { code: addon.code, css: addon.css })
    }

    lastAppliedHash = snapshot.hash
    console.info('[PulseSync WebHost] addon snapshot applied', { addons: nextAddons.size })
    return true
}
