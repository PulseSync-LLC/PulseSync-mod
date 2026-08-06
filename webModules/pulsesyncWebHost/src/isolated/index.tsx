import React, { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { createRoot, type Root } from 'react-dom/client'
import * as jsxDevRuntime from 'react/jsx-dev-runtime'
import * as jsxRuntime from 'react/jsx-runtime'

type Cleanup = () => void
type AddonAsset = { id: string; name: string; directoryName: string; version?: string }
type AddonApi = {
    readonly addonId: string
    readonly pulsesyncApi: Record<string, unknown>
    readonly logger: {
        info: (...args: unknown[]) => void
        warn: (...args: unknown[]) => void
        error: (...args: unknown[]) => void
    }
}
type AddonComponent = React.ComponentType<{ addonId: string; api: AddonApi }>
type AddonMountTarget = Element | string | (() => Element | null) | { selector: string } | { slot: string }
type AddonDefinition = {
    id: string
    apiVersion?: number
    component?: AddonComponent
    slots?: Record<string, AddonComponent>
    mounts?: Array<{ target: AddonMountTarget; component: AddonComponent }>
    activate?: (api: AddonApi) => void | Cleanup
}
type AddonFactory = (host: IsolatedWebHostApi) => void | AddonDefinition | Promise<void | AddonDefinition>
type IsolatedWebHostApi = {
    readonly apiVersion: number
    readonly React: typeof React
    readonly jsxRuntime: typeof jsxRuntime
    readonly jsxDevRuntime: typeof jsxDevRuntime
    installAddon: (factory: AddonFactory) => Promise<Cleanup | undefined>
    registerAddon: (definition: AddonDefinition) => Cleanup
    unregisterAddon: (addonId: string) => boolean
    registerSlot: (slotName: string, element: Element) => Cleanup
    getPulseSyncApi: () => Record<string, unknown>
}
type IsolatedInit = {
    addon: AddonAsset
    apiMethods: string[]
    initialSettings: unknown
    channelToken: string
}
type ApiResponse = { requestId: number; ok: boolean; value?: unknown; message?: string }

type IsolatedWindow = Window & {
    __PULSESYNC_ISOLATED_INIT__?: IsolatedInit
    __PULSESYNC_ISOLATED_DISPOSE__?: Cleanup
    __PULSESYNC_WEB_HOST__?: IsolatedWebHostApi
    __PULSESYNC_ADDON_QUEUE__?: AddonFactory[]
    pulsesyncApi?: Record<string, unknown>
}

const isolatedWindow = window as IsolatedWindow
isolatedWindow.__PULSESYNC_ISOLATED_DISPOSE__?.()

const initialState = isolatedWindow.__PULSESYNC_ISOLATED_INIT__
if (!initialState) throw new Error('PulseSync isolated addon init is missing')
const init: IsolatedInit = initialState
delete isolatedWindow.__PULSESYNC_ISOLATED_INIT__

const eventName = (kind: 'request' | 'response' | 'settings' | 'dispose' | 'status') => `pulsesync-isolated:${init.channelToken}:${kind}`
const pendingCalls = new Map<number, { resolve: (value: unknown) => void; reject: (error: Error) => void; timeout: number }>()
const settingsListeners = new Set<(value: unknown) => void>()
const registeredSlots = new Map<string, Element>()
const allowedMethods = new Set(init.apiMethods)
let currentSettings = init.initialSettings ?? {}
let nextRequestId = 0
let addonCleanup: Cleanup | undefined
let currentDefinition: AddonDefinition | undefined
let definitionGeneration = 0
let reactRoot: Root | undefined
let rootContainer: HTMLDivElement | undefined
let disposed = false

function dispatch(kind: 'request' | 'status', value: unknown) {
    if (disposed) return
    document.dispatchEvent(new CustomEvent(eventName(kind), { detail: JSON.stringify(value) }))
}

function log(level: 'info' | 'warn' | 'error', args: unknown[]) {
    dispatch('status', { type: 'log', level, args })
}

function callApi(method: string, args: unknown[]) {
    if (!allowedMethods.has(method)) return Promise.reject(new Error(`PulseSync addon API method is not allowed: ${method}`))
    const requestId = (nextRequestId += 1)

    return new Promise<unknown>((resolve, reject) => {
        const timeout = window.setTimeout(() => {
            pendingCalls.delete(requestId)
            reject(new Error(`PulseSync addon API call timed out: ${method}`))
        }, 15_000)
        pendingCalls.set(requestId, { resolve, reject, timeout })

        try {
            dispatch('request', { requestId, method, args })
        } catch (error) {
            pendingCalls.delete(requestId)
            window.clearTimeout(timeout)
            reject(error instanceof Error ? error : new Error(String(error)))
        }
    })
}

const settingsStore = Object.freeze({
    getCurrent: () => currentSettings,
    onChange(listener: (value: unknown) => void) {
        if (typeof listener !== 'function') return () => {}
        settingsListeners.add(listener)
        return () => settingsListeners.delete(listener)
    },
})

const pulsesyncApi = Object.freeze(
    new Proxy(Object.create(null) as Record<string, unknown>, {
        get(_target, property) {
            if (property === 'getSettings') {
                return (addonId?: unknown) => {
                    if (addonId !== undefined && String(addonId) !== init.addon.id) throw new Error('PulseSync addon can only access its own settings')
                    return settingsStore
                }
            }
            if (property === 'then' || typeof property !== 'string' || !allowedMethods.has(property)) return undefined
            return (...args: unknown[]) => callApi(property, args)
        },
        has(_target, property) {
            return property === 'getSettings' || (typeof property === 'string' && allowedMethods.has(property))
        },
    }),
)

Object.defineProperty(isolatedWindow, 'pulsesyncApi', {
    value: pulsesyncApi,
    configurable: true,
    enumerable: false,
    writable: false,
})

const addonApi: AddonApi = Object.freeze({
    addonId: init.addon.id,
    pulsesyncApi,
    logger: Object.freeze({
        info: (...args: unknown[]) => log('info', args),
        warn: (...args: unknown[]) => log('warn', args),
        error: (...args: unknown[]) => log('error', args),
    }),
})

const standardSlotSelectors: Readonly<Record<string, readonly string[]>> = {
    playerBarButton: ['[data-test-id="PLAYERBAR_DESKTOP"] [class*="PlayerBarDesktop_meta__"]', '[data-test-id="PLAYERBAR_DESKTOP"]'],
}

function resolveSlot(slotName: string) {
    const registered = registeredSlots.get(slotName)
    if (registered?.isConnected) return registered
    if (registered) registeredSlots.delete(slotName)

    const declared = document.querySelector(`[data-pulsesync-slot="${CSS.escape(slotName)}"]`)
    if (declared) return declared

    const registeredMarker = document.querySelector(`[data-pulsesync-slots~="${CSS.escape(slotName)}"]`)
    if (registeredMarker) return registeredMarker

    for (const selector of standardSlotSelectors[slotName] ?? []) {
        const target = document.querySelector(selector)
        if (target) return target
    }
    return null
}

function resolveMountTarget(target: AddonMountTarget) {
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
        log('warn', ['Failed to resolve addon mount target', error instanceof Error ? error.message : String(error)])
    }
    return null
}

