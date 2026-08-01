import type { PulseSyncPlayer, TrackFormat, TrackQualityInfo } from '../contracts';
import { getPlayerInstance } from '../core/values';

const qualityMap: Record<string, string> = {
    lq: 'LQ',
    nq: 'NQ',
    hq: 'HQ',
    'hq+': 'HQ+',
    hqplus: 'HQ+',
    lossless: 'HQ+',
};

function normalizeCodec(value: unknown) {
    const raw = String(value ?? '').trim().toLowerCase();
    if (!raw) return null;
    if (raw.includes('flac')) return 'FLAC';
    if (raw.includes('mp3') || raw.includes('mpeg')) return 'MP3';
    if (raw.includes('he-aac') || raw.includes('heaac') || raw.includes('mp4a.40.5') || raw.includes('mp4a.40.29')) return 'HE-AAC';
    if (raw.includes('aac') || raw.includes('mp4a')) return 'AAC';
    if (raw.includes('alac')) return 'ALAC';
    return raw.toUpperCase();
}

function normalizeNumber(value: unknown) {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? number : null;
}

function normalizeBitrate(value: unknown) {
    const number = normalizeNumber(value);
    return number ? Math.round(number > 10_000 ? number / 1_000 : number) : null;
}

function formatSampleRate(value: unknown) {
    const sampleRate = normalizeNumber(value);
    return sampleRate ? String(Math.round(sampleRate / 100) / 10) : '?';
}

function normalizeRank(format: TrackFormat, fallback: TrackFormat, bitrateKbits: number | null, codec: string | null) {
    const rawQuality = String(format.quality ?? fallback.quality ?? '').trim().toLowerCase();
    if (qualityMap[rawQuality]) return qualityMap[rawQuality];
    if (format.lossless === true || codec === 'FLAC' || codec === 'ALAC') return 'HQ+';
    if (!bitrateKbits) return null;
    if (bitrateKbits >= 256) return 'HQ+';
    if (bitrateKbits >= 192) return 'HQ';
    if (bitrateKbits >= 128) return 'NQ';
    return 'LQ';
}

function getCurrentTrackDownloadInfo() {
    try {
        const player = getPlayerInstance() as PulseSyncPlayer & {
            state?: { queueState?: { currentEntity?: { value?: { entity?: { mediaSourceData?: { data?: TrackFormat } } } } } };
        };
        return player?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data ?? null;
    } catch {
        return null;
    }
}

export function buildTrackQualityInfo(format: TrackFormat | null = null, fallbackDownloadInfo: TrackFormat | null = null): TrackQualityInfo | null {
    const sourceFormat = format && typeof format === 'object' ? format : {};
    const fallback = fallbackDownloadInfo && typeof fallbackDownloadInfo === 'object' ? fallbackDownloadInfo : {};
    const codec = normalizeCodec(sourceFormat.codec ?? fallback.codec);
    const bitrateKbits = normalizeBitrate(sourceFormat.bitrate ?? fallback.bitrate);
    const parsedBitsPerSample = normalizeNumber(sourceFormat.bitsPerSample);
    const sampleRate = normalizeNumber(sourceFormat.sampleRate);
    const bitsPerSample = parsedBitsPerSample ?? (codec && !['FLAC', 'ALAC'].includes(codec) ? 16 : null);
    const quality = normalizeRank(sourceFormat, fallback, bitrateKbits, codec);
    if (!quality && !codec && !bitrateKbits && !bitsPerSample && !sampleRate) return null;

    const resolution = bitsPerSample || sampleRate ? `${bitsPerSample ?? '?'}/${formatSampleRate(sampleRate)}` : '';
    return {
        quality,
        codec,
        bitsPerSample,
        sampleRate,
        bitrateKbits,
        label: `${quality ?? '?'}: ${codec ?? '?'} ${resolution && `${resolution} `}${bitrateKbits ?? '?'} kbits/s`,
        source: sourceFormat.source ?? null,
        updatedAt: sourceFormat.updatedAt ?? null,
    };
}

async function readYaspAudioFormat() {
    try {
        return (await window.nativeAudioOutput?.getYaspAudioFormat?.()) ?? null;
    } catch (error) {
        console.debug('[PulseSync] Failed to read YASP audio format:', error);
        return null;
    }
}

export function installTrackQualityApi() {
    let lastInfo = window.PulseSyncTrackQuality?.getLastInfo?.() ?? null;
    const updateFromFormat = (format: TrackFormat | null = null, fallback: TrackFormat | null = null) => {
        lastInfo = buildTrackQualityInfo(format, fallback);
        return lastInfo;
    };

    window.PulseSyncTrackQuality = {
        buildInfo: buildTrackQualityInfo,
        updateFromFormat,
        format: (format = null, fallback = null) => buildTrackQualityInfo(format, fallback)?.label ?? null,
        getLastInfo: () => lastInfo,
        getCurrentInfo: async (fallback = null) => updateFromFormat(await readYaspAudioFormat(), fallback ?? getCurrentTrackDownloadInfo()),
        getCurrentLabel: async (fallback = null) => (await window.PulseSyncTrackQuality?.getCurrentInfo(fallback))?.label ?? null,
    };
}
