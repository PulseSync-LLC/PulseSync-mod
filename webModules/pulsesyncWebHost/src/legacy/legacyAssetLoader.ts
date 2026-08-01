import type { LegacyAssetsSnapshot, LegacyScriptAsset, LegacyStyleAsset } from './contracts'
import { wrapLegacyThemeScript } from './themeScript'

let lastAppliedRevision = -1

function getStyleRegistry() {
    return (window.__PS_STYLES__ ??= Object.create(null) as Record<string, string>)
}

function getScriptRegistry() {
    return (window.__PS_SCRIPTS__ ??= Object.create(null) as Record<string, string>)
}

function normalizeId(value: unknown) {
    return String(value ?? '').trim()
}

function removeStyle(id: string) {
    document.getElementById(id)?.remove()
    delete getStyleRegistry()[id]
    console.log('PulseSync removeCss:', id)
}

function applyStyle(asset: LegacyStyleAsset) {
    const id = normalizeId(asset.id)
    const css = typeof asset.css === 'string' ? asset.css : ''
    if (!id || !css.trim() || css.trim() === '{}') return

    const registry = getStyleRegistry()
    if (registry[id] === css && document.getElementById(id)) return

    document.getElementById(id)?.remove()
    const style = document.createElement('style')
    style.id = id
    style.textContent = css
    ;(document.head || document.documentElement).appendChild(style)
    registry[id] = css
    console.log('PulseSync applyCss:', id)
}

function removeScript(id: string) {
    document.getElementById(id)?.remove()
    delete getScriptRegistry()[id]
    console.log('PulseSync removeScript:', id)
}

function applyScript(asset: LegacyScriptAsset) {
    const id = normalizeId(asset.id)
    if (!id || typeof asset.code !== 'string' || !asset.code.trim()) return

    const code = asset.kind === 'theme' ? wrapLegacyThemeScript(asset.code) : asset.code
    const registry = getScriptRegistry()
    if (registry[id] === code && document.getElementById(id)) return

    const parent = document.head || document.documentElement
    parent.querySelector(`script#${CSS.escape(id)}`)?.remove()
    const script = document.createElement('script')
    script.id = id
    script.textContent = code
    parent.appendChild(script)
    registry[id] = code
    console.log('PulseSync applyScript:', id)
}

function normalizeSnapshot(snapshot: unknown): LegacyAssetsSnapshot | null {
    if (!snapshot || typeof snapshot !== 'object') return null
    const value = snapshot as Partial<LegacyAssetsSnapshot>
    return {
        revision: Number.isFinite(Number(value.revision)) ? Number(value.revision) : 0,
        styles: Array.isArray(value.styles) ? value.styles : [],
        scripts: Array.isArray(value.scripts) ? value.scripts : [],
    }
}

export function applyLegacyAssetsSnapshot(snapshot: unknown) {
    const normalized = normalizeSnapshot(snapshot)
    if (!normalized || normalized.revision <= lastAppliedRevision) return false

    const styles = normalized.styles.filter(asset => normalizeId(asset?.id) && typeof asset?.css === 'string')
    const scripts = normalized.scripts.filter(asset => normalizeId(asset?.id) && typeof asset?.code === 'string')
    const nextStyleIds = new Set(styles.map(asset => normalizeId(asset.id)))
    const nextScriptIds = new Set(scripts.map(asset => normalizeId(asset.id)))

    Object.keys(getStyleRegistry()).forEach(id => {
        if (!nextStyleIds.has(id)) removeStyle(id)
    })
    Object.keys(getScriptRegistry()).forEach(id => {
        if (!nextScriptIds.has(id)) removeScript(id)
    })

    styles.forEach(applyStyle)
    scripts.forEach(applyScript)
    lastAppliedRevision = normalized.revision
    return true
}
