'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1417],
    {
        31417: (e, t, n) => {
            n.d(t, { sN: () => t1 });
            var o = n(55178),
                r = n(51767);
            function l(e, t) {
                return (n) => e(t(n));
            }
            function i(e, t) {
                return t(e);
            }
            function u(...e) {
                return e;
            }
            function a(e) {
                e();
            }
            function s(e) {
                return void 0 !== e;
            }
            function c() {}
            function d(e, t) {
                e(0, t);
            }
            function f(e) {
                e(2);
            }
            function m(e) {
                return e(4);
            }
            function h(e, t) {
                return e(1, (e) => t(0, e));
            }
            function p(e, t) {
                let n = e(1, (e) => {
                    n(), t(e);
                });
                return n;
            }
            function g() {
                let e = [];
                return (t, n) => {
                    switch (t) {
                        case 2:
                            e.splice(0, e.length);
                            return;
                        case 1:
                            return (
                                e.push(n),
                                () => {
                                    let t = e.indexOf(n);
                                    t > -1 && e.splice(t, 1);
                                }
                            );
                        case 0:
                            e.slice().forEach((e) => {
                                e(n);
                            });
                            return;
                        default:
                            throw Error(`unrecognized action ${t}`);
                    }
                };
            }
            function v(e) {
                let t = e,
                    n = g();
                return (e, o) => {
                    switch (e) {
                        case 1:
                            o(t);
                            break;
                        case 0:
                            t = o;
                            break;
                        case 4:
                            return t;
                    }
                    return n(e, o);
                };
            }
            function x(e) {
                var t;
                return (t = g()), h(e, t), t;
            }
            function T(e, t) {
                var n;
                return (n = v(t)), h(e, n), n;
            }
            function I(e, ...t) {
                let n = (function (...e) {
                    return (t) => e.reduceRight(i, t);
                })(...t);
                return (t, o) => {
                    switch (t) {
                        case 1:
                            return e(1, n(o));
                        case 2:
                            f(e);
                            return;
                    }
                };
            }
            function w(e, t) {
                return e === t;
            }
            function C(e = w) {
                let t;
                return (n) => (o) => {
                    e(t, o) || ((t = o), n(o));
                };
            }
            function E(e) {
                return (t) => (n) => {
                    e(n) && t(n);
                };
            }
            function S(e) {
                return (t) => l(t, e);
            }
            function y(e) {
                return (t) => () => t(e);
            }
            function b(e, t) {
                return (n) => (o) => n((t = e(t, o)));
            }
            function H(e) {
                return (t) => (n) => {
                    e > 0 ? e-- : t(n);
                };
            }
            function z(e) {
                let t,
                    n = null;
                return (o) => (r) => {
                    (n = r),
                        t ||
                            (t = setTimeout(() => {
                                (t = void 0), o(n);
                            }, e));
                };
            }
            function R(e) {
                let t, n;
                return (o) => (r) => {
                    (t = r),
                        n && clearTimeout(n),
                        (n = setTimeout(() => {
                            o(t);
                        }, e));
                };
            }
            function B(...e) {
                let t = Array(e.length),
                    n = 0,
                    o = null,
                    r = Math.pow(2, e.length) - 1;
                return (
                    e.forEach((e, l) => {
                        let i = Math.pow(2, l);
                        e(1, (e) => {
                            let u = n;
                            (n |= i), (t[l] = e), u !== r && n === r && o && (o(), (o = null));
                        });
                    }),
                    (e) => (l) => {
                        let i = () => e([l].concat(t));
                        n === r ? i() : (o = i);
                    }
                );
            }
            function k(...e) {
                return function (t, n) {
                    switch (t) {
                        case 1:
                            return (function (...e) {
                                return () => {
                                    e.map(a);
                                };
                            })(...e.map((e) => e(1, n)));
                        case 2:
                            return;
                        default:
                            throw Error(`unrecognized action ${t}`);
                    }
                };
            }
            function L(e, t = w) {
                return I(e, C(t));
            }
            function P(...e) {
                let t = g(),
                    n = Array(e.length),
                    o = 0,
                    r = Math.pow(2, e.length) - 1;
                return (
                    e.forEach((e, l) => {
                        let i = Math.pow(2, l);
                        e(1, (e) => {
                            (n[l] = e), (o |= i) === r && t(0, n);
                        });
                    }),
                    function (e, l) {
                        switch (e) {
                            case 1:
                                return o === r && l(n), t(1, l);
                            case 2:
                                return f(t);
                            default:
                                throw Error(`unrecognized action ${e}`);
                        }
                    }
                );
            }
            function O(e, t = [], { singleton: n } = { singleton: !0 }) {
                return { id: M(), constructor: e, dependencies: t, singleton: n };
            }
            let M = () => Symbol(),
                F = 'undefined' != typeof document ? o.useLayoutEffect : o.useEffect;
            function A(e, t, n) {
                let r = Object.keys(t.required || {}),
                    l = Object.keys(t.optional || {}),
                    i = Object.keys(t.methods || {}),
                    u = Object.keys(t.events || {}),
                    a = o.createContext({});
                function s(e, n) {
                    var o, i, u, a;
                    for (let l of (e.propsReady && ((o = e.propsReady), o(0, !1)), r)) {
                        (i = e[t.required[l]]), i(0, n[l]);
                    }
                    for (let o of l) {
                        o in n && ((u = e[t.optional[o]]), u(0, n[o]));
                    }
                    e.propsReady && ((a = e.propsReady), a(0, !0));
                }
                function d(e) {
                    return u.reduce(
                        (n, o) => (
                            (n[o] = (function (e) {
                                let t,
                                    n,
                                    o = () => t && t();
                                return function (r, l) {
                                    switch (r) {
                                        case 1:
                                            if (!l) return o(), c;
                                            if (n === l) return;
                                            return o(), (n = l), (t = e(1, l));
                                        case 2:
                                            o(), (n = null);
                                            return;
                                        default:
                                            throw Error(`unrecognized action ${r}`);
                                    }
                                };
                            })(e[t.events[o]])),
                            n
                        ),
                        {},
                    );
                }
                return {
                    Component: o.forwardRef((c, m) => {
                        var h;
                        let { children: p, ...g } = c,
                            [v] = o.useState(() => {
                                var t;
                                return (
                                    (t = (function (e) {
                                        let t = new Map(),
                                            n = ({ id: e, constructor: o, dependencies: r, singleton: l }) => {
                                                if (l && t.has(e)) return t.get(e);
                                                let i = o(r.map((e) => n(e)));
                                                return l && t.set(e, i), i;
                                            };
                                        return n(e);
                                    })(e)),
                                    s(t, g),
                                    t
                                );
                            }),
                            [x] = o.useState(() => d(v));
                        return (
                            F(() => {
                                for (let e of u) e in g && (0, x[e])(1, g[e]);
                                return () => {
                                    Object.values(x).map(f);
                                };
                            }, [g, x, v]),
                            F(() => {
                                s(v, g);
                            }),
                            o.useImperativeHandle(
                                m,
                                ((h = i.reduce(
                                    (e, n) => (
                                        (e[n] = (e) => {
                                            var o;
                                            (o = v[t.methods[n]]), o(0, e);
                                        }),
                                        e
                                    ),
                                    {},
                                )),
                                () => h),
                            ),
                            o.createElement(
                                a.Provider,
                                { value: v },
                                n
                                    ? o.createElement(
                                          n,
                                          (function (e, t) {
                                              let n = {},
                                                  o = {},
                                                  r = 0,
                                                  l = e.length;
                                              for (; r < l; ) (o[e[r]] = 1), (r += 1);
                                              for (let e in t) o.hasOwnProperty(e) || (n[e] = t[e]);
                                              return n;
                                          })([...r, ...l, ...u], g),
                                          p,
                                      )
                                    : p,
                            )
                        );
                    }),
                    usePublisher: (e) => {
                        var t;
                        return o.useCallback(
                            ((t = o.useContext(a)[e]),
                            (e) =>
                                (function (e, t) {
                                    e(0, t);
                                })(t, e)),
                            [e],
                        );
                    },
                    useEmitterValue: (e) => {
                        let t = o.useContext(a)[e],
                            [n, r] = o.useState(() => m(t));
                        return (
                            F(
                                () =>
                                    t(1, (e) => {
                                        e !== n && r(() => e);
                                    }),
                                [t, n],
                            ),
                            n
                        );
                    },
                    useEmitter: (e, t) => {
                        let n = o.useContext(a)[e];
                        F(() => n(1, t), [t, n]);
                    },
                };
            }
            let W = 'undefined' != typeof document ? o.useLayoutEffect : o.useEffect;
            var N = ((e) => ((e[(e.DEBUG = 0)] = 'DEBUG'), (e[(e.INFO = 1)] = 'INFO'), (e[(e.WARN = 2)] = 'WARN'), (e[(e.ERROR = 3)] = 'ERROR'), e))(N || {});
            let D = { 0: 'debug', 1: 'log', 2: 'warn', 3: 'error' },
                V = O(
                    () => {
                        let e = v(3);
                        return {
                            log: v((t, n, o = 1) => {
                                var r;
                                o >= (null != (r = ('undefined' == typeof globalThis ? window : globalThis).VIRTUOSO_LOG_LEVEL) ? r : m(e)) &&
                                    console[D[o]]('%creact-virtuoso: %c%s %o', 'color: #0253b3; font-weight: bold', 'color: initial', t, n);
                            }),
                            logLevel: e,
                        };
                    },
                    [],
                    { singleton: !0 },
                );
            function G(e, t = !0) {
                let n = o.useRef(null),
                    r = (e) => {};
                if ('undefined' != typeof ResizeObserver) {
                    let l = o.useMemo(
                        () =>
                            new ResizeObserver((t) => {
                                let n = t[0].target;
                                null !== n.offsetParent && e(n);
                            }),
                        [e],
                    );
                    r = (e) => {
                        e && t ? (l.observe(e), (n.current = e)) : (n.current && l.unobserve(n.current), (n.current = null));
                    };
                }
                return { ref: n, callbackRef: r };
            }
            function _(e, t = !0) {
                return G(e, t).callbackRef;
            }
            function U(e, t, n, r, l, i, u) {
                return G(
                    o.useCallback(
                        (n) => {
                            var o, a;
                            let s = (function (e, t, n, o) {
                                    let r = e.length;
                                    if (0 === r) return null;
                                    let l = [];
                                    for (let i = 0; i < r; i++) {
                                        let r = e.item(i);
                                        if (!r || void 0 === r.dataset.index) continue;
                                        let u = parseInt(r.dataset.index),
                                            a = parseFloat(r.dataset.knownSize),
                                            s = t(r, n);
                                        if ((0 === s && o('Zero-sized element, this should not happen', { child: r }, N.ERROR), s === a)) continue;
                                        let c = l[l.length - 1];
                                        0 === l.length || c.size !== s || c.endIndex !== u - 1
                                            ? l.push({ startIndex: u, endIndex: u, size: s })
                                            : l[l.length - 1].endIndex++;
                                    }
                                    return l;
                                })(n.children, t, 'offsetHeight', l),
                                c = n.parentElement;
                            for (; !c.dataset.virtuosoScroller; ) c = c.parentElement;
                            let d = 'window' === c.lastElementChild.dataset.viewportType,
                                f = u ? u.scrollTop : d ? window.pageYOffset || document.documentElement.scrollTop : c.scrollTop;
                            r({
                                scrollTop: Math.max(f, 0),
                                scrollHeight: u ? u.scrollHeight : d ? document.documentElement.scrollHeight : c.scrollHeight,
                                viewportHeight: u ? u.offsetHeight : d ? window.innerHeight : c.offsetHeight,
                            }),
                                null == i ||
                                    i(
                                        ((o = getComputedStyle(n).rowGap),
                                        (a = l),
                                        ('normal' === o || (null == o ? void 0 : o.endsWith('px')) || a('row-gap was not resolved to pixel value correctly', o, N.WARN),
                                        'normal' === o)
                                            ? 0
                                            : parseInt(null != o ? o : '0', 10)),
                                    ),
                                null !== s && e(s);
                        },
                        [e, t, l, i, u, r],
                    ),
                    n,
                );
            }
            function $(e, t) {
                return Math.round(e.getBoundingClientRect()[t]);
            }
            function j(e, t) {
                return 1.01 > Math.abs(e - t);
            }
            function K(e, t, n, l = c, i) {
                let u = o.useRef(null),
                    a = o.useRef(null),
                    s = o.useRef(null),
                    d = o.useCallback(
                        (n) => {
                            let o = n.target,
                                l = o === window || o === document,
                                i = l ? window.pageYOffset || document.documentElement.scrollTop : o.scrollTop,
                                u = l ? document.documentElement.scrollHeight : o.scrollHeight,
                                c = l ? window.innerHeight : o.offsetHeight,
                                d = () => {
                                    e({ scrollTop: Math.max(i, 0), scrollHeight: u, viewportHeight: c });
                                };
                            n.suppressFlushSync ? d() : r.flushSync(d),
                                null !== a.current &&
                                    (i === a.current || i <= 0 || i === u - c) &&
                                    ((a.current = null), t(!0), s.current && (clearTimeout(s.current), (s.current = null)));
                        },
                        [e, t],
                    );
                return (
                    o.useEffect(() => {
                        let e = i || u.current;
                        return (
                            l(i || u.current),
                            d({ target: e, suppressFlushSync: !0 }),
                            e.addEventListener('scroll', d, { passive: !0 }),
                            () => {
                                l(null), e.removeEventListener('scroll', d);
                            }
                        );
                    }, [u, d, n, l, i]),
                    {
                        scrollerRef: u,
                        scrollByCallback: function (e) {
                            u.current.scrollBy(e);
                        },
                        scrollToCallback: function (n) {
                            let o,
                                r,
                                l,
                                i = u.current;
                            if (!i || ('offsetHeight' in i && 0 === i.offsetHeight)) return;
                            let c = 'smooth' === n.behavior;
                            if (
                                (i === window
                                    ? ((r = Math.max($(document.documentElement, 'height'), document.documentElement.scrollHeight)),
                                      (o = window.innerHeight),
                                      (l = document.documentElement.scrollTop))
                                    : ((r = i.scrollHeight), (o = $(i, 'height')), (l = i.scrollTop)),
                                (n.top = Math.ceil(Math.max(Math.min(r - o, n.top), 0))),
                                j(o, r) || n.top === l)
                            ) {
                                e({ scrollTop: l, scrollHeight: r, viewportHeight: o }), c && t(!0);
                                return;
                            }
                            c
                                ? ((a.current = n.top),
                                  s.current && clearTimeout(s.current),
                                  (s.current = setTimeout(() => {
                                      (s.current = null), (a.current = null), t(!0);
                                  }, 1e3)))
                                : (a.current = null),
                                i.scrollTo(n);
                        },
                    }
                );
            }
            let q = O(
                    () => {
                        let e = g(),
                            t = g(),
                            n = v(0),
                            o = g(),
                            r = v(0),
                            l = g(),
                            i = g(),
                            u = v(0),
                            a = v(0),
                            s = v(0),
                            c = v(0),
                            d = g(),
                            f = g(),
                            m = v(!1);
                        return (
                            h(
                                I(
                                    e,
                                    S(({ scrollTop: e }) => e),
                                ),
                                t,
                            ),
                            h(
                                I(
                                    e,
                                    S(({ scrollHeight: e }) => e),
                                ),
                                i,
                            ),
                            h(t, r),
                            {
                                scrollContainerState: e,
                                scrollTop: t,
                                viewportHeight: l,
                                headerHeight: u,
                                fixedHeaderHeight: a,
                                fixedFooterHeight: s,
                                footerHeight: c,
                                scrollHeight: i,
                                smoothScrollTargetReached: o,
                                scrollTo: d,
                                scrollBy: f,
                                statefulScrollTop: r,
                                deviation: n,
                                scrollingInProgress: m,
                            }
                        );
                    },
                    [],
                    { singleton: !0 },
                ),
                Y = { lvl: 0 };
            function Z(e, t, n, o = Y, r = Y) {
                return { k: e, v: t, lvl: n, l: o, r };
            }
            function J(e) {
                return e === Y;
            }
            function Q(e, t) {
                if (!J(e))
                    if (t === e.k) return e.v;
                    else if (t < e.k) return Q(e.l, t);
                    else return Q(e.r, t);
            }
            function X(e, t, n = 'k') {
                if (J(e)) return [-1 / 0, void 0];
                if (Number(e[n]) === t) return [e.k, e.v];
                if (Number(e[n]) < t) {
                    let o = X(e.r, t, n);
                    return o[0] === -1 / 0 ? [e.k, e.v] : o;
                }
                return X(e.l, t, n);
            }
            function ee(e, t, n) {
                return J(e) ? Z(t, n, 1) : t === e.k ? en(e, { k: t, v: n }) : t < e.k ? eu(ea(en(e, { l: ee(e.l, t, n) }))) : eu(ea(en(e, { r: ee(e.r, t, n) })));
            }
            function et(e) {
                return J(e) ? [] : [...et(e.l), { k: e.k, v: e.v }, ...et(e.r)];
            }
            function en(e, t) {
                return Z(
                    void 0 !== t.k ? t.k : e.k,
                    void 0 !== t.v ? t.v : e.v,
                    void 0 !== t.lvl ? t.lvl : e.lvl,
                    void 0 !== t.l ? t.l : e.l,
                    void 0 !== t.r ? t.r : e.r,
                );
            }
            function eo(e) {
                return J(e) || e.lvl > e.r.lvl;
            }
            function er(e) {
                let { l: t, r: n, lvl: o } = e;
                if (n.lvl >= o - 1 && t.lvl >= o - 1) return e;
                if (o > n.lvl + 1)
                    if (eo(t)) return ea(en(e, { lvl: o - 1 }));
                    else if (!J(t) && !J(t.r)) return en(t.r, { l: en(t, { r: t.r.l }), r: en(e, { l: t.r.r, lvl: o - 1 }), lvl: o });
                    else throw Error('Unexpected empty nodes');
                if (eo(e)) return eu(en(e, { lvl: o - 1 }));
                if (J(n) || J(n.l)) throw Error('Unexpected empty nodes');
                {
                    let t = n.l,
                        r = eo(t) ? n.lvl - 1 : n.lvl;
                    return en(t, { l: en(e, { r: t.l, lvl: o - 1 }), r: eu(en(n, { l: t.r, lvl: r })), lvl: t.lvl + 1 });
                }
            }
            function el(e, t, n) {
                if (J(e)) return [];
                let o = X(e, t)[0];
                return ei(
                    (function e(t, n, o) {
                        if (J(t)) return [];
                        let { k: r, v: l, l: i, r: u } = t,
                            a = [];
                        return r > n && (a = a.concat(e(i, n, o))), r >= n && r <= o && a.push({ k: r, v: l }), r <= o && (a = a.concat(e(u, n, o))), a;
                    })(e, o, n),
                    ({ k: e, v: t }) => ({ index: e, value: t }),
                );
            }
            function ei(e, t) {
                let n = e.length;
                if (0 === n) return [];
                let { index: o, value: r } = t(e[0]),
                    l = [];
                for (let i = 1; i < n; i++) {
                    let { index: n, value: u } = t(e[i]);
                    l.push({ start: o, end: n - 1, value: r }), (o = n), (r = u);
                }
                return l.push({ start: o, end: 1 / 0, value: r }), l;
            }
            function eu(e) {
                let { r: t, lvl: n } = e;
                return J(t) || J(t.r) || t.lvl !== n || t.r.lvl !== n ? e : en(t, { l: en(e, { r: t.l }), lvl: n + 1 });
            }
            function ea(e) {
                let { l: t } = e;
                return J(t) || t.lvl !== e.lvl ? e : en(t, { r: en(e, { l: t.r }) });
            }
            function es(e, t, n, o = 0) {
                let r = e.length - 1;
                for (; o <= r; ) {
                    let l = Math.floor((o + r) / 2),
                        i = n(e[l], t);
                    if (0 === i) return l;
                    if (-1 === i) {
                        if (r - o < 2) return l - 1;
                        r = l - 1;
                    } else {
                        if (r === o) return l;
                        o = l + 1;
                    }
                }
                throw Error(`Failed binary finding record in array - ${e.join(',')}, searched for ${t}`);
            }
            let ec = O(() => ({ recalcInProgress: v(!1) }), [], { singleton: !0 });
            function ed(e, t) {
                let n = 0,
                    o = 0;
                for (; n < e; ) (n += t[o + 1] - t[o] - 1), o++;
                return o - (n !== e);
            }
            function ef({ index: e }, t) {
                return t === e ? 0 : t < e ? -1 : 1;
            }
            function em({ offset: e }, t) {
                return t === e ? 0 : t < e ? -1 : 1;
            }
            function eh(e) {
                return { index: e.index, value: e };
            }
            function ep(e, t, n, o) {
                let r = e,
                    l = 0,
                    i = 0,
                    u = 0,
                    a = 0;
                if (0 !== t) {
                    (a = es(r, t - 1, ef)), (u = r[a].offset);
                    let e = X(n, t - 1);
                    (l = e[0]), (i = e[1]), r.length && r[a].size === X(n, t)[1] && (a -= 1), (r = r.slice(0, a + 1));
                } else r = [];
                for (let { start: e, value: a } of el(n, t, 1 / 0)) {
                    let t = e - l,
                        n = t * i + u + t * o;
                    r.push({ offset: n, size: a, index: e }), (l = e), (u = n), (i = a);
                }
                return { offsetTree: r, lastIndex: l, lastOffset: u, lastSize: i };
            }
            function eg(e, [t, n, o, r]) {
                t.length > 0 && o('received item sizes', t, N.DEBUG);
                let l = e.sizeTree,
                    i = l,
                    u = 0;
                if (n.length > 0 && J(l) && 2 === t.length) {
                    let e = t[0].size,
                        o = t[1].size;
                    i = n.reduce((t, n) => ee(ee(t, n, e), n + 1, o), i);
                } else
                    [i, u] = (function (e, t) {
                        let n = J(e) ? 0 : 1 / 0;
                        for (let o of t) {
                            let { size: t, startIndex: r, endIndex: l } = o;
                            if (((n = Math.min(n, r)), J(e))) {
                                e = ee(e, 0, t);
                                continue;
                            }
                            let i = el(e, r - 1, l + 1);
                            if (
                                i.some(
                                    (function (e) {
                                        let { size: t, startIndex: n, endIndex: o } = e;
                                        return (e) => e.start === n && (e.end === o || e.end === 1 / 0) && e.value === t;
                                    })(o),
                                )
                            )
                                continue;
                            let u = !1,
                                a = !1;
                            for (let { start: n, end: o, value: r } of i)
                                u
                                    ? (l >= n || t === r) &&
                                      (e = (function e(t, n) {
                                          if (J(t)) return Y;
                                          let { k: o, l: r, r: l } = t;
                                          if (n === o)
                                              if (J(r)) return l;
                                              else {
                                                  if (J(l)) return r;
                                                  let [e, n] = (function e(t) {
                                                      return J(t.r) ? [t.k, t.v] : e(t.r);
                                                  })(r);
                                                  return er(
                                                      en(t, {
                                                          k: e,
                                                          v: n,
                                                          l: (function e(t) {
                                                              return J(t.r) ? t.l : er(en(t, { r: e(t.r) }));
                                                          })(r),
                                                      }),
                                                  );
                                              }
                                          return n < o ? er(en(t, { l: e(r, n) })) : er(en(t, { r: e(l, n) }));
                                      })(e, n))
                                    : ((a = r !== t), (u = !0)),
                                    o > l && l >= n && r !== t && (e = ee(e, l + 1, r));
                            a && (e = ee(e, r, t));
                        }
                        return [e, n];
                    })(i, t);
                if (i === l) return e;
                let { offsetTree: a, lastIndex: s, lastSize: c, lastOffset: d } = ep(e.offsetTree, u, i, r);
                return {
                    sizeTree: i,
                    offsetTree: a,
                    lastIndex: s,
                    lastOffset: d,
                    lastSize: c,
                    groupOffsetTree: n.reduce((e, t) => ee(e, t, ev(t, a, r)), Y),
                    groupIndices: n,
                };
            }
            function ev(e, t, n) {
                if (0 === t.length) return 0;
                let { offset: o, index: r, size: l } = t[es(t, e, ef)],
                    i = e - r,
                    u = l * i + (i - 1) * n + o;
                return u > 0 ? u + n : u;
            }
            function ex(e, t, n) {
                if (void 0 !== e.groupIndex) return t.groupIndices[e.groupIndex] + 1;
                {
                    let o = eT('LAST' === e.index ? n : e.index, t);
                    return Math.max(0, o, Math.min(n, o));
                }
            }
            function eT(e, t) {
                if (!eI(t)) return e;
                let n = 0;
                for (; t.groupIndices[n] <= e + n; ) n++;
                return e + n;
            }
            function eI(e) {
                return !J(e.groupOffsetTree);
            }
            let ew = { offsetHeight: 'height', offsetWidth: 'width' },
                eC = O(
                    ([{ log: e }, { recalcInProgress: t }]) => {
                        let n = g(),
                            o = g(),
                            r = T(o, 0),
                            l = g(),
                            i = g(),
                            u = v(0),
                            a = v([]),
                            s = v(void 0),
                            c = v(void 0),
                            d = v((e, t) => $(e, ew[t])),
                            f = v(void 0),
                            p = v(0),
                            w = { offsetTree: [], sizeTree: Y, groupOffsetTree: Y, lastIndex: 0, lastOffset: 0, lastSize: 0, groupIndices: [] },
                            y = T(I(n, B(a, e, p), b(eg, w), C()), w),
                            H = T(
                                I(
                                    a,
                                    C(),
                                    b((e, t) => ({ prev: e.current, current: t }), { prev: [], current: [] }),
                                    S(({ prev: e }) => e),
                                ),
                                [],
                            );
                        h(
                            I(
                                a,
                                E((e) => e.length > 0),
                                B(y, p),
                                S(([e, t, n]) => {
                                    let o = e.reduce((e, o, r) => ee(e, o, ev(o, t.offsetTree, n) || r), Y);
                                    return { ...t, groupIndices: e, groupOffsetTree: o };
                                }),
                            ),
                            y,
                        ),
                            h(
                                I(
                                    o,
                                    B(y),
                                    E(([e, { lastIndex: t }]) => e < t),
                                    S(([e, { lastIndex: t, lastSize: n }]) => [{ startIndex: e, endIndex: t, size: n }]),
                                ),
                                n,
                            ),
                            h(s, c);
                        let z = T(
                            I(
                                s,
                                S((e) => void 0 === e),
                            ),
                            !0,
                        );
                        h(
                            I(
                                c,
                                E((e) => void 0 !== e && J(m(y).sizeTree)),
                                S((e) => [{ startIndex: 0, endIndex: 0, size: e }]),
                            ),
                            n,
                        );
                        let R = x(
                            I(
                                n,
                                B(y),
                                b(({ sizes: e }, [t, n]) => ({ changed: n !== e, sizes: n }), { changed: !1, sizes: w }),
                                S((e) => e.changed),
                            ),
                        );
                        I(
                            u,
                            b((e, t) => ({ diff: e.prev - t, prev: t }), { diff: 0, prev: 0 }),
                            S((e) => e.diff),
                        )(1, (e) => {
                            let { groupIndices: n } = m(y);
                            if (e > 0) t(0, !0), l(0, e + ed(e, n));
                            else if (e < 0) {
                                let t = m(H);
                                t.length > 0 && (e -= ed(-e, t)), i(0, e);
                            }
                        }),
                            I(u, B(e))(1, ([e, t]) => {
                                e < 0 &&
                                    t(
                                        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
                                        { firstItemIndex: u },
                                        N.ERROR,
                                    );
                            });
                        let k = x(l);
                        h(
                            I(
                                l,
                                B(y),
                                S(([e, t]) => {
                                    let n = t.groupIndices.length > 0,
                                        o = [],
                                        r = t.lastSize;
                                    if (n) {
                                        let n = Q(t.sizeTree, 0),
                                            l = 0,
                                            i = 0;
                                        for (; l < e; ) {
                                            let e = t.groupIndices[i],
                                                u = t.groupIndices.length === i + 1 ? 1 / 0 : t.groupIndices[i + 1] - e - 1;
                                            o.push({ startIndex: e, endIndex: e, size: n }),
                                                o.push({ startIndex: e + 1, endIndex: e + 1 + u - 1, size: r }),
                                                i++,
                                                (l += u + 1);
                                        }
                                        let u = et(t.sizeTree);
                                        return (
                                            l !== e && u.shift(),
                                            u.reduce(
                                                (t, { k: n, v: o }) => {
                                                    let r = t.ranges;
                                                    return (
                                                        0 !== t.prevSize && (r = [...t.ranges, { startIndex: t.prevIndex, endIndex: n + e - 1, size: t.prevSize }]),
                                                        { ranges: r, prevIndex: n + e, prevSize: o }
                                                    );
                                                },
                                                { ranges: o, prevIndex: e, prevSize: 0 },
                                            ).ranges
                                        );
                                    }
                                    return et(t.sizeTree).reduce(
                                        (t, { k: n, v: o }) => ({
                                            ranges: [...t.ranges, { startIndex: t.prevIndex, endIndex: n + e - 1, size: t.prevSize }],
                                            prevIndex: n + e,
                                            prevSize: o,
                                        }),
                                        { ranges: [], prevIndex: 0, prevSize: r },
                                    ).ranges;
                                }),
                            ),
                            n,
                        );
                        let L = x(
                            I(
                                i,
                                B(y, p),
                                S(([e, { offsetTree: t }, n]) => ev(-e, t, n)),
                            ),
                        );
                        return (
                            h(
                                I(
                                    i,
                                    B(y, p),
                                    S(([e, t, n]) => {
                                        if (t.groupIndices.length > 0) {
                                            if (J(t.sizeTree)) return t;
                                            let o = Y,
                                                r = m(H),
                                                l = 0,
                                                i = 0,
                                                u = 0;
                                            for (; l < -e; ) {
                                                u = r[i];
                                                let e = r[i + 1] - u - 1;
                                                i++, (l += e + 1);
                                            }
                                            return (
                                                (o = et(t.sizeTree).reduce((t, { k: n, v: o }) => ee(t, Math.max(0, n + e), o), o)),
                                                l !== -e && ((o = ee(o, 0, Q(t.sizeTree, u))), (o = ee(o, 1, X(t.sizeTree, -e + 1)[1]))),
                                                { ...t, sizeTree: o, ...ep(t.offsetTree, 0, o, n) }
                                            );
                                        }
                                        {
                                            let o = et(t.sizeTree).reduce((t, { k: n, v: o }) => ee(t, Math.max(0, n + e), o), Y);
                                            return { ...t, sizeTree: o, ...ep(t.offsetTree, 0, o, n) };
                                        }
                                    }),
                                ),
                                y,
                            ),
                            {
                                data: f,
                                totalCount: o,
                                sizeRanges: n,
                                groupIndices: a,
                                defaultItemSize: c,
                                fixedItemSize: s,
                                unshiftWith: l,
                                shiftWith: i,
                                shiftWithOffset: L,
                                beforeUnshiftWith: k,
                                firstItemIndex: u,
                                gap: p,
                                sizes: y,
                                listRefresh: R,
                                statefulTotalCount: r,
                                trackItemSizes: z,
                                itemSize: d,
                            }
                        );
                    },
                    u(V, ec),
                    { singleton: !0 },
                ),
                eE = 'undefined' != typeof document && 'scrollBehavior' in document.documentElement.style;
            function eS(e) {
                let t = 'number' == typeof e ? { index: e } : e;
                return t.align || (t.align = 'start'), (t.behavior && eE) || (t.behavior = 'auto'), t.offset || (t.offset = 0), t;
            }
            let ey = O(
                    ([
                        { sizes: e, totalCount: t, listRefresh: n, gap: o },
                        {
                            scrollingInProgress: r,
                            viewportHeight: l,
                            scrollTo: i,
                            smoothScrollTargetReached: u,
                            headerHeight: a,
                            footerHeight: s,
                            fixedHeaderHeight: c,
                            fixedFooterHeight: d,
                        },
                        { log: f },
                    ]) => {
                        let m = g(),
                            x = v(0),
                            T = null,
                            w = null,
                            C = null;
                        function E() {
                            T && (T(), (T = null)), C && (C(), (C = null)), w && (clearTimeout(w), (w = null)), r(0, !1);
                        }
                        return (
                            h(
                                I(
                                    m,
                                    B(e, l, t, x, a, s, f),
                                    B(o, c, d),
                                    S(([[e, t, o, l, i, a, s, c], d, f, h]) => {
                                        let g = eS(e),
                                            { align: v, behavior: x, offset: S } = g,
                                            y = l - 1,
                                            b = ex(g, t, y),
                                            H = ev(b, t.offsetTree, d) + a;
                                        'end' === v
                                            ? ((H += f + X(t.sizeTree, b)[1] - o + h), b === y && (H += s))
                                            : 'center' === v
                                              ? (H += (f + X(t.sizeTree, b)[1] - o + h) / 2)
                                              : (H -= i),
                                            S && (H += S);
                                        let z = (t) => {
                                            E(),
                                                t
                                                    ? (c('retrying to scroll to', { location: e }, N.DEBUG), m(0, e))
                                                    : c('list did not change, scroll successful', {}, N.DEBUG);
                                        };
                                        if ((E(), 'smooth' === x)) {
                                            let e = !1;
                                            (C = n(1, (t) => {
                                                e = e || t;
                                            })),
                                                (T = p(u, () => {
                                                    z(e);
                                                }));
                                        } else
                                            T = p(
                                                I(n, (e) => {
                                                    let t = setTimeout(() => {
                                                        e(!1);
                                                    }, 150);
                                                    return (n) => {
                                                        n && (e(!0), clearTimeout(t));
                                                    };
                                                }),
                                                z,
                                            );
                                        return (
                                            (w = setTimeout(() => {
                                                E();
                                            }, 1200)),
                                            r(0, !0),
                                            c('scrolling from index to', { index: b, top: H, behavior: x }, N.DEBUG),
                                            { top: H, behavior: x }
                                        );
                                    }),
                                ),
                                i,
                            ),
                            { scrollToIndex: m, topListHeight: x }
                        );
                    },
                    u(eC, q, V),
                    { singleton: !0 },
                ),
                eb = 'down',
                eH = { atBottom: !1, notAtBottomBecause: 'NOT_SHOWING_LAST_ITEM', state: { offsetBottom: 0, scrollTop: 0, viewportHeight: 0, scrollHeight: 0 } },
                ez = O(([{ scrollContainerState: e, scrollTop: t, viewportHeight: n, headerHeight: o, footerHeight: r, scrollBy: l }]) => {
                    let i = v(!1),
                        u = v(!0),
                        a = g(),
                        s = g(),
                        c = v(4),
                        d = v(0),
                        f = T(I(k(I(L(t), H(1), y(!0)), I(L(t), H(1), y(!1), R(100))), C()), !1),
                        p = T(I(k(I(l, y(!0)), I(l, y(!1), R(200))), C()), !1);
                    h(
                        I(
                            P(L(t), L(d)),
                            S(([e, t]) => e <= t),
                            C(),
                        ),
                        u,
                    ),
                        h(I(u, z(50)), s);
                    let w = x(
                            I(
                                P(e, L(n), L(o), L(r), L(c)),
                                b((e, [{ scrollTop: t, scrollHeight: n }, o, r, l, i]) => {
                                    let u = { viewportHeight: o, scrollTop: t, scrollHeight: n };
                                    if (t + o - n > -i) {
                                        let n, o;
                                        return (
                                            t > e.state.scrollTop
                                                ? ((n = 'SCROLLED_DOWN'), (o = e.state.scrollTop - t))
                                                : ((n = 'SIZE_DECREASED'), (o = e.state.scrollTop - t || e.scrollTopDelta)),
                                            { atBottom: !0, state: u, atBottomBecause: n, scrollTopDelta: o }
                                        );
                                    }
                                    return {
                                        atBottom: !1,
                                        notAtBottomBecause:
                                            u.scrollHeight > e.state.scrollHeight
                                                ? 'SIZE_INCREASED'
                                                : o < e.state.viewportHeight
                                                  ? 'VIEWPORT_HEIGHT_DECREASING'
                                                  : t < e.state.scrollTop
                                                    ? 'SCROLLING_UPWARDS'
                                                    : 'NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM',
                                        state: u,
                                    };
                                }, eH),
                                C((e, t) => e && e.atBottom === t.atBottom),
                            ),
                        ),
                        O = T(
                            I(
                                e,
                                b(
                                    (e, { scrollTop: t, scrollHeight: n, viewportHeight: o }) => {
                                        if (j(e.scrollHeight, n)) return { scrollTop: t, scrollHeight: n, jump: 0, changed: !1 };
                                        {
                                            let r = n - (t + o) < 1;
                                            return e.scrollTop !== t && r
                                                ? { scrollHeight: n, scrollTop: t, jump: e.scrollTop - t, changed: !0 }
                                                : { scrollHeight: n, scrollTop: t, jump: 0, changed: !0 };
                                        }
                                    },
                                    { scrollHeight: 0, jump: 0, scrollTop: 0, changed: !1 },
                                ),
                                E((e) => e.changed),
                                S((e) => e.jump),
                            ),
                            0,
                        );
                    h(
                        I(
                            w,
                            S((e) => e.atBottom),
                        ),
                        i,
                    ),
                        h(I(i, z(50)), a);
                    let M = v(eb);
                    h(
                        I(
                            e,
                            S(({ scrollTop: e }) => e),
                            C(),
                            b((e, t) => (m(p) ? { direction: e.direction, prevScrollTop: t } : { direction: t < e.prevScrollTop ? 'up' : eb, prevScrollTop: t }), {
                                direction: eb,
                                prevScrollTop: 0,
                            }),
                            S((e) => e.direction),
                        ),
                        M,
                    ),
                        h(I(e, z(50), y('none')), M);
                    let F = v(0);
                    return (
                        h(
                            I(
                                f,
                                E((e) => !e),
                                y(0),
                            ),
                            F,
                        ),
                        h(
                            I(
                                t,
                                z(100),
                                B(f),
                                E(([e, t]) => !!t),
                                b(([e, t], [n]) => [t, n], [0, 0]),
                                S(([e, t]) => t - e),
                            ),
                            F,
                        ),
                        {
                            isScrolling: f,
                            isAtTop: u,
                            isAtBottom: i,
                            atBottomState: w,
                            atTopStateChange: s,
                            atBottomStateChange: a,
                            scrollDirection: M,
                            atBottomThreshold: c,
                            atTopThreshold: d,
                            scrollVelocity: F,
                            lastJumpDueToItemResize: O,
                        }
                    );
                }, u(q)),
                eR = O(
                    ([{ log: e }]) => {
                        let t = v(!1),
                            n = x(
                                I(
                                    t,
                                    E((e) => e),
                                    C(),
                                ),
                            );
                        return (
                            t(1, (t) => {
                                t && m(e)('props updated', {}, N.DEBUG);
                            }),
                            { propsReady: t, didMount: n }
                        );
                    },
                    u(V),
                    { singleton: !0 },
                ),
                eB = O(
                    ([{ sizes: e, listRefresh: t, defaultItemSize: n }, { scrollTop: o }, { scrollToIndex: r }, { didMount: l }]) => {
                        let i = v(!0),
                            u = v(0),
                            a = v(!1);
                        return (
                            h(
                                I(
                                    l,
                                    B(u),
                                    E(([e, t]) => !!t),
                                    y(!1),
                                ),
                                i,
                            ),
                            I(
                                P(t, l),
                                B(i, e, n, a),
                                E(([[, e], t, { sizeTree: n }, o, r]) => e && (!J(n) || s(o)) && !t && !r),
                                B(u),
                            )(1, ([, e]) => {
                                a(0, !0),
                                    (function e(t, n) {
                                        0 == t ? n() : requestAnimationFrame(() => e(t - 1, n));
                                    })(2, () => {
                                        p(o, () => {
                                            i(0, !0);
                                        }),
                                            r(0, e);
                                    });
                            }),
                            { scrolledToInitialItem: i, initialTopMostItemIndex: u }
                        );
                    },
                    u(eC, q, ey, eR),
                    { singleton: !0 },
                );
            function ek(e) {
                return !!e && ('smooth' === e ? 'smooth' : 'auto');
            }
            let eL = O(
                ([
                    { totalCount: e, listRefresh: t },
                    { isAtBottom: n, atBottomState: o },
                    { scrollToIndex: r },
                    { scrolledToInitialItem: l },
                    { propsReady: i, didMount: u },
                    { log: a },
                    { scrollingInProgress: s },
                ]) => {
                    let c = v(!1),
                        d = g(),
                        f = null;
                    function h(e) {
                        r(0, { index: 'LAST', align: 'end', behavior: e });
                    }
                    function x(e) {
                        setTimeout(
                            p(o, (t) => {
                                !e ||
                                    t.atBottom ||
                                    'SIZE_INCREASED' !== t.notAtBottomBecause ||
                                    f ||
                                    (m(a)('scrolling to bottom due to increased size', {}, N.DEBUG), h('auto'));
                            }),
                            100,
                        );
                    }
                    return (
                        I(
                            P(I(L(e), H(1)), u),
                            B(L(c), n, l, s),
                            S(([[e, t], n, o, r, l]) => {
                                let i = t && r,
                                    u = 'auto';
                                return (
                                    i && ((u = ((e, t) => ('function' == typeof e ? ek(e(t)) : t && ek(e)))(n, o || l)), (i = i && !!u)),
                                    { totalCount: e, shouldFollow: i, followOutputBehavior: u }
                                );
                            }),
                            E(({ shouldFollow: e }) => e),
                        )(1, ({ totalCount: e, followOutputBehavior: n }) => {
                            f && (f(), (f = null)),
                                (f = p(t, () => {
                                    m(a)('following output to ', { totalCount: e }, N.DEBUG), h(n), (f = null);
                                }));
                        }),
                        I(
                            P(L(c), e, i),
                            E(([e, , t]) => e && t),
                            b(({ value: e }, [, t]) => ({ refreshed: e === t, value: t }), { refreshed: !1, value: 0 }),
                            E(({ refreshed: e }) => e),
                            B(c, e),
                        )(1, ([, e]) => {
                            x(!1 !== e);
                        }),
                        d(1, () => {
                            x(!1 !== m(c));
                        }),
                        P(L(c), o)(1, ([e, t]) => {
                            e && !t.atBottom && 'VIEWPORT_HEIGHT_DECREASING' === t.notAtBottomBecause && h('auto');
                        }),
                        { followOutput: c, autoscrollToBottom: d }
                    );
                },
                u(eC, ez, ey, eB, eR, V, q),
            );
            function eP(e) {
                return e.reduce((e, t) => (e.groupIndices.push(e.totalCount), (e.totalCount += t + 1), e), { totalCount: 0, groupIndices: [] });
            }
            let eO = O(
                ([{ totalCount: e, groupIndices: t, sizes: n }, { scrollTop: o, headerHeight: r }]) => {
                    let l = g(),
                        i = g(),
                        u = x(I(l, S(eP)));
                    return (
                        h(
                            I(
                                u,
                                S((e) => e.totalCount),
                            ),
                            e,
                        ),
                        h(
                            I(
                                u,
                                S((e) => e.groupIndices),
                            ),
                            t,
                        ),
                        h(
                            I(
                                P(o, n, r),
                                E(([e, t]) => eI(t)),
                                S(([e, t, n]) => X(t.groupOffsetTree, Math.max(e - n, 0), 'v')[0]),
                                C(),
                                S((e) => [e]),
                            ),
                            i,
                        ),
                        { groupCounts: l, topItemsIndexes: i }
                    );
                },
                u(eC, q),
            );
            function eM(e, t) {
                return !!(e && e[0] === t[0] && e[1] === t[1]);
            }
            function eF(e, t) {
                return !!(e && e.startIndex === t.startIndex && e.endIndex === t.endIndex);
            }
            let eA = 'bottom',
                eW = 'none';
            function eN(e, t, n) {
                return 'number' == typeof e
                    ? ('up' === n && 'top' === t) || (n === eb && t === eA)
                        ? e
                        : 0
                    : 'up' === n
                      ? 'top' === t
                          ? e.main
                          : e.reverse
                      : t === eA
                        ? e.main
                        : e.reverse;
            }
            function eD(e, t) {
                return 'number' == typeof e ? e : e[t] || 0;
            }
            let eV = O(
                    ([{ scrollTop: e, viewportHeight: t, deviation: n, headerHeight: o, fixedHeaderHeight: r }]) => {
                        let l = g(),
                            i = v(0),
                            u = v(0),
                            a = v(0),
                            s = T(
                                I(
                                    P(L(e), L(t), L(o), L(l, eM), L(a), L(i), L(r), L(n), L(u)),
                                    S(([e, t, n, [o, r], l, i, u, a, s]) => {
                                        let c = e - a,
                                            d = Math.max(n - c, 0),
                                            f = eW,
                                            m = eD(s, 'top'),
                                            h = eD(s, eA);
                                        return ((o -= a), (o += n + u), (r += n + u), o > e + (i + u) - m && (f = 'up'), (r -= a) < e - d + t + h && (f = eb), f !== eW)
                                            ? [Math.max(c - n - eN(l, 'top', f) - m, 0), c - d - u + t + eN(l, eA, f) + h]
                                            : null;
                                    }),
                                    E((e) => null != e),
                                    C(eM),
                                ),
                                [0, 0],
                            );
                        return { listBoundary: l, overscan: a, topListHeight: i, increaseViewportBy: u, visibleRange: s };
                    },
                    u(q),
                    { singleton: !0 },
                ),
                eG = { items: [], topItems: [], offsetTop: 0, offsetBottom: 0, top: 0, bottom: 0, topListHeight: 0, totalCount: 0, firstItemIndex: 0 };
            function e_(e, t, n) {
                let o;
                if (0 === e.length) return [];
                if (!eI(t)) return e.map((e) => ({ ...e, index: e.index + n, originalIndex: e.index }));
                let r = e[0].index,
                    l = e[e.length - 1].index,
                    i = [],
                    u = el(t.groupOffsetTree, r, l),
                    a = 0;
                for (let r of e) {
                    let e;
                    (!o || o.end < r.index) && ((o = u.shift()), (a = t.groupIndices.indexOf(o.start))),
                        (e = r.index === o.start ? { type: 'group', index: a } : { index: r.index - (a + 1) + n, groupIndex: a }),
                        i.push({ ...e, size: r.size, offset: r.offset, originalIndex: r.index, data: r.data });
                }
                return i;
            }
            function eU(e, t, n, o, r, l) {
                let { lastSize: i, lastOffset: u, lastIndex: a } = r,
                    s = 0,
                    c = 0;
                if (e.length > 0) {
                    s = e[0].offset;
                    let t = e[e.length - 1];
                    c = t.offset + t.size;
                }
                let d = n - a,
                    f = s,
                    m = u + d * i + (d - 1) * o - c;
                return {
                    items: e_(e, r, l),
                    topItems: e_(t, r, l),
                    topListHeight: t.reduce((e, t) => t.size + e, 0),
                    offsetTop: s,
                    offsetBottom: m,
                    top: f,
                    bottom: c,
                    totalCount: n,
                    firstItemIndex: l,
                };
            }
            let e$ = O(
                    ([
                        { sizes: e, totalCount: t, data: n, firstItemIndex: o, gap: r },
                        l,
                        { visibleRange: i, listBoundary: u, topListHeight: a },
                        { scrolledToInitialItem: c, initialTopMostItemIndex: d },
                        { topListHeight: f },
                        m,
                        { didMount: p },
                        { recalcInProgress: w },
                    ]) => {
                        let y = v([]),
                            b = g();
                        h(l.topItemsIndexes, y);
                        let H = T(
                            I(
                                P(p, w, L(i, eM), L(t), L(e), L(d), c, L(y), L(o), L(r), n),
                                E(([e, t, , n, , , , , , , o]) => {
                                    let r = o && o.length !== n;
                                    return e && !t && !r;
                                }),
                                S(([, , [e, t], n, o, r, l, i, u, a, s]) => {
                                    let { sizeTree: c, offsetTree: d } = o;
                                    if (0 === n || (0 === e && 0 === t)) return { ...eG, totalCount: n };
                                    if (J(c))
                                        return eU(
                                            (function (e, t, n) {
                                                if (eI(t)) {
                                                    let o = eT(e, t);
                                                    return [
                                                        { index: X(t.groupOffsetTree, o)[0], size: 0, offset: 0 },
                                                        { index: o, size: 0, offset: 0, data: n && n[0] },
                                                    ];
                                                }
                                                return [{ index: e, size: 0, offset: 0, data: n && n[0] }];
                                            })(
                                                (function (e, t) {
                                                    return 'number' == typeof e ? e : 'LAST' === e.index ? t - 1 : e.index;
                                                })(r, n),
                                                o,
                                                s,
                                            ),
                                            [],
                                            n,
                                            a,
                                            o,
                                            u,
                                        );
                                    let f = [];
                                    if (i.length > 0) {
                                        let e = i[0],
                                            t = i[i.length - 1],
                                            n = 0;
                                        for (let o of el(c, e, t)) {
                                            let r = o.value,
                                                l = Math.max(o.start, e),
                                                i = Math.min(o.end, t);
                                            for (let e = l; e <= i; e++) f.push({ index: e, size: r, offset: n, data: s && s[e] }), (n += r);
                                        }
                                    }
                                    if (!l) return eU([], f, n, a, o, u);
                                    let m = i.length > 0 ? i[i.length - 1] + 1 : 0,
                                        h = (function (e, t, n, o = 0) {
                                            return (
                                                o > 0 && (t = Math.max(t, e[es(e, o, ef)].offset)),
                                                ei(
                                                    (function (e, t, n, o) {
                                                        let r = es(e, t, o),
                                                            l = es(e, n, o, r);
                                                        return e.slice(r, l + 1);
                                                    })(e, t, n, em),
                                                    eh,
                                                )
                                            );
                                        })(d, e, t, m);
                                    if (0 === h.length) return null;
                                    let p = n - 1;
                                    return eU(
                                        (function (e, t) {
                                            return t(e), e;
                                        })([], (n) => {
                                            for (let o of h) {
                                                let r = o.value,
                                                    l = r.offset,
                                                    i = o.start,
                                                    u = r.size;
                                                if (r.offset < e) {
                                                    let t = (i += Math.floor((e - r.offset + a) / (u + a))) - o.start;
                                                    l += t * u + t * a;
                                                }
                                                i < m && ((l += (m - i) * u), (i = m));
                                                let c = Math.min(o.end, p);
                                                for (let e = i; e <= c && !(l >= t); e++) n.push({ index: e, size: u, offset: l, data: s && s[e] }), (l += u + a);
                                            }
                                        }),
                                        f,
                                        n,
                                        a,
                                        o,
                                        u,
                                    );
                                }),
                                E((e) => null !== e),
                                C(),
                            ),
                            eG,
                        );
                        h(
                            I(
                                n,
                                E(s),
                                S((e) => (null == e ? void 0 : e.length)),
                            ),
                            t,
                        ),
                            h(
                                I(
                                    H,
                                    S((e) => e.topListHeight),
                                ),
                                f,
                            ),
                            h(f, a),
                            h(
                                I(
                                    H,
                                    S((e) => [e.top, e.bottom]),
                                ),
                                u,
                            ),
                            h(
                                I(
                                    H,
                                    S((e) => e.items),
                                ),
                                b,
                            );
                        let R = x(
                                I(
                                    H,
                                    E(({ items: e }) => e.length > 0),
                                    B(t, n),
                                    E(([{ items: e }, t]) => e[e.length - 1].originalIndex === t - 1),
                                    S(([, e, t]) => [e - 1, t]),
                                    C(eM),
                                    S(([e]) => e),
                                ),
                            ),
                            k = x(
                                I(
                                    H,
                                    z(200),
                                    E(({ items: e, topItems: t }) => e.length > 0 && e[0].originalIndex === t.length),
                                    S(({ items: e }) => e[0].index),
                                    C(),
                                ),
                            ),
                            O = x(
                                I(
                                    H,
                                    E(({ items: e }) => e.length > 0),
                                    S(({ items: e }) => {
                                        let t = 0,
                                            n = e.length - 1;
                                        for (; 'group' === e[t].type && t < n; ) t++;
                                        for (; 'group' === e[n].type && n > t; ) n--;
                                        return { startIndex: e[t].index, endIndex: e[n].index };
                                    }),
                                    C(eF),
                                ),
                            );
                        return { listState: H, topItemsIndexes: y, endReached: R, startReached: k, rangeChanged: O, itemsRendered: b, ...m };
                    },
                    u(eC, eO, eV, eB, ey, ez, eR, ec),
                    { singleton: !0 },
                ),
                ej = O(
                    ([{ sizes: e, firstItemIndex: t, data: n, gap: o }, { listState: r }, { didMount: l }]) => {
                        let i = v(0);
                        return (
                            h(
                                I(
                                    l,
                                    B(i),
                                    E(([, e]) => 0 !== e),
                                    B(e, t, o, n),
                                    S(([[, e], t, n, o, r = []]) => {
                                        let l = 0;
                                        if (t.groupIndices.length > 0)
                                            for (let n of t.groupIndices) {
                                                if (n - l >= e) break;
                                                l++;
                                            }
                                        let i = e + l;
                                        return eU(
                                            Array.from({ length: i }).map((e, t) => ({ index: t, size: 0, offset: 0, data: r[t] })),
                                            [],
                                            i,
                                            o,
                                            t,
                                            n,
                                        );
                                    }),
                                ),
                                r,
                            ),
                            { initialItemCount: i }
                        );
                    },
                    u(eC, e$, eR),
                    { singleton: !0 },
                ),
                eK = O(
                    ([{ scrollVelocity: e }]) => {
                        let t = v(!1),
                            n = g(),
                            o = v(!1);
                        return (
                            h(
                                I(
                                    e,
                                    B(o, t, n),
                                    E(([e, t]) => !!t),
                                    S(([e, t, n, o]) => {
                                        let { exit: r, enter: l } = t;
                                        if (n) {
                                            if (r(e, o)) return !1;
                                        } else if (l(e, o)) return !0;
                                        return n;
                                    }),
                                    C(),
                                ),
                                t,
                            ),
                            I(P(t, e, n), B(o))(1, ([[e, t, n], o]) => e && o && o.change && o.change(t, n)),
                            { isSeeking: t, scrollSeekConfiguration: o, scrollVelocity: e, scrollSeekRangeChanged: n }
                        );
                    },
                    u(ez),
                    { singleton: !0 },
                ),
                eq = O(([{ topItemsIndexes: e }]) => {
                    let t = v(0);
                    return (
                        h(
                            I(
                                t,
                                E((e) => e > 0),
                                S((e) => Array.from({ length: e }).map((e, t) => t)),
                            ),
                            e,
                        ),
                        { topItemCount: t }
                    );
                }, u(e$)),
                eY = O(
                    ([{ footerHeight: e, headerHeight: t, fixedHeaderHeight: n, fixedFooterHeight: o }, { listState: r }]) => {
                        let l = g(),
                            i = T(
                                I(
                                    P(e, o, t, n, r),
                                    S(([e, t, n, o, r]) => e + t + n + o + r.offsetBottom + r.bottom),
                                ),
                                0,
                            );
                        return h(L(i), l), { totalListHeight: i, totalListHeightChanged: l };
                    },
                    u(q, e$),
                    { singleton: !0 },
                );
            function eZ(e) {
                let t,
                    n = !1;
                return () => (n || ((n = !0), (t = e())), t);
            }
            let eJ = eZ(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)),
                eQ = O(
                    ([
                        { scrollBy: e, scrollTop: t, deviation: n, scrollingInProgress: o },
                        { isScrolling: r, isAtBottom: l, scrollDirection: i, lastJumpDueToItemResize: u },
                        { listState: a },
                        { beforeUnshiftWith: s, shiftWithOffset: c, sizes: d, gap: f },
                        { log: m },
                        { recalcInProgress: p },
                    ]) => {
                        let g = x(
                            I(
                                a,
                                B(u),
                                b(
                                    ([, e, t, n], [{ items: o, totalCount: r, bottom: l, offsetBottom: i }, u]) => {
                                        let a = l + i,
                                            s = 0;
                                        return (
                                            t === r &&
                                                e.length > 0 &&
                                                o.length > 0 &&
                                                (0 !== o[0].originalIndex || 0 !== e[0].originalIndex) &&
                                                0 != (s = a - n) &&
                                                (s += u),
                                            [s, o, r, a]
                                        );
                                    },
                                    [0, [], 0, 0],
                                ),
                                E(([e]) => 0 !== e),
                                B(t, i, o, l, m, p),
                                E(([, e, t, n, , , o]) => !o && !n && 0 !== e && 'up' === t),
                                S(([[e], , , , , t]) => (t('Upward scrolling compensation', { amount: e }, N.DEBUG), e)),
                            ),
                        );
                        function v(t) {
                            t > 0 ? (e(0, { top: -t, behavior: 'auto' }), n(0, 0)) : (n(0, 0), e(0, { top: -t, behavior: 'auto' }));
                        }
                        return (
                            I(g, B(n, r))(1, ([e, t, o]) => {
                                o && eJ() ? n(0, t - e) : v(-e);
                            }),
                            I(
                                P(T(r, !1), n, p),
                                E(([e, t, n]) => !e && !n && 0 !== t),
                                S(([e, t]) => t),
                                z(1),
                            )(1, v),
                            h(
                                I(
                                    c,
                                    S((e) => ({ top: -e })),
                                ),
                                e,
                            ),
                            I(
                                s,
                                B(d, f),
                                S(([e, { lastSize: t, groupIndices: n, sizeTree: o }, r]) => {
                                    if (0 === n.length) return e * (t + r);
                                    {
                                        let l = 0,
                                            i = Q(o, 0),
                                            u = 0,
                                            a = 0;
                                        for (; u < e; ) {
                                            u++, (l += i);
                                            let o = n.length === a + 1 ? 1 / 0 : n[a + 1] - n[a] - 1;
                                            u + o > e && ((l -= i), (o = e - u + 1)), (u += o), (l += o * (t + r)), a++;
                                        }
                                        return l;
                                    }
                                }),
                            )(1, (t) => {
                                n(0, t),
                                    requestAnimationFrame(() => {
                                        e(0, { top: t }),
                                            requestAnimationFrame(() => {
                                                var e;
                                                (e = 0), n(0, 0), p(0, !1);
                                            });
                                    });
                            }),
                            { deviation: n }
                        );
                    },
                    u(q, ez, e$, eC, V, ec),
                ),
                eX = O(
                    ([{ didMount: e }, { scrollTo: t }, { listState: n }]) => {
                        let o = v(0);
                        return (
                            I(
                                e,
                                B(o),
                                E(([, e]) => 0 !== e),
                                S(([, e]) => ({ top: e })),
                            )(1, (e) => {
                                p(
                                    I(
                                        n,
                                        H(1),
                                        E((e) => e.items.length > 1),
                                    ),
                                    () => {
                                        requestAnimationFrame(() => {
                                            t(0, e);
                                        });
                                    },
                                );
                            }),
                            { initialScrollTop: o }
                        );
                    },
                    u(eR, q, e$),
                    { singleton: !0 },
                ),
                e0 = O(
                    ([{ viewportHeight: e }, { totalListHeight: t }]) => {
                        let n = v(!1),
                            o = T(
                                I(
                                    P(n, e, t),
                                    E(([e]) => e),
                                    S(([, e, t]) => Math.max(0, e - t)),
                                    z(0),
                                    C(),
                                ),
                                0,
                            );
                        return { alignToBottom: n, paddingTopAddition: o };
                    },
                    u(q, eY),
                    { singleton: !0 },
                ),
                e1 = O(([{ scrollTo: e, scrollContainerState: t }]) => {
                    let n = g(),
                        o = g(),
                        r = g(),
                        l = v(!1),
                        i = v(void 0);
                    return (
                        h(
                            I(
                                P(n, o),
                                S(([{ viewportHeight: e, scrollTop: t, scrollHeight: n }, { offsetTop: o }]) => ({
                                    scrollTop: Math.max(0, t - o),
                                    scrollHeight: n,
                                    viewportHeight: e,
                                })),
                            ),
                            t,
                        ),
                        h(
                            I(
                                e,
                                B(o),
                                S(([e, { offsetTop: t }]) => ({ ...e, top: e.top + t })),
                            ),
                            r,
                        ),
                        { useWindowScroll: l, customScrollParent: i, windowScrollContainerState: n, windowViewportRect: o, windowScrollTo: r }
                    );
                }, u(q)),
                e2 = ({ itemTop: e, itemBottom: t, viewportTop: n, viewportBottom: o, locationParams: { behavior: r, align: l, ...i } }) =>
                    e < n ? { ...i, behavior: r, align: null != l ? l : 'start' } : t > o ? { ...i, behavior: r, align: null != l ? l : 'end' } : null,
                e5 = O(
                    ([
                        { sizes: e, totalCount: t, gap: n },
                        { scrollTop: o, viewportHeight: r, headerHeight: l, fixedHeaderHeight: i, fixedFooterHeight: u, scrollingInProgress: a },
                        { scrollToIndex: s },
                    ]) => {
                        let c = g();
                        return (
                            h(
                                I(
                                    c,
                                    B(e, r, t, l, i, u, o),
                                    B(n),
                                    S(([[e, t, n, o, r, l, i, u], s]) => {
                                        let { done: c, behavior: d, align: f, calculateViewLocation: h = e2, ...g } = e,
                                            v = ex(e, t, o - 1),
                                            x = ev(v, t.offsetTree, s) + r + l,
                                            T = x + X(t.sizeTree, v)[1],
                                            w = h({
                                                itemTop: x,
                                                itemBottom: T,
                                                viewportTop: u + l,
                                                viewportBottom: u + n - i,
                                                locationParams: { behavior: d, align: f, ...g },
                                            });
                                        return (
                                            w
                                                ? c &&
                                                  p(
                                                      I(
                                                          a,
                                                          E((e) => !1 === e),
                                                          H(m(a) ? 1 : 2),
                                                      ),
                                                      c,
                                                  )
                                                : c && c(),
                                            w
                                        );
                                    }),
                                    E((e) => null !== e),
                                ),
                                s,
                            ),
                            { scrollIntoView: c }
                        );
                    },
                    u(eC, q, ey, e$, V),
                    { singleton: !0 },
                ),
                e3 = O(
                    ([{ sizes: e, sizeRanges: t }, { scrollTop: n }, { initialTopMostItemIndex: o }, { didMount: r }]) => {
                        let l = g(),
                            i = v(void 0);
                        return (
                            I(l, B(e, n))(1, ([e, t, n]) => {
                                e({
                                    ranges: et(t.sizeTree).map(({ k: e, v: t }, n, o) => {
                                        let r = o[n + 1];
                                        return { startIndex: e, endIndex: r ? r.k - 1 : 1 / 0, size: t };
                                    }),
                                    scrollTop: n,
                                });
                            }),
                            h(I(i, E(s), S(e4)), o),
                            h(
                                I(
                                    r,
                                    B(i),
                                    E(([, e]) => void 0 !== e),
                                    C(),
                                    S(([, e]) => e.ranges),
                                ),
                                t,
                            ),
                            { getState: l, restoreStateFrom: i }
                        );
                    },
                    u(eC, q, eB, eR),
                );
            function e4(e) {
                return { offset: e.scrollTop, index: 0, align: 'start' };
            }
            let e7 = O(([e, t, n, o, r, l, i, u, a, s]) => ({ ...e, ...t, ...n, ...o, ...r, ...l, ...i, ...u, ...a, ...s }), u(eV, ej, eR, eK, eY, eX, e0, e1, e5, V)),
                e6 = O(
                    ([
                        {
                            totalCount: e,
                            sizeRanges: t,
                            fixedItemSize: n,
                            defaultItemSize: o,
                            trackItemSizes: r,
                            itemSize: l,
                            data: i,
                            firstItemIndex: u,
                            groupIndices: a,
                            statefulTotalCount: s,
                            gap: c,
                            sizes: d,
                        },
                        { initialTopMostItemIndex: f, scrolledToInitialItem: m },
                        p,
                        g,
                        v,
                        { listState: x, topItemsIndexes: T, ...w },
                        { scrollToIndex: C },
                        E,
                        { topItemCount: y },
                        { groupCounts: b },
                        H,
                    ]) => (
                        h(w.rangeChanged, H.scrollSeekRangeChanged),
                        h(
                            I(
                                H.windowViewportRect,
                                S((e) => e.visibleHeight),
                            ),
                            p.viewportHeight,
                        ),
                        {
                            totalCount: e,
                            data: i,
                            firstItemIndex: u,
                            sizeRanges: t,
                            initialTopMostItemIndex: f,
                            scrolledToInitialItem: m,
                            topItemsIndexes: T,
                            topItemCount: y,
                            groupCounts: b,
                            fixedItemHeight: n,
                            defaultItemHeight: o,
                            gap: c,
                            ...v,
                            statefulTotalCount: s,
                            listState: x,
                            scrollToIndex: C,
                            trackItemSizes: r,
                            itemSize: l,
                            groupIndices: a,
                            ...w,
                            ...H,
                            ...p,
                            sizes: d,
                            ...g,
                        }
                    ),
                    u(eC, eB, q, e3, eL, e$, ey, eQ, eq, eO, e7),
                ),
                e8 = '-webkit-sticky',
                e9 = 'sticky',
                te = eZ(() => {
                    if ('undefined' == typeof document) return e9;
                    let e = document.createElement('div');
                    return (e.style.position = e8), e.style.position === e8 ? e8 : e9;
                });
            function tt(e, t) {
                let n = o.useRef(null),
                    r = o.useCallback(
                        (o) => {
                            let r, l;
                            if (null === o || !o.offsetParent) return;
                            let i = o.getBoundingClientRect(),
                                u = i.width;
                            if (t) {
                                let e = t.getBoundingClientRect(),
                                    n = i.top - e.top;
                                (r = e.height - Math.max(0, n)), (l = n + t.scrollTop);
                            } else (r = window.innerHeight - Math.max(0, i.top)), (l = i.top + window.pageYOffset);
                            (n.current = { offsetTop: l, visibleHeight: r, visibleWidth: u }), e(n.current);
                        },
                        [e, t],
                    ),
                    { callbackRef: l, ref: i } = G(r),
                    u = o.useCallback(() => {
                        r(i.current);
                    }, [r, i]);
                return (
                    o.useEffect(() => {
                        if (!t)
                            return (
                                window.addEventListener('scroll', u),
                                window.addEventListener('resize', u),
                                () => {
                                    window.removeEventListener('scroll', u), window.removeEventListener('resize', u);
                                }
                            );
                        {
                            t.addEventListener('scroll', u);
                            let e = new ResizeObserver(u);
                            return (
                                e.observe(t),
                                () => {
                                    t.removeEventListener('scroll', u), e.unobserve(t);
                                }
                            );
                        }
                    }, [u, t]),
                    l
                );
            }
            let tn = o.createContext(void 0),
                to = o.createContext(void 0);
            function tr(e) {
                return e;
            }
            let tl = O(() => {
                    let e = v((e) => `Item ${e}`),
                        t = v(null),
                        n = v((e) => `Group ${e}`),
                        o = v({}),
                        r = v(tr),
                        l = v('div'),
                        i = v(c),
                        u = (e, t = null) =>
                            T(
                                I(
                                    o,
                                    S((t) => t[e]),
                                    C(),
                                ),
                                t,
                            );
                    return {
                        context: t,
                        itemContent: e,
                        groupContent: n,
                        components: o,
                        computeItemKey: r,
                        headerFooterTag: l,
                        scrollerRef: i,
                        FooterComponent: u('Footer'),
                        HeaderComponent: u('Header'),
                        TopItemListComponent: u('TopItemList'),
                        ListComponent: u('List', 'div'),
                        ItemComponent: u('Item', 'div'),
                        GroupComponent: u('Group', 'div'),
                        ScrollerComponent: u('Scroller', 'div'),
                        EmptyPlaceholder: u('EmptyPlaceholder'),
                        ScrollSeekPlaceholder: u('ScrollSeekPlaceholder'),
                    };
                }),
                ti = O(([e, t]) => ({ ...e, ...t }), u(e6, tl)),
                tu = ({ height: e }) => o.createElement('div', { style: { height: e } }),
                ta = { position: te(), zIndex: 1, overflowAnchor: 'none' },
                ts = { overflowAnchor: 'none' },
                tc = o.memo(function ({ showTopList: e = !1 }) {
                    let t = tE('listState'),
                        n = tC('sizeRanges'),
                        r = tE('useWindowScroll'),
                        l = tE('customScrollParent'),
                        i = tC('windowScrollContainerState'),
                        u = tC('scrollContainerState'),
                        a = tE('itemContent'),
                        s = tE('context'),
                        d = tE('groupContent'),
                        f = tE('trackItemSizes'),
                        m = tE('itemSize'),
                        { callbackRef: h } = U(n, m, f, e ? c : l || r ? i : u, tE('log'), tC('gap'), l),
                        [p, g] = o.useState(0);
                    tS('deviation', (e) => {
                        p !== e && g(e);
                    });
                    let v = tE('EmptyPlaceholder'),
                        x = tE('ScrollSeekPlaceholder') || tu,
                        T = tE('ListComponent'),
                        I = tE('ItemComponent'),
                        w = tE('GroupComponent'),
                        C = tE('computeItemKey'),
                        E = tE('isSeeking'),
                        S = tE('groupIndices').length > 0,
                        y = tE('paddingTopAddition'),
                        b = tE('scrolledToInitialItem'),
                        H = e
                            ? {}
                            : {
                                  boxSizing: 'border-box',
                                  paddingTop: t.offsetTop + y,
                                  paddingBottom: t.offsetBottom,
                                  marginTop: p,
                                  ...(b ? {} : { visibility: 'hidden' }),
                              };
                    return !e && 0 === t.totalCount && v
                        ? o.createElement(v, th(v, s))
                        : o.createElement(
                              T,
                              { ...th(T, s), ref: h, style: H, 'data-test-id': e ? 'virtuoso-top-item-list' : 'virtuoso-item-list' },
                              (e ? t.topItems : t.items).map((e) => {
                                  let n = e.originalIndex,
                                      r = C(n + t.firstItemIndex, e.data, s);
                                  return E
                                      ? o.createElement(x, {
                                            ...th(x, s),
                                            key: r,
                                            index: e.index,
                                            height: e.size,
                                            type: e.type || 'item',
                                            ...('group' === e.type ? {} : { groupIndex: e.groupIndex }),
                                        })
                                      : 'group' === e.type
                                        ? o.createElement(
                                              w,
                                              { ...th(w, s), key: r, 'data-index': n, 'data-known-size': e.size, 'data-item-index': e.index, style: ta },
                                              d(e.index, s),
                                          )
                                        : o.createElement(
                                              I,
                                              {
                                                  ...th(I, s),
                                                  key: r,
                                                  'data-index': n,
                                                  'data-known-size': e.size,
                                                  'data-item-index': e.index,
                                                  'data-item-group-index': e.groupIndex,
                                                  item: e.data,
                                                  style: ts,
                                              },
                                              S ? a(e.index, e.groupIndex, e.data, s) : a(e.index, e.data, s),
                                          );
                              }),
                          );
                }),
                td = { height: '100%', outline: 'none', overflowY: 'auto', position: 'relative', WebkitOverflowScrolling: 'touch' },
                tf = { width: '100%', height: '100%', position: 'absolute', top: 0 },
                tm = { width: '100%', position: te(), top: 0, zIndex: 1 };
            function th(e, t) {
                if ('string' != typeof e) return { context: t };
            }
            let tp = o.memo(function () {
                    let e = tE('HeaderComponent'),
                        t = tC('headerHeight'),
                        n = tE('headerFooterTag'),
                        r = _((e) => t($(e, 'height'))),
                        l = tE('context');
                    return e ? o.createElement(n, { ref: r }, o.createElement(e, th(e, l))) : null;
                }),
                tg = o.memo(function () {
                    let e = tE('FooterComponent'),
                        t = tC('footerHeight'),
                        n = tE('headerFooterTag'),
                        r = _((e) => t($(e, 'height'))),
                        l = tE('context');
                    return e ? o.createElement(n, { ref: r }, o.createElement(e, th(e, l))) : null;
                });
            function tv({ usePublisher: e, useEmitter: t, useEmitterValue: n }) {
                return o.memo(function ({ style: r, children: l, ...i }) {
                    let u = e('scrollContainerState'),
                        a = n('ScrollerComponent'),
                        s = e('smoothScrollTargetReached'),
                        c = n('scrollerRef'),
                        d = n('context'),
                        { scrollerRef: f, scrollByCallback: m, scrollToCallback: h } = K(u, s, a, c);
                    return (
                        t('scrollTo', h),
                        t('scrollBy', m),
                        o.createElement(
                            a,
                            { ref: f, style: { ...td, ...r }, 'data-test-id': 'virtuoso-scroller', 'data-virtuoso-scroller': !0, tabIndex: 0, ...i, ...th(a, d) },
                            l,
                        )
                    );
                });
            }
            function tx({ usePublisher: e, useEmitter: t, useEmitterValue: n }) {
                return o.memo(function ({ style: r, children: l, ...i }) {
                    let u = e('windowScrollContainerState'),
                        a = n('ScrollerComponent'),
                        s = e('smoothScrollTargetReached'),
                        d = n('totalListHeight'),
                        f = n('deviation'),
                        m = n('customScrollParent'),
                        h = n('context'),
                        { scrollerRef: p, scrollByCallback: g, scrollToCallback: v } = K(u, s, a, c, m);
                    return (
                        W(
                            () => (
                                (p.current = m || window),
                                () => {
                                    p.current = null;
                                }
                            ),
                            [p, m],
                        ),
                        t('windowScrollTo', v),
                        t('scrollBy', g),
                        o.createElement(
                            a,
                            { style: { position: 'relative', ...r, ...(0 !== d ? { height: d + f } : {}) }, 'data-virtuoso-scroller': !0, ...i, ...th(a, h) },
                            l,
                        )
                    );
                });
            }
            let tT = ({ children: e }) => {
                    let t = o.useContext(tn),
                        n = tC('viewportHeight'),
                        r = tC('fixedItemHeight'),
                        i = _(l(n, (e) => $(e, 'height')));
                    return (
                        o.useEffect(() => {
                            t && (n(t.viewportHeight), r(t.itemHeight));
                        }, [t, n, r]),
                        o.createElement('div', { style: tf, ref: i, 'data-viewport-type': 'element' }, e)
                    );
                },
                tI = ({ children: e }) => {
                    let t = o.useContext(tn),
                        n = tC('windowViewportRect'),
                        r = tC('fixedItemHeight'),
                        l = tt(n, tE('customScrollParent'));
                    return (
                        o.useEffect(() => {
                            t && (r(t.itemHeight), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: 100 }));
                        }, [t, n, r]),
                        o.createElement('div', { ref: l, style: tf, 'data-viewport-type': 'window' }, e)
                    );
                },
                tw = ({ children: e }) => {
                    let t = tE('TopItemListComponent'),
                        n = tE('headerHeight'),
                        r = { ...tm, marginTop: `${n}px` },
                        l = tE('context');
                    return o.createElement(t || 'div', { style: r, context: l }, e);
                },
                {
                    usePublisher: tC,
                    useEmitterValue: tE,
                    useEmitter: tS,
                } = A(
                    ti,
                    {
                        required: {},
                        optional: {
                            restoreStateFrom: 'restoreStateFrom',
                            context: 'context',
                            followOutput: 'followOutput',
                            itemContent: 'itemContent',
                            groupContent: 'groupContent',
                            overscan: 'overscan',
                            increaseViewportBy: 'increaseViewportBy',
                            totalCount: 'totalCount',
                            groupCounts: 'groupCounts',
                            topItemCount: 'topItemCount',
                            firstItemIndex: 'firstItemIndex',
                            initialTopMostItemIndex: 'initialTopMostItemIndex',
                            components: 'components',
                            atBottomThreshold: 'atBottomThreshold',
                            atTopThreshold: 'atTopThreshold',
                            computeItemKey: 'computeItemKey',
                            defaultItemHeight: 'defaultItemHeight',
                            fixedItemHeight: 'fixedItemHeight',
                            itemSize: 'itemSize',
                            scrollSeekConfiguration: 'scrollSeekConfiguration',
                            headerFooterTag: 'headerFooterTag',
                            data: 'data',
                            initialItemCount: 'initialItemCount',
                            initialScrollTop: 'initialScrollTop',
                            alignToBottom: 'alignToBottom',
                            useWindowScroll: 'useWindowScroll',
                            customScrollParent: 'customScrollParent',
                            scrollerRef: 'scrollerRef',
                            logLevel: 'logLevel',
                        },
                        methods: {
                            scrollToIndex: 'scrollToIndex',
                            scrollIntoView: 'scrollIntoView',
                            scrollTo: 'scrollTo',
                            scrollBy: 'scrollBy',
                            autoscrollToBottom: 'autoscrollToBottom',
                            getState: 'getState',
                        },
                        events: {
                            isScrolling: 'isScrolling',
                            endReached: 'endReached',
                            startReached: 'startReached',
                            rangeChanged: 'rangeChanged',
                            atBottomStateChange: 'atBottomStateChange',
                            atTopStateChange: 'atTopStateChange',
                            totalListHeightChanged: 'totalListHeightChanged',
                            itemsRendered: 'itemsRendered',
                            groupIndices: 'groupIndices',
                        },
                    },
                    o.memo(function (e) {
                        let t = tE('useWindowScroll'),
                            n = tE('topItemsIndexes').length > 0,
                            r = tE('customScrollParent'),
                            l = r || t ? tb : ty,
                            i = r || t ? tI : tT;
                        return o.createElement(
                            l,
                            { ...e },
                            n && o.createElement(tw, null, o.createElement(tc, { showTopList: !0 })),
                            o.createElement(i, null, o.createElement(tp, null), o.createElement(tc, null), o.createElement(tg, null)),
                        );
                    }),
                ),
                ty = tv({ usePublisher: tC, useEmitterValue: tE, useEmitter: tS }),
                tb = tx({ usePublisher: tC, useEmitterValue: tE, useEmitter: tS }),
                tH = { items: [], offsetBottom: 0, offsetTop: 0, top: 0, bottom: 0, itemHeight: 0, itemWidth: 0 },
                tz = { items: [{ index: 0 }], offsetBottom: 0, offsetTop: 0, top: 0, bottom: 0, itemHeight: 0, itemWidth: 0 },
                { round: tR, ceil: tB, floor: tk, min: tL, max: tP } = Math;
            function tO(e, t, n) {
                return Array.from({ length: t - e + 1 }).map((t, o) => ({ index: o + e, data: null == n ? void 0 : n[o + e] }));
            }
            function tM(e, t) {
                return e && e.column === t.column && e.row === t.row;
            }
            function tF(e, t) {
                return e && e.width === t.width && e.height === t.height;
            }
            let tA = O(
                ([
                    { overscan: e, visibleRange: t, listBoundary: n },
                    {
                        scrollTop: o,
                        viewportHeight: r,
                        scrollBy: l,
                        scrollTo: i,
                        smoothScrollTargetReached: u,
                        scrollContainerState: a,
                        footerHeight: c,
                        headerHeight: d,
                    },
                    f,
                    m,
                    { propsReady: p, didMount: w },
                    { windowViewportRect: b, windowScrollTo: H, useWindowScroll: z, customScrollParent: R, windowScrollContainerState: k },
                    O,
                ]) => {
                    let M = v(0),
                        F = v(0),
                        A = v(tH),
                        W = v({ height: 0, width: 0 }),
                        N = v({ height: 0, width: 0 }),
                        D = g(),
                        V = g(),
                        G = v(0),
                        _ = v(void 0),
                        U = v({ row: 0, column: 0 });
                    h(
                        I(
                            w,
                            B(F, _),
                            E(([e, t]) => e && 0 !== t),
                            S(([, e, t]) => ({ items: tO(0, e - 1, t), top: 0, bottom: 0, offsetBottom: 0, offsetTop: 0, itemHeight: 0, itemWidth: 0 })),
                        ),
                        A,
                    ),
                        h(
                            I(
                                P(L(M), t, L(U, tM), L(N, tF), L(W, tF), _),
                                S(([e, [t, n], o, r, l, i]) => {
                                    let { row: u, column: a } = o,
                                        { height: s, width: c } = r,
                                        { width: d } = l;
                                    if (0 === e || 0 === d) return tH;
                                    if (0 === c) {
                                        var f;
                                        return (f = tO(0, 0, i)), { ...tz, items: f };
                                    }
                                    let m = tD(d, c, a),
                                        h = m * tk((t + u) / (s + u)),
                                        p = m * tB((n + u) / (s + u)) - 1;
                                    p = tL(e - 1, tP(p, m - 1));
                                    let g = tO((h = tL(p, tP(0, h))), p, i),
                                        { top: v, bottom: x } = tW(l, o, r, g),
                                        T = tB(e / m);
                                    return { items: g, offsetTop: v, offsetBottom: T * s + (T - 1) * u - x, top: v, bottom: x, itemHeight: s, itemWidth: c };
                                }),
                            ),
                            A,
                        ),
                        h(
                            I(
                                _,
                                E(s),
                                S((e) => e.length),
                            ),
                            M,
                        ),
                        h(
                            I(
                                W,
                                S(({ height: e }) => e),
                            ),
                            r,
                        ),
                        h(
                            I(
                                P(W, N, A, U),
                                S(([e, t, { items: n }, o]) => {
                                    let { top: r, bottom: l } = tW(e, o, t, n);
                                    return [r, l];
                                }),
                                C(eM),
                            ),
                            n,
                        );
                    let $ = v(!1);
                    h(
                        I(
                            o,
                            B($),
                            S(([e, t]) => t || 0 !== e),
                        ),
                        $,
                    );
                    let j = x(
                            I(
                                L(A),
                                E(({ items: e }) => e.length > 0),
                                B(M, $),
                                E(([{ items: e }, t, n]) => n && e[e.length - 1].index === t - 1),
                                S(([, e]) => e - 1),
                                C(),
                            ),
                        ),
                        K = x(
                            I(
                                L(A),
                                E(({ items: e }) => e.length > 0 && 0 === e[0].index),
                                y(0),
                                C(),
                            ),
                        ),
                        q = x(
                            I(
                                L(A),
                                E(({ items: e }) => e.length > 0),
                                S(({ items: e }) => ({ startIndex: e[0].index, endIndex: e[e.length - 1].index })),
                                C(eF),
                            ),
                        );
                    h(q, m.scrollSeekRangeChanged),
                        h(
                            I(
                                D,
                                B(W, N, M, U),
                                S(([e, t, n, o, r]) => {
                                    let l = eS(e),
                                        { align: i, behavior: u, offset: a } = l,
                                        s = l.index;
                                    'LAST' === s && (s = o - 1);
                                    let c = tN(t, r, n, (s = tP(0, s, tL(o - 1, s))));
                                    return (
                                        'end' === i ? (c = tR(c - t.height + n.height)) : 'center' === i && (c = tR(c - t.height / 2 + n.height / 2)),
                                        a && (c += a),
                                        { top: c, behavior: u }
                                    );
                                }),
                            ),
                            i,
                        );
                    let Y = T(
                        I(
                            A,
                            S((e) => e.offsetBottom + e.bottom),
                        ),
                        0,
                    );
                    return (
                        h(
                            I(
                                b,
                                S((e) => ({ width: e.visibleWidth, height: e.visibleHeight })),
                            ),
                            W,
                        ),
                        {
                            data: _,
                            totalCount: M,
                            viewportDimensions: W,
                            itemDimensions: N,
                            scrollTop: o,
                            scrollHeight: V,
                            overscan: e,
                            scrollBy: l,
                            scrollTo: i,
                            scrollToIndex: D,
                            smoothScrollTargetReached: u,
                            windowViewportRect: b,
                            windowScrollTo: H,
                            useWindowScroll: z,
                            customScrollParent: R,
                            windowScrollContainerState: k,
                            deviation: G,
                            scrollContainerState: a,
                            footerHeight: c,
                            headerHeight: d,
                            initialItemCount: F,
                            gap: U,
                            ...m,
                            gridState: A,
                            totalListHeight: Y,
                            ...f,
                            startReached: K,
                            endReached: j,
                            rangeChanged: q,
                            propsReady: p,
                            ...O,
                        }
                    );
                },
                u(eV, q, ez, eK, eR, e1, V),
            );
            function tW(e, t, n, o) {
                let { height: r } = n;
                return void 0 === r || 0 === o.length ? { top: 0, bottom: 0 } : { top: tN(e, t, n, o[0].index), bottom: tN(e, t, n, o[o.length - 1].index) + r };
            }
            function tN(e, t, n, o) {
                let r = tk(o / tD(e.width, n.width, t.column)),
                    l = r * n.height + tP(0, r - 1) * t.row;
                return l > 0 ? l + t.row : l;
            }
            function tD(e, t, n) {
                return tP(1, tk((e + n) / (tk(t) + n)));
            }
            let tV = O(() => {
                    let e = v((e) => `Item ${e}`),
                        t = v({}),
                        n = v(null),
                        o = v('virtuoso-grid-item'),
                        r = v('virtuoso-grid-list'),
                        l = v(tr),
                        i = v('div'),
                        u = v(c),
                        a = (e, n = null) =>
                            T(
                                I(
                                    t,
                                    S((t) => t[e]),
                                    C(),
                                ),
                                n,
                            );
                    return {
                        context: n,
                        itemContent: e,
                        components: t,
                        computeItemKey: l,
                        itemClassName: o,
                        listClassName: r,
                        headerFooterTag: i,
                        scrollerRef: u,
                        FooterComponent: a('Footer'),
                        HeaderComponent: a('Header'),
                        ListComponent: a('List', 'div'),
                        ItemComponent: a('Item', 'div'),
                        ScrollerComponent: a('Scroller', 'div'),
                        ScrollSeekPlaceholder: a('ScrollSeekPlaceholder', 'div'),
                    };
                }),
                tG = O(([e, t]) => ({ ...e, ...t }), u(tA, tV)),
                t_ = o.memo(function () {
                    let e = tZ('gridState'),
                        t = tZ('listClassName'),
                        n = tZ('itemClassName'),
                        r = tZ('itemContent'),
                        l = tZ('computeItemKey'),
                        i = tZ('isSeeking'),
                        u = tY('scrollHeight'),
                        a = tZ('ItemComponent'),
                        s = tZ('ListComponent'),
                        c = tZ('ScrollSeekPlaceholder'),
                        d = tZ('context'),
                        f = tY('itemDimensions'),
                        m = tY('gap'),
                        h = tZ('log'),
                        p = _((e) => {
                            u(e.parentElement.parentElement.scrollHeight);
                            let t = e.firstChild;
                            t && f(t.getBoundingClientRect()),
                                m({ row: t0('row-gap', getComputedStyle(e).rowGap, h), column: t0('column-gap', getComputedStyle(e).columnGap, h) });
                        });
                    return o.createElement(
                        s,
                        { ref: p, className: t, ...th(s, d), style: { paddingTop: e.offsetTop, paddingBottom: e.offsetBottom }, 'data-test-id': 'virtuoso-item-list' },
                        e.items.map((t) => {
                            let u = l(t.index, t.data, d);
                            return i
                                ? o.createElement(c, { key: u, ...th(c, d), index: t.index, height: e.itemHeight, width: e.itemWidth })
                                : o.createElement(a, { ...th(a, d), className: n, 'data-index': t.index, key: u }, r(t.index, t.data, d));
                        }),
                    );
                }),
                tU = o.memo(function () {
                    let e = tZ('HeaderComponent'),
                        t = tY('headerHeight'),
                        n = tZ('headerFooterTag'),
                        r = _((e) => t($(e, 'height'))),
                        l = tZ('context');
                    return e ? o.createElement(n, { ref: r }, o.createElement(e, th(e, l))) : null;
                }),
                t$ = o.memo(function () {
                    let e = tZ('FooterComponent'),
                        t = tY('footerHeight'),
                        n = tZ('headerFooterTag'),
                        r = _((e) => t($(e, 'height'))),
                        l = tZ('context');
                    return e ? o.createElement(n, { ref: r }, o.createElement(e, th(e, l))) : null;
                }),
                tj = ({ children: e }) => {
                    let t = o.useContext(to),
                        n = tY('itemDimensions'),
                        r = tY('viewportDimensions'),
                        l = _((e) => {
                            r(e.getBoundingClientRect());
                        });
                    return (
                        o.useEffect(() => {
                            t && (r({ height: t.viewportHeight, width: t.viewportWidth }), n({ height: t.itemHeight, width: t.itemWidth }));
                        }, [t, r, n]),
                        o.createElement('div', { style: tf, ref: l }, e)
                    );
                },
                tK = ({ children: e }) => {
                    let t = o.useContext(to),
                        n = tY('windowViewportRect'),
                        r = tY('itemDimensions'),
                        l = tt(n, tZ('customScrollParent'));
                    return (
                        o.useEffect(() => {
                            t && (r({ height: t.itemHeight, width: t.itemWidth }), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: t.viewportWidth }));
                        }, [t, n, r]),
                        o.createElement('div', { ref: l, style: tf }, e)
                    );
                },
                {
                    Component: tq,
                    usePublisher: tY,
                    useEmitterValue: tZ,
                    useEmitter: tJ,
                } = A(
                    tG,
                    {
                        optional: {
                            context: 'context',
                            totalCount: 'totalCount',
                            overscan: 'overscan',
                            itemContent: 'itemContent',
                            components: 'components',
                            computeItemKey: 'computeItemKey',
                            data: 'data',
                            initialItemCount: 'initialItemCount',
                            scrollSeekConfiguration: 'scrollSeekConfiguration',
                            headerFooterTag: 'headerFooterTag',
                            listClassName: 'listClassName',
                            itemClassName: 'itemClassName',
                            useWindowScroll: 'useWindowScroll',
                            customScrollParent: 'customScrollParent',
                            scrollerRef: 'scrollerRef',
                            logLevel: 'logLevel',
                        },
                        methods: { scrollTo: 'scrollTo', scrollBy: 'scrollBy', scrollToIndex: 'scrollToIndex' },
                        events: {
                            isScrolling: 'isScrolling',
                            endReached: 'endReached',
                            startReached: 'startReached',
                            rangeChanged: 'rangeChanged',
                            atBottomStateChange: 'atBottomStateChange',
                            atTopStateChange: 'atTopStateChange',
                        },
                    },
                    o.memo(function ({ ...e }) {
                        let t = tZ('useWindowScroll'),
                            n = tZ('customScrollParent'),
                            r = n || t ? tX : tQ,
                            l = n || t ? tK : tj;
                        return o.createElement(r, { ...e }, o.createElement(l, null, o.createElement(tU, null), o.createElement(t_, null), o.createElement(t$, null)));
                    }),
                ),
                tQ = tv({ usePublisher: tY, useEmitterValue: tZ, useEmitter: tJ }),
                tX = tx({ usePublisher: tY, useEmitterValue: tZ, useEmitter: tJ });
            function t0(e, t, n) {
                return ('normal' === t || (null == t ? void 0 : t.endsWith('px')) || n(`${e} was not resolved to pixel value correctly`, t, N.WARN), 'normal' === t)
                    ? 0
                    : parseInt(null != t ? t : '0', 10);
            }
            let t1 = tq,
                t2 = O(() => {
                    let e = v((e) => o.createElement('td', null, 'Item $', e)),
                        t = v(null),
                        n = v(null),
                        r = v(null),
                        l = v({}),
                        i = v(tr),
                        u = v(c),
                        a = (e, t = null) =>
                            T(
                                I(
                                    l,
                                    S((t) => t[e]),
                                    C(),
                                ),
                                t,
                            );
                    return {
                        context: t,
                        itemContent: e,
                        fixedHeaderContent: n,
                        fixedFooterContent: r,
                        components: l,
                        computeItemKey: i,
                        scrollerRef: u,
                        TableComponent: a('Table', 'table'),
                        TableHeadComponent: a('TableHead', 'thead'),
                        TableFooterComponent: a('TableFoot', 'tfoot'),
                        TableBodyComponent: a('TableBody', 'tbody'),
                        TableRowComponent: a('TableRow', 'tr'),
                        ScrollerComponent: a('Scroller', 'div'),
                        EmptyPlaceholder: a('EmptyPlaceholder'),
                        ScrollSeekPlaceholder: a('ScrollSeekPlaceholder'),
                        FillerRow: a('FillerRow'),
                    };
                }),
                t5 = O(([e, t]) => ({ ...e, ...t }), u(e6, t2)),
                t3 = ({ height: e }) => o.createElement('tr', null, o.createElement('td', { style: { height: e } })),
                t4 = ({ height: e }) => o.createElement('tr', null, o.createElement('td', { style: { height: e, padding: 0, border: 0 } })),
                t7 = o.memo(function () {
                    let e = ne('listState'),
                        t = t9('sizeRanges'),
                        n = ne('useWindowScroll'),
                        r = ne('customScrollParent'),
                        l = t9('windowScrollContainerState'),
                        i = t9('scrollContainerState'),
                        u = ne('itemContent'),
                        a = ne('trackItemSizes'),
                        { callbackRef: s, ref: c } = U(t, ne('itemSize'), a, r || n ? l : i, ne('log'), void 0, r),
                        [d, f] = o.useState(0);
                    nt('deviation', (e) => {
                        d !== e && ((c.current.style.marginTop = `${e}px`), f(e));
                    });
                    let m = ne('EmptyPlaceholder'),
                        h = ne('ScrollSeekPlaceholder') || t3,
                        p = ne('FillerRow') || t4,
                        g = ne('TableBodyComponent'),
                        v = ne('TableRowComponent'),
                        x = ne('computeItemKey'),
                        T = ne('isSeeking'),
                        I = ne('paddingTopAddition'),
                        w = ne('firstItemIndex'),
                        C = ne('statefulTotalCount'),
                        E = ne('context');
                    if (0 === C && m) return o.createElement(m, th(m, E));
                    let S = e.offsetTop + I + d,
                        y = e.offsetBottom,
                        b = S > 0 ? o.createElement(p, { height: S, key: 'padding-top', context: E }) : null,
                        H = y > 0 ? o.createElement(p, { height: y, key: 'padding-bottom', context: E }) : null,
                        z = e.items.map((e) => {
                            let t = e.originalIndex,
                                n = x(t + w, e.data, E);
                            return T
                                ? o.createElement(h, { ...th(h, E), key: n, index: e.index, height: e.size, type: e.type || 'item' })
                                : o.createElement(
                                      v,
                                      {
                                          ...th(v, E),
                                          key: n,
                                          'data-index': t,
                                          'data-known-size': e.size,
                                          'data-item-index': e.index,
                                          item: e.data,
                                          style: { overflowAnchor: 'none' },
                                      },
                                      u(e.index, e.data, E),
                                  );
                        });
                    return o.createElement(g, { ref: s, 'data-test-id': 'virtuoso-item-list', ...th(g, E) }, [b, ...z, H]);
                }),
                t6 = ({ children: e }) => {
                    let t = o.useContext(tn),
                        n = t9('viewportHeight'),
                        r = t9('fixedItemHeight'),
                        i = _(l(n, (e) => $(e, 'height')));
                    return (
                        o.useEffect(() => {
                            t && (n(t.viewportHeight), r(t.itemHeight));
                        }, [t, n, r]),
                        o.createElement('div', { style: tf, ref: i, 'data-viewport-type': 'element' }, e)
                    );
                },
                t8 = ({ children: e }) => {
                    let t = o.useContext(tn),
                        n = t9('windowViewportRect'),
                        r = t9('fixedItemHeight'),
                        l = tt(n, ne('customScrollParent'));
                    return (
                        o.useEffect(() => {
                            t && (r(t.itemHeight), n({ offsetTop: 0, visibleHeight: t.viewportHeight, visibleWidth: 100 }));
                        }, [t, n, r]),
                        o.createElement('div', { ref: l, style: tf, 'data-viewport-type': 'window' }, e)
                    );
                },
                {
                    usePublisher: t9,
                    useEmitterValue: ne,
                    useEmitter: nt,
                } = A(
                    t5,
                    {
                        required: {},
                        optional: {
                            context: 'context',
                            followOutput: 'followOutput',
                            firstItemIndex: 'firstItemIndex',
                            itemContent: 'itemContent',
                            fixedHeaderContent: 'fixedHeaderContent',
                            fixedFooterContent: 'fixedFooterContent',
                            overscan: 'overscan',
                            increaseViewportBy: 'increaseViewportBy',
                            totalCount: 'totalCount',
                            topItemCount: 'topItemCount',
                            initialTopMostItemIndex: 'initialTopMostItemIndex',
                            components: 'components',
                            groupCounts: 'groupCounts',
                            atBottomThreshold: 'atBottomThreshold',
                            atTopThreshold: 'atTopThreshold',
                            computeItemKey: 'computeItemKey',
                            defaultItemHeight: 'defaultItemHeight',
                            fixedItemHeight: 'fixedItemHeight',
                            itemSize: 'itemSize',
                            scrollSeekConfiguration: 'scrollSeekConfiguration',
                            data: 'data',
                            initialItemCount: 'initialItemCount',
                            initialScrollTop: 'initialScrollTop',
                            alignToBottom: 'alignToBottom',
                            useWindowScroll: 'useWindowScroll',
                            customScrollParent: 'customScrollParent',
                            scrollerRef: 'scrollerRef',
                            logLevel: 'logLevel',
                        },
                        methods: { scrollToIndex: 'scrollToIndex', scrollIntoView: 'scrollIntoView', scrollTo: 'scrollTo', scrollBy: 'scrollBy' },
                        events: {
                            isScrolling: 'isScrolling',
                            endReached: 'endReached',
                            startReached: 'startReached',
                            rangeChanged: 'rangeChanged',
                            atBottomStateChange: 'atBottomStateChange',
                            atTopStateChange: 'atTopStateChange',
                            totalListHeightChanged: 'totalListHeightChanged',
                            itemsRendered: 'itemsRendered',
                            groupIndices: 'groupIndices',
                        },
                    },
                    o.memo(function (e) {
                        let t = ne('useWindowScroll'),
                            n = ne('customScrollParent'),
                            r = t9('fixedHeaderHeight'),
                            i = t9('fixedFooterHeight'),
                            u = ne('fixedHeaderContent'),
                            a = ne('fixedFooterContent'),
                            s = ne('context'),
                            c = _(l(r, (e) => $(e, 'height'))),
                            d = _(l(i, (e) => $(e, 'height'))),
                            f = n || t ? no : nn,
                            m = n || t ? t8 : t6,
                            h = ne('TableComponent'),
                            p = ne('TableHeadComponent'),
                            g = ne('TableFooterComponent'),
                            v = u ? o.createElement(p, { key: 'TableHead', style: { zIndex: 2, position: 'sticky', top: 0 }, ref: c, ...th(p, s) }, u()) : null,
                            x = a ? o.createElement(g, { key: 'TableFoot', style: { zIndex: 1, position: 'sticky', bottom: 0 }, ref: d, ...th(g, s) }, a()) : null;
                        return o.createElement(
                            f,
                            { ...e },
                            o.createElement(
                                m,
                                null,
                                o.createElement(h, { style: { borderSpacing: 0, overflowAnchor: 'none' }, ...th(h, s) }, [
                                    v,
                                    o.createElement(t7, { key: 'TableBody' }),
                                    x,
                                ]),
                            ),
                        );
                    }),
                ),
                nn = tv({ usePublisher: t9, useEmitterValue: ne, useEmitter: nt }),
                no = tx({ usePublisher: t9, useEmitterValue: ne, useEmitter: nt });
        },
    },
]);
