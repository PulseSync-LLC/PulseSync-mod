const { dimSkipReason, SKIPPED_RENDERER_STYLE, wrapTaskDefinitions } = require('./listrOutput.js');

const COLLAPSED_SUBTASKS_OPTIONS = {
    rendererOptions: {
        ...SKIPPED_RENDERER_STYLE,
        collapseSkips: true,
        collapseSubtasks: true,
        showSkipMessage: true,
        suffixSkips: true,
    },
};

const HIDDEN_SKIP_REASONS_OPTIONS = {
    rendererOptions: {
        ...SKIPPED_RENDERER_STYLE,
        collapseSkips: false,
        showSkipMessage: false,
    },
};

const EXPANDED_SKIP_REASONS_OPTIONS = {
    rendererOptions: {
        ...SKIPPED_RENDERER_STYLE,
        collapseSkips: false,
        collapseSubtasks: false,
        showSkipMessage: true,
        suffixSkips: true,
    },
};

function resolveValue(value, context) {
    return typeof value === 'function' ? value(context) : value;
}

function createWorkflowTask(title, tasks, options = {}) {
    return {
        title,
        task: (_context, task) => task.newListr(wrapTaskDefinitions(tasks), options),
    };
}

function createSkippedTask(title, message) {
    return {
        title,
        skip: message,
        task: () => {},
    };
}

function createBuildTask({
    title = 'Сборка app.asar',
    srcPath = (context) => context.options.src,
    destDir = (context) => context.options.dest,
    shouldMinify = (context) => context.options.shouldMinify,
    noNativeModules = (context) => context.options.noNativeModules,
    shouldModernize = (context) => context.options.shouldModernize,
} = {}) {
    return {
        title,
        task: (context, task) =>
            task.newListr(
                wrapTaskDefinitions([
                    {
                        title: 'Резолв source',
                        task: async (ctx, sourceTask) => {
                            ctx.state.build = {
                                cleanupPaths: [],
                                destDir: resolveValue(destDir, ctx),
                            };

                            ctx.state.build.workPath = await ctx.core.buildUtils.resolveBuildSource(resolveValue(srcPath, ctx));
                            if (!ctx.state.build.workPath) {
                                throw new Error('Не удалось резолвнуть --src');
                            }

                            sourceTask.output = ctx.state.build.workPath;
                        },
                    },
                    createMiniPlayerTask(),
                    createNativeModulesTask({ noNativeModules }),
                    {
                        title: 'Модернизация source',
                        enabled: (ctx) => resolveValue(shouldModernize, ctx),
                        task: async (ctx, modernizeTask) => {
                            ctx.state.build.workPath = await ctx.core.buildUtils.prepareModernizedBuildSource(ctx.state.build.workPath);
                            ctx.state.build.cleanupPaths.push(ctx.core.constants.MODERNIZED_SRC_PATH);
                            modernizeTask.output = ctx.state.build.workPath;
                        },
                    },
                    {
                        title: 'Минификация source',
                        enabled: (ctx) => resolveValue(shouldMinify, ctx),
                        task: async (ctx, minifyTask) => {
                            ctx.state.build.workPath = await ctx.core.buildUtils.prepareMinifiedBuildSource(ctx.state.build.workPath);
                            ctx.state.build.cleanupPaths.push(ctx.core.constants.MINIFIED_SRC_PATH);
                            minifyTask.output = ctx.state.build.workPath;
                        },
                    },
                    {
                        title: 'Архивация app.asar',
                        task: async (ctx, archiveTask) => {
                            archiveTask.output = `${ctx.state.build.workPath} -> ${ctx.state.build.destDir}`;
                            await ctx.core.buildUtils.archiveAsar(ctx.state.build.workPath, ctx.state.build.destDir);
                        },
                    },
                    {
                        title: 'Очистка временных build artifacts',
                        skip: (ctx) => !ctx.state.build.cleanupPaths.length,
                        task: async (ctx, cleanupTask) => {
                            const cleanupPaths = [...ctx.state.build.cleanupPaths];
                            await ctx.core.buildUtils.cleanupBuildArtifacts(cleanupPaths);
                            cleanupTask.output = cleanupPaths.join(', ');
                        },
                    },
                ]),
                HIDDEN_SKIP_REASONS_OPTIONS,
            ),
    };
}

