const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');

const asar = require('@electron/asar');
const sevenZip = require('7zip-min');

const { createReleaseTask } = require('../utils/commandTasks.js');
const { createBuildUtils } = require('../utils/buildUtils.js');
const { resolveBranchBuild, shouldBuildBranch } = require('../utils/branchBuildChanges.js');
const { createReleaseUtils } = require('../utils/releaseUtils.js');
const { createZstdUtils } = require('../utils/zstdUtils.js');

const sha256 = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');

async function readStream(stream) {
    const chunks = [];
    await new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        stream.on('end', resolve);
        stream.on('error', reject);
        stream.resume();
    });
    return Buffer.concat(chunks);
}

async function fixture(t) {
    const tempRoot = path.resolve(os.tmpdir());
    const root = fs.mkdtempSync(path.join(tempRoot, 'pulsesync-release-test-'));
    t.after(() => {
        assert.equal(path.dirname(root), tempRoot);
        assert(path.basename(root).startsWith('pulsesync-release-test-'));
        fs.rmSync(root, { recursive: true, force: true });
    });
    for (const method of ['log', 'warn', 'error']) t.mock.method(console, method, () => {});

    const sourceDir = path.join(root, 'source');
    const nativePath = path.join(sourceDir, 'node_modules', 'sharp', 'binding.node');
    fs.mkdirSync(path.dirname(nativePath), { recursive: true });
    fs.writeFileSync(nativePath, 'fixture native binary');
    fs.writeFileSync(path.join(sourceDir, 'package.json'), JSON.stringify({ version: '5.0.0', modification: { version: '1.2.3' } }));
    const asarPath = path.join(root, 'app.asar');
    await createBuildUtils({ deps: { asar, fs, fsp: fs.promises, path }, constants: {} }, {}).archiveAsar(sourceDir, asarPath);
    assert.equal(asar.statFile(asarPath, path.join('node_modules', 'sharp', 'binding.node')).unpacked, true);
    const notesPath = path.join(root, 'PATCHNOTES.md');
    fs.writeFileSync(notesPath, '# Release fixture');

    const state = { events: [], release: null, assets: [], failAt: null, completed: null, parts: [], nextAssetId: 1 };
    const repos = {
        async getReleaseByTag() {
            state.events.push('github:lookup');
            if (state.failAt === 'github:lookup') throw Object.assign(new Error('lookup failed'), { status: 403 });
            if (!state.release) throw Object.assign(new Error('missing release'), { status: 404 });
            return { data: { ...state.release } };
        },
        async createRelease(input) {
            assert.equal(input.draft, true);
            state.events.push('github:create-draft');
            state.release = { id: 7, ...input };
            return { data: { ...state.release } };
        },
        async updateRelease(input) {
            const event = input.draft === false ? 'github:publish' : 'github:update-draft';
            assert(state.release.draft, 'Published release must never be mutated');
            state.events.push(event);
            if (state.failAt === event) throw new Error(`${event} failed`);
            Object.assign(state.release, input);
            return { data: { ...state.release } };
        },
        async listReleaseAssets() {
            return { data: state.assets.map((asset) => ({ ...asset })) };
        },
        async deleteReleaseAsset({ asset_id }) {
            assert(state.release.draft, 'Published assets must never be deleted');
            state.events.push('github:delete-asset');
            state.assets = state.assets.filter((asset) => asset.id !== asset_id);
        },
        async uploadReleaseAsset({ name, data }) {
            assert(state.release.draft, 'Uploads must remain in a draft');
            state.events.push(`github:upload:${name}`);
            if (state.failAt === `github:upload:${name}`) throw new Error('asset upload failed');
            const asset = { id: state.nextAssetId++, name, state: 'uploaded', digest: `sha256:${sha256(data)}`, data: Buffer.from(data) };
            state.assets.push(asset);
            return { data: asset };
        },
    };
    const axios = async ({ url, data }) => {
        const stage = url.split('/').pop();
        const event = `backend:${stage}`;
        state.events.push(event);
        if (state.failAt === event) throw new Error(`${event} failed`);
        if (stage === 'init') {
            state.parts = [];
            return { data: { ok: true, key: 'artifact', uploadId: 'upload-1', partSize: 64 } };
        }
        if (stage === 'part-url') return { data: { ok: true, signedUrl: 'https://upload.invalid/part' } };
        if (stage === 'abort') return { data: { ok: true } };
        assert.equal(stage, 'complete');
        assert.equal(data.modVersion, '1.2.3');
        assert.equal(data.version, '5.0.0');
        assert.equal(data.checksum, sha256(fs.readFileSync(asarPath)));
        assert.equal(data.checksumCompressed, sha256(Buffer.concat(state.parts)));
        assert.equal(data.parts.length, state.parts.length);
        assert.equal(data.unpackedChecksum, 'a'.repeat(64));
        state.completed = data;
        return { data: { ok: true } };
    };
    axios.post = async (url, formData) => {
        const body = await readStream(formData);
        if (url.endsWith('/release')) assert(body.includes(Buffer.from('asarChecksum')));
        state.events.push('backend:unpacked');
        if (state.failAt === 'backend:unpacked') throw new Error('unpacked failed');
        const asarChecksum = sha256(fs.readFileSync(asarPath));
        return { data: { ok: true, asarChecksum, key: `builds/mod/unpacked/${asarChecksum}/fixture.zip`, unpackedChecksum: 'a'.repeat(64) } };
    };
    axios.put = async (_url, stream) => {
        state.parts.push(await readStream(stream));
        state.events.push('backend:part');
        if (state.failAt === 'backend:part') throw new Error('part failed');
        return { status: 200, headers: { etag: `part-${state.parts.length}` } };
    };
    t.mock.method(globalThis, 'fetch', async (url) => {
        assert.equal(url, 'https://discord.invalid/webhook');
        state.events.push('discord');
        return { ok: state.failAt !== 'discord', statusText: 'Discord fixture error' };
    });

    const runtime = {
        deps: {
            asar,
            fs,
            fsp: fs.promises,
            path,
            crypto,
            axios,
            sevenZip,
            Octokit: class {
                rest = { repos };
            },
        },
        constants: { DEFAULT_DIST_PATH: asarPath, TEMP_DIR: root, PATCH_NOTES_PATH: notesPath },
        env: {
            githubToken: 'fixture-token',
            githubOwnerEnv: 'fixture-owner',
            githubRepoEnv: 'fixture-repo',
            githubTagPrefix: 'v',
            serverUrl: 'https://backend.invalid',
            authToken: 'fixture-token',
            webhookUrl: 'https://discord.invalid/webhook',
        },
    };
    const utils = createReleaseUtils(runtime, {
        packageUtils: { getModVersion: () => '1.2.3' },
        extractUtils: { getLatestYMVersion: async () => ({ version: '5.0.0' }) },
        zstdUtils: createZstdUtils(runtime),
    });
    const run = async (options = {}, cli = true) => {
        if (!cli) return utils.release({ dest: asarPath, ...options });
        const context = { options: { dest: asarPath, ...options }, core: { releaseUtils: utils }, state: {} };
        const tasks = createReleaseTask().task(context, { newListr: (definitions) => definitions });
        for (const task of tasks) {
            if (task.skip && (await task.skip(context, {}))) continue;
            await task.task(context, {});
        }
    };
    return { state, utils, run, asarPath };
}

