const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

function getRustBuildInfo(debug = false) {
    if (process.platform !== 'win32' || process.arch !== 'x64') {
        throw new Error('Rust setIconicThumbnail поддерживает только Windows x64 MSVC');
    }

    const config = require('./native-build.json');
    const directory = path.join(__dirname, 'rust');
    const toolchainFile = fs.readFileSync(path.join(directory, 'rust-toolchain.toml'), 'utf8');
    const toolchain = toolchainFile.match(/^channel\s*=\s*"([\d.]+)"/m)?.[1];
    if (!toolchain) throw new Error('Не указана закреплённая версия Rust');
    const profile = debug ? 'debug' : 'release';
    const target = config.rustTarget;
    const compiler = execFileSync('rustc', [`+${toolchain}`, '-vV'], { cwd: directory, encoding: 'utf8', windowsHide: true }).trim();

    return {
        directory,
        toolchain,
        compiler,
        target,
        profile,
        rustflags: process.env.CARGO_ENCODED_RUSTFLAGS ?? process.env.RUSTFLAGS ?? '',
        builtNode: path.join(directory, 'target', 'addon', profile, `${config.targetName}.node`),
        library: path.join(directory, 'target', target, profile, `${config.targetName}.dll`),
    };
}

function buildRust(debug = false) {
    const info = getRustBuildInfo(debug);
    const args = [`+${info.toolchain}`, 'build', '--locked', '--target', info.target, '--target-dir', path.join(info.directory, 'target')];
    if (!debug) args.push('--release');
    execFileSync('cargo', args, { cwd: info.directory, stdio: 'inherit', windowsHide: true });
    fs.mkdirSync(path.dirname(info.builtNode), { recursive: true });
    fs.copyFileSync(info.library, info.builtNode);
    return info.builtNode;
}

if (require.main === module) {
    buildRust(process.argv.includes('--debug'));
}

module.exports = { getRustBuildInfo, buildRust };
