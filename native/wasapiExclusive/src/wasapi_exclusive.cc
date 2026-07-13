#include "wasapi_exclusive.h"
#include "pcm_volume.h"
#include "yasp_track_store.h"

#include <windows.h>
#include <mmdeviceapi.h>
#include <audioclient.h>
#include <avrt.h>
#include <mmreg.h>
#include <functiondiscoverykeys_devpkey.h>

#include <algorithm>
#include <atomic>
#include <chrono>
#include <cmath>
#include <cstdint>
#include <cstring>
#include <iomanip>
#include <limits>
#include <mutex>
#include <sstream>
#include <string>
#include <thread>
#include <utility>
#include <vector>

#pragma comment(lib, "ole32.lib")
#pragma comment(lib, "avrt.lib")
#pragma comment(lib, "uuid.lib")

namespace {

constexpr REFERENCE_TIME REFTIMES_PER_SEC = 10000000;
constexpr REFERENCE_TIME REFTIMES_PER_MILLISEC = 10000;

#ifndef CREATE_WAITABLE_TIMER_HIGH_RESOLUTION
#define CREATE_WAITABLE_TIMER_HIGH_RESOLUTION 0x00000002
#endif

const GUID PULSE_SYNC_KSDATAFORMAT_SUBTYPE_PCM = {0x00000001, 0x0000, 0x0010, {0x80, 0x00, 0x00, 0xaa, 0x00, 0x38, 0x9b, 0x71}};
const GUID PULSE_SYNC_KSDATAFORMAT_SUBTYPE_IEEE_FLOAT = {0x00000003, 0x0000, 0x0010, {0x80, 0x00, 0x00, 0xaa, 0x00, 0x38, 0x9b, 0x71}};

template <typename T>
void SafeRelease(T*& value) {
    if (value) {
        value->Release();
        value = nullptr;
    }
}

std::string HResultToString(HRESULT hr) {
    std::ostringstream stream;
    stream << "HRESULT 0x" << std::uppercase << std::hex << static_cast<unsigned long>(hr);
    switch (hr) {
        case AUDCLNT_E_UNSUPPORTED_FORMAT:
            stream << " (AUDCLNT_E_UNSUPPORTED_FORMAT)";
            break;
        case AUDCLNT_E_DEVICE_IN_USE:
            stream << " (AUDCLNT_E_DEVICE_IN_USE)";
            break;
        case AUDCLNT_E_DEVICE_INVALIDATED:
            stream << " (AUDCLNT_E_DEVICE_INVALIDATED)";
            break;
        case AUDCLNT_E_ENDPOINT_CREATE_FAILED:
            stream << " (AUDCLNT_E_ENDPOINT_CREATE_FAILED)";
            break;
        case AUDCLNT_E_BUFFER_SIZE_NOT_ALIGNED:
            stream << " (AUDCLNT_E_BUFFER_SIZE_NOT_ALIGNED)";
            break;
        case AUDCLNT_E_BUFFER_SIZE_ERROR:
            stream << " (AUDCLNT_E_BUFFER_SIZE_ERROR)";
            break;
        case AUDCLNT_E_INVALID_DEVICE_PERIOD:
            stream << " (AUDCLNT_E_INVALID_DEVICE_PERIOD)";
            break;
        case E_ACCESSDENIED:
            stream << " (E_ACCESSDENIED)";
            break;
        case E_POINTER:
            stream << " (E_POINTER)";
            break;
        case E_INVALIDARG:
            stream << " (E_INVALIDARG)";
            break;
        default:
            break;
    }
    return stream.str();
}

uint32_t GetUintOption(const Napi::Object& options, const char* key, uint32_t fallback, uint32_t minValue, uint32_t maxValue) {
    Napi::Value value = options.Get(key);
    if (!value.IsNumber()) {
        return fallback;
    }

    double number = value.As<Napi::Number>().DoubleValue();
    if (!std::isfinite(number)) {
        return fallback;
    }

    uint32_t rounded = static_cast<uint32_t>(std::max(0.0, number) + 0.5);
    return std::min(std::max(rounded, minValue), maxValue);
}

bool GetBoolOption(const Napi::Object& options, const char* key, bool fallback) {
    Napi::Value value = options.Get(key);
    return value.IsBoolean() ? value.As<Napi::Boolean>().Value() : fallback;
}

std::wstring GetStringOption(const Napi::Object& options, const char* key) {
    Napi::Value value = options.Get(key);
    if (!value.IsString()) {
        return L"";
    }

    std::u16string rawValue = value.As<Napi::String>().Utf16Value();
    return std::wstring(rawValue.begin(), rawValue.end());
}

std::string WideToUtf8(const std::wstring& value) {
    if (value.empty()) {
        return "";
    }

    int size = WideCharToMultiByte(CP_UTF8, 0, value.c_str(), static_cast<int>(value.size()), nullptr, 0, nullptr, nullptr);
    if (size <= 0) {
        return "";
    }

    std::string result(static_cast<size_t>(size), '\0');
    WideCharToMultiByte(CP_UTF8, 0, value.c_str(), static_cast<int>(value.size()), result.data(), size, nullptr, nullptr);
    return result;
}

std::string WideToUtf8(const wchar_t* value) {
    return value ? WideToUtf8(std::wstring(value)) : "";
}

std::string DeviceStateToString(DWORD state) {
    switch (state) {
        case DEVICE_STATE_ACTIVE:
            return "active";
        case DEVICE_STATE_DISABLED:
            return "disabled";
        case DEVICE_STATE_NOTPRESENT:
            return "notpresent";
        case DEVICE_STATE_UNPLUGGED:
            return "unplugged";
        default:
            return "unknown";
    }
}

std::wstring GetDeviceId(IMMDevice* device) {
    LPWSTR rawId = nullptr;
    if (!device || FAILED(device->GetId(&rawId)) || !rawId) {
        return L"";
    }

    std::wstring id(rawId);
    CoTaskMemFree(rawId);
    return id;
}

std::string GetDeviceFriendlyName(IMMDevice* device) {
    IPropertyStore* propertyStore = nullptr;
    if (!device || FAILED(device->OpenPropertyStore(STGM_READ, &propertyStore))) {
        return "";
    }

    PROPVARIANT value;
    PropVariantInit(&value);
    std::string name;

    if (SUCCEEDED(propertyStore->GetValue(PKEY_Device_FriendlyName, &value)) && value.vt == VT_LPWSTR) {
        name = WideToUtf8(value.pwszVal);
    }

    PropVariantClear(&value);
    SafeRelease(propertyStore);
    return name;
}

bool IsSameDeviceId(IMMDevice* device, const std::wstring& targetDeviceId) {
    if (!device || targetDeviceId.empty()) {
        return false;
    }

    return GetDeviceId(device) == targetDeviceId;
}

size_t AlignDown(size_t value, size_t alignment) {
    if (alignment == 0) {
        return value;
    }

    return value - (value % alignment);
}

size_t AlignUp(size_t value, size_t alignment) {
    if (alignment == 0 || value % alignment == 0) {
        return value;
    }

    return value + (alignment - (value % alignment));
}

DWORD GetChannelMask(uint32_t channels) {
    switch (channels) {
        case 1:
            return SPEAKER_FRONT_CENTER;
        case 2:
            return SPEAKER_FRONT_LEFT | SPEAKER_FRONT_RIGHT;
        default:
            return 0;
    }
}

WAVEFORMATEXTENSIBLE BuildWaveFormat(uint32_t sampleRate, uint32_t channels, uint32_t bitsPerSample, bool floatPcm, uint32_t containerBitsPerSample = 0) {
    WAVEFORMATEXTENSIBLE waveFormat{};
    const uint32_t validBitsPerSample = floatPcm ? 32 : bitsPerSample;
    const uint32_t containerBits = floatPcm ? 32 : (containerBitsPerSample ? containerBitsPerSample : bitsPerSample);
    const uint32_t blockAlign = channels * (containerBits / 8);

    waveFormat.Format.wFormatTag = WAVE_FORMAT_EXTENSIBLE;
    waveFormat.Format.nChannels = static_cast<WORD>(channels);
    waveFormat.Format.nSamplesPerSec = sampleRate;
    waveFormat.Format.wBitsPerSample = static_cast<WORD>(containerBits);
    waveFormat.Format.nBlockAlign = static_cast<WORD>(blockAlign);
    waveFormat.Format.nAvgBytesPerSec = sampleRate * blockAlign;
    waveFormat.Format.cbSize = sizeof(WAVEFORMATEXTENSIBLE) - sizeof(WAVEFORMATEX);
    waveFormat.Samples.wValidBitsPerSample = static_cast<WORD>(validBitsPerSample);
    waveFormat.dwChannelMask = GetChannelMask(channels);
    waveFormat.SubFormat = floatPcm ? PULSE_SYNC_KSDATAFORMAT_SUBTYPE_IEEE_FLOAT : PULSE_SYNC_KSDATAFORMAT_SUBTYPE_PCM;

    return waveFormat;
}

WAVEFORMATEX BuildLegacyWaveFormat(uint32_t sampleRate, uint32_t channels, uint32_t bitsPerSample, bool floatPcm) {
    WAVEFORMATEX waveFormat{};
    const uint32_t blockAlign = channels * (bitsPerSample / 8);
    waveFormat.wFormatTag = floatPcm ? WAVE_FORMAT_IEEE_FLOAT : WAVE_FORMAT_PCM;
    waveFormat.nChannels = static_cast<WORD>(channels);
    waveFormat.nSamplesPerSec = sampleRate;
    waveFormat.wBitsPerSample = static_cast<WORD>(bitsPerSample);
    waveFormat.nBlockAlign = static_cast<WORD>(blockAlign);
    waveFormat.nAvgBytesPerSec = sampleRate * blockAlign;
    waveFormat.cbSize = 0;
    return waveFormat;
}

void PushUnique(std::vector<uint32_t>& values, uint32_t value) {
    if (std::find(values.begin(), values.end(), value) == values.end()) {
        values.push_back(value);
    }
}

Napi::Array ToNumberArray(Napi::Env env, const std::vector<uint32_t>& values) {
    Napi::Array array = Napi::Array::New(env, values.size());
    for (size_t index = 0; index < values.size(); index += 1) {
        array.Set(static_cast<uint32_t>(index), values[index]);
    }

    return array;
}

std::string GetSampleFormatName(uint32_t bitsPerSample, uint32_t containerBitsPerSample, bool floatPcm) {
    if (floatPcm) {
        return "float32";
    }

    if (bitsPerSample == 24 && containerBitsPerSample == 32) {
        return "pcm24in32";
    }

    return "pcm" + std::to_string(bitsPerSample);
}

Napi::Object CreateFormatInfo(
    Napi::Env env,
    uint32_t sampleRate,
    uint32_t channels,
    uint32_t bitsPerSample,
    uint32_t containerBitsPerSample,
    bool floatPcm,
    bool waveFormatExtensible
) {
    Napi::Object format = Napi::Object::New(env);
    format.Set("sampleRate", sampleRate);
    format.Set("channels", channels);
    format.Set("bitsPerSample", bitsPerSample);
    format.Set("validBitsPerSample", bitsPerSample);
    format.Set("containerBitsPerSample", containerBitsPerSample);
    format.Set("bytesPerSample", containerBitsPerSample / 8);
    format.Set("blockAlign", channels * (containerBitsPerSample / 8));
    format.Set("packed", !floatPcm && bitsPerSample == containerBitsPerSample);
    format.Set("float", floatPcm);
    format.Set("waveFormatExtensible", waveFormatExtensible);
    format.Set("sampleFormat", GetSampleFormatName(bitsPerSample, containerBitsPerSample, floatPcm));
    return format;
}

Napi::Object ProbeSupportedFormats(Napi::Env env, IMMDevice* device) {
    Napi::Object result = Napi::Object::New(env);
    std::vector<uint32_t> supportedChannels;
    std::vector<uint32_t> supportedBitsPerSample;
    std::vector<uint32_t> supportedContainerBitsPerSample;
    std::vector<uint32_t> supportedSampleRates;
    Napi::Array formats = Napi::Array::New(env);
    uint32_t formatIndex = 0;

    IAudioClient* audioClient = nullptr;
    HRESULT hr = device ? device->Activate(__uuidof(IAudioClient), CLSCTX_ALL, nullptr, reinterpret_cast<void**>(&audioClient)) : E_POINTER;
    if (FAILED(hr)) {
        result.Set("formats", formats);
        result.Set("channels", ToNumberArray(env, supportedChannels));
        result.Set("bitsPerSample", ToNumberArray(env, supportedBitsPerSample));
        result.Set("containerBitsPerSample", ToNumberArray(env, supportedContainerBitsPerSample));
        result.Set("sampleRates", ToNumberArray(env, supportedSampleRates));
        result.Set("probeError", HResultToString(hr));
        return result;
    }

    const uint32_t probeChannels[] = {1, 2};
    const uint32_t probeSampleRates[] = {8000, 11025, 16000, 22050, 32000, 44100, 48000, 88200, 96000, 176400, 192000, 352800, 384000};
    const std::pair<uint32_t, uint32_t> probePcmFormats[] = {{16, 16}, {24, 24}, {24, 32}, {32, 32}};

    const auto probeFormat = [&](uint32_t sampleRate, uint32_t channels, uint32_t bitsPerSample, uint32_t containerBitsPerSample, bool floatPcm) {
        WAVEFORMATEXTENSIBLE waveFormat = BuildWaveFormat(sampleRate, channels, bitsPerSample, floatPcm, containerBitsPerSample);
        HRESULT formatHr = audioClient->IsFormatSupported(AUDCLNT_SHAREMODE_EXCLUSIVE, reinterpret_cast<WAVEFORMATEX*>(&waveFormat), nullptr);
        bool waveFormatExtensible = formatHr == S_OK;
        if (!waveFormatExtensible && channels <= 2 && bitsPerSample == containerBitsPerSample) {
            WAVEFORMATEX legacyWaveFormat = BuildLegacyWaveFormat(sampleRate, channels, bitsPerSample, floatPcm);
            formatHr = audioClient->IsFormatSupported(AUDCLNT_SHAREMODE_EXCLUSIVE, &legacyWaveFormat, nullptr);
        }
        if (formatHr != S_OK) {
            return;
        }

        formats.Set(formatIndex, CreateFormatInfo(env, sampleRate, channels, bitsPerSample, containerBitsPerSample, floatPcm, waveFormatExtensible));
        formatIndex += 1;
        PushUnique(supportedChannels, channels);
        PushUnique(supportedBitsPerSample, bitsPerSample);
        PushUnique(supportedContainerBitsPerSample, containerBitsPerSample);
        PushUnique(supportedSampleRates, sampleRate);
    };

    for (uint32_t channels : probeChannels) {
        for (uint32_t sampleRate : probeSampleRates) {
            for (const auto& format : probePcmFormats) {
                probeFormat(sampleRate, channels, format.first, format.second, false);
            }
            probeFormat(sampleRate, channels, 32, 32, true);
        }
    }

    SafeRelease(audioClient);

    result.Set("formats", formats);
    result.Set("channels", ToNumberArray(env, supportedChannels));
    result.Set("bitsPerSample", ToNumberArray(env, supportedBitsPerSample));
    result.Set("containerBitsPerSample", ToNumberArray(env, supportedContainerBitsPerSample));
    result.Set("sampleRates", ToNumberArray(env, supportedSampleRates));
    return result;
}

class ByteRingBuffer {
public:
    void Reset(size_t capacity, size_t alignment) {
        std::lock_guard<std::mutex> lock(mutex_);
        capacity = AlignDown(capacity, alignment);
        buffer_.assign(capacity, 0);
        capacity_ = capacity;
        readPosition_ = 0;
        writePosition_ = 0;
        size_ = 0;
        droppedBytes_ = 0;
        rejectedBytes_ = 0;
        partialWrites_ = 0;
    }