for (const cli of [true, false]) {
    const entry = cli ? 'CLI tasks' : 'release utility';

    test(`${entry}: publishes only after complete backend upload`, async (t) => {
        const { state, run } = await fixture(t);
        await run({}, cli);
        assert.equal(state.release.draft, false);
        assert.equal(state.assets.length, 4);
        assert(state.completed);
        assert(state.events.indexOf('backend:complete') < state.events.indexOf('github:publish'));
        assert(state.events.indexOf('github:publish') < state.events.indexOf('discord'));
    });

    for (const stage of ['unpacked', 'init', 'part', 'complete']) {
        test(`${entry}: backend ${stage} failure preserves draft`, async (t) => {
            const { state, run } = await fixture(t);
            state.failAt = `backend:${stage}`;
            await assert.rejects(run({}, cli));
            assert.equal(state.release.draft, true);
            assert(!state.events.includes('github:publish'));
            assert(!state.events.includes('discord'));
            assert.equal(state.events.includes('backend:abort'), stage === 'part' || stage === 'complete');
        });
    }

    for (const [flag, expected] of [
        ['onlyUploadUnpacked', ['backend:unpacked']],
        ['onlyUploadAppAsar', ['backend:unpacked', 'backend:init', 'backend:complete']],
        ['onlySendPatchNotes', ['discord']],
    ]) {
        test(`${entry}: preserves ${flag} mode`, async (t) => {
            const { state, run } = await fixture(t);
            await run({ [flag]: true }, cli);
            assert.equal(state.release, null);
            assert(!state.events.some((event) => event.startsWith('github:')));
            for (const event of expected) assert(state.events.includes(event));
            assert.equal(state.events.includes('discord'), flag === 'onlySendPatchNotes');
        });
    }
}

