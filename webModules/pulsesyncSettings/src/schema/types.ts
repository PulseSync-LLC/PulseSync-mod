import type { ModSettingsApi } from '../api/modSettings'
import type { SettingBadgeProps } from '../components/controls/SettingBadge'
import type { SettingSelectOption } from '../components/controls/SettingSelect'

export type StoredSettingValue = boolean | number | string | null

export type SettingsSchemaContext = {
  api: ModSettingsApi | undefined
  get: (key: string) => unknown
  getBoolean: (key: string) => boolean
  getNumber: (key: string) => number
  getString: (key: string) => string
  premium: {
    error?: string
    isLoading: boolean
    value: boolean
  }
}

export type Resolvable<T> = T | ((context: SettingsSchemaContext) => T)

type StoredItemBase = {
  badge?: Resolvable<SettingBadgeProps | undefined>
  cooldownMs?: number
  defaultValue: StoredSettingValue
  description?: Resolvable<string | undefined>
  disabledWhen?: (context: SettingsSchemaContext) => boolean
  key: string
  onApplied?: (
    value: StoredSettingValue,
    context: SettingsSchemaContext,
  ) => void | Promise<void>
  requiresPremium?: boolean
  restartRequired?: boolean
  title: string
}

export type ToggleSettingSchema = StoredItemBase & {
  displayValue?: (
    value: boolean,
    context: SettingsSchemaContext,
  ) => boolean
  invert?: boolean
  type: 'toggle'
}

export type SelectSettingSchema = StoredItemBase & {
  options: Resolvable<readonly SettingSelectOption[]>
  type: 'select'
}

export type SliderSettingSchema = StoredItemBase & {
  max: Resolvable<number>
  min: Resolvable<number>
  step: number
  type: 'slider'
  valueLabel?: (value: number) => string
}

export type InputSettingSchema = StoredItemBase & {
  max?: number
  min?: number
  placeholder?: string
  type: 'input'
}

export type PathSettingSchema = Omit<StoredItemBase, 'defaultValue'> & {
  defaultValue: string
  enabledDefaultValue: boolean
  enabledKey: string
  type: 'path'
}

export type HeadingSettingSchema = {
  id: string
  text: string
  type: 'heading'
}

export type NoteSettingSchema = {
  id: string
  text: Resolvable<string>
  type: 'note'
}

export type StoredSettingsSchemaItem =
  | HeadingSettingSchema
  | InputSettingSchema
  | NoteSettingSchema
  | PathSettingSchema
  | SelectSettingSchema
  | SliderSettingSchema
  | ToggleSettingSchema

export type SettingsSchemaWatch = {
  defaultValue: StoredSettingValue
  key: string
}

export type SettingsSectionSchema = {
  items: readonly StoredSettingsSchemaItem[]
  requiresPremium?: boolean
  title: string
  watch?: readonly SettingsSchemaWatch[]
}

export function defineSettingsSection<const Schema extends SettingsSectionSchema>(
  schema: Schema,
) {
  return schema
}
