import { ISOLATED_ADDON_RUNTIME } from '../runtimeModes'
import { dismissAddonFailure, reportAddonFailure } from './addonFailures'
import type { WebHostAddonAsset, WebHostAddonsSnapshot, WebHostAsset } from './contracts'
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
let snapshotRevision = 0

function normalizeId(value: unknown) {
    return String(value ?? '').trim()
}

function getFailure(error: unknown, fallbackCategory = 'addon-start-failed'): IsolatedAddonFailure {
    const message = error instanceof Error ? error.message : String(error)

    if (message.includes('webhost-incompatible:')) {
        return { category: 'webhost-incompatible', message }
    }

    const moduleFailure = /PulseSync modules: ([a-z-]+)/.exec(message)

    if (moduleFailure) {
        return { category: `webhost-modules-${moduleFailure[1]}`, message }
    }

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

    if (applied?.asset.type === 'web-addon') {
        window.__PULSESYNC_WEB_HOST__?.unregisterAddon(addonId)
    }

    applied?.runtime.destroy()
    appliedAddons.delete(addonId)
}

async function persistWebHostQuarantine(addon: WebHostAsset, failure: IsolatedAddonFailure) {
    if (addon.type !== 'web-addon' || !addon.fingerprint || !window.musicDesktop?.pulsesync.addons.recover) {
        return
    }

    try {
        await window.musicDesktop.pulsesync.addons.recover({
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
    if (!window.musicDesktop?.pulsesync.notifications.show) {
        return
    }

    try {
        await window.musicDesktop.pulsesync.notifications.show({
            ownerId: `webhost-recovery-${addon.id}`,
            message: `Аддон «${addon.name}» автоматически отключён после ошибки.`,
            durationMs: 7000,
        })
    } catch (error) {
        console.warn(
            `[PulseSync WebHost] Failed to show recovery notification for ${addon.id}:`,
            error,
            failure.category,
        )
    }
}

function handleAddonFailure(addon: WebHostAsset, runtime: WebHostAssetRuntime, failure: IsolatedAddonFailure) {
    const applied = appliedAddons.get(addon.id)

    if (!applied || applied.runtime !== runtime) {
        return
    }

    if (/PulseSync modules: [a-z-]+/.test(failure.message)) {
        failure = { ...failure, category: getFailure(failure.message).category }
    }

    console.error(
        `[PulseSync WebHost] ${addon.type} ${addon.id} failed: ${failure.category}: ${failure.message}`,
        failure.stack ?? '',
    )

    const error = new Error(`${failure.category}: ${failure.message}`)

    if (failure.stack) {
        error.stack = failure.stack
    }

    lastAppliedHash = ''
    removeAddon(addon.id)

    const shouldQuarantine = addon.type === 'web-addon' && shouldPersistQuarantine(failure)
    const quarantine = shouldQuarantine ? persistWebHostQuarantine(addon, failure) : Promise.resolve()
    const retry =
        addon.type === 'web-addon' && addon.fingerprint && window.musicDesktop?.pulsesync.addons.recover
            ? async () => {
                  await quarantine

                  if (appliedAddons.has(addon.id)) {
                      return
                  }

                  if (!window.musicDesktop?.pulsesync.addons.recover) {
                      throw new Error('PulseSync addon recovery is unavailable')
                  }

                  const revision = snapshotRevision
                  const result = await window.musicDesktop.pulsesync.addons.recover<{ snapshot?: unknown }>({
                      runtime: 'webhost',
                      action: 'retry',
                      addonId: addon.id,
                      fingerprint: addon.fingerprint!,
                  })

                  if (appliedAddons.has(addon.id)) {
                      return
                  }

                  if (revision !== snapshotRevision) {
                      throw new Error('Список аддонов изменился. Повторите попытку.')
                  }

                  const snapshot = normalizeSnapshot(result?.snapshot)

                  if (
                      !snapshot?.addons.some(asset => asset.id === addon.id && asset.fingerprint === addon.fingerprint)
                  ) {
                      throw new Error('Аддон больше недоступен для повторного запуска. Проверьте его в PulseSync.')
                  }

                  lastAppliedHash = ''
                  applyWebHostAddonsSnapshot(snapshot)
              }
            : undefined

    reportAddonFailure(addon.id, error, retry)

    if (shouldQuarantine) {
        void showRecoveryToast(addon, failure)
    } else if (failure.category === 'webhost-incompatible') {
        void window.musicDesktop?.pulsesync.notifications
            .show?.({
                ownerId: `webhost-incompatible-${addon.id}`,
                message: `Для аддона «${addon.name}» требуется более новая версия PulseSync. Обновите клиент и мод.`,
                durationMs: 10000,
            })
            .catch(() => {})
    } else if (failure.category.startsWith('webhost-modules-')) {
        void window.musicDesktop?.pulsesync.notifications
            .show?.({
                ownerId: `webhost-modules-${addon.id}`,
                message:
                    failure.category === 'webhost-modules-reload-required'
                        ? `Для запуска модулей аддона «${addon.name}» перезапустите Яндекс Музыку.`
                        : `Не удалось запустить модули аддона «${addon.name}». Повторите включение аддона позже.`,
                durationMs: 7000,
            })
            .catch(() => {})
    }
}

function startAddon(addon: WebHostAsset) {
    dismissAddonFailure(addon.id)

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
    if (!value || typeof value !== 'object') {
        return null
    }

    const addon = value as Partial<WebHostAsset> & {
        type?: unknown
        code?: unknown
        fingerprint?: unknown
        requirements?: WebHostAddonAsset['requirements']
    }
    const id = normalizeId(addon.id)

    if (!id) {
        return null
    }

    const baseAsset = {
        id,
        name: normalizeId(addon.name) || id,
        directoryName: normalizeId(addon.directoryName) || id,
        ...(typeof addon.version === 'string' ? { version: addon.version } : {}),
        ...(normalizeId(addon.fingerprint) ? { fingerprint: normalizeId(addon.fingerprint) } : {}),
        css: typeof addon.css === 'string' ? addon.css : '',
    }

    if (addon.type === 'theme') {
        if (!baseAsset.css.trim() || baseAsset.css.trim() === '{}') {
            return null
        }

        if (typeof addon.code === 'string' && addon.code.trim()) {
            return null
        }

        return { ...baseAsset, type: 'theme', cssScope: 'global' }
    }

    if (addon.type !== undefined && addon.type !== 'web-addon') {
        return null
    }

    const code = typeof addon.code === 'string' ? addon.code : ''

    if (!code.trim()) {
        return null
    }

    return {
        ...baseAsset,
        type: 'web-addon',
        code,
        requirements: addon.requirements,
        cssScope:
            addon.cssScope === 'addon' ||
            (addon.cssScope !== 'global' && addon.requirements?.capabilities?.includes('scoped-css-v1'))
                ? 'addon'
                : 'global',
    }
}

function normalizeSnapshot(value: unknown): WebHostAddonsSnapshot | null {
    if (!value || typeof value !== 'object') {
        return null
    }

    const snapshot = value as Partial<WebHostAddonsSnapshot>

    if (snapshot.runtime !== undefined && snapshot.runtime !== ISOLATED_ADDON_RUNTIME) {
        return null
    }

    return {
        runtime: ISOLATED_ADDON_RUNTIME,
        hash: normalizeId(snapshot.hash),
        addons: Array.isArray(snapshot.addons)
            ? snapshot.addons.map(normalizeAddon).filter((addon): addon is WebHostAsset => addon !== null)
            : [],
    }
}

export function applyWebHostAddonsSnapshot(value: unknown) {
    const snapshot = normalizeSnapshot(value)

    if (!snapshot || (snapshot.hash && snapshot.hash === lastAppliedHash)) {
        return false
    }

    snapshotRevision += 1

    const nextAddons = new Map(snapshot.addons.map(addon => [addon.id, addon]))

    for (const addonId of appliedAddons.keys()) {
        if (!nextAddons.has(addonId)) {
            removeAddon(addonId)
        }
    }

    for (const addon of nextAddons.values()) {
        const previous = appliedAddons.get(addon.id)
        const previousCode = previous?.asset.type === 'web-addon' ? previous.asset.code : ''
        const nextCode = addon.type === 'web-addon' ? addon.code : ''

        if (
            !previous ||
            previous.asset.type !== addon.type ||
            previous.asset.css !== addon.css ||
            previous.asset.cssScope !== addon.cssScope ||
            JSON.stringify(previous.asset.type === 'web-addon' ? previous.asset.requirements : undefined) !==
                JSON.stringify(addon.type === 'web-addon' ? addon.requirements : undefined) ||
            previousCode !== nextCode ||
            previous.asset.fingerprint !== addon.fingerprint
        ) {
            applyAddon(addon)
        }
    }

    lastAppliedHash = snapshot.hash
    console.info('[PulseSync WebHost] addon snapshot applied', { assets: nextAddons.size })

    return true
}