    size_t Write(const uint8_t* data, size_t length, size_t alignment) {
        std::lock_guard<std::mutex> lock(mutex_);
        if (!capacity_ || !data || !length) {
            return 0;
        }

        const size_t requestedLength = AlignDown(length, alignment);
        if (!requestedLength) {
            return 0;
        }

        const size_t available = AlignDown(capacity_ - size_, alignment);
        length = std::min(requestedLength, available);
        if (length < requestedLength) {
            rejectedBytes_ += requestedLength - length;
            partialWrites_ += 1;
        }
        if (!length) {
            return 0;
        }

        const size_t firstCopy = std::min(length, capacity_ - writePosition_);
        std::memcpy(buffer_.data() + writePosition_, data, firstCopy);

        const size_t secondCopy = length - firstCopy;
        if (secondCopy > 0) {
            std::memcpy(buffer_.data(), data + firstCopy, secondCopy);
        }

        writePosition_ = (writePosition_ + length) % capacity_;
        size_ += length;
        return length;
    }

    size_t Read(uint8_t* destination, size_t length, size_t alignment) {
        std::lock_guard<std::mutex> lock(mutex_);
        if (!capacity_ || !destination || !length || !size_) {
            return 0;
        }

        length = std::min(AlignDown(length, alignment), AlignDown(size_, alignment));
        if (!length) {
            return 0;
        }

        const size_t firstCopy = std::min(length, capacity_ - readPosition_);
        std::memcpy(destination, buffer_.data() + readPosition_, firstCopy);

        const size_t secondCopy = length - firstCopy;
        if (secondCopy > 0) {
            std::memcpy(destination + firstCopy, buffer_.data(), secondCopy);
        }

        readPosition_ = (readPosition_ + length) % capacity_;
        size_ -= length;
        return length;
    }

