const { COLLAPSED_SUBTASKS_OPTIONS, createWorkflowTask } = require('../utils/commandTasks.js');
const { wrapTaskDefinitions } = require('../utils/listrOutput.js');

module.exports = {
    name: 'adaptive-patch',
    description: 'адаптивно переносит unified diff на другую версию билда, подбирая chunk и module id по контексту',
    order: 65,
    usage: 'adaptive-patch (--src=<path> | --version=<semver>) [--patchFile=<path> | --patchDir=<path>] [--dryRun]',
    flags: ['src', 'version', 'patchFile', 'patchDir', 'dryRun'],
    createTasks({ args, options }) {
        return [
            createWorkflowTask('Workflow adaptive-patch', [
                {
                    title: 'Разрешение target',
                    task: async (context, task) => {
                        let version = args.version;

                        if (version === 'latest') version = await context.core.extractUtils.getLatestExtractedVersion();

                        const targetPath = version ? await context.core.patchUtils.resolveExtractedVersionPath(version) : options.src;
                        if (!targetPath) {
                            throw new Error('Для adaptive-patch требуется --src=<path> или --version=<semver>');
                        }

                        context.state.targetPath = targetPath;
                        task.output = targetPath;
                    },
                },
                {
                    title: 'Разрешение patch input',
                    task: async (context, task) => {
                        context.state.patchFiles = await context.core.patchUtils.resolvePatchInput({
                            patchFile: args.patchFile,
                            patchDir: args.patchDir,
                        });

                        task.output = `${context.state.patchFiles.length} patch-файлов`;
                    },
                },
                {
                    title: 'Применение patch-файлов',
                    skip: (context) => (context.state.patchFiles.length ? false : 'patch-файлы не найдены'),
                    task: (context, task) =>
                        task.newListr(
                            () =>
                                wrapTaskDefinitions(
                                    context.state.patchFiles.map((patchFile) => ({
                                        title: patchFile,
                                        task: async (ctx, patchTask) => {
                                            const summary = await ctx.core.patchUtils.applyAdaptivePatchFile(ctx.state.targetPath, patchFile, {
                                                dryRun: args.dryRun ?? false,
                                            });

                                            patchTask.output = `${summary.length} изменений`;
                                            for (const entry of summary) {
                                                console.log(`${entry.dryRun ? '[dry-run]' : '[применён]'} ${entry.sourcePath} -> ${entry.targetPath}`);
                                            }
                                        },
                                    })),
                                ),
                            COLLAPSED_SUBTASKS_OPTIONS,
                        ),
                },
            ]),
        ];
    },
};