test('GitHub lookup failure is propagated without creating or uploading a release', async (t) => {
    const { state, run } = await fixture(t);
    state.failAt = 'github:lookup';
    await assert.rejects(run(), /lookup failed/);
    assert.deepEqual(state.events, ['github:lookup']);
});

test('asset upload failure leaves the release hidden and never starts backend upload', async (t) => {
    const { state, run } = await fixture(t);
    state.failAt = 'github:upload:app.asar.gz';
    await assert.rejects(run(), /asset upload failed/);
    assert.equal(state.release.draft, true);
    assert(!state.events.some((event) => event.startsWith('backend:')));
    assert(!state.events.includes('discord'));
});

test('failed backend upload can be retried using the existing draft', async (t) => {
    const { state, run } = await fixture(t);
    state.failAt = 'backend:complete';
    await assert.rejects(run());
    state.failAt = null;
    await run();
    assert.equal(state.release.draft, false);
    assert.equal(state.events.filter((event) => event === 'github:create-draft').length, 1);
    assert.equal(state.assets.length, 4);
});

test('publication failure leaves a recoverable draft after backend success', async (t) => {
    const { state, run } = await fixture(t);
    state.failAt = 'github:publish';
    await assert.rejects(run(), /github:publish failed/);
    assert(state.completed);
    assert.equal(state.release.draft, true);
    assert(!state.events.includes('discord'));
    state.failAt = null;
    await run();
    assert.equal(state.release.draft, false);
});

test('Discord failure can be retried without touching public assets', async (t) => {
    const { state, run } = await fixture(t);
    state.failAt = 'discord';
    await assert.rejects(run(), /Discord fixture error/);
    assert.equal(state.release.draft, false);
    const assets = state.assets.map((asset) => ({ ...asset, data: Buffer.from(asset.data) }));
    state.events = [];
    state.failAt = null;
    await run();
    assert.deepEqual(state.assets, assets);
    assert(state.events.includes('backend:complete'));
    assert(state.events.includes('discord'));
    assert(!state.events.some((event) => /^github:(upload|delete|publish|update|create)/.test(event)));
});

