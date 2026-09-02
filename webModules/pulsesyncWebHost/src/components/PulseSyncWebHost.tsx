import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { installNativeSlotTooltips } from '../runtime/pulsesyncApi'
import { getRegisteredAddons, getRegistryRevision, resolveMountTarget, resolveSlot, subscribeRegistry } from '../runtime/registry'
import { AddonErrorBoundary } from './AddonErrorBoundary'

export function PulseSyncWebHost() {
    useSyncExternalStore(subscribeRegistry, getRegistryRevision, getRegistryRevision)
    const [, setDomRevision] = useState(0)

    useEffect(() => installNativeSlotTooltips(), [])

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

    const content: ReactNode[] = []

    getRegisteredAddons().forEach((addon, addonId) => {
        const AddonComponent = addon.definition.component
        if (AddonComponent) {
            content.push(
                <AddonErrorBoundary key={`${addonId}:component:${addon.generation}`} addonId={addonId}>
                    <AddonComponent addonId={addonId} api={addon.api} />
                </AddonErrorBoundary>,
            )
        }

        Object.entries(addon.definition.slots ?? {}).forEach(([slotName, AddonComponent]) => {
            const target = resolveSlot(slotName)
            if (!target || !AddonComponent) return

            content.push(
                createPortal(
                    <AddonErrorBoundary addonId={addonId}>
                        <AddonComponent addonId={addonId} api={addon.api} />
                    </AddonErrorBoundary>,
                    target,
                    `${addonId}:${slotName}:${addon.generation}`,
                ),
            )
        })

        addon.definition.mounts?.forEach((mount, mountIndex) => {
            const target = resolveMountTarget(mount.target)
            const MountComponent = mount.component
            if (!target || !MountComponent) return

            content.push(
                createPortal(
                    <AddonErrorBoundary addonId={addonId}>
                        <MountComponent addonId={addonId} api={addon.api} />
                    </AddonErrorBoundary>,
                    target,
                    `${addonId}:mount:${mountIndex}:${addon.generation}`,
                ),
            )
        })
    })

    return <>{content}</>
}
