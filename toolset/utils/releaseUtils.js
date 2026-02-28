function createReleaseUtils(runtime, { packageUtils, extractUtils }) {
    const { fs, fsp, path, axios, sevenZip, FormData, Octokit, execSync } = runtime.deps;
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
        console.log(`Deleted existing GitHub asset: ${assetName}`);
    }

    async function uploadGitHubReleaseAssetWithRetry(octokit, owner, repo, releaseId, assetPath, contentType, maxRetries = 3) {
        const assetName = path.basename(assetPath);
        const assetData = fs.readFileSync(assetPath);
        let lastError = null;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                await deleteReleaseAssetIfExists(octokit, owner, repo, releaseId, assetName);
                console.log(`Uploading GitHub asset ${assetName} (${attempt}/${maxRetries})...`);
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
                console.log(`GitHub asset uploaded: ${assetName}`);
                return response;
            } catch (error) {
                lastError = error;
                console.warn(`GitHub asset upload failed for ${assetName}:`, error?.message ?? error);
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

            console.log(`GitHub release already exists for tag ${tagName}, updating draft`);
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

        console.log(`Creating GitHub release ${tagName}...`);
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
            console.warn('GITHUB_TOKEN is not set, skipping GitHub release');
            return null;
        }

        if (!fs.existsSync(asarPath)) {
            throw new Error(`app.asar not found: ${asarPath}`);
        }

        const repoInfo = resolveGitHubRepo();
        if (!repoInfo) {
            console.warn('Unable to resolve GitHub owner/repo. Set GITHUB_REPO_OWNER and GITHUB_REPO_NAME');
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
                console.warn(`app.asar.unpacked directory not found, skipping: ${asarUnpackedDirPath}`);
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

        console.log(`GitHub release published: ${owner}/${repo}@${tagName}`);
        return release;
    }

    async function uploadAppAsar({
        targetPath = DEFAULT_DIST_PATH,
        modVersion,
        musicVersion,
        spoof,
        changelog,
        unpackedPath = null,
        compressionType = 'zstd',
        endpointPath = '/cdn/upload/asar',
    }) {
        try {
            if (!modVersion) {
                console.error('modVersion обязателен');
                return;
            }

            if (!fs.existsSync(targetPath)) {
                console.error('app.asar не найден');
                return;
            }

            if (!['gzip', 'zstd'].includes(compressionType)) {
                console.error('Некорректный compressionType. Допустимо: gzip | zstd');
                return;
            }

            console.log('Загрузка app.asar на сервер...');

            const url = `${serverUrl}${endpointPath}`;
            const formData = new FormData();

            formData.append('asar', fs.createReadStream(targetPath));
            formData.append('modVersion', String(modVersion));
            formData.append('version', String(musicVersion));
            formData.append('spoof', String(Boolean(spoof)));
            formData.append('type', String(compressionType));

            if (changelog !== undefined && changelog !== null) {
                const normalized = Array.isArray(changelog) ? changelog.join('\n') : String(changelog);
                formData.append('changelog', normalized);
            }

            if (unpackedPath) {
                if (!fs.existsSync(unpackedPath)) {
                    console.error('unpackedPath указан, но файл не найден:', unpackedPath);
                    return;
                }
                formData.append('unpacked', fs.createReadStream(unpackedPath));
            }

            const headers = {
                ...formData.getHeaders(),
                Authorization: `Bearer ${authToken}`,
            };

            const response = await axios.post(url, formData, {
                headers,
                maxBodyLength: Infinity,
                maxContentLength: Infinity,
                validateStatus: () => true,
            });

            if (response?.data?.ok) {
                console.log('app.asar успешно загружен на сервер');
                return response.data;
            }

            const serverMsg = response?.data?.message ?? 'UNKNOWN_ERROR';
            console.error('Ошибка загрузки app.asar на сервер:', serverMsg);
            return response.data;
        } catch (error) {
            const axiosMsg = error?.response?.data?.message || error?.response?.data || error?.message || error;
            console.error('Ошибка при выполнении загрузки app.asar на сервер:', axiosMsg);
            return null;
        }
    }

    async function release({ dest, versions = undefined, onlyUploadAppAsar = false }) {
        const version = await packageUtils.getModVersion();
        const { version: ymVersion } = await extractUtils.getLatestYMVersion();
        const patchNote = versions ? PatchNote.forSpoofPatch(versions.newVersion, version, versions.oldVersion) : new PatchNote(ymVersion, version, patchNoteStringMD);

        if (onlyUploadAppAsar) {
            await uploadAppAsar({
                targetPath: dest,
                modVersion: version,
                musicVersion: ymVersion,
                spoof: true,
                changelog: patchNote.patchNoteString,
                unpackedPath: null,
                compressionType: 'zstd',
                endpointPath: '/cdn/upload/asar',
            });
            console.log('Release: only uploadAppAsar mode enabled, skipping GitHub release and Discord patch note');
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
            compressionType: 'zstd',
            endpointPath: '/cdn/upload/asar',
        });
        await sendPatchNoteToDiscord(patchNote);
    }

    return {
        release,
        uploadAppAsar,
        createGitHubRelease,
    };
}

module.exports = {
    createReleaseUtils,
};
