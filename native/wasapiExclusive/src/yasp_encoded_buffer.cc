#include "wasapi_exclusive.h"

#include <algorithm>
#include <cmath>
#include <cstdint>
#include <mutex>
#include <vector>

namespace {

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

double GetNumberProperty(const Napi::Object& object, const char* key, double fallback) {
    Napi::Value value = object.Get(key);
    return value.IsNumber() ? value.As<Napi::Number>().DoubleValue() : fallback;
}

class YaspEncodedTrackBuffer : public Napi::ObjectWrap<YaspEncodedTrackBuffer> {
public:
    static Napi::FunctionReference constructor;

    static void InitClass(Napi::Env env, Napi::Object exports) {
        Napi::Function func = DefineClass(
            env,
            "YaspEncodedTrackBuffer",
            {
                InstanceMethod("push", &YaspEncodedTrackBuffer::Push),
                InstanceMethod("clear", &YaspEncodedTrackBuffer::Clear),
                InstanceMethod("getState", &YaspEncodedTrackBuffer::GetState),
            }
        );

        constructor = Napi::Persistent(func);
        constructor.SuppressDestruct();
        exports.Set("YaspEncodedTrackBuffer", func);
    }

    explicit YaspEncodedTrackBuffer(const Napi::CallbackInfo& info) : Napi::ObjectWrap<YaspEncodedTrackBuffer>(info) {
        Napi::Object options = info.Length() > 0 && info[0].IsObject() ? info[0].As<Napi::Object>() : Napi::Object::New(info.Env());
        maxBytes_ = static_cast<size_t>(GetUintOption(options, "maxBytes", 64 * 1024 * 1024, 1024 * 1024, 512 * 1024 * 1024));
    }

private:
    struct Chunk {
        std::vector<uint8_t> bytes;
        double appendSequence = 0;
        bool hasAppendSequence = false;
    };

    void DropUntilWithinLimit(size_t incomingBytes) {
        while (!chunks_.empty() && totalBufferedBytes_ + incomingBytes > maxBytes_) {
            droppedBytes_ += chunks_.front().bytes.size();
            totalBufferedBytes_ -= chunks_.front().bytes.size();
            chunks_.erase(chunks_.begin());
        }
    }

    Napi::Value Push(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();
        if (info.Length() < 1 || !info[0].IsBuffer()) {
            Napi::TypeError::New(env, "Expected push(buffer: Buffer, meta?: object)").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        Napi::Buffer<uint8_t> buffer = info[0].As<Napi::Buffer<uint8_t>>();
        Napi::Object meta = info.Length() > 1 && info[1].IsObject() ? info[1].As<Napi::Object>() : Napi::Object::New(env);
        std::lock_guard<std::mutex> lock(mutex_);

        const size_t incomingBytes = buffer.Length();
        if (incomingBytes > maxBytes_) {
            droppedBytes_ += incomingBytes;
            Napi::Object result = Napi::Object::New(env);
            result.Set("accepted", false);
            result.Set("reason", "chunk exceeds maxBytes");
            result.Set("bufferedBytes", static_cast<double>(totalBufferedBytes_));
            result.Set("droppedBytes", static_cast<double>(droppedBytes_));
            return result;
        }

        DropUntilWithinLimit(incomingBytes);

        Chunk chunk;
        chunk.bytes.assign(buffer.Data(), buffer.Data() + buffer.Length());
        const double appendSequence = GetNumberProperty(meta, "appendSequence", -1);
        if (appendSequence >= 0) {
            chunk.appendSequence = appendSequence;
            chunk.hasAppendSequence = true;
            if (hasLastAppendSequence_ && appendSequence <= lastAppendSequence_) {
                outOfOrderChunks_ += 1;
            }
            lastAppendSequence_ = appendSequence;
            hasLastAppendSequence_ = true;
        }

        totalBufferedBytes_ += chunk.bytes.size();
        totalReceivedBytes_ += chunk.bytes.size();
        chunks_.push_back(std::move(chunk));

        Napi::Object result = Napi::Object::New(env);
        result.Set("accepted", true);
        result.Set("bufferedBytes", static_cast<double>(totalBufferedBytes_));
        result.Set("chunkCount", static_cast<double>(chunks_.size()));
        result.Set("droppedBytes", static_cast<double>(droppedBytes_));
        result.Set("outOfOrderChunks", static_cast<double>(outOfOrderChunks_));
        return result;
    }

    Napi::Value Clear(const Napi::CallbackInfo& info) {
        std::lock_guard<std::mutex> lock(mutex_);
        const size_t clearedBytes = totalBufferedBytes_;
        chunks_.clear();
        totalBufferedBytes_ = 0;
        Napi::Object result = Napi::Object::New(info.Env());
        result.Set("clearedBytes", static_cast<double>(clearedBytes));
        return result;
    }

    Napi::Value GetState(const Napi::CallbackInfo& info) {
        std::lock_guard<std::mutex> lock(mutex_);
        Napi::Object state = Napi::Object::New(info.Env());
        state.Set("maxBytes", static_cast<double>(maxBytes_));
        state.Set("bufferedBytes", static_cast<double>(totalBufferedBytes_));
        state.Set("totalReceivedBytes", static_cast<double>(totalReceivedBytes_));
        state.Set("droppedBytes", static_cast<double>(droppedBytes_));
        state.Set("chunkCount", static_cast<double>(chunks_.size()));
        state.Set("outOfOrderChunks", static_cast<double>(outOfOrderChunks_));
        if (hasLastAppendSequence_) {
            state.Set("lastAppendSequence", Napi::Number::New(info.Env(), lastAppendSequence_));
        } else {
            state.Set("lastAppendSequence", info.Env().Null());
        }
        return state;
    }

    std::mutex mutex_;
    std::vector<Chunk> chunks_;
    size_t maxBytes_ = 64 * 1024 * 1024;
    size_t totalBufferedBytes_ = 0;
    uint64_t totalReceivedBytes_ = 0;
    uint64_t droppedBytes_ = 0;
    uint64_t outOfOrderChunks_ = 0;
    double lastAppendSequence_ = 0;
    bool hasLastAppendSequence_ = false;
};

Napi::FunctionReference YaspEncodedTrackBuffer::constructor;

} // namespace

void InitYaspEncodedTrackBuffer(Napi::Env env, Napi::Object exports) {
    YaspEncodedTrackBuffer::InitClass(env, exports);
}
