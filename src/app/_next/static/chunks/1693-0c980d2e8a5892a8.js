(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1693],
    {
        183: (e, t) => {
            'use strict';
            t.cn = (function (e) {
                function t(t, i, a, s) {
                    var o = i ? r + t + e.e + i : r + t,
                        l = o;
                    if (a) {
                        var c = ' ' + l + e.m;
                        for (var u in a)
                            if (a.hasOwnProperty(u)) {
                                var d = a[u];
                                !0 === d ? (l += c + u) : d && (l += c + u + n + d);
                            }
                    }
                    if (void 0 !== s)
                        for (var h = 0, f = s.length; h < f; h++) {
                            var m = s[h];
                            if (m && 'string' == typeof m.valueOf())
                                for (var p = m.valueOf().split(' '), g = 0; g < p.length; g++) {
                                    var v = p[g];
                                    v !== o && (l += ' ' + v);
                                }
                        }
                    return l;
                }
                var r = e.n || '',
                    n = e.v || e.m;
                return function (e, r) {
                    return function (n, i, a) {
                        return 'string' == typeof n ? (Array.isArray(i) ? t(e, n, void 0, i) : t(e, n, i, a)) : t(e, r, n, i);
                    };
                };
            })({ e: '-', m: '_' });
        },
        1987: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    bindSnapshot: function () {
                        return s;
                    },
                    createAsyncLocalStorage: function () {
                        return a;
                    },
                    createSnapshot: function () {
                        return o;
                    },
                });
            let r = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class n {
                disable() {
                    throw r;
                }
                getStore() {}
                run() {
                    throw r;
                }
                exit() {
                    throw r;
                }
                enterWith() {
                    throw r;
                }
                static bind(e) {
                    return e;
                }
            }
            let i = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function a() {
                return i ? new i() : new n();
            }
            function s(e) {
                return i ? i.bind(e) : n.bind(e);
            }
            function o() {
                return i
                    ? i.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        2853: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => a, U: () => s });
            var n = r(55178),
                i = r(99448);
            r(13489);
            var a = (0, i.cn)('UserWidget', 'Content'),
                s = n.forwardRef(function (e, t) {
                    var r = e.loading,
                        i = e.preload,
                        s = e.height,
                        o = e.colorScheme,
                        l = e.className,
                        c = e.src,
                        u = e.width;
                    return n.createElement(
                        'div',
                        { className: a({ loading: r, colorScheme: o }, [l]) },
                        i && n.createElement('iframe', { className: 'UserWidget-Iframe', ref: t, width: u, src: c, height: r ? 300 : s }),
                        r && n.createElement('div', { className: 'UserWidget-Spin' }),
                    );
                });
        },
        3238: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => o });
            var n = r(30782),
                i = r(55178),
                a = r(2853),
                s = r(85438);
            function o(e, t) {
                var r,
                    o = function (r) {
                        var o = r.onOpen,
                            l = r.onClose,
                            c = (0, n.__read)((0, i.useState)(!1), 2),
                            u = c[0],
                            d = c[1],
                            h = (0, i.useCallback)(
                                function () {
                                    d(!0), null == o || o();
                                },
                                [d, o],
                            ),
                            f = (0, i.useCallback)(
                                function () {
                                    d(!1), null == l || l();
                                },
                                [d, l],
                            ),
                            m = (0, s.w)((0, n.__assign)((0, n.__assign)({}, r), { visible: u, onOpen: h, onClose: f })),
                            p = m.avatarProps,
                            g = m.contentProps,
                            v = m.dialogProps;
                        return i.createElement(
                            e,
                            (0, n.__assign)({}, r, p),
                            r.children,
                            i.createElement(t, (0, n.__assign)({}, v, { onClose: f }), i.createElement(a.U, (0, n.__assign)({}, g))),
                        );
                    };
                return (o.displayName = "'withUserID(" + (null != (r = e.displayName) ? r : e) + ")'"), o;
            }
        },
        5353: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'setAttributesFromProps', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let r = { acceptCharset: 'accept-charset', className: 'class', htmlFor: 'for', httpEquiv: 'http-equiv', noModule: 'noModule' },
                n = ['onLoad', 'onReady', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'stylesheets'];
            function i(e) {
                return ['async', 'defer', 'noModule'].includes(e);
            }
            function a(e, t) {
                for (let [a, s] of Object.entries(t)) {
                    if (!t.hasOwnProperty(a) || n.includes(a) || void 0 === s) continue;
                    let o = r[a] || a.toLowerCase();
                    'SCRIPT' === e.tagName && i(o) ? (e[o] = !!s) : e.setAttribute(o, String(s)),
                        (!1 === s || ('SCRIPT' === e.tagName && i(o) && (!s || 'false' === s))) && (e.setAttribute(o, ''), e.removeAttribute(o));
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        5487: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
        },
        5639: (e) => {
            'use strict';
            var t = Array.isArray,
                r = Object.keys,
                n = Object.prototype.hasOwnProperty;
            e.exports = function e(i, a) {
                if (i === a) return !0;
                if (i && a && 'object' == typeof i && 'object' == typeof a) {
                    var s,
                        o,
                        l,
                        c = t(i),
                        u = t(a);
                    if (c && u) {
                        if ((o = i.length) != a.length) return !1;
                        for (s = o; 0 != s--; ) if (!e(i[s], a[s])) return !1;
                        return !0;
                    }
                    if (c != u) return !1;
                    var d = i instanceof Date,
                        h = a instanceof Date;
                    if (d != h) return !1;
                    if (d && h) return i.getTime() == a.getTime();
                    var f = i instanceof RegExp,
                        m = a instanceof RegExp;
                    if (f != m) return !1;
                    if (f && m) return i.toString() == a.toString();
                    var p = r(i);
                    if ((o = p.length) !== r(a).length) return !1;
                    for (s = o; 0 != s--; ) if (!n.call(a, p[s])) return !1;
                    for (s = o; 0 != s--; ) if (!e(i[(l = p[s])], a[l])) return !1;
                    return !0;
                }
                return i != i && a != a;
            };
        },
        8342: (e, t, r) => {
            'use strict';
            r.d(t, { yv: () => Q, YT: () => et, FM: () => l });
            var n,
                i,
                a,
                s,
                o,
                l = {};
            r.r(l),
                r.d(l, { g: () => n, r: () => i }),
                (function (e) {
                    (e.Start = 'Start'),
                        (e.Watched4Sec = '4SecWatched'),
                        (e.Watched10Sec = '10SecWatched'),
                        (e.Watched20Sec = '20SecWatched'),
                        (e.Heartbeat30Sec = '30SecHeartbeat'),
                        (e.End = 'End');
                })(n || (n = {})),
                (function (e) {
                    (e.PLAY = 'play'), (e.PAUSE = 'pause'), (e.BUFFERING = 'buffering'), (e.END = 'end');
                })(i || (i = {}));
            var c = r(27158);
            function u(e) {
                return Math.floor(e / 30);
            }
            class d {
                params;
                previousWatchedTime = (0, c.fP)(0);
                constructor(e) {
                    this.params = e;
                }
                onWatchedTimeChange(e) {
                    let { previousWatchedTime: t } = this;
                    t !== e &&
                        (0 === t && e > 0
                            ? this.params.onEvent(n.Start)
                            : t < 4 && e >= 4
                              ? this.params.onEvent(n.Watched4Sec)
                              : t < 10 && e >= 10
                                ? this.params.onEvent(n.Watched10Sec)
                                : t < 20 && e >= 20
                                  ? this.params.onEvent(n.Watched20Sec)
                                  : u(t) < u(e) && this.params.onEvent(n.Heartbeat30Sec),
                        (this.previousWatchedTime = e));
                }
                onPlayingStateChange(e) {
                    e === i.END && this.params.onEvent(n.End);
                }
            }
            class h {
                lastSourceIndexWithFatal = null;
                extractSourceIndex(e) {
                    let t = e.split('?')[1];
                    if (t)
                        for (let e of t.split('&')) {
                            let [t, r] = e.split('=');
                            if ('source_index' === t) return r ? Number(r) : null;
                        }
                    return null;
                }
                checkIsFatal(e, t) {
                    if (!e || !t) return e;
                    let r = this.extractSourceIndex(t);
                    return null === r ? e : (null === this.lastSourceIndexWithFatal || r > this.lastSourceIndexWithFatal) && ((this.lastSourceIndexWithFatal = r), !0);
                }
            }
            var f = r(5639);
            let m = (0, c.Wj)(1e4),
                p = (0, c.Wj)(1e3),
                g = (0, c.Wj)(5e3),
                v = (0, c.Wj)(3e4);
            var y = r(42636);
            class S {
                onTick;
                onFlush;
                wasFirstFlush = !1;
                isDestroyed = !1;
                lastFlushTime;
                startTime;
                timer;
                constructor(e, t) {
                    (this.onTick = e),
                        (this.onFlush = t),
                        (this.startTime = this.lastFlushTime = (0, y.lh)()),
                        (this.timer = window.setTimeout(() => {
                            this.onTick(), this.nextTick();
                        }, 0));
                }
                next() {
                    this.isDestroyed || (window.clearTimeout(this.timer), this.handleFlush(), this.nextTick());
                }
                destroy() {
                    window.clearTimeout(this.timer), (this.isDestroyed = !0);
                }
                nextTick() {
                    this.isDestroyed || (window.clearTimeout(this.timer), (this.timer = window.setTimeout(this.handleTimeout, this.getTimeout())));
                }
                handleTimeout = () => {
                    this.onTick(), this.handleFlush(), this.nextTick();
                };
                handleFlush() {
                    this.needFlush() && (this.onFlush(), (this.lastFlushTime = this.wasFirstFlush ? (0, y.lh)() : this.startTime), (this.wasFirstFlush = !0));
                }
                needFlush() {
                    let e = (0, y.lh)();
                    return this.wasFirstFlush ? e - this.lastFlushTime >= v : e - this.startTime >= m;
                }
                getTimeout() {
                    return (0, y.lh)() - this.startTime < m ? p : g;
                }
            }
            let w = (0, c.PY)((0, c.fP)(Math.abs(0))),
                b = {
                    remainingBufferedTime: (0, c.PY)((0, c.fP)(Math.abs(0))),
                    state: i.BUFFERING,
                    currentTime: w,
                    watchedTime: (0, c.PY)((0, c.fP)(Math.abs(0))),
                    duration: (0, c.PY)((0, c.fP)(0)),
                },
                E = NaN;
            function x() {}
            !(function (e) {
                (e[(e.PLAYING = 1)] = 'PLAYING'), (e[(e.NOT_PLAYING = 2)] = 'NOT_PLAYING');
            })(a || (a = {})),
                (function (e) {
                    (e.preroll = 'preroll'), (e.midroll = 'midroll'), (e.postPauseroll = 'postPauseroll'), (e.postroll = 'postroll'), (e.inroll = 'inroll');
                })(s || (s = {}));
            class T {
                props;
                prevState = void 0;
                states = [];
                timer;
                destroyHandlers = [];
                constructor(e) {
                    (this.props = e),
                        (this.timer = new S(
                            () => this.writeState(),
                            () => this.flushStates(),
                        ));
                }
                addDestroyHandler(e) {
                    this.destroyHandlers.push(e);
                }
                destroy() {
                    this.timer.destroy(),
                        this.flushStates(),
                        this.destroyHandlers.forEach((e) => {
                            e();
                        }),
                        (this.destroyHandlers = []);
                }
                getStates() {
                    return [...this.states];
                }
                flushStates() {
                    this.writeStateManually.now();
                    let e = this.getStates();
                    e.length > 0 && this.props.onFlushStates(e), (this.states.length = 0);
                }
                writeStateManually = (function (e, t, r, n) {
                    3 == arguments.length && 'boolean' != typeof r && ((n = r), (r = !1));
                    let i = null,
                        a = x;
                    function s() {
                        null !== i && clearTimeout(i), (i = null);
                    }
                    let o = function () {
                        let o = arguments;
                        (n = n || this),
                            (a = () => {
                                s(), (a = x), e.apply(n, o);
                            }),
                            r && null === i && e.apply(n, o),
                            s(),
                            (i = window.setTimeout(function () {
                                r || e.apply(n, o), (i = null);
                            }, t));
                    };
                    return (
                        (o.cancel = s),
                        (o.now = () => {
                            a();
                        }),
                        o
                    );
                })(() => {
                    this.writeState(), this.timer.next();
                }, 0);
                writeState() {
                    let e = this.getPlayerAliveState();
                    f(this.prevState, e) || ((this.prevState = e), this.states.push({ ...e, timestamp: (0, c.Wj)(this.props.getTimestamp()) }));
                }
                getPlayerAliveState() {
                    let e = {
                            ...b,
                            saveData: (function (e = window) {
                                let { navigator: t } = e,
                                    { connection: r = {} } = t;
                                return !!r.saveData;
                            })(),
                            rtt: (function (e = window) {
                                var t;
                                if (!e.navigator) return E;
                                let { connection: r = {} } = e.navigator;
                                return 'number' == typeof (t = r.rtt) && isFinite(t) ? r.rtt : E;
                            })(),
                            ...this.props.stalledController.getStalledHistory(),
                        },
                        t = this.props.getState();
                    if (!t) return { ...e };
                    let {
                            currentTime: r,
                            duration: n,
                            muted: i,
                            playingState: s,
                            remainingBufferedTime: o,
                            adState: l,
                            liveLatency: u,
                            videoTracks: d,
                            audioTrack: h,
                            videoSize: f,
                            isVisible: m,
                            capHeight: p,
                            capWidth: g,
                            containerHeight: v,
                            containerWidth: y,
                            bandwidthEstimate: S,
                            bandwidthSource: w,
                            droppedFrames: x,
                            shownFrames: T,
                            isFullscreen: I,
                            isPictureInPicture: k,
                            volume: C,
                            playbackRate: _,
                        } = t,
                        P = d.find((e) => e.selected),
                        M = [...d].sort((e, t) => t.bitrate - e.bitrate),
                        O = l?.state === a.PLAYING,
                        L = !O,
                        D = this.props.getWatchedTime();
                    return {
                        ...e,
                        watchedTime: Math.max(0, D),
                        currentTime: isNaN(r) ? (0, c.fP)(0) : Math.max(0, r),
                        duration: isNaN(n) ? (0, c.fP)(0) : Math.max(0, n),
                        isMuted: i,
                        state: s,
                        remainingBufferedTime: o?.total || (0, c.fP)(0),
                        remainingAudioBufferedTime: o?.audio === void 0 ? void 0 : Math.max(0, o.audio),
                        remainingVideoBufferedTime: o?.video === void 0 ? void 0 : Math.max(0, o.video),
                        ad: O ? l?.type : void 0,
                        liveLatency: void 0 === u ? void 0 : Math.max(0, u),
                        stalledReason: this.props.stalledController.getCurrentStalledReason(),
                        auto: P?.auto === void 0 ? void 0 : P.auto,
                        isVisible: m,
                        bitrate: P?.bitrate ? Math.max(0, Math.floor((0, c.lw)(P.bitrate, 1e3))) : void 0,
                        width: f?.videoWidth === void 0 || isNaN(f?.videoWidth) ? void 0 : Math.max(0, Math.floor((0, c.Lp)(f?.videoWidth))),
                        height: f?.videoHeight === void 0 || isNaN(f?.videoHeight) ? void 0 : Math.max(0, Math.floor((0, c.Lp)(f?.videoHeight))),
                        maxWidth: L && M[0]?.width ? Math.max(0, Math.floor((0, c.Lp)(M[0].width))) : void 0,
                        maxHeight: L && M[0]?.height ? Math.max(0, Math.floor((0, c.Lp)(M[0].height))) : void 0,
                        audioTrack: h?.value || void 0,
                        audioLang: h?.lang || void 0,
                        audioBitrate: h?.bitrate ? Math.max(0, Math.floor((0, c.lw)(h.bitrate, 1e3))) : void 0,
                        capHeight: L && p ? Math.max(0, Math.floor((0, c.Lp)(p))) : void 0,
                        capWidth: L && g ? Math.max(0, Math.floor((0, c.Lp)(g))) : void 0,
                        containerHeight: void 0 !== v ? Math.max(0, Math.floor(v)) : void 0,
                        containerWidth: void 0 !== y ? Math.max(0, Math.floor(y)) : void 0,
                        bandwidthEstimate: void 0 === S || isNaN(S) ? void 0 : Math.max(0, (0, c.bY)(Math.round(S))),
                        bandwidthSource: w || void 0,
                        droppedFrames: void 0 === x ? void 0 : Math.max(0, Math.floor(x)),
                        shownFrames: void 0 === T ? void 0 : Math.max(0, Math.floor(T)),
                        viewport: I ? 'fullscreen' : k ? 'pip' : 'default',
                        volume: C,
                        playbackRate: _,
                    };
                }
            }
            !(function (e) {
                (e.Init = 'Init'),
                    (e.SetSource = 'SetSource'),
                    (e.Seek = 'Seek'),
                    (e.VideoTrackChange = 'VideoTrackChange'),
                    (e.AudioTrackChange = 'AudioTrackChange'),
                    (e.Recover = 'Recover'),
                    (e.MediaError = 'MediaError'),
                    (e.Offline = 'Offline'),
                    (e.Other = 'Other'),
                    (e.Render = 'Render'),
                    (e.RepresentationsChange = 'RepresentationsChange'),
                    (e.LiveEdge = 'LiveEdge'),
                    (e.AdStart = 'AdStart'),
                    (e.AdOther = 'AdOther'),
                    (e.AdBetween = 'AdBetween'),
                    (e.AdEnd = 'AdEnd');
            })(o || (o = {}));
            let I = [0, 1, 4, 5],
                k = (0, c.fP)(0),
                C = I.map((e) => (k = (0, c.WQ)((0, c.fP)(e), k))),
                _ = (0, c.lw)(C[C.length - 1], 1e3),
                P = [o.Init];
            function M(e) {
                setTimeout(() => {
                    throw e;
                }, 0);
            }
            function O(e, t) {
                try {
                    return e();
                } catch (e) {
                    'function' == typeof t && t(e);
                }
            }
            class L {
                setTimeout(e, t) {
                    if (t <= 0) return void O(e, M);
                    let r = window.setTimeout(e, t);
                    return () => window.clearTimeout(r);
                }
                now() {
                    return (0, y.x3)();
                }
            }
            class D {
                distributionFunction;
                clock;
                stopped = !0;
                cancel;
                lastNow = 0;
                lastKnockTime;
                lastTimeout = 0;
                restTime = 0;
                destroyed = !1;
                isFirstKnock = !0;
                count = 0;
                constructor(e, t = new L()) {
                    (this.distributionFunction = e), (this.clock = t);
                }
                setEnabled(e) {
                    return e ? this.start() : this.stop(), this;
                }
                stop() {
                    return (
                        this.stopped ||
                            ((this.stopped = !0), this.cancelTimeout(), (this.restTime = Math.max(this.restTime - (this.clock.now() - this.lastKnockTime), 0))),
                        this
                    );
                }
                start() {
                    return (
                        this.stopped &&
                            !this.destroyed &&
                            ((this.stopped = !1),
                            (this.lastKnockTime = this.clock.now()),
                            this.setTimeout(() => this.knock(this.lastNow + this.lastTimeout), this.restTime)),
                        this
                    );
                }
                destroy() {
                    this.cancelTimeout(), (this.stopped = !0), (this.destroyed = !0);
                }
                knock(e) {
                    (this.lastNow = e), (this.lastKnockTime = this.clock.now()), this.isFirstKnock ? (this.isFirstKnock = !1) : this.count++;
                    let t = (this.restTime = this.lastTimeout = this.distributionFunction({ time: e, count: this.count }));
                    this.stopped || this.destroyed || this.setTimeout(() => this.knock(e + t), t);
                }
                cancelTimeout() {
                    void 0 !== this.cancel && this.cancel(), (this.cancel = void 0);
                }
                setTimeout(e, t) {
                    this.cancelTimeout();
                    let r = this.clock.setTimeout(e, t);
                    void 0 !== r && (this.cancelTimeout(), (this.cancel = r));
                }
            }
            function N(e = y.lh) {
                let t = e();
                return () => (0, c.Wj)(Math.max(0, e() - t));
            }
            function R(e, t) {
                return { reason: e, details: t, getElapsedTime: N() };
            }
            class j {
                isBuffering = !1;
                timer = void 0;
                stalledId = 1;
                stalledDurationRemainder = (0, c.fP)(0);
                getState;
                logEvent;
                expectedStalled = R(o.Init, {});
                currentStalled = void 0;
                stalledTime = (0, c.fP)(0);
                stalledCount = 0;
                constructor({ getState: e, logEvent: t }) {
                    (this.getState = e), (this.logEvent = t);
                }
                setBuffering(e, t = (0, c.Wj)(0)) {
                    if (e !== this.isBuffering)
                        if (((this.isBuffering = e), this.isBuffering)) {
                            let e = [],
                                r = I.filter((r, n) => {
                                    let i = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled(),
                                        a = C[n];
                                    if ((0, c.Qr)(t, 1e3) > a) {
                                        let e = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        return (
                                            !this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: e, expectedStalled: i, duration: a, getElapsedTime: N() }),
                                            this.send(!1, i, a, e),
                                            !1
                                        );
                                    }
                                    return e.push(a), !0;
                                });
                            this.currentStalled && (this.stalledDurationRemainder = (0, c.gL)((0, c.Qr)(t, 1e3), this.currentStalled.duration)),
                                r.length && (r[0] = r[0] - this.stalledDurationRemainder),
                                (this.timer = new D(({ count: t }) => {
                                    let n = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled();
                                    if (t > 0) {
                                        let r = (0, c.fP)(e[t - 1]),
                                            i = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        !this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: i, expectedStalled: n, duration: r, getElapsedTime: N() }),
                                            this.send(!1, n, r, i);
                                    }
                                    return t >= r.length ? (this.destroyTimer(), 1 / 0) : 1e3 * r[t];
                                })),
                                this.timer.start();
                        } else {
                            if (this.currentStalled) {
                                var r;
                                let { expectedStalled: e, id: t } = this.currentStalled,
                                    n = (0, c.WQ)(
                                        void 0 === (r = this.currentStalled) ? (0, c.fP)(0) : (0, c.WQ)(r.duration, (0, c.Qr)(r.getElapsedTime(), 1e3)),
                                        this.stalledDurationRemainder,
                                    );
                                this.send(!0, e, (0, c.WQ)(n), t),
                                    (this.currentStalled = void 0),
                                    (this.stalledDurationRemainder = (0, c.fP)(0)),
                                    (this.stalledTime = (0, c.WQ)(n, this.stalledTime));
                                let i = this.getState()?.adState?.state === a.PLAYING ? o.AdOther : o.Other;
                                this.setExpectedStalled(R(i, void 0));
                            }
                            this.destroyTimer();
                        }
                }
                getStalledHistory() {
                    let { stalledCount: e, stalledTime: t } = this;
                    return { stalledCount: (0, c.Pn)(e), stalledTime: (0, c.PY)(t) };
                }
                clearStalledHistory() {
                    (this.stalledCount = 0), (this.stalledTime = (0, c.fP)(0));
                }
                destroy() {
                    this.destroyTimer();
                }
                getCurrentStalledReason() {
                    return this.currentStalled?.expectedStalled.reason;
                }
                setExpectedStalled(e) {
                    this.expectedStalled = e;
                }
                isExpiredStalled(e) {
                    let { getElapsedTime: t, reason: r } = e;
                    return !(P.indexOf(r) > -1) && (!this.currentStalled || this.currentStalled.expectedStalled !== e) && t() >= _;
                }
                getExpectedStalled() {
                    let e = this.expectedStalled;
                    return this.isExpiredStalled(e) ? R(o.Other, void 0) : e;
                }
                destroyTimer() {
                    this.timer && (this.timer.destroy(), (this.timer = void 0));
                }
                send(e, t, r, n) {
                    let { reason: i, details: a } = t,
                        s = { ...a, stalledDuration: r, stalledId: n },
                        o = this.getState();
                    if (o) {
                        let { muted: e, remainingBufferedTime: t, videoTracks: r } = o,
                            n = r.find((e) => e.selected);
                        s = { ...s, remainingBufferedTime: t, videoTrack: n, isMuted: e };
                    }
                    this.logEvent({ name: e ? 'StalledEnd' : 'Stalled', data: s, labels: { reason: i } });
                }
            }
            let W = (e) => ('hidden' in e ? 'hidden' : 'webkitHidden' in e ? 'webkitHidden' : void 0);
            function B(e, t = !0) {
                let r = W(e);
                return r ? !e[r] : t;
            }
            let A = ['Start', '4SecWatched', '10SecWatched', '20SecWatched', '30SecHeartbeat', 'End'];
            function F(e, t, r) {
                return e && 'number' == typeof e ? e + t - r : e;
            }
            let U = {}.toString,
                H = /\[object (\w+)\]/;
            function Y(e) {
                return (
                    'function' == typeof e ||
                    'Function' ===
                        ((e) => {
                            let t = U.call(e);
                            if (!t) return null;
                            let r = t.match(H);
                            if (!r) return null;
                            let n = r[1];
                            return n || null;
                        })(e)
                );
            }
            let $ = RegExp(
                    `^https?:\\/\\/([^\\/]+\\.)?(${'boolean' == typeof CLOUD_BUILD && CLOUD_BUILD ? ['video\\.cloud\\.yandex\\.net'] : '(an|strm)\\.yandex\\.(ru|net)|yastatic\\.net|strm-ott\\.akamaized\\.net|cdn\\.ngenix\\.net|strm\\.yandex\\.cdnga\\.net|strm-yandex\\.gcdn\\.co|(widevine|playready|fairplay)-proxy\\.ott\\.yandex\\.ru|drm\\.yandex-team\\.ru'})\\/(?!log|perf|jstracer)`,
                ),
                V = (0, c.Wj)(3e4);
            class Q {
                config;
                intervalId = void 0;
                contexts = [];
                constructor(e) {
                    this.config = e;
                }
                attach(e) {
                    e.performance &&
                        (Y(e.performance.getEntriesByType) || Y(e.performance.webkitGetEntriesByType)) &&
                        (Y(e.performance.clearResourceTimings) || Y(e.performance.webkitClearResourceTimings)) &&
                        -1 === this.contexts.indexOf(e) &&
                        (0 === this.contexts.length && (this.intervalId = setInterval(() => this.flush(), V)), this.contexts.push(e));
                }
                detach(e) {
                    let t = this.contexts.indexOf(e);
                    -1 !== t && this.contexts.splice(t, 1), 0 === this.contexts.length && clearInterval(this.intervalId);
                }
                destroy() {
                    this.flush(), (this.contexts.length = 0), clearInterval(this.intervalId);
                }
                flush() {
                    let e = [],
                        t = this.contexts.map(z),
                        r = Math.min(...t);
                    this.contexts.forEach((n, i) => {
                        (function (e) {
                            try {
                                let t = e.performance.getEntriesByType ?? e.performance.webkitGetEntriesByType,
                                    r = e.performance.clearResourceTimings ?? e.performance.webkitClearResourceTimings,
                                    n = t.call(e.performance, 'resource');
                                return r.call(e.performance), n;
                            } catch {
                                return [];
                            }
                        })(n).forEach((n) => {
                            $.test(n.name) &&
                                e.push(
                                    (function (e, t, r) {
                                        let {
                                            duration: n,
                                            entryType: i,
                                            name: a,
                                            startTime: s,
                                            connectEnd: o,
                                            connectStart: l,
                                            decodedBodySize: c,
                                            domainLookupEnd: u,
                                            domainLookupStart: d,
                                            encodedBodySize: h,
                                            fetchStart: f,
                                            initiatorType: m,
                                            nextHopProtocol: p,
                                            redirectEnd: g,
                                            redirectStart: v,
                                            requestStart: y,
                                            responseEnd: S,
                                            responseStart: w,
                                            secureConnectionStart: b,
                                            transferSize: E,
                                            workerStart: x,
                                            serverTiming: T,
                                            responseStatus: I,
                                            deliveryType: k,
                                            renderBlockingStatus: C,
                                            firstInterimResponseStart: _,
                                        } = e;
                                        return {
                                            duration: n,
                                            entryType: i,
                                            name: a,
                                            encodedBodySize: h,
                                            decodedBodySize: c,
                                            initiatorType: m,
                                            transferSize: E,
                                            nextHopProtocol: p,
                                            serverTiming: T,
                                            responseStatus: I,
                                            deliveryType: k,
                                            renderBlockingStatus: C,
                                            startTime: F(s, t, r),
                                            connectEnd: F(o, t, r),
                                            connectStart: F(l, t, r),
                                            domainLookupEnd: F(u, t, r),
                                            domainLookupStart: F(d, t, r),
                                            fetchStart: F(f, t, r),
                                            redirectEnd: F(g, t, r),
                                            redirectStart: F(v, t, r),
                                            requestStart: F(y, t, r),
                                            responseEnd: F(S, t, r),
                                            responseStart: F(w, t, r),
                                            secureConnectionStart: F(b, t, r),
                                            workerStart: F(x, t, r),
                                            firstInterimResponseStart: F(_, t, r),
                                        };
                                    })(n, t[i], r),
                                );
                        });
                    }),
                        0 !== e.length && this.config.sendLog(e, { perfnow: String((0, y.x3)()), navstart: String(r) });
                }
            }
            function z(e) {
                return e.performance?.timeOrigin ?? e.performance?.timing?.navigationStart;
            }
            class q {
                lastUpdate = void 0;
                watchedTime = (0, c.fP)(0);
                calc(e, t, r) {
                    if (void 0 !== this.lastUpdate) {
                        var n, i;
                        let r =
                            ((n = (0, c.Qr)((0, c.gL)(e, this.lastUpdate.videoTime), t)),
                            (i = (0, c.Qr)((0, c.Wj)(this.lastUpdate.getElapsedTime()), 1e3)),
                            (0, c.fP)(Math.max(0, n >= 0 && n <= i + 0.5 ? n : i)));
                        this.watchedTime = (0, c.WQ)(this.watchedTime, r);
                    }
                    this.lastUpdate = r ? { getElapsedTime: N(), videoTime: e } : void 0;
                }
                get() {
                    return this.watchedTime;
                }
                restoreLastUpdate() {
                    this.lastUpdate = void 0;
                }
            }
            class G {
                getState;
                onChange;
                intervalId = void 0;
                watchedTimeCounter = new q();
                constructor(e, t) {
                    (this.getState = e), (this.onChange = t), (this.intervalId = setInterval(this.onTick, 100));
                }
                onTick = () => {
                    let e = this.getState();
                    if (!e) return;
                    let { currentTime: t, playbackRate: r = 1, playingState: n, adState: s } = e,
                        o = s?.state === a.PLAYING;
                    this.watchedTimeCounter.calc(t, r, n === i.PLAY && !o), this.onChange?.(this.watchedTimeCounter.get());
                };
                reset() {
                    (this.watchedTimeCounter = new q()), this.onChange?.(this.watchedTimeCounter.get());
                }
                getWatchedTime() {
                    return this.watchedTimeCounter.get();
                }
                destroy() {
                    clearInterval(this.intervalId), (this.intervalId = void 0);
                }
            }
            var K = r(37956);
            function X() {
                return (0, c.Wj)((0, y.x3)());
            }
            class J {
                lastDateNow;
                lastPerformanceNow;
                total = (0, c.Wj)(0);
                interval;
                getTime;
                constructor(e = y.lh) {
                    (this.getTime = e), (this.lastDateNow = X()), (this.lastPerformanceNow = e()), (this.interval = setInterval(this.now, 1e3));
                }
                now = () => {
                    let e = X(),
                        t = this.getTime(),
                        r = (0, c.gL)(t, this.lastPerformanceNow),
                        n = (0, c.gL)(e, this.lastDateNow),
                        i = (r) => ((this.lastDateNow = e), (this.lastPerformanceNow = t), (this.total = (0, c.WQ)(this.total, r)), this.total);
                    return i(n <= 0 ? r : n);
                };
                stop() {
                    clearInterval(this.interval);
                }
            }
            r(95939);
            let Z = { enabled: !0, events: [n.Watched10Sec, n.Watched20Sec, n.Heartbeat30Sec] },
                ee = { logVersion: '1.2.0' };
            class et {
                static getVpuid() {
                    return K.$;
                }
                watchedTimeTracker;
                fatalTracker;
                playbackTracker;
                playerAliveController;
                stalledController;
                remoteProgressSavingInfo = Z;
                staticParams = {};
                playerInfo;
                useOfDeprecatedMethodIsLogged = !1;
                timer;
                timerStartTime = Date.now();
                sendLog;
                getState;
                destroyed = !1;
                wasInitBufferingLogged = !1;
                externalStalledDuration = (0, c.Wj)(0);
                initialStalledDuration = (0, c.Wj)(0);
                wasInitBufferingHandled = !1;
                initialStalledTimestamp;
                initialStalledTimestampStop;
                eventIndex = 0;
                reportNumber = 0;
                sourceIndexes = { current: 0, last: 0 };
                constructor({ sendLog: e, playerInfo: t, getState: r }) {
                    (this.playerInfo = t),
                        (this.sendLog = e),
                        (this.getState = r),
                        (this.playbackTracker = new d({ onEvent: (e) => this.logEvent({ name: e }) })),
                        (this.stalledController = new j({ getState: this.getState, logEvent: (e) => this.logEvent(e) })),
                        (this.watchedTimeTracker = new G(r, (e) => this.playbackTracker.onWatchedTimeChange(e))),
                        (this.playerAliveController = new T({
                            getState: r,
                            onFlushStates: (e) => this.logEvent({ name: 'PlayerAlive', data: { states: e } }),
                            getTimestamp: () => this.getLogTimestamp(),
                            stalledController: this.stalledController,
                            getWatchedTime: () => this.watchedTimeTracker.getWatchedTime(),
                        })),
                        (this.fatalTracker = new h()),
                        this.initOnVisibilityChangeHandling(),
                        (this.timer = new J());
                }
                getLogTimestamp() {
                    return Math.round(this.timerStartTime + this.timer.now());
                }
                initOnVisibilityChangeHandling() {
                    let e = (function (e, t) {
                        let r = (function (e) {
                            let t = W(e);
                            if (t) return t.replace(/hidden/i, 'visibilitychange');
                        })(e);
                        if (!r) return x;
                        let n = () => {
                            t(B(e));
                        };
                        return e.addEventListener(r, n), () => e.removeEventListener(r, n);
                    })(document, (e) => {
                        e || this.playerAliveController.flushStates();
                    });
                    this.playerAliveController.addDestroyHandler(e);
                }
                setStaticParams(e, t) {
                    t ? (this.staticParams = { ...e }) : (this.staticParams = { ...this.staticParams, ...e });
                }
                enableRemoteProgressSaving(e) {
                    this.remoteProgressSavingInfo.enabled = e;
                }
                updateWatchedTime() {
                    this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({ name: 'DeprecatedTelemetryMethodUsed', data: { method: 'updateWatchedTime' } }), (this.useOfDeprecatedMethodIsLogged = !0)),
                        M(Error('Deprecated method used. Method is Telemetry#updateWatchedTime(). Just remove. Telemetry calculates watchedTime itself now.'));
                }
                setPlayingState(e) {
                    this.playbackTracker.onPlayingStateChange(e), this.handleInitialBuffering(), e === i.BUFFERING ? this.setBuffering(!0) : this.setBuffering(!1);
                }
                logEvent(e, t) {
                    if (this.destroyed) return;
                    let r = this.getFullEventLog(e, t),
                        n = this.getUrlParams(r.eventType, r.eventName, e.labels);
                    this.sendData(r, n);
                }
                logError({ error: e, labels: t, extraRootFields: r }, n) {
                    if (this.destroyed) return;
                    e.isFatal = this.fatalTracker.checkIsFatal(e.isFatal, this.staticParams.streamUrl);
                    let i = this.getFullErrorLog({ error: e, labels: t, extraRootFields: r, sourceIndex: n }),
                        a = this.getUrlParams(i.eventType, i.eventName, t);
                    this.sendData(i, a);
                }
                getUrlParams(e, t, r) {
                    return { ...r, [this.playerInfo.service]: this.playerInfo.version, [e]: String(t) };
                }
                getFullEventLog(e, t) {
                    let r = this.getState(),
                        n = { ...this.staticParams.labels, ...e.labels, videoType: r?.videoType },
                        i = A.includes(e.name) ? { ...e.data, ...this.getDataToSend(r) } : e.data,
                        a = {};
                    return (
                        this.remoteProgressSavingInfo.events.includes(e.name) && r && (a.playbackProgress = { time: r.currentTime }),
                        {
                            ...ee,
                            ...this.staticParams,
                            ...e.extraRootFields,
                            ...a,
                            ...this.playerInfo,
                            vpuid: K.$,
                            eventType: 'event',
                            eventName: e.name,
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: B(document),
                            eventIndex: this.eventIndex,
                            data: i,
                            labels: n,
                            sourceIndex: t ?? this.sourceIndexes.current,
                        }
                    );
                }
                getFullErrorLog({ error: e, labels: t, extraRootFields: r, sourceIndex: n }) {
                    let i = { ...this.staticParams.labels, ...t };
                    return (
                        (e.details = O(() => ('string' == typeof e.details ? e.details : JSON.stringify(e.details))) || e.details),
                        {
                            ...ee,
                            ...this.playerInfo,
                            ...this.staticParams,
                            ...r,
                            vpuid: K.$,
                            eventType: e.isFatal ? 'fatal' : 'error',
                            eventName: String(e.code),
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: B(document),
                            eventIndex: this.eventIndex,
                            data: e,
                            labels: i,
                            sourceIndex: n ?? this.sourceIndexes.current,
                        }
                    );
                }
                getDataToSend(e) {
                    if (!e) return {};
                    let { duration: t, currentTime: r, utcStartTime: n, isFullscreen: i, volume: a, muted: s } = e;
                    return {
                        watchedSec: this.watchedTimeTracker.getWatchedTime(),
                        duration: isNaN(t) ? void 0 : t,
                        time: r,
                        utcTime: void 0 === n ? void 0 : n + r,
                        isFullscreen: i,
                        isMuted: s || 0 === a,
                    };
                }
                sendData(e, t) {
                    void 0 !== e && (O(() => this.sendLog(e, t), M), this.eventIndex++);
                }
                checkStalledReason(e) {
                    return this.stalledController.getCurrentStalledReason() === e;
                }
                setBuffering(e, t) {
                    this.stalledController.setBuffering(e, t);
                }
                setExpectedBuffering({ reason: e, details: t }) {
                    switch ((this.checkInitBuffering(e), e)) {
                        case o.SetSource:
                            this.setBuffering(!1), this.clearBufferingHistory();
                            break;
                        case o.Init:
                            break;
                        default:
                            this.checkStalledReason(e) || this.setBuffering(!1);
                    }
                    return this.stalledController.setExpectedStalled(R(e, t));
                }
                checkInitBuffering(e) {
                    this.wasInitBufferingLogged || e === o.Init || this.onInitBuffering();
                }
                setExternalStalledDuration(e) {
                    let t = this.getExpectedStalled();
                    t.reason === o.Init && e && ((t.details = { externalStalledDuration: (0, c.Qr)(e, 1e3) }), this.setExpectedBuffering(t));
                }
                startInitBufferingTimer() {
                    this.initialStalledTimestamp = (0, c.Wj)((0, y.lh)());
                }
                stopInitBufferingTimer() {
                    this.initialStalledTimestampStop = (0, c.Wj)((0, y.lh)());
                }
                onInitBuffering(e) {
                    if (this.wasInitBufferingLogged) return;
                    let t = this.initialStalledTimestamp && !this.initialStalledTimestampStop,
                        r = this.initialStalledTimestamp && this.initialStalledTimestampStop;
                    (this.initialStalledDuration = t
                        ? (0, c.gL)((0, c.Wj)((0, y.lh)()), this.initialStalledTimestamp)
                        : r
                          ? (0, c.gL)(this.initialStalledTimestampStop, this.initialStalledTimestamp)
                          : (0, c.Wj)(0)),
                        (this.externalStalledDuration = e ?? (0, c.Wj)(0));
                    let { playingState: n } = this.getState() || {};
                    'pause' !== n && this.handleInitialBuffering(),
                        (this.wasInitBufferingLogged = !0),
                        (this.initialStalledTimestamp = void 0),
                        (this.initialStalledTimestampStop = void 0);
                }
                handleInitialBuffering() {
                    this.wasInitBufferingHandled ||
                        (this.externalStalledDuration && this.setExternalStalledDuration(this.externalStalledDuration),
                        this.setBuffering(!0, this.initialStalledDuration),
                        (this.wasInitBufferingHandled = !0));
                }
                destroy(e) {
                    this.stalledController.destroy(),
                        this.playerAliveController.destroy(),
                        this.watchedTimeTracker.destroy(),
                        this.logEvent({ name: 'DestroyPlayer', data: { reason: e?.reason } }),
                        this.timer.stop(),
                        (this.destroyed = !0);
                }
                getExpectedStalled() {
                    return this.stalledController.getExpectedStalled();
                }
                clearBufferingHistory() {
                    return this.stalledController.clearStalledHistory();
                }
                setPreloadDetails() {
                    this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({ name: 'DeprecatedTelemetryMethodUsed', data: { method: 'setPreloadDetails' } }), (this.useOfDeprecatedMethodIsLogged = !0)),
                        M(Error('Deprecated method used. Method is Telemetry#setPreloadDetails(). Just remove it.'));
                }
                writePlayerAliveStateManually() {
                    return this.playerAliveController.writeStateManually();
                }
                flushStates() {
                    return this.playerAliveController.flushStates();
                }
                onCreatePlayer(e, t) {
                    this.logEvent({ name: 'CreatePlayer', data: e, extraRootFields: t });
                }
                onBeforePreload() {
                    return ++this.sourceIndexes.last;
                }
                getSourceIndex() {
                    return this.sourceIndexes.current;
                }
                onBeforeSetSource() {
                    return ++this.sourceIndexes.last;
                }
                onSetSource(e, t, r) {
                    this.flushStates(),
                        (this.sourceIndexes.current = this.sourceIndexes.last > this.sourceIndexes.current ? this.sourceIndexes.last : ++this.sourceIndexes.last),
                        this.watchedTimeTracker.reset(),
                        r && this.setStaticParams(r),
                        this.logEvent({ name: 'SetSource', data: e }),
                        this.setExpectedBuffering({ reason: o.SetSource, details: t });
                    let n = this.getState()?.playingState;
                    n !== i.PAUSE && n !== i.END && this.setBuffering(!0);
                }
                sendReportLog(e, t, r = !0) {
                    let n = t ?? this.generateReportId();
                    return this.logEvent({ name: 'ReportLog', data: { reportId: n, reported: r, reportData: e } }), n;
                }
                generateReportId() {
                    return `${this.playerInfo.vsid}x${this.reportNumber++}`;
                }
                onExpectedBuffering({ reason: e, details: t }) {
                    return this.checkInitBuffering(e), this.stalledController.setExpectedStalled(R(e, t));
                }
                onSeek(e) {
                    this.setExpectedBuffering({ reason: o.Seek, details: e });
                }
                onVideoTrackChange(e) {
                    this.setExpectedBuffering({ reason: o.VideoTrackChange, details: e });
                }
                onAudioTrackChange(e) {
                    this.setExpectedBuffering({ reason: o.AudioTrackChange, details: e });
                }
                onRecover(e) {
                    this.setExpectedBuffering({ reason: o.Recover, details: e });
                }
                onMediaError(e) {
                    this.setExpectedBuffering({ reason: o.MediaError, details: e });
                }
                onNetworkStatusChange(e) {
                    this.setExpectedBuffering({ reason: o.Offline, details: e });
                }
                onRepresentationsChange(e) {
                    this.setExpectedBuffering({ reason: o.RepresentationsChange, details: e });
                }
                onLiveEdge(e) {
                    this.setExpectedBuffering({ reason: o.LiveEdge, details: e });
                }
                onAdStart(e) {
                    this.setExpectedBuffering({ reason: o.AdStart, details: e });
                }
                onAdBetween(e) {
                    this.setExpectedBuffering({ reason: o.AdBetween, details: e });
                }
                onAdEnd(e) {
                    this.setExpectedBuffering({ reason: o.AdEnd, details: e });
                }
            }
        },
        13489: () => {},
        14755: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { withUserID: () => n.B });
            var n = r(3238);
        },
        18677: () => {},
        18956: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var n = r(55178);
            function i(e, t) {
                (0, n.useImperativeHandle)(t, function () {
                    return e.current;
                });
            }
        },
        19246: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = r(30782);
            n.__exportStar(r(57676), t),
                n.__exportStar(r(20065), t),
                n.__exportStar(r(5487), t),
                n.__exportStar(r(74100), t),
                n.__exportStar(r(86180), t),
                n.__exportStar(r(14755), t);
        },
        20065: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { Dialog: () => n.l });
            var n = r(62340);
        },
        24586: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => i });
            var n = r(55178),
                i = r(68956).O ? n.useLayoutEffect : n.useEffect;
        },
        27158: (e, t, r) => {
            'use strict';
            function n(e) {
                return e;
            }
            function i(e) {
                return Math.max(e, 0);
            }
            function a(e) {
                return i(e);
            }
            function s(e) {
                return i(Math.floor(e));
            }
            r.d(t, { WQ: () => d, Qr: () => m, lw: () => f, gL: () => h, bY: () => c, Wj: () => u, Lp: () => l, fP: () => o, PY: () => a, Pn: () => s });
            let o = n,
                l = n,
                c = n,
                u = n,
                d = (e, ...t) => {
                    let r = e;
                    for (let e = 0; e < t.length; e++) r += t[e];
                    return r;
                };
            d.operator = '+';
            let h = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r -= t[e];
                return r;
            };
            h.operator = '-';
            let f = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r *= t[e];
                return r;
            };
            f.operator = '*';
            let m = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r /= t[e];
                return r;
            };
            m.operator = '/';
        },
        32522: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    default: function () {
                        return v;
                    },
                    handleClientScriptLoad: function () {
                        return m;
                    },
                    initScriptLoader: function () {
                        return p;
                    },
                });
            let n = r(33399),
                i = r(79476),
                a = r(32290),
                s = n._(r(51767)),
                o = i._(r(55178)),
                l = r(777),
                c = r(5353),
                u = r(63749),
                d = new Map(),
                h = new Set(),
                f = (e) => {
                    let {
                            src: t,
                            id: r,
                            onLoad: n = () => {},
                            onReady: i = null,
                            dangerouslySetInnerHTML: a,
                            children: o = '',
                            strategy: l = 'afterInteractive',
                            onError: u,
                            stylesheets: f,
                        } = e,
                        m = r || t;
                    if (m && h.has(m)) return;
                    if (d.has(t)) {
                        h.add(m), d.get(t).then(n, u);
                        return;
                    }
                    let p = () => {
                            i && i(), h.add(m);
                        },
                        g = document.createElement('script'),
                        v = new Promise((e, t) => {
                            g.addEventListener('load', function (t) {
                                e(), n && n.call(this, t), p();
                            }),
                                g.addEventListener('error', function (e) {
                                    t(e);
                                });
                        }).catch(function (e) {
                            u && u(e);
                        });
                    a
                        ? ((g.innerHTML = a.__html || ''), p())
                        : o
                          ? ((g.textContent = 'string' == typeof o ? o : Array.isArray(o) ? o.join('') : ''), p())
                          : t && ((g.src = t), d.set(t, v)),
                        (0, c.setAttributesFromProps)(g, e),
                        'worker' === l && g.setAttribute('type', 'text/partytown'),
                        g.setAttribute('data-nscript', l),
                        f &&
                            ((e) => {
                                if (s.default.preinit)
                                    return e.forEach((e) => {
                                        s.default.preinit(e, { as: 'style' });
                                    });
                                {
                                    let t = document.head;
                                    e.forEach((e) => {
                                        let r = document.createElement('link');
                                        (r.type = 'text/css'), (r.rel = 'stylesheet'), (r.href = e), t.appendChild(r);
                                    });
                                }
                            })(f),
                        document.body.appendChild(g);
                };
            function m(e) {
                let { strategy: t = 'afterInteractive' } = e;
                'lazyOnload' === t
                    ? window.addEventListener('load', () => {
                          (0, u.requestIdleCallback)(() => f(e));
                      })
                    : f(e);
            }
            function p(e) {
                e.forEach(m),
                    [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(
                        (e) => {
                            let t = e.id || e.getAttribute('src');
                            h.add(t);
                        },
                    );
            }
            function g(e) {
                let { id: t, src: r = '', onLoad: n = () => {}, onReady: i = null, strategy: c = 'afterInteractive', onError: d, stylesheets: m, ...p } = e,
                    { updateScripts: g, scripts: v, getIsSsr: y, appDir: S, nonce: w } = (0, o.useContext)(l.HeadManagerContext);
                w = p.nonce || w;
                let b = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    let e = t || r;
                    b.current || (i && e && h.has(e) && i(), (b.current = !0));
                }, [i, t, r]);
                let E = (0, o.useRef)(!1);
                if (
                    ((0, o.useEffect)(() => {
                        if (!E.current) {
                            if ('afterInteractive' === c) f(e);
                            else
                                'lazyOnload' === c &&
                                    ('complete' === document.readyState
                                        ? (0, u.requestIdleCallback)(() => f(e))
                                        : window.addEventListener('load', () => {
                                              (0, u.requestIdleCallback)(() => f(e));
                                          }));
                            E.current = !0;
                        }
                    }, [e, c]),
                    ('beforeInteractive' === c || 'worker' === c) &&
                        (g
                            ? ((v[c] = (v[c] || []).concat([{ id: t, src: r, onLoad: n, onReady: i, onError: d, ...p, nonce: w }])), g(v))
                            : y && y()
                              ? h.add(t || r)
                              : y && !y() && f({ ...e, nonce: w })),
                    S)
                ) {
                    if (
                        (m &&
                            m.forEach((e) => {
                                s.default.preinit(e, { as: 'style' });
                            }),
                        'beforeInteractive' === c)
                    )
                        if (!r)
                            return (
                                p.dangerouslySetInnerHTML && ((p.children = p.dangerouslySetInnerHTML.__html), delete p.dangerouslySetInnerHTML),
                                (0, a.jsx)('script', {
                                    nonce: w,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([0, { ...p, id: t }]) + ')' },
                                })
                            );
                        else
                            return (
                                s.default.preload(
                                    r,
                                    p.integrity
                                        ? { as: 'script', integrity: p.integrity, nonce: w, crossOrigin: p.crossOrigin }
                                        : { as: 'script', nonce: w, crossOrigin: p.crossOrigin },
                                ),
                                (0, a.jsx)('script', {
                                    nonce: w,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([r, { ...p, id: t }]) + ')' },
                                })
                            );
                    'afterInteractive' === c &&
                        r &&
                        s.default.preload(
                            r,
                            p.integrity
                                ? { as: 'script', integrity: p.integrity, nonce: w, crossOrigin: p.crossOrigin }
                                : { as: 'script', nonce: w, crossOrigin: p.crossOrigin },
                        );
                }
                return null;
            }
            Object.defineProperty(g, '__nextScript', { value: !0 });
            let v = g;
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        37023: () => {},
        37956: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => g });
            let n = '__VPUID_INLINE__',
                i = 'vpuid';
            class a {
                prefix;
                path;
                constructor(e = {}) {
                    (this.prefix = e.prefix || 'ss_'), (this.path = e.path || '/');
                }
                getItem(e) {
                    let t = `${this.prefix}${e}=`,
                        r = document.cookie.indexOf(t);
                    if (-1 === r) return null;
                    let n = r + t.length,
                        i = document.cookie.indexOf(';', n);
                    return document.cookie.substring(n, -1 === i ? document.cookie.length : i);
                }
                setItem(e, t) {
                    let r = `${this.prefix}${e}=${t}; path=${this.path}; samesite=strict`;
                    document.cookie = r;
                }
                removeItem(e) {
                    document.cookie = `${this.prefix}${e}=; path=${this.path}; max-age=-1`;
                }
                clear() {
                    let e = document.cookie;
                    if (!e) return;
                    let t = e.split(';');
                    for (let e = 0; e < t.length; e++) {
                        let r = t[e].indexOf('=');
                        if (-1 === r) continue;
                        let n = t[e].substring(0, r).trim();
                        n.startsWith(this.prefix) && this.removeItem(n.substring(this.prefix.length));
                    }
                }
                get length() {
                    let e = 0,
                        t = document.cookie;
                    if (!t) return e;
                    let r = t.split(';');
                    for (let t = 0; t < r.length; t++) {
                        let n = r[t].indexOf('=');
                        -1 !== n && r[t].substring(0, n).trim().startsWith(this.prefix) && e++;
                    }
                    return e;
                }
                key(e) {
                    if (e < 0) return null;
                    let t = -1,
                        r = document.cookie;
                    if (!r) return null;
                    let n = r.split(';');
                    for (let r = 0; r < n.length; r++) {
                        let i = n[r].indexOf('=');
                        if (-1 === i) continue;
                        let a = n[r].substring(0, i).trim();
                        if (a.startsWith(this.prefix) && ++t === e) return a.substring(this.prefix.length);
                    }
                    return null;
                }
                static isSupported() {
                    try {
                        let e = '__test_cookie__',
                            t = new a();
                        t.setItem(e, '1');
                        let r = t.getItem(e);
                        return t.removeItem(e), '1' === r;
                    } catch {
                        return !1;
                    }
                }
            }
            class s {
                data = {};
                getItem(e) {
                    return this.data[e] || null;
                }
                setItem(e, t) {
                    this.data[e] = t;
                }
                removeItem(e) {
                    delete this.data[e];
                }
                clear() {
                    this.data = {};
                }
                get length() {
                    return Object.keys(this.data).length;
                }
                key(e) {
                    let t = Object.keys(this.data);
                    return e >= 0 && e < t.length ? t[e] : null;
                }
            }
            function o(e) {
                let t = '__test_storage__';
                try {
                    return e.setItem(t, 'test'), e.removeItem(t), !0;
                } catch {
                    return !1;
                }
            }
            class l {
                fallbackOrder;
                constructor(e = ['local', 'session', 'cookie', 'memory']) {
                    this.fallbackOrder = e;
                }
                getStorage() {
                    for (let e of this.fallbackOrder)
                        if (
                            (function (e) {
                                try {
                                    switch (e) {
                                        case 'local':
                                            return o(window.localStorage);
                                        case 'session':
                                            return o(window.sessionStorage);
                                        case 'cookie':
                                            return a.isSupported();
                                        case 'memory':
                                            return !0;
                                        default:
                                            throw Error(`Unsupported storage type: ${e}`);
                                    }
                                } catch {
                                    return !1;
                                }
                            })(e)
                        )
                            return this.createStorage(e);
                    return new s();
                }
                createStorage(e) {
                    switch (e) {
                        case 'local':
                        default:
                            return window.localStorage;
                        case 'session':
                            return window.sessionStorage;
                        case 'cookie':
                            return new a();
                        case 'memory':
                            return new s();
                    }
                }
            }
            let c = new l().getStorage(),
                u = new l(['local', 'memory']).getStorage(),
                d = new l(['session', 'memory']).getStorage();
            function h(e) {
                return {
                    getItem(t) {
                        try {
                            return e.getItem(t);
                        } catch {
                            return null;
                        }
                    },
                    setItem(t, r) {
                        try {
                            e.setItem(t, r);
                        } catch {}
                    },
                    removeItem(t) {
                        try {
                            e.removeItem(t);
                        } catch {}
                    },
                    clear() {
                        try {
                            e.clear();
                        } catch {}
                    },
                    hasItem(t) {
                        try {
                            return null !== e.getItem(t);
                        } catch {
                            return !1;
                        }
                    },
                    get length() {
                        try {
                            return e.length;
                        } catch {
                            return 0;
                        }
                    },
                    key(t) {
                        try {
                            return e.key(t);
                        } catch {
                            return null;
                        }
                    },
                };
            }
            let f = h(c);
            h(u), h(d);
            var m = r(95939);
            let p = 'qwertyuiopasdfghjklzxcvbnm0123456789',
                g =
                    -1 === n.indexOf('__VPUID')
                        ? n
                        : (f.getItem(i) ??
                          (function () {
                              let e = [];
                              for (let t = 0; t < 10; t++) e.push(p[Math.floor((0, m.y)() * p.length)]);
                              return e.join('');
                          })());
            f.setItem(i, g);
        },
        40199: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                });
            let n = r(89957);
        },
        41952: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => f });
            let n = {}.toString,
                i = /\[object (\w+)\]/,
                a = (e) => {
                    let t = n.call(e);
                    if (!t) return null;
                    let r = t.match(i);
                    if (!r) return null;
                    let a = r[1];
                    return a || null;
                };
            function s(e) {
                return 'string' == typeof e;
            }
            function o(e) {
                let t = typeof e;
                return !!e && ('object' === t || 'function' === t);
            }
            let l = [].find,
                c = !(function (e) {
                    if (!(null == e ? void 0 : e.toString)) return !1;
                    try {
                        let t = e.toString();
                        return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t);
                    } catch (e) {
                        return !1;
                    }
                })(l)
                    ? (e, t) => {
                          for (let r = 0; r < e.length; r++) {
                              let n = e[r];
                              if (t(n, r, e)) return n;
                          }
                      }
                    : (e, t) => l.call(e, t);
            var u = r(77529),
                d = r.n(u);
            let h = { message: 'DEFAULT_ERROR_MESSAGE', code: '0', details: '', stack: '?:?:?' };
            class f extends Error {
                constructor(...e) {
                    let t = 2 === e.length ? e[0] : void 0,
                        r = 2 === e.length ? e[1] : e[0],
                        n =
                            ((e) => !!o(e) && !!s(e.name) && !!s(e.message))(t) || ('object' == typeof t && t && 'code' in t && 'details' in t)
                                ? t
                                : { message: String(t || h.message) };
                    super(),
                        Object.defineProperty(this, 'originalError', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'message', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'code', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'details', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'stack', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'toString', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'toJSON', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.originalError = 'object' == typeof t && t ? t : { unknown: t, unknownStr: String(t) }),
                        d()(this, f.prototype);
                    let i = r.code || n.code || n.id || h.code,
                        l = r.message || n.message || h.message;
                    (this.message = `VAS Error [${i}]` + (l ? `[${l}]` : '')), (this.code = i), (this.details = r.details || n.details || h.details);
                    let u =
                            n.stack ||
                            (function (e) {
                                let { url: t, line: r, col: n, fileName: i, columnNumber: a, lineNumber: s } = e;
                                return `${t || i || '?'}:${r || s || '?'}:${n || a || '?'}`;
                            })(n),
                        m = u === h.stack ? this.stack : u;
                    if (m && m !== h.stack) this.stack = m;
                    else if (!this.stack)
                        try {
                            throw Error(this.message);
                        } catch (e) {
                            this.stack = m = e.stack || h.stack;
                        }
                    (this.toString = () =>
                        JSON.stringify(
                            this.toJSON(),
                            (function () {
                                let e = [],
                                    t = (function () {
                                        let e = 'undefined' == typeof WeakMap ? void 0 : new WeakMap(),
                                            t = [];
                                        return {
                                            set: (r, n) => {
                                                if (void 0 === e) return void t.push({ path: n, value: r });
                                                try {
                                                    e.set(r, n);
                                                } catch (e) {
                                                    t.push({ path: n, value: r });
                                                }
                                            },
                                            get: (r) => {
                                                let n = c(t, (e) => e.value === r);
                                                return void 0 !== e && void 0 === n ? e.get(r) : n ? n.path : void 0;
                                            },
                                        };
                                    })();
                                return (r, n) => {
                                    if ('function' == typeof n || 'Function' === a(n)) return s(n.name) ? n.name : '[Function]';
                                    if (n instanceof Error || 'Error' === a(n)) return { name: n.name, message: n.message, stack: n.stack };
                                    if (!o(n)) return n;
                                    if (
                                        ((e) => {
                                            try {
                                                let t = (function (e, t = window) {
                                                    return ('function' == typeof t.getComputedStyle ? t.getComputedStyle(e, null) : e.currentStyle) || {};
                                                })(e);
                                                return 'display' in t;
                                            } catch (e) {
                                                return !1;
                                            }
                                        })(n)
                                    ) {
                                        var i;
                                        return (i = n).id ? i.id : i.className ? i.className : 'HTML Element';
                                    }
                                    let l = t.get(n);
                                    if (s(l) && l.length > 0) return `[Circular ${l}]`;
                                    for (; e.length > 0 && e[e.length - 1].value[r] !== n; ) e.pop();
                                    let c = (e.length > 0 ? e[e.length - 1].path : '') + (r ? `/${r}` : '~');
                                    return e.push({ path: c, value: n }), t.set(n, c), n;
                                };
                            })(),
                        )),
                        (this.toJSON = () => ({ originalError: this.originalError, message: this.message, code: this.code, details: this.details, stack: m }));
                }
            }
        },
        42636: (e, t, r) => {
            'use strict';
            r.d(t, { x3: () => o, lh: () => f });
            var n = r(27158);
            let i = {}.toString,
                a = /\[object (\w+)\]/;
            function s(e) {
                return (
                    'function' == typeof e ||
                    'Function' ===
                        ((e) => {
                            let t = i.call(e);
                            if (!t) return null;
                            let r = t.match(a);
                            if (!r) return null;
                            let n = r[1];
                            return n || null;
                        })(e)
                );
            }
            let o = Date && s(Date.now) ? () => Date.now() : () => new Date().getTime(),
                l = 'undefined' == typeof window ? void 0 : window.performance,
                c = l && s(l.now),
                u = l && l.timing && l.timing.navigationStart,
                d = l && l.timeOrigin ? l.timeOrigin : u ? l.timing.navigationStart : o(),
                h = 0,
                f = () => (0, n.Wj)(c ? l.now() : (h = Math.max(o() - d, h)));
        },
        46456: (e, t, r) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(32290),
                r(51767),
                r(40199),
                r(15406);
        },
        46853: () => {},
        52469: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => d });
            var n = r(69592);
            let i = ['', '-webkit-', '-ms-', '-moz-', '-o-'],
                a = {}.toString,
                s = /\[object (\w+)\]/;
            function o(e, t) {
                var r;
                if (
                    'function' != typeof (r = e.matchMedia) &&
                    'Function' !==
                        ((e) => {
                            let t = a.call(e);
                            if (!t) return null;
                            let r = t.match(s);
                            if (!r) return null;
                            let n = r[1];
                            return n || null;
                        })(r)
                )
                    return !1;
                let n = e.matchMedia(t);
                return (
                    (function (e) {
                        let t = typeof e;
                        return !!e && ('object' === t || 'function' === t);
                    })(n) && !!n.matches
                );
            }
            let l = i.map((e) => `(${e}any-pointer:coarse)`).join(','),
                c = i.map((e) => `(${e}touch-enabled)`).join(',');
            var u = r(82411);
            function d(e) {
                let t = '',
                    r = '';
                return (
                    e &&
                        (function (e) {
                            let t = (function (e, t = !0) {
                                if (
                                    (function (e = window) {
                                        return (
                                            ((e = window) => {
                                                let t = (function (e = window) {
                                                    try {
                                                        return (e.navigator || {}).userAgent || '';
                                                    } catch (e) {
                                                        return '';
                                                    }
                                                })(e).toLowerCase();
                                                if (t.indexOf('android') > -1) return !1;
                                                let r = t
                                                    .replace(/\(.+?\)/gi, '')
                                                    .split(' ')
                                                    .map((e) => e.trim().split('/')[0])
                                                    .filter((e) => e && 'mobile' !== e);
                                                return 4 === r.length && 'mozilla' === r[0] && 'applewebkit' === r[1] && 'version' === r[2] && 'safari' === r[3];
                                            })(e) ||
                                            (function (e = window) {
                                                let t = e.navigator.userAgent.toLowerCase();
                                                return /ipad|iphone|ipod/.test(t) && !e.MSStream && !((e = window) => e.navigator.userAgent.indexOf('UCBrowser') > -1)(e);
                                            })(e) ||
                                            (function (e = window) {
                                                return (
                                                    /Apple/.test(e.navigator.vendor) &&
                                                    (function (e = window) {
                                                        var t;
                                                        return (
                                                            (!!(t = e).PointerEvent &&
                                                                (function (e) {
                                                                    let { msMaxTouchPoints: t, maxTouchPoints: r } = e.navigator || {};
                                                                    return t || r || 0;
                                                                })(t) > 0 &&
                                                                !((e = window) =>
                                                                    ((e = window) => {
                                                                        let t = n(e);
                                                                        return 'boolean' == typeof t ? -1 : t;
                                                                    })(e) > 11)(t)) ||
                                                            o(e, l) ||
                                                            o(e, c) ||
                                                            (function (e) {
                                                                let { DocumentTouch: t } = e;
                                                                return !!t && e.document instanceof t;
                                                            })(e) ||
                                                            'ontouchstart' in e
                                                        );
                                                    })(e)
                                                );
                                            })(e)
                                        );
                                    })() &&
                                    t
                                )
                                    return [];
                                let r = [],
                                    i = e;
                                for (;;)
                                    try {
                                        if (!(i = i.ownerDocument.defaultView.frameElement)) return r;
                                        r.push(i);
                                    } catch (e) {
                                        return r;
                                    }
                            })(e.documentElement).map((e) => e.ownerDocument);
                            return t.unshift(e), t.map((e) => ({ location: (0, u.K)(e.defaultView), referrer: e.referrer }));
                        })(e)
                            .reverse()
                            .forEach(({ location: e, referrer: n }) => {
                                (t = t || e), (r = r || n);
                            }),
                    { location: t, referrer: r }
                );
            }
        },
        53657: () => {},
        57676: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { Content: () => n.U, cnUserID: () => n.K });
            var n = r(2853);
        },
        59569: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => i.a });
            var n = r(32522),
                i = r.n(n);
        },
        62340: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => c });
            var n = r(55178),
                i = r(99448),
                a = r(90110);
            r(18677);
            var s = (0, i.cn)('UserID', 'CloseButton'),
                o = function (e) {
                    var t = e.onClick,
                        r = e.colorScheme;
                    return n.createElement(
                        'button',
                        { className: s({ colorScheme: r }), onClick: t, 'aria-label': 'Закрыть', tabIndex: 1 },
                        n.createElement(
                            'svg',
                            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', focusable: 'false', 'aria-hidden': 'true' },
                            n.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z',
                                fill: 'currentColor',
                            }),
                        ),
                    );
                };
            r(37023);
            var l = (0, i.cn)('UserWidget', 'Dialog'),
                c = (0, n.forwardRef)(function (e, t) {
                    var r,
                        i,
                        s = e.visible,
                        c = e.loading,
                        u = e.colorScheme,
                        d = e.platform,
                        h = e.onClose,
                        f = e.className;
                    return (
                        (0, a.H)({ enabled: s && 'touch' === d }),
                        (r = { onScroll: h }),
                        ((i = (0, n.useRef)(r)).current = r),
                        (0, n.useEffect)(function () {
                            var e = function () {
                                var e, t;
                                null == (t = (e = i.current).onScroll) || t.call(e);
                            };
                            if (i.current.onScroll)
                                return (
                                    document.addEventListener('scroll', e),
                                    function () {
                                        document.removeEventListener('scroll', e);
                                    }
                                );
                        }, []),
                        n.createElement(
                            'div',
                            {
                                role: 'dialog',
                                'aria-busy': c,
                                'aria-modal': 'true',
                                className: l('Dialog', { visible: s, loading: c, colorScheme: u, platform: d }, [f]),
                                ref: t,
                            },
                            c && n.createElement(o, { colorScheme: u, onClick: h }),
                            e.children,
                        )
                    );
                });
        },
        63397: (e, t, r) => {
            'use strict';
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(82105);
        },
        63749: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    cancelIdleCallback: function () {
                        return n;
                    },
                    requestIdleCallback: function () {
                        return r;
                    },
                });
            let r =
                    ('undefined' != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
                    function (e) {
                        let t = Date.now();
                        return self.setTimeout(function () {
                            e({
                                didTimeout: !1,
                                timeRemaining: function () {
                                    return Math.max(0, 50 - (Date.now() - t));
                                },
                            });
                        }, 1);
                    },
                n =
                    ('undefined' != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
                    function (e) {
                        return clearTimeout(e);
                    };
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        68956: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => n });
            var n = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
        },
        69592: (e) => {
            e.exports = function () {
                var e = window.navigator.userAgent,
                    t = e.indexOf('MSIE ');
                if (t > 0) return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10);
                if (e.indexOf('Trident/') > 0) {
                    var r = e.indexOf('rv:');
                    return parseInt(e.substring(r + 3, e.indexOf('.', r)), 10);
                }
                var n = e.indexOf('Edge/');
                return n > 0 && parseInt(e.substring(n + 5, e.indexOf('.', n)), 10);
            };
        },
        70679: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { useIsomorphicLayoutEffect: () => n.E });
            var n = r(24586);
        },
        74100: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { User: () => m, UserBase: () => h });
            var n = r(55178),
                i = r(99448),
                a = r(18956),
                s = r(30782),
                o = function (e, t, r) {
                    return (void 0 === t && (t = '0/0-0'), 'prod_yateam' === e)
                        ? 'https://center.yandex-team.ru/api/v1/user/' + ('0/0-0' === t ? '404' : t) + '/avatar/' + (r ? '85' : '42') + '.jpg'
                        : ('test' !== e ? 'https://avatars.mds.yandex.net' : 'https://avatars.mdst.yandex.net') +
                              '/get-yapic/' +
                              t +
                              '/' +
                              (r ? 'islands-retina-middle' : 'islands-middle');
                };
            r(46853);
            var l = (0, i.cn)('UserID', 'Avatar'),
                c = function (e) {
                    var t,
                        r,
                        i,
                        a,
                        c = e.env,
                        u = e.avatarId,
                        d = e.plus,
                        h = e.child,
                        f = e.colorScheme,
                        m = e.className,
                        p = (0, s.__read)((0, n.useState)(!1), 2),
                        g = p[0],
                        v = p[1],
                        y =
                            ((r = (t = { avatarId: u, env: c }).env),
                            (i = t.avatarId),
                            {
                                src: (a = (0, n.useMemo)(
                                    function () {
                                        return o(r, i, !1);
                                    },
                                    [r, i],
                                )),
                                srcSet:
                                    a +
                                    ' 1x, ' +
                                    (0, n.useMemo)(
                                        function () {
                                            return o(r, i, !0);
                                        },
                                        [r, i],
                                    ) +
                                    ' 2x',
                            }),
                        S = y.src,
                        w = y.srcSet,
                        b = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(
                            function () {
                                var e = b.current;
                                window && h && e && v(e.getBoundingClientRect().width <= 36);
                            },
                            [h, b],
                        ),
                        n.createElement(
                            'div',
                            { className: l({ child: h, plus: d, small: g, dark: 'dark' === f }, [m]), ref: b },
                            n.createElement('img', { src: S, className: 'UserID-Avatar-Image', srcSet: w }),
                            h &&
                                n.createElement(
                                    'svg',
                                    { className: 'UserID-Avatar-ChildStroke', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 300 300' },
                                    n.createElement('path', {
                                        fillRule: 'evenodd',
                                        clipRule: 'evenodd',
                                        d: 'M165.9 37.9822L166.068 38.0049C166.221 38.0257 166.442 38.0562 166.726 38.0968C167.295 38.1778 168.118 38.2987 169.162 38.4618C171.249 38.7878 174.224 39.283 177.813 39.9651C184.975 41.3261 194.666 43.4461 204.678 46.4778C214.632 49.492 225.211 53.4982 233.986 58.7338C242.568 63.8543 250.611 70.8545 253.512 80.3646C262.231 108.946 272.638 153.705 267.746 188.864C263.821 217.084 243.295 239.946 214.374 255.633C185.337 271.383 152.717 277.077 132.993 274.341C113.268 271.605 83.4377 257.247 59.8001 234.191C36.2561 211.225 22.7482 183.642 26.674 155.422C33.0239 109.778 55.8032 71.8059 70.7041 51.2431C76.2121 43.6422 85.9125 39.8089 95.3615 37.7283C105.121 35.5793 116.278 34.95 126.593 35.003C136.965 35.0564 146.789 35.8036 153.998 36.5322C157.61 36.8972 160.584 37.2595 162.664 37.5319C163.704 37.6681 164.522 37.782 165.085 37.8627C165.367 37.903 165.585 37.9351 165.736 37.9575L165.9 37.9822ZM210.975 249.385C238.745 234.322 257.19 213.071 260.694 187.886C265.355 154.381 255.388 110.913 246.701 82.4364C238.203 54.5778 164.895 45.0216 164.895 45.0216C164.895 45.0216 92.1316 33.8026 76.4727 55.4113C61.8934 75.5303 39.8488 112.394 33.7267 156.401C30.2229 181.586 42.1687 207.053 64.7756 229.104C87.5594 251.328 116.05 264.812 133.973 267.298C151.895 269.784 182.987 264.566 210.975 249.385Z',
                                    }),
                                ),
                        )
                    );
                };
            (c.displayName = 'UserIDAvatar'), r(98561);
            var u = function (e) {
                var t = e.children,
                    r = e.fetchMail,
                    i = e.tld,
                    a = e.showCounter,
                    o = e.counterVariant,
                    l = void 0 === o ? 'number' : o,
                    c = e.colorScheme,
                    u = (0, s.__read)((0, n.useState)(0), 2),
                    d = u[0],
                    h = u[1];
                (0, n.useEffect)(
                    function () {
                        r &&
                            a &&
                            fetch('https://mail.yandex.' + i + '/api/v2/userid/counters?silent', { credentials: 'include' })
                                .then(function (e) {
                                    return e.json();
                                })
                                .then(function (e) {
                                    return h(e.counters.unread);
                                })
                                .catch(function (e) {});
                    },
                    [i, r, a],
                );
                var f = r && d > 0 ? Math.min(d, 99) : void 0,
                    m = !!(r && f && d > f),
                    p = f && a ? '' + f + (m ? '+' : '') : null,
                    g = r || a,
                    v = ['UserID-Badge-Dot', 'UserID-Badge-Dot_colorScheme_' + c, 'UserID-Badge-Dot_variant_' + l].join(' ');
                return n.createElement('div', { className: 'UserID-Badge' }, t, g && n.createElement('div', { className: v }, 'number' === l && p));
            };
            (u.displayName = 'UserIDBadge'), r(53657);
            var d = (0, i.cn)('UserID', 'Wrapper'),
                h = (0, n.forwardRef)(function (e, t) {
                    var r = e.tld,
                        i = e.tabIndex,
                        s = e.children,
                        o = e.env,
                        l = e.colorScheme,
                        h = e.userData,
                        f = e.onClick,
                        m = e.onPointerEnter,
                        p = e.className,
                        g = e.fetchMail,
                        v = e.showCounter,
                        y = e.counterVariant,
                        S = e.visible,
                        w = e.ariaLabel,
                        b = e.avatarSize,
                        E = e.platform,
                        x = e.beforeAvatar,
                        T = e.afterAvatar,
                        I = h || {},
                        k = I.child,
                        C = I.plus,
                        _ = I.avatarId,
                        P = (0, n.useRef)(null);
                    return (
                        (0, a.N)(P, t),
                        n.createElement(
                            'div',
                            { className: d({ child: k, plus: C, default: !C }, [p]), style: null !== b ? { '--user-id-size': (b || 42) + 'px' } : void 0 },
                            n.createElement(
                                'button',
                                {
                                    'aria-expanded': S,
                                    'aria-haspopup': !0,
                                    'aria-label': w || 'Ваш профиль',
                                    className: 'UserID-Account',
                                    ref: P,
                                    role: 'button',
                                    tabIndex: void 0 === i ? 0 : i,
                                    onClick: f,
                                    onPointerEnter: m,
                                },
                                x,
                                n.createElement(
                                    u,
                                    {
                                        fetchMail: g && 'test' !== o,
                                        counterVariant: y,
                                        tld: void 0 === r ? 'ru' : r,
                                        colorScheme: l,
                                        showCounter: 'touch' !== E && (g || !0 === v),
                                    },
                                    n.createElement(c, { env: o, avatarId: _, plus: C, child: k, colorScheme: l }),
                                ),
                                T,
                            ),
                            s,
                        )
                    );
                });
            h.displayName = 'UserBase';
            var f = r(62340),
                m = (0, r(3238).B)(h, f.l);
        },
        77529: (e) => {
            'use strict';
            e.exports =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array
                    ? function (e, t) {
                          return (e.__proto__ = t), e;
                      }
                    : function (e, t) {
                          for (var r in t) Object.prototype.hasOwnProperty.call(e, r) || (e[r] = t[r]);
                          return e;
                      });
        },
        78657: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { lock: () => v, unlock: () => y });
            var n,
                i = r(68956);
            function a(e) {
                return 'undefined' != typeof window && null != window.navigator && e.test(window.navigator.userAgent);
            }
            function s() {
                return a(/iphone|ipod|ipad/i) || (a(/macintosh/i) && navigator.maxTouchPoints > 1);
            }
            function o(e, t) {
                var r = {};
                for (var n in t) t.hasOwnProperty(n) && (r[n] = e.style[n]);
                for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n]);
                return r;
            }
            function l(e) {
                return e === document.body || e === document.documentElement;
            }
            var c = Math.random().toString(36).slice(2),
                u = '__scrollLockState$'.concat(c),
                d = !(function () {
                    var e = !1;
                    if (!i.O) return !1;
                    try {
                        var t = function () {
                            return null;
                        };
                        window.addEventListener('testPassive', t, {
                            get passive() {
                                e = !0;
                                return;
                            },
                        }),
                            window.removeEventListener('testPassive', t);
                    } catch (e) {}
                    return e;
                })()
                    ? void 0
                    : { passive: !1 },
                h = { count: 0, lastX: 0, lastY: 0, scrollable: null, scrollX: 0, scrollY: 0 };
            function f(e) {
                1 === e.changedTouches.length &&
                    ((h.scrollable = (function (e) {
                        for (var t; e && ((t = getComputedStyle(e)), !/(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)); ) e = e.parentElement;
                        return e || document.documentElement;
                    })(e.target)),
                    l(h.scrollable) || ((h.lastX = e.changedTouches[0].pageX), (h.lastY = e.changedTouches[0].pageY)));
            }
            function m(e) {
                var t = h.scrollable,
                    r = h.lastX,
                    n = h.lastY;
                if (!(e.changedTouches.length > 1)) {
                    if (!t || l(t)) return void e.preventDefault();
                    var i = e.changedTouches[0].pageX,
                        a = e.changedTouches[0].pageY,
                        s = Math.abs(n - a) > Math.abs(r - i),
                        o = t.scrollTop,
                        c = t.scrollHeight - t.clientHeight,
                        u = t.scrollLeft,
                        d = t.scrollWidth - t.clientWidth,
                        f = !s && ((u <= 0 && i > r) || (u >= d && i < r));
                    ((s && ((o <= 0 && a > n) || (o >= c && a < n))) || f) && e.preventDefault(), (h.lastX = i), (h.lastY = a);
                }
            }
            function p() {
                h.scrollable && (h.scrollable = null);
            }
            function g(e) {
                return e || document.body;
            }
            function v(e) {
                if (i.O) {
                    var t = g(e);
                    !(function (e) {
                        var t = e[u];
                        if (t) return t.count++;
                        var r = (function (e) {
                                var t,
                                    r = l(e) && window.innerWidth - document.documentElement.clientWidth > 0,
                                    i = e.scrollHeight > e.clientHeight;
                                if (r || i || ((t = getComputedStyle(e).overflowY), /scroll/.test(t))) {
                                    if ('undefined' == typeof document) return 0;
                                    if (void 0 === n) {
                                        var a = document.createElement('div');
                                        (a.style.width = '100%'), (a.style.height = '200px');
                                        var s = document.createElement('div');
                                        (s.style.position = 'absolute'),
                                            (s.style.top = '0'),
                                            (s.style.left = '0'),
                                            (s.style.pointerEvents = 'none'),
                                            (s.style.visibility = 'hidden'),
                                            (s.style.width = '200px'),
                                            (s.style.height = '150px'),
                                            (s.style.overflow = 'hidden'),
                                            s.appendChild(a),
                                            document.body.appendChild(s);
                                        var o = a.offsetWidth;
                                        s.style.overflow = 'scroll';
                                        var c = a.offsetWidth;
                                        o === c && (c = s.clientWidth), document.body.removeChild(s), (n = o - c);
                                    }
                                    return n;
                                }
                                return 0;
                            })(e),
                            i = parseInt(getComputedStyle(e).getPropertyValue('padding-right'), 10),
                            a = o(e, { paddingRight: ''.concat(i + r, 'px'), overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' });
                        e[u] = { initialStyle: a, count: 1 };
                    })(t),
                        s() &&
                            l(t) &&
                            (h.count++,
                            1 === h.count &&
                                ((h.scrollX = window.pageXOffset),
                                (h.scrollY = window.pageYOffset),
                                document.addEventListener('touchstart', f, d),
                                document.addEventListener('touchmove', m, d),
                                document.addEventListener('touchend', p, d)));
                }
            }
            function y(e) {
                if (i.O) {
                    var t = g(e),
                        r = t[u];
                    r && (r.count--, 0 === r.count) && (o(t, r.initialStyle), delete t[u]),
                        s() &&
                            l(t) &&
                            0 !== h.count &&
                            (h.count--,
                            0 === h.count &&
                                (document.removeEventListener('touchstart', f),
                                document.removeEventListener('touchmove', m),
                                document.removeEventListener('touchend', p),
                                window.scrollTo(h.scrollX, h.scrollY)));
                }
            }
        },
        82411: (e, t, r) => {
            'use strict';
            function n(e) {
                if (e && e.location) {
                    let { location: t } = e;
                    return 'function' == typeof t.toString ? t.toString() : t.href || '';
                }
                return '';
            }
            r.d(t, { K: () => n });
        },
        85438: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => C });
            var n,
                i,
                a = r(30782),
                s = r(55178),
                o = r(18956),
                l = r(24586),
                c = [],
                u = null,
                d = null;
            function h() {
                return c[c.length - 1];
            }
            function f(e, t, r) {
                var n,
                    i,
                    a = h();
                a &&
                    a.onClose &&
                    (!r || r === a.closeStrategy) &&
                    (('click' === t &&
                        ((n = a.refs),
                        (i = e.target),
                        n.some(function (e) {
                            return e.current instanceof HTMLElement && e.current.contains(i);
                        }))) ||
                        a.onClose({ nativeEvent: e, source: t }));
            }
            function m(e) {
                var t = e.key;
                ('Escape' === t || 'Esc' === t) && f(e, 'esc');
            }
            function p(e) {
                (u = e.target), (d = h()), f(e, 'click', 'pressdown');
            }
            function g(e) {
                var t = u;
                u = null;
                var r = d;
                (d = null), e.button > 0 || r !== h() || (t === e.target && f(e, 'click', 'pressup'));
            }
            var v = Object.freeze({
                    count: function () {
                        return c.length;
                    },
                    addOverlay: function (e) {
                        0 === c.length &&
                            (document.addEventListener('keyup', m), document.addEventListener('pointerdown', p, !0), document.addEventListener('click', g, !0)),
                            c.push(e);
                    },
                    removeOverlay: function (e) {
                        c.splice(c.indexOf(e), 1),
                            0 === c.length &&
                                (document.removeEventListener('keyup', m),
                                document.removeEventListener('pointerdown', p, !0),
                                document.removeEventListener('click', g, !0));
                    },
                    getTopOverlayOptions: h,
                }),
                y = Date.now(),
                S = 'undefined' != typeof performance ? performance : null;
            (null == (n = null == S ? void 0 : S.timing) ? void 0 : n.navigationStart) &&
                (y = null == (i = null == performance ? void 0 : performance.timing) ? void 0 : i.navigationStart);
            var w =
                    S && 'function' == typeof S.now
                        ? function () {
                              return S.now();
                          }
                        : 'function' == typeof Date.now
                          ? function () {
                                return Date.now() - y;
                            }
                          : function () {
                                return new Date().getTime() - y;
                            },
                b = 'undefined' != typeof window,
                E = function () {
                    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                },
                x = function (e) {
                    var t = e.enabled,
                        r = e.onHeightChange,
                        n = (0, a.__read)((0, s.useState)(b ? E() : void 0), 2),
                        i = n[0],
                        o = n[1],
                        c = (0, s.useCallback)(
                            function () {
                                var e = E();
                                i !== e && (o(E()), r(e));
                            },
                            [i, r],
                        );
                    (0, l.E)(
                        function () {
                            if (t)
                                return (
                                    window.addEventListener('resize', c),
                                    function () {
                                        window.removeEventListener('resize', c);
                                    }
                                );
                        },
                        [c, t],
                    );
                },
                T = function (e) {
                    var t = e.touchBreakpointWidth,
                        r = void 0 === t ? 520 : t,
                        n = e.platform,
                        i = void 0 === n ? 'auto' : n,
                        o = (0, a.__read)((0, s.useState)(), 2),
                        c = o[0],
                        u = o[1];
                    return (
                        (0, s.useEffect)(
                            function () {
                                if ('auto' !== i) return void u(i);
                                b && u(window.matchMedia('(max-width: ' + r + 'px)').matches ? 'touch' : 'desktop');
                            },
                            [r, i],
                        ),
                        (0, l.E)(
                            function () {
                                if (b && 'auto' === i) {
                                    var e = window.matchMedia('(max-width: ' + r + 'px)');
                                    return (
                                        t(e),
                                        e.addEventListener ? e.addEventListener('change', t) : e.addListener(t),
                                        function () {
                                            e.removeEventListener ? e.removeEventListener('change', t) : e.removeListener(t);
                                        }
                                    );
                                }
                                function t(e) {
                                    e.matches ? u('touch') : u('desktop');
                                }
                            },
                            [c, u, r],
                        ),
                        c
                    );
                },
                I = ['tr', 'am', 'ge'],
                k = ['il'];
            function C(e) {
                var t,
                    r,
                    n,
                    i,
                    c,
                    u,
                    d,
                    h,
                    f,
                    m,
                    p,
                    g,
                    y,
                    S,
                    C,
                    _ = e.avatarRef,
                    P = e.avatarSize,
                    M = void 0 === P ? [42, 22] : P,
                    O = e.colorScheme,
                    L = void 0 === O ? 'light' : O,
                    D = e.dialogClassName,
                    N = e.dialogRef,
                    R = e.dir,
                    j = void 0 === R ? 'ltr' : R,
                    W = e.env,
                    B = void 0 === W ? 'prod' : W,
                    A = e.essentialRef,
                    F = e.features,
                    U = e.fetchUserData,
                    H = e.host,
                    Y = e.iframeRef,
                    $ = e.lang,
                    V = e.onClose,
                    Q = e.onLoad,
                    z = e.onMenuItemClick,
                    q = e.onOpen,
                    G = e.onThemeChange,
                    K = e.onLocaleChange,
                    X = e.platform,
                    J = e.preload,
                    Z = void 0 !== J && J,
                    ee = e.project,
                    et = e.queryParams,
                    er = e.dynamicParams,
                    en = e.retpath,
                    ei = e.rpcHandlers,
                    ea = e.theme,
                    es = e.tld,
                    eo = e.touchBreakpointWidth,
                    el = e.userData,
                    ec = e.visible,
                    eu = void 0 !== ec && ec,
                    ed = (0, s.useRef)({}),
                    eh = (0, s.useRef)(null),
                    ef = (0, s.useRef)(null),
                    em = (0, s.useRef)(null),
                    ep =
                        ((t = void 0 === es ? 'ru' : es),
                        (0, s.useMemo)(
                            function () {
                                return I.includes(t) ? 'com.' + t : k.includes(t) ? 'co.' + t : t;
                            },
                            [t],
                        ));
                (0, o.N)(eh, _ || (0, s.createRef)()), (ef = null != N ? N : ef), (em = null != Y ? Y : em);
                var eg = (0, a.__read)((0, s.useState)(!0), 2),
                    ev = eg[0],
                    ey = eg[1],
                    eS = (0, s.useMemo)(
                        function () {
                            return b ? en || location.href : en;
                        },
                        [en],
                    ),
                    ew = (0, a.__read)((0, s.useState)(Z), 2),
                    eb = ew[0],
                    eE = ew[1],
                    ex = (0, s.useRef)({ colorScheme: L, theme: ea, retpath: eS }),
                    eT = (0, s.useMemo)(
                        function () {
                            if (H) return 'https://' + H;
                            if ('prod_yateam' === B) return 'https://user-id.yandex-team.ru';
                            if (b) {
                                var e = new URL(location.href).searchParams.get('user_id_host');
                                if (e) return 'https://' + e;
                            }
                            return 'https://yandex.' + ep;
                        },
                        [H, ep, B],
                    ),
                    eI = (0, s.useMemo)(
                        function () {
                            eb ||
                                (ex.current.colorScheme === L && ex.current.theme === ea && ex.current.retpath === eS) ||
                                (ex.current = { colorScheme: L, theme: ea, retpath: eS });
                            var e = new URL('user-id', eT);
                            if (
                                (ex.current.retpath && e.searchParams.set('encodedRetpath', encodeURIComponent(ex.current.retpath)),
                                ex.current.colorScheme && e.searchParams.set('colorScheme', ex.current.colorScheme),
                                ex.current.theme && e.searchParams.set('theme', ex.current.theme),
                                $ && e.searchParams.set('l10n', $),
                                Array.isArray(F))
                            ) {
                                var t = F.join(',');
                                e.searchParams.set('exp_flags', t);
                            }
                            for (var r in (ee && e.searchParams.set('project', ee), B && e.searchParams.set('env', B), e.searchParams.set('dir', j), et))
                                e.searchParams.set(r, et[r]);
                            for (var r in er) e.searchParams.set(r, er[r]);
                            return e.toString();
                        },
                        [eT, F, ee, et, er, L, ea, eS, eb, B, j, $],
                    );
                (0, s.useEffect)(
                    function () {
                        !eb && (Z || U) && eE(!0);
                    },
                    [eb, Z, U],
                );
                var ek = T({ platform: X, touchBreakpointWidth: eo }),
                    eC = (0, s.useCallback)(
                        function () {
                            eb || eE(!0);
                        },
                        [eb],
                    ),
                    e_ = (0, s.useMemo)(
                        function () {
                            return null === M ? null : 'number' == typeof M ? M : 'touch' === ek ? M[1] : M[0];
                        },
                        [ek, M],
                    ),
                    eP = (0, s.useCallback)(
                        function () {
                            var e;
                            null == (e = eh.current) || e.focus(), null == V || V();
                        },
                        [V],
                    ),
                    eM = (0, a.__read)((0, s.useState)(), 2),
                    eO = eM[0],
                    eL = eM[1],
                    eD = (0, a.__read)((0, s.useState)(el), 2),
                    eN = eD[0],
                    eR = eD[1];
                (0, s.useEffect)(
                    function () {
                        eR(el);
                    },
                    [el],
                );
                var ej = (0, s.useCallback)(
                    function (e) {
                        if (b) {
                            if ('desktop' === ek) return void eL(e);
                            eL(E());
                        }
                    },
                    [ek],
                );
                x({ enabled: 'touch' === ek, onHeightChange: ej });
                var eW = (0, s.useRef)(),
                    eB = ((n = (r = {
                        loading: ev,
                        iframeRef: em,
                        origin: eT,
                        rpcHandler: (0, s.useCallback)(
                            function (e, t) {
                                var r;
                                switch (e.methodCall) {
                                    case 'onInit':
                                        U && eR(e.params[0]), null == Q || Q();
                                        break;
                                    case 'onDataLoad':
                                        var n = ed.current;
                                        if ('number' == typeof n.start && 'number' != typeof n.end && eW.current) {
                                            n.end = w();
                                            var i = n.end - n.start;
                                            eW.current({ methodCall: 'onSendTimeToInteractive', params: [{ delta: i }] });
                                        }
                                    case 'updateUserHeight':
                                        ej(e.params[0].height), ey(!1);
                                        break;
                                    case 'ITEM_CLICK':
                                        var s = e.params[0];
                                        null == z || z(s.item, s, { onClose: eP });
                                        break;
                                    case 'closeUserID':
                                        null == eP || eP();
                                        break;
                                    case 'updateTheme':
                                        var o = e.params[0].theme;
                                        null == G || G(o);
                                        break;
                                    case 'updateLocale':
                                        var l = e.params[0].locale;
                                        null == K || K(l);
                                        break;
                                    default:
                                        if (!(null == ei ? void 0 : ei[e.methodCall])) return;
                                        Promise.resolve(
                                            null == (r = null == ei ? void 0 : ei[e.methodCall]) ? void 0 : r.call.apply(r, (0, a.__spread)([ei], e.params)),
                                        ).then(t);
                                }
                            },
                            [ei, z, eP, G, K, ej, eR, U, Q],
                        ),
                    }).loading),
                    (i = r.iframeRef),
                    (c = r.origin),
                    (u = r.rpcHandler),
                    (d = (0, s.useRef)([])),
                    (h = (0, s.useCallback)(
                        function (e) {
                            var t,
                                r,
                                a = JSON.stringify(e);
                            n ? d.current.push(a) : null == (r = null == (t = i.current) ? void 0 : t.contentWindow) || r.postMessage(a, '*');
                        },
                        [n, i],
                    )),
                    (f = (0, s.useCallback)(
                        function (e) {
                            var t;
                            if (e.origin === c) {
                                try {
                                    t = JSON.parse(e.data);
                                } catch (e) {
                                    return;
                                }
                                t.methodCall &&
                                    (null == u ||
                                        u((0, a.__assign)({}, t), function (e) {
                                            var r;
                                            h({
                                                returnCall: !0,
                                                params: [e],
                                                resultCallbackIndex: (null == (r = t.resultCallbackIndex) ? void 0 : r.__callbackId) || -1,
                                            });
                                        }));
                            }
                        },
                        [c, u, h],
                    )),
                    (0, s.useEffect)(
                        function () {
                            return (
                                window.addEventListener('message', f),
                                function () {
                                    window.removeEventListener('message', f);
                                }
                            );
                        },
                        [f],
                    ),
                    (0, s.useEffect)(
                        function () {
                            i &&
                                !n &&
                                0 !== d.current.length &&
                                (d.current.forEach(function (e) {
                                    var t, r;
                                    null == (r = null == (t = i.current) ? void 0 : t.contentWindow) || r.postMessage(e, '*');
                                }),
                                (d.current = []));
                        },
                        [n, i],
                    ),
                    { sendMessage: h }).sendMessage;
                (eW.current = eB),
                    (0, s.useEffect)(
                        function () {
                            eB({ methodCall: 'updateRetpath', params: [{ retpath: eS }] });
                        },
                        [eS, eB],
                    ),
                    (0, s.useEffect)(
                        function () {
                            eB({ methodCall: 'onParamsChange', params: [(0, a.__assign)({}, er)] });
                        },
                        [er, eB],
                    ),
                    (0, s.useEffect)(
                        function () {
                            eB({ methodCall: 'updateTheme', params: [{ colorScheme: L, theme: ea }] });
                        },
                        [L, eB, ea],
                    );
                var eA = (0, s.useCallback)(
                        function (e) {
                            eB({ methodCall: 'focusFirst', params: [{ fromKeyboard: e }] });
                        },
                        [eB],
                    ),
                    eF = (0, s.useCallback)(
                        function () {
                            eu ? (eA(!0), eP()) : (eb || eE(!0), eA(!1), null == q || q());
                        },
                        [eA, q, eb, eu, eP],
                    );
                (p = (m = {
                    visible: eu,
                    onClose: eP,
                    essentialRefs: (0, s.useMemo)(
                        function () {
                            var e = [ef, eh];
                            return A && e.push(A), e;
                        },
                        [ef, eh, A],
                    ),
                }).visible),
                    (g = m.onClose),
                    (y = m.essentialRefs),
                    (S = m.unsafe_strategy),
                    ((C = (0, s.useRef)({ onClose: g, refs: y, closeStrategy: void 0 === S ? 'pressdown' : S })).current.onClose = g),
                    (C.current.refs = y),
                    (0, s.useEffect)(
                        function () {
                            if (p) {
                                var e = C.current;
                                return (
                                    v.addOverlay(e),
                                    function () {
                                        v.removeOverlay(e);
                                    }
                                );
                            }
                        },
                        [p],
                    ),
                    (0, l.E)(
                        function () {
                            var e;
                            eu && (null != (e = ed.current).start || (e.start = w()));
                        },
                        [eu],
                    );
                var eU = { colorScheme: L, height: eO, loading: ev, preload: eb, ref: em, src: eI, width: 'desktop' === ek ? 320 : '100%' },
                    eH = { className: D, colorScheme: L, platform: ek, ref: ef, visible: eu, onClose: eP, loading: ev };
                return {
                    avatarProps: { avatarSize: e_, env: B, onClick: eF, onPointerEnter: eC, platform: ek, ref: eh, retpath: eS, userData: eN, visible: eu, tld: ep },
                    contentProps: eU,
                    dialogProps: eH,
                };
            }
        },
        86180: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { useUserID: () => n.w });
            var n = r(85438);
        },
        88249: (e) => {
            function t() {}
            (t.prototype = {
                on: function (e, t, r) {
                    var n = this.e || (this.e = {});
                    return (n[e] || (n[e] = [])).push({ fn: t, ctx: r }), this;
                },
                once: function (e, t, r) {
                    var n = this;
                    function i() {
                        n.off(e, i), t.apply(r, arguments);
                    }
                    return (i._ = t), this.on(e, i, r);
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, i = r.length; n < i; n++)
                        r[n].fn.apply(r[n].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var r = this.e || (this.e = {}),
                        n = r[e],
                        i = [];
                    if (n && t) for (var a = 0, s = n.length; a < s; a++) n[a].fn !== t && n[a].fn._ !== t && i.push(n[a]);
                    return i.length ? (r[e] = i) : delete r[e], this;
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t);
        },
        89957: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let n = (0, r(1987).createAsyncLocalStorage)();
        },
        90110: (e, t, r) => {
            'use strict';
            t.H = void 0;
            var n = r(30782),
                i = r(55178),
                a = r(70679),
                s = n.__importStar(r(78657));
            t.H = function (e) {
                var t = e.enabled,
                    r = e.containerRef,
                    n = (0, i.useRef)(null),
                    o = (0, i.useRef)(!1);
                (0, a.useIsomorphicLayoutEffect)(function () {
                    var e = r ? r.current : null;
                    n.current !== e && (t && o.current && (s.unlock(n.current), s.lock(e)), (n.current = e));
                }),
                    (0, a.useIsomorphicLayoutEffect)(
                        function () {
                            if (t)
                                return (
                                    (o.current = !0),
                                    s.lock(n.current),
                                    function () {
                                        (o.current = !1), s.unlock(n.current);
                                    }
                                );
                        },
                        [t],
                    );
            };
        },
        95939: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => s });
            let n =
                !(function (e, t = !1) {
                    if (!e) return !1;
                    let r = t ? Function.prototype.toString.call(e) : e.toString ? e.toString() : '';
                    return /\[native code\]/.test(r) || /\/\* source code not available \*\//.test(r);
                })(Math.random) || Math.random() === Math.random();
            var i = r(42636);
            let a = ((0, i.x3)() * (0, i.lh)()) % 0x7fffffff,
                s = n
                    ? function () {
                          return ((a = (16807 * a) % 0x7fffffff) - 1) / 0x7ffffffe;
                      }
                    : function () {
                          return Math.random();
                      };
        },
        98561: () => {},
        99448: (e, t, r) => {
            'use strict';
            e.exports = r(183);
        },
    },
]);
