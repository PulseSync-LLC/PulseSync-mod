import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ModSettingsApi } from '../../api/modSettings'
import type { SettingSelectOption } from '../../components/controls/SettingSelect'
import {
  SettingsSection,
  type SettingsSchemaItem,
} from '../../components/settings/SettingsSection'
import { useBooleanModSetting } from '../../hooks/useBooleanModSetting'

const R128_NORMALIZATION_KEY = 'modSettings.r128Normalization'
const SURROUND_AUDIO_KEY = 'modSettings.enableSurroundAudioCompatibility'
const YASP_TAP_KEY = 'modSettings.nativeAudioOutput.enableYaspChunkTap'
const WASAPI_ENABLED_KEY =
  'modSettings.nativeAudioOutput.enableWasapiExclusiveOutput'
const WASAPI_FULL_VOLUME_KEY =
  'modSettings.nativeAudioOutput.forceWasapiExclusiveFullVolume'

type WasapiFormat = {
  bitsPerSample?: number
  channels?: number
  containerBitsPerSample?: number
  float?: boolean
  sampleRate?: number
}

type WasapiDevice = {
  id: string
  isDefault?: boolean
  isDefaultConsole?: boolean
  name: string
  state?: string
  supportedFormats?: WasapiFormat[]
}

type WasapiStatus = {
  available?: boolean
  supported?: boolean
}

type AudioSettingsProps = {
  api: ModSettingsApi | undefined
  onRestartRequired: () => void
}

function getMaximumWasapiFormat(device: WasapiDevice | null) {
  let formats = Array.isArray(device?.supportedFormats)
    ? device.supportedFormats.filter(
        (format) =>
          format.float !== true &&
          Number(format.sampleRate) > 0 &&
          Number(format.bitsPerSample) > 0 &&
          Number(format.channels) > 0,
      )
    : []
  const stereoFormats = formats.filter((format) => format.channels === 2)
  if (stereoFormats.length) formats = stereoFormats
  return (
    formats
      .slice()
      .sort(
        (first, second) =>
          Number(second.sampleRate) - Number(first.sampleRate) ||
          Number(second.bitsPerSample) - Number(first.bitsPerSample) ||
          Number(second.containerBitsPerSample ?? second.bitsPerSample) -
            Number(first.containerBitsPerSample ?? first.bitsPerSample),
      )[0] ?? null
  )
}

function supports24Bit48000(device: WasapiDevice) {
  return Boolean(
    device.supportedFormats?.some(
      (format) =>
        format.sampleRate === 48000 &&
        format.bitsPerSample === 24 &&
        format.channels === 2 &&
        format.float !== true,
    ),
  )
}

function getWasapiDeviceDescription(
  device: WasapiDevice | null,
  isDefault = false,
) {
  if (!device)
    return 'Системное устройство вывода будет определено автоматически.'

  const format = getMaximumWasapiFormat(device)
  const formatDescription = format
    ? `До: ${format.bitsPerSample} бит${
        format.containerBitsPerSample &&
        format.containerBitsPerSample !== format.bitsPerSample
          ? ` (контейнер ${format.containerBitsPerSample} бит)`
          : ''
      } / ${String(Number(format.sampleRate) / 1000).replace('.', ',')} кГц`
    : 'Поддерживаемые PCM-форматы не определены.'
  const unsupportedDescription = supports24Bit48000(device)
    ? ''
    : '\nУстройство не поддерживает 24 бит / 48 кГц.\nНекоторые треки будут воспроизводиться обычным способом.'

  return `${isDefault ? `Сейчас: ${device.name}.\n` : ''}${formatDescription}${unsupportedDescription}`
}

