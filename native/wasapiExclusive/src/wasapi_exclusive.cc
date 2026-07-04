#include "wasapi_exclusive.h"

#include <windows.h>
#include <mmdeviceapi.h>
#include <audioclient.h>
#include <avrt.h>
#include <mmreg.h>
#include <functiondiscoverykeys_devpkey.h>

#include <algorithm>
#include <atomic>
#include <cmath>
#include <cstdint>
#include <cstring>
#include <iomanip>
#include <mutex>
#include <sstream>
#include <string>
#include <thread>
#include <vector>

#pragma comment(lib, "ole32.lib")
#pragma comment(lib, "avrt.lib")
#pragma comment(lib, "uuid.lib")

namespace {

constexpr REFERENCE_TIME REFTIMES_PER_SEC = 10000000;
constexpr REFERENCE_TIME REFTIMES_PER_MILLISEC = 10000;

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

WAVEFORMATEXTENSIBLE BuildWaveFormat(uint32_t sampleRate, uint32_t channels, uint32_t bitsPerSample, bool floatPcm) {
    WAVEFORMATEXTENSIBLE waveFormat{};
    const uint32_t blockAlign = channels * (bitsPerSample / 8);

    waveFormat.Format.wFormatTag = WAVE_FORMAT_EXTENSIBLE;
    waveFormat.Format.nChannels = static_cast<WORD>(channels);
    waveFormat.Format.nSamplesPerSec = sampleRate;
    waveFormat.Format.wBitsPerSample = static_cast<WORD>(bitsPerSample);
    waveFormat.Format.nBlockAlign = static_cast<WORD>(blockAlign);
    waveFormat.Format.nAvgBytesPerSec = sampleRate * blockAlign;
    waveFormat.Format.cbSize = sizeof(WAVEFORMATEXTENSIBLE) - sizeof(WAVEFORMATEX);
    waveFormat.Samples.wValidBitsPerSample = static_cast<WORD>(bitsPerSample);
    waveFormat.dwChannelMask = GetChannelMask(channels);
    waveFormat.SubFormat = floatPcm ? PULSE_SYNC_KSDATAFORMAT_SUBTYPE_IEEE_FLOAT : PULSE_SYNC_KSDATAFORMAT_SUBTYPE_PCM;

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

Napi::Object CreateFormatInfo(Napi::Env env, uint32_t sampleRate, uint32_t channels, uint32_t bitsPerSample, bool floatPcm) {
    Napi::Object format = Napi::Object::New(env);
    format.Set("sampleRate", sampleRate);
    format.Set("channels", channels);
    format.Set("bitsPerSample", bitsPerSample);
    format.Set("float", floatPcm);
    format.Set("sampleFormat", floatPcm ? "float32" : "pcm");
    return format;
}

Napi::Object ProbeSupportedFormats(Napi::Env env, IMMDevice* device) {
    Napi::Object result = Napi::Object::New(env);
    std::vector<uint32_t> supportedChannels;
    std::vector<uint32_t> supportedBitsPerSample;
    std::vector<uint32_t> supportedSampleRates;
    Napi::Array formats = Napi::Array::New(env);
    uint32_t formatIndex = 0;

    IAudioClient* audioClient = nullptr;
    HRESULT hr = device ? device->Activate(__uuidof(IAudioClient), CLSCTX_ALL, nullptr, reinterpret_cast<void**>(&audioClient)) : E_POINTER;
    if (FAILED(hr)) {
        result.Set("formats", formats);
        result.Set("channels", ToNumberArray(env, supportedChannels));
        result.Set("bitsPerSample", ToNumberArray(env, supportedBitsPerSample));
        result.Set("sampleRates", ToNumberArray(env, supportedSampleRates));
        result.Set("probeError", HResultToString(hr));
        return result;
    }

    const uint32_t probeChannels[] = {1, 2};
    const uint32_t probeSampleRates[] = {8000, 11025, 16000, 22050, 32000, 44100, 48000, 88200, 96000, 176400, 192000, 352800, 384000};
    const uint32_t probePcmBits[] = {16, 24, 32};

    const auto probeFormat = [&](uint32_t sampleRate, uint32_t channels, uint32_t bitsPerSample, bool floatPcm) {
        WAVEFORMATEXTENSIBLE waveFormat = BuildWaveFormat(sampleRate, channels, bitsPerSample, floatPcm);
        HRESULT formatHr = audioClient->IsFormatSupported(AUDCLNT_SHAREMODE_EXCLUSIVE, reinterpret_cast<WAVEFORMATEX*>(&waveFormat), nullptr);
        if (formatHr != S_OK) {
            return;
        }

        formats.Set(formatIndex, CreateFormatInfo(env, sampleRate, channels, bitsPerSample, floatPcm));
        formatIndex += 1;
        PushUnique(supportedChannels, channels);
        PushUnique(supportedBitsPerSample, bitsPerSample);
        PushUnique(supportedSampleRates, sampleRate);
    };

    for (uint32_t channels : probeChannels) {
        for (uint32_t sampleRate : probeSampleRates) {
            for (uint32_t bitsPerSample : probePcmBits) {
                probeFormat(sampleRate, channels, bitsPerSample, false);
            }
            probeFormat(sampleRate, channels, 32, true);
        }
    }

    SafeRelease(audioClient);

    result.Set("formats", formats);
    result.Set("channels", ToNumberArray(env, supportedChannels));
    result.Set("bitsPerSample", ToNumberArray(env, supportedBitsPerSample));
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
    }

    size_t Write(const uint8_t* data, size_t length, size_t alignment) {
        std::lock_guard<std::mutex> lock(mutex_);
        if (!capacity_ || !data || !length) {
            return 0;
        }

        length = AlignDown(length, alignment);
        if (!length) {
            return 0;
        }

        if (length > capacity_) {
            const size_t skip = AlignDown(length - capacity_, alignment);
            data += skip;
            length -= skip;
            DropNoLock(size_);
        }

        const size_t missingSpace = length > capacity_ - size_ ? length - (capacity_ - size_) : 0;
        if (missingSpace > 0) {
            DropNoLock(AlignUp(missingSpace, alignment));
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

    uint64_t DroppedBytes() const {
        std::lock_guard<std::mutex> lock(mutex_);
        return droppedBytes_;
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
        bufferMs_ = GetUintOption(options, "bufferMs", 50, 10, 500);
        maxQueuedMs_ = GetUintOption(options, "maxQueuedMs", 1000, 50, 10000);
        requestedDeviceId_ = GetStringOption(options, "deviceId");

        if (!floatPcm_ && bitsPerSample_ != 16 && bitsPerSample_ != 24 && bitsPerSample_ != 32) {
            Napi::RangeError::New(env, "bitsPerSample must be 16, 24, or 32 for integer PCM").ThrowAsJavaScriptException();
            return;
        }

        blockAlign_ = channels_ * (bitsPerSample_ / 8);
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

        hr = audioClient_->IsFormatSupported(AUDCLNT_SHAREMODE_EXCLUSIVE, reinterpret_cast<WAVEFORMATEX*>(&waveFormat_), nullptr);
        if (hr != S_OK) {
            return FAILED(hr) ? hr : AUDCLNT_E_UNSUPPORTED_FORMAT;
        }

        REFERENCE_TIME defaultPeriod = 0;
        REFERENCE_TIME minimumPeriod = 0;
        hr = audioClient_->GetDevicePeriod(&defaultPeriod, &minimumPeriod);
        if (FAILED(hr)) {
            return hr;
        }

        REFERENCE_TIME bufferDuration = std::max<REFERENCE_TIME>(static_cast<REFERENCE_TIME>(bufferMs_) * REFTIMES_PER_MILLISEC, minimumPeriod);
        hr = InitializeAudioClient(bufferDuration);
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
            hr = InitializeAudioClient(bufferDuration);
        }

        if (FAILED(hr)) {
            return hr;
        }

        renderEvent_ = CreateEvent(nullptr, FALSE, FALSE, nullptr);
        if (!renderEvent_) {
            return HRESULT_FROM_WIN32(GetLastError());
        }

        hr = audioClient_->SetEventHandle(renderEvent_);
        if (FAILED(hr)) {
            return hr;
        }

        hr = audioClient_->GetService(__uuidof(IAudioRenderClient), reinterpret_cast<void**>(&renderClient_));
        if (FAILED(hr)) {
            return hr;
        }

        hr = audioClient_->GetBufferSize(&bufferFrames_);
        if (FAILED(hr)) {
            return hr;
        }

        const size_t queueCapacity = static_cast<size_t>(sampleRate_) * blockAlign_ * maxQueuedMs_ / 1000;
        queue_.Reset(queueCapacity, blockAlign_);

        hr = PrimeSilence();
        if (FAILED(hr)) {
            return hr;
        }

        stopping_.store(false);
        renderThread_ = std::thread(&WasapiExclusiveRenderer::RenderLoop, this);

        hr = audioClient_->Start();
        if (FAILED(hr)) {
            stopping_.store(true);
            SetEvent(renderEvent_);
            if (renderThread_.joinable()) {
                renderThread_.join();
            }
            return hr;
        }

        started_.store(true);
        return S_OK;
    }

    HRESULT InitializeAudioClient(REFERENCE_TIME bufferDuration) {
        return audioClient_->Initialize(
            AUDCLNT_SHAREMODE_EXCLUSIVE,
            AUDCLNT_STREAMFLAGS_EVENTCALLBACK | AUDCLNT_STREAMFLAGS_NOPERSIST,
            bufferDuration,
            bufferDuration,
            reinterpret_cast<WAVEFORMATEX*>(&waveFormat_),
            nullptr
        );
    }

    void BuildWaveFormat() {
        waveFormat_ = ::BuildWaveFormat(sampleRate_, channels_, bitsPerSample_, floatPcm_);
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

    void RenderLoop() {
        HRESULT coHr = CoInitializeEx(nullptr, COINIT_MULTITHREADED);
        DWORD taskIndex = 0;
        HANDLE mmcssHandle = AvSetMmThreadCharacteristicsW(L"Pro Audio", &taskIndex);

        while (!stopping_.load()) {
            DWORD waitResult = WaitForSingleObject(renderEvent_, 2000);
            if (stopping_.load()) {
                break;
            }

            if (waitResult == WAIT_OBJECT_0 || waitResult == WAIT_TIMEOUT) {
                RenderAvailableFrames();
            }
        }

        if (mmcssHandle) {
            AvRevertMmThreadCharacteristics(mmcssHandle);
        }

        if (SUCCEEDED(coHr)) {
            CoUninitialize();
        }
    }

    void RenderAvailableFrames() {
        UINT32 padding = 0;
        HRESULT hr = audioClient_->GetCurrentPadding(&padding);
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return;
        }

        if (padding >= bufferFrames_) {
            return;
        }

        const UINT32 framesAvailable = bufferFrames_ - padding;
        BYTE* data = nullptr;
        hr = renderClient_->GetBuffer(framesAvailable, &data);
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return;
        }

        const size_t bytesNeeded = static_cast<size_t>(framesAvailable) * blockAlign_;
        const size_t bytesRead = queue_.Read(data, bytesNeeded, blockAlign_);
        if (bytesRead < bytesNeeded) {
            std::memset(data + bytesRead, 0, bytesNeeded - bytesRead);
            underruns_.fetch_add(1);
        }

        hr = renderClient_->ReleaseBuffer(framesAvailable, 0);
        if (FAILED(hr)) {
            lastRenderHr_.store(hr);
            return;
        }

        renderedFrames_.fetch_add(framesAvailable);
        lastRenderHr_.store(S_OK);
    }

    void CloseInternal() {
        bool wasStopping = stopping_.exchange(true);
        if (!wasStopping && renderEvent_) {
            SetEvent(renderEvent_);
        }

        if (renderThread_.joinable()) {
            renderThread_.join();
        }

        if (audioClient_ && started_.exchange(false)) {
            audioClient_->Stop();
        }

        SafeRelease(renderClient_);
        SafeRelease(audioClient_);
        SafeRelease(device_);

        if (renderEvent_) {
            CloseHandle(renderEvent_);
            renderEvent_ = nullptr;
        }

        if (comInitialized_) {
            CoUninitialize();
            comInitialized_ = false;
        }
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
        return Napi::Number::New(env, static_cast<double>(written));
    }

    Napi::Value GetState(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        Napi::Object state = Napi::Object::New(env);
        state.Set("sampleRate", sampleRate_);
        state.Set("channels", channels_);
        state.Set("bitsPerSample", bitsPerSample_);
        state.Set("float", floatPcm_);
        state.Set("bufferMs", bufferMs_);
        state.Set("maxQueuedMs", maxQueuedMs_);
        state.Set("deviceId", WideToUtf8(resolvedDeviceId_));
        state.Set("deviceName", deviceName_);
        state.Set("blockAlign", blockAlign_);
        state.Set("bufferFrames", bufferFrames_);
        state.Set("queuedBytes", static_cast<double>(queue_.Size()));
        state.Set("droppedBytes", static_cast<double>(queue_.DroppedBytes()));
        state.Set("renderedFrames", static_cast<double>(renderedFrames_.load()));
        state.Set("underruns", static_cast<double>(underruns_.load()));
        state.Set("lastRenderHr", HResultToString(static_cast<HRESULT>(lastRenderHr_.load())));
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
    HANDLE renderEvent_ = nullptr;
    std::thread renderThread_;
    ByteRingBuffer queue_;
    WAVEFORMATEXTENSIBLE waveFormat_{};
    bool comInitialized_ = false;
    std::wstring requestedDeviceId_;
    std::wstring resolvedDeviceId_;
    std::string deviceName_;
    uint32_t sampleRate_ = 48000;
    uint32_t channels_ = 2;
    uint32_t bitsPerSample_ = 32;
    uint32_t blockAlign_ = 8;
    uint32_t bufferMs_ = 50;
    uint32_t maxQueuedMs_ = 1000;
    UINT32 bufferFrames_ = 0;
    bool floatPcm_ = true;
    std::atomic<bool> stopping_{true};
    std::atomic<bool> started_{false};
    std::atomic<uint64_t> renderedFrames_{0};
    std::atomic<uint64_t> underruns_{0};
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
            item.Set("supportedSampleRates", formatInfo.Get("sampleRates"));
            if (formatInfo.Has("probeError")) {
                item.Set("formatProbeError", formatInfo.Get("probeError"));
            }
        } else {
            item.Set("supportedFormats", Napi::Array::New(env));
            item.Set("supportedChannels", Napi::Array::New(env));
            item.Set("supportedBitsPerSample", Napi::Array::New(env));
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
    exports.Set(Napi::String::New(env, "isSupported"), Napi::Function::New(env, IsSupported));
    exports.Set(Napi::String::New(env, "listDevices"), Napi::Function::New(env, ListDevices));
    exports.Set(Napi::String::New(env, "createRenderer"), Napi::Function::New(env, CreateRenderer));
    return exports;
}

NODE_API_MODULE(wasapi_exclusive, Init)