for (const corruption of ['different ASAR', 'missing asset', 'missing checksum']) {
    test(`published release with ${corruption} is rejected before any mutations`, async (t) => {
        const { state, run, asarPath } = await fixture(t);
        await run();
        if (corruption === 'different ASAR') fs.appendFileSync(asarPath, 'changed content');
        if (corruption === 'missing asset') state.assets.pop();
        if (corruption === 'missing checksum') delete state.assets.find((asset) => asset.name === 'app.asar').digest;
        const assets = state.assets.map((asset) => ({ ...asset, data: Buffer.from(asset.data) }));
        state.events = [];
        await assert.rejects(run(), /Выпустите новую версию/);
        assert.deepEqual(state.assets, assets);
        assert.deepEqual(state.events, ['github:lookup']);
    });
}

test('missing ASAR stops before network operations', async (t) => {
    const { state, run, asarPath } = await fixture(t);
    fs.unlinkSync(asarPath);
    await assert.rejects(run(), /app.asar не найден/);
    assert.deepEqual(state.events, []);
});

test('corrupt unpacked file stops before network operations', async (t) => {
    const { state, run, asarPath } = await fixture(t);
    fs.writeFileSync(path.join(`${asarPath}.unpacked`, 'node_modules', 'sharp', 'binding.node'), 'x'.repeat('fixture native binary'.length));
    await assert.rejects(run(), /не соответствует ASAR/);
    assert.deepEqual(state.events, []);
});

test('ASAR packaging unpacks complete sharp and @img packages while keeping ordinary dependencies packed', async (t) => {
    const { asarPath } = await fixture(t);
    const sourceDir = path.join(path.dirname(asarPath), 'source');
    const files = [
        ['node_modules/sharp/package.json', true],
        ['node_modules/sharp/lib/index.js', true],
        ['node_modules/@img/sharp-win32-x64/package.json', true],
        ['node_modules/@img/sharp-win32-x64/lib/binding.node', true],
        ['node_modules/ordinary/index.js', false],
    ];
    for (const [file] of files) {
        fs.mkdirSync(path.dirname(path.join(sourceDir, file)), { recursive: true });
        fs.writeFileSync(path.join(sourceDir, file), 'fixture');
    }
    asar.uncache(asarPath);
    await createBuildUtils({ deps: { asar, fs, fsp: fs.promises, path }, constants: {} }, {}).archiveAsar(sourceDir, asarPath);
    for (const [file, unpacked] of files) {
        assert.equal(Boolean(asar.statFile(asarPath, path.normalize(file)).unpacked), unpacked, file);
        if (unpacked) assert.equal(fs.readFileSync(path.join(`${asarPath}.unpacked`, file), 'utf8'), 'fixture');
    }
});

test('finalizing the same prepared release twice does not mutate an already public release', async (t) => {
    const { state, utils } = await fixture(t);
    const payload = await utils.prepareReleasePayload({});
    const draft = await utils.prepareGitHubRelease(payload.version, payload.dest, payload.patchNote);
    await utils.uploadReleaseAppAsar(payload);
    await utils.publishGitHubRelease(draft);
    await utils.publishGitHubRelease(draft);
    assert.equal(state.events.filter((event) => event === 'github:publish').length, 1);
});

test('release workflow runs the regression suite before building and publishing', () => {
    const yaml = require('js-yaml');
    const workflow = yaml.load(fs.readFileSync(path.join(__dirname, '../../.github/workflows/release.yml'), 'utf8'));
    const steps = workflow.jobs.release.steps;
    const check = steps.findIndex((step) => step.run === 'yarn test:release');
    const build = steps.findIndex((step) => step.run === 'yarn buildModProd');
    const publish = steps.findIndex((step) => step.run === 'yarn release');
    assert(check >= 0 && check < build && build < publish);
});

test('release tooling and test script changes do not publish a development build', () => {
    const previousPackage = { version: '1.2.3', dependencies: { dependency: '1.0.0' }, scripts: { release: 'node toolset.js release' } };
    const currentPackage = { ...previousPackage, scripts: { ...previousPackage.scripts, 'test:release': 'node --test toolset/tests/release.test.js' } };
    assert.equal(
        shouldBuildBranch(
            [
                '.github/workflows/release.yml',
                '.github/workflows/branch-build.yml',
                'package.json',
                'toolset/utils/releaseUtils.js',
                'toolset/utils/commandTasks.js',
                'toolset/utils/buildUtils.js',
                'toolset/tests/release.test.js',
            ],
            previousPackage,
            currentPackage,
        ),
        false,
    );
});

