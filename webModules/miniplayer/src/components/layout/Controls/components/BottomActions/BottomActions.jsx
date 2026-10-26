import PlayButton from '../PlayButton/PlayButton.jsx'
import PlayerActionButton from '../PlayerActionButton/PlayerActionButton.jsx'

import './BottomActions.css'
import { usePlayer } from '../../../../../contexts/usePlayer.js'

export default function BottomActions() {
    const { playerState, settingsState } = usePlayer()

    const swapFeedback = settingsState.playerBarEnhancement.changeDislikeButtonPos

    return (
        <div className="BottomPlayerActions">
            <PlayerActionButton
                type="secondary"
                name={swapFeedback ? 'dislike' : 'like'}
                value={swapFeedback ? playerState.actionsStore?.isDisliked : playerState.actionsStore?.isLiked}
            />
            <PlayerActionButton
                type="secondary"
                name="shuffle"
                value={playerState.actionsStore?.shuffle}
                active={playerState.availableActions?.shuffle}
            />
            <PlayerActionButton name="backward" active={playerState.availableActions?.moveBackward} />
            <PlayButton
                isPlaying={!['paused', 'idle'].includes(playerState.status)}
                useYellowButton={settingsState.playerBarEnhancement.playButtonType === 'yellow'}
            />
            <PlayerActionButton name="forward" active={playerState.availableActions?.moveForward} />
            <PlayerActionButton
                type="secondary"
                name="repeat"
                value={playerState.actionsStore?.repeat}
                active={playerState.availableActions?.repeat}
            />
            <PlayerActionButton
                type="secondary"
                name={swapFeedback ? 'like' : 'dislike'}
                value={swapFeedback ? playerState.actionsStore?.isLiked : playerState.actionsStore?.isDisliked}
            />
        </div>
    )
}
