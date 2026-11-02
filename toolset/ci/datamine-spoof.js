const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const semver = require('semver');
const { createToolsetCore } = require('../core.js');

const root = path.resolve(__dirname, '../..');
const stableVersion = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
const requiredSnapshots = ['simpleRoutes.json', 'simplePages.json', 'experiments.json', 'formatted_ru.json', 'icons.json', 'mobxConstructs.json', 'cssClasses.json'];

function runNode(args) {
    const result = spawnSync(process.execPath, args, { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
    if (result.error) throw result.error;
    if (result.status !== 0 || result.stderr.includes('❌')) throw new Error(`Dataminer command failed: ${args[0]}`);
    return result.stdout;
}

function validateSource(source, version) {
    if (!source || JSON.parse(fs.readFileSync(path.join(source, 'package.json'), 'utf8')).version !== version) {
        throw new Error(`Dataminer source does not match Yandex Music ${version}.`);
    }
}

async function main() {
    const oldVersion = process.env.DATAMINER_OLD_VERSION;
    const newVersion = process.env.DATAMINER_NEW_VERSION;
    if (![oldVersion, newVersion].every((version) => stableVersion.test(version ?? '') && semver.valid(version)) || !semver.gt(newVersion, oldVersion)) {
        throw new Error('Dataminer requires two increasing stable Yandex Music versions.');
    }
    if (!process.env.DATAMINER_SOURCE) throw new Error('Missing extracted Yandex Music source from the spoof step.');
    const newSource = path.resolve(root, process.env.DATAMINER_SOURCE);
    validateSource(newSource, newVersion);

    const core = await createToolsetCore();
    const oldSource = await core.extractUtils.downloadAndExtractYm({ versionOverride: oldVersion });
    validateSource(oldSource, oldVersion);

    for (const [version, source] of [
        [oldVersion, oldSource],
        [newVersion, newSource],
    ]) {
        const destination = path.join(root, 'extracted', `${version}@pretty`);
        await core.buildUtils.prettifySource({ srcPath: source, destDir: destination });
        const output = path.join(root, 'dataminer/output', version.replaceAll('.', '_'));
        runNode(['dataminer/dataminer.js', destination, output]);
        for (const file of requiredSnapshots) JSON.parse(fs.readFileSync(path.join(output, file), 'utf8'));
    }

    const args = ['dataminer/diffCalculator.js', 'diff', `--old=${oldVersion}`, `--new=${newVersion}`];
    if (process.env.DISCORD_DATAMINER_WEBHOOK_URL) args.push('--send');
    else console.warn('::warning::DISCORD_DATAMINER_WEBHOOK_URL is not configured; saving the diff without sending to Discord.');
    const report = runNode(args);
    fs.writeFileSync(path.join(root, 'dataminer/output/diff.txt'), report, 'utf8');
}

main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
});
