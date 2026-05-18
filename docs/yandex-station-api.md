# Yandex Station API Notes

Этот модуль находится в `src/main/lib/yandexStation` и рассчитан на Electron main process. UI и хранение cookies на диск
здесь не реализуются.

На старте приложения `YandexStationRuntime` неблокирующе прогревает кеши:

- account speakers через cookies из Electron session;
- local speakers через mDNS `_yandexio._tcp.local`.

Renderer пока читает только кеш:

```js
const accountSpeakers = await window.electron.ipcRenderer.invoke('GET_ACCOUNT_SPEAKERS');
const localSpeakers = await window.electron.ipcRenderer.invoke('GET_LOCAL_SPEAKERS');
```

## A. Получение cookies

Cookies берутся в main process из Electron session и используются как credential для `iot.quasar.yandex.ru`. Их нельзя
логировать, сохранять на диск или отправлять обратно в renderer.

## B. Получение списка устройств аккаунта

Endpoint:

```text
GET https://iot.quasar.yandex.ru/m/v3/user/devices
Cookie: <YANDEX_COOKIE>
```

Ожидаемый ответ содержит `status: "ok"`, `households[]` и `households[].all[]`.

Из `households[].all[]` выбираются кандидаты-колонки:

- `type` содержит `smart_speaker`, `station` или `speaker`;
- `name` содержит `Станция`, `Алиса` или `Alice`;
- `item_type == "device"`, если поле есть;
- дополнительные признаки берутся из capabilities/directives/quasar-данных.

## C. Получение configuration

Endpoint:

```text
GET https://iot.quasar.yandex.ru/m/user/devices/<iotDeviceId>/configuration
Cookie: <YANDEX_COOKIE>
```

Из ответа используются:

- `quasar_info.device_id`;
- `quasar_info.platform`.

Эти поля нужны не для облачного списка устройств, а для локального Glagol-подключения.

## D. Получение локальных колонок

Используется mDNS/Zeroconf:

```text
service: _yandexio._tcp.local
UDP multicast: 5353
IPv4 multicast: 224.0.0.251
IPv6 multicast: ff02::fb
```

Модуль собирает PTR, SRV, TXT, A/AAAA records и возвращает:

- `host`;
- `port`;
- `TXT.deviceId`;
- `TXT.platform`;
- `TXT.name`.

mDNS может не работать при включенном TUN/VPN/proxy/firewall/Wi-Fi isolation. Поэтому архитектура оставляет место для
будущего ручного `host/port`, но сейчас реализовано только обнаружение.

## E. Получение derived music_token

Нельзя использовать произвольный `music_token`, полученный напрямую из приложения Яндекс Музыки. Для Glagol работает
цепочка:

```text
cookies -> x_token -> derived music_token
```

`x_token`:

```text
POST https://mobileproxy.passport.yandex.net/1/bundle/oauth/token_by_sessionid
Ya-Client-Host: passport.yandex.ru
Ya-Client-Cookie: <YANDEX_COOKIE>
```

`derived music_token`:

```text
POST https://oauth.mobile.yandex.net/1/token
grant_type=x-token
access_token=<x_token>
```

Reverse-engineered `client_id/client_secret` вынесены в `constants.js`.

## F. Получение Glagol conversationToken

Endpoint:

```text
GET https://quasar.yandex.net/glagol/token?device_id=<quasar_info.device_id>&platform=<quasar_info.platform>
Authorization: OAuth <derived music_token>
```

Ожидаемый ответ:

```json
{
  "status": "ok",
  "token": "<conversationToken>"
}
```

## G. Локальный WebSocket

URL:

```text
wss://<localHost>:<localPort>
```

TLS certificate у станции локальный, поэтому используется `rejectUnauthorized=false`.

Diagnostic request:

```json
{
  "conversationToken": "...",
  "id": "<uuid>",
  "payload": {
    "command": "softwareVersion"
  },
  "sentTime": 1710000000000
}
```

Ответы связываются по `requestId`. Также колонка может присылать state events без запроса.

## README Snippet

```js
const { YandexStationService } = require('./src/main/lib/yandexStation');

const service = new YandexStationService({ logger: console });

service.setCookies(cookiesFromRenderer);

const accountSpeakers = await service.getAccountSpeakers();
const localSpeakers = await service.discoverLocalSpeakers();
const resolvedSpeakers = await service.resolveSpeakers();

const localReady = resolvedSpeakers.filter((speaker) => speaker.canUseLocal);

if (localReady[0]) {
    const response = await service.probeLocalSpeaker(localReady[0]);
    console.log(response);
}
```
