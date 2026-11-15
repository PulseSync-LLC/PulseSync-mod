'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1384, 4827],
    {
        245: (t, e, r) => {
            r.d(e, { N: () => i });
            var n = r(53548),
                o = r(59791);
            let i = () => {
                let t = (0, n.useContext)(o.I);
                if (!t) throw Error('AnalyticsProvider is required');
                return t;
            };
        },
        7695: (t, e, r) => {
            r.d(e, { Ve: () => s, Vn: () => o, p6: () => i, w: () => n });
            let n = '',
                o = 0,
                i = !1,
                s = Object.freeze({ tabId: n, tabPos: 0, isTabSelectedByDefault: !1 });
        },
        9951: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onResult: e, onDone: r }) {
                    let n = '';
                    return (
                        (n += `var _results = new Array(${this.options.taps.length});
`),
                        (n += 'var _checkDone = function() {\n'),
                        (n += 'for(var i = 0; i < _results.length; i++) {\n'),
                        (n += 'var item = _results[i];\n'),
                        (n += 'if(item === undefined) return false;\n'),
                        (n += 'if(item.result !== undefined) {\n'),
                        (n += e('item.result')),
                        (n += 'return true;\n'),
                        (n += '}\n'),
                        (n += 'if(item.error) {\n'),
                        (n += t('item.error')),
                        (n += 'return true;\n'),
                        (n += '}\n'),
                        (n += '}\n'),
                        (n += 'return false;\n'),
                        (n += '}\n'),
                        (n += this.callTapsParallel({
                            onError: (t, e, r, n) => {
                                let o = '';
                                return (
                                    (o += `if(${t} < _results.length && ((_results.length = ${t + 1}), (_results[${t}] = { error: ${e} }), _checkDone())) {
`),
                                    (o += n(!0)),
                                    (o += '} else {\n'),
                                    (o += r()),
                                    (o += '}\n')
                                );
                            },
                            onResult: (t, e, r, n) => {
                                let o = '';
                                return (
                                    (o += `if(${t} < _results.length && (${e} !== undefined && (_results.length = ${t + 1}), (_results[${t}] = { result: ${e} }), _checkDone())) {
`),
                                    (o += n(!0)),
                                    (o += '} else {\n'),
                                    (o += r()),
                                    (o += '}\n')
                                );
                            },
                            onTap: (t, e, r, n) => {
                                let o = '';
                                return (
                                    t > 0 &&
                                        ((o += `if(${t} >= _results.length) {
`),
                                        (o += r()),
                                        (o += '} else {\n')),
                                    (o += e()),
                                    t > 0 && (o += '}\n'),
                                    o
                                );
                            },
                            onDone: r,
                        }))
                    );
                }
            }
            let s = new i();
            function a(t) {
                return (s.setup(this, t), s.create(t));
            }
            function u(t = [], e) {
                let r = new n(t, e);
                return ((r.constructor = u), (r.compile = a), (r._call = void 0), (r.call = void 0), r);
            }
            ((u.prototype = null), (t.exports = u));
        },
        11109: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onResult: e, resultReturns: r, onDone: n, rethrowIfPossible: o }) {
                    return this.callTapsSeries({
                        onError: (e, r) => t(r),
                        onResult: (t, r, n) => `if(${r} !== undefined) {
${e(r)};
} else {
${n()}}
`,
                        resultReturns: r,
                        onDone: n,
                        rethrowIfPossible: o,
                    });
                }
            }
            let s = new i(),
                a = () => {
                    throw Error('tapAsync is not supported on a SyncBailHook');
                },
                u = () => {
                    throw Error('tapPromise is not supported on a SyncBailHook');
                };
            function l(t) {
                return (s.setup(this, t), s.create(t));
            }
            function c(t = [], e) {
                let r = new n(t, e);
                return ((r.constructor = c), (r.tapAsync = a), (r.tapPromise = u), (r.compile = l), r);
            }
            ((c.prototype = null), (t.exports = c));
        },
        12389: (t, e, r) => {
            (Object.defineProperty(e, '__esModule', { value: !0 }),
                !(function (t, e) {
                    for (var r in e) Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
                })(e, {
                    default: function () {
                        return y;
                    },
                    useLinkStatus: function () {
                        return g;
                    },
                }));
            let n = r(28854),
                o = r(88800),
                i = n._(r(53548)),
                s = r(74428),
                a = r(92746),
                u = r(7733),
                l = r(13985),
                c = r(20498),
                p = r(13872);
            r(4115);
            let f = r(53437),
                h = r(87013),
                d = r(48985);
            function v(t) {
                return 'string' == typeof t ? t : (0, s.formatUrl)(t);
            }
            function y(t) {
                let e,
                    r,
                    n,
                    [s, y] = (0, i.useOptimistic)(f.IDLE_LINK_STATUS),
                    g = (0, i.useRef)(null),
                    {
                        href: m,
                        as: b,
                        children: w,
                        prefetch: $ = null,
                        passHref: x,
                        replace: P,
                        shallow: E,
                        scroll: k,
                        onClick: S,
                        onMouseEnter: A,
                        onTouchStart: O,
                        legacyBehavior: T = !1,
                        onNavigate: j,
                        ref: U,
                        unstable_dynamicOnHover: I,
                        ...C
                    } = t;
                ((e = w), T && ('string' == typeof e || 'number' == typeof e) && (e = (0, o.jsx)('a', { children: e })));
                let R = i.default.useContext(a.AppRouterContext),
                    L = !1 !== $,
                    M = null === $ || 'auto' === $ ? u.PrefetchKind.AUTO : u.PrefetchKind.FULL,
                    { href: N, as: D } = i.default.useMemo(() => {
                        let t = v(m);
                        return { href: t, as: b ? v(b) : t };
                    }, [m, b]);
                T && (r = i.default.Children.only(e));
                let V = T ? r && 'object' == typeof r && r.ref : U,
                    F = i.default.useCallback(
                        (t) => (
                            null !== R && (g.current = (0, f.mountLinkInstance)(t, N, R, M, L, y)),
                            () => {
                                (g.current && ((0, f.unmountLinkForCurrentNavigation)(g.current), (g.current = null)), (0, f.unmountPrefetchableInstance)(t));
                            }
                        ),
                        [L, N, R, M, y],
                    ),
                    B = {
                        ref: (0, l.useMergedRef)(F, V),
                        onClick(t) {
                            (T || 'function' != typeof S || S(t),
                                T && r.props && 'function' == typeof r.props.onClick && r.props.onClick(t),
                                R &&
                                    (t.defaultPrevented ||
                                        (function (t, e, r, n, o, s, a) {
                                            let { nodeName: u } = t.currentTarget;
                                            if (
                                                !(
                                                    ('A' === u.toUpperCase() &&
                                                        (function (t) {
                                                            let e = t.currentTarget.getAttribute('target');
                                                            return (
                                                                (e && '_self' !== e) ||
                                                                t.metaKey ||
                                                                t.ctrlKey ||
                                                                t.shiftKey ||
                                                                t.altKey ||
                                                                (t.nativeEvent && 2 === t.nativeEvent.which)
                                                            );
                                                        })(t)) ||
                                                    t.currentTarget.hasAttribute('download')
                                                )
                                            ) {
                                                if (!(0, h.isLocalURL)(e)) {
                                                    o && (t.preventDefault(), location.replace(e));
                                                    return;
                                                }
                                                if ((t.preventDefault(), a)) {
                                                    let t = !1;
                                                    if (
                                                        (a({
                                                            preventDefault: () => {
                                                                t = !0;
                                                            },
                                                        }),
                                                        t)
                                                    )
                                                        return;
                                                }
                                                i.default.startTransition(() => {
                                                    (0, d.dispatchNavigateAction)(r || e, o ? 'replace' : 'push', null == s || s, n.current);
                                                });
                                            }
                                        })(t, N, D, g, P, k, j)));
                        },
                        onMouseEnter(t) {
                            (T || 'function' != typeof A || A(t),
                                T && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(t),
                                R && L && (0, f.onNavigationIntent)(t.currentTarget, !0 === I));
                        },
                        onTouchStart: function (t) {
                            (T || 'function' != typeof O || O(t),
                                T && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(t),
                                R && L && (0, f.onNavigationIntent)(t.currentTarget, !0 === I));
                        },
                    };
                return (
                    (0, c.isAbsoluteUrl)(D) ? (B.href = D) : (T && !x && ('a' !== r.type || 'href' in r.props)) || (B.href = (0, p.addBasePath)(D)),
                    (n = T ? i.default.cloneElement(r, B) : (0, o.jsx)('a', { ...C, ...B, children: e })),
                    (0, o.jsx)(_.Provider, { value: s, children: n })
                );
            }
            r(36155);
            let _ = (0, i.createContext)(f.IDLE_LINK_STATUS),
                g = () => (0, i.useContext)(_);
            ('function' == typeof e.default || ('object' == typeof e.default && null !== e.default)) &&
                void 0 === e.default.__esModule &&
                (Object.defineProperty(e.default, '__esModule', { value: !0 }), Object.assign(e.default, e), (t.exports = e.default));
        },
        12659: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onResult: e, resultReturns: r, rethrowIfPossible: n }) {
                    return this.callTapsSeries({
                        onError: (e, r) => t(r),
                        onResult: (t, e, r) => {
                            let n = '';
                            return (
                                (n += `if(${e} !== undefined) {
`),
                                (n += `${this._args[0]} = ${e};
`),
                                (n += '}\n'),
                                (n += r())
                            );
                        },
                        onDone: () => e(this._args[0]),
                        doneReturns: r,
                        rethrowIfPossible: n,
                    });
                }
            }
            let s = new i(),
                a = () => {
                    throw Error('tapAsync is not supported on a SyncWaterfallHook');
                },
                u = () => {
                    throw Error('tapPromise is not supported on a SyncWaterfallHook');
                };
            function l(t) {
                return (s.setup(this, t), s.create(t));
            }
            function c(t = [], e) {
                if (t.length < 1) throw Error('Waterfall hooks must have at least one argument');
                let r = new n(t, e);
                return ((r.constructor = c), (r.tapAsync = a), (r.tapPromise = u), (r.compile = l), r);
            }
            ((c.prototype = null), (t.exports = c));
        },
        12987: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onDone: e }) {
                    return this.callTapsParallel({ onError: (e, r, n, o) => t(r) + o(!0), onDone: e });
                }
            }
            let s = new i();
            function a(t) {
                return (s.setup(this, t), s.create(t));
            }
            function u(t = [], e) {
                let r = new n(t, e);
                return ((r.constructor = u), (r.compile = a), (r._call = void 0), (r.call = void 0), r);
            }
            ((u.prototype = null), (t.exports = u));
        },
        13985: (t, e, r) => {
            (Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'useMergedRef', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let n = r(53548);
            function o(t, e) {
                let r = (0, n.useRef)(null),
                    o = (0, n.useRef)(null);
                return (0, n.useCallback)(
                    (n) => {
                        if (null === n) {
                            let t = r.current;
                            t && ((r.current = null), t());
                            let e = o.current;
                            e && ((o.current = null), e());
                        } else (t && (r.current = i(t, n)), e && (o.current = i(e, n)));
                    },
                    [t, e],
                );
            }
            function i(t, e) {
                if ('function' != typeof t)
                    return (
                        (t.current = e),
                        () => {
                            t.current = null;
                        }
                    );
                {
                    let r = t(e);
                    return 'function' == typeof r ? r : () => t(null);
                }
            }
            ('function' == typeof e.default || ('object' == typeof e.default && null !== e.default)) &&
                void 0 === e.default.__esModule &&
                (Object.defineProperty(e.default, '__esModule', { value: !0 }), Object.assign(e.default, e), (t.exports = e.default));
        },
        14688: (t, e, r) => {
            let n = r(92296),
                o = (t, e) => e;
            class i {
                constructor(t, e) {
                    ((this._map = new Map()), (this.name = e), (this._factory = t), (this._interceptors = []));
                }
                get(t) {
                    return this._map.get(t);
                }
                for(t) {
                    let e = this.get(t);
                    if (void 0 !== e) return e;
                    let r = this._factory(t),
                        n = this._interceptors;
                    for (let e = 0; e < n.length; e++) r = n[e].factory(t, r);
                    return (this._map.set(t, r), r);
                }
                intercept(t) {
                    this._interceptors.push(Object.assign({ factory: o }, t));
                }
            }
            ((i.prototype.tap = n.deprecate(function (t, e, r) {
                return this.for(t).tap(e, r);
            }, 'HookMap#tap(key,…) is deprecated. Use HookMap#for(key).tap(…) instead.')),
                (i.prototype.tapAsync = n.deprecate(function (t, e, r) {
                    return this.for(t).tapAsync(e, r);
                }, 'HookMap#tapAsync(key,…) is deprecated. Use HookMap#for(key).tapAsync(…) instead.')),
                (i.prototype.tapPromise = n.deprecate(function (t, e, r) {
                    return this.for(t).tapPromise(e, r);
                }, 'HookMap#tapPromise(key,…) is deprecated. Use HookMap#for(key).tapPromise(…) instead.')),
                (t.exports = i));
        },
        15405: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onDone: e, rethrowIfPossible: r }) {
                    return this.callTapsSeries({ onError: (e, r) => t(r), onDone: e, rethrowIfPossible: r });
                }
            }
            let s = new i(),
                a = () => {
                    throw Error('tapAsync is not supported on a SyncHook');
                },
                u = () => {
                    throw Error('tapPromise is not supported on a SyncHook');
                };
            function l(t) {
                return (s.setup(this, t), s.create(t));
            }
            function c(t = [], e) {
                let r = new n(t, e);
                return ((r.constructor = c), (r.tapAsync = a), (r.tapPromise = u), (r.compile = l), r);
            }
            ((c.prototype = null), (t.exports = c));
        },
        15865: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onResult: e, resultReturns: r, onDone: n }) {
                    return this.callTapsSeries({
                        onError: (e, r, n, o) => t(r) + o(!0),
                        onResult: (t, r, n) => `if(${r} !== undefined) {
${e(r)}
} else {
${n()}}
`,
                        resultReturns: r,
                        onDone: n,
                    });
                }
            }
            let s = new i();
            function a(t) {
                return (s.setup(this, t), s.create(t));
            }
            function u(t = [], e) {
                let r = new n(t, e);
                return ((r.constructor = u), (r.compile = a), (r._call = void 0), (r.call = void 0), r);
            }
            ((u.prototype = null), (t.exports = u));
        },
        20498: (t, e) => {
            (Object.defineProperty(e, '__esModule', { value: !0 }),
                !(function (t, e) {
                    for (var r in e) Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
                })(e, {
                    DecodeError: function () {
                        return d;
                    },
                    MiddlewareNotFoundError: function () {
                        return g;
                    },
                    MissingStaticPage: function () {
                        return _;
                    },
                    NormalizeError: function () {
                        return v;
                    },
                    PageNotFoundError: function () {
                        return y;
                    },
                    SP: function () {
                        return f;
                    },
                    ST: function () {
                        return h;
                    },
                    WEB_VITALS: function () {
                        return r;
                    },
                    execOnce: function () {
                        return n;
                    },
                    getDisplayName: function () {
                        return u;
                    },
                    getLocationOrigin: function () {
                        return s;
                    },
                    getURL: function () {
                        return a;
                    },
                    isAbsoluteUrl: function () {
                        return i;
                    },
                    isResSent: function () {
                        return l;
                    },
                    loadGetInitialProps: function () {
                        return p;
                    },
                    normalizeRepeatedSlashes: function () {
                        return c;
                    },
                    stringifyError: function () {
                        return m;
                    },
                }));
            let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
            function n(t) {
                let e,
                    r = !1;
                return function () {
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return (r || ((r = !0), (e = t(...o))), e);
                };
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                i = (t) => o.test(t);
            function s() {
                let { protocol: t, hostname: e, port: r } = window.location;
                return t + '//' + e + (r ? ':' + r : '');
            }
            function a() {
                let { href: t } = window.location,
                    e = s();
                return t.substring(e.length);
            }
            function u(t) {
                return 'string' == typeof t ? t : t.displayName || t.name || 'Unknown';
            }
            function l(t) {
                return t.finished || t.headersSent;
            }
            function c(t) {
                let e = t.split('?');
                return e[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (e[1] ? '?' + e.slice(1).join('?') : '');
            }
            async function p(t, e) {
                let r = e.res || (e.ctx && e.ctx.res);
                if (!t.getInitialProps) return e.ctx && e.Component ? { pageProps: await p(e.Component, e.ctx) } : {};
                let n = await t.getInitialProps(e);
                if (r && l(r)) return n;
                if (!n)
                    throw Object.defineProperty(
                        Error('"' + u(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return n;
            }
            let f = 'undefined' != typeof performance,
                h = f && ['mark', 'measure', 'getEntriesByName'].every((t) => 'function' == typeof performance[t]);
            class d extends Error {}
            class v extends Error {}
            class y extends Error {
                constructor(t) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + t));
                }
            }
            class _ extends Error {
                constructor(t, e) {
                    (super(), (this.message = 'Failed to load static file for page: ' + t + ' ' + e));
                }
            }
            class g extends Error {
                constructor() {
                    (super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
                }
            }
            function m(t) {
                return JSON.stringify({ message: t.message, stack: t.stack });
            }
        },
        20727: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onDone: e }) {
                    return this.callTapsLooping({ onError: (e, r, n, o) => t(r) + o(!0), onDone: e });
                }
            }
            let s = new i();
            function a(t) {
                return (s.setup(this, t), s.create(t));
            }
            function u(t = [], e) {
                let r = new n(t, e);
                return ((r.constructor = u), (r.compile = a), (r._call = void 0), (r.call = void 0), r);
            }
            ((u.prototype = null), (t.exports = u));
        },
        30431: (t, e, r) => {
            (r(9951),
                r(12987),
                r(15865),
                (t.exports.AsyncSeriesHook = r(69465)),
                r(20727),
                r(65495),
                r(14688),
                r(31277),
                r(11109),
                (t.exports.SyncHook = r(15405)),
                r(63683),
                (t.exports.SyncWaterfallHook = r(12659)));
        },
        31277: (t) => {
            class e {
                constructor(t, e) {
                    ((this.hooks = t), (this.name = e));
                }
                tap(t, e) {
                    for (let r of this.hooks) r.tap(t, e);
                }
                tapAsync(t, e) {
                    for (let r of this.hooks) r.tapAsync(t, e);
                }
                tapPromise(t, e) {
                    for (let r of this.hooks) r.tapPromise(t, e);
                }
                isUsed() {
                    for (let t of this.hooks) if (t.isUsed()) return !0;
                    return !1;
                }
                intercept(t) {
                    for (let e of this.hooks) e.intercept(t);
                }
                withOptions(t) {
                    return new e(
                        this.hooks.map((e) => e.withOptions(t)),
                        this.name,
                    );
                }
            }
            t.exports = e;
        },
        36155: (t, e) => {
            (Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'errorOnce', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let r = (t) => {};
        },
        43297: (t, e, r) => {
            function n() {
                throw Error('Cycle detected');
            }
            function o() {
                if (u > 1) u--;
                else {
                    for (var t, e = !1; void 0 !== a;) {
                        var r = a;
                        for (a = void 0, l++; void 0 !== r;) {
                            var n = r.o;
                            if (((r.o = void 0), (r.f &= -3), !(8 & r.f) && d(r)))
                                try {
                                    r.c();
                                } catch (r) {
                                    e || ((t = r), (e = !0));
                                }
                            r = n;
                        }
                    }
                    if (((l = 0), u--, e)) throw t;
                }
            }
            function i(t) {
                if (u > 0) return t();
                u++;
                try {
                    return t();
                } finally {
                    o();
                }
            }
            r.d(e, { EW: () => g, vA: () => i, vP: () => h });
            var s = void 0,
                a = void 0,
                u = 0,
                l = 0,
                c = 0;
            function p(t) {
                if (void 0 !== s) {
                    var e = t.n;
                    if (void 0 === e || e.t !== s)
                        return (
                            (e = { i: 0, S: t, p: s.s, n: void 0, t: s, e: void 0, x: void 0, r: e }),
                            void 0 !== s.s && (s.s.n = e),
                            (s.s = e),
                            (t.n = e),
                            32 & s.f && t.S(e),
                            e
                        );
                    if (-1 === e.i)
                        return ((e.i = 0), void 0 !== e.n && ((e.n.p = e.p), void 0 !== e.p && (e.p.n = e.n), (e.p = s.s), (e.n = void 0), (s.s.n = e), (s.s = e)), e);
                }
            }
            function f(t) {
                ((this.v = t), (this.i = 0), (this.n = void 0), (this.t = void 0));
            }
            function h(t) {
                return new f(t);
            }
            function d(t) {
                for (var e = t.s; void 0 !== e; e = e.n) if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
                return !1;
            }
            function v(t) {
                for (var e = t.s; void 0 !== e; e = e.n) {
                    var r = e.S.n;
                    if ((void 0 !== r && (e.r = r), (e.S.n = e), (e.i = -1), void 0 === e.n)) {
                        t.s = e;
                        break;
                    }
                }
            }
            function y(t) {
                for (var e = t.s, r = void 0; void 0 !== e;) {
                    var n = e.p;
                    (-1 === e.i ? (e.S.U(e), void 0 !== n && (n.n = e.n), void 0 !== e.n && (e.n.p = n)) : (r = e),
                        (e.S.n = e.r),
                        void 0 !== e.r && (e.r = void 0),
                        (e = n));
                }
                t.s = r;
            }
            function _(t) {
                (f.call(this, void 0), (this.x = t), (this.s = void 0), (this.g = c - 1), (this.f = 4));
            }
            function g(t) {
                return new _(t);
            }
            function m(t) {
                var e = t.u;
                if (((t.u = void 0), 'function' == typeof e)) {
                    u++;
                    var r = s;
                    s = void 0;
                    try {
                        e();
                    } catch (e) {
                        throw ((t.f &= -2), (t.f |= 8), b(t), e);
                    } finally {
                        ((s = r), o());
                    }
                }
            }
            function b(t) {
                for (var e = t.s; void 0 !== e; e = e.n) e.S.U(e);
                ((t.x = void 0), (t.s = void 0), m(t));
            }
            function w(t) {
                if (s !== this) throw Error('Out-of-order effect');
                (y(this), (s = t), (this.f &= -2), 8 & this.f && b(this), o());
            }
            function $(t) {
                ((this.x = t), (this.u = void 0), (this.s = void 0), (this.o = void 0), (this.f = 32));
            }
            ((f.prototype.h = function () {
                return !0;
            }),
                (f.prototype.S = function (t) {
                    this.t !== t && void 0 === t.e && ((t.x = this.t), void 0 !== this.t && (this.t.e = t), (this.t = t));
                }),
                (f.prototype.U = function (t) {
                    if (void 0 !== this.t) {
                        var e = t.e,
                            r = t.x;
                        (void 0 !== e && ((e.x = r), (t.e = void 0)), void 0 !== r && ((r.e = e), (t.x = void 0)), t === this.t && (this.t = r));
                    }
                }),
                (f.prototype.subscribe = function (t) {
                    var e = this,
                        r = function () {
                            var r = e.value,
                                n = 32 & this.f;
                            this.f &= -33;
                            try {
                                t(r);
                            } finally {
                                this.f |= n;
                            }
                        },
                        n = new $(r);
                    try {
                        n.c();
                    } catch (t) {
                        throw (n.d(), t);
                    }
                    return n.d.bind(n);
                }),
                (f.prototype.valueOf = function () {
                    return this.value;
                }),
                (f.prototype.toString = function () {
                    return this.value + '';
                }),
                (f.prototype.toJSON = function () {
                    return this.value;
                }),
                (f.prototype.peek = function () {
                    return this.v;
                }),
                Object.defineProperty(f.prototype, 'value', {
                    get: function () {
                        var t = p(this);
                        return (void 0 !== t && (t.i = this.i), this.v);
                    },
                    set: function (t) {
                        if (
                            (s instanceof _ &&
                                (function () {
                                    throw Error('Computed cannot have side-effects');
                                })(),
                            t !== this.v)
                        ) {
                            (l > 100 && n(), (this.v = t), this.i++, c++, u++);
                            try {
                                for (var e = this.t; void 0 !== e; e = e.x) e.t.N();
                            } finally {
                                o();
                            }
                        }
                    },
                }),
                ((_.prototype = new f()).h = function () {
                    if (((this.f &= -3), 1 & this.f)) return !1;
                    if (32 == (36 & this.f) || ((this.f &= -5), this.g === c)) return !0;
                    if (((this.g = c), (this.f |= 1), this.i > 0 && !d(this))) return ((this.f &= -2), !0);
                    var t = s;
                    try {
                        (v(this), (s = this));
                        var e = this.x();
                        (16 & this.f || this.v !== e || 0 === this.i) && ((this.v = e), (this.f &= -17), this.i++);
                    } catch (t) {
                        ((this.v = t), (this.f |= 16), this.i++);
                    }
                    return ((s = t), y(this), (this.f &= -2), !0);
                }),
                (_.prototype.S = function (t) {
                    if (void 0 === this.t) {
                        this.f |= 36;
                        for (var e = this.s; void 0 !== e; e = e.n) e.S.S(e);
                    }
                    f.prototype.S.call(this, t);
                }),
                (_.prototype.U = function (t) {
                    if (void 0 !== this.t && (f.prototype.U.call(this, t), void 0 === this.t)) {
                        this.f &= -33;
                        for (var e = this.s; void 0 !== e; e = e.n) e.S.U(e);
                    }
                }),
                (_.prototype.N = function () {
                    if (!(2 & this.f)) {
                        this.f |= 6;
                        for (var t = this.t; void 0 !== t; t = t.x) t.t.N();
                    }
                }),
                (_.prototype.peek = function () {
                    if ((this.h() || n(), 16 & this.f)) throw this.v;
                    return this.v;
                }),
                Object.defineProperty(_.prototype, 'value', {
                    get: function () {
                        1 & this.f && n();
                        var t = p(this);
                        if ((this.h(), void 0 !== t && (t.i = this.i), 16 & this.f)) throw this.v;
                        return this.v;
                    },
                }),
                ($.prototype.c = function () {
                    var t = this.S();
                    try {
                        if (8 & this.f || void 0 === this.x) return;
                        var e = this.x();
                        'function' == typeof e && (this.u = e);
                    } finally {
                        t();
                    }
                }),
                ($.prototype.S = function () {
                    (1 & this.f && n(), (this.f |= 1), (this.f &= -9), m(this), v(this), u++);
                    var t = s;
                    return ((s = this), w.bind(this, t));
                }),
                ($.prototype.N = function () {
                    2 & this.f || ((this.f |= 2), (this.o = a), (a = this));
                }),
                ($.prototype.d = function () {
                    ((this.f |= 8), 1 & this.f || b(this));
                }));
        },
        54020: (t, e, r) => {
            let n;
            r.d(e, { A: () => a });
            let o = { randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) },
                i = new Uint8Array(16),
                s = [];
            for (let t = 0; t < 256; ++t) s.push((t + 256).toString(16).slice(1));
            let a = function (t, e, r) {
                if (o.randomUUID && !e && !t) return o.randomUUID();
                let a =
                    (t = t || {}).random ||
                    (
                        t.rng ||
                        function () {
                            if (!n && !(n = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                                throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
                            return n(i);
                        }
                    )();
                if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), e)) {
                    r = r || 0;
                    for (let t = 0; t < 16; ++t) e[r + t] = a[t];
                    return e;
                }
                return (function (t, e = 0) {
                    return (
                        s[t[e + 0]] +
                        s[t[e + 1]] +
                        s[t[e + 2]] +
                        s[t[e + 3]] +
                        '-' +
                        s[t[e + 4]] +
                        s[t[e + 5]] +
                        '-' +
                        s[t[e + 6]] +
                        s[t[e + 7]] +
                        '-' +
                        s[t[e + 8]] +
                        s[t[e + 9]] +
                        '-' +
                        s[t[e + 10]] +
                        s[t[e + 11]] +
                        s[t[e + 12]] +
                        s[t[e + 13]] +
                        s[t[e + 14]] +
                        s[t[e + 15]]
                    );
                })(a);
            };
        },
        56374: (t, e, r) => {
            r.d(e, { c: () => o });
            var n = r(53548);
            function o(t) {
                let e = (0, n.useRef)({ stableFn: (...t) => e.current.callback(...t), callback: t });
                return (
                    (0, n.useInsertionEffect)(() => {
                        e.current.callback = t;
                    }),
                    e.current.stableFn
                );
            }
        },
        56804: (t, e) => {
            function r(t) {
                let e = {};
                for (let [r, n] of t.entries()) {
                    let t = e[r];
                    void 0 === t ? (e[r] = n) : Array.isArray(t) ? t.push(n) : (e[r] = [t, n]);
                }
                return e;
            }
            function n(t) {
                return 'string' == typeof t ? t : ('number' != typeof t || isNaN(t)) && 'boolean' != typeof t ? '' : String(t);
            }
            function o(t) {
                let e = new URLSearchParams();
                for (let [r, o] of Object.entries(t))
                    if (Array.isArray(o)) for (let t of o) e.append(r, n(t));
                    else e.set(r, n(o));
                return e;
            }
            function i(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                for (let e of r) {
                    for (let r of e.keys()) t.delete(r);
                    for (let [r, n] of e.entries()) t.append(r, n);
                }
                return t;
            }
            (Object.defineProperty(e, '__esModule', { value: !0 }),
                !(function (t, e) {
                    for (var r in e) Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
                })(e, {
                    assign: function () {
                        return i;
                    },
                    searchParamsToUrlQuery: function () {
                        return r;
                    },
                    urlQueryToSearchParams: function () {
                        return o;
                    },
                }));
        },
        63683: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onDone: e, rethrowIfPossible: r }) {
                    return this.callTapsLooping({ onError: (e, r) => t(r), onDone: e, rethrowIfPossible: r });
                }
            }
            let s = new i(),
                a = () => {
                    throw Error('tapAsync is not supported on a SyncLoopHook');
                },
                u = () => {
                    throw Error('tapPromise is not supported on a SyncLoopHook');
                };
            function l(t) {
                return (s.setup(this, t), s.create(t));
            }
            function c(t = [], e) {
                let r = new n(t, e);
                return ((r.constructor = c), (r.tapAsync = a), (r.tapPromise = u), (r.compile = l), r);
            }
            ((c.prototype = null), (t.exports = c));
        },
        65495: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onResult: e, _onDone: r }) {
                    return this.callTapsSeries({
                        onError: (e, r, n, o) => t(r) + o(!0),
                        onResult: (t, e, r) => {
                            let n = '';
                            return (
                                (n += `if(${e} !== undefined) {
`),
                                (n += `${this._args[0]} = ${e};
`),
                                (n += '}\n'),
                                (n += r())
                            );
                        },
                        onDone: () => e(this._args[0]),
                    });
                }
            }
            let s = new i();
            function a(t) {
                return (s.setup(this, t), s.create(t));
            }
            function u(t = [], e) {
                if (t.length < 1) throw Error('Waterfall hooks must have at least one argument');
                let r = new n(t, e);
                return ((r.constructor = u), (r.compile = a), (r._call = void 0), (r.call = void 0), r);
            }
            ((u.prototype = null), (t.exports = u));
        },
        69465: (t, e, r) => {
            let n = r(86894),
                o = r(93023);
            class i extends o {
                content({ onError: t, onDone: e }) {
                    return this.callTapsSeries({ onError: (e, r, n, o) => t(r) + o(!0), onDone: e });
                }
            }
            let s = new i();
            function a(t) {
                return (s.setup(this, t), s.create(t));
            }
            function u(t = [], e) {
                let r = new n(t, e);
                return ((r.constructor = u), (r.compile = a), (r._call = void 0), (r.call = void 0), r);
            }
            ((u.prototype = null), (t.exports = u));
        },
        74428: (t, e, r) => {
            (Object.defineProperty(e, '__esModule', { value: !0 }),
                !(function (t, e) {
                    for (var r in e) Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
                })(e, {
                    formatUrl: function () {
                        return i;
                    },
                    formatWithValidation: function () {
                        return a;
                    },
                    urlObjectKeys: function () {
                        return s;
                    },
                }));
            let n = r(28854)._(r(56804)),
                o = /https?|ftp|gopher|file/;
            function i(t) {
                let { auth: e, hostname: r } = t,
                    i = t.protocol || '',
                    s = t.pathname || '',
                    a = t.hash || '',
                    u = t.query || '',
                    l = !1;
                ((e = e ? encodeURIComponent(e).replace(/%3A/i, ':') + '@' : ''),
                    t.host ? (l = e + t.host) : r && ((l = e + (~r.indexOf(':') ? '[' + r + ']' : r)), t.port && (l += ':' + t.port)),
                    u && 'object' == typeof u && (u = String(n.urlQueryToSearchParams(u))));
                let c = t.search || (u && '?' + u) || '';
                return (
                    i && !i.endsWith(':') && (i += ':'),
                    t.slashes || ((!i || o.test(i)) && !1 !== l) ? ((l = '//' + (l || '')), s && '/' !== s[0] && (s = '/' + s)) : l || (l = ''),
                    a && '#' !== a[0] && (a = '#' + a),
                    c && '?' !== c[0] && (c = '?' + c),
                    '' + i + l + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace('#', '%23')) + a
                );
            }
            let s = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function a(t) {
                return i(t);
            }
        },
        82141: (t, e, r) => {
            r.d(e, { rm: () => i, cJ: () => o, vA: () => s });
            var n = r(43297),
                o = (function () {
                    function t(t) {
                        ((this.observableValue = (0, n.vP)(t)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(t.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (t) {
                                this.observableValue.value = t;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.onChange = function (t, e) {
                            var r = this;
                            void 0 === e && (e = { skipFirstChange: !1 });
                            var n = !0;
                            return (
                                this.prevValueByListener.has(t) || this.prevValueByListener.set(t, void 0),
                                this.observableValue.subscribe(function (o) {
                                    if (o !== r.prevValueByListener.get(t)) {
                                        if (e.skipFirstChange && n) {
                                            n = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(t, o), t(o));
                                    }
                                })
                            );
                        }),
                        t
                    );
                })(),
                i = (function () {
                    function t(t) {
                        ((this.observableValue = (0, n.EW)(t)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(t.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.onChange = function (t, e) {
                            var r = this;
                            void 0 === e && (e = { skipFirstChange: !1 });
                            var n = !0;
                            return (
                                this.prevValueByListener.has(t) || this.prevValueByListener.set(t, void 0),
                                this.observableValue.subscribe(function (o) {
                                    if (o !== r.prevValueByListener.get(t)) {
                                        if (e.skipFirstChange && n) {
                                            n = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(t, o), t(o));
                                    }
                                })
                            );
                        }),
                        t
                    );
                })();
            function s(t) {
                (0, n.vA)(t);
            }
        },
        86894: (t, e, r) => {
            let n = r(92296).deprecate(() => {}, 'Hook.context is deprecated and will be removed');
            function o(...t) {
                return ((this.call = this._createCall('sync')), this.call(...t));
            }
            function i(...t) {
                return ((this.callAsync = this._createCall('async')), this.callAsync(...t));
            }
            function s(...t) {
                return ((this.promise = this._createCall('promise')), this.promise(...t));
            }
            class a {
                constructor(t = [], e) {
                    ((this._args = t),
                        (this.name = e),
                        (this.taps = []),
                        (this.interceptors = []),
                        (this._call = o),
                        (this.call = o),
                        (this._callAsync = i),
                        (this.callAsync = i),
                        (this._promise = s),
                        (this.promise = s),
                        (this._x = void 0),
                        (this.compile = this.compile),
                        (this.tap = this.tap),
                        (this.tapAsync = this.tapAsync),
                        (this.tapPromise = this.tapPromise));
                }
                compile(t) {
                    throw Error('Abstract: should be overridden');
                }
                _createCall(t) {
                    return this.compile({ taps: this.taps, interceptors: this.interceptors, args: this._args, type: t });
                }
                _tap(t, e, r) {
                    if ('string' == typeof e) e = { name: e.trim() };
                    else if ('object' != typeof e || null === e) throw Error('Invalid tap options');
                    if ('string' != typeof e.name || '' === e.name) throw Error('Missing name for tap');
                    (void 0 !== e.context && n(), (e = Object.assign({ type: t, fn: r }, e)), (e = this._runRegisterInterceptors(e)), this._insert(e));
                }
                tap(t, e) {
                    this._tap('sync', t, e);
                }
                tapAsync(t, e) {
                    this._tap('async', t, e);
                }
                tapPromise(t, e) {
                    this._tap('promise', t, e);
                }
                _runRegisterInterceptors(t) {
                    for (let e of this.interceptors)
                        if (e.register) {
                            let r = e.register(t);
                            void 0 !== r && (t = r);
                        }
                    return t;
                }
                withOptions(t) {
                    let e = (e) => Object.assign({}, t, 'string' == typeof e ? { name: e } : e);
                    return {
                        name: this.name,
                        tap: (t, r) => this.tap(e(t), r),
                        tapAsync: (t, r) => this.tapAsync(e(t), r),
                        tapPromise: (t, r) => this.tapPromise(e(t), r),
                        intercept: (t) => this.intercept(t),
                        isUsed: () => this.isUsed(),
                        withOptions: (t) => this.withOptions(e(t)),
                    };
                }
                isUsed() {
                    return this.taps.length > 0 || this.interceptors.length > 0;
                }
                intercept(t) {
                    if ((this._resetCompilation(), this.interceptors.push(Object.assign({}, t)), t.register))
                        for (let e = 0; e < this.taps.length; e++) this.taps[e] = t.register(this.taps[e]);
                }
                _resetCompilation() {
                    ((this.call = this._call), (this.callAsync = this._callAsync), (this.promise = this._promise));
                }
                _insert(t) {
                    let e;
                    (this._resetCompilation(), 'string' == typeof t.before ? (e = new Set([t.before])) : Array.isArray(t.before) && (e = new Set(t.before)));
                    let r = 0;
                    'number' == typeof t.stage && (r = t.stage);
                    let n = this.taps.length;
                    for (; n > 0;) {
                        n--;
                        let t = this.taps[n];
                        this.taps[n + 1] = t;
                        let o = t.stage || 0;
                        if (e) {
                            if (e.has(t.name)) {
                                e.delete(t.name);
                                continue;
                            }
                            if (e.size > 0) continue;
                        }
                        if (!(o > r)) {
                            n++;
                            break;
                        }
                    }
                    this.taps[n] = t;
                }
            }
            (Object.setPrototypeOf(a.prototype, null), (t.exports = a));
        },
        87013: (t, e, r) => {
            (Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'isLocalURL', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let n = r(20498),
                o = r(42411);
            function i(t) {
                if (!(0, n.isAbsoluteUrl)(t)) return !0;
                try {
                    let e = (0, n.getLocationOrigin)(),
                        r = new URL(t, e);
                    return r.origin === e && (0, o.hasBasePath)(r.pathname);
                } catch (t) {
                    return !1;
                }
            }
        },
        92296: (t) => {
            t.exports.deprecate = (t, e) => {
                let r = !0;
                return function () {
                    return (r && (console.warn(`DeprecationWarning: ${e}`), (r = !1)), t.apply(this, arguments));
                };
            };
        },
        93023: (t) => {
            class e {
                constructor(t) {
                    ((this.config = t), (this.options = void 0), (this._args = void 0));
                }
                create(t) {
                    let e;
                    switch ((this.init(t), this.options.type)) {
                        case 'sync':
                            e = Function(
                                this.args(),
                                `"use strict";
${this.header()}${this.contentWithInterceptors({
                                    onError: (t) => `throw ${t};
`,
                                    onResult: (t) => `return ${t};
`,
                                    resultReturns: !0,
                                    onDone: () => '',
                                    rethrowIfPossible: !0,
                                })}`,
                            );
                            break;
                        case 'async':
                            e = Function(
                                this.args({ after: '_callback' }),
                                `"use strict";
${this.header()}${this.contentWithInterceptors({
                                    onError: (t) => `_callback(${t});
`,
                                    onResult: (t) => `_callback(null, ${t});
`,
                                    onDone: () => '_callback();\n',
                                })}`,
                            );
                            break;
                        case 'promise': {
                            let t = !1,
                                r = this.contentWithInterceptors({
                                    onError: (e) => (
                                        (t = !0),
                                        `_error(${e});
`
                                    ),
                                    onResult: (t) => `_resolve(${t});
`,
                                    onDone: () => '_resolve();\n',
                                }),
                                n = '';
                            ((n += '"use strict";\n'),
                                (n += this.header()),
                                (n += 'return new Promise((function(_resolve, _reject) {\n'),
                                t &&
                                    ((n += 'var _sync = true;\n'),
                                    (n += 'function _error(_err) {\n'),
                                    (n += 'if(_sync)\n'),
                                    (n += '_resolve(Promise.resolve().then((function() { throw _err; })));\n'),
                                    (n += 'else\n'),
                                    (n += '_reject(_err);\n'),
                                    (n += '};\n')),
                                (n += r),
                                t && (n += '_sync = false;\n'),
                                (n += '}));\n'),
                                (e = Function(this.args(), n)));
                        }
                    }
                    return (this.deinit(), e);
                }
                setup(t, e) {
                    t._x = e.taps.map((t) => t.fn);
                }
                init(t) {
                    ((this.options = t), (this._args = [...t.args]));
                }
                deinit() {
                    ((this.options = void 0), (this._args = void 0));
                }
                contentWithInterceptors(t) {
                    if (this.options.interceptors.length > 0) {
                        let { onError: e, onResult: r, onDone: n } = t,
                            o = '';
                        for (let t = 0; t < this.options.interceptors.length; t++) {
                            let e = this.options.interceptors[t];
                            e.call &&
                                (o += `${this.getInterceptor(t)}.call(${this.args({ before: e.context ? '_context' : void 0 })});
`);
                        }
                        return (
                            o +
                            this.content(
                                Object.assign(t, {
                                    onError:
                                        e &&
                                        ((t) => {
                                            let r = '';
                                            for (let e = 0; e < this.options.interceptors.length; e++)
                                                this.options.interceptors[e].error &&
                                                    (r += `${this.getInterceptor(e)}.error(${t});
`);
                                            return r + e(t);
                                        }),
                                    onResult:
                                        r &&
                                        ((t) => {
                                            let e = '';
                                            for (let r = 0; r < this.options.interceptors.length; r++)
                                                this.options.interceptors[r].result &&
                                                    (e += `${this.getInterceptor(r)}.result(${t});
`);
                                            return e + r(t);
                                        }),
                                    onDone:
                                        n &&
                                        (() => {
                                            let t = '';
                                            for (let e = 0; e < this.options.interceptors.length; e++)
                                                this.options.interceptors[e].done &&
                                                    (t += `${this.getInterceptor(e)}.done();
`);
                                            return t + n();
                                        }),
                                }),
                            )
                        );
                    }
                    return this.content(t);
                }
                header() {
                    let t = '';
                    return (
                        (t += (this.needContext() ? 'var _context = {};\n' : 'var _context;\n') + 'var _x = this._x;\n'),
                        this.options.interceptors.length > 0 && (t += 'var _taps = this.taps;\nvar _interceptors = this.interceptors;\n'),
                        t
                    );
                }
                needContext() {
                    for (let t of this.options.taps) if (t.context) return !0;
                    return !1;
                }
                callTap(t, { onError: e, onResult: r, onDone: n, rethrowIfPossible: o }) {
                    let i = '',
                        s = !1;
                    for (let e = 0; e < this.options.interceptors.length; e++) {
                        let r = this.options.interceptors[e];
                        r.tap &&
                            (s ||
                                ((i += `var _tap${t} = ${this.getTap(t)};
`),
                                (s = !0)),
                            (i += `${this.getInterceptor(e)}.tap(${r.context ? '_context, ' : ''}_tap${t});
`));
                    }
                    i += `var _fn${t} = ${this.getTapFn(t)};
`;
                    let a = this.options.taps[t];
                    switch (a.type) {
                        case 'sync':
                            (o ||
                                ((i += `var _hasError${t} = false;
`),
                                (i += 'try {\n')),
                                r
                                    ? (i += `var _result${t} = _fn${t}(${this.args({ before: a.context ? '_context' : void 0 })});
`)
                                    : (i += `_fn${t}(${this.args({ before: a.context ? '_context' : void 0 })});
`),
                                o ||
                                    ((i += '} catch(_err) {\n'),
                                    (i += `_hasError${t} = true;
`),
                                    (i += e('_err')),
                                    (i += '}\n'),
                                    (i += `if(!_hasError${t}) {
`)),
                                r && (i += r(`_result${t}`)),
                                n && (i += n()),
                                o || (i += '}\n'));
                            break;
                        case 'async': {
                            let o = '';
                            ((o += r
                                ? `(function(_err${t}, _result${t}) {
`
                                : `(function(_err${t}) {
`),
                                (o += `if(_err${t}) {
`),
                                (o += e(`_err${t}`)),
                                (o += '} else {\n'),
                                r && (o += r(`_result${t}`)),
                                n && (o += n()),
                                (o += '}\n'),
                                (o += '})'),
                                (i += `_fn${t}(${this.args({ before: a.context ? '_context' : void 0, after: o })});
`));
                            break;
                        }
                        case 'promise':
                            ((i += `var _hasResult${t} = false;
`),
                                (i += `var _promise${t} = _fn${t}(${this.args({ before: a.context ? '_context' : void 0 })});
`),
                                (i += `if (!_promise${t} || !_promise${t}.then)
`),
                                (i += `  throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise${t} + ')');
`),
                                (i += `_promise${t}.then((function(_result${t}) {
`),
                                (i += `_hasResult${t} = true;
`),
                                r && (i += r(`_result${t}`)),
                                n && (i += n()),
                                (i += `}), function(_err${t}) {
`),
                                (i += `if(_hasResult${t}) throw _err${t};
`),
                                (i += e(`!_err${t} ? new Error('Tap function (tapPromise) rejects "' + _err${t} + '" value') : _err${t}`)),
                                (i += '});\n'));
                    }
                    return i;
                }
                callTapsSeries({ onError: t, onResult: e, resultReturns: r, onDone: n, doneReturns: o, rethrowIfPossible: i }) {
                    if (0 === this.options.taps.length) return n();
                    let s = this.options.taps.findIndex((t) => 'sync' !== t.type),
                        a = r || o,
                        u = '',
                        l = n,
                        c = 0;
                    for (let r = this.options.taps.length - 1; r >= 0; r--) {
                        let o = r;
                        l !== n &&
                            ('sync' !== this.options.taps[o].type || c++ > 20) &&
                            ((c = 0),
                            (u += `function _next${o}() {
`),
                            (u += l()),
                            (u += '}\n'),
                            (l = () => `${a ? 'return ' : ''}_next${o}();
`));
                        let p = l,
                            f = (t) => (t ? '' : n()),
                            h = this.callTap(o, {
                                onError: (e) => t(o, e, p, f),
                                onResult: e && ((t) => e(o, t, p, f)),
                                onDone: !e && p,
                                rethrowIfPossible: i && (s < 0 || o < s),
                            });
                        l = () => h;
                    }
                    return u + l();
                }
                callTapsLooping({ onError: t, onDone: e, rethrowIfPossible: r }) {
                    if (0 === this.options.taps.length) return e();
                    let n = this.options.taps.every((t) => 'sync' === t.type),
                        o = '';
                    (n || ((o += 'var _looper = (function() {\n'), (o += 'var _loopAsync = false;\n')),
                        (o += 'var _loop;\n'),
                        (o += 'do {\n'),
                        (o += '_loop = false;\n'));
                    for (let t = 0; t < this.options.interceptors.length; t++) {
                        let e = this.options.interceptors[t];
                        e.loop &&
                            (o += `${this.getInterceptor(t)}.loop(${this.args({ before: e.context ? '_context' : void 0 })});
`);
                    }
                    return (
                        (o += this.callTapsSeries({
                            onError: t,
                            onResult: (t, e, r, o) => {
                                let i = '';
                                return (
                                    (i += `if(${e} !== undefined) {
`),
                                    (i += '_loop = true;\n'),
                                    n || (i += 'if(_loopAsync) _looper();\n'),
                                    (i += o(!0)),
                                    (i += '} else {\n'),
                                    (i += r()),
                                    (i += '}\n')
                                );
                            },
                            onDone:
                                e &&
                                (() => {
                                    let t = '';
                                    return ((t += 'if(!_loop) {\n'), (t += e()), (t += '}\n'));
                                }),
                            rethrowIfPossible: r && n,
                        })),
                        (o += '} while(_loop);\n'),
                        n || ((o += '_loopAsync = true;\n'), (o += '});\n'), (o += '_looper();\n')),
                        o
                    );
                }
                callTapsParallel({ onError: t, onResult: e, onDone: r, rethrowIfPossible: n, onTap: o = (t, e) => e() }) {
                    if (this.options.taps.length <= 1) return this.callTapsSeries({ onError: t, onResult: e, onDone: r, rethrowIfPossible: n });
                    let i = '';
                    ((i += 'do {\n'),
                        (i += `var _counter = ${this.options.taps.length};
`),
                        r && ((i += 'var _done = (function() {\n'), (i += r()), (i += '});\n')));
                    for (let s = 0; s < this.options.taps.length; s++) {
                        let a = () => (r ? 'if(--_counter === 0) _done();\n' : '--_counter;'),
                            u = (t) => (t || !r ? '_counter = 0;\n' : '_counter = 0;\n_done();\n');
                        ((i += 'if(_counter <= 0) break;\n'),
                            (i += o(
                                s,
                                () =>
                                    this.callTap(s, {
                                        onError: (e) => {
                                            let r = '';
                                            return ((r += 'if(_counter > 0) {\n'), (r += t(s, e, a, u)), (r += '}\n'));
                                        },
                                        onResult:
                                            e &&
                                            ((t) => {
                                                let r = '';
                                                return ((r += 'if(_counter > 0) {\n'), (r += e(s, t, a, u)), (r += '}\n'));
                                            }),
                                        onDone: !e && (() => a()),
                                        rethrowIfPossible: n,
                                    }),
                                a,
                                u,
                            )));
                    }
                    return i + '} while(false);\n';
                }
                args({ before: t, after: e } = {}) {
                    let r = this._args;
                    return (t && (r = [t, ...r]), e && (r = [...r, e]), 0 === r.length) ? '' : r.join(', ');
                }
                getTapFn(t) {
                    return `_x[${t}]`;
                }
                getTap(t) {
                    return `_taps[${t}]`;
                }
                getInterceptor(t) {
                    return `_interceptors[${t}]`;
                }
            }
            t.exports = e;
        },
    },
]);
