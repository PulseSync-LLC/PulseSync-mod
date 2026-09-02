import type { PulseSyncTrackMenuContext } from './contracts'

const TRACK_CONTEXT_MENU_SELECTOR = '[data-test-id="TRACK_CONTEXT_MENU"]'
const TRACK_CONTEXT_MENU_BUTTON_SELECTOR = '[data-test-id="TRACK_CONTEXT_MENU_BUTTON"]'
const TRACK_LINK_SELECTOR = 'a[href*="/track/"]'

let activeTrack: PulseSyncTrackMenuContext | null = null

function decodePathSegment(value: string) {
    try {
        return decodeURIComponent(value)
    } catch {
        return value
    }
}

function parseTrackLink(link: HTMLAnchorElement): PulseSyncTrackMenuContext | null {
    const url = new URL(link.href, window.location.href)
    const albumTrackMatch = url.pathname.match(/\/album\/([^/]+)\/track\/([^/]+)(?:\/|$)/)
    const directTrackMatch = url.pathname.match(/\/track\/([^/]+)(?:\/|$)/)
    const trackId = albumTrackMatch?.[2] ?? directTrackMatch?.[1]
    if (!trackId) return null

    const albumId = albumTrackMatch?.[1]
    const title = link.textContent?.trim()

    return Object.freeze({
        id: decodePathSegment(trackId),
        url: `${url.pathname}${url.search}${url.hash}`,
        ...(title ? { title } : {}),
        ...(albumId ? { albumId: decodePathSegment(albumId) } : {}),
    })
}

function findTrackFromOrigin(origin: Element): PulseSyncTrackMenuContext | null {
    let candidate: Element | null = origin.closest(TRACK_CONTEXT_MENU_BUTTON_SELECTOR) ?? origin

    while (candidate && candidate !== document.body) {
        const links = [
            ...(candidate.matches(TRACK_LINK_SELECTOR) ? [candidate] : []),
            ...candidate.querySelectorAll(TRACK_LINK_SELECTOR),
        ].filter((link): link is HTMLAnchorElement => link instanceof HTMLAnchorElement)
        const tracks = links.map(parseTrackLink).filter((track): track is PulseSyncTrackMenuContext => track !== null)
        const trackIds = new Set(tracks.map(track => track.id))

        if (trackIds.size === 1) {
            const track = tracks.find(item => item.title) ?? tracks[0]
            if (track) return track
        }

        if (candidate.querySelectorAll(TRACK_CONTEXT_MENU_BUTTON_SELECTOR).length > 1) return null
        candidate = candidate.parentElement
    }

    return null
}

function captureTrackContext(event: Event) {
    const origin = event.target instanceof Element ? event.target : event.target instanceof Node ? event.target.parentElement : null
    if (!origin || origin.closest(TRACK_CONTEXT_MENU_SELECTOR)) return

    const isMenuButton = Boolean(origin.closest(TRACK_CONTEXT_MENU_BUTTON_SELECTOR))
    if (event.type !== 'contextmenu' && !isMenuButton) return

    activeTrack = findTrackFromOrigin(origin)
}

export function installTrackContextMenuTracking() {
    document.addEventListener('pointerdown', captureTrackContext, true)
    document.addEventListener('focusin', captureTrackContext, true)
    document.addEventListener('contextmenu', captureTrackContext, true)

    return () => {
        document.removeEventListener('pointerdown', captureTrackContext, true)
        document.removeEventListener('focusin', captureTrackContext, true)
        document.removeEventListener('contextmenu', captureTrackContext, true)
        activeTrack = null
    }
}

export function getTrackContextMenuTrack() {
    return activeTrack
}
