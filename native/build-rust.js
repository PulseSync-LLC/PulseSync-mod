const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');

function getRustBuildInfo(nativeDirectory, debug = false) {
    const config = JSON.parse(fs.readFileSync(path.join(nativeDirectory, 'native-build.json'), 'utf8'));
    if (process.platform !== 'win32' || process.arch !== 'x64') {
        throw new Error(`Rust ${config.targetName} поддерживает только Windows x64 MSVC`);
    }
    const directory = path.join(nativeDirectory, 'rust');
    const toolchainFile = fs.readFileSync(path.join(directory, 'rust-toolchain.toml'), 'utf8');
    const toolchain = toolchainFile.match(/^channel\s*=\s*"([\d.]+)"/m)?.[1];
    if (!toolchain) throw new Error('Не указана закреплённая версия Rust');
    const profile = debug ? 'debug' : 'release';
    const target = config.rustTarget;
    const executable = config.artifactExtension === 'exe';
    const compiler = execFileSync('rustc', [`+${toolchain}`, '-vV'], { cwd: directory, encoding: 'utf8', windowsHide: true }).trim();
    return {
        directory,
        toolchain,
        compiler,
        target,
        profile,
        buildToolHash: crypto.createHash('sha256').update(fs.readFileSync(__filename)).digest('hex'),
        rustflags: process.env.CARGO_ENCODED_RUSTFLAGS ?? process.env.RUSTFLAGS ?? '',
        artifactName: `${config.targetName}.${executable ? 'exe' : 'node'}`,
        builtArtifact: executable
            ? path.join(directory, 'target', target, profile, `${config.targetName}.exe`)
            : path.join(directory, 'target', 'addon', profile, `${config.targetName}.node`),
        library: executable ? null : path.join(directory, 'target', target, profile, `${config.targetName}.dll`),
    };
}

function buildRust(nativeDirectory, debug = false) {
    const info = getRustBuildInfo(nativeDirectory, debug);
    const args = [`+${info.toolchain}`, 'build', '--locked', '--target', info.target, '--target-dir', path.join(info.directory, 'target')];
    if (!debug) args.push('--release');
    execFileSync('cargo', args, { cwd: info.directory, stdio: 'inherit', windowsHide: true });
    if (info.library) {
        fs.mkdirSync(path.dirname(info.builtArtifact), { recursive: true });
        fs.copyFileSync(info.library, info.builtArtifact);
    }
    return info.builtArtifact;
}

module.exports = { getRustBuildInfo, buildRust };
