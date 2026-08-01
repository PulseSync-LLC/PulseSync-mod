import type { PulseSyncPlayer, UnknownRecord } from '../contracts';
import { NATIVE_AUDIO_CHUNK_TAP_SETTING_KEY, WASAPI_EXCLUSIVE_OUTPUT_SETTING_KEY } from '../config';
import { getPlayerInstance } from '../core/values';
import { syncLocalPlaybackState } from '../features/playerMethods';
import { audioState } from './state';
import { syncLocalAudioGainMute, syncWasapiAudioParking } from './webAudioGraph';

export function isWasapiExclusiveOutputEnabled() {
    try {
        if (window.nativeAudioOutput?.isWasapiExclusiveOutputEnabled?.()) return true;
    } catch {}
    try {
        return Boolean(window.nativeSettings?.get?.(WASAPI_EXCLUSIVE_OUTPUT_SETTING_KEY) && window.nativeSettings?.get?.(NATIVE_AUDIO_CHUNK_TAP_SETTING_KEY));
    } catch {
        return false;
    }
}

function findCrossfadePlayer(player: PulseSyncPlayer | null) {
    const current = player?.state?.currentMediaPlayer?.value;
    const players = Object.values(player?.state?.mediaPlayersStore?.value ?? {}) as Record<string, any>[];
    return [current, ...players].find((candidate) => candidate && typeof candidate.forceStopCrossfade === 'function' && candidate.isEnabled && 'value' in candidate.isEnabled);
}

function enforceCrossfadePolicy() {
    const policy = audioState.crossfadePolicy;
    const player = policy.crossfadePlayer;
    if (!policy.enabled || !player?.isEnabled) return;
    if (policy.restoreEnabled === null) policy.restoreEnabled = Boolean(player.isEnabled.value);
    if (player.isEnabled.value === false && !player.isCrossfadeActive?.()) return;
    policy.applying = true;
    try {
        player.forceStopCrossfade();
        if (player.isEnabled.value !== false) player.isEnabled.value = false;
    } catch (error) {
        console.warn('[PulseSync] Failed to force-disable crossfade for WASAPI exclusive:', error);
    } finally {
        policy.applying = false;
    }
}

function bindCrossfadePlayer() {
    const policy = audioState.crossfadePolicy;
    const player = findCrossfadePlayer(policy.playerInstance);
    if (player === policy.crossfadePlayer) return enforceCrossfadePolicy();
    policy.crossfadeEnabledUnsubscribe?.();
    policy.crossfadeEnabledUnsubscribe = null;
    policy.restoreEnabled = null;
    policy.crossfadePlayer = player ?? null;
    if (!player?.isEnabled?.onChange) return;
    policy.crossfadeEnabledUnsubscribe = player.isEnabled.onChange((enabled: boolean) => {
        if (policy.applying || !policy.enabled || enabled === false) return;
        policy.restoreEnabled = true;
        queueMicrotask(enforceCrossfadePolicy);
    });
    enforceCrossfadePolicy();
}

export function bindWasapiCrossfadePlayer(player: PulseSyncPlayer | null) {
    const policy = audioState.crossfadePolicy;
    if (player === policy.playerInstance) return bindCrossfadePlayer();
    policy.currentMediaPlayerUnsubscribe?.();
    policy.mediaPlayersStoreUnsubscribe?.();
    policy.crossfadeEnabledUnsubscribe?.();
    policy.currentMediaPlayerUnsubscribe = null;
    policy.mediaPlayersStoreUnsubscribe = null;
    policy.crossfadeEnabledUnsubscribe = null;
    policy.crossfadePlayer = null;
    policy.playerInstance = player;
    if (player?.state?.currentMediaPlayer?.onChange) policy.currentMediaPlayerUnsubscribe = player.state.currentMediaPlayer.onChange(bindCrossfadePlayer);
    if (player?.state?.mediaPlayersStore?.onChange) policy.mediaPlayersStoreUnsubscribe = player.state.mediaPlayersStore.onChange(bindCrossfadePlayer);
    bindCrossfadePlayer();
}

export function syncWasapiCrossfadePolicy(enabled = isWasapiExclusiveOutputEnabled()) {
    const policy = audioState.crossfadePolicy;
    bindWasapiCrossfadePlayer(getPlayerInstance());
    if (enabled === policy.enabled) return enforceCrossfadePolicy();
    policy.enabled = enabled;
    if (enabled) return enforceCrossfadePolicy();
    const observable = policy.crossfadePlayer?.isEnabled;
    const restoreEnabled = policy.restoreEnabled;
    policy.restoreEnabled = null;
    if (!observable || restoreEnabled === null) return;
    policy.applying = true;
    try {
        observable.value = restoreEnabled;
    } catch (error) {
        console.warn('[PulseSync] Failed to restore crossfade after WASAPI exclusive:', error);
    } finally {
        policy.applying = false;
    }
}

function isOutputActive(state: Record<string, any> | null) {
    const enabled = typeof state?.enabled === 'boolean' ? state.enabled : isWasapiExclusiveOutputEnabled();
    return Boolean(enabled && (state?.captureActive === true || state?.active === true));
}

