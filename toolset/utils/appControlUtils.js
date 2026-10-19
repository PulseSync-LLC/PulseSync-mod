function createAppControlUtils(runtime) {
    const { execAsync, spawn } = runtime.deps;

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
        }

        if (process.platform === 'linux') {
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
        }

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
                console.log(`Отправлен сигнал завершения процессу Яндекс Музыки с PID ${proc.pid}.`);
            } catch (error) {
                if (error.code !== 'ESRCH') {
                    throw new Error(`Не удалось завершить процесс Яндекс Музыки с PID ${proc.pid}: ${error.message}`, { cause: error });
                }
            }
        }

        console.log('Ожидание завершения процессов Яндекс Музыки...');
        const deadline = Date.now() + 10000;
        let remainingProcesses = yandexProcesses;
        while (remainingProcesses.length) {
            remainingProcesses = remainingProcesses.filter(({ pid }) => {
                try {
                    process.kill(pid, 0);
                    return true;
                } catch (error) {
                    if (error.code === 'ESRCH') return false;
                    throw new Error(`Не удалось проверить завершение процесса Яндекс Музыки с PID ${pid}: ${error.message}`, { cause: error });
                }
            });
            if (!remainingProcesses.length) break;
            if (Date.now() >= deadline) {
                throw new Error(`Яндекс Музыка не закрылась за 10 секунд. Остались процессы: ${remainingProcesses.map(({ pid }) => pid).join(', ')}`);
            }
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        console.log('Яндекс Музыка закрыта.');

        return true;
    }

    async function openExternalDetached(url) {
        let command;
        let args;

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

        const child = spawn(command, args, { detached: true, stdio: 'ignore' });
        child.unref();
    }

    async function launchYandexMusic() {
        return openExternalDetached('yandexmusic://');
    }

    return {
        getYandexMusicProcesses,
        isYandexMusicRunning,
        closeYandexMusic,
        launchYandexMusic,
        openExternalDetached,
    };
}

module.exports = {
    createAppControlUtils,
};
