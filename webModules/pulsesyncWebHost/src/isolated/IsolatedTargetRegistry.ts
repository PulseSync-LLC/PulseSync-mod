import type { Cleanup, PulseSyncAddonMountTarget, PulseSyncAddonDefinition } from '../contracts'
import { resolveStandardSlot } from '../slots'
import { resolveAddonMountTargets } from '../mountTargets'
import type { IsolatedLog } from './contracts'

export class IsolatedTargetRegistry {
    private readonly slots = new Map<string, Element>()
    private readonly onChange: () => void
    private readonly log: IsolatedLog

    constructor(onChange: () => void, log: IsolatedLog) {
        this.onChange = onChange
        this.log = log
    }

    registerSlot(slotName: string, element: Element): Cleanup {
        const normalizedName = String(slotName ?? '').trim()

        if (!normalizedName || !(element instanceof Element)) {
            throw new Error('PulseSync isolated slot requires a name and DOM element')
        }

        this.slots.set(normalizedName, element)
        this.onChange()

        return () => {
            if (this.slots.get(normalizedName) !== element) {
                return
            }

            this.slots.delete(normalizedName)
            this.onChange()
        }
    }

    resolveSlot(slotName: string): Element | null {
        const registered = this.slots.get(slotName)

        if (registered?.isConnected) {
            return registered
        }

        if (registered) {
            this.slots.delete(slotName)
        }

        const declared = document.querySelector(`[data-pulsesync-slot="${CSS.escape(slotName)}"]`)

        if (declared) {
            return declared
        }

        const registeredMarker = document.querySelector(`[data-pulsesync-slots~="${CSS.escape(slotName)}"]`)

        if (registeredMarker) {
            return registeredMarker
        }

        return resolveStandardSlot(slotName)
    }

    resolveMountTargets(target: PulseSyncAddonMountTarget): Element[] {
        return resolveAddonMountTargets(
            target,
            slot => this.resolveSlot(slot),
            error => {
                this.log('warn', [
                    'Failed to resolve addon mount target',
                    error instanceof Error ? error.message : String(error),
                ])
            },
        )
    }

    resolveMountTarget(target: PulseSyncAddonMountTarget): Element | null {
        return this.resolveMountTargets(target)[0] ?? null
    }

    clear() {
        this.slots.clear()
    }

    watch(definition?: PulseSyncAddonDefinition): Cleanup {
        const slots = Object.keys(definition?.slots ?? {})
        const mounts = definition?.mounts ?? []

        if (!slots.length && !mounts.length) {
            return () => {}
        }

        const resolve = () => [
            ...slots.map(slot => this.resolveSlot(slot)),
            ...mounts.flatMap(mount => [...this.resolveMountTargets(mount.target), null]),
        ]
        let previous = resolve()
        let frame = 0
        const observer = new MutationObserver(records => {
            if (
                records.every(
                    record => record.target instanceof Element && record.target.closest('[data-pulsesync-addon-scope]'),
                )
            ) {
                return
            }

            if (frame) {
                return
            }

            frame = requestAnimationFrame(() => {
                frame = 0

                const current = resolve()

                if (current.length !== previous.length || current.some((target, index) => target !== previous[index])) {
                    previous = current
                    observe()
                    this.onChange()
                }
            })
        })
        const observe = () => {
            observer.disconnect()

            if (mounts.length || previous.some(target => !target)) {
                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    ...(mounts.length
                        ? {}
                        : {
                              attributeFilter: [
                                  'data-pulsesync-slot',
                                  'data-pulsesync-slots',
                                  'data-test-id',
                                  'class',
                                  'id',
                              ],
                          }),
                })

                return
            }

            const ancestors = new Set<Element>()

            for (const target of previous) {
                let ancestor = target

                while (ancestor) {
                    ancestors.add(ancestor)
                    ancestor = ancestor.parentElement
                }
            }

            for (const ancestor of ancestors) {
                observer.observe(ancestor, {
                    childList: true,
                    attributes: true,
                    attributeFilter: ['data-pulsesync-slot', 'data-pulsesync-slots', 'data-test-id', 'class', 'id'],
                })
            }
        }

        observe()

        return () => {
            observer.disconnect()
            cancelAnimationFrame(frame)
        }
    }
}