function isPlayerHoldRequested(state: Record<string, any> | null) {
    const enabled = typeof state?.enabled === 'boolean' ? state.enabled : isWasapiExclusiveOutputEnabled();
    return Boolean(enabled && state?.captureActive === true && state?.active !== true && state?.session?.waitingForPlayerHold === true);
}

export function syncWasapiPlayerHold(state: unknown) {
    const player = getPlayerInstance();
    if (!player) return;
    const outputState = (state ?? null) as Record<string, any> | null;
    if (isPlayerHoldRequested(outputState)) {
        if (!audioState.playerHold.active) {
            audioState.playerHold.active = true;
            audioState.playerHold.resumeOnRelease = player.state?.playerState?.status?.value === 'playing';
            if (audioState.playerHold.resumeOnRelease) syncLocalPlaybackState(false);
        }
        return;
    }
    if (!audioState.playerHold.active) return;
    const shouldResume = audioState.playerHold.resumeOnRelease;
    audioState.playerHold.active = false;
    audioState.playerHold.resumeOnRelease = false;
    if (shouldResume && player.state?.playerState?.status?.value !== 'playing') syncLocalPlaybackState(true);
}

function syncPlayerProgress(state: Record<string, any> | null) {
    const player = getPlayerInstance();
    const nativePosition = Number(state?.session?.estimatedOutputPosition);
    const progress = player?.state?.playerState?.progress?.value;
    const playerPosition = Number(progress?.position ?? progress?.currentTime ?? progress);
    const now = Date.now();
    if (
        state?.active !== true ||
        state?.session?.waitingForFirstRenderedFrame === true ||
        state?.session?.playerHoldActive === true ||
        !player?.setProgress ||
        !Number.isFinite(nativePosition) ||
        !Number.isFinite(playerPosition) ||
        Math.abs(nativePosition - playerPosition) < 1 ||
        audioState.progressSync.inFlight ||
        now - audioState.progressSync.lastSyncAt < 5_000
    )
        return;
    audioState.progressSync.inFlight = true;
    audioState.progressSync.lastSyncAt = now;
    window.__pulseSyncWasapiProgressSyncInFlight = true;
    void Promise.resolve(player.setProgress(nativePosition))
        .catch((error) => console.warn('[PulseSync] Failed to align muted YASP progress with WASAPI hardware clock:', error))
        .finally(() => window.setTimeout(() => ((window.__pulseSyncWasapiProgressSyncInFlight = false), (audioState.progressSync.inFlight = false)), 1_000));
}

export function installWasapiPlayerSeekProxy(player: PulseSyncPlayer) {
    if (!player || audioState.seekProxyPlayers.has(player) || typeof player.setProgress !== 'function') return;
    const originalSetProgress = player.setProgress;
    const wrapped = function (this: PulseSyncPlayer, ...args: any[]) {
        const result = originalSetProgress.apply(this, args);
        const position = Number(args[0]?.position ?? args[0]?.value ?? args[0]);
        if (!window.__pulseSyncWasapiProgressSyncInFlight && window.nativeAudioOutput?.isWasapiExclusiveOutputEnabled?.() && Number.isFinite(position) && position >= 0) {
            window.nativeAudioOutput.reportWasapiExclusivePlayerSeek?.({ position, source: 'player.setProgress', updatedAt: Date.now() });
        }
        return result;
    };
    try {
        player.setProgress = wrapped;
        if (player.setProgress === wrapped) audioState.seekProxyPlayers.add(player);
    } catch (error) {
        console.warn('[PulseSync] Failed to install WASAPI player seek proxy:', error);
    }
}

export function applyWasapiOutputState(state: unknown) {
    const outputState = (state ?? null) as Record<string, any> | null;
    audioState.lastWasapiOutputState = outputState;
    audioState.wasapiOutputActive = isOutputActive(outputState);
    syncWasapiCrossfadePolicy(typeof outputState?.enabled === 'boolean' ? outputState.enabled : isWasapiExclusiveOutputEnabled());
    syncWasapiAudioParking(outputState);
    syncLocalAudioGainMute();
    syncWasapiPlayerHold(outputState);
    syncPlayerProgress(outputState);
    window.dispatchEvent(new CustomEvent('pulse-sync-wasapi-exclusive-output-state-change', { detail: state ?? null }));
}

export function installNativeAudioOutputMonitor() {
    if (window.__pulseSyncNativeAudioOutputGainMuteMonitorInstalled) return;
    window.__pulseSyncNativeAudioOutputGainMuteMonitorInstalled = true;
    syncLocalAudioGainMute();
    try {
        window.nativeAudioOutput
            ?.getWasapiExclusiveStatus?.()
            ?.then?.((status) => applyWasapiOutputState(status?.outputState ?? null))
            ?.catch?.(() => {});
    } catch {}
}

export function getLastWasapiOutputState(): UnknownRecord | null {
    return audioState.lastWasapiOutputState;
}
