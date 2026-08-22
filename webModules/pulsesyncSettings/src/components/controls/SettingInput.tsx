import type { ReactNode } from 'react'
import styles from './SettingInput.module.scss'

type SettingInputProps = {
  description: string
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
  max,
  min,
  onChange,
  placeholder,
  title,
  titleAction,
  value,
}: SettingInputProps) {
  return (
    <div className={styles.row}>
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
