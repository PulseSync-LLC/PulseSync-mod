import React from 'react'
import * as jsxDevRuntime from 'react/jsx-dev-runtime'
import * as jsxRuntime from 'react/jsx-runtime'
import { WEB_HOST_API_VERSION } from '../constants'
import type { PulseSyncWebHostApi } from '../contracts'
import { getPulseSyncApi } from './pulsesyncApi'
import { registerAddon, registerSlot, unregisterAddon } from './registry'

export function createWebHostApi(): PulseSyncWebHostApi {
    const hostApi: PulseSyncWebHostApi = Object.freeze({
        apiVersion: WEB_HOST_API_VERSION,
        get capabilities() {
            const capabilities = ['typed-settings-v1', 'lifecycle-v1', 'async-start-v1', 'net-per-addon-v1', 'scoped-css-v1', 'native-ui-v2']
            const api = getPulseSyncApi()
            if (['setMetadataOverrides', 'removeMetadataOverride', 'clearMetadataOverrides'].every(method => typeof api?.[method] === 'function')) {
                capabilities.push('metadata-overrides-v1')
            }
            if (typeof api?.setLibraryOverrides === 'function') capabilities.push('library-overrides-v1')
            if (typeof api?.readResource === 'function') capabilities.push('resource-read-v1')
            if (typeof api?.registerResourceHook === 'function') capabilities.push('resource-hooks-v1')
            return Object.freeze(capabilities)
        },
        React,
        jsxRuntime,
        jsxDevRuntime,
        registerAddon,
        unregisterAddon,
        registerSlot,
        getPulseSyncApi,
        async installAddon(factory) {
            if (typeof factory !== 'function') throw new TypeError('PulseSync addon factory must be a function')
            const definition = await factory(hostApi)
            return definition ? registerAddon(definition) : undefined
        },
    })

    return hostApi
}