    size_t Size() const {
        std::lock_guard<std::mutex> lock(mutex_);
        return size_;
    }

    size_t Capacity() const {
        std::lock_guard<std::mutex> lock(mutex_);
        return capacity_;
    }

    size_t Clear() {
        std::lock_guard<std::mutex> lock(mutex_);
        const size_t cleared = size_;
        readPosition_ = 0;
        writePosition_ = 0;
        size_ = 0;
        return cleared;
    }

    uint64_t DroppedBytes() const {
        std::lock_guard<std::mutex> lock(mutex_);
        return droppedBytes_;
    }

    uint64_t RejectedBytes() const {
        std::lock_guard<std::mutex> lock(mutex_);
        return rejectedBytes_;
    }

    uint64_t PartialWrites() const {
        std::lock_guard<std::mutex> lock(mutex_);
        return partialWrites_;
    }

private:
    void DropNoLock(size_t length) {
        length = std::min(length, size_);
        if (!length || !capacity_) {
            return;
        }

        readPosition_ = (readPosition_ + length) % capacity_;
        size_ -= length;
        droppedBytes_ += length;
    }

    mutable std::mutex mutex_;
    std::vector<uint8_t> buffer_;
    size_t capacity_ = 0;
    size_t readPosition_ = 0;
    size_t writePosition_ = 0;
    size_t size_ = 0;
    uint64_t droppedBytes_ = 0;
    uint64_t rejectedBytes_ = 0;
    uint64_t partialWrites_ = 0;
};

class WasapiExclusiveRenderer : public Napi::ObjectWrap<WasapiExclusiveRenderer> {
public:
    static Napi::FunctionReference constructor;

    static void InitClass(Napi::Env env, Napi::Object exports) {
        Napi::Function func = DefineClass(
            env,
            "WasapiExclusiveRenderer",
            {
                InstanceMethod("write", &WasapiExclusiveRenderer::Write),
                InstanceMethod("attachPcmSource", &WasapiExclusiveRenderer::AttachPcmSource),
                InstanceMethod("seekPcmSource", &WasapiExclusiveRenderer::SeekPcmSource),
                InstanceMethod("start", &WasapiExclusiveRenderer::Start),
                InstanceMethod("setVolumeGain", &WasapiExclusiveRenderer::SetVolumeGain),
                InstanceMethod("flush", &WasapiExclusiveRenderer::Flush),
                InstanceMethod("getState", &WasapiExclusiveRenderer::GetState),
                InstanceMethod("close", &WasapiExclusiveRenderer::Close),
            }
        );

        constructor = Napi::Persistent(func);
        constructor.SuppressDestruct();
        exports.Set("WasapiExclusiveRenderer", func);
    }

    WasapiExclusiveRenderer(const Napi::CallbackInfo& info) : Napi::ObjectWrap<WasapiExclusiveRenderer>(info) {
        Napi::Env env = info.Env();
        Napi::Object options = info.Length() > 0 && info[0].IsObject() ? info[0].As<Napi::Object>() : Napi::Object::New(env);

        sampleRate_ = GetUintOption(options, "sampleRate", 48000, 8000, 384000);
        channels_ = GetUintOption(options, "channels", 2, 1, 2);
        floatPcm_ = GetBoolOption(options, "float", false);
        bitsPerSample_ = floatPcm_ ? 32 : GetUintOption(options, "bitsPerSample", 16, 16, 32);
        containerBitsPerSample_ = floatPcm_ ? 32 : GetUintOption(options, "containerBitsPerSample", bitsPerSample_, 16, 32);
        bufferMs_ = GetUintOption(options, "bufferMs", 50, 0, 500);
        maxQueuedMs_ = GetUintOption(options, "maxQueuedMs", 1000, 50, 60000);
        timerDriven_ = GetStringOption(options, "renderMode") == L"timer";
        timerPollMs_ = GetUintOption(options, "timerPollMs", 5, 1, 50);
        timerPeriodMs_ = GetUintOption(options, "timerPeriodMs", std::max(timerPollMs_ * 2, 2u), 2, 100);
        timerBufferPeriods_ = GetUintOption(options, "timerBufferPeriods", 4, 2, 16);
        deferStart_ = GetBoolOption(options, "deferStart", false);
        waveFormatExtensible_ = GetBoolOption(options, "waveFormatExtensible", true);
        requestedDeviceId_ = GetStringOption(options, "deviceId");

        if (!floatPcm_ && bitsPerSample_ != 16 && bitsPerSample_ != 24 && bitsPerSample_ != 32) {
            Napi::RangeError::New(env, "bitsPerSample must be 16, 24, or 32 for integer PCM").ThrowAsJavaScriptException();
            return;
        }

        if (!floatPcm_ && containerBitsPerSample_ != bitsPerSample_ && !(bitsPerSample_ == 24 && containerBitsPerSample_ == 32)) {
            Napi::RangeError::New(env, "containerBitsPerSample must match bitsPerSample, except 24-bit PCM may use a 32-bit container").ThrowAsJavaScriptException();
            return;
        }
        if (containerBitsPerSample_ != bitsPerSample_ || channels_ > 2) {
            waveFormatExtensible_ = true;
        }

        blockAlign_ = channels_ * (containerBitsPerSample_ / 8);
        HRESULT hr = Open();
        if (FAILED(hr)) {
            CloseInternal();
            Napi::Error::New(env, "Failed to initialize WASAPI exclusive renderer: " + HResultToString(hr)).ThrowAsJavaScriptException();
        }
    }

