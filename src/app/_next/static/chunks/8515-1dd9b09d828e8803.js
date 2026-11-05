(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8515],
    {
        6087: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => i.a });
            var s = n(76124),
                i = n.n(s);
        },
        7833: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => u });
            var s = n(88800),
                i = n(53548),
                o = n(63582),
                r = n(99875),
                a = n(66109),
                l = n(245);
            let u = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: n, objectPosY: o, objectType: u }) => {
                    let c = (0, l.N)(),
                        d = (0, i.useContext)(r.p)?.loadedSession,
                        p = [u, t, n, o].join(':'),
                        [h, f] = (0, i.useState)(() => ({ client: c, identity: p, blockSession: d, viewSession: c.createBlockViewSession() }));
                    (h.client !== c || h.identity !== p || h.blockSession !== d) &&
                        f({ client: c, identity: p, blockSession: d, viewSession: c.createBlockViewSession() });
                    let m = (0, i.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: n, objectPosY: o, objectType: u }, viewSession: h.viewSession }),
                        [t, n, o, u, h.viewSession],
                    );
                    return (0, s.jsx)(a.l, { value: m, children: e });
                },
            );
        },
        17017: (e, t, n) => {
            'use strict';
            var s;
            (n.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        19840: (e, t, n) => {
            'use strict';
            (n.d(t, { G: () => i }), n(46606));
            var s = n(91136);
            class i extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        20603: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }));
            let s = (0, n(94177).createAsyncLocalStorage)();
        },
        21867: () => {},
        22681: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => c });
            var s = n(53548),
                i = n(99875),
                o = n(36236),
                r = n(66109),
                a = n(53534),
                l = n(79045),
                u = n(7695);
            let c = () => {
                let e = (0, s.useContext)(a.k),
                    t = e?.isReady ? e.scope : null,
                    n = (0, s.useContext)(l.F) ?? u.Ve,
                    c = (0, s.useContext)(o.S),
                    d = (0, s.useContext)(i.p),
                    p = (0, s.useContext)(r.l),
                    h = (0, s.useMemo)(() => (t && d ? { block: d.scope, filter: c, object: p?.scope ?? null, screen: t, tab: n } : null), [d, c, p, t, n]);
                return (0, s.useMemo)(() => (d && h ? { block: d, object: p, snapshot: h } : null), [d, p, h]);
            };
        },
        29885: (e, t, n) => {
            'use strict';
            n.d(t, { T: () => i });
            var s = function () {
                    return (s =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, s = arguments.length; n < s; n++)
                                for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
                i = (function () {
                    function e(e, t, n) {
                        var i = this;
                        ((this.endVal = t),
                            (this.options = n),
                            (this.version = '2.8.1'),
                            (this.defaults = {
                                startVal: 0,
                                decimalPlaces: 0,
                                duration: 2,
                                useEasing: !0,
                                useGrouping: !0,
                                useIndianSeparators: !1,
                                smartEasingThreshold: 999,
                                smartEasingAmount: 333,
                                separator: ',',
                                decimal: '.',
                                prefix: '',
                                suffix: '',
                                enableScrollSpy: !1,
                                scrollSpyDelay: 200,
                                scrollSpyOnce: !1,
                            }),
                            (this.finalEndVal = null),
                            (this.useEasing = !0),
                            (this.countDown = !1),
                            (this.error = ''),
                            (this.startVal = 0),
                            (this.paused = !0),
                            (this.once = !1),
                            (this.count = function (e) {
                                i.startTime || (i.startTime = e);
                                var t = e - i.startTime;
                                ((i.remaining = i.duration - t),
                                    i.useEasing
                                        ? i.countDown
                                            ? (i.frameVal = i.startVal - i.easingFn(t, 0, i.startVal - i.endVal, i.duration))
                                            : (i.frameVal = i.easingFn(t, i.startVal, i.endVal - i.startVal, i.duration))
                                        : (i.frameVal = i.startVal + (i.endVal - i.startVal) * (t / i.duration)));
                                var n = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
                                ((i.frameVal = n ? i.endVal : i.frameVal),
                                    (i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces))),
                                    i.printValue(i.frameVal),
                                    t < i.duration
                                        ? (i.rAF = requestAnimationFrame(i.count))
                                        : null !== i.finalEndVal
                                          ? i.update(i.finalEndVal)
                                          : i.options.onCompleteCallback && i.options.onCompleteCallback());
                            }),
                            (this.formatNumber = function (e) {
                                var t,
                                    n,
                                    s,
                                    o = (Math.abs(e).toFixed(i.options.decimalPlaces) + '').split('.');
                                if (((t = o[0]), (n = o.length > 1 ? i.options.decimal + o[1] : ''), i.options.useGrouping)) {
                                    s = '';
                                    for (var r = 3, a = 0, l = 0, u = t.length; l < u; ++l)
                                        (i.options.useIndianSeparators && 4 === l && ((r = 2), (a = 1)),
                                            0 !== l && a % r == 0 && (s = i.options.separator + s),
                                            a++,
                                            (s = t[u - l - 1] + s));
                                    t = s;
                                }
                                return (
                                    i.options.numerals &&
                                        i.options.numerals.length &&
                                        ((t = t.replace(/[0-9]/g, function (e) {
                                            return i.options.numerals[+e];
                                        })),
                                        (n = n.replace(/[0-9]/g, function (e) {
                                            return i.options.numerals[+e];
                                        }))),
                                    (e < 0 ? '-' : '') + i.options.prefix + t + n + i.options.suffix
                                );
                            }),
                            (this.easeOutExpo = function (e, t, n, s) {
                                return (n * (1 - Math.pow(2, (-10 * e) / s)) * 1024) / 1023 + t;
                            }),
                            (this.options = s(s({}, this.defaults), n)),
                            (this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber),
                            (this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo),
                            (this.startVal = this.validateValue(this.options.startVal)),
                            (this.frameVal = this.startVal),
                            (this.endVal = this.validateValue(t)),
                            (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
                            this.resetDuration(),
                            (this.options.separator = String(this.options.separator)),
                            (this.useEasing = this.options.useEasing),
                            '' === this.options.separator && (this.options.useGrouping = !1),
                            (this.el = 'string' == typeof e ? document.getElementById(e) : e),
                            this.el ? this.printValue(this.startVal) : (this.error = '[CountUp] target is null or undefined'),
                            'undefined' != typeof window &&
                                this.options.enableScrollSpy &&
                                (this.error
                                    ? console.error(this.error, e)
                                    : ((window.onScrollFns = window.onScrollFns || []),
                                      window.onScrollFns.push(function () {
                                          return i.handleScroll(i);
                                      }),
                                      (window.onscroll = function () {
                                          window.onScrollFns.forEach(function (e) {
                                              return e();
                                          });
                                      }),
                                      this.handleScroll(this))));
                    }
                    return (
                        (e.prototype.handleScroll = function (e) {
                            if (e && window && !e.once) {
                                var t = window.innerHeight + window.scrollY,
                                    n = e.el.getBoundingClientRect(),
                                    s = n.top + window.pageYOffset,
                                    i = n.top + n.height + window.pageYOffset;
                                i < t && i > window.scrollY && e.paused
                                    ? ((e.paused = !1),
                                      setTimeout(function () {
                                          return e.start();
                                      }, e.options.scrollSpyDelay),
                                      e.options.scrollSpyOnce && (e.once = !0))
                                    : (window.scrollY > i || s > t) && !e.paused && e.reset();
                            }
                        }),
                        (e.prototype.determineDirectionAndSmartEasing = function () {
                            var e = this.finalEndVal ? this.finalEndVal : this.endVal;
                            if (((this.countDown = this.startVal > e), Math.abs(e - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing)) {
                                this.finalEndVal = e;
                                var t = this.countDown ? 1 : -1;
                                ((this.endVal = e + t * this.options.smartEasingAmount), (this.duration = this.duration / 2));
                            } else ((this.endVal = e), (this.finalEndVal = null));
                            null !== this.finalEndVal ? (this.useEasing = !1) : (this.useEasing = this.options.useEasing);
                        }),
                        (e.prototype.start = function (e) {
                            this.error ||
                                (this.options.onStartCallback && this.options.onStartCallback(),
                                e && (this.options.onCompleteCallback = e),
                                this.duration > 0
                                    ? (this.determineDirectionAndSmartEasing(), (this.paused = !1), (this.rAF = requestAnimationFrame(this.count)))
                                    : this.printValue(this.endVal));
                        }),
                        (e.prototype.pauseResume = function () {
                            (this.paused
                                ? ((this.startTime = null),
                                  (this.duration = this.remaining),
                                  (this.startVal = this.frameVal),
                                  this.determineDirectionAndSmartEasing(),
                                  (this.rAF = requestAnimationFrame(this.count)))
                                : cancelAnimationFrame(this.rAF),
                                (this.paused = !this.paused));
                        }),
                        (e.prototype.reset = function () {
                            (cancelAnimationFrame(this.rAF),
                                (this.paused = !0),
                                this.resetDuration(),
                                (this.startVal = this.validateValue(this.options.startVal)),
                                (this.frameVal = this.startVal),
                                this.printValue(this.startVal));
                        }),
                        (e.prototype.update = function (e) {
                            (cancelAnimationFrame(this.rAF),
                                (this.startTime = null),
                                (this.endVal = this.validateValue(e)),
                                this.endVal !== this.frameVal &&
                                    ((this.startVal = this.frameVal),
                                    null == this.finalEndVal && this.resetDuration(),
                                    (this.finalEndVal = null),
                                    this.determineDirectionAndSmartEasing(),
                                    (this.rAF = requestAnimationFrame(this.count))));
                        }),
                        (e.prototype.printValue = function (e) {
                            var t;
                            if (this.el) {
                                var n = this.formattingFn(e);
                                (null == (t = this.options.plugin) ? void 0 : t.render)
                                    ? this.options.plugin.render(this.el, n)
                                    : 'INPUT' === this.el.tagName
                                      ? (this.el.value = n)
                                      : 'text' === this.el.tagName || 'tspan' === this.el.tagName
                                        ? (this.el.textContent = n)
                                        : (this.el.innerHTML = n);
                            }
                        }),
                        (e.prototype.ensureNumber = function (e) {
                            return 'number' == typeof e && !isNaN(e);
                        }),
                        (e.prototype.validateValue = function (e) {
                            var t = Number(e);
                            return this.ensureNumber(t) ? t : ((this.error = '[CountUp] invalid start or end value: '.concat(e)), null);
                        }),
                        (e.prototype.resetDuration = function () {
                            ((this.startTime = null), (this.duration = 1e3 * Number(this.options.duration)), (this.remaining = this.duration));
                        }),
                        e
                    );
                })();
        },
        33979: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => l });
            var s = n(53548),
                i = n(63582),
                o = n(245),
                r = n(22681),
                a = n(56374);
            let l = (0, i.n)({ event: 'LandingBlock.Started', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, r.w)(),
                    n = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)(() => {
                    n?.started();
                });
            });
        },
        37523: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => c });
            var s = n(88800),
                i = n(53548),
                o = n(63582),
                r = n(53534),
                a = n(99875),
                l = n(245);
            let u = (e, t, n) => {
                    let s = e.createBlockViewSession(),
                        i = !1;
                    return { claimLoadedSession: () => (i ? null : ((i = !0), s)), client: e, identity: t, loadedSession: s, screenSession: n };
                },
                c = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: c, children: d, objectsCount: p }) => {
                        let h = (0, l.N)(),
                            f = (0, i.useContext)(r.k)?.session,
                            m = [e, c, n, o].join(':'),
                            [b, g] = (0, i.useState)(() => u(h, m, f));
                        (b.client !== h || b.identity !== m || b.screenSession !== f) && g(u(h, m, f));
                        let S = (0, i.useMemo)(
                            () => ({
                                claimLoadedSession: b.claimLoadedSession,
                                loadedSession: b.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: c, objectsCount: p },
                            }),
                            [e, t, n, o, c, p, b.claimLoadedSession, b.loadedSession],
                        );
                        return (0, s.jsx)(a.p, { value: S, children: d });
                    },
                );
        },
        37531: (e, t, n) => {
            'use strict';
            function s(e) {
                let { reason: t, children: n } = e;
                return n;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }),
                n(36271));
        },
        46606: (e, t, n) => {
            'use strict';
            var s;
            (n.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        49784: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => l });
            var s = n(53548),
                i = n(63582),
                o = n(89846),
                r = n(245),
                a = n(22681);
            let l = (0, i.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, s.useRef)(!1),
                    n = (0, r.N)(),
                    { hash: i } = (0, o.g)(),
                    l = (0, a.w)(),
                    u = (0, s.useMemo)(() => (l ? n.createBlockReporter(l.snapshot) : null), [n, l]);
                (0, s.useEffect)(() => {
                    e && l && u && !t.current && u.loaded({ objectsCount: l.snapshot.block.objectsCount, viewUuid: l.block.loadedSession.start() }) && (t.current = !0);
                }, [e, i, u, l]);
            });
        },
        60527: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let s = n(88800),
                i = n(53548),
                o = n(37531);
            function r(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(68326);
            let a = { loader: () => Promise.resolve(r(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...a, ...e },
                        n = (0, i.lazy)(() => t.loader().then(r)),
                        l = t.loading;
                    function u(e) {
                        let r = l ? (0, s.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            a = !t.ssr || !!t.loading,
                            u = a ? i.Suspense : i.Fragment,
                            c = t.ssr
                                ? (0, s.jsxs)(s.Fragment, { children: [null, (0, s.jsx)(n, { ...e })] })
                                : (0, s.jsx)(o.BailoutToCSR, { reason: 'next/dynamic', children: (0, s.jsx)(n, { ...e }) });
                        return (0, s.jsx)(u, { ...(a ? { fallback: r } : {}), children: c });
                    }
                    return ((u.displayName = 'LoadableComponent'), u);
                };
        },
        62414: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => l });
            var s = n(53548),
                i = n(63582),
                o = n(245),
                r = n(22681),
                a = n(56374);
            let l = (0, i.n)({ event: 'LandingBlock.Showed/Hidden', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e = {}) => {
                let { createObserver: t, delayMs: n = 1e3, enabled: i = !0, onVisibilityChange: l, threshold: u = 0.8 } = e,
                    c = (0, o.N)(),
                    d = (0, r.w)(),
                    p = d?.object,
                    h = d?.block.claimLoadedSession,
                    f = (0, s.useMemo)(() => (d ? c.createBlockReporter(d.snapshot) : null), [c, d]),
                    m = (0, s.useRef)(t),
                    b = (0, s.useRef)(l),
                    [g, S] = (0, s.useState)(null),
                    E = (0, a.c)((e) => S(e));
                ((m.current = t), (b.current = l));
                let v = !!t;
                return (
                    (0, s.useEffect)(() => {
                        if (!i || !g || !p || 'string' != typeof p.scope.objectId || !h || !f || (!v && !g.ownerDocument.defaultView?.IntersectionObserver)) return;
                        let e = !1,
                            t = null,
                            s = null,
                            o = () => {
                                s && (clearTimeout(s), (s = null));
                                let e = t?.hide();
                                (p.activeViewSession === t && (p.activeViewSession = null), (t = null), e && (f.hidden({ viewUuid: e }), b.current?.(!1)));
                            },
                            r = (
                                m.current ??
                                ((e, t, n) => {
                                    let s = n.ownerDocument.defaultView?.IntersectionObserver;
                                    if (!s) throw Error('IntersectionObserver is not available');
                                    return new s(e, t);
                                })
                            )(
                                (i) => {
                                    e ||
                                        i.forEach((e) => {
                                            if (!(e.isIntersecting && e.intersectionRatio >= u)) return void o();
                                            s ||
                                                t?.isVisible ||
                                                (s = setTimeout(() => {
                                                    ((s = null), (t ??= h() ?? p.viewSession), (p.activeViewSession = t));
                                                    let e = t.show();
                                                    e && (f.showed({ viewUuid: e }), b.current?.(!0));
                                                }, n));
                                        });
                                },
                                { threshold: u },
                                g,
                            );
                        return (
                            r.observe(g),
                            () => {
                                ((e = !0), o(), r.unobserve(g), r.disconnect());
                            }
                        );
                    }, [g, h, p, n, i, v, u, f]),
                    E
                );
            });
        },
        68326: (e, t, n) => {
            'use strict';
            function s(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }),
                n(88800),
                n(53405),
                n(96669),
                n(86900));
        },
        70621: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => l });
            var s = n(53548),
                i = n(63582),
                o = n(245),
                r = n(22681),
                a = n(56374);
            let l = (0, i.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, r.w)(),
                    n = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && n && n.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        76124: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let s = n(70405)._(n(60527));
            function i(e, t) {
                var n;
                let i = {};
                'function' == typeof e && (i.loader = e);
                let o = { ...i, ...t };
                return (0, s.default)({ ...o, modules: null == (n = o.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        76903: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => d });
            var s = n(88800),
                i = n(53548),
                o = n(53534),
                r = n(63582),
                a = n(245);
            let l = new WeakMap();
            class u {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let n =
                        l.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                n = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                n();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (n(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (l.set(t, n), (this.queue = n));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var c = n(87999);
            let d = (0, r.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, a.N)(),
                        r = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === c.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, d] = (0, i.useState)(() => {
                            let e = new u(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: r, scope: r ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== n ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let i = new u(n.createScreenSession().screenViewUuid, n),
                            a = { client: n, input: t, isReady: r, scope: r ? n.createScreenScope(t, i) : null, session: i };
                        return (d(a), (0, s.jsx)(o.k, { value: a, children: e }));
                    }
                    if (
                        l.isReady !== r ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let i = { ...l, input: t, isReady: r, scope: r ? n.createScreenScope(t, l.session) : null };
                        return (d(i), (0, s.jsx)(o.k, { value: i, children: e }));
                    }
                    return (0, s.jsx)(o.k, { value: l, children: e });
                },
            );
        },
        80643: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => l });
            var s = n(53548),
                i = n(63582),
                o = n(245),
                r = n(22681),
                a = n(56374);
            let l = (0, i.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, r.w)(),
                    n = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object &&
                        n &&
                        n.navigated({ ...e, from: e.from ?? t.snapshot.screen.pageId, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        89916: (e, t, n) => {
            'use strict';
            n.d(t, { GX: () => o.G, X1: () => s.X, m5: () => i.m });
            var s = n(46606),
                i = n(91136),
                o = n(19840);
            n(17017);
        },
        91136: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => i });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: n = 'E_INTERNAL', data: i = {}, ...o } = t,
                        r = e || 'Internal error';
                    (super(r, o), (this.message = r), (this.code = n), (this.data = i), (this.stack = Error(r).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class i extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    (super(e, { code: t, ...n }), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        94177: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    bindSnapshot: function () {
                        return r;
                    },
                    createAsyncLocalStorage: function () {
                        return o;
                    },
                    createSnapshot: function () {
                        return a;
                    },
                }));
            let n = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class s {
                disable() {
                    throw n;
                }
                getStore() {}
                run() {
                    throw n;
                }
                exit() {
                    throw n;
                }
                enterWith() {
                    throw n;
                }
                static bind(e) {
                    return e;
                }
            }
            let i = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function o() {
                return i ? new i() : new s();
            }
            function r(e) {
                return i ? i.bind(e) : s.bind(e);
            }
            function a() {
                return i
                    ? i.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        96669: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return s.workAsyncStorageInstance;
                    },
                }));
            let s = n(20603);
        },
    },
]);
