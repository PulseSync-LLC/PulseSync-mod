const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cp = require('child_process');
const parser = require('@babel/parser');
const generate = require('@babel/generator').default;

const SECTORS = [
    ['main', '0. Main и desktop bridge', ['IPC/preload', 'upstream lifecycle', 'модовые сервисы']],
    ['bootstrap', '1. Загрузка runtime/WebHost', ['bootstrap', 'entry points', 'production bundles в финале']],
    ['resources', '2. API, ресурсы и модели', ['resource hooks', 'metadata/replacements', 'модели и route copies']],
    ['store', '3. Root store и сценарии', ['lyrics/cache', 'import/upload', 'settings/experiments']],
    ['player', '4. Player, audio и Ynison', ['desktop state', 'audio graph', 'restore/auth/experiments']],
    ['ui', '5. Native UI', ['hosts/slots', 'menus/settings/titlebar', 'player/fullscreen/cast']],
    ['wave-css', '6. Wave, CSS и bindings', ['worker/animation', 'wave controls', 'CSS и JS class bindings']],
    ['review', '6.4. Неопределённое и обзор полных файлов', ['изменения вне маркеров', 'все дубли', 'webpack maps/assets']],
];
const EXTENSIONS = new Set(['.js', '.cjs', '.mjs', '.css', '.json', '.html', '.txt', '.svg']);
const DISPOSITIONS = new Set(['pending', 'ported', 'upstream', 'obsolete']);
const slash = (value) => value.replaceAll('\\', '/');
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const compact = (node) => generate(node, { comments: false, compact: true }).code;
const json = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const writeJson = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n', { flag: 'wx' });

function inside(root, relative) {
    const result = path.resolve(root, relative);
    const rel = path.relative(root, result);
    if (rel === '..' || rel.startsWith('..' + path.sep) || path.isAbsolute(rel)) throw new Error(`Путь вне ${root}: ${relative}`);
    return result;
}

function git(repo, args, options = {}) {
    return cp.execFileSync('git', args, { cwd: repo, maxBuffer: 256 * 1024 * 1024, ...options });
}

function diskFiles(root) {
    return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
        if (entry.isSymbolicLink()) throw new Error(`Symlink во входах миграции: ${path.join(root, entry.name)}`);
        if (entry.isDirectory()) {
            if (['node_modules', '.git', 'pulsesync-web', 'pulsesync-runtime'].includes(entry.name)) return [];
            return diskFiles(path.join(root, entry.name));
        }
        return EXTENSIONS.has(path.extname(entry.name)) ? [path.join(root, entry.name)] : [];
    });
}

function gitFiles(repo, commit) {
    const names = git(repo, ['ls-tree', '-rz', '--name-only', commit, '--', 'src/app', 'src/main'], { encoding: 'utf8' })
        .split('\0')
        .filter((file) => file && EXTENSIONS.has(path.extname(file)) && !file.split('/').includes('node_modules'));
    if (names.some((file) => /[\r\n]/.test(file))) throw new Error('Имена файлов с переводами строк не поддерживаются');
    if (!names.length) throw new Error('В donor commit нет src/app и src/main');
    const data = git(repo, ['cat-file', '--batch'], { input: names.map((file) => `${commit}:${file}\n`).join('') });
    let offset = 0;
    return names.map((file) => {
        const end = data.indexOf(10, offset);
        const header = data.subarray(offset, end).toString('utf8');
        const match = header.match(/^[a-f0-9]+ blob (\d+)$/);
        if (!match) throw new Error(`Нельзя прочитать donor ${file}: ${header}`);
        const size = Number(match[1]);
        offset = end + 1;
        const bytes = data.subarray(offset, offset + size);
        offset += size + 1;
        return { file: file.slice(4), bytes };
    });
}

