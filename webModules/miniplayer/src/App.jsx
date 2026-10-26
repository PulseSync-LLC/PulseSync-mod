import { useMemo } from 'react'

import hex2hsl from './utils/hex2hsl.js'

import TitleBar from './components/layout/TitleBar/TitleBar.jsx'
import Cover from './components/layout/Cover/Cover.jsx'
import Controls from './components/layout/Controls/Controls.jsx'
import TrackMeta from './components/layout/TrackMeta/TrackMeta.jsx'

import { PlayerProvider } from './contexts/PlayerContext.jsx'
import { usePlayer } from './contexts/usePlayer.js'

import './App.css'

function App() {
    const { playerState, settingsState } = usePlayer()
    const averageColor = playerState.track?.derivedColors?.average
    const disablePerTrackColors = settingsState.playerBarEnhancement.disablePerTrackColors

    const bgColor = useMemo(
        () =>
            !disablePerTrackColors && averageColor
                ? {
                      '--player-bg-color': hex2hsl(averageColor, 20).css,
                  }
                : undefined,
        [averageColor, disablePerTrackColors],
    )

    return (
        <>
            <TitleBar />
            <main className="main" style={bgColor}>
                <div className="Track_container">
                    <Cover />
                    <TrackMeta />
                </div>
                <Controls />
            </main>
        </>
    )
}

export default function Main() {
    return (
        <PlayerProvider>
            <App />
        </PlayerProvider>
    )
}
