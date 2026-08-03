import { useCallback, useEffect, useState } from 'react'
import type { ModSettingsApi } from '../../api/modSettings'
import {
  SettingsSection,
  type SettingsSchemaItem,
} from '../../components/settings/SettingsSection'
import { useModSetting } from '../../hooks/useModSetting'

type LastFmImage = {
  '#text'?: string
  size?: string
}

type LastFmUser = {
  image?: LastFmImage[]
  name?: string
  playcount?: number | string
}

const LASTFM_PREFIX = 'modSettings.scrobblers.lastfm.'

function normalizeUserInfo(value: unknown): LastFmUser | null {
  if (!value || typeof value !== 'object') return null
  const candidate =
    'user' in value && value.user && typeof value.user === 'object'
      ? value.user
      : value
  if (!('name' in candidate) || typeof candidate.name !== 'string') return null
  return candidate as LastFmUser
}

function getAvatarUrl(userInfo: LastFmUser | null) {
  const images = userInfo?.image
  return (
    images?.find((image) => image.size === 'extralarge')?.['#text'] ??
    images?.find((image) => image.size === 'large')?.['#text'] ??
    images?.find((image) => image.size === 'medium')?.['#text'] ??
    images?.[0]?.['#text']
  )
}

function getUserTitle(userInfo: LastFmUser | null) {
  if (!userInfo) return 'LastFM'
  const name = userInfo.name || 'LastFM'
  const playcount = Number(userInfo.playcount)
  return Number.isFinite(playcount)
    ? `${name} (${playcount.toLocaleString()})`
    : name
}

export function LastFmSettings({ api }: { api: ModSettingsApi | undefined }) {
  const enabled = useModSetting<boolean>(api, `${LASTFM_PREFIX}enable`, false)
  const separator = useModSetting<number>(
    api,
    `${LASTFM_PREFIX}separatorType`,
    0,
  )
  const autoLike = useModSetting<boolean>(
    api,
    `${LASTFM_PREFIX}autoLike`,
    false,
  )
  const fromYnison = useModSetting<boolean>(
    api,
    `${LASTFM_PREFIX}fromYnison`,
    false,
  )
  const [userInfo, setUserInfo] = useState<LastFmUser | null>(null)
  const [isYnisonAvailable, setIsYnisonAvailable] = useState(false)
  const [isAuthBusy, setIsAuthBusy] = useState(false)
  const [authError, setAuthError] = useState<string>()

  const refreshUser = useCallback(async () => {
    if (!api) return
    setUserInfo(normalizeUserInfo(await api.getLastFmUser()))
  }, [api])

  useEffect(() => {
    if (!api) return
    let active = true
    const unsubscribe = api.onLastFmUserInfoChange((value) => {
      if (active) setUserInfo(normalizeUserInfo(value))
    })

    void api
      .getLastFmUser()
      .then((value) => {
        if (active) setUserInfo(normalizeUserInfo(value))
      })
      .catch((reason: unknown) => {
        if (active)
          setAuthError(
            reason instanceof Error
              ? reason.message
              : 'Не удалось получить профиль LastFM',
          )
      })
    void api.getLastFmYnisonAvailability().then((available) => {
      if (active) setIsYnisonAvailable(available)
    })

    return () => {
      active = false
      unsubscribe()
    }
  }, [api])

  const toggleAuth = useCallback(async () => {
    if (!api || isAuthBusy) return
    setIsAuthBusy(true)
    setAuthError(undefined)
    try {
      if (userInfo) await api.logoutLastFm()
      else await api.loginLastFm()
      await refreshUser()
    } catch (reason) {
      setAuthError(
        userInfo
          ? reason instanceof Error
            ? reason.message
            : 'Не удалось выйти из LastFM'
          : 'Не удалось авторизоваться в LastFM\nУбедитесь, что домены ниже проксируются:\nlast.fm\nws.audioscrobbler.com',
      )
    } finally {
      setIsAuthBusy(false)
    }
  }, [api, isAuthBusy, refreshUser, userInfo])

  const hasUser = Boolean(userInfo)
  const ynisonEnabled = hasUser && enabled.value && isYnisonAvailable
  const items: SettingsSchemaItem[] = [
    {
      id: 'lastfm-account',
      type: 'action',
      props: {
        avatarUrl: getAvatarUrl(userInfo),
        title: getUserTitle(userInfo),
        description: userInfo
          ? 'Выйти из LastFM'
          : authError ?? 'Авторизоваться в LastFM',
        disabled: !api || isAuthBusy,
        onClick: () => void toggleAuth(),
      },
    },
    {
      id: `${LASTFM_PREFIX}enable`,
      type: 'toggle',
      props: {
        title: 'Скробблинг в LastFM',
        checked: enabled.value,
        disabled: !hasUser || enabled.isLoading,
        onChange: (value) => void enabled.update(value),
      },
    },
    {
      id: `${LASTFM_PREFIX}separatorType`,
      type: 'select',
      props: {
        title: 'Разделитель',
        description:
          'Разделитель между артистами при скробблинге треков с несколькими артистами',
        value: String(separator.value),
        options: [
          { value: '0', label: 'Нет', description: 'Только первый артист' },
          { value: '1', label: '" & "', description: 'Артист & артист' },
          { value: '2', label: '" | "', description: 'Артист | артист' },
          { value: '3', label: '", "', description: 'Артист, артист' },
        ],
        disabled: !enabled.value || separator.isLoading,
        onChange: (value) => void separator.update(Number(value)),
      },
    },
    {
      id: `${LASTFM_PREFIX}autoLike`,
      type: 'toggle',
      props: {
        title: 'Синхронизировать лайки',
        description: 'Автоматически лайкает/анлайкает треки в LastFM',
        checked: autoLike.value,
        disabled: !hasUser || !enabled.value || autoLike.isLoading,
        onChange: (value) => void autoLike.update(value),
      },
    },
    {
      id: `${LASTFM_PREFIX}fromYnison`,
      type: 'toggle',
      props: {
        title: 'Использовать Ynison',
        description: isYnisonAvailable
          ? 'Скробблить проигрывания даже с других устройств'
          : 'Недоступно в вашем регионе или регионе VPN',
        badge: { label: 'BETA', disabled: !ynisonEnabled },
        checked: fromYnison.value,
        disabled: !ynisonEnabled || fromYnison.isLoading,
        onChange: (value) => void fromYnison.update(value),
      },
    },
  ]

  return (
    <SettingsSection
      title="Скробблинг"
      items={items}
      error={
        enabled.error ??
        separator.error ??
        autoLike.error ??
        fromYnison.error
      }
    />
  )
}
