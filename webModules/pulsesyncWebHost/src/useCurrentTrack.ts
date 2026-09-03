import { useEffect, useState } from 'react'
import type { PulseSyncTrackMeta } from '@pulsesync/yamusic-types'
import type { PulseSyncAddonApi } from './contracts'

export function useCurrentTrack(api: PulseSyncAddonApi, enabled = true) {
    const [currentTrack, setCurrentTrack] = useState<PulseSyncTrackMeta | null>(null)

    useEffect(() => {
        if (!enabled) return

        let active = true
        void api.player
            .getSnapshot()
            .then(snapshot => {
                if (active) setCurrentTrack(snapshot.track)
            })
            .catch(error => api.logger.warn('Failed to load current track', error))
        const unsubscribe = api.player.onTrackChange(setCurrentTrack)

        return () => {
            active = false
            unsubscribe()
        }
    }, [api, enabled])

    return currentTrack
}
