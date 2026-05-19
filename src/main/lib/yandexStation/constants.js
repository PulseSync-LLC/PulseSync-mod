const ENDPOINTS = {
    quasarDevices: 'https://iot.quasar.yandex.ru/m/v3/user/devices',
    quasarDeviceConfiguration: (deviceId) => `https://iot.quasar.yandex.ru/m/user/devices/${encodeURIComponent(deviceId)}/configuration`,
    quasarPage: 'https://yandex.ru/quasar',
    passportTokenBySessionId: 'https://mobileproxy.passport.yandex.net/1/bundle/oauth/token_by_sessionid',
    passportShortInfo: 'https://mobileproxy.passport.yandex.net/1/bundle/account/short_info/?avatar_size=islands-300',
    mobileOauthToken: 'https://oauth.mobile.yandex.net/1/token',
    glagolToken: 'https://quasar.yandex.net/glagol/token',
};

// Reverse-engineered constants from AlexxIT/YandexStation and the official Yandex Music clients.
// They are intentionally isolated here because this flow is not an official public Quasar/Glagol API.
const REVERSE_ENGINEERED_CLIENTS = {
    passport: {
        clientId: 'c0ebe342af7d48fbbbfcf2d2eedb8f9e',
        clientSecret: 'ad0a908f0aa341a182a37ecd75bc319e',
    },
    music: {
        clientId: '23cabbbdc6cd418abb4b39c32c41195d',
        clientSecret: '53bc75238f0c4d08a118e51fe9203300',
    },
};

const MDNS = {
    serviceName: '_yandexio._tcp.local.',
    multicastIpv4: '224.0.0.251',
    multicastIpv6: 'ff02::fb',
    port: 5353,
};

const DEFAULTS = {
    mdnsTimeoutMs: 15000,
    localSpeakersRefreshIntervalMs: 30000,
    requestTimeoutMs: 15000,
    glagolResponseTimeoutMs: 8000,
    glagolStateTimeoutMs: 1500,
    glagolLatencyTimeoutMs: 1500,
    glagolLatencyCacheMs: 30000,
};

module.exports = {
    DEFAULTS,
    ENDPOINTS,
    MDNS,
    REVERSE_ENGINEERED_CLIENTS,
};
