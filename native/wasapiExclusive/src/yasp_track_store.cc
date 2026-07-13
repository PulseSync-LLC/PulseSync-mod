#include "yasp_track_store.h"

#include <windows.h>

#include <algorithm>
#include <atomic>
#include <cmath>
#include <cstdint>
#include <cstring>
#include <limits>
#include <memory>
#include <mutex>
#include <vector>

namespace {

size_t GetSizeOption(const Napi::Object& options, const char* key, size_t fallback, size_t minValue, size_t maxValue) {
    Napi::Value value = options.Get(key);
    if (!value.IsNumber()) {
        return fallback;
    }

    const double number = value.As<Napi::Number>().DoubleValue();
    if (!std::isfinite(number)) {
        return fallback;
    }

    const double clamped = std::min(std::max(number, static_cast<double>(minValue)), static_cast<double>(maxValue));
    return static_cast<size_t>(clamped + 0.5);
}

bool GetFiniteNumber(const Napi::Object& object, const char* key, double& output) {
    Napi::Value value = object.Get(key);
    if (!value.IsNumber()) {
        return false;
    }

    const double number = value.As<Napi::Number>().DoubleValue();
    if (!std::isfinite(number)) {
        return false;
    }

    output = number;
    return true;
}

class PagedByteStore {
public:
    PagedByteStore(size_t maxBytes, size_t pageSize) : maxBytes_(maxBytes), pageSize_(pageSize) {}

    bool Append(const uint8_t* data, size_t length) {
        if (!data || !length) {
            return true;
        }
        if (length > maxBytes_ - size_) {
            return false;
        }

        size_t sourceOffset = 0;
        while (sourceOffset < length) {
            if (pages_.empty() || pages_.back()->size() == pageSize_) {
                auto page = std::make_unique<std::vector<uint8_t>>();
                page->reserve(pageSize_);
                pages_.push_back(std::move(page));
            }

            std::vector<uint8_t>& page = *pages_.back();
            const size_t copyLength = std::min(length - sourceOffset, pageSize_ - page.size());
            const size_t previousSize = page.size();
            page.resize(previousSize + copyLength);
            std::memcpy(page.data() + previousSize, data + sourceOffset, copyLength);
            sourceOffset += copyLength;
            size_ += copyLength;
        }

        return true;
    }

    size_t Read(size_t offset, uint8_t* destination, size_t length) const {
        if (!destination || !length || offset >= size_) {
            return 0;
        }

        const size_t readLength = std::min(length, size_ - offset);
        size_t outputOffset = 0;
        size_t pageIndex = offset / pageSize_;
        size_t pageOffset = offset % pageSize_;
        while (outputOffset < readLength && pageIndex < pages_.size()) {
            const std::vector<uint8_t>& page = *pages_[pageIndex];
            if (pageOffset >= page.size()) {
                break;
            }

            const size_t copyLength = std::min(readLength - outputOffset, page.size() - pageOffset);
            std::memcpy(destination + outputOffset, page.data() + pageOffset, copyLength);
            outputOffset += copyLength;
            pageIndex += 1;
            pageOffset = 0;
        }
        return outputOffset;
    }

    void Clear() {
        pages_.clear();
        size_ = 0;
    }

    size_t Size() const {
        return size_;
    }

    size_t MaxBytes() const {
        return maxBytes_;
    }

    size_t PageSize() const {
        return pageSize_;
    }

    size_t PageCount() const {
        return pages_.size();
    }

private:
    size_t maxBytes_;
    size_t pageSize_;
    size_t size_ = 0;
    std::vector<std::unique_ptr<std::vector<uint8_t>>> pages_;
};

class YaspTrackStore : public Napi::ObjectWrap<YaspTrackStore> {
public:
    static Napi::FunctionReference constructor;

