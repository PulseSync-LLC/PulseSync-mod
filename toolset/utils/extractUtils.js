function createExtractUtils(runtime) {
    const { asar, fs, fsp, path, semver, crypto, axios, yaml, sevenZip, vm } = runtime.deps;
    const { EXTRACTED_DIR_PATH, YM_LATEST_YML_URL, TEMP_DIR, DIRECT_DIST_PATH, SRC_PATH } = runtime.constants;

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
            return extractEntry(exePath, directAsar.name, workDir);
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
                return extractEntry(nestedPath, nestedAsar.name, workDir);
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

        return findFileRecursive(workDir, 'app.asar');
    }

    async function extractIfNotExist(version, force = false, src = undefined) {
        const extractedPathDir = path.join(EXTRACTED_DIR_PATH, version);
        if (!force && fs.existsSync(extractedPathDir)) {
            console.log('Папка под ' + version + ' уже существует:', extractedPathDir);
            return extractedPathDir;
        }

        await fsp.mkdir(extractedPathDir, { recursive: true });
        await asar.extractAll(src ?? DIRECT_DIST_PATH, extractedPathDir);
        console.log('Релиз ' + version + ' успешно извлечён в', extractedPathDir);
        return extractedPathDir;
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
            console.log('�?спользую уже скачанный установщик:', exePath);
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

        return extractIfNotExist(`${version}@pure`, force, asarPath);
    }

    async function getLatestExtractedSrcDir(toPatched = false) {
        const versions = (await fsp.readdir(EXTRACTED_DIR_PATH, { withFileTypes: true }))
            .filter((dirent) => dirent.isDirectory() && dirent.name.endsWith('@pure'))
            .map((dirent) => dirent.name.replace('@pure', ''));

        let version = '1.0.0';
        versions.forEach((ver) => {
            if (semver.gt(ver, version)) version = ver;
        });

        if (version === '1.0.0') {
            console.log('Не удалось получить последний релиз из ./extracted/');
            return undefined;
        }

        return path.join(EXTRACTED_DIR_PATH, `${version}${toPatched ? '' : '@pure'}`);
    }

    async function getLatestYMVersion(type = 'direct', srcPath = undefined) {
        let packageFileBuffer;

        switch (type) {
            default:
            case 'direct':
                packageFileBuffer = asar.extractFile(DIRECT_DIST_PATH, 'package.json').toString();
                break;
            case 'extracted': {
                const extractedPathDir = await getLatestExtractedSrcDir();
                if (!extractedPathDir) {
                    console.log('Не удалось получить последнюю версию YM');
                    return undefined;
                }
                packageFileBuffer = await fsp.readFile(path.join(extractedPathDir, '/package.json'), 'utf8');
                break;
            }
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
                    } catch {}
                } else if (type === 'extracted') {
                    const extractedDir = await getLatestExtractedSrcDir();
                    if (extractedDir) {
                        const indexPath = path.join(extractedDir, '/index.js');
                        if (fs.existsSync(indexPath)) {
                            indexBuffer = await fsp.readFile(indexPath, 'utf8');
                        }
                    }
                } else if (type === 'src') {
                    const srcIndexPath = path.join(SRC_PATH, '/index.js');
                    if (fs.existsSync(srcIndexPath)) {
                        indexBuffer = await fsp.readFile(srcIndexPath, 'utf8');
                    }
                }

                if (indexBuffer) {
                    const match = indexBuffer.match(/const\s+buildInfo\s*=\s*(\{[\s\S]*?\})\s*;/m);
                    if (match?.[1]) {
                        try {
                            const parsed = vm.runInNewContext(`(${match[1]})`, {}, { timeout: 50 });
                            if (parsed && typeof parsed === 'object') {
                                buildInfo = parsed;
                            }
                        } catch (vmError) {
                            console.warn('Не удалось распарсить buildInfo через vm:', vmError.message);
                        }
                    }
                }
            } catch (error) {
                console.warn('Не удалось получить buildInfo из index.js:', error.message);
            }
        }

        return {
            version: packageFileJson.version,
            buildInfo,
            modification: packageFileJson.modification,
        };
    }

    async function extractBuild(force = false, src = undefined, type = 'direct', withPure = true) {
        if (!fs.existsSync(EXTRACTED_DIR_PATH)) {
            await fsp.mkdir(EXTRACTED_DIR_PATH, { recursive: true });
        }

        const latestYMVersion = await getLatestYMVersion(type, src);
        const pathToExtractedBuild = await extractIfNotExist(latestYMVersion.version, force, src);

        if (!withPure) {
            return { extracted: pathToExtractedBuild };
        }

        const pathToPureExtractedBuild = await extractIfNotExist(`${latestYMVersion.version}@pure`, force);
        return {
            pureExtracted: pathToPureExtractedBuild,
            extracted: pathToExtractedBuild,
        };
    }

    return {
        fetchLatestYmYaml,
        resolveYmDownloadInfo,
        downloadAndExtractYm,
        getLatestExtractedSrcDir,
        getLatestYMVersion,
        extractIfNotExist,
        extractBuild,
    };
}

module.exports = {
    createExtractUtils,
};
