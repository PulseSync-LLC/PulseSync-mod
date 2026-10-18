#![cfg(target_os = "windows")]

mod bitmap;
mod dwm;

use napi::{bindgen_prelude::*, Env, JsValue, ValueType};
use napi_derive::napi;

fn type_error(env: Env, message: &str) -> Error {
    match env.throw_type_error(message, None) {
        Ok(()) => Error::new(Status::PendingException, message),
        Err(error) => error,
    }
}

fn number<T: FromNapiValue>(env: Env, value: Unknown, message: &str) -> Result<T> {
    if value.get_type()? != ValueType::Number {
        return Err(type_error(env, message));
    }
    T::from_unknown(value).map_err(|_| type_error(env, message))
}

fn runtime_error(env: Env, message: &str) -> Error {
    match env.throw_error(message, None) {
        Ok(()) => Error::new(Status::PendingException, message),
        Err(error) => error,
    }
}

fn buffer(env: Env, value: Unknown, message: &str) -> Result<Buffer> {
    if !value.is_buffer()? {
        return Err(type_error(env, message));
    }
    Buffer::from_unknown(value).map_err(|_| type_error(env, message))
}

fn dimensions(env: Env, width: u32, height: u32) -> Result<usize> {
    bitmap::byte_length(width, height).ok_or_else(|| type_error(env, "Invalid bitmap dimensions"))
}

#[napi(js_name = "forceIconicFlags")]
pub fn force_iconic_flags(env: Env, hwnd: Unknown) -> Result<i32> {
    let hwnd = number::<f64>(
        env,
        hwnd,
        "Invalid arguments. Expected: clearIconicThumbnail(hwnd: number)",
    )?;
    dwm::iconic_flags(dwm::window_handle(hwnd), true)
        .map_err(|(message, _)| runtime_error(env, message))
}

#[napi(js_name = "clearIconicThumbnail")]
pub fn clear_iconic_thumbnail(env: Env, hwnd: Unknown) -> Result<i32> {
    let hwnd = number::<f64>(
        env,
        hwnd,
        "Invalid arguments. Expected: clearIconicThumbnail(hwnd: number)",
    )?;
    dwm::iconic_flags(dwm::window_handle(hwnd), false)
        .map_err(|(message, _)| runtime_error(env, message))
}

#[napi(js_name = "setIconicThumbnail")]
pub fn set_iconic_thumbnail(
    env: Env,
    hwnd: Unknown,
    image: Unknown,
    width: Unknown,
    height: Unknown,
    flags: Unknown,
) -> Result<i32> {
    let message = "Invalid arguments. Expected: setIconicThumbnail(hwnd: number, imageBuffer: Buffer, maxWidth: number, maxHeight: number, flags: number)";
    let hwnd = dwm::window_handle(number::<f64>(env, hwnd, message)?);
    let image = buffer(env, image, message)?;
    let width = number::<i32>(env, width, message)?;
    let height = number::<i32>(env, height, message)?;
    let flags = number::<i32>(env, flags, message)? as u32;
    dimensions(env, width as u32, height as u32)?;
    dwm::iconic_flags(hwnd, true).map_err(|(message, _)| runtime_error(env, message))?;
    let bitmap = bitmap::encoded(&image, width as u32, height as u32)
        .map_err(|message| runtime_error(env, message))?
        .ok_or_else(|| runtime_error(env, "Failed to convert image buffer to HBITMAP"))?;
    Ok(dwm::thumbnail(hwnd, bitmap.handle, flags))
}

#[napi(js_name = "setIconicThumbnailRaw")]
pub fn set_iconic_thumbnail_raw(
    env: Env,
    hwnd: Unknown,
    image: Unknown,
    width: Unknown,
    height: Unknown,
    flags: Unknown,
) -> Result<i32> {
    let message = "Expected: hwnd, buffer, width, height, flags";
    let hwnd = dwm::window_handle(number::<f64>(env, hwnd, message)?);
    let image = buffer(env, image, message)?;
    let width = number::<u32>(env, width, message)?;
    let height = number::<u32>(env, height, message)?;
    let flags = number::<u32>(env, flags, message)?;
    if image.len() != dimensions(env, width, height)? {
        return Err(type_error(
            env,
            "Raw buffer length must be width * height * 4 bytes",
        ));
    }
    if let Err((_, hr)) = dwm::iconic_flags(hwnd, true) {
        return Ok(hr);
    }
    Ok(match bitmap::Bitmap::raw(&image, width, height, true) {
        Some(bitmap) => dwm::thumbnail(hwnd, bitmap.handle, flags),
        None => -1,
    })
}

#[napi(js_name = "setIconicLivePreviewBitmap")]
pub fn set_iconic_live_preview_bitmap(
    env: Env,
    hwnd: Unknown,
    image: Unknown,
    size: Unknown,
) -> Result<i32> {
    let message = "Expected arguments: hwnd (number), bitmapBuffer (Buffer), size {width, height}";
    let hwnd = dwm::window_handle(number::<f64>(env, hwnd, message)?);
    let image = buffer(env, image, message)?;
    if size.get_type()? != ValueType::Object {
        return Err(type_error(env, message));
    }
    let size = Object::from_unknown(size).map_err(|_| type_error(env, message))?;
    let width = number::<u32>(
        env,
        size.get_named_property::<Unknown>("width")?,
        "A number was expected",
    )?;
    let height = number::<u32>(
        env,
        size.get_named_property::<Unknown>("height")?,
        "A number was expected",
    )?;
    if image.len() != dimensions(env, width, height)? {
        return Err(type_error(
            env,
            "Bitmap buffer length must be width * height * 4 bytes",
        ));
    }
    Ok(match bitmap::Bitmap::raw(&image, width, height, false) {
        Some(bitmap) => dwm::live_preview(hwnd, bitmap.handle),
        None => -1,
    })
}
