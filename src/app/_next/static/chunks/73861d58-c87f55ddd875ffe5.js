'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4771],
    {
        87819: (e, t, n) => {
            (n.r(t),
                n.d(t, {
                    Composite: () => L,
                    CompositeItem: () => T,
                    FloatingArrow: () => j,
                    FloatingDelayGroup: () => ee,
                    FloatingFocusManager: () => eO,
                    FloatingList: () => g,
                    FloatingNode: () => J,
                    FloatingOverlay: () => eI,
                    FloatingPortal: () => eR,
                    FloatingTree: () => B,
                    NextFloatingDelayGroup: () => er,
                    arrow: () => a.UE,
                    autoPlacement: () => a.RK,
                    autoUpdate: () => f.ll,
                    computePosition: () => f.rD,
                    detectOverflow: () => f.__,
                    flip: () => a.UU,
                    getOverflowAncestors: () => i.v9,
                    hide: () => a.jD,
                    inline: () => a.mG,
                    inner: () => e3,
                    limitShift: () => a.ER,
                    offset: () => a.cY,
                    platform: () => f.iD,
                    safePolygon: () => te,
                    shift: () => a.BN,
                    size: () => a.Ej,
                    useClick: () => eA,
                    useClientPoint: () => ej,
                    useDelayGroup: () => et,
                    useDelayGroupContext: () => $,
                    useDismiss: () => eK,
                    useFloating: () => e_,
                    useFloatingNodeId: () => _,
                    useFloatingParentNodeId: () => K,
                    useFloatingPortalNode: () => eE,
                    useFloatingRootContext: () => eY,
                    useFloatingTree: () => Y,
                    useFocus: () => eB,
                    useHover: () => Z,
                    useId: () => D,
                    useInnerOffset: () => e7,
                    useInteractions: () => eG,
                    useListItem: () => h,
                    useListNavigation: () => eV,
                    useMergeRefs: () => v,
                    useNextDelayGroup: () => eo,
                    useRole: () => e0,
                    useTransitionStatus: () => e4,
                    useTransitionStyles: () => e5,
                    useTypeahead: () => e9,
                }));
            var r,
                o = n(53548),
                u = n(77710),
                l = n(88800),
                i = n(96583),
                c = n(61357),
                s = n(53405),
                a = n(12485),
                f = n(85364),
                d = n(18793);
            function v(e) {
                let t = o.useRef(void 0),
                    n = o.useCallback((t) => {
                        let n = e.map((e) => {
                            if (null != e) {
                                if ('function' == typeof e) {
                                    let n = e(t);
                                    return 'function' == typeof n
                                        ? n
                                        : () => {
                                              e(null);
                                          };
                                }
                                return (
                                    (e.current = t),
                                    () => {
                                        e.current = null;
                                    }
                                );
                            }
                        });
                        return () => {
                            n.forEach((e) => (null == e ? void 0 : e()));
                        };
                    }, e);
                return o.useMemo(
                    () =>
                        e.every((e) => null == e)
                            ? null
                            : (e) => {
                                  (t.current && (t.current(), (t.current = void 0)), null != e && (t.current = n(e)));
                              },
                    e,
                );
            }
            function m(e, t) {
                let n = e.compareDocumentPosition(t);
                return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY
                    ? -1
                    : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS
                      ? 1
                      : 0;
            }
            let p = o.createContext({ register: () => {}, unregister: () => {}, map: new Map(), elementsRef: { current: [] } });
            function g(e) {
                let { children: t, elementsRef: n, labelsRef: r } = e,
                    [u, i] = o.useState(() => new Set()),
                    c = o.useCallback((e) => {
                        i((t) => new Set(t).add(e));
                    }, []),
                    s = o.useCallback((e) => {
                        i((t) => {
                            let n = new Set(t);
                            return (n.delete(e), n);
                        });
                    }, []),
                    a = o.useMemo(() => {
                        let e = new Map();
                        return (
                            Array.from(u.keys())
                                .sort(m)
                                .forEach((t, n) => {
                                    e.set(t, n);
                                }),
                            e
                        );
                    }, [u]);
                return (0, l.jsx)(p.Provider, {
                    value: o.useMemo(() => ({ register: c, unregister: s, map: a, elementsRef: n, labelsRef: r }), [c, s, a, n, r]),
                    children: t,
                });
            }
            function h(e) {
                void 0 === e && (e = {});
                let { label: t } = e,
                    { register: n, unregister: r, map: l, elementsRef: i, labelsRef: c } = o.useContext(p),
                    [s, a] = o.useState(null),
                    f = o.useRef(null),
                    d = o.useCallback(
                        (e) => {
                            if (((f.current = e), null !== s && ((i.current[s] = e), c))) {
                                var n;
                                let r = void 0 !== t;
                                c.current[s] = r ? t : null != (n = null == e ? void 0 : e.textContent) ? n : null;
                            }
                        },
                        [s, i, c, t],
                    );
                return (
                    (0, u.OS)(() => {
                        let e = f.current;
                        if (e)
                            return (
                                n(e),
                                () => {
                                    r(e);
                                }
                            );
                    }, [n, r]),
                    (0, u.OS)(() => {
                        let e = f.current ? l.get(f.current) : null;
                        null != e && a(e);
                    }, [l]),
                    o.useMemo(() => ({ ref: d, index: null == s ? -1 : s }), [s, d])
                );
            }
            let y = 'active',
                E = 'selected',
                R = 'ArrowLeft',
                b = 'ArrowRight',
                w = 'ArrowUp',
                x = 'ArrowDown';
            function k(e, t) {
                return 'function' == typeof e ? e(t) : e ? o.cloneElement(e, t) : (0, l.jsx)('div', { ...t });
            }
            let S = o.createContext({ activeIndex: 0, onNavigate: () => {} }),
                M = [R, b],
                C = [w, x],
                O = [...M, ...C],
                L = o.forwardRef(function (e, t) {
                    let {
                            render: n,
                            orientation: r = 'both',
                            loop: i = !0,
                            rtl: c = !1,
                            cols: s = 1,
                            disabledIndices: a,
                            activeIndex: f,
                            onNavigate: d,
                            itemSizes: v,
                            dense: m = !1,
                            ...p
                        } = e,
                        [h, y] = o.useState(0),
                        E = null != f ? f : h,
                        L = (0, u.Jt)(null != d ? d : y),
                        T = o.useRef([]),
                        P = n && 'function' != typeof n ? n.props : {},
                        I = o.useMemo(() => ({ activeIndex: E, onNavigate: L }), [E, L]),
                        F = s > 1,
                        A = {
                            ...p,
                            ...P,
                            ref: t,
                            'aria-orientation': 'both' === r ? void 0 : r,
                            onKeyDown(e) {
                                (null == p.onKeyDown || p.onKeyDown(e),
                                    null == P.onKeyDown || P.onKeyDown(e),
                                    (function (e) {
                                        if (!O.includes(e.key)) return;
                                        let t = E,
                                            n = (0, u.Zb)(T, a),
                                            o = (0, u.vB)(T, a),
                                            l = c ? R : b,
                                            f = c ? b : R;
                                        if (F) {
                                            let f = v || Array.from({ length: T.current.length }, () => ({ width: 1, height: 1 })),
                                                d = (0, u.zf)(f, s, m),
                                                p = d.findIndex((e) => null != e && !(0, u.FP)(T, e, a)),
                                                g = d.reduce((e, t, n) => (null == t || (0, u.FP)(T, t, a) ? e : n), -1),
                                                h =
                                                    d[
                                                        (0, u.Kg)(
                                                            { current: d.map((e) => (e ? T.current[e] : null)) },
                                                            {
                                                                event: e,
                                                                orientation: r,
                                                                loop: i,
                                                                rtl: c,
                                                                cols: s,
                                                                disabledIndices: (0, u.Y3)(
                                                                    [
                                                                        ...(('function' != typeof a ? a : null) ||
                                                                            T.current.map((e, t) => ((0, u.FP)(T, t, a) ? t : void 0))),
                                                                        void 0,
                                                                    ],
                                                                    d,
                                                                ),
                                                                minIndex: p,
                                                                maxIndex: g,
                                                                prevIndex: (0, u.fl)(E > o ? n : E, f, d, s, e.key === x ? 'bl' : e.key === l ? 'tr' : 'tl'),
                                                            },
                                                        )
                                                    ];
                                            null != h && (t = h);
                                        }
                                        let d = { horizontal: [l], vertical: [x], both: [l, x] }[r],
                                            p = { horizontal: [f], vertical: [w], both: [f, w] }[r],
                                            g = F ? O : { horizontal: M, vertical: C, both: O }[r];
                                        if (
                                            (t === E &&
                                                [...d, ...p].includes(e.key) &&
                                                (t =
                                                    i && t === o && d.includes(e.key)
                                                        ? n
                                                        : i && t === n && p.includes(e.key)
                                                          ? o
                                                          : (0, u.BF)(T, { startingIndex: t, decrement: p.includes(e.key), disabledIndices: a })),
                                            t !== E && !(0, u.du)(T, t))
                                        ) {
                                            var h;
                                            (e.stopPropagation(), g.includes(e.key) && e.preventDefault(), L(t), null == (h = T.current[t]) || h.focus());
                                        }
                                    })(e));
                            },
                        };
                    return (0, l.jsx)(S.Provider, { value: I, children: (0, l.jsx)(g, { elementsRef: T, children: k(n, A) }) });
                }),
                T = o.forwardRef(function (e, t) {
                    let { render: n, ...r } = e,
                        u = n && 'function' != typeof n ? n.props : {},
                        { activeIndex: l, onNavigate: i } = o.useContext(S),
                        { ref: c, index: s } = h(),
                        a = v([c, t, u.ref]),
                        f = l === s;
                    return k(n, {
                        ...r,
                        ...u,
                        ref: a,
                        tabIndex: f ? 0 : -1,
                        'data-active': f ? '' : void 0,
                        onFocus(e) {
                            (null == r.onFocus || r.onFocus(e), null == u.onFocus || u.onFocus(e), i(s));
                        },
                    });
                }),
                P = { ...(r || (r = n.t(o, 2))) },
                I = !1,
                F = 0,
                A = () => 'floating-ui-' + Math.random().toString(36).slice(2, 6) + F++,
                D =
                    P.useId ||
                    function () {
                        let [e, t] = o.useState(() => (I ? A() : void 0));
                        return (
                            (0, u.OS)(() => {
                                null == e && t(A());
                            }, []),
                            o.useEffect(() => {
                                I = !0;
                            }, []),
                            e
                        );
                    },
                j = o.forwardRef(function (e, t) {
                    let {
                            context: {
                                placement: n,
                                elements: { floating: r },
                                middlewareData: { arrow: c, shift: s },
                            },
                            width: a = 14,
                            height: f = 7,
                            tipRadius: d = 0,
                            strokeWidth: v = 0,
                            staticOffset: m,
                            stroke: p,
                            d: g,
                            style: { transform: h, ...y } = {},
                            ...E
                        } = e,
                        R = D(),
                        [b, w] = o.useState(!1);
                    if (
                        ((0, u.OS)(() => {
                            r && 'rtl' === (0, i.L9)(r).direction && w(!0);
                        }, [r]),
                        !r)
                    )
                        return null;
                    let [x, k] = n.split('-'),
                        S = 'top' === x || 'bottom' === x,
                        M = m;
                    ((S && null != s && s.x) || (!S && null != s && s.y)) && (M = null);
                    let C = 2 * v,
                        O = C / 2,
                        L = (a / 2) * (-(d / 8) + 1),
                        T = ((f / 2) * d) / 4,
                        P = !!g,
                        I = M && 'end' === k ? 'bottom' : 'top',
                        F = M && 'end' === k ? 'right' : 'left';
                    M && b && (F = 'end' === k ? 'left' : 'right');
                    let A = (null == c ? void 0 : c.x) != null ? M || c.x : '',
                        j = (null == c ? void 0 : c.y) != null ? M || c.y : '',
                        N = g || 'M0,0 H' + a + (' L' + (a - L)) + ',' + (f - T) + (' Q' + a / 2 + ',' + f + ' ' + L) + ',' + (f - T) + ' Z',
                        W = {
                            top: P ? 'rotate(180deg)' : '',
                            left: P ? 'rotate(90deg)' : 'rotate(-90deg)',
                            bottom: P ? '' : 'rotate(180deg)',
                            right: P ? 'rotate(-90deg)' : 'rotate(90deg)',
                        }[x];
                    return (0, l.jsxs)('svg', {
                        ...E,
                        'aria-hidden': !0,
                        ref: t,
                        width: P ? a : a + C,
                        height: a,
                        viewBox: '0 0 ' + a + ' ' + (f > a ? f : a),
                        style: {
                            position: 'absolute',
                            pointerEvents: 'none',
                            [F]: A,
                            [I]: j,
                            [x]: S || P ? '100%' : 'calc(100% - ' + C / 2 + 'px)',
                            transform: [W, h].filter((e) => !!e).join(' '),
                            ...y,
                        },
                        children: [
                            C > 0 && (0, l.jsx)('path', { clipPath: 'url(#' + R + ')', fill: 'none', stroke: p, strokeWidth: C + +!g, d: N }),
                            (0, l.jsx)('path', { stroke: C && !g ? E.fill : 'none', d: N }),
                            (0, l.jsx)('clipPath', { id: R, children: (0, l.jsx)('rect', { x: -O, y: O * (P ? -1 : 1), width: a + C, height: a }) }),
                        ],
                    });
                });
            function N() {
                let e = new Map();
                return {
                    emit(t, n) {
                        var r;
                        null == (r = e.get(t)) || r.forEach((e) => e(n));
                    },
                    on(t, n) {
                        (e.has(t) || e.set(t, new Set()), e.get(t).add(n));
                    },
                    off(t, n) {
                        var r;
                        null == (r = e.get(t)) || r.delete(n);
                    },
                };
            }
            let W = o.createContext(null),
                q = o.createContext(null),
                K = () => {
                    var e;
                    return (null == (e = o.useContext(W)) ? void 0 : e.id) || null;
                },
                Y = () => o.useContext(q);
            function _(e) {
                let t = D(),
                    n = Y(),
                    r = K(),
                    o = e || r;
                return (
                    (0, u.OS)(() => {
                        if (!t) return;
                        let e = { id: t, parentId: o };
                        return (
                            null == n || n.addNode(e),
                            () => {
                                null == n || n.removeNode(e);
                            }
                        );
                    }, [n, t, o]),
                    t
                );
            }
            function J(e) {
                let { children: t, id: n } = e,
                    r = K();
                return (0, l.jsx)(W.Provider, { value: o.useMemo(() => ({ id: n, parentId: r }), [n, r]), children: t });
            }
            function B(e) {
                let { children: t } = e,
                    n = o.useRef([]),
                    r = o.useCallback((e) => {
                        n.current = [...n.current, e];
                    }, []),
                    u = o.useCallback((e) => {
                        n.current = n.current.filter((t) => t !== e);
                    }, []),
                    [i] = o.useState(() => N());
                return (0, l.jsx)(q.Provider, { value: o.useMemo(() => ({ nodesRef: n, addNode: r, removeNode: u, events: i }), [r, u, i]), children: t });
            }
            function H(e) {
                return 'data-floating-ui-' + e;
            }
            function G(e) {
                -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
            }
            let X = H('safe-polygon');
            function U(e, t, n) {
                if (n && !(0, u.Go)(n)) return 0;
                if ('number' == typeof e) return e;
                if ('function' == typeof e) {
                    let n = e();
                    return 'number' == typeof n ? n : null == n ? void 0 : n[t];
                }
                return null == e ? void 0 : e[t];
            }
            function z(e) {
                return 'function' == typeof e ? e() : e;
            }
            function Z(e, t) {
                void 0 === t && (t = {});
                let { open: n, onOpenChange: r, dataRef: l, events: c, elements: s } = e,
                    { enabled: a = !0, delay: f = 0, handleClose: d = null, mouseOnly: v = !1, restMs: m = 0, move: p = !0 } = t,
                    g = Y(),
                    h = K(),
                    y = (0, u.SE)(d),
                    E = (0, u.SE)(f),
                    R = (0, u.SE)(n),
                    b = (0, u.SE)(m),
                    w = o.useRef(),
                    x = o.useRef(-1),
                    k = o.useRef(),
                    S = o.useRef(-1),
                    M = o.useRef(!0),
                    C = o.useRef(!1),
                    O = o.useRef(() => {}),
                    L = o.useRef(!1),
                    T = (0, u.Jt)(() => {
                        var e;
                        let t = null == (e = l.current.openEvent) ? void 0 : e.type;
                        return (null == t ? void 0 : t.includes('mouse')) && 'mousedown' !== t;
                    });
                (o.useEffect(() => {
                    if (a)
                        return (
                            c.on('openchange', e),
                            () => {
                                c.off('openchange', e);
                            }
                        );
                    function e(e) {
                        let { open: t } = e;
                        t || (G(x), G(S), (M.current = !0), (L.current = !1));
                    }
                }, [a, c]),
                    o.useEffect(() => {
                        if (!a || !y.current || !n) return;
                        function e(e) {
                            T() && r(!1, e, 'hover');
                        }
                        let t = (0, u.YE)(s.floating).documentElement;
                        return (
                            t.addEventListener('mouseleave', e),
                            () => {
                                t.removeEventListener('mouseleave', e);
                            }
                        );
                    }, [s.floating, n, r, a, y, T]));
                let P = o.useCallback(
                        function (e, t, n) {
                            (void 0 === t && (t = !0), void 0 === n && (n = 'hover'));
                            let o = U(E.current, 'close', w.current);
                            o && !k.current ? (G(x), (x.current = window.setTimeout(() => r(!1, e, n), o))) : t && (G(x), r(!1, e, n));
                        },
                        [E, r],
                    ),
                    I = (0, u.Jt)(() => {
                        (O.current(), (k.current = void 0));
                    }),
                    F = (0, u.Jt)(() => {
                        if (C.current) {
                            let e = (0, u.YE)(s.floating).body;
                            ((e.style.pointerEvents = ''), e.removeAttribute(X), (C.current = !1));
                        }
                    }),
                    A = (0, u.Jt)(() => !!l.current.openEvent && ['click', 'mousedown'].includes(l.current.openEvent.type));
                (o.useEffect(() => {
                    if (a && (0, i.vq)(s.domReference)) {
                        let r = s.domReference,
                            u = s.floating;
                        return (
                            n && r.addEventListener('mouseleave', o),
                            p && r.addEventListener('mousemove', e, { once: !0 }),
                            r.addEventListener('mouseenter', e),
                            r.addEventListener('mouseleave', t),
                            u && (u.addEventListener('mouseleave', o), u.addEventListener('mouseenter', c), u.addEventListener('mouseleave', f)),
                            () => {
                                (n && r.removeEventListener('mouseleave', o),
                                    p && r.removeEventListener('mousemove', e),
                                    r.removeEventListener('mouseenter', e),
                                    r.removeEventListener('mouseleave', t),
                                    u && (u.removeEventListener('mouseleave', o), u.removeEventListener('mouseenter', c), u.removeEventListener('mouseleave', f)));
                            }
                        );
                    }
                    function e(e) {
                        if ((G(x), (M.current = !1), (v && !(0, u.Go)(w.current)) || (z(b.current) > 0 && !U(E.current, 'open')))) return;
                        let t = U(E.current, 'open', w.current);
                        t
                            ? (x.current = window.setTimeout(() => {
                                  R.current || r(!0, e, 'hover');
                              }, t))
                            : n || r(!0, e, 'hover');
                    }
                    function t(e) {
                        if (A()) return void F();
                        O.current();
                        let t = (0, u.YE)(s.floating);
                        if ((G(S), (L.current = !1), y.current && l.current.floatingContext)) {
                            (n || G(x),
                                (k.current = y.current({
                                    ...l.current.floatingContext,
                                    tree: g,
                                    x: e.clientX,
                                    y: e.clientY,
                                    onClose() {
                                        (F(), I(), A() || P(e, !0, 'safe-polygon'));
                                    },
                                })));
                            let r = k.current;
                            (t.addEventListener('mousemove', r),
                                (O.current = () => {
                                    t.removeEventListener('mousemove', r);
                                }));
                            return;
                        }
                        ('touch' === w.current && (0, u.gR)(s.floating, e.relatedTarget)) || P(e);
                    }
                    function o(e) {
                        !A() &&
                            l.current.floatingContext &&
                            (null == y.current ||
                                y.current({
                                    ...l.current.floatingContext,
                                    tree: g,
                                    x: e.clientX,
                                    y: e.clientY,
                                    onClose() {
                                        (F(), I(), A() || P(e));
                                    },
                                })(e));
                    }
                    function c() {
                        G(x);
                    }
                    function f(e) {
                        A() || P(e, !1);
                    }
                }, [s, a, e, v, p, P, I, F, r, n, R, g, E, y, l, A, b]),
                    (0, u.OS)(() => {
                        var e, t;
                        if (a && n && null != (e = y.current) && null != (e = e.__options) && e.blockPointerEvents && T()) {
                            C.current = !0;
                            let e = s.floating;
                            if ((0, i.vq)(s.domReference) && e) {
                                let n = (0, u.YE)(s.floating).body;
                                n.setAttribute(X, '');
                                let r = s.domReference,
                                    o = null == g || null == (t = g.nodesRef.current.find((e) => e.id === h)) || null == (t = t.context) ? void 0 : t.elements.floating;
                                return (
                                    o && (o.style.pointerEvents = ''),
                                    (n.style.pointerEvents = 'none'),
                                    (r.style.pointerEvents = 'auto'),
                                    (e.style.pointerEvents = 'auto'),
                                    () => {
                                        ((n.style.pointerEvents = ''), (r.style.pointerEvents = ''), (e.style.pointerEvents = ''));
                                    }
                                );
                            }
                        }
                    }, [a, n, h, s, g, y, T]),
                    (0, u.OS)(() => {
                        n || ((w.current = void 0), (L.current = !1), I(), F());
                    }, [n, I, F]),
                    o.useEffect(
                        () => () => {
                            (I(), G(x), G(S), F());
                        },
                        [a, s.domReference, I, F],
                    ));
                let D = o.useMemo(() => {
                    function e(e) {
                        w.current = e.pointerType;
                    }
                    return {
                        onPointerDown: e,
                        onPointerEnter: e,
                        onMouseMove(e) {
                            let { nativeEvent: t } = e;
                            function o() {
                                M.current || R.current || r(!0, t, 'hover');
                            }
                            (!v || (0, u.Go)(w.current)) &&
                                !n &&
                                0 !== z(b.current) &&
                                ((L.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                                    (G(S), 'touch' === w.current ? o() : ((L.current = !0), (S.current = window.setTimeout(o, z(b.current))))));
                        },
                    };
                }, [v, r, n, R, b]);
                return o.useMemo(() => (a ? { reference: D } : {}), [a, D]);
            }
            let Q = () => {},
                V = o.createContext({ delay: 0, initialDelay: 0, timeoutMs: 0, currentId: null, setCurrentId: Q, setState: Q, isInstantPhase: !1 }),
                $ = () => o.useContext(V);
            function ee(e) {
                let { children: t, delay: n, timeoutMs: r = 0 } = e,
                    [i, c] = o.useReducer((e, t) => ({ ...e, ...t }), { delay: n, timeoutMs: r, initialDelay: n, currentId: null, isInstantPhase: !1 }),
                    s = o.useRef(null),
                    a = o.useCallback((e) => {
                        c({ currentId: e });
                    }, []);
                return (
                    (0, u.OS)(() => {
                        i.currentId
                            ? null === s.current
                                ? (s.current = i.currentId)
                                : i.isInstantPhase || c({ isInstantPhase: !0 })
                            : (i.isInstantPhase && c({ isInstantPhase: !1 }), (s.current = null));
                    }, [i.currentId, i.isInstantPhase]),
                    (0, l.jsx)(V.Provider, { value: o.useMemo(() => ({ ...i, setState: c, setCurrentId: a }), [i, a]), children: t })
                );
            }
            function et(e, t) {
                void 0 === t && (t = {});
                let { open: n, onOpenChange: r, floatingId: o } = e,
                    { id: l, enabled: i = !0 } = t,
                    c = null != l ? l : o,
                    s = $(),
                    { currentId: a, setCurrentId: f, initialDelay: d, setState: v, timeoutMs: m } = s;
                return (
                    (0, u.OS)(() => {
                        i && a && (v({ delay: { open: 1, close: U(d, 'close') } }), a !== c && r(!1));
                    }, [i, c, r, v, a, d]),
                    (0, u.OS)(() => {
                        function e() {
                            (r(!1), v({ delay: d, currentId: null }));
                        }
                        if (i && a && !n && a === c) {
                            if (m) {
                                let t = window.setTimeout(e, m);
                                return () => {
                                    clearTimeout(t);
                                };
                            }
                            e();
                        }
                    }, [i, n, v, a, c, r, d, m]),
                    (0, u.OS)(() => {
                        i && f !== Q && n && f(c);
                    }, [i, n, f, c]),
                    s
                );
            }
            let en = o.createContext({
                hasProvider: !1,
                timeoutMs: 0,
                delayRef: { current: 0 },
                initialDelayRef: { current: 0 },
                timeoutIdRef: { current: -1 },
                currentIdRef: { current: null },
                currentContextRef: { current: null },
            });
            function er(e) {
                let { children: t, delay: n, timeoutMs: r = 0 } = e,
                    u = o.useRef(n),
                    i = o.useRef(n),
                    c = o.useRef(null),
                    s = o.useRef(null),
                    a = o.useRef(-1);
                return (0, l.jsx)(en.Provider, {
                    value: o.useMemo(
                        () => ({ hasProvider: !0, delayRef: u, initialDelayRef: i, currentIdRef: c, timeoutMs: r, currentContextRef: s, timeoutIdRef: a }),
                        [r],
                    ),
                    children: t,
                });
            }
            function eo(e, t) {
                void 0 === t && (t = {});
                let { open: n, onOpenChange: r, floatingId: l } = e,
                    { enabled: i = !0 } = t,
                    { currentIdRef: c, delayRef: s, timeoutMs: a, initialDelayRef: f, currentContextRef: d, hasProvider: v, timeoutIdRef: m } = o.useContext(en),
                    [p, g] = o.useState(!1);
                return (
                    (0, u.OS)(() => {
                        function e() {
                            var e;
                            (g(!1), null == (e = d.current) || e.setIsInstantPhase(!1), (c.current = null), (d.current = null), (s.current = f.current));
                        }
                        if (i && c.current && !n && c.current === l) {
                            if ((g(!1), a))
                                return (
                                    (m.current = window.setTimeout(e, a)),
                                    () => {
                                        clearTimeout(m.current);
                                    }
                                );
                            e();
                        }
                    }, [i, n, l, c, s, a, f, d, m]),
                    (0, u.OS)(() => {
                        if (!i || !n) return;
                        let e = d.current,
                            t = c.current;
                        ((d.current = { onOpenChange: r, setIsInstantPhase: g }),
                            (c.current = l),
                            (s.current = { open: 0, close: U(f.current, 'close') }),
                            null !== t && t !== l
                                ? (G(m), g(!0), null == e || e.setIsInstantPhase(!0), null == e || e.onOpenChange(!1))
                                : (g(!1), null == e || e.setIsInstantPhase(!1)));
                    }, [i, n, l, r, c, s, a, f, d, m]),
                    (0, u.OS)(
                        () => () => {
                            d.current = null;
                        },
                        [d],
                    ),
                    o.useMemo(() => ({ hasProvider: v, delayRef: s, isInstantPhase: p }), [v, s, p])
                );
            }
            let eu = 0;
            function el(e, t) {
                void 0 === t && (t = {});
                let { preventScroll: n = !1, cancelPrevious: r = !0, sync: o = !1 } = t;
                r && cancelAnimationFrame(eu);
                let u = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
                o ? u() : (eu = requestAnimationFrame(u));
            }
            function ei(e, t) {
                if (!e || !t) return !1;
                let n = null == t.getRootNode ? void 0 : t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && (0, i.Ng)(n)) {
                    let n = t;
                    for (; n;) {
                        if (e === n) return !0;
                        n = n.parentNode || n.host;
                    }
                }
                return !1;
            }
            let ec = { inert: new WeakMap(), 'aria-hidden': new WeakMap(), none: new WeakMap() };
            function es(e) {
                return 'inert' === e ? ec.inert : 'aria-hidden' === e ? ec['aria-hidden'] : ec.none;
            }
            let ea = new WeakSet(),
                ef = {},
                ed = 0;
            function ev(e, t, n) {
                var r;
                (void 0 === t && (t = !1), void 0 === n && (n = !1));
                let o = ((null == (r = e[0]) ? void 0 : r.ownerDocument) || document).body;
                return (function (e, t, n, r) {
                    let o = 'data-floating-ui-inert',
                        u = r ? 'inert' : n ? 'aria-hidden' : null,
                        l = e
                            .map((e) => {
                                if (t.contains(e)) return e;
                                let n = (function e(t) {
                                    return t ? ((0, i.Ng)(t) ? t.host : e(t.parentNode)) : null;
                                })(e);
                                return t.contains(n) ? n : null;
                            })
                            .filter((e) => null != e),
                        c = new Set(),
                        s = new Set(l),
                        a = [];
                    ef[o] || (ef[o] = new WeakMap());
                    let f = ef[o];
                    return (
                        l.forEach(function e(t) {
                            !(!t || c.has(t)) && (c.add(t), t.parentNode && e(t.parentNode));
                        }),
                        (function e(t) {
                            !t ||
                                s.has(t) ||
                                [].forEach.call(t.children, (t) => {
                                    if ('script' !== (0, i.mq)(t))
                                        if (c.has(t)) e(t);
                                        else {
                                            let e = u ? t.getAttribute(u) : null,
                                                n = null !== e && 'false' !== e,
                                                r = es(u),
                                                l = (r.get(t) || 0) + 1,
                                                i = (f.get(t) || 0) + 1;
                                            (r.set(t, l),
                                                f.set(t, i),
                                                a.push(t),
                                                1 === l && n && ea.add(t),
                                                1 === i && t.setAttribute(o, ''),
                                                !n && u && t.setAttribute(u, 'inert' === u ? '' : 'true'));
                                        }
                                });
                        })(t),
                        c.clear(),
                        ed++,
                        () => {
                            (a.forEach((e) => {
                                let t = es(u),
                                    n = (t.get(e) || 0) - 1,
                                    r = (f.get(e) || 0) - 1;
                                (t.set(e, n), f.set(e, r), n || (!ea.has(e) && u && e.removeAttribute(u), ea.delete(e)), r || e.removeAttribute(o));
                            }),
                                --ed || ((ec.inert = new WeakMap()), (ec['aria-hidden'] = new WeakMap()), (ec.none = new WeakMap()), (ea = new WeakSet()), (ef = {})));
                        }
                    );
                })(e.concat(Array.from(o.querySelectorAll('[aria-live],[role="status"],output'))), o, t, n);
            }
            let em = {
                    border: 0,
                    clip: 'rect(0 0 0 0)',
                    height: '1px',
                    margin: '-1px',
                    overflow: 'hidden',
                    padding: 0,
                    position: 'fixed',
                    whiteSpace: 'nowrap',
                    width: '1px',
                    top: 0,
                    left: 0,
                },
                ep = o.forwardRef(function (e, t) {
                    let [n, r] = o.useState();
                    (0, u.OS)(() => {
                        (0, u.nr)() && r('button');
                    }, []);
                    let i = { ref: t, tabIndex: 0, role: n, 'aria-hidden': !n || void 0, [H('focus-guard')]: '', style: em };
                    return (0, l.jsx)('span', { ...e, ...i });
                }),
                eg = { clipPath: 'inset(50%)', position: 'fixed', top: 0, left: 0 },
                eh = o.createContext(null),
                ey = H('portal');
            function eE(e) {
                void 0 === e && (e = {});
                let { id: t, root: n } = e,
                    r = D(),
                    l = eb(),
                    [c, s] = o.useState(null),
                    a = o.useRef(null);
                return (
                    (0, u.OS)(
                        () => () => {
                            (null == c || c.remove(),
                                queueMicrotask(() => {
                                    a.current = null;
                                }));
                        },
                        [c],
                    ),
                    (0, u.OS)(() => {
                        if (!r || a.current) return;
                        let e = t ? document.getElementById(t) : null;
                        if (!e) return;
                        let n = document.createElement('div');
                        ((n.id = r), n.setAttribute(ey, ''), e.appendChild(n), (a.current = n), s(n));
                    }, [t, r]),
                    (0, u.OS)(() => {
                        if (null === n || !r || a.current) return;
                        let e = n || (null == l ? void 0 : l.portalNode);
                        (e && !(0, i.Ll)(e) && (e = e.current), (e = e || document.body));
                        let o = null;
                        t && (((o = document.createElement('div')).id = t), e.appendChild(o));
                        let u = document.createElement('div');
                        ((u.id = r), u.setAttribute(ey, ''), (e = o || e).appendChild(u), (a.current = u), s(u));
                    }, [t, n, r, l]),
                    c
                );
            }
            function eR(e) {
                let { children: t, id: n, root: r, preserveTabOrder: i = !0 } = e,
                    c = eE({ id: n, root: r }),
                    [a, f] = o.useState(null),
                    d = o.useRef(null),
                    v = o.useRef(null),
                    m = o.useRef(null),
                    p = o.useRef(null),
                    g = null == a ? void 0 : a.modal,
                    h = null == a ? void 0 : a.open,
                    y = !!a && !a.modal && a.open && i && !!(r || c);
                return (
                    o.useEffect(() => {
                        if (c && i && !g)
                            return (
                                c.addEventListener('focusin', e, !0),
                                c.addEventListener('focusout', e, !0),
                                () => {
                                    (c.removeEventListener('focusin', e, !0), c.removeEventListener('focusout', e, !0));
                                }
                            );
                        function e(e) {
                            c && (0, u.Qp)(e) && ('focusin' === e.type ? u.yV : u.N)(c);
                        }
                    }, [c, i, g]),
                    o.useEffect(() => {
                        c && (h || (0, u.yV)(c));
                    }, [h, c]),
                    (0, l.jsxs)(eh.Provider, {
                        value: o.useMemo(
                            () => ({
                                preserveTabOrder: i,
                                beforeOutsideRef: d,
                                afterOutsideRef: v,
                                beforeInsideRef: m,
                                afterInsideRef: p,
                                portalNode: c,
                                setFocusManagerState: f,
                            }),
                            [i, c],
                        ),
                        children: [
                            y &&
                                c &&
                                (0, l.jsx)(ep, {
                                    'data-type': 'outside',
                                    ref: d,
                                    onFocus: (e) => {
                                        if ((0, u.Qp)(e, c)) {
                                            var t;
                                            null == (t = m.current) || t.focus();
                                        } else {
                                            let e = a ? a.domReference : null,
                                                t = (0, u.XJ)(e);
                                            null == t || t.focus();
                                        }
                                    },
                                }),
                            y && c && (0, l.jsx)('span', { 'aria-owns': c.id, style: eg }),
                            c && s.createPortal(t, c),
                            y &&
                                c &&
                                (0, l.jsx)(ep, {
                                    'data-type': 'outside',
                                    ref: v,
                                    onFocus: (e) => {
                                        if ((0, u.Qp)(e, c)) {
                                            var t;
                                            null == (t = p.current) || t.focus();
                                        } else {
                                            let t = a ? a.domReference : null,
                                                n = (0, u.vF)(t);
                                            (null == n || n.focus(),
                                                (null == a ? void 0 : a.closeOnFocusOut) && (null == a || a.onOpenChange(!1, e.nativeEvent, 'focus-out')));
                                        }
                                    },
                                }),
                        ],
                    })
                );
            }
            let eb = () => o.useContext(eh);
            function ew(e) {
                return o.useMemo(
                    () => (t) => {
                        e.forEach((e) => {
                            e && (e.current = t);
                        });
                    },
                    e,
                );
            }
            let ex = [];
            function ek() {
                ex = ex.filter((e) => {
                    var t;
                    return null == (t = e.deref()) ? void 0 : t.isConnected;
                });
            }
            function eS() {
                ek();
                let e = ex[ex.length - 1];
                return null == e ? void 0 : e.deref();
            }
            function eM(e, t) {
                var n;
                if (!t.current.includes('floating') && !(null != (n = e.getAttribute('role')) && n.includes('dialog'))) return;
                let r = (0, u.kQ)(),
                    o = (0, c.nq)(e, r).filter((e) => {
                        let t = e.getAttribute('data-tabindex') || '';
                        return (0, c.AO)(e, r) || (e.hasAttribute('data-tabindex') && !t.startsWith('-'));
                    }),
                    l = e.getAttribute('tabindex');
                t.current.includes('floating') || 0 === o.length
                    ? '0' !== l && e.setAttribute('tabindex', '0')
                    : ('-1' !== l || (e.hasAttribute('data-tabindex') && '-1' !== e.getAttribute('data-tabindex'))) &&
                      (e.setAttribute('tabindex', '-1'), e.setAttribute('data-tabindex', '-1'));
            }
            let eC = o.forwardRef(function (e, t) {
                return (0, l.jsx)('button', { ...e, type: 'button', ref: t, tabIndex: -1, style: em });
            });
            function eO(e) {
                let {
                        context: t,
                        children: n,
                        disabled: r = !1,
                        order: s = ['content'],
                        guards: a = !0,
                        initialFocus: f = 0,
                        returnFocus: d = !0,
                        restoreFocus: v = !1,
                        modal: m = !0,
                        visuallyHiddenDismiss: p = !1,
                        closeOnFocusOut: g = !0,
                        outsideElementsInert: h = !1,
                        getInsideElements: y = () => [],
                    } = e,
                    {
                        open: E,
                        onOpenChange: R,
                        events: b,
                        dataRef: w,
                        elements: { domReference: x, floating: k },
                    } = t,
                    S = (0, u.Jt)(() => {
                        var e;
                        return null == (e = w.current.floatingContext) ? void 0 : e.nodeId;
                    }),
                    M = (0, u.Jt)(y),
                    C = 'number' == typeof f && f < 0,
                    O = (0, u.WZ)(x) && C,
                    L = 'undefined' != typeof HTMLElement && 'inert' in HTMLElement.prototype,
                    T = !L || a,
                    P = !T || (L && h),
                    I = (0, u.SE)(s),
                    F = (0, u.SE)(f),
                    A = (0, u.SE)(d),
                    D = Y(),
                    j = eb(),
                    N = o.useRef(null),
                    W = o.useRef(null),
                    q = o.useRef(!1),
                    K = o.useRef(!1),
                    _ = o.useRef(-1),
                    J = o.useRef(-1),
                    B = null != j,
                    X = (0, u.nd)(k),
                    U = (0, u.Jt)(function (e) {
                        return (void 0 === e && (e = X), e ? (0, c.Kr)(e, (0, u.kQ)()) : []);
                    }),
                    z = (0, u.Jt)((e) => {
                        let t = U(e);
                        return I.current
                            .map((e) => (x && 'reference' === e ? x : X && 'floating' === e ? X : t))
                            .filter(Boolean)
                            .flat();
                    });
                (o.useEffect(() => {
                    if (r || !m) return;
                    function e(e) {
                        if ('Tab' === e.key) {
                            (0, u.gR)(X, (0, u.RS)((0, u.YE)(X))) && 0 === U().length && !O && (0, u.jo)(e);
                            let t = z(),
                                n = (0, u.EW)(e);
                            ('reference' === I.current[0] && n === x && ((0, u.jo)(e), e.shiftKey ? el(t[t.length - 1]) : el(t[1])),
                                'floating' === I.current[1] && n === X && e.shiftKey && ((0, u.jo)(e), el(t[0])));
                        }
                    }
                    let t = (0, u.YE)(X);
                    return (
                        t.addEventListener('keydown', e),
                        () => {
                            t.removeEventListener('keydown', e);
                        }
                    );
                }, [r, x, X, m, I, O, U, z]),
                    o.useEffect(() => {
                        if (!r && k)
                            return (
                                k.addEventListener('focusin', e),
                                () => {
                                    k.removeEventListener('focusin', e);
                                }
                            );
                        function e(e) {
                            let t = (0, u.EW)(e),
                                n = U().indexOf(t);
                            -1 !== n && (_.current = n);
                        }
                    }, [r, k, U]),
                    o.useEffect(() => {
                        if (r || !g) return;
                        function e() {
                            ((K.current = !0),
                                setTimeout(() => {
                                    K.current = !1;
                                }));
                        }
                        function t(e) {
                            let t = e.relatedTarget,
                                n = e.currentTarget,
                                r = (0, u.EW)(e);
                            queueMicrotask(() => {
                                let o = S(),
                                    l = !(
                                        (0, u.gR)(x, t) ||
                                        (0, u.gR)(k, t) ||
                                        (0, u.gR)(t, k) ||
                                        (0, u.gR)(null == j ? void 0 : j.portalNode, t) ||
                                        (null != t && t.hasAttribute(H('focus-guard'))) ||
                                        (D &&
                                            ((0, u.CM)(D.nodesRef.current, o).find((e) => {
                                                var n, r;
                                                return (
                                                    (0, u.gR)(null == (n = e.context) ? void 0 : n.elements.floating, t) ||
                                                    (0, u.gR)(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                                                );
                                            }) ||
                                                (0, u.$4)(D.nodesRef.current, o).find((e) => {
                                                    var n, r, o;
                                                    return (
                                                        [
                                                            null == (n = e.context) ? void 0 : n.elements.floating,
                                                            (0, u.nd)(null == (r = e.context) ? void 0 : r.elements.floating),
                                                        ].includes(t) || (null == (o = e.context) ? void 0 : o.elements.domReference) === t
                                                    );
                                                })))
                                    );
                                if ((n === x && X && eM(X, I), v && n !== x && !(null != r && r.isConnected) && (0, u.RS)((0, u.YE)(X)) === (0, u.YE)(X).body)) {
                                    (0, i.sb)(X) && X.focus();
                                    let e = _.current,
                                        t = U(),
                                        n = t[e] || t[t.length - 1] || X;
                                    (0, i.sb)(n) && n.focus();
                                }
                                if (w.current.insideReactTree) {
                                    w.current.insideReactTree = !1;
                                    return;
                                }
                                (O || !m) && t && l && !K.current && t !== eS() && ((q.current = !0), R(!1, e, 'focus-out'));
                            });
                        }
                        let n = !!(!D && j);
                        function o() {
                            (G(J),
                                (w.current.insideReactTree = !0),
                                (J.current = window.setTimeout(() => {
                                    w.current.insideReactTree = !1;
                                })));
                        }
                        if (k && (0, i.sb)(x))
                            return (
                                x.addEventListener('focusout', t),
                                x.addEventListener('pointerdown', e),
                                k.addEventListener('focusout', t),
                                n && k.addEventListener('focusout', o, !0),
                                () => {
                                    (x.removeEventListener('focusout', t),
                                        x.removeEventListener('pointerdown', e),
                                        k.removeEventListener('focusout', t),
                                        n && k.removeEventListener('focusout', o, !0));
                                }
                            );
                    }, [r, x, k, X, m, D, j, R, g, v, U, O, S, I, w]));
                let Z = o.useRef(null),
                    Q = o.useRef(null),
                    V = ew([Z, null == j ? void 0 : j.beforeInsideRef]),
                    $ = ew([Q, null == j ? void 0 : j.afterInsideRef]);
                function ee(e) {
                    return !r && p && m
                        ? (0, l.jsx)(eC, { ref: 'start' === e ? N : W, onClick: (e) => R(!1, e.nativeEvent), children: 'string' == typeof p ? p : 'Dismiss' })
                        : null;
                }
                (o.useEffect(() => {
                    var e, t;
                    if (r || !k) return;
                    let n = Array.from((null == j || null == (e = j.portalNode) ? void 0 : e.querySelectorAll('[' + H('portal') + ']')) || []),
                        o = [
                            k,
                            null ==
                                (t = (D ? (0, u.$4)(D.nodesRef.current, S()) : []).find((e) => {
                                    var t;
                                    return (0, u.WZ)((null == (t = e.context) ? void 0 : t.elements.domReference) || null);
                                })) || null == (t = t.context)
                                ? void 0
                                : t.elements.domReference,
                            ...n,
                            ...M(),
                            N.current,
                            W.current,
                            Z.current,
                            Q.current,
                            null == j ? void 0 : j.beforeOutsideRef.current,
                            null == j ? void 0 : j.afterOutsideRef.current,
                            I.current.includes('reference') || O ? x : null,
                        ].filter((e) => null != e),
                        l = m || O ? ev(o, !P, P) : ev(o);
                    return () => {
                        l();
                    };
                }, [r, x, k, m, I, j, O, T, P, D, S, M]),
                    (0, u.OS)(() => {
                        if (r || !(0, i.sb)(X)) return;
                        let e = (0, u.YE)(X),
                            t = (0, u.RS)(e);
                        queueMicrotask(() => {
                            let e = z(X),
                                n = F.current,
                                r = ('number' == typeof n ? e[n] : n.current) || X,
                                o = (0, u.gR)(X, t);
                            C || o || !E || el(r, { preventScroll: r === X });
                        });
                    }, [r, E, X, C, z, F]),
                    (0, u.OS)(() => {
                        var e;
                        if (r || !X) return;
                        let t = (0, u.YE)(X);
                        function n(e) {
                            let { reason: t, event: n, nested: r } = e;
                            if ((['hover', 'safe-polygon'].includes(t) && 'mouseleave' === n.type && (q.current = !0), 'outside-press' === t))
                                if (r) q.current = !1;
                                else if ((0, u.YF)(n) || (0, u.Pg)(n)) q.current = !1;
                                else {
                                    let e = !1;
                                    (document.createElement('div').focus({
                                        get preventScroll() {
                                            return ((e = !0), !1);
                                        },
                                    }),
                                        e ? (q.current = !1) : (q.current = !0));
                                }
                        }
                        ((e = (0, u.RS)(t)),
                            ek(),
                            e && 'body' !== (0, i.mq)(e) && (ex.push(new WeakRef(e)), ex.length > 20 && (ex = ex.slice(-20))),
                            b.on('openchange', n));
                        let o = t.createElement('span');
                        return (
                            o.setAttribute('tabindex', '-1'),
                            o.setAttribute('aria-hidden', 'true'),
                            Object.assign(o.style, em),
                            B && x && x.insertAdjacentElement('afterend', o),
                            () => {
                                b.off('openchange', n);
                                let e = (0, u.RS)(t),
                                    r =
                                        (0, u.gR)(k, e) ||
                                        (D &&
                                            (0, u.CM)(D.nodesRef.current, S(), !1).some((t) => {
                                                var n;
                                                return (0, u.gR)(null == (n = t.context) ? void 0 : n.elements.floating, e);
                                            })),
                                    l = (function () {
                                        if ('boolean' == typeof A.current) {
                                            let e = x || eS();
                                            return e && e.isConnected ? e : o;
                                        }
                                        return A.current.current || o;
                                    })();
                                queueMicrotask(() => {
                                    let n = (function (e) {
                                        let t = (0, u.kQ)();
                                        return (0, c.AO)(e, t) ? e : (0, c.Kr)(e, t)[0] || e;
                                    })(l);
                                    (A.current && !q.current && (0, i.sb)(n) && (n === e || e === t.body || r) && n.focus({ preventScroll: !0 }), o.remove());
                                });
                            }
                        );
                    }, [r, k, X, A, w, b, D, B, x, S]),
                    o.useEffect(
                        () => (
                            queueMicrotask(() => {
                                q.current = !1;
                            }),
                            () => {
                                queueMicrotask(ek);
                            }
                        ),
                        [r],
                    ),
                    (0, u.OS)(() => {
                        if (!r && j)
                            return (
                                j.setFocusManagerState({ modal: m, closeOnFocusOut: g, open: E, onOpenChange: R, domReference: x }),
                                () => {
                                    j.setFocusManagerState(null);
                                }
                            );
                    }, [r, j, m, E, R, g, x]),
                    (0, u.OS)(() => {
                        !r && X && eM(X, I);
                    }, [r, X, I]));
                let et = !r && T && (!m || !O) && (B || m);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        et &&
                            (0, l.jsx)(ep, {
                                'data-type': 'inside',
                                ref: V,
                                onFocus: (e) => {
                                    if (m) {
                                        let e = z();
                                        el('reference' === s[0] ? e[0] : e[e.length - 1]);
                                    } else if (null != j && j.preserveTabOrder && j.portalNode)
                                        if (((q.current = !1), (0, u.Qp)(e, j.portalNode))) {
                                            let e = (0, u.vF)(x);
                                            null == e || e.focus();
                                        } else {
                                            var t;
                                            null == (t = j.beforeOutsideRef.current) || t.focus();
                                        }
                                },
                            }),
                        !O && ee('start'),
                        n,
                        ee('end'),
                        et &&
                            (0, l.jsx)(ep, {
                                'data-type': 'inside',
                                ref: $,
                                onFocus: (e) => {
                                    if (m) el(z()[0]);
                                    else if (null != j && j.preserveTabOrder && j.portalNode)
                                        if ((g && (q.current = !0), (0, u.Qp)(e, j.portalNode))) {
                                            let e = (0, u.XJ)(x);
                                            null == e || e.focus();
                                        } else {
                                            var t;
                                            null == (t = j.afterOutsideRef.current) || t.focus();
                                        }
                                },
                            }),
                    ],
                });
            }
            let eL = 0,
                eT = '--floating-ui-scrollbar-width',
                eP = () => {},
                eI = o.forwardRef(function (e, t) {
                    let { lockScroll: n = !1, ...r } = e;
                    return (
                        (0, u.OS)(() => {
                            if (n)
                                return (
                                    1 == ++eL &&
                                        (eP = (function () {
                                            let e = (0, u.uo)(),
                                                t = /iP(hone|ad|od)|iOS/.test(e) || ('MacIntel' === e && navigator.maxTouchPoints > 1),
                                                n = document.body.style,
                                                r =
                                                    Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft
                                                        ? 'paddingLeft'
                                                        : 'paddingRight',
                                                o = window.innerWidth - document.documentElement.clientWidth,
                                                l = n.left ? parseFloat(n.left) : window.scrollX,
                                                i = n.top ? parseFloat(n.top) : window.scrollY;
                                            if (((n.overflow = 'hidden'), n.setProperty(eT, o + 'px'), o && (n[r] = o + 'px'), t)) {
                                                var c, s;
                                                let e = (null == (c = window.visualViewport) ? void 0 : c.offsetLeft) || 0;
                                                Object.assign(n, {
                                                    position: 'fixed',
                                                    top: -(i - Math.floor((null == (s = window.visualViewport) ? void 0 : s.offsetTop) || 0)) + 'px',
                                                    left: -(l - Math.floor(e)) + 'px',
                                                    right: '0',
                                                });
                                            }
                                            return () => {
                                                (Object.assign(n, { overflow: '', [r]: '' }),
                                                    n.removeProperty(eT),
                                                    t && (Object.assign(n, { position: '', top: '', left: '', right: '' }), window.scrollTo(l, i)));
                                            };
                                        })()),
                                    () => {
                                        0 == --eL && eP();
                                    }
                                );
                        }, [n]),
                        (0, l.jsx)('div', { ref: t, ...r, style: { position: 'fixed', overflow: 'auto', top: 0, right: 0, bottom: 0, left: 0, ...r.style } })
                    );
                });
            function eF(e) {
                return (0, i.sb)(e.target) && 'BUTTON' === e.target.tagName;
            }
            function eA(e, t) {
                void 0 === t && (t = {});
                let {
                        open: n,
                        onOpenChange: r,
                        dataRef: l,
                        elements: { domReference: c },
                    } = e,
                    { enabled: s = !0, event: a = 'click', toggle: f = !0, ignoreMouse: d = !1, keyboardHandlers: v = !0, stickIfOpen: m = !0 } = t,
                    p = o.useRef(),
                    g = o.useRef(!1),
                    h = o.useMemo(
                        () => ({
                            onPointerDown(e) {
                                p.current = e.pointerType;
                            },
                            onMouseDown(e) {
                                let t = p.current;
                                0 === e.button &&
                                    'click' !== a &&
                                    (((0, u.Go)(t, !0) && d) ||
                                        (n && f && (!l.current.openEvent || !m || 'mousedown' === l.current.openEvent.type)
                                            ? r(!1, e.nativeEvent, 'click')
                                            : (e.preventDefault(), r(!0, e.nativeEvent, 'click'))));
                            },
                            onClick(e) {
                                let t = p.current;
                                if ('mousedown' === a && p.current) {
                                    p.current = void 0;
                                    return;
                                }
                                ((0, u.Go)(t, !0) && d) ||
                                    (n && f && (!l.current.openEvent || !m || 'click' === l.current.openEvent.type)
                                        ? r(!1, e.nativeEvent, 'click')
                                        : r(!0, e.nativeEvent, 'click'));
                            },
                            onKeyDown(e) {
                                ((p.current = void 0),
                                    !(e.defaultPrevented || !v || eF(e)) &&
                                        (' ' !== e.key || (0, u.$u)(c) || (e.preventDefault(), (g.current = !0)),
                                        ((0, i.sb)(e.target) && 'A' === e.target.tagName) ||
                                            'Enter' !== e.key ||
                                            (n && f ? r(!1, e.nativeEvent, 'click') : r(!0, e.nativeEvent, 'click'))));
                            },
                            onKeyUp(e) {
                                !(e.defaultPrevented || !v || eF(e) || (0, u.$u)(c)) &&
                                    ' ' === e.key &&
                                    g.current &&
                                    ((g.current = !1), n && f ? r(!1, e.nativeEvent, 'click') : r(!0, e.nativeEvent, 'click'));
                            },
                        }),
                        [l, c, a, d, v, r, n, m, f],
                    );
                return o.useMemo(() => (s ? { reference: h } : {}), [s, h]);
            }
            function eD(e) {
                return null != e && null != e.clientX;
            }
            function ej(e, t) {
                void 0 === t && (t = {});
                let {
                        open: n,
                        dataRef: r,
                        elements: { floating: l, domReference: c },
                        refs: s,
                    } = e,
                    { enabled: a = !0, axis: f = 'both', x: d = null, y: v = null } = t,
                    m = o.useRef(!1),
                    p = o.useRef(null),
                    [g, h] = o.useState(),
                    [y, E] = o.useState([]),
                    R = (0, u.Jt)((e, t) => {
                        if (!m.current && (!r.current.openEvent || eD(r.current.openEvent))) {
                            var n;
                            let o, u, l;
                            s.setPositionReference(
                                ((n = { x: e, y: t, axis: f, dataRef: r, pointerType: g }),
                                (o = null),
                                (u = null),
                                (l = !1),
                                {
                                    contextElement: c || void 0,
                                    getBoundingClientRect() {
                                        var e;
                                        let t = (null == c ? void 0 : c.getBoundingClientRect()) || { width: 0, height: 0, x: 0, y: 0 },
                                            r = 'x' === n.axis || 'both' === n.axis,
                                            i = 'y' === n.axis || 'both' === n.axis,
                                            s =
                                                ['mouseenter', 'mousemove'].includes((null == (e = n.dataRef.current.openEvent) ? void 0 : e.type) || '') &&
                                                'touch' !== n.pointerType,
                                            a = t.width,
                                            f = t.height,
                                            d = t.x,
                                            v = t.y;
                                        return (
                                            null == o && n.x && r && (o = t.x - n.x),
                                            null == u && n.y && i && (u = t.y - n.y),
                                            (d -= o || 0),
                                            (v -= u || 0),
                                            (a = 0),
                                            (f = 0),
                                            !l || s
                                                ? ((a = 'y' === n.axis ? t.width : 0),
                                                  (f = 'x' === n.axis ? t.height : 0),
                                                  (d = r && null != n.x ? n.x : d),
                                                  (v = i && null != n.y ? n.y : v))
                                                : l && !s && ((f = 'x' === n.axis ? t.height : f), (a = 'y' === n.axis ? t.width : a)),
                                            (l = !0),
                                            { width: a, height: f, x: d, y: v, top: v, right: d + a, bottom: v + f, left: d }
                                        );
                                    },
                                }),
                            );
                        }
                    }),
                    b = (0, u.Jt)((e) => {
                        null == d && null == v && (n ? p.current || E([]) : R(e.clientX, e.clientY));
                    }),
                    w = (0, u.Go)(g) ? l : n,
                    x = o.useCallback(() => {
                        if (!w || !a || null != d || null != v) return;
                        let e = (0, i.zk)(l);
                        function t(n) {
                            let r = (0, u.EW)(n);
                            (0, u.gR)(l, r) ? (e.removeEventListener('mousemove', t), (p.current = null)) : R(n.clientX, n.clientY);
                        }
                        if (!r.current.openEvent || eD(r.current.openEvent)) {
                            e.addEventListener('mousemove', t);
                            let n = () => {
                                (e.removeEventListener('mousemove', t), (p.current = null));
                            };
                            return ((p.current = n), n);
                        }
                        s.setPositionReference(c);
                    }, [w, a, d, v, l, r, s, c, R]);
                (o.useEffect(() => x(), [x, y]),
                    o.useEffect(() => {
                        a && !l && (m.current = !1);
                    }, [a, l]),
                    o.useEffect(() => {
                        !a && n && (m.current = !0);
                    }, [a, n]),
                    (0, u.OS)(() => {
                        a && (null != d || null != v) && ((m.current = !1), R(d, v));
                    }, [a, d, v, R]));
                let k = o.useMemo(() => {
                    function e(e) {
                        let { pointerType: t } = e;
                        h(t);
                    }
                    return { onPointerDown: e, onPointerEnter: e, onMouseMove: b, onMouseEnter: b };
                }, [b]);
                return o.useMemo(() => (a ? { reference: k } : {}), [a, k]);
            }
            let eN = { pointerdown: 'onPointerDown', mousedown: 'onMouseDown', click: 'onClick' },
                eW = { pointerdown: 'onPointerDownCapture', mousedown: 'onMouseDownCapture', click: 'onClickCapture' },
                eq = (e) => {
                    var t, n;
                    return {
                        escapeKey: 'boolean' == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
                        outsidePress: 'boolean' == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
                    };
                };
            function eK(e, t) {
                void 0 === t && (t = {});
                let { open: n, onOpenChange: r, elements: l, dataRef: c } = e,
                    {
                        enabled: s = !0,
                        escapeKey: a = !0,
                        outsidePress: f = !0,
                        outsidePressEvent: d = 'pointerdown',
                        referencePress: v = !1,
                        referencePressEvent: m = 'pointerdown',
                        ancestorScroll: p = !1,
                        bubbles: g,
                        capture: h,
                    } = t,
                    y = Y(),
                    E = (0, u.Jt)('function' == typeof f ? f : () => !1),
                    R = 'function' == typeof f ? E : f,
                    b = o.useRef(!1),
                    { escapeKey: w, outsidePress: x } = eq(g),
                    { escapeKey: k, outsidePress: S } = eq(h),
                    M = o.useRef(!1),
                    C = (0, u.Jt)((e) => {
                        var t;
                        if (!n || !s || !a || 'Escape' !== e.key || M.current) return;
                        let o = null == (t = c.current.floatingContext) ? void 0 : t.nodeId,
                            l = y ? (0, u.CM)(y.nodesRef.current, o) : [];
                        if (!w && (e.stopPropagation(), l.length > 0)) {
                            let e = !0;
                            if (
                                (l.forEach((t) => {
                                    var n;
                                    if (null != (n = t.context) && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
                                        e = !1;
                                        return;
                                    }
                                }),
                                !e)
                            )
                                return;
                        }
                        r(!1, (0, u.O_)(e) ? e.nativeEvent : e, 'escape-key');
                    }),
                    O = (0, u.Jt)((e) => {
                        var t;
                        let n = () => {
                            var t;
                            (C(e), null == (t = (0, u.EW)(e)) || t.removeEventListener('keydown', n));
                        };
                        null == (t = (0, u.EW)(e)) || t.addEventListener('keydown', n);
                    }),
                    L = (0, u.Jt)((e) => {
                        var t;
                        let n = c.current.insideReactTree;
                        c.current.insideReactTree = !1;
                        let o = b.current;
                        if (((b.current = !1), ('click' === d && o) || n || ('function' == typeof R && !R(e)))) return;
                        let s = (0, u.EW)(e),
                            a = '[' + H('inert') + ']',
                            f = (0, u.YE)(l.floating).querySelectorAll(a),
                            v = (0, i.vq)(s) ? s : null;
                        for (; v && !(0, i.eu)(v);) {
                            let e = (0, i.$4)(v);
                            if ((0, i.eu)(e) || !(0, i.vq)(e)) break;
                            v = e;
                        }
                        if (f.length && (0, i.vq)(s) && !(0, u.tZ)(s) && !(0, u.gR)(s, l.floating) && Array.from(f).every((e) => !(0, u.gR)(v, e))) return;
                        if ((0, i.sb)(s) && I) {
                            let t = (0, i.eu)(s),
                                n = (0, i.L9)(s),
                                r = /auto|scroll/,
                                o = t || r.test(n.overflowX),
                                u = t || r.test(n.overflowY),
                                l = o && s.clientWidth > 0 && s.scrollWidth > s.clientWidth,
                                c = u && s.clientHeight > 0 && s.scrollHeight > s.clientHeight,
                                a = 'rtl' === n.direction,
                                f = c && (a ? e.offsetX <= s.offsetWidth - s.clientWidth : e.offsetX > s.clientWidth),
                                d = l && e.offsetY > s.clientHeight;
                            if (f || d) return;
                        }
                        let m = null == (t = c.current.floatingContext) ? void 0 : t.nodeId,
                            p =
                                y &&
                                (0, u.CM)(y.nodesRef.current, m).some((t) => {
                                    var n;
                                    return (0, u.F2)(e, null == (n = t.context) ? void 0 : n.elements.floating);
                                });
                        if ((0, u.F2)(e, l.floating) || (0, u.F2)(e, l.domReference) || p) return;
                        let g = y ? (0, u.CM)(y.nodesRef.current, m) : [];
                        if (g.length > 0) {
                            let e = !0;
                            if (
                                (g.forEach((t) => {
                                    var n;
                                    if (null != (n = t.context) && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
                                        e = !1;
                                        return;
                                    }
                                }),
                                !e)
                            )
                                return;
                        }
                        r(!1, e, 'outside-press');
                    }),
                    T = (0, u.Jt)((e) => {
                        var t;
                        let n = () => {
                            var t;
                            (L(e), null == (t = (0, u.EW)(e)) || t.removeEventListener(d, n));
                        };
                        null == (t = (0, u.EW)(e)) || t.addEventListener(d, n);
                    });
                (o.useEffect(() => {
                    if (!n || !s) return;
                    ((c.current.__escapeKeyBubbles = w), (c.current.__outsidePressBubbles = x));
                    let e = -1;
                    function t(e) {
                        r(!1, e, 'ancestor-scroll');
                    }
                    function o() {
                        (window.clearTimeout(e), (M.current = !0));
                    }
                    function f() {
                        e = window.setTimeout(
                            () => {
                                M.current = !1;
                            },
                            5 * !!(0, i.Tc)(),
                        );
                    }
                    let v = (0, u.YE)(l.floating);
                    (a && (v.addEventListener('keydown', k ? O : C, k), v.addEventListener('compositionstart', o), v.addEventListener('compositionend', f)),
                        R && v.addEventListener(d, S ? T : L, S));
                    let m = [];
                    return (
                        p &&
                            ((0, i.vq)(l.domReference) && (m = (0, i.v9)(l.domReference)),
                            (0, i.vq)(l.floating) && (m = m.concat((0, i.v9)(l.floating))),
                            !(0, i.vq)(l.reference) && l.reference && l.reference.contextElement && (m = m.concat((0, i.v9)(l.reference.contextElement)))),
                        (m = m.filter((e) => {
                            var t;
                            return e !== (null == (t = v.defaultView) ? void 0 : t.visualViewport);
                        })).forEach((e) => {
                            e.addEventListener('scroll', t);
                        }),
                        () => {
                            (a &&
                                (v.removeEventListener('keydown', k ? O : C, k),
                                v.removeEventListener('compositionstart', o),
                                v.removeEventListener('compositionend', f)),
                                R && v.removeEventListener(d, S ? T : L, S),
                                m.forEach((e) => {
                                    e.removeEventListener('scroll', t);
                                }),
                                window.clearTimeout(e));
                        }
                    );
                }, [c, l, a, R, d, n, r, p, s, w, x, C, k, O, L, S, T]),
                    o.useEffect(() => {
                        c.current.insideReactTree = !1;
                    }, [c, R, d]));
                let P = o.useMemo(
                        () => ({
                            onKeyDown: C,
                            ...(v && {
                                [eN[m]]: (e) => {
                                    r(!1, e.nativeEvent, 'reference-press');
                                },
                                ...('click' !== m && {
                                    onClick(e) {
                                        r(!1, e.nativeEvent, 'reference-press');
                                    },
                                }),
                            }),
                        }),
                        [C, r, v, m],
                    ),
                    I = o.useMemo(() => {
                        function e(e) {
                            0 === e.button && (b.current = !0);
                        }
                        return {
                            onKeyDown: C,
                            onMouseDown: e,
                            onMouseUp: e,
                            [eW[d]]: () => {
                                c.current.insideReactTree = !0;
                            },
                        };
                    }, [C, d, c]);
                return o.useMemo(() => (s ? { reference: P, floating: I } : {}), [s, P, I]);
            }
            function eY(e) {
                let { open: t = !1, onOpenChange: n, elements: r } = e,
                    l = D(),
                    i = o.useRef({}),
                    [c] = o.useState(() => N()),
                    s = null != K(),
                    [a, f] = o.useState(r.reference),
                    d = (0, u.Jt)((e, t, r) => {
                        ((i.current.openEvent = e ? t : void 0), c.emit('openchange', { open: e, event: t, reason: r, nested: s }), null == n || n(e, t, r));
                    }),
                    v = o.useMemo(() => ({ setPositionReference: f }), []),
                    m = o.useMemo(() => ({ reference: a || r.reference || null, floating: r.floating || null, domReference: r.reference }), [a, r.reference, r.floating]);
                return o.useMemo(() => ({ dataRef: i, open: t, onOpenChange: d, elements: m, events: c, floatingId: l, refs: v }), [t, d, m, c, l, v]);
            }
            function e_(e) {
                var t, n;
                let { elements: r, ...l } = void 0 === e ? {} : e,
                    { nodeId: c } = l,
                    s = eY({
                        ...l,
                        elements: {
                            reference: null != (t = null == r ? void 0 : r.reference) ? t : null,
                            floating: null != (n = null == r ? void 0 : r.floating) ? n : null,
                        },
                    }),
                    f = l.rootContext || s,
                    d = f.elements,
                    [v, m] = o.useState(null),
                    [p, g] = o.useState(null),
                    h = (null == d ? void 0 : d.domReference) || v,
                    y = o.useRef(null),
                    E = Y();
                (0, u.OS)(() => {
                    h && (y.current = h);
                }, [h]);
                let R = (0, a.we)({ ...l, elements: { ...d, ...(p && { reference: p }) } }),
                    b = o.useCallback(
                        (e) => {
                            let t = (0, i.vq)(e)
                                ? { getBoundingClientRect: () => e.getBoundingClientRect(), getClientRects: () => e.getClientRects(), contextElement: e }
                                : e;
                            (g(t), R.refs.setReference(t));
                        },
                        [R.refs],
                    ),
                    w = o.useCallback(
                        (e) => {
                            (((0, i.vq)(e) || null === e) && ((y.current = e), m(e)),
                                ((0, i.vq)(R.refs.reference.current) || null === R.refs.reference.current || (null !== e && !(0, i.vq)(e))) && R.refs.setReference(e));
                        },
                        [R.refs],
                    ),
                    x = o.useMemo(() => ({ ...R.refs, setReference: w, setPositionReference: b, domReference: y }), [R.refs, w, b]),
                    k = o.useMemo(() => ({ ...R.elements, domReference: h }), [R.elements, h]),
                    S = o.useMemo(() => ({ ...R, ...f, refs: x, elements: k, nodeId: c }), [R, x, k, c, f]);
                return (
                    (0, u.OS)(() => {
                        f.dataRef.current.floatingContext = S;
                        let e = null == E ? void 0 : E.nodesRef.current.find((e) => e.id === c);
                        e && (e.context = S);
                    }),
                    o.useMemo(() => ({ ...R, context: S, refs: x, elements: k }), [R, x, k, S])
                );
            }
            function eJ() {
                return (0, u.cX)() && (0, u.nr)();
            }
            function eB(e, t) {
                void 0 === t && (t = {});
                let { open: n, onOpenChange: r, events: l, dataRef: c, elements: s } = e,
                    { enabled: a = !0, visibleOnly: f = !0 } = t,
                    d = o.useRef(!1),
                    v = o.useRef(-1),
                    m = o.useRef(!0);
                (o.useEffect(() => {
                    if (!a) return;
                    let e = (0, i.zk)(s.domReference);
                    function t() {
                        !n && (0, i.sb)(s.domReference) && s.domReference === (0, u.RS)((0, u.YE)(s.domReference)) && (d.current = !0);
                    }
                    function r() {
                        m.current = !0;
                    }
                    function o() {
                        m.current = !1;
                    }
                    return (
                        e.addEventListener('blur', t),
                        eJ() && (e.addEventListener('keydown', r, !0), e.addEventListener('pointerdown', o, !0)),
                        () => {
                            (e.removeEventListener('blur', t), eJ() && (e.removeEventListener('keydown', r, !0), e.removeEventListener('pointerdown', o, !0)));
                        }
                    );
                }, [s.domReference, n, a]),
                    o.useEffect(() => {
                        if (a)
                            return (
                                l.on('openchange', e),
                                () => {
                                    l.off('openchange', e);
                                }
                            );
                        function e(e) {
                            let { reason: t } = e;
                            ('reference-press' === t || 'escape-key' === t) && (d.current = !0);
                        }
                    }, [l, a]),
                    o.useEffect(
                        () => () => {
                            G(v);
                        },
                        [],
                    ));
                let p = o.useMemo(
                    () => ({
                        onMouseLeave() {
                            d.current = !1;
                        },
                        onFocus(e) {
                            if (d.current) return;
                            let t = (0, u.EW)(e.nativeEvent);
                            if (f && (0, i.vq)(t)) {
                                if (eJ() && !e.relatedTarget) {
                                    if (!m.current && !(0, u.$u)(t)) return;
                                } else if (!(0, u.em)(t)) return;
                            }
                            r(!0, e.nativeEvent, 'focus');
                        },
                        onBlur(e) {
                            d.current = !1;
                            let t = e.relatedTarget,
                                n = e.nativeEvent,
                                o = (0, i.vq)(t) && t.hasAttribute(H('focus-guard')) && 'outside' === t.getAttribute('data-type');
                            v.current = window.setTimeout(() => {
                                var e;
                                let l = (0, u.RS)(s.domReference ? s.domReference.ownerDocument : document);
                                (t || l !== s.domReference) &&
                                    ((0, u.gR)(null == (e = c.current.floatingContext) ? void 0 : e.refs.floating.current, l) ||
                                        (0, u.gR)(s.domReference, l) ||
                                        o ||
                                        r(!1, n, 'focus'));
                            });
                        },
                    }),
                    [c, s.domReference, r, f],
                );
                return o.useMemo(() => (a ? { reference: p } : {}), [a, p]);
            }
            function eH(e, t, n) {
                let r = new Map(),
                    o = 'item' === n,
                    u = e;
                if (o && e) {
                    let { [y]: t, [E]: n, ...r } = e;
                    u = r;
                }
                return {
                    ...('floating' === n && { tabIndex: -1, 'data-floating-ui-focusable': '' }),
                    ...u,
                    ...t
                        .map((t) => {
                            let r = t ? t[n] : null;
                            return 'function' == typeof r ? (e ? r(e) : null) : r;
                        })
                        .concat(e)
                        .reduce(
                            (e, t) => (
                                t &&
                                    Object.entries(t).forEach((t) => {
                                        let [n, u] = t;
                                        if (!(o && [y, E].includes(n)))
                                            if (0 === n.indexOf('on')) {
                                                if ((r.has(n) || r.set(n, []), 'function' == typeof u)) {
                                                    var l;
                                                    (null == (l = r.get(n)) || l.push(u),
                                                        (e[n] = function () {
                                                            for (var e, t = arguments.length, o = Array(t), u = 0; u < t; u++) o[u] = arguments[u];
                                                            return null == (e = r.get(n)) ? void 0 : e.map((e) => e(...o)).find((e) => void 0 !== e);
                                                        }));
                                                }
                                            } else e[n] = u;
                                    }),
                                e
                            ),
                            {},
                        ),
                };
            }
            function eG(e) {
                void 0 === e && (e = []);
                let t = e.map((e) => (null == e ? void 0 : e.reference)),
                    n = e.map((e) => (null == e ? void 0 : e.floating)),
                    r = e.map((e) => (null == e ? void 0 : e.item)),
                    u = o.useCallback((t) => eH(t, e, 'reference'), t),
                    l = o.useCallback((t) => eH(t, e, 'floating'), n),
                    i = o.useCallback((t) => eH(t, e, 'item'), r);
                return o.useMemo(() => ({ getReferenceProps: u, getFloatingProps: l, getItemProps: i }), [u, l, i]);
            }
            function eX(e, t, n) {
                switch (e) {
                    case 'vertical':
                        return t;
                    case 'horizontal':
                        return n;
                    default:
                        return t || n;
                }
            }
            function eU(e, t) {
                return eX(t, e === w || e === x, e === R || e === b);
            }
            function ez(e, t, n) {
                return eX(t, e === x, n ? e === R : e === b) || 'Enter' === e || ' ' === e || '' === e;
            }
            function eZ(e, t, n) {
                let r = e === x;
                return eX(t, n ? e === R : e === b, r);
            }
            function eQ(e, t, n, r) {
                let o = e === w;
                return 'both' === t || ('horizontal' === t && r && r > 1) ? 'Escape' === e : eX(t, n ? e === b : e === R, o);
            }
            function eV(e, t) {
                let { open: n, onOpenChange: r, elements: l, floatingId: c } = e,
                    {
                        listRef: s,
                        activeIndex: a,
                        onNavigate: f = () => {},
                        enabled: d = !0,
                        selectedIndex: v = null,
                        allowEscape: m = !1,
                        loop: p = !1,
                        nested: g = !1,
                        rtl: h = !1,
                        virtual: y = !1,
                        focusItemOnOpen: E = 'auto',
                        focusItemOnHover: w = !0,
                        openOnArrowKeyDown: k = !0,
                        disabledIndices: S,
                        orientation: M = 'vertical',
                        parentOrientation: C,
                        cols: O = 1,
                        scrollItemIntoView: L = !0,
                        virtualItemRef: T,
                        itemSizes: P,
                        dense: I = !1,
                    } = t,
                    F = (0, u.nd)(l.floating),
                    A = (0, u.SE)(F),
                    D = K(),
                    j = Y();
                (0, u.OS)(() => {
                    e.dataRef.current.orientation = M;
                }, [e, M]);
                let N = (0, u.Jt)(() => {
                        f(-1 === _.current ? null : _.current);
                    }),
                    W = (0, u.WZ)(l.domReference),
                    q = o.useRef(E),
                    _ = o.useRef(null != v ? v : -1),
                    J = o.useRef(null),
                    B = o.useRef(!0),
                    H = o.useRef(N),
                    G = o.useRef(!!l.floating),
                    X = o.useRef(n),
                    U = o.useRef(!1),
                    z = o.useRef(!1),
                    Z = (0, u.SE)(S),
                    Q = (0, u.SE)(n),
                    V = (0, u.SE)(L),
                    $ = (0, u.SE)(v),
                    [ee, et] = o.useState(),
                    [en, er] = o.useState(),
                    eo = (0, u.Jt)(() => {
                        function e(e) {
                            if (y) {
                                var t;
                                (null != (t = e.id) && t.endsWith('-fui-option') && (e.id = c + '-' + Math.random().toString(16).slice(2, 10)),
                                    et(e.id),
                                    null == j || j.events.emit('virtualfocus', e),
                                    T && (T.current = e));
                            } else el(e, { sync: U.current, preventScroll: !0 });
                        }
                        let t = s.current[_.current],
                            n = z.current;
                        (t && e(t),
                            (U.current ? (e) => e() : requestAnimationFrame)(() => {
                                let r = s.current[_.current] || t;
                                if (!r) return;
                                t || e(r);
                                let o = V.current;
                                o &&
                                    ei &&
                                    (n || !B.current) &&
                                    (null == r.scrollIntoView || r.scrollIntoView('boolean' == typeof o ? { block: 'nearest', inline: 'nearest' } : o));
                            }));
                    });
                ((0, u.OS)(() => {
                    d && (n && l.floating ? q.current && null != v && ((z.current = !0), (_.current = v), N()) : G.current && ((_.current = -1), H.current()));
                }, [d, n, l.floating, v, N]),
                    (0, u.OS)(() => {
                        if (d && n && l.floating)
                            if (null == a) {
                                if (((U.current = !1), null != $.current)) return;
                                if (
                                    (G.current && ((_.current = -1), eo()),
                                    (!X.current || !G.current) && q.current && (null != J.current || (!0 === q.current && null == J.current)))
                                ) {
                                    let e = 0,
                                        t = () => {
                                            null == s.current[0]
                                                ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t), e++)
                                                : ((_.current = null == J.current || ez(J.current, M, h) || g ? (0, u.Zb)(s, Z.current) : (0, u.vB)(s, Z.current)),
                                                  (J.current = null),
                                                  N());
                                        };
                                    t();
                                }
                            } else (0, u.du)(s, a) || ((_.current = a), eo(), (z.current = !1));
                    }, [d, n, l.floating, a, $, g, s, M, h, N, eo, Z]),
                    (0, u.OS)(() => {
                        var e;
                        if (!d || l.floating || !j || y || !G.current) return;
                        let t = j.nodesRef.current,
                            n = null == (e = t.find((e) => e.id === D)) || null == (e = e.context) ? void 0 : e.elements.floating,
                            r = (0, u.RS)((0, u.YE)(l.floating)),
                            o = t.some((e) => e.context && (0, u.gR)(e.context.elements.floating, r));
                        n && !o && B.current && n.focus({ preventScroll: !0 });
                    }, [d, l.floating, j, D, y]),
                    (0, u.OS)(() => {
                        if (d && j && y && !D)
                            return (
                                j.events.on('virtualfocus', e),
                                () => {
                                    j.events.off('virtualfocus', e);
                                }
                            );
                        function e(e) {
                            (er(e.id), T && (T.current = e));
                        }
                    }, [d, j, y, D, T]),
                    (0, u.OS)(() => {
                        ((H.current = N), (X.current = n), (G.current = !!l.floating));
                    }),
                    (0, u.OS)(() => {
                        n || ((J.current = null), (q.current = E));
                    }, [n, E]));
                let eu = null != a,
                    ei = o.useMemo(() => {
                        function e(e) {
                            if (!Q.current) return;
                            let t = s.current.indexOf(e);
                            -1 !== t && _.current !== t && ((_.current = t), N());
                        }
                        return {
                            onFocus(t) {
                                let { currentTarget: n } = t;
                                ((U.current = !0), e(n));
                            },
                            onClick: (e) => {
                                let { currentTarget: t } = e;
                                return t.focus({ preventScroll: !0 });
                            },
                            onMouseMove(t) {
                                let { currentTarget: n } = t;
                                ((U.current = !0), (z.current = !1), w && e(n));
                            },
                            onPointerLeave(e) {
                                let { pointerType: t } = e;
                                if (B.current && 'touch' !== t && ((U.current = !0), w && ((_.current = -1), N(), !y))) {
                                    var n;
                                    null == (n = A.current) || n.focus({ preventScroll: !0 });
                                }
                            },
                        };
                    }, [Q, A, w, s, N, y]),
                    ec = o.useCallback(() => {
                        var e;
                        return null != C
                            ? C
                            : null == j || null == (e = j.nodesRef.current.find((e) => e.id === D)) || null == (e = e.context) || null == (e = e.dataRef)
                              ? void 0
                              : e.current.orientation;
                    }, [D, j, C]),
                    es = (0, u.Jt)((e) => {
                        if (((B.current = !1), (U.current = !0), 229 === e.which || (!Q.current && e.currentTarget === A.current))) return;
                        if (g && eQ(e.key, M, h, O)) {
                            (eU(e.key, ec()) || (0, u.jo)(e),
                                r(!1, e.nativeEvent, 'list-navigation'),
                                (0, i.sb)(l.domReference) && (y ? null == j || j.events.emit('virtualfocus', l.domReference) : l.domReference.focus()));
                            return;
                        }
                        let t = _.current,
                            o = (0, u.Zb)(s, S),
                            c = (0, u.vB)(s, S);
                        if ((W || ('Home' === e.key && ((0, u.jo)(e), (_.current = o), N()), 'End' === e.key && ((0, u.jo)(e), (_.current = c), N())), O > 1)) {
                            let t = P || Array.from({ length: s.current.length }, () => ({ width: 1, height: 1 })),
                                n = (0, u.zf)(t, O, I),
                                r = n.findIndex((e) => null != e && !(0, u.FP)(s, e, S)),
                                l = n.reduce((e, t, n) => (null == t || (0, u.FP)(s, t, S) ? e : n), -1),
                                i =
                                    n[
                                        (0, u.Kg)(
                                            { current: n.map((e) => (null != e ? s.current[e] : null)) },
                                            {
                                                event: e,
                                                orientation: M,
                                                loop: p,
                                                rtl: h,
                                                cols: O,
                                                disabledIndices: (0, u.Y3)(
                                                    [...(('function' != typeof S ? S : null) || s.current.map((e, t) => ((0, u.FP)(s, t, S) ? t : void 0))), void 0],
                                                    n,
                                                ),
                                                minIndex: r,
                                                maxIndex: l,
                                                prevIndex: (0, u.fl)(_.current > c ? o : _.current, t, n, O, e.key === x ? 'bl' : e.key === (h ? R : b) ? 'tr' : 'tl'),
                                                stopEvent: !0,
                                            },
                                        )
                                    ];
                            if ((null != i && ((_.current = i), N()), 'both' === M)) return;
                        }
                        if (eU(e.key, M)) {
                            if (((0, u.jo)(e), n && !y && (0, u.RS)(e.currentTarget.ownerDocument) === e.currentTarget)) {
                                ((_.current = ez(e.key, M, h) ? o : c), N());
                                return;
                            }
                            (ez(e.key, M, h)
                                ? p
                                    ? (_.current = t >= c ? (m && t !== s.current.length ? -1 : o) : (0, u.BF)(s, { startingIndex: t, disabledIndices: S }))
                                    : (_.current = Math.min(c, (0, u.BF)(s, { startingIndex: t, disabledIndices: S })))
                                : p
                                  ? (_.current = t <= o ? (m && -1 !== t ? s.current.length : c) : (0, u.BF)(s, { startingIndex: t, decrement: !0, disabledIndices: S }))
                                  : (_.current = Math.max(o, (0, u.BF)(s, { startingIndex: t, decrement: !0, disabledIndices: S }))),
                                (0, u.du)(s, _.current) && (_.current = -1),
                                N());
                        }
                    }),
                    ea = o.useMemo(() => y && n && eu && { 'aria-activedescendant': en || ee }, [y, n, eu, en, ee]),
                    ef = o.useMemo(
                        () => ({
                            'aria-orientation': 'both' === M ? void 0 : M,
                            ...(!W ? ea : {}),
                            onKeyDown: es,
                            onPointerMove() {
                                B.current = !0;
                            },
                        }),
                        [ea, es, M, W],
                    ),
                    ed = o.useMemo(() => {
                        function e(e) {
                            'auto' === E && (0, u.YF)(e.nativeEvent) && (q.current = !0);
                        }
                        function t(e) {
                            ((q.current = E), 'auto' === E && (0, u.Pg)(e.nativeEvent) && (q.current = !0));
                        }
                        return {
                            ...ea,
                            onKeyDown(e) {
                                B.current = !1;
                                let t = e.key.startsWith('Arrow'),
                                    o = ['Home', 'End'].includes(e.key),
                                    l = eZ(e.key, M, h),
                                    i = eQ(e.key, M, h, O),
                                    c = eZ(e.key, ec(), h),
                                    a = eU(e.key, M),
                                    f = (g ? c : a) || 'Enter' === e.key || '' === e.key.trim();
                                if (y && n) {
                                    let n = null == j ? void 0 : j.nodesRef.current.find((e) => null == e.parentId),
                                        r = j && n ? (0, u.zG)(j.nodesRef.current, n.id) : null;
                                    if ((t || o) && r && T) {
                                        var d, m, p;
                                        let t = new KeyboardEvent('keydown', { key: e.key, bubbles: !0 });
                                        if (l || i) {
                                            let n = (null == (d = r.context) ? void 0 : d.elements.domReference) === e.currentTarget,
                                                o =
                                                    i && !n
                                                        ? null == (m = r.context)
                                                            ? void 0
                                                            : m.elements.domReference
                                                        : l
                                                          ? s.current.find((e) => (null == e ? void 0 : e.id) === ee)
                                                          : null;
                                            o && ((0, u.jo)(e), o.dispatchEvent(t), er(void 0));
                                        }
                                        if ((a || o) && r.context && r.context.open && r.parentId && e.currentTarget !== r.context.elements.domReference) {
                                            ((0, u.jo)(e), null == (p = r.context.elements.domReference) || p.dispatchEvent(t));
                                            return;
                                        }
                                    }
                                    return es(e);
                                }
                                if (n || k || !t) {
                                    if (f) {
                                        let t = eU(e.key, ec());
                                        J.current = g && t ? null : e.key;
                                    }
                                    if (g) {
                                        c && ((0, u.jo)(e), n ? ((_.current = (0, u.Zb)(s, Z.current)), N()) : r(!0, e.nativeEvent, 'list-navigation'));
                                        return;
                                    }
                                    a && (null != v && (_.current = v), (0, u.jo)(e), !n && k ? r(!0, e.nativeEvent, 'list-navigation') : es(e), n && N());
                                }
                            },
                            onFocus() {
                                n && !y && ((_.current = -1), N());
                            },
                            onPointerDown: t,
                            onPointerEnter: t,
                            onMouseDown: e,
                            onClick: e,
                        };
                    }, [ee, ea, O, es, Z, E, s, g, N, r, n, k, M, ec, h, v, j, y, T]);
                return o.useMemo(() => (d ? { reference: ed, floating: ef, item: ei } : {}), [d, ed, ef, ei]);
            }
            let e$ = new Map([
                ['select', 'listbox'],
                ['combobox', 'listbox'],
                ['label', !1],
            ]);
            function e0(e, t) {
                var n, r;
                void 0 === t && (t = {});
                let { open: l, elements: i, floatingId: c } = e,
                    { enabled: s = !0, role: a = 'dialog' } = t,
                    f = D(),
                    d = (null == (n = i.domReference) ? void 0 : n.id) || f,
                    v = o.useMemo(() => {
                        var e;
                        return (null == (e = (0, u.nd)(i.floating)) ? void 0 : e.id) || c;
                    }, [i.floating, c]),
                    m = null != (r = e$.get(a)) ? r : a,
                    p = null != K(),
                    g = o.useMemo(
                        () =>
                            'tooltip' === m || 'label' === a
                                ? { ['aria-' + ('label' === a ? 'labelledby' : 'describedby')]: l ? v : void 0 }
                                : {
                                      'aria-expanded': l ? 'true' : 'false',
                                      'aria-haspopup': 'alertdialog' === m ? 'dialog' : m,
                                      'aria-controls': l ? v : void 0,
                                      ...('listbox' === m && { role: 'combobox' }),
                                      ...('menu' === m && { id: d }),
                                      ...('menu' === m && p && { role: 'menuitem' }),
                                      ...('select' === a && { 'aria-autocomplete': 'none' }),
                                      ...('combobox' === a && { 'aria-autocomplete': 'list' }),
                                  },
                        [m, v, p, l, d, a],
                    ),
                    h = o.useMemo(() => {
                        let e = { id: v, ...(m && { role: m }) };
                        return 'tooltip' === m || 'label' === a ? e : { ...e, ...('menu' === m && { 'aria-labelledby': d }) };
                    }, [m, v, d, a]),
                    y = o.useCallback(
                        (e) => {
                            let { active: t, selected: n } = e,
                                r = { role: 'option', ...(t && { id: v + '-fui-option' }) };
                            switch (a) {
                                case 'select':
                                case 'combobox':
                                    return { ...r, 'aria-selected': n };
                            }
                            return {};
                        },
                        [v, a],
                    );
                return o.useMemo(() => (s ? { reference: g, floating: h, item: y } : {}), [s, g, h, y]);
            }
            let e1 = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? '-' : '') + e.toLowerCase());
            function e2(e, t) {
                return 'function' == typeof e ? e(t) : e;
            }
            function e4(e, t) {
                void 0 === t && (t = {});
                let {
                        open: n,
                        elements: { floating: r },
                    } = e,
                    { duration: l = 250 } = t,
                    i = ('number' == typeof l ? l : l.close) || 0,
                    [c, a] = o.useState('unmounted'),
                    f = (function (e, t) {
                        let [n, r] = o.useState(e);
                        return (
                            e && !n && r(!0),
                            o.useEffect(() => {
                                if (!e && n) {
                                    let e = setTimeout(() => r(!1), t);
                                    return () => clearTimeout(e);
                                }
                            }, [e, n, t]),
                            n
                        );
                    })(n, i);
                return (
                    f || 'close' !== c || a('unmounted'),
                    (0, u.OS)(() => {
                        if (r) {
                            if (n) {
                                a('initial');
                                let e = requestAnimationFrame(() => {
                                    s.flushSync(() => {
                                        a('open');
                                    });
                                });
                                return () => {
                                    cancelAnimationFrame(e);
                                };
                            }
                            a('close');
                        }
                    }, [n, r]),
                    { isMounted: f, status: c }
                );
            }
            function e5(e, t) {
                void 0 === t && (t = {});
                let { initial: n = { opacity: 0 }, open: r, close: l, common: i, duration: c = 250 } = t,
                    s = e.placement,
                    a = s.split('-')[0],
                    f = o.useMemo(() => ({ side: a, placement: s }), [a, s]),
                    d = 'number' == typeof c,
                    v = (d ? c : c.open) || 0,
                    m = (d ? c : c.close) || 0,
                    [p, g] = o.useState(() => ({ ...e2(i, f), ...e2(n, f) })),
                    { isMounted: h, status: y } = e4(e, { duration: c }),
                    E = (0, u.SE)(n),
                    R = (0, u.SE)(r),
                    b = (0, u.SE)(l),
                    w = (0, u.SE)(i);
                return (
                    (0, u.OS)(() => {
                        let e = e2(E.current, f),
                            t = e2(b.current, f),
                            n = e2(w.current, f),
                            r = e2(R.current, f) || Object.keys(e).reduce((e, t) => ((e[t] = ''), e), {});
                        if (
                            ('initial' === y && g((t) => ({ transitionProperty: t.transitionProperty, ...n, ...e })),
                            'open' === y && g({ transitionProperty: Object.keys(r).map(e1).join(','), transitionDuration: v + 'ms', ...n, ...r }),
                            'close' === y)
                        ) {
                            let r = t || e;
                            g({ transitionProperty: Object.keys(r).map(e1).join(','), transitionDuration: m + 'ms', ...n, ...r });
                        }
                    }, [m, b, E, R, w, v, y, f]),
                    { isMounted: h, styles: p }
                );
            }
            function e9(e, t) {
                var n;
                let { open: r, dataRef: l } = e,
                    {
                        listRef: i,
                        activeIndex: c,
                        onMatch: s,
                        onTypingChange: a,
                        enabled: f = !0,
                        findMatch: d = null,
                        resetMs: v = 750,
                        ignoreKeys: m = [],
                        selectedIndex: p = null,
                    } = t,
                    g = o.useRef(-1),
                    h = o.useRef(''),
                    y = o.useRef(null != (n = null != p ? p : c) ? n : -1),
                    E = o.useRef(null),
                    R = (0, u.Jt)(s),
                    b = (0, u.Jt)(a),
                    w = (0, u.SE)(d),
                    x = (0, u.SE)(m);
                ((0, u.OS)(() => {
                    r && (G(g), (E.current = null), (h.current = ''));
                }, [r]),
                    (0, u.OS)(() => {
                        if (r && '' === h.current) {
                            var e;
                            y.current = null != (e = null != p ? p : c) ? e : -1;
                        }
                    }, [r, p, c]));
                let k = (0, u.Jt)((e) => {
                        e ? l.current.typing || ((l.current.typing = e), b(e)) : l.current.typing && ((l.current.typing = e), b(e));
                    }),
                    S = (0, u.Jt)((e) => {
                        function t(e, t, n) {
                            let r = w.current ? w.current(t, n) : t.find((e) => (null == e ? void 0 : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())) === 0);
                            return r ? e.indexOf(r) : -1;
                        }
                        let n = i.current;
                        if (
                            (h.current.length > 0 && ' ' !== h.current[0] && (-1 === t(n, n, h.current) ? k(!1) : ' ' === e.key && (0, u.jo)(e)),
                            null == n || x.current.includes(e.key) || 1 !== e.key.length || e.ctrlKey || e.metaKey || e.altKey)
                        )
                            return;
                        (r && ' ' !== e.key && ((0, u.jo)(e), k(!0)),
                            n.every((e) => {
                                var t, n;
                                return !e || (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !== (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase());
                            }) &&
                                h.current === e.key &&
                                ((h.current = ''), (y.current = E.current)),
                            (h.current += e.key),
                            G(g),
                            (g.current = window.setTimeout(() => {
                                ((h.current = ''), (y.current = E.current), k(!1));
                            }, v)));
                        let o = y.current,
                            l = t(n, [...n.slice((o || 0) + 1), ...n.slice(0, (o || 0) + 1)], h.current);
                        -1 !== l ? (R(l), (E.current = l)) : ' ' !== e.key && ((h.current = ''), k(!1));
                    }),
                    M = o.useMemo(() => ({ onKeyDown: S }), [S]),
                    C = o.useMemo(
                        () => ({
                            onKeyDown: S,
                            onKeyUp(e) {
                                ' ' === e.key && k(!1);
                            },
                        }),
                        [S, k],
                    );
                return o.useMemo(() => (f ? { reference: M, floating: C } : {}), [f, M, C]);
            }
            function e8(e, t) {
                return { ...e, rects: { ...e.rects, floating: { ...e.rects.floating, height: t } } };
            }
            let e3 = (e) => ({
                name: 'inner',
                options: e,
                async fn(t) {
                    let {
                            listRef: n,
                            overflowRef: r,
                            onFallbackChange: o,
                            offset: u = 0,
                            index: l = 0,
                            minItemsVisible: i = 4,
                            referenceOverflowThreshold: c = 0,
                            scrollRef: f,
                            ...v
                        } = (0, d._3)(e, t),
                        {
                            rects: m,
                            platform: p,
                            elements: { floating: g },
                        } = t,
                        h = n.current[l],
                        y = (null == f ? void 0 : f.current) || g,
                        E = g.clientTop || y.clientTop,
                        R = 0 !== g.clientTop,
                        b = 0 !== y.clientTop,
                        w = g === y;
                    if (!h) return {};
                    let x = { ...t, ...(await (0, a.cY)(-h.offsetTop - g.clientTop - m.reference.height / 2 - h.offsetHeight / 2 - u).fn(t)) },
                        k = await p.detectOverflow(e8(x, y.scrollHeight + E + g.clientTop), v),
                        S = await p.detectOverflow(x, { ...v, elementContext: 'reference' }),
                        M = (0, d.T9)(0, k.top),
                        C = x.y + M,
                        O = (y.scrollHeight > y.clientHeight ? (e) => e : d.LI)((0, d.T9)(0, y.scrollHeight + ((R && w) || b ? 2 * E : 0) - M - (0, d.T9)(0, k.bottom)));
                    if (((y.style.maxHeight = O + 'px'), (y.scrollTop = M), o)) {
                        let e = y.offsetHeight < h.offsetHeight * (0, d.jk)(i, n.current.length) - 1 || S.top >= -c || S.bottom >= -c;
                        s.flushSync(() => o(e));
                    }
                    return (r && (r.current = await p.detectOverflow(e8({ ...x, y: C }, y.offsetHeight + E + g.clientTop), v)), { y: C });
                },
            });
            function e7(e, t) {
                let { open: n, elements: r } = e,
                    { enabled: l = !0, overflowRef: i, scrollRef: c, onChange: a } = t,
                    f = (0, u.Jt)(a),
                    d = o.useRef(!1),
                    v = o.useRef(null),
                    m = o.useRef(null);
                o.useEffect(() => {
                    if (!l) return;
                    function e(e) {
                        if (e.ctrlKey || !t || null == i.current) return;
                        let n = e.deltaY,
                            r = i.current.top >= -0.5,
                            o = i.current.bottom >= -0.5,
                            l = t.scrollHeight - t.clientHeight,
                            c = n < 0 ? -1 : 1,
                            a = n < 0 ? 'max' : 'min';
                        !(t.scrollHeight <= t.clientHeight) &&
                            ((!r && n > 0) || (!o && n < 0)
                                ? (e.preventDefault(),
                                  s.flushSync(() => {
                                      f((e) => e + Math[a](n, l * c));
                                  }))
                                : /firefox/i.test((0, u.$t)()) && (t.scrollTop += n));
                    }
                    let t = (null == c ? void 0 : c.current) || r.floating;
                    if (n && t)
                        return (
                            t.addEventListener('wheel', e),
                            requestAnimationFrame(() => {
                                ((v.current = t.scrollTop), null != i.current && (m.current = { ...i.current }));
                            }),
                            () => {
                                ((v.current = null), (m.current = null), t.removeEventListener('wheel', e));
                            }
                        );
                }, [l, n, r.floating, i, c, f]);
                let p = o.useMemo(
                    () => ({
                        onKeyDown() {
                            d.current = !0;
                        },
                        onWheel() {
                            d.current = !1;
                        },
                        onPointerMove() {
                            d.current = !1;
                        },
                        onScroll() {
                            let e = (null == c ? void 0 : c.current) || r.floating;
                            if (i.current && e && d.current) {
                                if (null !== v.current) {
                                    let t = e.scrollTop - v.current;
                                    ((i.current.bottom < -0.5 && t < -1) || (i.current.top < -0.5 && t > 1)) && s.flushSync(() => f((e) => e + t));
                                }
                                requestAnimationFrame(() => {
                                    v.current = e.scrollTop;
                                });
                            }
                        },
                    }),
                    [r.floating, f, i, c],
                );
                return o.useMemo(() => (l ? { floating: p } : {}), [l, p]);
            }
            function e6(e, t) {
                let [n, r] = e,
                    o = !1,
                    u = t.length;
                for (let e = 0, l = u - 1; e < u; l = e++) {
                    let [u, i] = t[e] || [0, 0],
                        [c, s] = t[l] || [0, 0];
                    i >= r != s >= r && n <= ((c - u) * (r - i)) / (s - i) + u && (o = !o);
                }
                return o;
            }
            function te(e) {
                void 0 === e && (e = {});
                let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
                    o = { current: -1 },
                    u = !1,
                    l = null,
                    c = null,
                    s = 'undefined' != typeof performance ? performance.now() : 0,
                    a = (e) => {
                        let { x: n, y: a, placement: f, elements: d, onClose: v, nodeId: m, tree: p } = e;
                        return function (e) {
                            function g() {
                                (G(o), v());
                            }
                            if ((G(o), !d.domReference || !d.floating || null == f || null == n || null == a)) return;
                            let { clientX: h, clientY: y } = e,
                                E = [h, y],
                                R = 'composedPath' in e ? e.composedPath()[0] : e.target,
                                b = 'mouseleave' === e.type,
                                w = ei(d.floating, R),
                                x = ei(d.domReference, R),
                                k = d.domReference.getBoundingClientRect(),
                                S = d.floating.getBoundingClientRect(),
                                M = f.split('-')[0],
                                C = n > S.right - S.width / 2,
                                O = a > S.bottom - S.height / 2,
                                L = E[0] >= k.x && E[0] <= k.x + k.width && E[1] >= k.y && E[1] <= k.y + k.height,
                                T = S.width > k.width,
                                P = S.height > k.height,
                                I = (T ? k : S).left,
                                F = (T ? k : S).right,
                                A = (P ? k : S).top,
                                D = (P ? k : S).bottom;
                            if (w && ((u = !0), !b)) return;
                            if ((x && (u = !1), x && !b)) {
                                u = !0;
                                return;
                            }
                            if (
                                (b && (0, i.vq)(e.relatedTarget) && ei(d.floating, e.relatedTarget)) ||
                                (p &&
                                    (function e(t, n, r) {
                                        return (
                                            void 0 === r && (r = !0),
                                            t
                                                .filter((e) => {
                                                    var t;
                                                    return e.parentId === n && (!r || (null == (t = e.context) ? void 0 : t.open));
                                                })
                                                .flatMap((n) => [n, ...e(t, n.id, r)])
                                        );
                                    })(p.nodesRef.current, m).length)
                            )
                                return;
                            if (
                                ('top' === M && a >= k.bottom - 1) ||
                                ('bottom' === M && a <= k.top + 1) ||
                                ('left' === M && n >= k.right - 1) ||
                                ('right' === M && n <= k.left + 1)
                            )
                                return g();
                            let j = [];
                            switch (M) {
                                case 'top':
                                    j = [
                                        [I, k.top + 1],
                                        [I, S.bottom - 1],
                                        [F, S.bottom - 1],
                                        [F, k.top + 1],
                                    ];
                                    break;
                                case 'bottom':
                                    j = [
                                        [I, S.top + 1],
                                        [I, k.bottom - 1],
                                        [F, k.bottom - 1],
                                        [F, S.top + 1],
                                    ];
                                    break;
                                case 'left':
                                    j = [
                                        [S.right - 1, D],
                                        [S.right - 1, A],
                                        [k.left + 1, A],
                                        [k.left + 1, D],
                                    ];
                                    break;
                                case 'right':
                                    j = [
                                        [k.right - 1, D],
                                        [k.right - 1, A],
                                        [S.left + 1, A],
                                        [S.left + 1, D],
                                    ];
                            }
                            if (!e6([h, y], j)) {
                                if (u && !L) return g();
                                if (!b && r) {
                                    let t = (function (e, t) {
                                        let n = performance.now(),
                                            r = n - s;
                                        if (null === l || null === c || 0 === r) return ((l = e), (c = t), (s = n), null);
                                        let o = e - l,
                                            u = t - c,
                                            i = Math.sqrt(o * o + u * u);
                                        return ((l = e), (c = t), (s = n), i / r);
                                    })(e.clientX, e.clientY);
                                    if (null !== t && t < 0.1) return g();
                                }
                                e6(
                                    [h, y],
                                    (function (e) {
                                        let [n, r] = e;
                                        switch (M) {
                                            case 'top': {
                                                let e = [
                                                    [S.left, C || T ? S.bottom - t : S.top],
                                                    [S.right, C ? (T ? S.bottom - t : S.top) : S.bottom - t],
                                                ];
                                                return [
                                                    [T ? n + t / 2 : C ? n + 4 * t : n - 4 * t, r + t + 1],
                                                    [T ? n - t / 2 : C ? n + 4 * t : n - 4 * t, r + t + 1],
                                                    ...e,
                                                ];
                                            }
                                            case 'bottom': {
                                                let e = [
                                                    [S.left, C || T ? S.top + t : S.bottom],
                                                    [S.right, C ? (T ? S.top + t : S.bottom) : S.top + t],
                                                ];
                                                return [[T ? n + t / 2 : C ? n + 4 * t : n - 4 * t, r - t], [T ? n - t / 2 : C ? n + 4 * t : n - 4 * t, r - t], ...e];
                                            }
                                            case 'left':
                                                return [
                                                    [O || P ? S.right - t : S.left, S.top],
                                                    [O ? (P ? S.right - t : S.left) : S.right - t, S.bottom],
                                                    [n + t + 1, P ? r + t / 2 : O ? r + 4 * t : r - 4 * t],
                                                    [n + t + 1, P ? r - t / 2 : O ? r + 4 * t : r - 4 * t],
                                                ];
                                            case 'right': {
                                                let e = [
                                                    [O || P ? S.left + t : S.right, S.top],
                                                    [O ? (P ? S.left + t : S.right) : S.left + t, S.bottom],
                                                ];
                                                return [[n - t, P ? r + t / 2 : O ? r + 4 * t : r - 4 * t], [n - t, P ? r - t / 2 : O ? r + 4 * t : r - 4 * t], ...e];
                                            }
                                        }
                                    })([n, a]),
                                )
                                    ? !u && r && (o.current = window.setTimeout(g, 40))
                                    : g();
                            }
                        };
                    };
                return ((a.__options = { blockPointerEvents: n }), a);
            }
        },
    },
]);
