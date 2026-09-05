import { useSyncExternalStore } from 'react'
import type { AddonModals as Modals, RenderModalProps } from '../contracts'
import type { ReactNode } from 'react'
import { getAddonModalStore } from '../runtime/addonModals'
import { AddonErrorBoundary } from './AddonErrorBoundary'

function RenderModal({ render, modalProps }: { render: (props: RenderModalProps) => ReactNode; modalProps: RenderModalProps }) {
    return render(modalProps)
}

export function AddonModals({ modals, addonId }: { modals: Modals; addonId: string }) {
    const store = getAddonModalStore(modals)
    if (!store) throw new Error('Addon modal store is unavailable')
    const entry = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot)
    return entry ? <AddonErrorBoundary key={entry.id} addonId={addonId} onError={entry.props.controller.fail}>
        <RenderModal render={entry.render} modalProps={entry.props} />
    </AddonErrorBoundary> : null
}
