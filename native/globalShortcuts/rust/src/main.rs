#![windows_subsystem = "windows"]

mod installer;
mod pipe;
mod raw_input;
mod windows;

use std::io;
use windows_sys::Win32::System::RemoteDesktop::ProcessIdToSessionId;

fn main() -> io::Result<()> {
    let sid = windows::current_user()?;
    let mut args = std::env::args().skip(1);
    match (args.next().as_deref(), args.next().as_deref()) {
        (Some(action @ ("install" | "uninstall")), Some(requested_sid)) if requested_sid == sid => {
            installer::configure(&sid, action == "uninstall")
        }
        (Some("listen"), None) => {
            let mut session = 0;
            if unsafe { ProcessIdToSessionId(std::process::id(), &mut session) } == 0
                || session == 0
            {
                return Err(io::ErrorKind::PermissionDenied.into());
            }
            raw_input::run(pipe::connect(&sid, session)?)
        }
        _ => Err(io::ErrorKind::InvalidInput.into()),
    }
}
