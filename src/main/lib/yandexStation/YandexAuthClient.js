const { DEFAULTS, ENDPOINTS, REVERSE_ENGINEERED_CLIENTS } = require('./constants.js');
const { YandexAuthError } = require('./errors.js');
const { sanitizeJson } = require('./sanitize.js');

function normalizeCookieInput(cookies) {
    if (!cookies) {
        return {
            cookieHeader: '',
            clientHost: 'passport.yandex.ru',
        };
    }

    if (Array.isArray(cookies)) {
        const cookieHeaderByName = new Map();

        cookies.forEach((cookie) => {
            if (!cookie?.name || cookie.value === undefined || cookie.value === null) return;
            if (!cookieHeaderByName.has(cookie.name)) {
                cookieHeaderByName.set(cookie.name, `${cookie.name}=${cookie.value}`);
            }
        });

        const clientHost =
            cookies.find((cookie) => typeof cookie?.domain === 'string' && cookie.domain.includes('yandex.'))?.domain?.replace(/^\./, '') ?? 'passport.yandex.ru';

        return {
            cookieHeader: Array.from(cookieHeaderByName.values()).join('; '),
            clientHost,
        };
    }

    const rawCookies = String(cookies).trim();

    if (rawCookies.startsWith('[')) {
        try {
            const parsedCookies = JSON.parse(rawCookies);
            return normalizeCookieInput(parsedCookies);
        } catch (error) {
            throw new YandexAuthError({
                code: 'INVALID_COOKIE_JSON',
                message: 'Yandex cookies JSON is invalid',
                cause: error,
            });
        }
    }

    return {
        cookieHeader: rawCookies,
        clientHost: 'passport.yandex.ru',
    };
}

async function readJsonResponse(response) {
    const text = await response.text();
    if (!text) return {};

    try {
        return JSON.parse(text);
    } catch (error) {
        throw new YandexAuthError({
            code: 'INVALID_AUTH_RESPONSE',
            message: 'Yandex auth response is not valid JSON',
            statusCode: response.status,
            endpoint: response.url,
            cause: error,
        });
    }
}

class YandexAuthClient {
    constructor({ getCookies, logger, requestTimeoutMs = DEFAULTS.requestTimeoutMs } = {}) {
        this.getCookies = getCookies;
        this.logger = logger ?? console;
        this.requestTimeoutMs = requestTimeoutMs;
    }

    getCookieContext() {
        const context = normalizeCookieInput(this.getCookies?.());

        if (!context.cookieHeader) {
            throw new YandexAuthError({
                code: 'COOKIES_REQUIRED',
                message: 'Yandex cookies are required for auth token exchange',
            });
        }

        return context;
    }

    async request(url, options = {}) {
        if (typeof fetch !== 'function') {
            throw new YandexAuthError({
                code: 'FETCH_UNAVAILABLE',
                message: 'Global fetch is unavailable in this Electron main process',
                endpoint: url,
            });
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), this.requestTimeoutMs);

        try {
            return await fetch(url, {
                ...options,
                signal: options.signal ?? controller.signal,
            });
        } catch (error) {
            throw new YandexAuthError({
                code: error.name === 'AbortError' ? 'AUTH_REQUEST_TIMEOUT' : 'AUTH_REQUEST_FAILED',
                message: 'Yandex auth request failed',
                endpoint: url,
                cause: error,
            });
        } finally {
            clearTimeout(timeout);
        }
    }

    async getXTokenFromCookies() {
        const { cookieHeader, clientHost } = this.getCookieContext();
        const body = new URLSearchParams({
            client_id: REVERSE_ENGINEERED_CLIENTS.passport.clientId,
            client_secret: REVERSE_ENGINEERED_CLIENTS.passport.clientSecret,
        });

        const response = await this.request(ENDPOINTS.passportTokenBySessionId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Ya-Client-Host': clientHost,
                'Ya-Client-Cookie': cookieHeader,
            },
            body,
        });
        const json = await readJsonResponse(response);

        if (!response.ok || !json.access_token) {
            this.logger.warn?.('Yandex x_token exchange failed', sanitizeJson({ statusCode: response.status, response: json }));
            throw new YandexAuthError({
                code: 'X_TOKEN_EXCHANGE_FAILED',
                message: 'Failed to exchange Yandex cookies for x_token',
                statusCode: response.status,
                endpoint: ENDPOINTS.passportTokenBySessionId,
            });
        }

        return json.access_token;
    }

    async validateXToken(xToken) {
        const response = await this.request(ENDPOINTS.passportShortInfo, {
            method: 'GET',
            headers: {
                Authorization: `OAuth ${xToken}`,
            },
        });
        const json = await readJsonResponse(response);

        if (!response.ok || json.status !== 'ok') {
            this.logger.warn?.('Yandex x_token validation failed', sanitizeJson({ statusCode: response.status, response: json }));
            throw new YandexAuthError({
                code: 'X_TOKEN_VALIDATION_FAILED',
                message: 'Yandex x_token validation failed',
                statusCode: response.status,
                endpoint: ENDPOINTS.passportShortInfo,
            });
        }

        return json;
    }

    async getMusicTokenFromXToken(xToken) {
        const body = new URLSearchParams({
            grant_type: 'x-token',
            access_token: xToken,
            client_id: REVERSE_ENGINEERED_CLIENTS.music.clientId,
            client_secret: REVERSE_ENGINEERED_CLIENTS.music.clientSecret,
        });
        const response = await this.request(ENDPOINTS.mobileOauthToken, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
        });
        const json = await readJsonResponse(response);

        if (!response.ok || !json.access_token) {
            this.logger.warn?.('Yandex music token exchange failed', sanitizeJson({ statusCode: response.status, response: json }));
            throw new YandexAuthError({
                code: 'MUSIC_TOKEN_EXCHANGE_FAILED',
                message: 'Failed to derive Yandex Music token from x_token',
                statusCode: response.status,
                endpoint: ENDPOINTS.mobileOauthToken,
            });
        }

        return json.access_token;
    }

    /**
     * Exchange in-memory Yandex cookies for x_token and then for the derived Music token required by Glagol.
     *
     * @returns {Promise<{ xToken: string, musicToken: string }>}
     */
    async getAuthTokensFromCookies() {
        const xToken = await this.getXTokenFromCookies();
        await this.validateXToken(xToken);
        const musicToken = await this.getMusicTokenFromXToken(xToken);

        return {
            xToken,
            musicToken,
        };
    }
}

module.exports = {
    YandexAuthClient,
    normalizeCookieInput,
};
