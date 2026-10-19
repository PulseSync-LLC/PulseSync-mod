const { COLLAPSED_SUBTASKS_OPTIONS } = require('../utils/commandTasks.js');
const { wrapTaskDefinitions } = require('../utils/listrOutput.js');

module.exports = {
    name: 'clearCaches',
    description: 'очищает кешированные сборки веб- и нативных модулей',
    order: 90,
    usage: 'clearCaches',
    flags: [],
    createTasks({ args }) {
        if (args._?.length !== 1) {
            throw new Error('Использование: node toolset.js clearCaches');
        }

        return [
            {
                title: 'Очистка кешей сборки модулей',
                task: async ({ core }, task) => {
                    const entries = await core.cacheUtils.getBuildCacheEntries();
                    return task.newListr(
                        wrapTaskDefinitions(
                            entries.map(({ title, paths }) => ({
                                title,
                                task: async (_context, cacheTask) => {
                                    const removedPaths = await core.cacheUtils.clearBuildCachePaths(paths);
                                    if (!removedPaths.length) {
                                        cacheTask.skip('кеш отсутствует');
                                        return;
                                    }
                                    cacheTask.output = removedPaths.join('\n');
                                },
                            })),
                        ),
                        COLLAPSED_SUBTASKS_OPTIONS,
                    );
                },
            },
        ];
    },
};
