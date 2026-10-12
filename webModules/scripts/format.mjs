import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { readdirSync } from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const require = createRequire(path.join(cwd, 'package.json'));
const linter = process.argv[2];
const files = (
    process.argv.length > 3
        ? process.argv.slice(3)
        : ['src', ...readdirSync(cwd).filter((name) => /\.config\.[cm]?[jt]s$/.test(name))]
).map((file) => path.resolve(cwd, file));

if (!['oxlint', 'eslint'].includes(linter)) {
    throw new Error('Expected oxlint or eslint as the first argument');
}

function run(tool, args) {
    const packagePath = require.resolve(`${tool}/package.json`);
    const { bin } = require(packagePath);
    const cli = path.join(path.dirname(packagePath), typeof bin === 'string' ? bin : bin[tool]);
    const result = spawnSync(process.execPath, [cli, ...args, ...files], {
        cwd,
        encoding: 'utf8',
        maxBuffer: 16 * 1024 * 1024,
    });

    if (result.error) {
        throw result.error;
    }

    return result;
}

function finish(result) {
    process.stdout.write(result.stdout ?? '');
    process.stderr.write(result.stderr ?? '');
    process.exit(result.status ?? 1);
}

let result = run('oxfmt', []);
let previousDiagnostics;

if (result.status !== 0) {
    finish(result);
}

for (let pass = 0; pass < 10; pass++) {
    const lint = run(linter, ['--fix']);

    if (lint.status !== 0 && lint.status !== 1) {
        finish(lint);
    }

    result = run('oxfmt', []);

    if (result.status !== 0) {
        finish(result);
    }

    result = run(linter, []);

    if (result.status !== 1) {
        finish(result);
    }

    const diagnostics = result.stdout + result.stderr;

    if (diagnostics === previousDiagnostics) {
        finish(result);
    }

    previousDiagnostics = diagnostics;
}

finish(result);
