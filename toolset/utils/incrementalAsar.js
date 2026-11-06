const fs = require('node:fs');
const path = require('node:path');
const { createHash, randomUUID } = require('node:crypto');
const { pipeline } = require('node:stream/promises');

const fsp = fs.promises;
const MAX_APPENDED_BYTES = 32 * 1024 * 1024;
const INTEGRITY_BLOCK_SIZE = 4 * 1024 * 1024;

function sha256(data) {
    return createHash('sha256').update(data).digest('hex');
}

function fileStamp(stat) {
    return `${stat.dev}:${stat.ino}:${stat.size}:${stat.mode}:${stat.mtimeNs}:${stat.ctimeNs}`;
}

function archiveIdentity(stat) {
    // The same staged file keeps its identity across rename, which can update ctime.
    return `${stat.dev}:${stat.ino}:${stat.size}:${stat.mtimeNs}`;
}

function scanSource(source, excludedPaths) {
    const excluded = new Set(excludedPaths);
    const entries = Object.create(null);

    function visit(directory, parent = '') {
        for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
            const filename = path.join(directory, entry.name);
            if (excluded.has(filename)) continue;

            const relative = parent ? `${parent}/${entry.name}` : entry.name;
            if (entry.isDirectory()) {
                entries[relative] = null;
                visit(filename, relative);
            } else {
                const stat = fs.lstatSync(filename, { bigint: true });
                if (!stat.isFile()) throw new Error(`Инкрементальная упаковка не поддерживает ${filename}`);
                entries[relative] = [fileStamp(stat), Number(stat.size), Number(stat.mode)];
            }
        }
    }

    visit(source);
    return entries;
}

function sameTree(left, right) {
    return (
        Object.keys(left).length === Object.keys(right).length &&
        Object.entries(left).every(([name, entry]) => Object.hasOwn(right, name) && (entry === null) === (right[name] === null))
    );
}

function indexHeader(header) {
    const entries = Object.create(null);

    function visit(directory, parent = '') {
        for (const [name, entry] of Object.entries(directory.files)) {
            const relative = parent ? `${parent}/${name}` : name;
            entries[relative] = entry.files ? null : entry;
            if (entry.files) visit(entry, relative);
        }
    }

    visit(header);
    return entries;
}

function getIntegrity(data) {
    const hash = sha256(data);
    const blocks = [];
    for (let offset = 0; offset < data.length; offset += INTEGRITY_BLOCK_SIZE) {
        blocks.push(sha256(data.subarray(offset, offset + INTEGRITY_BLOCK_SIZE)));
    }
    if (!blocks.length) blocks.push(hash);
    return { algorithm: 'SHA256', hash, blockSize: INTEGRITY_BLOCK_SIZE, blocks };
}

function encodeHeader(header) {
    const json = Buffer.from(JSON.stringify(header));
    const paddedLength = Math.ceil(json.length / 4) * 4;
    const bytes = Buffer.alloc(16 + paddedLength);
    // ASAR starts with a Pickle containing the size of a second Pickle with the JSON header.
    bytes.writeUInt32LE(4, 0);
    bytes.writeUInt32LE(8 + paddedLength, 4);
    bytes.writeUInt32LE(4 + paddedLength, 8);
    bytes.writeUInt32LE(json.length, 12);
    json.copy(bytes, 16);
    return bytes;
}

