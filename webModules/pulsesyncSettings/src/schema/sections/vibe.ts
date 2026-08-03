import { defineSettingsSection } from '../types'

const PREFIX = 'modSettings.vibeAnimationEnhancement.'
const DISABLE_RENDERING_KEY = `${PREFIX}disableRendering`
const USE_DYNAMIC_ENERGY_KEY = `${PREFIX}useDynamicEnergy`
const SMOOTH_DYNAMIC_ENERGY_KEY = `${PREFIX}smoothDynamicEnergy`

const animationDisabled = (context: {
  getBoolean: (key: string) => boolean
}) => context.getBoolean(DISABLE_RENDERING_KEY)

export const vibePerformanceSchema = defineSettingsSection({
  title: 'Производительность Моей Волны',
  items: [
    {
      type: 'toggle',
      key: DISABLE_RENDERING_KEY,
      defaultValue: false,
      title: 'Отключить отрисовку анимации Волны',
      description: 'Значительно увеличивает производительность на слабом железе',
    },
    {
      type: 'slider',
      key: `${PREFIX}maxFPS`,
      defaultValue: 60,
      title: 'Ограничение FPS',
      description: 'Верхняя граница FPS. Чем больше, тем плавнее анимация',
      min: 1,
      max: (context) =>
        Math.max(
          context.api?.getDisplayMaxFps() ?? 60,
          context.getNumber(`${PREFIX}maxFPS`),
        ),
      step: 1,
      valueLabel: (value) => `${value} FPS`,
      disabledWhen: animationDisabled,
    },
    {
      type: 'select',
      key: `${PREFIX}canvasResolution`,
      defaultValue: 650,
      title: 'Разрешение анимации Волны',
      options: [
        { value: '300', label: 'Низкое', description: '300x300' },
        {
          value: '650',
          label: 'Среднее',
          description: '650x650. По умолчанию. Как в ванильном приложении',
        },
        { value: '1400', label: 'Высокое', description: '1400x1400' },
      ],
      disabledWhen: animationDisabled,
    },
  ],
})

export const vibeAppearanceSchema = defineSettingsSection({
  title: 'Вид анимации Волны',
  watch: [{ key: DISABLE_RENDERING_KEY, defaultValue: false }],
  items: [
    {
      type: 'toggle',
      key: `${PREFIX}useVibeWidgetColors`,
      defaultValue: false,
      title: 'Использовать альтернативную цветовую схему Волны',
      description:
        'Переключение между радужным и одноцветным градиентом Волны',
      disabledWhen: animationDisabled,
    },
    {
      type: 'slider',
      key: `${PREFIX}vibeIntensityCoefficient`,
      defaultValue: 1.3,
      title: 'Интенсивность реакции на трек',
      description: 'Чем больше, тем сильнее анимация ускоряется под трек',
      min: 0,
      max: 2.5,
      step: 0.1,
      valueLabel: (value) => value.toFixed(1),
      disabledWhen: animationDisabled,
    },
    {
      type: 'toggle',
      key: USE_DYNAMIC_ENERGY_KEY,
      defaultValue: true,
      title: 'Подстраивать скорость анимации под Энергию трека',
      description:
        'Анимация будет подстраивать скорость под Энергию трека в реальном времени',
      disabledWhen: animationDisabled,
    },
    {
      type: 'toggle',
      key: SMOOTH_DYNAMIC_ENERGY_KEY,
      defaultValue: false,
      title: 'Смягчать динамическую энергию',
      description: 'Изменения скорости трека будут более плавными',
      disabledWhen: (context) =>
        animationDisabled(context) ||
        !context.getBoolean(USE_DYNAMIC_ENERGY_KEY),
    },
    {
      type: 'slider',
      key: `${PREFIX}smoothDynamicEnergyCoefficient`,
      defaultValue: 0.2,
      title: 'Коэффициент смягчения энергии',
      description:
        'Чем меньше, тем сильнее сглаживаются изменения скорости анимации',
      min: 0.01,
      max: 1,
      step: 0.01,
      valueLabel: (value) => value.toFixed(2),
      disabledWhen: (context) =>
        animationDisabled(context) ||
        !context.getBoolean(USE_DYNAMIC_ENERGY_KEY) ||
        !context.getBoolean(SMOOTH_DYNAMIC_ENERGY_KEY),
    },
  ],
})

export const vibeBehaviorSchema = defineSettingsSection({
  title: 'Поведение Моей Волны',
  items: [
    {
      type: 'toggle',
      key: `${PREFIX}autoLaunchOnAppStartup`,
      defaultValue: false,
      title: 'Запускать воспроизведение трека при старте приложения',
      description:
        'Запустит последний играющий трек сразу после старта приложения',
    },
    {
      type: 'toggle',
      key: `${PREFIX}enableEndlessMusic`,
      defaultValue: true,
      title: 'Музыка без остановки',
      description:
        'После окончания воспроизведения очереди, запустится волна',
    },
    {
      type: 'toggle',
      key: `${PREFIX}improvedWaveLayout`,
      defaultValue: true,
      title: 'Улучшенный layout страницы Волны',
      description:
        'Включает обновленное расположение кнопок и дополнительные элементы управления на странице Волны',
    },
    {
      type: 'toggle',
      key: `${PREFIX}showAudioQualityOnNewWave`,
      defaultValue: true,
      title: 'Показывать качество на странице новой Волны',
      description:
        'Показывает формат и качество текущего трека. При активном WASAPI Exclusive формат отображается всегда.',
    },
    {
      type: 'toggle',
      key: `${PREFIX}forceOldSettingsInWheel`,
      defaultValue: true,
      title: 'Форсировать старые настройки в колесе Волн',
      description:
        'Когда включено, добавляет кнопку на первый элемент колеса, кнопку открывающую старые настройки Волны',
    },
    {
      type: 'toggle',
      key: `${PREFIX}swapVibeAnimationAndWheel`,
      defaultValue: false,
      title: 'Поменять местами Анимацию Волны и Колесо Волн',
    },
  ],
})
