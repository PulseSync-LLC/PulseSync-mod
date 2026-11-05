(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1848, 4975],
    {
        6087: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => r.a });
            var s = n(76124),
                r = n.n(s);
        },
        7833: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => c });
            var s = n(88800),
                r = n(53548),
                a = n(63582),
                o = n(99875),
                l = n(66109),
                i = n(245);
            let c = (0, a.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: n, objectPosY: a, objectType: c }) => {
                    let u = (0, i.N)(),
                        d = (0, r.useContext)(o.p)?.loadedSession,
                        p = [c, t, n, a].join(':'),
                        [m, f] = (0, r.useState)(() => ({ client: u, identity: p, blockSession: d, viewSession: u.createBlockViewSession() }));
                    (m.client !== u || m.identity !== p || m.blockSession !== d) &&
                        f({ client: u, identity: p, blockSession: d, viewSession: u.createBlockViewSession() });
                    let g = (0, r.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: n, objectPosY: a, objectType: c }, viewSession: m.viewSession }),
                        [t, n, a, c, m.viewSession],
                    );
                    return (0, s.jsx)(l.l, { value: g, children: e });
                },
            );
        },
        14567: (e, t) => {
            (e.exports = function (e, t, s, r) {
                return JSON.stringify(e, n(t, r), s);
            }).getSerialize = n;
            function n(e, t) {
                var n = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return n[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, n.indexOf(t)).join('.') + ']';
                        }),
                    function (r, a) {
                        if (n.length > 0) {
                            var o = n.indexOf(this);
                            (~o ? n.splice(o + 1) : n.push(this), ~o ? s.splice(o, 1 / 0, r) : s.push(r), ~n.indexOf(a) && (a = t.call(this, r, a)));
                        } else n.push(a);
                        return null == e ? a : e.call(this, r, a);
                    }
                );
            }
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
            (n.d(t, { G: () => r }), n(46606));
            var s = n(91136);
            class r extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
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
        23877: (e, t, n) => {
            'use strict';
            var s;
            (n.d(t, { Q: () => r, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let r = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
        },
        35606: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => s });
            let s = (0, n(53548).createContext)(void 0);
        },
        36236: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => s });
            let s = (0, n(53548).createContext)(null);
        },
        37523: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => u });
            var s = n(88800),
                r = n(53548),
                a = n(63582),
                o = n(53534),
                l = n(99875),
                i = n(245);
            let c = (e, t, n) => {
                    let s = e.createBlockViewSession(),
                        r = !1;
                    return { claimLoadedSession: () => (r ? null : ((r = !0), s)), client: e, identity: t, loadedSession: s, screenSession: n };
                },
                u = (0, a.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: a, blockType: u, children: d, objectsCount: p }) => {
                        let m = (0, i.N)(),
                            f = (0, r.useContext)(o.k)?.session,
                            g = [e, u, n, a].join(':'),
                            [b, O] = (0, r.useState)(() => c(m, g, f));
                        (b.client !== m || b.identity !== g || b.screenSession !== f) && O(c(m, g, f));
                        let E = (0, r.useMemo)(
                            () => ({
                                claimLoadedSession: b.claimLoadedSession,
                                loadedSession: b.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: a, blockType: u, objectsCount: p },
                            }),
                            [e, t, n, a, u, p, b.claimLoadedSession, b.loadedSession],
                        );
                        return (0, s.jsx)(l.p, { value: E, children: d });
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
        44084: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => a });
            var s = n(23877),
                r = n(74021);
            class a extends r.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= s.c.INFO && this.logToConsole(s.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= s.c.DEBUG && this.logToConsole(s.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= s.c.TRACE && this.logToConsole(s.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= s.c.WARNING && this.logToConsole(s.c.WARNING, e, t), this.sendToErrorBooster(s.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= s.c.ERROR && this.logToConsole(s.c.ERROR, e, t), this.sendToErrorBooster(s.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(s.c.INFO, e, t);
                }
                logToConsole(e, t, n) {
                    if (this.disableLogToConsole) return;
                    let r = s.Q[e];
                    console[r](...this.formatMessage(e, t, n));
                }
                sendToErrorBooster(e, t, n) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: n ? this.obfuscateData({ ...this.additionalData, ...n }) : {} } });
                }
            }
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
        47149: (e, t, n) => {
            'use strict';
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: a = r.DomainObjectType.NonApplicable,
                        mainObjectId: o = '',
                        tabId: l = '',
                        tabPos: i = 0,
                        isTabSelectedByDefault: c = !1,
                        viewUuid: u = '',
                    } = t,
                    d = (0, s.makeMetaParams)(1),
                    p = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: o, tabId: l, tabPos: i, isTabSelectedByDefault: c, viewUuid: u, _meta: d };
                e.trackEvent('Screen.Opened', p);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = r.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: p = '',
                        } = t,
                        m = (0, s.makeMetaParams)(3),
                        f = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Opened', f);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = r.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: l = '',
                            tabPos: i = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, s.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: o, tabId: l, tabPos: i, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = r.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                        } = t,
                        p = (0, s.makeMetaParams)(3),
                        m = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', m);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = r.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: p = '',
                        } = t,
                        m = (0, s.makeMetaParams)(4),
                        f = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Closed', f);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = r.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: l = '',
                            tabPos: i = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, s.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: o, tabId: l, tabPos: i, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Started', d);
                }),
                (t.BP = function (e, t) {
                    let {
                            entityPosX: n = 1,
                            entityPosY: a = 1,
                            objectPosX: o = 0,
                            objectPosY: l = 0,
                            streamStartTrigger: i = r.StreamStartTriggers.UserAction,
                            pageStyle: c = r.PageStyles.Fullscreen,
                            pagePlacement: u = r.PagePlacements.Fullscreen,
                            skeletonId: d = '',
                            mainObjectType: p = r.DomainObjectType.NonApplicable,
                            mainObjectId: m = '',
                            tabId: f = '',
                            tabPos: g = 0,
                            isTabSelectedByDefault: b = !1,
                        } = t,
                        O = (0, s.makeMetaParams)(5),
                        E = {
                            ...t,
                            entityPosX: n,
                            entityPosY: a,
                            objectPosX: o,
                            objectPosY: l,
                            streamStartTrigger: i,
                            pageStyle: c,
                            pagePlacement: u,
                            skeletonId: d,
                            mainObjectType: p,
                            mainObjectId: m,
                            tabId: f,
                            tabPos: g,
                            isTabSelectedByDefault: b,
                            _meta: O,
                        };
                    e.trackEvent('Screen.Started', E);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = r.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: l = '',
                            tabPos: i = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, s.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: o, tabId: l, tabPos: i, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Navigated', d);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = r.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            deepLink: p = '',
                        } = t,
                        m = (0, s.makeMetaParams)(4),
                        f = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            deepLink: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Navigated', f);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = r.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: l = '',
                            tabPos: i = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, s.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: o, tabId: l, tabPos: i, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', d);
                }),
                (t.rw = function (e, t) {
                    let {
                            pageStyle: n = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = r.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                        } = t,
                        p = (0, s.makeMetaParams)(4),
                        m = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            _meta: p,
                        };
                    e.trackEvent('Screen.ActionPerformed', m);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = r.PageStyles.Fullscreen,
                            pagePlacement: a = r.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = r.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                        } = t,
                        c = (0, s.makeMetaParams)(1),
                        u = { ...t, pageStyle: n, pagePlacement: a, skeletonId: o, mainObjectType: l, mainObjectId: i, _meta: c };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let s = n(59203),
                r = n(87999);
        },
        53534: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => s });
            let s = (0, n(53548).createContext)(null);
        },
        57249: (e, t, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        59203: (e, t) => {
            'use strict';
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (s, r) => {
                            let a = { ...r, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(s, a);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
        59791: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => s });
            let s = (0, n(53548).createContext)(null);
        },
        60527: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let s = n(88800),
                r = n(53548),
                a = n(37531);
            function o(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(68326);
            let l = { loader: () => Promise.resolve(o(() => null)), loading: null, ssr: !0 },
                i = function (e) {
                    let t = { ...l, ...e },
                        n = (0, r.lazy)(() => t.loader().then(o)),
                        i = t.loading;
                    function c(e) {
                        let o = i ? (0, s.jsx)(i, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            l = !t.ssr || !!t.loading,
                            c = l ? r.Suspense : r.Fragment,
                            u = t.ssr
                                ? (0, s.jsxs)(s.Fragment, { children: [null, (0, s.jsx)(n, { ...e })] })
                                : (0, s.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, s.jsx)(n, { ...e }) });
                        return (0, s.jsx)(c, { ...(l ? { fallback: o } : {}), children: u });
                    }
                    return ((c.displayName = 'LoadableComponent'), c);
                };
        },
        63582: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => r, n: () => s });
            let s = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e }),
                r = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e });
        },
        64543: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => c });
            var s = n(53548),
                r = n(99875),
                a = n(36236),
                o = n(66109),
                l = n(53534),
                i = n(79045);
            let c = () => {
                let e = (0, s.useContext)(r.p),
                    t = (0, s.useContext)(a.S),
                    n = (0, s.useContext)(o.l),
                    c = (0, s.useContext)(l.k),
                    u = c?.isReady ? c.scope : null,
                    d = (0, s.useContext)(i.F),
                    p = e?.scope ?? null,
                    m = n?.scope ?? null;
                return (0, s.useMemo)(() => ({ block: p, filter: t, object: m, screen: u, tab: d }), [p, t, m, u, d]);
            };
        },
        66109: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => s });
            let s = (0, n(53548).createContext)(null);
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
        74021: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => i });
            var s = n(14567),
                r = n(243),
                a = n(62151),
                o = n(33396);
            let l = () => 'SECRET';
            class i {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: n }) {
                    ((this.maxLogLevel = t), (this.secureFields = n), (this.additionalData = e));
                }
                formatMessage(e, t, n = {}, r) {
                    let a,
                        l = String(t instanceof Error && t.stack ? t.stack : t),
                        i = (0, o.A)({ ...this.additionalData, ...n });
                    return (Object.keys(i).length && (a = this.obfuscateData(i)), r) ? `${l} ${s(a)}` : [l, a];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, r.A)(e, t) && (0, a.A)(e, t, l());
                    return e;
                }
            }
        },
        76124: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let s = n(70405)._(n(60527));
            function r(e, t) {
                var n;
                let r = {};
                'function' == typeof e && (r.loader = e);
                let a = { ...r, ...t };
                return (0, s.default)({ ...a, modules: null == (n = a.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        76903: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => d });
            var s = n(88800),
                r = n(53548),
                a = n(53534),
                o = n(63582),
                l = n(245);
            let i = new WeakMap();
            class c {
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
                        i.get(t) ??
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
                    (i.set(t, n), (this.queue = n));
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
            var u = n(87999);
            let d = (0, o.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, l.N)(),
                        o = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [i, d] = (0, r.useState)(() => {
                            let e = new c(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: o, scope: o ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        i.client !== n ||
                        i.input.pageId !== t.pageId ||
                        i.input.skeletonId !== t.skeletonId ||
                        i.input.mainObjectType !== t.mainObjectType ||
                        i.input.mainObjectId !== t.mainObjectId
                    ) {
                        let r = new c(n.createScreenSession().screenViewUuid, n),
                            l = { client: n, input: t, isReady: o, scope: o ? n.createScreenScope(t, r) : null, session: r };
                        return (d(l), (0, s.jsx)(a.k, { value: l, children: e }));
                    }
                    if (
                        i.isReady !== o ||
                        i.input.displayReasonId !== t.displayReasonId ||
                        i.input.pageIdForFrom !== t.pageIdForFrom ||
                        i.input.pagePlacement !== t.pagePlacement ||
                        i.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...i, input: t, isReady: o, scope: o ? n.createScreenScope(t, i.session) : null };
                        return (d(r), (0, s.jsx)(a.k, { value: r, children: e }));
                    }
                    return (0, s.jsx)(a.k, { value: i, children: e });
                },
            );
        },
        79045: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => s });
            let s = (0, n(53548).createContext)(null);
        },
        84423: (e, t, n) => {
            'use strict';
            n.d(t, { s: () => a });
            var s = n(53548),
                r = n(59791);
            let a = () => {
                let e = (0, s.useContext)(r.I);
                return (0, s.useMemo)(() => (e ? { evgenInstance: e } : null), [e]);
            };
        },
        88969: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var s = n(88092),
                r = n(53548),
                a = n(84014),
                o = n(2058);
            function l(e) {
                var t = (0, o.A)(),
                    n = t.formatMessage,
                    s = t.textComponent,
                    a = void 0 === s ? r.Fragment : s,
                    l = e.id,
                    i = e.description,
                    c = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    p = e.tagName,
                    m = void 0 === p ? a : p,
                    f = n({ id: l, description: i, defaultMessage: c }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(f) ? f : [f]) : m ? r.createElement(m, null, f) : r.createElement(r.Fragment, null, f);
            }
            l.displayName = 'FormattedMessage';
            var i = r.memo(l, function (e, t) {
                var n = e.values,
                    r = (0, s.__rest)(e, ['values']),
                    o = t.values,
                    l = (0, s.__rest)(t, ['values']);
                return (0, a.bN)(o, n) && (0, a.bN)(r, l);
            });
            i.displayName = 'MemoizedFormattedMessage';
            let c = i;
        },
        89846: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => a });
            var s = n(53548),
                r = n(35606);
            let a = () => ({ hash: (0, s.useContext)(r.m) });
        },
        89916: (e, t, n) => {
            'use strict';
            n.d(t, { GX: () => a.G, X1: () => s.X, m5: () => r.m });
            var s = n(46606),
                r = n(91136),
                a = n(19840);
            n(17017);
        },
        91136: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: n = 'E_INTERNAL', data: r = {}, ...a } = t,
                        o = e || 'Internal error';
                    (super(o, a), (this.message = o), (this.code = n), (this.data = r), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    (super(e, { code: t, ...n }), Object.setPrototypeOf(this, r.prototype));
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
                        return o;
                    },
                    createAsyncLocalStorage: function () {
                        return a;
                    },
                    createSnapshot: function () {
                        return l;
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
            let r = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function a() {
                return r ? new r() : new s();
            }
            function o(e) {
                return r ? r.bind(e) : s.bind(e);
            }
            function l() {
                return r
                    ? r.snapshot()
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
        99875: (e, t, n) => {
            'use strict';
            n.d(t, { p: () => s });
            let s = (0, n(53548).createContext)(null);
        },
    },
]);