function describe(file, bytes) {
    const text = bytes.toString('utf8');
    const result = { file, sha256: hash(bytes), text, modules: [], comments: [], normalized: hash(bytes) };
    if (/\.(?:[cm]?js)$/.test(file)) {
        let ast;
        try {
            ast = parser.parse(text, { sourceType: 'unambiguous', allowReturnOutsideFunction: !file.endsWith('.mjs') });
        } catch (error) {
            throw new Error(`${file}: ${error.message}`, { cause: error });
        }
        result.normalized = hash(compact(ast));
        result.comments = ast.comments;
        for (const statement of ast.program.body) {
            const expr = statement.expression;
            if (expr?.type !== 'CallExpression' || expr.callee?.property?.name !== 'push') continue;
            const table = expr.arguments[0]?.elements?.[1];
            if (table?.type !== 'ObjectExpression') continue;
            for (const prop of table.properties) {
                const id = String(prop.key?.value ?? prop.key?.name);
                if (!/^\d+$/.test(id) || !prop.value?.params) continue;
                const code = compact(prop.value);
                result.modules.push({
                    file,
                    id,
                    start: prop.start,
                    end: prop.end,
                    line: prop.loc.start.line,
                    normalized: hash(code),
                    words: [...new Set(code.match(/[A-Za-z_$][\w$]{3,}/g) || [])],
                });
            }
        }
    } else if (file.endsWith('.css')) {
        result.comments = [...text.matchAll(/\/\*([\s\S]*?)\*\//g)].map((match) => ({
            value: match[1],
            start: match.index,
            end: match.index + match[0].length,
            loc: { start: { line: text.slice(0, match.index).split('\n').length } },
        }));
        result.selectors = [
            ...new Set(
                [...text.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{/g)]
                    .map((match) => match[1].trim().replace(/\s+/g, ' '))
                    .filter((value) => !value.startsWith('@')),
            ),
        ];
    }
    return result;
}

function readTree(root) {
    const records = ['app', 'main'].flatMap((area) => {
        const dir = path.join(root, area);
        return fs.existsSync(dir)
            ? diskFiles(dir)
                  .sort()
                  .map((file) => {
                      const diskFile = slash(path.relative(root, file));
                      return { ...describe(diskFile, fs.readFileSync(file)), diskFile };
                  })
            : [];
    });
    if (!fs.existsSync(path.join(root, 'main'))) {
        for (const file of ['index.js', 'preload.js'])
            if (fs.existsSync(path.join(root, file))) {
                records.push({ ...describe(`main/${file}`, fs.readFileSync(path.join(root, file))), diskFile: file });
            }
    }
    return records;
}

function snapshotPath(root, file) {
    const flatMain = /^main\/(?:index|preload)\.js$/.test(file) && !fs.existsSync(path.join(root, 'main'));
    return inside(root, flatMain ? file.slice(5) : file);
}

function moduleIndex(records) {
    const result = new Map();
    for (const record of records)
        for (const mod of record.modules) {
            if (!result.has(mod.id)) result.set(mod.id, []);
            result.get(mod.id).push(mod);
        }
    return result;
}

function sectorFor(file, title) {
    if (file.startsWith('main/')) return 'main';
    if (/\.css$/.test(file) || /wave|vibe|animation worker/i.test(title)) return 'wave-css';
    if (/bootstrap|rumScript|runtime loader/i.test(file + ' ' + title)) return 'bootstrap';
    if (/resource|metadata|replacement|substitut|track model|album model|artist model|cover.*adapter/i.test(title)) return 'resources';
    if (/root store|provider|cache|prefetch|import attempt|upload|experiment override/i.test(title)) return 'store';
    if (/ynison|audio graph|R128|analyser|media session|crossfade|playback controller/i.test(title)) return 'player';
    if (/button|control|menu|modal|header|settings|titlebar|tooltip|badge|disclaimer|lyrics|notification|slot|fullscreen|player.bar/i.test(title)) return 'ui';
    return 'review';
}

