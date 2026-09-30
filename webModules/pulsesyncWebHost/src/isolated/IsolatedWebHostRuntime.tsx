import React from 'react'
import { createRoot, type Root } from 'react-dom/client'
import * as jsxDevRuntime from 'react/jsx-dev-runtime'
import * as jsxRuntime from 'react/jsx-runtime'
import { WEB_HOST_API_VERSION } from '../constants'
import type { Cleanup, PulseSyncAddonDefinition, PulseSyncAddonFactory, PulseSyncWebHostApi } from '../contracts'
import { clearAddonModalSessions } from '../runtime/addonModals'
import { createAddonLifecycle } from '../runtime/addonLifecycle'
import { createAddonAssets, createAddonNamespaces } from '../runtime/addonResources'
import { createAddonNet } from '../runtime/addonNet'
import { IsolatedAddonHost } from './IsolatedAddonHost'
import { IsolatedBridge } from './IsolatedBridge'
import { IsolatedTargetRegistry } from './IsolatedTargetRegistry'
import { IsolatedModuleRuntime } from './IsolatedModuleRuntime'
import type { IsolatedInit, IsolatedWindow } from './contracts'
import { installIsolatedDomExecutionPolicy } from './domExecutionPolicy'

const REGISTRATION_STABILIZATION_MS = 500

export class IsolatedWebHostRuntime {
    private readonly isolatedWindow: IsolatedWindow
    private readonly init: IsolatedInit
    private readonly bridge: IsolatedBridge
    private readonly targets: IsolatedTargetRegistry
    private readonly hostApi: PulseSyncWebHostApi
    private readonly addonQueue: PulseSyncAddonFactory[]
    private addonCleanup?: Cleanup
    private activation?: AbortController
    private activationApi?: typeof this.bridge.addonApi
    private currentDefinition?: PulseSyncAddonDefinition
    private definitionGeneration = 0
    private reactRoot?: Root
    private rootContainer?: HTMLDivElement
    private started = false
    private disposed = false
    private registrationReported = false
    private registrationFailed = false
    private registrationTimer = 0
    private modules?: IsolatedModuleRuntime

    constructor(isolatedWindow: IsolatedWindow, init: IsolatedInit) {
        this.isolatedWindow = isolatedWindow
        this.init = init
        this.bridge = new IsolatedBridge(init)
        this.targets = new IsolatedTargetRegistry(
            () => this.renderDefinition(),
            (level, args) => this.bridge.log(level, args),
        )
        this.hostApi = this.createHostApi()
        this.addonQueue = this.createAddonQueue()
    }

    start() {
        if (this.started || this.disposed) return
        this.started = true
        installIsolatedDomExecutionPolicy()
        this.bridge.start()
        if (this.init.modules) {
            if (!this.isolatedWindow.__PULSESYNC_MODULES__) throw new Error('PulseSync modules: unsupported-host')
            this.modules = new IsolatedModuleRuntime(this.isolatedWindow.__PULSESYNC_MODULES__, this.init.modules, this.bridge.addonApi)
            this.defineGlobal(
                '__PULSESYNC_MODULE_RUNTIME__',
                Object.freeze({
                    register: this.modules.register,
                    load: this.modules.load,
                    instantiateWasm: this.modules.instantiateWasm,
                }),
            )
        }

        this.defineGlobal('pulsesyncApi', this.bridge.pulsesyncApi)
        this.defineGlobal('__PULSESYNC_WEB_HOST__', this.hostApi)
        this.defineGlobal('__PULSESYNC_ADDON_QUEUE__', this.addonQueue)
        this.defineGlobal('__PULSESYNC_ISOLATED_DISPOSE__', this.dispose)
        document.addEventListener(this.bridge.eventName('dispose'), this.dispose)
    }

    private defineGlobal(name: keyof IsolatedWindow, value: unknown) {
        Object.defineProperty(this.isolatedWindow, name, {
            value,
            configurable: true,
            enumerable: false,
            writable: false,
        })
    }

    private createHostApi(): PulseSyncWebHostApi {
        let hostApi: PulseSyncWebHostApi
        hostApi = Object.freeze({
            apiVersion: WEB_HOST_API_VERSION,
            capabilities: this.init.capabilities ?? [],
            React,
            jsxRuntime,
            jsxDevRuntime,
            registerAddon: definition => this.registerAddon(definition),
            unregisterAddon: addonId => String(addonId) === this.init.addon.id && this.unregisterCurrentAddon(),
            registerSlot: (slotName, element) => this.targets.registerSlot(slotName, element),
            getPulseSyncApi: () => this.bridge.pulsesyncApi,
            installAddon: async factory => {
                if (typeof factory !== 'function') throw new TypeError('PulseSync addon factory must be a function')
                const definition = await factory(hostApi)
                return definition ? this.registerAddon(definition) : undefined
            },
        })
        return hostApi
    }

    private createAddonQueue(): PulseSyncAddonFactory[] {
        const queue: PulseSyncAddonFactory[] = []
        Object.defineProperty(queue, 'push', {
            value: (...factories: PulseSyncAddonFactory[]) => {
                factories.forEach(factory => {
                    void this.hostApi.installAddon(factory).catch(error => this.reportRuntimeError('addon-registration-failed', error))
                })
                return factories.length
            },
            configurable: false,
            enumerable: false,
            writable: false,
        })
        return queue
    }

    private ensureReactRoot(): Root {
        if (this.reactRoot) return this.reactRoot

        this.rootContainer = document.createElement('div')
        this.rootContainer.dataset.pulsesyncIsolatedRoot = this.init.addon.id
        this.rootContainer.dataset.pulsesyncAddonScope = this.init.addon.id
        this.rootContainer.style.display = 'contents'
        ;(document.body || document.documentElement).append(this.rootContainer)
        this.reactRoot = createRoot(this.rootContainer)
        return this.reactRoot
    }

