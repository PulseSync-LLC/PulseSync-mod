#include "pcm_volume.h"

#include <algorithm>
#include <cmath>
#include <cstdint>
#include <cstring>
#include <limits>

namespace {

double ClampGain(double gain) {
    return std::min(std::max(gain, 0.0), 1.0);
}

template <typename T>
T ScaleIntegerSample(T sample, double gain) {
    const double scaled = std::round(static_cast<double>(sample) * gain);
    const double minimum = static_cast<double>(std::numeric_limits<T>::min());
    const double maximum = static_cast<double>(std::numeric_limits<T>::max());
    return static_cast<T>(std::min(std::max(scaled, minimum), maximum));
}

int32_t ReadPacked24(const uint8_t* source) {
    int32_t value = static_cast<int32_t>(source[0]) | (static_cast<int32_t>(source[1]) << 8) | (static_cast<int32_t>(source[2]) << 16);
    if (value & 0x00800000) {
        value |= static_cast<int32_t>(0xff000000);
    }
    return value;
}

void WritePacked24(uint8_t* destination, int32_t value) {
    const uint32_t raw = static_cast<uint32_t>(value);
    destination[0] = static_cast<uint8_t>(raw & 0xff);
    destination[1] = static_cast<uint8_t>((raw >> 8) & 0xff);
    destination[2] = static_cast<uint8_t>((raw >> 16) & 0xff);
}

int32_t Scale24BitSample(int32_t sample, double gain) {
    const double scaled = std::round(static_cast<double>(sample) * gain);
    return static_cast<int32_t>(std::min(std::max(scaled, -8388608.0), 8388607.0));
}

} // namespace

void ApplyPcmGain(
    uint8_t* data,
    size_t frames,
    uint32_t channels,
    uint32_t bitsPerSample,
    uint32_t containerBitsPerSample,
    bool floatPcm,
    double startGain,
    double endGain
) {
    if (!data || !frames || !channels) {
        return;
    }

    startGain = ClampGain(startGain);
    endGain = ClampGain(endGain);
    if (std::abs(startGain - 1.0) < 1e-12 && std::abs(endGain - 1.0) < 1e-12) {
        return;
    }

    const size_t bytesPerSample = containerBitsPerSample / 8;
    if (!bytesPerSample) {
        return;
    }
    if (startGain == 0.0 && endGain == 0.0) {
        std::memset(data, 0, frames * channels * bytesPerSample);
        return;
    }

    for (size_t frame = 0; frame < frames; frame += 1) {
        const double progress = static_cast<double>(frame + 1) / static_cast<double>(frames);
        const double gain = startGain + (endGain - startGain) * progress;
        for (uint32_t channel = 0; channel < channels; channel += 1) {
            uint8_t* sampleData = data + (frame * channels + channel) * bytesPerSample;
            if (floatPcm && containerBitsPerSample == 32) {
                float sample = 0;
                std::memcpy(&sample, sampleData, sizeof(sample));
                sample = static_cast<float>(sample * gain);
                std::memcpy(sampleData, &sample, sizeof(sample));
            } else if (bitsPerSample == 16 && containerBitsPerSample == 16) {
                int16_t sample = 0;
                std::memcpy(&sample, sampleData, sizeof(sample));
                sample = ScaleIntegerSample(sample, gain);
                std::memcpy(sampleData, &sample, sizeof(sample));
            } else if (bitsPerSample == 24 && containerBitsPerSample == 24) {
                WritePacked24(sampleData, Scale24BitSample(ReadPacked24(sampleData), gain));
            } else if (bitsPerSample == 24 && containerBitsPerSample == 32) {
                int32_t container = 0;
                std::memcpy(&container, sampleData, sizeof(container));
                const int32_t scaled = Scale24BitSample(container >> 8, gain);
                const int32_t output = static_cast<int32_t>(static_cast<int64_t>(scaled) * 256);
                std::memcpy(sampleData, &output, sizeof(output));
            } else if (bitsPerSample == 32 && containerBitsPerSample == 32) {
                int32_t sample = 0;
                std::memcpy(&sample, sampleData, sizeof(sample));
                sample = ScaleIntegerSample(sample, gain);
                std::memcpy(sampleData, &sample, sizeof(sample));
            }
        }
    }
}