function candidateFinder(baseline, target) {
    const targets = moduleIndex(target);
    const unique = [...new Map(target.flatMap((record) => record.modules).map((mod) => [`${mod.id}:${mod.normalized}`, mod])).values()];
    const frequency = new Map();
    for (const mod of unique) for (const word of mod.words) frequency.set(word, (frequency.get(word) ?? 0) + 1);
    const weight = (word) => Math.log(1 + unique.length / (frequency.get(word) ?? 1));
    const weighted = new WeakMap();
    const describeWords = (mod) => {
        if (!weighted.has(mod)) weighted.set(mod, { words: new Set(mod.words), total: mod.words.reduce((sum, word) => sum + weight(word), 0) });
        return weighted.get(mod);
    };
    const weights = new Map([...frequency.keys()].map((word) => [word, weight(word)]));
    const score = (left, right) => {
        const old = describeWords(left),
            fresh = describeWords(right);
        let shared = 0;
        for (const word of right.words) if (old.words.has(word)) shared += weights.get(word) ?? weight(word);
        const total = old.total + fresh.total;
        return Number(((2 * shared) / (total || 1)).toFixed(4));
    };
    const baseIndex = moduleIndex(baseline);
    const cache = new Map();
    return (record, mod) => {
        if (!mod) {
            if (record.selectors?.length) {
                return target
                    .filter((row) => row.selectors)
                    .map((row) => ({
                        file: row.file,
                        sharedSelectors: row.selectors.filter((selector) => record.selectors.includes(selector)).length,
                        method: 'css-selectors',
                    }))
                    .filter((row) => row.sharedSelectors)
                    .sort((a, b) => b.sharedSelectors - a.sharedSelectors)
                    .slice(0, 3);
            }
            return target.some((row) => row.file === record.file) ? [{ file: record.file, method: 'same-path' }] : [];
        }
        const bases = baseIndex.get(mod.id) ?? [];
        const reference = bases.find((row) => row.file === mod.file) ?? bases[0] ?? mod;
        const key = `${mod.id}:${reference.normalized}`;
        if (!cache.has(key)) {
            const ranked = unique
                .map((row) => ({ ...row, score: score(reference, row) }))
                .filter((row) => row.score >= 0.15)
                .sort((a, b) => b.score - a.score)
                .slice(0, 3);
            const ids = new Set([mod.id, ...ranked.map((row) => row.id)]);
            cache.set(
                key,
                [...ids]
                    .flatMap((id) =>
                        (targets.get(id) ?? []).map((row) => ({
                            file: row.file,
                            module: row.id,
                            line: row.line,
                            score: score(reference, row),
                            baselineEqual: bases.some((base) => base.normalized === row.normalized),
                            method: row.id === mod.id ? 'same-id-review-for-reuse' : 'word-similarity',
                        })),
                    )
                    .sort((a, b) => b.score - a.score),
            );
        }
        return cache.get(key);
    };
}

function collectInventory(donor, baseline, target) {
    const basePaths = new Map(baseline.map((record) => [record.file, record]));
    const candidates = candidateFinder(baseline, target);
    const dependencyIds = new Set();
    const { requiredModules } = require('./migrationAlignment.js');
    const items = [],
        issues = [];
    for (const record of donor) {
        const base = basePaths.get(record.file);
        const stack = [],
            marked = new Set();
        for (const comment of record.comments) {
            const match = comment.value.trim().match(/^for PulseSync([^:]*): (BEGIN|END) (.+)$/);
            if (!match) continue;
            const [, owner, kind, title] = match;
            if (kind === 'BEGIN') {
                stack.push({ owner, title, comment });
                continue;
            }
            const opening = stack.pop();
            if (!opening || opening.title !== title || opening.owner !== owner) {
                issues.push({ file: record.file, line: comment.loc.start.line, problem: 'unmatched END', title });
                continue;
            }
            const mod = record.modules.find((row) => row.start <= opening.comment.start && row.end >= comment.end);
            if (mod) marked.add(mod.id);
            items.push({
                kind: 'marker',
                file: record.file,
                module: mod?.id ?? null,
                startLine: opening.comment.loc.start.line,
                endLine: comment.loc.start.line,
                title,
                owner: 'PulseSync' + owner,
                bodySha256: hash(record.text.slice(opening.comment.end, comment.start)),
                candidates: candidates(record, mod),
            });
        }
        for (const opening of stack) issues.push({ file: record.file, line: opening.comment.loc.start.line, problem: 'unclosed BEGIN', title: opening.title });
        for (const mod of record.modules) {
            const baseModule = base?.modules.find((row) => row.id === mod.id);
            if (baseModule?.normalized !== mod.normalized) {
                for (const id of requiredModules(record.text.slice(mod.start, mod.end))) dependencyIds.add(id);
            }
            if (marked.has(mod.id) || baseModule?.normalized === mod.normalized) continue;
            items.push({
                kind: 'unmarked-module',
                file: record.file,
                module: mod.id,
                startLine: mod.line,
                title: `${baseModule ? 'Changed' : 'Added'} module ${mod.id} without paired markers`,
                candidates: candidates(record, mod),
            });
        }
        if (base?.normalized !== record.normalized) {
            items.push({
                kind: 'file-review',
                file: record.file,
                module: null,
                startLine: 1,
                title: base ? 'Review complete donor delta, including code outside markers' : 'Review added donor file',
                candidates: candidates(record, null),
            });
        }
    }
    for (const base of baseline)
        if (!donor.some((row) => row.file === base.file)) {
            items.push({ kind: 'removed-file', file: base.file, module: null, startLine: 1, title: 'Review file removed by mod', candidates: candidates(base, null) });
        }
    items.sort((a, b) => a.file.localeCompare(b.file) || a.startLine - b.startLine || a.kind.localeCompare(b.kind));
    items.forEach((item, index) => {
        item.id = `P${String(index + 1).padStart(5, '0')}`;
    });
    const baseModules = moduleIndex(baseline),
        moduleCandidates = {};
    for (const id of [...dependencyIds].sort()) {
        const mod = baseModules.get(id)?.[0];
        if (mod) moduleCandidates[id] = candidates(basePaths.get(mod.file), mod);
    }
    return { items, issues, moduleCandidates };
}

