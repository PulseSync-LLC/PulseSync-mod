import styles from './SettingToggle.module.scss'

type SettingToggleProps = {
  checked: boolean
  description: string
  disabled?: boolean
  onChange: (checked: boolean) => void
  title: string
}

export function SettingToggle({
  checked,
  description,
  disabled = false,
  onChange,
  title,
}: SettingToggleProps) {
  return (
    <div className={styles.row}>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
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
