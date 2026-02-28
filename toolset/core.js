const { createRuntime } = require('./utils/runtime.js');
const { createPackageUtils } = require('./utils/packageUtils.js');
const { createExtractUtils } = require('./utils/extractUtils.js');
const { createAppControlUtils } = require('./utils/appControlUtils.js');
const { createIntegrityUtils } = require('./utils/integrityUtils.js');
const { createPatchUtils } = require('./utils/patchUtils.js');
const { createBuildUtils } = require('./utils/buildUtils.js');
const { createReleaseUtils } = require('./utils/releaseUtils.js');

async function createToolsetCore() {
    const runtime = await createRuntime();

    const packageUtils = createPackageUtils(runtime);
    const extractUtils = createExtractUtils(runtime);
    const appControlUtils = createAppControlUtils(runtime);
    const integrityUtils = createIntegrityUtils(runtime);
    const patchUtils = createPatchUtils(runtime);
    const buildUtils = createBuildUtils(runtime, {
        packageUtils,
        extractUtils,
        integrityUtils,
        appControlUtils,
    });
    const releaseUtils = createReleaseUtils(runtime, {
        packageUtils,
        extractUtils,
    });

    return {
        runtime,
        constants: runtime.constants,
        setOldYMHashOverride: integrityUtils.setOldYMHashOverride,
        packageUtils,
        extractUtils,
        appControlUtils,
        integrityUtils,
        patchUtils,
        buildUtils,
        releaseUtils,
    };
}

module.exports = {
    createToolsetCore,
};
