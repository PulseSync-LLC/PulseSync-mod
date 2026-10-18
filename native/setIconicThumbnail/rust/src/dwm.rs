use std::{ffi::c_void, mem::size_of, ptr};
use windows_sys::Win32::{
    Foundation::{HWND, POINT},
    Graphics::{
        Dwm::{
            DwmSetIconicLivePreviewBitmap, DwmSetIconicThumbnail, DwmSetWindowAttribute,
            DWMWA_FORCE_ICONIC_REPRESENTATION, DWMWA_HAS_ICONIC_BITMAP,
        },
        Gdi::HBITMAP,
    },
};

pub fn window_handle(value: f64) -> HWND {
    value as i64 as usize as HWND
}

pub fn iconic_flags(hwnd: HWND, enabled: bool) -> Result<i32, (&'static str, i32)> {
    let value = i32::from(enabled);
    let attributes = [
        (
            DWMWA_FORCE_ICONIC_REPRESENTATION,
            if enabled {
                "Failed to set DWMWA_FORCE_ICONIC_REPRESENTATION"
            } else {
                "Failed to reset DWMWA_FORCE_ICONIC_REPRESENTATION"
            },
        ),
        (
            DWMWA_HAS_ICONIC_BITMAP,
            if enabled {
                "Failed to set DWMWA_HAS_ICONIC_BITMAP"
            } else {
                "Failed to reset DWMWA_HAS_ICONIC_BITMAP"
            },
        ),
    ];
    let mut result = 0;
    for (attribute, message) in attributes {
        // SAFETY: DWM validates HWND; the BOOL pointer is valid for this synchronous call.
        result = unsafe {
            DwmSetWindowAttribute(
                hwnd,
                attribute as u32,
                &value as *const i32 as *const c_void,
                size_of::<i32>() as u32,
            )
        };
        if result < 0 {
            return Err((message, result));
        }
    }
    Ok(result)
}

pub fn thumbnail(hwnd: HWND, bitmap: HBITMAP, flags: u32) -> i32 {
    // SAFETY: the caller retains the owned HBITMAP throughout this synchronous DWM call.
    unsafe { DwmSetIconicThumbnail(hwnd, bitmap, flags) }
}

pub fn live_preview(hwnd: HWND, bitmap: HBITMAP) -> i32 {
    // SAFETY: the bitmap remains alive; a null optional POINT preserves the existing placement.
    unsafe { DwmSetIconicLivePreviewBitmap(hwnd, bitmap, ptr::null::<POINT>(), 0) }
}
