const { DEFAULTS } = require('./constants.js');
const { YandexAuthClient } = require('./YandexAuthClient.js');
const { YandexGlagolClient } = require('./YandexGlagolClient.js');
const { YandexMdnsDiscovery } = require('./YandexMdnsDiscovery.js');
const { YandexQuasarClient } = require('./YandexQuasarClient.js');
const { YandexGlagolError } = require('./errors.js');

/**
 * @typedef {object} AccountSpeaker
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {string=} householdId
 * @property {string=} householdName
 * @property {string=} roomId
 * @property {string=} roomName
 * @property {string=} itemType
 * @property {boolean} isYandexSpeaker
 * @property {boolean} isCastCandidate
 * @property {object} raw
 * @property {{ iotDeviceId: string, glagolDeviceId?: string, platform?: string, quasarInfo?: object, raw: object }=} configuration
 */

/**
 * @typedef {object} LocalSpeaker
 * @property {string} host
 * @property {number} port
 * @property {string=} instanceName
 * @property {string=} target
 * @property {string=} deviceId
 * @property {string=} platform
 * @property {string=} name
 * @property {Record<string, string | boolean>} txt
 * @property {object[]=} rawRecords
 */

/**
 * @typedef {object} ResolvedSpeaker
 * @property {AccountSpeaker} accountSpeaker
 * @property {LocalSpeaker=} localSpeaker
 * @property {boolean} canUseCloud
 * @property {boolean} canUseLocal
 * @property {boolean} canCast
 * @property {string=} reason
 */

