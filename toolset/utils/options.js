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
    const shouldModernize = flags.modernize ?? false;
    const shouldBuildDirectly = flags.d ?? false;
    const shouldRelease = flags.r ?? false;
    const shouldBuild = flags.b ?? false;
    const onlyUploadAppAsar = flags.onlyUploadAppAsar ?? false;
    const onlySendPatchNotes = flags.onlySendPatchNotes ?? false;
    const shouldBuildZstd = flags.buildZstd ?? false;

    core.setOldYMHashOverride(flags.oldYMHashOverride);

    const shouldDefaultBuildDest = commandName === 'build' || commandName === 'spoof' || shouldBuild || shouldRelease;
    const dest = flags.dest ?? (shouldDefaultBuildDest ? (lastExtracted ? core.constants.DEFAULT_PATCHED_DIST_PATH : core.constants.DEFAULT_DIST_PATH) : undefined);

    let src;

    if (commandName === 'extract') {
        src = flags.src;
    } else if (commandName === 'pretty' || commandName === 'modernize') {
        src = lastExtracted ? await core.extractUtils.getLatestExtractedSrcDir(true) : (flags.src ?? (await core.extractUtils.getLatestExtractedSrcDir()));
    } else {
        src = lastExtracted ? await core.extractUtils.getLatestExtractedSrcDir(true) : (flags.src ?? core.constants.SRC_PATH);
    }

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
        shouldModernize,
        shouldBuildDirectly,
        shouldRelease,
        shouldBuild,
        onlyUploadAppAsar,
        onlySendPatchNotes,
        shouldBuildZstd,
        dest,
        src,
    };
}

module.exports = {
    resolveCommandOptions,
};
