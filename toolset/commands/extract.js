const { createBuildTask, createDirectBuildTask, createWorkflowTask } = require('../utils/commandTasks.js');

module.exports = {
    name: 'extract',
    description: 'извлекает новый билд из приложения',
    order: 50,
    usage: 'extract [--src=<path>] [--extractType=<type>] [--withoutPure] [-f] [-p] [-d] [-m] [--modernize] [-b] [--forceOpen]',
    flags: ['src', 'extractType', 'withoutPure', 'f', 'p', 'd', 'm', 'modernize', 'b', 'forceOpen'],
    createTasks({ options }) {
        return [
            createWorkflowTask('Workflow extract', [
                {
                    title: 'Извлечение билда',
                    task: async (context, task) => {
                        task.output = `source: ${options.src ?? options.extractType}`;
                        const { extracted } = await context.core.extractUtils.extractBuild(options.force, options.src, options.extractType, !options.withoutPure);
                        context.state.extracted = extracted;
                        task.output = `extracted: ${extracted}`;
                    },
                },
                {
                    title: 'Постобработка extracted-билда',
                    task: (_context, task) =>
                        task.newListr([
                            {
                                title: 'Патчинг извлечённого билда',
                                enabled: () => options.shouldPatch,
                                task: async (context) => {
                                    await context.core.patchUtils.patchExtractedBuild(context.state.extracted);
                                },
                            },
                            {
                                ...createDirectBuildTask({ srcPath: (context) => context.state.extracted }),
                                enabled: () => options.shouldBuildDirectly,
                            },
                            {
                                ...createBuildTask({
                                    title: 'Сборка извлечённого билда',
                                    srcPath: (context) => context.state.extracted,
                                    destDir: (context) => context.core.constants.DEFAULT_PATCHED_DIST_PATH,
                                }),
                                enabled: () => options.shouldBuild,
                            },
                        ]),
                },
            ]),
        ];
    },
};
