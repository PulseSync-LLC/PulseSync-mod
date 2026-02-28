async function resolveCommandOptions(commandName, flags, core) {
    const force = flags.f ?? false;
    const forceOpen = flags.forceOpen ?? false;
    const lastExtracted = flags.lastExtracted ?? false;
    const extractType = flags.extractType ?? 'direct';
    const withoutPure = flags.withoutPure ?? false;
    const noNativeModules = commandName === 'extract' || lastExtracted ? true : (flags.noNativeModules ?? false);
    const downloadVersion = flags.version;
    const shouldPatch = flags.p ?? false;
    const shouldMinify = flags.m ?? false;
    const shouldBuildDirectly = flags.d ?? false;
    const shouldRelease = flags.r ?? false;
    const shouldBuild = flags.b ?? false;
    const onlyUploadAppAsar = flags.onlyUploadAppAsar ?? false;

    core.setOldYMHashOverride(flags.oldYMHashOverride);

    const dest = flags.dest ?? (lastExtracted ? core.constants.DEFAULT_PATCHED_DIST_PATH : core.constants.DEFAULT_DIST_PATH);
    const src = commandName === 'extract' ? flags.src : lastExtracted ? await core.getLatestExtractedSrcDir(true) : (flags.src ?? core.constants.SRC_PATH);

    return {
        commandName,
        force,
        forceOpen,
        lastExtracted,
        extractType,
        withoutPure,
        noNativeModules,
        downloadVersion,
        shouldPatch,
        shouldMinify,
        shouldBuildDirectly,
        shouldRelease,
        shouldBuild,
        onlyUploadAppAsar,
        dest,
        src,
    };
}

module.exports = {
    resolveCommandOptions,
};
