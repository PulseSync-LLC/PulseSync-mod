import PlayerActionButton from '../PlayerActionButton/PlayerActionButton.jsx'

import './OverlayActions.css'
import { usePlayer } from '../../../../../contexts/usePlayer.js'
import Volume from '../Volume/Volume.jsx'

export default function OverlayActions() {
    const { playerState, settingsState } = usePlayer()

    const swapFeedback = settingsState.playerBarEnhancement.changeDislikeButtonPos

    return (
        <div className="OverlayPlayerActions">
            <div className="OverlayPlayerActions_volume_row">
                <Volume variant="overlay" value={playerState.volume} />
            </div>
            <div className="OverlayPlayerActions_sonata_row">
                <PlayerActionButton
                    type="overlay"
                    name="shuffle"
                    value={playerState.actionsStore?.shuffle}
                    active={playerState.availableActions?.shuffle}
                    size={38}
                />
                <PlayerActionButton
                    type="overlay_primary"
                    name="backward"
                    active={playerState.availableActions?.moveBackward}
                    size={40}
                />
                <PlayerActionButton
                    type={
                        settingsState.playerBarEnhancement.playButtonType === 'yellow'
                            ? 'overlay_yellow'
                            : 'overlay_primary'
                    }
                    name="play"
                    value={!['paused', 'idle'].includes(playerState.status)}
                    size={52}
                />
                <PlayerActionButton
                    type="overlay_primary"
                    name="forward"
                    active={playerState.availableActions?.moveForward}
                    size={40}
                />
                <PlayerActionButton
                    type="overlay"
                    name="repeat"
                    value={playerState.actionsStore?.repeat}
                    active={playerState.availableActions?.repeat}
                    size={38}
                />
            </div>
            <div className="OverlayPlayerActions_feedback_row">
                <PlayerActionButton
                    type="overlay_primary"
                    name={swapFeedback ? 'dislike' : 'like'}
                    value={swapFeedback ? playerState.actionsStore?.isDisliked : playerState.actionsStore?.isLiked}
                />
                <PlayerActionButton
                    type="overlay_primary"
                    name={swapFeedback ? 'like' : 'dislike'}
                    value={swapFeedback ? playerState.actionsStore?.isLiked : playerState.actionsStore?.isDisliked}
                />
            </div>
        </div>
    )
}