function normalizeText(value) {
    return String(value ?? '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' ');
}

function compact(value) {
    return value === undefined || value === null || value === '' ? undefined : value;
}

function includesAny(value, needles) {
    const normalized = normalizeText(value);
    return needles.some((needle) => normalized.includes(needle));
}

function hasQuasarCapability(device) {
    const capabilities = Array.isArray(device?.capabilities) ? device.capabilities : [];
    const directives = Array.isArray(device?.directives) ? device.directives : [];
    const serialized = JSON.stringify([...capabilities, ...directives, device?.quasar_info ?? {}]).toLowerCase();

    return serialized.includes('quasar') || serialized.includes('speaker') || serialized.includes('media');
}

function isYandexSpeakerCandidate(device) {
    const type = device?.type ?? device?.device_type ?? '';
    const name = device?.name ?? '';
    const itemType = device?.item_type ?? device?.itemType;

    if (itemType && itemType !== 'device') return false;

    return (
        includesAny(type, ['smart_speaker', 'station', 'speaker', 'yandex.station']) || includesAny(name, ['станция', 'алиса', 'alice']) || hasQuasarCapability(device)
    );
}

function mapAccountSpeaker(device, household, configuration) {
    const type = compact(device.type ?? device.device_type) ?? '';
    const itemType = compact(device.item_type ?? device.itemType);
    const quasarInfo = configuration?.quasar_info ?? configuration?.quasarInfo;

    return {
        id: String(device.id),
        name: compact(device.name) ?? String(device.id),
        type,
        householdId: compact(household?.id),
        householdName: compact(household?.name),
        roomId: compact(device.room_id ?? device.roomId ?? device.room?.id),
        roomName: compact(device.room_name ?? device.roomName ?? device.room?.name),
        itemType,
        isYandexSpeaker: true,
        isCastCandidate: true,
        raw: device,
        configuration: configuration
            ? {
                  iotDeviceId: String(device.id),
                  glagolDeviceId: compact(quasarInfo?.device_id ?? quasarInfo?.deviceId ?? configuration.device_id),
                  platform: compact(quasarInfo?.platform ?? configuration.platform),
                  quasarInfo,
                  raw: configuration,
              }
            : undefined,
    };
}

function matchesLocalSpeakerByName(accountSpeaker, localSpeaker) {
    const accountName = normalizeText(accountSpeaker.name);
    const localName = normalizeText(localSpeaker.name ?? localSpeaker.instanceName);

    if (!accountName || !localName) return false;

    return accountName.includes(localName) || localName.includes(accountName);
}

class YandexStationService {
    constructor(options = {}) {
        this.logger = options.logger ?? console;
        this.mdnsTimeoutMs = options.mdnsTimeoutMs ?? DEFAULTS.mdnsTimeoutMs;
        this.requestTimeoutMs = options.requestTimeoutMs ?? DEFAULTS.requestTimeoutMs;
        this.cookies = null;
        this.authTokens = null;

        this.quasarClient = new YandexQuasarClient({
            getCookies: () => this.cookies,
            logger: this.logger,
            requestTimeoutMs: this.requestTimeoutMs,
        });
        this.authClient = new YandexAuthClient({
            getCookies: () => this.cookies,
            logger: this.logger,
            requestTimeoutMs: this.requestTimeoutMs,
        });
        this.glagolClient = new YandexGlagolClient({
            logger: this.logger,
            requestTimeoutMs: this.requestTimeoutMs,
        });
    }

    /**
     * Store Yandex cookies in memory for later main-process requests.
     *
     * @param {string | Array<{ name: string, value: string, domain?: string }>} cookies
     */
    setCookies(cookies) {
        this.cookies = cookies;
        this.authTokens = null;
    }

    /**
     * Load account speakers from iot.quasar.yandex.ru and enrich them with per-device configuration.
     *
     * @returns {Promise<AccountSpeaker[]>}
     */
    async getAccountSpeakers() {
        const devicesResponse = await this.quasarClient.getDevices();
        const candidates = [];

        for (const household of devicesResponse.households) {
            for (const device of household.all ?? []) {
                if (isYandexSpeakerCandidate(device)) {
                    candidates.push({ device, household });
                }
            }
        }

        const speakers = await Promise.all(
            candidates.map(async ({ device, household }) => {
                let configuration;

                try {
                    configuration = await this.quasarClient.getDeviceConfiguration(device.id);
                } catch (error) {
                    this.logger.warn?.('Failed to load Yandex speaker configuration', {
                        iotDeviceId: device.id,
                        code: error.code,
                        statusCode: error.statusCode,
                        endpoint: error.endpoint,
                    });
                }

                return mapAccountSpeaker(device, household, configuration);
            }),
        );

        return speakers.filter((speaker) => speaker.isYandexSpeaker || speaker.isCastCandidate);
    }

    /**
     * Discover locally available Yandex Stations via Zeroconf/mDNS.
     *
     * @returns {Promise<LocalSpeaker[]>}
     */
    async discoverLocalSpeakers() {
        const discovery = new YandexMdnsDiscovery({
            logger: this.logger,
            mdnsTimeoutMs: this.mdnsTimeoutMs,
        });

        return await discovery.discover();
    }

    findMatchingLocalSpeaker(accountSpeaker, localSpeakers, usedLocalSpeakers) {
        const glagolDeviceId = normalizeText(accountSpeaker.configuration?.glagolDeviceId);

        if (glagolDeviceId) {
            const directMatch = localSpeakers.find((localSpeaker) => !usedLocalSpeakers.has(localSpeaker) && normalizeText(localSpeaker.deviceId) === glagolDeviceId);
            if (directMatch) return directMatch;
        }

        const accountPlatform = normalizeText(accountSpeaker.configuration?.platform);
        if (!accountPlatform) return null;

        return (
            localSpeakers.find((localSpeaker) => {
                if (usedLocalSpeakers.has(localSpeaker)) return false;
                if (normalizeText(localSpeaker.platform) !== accountPlatform) return false;

                return matchesLocalSpeakerByName(accountSpeaker, localSpeaker);
            }) ?? null
        );
    }

    /**
     * Resolve account speakers against local mDNS speakers and mark cloud/local/cast availability.
     *
     * @returns {Promise<ResolvedSpeaker[]>}
     */
    async resolveSpeakers() {
        const [accountSpeakers, localSpeakers] = await Promise.all([this.getAccountSpeakers(), this.discoverLocalSpeakers()]);
        const usedLocalSpeakers = new Set();

        return accountSpeakers.map((accountSpeaker) => {
            const localSpeaker = this.findMatchingLocalSpeaker(accountSpeaker, localSpeakers, usedLocalSpeakers);
            if (localSpeaker) usedLocalSpeakers.add(localSpeaker);

            return {
                accountSpeaker,
                localSpeaker: localSpeaker ?? undefined,
                canUseCloud: true,
                canUseLocal: Boolean(localSpeaker),
                canCast: Boolean(localSpeaker && accountSpeaker.isCastCandidate),
                reason: localSpeaker ? undefined : 'No matching local _yandexio._tcp.local speaker was discovered',
            };
        });
    }

    /**
     * Exchange current in-memory cookies for x_token and the derived Music token.
     *
     * @returns {Promise<{ xToken: string, musicToken: string }>}
     */
    async getAuthTokensFromCookies() {
        if (!this.authTokens) {
            this.authTokens = await this.authClient.getAuthTokensFromCookies();
        }

        return {
            xToken: this.authTokens.xToken,
            musicToken: this.authTokens.musicToken,
        };
    }

    /**
     * Build local Glagol connection info for a resolved speaker.
     *
     * @param {ResolvedSpeaker} speaker
     * @returns {Promise<{ conversationToken: string, host: string, port: number, deviceId: string, platform: string }>}
     */
    async getGlagolConnectionInfo(speaker) {
        const accountSpeaker = speaker?.accountSpeaker;
        const localSpeaker = speaker?.localSpeaker;
        const deviceId = accountSpeaker?.configuration?.glagolDeviceId;
        const platform = accountSpeaker?.configuration?.platform;

        if (!deviceId || !platform || !localSpeaker?.host || !localSpeaker?.port) {
            throw new YandexGlagolError({
                code: 'GLAGOL_CONNECTION_INFO_INCOMPLETE',
                message: 'Resolved Yandex speaker does not include the required local Glagol fields',
            });
        }

        const { musicToken } = await this.getAuthTokensFromCookies();
        const conversationToken = await this.glagolClient.getConversationToken({
            deviceId,
            platform,
            musicToken,
        });

        return {
            conversationToken,
            host: localSpeaker.host,
            port: localSpeaker.port,
            deviceId,
            platform,
        };
    }

    /**
     * Diagnostic local Glagol probe. Sends softwareVersion and returns the raw response.
     *
     * @param {ResolvedSpeaker} speaker
     * @returns {Promise<object>}
     */
    async probeLocalSpeaker(speaker) {
        const connectionInfo = await this.getGlagolConnectionInfo(speaker);
        return await this.glagolClient.probeSoftwareVersion(connectionInfo);
    }
}

module.exports = {
    YandexStationService,
};
