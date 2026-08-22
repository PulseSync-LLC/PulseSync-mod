import type { ReactNode } from 'react'
import { SettingBadge, type SettingBadgeProps } from './SettingBadge'
import styles from './SettingToggle.module.scss'

type SettingToggleProps = {
  badge?: SettingBadgeProps
  checked: boolean
  description?: string
  disabled?: boolean
  onChange: (checked: boolean) => void
  title: string
  titleAction?: ReactNode
}

export function SettingToggle({
  badge,
  checked,
  description,
  disabled = false,
  onChange,
  title,
  titleAction,
}: SettingToggleProps) {
  return (
    <div className={styles.row} data-disabled={disabled}>
      <div className={styles.text}>
        <div className={styles.titleLine}>
          <div className={styles.title}>{title}</div>
          {titleAction}
          {badge ? <SettingBadge {...badge} /> : null}
        </div>
        {description ? (
          <div className={styles.description}>{description}</div>
        ) : null}
      </div>
      <button
        className={styles.switch}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange(!checked)}
      >
        <span />
      </button>
    </div>
  )
}
