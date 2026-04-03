function createZstdUtils(runtime) {
    const { fs, fsp, path } = runtime.deps;

    function getCompressedAsarPath(asarPath) {
        return `${asarPath}.zst`;
    }

    async function compressZstdToFile(sourcePath, outputPath) {
        const { ZstdCodec } = require('zstd-codec');
        const sourceBuffer = await fsp.readFile(sourcePath);

        const compressedBuffer = await new Promise((resolve, reject) => {
            try {
                ZstdCodec.run((zstd) => {
                    try {
                        const input = new Uint8Array(sourceBuffer.buffer, sourceBuffer.byteOffset, sourceBuffer.byteLength);
                        const level = 3;
                        const simpleLimitBytes = 10 * 1024 * 1024;

                        if (input.byteLength <= simpleLimitBytes) {
                            const simple = new zstd.Simple();
                            resolve(Buffer.from(simple.compress(input, level)));
                            return;
                        }

                        const streaming = new zstd.Streaming();
                        const chunkSize = 2 * 1024 * 1024;
                        const chunks = [];

                        for (let index = 0; index < input.byteLength; index += chunkSize) {
                            chunks.push(input.subarray(index, Math.min(index + chunkSize, input.byteLength)));
                        }

                        resolve(Buffer.from(streaming.compressChunks(chunks, input.byteLength, level)));
                    } catch (error) {
                        reject(error);
                    }
                });
            } catch (error) {
                reject(error);
            }
        });

        await fsp.mkdir(path.dirname(outputPath), { recursive: true });
        await fsp.writeFile(outputPath, compressedBuffer);
        return outputPath;
    }

    async function ensureCompressedAsarArtifact(asarPath, outputPath = getCompressedAsarPath(asarPath)) {
        if (!fs.existsSync(asarPath)) {
            throw new Error(`ASAR file not found: ${asarPath}`);
        }

        const asarStat = await fsp.stat(asarPath);

        if (fs.existsSync(outputPath)) {
            const compressedStat = await fsp.stat(outputPath);
            if (compressedStat.mtimeMs >= asarStat.mtimeMs) {
                return outputPath;
            }
        }

        await compressZstdToFile(asarPath, outputPath);
        return outputPath;
    }

    return {
        getCompressedAsarPath,
        compressZstdToFile,
        ensureCompressedAsarArtifact,
    };
}

module.exports = {
    createZstdUtils,
};