async function stageIncrement({ asar, source, destination, staged, entries, previous }) {
    if (!sameTree(entries, previous.entries)) return null;

    const base = await fsp.lstat(destination, { bigint: true });
    if (!base.isFile() || fileStamp(base) !== previous.archive) return null;
    const raw = asar.getRawHeader(destination);
    if (sha256(raw.headerString) !== previous.headerHash) return null;

    const headerEntries = indexHeader(raw.header);
    if (!sameTree(entries, headerEntries)) return null;
    const dataStart = 8 + raw.headerSize;
    const dataLength = Number(base.size) - dataStart;
    let appendedBytes = previous.appendedBytes;
    if (dataLength < 0 || !Number.isSafeInteger(appendedBytes) || appendedBytes < 0 || appendedBytes > MAX_APPENDED_BYTES) return null;
    let offset = dataLength;
    let headerChanged = false;
    const additions = [];

    for (const [name, file] of Object.entries(entries)) {
        if (!file || file[0] === previous.entries[name]?.[0]) continue;
        const [stamp, size, mode] = file;
        if (size > MAX_APPENDED_BYTES) return null;

        const filename = path.join(source, name);
        const data = await fsp.readFile(filename);
        if (data.length !== size || fileStamp(await fsp.lstat(filename, { bigint: true })) !== stamp) return null;

        const entry = headerEntries[name];
        const executable = process.platform !== 'win32' && (mode & 0o100) !== 0;
        const integrity = getIntegrity(data);
        if (integrity.hash !== entry.integrity?.hash) {
            if (name === 'package.json' || entry.unpacked || appendedBytes + size > MAX_APPENDED_BYTES) return null;
            Object.assign(entry, { size, offset: String(offset), integrity });
            offset += size;
            appendedBytes += size;
            additions.push(data);
            headerChanged = true;
        }
        if (!entry.unpacked && executable !== Boolean(entry.executable)) {
            if (executable) entry.executable = true;
            else delete entry.executable;
            headerChanged = true;
        }
    }

    if (headerChanged) {
        async function* archiveContents() {
            yield encodeHeader(raw.header);
            // Offsets are relative to the end of the header. Copy the old body as one range.
            if (dataLength) yield* fs.createReadStream(destination, { start: dataStart, end: Number(base.size) - 1, highWaterMark: 1024 * 1024 });
            yield* additions;
        }
        await pipeline(archiveContents(), fs.createWriteStream(staged));
    } else {
        await fsp.copyFile(destination, staged);
    }
    if (fileStamp(await fsp.lstat(destination, { bigint: true })) !== previous.archive) return null;

    for (const [name, entry] of Object.entries(headerEntries)) {
        if (!entry?.unpacked) continue;
        const filename = path.join(source, name);
        const target = path.join(`${staged}.unpacked`, name);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(filename, target);
        if (fileStamp(fs.lstatSync(filename, { bigint: true })) !== entries[name][0]) return null;
    }

    return appendedBytes;
}

async function stageRebuildAsar({ asar, source, destination, staged, cachePath, excludedPaths, unpackDir, pack }) {
    const signature = JSON.stringify([1, source, destination, unpackDir, [...excludedPaths].sort()]);
    let entries;
    let appendedBytes;
    try {
        entries = scanSource(source, excludedPaths);
        const previous = JSON.parse(await fsp.readFile(cachePath, 'utf8'));
        if (previous.signature === signature) {
            appendedBytes = await stageIncrement({ asar, source, destination, staged, entries, previous });
        }
    } catch {
        // An unavailable cache or source scan still allows the official full packer to run.
    }

    const incremental = appendedBytes != null;
    if (!incremental) {
        await fsp.rm(`${staged}.unpacked`, { recursive: true, force: true });
        await pack();
        appendedBytes = 0;
    }
    const mode = incremental ? 'incremental' : 'full';
    if (!entries) return { mode };

    try {
        const raw = asar.getRawHeader(staged);
        if (!incremental) {
            const after = scanSource(source, excludedPaths);
            const header = indexHeader(raw.header);
            const stable =
                sameTree(entries, after) &&
                sameTree(entries, header) &&
                Object.entries(entries).every(([name, entry]) => !entry || (entry[0] === after[name][0] && entry[1] === header[name].size));
            if (!stable) return { mode };
        }
        const identity = archiveIdentity(await fsp.stat(staged, { bigint: true }));
        const headerHash = sha256(raw.headerString);

        return {
            mode,
            async saveCache() {
                const temporary = `${cachePath}.${randomUUID()}`;
                try {
                    const installed = await fsp.lstat(destination, { bigint: true });
                    if (archiveIdentity(installed) !== identity) return;
                    const cache = { signature, archive: fileStamp(installed), headerHash, appendedBytes, entries };
                    await fsp.mkdir(path.dirname(cachePath), { recursive: true });
                    await fsp.writeFile(temporary, JSON.stringify(cache));
                    await fsp.rename(temporary, cachePath);
                } catch {
                    await fsp.rm(temporary, { force: true }).catch(() => {});
                }
            },
        };
    } catch {
        return { mode };
    }
}

module.exports = { stageRebuildAsar };
