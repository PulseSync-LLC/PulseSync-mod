'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3857],
    {
        21468: (e, t, r) => {
            r.d(t, { x: () => s });
            function s() {
                return 'object' == typeof self ? self : 'object' == typeof window ? window : globalThis;
            }
        },
        43857: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    HlsCoreAdapter: () => _,
                    HtmlAudioCoreAdapter: () => w,
                    YaspCoreAdapter: () => g,
                    YaspLoader: () => m,
                    checkBuffering: () => b,
                    getRemainingBufferedTime: () => f,
                });
            var s = r(30141),
                n = r(57158),
                i = r(72560);
            async function o(e) {
                let t = [
                    ['vpuid', i.$],
                    ['version', e?.version],
                    ['testid', isFinite(e.testid) ? String(e.testid) : void 0],
                    ['bundleurl', e?.bundleUrl],
                ]
                    .filter(([e, t]) => !!t)
                    .map((e) => e.join('='))
                    .join('&');
                try {
                    var r, s;
                    let i = e.hostname || 'frontend.vh.yandex.ru',
                        o = t ? `?${t}` : '';
                    await ((r = `https://${i}/get_player/${e.file}${o}`),
                    (s = e.checkLoad),
                    (0, n.I)({
                        src: r,
                        async: !1,
                        retries: 3,
                        dropCacheOnRetry: !0,
                        onBeforeLoad: (e) => {
                            e.crossOrigin = 'use-credentials';
                        },
                        checkLoad: s,
                    }));
                } catch (e) {
                    throw e;
                }
            }
            function a(e) {
                try {
                    return e();
                } catch {
                    return;
                }
            }
            let l = (0, r(21468).x)();
            async function h(e) {
                if (a(() => l.Ya)?.YaspVideoElement) return Promise.resolve();
                await o({ file: 'yasp.js', version: e?.version, testid: e?.testid, bundleUrl: e?.bundleUrl, checkLoad: () => !!a(() => l.Ya)?.preloadYaspScripts }),
                    await l.Ya.preloadYaspScripts();
            }
            var d = r(63924);
            class u extends d.t {
                constructor(e = '[Sonata] YASP loading aborted', { code: t = 'E_SONATA', ...r } = {}) {
                    super(e, { code: t, ...r }), (0, s._)(this, 'name', 'YaspLoadingAbortedException'), Object.setPrototypeOf(this, u.prototype);
                }
            }
            class m {
                get isYaspLoaded() {
                    return void 0 !== window.Ya && void 0 !== window.Ya.YaspAudioElement;
                }
                loadYasp(e) {
                    let { version: t, sourceLimit: r, retryDelayMs: s, perfLogUrl: n, abortSignal: i } = e;
                    if (this.isYaspLoaded) return Promise.resolve();
                    let o = null != s ? s : 1e3,
                        a = null;
                    return new Promise((e, s) => {
                        if (null == i ? void 0 : i.aborted) return void s(new u());
                        let l = () => {
                            a && clearTimeout(a), s(new u());
                        };
                        null == i || i.addEventListener('abort', l, { once: !0 });
                        let m = () => {
                            if (null == i ? void 0 : i.aborted) return void s(new u());
                            h({ version: t })
                                .then(() => {
                                    var t, s;
                                    null == i || i.removeEventListener('abort', l);
                                    let o = window.Ya.YaspAudioElement;
                                    o.messenger.on('yasp-event', this.yaspEventHandler);
                                    let a = this.getTelemetryTestIds ? this.getTelemetryTestIds() : void 0;
                                    null == (t = this.yaspTelemetry) || t.setStaticParams({ testIds: a }),
                                        o.setWorkerConfig({ sourceLimit: r, perfLogUrl: n }),
                                        null == (s = this.yaspTelemetry) || s.onCreatePlayer({ sourceLimit: r }),
                                        e();
                                })
                                .catch((e) => {
                                    let r = new d.t('[Sonata] Error in loading YASP', { code: 'E_SONATA', cause: e });
                                    this.logger.error(r, { yaspVersion: t }),
                                        new Promise((e) => {
                                            a = setTimeout(e, o);
                                        }).then(() => m());
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
                    if (!this.isYaspLoaded) throw new d.t('YaspAudioElement has not been loaded');
                    return window.Ya.YaspAudioElement;
                }
                attachYasp(e) {
                    let t = window.Ya.YaspAudioElement;
                    if (!this.isYaspLoaded) throw new d.t('YaspAudioElement has not been loaded');
                    t.isYaspAudioElement(e) || t.attach(e);
                }
                constructor({ logger: e, yaspTelemetry: t, getTelemetryTestIds: r }) {
                    (0, s._)(this, 'logger', void 0),
                        (0, s._)(this, 'yaspTelemetry', void 0),
                        (0, s._)(this, 'getTelemetryTestIds', void 0),
                        (this.logger = e),
                        (this.yaspTelemetry = t),
                        (this.getTelemetryTestIds = r),
                        (this.yaspEventHandler = this.yaspEventHandler.bind(this));
                }
            }
            var c = r(54209),
                p = r(89345);
            function E(e) {
                let t = [];
                for (let r = 0; r < e.buffered.length; r++)
                    try {
                        t.push({ start: (0, p.fP)(e.buffered.start(r)), end: (0, p.fP)(e.buffered.end(r)) });
                    } catch (e) {}
                return (function (e) {
                    if (e.length <= 1) return e;
                    let t = e.slice().sort((e, t) => e.start - t.start),
                        r = t[0] ? [t[0]] : [];
                    for (let e = 1; e < t.length; e++) {
                        let s = t[e],
                            n = r[r.length - 1];
                        s && n && (n.end < s.start ? r.push(s) : n.end < s.end && (n.end = s.end));
                    }
                    return r;
                })(t);
            }
            function f(e) {
                let t = E(e),
                    r = t[t.length - 1];
                if (!r) return (0, p.fP)(0);
                let s = r.end - e.currentTime;
                return (0, p.fP)(Number(s.toFixed(3)));
            }
            class v {
                setupAudioElement() {
                    (this.audioElement.autoplay = !1),
                        (this.audioElement.loop = !1),
                        (this.audioElement.preload = 'auto'),
                        (this.audioElement.crossOrigin = 'anonymous'),
                        this.audioElement.addEventListener('timeupdate', this.progressHandler),
                        this.audioElement.addEventListener('durationchange', this.progressHandler),
                        this.audioElement.addEventListener('pause', this.pauseHandler),
                        this.audioElement.addEventListener('error', this.audioErrorHandler),
                        this.audioElement.addEventListener('volumechange', this.volumeChangeHandler),
                        this.audioElement.addEventListener('ratechange', this.speedChangeHandler);
                }
                get source() {
                    return this.audioElement;
                }
                async play(e) {
                    let { source: t, positionSec: r } = e;
                    (this.audioElement.src = t.src), this.audioElement.load(), await this.audioElement.play(), void 0 !== r && (this.audioElement.currentTime = r);
                }
                setSrc(e) {
                    let { source: t, positionSec: r } = e;
                    (this.audioElement.src = t.src), this.audioElement.load(), void 0 !== r && (this.audioElement.currentTime = r);
                }
                preloadSrc(e) {
                    return Promise.resolve();
                }
                releaseSrc(e) {
                    return Promise.resolve();
                }
                pause() {
                    return this.audioElement.pause(), Promise.resolve();
                }
                async resume() {
                    await this.audioElement.play(), this.emitter.emit('resume');
                }
                setProgress(e) {
                    let t = e >= this.audioElement.duration ? this.audioElement.duration - 0.01 : e;
                    return (this.audioElement.currentTime = t), Promise.resolve(this.audioElement.currentTime);
                }
                setVolume(e) {
                    return (this.audioElement.volume = e), Promise.resolve(this.audioElement.volume);
                }
                setSpeed(e) {
                    return (this.audioElement.defaultPlaybackRate = e), (this.audioElement.playbackRate = e), Promise.resolve(this.audioElement.playbackRate);
                }
                stop() {
                    return this.audioElement.removeAttribute('src'), this.audioElement.load(), Promise.resolve();
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
                    this.emitter.emit('update_progress', { duration: e, position: t, loaded: r, remainingBufferedTime: f(this.audioElement) });
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
                    this.audioElement.addEventListener('canplay', e);
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
                    this.emitter.emit('error', e);
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
                constructor() {
                    (0, s._)(this, 'emitter', new c.b()),
                        (this.progressHandler = this.progressHandler.bind(this)),
                        (this.volumeChangeHandler = this.volumeChangeHandler.bind(this)),
                        (this.speedChangeHandler = this.speedChangeHandler.bind(this)),
                        (this.audioErrorHandler = this.audioErrorHandler.bind(this)),
                        (this.pauseHandler = this.pauseHandler.bind(this));
                }
            }
            function y(e) {
                try {
                    return new URL(e);
                } catch (e) {
                    return null;
                }
            }
            class g extends v {
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
                    window.Ya.YaspAudioElement.configureSource(t.src, { audioDecodingKey: t.key, mirrorUrls: t.mirrorUrls }), (t.positionSec = r);
                    let s = this.audioElement.src,
                        n = t.src;
                    this.audioElement.src = n;
                    let i = Promise.resolve();
                    return (
                        !(function (e, t) {
                            let r = y(e),
                                s = y(t);
                            return !!r && !!s && ''.concat(r.origin).concat(r.pathname) === ''.concat(s.origin).concat(s.pathname);
                        })(s, n) && (i = this.audioElement.yaspReleaseSrc(s)),
                        i.finally(() =>
                            this.audioElement.play().catch((e) => {
                                if ('string' != typeof e || 'Source loading interrupted: new source requested before previous load completed' !== e) throw e;
                            }),
                        )
                    );
                }
                preloadSrc(e) {
                    let { source: t, bufferGoal: r, positionSec: s } = e;
                    return t.canBePreloaded
                        ? ((t.positionSec = s),
                          this.audioElement
                              .yaspPreloadSrc(t.src, { yaspSourceConfig: { preloadBufferGoal: r, audioDecodingKey: t.key, mirrorUrls: t.mirrorUrls } })
                              .then(() => Promise.resolve()))
                        : Promise.resolve();
                }
                releaseSrc(e) {
                    let { source: t } = e;
                    return this.audioElement.yaspReleaseSrc(t.src).then(() => Promise.resolve());
                }
                setSrc(e) {
                    let { source: t, positionSec: r } = e;
                    window.Ya.YaspAudioElement.configureSource(t.src, { audioDecodingKey: t.key, mirrorUrls: t.mirrorUrls }),
                        (t.positionSec = r),
                        (this.audioElement.src = t.src);
                }
                setProgress(e) {
                    var t;
                    return null == (t = this.yaspTelemetry) || t.onSeek(this.audioElement.currentTime, e), super.setProgress(e);
                }
                stop() {
                    return this.audioElement.yaspReleaseSrc(this.audioElement.src).then(), super.stop();
                }
                detachYasp() {
                    this.audioElement.removeEventListener('yasp-event', this.yaspEventHandler),
                        this.audioElement.removeEventListener('yasp-error', this.yaspErrorHandler),
                        this.audioElement.detach();
                }
                constructor({ yaspAudioElement: e, yaspTelemetry: t }) {
                    super(),
                        (0, s._)(this, 'audioElement', void 0),
                        (0, s._)(this, 'yaspTelemetry', void 0),
                        (this.audioElement = e.attach(document.createElement('audio'))),
                        (this.yaspTelemetry = t),
                        (this.yaspEventHandler = this.yaspEventHandler.bind(this)),
                        (this.yaspErrorHandler = this.yaspErrorHandler.bind(this)),
                        this.setupAudioElement(),
                        this.audioElement.addEventListener('yasp-event', this.yaspEventHandler),
                        this.audioElement.addEventListener('yasp-error', this.yaspErrorHandler);
                }
            }
            var L = r(34426);
            class _ extends v {
                play(e) {
                    let { source: t } = e;
                    return this.stop().then(() => (this.hls || this.initHls(), this.load(t.src).then(() => this.audioElement.play())));
                }
                stop() {
                    return (
                        this.removeAllHlsEvents(),
                        this.removeErrorListener(),
                        this.removeProgramDateTimeListener(),
                        (this.retryCounter = 0),
                        this.hls && (this.hls.stopLoad(), this.hls.destroy(), (this.hls = null)),
                        this.audioElement.removeAttribute('src'),
                        this.audioElement.load(),
                        Promise.resolve()
                    );
                }
                initHls() {
                    this.hls ||
                        ((this.hls = new L.Ay({ liveDurationInfinity: !0, maxBufferSize: 3e6 })),
                        this.setErrorListener(this.errorListener),
                        this.setProgramDateTimeListener(this.onFragChanged));
                }
                load(e) {
                    return this.hls
                        ? (this.hls.attachMedia(this.audioElement),
                          this.hls.loadSource(e),
                          new Promise((e) => {
                              this.addOnceHlsEvent(L.sV.MANIFEST_PARSED, () => {
                                  this.hls && this.hls.startLoad();
                              }),
                                  this.addOnceHlsEvent(L.sV.MEDIA_ATTACHED, () => {
                                      e();
                                  });
                          }))
                        : Promise.resolve();
                }
                destroyHls() {
                    this.stop();
                }
                addOnceHlsEvent(e, t) {
                    this.hls && (this.hls.once(e, t), this.hlsListeners.push({ event: e, listener: t, once: !0 }));
                }
                removeAllHlsEvents() {
                    this.hlsListeners.forEach((e) => {
                        this.hls && this.hls.off(e.event, e.listener, void 0, e.once);
                    }),
                        (this.hlsListeners = []);
                }
                errorListener(e, t) {
                    if (this.hls)
                        switch (t.type) {
                            case L.wU.NETWORK_ERROR:
                                if ((this.retryCounter++, this.retryCounter > this.hlsErrorRetryLimit)) {
                                    this.destroyHls();
                                    let e = new d.t('HLS error', { data: t });
                                    this.emitter.emit('error', e);
                                } else this.hls.startLoad();
                                break;
                            case L.Ay.ErrorTypes.MEDIA_ERROR:
                                this.hls.recoverMediaError();
                                break;
                            default:
                                this.destroyHls(), this.emitter.emit('error', new d.t('HLS error', { data: t }));
                        }
                }
                setErrorListener(e) {
                    this.removeErrorListener(), this.hls && ((this.hlsJsErrorListener = e), this.hls.on(L.sV.ERROR, e));
                }
                removeErrorListener() {
                    this.hls && this.hlsJsErrorListener && this.hls.off(L.sV.ERROR, this.hlsJsErrorListener), (this.hlsJsErrorListener = null);
                }
                onFragChanged(e, t) {
                    var r;
                    (null == (r = t.frag) ? void 0 : r.programDateTime) && this.onProgramDateTimeUpdate && this.onProgramDateTimeUpdate(t.frag.programDateTime);
                }
                setProgramDateTimeListener(e) {
                    this.removeProgramDateTimeListener(), this.hls && ((this.programDateTimeListener = e), this.hls.on(L.sV.FRAG_CHANGED, this.programDateTimeListener));
                }
                removeProgramDateTimeListener() {
                    this.hls && this.programDateTimeListener && this.hls.off(L.sV.FRAG_CHANGED, this.programDateTimeListener), (this.programDateTimeListener = null);
                }
                constructor(e) {
                    super(),
                        (0, s._)(this, 'audioElement', document.createElement('audio')),
                        (0, s._)(this, 'hls', null),
                        (0, s._)(this, 'retryCounter', 0),
                        (0, s._)(this, 'hlsErrorRetryLimit', void 0),
                        (0, s._)(this, 'hlsJsErrorListener', null),
                        (0, s._)(this, 'programDateTimeListener', null),
                        (0, s._)(this, 'onProgramDateTimeUpdate', void 0),
                        (0, s._)(this, 'hlsListeners', []),
                        this.setupAudioElement(),
                        (this.hlsErrorRetryLimit = e.hlsErrorRetryLimit),
                        (this.onProgramDateTimeUpdate = e.onProgramDateTimeUpdate),
                        (this.errorListener = this.errorListener.bind(this)),
                        (this.onFragChanged = this.onFragChanged.bind(this)),
                        this.initHls();
                }
            }
            class w extends v {
                constructor() {
                    super(), (0, s._)(this, 'audioElement', document.createElement('audio')), this.setupAudioElement();
                }
            }
            let T = (0, p.fP)(0.15);
            function b(e) {
                let { currentTime: t, duration: r } = e;
                return (
                    e.readyState < e.HAVE_FUTURE_DATA ||
                    !E(e).some((e) => {
                        let { start: s, end: n } = e;
                        return !(t < s) && !(t > n) && (r <= n || t + T < n);
                    })
                );
            }
        },
        54209: (e, t, r) => {
            r.d(t, { b: () => s });
            var s = r(93994);
        },
        57158: (e, t, r) => {
            r.d(t, { I: () => i });
            let s = () => {},
                n = (e) => !0;
            function i(e) {
                return new Promise((t, r) => {
                    !(function (e) {
                        let { dropCacheOnRetry: t = !1, onBeforeLoad: r = s, retries: i = 0 } = e;
                        if (e.checkLoad && e.checkLoad()) {
                            e.onLoad && e.onLoad();
                            return;
                        }
                        let o = r,
                            a = 0;
                        t &&
                            i > 0 &&
                            (o = (e) => {
                                if ((r(e), a > 0)) {
                                    var t;
                                    let r,
                                        s = -1 === e.src.indexOf('?') ? '?' : '&',
                                        n =
                                            ((t = a),
                                            Number.isFinite((r = Math.floor(1e9 * Math.random()) % 1e9)) || (r = 0),
                                            (r += Date.now() % 1e9),
                                            String(t) + r.toString(36));
                                    e.src += s + n;
                                }
                                a++;
                            }),
                            (function e(t) {
                                let {
                                        src: r,
                                        win: i = window,
                                        charset: o = 'utf-8',
                                        async: a = !0,
                                        retries: l = 0,
                                        onRetry: h = s,
                                        retryDelay: d = 0,
                                        checkLoad: u = n,
                                        onBeforeLoad: m = s,
                                        onLoad: c = s,
                                        onError: p = s,
                                    } = t,
                                    E = i.document.createElement('script'),
                                    f = (s) => {
                                        l > 0 ? (h(s), e({ ...t, src: r, retries: l - 1 })) : p(s), E.parentNode?.removeChild(E);
                                    };
                                (E.type = 'text/javascript'),
                                    (E.async = a),
                                    (E.onload = () => (u(E) ? c() : f(Error(`checkLoad for ${r} failed`)))),
                                    (E.onerror = (e) => {
                                        try {
                                            i.setTimeout(() => {
                                                f(e);
                                            }, d);
                                        } catch {}
                                    }),
                                    (E.src = r),
                                    (E.charset = o),
                                    m(E),
                                    (function (e) {
                                        let t = e.document,
                                            r = t.getElementsByTagName('head')[0];
                                        return r || ((r = t.createElement('head')), t.documentElement.appendChild(r)), r;
                                    })(i).appendChild(E);
                            })({ ...e, onBeforeLoad: o });
                    })({ ...e, onLoad: t, onError: r });
                });
            }
        },
        93994: (e) => {
            var t = Object.prototype.hasOwnProperty,
                r = '~';
            function s() {}
            function n(e, t, r) {
                (this.fn = e), (this.context = t), (this.once = r || !1);
            }
            function i(e, t, s, i, o) {
                if ('function' != typeof s) throw TypeError('The listener must be a function');
                var a = new n(s, i || e, o),
                    l = r ? r + t : t;
                return e._events[l] ? (e._events[l].fn ? (e._events[l] = [e._events[l], a]) : e._events[l].push(a)) : ((e._events[l] = a), e._eventsCount++), e;
            }
            function o(e, t) {
                0 == --e._eventsCount ? (e._events = new s()) : delete e._events[t];
            }
            function a() {
                (this._events = new s()), (this._eventsCount = 0);
            }
            Object.create && ((s.prototype = Object.create(null)), new s().__proto__ || (r = !1)),
                (a.prototype.eventNames = function () {
                    var e,
                        s,
                        n = [];
                    if (0 === this._eventsCount) return n;
                    for (s in (e = this._events)) t.call(e, s) && n.push(r ? s.slice(1) : s);
                    return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
                }),
                (a.prototype.listeners = function (e) {
                    var t = r ? r + e : e,
                        s = this._events[t];
                    if (!s) return [];
                    if (s.fn) return [s.fn];
                    for (var n = 0, i = s.length, o = Array(i); n < i; n++) o[n] = s[n].fn;
                    return o;
                }),
                (a.prototype.listenerCount = function (e) {
                    var t = r ? r + e : e,
                        s = this._events[t];
                    return s ? (s.fn ? 1 : s.length) : 0;
                }),
                (a.prototype.emit = function (e, t, s, n, i, o) {
                    var a = r ? r + e : e;
                    if (!this._events[a]) return !1;
                    var l,
                        h,
                        d = this._events[a],
                        u = arguments.length;
                    if (d.fn) {
                        switch ((d.once && this.removeListener(e, d.fn, void 0, !0), u)) {
                            case 1:
                                return d.fn.call(d.context), !0;
                            case 2:
                                return d.fn.call(d.context, t), !0;
                            case 3:
                                return d.fn.call(d.context, t, s), !0;
                            case 4:
                                return d.fn.call(d.context, t, s, n), !0;
                            case 5:
                                return d.fn.call(d.context, t, s, n, i), !0;
                            case 6:
                                return d.fn.call(d.context, t, s, n, i, o), !0;
                        }
                        for (h = 1, l = Array(u - 1); h < u; h++) l[h - 1] = arguments[h];
                        d.fn.apply(d.context, l);
                    } else {
                        var m,
                            c = d.length;
                        for (h = 0; h < c; h++)
                            switch ((d[h].once && this.removeListener(e, d[h].fn, void 0, !0), u)) {
                                case 1:
                                    d[h].fn.call(d[h].context);
                                    break;
                                case 2:
                                    d[h].fn.call(d[h].context, t);
                                    break;
                                case 3:
                                    d[h].fn.call(d[h].context, t, s);
                                    break;
                                case 4:
                                    d[h].fn.call(d[h].context, t, s, n);
                                    break;
                                default:
                                    if (!l) for (m = 1, l = Array(u - 1); m < u; m++) l[m - 1] = arguments[m];
                                    d[h].fn.apply(d[h].context, l);
                            }
                    }
                    return !0;
                }),
                (a.prototype.on = function (e, t, r) {
                    return i(this, e, t, r, !1);
                }),
                (a.prototype.once = function (e, t, r) {
                    return i(this, e, t, r, !0);
                }),
                (a.prototype.removeListener = function (e, t, s, n) {
                    var i = r ? r + e : e;
                    if (!this._events[i]) return this;
                    if (!t) return o(this, i), this;
                    var a = this._events[i];
                    if (a.fn) a.fn !== t || (n && !a.once) || (s && a.context !== s) || o(this, i);
                    else {
                        for (var l = 0, h = [], d = a.length; l < d; l++) (a[l].fn !== t || (n && !a[l].once) || (s && a[l].context !== s)) && h.push(a[l]);
                        h.length ? (this._events[i] = 1 === h.length ? h[0] : h) : o(this, i);
                    }
                    return this;
                }),
                (a.prototype.removeAllListeners = function (e) {
                    var t;
                    return e ? ((t = r ? r + e : e), this._events[t] && o(this, t)) : ((this._events = new s()), (this._eventsCount = 0)), this;
                }),
                (a.prototype.off = a.prototype.removeListener),
                (a.prototype.addListener = a.prototype.on),
                (a.prefixed = r),
                (a.EventEmitter = a),
                (e.exports = a);
        },
    },
]);
