const { DEFAULTS, ENDPOINTS } = require('./constants.js');
const { YandexQuasarError } = require('./errors.js');
const { normalizeCookieInput } = require('./YandexAuthClient.js');
const { sanitizeJson } = require('./sanitize.js');

async function readJsonResponse(response) {
    const text = await response.text();
    if (!text) return {};

    try {
        return JSON.parse(text);
    } catch (error) {
        if (!response.ok) {
            return {
                status: 'error',
                nonJsonResponse: true,
                contentType: response.headers.get('content-type'),
            };
        }

        throw new YandexQuasarError({
            code: 'INVALID_QUASAR_RESPONSE',
            message: 'Yandex Quasar response is not valid JSON',
            statusCode: response.status,
            endpoint: response.url,
            cause: error,
        });
    }
}

class YandexQuasarClient {
    constructor({ getCookies, logger, requestTimeoutMs = DEFAULTS.requestTimeoutMs } = {}) {
        this.getCookies = getCookies;
        this.logger = logger ?? console;
        this.requestTimeoutMs = requestTimeoutMs;
    }

    getCookieHeader() {
        const { cookieHeader } = normalizeCookieInput(this.getCookies?.());

        if (!cookieHeader) {
            throw new YandexQuasarError({
                code: 'COOKIES_REQUIRED',
                message: 'Yandex cookies are required for Quasar API requests',
            });
        }

        return cookieHeader;
    }

    async requestJson(url, options = {}) {
        if (typeof fetch !== 'function') {
            throw new YandexQuasarError({
                code: 'FETCH_UNAVAILABLE',
                message: 'Global fetch is unavailable in this Electron main process',
                endpoint: url,
            });
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), this.requestTimeoutMs);

        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    Cookie: this.getCookieHeader(),
                    Referer: 'https://yandex.ru/quasar',
                    ...options.headers,
                },
                signal: options.signal ?? controller.signal,
            });
            const json = await readJsonResponse(response);

            if (!response.ok || json.status === 'error') {
                this.logger.warn?.('Yandex Quasar request failed', sanitizeJson({ endpoint: url, statusCode: response.status, response: json }));
                throw new YandexQuasarError({
                    code: response.status === 401 || response.status === 403 ? 'QUASAR_AUTH_FAILED' : 'QUASAR_REQUEST_FAILED',
                    message:
                        response.status === 401 || response.status === 403
                            ? 'Yandex Quasar authorization failed; Electron session cookies are missing, stale, or not valid for Quasar'
                            : 'Yandex Quasar request failed',
                    statusCode: response.status,
                    endpoint: url,
                });
            }

            return json;
        } catch (error) {
            if (error instanceof YandexQuasarError) throw error;

            throw new YandexQuasarError({
                code: error.name === 'AbortError' ? 'QUASAR_REQUEST_TIMEOUT' : 'QUASAR_REQUEST_FAILED',
                message: 'Yandex Quasar request failed',
                endpoint: url,
                cause: error,
            });
        } finally {
            clearTimeout(timeout);
        }
    }

    async getDevices() {
        const json = await this.requestJson(ENDPOINTS.quasarDevices);

        if (json.status !== 'ok' || !Array.isArray(json.households)) {
            throw new YandexQuasarError({
                code: 'INVALID_DEVICES_RESPONSE',
                message: 'Yandex Quasar devices response has an unexpected shape',
                endpoint: ENDPOINTS.quasarDevices,
            });
        }

        return json;
    }

    async getDeviceConfiguration(deviceId) {
        const endpoint = ENDPOINTS.quasarDeviceConfiguration(deviceId);
        const json = await this.requestJson(endpoint);

        if (json.status !== 'ok') {
            throw new YandexQuasarError({
                code: 'INVALID_CONFIGURATION_RESPONSE',
                message: 'Yandex Quasar device configuration response has an unexpected status',
                endpoint,
            });
        }

        return json;
    }

    async getCsrfToken2() {
        if (typeof fetch !== 'function') {
            throw new YandexQuasarError({
                code: 'FETCH_UNAVAILABLE',
                message: 'Global fetch is unavailable in this Electron main process',
                endpoint: ENDPOINTS.quasarPage,
            });
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), this.requestTimeoutMs);

        try {
            const response = await fetch(ENDPOINTS.quasarPage, {
                headers: {
                    Cookie: this.getCookieHeader(),
                },
                signal: controller.signal,
            });
            const text = await response.text();
            const match = text.match(/"csrfToken2":"(.+?)"/);

            if (!response.ok || !match?.[1]) {
                throw new YandexQuasarError({
                    code: 'CSRF_TOKEN_NOT_FOUND',
                    message: 'Yandex Quasar csrfToken2 was not found',
                    statusCode: response.status,
                    endpoint: ENDPOINTS.quasarPage,
                });
            }

            return match[1];
        } catch (error) {
            if (error instanceof YandexQuasarError) throw error;

            throw new YandexQuasarError({
                code: error.name === 'AbortError' ? 'CSRF_REQUEST_TIMEOUT' : 'CSRF_REQUEST_FAILED',
                message: 'Yandex Quasar csrfToken2 request failed',
                endpoint: ENDPOINTS.quasarPage,
                cause: error,
            });
        } finally {
            clearTimeout(timeout);
        }
    }
}

module.exports = {
    YandexQuasarClient,
};
