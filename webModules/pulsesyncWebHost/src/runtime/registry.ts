import { WEB_HOST_API_VERSION } from '../constants'
import type { Cleanup, PulseSyncAddonApi, PulseSyncAddonDefinition, PulseSyncAddonMountTarget } from '../contracts'
import { createAddonApi } from './pulsesyncApi'

export type RegisteredAddon = {
    api: PulseSyncAddonApi
    cleanup?: Cleanup
    definition: PulseSyncAddonDefinition
    generation: number
}

const addons = new Map<string, RegisteredAddon>()
const slots = new Map<string, Element>()
const subscribers = new Set<() => void>()

const standardSlotSelectors: Readonly<Record<string, readonly string[]>> = {
    playerBarButton: [
        '[data-test-id="PLAYERBAR_DESKTOP"] [class*="PlayerBarDesktop_meta__"]',
        '[data-test-id="PLAYERBAR_DESKTOP"]',
    ],
}

let registryRevision = 0
let addonGeneration = 0

function emitRegistryChange() {
    registryRevision += 1
    subscribers.forEach(subscriber => subscriber())
}

export function subscribeRegistry(subscriber: () => void) {
    subscribers.add(subscriber)
    return () => {
        subscribers.delete(subscriber)
    }
}

export function getRegistryRevision() {
    return registryRevision
}

export function getRegisteredAddons(): ReadonlyMap<string, RegisteredAddon> {
    return addons
}

export function unregisterAddon(addonId: string, expectedGeneration?: number) {
    const addon = addons.get(addonId)
    if (!addon) return false
    if (expectedGeneration !== undefined && addon.generation !== expectedGeneration) return false

    addons.delete(addonId)

    try {
        addon.cleanup?.()
    } catch (error) {
        addon.api.logger.error('Cleanup failed', error)
    }

    emitRegistryChange()
    return true
}

export function registerAddon(definition: PulseSyncAddonDefinition) {
    const addonId = String(definition?.id ?? '').trim()
    if (!addonId) throw new Error('PulseSync addon id is required')

    const apiVersion = definition.apiVersion ?? WEB_HOST_API_VERSION
    if (apiVersion !== WEB_HOST_API_VERSION) {
        throw new Error(`PulseSync addon ${addonId} requires unsupported WebHost API ${apiVersion}`)
    }

    unregisterAddon(addonId)

    const api = createAddonApi(addonId)
    const cleanup = definition.activate?.(api)
    const normalizedDefinition = Object.freeze({ ...definition, id: addonId })
    const generation = (addonGeneration += 1)

    addons.set(addonId, {
        api,
        cleanup: typeof cleanup === 'function' ? cleanup : undefined,
        definition: normalizedDefinition,
        generation,
    })

    emitRegistryChange()

    let active = true
    return () => {
        if (!active) return
        active = false
        unregisterAddon(addonId, generation)
    }
}

export function registerSlot(slotName: string, element: Element) {
    const normalizedName = String(slotName ?? '').trim()
    if (!normalizedName) throw new Error('PulseSync slot name is required')
    if (!(element instanceof Element)) throw new Error(`PulseSync slot ${normalizedName} requires a DOM element`)

    slots.set(normalizedName, element)
    emitRegistryChange()

    return () => {
        if (slots.get(normalizedName) !== element) return
        slots.delete(normalizedName)
        emitRegistryChange()
    }
}

export function resolveSlot(slotName: string) {
    const registeredSlot = slots.get(slotName)
    if (registeredSlot?.isConnected) return registeredSlot
    if (registeredSlot) slots.delete(slotName)

    const declaredSlot = document.querySelector(`[data-pulsesync-slot="${CSS.escape(slotName)}"]`)
    if (declaredSlot) return declaredSlot

    for (const selector of standardSlotSelectors[slotName] ?? []) {
        const target = document.querySelector(selector)
        if (target) return target
    }

    return null
}

export function resolveMountTarget(target: PulseSyncAddonMountTarget): Element | null {
    try {
        if (target instanceof Element) return target.isConnected ? target : null
        if (typeof target === 'string') return document.querySelector(target)
        if (typeof target === 'function') {
            const resolved = target()
            return resolved?.isConnected ? resolved : null
        }
        if ('selector' in target) return document.querySelector(target.selector)
        if ('slot' in target) return resolveSlot(target.slot)
    } catch (error) {
        console.warn('[PulseSync WebHost] Failed to resolve addon mount target:', error)
    }

    return null
}
