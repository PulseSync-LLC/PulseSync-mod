const path = require('path');

module.exports = {
    name: 'migrate-report',
    description: 'строит отчёт для миграции: baseline extracted -> src и optional baseline -> target extracted',
    order: 70,
    usage: 'migrate-report [--baseline=<semver|path>] [--target=<semver|path>] [--srcRoot=<path>] [--reportDir=<path>]',
    flags: ['baseline', 'target', 'srcRoot', 'reportDir'],
    async execute({ args, core, options }) {
        const baselineRef = args.baseline ?? '5.90.0';
        const srcRoot = args.srcRoot ? path.resolve(core.constants.REPO_ROOT, args.srcRoot) : options.src;
        const baselineRoot = await core.patchUtils.resolveExtractedVersionPath(baselineRef);
        const targetRoot = args.target ? await core.patchUtils.resolveExtractedVersionPath(args.target) : null;
        const reportDir = args.reportDir ? path.resolve(core.constants.REPO_ROOT, args.reportDir) : null;

        const report = await core.migrationUtils.analyzeMigration({
            baselineRoot,
            srcRoot,
            targetRoot,
            reportDir,
        });

        console.log(`Baseline: ${baselineRoot}`);
        console.log(`Source: ${srcRoot}`);
        if (targetRoot) {
            console.log(`Target: ${targetRoot}`);
        }
        console.log('');
        console.log(`app src diff: +${report.baselineToSrc.appDiff.counts.added} / ~${report.baselineToSrc.appDiff.counts.changed} / -${report.baselineToSrc.appDiff.counts.removed}`);
        console.log(
            `main src custom signals: +${report.baselineToSrc.mainSignals.counts.added} / -${report.baselineToSrc.mainSignals.counts.removed} относительно baseline`,
        );
        console.log(
            `preload src custom signals: +${report.baselineToSrc.preloadSignals.counts.added} / -${report.baselineToSrc.preloadSignals.counts.removed} относительно baseline`,
        );
        console.log(
            `src event constants: +${report.baselineToSrc.eventConstants.counts.added} / -${report.baselineToSrc.eventConstants.counts.removed} относительно baseline`,
        );
        const srcCustomFeatures = report.featureAudit.filter((feature) => feature.status.customInSrc);
        console.log(`src custom feature anchors: ${srcCustomFeatures.length}`);

        if (report.baselineToTarget) {
            console.log('');
            console.log(
                `app target diff: +${report.baselineToTarget.appDiff.counts.added} / ~${report.baselineToTarget.appDiff.counts.changed} / -${report.baselineToTarget.appDiff.counts.removed}`,
            );
            console.log(
                `new upstream main signals to merge: ${report.mergeHints.mainSignalsToMerge.length}`,
            );
            console.log(
                `new upstream preload signals to merge: ${report.mergeHints.preloadSignalsToMerge.length}`,
            );
            console.log(
                `new upstream event constants to merge: ${report.mergeHints.eventConstantsToMerge.length}`,
            );
            console.log(`overlapping app files: ${report.mergeHints.appChangedOverlap.length}`);
            console.log(`custom src features missing in target: ${report.mergeHints.featuresMissingInTarget.length}`);
            report.mergeHints.featuresMissingInTarget.forEach((feature) => {
                console.log(`  - ${feature.title}`);
            });
        }

        console.log('');
        console.log(`Отчёт сохранён: ${report.artifacts.reportPath}`);
        console.log(`JSON сохранён: ${report.artifacts.summaryPath}`);
    },
};
