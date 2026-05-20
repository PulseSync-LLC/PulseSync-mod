const { createBuildTask, createDirectBuildTask, createPrepareReleaseAsarTask, createReleaseTask, createWorkflowTask } = require('../utils/commandTasks.js');

module.exports = {
    name: 'build',
    description: 'собирает проект в asar-файл',
    order: 10,
    usage: 'build [--src=<path>] [--dest=<path>] [-m] [--modernize] [-d] [--noNativeModules] [--forceOpen] [-r] [--buildZstd] [--lastExtracted] [--onlyUploadAppAsar] [--onlySendPatchNotes] [--oldYMHashOverride=<hash>]',
    flags: [
        'src',
        'dest',
        'm',
        'modernize',
        'd',
        'noNativeModules',
        'forceOpen',
        'r',
        'buildZstd',
        'lastExtracted',
        'onlyUploadAppAsar',
        'onlySendPatchNotes',
        'oldYMHashOverride',
    ],
    createTasks({ options }) {
        return [
            createWorkflowTask('Workflow build', [
                {
                    title: 'Выбор режима сборки',
                    task: (_context, task) =>
                        task.newListr([
                            {
                                ...createDirectBuildTask(),
                                enabled: () => options.shouldBuildDirectly,
                            },
                            {
                                ...createBuildTask(),
                                enabled: () => !options.shouldBuildDirectly,
                            },
                        ]),
                },
                {
                    ...createPrepareReleaseAsarTask(),
                    enabled: () => !options.shouldBuildDirectly && ((options.shouldRelease && !options.onlySendPatchNotes) || options.shouldBuildZstd),
                },
                {
                    ...createReleaseTask(),
                    enabled: () => !options.shouldBuildDirectly && options.shouldRelease,
                },
            ]),
        ];
    },
};
