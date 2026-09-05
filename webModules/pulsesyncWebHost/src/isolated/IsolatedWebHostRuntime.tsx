import React from 'react'
import { createRoot, type Root } from 'react-dom/client'
import * as jsxDevRuntime from 'react/jsx-dev-runtime'
import * as jsxRuntime from 'react/jsx-runtime'
import { WEB_HOST_API_VERSION } from '../constants'
import type { Cleanup, PulseSyncAddonDefinition, PulseSyncAddonFactory, PulseSyncWebHostApi } from '../contracts'
import { IsolatedAddonHost } from './IsolatedAddonHost'
import { IsolatedBridge } from './IsolatedBridge'
import type { IsolatedInit, IsolatedWindow } from './contracts'
import { IsolatedTargetRegistry } from './IsolatedTargetRegistry'
import { installIsolatedDomExecutionPolicy } from './domExecutionPolicy'
import { clearAddonModalSessions } from '../runtime/addonModals'

export class IsolatedWebHostRuntime {
    private readonly isolatedWindow: IsolatedWindow
    private readonly init: IsolatedInit
    private readonly bridge: IsolatedBridge
    private readonly targets: IsolatedTargetRegistry
    private readonly hostApi: PulseSyncWebHostApi
    private readonly addonQueue: PulseSyncAddonFactory[]
    private addonCleanup?: Cleanup
    private currentDefinition?: PulseSyncAddonDefinition
    private definitionGeneration = 0
    private reactRoot?: Root
    private rootContainer?: HTMLDivElement
    private started = false
    private disposed = false
    private registrationReported = false

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
                    void this.hostApi.installAddon(factory).catch(error => this.bridge.reportError('addon-registration-failed', error))
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
                addonApi={this.bridge.addonApi}
                definition={this.currentDefinition}
                generation={this.definitionGeneration}
                log={(level, args) => this.bridge.log(level, args)}
                targets={this.targets}
            />,
        )
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
        let cleanup: void | Cleanup
        try {
            cleanup = definition.activate?.(this.bridge.addonApi)
        } catch (error) {
            clearAddonModalSessions(this.bridge.addonApi.modals)
            throw error
        }
        this.addonCleanup = typeof cleanup === 'function' ? cleanup : undefined
        this.currentDefinition = Object.freeze({ ...definition, id: addonId })
        this.definitionGeneration += 1
        const generation = this.definitionGeneration
        this.renderDefinition()
        if (!this.registrationReported) {
            this.registrationReported = true
            this.bridge.reportReady()
        }

        let active = true
        return () => {
            if (!active) return
            active = false
            if (generation === this.definitionGeneration) this.unregisterCurrentAddon()
        }
    }

    private unregisterCurrentAddon(): boolean {
        const hadDefinition = Boolean(this.currentDefinition || this.addonCleanup)
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

        document.removeEventListener(this.bridge.eventName('dispose'), this.dispose)
        this.unregisterCurrentAddon()
        this.reactRoot?.unmount()
        this.reactRoot = undefined
        this.rootContainer?.remove()
        this.rootContainer = undefined
        this.targets.clear()
        this.bridge.dispose()

        delete this.isolatedWindow.__PULSESYNC_WEB_HOST__
        delete this.isolatedWindow.__PULSESYNC_ADDON_QUEUE__
        delete this.isolatedWindow.pulsesyncApi
        delete this.isolatedWindow.__PULSESYNC_ISOLATED_RUNTIME_READY__
        delete this.isolatedWindow.__PULSESYNC_ISOLATED_DISPOSE__
    }
}
