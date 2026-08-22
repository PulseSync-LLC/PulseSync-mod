import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import styles from './SettingSelect.module.scss'

export type SettingSelectOption = {
  description?: string
  label: string
  value: string
}

type SettingSelectProps = {
  description?: string
  disabled?: boolean
  onChange: (value: string) => void
  options: readonly SettingSelectOption[]
  title: string
  titleAction?: ReactNode
  value: string
}

export function SettingSelect({
  description,
  disabled = false,
  onChange,
  options,
  title,
  titleAction,
  value,
}: SettingSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [menuPosition, setMenuPosition] = useState<{
    bottom?: number
    left: number
    top?: number
    width: number
  }>()
  const rootRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const selected = options.find((option) => option.value === value)
  const resolvedDescription = selected?.description ?? description

  const updateMenuPosition = useCallback(() => {
    const bounds = triggerRef.current?.getBoundingClientRect()
    if (!bounds) return
    const estimatedHeight = Math.min(options.length * 55, 360)
    const spaceBelow = window.innerHeight - bounds.bottom - 16
    const spaceAbove = bounds.top - 16
    const openAbove =
      spaceBelow < Math.min(estimatedHeight, 240) && spaceAbove > spaceBelow
    const basePosition = {
      left: Math.round(bounds.left),
      width: Math.round(bounds.width),
    }
    setMenuPosition(
      openAbove
        ? {
            ...basePosition,
            bottom: Math.round(window.innerHeight - bounds.top + 8),
          }
        : { ...basePosition, top: Math.round(bounds.bottom + 8) },
    )
  }, [options.length])

  useEffect(() => {
    if (!isOpen) return

    const closeOnOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        !rootRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      )
        setIsOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('mousedown', closeOnOutsideClick)
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('mousedown', closeOnOutsideClick)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    updateMenuPosition()
    window.addEventListener('resize', updateMenuPosition)
    document.addEventListener('scroll', updateMenuPosition, true)
    return () => {
      window.removeEventListener('resize', updateMenuPosition)
      document.removeEventListener('scroll', updateMenuPosition, true)
    }
  }, [isOpen, updateMenuPosition])

  return (
    <div className={styles.row} data-disabled={disabled} ref={rootRef}>
      <span className={styles.text}>
        <span className={styles.titleLine}>
          <span className={styles.title}>{title}</span>
          {titleAction}
        </span>
        {resolvedDescription ? (
          <span className={styles.description}>
            {resolvedDescription}
          </span>
        ) : null}
      </span>
      <button
        className={styles.trigger}
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{selected?.label ?? value}</span>
        <span className={styles.chevron} aria-hidden="true" />
      </button>
      {isOpen && menuPosition
        ? createPortal(
            <div
              className={styles.options}
              ref={menuRef}
              role="listbox"
              aria-label={title}
              style={menuPosition}
            >
              {options.map((option) => (
                <button
                  className={styles.option}
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={option.value === value}
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                >
                  <span className={styles.optionText}>
                    <span>{option.label}</span>
                    {option.description ? (
                      <span className={styles.optionDescription}>
                        {option.description}
                      </span>
                    ) : null}
                  </span>
                  {option.value === value ? (
                    <svg
                      className={styles.check}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6.5 11.5 3 8l1.4-1.4 2.1 2.1 5.1-5.1L13 5z" />
                    </svg>
                  ) : null}
                </button>
              ))}
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}
