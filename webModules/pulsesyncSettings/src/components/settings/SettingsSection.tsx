import type { ComponentProps } from 'react'
import { SettingAction } from '../controls/SettingAction'
import { SettingInput } from '../controls/SettingInput'
import { SettingPath } from '../controls/SettingPath'
import { SettingSelect } from '../controls/SettingSelect'
import { SettingSlider } from '../controls/SettingSlider'
import { SettingToggle } from '../controls/SettingToggle'
import styles from './SettingsSection.module.scss'

export type SettingsSchemaItem =
  | {
      id: string
      type: 'action'
      props: ComponentProps<typeof SettingAction>
    }
  | {
      id: string
      type: 'heading'
      text: string
    }
  | {
      id: string
      type: 'note'
      text: string
    }
  | {
      id: string
      type: 'input'
      props: ComponentProps<typeof SettingInput>
    }
  | {
      id: string
      type: 'path'
      props: ComponentProps<typeof SettingPath>
    }
  | {
      id: string
      type: 'select'
      props: ComponentProps<typeof SettingSelect>
    }
  | {
      id: string
      type: 'slider'
      props: ComponentProps<typeof SettingSlider>
    }
  | {
      id: string
      type: 'toggle'
      props: ComponentProps<typeof SettingToggle>
    }

type SettingsSectionProps = {
  error?: string
  items: readonly SettingsSchemaItem[]
  title: string
}

function renderItem(item: SettingsSchemaItem) {
  switch (item.type) {
    case 'action':
      return <SettingAction key={item.id} {...item.props} />
    case 'heading':
      return (
        <div className={styles.heading} key={item.id}>
          {item.text}
        </div>
      )
    case 'note':
      return (
        <div className={styles.note} key={item.id}>
          {item.text}
        </div>
      )
    case 'input':
      return <SettingInput key={item.id} {...item.props} />
    case 'path':
      return <SettingPath key={item.id} {...item.props} />
    case 'select':
      return <SettingSelect key={item.id} {...item.props} />
    case 'slider':
      return <SettingSlider key={item.id} {...item.props} />
    case 'toggle':
      return <SettingToggle key={item.id} {...item.props} />
  }
}

export function SettingsSection({
  error,
  items,
  title,
}: SettingsSectionProps) {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.list}>{items.map(renderItem)}</div>
      {error ? (
        <div className={styles.error} role="status">
          {error}
        </div>
      ) : null}
    </section>
  )
}
