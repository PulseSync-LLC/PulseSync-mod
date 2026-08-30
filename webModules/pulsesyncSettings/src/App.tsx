import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type { PulseSyncAddonApi } from '../../pulsesyncWebHost/src/contracts'
import styles from './App.module.scss'
import { getModSettingsApi } from './api/modSettings'
import {
  PULSESYNC_OPEN_SETTINGS_EVENT,
  PULSESYNC_OPEN_SETTINGS_DEEPLINK_EVENT,
  PULSESYNC_RESTART_REQUIRED_EVENT,
} from './events'
import { useModSetting } from './hooks/useModSetting'
import { useModalPresence } from './hooks/useModalPresence'
import {
  SETTINGS_GROUPS,
  SETTINGS_SECTIONS,
  type SettingsSectionId,
} from './schema/registry'
import { SettingsNavigationProvider } from './SettingsNavigationProvider'

type AppProps = {
  api?: PulseSyncAddonApi
}

type SettingsPaneProps = {
  active: boolean
  children: ReactNode
}

const MY_VIBE_SECTION_IDS = new Set<string>(
  SETTINGS_GROUPS.find((group) => group.label === 'Моя Волна')?.sections.map(
    (section) => section.id,
  ),
)
const SWAP_VIBE_ANIMATION_AND_WHEEL_KEY =
  'modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel'
const MAIN_PAGE_URL = 'music-application://desktop/'

type SettingsDeeplink = {
  categoryId: SettingsSectionId
  settingId: string
}

function parseSettingsDeeplink(value: unknown): SettingsDeeplink | null {
  if (typeof value !== 'string') return null
  const [prefix, encodedCategoryId, encodedSettingId, ...rest] = value
    .split(/[?#]/, 1)[0]
    .split('/')
    .filter(Boolean)
  if (
    prefix !== 'mod-settings' ||
    !encodedCategoryId ||
    !encodedSettingId ||
    rest.length
  )
    return null

  try {
    const categoryId = decodeURIComponent(encodedCategoryId)
    const settingId = decodeURIComponent(encodedSettingId)
    const section = SETTINGS_SECTIONS.find((item) => item.id === categoryId)
    if (!section || !settingId) return null
    return { categoryId: section.id as SettingsSectionId, settingId }
  } catch {
    return null
  }
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
  const [highlightedSettingId, setHighlightedSettingId] = useState<string>()
  const [searchQuery, setSearchQuery] = useState('')
  const contentRef = useRef<HTMLDivElement>(null)
  const modSettingsApi = getModSettingsApi(api)
  const { close, isMounted, isVisible, open } = useModalPresence(import.meta.env.DEV)
  const { value: swapVibeAnimationAndWheel } = useModSetting(
    modSettingsApi,
    SWAP_VIBE_ANIMATION_AND_WHEEL_KEY,
    false,
  )
  const notifyRestartRequired = useCallback(() => {
    window.dispatchEvent(new CustomEvent(PULSESYNC_RESTART_REQUIRED_EVENT))
  }, [])
  const isInMyVibeCategory = MY_VIBE_SECTION_IDS.has(activeSection)
  const shouldRevealMyVibe =
    isInMyVibeCategory && activeSection !== 'vibe-behavior'
  const shouldOffsetModal =
    shouldRevealMyVibe && window.location.href === MAIN_PAGE_URL
  const isSearching = Boolean(searchQuery.trim())

  useEffect(() => {
    const openSettings = () => open()

    window.addEventListener(PULSESYNC_OPEN_SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(PULSESYNC_OPEN_SETTINGS_EVENT, openSettings)
  }, [open])

  useEffect(() => {
    const unsubscribe = window.desktopEvents?.on?.(
      PULSESYNC_OPEN_SETTINGS_DEEPLINK_EVENT,
      (_event, pathname) => {
        const deeplink = parseSettingsDeeplink(pathname)
        if (!deeplink) return
        setSearchQuery('')
        setActiveSection(deeplink.categoryId)
        setHighlightedSettingId(deeplink.settingId)
        open()
      },
    )

    return typeof unsubscribe === 'function' ? unsubscribe : undefined
  }, [open])

  useEffect(() => {
    if (!isVisible || !highlightedSettingId) return

    const frame = window.requestAnimationFrame(() => {
      const target = Array.from(
        contentRef.current?.querySelectorAll<HTMLElement>(
          '[data-pulsesync-setting-id]',
        ) ?? [],
      ).find(
        (item) => item.dataset.pulsesyncSettingId === highlightedSettingId,
      )
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
    const timeout = window.setTimeout(
      () => setHighlightedSettingId(undefined),
      3600,
    )

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
    }
  }, [activeSection, highlightedSettingId, isVisible])

  useEffect(() => {
    if (!isMounted) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [close, isMounted])

  useEffect(() => {
    if (!isMounted) return

    const scrollSettings = (event: WheelEvent) => {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>('[data-pulsesync-scroll-region]')
          : null
      if (!target) return
      event.stopImmediatePropagation()
    }

    window.addEventListener('wheel', scrollSettings, {
      capture: true,
      passive: true,
    })
    return () => window.removeEventListener('wheel', scrollSettings, { capture: true });
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div
      className={`${styles.backdrop}${shouldOffsetModal ? ` ${styles.dimmed}` : ''}`}
      data-visible={isVisible}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <section
        className={`${styles.modal}${
          shouldOffsetModal
            ? ` ${
                swapVibeAnimationAndWheel
                  ? styles.withRightOffset
                  : styles.withLeftOffset
              }`
            : ''
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="PulseSyncSettings_title"
      >
        <header className={styles.header}>
          <h2 id="PulseSyncSettings_title">Настройки мода</h2>
          <div className={styles.headerActions}>
            <label className={styles.search}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                type="search"
                value={searchQuery}
                aria-label="Поиск по настройкам"
                placeholder="Поиск по настройкам"
                onChange={(event) => {
                  setSearchQuery(event.target.value)
                  setHighlightedSettingId(undefined)
                }}
              />
            </label>
            <button
              className={styles.closeButton}
              type="button"
              aria-label="Закрыть"
              onClick={close}
            >
              ×
            </button>
          </div>
        </header>
        <div className={styles.body}>
          <nav
            className={styles.navigation}
            aria-label="Разделы настроек"
            data-pulsesync-scroll-region
          >
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
                    onClick={() => {
                      setSearchQuery('')
                      setHighlightedSettingId(undefined)
                      setActiveSection(section.id)
                    }}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
          <div
            className={styles.content}
            data-searching={isSearching}
            data-pulsesync-settings-content
            data-pulsesync-scroll-region
            ref={contentRef}
          >
            {SETTINGS_SECTIONS.map((section) => (
              <SettingsPane
                active={isSearching || activeSection === section.id}
                key={section.id}
              >
                <SettingsNavigationProvider
                  categoryId={section.id}
                  categoryLabel={section.label}
                  highlightedSettingId={
                    activeSection === section.id
                      ? highlightedSettingId
                      : undefined
                  }
                  searchQuery={searchQuery}
                >
                  {section.render({
                    api: modSettingsApi,
                    onRestartRequired: notifyRestartRequired,
                  })}
                </SettingsNavigationProvider>
              </SettingsPane>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
