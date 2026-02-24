(async () => {
    require('dotenv').config();
    const asar = require('@electron/asar');
    const minimist = require('minimist');
    const fs = require('fs');
    const fsp = require('fs').promises;
    const path = require('path');
    const semver = require('semver');
    const crypto = require('crypto');
    const plist = require('plist');
    const { minify } = require('terser');
    const axios = require('axios');
    const yaml = require('js-yaml');
    const sevenZip = require('7zip-min');
    const FormData = require('form-data');
    const { Octokit } = await import('@octokit/rest');
    const { execSync } = require('child_process');
    const { exec, spawn } = require('child_process');
    const { promisify } = require('util');
    const vm = require('vm');

    const execAsync = promisify(exec);
    const spawnAsync = promisify(spawn);

    const SRC_PATH = path.join(process.argv[1], '../src');
    const DEFAULT_DIST_PATH = path.join(process.argv[1], '../builds/latest/app.asar');
    const DEFAULT_PATCHED_DIST_PATH = path.join(process.argv[1], '../builds/patched/app.asar');
    const EXTRACTED_DIR_PATH = path.join(process.argv[1], '../extracted');
    const YM_LATEST_YML_URL = 'https://desktop.app.music.yandex.net/stable/latest.yml';
    const PRETTIER_CONFIG_PATH = path.join(__dirname, '.prettierrc.json');

    const MAC_APP_PATH = '/Applications/Яндекс Музыка.app';
    const WINDOWS_APP_PATH = path.join(process.env?.LOCALAPPDATA ?? '', '/Programs/YandexMusic');
    const WINDOWS_EXE_PATH = path.join(WINDOWS_APP_PATH ?? '', 'Яндекс Музыка.exe');

    const DIRECT_DIST_PATH = process.platform === 'darwin' ? path.join(MAC_APP_PATH, '/Contents/Resources/app.asar') : path.join(WINDOWS_APP_PATH, 'resources/app.asar');
    const INFO_PLIST_PATH = path.join(MAC_APP_PATH, '/Contents/Info.plist');

    if (process.platform === 'darwin') {
        if (!fs.existsSync(DIRECT_DIST_PATH)) {
            console.warn('Не удалось найти директорию с Яндекс Музыкой:', DIRECT_DIST_PATH, '\nПереопределите MAC_APP_PATH в toolset_v3.js');
        }
        if (!fs.existsSync(INFO_PLIST_PATH)) {
            console.warn('Не удалось найти Info.plist:', INFO_PLIST_PATH, '\nПереопределите MAC_APP_PATH в toolset_v3.js');
        }
    }
    if (!fs.existsSync(DIRECT_DIST_PATH)) {
        console.warn('Не удалось найти директорию с Яндекс Музыкой:', DIRECT_DIST_PATH, '\nПереопределите WINDOWS_APP_PATH в toolset_v3.js');
    }

    const MINIFIED_SRC_PATH = path.join(process.argv[1], '../minified/src');
    const TEMP_DIR = path.join(process.argv[1], '../temp');

    if (!fs.existsSync(TEMP_DIR)) {
        fs.mkdirSync(TEMP_DIR, { recursive: true });
        console.log('Создана временная директория:', TEMP_DIR);
    }

    const EXTRACTED_ENTITLEMENTS_PATH = path.join(TEMP_DIR, 'extracted_entitlements.xml');

    const PATCH_NOTES_PATH = path.join(process.argv[1], '../PATCHNOTES.md');

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const serverUrl = process.env.SERVER_URL;
    const githubToken = process.env.GITHUB_TOKEN;
    const githubOwnerEnv = process.env.GITHUB_REPO_OWNER;
    const githubRepoEnv = process.env.GITHUB_REPO_NAME;
    const githubTagPrefix = process.env.GITHUB_RELEASE_TAG_PREFIX ?? 'v';

    const patchNoteStringMD = fs.readFileSync(PATCH_NOTES_PATH, { encoding: 'utf8' });

    let oldYMHash;
    let oldYMHashOverride;

    class PatchNote {
        static forSpoofPatch(ymVersion, version, previousYmVersion) {
            return new PatchNote(ymVersion, version, `# Что нового\n- Версия спуфнута c ${previousYmVersion} до ${ymVersion}`);
        }

        constructor(ymVersion, version, patchNoteString) {
            this.ymVersion = ymVersion;
            this.version = version;
            this.patchNoteString = patchNoteString;
        }

        toDiscord() {
            return `# Client ${this.version}\n\n${this.patchNoteString}`;
        }

        toGitHub() {
            return `## Patch for Yandex Music ${this.ymVersion}\n\n${this.patchNoteString}`;
        }
    }

    /**
     *
     * @param {PatchNote} patchNote
     * @return {Promise<void>}
     */
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

    async function uploadAppAsar(
        targetPath = DEFAULT_DIST_PATH,
        modVersion,
        musicVersion,
        spoof,
        changelog,
        unpackedPath = null,
        compressionType = 'zstd',
        endpointPath = '/cdn/upload/asar',
    ) {
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
                Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
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

    async function fetchLatestYmYaml() {
        try {
            const response = await axios.get(YM_LATEST_YML_URL, {
                responseType: 'text',
                validateStatus: () => true,
            });

            if (response.status < 200 || response.status >= 300) {
                console.error('Не удалось получить latest.yml:', response.status);
                return null;
            }

            const parsed = yaml.load(response.data);
            if (!parsed || typeof parsed !== 'object') {
                console.error('Некорректный формат latest.yml');
                return null;
            }

            return parsed;
        } catch (error) {
            console.error('Не удалось получить latest.yml:', error?.message ?? error);
            return null;
        }
    }

    function replaceVersionInFilename(filename, oldVersion, newVersion) {
        if (!filename || !newVersion) return filename;
        if (oldVersion && filename.includes(oldVersion)) {
            return filename.split(oldVersion).join(newVersion);
        }
        return filename.replace(/\d+\.\d+\.\d+/, newVersion);
    }

    function resolveYmDownloadInfo(latestInfo, versionOverride) {
        if (!latestInfo) return null;

        const baseUrl = latestInfo?.commonConfig?.UPDATE_URL ?? 'https://desktop.app.music.yandex.net/stable/';
        const sourceVersion = latestInfo?.version;
        const version = versionOverride ?? sourceVersion;

        if (!version) {
            console.error('Не удалось определить версию');
            return null;
        }

        let fileUrl = latestInfo?.files?.[0]?.url ?? latestInfo?.path;
        if (!fileUrl) {
            console.error('Не удалось определить URL файла');
            return null;
        }

        if (versionOverride) {
            fileUrl = replaceVersionInFilename(fileUrl, sourceVersion, versionOverride);
        }

        let downloadUrl;
        try {
            downloadUrl = new URL(fileUrl, baseUrl).toString();
        } catch (error) {
            console.error('Некорректный URL для загрузки:', error?.message ?? error);
            return null;
        }

        const sha512 = versionOverride ? null : (latestInfo?.files?.[0]?.sha512 ?? latestInfo?.sha512 ?? null);
        const size = versionOverride ? null : (latestInfo?.files?.[0]?.size ?? null);

        return {
            version,
            downloadUrl,
            sha512,
            size,
            fileName: path.basename(new URL(downloadUrl).pathname),
        };
    }

    async function downloadFile(url, destPath, expectedSize = null) {
        await fsp.mkdir(path.dirname(destPath), { recursive: true });
        console.log('Скачивание:', url);

        const response = await axios.get(url, {
            responseType: 'stream',
            validateStatus: () => true,
        });

        if (response.status < 200 || response.status >= 300) {
            throw new Error(`HTTP ${response.status}`);
        }

        const writer = fs.createWriteStream(destPath);
        await new Promise((resolve, reject) => {
            response.data.on('error', reject);
            writer.on('error', reject);
            writer.on('finish', resolve);
            response.data.pipe(writer);
        });

        if (expectedSize) {
            const stat = await fsp.stat(destPath);
            if (stat.size !== expectedSize) {
                console.warn(`Размер файла не совпадает: ${stat.size} вместо ${expectedSize}`);
            }
        }

        return destPath;
    }

    async function calcSha512Base64(filePath) {
        const hash = crypto.createHash('sha512');
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(filePath);
            stream.on('error', reject);
            stream.on('data', (chunk) => hash.update(chunk));
            stream.on('end', () => resolve(hash.digest('base64')));
        });
    }

    async function findFileRecursive(rootDir, fileName) {
        const entries = await fsp.readdir(rootDir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(rootDir, entry.name);
            if (entry.isDirectory()) {
                const found = await findFileRecursive(fullPath, fileName);
                if (found) return found;
            } else if (entry.isFile() && entry.name.toLowerCase() === fileName.toLowerCase()) {
                return fullPath;
            }
        }
        return null;
    }

    function findEntryByPattern(list, pattern) {
        if (!Array.isArray(list)) return null;
        return list.find((entry) => pattern.test(entry?.name ?? '')) ?? null;
    }

    async function extractEntry(archivePath, entryName, destDir) {
        await fsp.mkdir(destDir, { recursive: true });
        await sevenZip.cmd(['e', archivePath, `-o${destDir}`, entryName, '-y']);
        return path.join(destDir, path.basename(entryName));
    }

    async function extractAsarFromNsis(exePath, workDir) {
        await fsp.mkdir(workDir, { recursive: true });

        let list = null;
        try {
            list = await sevenZip.list(exePath);
        } catch (error) {
            console.warn('Не удалось получить список файлов из установщика:', error?.message ?? error);
        }

        const directAsar = findEntryByPattern(list, /(^|[\\/])app\.asar$/i);
        if (directAsar?.name) {
            return await extractEntry(exePath, directAsar.name, workDir);
        }

        const nestedArchive = findEntryByPattern(list, /\.7z$/i);
        if (nestedArchive?.name) {
            const nestedPath = await extractEntry(exePath, nestedArchive.name, workDir);
            let nestedList = null;
            try {
                nestedList = await sevenZip.list(nestedPath);
            } catch (error) {
                console.warn('Не удалось получить список файлов вложенного архива:', error?.message ?? error);
            }

            const nestedAsar = findEntryByPattern(nestedList, /(^|[\\/])app\.asar$/i);
            if (nestedAsar?.name) {
                return await extractEntry(nestedPath, nestedAsar.name, workDir);
            }

            try {
                await sevenZip.unpack(nestedPath, workDir);
            } catch (error) {
                console.warn('Не удалось распаковать вложенный архив полностью:', error?.message ?? error);
            }

            const foundNested = await findFileRecursive(workDir, 'app.asar');
            if (foundNested) return foundNested;
        }

        console.log('app.asar не найден напрямую, пробую полное извлечение установщика...');
        try {
            await sevenZip.unpack(exePath, workDir);
        } catch (error) {
            console.error('Не удалось распаковать установщик:', error?.message ?? error);
            return null;
        }

        return await findFileRecursive(workDir, 'app.asar');
    }

    async function downloadAndExtractYm({ versionOverride = null, force = false }) {
        const latestInfo = await fetchLatestYmYaml();
        const downloadInfo = resolveYmDownloadInfo(latestInfo, versionOverride);
        if (!downloadInfo) return null;

        const { version, downloadUrl, sha512, size, fileName } = downloadInfo;
        const targetDir = path.join(EXTRACTED_DIR_PATH, `${version}@pure`);

        if (!force && fs.existsSync(targetDir)) {
            console.log(`Папка под ${version}@pure уже существует:`, targetDir);
            return targetDir;
        }

        await fsp.mkdir(EXTRACTED_DIR_PATH, { recursive: true });
        const downloadsDir = path.join(TEMP_DIR, 'yandexmusic-downloads');
        await fsp.mkdir(downloadsDir, { recursive: true });

        const exePath = path.join(downloadsDir, fileName || `Yandex_Music_x64_${version}.exe`);

        if (force && fs.existsSync(exePath)) {
            await fsp.rm(exePath, { force: true });
        }

        if (!fs.existsSync(exePath)) {
            try {
                await downloadFile(downloadUrl, exePath, size);
            } catch (error) {
                console.error('Не удалось скачать установщик:', error?.message ?? error);
                return null;
            }
        } else {
            console.log('Использую уже скачанный установщик:', exePath);
        }

        if (sha512) {
            const actualHash = await calcSha512Base64(exePath);
            if (actualHash !== sha512) {
                console.error('SHA512 не совпадает. Ожидалось:', sha512, 'получено:', actualHash);
                return null;
            }
        } else if (versionOverride) {
            console.warn('SHA512 пропущен: указана версия вручную.');
        }

        const workDir = path.join(TEMP_DIR, `yandexmusic-${version}`);
        const asarPath = await extractAsarFromNsis(exePath, workDir);
        if (!asarPath) {
            console.error('Не удалось извлечь app.asar из установщика');
            return null;
        }
        return await extractIfNotExist(`${version}@pure`, force, asarPath);
    }

    async function getLatestExtractedSrcDir(toPatched = false) {
        let version = '1.0.0';
        const versions = (await fsp.readdir(EXTRACTED_DIR_PATH, { withFileTypes: true }))
            .filter((dirent) => {
                return dirent.isDirectory() && dirent.name.endsWith('@pure');
            })
            .map((dirstr) => dirstr.name.replace('@pure', ''));

        versions.forEach((ver) => {
            if (semver.gt(ver, version)) version = ver;
        });

        if (version === '1.0.0') return console.log('Не удалось получить последний релиз из ./extracted/');
        return path.join(EXTRACTED_DIR_PATH, `/${version}${toPatched ? '' : '@pure'}`);
    }

    async function getLatestYMVersion(type = 'direct', srcPath = undefined) {
        let packageFileBuffer;
        switch (type) {
            default:
            case 'direct':
                packageFileBuffer = asar.extractFile(DIRECT_DIST_PATH, 'package.json').toString();
                break;
            case 'extracted':
                let extractedPathDir = await getLatestExtractedSrcDir();
                if (!extractedPathDir) return console.log('Не удалось получить последнюю версию YM');
                packageFileBuffer = await fsp.readFile(path.join(extractedPathDir, '/package.json'), 'utf8');
                break;
            case 'src':
                packageFileBuffer = await fsp.readFile(path.join(SRC_PATH, '/package.json'), 'utf8');
                break;
            case 'customSrc':
                packageFileBuffer = await fsp.readFile(path.join(srcPath, '/package.json'), 'utf8');
                break;
            case 'customAsar':
                packageFileBuffer = asar.extractFile(srcPath, 'package.json').toString();
                break;
        }

        const packageFileJson = JSON.parse(packageFileBuffer);
        let buildInfo = packageFileJson.buildInfo ?? null;

        if (!buildInfo) {
            try {
                let indexBuffer = null;

                if (type === 'direct') {
                    try {
                        indexBuffer = asar.extractFile(DIRECT_DIST_PATH, 'index.js').toString();
                    } catch (err) {}
                } else if (type === 'extracted') {
                    const extractedDir = await getLatestExtractedSrcDir();
                    if (extractedDir) {
                        const idxPath = path.join(extractedDir, '/index.js');
                        if (fs.existsSync(idxPath)) indexBuffer = await fsp.readFile(idxPath, 'utf8');
                    }
                } else if (type === 'src') {
                    const srcIdx = path.join(SRC_PATH, '/index.js');
                    if (fs.existsSync(srcIdx)) indexBuffer = await fsp.readFile(srcIdx, 'utf8');
                }

                if (indexBuffer) {
                    const m = indexBuffer.match(/const\s+buildInfo\s*=\s*(\{[\s\S]*?\})\s*;/m);
                    if (m && m[1]) {
                        const objStr = m[1];
                        try {
                            const sandbox = {};
                            const parsed = vm.runInNewContext('(' + objStr + ')', sandbox, { timeout: 50 });
                            if (parsed && typeof parsed === 'object') buildInfo = parsed;
                        } catch (vmErr) {
                            console.warn('Не удалось распарсить buildInfo через vm:', vmErr.message);
                        }
                    }
                }
            } catch (err) {
                console.warn('Не удалось получить buildInfo из index.js:', err.message);
            }
        }
        return { version: packageFileJson.version, buildInfo: buildInfo, modification: packageFileJson.modification };
    }

    function getModVersion() {
        return require(path.join(SRC_PATH, '/main/config.js')).config.modification.version;
    }

    async function modifyPackage({ src = SRC_PATH, version = undefined, buildInfo = undefined, modVersion = undefined, appConfig = undefined }) {
        let packageJson = JSON.parse(await fsp.readFile(path.join(src, '/package.json'), 'utf8'));
        const oldVersion = packageJson.version;

        if (version) packageJson.version = version;
        if (buildInfo) packageJson.buildInfo = buildInfo;
        if (modVersion) packageJson.modification.version = modVersion;
        if (appConfig) packageJson.appConfig = { ...packageJson.appConfig, ...appConfig };

        await fsp.writeFile(path.join(src, '/package.json'), JSON.stringify(packageJson, null, 4), 'utf8');
        return { oldVersion: oldVersion, newVersion: version };
    }

    async function minifyDir(srcDir, destDir) {
        await fsp.mkdir(destDir, { recursive: true });
        const items = await fsp.readdir(srcDir);
        for (const item of items) {
            const srcPath = path.join(srcDir, item);
            const destPath = path.join(destDir, item);
            const stat = await fsp.stat(srcPath);
            if (stat.isFile() && srcPath.endsWith('.js')) {
                try {
                    console.time(`    Минифицирован: ${destPath}`);
                    const code = await fsp.readFile(srcPath, 'utf8');
                    const result = await minify(code);
                    if (result.error) {
                        console.error(`    Ошибка минификации ${destPath}:`, result.error);
                        continue;
                    }
                    await fsp.writeFile(destPath, result.code, 'utf8');
                    console.timeEnd(`    Минифицирован: ${destPath}`);
                } catch (err) {
                    console.warn(`    Ошибка при минификации ${destPath}:`, err);
                    await fsp.cp(srcPath, destPath, { recursive: true });
                    console.log(`    Пропущен и скопирован: ${destPath}`);
                }
            } else if (stat.isDirectory()) {
                await minifyDir(srcPath, destPath);
            } else {
                await fsp.cp(srcPath, destPath, { recursive: true });
                console.log(`    Скопирован: ${destPath}`);
            }
        }
    }
    function hashDirFiltered(dir, ignore = ['node_modules', 'dist', 'build', '.build-meta.json', '.git', '.DS_Store']) {
        const hash = crypto.createHash('sha256');

        function walk(p) {
            const entries = fs.readdirSync(p, { withFileTypes: true });
            for (const e of entries) {
                if (ignore.includes(e.name)) continue;

                const full = path.join(p, e.name);
                if (e.isDirectory()) {
                    walk(full);
                } else {
                    hash.update(e.name);
                    hash.update(fs.readFileSync(full));
                }
            }
        }

        walk(dir);
        return hash.digest('hex');
    }

    function getNativeBuildKey(nativeDir) {
        return crypto
            .createHash('sha256')
            .update(
                JSON.stringify({
                    sourcesHash: hashDirFiltered(nativeDir),
                    abi: process.versions.modules,
                    platform: process.platform,
                    arch: process.arch,
                }),
            )
            .digest('hex');
    }

    /**
     * Сборка и копирование нативного модуля
     * @param {string} moduleName - имя папки с модулем (например, setIconicThumbnail)
     */
    async function buildNativeModule(moduleName) {
        const nativeDir = path.join(__dirname, 'native', moduleName);
        const gypPath = path.join(nativeDir, 'binding.gyp');
        if (!fs.existsSync(gypPath)) throw new Error(`Не найден binding.gyp в ${nativeDir}`);

        const gyp = JSON.parse(
            fs
                .readFileSync(gypPath, 'utf8')
                .replace(/\/\/.*$/gm, '')
                .replace(/,\s*]/g, ']')
                .replace(/,\s*}/g, '}'),
        );

        const targetName = gyp.targets?.[0]?.target_name;
        if (!targetName) throw new Error('Не удалось получить target_name');

        const destDir = path.join(__dirname, 'src', 'main', 'native_modules', targetName);
        const destNode = path.join(destDir, `${targetName}.node`);
        const metaPath = path.join(destDir, '.build-meta.json');

        const buildKey = getNativeBuildKey(nativeDir);

        if (fs.existsSync(destNode) && fs.existsSync(metaPath) && JSON.parse(fs.readFileSync(metaPath, 'utf8')).buildKey === buildKey) {
            console.log(`⏩ Нативный модуль ${targetName} актуален — сборка пропущена`);
            return;
        }

        console.log(`🔨 Сборка нативного модуля: ${targetName}`);
        execSync('yarn run build', { cwd: nativeDir, stdio: 'inherit' });

        const builtNode = path.join(nativeDir, 'build', 'Release', `${targetName}.node`);
        await fsp.mkdir(destDir, { recursive: true });
        await fsp.copyFile(builtNode, destNode);

        // JS wrapper
        const jsDir = path.join(nativeDir, 'js');
        if (fs.existsSync(jsDir)) {
            for (const file of await fsp.readdir(jsDir)) {
                await fsp.copyFile(path.join(jsDir, file), path.join(destDir, file));
            }
        }

        fs.writeFileSync(
            metaPath,
            JSON.stringify(
                {
                    buildKey,
                    builtAt: new Date().toISOString(),
                },
                null,
                2,
            ),
        );

        console.log(`✅ Модуль ${targetName} собран`);
    }

    async function buildNativeModules() {
        console.log('Собираю нативные модули');
        const nativeDir = path.join(__dirname, 'native');
        const modules = (await fsp.readdir(nativeDir, { withFileTypes: true })).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
        for (const module of modules) {
            await buildNativeModule(module);
        }
    }

    async function buildMiniPlayer(force = false) {
        const miniPlayerDir = path.join(__dirname, 'miniplayer');
        const metaPath = path.join(miniPlayerDir, '.build-meta.json');

        if (!fs.existsSync(miniPlayerDir)) {
            console.log('Миниплеер не найден, сборка пропущена');
            return;
        }

        const buildKey = crypto
            .createHash('sha256')
            .update(
                JSON.stringify({
                    sourcesHash: hashDirFiltered(miniPlayerDir),
                    node: process.version,
                    platform: process.platform,
                    arch: process.arch,
                }),
            )
            .digest('hex');

        if (!force && fs.existsSync(metaPath)) {
            const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
            if (meta.buildKey === buildKey) {
                console.log('⏩ Миниплеер актуален — сборка пропущена');
                return;
            }
        }

        console.log('🎵 Сборка миниплеера...');
        console.time('Миниплеер собран');

        execSync('yarn', {
            cwd: miniPlayerDir,
            stdio: 'inherit',
        });

        execSync('yarn run build', {
            cwd: miniPlayerDir,
            stdio: 'inherit',
        });

        console.timeEnd('Миниплеер собран');

        fs.writeFileSync(
            metaPath,
            JSON.stringify(
                {
                    buildKey,
                    builtAt: new Date().toISOString(),
                },
                null,
                2,
            ),
        );

        console.log('✅ Миниплеер успешно собран');
    }

    async function build(
        { srcPath = SRC_PATH, destDir = DEFAULT_DIST_PATH, noMinify = false, noNativeModules = false } = {
            srcPath: SRC_PATH,
            destDir: DEFAULT_DIST_PATH,
            noMinify: false,
        },
    ) {
        let workPath = srcPath;

        await buildMiniPlayer();

        const isMac = process.platform === 'darwin';

        if (!noNativeModules && !isMac) await buildNativeModules();

        if (!noMinify) {
            console.log('Минификация...');
            console.time('Минификация завершена');
            await minifyDir(srcPath, MINIFIED_SRC_PATH);
            console.timeEnd('Минификация завершена');
            workPath = MINIFIED_SRC_PATH;
        }

        console.log('Архивация из ' + workPath + ' в ' + destDir);
        console.time('Архивация завершена');
        await asar.createPackageWithOptions(workPath, destDir, { unpackDir: '**/node_modules/{sharp,@img}/**/*' });
        console.timeEnd('Архивация завершена');
        if (!noMinify) {
            await fsp.rm(MINIFIED_SRC_PATH, { recursive: true });
            console.log('Минифицированный код отчищен');
        }
    }

    async function buildDirectly(src, noMinify = false, noNativeModules = false, forceOpen = false) {
        if (process.platform === 'darwin' && checkIfSystemIntegrityProtectionEnabled()) {
            console.log('System Integrity Protection включён. Обход невозможен, пожалуйста, отключите SIP для File System и попробуйте снова.');
            return false;
        }
        oldYMHash = calcASARHeaderHash(DIRECT_DIST_PATH).hash;

        const shouldReopen = await closeYandexMusic();

        await build({ srcPath: src, destDir: DIRECT_DIST_PATH, noMinify: noMinify, noNativeModules: noNativeModules });

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Dirty delay. To make sure YM is closed

        await bypassAsarIntegrity();

        if (shouldReopen || forceOpen) {
            console.log('Запуск Яндекс Музыки...');
            launchYandexMusic();
            console.log('Яндекс Музыка запущена');
        }
    }

    async function spoof(type = 'extracted', shouldRelease = false) {
        console.log('Спуфинг...');
        console.time('Спуфинг завершён');
        const versions = await getLatestYMVersion(type);
        console.log('Последняя версия ЯМ', versions);
        const result = await modifyPackage({ version: versions.version, buildInfo: versions.buildInfo });

        console.timeEnd('Спуфинг завершён');
        console.log('Спуфнуто с', result.oldVersion, 'до', result.newVersion);
        return result;
    }

    async function release(dest, versions = undefined) {
        const version = await getModVersion();
        const { version: ymVersion } = await getLatestYMVersion();
        const patchNote = versions ? PatchNote.forSpoofPatch(versions.newVersion, version, versions.oldVersion) : new PatchNote(ymVersion, version, patchNoteStringMD);
        await createGitHubRelease(version, dest, patchNote);
        await uploadAppAsar(dest, version, ymVersion, true, patchNote.patchNoteString, null, 'zstd', '/cdn/upload/asar');
        //await sendPatchNoteToDiscord(patchNote);
    }

    async function extractIfNotExist(version, force = false, src = undefined) {
        const extractedPathDir = path.join(EXTRACTED_DIR_PATH, version);
        if (!force && fs.existsSync(extractedPathDir)) return console.log('Папка под ' + version + ' уже существует:', extractedPathDir);
        await fsp.mkdir(extractedPathDir, { recursive: true });
        await asar.extractAll(src ?? DIRECT_DIST_PATH, extractedPathDir);
        console.log('Релиз ' + version + ' успешно извлечён в', extractedPathDir);
        return extractedPathDir;
    }

    async function extractBuild(force = false, src = undefined, type = 'direct', withPure = true) {
        if (!fs.existsSync(EXTRACTED_DIR_PATH)) {
            await fsp.mkdir(EXTRACTED_DIR_PATH, { recursive: true });
        }
        const latestYMVersion = await getLatestYMVersion(type, src);

        const pathToExtractedBuild = await extractIfNotExist(latestYMVersion.version, force, src);

        if (withPure) {
            const pathToPureExtractedBuild = await extractIfNotExist(`${latestYMVersion.version}@pure`, force);

            return { pureExtracted: pathToPureExtractedBuild, extracted: pathToExtractedBuild };
        }

        return { extracted: pathToExtractedBuild };
    }

    async function replaceInFilesRecursively(dir, rules) {
        const entries = await fsp.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                await replaceInFilesRecursively(fullPath, rules);
            } else if (entry.isFile()) {
                let content = await fsp.readFile(fullPath, 'utf8');
                let newContent = content;
                for (const { regex, replacement } of rules) {
                    newContent = newContent.replace(regex, replacement);
                }
                if (newContent !== content) {
                    await fsp.writeFile(fullPath, newContent, 'utf8');
                    console.log(`Вхождение найдено и заменено в: ${fullPath}`);
                }
            }
        }
    }

    async function patchExtractedBuild(extractedPath, options = { unlockDevtools: true, unlockDevPanel: true }) {
        console.log('Патчинг извлечённого релиза', extractedPath);

        if (options.unlockDevtools) {
            // Old way (Using it again because new YM version bundles all main files into main/index.js)
            let indexJs = await fsp.readFile(path.join(extractedPath, '/index.js'), 'utf8');
            indexJs = indexJs.replace(/const\s?webPreferences\s?=\s?\{/i, 'const webPreferences = { devTools: true,');
            await fsp.writeFile(path.join(extractedPath, '/index.js'), indexJs, 'utf8');

            // await modifyPackage({src: extractedPath, appConfig: { enableDevTools: true, enableUpdateByProbability: false } });
            // console.log("Devtools Разблокированы", extractedPath);
        }

        if (options.unlockDevPanel) {
            const rules = [
                // Old way
                // { regex: /panel: ?!1, ?allowOverwriteExperiments: ?!1/g, replacement: 'panel:!0,allowOverwriteExperiments:!0' },
                // { regex: /exposeSonataStateInWindow: ?!1/g, replacement: 'exposeSonataStateInWindow:!0' },
                { regex: /e\.set\(c.qV, ?![10]\), ?e\.set\(c.yc, ?![10]\), ?e\.set\(c.W4, ?![10]\)/g, replacement: 'e.set(c.qV,!0),e.set(c.yc,!0),e.set(c.W4,!0)' },
            ];

            console.log('Применяю regex патчи', extractedPath, rules);
            await replaceInFilesRecursively(path.join(extractedPath, '/app/'), rules);
            console.log('Regex патчи применены', extractedPath);
        }
    }

    function calcASARHeaderHash(archivePath) {
        const headerString = asar.getRawHeader(archivePath).headerString;
        const hash = crypto.createHash('sha256').update(headerString).digest('hex');
        return { algorithm: 'SHA256', hash };
    }

    function dumpEntitlements(appPath) {
        try {
            execSync(`codesign -d --entitlements :- '${appPath}' > '${EXTRACTED_ENTITLEMENTS_PATH}'`);
            console.log(`Упакованы entitlements из ${appPath} в ${EXTRACTED_ENTITLEMENTS_PATH}`);
        } catch (error) {
            console.error(`Не удалось упаковать entitlements из ${appPath} в ${EXTRACTED_ENTITLEMENTS_PATH}.`, error);
        }
    }

    function checkIfElectronAsarIntegrityIsUsed() {
        try {
            execSync(`plutil -p '${INFO_PLIST_PATH}' | grep -q ElectronAsarIntegrity`);
            return true;
        } catch {
            return false;
        }
    }

    function checkIfSystemIntegrityProtectionEnabled() {
        try {
            const response = execSync(`csrutil status`);
            return response.includes('enabled');
        } catch {
            return false;
        }
    }

    async function bypassWinAsarIntegrity(appPath) {
        console.log(`Подготовка к замене хеша`);
        try {
            const exePath = appPath;

            if (!fs.existsSync(exePath)) {
                return console.log(`Файл не найден по пути: ${exePath}`);
            }

            // // 2) Создание резервной копии
            // const backupPath = exePath + '.backup';
            // if (!fs.existsSync(backupPath)) {
            //     fs.copyFileSync(exePath, backupPath);
            //     console.log(`Резервная копия создана: ${backupPath}`);
            // } else {
            //     console.log(`Резервная копия уже существует: ${backupPath}`);
            // }

            // 3) Шаблоны (ASCII‑hex)
            const oldHexStr = oldYMHashOverride ?? oldYMHash;
            const newHexStr = calcASARHeaderHash(DIRECT_DIST_PATH).hash;

            console.log(`Хеши: ${oldHexStr} ${newHexStr} ${oldHexStr.length} ${newHexStr.length}`);

            if (oldHexStr.length !== newHexStr.length) {
                return console.log('Длины старого и нового хеша не совпадают');
            }

            if (oldHexStr === newHexStr) {
                return console.log('Старый и новый хеши совпадают, изменения не требуется');
            }

            const oldBuf = Buffer.from(oldHexStr, 'ascii');
            const newBuf = Buffer.from(newHexStr, 'ascii');

            // 4) Чтение, замена, запись
            const fileBuf = fs.readFileSync(exePath);
            let count = 0;
            let offset = 0;

            while (true) {
                const idx = fileBuf.indexOf(oldBuf, offset);
                if (idx === -1) break;
                newBuf.copy(fileBuf, idx);
                count++;
                offset = idx + oldBuf.length;
            }

            if (count === 0) {
                console.log('Шаблон не найден, изменений не внесено.');
            } else {
                fs.writeFileSync(exePath, fileBuf);
                console.log(`Успешно заменено вхождений: ${count}.`);
            }
        } catch (err) {
            console.log('Ошибка: ' + err.message);
        }
    }

    async function bypassDarwinAsarIntegrity(appPath) {
        if (process.platform !== 'darwin') {
            console.log('Не удалось обойти asar integrity: Доступно только для macOS');
            return false;
        }

        if (checkIfSystemIntegrityProtectionEnabled()) {
            console.log('System Integrity Protection включён. Обход невозможен, пожалуйста, отключите SIP для File System и попробуйте снова.');
            return false;
        }

        try {
            if (checkIfElectronAsarIntegrityIsUsed()) {
                console.log('Asar integrity включено. Обход');
                const newHash = calcASARHeaderHash(DIRECT_DIST_PATH).hash;
                console.log(`Хеш модифицированного asar: ${newHash}`);
                console.log('Подменяю хеш в Info.plist');

                const plistContent = fs.readFileSync(INFO_PLIST_PATH, 'utf8');
                const plistData = plist.parse(plistContent);
                plistData.ElectronAsarIntegrity['Resources/app.asar'].hash = newHash;
                fs.writeFileSync(INFO_PLIST_PATH, plist.build(plistData));
            }

            console.log('Подменяю подпись');
            dumpEntitlements(appPath);

            execSync(`codesign --force --entitlements ${EXTRACTED_ENTITLEMENTS_PATH} --sign - '${appPath}'`);
            fs.unlinkSync(EXTRACTED_ENTITLEMENTS_PATH);
            console.log('Кеш очищен');

            console.log('Обход asar integrity завершён');
        } catch (error) {
            console.error('Не удалось обойти asar integrity', error);
            fs.unlinkSync(EXTRACTED_ENTITLEMENTS_PATH);
            console.log('Кеш очищен');
        }
    }

    async function bypassAsarIntegrity(dest = undefined) {
        if (process.platform === 'darwin') await bypassDarwinAsarIntegrity(dest ?? MAC_APP_PATH);
        if (process.platform === 'win32') await bypassWinAsarIntegrity(dest ?? WINDOWS_EXE_PATH);
    }

    // Copied from https://github.com/PulseSync-LLC/PulseSync-client/blob/dev/src/main/utils/appUtils.ts
    async function getYandexMusicProcesses() {
        if (process.platform === 'darwin') {
            try {
                const command = `pgrep -f "Яндекс Музыка"`;
                const { stdout } = await execAsync(command, { encoding: 'utf8' });
                const processes = stdout.split('\n').filter((line) => line.trim() !== '');
                return processes.map((pid) => ({ pid: parseInt(pid, 10) })).filter((proc) => !isNaN(proc.pid));
            } catch (error) {
                console.error('Ошибка выявления процесса Яндекс Музыки на Mac:', error);
                return [];
            }
        } else if (process.platform === 'linux') {
            try {
                const command = `pgrep -fa "yandexmusic"`;
                const { stdout } = await execAsync(command, { encoding: 'utf8' });
                const processes = stdout
                    .split('\n')
                    .filter((line) => line.trim() !== '')
                    .filter((line) => !['pgrep', 'yandexmusicmodpatcher', 'YandexMusicModPatcher'].some((keyword) => line.includes(keyword)));
                return processes
                    .map((line) => {
                        const parts = line.split(' ');
                        const pid = parseInt(parts[0], 10);
                        return { pid };
                    })
                    .filter((proc) => !isNaN(proc.pid));
            } catch (error) {
                console.error('Ошибка выявления процесса Яндекс Музыки на Linux:', error);
                return [];
            }
        } else {
            try {
                const command = `tasklist /FI "IMAGENAME eq Яндекс Музыка.exe" /FO CSV /NH`;
                const { stdout } = await execAsync(command, { encoding: 'utf8' });
                const processes = stdout.split('\n').filter((line) => line.trim() !== '');
                const yandexProcesses = [];
                processes.forEach((line) => {
                    const parts = line.split('","');
                    if (parts.length > 1) {
                        const pidStr = parts[1].replace(/"/g, '').trim();
                        const pid = parseInt(pidStr, 10);
                        if (!isNaN(pid)) {
                            yandexProcesses.push({ pid });
                        }
                    }
                });
                return yandexProcesses;
            } catch (error) {
                console.error('Ошибка выявления процесса Яндекс Музыки:', error);
                return [];
            }
        }
    }

    async function isYandexMusicRunning() {
        return (await getYandexMusicProcesses())?.length > 0;
    }

    async function closeYandexMusic() {
        const yandexProcesses = await getYandexMusicProcesses();
        if (yandexProcesses.length === 0) {
            console.log('Яндекс Музыка не запущена. Закрытие не требуется.');
            return false;
        }

        console.log('Закрываю Яндекс Музыку...');

        for (const proc of yandexProcesses) {
            try {
                process.kill(proc.pid);
                console.log(`Процесс Яндекс Музыки с PID ${proc.pid} был завершён.`);
            } catch (error) {
                console.error(`Не удалось завершить процесс ${proc.pid}:`, error);
            }
        }

        return true;
    }

    async function launchYandexMusic() {
        return await openExternalDetached('yandexmusic://');
    }

    async function openExternalDetached(url) {
        let command, args;

        if (process.platform === 'win32') {
            command = 'cmd.exe';
            args = ['/c', 'start', '', url];
        } else if (process.platform === 'darwin') {
            command = 'open';
            args = [url];
        } else {
            command = 'xdg-open';
            args = [url];
        }

        (await spawnAsync(command, args, { detached: true, stdio: 'ignore' })).unref();
    }
    async function prettifyLatestPure() {
        console.log('Форматирование через Prettier');
        console.time('Форматирование завершено');
        const latestPureDir = await getLatestExtractedSrcDir();
        if (!latestPureDir) return;
        const baseName = path.basename(latestPureDir, '@pure');
        const prettyDir = path.join(EXTRACTED_DIR_PATH, `${baseName}@pretty`);
        await fsp.rm(prettyDir, { recursive: true, force: true });
        await fsp.cp(latestPureDir, prettyDir, { recursive: true });
        execSync(`prettier --config "${PRETTIER_CONFIG_PATH}" --ignore-path "${path.join(__dirname, '.prettierignore')}" --write "${prettyDir}"`);
        console.timeEnd('Форматирование завершено');
    }
    async function run(command, flags) {
        if (command) console.time(`${command} исполнен за`);

        const force = flags.f ?? false;

        const forceOpen = flags.forceOpen ?? false;
        const lastExtracted = flags.lastExtracted ?? false;
        const extractType = flags.extractType ?? 'direct';
        const withoutPure = flags.withoutPure ?? false;
        const noNativeModules = command === 'extract' || lastExtracted ? true : (flags.noNativeModules ?? false);
        oldYMHashOverride = flags.oldYMHashOverride;
        const downloadVersion = flags.version;

        const shouldPatch = flags.p ?? false;
        const shouldMinify = flags.m ?? false;
        const shouldBuildDirectly = flags.d ?? false;
        const shouldRelease = flags.r ?? false;
        const shouldBuild = flags.b ?? false;

        const dest = flags.dest ?? (lastExtracted ? DEFAULT_PATCHED_DIST_PATH : DEFAULT_DIST_PATH);
        const src = command === 'extract' ? flags.src : lastExtracted ? await getLatestExtractedSrcDir(true) : (flags.src ?? SRC_PATH);

        switch (command) {
            case 'build':
                if (shouldBuildDirectly) {
                    await buildDirectly(src, !shouldMinify, noNativeModules, forceOpen);
                    break;
                }
                if (shouldRelease) {
                    await build({ srcPath: src, destDir: dest, noMinify: !shouldMinify, noNativeModules: noNativeModules });
                    await release(dest);
                    break;
                }

                await build({ srcPath: src, destDir: dest, noMinify: !shouldMinify, noNativeModules: noNativeModules });
                break;
            case 'spoof':
                const versions = await spoof('extracted', shouldRelease);
                if (shouldBuild || shouldRelease) await build({ destDir: dest, noMinify: !shouldMinify, noNativeModules: noNativeModules });
                if (shouldRelease) await release(dest, versions);
                break;
            case 'release':
                await release(dest);
                break;
            case 'download':
                await downloadAndExtractYm({ versionOverride: downloadVersion, force });
                break;

            case 'extract':
                const { extracted } = await extractBuild(force, src, extractType, !withoutPure);
                if (shouldPatch) await patchExtractedBuild(extracted);
                if (shouldBuildDirectly) await buildDirectly(extracted, !shouldMinify, noNativeModules, forceOpen);
                if (shouldBuild)
                    await build({
                        srcPath: extracted,
                        destDir: DEFAULT_PATCHED_DIST_PATH,
                        noMinify: !shouldMinify,
                        noNativeModules: noNativeModules,
                    });
                break;
            case 'patch':
                await patchExtractedBuild(src);
                if (shouldBuildDirectly) await buildDirectly(src, !shouldMinify, noNativeModules, forceOpen);
                break;
            case 'bypass-asar-integrity':
                await bypassAsarIntegrity(dest);
                break;
            case 'rebuild':
                await buildDirectly(src, true, false, true);
                break;
            case 'pretty':
                await prettifyLatestPure();
                break;
            default:
                if (command) console.log('Неизвестная команда:', command, '\nИнтерпретирую как help...');
            case 'help':
                console.log('\n================================\n');
                console.log(
                    'Команды:\n\nhelp - Отображает это сообщение\nbuild - собирает проект в asar-файл\nspoof - подменяет версию приложения в src на последнюю\nrelease - загружает asar на сервер и отправляет патчноут\nextract - извлекает новый билд из приложения\ndownload - скачивает установщик YM и распаковывает app.asar в ./extracted/<version>@pure\npatch - патчит извлечённый билд для разблокировки девтулзов и дев панели\nbypass-asar-integrity - обходит проверку целостности asar\nrebuild - шорткат для build -d --noNativeModules --forceOpen',
                );
                console.log('\n================================\n');
                console.log(
                    'Флаги:\n\n -f - форсирует перезапись/пересборку/повторное извлечение\n --forceOpen - форсирует открытие Яндекс Музыки после выполнения команды\n --noNativeModules - пропускает сборку нативных модулей (только для build и buildDirectly)\n -m - минифицирует исходный код (только для build и buildDirectly)\n -o - обфускация исходного кода (только для build и buildDirectly)\n -r - вызывает release (только для spoof или build)\n -b - собирает проект (только для spoof)\n -d - собирает напрямую в дистрибутив Яндекс Музыки (только для build и patch)\n -p - патчит извлечённый (только для extract)\n --lastExtracted - использует последний извлечённый билд из ./extracted/ в качестве src (только для build и buildDirectly)\n --extractType [direct/extracted/src/customSrc/customAsar] - тип источника для извлечения (только для extract), по умолчанию direct\n --withoutPure - не извлекает чистую версию без патчей (только для extract)\n --version [semver] - использовать конкретную версию для download\n --src [path] - путь к исходному коду или asar-файлу, в зависимости от команды\n --dest [path] - путь к результирующему asar-файлу, в зависимости от команды\n --oldYMHashOverride [hash] - переопределяет старый хеш asar при обходе целостности (только Windows; для bypass-asar-integrity и build -d)',
                );
                console.log('\n================================\n');
                console.log('Флаги с аргументами указываются через =, например --oldYMHashOverride=f9cdcfb583ccebb5b23edaab0ea90165bee0479458532a0580c1b3a307d746d3');
                console.log('\n================================\n');
                break;
        }

        const isYmRunning = await isYandexMusicRunning();
        if (!isYmRunning && forceOpen) {
            console.log('Запуск Яндекс Музыки...');
            launchYandexMusic();
            console.log('Яндекс Музыка запущена');
        }

        if (command) console.timeEnd(`${command} исполнен за`);
    }
    const args = minimist(process.argv.slice(2));
    console.log(args);
    await run(args._?.[0], args);
})();
