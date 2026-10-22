const fs = require('node:fs');
const path = require('node:path');
const { execFileSync, spawnSync } = require('node:child_process');
const semver = require('semver');
const { createToolsetCore } = require('../core.js');

const root = path.resolve(__dirname, '../..');
const stableVersion = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

function git(...args) {
    return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] }).trim();
}

function readPackage(file) {
    return JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
}

function output(values) {
    for (const [key, value] of Object.entries(values)) {
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
    }
}

async function main() {
    const expectedVersion = process.env.EXPECTED_YM_VERSION || '';
    if (
        process.env.YM_RELEASE_CHANNEL !== 'stable' ||
        (expectedVersion && !stableVersion.test(expectedVersion)) ||
        (process.env.GITHUB_EVENT_NAME === 'repository_dispatch' && !expectedVersion)
    ) {
        throw new Error('Only stable Yandex Music versions in MAJOR.MINOR.PATCH format are supported.');
    }

    git('fetch', 'origin', '--prune', '--tags');
    const devBase = git('rev-parse', 'origin/dev');
    const mainBase = git('rev-parse', 'origin/main');
    git('config', 'user.name', 'github-actions[bot]');
    git('config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com');
    git('checkout', '-B', 'spoof-work', devBase);
    git('rebase', mainBase);

    const core = await createToolsetCore();
    const latest = await core.extractUtils.fetchLatestYmYaml();
    const targetVersion = expectedVersion || latest?.version;
    if (!stableVersion.test(targetVersion ?? '') || !semver.valid(targetVersion)) {
        throw new Error('The stable manifest did not provide a valid version.');
    }

    const previousVersion = readPackage('src/package.json').version;
    if (!stableVersion.test(previousVersion) || !semver.valid(previousVersion)) {
        throw new Error('The source Yandex Music version is invalid.');
    }

    if (semver.lte(targetVersion, previousVersion)) {
        // A duplicate event can resume a prepared release without another version bump.
        const tag = `v${readPackage('package.json').version}`;
        const existing = spawnSync('git', ['rev-parse', '--verify', `refs/tags/${tag}^{commit}`], { cwd: root, encoding: 'utf8' });
        if (targetVersion === previousVersion && existing.status === 0) {
            const ref = existing.stdout.trim();
            git('merge-base', '--is-ancestor', ref, mainBase);
            const taggedPackage = JSON.parse(git('show', `${ref}:src/package.json`));
            if (taggedPackage.version === targetVersion) {
                const response = await fetch(`${process.env.GITHUB_API_URL}/repos/${process.env.GITHUB_REPOSITORY}/releases/tags/${tag}`, {
                    headers: {
                        Accept: 'application/vnd.github+json',
                        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                        'X-GitHub-Api-Version': '2026-03-10',
                    },
                });
                if (!response.ok && response.status !== 404) throw new Error(`Failed to check existing release: ${response.status}`);
                if (response.ok && !(await response.json()).draft) {
                    console.log(`Release ${tag} is already published; skipping duplicate event.`);
                    output({ publish: 'false' });
                    return;
                }
                output({ publish: 'true', ref, release_tag: tag });
                return;
            }
        }
        console.log(`Yandex Music ${targetVersion} is already covered by ${previousVersion}; skipping.`);
        output({ publish: 'false' });
        return;
    }

    if (!stableVersion.test(latest?.version ?? '') || !semver.valid(latest.version)) {
        throw new Error('The stable manifest did not provide a valid version.');
    }
    if (semver.gt(latest.version, targetVersion)) {
        throw new Error(`Stable manifest is ${latest.version}, newer than spoof target ${targetVersion}; refusing to downgrade.`);
    }
    if (!(latest.files?.[0]?.sha512 ?? latest.sha512)) {
        throw new Error('Stable manifest must contain an installer SHA512.');
    }

    console.log(`Preparing spoof ${targetVersion} using stable Yandex Music ${latest.version}.`);
    const extracted = await core.extractUtils.downloadAndExtractYm({ expectedVersion: latest.version });
    if (!extracted || JSON.parse(fs.readFileSync(path.join(extracted, 'package.json'), 'utf8')).version !== latest.version) {
        throw new Error('Downloaded Yandex Music does not match the stable manifest version.');
    }
    await core.buildUtils.spoof('extracted');
    const sourcePackage = readPackage('src/package.json');
    if (sourcePackage.version !== latest.version || !sourcePackage.modification) {
        throw new Error('Spoofed source does not match the stable manifest version.');
    }
    sourcePackage.version = targetVersion;

    const modPackage = readPackage('package.json');
    const mainPackage = JSON.parse(git('show', `${mainBase}:package.json`));
    const baseVersion = semver.gt(mainPackage.version, modPackage.version) ? mainPackage.version : modPackage.version;
    modPackage.version = semver.inc(baseVersion, 'patch');
    if (!modPackage.version || !stableVersion.test(modPackage.version)) throw new Error('Invalid mod release version.');
    sourcePackage.modification.version = modPackage.version;
    fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify(modPackage, null, 4), 'utf8');
    fs.writeFileSync(path.join(root, 'src/package.json'), JSON.stringify(sourcePackage, null, 4), 'utf8');
    fs.writeFileSync(path.join(root, 'PATCHNOTES.md'), `# Что нового\n- Версия спуфнута c ${previousVersion} до ${targetVersion}\n`, 'utf8');

    const tag = `v${modPackage.version}`;
    git('add', '--', 'package.json', 'src/package.json', 'PATCHNOTES.md');
    git('commit', '-m', `chore(spoof): update Yandex Music to ${targetVersion}`);
    const ref = git('rev-parse', 'HEAD');
    git('tag', tag, ref);
    git(
        'push',
        '--atomic',
        `--force-with-lease=refs/heads/dev:${devBase}`,
        `--force-with-lease=refs/heads/main:${mainBase}`,
        'origin',
        'HEAD:refs/heads/dev',
        'HEAD:refs/heads/main',
        `refs/tags/${tag}`,
    );
    output({ publish: 'true', ref, release_tag: tag });
}

main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
});
