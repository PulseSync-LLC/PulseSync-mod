'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7795],
    {
        8487: (e, t, r) => {
            r.d(t, { A: () => c });
            var n = r(23198),
                a = r(74631),
                i = r(30236),
                o = r(39004);
            function s(e) {
                var t = (0, o.A)(),
                    r = t.formatMessage,
                    n = t.textComponent,
                    i = void 0 === n ? a.Fragment : n,
                    s = e.id,
                    l = e.description,
                    c = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    g = e.tagName,
                    f = void 0 === g ? i : g,
                    p = r({ id: s, description: l, defaultMessage: c }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(p) ? p : [p]) : f ? a.createElement(f, null, p) : a.createElement(a.Fragment, null, p);
            }
            s.displayName = 'FormattedMessage';
            var l = a.memo(s, function (e, t) {
                var r = e.values,
                    a = (0, n.__rest)(e, ['values']),
                    o = t.values,
                    s = (0, n.__rest)(t, ['values']);
                return (0, i.bN)(o, r) && (0, i.bN)(a, s);
            });
            l.displayName = 'MemoizedFormattedMessage';
            let c = l;
        },
        10508: (e, t, r) => {
            r.d(t, { A: () => l });
            var n = r(13764),
                a = r(51277),
                i = r(17615),
                o = Math.max,
                s = Math.min;
            let l = function (e, t, r) {
                var l,
                    c,
                    u,
                    d,
                    g,
                    f,
                    p = 0,
                    h = !1,
                    m = !1,
                    b = !0;
                if ('function' != typeof e) throw TypeError('Expected a function');
                function v(t) {
                    var r = l,
                        n = c;
                    return ((l = c = void 0), (p = t), (d = e.apply(n, r)));
                }
                function y(e) {
                    var r = e - f,
                        n = e - p;
                    return void 0 === f || r >= t || r < 0 || (m && n >= u);
                }
                function A() {
                    var e,
                        r,
                        n,
                        i = (0, a.A)();
                    if (y(i)) return k(i);
                    g = setTimeout(A, ((e = i - f), (r = i - p), (n = t - e), m ? s(n, u - r) : n));
                }
                function k(e) {
                    return ((g = void 0), b && l) ? v(e) : ((l = c = void 0), d);
                }
                function P() {
                    var e,
                        r = (0, a.A)(),
                        n = y(r);
                    if (((l = arguments), (c = this), (f = r), n)) {
                        if (void 0 === g) return ((p = e = f), (g = setTimeout(A, t)), h ? v(e) : d);
                        if (m) return (clearTimeout(g), (g = setTimeout(A, t)), v(f));
                    }
                    return (void 0 === g && (g = setTimeout(A, t)), d);
                }
                return (
                    (t = (0, i.A)(t) || 0),
                    (0, n.A)(r) && ((h = !!r.leading), (u = (m = 'maxWait' in r) ? o((0, i.A)(r.maxWait) || 0, t) : u), (b = 'trailing' in r ? !!r.trailing : b)),
                    (P.cancel = function () {
                        (void 0 !== g && clearTimeout(g), (p = 0), (l = f = c = g = void 0));
                    }),
                    (P.flush = function () {
                        return void 0 === g ? d : k((0, a.A)());
                    }),
                    P
                );
            };
        },
        13764: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = function (e) {
                var t = typeof e;
                return null != e && ('object' == t || 'function' == t);
            };
        },
        17615: (e, t, r) => {
            r.d(t, { A: () => d });
            var n = r(22105),
                a = r(13764),
                i = r(95539),
                o = 0 / 0,
                s = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                u = parseInt;
            let d = function (e) {
                if ('number' == typeof e) return e;
                if ((0, i.A)(e)) return o;
                if ((0, a.A)(e)) {
                    var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                    e = (0, a.A)(t) ? t + '' : t;
                }
                if ('string' != typeof e) return 0 === e ? e : +e;
                e = (0, n.A)(e);
                var r = l.test(e);
                return r || c.test(e) ? u(e.slice(2), r ? 2 : 8) : s.test(e) ? o : +e;
            };
        },
        19049: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = /\s/;
            let a = function (e) {
                for (var t = e.length; t-- && n.test(e.charAt(t)););
                return t;
            };
        },
        22105: (e, t, r) => {
            r.d(t, { A: () => i });
            var n = r(19049),
                a = /^\s+/;
            let i = function (e) {
                return e ? e.slice(0, (0, n.A)(e) + 1).replace(a, '') : e;
            };
        },
        26895: (e, t) => {
            var r;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, r) {
                    return {
                        trackEvent: (n, a) => {
                            let i = { ...a, ...t.getGlobalParams(), ...r.getPlatformParams() };
                            e.trackEvent(n, i);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(r || (t.MiniappConfig = r = {})));
        },
        51277: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(22084);
            let a = function () {
                return n.A.Date.now();
            };
        },
        59342: (e, t, r) => {
            let n;
            r.d(t, { A: () => s });
            let a = { randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) },
                i = new Uint8Array(16),
                o = [];
            for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
            let s = function (e, t, r) {
                if (a.randomUUID && !t && !e) return a.randomUUID();
                let s =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (!n && !(n = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                                throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
                            return n(i);
                        }
                    )();
                if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = s[e];
                    return t;
                }
                return (function (e, t = 0) {
                    return (
                        o[e[t + 0]] +
                        o[e[t + 1]] +
                        o[e[t + 2]] +
                        o[e[t + 3]] +
                        '-' +
                        o[e[t + 4]] +
                        o[e[t + 5]] +
                        '-' +
                        o[e[t + 6]] +
                        o[e[t + 7]] +
                        '-' +
                        o[e[t + 8]] +
                        o[e[t + 9]] +
                        '-' +
                        o[e[t + 10]] +
                        o[e[t + 11]] +
                        o[e[t + 12]] +
                        o[e[t + 13]] +
                        o[e[t + 14]] +
                        o[e[t + 15]]
                    );
                })(s);
            };
        },
        76945: (e, t, r) => {
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: r = '',
                        mainObjectType: i = a.DomainObjectType.NonApplicable,
                        mainObjectId: o = '',
                        tabId: s = '',
                        tabPos: l = 0,
                        isTabSelectedByDefault: c = !1,
                        viewUuid: u = '',
                    } = t,
                    d = (0, n.makeMetaParams)(1),
                    g = { ...t, skeletonId: r, mainObjectType: i, mainObjectId: o, tabId: s, tabPos: l, isTabSelectedByDefault: c, viewUuid: u, _meta: d };
                e.trackEvent('Screen.Opened', g);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: r = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: s = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: g = '',
                        } = t,
                        f = (0, n.makeMetaParams)(3),
                        p = {
                            ...t,
                            pageStyle: r,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: s,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: g,
                            _meta: f,
                        };
                    e.trackEvent('Screen.Opened', p);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: r = '',
                            mainObjectType: i = a.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: s = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, n.makeMetaParams)(1),
                        d = { ...t, skeletonId: r, mainObjectType: i, mainObjectId: o, tabId: s, tabPos: l, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: r = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: s = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                        } = t,
                        g = (0, n.makeMetaParams)(3),
                        f = {
                            ...t,
                            pageStyle: r,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: s,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            _meta: g,
                        };
                    e.trackEvent('Screen.Closed', f);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: r = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: s = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: g = '',
                        } = t,
                        f = (0, n.makeMetaParams)(4),
                        p = {
                            ...t,
                            pageStyle: r,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: s,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: g,
                            _meta: f,
                        };
                    e.trackEvent('Screen.Closed', p);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: r = '',
                            mainObjectType: i = a.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: s = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, n.makeMetaParams)(1),
                        d = { ...t, skeletonId: r, mainObjectType: i, mainObjectId: o, tabId: s, tabPos: l, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Started', d);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: r = '',
                            mainObjectType: i = a.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: s = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, n.makeMetaParams)(1),
                        d = { ...t, skeletonId: r, mainObjectType: i, mainObjectId: o, tabId: s, tabPos: l, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Navigated', d);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: r = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: s = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            deepLink: g = '',
                        } = t,
                        f = (0, n.makeMetaParams)(4),
                        p = {
                            ...t,
                            pageStyle: r,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: s,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            deepLink: g,
                            _meta: f,
                        };
                    e.trackEvent('Screen.Navigated', p);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: r = '',
                            mainObjectType: i = a.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: s = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, n.makeMetaParams)(1),
                        d = { ...t, skeletonId: r, mainObjectType: i, mainObjectId: o, tabId: s, tabPos: l, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', d);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: r = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: s = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                        } = t,
                        c = (0, n.makeMetaParams)(1),
                        u = { ...t, pageStyle: r, pagePlacement: i, skeletonId: o, mainObjectType: s, mainObjectId: l, _meta: c };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let n = r(26895),
                a = r(36619);
        },
        82298: (e, t, r) => {
            r.d(t, { $: () => n });
            function n() {
                for (var e, t, r = 0, n = ''; r < arguments.length;)
                    (e = arguments[r++]) &&
                        (t = (function e(t) {
                            var r,
                                n,
                                a = '';
                            if ('string' == typeof t || 'number' == typeof t) a += t;
                            else if ('object' == typeof t)
                                if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (a && (a += ' '), (a += n));
                                else for (r in t) t[r] && (a && (a += ' '), (a += r));
                            return a;
                        })(e)) &&
                        (n && (n += ' '), (n += t));
                return n;
            }
        },
        95539: (e, t, r) => {
            r.d(t, { A: () => i });
            var n = r(4652),
                a = r(38531);
            let i = function (e) {
                return 'symbol' == typeof e || ((0, a.A)(e) && '[object Symbol]' == (0, n.A)(e));
            };
        },
        95759: (e, t, r) => {
            (r.r(t),
                r.d(t, {
                    AVATAR_DEFAULT_SIZE: () => k,
                    BurstDebounce: () => B,
                    TLD_MARK: () => u,
                    UrlPolicyRejectionReason: () => n,
                    UrlProtocol: () => a,
                    createAvatarUrl: () => T,
                    createAvatarVideoUrl: () => E,
                    createBurstDebounceDebugLogger: () => R,
                    createObjectFromError: () =>
                        function e(t, r = new WeakSet()) {
                            try {
                                if ('object' == typeof t && null !== t) {
                                    if (r.has(t)) return { '[Circular]': !0 };
                                    r.add(t);
                                    let n = L.reduce((n, a) => {
                                        let i = t[a];
                                        return (
                                            void 0 === i || (('cause' === a || 'error' === a) && 'object' == typeof i && null !== i ? (n[a] = e(i, r)) : (n[a] = i)), n
                                        );
                                    }, {});
                                    return ((n.ownProperties = Object.getOwnPropertyNames(t).reduce((e, r) => (L.includes(r) || (e[r] = t[r]), e), {})), n);
                                }
                                return { error: t };
                            } catch (r) {
                                let e = { name: '', message: '' };
                                return (r instanceof Error && ((e.name = r.name), (e.message = r.message)), { error: t, serializationError: e });
                            }
                        },
                    createVsid: () => O,
                    getDataAttrFromProps: () => j,
                    getLinkAttributesBase: () => N,
                    getPathnameFromUrl: () => d,
                    getTldFromHost: () => c,
                    getTldHost: () => l,
                    hexToHsl: () => x,
                    hexToRgb: () => F,
                    httpsReplacer: () => A,
                    isRecord: () => W,
                    isSafeDecodedPathname: () => p,
                    isSafeUrlPathnameAfterDecode: () => h,
                    mergeTestIds: () => I,
                    parseJSONSafely: () => w,
                    resolveUrlByPolicy: () => V,
                    sanitizeDOM: () => y,
                    stringifyJSONSafely: () => b,
                    toBoolean: () => s,
                }));
            var n,
                a,
                i = r(23950);
            let o = ['1', 'true', 'on', 'yes'];
            function s(e) {
                return !!(!0 === e || 1 === e || ((0, i.A)(e) && o.includes(e.trim().toLowerCase())));
            }
            let l = (e, t, r) => e.replace(r, t),
                c = (e) => {
                    let t = e?.split(':')[0];
                    return (t?.includes('.') && t?.split('.').pop()) || '';
                },
                u = '{tld}';
            function d(e) {
                return e.split(/[?#]/)[0] ?? '';
            }
            let g = /%(?:25|2e|2f|5c)/i,
                f = /(^|[\\/])\.\.([\\/]|$)/;
            function p(e) {
                return !f.test(e) && !g.test(e);
            }
            function h(e) {
                let t,
                    r = d(e);
                try {
                    t = decodeURIComponent(r);
                } catch {
                    return !1;
                }
                return p(t);
            }
            var m = r(11668);
            function b(e, t = !0) {
                return m(e, { isJSON: t });
            }
            var v = r(26795);
            function y(e, t = { whiteList: { a: ['href', 'target', 'rel'], br: [], strong: [], em: [], sup: [], sub: [], p: [], span: ['class'], div: ['class'] } }) {
                return v(e, t);
            }
            let A = (e) => `https://${e.replace(/^(https*:\/\/)/, '')}`,
                k = 100,
                P = [30, 50, 80, 100, 200, 300, 400, 600, 800, 1e3],
                T = (e, t, r) => {
                    let n;
                    if ('orig' === t) n = 'orig';
                    else {
                        let e = t ? ((e) => [...P].sort((t, r) => Math.abs(e - t) - Math.abs(e - r))[0] || k)(t) : k;
                        n = r ? `m${e}x${e}` : `${e}x${e}`;
                    }
                    return A(e.replace('%%', n));
                },
                S = [
                    { width: 400, height: 300 },
                    { width: 1280, height: 720 },
                    { width: 1920, height: 1080 },
                ],
                D = S[0],
                M = (e) => `${e.width}x${e.height}`,
                E = (e, t) => {
                    let r;
                    return (
                        (r = 'orig' === t ? 'orig' : t ? ((e) => M([...S].sort((t, r) => Math.abs(e - t.height) - Math.abs(e - r.height))[0] || D))(t) : M(D)),
                        A(e.replace('%%', r))
                    );
                };
            function O(e, t) {
                let r = '';
                for (; r.length < 44;) r += (Math.random() + 1).toString(36).substring(3);
                r = r.slice(0, 44);
                let n = e.toString().slice(0, 10);
                return `${r}x${t}x0001x${n}`;
            }
            let L = ['name', 'message', 'stack', 'cause', 'colno', 'lineno', 'filename', 'error', 'data', 'code', 'type', 'detail'],
                N = (e, t) => {
                    let r,
                        { params: n = {}, query: a = {}, options: i = {} } = t ?? {},
                        { isExternalLink: o, host: s, linkType: l, lang: c } = i;
                    if (((r = Object.entries(n).reduce((e, [t, r]) => e.replace(`:${t}`, encodeURIComponent(String(r))), e)), Object.keys(a).length && !l)) {
                        let [e, ...t] = r.split('#'),
                            n = t.length > 0 ? `#${t.join('#')}` : '',
                            i = ((e, t) => {
                                let r = {};
                                for (let [t, n] of Object.entries(e)) r[t] = String(n);
                                let n = new URLSearchParams(r).toString();
                                return n ? (t ? `&${n}` : `?${n}`) : '';
                            })(a, e?.includes('?'));
                        r = `${e}${i}${n}`;
                    }
                    let u = !s;
                    u || (s.endsWith('/') && (r = r.startsWith('/') ? r.substring(1) : r), (r = `${s}${r}`));
                    let d = o ?? !u,
                        g = {
                            href: r,
                            target: ((e, t) => {
                                if (!e) return t ? '_blank' : '_self';
                            })(l, d),
                            rel: ((e, t) => e || (t ? 'noreferrer noopener' : ''))(l, d),
                        };
                    return ('alternate' === l && c && (g.hrefLang = c), g);
                };
            function w(e, t = console) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return ((e instanceof Error || 'string' == typeof e) && t.error(e), null);
                }
            }
            function I(e, t) {
                return [
                    ...(e || []),
                    ...(t || '')
                        .split(';')
                        .map((e) => {
                            let t = e.trim();
                            if (!t) return;
                            let r = t.split(/[,:]/)[0];
                            if (!r) return;
                            let n = Number(r);
                            return Number.isNaN(n) ? void 0 : n;
                        })
                        .filter((e) => void 0 !== e),
                ];
            }
            let $ = /^data-[a-zA-Z0-9-_]+$/,
                j = (e) => Object.entries(e).reduce((e, [t, r]) => ($.test(t) && 'string' == typeof r && (e[t] = r), e), {});
            var U = r(10508);
            let C = '[BurstDebounce]',
                _ = { event: 'color: #0891B2; font-weight: 700', state: 'color: #7C3AED; font-weight: 600', lifecycle: 'color: #D97706; font-weight: 700' };
            function R(e = !1) {
                return {
                    logGroup: function (t, r, n) {
                        if (!e) return;
                        let a = _[n?.type ?? 'state'];
                        (n?.collapsed ? console.groupCollapsed(`%c${C} ${t}`, a) : console.group(`%c${C} ${t}`, a),
                            r && (Object.values(r).some((e) => null !== e && 'object' == typeof e) ? console.log(`%c${C}`, 'color: #6B7280', r) : console.table(r)),
                            console.groupEnd());
                    },
                };
            }
            class B {
                callback;
                config;
                recentTimestamps = [];
                isBurstMode = !1;
                lastInvokeAt = 0;
                debouncedCallback;
                isPendingState = !1;
                debugLogger;
                constructor({ callback: e, config: t, enableDebugLogging: r = !1 }) {
                    if (!Number.isInteger(t.burstThreshold) || t.burstThreshold < 1)
                        throw RangeError(`BurstDebounce config.burstThreshold must be a positive integer, got ${t.burstThreshold}`);
                    ((this.callback = e),
                        (this.config = t),
                        (this.debugLogger = R(r)),
                        this.logLifecycle('created', { ...this.config }),
                        (this.debouncedCallback = (0, U.A)(() => {
                            ((this.isPendingState = !1), this.logEvent('debounced callback execute'), this.callback());
                        }, t.delay)));
                }
                invoke() {
                    let e = Date.now();
                    if ((this.refreshBurstIdle(e), this.registerAndCheckBurst(e), this.isBurstMode)) {
                        ((this.isPendingState = !0), this.logEvent('invoke -> schedule debounced callback'), this.debouncedCallback());
                        return;
                    }
                    (this.logEvent('invoke -> execute callback immediately'), this.callback());
                }
                cancel() {
                    ((this.isPendingState = !1), this.debouncedCallback.cancel(), this.logLifecycle('cancel pending callback'));
                }
                get isPending() {
                    return this.isPendingState;
                }
                dispose() {
                    ((this.isPendingState = !1),
                        this.debouncedCallback.cancel(),
                        (this.recentTimestamps = []),
                        (this.isBurstMode = !1),
                        (this.lastInvokeAt = 0),
                        this.logLifecycle('dispose instance state'));
                }
                refreshBurstIdle(e) {
                    this.isBurstMode &&
                        e - this.lastInvokeAt > this.config.burstExitIdleMs &&
                        ((this.isBurstMode = !1), (this.recentTimestamps = []), this.logState('burst mode reset by idle timeout'));
                }
                logEvent(e) {
                    this.debugLogger.logGroup(`event: ${e}`, this.getDebugSnapshot(), { type: 'event' });
                }
                logState(e) {
                    this.debugLogger.logGroup(`state: ${e}`, this.getDebugSnapshot(), { type: 'state' });
                }
                logLifecycle(e, t) {
                    this.debugLogger.logGroup(`lifecycle: ${e}`, t ?? this.getDebugSnapshot(), { type: 'lifecycle' });
                }
                getDebugSnapshot() {
                    let e = Date.now();
                    return {
                        isBurstMode: this.isBurstMode,
                        pending: this.isPendingState,
                        recentTimestampsLength: this.recentTimestamps.length,
                        msSinceLastInvoke: 0 === this.lastInvokeAt ? null : e - this.lastInvokeAt,
                    };
                }
                registerAndCheckBurst(e) {
                    let t = this.config.burstThreshold;
                    for (this.recentTimestamps.push(e); this.recentTimestamps.length > t;) this.recentTimestamps.shift();
                    if (this.recentTimestamps.length === t) {
                        let t = this.recentTimestamps[0];
                        void 0 !== t && e - t <= this.config.burstWindowMs && (this.isBurstMode = !0);
                    }
                    this.lastInvokeAt = e;
                }
            }
            let F = (e) => ({ r: parseInt(e.slice(1, 3), 16), g: parseInt(e.slice(3, 5), 16), b: parseInt(e.slice(5, 7), 16) }),
                x = (e) => {
                    let { r: t, g: r, b: n } = F(e),
                        a = Math.min((t /= 255), (r /= 255), (n /= 255)),
                        i = Math.max(t, r, n),
                        o = i - a,
                        s = 0,
                        l = 0,
                        c = (a + i) / 2;
                    return (
                        (s = Math.round(60 * (s = 0 === o ? 0 : i === t ? ((r - n) / o) % 6 : i === r ? (n - t) / o + 2 : (t - r) / o + 4))) < 0 && (s += 360),
                        0 !== o && (l = o / (1 - Math.abs(2 * c - 1))),
                        { h: s, s: Number((100 * l).toFixed(1)), l: Number((100 * c).toFixed(1)) }
                    );
                },
                W = (e) => 'object' == typeof e && null !== e && !Array.isArray(e);
            !(function (e) {
                ((e.INVALID_URL = 'invalid-url'), (e.DISALLOWED_PROTOCOL = 'disallowed-protocol'), (e.CREDENTIALS_NOT_ALLOWED = 'credentials-not-allowed'));
            })(n || (n = {}));
            let V = (e, t) => {
                let r;
                try {
                    r = void 0 === t.baseUrl ? new URL(e) : new URL(e, t.baseUrl);
                } catch {
                    return { isAllowed: !1, reason: n.INVALID_URL };
                }
                return t.allowedProtocols.has(r.protocol)
                    ? t.allowCredentials || ('' === r.username && '' === r.password)
                        ? { isAllowed: !0, url: r }
                        : { isAllowed: !1, reason: n.CREDENTIALS_NOT_ALLOWED }
                    : { isAllowed: !1, reason: n.DISALLOWED_PROTOCOL };
            };
            !(function (e) {
                ((e.HTTP = 'http:'), (e.HTTPS = 'https:'), (e.MAILTO = 'mailto:'), (e.TEL = 'tel:'));
            })(a || (a = {}));
        },
    },
]);
