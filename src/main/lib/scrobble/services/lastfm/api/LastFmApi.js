'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
exports.LastFmApi = void 0;

const { app, net, session } = require('electron');
const signature_1 = require('../utils/signature');
const Logger_1 = require('../../../../../packages/logger/Logger');

/**
 * Handles all Last.fm API communication
 */
class LastFmApi {
    constructor(apiKey, sharedSecret, baseUrl, sessionProvider) {
        this.apiKey = apiKey;
        this.sharedSecret = sharedSecret;
        this.baseUrl = baseUrl;
        this.sessionProvider = sessionProvider;
        this.logger = new Logger_1.Logger('LastFmApi');

        this.systemProxyConfigured = false;
    }

    async configureSystemProxy() {
        await this.ensureSystemProxy();
    }

    async ensureSystemProxy() {
        if (this.systemProxyConfigured) {
            return;
        }

        if (!app.isReady()) {
            await app.whenReady();
        }

        await session.defaultSession.setProxy({
            mode: 'system',
        });

        this.systemProxyConfigured = true;

        await this.logSystemProxy();
    }

    async logSystemProxy() {
        try {
            const proxy = await session.defaultSession.resolveProxy(this.baseUrl);

            this.logger.info(`Resolved system proxy for "${this.baseUrl}": ${proxy}`);

            if (proxy === 'DIRECT') {
                this.logger.info(`Last.fm requests will be sent directly without proxy.`);
            } else {
                this.logger.info(`Last.fm requests will use proxy: ${proxy}`);
            }
        } catch (e) {
            this.logger.error('Failed to resolve system proxy.', e);
        }
    }

    async electronRequest(url, requestOptions = {}) {
        await this.ensureSystemProxy();

        const method = requestOptions.method || 'GET';
        const body = requestOptions.body;

        return await new Promise((resolve, reject) => {
            const request = net.request({
                method,
                url,
                session: session.defaultSession,
            });

            request.on('response', (response) => {
                let responseText = '';

                response.on('data', (chunk) => {
                    responseText += chunk.toString();
                });

                response.on('end', () => {
                    resolve({
                        ok: response.statusCode >= 200 && response.statusCode < 300,
                        status: response.statusCode,
                        statusText: response.statusMessage,
                        headers: response.headers,
                        text: async () => responseText,
                    });
                });

                response.on('error', reject);
            });

            request.on('error', reject);

            if (body !== undefined && body !== null) {
                request.setHeader('Content-Type', 'application/x-www-form-urlencoded');
                request.write(body.toString());
            }

            request.end();
        });
    }

    /**
     * Gets an authentication token from Last.fm
     *
     * @see https://www.last.fm/api/show/auth.getToken
     *
     * @returns A token string for the authentication process
     */
    async getToken() {
        const { token } = await this.request('auth.getToken', undefined, {
            noSig: true,
            noSk: true,
            method: 'GET',
        });

        return token;
    }

    /**
     * Gets a session from Last.fm using a token
     *
     * @see https://www.last.fm/api/show/auth.getSession
     *
     * @param token Auth token from getToken
     * @returns Session object with key and user information
     */
    async getSession(token) {
        const { session } = await this.request('auth.getSession', { token }, { noSk: true, method: 'GET' });

        return session;
    }

    /**
     * Updates the now playing track on Last.fm
     *
     * @see https://www.last.fm/api/show/track.updateNowPlaying
     *
     * @param trackInfo Track information to send
     */
    async updateNowPlaying(trackInfo) {
        const result = await this.request('track.updateNowPlaying', trackInfo);
        this.handleScrobbleResult(result.nowplaying);

        return await this.getCurrentPlayingTrack();
    }

    /**
     * Scrobbles a track on Last.fm
     *
     * @see https://www.last.fm/api/show/track.scrobble
     *
     * @param trackInfo Track information to scrobble
     * @param timestamp Unix timestamp when the track was played
     */
    async scrobble(trackInfo) {
        const result = await this.request('track.scrobble', {
            ...trackInfo,
            timestamp: Math.floor(Date.now() / 1000),
        });

        this.handleScrobbleResult(result.scrobbles.scrobble);
    }