    ~WasapiExclusiveRenderer() override {
        CloseInternal();
    }

private:
    HRESULT Open() {
        HRESULT hr = CoInitializeEx(nullptr, COINIT_MULTITHREADED);
        if (SUCCEEDED(hr)) {
            comInitialized_ = true;
        } else if (hr != RPC_E_CHANGED_MODE) {
            return hr;
        }

        IMMDeviceEnumerator* enumerator = nullptr;
        hr = CoCreateInstance(__uuidof(MMDeviceEnumerator), nullptr, CLSCTX_ALL, IID_PPV_ARGS(&enumerator));
        if (FAILED(hr)) {
            return hr;
        }

        hr = requestedDeviceId_.empty() ? enumerator->GetDefaultAudioEndpoint(eRender, eConsole, &device_) : enumerator->GetDevice(requestedDeviceId_.c_str(), &device_);
        SafeRelease(enumerator);
        if (FAILED(hr)) {
            return hr;
        }

        resolvedDeviceId_ = GetDeviceId(device_);
        deviceName_ = GetDeviceFriendlyName(device_);

        hr = device_->Activate(__uuidof(IAudioClient), CLSCTX_ALL, nullptr, reinterpret_cast<void**>(&audioClient_));
        if (FAILED(hr)) {
            return hr;
        }

        BuildWaveFormat();

        hr = audioClient_->IsFormatSupported(AUDCLNT_SHAREMODE_EXCLUSIVE, GetWaveFormat(), nullptr);
        if (hr != S_OK) {
            return FAILED(hr) ? hr : AUDCLNT_E_UNSUPPORTED_FORMAT;
        }

        hr = audioClient_->GetDevicePeriod(&defaultDevicePeriod_, &minimumDevicePeriod_);
        if (FAILED(hr)) {
            return hr;
        }

        // Match the SDK timer-driven sample: a multi-period endpoint buffer, polled at half-period cadence.
        REFERENCE_TIME periodicity = timerDriven_
            ? std::max<REFERENCE_TIME>(static_cast<REFERENCE_TIME>(timerPeriodMs_) * REFTIMES_PER_MILLISEC, minimumDevicePeriod_)
            : 0;
        REFERENCE_TIME bufferDuration = timerDriven_
            ? periodicity * timerBufferPeriods_
            : bufferMs_ == 0
                ? std::max(defaultDevicePeriod_, minimumDevicePeriod_)
                : std::max<REFERENCE_TIME>(static_cast<REFERENCE_TIME>(bufferMs_) * REFTIMES_PER_MILLISEC, minimumDevicePeriod_);
        if (!timerDriven_) {
            periodicity = bufferDuration;
        }
        requestedBufferDuration_ = bufferDuration;
        requestedPeriodicity_ = periodicity;
        hr = InitializeAudioClient(bufferDuration, periodicity);
        if (hr == AUDCLNT_E_BUFFER_SIZE_NOT_ALIGNED) {
            UINT32 alignedFrames = 0;
            HRESULT alignedHr = audioClient_->GetBufferSize(&alignedFrames);
            if (FAILED(alignedHr) || alignedFrames == 0) {
                return hr;
            }

            SafeRelease(audioClient_);
            hr = device_->Activate(__uuidof(IAudioClient), CLSCTX_ALL, nullptr, reinterpret_cast<void**>(&audioClient_));
            if (FAILED(hr)) {
                return hr;
            }

            bufferDuration = static_cast<REFERENCE_TIME>((static_cast<double>(REFTIMES_PER_SEC) * alignedFrames / sampleRate_) + 0.5);
            periodicity = timerDriven_
                ? std::max<REFERENCE_TIME>(bufferDuration / timerBufferPeriods_, minimumDevicePeriod_)
                : bufferDuration;
            bufferAlignmentAdjusted_ = true;
            hr = InitializeAudioClient(bufferDuration, periodicity);
        }

        if (FAILED(hr)) {
            return hr;
        }
        initializedBufferDuration_ = bufferDuration;
        initializedPeriodicity_ = periodicity;

        stopEvent_ = CreateEvent(nullptr, TRUE, FALSE, nullptr);
        if (!stopEvent_) {
            return HRESULT_FROM_WIN32(GetLastError());
        }

        if (timerDriven_) {
            renderTimer_ = CreateWaitableTimerExW(nullptr, nullptr, CREATE_WAITABLE_TIMER_HIGH_RESOLUTION, TIMER_ALL_ACCESS);
            if (!renderTimer_) {
                renderTimer_ = CreateWaitableTimerW(nullptr, FALSE, nullptr);
            }
            if (!renderTimer_) {
                return HRESULT_FROM_WIN32(GetLastError());
            }
        } else {
            renderEvent_ = CreateEvent(nullptr, FALSE, FALSE, nullptr);
            if (!renderEvent_) {
                return HRESULT_FROM_WIN32(GetLastError());
            }

            hr = audioClient_->SetEventHandle(renderEvent_);
            if (FAILED(hr)) {
                return hr;
            }
        }

        hr = audioClient_->GetService(__uuidof(IAudioRenderClient), reinterpret_cast<void**>(&renderClient_));
        if (FAILED(hr)) {
            return hr;
        }

        HRESULT clockHr = audioClient_->GetService(__uuidof(IAudioClock), reinterpret_cast<void**>(&audioClock_));
        if (SUCCEEDED(clockHr)) {
            clockHr = audioClock_->GetFrequency(&audioClockFrequency_);
        }
        if (FAILED(clockHr) || audioClockFrequency_ == 0) {
            SafeRelease(audioClock_);
            audioClockFrequency_ = 0;
        }

        hr = audioClient_->GetBufferSize(&bufferFrames_);
        if (FAILED(hr)) {
            return hr;
        }

        periodFrames_ = timerDriven_ ? std::max<UINT32>(bufferFrames_ / timerBufferPeriods_, 1) : bufferFrames_;

        const size_t queueCapacity = static_cast<size_t>(sampleRate_) * blockAlign_ * maxQueuedMs_ / 1000;
        queue_.Reset(queueCapacity, blockAlign_);

        stopping_.store(false);
        return deferStart_ ? S_OK : StartInternal();
    }

    HRESULT InitializeAudioClient(REFERENCE_TIME bufferDuration, REFERENCE_TIME periodicity) {
        const DWORD streamFlags = AUDCLNT_STREAMFLAGS_NOPERSIST | (timerDriven_ ? 0 : AUDCLNT_STREAMFLAGS_EVENTCALLBACK);
        return audioClient_->Initialize(
            AUDCLNT_SHAREMODE_EXCLUSIVE,
            streamFlags,
            bufferDuration,
            periodicity,
            GetWaveFormat(),
            nullptr
        );
    }

    WAVEFORMATEX* GetWaveFormat() {
        return waveFormatExtensible_ ? reinterpret_cast<WAVEFORMATEX*>(&waveFormat_) : &legacyWaveFormat_;
    }

    void BuildWaveFormat() {
        waveFormat_ = ::BuildWaveFormat(sampleRate_, channels_, bitsPerSample_, floatPcm_, containerBitsPerSample_);
        legacyWaveFormat_ = BuildLegacyWaveFormat(sampleRate_, channels_, bitsPerSample_, floatPcm_);
    }

    HRESULT PrimeSilence() {
        BYTE* data = nullptr;
        HRESULT hr = renderClient_->GetBuffer(bufferFrames_, &data);
        if (FAILED(hr)) {
            return hr;
        }

        std::memset(data, 0, static_cast<size_t>(bufferFrames_) * blockAlign_);
        return renderClient_->ReleaseBuffer(bufferFrames_, AUDCLNT_BUFFERFLAGS_SILENT);
    }

    size_t ReadRenderData(BYTE* destination, size_t length) {
        if (pcmSource_) {
            const size_t offset = static_cast<size_t>(pcmSourceOffset_.load());
            const size_t bytesRead = pcmSource_->Read(offset, destination, length);
            pcmSourceOffset_.fetch_add(bytesRead);
            sourceReadFrames_.fetch_add(bytesRead / blockAlign_);
            return bytesRead;
        }

        return queue_.Read(destination, length, blockAlign_);
    }

    void ApplyOutputGain(BYTE* data, UINT32 frames) {
        if (!data || frames == 0) {
            return;
        }

        const double startGain = currentVolumeGain_.load(std::memory_order_relaxed);
        const double endGain = targetVolumeGain_.load(std::memory_order_relaxed);
        ApplyPcmGain(data, frames, channels_, bitsPerSample_, containerBitsPerSample_, floatPcm_, startGain, endGain);
        currentVolumeGain_.store(endGain, std::memory_order_relaxed);
    }

    HRESULT PrimeFromQueue() {
        BYTE* data = nullptr;
        HRESULT hr = renderClient_->GetBuffer(bufferFrames_, &data);
        if (FAILED(hr)) {
            return hr;
        }

        const size_t bytesNeeded = static_cast<size_t>(bufferFrames_) * blockAlign_;
        const size_t bytesRead = ReadRenderData(data, bytesNeeded);
        if (bytesRead < bytesNeeded) {
            std::memset(data + bytesRead, 0, bytesNeeded - bytesRead);
        }
        if (bytesRead) {
            ApplyOutputGain(data, bufferFrames_);
        }

        hr = renderClient_->ReleaseBuffer(bufferFrames_, bytesRead ? 0 : AUDCLNT_BUFFERFLAGS_SILENT);
        if (SUCCEEDED(hr)) {
            const uint64_t framesRead = bytesRead / blockAlign_;
            playedFrames_.fetch_add(framesRead);
            renderedFrames_.fetch_add(bufferFrames_);
            primedFrames_.fetch_add(framesRead);
            paddingFrames_.store(bufferFrames_);
        }
        return hr;
    }

    HRESULT StartInternal() {
        std::lock_guard<std::mutex> audioLock(audioMutex_);
        if (started_.load()) {
            return S_OK;
        }
        if (!audioClient_ || !renderClient_ || stopping_.load()) {
            return E_UNEXPECTED;
        }

        HRESULT hr = PrimeFromQueue();
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return hr;
        }

        ResetEvent(stopEvent_);
        if (timerDriven_) {
            LARGE_INTEGER firstWakeup{};
            firstWakeup.QuadPart = -static_cast<LONGLONG>(timerPollMs_) * REFTIMES_PER_MILLISEC;
            if (!SetWaitableTimer(renderTimer_, &firstWakeup, static_cast<LONG>(timerPollMs_), nullptr, nullptr, FALSE)) {
                hr = HRESULT_FROM_WIN32(GetLastError());
                lastRenderHr_.store(hr);
                return hr;
            }
        }

        renderThread_ = std::thread(&WasapiExclusiveRenderer::RenderLoop, this);
        hr = audioClient_->Start();
        if (FAILED(hr)) {
            stopping_.store(true);
            SetEvent(stopEvent_);
            if (renderThread_.joinable()) {
                renderThread_.join();
            }
            if (renderTimer_) {
                CancelWaitableTimer(renderTimer_);
            }
            lastRenderHr_.store(hr);
            return hr;
        }

        started_.store(true);
        CaptureAudioClockBaseline();
        lastRenderHr_.store(S_OK);
        return S_OK;
    }

    void CaptureAudioClockBaseline() {
        if (!audioClock_ || audioClockFrequency_ == 0) {
            audioClockBaselineValid_.store(false);
            return;
        }

        UINT64 position = 0;
        UINT64 qpcPosition = 0;
        HRESULT hr = audioClock_->GetPosition(&position, &qpcPosition);
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            audioClockBaselineValid_.store(false);
            return;
        }

