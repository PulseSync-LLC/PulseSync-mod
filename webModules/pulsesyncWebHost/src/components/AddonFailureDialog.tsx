import { useSyncExternalStore } from 'react'
import {
    dismissAddonFailure,
    getNextAddonFailure,
    retryAddonFailure,
    subscribeAddonFailures,
} from '../addons/addonFailures'
import { AddonErrorFallback } from './AddonErrorFallback'

export function AddonFailureDialog() {
    const failure = useSyncExternalStore(subscribeAddonFailures, getNextAddonFailure, getNextAddonFailure)

    if (!failure) {
        return null
    }

    return (
        <AddonErrorFallback
            key={failure.addonId}
            addonId={failure.addonId}
            error={failure.error}
            stopped
            onRetry={failure.retry && !failure.retrying ? () => void retryAddonFailure(failure.addonId) : undefined}
            onDismiss={() => dismissAddonFailure(failure.addonId)}
        />
    )
}
