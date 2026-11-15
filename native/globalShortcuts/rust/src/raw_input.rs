use crate::{
    pipe,
    windows::{wide, Handle},
};
use std::{
    ffi::c_void,
    io,
    mem::{size_of, zeroed},
    ptr::{null, null_mut},
    time::Duration,
};
use windows_sys::Win32::{
    Foundation::{HWND, LPARAM, LRESULT, WPARAM},
    System::LibraryLoader::GetModuleHandleW,
    UI::{
        Input::KeyboardAndMouse::GetAsyncKeyState,
        Input::{
            GetRawInputData, RegisterRawInputDevices, RAWINPUT, RAWINPUTDEVICE, RAWINPUTHEADER,
            RIDEV_INPUTSINK, RID_INPUT, RIM_TYPEKEYBOARD,
        },
        WindowsAndMessaging::{
            CreateWindowExW, DefWindowProcW, DestroyWindow, DispatchMessageW, GetWindowLongPtrW,
            PeekMessageW, RegisterClassW, SetWindowLongPtrW, GWLP_USERDATA, HWND_MESSAGE, MSG,
            PM_REMOVE, WM_INPUT, WNDCLASSW,
        },
    },
};

const MAX_BINDINGS: usize = 512;
const MAX_LINE: usize = 4096;

struct Hotkeys {
    pipe: Handle,
    revision: u32,
    bindings: [Option<usize>; 4096],
    pressed: [bool; 256],
    closed: bool,
}

impl Hotkeys {
    fn write(&mut self, message: &str) {
        self.closed |= !pipe::write(&self.pipe, message);
    }

    fn update(&mut self, line: &[u8]) -> Option<()> {
        let mut values = std::str::from_utf8(line).ok()?.split(' ');
        let revision = values.next()?.parse::<u32>().ok()?;
        let mut bindings = [None; 4096];
        for (id, value) in values.enumerate() {
            let combo = value.parse::<usize>().ok()?;
            if id >= MAX_BINDINGS
                || matches!(combo & 0xff, 0 | 255)
                || bindings.get_mut(combo)?.replace(id).is_some()
            {
                return None;
            }
        }
        self.revision = revision;
        self.bindings = bindings;
        Some(())
    }

    fn input(&mut self, raw: LPARAM) {
        let mut input = RAWINPUT::default();
        let mut size = size_of::<RAWINPUT>() as u32;
        let read = unsafe {
            GetRawInputData(
                raw as _,
                RID_INPUT,
                (&mut input as *mut RAWINPUT).cast::<c_void>(),
                &mut size,
                size_of::<RAWINPUTHEADER>() as u32,
            )
        };
        if read == u32::MAX || input.header.dwType != RIM_TYPEKEYBOARD {
            return;
        }
        let keyboard = unsafe { input.data.keyboard };
        let key = usize::from(keyboard.VKey);
        if !(1..255).contains(&key) {
            return;
        }
        let released = keyboard.Flags & 1 != 0;
        let was_pressed = std::mem::replace(&mut self.pressed[key], !released);
        if was_pressed || (released && key != 0x2c) {
            return;
        }
        let down = |vk| unsafe { GetAsyncKeyState(vk) < 0 };
        let modifiers = usize::from(down(0x11))
            | (usize::from(down(0x12)) << 1)
            | (usize::from(down(0x10)) << 2)
            | (usize::from(down(0x5b) || down(0x5c)) << 3);
        if let Some(id) = self.bindings[(modifiers << 8) | key] {
            self.write(&format!("{} {id}\n", self.revision));
        }
    }
}

unsafe extern "system" fn window_proc(
    window: HWND,
    message: u32,
    wparam: WPARAM,
    lparam: LPARAM,
) -> LRESULT {
    if message == WM_INPUT {
        let state = GetWindowLongPtrW(window, GWLP_USERDATA) as *mut Hotkeys;
        if let Some(state) = state.as_mut() {
            state.input(lparam);
        }
    }
    DefWindowProcW(window, message, wparam, lparam)
}

pub fn run(pipe: Handle) -> io::Result<()> {
    let class = wide("PulseSyncHotkeys");
    let instance = unsafe { GetModuleHandleW(null()) };
    let window_class = WNDCLASSW {
        lpfnWndProc: Some(window_proc),
        hInstance: instance,
        lpszClassName: class.as_ptr(),
        ..unsafe { zeroed() }
    };
    if unsafe { RegisterClassW(&window_class) } == 0 {
        return Err(io::Error::last_os_error());
    }
    let window = unsafe {
        CreateWindowExW(
            0,
            class.as_ptr(),
            null(),
            0,
            0,
            0,
            0,
            0,
            HWND_MESSAGE,
            null_mut(),
            instance,
            null(),
        )
    };
    if window.is_null() {
        return Err(io::Error::last_os_error());
    }
    let device = RAWINPUTDEVICE {
        usUsagePage: 1,
        usUsage: 6,
        dwFlags: RIDEV_INPUTSINK,
        hwndTarget: window,
    };
    if unsafe { RegisterRawInputDevices(&device, 1, size_of::<RAWINPUTDEVICE>() as u32) } == 0 {
        let error = io::Error::last_os_error();
        unsafe { DestroyWindow(window) };
        return Err(error);
    }

    let mut state = Box::new(Hotkeys {
        pipe,
        revision: 0,
        bindings: [None; 4096],
        pressed: [false; 256],
        closed: false,
    });
    unsafe {
        SetWindowLongPtrW(
            window,
            GWLP_USERDATA,
            (&mut *state as *mut Hotkeys) as isize,
        )
    };
    state.write("ready\n");

    let mut message = MSG::default();
    let mut input = [0u8; 4096];
    let mut line = Vec::new();
    while !state.closed {
        let Ok(read) = pipe::read(&state.pipe, &mut input) else {
            break;
        };
        for &byte in &input[..read] {
            if byte == b'\n' {
                state.closed |= state.update(&line).is_none();
                line.clear();
            } else if line.len() == MAX_LINE {
                state.closed = true;
                break;
            } else {
                line.push(byte);
            }
        }
        for _ in 0..64 {
            if unsafe { PeekMessageW(&mut message, null_mut(), 0, 0, PM_REMOVE) } == 0 {
                break;
            }
            unsafe { DispatchMessageW(&message) };
        }
        std::thread::sleep(Duration::from_millis(8));
    }
    unsafe { DestroyWindow(window) };
    Ok(())
}
