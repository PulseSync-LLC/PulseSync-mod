import { useCallback, useEffect, useState, type ReactNode } from 'react'
import type { PulseSyncAddonApi } from '../../pulsesyncWebHost/src/contracts'
import styles from './App.module.scss'
import { getModSettingsApi } from './api/modSettings'
import {
  PULSESYNC_OPEN_SETTINGS_EVENT,
  PULSESYNC_RESTART_REQUIRED_EVENT,
} from './events'
import { useModalPresence } from './hooks/useModalPresence'
import {
  SETTINGS_GROUPS,
  SETTINGS_SECTIONS,
  type SettingsSectionId,
} from './schema/registry'

type AppProps = {
  api?: PulseSyncAddonApi
}

type SettingsPaneProps = {
  active: boolean
  children: ReactNode
}

function SettingsPane({ active, children }: SettingsPaneProps) {
  return (
    <div className={styles.sectionPane} hidden={!active}>
      {children}
    </div>
  )
}

function App({ api }: AppProps = {}) {
  const [activeSection, setActiveSection] =
    useState<SettingsSectionId>('playlists')
  const modSettingsApi = getModSettingsApi(api)
  const { close, isMounted, isVisible, open } = useModalPresence(import.meta.env.DEV)
  const notifyRestartRequired = useCallback(() => {
    window.dispatchEvent(new CustomEvent(PULSESYNC_RESTART_REQUIRED_EVENT))
  }, [])

  useEffect(() => {
    const openSettings = () => open()

    window.addEventListener(PULSESYNC_OPEN_SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(PULSESYNC_OPEN_SETTINGS_EVENT, openSettings)
  }, [open])

  useEffect(() => {
    if (!isMounted) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [close, isMounted])

  if (!isMounted) return null

  return (
    <div
      className={styles.backdrop}
      data-visible={isVisible}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close()
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
            onClick={close}
          >
            ×
          </button>
        </header>
        <div className={styles.body}>
          <nav className={styles.navigation} aria-label="Разделы настроек">
            {SETTINGS_GROUPS.map((group) => (
              <div className={styles.navigationGroup} key={group.label}>
                <div className={styles.navigationLabel}>{group.label}</div>
                {group.sections.map((section) => (
                  <button
                    className={styles.navigationButton}
                    data-active={activeSection === section.id}
                    key={section.id}
                    type="button"
                    aria-current={
                      activeSection === section.id ? 'page' : undefined
                    }
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
          <div
            className={styles.content}
            data-pulsesync-settings-content
          >
            {SETTINGS_SECTIONS.map((section) => (
              <SettingsPane
                active={activeSection === section.id}
                key={section.id}
              >
                {section.render({
                  api: modSettingsApi,
                  onRestartRequired: notifyRestartRequired,
                })}
              </SettingsPane>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
