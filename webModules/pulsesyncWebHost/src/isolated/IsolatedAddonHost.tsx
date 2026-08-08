import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import type { PulseSyncAddonApi, PulseSyncAddonDefinition } from '../contracts'
import { AddonErrorBoundary } from '../components/AddonErrorBoundary'
import type { IsolatedLog } from './contracts'
import { IsolatedTargetRegistry } from './IsolatedTargetRegistry'

type IsolatedAddonHostProps = {
    addonId: string
    addonApi: PulseSyncAddonApi
    definition?: PulseSyncAddonDefinition
    generation: number
    log: IsolatedLog
    targets: IsolatedTargetRegistry
}

export function IsolatedAddonHost({ addonId, addonApi, definition, generation, log, targets }: IsolatedAddonHostProps) {
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

    const handleRenderError = (error: Error) => log('error', ['React render failed', error.message, error.stack])
    const content: ReactNode[] = []
    const RootComponent = definition.component

    if (RootComponent) {
        content.push(
            <AddonErrorBoundary key={`${generation}:component`} addonId={addonId} onError={handleRenderError}>
                <RootComponent addonId={addonId} api={addonApi} />
            </AddonErrorBoundary>,
        )
    }

    Object.entries(definition.slots ?? {}).forEach(([slotName, Component]) => {
        const target = targets.resolveSlot(slotName)
        if (!target || !Component) return

        content.push(
            createPortal(
                <AddonErrorBoundary addonId={addonId} onError={handleRenderError}>
                    <Component addonId={addonId} api={addonApi} />
                </AddonErrorBoundary>,
                target,
                `${generation}:slot:${slotName}`,
            ),
        )
    })

    definition.mounts?.forEach((mount, index) => {
        const target = targets.resolveMountTarget(mount.target)
        const Component = mount.component
        if (!target || !Component) return

        content.push(
            createPortal(
                <AddonErrorBoundary addonId={addonId} onError={handleRenderError}>
                    <Component addonId={addonId} api={addonApi} />
                </AddonErrorBoundary>,
                target,
                `${generation}:mount:${index}`,
            ),
        )
    })

    return <>{content}</>
}
