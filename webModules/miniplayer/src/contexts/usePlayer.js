import { createContext, useContext } from 'react'

export const PlayerContext = createContext({
    playerState: {},
    settingsState: {},
    ready: false,
})

export function usePlayer() {
    return useContext(PlayerContext)
}
