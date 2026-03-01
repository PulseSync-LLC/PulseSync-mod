module.exports = {
    name: 'adaptive-patch',
    description: 'адаптивно переносит unified diff на другую версию билда, подбирая chunk и module id по контексту',
    order: 65,
    usage: 'adaptive-patch (--src=<path> | --version=<semver>) [--patchFile=<path> | --patchDir=<path>] [--dryRun]',
    flags: ['src', 'version', 'patchFile', 'patchDir', 'dryRun'],
    async execute({ args, core, options }) {
        const targetPath = args.version ? await core.patchUtils.resolveExtractedVersionPath(args.version) : options.src;
        if (!targetPath) {
            throw new Error('Для adaptive-patch требуется --src=<path> или --version=<semver>');
        }

        const patchFiles = await core.patchUtils.resolvePatchInput({
            patchFile: args.patchFile,
            patchDir: args.patchDir,
        });

        for (const patchFile of patchFiles) {
            console.log(`Применяю patch: ${patchFile}`);
            const summary = await core.patchUtils.applyAdaptivePatchFile(targetPath, patchFile, {
                dryRun: args.dryRun ?? false,
            });

            for (const entry of summary) {
                console.log(`${entry.dryRun ? '[dry-run]' : '[applied]'} ${entry.sourcePath} -> ${entry.targetPath}`);
            }
        }
    },
};
