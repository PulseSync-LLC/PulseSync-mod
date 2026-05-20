const path = require('path');
const { createWorkflowTask } = require('../utils/commandTasks.js');

module.exports = {
    name: 'migrate-report',
    description: 'строит отчёт для миграции: baseline extracted -> src и optional baseline -> target extracted',
    order: 70,
    usage: 'migrate-report [--baseline=<semver|path>] [--target=<semver|path>] [--srcRoot=<path>] [--reportDir=<path>]',
    flags: ['baseline', 'target', 'srcRoot', 'reportDir'],
    createTasks({ args, options }) {
        return [
            createWorkflowTask('Workflow migrate-report', [
                {
                    title: 'Разрешение входов миграции',
                    task: (_context, task) =>
                        task.newListr([
                            {
                                title: 'Baseline build',
                                task: async (context, baselineTask) => {
                                    const baselineRef = args.baseline ?? '5.90.0';
                                    context.state.baselineRoot = await context.core.patchUtils.resolveExtractedVersionPath(baselineRef);
                                    baselineTask.output = context.state.baselineRoot;
                                },
                            },
                            {
                                title: 'Source root',
                                task: (context, sourceTask) => {
                                    context.state.srcRoot = args.srcRoot ? path.resolve(context.core.constants.REPO_ROOT, args.srcRoot) : options.src;
                                    sourceTask.output = context.state.srcRoot;
                                },
                            },
                            {
                                title: 'Target build',
                                enabled: () => Boolean(args.target),
                                task: async (context, targetTask) => {
                                    context.state.targetRoot = await context.core.patchUtils.resolveExtractedVersionPath(args.target);
                                    targetTask.output = context.state.targetRoot;
                                },
                            },
                            {
                                title: 'Report directory',
                                task: (context, reportDirTask) => {
                                    context.state.reportDir = args.reportDir ? path.resolve(context.core.constants.REPO_ROOT, args.reportDir) : null;
                                    reportDirTask.output = context.state.reportDir ?? 'default';
                                },
                            },
                        ]),
                },
                {
                    title: 'Анализ diff и migration hints',
                    task: async (context) => {
                        const { baselineRoot, reportDir, srcRoot, targetRoot = null } = context.state;

                        context.state.report = await context.core.migrationUtils.analyzeMigration({
                            baselineRoot,
                            srcRoot,
                            targetRoot,
                            reportDir,
                        });
                    },
                },
                {
                    title: 'Вывод отчёта миграции',
                    task: async (context) => {
                        const { baselineRoot, report, srcRoot, targetRoot } = context.state;

                        console.log(`Базовый билд: ${baselineRoot}`);
                        console.log(`Исходники: ${srcRoot}`);
                        if (targetRoot) {
                            console.log(`Целевой билд: ${targetRoot}`);
                        }

                        console.log('');
                        console.log(
                            `diff app/src: +${report.baselineToSrc.appDiff.counts.added} / ~${report.baselineToSrc.appDiff.counts.changed} / -${report.baselineToSrc.appDiff.counts.removed}`,
                        );
                        console.log(
                            `кастомные main-сигналы в src: +${report.baselineToSrc.mainSignals.counts.added} / -${report.baselineToSrc.mainSignals.counts.removed} относительно baseline`,
                        );
                        console.log(
                            `кастомные preload-сигналы в src: +${report.baselineToSrc.preloadSignals.counts.added} / -${report.baselineToSrc.preloadSignals.counts.removed} относительно baseline`,
                        );
                        console.log(
                            `константы событий в src: +${report.baselineToSrc.eventConstants.counts.added} / -${report.baselineToSrc.eventConstants.counts.removed} относительно baseline`,
                        );

                        const srcCustomFeatures = report.featureAudit.filter((feature) => feature.status.customInSrc);
                        console.log(`кастомных feature-якорей в src: ${srcCustomFeatures.length}`);

                        if (report.baselineToTarget) {
                            console.log('');
                            console.log(
                                `diff app/целевого билда: +${report.baselineToTarget.appDiff.counts.added} / ~${report.baselineToTarget.appDiff.counts.changed} / -${report.baselineToTarget.appDiff.counts.removed}`,
                            );
                            console.log(`новых upstream main-сигналов для переноса: ${report.mergeHints.mainSignalsToMerge.length}`);
                            console.log(`новых upstream preload-сигналов для переноса: ${report.mergeHints.preloadSignalsToMerge.length}`);
                            console.log(`новых upstream констант событий для переноса: ${report.mergeHints.eventConstantsToMerge.length}`);
                            console.log(`пересекающихся app-файлов: ${report.mergeHints.appChangedOverlap.length}`);
                            console.log(`кастомных src-фич, отсутствующих в целевом билде: ${report.mergeHints.featuresMissingInTarget.length}`);
                            report.mergeHints.featuresMissingInTarget.forEach((feature) => {
                                console.log(`  - ${feature.title}`);
                            });
                        }

                        console.log('');
                        console.log(`Отчёт сохранён: ${report.artifacts.reportPath}`);
                        console.log(`JSON сохранён: ${report.artifacts.summaryPath}`);
                    },
                },
            ]),
        ];
    },
};
