'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.throttle =
    exports.downloadFileWithProgress =
    exports.makeDecryptor =
    exports.numberToUint8Counter =
    exports.hexStringToUint8Array =
    exports.createDirIfNotExist =
        void 0;

const fs = require('fs');
const fsp = require('fs').promises;
const crypto = require('crypto');
const { Readable, Transform } = require('stream');
const { pipeline } = require('stream/promises');

async function createDirIfNotExist(target) {
    if (!fs.existsSync(target)) {
        await fsp.mkdir(target);
    }
}
exports.createDirIfNotExist = createDirIfNotExist;

function throttle(callee, delay) {
    let lastCall = 0;
    let timeout = null;
    let lastArgs;
    let lastContext;

    return function (...args) {
        const now = Date.now();
        const remaining = delay - (now - lastCall);
        lastContext = this;
        lastArgs = args;

        if (remaining <= 0) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            lastCall = now;
            callee.apply(lastContext, lastArgs);
        } else if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                lastCall = Date.now();
                callee.apply(lastContext, lastArgs);
            }, remaining);
        }
    };
}

exports.throttle = throttle;

/**
 * Скачивает файл по URL, потоково обрабатывает (через трансформер) и сохраняет в файл.
 *
 * @param {string} url - Ссылка на файл
 * @param {string} outputPath - Путь для сохранения файла
 * @param {(progress: number) => void} [onProgress] - Колбэк прогресса (0..1)
 * @param {(() => import('stream').Transform | Promise<import('stream').Transform>)} [transformStream] - Опциональная функция-трансформер
 * @param {{ signal?: AbortSignal }} [options] - Опции выполнения
 */
async function downloadFileWithProgress(url, outputPath, onProgress, transformStream, options = {}) {
    const { signal } = options;
    const startedAt = Date.now();
    const response = await fetch(url, { signal });
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    if (!response.body) throw new Error('Response body is empty');

    const total = parseInt(response.headers.get('content-length') || '0', 10);
    let downloaded = 0;
    let lastChunkAt = startedAt;

    const progressStream = new Transform({
        transform(chunk, encoding, callback) {
            downloaded += chunk.length;
            lastChunkAt = Date.now();
            if (onProgress) onProgress(total ? downloaded / total : 0, downloaded, total || null);
            callback(null, chunk);
        },
    });

    const streams = [Readable.fromWeb(response.body), progressStream];
    if (typeof transformStream === 'function') {
        const stream = await transformStream();
        if (stream) streams.push(stream);
    }

    streams.push(fs.createWriteStream(outputPath));

    await pipeline(...streams, { signal });

    const finishedAt = Date.now();
    return {
        bytes: downloaded,
        contentLength: total || null,
        downloadMs: Math.max(lastChunkAt - startedAt, 0),
        writeFinishMs: Math.max(finishedAt - lastChunkAt, 0),
        elapsedMs: Math.max(finishedAt - startedAt, 0),
    };
}

exports.downloadFileWithProgress = downloadFileWithProgress;

/**
 * Преобразует строку шестнадцатеричных символов в Uint8Array.
 * @param {string} hexString - Строка, содержащая шестнадцатеричные цифры (например, "a1b2c3...").
 * @returns {Uint8Array} - Массив байтов.
 */
function hexStringToUint8Array(hexString) {
    // Разбиваем строку на пары символов
    const hexPairs = hexString.match(/.{1,2}/g);
    // Преобразуем каждую пару в число
    const byteValues = hexPairs.map((pair) => parseInt(pair, 16));
    return new Uint8Array(byteValues);
}

exports.hexStringToUint8Array = hexStringToUint8Array;

/**
 * Преобразует число в 16-байтовый массив, используемый в качестве counter для AES-CTR.
 * @param {number} num - Число, которое нужно преобразовать.
 * @returns {Uint8Array} - 16-байтовый массив, заполненный байтами числа.
 */
