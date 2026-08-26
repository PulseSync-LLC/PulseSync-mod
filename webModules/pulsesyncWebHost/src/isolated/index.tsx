import type { IsolatedWindow } from './contracts'
import { IsolatedWebHostRuntime } from './IsolatedWebHostRuntime'

const isolatedWindow = window as IsolatedWindow
isolatedWindow.__PULSESYNC_ISOLATED_DISPOSE__?.()

const initialState = isolatedWindow.__PULSESYNC_ISOLATED_INIT__
if (!initialState) throw new Error('PulseSync isolated addon init is missing')

delete isolatedWindow.__PULSESYNC_ISOLATED_INIT__
new IsolatedWebHostRuntime(isolatedWindow, initialState).start()
Object.defineProperty(isolatedWindow, '__PULSESYNC_ISOLATED_RUNTIME_READY__', {
    value: true,
    configurable: true,
    enumerable: false,
    writable: false,
})
