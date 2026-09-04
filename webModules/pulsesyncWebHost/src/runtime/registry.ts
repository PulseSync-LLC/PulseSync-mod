import { WEB_HOST_API_VERSION } from '../constants'
import type { Cleanup, PulseSyncAddonApi, PulseSyncAddonDefinition, PulseSyncAddonMountTarget } from '../contracts'
import { resolveStandardSlot } from '../slots'
import { createAddonApi } from './pulsesyncApi'

export type RegisteredAddon = {
    api: PulseSyncAddonApi
    lifetime: AbortController
    cleanup?: Cleanup
    definition: PulseSyncAddonDefinition
    generation: number
    system: boolean
}

const addons = new Map<string, RegisteredAddon>()
const slots = new Map<string, Element>()
const subscribers = new Set<() => void>()
const SLOT_MARKER_ATTRIBUTE = 'data-pulsesync-slots'

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

function unregisterAddonInternal(addonId: string, expectedGeneration: number | undefined, allowSystem: boolean) {
    const addon = addons.get(addonId)
    if (!addon) return false
    if (expectedGeneration !== undefined && addon.generation !== expectedGeneration) return false
    if (addon.system && !allowSystem) return false

    addons.delete(addonId)
    addon.lifetime.abort(new DOMException('Addon disabled', 'AbortError'))

    try {
        addon.cleanup?.()
    } catch (error) {
        addon.api.logger.error('Cleanup failed', error)
    }

    emitRegistryChange()
    return true
}

export function unregisterAddon(addonId: string, expectedGeneration?: number) {
    return unregisterAddonInternal(addonId, expectedGeneration, false)
}

function registerAddonInternal(definition: PulseSyncAddonDefinition, system: boolean) {
    const addonId = String(definition?.id ?? '').trim()
    if (!addonId) throw new Error('PulseSync addon id is required')

    const apiVersion = definition.apiVersion ?? WEB_HOST_API_VERSION
    if (apiVersion !== WEB_HOST_API_VERSION) {
        throw new Error(`PulseSync addon ${addonId} requires unsupported WebHost API ${apiVersion}`)
    }

    const registeredAddon = addons.get(addonId)
    if (registeredAddon?.system && !system) throw new Error(`PulseSync addon id ${addonId} is reserved by a system addon`)
    unregisterAddonInternal(addonId, undefined, system)

    const normalizedDefinition = Object.freeze({ ...definition, id: addonId })
    const lifetime = new AbortController()
    const api = createAddonApi(normalizedDefinition, lifetime.signal)
    let cleanup: void | Cleanup
    try {
        cleanup = definition.activate?.(api)
    } catch (error) {
        lifetime.abort(new DOMException('Addon activation failed', 'AbortError'))
        throw error
    }
    const generation = (addonGeneration += 1)

    addons.set(addonId, {
        api,
        lifetime,
        cleanup: typeof cleanup === 'function' ? cleanup : undefined,
        definition: normalizedDefinition,
        generation,
        system,
    })

    emitRegistryChange()

    let active = true
    return () => {
        if (!active) return
        active = false
        unregisterAddonInternal(addonId, generation, system)
    }
}

export function registerAddon(definition: PulseSyncAddonDefinition) {
    return registerAddonInternal(definition, false)
}

export function registerSystemAddon(definition: PulseSyncAddonDefinition) {
    return registerAddonInternal(definition, true)
}

export function registerSlot(slotName: string, element: Element) {
    const normalizedName = String(slotName ?? '').trim()
    if (!normalizedName) throw new Error('PulseSync slot name is required')
    if (!(element instanceof Element)) throw new Error(`PulseSync slot ${normalizedName} requires a DOM element`)

    const previousElement = slots.get(normalizedName)
    if (previousElement && previousElement !== element) updateSlotMarker(previousElement, normalizedName, false)
    slots.set(normalizedName, element)
    updateSlotMarker(element, normalizedName, true)
    emitRegistryChange()

    return () => {
        if (slots.get(normalizedName) !== element) return
        slots.delete(normalizedName)
        updateSlotMarker(element, normalizedName, false)
        emitRegistryChange()
    }
}

function updateSlotMarker(element: Element, slotName: string, present: boolean) {
    const slotNames = new Set((element.getAttribute(SLOT_MARKER_ATTRIBUTE) ?? '').split(/\s+/).filter(Boolean))
    if (present) slotNames.add(slotName)
    else slotNames.delete(slotName)

    if (slotNames.size) element.setAttribute(SLOT_MARKER_ATTRIBUTE, [...slotNames].join(' '))
    else element.removeAttribute(SLOT_MARKER_ATTRIBUTE)
}

export function resolveSlot(slotName: string) {
    const registeredSlot = slots.get(slotName)
    if (registeredSlot?.isConnected) return registeredSlot
    if (registeredSlot) slots.delete(slotName)

    const declaredSlot = document.querySelector(`[data-pulsesync-slot="${CSS.escape(slotName)}"]`)
    if (declaredSlot) return declaredSlot

    const registeredMarker = document.querySelector(`[${SLOT_MARKER_ATTRIBUTE}~="${CSS.escape(slotName)}"]`)
    if (registeredMarker) return registeredMarker

    return resolveStandardSlot(slotName)
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
