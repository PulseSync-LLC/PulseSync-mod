const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const { isDeepStrictEqual } = require('node:util');

const PACKAGE_BUILD_FIELDS = ['version', 'dependencies', 'devDependencies', 'optionalDependencies', 'resolutions', 'engines', 'packageManager'];
const BUILD_CONFIG_FILES = new Set(['yarn.lock', '.npmrc', '.yarnrc', '.yarnrc.yml', '.gitattributes']);

function shouldBuildBranch(changedFiles, previousPackage, currentPackage) {
    if (changedFiles.some((file) => /^(src|webModules|native)\//.test(file) || BUILD_CONFIG_FILES.has(file))) return true;
    if (!changedFiles.includes('package.json')) return false;
    if (!previousPackage || !currentPackage) return true;
    return PACKAGE_BUILD_FIELDS.some((field) => !isDeepStrictEqual(previousPackage[field], currentPackage[field]));
}

function resolveBranchBuild({ eventName, beforeSha, git = (args) => execFileSync('git', args, { encoding: 'utf8' }) }) {
    if (eventName === 'workflow_dispatch' || !/^[a-f0-9]{40,64}$/i.test(beforeSha ?? '') || /^0+$/.test(beforeSha)) return true;
    try {
        const changedFiles = git(['diff', '--name-only', '-z', beforeSha, 'HEAD', '--']).split('\0').filter(Boolean);
        if (!changedFiles.includes('package.json')) return shouldBuildBranch(changedFiles);
        return shouldBuildBranch(changedFiles, JSON.parse(git(['show', `${beforeSha}:package.json`])), JSON.parse(git(['show', 'HEAD:package.json'])));
    } catch (error) {
        console.warn(`Cannot classify changes, enabling development build: ${error.message}`);
        return true;
    }
}

if (require.main === module) {
    const build = resolveBranchBuild({ eventName: process.env.GITHUB_EVENT_NAME, beforeSha: process.env.BEFORE_SHA });
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `build=${build}\n`);
    console.log(`Development artifact build: ${build ? 'enabled' : 'skipped'}`);
}

module.exports = { shouldBuildBranch, resolveBranchBuild };