for (const file of ['src/main/events.js', 'webModules/pulsesyncWebHost/src/index.ts', 'native/module/binding.gyp', 'yarn.lock', '.npmrc']) {
    test(`${file} changes enable the development build, including mixed pushes`, () => {
        assert.equal(shouldBuildBranch(['toolset/utils/releaseUtils.js', file]), true);
    });
}

for (const [field, value] of [
    ['version', '1.2.4'],
    ['dependencies', { dependency: '2.0.0' }],
    ['devDependencies', { compiler: '2.0.0' }],
    ['optionalDependencies', { native: '2.0.0' }],
    ['resolutions', { dependency: '2.0.0' }],
    ['engines', { node: '>=24' }],
    ['packageManager', 'yarn@1.22.22'],
]) {
    test(`package.json ${field} changes enable the development build`, () => {
        const previousPackage = { version: '1.2.3', dependencies: { dependency: '1.0.0' } };
        assert.equal(shouldBuildBranch(['package.json'], previousPackage, { ...previousPackage, [field]: value }), true);
    });
}

test('manual build and unknown push base always enable the development build', () => {
    const git = () => {
        throw new Error('Unexpected git invocation');
    };
    assert.equal(resolveBranchBuild({ eventName: 'workflow_dispatch', git }), true);
    assert.equal(resolveBranchBuild({ eventName: 'push', beforeSha: '0'.repeat(40), git }), true);
    assert.equal(resolveBranchBuild({ eventName: 'push', beforeSha: 'invalid', git }), true);
});

test('change detection compares all commits in the push and ignores package script-only changes', () => {
    const beforeSha = 'a'.repeat(40);
    const previousPackage = { version: '1.2.3', dependencies: { dependency: '1.0.0' } };
    const git = (args) => {
        if (args[0] === 'diff') {
            assert.deepEqual(args, ['diff', '--name-only', '-z', beforeSha, 'HEAD', '--']);
            return 'package.json\0toolset/utils/releaseUtils.js\0';
        }
        return JSON.stringify(args[1].startsWith(beforeSha) ? previousPackage : { ...previousPackage, scripts: { 'test:release': 'node --test' } });
    };
    assert.equal(resolveBranchBuild({ eventName: 'push', beforeSha, git }), false);
});

test('missing base commit enables the build instead of silently skipping it', (t) => {
    t.mock.method(console, 'warn', () => {});
    assert.equal(
        resolveBranchBuild({
            eventName: 'push',
            beforeSha: 'a'.repeat(40),
            git: () => {
                throw new Error('Base commit unavailable');
            },
        }),
        true,
    );
});

test('development publication depends on change detection without installing dependencies or running tests', () => {
    const yaml = require('js-yaml');
    const workflow = yaml.load(fs.readFileSync(path.join(__dirname, '../../.github/workflows/branch-build.yml'), 'utf8'));
    assert.equal(workflow.jobs.build.needs, 'changes');
    assert(workflow.jobs.build.if.includes("needs.changes.outputs.build == 'true'"));
    assert.equal(workflow.jobs.changes.outputs.build, '${{ steps.changes.outputs.build }}');
    assert.equal(workflow.jobs.changes['runs-on'], 'ubuntu-latest');
    assert.equal(workflow.jobs.changes.permissions.contents, 'read');
    const commands = workflow.jobs.changes.steps.map((step) => step.run).filter(Boolean);
    assert.deepEqual(commands, ['node toolset/utils/branchBuildChanges.js']);
    assert(workflow.on.workflow_dispatch !== undefined);
});
