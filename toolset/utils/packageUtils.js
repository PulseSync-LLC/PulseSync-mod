function createPackageUtils(runtime) {
    const { fsp, path } = runtime.deps;
    const { SRC_PATH } = runtime.constants;

    function getModVersion() {
        return require(path.join(SRC_PATH, '/main/config.js')).config.modification.version;
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
    };
}

module.exports = {
    createPackageUtils,
};
