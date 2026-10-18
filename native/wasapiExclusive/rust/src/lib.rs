#![cfg(target_os = "windows")]
#![recursion_limit = "512"]

mod devices;
mod gain;
mod options;
mod renderer;
mod ring_buffer;
mod track_store;

use napi::{bindgen_prelude::*, Env};
use napi_derive::napi;
use serde_json::Value;

#[napi(js_name = "createRenderer")]
pub fn create_renderer(
    env: Env,
    options: Option<Unknown>,
) -> Result<renderer::WasapiExclusiveRenderer> {
    renderer::WasapiExclusiveRenderer::new(env, options)
}

#[napi(js_name = "isSupported")]
pub fn is_supported() -> bool {
    true
}

#[napi(js_name = "listDevices")]
pub fn list_devices(env: Env, value: Option<Unknown>) -> Result<Value> {
    let options = options::Options::new(value)?;
    let include_disabled = options.boolean("includeDisabled", false)?;
    let include_formats = options.boolean("includeFormats", true)?;
    std::thread::spawn(move || devices::list(include_disabled, include_formats))
        .join()
        .map_err(|_| options::runtime_error(env, "WASAPI device enumeration thread failed"))?
        .map_err(|message| options::runtime_error(env, &message))
}
