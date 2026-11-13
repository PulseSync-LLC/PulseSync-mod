use crate::windows::{wide, Handle};
use std::{
    io,
    mem::size_of,
    ptr::null_mut,
    time::{Duration, Instant},
};
use windows_sys::Win32::{
    Foundation::{
        LocalFree, ERROR_NO_DATA, ERROR_PIPE_CONNECTED, ERROR_PIPE_LISTENING, INVALID_HANDLE_VALUE,
    },
    Security::{
        Authorization::ConvertStringSecurityDescriptorToSecurityDescriptorW, SECURITY_ATTRIBUTES,
    },
    Storage::FileSystem::{ReadFile, WriteFile, FILE_FLAG_FIRST_PIPE_INSTANCE, PIPE_ACCESS_DUPLEX},
    System::Pipes::{
        ConnectNamedPipe, CreateNamedPipeW, GetNamedPipeClientSessionId, PIPE_NOWAIT,
        PIPE_REJECT_REMOTE_CLIENTS,
    },
};

pub fn connect(sid: &str, session: u32) -> io::Result<Handle> {
    let name = wide(&format!(r"\\.\pipe\PulseSync.Hotkeys.v1.{sid}"));
    let acl = wide(&format!(
        "D:P(A;;GA;;;SY)(A;;GA;;;BA)(A;;GRGW;;;{sid})S:(ML;;NW;;;ME)"
    ));
    let mut descriptor = null_mut();
    if unsafe {
        ConvertStringSecurityDescriptorToSecurityDescriptorW(
            acl.as_ptr(),
            1,
            &mut descriptor,
            null_mut(),
        )
    } == 0
    {
        return Err(io::Error::last_os_error());
    }
    let security = SECURITY_ATTRIBUTES {
        nLength: size_of::<SECURITY_ATTRIBUTES>() as u32,
        lpSecurityDescriptor: descriptor,
        bInheritHandle: 0,
    };
    let pipe = unsafe {
        CreateNamedPipeW(
            name.as_ptr(),
            PIPE_ACCESS_DUPLEX | FILE_FLAG_FIRST_PIPE_INSTANCE,
            PIPE_NOWAIT | PIPE_REJECT_REMOTE_CLIENTS,
            1,
            4096,
            4096,
            0,
            &security,
        )
    };
    unsafe { LocalFree(descriptor) };
    if pipe == INVALID_HANDLE_VALUE {
        return Err(io::Error::last_os_error());
    }
    let pipe = Handle(pipe);
    let deadline = Instant::now() + Duration::from_secs(8);
    while Instant::now() < deadline {
        let listening = unsafe { ConnectNamedPipe(pipe.0, null_mut()) } != 0;
        let error = io::Error::last_os_error();
        if !listening && error.raw_os_error() == Some(ERROR_PIPE_CONNECTED as i32) {
            let mut client_session = 0;
            if unsafe { GetNamedPipeClientSessionId(pipe.0, &mut client_session) } != 0
                && client_session == session
            {
                return Ok(pipe);
            }
            return Err(io::ErrorKind::PermissionDenied.into());
        }
        if !listening && error.raw_os_error() != Some(ERROR_PIPE_LISTENING as i32) {
            return Err(error);
        }
        std::thread::sleep(Duration::from_millis(20));
    }
    Err(io::ErrorKind::TimedOut.into())
}

pub fn read(pipe: &Handle, input: &mut [u8]) -> io::Result<usize> {
    let mut read = 0;
    if unsafe {
        ReadFile(
            pipe.0,
            input.as_mut_ptr(),
            input.len() as u32,
            &mut read,
            null_mut(),
        )
    } != 0
    {
        return Ok(read as usize);
    }
    let error = io::Error::last_os_error();
    if error.raw_os_error() == Some(ERROR_NO_DATA as i32) {
        Ok(0)
    } else {
        Err(error)
    }
}

pub fn write(pipe: &Handle, message: &str) -> bool {
    let mut written = 0;
    (unsafe {
        WriteFile(
            pipe.0,
            message.as_ptr(),
            message.len() as u32,
            &mut written,
            null_mut(),
        ) != 0
    }) && written as usize == message.len()
}
