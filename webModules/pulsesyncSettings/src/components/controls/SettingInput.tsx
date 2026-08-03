import styles from './SettingInput.module.scss'

type SettingInputProps = {
  description: string
  max?: number
  min?: number
  onChange: (value: string) => void
  placeholder: string
  title: string
  value: string
}

export function SettingInput({
  description,
  max,
  min,
  onChange,
  placeholder,
  title,
  value,
}: SettingInputProps) {
  return (
    <label className={styles.row}>
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
      <input
        className={styles.input}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        step={1}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </label>
  )
}
