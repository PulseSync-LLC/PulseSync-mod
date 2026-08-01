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