function initWorkspace({ repo, donor, baseline, target, workDir }) {
    const commit = git(repo, ['rev-parse', '--verify', '--end-of-options', `${donor}^{commit}`], { encoding: 'utf8' }).trim();
    const donorPackage = JSON.parse(git(repo, ['show', `${commit}:src/package.json`], { encoding: 'utf8' }));
    const baselineRoot = fs.realpathSync(path.resolve(repo, baseline));
    const targetRoot = fs.realpathSync(path.resolve(repo, target));
    for (const root of [baselineRoot, targetRoot]) {
        if (!fs.existsSync(path.join(root, 'app')) || (!fs.existsSync(path.join(root, 'main')) && !fs.existsSync(path.join(root, 'index.js')))) {
            throw new Error(`Snapshot должен содержать app и main/ либо index.js: ${root}`);
        }
    }
    const baseVersion = json(path.join(baselineRoot, 'package.json')).version;
    const targetVersion = json(path.join(targetRoot, 'package.json')).version;
    const expected = donorPackage.modification?.realYMVersion;
    if (!expected || expected !== baseVersion) throw new Error(`Baseline ${baseVersion} не совпадает с donor modification.realYMVersion ${expected}`);
    const dir = outputDirectory(repo, workDir ?? `analysis/ym-${targetVersion}-sectors`);
    if (fs.existsSync(dir)) throw new Error(`Workspace уже существует; используйте status/prepare, не перегенерируйте inventory: ${dir}`);
    console.log(`Donor: ${commit}; baseline: ${baseVersion}; target: ${targetVersion}`);
    const donorRecords = gitFiles(repo, commit).map(({ file, bytes }) => describe(file, bytes));
    console.log(`Donor: ${donorRecords.length} файлов`);
    const baselineRecords = readTree(baselineRoot);
    console.log(`Baseline: ${baselineRecords.length} файлов`);
    const targetRecords = readTree(targetRoot);
    console.log(`Target: ${targetRecords.length} файлов`);
    const inventory = collectInventory(donorRecords, baselineRecords, targetRecords);
    const inventoryText = JSON.stringify(inventory, null, 2) + '\n';
    const manifest = {
        schemaVersion: 1,
        donor: commit,
        baselineVersion: baseVersion,
        targetVersion,
        baselineRoot,
        targetRoot,
        inventorySha256: hash(inventoryText),
        inputs: [
            ...baselineRecords.map(({ diskFile, sha256 }) => ({ root: 'baseline', file: diskFile, sha256 })),
            ...targetRecords.map(({ diskFile, sha256 }) => ({ root: 'target', file: diskFile, sha256 })),
            ...['baseline', 'target'].map((root) => ({
                root,
                file: 'package.json',
                sha256: hash(fs.readFileSync(path.join(root === 'baseline' ? baselineRoot : targetRoot, 'package.json'))),
            })),
        ],
    };
    const ledger = {
        schemaVersion: 1,
        sectors: SECTORS.map(([id, title, substeps]) => ({ id, title, substeps })),
        items: inventory.items.map((item) => ({
            id: item.id,
            sector: sectorFor(item.file, item.kind === 'marker' ? item.title : ''),
            disposition: 'pending',
            targets: [],
            note: '',
            commit: '',
        })),
    };
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'inventory.json'), inventoryText, { flag: 'wx' });
    writeJson(path.join(dir, 'manifest.json'), manifest);
    writeJson(path.join(dir, 'ledger.json'), ledger);
    return { workDir: dir, items: inventory.items.length, markers: inventory.items.filter((item) => item.kind === 'marker').length, issues: inventory.issues };
}

