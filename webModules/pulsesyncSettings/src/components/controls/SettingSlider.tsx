import type { CSSProperties, ReactNode } from 'react'
import styles from './SettingSlider.module.scss'

type SettingSliderProps = {
  description: string
  disabled?: boolean
  max: number
  min: number
  onChange: (value: number) => void
  step: number
  title: string
  titleAction?: ReactNode
  value: number
  valueLabel?: (value: number) => string
}

export function SettingSlider({
  description,
  disabled = false,
  max,
  min,
  onChange,
  step,
  title,
  titleAction,
  value,
  valueLabel = String,
}: SettingSliderProps) {
  const safeValue = Math.min(Math.max(value, min), max)
  const progress = max === min ? 0 : ((safeValue - min) / (max - min)) * 100

  return (
    <div className={styles.row} data-disabled={disabled}>
      <span className={styles.text}>
        <span className={styles.titleLine}>
          <span className={styles.title}>{title}</span>
          {titleAction}
        </span>
        <span className={styles.description}>{description}</span>
      </span>
      <div className={styles.control}>
        <span className={styles.value}>{valueLabel(safeValue)}</span>
        <input
          className={styles.slider}
          style={{ '--slider-progress': `${progress}%` } as CSSProperties}
          type="range"
          aria-label={title}
          disabled={disabled}
          max={max}
          min={min}
          step={step}
          value={safeValue}
          onChange={(event) => onChange(Number(event.currentTarget.value))}
        />
      </div>
    </div>
  )
}
