function createIntegrityUtils(runtime) {
    const { asar, fs, crypto, plist, execSync } = runtime.deps;
    const { DIRECT_DIST_PATH, INFO_PLIST_PATH, EXTRACTED_ENTITLEMENTS_PATH, MAC_APP_PATH, WINDOWS_EXE_PATH } = runtime.constants;
    const { state } = runtime;

    function setOldYMHashOverride(value) {
        state.oldYMHashOverride = value;
    }

    function rememberCurrentAsarHash(archivePath = DIRECT_DIST_PATH) {
        state.oldYMHash = calcASARHeaderHash(archivePath).hash;
        return state.oldYMHash;
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

    function writeWindowsExe(exePath, contents) {
        const temporaryPath = `${exePath}.${crypto.randomUUID()}.tmp`;
        try {
            fs.writeFileSync(temporaryPath, contents, { flag: 'wx' });
            fs.renameSync(temporaryPath, exePath);
        } finally {
            fs.rmSync(temporaryPath, { force: true });
        }
    }

    function updateIntegrityHashInExeRcData(exePath, newHash) {
        const rawBuf = fs.readFileSync(exePath);
        const marker = Buffer.from('"file":"resources\\\\app.asar"', 'utf8');
        const markerIdx = rawBuf.indexOf(marker);
        if (markerIdx < 0) throw new Error('Маркер RCDATA integrity JSON не найден');

        const startIdx = rawBuf.lastIndexOf(Buffer.from('[', 'utf8'), markerIdx);
        if (startIdx < 0) throw new Error('Начало массива RCDATA integrity JSON не найдено');

        const endIdx = rawBuf.indexOf(Buffer.from(']', 'utf8'), markerIdx + marker.length);
        if (endIdx < 0) throw new Error('Конец массива RCDATA integrity JSON не найден');

        const jsonBuf = rawBuf.subarray(startIdx, endIdx + 1);
        const arr = JSON.parse(jsonBuf.toString('utf8'));
        if (!Array.isArray(arr)) throw new Error('RCDATA integrity JSON не является массивом');

        const entry = arr.find((item) => item && typeof item.file === 'string' && item.file.replace(/\\\\/g, '\\').toLowerCase() === 'resources\\app.asar');
        if (!entry) throw new Error('Запись resources\\app.asar не найдена в RCDATA integrity JSON');

        entry.value = newHash;
        const newJson = JSON.stringify(arr);
        if (Buffer.byteLength(newJson, 'utf8') !== jsonBuf.length) {
            throw new Error('Длина RCDATA integrity JSON не совпадает');
        }

        Buffer.from(newJson, 'utf8').copy(rawBuf, startIdx);
        writeWindowsExe(exePath, rawBuf);
    }

    function updateIntegrityHashInExeLegacy(exePath, oldHexStr, newHexStr) {
        const oldBuf = Buffer.from(oldHexStr, 'ascii');
        const newBuf = Buffer.from(newHexStr, 'ascii');
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

        if (count === 0) return 0;
        writeWindowsExe(exePath, fileBuf);
        return count;
    }

    async function bypassWinAsarIntegrity(appPath) {
        console.log(`Подготовка к замене хеша`);

        try {
            const exePath = appPath;

            if (!fs.existsSync(exePath)) {
                console.log(`Файл не найден по пути: ${exePath}`);
                return false;
            }

            const oldHexStr = state.oldYMHashOverride ?? state.oldYMHash;
            const newHexStr = calcASARHeaderHash(DIRECT_DIST_PATH).hash;

            try {
                updateIntegrityHashInExeRcData(exePath, newHexStr);
                console.log('Хеш заменён методом RCDATA JSON.');
                return true;
            } catch (error) {
                console.log(`Метод RCDATA JSON завершился ошибкой, переключаюсь на старый способ: ${error.message}`);
            }

            if (typeof oldHexStr !== 'string' || oldHexStr.length === 0) {
                console.log('Переход на старый способ пропущен: отсутствует старый хеш.');
                return false;
            }

            console.log(`Хеши: ${oldHexStr} ${newHexStr} ${oldHexStr.length} ${newHexStr.length}`);

            if (oldHexStr.length !== newHexStr.length) {
                console.log('Длины старого и нового хеша не совпадают');
                return false;
            }

            if (oldHexStr === newHexStr) {
                console.log('Старый и новый хеши совпадают, изменения не требуется');
                return true;
            }

            const count = updateIntegrityHashInExeLegacy(exePath, oldHexStr, newHexStr);
            if (count === 0) {
                console.log('Шаблон не найден, изменений не внесено.');
                return false;
            }

            console.log(`Старый способ завершён, заменено вхождений: ${count}.`);
            return true;
        } catch (error) {
            console.log('Ошибка: ' + error.message);
            return false;
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

        let originalInfoPlist;
        try {
            if (checkIfElectronAsarIntegrityIsUsed()) {
                console.log('Asar integrity включено. Обход');
                const newHash = calcASARHeaderHash(DIRECT_DIST_PATH).hash;
                console.log(`Хеш модифицированного asar: ${newHash}`);
                console.log('Подменяю хеш в Info.plist');

                originalInfoPlist = fs.readFileSync(INFO_PLIST_PATH, 'utf8');
                const plistData = plist.parse(originalInfoPlist);
                plistData.ElectronAsarIntegrity['Resources/app.asar'].hash = newHash;
                fs.writeFileSync(INFO_PLIST_PATH, plist.build(plistData));
            }

            console.log('Подменяю подпись');
            dumpEntitlements(appPath);

            execSync(`codesign --force --entitlements ${EXTRACTED_ENTITLEMENTS_PATH} --sign - '${appPath}'`);
            console.log('Обход asar integrity завершён');
            return true;
        } catch (error) {
            if (originalInfoPlist !== undefined) {
                fs.writeFileSync(INFO_PLIST_PATH, originalInfoPlist);
            }
            console.error('Не удалось обойти asar integrity', error);
            return false;
        } finally {
            try {
                fs.rmSync(EXTRACTED_ENTITLEMENTS_PATH, { force: true });
            } catch (error) {
                console.error('Не удалось удалить временный файл entitlements', error);
            }
        }
    }

    async function bypassAsarIntegrity(dest = undefined) {
        if (process.platform === 'darwin') {
            return bypassDarwinAsarIntegrity(dest ?? MAC_APP_PATH);
        }
        if (process.platform === 'win32') {
            return bypassWinAsarIntegrity(dest ?? WINDOWS_EXE_PATH);
        }
        return false;
    }

    return {
        setOldYMHashOverride,
        rememberCurrentAsarHash,
        calcASARHeaderHash,
        dumpEntitlements,
        checkIfElectronAsarIntegrityIsUsed,
        checkIfSystemIntegrityProtectionEnabled,
        bypassWinAsarIntegrity,
        bypassDarwinAsarIntegrity,
        bypassAsarIntegrity,
    };
}

module.exports = {
    createIntegrityUtils,
};