export function AudioSettings({
  api,
  onRestartRequired,
}: AudioSettingsProps) {
  const r128Normalization = useBooleanModSetting(
    api,
    R128_NORMALIZATION_KEY,
    true,
  )
  const surroundAudio = useBooleanModSetting(api, SURROUND_AUDIO_KEY, false)
  const yaspTap = useBooleanModSetting(api, YASP_TAP_KEY, true)
  const wasapiEnabled = useBooleanModSetting(api, WASAPI_ENABLED_KEY, false)
  const wasapiFullVolume = useBooleanModSetting(
    api,
    WASAPI_FULL_VOLUME_KEY,
    false,
  )
  const [wasapiStatus, setWasapiStatus] = useState<WasapiStatus>()
  const [wasapiDevices, setWasapiDevices] = useState<WasapiDevice[]>([])
  const [selectedWasapiDeviceId, setSelectedWasapiDeviceId] = useState('')
  const [wasapiError, setWasapiError] = useState<string>()
  const isWindows = api?.getPlatform() === 'win32'

  const loadWasapiDevices = useCallback(async () => {
    if (!api || !isWindows) return
    const devices = await api.listWasapiExclusiveDevices()
    setWasapiDevices(Array.isArray(devices) ? devices : [])
  }, [api, isWindows])

  useEffect(() => {
    if (!api || !isWindows) return
    let active = true

    void Promise.all([
      api.getWasapiExclusiveStatus(),
      api.listWasapiExclusiveDevices(),
      api.getSelectedWasapiExclusiveDeviceId(),
    ])
      .then(([status, devices, selectedDeviceId]) => {
        if (!active) return
        setWasapiStatus((status ?? {}) as WasapiStatus)
        setWasapiDevices(Array.isArray(devices) ? devices : [])
        setSelectedWasapiDeviceId(
          typeof selectedDeviceId === 'string' ? selectedDeviceId : '',
        )
      })
      .catch((reason: unknown) => {
        if (!active) return
        setWasapiStatus({ available: false, supported: false })
        setWasapiDevices([])
        setWasapiError(
          reason instanceof Error
            ? reason.message
            : 'Не удалось получить настройки WASAPI Exclusive',
        )
      })

    return () => {
      active = false
    }
  }, [api, isWindows])

  useEffect(() => {
    if (!isWindows) return
    let defaultDeviceChangedAt: number | undefined
    const refreshDefaultDevice = (event: Event) => {
      const changedAt = Number(
        (event as CustomEvent<Record<string, unknown>>).detail
          ?.defaultDeviceChangedAt,
      )
      if (!Number.isFinite(changedAt) || changedAt === defaultDeviceChangedAt)
        return
      defaultDeviceChangedAt = changedAt
      void loadWasapiDevices().catch(() => undefined)
    }

    window.addEventListener(
      'pulse-sync-wasapi-exclusive-output-state-change',
      refreshDefaultDevice,
    )
    return () =>
      window.removeEventListener(
        'pulse-sync-wasapi-exclusive-output-state-change',
        refreshDefaultDevice,
      )
  }, [isWindows, loadWasapiDevices])

  const activeWasapiDevices = wasapiDevices.filter(
    (device) => device.state === 'active',
  )
  const defaultWasapiDevice =
    activeWasapiDevices.find((device) => device.isDefault) ??
    activeWasapiDevices.find((device) => device.isDefaultConsole) ??
    null
  const wasapiDeviceOptions = useMemo<readonly SettingSelectOption[]>(
    () => [
      {
        value: '',
        label: 'По умолчанию',
        description: getWasapiDeviceDescription(defaultWasapiDevice, true),
      },
      ...activeWasapiDevices.map((device) => ({
        value: device.id,
        label: device.name,
        description: getWasapiDeviceDescription(device),
      })),
    ],
    [activeWasapiDevices, defaultWasapiDevice],
  )
  const wasapiSupported = Boolean(
    isWindows && wasapiStatus?.available && wasapiStatus.supported,
  )
  const wasapiSectionDisabled = !wasapiSupported || !yaspTap.value
  const wasapiAvailabilityDescription = !wasapiStatus
    ? 'Проверяем поддержку WASAPI Exclusive...'
    : wasapiSupported
      ? 'Открывает выбранное устройство в эксклюзивном режиме.'
      : 'WASAPI Exclusive недоступен в этой системе.'

  const items: SettingsSchemaItem[] = [
    {
      id: R128_NORMALIZATION_KEY,
      type: 'toggle',
      props: {
        title: 'Нормализация громкости',
        description: 'Приводит громкость треков к единому уровню.',
        badge: { label: 'r128', tooltip: null },
        checked: r128Normalization.value,
        disabled: r128Normalization.isLoading || !api,
        onChange: (value) => {
          void r128Normalization.update(value).then((updated) => {
            if (updated) api?.applyR128Normalization(value)
          })
        },
      },
    },
    {
      id: SURROUND_AUDIO_KEY,
      type: 'toggle',
      props: {
        title: 'Попробовать включить пространственный звук',
        description:
          'Включает поддержку систем 5.1 / 7.1 (Учтите что звук останется в стерео)',
        badge: { label: 'ALPHA' },
        checked: surroundAudio.value,
        disabled: surroundAudio.isLoading || !api,
        onChange: (value) => {
          void surroundAudio.update(value).then((updated) => {
            if (updated) onRestartRequired()
          })
        },
      },
    },
    { id: 'yasp-heading', type: 'heading', text: 'YASP' },
    {
      id: YASP_TAP_KEY,
      type: 'toggle',
      props: {
        title: 'YASP Tap',
        description:
          'Перехватывает расшифрованные аудио сегменты для анализа качества и нативного вывода.',
        badge: { label: 'ALPHA' },
        checked: yaspTap.value,
        disabled: yaspTap.isLoading || !api,
        onChange: (value) => void yaspTap.update(value),
      },
    },
    ...(isWindows
      ? ([
          {
            id: 'wasapi-heading',
            type: 'heading',
            text: 'WASAPI Exclusive',
          },
          {
            id: 'wasapi-note',
            type: 'note',
            text: 'WASAPI Exclusive обеспечивает bit-perfect вывод без системного микшера.\nВ этом режиме только Яндекс Музыка сможет выводить звук на выбранное устройство\nКроме того не работают кроссфейд и нормализация громкости.',
          },
          {
            id: WASAPI_ENABLED_KEY,
            type: 'toggle',
            props: {
              title: 'Включить WASAPI Exclusive',
              description: yaspTap.value
                ? wasapiAvailabilityDescription
                : 'Сначала включите YASP Tap.',
              badge: { label: 'ALPHA', disabled: wasapiSectionDisabled },
              checked: wasapiEnabled.value,
              disabled:
                wasapiEnabled.isLoading || !api || wasapiSectionDisabled,
              onChange: (value: boolean) => void wasapiEnabled.update(value),
            },
          },
          {
            id: WASAPI_FULL_VOLUME_KEY,
            type: 'toggle',
            props: {
              title: 'Форсировать громкость 100%',
              description:
                'Отключает синхронизацию громкости с плеером и выводит WASAPI Exclusive с полной громкостью.',
              checked: wasapiFullVolume.value,
              disabled:
                wasapiFullVolume.isLoading || !api || wasapiSectionDisabled,
              onChange: (value: boolean) =>
                void wasapiFullVolume.update(value),
            },
          },
          {
            id: 'wasapi-device',
            type: 'select',
            props: {
              title: 'Устройство вывода',
              description:
                'Устройство, которое будет открыто в эксклюзивном режиме.',
              value: selectedWasapiDeviceId,
              options: wasapiDeviceOptions,
              disabled: !api || wasapiSectionDisabled,
              onChange: (value: string) => {
                void api
                  ?.selectWasapiExclusiveDevice(value || null)
                  .then((selectedDeviceId) => {
                    setSelectedWasapiDeviceId(
                      typeof selectedDeviceId === 'string'
                        ? selectedDeviceId
                        : '',
                    )
                    setWasapiError(undefined)
                  })
                  .catch((reason: unknown) => {
                    setWasapiError(
                      reason instanceof Error
                        ? reason.message
                        : 'Не удалось выбрать устройство WASAPI Exclusive',
                    )
                  })
              },
            },
          },
        ] satisfies SettingsSchemaItem[])
      : []),
  ]

  const error =
    r128Normalization.error ??
    surroundAudio.error ??
    yaspTap.error ??
    wasapiEnabled.error ??
    wasapiFullVolume.error ??
    wasapiError

  return (
    <SettingsSection title="Настройки аудио" items={items} error={error} />
  )
}
