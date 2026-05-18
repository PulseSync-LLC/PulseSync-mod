const multicastDns = require('multicast-dns');
const os = require('os');
const { DEFAULTS, MDNS } = require('./constants.js');
const { YandexMdnsError } = require('./errors.js');

function normalizeName(name = '') {
    return String(name).replace(/\.$/, '').toLowerCase();
}

function stripTrailingDot(name = '') {
    return String(name).replace(/\.$/, '');
}

function isServiceInstanceName(name) {
    const normalizedName = normalizeName(name);
    const serviceName = normalizeName(MDNS.serviceName);

    return normalizedName !== serviceName && normalizedName.endsWith(`.${serviceName}`);
}

function recordKey(record) {
    return `${record.type}:${normalizeName(record.name)}:${JSON.stringify(record.data)}`;
}

function decodeTxtEntry(entry) {
    const text = Buffer.isBuffer(entry) ? entry.toString('utf8') : String(entry);
    const index = text.indexOf('=');

    if (index === -1) {
        return {
            key: text,
            value: true,
        };
    }

    return {
        key: text.slice(0, index),
        value: text.slice(index + 1),
    };
}

function decodeTxt(data) {
    const entries = Array.isArray(data) ? data : [data];

    return entries.reduce((result, entry) => {
        if (entry === undefined || entry === null) return result;

        const { key, value } = decodeTxtEntry(entry);
        if (key) result[key] = value;

        return result;
    }, {});
}

function isPrivateIpv4(address) {
    const parts = String(address).split('.').map(Number);
    if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) return false;

    return parts[0] === 10 || (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) || (parts[0] === 192 && parts[1] === 168);
}

function getPrivateIpv4Interfaces() {
    const interfaces = os.networkInterfaces();
    const addresses = [];

    Object.values(interfaces).forEach((items) => {
        (items ?? []).forEach((item) => {
            if (item.internal) return;
            if (item.family !== 'IPv4' && item.family !== 4) return;
            if (!isPrivateIpv4(item.address)) return;

            addresses.push(item.address);
        });
    });

    return addresses;
}

class YandexMdnsDiscovery {
    constructor({ logger, mdnsTimeoutMs = DEFAULTS.mdnsTimeoutMs } = {}) {
        this.logger = logger ?? console;
        this.mdnsTimeoutMs = mdnsTimeoutMs;
    }

    createSpeaker(recordSet) {
        const records = Array.from(recordSet.values());
        const srvRecord = records.find((record) => record.type === 'SRV');
        if (!srvRecord?.data?.port) return null;

        const txtRecords = records.filter((record) => record.type === 'TXT');
        const txt = txtRecords.reduce((result, record) => ({ ...result, ...decodeTxt(record.data) }), {});
        const target = srvRecord.data.target;
        const addressRecords = records.filter((record) => ['A', 'AAAA'].includes(record.type) && normalizeName(record.name) === normalizeName(target));
        const address = addressRecords.find((record) => record.type === 'A')?.data ?? addressRecords[0]?.data;
        const instanceName = srvRecord.name;

        return {
            host: address ?? target,
            port: Number(srvRecord.data.port),
            instanceName,
            target,
            deviceId: txt.deviceId ?? txt.device_id ?? txt.id,
            platform: txt.platform,
            name: txt.name ?? txt.deviceName ?? stripTrailingDot(instanceName)?.replace(`.${stripTrailingDot(MDNS.serviceName)}`, ''),
            txt,
            rawRecords: records,
        };
    }

    buildSpeakers(recordsByInstanceName) {
        return Array.from(recordsByInstanceName.values())
            .map((recordSet) => this.createSpeaker(recordSet))
            .filter(Boolean);
    }