class AddonErrorBoundary extends React.Component<{ children: ReactNode }, { failed: boolean }> {
    state = { failed: false }

    static getDerivedStateFromError() {
        return { failed: true }
    }

    componentDidCatch(error: Error) {
        log('error', ['React render failed', error.message, error.stack])
    }

    render() {
        return this.state.failed ? null : this.props.children
    }
}

function IsolatedAddonHost({ definition, generation }: { definition?: AddonDefinition; generation: number }) {
    const [, setDomRevision] = useState(0)

    useEffect(() => {
        let animationFrame = 0
        const observer = new MutationObserver(() => {
            cancelAnimationFrame(animationFrame)
            animationFrame = requestAnimationFrame(() => setDomRevision(revision => revision + 1))
        })
        observer.observe(document.body, { childList: true, subtree: true })
        return () => {
            cancelAnimationFrame(animationFrame)
            observer.disconnect()
        }
    }, [])

    if (!definition) return null
    const content: ReactNode[] = []
    const RootComponent = definition.component
    if (RootComponent) {
        content.push(
            <AddonErrorBoundary key={`${generation}:component`}>
                <RootComponent addonId={init.addon.id} api={addonApi} />
            </AddonErrorBoundary>,
        )
    }

    Object.entries(definition.slots ?? {}).forEach(([slotName, Component]) => {
        const target = resolveSlot(slotName)
        if (!target || !Component) return
        content.push(
            createPortal(
                <AddonErrorBoundary>
                    <Component addonId={init.addon.id} api={addonApi} />
                </AddonErrorBoundary>,
                target,
                `${generation}:slot:${slotName}`,
            ),
        )
    })

    definition.mounts?.forEach((mount, index) => {
        const target = resolveMountTarget(mount.target)
        if (!target || !mount.component) return
        const Component = mount.component
        content.push(
            createPortal(
                <AddonErrorBoundary>
                    <Component addonId={init.addon.id} api={addonApi} />
                </AddonErrorBoundary>,
                target,
                `${generation}:mount:${index}`,
            ),
        )
    })

    return <>{content}</>
}

