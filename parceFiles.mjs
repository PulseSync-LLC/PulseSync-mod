import fs from 'fs/promises';
import path from 'path';
import readline from 'readline';

async function prompt(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function copyFiles(version, fileIds) {
    const sourceDir = path.join('asar', version, 'app', '_next', 'static', 'chunks');
    const targetDir = path.join('patch', version, 'app', '_next', 'static', 'chunks');

    try {
        await fs.mkdir(targetDir, { recursive: true });

        const files = await fs.readdir(sourceDir);

        const filesToCopy = files.filter((file) => fileIds.some((id) => file.startsWith(id)));

        for (const file of filesToCopy) {
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, file);

            await fs.copyFile(sourcePath, targetPath);
            console.log(`Copied: ${file} -> ${targetPath}`);
        }

        console.log('Все файлы успешно скопированы.');
    } catch (error) {
        console.error('Ошибка при копировании файлов:', error);
    }
}

(async () => {
    try {
        const version = await prompt('Введите версию: ');
        const fileIdsInput = await prompt('Введите ID файлов через запятую: ');
        const fileIds = fileIdsInput.split(',').map((id) => id.trim());

        if (!version || fileIds.length === 0) {
            console.error('Ошибка: версия или список ID файлов не указаны.');
            process.exit(1);
        }

        await copyFiles(version, fileIds);
    } catch (error) {
        console.error('Не удалось выполнить скрипт:', error);
    }
})();
