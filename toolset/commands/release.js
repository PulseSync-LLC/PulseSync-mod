const { createReleaseTask, createWorkflowTask } = require('../utils/commandTasks.js');

module.exports = {
    name: 'release',
    description: 'загружает asar на сервер и отправляет патчноут',
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
