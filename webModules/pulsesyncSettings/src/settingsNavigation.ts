import { createContext, useContext } from 'react'

export type SettingsNavigationContextValue = {
  categoryId: string
  categoryLabel: string
  highlightedSettingId?: string
  searchQuery: string
}

export const SettingsNavigationContext =
  createContext<SettingsNavigationContextValue>({
    categoryId: '',
    categoryLabel: '',
    searchQuery: '',
  })

export function useSettingsNavigation() {
  return useContext(SettingsNavigationContext)
}

export function normalizeSettingsSearch(value: string) {
  return value.trim().toLocaleLowerCase('ru-RU').replaceAll('ё', 'е')
}

export function matchesSettingsSearch(
  query: string,
  values: readonly (string | undefined)[],
) {
  const normalizedQuery = normalizeSettingsSearch(query)
  if (!normalizedQuery) return true
  return values.some((value) =>
    normalizeSettingsSearch(value ?? '').includes(normalizedQuery),
  )
}

export function createModSettingsDeeplink(
  categoryId: string,
  settingId: string,
) {
  return `yandexmusic://mod-settings/${encodeURIComponent(categoryId)}/${encodeURIComponent(settingId)}`
}

