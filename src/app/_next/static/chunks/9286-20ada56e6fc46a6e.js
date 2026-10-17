'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9286],
    {
        14508: (t, e, n) => {
            n.d(e, {
                $4: () => k,
                $t: () => f,
                $u: () => E,
                BF: () => U,
                CM: () => L,
                EW: () => w,
                F2: () => b,
                FP: () => G,
                Go: () => N,
                Jt: () => j,
                Kg: () => W,
                N: () => tt,
                OS: () => V,
                O_: () => D,
                Pg: () => O,
                Qp: () => X,
                RS: () => v,
                SE: () => _,
                WZ: () => T,
                XJ: () => Q,
                Y3: () => $,
                YE: () => R,
                YF: () => P,
                Zb: () => F,
                cX: () => d,
                du: () => B,
                em: () => S,
                fl: () => H,
                gR: () => y,
                jo: () => I,
                kQ: () => Y,
                nd: () => A,
                nr: () => c,
                tZ: () => x,
                uo: () => a,
                vB: () => M,
                vF: () => Z,
                yV: () => te,
                zG: () => C,
                zf: () => J,
            });
            var r,
                i = n(25649),
                o = n(74631),
                l = n(81011),
                u = n(58547);
            function a() {
                let t = navigator.userAgentData;
                return null != t && t.platform ? t.platform : navigator.platform;
            }
            function f() {
                let t = navigator.userAgentData;
                return t && Array.isArray(t.brands)
                    ? t.brands
                          .map((t) => {
                              let { brand: e, version: n } = t;
                              return e + '/' + n;
                          })
                          .join(' ')
                    : navigator.userAgent;
            }
            function c() {
                return /apple/i.test(navigator.vendor);
            }
            function s() {
                let t = /android/i;
                return t.test(a()) || t.test(f());
            }
            function d() {
                return a().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
            }
            function h() {
                return f().includes('jsdom/');
            }
            let p = 'data-floating-ui-focusable',
                m = 'ArrowLeft',
                g = 'ArrowRight';
            function v(t) {
                let e = t.activeElement;
                for (; (null == (n = e) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null;) {
                    var n;
                    e = e.shadowRoot.activeElement;
                }
                return e;
            }
            function y(t, e) {
                if (!t || !e) return !1;
                let n = null == e.getRootNode ? void 0 : e.getRootNode();
                if (t.contains(e)) return !0;
                if (n && (0, i.Ng)(n)) {
                    let n = e;
                    for (; n;) {
                        if (t === n) return !0;
                        n = n.parentNode || n.host;
                    }
                }
                return !1;
            }
            function w(t) {
                return 'composedPath' in t ? t.composedPath()[0] : t.target;
            }
            function b(t, e) {
                return null != e && ('composedPath' in t ? t.composedPath().includes(e) : null != t.target && e.contains(t.target));
            }
            function x(t) {
                return t.matches('html,body');
            }
            function R(t) {
                return (null == t ? void 0 : t.ownerDocument) || document;
            }
            function E(t) {
                return (0, i.sb)(t) && t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
            }
            function T(t) {
                return !!t && 'combobox' === t.getAttribute('role') && E(t);
            }
            function S(t) {
                if (!t || h()) return !0;
                try {
                    return t.matches(':focus-visible');
                } catch (t) {
                    return !0;
                }
            }
            function A(t) {
                return t ? (t.hasAttribute(p) ? t : t.querySelector('[' + p + ']') || t) : null;
            }
            function L(t, e, n) {
                return (
                    void 0 === n && (n = !0),
                    t
                        .filter((t) => {
                            var r;
                            return t.parentId === e && (!n || (null == (r = t.context) ? void 0 : r.open));
                        })
                        .flatMap((e) => [e, ...L(t, e.id, n)])
                );
            }
            function C(t, e) {
                let n,
                    r = -1;
                return (
                    !(function e(i, o) {
                        (o > r && ((n = i), (r = o)),
                            L(t, i).forEach((t) => {
                                e(t.id, o + 1);
                            }));
                    })(e, 0),
                    t.find((t) => t.id === n)
                );
            }
            function k(t, e) {
                var n;
                let r = [],
                    i = null == (n = t.find((t) => t.id === e)) ? void 0 : n.parentId;
                for (; i;) {
                    let e = t.find((t) => t.id === i);
                    ((i = null == e ? void 0 : e.parentId), e && (r = r.concat(e)));
                }
                return r;
            }
            function I(t) {
                (t.preventDefault(), t.stopPropagation());
            }
            function D(t) {
                return 'nativeEvent' in t;
            }
            function P(t) {
                return (0 === t.mozInputSource && !!t.isTrusted) || (s() && t.pointerType ? 'click' === t.type && 1 === t.buttons : 0 === t.detail && !t.pointerType);
            }
            function O(t) {
                return (
                    !h() &&
                    ((!s() && 0 === t.width && 0 === t.height) ||
                        (s() && 1 === t.width && 1 === t.height && 0 === t.pressure && 0 === t.detail && 'mouse' === t.pointerType) ||
                        (t.width < 1 && t.height < 1 && 0 === t.pressure && 0 === t.detail && 'touch' === t.pointerType))
                );
            }
            function N(t, e) {
                let n = ['mouse', 'pen'];
                return (e || n.push('', void 0), n.includes(t));
            }
            var V = 'undefined' != typeof document ? o.useLayoutEffect : function () {};
            function _(t) {
                let e = o.useRef(t);
                return (
                    V(() => {
                        e.current = t;
                    }),
                    e
                );
            }
            let q = { ...(r || (r = n.t(o, 2))) }.useInsertionEffect || ((t) => t());
            function j(t) {
                let e = o.useRef(() => {});
                return (
                    q(() => {
                        e.current = t;
                    }),
                    o.useCallback(function () {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == e.current ? void 0 : e.current(...n);
                    }, [])
                );
            }
            function z(t, e, n) {
                return Math.floor(t / e) !== n;
            }
            function B(t, e) {
                return e < 0 || e >= t.current.length;
            }
            function F(t, e) {
                return U(t, { disabledIndices: e });
            }
            function M(t, e) {
                return U(t, { decrement: !0, startingIndex: t.current.length, disabledIndices: e });
            }
            function U(t, e) {
                let { startingIndex: n = -1, decrement: r = !1, disabledIndices: i, amount: o = 1 } = void 0 === e ? {} : e,
                    l = n;
                do l += r ? -o : o;
                while (l >= 0 && l <= t.current.length - 1 && G(t, l, i));
                return l;
            }
            function W(t, e) {
                let { event: n, orientation: r, loop: i, rtl: o, cols: u, disabledIndices: a, minIndex: f, maxIndex: c, prevIndex: s, stopEvent: d = !1 } = e,
                    h = s;
                if ('ArrowUp' === n.key) {
                    if ((d && I(n), -1 === s)) h = c;
                    else if (((h = U(t, { startingIndex: h, amount: u, decrement: !0, disabledIndices: a })), i && (s - u < f || h < 0))) {
                        let t = s % u,
                            e = c % u,
                            n = c - (e - t);
                        h = e === t ? c : e > t ? n : n - u;
                    }
                    B(t, h) && (h = s);
                }
                if (
                    ('ArrowDown' === n.key &&
                        (d && I(n),
                        -1 === s
                            ? (h = f)
                            : ((h = U(t, { startingIndex: s, amount: u, disabledIndices: a })),
                              i && s + u > c && (h = U(t, { startingIndex: (s % u) - u, amount: u, disabledIndices: a }))),
                        B(t, h) && (h = s)),
                    'both' === r)
                ) {
                    let e = (0, l.RI)(s / u);
                    (n.key === (o ? m : g) &&
                        (d && I(n),
                        s % u != u - 1
                            ? ((h = U(t, { startingIndex: s, disabledIndices: a })),
                              i && z(h, u, e) && (h = U(t, { startingIndex: s - (s % u) - 1, disabledIndices: a })))
                            : i && (h = U(t, { startingIndex: s - (s % u) - 1, disabledIndices: a })),
                        z(h, u, e) && (h = s)),
                        n.key === (o ? g : m) &&
                            (d && I(n),
                            s % u != 0
                                ? ((h = U(t, { startingIndex: s, decrement: !0, disabledIndices: a })),
                                  i && z(h, u, e) && (h = U(t, { startingIndex: s + (u - (s % u)), decrement: !0, disabledIndices: a })))
                                : i && (h = U(t, { startingIndex: s + (u - (s % u)), decrement: !0, disabledIndices: a })),
                            z(h, u, e) && (h = s)));
                    let r = (0, l.RI)(c / u) === e;
                    B(t, h) && (h = i && r ? (n.key === (o ? g : m) ? c : U(t, { startingIndex: s - (s % u) - 1, disabledIndices: a })) : s);
                }
                return h;
            }
            function J(t, e, n) {
                let r = [],
                    i = 0;
                return (
                    t.forEach((t, o) => {
                        let { width: l, height: u } = t,
                            a = !1;
                        for (n && (i = 0); !a;) {
                            let t = [];
                            for (let n = 0; n < l; n++) for (let r = 0; r < u; r++) t.push(i + n + r * e);
                            (i % e) + l <= e && t.every((t) => null == r[t])
                                ? (t.forEach((t) => {
                                      r[t] = o;
                                  }),
                                  (a = !0))
                                : i++;
                        }
                    }),
                    [...r]
                );
            }
            function H(t, e, n, r, i) {
                if (-1 === t) return -1;
                let o = n.indexOf(t),
                    l = e[t];
                switch (i) {
                    case 'tl':
                        return o;
                    case 'tr':
                        if (!l) return o;
                        return o + l.width - 1;
                    case 'bl':
                        if (!l) return o;
                        return o + (l.height - 1) * r;
                    case 'br':
                        return n.lastIndexOf(t);
                }
            }
            function $(t, e) {
                return e.flatMap((e, n) => (t.includes(e) ? [n] : []));
            }
            function G(t, e, n) {
                if ('function' == typeof n) return n(e);
                if (n) return n.includes(e);
                let r = t.current[e];
                return null == r || r.hasAttribute('disabled') || 'true' === r.getAttribute('aria-disabled');
            }
            let Y = () => ({
                getShadowRoot: !0,
                displayCheck: 'function' == typeof ResizeObserver && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none',
            });
            function K(t, e) {
                let n = (0, u.Kr)(t, Y()),
                    r = n.length;
                if (0 === r) return;
                let i = v(R(t)),
                    o = n.indexOf(i);
                return n[-1 === o ? (1 === e ? 0 : r - 1) : o + e];
            }
            function Z(t) {
                return K(R(t).body, 1) || t;
            }
            function Q(t) {
                return K(R(t).body, -1) || t;
            }
            function X(t, e) {
                let n = e || t.currentTarget,
                    r = t.relatedTarget;
                return !r || !y(n, r);
            }
            function tt(t) {
                (0, u.Kr)(t, Y()).forEach((t) => {
                    ((t.dataset.tabindex = t.getAttribute('tabindex') || ''), t.setAttribute('tabindex', '-1'));
                });
            }
            function te(t) {
                t.querySelectorAll('[data-tabindex]').forEach((t) => {
                    let e = t.dataset.tabindex;
                    (delete t.dataset.tabindex, e ? t.setAttribute('tabindex', e) : t.removeAttribute('tabindex'));
                });
            }
        },
        25649: (t, e, n) => {
            let r;
            function i() {
                return 'undefined' != typeof window;
            }
            function o(t) {
                return a(t) ? (t.nodeName || '').toLowerCase() : '#document';
            }
            function l(t) {
                var e;
                return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window;
            }
            function u(t) {
                var e;
                return null == (e = (a(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement;
            }
            function a(t) {
                return !!i() && (t instanceof Node || t instanceof l(t).Node);
            }
            function f(t) {
                return !!i() && (t instanceof Element || t instanceof l(t).Element);
            }
            function c(t) {
                return !!i() && (t instanceof HTMLElement || t instanceof l(t).HTMLElement);
            }
            function s(t) {
                return !!i() && 'undefined' != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof l(t).ShadowRoot);
            }
            function d(t) {
                let { overflow: e, overflowX: n, overflowY: r, display: i } = R(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && 'inline' !== i && 'contents' !== i;
            }
            function h(t) {
                return /^(table|td|th)$/.test(o(t));
            }
            function p(t) {
                try {
                    if (t.matches(':popover-open')) return !0;
                } catch (t) {}
                try {
                    return t.matches(':modal');
                } catch (t) {
                    return !1;
                }
            }
            n.d(e, {
                $4: () => T,
                CP: () => E,
                L9: () => R,
                Ll: () => a,
                Lv: () => h,
                Ng: () => s,
                Tc: () => b,
                Tf: () => p,
                ZU: () => d,
                _m: () => S,
                ep: () => u,
                eu: () => x,
                gJ: () => w,
                mq: () => o,
                sQ: () => y,
                sb: () => c,
                v9: () =>
                    function t(e, n, r) {
                        var i;
                        (void 0 === n && (n = []), void 0 === r && (r = !0));
                        let o = (function t(e) {
                                let n = T(e);
                                return x(n) ? (e.ownerDocument || e).body : c(n) && d(n) ? n : t(n);
                            })(e),
                            u = o === (null == (i = e.ownerDocument) ? void 0 : i.body),
                            a = l(o);
                        if (!u) return n.concat(o, t(o, [], r));
                        {
                            let e = S(a);
                            return n.concat(a, a.visualViewport || [], d(o) ? o : [], e && r ? t(e) : []);
                        }
                    },
                vq: () => f,
                zk: () => l,
            });
            let m = /transform|translate|scale|rotate|perspective|filter/,
                g = /paint|layout|strict|content/,
                v = (t) => !!t && 'none' !== t;
            function y(t) {
                let e = f(t) ? R(t) : t;
                return (
                    v(e.transform) ||
                    v(e.translate) ||
                    v(e.scale) ||
                    v(e.rotate) ||
                    v(e.perspective) ||
                    (!b() && (v(e.backdropFilter) || v(e.filter))) ||
                    m.test(e.willChange || '') ||
                    g.test(e.contain || '')
                );
            }
            function w(t) {
                let e = T(t);
                for (; c(e) && !x(e);) {
                    if (y(e)) return e;
                    if (p(e)) break;
                    e = T(e);
                }
                return null;
            }
            function b() {
                return (null == r && (r = 'undefined' != typeof CSS && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none')), r);
            }
            function x(t) {
                return /^(html|body|#document)$/.test(o(t));
            }
            function R(t) {
                return l(t).getComputedStyle(t);
            }
            function E(t) {
                return f(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
            }
            function T(t) {
                if ('html' === o(t)) return t;
                let e = t.assignedSlot || t.parentNode || (s(t) && t.host) || u(t);
                return s(e) ? e.host : e;
            }
            function S(t) {
                return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
            }
        },
        58175: (t, e, n) => {
            n.d(e, { BN: () => h, ER: () => p, Ej: () => g, RK: () => v, UE: () => b, UU: () => m, cY: () => d, jD: () => y, mG: () => w, we: () => s });
            var r = n(77799),
                i = n(74631),
                o = n(71910),
                l = 'undefined' != typeof document ? i.useLayoutEffect : function () {};
            function u(t, e) {
                let n, r, i;
                if (t === e) return !0;
                if (typeof t != typeof e) return !1;
                if ('function' == typeof t && t.toString() === e.toString()) return !0;
                if (t && e && 'object' == typeof t) {
                    if (Array.isArray(t)) {
                        if ((n = t.length) !== e.length) return !1;
                        for (r = n; 0 != r--;) if (!u(t[r], e[r])) return !1;
                        return !0;
                    }
                    if ((n = (i = Object.keys(t)).length) !== Object.keys(e).length) return !1;
                    for (r = n; 0 != r--;) if (!{}.hasOwnProperty.call(e, i[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = i[r];
                        if (('_owner' !== n || !t.$$typeof) && !u(t[n], e[n])) return !1;
                    }
                    return !0;
                }
                return t != t && e != e;
            }
            function a(t) {
                return 'undefined' == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
            }
            function f(t, e) {
                let n = a(t);
                return Math.round(e * n) / n;
            }
            function c(t) {
                let e = i.useRef(t);
                return (
                    l(() => {
                        e.current = t;
                    }),
                    e
                );
            }
            function s(t) {
                void 0 === t && (t = {});
                let {
                        placement: e = 'bottom',
                        strategy: n = 'absolute',
                        middleware: s = [],
                        platform: d,
                        elements: { reference: h, floating: p } = {},
                        transform: m = !0,
                        whileElementsMounted: g,
                        open: v,
                    } = t,
                    [y, w] = i.useState({ x: 0, y: 0, strategy: n, placement: e, middlewareData: {}, isPositioned: !1 }),
                    [b, x] = i.useState(s);
                u(b, s) || x(s);
                let [R, E] = i.useState(null),
                    [T, S] = i.useState(null),
                    A = i.useCallback((t) => {
                        t !== I.current && ((I.current = t), E(t));
                    }, []),
                    L = i.useCallback((t) => {
                        t !== D.current && ((D.current = t), S(t));
                    }, []),
                    C = h || R,
                    k = p || T,
                    I = i.useRef(null),
                    D = i.useRef(null),
                    P = i.useRef(y),
                    O = null != g,
                    N = c(g),
                    V = c(d),
                    _ = c(v),
                    q = i.useCallback(() => {
                        if (!I.current || !D.current) return;
                        let t = { placement: e, strategy: n, middleware: b };
                        (V.current && (t.platform = V.current),
                            (0, r.rD)(I.current, D.current, t).then((t) => {
                                let e = { ...t, isPositioned: !1 !== _.current };
                                j.current &&
                                    !u(P.current, e) &&
                                    ((P.current = e),
                                    o.flushSync(() => {
                                        w(e);
                                    }));
                            }));
                    }, [b, e, n, V, _]);
                l(() => {
                    !1 === v && P.current.isPositioned && ((P.current.isPositioned = !1), w((t) => ({ ...t, isPositioned: !1 })));
                }, [v]);
                let j = i.useRef(!1);
                (l(
                    () => (
                        (j.current = !0),
                        () => {
                            j.current = !1;
                        }
                    ),
                    [],
                ),
                    l(() => {
                        if ((C && (I.current = C), k && (D.current = k), C && k)) {
                            if (N.current) return N.current(C, k, q);
                            q();
                        }
                    }, [C, k, q, N, O]));
                let z = i.useMemo(() => ({ reference: I, floating: D, setReference: A, setFloating: L }), [A, L]),
                    B = i.useMemo(() => ({ reference: C, floating: k }), [C, k]),
                    F = i.useMemo(() => {
                        let t = { position: n, left: 0, top: 0 };
                        if (!B.floating) return t;
                        let e = f(B.floating, y.x),
                            r = f(B.floating, y.y);
                        return m
                            ? { ...t, transform: 'translate(' + e + 'px, ' + r + 'px)', ...(a(B.floating) >= 1.5 && { willChange: 'transform' }) }
                            : { position: n, left: e, top: r };
                    }, [n, m, B.floating, y.x, y.y]);
                return i.useMemo(() => ({ ...y, update: q, refs: z, elements: B, floatingStyles: F }), [y, q, z, B, F]);
            }
            let d = (t, e) => {
                    let n = (0, r.cY)(t);
                    return { name: n.name, fn: n.fn, options: [t, e] };
                },
                h = (t, e) => {
                    let n = (0, r.BN)(t);
                    return { name: n.name, fn: n.fn, options: [t, e] };
                },
                p = (t, e) => ({ fn: (0, r.ER)(t).fn, options: [t, e] }),
                m = (t, e) => {
                    let n = (0, r.UU)(t);
                    return { name: n.name, fn: n.fn, options: [t, e] };
                },
                g = (t, e) => {
                    let n = (0, r.Ej)(t);
                    return { name: n.name, fn: n.fn, options: [t, e] };
                },
                v = (t, e) => {
                    let n = (0, r.RK)(t);
                    return { name: n.name, fn: n.fn, options: [t, e] };
                },
                y = (t, e) => {
                    let n = (0, r.jD)(t);
                    return { name: n.name, fn: n.fn, options: [t, e] };
                },
                w = (t, e) => {
                    let n = (0, r.mG)(t);
                    return { name: n.name, fn: n.fn, options: [t, e] };
                },
                b = (t, e) => {
                    let n = ((t) => ({
                        name: 'arrow',
                        options: t,
                        fn(e) {
                            let { element: n, padding: i } = 'function' == typeof t ? t(e) : t;
                            return n && {}.hasOwnProperty.call(n, 'current')
                                ? null != n.current
                                    ? (0, r.UE)({ element: n.current, padding: i }).fn(e)
                                    : {}
                                : n
                                  ? (0, r.UE)({ element: n, padding: i }).fn(e)
                                  : {};
                        },
                    }))(t);
                    return { name: n.name, fn: n.fn, options: [t, e] };
                };
        },
        58547: (t, e, n) => {
            n.d(e, { AO: () => k, Kr: () => L, nq: () => C });
            var r =
                    'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
                i = 'undefined' == typeof Element,
                o = i ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                l =
                    !i && Element.prototype.getRootNode
                        ? function (t) {
                              var e;
                              return null == t || null == (e = t.getRootNode) ? void 0 : e.call(t);
                          }
                        : function (t) {
                              return null == t ? void 0 : t.ownerDocument;
                          },
                u = function (t, e) {
                    void 0 === e && (e = !0);
                    var n,
                        r = null == t || null == (n = t.getAttribute) ? void 0 : n.call(t, 'inert');
                    return '' === r || 'true' === r || (e && t && u(t.parentNode));
                },
                a = function (t) {
                    var e,
                        n = null == t || null == (e = t.getAttribute) ? void 0 : e.call(t, 'contenteditable');
                    return '' === n || 'true' === n;
                },
                f = function (t, e, n) {
                    if (u(t)) return [];
                    var i = Array.prototype.slice.apply(t.querySelectorAll(r));
                    return (e && o.call(t, r) && i.unshift(t), (i = i.filter(n)));
                },
                c = function (t, e, n) {
                    for (var i = [], l = Array.from(t); l.length;) {
                        var a = l.shift();
                        if (!u(a, !1))
                            if ('SLOT' === a.tagName) {
                                var f = a.assignedElements(),
                                    s = c(f.length ? f : a.children, !0, n);
                                n.flatten ? i.push.apply(i, s) : i.push({ scopeParent: a, candidates: s });
                            } else {
                                o.call(a, r) && n.filter(a) && (e || !t.includes(a)) && i.push(a);
                                var d = a.shadowRoot || ('function' == typeof n.getShadowRoot && n.getShadowRoot(a)),
                                    h = !u(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
                                if (d && h) {
                                    var p = c(!0 === d ? a.children : d.children, !0, n);
                                    n.flatten ? i.push.apply(i, p) : i.push({ scopeParent: a, candidates: p });
                                } else l.unshift.apply(l, a.children);
                            }
                    }
                    return i;
                },
                s = function (t) {
                    return !isNaN(parseInt(t.getAttribute('tabindex'), 10));
                },
                d = function (t) {
                    if (!t) throw Error('No node provided');
                    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || a(t)) && !s(t) ? 0 : t.tabIndex;
                },
                h = function (t, e) {
                    var n = d(t);
                    return n < 0 && e && !s(t) ? 0 : n;
                },
                p = function (t, e) {
                    return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
                },
                m = function (t) {
                    return 'INPUT' === t.tagName;
                },
                g = function (t, e) {
                    for (var n = 0; n < t.length; n++) if (t[n].checked && t[n].form === e) return t[n];
                },
                v = function (t) {
                    if (!t.name) return !0;
                    var e,
                        n = t.form || l(t),
                        r = function (t) {
                            return n.querySelectorAll('input[type="radio"][name="' + t + '"]');
                        };
                    if ('undefined' != typeof window && void 0 !== window.CSS && 'function' == typeof window.CSS.escape) e = r(window.CSS.escape(t.name));
                    else
                        try {
                            e = r(t.name);
                        } catch (t) {
                            return (
                                console.error(
                                    'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
                                    t.message,
                                ),
                                !1
                            );
                        }
                    var i = g(e, t.form);
                    return !i || i === t;
                },
                y = function (t) {
                    return m(t) && 'radio' === t.type && !v(t);
                },
                w = function (t) {
                    var e,
                        n,
                        r,
                        i,
                        o,
                        u,
                        a,
                        f = t && l(t),
                        c = null == (e = f) ? void 0 : e.host,
                        s = !1;
                    if (f && f !== t)
                        for (
                            s = !!((null != (n = c) && null != (r = n.ownerDocument) && r.contains(c)) || (null != t && null != (i = t.ownerDocument) && i.contains(t)));
                            !s && c;
                        )
                            s = !!(null != (u = c = null == (o = f = l(c)) ? void 0 : o.host) && null != (a = u.ownerDocument) && a.contains(c));
                    return s;
                },
                b = function (t) {
                    var e = t.getBoundingClientRect(),
                        n = e.width,
                        r = e.height;
                    return 0 === n && 0 === r;
                },
                x = function (t, e) {
                    var n = e.displayCheck,
                        r = e.getShadowRoot;
                    if ('full-native' === n && 'checkVisibility' in t)
                        return !t.checkVisibility({ checkOpacity: !1, opacityProperty: !1, contentVisibilityAuto: !0, visibilityProperty: !0, checkVisibilityCSS: !0 });
                    if ('hidden' === getComputedStyle(t).visibility) return !0;
                    var i = o.call(t, 'details>summary:first-of-type') ? t.parentElement : t;
                    if (o.call(i, 'details:not([open]) *')) return !0;
                    if (n && 'full' !== n && 'full-native' !== n && 'legacy-full' !== n) {
                        if ('non-zero-area' === n) return b(t);
                    } else {
                        if ('function' == typeof r) {
                            for (var u = t; t;) {
                                var a = t.parentElement,
                                    f = l(t);
                                if (a && !a.shadowRoot && !0 === r(a)) return b(t);
                                t = t.assignedSlot ? t.assignedSlot : a || f === t.ownerDocument ? a : f.host;
                            }
                            t = u;
                        }
                        if (w(t)) return !t.getClientRects().length;
                        if ('legacy-full' !== n) return !0;
                    }
                    return !1;
                },
                R = function (t) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
                        for (var e = t.parentElement; e;) {
                            if ('FIELDSET' === e.tagName && e.disabled) {
                                for (var n = 0; n < e.children.length; n++) {
                                    var r = e.children.item(n);
                                    if ('LEGEND' === r.tagName) return !!o.call(e, 'fieldset[disabled] *') || !r.contains(t);
                                }
                                return !0;
                            }
                            e = e.parentElement;
                        }
                    return !1;
                },
                E = function (t, e) {
                    return !(
                        e.disabled ||
                        u(e) ||
                        (m(e) && 'hidden' === e.type) ||
                        x(e, t) ||
                        ('DETAILS' === e.tagName &&
                            Array.prototype.slice.apply(e.children).some(function (t) {
                                return 'SUMMARY' === t.tagName;
                            })) ||
                        R(e)
                    );
                },
                T = function (t, e) {
                    return !(y(e) || 0 > d(e)) && !!E(t, e);
                },
                S = function (t) {
                    var e = parseInt(t.getAttribute('tabindex'), 10);
                    return !!isNaN(e) || !!(e >= 0);
                },
                A = function (t) {
                    var e = [],
                        n = [];
                    return (
                        t.forEach(function (t, r) {
                            var i = !!t.scopeParent,
                                o = i ? t.scopeParent : t,
                                l = h(o, i),
                                u = i ? A(t.candidates) : o;
                            0 === l ? (i ? e.push.apply(e, u) : e.push(o)) : n.push({ documentOrder: r, tabIndex: l, item: t, isScope: i, content: u });
                        }),
                        n
                            .sort(p)
                            .reduce(function (t, e) {
                                return (e.isScope ? t.push.apply(t, e.content) : t.push(e.content), t);
                            }, [])
                            .concat(e)
                    );
                },
                L = function (t, e) {
                    return A(
                        (e = e || {}).getShadowRoot
                            ? c([t], e.includeContainer, { filter: T.bind(null, e), flatten: !1, getShadowRoot: e.getShadowRoot, shadowRootFilter: S })
                            : f(t, e.includeContainer, T.bind(null, e)),
                    );
                },
                C = function (t, e) {
                    return (e = e || {}).getShadowRoot
                        ? c([t], e.includeContainer, { filter: E.bind(null, e), flatten: !0, getShadowRoot: e.getShadowRoot })
                        : f(t, e.includeContainer, E.bind(null, e));
                },
                k = function (t, e) {
                    if (((e = e || {}), !t)) throw Error('No node provided');
                    return !1 !== o.call(t, r) && T(e, t);
                };
        },
        77799: (t, e, n) => {
            n.d(e, {
                UE: () => _,
                RK: () => D,
                ll: () => C,
                rD: () => z,
                __: () => k,
                UU: () => O,
                jD: () => V,
                mG: () => q,
                ER: () => j,
                cY: () => I,
                iD: () => A,
                BN: () => P,
                Ej: () => N,
            });
            var r = n(81011);
            function i(t, e, n) {
                let i,
                    { reference: o, floating: l } = t,
                    u = (0, r.TV)(e),
                    a = (0, r.Dz)(e),
                    f = (0, r.sq)(a),
                    c = (0, r.C0)(e),
                    s = o.x + o.width / 2 - l.width / 2,
                    d = o.y + o.height / 2 - l.height / 2,
                    h = o[f] / 2 - l[f] / 2;
                switch (c) {
                    case 'top':
                        i = { x: s, y: o.y - l.height };
                        break;
                    case 'bottom':
                        i = { x: s, y: o.y + o.height };
                        break;
                    case 'right':
                        i = { x: o.x + o.width, y: d };
                        break;
                    case 'left':
                        i = { x: o.x - l.width, y: d };
                        break;
                    default:
                        i = { x: o.x, y: o.y };
                }
                let p = (0, r.Sg)(e);
                return (p && (i[a] += h * ('end' === p ? 1 : -1) * (n && 'y' === u ? -1 : 1)), i);
            }
            async function o(t, e) {
                var n;
                void 0 === e && (e = {});
                let { x: i, y: o, platform: l, rects: u, elements: a, strategy: f } = t,
                    {
                        boundary: c = 'clippingAncestors',
                        rootBoundary: s = 'viewport',
                        elementContext: d = 'floating',
                        altBoundary: h = !1,
                        padding: p = 0,
                    } = (0, r._3)(e, t),
                    m = (0, r.nI)(p),
                    g = a[h ? ('floating' === d ? 'reference' : 'floating') : d],
                    v = (0, r.B1)(
                        await l.getClippingRect({
                            element:
                                null == (n = await (null == l.isElement ? void 0 : l.isElement(g))) || n
                                    ? g
                                    : g.contextElement || (await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(a.floating))),
                            boundary: c,
                            rootBoundary: s,
                            strategy: f,
                        }),
                    ),
                    y = 'floating' === d ? { x: i, y: o, width: u.floating.width, height: u.floating.height } : u.reference,
                    w = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a.floating)),
                    b = ((await (null == l.isElement ? void 0 : l.isElement(w))) && (await (null == l.getScale ? void 0 : l.getScale(w)))) || { x: 1, y: 1 },
                    x = (0, r.B1)(
                        l.convertOffsetParentRelativeRectToViewportRelativeRect
                            ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a, rect: y, offsetParent: w, strategy: f })
                            : y,
                    );
                return {
                    top: (v.top - x.top + m.top) / b.y,
                    bottom: (x.bottom - v.bottom + m.bottom) / b.y,
                    left: (v.left - x.left + m.left) / b.x,
                    right: (x.right - v.right + m.right) / b.x,
                };
            }
            let l = async (t, e, n) => {
                let { placement: r = 'bottom', strategy: l = 'absolute', middleware: u = [], platform: a } = n,
                    f = a.detectOverflow ? a : { ...a, detectOverflow: o },
                    c = await (null == a.isRTL ? void 0 : a.isRTL(e)),
                    s = await a.getElementRects({ reference: t, floating: e, strategy: l }),
                    { x: d, y: h } = i(s, r, c),
                    p = r,
                    m = 0,
                    g = {};
                for (let n = 0; n < u.length; n++) {
                    let o = u[n];
                    if (!o) continue;
                    let { name: v, fn: y } = o,
                        {
                            x: w,
                            y: b,
                            data: x,
                            reset: R,
                        } = await y({
                            x: d,
                            y: h,
                            initialPlacement: r,
                            placement: p,
                            strategy: l,
                            middlewareData: g,
                            rects: s,
                            platform: f,
                            elements: { reference: t, floating: e },
                        });
                    ((d = null != w ? w : d),
                        (h = null != b ? b : h),
                        (g[v] = { ...g[v], ...x }),
                        R &&
                            m < 50 &&
                            (m++,
                            'object' == typeof R &&
                                (R.placement && (p = R.placement),
                                R.rects && (s = !0 === R.rects ? await a.getElementRects({ reference: t, floating: e, strategy: l }) : R.rects),
                                ({ x: d, y: h } = i(s, p, c))),
                            (n = -1)));
                }
                return { x: d, y: h, placement: p, strategy: l, middlewareData: g };
            };
            function u(t, e) {
                return { top: t.top - e.height, right: t.right - e.width, bottom: t.bottom - e.height, left: t.left - e.width };
            }
            function a(t) {
                return r.r_.some((e) => t[e] >= 0);
            }
            function f(t) {
                let e = (0, r.jk)(...t.map((t) => t.left)),
                    n = (0, r.jk)(...t.map((t) => t.top));
                return { x: e, y: n, width: (0, r.T9)(...t.map((t) => t.right)) - e, height: (0, r.T9)(...t.map((t) => t.bottom)) - n };
            }
            let c = new Set(['left', 'top']);
            async function s(t, e) {
                let { placement: n, platform: i, elements: o } = t,
                    l = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)),
                    u = (0, r.C0)(n),
                    a = (0, r.Sg)(n),
                    f = 'y' === (0, r.TV)(n),
                    s = c.has(u) ? -1 : 1,
                    d = l && f ? -1 : 1,
                    h = (0, r._3)(e, t),
                    {
                        mainAxis: p,
                        crossAxis: m,
                        alignmentAxis: g,
                    } = 'number' == typeof h
                        ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
                        : { mainAxis: h.mainAxis || 0, crossAxis: h.crossAxis || 0, alignmentAxis: h.alignmentAxis };
                return (a && 'number' == typeof g && (m = 'end' === a ? -1 * g : g), f ? { x: m * d, y: p * s } : { x: p * s, y: m * d });
            }
            var d = n(25649);
            function h(t) {
                let e = (0, d.L9)(t),
                    n = parseFloat(e.width) || 0,
                    i = parseFloat(e.height) || 0,
                    o = (0, d.sb)(t),
                    l = o ? t.offsetWidth : n,
                    u = o ? t.offsetHeight : i,
                    a = (0, r.LI)(n) !== l || (0, r.LI)(i) !== u;
                return (a && ((n = l), (i = u)), { width: n, height: i, $: a });
            }
            function p(t) {
                return (0, d.vq)(t) ? t : t.contextElement;
            }
            function m(t) {
                let e = p(t);
                if (!(0, d.sb)(e)) return (0, r.Jx)(1);
                let n = e.getBoundingClientRect(),
                    { width: i, height: o, $: l } = h(e),
                    u = (l ? (0, r.LI)(n.width) : n.width) / i,
                    a = (l ? (0, r.LI)(n.height) : n.height) / o;
                return ((u && Number.isFinite(u)) || (u = 1), (a && Number.isFinite(a)) || (a = 1), { x: u, y: a });
            }
            let g = (0, r.Jx)(0);
            function v(t) {
                let e = (0, d.zk)(t);
                return (0, d.Tc)() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : g;
            }
            function y(t, e, n, i) {
                var o;
                (void 0 === e && (e = !1), void 0 === n && (n = !1));
                let l = t.getBoundingClientRect(),
                    u = p(t),
                    a = (0, r.Jx)(1);
                e && (i ? (0, d.vq)(i) && (a = m(i)) : (a = m(t)));
                let f = (void 0 === (o = n) && (o = !1), i && o && i === (0, d.zk)(u)) ? v(u) : (0, r.Jx)(0),
                    c = (l.left + f.x) / a.x,
                    s = (l.top + f.y) / a.y,
                    h = l.width / a.x,
                    g = l.height / a.y;
                if (u && i) {
                    let t = (0, d.zk)(u),
                        e = (0, d.vq)(i) ? (0, d.zk)(i) : i,
                        n = t,
                        r = (0, d._m)(n);
                    for (; r && e !== n;) {
                        let t = m(r),
                            e = r.getBoundingClientRect(),
                            i = (0, d.L9)(r),
                            o = e.left + (r.clientLeft + parseFloat(i.paddingLeft)) * t.x,
                            l = e.top + (r.clientTop + parseFloat(i.paddingTop)) * t.y;
                        ((c *= t.x), (s *= t.y), (h *= t.x), (g *= t.y), (c += o), (s += l), (n = (0, d.zk)(r)), (r = (0, d._m)(n)));
                    }
                }
                return (0, r.B1)({ width: h, height: g, x: c, y: s });
            }
            function w(t, e) {
                let n = (0, d.CP)(t).scrollLeft;
                return e ? e.left + n : y((0, d.ep)(t)).left + n;
            }
            function b(t, e) {
                let n = t.getBoundingClientRect();
                return { x: n.left + e.scrollLeft - w(t, n), y: n.top + e.scrollTop };
            }
            function x(t, e, n) {
                let i;
                if ('viewport' === e || 'layoutViewport' === e)
                    i = (function (t, e, n) {
                        void 0 === n && (n = 'viewport');
                        let r = 'layoutViewport' === n,
                            i = (0, d.zk)(t),
                            o = (0, d.ep)(t),
                            l = i.visualViewport,
                            u = o.clientWidth,
                            a = o.clientHeight,
                            f = 0,
                            c = 0;
                        if (l) {
                            let t = !(0, d.Tc)() || 'fixed' === e;
                            r ? t || ((f = -l.offsetLeft), (c = -l.offsetTop)) : ((u = l.width), (a = l.height), t && ((f = l.offsetLeft), (c = l.offsetTop)));
                        }
                        if (0 >= w(o)) {
                            let t = o.ownerDocument,
                                e = t.body,
                                n = getComputedStyle(e),
                                r = ('CSS1Compat' === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) || 0,
                                i = Math.abs(o.clientWidth - e.clientWidth - r),
                                l = 'stable both-edges' === getComputedStyle(o).scrollbarGutter ? i / 2 : i;
                            l <= 25 && (u -= l);
                        }
                        return { width: u, height: a, x: f, y: c };
                    })(t, n, e);
                else if ('document' === e)
                    i = (function (t) {
                        let e = (0, d.CP)(t),
                            n = t.ownerDocument.body,
                            i = (0, r.T9)(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                            o = (0, r.T9)(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
                            l = -e.scrollLeft + w(t),
                            u = -e.scrollTop;
                        return ('rtl' === (0, d.L9)(n).direction && (l += (0, r.T9)(t.clientWidth, n.clientWidth) - i), { width: i, height: o, x: l, y: u });
                    })((0, d.ep)(t));
                else if ((0, d.vq)(e))
                    i = (function (t, e) {
                        let n = y(t, !0, 'fixed' === e),
                            r = n.top + t.clientTop,
                            i = n.left + t.clientLeft,
                            o = m(t),
                            l = t.clientWidth * o.x,
                            u = t.clientHeight * o.y;
                        return { width: l, height: u, x: i * o.x, y: r * o.y };
                    })(e, n);
                else {
                    let n = v(t);
                    i = { x: e.x - n.x, y: e.y - n.y, width: e.width, height: e.height };
                }
                return (0, r.B1)(i);
            }
            function R(t) {
                return 'static' === (0, d.L9)(t).position;
            }
            function E(t, e) {
                if (!(0, d.sb)(t) || 'fixed' === (0, d.L9)(t).position) return null;
                if (e) return e(t);
                let n = t.offsetParent;
                return ((0, d.ep)(t) === n && (n = n.ownerDocument.body), n);
            }
            function T(t, e) {
                let n = (0, d.zk)(t);
                if ((0, d.Tf)(t)) return n;
                if (!(0, d.sb)(t)) {
                    let e = (0, d.$4)(t);
                    for (; e && !(0, d.eu)(e);) {
                        if ((0, d.vq)(e) && !R(e)) return e;
                        e = (0, d.$4)(e);
                    }
                    return n;
                }
                let r = E(t, e);
                for (; r && (0, d.Lv)(r) && R(r);) r = E(r, e);
                return r && (0, d.eu)(r) && R(r) && !(0, d.sQ)(r) ? n : r || (0, d.gJ)(t) || n;
            }
            let S = async function (t) {
                    let e = this.getOffsetParent || T,
                        n = this.getDimensions,
                        i = await n(t.floating);
                    return {
                        reference: (function (t, e, n) {
                            let i = (0, d.sb)(e),
                                o = (0, d.ep)(e),
                                l = 'fixed' === n,
                                u = y(t, !0, l, e),
                                a = { scrollLeft: 0, scrollTop: 0 },
                                f = (0, r.Jx)(0);
                            if ((i || !l) && (('body' !== (0, d.mq)(e) || (0, d.ZU)(o)) && (a = (0, d.CP)(e)), i)) {
                                let t = y(e, !0, l, e);
                                ((f.x = t.x + e.clientLeft), (f.y = t.y + e.clientTop));
                            }
                            !i && o && (f.x = w(o));
                            let c = !o || i || l ? (0, r.Jx)(0) : b(o, a);
                            return { x: u.left + a.scrollLeft - f.x - c.x, y: u.top + a.scrollTop - f.y - c.y, width: u.width, height: u.height };
                        })(t.reference, await e(t.floating), t.strategy),
                        floating: { x: 0, y: 0, width: i.width, height: i.height },
                    };
                },
                A = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
                        let { elements: e, rect: n, offsetParent: i, strategy: o } = t,
                            l = 'fixed' === o,
                            u = (0, d.ep)(i),
                            a = !!e && (0, d.Tf)(e.floating);
                        if (i === u || (a && l)) return n;
                        let f = { scrollLeft: 0, scrollTop: 0 },
                            c = (0, r.Jx)(1),
                            s = (0, r.Jx)(0),
                            h = (0, d.sb)(i);
                        if ((h || !l) && (('body' !== (0, d.mq)(i) || (0, d.ZU)(u)) && (f = (0, d.CP)(i)), h)) {
                            let t = y(i);
                            ((c = m(i)), (s.x = t.x + i.clientLeft), (s.y = t.y + i.clientTop));
                        }
                        let p = !u || h || l ? (0, r.Jx)(0) : b(u, f);
                        return {
                            width: n.width * c.x,
                            height: n.height * c.y,
                            x: n.x * c.x - f.scrollLeft * c.x + s.x + p.x,
                            y: n.y * c.y - f.scrollTop * c.y + s.y + p.y,
                        };
                    },
                    getDocumentElement: d.ep,
                    getClippingRect: function (t) {
                        let { element: e, boundary: n, rootBoundary: i, strategy: o } = t,
                            l = [
                                ...('clippingAncestors' === n
                                    ? (0, d.Tf)(e)
                                        ? []
                                        : (function (t, e) {
                                              let n = e.get(t);
                                              if (n) return n;
                                              let r = (0, d.v9)(t, [], !1).filter((t) => (0, d.vq)(t) && 'body' !== (0, d.mq)(t)),
                                                  i = null,
                                                  o = 'fixed' === (0, d.L9)(t).position,
                                                  l = o ? (0, d.$4)(t) : t;
                                              for (; (0, d.vq)(l) && !(0, d.eu)(l);) {
                                                  let t = (0, d.L9)(l),
                                                      e = (0, d.sQ)(l),
                                                      n = i ? i.position : o ? 'fixed' : '';
                                                  (e || ('fixed' !== n && ('absolute' !== n || 'static' !== t.position)) ? (i = t) : (r = r.filter((t) => t !== l)),
                                                      (l = (0, d.$4)(l)));
                                              }
                                              return (e.set(t, r), r);
                                          })(e, this._c)
                                    : [].concat(n)),
                                i,
                            ],
                            u = x(e, l[0], o),
                            a = u.top,
                            f = u.right,
                            c = u.bottom,
                            s = u.left;
                        for (let t = 1; t < l.length; t++) {
                            let n = x(e, l[t], o);
                            ((a = (0, r.T9)(n.top, a)), (f = (0, r.jk)(n.right, f)), (c = (0, r.jk)(n.bottom, c)), (s = (0, r.T9)(n.left, s)));
                        }
                        return { width: f - s, height: c - a, x: s, y: a };
                    },
                    getOffsetParent: T,
                    getElementRects: S,
                    getClientRects: function (t) {
                        return t.getClientRects ? Array.from(t.getClientRects()) : [];
                    },
                    getDimensions: function (t) {
                        let { width: e, height: n } = h(t);
                        return { width: e, height: n };
                    },
                    getScale: m,
                    isElement: d.vq,
                    isRTL: function (t) {
                        return 'rtl' === (0, d.L9)(t).direction;
                    },
                };
            function L(t, e) {
                return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
            }
            function C(t, e, n, i) {
                let o;
                void 0 === i && (i = {});
                let {
                        ancestorScroll: l = !0,
                        ancestorResize: u = !0,
                        elementResize: a = 'function' == typeof ResizeObserver,
                        layoutShift: f = 'function' == typeof IntersectionObserver,
                        animationFrame: c = !1,
                    } = i,
                    s = p(t),
                    h = l || u ? [...(s ? (0, d.v9)(s) : []), ...(e ? (0, d.v9)(e) : [])] : [];
                h.forEach((t) => {
                    (l && t.addEventListener('scroll', n), u && t.addEventListener('resize', n));
                });
                let m =
                        s && f
                            ? (function (t, e, n) {
                                  let i,
                                      o = null,
                                      l = (0, d.ep)(t);
                                  function u() {
                                      var t;
                                      (clearTimeout(i), null == (t = o) || t.disconnect(), (o = null));
                                  }
                                  function a(n, f) {
                                      (void 0 === n && (n = !1), void 0 === f && (f = 1), u());
                                      let c = t.getBoundingClientRect(),
                                          { left: s, top: d, width: h, height: p } = c;
                                      if ((n || e(), !h || !p)) return;
                                      let m = (0, r.RI)(d),
                                          g = (0, r.RI)(l.clientWidth - (s + h)),
                                          v = {
                                              rootMargin: -m + 'px ' + -g + 'px ' + -(0, r.RI)(l.clientHeight - (d + p)) + 'px ' + -(0, r.RI)(s) + 'px',
                                              threshold: (0, r.T9)(0, (0, r.jk)(1, f)) || 1,
                                          },
                                          y = !0;
                                      function w(e) {
                                          let n = e[0].intersectionRatio;
                                          if (!L(c, t.getBoundingClientRect())) return a();
                                          if (n !== f) {
                                              if (!y) return a();
                                              n
                                                  ? a(!1, n)
                                                  : (i = setTimeout(() => {
                                                        a(!1, 1e-7);
                                                    }, 1e3));
                                          }
                                          y = !1;
                                      }
                                      try {
                                          o = new IntersectionObserver(w, { ...v, root: l.ownerDocument });
                                      } catch (t) {
                                          o = new IntersectionObserver(w, v);
                                      }
                                      o.observe(t);
                                  }
                                  let f = (0, d.zk)(t),
                                      c = () => a(n);
                                  return (
                                      f.addEventListener('resize', c),
                                      a(!0),
                                      () => {
                                          (f.removeEventListener('resize', c), u());
                                      }
                                  );
                              })(s, n, u)
                            : null,
                    g = -1,
                    v = null;
                a &&
                    ((v = new ResizeObserver((t) => {
                        let [r] = t;
                        (r &&
                            r.target === s &&
                            v &&
                            e &&
                            (v.unobserve(e),
                            cancelAnimationFrame(g),
                            (g = requestAnimationFrame(() => {
                                var t;
                                null == (t = v) || t.observe(e);
                            }))),
                            n());
                    })),
                    s && !c && v.observe(s),
                    e && v.observe(e));
                let w = c ? y(t) : null;
                return (
                    c &&
                        (function e() {
                            let r = y(t);
                            (w && !L(w, r) && n(), (w = r), (o = requestAnimationFrame(e)));
                        })(),
                    n(),
                    () => {
                        var t;
                        (h.forEach((t) => {
                            (l && t.removeEventListener('scroll', n), u && t.removeEventListener('resize', n));
                        }),
                            null == m || m(),
                            null == (t = v) || t.disconnect(),
                            (v = null),
                            c && cancelAnimationFrame(o));
                    }
                );
            }
            let k = o,
                I = function (t) {
                    return (
                        void 0 === t && (t = 0),
                        {
                            name: 'offset',
                            options: t,
                            async fn(e) {
                                var n, r;
                                let { x: i, y: o, placement: l, middlewareData: u } = e,
                                    a = await s(e, t);
                                return l === (null == (n = u.offset) ? void 0 : n.placement) && null != (r = u.arrow) && r.alignmentOffset
                                    ? {}
                                    : { x: i + a.x, y: o + a.y, data: { ...a, placement: l } };
                            },
                        }
                    );
                },
                D = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: 'autoPlacement',
                            options: t,
                            async fn(e) {
                                var n, i, o, l;
                                let { rects: u, middlewareData: a, placement: f, platform: c, elements: s } = e,
                                    { crossAxis: d = !1, alignment: h, allowedPlacements: p = r.DD, autoAlignment: m = !0, ...g } = (0, r._3)(t, e),
                                    v =
                                        void 0 !== h || p === r.DD
                                            ? ((l = h || null)
                                                  ? [...p.filter((t) => (0, r.Sg)(t) === l), ...p.filter((t) => (0, r.Sg)(t) !== l)]
                                                  : p.filter((t) => (0, r.C0)(t) === t)
                                              ).filter((t) => !l || (0, r.Sg)(t) === l || (!!m && (0, r.aD)(t) !== t))
                                            : p,
                                    y = (null == (n = a.autoPlacement) ? void 0 : n.index) || 0,
                                    w = v[y];
                                if (null == w) return {};
                                if (f !== w) return { reset: { placement: v[0] } };
                                let b = await c.detectOverflow(e, g),
                                    x = (0, r.w7)(w, u, await (null == c.isRTL ? void 0 : c.isRTL(s.floating))),
                                    R = [b[(0, r.C0)(w)], b[x[0]], b[x[1]]],
                                    E = [...((null == (i = a.autoPlacement) ? void 0 : i.overflows) || []), { placement: w, overflows: R }],
                                    T = v[y + 1];
                                if (T) return { data: { index: y + 1, overflows: E }, reset: { placement: T } };
                                let S = E.map((t) => {
                                        let e = (0, r.Sg)(t.placement);
                                        return [t.placement, e && d ? t.overflows.slice(0, 2).reduce((t, e) => t + e, 0) : t.overflows[0], t.overflows];
                                    }).sort((t, e) => t[1] - e[1]),
                                    A = (null == (o = S.filter((t) => t[2].slice(0, (0, r.Sg)(t[0]) ? 2 : 3).every((t) => t <= 0))[0]) ? void 0 : o[0]) || S[0][0];
                                return A !== f ? { data: { index: y + 1, overflows: E }, reset: { placement: A } } : {};
                            },
                        }
                    );
                },
                P = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: 'shift',
                            options: t,
                            async fn(e) {
                                let { x: n, y: i, placement: o, platform: l } = e,
                                    {
                                        mainAxis: u = !0,
                                        crossAxis: a = !1,
                                        limiter: f = {
                                            fn: (t) => {
                                                let { x: e, y: n } = t;
                                                return { x: e, y: n };
                                            },
                                        },
                                        ...c
                                    } = (0, r._3)(t, e),
                                    s = { x: n, y: i },
                                    d = await l.detectOverflow(e, c),
                                    h = (0, r.TV)(o),
                                    p = (0, r.PG)(h),
                                    m = s[p],
                                    g = s[h],
                                    v = (t, e) => (0, r.qE)(e + d['y' === t ? 'top' : 'left'], e, e - d['y' === t ? 'bottom' : 'right']);
                                (u && (m = v(p, m)), a && (g = v(h, g)));
                                let y = f.fn({ ...e, [p]: m, [h]: g });
                                return { ...y, data: { x: y.x - n, y: y.y - i, enabled: { [p]: u, [h]: a } } };
                            },
                        }
                    );
                },
                O = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: 'flip',
                            options: t,
                            async fn(e) {
                                var n, i, o, l, u;
                                let { placement: a, middlewareData: f, rects: c, initialPlacement: s, platform: d, elements: h } = e,
                                    {
                                        mainAxis: p = !0,
                                        crossAxis: m = !0,
                                        fallbackPlacements: g,
                                        fallbackStrategy: v = 'bestFit',
                                        fallbackAxisSideDirection: y = 'none',
                                        flipAlignment: w = !0,
                                        ...b
                                    } = (0, r._3)(t, e);
                                if (null != (n = f.arrow) && n.alignmentOffset) return {};
                                let x = (0, r.C0)(a),
                                    R = (0, r.TV)(s),
                                    E = (0, r.C0)(s) === s,
                                    T = await (null == d.isRTL ? void 0 : d.isRTL(h.floating)),
                                    S = g || (E || !w ? [(0, r.bV)(s)] : (0, r.WJ)(s)),
                                    A = 'none' !== y;
                                !g && A && S.push(...(0, r.lP)(s, w, y, T));
                                let L = [s, ...S],
                                    C = await d.detectOverflow(e, b),
                                    k = [],
                                    I = (null == (i = f.flip) ? void 0 : i.overflows) || [];
                                if ((p && k.push(C[x]), m)) {
                                    let t = (0, r.w7)(a, c, T);
                                    k.push(C[t[0]], C[t[1]]);
                                }
                                if (((I = [...I, { placement: a, overflows: k }]), !k.every((t) => t <= 0))) {
                                    let t = ((null == (o = f.flip) ? void 0 : o.index) || 0) + 1,
                                        e = L[t];
                                    if (e && ('alignment' !== m || R === (0, r.TV)(e) || I.every((t) => (0, r.TV)(t.placement) !== R || t.overflows[0] > 0)))
                                        return { data: { index: t, overflows: I }, reset: { placement: e } };
                                    let n = null == (l = I.filter((t) => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : l.placement;
                                    if (!n)
                                        switch (v) {
                                            case 'bestFit': {
                                                let t =
                                                    null ==
                                                    (u = I.filter((t) => {
                                                        if (A) {
                                                            let e = (0, r.TV)(t.placement);
                                                            return e === R || 'y' === e;
                                                        }
                                                        return !0;
                                                    })
                                                        .map((t) => [t.placement, t.overflows.filter((t) => t > 0).reduce((t, e) => t + e, 0)])
                                                        .sort((t, e) => t[1] - e[1])[0])
                                                        ? void 0
                                                        : u[0];
                                                t && (n = t);
                                                break;
                                            }
                                            case 'initialPlacement':
                                                n = s;
                                        }
                                    if (a !== n) return { reset: { placement: n } };
                                }
                                return {};
                            },
                        }
                    );
                },
                N = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: 'size',
                            options: t,
                            async fn(e) {
                                let n,
                                    i,
                                    { placement: o, rects: l, platform: u, elements: a } = e,
                                    { apply: f = () => {}, ...c } = (0, r._3)(t, e),
                                    s = await u.detectOverflow(e, c),
                                    d = (0, r.C0)(o),
                                    h = (0, r.Sg)(o),
                                    p = 'y' === (0, r.TV)(o),
                                    { width: m, height: g } = l.floating;
                                'top' === d || 'bottom' === d
                                    ? ((n = d), (i = h === ((await (null == u.isRTL ? void 0 : u.isRTL(a.floating))) ? 'start' : 'end') ? 'left' : 'right'))
                                    : ((i = d), (n = 'end' === h ? 'top' : 'bottom'));
                                let v = g - s.top - s.bottom,
                                    y = m - s.left - s.right,
                                    w = (0, r.jk)(g - s[n], v),
                                    b = (0, r.jk)(m - s[i], y),
                                    x = e.middlewareData.shift,
                                    R = !x,
                                    E = w,
                                    T = b;
                                (null != x && x.enabled.x && (T = y),
                                    null != x && x.enabled.y && (E = v),
                                    R && !h && (p ? (T = m - 2 * (0, r.T9)(s.left, s.right)) : (E = g - 2 * (0, r.T9)(s.top, s.bottom))),
                                    await f({ ...e, availableWidth: T, availableHeight: E }));
                                let S = await u.getDimensions(a.floating);
                                return m !== S.width || g !== S.height ? { reset: { rects: !0 } } : {};
                            },
                        }
                    );
                },
                V = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: 'hide',
                            options: t,
                            async fn(e) {
                                let { rects: n, platform: i } = e,
                                    { strategy: o = 'referenceHidden', ...l } = (0, r._3)(t, e);
                                switch (o) {
                                    case 'referenceHidden': {
                                        let t = u(await i.detectOverflow(e, { ...l, elementContext: 'reference' }), n.reference);
                                        return { data: { referenceHiddenOffsets: t, referenceHidden: a(t) } };
                                    }
                                    case 'escaped': {
                                        let t = u(await i.detectOverflow(e, { ...l, altBoundary: !0 }), n.floating);
                                        return { data: { escapedOffsets: t, escaped: a(t) } };
                                    }
                                    default:
                                        return {};
                                }
                            },
                        }
                    );
                },
                _ = (t) => ({
                    name: 'arrow',
                    options: t,
                    async fn(e) {
                        let { x: n, y: i, placement: o, rects: l, platform: u, elements: a, middlewareData: f } = e,
                            { element: c, padding: s = 0 } = (0, r._3)(t, e) || {};
                        if (null == c) return {};
                        let d = (0, r.nI)(s),
                            h = { x: n, y: i },
                            p = (0, r.Dz)(o),
                            m = (0, r.sq)(p),
                            g = await u.getDimensions(c),
                            v = 'y' === p,
                            y = v ? 'clientHeight' : 'clientWidth',
                            w = l.reference[m] + l.reference[p] - h[p] - l.floating[m],
                            b = h[p] - l.reference[p],
                            x = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(c)),
                            R = x ? x[y] : 0;
                        (R && (await (null == u.isElement ? void 0 : u.isElement(x)))) || (R = a.floating[y] || l.floating[m]);
                        let E = R / 2 - g[m] / 2 - 1,
                            T = (0, r.jk)(d[v ? 'top' : 'left'], E),
                            S = (0, r.jk)(d[v ? 'bottom' : 'right'], E),
                            A = R - g[m] - S,
                            L = R / 2 - g[m] / 2 + (w / 2 - b / 2),
                            C = (0, r.qE)(T, L, A),
                            k = !f.arrow && null != (0, r.Sg)(o) && L !== C && l.reference[m] / 2 - (L < T ? T : S) - g[m] / 2 < 0,
                            I = k ? (L < T ? L - T : L - A) : 0;
                        return { [p]: h[p] + I, data: { [p]: C, centerOffset: L - C - I, ...(k && { alignmentOffset: I }) }, reset: k };
                    },
                }),
                q = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            name: 'inline',
                            options: t,
                            async fn(e) {
                                let { placement: n, elements: i, rects: o, platform: l, strategy: u } = e,
                                    { padding: a = 2, x: c, y: s } = (0, r._3)(t, e),
                                    d = Array.from((await (null == l.getClientRects ? void 0 : l.getClientRects(i.reference))) || []);
                                if (!d.length) return {};
                                let h = (function (t) {
                                        let e = t.slice().sort((t, e) => t.y - e.y),
                                            n = [],
                                            i = null;
                                        for (let t = 0; t < e.length; t++) {
                                            let r = e[t];
                                            (!i || r.y - i.y > i.height / 2 ? n.push([r]) : n[n.length - 1].push(r), (i = r));
                                        }
                                        return n.map((t) => (0, r.B1)(f(t)));
                                    })(d),
                                    p = (0, r.B1)(f(d)),
                                    m = (0, r.nI)(a),
                                    g = await l.getElementRects({
                                        reference: {
                                            getBoundingClientRect: function () {
                                                if (2 === h.length && (h[0].left > h[1].right || h[1].left > h[0].right) && null != c && null != s)
                                                    return (
                                                        h.find((t) => c > t.left - m.left && c < t.right + m.right && s > t.top - m.top && s < t.bottom + m.bottom) || p
                                                    );
                                                if (h.length >= 2) {
                                                    if ('y' === (0, r.TV)(n)) {
                                                        let t = h[0],
                                                            e = h[h.length - 1],
                                                            i = 'top' === (0, r.C0)(n),
                                                            o = t.top,
                                                            l = e.bottom,
                                                            u = i ? t.left : e.left,
                                                            a = i ? t.right : e.right;
                                                        return (0, r.B1)({ x: u, y: o, width: a - u, height: l - o });
                                                    }
                                                    let t = 'left' === (0, r.C0)(n),
                                                        e = (0, r.T9)(...h.map((t) => t.right)),
                                                        i = (0, r.jk)(...h.map((t) => t.left)),
                                                        o = h.filter((n) => (t ? n.left === i : n.right === e)),
                                                        l = o[0].top,
                                                        u = o[o.length - 1].bottom;
                                                    return (0, r.B1)({ x: i, y: l, width: e - i, height: u - l });
                                                }
                                                return p;
                                            },
                                        },
                                        floating: i.floating,
                                        strategy: u,
                                    });
                                return o.reference.x !== g.reference.x ||
                                    o.reference.y !== g.reference.y ||
                                    o.reference.width !== g.reference.width ||
                                    o.reference.height !== g.reference.height
                                    ? { reset: { rects: g } }
                                    : {};
                            },
                        }
                    );
                },
                j = function (t) {
                    return (
                        void 0 === t && (t = {}),
                        {
                            options: t,
                            fn(e) {
                                var n, i, o, l;
                                let { x: u, y: a, placement: f, rects: s, middlewareData: d } = e,
                                    { offset: h = 0, mainAxis: p = !0, crossAxis: m = !0 } = (0, r._3)(t, e),
                                    g = { x: u, y: a },
                                    v = (0, r.TV)(f),
                                    y = (0, r.PG)(v),
                                    w = g[y],
                                    b = g[v],
                                    x = (0, r._3)(h, e),
                                    R =
                                        'number' == typeof x
                                            ? { mainAxis: x, crossAxis: 0 }
                                            : { mainAxis: null != (n = x.mainAxis) ? n : 0, crossAxis: null != (i = x.crossAxis) ? i : 0 };
                                if (p) {
                                    let t = 'y' === y ? 'height' : 'width',
                                        e = s.reference[y] - s.floating[t] + R.mainAxis,
                                        n = s.reference[y] + s.reference[t] - R.mainAxis;
                                    w < e ? (w = e) : w > n && (w = n);
                                }
                                if (m) {
                                    let t = 'y' === y ? 'width' : 'height',
                                        e = c.has((0, r.C0)(f)),
                                        n = s.reference[v] - s.floating[t] + ((e && (null == (o = d.offset) ? void 0 : o[v])) || 0) + (e ? 0 : R.crossAxis),
                                        i = s.reference[v] + s.reference[t] + (e ? 0 : (null == (l = d.offset) ? void 0 : l[v]) || 0) - (e ? R.crossAxis : 0);
                                    b < n ? (b = n) : b > i && (b = i);
                                }
                                return { [y]: w, [v]: b };
                            },
                        }
                    );
                },
                z = (t, e, n) => {
                    let r = new Map(),
                        i = null != n ? n : {},
                        o = { ...A, ...i.platform, _c: r };
                    return l(t, e, { ...i, platform: o });
                };
        },
        81011: (t, e, n) => {
            n.d(e, {
                B1: () => k,
                C0: () => h,
                DD: () => i,
                Dz: () => y,
                Jx: () => f,
                LI: () => u,
                PG: () => m,
                RI: () => a,
                Sg: () => p,
                T9: () => l,
                TV: () => v,
                WJ: () => b,
                _3: () => d,
                aD: () => x,
                bV: () => L,
                jk: () => o,
                lP: () => A,
                nI: () => C,
                qE: () => s,
                r_: () => r,
                sq: () => g,
                w7: () => w,
            });
            let r = ['top', 'right', 'bottom', 'left'],
                i = r.reduce((t, e) => t.concat(e, e + '-start', e + '-end'), []),
                o = Math.min,
                l = Math.max,
                u = Math.round,
                a = Math.floor,
                f = (t) => ({ x: t, y: t }),
                c = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
            function s(t, e, n) {
                return l(t, o(e, n));
            }
            function d(t, e) {
                return 'function' == typeof t ? t(e) : t;
            }
            function h(t) {
                return t.split('-')[0];
            }
            function p(t) {
                return t.split('-')[1];
            }
            function m(t) {
                return 'x' === t ? 'y' : 'x';
            }
            function g(t) {
                return 'y' === t ? 'height' : 'width';
            }
            function v(t) {
                let e = t[0];
                return 't' === e || 'b' === e ? 'y' : 'x';
            }
            function y(t) {
                return m(v(t));
            }
            function w(t, e, n) {
                void 0 === n && (n = !1);
                let r = p(t),
                    i = y(t),
                    o = g(i),
                    l = 'x' === i ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : 'start' === r ? 'bottom' : 'top';
                return (e.reference[o] > e.floating[o] && (l = L(l)), [l, L(l)]);
            }
            function b(t) {
                let e = L(t);
                return [x(t), e, x(e)];
            }
            function x(t) {
                return t.includes('start') ? t.replace('start', 'end') : t.replace('end', 'start');
            }
            let R = ['left', 'right'],
                E = ['right', 'left'],
                T = ['top', 'bottom'],
                S = ['bottom', 'top'];
            function A(t, e, n, r) {
                let i = p(t),
                    o = (function (t, e, n) {
                        switch (t) {
                            case 'top':
                            case 'bottom':
                                if (n) return e ? E : R;
                                return e ? R : E;
                            case 'left':
                            case 'right':
                                return e ? T : S;
                            default:
                                return [];
                        }
                    })(h(t), 'start' === n, r);
                return (i && ((o = o.map((t) => t + '-' + i)), e && (o = o.concat(o.map(x)))), o);
            }
            function L(t) {
                let e = h(t);
                return c[e] + t.slice(e.length);
            }
            function C(t) {
                var e, n, r, i;
                return 'number' != typeof t
                    ? {
                          top: null != (e = t.top) ? e : 0,
                          right: null != (n = t.right) ? n : 0,
                          bottom: null != (r = t.bottom) ? r : 0,
                          left: null != (i = t.left) ? i : 0,
                      }
                    : { top: t, right: t, bottom: t, left: t };
            }
            function k(t) {
                let { x: e, y: n, width: r, height: i } = t;
                return { width: r, height: i, top: n, left: e, right: e + r, bottom: n + i, x: e, y: n };
            }
        },
    },
]);