function ensureReactRoot() {
    if (reactRoot) return reactRoot
    rootContainer = document.createElement('div')
    rootContainer.dataset.pulsesyncIsolatedRoot = init.addon.id
    rootContainer.style.display = 'contents'
    ;(document.body || document.documentElement).append(rootContainer)
    reactRoot = createRoot(rootContainer)
    return reactRoot
}

function renderDefinition() {
    ensureReactRoot().render(<IsolatedAddonHost definition={currentDefinition} generation={definitionGeneration} />)
}

function unregisterCurrentAddon() {
    const hadDefinition = Boolean(currentDefinition || addonCleanup)
    try {
        addonCleanup?.()
    } catch (error) {
        log('error', ['Addon cleanup failed', error instanceof Error ? error.message : String(error)])
    }
    addonCleanup = undefined
    currentDefinition = undefined
    definitionGeneration += 1
    if (reactRoot && !disposed) renderDefinition()
    return hadDefinition
}

function registerAddon(definition: AddonDefinition) {
    const addonId = String(definition?.id ?? '').trim()
    if (addonId !== init.addon.id) throw new Error(`PulseSync isolated addon id mismatch: ${addonId || '<empty>'}`)
    if ((definition.apiVersion ?? 1) !== 1) throw new Error(`PulseSync isolated runtime does not support addon API ${definition.apiVersion}`)

    unregisterCurrentAddon()
    const cleanup = definition.activate?.(addonApi)
    addonCleanup = typeof cleanup === 'function' ? cleanup : undefined
    currentDefinition = Object.freeze({ ...definition, id: addonId })
    definitionGeneration += 1
    renderDefinition()

    let active = true
    return () => {
        if (!active) return
        active = false
        unregisterCurrentAddon()
    }
}

let hostApi: IsolatedWebHostApi
hostApi = Object.freeze({
    apiVersion: 1,
    React,
    jsxRuntime,
    jsxDevRuntime,
    registerAddon,
    unregisterAddon: addonId => String(addonId) === init.addon.id && unregisterCurrentAddon(),
    registerSlot(slotName, element) {
        const normalizedName = String(slotName ?? '').trim()
        if (!normalizedName || !(element instanceof Element)) throw new Error('PulseSync isolated slot requires a name and DOM element')
        registeredSlots.set(normalizedName, element)
        renderDefinition()
        return () => {
            if (registeredSlots.get(normalizedName) !== element) return
            registeredSlots.delete(normalizedName)
            renderDefinition()
        }
    },
    getPulseSyncApi: () => pulsesyncApi,
    async installAddon(factory) {
        if (typeof factory !== 'function') throw new TypeError('PulseSync addon factory must be a function')
        const definition = await factory(hostApi)
        return definition ? registerAddon(definition) : undefined
    },
})

