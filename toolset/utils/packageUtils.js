function createPackageUtils(runtime) {
    const { fs, fsp, path } = runtime.deps;
    const { REPO_ROOT, SRC_PATH } = runtime.constants;

    function getModVersion() {
        const packageJson = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'package.json'), 'utf8'));
        return packageJson.version;
    }

    async function syncModVersion(src = SRC_PATH) {
        const packageJsonPath = path.join(src, '/package.json');
        const packageJson = JSON.parse(await fsp.readFile(packageJsonPath, 'utf8'));
        const oldVersion = packageJson.modification?.version;
        const newVersion = getModVersion();

        if (!packageJson.modification) {
            throw new Error(`В ${packageJsonPath} отсутствует секция modification`);
        }

        if (oldVersion === newVersion) {
            return { changed: false, oldVersion, newVersion };
        }

        packageJson.modification.version = newVersion;
        await fsp.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4), 'utf8');

        return { changed: true, oldVersion, newVersion };
    }

    async function modifyPackage({ src = SRC_PATH, version = undefined, buildInfo = undefined, modVersion = undefined, appConfig = undefined }) {
        const packageJsonPath = path.join(src, '/package.json');
        const packageJson = JSON.parse(await fsp.readFile(packageJsonPath, 'utf8'));
        const oldVersion = packageJson.version;

        if (version) packageJson.version = version;
        if (buildInfo) packageJson.buildInfo = buildInfo;
        if (modVersion) packageJson.modification.version = modVersion;
        if (appConfig) packageJson.appConfig = { ...packageJson.appConfig, ...appConfig };

        await fsp.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4), 'utf8');

        return { oldVersion, newVersion: version };
    }

    return {
        getModVersion,
        modifyPackage,
        syncModVersion,
    };
}

module.exports = {
    createPackageUtils,
};
