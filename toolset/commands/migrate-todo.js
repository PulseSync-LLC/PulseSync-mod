const path = require('path');

module.exports = {
    name: 'migrate-todo',
    description: 'строит практический todo для миграции: какие feature-врезки и сигналы нужно перенести в новую версию',
    order: 71,
    usage: 'migrate-todo [--baseline=<semver|path>] [--target=<semver|path>] [--srcRoot=<path>] [--reportDir=<path>]',
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
        const todo = core.migrationUtils.buildMigrationTodo(report);
        const artifacts = await core.migrationUtils.writeMigrationTodo(todo, report.context.reportDir);

        console.log(`Baseline: ${baselineRoot}`);
        console.log(`Source: ${srcRoot}`);
        if (targetRoot) {
            console.log(`Target: ${targetRoot}`);
        }
        console.log('');
        console.log(`TODO items: ${todo.items.length}`);
        console.log(`main signals: ${todo.summary.mainSignalsToMerge}`);
        console.log(`preload signals: ${todo.summary.preloadSignalsToMerge}`);
        console.log(`event constants: ${todo.summary.eventConstantsToMerge}`);
        console.log(`missing features: ${todo.summary.missingFeatures}`);

        const topFeatures = todo.items.filter((item) => item.type === 'feature').slice(0, 8);
        if (topFeatures.length) {
            console.log('');
            console.log('Features to restore:');
            topFeatures.forEach((item) => {
                const targetPreview = item.targetCandidates.slice(0, 3).join(', ') || 'no candidates';
                console.log(`- ${item.title}`);
                console.log(`  src: ${item.sourceFiles.slice(0, 3).join(', ')}`);
                console.log(`  target: ${targetPreview}`);
            });
        }

        console.log('');
        console.log(`TODO сохранён: ${artifacts.todoPath}`);
        console.log(`TODO JSON сохранён: ${artifacts.todoJsonPath}`);
    },
};
