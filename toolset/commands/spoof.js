const { createBuildTask, createPrepareReleaseAsarTask, createReleaseTask, createWorkflowTask } = require('../utils/commandTasks.js');

module.exports = {
    name: 'spoof',
    description: 'подменяет версию приложения в src на последнюю',
    order: 20,
    usage: 'spoof [-b] [-r] [-m] [--modernize] [--noNativeModules] [--dest=<path>] [--buildZstd] [--onlyUploadAppAsar] [--onlySendPatchNotes]',
    flags: ['b', 'r', 'm', 'modernize', 'noNativeModules', 'dest', 'buildZstd', 'onlyUploadAppAsar', 'onlySendPatchNotes'],
    createTasks({ options }) {
        return [
            createWorkflowTask('Workflow spoof', [
                {
                    title: 'Спуфинг версии приложения',
                    task: async (context, task) => {
                        context.state.versions = await context.core.buildUtils.spoof('extracted');
                        task.output = `${context.state.versions.oldVersion} -> ${context.state.versions.newVersion}`;
                    },
                },
                {
                    ...createBuildTask({ srcPath: undefined }),
                    enabled: () => options.shouldBuild || options.shouldRelease,
                },
                {
                    ...createPrepareReleaseAsarTask(),
                    enabled: () => (options.shouldRelease && !options.onlySendPatchNotes) || options.shouldBuildZstd,
                },
                {
                    ...createReleaseTask({ versions: (context) => context.state.versions }),
                    enabled: () => options.shouldRelease,
                },
            ]),
        ];
    },
};
