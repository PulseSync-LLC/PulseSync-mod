function createReleaseUtils(runtime, { packageUtils, extractUtils, zstdUtils }) {
    const { fs, fsp, path, axios, sevenZip, Octokit, execSync, crypto } = runtime.deps;
    const { DEFAULT_DIST_PATH, TEMP_DIR, PATCH_NOTES_PATH } = runtime.constants;
    const { webhookUrl, serverUrl, githubToken, githubOwnerEnv, githubRepoEnv, githubTagPrefix, authToken } = runtime.env;

    const patchNoteStringMD = fs.readFileSync(PATCH_NOTES_PATH, { encoding: 'utf8' });

    class PatchNote {
        constructor(ymVersion, version, patchNoteString) {
            this.ymVersion = ymVersion;
            this.version = version;
            this.patchNoteString = patchNoteString;
        }

        static forSpoofPatch(ymVersion, version, previousYmVersion) {
            return new PatchNote(ymVersion, version, `# Что нового\n- Версия спуфнута c ${previousYmVersion} до ${ymVersion}`);
        }

        toDiscord() {
            return `# Client ${this.version}\n\n${this.patchNoteString}`;
        }

        toGitHub() {
            return `## Patch for Yandex Music ${this.ymVersion}\n\n${this.patchNoteString}`;
        }
    }

    async function sendPatchNoteToDiscord(patchNote) {
        const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: patchNote.toDiscord(),
            }),
        });

        if (!webhookResponse.ok) {
            throw new Error(`Не удалось отправить webhook: ${webhookResponse.statusText}`);
        }
        console.log('Патчноут отправлен в Discord');
    }

    function parseGitHubRepoFromRemoteUrl(remoteUrl) {
        if (!remoteUrl) return null;
        const match = String(remoteUrl)
            .trim()
            .match(/github\.com[:/]([^/]+)\/(.+?)(?:\.git)?$/i);
        if (!match) return null;
        return { owner: match[1], repo: match[2] };
    }

    function resolveGitHubRepo() {
        if (githubOwnerEnv && githubRepoEnv) {
            return { owner: githubOwnerEnv, repo: githubRepoEnv };
        }

        try {
            const remoteUrl = execSync('git config --get remote.origin.url', {
                encoding: 'utf8',
                stdio: ['ignore', 'pipe', 'ignore'],
            }).trim();
            return parseGitHubRepoFromRemoteUrl(remoteUrl);
        } catch {
            return null;
        }
    }

    function getAsarUnpackedDirPath(asarPath) {
        return path.join(path.dirname(asarPath), `${path.basename(asarPath)}.unpacked`);
    }

    async function zipFolder(folderPath, outputZipPath) {
        if (!fs.existsSync(folderPath)) return null;
        if (fs.existsSync(outputZipPath)) {
            await fsp.rm(outputZipPath, { force: true });
        }
        await sevenZip.pack(folderPath, outputZipPath);
        return outputZipPath;
    }

    async function deleteReleaseAssetIfExists(octokit, owner, repo, releaseId, assetName) {
        const assetsResponse = await octokit.rest.repos.listReleaseAssets({
            owner,
            repo,
            release_id: releaseId,
            per_page: 100,
        });

        const existingAsset = assetsResponse.data.find((asset) => asset.name === assetName);
        if (!existingAsset) return;

        await octokit.rest.repos.deleteReleaseAsset({
            owner,
            repo,
            asset_id: existingAsset.id,
        });
        console.log(`Удалён существующий ассет GitHub: ${assetName}`);
    }

    async function uploadGitHubReleaseAssetWithRetry(octokit, owner, repo, releaseId, assetPath, contentType, maxRetries = 3) {
        const assetName = path.basename(assetPath);
        const assetData = fs.readFileSync(assetPath);
        let lastError = null;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                await deleteReleaseAssetIfExists(octokit, owner, repo, releaseId, assetName);
                console.log(`Загрузка ассета GitHub ${assetName} (${attempt}/${maxRetries})...`);
                const response = await octokit.rest.repos.uploadReleaseAsset({
                    owner,
                    repo,
                    release_id: releaseId,
                    name: assetName,
                    data: assetData,
                    headers: {
                        'content-type': contentType,
                        'content-length': assetData.length,
                    },
                });
                console.log(`Ассет GitHub загружен: ${assetName}`);
                return response;
            } catch (error) {
                lastError = error;
                console.warn(`Не удалось загрузить ассет GitHub ${assetName}:`, error?.message ?? error);
                if (attempt < maxRetries) {
                    await new Promise((resolve) => setTimeout(resolve, 2000 * attempt));
                }
            }
        }

        throw lastError;
    }

    async function ensureGitHubRelease(octokit, owner, repo, tagName, releaseName, body) {
        try {
            const existingReleaseResponse = await octokit.rest.repos.getReleaseByTag({
                owner,
                repo,
                tag: tagName,
            });

            console.log(`Релиз GitHub для тега ${tagName} уже существует, обновляю draft`);
            const updatedReleaseResponse = await octokit.rest.repos.updateRelease({
                owner,
                repo,
                release_id: existingReleaseResponse.data.id,
                tag_name: tagName,
                name: releaseName,
                body,
                prerelease: false,
            });

            return updatedReleaseResponse.data;
        } catch (error) {
            const status = error?.status ?? error?.response?.status;
            if (status !== 404) throw error;
        }

        console.log(`Создание релиза GitHub ${tagName}...`);
        const createdReleaseResponse = await octokit.rest.repos.createRelease({
            owner,
            repo,
            tag_name: tagName,
            name: releaseName,
            draft: true,
            prerelease: false,
            body,
        });

        return createdReleaseResponse.data;
    }

    async function createGitHubRelease(version, asarPath, patchNote) {
        if (!githubToken) {
            console.warn('GITHUB_TOKEN не задан, релиз GitHub пропущен');
            return null;
        }

        if (!fs.existsSync(asarPath)) {
            throw new Error(`app.asar не найден: ${asarPath}`);
        }

        const repoInfo = resolveGitHubRepo();
        if (!repoInfo) {
            console.warn('Не удалось определить owner/repo GitHub. Укажите GITHUB_REPO_OWNER и GITHUB_REPO_NAME');
            return null;
        }

        const { owner, repo } = repoInfo;
        const octokit = new Octokit({ auth: githubToken });
        const tagName = `${githubTagPrefix}${version}`;
        const release = await ensureGitHubRelease(octokit, owner, repo, tagName, version, patchNote.toGitHub());

        await uploadGitHubReleaseAssetWithRetry(octokit, owner, repo, release.id, asarPath, 'application/octet-stream');

        const asarUnpackedDirPath = getAsarUnpackedDirPath(asarPath);
        let tempZipPath = null;

        try {
            if (fs.existsSync(asarUnpackedDirPath)) {
                tempZipPath = path.join(TEMP_DIR, 'app.asar.unpacked.zip');
                await zipFolder(asarUnpackedDirPath, tempZipPath);
                await uploadGitHubReleaseAssetWithRetry(octokit, owner, repo, release.id, tempZipPath, 'application/zip');
            } else {
                console.warn(`Директория app.asar.unpacked не найдена, пропускаю: ${asarUnpackedDirPath}`);
            }
        } finally {
            if (tempZipPath && fs.existsSync(tempZipPath)) {
                await fsp.rm(tempZipPath, { force: true });
            }
        }

        await octokit.rest.repos.updateRelease({
            owner,
            repo,
            release_id: release.id,
            tag_name: tagName,
            name: version,
            body: patchNote.toGitHub(),
            draft: false,
            prerelease: false,
        });

        console.log(`Релиз GitHub опубликован: ${owner}/${repo}@${tagName}`);
        return release;
    }

    function joinUrl(baseUrl, endpointPath) {
        const normalizedBase = String(baseUrl || '').replace(/\/+$/, '');
        const normalizedPath = String(endpointPath || '').startsWith('/') ? String(endpointPath) : `/${String(endpointPath || '')}`;
        return `${normalizedBase}${normalizedPath}`;
    }

    async function computeFileSha256(filePath) {
        return await new Promise((resolve, reject) => {
            const hash = crypto.createHash('sha256');
            const stream = fs.createReadStream(filePath);

            stream.on('data', (chunk) => hash.update(chunk));
            stream.on('error', reject);
            stream.on('end', () => resolve(hash.digest('hex')));
        });
    }

    async function prepareCompressedAsarForUpload(sourcePath) {
        const zstdOutputPath = await zstdUtils.ensureCompressedAsarArtifact(sourcePath)
        return {
            filePath: zstdOutputPath,
            compressionType: 'zstd',
            shouldCleanup: false,
        }
    }

    async function sendAuthorizedJson(method, endpointPath, payload) {
        const response = await axios({
            method,
            url: joinUrl(serverUrl, endpointPath),
            data: payload,
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
            validateStatus: () => true,
            timeout: 360000,
        });

        if (response?.data?.ok) {
            return response.data;
        }

        const serverMsg = response?.data?.message ?? 'UNKNOWN_ERROR';
        throw new Error(typeof serverMsg === 'string' ? serverMsg : JSON.stringify(serverMsg));
    }

    async function uploadMultipartPart(signedUrl, filePath, start, end) {
        const response = await axios.put(signedUrl, fs.createReadStream(filePath, { start, end }), {
            headers: {
                'Content-Length': end - start + 1,
            },
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
            timeout: 360000,
            validateStatus: () => true,
        });

        if (response.status < 200 || response.status >= 300) {
            throw new Error(`UPLOAD_PART_FAILED:${signedUrl} ${response.status}: ${response.data}`);
        }

        const eTag = response.headers?.etag || response.headers?.ETag;
        if (!eTag) {
            throw new Error('S3 part upload did not return ETag');
        }

        return eTag;
    }

    async function abortMultipartUploadIfNeeded(multipartBasePath, uploadState) {
        if (!uploadState?.uploadId || !uploadState?.key) return;

        try {
            await sendAuthorizedJson('post', `${multipartBasePath}/abort`, {
                uploadId: uploadState.uploadId,
                key: uploadState.key,
            });
        } catch (error) {
            console.warn('Не удалось отменить multipart upload:', error?.message ?? error);
        }
    }

    async function uploadUnpacked({
        sourcePath = undefined,
        endpointPath = '/cdn/upload/unpacked',
    } = {}) {
        let tempZipPath = null;

        try {
            if (!serverUrl) {
                console.error('SERVER_URL не задан');
                return;
            }

            if (!authToken) {
                console.error('AUTH_TOKEN не задан');
                return;
            }

            const resolvedSourcePath = sourcePath ?? getAsarUnpackedDirPath(DEFAULT_DIST_PATH);

            if (!fs.existsSync(resolvedSourcePath)) {
                console.error('Источник app.asar.unpacked не найден:', resolvedSourcePath);
                return;
            }

            const stat = await fsp.stat(resolvedSourcePath);
            let uploadPath = resolvedSourcePath;

            if (stat.isDirectory()) {
                tempZipPath = path.join(TEMP_DIR, `app.asar.unpacked-${crypto.randomUUID()}.zip`);
                console.log(`Упаковка директории app.asar.unpacked: ${resolvedSourcePath}`);
                await zipFolder(resolvedSourcePath, tempZipPath);
                uploadPath = tempZipPath;
            }

            if (!uploadPath.endsWith('.zip')) {
                console.warn('Источник unpacked не является zip-файлом. Продолжаю загрузку как есть:', uploadPath);
            }

            console.log('Загрузка app.asar.unpacked на сервер...');

            const formData = new FormData();
            formData.append('unpacked', fs.createReadStream(uploadPath));
            formData.append('type', 'zstd');

            const response = await axios.post(joinUrl(serverUrl, endpointPath), formData, {
                headers: {
                    ...formData.getHeaders(),
                    Authorization: `Bearer ${authToken}`,
                },
                maxBodyLength: Infinity,
                maxContentLength: Infinity,
                validateStatus: () => true,
                timeout: 360000,
            });

            if (response?.data?.ok) {
                console.log('app.asar.unpacked успешно загружен на сервер');
                return response.data;
            }

            const serverMsg = response?.data?.message ?? 'UNKNOWN_ERROR';
            console.error('Ошибка загрузки app.asar.unpacked на сервер:', serverMsg);
            return response.data;
        } catch (error) {
            const axiosMsg = error?.response?.data?.message || error?.response?.data || error?.message || error;
            console.error('Ошибка при выполнении загрузки app.asar.unpacked:', axiosMsg);
            return null;
        } finally {
            if (tempZipPath && fs.existsSync(tempZipPath)) {
                await fsp.rm(tempZipPath, { force: true });
            }
        }
    }

    async function uploadAppAsar({
        targetPath = DEFAULT_DIST_PATH,
        modVersion,
        musicVersion,
        spoof,
        changelog,
        unpackedPath = null,
        multipartBasePath = '/cdn/upload/asar/multipart',
    }) {
        let preparedUpload = null;
        let uploadState = null;

        try {
            if (!modVersion) {
                console.error('modVersion обязателен');
                return;
            }

            if (!serverUrl) {
                console.error('SERVER_URL не задан');
                return;
            }

            if (!authToken) {
                console.error('AUTH_TOKEN не задан');
                return;
            }

            if (!fs.existsSync(targetPath)) {
                console.error('app.asar не найден');
                return;
            }

            if (unpackedPath) {
                console.warn('unpackedPath для прямого multipart upload сейчас игнорируется:', unpackedPath);
            }

            const normalizedChangelog = changelog !== undefined && changelog !== null ? (Array.isArray(changelog) ? changelog.join('\n') : String(changelog)) : undefined;

            console.log('Подготавливаю app.asar к прямой multipart загрузке в S3...');

            const rawChecksum = await computeFileSha256(targetPath);
            preparedUpload = await prepareCompressedAsarForUpload(targetPath);
            const compressedChecksum = await computeFileSha256(preparedUpload.filePath);
            const compressedStat = await fsp.stat(preparedUpload.filePath);

            console.log(`Сжатие завершено (${preparedUpload.compressionType}), размер: ${compressedStat.size} байт`);

            uploadState = await sendAuthorizedJson('post', `${multipartBasePath}/init`, {
                modVersion: String(modVersion),
                version: String(musicVersion),
                spoof: Boolean(spoof),
                changelog: normalizedChangelog,
                type: String(preparedUpload.compressionType),
                fileSize: compressedStat.size,
            });

            const partSize = Number(uploadState?.partSize) > 0 ? Number(uploadState.partSize) : 16 * 1024 * 1024;
            const totalParts = Math.max(1, Math.ceil(compressedStat.size / partSize));
            const parts = [];

            for (let index = 0; index < totalParts; index += 1) {
                const partNumber = index + 1;
                const start = index * partSize;
                const end = Math.min(start + partSize, compressedStat.size) - 1;

                const signedPart = await sendAuthorizedJson('post', `${multipartBasePath}/part-url`, {
                    key: uploadState.key,
                    uploadId: uploadState.uploadId,
                    partNumber,
                });

                const eTag = await uploadMultipartPart(signedPart.signedUrl, preparedUpload.filePath, start, end);
                parts.push({ partNumber, eTag });
                console.log(`Загружена часть ${partNumber}/${totalParts}`);
            }

            const completed = await sendAuthorizedJson('post', `${multipartBasePath}/complete`, {
                key: uploadState.key,
                uploadId: uploadState.uploadId,
                parts,
                modVersion: String(modVersion),
                version: String(musicVersion),
                spoof: Boolean(spoof),
                changelog: normalizedChangelog,
                type: String(preparedUpload.compressionType),
                checksum: rawChecksum,
                checksumCompressed: compressedChecksum,
            });

            console.log('app.asar успешно загружен напрямую в S3');
            return completed;
        } catch (error) {
            await abortMultipartUploadIfNeeded(multipartBasePath, uploadState);
            const axiosMsg = error?.response?.data?.message || error?.response?.data || error?.message || error;
            console.error('Ошибка при выполнении multipart загрузки app.asar:', error);
            return null;
        } finally {
            if (preparedUpload?.shouldCleanup && preparedUpload?.filePath && fs.existsSync(preparedUpload.filePath)) {
                await fsp.rm(preparedUpload.filePath, { force: true });
            }
        }
    }

    async function release({ dest, versions = undefined, onlyUploadAppAsar = false, onlySendPatchNotes = false }) {
        const version = await packageUtils.getModVersion();
        const { version: ymVersion } = await extractUtils.getLatestYMVersion();
        const patchNote = versions ? PatchNote.forSpoofPatch(versions.newVersion, version, versions.oldVersion) : new PatchNote(ymVersion, version, patchNoteStringMD);

        if (onlyUploadAppAsar && onlySendPatchNotes) {
            throw new Error('Release: onlyUploadAppAsar и onlySendPatchNotes нельзя использовать вместе');
        }

        if (onlyUploadAppAsar) {
            await uploadAppAsar({
                targetPath: dest,
                modVersion: version,
                musicVersion: ymVersion,
                spoof: true,
                changelog: patchNote.patchNoteString,
                unpackedPath: null,
                multipartBasePath: '/cdn/upload/asar/multipart',
            });
            console.log('Релиз: включён режим onlyUploadAppAsar, релиз GitHub и Discord патчноут пропущены');
            return;
        }

        if (onlySendPatchNotes) {
            await sendPatchNoteToDiscord(patchNote);
            console.log('Релиз: включён режим onlySendPatchNotes, релиз GitHub и загрузка app.asar пропущены');
            return;
        }

        await createGitHubRelease(version, dest, patchNote);
        await uploadAppAsar({
            targetPath: dest,
            modVersion: version,
            musicVersion: ymVersion,
            spoof: true,
            changelog: patchNote.patchNoteString,
            unpackedPath: null,
            multipartBasePath: '/cdn/upload/asar/multipart',
        });
        await sendPatchNoteToDiscord(patchNote);
    }

    return {
        release,
        uploadAppAsar,
        uploadUnpacked,
        createGitHubRelease,
    };
}

module.exports = {
    createReleaseUtils,
};
