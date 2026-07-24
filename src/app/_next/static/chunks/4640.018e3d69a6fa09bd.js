'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4640],
    {
        14174: (e) => {
            var t = Object.prototype.hasOwnProperty,
                r = '~';
            function n() {}
            function i(e, t, r) {
                (this.fn = e), (this.context = t), (this.once = r || !1);
            }
            function s(e, t, n, s, a) {
                if ('function' != typeof n) throw TypeError('The listener must be a function');
                var o = new i(n, s || e, a),
                    l = r ? r + t : t;
                return e._events[l] ? (e._events[l].fn ? (e._events[l] = [e._events[l], o]) : e._events[l].push(o)) : ((e._events[l] = o), e._eventsCount++), e;
            }
            function a(e, t) {
                0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
            }
            function o() {
                (this._events = new n()), (this._eventsCount = 0);
            }
            Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
                (o.prototype.eventNames = function () {
                    var e,
                        n,
                        i = [];
                    if (0 === this._eventsCount) return i;
                    for (n in (e = this._events)) t.call(e, n) && i.push(r ? n.slice(1) : n);
                    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i;
                }),
                (o.prototype.listeners = function (e) {
                    var t = r ? r + e : e,
                        n = this._events[t];
                    if (!n) return [];
                    if (n.fn) return [n.fn];
                    for (var i = 0, s = n.length, a = Array(s); i < s; i++) a[i] = n[i].fn;
                    return a;
                }),
                (o.prototype.listenerCount = function (e) {
                    var t = r ? r + e : e,
                        n = this._events[t];
                    return n ? (n.fn ? 1 : n.length) : 0;
                }),
                (o.prototype.emit = function (e, t, n, i, s, a) {
                    var o = r ? r + e : e;
                    if (!this._events[o]) return !1;
                    var l,
                        u,
                        d = this._events[o],
                        h = arguments.length;
                    if (d.fn) {
                        switch ((d.once && this.removeListener(e, d.fn, void 0, !0), h)) {
                            case 1:
                                return d.fn.call(d.context), !0;
                            case 2:
                                return d.fn.call(d.context, t), !0;
                            case 3:
                                return d.fn.call(d.context, t, n), !0;
                            case 4:
                                return d.fn.call(d.context, t, n, i), !0;
                            case 5:
                                return d.fn.call(d.context, t, n, i, s), !0;
                            case 6:
                                return d.fn.call(d.context, t, n, i, s, a), !0;
                        }
                        for (u = 1, l = Array(h - 1); u < h; u++) l[u - 1] = arguments[u];
                        d.fn.apply(d.context, l);
                    } else {
                        var m,
                            c = d.length;
                        for (u = 0; u < c; u++)
                            switch ((d[u].once && this.removeListener(e, d[u].fn, void 0, !0), h)) {
                                case 1:
                                    d[u].fn.call(d[u].context);
                                    break;
                                case 2:
                                    d[u].fn.call(d[u].context, t);
                                    break;
                                case 3:
                                    d[u].fn.call(d[u].context, t, n);
                                    break;
                                case 4:
                                    d[u].fn.call(d[u].context, t, n, i);
                                    break;
                                default:
                                    if (!l) for (m = 1, l = Array(h - 1); m < h; m++) l[m - 1] = arguments[m];
                                    d[u].fn.apply(d[u].context, l);
                            }
                    }
                    return !0;
                }),
                (o.prototype.on = function (e, t, r) {
                    return s(this, e, t, r, !1);
                }),
                (o.prototype.once = function (e, t, r) {
                    return s(this, e, t, r, !0);
                }),
                (o.prototype.removeListener = function (e, t, n, i) {
                    var s = r ? r + e : e;
                    if (!this._events[s]) return this;
                    if (!t) return a(this, s), this;
                    var o = this._events[s];
                    if (o.fn) o.fn !== t || (i && !o.once) || (n && o.context !== n) || a(this, s);
                    else {
                        for (var l = 0, u = [], d = o.length; l < d; l++) (o[l].fn !== t || (i && !o[l].once) || (n && o[l].context !== n)) && u.push(o[l]);
                        u.length ? (this._events[s] = 1 === u.length ? u[0] : u) : a(this, s);
                    }
                    return this;
                }),
                (o.prototype.removeAllListeners = function (e) {
                    var t;
                    return e ? ((t = r ? r + e : e), this._events[t] && a(this, t)) : ((this._events = new n()), (this._eventsCount = 0)), this;
                }),
                (o.prototype.off = o.prototype.removeListener),
                (o.prototype.addListener = o.prototype.on),
                (o.prefixed = r),
                (o.EventEmitter = o),
                (e.exports = o);
        },
        42744: (e, t, r) => {
            r.d(t, { x: () => n });
            function n() {
                return 'object' == typeof self ? self : 'object' == typeof window ? window : globalThis;
            }
        },
        54640: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    HlsCoreAdapter: () => w,
                    HtmlAudioCoreAdapter: () => T,
                    YaspCoreAdapter: () => C,
                    YaspLoader: () => m,
                    checkBuffering: () => H,
                    getRemainingBufferedTime: () => y,
                });
            var n = r(91945),
                i = r(96533),
                s = r(37956);
            async function a(e) {
                let t = [
                    ['vpuid', s.$],
                    ['version', e?.version],
                    ['testid', isFinite(e.testid) ? String(e.testid) : void 0],
                    ['bundleurl', e?.bundleUrl],
                ]
                    .filter(([e, t]) => !!t)
                    .map((e) => e.join('='))
                    .join('&');
                try {
                    var r, n;
                    let s = e.hostname || 'frontend.vh.yandex.ru',
                        a = t ? `?${t}` : '';
                    await ((r = `https://${s}/get_player/${e.file}${a}`),
                    (n = e.checkLoad),
                    (0, i.I)({
                        src: r,
                        async: !1,
                        retries: 3,
                        dropCacheOnRetry: !0,
                        onBeforeLoad: (e) => {
                            e.crossOrigin = 'use-credentials';
                        },
                        checkLoad: n,
                    }));
                } catch (e) {
                    throw e;
                }
            }
            function o(e) {
                try {
                    return e();
                } catch {
                    return;
                }
            }
            let l = (0, r(42744).x)();
            async function u(e) {
                if (o(() => l.Ya)?.YaspVideoElement) return Promise.resolve();
                await a({ file: 'yasp.js', version: e?.version, testid: e?.testid, bundleUrl: e?.bundleUrl, checkLoad: () => !!o(() => l.Ya)?.preloadYaspScripts }),
                    await l.Ya.preloadYaspScripts();
            }
            var d = r(29222);
            class h extends d.t {
                constructor(e = '[Sonata] YASP loading aborted', { code: t = 'E_SONATA', ...r } = {}) {
                    super(e, { code: t, ...r }), (0, n._)(this, 'name', 'YaspLoadingAbortedException'), Object.setPrototypeOf(this, h.prototype);
                }
            }
            class m {
                get isYaspLoaded() {
                    return void 0 !== window.Ya && void 0 !== window.Ya.YaspAudioElement;
                }
                loadYasp(e) {
                    let { version: t, sourceLimit: r, retryDelayMs: n, perfLogUrl: i, abortSignal: s } = e;
                    if (this.isYaspLoaded) return Promise.resolve();
                    let a = null != n ? n : 1e3,
                        o = null;
                    return new Promise((e, n) => {
                        if (null == s ? void 0 : s.aborted) return void n(new h());
                        let l = () => {
                            o && clearTimeout(o), n(new h());
                        };
                        null == s || s.addEventListener('abort', l, { once: !0 });
                        let m = () => {
                            if (null == s ? void 0 : s.aborted) return void n(new h());
                            u({ version: t })
                                .then(() => {
                                    var t, n;
                                    null == s || s.removeEventListener('abort', l);
                                    let a = window.Ya.YaspAudioElement;
                                    a.messenger.on('yasp-event', this.yaspEventHandler);
                                    let o = this.getTelemetryTestIds ? this.getTelemetryTestIds() : void 0;
                                    null == (t = this.yaspTelemetry) || t.setStaticParams({ testIds: o }),
                                        a.setWorkerConfig({ sourceLimit: r, perfLogUrl: i }),
                                        null == (n = this.yaspTelemetry) || n.onCreatePlayer({ sourceLimit: r }),
                                        e();
                                })
                                .catch((e) => {
                                    let r = new d.t('[Sonata] Error in loading YASP', { code: 'E_SONATA', cause: e });
                                    this.logger.error(r, { yaspVersion: t }),
                                        new Promise((e) => {
                                            o = setTimeout(e, a);
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
                    (0, n._)(this, 'logger', void 0),
                        (0, n._)(this, 'yaspTelemetry', void 0),
                        (0, n._)(this, 'getTelemetryTestIds', void 0),
                        (this.logger = e),
                        (this.yaspTelemetry = t),
                        (this.getTelemetryTestIds = r),
                        (this.yaspEventHandler = this.yaspEventHandler.bind(this));
                }
            }
            var c = r(88461),
                p = r(27158);
            function v(e) {
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
                        let n = t[e],
                            i = r[r.length - 1];
                        n && i && (i.end < n.start ? r.push(n) : i.end < n.end && (i.end = n.end));
                    }
                    return r;
                })(t);
            }
            function y(e) {
                let t = v(e),
                    r = t[t.length - 1];
                if (!r) return (0, p.fP)(0);
                let n = r.end - e.currentTime;
                return (0, p.fP)(Number(n.toFixed(3)));
            }
            class E {
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
                    this.emitter.emit('update_progress', { duration: e, position: t, loaded: r, remainingBufferedTime: y(this.audioElement) });
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
                    this.ensureNativeCanplayListenerInstalled(), this.audioElement.addEventListener('canplay', e);
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
                    (this.pendingCanplay = null), t(e);
                }
                constructor() {
                    (0, n._)(this, 'emitter', new c.b()),
                        (0, n._)(this, 'nativeCanplayListenerInstalled', !1),
                        (0, n._)(this, 'pendingCanplay', null),
                        (this.progressHandler = this.progressHandler.bind(this)),
                        (this.volumeChangeHandler = this.volumeChangeHandler.bind(this)),
                        (this.speedChangeHandler = this.speedChangeHandler.bind(this)),
                        (this.audioErrorHandler = this.audioErrorHandler.bind(this)),
                        (this.pauseHandler = this.pauseHandler.bind(this)),
                        (this.nativeCanplayHandler = this.nativeCanplayHandler.bind(this));
                }
            }
            function f(e) {
                try {
                    return new URL(e);
                } catch (e) {
                    return null;
                }
            }
            function g(e, t) {
                let r = f(e),
                    n = f(t);
                return !!r && !!n && ''.concat(r.origin).concat(r.pathname) === ''.concat(n.origin).concat(n.pathname);
            }
            class L extends d.t {
                constructor(e = 'The play() request was interrupted', { code: t = 'E_SONATA', ...r } = {}) {
                    super(e, { code: t, ...r }), (0, n._)(this, 'name', 'AbortError'), Object.setPrototypeOf(this, L.prototype);
                }
            }
            class C extends E {
                abortPendingStartup() {
                    let e = this.pendingStartupAbortController;
                    e && ((this.pendingStartupAbortController = null), e.abort());
                }
                createPlayRequestAbortedError() {
                    return new L();
                }
                isRetryableStartError(e) {
                    return (
                        'string' == typeof e ||
                        e instanceof L ||
                        ((!!('undefined' != typeof DOMException && e instanceof DOMException) || e instanceof Error) && 'AbortError' === e.name)
                    );
                }
                waitForPlayingOrYaspError(e, t) {
                    return new Promise((r, n) => {
                        let i = this.audioElement,
                            s = this.createPlayRequestAbortedError();
                        function a() {
                            i.removeEventListener('playing', l),
                                i.removeEventListener('error', u),
                                i.removeEventListener('yasp-error', d),
                                t.removeEventListener('abort', o);
                        }
                        function o() {
                            a(), n(s);
                        }
                        function l() {
                            i.src === e && (a(), r());
                        }
                        function u() {
                            if (i.src !== e || t.aborted) return void o();
                            a(), n(Error('[Sonata] HTMLMediaElement error during YASP startup'));
                        }
                        function d(r) {
                            if (i.src !== e || t.aborted) return void o();
                            a(), n(r);
                        }
                        if (t.aborted) return void o();
                        i.addEventListener('playing', l), i.addEventListener('error', u), i.addEventListener('yasp-error', d), t.addEventListener('abort', o);
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
                    this.abortPendingStartup(), (t.positionSec = r);
                    let n = this.audioElement.src,
                        i = t.src;
                    window.Ya.YaspAudioElement.configureSource(t.src, { audioDecodingKey: t.key, mirrorUrls: t.mirrorUrls }), (this.audioElement.src = i);
                    let s = new AbortController();
                    this.pendingStartupAbortController = s;
                    let a = Promise.resolve();
                    g(n, i) || (a = this.audioElement.yaspReleaseSrc(n));
                    let o = this.waitForCanplay(i);
                    return a
                        .then(() => o)
                        .then((e) => {
                            let t = this.createPlayRequestAbortedError();
                            if (!e || this.audioElement.src !== i) throw t;
                            return this.audioElement.play().catch((e) => {
                                if (this.audioElement.src !== i) throw t;
                                if (!this.isRetryableStartError(e)) throw e;
                                return this.waitForPlayingOrYaspError(i, s.signal);
                            });
                        });
                }
                preloadSrc(e) {
                    let { source: t, bufferGoal: r, positionSec: n } = e;
                    return t.canBePreloaded
                        ? ((t.positionSec = n),
                          this.audioElement
                              .yaspPreloadSrc(t.src, { yaspSourceConfig: { preloadBufferGoal: r, audioDecodingKey: t.key, mirrorUrls: t.mirrorUrls } })
                              .then(() => Promise.resolve()))
                        : Promise.resolve();
                }
                releaseSrc(e) {
                    let { source: t } = e;
                    return (
                        g(this.audioElement.src, t.src) && (this.cancelPendingCanplay(), this.abortPendingStartup(), this.audioElement.removeAttribute('src')),
                        this.audioElement.yaspReleaseSrc(t.src).then(() => Promise.resolve())
                    );
                }
                setSrc(e) {
                    let { source: t, positionSec: r } = e;
                    (t.positionSec = r),
                        window.Ya.YaspAudioElement.configureSource(t.src, { audioDecodingKey: t.key, mirrorUrls: t.mirrorUrls }),
                        (this.audioElement.src = t.src);
                }
                setProgress(e) {
                    var t;
                    return null == (t = this.yaspTelemetry) || t.onSeek(this.audioElement.currentTime, e), super.setProgress(e);
                }
                stop() {
                    return this.cancelPendingCanplay(), this.abortPendingStartup(), this.audioElement.yaspReleaseSrc(this.audioElement.src).then(), super.stop();
                }
                detachYasp() {
                    this.audioElement.removeEventListener('yasp-event', this.yaspEventHandler),
                        this.audioElement.removeEventListener('yasp-error', this.yaspErrorHandler),
                        this.audioElement.detach();
                }
                constructor({ yaspAudioElement: e, yaspTelemetry: t }) {
                    super(),
                        (0, n._)(this, 'audioElement', void 0),
                        (0, n._)(this, 'yaspTelemetry', void 0),
                        (0, n._)(this, 'pendingStartupAbortController', null),
                        (this.audioElement = e.attach(document.createElement('audio'))),
                        (this.yaspTelemetry = t),
                        (this.yaspEventHandler = this.yaspEventHandler.bind(this)),
                        (this.yaspErrorHandler = this.yaspErrorHandler.bind(this)),
                        this.setupAudioElement(),
                        this.audioElement.addEventListener('yasp-event', this.yaspEventHandler),
                        this.audioElement.addEventListener('yasp-error', this.yaspErrorHandler);
                }
            }
            var b = r(39014);
            let P = (e) => {
                    if (!e) return;
                    let t = e
                        .split(',')
                        .map((e) => e.trim())
                        .filter(Boolean);
                    return 1 === t.length ? t[0] : void 0;
                },
                S = (e) => {
                    var t, r;
                    return null != (r = e.audioCodec) ? r : P(e.codecs || (null == (t = e.attrs) ? void 0 : t.CODECS));
                },
                _ = (e, t) => {
                    if (!t) return (e.startLevel = -1), (e.autoLevelCapping = -1), (e.loadLevel = -1), 'auto';
                    let r = ((e, t) => {
                        var r, n, i, s;
                        let a = e
                            .map((e, t) => ({ level: e, index: t }))
                            .filter((e) => {
                                let { level: r } = e;
                                return r.bitrate === t.bitrate;
                            });
                        if (!t.audioCodec) return null != (i = null == (n = a[0]) ? void 0 : n.index) ? i : null;
                        let o = a.find((e) => {
                            let { level: r } = e;
                            return S(r) === t.audioCodec;
                        });
                        return o
                            ? o.index
                            : a.some((e) => {
                                    let { level: t } = e;
                                    return !!S(t);
                                })
                              ? null
                              : null != (s = null == (r = a[0]) ? void 0 : r.index)
                                ? s
                                : null;
                    })(e.levels, t);
                    return null === r ? 'unavailable' : ((e.startLevel = r), (e.autoLevelCapping = -1), (e.loadLevel = r), 'applied');
                };
            class w extends E {
                play(e) {
                    let { source: t } = e;
                    return this.stop().then(
                        () => (
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
                        ((this.hls = new b.Ay({ autoStartLoad: !1, liveDurationInfinity: !0, maxBufferSize: 3e6 })),
                        this.hls.on(b.sV.MANIFEST_PARSED, this.onManifestParsed),
                        this.setErrorListener(this.errorListener),
                        this.setProgramDateTimeListener(this.onFragChanged));
                }
                load(e) {
                    return this.hls
                        ? (this.hls.attachMedia(this.audioElement),
                          this.hls.loadSource(e),
                          new Promise((e) => {
                              this.addOnceHlsEvent(b.sV.MEDIA_ATTACHED, e);
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
                    'unavailable' === _(this.hls, e) &&
                        (_(this.hls, null),
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
                    this.hlsListeners.forEach((e) => {
                        this.hls && this.hls.off(e.event, e.listener, void 0, e.once);
                    }),
                        (this.hlsListeners = []);
                }
                getHlsErrorLogData(e, t) {
                    var r, n;
                    return {
                        type: e.type,
                        details: e.details,
                        fatal: e.fatal,
                        retryCounter: this.retryCounter,
                        hlsErrorRetryLimit: this.hlsErrorRetryLimit,
                        action: t,
                        url: e.url,
                        responseCode: null == (r = e.response) ? void 0 : r.code,
                        responseText: null == (n = e.response) ? void 0 : n.text,
                        sourceIndex: this.currentSourceIndex,
                        uuid: this.currentPlayId,
                    };
                }
                logHlsError(e, t) {
                    var r;
                    null == (r = this.logger) || r.error('[HlsCoreAdapter] HLS playback error', this.getHlsErrorLogData(e, t));
                }
                errorListener(e, t) {
                    if (this.hls)
                        switch (t.type) {
                            case b.wU.NETWORK_ERROR:
                                if ((this.retryCounter++, this.retryCounter > this.hlsErrorRetryLimit)) {
                                    this.logHlsError(t, 'emitError'), this.destroyHls();
                                    let e = new d.t('HLS error', { data: t });
                                    this.emitter.emit('error', e);
                                } else this.logHlsError(t, 'startLoad'), this.hls.startLoad();
                                break;
                            case b.Ay.ErrorTypes.MEDIA_ERROR:
                                this.logHlsError(t, 'recoverMediaError'), this.hls.recoverMediaError();
                                break;
                            default:
                                this.logHlsError(t, 'emitError'), this.destroyHls(), this.emitter.emit('error', new d.t('HLS error', { data: t }));
                        }
                }
                levelToManualQuality(e) {
                    var t, r;
                    return { bitrate: e.bitrate, audioCodec: null != (r = e.audioCodec) ? r : P(e.codecs || (null == (t = e.attrs) ? void 0 : t.CODECS)) };
                }
                setErrorListener(e) {
                    this.removeErrorListener(), this.hls && ((this.hlsJsErrorListener = e), this.hls.on(b.sV.ERROR, e));
                }
                removeErrorListener() {
                    this.hls && this.hlsJsErrorListener && this.hls.off(b.sV.ERROR, this.hlsJsErrorListener), (this.hlsJsErrorListener = null);
                }
                onFragChanged(e, t) {
                    var r;
                    (null == (r = t.frag) ? void 0 : r.programDateTime) && this.onProgramDateTimeUpdate && this.onProgramDateTimeUpdate(t.frag.programDateTime);
                }
                setProgramDateTimeListener(e) {
                    this.removeProgramDateTimeListener(), this.hls && ((this.programDateTimeListener = e), this.hls.on(b.sV.FRAG_CHANGED, this.programDateTimeListener));
                }
                removeProgramDateTimeListener() {
                    this.hls && this.programDateTimeListener && this.hls.off(b.sV.FRAG_CHANGED, this.programDateTimeListener), (this.programDateTimeListener = null);
                }
                constructor(e) {
                    var t, r;
                    super(),
                        (0, n._)(this, 'audioElement', document.createElement('audio')),
                        (0, n._)(this, 'hls', null),
                        (0, n._)(this, 'retryCounter', 0),
                        (0, n._)(this, 'hlsErrorRetryLimit', void 0),
                        (0, n._)(this, 'hlsJsErrorListener', null),
                        (0, n._)(this, 'programDateTimeListener', null),
                        (0, n._)(this, 'onProgramDateTimeUpdate', void 0),
                        (0, n._)(this, 'logger', void 0),
                        (0, n._)(this, 'manualQualityController', void 0),
                        (0, n._)(this, 'currentSourceIndex', void 0),
                        (0, n._)(this, 'currentPlayId', void 0),
                        (0, n._)(this, 'currentManualQualitySourceKey', void 0),
                        (0, n._)(this, 'hlsListeners', []),
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
                        null == (t = this.manualQualityController) || t.manualQuality.onChange(this.applyManualQuality);
                }
            }
            class T extends E {
                constructor() {
                    super(), (0, n._)(this, 'audioElement', document.createElement('audio')), this.setupAudioElement();
                }
            }
            let A = (0, p.fP)(0.15);
            function H(e) {
                let { currentTime: t, duration: r } = e;
                return (
                    e.readyState < e.HAVE_FUTURE_DATA ||
                    !v(e).some((e) => {
                        let { start: n, end: i } = e;
                        return !(t < n) && !(t > i) && (r <= i || t + A < i);
                    })
                );
            }
        },
        88461: (e, t, r) => {
            r.d(t, { b: () => n });
            var n = r(14174);
        },
        96533: (e, t, r) => {
            r.d(t, { I: () => s });
            let n = () => {},
                i = (e) => !0;
            function s(e) {
                return new Promise((t, r) => {
                    !(function (e) {
                        let { dropCacheOnRetry: t = !1, onBeforeLoad: r = n, retries: s = 0 } = e;
                        if (e.checkLoad && e.checkLoad()) {
                            e.onLoad && e.onLoad();
                            return;
                        }
                        let a = r,
                            o = 0;
                        t &&
                            s > 0 &&
                            (a = (e) => {
                                if ((r(e), o > 0)) {
                                    var t;
                                    let r,
                                        n = -1 === e.src.indexOf('?') ? '?' : '&',
                                        i =
                                            ((t = o),
                                            Number.isFinite((r = Math.floor(1e9 * Math.random()) % 1e9)) || (r = 0),
                                            (r += Date.now() % 1e9),
                                            String(t) + r.toString(36));
                                    e.src += n + i;
                                }
                                o++;
                            }),
                            (function e(t) {
                                let {
                                        src: r,
                                        win: s = window,
                                        charset: a = 'utf-8',
                                        async: o = !0,
                                        retries: l = 0,
                                        onRetry: u = n,
                                        retryDelay: d = 0,
                                        checkLoad: h = i,
                                        onBeforeLoad: m = n,
                                        onLoad: c = n,
                                        onError: p = n,
                                    } = t,
                                    v = s.document.createElement('script'),
                                    y = (n) => {
                                        l > 0 ? (u(n), e({ ...t, src: r, retries: l - 1 })) : p(n), v.parentNode?.removeChild(v);
                                    };
                                (v.type = 'text/javascript'),
                                    (v.async = o),
                                    (v.onload = () => (h(v) ? c() : y(Error(`checkLoad for ${r} failed`)))),
                                    (v.onerror = (e) => {
                                        try {
                                            s.setTimeout(() => {
                                                y(e);
                                            }, d);
                                        } catch {}
                                    }),
                                    (v.src = r),
                                    (v.charset = a),
                                    m(v),
                                    (function (e) {
                                        let t = e.document,
                                            r = t.getElementsByTagName('head')[0];
                                        return r || ((r = t.createElement('head')), t.documentElement.appendChild(r)), r;
                                    })(s).appendChild(v);
                            })({ ...e, onBeforeLoad: a });
                    })({ ...e, onLoad: t, onError: r });
                });
            }
        },
    },
]);
