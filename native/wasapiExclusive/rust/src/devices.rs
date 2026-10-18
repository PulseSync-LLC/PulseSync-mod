use crate::gain::PcmFormat;
use serde_json::{json, Value};
use windows::{
    core::{GUID, HRESULT, PCWSTR},
    Win32::{
        Devices::FunctionDiscovery::PKEY_Device_FriendlyName,
        Foundation::*,
        Media::Audio::*,
        System::{
            Com::StructuredStorage::{PropVariantClear, PROPVARIANT},
            Com::*,
            Variant::VT_LPWSTR,
        },
    },
};

pub struct Apartment;
impl Apartment {
    pub fn new() -> windows::core::Result<Self> {
        // SAFETY: paired initialization/uninitialization occurs on the owning native thread.
        unsafe {
            CoInitializeEx(None, COINIT_MULTITHREADED).ok()?;
        }
        Ok(Self)
    }
}
impl Drop for Apartment {
    fn drop(&mut self) {
        // SAFETY: all owned COM objects are released before this same-thread apartment guard.
        unsafe {
            CoUninitialize();
        }
    }
}

struct Variant(PROPVARIANT);
impl Drop for Variant {
    fn drop(&mut self) {
        // SAFETY: GetValue returned this owned initialized variant; clear releases its storage once.
        unsafe {
            let _ = PropVariantClear(&mut self.0);
        }
    }
}

pub fn enumerator() -> windows::core::Result<IMMDeviceEnumerator> {
    // SAFETY: callers own an initialized COM apartment for the returned interface's lifetime.
    unsafe { CoCreateInstance(&MMDeviceEnumerator, None, CLSCTX_ALL) }
}

pub fn device_id(device: &IMMDevice) -> String {
    // SAFETY: GetId allocates a terminated UTF-16 string; it is copied before releasing COM memory.
    unsafe {
        let Ok(value) = device.GetId() else {
            return String::new();
        };
        if value.is_null() {
            return String::new();
        }
        let result = value.to_string().unwrap_or_default();
        CoTaskMemFree(Some(value.0.cast()));
        result
    }
}

pub fn device_name(device: &IMMDevice) -> String {
    // SAFETY: live same-thread interfaces; the discriminant is checked before reading the variant union.
    unsafe {
        let Ok(properties) = device.OpenPropertyStore(STGM_READ) else {
            return String::new();
        };
        let Ok(value) = properties.GetValue(&PKEY_Device_FriendlyName) else {
            return String::new();
        };
        let value = Variant(value);
        if value.0.Anonymous.Anonymous.vt == VT_LPWSTR {
            let name = value.0.Anonymous.Anonymous.Anonymous.pwszVal;
            if name.is_null() {
                String::new()
            } else {
                name.to_string().unwrap_or_default()
            }
        } else {
            String::new()
        }
    }
}

pub fn select_device(
    enumerator: &IMMDeviceEnumerator,
    id: &str,
) -> windows::core::Result<IMMDevice> {
    // SAFETY: the UTF-16 ID remains alive for the synchronous call; interfaces stay on this thread.
    unsafe {
        if id.is_empty() {
            enumerator.GetDefaultAudioEndpoint(eRender, eConsole)
        } else {
            let id: Vec<u16> = id.encode_utf16().chain(Some(0)).collect();
            enumerator.GetDevice(PCWSTR(id.as_ptr()))
        }
    }
}

pub fn wave_format(rate: u32, format: PcmFormat, extensible: bool) -> WAVEFORMATEXTENSIBLE {
    WAVEFORMATEXTENSIBLE {
        Format: WAVEFORMATEX {
            wFormatTag: if extensible {
                65534
            } else if format.float {
                3
            } else {
                1
            },
            nChannels: format.channels as u16,
            nSamplesPerSec: rate,
            nAvgBytesPerSec: rate * format.alignment() as u32,
            nBlockAlign: format.alignment() as u16,
            wBitsPerSample: format.container as u16,
            cbSize: if extensible { 22 } else { 0 },
        },
        Samples: WAVEFORMATEXTENSIBLE_0 {
            wValidBitsPerSample: format.bits as u16,
        },
        dwChannelMask: if format.channels == 1 { 4 } else { 3 },
        SubFormat: GUID::from_u128(if format.float {
            0x00000003_0000_0010_8000_00aa00389b71
        } else {
            0x00000001_0000_0010_8000_00aa00389b71
        }),
    }
}

pub fn hr_text(hr: HRESULT) -> String {
    let names = [
        (AUDCLNT_E_UNSUPPORTED_FORMAT, "AUDCLNT_E_UNSUPPORTED_FORMAT"),
        (AUDCLNT_E_DEVICE_IN_USE, "AUDCLNT_E_DEVICE_IN_USE"),
        (AUDCLNT_E_DEVICE_INVALIDATED, "AUDCLNT_E_DEVICE_INVALIDATED"),
        (
            AUDCLNT_E_ENDPOINT_CREATE_FAILED,
            "AUDCLNT_E_ENDPOINT_CREATE_FAILED",
        ),
        (
            AUDCLNT_E_BUFFER_SIZE_NOT_ALIGNED,
            "AUDCLNT_E_BUFFER_SIZE_NOT_ALIGNED",
        ),
        (AUDCLNT_E_BUFFER_SIZE_ERROR, "AUDCLNT_E_BUFFER_SIZE_ERROR"),
        (
            AUDCLNT_E_INVALID_DEVICE_PERIOD,
            "AUDCLNT_E_INVALID_DEVICE_PERIOD",
        ),
        (E_ACCESSDENIED, "E_ACCESSDENIED"),
        (E_POINTER, "E_POINTER"),
        (E_INVALIDARG, "E_INVALIDARG"),
    ];
    let mut result = format!("HRESULT 0x{:X}", hr.0 as u32);
    if let Some((_, name)) = names.iter().find(|(code, _)| *code == hr) {
        result.push_str(&format!(" ({name})"));
    }
    result
}

