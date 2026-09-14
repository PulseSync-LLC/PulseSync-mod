import TitleBarButton from '../../ui/TitleBarButton/TitleBarButton.jsx'

import './TitleBar.css'

export default function TitleBar() {
    const isMacOS = window.PLATFORM === 'darwin'

    return (
        <header className={`TitleBar${isMacOS ? ' TitleBar_macos' : ''}`}>
            <div className="TitleBar_button_container">
                <TitleBarButton variant="pin" />
                {!isMacOS && <TitleBarButton variant="quit" />}
            </div>
        </header>
    )
}