    private renderDefinition() {
        if (this.disposed) return
        this.ensureReactRoot().render(
            <IsolatedAddonHost
                addonId={this.init.addon.id}
                addonApi={this.activationApi ?? this.bridge.addonApi}
                definition={this.currentDefinition}
                generation={this.definitionGeneration}
                reportError={this.reportRuntimeError}
                targets={this.targets}
            />,
        )
    }

    private clearRegistrationTimer() {
        if (!this.registrationTimer) return
        window.clearTimeout(this.registrationTimer)
        this.registrationTimer = 0
    }

    private scheduleRegistrationReady() {
        if (this.registrationReported || this.registrationFailed || this.disposed) return
        this.clearRegistrationTimer()
        this.registrationTimer = window.setTimeout(() => {
            this.registrationTimer = 0
            if (this.registrationReported || this.registrationFailed || this.disposed || !this.currentDefinition) return
            this.registrationReported = true
            this.bridge.reportReady()
        }, REGISTRATION_STABILIZATION_MS)
    }

    private readonly reportRuntimeError = (category: string, error: unknown) => {
        if (!this.registrationReported) {
            this.registrationFailed = true
            this.clearRegistrationTimer()
        }
        this.bridge.reportError(category, error)
    }

    private registerAddon(definition: PulseSyncAddonDefinition): Cleanup {
        if (this.disposed) throw new Error('PulseSync isolated addon disposed')

        const addonId = String(definition?.id ?? '').trim()
        if (addonId !== this.init.addon.id) throw new Error(`PulseSync isolated addon id mismatch: ${addonId || '<empty>'}`)
        const apiVersion = definition.apiVersion ?? WEB_HOST_API_VERSION
        if (apiVersion !== WEB_HOST_API_VERSION) {
            throw new Error(`PulseSync isolated runtime does not support addon API ${definition.apiVersion}`)
        }

        this.unregisterCurrentAddon()
        const activation = new AbortController()
        this.activation = activation
        const generation = ++this.definitionGeneration
        const signal = AbortSignal.any([activation.signal, this.bridge.addonApi.signal])
        const api = Object.freeze({
            ...this.bridge.addonApi,
            ...createAddonLifecycle(signal),
            ...createAddonNamespaces(this.bridge.pulsesyncApi, undefined, signal),
            assets: createAddonAssets(addonId, signal),
            net: createAddonNet(signal),
        })
        this.activationApi = api
        let cleanup: void | Cleanup | Promise<void | Cleanup>
        try {
            cleanup = definition.activate?.(api)
        } catch (error) {
            activation.abort()
            clearAddonModalSessions(api.modals)
            this.activation = undefined
            this.activationApi = undefined
            throw error
        }
        const complete = (result: void | Cleanup) => {
            if (this.disposed || signal.aborted || generation !== this.definitionGeneration) {
                if (typeof result === 'function') result()
                return
            }
            this.addonCleanup = typeof result === 'function' ? result : undefined
            this.currentDefinition = Object.freeze({ ...definition, id: addonId })
            this.renderDefinition()
            this.scheduleRegistrationReady()
        }
        if (cleanup && typeof cleanup !== 'function') {
            void Promise.resolve(cleanup)
                .then(complete)
                .catch(error => {
                    if (signal.aborted || generation !== this.definitionGeneration) return
                    this.unregisterCurrentAddon()
                    this.reportRuntimeError('addon-registration-failed', error)
                })
        } else complete(cleanup)

        let active = true
        return () => {
            if (!active) return
            active = false
            if (generation === this.definitionGeneration) this.unregisterCurrentAddon()
        }
    }

    private unregisterCurrentAddon(): boolean {
        this.activation?.abort(new DOMException('Addon disabled', 'AbortError'))
        this.activation = undefined
        if (this.activationApi) clearAddonModalSessions(this.activationApi.modals)
        this.activationApi = undefined
        const hadDefinition = Boolean(this.currentDefinition || this.addonCleanup)
        if (!this.registrationReported) this.clearRegistrationTimer()
        clearAddonModalSessions(this.bridge.addonApi.modals)
        try {
            this.addonCleanup?.()
        } catch (error) {
            this.bridge.log('error', ['Addon cleanup failed', error instanceof Error ? error.message : String(error)])
        }

        this.addonCleanup = undefined
        this.currentDefinition = undefined
        this.definitionGeneration += 1
        if (this.reactRoot && !this.disposed) this.renderDefinition()
        return hadDefinition
    }

    readonly dispose = () => {
        if (this.disposed) return
        this.disposed = true
        this.clearRegistrationTimer()

        document.removeEventListener(this.bridge.eventName('dispose'), this.dispose)
        this.modules?.dispose()
        this.unregisterCurrentAddon()
        this.reactRoot?.unmount()
        this.reactRoot = undefined
        this.rootContainer?.remove()
        this.rootContainer = undefined
        this.targets.clear()
        this.bridge.dispose()

        delete this.isolatedWindow.__PULSESYNC_WEB_HOST__
        delete this.isolatedWindow.__PULSESYNC_MODULE_RUNTIME__
        delete this.isolatedWindow.__PULSESYNC_ADDON_QUEUE__
        delete this.isolatedWindow.pulsesyncApi
        delete this.isolatedWindow.__PULSESYNC_ISOLATED_RUNTIME_READY__
        delete this.isolatedWindow.__PULSESYNC_ISOLATED_DISPOSE__
    }
}
