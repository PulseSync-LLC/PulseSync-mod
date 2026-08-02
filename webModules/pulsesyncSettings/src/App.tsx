import { useEffect, useState } from 'react'
import type { PulseSyncAddonApi } from '../../pulsesyncWebHost/src/contracts'
import styles from './App.module.scss'
import { getModSettingsApi } from './api/modSettings'
import { PULSESYNC_OPEN_SETTINGS_EVENT } from './events'
import { PlaylistSettings } from './sections/PlaylistSettings'

type AppProps = {
  api?: PulseSyncAddonApi
}

function App({ api }: AppProps = {}) {
  const [isOpen, setIsOpen] = useState(import.meta.env.DEV)
  const modSettingsApi = getModSettingsApi(api)

  useEffect(() => {
    const openSettings = () => setIsOpen(true)

    window.addEventListener(PULSESYNC_OPEN_SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(PULSESYNC_OPEN_SETTINGS_EVENT, openSettings)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className={styles.backdrop}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false)
      }}
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="PulseSyncSettings_title"
      >
        <header className={styles.header}>
          <h2 id="PulseSyncSettings_title">Настройки мода</h2>
          <button
            className={styles.closeButton}
            type="button"
            aria-label="Закрыть"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </header>
        <div
          className={styles.content}
          data-pulsesync-settings-content
        >
          <PlaylistSettings api={modSettingsApi} />
        </div>
      </section>
    </div>
  )
}

export default App
