const { createDirectBuildTask, createWorkflowTask } = require('../utils/commandTasks.js');

module.exports = {
    name: 'patch',
    description: 'патчит извлечённый билд для разблокировки девтулзов и дев панели',
    order: 60,
    usage: 'patch [--src=<path>] [-d] [-m] [--modernize] [--noNativeModules] [--forceOpen]',
    flags: ['src', 'd', 'm', 'modernize', 'noNativeModules', 'forceOpen'],
    createTasks({ options }) {
        return [
            createWorkflowTask('Workflow patch', [
                {
                    title: 'Патчинг extracted-билда',
                    task: async ({ core }) => {
                        await core.patchUtils.patchExtractedBuild(options.src);
                    },
                },
                {
                    ...createDirectBuildTask(),
                    enabled: () => options.shouldBuildDirectly,
                },
            ]),
        ];
    },
};