function outputDirectory(repo, workDir) {
    const analysis = inside(repo, 'analysis');
    const dir = inside(analysis, path.relative(analysis, path.resolve(repo, workDir)));
    if (dir === analysis) throw new Error('Укажите отдельную подпапку analysis/');
    let existing = dir;
    while (!fs.existsSync(existing)) existing = path.dirname(existing);
    inside(fs.realpathSync(repo), path.relative(fs.realpathSync(repo), fs.realpathSync(existing)));
    let ancestor = existing;
    while (ancestor !== path.resolve(repo)) {
        if (fs.lstatSync(ancestor).isSymbolicLink()) throw new Error(`Symlink в workspace path: ${ancestor}`);
        ancestor = path.dirname(ancestor);
    }
    return dir;
}

function loadWorkspace(repo, workDir) {
    if (!workDir) throw new Error('Укажите --workDir=analysis/<migration>');
    const dir = outputDirectory(repo, workDir);
    const manifest = json(path.join(dir, 'manifest.json'));
    if (manifest.schemaVersion !== 1) throw new Error('Неизвестная версия manifest');
    const bytes = fs.readFileSync(path.join(dir, 'inventory.json'));
    if (hash(bytes) !== manifest.inventorySha256) throw new Error('Immutable inventory изменён; восстановите исходный inventory.json');
    const inventory = JSON.parse(bytes);
    const ledger = json(path.join(dir, 'ledger.json'));
    if (ledger.schemaVersion !== 1 || !Array.isArray(ledger.sectors) || !Array.isArray(ledger.items)) throw new Error('Неверная схема ledger');
    const ids = new Set(inventory.items.map((item) => item.id));
    const seen = new Set();
    const sectors = new Set(ledger.sectors.map((sector) => sector.id));
    if (sectors.size !== ledger.sectors.length || [...sectors].some((id) => typeof id !== 'string' || !id)) throw new Error('Неуникальные или пустые sector IDs');
    for (const row of ledger.items) {
        if (!ids.has(row.id) || seen.has(row.id)) throw new Error(`Неизвестный/повторный ledger ID: ${row.id}`);
        if (!sectors.has(row.sector) || !DISPOSITIONS.has(row.disposition) || !Array.isArray(row.targets)) throw new Error(`Неверная запись ledger: ${row.id}`);
        seen.add(row.id);
    }
    if (seen.size !== ids.size) throw new Error('Ledger не содержит все inventory IDs');
    return { dir, manifest, inventory, ledger };
}

function workspaceStatus({ repo, workDir, sector }) {
    const { manifest, inventory, ledger } = loadWorkspace(repo, workDir);
    if (sector && !ledger.sectors.some((row) => row.id === sector)) throw new Error(`Неизвестный сектор: ${sector}`);
    return {
        donor: manifest.donor,
        baseline: manifest.baselineVersion,
        target: manifest.targetVersion,
        inventoryIssues: inventory.issues,
        sectors: ledger.sectors
            .filter((row) => !sector || row.id === sector)
            .map((row) => ({
                ...row,
                counts: Object.fromEntries(
                    [...DISPOSITIONS].map((status) => [status, ledger.items.filter((item) => item.sector === row.id && item.disposition === status).length]),
                ),
            })),
        pending: ledger.items
            .filter((item) => item.disposition === 'pending' && (!sector || item.sector === sector))
            .map((row) => ({
                ...row,
                ...inventory.items.find((item) => item.id === row.id),
            })),
        notice: 'Disposition описывает перенос кода; runtime-готовность и проверки отмечаются отдельно.',
    };
}

function checkInputs(manifest) {
    for (const row of manifest.inputs) {
        const root = row.root === 'baseline' ? manifest.baselineRoot : manifest.targetRoot;
        const file = inside(root, row.file);
        if (!fs.existsSync(file) || hash(fs.readFileSync(file)) !== row.sha256) throw new Error(`Входной snapshot изменён: ${file}`);
    }
}

function extractUnit(text, file, moduleId) {
    if (!moduleId) return text;
    const mod = describe(file, Buffer.from(text)).modules.find((row) => row.id === String(moduleId));
    if (!mod) throw new Error(`Module ${moduleId} не найден в ${file}`);
    return text.slice(mod.start, mod.end) + '\n';
}

