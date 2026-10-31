(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1052],
    {
        1571: () => {},
        2151: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'setAttributesFromProps', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let r = { acceptCharset: 'accept-charset', className: 'class', htmlFor: 'for', httpEquiv: 'http-equiv', noModule: 'noModule' },
                n = ['onLoad', 'onReady', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'stylesheets'];
            function i(e) {
                return ['async', 'defer', 'noModule'].includes(e);
            }
            function a(e, t) {
                for (let [a, o] of Object.entries(t)) {
                    if (!t.hasOwnProperty(a) || n.includes(a) || void 0 === o) continue;
                    let s = r[a] || a.toLowerCase();
                    ('SCRIPT' === e.tagName && i(s) ? (e[s] = !!o) : e.setAttribute(s, String(o)),
                        (!1 === o || ('SCRIPT' === e.tagName && i(s) && (!o || 'false' === o))) && (e.setAttribute(s, ''), e.removeAttribute(s)));
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        4847: () => {},
        6260: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => i });
            var n = r(53548),
                i = r(41158).O ? n.useLayoutEffect : n.useEffect;
        },
        6782: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { useUserID: () => n.w }));
            var n = r(45390);
        },
        11008: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    default: function () {
                        return v;
                    },
                    handleClientScriptLoad: function () {
                        return p;
                    },
                    initScriptLoader: function () {
                        return m;
                    },
                }));
            let n = r(70405),
                i = r(28854),
                a = r(88800),
                o = n._(r(53405)),
                s = i._(r(53548)),
                l = r(20995),
                u = r(2151),
                c = r(23107),
                d = new Map(),
                f = new Set(),
                h = (e) => {
                    let {
                            src: t,
                            id: r,
                            onLoad: n = () => {},
                            onReady: i = null,
                            dangerouslySetInnerHTML: a,
                            children: s = '',
                            strategy: l = 'afterInteractive',
                            onError: c,
                            stylesheets: h,
                        } = e,
                        p = r || t;
                    if (p && f.has(p)) return;
                    if (d.has(t)) {
                        (f.add(p), d.get(t).then(n, c));
                        return;
                    }
                    let m = () => {
                            (i && i(), f.add(p));
                        },
                        g = document.createElement('script'),
                        v = new Promise((e, t) => {
                            (g.addEventListener('load', function (t) {
                                (e(), n && n.call(this, t), m());
                            }),
                                g.addEventListener('error', function (e) {
                                    t(e);
                                }));
                        }).catch(function (e) {
                            c && c(e);
                        });
                    (a
                        ? ((g.innerHTML = a.__html || ''), m())
                        : s
                          ? ((g.textContent = 'string' == typeof s ? s : Array.isArray(s) ? s.join('') : ''), m())
                          : t && ((g.src = t), d.set(t, v)),
                        (0, u.setAttributesFromProps)(g, e),
                        'worker' === l && g.setAttribute('type', 'text/partytown'),
                        g.setAttribute('data-nscript', l),
                        h &&
                            ((e) => {
                                if (o.default.preinit)
                                    return e.forEach((e) => {
                                        o.default.preinit(e, { as: 'style' });
                                    });
                                {
                                    let t = document.head;
                                    e.forEach((e) => {
                                        let r = document.createElement('link');
                                        ((r.type = 'text/css'), (r.rel = 'stylesheet'), (r.href = e), t.appendChild(r));
                                    });
                                }
                            })(h),
                        document.body.appendChild(g));
                };
            function p(e) {
                let { strategy: t = 'afterInteractive' } = e;
                'lazyOnload' === t
                    ? window.addEventListener('load', () => {
                          (0, c.requestIdleCallback)(() => h(e));
                      })
                    : h(e);
            }
            function m(e) {
                (e.forEach(p),
                    [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(
                        (e) => {
                            let t = e.id || e.getAttribute('src');
                            f.add(t);
                        },
                    ));
            }
            function g(e) {
                let { id: t, src: r = '', onLoad: n = () => {}, onReady: i = null, strategy: u = 'afterInteractive', onError: d, stylesheets: p, ...m } = e,
                    { updateScripts: g, scripts: v, getIsSsr: y, appDir: S, nonce: w } = (0, s.useContext)(l.HeadManagerContext);
                w = m.nonce || w;
                let b = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let e = t || r;
                    b.current || (i && e && f.has(e) && i(), (b.current = !0));
                }, [i, t, r]);
                let E = (0, s.useRef)(!1);
                if (
                    ((0, s.useEffect)(() => {
                        if (!E.current) {
                            if ('afterInteractive' === u) h(e);
                            else
                                'lazyOnload' === u &&
                                    ('complete' === document.readyState
                                        ? (0, c.requestIdleCallback)(() => h(e))
                                        : window.addEventListener('load', () => {
                                              (0, c.requestIdleCallback)(() => h(e));
                                          }));
                            E.current = !0;
                        }
                    }, [e, u]),
                    ('beforeInteractive' === u || 'worker' === u) &&
                        (g
                            ? ((v[u] = (v[u] || []).concat([{ id: t, src: r, onLoad: n, onReady: i, onError: d, ...m, nonce: w }])), g(v))
                            : y && y()
                              ? f.add(t || r)
                              : y && !y() && h({ ...e, nonce: w })),
                    S)
                ) {
                    if (
                        (p &&
                            p.forEach((e) => {
                                o.default.preinit(e, { as: 'style' });
                            }),
                        'beforeInteractive' === u)
                    )
                        if (!r)
                            return (
                                m.dangerouslySetInnerHTML && ((m.children = m.dangerouslySetInnerHTML.__html), delete m.dangerouslySetInnerHTML),
                                (0, a.jsx)('script', {
                                    nonce: w,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([0, { ...m, id: t }]) + ')' },
                                })
                            );
                        else
                            return (
                                o.default.preload(
                                    r,
                                    m.integrity
                                        ? { as: 'script', integrity: m.integrity, nonce: w, crossOrigin: m.crossOrigin }
                                        : { as: 'script', nonce: w, crossOrigin: m.crossOrigin },
                                ),
                                (0, a.jsx)('script', {
                                    nonce: w,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([r, { ...m, id: t }]) + ')' },
                                })
                            );
                    'afterInteractive' === u &&
                        r &&
                        o.default.preload(
                            r,
                            m.integrity
                                ? { as: 'script', integrity: m.integrity, nonce: w, crossOrigin: m.crossOrigin }
                                : { as: 'script', nonce: w, crossOrigin: m.crossOrigin },
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
        12389: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    default: function () {
                        return g;
                    },
                    useLinkStatus: function () {
                        return y;
                    },
                }));
            let n = r(28854),
                i = r(88800),
                a = n._(r(53548)),
                o = r(74428),
                s = r(92746),
                l = r(7733),
                u = r(13985),
                c = r(20498),
                d = r(13872);
            r(4115);
            let f = r(53437),
                h = r(87013),
                p = r(48985);
            function m(e) {
                return 'string' == typeof e ? e : (0, o.formatUrl)(e);
            }
            function g(e) {
                let t,
                    r,
                    n,
                    [o, g] = (0, a.useOptimistic)(f.IDLE_LINK_STATUS),
                    y = (0, a.useRef)(null),
                    {
                        href: S,
                        as: w,
                        children: b,
                        prefetch: E = null,
                        passHref: T,
                        replace: C,
                        shallow: P,
                        scroll: I,
                        onClick: x,
                        onMouseEnter: _,
                        onTouchStart: k,
                        legacyBehavior: L = !1,
                        onNavigate: M,
                        ref: O,
                        unstable_dynamicOnHover: N,
                        ...A
                    } = e;
                ((t = b), L && ('string' == typeof t || 'number' == typeof t) && (t = (0, i.jsx)('a', { children: t })));
                let D = a.default.useContext(s.AppRouterContext),
                    j = !1 !== E,
                    B = null === E || 'auto' === E ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
                    { href: R, as: W } = a.default.useMemo(() => {
                        let e = m(S);
                        return { href: e, as: w ? m(w) : e };
                    }, [S, w]);
                L && (r = a.default.Children.only(t));
                let U = L ? r && 'object' == typeof r && r.ref : O,
                    F = a.default.useCallback(
                        (e) => (
                            null !== D && (y.current = (0, f.mountLinkInstance)(e, R, D, B, j, g)),
                            () => {
                                (y.current && ((0, f.unmountLinkForCurrentNavigation)(y.current), (y.current = null)), (0, f.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [j, R, D, B, g],
                    ),
                    H = {
                        ref: (0, u.useMergedRef)(F, U),
                        onClick(e) {
                            (L || 'function' != typeof x || x(e),
                                L && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
                                D &&
                                    (e.defaultPrevented ||
                                        (function (e, t, r, n, i, o, s) {
                                            let { nodeName: l } = e.currentTarget;
                                            if (
                                                !(
                                                    ('A' === l.toUpperCase() &&
                                                        (function (e) {
                                                            let t = e.currentTarget.getAttribute('target');
                                                            return (
                                                                (t && '_self' !== t) ||
                                                                e.metaKey ||
                                                                e.ctrlKey ||
                                                                e.shiftKey ||
                                                                e.altKey ||
                                                                (e.nativeEvent && 2 === e.nativeEvent.which)
                                                            );
                                                        })(e)) ||
                                                    e.currentTarget.hasAttribute('download')
                                                )
                                            ) {
                                                if (!(0, h.isLocalURL)(t)) {
                                                    i && (e.preventDefault(), location.replace(t));
                                                    return;
                                                }
                                                if ((e.preventDefault(), s)) {
                                                    let e = !1;
                                                    if (
                                                        (s({
                                                            preventDefault: () => {
                                                                e = !0;
                                                            },
                                                        }),
                                                        e)
                                                    )
                                                        return;
                                                }
                                                a.default.startTransition(() => {
                                                    (0, p.dispatchNavigateAction)(r || t, i ? 'replace' : 'push', null == o || o, n.current);
                                                });
                                            }
                                        })(e, R, W, y, C, I, M)));
                        },
                        onMouseEnter(e) {
                            (L || 'function' != typeof _ || _(e),
                                L && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                                D && j && (0, f.onNavigationIntent)(e.currentTarget, !0 === N));
                        },
                        onTouchStart: function (e) {
                            (L || 'function' != typeof k || k(e),
                                L && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                                D && j && (0, f.onNavigationIntent)(e.currentTarget, !0 === N));
                        },
                    };
                return (
                    (0, c.isAbsoluteUrl)(W) ? (H.href = W) : (L && !T && ('a' !== r.type || 'href' in r.props)) || (H.href = (0, d.addBasePath)(W)),
                    (n = L ? a.default.cloneElement(r, H) : (0, i.jsx)('a', { ...A, ...H, children: t })),
                    (0, i.jsx)(v.Provider, { value: o, children: n })
                );
            }
            r(36155);
            let v = (0, a.createContext)(f.IDLE_LINK_STATUS),
                y = () => (0, a.useContext)(v);
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        13985: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'useMergedRef', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let n = r(53548);
            function i(e, t) {
                let r = (0, n.useRef)(null),
                    i = (0, n.useRef)(null);
                return (0, n.useCallback)(
                    (n) => {
                        if (null === n) {
                            let e = r.current;
                            e && ((r.current = null), e());
                            let t = i.current;
                            t && ((i.current = null), t());
                        } else (e && (r.current = a(e, n)), t && (i.current = a(t, n)));
                    },
                    [e, t],
                );
            }
            function a(e, t) {
                if ('function' != typeof e)
                    return (
                        (e.current = t),
                        () => {
                            e.current = null;
                        }
                    );
                {
                    let r = e(t);
                    return 'function' == typeof r ? r : () => e(null);
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        16133: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => d });
            var n = r(44114);
            let i = ['', '-webkit-', '-ms-', '-moz-', '-o-'],
                a = {}.toString,
                o = /\[object (\w+)\]/;
            function s(e, t) {
                var r;
                if (
                    'function' != typeof (r = e.matchMedia) &&
                    'Function' !==
                        ((e) => {
                            let t = a.call(e);
                            if (!t) return null;
                            let r = t.match(o);
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
                u = i.map((e) => `(${e}touch-enabled)`).join(',');
            var c = r(88485);
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
                                                            s(e, l) ||
                                                            s(e, u) ||
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
                            return (t.unshift(e), t.map((e) => ({ location: (0, c.K)(e.defaultView), referrer: e.referrer })));
                        })(e)
                            .reverse()
                            .forEach(({ location: e, referrer: n }) => {
                                ((t = t || e), (r = r || n));
                            }),
                    { location: t, referrer: r }
                );
            }
        },
        20498: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    DecodeError: function () {
                        return p;
                    },
                    MiddlewareNotFoundError: function () {
                        return y;
                    },
                    MissingStaticPage: function () {
                        return v;
                    },
                    NormalizeError: function () {
                        return m;
                    },
                    PageNotFoundError: function () {
                        return g;
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
                        return l;
                    },
                    getLocationOrigin: function () {
                        return o;
                    },
                    getURL: function () {
                        return s;
                    },
                    isAbsoluteUrl: function () {
                        return a;
                    },
                    isResSent: function () {
                        return u;
                    },
                    loadGetInitialProps: function () {
                        return d;
                    },
                    normalizeRepeatedSlashes: function () {
                        return c;
                    },
                    stringifyError: function () {
                        return S;
                    },
                }));
            let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
            function n(e) {
                let t,
                    r = !1;
                return function () {
                    for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (r || ((r = !0), (t = e(...i))), t);
                };
            }
            let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                a = (e) => i.test(e);
            function o() {
                let { protocol: e, hostname: t, port: r } = window.location;
                return e + '//' + t + (r ? ':' + r : '');
            }
            function s() {
                let { href: e } = window.location,
                    t = o();
                return e.substring(t.length);
            }
            function l(e) {
                return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
            }
            function u(e) {
                return e.finished || e.headersSent;
            }
            function c(e) {
                let t = e.split('?');
                return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
            }
            async function d(e, t) {
                let r = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await d(t.Component, t.ctx) } : {};
                let n = await e.getInitialProps(t);
                if (r && u(r)) return n;
                if (!n)
                    throw Object.defineProperty(
                        Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return n;
            }
            let f = 'undefined' != typeof performance,
                h = f && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
            class p extends Error {}
            class m extends Error {}
            class g extends Error {
                constructor(e) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e));
                }
            }
            class v extends Error {
                constructor(e, t) {
                    (super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t));
                }
            }
            class y extends Error {
                constructor() {
                    (super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
                }
            }
            function S(e) {
                return JSON.stringify({ message: e.message, stack: e.stack });
            }
        },
        20603: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (0, r(94177).createAsyncLocalStorage)();
        },
        23107: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    cancelIdleCallback: function () {
                        return n;
                    },
                    requestIdleCallback: function () {
                        return r;
                    },
                }));
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
        24031: () => {},
        25136: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { lock: () => v, unlock: () => y }));
            var n,
                i = r(41158);
            function a(e) {
                return 'undefined' != typeof window && null != window.navigator && e.test(window.navigator.userAgent);
            }
            function o() {
                return a(/iphone|ipod|ipad/i) || (a(/macintosh/i) && navigator.maxTouchPoints > 1);
            }
            function s(e, t) {
                var r = {};
                for (var n in t) t.hasOwnProperty(n) && (r[n] = e.style[n]);
                for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n]);
                return r;
            }
            function l(e) {
                return e === document.body || e === document.documentElement;
            }
            var u = Math.random().toString(36).slice(2),
                c = '__scrollLockState$'.concat(u),
                d = !(function () {
                    var e = !1;
                    if (!i.O) return !1;
                    try {
                        var t = function () {
                            return null;
                        };
                        (window.addEventListener('testPassive', t, {
                            get passive() {
                                e = !0;
                                return;
                            },
                        }),
                            window.removeEventListener('testPassive', t));
                    } catch (e) {}
                    return e;
                })()
                    ? void 0
                    : { passive: !1 },
                f = { count: 0, lastX: 0, lastY: 0, scrollable: null, scrollX: 0, scrollY: 0 };
            function h(e) {
                1 === e.changedTouches.length &&
                    ((f.scrollable = (function (e) {
                        for (var t; e && ((t = getComputedStyle(e)), !/(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY));) e = e.parentElement;
                        return e || document.documentElement;
                    })(e.target)),
                    l(f.scrollable) || ((f.lastX = e.changedTouches[0].pageX), (f.lastY = e.changedTouches[0].pageY)));
            }
            function p(e) {
                var t = f.scrollable,
                    r = f.lastX,
                    n = f.lastY;
                if (!(e.changedTouches.length > 1)) {
                    if (!t || l(t)) return void e.preventDefault();
                    var i = e.changedTouches[0].pageX,
                        a = e.changedTouches[0].pageY,
                        o = Math.abs(n - a) > Math.abs(r - i),
                        s = t.scrollTop,
                        u = t.scrollHeight - t.clientHeight,
                        c = t.scrollLeft,
                        d = t.scrollWidth - t.clientWidth,
                        h = !o && ((c <= 0 && i > r) || (c >= d && i < r));
                    (((o && ((s <= 0 && a > n) || (s >= u && a < n))) || h) && e.preventDefault(), (f.lastX = i), (f.lastY = a));
                }
            }
            function m() {
                f.scrollable && (f.scrollable = null);
            }
            function g(e) {
                return e || document.body;
            }
            function v(e) {
                if (i.O) {
                    var t = g(e);
                    (!(function (e) {
                        var t = e[c];
                        if (t) return t.count++;
                        var r = (function (e) {
                                var t,
                                    r = l(e) && window.innerWidth - document.documentElement.clientWidth > 0,
                                    i = e.scrollHeight > e.clientHeight;
                                if (r || i || ((t = getComputedStyle(e).overflowY), /scroll/.test(t))) {
                                    if ('undefined' == typeof document) return 0;
                                    if (void 0 === n) {
                                        var a = document.createElement('div');
                                        ((a.style.width = '100%'), (a.style.height = '200px'));
                                        var o = document.createElement('div');
                                        ((o.style.position = 'absolute'),
                                            (o.style.top = '0'),
                                            (o.style.left = '0'),
                                            (o.style.pointerEvents = 'none'),
                                            (o.style.visibility = 'hidden'),
                                            (o.style.width = '200px'),
                                            (o.style.height = '150px'),
                                            (o.style.overflow = 'hidden'),
                                            o.appendChild(a),
                                            document.body.appendChild(o));
                                        var s = a.offsetWidth;
                                        o.style.overflow = 'scroll';
                                        var u = a.offsetWidth;
                                        (s === u && (u = o.clientWidth), document.body.removeChild(o), (n = s - u));
                                    }
                                    return n;
                                }
                                return 0;
                            })(e),
                            i = parseInt(getComputedStyle(e).getPropertyValue('padding-right'), 10),
                            a = s(e, { paddingRight: ''.concat(i + r, 'px'), overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' });
                        e[c] = { initialStyle: a, count: 1 };
                    })(t),
                        o() &&
                            l(t) &&
                            (f.count++,
                            1 === f.count &&
                                ((f.scrollX = window.pageXOffset),
                                (f.scrollY = window.pageYOffset),
                                document.addEventListener('touchstart', h, d),
                                document.addEventListener('touchmove', p, d),
                                document.addEventListener('touchend', m, d))));
                }
            }
            function y(e) {
                if (i.O) {
                    var t = g(e),
                        r = t[c];
                    (r && (r.count--, 0 === r.count) && (s(t, r.initialStyle), delete t[c]),
                        o() &&
                            l(t) &&
                            0 !== f.count &&
                            (f.count--,
                            0 === f.count &&
                                (document.removeEventListener('touchstart', h),
                                document.removeEventListener('touchmove', p),
                                document.removeEventListener('touchend', m),
                                window.scrollTo(f.scrollX, f.scrollY))));
                }
            }
        },
        28396: (e, t, r) => {
            'use strict';
            t.H = void 0;
            var n = r(88092),
                i = r(53548),
                a = r(72917),
                o = n.__importStar(r(25136));
            t.H = function (e) {
                var t = e.enabled,
                    r = e.containerRef,
                    n = (0, i.useRef)(null),
                    s = (0, i.useRef)(!1);
                ((0, a.useIsomorphicLayoutEffect)(function () {
                    var e = r ? r.current : null;
                    n.current !== e && (t && s.current && (o.unlock(n.current), o.lock(e)), (n.current = e));
                }),
                    (0, a.useIsomorphicLayoutEffect)(
                        function () {
                            if (t)
                                return (
                                    (s.current = !0),
                                    o.lock(n.current),
                                    function () {
                                        ((s.current = !1), o.unlock(n.current));
                                    }
                                );
                        },
                        [t],
                    ));
            };
        },
        28617: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => u });
            var n = r(53548),
                i = r(45002),
                a = r(28396);
            r(24031);
            var o = (0, i.cn)('UserID', 'CloseButton'),
                s = function (e) {
                    var t = e.onClick,
                        r = e.colorScheme;
                    return n.createElement(
                        'button',
                        { className: o({ colorScheme: r }), onClick: t, 'aria-label': 'Закрыть', tabIndex: 1 },
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
            r(70009);
            var l = (0, i.cn)('UserWidget', 'Dialog'),
                u = (0, n.forwardRef)(function (e, t) {
                    var r,
                        i,
                        o = e.visible,
                        u = e.loading,
                        c = e.colorScheme,
                        d = e.platform,
                        f = e.onClose,
                        h = e.className;
                    return (
                        (0, a.H)({ enabled: o && 'touch' === d }),
                        (r = { onScroll: f }),
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
                                'aria-busy': u,
                                'aria-modal': 'true',
                                className: l('Dialog', { visible: o, loading: u, colorScheme: c, platform: d }, [h]),
                                ref: t,
                            },
                            u && n.createElement(s, { colorScheme: c, onClick: f }),
                            e.children,
                        )
                    );
                });
        },
        35355: () => {},
        36155: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'errorOnce', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let r = (e) => {};
        },
        37531: (e, t, r) => {
            'use strict';
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(36271));
        },
        41158: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => n });
            var n = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
        },
        43738: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { Content: () => n.U, cnUserID: () => n.K }));
            var n = r(46671);
        },
        44114: (e) => {
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
        45002: (e, t, r) => {
            'use strict';
            e.exports = r(73841);
        },
        45028: (e, t, r) => {
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
            function o(e) {
                return i(Math.floor(e));
            }
            r.d(t, { WQ: () => d, Qr: () => p, lw: () => h, gL: () => f, bY: () => u, Wj: () => c, Lp: () => l, fP: () => s, PY: () => a, Pn: () => o });
            let s = n,
                l = n,
                u = n,
                c = n,
                d = (e, ...t) => {
                    let r = e;
                    for (let e = 0; e < t.length; e++) r += t[e];
                    return r;
                };
            d.operator = '+';
            let f = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r -= t[e];
                return r;
            };
            f.operator = '-';
            let h = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r *= t[e];
                return r;
            };
            h.operator = '*';
            let p = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r /= t[e];
                return r;
            };
            p.operator = '/';
        },
        45390: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => x });
            var n,
                i,
                a = r(88092),
                o = r(53548),
                s = r(45954),
                l = r(6260),
                u = [],
                c = null,
                d = null;
            function f() {
                return u[u.length - 1];
            }
            function h(e, t, r) {
                var n,
                    i,
                    a = f();
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
            function p(e) {
                var t = e.key;
                ('Escape' === t || 'Esc' === t) && h(e, 'esc');
            }
            function m(e) {
                ((c = e.target), (d = f()), h(e, 'click', 'pressdown'));
            }
            function g(e) {
                var t = c;
                c = null;
                var r = d;
                ((d = null), e.button > 0 || r !== f() || (t === e.target && h(e, 'click', 'pressup')));
            }
            var v = Object.freeze({
                    count: function () {
                        return u.length;
                    },
                    addOverlay: function (e) {
                        (0 === u.length &&
                            (document.addEventListener('keyup', p), document.addEventListener('pointerdown', m, !0), document.addEventListener('click', g, !0)),
                            u.push(e));
                    },
                    removeOverlay: function (e) {
                        (u.splice(u.indexOf(e), 1),
                            0 === u.length &&
                                (document.removeEventListener('keyup', p),
                                document.removeEventListener('pointerdown', m, !0),
                                document.removeEventListener('click', g, !0)));
                    },
                    getTopOverlayOptions: f,
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
                T = function (e) {
                    var t = e.enabled,
                        r = e.onHeightChange,
                        n = (0, a.__read)((0, o.useState)(b ? E() : void 0), 2),
                        i = n[0],
                        s = n[1],
                        u = (0, o.useCallback)(
                            function () {
                                var e = E();
                                i !== e && (s(E()), r(e));
                            },
                            [i, r],
                        );
                    (0, l.E)(
                        function () {
                            if (t)
                                return (
                                    window.addEventListener('resize', u),
                                    function () {
                                        window.removeEventListener('resize', u);
                                    }
                                );
                        },
                        [u, t],
                    );
                },
                C = function (e) {
                    var t = e.touchBreakpointWidth,
                        r = void 0 === t ? 520 : t,
                        n = e.platform,
                        i = void 0 === n ? 'auto' : n,
                        s = (0, a.__read)((0, o.useState)(), 2),
                        u = s[0],
                        c = s[1];
                    return (
                        (0, o.useEffect)(
                            function () {
                                if ('auto' !== i) return void c(i);
                                b && c(window.matchMedia('(max-width: ' + r + 'px)').matches ? 'touch' : 'desktop');
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
                                    e.matches ? c('touch') : c('desktop');
                                }
                            },
                            [u, c, r],
                        ),
                        u
                    );
                },
                P = ['tr', 'am', 'ge'],
                I = ['il'];
            function x(e) {
                var t,
                    r,
                    n,
                    i,
                    u,
                    c,
                    d,
                    f,
                    h,
                    p,
                    m,
                    g,
                    y,
                    S,
                    x,
                    _ = e.avatarRef,
                    k = e.avatarSize,
                    L = void 0 === k ? [42, 22] : k,
                    M = e.colorScheme,
                    O = void 0 === M ? 'light' : M,
                    N = e.dialogClassName,
                    A = e.dialogRef,
                    D = e.dir,
                    j = void 0 === D ? 'ltr' : D,
                    B = e.env,
                    R = void 0 === B ? 'prod' : B,
                    W = e.essentialRef,
                    U = e.features,
                    F = e.fetchUserData,
                    H = e.host,
                    Y = e.iframeRef,
                    V = e.lang,
                    K = e.onClose,
                    J = e.onLoad,
                    Q = e.onMenuItemClick,
                    z = e.onOpen,
                    G = e.onThemeChange,
                    X = e.onLocaleChange,
                    q = e.platform,
                    $ = e.preload,
                    Z = void 0 !== $ && $,
                    ee = e.project,
                    et = e.queryParams,
                    er = e.dynamicParams,
                    en = e.retpath,
                    ei = e.rpcHandlers,
                    ea = e.theme,
                    eo = e.tld,
                    es = e.touchBreakpointWidth,
                    el = e.userData,
                    eu = e.visible,
                    ec = void 0 !== eu && eu,
                    ed = (0, o.useRef)({}),
                    ef = (0, o.useRef)(null),
                    eh = (0, o.useRef)(null),
                    ep = (0, o.useRef)(null),
                    em =
                        ((t = void 0 === eo ? 'ru' : eo),
                        (0, o.useMemo)(
                            function () {
                                return P.includes(t) ? 'com.' + t : I.includes(t) ? 'co.' + t : t;
                            },
                            [t],
                        ));
                ((0, s.N)(ef, _ || (0, o.createRef)()), (eh = null != A ? A : eh), (ep = null != Y ? Y : ep));
                var eg = (0, a.__read)((0, o.useState)(!0), 2),
                    ev = eg[0],
                    ey = eg[1],
                    eS = (0, o.useMemo)(
                        function () {
                            return b ? en || location.href : en;
                        },
                        [en],
                    ),
                    ew = (0, a.__read)((0, o.useState)(Z), 2),
                    eb = ew[0],
                    eE = ew[1],
                    eT = (0, o.useRef)({ colorScheme: O, theme: ea, retpath: eS }),
                    eC = (0, o.useMemo)(
                        function () {
                            if (H) return 'https://' + H;
                            if ('prod_yateam' === R) return 'https://user-id.yandex-team.ru';
                            if (b) {
                                var e = new URL(location.href).searchParams.get('user_id_host');
                                if (e) return 'https://' + e;
                            }
                            return 'https://yandex.' + em;
                        },
                        [H, em, R],
                    ),
                    eP = (0, o.useMemo)(
                        function () {
                            eb ||
                                (eT.current.colorScheme === O && eT.current.theme === ea && eT.current.retpath === eS) ||
                                (eT.current = { colorScheme: O, theme: ea, retpath: eS });
                            var e = new URL('user-id', eC);
                            if (
                                (eT.current.retpath && e.searchParams.set('encodedRetpath', encodeURIComponent(eT.current.retpath)),
                                eT.current.colorScheme && e.searchParams.set('colorScheme', eT.current.colorScheme),
                                eT.current.theme && e.searchParams.set('theme', eT.current.theme),
                                V && e.searchParams.set('l10n', V),
                                Array.isArray(U))
                            ) {
                                var t = U.join(',');
                                e.searchParams.set('exp_flags', t);
                            }
                            for (var r in (ee && e.searchParams.set('project', ee), R && e.searchParams.set('env', R), e.searchParams.set('dir', j), et))
                                e.searchParams.set(r, et[r]);
                            for (var r in er) e.searchParams.set(r, er[r]);
                            return e.toString();
                        },
                        [eC, U, ee, et, er, O, ea, eS, eb, R, j, V],
                    );
                (0, o.useEffect)(
                    function () {
                        !eb && (Z || F) && eE(!0);
                    },
                    [eb, Z, F],
                );
                var eI = C({ platform: q, touchBreakpointWidth: es }),
                    ex = (0, o.useCallback)(
                        function () {
                            eb || eE(!0);
                        },
                        [eb],
                    ),
                    e_ = (0, o.useMemo)(
                        function () {
                            return null === L ? null : 'number' == typeof L ? L : 'touch' === eI ? L[1] : L[0];
                        },
                        [eI, L],
                    ),
                    ek = (0, o.useCallback)(
                        function () {
                            var e;
                            (null == (e = ef.current) || e.focus(), null == K || K());
                        },
                        [K],
                    ),
                    eL = (0, a.__read)((0, o.useState)(), 2),
                    eM = eL[0],
                    eO = eL[1],
                    eN = (0, a.__read)((0, o.useState)(el), 2),
                    eA = eN[0],
                    eD = eN[1];
                (0, o.useEffect)(
                    function () {
                        eD(el);
                    },
                    [el],
                );
                var ej = (0, o.useCallback)(
                    function (e) {
                        if (b) {
                            if ('desktop' === eI) return void eO(e);
                            eO(E());
                        }
                    },
                    [eI],
                );
                T({ enabled: 'touch' === eI, onHeightChange: ej });
                var eB = (0, o.useRef)(),
                    eR = ((n = (r = {
                        loading: ev,
                        iframeRef: ep,
                        origin: eC,
                        rpcHandler: (0, o.useCallback)(
                            function (e, t) {
                                var r;
                                switch (e.methodCall) {
                                    case 'onInit':
                                        (F && eD(e.params[0]), null == J || J());
                                        break;
                                    case 'onDataLoad':
                                        var n = ed.current;
                                        if ('number' == typeof n.start && 'number' != typeof n.end && eB.current) {
                                            n.end = w();
                                            var i = n.end - n.start;
                                            eB.current({ methodCall: 'onSendTimeToInteractive', params: [{ delta: i }] });
                                        }
                                    case 'updateUserHeight':
                                        (ej(e.params[0].height), ey(!1));
                                        break;
                                    case 'ITEM_CLICK':
                                        var o = e.params[0];
                                        null == Q || Q(o.item, o, { onClose: ek });
                                        break;
                                    case 'closeUserID':
                                        null == ek || ek();
                                        break;
                                    case 'updateTheme':
                                        var s = e.params[0].theme;
                                        null == G || G(s);
                                        break;
                                    case 'updateLocale':
                                        var l = e.params[0].locale;
                                        null == X || X(l);
                                        break;
                                    default:
                                        if (!(null == ei ? void 0 : ei[e.methodCall])) return;
                                        Promise.resolve(
                                            null == (r = null == ei ? void 0 : ei[e.methodCall]) ? void 0 : r.call.apply(r, (0, a.__spread)([ei], e.params)),
                                        ).then(t);
                                }
                            },
                            [ei, Q, ek, G, X, ej, eD, F, J],
                        ),
                    }).loading),
                    (i = r.iframeRef),
                    (u = r.origin),
                    (c = r.rpcHandler),
                    (d = (0, o.useRef)([])),
                    (f = (0, o.useCallback)(
                        function (e) {
                            var t,
                                r,
                                a = JSON.stringify(e);
                            n ? d.current.push(a) : null == (r = null == (t = i.current) ? void 0 : t.contentWindow) || r.postMessage(a, '*');
                        },
                        [n, i],
                    )),
                    (h = (0, o.useCallback)(
                        function (e) {
                            var t;
                            if (e.origin === u) {
                                try {
                                    t = JSON.parse(e.data);
                                } catch (e) {
                                    return;
                                }
                                t.methodCall &&
                                    (null == c ||
                                        c((0, a.__assign)({}, t), function (e) {
                                            var r;
                                            f({
                                                returnCall: !0,
                                                params: [e],
                                                resultCallbackIndex: (null == (r = t.resultCallbackIndex) ? void 0 : r.__callbackId) || -1,
                                            });
                                        }));
                            }
                        },
                        [u, c, f],
                    )),
                    (0, o.useEffect)(
                        function () {
                            return (
                                window.addEventListener('message', h),
                                function () {
                                    window.removeEventListener('message', h);
                                }
                            );
                        },
                        [h],
                    ),
                    (0, o.useEffect)(
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
                    { sendMessage: f }).sendMessage;
                ((eB.current = eR),
                    (0, o.useEffect)(
                        function () {
                            eR({ methodCall: 'updateRetpath', params: [{ retpath: eS }] });
                        },
                        [eS, eR],
                    ),
                    (0, o.useEffect)(
                        function () {
                            eR({ methodCall: 'onParamsChange', params: [(0, a.__assign)({}, er)] });
                        },
                        [er, eR],
                    ),
                    (0, o.useEffect)(
                        function () {
                            eR({ methodCall: 'updateTheme', params: [{ colorScheme: O, theme: ea }] });
                        },
                        [O, eR, ea],
                    ));
                var eW = (0, o.useCallback)(
                        function (e) {
                            eR({ methodCall: 'focusFirst', params: [{ fromKeyboard: e }] });
                        },
                        [eR],
                    ),
                    eU = (0, o.useCallback)(
                        function () {
                            ec ? (eW(!0), ek()) : (eb || eE(!0), eW(!1), null == z || z());
                        },
                        [eW, z, eb, ec, ek],
                    );
                ((m = (p = {
                    visible: ec,
                    onClose: ek,
                    essentialRefs: (0, o.useMemo)(
                        function () {
                            var e = [eh, ef];
                            return (W && e.push(W), e);
                        },
                        [eh, ef, W],
                    ),
                }).visible),
                    (g = p.onClose),
                    (y = p.essentialRefs),
                    (S = p.unsafe_strategy),
                    ((x = (0, o.useRef)({ onClose: g, refs: y, closeStrategy: void 0 === S ? 'pressdown' : S })).current.onClose = g),
                    (x.current.refs = y),
                    (0, o.useEffect)(
                        function () {
                            if (m) {
                                var e = x.current;
                                return (
                                    v.addOverlay(e),
                                    function () {
                                        v.removeOverlay(e);
                                    }
                                );
                            }
                        },
                        [m],
                    ),
                    (0, l.E)(
                        function () {
                            var e;
                            ec && (null != (e = ed.current).start || (e.start = w()));
                        },
                        [ec],
                    ));
                var eF = { colorScheme: O, height: eM, loading: ev, preload: eb, ref: ep, src: eP, width: 'desktop' === eI ? 320 : '100%' },
                    eH = { className: N, colorScheme: O, platform: eI, ref: eh, visible: ec, onClose: ek, loading: ev };
                return {
                    avatarProps: { avatarSize: e_, env: R, onClick: eU, onPointerEnter: ex, platform: eI, ref: ef, retpath: eS, userData: eA, visible: ec, tld: em },
                    contentProps: eF,
                    dialogProps: eH,
                };
            }
        },
        45954: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var n = r(53548);
            function i(e, t) {
                (0, n.useImperativeHandle)(t, function () {
                    return e.current;
                });
            }
        },
        46671: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => a, U: () => o });
            var n = r(53548),
                i = r(45002);
            r(35355);
            var a = (0, i.cn)('UserWidget', 'Content'),
                o = n.forwardRef(function (e, t) {
                    var r = e.loading,
                        i = e.preload,
                        o = e.height,
                        s = e.colorScheme,
                        l = e.className,
                        u = e.src,
                        c = e.width;
                    return n.createElement(
                        'div',
                        { className: a({ loading: r, colorScheme: s }, [l]) },
                        i && n.createElement('iframe', { className: 'UserWidget-Iframe', ref: t, width: c, src: u, height: r ? 300 : o }),
                        r && n.createElement('div', { className: 'UserWidget-Spin' }),
                    );
                });
        },
        55555: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => i.a });
            var n = r(11008),
                i = r.n(n);
        },
        56804: (e, t) => {
            'use strict';
            function r(e) {
                let t = {};
                for (let [r, n] of e.entries()) {
                    let e = t[r];
                    void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n]);
                }
                return t;
            }
            function n(e) {
                return 'string' == typeof e ? e : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e ? '' : String(e);
            }
            function i(e) {
                let t = new URLSearchParams();
                for (let [r, i] of Object.entries(e))
                    if (Array.isArray(i)) for (let e of i) t.append(r, n(e));
                    else t.set(r, n(i));
                return t;
            }
            function a(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                for (let t of r) {
                    for (let r of t.keys()) e.delete(r);
                    for (let [r, n] of t.entries()) e.append(r, n);
                }
                return e;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    assign: function () {
                        return a;
                    },
                    searchParamsToUrlQuery: function () {
                        return r;
                    },
                    urlQueryToSearchParams: function () {
                        return i;
                    },
                }));
        },
        66219: (e) => {
            'use strict';
            e.exports = function e(t, r) {
                if (t === r) return !0;
                if (t && r && 'object' == typeof t && 'object' == typeof r) {
                    if (t.constructor !== r.constructor) return !1;
                    if (Array.isArray(t)) {
                        if ((n = t.length) != r.length) return !1;
                        for (i = n; 0 != i--;) if (!e(t[i], r[i])) return !1;
                        return !0;
                    }
                    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
                    if ((n = (a = Object.keys(t)).length) !== Object.keys(r).length) return !1;
                    for (i = n; 0 != i--;) if (!Object.prototype.hasOwnProperty.call(r, a[i])) return !1;
                    for (i = n; 0 != i--;) {
                        var n,
                            i,
                            a,
                            o = a[i];
                        if (!e(t[o], r[o])) return !1;
                    }
                    return !0;
                }
                return t != t && r != r;
            };
        },
        67531: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { Dialog: () => n.l }));
            var n = r(28617);
        },
        68326: (e, t, r) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(88800),
                r(53405),
                r(96669),
                r(86900));
        },
        69658: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { User: () => p, UserBase: () => f }));
            var n = r(53548),
                i = r(45002),
                a = r(45954),
                o = r(88092),
                s = function (e, t, r) {
                    return (void 0 === t && (t = '0/0-0'), 'prod_yateam' === e)
                        ? 'https://center.yandex-team.ru/api/v1/user/' + ('0/0-0' === t ? '404' : t) + '/avatar/' + (r ? '85' : '42') + '.jpg'
                        : ('test' !== e ? 'https://avatars.mds.yandex.net' : 'https://avatars.mdst.yandex.net') +
                              '/get-yapic/' +
                              t +
                              '/' +
                              (r ? 'islands-retina-middle' : 'islands-middle');
                };
            r(4847);
            var l = (0, i.cn)('UserID', 'Avatar'),
                u = function (e) {
                    var t,
                        r,
                        i,
                        a,
                        u = e.env,
                        c = e.avatarId,
                        d = e.plus,
                        f = e.child,
                        h = e.colorScheme,
                        p = e.className,
                        m = (0, o.__read)((0, n.useState)(!1), 2),
                        g = m[0],
                        v = m[1],
                        y =
                            ((r = (t = { avatarId: c, env: u }).env),
                            (i = t.avatarId),
                            {
                                src: (a = (0, n.useMemo)(
                                    function () {
                                        return s(r, i, !1);
                                    },
                                    [r, i],
                                )),
                                srcSet:
                                    a +
                                    ' 1x, ' +
                                    (0, n.useMemo)(
                                        function () {
                                            return s(r, i, !0);
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
                                window && f && e && v(e.getBoundingClientRect().width <= 36);
                            },
                            [f, b],
                        ),
                        n.createElement(
                            'div',
                            { className: l({ child: f, plus: d, small: g, dark: 'dark' === h }, [p]), ref: b },
                            n.createElement('img', { src: S, className: 'UserID-Avatar-Image', srcSet: w }),
                            f &&
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
            ((u.displayName = 'UserIDAvatar'), r(73616));
            var c = function (e) {
                var t = e.children,
                    r = e.fetchMail,
                    i = e.tld,
                    a = e.showCounter,
                    s = e.counterVariant,
                    l = void 0 === s ? 'number' : s,
                    u = e.colorScheme,
                    c = (0, o.__read)((0, n.useState)(0), 2),
                    d = c[0],
                    f = c[1];
                (0, n.useEffect)(
                    function () {
                        r &&
                            a &&
                            fetch('https://mail.yandex.' + i + '/api/v2/userid/counters?silent', { credentials: 'include' })
                                .then(function (e) {
                                    return e.json();
                                })
                                .then(function (e) {
                                    return f(e.counters.unread);
                                })
                                .catch(function (e) {});
                    },
                    [i, r, a],
                );
                var h = r && d > 0 ? Math.min(d, 99) : void 0,
                    p = !!(r && h && d > h),
                    m = h && a ? '' + h + (p ? '+' : '') : null,
                    g = r || a,
                    v = ['UserID-Badge-Dot', 'UserID-Badge-Dot_colorScheme_' + u, 'UserID-Badge-Dot_variant_' + l].join(' ');
                return n.createElement('div', { className: 'UserID-Badge' }, t, g && n.createElement('div', { className: v }, 'number' === l && m));
            };
            ((c.displayName = 'UserIDBadge'), r(1571));
            var d = (0, i.cn)('UserID', 'Wrapper'),
                f = (0, n.forwardRef)(function (e, t) {
                    var r = e.tld,
                        i = e.tabIndex,
                        o = e.children,
                        s = e.env,
                        l = e.colorScheme,
                        f = e.userData,
                        h = e.onClick,
                        p = e.onPointerEnter,
                        m = e.className,
                        g = e.fetchMail,
                        v = e.showCounter,
                        y = e.counterVariant,
                        S = e.visible,
                        w = e.ariaLabel,
                        b = e.avatarSize,
                        E = e.platform,
                        T = e.beforeAvatar,
                        C = e.afterAvatar,
                        P = f || {},
                        I = P.child,
                        x = P.plus,
                        _ = P.avatarId,
                        k = (0, n.useRef)(null);
                    return (
                        (0, a.N)(k, t),
                        n.createElement(
                            'div',
                            { className: d({ child: I, plus: x, default: !x }, [m]), style: null !== b ? { '--user-id-size': (b || 42) + 'px' } : void 0 },
                            n.createElement(
                                'button',
                                {
                                    'aria-expanded': S,
                                    'aria-haspopup': !0,
                                    'aria-label': w || 'Ваш профиль',
                                    className: 'UserID-Account',
                                    ref: k,
                                    role: 'button',
                                    tabIndex: void 0 === i ? 0 : i,
                                    onClick: h,
                                    onPointerEnter: p,
                                },
                                T,
                                n.createElement(
                                    c,
                                    {
                                        fetchMail: g && 'test' !== s,
                                        counterVariant: y,
                                        tld: void 0 === r ? 'ru' : r,
                                        colorScheme: l,
                                        showCounter: 'touch' !== E && (g || !0 === v),
                                    },
                                    n.createElement(u, { env: s, avatarId: _, plus: x, child: I, colorScheme: l }),
                                ),
                                C,
                            ),
                            o,
                        )
                    );
                });
            f.displayName = 'UserBase';
            var h = r(28617),
                p = (0, r(85720).B)(f, h.l);
        },
        70009: () => {},
        72917: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { useIsomorphicLayoutEffect: () => n.E }));
            var n = r(6260);
        },
        73616: () => {},
        73841: (e, t) => {
            'use strict';
            t.cn = (function (e) {
                function t(t, i, a, o) {
                    var s = i ? r + t + e.e + i : r + t,
                        l = s;
                    if (a) {
                        var u = ' ' + l + e.m;
                        for (var c in a)
                            if (a.hasOwnProperty(c)) {
                                var d = a[c];
                                !0 === d ? (l += u + c) : d && (l += u + c + n + d);
                            }
                    }
                    if (void 0 !== o)
                        for (var f = 0, h = o.length; f < h; f++) {
                            var p = o[f];
                            if (p && 'string' == typeof p.valueOf())
                                for (var m = p.valueOf().split(' '), g = 0; g < m.length; g++) {
                                    var v = m[g];
                                    v !== s && (l += ' ' + v);
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
        74428: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    formatUrl: function () {
                        return a;
                    },
                    formatWithValidation: function () {
                        return s;
                    },
                    urlObjectKeys: function () {
                        return o;
                    },
                }));
            let n = r(28854)._(r(56804)),
                i = /https?|ftp|gopher|file/;
            function a(e) {
                let { auth: t, hostname: r } = e,
                    a = e.protocol || '',
                    o = e.pathname || '',
                    s = e.hash || '',
                    l = e.query || '',
                    u = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (u = t + e.host) : r && ((u = t + (~r.indexOf(':') ? '[' + r + ']' : r)), e.port && (u += ':' + e.port)),
                    l && 'object' == typeof l && (l = String(n.urlQueryToSearchParams(l))));
                let c = e.search || (l && '?' + l) || '';
                return (
                    a && !a.endsWith(':') && (a += ':'),
                    e.slashes || ((!a || i.test(a)) && !1 !== u) ? ((u = '//' + (u || '')), o && '/' !== o[0] && (o = '/' + o)) : u || (u = ''),
                    s && '#' !== s[0] && (s = '#' + s),
                    c && '?' !== c[0] && (c = '?' + c),
                    '' + a + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace('#', '%23')) + s
                );
            }
            let o = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function s(e) {
                return a(e);
            }
        },
        78025: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
        },
        83579: (e) => {
            function t() {}
            ((t.prototype = {
                on: function (e, t, r) {
                    var n = this.e || (this.e = {});
                    return ((n[e] || (n[e] = [])).push({ fn: t, ctx: r }), this);
                },
                once: function (e, t, r) {
                    var n = this;
                    function i() {
                        (n.off(e, i), t.apply(r, arguments));
                    }
                    return ((i._ = t), this.on(e, i, r));
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
                    if (n && t) for (var a = 0, o = n.length; a < o; a++) n[a].fn !== t && n[a].fn._ !== t && i.push(n[a]);
                    return (i.length ? (r[e] = i) : delete r[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        84256: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = r(88092);
            (n.__exportStar(r(43738), t),
                n.__exportStar(r(67531), t),
                n.__exportStar(r(78025), t),
                n.__exportStar(r(69658), t),
                n.__exportStar(r(6782), t),
                n.__exportStar(r(97993), t));
        },
        85720: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => s });
            var n = r(88092),
                i = r(53548),
                a = r(46671),
                o = r(45390);
            function s(e, t) {
                var r,
                    s = function (r) {
                        var s = r.onOpen,
                            l = r.onClose,
                            u = (0, n.__read)((0, i.useState)(!1), 2),
                            c = u[0],
                            d = u[1],
                            f = (0, i.useCallback)(
                                function () {
                                    (d(!0), null == s || s());
                                },
                                [d, s],
                            ),
                            h = (0, i.useCallback)(
                                function () {
                                    (d(!1), null == l || l());
                                },
                                [d, l],
                            ),
                            p = (0, o.w)((0, n.__assign)((0, n.__assign)({}, r), { visible: c, onOpen: f, onClose: h })),
                            m = p.avatarProps,
                            g = p.contentProps,
                            v = p.dialogProps;
                        return i.createElement(
                            e,
                            (0, n.__assign)({}, r, m),
                            r.children,
                            i.createElement(t, (0, n.__assign)({}, v, { onClose: h }), i.createElement(a.U, (0, n.__assign)({}, g))),
                        );
                    };
                return ((s.displayName = "'withUserID(" + (null != (r = e.displayName) ? r : e) + ")'"), s);
            }
        },
        87013: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isLocalURL', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let n = r(20498),
                i = r(42411);
            function a(e) {
                if (!(0, n.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, n.getLocationOrigin)(),
                        r = new URL(e, t);
                    return r.origin === t && (0, i.hasBasePath)(r.pathname);
                } catch (e) {
                    return !1;
                }
            }
        },
        88349: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => n });
            let n = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
        88485: (e, t, r) => {
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
        91954: (e, t, r) => {
            'use strict';
            let n;
            r.d(t, { yv: () => et, YT: () => eW, FM: () => u });
            var i,
                a,
                o,
                s,
                l,
                u = {};
            (r.r(u),
                r.d(u, { g: () => i, r: () => a }),
                (function (e) {
                    ((e.Start = 'Start'),
                        (e.Watched4Sec = '4SecWatched'),
                        (e.Watched10Sec = '10SecWatched'),
                        (e.Watched20Sec = '20SecWatched'),
                        (e.Heartbeat30Sec = '30SecHeartbeat'),
                        (e.End = 'End'));
                })(i || (i = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.PAUSE = 'pause'), (e.BUFFERING = 'buffering'), (e.END = 'end'));
                })(a || (a = {})));
            var c = r(45028);
            function d(e) {
                return Math.floor(e / 30);
            }
            class f {
                params;
                previousWatchedTime = (0, c.fP)(0);
                constructor(e) {
                    this.params = e;
                }
                onWatchedTimeChange(e) {
                    let { previousWatchedTime: t } = this;
                    t !== e &&
                        (0 === t && e > 0
                            ? this.params.onEvent(i.Start)
                            : t < 4 && e >= 4
                              ? this.params.onEvent(i.Watched4Sec)
                              : t < 10 && e >= 10
                                ? this.params.onEvent(i.Watched10Sec)
                                : t < 20 && e >= 20
                                  ? this.params.onEvent(i.Watched20Sec)
                                  : d(t) < d(e) && this.params.onEvent(i.Heartbeat30Sec),
                        (this.previousWatchedTime = e));
                }
                onPlayingStateChange(e) {
                    e === a.END && this.params.onEvent(i.End);
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
            var p = r(66219);
            let m = (0, c.Wj)(1e4),
                g = (0, c.Wj)(1e3),
                v = (0, c.Wj)(5e3),
                y = (0, c.Wj)(3e4),
                S = {}.toString,
                w = /\[object (\w+)\]/,
                b = (e) => {
                    let t = S.call(e);
                    if (!t) return null;
                    let r = t.match(w);
                    if (!r) return null;
                    let n = r[1];
                    return n || null;
                };
            function E(e) {
                return 'function' == typeof e || 'Function' === b(e);
            }
            let T = Date && E(Date.now) ? () => Date.now() : () => new Date().getTime(),
                C = 'undefined' == typeof window ? void 0 : window.performance,
                P = C && E(C.now),
                I = C && C.timing && C.timing.navigationStart,
                x = C && C.timeOrigin ? C.timeOrigin : I ? C.timing.navigationStart : T(),
                _ = 0,
                k = () => (0, c.Wj)(P ? C.now() : (_ = Math.max(T() - x, _)));
            class L {
                onTick;
                onFlush;
                wasFirstFlush = !1;
                isDestroyed = !1;
                lastFlushTime;
                startTime;
                timer;
                constructor(e, t) {
                    ((this.onTick = e),
                        (this.onFlush = t),
                        (this.startTime = this.lastFlushTime = k()),
                        (this.timer = window.setTimeout(() => {
                            (this.onTick(), this.nextTick());
                        }, 0)));
                }
                next() {
                    this.isDestroyed || (window.clearTimeout(this.timer), this.handleFlush(), this.nextTick());
                }
                destroy() {
                    (window.clearTimeout(this.timer), (this.isDestroyed = !0));
                }
                nextTick() {
                    this.isDestroyed || (window.clearTimeout(this.timer), (this.timer = window.setTimeout(this.handleTimeout, this.getTimeout())));
                }
                handleTimeout = () => {
                    (this.onTick(), this.handleFlush(), this.nextTick());
                };
                handleFlush() {
                    this.needFlush() && (this.onFlush(), (this.lastFlushTime = this.wasFirstFlush ? k() : this.startTime), (this.wasFirstFlush = !0));
                }
                needFlush() {
                    let e = k();
                    return this.wasFirstFlush ? e - this.lastFlushTime >= y : e - this.startTime >= m;
                }
                getTimeout() {
                    return k() - this.startTime < m ? g : v;
                }
            }
            let M = (0, c.PY)((0, c.fP)(Math.abs(0))),
                O = {
                    remainingBufferedTime: (0, c.PY)((0, c.fP)(Math.abs(0))),
                    state: a.BUFFERING,
                    currentTime: M,
                    watchedTime: (0, c.PY)((0, c.fP)(Math.abs(0))),
                    duration: (0, c.PY)((0, c.fP)(0)),
                },
                N = NaN;
            function A() {}
            (!(function (e) {
                ((e[(e.PLAYING = 1)] = 'PLAYING'), (e[(e.NOT_PLAYING = 2)] = 'NOT_PLAYING'));
            })(o || (o = {})),
                (function (e) {
                    ((e.preroll = 'preroll'), (e.midroll = 'midroll'), (e.postPauseroll = 'postPauseroll'), (e.postroll = 'postroll'), (e.inroll = 'inroll'));
                })(s || (s = {})));
            class D {
                props;
                prevState = void 0;
                states = [];
                timer;
                destroyHandlers = [];
                constructor(e) {
                    ((this.props = e),
                        (this.timer = new L(
                            () => this.writeState(),
                            () => this.flushStates(),
                        )));
                }
                addDestroyHandler(e) {
                    this.destroyHandlers.push(e);
                }
                destroy() {
                    (this.timer.destroy(),
                        this.flushStates(),
                        this.destroyHandlers.forEach((e) => {
                            e();
                        }),
                        (this.destroyHandlers = []));
                }
                getStates() {
                    return [...this.states];
                }
                flushStates() {
                    this.writeStateManually.now();
                    let e = this.getStates();
                    (e.length > 0 && this.props.onFlushStates(e), (this.states.length = 0));
                }
                writeStateManually = (function (e, t, r, n) {
                    3 == arguments.length && 'boolean' != typeof r && ((n = r), (r = !1));
                    let i = null,
                        a = A;
                    function o() {
                        (null !== i && clearTimeout(i), (i = null));
                    }
                    let s = function () {
                        let s = arguments;
                        ((n = n || this),
                            (a = () => {
                                (o(), (a = A), e.apply(n, s));
                            }),
                            r && null === i && e.apply(n, s),
                            o(),
                            (i = window.setTimeout(function () {
                                (r || e.apply(n, s), (i = null));
                            }, t)));
                    };
                    return (
                        (s.cancel = o),
                        (s.now = () => {
                            a();
                        }),
                        s
                    );
                })(() => {
                    (this.writeState(), this.timer.next());
                }, 0);
                writeState() {
                    let e = this.getPlayerAliveState();
                    p(this.prevState, e) || ((this.prevState = e), this.states.push({ ...e, timestamp: (0, c.Wj)(this.props.getTimestamp()) }));
                }
                getPlayerAliveState() {
                    let e = {
                            ...O,
                            saveData: (function (e = window) {
                                let { navigator: t } = e,
                                    { connection: r = {} } = t;
                                return !!r.saveData;
                            })(),
                            rtt: (function (e = window) {
                                var t;
                                if (!e.navigator) return N;
                                let { connection: r = {} } = e.navigator;
                                return 'number' == typeof (t = r.rtt) && isFinite(t) ? r.rtt : N;
                            })(),
                            ...this.props.stalledController.getStalledHistory(),
                        },
                        t = this.props.getState();
                    if (!t) return { ...e };
                    let {
                            currentTime: r,
                            duration: n,
                            muted: i,
                            playingState: a,
                            remainingBufferedTime: s,
                            adState: l,
                            liveLatency: u,
                            videoTracks: d,
                            audioTrack: f,
                            videoSize: h,
                            isVisible: p,
                            capHeight: m,
                            capWidth: g,
                            containerHeight: v,
                            containerWidth: y,
                            bandwidthEstimate: S,
                            bandwidthSource: w,
                            targetBuffer: b,
                            droppedFrames: E,
                            shownFrames: T,
                            isFullscreen: C,
                            isPictureInPicture: P,
                            volume: I,
                            playbackRate: x,
                            loop: _,
                        } = t,
                        k = d.find((e) => e.selected),
                        L = [...d].sort((e, t) => t.bitrate - e.bitrate),
                        M = l?.state === o.PLAYING,
                        A = !M,
                        D = this.props.getWatchedTime();
                    return {
                        ...e,
                        watchedTime: (0, c.fP)(Math.max(0, D)),
                        currentTime: (0, c.fP)(isNaN(r) ? (0, c.fP)(0) : Math.max(0, r)),
                        duration: (0, c.fP)(isNaN(n) ? (0, c.fP)(0) : Math.max(0, n)),
                        isMuted: i,
                        state: a,
                        remainingBufferedTime: s?.total || (0, c.fP)(0),
                        remainingAudioBufferedTime: s?.audio === void 0 ? void 0 : (0, c.fP)(Math.max(0, s.audio)),
                        remainingVideoBufferedTime: s?.video === void 0 ? void 0 : (0, c.fP)(Math.max(0, s.video)),
                        ad: M ? l?.type : void 0,
                        liveLatency: void 0 === u ? void 0 : (0, c.fP)(Math.max(0, u)),
                        stalledReason: this.props.stalledController.getCurrentStalledReason(),
                        auto: k?.auto === void 0 ? void 0 : k.auto,
                        isVisible: p,
                        bitrate: k?.bitrate ? (0, c.bY)(Math.max(0, Math.floor((0, c.lw)(k.bitrate, 1e3)))) : void 0,
                        width: h?.videoWidth === void 0 || isNaN(h?.videoWidth) ? void 0 : Math.max(0, Math.floor((0, c.Lp)(h?.videoWidth))),
                        height: h?.videoHeight === void 0 || isNaN(h?.videoHeight) ? void 0 : Math.max(0, Math.floor((0, c.Lp)(h?.videoHeight))),
                        maxWidth: A && L[0]?.width ? Math.max(0, Math.floor((0, c.Lp)(L[0].width))) : void 0,
                        maxHeight: A && L[0]?.height ? Math.max(0, Math.floor((0, c.Lp)(L[0].height))) : void 0,
                        audioTrack: f?.value || void 0,
                        audioLang: f?.lang || void 0,
                        audioBitrate: f?.bitrate ? (0, c.bY)(Math.max(0, Math.floor((0, c.lw)(f.bitrate, 1e3)))) : void 0,
                        capHeight: A && m ? Math.max(0, Math.floor((0, c.Lp)(m))) : void 0,
                        capWidth: A && g ? Math.max(0, Math.floor((0, c.Lp)(g))) : void 0,
                        containerHeight: void 0 !== v ? (0, c.Lp)(Math.max(0, Math.floor(v))) : void 0,
                        containerWidth: void 0 !== y ? Math.max(0, Math.floor(y)) : void 0,
                        bandwidthEstimate: void 0 === S || isNaN(S) ? void 0 : (0, c.bY)(Math.max(0, Math.round(S))),
                        bandwidthSource: w || void 0,
                        targetBuffer: void 0 === b ? void 0 : (0, c.fP)(Math.max(0, b)),
                        droppedFrames: void 0 === E ? void 0 : Math.max(0, Math.floor(E)),
                        shownFrames: void 0 === T ? void 0 : Math.max(0, Math.floor(T)),
                        viewport: C ? 'fullscreen' : P ? 'pip' : 'default',
                        volume: I,
                        playbackRate: x,
                        loop: _,
                    };
                }
            }
            !(function (e) {
                ((e.Init = 'Init'),
                    (e.SetSource = 'SetSource'),
                    (e.Seek = 'Seek'),
                    (e.VideoTrackChange = 'VideoTrackChange'),
                    (e.AudioTrackChange = 'AudioTrackChange'),
                    (e.Recover = 'Recover'),
                    (e.MediaError = 'MediaError'),
                    (e.Offline = 'Offline'),
                    (e.Other = 'Other'),
                    (e.LowBuffer = 'LowBuffer'),
                    (e.Render = 'Render'),
                    (e.RepresentationsChange = 'RepresentationsChange'),
                    (e.LiveEdge = 'LiveEdge'),
                    (e.AdStart = 'AdStart'),
                    (e.AdOther = 'AdOther'),
                    (e.AdBetween = 'AdBetween'),
                    (e.AdEnd = 'AdEnd'));
            })(l || (l = {}));
            let j = [0, 1, 4, 5],
                B = (0, c.fP)(0),
                R = j.map((e) => (B = (0, c.WQ)((0, c.fP)(e), B))),
                W = (0, c.lw)(R[R.length - 1], 1e3),
                U = [l.Init];
            function F(e) {
                setTimeout(() => {
                    throw e;
                }, 0);
            }
            function H(e, t) {
                try {
                    return e();
                } catch (e) {
                    'function' == typeof t && t(e);
                }
            }
            class Y {
                setTimeout(e, t) {
                    if (t <= 0) return void H(e, F);
                    let r = window.setTimeout(e, t);
                    return () => window.clearTimeout(r);
                }
                now() {
                    return T();
                }
            }
            class V {
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
                constructor(e, t = new Y()) {
                    ((this.distributionFunction = e), (this.clock = t));
                }
                setEnabled(e) {
                    return (e ? this.start() : this.stop(), this);
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
                    (this.cancelTimeout(), (this.stopped = !0), (this.destroyed = !0));
                }
                knock(e) {
                    ((this.lastNow = e), (this.lastKnockTime = this.clock.now()), this.isFirstKnock ? (this.isFirstKnock = !1) : this.count++);
                    let t = (this.restTime = this.lastTimeout = this.distributionFunction({ time: e, count: this.count }));
                    this.stopped || this.destroyed || this.setTimeout(() => this.knock(e + t), t);
                }
                cancelTimeout() {
                    (void 0 !== this.cancel && this.cancel(), (this.cancel = void 0));
                }
                setTimeout(e, t) {
                    this.cancelTimeout();
                    let r = this.clock.setTimeout(e, t);
                    void 0 !== r && (this.cancelTimeout(), (this.cancel = r));
                }
            }
            function K(e = k) {
                let t = e();
                return () => (0, c.Wj)(Math.max(0, e() - t));
            }
            function J(e, t) {
                return { reason: e, details: t, getElapsedTime: K() };
            }
            class Q {
                isBuffering = !1;
                timer = void 0;
                stalledId = 1;
                stalledDurationRemainder = (0, c.fP)(0);
                getState;
                logEvent;
                expectedStalled = J(l.Init, {});
                currentStalled = void 0;
                stalledTime = (0, c.fP)(0);
                stalledCount = 0;
                constructor({ getState: e, logEvent: t }) {
                    ((this.getState = e), (this.logEvent = t));
                }
                setBuffering(e, t = (0, c.Wj)(0)) {
                    if (e !== this.isBuffering)
                        if (((this.isBuffering = e), this.isBuffering)) {
                            let e = [],
                                r = j.filter((r, n) => {
                                    let i = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled(),
                                        a = R[n];
                                    if ((0, c.Qr)(t, 1e3) > a) {
                                        let e = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        return (
                                            !this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: e, expectedStalled: i, duration: a, getElapsedTime: K() }),
                                            this.send(!1, i, a, e),
                                            !1
                                        );
                                    }
                                    return (e.push(a), !0);
                                });
                            (this.currentStalled && (this.stalledDurationRemainder = (0, c.gL)((0, c.Qr)(t, 1e3), this.currentStalled.duration)),
                                r.length && (r[0] = r[0] - this.stalledDurationRemainder),
                                (this.timer = new V(({ count: t }) => {
                                    let n = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled();
                                    if (t > 0) {
                                        let r = (0, c.fP)(e[t - 1]),
                                            i = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        (!this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: i, expectedStalled: n, duration: r, getElapsedTime: K() }),
                                            this.send(!1, n, r, i));
                                    }
                                    return t >= r.length ? (this.destroyTimer(), 1 / 0) : 1e3 * r[t];
                                })),
                                this.timer.start());
                        } else {
                            if (this.currentStalled) {
                                var r;
                                let { expectedStalled: e, id: t } = this.currentStalled,
                                    n = (0, c.WQ)(
                                        void 0 === (r = this.currentStalled) ? (0, c.fP)(0) : (0, c.WQ)(r.duration, (0, c.Qr)(r.getElapsedTime(), 1e3)),
                                        this.stalledDurationRemainder,
                                    );
                                (this.send(!0, e, (0, c.WQ)(n), t),
                                    (this.currentStalled = void 0),
                                    (this.stalledDurationRemainder = (0, c.fP)(0)),
                                    (this.stalledTime = (0, c.WQ)(n, this.stalledTime)));
                                let i = this.getState()?.adState?.state === o.PLAYING ? l.AdOther : l.Other;
                                this.setExpectedStalled(J(i, void 0));
                            }
                            this.destroyTimer();
                        }
                }
                getStalledHistory() {
                    let { stalledCount: e, stalledTime: t } = this;
                    return { stalledCount: (0, c.Pn)(e), stalledTime: (0, c.PY)(t) };
                }
                clearStalledHistory() {
                    ((this.stalledCount = 0), (this.stalledTime = (0, c.fP)(0)));
                }
                destroy() {
                    this.setBuffering(!1);
                }
                getCurrentStalledReason() {
                    return this.currentStalled?.expectedStalled.reason;
                }
                setExpectedStalled(e) {
                    this.expectedStalled = e;
                }
                isExpiredStalled(e) {
                    let { getElapsedTime: t, reason: r } = e;
                    return !(U.indexOf(r) > -1) && (!this.currentStalled || this.currentStalled.expectedStalled !== e) && t() >= W;
                }
                getExpectedStalled() {
                    let e = this.expectedStalled;
                    return this.isExpiredStalled(e) ? J(l.Other, void 0) : e;
                }
                destroyTimer() {
                    this.timer && (this.timer.destroy(), (this.timer = void 0));
                }
                send(e, t, r, n) {
                    let { reason: i, details: a } = t,
                        o = { ...a, stalledDuration: r, stalledId: n },
                        s = this.getState();
                    if (s) {
                        let { muted: e, remainingBufferedTime: t, videoTracks: r } = s,
                            n = r.find((e) => e.selected);
                        o = { ...o, remainingBufferedTime: t, videoTrack: n, isMuted: e };
                    }
                    this.logEvent({ name: e ? 'StalledEnd' : 'Stalled', data: o, labels: { reason: i } });
                }
            }
            let z = (e) => ('hidden' in e ? 'hidden' : 'webkitHidden' in e ? 'webkitHidden' : void 0);
            function G(e, t = !0) {
                let r = z(e);
                return r ? !e[r] : t;
            }
            let X = ['Start', '4SecWatched', '10SecWatched', '20SecWatched', '30SecHeartbeat', 'End'];
            function q(e, t, r) {
                return e && 'number' == typeof e ? e + t - r : e;
            }
            function $(e) {
                return 'function' == typeof e || 'Function' === b(e);
            }
            function Z(e) {
                let t = e.match(/^(https?:\/\/[^\/\?#]+)/);
                return t ? t[1] : null;
            }
            let ee = (0, c.Wj)(3e4);
            class et {
                config;
                intervalId = void 0;
                contexts = [];
                allowedUrls = new Map();
                static SERVICE_ENDPOINTS_REGEX = /\/(log|perf|jstracer)/;
                static MEDIA_EXTENSION_REGEX = /\.(m4s|ts|mp4|webm|m3u8|mpd)(\?|$)/;
                constructor(e) {
                    this.config = e;
                }
                addAllowedUrl(e) {
                    let t = Z(e);
                    return !!t && (this.allowedUrls.set(e, t), !0);
                }
                addAllowedUrls(e) {
                    for (let t of e) this.addAllowedUrl(t);
                }
                removeAllowedUrl(e) {
                    this.allowedUrls.delete(e);
                }
                getAllowedUrls() {
                    return Array.from(this.allowedUrls.keys());
                }
                clearAllowedUrls() {
                    this.allowedUrls.clear();
                }
                attach(e) {
                    e.performance &&
                        ($(e.performance.getEntriesByType) || $(e.performance.webkitGetEntriesByType)) &&
                        ($(e.performance.clearResourceTimings) || $(e.performance.webkitClearResourceTimings)) &&
                        -1 === this.contexts.indexOf(e) &&
                        (0 === this.contexts.length && (this.intervalId = setInterval(() => this.flush(), ee)), this.contexts.push(e));
                }
                detach(e) {
                    let t = this.contexts.indexOf(e);
                    (-1 !== t && this.contexts.splice(t, 1), 0 === this.contexts.length && clearInterval(this.intervalId));
                }
                destroy() {
                    (this.flush(), (this.contexts.length = 0), clearInterval(this.intervalId), this.clearAllowedUrls());
                }
                flush() {
                    let e = [],
                        t = this.contexts.map(er),
                        r = Math.min(...t),
                        n = this.config.shouldClearTimings?.() ?? !0;
                    if (
                        (this.contexts.forEach((i, a) => {
                            (function (e, t) {
                                try {
                                    let r = (e.performance.getEntriesByType ?? e.performance.webkitGetEntriesByType).call(e.performance, 'resource');
                                    return (t && (e.performance.clearResourceTimings ?? e.performance.webkitClearResourceTimings).call(e.performance), r);
                                } catch {
                                    return [];
                                }
                            })(i, n).forEach((n) => {
                                this.shouldLogResource(n.name) &&
                                    e.push(
                                        (function (e, t, r) {
                                            let {
                                                duration: n,
                                                entryType: i,
                                                name: a,
                                                startTime: o,
                                                connectEnd: s,
                                                connectStart: l,
                                                decodedBodySize: u,
                                                domainLookupEnd: c,
                                                domainLookupStart: d,
                                                encodedBodySize: f,
                                                fetchStart: h,
                                                initiatorType: p,
                                                nextHopProtocol: m,
                                                redirectEnd: g,
                                                redirectStart: v,
                                                requestStart: y,
                                                responseEnd: S,
                                                responseStart: w,
                                                secureConnectionStart: b,
                                                transferSize: E,
                                                workerStart: T,
                                                serverTiming: C,
                                                responseStatus: P,
                                                deliveryType: I,
                                                renderBlockingStatus: x,
                                                firstInterimResponseStart: _,
                                            } = e;
                                            return {
                                                duration: n,
                                                entryType: i,
                                                name: a,
                                                encodedBodySize: f,
                                                decodedBodySize: u,
                                                initiatorType: p,
                                                transferSize: E,
                                                nextHopProtocol: m,
                                                serverTiming: C,
                                                responseStatus: P,
                                                deliveryType: I,
                                                renderBlockingStatus: x,
                                                startTime: q(o, t, r),
                                                connectEnd: q(s, t, r),
                                                connectStart: q(l, t, r),
                                                domainLookupEnd: q(c, t, r),
                                                domainLookupStart: q(d, t, r),
                                                fetchStart: q(h, t, r),
                                                redirectEnd: q(g, t, r),
                                                redirectStart: q(v, t, r),
                                                requestStart: q(y, t, r),
                                                responseEnd: q(S, t, r),
                                                responseStart: q(w, t, r),
                                                secureConnectionStart: q(b, t, r),
                                                workerStart: q(T, t, r),
                                                firstInterimResponseStart: q(_, t, r),
                                            };
                                        })(n, t[a], r),
                                    );
                            });
                        }),
                        0 === e.length)
                    )
                        return;
                    let i = T();
                    (function (e, t = 65536) {
                        let r = new TextEncoder(),
                            n = [],
                            i = [],
                            a = 0;
                        for (let o of e) {
                            let e = JSON.stringify(o),
                                s = r.encode(e).length;
                            a + s > t ? (n.push(i), (i = [o]), (a = s)) : (i.push(o), (a += s));
                        }
                        return (i.length > 0 && n.push(i), n);
                    })(e).forEach((e, t) => {
                        setTimeout(() => {
                            this.config.sendLog(e, { perfnow: String(i), navstart: String(r) });
                        }, 500 * t);
                    });
                }
                shouldLogResource(e) {
                    return (
                        !et.SERVICE_ENDPOINTS_REGEX.test(e) &&
                        (!!(this.config.ignoreWhiteList || et.MEDIA_EXTENSION_REGEX.test(e)) || (!!this.allowedUrls.size && this.hasSameBaseUrl(e)))
                    );
                }
                hasSameBaseUrl(e) {
                    let t = Z(e);
                    if (!t) return !1;
                    for (let e of Array.from(this.allowedUrls.values())) if (e && e === t) return !0;
                    return !1;
                }
            }
            function er(e) {
                return e.performance?.timeOrigin ?? e.performance?.timing?.navigationStart;
            }
            class en {
                lastUpdate = void 0;
                committed = (0, c.fP)(0);
                pending = [];
                videoCredit = (0, c.fP)(0);
                pendingClock = (0, c.fP)(0);
                watchedTime = (0, c.fP)(0);
                CONFIRM_WINDOW = (0, c.fP)(1.2);
                JUMP_MIN = (0, c.fP)(2);
                SMALL_NEG = (0, c.fP)(0.02);
                calc(e, t, r) {
                    if (void 0 !== this.lastUpdate) {
                        let n = (0, c.Wj)(this.lastUpdate.getElapsedTime()),
                            i = (0, c.Qr)(n, 1e3),
                            a = (0, c.gL)(e, this.lastUpdate.videoTime),
                            o = (0, c.Qr)(a, t),
                            s = i >= (0, c.fP)(0) ? i : (0, c.fP)(0),
                            l = (0, c.gL)((0, c.fP)(0), o) > this.JUMP_MIN,
                            u = o > this.SMALL_NEG ? o : (0, c.fP)(0),
                            d = o > this.JUMP_MIN;
                        r
                            ? ((this.pendingClock = (0, c.WQ)(this.pendingClock, s)),
                              this.dropExpired(),
                              d || l
                                  ? this.resetPending()
                                  : (s > (0, c.fP)(0) && this.pending.push({ amount: s, bornAt: this.pendingClock }),
                                    u > (0, c.fP)(0) && (this.videoCredit = (0, c.WQ)(this.videoCredit, u)),
                                    this.consumeCredit()))
                            : (!(u > (0, c.fP)(0)) || d || l || ((this.videoCredit = (0, c.WQ)(this.videoCredit, u)), this.consumeCredit()), this.resetPending());
                    }
                    this.lastUpdate = r ? { getElapsedTime: K(), videoTime: e } : void 0;
                }
                get() {
                    return this.watchedTime;
                }
                reset() {
                    ((this.committed = (0, c.fP)(0)), this.resetPending(), (this.watchedTime = (0, c.fP)(0)), (this.lastUpdate = void 0));
                }
                restoreLastUpdate() {
                    this.lastUpdate = void 0;
                }
                consumeCredit() {
                    for (; this.videoCredit > (0, c.fP)(0) && this.pending.length > 0;) {
                        let e = this.pending[0],
                            t = this.videoCredit <= e.amount ? this.videoCredit : e.amount;
                        if (
                            ((e.amount = (0, c.gL)(e.amount, t)),
                            (this.videoCredit = (0, c.gL)(this.videoCredit, t)),
                            (this.committed = (0, c.WQ)(this.committed, t)),
                            e.amount <= (0, c.fP)(0))
                        )
                            this.pending.shift();
                        else break;
                    }
                    this.watchedTime = this.committed;
                }
                dropExpired() {
                    for (; this.pending.length > 0;) {
                        let e = this.pending[0];
                        if ((0, c.gL)(this.pendingClock, e.bornAt) > this.CONFIRM_WINDOW) this.pending.shift();
                        else break;
                    }
                }
                resetPending() {
                    ((this.pending = []), (this.videoCredit = (0, c.fP)(0)), (this.pendingClock = (0, c.fP)(0)), (this.watchedTime = this.committed));
                }
            }
            class ei {
                getState;
                onChange;
                onLoop;
                intervalId = void 0;
                watchedTimeCounter;
                previousCurrentTime = (0, c.fP)(0);
                previousDuration = (0, c.fP)(0);
                constructor(e, t, r) {
                    ((this.getState = e),
                        (this.onChange = t),
                        (this.onLoop = r),
                        (this.intervalId = setInterval(this.update, 100)),
                        (this.watchedTimeCounter = this.createWatchedTimeCounter()));
                }
                update = (e) => {
                    let t = this.getState();
                    if (!t) return;
                    let { currentTime: r, playbackRate: n = 1, playingState: i, adState: s, duration: l, loop: u, videoType: d } = t,
                        f = e ?? i,
                        h = s?.state === o.PLAYING,
                        p = this.previousDuration > 0,
                        m = Math.min(1, 0.2 * this.previousDuration),
                        g = Math.min(2, 0.2 * (l || this.previousDuration)),
                        v = p && this.previousCurrentTime >= this.previousDuration - m,
                        y = r <= g,
                        S = r < this.previousCurrentTime;
                    (u && 'VOD' === d && v && y && S && f === a.PLAY && !h && this.onLoop?.(),
                        (this.previousCurrentTime = r),
                        (this.previousDuration = l || (0, c.fP)(0)),
                        this.watchedTimeCounter.calc(r, n, f === a.PLAY && !h),
                        this.onChange?.(this.watchedTimeCounter.get()));
                };
                createWatchedTimeCounter() {
                    return new en();
                }
                reset() {
                    ((this.watchedTimeCounter = this.createWatchedTimeCounter()),
                        (this.previousCurrentTime = (0, c.fP)(0)),
                        (this.previousDuration = (0, c.fP)(0)),
                        this.onChange?.(this.watchedTimeCounter.get()));
                }
                getWatchedTime() {
                    return this.watchedTimeCounter.get();
                }
                destroy() {
                    (clearInterval(this.intervalId), (this.intervalId = void 0));
                }
            }
            let ea = 'vpuid';
            class eo {
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
            function es(e) {
                let t = '__test_storage__';
                try {
                    return (e.setItem(t, 'test'), e.removeItem(t), !0);
                } catch {
                    return !1;
                }
            }
            class el {
                fallbackOrder;
                constructor(e = ['local', 'session', 'memory']) {
                    this.fallbackOrder = e;
                }
                getStorage() {
                    for (let e of this.fallbackOrder)
                        if (
                            (function (e) {
                                try {
                                    switch (e) {
                                        case 'local':
                                            return es(window.localStorage);
                                        case 'session':
                                            return es(window.sessionStorage);
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
                    return new eo();
                }
                createStorage(e) {
                    switch (e) {
                        case 'local':
                        default:
                            return window.localStorage;
                        case 'session':
                            return window.sessionStorage;
                        case 'memory':
                            return new eo();
                    }
                }
            }
            let eu = new el().getStorage(),
                ec = new el(['local', 'memory']).getStorage(),
                ed = new el(['session', 'memory']).getStorage();
            function ef(e) {
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
            let eh = ef(eu),
                ep = ef(ec);
            function em(e, t = !1) {
                if (!e) return !1;
                let r = t ? Function.prototype.toString.call(e) : e.toString ? e.toString() : '';
                return /\[native code\]/.test(r) || /\/\* source code not available \*\//.test(r);
            }
            ef(ed);
            let eg = !em(Math.random) || Math.random() === Math.random(),
                ev = (T() * k()) % 0x7fffffff,
                ey = eg
                    ? function () {
                          return ((ev = (16807 * ev) % 0x7fffffff) - 1) / 0x7ffffffe;
                      }
                    : function () {
                          return Math.random();
                      },
                eS = 'qwertyuiopasdfghjklzxcvbnm0123456789',
                ew =
                    eh.getItem(ea) ??
                    (function () {
                        let e = [];
                        for (let t = 0; t < 10; t++) e.push(eS[Math.floor(ey() * eS.length)]);
                        return e.join('');
                    })();
            function eb() {
                return (0, c.Wj)(T());
            }
            eh.setItem(ea, ew);
            class eE {
                lastDateNow;
                lastPerformanceNow;
                total = (0, c.Wj)(0);
                interval;
                getTime;
                constructor(e = k) {
                    ((this.getTime = e), (this.lastDateNow = eb()), (this.lastPerformanceNow = e()), (this.interval = setInterval(this.now, 1e3)));
                }
                now = () => {
                    let e = eb(),
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
            async function eT(e, t) {
                try {
                    if (
                        (void 0 === n &&
                            (n =
                                'function' == typeof TextEncoder && 'function' == typeof CompressionStream
                                    ? { encoder: new TextEncoder(), streamConstructor: CompressionStream }
                                    : null),
                        null === n)
                    )
                        return null;
                    let r = new Uint8Array(n.encoder.encode(e)),
                        i = new n.streamConstructor(t),
                        a = i.writable.getWriter(),
                        o = Promise.resolve(a.write(r)).then(() => a.close()),
                        s = eC(i.readable),
                        [, l] = await Promise.all([o, s]),
                        u = l.reduce((e, t) => e + t.byteLength, 0),
                        c = new Uint8Array(u),
                        d = 0;
                    for (let e of l) (c.set(e, d), (d += e.byteLength));
                    return { buffer: c, type: t };
                } catch {
                    return ((n = null), null);
                }
            }
            async function eC(e) {
                let t = e.getReader(),
                    r = [],
                    n = await t.read();
                for (; !n.done;) (r.push(n.value), (n = await t.read()));
                return r;
            }
            let eP = [].find,
                eI = em(eP)
                    ? (e, t) => eP.call(e, t)
                    : (e, t) => {
                          for (let r = 0; r < e.length; r++) {
                              let n = e[r];
                              if (t(n, r, e)) return n;
                          }
                      },
                ex = (function (e, t) {
                    let r = e[t];
                    if (!em(r)) {
                        let n = r;
                        try {
                            delete e[t];
                            let i = e[t];
                            ('function' == typeof i && (r = i), (e[t] = n));
                        } catch (e) {}
                    }
                    return r;
                })(Array, 'isArray'),
                e_ = ex ? (e) => ex.call(Array, e) : (e) => 'Array' === b(e),
                ek = '[object Window]';
            function eL(e) {
                if (('string' == typeof e && (e = { message: e }), ('object' != typeof e || null === e) && (e = {}), 'function' == typeof e.toJSON))
                    try {
                        return { __stringifyError: e.toJSON() };
                    } catch {}
                let { name: t, message: r, stack: n } = e;
                return { __stringifyError: { name: t, message: r, stack: n } };
            }
            function eM(e, t, r, n) {
                let i = eN(e[t], r + '/' + t, n);
                return void 0 === i ? 'null' : i;
            }
            function eO(e) {
                return JSON.stringify(e);
            }
            function eN(e, t, r) {
                switch (typeof e) {
                    case 'boolean':
                        return e ? 'true' : 'false';
                    case 'string':
                        return eO(e);
                    case 'undefined':
                        break;
                    case 'bigint':
                        return eO(e.toString());
                    case 'function':
                        let n = 'string' == typeof e.name && e.name.length > 0 ? ' ' + e.name : '';
                        return eO(`[Function${n}]`);
                    case 'symbol':
                        return eO('[Symbol]');
                    case 'number':
                        return isNaN(e) || !isFinite(e) ? 'null' : String(e);
                    case 'object':
                        if (null === e) return 'null';
                        if (Object.prototype.toString.call(e) === ek) return eO(ek);
                        if ('string' == typeof e.tagName) return eO(`[DOMNode ${e.tagName}]`);
                        if ('undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView && ArrayBuffer.isView(e)) {
                            let { name: t } = e.constructor;
                            return eO(`[${t || 'TypedArray'}(${e.byteLength || 0})]`);
                        }
                        let i = r.get(e);
                        if (void 0 !== i) return eO(`[Circular ${i}]`);
                        return (
                            r.set(e, t),
                            e_(e)
                                ? (function (e, t, r) {
                                      if (0 === e.length) return '[]';
                                      let n = '[' + eM(e, 0, t, r);
                                      for (let i = 1; i < e.length; i++) n += ',' + eM(e, i, t, r);
                                      return n + ']';
                                  })(e, t, r)
                                : (function (e, t, r) {
                                      if ('function' == typeof e.toJSON) {
                                          let n;
                                          try {
                                              n = e.toJSON();
                                          } catch (e) {
                                              n = eL(e);
                                          }
                                          return eN(n, t + '/toJSON', r);
                                      }
                                      if (e instanceof Error) {
                                          let { name: n, message: i, stack: a } = e;
                                          return eN({ name: n, message: i, stack: a }, t, r);
                                      }
                                      let n = '{',
                                          i = !0;
                                      for (let a in e) {
                                          let o;
                                          if (!Object.prototype.hasOwnProperty.call(e, a)) continue;
                                          try {
                                              o = e[a];
                                          } catch (e) {
                                              o = eL(e);
                                          }
                                          let s = eN(o, t + '/' + a, r);
                                          void 0 !== s && (i ? (i = !1) : (n += ','), (n += eO(a) + ':' + s));
                                      }
                                      return n + '}';
                                  })(e, t, r)
                        );
                }
            }
            let eA = ['NotAllowedError', 'SecurityError'];
            function eD(e) {
                return 'number' == typeof e && isFinite(e) && e >= 0 ? e : void 0;
            }
            class ej {
                navigatorObject;
                performanceObject;
                batteryManager;
                constructor(e = navigator, t = 'undefined' == typeof performance ? void 0 : performance) {
                    ((this.navigatorObject = e), (this.performanceObject = t), this.initBatteryManager());
                }
                initBatteryManager() {
                    try {
                        let e = this.navigatorObject.getBattery;
                        'function' == typeof e &&
                            e.call(this.navigatorObject).then(
                                (e) => {
                                    this.batteryManager = e;
                                },
                                (e) => this.handleBatteryError(e),
                            );
                    } catch (e) {
                        this.handleBatteryError(e);
                    }
                }
                handleBatteryError(e) {
                    !(function (e) {
                        if ('object' != typeof e || null === e || !('name' in e)) return !1;
                        let { name: t } = e;
                        return 'string' == typeof t && eA.includes(t);
                    })(e) && F(e);
                }
                getState() {
                    let e = {},
                        t = eD(this.performanceObject?.memory?.usedJSHeapSize),
                        r = eD(this.navigatorObject.deviceMemory),
                        n = eD(this.batteryManager?.level);
                    return (
                        void 0 !== t && (e.usedJavaHeap = t),
                        void 0 !== r && r > 0 && (e.totalRAM = Math.round(0x40000000 * r)),
                        void 0 !== n && n <= 1 && (e.batteryLevel = n),
                        'boolean' == typeof this.batteryManager?.charging && (e.isCharging = this.batteryManager.charging),
                        0 === Object.keys(e).length ? void 0 : e
                    );
                }
            }
            let eB = ['CreatePlayer', 'SetSource', 'Start', 'Stalled', 'StalledEnd', 'End'],
                eR = { logVersion: '1.4.1' };
            class eW {
                static getVpuid() {
                    return ew;
                }
                watchedTimeTracker;
                fatalTracker;
                playbackTracker;
                playerAliveController;
                stalledController;
                deviceStateCollector;
                staticParams = {};
                playerInfo;
                useOfDeprecatedMethodIsLogged = !1;
                timer;
                timerStartTime = Date.now();
                sendLog;
                onEventLog;
                compressionEnabled;
                compressionSuspended = !1;
                pendingLogs = new Set();
                getState;
                destroyed = !1;
                wasInitBufferingLogged = !1;
                externalStalledDuration = (0, c.Wj)(0);
                initialStalledDuration = (0, c.Wj)(0);
                wasInitBufferingHandled = !1;
                initBufferingDeferred = !1;
                initialStalledTimestamp;
                initialStalledTimestampStop;
                eventIndex = 0;
                reportNumber = 0;
                sourceIndexes = { current: 0, last: 0 };
                loopEnabled = !1;
                loopIndex = 0;
                constructor({ sendLog: e, playerInfo: t, getState: r, disableCompression: n, onEventLog: i }) {
                    ((this.playerInfo = t),
                        (this.sendLog = e),
                        (this.onEventLog = i),
                        (this.compressionEnabled =
                            !n &&
                            !(function () {
                                let e = ep.getItem('disable-telemetry-compression');
                                return 'true' === e || '1' === e;
                            })()),
                        (this.getState = r),
                        (this.deviceStateCollector = new ej()),
                        (this.loopEnabled = this.getState()?.loop ?? !1),
                        (this.playbackTracker = new f({ onEvent: (e) => this.logEvent({ name: e }) })),
                        (this.stalledController = new Q({ getState: this.getState, logEvent: (e) => this.logEvent(e) })),
                        (this.watchedTimeTracker = new ei(
                            r,
                            (e) => this.playbackTracker.onWatchedTimeChange(e),
                            () => this.onLoop(),
                        )),
                        (this.playerAliveController = new D({
                            getState: r,
                            onFlushStates: (e) => this.logEvent({ name: 'PlayerAlive', data: { states: e } }),
                            getTimestamp: () => this.getLogTimestamp(),
                            stalledController: this.stalledController,
                            getWatchedTime: () => this.watchedTimeTracker.getWatchedTime(),
                        })),
                        (this.fatalTracker = new h()),
                        this.initOnVisibilityChangeHandling(),
                        (this.timer = new eE()));
                }
                getLogTimestamp() {
                    return Math.round(this.timerStartTime + this.timer.now());
                }
                initOnVisibilityChangeHandling() {
                    let e = () => {
                            let e = this.compressionSuspended;
                            this.compressionSuspended = !0;
                            try {
                                (this.flushPendingLogs(), this.playerAliveController.flushStates());
                            } finally {
                                this.compressionSuspended = e;
                            }
                        },
                        t = (function (e, t) {
                            let r = (function (e) {
                                let t = z(e);
                                if (t) return t.replace(/hidden/i, 'visibilitychange');
                            })(e);
                            if (!r) return A;
                            let n = () => {
                                t(G(e));
                            };
                            return (e.addEventListener(r, n), () => e.removeEventListener(r, n));
                        })(document, (t) => {
                            t || e();
                        });
                    (window.addEventListener('pagehide', e),
                        this.playerAliveController.addDestroyHandler(() => {
                            (t(), window.removeEventListener('pagehide', e));
                        }));
                }
                setStaticParams(e, t) {
                    t ? (this.staticParams = { ...e }) : (this.staticParams = { ...this.staticParams, ...e });
                }
                updateWatchedTime() {
                    (this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({ name: 'DeprecatedTelemetryMethodUsed', data: { method: 'updateWatchedTime' } }), (this.useOfDeprecatedMethodIsLogged = !0)),
                        F(Error('Deprecated method used. Method is Telemetry#updateWatchedTime(). Just remove. Telemetry calculates watchedTime itself now.')));
                }
                setPlayingState(e) {
                    (this.playbackTracker.onPlayingStateChange(e),
                        e !== a.PLAY && this.watchedTimeTracker.update(e),
                        this.handleInitialBuffering(),
                        e === a.BUFFERING ? this.setBuffering(!0) : this.setBuffering(!1));
                }
                logEvent(e, t) {
                    if (this.destroyed) return;
                    let r = this.getFullEventLog(e, t),
                        n = this.getUrlParams(r.eventType, r.eventName, e.labels);
                    (this.onEventLog?.(r), this.sendData(r, n));
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
                        i = X.includes(e.name) ? { ...e.data, ...this.getDataToSend(r) } : e.data,
                        a = {
                            ...eR,
                            ...this.staticParams,
                            ...e.extraRootFields,
                            ...this.playerInfo,
                            vpuid: ew,
                            eventType: 'event',
                            eventName: e.name,
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: G(document),
                            eventIndex: this.eventIndex,
                            data: i,
                            labels: n,
                            sourceIndex: t ?? this.sourceIndexes.current,
                        };
                    return eB.includes(e.name) ? this.addDeviceState(a) : a;
                }
                addDeviceState(e) {
                    let t = this.deviceStateCollector.getState();
                    return t ? { ...e, device: { ...e.device, state: t } } : e;
                }
                getFullErrorLog({ error: e, labels: t, extraRootFields: r, sourceIndex: n }) {
                    let i = { ...this.staticParams.labels, ...t };
                    return (
                        (e.details =
                            H(() =>
                                'string' == typeof e.details
                                    ? e.details
                                    : (function (e) {
                                          try {
                                              return eN(
                                                  e,
                                                  '~',
                                                  (function () {
                                                      let e = 'undefined' != typeof WeakMap ? new WeakMap() : void 0,
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
                                                              let n = eI(t, (e) => e.value === r);
                                                              return void 0 !== e && void 0 === n ? e.get(r) : n ? n.path : void 0;
                                                          },
                                                      };
                                                  })(),
                                              );
                                          } catch (e) {
                                              return JSON.stringify(eL(e));
                                          }
                                      })(e.details),
                            ) || e.details),
                        this.addDeviceState({
                            ...eR,
                            ...this.playerInfo,
                            ...this.staticParams,
                            ...r,
                            vpuid: ew,
                            eventType: e.isFatal ? 'fatal' : 'error',
                            eventName: String(e.code),
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: G(document),
                            eventIndex: this.eventIndex,
                            data: e,
                            labels: i,
                            sourceIndex: n ?? this.sourceIndexes.current,
                        })
                    );
                }
                getDataToSend(e) {
                    if (!e) return {};
                    let { duration: t, currentTime: r, utcStartTime: n, isFullscreen: i, volume: a, muted: o } = e;
                    return {
                        watchedSec: this.watchedTimeTracker.getWatchedTime(),
                        duration: isNaN(t) ? void 0 : t,
                        time: r,
                        utcTime: void 0 === n ? void 0 : n + r,
                        isFullscreen: i,
                        isMuted: o || 0 === a,
                    };
                }
                sendData(e, t) {
                    if (void 0 === e) return;
                    let r = JSON.stringify(e);
                    if (this.compressionEnabled && !this.compressionSuspended) {
                        let e = { json: r, urlParams: t };
                        (this.pendingLogs.add(e),
                            eT(r, 'gzip').then((t) => {
                                this.sendPendingLog(e, t);
                            }));
                    } else H(() => this.sendLog(r, t), F);
                    this.eventIndex++;
                }
                sendPendingLog(e, t) {
                    if (!this.pendingLogs.delete(e)) return;
                    let { json: r, urlParams: n } = e;
                    H(() => this.sendLog(t ? t.buffer : r, t ? { ...n, enc: t.type } : n), F);
                }
                flushPendingLogs() {
                    this.pendingLogs.forEach((e) => this.sendPendingLog(e, null));
                }
                checkStalledReason(e) {
                    return this.stalledController.getCurrentStalledReason() === e;
                }
                setBuffering(e, t) {
                    this.stalledController.setBuffering(e, t);
                }
                setExpectedBuffering({ reason: e, details: t }) {
                    switch ((this.checkInitBuffering(e), e)) {
                        case l.SetSource:
                            (this.setBuffering(!1), this.clearBufferingHistory());
                            break;
                        case l.Init:
                            break;
                        default:
                            this.checkStalledReason(e) || this.setBuffering(!1);
                    }
                    return this.stalledController.setExpectedStalled(J(e, t));
                }
                checkInitBuffering(e) {
                    this.wasInitBufferingLogged || e === l.Init || this.onInitBuffering();
                }
                setExternalStalledDuration(e) {
                    let t = this.getExpectedStalled();
                    t.reason === l.Init && e && ((t.details = { externalStalledDuration: (0, c.Qr)(e, 1e3) }), this.setExpectedBuffering(t));
                }
                startInitBufferingTimer() {
                    this.initialStalledTimestamp = (0, c.Wj)(k());
                }
                stopInitBufferingTimer() {
                    this.initialStalledTimestampStop = (0, c.Wj)(k());
                }
                deferInitBuffering() {
                    this.initBufferingDeferred = !0;
                }
                undeferInitBuffering() {
                    this.initBufferingDeferred = !1;
                }
                onInitBuffering(e) {
                    if (this.wasInitBufferingLogged) return;
                    let t = this.initialStalledTimestamp && !this.initialStalledTimestampStop,
                        r = this.initialStalledTimestamp && this.initialStalledTimestampStop;
                    ((this.initialStalledDuration = t
                        ? (0, c.gL)((0, c.Wj)(k()), this.initialStalledTimestamp)
                        : r
                          ? (0, c.gL)(this.initialStalledTimestampStop, this.initialStalledTimestamp)
                          : (0, c.Wj)(0)),
                        (this.externalStalledDuration = e ?? (0, c.Wj)(0)));
                    let { playingState: n } = this.getState() || {};
                    ('pause' !== n && this.handleInitialBuffering(),
                        (this.wasInitBufferingLogged = !0),
                        (this.initialStalledTimestamp = void 0),
                        (this.initialStalledTimestampStop = void 0));
                }
                handleInitialBuffering() {
                    this.wasInitBufferingHandled ||
                        this.initBufferingDeferred ||
                        (this.externalStalledDuration && this.setExternalStalledDuration(this.externalStalledDuration),
                        this.setBuffering(!0, this.initialStalledDuration),
                        (this.wasInitBufferingHandled = !0));
                }
                destroy(e) {
                    ((this.compressionSuspended = !0),
                        this.flushPendingLogs(),
                        this.stalledController.destroy(),
                        this.playerAliveController.destroy(),
                        this.watchedTimeTracker.destroy(),
                        this.logEvent({ name: 'DestroyPlayer', data: { reason: e?.reason } }),
                        this.timer.stop(),
                        (this.destroyed = !0));
                }
                getExpectedStalled() {
                    return this.stalledController.getExpectedStalled();
                }
                getWasInitBufferingHandled() {
                    return this.wasInitBufferingHandled;
                }
                clearBufferingHistory() {
                    return this.stalledController.clearStalledHistory();
                }
                setPreloadDetails() {
                    (this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({ name: 'DeprecatedTelemetryMethodUsed', data: { method: 'setPreloadDetails' } }), (this.useOfDeprecatedMethodIsLogged = !0)),
                        F(Error('Deprecated method used. Method is Telemetry#setPreloadDetails(). Just remove it.')));
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
                    if (
                        (this.flushStates(),
                        e && t && this.setExpectedBuffering({ reason: l.SetSource, details: t }),
                        (this.sourceIndexes.current = this.sourceIndexes.last > this.sourceIndexes.current ? this.sourceIndexes.last : ++this.sourceIndexes.last),
                        (this.loopIndex = 0),
                        this.watchedTimeTracker.reset(),
                        r && this.setStaticParams(r),
                        this.logEvent({ name: 'SetSource', data: e ?? void 0 }),
                        !e || !t)
                    )
                        return;
                    let n = this.getState()?.playingState;
                    n !== a.PAUSE && n !== a.END && this.setBuffering(!0);
                }
                sendReportLog(e, t, r = !0) {
                    let n = t ?? this.generateReportId();
                    return (this.logEvent({ name: 'ReportLog', data: { reportId: n, reported: r, reportData: e } }), n);
                }
                generateReportId() {
                    return `${this.playerInfo.vsid}x${this.reportNumber++}`;
                }
                onExpectedBuffering({ reason: e, details: t }) {
                    return (this.checkInitBuffering(e), this.stalledController.setExpectedStalled(J(e, t)));
                }
                onSeek(e) {
                    this.setExpectedBuffering({ reason: l.Seek, details: e });
                }
                onVideoTrackChange(e) {
                    this.setExpectedBuffering({ reason: l.VideoTrackChange, details: e });
                }
                onAudioTrackChange(e) {
                    this.setExpectedBuffering({ reason: l.AudioTrackChange, details: e });
                }
                onRecover(e) {
                    this.setExpectedBuffering({ reason: l.Recover, details: e });
                }
                onMediaError(e) {
                    this.setExpectedBuffering({ reason: l.MediaError, details: e });
                }
                onNetworkStatusChange(e) {
                    this.setExpectedBuffering({ reason: l.Offline, details: e });
                }
                onRepresentationsChange(e) {
                    this.setExpectedBuffering({ reason: l.RepresentationsChange, details: e });
                }
                onLiveEdge(e) {
                    this.setExpectedBuffering({ reason: l.LiveEdge, details: e });
                }
                onAdStart(e) {
                    this.setExpectedBuffering({ reason: l.AdStart, details: e });
                }
                onAdBetween(e) {
                    this.setExpectedBuffering({ reason: l.AdBetween, details: e });
                }
                onAdEnd(e) {
                    this.setExpectedBuffering({ reason: l.AdEnd, details: e });
                }
                onLoop() {
                    this.loopEnabled && (this.logEvent({ name: 'Loop', data: { loopIndex: this.loopIndex } }), this.loopIndex++);
                }
                setLoop(e) {
                    (this.loopEnabled !== e && this.writePlayerAliveStateManually(), e || (this.loopIndex = 0), (this.loopEnabled = e));
                }
            }
        },
        92948: (e, t) => {
            'use strict';
            var r;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, r) {
                    return {
                        trackEvent: (n, i) => {
                            let a = { ...i, ...t.getGlobalParams(), ...r.getPlatformParams() };
                            e.trackEvent(n, a);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(r || (t.MiniappConfig = r = {})));
        },
        94177: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    bindSnapshot: function () {
                        return o;
                    },
                    createAsyncLocalStorage: function () {
                        return a;
                    },
                    createSnapshot: function () {
                        return s;
                    },
                }));
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
            function o(e) {
                return i ? i.bind(e) : n.bind(e);
            }
            function s() {
                return i
                    ? i.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        96669: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                }));
            let n = r(20603);
        },
        97993: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { withUserID: () => n.B }));
            var n = r(85720);
        },
    },
]);