        audioClockStartPosition_.store(position);
        audioClockPosition_.store(position);
        audioClockQpcPosition_.store(qpcPosition);
        audioClockBaselineValid_.store(true);
    }

    void RenderLoop() {
        HRESULT coHr = CoInitializeEx(nullptr, COINIT_MULTITHREADED);
        DWORD taskIndex = 0;
        HANDLE mmcssHandle = AvSetMmThreadCharacteristicsW(L"Pro Audio", &taskIndex);
        std::chrono::steady_clock::time_point previousEventAt{};
        bool hasPreviousEvent = false;
        HANDLE waitHandles[] = {stopEvent_, timerDriven_ ? renderTimer_ : renderEvent_};

        while (!stopping_.load()) {
            DWORD waitResult = WaitForMultipleObjects(2, waitHandles, FALSE, 2000);
            if (stopping_.load()) {
                break;
            }

            if (waitResult == WAIT_OBJECT_0) {
                break;
            }
            if (waitResult == WAIT_OBJECT_0 + 1) {
                const auto eventAt = std::chrono::steady_clock::now();
                if (eventTimingResetRequested_.exchange(false)) {
                    hasPreviousEvent = false;
                }
                if (hasPreviousEvent) {
                    const auto intervalUs = std::chrono::duration_cast<std::chrono::microseconds>(eventAt - previousEventAt).count();
                    if (intervalUs > 0) {
                        TrackEventInterval(static_cast<uint64_t>(intervalUs));
                    }
                }
                previousEventAt = eventAt;
                hasPreviousEvent = true;
                eventWakeups_.fetch_add(1);
                if (!RenderAvailableFrames()) {
                    break;
                }
            } else if (waitResult == WAIT_TIMEOUT) {
                waitTimeouts_.fetch_add(1);
                lastRenderHr_.store(HRESULT_FROM_WIN32(WAIT_TIMEOUT));
                break;
            } else if (waitResult == WAIT_FAILED) {
                lastRenderHr_.store(HRESULT_FROM_WIN32(GetLastError()));
                break;
            }
        }

        if (mmcssHandle) {
            AvRevertMmThreadCharacteristics(mmcssHandle);
        }

        if (SUCCEEDED(coHr)) {
            CoUninitialize();
        }
    }

    bool RenderAvailableFrames() {
        std::lock_guard<std::mutex> audioLock(audioMutex_);
        if (!audioClient_ || !renderClient_) {
            lastRenderHr_.store(E_UNEXPECTED);
            return false;
        }

        UINT32 padding = 0;
        HRESULT hr = audioClient_->GetCurrentPadding(&padding);
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return false;
        }
        paddingFrames_.store(padding);

        if (padding >= bufferFrames_) {
            lastRenderHr_.store(S_OK);
            return true;
        }

        const UINT32 framesAvailable = bufferFrames_ - padding;
        UINT32 framesToWrite = framesAvailable;
        if (timerDriven_) {
            framesToWrite = periodFrames_ ? (framesAvailable / periodFrames_) * periodFrames_ : framesAvailable;
            if (framesToWrite == 0) {
                incompletePeriodWakeups_.fetch_add(1);
                lastRenderHr_.store(S_OK);
                return true;
            }
        } else if (framesAvailable != bufferFrames_) {
            incompleteEventBufferWakeups_.fetch_add(1);
            lastRenderHr_.store(S_OK);
            return true;
        }

        if (framesToWrite != bufferFrames_) {
            partialBufferWrites_.fetch_add(1);
        }
        BYTE* data = nullptr;
        hr = renderClient_->GetBuffer(framesToWrite, &data);
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return false;
        }

        const size_t bytesNeeded = static_cast<size_t>(framesToWrite) * blockAlign_;
        const size_t bytesRead = ReadRenderData(data, bytesNeeded);
        const UINT32 framesRead = static_cast<UINT32>(bytesRead / blockAlign_);
        if (bytesRead < bytesNeeded) {
            std::memset(data + bytesRead, 0, bytesNeeded - bytesRead);
            underruns_.fetch_add(1);
            underrunFrames_.fetch_add(framesToWrite - framesRead);
        }
        if (bytesRead) {
            ApplyOutputGain(data, framesToWrite);
        }

        hr = renderClient_->ReleaseBuffer(framesToWrite, bytesRead ? 0 : AUDCLNT_BUFFERFLAGS_SILENT);
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return false;
        }

        playedFrames_.fetch_add(framesRead);
        renderedFrames_.fetch_add(framesToWrite);
        periodPacketWrites_.fetch_add(timerDriven_ && periodFrames_ ? framesToWrite / periodFrames_ : 1);
        paddingFrames_.store(std::min<UINT32>(padding + framesToWrite, bufferFrames_));
        lastRenderHr_.store(S_OK);
        return true;
    }

    void CloseInternal() {
        bool wasStopping = stopping_.exchange(true);
        if (!wasStopping && stopEvent_) {
            SetEvent(stopEvent_);
        }

        if (renderThread_.joinable()) {
            renderThread_.join();
        }

        if (audioClient_ && started_.exchange(false)) {
            audioClient_->Stop();
        }

        if (renderTimer_) {
            CancelWaitableTimer(renderTimer_);
        }

        SafeRelease(renderClient_);
        SafeRelease(audioClock_);
        SafeRelease(audioClient_);
        SafeRelease(device_);
        pcmSource_.reset();

        if (renderEvent_) {
            CloseHandle(renderEvent_);
            renderEvent_ = nullptr;
        }
        if (renderTimer_) {
            CloseHandle(renderTimer_);
            renderTimer_ = nullptr;
        }
        if (stopEvent_) {
            CloseHandle(stopEvent_);
            stopEvent_ = nullptr;
        }

        if (comInitialized_) {
            CoUninitialize();
            comInitialized_ = false;
        }
    }

    void ResetEventTimingMetrics() {
        eventIntervalSamples_.store(0);
        eventIntervalTotalUs_.store(0);
        lastEventIntervalUs_.store(0);
        minEventIntervalUs_.store(std::numeric_limits<uint64_t>::max());
        maxEventIntervalUs_.store(0);
        lateEventWakeups_.store(0);
        eventTimingResetRequested_.store(true);
    }

    void TrackEventInterval(uint64_t intervalUs) {
        eventIntervalSamples_.fetch_add(1);
        eventIntervalTotalUs_.fetch_add(intervalUs);
        lastEventIntervalUs_.store(intervalUs);

        uint64_t minimum = minEventIntervalUs_.load();
        while (intervalUs < minimum && !minEventIntervalUs_.compare_exchange_weak(minimum, intervalUs)) {
        }

        uint64_t maximum = maxEventIntervalUs_.load();
        while (intervalUs > maximum && !maxEventIntervalUs_.compare_exchange_weak(maximum, intervalUs)) {
        }

        const double expectedIntervalUs = GetExpectedWakeupIntervalMs() * 1000.0;
        if (expectedIntervalUs > 0.0 && static_cast<double>(intervalUs) > expectedIntervalUs * 1.25) {
            lateEventWakeups_.fetch_add(1);
        }
    }

    double GetExpectedWakeupIntervalMs() const {
        if (timerDriven_) {
            return static_cast<double>(timerPollMs_);
        }
        return sampleRate_ ? (static_cast<double>(bufferFrames_) * 1000.0 / sampleRate_) : 0.0;
    }

    void ResetPlaybackMetrics() {
        playedFrames_.store(0);
        renderedFrames_.store(0);
        primedFrames_.store(0);
        sourceReadFrames_.store(0);
        paddingFrames_.store(0);
        underruns_.store(0);
        underrunFrames_.store(0);
        periodPacketWrites_.store(0);
        incompletePeriodWakeups_.store(0);
        incompleteEventBufferWakeups_.store(0);
        audioClockBaselineValid_.store(false);
        ResetEventTimingMetrics();
    }

    Napi::Value AttachPcmSource(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (info.Length() < 1) {
            Napi::TypeError::New(env, "Expected attachPcmSource(trackStore, byteOffset?: number)").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        std::shared_ptr<YaspPcmStore> source = GetYaspPcmStore(info[0]);
        if (!source) {
            Napi::TypeError::New(env, "Expected a native YaspTrackStore PCM source").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        size_t byteOffset = 0;
        if (info.Length() > 1 && info[1].IsNumber()) {
            const double rawOffset = info[1].As<Napi::Number>().DoubleValue();
            if (!std::isfinite(rawOffset) || rawOffset < 0) {
                Napi::RangeError::New(env, "PCM source byte offset must be a non-negative finite number").ThrowAsJavaScriptException();
                return env.Undefined();
            }
            byteOffset = AlignDown(static_cast<size_t>(rawOffset), blockAlign_);
        }

        std::lock_guard<std::mutex> audioLock(audioMutex_);
        if (started_.load()) {
            Napi::Error::New(env, "Cannot attach a PCM source after the WASAPI renderer has started").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        const YaspPcmStoreState sourceState = source->GetState();
        if (byteOffset > sourceState.bytes) {
            Napi::RangeError::New(env, "PCM source byte offset is beyond decoded audio").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        pcmSource_ = std::move(source);
        pcmSourceStartOffset_.store(byteOffset);
        pcmSourceOffset_.store(byteOffset);
        ResetPlaybackMetrics();
        return Napi::Boolean::New(env, true);
    }

    Napi::Value SeekPcmSource(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (!pcmSource_ || info.Length() < 1 || !info[0].IsNumber()) {
            return Napi::Boolean::New(env, false);
        }

        const double rawOffset = info[0].As<Napi::Number>().DoubleValue();
        if (!std::isfinite(rawOffset) || rawOffset < 0) {
            return Napi::Boolean::New(env, false);
        }

        const size_t byteOffset = AlignDown(static_cast<size_t>(rawOffset), blockAlign_);
        const YaspPcmStoreState sourceState = pcmSource_->GetState();
        const size_t endpointBytes = static_cast<size_t>(bufferFrames_) * blockAlign_;
        if (byteOffset > sourceState.bytes || sourceState.bytes - byteOffset < endpointBytes) {
            return Napi::Boolean::New(env, false);
        }

        std::lock_guard<std::mutex> audioLock(audioMutex_);
        const bool wasStarted = started_.load();
        HRESULT hr = wasStarted ? audioClient_->Stop() : S_OK;
        if (SUCCEEDED(hr) && wasStarted) {
            hr = audioClient_->Reset();
        }
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            Napi::Error::New(env, "Failed to reset WASAPI renderer for PCM seek: " + HResultToString(hr)).ThrowAsJavaScriptException();
            return env.Undefined();
        }

        pcmSourceStartOffset_.store(byteOffset);
        pcmSourceOffset_.store(byteOffset);
        ResetPlaybackMetrics();
        hr = PrimeFromQueue();
        if (SUCCEEDED(hr) && wasStarted) {
            hr = audioClient_->Start();
            if (SUCCEEDED(hr)) {
                CaptureAudioClockBaseline();
            }
        }
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            Napi::Error::New(env, "Failed to restart WASAPI renderer after PCM seek: " + HResultToString(hr)).ThrowAsJavaScriptException();
            return env.Undefined();
        }

        flushes_.fetch_add(1);
        lastRenderHr_.store(S_OK);
        return Napi::Boolean::New(env, true);
    }

    Napi::Value Start(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        HRESULT hr = StartInternal();
        if (FAILED(hr)) {
            Napi::Error::New(env, "Failed to start WASAPI exclusive renderer: " + HResultToString(hr)).ThrowAsJavaScriptException();
            return env.Undefined();
        }

        return Napi::Boolean::New(env, true);
    }

    Napi::Value SetVolumeGain(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (info.Length() < 1 || !info[0].IsNumber()) {
            Napi::TypeError::New(env, "Expected setVolumeGain(gain: number)").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        double gain = info[0].As<Napi::Number>().DoubleValue();
        if (!std::isfinite(gain)) {
            Napi::RangeError::New(env, "Volume gain must be a finite number").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        gain = std::min(std::max(gain, 0.0), 1.0);
        targetVolumeGain_.store(gain, std::memory_order_relaxed);
        if (!started_.load()) {
            currentVolumeGain_.store(gain, std::memory_order_relaxed);
        }
        return Napi::Number::New(env, gain);
    }

    Napi::Value Write(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (stopping_.load()) {
            return Napi::Number::New(env, 0);
        }

        if (info.Length() < 1 || !info[0].IsBuffer()) {
            Napi::TypeError::New(env, "Expected write(buffer: Buffer)").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        Napi::Buffer<uint8_t> buffer = info[0].As<Napi::Buffer<uint8_t>>();
        size_t written = queue_.Write(buffer.Data(), buffer.Length(), blockAlign_);
        writtenFrames_.fetch_add(written / blockAlign_);
        return Napi::Number::New(env, static_cast<double>(written));
    }

    HRESULT ResetAudioClientBufferAfterFlush() {
        std::lock_guard<std::mutex> audioLock(audioMutex_);
        if (!audioClient_ || !renderClient_ || !started_.load()) {
            return S_OK;
        }

        HRESULT hr = audioClient_->Stop();
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return hr;
        }

        hr = audioClient_->Reset();
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            HRESULT startHr = audioClient_->Start();
            if (FAILED(startHr)) {
                lastRenderHr_.store(startHr);
            }
            return hr;
        }

        hr = PrimeSilence();
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return hr;
        }

        paddingFrames_.store(bufferFrames_);
        ResetEventTimingMetrics();
        hr = audioClient_->Start();
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return hr;
        }

        lastRenderHr_.store(S_OK);
        return S_OK;
    }

    Napi::Value Flush(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (stopping_.load()) {
            return Napi::Number::New(env, 0);
        }

        const size_t cleared = queue_.Clear();
        flushes_.fetch_add(1);

        HRESULT hr = started_.load() ? ResetAudioClientBufferAfterFlush() : S_OK;
        if (FAILED(hr)) {
            Napi::Error::New(env, "Failed to flush WASAPI exclusive renderer: " + HResultToString(hr)).ThrowAsJavaScriptException();
            return env.Undefined();
        }

        return Napi::Number::New(env, static_cast<double>(cleared));
    }

    Napi::Value GetState(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        Napi::Object state = Napi::Object::New(env);
        const bool hasPcmSource = static_cast<bool>(pcmSource_);
        const YaspPcmStoreState pcmSourceState = hasPcmSource ? pcmSource_->GetState() : YaspPcmStoreState{};
        const size_t pcmSourceOffset = static_cast<size_t>(pcmSourceOffset_.load());
        const size_t pcmSourceStartOffset = static_cast<size_t>(pcmSourceStartOffset_.load());
        const size_t sourceAvailableBytes = hasPcmSource && pcmSourceState.bytes > pcmSourceOffset ? pcmSourceState.bytes - pcmSourceOffset : 0;
        const size_t queuedBytes = hasPcmSource ? sourceAvailableBytes : queue_.Size();
        const size_t queueCapacityBytes = hasPcmSource ? pcmSourceState.maxBytes : queue_.Capacity();
        HRESULT lastHr = static_cast<HRESULT>(lastRenderHr_.load());
        UINT32 currentPaddingFrames = paddingFrames_.load();
        const uint64_t eventIntervalSamples = eventIntervalSamples_.load();
        const uint64_t eventIntervalTotalUs = eventIntervalTotalUs_.load();
        const uint64_t minimumEventIntervalUs = minEventIntervalUs_.load();
        const double expectedEventIntervalMs = GetExpectedWakeupIntervalMs();
        const double averageEventIntervalMs = eventIntervalSamples ? (static_cast<double>(eventIntervalTotalUs) / eventIntervalSamples / 1000.0) : 0.0;
        UINT64 audioClockPosition = audioClockPosition_.load();
        UINT64 audioClockQpcPosition = audioClockQpcPosition_.load();
        const UINT64 audioClockStartPosition = audioClockStartPosition_.load();
        bool audioClockValid = audioClockBaselineValid_.load();

        if (!stopping_.load() && started_.load()) {
            std::lock_guard<std::mutex> audioLock(audioMutex_);
            UINT32 padding = 0;
            if (audioClient_) {
                HRESULT paddingHr = audioClient_->GetCurrentPadding(&padding);
                if (SUCCEEDED(paddingHr)) {
                    currentPaddingFrames = padding;
                    paddingFrames_.store(padding);
                } else {
                    lastHr = paddingHr;
                    lastRenderHr_.store(paddingHr);
                }
            }
            if (audioClock_ && audioClockFrequency_ > 0) {
                HRESULT clockHr = audioClock_->GetPosition(&audioClockPosition, &audioClockQpcPosition);
                if (SUCCEEDED(clockHr)) {
                    audioClockPosition_.store(audioClockPosition);
                    audioClockQpcPosition_.store(audioClockQpcPosition);
                    audioClockValid = audioClockBaselineValid_.load();
                } else {
                    lastHr = clockHr;
                    lastRenderHr_.store(clockHr);
                }
            }
        }

        const double audioClockElapsedFrames =
            audioClockValid && audioClockFrequency_ > 0 && audioClockPosition >= audioClockStartPosition
                ? static_cast<double>(audioClockPosition - audioClockStartPosition) * sampleRate_ / audioClockFrequency_
                : 0.0;

        state.Set("sampleRate", sampleRate_);
        state.Set("channels", channels_);
        state.Set("bitsPerSample", bitsPerSample_);
        state.Set("validBitsPerSample", bitsPerSample_);
        state.Set("containerBitsPerSample", containerBitsPerSample_);
        state.Set("sampleFormat", GetSampleFormatName(bitsPerSample_, containerBitsPerSample_, floatPcm_));
        state.Set("float", floatPcm_);
        state.Set("waveFormatExtensible", waveFormatExtensible_);
        state.Set("renderMode", timerDriven_ ? "timer" : "event");
        state.Set("timerPollMs", timerPollMs_);
        state.Set("timerPeriodMs", timerPeriodMs_);
        state.Set("timerBufferPeriods", timerBufferPeriods_);
        state.Set("bufferMs", bufferMs_);
        state.Set("bufferPeriodMode", bufferMs_ == 0 ? "device-default" : "explicit");
        state.Set("requestedBufferDurationMs", static_cast<double>(requestedBufferDuration_) / REFTIMES_PER_MILLISEC);
        state.Set("initializedBufferDurationMs", static_cast<double>(initializedBufferDuration_) / REFTIMES_PER_MILLISEC);
        state.Set("requestedPeriodicityMs", static_cast<double>(requestedPeriodicity_) / REFTIMES_PER_MILLISEC);
        state.Set("initializedPeriodicityMs", static_cast<double>(initializedPeriodicity_) / REFTIMES_PER_MILLISEC);
        state.Set("defaultDevicePeriodMs", static_cast<double>(defaultDevicePeriod_) / REFTIMES_PER_MILLISEC);
        state.Set("minimumDevicePeriodMs", static_cast<double>(minimumDevicePeriod_) / REFTIMES_PER_MILLISEC);
        state.Set("actualBufferMs", sampleRate_ ? (static_cast<double>(bufferFrames_) * 1000.0 / sampleRate_) : 0.0);
        state.Set("bufferAlignmentAdjusted", bufferAlignmentAdjusted_);
        state.Set("maxQueuedMs", maxQueuedMs_);
        state.Set("deviceId", WideToUtf8(resolvedDeviceId_));
        state.Set("deviceName", deviceName_);
        state.Set("blockAlign", blockAlign_);
        state.Set("bufferFrames", bufferFrames_);
        state.Set("periodFrames", periodFrames_);
        state.Set("paddingFrames", currentPaddingFrames);
        state.Set("queuedBytes", static_cast<double>(queuedBytes));
        state.Set("queuedFrames", static_cast<double>(queuedBytes / blockAlign_));
        state.Set("queueCapacityBytes", static_cast<double>(queueCapacityBytes));
        state.Set("queueCapacityFrames", static_cast<double>(queueCapacityBytes / blockAlign_));
        state.Set("droppedBytes", static_cast<double>(queue_.DroppedBytes()));
        state.Set("rejectedBytes", static_cast<double>(queue_.RejectedBytes()));
        state.Set("partialWrites", static_cast<double>(queue_.PartialWrites()));
        state.Set("writtenFrames", static_cast<double>(hasPcmSource ? pcmSourceState.totalReceivedBytes / blockAlign_ : writtenFrames_.load()));
        state.Set("playedFrames", static_cast<double>(playedFrames_.load()));
        state.Set("renderedFrames", static_cast<double>(renderedFrames_.load()));
        state.Set("primedFrames", static_cast<double>(primedFrames_.load()));
        state.Set("eventWakeups", static_cast<double>(eventWakeups_.load()));
        state.Set("renderWakeups", static_cast<double>(eventWakeups_.load()));
        state.Set("eventIntervalSamples", static_cast<double>(eventIntervalSamples));
        state.Set("expectedEventIntervalMs", expectedEventIntervalMs);
        state.Set("lastEventIntervalMs", static_cast<double>(lastEventIntervalUs_.load()) / 1000.0);
        state.Set("averageEventIntervalMs", averageEventIntervalMs);
        state.Set("minimumEventIntervalMs", eventIntervalSamples ? static_cast<double>(minimumEventIntervalUs) / 1000.0 : 0.0);
        state.Set("maximumEventIntervalMs", static_cast<double>(maxEventIntervalUs_.load()) / 1000.0);
        state.Set("eventCadenceRatio", expectedEventIntervalMs > 0.0 ? averageEventIntervalMs / expectedEventIntervalMs : 0.0);
        state.Set("lateEventWakeups", static_cast<double>(lateEventWakeups_.load()));
        state.Set("waitTimeouts", static_cast<double>(waitTimeouts_.load()));
        state.Set("partialBufferWrites", static_cast<double>(partialBufferWrites_.load()));
        state.Set("periodPacketWrites", static_cast<double>(periodPacketWrites_.load()));
        state.Set("incompletePeriodWakeups", static_cast<double>(incompletePeriodWakeups_.load()));
        state.Set("incompleteEventBufferWakeups", static_cast<double>(incompleteEventBufferWakeups_.load()));
        state.Set("underruns", static_cast<double>(underruns_.load()));
        state.Set("underrunFrames", static_cast<double>(underrunFrames_.load()));
        state.Set("flushes", static_cast<double>(flushes_.load()));
        state.Set("lastHRESULT", HResultToString(lastHr));
        state.Set("lastHRESULTCode", static_cast<double>(lastHr));
        state.Set("lastRenderHr", HResultToString(lastHr));
        state.Set("pcmSourceAttached", hasPcmSource);
        state.Set("pcmSourceBytes", static_cast<double>(pcmSourceState.bytes));
        state.Set("pcmSourceStartByteOffset", static_cast<double>(pcmSourceStartOffset));
        state.Set("pcmSourceByteOffset", static_cast<double>(pcmSourceOffset));
        state.Set("pcmSourceAvailableBytes", static_cast<double>(sourceAvailableBytes));
        state.Set("pcmSourceAvailableFrames", static_cast<double>(sourceAvailableBytes / blockAlign_));
        state.Set("pcmSourceReadFrames", static_cast<double>(sourceReadFrames_.load()));
        state.Set("audioClockAvailable", audioClock_ && audioClockFrequency_ > 0);
        state.Set("audioClockValid", audioClockValid);
        state.Set("audioClockFrequency", static_cast<double>(audioClockFrequency_));
        state.Set("audioClockStartPosition", static_cast<double>(audioClockStartPosition));
        state.Set("audioClockPosition", static_cast<double>(audioClockPosition));
        state.Set("audioClockQpcPosition", static_cast<double>(audioClockQpcPosition));
        state.Set("audioClockElapsedFrames", audioClockElapsedFrames);
        const double currentVolumeGain = currentVolumeGain_.load(std::memory_order_relaxed);
        const double targetVolumeGain = targetVolumeGain_.load(std::memory_order_relaxed);
        state.Set("volumeGain", currentVolumeGain);
        state.Set("targetVolumeGain", targetVolumeGain);
        state.Set("volumeProcessingActive", currentVolumeGain < 1.0 || targetVolumeGain < 1.0);
        state.Set("started", started_.load());
        state.Set("deferStart", deferStart_);
        state.Set("closed", stopping_.load());
        return state;
    }

    Napi::Value Close(const Napi::CallbackInfo& info) {
        CloseInternal();
        return info.Env().Undefined();
    }

    IMMDevice* device_ = nullptr;
    IAudioClient* audioClient_ = nullptr;
    IAudioRenderClient* renderClient_ = nullptr;
    IAudioClock* audioClock_ = nullptr;
    HANDLE stopEvent_ = nullptr;
    HANDLE renderEvent_ = nullptr;
    HANDLE renderTimer_ = nullptr;
    std::thread renderThread_;
    ByteRingBuffer queue_;
    std::shared_ptr<YaspPcmStore> pcmSource_;
    WAVEFORMATEXTENSIBLE waveFormat_{};
    WAVEFORMATEX legacyWaveFormat_{};
    std::mutex audioMutex_;
    bool comInitialized_ = false;
    std::wstring requestedDeviceId_;
    std::wstring resolvedDeviceId_;
    std::string deviceName_;
    uint32_t sampleRate_ = 48000;
    uint32_t channels_ = 2;
    uint32_t bitsPerSample_ = 32;
    uint32_t containerBitsPerSample_ = 32;
    uint32_t blockAlign_ = 8;
    uint32_t bufferMs_ = 50;
    uint32_t maxQueuedMs_ = 1000;
    uint32_t timerPollMs_ = 5;
    uint32_t timerPeriodMs_ = 10;
    uint32_t timerBufferPeriods_ = 4;
    REFERENCE_TIME defaultDevicePeriod_ = 0;
    REFERENCE_TIME minimumDevicePeriod_ = 0;
    REFERENCE_TIME requestedBufferDuration_ = 0;
    REFERENCE_TIME initializedBufferDuration_ = 0;
    REFERENCE_TIME requestedPeriodicity_ = 0;
    REFERENCE_TIME initializedPeriodicity_ = 0;
    UINT32 bufferFrames_ = 0;
    UINT32 periodFrames_ = 0;
    bool bufferAlignmentAdjusted_ = false;
    bool floatPcm_ = true;
    bool timerDriven_ = false;
    bool deferStart_ = false;
    bool waveFormatExtensible_ = true;
    std::atomic<bool> stopping_{true};
    std::atomic<bool> started_{false};
    std::atomic<uint64_t> writtenFrames_{0};
    std::atomic<uint64_t> pcmSourceStartOffset_{0};
    std::atomic<uint64_t> pcmSourceOffset_{0};
    std::atomic<uint64_t> sourceReadFrames_{0};
    std::atomic<double> currentVolumeGain_{1.0};
    std::atomic<double> targetVolumeGain_{1.0};
    std::atomic<uint64_t> playedFrames_{0};
    std::atomic<uint64_t> renderedFrames_{0};
    std::atomic<uint64_t> primedFrames_{0};
    std::atomic<uint64_t> eventWakeups_{0};
    std::atomic<uint64_t> eventIntervalSamples_{0};
    std::atomic<uint64_t> eventIntervalTotalUs_{0};
    std::atomic<uint64_t> lastEventIntervalUs_{0};
    std::atomic<uint64_t> minEventIntervalUs_{std::numeric_limits<uint64_t>::max()};
    std::atomic<uint64_t> maxEventIntervalUs_{0};
    std::atomic<uint64_t> lateEventWakeups_{0};
    std::atomic<bool> eventTimingResetRequested_{false};
    std::atomic<uint64_t> waitTimeouts_{0};
    std::atomic<uint64_t> partialBufferWrites_{0};
    std::atomic<uint64_t> periodPacketWrites_{0};
    std::atomic<uint64_t> incompletePeriodWakeups_{0};
    std::atomic<uint64_t> incompleteEventBufferWakeups_{0};
    std::atomic<uint64_t> underruns_{0};
    std::atomic<uint64_t> underrunFrames_{0};
    std::atomic<uint64_t> flushes_{0};
    std::atomic<UINT32> paddingFrames_{0};
    UINT64 audioClockFrequency_ = 0;
    std::atomic<UINT64> audioClockStartPosition_{0};
    std::atomic<UINT64> audioClockPosition_{0};
    std::atomic<UINT64> audioClockQpcPosition_{0};
    std::atomic<bool> audioClockBaselineValid_{false};
    std::atomic<long> lastRenderHr_{S_OK};
};

