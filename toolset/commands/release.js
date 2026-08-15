const { createReleaseTask, createWorkflowTask } = require('../utils/commandTasks.js');

module.exports = {
    name: 'release',
    description: 'публикует app.asar и app.asar.unpacked на GitHub и сервер, затем отправляет патчноут',
    order: 30,
    usage: 'release [--dest=<path>] [--onlyUploadAppAsar] [--onlySendPatchNotes]',
    flags: ['dest', 'onlyUploadAppAsar', 'onlySendPatchNotes'],
    createTasks() {
        return [
            createWorkflowTask('Workflow release', [
                {
                    ...createReleaseTask(),
                    title: 'Публикация release payload',
                },
            ]),
        ];
    },
};
