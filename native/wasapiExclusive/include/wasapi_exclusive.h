#pragma once

#include <napi.h>

Napi::Object Init(Napi::Env env, Napi::Object exports);
void InitYaspEncodedTrackBuffer(Napi::Env env, Napi::Object exports);
void InitYaspTrackStore(Napi::Env env, Napi::Object exports);