Object.defineProperty(isolatedWindow, '__PULSESYNC_WEB_HOST__', {
    value: hostApi,
    configurable: true,
    enumerable: false,
    writable: false,
})

const addonQueue: AddonFactory[] = []
Object.defineProperty(addonQueue, 'push', {
    value: (...factories: AddonFactory[]) => {
        factories.forEach(factory => void hostApi.installAddon(factory).catch(error => log('error', ['Addon installation failed', String(error)])))
        return factories.length
    },
    configurable: false,
    enumerable: false,
    writable: false,
})
Object.defineProperty(isolatedWindow, '__PULSESYNC_ADDON_QUEUE__', {
    value: addonQueue,
    configurable: true,
    enumerable: false,
    writable: false,
})

const handleResponse = (event: Event) => {
    const detail = (event as CustomEvent<unknown>).detail
    if (typeof detail !== 'string') return
    let response: ApiResponse
    try {
        response = JSON.parse(detail) as ApiResponse
    } catch {
        return
    }
    const pending = pendingCalls.get(response.requestId)
    if (!pending) return
    pendingCalls.delete(response.requestId)
    window.clearTimeout(pending.timeout)
    if (response.ok) pending.resolve(response.value)
    else pending.reject(new Error(response.message ?? 'PulseSync addon API call failed'))
}

const handleSettings = (event: Event) => {
    const detail = (event as CustomEvent<unknown>).detail
    if (typeof detail !== 'string') return
    try {
        const message = JSON.parse(detail) as { value?: unknown }
        currentSettings = message.value ?? {}
        settingsListeners.forEach(listener => listener(currentSettings))
    } catch {
        // Ignore malformed cross-world settings messages.
    }
}

const handleWindowError = (event: ErrorEvent) => dispatch('status', { type: 'error', message: event.message, stack: event.error?.stack })
const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    const reason = event.reason
    dispatch('status', { type: 'error', message: reason instanceof Error ? reason.message : String(reason), stack: reason instanceof Error ? reason.stack : undefined })
}

const dispose = () => {
    if (disposed) return
    disposed = true
    document.removeEventListener(eventName('response'), handleResponse)
    document.removeEventListener(eventName('settings'), handleSettings)
    document.removeEventListener(eventName('dispose'), dispose)
    window.removeEventListener('error', handleWindowError)
    window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    unregisterCurrentAddon()
    reactRoot?.unmount()
    reactRoot = undefined
    rootContainer?.remove()
    rootContainer = undefined
    registeredSlots.clear()
    pendingCalls.forEach(pending => {
        window.clearTimeout(pending.timeout)
        pending.reject(new Error('PulseSync isolated addon disposed'))
    })
    pendingCalls.clear()
    settingsListeners.clear()
    delete isolatedWindow.__PULSESYNC_WEB_HOST__
    delete isolatedWindow.__PULSESYNC_ADDON_QUEUE__
    delete isolatedWindow.pulsesyncApi
    delete isolatedWindow.__PULSESYNC_ISOLATED_DISPOSE__
}

Object.defineProperty(isolatedWindow, '__PULSESYNC_ISOLATED_DISPOSE__', {
    value: dispose,
    configurable: true,
    enumerable: false,
    writable: false,
})

document.addEventListener(eventName('response'), handleResponse)
document.addEventListener(eventName('settings'), handleSettings)
document.addEventListener(eventName('dispose'), dispose)

window.addEventListener('error', handleWindowError)
window.addEventListener('unhandledrejection', handleUnhandledRejection)

dispatch('status', { type: 'ready' })
