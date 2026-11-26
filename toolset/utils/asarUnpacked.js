const { createHash } = require('node:crypto');
const { createReadStream } = require('node:fs');
const { stat } = require('node:fs/promises');
const path = require('node:path');

async function computeFileSha256(filePath) {
    const hash = createHash('sha256');
    for await (const chunk of createReadStream(filePath)) {
        hash.update(chunk);
    }
    return hash.digest('hex');
}

async function validateAsarUnpacked(asar, asarPath, unpackedPath = `${asarPath}.unpacked`) {
    const unpackedRoot = path.resolve(unpackedPath);
    let count = 0;
    for (const archivePath of asar.listPackage(asarPath)) {
        const relativePath = archivePath.replace(/^[\\/]/, '');
        const entry = asar.statFile(asarPath, relativePath, false);
        if (!entry.unpacked || entry.files || entry.link) continue;

        const filePath = path.resolve(unpackedRoot, relativePath);
        const relativeToRoot = path.relative(unpackedRoot, filePath);
        if (path.isAbsolute(relativeToRoot) || relativeToRoot === '..' || relativeToRoot.startsWith(`..${path.sep}`)) {
            throw new Error(`Недопустимый путь unpacked: ${relativePath}`);
        }
        const file = await stat(filePath);
        if (!file.isFile() || file.size !== entry.size) {
            throw new Error(`app.asar.unpacked не соответствует ASAR: ${relativePath}`);
        }
        if (entry.integrity && (entry.integrity.algorithm !== 'SHA256' || (await computeFileSha256(filePath)) !== entry.integrity.hash)) {
            throw new Error(`Контрольная сумма app.asar.unpacked не соответствует ASAR: ${relativePath}`);
        }
        count++;
    }
    return count;
}

module.exports = { computeFileSha256, validateAsarUnpacked };