function diff(repo, args, destination) {
    const result = cp.spawnSync('git', args, { cwd: repo, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
    if (result.error || result.signal || result.status === null || result.status < 0 || result.status > (args[0] === 'merge-file' ? 127 : 1)) {
        throw result.error ?? new Error(result.stderr || `git ${args[0]} failed: ${result.status}`);
    }
    fs.writeFileSync(destination, result.stdout, { flag: 'wx' });
    return result.status;
}

function prepareItem({ repo, workDir, item: itemId, targetFile, targetModule, baseFile }) {
    if (targetModule !== undefined) targetModule = String(targetModule);
    const { dir, manifest, inventory } = loadWorkspace(repo, workDir);
    const item = inventory.items.find((row) => row.id === itemId);
    if (!item) throw new Error(`Неизвестная врезка: ${itemId}`);
    if (item.kind === 'removed-file') throw new Error('Для removed-file изучите donor delta; donor body отсутствует');
    checkInputs(manifest);
    const choices = item.candidates.filter((row) => (!targetFile || row.file === targetFile) && (!targetModule || row.module === String(targetModule)));
    if (!targetFile && choices.length !== 1) throw new Error(`Выберите --targetFile и при необходимости --targetModule; кандидатов: ${choices.length}`);
    const selectedFile = targetFile ?? choices[0].file;
    if (item.module && !targetModule && new Set(choices.map((row) => row.module)).size !== 1)
        throw new Error('В выбранном файле несколько кандидатов; укажите --targetModule');
    const selectedModule = targetModule ?? choices[0]?.module ?? (item.module ? undefined : null);
    if (item.module && !selectedModule) throw new Error('Для webpack-врезки укажите --targetModule');
    const donorText = git(repo, ['show', `${manifest.donor}:src/${item.file}`], { encoding: 'utf8' });
    const basePath = snapshotPath(manifest.baselineRoot, baseFile ?? item.file);
    if (!fs.existsSync(basePath) && item.module) throw new Error('Baseline module отсутствует по старому пути; укажите --baseFile или перенесите новый модуль вручную');
    const baseText = fs.existsSync(basePath) ? extractUnit(fs.readFileSync(basePath, 'utf8'), baseFile ?? item.file, item.module) : '';
    const targetPath = snapshotPath(manifest.targetRoot, selectedFile);
    const targetText = extractUnit(fs.readFileSync(targetPath, 'utf8'), selectedFile, selectedModule);
    const output = outputDirectory(repo, path.relative(repo, inside(dir, `work/${item.id}`)));
    if (fs.existsSync(output)) throw new Error(`Подготовленный item уже существует: ${output}; сохраните ручную работу`);
    fs.mkdirSync(output, { recursive: true });
    for (const [name, text] of Object.entries({ base: baseText, donor: extractUnit(donorText, item.file, item.module), target: targetText })) {
        fs.writeFileSync(path.join(output, `${name}.txt`), text, { flag: 'wx' });
    }
    diff(repo, ['diff', '--no-index', '--no-ext-diff', '--', path.join(output, 'base.txt'), path.join(output, 'donor.txt')], path.join(output, 'mod.diff'));
    diff(repo, ['diff', '--no-index', '--no-ext-diff', '--', path.join(output, 'base.txt'), path.join(output, 'target.txt')], path.join(output, 'upstream.diff'));
    const conflicts = diff(
        repo,
        ['merge-file', '--diff3', '-p', path.join(output, 'donor.txt'), path.join(output, 'base.txt'), path.join(output, 'target.txt')],
        path.join(output, 'merge.txt'),
    );
    writeJson(path.join(output, 'selection.json'), {
        item: item.id,
        donor: manifest.donor,
        baseFile: baseFile ?? item.file,
        targetFile: selectedFile,
        targetModule: selectedModule,
        conflicts,
    });
    return { output, conflicts, notice: 'Merge — заготовка для ручной адаптации bindings/imports, без применения в src.' };
}

function checkWorkspace({ repo, workDir }) {
    const { manifest, inventory, ledger } = loadWorkspace(repo, workDir);
    checkInputs(manifest);
    const issues = [...inventory.issues];
    const cache = new Map();
    for (const row of ledger.items) {
        if (row.disposition === 'pending') {
            issues.push({ id: row.id, problem: 'pending' });
            continue;
        }
        if (!row.note?.trim()) issues.push({ id: row.id, problem: 'missing semantic disposition note' });
        if (row.disposition !== 'obsolete' && !row.targets.length) issues.push({ id: row.id, problem: 'missing targets' });
        for (const target of row.targets) {
            if (!target.file?.startsWith('src/')) throw new Error(`Target должен быть внутри src/: ${row.id}`);
            const file = inside(repo, target.file);
            if (!fs.existsSync(file)) {
                issues.push({ id: row.id, problem: 'missing target file', file: target.file });
                continue;
            }
            if (target.module !== undefined && target.module !== null) {
                if (!cache.has(file)) cache.set(file, describe(target.file, fs.readFileSync(file)));
                if (!cache.get(file).modules.some((mod) => mod.id === String(target.module))) issues.push({ id: row.id, problem: 'missing target module', target });
            }
        }
    }
    return {
        ok: !issues.length,
        items: ledger.items.length,
        issues,
        notice: 'Проверены входные хеши и полнота ledger; это не синтаксический аудит, не тесты приложения и не runtime proof.',
    };
}

function alignmentModuleMap(inventory, ledger, manual) {
    const candidates = new Map(Object.entries(inventory.moduleCandidates ?? {}));
    for (const item of inventory.items) if (item.module) candidates.set(item.module, [...(candidates.get(item.module) ?? []), ...item.candidates]);
    const moduleIds = {},
        decisions = [];
    for (const [id, rows] of candidates) {
        const ranked = new Map();
        for (const row of rows)
            if (row.module && typeof row.score === 'number') {
                const existing = ranked.get(row.module);
                if (!existing || row.score > existing.score) ranked.set(row.module, row);
            }
        const sorted = [...ranked.values()].sort((a, b) => b.score - a.score);
        const exact = [...ranked.values()].filter((row) => row.baselineEqual);
        const chosen = exact.length === 1 ? exact[0] : sorted[0]?.score >= 0.7 && sorted[0].score - (sorted[1]?.score ?? 0) >= 0.15 ? sorted[0] : null;
        if (chosen) {
            moduleIds[id] = chosen.module;
            decisions.push({ from: id, to: chosen.module, method: exact.length === 1 ? 'exact-upstream-module' : 'similarity-draft', score: chosen.score });
        }
    }
    const reviewed = new Map();
    for (const row of ledger.items) {
        if (!['ported', 'upstream'].includes(row.disposition)) continue;
        const item = inventory.items.find((item) => item.id === row.id);
        if (!item?.module) continue;
        if (!reviewed.has(item.module)) reviewed.set(item.module, new Set());
        for (const target of row.targets) if (target.module !== undefined && target.module !== null) reviewed.get(item.module).add(String(target.module));
    }
    for (const [id, values] of reviewed)
        if (values.size === 1) {
            moduleIds[id] = [...values][0];
            decisions.push({ from: id, to: moduleIds[id], method: 'reviewed-ledger' });
        }
    for (const [id, value] of Object.entries(manual ?? {})) {
        moduleIds[id] = String(value);
        decisions.push({ from: id, to: String(value), method: 'manual' });
    }
    return { moduleIds, decisions };
}

function alignPreparedItem({ repo, workDir, item: itemId, mapping, run = 'auto' }) {
    const { dir, manifest, inventory, ledger } = loadWorkspace(repo, workDir);
    const item = inventory.items.find((row) => row.id === itemId);
    if (!item) throw new Error(`Неизвестная врезка: ${itemId}`);
    if (!/\.[cm]?js$/.test(item.file)) throw new Error('AST align поддерживает JS modules/programs; для CSS/HTML используйте prepare и ручной перенос');
    if (typeof run !== 'string' || !/^[A-Za-z0-9_-]{1,64}$/.test(run)) throw new Error('--run должен быть простым именем до 64 символов');
    const prepared = outputDirectory(repo, path.relative(repo, path.join(dir, 'work', item.id)));
    const selection = json(path.join(prepared, 'selection.json'));
    if (selection.item !== item.id || selection.donor !== manifest.donor) throw new Error('Prepared selection не соответствует workspace/item');
    const output = outputDirectory(repo, path.relative(repo, path.join(prepared, 'aligned', run)));
    if (fs.existsSync(output)) throw new Error(`Alignment run уже существует; выберите новое --run: ${output}`);
    checkInputs(manifest);
    const config = mapping ? json(inside(repo, mapping)) : {};
    const manualOwner = config.moduleIds?.[item.module];
    const inferred = alignmentModuleMap(inventory, ledger, config.moduleIds);
    config.moduleIds = inferred.moduleIds;
    const module = item.module !== null;
    if (module) {
        if (manualOwner !== undefined && String(manualOwner) !== String(selection.targetModule)) throw new Error('Ручной owner module ID противоречит prepare selection');
        config.moduleIds[item.module] = String(selection.targetModule);
        inferred.decisions.push({ from: item.module, to: String(selection.targetModule), method: 'prepare-selection' });
    }
    const inputs = Object.fromEntries(['base', 'donor', 'target'].map((name) => [name, fs.readFileSync(path.join(prepared, `${name}.txt`), 'utf8')]));
    const { alignUnits } = require('./migrationAlignment.js');
    const result = alignUnits({ ...inputs, module, targetId: module ? selection.targetModule : undefined, config });
    fs.mkdirSync(output, { recursive: true });
    for (const [name, text] of Object.entries({ 'base.aligned': result.base, 'donor.aligned': result.donor, target: inputs.target })) {
        fs.writeFileSync(path.join(output, `${name}.txt`), text, { flag: 'wx' });
    }
    diff(
        repo,
        ['diff', '--no-index', '--no-ext-diff', '--', path.join(output, 'base.aligned.txt'), path.join(output, 'donor.aligned.txt')],
        path.join(output, 'mod.aligned.diff'),
    );
    diff(
        repo,
        ['diff', '--no-index', '--no-ext-diff', '--', path.join(output, 'base.aligned.txt'), path.join(output, 'target.txt')],
        path.join(output, 'upstream.aligned.diff'),
    );
    const conflicts = diff(
        repo,
        ['merge-file', '--diff3', '-p', path.join(output, 'donor.aligned.txt'), path.join(output, 'base.aligned.txt'), path.join(output, 'target.txt')],
        path.join(output, 'merge.aligned.txt'),
    );
    writeJson(path.join(output, 'bindings.json'), {
        ...result.report,
        item: item.id,
        selection,
        moduleMapDecisions: inferred.decisions,
        inputHashes: Object.fromEntries(Object.entries(inputs).map(([name, text]) => [name, hash(text)])),
        conflicts,
    });
    writeJson(path.join(output, 'mapping.template.json'), {
        ...config,
        bindings: config.bindings ?? [],
        scopes: config.scopes ?? [],
        exports: { ...config.exports, ...(module ? { [item.module]: { ...config.exports?.[item.module], ...result.report.inferredOwnExports } } : {}) },
    });
    return {
        output,
        status: result.report.status,
        rawConflicts: selection.conflicts,
        alignedConflicts: conflicts,
        mappedRootBindings: result.report.scopes[0].mapping.length,
        unresolvedRootBindings: result.report.scopes[0].unresolved,
        matchedScopes: result.report.scopes.length,
        unresolvedScopes: result.report.unresolvedScopes.length,
        missingDonorBindings: result.report.missingDonorBindings.length,
        unresolvedOwnExports: result.report.unresolvedOwnExports.length,
        captureRenames: result.report.captureRenames.base.length + result.report.captureRenames.donor.length,
        notice: 'Draft: проверьте bindings.json и aligned diff; src и ledger не изменены. Отсутствие конфликтов не доказывает совместимость.',
    };
}

function auditWorkspace({ repo, workDir }) {
    const { dir } = loadWorkspace(repo, workDir);
    const destination = path.join(dir, 'renderer-links.json');
    if (fs.existsSync(destination)) throw new Error(`Отчёт уже существует; сохраните его перед повторным audit: ${destination}`);
    const { auditRenderer } = require('./rendererMigrationAudit.js');
    const report = auditRenderer(path.join(repo, 'src/app'));
    writeJson(destination, report);
    const failures = ['missingModules', 'missingExports', 'unresolvedChunks', 'missingAssets'];
    return {
        ok: failures.every((key) => !report[key].length),
        report: destination,
        modules: report.modules,
        imports: report.imports,
        exportReferences: report.exportReferences,
        lazyReferences: report.lazyReferences,
        ...Object.fromEntries(failures.map((key) => [key, report[key].length])),
        unknownExports: report.unknownExports.length,
        globalIdentifierNames: new Set(report.globals.map((row) => row.name)).size,
    };
}

module.exports = { initWorkspace, workspaceStatus, prepareItem, alignPreparedItem, checkWorkspace, auditWorkspace };
