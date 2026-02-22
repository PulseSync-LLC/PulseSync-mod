# PulseSync-mod

[![OS - Windows](https://img.shields.io/badge/OS-Windows-blue)](https://pulsesync.dev "Download") [![OS - MacOS](https://img.shields.io/badge/OS-Mac-blue)](https://pulsesync.dev "Download") [![OS - MacOS](https://img.shields.io/badge/OS-Linux-blue)](https://pulsesync.dev "Download")

<p align="left">
	<a href="https://discord.gg/7kvrMavsX6">
      <img width="113" alt="Сервер" src="https://github.com/user-attachments/assets/b7c8a272-b48c-411f-aca3-6512086a9a18">
   </a>
</p>

### Это модификация для [настольного приложения Яндекс Музыка](https://music.yandex.com/download/), главная задача которой — добавить недостающие ванильному клиенту функции.

> [!CAUTION]
> ### Данная модификация НЕ даёт возможность пользоваться сервисом БЕЗ подписки Яндекс Плюс!

## Установка

0. Загрузите последнюю версию клиента Яндекс музыки с официального сайта https://music.yandex.com/download/.
1. Скачайте и установите PulseSync Client с сайта https://pulsesync.dev/ следуя его порядку установки.
2. Запустите PulseSync Client и нажмите в нём "Установить мод".
3. Дождитесь окончания установки.
4. Готово!

## Возможности

### Discord Статус

<details>
   <summary>Подробнее</summary>

Добавляет поддержку отображения текущего трека как статуса в Discord.
![image](https://github.com/user-attachments/assets/ff3b0726-6f83-4849-bce6-c5eb31523efa)

</details>

### Управление плеером с других устройств

<details>
   <summary>Подробнее</summary>

Добавляет поддержку управления воспроизведением настольного клиента с других устройств.
<div>
	<img width="250" alt="Список устройств для воспроизведения" src="https://github.com/user-attachments/assets/17196b75-85c4-42f0-af81-ab62123fde5c">
	<img width="250" alt="Управление воспроизведение с телефона на ПК клиенте" src="https://github.com/user-attachments/assets/305a94f9-4908-4c47-9d75-c0838dbad805">
</div>
<div>
	<img width="504" alt="DiscordCanary_q3lSyzS2R9" src="https://github.com/user-attachments/assets/ebd7a0c0-db68-4c26-b0f9-481e1ea9e57b" />
	<br/>
	<img width="504" alt="Яндекс_Музыка_1AZwtDf0Tz" src="https://github.com/user-attachments/assets/ec3cba2f-9b58-4a07-bc60-1920fc94b759" />
</div>

<details>
   <summary>Настройки</summary>

Можно выключить в настройках внутри приложения:

![image](https://github.com/user-attachments/assets/8b7280d6-f2ef-4a0e-8835-32e173a1e843)

</details>

</details>

### Скробблинг Last.FM

<details>
   <summary>Подробнее</summary>

Добавляет поддержку скробблинга в Last.FM. Трек заскробблится, если вы прослушаете хотя бы его половину (но при этом
запрос скроббла отправиться при смене трека).

<img width="550" alt="Страница пользователя Last.FM с заскроббленными треками" src="https://github.com/user-attachments/assets/9a47a37b-b895-4a06-8538-fb94eb009290">

<details>
   <summary>Настройки</summary>

Авторизоваться в Last.FM, а также включить/выключить функцию можно в соответствующем меню в настройках приложения:

![image](https://github.com/user-attachments/assets/0fbd13ed-7837-49c2-9b28-5bc210480002)

<details>
   <summary>Процесс авторизации</summary>

https://github.com/user-attachments/assets/079f8b38-ca6b-4fef-b6a2-efa853fd583f

</details>

</details>

</details>

### Мини-плеер

<details>
   <summary>Подробнее</summary>

Добавляет миниплеер. Отдельное окно которое отображает текущий трек и даёт возможность удобно управлять
воспроизведением.

Поддерживает широкий спектр размеров окна и плавно адапитируется к ним. Кроме того может быть закреплен поверх окон.

<p align="left">
	<img height="200" alt="Кнопка открытия миниплеера" src="https://github.com/user-attachments/assets/f8f6ae6b-8502-4935-82cb-0b4d610d41ec" />
	<img height="200" alt="image" src="https://github.com/user-attachments/assets/ac2b86e6-c68e-41a0-aa59-758908ca2f14" />
	<img height="400" alt="image" src="https://github.com/user-attachments/assets/58deb47c-d0e0-4c78-9e40-f0ab086dfd87" />
	<img height="400" alt="image" src="https://github.com/user-attachments/assets/d0063404-baf1-4827-8d25-399f8a5e5fa9" />
</p>

</details>

### Настраиваемая папка кеша

<details>
   <summary>Подробнее</summary>

В ванильной версии весь кеш (в том числе скачанные вами треки для офлайн-прослушивания) хранится по пути
`%appdata%/YandexMusic/`.

Данная функция позволяет использовать для кеша другой путь, например, чтобы 10 гигабайт скаченной вами музыки не тратили
место на системном диске.

![image](https://github.com/user-attachments/assets/f48a8d32-d03f-4770-8204-460f37ab059f)

</details>

### Глобальные хоткеи

<details>
   <summary>Подробнее</summary>

Добавляет поддержку глобальных хоткеев.

<details>
   <summary>Настройки</summary>

Гайд по настройке глобальных хоткеев: https://pulsesync.dev/wiki/main/mod/global-shortcuts

Пример конфига:

```json
{
  "globalShortcuts": {
    "TOGGLE_PLAY": "Ctrl+/",
    "MOVE_FORWARD": "Ctrl+,",
    "MOVE_BACKWARD": "Ctrl+.",
    "TOGGLE_SHUFFLE": "Ctrl+'",
    "REPEAT_NONE": "",
    "REPEAT_CONTEXT": "",
    "TOGGLE_LIKE": "",
    "TOGGLE_DISLIKE": ""
  }
}
```

</details>

</details>

### Улучшение превью панели задач

<details>
   <summary>Подробнее</summary>

Добавляет поддержку расширений панели задач (Taskbar Extensions).

![browser_Y2f5KiyCYN](https://github.com/user-attachments/assets/877f5c77-f196-4702-bd44-7da60e1a0d93)

</details>

### Повтор трека в Моей Волне

<details>
   <summary>Подробнее</summary>

Добавляет возможность включить повтор трека когда играет **Моя Волна**.

<p align="left">
	<img width="550" src="https://github.com/user-attachments/assets/85480090-5e19-4ee8-8084-dbb15491451b" alt="Повтор трека в Моей Волне — интерфейс" />
</p>

</details>

### Отображение качества трека

<details>
   <summary>Подробнее</summary>

Отображает качество либо кодек текущего трека.

![image](https://github.com/user-attachments/assets/424434fb-5e66-4a85-8ca2-90179cb7f357)

</details>

### Улучшенная анимация Моей Волны

<details>
   <summary>Подробнее</summary>

Улучшает поведение анимации **Моей Волны**. Она начинает лучше адаптироваться к музыке. Также позволяет настраивать
частоту кадров в секунду при рендеринге анимации.

_До:_

https://github.com/user-attachments/assets/23a8da4d-3d6a-43c6-a5f5-965e065ed912

_После:_

https://github.com/user-attachments/assets/b062a3ee-d05e-4cf3-8e03-b6f8bf66525c

</details>

### LRCLib как дополнительный источник текстов песен

<details>
   <summary>Подробнее</summary>

Если трек не имеет такста в Яндекс Музыке, то мод будет пытаться найти его в LRCLib. LRCLib — это открытая база текстов
песен, которая поддерживается сообществом.

Кроме того это позволяет показывать тексты песен для приватных треков, которые вы сами добавили в Яндекс Музыку.

</details>

### Информация о скачанных треках

<details>
   <summary>Подробнее</summary>

Добавляет информацию о скачанных треках на страницу настроек (количество скачанных треков и используемое хранилище для
скачанных треков).

![image](https://github.com/user-attachments/assets/d3ba9ada-941c-4bd2-8c53-dad54090bf4e)

</details>

### Скачивание треков в файл

<details>
   <summary>Подробнее</summary>

Позволяет скачать любой трек, альбом, плейлист, подкаст, аудиокнигу вам на ПК.

![image](https://github.com/user-attachments/assets/95a52251-401a-4071-9ee3-914b8c7b7c8f)

<img width="838" height="564" alt="image" src="https://github.com/user-attachments/assets/fa31d613-7d9f-4d6c-840e-b41c561f389f" />

<img width="1266" height="105" alt="image" src="https://github.com/user-attachments/assets/b69ab3c6-7805-4a31-b703-5f48688f5284" />

<img width="557" height="317" alt="image" src="https://github.com/user-attachments/assets/1402cdf1-ebe0-4168-9013-f900a3702951" />

</details>

### Произвольный масштаб приложения

<details>
   <summary>Подробнее</summary>

Вы можете менять масштаб приложения сочетанием клавиш `Ctrl+=` и `Ctrl+-`.

_Диапазон масштабов: 75% - 200%._

Сбросить масштаб до 100% можно с помощью `Ctrl+0`.

</details>

### Исправления багов ванильного клиента

<details>
   <summary>Подробнее</summary>

В ванильном клиенте есть набор багов, которые довольно сильно ухудшают опыт использования. Некоторые из них исправлены в
моде. Например:

- Клиент больше не теряет чёткость, если занимает нечётное количество пикселей по высоте или ширине.
- Клиент больше не теряет медиаконтекст (ака медиаклавиши), когда включён кроссфейд.
- Воспроизведение AAC треков не застревает, если перемотать ровно на 1:00.
- Модальные окна в настройках имеют одинаковый бекдроп. Кроме того он появляется плавно.
- Исправлен css темы для компонента слайдеров.
- Кнопки на панели плеера лучше адаптируются к размеру окна приложения. Кроме того делается это плавно.
- В рамках улучшения анимации **Моей Волны** обновлены неверные параметры анализатора (если точнее правильно настроены
  fftSize и smoothingTimeConstant).
- Исправлена проблема из-за которой не за весь тайтл бар можно было перемещать окно приложения по экрану.

</details>

### Эксперименты

<details>
   <summary>Подробнее</summary>

Позволяет включать/выключать эксперименты. Для этого вам нужно включить **Режим разработчика**.

![image](https://github.com/user-attachments/assets/b341e6cb-58e3-4dfa-b8b3-e6ece72539a5)

</details>

### Devtools & Панель Разработчика

<details>
   <summary>Подробнее</summary>

![electron_L6SeZLnSAH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/ae841087-d910-45e5-a007-3fd869a493e1)

![electron_y6aOeckPLH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/4bde4785-9196-4ac6-ad3b-9ac5db5b61c8)

</details>

## Настройки

Настройки можно найти в `%appdata%\YandexMusic\config.json`.

Настройки внутри приложения:
<p align="left">
	<img width="500" alt="Пример настроек внутри приложения" src="https://github.com/user-attachments/assets/c8c96514-4eaa-43eb-8d85-3290e721f5d1" />
</p>

## Сборка проекта из исходников

0. Убедитесь что **Яндекс Музыка** и **node.js** уже установлены.
1. Склонируйте проект:

```cmd
git clone https://github.com/PulseSync-LLC/PulseSync-mod
```

2. Установите зависимости:

```cmd
yarn install
```

Учтите, что зависимости вам нужно устанавливать в корневой папке проекта, а не в `/src/`.

Для удобства сборки в проекте есть cli скрипт `toolset.js`, он позволяет быстро и просто распаковать, упаковать,
опубликовать, спуфнуть, или пропатчить код.

3. Собрать проект:

```cmd
node toolset.js build -d -m
```

Эта команда автоматически оптимизирует код (минифицирует его), а после запакует его по пути **Яндекс Музыки** по
умолчанию `%localappdata%/Programs/YandexMusic/resources/app.asar`.

4. Для быстрой сборки проекта при разработке можете использовать команду:

```cmd
node toolset.js rebuild
```

Не обязательные долгие этапы будут пропущены.
