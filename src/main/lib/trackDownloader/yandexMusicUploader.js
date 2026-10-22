const { createHash } = require('crypto');
const { setTimeout: delay } = require('timers/promises');
const { Logger } = require('../../packages/logger/Logger.js');

const MAX_FILE_SIZE_BYTES = 0x19000000;
const PROCESSING_TIMEOUT_MS = 2 * 60 * 1000;
const POLL_INTERVAL_MS = 3000;

function getTrackId(value) {
    return (typeof value === 'string' || typeof value === 'number') && String(value).trim() ? String(value) : undefined;
}

class YandexMusicUploader {
    constructor(api, { onState, signal } = {}) {
        this.api = api;
        this.onState = onState;
        this.controller = new AbortController();
        this.signal = signal ? AbortSignal.any([signal, this.controller.signal]) : this.controller.signal;
        this.logger = new Logger('YandexMusicUploader');
        this.uploads = new Map();
        this.records = new Map();
        this.skippedCount = 0;
        this.finished = false;
        this.processingDeadline = Infinity;
        this.monitorPromise = null;
    }

    async initialize(playlistKind) {
        if (!Number.isSafeInteger(playlistKind) || playlistKind < 0) throw new Error('Некорректный плейлист для импорта');
        if (!this.api.token) throw new Error('Для импорта нужна авторизация в Яндекс Музыке');
        const response = await this.api.request('GET', 'account/status', { signal: this.signal });
        const account = response.data?.result ?? response.data;
        const uid = String(account?.account?.uid ?? '');
        if (!/^\d+$/.test(uid)) throw new Error('Не удалось определить аккаунт Яндекс Музыки');
        this.uid = uid;
        this.playlistKind = playlistKind;
    }

    notify(record) {
        const state = {
            playlistKind: this.playlistKind,
            uid: this.uid,
            trackId: record.trackId,
            uploadTrackId: record.uploadTrackId,
            fileName: record.fileName,
            status: record.status,
            error: record.error,
        };
        this.logger.info('Import upload state', state);
        try {
            this.onState?.(state);
        } catch (error) {
            this.logger.warn('Failed to notify renderer about import:', error.message);
        }
    }

    async uploadTrack(track) {
        this.signal.throwIfAborted();
        if (track.buffer.byteLength > MAX_FILE_SIZE_BYTES) throw new Error('Файл слишком большой для загрузки в Яндекс Музыку');
        const fingerprint = track.sourceId ? `source:${track.sourceId}` : `sha256:${createHash('sha256').update(track.buffer).digest('hex')}`;
        if (this.uploads.has(fingerprint)) {
            const result = await this.uploads.get(fingerprint);
            this.skippedCount += 1;
            return result;
        }
        const upload = this.uploadOnce(track);
        this.uploads.set(fingerprint, upload);
        return upload;
    }

    async uploadOnce(track) {
        // Allocating another slot can create a duplicate playlist entry, even if the previous response was lost.
        const response = await this.api.request('POST', 'loader/upload-url', {
            searchParams: { uid: this.uid, 'playlist-id': `${this.uid}:${this.playlistKind}`, path: track.fileName },
            signal: this.signal,
        });
        const slot = response.data?.result && typeof response.data.result === 'object' ? response.data.result : response.data;
        if (slot?.result === 'TOO_MANY_FILES') throw new Error('Достигнут лимит загруженных треков в Яндекс Музыке');
        const trackId = slot?.['ugc-track-id'];
        const uploadUrl = slot?.['post-target'];
        if (!trackId || typeof uploadUrl !== 'string' || new URL(uploadUrl).protocol !== 'https:') {
            throw new Error('Яндекс Музыка вернула некорректный адрес загрузки');
        }
        const record = { trackId: String(trackId), uploadTrackId: String(trackId), fileName: track.fileName, status: 'uploading', confirmed: false };
        this.notify(record);
        const controller = new AbortController();
        const signal = AbortSignal.any([this.signal, controller.signal]);
        const timeoutMs = Math.min(10 * 60 * 1000, Math.max(60000, Math.ceil(track.buffer.byteLength / 65536) * 1000 + 30000));
        const timer = setTimeout(() => controller.abort(new Error('Истекло время ожидания отправки файла в Яндекс Музыку')), timeoutMs);
        try {
            const formData = new FormData();
            formData.append('file', new Blob([track.buffer], { type: track.mimeType || 'audio/mpeg' }), track.fileName);
            // The signed upload target receives no OAuth headers and is never automatically retried.
            const uploadResponse = await fetch(uploadUrl, { method: 'POST', body: formData, signal });
            const responseBody = await uploadResponse.text();
            let uploadResult;
            try {
                const parsed = JSON.parse(responseBody);
                uploadResult = parsed?.result && typeof parsed.result === 'object' ? parsed.result : parsed;
            } catch {}
            const resolvedId = getTrackId(uploadResult?.['ugc-track-id'] ?? uploadResult?.['track-id'] ?? uploadResult?.trackId ?? uploadResult?.track?.id);
            if (resolvedId) record.trackId = resolvedId;
            this.logger.info('Import upload response', {
                uploadTrackId: record.uploadTrackId,
                trackId: record.trackId,
                httpStatus: uploadResponse.status,
                responseKeys: uploadResult && typeof uploadResult === 'object' ? Object.keys(uploadResult).slice(0, 16) : [],
            });
            if (!uploadResponse.ok) throw new Error(`Загрузка файла вернула HTTP ${uploadResponse.status}`);
            record.confirmed = true;
            record.status = 'processing';
        } catch (error) {
            this.signal.throwIfAborted();
            record.status = 'unconfirmed';
            record.error = `${error.message}. Проверяется уже созданный трек; повторная отправка не выполняется`;
        } finally {
            clearTimeout(timer);
        }
        this.records.set(record.uploadTrackId, record);
        this.notify(record);
        if (!this.monitorPromise) {
            this.monitorPromise = this.monitor().catch((error) => {
                if (!this.signal.aborted) this.logger.warn('Import processing monitor stopped:', error.message);
            });
        }
        return record;
    }

