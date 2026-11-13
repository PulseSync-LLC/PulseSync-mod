use std::{cell::RefCell, collections::HashMap};

use napi::{Env, Result};
use windows_sys::Win32::Foundation::HWND;

use crate::{bitmap::Bitmap, dwm};

#[derive(Default)]
struct WindowState {
    thumbnail: Option<(u32, u32, Bitmap)>,
}

// GDI resources stay on the calling thread and are isolated between Node environments.
thread_local! {
    static WINDOWS: RefCell<HashMap<(usize, usize), WindowState>> = RefCell::new(HashMap::new());
}

pub fn initialize(env: Env) -> Result<()> {
    env.add_env_cleanup_hook(env.raw() as usize, |environment| {
        WINDOWS.with(|windows| windows.borrow_mut().retain(|key, _| key.0 != environment));
    })?;
    Ok(())
}

pub fn release(env: Env, hwnd: HWND) {
    WINDOWS.with(|windows| {
        windows
            .borrow_mut()
            .remove(&(env.raw() as usize, hwnd as usize))
    });
}

pub fn enable(env: Env, hwnd: HWND, force: bool) -> std::result::Result<i32, (&'static str, i32)> {
    let key = (env.raw() as usize, hwnd as usize);
    if !force && WINDOWS.with(|windows| windows.borrow().contains_key(&key)) {
        return Ok(0);
    }
    match dwm::iconic_flags(hwnd, true) {
        Ok(result) => {
            WINDOWS.with(|windows| {
                windows.borrow_mut().entry(key).or_default();
            });
            Ok(result)
        }
        Err(error) => {
            release(env, hwnd);
            Err(error)
        }
    }
}

pub fn thumbnail(env: Env, hwnd: HWND, data: &[u8], width: u32, height: u32, flags: u32) -> i32 {
    let key = (env.raw() as usize, hwnd as usize);
    // Take ownership before calling Windows: synchronous DWM calls may reenter the JS hooks.
    let cached = WINDOWS.with(|windows| {
        windows
            .borrow_mut()
            .get_mut(&key)
            .and_then(|state| state.thumbnail.take())
    });
    let bitmap = match cached {
        Some((cached_width, cached_height, mut bitmap))
            if cached_width == width && cached_height == height =>
        {
            bitmap.update_raw(data, true);
            Some(bitmap)
        }
        _ => Bitmap::raw(data, width, height, true),
    };
    let Some(bitmap) = bitmap else {
        return -1;
    };
    let result = dwm::thumbnail(hwnd, bitmap.handle, flags);
    if result < 0 {
        release(env, hwnd);
    } else {
        WINDOWS.with(|windows| {
            if let Some(state) = windows.borrow_mut().get_mut(&key) {
                state.thumbnail = Some((width, height, bitmap));
            }
        });
    }
    result
}
