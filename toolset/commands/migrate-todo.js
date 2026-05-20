const path = require('path');
const { createWorkflowTask } = require('../utils/commandTasks.js');

module.exports = {
    name: 'migrate-todo',
    description: 'строит практический todo для миграции: какие feature-врезки и сигналы нужно перенести в новую версию',
    order: 71,
    usage: 'migrate-todo [--baseline=<semver|path>] [--target=<semver|path>] [--srcRoot=<path>] [--reportDir=<path>]',
    flags: ['baseline', 'target', 'srcRoot', 'reportDir'],
    createTasks({ args, options }) {
        return [
            createWorkflowTask('Workflow migrate-todo', [
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
                    title: 'Анализ migration diff',
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
                    title: 'Построение TODO',
                    task: async (context, task) => {
                        context.state.todo = context.core.migrationUtils.buildMigrationTodo(context.state.report);
                        context.state.artifacts = await context.core.migrationUtils.writeMigrationTodo(context.state.todo, context.state.report.context.reportDir);
                        task.output = `${context.state.todo.items.length} пунктов`;
                    },
                },
                {
                    title: 'Вывод TODO миграции',
                    task: async ({ state }) => {
                        const { artifacts, baselineRoot, srcRoot, targetRoot, todo } = state;

                        console.log(`Базовый билд: ${baselineRoot}`);
                        console.log(`Исходники: ${srcRoot}`);
                        if (targetRoot) {
                            console.log(`Целевой билд: ${targetRoot}`);
                        }

                        console.log('');
                        console.log(`Пунктов TODO: ${todo.items.length}`);
                        console.log(`main-сигналов: ${todo.summary.mainSignalsToMerge}`);
                        console.log(`preload-сигналов: ${todo.summary.preloadSignalsToMerge}`);
                        console.log(`констант событий: ${todo.summary.eventConstantsToMerge}`);
                        console.log(`отсутствующих фич: ${todo.summary.missingFeatures}`);

                        const topFeatures = todo.items.filter((item) => item.type === 'feature').slice(0, 8);
                        if (topFeatures.length) {
                            console.log('');
                            console.log('Фичи для восстановления:');
                            topFeatures.forEach((item) => {
                                const targetPreview = item.targetCandidates.slice(0, 3).join(', ') || 'кандидаты не найдены';
                                console.log(`- ${item.title}`);
                                console.log(`  src: ${item.sourceFiles.slice(0, 3).join(', ')}`);
                                console.log(`  цель: ${targetPreview}`);
                            });
                        }

                        console.log('');
                        console.log(`TODO сохранён: ${artifacts.todoPath}`);
                        console.log(`TODO JSON сохранён: ${artifacts.todoJsonPath}`);
                    },
                },
            ]),
        ];
    },
};
