type StandardSlotResolver = () => Element | null

function resolveFirst(selectors: readonly string[]) {
    for (const selector of selectors) {
        const target = document.querySelector(selector)
        if (target) return target
    }

    return null
}

function resolveCommonAncestor(root: Element, elements: readonly Element[]) {
    let candidate = elements[0]?.parentElement

    while (candidate && candidate !== root) {
        const current = candidate
        if (elements.every((element) => current.contains(element))) return current
        candidate = current.parentElement
    }

    return null
}

function resolveDirectChild(parent: Element, descendant: Element) {
    let current: Element | null = descendant

    while (current?.parentElement && current.parentElement !== parent) current = current.parentElement

    return current?.parentElement === parent ? current : null
}

function ensureStandardSlotAnchor(parent: Element, slotName: string, before: Element) {
    const existing = Array.from(parent.children).find((child) => child.getAttribute('data-pulsesync-standard-slot') === slotName)
    if (existing) return existing

    const anchor = document.createElement('span')
    anchor.setAttribute('data-pulsesync-standard-slot', slotName)
    anchor.setAttribute('style', 'display: contents')
    parent.insertBefore(anchor, before)
    return anchor
}

function ensureAppendedStandardSlotAnchor(parent: Element, slotName: string) {
    const existing = Array.from(parent.children).find((child) => child.getAttribute('data-pulsesync-standard-slot') === slotName)
    if (existing) return existing

    const anchor = document.createElement('span')
    anchor.setAttribute('data-pulsesync-standard-slot', slotName)
    anchor.setAttribute('style', 'display: contents')
    parent.append(anchor)
    return anchor
}

function resolvePlayerBarButtonTarget() {
    const playerBar = document.querySelector('[data-test-id="PLAYERBAR_DESKTOP"]')
    if (!playerBar) return null

    const nativeButtons = [
        playerBar.querySelector('[data-test-id="PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON"]'),
        playerBar.querySelector('[data-test-id="PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON"]'),
    ].filter((element): element is Element => element !== null)

    if (nativeButtons.length === 2) {
        const controls = resolveCommonAncestor(playerBar, nativeButtons)
        if (controls) {
            const volumeButton = controls.querySelector('[data-test-id="CHANGE_VOLUME_BUTTON"]')
            const volumeControl = volumeButton ? resolveDirectChild(controls, volumeButton) : null
            if (volumeControl) return ensureStandardSlotAnchor(controls, 'playerBarButton', volumeControl)
        }
    }

    const controls = resolveFirst([
        '[data-test-id="PLAYERBAR_DESKTOP"] [class*="PlayerBarDesktopWithBackgroundProgressBar_meta__"]',
        '[data-test-id="PLAYERBAR_DESKTOP"] [class*="PlayerBarDesktop_meta__"]',
    ])
    const volumeButton = controls?.querySelector('[data-test-id="CHANGE_VOLUME_BUTTON"]')
    const volumeControl = controls && volumeButton ? resolveDirectChild(controls, volumeButton) : null

    return controls && volumeControl ? ensureStandardSlotAnchor(controls, 'playerBarButton', volumeControl) : null
}

function resolveEntityHeaderTarget(selector: string) {
    return document.querySelector(`[data-test-id="ENTITY_HEADER"] ${selector}`)
}

function resolveTrackContextMenuItemTarget() {
    const menu = document.querySelector('[data-test-id="TRACK_CONTEXT_MENU"]')
    return menu ? ensureAppendedStandardSlotAnchor(menu, 'trackContextMenuItem') : null
}

export const STANDARD_SLOT_RESOLVERS = Object.freeze({
    playerBarButton: resolvePlayerBarButtonTarget,
    entityHeaderTitleAccessory: () => resolveEntityHeaderTarget('[data-test-id="ENTITY_TITLE"]'),
    entityHeaderMeta: () => resolveEntityHeaderTarget('[class*="PageHeaderBase_meta__"]'),
    entityHeaderControls: () => resolveEntityHeaderTarget('[data-test-id="BASE_PAGE_HEADER_CONTROLS"]'),
    trackContextMenuItem: resolveTrackContextMenuItemTarget,
} satisfies Readonly<Record<string, StandardSlotResolver>>)

export type PulseSyncStandardSlotName = keyof typeof STANDARD_SLOT_RESOLVERS

export function resolveStandardSlot(slotName: string): Element | null {
    return STANDARD_SLOT_RESOLVERS[slotName as PulseSyncStandardSlotName]?.() ?? null
}
