import type { ReactNode } from 'react'
import styles from './SettingInput.module.scss'

type SettingInputProps = {
  description: string
  disabled?: boolean
  max?: number
  min?: number
  onChange: (value: string) => void
  placeholder: string
  title: string
  titleAction?: ReactNode
  value: string
}

export function SettingInput({
  description,
  disabled = false,
  max,
  min,
  onChange,
  placeholder,
  title,
  titleAction,
  value,
}: SettingInputProps) {
  return (
    <div className={styles.row} data-disabled={disabled}>
      <span className={styles.text}>
        <span className={styles.titleLine}>
          <span className={styles.title}>{title}</span>
          {titleAction}
        </span>
        <span className={styles.description}>{description}</span>
      </span>
      <input
        className={styles.input}
        type="number"
        aria-label={title}
        disabled={disabled}
        inputMode="numeric"
        min={min}
        max={max}
        step={1}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </div>
  )
}
