import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './SettingBadge.module.scss'

export type SettingBadgeProps = {
  disabled?: boolean
  label: string
  tooltip?: {
    description: string
    title: string
  } | null
}

export function SettingBadge({
  disabled = false,
  label,
  tooltip = {
    title: 'Экспериментально',
    description: 'Может работать некорректно',
  },
}: SettingBadgeProps) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [position, setPosition] = useState({ left: 0, top: 0 })
  const openTimerRef = useRef<number | undefined>(undefined)
  const triggerRef = useRef<HTMLSpanElement>(null)
  const tooltipId = useId()

  const updatePosition = useCallback(() => {
    const bounds = triggerRef.current?.getBoundingClientRect()
    if (!bounds) return
    setPosition({
      left: Math.round(bounds.left + bounds.width / 2),
      top: Math.round(bounds.top - 4),
    })
  }, [])

  const openTooltip = useCallback(() => {
    window.clearTimeout(openTimerRef.current)
    openTimerRef.current = window.setTimeout(() => {
      updatePosition()
      setIsTooltipOpen(true)
    }, 200)
  }, [updatePosition])

  const closeTooltip = useCallback(() => {
    window.clearTimeout(openTimerRef.current)
    setIsTooltipOpen(false)
  }, [])

  useEffect(() => {
    if (!isTooltipOpen) return
    updatePosition()
    window.addEventListener('resize', updatePosition)
    document.addEventListener('scroll', updatePosition, true)
    return () => {
      window.removeEventListener('resize', updatePosition)
      document.removeEventListener('scroll', updatePosition, true)
    }
  }, [isTooltipOpen, updatePosition])

  useEffect(
    () => () => {
      window.clearTimeout(openTimerRef.current)
    },
    [],
  )

  return (
    <>
      <span
        className={styles.badge}
        data-disabled={disabled}
        ref={triggerRef}
        aria-describedby={isTooltipOpen && tooltip ? tooltipId : undefined}
        onMouseEnter={tooltip ? openTooltip : undefined}
        onMouseLeave={closeTooltip}
      >
        {label}
      </span>
      {isTooltipOpen && tooltip
        ? createPortal(
            <span
              className={styles.tooltip}
              id={tooltipId}
              role="tooltip"
              style={position}
            >
              <span className={styles.tooltipTitle}>{tooltip.title}</span>
              <span className={styles.tooltipDescription}>
                {tooltip.description}
              </span>
            </span>,
            document.body,
          )
        : null}
    </>
  )
}