    getPendingRecords() {
        return [...this.records.values()].filter((record) => !['ready', 'failed'].includes(record.status));
    }

    async getTracksMetadata(ids) {
        const response = await this.api.getTracksMeta(ids, { withProgress: true, signal: this.signal });
        return Array.isArray(response) ? response : Array.isArray(response?.result) ? response.result : [];
    }

    observeProcessing(record, track) {
        const observation = {
            uploadTrackId: record.uploadTrackId,
            requestedTrackId: record.trackId,
            returnedTrackId: getTrackId(track?.id),
            state: track?.state,
            available: track?.available,
            substitutedTrackId: getTrackId(track?.substituted?.id),
        };
        const signature = JSON.stringify(observation);
        if (record.lastObservation !== signature) {
            record.lastObservation = signature;
            this.logger.info('Import processing observation', observation);
        }
    }

    applyTrackMetadata(record, track) {
        this.observeProcessing(record, track);
        if (!track) return;
        const readyTrack = [track, track.substituted].find((item) => item && (item.state === 'playable' || item.available === true));
        const metadata = readyTrack ?? track;
        const resolvedId = getTrackId(metadata.id);
        if (!resolvedId) return;
        const previousId = record.trackId;
        const previousStatus = record.status;
        record.trackId = resolvedId;
        // A reused track can already be playable, without an intermediate processing response for the upload slot.
        if (readyTrack) {
            record.confirmed = true;
            record.status = 'ready';
            delete record.error;
        } else if (metadata.state === 'processing') {
            if (record.confirmed) record.status = 'processing';
        } else if (['failed', 'error'].includes(metadata.state)) {
            record.status = 'failed';
            record.error = `Яндекс Музыка не смогла обработать трек: ${record.fileName}`;
        }
        if (record.status !== previousStatus || record.trackId !== previousId) this.notify(record);
    }

    async refreshProcessing() {
        const pending = this.getPendingRecords();
        for (let offset = 0; offset < pending.length; offset += 50) {
            if (this.finished && Date.now() >= this.processingDeadline) return;
            const batch = pending.slice(offset, offset + 50);
            try {
                const tracks = await this.getTracksMetadata(batch.map((record) => record.trackId));
                const tracksById = new Map(tracks.filter(Boolean).map((track) => [getTrackId(track.id), track]));
                for (const record of batch) {
                    if (this.finished && Date.now() >= this.processingDeadline) return;
                    const track = tracksById.get(record.trackId);
                    if (track) {
                        this.applyTrackMetadata(record, track);
                    } else if (batch.length === 1) {
                        this.applyTrackMetadata(record, tracks.length === 1 ? tracks[0] : undefined);
                    } else {
                        // Query unmatched slots separately: an alias or a partial/reordered batch cannot be matched by array position.
                        const individual = await this.getTracksMetadata([record.trackId]);
                        this.applyTrackMetadata(record, individual.length === 1 ? individual[0] : undefined);
                    }
                }
            } catch (error) {
                this.signal.throwIfAborted();
                this.logger.warn('Failed to check imported tracks; uploads will not be repeated:', error.message);
            }
        }
    }

    async monitor() {
        while (!this.signal.aborted) {
            await this.refreshProcessing();
            if (this.finished && (!this.getPendingRecords().length || Date.now() >= this.processingDeadline)) return;
            await delay(POLL_INTERVAL_MS, undefined, { signal: this.signal });
        }
    }

    async finish() {
        this.finished = true;
        this.processingDeadline = Date.now() + PROCESSING_TIMEOUT_MS;
        await this.monitorPromise;
        this.signal.throwIfAborted();
        const records = [...this.records.values()];
        return {
            importedCount: records.filter((record) => record.confirmed && record.status !== 'failed').length,
            processingCount: records.filter((record) => record.status === 'processing').length,
            unconfirmedCount: records.filter((record) => record.status === 'unconfirmed').length,
            skippedCount: this.skippedCount,
            errors: records.filter((record) => record.status === 'failed').map((record) => record.error),
        };
    }

    dispose() {
        this.controller.abort(new Error('Импорт завершён'));
    }
}

exports.YandexMusicUploader = YandexMusicUploader;
