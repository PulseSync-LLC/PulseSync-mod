import {
  cloneElement,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'
import {
  createModSettingsDeeplink,
  matchesSettingsSearch,
  useSettingsNavigation,
} from '../../settingsNavigation'
import styles from './SettingsItem.module.scss'

type SettingsItemProps = {
  children: ReactElement<{ titleAction?: ReactNode }>
  id: string
  searchText: readonly (string | undefined)[]
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value)
      return
    } catch {
      // The custom application protocol may not expose a secure Clipboard API.
    }
  }

  const input = document.createElement('textarea')
  input.value = value
  input.style.position = 'fixed'
  input.style.opacity = '0'
  document.body.append(input)
  input.select()
  const copied = document.execCommand('copy')
  input.remove()
  if (!copied) throw new Error('Clipboard API is unavailable')
}

export function SettingsItem({ children, id, searchText }: SettingsItemProps) {
  const {
    categoryId,
    categoryLabel,
    highlightedSettingId,
    searchQuery,
  } = useSettingsNavigation()
  const [copyState, setCopyState] = useState<'copied' | 'error' | 'idle'>('idle')
  const visible = matchesSettingsSearch(searchQuery, [
    categoryId,
    categoryLabel,
    id,
    ...searchText,
  ])
  const highlighted = highlightedSettingId === id

  useEffect(() => {
    if (copyState === 'idle') return
    const timeout = window.setTimeout(() => setCopyState('idle'), 1800)
    return () => window.clearTimeout(timeout)
  }, [copyState])

  if (!visible) return null

  const deeplink = createModSettingsDeeplink(categoryId, id)
  const copyLabel =
    copyState === 'copied'
      ? 'Ссылка скопирована'
      : copyState === 'error'
        ? 'Не удалось скопировать ссылку'
        : 'Копировать ссылку'
  const copyButton = (
    <button
      className={styles.copyButton}
      data-copied={copyState === 'copied'}
      data-error={copyState === 'error'}
      type="button"
      aria-label={copyLabel}
      title={copyLabel}
      onClick={() => {
        void copyText(deeplink)
          .then(() => setCopyState('copied'))
          .catch(() => setCopyState('error'))
      }}
    >
      {copyState === 'copied' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m5 12.5 4 4L19 7" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 15 15 9M7.5 12.5l-1.8 1.8a3.5 3.5 0 0 0 5 5l2.8-2.8a3.5 3.5 0 0 0 0-5M16.5 11.5l1.8-1.8a3.5 3.5 0 0 0-5-5l-2.8 2.8a3.5 3.5 0 0 0 0 5" />
        </svg>
      )}
    </button>
  )

  return (
    <div
      className={styles.item}
      data-highlighted={highlighted}
      data-pulsesync-setting-id={id}
    >
      {cloneElement(children, { titleAction: copyButton })}
    </div>
  )
}