    static void InitClass(Napi::Env env, Napi::Object exports) {
        Napi::Function func = DefineClass(
            env,
            "YaspTrackStore",
            {
                InstanceMethod("appendEncoded", &YaspTrackStore::AppendEncoded),
                InstanceMethod("readEncodedChunk", &YaspTrackStore::ReadEncodedChunk),
                InstanceMethod("appendPcm", &YaspTrackStore::AppendPcm),
                InstanceMethod("readPcm", &YaspTrackStore::ReadPcm),
                InstanceMethod("clear", &YaspTrackStore::Clear),
                InstanceMethod("getState", &YaspTrackStore::GetState),
            }
        );

        constructor = Napi::Persistent(func);
        constructor.SuppressDestruct();
        exports.Set("YaspTrackStore", func);
    }

    explicit YaspTrackStore(const Napi::CallbackInfo& info)
        : Napi::ObjectWrap<YaspTrackStore>(info),
          encodedStore_(GetMaxEncodedBytes(info), GetPageSize(info)),
          pcmStore_(std::make_shared<YaspPcmStore>(GetMaxPcmBytes(info), GetPageSize(info))) {}

    std::shared_ptr<YaspPcmStore> GetPcmStore() const {
        return pcmStore_;
    }

private:
    struct EncodedChunk {
        size_t offset = 0;
        size_t length = 0;
        double appendSequence = 0;
        double timelineStartSeconds = 0;
        double timelineEndSeconds = 0;
        bool hasAppendSequence = false;
        bool hasTimelineStart = false;
        bool hasTimelineEnd = false;
    };

    static Napi::Object GetOptions(const Napi::CallbackInfo& info) {
        return info.Length() > 0 && info[0].IsObject() ? info[0].As<Napi::Object>() : Napi::Object::New(info.Env());
    }

    static size_t GetPageSize(const Napi::CallbackInfo& info) {
        return GetSizeOption(GetOptions(info), "pageSize", 1024 * 1024, 64 * 1024, 8 * 1024 * 1024);
    }

    static size_t GetMaxEncodedBytes(const Napi::CallbackInfo& info) {
        return GetSizeOption(GetOptions(info), "maxEncodedBytes", 128 * 1024 * 1024, 1024 * 1024, 1024ULL * 1024 * 1024);
    }

    static size_t GetMaxPcmBytes(const Napi::CallbackInfo& info) {
        return GetSizeOption(GetOptions(info), "maxPcmBytes", 512 * 1024 * 1024, 8 * 1024 * 1024, 2ULL * 1024 * 1024 * 1024);
    }

