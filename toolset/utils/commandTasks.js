const { Listr, PRESET_TIMER } = require('listr2');
const { dimSkipReason, SKIPPED_RENDERER_STYLE, wrapTaskDefinitions } = require('./listrOutput.js');

const COLLAPSED_SUBTASKS_OPTIONS = {
    rendererOptions: {
        ...SKIPPED_RENDERER_STYLE,
        collapseSkips: true,
        collapseSubtasks: true,
        showSkipMessage: true,
        suffixSkips: true,
        timer: PRESET_TIMER,
    },
};

const HIDDEN_SKIP_REASONS_OPTIONS = {
    rendererOptions: {
        ...SKIPPED_RENDERER_STYLE,
        collapseSkips: false,
        showSkipMessage: false,
        timer: PRESET_TIMER,
    },
};

const EXPANDED_SKIP_REASONS_OPTIONS = {
    rendererOptions: {
        ...SKIPPED_RENDERER_STYLE,
        collapseSkips: false,
        collapseSubtasks: false,
        showSkipMessage: true,
        suffixSkips: true,
        timer: PRESET_TIMER,
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
    beforeReplace,
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
                    {
                        title: 'Синхронизация версии мода',
                        task: async (ctx, versionTask) => {
                            const result = await ctx.core.packageUtils.syncModVersion(ctx.state.build.workPath);
                            if (result.skipped) {
                                versionTask.skip('секция modification отсутствует');
                                return;
                            }
                            versionTask.output = result.changed ? `${result.oldVersion ?? 'не задана'} -> ${result.newVersion}` : result.newVersion;
                        },
                    },
                    {
                        title: 'Установка зависимостей source',
                        task: async (ctx, dependenciesTask) => {
                            dependenciesTask.output = ctx.state.build.workPath;
                            ctx.core.buildUtils.installSourceDependencies(ctx.state.build.workPath);
                        },
                    },
                    createModulesTask({ noNativeModules }),
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
                            await ctx.core.buildUtils.archiveAsar(ctx.state.build.workPath, ctx.state.build.destDir, {
                                beforeReplace: beforeReplace ? () => beforeReplace(ctx, archiveTask) : undefined,
                            });
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

function createModulesTask({ noNativeModules }) {
    return {
        title: 'Сборка модулей приложения',
        task: (_context, task) =>
            createParallelModuleBuilds(
                task,
                [
                    {
                        title: 'Сборка веб-модулей',
                        task: (_ctx, webTask) => createParallelModuleBuilds(webTask, [createMiniPlayerTask(), createWebHostTask(), createRuntimeTask()], 'веб-модули'),
                    },
                    {
                        title: 'Сборка нативных модулей',
                        enabled: (ctx) => !resolveValue(noNativeModules, ctx) && process.platform !== 'darwin',
                        task: async (ctx, nativeTask) => {
                            const moduleInfos = await ctx.core.buildUtils.getNativeModuleBuildInfos();
                            if (!moduleInfos.length) {
                                nativeTask.skip(dimSkipReason('native modules не найдены'));
                                return;
                            }
                            return createParallelModuleBuilds(
                                nativeTask,
                                moduleInfos.map((moduleInfo) => ({
                                    title: moduleInfo.targetName,
                                    skip: () => (moduleInfo.upToDate ? 'модуль актуален' : false),
                                    task: async (innerCtx) => {
                                        await innerCtx.core.buildUtils.buildNativeModule(moduleInfo.moduleName);
                                    },
                                })),
                                'нативные модули',
                            );
                        },
                    },
                ],
                'модули',
            ),
    };
}

function createParallelModuleBuilds(task, definitions, moduleType) {
    const buildErrors = [];
    const modules = task.newListr(
        wrapTaskDefinitions(
            definitions.map((definition) => ({
                ...definition,
                exitOnError: false,
                task: async (context, moduleTask) => {
                    try {
                        const result = await definition.task(context, moduleTask);
                        if (result instanceof Listr) {
                            const runSubtasks = result.run.bind(result);
                            result.run = async (ctx) => {
                                try {
                                    return await runSubtasks(ctx);
                                } catch (error) {
                                    buildErrors.push(error);
                                    throw error;
                                }
                            };
                        }
                        return result;
                    } catch (error) {
                        buildErrors.push(error);
                        throw error;
                    }
                },
            })),
        ),
        { ...EXPANDED_SKIP_REASONS_OPTIONS, concurrent: true, collectErrors: false },
    );
    const runModules = modules.run.bind(modules);
    modules.run = async (context) => {
        const result = await runModules(context);

        if (buildErrors.length) {
            throw new AggregateError(buildErrors, `Не удалось собрать ${moduleType}: ${buildErrors.map((error) => error.message).join('; ')}`);
        }
        return result;
    };
    return modules;
}

function createMiniPlayerTask() {
    return {
        title: 'Миниплеер',
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

function createWebHostTask() {
    return createRendererWebModuleTask({
        title: 'PulseSync WebHost',
        missingMessage: 'PulseSync WebHost не найден',
        getInfo: 'getWebHostBuildInfo',
        build: 'buildWebHost',
        install: 'installWebHostBuild',
    });
}

function createRuntimeTask() {
    return createRendererWebModuleTask({
        title: 'PulseSync Runtime',
        missingMessage: 'PulseSync Runtime не найден',
        getInfo: 'getRuntimeBuildInfo',
        build: 'buildRuntime',
        install: 'installRuntimeBuild',
    });
}

function createRendererWebModuleTask({ title, missingMessage, getInfo, build, install }) {
    return {
        title,
        task: async (context, task) => {
            const info = context.core.buildUtils[getInfo]();
            if (!info.exists) throw new Error(missingMessage);
            if (!info.upToDate) await context.core.buildUtils[build]();
            task.output = await context.core.buildUtils[install](context.state.build.workPath);
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
                        ...createBuildTask({
                            title: 'Сборка в dist Яндекс Музыки',
                            srcPath,
                            destDir: (ctx) => ctx.core.constants.DIRECT_DIST_PATH,
                            noNativeModules,
                            shouldMinify: (ctx) => !resolveValue(noMinify, ctx),
                            shouldModernize: modernize,
                            beforeReplace: async (ctx, archiveTask) => {
                                archiveTask.title = 'Установка app.asar';
                                ctx.core.integrityUtils.rememberCurrentAsarHash(ctx.core.constants.DIRECT_DIST_PATH);
                                ctx.state.shouldReopenYandexMusic = await ctx.core.appControlUtils.closeYandexMusic();
                            },
                        }),
                        skip: (ctx) => (ctx.state.directBuildAborted ? 'direct build остановлен' : false),
                    },
                    {
                        title: 'Обход app.asar integrity',
                        skip: (ctx) => (ctx.state.directBuildAborted ? 'direct build остановлен' : false),
                        task: async (ctx) => {
                            await new Promise((resolve) => setTimeout(resolve, 1000));
                            await ctx.core.integrityUtils.bypassAsarIntegrity();
                        },
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
        task: (context, task) => {
            const exclusiveModes = [
                ['onlyUploadAppAsar', context.options.onlyUploadAppAsar],
                ['onlyUploadUnpacked', context.options.onlyUploadUnpacked],
                ['onlySendPatchNotes', context.options.onlySendPatchNotes],
            ].filter(([, enabled]) => enabled);

            if (exclusiveModes.length > 1) {
                throw new Error(`Release: режимы ${exclusiveModes.map(([name]) => name).join(', ')} нельзя использовать вместе`);
            }

            if (context.options.onlyUploadUnpacked) {
                return task.newListr(
                    wrapTaskDefinitions([
                        {
                            title: 'Загрузка app.asar.unpacked',
                            task: async (ctx) => {
                                await ctx.core.releaseUtils.uploadReleaseUnpacked({
                                    dest: resolveValue(dest, ctx),
                                });
                            },
                        },
                    ]),
                    EXPANDED_SKIP_REASONS_OPTIONS,
                );
            }

            return task.newListr(
                wrapTaskDefinitions([
                    {
                        title: 'Подготовка release payload',
                        task: async (ctx, payloadTask) => {
                            ctx.state.releasePayload = await ctx.core.releaseUtils.prepareReleasePayload({
                                dest: resolveValue(dest, ctx),
                                versions: resolveValue(versions, ctx),
                            });
                            payloadTask.output = `PulseSync ${ctx.state.releasePayload.version}, Яндекс Музыка ${ctx.state.releasePayload.ymVersion}`;
                        },
                    },
                    {
                        title: 'Подготовка GitHub draft',
                        skip: (ctx) => (ctx.options.onlyUploadAppAsar || ctx.options.onlySendPatchNotes ? 'отключено выбранным режимом release' : false),
                        task: async (ctx) => {
                            const payload = ctx.state.releasePayload;
                            ctx.state.githubRelease = await ctx.core.releaseUtils.prepareGitHubRelease(payload.version, payload.dest, payload.patchNote);
                        },
                    },
                    {
                        title: 'Загрузка app.asar',
                        skip: (ctx) => (ctx.options.onlySendPatchNotes ? 'отключено режимом onlySendPatchNotes' : false),
                        task: async (ctx) => {
                            await ctx.core.releaseUtils.uploadReleaseAppAsar(ctx.state.releasePayload);
                        },
                    },
                    {
                        title: 'Публикация GitHub release',
                        skip: (ctx) => (ctx.options.onlyUploadAppAsar || ctx.options.onlySendPatchNotes ? 'отключено выбранным режимом release' : false),
                        task: async (ctx) => {
                            await ctx.core.releaseUtils.publishGitHubRelease(ctx.state.githubRelease);
                        },
                    },
                    {
                        title: 'Отправка патчноута в Discord',
                        skip: (ctx) => (ctx.options.onlyUploadAppAsar ? 'отключено режимом onlyUploadAppAsar' : false),
                        task: async (ctx) => {
                            await ctx.core.releaseUtils.sendPatchNoteToDiscord(ctx.state.releasePayload.patchNote);
                        },
                    },
                ]),
                EXPANDED_SKIP_REASONS_OPTIONS,
            );
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