pub fn list(include_disabled: bool, include_formats: bool) -> Result<Value, String> {
    // Enumeration owns a separate thread/apartment so it never changes Electron's COM apartment.
    let _apartment = Apartment::new().map_err(|error| {
        format!(
            "Failed to initialize COM for WASAPI device enumeration: {}",
            hr_text(error.code())
        )
    })?;
    let enumerator = enumerator().map_err(|error| {
        format!(
            "Failed to create WASAPI device enumerator: {}",
            hr_text(error.code())
        )
    })?;
    // SAFETY: every interface is created, used and released within this apartment/thread.
    unsafe {
        let defaults: Vec<String> = [eConsole, eMultimedia, eCommunications]
            .into_iter()
            .map(|role| {
                enumerator
                    .GetDefaultAudioEndpoint(eRender, role)
                    .map(|device| device_id(&device))
                    .unwrap_or_default()
            })
            .collect();
        let mask = if include_disabled {
            DEVICE_STATE(
                DEVICE_STATE_ACTIVE.0
                    | DEVICE_STATE_DISABLED.0
                    | DEVICE_STATE_NOTPRESENT.0
                    | DEVICE_STATE_UNPLUGGED.0,
            )
        } else {
            DEVICE_STATE_ACTIVE
        };
        let collection = enumerator
            .EnumAudioEndpoints(eRender, mask)
            .map_err(|error| {
                format!(
                    "Failed to enumerate WASAPI render devices: {}",
                    hr_text(error.code())
                )
            })?;
        let mut result = Vec::new();
        for index in 0..collection.GetCount().unwrap_or(0) {
            let Ok(device) = collection.Item(index) else {
                result.push(Value::Null);
                continue;
            };
            let state = device.GetState().unwrap_or(DEVICE_STATE(0));
            let id = device_id(&device);
            let mut item = json!({"id":id,"name":device_name(&device),"state":match state { DEVICE_STATE_ACTIVE=>"active",DEVICE_STATE_DISABLED=>"disabled",DEVICE_STATE_NOTPRESENT=>"notpresent",DEVICE_STATE_UNPLUGGED=>"unplugged",_=>"unknown" },
                "stateCode":state.0,"isDefault":id==defaults[0],"isDefaultConsole":id==defaults[0],"isDefaultMultimedia":id==defaults[1],"isDefaultCommunications":id==defaults[2],
                "supportedFormats":[],"supportedChannels":[],"supportedBitsPerSample":[],"supportedContainerBitsPerSample":[],"supportedSampleRates":[]});
            if include_formats && state == DEVICE_STATE_ACTIVE {
                match device.Activate::<IAudioClient>(CLSCTX_ALL, None) {
                    Err(error) => {
                        item["formatProbeError"] = json!(hr_text(error.code()));
                    }
                    Ok(client) => {
                        for channels in [1, 2] {
                            for rate in [
                                8000, 11025, 16000, 22050, 32000, 44100, 48000, 88200, 96000,
                                176400, 192000, 352800, 384000,
                            ] {
                                for (bits, container, float) in [
                                    (16, 16, false),
                                    (24, 24, false),
                                    (24, 32, false),
                                    (32, 32, false),
                                    (32, 32, true),
                                ] {
                                    let format = PcmFormat {
                                        channels,
                                        bits,
                                        container,
                                        float,
                                    };
                                    let wave = wave_format(rate, format, true);
                                    let mut status = client.IsFormatSupported(
                                        AUDCLNT_SHAREMODE_EXCLUSIVE,
                                        &wave.Format,
                                        None,
                                    );
                                    let extensible = status == S_OK;
                                    if !extensible && bits == container {
                                        let legacy = wave_format(rate, format, false);
                                        status = client.IsFormatSupported(
                                            AUDCLNT_SHAREMODE_EXCLUSIVE,
                                            &legacy.Format,
                                            None,
                                        );
                                    }
                                    if status != S_OK {
                                        continue;
                                    }
                                    item["supportedFormats"].as_array_mut().unwrap().push(json!({"sampleRate":rate,"channels":channels,"bitsPerSample":bits,"validBitsPerSample":bits,
                                    "containerBitsPerSample":container,"bytesPerSample":container/8,"blockAlign":format.alignment(),"packed":!float&&bits==container,
                                    "float":float,"waveFormatExtensible":extensible,"sampleFormat":format.name()}));
                                    for (key, value) in [
                                        ("supportedChannels", channels),
                                        ("supportedBitsPerSample", bits),
                                        ("supportedContainerBitsPerSample", container),
                                        ("supportedSampleRates", rate),
                                    ] {
                                        let array = item[key].as_array_mut().unwrap();
                                        let value = json!(value);
                                        if !array.contains(&value) {
                                            array.push(value);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            result.push(item);
        }
        Ok(Value::Array(result))
    }
}
