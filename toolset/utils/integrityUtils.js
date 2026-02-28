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

    async function bypassWinAsarIntegrity(appPath) {
        console.log(`Подготовка к замене хеша`);

        try {
            const exePath = appPath;

            if (!fs.existsSync(exePath)) {
                console.log(`Файл не найден по пути: ${exePath}`);
                return;
            }

            const oldHexStr = state.oldYMHashOverride ?? state.oldYMHash;
            const newHexStr = calcASARHeaderHash(DIRECT_DIST_PATH).hash;

            console.log(`Хеши: ${oldHexStr} ${newHexStr} ${oldHexStr.length} ${newHexStr.length}`);

            if (oldHexStr.length !== newHexStr.length) {
                console.log('Длины старого и нового хеша не совпадают');
                return;
            }

            if (oldHexStr === newHexStr) {
                console.log('Старый и новый хеши совпадают, изменения не требуется');
                return;
            }

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

            if (count === 0) {
                console.log('Шаблон не найден, изменений не внесено.');
                return;
            }

            fs.writeFileSync(exePath, fileBuf);
            console.log(`Успешно заменено вхождений: ${count}.`);
        } catch (error) {
            console.log('Ошибка: ' + error.message);
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
            if (fs.existsSync(EXTRACTED_ENTITLEMENTS_PATH)) {
                fs.unlinkSync(EXTRACTED_ENTITLEMENTS_PATH);
            }
            console.log('Кеш очищен');
            console.log('Обход asar integrity завершён');
        } catch (error) {
            console.error('Не удалось обойти asar integrity', error);
            if (fs.existsSync(EXTRACTED_ENTITLEMENTS_PATH)) {
                fs.unlinkSync(EXTRACTED_ENTITLEMENTS_PATH);
            }
            console.log('Кеш очищен');
        }
    }

    async function bypassAsarIntegrity(dest = undefined) {
        if (process.platform === 'darwin') {
            await bypassDarwinAsarIntegrity(dest ?? MAC_APP_PATH);
        }
        if (process.platform === 'win32') {
            await bypassWinAsarIntegrity(dest ?? WINDOWS_EXE_PATH);
        }
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
