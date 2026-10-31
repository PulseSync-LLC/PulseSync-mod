'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9200],
    {
        29200: (e, t, r) => {
            (r.r(t),
                r.d(t, {
                    HlsCoreAdapter: () => P,
                    HtmlAudioCoreAdapter: () => T,
                    YaspCoreAdapter: () => v,
                    YaspLoader: () => l,
                    checkBuffering: () => H,
                    getRemainingBufferedTime: () => h,
                }));
            var i = r(9519),
                n = r(39569),
                a = r(39499);
            class s extends a.t {
                constructor(e = '[Sonata] YASP loading aborted', { code: t = 'E_SONATA', ...r } = {}) {
                    (super(e, { code: t, ...r }), (0, i._)(this, 'name', 'YaspLoadingAbortedException'), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class l {
                get isYaspLoaded() {
                    return void 0 !== window.Ya && void 0 !== window.Ya.YaspAudioElement;
                }
                loadYasp(e) {
                    let { version: t, sourceLimit: r, retryDelayMs: i, perfLogUrl: l, abortSignal: o } = e;
                    if (this.isYaspLoaded) return Promise.resolve();
                    let d = null != i ? i : 1e3,
                        u = null;
                    return new Promise((e, i) => {
                        if (null == o ? void 0 : o.aborted) return void i(new s());
                        let h = () => {
                            (u && clearTimeout(u), i(new s()));
                        };
                        null == o || o.addEventListener('abort', h, { once: !0 });
                        let m = () => {
                            if (null == o ? void 0 : o.aborted) return void i(new s());
                            (0, n.Q)({ version: t })
                                .then(() => {
                                    var t, i;
                                    null == o || o.removeEventListener('abort', h);
                                    let n = window.Ya.YaspAudioElement;
                                    n.messenger.on('yasp-event', this.yaspEventHandler);
                                    let a = this.getTelemetryTestIds ? this.getTelemetryTestIds() : void 0;
                                    (null == (t = this.yaspTelemetry) || t.setStaticParams({ testIds: a }),
                                        n.setWorkerConfig({ sourceLimit: r, perfLogUrl: l }),
                                        null == (i = this.yaspTelemetry) || i.onCreatePlayer({ sourceLimit: r }),
                                        e());
                                })
                                .catch((e) => {
                                    let r = new a.t('[Sonata] Error in loading YASP', { code: 'E_SONATA', cause: e });
                                    (this.logger.error(r, { yaspVersion: t }),
                                        new Promise((e) => {
                                            u = setTimeout(e, d);
                                        }).then(() => m()));
                                });
                        };
                        m();
                    });
                }
                yaspEventHandler(e) {
                    var t;
                    null == (t = this.yaspTelemetry) || t.logYaspEvent(e.name, e.data);
                }
                getYaspAudioElement() {
                    if (!this.isYaspLoaded) throw new a.t('YaspAudioElement has not been loaded');
                    return window.Ya.YaspAudioElement;
                }
                attachYasp(e) {
                    let t = window.Ya.YaspAudioElement;
                    if (!this.isYaspLoaded) throw new a.t('YaspAudioElement has not been loaded');
                    t.isYaspAudioElement(e) || t.attach(e);
                }
                constructor({ logger: e, yaspTelemetry: t, getTelemetryTestIds: r }) {
                    ((0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'yaspTelemetry', void 0),
                        (0, i._)(this, 'getTelemetryTestIds', void 0),
                        (this.logger = e),
                        (this.yaspTelemetry = t),
                        (this.getTelemetryTestIds = r),
                        (this.yaspEventHandler = this.yaspEventHandler.bind(this)));
                }
            }
            var o = r(64727),
                d = r(45028);
            function u(e) {
                let t = [];
                for (let r = 0; r < e.buffered.length; r++)
                    try {
                        t.push({ start: (0, d.fP)(e.buffered.start(r)), end: (0, d.fP)(e.buffered.end(r)) });
                    } catch (e) {}
                return (function (e) {
                    if (e.length <= 1) return e;
                    let t = e.slice().sort((e, t) => e.start - t.start),
                        r = t[0] ? [t[0]] : [];
                    for (let e = 1; e < t.length; e++) {
                        let i = t[e],
                            n = r[r.length - 1];
                        i && n && (n.end < i.start ? r.push(i) : n.end < i.end && (n.end = i.end));
                    }
                    return r;
                })(t);
            }
            function h(e) {
                let t = u(e),
                    r = t[t.length - 1];
                if (!r) return (0, d.fP)(0);
                let i = r.end - e.currentTime;
                return (0, d.fP)(Number(i.toFixed(3)));
            }
            class m {
                setupAudioElement() {
                    ((this.audioElement.autoplay = !1),
                        (this.audioElement.loop = !1),
                        (this.audioElement.preload = 'auto'),
                        (this.audioElement.crossOrigin = 'anonymous'),
                        this.audioElement.addEventListener('timeupdate', this.progressHandler),
                        this.audioElement.addEventListener('durationchange', this.progressHandler),
                        this.audioElement.addEventListener('pause', this.pauseHandler),
                        this.audioElement.addEventListener('error', this.audioErrorHandler),
                        this.audioElement.addEventListener('volumechange', this.volumeChangeHandler),
                        this.audioElement.addEventListener('ratechange', this.speedChangeHandler));
                }
                get source() {
                    return this.audioElement;
                }
                async play(e) {
                    let { source: t, positionSec: r } = e;
                    ((this.audioElement.src = t.src), this.audioElement.load(), await this.audioElement.play(), void 0 !== r && (this.audioElement.currentTime = r));
                }
                setSrc(e) {
                    let { source: t, positionSec: r } = e;
                    ((this.audioElement.src = t.src), this.audioElement.load(), void 0 !== r && (this.audioElement.currentTime = r));
                }
                preloadSrc(e) {
                    return Promise.resolve();
                }
                releaseSrc(e) {
                    return Promise.resolve();
                }
                pause() {
                    return (this.audioElement.pause(), Promise.resolve());
                }
                async resume() {
                    (await this.audioElement.play(), this.emitter.emit('resume'));
                }
                setProgress(e) {
                    let t = e >= this.audioElement.duration ? this.audioElement.duration - 0.01 : e;
                    return ((this.audioElement.currentTime = t), Promise.resolve(this.audioElement.currentTime));
                }
                setVolume(e) {
                    return ((this.audioElement.volume = e), Promise.resolve(this.audioElement.volume));
                }
                setSpeed(e) {
                    return ((this.audioElement.defaultPlaybackRate = e), (this.audioElement.playbackRate = e), Promise.resolve(this.audioElement.playbackRate));
                }
                stop() {
                    return (this.audioElement.removeAttribute('src'), this.audioElement.load(), Promise.resolve());
                }
                onEnd(e) {
                    this.audioElement.addEventListener('ended', e);
                }
                onPaused(e) {
                    this.emitter.on('custom_pause_event', e);
                }
                pauseHandler() {
                    Math.abs(this.audioElement.duration - this.audioElement.currentTime) >= 0.01 && this.emitter.emit('custom_pause_event');
                }
                onResume(e) {
                    this.emitter.on('resume', e);
                }
                onUpdatingProgress(e) {
                    this.emitter.on('update_progress', e);
                }
                progressHandler() {
                    let e = isNaN(this.audioElement.duration) ? 0 : this.audioElement.duration,
                        t = this.audioElement.currentTime,
                        r = this.audioElement.buffered.length ? this.audioElement.buffered.end(this.audioElement.buffered.length - 1) : 0;
                    this.emitter.emit('update_progress', { duration: e, position: t, loaded: r, remainingBufferedTime: h(this.audioElement) });
                }
                onSeeked(e) {
                    this.audioElement.addEventListener('seeked', e);
                }
                onSeeking(e) {
                    this.audioElement.addEventListener('seeking', e);
                }
                onStalled(e) {
                    this.audioElement.addEventListener('stalled', e);
                }
                onCanplay(e) {
                    (this.ensureNativeCanplayListenerInstalled(), this.audioElement.addEventListener('canplay', e));
                }
                onPlaying(e) {
                    this.audioElement.addEventListener('playing', e);
                }
                onError(e) {
                    this.emitter.on('error', e);
                }
                onVolumeChange(e) {
                    this.emitter.on('volumechange', e);
                }
                volumeChangeHandler() {
                    this.emitter.emit('volumechange', this.audioElement.volume);
                }
                onSpeedChange(e) {
                    this.emitter.on('ratechange', e);
                }
                speedChangeHandler() {
                    this.emitter.emit('ratechange', this.audioElement.playbackRate);
                }
                audioErrorHandler(e) {
                    let t = e instanceof Event && 'error' === e.type && e.target === this.audioElement && e.isTrusted ? this.audioElement.error : null;
                    this.emitter.emit('error', null != t ? t : e);
                }
                onWaiting(e) {
                    this.audioElement.addEventListener('waiting', e);
                }
                offEnd(e) {
                    this.audioElement.removeEventListener('ended', e);
                }
                offPaused(e) {
                    this.emitter.off('custom_pause_event', e);
                }
                offResume(e) {
                    this.emitter.off('resume', e);
                }
                offUpdatingProgress(e) {
                    this.emitter.off('update_progress', e);
                }
                offSeeked(e) {
                    this.audioElement.removeEventListener('seeked', e);
                }
                offSeeking(e) {
                    this.audioElement.removeEventListener('seeking', e);
                }
                offStalled(e) {
                    this.audioElement.removeEventListener('stalled', e);
                }
                offCanplay(e) {
                    this.audioElement.removeEventListener('canplay', e);
                }
                offPlaying(e) {
                    this.audioElement.removeEventListener('playing', e);
                }
                offError(e) {
                    this.audioElement.removeEventListener('error', e);
                }
                offVolumeChange(e) {
                    this.emitter.off('volumechange', e);
                }
                offSpeedChange(e) {
                    this.emitter.off('ratechange', e);
                }
                offWaiting(e) {
                    this.audioElement.removeEventListener('waiting', e);
                }
                waitForCanplay(e) {
                    return (this.ensureNativeCanplayListenerInstalled(),
                    this.resolvePendingCanplay(!1),
                    this.audioElement.src === e && this.audioElement.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA)
                        ? Promise.resolve(!0)
                        : new Promise((t) => {
                              this.pendingCanplay = { resolve: t, expectedSrc: e };
                          });
                }
                cancelPendingCanplay() {
                    this.resolvePendingCanplay(!1);
                }
                ensureNativeCanplayListenerInstalled() {
                    this.nativeCanplayListenerInstalled ||
                        ((this.nativeCanplayListenerInstalled = !0), this.audioElement.addEventListener('canplay', this.nativeCanplayHandler));
                }
                nativeCanplayHandler() {
                    this.pendingCanplay && this.audioElement.src === this.pendingCanplay.expectedSrc && this.resolvePendingCanplay(!0);
                }
                resolvePendingCanplay(e) {
                    if (!this.pendingCanplay) return;
                    let { resolve: t } = this.pendingCanplay;
                    ((this.pendingCanplay = null), t(e));
                }
                constructor() {
                    ((0, i._)(this, 'emitter', new o.b()),
                        (0, i._)(this, 'nativeCanplayListenerInstalled', !1),
                        (0, i._)(this, 'pendingCanplay', null),
                        (this.progressHandler = this.progressHandler.bind(this)),
                        (this.volumeChangeHandler = this.volumeChangeHandler.bind(this)),
                        (this.speedChangeHandler = this.speedChangeHandler.bind(this)),
                        (this.audioErrorHandler = this.audioErrorHandler.bind(this)),
                        (this.pauseHandler = this.pauseHandler.bind(this)),
                        (this.nativeCanplayHandler = this.nativeCanplayHandler.bind(this)));
                }
            }
            function p(e) {
                try {
                    return new URL(e);
                } catch (e) {
                    return null;
                }
            }
            function E(e, t) {
                let r = p(e),
                    i = p(t);
                return !!r && !!i && ''.concat(r.origin).concat(r.pathname) === ''.concat(i.origin).concat(i.pathname);
            }
            class c extends a.t {
                constructor(e = 'The play() request was interrupted', { code: t = 'E_SONATA', ...r } = {}) {
                    (super(e, { code: t, ...r }), (0, i._)(this, 'name', 'AbortError'), Object.setPrototypeOf(this, c.prototype));
                }
            }
            class v extends m {
                abortPendingStartup() {
                    let e = this.pendingStartupAbortController;
                    e && ((this.pendingStartupAbortController = null), e.abort());
                }
                createPlayRequestAbortedError() {
                    return new c();
                }
                isRetryableStartError(e) {
                    return (
                        'string' == typeof e ||
                        e instanceof c ||
                        ((!!('undefined' != typeof DOMException && e instanceof DOMException) || e instanceof Error) && 'AbortError' === e.name)
                    );
                }
                waitForPlayingOrYaspError(e, t) {
                    return new Promise((r, i) => {
                        let n = this.audioElement,
                            a = this.createPlayRequestAbortedError();
                        function s() {
                            (n.removeEventListener('playing', o),
                                n.removeEventListener('error', d),
                                n.removeEventListener('yasp-error', u),
                                t.removeEventListener('abort', l));
                        }
                        function l() {
                            (s(), i(a));
                        }
                        function o() {
                            n.src === e && (s(), r());
                        }
                        function d() {
                            if (n.src !== e || t.aborted) return void l();
                            (s(), i(Error('[Sonata] HTMLMediaElement error during YASP startup')));
                        }
                        function u(r) {
                            if (n.src !== e || t.aborted) return void l();
                            (s(), i(r));
                        }
                        if (t.aborted) return void l();
                        (n.addEventListener('playing', o), n.addEventListener('error', d), n.addEventListener('yasp-error', u), t.addEventListener('abort', l));
                    });
                }
                yaspEventHandler(e) {
                    var t;
                    null == (t = this.yaspTelemetry) || t.logYaspEvent(e.detail.name, e.detail.data);
                }
                yaspErrorHandler(e) {
                    var t;
                    null == (t = this.yaspTelemetry) || t.logYaspError(e);
                }
                play(e) {
                    let { source: t, positionSec: r } = e;
                    (this.abortPendingStartup(), (t.positionSec = r));
                    let i = this.audioElement.src,
                        n = t.src;
                    (window.Ya.YaspAudioElement.configureSource(t.src, { audioDecodingKey: t.key, mirrorUrls: t.mirrorUrls }), (this.audioElement.src = n));
                    let a = new AbortController();
                    this.pendingStartupAbortController = a;
                    let s = Promise.resolve();
                    E(i, n) || (s = this.audioElement.yaspReleaseSrc(i));
                    let l = this.waitForCanplay(n);
                    return s
                        .then(() => l)
                        .then((e) => {
                            let t = this.createPlayRequestAbortedError();
                            if (!e || this.audioElement.src !== n) throw t;
                            return this.audioElement.play().catch((e) => {
                                if (this.audioElement.src !== n) throw t;
                                if (!this.isRetryableStartError(e)) throw e;
                                return this.waitForPlayingOrYaspError(n, a.signal);
                            });
                        });
                }
                preloadSrc(e) {
                    let { source: t, bufferGoal: r, positionSec: i } = e;
                    return t.canBePreloaded
                        ? ((t.positionSec = i),
                          this.audioElement
                              .yaspPreloadSrc(t.src, { yaspSourceConfig: { preloadBufferGoal: r, audioDecodingKey: t.key, mirrorUrls: t.mirrorUrls } })
                              .then(() => Promise.resolve()))
                        : Promise.resolve();
                }
                releaseSrc(e) {
                    let { source: t } = e;
                    return (
                        E(this.audioElement.src, t.src) && (this.cancelPendingCanplay(), this.abortPendingStartup(), this.audioElement.removeAttribute('src')),
                        this.audioElement.yaspReleaseSrc(t.src).then(() => Promise.resolve())
                    );
                }
                setSrc(e) {
                    let { source: t, positionSec: r } = e;
                    ((t.positionSec = r),
                        window.Ya.YaspAudioElement.configureSource(t.src, { audioDecodingKey: t.key, mirrorUrls: t.mirrorUrls }),
                        (this.audioElement.src = t.src));
                }
                setProgress(e) {
                    var t;
                    return (null == (t = this.yaspTelemetry) || t.onSeek(this.audioElement.currentTime, e), super.setProgress(e));
                }
                stop() {
                    return (this.cancelPendingCanplay(), this.abortPendingStartup(), this.audioElement.yaspReleaseSrc(this.audioElement.src).then(), super.stop());
                }
                detachYasp() {
                    (this.audioElement.removeEventListener('yasp-event', this.yaspEventHandler),
                        this.audioElement.removeEventListener('yasp-error', this.yaspErrorHandler),
                        this.audioElement.detach());
                }
                constructor({ yaspAudioElement: e, yaspTelemetry: t }) {
                    (super(),
                        (0, i._)(this, 'audioElement', void 0),
                        (0, i._)(this, 'yaspTelemetry', void 0),
                        (0, i._)(this, 'pendingStartupAbortController', null),
                        (this.audioElement = e.attach(document.createElement('audio'))),
                        (this.yaspTelemetry = t),
                        (this.yaspEventHandler = this.yaspEventHandler.bind(this)),
                        (this.yaspErrorHandler = this.yaspErrorHandler.bind(this)),
                        this.setupAudioElement(),
                        this.audioElement.addEventListener('yasp-event', this.yaspEventHandler),
                        this.audioElement.addEventListener('yasp-error', this.yaspErrorHandler));
                }
            }
            var y = r(89602),
                f = r(7123);
            let g = (e) => {
                    if (!e) return;
                    let t = e
                        .split(',')
                        .map((e) => e.trim())
                        .filter(Boolean);
                    return 1 === t.length ? t[0] : void 0;
                },
                b = (e) => {
                    var t, r;
                    return null != (r = e.audioCodec) ? r : g(e.codecs || (null == (t = e.attrs) ? void 0 : t.CODECS));
                },
                L = (e, t) => {
                    if (!t) return ((e.startLevel = -1), (e.autoLevelCapping = -1), (e.loadLevel = -1), 'auto');
                    let r = ((e, t) => {
                        var r, i, n, a;
                        let s = e
                            .map((e, t) => ({ level: e, index: t }))
                            .filter((e) => {
                                let { level: r } = e;
                                return r.bitrate === t.bitrate;
                            });
                        if (!t.audioCodec) return null != (n = null == (i = s[0]) ? void 0 : i.index) ? n : null;
                        let l = s.find((e) => {
                            let { level: r } = e;
                            return b(r) === t.audioCodec;
                        });
                        return l
                            ? l.index
                            : s.some((e) => {
                                    let { level: t } = e;
                                    return !!b(t);
                                })
                              ? null
                              : null != (a = null == (r = s[0]) ? void 0 : r.index)
                                ? a
                                : null;
                    })(e.levels, t);
                    return null === r ? 'unavailable' : ((e.startLevel = r), (e.autoLevelCapping = -1), (e.loadLevel = r), 'applied');
                },
                C = (e) => e === y.vj.BUFFER_APPEND_ERROR || e === y.vj.MEDIA_SOURCE_REQUIRES_RESET || e === y.vj.BUFFER_APPEND_NO_PROGRESS,
                S = (e) => ('number' == typeof e && Number.isFinite(e) ? e : void 0),
                A = (e) => ('string' == typeof e ? e.slice(0, 500) : void 0);
            class P extends m {
                play(e) {
                    let { source: t } = e;
                    return this.stop().then(
                        () => (
                            (this.playbackStartedAt = Date.now()),
                            (this.currentSourceIndex = this.getSourceIndex(t)),
                            (this.currentPlayId = this.getPlayId(t)),
                            (this.currentManualQualitySourceKey = this.getManualQualitySourceKey(t)),
                            this.hls || this.initHls(),
                            this.load(t.src).then(() => this.audioElement.play())
                        ),
                    );
                }
                stop() {
                    var e;
                    return (
                        this.removeAllHlsEvents(),
                        this.removeErrorListener(),
                        this.removeProgramDateTimeListener(),
                        (this.retryCounter = 0),
                        (this.playbackStartedAt = void 0),
                        (this.bufferAppendErrorTimestamps = []),
                        (this.currentSourceIndex = void 0),
                        (this.currentPlayId = void 0),
                        (this.currentManualQualitySourceKey = void 0),
                        this.hls && (this.hls.stopLoad(), this.hls.destroy(), (this.hls = null)),
                        null == (e = this.manualQualityController) || e.setAvailableQualities(null),
                        this.audioElement.removeAttribute('src'),
                        this.audioElement.load(),
                        Promise.resolve()
                    );
                }
                initHls() {
                    this.hls ||
                        ((this.hls = new y.Ay({ autoStartLoad: !1, liveDurationInfinity: !0, maxBufferSize: 3e6 })),
                        this.hls.on(y.sV.MANIFEST_PARSED, this.onManifestParsed),
                        this.setErrorListener(this.errorListener),
                        this.setProgramDateTimeListener(this.onFragChanged));
                }
                load(e) {
                    return this.hls
                        ? (this.hls.attachMedia(this.audioElement),
                          this.hls.loadSource(e),
                          new Promise((e) => {
                              this.addOnceHlsEvent(y.sV.MEDIA_ATTACHED, e);
                          }))
                        : Promise.resolve();
                }
                destroyHls() {
                    this.stop();
                }
                getSourceIndex(e) {
                    return 'sourceIndex' in e && 'number' == typeof e.sourceIndex ? e.sourceIndex : void 0;
                }
                getPlayId(e) {
                    return 'playId' in e && 'string' == typeof e.playId && '' !== e.playId ? e.playId : void 0;
                }
                getManualQualitySourceKey(e) {
                    return 'manualQualitySourceKey' in e && 'string' == typeof e.manualQualitySourceKey && '' !== e.manualQualitySourceKey
                        ? e.manualQualitySourceKey
                        : void 0;
                }
                onManifestParsed() {
                    var e;
                    this.hls &&
                        (null == (e = this.manualQualityController) ||
                            e.setAvailableQualities({ source: this.getCurrentManualQualitySource(), availableQualities: this.hls.levels.map(this.levelToManualQuality) }),
                        this.applyManualQuality(),
                        this.hls.startLoad());
                }
                applyManualQuality() {
                    if (!this.hls || !this.manualQualityController) return;
                    let e = this.manualQualityController.manualQuality.value;
                    'unavailable' === L(this.hls, e) &&
                        (L(this.hls, null),
                        this.manualQualityController.setAvailableQualities({
                            source: this.getCurrentManualQualitySource(),
                            availableQualities: this.hls.levels.map(this.levelToManualQuality),
                        }));
                }
                getCurrentManualQualitySource() {
                    return { manualQualitySourceKey: this.currentManualQualitySourceKey };
                }
                addOnceHlsEvent(e, t) {
                    this.hls && (this.hls.once(e, t), this.hlsListeners.push({ event: e, listener: t, once: !0 }));
                }
                removeAllHlsEvents() {
                    (this.hlsListeners.forEach((e) => {
                        this.hls && this.hls.off(e.event, e.listener, void 0, e.once);
                    }),
                        (this.hlsListeners = []));
                }
                logHlsError(e, t) {
                    var r, i, n;
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                        s = arguments.length > 3 ? arguments[3] : void 0;
                    null == (i = this.logger) ||
                        i.error(
                            '[HlsCoreAdapter] HLS playback error',
                            ((e) => {
                                var t, r, i, n, a, s, l, o;
                                let {
                                        data: d,
                                        action: u,
                                        now: h,
                                        playbackStartedAt: m,
                                        retryCounter: p,
                                        hlsErrorRetryLimit: E,
                                        sourceIndex: c,
                                        uuid: v,
                                        levels: f,
                                        audioElement: g,
                                        bufferAppendCircuitBreaker: b,
                                    } = e,
                                    L = void 0 === m ? void 0 : S(Math.max(0, h - m));
                                return {
                                    type: d.type,
                                    details: d.details,
                                    fatal: d.fatal,
                                    retryCounter: p,
                                    hlsErrorRetryLimit: E,
                                    action: u,
                                    url: d.url,
                                    responseCode: null == (t = d.response) ? void 0 : t.code,
                                    responseText: null == (r = d.response) ? void 0 : r.text,
                                    sourceIndex: c,
                                    uuid: v,
                                    errorName: null == (i = d.error) ? void 0 : i.name,
                                    errorMessage: A(null == (n = d.error) ? void 0 : n.message),
                                    playbackAgeMs: L,
                                    hlsErrorAction: S(null == (a = d.errorAction) ? void 0 : a.action),
                                    hlsErrorActionFlags: S(null == (s = d.errorAction) ? void 0 : s.flags),
                                    hlsErrorActionRetryCount: S(null == (l = d.errorAction) ? void 0 : l.retryCount),
                                    hlsErrorActionResolved: 'boolean' == typeof (null == (o = d.errorAction) ? void 0 : o.resolved) ? d.errorAction.resolved : void 0,
                                    ...((e) => {
                                        try {
                                            let t = e.error;
                                            return { mediaErrorCode: S(null == t ? void 0 : t.code), mediaErrorMessage: A(null == t ? void 0 : t.message) };
                                        } catch (e) {
                                            return {};
                                        }
                                    })(g),
                                    ...(C(d.details)
                                        ? ((e, t, r, i) => {
                                              let n =
                                                  e.details === y.vj.BUFFER_APPEND_ERROR
                                                      ? { breakerCount: i.count, breakerLimit: i.limit, breakerWindowMs: i.windowMs }
                                                      : {};
                                              try {
                                                  var a, s, l, o, d, u, h, m, p, E, c, v, f, g, b, L, C;
                                                  let i = null != (b = S(e.level)) ? b : S(null == (a = e.frag) ? void 0 : a.level),
                                                      y = void 0 === i ? void 0 : t[i],
                                                      A =
                                                          null != (C = null != (L = e.stats) ? L : null == (s = e.frag) ? void 0 : s.stats)
                                                              ? C
                                                              : null == (l = e.part)
                                                                ? void 0
                                                                : l.stats;
                                                  return {
                                                      sourceBufferName: e.sourceBufferName,
                                                      parent: e.parent,
                                                      buffer: S(e.buffer),
                                                      appendsWithoutProgress: S(e.appendsWithoutProgress),
                                                      bufferInfo: e.bufferInfo
                                                          ? {
                                                                len: S(e.bufferInfo.len),
                                                                start: S(e.bufferInfo.start),
                                                                end: S(e.bufferInfo.end),
                                                                nextStart: S(e.bufferInfo.nextStart),
                                                                bufferedIndex: S(e.bufferInfo.bufferedIndex),
                                                            }
                                                          : void 0,
                                                      fragSn:
                                                          'string' == typeof (null == (o = e.frag) ? void 0 : o.sn) ||
                                                          'number' == typeof (null == (d = e.frag) ? void 0 : d.sn)
                                                              ? e.frag.sn
                                                              : void 0,
                                                      fragLevel: S(null == (u = e.frag) ? void 0 : u.level),
                                                      fragCc: S(null == (h = e.frag) ? void 0 : h.cc),
                                                      fragStart: S(null == (m = e.frag) ? void 0 : m.start),
                                                      fragDuration: S(null == (p = e.frag) ? void 0 : p.duration),
                                                      fragProgramDateTime: S(null == (E = e.frag) ? void 0 : E.programDateTime),
                                                      fragBitrate: S(null == (c = e.frag) ? void 0 : c.bitrate),
                                                      partIndex: S(null == (v = e.part) ? void 0 : v.index),
                                                      partStart: S(null == (f = e.part) ? void 0 : f.start),
                                                      partDuration: S(null == (g = e.part) ? void 0 : g.duration),
                                                      levelBitrate: S(null == y ? void 0 : y.bitrate),
                                                      levelAudioCodec: null == y ? void 0 : y.audioCodec,
                                                      loaded: S(null == A ? void 0 : A.loaded),
                                                      total: S(null == A ? void 0 : A.total),
                                                      loaderRetry: S(null == A ? void 0 : A.retry),
                                                      bandwidthEstimate: S(null == A ? void 0 : A.bwEstimate),
                                                      mediaCurrentTime: S(r.currentTime),
                                                      mediaReadyState: S(r.readyState),
                                                      mediaNetworkState: S(r.networkState),
                                                      ...((e) => {
                                                          try {
                                                              let t,
                                                                  r,
                                                                  i = e.buffered,
                                                                  n = S(e.currentTime),
                                                                  a = 0,
                                                                  s = 0,
                                                                  l = 0;
                                                              for (let e = 0; e < i.length; e++) {
                                                                  let o = S(i.start(e)),
                                                                      d = S(i.end(e));
                                                                  void 0 === o ||
                                                                      void 0 === d ||
                                                                      d < o ||
                                                                      ((t = void 0 === t ? o : Math.min(t, o)),
                                                                      (r = void 0 === r ? d : Math.max(r, d)),
                                                                      (a += d - o),
                                                                      void 0 !== n && ((s += Math.max(0, Math.min(d, n) - o)), (l += Math.max(0, d - Math.max(o, n)))));
                                                              }
                                                              return {
                                                                  bufferedStart: t,
                                                                  bufferedEnd: r,
                                                                  bufferedLength: S(a),
                                                                  backBufferLength: void 0 === n ? void 0 : S(s),
                                                                  forwardBufferLength: void 0 === n ? void 0 : S(l),
                                                              };
                                                          } catch (e) {
                                                              return {};
                                                          }
                                                      })(r),
                                                      ...n,
                                                  };
                                              } catch (e) {
                                                  return n;
                                              }
                                          })(d, f, g, b)
                                        : {}),
                                };
                            })({
                                data: e,
                                action: t,
                                now: a,
                                playbackStartedAt: this.playbackStartedAt,
                                retryCounter: this.retryCounter,
                                hlsErrorRetryLimit: this.hlsErrorRetryLimit,
                                sourceIndex: this.currentSourceIndex,
                                uuid: this.currentPlayId,
                                levels: null != (n = null == (r = this.hls) ? void 0 : r.levels) ? n : [],
                                audioElement: this.audioElement,
                                bufferAppendCircuitBreaker: { count: s, limit: 5, windowMs: 1e4 },
                            }),
                        );
                }
                registerBufferAppendError(e) {
                    return (
                        (this.bufferAppendErrorTimestamps = this.bufferAppendErrorTimestamps.filter((t) => e - t <= 1e4)),
                        this.bufferAppendErrorTimestamps.push(e),
                        this.bufferAppendErrorTimestamps.length
                    );
                }
                errorListener(e, t) {
                    if (!this.hls) return;
                    let r = t.type === y.wU.MEDIA_ERROR && t.details === y.vj.MEDIA_SOURCE_REQUIRES_RESET;
                    if (!t.fatal && !r) {
                        let e = Date.now();
                        if (t.details === y.vj.BUFFER_APPEND_ERROR) {
                            let r = this.registerBufferAppendError(e);
                            if (r >= 5) {
                                (this.logHlsError(t, 'circuitBreaker', e, r),
                                    this.destroyHls(),
                                    this.emitter.emit('error', new a.t('HLS buffer append error loop', { code: f.QC.MEDIA_ELEMENT_ERROR, data: t })));
                                return;
                            }
                            this.logHlsError(t, 'handledByHls', e, r);
                            return;
                        }
                        this.logHlsError(t, 'handledByHls', e);
                        return;
                    }
                    switch (t.type) {
                        case y.wU.NETWORK_ERROR:
                            if ((this.retryCounter++, this.retryCounter > this.hlsErrorRetryLimit)) {
                                (this.logHlsError(t, 'emitError'), this.destroyHls());
                                let e = new a.t('HLS error', { code: f.QC.MEDIA_ELEMENT_ERROR, data: t });
                                this.emitter.emit('error', e);
                            } else (this.logHlsError(t, 'startLoad'), this.hls.startLoad());
                            break;
                        case y.Ay.ErrorTypes.MEDIA_ERROR:
                            if (C(t.details)) {
                                (this.logHlsError(t, 'emitError'),
                                    this.destroyHls(),
                                    this.emitter.emit('error', new a.t('HLS error', { code: f.QC.MEDIA_ELEMENT_ERROR, data: t })));
                                break;
                            }
                            (this.logHlsError(t, 'recoverMediaError'), this.hls.recoverMediaError());
                            break;
                        default:
                            (this.logHlsError(t, 'emitError'),
                                this.destroyHls(),
                                this.emitter.emit('error', new a.t('HLS error', { code: f.QC.MEDIA_ELEMENT_ERROR, data: t })));
                    }
                }
                levelToManualQuality(e) {
                    var t, r;
                    return { bitrate: e.bitrate, audioCodec: null != (r = e.audioCodec) ? r : g(e.codecs || (null == (t = e.attrs) ? void 0 : t.CODECS)) };
                }
                setErrorListener(e) {
                    (this.removeErrorListener(), this.hls && ((this.hlsJsErrorListener = e), this.hls.on(y.sV.ERROR, e)));
                }
                removeErrorListener() {
                    (this.hls && this.hlsJsErrorListener && this.hls.off(y.sV.ERROR, this.hlsJsErrorListener), (this.hlsJsErrorListener = null));
                }
                onFragChanged(e, t) {
                    var r;
                    (null == (r = t.frag) ? void 0 : r.programDateTime) && this.onProgramDateTimeUpdate && this.onProgramDateTimeUpdate(t.frag.programDateTime);
                }
                setProgramDateTimeListener(e) {
                    (this.removeProgramDateTimeListener(),
                        this.hls && ((this.programDateTimeListener = e), this.hls.on(y.sV.FRAG_CHANGED, this.programDateTimeListener)));
                }
                removeProgramDateTimeListener() {
                    (this.hls && this.programDateTimeListener && this.hls.off(y.sV.FRAG_CHANGED, this.programDateTimeListener), (this.programDateTimeListener = null));
                }
                constructor(e) {
                    var t, r;
                    (super(),
                        (0, i._)(this, 'audioElement', document.createElement('audio')),
                        (0, i._)(this, 'hls', null),
                        (0, i._)(this, 'retryCounter', 0),
                        (0, i._)(this, 'hlsErrorRetryLimit', void 0),
                        (0, i._)(this, 'hlsJsErrorListener', null),
                        (0, i._)(this, 'programDateTimeListener', null),
                        (0, i._)(this, 'onProgramDateTimeUpdate', void 0),
                        (0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'manualQualityController', void 0),
                        (0, i._)(this, 'currentSourceIndex', void 0),
                        (0, i._)(this, 'currentPlayId', void 0),
                        (0, i._)(this, 'currentManualQualitySourceKey', void 0),
                        (0, i._)(this, 'playbackStartedAt', void 0),
                        (0, i._)(this, 'bufferAppendErrorTimestamps', []),
                        (0, i._)(this, 'hlsListeners', []),
                        this.setupAudioElement(),
                        (this.hlsErrorRetryLimit = e.hlsErrorRetryLimit),
                        (this.onProgramDateTimeUpdate = e.onProgramDateTimeUpdate),
                        (this.logger = e.logger),
                        (this.manualQualityController = null != (r = e.manualQualityController) ? r : null),
                        (this.applyManualQuality = this.applyManualQuality.bind(this)),
                        (this.onManifestParsed = this.onManifestParsed.bind(this)),
                        (this.errorListener = this.errorListener.bind(this)),
                        (this.onFragChanged = this.onFragChanged.bind(this)),
                        this.initHls(),
                        null == (t = this.manualQualityController) || t.manualQuality.onChange(this.applyManualQuality));
                }
            }
            class T extends m {
                constructor() {
                    (super(), (0, i._)(this, 'audioElement', document.createElement('audio')), this.setupAudioElement());
                }
            }
            let R = (0, d.fP)(0.15);
            function H(e) {
                let { currentTime: t, duration: r } = e;
                return (
                    e.readyState < e.HAVE_FUTURE_DATA ||
                    !u(e).some((e) => {
                        let { start: i, end: n } = e;
                        return !(t < i) && !(t > n) && (r <= n || t + R < n);
                    })
                );
            }
        },
    },
]);