    /**
     * Handles possible warnings from a scrobble result
     *
     * @see https://www.last.fm/api/show/track.scrobble#attributes
     *
     * @param result The result to handle
     * @throws Error if track was ignored
     */
    handleScrobbleResult({ ignoredMessage }) {
        const warningMessages = [];

        if (ignoredMessage?.code !== '0') {
            warningMessages.push(`Track was ignored by Last.fm with code: ${ignoredMessage.code}`);

            if (ignoredMessage['#text']) {
                warningMessages.push(ignoredMessage['#text']);
            }
        }

        if (warningMessages.length > 0) {
            throw new Error(warningMessages.join('; '));
        }
    }

    /**
     * Get user information from Last.fm
     *
     * @see https://www.last.fm/api/show/user.getRecentTracks
     *
     * @param user Optional username to get info for. If not provided, the session's user will be used.
     */
    async getCurrentPlayingTrack(user = undefined) {
        const result = await this.request('user.getRecentTracks', {
            limit: 1,
            nowplaying: true,
            extended: 1,
            user: user ?? this.sessionProvider().name,
        });

        return result?.recenttracks?.track?.filter((track) => track['@attr']?.nowplaying)?.[0];
    }

    /**
     * Get user information from Last.fm
     *
     * @see https://www.last.fm/api/show/user.getInfo
     *
     * @param username Optional username to get info for. If not provided, the session's user will be used.
     */
    getUserInfo(username = undefined) {
        return this.request('user.getInfo', {
            ...(username ? { user: username } : {}),
        });
    }

    /**
     * Love a track for a user profile.
     *
     * @see https://www.last.fm/api/show/track.love
     */
    like(track, artist) {
        return this.request('track.love', {
            track,
            artist,
        });
    }

    /**
     * Unlove a track for a user profile.
     *
     * @see https://www.last.fm/api/show/track.unlove
     */
    unlike(track, artist) {
        return this.request('track.unlove', {
            track,
            artist,
        });
    }

    /**
     * Get the metadata for a track on Last.fm using the artist/track name
     *
     * @see https://www.last.fm/api/show/track.love
     */
    getTrackInfo(track, artist, username = undefined) {
        return this.request('track.getInfo', {
            track,
            artist,
            ...(username ? { user: username } : {}),
        });
    }

    /**
     * Makes a request to the Last.fm API
     *
     * @param method The method to call
     * @param params The parameters to pass to the method
     * @param options The options for the request
     * @returns The response from the Last.fm API
     */
    async request(
        method,
        params = undefined,
        options = {
            noSig: false,
            noSk: false,
            method: 'POST',
        },
    ) {
        const queryParams = new URLSearchParams();
        const isPostMethod = options.method === 'POST';

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    queryParams.append(key, value.toString());
                }
            });
        }

        queryParams.append('method', method);
        queryParams.append('api_key', this.apiKey);

        if (!options.noSk) {
            queryParams.append('sk', this.sessionProvider().key);
        }

        if (!options.noSig) {
            queryParams.append('api_sig', (0, signature_1.generateSignature)(queryParams, this.sharedSecret));
        }

        const url = isPostMethod ? `${this.baseUrl}?format=json` : `${this.baseUrl}?${queryParams.toString()}&format=json`;

        const body = isPostMethod ? queryParams : undefined;

        const response = await this.electronRequest(url, {
            method: options.method,
            body,
        });

        return await this.handleResponse(response);
    }

    /**
     * Handles a response from the Last.fm API
     *
     * @param response The response to handle
     * @returns The parsed response
     * @throws Error if the response is not JSON
     * @throws Error if the response is an API error
     */
    async handleResponse(response) {
        const text = await response.text().catch((e) => {
            this.logger.error('Failed to read response', e);
            throw e;
        });

        this.logger.debug(`Response: "${text}"`);

        let result;

        try {
            result = JSON.parse(text);
        } catch (e) {
            this.logger.error('Failed to parse response:', text);
            throw e;
        }

        if (this.isApiError(result)) {
            this.logger.error(`Received API error.`, `For more information, see https://www.last.fm/api/errorcodes.`, result);

            throw new Error(result.message);
        }

        return result;
    }

    /**
     * `ILastFmApiError` type guard
     *
     * @param error The error to check
     * @returns {boolean} True if the error is an API error, false otherwise
     */
    isApiError(error) {
        return typeof error === 'object' && error !== null && 'error' in error && typeof error.error === 'number';
    }
}

exports.LastFmApi = LastFmApi;
