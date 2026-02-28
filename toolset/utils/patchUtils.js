function createPatchUtils(runtime) {
    const { fsp, path } = runtime.deps;

    async function replaceInFilesRecursively(dir, rules) {
        const entries = await fsp.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                await replaceInFilesRecursively(fullPath, rules);
            } else if (entry.isFile()) {
                const content = await fsp.readFile(fullPath, 'utf8');
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
            let indexJs = await fsp.readFile(path.join(extractedPath, '/index.js'), 'utf8');
            indexJs = indexJs.replace(/const\s?webPreferences\s?=\s?\{/i, 'const webPreferences = { devTools: true,');
            await fsp.writeFile(path.join(extractedPath, '/index.js'), indexJs, 'utf8');
        }

        if (options.unlockDevPanel) {
            const rules = [
                { regex: /e\.set\(c.qV, ?![10]\), ?e\.set\(c.yc, ?![10]\), ?e\.set\(c.W4, ?![10]\)/g, replacement: 'e.set(c.qV,!0),e.set(c.yc,!0),e.set(c.W4,!0)' },
            ];

            console.log('Применяю regex патчи', extractedPath, rules);
            await replaceInFilesRecursively(path.join(extractedPath, '/app/'), rules);
            console.log('Regex патчи применены', extractedPath);
        }
    }

    return {
        replaceInFilesRecursively,
        patchExtractedBuild,
    };
}

module.exports = {
    createPatchUtils,
};