function createMiniPlayerTask() {
    return {
        title: 'Сборка миниплеера',
        skip: (context) => {
            const info = context.core.buildUtils.getMiniPlayerBuildInfo();
            context.state.miniPlayerBuildInfo = info;

            if (!info.exists) {
                return 'миниплеер не найден';
            }

            if (info.upToDate) {
                return 'миниплеер актуален';
            }

            return false;
        },
        task: async (context) => {
            await context.core.buildUtils.buildMiniPlayer();
        },
    };
}

function createNativeModulesTask({ noNativeModules = (context) => context.options.noNativeModules } = {}) {
    return {
        title: 'Сборка нативных модулей',
        enabled: (context) => {
            if (resolveValue(noNativeModules, context)) {
                return false;
            }

            if (process.platform === 'darwin') {
                return false;
            }

            return true;
        },
        task: async (context, task) => {
            const moduleInfos = await context.core.buildUtils.getNativeModuleBuildInfos();

            if (!moduleInfos.length) {
                task.skip(dimSkipReason('native modules не найдены'));
                return;
            }

            return task.newListr(
                wrapTaskDefinitions(
                    moduleInfos.map((moduleInfo) => ({
                        title: moduleInfo.targetName,
                        skip: () => (moduleInfo.upToDate ? 'модуль актуален' : false),
                        task: async (ctx) => {
                            await ctx.core.buildUtils.buildNativeModule(moduleInfo.moduleName);
                        },
                    })),
                ),
                EXPANDED_SKIP_REASONS_OPTIONS,
            );
        },
    };
}

