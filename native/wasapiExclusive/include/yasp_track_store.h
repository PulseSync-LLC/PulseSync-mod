#pragma once

#include <napi.h>

#include <cstddef>
#include <cstdint>
#include <memory>

struct YaspPcmStoreState {
    size_t pageSize = 0;
    size_t maxBytes = 0;
    size_t bytes = 0;
    size_t pages = 0;
    uint64_t totalReceivedBytes = 0;
    uint64_t rejectedBytes = 0;
};

class YaspPcmStore {
public:
    YaspPcmStore(size_t maxBytes, size_t pageSize);
    ~YaspPcmStore();

    YaspPcmStore(const YaspPcmStore&) = delete;
    YaspPcmStore& operator=(const YaspPcmStore&) = delete;

    bool Append(const uint8_t* data, size_t length);
    size_t Read(size_t offset, uint8_t* destination, size_t length) const;
    size_t Clear();
    YaspPcmStoreState GetState() const;

private:
    struct Impl;
    std::unique_ptr<Impl> impl_;
};

void InitYaspTrackStore(Napi::Env env, Napi::Object exports);
std::shared_ptr<YaspPcmStore> GetYaspPcmStore(const Napi::Value& value);
