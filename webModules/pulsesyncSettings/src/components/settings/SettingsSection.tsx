import type { ComponentProps } from 'react'
import { SettingAction } from '../controls/SettingAction'
import { SettingInput } from '../controls/SettingInput'
import { SettingPath } from '../controls/SettingPath'
import { SettingSelect } from '../controls/SettingSelect'
import { SettingSlider } from '../controls/SettingSlider'
import { SettingToggle } from '../controls/SettingToggle'
import {
  matchesSettingsSearch,
  useSettingsNavigation,
} from '../../settingsNavigation'
import { SettingsItem } from './SettingsItem'
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
      return (
        <SettingsItem
          id={item.id}
          key={item.id}
          searchText={[item.props.title, item.props.description]}
        >
          <SettingAction {...item.props} />
        </SettingsItem>
      )
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
      return (
        <SettingsItem
          id={item.id}
          key={item.id}
          searchText={[
            item.props.title,
            item.props.description,
            item.props.placeholder,
          ]}
        >
          <SettingInput {...item.props} />
        </SettingsItem>
      )
    case 'path':
      return (
        <SettingsItem
          id={item.id}
          key={item.id}
          searchText={[item.props.title, item.props.description, item.props.path]}
        >
          <SettingPath {...item.props} />
        </SettingsItem>
      )
    case 'select':
      return (
        <SettingsItem
          id={item.id}
          key={item.id}
          searchText={[
            item.props.title,
            item.props.description,
            ...item.props.options.flatMap((option) => [
              option.label,
              option.description,
            ]),
          ]}
        >
          <SettingSelect {...item.props} />
        </SettingsItem>
      )
    case 'slider':
      return (
        <SettingsItem
          id={item.id}
          key={item.id}
          searchText={[item.props.title, item.props.description]}
        >
          <SettingSlider {...item.props} />
        </SettingsItem>
      )
    case 'toggle':
      return (
        <SettingsItem
          id={item.id}
          key={item.id}
          searchText={[item.props.title, item.props.description]}
        >
          <SettingToggle {...item.props} />
        </SettingsItem>
      )
  }
}

export function SettingsSection({
  error,
  items,
  title,
}: SettingsSectionProps) {
  const { categoryId, categoryLabel, searchQuery } = useSettingsNavigation()
  const visibleItems = items.filter((item) => {
    if (item.type !== 'heading' && item.type !== 'note') return true
    return matchesSettingsSearch(searchQuery, [
      categoryId,
      categoryLabel,
      title,
      item.id,
      item.text,
    ])
  })

  return (
    <section className={styles.section} data-searching={Boolean(searchQuery)}>
      <h3>{title}</h3>
      <div className={styles.list}>{visibleItems.map(renderItem)}</div>
      {error ? (
        <div className={styles.error} role="status">
          {error}
        </div>
      ) : null}
    </section>
  )
}