    Napi::Value AppendEncoded(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (info.Length() < 1 || !info[0].IsBuffer()) {
            Napi::TypeError::New(env, "Expected appendEncoded(buffer: Buffer, meta?: object)").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        Napi::Buffer<uint8_t> buffer = info[0].As<Napi::Buffer<uint8_t>>();
        Napi::Object meta = info.Length() > 1 && info[1].IsObject() ? info[1].As<Napi::Object>() : Napi::Object::New(env);
        std::lock_guard<std::mutex> lock(mutex_);

        const size_t offset = encodedStore_.Size();
        if (!encodedStore_.Append(buffer.Data(), buffer.Length())) {
            rejectedEncodedBytes_ += buffer.Length();
            return CreateAppendResult(env, false, encodedChunks_.size(), offset, buffer.Length(), "encoded store capacity exceeded");
        }

        EncodedChunk chunk;
        chunk.offset = offset;
        chunk.length = buffer.Length();
        chunk.hasAppendSequence = GetFiniteNumber(meta, "appendSequence", chunk.appendSequence);
        chunk.hasTimelineStart = GetFiniteNumber(meta, "timelineStartSeconds", chunk.timelineStartSeconds);
        chunk.hasTimelineEnd = GetFiniteNumber(meta, "timelineEndSeconds", chunk.timelineEndSeconds);
        if (chunk.hasAppendSequence) {
            if (hasLastAppendSequence_ && chunk.appendSequence <= lastAppendSequence_) {
                outOfOrderChunks_ += 1;
            }
            lastAppendSequence_ = chunk.appendSequence;
            hasLastAppendSequence_ = true;
        }

        const size_t chunkIndex = encodedChunks_.size();
        encodedChunks_.push_back(chunk);
        totalEncodedReceivedBytes_ += buffer.Length();
        return CreateAppendResult(env, true, chunkIndex, offset, buffer.Length(), nullptr);
    }

    Napi::Value ReadEncodedChunk(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (info.Length() < 1 || !info[0].IsNumber()) {
            Napi::TypeError::New(env, "Expected readEncodedChunk(index: number)").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        const double rawIndex = info[0].As<Napi::Number>().DoubleValue();
        if (!std::isfinite(rawIndex) || rawIndex < 0 || rawIndex > static_cast<double>(std::numeric_limits<uint32_t>::max())) {
            return env.Null();
        }

        std::lock_guard<std::mutex> lock(mutex_);
        const size_t index = static_cast<size_t>(rawIndex);
        if (index >= encodedChunks_.size()) {
            return env.Null();
        }

        const EncodedChunk& chunk = encodedChunks_[index];
        Napi::Buffer<uint8_t> output = Napi::Buffer<uint8_t>::New(env, chunk.length);
        const size_t bytesRead = encodedStore_.Read(chunk.offset, output.Data(), chunk.length);
        if (bytesRead != chunk.length) {
            Napi::Error::New(env, "Failed to read a complete encoded chunk from native track store").ThrowAsJavaScriptException();
            return env.Undefined();
        }
        return output;
    }

    Napi::Value AppendPcm(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (info.Length() < 1 || !info[0].IsBuffer()) {
            Napi::TypeError::New(env, "Expected appendPcm(buffer: Buffer)").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        Napi::Buffer<uint8_t> buffer = info[0].As<Napi::Buffer<uint8_t>>();
        const YaspPcmStoreState before = pcmStore_->GetState();
        const size_t offset = before.bytes;
        const bool accepted = pcmStore_->Append(buffer.Data(), buffer.Length());
        const YaspPcmStoreState after = pcmStore_->GetState();

        Napi::Object result = Napi::Object::New(env);
        result.Set("accepted", accepted);
        result.Set("offset", static_cast<double>(offset));
        result.Set("length", static_cast<double>(buffer.Length()));
        result.Set("pcmBytes", static_cast<double>(after.bytes));
        result.Set("rejectedPcmBytes", static_cast<double>(after.rejectedBytes));
        if (!accepted) {
            result.Set("reason", "pcm store capacity exceeded");
        }
        return result;
    }

    Napi::Value ReadPcm(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (info.Length() < 2 || !info[0].IsNumber() || !info[1].IsNumber()) {
            Napi::TypeError::New(env, "Expected readPcm(offset: number, length: number)").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        const double rawOffset = info[0].As<Napi::Number>().DoubleValue();
        const double rawLength = info[1].As<Napi::Number>().DoubleValue();
        if (!std::isfinite(rawOffset) || !std::isfinite(rawLength) || rawOffset < 0 || rawLength <= 0) {
            return env.Null();
        }

        const size_t offset = static_cast<size_t>(rawOffset);
        const YaspPcmStoreState state = pcmStore_->GetState();
        if (offset >= state.bytes) {
            return env.Null();
        }

        const size_t requestedLength = static_cast<size_t>(rawLength);
        const size_t readLength = std::min(requestedLength, state.bytes - offset);
        Napi::Buffer<uint8_t> output = Napi::Buffer<uint8_t>::New(env, readLength);
        const size_t bytesRead = pcmStore_->Read(offset, output.Data(), readLength);
        if (bytesRead != readLength) {
            Napi::Error::New(env, "Failed to read a complete PCM range from native track store").ThrowAsJavaScriptException();
            return env.Undefined();
        }
        return output;
    }

    Napi::Value Clear(const Napi::CallbackInfo& info) {
        std::lock_guard<std::mutex> lock(mutex_);
        const size_t encodedBytes = encodedStore_.Size();
        const size_t pcmBytes = pcmStore_->Clear();
        encodedStore_.Clear();
        encodedChunks_.clear();
        hasLastAppendSequence_ = false;

        Napi::Object result = Napi::Object::New(info.Env());
        result.Set("clearedEncodedBytes", static_cast<double>(encodedBytes));
        result.Set("clearedPcmBytes", static_cast<double>(pcmBytes));
        return result;
    }

    Napi::Value GetState(const Napi::CallbackInfo& info) {
        std::lock_guard<std::mutex> lock(mutex_);
        const YaspPcmStoreState pcmState = pcmStore_->GetState();
        Napi::Object state = Napi::Object::New(info.Env());
        state.Set("backend", "native-paged-track-store");
        state.Set("pageSize", static_cast<double>(encodedStore_.PageSize()));
        state.Set("maxEncodedBytes", static_cast<double>(encodedStore_.MaxBytes()));
        state.Set("maxPcmBytes", static_cast<double>(pcmState.maxBytes));
        state.Set("encodedBytes", static_cast<double>(encodedStore_.Size()));
        state.Set("encodedPages", static_cast<double>(encodedStore_.PageCount()));
        state.Set("encodedChunkCount", static_cast<double>(encodedChunks_.size()));
        state.Set("pcmBytes", static_cast<double>(pcmState.bytes));
        state.Set("pcmPages", static_cast<double>(pcmState.pages));
        state.Set("totalEncodedReceivedBytes", static_cast<double>(totalEncodedReceivedBytes_));
        state.Set("totalPcmReceivedBytes", static_cast<double>(pcmState.totalReceivedBytes));
        state.Set("rejectedEncodedBytes", static_cast<double>(rejectedEncodedBytes_));
        state.Set("rejectedPcmBytes", static_cast<double>(pcmState.rejectedBytes));
        state.Set("outOfOrderChunks", static_cast<double>(outOfOrderChunks_));
        if (hasLastAppendSequence_) {
            state.Set("lastAppendSequence", lastAppendSequence_);
        } else {
            state.Set("lastAppendSequence", info.Env().Null());
        }
        return state;
    }

    Napi::Object CreateAppendResult(Napi::Env env, bool accepted, size_t chunkIndex, size_t offset, size_t length, const char* reason) const {
        Napi::Object result = Napi::Object::New(env);
        result.Set("accepted", accepted);
        result.Set("chunkIndex", static_cast<double>(chunkIndex));
        result.Set("offset", static_cast<double>(offset));
        result.Set("length", static_cast<double>(length));
        result.Set("encodedBytes", static_cast<double>(encodedStore_.Size()));
        result.Set("encodedChunkCount", static_cast<double>(encodedChunks_.size()));
        result.Set("rejectedEncodedBytes", static_cast<double>(rejectedEncodedBytes_));
        if (reason) {
            result.Set("reason", reason);
        }
        return result;
    }

    std::mutex mutex_;
    PagedByteStore encodedStore_;
    std::shared_ptr<YaspPcmStore> pcmStore_;
    std::vector<EncodedChunk> encodedChunks_;
    uint64_t totalEncodedReceivedBytes_ = 0;
    uint64_t rejectedEncodedBytes_ = 0;
    uint64_t outOfOrderChunks_ = 0;
    double lastAppendSequence_ = 0;
    bool hasLastAppendSequence_ = false;
};

Napi::FunctionReference YaspTrackStore::constructor;

} // namespace

struct YaspPcmStore::Impl {
    Impl(size_t maxBytesValue, size_t pageSizeValue) : maxBytes(maxBytesValue), pageSize(pageSizeValue) {
        data = static_cast<uint8_t*>(VirtualAlloc(nullptr, maxBytes, MEM_RESERVE, PAGE_READWRITE));
    }

    ~Impl() {
        if (data) {
            VirtualFree(data, 0, MEM_RELEASE);
        }
    }

    bool EnsureCommitted(size_t requiredBytes) {
        if (!data || requiredBytes > maxBytes) {
            return false;
        }
        const size_t currentCommittedBytes = committedBytes.load(std::memory_order_relaxed);
        if (requiredBytes <= currentCommittedBytes) {
            return true;
        }

        const size_t targetBytes = std::min(((requiredBytes + pageSize - 1) / pageSize) * pageSize, maxBytes);
        const size_t commitLength = targetBytes - currentCommittedBytes;
        void* committed = VirtualAlloc(data + currentCommittedBytes, commitLength, MEM_COMMIT, PAGE_READWRITE);
        if (!committed) {
            return false;
        }

        committedBytes.store(targetBytes, std::memory_order_release);
        return true;
    }

    uint8_t* data = nullptr;
    const size_t maxBytes;
    const size_t pageSize;
    std::atomic<size_t> committedBytes{0};
    mutable std::mutex writerMutex;
    std::atomic<size_t> publishedBytes{0};
    std::atomic<uint64_t> totalReceivedBytes{0};
    std::atomic<uint64_t> rejectedBytes{0};
};

YaspPcmStore::YaspPcmStore(size_t maxBytes, size_t pageSize) : impl_(std::make_unique<Impl>(maxBytes, pageSize)) {}

YaspPcmStore::~YaspPcmStore() = default;

bool YaspPcmStore::Append(const uint8_t* data, size_t length) {
    if (!data || !length) {
        return true;
    }

    std::lock_guard<std::mutex> lock(impl_->writerMutex);
    const size_t offset = impl_->publishedBytes.load(std::memory_order_relaxed);
    if (length > impl_->maxBytes - offset || !impl_->EnsureCommitted(offset + length)) {
        impl_->rejectedBytes.fetch_add(length, std::memory_order_relaxed);
        return false;
    }

    std::memcpy(impl_->data + offset, data, length);
    impl_->totalReceivedBytes.fetch_add(length, std::memory_order_relaxed);
    impl_->publishedBytes.store(offset + length, std::memory_order_release);
    return true;
}

size_t YaspPcmStore::Read(size_t offset, uint8_t* destination, size_t length) const {
    if (!destination || !length || !impl_->data) {
        return 0;
    }

    const size_t publishedBytes = impl_->publishedBytes.load(std::memory_order_acquire);
    if (offset >= publishedBytes) {
        return 0;
    }

    const size_t readLength = std::min(length, publishedBytes - offset);
    std::memcpy(destination, impl_->data + offset, readLength);
    return readLength;
}

size_t YaspPcmStore::Clear() {
    std::lock_guard<std::mutex> lock(impl_->writerMutex);
    const size_t clearedBytes = impl_->publishedBytes.exchange(0, std::memory_order_acq_rel);
    return clearedBytes;
}

YaspPcmStoreState YaspPcmStore::GetState() const {
    YaspPcmStoreState state;
    state.pageSize = impl_->pageSize;
    state.maxBytes = impl_->maxBytes;
    state.bytes = impl_->publishedBytes.load(std::memory_order_acquire);
    state.pages = (state.bytes + impl_->pageSize - 1) / impl_->pageSize;
    state.totalReceivedBytes = impl_->totalReceivedBytes.load(std::memory_order_relaxed);
    state.rejectedBytes = impl_->rejectedBytes.load(std::memory_order_relaxed);
    return state;
}

void InitYaspTrackStore(Napi::Env env, Napi::Object exports) {
    YaspTrackStore::InitClass(env, exports);
}

std::shared_ptr<YaspPcmStore> GetYaspPcmStore(const Napi::Value& value) {
    if (!value.IsObject()) {
        return nullptr;
    }

    YaspTrackStore* store = YaspTrackStore::Unwrap(value.As<Napi::Object>());
    return store ? store->GetPcmStore() : nullptr;
}