    discover() {
        return new Promise((resolve, reject) => {
            const mdnsInstances = [];
            let settled = false;
            let timeout;
            const queryTimers = [];
            const recordsByInstanceName = new Map();
            const allRecordsByKey = new Map();

            const queryService = () => {
                mdnsInstances.forEach(({ mdns }) => {
                    mdns?.query({
                        questions: [
                            {
                                name: MDNS.serviceName,
                                type: 'PTR',
                            },
                        ],
                    });
                });
            };

            const queryInstance = (instanceName) => {
                mdnsInstances.forEach(({ mdns }) => {
                    mdns?.query({
                        questions: [
                            {
                                name: instanceName,
                                type: 'SRV',
                            },
                            {
                                name: instanceName,
                                type: 'TXT',
                            },
                        ],
                    });
                });
            };

            const addRecord = (record, instanceName) => {
                if (!record?.type || !record?.name) return;

                const key = recordKey(record);
                allRecordsByKey.set(key, record);

                const set = recordsByInstanceName.get(instanceName) ?? new Map();
                set.set(key, record);
                recordsByInstanceName.set(instanceName, set);
            };

            const addLinkedAddressRecords = (instanceName) => {
                const records = Array.from(recordsByInstanceName.get(instanceName)?.values() ?? []);
                const srvRecord = records.find((record) => record.type === 'SRV');
                if (!srvRecord?.data?.target) return;

                for (const record of allRecordsByKey.values()) {
                    if (['A', 'AAAA'].includes(record.type) && normalizeName(record.name) === normalizeName(srvRecord.data.target)) {
                        addRecord(record, instanceName);
                    }
                }
            };

            const closeSocket = () => {
                mdnsInstances.forEach(({ mdns, interfaceAddress }) => {
                    try {
                        mdns?.destroy();
                    } catch (error) {
                        this.logger.warn?.('Failed to close Yandex Station mDNS socket', { interfaceAddress, message: error?.message });
                    }
                });
            };

            const processRecords = (records) => {
                for (const record of records) {
                    if (record?.type && record?.name) {
                        allRecordsByKey.set(recordKey(record), record);
                    }
                }

                for (const record of records) {
                    if (record.type === 'PTR' && normalizeName(record.name) === normalizeName(MDNS.serviceName)) {
                        addRecord(record, record.data);
                        queryInstance(record.data);
                    }

                    if (['SRV', 'TXT'].includes(record.type) && isServiceInstanceName(record.name)) {
                        addRecord(record, record.name);
                    }
                }

                for (const record of records) {
                    const instanceName = Array.from(recordsByInstanceName.keys()).find((name) => normalizeName(name) === normalizeName(record.name));
                    if (instanceName && ['SRV', 'TXT'].includes(record.type)) {
                        addRecord(record, instanceName);
                    }
                }

                for (const instanceName of recordsByInstanceName.keys()) {
                    addLinkedAddressRecords(instanceName);
                }
            };

            const finish = () => {
                if (settled) return;
                settled = true;
                clearTimeout(timeout);
                queryTimers.forEach(clearTimeout);
                closeSocket();

                const speakers = this.buildSpeakers(recordsByInstanceName);
                this.logger.debug?.('Yandex Station mDNS discovery finished', {
                    records: allRecordsByKey.size,
                    instances: recordsByInstanceName.size,
                    speakers: speakers.length,
                });

                resolve(speakers);
            };

            const fail = (error) => {
                if (settled) return;
                settled = true;
                clearTimeout(timeout);
                queryTimers.forEach(clearTimeout);
                closeSocket();
                reject(error);
            };

            try {
                const interfaceAddresses = getPrivateIpv4Interfaces();

                if (!interfaceAddresses.length) {
                    interfaceAddresses.push(undefined);
                }

                interfaceAddresses.forEach((interfaceAddress) => {
                    const mdns = multicastDns({
                        bind: '0.0.0.0',
                        interface: interfaceAddress,
                        port: MDNS.port,
                        ip: MDNS.multicastIpv4,
                        ttl: 255,
                        loopback: true,
                        reuseAddr: true,
                    });

                    mdnsInstances.push({ mdns, interfaceAddress });
                    mdns.on('response', (packet) => {
                        processRecords([...(packet.answers ?? []), ...(packet.authorities ?? []), ...(packet.additionals ?? [])]);
                    });
                    mdns.on('warning', (error) => {
                        this.logger.warn?.('Yandex Station mDNS warning', { interfaceAddress, message: error?.message });
                    });
                    mdns.on('error', (error) => {
                        fail(
                            new YandexMdnsError({
                                code: 'MDNS_DISCOVERY_FAILED',
                                message: 'Yandex Station mDNS discovery failed',
                                cause: error,
                            }),
                        );
                    });
                });

                this.logger.debug?.('Yandex Station mDNS discovery started', {
                    interfaces: interfaceAddresses.filter(Boolean),
                    timeoutMs: this.mdnsTimeoutMs,
                });

                [0, 500, 1500, 3000, 6000, 10000, 13000].forEach((delayMs) => {
                    if (delayMs >= this.mdnsTimeoutMs) return;

                    const timer = setTimeout(queryService, delayMs);
                    timer.unref?.();
                    queryTimers.push(timer);
                });

                timeout = setTimeout(finish, this.mdnsTimeoutMs);
                timeout.unref?.();
            } catch (error) {
                fail(
                    new YandexMdnsError({
                        code: 'MDNS_DISCOVERY_FAILED',
                        message: 'Yandex Station mDNS discovery failed',
                        cause: error,
                    }),
                );
            }
        });
    }
}

module.exports = {
    YandexMdnsDiscovery,
};
