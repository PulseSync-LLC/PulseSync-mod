import type { ModSettingsApi } from '../api/modSettings'
import { useModSetting } from './useModSetting'

export function useBooleanModSetting(
  api: ModSettingsApi | undefined,
  key: string,
  fallback: boolean,
) {
  return useModSetting(api, key, fallback)
}
