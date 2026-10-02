'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [489, 2870, 4464, 5251, 7632],
    {
        542: (e, t, r) => {
            var n = r(74631),
                o =
                    'function' == typeof Object.is
                        ? Object.is
                        : function (e, t) {
                              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                          },
                i = n.useState,
                s = n.useEffect,
                a = n.useLayoutEffect,
                u = n.useDebugValue;
            function l(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !o(e, r);
                } catch (e) {
                    return !0;
                }
            }
            var c =
                'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
                    ? function (e, t) {
                          return t();
                      }
                    : function (e, t) {
                          var r = t(),
                              n = i({ inst: { value: r, getSnapshot: t } }),
                              o = n[0].inst,
                              c = n[1];
                          return (
                              a(
                                  function () {
                                      ((o.value = r), (o.getSnapshot = t), l(o) && c({ inst: o }));
                                  },
                                  [e, r, t],
                              ),
                              s(
                                  function () {
                                      return (
                                          l(o) && c({ inst: o }),
                                          e(function () {
                                              l(o) && c({ inst: o });
                                          })
                                      );
                                  },
                                  [e],
                              ),
                              u(r),
                              r
                          );
                      };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
        },
        8487: (e, t, r) => {
            r.d(t, { A: () => l });
            var n = r(23198),
                o = r(74631),
                i = r(30236),
                s = r(39004);
            function a(e) {
                var t = (0, s.A)(),
                    r = t.formatMessage,
                    n = t.textComponent,
                    i = void 0 === n ? o.Fragment : n,
                    a = e.id,
                    u = e.description,
                    l = e.defaultMessage,
                    c = e.values,
                    f = e.children,
                    d = e.tagName,
                    h = void 0 === d ? i : d,
                    p = r({ id: a, description: u, defaultMessage: l }, c, { ignoreTag: e.ignoreTag });
                return 'function' == typeof f ? f(Array.isArray(p) ? p : [p]) : h ? o.createElement(h, null, p) : o.createElement(o.Fragment, null, p);
            }
            a.displayName = 'FormattedMessage';
            var u = o.memo(a, function (e, t) {
                var r = e.values,
                    o = (0, n.__rest)(e, ['values']),
                    s = t.values,
                    a = (0, n.__rest)(t, ['values']);
                return (0, i.bN)(s, r) && (0, i.bN)(o, a);
            });
            u.displayName = 'MemoizedFormattedMessage';
            let l = u;
        },
        10508: (e, t, r) => {
            r.d(t, { A: () => u });
            var n = r(13764),
                o = r(51277),
                i = r(17615),
                s = Math.max,
                a = Math.min;
            let u = function (e, t, r) {
                var u,
                    l,
                    c,
                    f,
                    d,
                    h,
                    p = 0,
                    g = !1,
                    m = !1,
                    b = !0;
                if ('function' != typeof e) throw TypeError('Expected a function');
                function v(t) {
                    var r = u,
                        n = l;
                    return ((u = l = void 0), (p = t), (f = e.apply(n, r)));
                }
                function y(e) {
                    var r = e - h,
                        n = e - p;
                    return void 0 === h || r >= t || r < 0 || (m && n >= c);
                }
                function E() {
                    var e,
                        r,
                        n,
                        i = (0, o.A)();
                    if (y(i)) return T(i);
                    d = setTimeout(E, ((e = i - h), (r = i - p), (n = t - e), m ? a(n, c - r) : n));
                }
                function T(e) {
                    return ((d = void 0), b && u) ? v(e) : ((u = l = void 0), f);
                }
                function A() {
                    var e,
                        r = (0, o.A)(),
                        n = y(r);
                    if (((u = arguments), (l = this), (h = r), n)) {
                        if (void 0 === d) return ((p = e = h), (d = setTimeout(E, t)), g ? v(e) : f);
                        if (m) return (clearTimeout(d), (d = setTimeout(E, t)), v(h));
                    }
                    return (void 0 === d && (d = setTimeout(E, t)), f);
                }
                return (
                    (t = (0, i.A)(t) || 0),
                    (0, n.A)(r) && ((g = !!r.leading), (c = (m = 'maxWait' in r) ? s((0, i.A)(r.maxWait) || 0, t) : c), (b = 'trailing' in r ? !!r.trailing : b)),
                    (A.cancel = function () {
                        (void 0 !== d && clearTimeout(d), (p = 0), (u = h = l = d = void 0));
                    }),
                    (A.flush = function () {
                        return void 0 === d ? f : T((0, o.A)());
                    }),
                    A
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
            r.d(t, { A: () => f });
            var n = r(22105),
                o = r(13764),
                i = r(95539),
                s = 0 / 0,
                a = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                c = parseInt;
            let f = function (e) {
                if ('number' == typeof e) return e;
                if ((0, i.A)(e)) return s;
                if ((0, o.A)(e)) {
                    var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                    e = (0, o.A)(t) ? t + '' : t;
                }
                if ('string' != typeof e) return 0 === e ? e : +e;
                e = (0, n.A)(e);
                var r = u.test(e);
                return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? s : +e;
            };
        },
        19049: (e, t, r) => {
            r.d(t, { A: () => o });
            var n = /\s/;
            let o = function (e) {
                for (var t = e.length; t-- && n.test(e.charAt(t)););
                return t;
            };
        },
        22105: (e, t, r) => {
            r.d(t, { A: () => i });
            var n = r(19049),
                o = /^\s+/;
            let i = function (e) {
                return e ? e.slice(0, (0, n.A)(e) + 1).replace(o, '') : e;
            };
        },
        40371: (e, t, r) => {
            e.exports = r(542);
        },
        51277: (e, t, r) => {
            r.d(t, { A: () => o });
            var n = r(22084);
            let o = function () {
                return n.A.Date.now();
            };
        },
        76481: (e, t, r) => {
            r.d(t, { m: () => o });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: o = {}, ...i } = t,
                        s = e || 'Internal error';
                    (super(s, i), (this.message = s), (this.code = r), (this.data = o), (this.stack = Error(s).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
            class o extends n {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        77920: (e, t, r) => {
            var n;
            (r.d(t, { X: () => n }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(n || (n = {})));
        },
        82298: (e, t, r) => {
            r.d(t, { $: () => n });
            function n() {
                for (var e, t, r = 0, n = ''; r < arguments.length;)
                    (e = arguments[r++]) &&
                        (t = (function e(t) {
                            var r,
                                n,
                                o = '';
                            if ('string' == typeof t || 'number' == typeof t) o += t;
                            else if ('object' == typeof t)
                                if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                else for (r in t) t[r] && (o && (o += ' '), (o += r));
                            return o;
                        })(e)) &&
                        (n && (n += ' '), (n += t));
                return n;
            }
        },
        84059: (e, t, r) => {
            var n = r(73923);
            (r.o(n, 'ServerInsertedHTMLContext') &&
                r.d(t, {
                    ServerInsertedHTMLContext: function () {
                        return n.ServerInsertedHTMLContext;
                    },
                }),
                r.o(n, 'notFound') &&
                    r.d(t, {
                        notFound: function () {
                            return n.notFound;
                        },
                    }),
                r.o(n, 'redirect') &&
                    r.d(t, {
                        redirect: function () {
                            return n.redirect;
                        },
                    }),
                r.o(n, 'usePathname') &&
                    r.d(t, {
                        usePathname: function () {
                            return n.usePathname;
                        },
                    }),
                r.o(n, 'useRouter') &&
                    r.d(t, {
                        useRouter: function () {
                            return n.useRouter;
                        },
                    }),
                r.o(n, 'useSearchParams') &&
                    r.d(t, {
                        useSearchParams: function () {
                            return n.useSearchParams;
                        },
                    }),
                r.o(n, 'useServerInsertedHTML') &&
                    r.d(t, {
                        useServerInsertedHTML: function () {
                            return n.useServerInsertedHTML;
                        },
                    }));
        },
        88204: (e, t, r) => {
            r.d(t, { eO: () => f, PA: () => E });
            var n,
                o,
                i = r(33660),
                s = r(74631);
            if (!s.useState) throw Error('mobx-react-lite requires React with Hooks support');
            if (!i.Gn) throw Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
            var a = r(71910);
            function u(e) {
                e();
            }
            function l(e) {
                return (0, i.yl)(e);
            }
            var c = !1;
            function f(e) {
                c = e;
            }
            var d = (function () {
                    function e(e) {
                        var t = this;
                        (Object.defineProperty(this, 'finalize', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                            Object.defineProperty(this, 'registrations', { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
                            Object.defineProperty(this, 'sweepTimeout', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(this, 'sweep', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: function (e) {
                                    (void 0 === e && (e = 1e4), clearTimeout(t.sweepTimeout), (t.sweepTimeout = void 0));
                                    var r = Date.now();
                                    (t.registrations.forEach(function (n, o) {
                                        r - n.registeredAt >= e && (t.finalize(n.value), t.registrations.delete(o));
                                    }),
                                        t.registrations.size > 0 && t.scheduleSweep());
                                },
                            }),
                            Object.defineProperty(this, 'finalizeAllImmediately', {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: function () {
                                    t.sweep(0);
                                },
                            }));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'register', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e, t, r) {
                                (this.registrations.set(r, { value: t, registeredAt: Date.now() }), this.scheduleSweep());
                            },
                        }),
                        Object.defineProperty(e.prototype, 'unregister', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                this.registrations.delete(e);
                            },
                        }),
                        Object.defineProperty(e.prototype, 'scheduleSweep', {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                void 0 === this.sweepTimeout && (this.sweepTimeout = setTimeout(this.sweep, 1e4));
                            },
                        }),
                        e
                    );
                })(),
                h = new ('undefined' != typeof FinalizationRegistry ? FinalizationRegistry : d)(function (e) {
                    var t;
                    (null == (t = e.reaction) || t.dispose(), (e.reaction = null));
                }),
                p = r(40371);
            function g(e) {
                e.reaction = new i.qT('observer'.concat(e.name), function () {
                    var t;
                    ((e.stateVersion = Symbol()), null == (t = e.onStoreChange) || t.call(e));
                });
            }
            var m = 'function' == typeof Symbol && Symbol.for,
                b = null != (o = null == (n = Object.getOwnPropertyDescriptor(function () {}, 'name')) ? void 0 : n.configurable) && o,
                v = m
                    ? Symbol.for('react.forward_ref')
                    : 'function' == typeof s.forwardRef &&
                      (0, s.forwardRef)(function (e) {
                          return null;
                      }).$$typeof,
                y = m
                    ? Symbol.for('react.memo')
                    : 'function' == typeof s.memo &&
                      (0, s.memo)(function (e) {
                          return null;
                      }).$$typeof;
            function E(e, t) {
                if (y && e.$$typeof === y)
                    throw Error(
                        "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
                    );
                if (c) return e;
                var r,
                    n,
                    o,
                    i = null != (o = null == t ? void 0 : t.forwardRef) && o,
                    a = e,
                    u = e.displayName || e.name;
                if (v && e.$$typeof === v && ((i = !0), 'function' != typeof (a = e.render)))
                    throw Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
                var f = function (e, t) {
                    return (function (e, t) {
                        if ((void 0 === t && (t = 'observed'), c)) return e();
                        var r,
                            n,
                            o = s.useRef(null);
                        if (!o.current) {
                            var i = {
                                reaction: null,
                                onStoreChange: null,
                                stateVersion: Symbol(),
                                name: t,
                                subscribe: function (e) {
                                    return (
                                        h.unregister(i),
                                        (i.onStoreChange = e),
                                        i.reaction || (g(i), (i.stateVersion = Symbol())),
                                        function () {
                                            var e;
                                            ((i.onStoreChange = null), null == (e = i.reaction) || e.dispose(), (i.reaction = null));
                                        }
                                    );
                                },
                                getSnapshot: function () {
                                    return i.stateVersion;
                                },
                            };
                            o.current = i;
                        }
                        var a = o.current;
                        if (
                            (a.reaction || (g(a), h.register(o, a, a)),
                            s.useDebugValue(a.reaction, l),
                            (0, p.useSyncExternalStore)(a.subscribe, a.getSnapshot, a.getSnapshot),
                            a.reaction.track(function () {
                                try {
                                    r = e();
                                } catch (e) {
                                    n = e;
                                }
                            }),
                            n)
                        )
                            throw n;
                        return r;
                    })(function () {
                        return a(e, t);
                    }, u);
                };
                return (
                    (f.displayName = e.displayName),
                    b && Object.defineProperty(f, 'name', { value: e.name, writable: !0, configurable: !0 }),
                    e.contextTypes && (f.contextTypes = e.contextTypes),
                    i && (f = (0, s.forwardRef)(f)),
                    (r = e),
                    (n = f = (0, s.memo)(f)),
                    Object.keys(r).forEach(function (e) {
                        T[e] || Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
                    f
                );
            }
            var T = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
            (!(function (e) {
                (e || (e = u), (0, i.jK)({ reactionScheduler: e }));
            })(a.unstable_batchedUpdates),
                h.finalizeAllImmediately);
        },
        91626: (e, t, r) => {
            (r.d(t, { G: () => o }), r(77920));
            var n = r(76481);
            class o extends n.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        93690: (e, t, r) => {
            r.d(t, { GX: () => i.G, X1: () => n.X, m5: () => o.m });
            var n = r(77920),
                o = r(76481),
                i = r(91626);
            r(95919);
        },
        95539: (e, t, r) => {
            r.d(t, { A: () => i });
            var n = r(4652),
                o = r(38531);
            let i = function (e) {
                return 'symbol' == typeof e || ((0, o.A)(e) && '[object Symbol]' == (0, n.A)(e));
            };
        },
        95759: (e, t, r) => {
            (r.r(t),
                r.d(t, {
                    AVATAR_DEFAULT_SIZE: () => T,
                    BurstDebounce: () => U,
                    TLD_MARK: () => c,
                    UrlPolicyRejectionReason: () => n,
                    UrlProtocol: () => o,
                    createAvatarUrl: () => S,
                    createAvatarVideoUrl: () => D,
                    createBurstDebounceDebugLogger: () => j,
                    createObjectFromError: () =>
                        function e(t, r = new WeakSet()) {
                            try {
                                if ('object' == typeof t && null !== t) {
                                    if (r.has(t)) return { '[Circular]': !0 };
                                    r.add(t);
                                    let n = P.reduce((n, o) => {
                                        let i = t[o];
                                        return (
                                            void 0 === i || (('cause' === o || 'error' === o) && 'object' == typeof i && null !== i ? (n[o] = e(i, r)) : (n[o] = i)), n
                                        );
                                    }, {});
                                    return ((n.ownProperties = Object.getOwnPropertyNames(t).reduce((e, r) => (P.includes(r) || (e[r] = t[r]), e), {})), n);
                                }
                                return { error: t };
                            } catch (r) {
                                let e = { name: '', message: '' };
                                return (r instanceof Error && ((e.name = r.name), (e.message = r.message)), { error: t, serializationError: e });
                            }
                        },
                    createVsid: () => N,
                    getDataAttrFromProps: () => M,
                    getLinkAttributesBase: () => L,
                    getPathnameFromUrl: () => f,
                    getTldFromHost: () => l,
                    getTldHost: () => u,
                    hexToHsl: () => F,
                    hexToRgb: () => B,
                    httpsReplacer: () => E,
                    isRecord: () => H,
                    isSafeDecodedPathname: () => p,
                    isSafeUrlPathnameAfterDecode: () => g,
                    mergeTestIds: () => R,
                    parseJSONSafely: () => I,
                    resolveUrlByPolicy: () => V,
                    sanitizeDOM: () => y,
                    stringifyJSONSafely: () => b,
                    toBoolean: () => a,
                }));
            var n,
                o,
                i = r(23950);
            let s = ['1', 'true', 'on', 'yes'];
            function a(e) {
                return !!(!0 === e || 1 === e || ((0, i.A)(e) && s.includes(e.trim().toLowerCase())));
            }
            let u = (e, t, r) => e.replace(r, t),
                l = (e) => {
                    let t = e?.split(':')[0];
                    return (t?.includes('.') && t?.split('.').pop()) || '';
                },
                c = '{tld}';
            function f(e) {
                return e.split(/[?#]/)[0] ?? '';
            }
            let d = /%(?:25|2e|2f|5c)/i,
                h = /(^|[\\/])\.\.([\\/]|$)/;
            function p(e) {
                return !h.test(e) && !d.test(e);
            }
            function g(e) {
                let t,
                    r = f(e);
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
            let E = (e) => `https://${e.replace(/^(https*:\/\/)/, '')}`,
                T = 100,
                A = [30, 50, 80, 100, 200, 300, 400, 600, 800, 1e3],
                S = (e, t, r) => {
                    let n;
                    if ('orig' === t) n = 'orig';
                    else {
                        let e = t ? ((e) => [...A].sort((t, r) => Math.abs(e - t) - Math.abs(e - r))[0] || T)(t) : T;
                        n = r ? `m${e}x${e}` : `${e}x${e}`;
                    }
                    return E(e.replace('%%', n));
                },
                O = [
                    { width: 400, height: 300 },
                    { width: 1280, height: 720 },
                    { width: 1920, height: 1080 },
                ],
                w = O[0],
                _ = (e) => `${e.width}x${e.height}`,
                D = (e, t) => {
                    let r;
                    return (
                        (r = 'orig' === t ? 'orig' : t ? ((e) => _([...O].sort((t, r) => Math.abs(e - t.height) - Math.abs(e - r.height))[0] || w))(t) : _(w)),
                        E(e.replace('%%', r))
                    );
                };
            function N(e, t) {
                let r = '';
                for (; r.length < 44;) r += (Math.random() + 1).toString(36).substring(3);
                r = r.slice(0, 44);
                let n = e.toString().slice(0, 10);
                return `${r}x${t}x0001x${n}`;
            }
            let P = ['name', 'message', 'stack', 'cause', 'colno', 'lineno', 'filename', 'error', 'data', 'code', 'type', 'detail'],
                L = (e, t) => {
                    let r,
                        { params: n = {}, query: o = {}, options: i = {} } = t ?? {},
                        { isExternalLink: s, host: a, linkType: u, lang: l } = i;
                    if (((r = Object.entries(n).reduce((e, [t, r]) => e.replace(`:${t}`, encodeURIComponent(String(r))), e)), Object.keys(o).length && !u)) {
                        let [e, ...t] = r.split('#'),
                            n = t.length > 0 ? `#${t.join('#')}` : '',
                            i = ((e, t) => {
                                let r = {};
                                for (let [t, n] of Object.entries(e)) r[t] = String(n);
                                let n = new URLSearchParams(r).toString();
                                return n ? (t ? `&${n}` : `?${n}`) : '';
                            })(o, e?.includes('?'));
                        r = `${e}${i}${n}`;
                    }
                    let c = !a;
                    c || (a.endsWith('/') && (r = r.startsWith('/') ? r.substring(1) : r), (r = `${a}${r}`));
                    let f = s ?? !c,
                        d = {
                            href: r,
                            target: ((e, t) => {
                                if (!e) return t ? '_blank' : '_self';
                            })(u, f),
                            rel: ((e, t) => e || (t ? 'noreferrer noopener' : ''))(u, f),
                        };
                    return ('alternate' === u && l && (d.hrefLang = l), d);
                };
            function I(e, t = console) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return ((e instanceof Error || 'string' == typeof e) && t.error(e), null);
                }
            }
            function R(e, t) {
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
                M = (e) => Object.entries(e).reduce((e, [t, r]) => ($.test(t) && 'string' == typeof r && (e[t] = r), e), {});
            var x = r(10508);
            let C = '[BurstDebounce]',
                k = { event: 'color: #0891B2; font-weight: 700', state: 'color: #7C3AED; font-weight: 600', lifecycle: 'color: #D97706; font-weight: 700' };
            function j(e = !1) {
                return {
                    logGroup: function (t, r, n) {
                        if (!e) return;
                        let o = k[n?.type ?? 'state'];
                        (n?.collapsed ? console.groupCollapsed(`%c${C} ${t}`, o) : console.group(`%c${C} ${t}`, o),
                            r && (Object.values(r).some((e) => null !== e && 'object' == typeof e) ? console.log(`%c${C}`, 'color: #6B7280', r) : console.table(r)),
                            console.groupEnd());
                    },
                };
            }
            class U {
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
                        (this.debugLogger = j(r)),
                        this.logLifecycle('created', { ...this.config }),
                        (this.debouncedCallback = (0, x.A)(() => {
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
            let B = (e) => ({ r: parseInt(e.slice(1, 3), 16), g: parseInt(e.slice(3, 5), 16), b: parseInt(e.slice(5, 7), 16) }),
                F = (e) => {
                    let { r: t, g: r, b: n } = B(e),
                        o = Math.min((t /= 255), (r /= 255), (n /= 255)),
                        i = Math.max(t, r, n),
                        s = i - o,
                        a = 0,
                        u = 0,
                        l = (o + i) / 2;
                    return (
                        (a = Math.round(60 * (a = 0 === s ? 0 : i === t ? ((r - n) / s) % 6 : i === r ? (n - t) / s + 2 : (t - r) / s + 4))) < 0 && (a += 360),
                        0 !== s && (u = s / (1 - Math.abs(2 * l - 1))),
                        { h: a, s: Number((100 * u).toFixed(1)), l: Number((100 * l).toFixed(1)) }
                    );
                },
                H = (e) => 'object' == typeof e && null !== e && !Array.isArray(e);
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
            })(o || (o = {}));
        },
        95919: (e, t, r) => {
            var n;
            (r.d(t, { Z: () => n }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(n || (n = {})));
        },
    },
]);
