const { createRuntime } = require('./utils/runtime.js');
const { createPackageUtils } = require('./utils/packageUtils.js');
const { createExtractUtils } = require('./utils/extractUtils.js');
const { createAppControlUtils } = require('./utils/appControlUtils.js');
const { createIntegrityUtils } = require('./utils/integrityUtils.js');
const { createPatchUtils } = require('./utils/patchUtils.js');
const { createBuildUtils } = require('./utils/buildUtils.js');
const { createReleaseUtils } = require('./utils/releaseUtils.js');
const { createMigrationUtils } = require('./utils/migrationUtils.js');
const { createModernizeUtils } = require('./utils/modernizeUtils.js');
const { createZstdUtils } = require('./utils/zstdUtils.js');

async function createToolsetCore() {
    const runtime = await createRuntime();

    const packageUtils = createPackageUtils(runtime);
    const extractUtils = createExtractUtils(runtime);
    const appControlUtils = createAppControlUtils(runtime);
    const integrityUtils = createIntegrityUtils(runtime);
    const patchUtils = createPatchUtils(runtime);
    const modernizeUtils = createModernizeUtils(runtime);
    const zstdUtils = createZstdUtils(runtime);
    const buildUtils = createBuildUtils(runtime, {
        packageUtils,
        extractUtils,
        integrityUtils,
        appControlUtils,
        modernizeUtils,
        zstdUtils,
    });
    const releaseUtils = createReleaseUtils(runtime, {
        packageUtils,
        extractUtils,
        zstdUtils,
    });
    const migrationUtils = createMigrationUtils(runtime);

    return {
        runtime,
        constants: runtime.constants,
        setOldYMHashOverride: integrityUtils.setOldYMHashOverride,
        packageUtils,
        extractUtils,
        appControlUtils,
        integrityUtils,
        patchUtils,
        modernizeUtils,
        zstdUtils,
        buildUtils,
        releaseUtils,
        migrationUtils,
    };
}

module.exports = {
    createToolsetCore,
};
