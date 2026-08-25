import type { ReactNode } from 'react'
import {
  SettingsNavigationContext,
  type SettingsNavigationContextValue,
} from './settingsNavigation'

type SettingsNavigationProviderProps = SettingsNavigationContextValue & {
  children: ReactNode
}

export function SettingsNavigationProvider({
  categoryId,
  categoryLabel,
  children,
  highlightedSettingId,
  searchQuery,
}: SettingsNavigationProviderProps) {
  return (
    <SettingsNavigationContext.Provider
      value={{
        categoryId,
        categoryLabel,
        highlightedSettingId,
        searchQuery,
      }}
    >
      {children}
    </SettingsNavigationContext.Provider>
  )
}