function createDirectBuildTask({
    title = 'Прямая сборка в установленную Яндекс Музыку',
    srcPath = (context) => context.options.src,
    noMinify = (context) => !context.options.shouldMinify,
    noNativeModules = (context) => context.options.noNativeModules,
    forceOpen = (context) => context.options.forceOpen,
    modernize = (context) => context.options.shouldModernize,
} = {}) {
    return {
        title,
        task: (context, task) => {
            const directBuildTasks = [
                ...(process.platform === 'darwin'
                    ? [
                          {
                              title: 'Проверка System Integrity Protection',
                              task: (ctx, sipTask) => {
                                  if (!ctx.core.integrityUtils.checkIfSystemIntegrityProtectionEnabled()) {
                                      return;
                                  }

                                  ctx.state.directBuildAborted = true;
                                  sipTask.output = 'SIP включён. Отключите SIP для File System и попробуйте снова.';
                              },
                          },
                      ]
                    : []),
                ...[
                    {
                        title: 'Закрытие Яндекс Музыки',
                        skip: (ctx) => (ctx.state.directBuildAborted ? 'direct build остановлен' : false),
                        task: (ctx, closeTask) =>
                            closeTask.newListr(
                                wrapTaskDefinitions([
                                    {
                                        title: 'Поиск процессов Яндекс Музыки',
                                        task: async (innerCtx, processesTask) => {
                                            innerCtx.state.yandexMusicProcesses = await innerCtx.core.appControlUtils.getYandexMusicProcesses();
                                            innerCtx.state.shouldReopenYandexMusic = innerCtx.state.yandexMusicProcesses.length > 0;
                                            processesTask.output = `${innerCtx.state.yandexMusicProcesses.length} процессов`;
                                        },
                                    },
                                    {
                                        title: 'Завершение процессов',
                                        skip: (innerCtx) => (innerCtx.state.yandexMusicProcesses.length ? false : 'Яндекс Музыка не запущена'),
                                        task: (innerCtx, killTask) =>
                                            killTask.newListr(
                                                wrapTaskDefinitions(
                                                    innerCtx.state.yandexMusicProcesses.map((proc) => ({
                                                        title: `PID ${proc.pid}`,
                                                        task: (_pidCtx, pidTask) => {
                                                            try {
                                                                process.kill(proc.pid);
                                                                pidTask.output = 'процесс завершён';
                                                            } catch (error) {
                                                                pidTask.output = `не удалось завершить процесс: ${error.message}`;
                                                            }
                                                        },
                                                    })),
                                                ),
                                                COLLAPSED_SUBTASKS_OPTIONS,
                                            ),
                                    },
                                ]),
                                COLLAPSED_SUBTASKS_OPTIONS,
                            ),
                    },
                    {
                        ...createBuildTask({
                            title: 'Сборка в dist Яндекс Музыки',
                            srcPath,
                            destDir: (ctx) => ctx.core.constants.DIRECT_DIST_PATH,
                            noNativeModules,
                            shouldMinify: (ctx) => !resolveValue(noMinify, ctx),
                            shouldModernize: modernize,
                        }),
                        skip: (ctx) => (ctx.state.directBuildAborted ? 'direct build остановлен' : false),
                    },
                    {
                        title: 'Обход app.asar integrity',
                        skip: (ctx) => (ctx.state.directBuildAborted ? 'direct build остановлен' : false),
                        task: (ctx, integrityTask) =>
                            integrityTask.newListr(
                                wrapTaskDefinitions([
                                    {
                                        title: 'Получение текущего app.asar hash',
                                        task: (innerCtx, hashTask) => {
                                            const hash = innerCtx.core.integrityUtils.rememberCurrentAsarHash(innerCtx.core.constants.DIRECT_DIST_PATH);
                                            hashTask.output = hash;
                                        },
                                    },
                                    {
                                        title: 'Патч integrity metadata',
                                        task: async (innerCtx) => {
                                            await new Promise((resolve) => setTimeout(resolve, 1000));
                                            await innerCtx.core.integrityUtils.bypassAsarIntegrity();
                                        },
                                    },
                                ]),
                                COLLAPSED_SUBTASKS_OPTIONS,
                            ),
                    },
                    {
                        title: 'Запуск Яндекс Музыки',
                        skip: (ctx) => {
                            if (ctx.state.directBuildAborted) return 'direct build остановлен';
                            return ctx.state.shouldReopenYandexMusic || resolveValue(forceOpen, ctx)
                                ? false
                                : 'до сборки приложение не было запущено и --forceOpen не передан';
                        },
                        task: async (ctx) => {
                            await ctx.core.appControlUtils.launchYandexMusic();
                        },
                    },
                ],
            ];

            return task.newListr(wrapTaskDefinitions(directBuildTasks));
        },
    };
}

function createPrepareReleaseAsarTask({ title = 'Подготовка app.asar.zst', dest = (context) => context.options.dest } = {}) {
    return {
        title,
        task: async (context) => {
            await context.core.buildUtils.prepareReleaseAsarArtifact(resolveValue(dest, context));
        },
    };
}

function createReleaseTask({ title = 'Публикация релиза', versions = () => undefined, dest = (context) => context.options.dest } = {}) {
    return {
        title,
        task: async (context) => {
            await context.core.releaseUtils.release({
                dest: resolveValue(dest, context),
                versions: resolveValue(versions, context),
                onlyUploadAppAsar: context.options.onlyUploadAppAsar,
                onlySendPatchNotes: context.options.onlySendPatchNotes,
            });
        },
    };
}

function createForceOpenTask() {
    return {
        title: 'Проверка запуска Яндекс Музыки',
        task: async ({ core }, task) => {
            const isYmRunning = await core.appControlUtils.isYandexMusicRunning();
            if (isYmRunning) {
                task.skip(dimSkipReason('Яндекс Музыка уже запущена'));
                return;
            }

            await core.appControlUtils.launchYandexMusic();
        },
    };
}

module.exports = {
    createBuildTask,
    createDirectBuildTask,
    createForceOpenTask,
    createPrepareReleaseAsarTask,
    createReleaseTask,
    createSkippedTask,
    createWorkflowTask,
    COLLAPSED_SUBTASKS_OPTIONS,
    EXPANDED_SKIP_REASONS_OPTIONS,
    HIDDEN_SKIP_REASONS_OPTIONS,
};
