import Icon from '../Icon.jsx'

import { usePlayer } from '../../../contexts/usePlayer.js'

import './TitleBarButton.css'

function TitleBarButtonIcon({ variant }) {
    const { settingsState } = usePlayer()

    switch (variant) {
        case 'quit':
            return <Icon name="titlebar_quit" size="10" className="TitleBar_icon" />
        case 'pin':
            return (
                <Icon
                    name={(settingsState.miniplayer?.window?.alwaysOnTop ?? true) ? 'pin_filled_xs' : 'pin_xs'}
                    size="12"
                    className="TitleBar_icon"
                />
            )
    }
}

export default function TitleBarButton({ variant }) {
    const btnVariant = {}
    const onClick = () => {
        if (variant === 'quit') {
            window.close()
        } else if (variant === 'pin') {
            window.musicDesktop?.pulsesync.miniplayer.togglePin()
        }
    }

    switch (variant) {
        case 'quit':
            btnVariant.id = 'quit'
            btnVariant.className = 'TitleBar_QuitButton'
            break
        case 'pin':
            btnVariant.id = 'pin'
            btnVariant.className = 'TitleBar_Button'
            break
    }

    return (
        <button id={btnVariant.id} className={btnVariant.className} onClick={onClick}>
            <TitleBarButtonIcon variant={variant} />
        </button>
    )
}
