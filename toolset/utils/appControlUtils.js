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
                console.log(`Процесс Яндекс Музыки с PID ${proc.pid} был завершён.`);
            } catch (error) {
                console.error(`Не удалось завершить процесс ${proc.pid}:`, error);
            }
        }

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
