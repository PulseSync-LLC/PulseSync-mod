type AddonFailure = {
    addonId: string
    error: Error
    retry?: () => Promise<void>
    retrying?: boolean
}

const failures = new Map<string, AddonFailure>()
const subscribers = new Set<() => void>()

export function subscribeAddonFailures(subscriber: () => void) {
    subscribers.add(subscriber)

    return () => {
        subscribers.delete(subscriber)
    }
}

export function getNextAddonFailure(): AddonFailure | undefined {
    return failures.values().next().value
}

export function reportAddonFailure(addonId: string, error: Error, retry?: () => Promise<void>) {
    failures.set(addonId, { addonId, error, retry })
    subscribers.forEach(subscriber => subscriber())
}

export async function retryAddonFailure(addonId: string) {
    const failure = failures.get(addonId)

    if (!failure?.retry || failure.retrying) {
        return
    }

    const pending = { ...failure, retrying: true }

    failures.set(addonId, pending)
    subscribers.forEach(subscriber => subscriber())

    try {
        await failure.retry()

        if (failures.get(addonId) === pending) {
            dismissAddonFailure(addonId)
        }
    } catch (error) {
        if (failures.get(addonId) === pending) {
            reportAddonFailure(addonId, error instanceof Error ? error : new Error(String(error)), failure.retry)
        }
    }
}

export function dismissAddonFailure(addonId: string) {
    if (!failures.delete(addonId)) {
        return
    }

    subscribers.forEach(subscriber => subscriber())
}
