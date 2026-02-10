require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const asar = require('@electron/asar');
const readline = require('readline');
const axios = require('axios');
const FormData = require('form-data');
const fsp = fs.promises;

// Функция для ввода из консоли
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) =>
        rl.question(query, (ans) => {
            rl.close();
            resolve(ans.trim());
        }),
    );
}

// Рекурсивное копирование директории
async function copyDirectory(src, dest) {
    await fsp.mkdir(dest, { recursive: true });
    const entries = await fsp.readdir(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            await copyDirectory(srcPath, destPath);
        } else if (entry.isFile()) {
            await fsp.copyFile(srcPath, destPath);
        }
    }
}

// Рекурсивная минификация файлов из srcDir в destDir
async function processDirectory(srcDir, destDir) {
    await fsp.mkdir(destDir, { recursive: true });
    const items = await fsp.readdir(srcDir);
    for (const item of items) {
        const srcPath = path.join(srcDir, item);
        const destPath = path.join(destDir, item);
        const stat = await fsp.stat(srcPath);
        if (stat.isFile() && srcPath.endsWith('.js') && !srcPath.includes('node_modules')) {
            try {
                const code = await fsp.readFile(srcPath, 'utf8');
                const result = await minify(code);
                if (result.error) {
                    console.error(`Ошибка минификации ${srcPath}:`, result.error);
                    continue;
                }
                await fsp.writeFile(destPath, result.code, 'utf8');
                console.log(`Минифицирован: ${srcPath}`);
            } catch (err) {
                console.error(`Ошибка при минификации ${srcPath}:`, err);
            }
        } else if (stat.isDirectory()) {
            await processDirectory(srcPath, destPath);
        }
    }
}

(async () => {
    // Запрос режима работы: 0 - prod, 1 - dev
    const modeInput = await askQuestion('Выберите режим (0 - prod, 1 - dev): ');
    // По условию: dev -> копирование в LOCALAPPDATA, prod -> build
    const mode = modeInput === '1' ? 'dev' : 'prod';
    console.log(`Режим: ${mode}`);

    // Определяем версию — имя первой подпапки в папке patch
    const patchDir = path.join(__dirname, 'patch');
    let versionFolder = null;
    if (fs.existsSync(patchDir)) {
        const items = fs.readdirSync(patchDir);
        for (const item of items) {
            const fullPath = path.join(patchDir, item);
            if (fs.statSync(fullPath).isDirectory()) {
                versionFolder = item;
                break;
            }
        }
    }
    if (!versionFolder) {
        console.error('В папке patch не найдена ни одна подпапка с версией.');
        process.exit(1);
    }
    console.log(`Найдена версия: ${versionFolder}`);

    // Шаг 1: Копирование содержимого patch/<versionFolder> во временную папку temp_build/<versionFolder>
    const tempBuildDir = path.join(__dirname, 'temp_build', versionFolder);
    console.log(`Копирование содержимого ${path.join(patchDir, versionFolder)} в ${tempBuildDir}...`);
    try {
        await copyDirectory(path.join(patchDir, versionFolder), tempBuildDir);
        console.log('Копирование завершено.');
    } catch (err) {
        console.error('Ошибка копирования:', err);
        process.exit(1);
    }

    // Шаг 2: Если режим prod, выполняется минификация файлов из temp_build/<versionFolder>
    if (mode === 'prod') {
        const chunksSource = path.join(tempBuildDir);
        if (fs.existsSync(chunksSource)) {
            console.log(`Минификация файлов из ${chunksSource}...`);
            try {
                await processDirectory(chunksSource, chunksSource);
                console.log('Минификация файлов завершена.');
            } catch (err) {
                console.error('Ошибка минификации файлов:', err);
                process.exit(1);
            }
        } else {
            console.warn(`Папка ${chunksSource} не найдена. Пропускаем минификацию.`);
        }
    } else {
        console.log('Режим dev – пропускаем минификацию.');
    }

    // Шаг 3: Упаковка временной папки temp_build/<versionFolder> в файл app.asar

    const asarOutput = path.join(__dirname, 'app.asar');
    console.log(`Упаковка содержимого ${tempBuildDir} в ${asarOutput}...`);
    try {
        // В модуле @electron/asar функция createPackage вызывается с двумя аргументами.
        const buildPath = mode === 'dev' ? path.join(patchDir, versionFolder) : tempBuildDir;
        await asar.createPackage(buildPath, asarOutput);
        console.log(`Упаковка завершена. Файл: ${asarOutput}`);
    } catch (err) {
        console.error('Ошибка упаковки:', err);
        process.exit(1);
    }

    // Шаг 4: Копирование app.asar в целевую папку
    let targetDir;
    if (mode === 'dev') {
        const localAppData = process.env.LOCALAPPDATA;
        if (!localAppData) {
            console.error('Переменная LOCALAPPDATA не определена.');
            process.exit(1);
        }
        targetDir = path.join(localAppData, 'Programs', 'YandexMusic', 'resources');
    } else {
        // prod
        targetDir = path.join(__dirname, 'build');
    }
    console.log(`Целевая папка для копирования: ${targetDir}`);
    fs.mkdirSync(targetDir, { recursive: true });
    const targetPath = path.join(targetDir, 'app.asar');
    fs.copyFileSync(asarOutput, targetPath);
    console.log(`Файл app.asar скопирован в: ${targetPath}`);

    // Дополнительный шаг: если режим prod, загружаем app.asar на сервер
    if (mode === 'prod') {
        try {
            const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
            const versionInfo = packageJson.version;
            const serverUrl = 'https://ru-node-1.pulsesync.dev/cdn/uploadAsar';
            const formData = new FormData();
            formData.append('file', fs.createReadStream(targetPath));
            formData.append('modVersion', versionInfo);
            formData.append('version', versionFolder);

            const headers = {
                ...formData.getHeaders(),
                Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
            };

            const response = await axios.post(serverUrl, formData, { headers });

            if (response.data.ok) {
                console.log('app.asar uploaded successfully to the server');
            } else {
                console.error('Failed to upload app.asar to the server:', response.data.message);
            }
        } catch (error) {
            console.error('Error uploading app.asar to the server:', error);
        }
    }
})();