function numberToUint8Counter(num) {
    let value = num;
    const counter = new Uint8Array(16);
    // Записываем число в массив, начиная с младших байтов (с конца массива)
    for (let i = 0; i < 16; i++) {
        counter[15 - i] = value & 0xff; // Получаем младший байт
        value >>= 8; // Сдвигаем число на 8 бит вправо
    }
    return counter;
}

exports.numberToUint8Counter = numberToUint8Counter;

/**
 * Делает Node.js stream-трансформер, который расшифровывает входной поток (AES-CTR).
 * @param {string} keyHex - AES key в hex
 * @returns {() => import('stream').Transform}
 */
function makeDecryptor(keyHex) {
    const key = Buffer.from(keyHex, 'hex');
    if (![16, 24, 32].includes(key.length)) {
        throw new Error(`Invalid AES key length: ${key.length}`);
    }

    const algorithm = `aes-${key.length * 8}-ctr`;

    return function decryptTransform() {
        return crypto.createDecipheriv(algorithm, key, Buffer.alloc(16));
    };
}

exports.makeDecryptor = makeDecryptor;

function artists2string(artists) {
    if (!artists || artists?.length === 0) return;
    if (artists.length <= 1) return artists?.[0].name;
    let string = artists.shift()?.name;
    artists.forEach((a) => {
        string += ' & ' + a.name;
    });
    return string;
}

exports.artists2string = artists2string;

function getFileExtensionFromCodec(codec) {
    return codec
        .replaceAll('he-aac', 'm4a')
        .replaceAll('aac', 'm4a')
        .replace(/(.*)-mp4/, '$1');
}
exports.getFileExtensionFromCodec = getFileExtensionFromCodec;

function removeInvalidCharsFromFilename(str) {
    return str.replace(/[/\\?%*:|"<>]/g, '_');
}
exports.removeInvalidCharsFromFilename = removeInvalidCharsFromFilename;

function removeInvalidEndingsFromTrackTitle(str) {
    if (str.endsWith('.mp3')) str.replaceAll('.mp3', '');
    if (str.endsWith('.mp4')) str.replaceAll('.mp4', '');
    if (str.endsWith('.m4a')) str.replaceAll('.m4a', '');
    if (str.endsWith('.flac')) str.replaceAll('.flac', '');
    return str;
}
exports.removeInvalidEndingsFromTrackTitle = removeInvalidEndingsFromTrackTitle;

function LRC2SYLT(lrcString) {
    const lines = lrcString.split(/\r?\n/);
    const result = [];

    const timeTagRegex = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,2}))?\]/g;
    const metaTagRegex = /^\[(ar|ti|al|by|offset|re|ve):.*?\]$/i;

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        // Игнорируем метаданные
        if (metaTagRegex.test(trimmed)) continue;

        let match;
        const times = [];
        let text = trimmed;

        // Извлекаем все временные теги
        while ((match = timeTagRegex.exec(trimmed)) !== null) {
            const minutes = parseInt(match[1], 10);
            const seconds = parseInt(match[2], 10);
            const hundredths = match[3] ? parseInt(match[3].padEnd(2, '0'), 10) : 0;
            const timestamp = (minutes * 60 + seconds) * 1000 + hundredths * 10;
            times.push(timestamp);
        }

        // Убираем временные теги из текста
        text = trimmed.replace(timeTagRegex, '').trim();

        // Если нет текста — пропускаем
        if (!text) continue;

        // Добавляем элементы synchronisedText
        for (const timeStamp of times) {
            result.push({
                text,
                timeStamp,
            });
        }
    }

    // Сортируем по времени
    result.sort((a, b) => a.timeStamp - b.timeStamp);

    return result;
}
exports.LRC2SYLT = LRC2SYLT;

function escapeRestrictedShellChars(str) {
    return str.replace(/(["\\])/g, '\\$1');
}

exports.escapeRestrictedShellChars = escapeRestrictedShellChars;
