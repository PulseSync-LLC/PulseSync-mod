import { createContext, useContext, useEffect, useState, useRef } from 'react'

const PlayerContext = createContext({
    playerState: {},
    settingsState: {},
    ready: false,
})

export function PlayerProvider({ children }) {
    const [playerState, setPlayerState] = useState(null)
    const [settingsState, setSettingsState] = useState(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        let gotPlayer = false
        let gotSettings = false

        const unsub1 = window.musicDesktop?.pulsesync.miniplayer.onPlayerState(state => {
            setPlayerState(state)
            gotPlayer = true

            if (gotSettings) {
                setReady(true)
            }
        })

        const unsub2 = window.musicDesktop?.pulsesync.miniplayer.onSettingsState(state => {
            setSettingsState(state)
            gotSettings = true

            if (gotPlayer) {
                setReady(true)
            }
        })

        window.musicDesktop?.pulsesync.miniplayer.ready()

        return () => {
            unsub1?.()
            unsub2?.()
        }
    }, [])

    if (!ready) {
        return null
    }

    return <PlayerContext.Provider value={{ playerState, settingsState, ready }}>{children}</PlayerContext.Provider>
}

export function usePlayer() {
    return useContext(PlayerContext)
}

export { PlayerContext }
