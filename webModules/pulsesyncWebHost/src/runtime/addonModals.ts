import type { ReactNode } from 'react'
import type { FormModalOptions, ModalOptions } from '@pulsesync/yamusic-types'
import type { AddonModals, PulseSyncWebHostClient, RenderModalProps } from '../contracts'

type Entry = { id: string; render: (props: RenderModalProps) => ReactNode; props: RenderModalProps }
type Store = { subscribe: (listener: () => void) => () => void; getSnapshot: () => Entry | undefined; clear: () => void }
const stores = new WeakMap<AddonModals, Store>()
export const getAddonModalStore = (modals: AddonModals) => stores.get(modals)
export const clearAddonModalSessions = (modals: AddonModals) => stores.get(modals)?.clear()

export function createAddonModals(client: PulseSyncWebHostClient, ownerId?: string, lifetime?: AbortSignal): AddonModals {
    const listeners = new Set<() => void>()
    const requests = new Set<AbortController>()
    let entry: Entry | undefined
    const notify = () => listeners.forEach(listener => listener())
    const available = () => {
        lifetime?.throwIfAborted()
        if (entry || requests.size) throw new Error('Addon already has a pending modal')
    }
    const requestModal = async <T>(call: (id: string) => Promise<T>, parent?: AbortSignal): Promise<T> => {
        lifetime?.throwIfAborted()
        parent?.throwIfAborted()
        const request = new AbortController()
        const id = crypto.randomUUID()
        const abort = () => request.abort(new DOMException('Modal cancelled', 'AbortError'))
        requests.add(request)
        parent?.addEventListener('abort', abort, { once: true })
        const cancelNative = () => { void client.closeModal(id, ownerId).catch(() => {}) }
        request.signal.addEventListener('abort', cancelNative, { once: true })
        try {
            const result = await call(id)
            request.signal.throwIfAborted()
            lifetime?.throwIfAborted()
            return result
        } catch (error) {
            if (error instanceof Error && /(?:unavailable|not allowed|not a function)/i.test(error.message)) {
                throw new Error('This modal requires a newer PulseSync mod. Update the mod, not only the SDK.', { cause: error })
            }
            throw error
        } finally {
            requests.delete(request)
            parent?.removeEventListener('abort', abort)
            request.signal.removeEventListener('abort', cancelNative)
        }
    }
    const show = (kind: 'alert' | 'confirm', options: ModalOptions, parent?: AbortSignal) => requestModal(id => client.showModal(kind, options, ownerId, id), parent)
    const showForm = (options: FormModalOptions, parent?: AbortSignal) => requestModal(id => client.showFormModal(options, ownerId, id), parent)
    const modals: AddonModals = Object.freeze({
        async alert(options) { available(); return show('alert', options) },
        async confirm(options) { available(); return show('confirm', options) },
        async form(options) { available(); return showForm(options) },
        async open(render) {
            available()
            if (typeof render !== 'function') throw new TypeError('Modal renderer must be a function')
            return new Promise<boolean>((resolve, reject) => {
                const session = new AbortController()
                const id = crypto.randomUUID()
                const finish = (value: boolean, error?: unknown) => {
                    if (entry?.id !== id) return
                    entry = undefined
                    session.abort(new DOMException('Modal closed', 'AbortError'))
                    notify()
                    if (error !== undefined) reject(error)
                    else resolve(value)
                }
                let shown = false
                entry = { id, render, props: { controller: {
                    signal: session.signal,
                    async show(kind, options) {
                        session.signal.throwIfAborted()
                        if (shown) throw new Error('Modal controller has already been shown')
                        shown = true
                        return show(kind, options, session.signal)
                    },
                    async showForm(options) {
                        session.signal.throwIfAborted()
                        if (shown) throw new Error('Modal controller has already been shown')
                        shown = true
                        return showForm(options, session.signal)
                    },
                    close: (confirmed = false) => finish(confirmed),
                    fail: error => finish(false, error instanceof Error ? error : new Error(String(error))),
                } } }
                notify()
            })
        },
    })
    const clear = () => {
        entry?.props.controller.fail(new DOMException('Addon modal session ended', 'AbortError'))
        for (const request of requests) request.abort(new DOMException('Addon disabled', 'AbortError'))
    }
    lifetime?.addEventListener('abort', clear, { once: true })
    stores.set(modals, {
        subscribe: listener => { listeners.add(listener); return () => { listeners.delete(listener) } },
        getSnapshot: () => entry,
        clear,
    })
    return modals
}
