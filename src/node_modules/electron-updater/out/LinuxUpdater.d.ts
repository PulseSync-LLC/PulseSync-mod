import { AllPublishOptions } from "builder-util-runtime";
import { AppAdapter } from "./AppAdapter";
import { BaseUpdater } from "./BaseUpdater";
export declare abstract class LinuxUpdater extends BaseUpdater {
    constructor(options?: AllPublishOptions | null, app?: AppAdapter);
    /**
     * Returns true if the current process is running as root.
     */
    protected isRunningAsRoot(): boolean;
    /**
     * Sanitizies the installer path for using with command line tools.
     */
    protected get installerPath(): string | null;
    protected runCommandWithSudoIfNeeded(commandWithArgs: string[]): string;
    protected sudoWithArgs(installComment: string): string[];
    protected hasCommand(cmd: string): boolean;
    protected determineSudoCommand(): string;
    /**
     * Detects the package manager to use based on the available commands.
     * Allows overriding the default behavior by setting the ELECTRON_BUILDER_LINUX_PACKAGE_MANAGER environment variable.
     * If the environment variable is set, it will be used directly. (This is useful for testing each package manager logic path.)
     * Otherwise, it checks for the presence of the specified package manager commands in the order provided.
     * @param pms - An array of package manager commands to check for, in priority order.
     * @returns The detected package manager command or "unknown" if none are found.
     */
    protected detectPackageManager(pms: string[]): string;
}
