use std::{
    io,
    os::windows::{ffi::OsStringExt, process::CommandExt},
    process::Command,
};
use windows_sys::Win32::System::{
    SystemInformation::GetSystemDirectoryW, Threading::CREATE_NO_WINDOW,
};

pub fn configure(sid: &str, uninstall: bool) -> io::Result<()> {
    let executable = std::env::current_exe()?;
    let mut system_dir = [0u16; 260];
    let length =
        unsafe { GetSystemDirectoryW(system_dir.as_mut_ptr(), system_dir.len() as u32) } as usize;
    if length == 0 || length >= system_dir.len() {
        return Err(io::Error::last_os_error());
    }
    let system_dir = std::path::PathBuf::from(std::ffi::OsString::from_wide(&system_dir[..length]));
    let windows_dir = system_dir.parent().ok_or(io::ErrorKind::NotFound)?;
    let powershell_dir = system_dir.join(r"WindowsPowerShell\v1.0");
    let powershell = powershell_dir.join("powershell.exe");
    let status = Command::new(powershell)
        .args([
            "-NoProfile",
            "-NonInteractive",
            "-Command",
            include_str!("install.ps1"),
        ])
        .env_clear()
        .env("SystemRoot", windows_dir)
        .env("WINDIR", windows_dir)
        .env("PATH", &system_dir)
        .env("PSModulePath", powershell_dir.join("Modules"))
        .current_dir(&system_dir)
        .env("PULSESYNC_HOTKEYS_INSTALLER", executable)
        .env("PULSESYNC_HOTKEYS_USER", sid)
        .env(
            "PULSESYNC_HOTKEYS_REMOVE",
            if uninstall { "1" } else { "0" },
        )
        .creation_flags(CREATE_NO_WINDOW)
        .status()?;
    if status.success() {
        Ok(())
    } else {
        Err(io::Error::other("Task installation failed"))
    }
}
