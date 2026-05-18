const { randomUUID } = require('crypto');
const WebSocket = require('ws');
const { DEFAULTS, ENDPOINTS } = require('./constants.js');
const { YandexGlagolError } = require('./errors.js');
const { sanitizeJson } = require('./sanitize.js');

async function readJsonResponse(response) {
    const text = await response.text();
    if (!text) return {};

    try {
        return JSON.parse(text);
    } catch (error) {
        throw new YandexGlagolError({
            code: 'INVALID_GLAGOL_RESPONSE',
            message: 'Yandex Glagol response is not valid JSON',
            statusCode: response.status,
            endpoint: response.url,
            cause: error,
        });
    }
}

class YandexGlagolClient {
    constructor({ logger, requestTimeoutMs = DEFAULTS.requestTimeoutMs, responseTimeoutMs = DEFAULTS.glagolResponseTimeoutMs } = {}) {
        this.logger = logger ?? console;
        this.requestTimeoutMs = requestTimeoutMs;
        this.responseTimeoutMs = responseTimeoutMs;
    }

    async requestJson(url, options = {}) {
        if (typeof fetch !== 'function') {
            throw new YandexGlagolError({
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
                signal: options.signal ?? controller.signal,
            });
            const json = await readJsonResponse(response);

            if (!response.ok || json.status !== 'ok') {
                this.logger.warn?.('Yandex Glagol token request failed', sanitizeJson({ statusCode: response.status, response: json }));
                throw new YandexGlagolError({
                    code: 'GLAGOL_TOKEN_REQUEST_FAILED',
                    message: 'Yandex Glagol token request failed',
                    statusCode: response.status,
                    endpoint: url,
                });
            }

            return json;
        } catch (error) {
            if (error instanceof YandexGlagolError) throw error;

            throw new YandexGlagolError({
                code: error.name === 'AbortError' ? 'GLAGOL_TOKEN_REQUEST_TIMEOUT' : 'GLAGOL_TOKEN_REQUEST_FAILED',
                message: 'Yandex Glagol token request failed',
                endpoint: url,
                cause: error,
            });
        } finally {
            clearTimeout(timeout);
        }
    }

    async getConversationToken({ deviceId, platform, musicToken }) {
        const url = new URL(ENDPOINTS.glagolToken);
        url.searchParams.set('device_id', deviceId);
        url.searchParams.set('platform', platform);

        const json = await this.requestJson(url.toString(), {
            method: 'GET',
            headers: {
                Authorization: `OAuth ${musicToken}`,
            },
        });

        if (!json.token) {
            throw new YandexGlagolError({
                code: 'CONVERSATION_TOKEN_MISSING',
                message: 'Yandex Glagol token response does not include conversation token',
                endpoint: ENDPOINTS.glagolToken,
            });
        }

        return json.token;
    }

    connect({ host, port }) {
        if (!host || !port) {
            throw new YandexGlagolError({
                code: 'LOCAL_ENDPOINT_REQUIRED',
                message: 'Local Yandex Station host and port are required',
            });
        }

        return new WebSocket(`wss://${host}:${port}`, {
            rejectUnauthorized: false,
            handshakeTimeout: this.requestTimeoutMs,
        });
    }

    sendCommand(connectionInfo, payload, options = {}) {
        const timeoutMs = options.timeoutMs ?? this.responseTimeoutMs;

        return new Promise((resolve, reject) => {
            const socket = this.connect(connectionInfo);
            const id = options.id ?? randomUUID();
            let settled = false;

            const cleanup = () => {
                clearTimeout(timeout);
                socket.removeAllListeners();
                if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING) {
                    socket.close();
                }
            };

            const settle = (callback, value) => {
                if (settled) return;
                settled = true;
                cleanup();
                callback(value);
            };

            const timeout = setTimeout(() => {
                settle(
                    reject,
                    new YandexGlagolError({
                        code: 'GLAGOL_RESPONSE_TIMEOUT',
                        message: 'Yandex Glagol local command timed out',
                    }),
                );
            }, timeoutMs);

            socket.on('open', () => {
                const message = {
                    conversationToken: connectionInfo.conversationToken,
                    id,
                    payload,
                    sentTime: Date.now(),
                };

                socket.send(JSON.stringify(message));
            });

            socket.on('message', (data) => {
                let message;

                try {
                    message = JSON.parse(data.toString());
                } catch (error) {
                    this.logger.warn?.('Yandex Glagol local response is not valid JSON');
                    return;
                }

                if (message.requestId === id || message.id === id) {
                    settle(resolve, message);
                }
            });

            socket.on('error', (error) => {
                settle(
                    reject,
                    new YandexGlagolError({
                        code: 'GLAGOL_SOCKET_ERROR',
                        message: 'Yandex Glagol local WebSocket failed',
                        cause: error,
                    }),
                );
            });

            socket.on('close', () => {
                if (!settled) {
                    settle(
                        reject,
                        new YandexGlagolError({
                            code: 'GLAGOL_SOCKET_CLOSED',
                            message: 'Yandex Glagol local WebSocket closed before response',
                        }),
                    );
                }
            });
        });
    }

    async probeSoftwareVersion(connectionInfo) {
        return await this.sendCommand(connectionInfo, {
            command: 'softwareVersion',
        });
    }

    async play(connectionInfo) {
        return await this.sendCommand(connectionInfo, {
            command: 'play',
        });
    }

    async pause(connectionInfo) {
        return await this.sendCommand(connectionInfo, {
            command: 'stop',
        });
    }

    async next(connectionInfo) {
        return await this.sendCommand(connectionInfo, {
            command: 'next',
        });
    }

    async previous(connectionInfo) {
        return await this.sendCommand(connectionInfo, {
            command: 'prev',
        });
    }

    async seek(connectionInfo, position) {
        return await this.sendCommand(connectionInfo, {
            command: 'rewind',
            position: Math.max(0, Number(position) || 0),
        });
    }

    async playMusic(connectionInfo, { type = 'track', id }) {
        return await this.sendCommand(connectionInfo, {
            command: 'playMusic',
            type,
            id: String(id),
        });
    }
}

module.exports = {
    YandexGlagolClient,
};