Napi::FunctionReference WasapiExclusiveRenderer::constructor;

Napi::Value IsSupported(const Napi::CallbackInfo& info) {
    return Napi::Boolean::New(info.Env(), true);
}

Napi::Value ListDevices(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    bool includeDisabled = false;
    bool includeFormats = true;
    if (info.Length() > 0 && info[0].IsObject()) {
        Napi::Object options = info[0].As<Napi::Object>();
        includeDisabled = GetBoolOption(options, "includeDisabled", false);
        includeFormats = GetBoolOption(options, "includeFormats", true);
    }

    HRESULT coHr = CoInitializeEx(nullptr, COINIT_MULTITHREADED);
    bool shouldUninitialize = SUCCEEDED(coHr);
    if (FAILED(coHr) && coHr != RPC_E_CHANGED_MODE) {
        Napi::Error::New(env, "Failed to initialize COM for WASAPI device enumeration: " + HResultToString(coHr)).ThrowAsJavaScriptException();
        return env.Undefined();
    }

    IMMDeviceEnumerator* enumerator = nullptr;
    HRESULT hr = CoCreateInstance(__uuidof(MMDeviceEnumerator), nullptr, CLSCTX_ALL, IID_PPV_ARGS(&enumerator));
    if (FAILED(hr)) {
        if (shouldUninitialize) {
            CoUninitialize();
        }
        Napi::Error::New(env, "Failed to create WASAPI device enumerator: " + HResultToString(hr)).ThrowAsJavaScriptException();
        return env.Undefined();
    }

    IMMDevice* defaultConsoleDevice = nullptr;
    IMMDevice* defaultMultimediaDevice = nullptr;
    IMMDevice* defaultCommunicationsDevice = nullptr;
    std::wstring defaultConsoleId;
    std::wstring defaultMultimediaId;
    std::wstring defaultCommunicationsId;

    if (SUCCEEDED(enumerator->GetDefaultAudioEndpoint(eRender, eConsole, &defaultConsoleDevice))) {
        defaultConsoleId = GetDeviceId(defaultConsoleDevice);
    }
    if (SUCCEEDED(enumerator->GetDefaultAudioEndpoint(eRender, eMultimedia, &defaultMultimediaDevice))) {
        defaultMultimediaId = GetDeviceId(defaultMultimediaDevice);
    }
    if (SUCCEEDED(enumerator->GetDefaultAudioEndpoint(eRender, eCommunications, &defaultCommunicationsDevice))) {
        defaultCommunicationsId = GetDeviceId(defaultCommunicationsDevice);
    }

    SafeRelease(defaultConsoleDevice);
    SafeRelease(defaultMultimediaDevice);
    SafeRelease(defaultCommunicationsDevice);

    IMMDeviceCollection* collection = nullptr;
    DWORD stateMask = includeDisabled ? DEVICE_STATE_ACTIVE | DEVICE_STATE_DISABLED | DEVICE_STATE_NOTPRESENT | DEVICE_STATE_UNPLUGGED : DEVICE_STATE_ACTIVE;
    hr = enumerator->EnumAudioEndpoints(eRender, stateMask, &collection);
    if (FAILED(hr)) {
        SafeRelease(enumerator);
        if (shouldUninitialize) {
            CoUninitialize();
        }
        Napi::Error::New(env, "Failed to enumerate WASAPI render devices: " + HResultToString(hr)).ThrowAsJavaScriptException();
        return env.Undefined();
    }

    UINT count = 0;
    collection->GetCount(&count);
    Napi::Array devices = Napi::Array::New(env, count);

    for (UINT index = 0; index < count; index += 1) {
        IMMDevice* device = nullptr;
        if (FAILED(collection->Item(index, &device)) || !device) {
            continue;
        }

        DWORD state = 0;
        device->GetState(&state);

        std::wstring id = GetDeviceId(device);
        Napi::Object item = Napi::Object::New(env);
        item.Set("id", WideToUtf8(id));
        item.Set("name", GetDeviceFriendlyName(device));
        item.Set("state", DeviceStateToString(state));
        item.Set("stateCode", static_cast<uint32_t>(state));
        item.Set("isDefault", id == defaultConsoleId);
        item.Set("isDefaultConsole", id == defaultConsoleId);
        item.Set("isDefaultMultimedia", id == defaultMultimediaId);
        item.Set("isDefaultCommunications", id == defaultCommunicationsId);
        if (includeFormats && state == DEVICE_STATE_ACTIVE) {
            Napi::Object formatInfo = ProbeSupportedFormats(env, device);
            item.Set("supportedFormats", formatInfo.Get("formats"));
            item.Set("supportedChannels", formatInfo.Get("channels"));
            item.Set("supportedBitsPerSample", formatInfo.Get("bitsPerSample"));
            item.Set("supportedContainerBitsPerSample", formatInfo.Get("containerBitsPerSample"));
            item.Set("supportedSampleRates", formatInfo.Get("sampleRates"));
            if (formatInfo.Has("probeError")) {
                item.Set("formatProbeError", formatInfo.Get("probeError"));
            }
        } else {
            item.Set("supportedFormats", Napi::Array::New(env));
            item.Set("supportedChannels", Napi::Array::New(env));
            item.Set("supportedBitsPerSample", Napi::Array::New(env));
            item.Set("supportedContainerBitsPerSample", Napi::Array::New(env));
            item.Set("supportedSampleRates", Napi::Array::New(env));
        }

        devices.Set(index, item);
        SafeRelease(device);
    }

    SafeRelease(collection);
    SafeRelease(enumerator);
    if (shouldUninitialize) {
        CoUninitialize();
    }

    return devices;
}

Napi::Value CreateRenderer(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    Napi::EscapableHandleScope scope(env);
    Napi::Value options = info.Length() > 0 && info[0].IsObject() ? info[0] : Napi::Object::New(env);
    return scope.Escape(WasapiExclusiveRenderer::constructor.New({options}));
}

} // namespace

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    WasapiExclusiveRenderer::InitClass(env, exports);
    InitYaspTrackStore(env, exports);
    exports.Set(Napi::String::New(env, "isSupported"), Napi::Function::New(env, IsSupported));
    exports.Set(Napi::String::New(env, "listDevices"), Napi::Function::New(env, ListDevices));
    exports.Set(Napi::String::New(env, "createRenderer"), Napi::Function::New(env, CreateRenderer));
    return exports;
}

NODE_API_MODULE(wasapi_exclusive, Init)
