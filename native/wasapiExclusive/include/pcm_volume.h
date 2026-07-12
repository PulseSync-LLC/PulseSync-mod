#pragma once

#include <cstddef>
#include <cstdint>

void ApplyPcmGain(
    uint8_t* data,
    size_t frames,
    uint32_t channels,
    uint32_t bitsPerSample,
    uint32_t containerBitsPerSample,
    bool floatPcm,
    double startGain,
    double endGain
);
