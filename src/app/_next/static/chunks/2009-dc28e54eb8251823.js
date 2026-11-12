(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2009],
    {
        554: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        4362: (e, t, i) => {
            'use strict';
            i.d(t, { MainPage: () => rr });
            var a,
                n,
                r,
                s,
                o,
                l,
                d,
                c,
                u = i(88800),
                _ = i(65724),
                m = i(84961),
                p = i(53548),
                b = i.t(p, 2),
                v = i(2058),
                h = i(30282),
                g = i(58390),
                x = i(87999),
                A = i(76903),
                C = i(37523),
                f = i(17392),
                y = i(46312),
                j = i(29993),
                T = i(50408),
                k = i(79070),
                N = i(96817),
                P = i(90688),
                S = i(66719),
                I = i(17610),
                E = i(29504),
                w = i(25772),
                B = i(32596),
                M = i(88969),
                O = i(64543),
                R = i(8840),
                L = i(6087);
            let W = (0, p.lazy)(async () =>
                    Promise.all([i.e(385), i.e(9171)])
                        .then(i.bind(i, 89171))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                V = (0, p.lazy)(async () =>
                    Promise.all([i.e(385), i.e(9380), i.e(4683), i.e(617), i.e(4449), i.e(7404)])
                        .then(i.bind(i, 47404))
                        .then((e) => ({ default: e.VibeAnimation })),
                ),
                D = L.default.default(
                    () =>
                        Promise.all([i.e(385), i.e(9562)])
                            .then(i.bind(i, 69562))
                            .then((e) => ({ default: e.VibeWidgetFallbackAnimation })),
                    { ssr: !1 },
                ),
                F = L.default.default(
                    () =>
                        Promise.all([i.e(385), i.e(9380), i.e(4683), i.e(4449), i.e(2179)])
                            .then(i.bind(i, 2179))
                            .then((e) => ({ default: e.VibeWidgetAnimation })),
                    { ssr: !1 },
                );
            var U = i(86462),
                z = i(4086),
                H = i(41928),
                K = i(47964),
                Y = i(72288),
                G = i(97956),
                X = i(74773),
                q = i(91051),
                $ = i(7628),
                Z = i(52300),
                J = i(60208),
                Q = i(46422),
                ee = i(53961),
                et = i.n(ee);
            let ei = !0,
                ea = (0, m.PA)((e) => {
                    let { isPlaying: t, onClick: i, ariaDisabled: a, className: n } = e,
                        { vibe: r } = (0, Y.g)(),
                        { formatMessage: s } = (0, v.A)(),
                        o = (0, Q.W)(),
                        l = (0, J.D)(),
                        d = t ? 'pauseVibe' : 'playVibe',
                        c = t ? f.e8.vibe.MY_VIBE_PAUSE_BUTTON : f.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        m = (0, p.useMemo)(() => (t ? s({ id: 'vibe-actions.aria-label-pause' }) : s({ id: 'vibe-actions.aria-label-play' })), [s, t]),
                        b = (0, p.useCallback)(
                            (e) => {
                                (r.isApplying || null == i || i(), e.stopPropagation(), e.preventDefault());
                            },
                            [i, r.isApplying],
                        );
                    return (
                        (0, p.useEffect)(() => {
                            if ('production' === l && 1 === o.length && ei) {
                                var e, t;
                                let i = Math.round(performance.now());
                                (null == (t = window.Ya) || null == (e = t.Rum) || e.sendTimeMark('my-vibe-button-loading-time', i), (ei = !1));
                            }
                        }, []),
                        (0, u.jsx)(N.$, {
                            className: (0, _.$)(et().root, { [et().root_isVibeLoading]: r.isApplying }, n),
                            withRipple: !1,
                            withHover: !1,
                            onClick: b,
                            variant: 'text',
                            'aria-disabled': r.isApplying || a,
                            'aria-label': m,
                            icon: (0, u.jsx)(Z.I, { size: 's', className: et().icon, variant: d }),
                            'data-test-id': c,
                            children: (0, u.jsx)(M.A, { id: 'entity-names.my-vibe' }),
                        })
                    );
                });
            ea.displayName = 'PlayButton';
            var en = i(78429),
                er = i.n(en),
                es = {
                    4490: (e, t, i) => {
                        (i.r(t), i.d(t, { DOWN: () => o, LEFT: () => n, RIGHT: () => r, UP: () => s, useSwipeable: () => m }));
                        var a = i(810);
                        let n = 'Left',
                            r = 'Right',
                            s = 'Up',
                            o = 'Down',
                            l = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            d = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            c = 'mousemove',
                            u = 'mouseup';
                        function _(e, t) {
                            if (0 === t) return e;
                            let i = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(i) + e[1] * Math.sin(i), e[1] * Math.cos(i) - e[0] * Math.sin(i)];
                        }
                        function m(e) {
                            var t, i, m;
                            let p,
                                { trackMouse: b } = e,
                                v = a.useRef(Object.assign({}, d)),
                                h = a.useRef(Object.assign({}, l)),
                                g = a.useRef(Object.assign({}, h.current));
                            for (p in ((g.current = Object.assign({}, h.current)), (h.current = Object.assign(Object.assign({}, l), e)), l))
                                void 0 === h.current[p] && (h.current[p] = l[p]);
                            let [x, A] = a.useMemo(
                                () =>
                                    (function (e, t) {
                                        let i = (t) => {
                                                let i = 'touches' in t;
                                                (i && t.touches.length > 1) ||
                                                    e((e, n) => {
                                                        n.trackMouse && !i && (document.addEventListener(c, a), document.addEventListener(u, p));
                                                        let { clientX: r, clientY: s } = i ? t.touches[0] : t,
                                                            o = _([r, s], n.rotationAngle);
                                                        return (
                                                            n.onTouchStartOrOnMouseDown && n.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), d), { initial: o.slice(), xy: o, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            a = (t) => {
                                                e((e, i) => {
                                                    var a, d, c, u;
                                                    let m = 'touches' in t;
                                                    if (m && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > i.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: p, clientY: b } = m ? t.touches[0] : t,
                                                        [v, h] = _([p, b], i.rotationAngle),
                                                        g = v - e.xy[0],
                                                        x = h - e.xy[1],
                                                        A = Math.abs(g),
                                                        C = Math.abs(x),
                                                        f = (t.timeStamp || 0) - e.start,
                                                        y = Math.sqrt(A * A + C * C) / (f || 1),
                                                        j = [g / (f || 1), x / (f || 1)],
                                                        T = ((a = A), (d = C), (c = g), (u = x), a > d ? (c > 0 ? r : n) : u > 0 ? o : s),
                                                        k = 'number' == typeof i.delta ? i.delta : i.delta[T.toLowerCase()] || l.delta;
                                                    if (A < k && C < k && !e.swiping) return e;
                                                    let N = {
                                                        absX: A,
                                                        absY: C,
                                                        deltaX: g,
                                                        deltaY: x,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: y,
                                                        vxvy: j,
                                                    };
                                                    (N.first && i.onSwipeStart && i.onSwipeStart(N), i.onSwiping && i.onSwiping(N));
                                                    let P = !1;
                                                    return (
                                                        (i.onSwiping || i.onSwiped || i['onSwiped'.concat(T)]) && (P = !0),
                                                        P && i.preventScrollOnSwipe && i.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: N, swiping: !0 })
                                                    );
                                                });
                                            },
                                            m = (t) => {
                                                e((e, i) => {
                                                    let a;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < i.swipeDuration) {
                                                            ((a = Object.assign(Object.assign({}, e.eventData), { event: t })), i.onSwiped && i.onSwiped(a));
                                                            let n = i['onSwiped'.concat(a.dir)];
                                                            n && n(a);
                                                        }
                                                    } else i.onTap && i.onTap({ event: t });
                                                    return (
                                                        i.onTouchEndOrOnMouseUp && i.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), d), { eventData: a })
                                                    );
                                                });
                                            },
                                            p = (e) => {
                                                (document.removeEventListener(c, a), document.removeEventListener(u, p), m(e));
                                            },
                                            b = (e, t) => {
                                                let n = () => {};
                                                if (e && e.addEventListener) {
                                                    let r = Object.assign(Object.assign({}, l.touchEventOptions), t.touchEventOptions),
                                                        s = [
                                                            ['touchstart', i, r],
                                                            ['touchmove', a, Object.assign(Object.assign({}, r), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', m, r],
                                                        ];
                                                    (s.forEach((t) => {
                                                        let [i, a, n] = t;
                                                        return e.addEventListener(i, a, n);
                                                    }),
                                                        (n = () =>
                                                            s.forEach((t) => {
                                                                let [i, a] = t;
                                                                return e.removeEventListener(i, a);
                                                            })));
                                                }
                                                return n;
                                            },
                                            v = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, i) => {
                                                            if (e.el === t) return e;
                                                            let a = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (a.cleanUpTouch = void 0)),
                                                                i.trackTouch && t && (a.cleanUpTouch = b(t, i)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), a)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (v.onMouseDown = i), [v, b]);
                                    })((e) => (v.current = e(v.current, h.current)), { trackMouse: b }),
                                [b],
                            );
                            return (
                                (t = v.current),
                                (i = h.current),
                                (m = g.current),
                                (v.current =
                                    i.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? i.preventScrollOnSwipe !== m.preventScrollOnSwipe || i.touchEventOptions.passive !== m.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: A(t.el, i) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: A(t.el, i) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                x
                            );
                        }
                    },
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let a = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, a.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, a.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    2458: (e, t, i) => {
                        var a;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let n = i(4490),
                            r = i(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(a || (t.SwipeablePlacement = a = {}));
                        let s = (e) => {
                                let { ref: t, deltaY: i, deltaX: n, placement: r } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            r === a.TOP || r === a.BOTTOM ? 'translateY('.concat(i || 0, 'px)') : 'translateX('.concat(n || 0, 'px)')));
                                });
                            },
                            o = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: i = {}, onClose: l, disableSwipe: d, placement: c, threshold: u } = e,
                                _ = (0, r.useCallbackRef)(() => {
                                    l && (o(t), l());
                                }),
                                m = (0, r.useCallbackRef)((e) => {
                                    d ||
                                        ((e) => {
                                            let { ref: t, deltaY: i, deltaX: n, placement: r } = e;
                                            switch (r) {
                                                case a.TOP:
                                                    i <= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                                    break;
                                                case a.RIGHT:
                                                    n >= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                                    break;
                                                case a.LEFT:
                                                    n <= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                                    break;
                                                default:
                                                    i >= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c });
                                }),
                                p = (0, r.useCallbackRef)((e) => {
                                    !d &&
                                        (((e) => {
                                            let { ref: t, deltaY: i, deltaX: n, placement: r, threshold: s = 25 } = e;
                                            if (!t.current) return !1;
                                            let o = (s / 100) * (r === a.TOP || r === a.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (r) {
                                                case a.TOP:
                                                    return i < 0 && Math.abs(i) >= o;
                                                case a.RIGHT:
                                                    return n > 0 && n >= o;
                                                case a.LEFT:
                                                    return n < 0 && Math.abs(n) >= o;
                                                default:
                                                    return i > 0 && i >= o;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c, threshold: u })
                                            ? l && (o(t), l())
                                            : o(t));
                                });
                            return { handlers: (0, n.useSwipeable)({ onSwiped: p, onSwiping: m, trackMouse: !0, trackTouch: !0, ...i }), onCloseCallback: _ };
                        };
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                eo = {};
            function el(e) {
                var t = eo[e];
                if (void 0 !== t) return t.exports;
                var i = (eo[e] = { exports: {} });
                return (es[e](i, i.exports, el), i.exports);
            }
            ((el.d = (e, t) => {
                for (var i in t) el.o(t, i) && !el.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (el.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (el.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var ed = {};
            ((() => {
                (Object.defineProperty(ed, '__esModule', { value: !0 }), (ed.usePopoverSwipeable = void 0));
                let e = el(810),
                    t = el(2458);
                ed.usePopoverSwipeable = (i) => {
                    let { ref: a, swipeableProps: n = {}, onClose: r, disableSwipe: s, placement: o, threshold: l } = i,
                        d = (0, e.useMemo)(() => {
                            switch (o) {
                                case 'top':
                                case 'top-end':
                                case 'top-start':
                                    return t.SwipeablePlacement.TOP;
                                case 'right':
                                case 'right-end':
                                case 'right-start':
                                    return t.SwipeablePlacement.RIGHT;
                                case 'left':
                                case 'left-end':
                                case 'left-start':
                                    return t.SwipeablePlacement.LEFT;
                                default:
                                    return t.SwipeablePlacement.BOTTOM;
                            }
                        }, [o]);
                    return (0, t.useComponentSwipeable)({ ref: a, swipeableProps: n, onClose: r, disableSwipe: s, placement: d, threshold: l });
                };
            })(),
                ed.__esModule);
            var ec = ed.usePopoverSwipeable,
                eu = i(78275),
                e_ = i(52073),
                em = i(34712),
                ep = i(44230),
                eb = i(90420);
            let ev = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, i] = (0, p.useState)(e),
                    { contentRef: a } = (0, ep.g)();
                return (
                    (0, p.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [a] = e || [];
                            a && a.contentRect.height !== t && i(a.contentRect.height);
                        });
                        return (
                            a && e.observe(a),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]),
                    { contentHeight: t }
                );
            };
            var eh = i(16462),
                eg = i(24337),
                ex = i.n(eg);
            let eA = (0, m.PA)(() => {
                var e, t, i, a;
                let { formatMessage: n } = (0, v.A)(),
                    {
                        vibe: r,
                        settings: { isMobile: s },
                        vibeSettings: o,
                    } = (0, Y.g)(),
                    { screen: l, block: d } = (0, O.j)(),
                    c = null == l ? void 0 : l.pageIdForFrom,
                    { blockIdForFrom: _ } = null != d ? d : {},
                    m = (0, p.useRef)(null),
                    b = (0, p.useRef)(null),
                    h = (0, p.useRef)(null),
                    { resetContext: g } = (0, K.B)({ seeds: null != (a = null == (e = r.meta) ? void 0 : e.seeds) ? a : [], pageIdForFrom: c, blockIdForFrom: _ }),
                    { contentRef: x } = (0, ep.g)(),
                    { contentHeight: A } = ev(0),
                    { state: C, setState: y, toggleFalse: T } = (0, eu.e)(!1);
                (0, p.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                );
                let k = (0, p.useMemo)(
                        () => (s ? { height: '88vh', transitionProperty: 'opacity' } : x ? { insetInlineEnd: 7, insetBlockStart: x.offsetTop + 7, height: A - 16 } : {}),
                        [A, x, s],
                    ),
                    P = !!(r.isApplying || r.isMyVibe),
                    S = (0, j.c)((e) => {
                        if (!r.isApplying) {
                            var t;
                            (m.current && (0, e_.P)(e, ex().ripple, m.current), g(), null == (t = b.current) || t.focus());
                        }
                    }),
                    w = (0, p.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] = (null == e ? void 0 : e.split(':')) || [];
                                    return e === eb.M1 || (t && eb.UM.includes(t));
                                }))(null == (e = r.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = r.meta) ? void 0 : t.context)
                                ? (0, u.jsx)(N.$, {
                                      className: ex().toggleSettingsButton,
                                      size: 'm',
                                      radius: 'round',
                                      icon: (0, u.jsx)(Z.I, { variant: 'filter', size: 'xs' }),
                                      'aria-label': n({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                  })
                                : (0, u.jsx)(N.$, {
                                      className: ex().toggleSettingsButton,
                                      size: 'default',
                                      radius: 'xxxl',
                                      icon: (0, u.jsx)(Z.I, { variant: 'filter', size: 'xxs' }),
                                      'aria-label': n({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                      children: (0, u.jsx)(E.HL, {
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, u.jsx)(M.A, { id: 'interface-actions.configure-my-vibe' }),
                                      }),
                                  });
                    }, [n, null == (t = r.meta) ? void 0 : t.context, null == (i = r.meta) ? void 0 : i.seeds]),
                    { handlers: B } = ec({ ref: h, onClose: T, placement: 'bottom', disableSwipe: !s, swipeableProps: { preventScrollOnSwipe: !0 } });
                return (0, u.jsxs)(em.AM, {
                    placement: s ? 'bottom' : 'right',
                    isMobile: s,
                    strategy: 'fixed',
                    transform: !1,
                    portalNode: x,
                    positionElement: x,
                    disableFloatingStyles: !s,
                    open: C,
                    onOpenChange: y,
                    style: k,
                    overlayClassName: ex().overlay,
                    popoverContentRef: h,
                    children: [
                        w,
                        (0, u.jsx)(em.hl, {
                            className: ex().popover,
                            ref: h,
                            'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                            children: (0, u.jsxs)('div', {
                                className: ex().root,
                                children: [
                                    s && (0, u.jsx)('div', { ref: B.ref, onMouseDown: B.onMouseDown, className: ex().swipeableArea }),
                                    (0, u.jsxs)('div', {
                                        className: ex().header,
                                        children: [
                                            (0, u.jsx)(E.DZ, {
                                                variant: 'h3',
                                                size: 's',
                                                weight: 'bold',
                                                'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                                children: (0, u.jsx)(M.A, { id: 'interface-actions.my-vibe-settings' }),
                                            }),
                                            (0, u.jsxs)('div', {
                                                className: ex().actions,
                                                children: [
                                                    (0, u.jsx)(I.m_, {
                                                        offsetOptions: 4,
                                                        placement: 'left',
                                                        text: n({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                        children: (0, u.jsx)(N.$, {
                                                            variant: 'outline',
                                                            radius: 'round',
                                                            size: 'xxxs',
                                                            icon: (0, u.jsx)(Z.I, { variant: 'reset', size: 'xxxs' }),
                                                            onClick: S,
                                                            disabled: !!r.isMyVibe,
                                                            'aria-hidden': !!r.isMyVibe,
                                                            'aria-disabled': P,
                                                            'aria-label': n({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                            ref: m,
                                                            'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                        }),
                                                    }),
                                                    (0, u.jsx)(N.$, {
                                                        radius: 'round',
                                                        color: 'secondary',
                                                        size: 'xxs',
                                                        icon: (0, u.jsx)(Z.I, { variant: 'close', size: 'xxs' }),
                                                        onClick: T,
                                                        'aria-label': n({ id: 'interface-actions.close-my-vibe-settings' }),
                                                        ref: b,
                                                        'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, u.jsx)(eh.C, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
            var eC = i(16112),
                ef = i(56862),
                ey = i(51363),
                ej = i.n(ey);
            let eT = (0, m.PA)((e) => {
                    var t;
                    let { context: i, onResetClick: a, className: n } = e,
                        {
                            vibe: r,
                            settings: { isMobile: s },
                            experiments: o,
                        } = (0, Y.g)(),
                        { formatMessage: l } = (0, v.A)(),
                        d = (0, eC.A)(r.meta),
                        c = i && !s,
                        m = (0, k.L)(() => {
                            var e;
                            return o.checkExperiment(G.z.WebNextVibeDescription, 'on') && (null == (e = r.meta) ? void 0 : e.isMix)
                                ? l({ id: 'vibe-actions.vibe-context' }, { type: r.meta.type, name: i })
                                : i;
                        });
                    return (0, u.jsxs)('div', {
                        className: (0, _.$)(ej().root, n),
                        children: [
                            c &&
                                (0, u.jsx)(ef.O, {
                                    size: 'm',
                                    iconSize: 'xs',
                                    withScaleAnimation: !1,
                                    isPinned: null == (t = r.meta) ? void 0 : t.isPinned,
                                    onClick: d,
                                    className: ej().pinButton,
                                }),
                            (0, u.jsx)(eA, {}),
                            i &&
                                (0, u.jsxs)('div', {
                                    className: (0, _.$)(ej().context),
                                    'data-test-id': f.e8.vibe.VIBE_CONTEXT,
                                    children: [
                                        (0, u.jsx)(E.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', lineClamp: 1, children: m }),
                                        (0, u.jsx)(N.$, {
                                            className: ej().resetButton,
                                            variant: 'text',
                                            radius: 'round',
                                            withRipple: !1,
                                            icon: (0, u.jsx)(Z.I, { variant: 'close', size: 'xxs' }),
                                            onClick: a,
                                            'aria-label': ''.concat(l({ id: 'vibe-actions.reset-settings' }), ' ').concat(m),
                                            'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                ek = 'vibe-block',
                eN = 'vibe-block-controls',
                eP = (0, m.PA)((e) => {
                    var t, i, a, n;
                    let { className: r } = e,
                        s = (0, g.useRouter)(),
                        { vibe: o, experiments: l, user: d, freeAccess: c } = (0, Y.g)(),
                        m = (0, p.useRef)(null),
                        [b, v] = (0, T.d)(),
                        { screen: h, block: x } = (0, O.j)(),
                        A = null == h ? void 0 : h.pageIdForFrom,
                        { blockIdForFrom: C } = null != x ? x : {},
                        {
                            openPaymentWidgetModal: y,
                            isShimmerActive: j,
                            isShimmerVisible: k,
                            mainText: N,
                            mainTextA11y: P,
                            additionText: S,
                        } = (0, U.D)({ storeName: 'music', isEnabled: c.isVibeStartRestricted, offerElement: { element: b, intersectionPropertyId: eN } }),
                        { isIntersecting: I } = null != (a = (0, R.BL)([m], { preflightCheck: !1 }, !m.current)[ek]) ? a : {},
                        w = (0, H.N)().get(z.QG),
                        {
                            isVibeContext: B,
                            isPlaying: L,
                            togglePlay: D,
                            resetContext: F,
                        } = (0, K.B)({ seeds: null != (n = null == (t = o.meta) ? void 0 : t.seeds) ? n : [], pageIdForFrom: A, blockIdForFrom: C }),
                        Z = l.checkExperiment(G.z.WebNextDisableVibeSettings, 'on') || c.isVibeStartRestricted || !d.isAuthorized,
                        J = (0, p.useCallback)(() => {
                            B ? F() : o.vibeResetLoadingState !== X.G.PENDING && o.vibeReset();
                        }, [B, o, F]),
                        Q = (0, p.useCallback)(() => {
                            if (!d.isAuthorized) {
                                if (!w.authorizationUrl) return;
                                s.push(w.authorizationUrl);
                                return;
                            }
                            c.isVibeStartRestricted && y();
                        }, [d.isAuthorized, w.authorizationUrl, s, c.isVibeStartRestricted, y]),
                        ee = (0, p.useCallback)(
                            (e) => {
                                (e.stopPropagation(), e.preventDefault(), Q());
                            },
                            [Q],
                        ),
                        et = (0, p.useCallback)(() => {
                            if (c.isVibeStartRestricted || !d.isAuthorized) return void Q();
                            D();
                        }, [c.isVibeStartRestricted, d.isAuthorized, D, Q]),
                        ei = (0, p.useMemo)(
                            () =>
                                l.checkExperiment(G.z.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, u.jsx)(W, { className: er().vibeAnimation })
                                    : (0, u.jsx)(V, { isIntersecting: I, className: er().vibeAnimation }),
                            [l, I],
                        ),
                        en = (0, p.useMemo)(() => (0, u.jsx)($.H, { size: 'l', className: er().button }), []);
                    return (
                        (0, p.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        d.isAuthorized && o.isNeededToLoad && (0, p.use)(o.getLastVibe()),
                        (0, u.jsxs)('div', {
                            className: (0, _.$)(er().root, { [er().root_freemium]: c.isVibeStartRestricted || !d.isAuthorized }, r),
                            ref: m,
                            'data-intersection-property-id': ek,
                            'data-test-id': f.e8.vibe.VIBE_BLOCK,
                            children: [
                                ei,
                                (0, u.jsxs)('div', {
                                    className: er().controls,
                                    onClick: ee,
                                    ref: v,
                                    'data-intersection-property-id': eN,
                                    children: [
                                        (0, u.jsx)(ea, {
                                            className: er().playButton,
                                            isPlaying: L,
                                            ariaDisabled: c.isVibeStartRestricted || !d.isAuthorized,
                                            onClick: et,
                                        }),
                                        !Z && (0, u.jsx)(eT, { className: er().settingsButton, context: null == (i = o.meta) ? void 0 : i.context, onResetClick: J }),
                                        (c.isVibeStartRestricted || !d.isAuthorized) &&
                                            (0, u.jsx)(E.HL, {
                                                className: er().subscriptionText,
                                                variant: 'div',
                                                size: 'l',
                                                'data-test-id': f.e8.vibe.MY_VIBE_SUBSCRIPTION_TEXT,
                                                children: (0, u.jsx)(M.A, { id: 'vibe-freemium.available-in-plus', values: { br: (0, u.jsx)('br', {}) } }),
                                            }),
                                        !d.isAuthorized && en,
                                        d.isAuthorized &&
                                            c.isVibeStartRestricted &&
                                            (0, u.jsx)(q.b, {
                                                isShimmerActive: j,
                                                isShimmerVisible: k,
                                                onClick: y,
                                                mainText: N,
                                                ariaLabel: P,
                                                additionText: S,
                                                className: er().button,
                                                'data-test-id': f.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON,
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            eP.displayName = 'VibeBlock';
            var eS = i(20129),
                eI = i(53301),
                eE = i(67858),
                ew = i(69630),
                eB = i(44318),
                eM = i(38501),
                eO = i(2946),
                eR = i(44450),
                eL = i(26e3),
                eW = i(40210),
                eV = i(64284),
                eD = i(86535),
                eF = i(98427),
                eU = i(37670),
                ez = i(83210),
                eH = i(78940),
                eK = i(8655),
                eY = i(69704),
                eG = i(34303),
                eX = i(43522),
                eq = i(86790),
                e$ = i(60266),
                eZ = i(66522),
                eJ = i.n(eZ),
                eQ = i(65453);
            !(function (e) {
                ((e.EVERY_SHOW = 'every_show'), (e.ONCE_PER_SESSION = 'once_per_session'));
            })(a || (a = {}));
            var e0 = i(35948),
                e1 = i(92867);
            !(function (e) {
                ((e.ONCE = 'once'), (e.LOOP = 'loop'));
            })(n || (n = {}));
            var e2 = i(35402);
            let e8 = (e) => {
                let { animation: t, className: i, onStart: a } = e,
                    [r, s] = (0, p.useState)(null),
                    [o, l] = (0, p.useState)(!1),
                    [d, c] = (0, p.useState)(!1);
                return ((0, p.useEffect)(() => {
                    if (!r) return;
                    let e = !1,
                        i = !1,
                        s = () => {
                            e || ((e = !0), r.play());
                        },
                        o = () => {
                            e && !i && ((i = !0), a());
                        },
                        d = () => l(!0),
                        u = () => {
                            t.repeatMode !== n.LOOP && c(!0);
                        };
                    return (
                        r.addEventListener('load', s),
                        r.addEventListener('render', o),
                        r.addEventListener('complete', u),
                        r.addEventListener('loadError', d),
                        r.addEventListener('renderError', d),
                        r.isLoaded && s(),
                        () => {
                            (r.removeEventListener('load', s),
                                r.removeEventListener('render', o),
                                r.removeEventListener('complete', u),
                                r.removeEventListener('loadError', d),
                                r.removeEventListener('renderError', d));
                        }
                    );
                }, [t.repeatMode, r, a]),
                o || d)
                    ? null
                    : (0, u.jsx)(e2.j, { src: t.url, loop: t.repeatMode === n.LOOP, autoplay: !1, dotLottieRefCallback: s, className: i });
            };
            var e5 = i(78991),
                e6 = i.n(e5);
            let e9 = (e) => {
                var t, i;
                let { content: n, isVisible: r } = e,
                    { formatMessage: s } = (0, v.A)(),
                    o = n.action.weblink,
                    l = n.cover.animation,
                    d = null == (t = n.label) ? void 0 : t.text,
                    c = null == (i = n.label) ? void 0 : i.color,
                    _ = (0, eH.Z)(o),
                    {
                        buttonRef: m,
                        isAnimationActive: b,
                        handleAnimationStart: h,
                    } = ((e, t) => {
                        let { entryPoint: i } = (0, Y.g)().main,
                            n = (0, p.useRef)(null),
                            [r, s] = (0, p.useState)(!1),
                            [o, l] = (0, p.useState)(!1),
                            [d, c] = (0, p.useState)(null),
                            u = (0, e1.U)(e0.x),
                            _ = null == e ? void 0 : e.url,
                            m = (null == e ? void 0 : e.launchPolicy) === a.ONCE_PER_SESSION;
                        ((0, p.useEffect)(() => {
                            let e = n.current;
                            if (!e) return;
                            if ('undefined' == typeof IntersectionObserver) return void s(!0);
                            let t = new IntersectionObserver((e) => {
                                let [t] = e;
                                return s(!!(null == t ? void 0 : t.isIntersecting));
                            });
                            return (t.observe(e), () => t.disconnect());
                        }, []),
                            (0, p.useEffect)(() => {
                                let e = () => l(!document.hidden);
                                return (e(), document.addEventListener('visibilitychange', e), () => document.removeEventListener('visibilitychange', e));
                            }, []));
                        let b = !!(_ && t && r && o && !u);
                        (0, p.useEffect)(() => {
                            if (!b || !_) return void c(null);
                            c(m && i.checkIsAnimationPlayed(_) ? null : _);
                        }, [_, b, i, m]);
                        let v = (0, j.c)(() => {
                            _ && m && i.markAnimationPlayed(_);
                        });
                        return { buttonRef: n, isAnimationActive: !!(e && d === _), handleAnimationStart: v };
                    })(l, r),
                    g = l && b,
                    x = (0, j.c)((e) => {
                        0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), _(e));
                    });
                return (0, u.jsxs)(eQ.N, {
                    ref: m,
                    href: o,
                    onClick: x,
                    className: e6().root,
                    'aria-label': d || s({ id: 'interface-actions.more-details' }),
                    'data-test-id': f.Kq.mainPageEntryPoint.MAIN_PAGE_ENTRY_POINT_BUTTON,
                    children: [
                        d &&
                            (0, u.jsx)(E.HL, {
                                className: e6().caption,
                                lineClamp: 3,
                                size: 'm',
                                variant: 'span',
                                weight: 'bold',
                                style: c ? { color: c } : void 0,
                                children: d,
                            }),
                        (0, u.jsxs)('div', {
                            className: e6().imageContainer,
                            children: [
                                (0, u.jsx)('div', {
                                    className: e6().imageContent,
                                    children: (0, u.jsx)(P._V, { className: e6().image, fit: 'cover', src: n.cover.image.url, withAvatarReplace: !0 }),
                                }),
                                g && (0, u.jsx)(e8, { animation: l, className: e6().animation, onStart: h }, l.url),
                            ],
                        }),
                    ],
                });
            };
            var e4 = i(67174),
                e7 = i(93135),
                e3 = i.n(e7);
            let te = (e) => {
                    let { href: t, imageSrc: i, children: a, className: n } = e,
                        r = (0, eH.Z)(t);
                    return (0, u.jsxs)(eQ.N, {
                        onClick: r,
                        className: (0, _.$)(e3().root, n),
                        children: [
                            (0, u.jsx)(E.HL, { className: e3().caption, lineClamp: 3, size: 'm', variant: 'span', weight: 'bold', children: a }),
                            (0, u.jsx)('div', {
                                className: e3().imageContainer,
                                children: (0, u.jsx)(P._V, { className: e3().image, fit: 'cover', src: i, withAvatarReplace: !0 }),
                            }),
                        ],
                    });
                },
                tt = (0, e4.u)('/slides/special/:campaignId', { params: { campaignId: 'summer_2026' } }).href,
                ti = (0, m.PA)(() => {
                    let { main: e, words: t } = (0, Y.g)(),
                        { content: i, withEntryPointContent: a } = e.entryPoint,
                        n = a ? i : null;
                    return n
                        ? (0, u.jsx)(e9, { content: n, isVisible: !t.bigCardPanel.isOpened })
                        : (0, u.jsx)(te, {
                              href: tt,
                              imageSrc: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a7d54bea0c2131932ceea77/orig',
                              children: (0, u.jsx)(M.A, { id: 'page.summer_2026_title' }),
                          });
                });
            var ta = i(54721),
                tn = i(7833),
                tr = i(57496),
                ts = i(33979),
                to = i(70621),
                tl = i(59717),
                td = i(86200),
                tc = i(8641),
                tu = i(37173),
                t_ = i(5407),
                tm = i(91467),
                tp = i(51318),
                tb = i(17071),
                tv = i(38860),
                th = i(9630),
                tg = i(33355),
                tx = i(52726),
                tA = i(35262),
                tC = i(49738),
                tf = i(63955),
                ty = i(16704),
                tj = i(5915),
                tT = i(24437),
                tk = i(80643),
                tN = i(29008),
                tP = i(91292),
                tS = i(92633),
                tI = i.n(tS);
            let tE = 'https://avatars.mds.yandex.net/get-music-misc/29541/img.698c9ec84f02b819695579e7/orig',
                tw = (0, m.PA)((e) => {
                    let { album: t, className: i, playButton: a } = e,
                        {
                            sonataState: n,
                            fullscreenPlayer: r,
                            settings: { isMobile: s },
                        } = (0, Y.g)(),
                        { formatMessage: o } = (0, v.A)(),
                        l = (0, th.e)(),
                        d = (0, to.D)(),
                        c = (0, tk.S)(),
                        m = (0, tN.r)(null == t ? void 0 : t.type),
                        p = (null == t ? void 0 : t.title) ? ''.concat(m, ' ').concat(t.title) : m,
                        b = n.entityMeta,
                        h = (0, j.c)((e) => {
                            (e.stopPropagation(),
                                (0, e_.P)(e, tI().ripple),
                                null == l || l.moveForward(),
                                d({ actionType: x.ActionType.Skip, userInteractionType: x.UserInteractionType.Tap }));
                        }),
                        g = (0, j.c)((e) => {
                            (e.stopPropagation(),
                                (0, e_.P)(e, tI().ripple),
                                null == l || l.moveBackward(),
                                d({ actionType: x.ActionType.Backskip, userInteractionType: x.UserInteractionType.Tap }));
                        }),
                        A = (0, j.c)(() => {
                            n.isGenerativeContext || (r.showFullscreenPlayerModal(), c({ to: x.AppScreen.PlayerScreen }));
                        }),
                        C = (0, k.L)(() => {
                            if (b) return n.isGenerativeContext ? b.coverUri || tE : (null == t ? void 0 : t.coverUri) || tE;
                        }),
                        y = (0, j.c)(() => {
                            c({ to: x.AppScreen.AlbumScreen });
                        }),
                        T = (0, k.L)(() => {
                            var e, i, r, o;
                            return C
                                ? !s && (null == t ? void 0 : t.url)
                                    ? (0, u.jsx)(tP.N, {
                                          className: tI().link,
                                          href: t.url,
                                          'aria-label': p,
                                          onClick: y,
                                          children: (0, u.jsx)(
                                              P._V,
                                              {
                                                  src: C,
                                                  className: (0, _.$)(tI().cover, {
                                                      [tI().cover_hiddenOnCompactPause]: !!a,
                                                      [tI().cover_generative]: n.isGenerativeContext,
                                                  }),
                                                  fit: 'cover',
                                                  size: 400,
                                                  withAvatarReplace: !0,
                                                  alt: p,
                                                  'aria-hidden': !0,
                                              },
                                              null != (o = null == (e = n.entityMeta) ? void 0 : e.idWithContext) ? o : 'default',
                                          ),
                                      })
                                    : (0, u.jsx)(
                                          P._V,
                                          {
                                              src: C,
                                              className: (0, _.$)(tI().cover, { [tI().cover_hiddenOnCompactPause]: !!a, [tI().cover_generative]: n.isGenerativeContext }),
                                              onClick: A,
                                              fit: 'cover',
                                              size: 400,
                                              withAvatarReplace: !0,
                                              alt: p,
                                              'aria-hidden': !0,
                                          },
                                          null != (r = null == (i = n.entityMeta) ? void 0 : i.idWithContext) ? r : 'default',
                                      )
                                : null;
                        });
                    return (0, u.jsxs)('div', {
                        className: (0, _.$)(tI().root, i),
                        'aria-label': n.isGenerativeContext ? void 0 : p,
                        children: [
                            !n.isGenerativeContext &&
                                s &&
                                (0, u.jsx)(N.$, {
                                    className: (0, _.$)(tI().button, tI().button_backward),
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveBackward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': o({ id: 'player-actions.previous-track' }),
                                    icon: (0, u.jsx)(Z.I, { variant: 'previous', size: 'xs' }),
                                    onClick: g,
                                    'data-test-id': f.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                            (0, u.jsxs)('div', {
                                className: tI().coverContainer,
                                'data-test-id': f.e8.player.VIBE_ALBUM_COVER,
                                children: [T, a && (0, u.jsx)('div', { className: tI().playButtonContainer, children: a })],
                            }),
                            !n.isGenerativeContext &&
                                s &&
                                (0, u.jsx)(N.$, {
                                    className: (0, _.$)(tI().button, tI().button_forward),
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveForward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': o({ id: 'player-actions.next-track' }),
                                    icon: (0, u.jsx)(Z.I, { variant: 'next', size: 'xs' }),
                                    onClick: h,
                                    'data-test-id': f.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                        ],
                    });
                });
            var tB = i(28692),
                tM = i(19934),
                tO = i(7023),
                tR = i(27397),
                tL = i(36361),
                tW = i(33139),
                tV = i(36103),
                tD = i(9618),
                tF = i(98953),
                tU = i(32721),
                tz = i(18130),
                tH = i(34979);
            let tK = (0, m.PA)((e) => {
                let { className: t, trackId: i, albumId: a } = e,
                    { track: n } = (0, Y.g)(),
                    r = (0, j.c)(() => {
                        n.open({ trackId: i, albumId: a });
                    });
                return (0, u.jsx)(tM.Dr, {
                    className: t,
                    onClick: r,
                    icon: (0, u.jsx)(Z.I, { variant: 'note', size: 'xxs' }),
                    'data-test-id': f.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_TRACK,
                    children: (0, u.jsx)(M.A, { id: 'interface-actions.navigate-to-track' }),
                });
            });
            var tY = i(74064),
                tG = i(81066),
                tX = i(39185),
                tq = i(96046),
                t$ = i.n(tq);
            let tZ = (0, m.PA)((e) => {
                var t, i, a;
                let { className: n } = e,
                    r = (0, th.e)(),
                    { formatMessage: s } = (0, v.A)(),
                    o = null != (t = null == r ? void 0 : r.state.playerState.speed.value) ? t : 1,
                    l = null != (i = tX.f_[o]) ? i : 0,
                    [d, c] = (0, p.useState)(l),
                    m = null != (a = tX.pp[d]) ? a : 1,
                    b = (0, j.c)(() => {
                        var e;
                        let t = (d + 1) % tX.pp.length;
                        (c(t), null == r || r.setSpeed(Number(null != (e = tX.pp[t]) ? e : 1)));
                    });
                return (
                    (0, p.useEffect)(() => {
                        let e =
                            null == r
                                ? void 0
                                : r.state.playerState.speed.onChange(() => {
                                      var e;
                                      let t = r.state.playerState.speed.value;
                                      c(null != (e = tX.f_[t]) ? e : 0);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [r]),
                    (0, u.jsxs)(tM.Dr, {
                        className: (0, _.$)(t$().root, n),
                        onClick: b,
                        'aria-label': s({ id: 'interface-actions.speed' }, { speed: m }),
                        isSubMenu: !0,
                        'data-test-id': f.S7.CONTEXT_MENU_SPEED_BUTTON,
                        children: [
                            (0, u.jsx)(M.A, { id: 'player-actions.video-speed' }),
                            (0, u.jsx)(Z.I, { variant: (0, tX.CU)(m, !1), size: 'l', className: t$().icon }),
                        ],
                    })
                );
            });
            var tJ = i(60492),
                tQ = i.n(tJ);
            let t0 = (0, m.PA)((e) => {
                let { onCloseMenu: t } = e,
                    { user: i, sonataState: a, fullscreenPlayer: n } = (0, Y.g)(),
                    { formatMessage: r } = (0, v.A)(),
                    s = (0, tk.S)(),
                    o = null !== a.entityMeta,
                    l = !i.isAuthorized,
                    d = (0, j.c)(() => {
                        (n.showPlayQueue(), s({ to: x.AppScreen.PlayerScreen }), t());
                    }),
                    c = (0, p.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e;
                            return (0, u.jsx)(tM.Dr, {
                                'aria-label': r({ id: 'interface-actions.open-play-queue' }),
                                onClick: d,
                                disabled: !o || t,
                                icon: (0, u.jsx)(Z.I, { variant: 'playQueue', size: 'xxs' }),
                                'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_PLAY_QUEUE_ITEM,
                                children: (0, u.jsx)(M.A, { id: 'interface-actions.open-play-queue' }),
                            });
                        },
                        [r, o, d],
                    );
                return (0, u.jsx)(tf.Z, { isNested: !0, isEnabled: l, placement: 'right', textVariant: 'openQueue', renderChildren: c });
            });
            var t1 = i(51147),
                t2 = i.n(t1);
            let t8 = (0, m.PA)((e) => {
                var t, i, a, n, r, s, o, l;
                let { buttonClassName: d } = e,
                    { sonataState: c, advert: m, fullscreenPlayer: p, quality: b, vibe: h, user: g, experiments: A } = (0, Y.g)(),
                    { formatMessage: C } = (0, v.A)(),
                    y = (0, tL.e)(),
                    T = (0, tR.A)(),
                    P = (0, eC.A)(h.meta),
                    { state: S, setState: I, toggleFalse: E } = (0, eu.e)(!1),
                    w = (0, tk.S)(),
                    B = (0, to.D)(),
                    O = c.entityMeta,
                    R = (0, j.c)((e) => {
                        I(e);
                    }),
                    L = (0, j.c)(() => {
                        (b.modal.open(), E());
                    }),
                    W = (0, j.c)(() => {
                        (p.showSyncLyrics(), w({ to: x.AppScreen.PlayerScreen }), E());
                    }),
                    V = (0, j.c)(() => {
                        (y(c), B({ actionType: x.ActionType.ChangeShuffle, userInteractionType: x.UserInteractionType.Tap }));
                    }),
                    D = (0, j.c)(() => {
                        (T(c), B({ actionType: x.ActionType.ChangeRepeatSettings, userInteractionType: x.UserInteractionType.Tap }));
                    }),
                    F = (0, j.c)(() => {
                        (P(), E());
                    }),
                    U = (0, j.c)((e) => {
                        ((0, e_.P)(e, tQ().ripple), L());
                    }),
                    z = (0, t_.P)(),
                    { shouldShowBuySubscriptionModal: H, showBuySubscriptionModal: X } = (0, tD.q)(),
                    { isPlaying: q, togglePlay: $ } = (0, K.B)({
                        seeds: null != (s = null == O ? void 0 : O.seeds) ? s : [],
                        pageIdForFrom: eF.b.RADIO,
                        blockIdForFrom: ''.concat(eV.U.TRACK, '-').concat(null == O ? void 0 : O.id),
                        parentContextId: (null == O || null == (t = O.mainAlbum) ? void 0 : t.id)
                            ? ''.concat(null == O ? void 0 : O.mainAlbum.id, ':').concat(null == O ? void 0 : O.id)
                            : null == O
                              ? void 0
                              : O.entityId,
                    }),
                    J = (0, j.c)(() => {
                        if (H && g.isAuthorized) return void X();
                        !z() && (q || $());
                    }),
                    Q = c.repeatMode === tB.pM.ONE ? 'repeat_one' : 'repeat',
                    ee = c.repeatMode !== tB.pM.NONE,
                    et = c.shuffle,
                    ei = p.isSyncLyricsMode,
                    ea = !!(null == (i = h.meta) ? void 0 : i.isPinned),
                    en = A.checkExperiment(G.z.WebNextWaveLikesAndShares, 'on') && (null == (a = h.meta) ? void 0 : a.isLikeEnabled),
                    er = !!(h.isMyVibe || h.isShuffleVibe || en),
                    es = A.checkExperiment(G.z.WebNextProductWithoutRecommendation, 'on'),
                    eo = !es && !!h.meta && c.isVibeContext && !er,
                    el = c.canSpeed && ((null == O ? void 0 : O.isNonMusic) || (null == O || null == (n = O.mainAlbum) ? void 0 : n.isNonMusic)),
                    ed = !es && (null == O ? void 0 : O.isNonUserGenerated) && !(null == (r = O.mainAlbum) ? void 0 : r.isNonMusic),
                    ec = (null == O ? void 0 : O.albumId) ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: em, pathname: ep } = (0, tz.b)(ec, {
                        params: { albumId: null != (o = null == O ? void 0 : O.albumId) ? o : '', trackId: null != (l = null == O ? void 0 : O.id) ? l : '' },
                    }),
                    eb = (0, k.L)(() => {
                        var e, t;
                        if (O)
                            return {
                                variant: tF.Y.TRACK,
                                id: O.id,
                                title: O.title,
                                path: ep,
                                trackArtistName: null == (e = O.mainArtist) ? void 0 : e.name,
                                trackArtistId: null == (t = O.mainArtist) ? void 0 : t.id,
                                trackAlbumId: O.albumId,
                            };
                    }),
                    ev = ''.concat(C({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(C({ id: 'warning-messages.can-break-accessibility' })),
                    eh = (0, k.L)(() => {
                        let e = [];
                        return (el && e.push((0, u.jsx)(tZ, {}, 'speed')), e.length > 0 && e.push((0, u.jsx)('div', { className: t2().divider }, 'speed-divider')), e);
                    }),
                    eg = (0, k.L)(() => {
                        let e = [];
                        return (
                            eo &&
                                e.push(
                                    (0, u.jsx)(
                                        tM.Dr,
                                        {
                                            onClick: F,
                                            icon: (0, u.jsx)(Z.I, { variant: ea ? 'pin_filled' : 'pin', size: 'xxs' }),
                                            'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_PIN_ITEM,
                                            children: ea
                                                ? (0, u.jsx)(M.A, { id: 'interface-actions.unpin-my-vibe' })
                                                : (0, u.jsx)(M.A, { id: 'interface-actions.pin-my-vibe' }),
                                        },
                                        'pin',
                                    ),
                                ),
                            ed && e.push((0, u.jsx)(tG.C, { variant: tU.I.TRACK, onClick: J, disabled: !g.isAuthorized, onOpenMenuChange: R }, 'vibe')),
                            e.length > 0 && e.push((0, u.jsx)('div', { className: t2().divider }, 'top-divider')),
                            e
                        );
                    }),
                    ex = (0, k.L)(() => {
                        let e = [];
                        if (O) {
                            var t, i, a, n, r;
                            (e.push((0, u.jsx)(tV.$, { track: O }, 'add-to-playlist')),
                                eb && O.isNonUserGenerated && e.push((0, u.jsx)(tY.H, { shareLink: em, entityMeta: eb }, 'share')),
                                O.isNonUserGenerated &&
                                    O.isTrackMusic &&
                                    (null == (t = O.mainAlbum) ? void 0 : t.id) &&
                                    e.push((0, u.jsx)(tK, { trackId: O.id, albumId: O.mainAlbum.id }, 'navigate-to-track')),
                                O.isNonUserGenerated &&
                                    (O.albums.length || O.mainAlbum) &&
                                    (null == (i = O.mainAlbum) ? void 0 : i.url) &&
                                    e.push((0, u.jsx)(tH.f, { albumUrl: O.mainAlbum.url, albumType: O.mainAlbum.type, trackType: O.type }, 'navigate-to-album')),
                                O.isNonUserGenerated &&
                                    (null == (a = O.artists) ? void 0 : a.length) &&
                                    ((null == (n = O.mainAlbum) ? void 0 : n.isAudiobook) ||
                                        (null == (r = O.mainAlbum) ? void 0 : r.isAlbum) ||
                                        O.isTrackAudiobook ||
                                        O.isTrackMusic) &&
                                    e.push((0, u.jsx)(tW.o, { artists: O.artists }, 'navigate-to-artist')));
                        }
                        return (e.length > 0 && e.unshift((0, u.jsx)('div', { className: t2().divider }, 'bottom-divider')), e);
                    });
                return c.isGenerativeContext
                    ? (0, u.jsx)(N.$, {
                          className: d,
                          radius: 'round',
                          size: 'xxxs',
                          variant: 'text',
                          withRipple: !1,
                          onClick: U,
                          'aria-label': C({ id: 'player-actions.audio-quality' }),
                          icon: (0, u.jsx)(Z.I, { variant: 'settings', size: 'xs' }),
                      })
                    : (0, u.jsxs)(tM.W1, {
                          placement: 'top',
                          offsetOptions: 10,
                          open: S,
                          onOpenChange: R,
                          variant: 'text',
                          icon: (0, u.jsx)(Z.I, { variant: 'more', size: 'xs' }),
                          radius: 'xxxl',
                          className: d,
                          ariaLabel: C({ id: 'interface-actions.context-menu' }),
                          containerDataTestId: f.e8.player.VIBE_CONTEXT_MENU,
                          'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_BUTTON,
                          children: [
                              eg,
                              eh,
                              c.canShuffle &&
                                  (0, u.jsx)(tM.Dr, {
                                      'aria-label': C({ id: 'player-actions.shuffle' }),
                                      onClick: V,
                                      icon: (0, u.jsx)(Z.I, { variant: 'shuffle', size: 'xxs' }),
                                      className: (0, _.$)({ [t2().item_active]: et }),
                                      isSubMenu: !0,
                                      'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_SHUFFLE_ITEM,
                                      children: (0, u.jsx)(M.A, { id: 'player-actions.mix' }),
                                  }),
                              c.canChangeRepeatMode &&
                                  (0, u.jsx)(tM.Dr, {
                                      'aria-label': (0, tO.z)(c.repeatMode, C),
                                      onClick: D,
                                      icon: (0, u.jsx)(Z.I, { variant: Q, size: 'xxs' }),
                                      className: (0, _.$)({ [t2().item_active]: ee }),
                                      isSubMenu: !0,
                                      'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_REPEAT_ITEM,
                                      children: (0, u.jsx)(M.A, { id: 'player-actions.repeat-action' }),
                                  }),
                              !c.isGenerativeContext &&
                                  !m.isAdvertShown &&
                                  (null == O ? void 0 : O.isSyncLyricsAvailable) &&
                                  (0, u.jsx)(tM.Dr, {
                                      'aria-label': ev,
                                      onClick: W,
                                      icon: (0, u.jsx)(Z.I, { variant: 'syncLyrics', size: 'xxs' }),
                                      className: (0, _.$)({ [t2().item_active]: ei }),
                                      'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_SYNC_LYRICS_ITEM,
                                      children: (0, u.jsx)(M.A, { id: 'interface-actions.open-lyrics' }),
                                  }),
                              !c.isGenerativeContext && !m.isAdvertShown && (0, u.jsx)(t0, { onCloseMenu: E }),
                              (0, u.jsx)(tM.Dr, {
                                  onClick: L,
                                  icon: (0, u.jsx)(Z.I, { variant: 'settings', size: 'xxs' }),
                                  'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_AUDIO_QUALITY_ITEM,
                                  children: (0, u.jsx)(M.A, { id: 'player-actions.audio-quality' }),
                              }),
                              ex,
                          ],
                      });
            });
            var t5 = i(55482),
                t6 = i(54112),
                t9 = i(54152),
                t4 = i(97361),
                t7 = i(7147),
                t3 = i.n(t7),
                ie = i(54965),
                it = i(90224),
                ii = i(73171),
                ia = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (n && (n += ' '), (n += a));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => n }));
                        let n = a;
                    },
                    973: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'MoGQRtOtKDQCJc5HZNLw',
                            marquee: 'eYOrGFuz5P6VSNQ_IgdM',
                            content: 'eY9nVaCYr1nX7vFMBaaD',
                            content_static: 'NuV8xfAyyQwIpvv3W2Gy',
                            measure: 'CapcUKn78Iu2s1O6joam',
                        };
                    },
                    1269: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        var a = i(810),
                            n = (function (e) {
                                return e && 'object' == typeof e && 'default' in e ? e : { default: e };
                            })(a);
                        (!(function (e) {
                            if (!e) return;
                            let t = document.createElement('style');
                            (t.setAttribute('type', 'text/css'), (t.innerHTML = e), document.head.appendChild(t));
                        })(
                            '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
                        ),
                            (t.default = a.forwardRef(function (e, t) {
                                let {
                                        style: i = {},
                                        className: r = '',
                                        autoFill: s = !1,
                                        play: o = !0,
                                        pauseOnHover: l = !1,
                                        pauseOnClick: d = !1,
                                        direction: c = 'left',
                                        speed: u = 50,
                                        delay: _ = 0,
                                        loop: m = 0,
                                        gradient: p = !1,
                                        gradientColor: b = 'white',
                                        gradientWidth: v = 200,
                                        onFinish: h,
                                        onCycleComplete: g,
                                        onMount: x,
                                        children: A,
                                    } = e,
                                    [C, f] = a.useState(0),
                                    [y, j] = a.useState(0),
                                    [T, k] = a.useState(1),
                                    [N, P] = a.useState(!1),
                                    S = a.useRef(null),
                                    I = t || S,
                                    E = a.useRef(null),
                                    w = a.useCallback(() => {
                                        if (E.current && I.current) {
                                            let e = I.current.getBoundingClientRect(),
                                                t = E.current.getBoundingClientRect(),
                                                i = e.width,
                                                a = t.width;
                                            (('up' === c || 'down' === c) && ((i = e.height), (a = t.height)),
                                                s && i && a ? k(a < i ? Math.ceil(i / a) : 1) : k(1),
                                                f(i),
                                                j(a));
                                        }
                                    }, [s, I, c]);
                                (a.useEffect(() => {
                                    if (N && (w(), E.current && I.current)) {
                                        let e = new ResizeObserver(() => w());
                                        return (
                                            e.observe(I.current),
                                            e.observe(E.current),
                                            () => {
                                                e && e.disconnect();
                                            }
                                        );
                                    }
                                }, [w, I, N]),
                                    a.useEffect(() => {
                                        w();
                                    }, [w, A]),
                                    a.useEffect(() => {
                                        P(!0);
                                    }, []),
                                    a.useEffect(() => {
                                        'function' == typeof x && x();
                                    }, []));
                                let B = a.useMemo(() => (s ? (y * T) / u : y < C ? C / u : y / u), [s, C, y, T, u]),
                                    M = a.useMemo(
                                        () =>
                                            Object.assign(Object.assign({}, i), {
                                                '--pause-on-hover': !o || l ? 'paused' : 'running',
                                                '--pause-on-click': !o || (l && !d) || d ? 'paused' : 'running',
                                                '--width': 'up' === c || 'down' === c ? '100vh' : '100%',
                                                '--transform': 'up' === c ? 'rotate(-90deg)' : 'down' === c ? 'rotate(90deg)' : 'none',
                                            }),
                                        [i, o, l, d, c],
                                    ),
                                    O = a.useMemo(() => ({ '--gradient-color': b, '--gradient-width': 'number' == typeof v ? ''.concat(v, 'px') : v }), [b, v]),
                                    R = a.useMemo(
                                        () => ({
                                            '--play': o ? 'running' : 'paused',
                                            '--direction': 'left' === c ? 'normal' : 'reverse',
                                            '--duration': ''.concat(B, 's'),
                                            '--delay': ''.concat(_, 's'),
                                            '--iteration-count': m ? ''.concat(m) : 'infinite',
                                            '--min-width': s ? 'auto' : '100%',
                                        }),
                                        [o, c, B, _, m, s],
                                    ),
                                    L = a.useMemo(() => ({ '--transform': 'up' === c ? 'rotate(90deg)' : 'down' === c ? 'rotate(-90deg)' : 'none' }), [c]),
                                    W = a.useCallback(
                                        (e) =>
                                            [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                                                n.default.createElement(
                                                    a.Fragment,
                                                    { key: t },
                                                    a.Children.map(A, (e) => n.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                                ),
                                            ),
                                        [L, A],
                                    );
                                return N
                                    ? n.default.createElement(
                                          'div',
                                          { ref: I, style: M, className: 'rfm-marquee-container ' + r },
                                          p && n.default.createElement('div', { style: O, className: 'rfm-overlay' }),
                                          n.default.createElement(
                                              'div',
                                              { className: 'rfm-marquee', style: R, onAnimationIteration: g, onAnimationEnd: h },
                                              n.default.createElement(
                                                  'div',
                                                  { className: 'rfm-initial-child-container', ref: E },
                                                  a.Children.map(A, (e) => n.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                              ),
                                              W(T - 1),
                                          ),
                                          n.default.createElement('div', { className: 'rfm-marquee', style: R }, W(T)),
                                      )
                                    : null;
                            })));
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var n = null;
                            if ((void 0 !== a && (n = '' + a), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((a = {}), t)) 'key' !== r && (a[r] = t[r]);
                            else a = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    7956: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.OverflowMarquee = void 0));
                        let n = i(4377),
                            r = i(5881),
                            s = i(810),
                            o = a(i(1269)),
                            l = i(7497),
                            d = a(i(973));
                        t.OverflowMarquee = (e) => {
                            let {
                                    children: t,
                                    className: i,
                                    contentClassName: a,
                                    scrollingClassName: c,
                                    speed: u = 50,
                                    delay: _ = 0,
                                    pauseOnHover: m = !0,
                                    pauseOnClick: p = !1,
                                    loop: b = 0,
                                    direction: v = 'left',
                                    autoFill: h = !1,
                                    gradient: g = !1,
                                    gradientColor: x,
                                    gradientWidth: A,
                                    gap: C = 12,
                                    ...f
                                } = e,
                                y = (0, s.useRef)(null),
                                j = (0, s.useRef)(null),
                                [T, k] = (0, s.useState)(!1),
                                [N, P] = (0, s.useState)(!1);
                            ((0, s.useEffect)(() => {
                                let e = window.matchMedia('(prefers-reduced-motion: reduce)'),
                                    t = () => {
                                        P(e.matches);
                                    };
                                return (
                                    t(),
                                    e.addEventListener('change', t),
                                    () => {
                                        e.removeEventListener('change', t);
                                    }
                                );
                            }, []),
                                (0, s.useEffect)(() => {
                                    let e = y.current,
                                        t = j.current;
                                    if (null === e || null === t) return;
                                    let i = () => {
                                        let i = e.clientWidth,
                                            a = t.scrollWidth;
                                        if (0 === i || 0 === a) return void k(!1);
                                        k(a > i);
                                    };
                                    if ((i(), 'undefined' == typeof ResizeObserver)) return;
                                    let a = new ResizeObserver(i);
                                    return (
                                        a.observe(e),
                                        a.observe(t),
                                        () => {
                                            a.disconnect();
                                        }
                                    );
                                }, []));
                            let S = T && !N,
                                I = S && void 0 !== C ? { marginInlineEnd: ''.concat(C, 'px') } : void 0,
                                E = (0, l.useReturnValue)(() =>
                                    S
                                        ? (0, n.jsx)(o.default, {
                                              className: d.default.marquee,
                                              play: S,
                                              speed: u,
                                              delay: _ / 1e3,
                                              loop: b,
                                              direction: v,
                                              autoFill: h,
                                              pauseOnHover: m,
                                              pauseOnClick: p,
                                              gradient: g,
                                              gradientColor: x,
                                              gradientWidth: A,
                                              children: (0, n.jsx)('div', { className: (0, r.clsx)(d.default.content, a), style: I, children: t }),
                                          })
                                        : (0, n.jsx)('div', { className: (0, r.clsx)(d.default.content, d.default.content_static, a), style: I, children: t }),
                                );
                            return (0, n.jsxs)('div', {
                                ref: y,
                                className: (0, r.clsx)(d.default.root, i, S && c),
                                ...f,
                                children: [
                                    (0, n.jsx)('div', { ref: j, className: (0, r.clsx)(d.default.measure, d.default.content, a), 'aria-hidden': !0, children: t }),
                                    E,
                                ],
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                ir = {};
            function is(e) {
                var t = ir[e];
                if (void 0 !== t) return t.exports;
                var i = (ir[e] = { exports: {} });
                return (ia[e].call(i.exports, i, i.exports, is), i.exports);
            }
            ((is.d = (e, t) => {
                for (var i in t) is.o(t, i) && !is.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (is.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (is.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var io = {};
            (() => {
                (Object.defineProperty(io, 'X', { value: !0 }), (io.W = void 0));
                var e = is(7956);
                Object.defineProperty(io, 'W', {
                    enumerable: !0,
                    get: function () {
                        return e.OverflowMarquee;
                    },
                });
            })();
            var il = io.W;
            io.X;
            var id = i(50681),
                ic = i.n(id);
            let iu = {
                    minFontSize: 14,
                    maxFontSize: 20,
                    lineHeight: 1,
                    maxLines: 3,
                    styleVariants: [
                        { fontSize: 20, lineHeight: 1 },
                        { fontSize: 16, lineHeight: 1 },
                        { fontSize: 15, lineHeight: 16 / 15 },
                        { fontSize: 14, lineHeight: 16 / 14 },
                    ],
                },
                i_ = (0, m.PA)((e) => {
                    let { children: t, className: i } = e,
                        { experiments: a } = (0, Y.g)(),
                        [n, r] = (0, T.d)(),
                        s = a.checkExperiment(G.z.WebNextMainPlayerTitle, 'on');
                    return ((0, ii.mf)(n, iu), s)
                        ? (0, u.jsx)('div', {
                              ref: r,
                              className: i,
                              'data-test-id': f.e8.player.VIBE_PLAYERBAR_TRACK_NAME,
                              children: (0, u.jsx)(E.HL, {
                                  variant: 'span',
                                  className: (0, _.$)(ic().trackNameText, ic().trackNameText_multiline),
                                  lineClamp: 3,
                                  children: t,
                              }),
                          })
                        : (0, u.jsx)(il, {
                              className: i,
                              scrollingClassName: ic().scrollingTrackName,
                              contentClassName: ic().trackNameText,
                              pauseOnHover: !1,
                              speed: 35,
                              gap: 32,
                              'data-test-id': f.e8.player.VIBE_PLAYERBAR_TRACK_NAME,
                              children: t,
                          });
                });
            var im = i(79396),
                ip = i.n(im);
            let ib = (0, m.PA)((e) => {
                var t, i;
                let {
                        progress: a,
                        isChangingTimecode: n,
                        shouldShowArtists: r,
                        shouldKeepMobileSpacingOnPause: s,
                        onMouseEnter: o,
                        onMouseLeave: l,
                        children: d,
                        slider: c,
                        overlay: m,
                        tooltip: p,
                        isOverlayVisible: b = !1,
                        ref: v,
                        centerDataTestId: h,
                        'data-test-id': g,
                    } = e,
                    { experiments: x, sonataState: A } = (0, Y.g)(),
                    C = A.entityMeta,
                    f = {
                        '--track-progress': ''.concat(a, '%'),
                        '--progress-transition-duration': n
                            ? '0s'
                            : ((e) => {
                                  if ('default' !== e && void 0 !== e) return 'on1' === e ? '150ms' : '0ms';
                              })(null == (t = x.getExperiment(G.z.WebNextMainPlayerAnimation)) ? void 0 : t.group),
                        '--progress-transition': n ? 'none' : void 0,
                    };
                return (0, u.jsxs)('div', {
                    ref: v,
                    className: ip().root,
                    style: f,
                    'data-test-id': g,
                    children: [
                        (0, u.jsxs)('div', {
                            className: (0, _.$)(ip().center, {
                                [ip().center_withExplicitMark]: null == C ? void 0 : C.explicitDisclaimer,
                                [ip().center_withoutExplicitMark]: !(null == C ? void 0 : C.explicitDisclaimer),
                                [ip().center_spacious]: !s,
                                [ip().center_playing]: A.isPlaying,
                                [ip().center_withTimecode]: b,
                                [ip().center_active]: !A.isGenerativeContext,
                            }),
                            onMouseEnter: o,
                            onMouseLeave: l,
                            'data-test-id': h,
                            children: [
                                (0, u.jsx)(
                                    i_,
                                    { className: ip().trackName, children: d },
                                    ''.concat(null != (i = null == C ? void 0 : C.idWithContext) ? i : 'default', '-').concat(r),
                                ),
                                (null == C ? void 0 : C.explicitDisclaimer) &&
                                    (0, u.jsx)(it.N, {
                                        containerClassName: ip().explicitMarkContainer,
                                        getDescriptionTexts: C.getDescriptionTexts,
                                        size: 'xxxs',
                                        variant: C.explicitDisclaimer,
                                        className: ip().explicitMark,
                                        trackId: C.id,
                                    }),
                                m,
                                !A.isGenerativeContext && c,
                            ],
                        }),
                        p,
                    ],
                });
            });
            var iv = i(55842),
                ih = i.n(iv);
            let ig = (0, m.PA)((e) => {
                let { position: t, duration: i, isVisible: a, children: n, ...r } = e,
                    { sonataState: s } = (0, Y.g)(),
                    o = !!i && !s.isGenerativeContext && a,
                    l = (0, ie.E)(Math.round(t), Math.round(i)),
                    d = (0, ie.E)(Math.round(i), Math.round(i)),
                    c = (0, k.L)(() =>
                        s.isGenerativeContext
                            ? null
                            : (0, u.jsx)('span', {
                                  className: (0, _.$)(ih().timecode, { [ih().timecode_visible]: o }),
                                  'aria-hidden': !0,
                                  'data-test-id': f.e8.player.VIBE_PLAYERBAR_TIMECODE,
                                  children: ''.concat(l, ' / ').concat(d),
                              }),
                    );
                return (0, u.jsx)(ib, { ...r, isOverlayVisible: o, centerDataTestId: f.e8.player.VIBE_PLAYERBAR_TIMECODE_SLIDER, overlay: c, children: n });
            });
            var ix = i(27723),
                iA = i(761),
                iC = i(22696),
                iy = i.n(iC);
            let ij = (0, m.PA)((e) => {
                    let { position: t, duration: i, progress: a, isVisible: n, children: r, ...s } = e,
                        { sonataState: o } = (0, Y.g)(),
                        { ref: l, width: d } = (0, iA.i)(),
                        c = !!(o.entityMeta && i) && !o.isGenerativeContext,
                        m = (0, k.L)(() =>
                            c
                                ? (0, u.jsx)(ix.u, {
                                      progress: a,
                                      position: t,
                                      duration: i,
                                      progressElementWidth: d,
                                      className: (0, _.$)(iy().timecode, { [iy().timecode_visible]: n }),
                                      'data-test-id': f.e8.player.VIBE_PLAYERBAR_TIMECODE,
                                  })
                                : null,
                        );
                    return (0, u.jsx)(ib, { ...s, ref: l, progress: a, tooltip: m, 'data-test-id': f.e8.player.VIBE_PLAYERBAR_TIMECODE_SLIDER, children: r });
                }),
                iT = (0, m.PA)((e) => {
                    var t, i;
                    let { shouldShowArtists: a, shouldShowArtistsWithTrackTitle: n, shouldKeepMobileSpacingOnPause: r } = e,
                        {
                            experiments: s,
                            sonataState: o,
                            advert: l,
                            settings: { isMobile: d },
                        } = (0, Y.g)(),
                        { formatMessage: c } = (0, v.A)(),
                        m = (0, th.e)(),
                        b = o.entityMeta,
                        h = null != (t = o.position) ? t : 0,
                        g = null != (i = o.duration) ? i : 0,
                        [x, A] = (0, p.useState)(null),
                        C = (0, p.useRef)(!1),
                        { state: y, toggleTrue: T, toggleFalse: N } = (0, eu.e)(!1),
                        P = C.current && null != x ? x : h,
                        S = g > 0 ? (Math.min(P, g) / g) * 100 : 0,
                        I = (0, t4.P)(P),
                        E = (0, t4.P)(g),
                        w = (0, p.useMemo)(
                            () =>
                                (0, t5.A)(() => {
                                    N();
                                }, 1e3),
                            [N],
                        ),
                        B = (0, j.c)((e, t) => {
                            l.isAdvertShown || ((C.current = !t), d && (T(), w.cancel(), w()), t ? null == m || m.setProgress(e) : A(e));
                        }),
                        M = (0, k.L)(() => {
                            if (o.isGenerativeContext)
                                return (null == b ? void 0 : b.title)
                                    ? (0, u.jsxs)(u.Fragment, {
                                          children: [
                                              (0, u.jsx)('span', {
                                                  className: t3().generativeIcon,
                                                  children: (0, u.jsx)(Z.I, {
                                                      size: 'xs',
                                                      variant: 'infinity',
                                                      'data-test-id': f.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON,
                                                  }),
                                              }),
                                              (0, u.jsx)('span', { className: t3().generativeTitle, children: b.title }),
                                          ],
                                      })
                                    : (0, u.jsx)(Z.I, { size: 'xs', variant: 'infinity', 'data-test-id': f.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON });
                            let e = [],
                                t = [];
                            return (
                                b && (e.push((0, t9.X)(b.artists)), e.push('—')),
                                (null == b ? void 0 : b.title) && t.push(b.title),
                                !(null == b ? void 0 : b.isRemoved) && (null == b ? void 0 : b.version) && t.push('('.concat(b.version, ')')),
                                (0, u.jsxs)(u.Fragment, {
                                    children: [
                                        e.length > 0 &&
                                            (a || n) &&
                                            (0, u.jsx)('span', {
                                                className: (0, _.$)(t3().artists, { [t3().artists_hidden]: !a, [t3().artists_visibleOnCompact]: n }),
                                                children: e.join(' '),
                                            }),
                                        t.join(' '),
                                    ],
                                })
                            );
                        }),
                        O = (0, u.jsx)(t6.A, {
                            className: t3().slider,
                            'aria-label': c({ id: 'player-actions.timecode-control' }),
                            'aria-valuetext': ''.concat(I, ' / ').concat(E),
                            disabled: !b || l.isAdvertShown,
                            onChange: B,
                            onFocus: T,
                            onBlur: N,
                            maxValue: Math.round(g),
                            mode: 'deferred',
                            value: Math.round(P),
                            showThumbVariant: 'never',
                            trackSize: 's',
                            thumbSize: 's',
                        }),
                        R = s.checkExperiment(G.z.WebNextPlayerTimecodeTooltip, 'on') ? ij : ig;
                    return (0, u.jsx)(R, {
                        position: P,
                        duration: g,
                        progress: S,
                        isVisible: y,
                        isChangingTimecode: C.current,
                        shouldShowArtists: a,
                        shouldKeepMobileSpacingOnPause: r,
                        onMouseEnter: T,
                        onMouseLeave: N,
                        slider: O,
                        children: M,
                    });
                });
            var ik = i(19376),
                iN = i(12670),
                iP = i(95147),
                iS = i.n(iP);
            let iI = (0, m.PA)(() => {
                    var e, t;
                    let { vibe: i, sonataState: a, advert: n, freePlayerAccess: r, freeAccess: s } = (0, Y.g)(),
                        { openIntroModalFromPlay: o } = (0, tg.e)(),
                        { formatMessage: l } = (0, v.A)(),
                        d = (0, th.e)(),
                        c = (0, t_.P)(),
                        m = (0, ts.g)(),
                        b = (0, tm.r)(),
                        h = (0, to.D)(),
                        { screen: g } = (0, O.j)(),
                        A = null == g ? void 0 : g.pageIdForFrom;
                    (0, ik.e)();
                    let { togglePlay: C } = (0, K.B)({
                            seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                            pageIdForFrom: A,
                            blockIdForFrom: ''.concat(x.EntityTypes.MyWave, '-').concat(eV.U.RADIO),
                            onPlayInterrupted: () => r.showRestrictionModal(tu.W.Interrupted),
                        }),
                        y = a.entityMeta,
                        T = (0, j.c)((e) => {
                            (e.stopPropagation(), null == d || d.moveForward(), h({ actionType: x.ActionType.Skip, userInteractionType: x.UserInteractionType.Tap }));
                        }),
                        P = (0, j.c)((e) => {
                            (e.stopPropagation(),
                                null == d || d.moveBackward(),
                                h({ actionType: x.ActionType.Backskip, userInteractionType: x.UserInteractionType.Tap }));
                        }),
                        S = (0, j.c)(() => {
                            if (n.isAdvertShown) {
                                var e;
                                null == b || null == (e = b.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!o())
                                if (y)
                                    (null == d || d.togglePause(),
                                        h({ actionType: a.isPlaying ? x.ActionType.Pause : x.ActionType.Play, userInteractionType: x.UserInteractionType.Tap }));
                                else {
                                    if (s.isVibeStartRestricted) return void r.showRestrictionModal(tu.W.Interrupted);
                                    (C(), a.isPlaying || m());
                                }
                        }),
                        I = (0, j.c)(() => {
                            c() || S();
                        }),
                        E = (0, j.c)((e) => {
                            e || r.hideRestrictionModal();
                        }),
                        w = (0, p.useCallback)(
                            () =>
                                (0, u.jsx)(ty.D, {
                                    className: (0, _.$)(iS().playButton, { [iS().playButton_playing]: a.isPlaying }),
                                    isPlaying: a.isPlaying,
                                    iconClassName: iS().playButtonIcon,
                                    color: 'secondary',
                                    onClick: I,
                                }),
                            [I, a.isPlaying],
                        ),
                        B = (0, k.L)(() => {
                            let e = y ? 'fullTracks' : 'vibe';
                            return r.shownRestrictionModal === iN.h.PlayerAuthorization
                                ? (0, u.jsx)(tf.Z, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: E, renderChildren: w })
                                : r.shownRestrictionModal === iN.h.PlayerSubscription
                                  ? (0, u.jsx)(tx.S, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: E, renderChildren: w })
                                  : w();
                        });
                    return (0, u.jsxs)('div', {
                        className: iS().root,
                        children: [
                            !a.isGenerativeContext &&
                                (0, u.jsx)(N.$, {
                                    className: iS().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canMoveBackward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.previous-track' }),
                                    icon: (0, u.jsx)(Z.I, { variant: 'previous', size: 'xs' }),
                                    onClick: P,
                                    'data-test-id': f.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                            B,
                            !a.isGenerativeContext &&
                                (0, u.jsx)(N.$, {
                                    className: iS().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canMoveForward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.next-track' }),
                                    icon: (0, u.jsx)(Z.I, { variant: 'next', size: 'xs' }),
                                    onClick: T,
                                    'data-test-id': f.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                        ],
                    });
                }),
                iE = (0, m.PA)((e) => {
                    var t, i;
                    let { albumCoverClassName: a, className: n, presentation: r } = e,
                        {
                            vibe: s,
                            sonataState: o,
                            advert: l,
                            fullscreenPlayer: d,
                            settings: { isMobile: c },
                            freePlayerAccess: m,
                            freeAccess: b,
                            user: h,
                        } = (0, Y.g)(),
                        { openIntroModalFromPlay: g } = (0, tg.e)(),
                        { formatMessage: A } = (0, v.A)(),
                        C = (0, tv.z)(),
                        y = (0, tc.d)(),
                        { isLiked: T, handleLike: N, isDisliked: P, handleDislike: S } = (0, tj.f)(),
                        I = (0, th.e)(),
                        E = (0, t_.P)(),
                        w = (0, ts.g)(),
                        B = (0, tm.r)(),
                        M = (0, to.D)(),
                        { screen: R } = (0, O.j)(),
                        L = null == R ? void 0 : R.pageIdForFrom,
                        { togglePlay: W } = (0, K.B)({
                            seeds: null != (i = null == (t = s.meta) ? void 0 : t.seeds) ? i : [],
                            pageIdForFrom: L,
                            blockIdForFrom: ''.concat(x.EntityTypes.MyWave, '-').concat(eV.U.RADIO),
                            onPlayInterrupted: () => m.showRestrictionModal(tu.W.Interrupted),
                        }),
                        V = o.entityMeta,
                        D = null == V ? void 0 : V.mainAlbum,
                        { playButtonVariant: F, shouldKeepMobileSpacingOnPause: U } = r,
                        z = 'inline' !== F,
                        H = !o.isPlaying && !V,
                        G = (0, j.c)(() => {
                            if (o.entityMeta) {
                                if (d.modal.isOpened) return void d.modal.close();
                                d.modal.open();
                            }
                        });
                    (0, p.useEffect)(() => {
                        if (!o.isGenerativeContext)
                            return (
                                null == C || C.addShortcutsListener(tb.M.MAIN, tp.l.TOGGLE_FULLSCREEN_PLAYER, G),
                                null == C || C.addShortcutsListener(tb.M.MAIN, tp.l.LIKE, N),
                                null == C || C.addShortcutsListener(tb.M.MAIN, tp.l.DISLIKE, S),
                                () => {
                                    (null == C || C.removeShortcutsListener(tb.M.MAIN, tp.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == C || C.removeShortcutsListener(tb.M.MAIN, tp.l.LIKE),
                                        null == C || C.removeShortcutsListener(tb.M.MAIN, tp.l.DISLIKE));
                                }
                            );
                    }, [S, N, C, o.isGenerativeContext, o.entityMeta, G]);
                    let X = (0, j.c)(async (e, t) => {
                            (t && (0, e_.P)(t, tQ().ripple), await y(o, e));
                        }),
                        q = (0, j.c)((e) => {
                            ((0, e_.P)(e, tQ().ripple), S());
                        }),
                        $ = (0, j.c)((e) => {
                            (e && !c && (0, e_.P)(e, tQ().ripple), N());
                        }),
                        Z = (0, j.c)(() => {
                            if (l.isAdvertShown) {
                                var e;
                                null == B || null == (e = B.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!g())
                                if (V)
                                    (null == I || I.togglePause(),
                                        M({ actionType: o.isPlaying ? x.ActionType.Pause : x.ActionType.Play, userInteractionType: x.UserInteractionType.Tap }));
                                else {
                                    if (b.isVibeStartRestricted) return;
                                    (W(), o.isPlaying || w());
                                }
                        }),
                        J = (0, j.c)((e) => {
                            ('cover' !== F && (0, e_.P)(e, tQ().ripple), E() || Z());
                        });
                    (0, p.useEffect)(
                        () => (
                            null == C || C.addShortcutsListener(tb.M.MAIN, tp.l.TOGGLE_PLAY, Z),
                            () => {
                                null == C || C.removeShortcutsListener(tb.M.MAIN, tp.l.TOGGLE_PLAY);
                            }
                        ),
                        [Z, C],
                    );
                    let Q = (0, p.useCallback)(
                            () =>
                                (0, u.jsx)(ty.D, {
                                    className: (0, _.$)({
                                        [tQ().button]: 'cover' !== F,
                                        [tQ().button_play]: 'cover' !== F && !o.isPlaying,
                                        [tQ().button_standalone]: 'standalone' === F,
                                        [tQ().playButton]: 'cover' === F,
                                    }),
                                    isPlaying: o.isPlaying,
                                    iconSize: !z && U ? 'xs' : void 0,
                                    iconClassName: (0, _.$)({ [tQ().standalonePlayButtonIcon]: z, [tQ().playButtonIcon]: 'cover' === F }),
                                    color: 'secondary',
                                    onClick: J,
                                }),
                            [J, o.isPlaying, F, z, U],
                        ),
                        ee = (0, k.L)(() => {
                            let e = !V && !h.hasPlus && b.isFreePlaybackDisabled;
                            return e
                                ? h.isAuthorized
                                    ? (0, u.jsx)(tx.S, { isEnabled: b.isVibeStartRestricted, placement: 'top', textVariant: 'vibe', renderChildren: Q })
                                    : (0, u.jsx)(tf.Z, { isEnabled: e, placement: 'top', textVariant: 'vibe', renderChildren: Q })
                                : Q();
                        }),
                        et = (0, k.L)(() =>
                            c
                                ? null
                                : (0, u.jsx)(td.r, {
                                      className: tQ().changeVolume,
                                      buttonClassName: tQ().button,
                                      verticalSliderClassName: tQ().verticalSlider,
                                      variant: tl.q.VERTICAL,
                                      sonataVolume: o.volume,
                                      onVolumeClick: X,
                                  }),
                        );
                    return (0, u.jsxs)('section', {
                        role: 'region',
                        'aria-label': A({ id: 'a11y-regions.player' }),
                        className: (0, _.$)(tQ().root, n),
                        'data-test-id': f.e8.player.VIBE_PLAYERBAR,
                        children: [
                            (0, u.jsx)(tw, { album: D, className: a, playButton: z ? ee : void 0 }),
                            (0, u.jsxs)('div', {
                                className: (0, _.$)(tQ().progress, { [tQ().progress_visible]: !H }),
                                children: [
                                    et,
                                    c && !z && ee,
                                    !c && (0, u.jsx)(tA._, { className: tQ().button, disabled: !V || l.isAdvertShown, isDisliked: P, onClick: q, iconSize: 'xs' }),
                                    r.shouldShowTrackInfo &&
                                        (0, u.jsxs)(u.Fragment, {
                                            children: [
                                                (0, u.jsx)(iT, {
                                                    shouldShowArtists: r.shouldShowArtists,
                                                    shouldShowArtistsWithTrackTitle: r.shouldShowArtistsWithTrackTitle,
                                                    shouldKeepMobileSpacingOnPause: U,
                                                }),
                                                (0, u.jsx)(tC.c, {
                                                    className: (0, _.$)(tQ().button, { [tQ().likeButton_mobilePaused]: 'cover' === F }),
                                                    disabled: !V || l.isAdvertShown,
                                                    isLiked: T,
                                                    onClick: $,
                                                    iconSize: 'xs',
                                                }),
                                            ],
                                        }),
                                    !c &&
                                        (0, u.jsx)(t8, { buttonClassName: (0, _.$)(tQ().button, tQ().important), 'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_BUTTON }),
                                    (0, u.jsx)(tT.e, {}),
                                ],
                            }),
                            !c && (0, u.jsx)(iI, {}),
                        ],
                    });
                }),
                iw = { minFontSize: 24, maxFontSize: 64, maxLines: 2, lineHeight: 0.9 },
                iB = { minFontSize: 48, maxFontSize: 104, maxLines: 4, lineHeight: 0.9 },
                iM = { minFontSize: 48, maxFontSize: 104, maxLines: void 0, lineHeight: 1.1 },
                iO = {
                    minFontSize: 14,
                    maxFontSize: 20,
                    lineHeight: 1,
                    styleVariants: [
                        { fontSize: 20, lineHeight: 1 },
                        { fontSize: 16, lineHeight: 1 },
                        { fontSize: 14, lineHeight: 16 / 14 },
                    ],
                };
            var iR = i(98017),
                iL = i.n(iR);
            let iW = (0, m.PA)((e) => {
                var t;
                let { artist: i, withLink: a, onClick: n, featCoverUri: r } = e,
                    { formatMessage: s } = (0, v.A)(),
                    o = (0, tk.S)(),
                    l = null != r ? r : null == (t = i.cutoutCover) ? void 0 : t.uri,
                    d = s({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                    c = (0, j.c)(() => {
                        o({ to: x.AppScreen.ArtistScreen });
                    }),
                    _ = (0, u.jsx)(P._V, {
                        className: iL().cover,
                        fit: 'contain',
                        src: l,
                        size: 'orig',
                        withAvatarReplace: !0,
                        alt: d,
                        'aria-hidden': !0,
                        withLoadingIndicator: !1,
                    });
                return a
                    ? (0, u.jsx)(tP.N, { className: iL().root, href: i.url, onClick: c, 'aria-hidden': !0, 'data-test-id': f.e8.vibe.VIBE_ARTIST_COVER, children: _ })
                    : (0, u.jsx)('div', { className: iL().root, onClick: n, 'aria-hidden': !0, 'data-test-id': f.e8.vibe.VIBE_ARTIST_COVER, children: _ });
            });
            var iV = i(40907),
                iD = i(58495),
                iF = i(20584),
                iU = i(18593),
                iz = i(76794),
                iH = i(51724),
                iK = i(15461),
                iY = i.n(iK),
                iG = i(53845),
                iX = i.n(iG);
            let iq = (0, m.PA)((e) => {
                let { context: t, isResetAvailable: i, isHidden: a, onReset: n, children: r, contextControl: s, onOpenChange: o, className: l } = e,
                    {
                        vibe: d,
                        sonataState: c,
                        settings: { isMobile: m },
                        main: b,
                    } = (0, Y.g)(),
                    { formatMessage: h } = (0, v.A)(),
                    g = (0, tv.z)(),
                    [x, A] = (0, p.useState)(!1),
                    [C, y] = (0, T.d)(),
                    P = !!t && !a,
                    S = x && P && !s && !!r,
                    I = S || !!s,
                    w = d.isMyVibe && c.isVibeContext;
                ((0, ii.mf)(s ? null : C, iO),
                    (0, p.useEffect)(() => {
                        P || A(!1);
                    }, [P]),
                    (0, p.useEffect)(() => {
                        if (I) return (null == g || g.disable(), () => (null == g ? void 0 : g.enable()));
                    }, [I, g]));
                let B = (0, j.c)(() => {
                        (A(!1), n());
                    }),
                    M = (0, j.c)((e) => {
                        (A(e), null == o || o(e));
                    }),
                    O = (0, k.L)(() =>
                        t
                            ? r
                                ? (0, u.jsx)(tM.W1, {
                                      label: (0, u.jsxs)('span', {
                                          className: iX().label,
                                          children: [
                                              (0, u.jsx)(E.HL, { variant: 'span', className: iY().context, lineClamp: 2, children: t }),
                                              (0, u.jsx)(Z.I, {
                                                  variant: 'arrowDown',
                                                  size: 'xxs',
                                                  className: (0, _.$)(iX().arrow, { [iX().arrow_open]: S }),
                                                  'aria-hidden': !0,
                                              }),
                                          ],
                                      }),
                                      className: iX().trigger,
                                      wrapperClassName: (0, _.$)(iX().triggerContainer, { [iX().triggerContainer_hidden]: !!s }),
                                      menuClassName: (0, _.$)(iX().menu, { [iX().menu_touch]: m }),
                                      radius: 'xxxl',
                                      icon: null,
                                      open: S,
                                      onOpenChange: M,
                                      isMobile: !1,
                                      returnFocus: !s,
                                      offsetOptions: 4,
                                      ariaLabel: ''.concat(t, ': ').concat(h({ id: 'interface-actions.context-menu' })),
                                      tabIndex: a ? -1 : void 0,
                                      containerDataTestId: f.e8.vibe.VIBE_PAGE_CONTEXT_MENU,
                                      'data-test-id': f.e8.vibe.VIBE_PAGE_CONTEXT_MENU_BUTTON,
                                      children: !s && r,
                                  })
                                : (0, u.jsx)('div', {
                                      className: w ? iY().container : iX().staticContext,
                                      children: (0, u.jsx)(E.HL, {
                                          variant: 'span',
                                          className: iY().context,
                                          lineClamp: 2,
                                          'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                          children: t,
                                      }),
                                  })
                            : null,
                    );
                return (0, u.jsxs)('div', {
                    ref: y,
                    className: (0, _.$)(iY().root, iX().root, l, { [iY().root_visible]: P, [iY().root_withEntryPointButton]: b.withEntryPointButton }),
                    'aria-hidden': !P,
                    inert: !P,
                    'data-test-id': f.e8.vibe.VIBE_PAGE_CONTEXT_BLOCK,
                    children: [
                        t && s && (0, u.jsx)('div', { className: (0, _.$)(iX().staticContext, iY().context), children: s }),
                        O,
                        t &&
                            i &&
                            (0, u.jsx)(N.$, {
                                className: (0, _.$)(iY().button, iX().resetButton),
                                radius: 'round',
                                onClick: B,
                                'aria-label': h({ id: 'interface-actions.reset-context' }, { context: t }),
                                tabIndex: a ? -1 : void 0,
                                'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                children: (0, u.jsx)(Z.I, { variant: 'close', size: 'xs', 'aria-hidden': !0, 'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON }),
                            }),
                    ],
                });
            });
            var i$ = i(68974),
                iZ = i(38035),
                iJ = i(79390),
                iQ = i(25555),
                i0 = i(93091),
                i1 = i(27817),
                i2 = i(64546),
                i8 = i(6215),
                i5 = i(54243),
                i6 = i(64247);
            let i9 = (0, m.PA)((e) => {
                let { artist: t, className: i, iconClassName: a, likeActiveClassName: n } = e,
                    {
                        user: r,
                        library: s,
                        pinsCollection: o,
                        settings: { isMobile: l },
                    } = (0, Y.g)(),
                    { shareLink: d, pathname: c } = (0, tz.b)('/artist/:artistId', { params: { artistId: t.id } }),
                    m = s.isArtistLiked(t.id),
                    p = (0, iQ.I)({
                        action: async () => (await s.toggleArtistLike({ entityId: t.id, userId: r.account.data.uid })) === iJ.f.OK,
                        notification: (0, u.jsx)(i5.T, { artist: { ...t, url: c, isLiked: !m } }),
                    }),
                    b = (0, i8.E)(t.id),
                    v = o.isPinned(b),
                    h = (0, iQ.I)({
                        action: async () => !!(await o.toggleArtistPin({ id: t.id }, b)),
                        notification: (0, u.jsx)(i6.l, { artist: { ...t, url: c, isPinned: !v } }),
                    });
                return (0, u.jsxs)(u.Fragment, {
                    children: [
                        !l && (0, u.jsx)(i2.WithOffline, { fallback: (0, u.jsx)(i1.L, { className: i, iconClassName: a, onClick: h, isPinned: v }) }),
                        (0, u.jsx)(i2.WithOffline, {
                            fallback: (0, u.jsx)(i0.T, {
                                className: (0, _.$)(i, m && n),
                                iconClassName: a,
                                onClick: p,
                                isLiked: m,
                                disabled: !r.isAuthorized || !t.isAvailable,
                            }),
                        }),
                        (0, u.jsx)(tY.H, {
                            withNotification: !l,
                            className: i,
                            iconClassName: a,
                            shareLink: d,
                            entityMeta: { variant: tF.Y.ARTIST, id: t.id, title: t.name, path: c },
                            withSubmenu: !1,
                        }),
                    ],
                });
            });
            var i4 = i(60385),
                i7 = i(554),
                i3 = i(18243),
                ae = i(99007),
                at = i(30832),
                ai = i(6322);
            let aa = (0, m.PA)((e) => {
                var t;
                let { playlist: i, className: a, iconClassName: n, likeActiveClassName: r, shareMenuClassName: s, ownerName: o, ownerLogin: l } = e,
                    {
                        user: d,
                        library: c,
                        pinsCollection: m,
                        settings: { isMobile: p },
                    } = (0, Y.g)(),
                    b = i.uuid ? '/playlists/:playlistUuid' : '/users/:userId/playlists/:kind',
                    v = { playlistUuid: null != (t = i.uuid) ? t : '', userId: i.uid, kind: i.kind },
                    { shareLink: h, pathname: g } = (0, tz.b)(b, { params: v }),
                    { href: x } = (0, e4.u)(b, { params: v }),
                    A = i.kind === ae.j.LIKE,
                    C = d.isAuthorized && i.uid === d.account.data.uid,
                    f = (i.visibility === i4.L.PUBLIC || A) && i.isAvailable,
                    y = c.isPlaylistLiked((0, i7.m)(i)),
                    j = (0, iQ.I)({
                        action: async () =>
                            (await c.togglePlaylistLike({ entityId: (0, i7.m)(i), userId: d.account.data.uid, ownerId: i.uid, kindId: i.kind })) === iJ.f.OK,
                        notification: (0, u.jsx)(at.T, { playlist: { ...i, url: x, isLiked: !y } }),
                    }),
                    T = (0, i3.f)(i),
                    k = m.isPinned(T),
                    N = (0, iQ.I)({
                        action: async () => !!(await m.togglePlaylistPin({ uid: i.uid, kind: i.kind }, T)),
                        notification: (0, u.jsx)(ai.l, { playlist: { ...i, url: x, isPinned: !k } }),
                    });
                return (0, u.jsxs)(u.Fragment, {
                    children: [
                        !p && (0, u.jsx)(i1.L, { className: a, iconClassName: n, onClick: N, isPinned: k }),
                        !C && !A && (0, u.jsx)(i0.T, { className: (0, _.$)(a, y && r), iconClassName: n, onClick: j, isLiked: y, disabled: !d.isAuthorized }),
                        (0, u.jsx)(tY.H, {
                            withNotification: !p,
                            withSubmenu: !p,
                            className: a,
                            iconClassName: n,
                            shareLink: h,
                            menuClassName: s,
                            disabled: !f,
                            entityMeta: { variant: tF.Y.PLAYLIST, playlistOwnerName: o, playlistOwnerLogin: l, id: i.kind, title: i.title, path: g },
                        }),
                    ],
                });
            });
            var an = i(65654);
            let ar = (0, m.PA)((e) => {
                var t;
                let { track: i, className: a, iconClassName: n, likeActiveClassName: r, shareMenuClassName: s, artistName: o, artistId: l } = e,
                    {
                        user: d,
                        library: c,
                        settings: { isMobile: m },
                    } = (0, Y.g)(),
                    p = i.albumId ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: b, pathname: v } = (0, tz.b)(p, { params: { albumId: null != (t = i.albumId) ? t : '', trackId: i.id } }),
                    h = c.isTrackLiked(i.id),
                    g = (0, iQ.I)({
                        action: async () => (await c.toggleTrackLike({ entityId: i.id, userId: d.account.data.uid, albumId: i.albumId })) === iJ.f.OK,
                        notification: (0, u.jsx)(an.T, { track: { ...i, isLiked: !h } }),
                    });
                return (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)(i2.WithOffline, {
                            fallback: (0, u.jsx)(i0.T, { className: (0, _.$)(a, h && r), iconClassName: n, onClick: g, isLiked: h, disabled: !d.isAuthorized }),
                        }),
                        i.isNonUserGenerated &&
                            (0, u.jsx)(tY.H, {
                                withNotification: !m,
                                withSubmenu: !m,
                                className: a,
                                iconClassName: n,
                                shareLink: b,
                                menuClassName: s,
                                entityMeta: { variant: tF.Y.TRACK, trackArtistName: o, trackArtistId: l, id: i.id, title: i.title, path: v, trackAlbumId: i.albumId },
                            }),
                    ],
                });
            });
            var as = i(2147),
                ao = i(21869);
            let al = (0, m.PA)((e) => {
                    let { target: t, vibe: i } = e,
                        a = (0, as.K)(i);
                    if (i)
                        return (0, u.jsxs)(u.Fragment, {
                            children: [
                                (0, u.jsx)(ao.S, {
                                    vibe: i,
                                    onLikeClick: a,
                                    className: iX().menuItem,
                                    likeActiveClassName: iX().menuItem_active,
                                    iconClassName: iX().menuItemIcon,
                                }),
                                (0, u.jsx)(i$.u, { vibe: i, className: iX().menuItem, iconClassName: iX().menuItemIcon }),
                            ],
                        });
                    switch (t.type) {
                        case iU.K.Album:
                            return (0, u.jsx)(iZ.z, {
                                className: iX().menuItem,
                                likeActiveClassName: iX().menuItem_active,
                                iconClassName: iX().menuItemIcon,
                                shareMenuClassName: iX().shareMenu,
                                album: t.data,
                                artistName: t.data.artistName,
                                artistId: t.data.artistId,
                            });
                        case iU.K.Artist:
                            return (0, u.jsx)(i9, {
                                className: iX().menuItem,
                                likeActiveClassName: iX().menuItem_active,
                                iconClassName: iX().menuItemIcon,
                                artist: t.data,
                            });
                        case iU.K.Playlist:
                            return (0, u.jsx)(aa, {
                                className: iX().menuItem,
                                likeActiveClassName: iX().menuItem_active,
                                iconClassName: iX().menuItemIcon,
                                shareMenuClassName: iX().shareMenu,
                                playlist: t.data,
                                ownerName: t.data.ownerName,
                                ownerLogin: t.data.ownerLogin,
                            });
                        case iU.K.Various:
                            return (0, u.jsx)(ar, {
                                className: iX().menuItem,
                                likeActiveClassName: iX().menuItem_active,
                                iconClassName: iX().menuItemIcon,
                                shareMenuClassName: iX().shareMenu,
                                track: t.data,
                                artistName: t.data.artistName,
                                artistId: t.data.artistId,
                            });
                    }
                }),
                ad = (0, m.PA)((e) => {
                    var t, i, a, n, r;
                    let { onClick: s, ...o } = e,
                        l = (0, th.e)(),
                        {
                            vibe: d,
                            sonataState: { contextType: c, contextId: _, entityMeta: m, isVibeContext: b },
                        } = (0, Y.g)(),
                        v = (0, iD.D)(c, _),
                        h = ((e, t) => {
                            var i, a, n, r, s, o, l, d, c, u, _, m, p, b, v, h, g, x, A, C, f, y;
                            switch (null != t ? t : null == e ? void 0 : e.sourceContextType) {
                                case iF.h.SEARCH:
                                case iF.h.MUSIC_HISTORY:
                                case iF.h.MUSIC_HISTORY_SEARCH:
                                case iF.h.DOWNLOADED_TRACKS:
                                case iF.h.USER_TRACKS:
                                case iF.h.ARTIST_FAMILIAR_FROM_WAVE:
                                case iF.h.ARTIST_MY_COLLECTION:
                                    return;
                            }
                            switch (null == e ? void 0 : e.type) {
                                case iU.K.Album: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: Number(t.id),
                                            title: null != (r = t.title) ? r : '',
                                            type: t.type,
                                            coverUri: t.coverUri,
                                            artistName: null == (a = t.artists) || null == (i = a[0]) ? void 0 : i.name,
                                            artistId: (null == (n = t.artists) ? void 0 : n[0]) ? String(t.artists[0].id) : void 0,
                                        },
                                    };
                                }
                                case iU.K.Artist: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: String(t.id),
                                            name: null == (s = t.artist) ? void 0 : s.name,
                                            coverUri: null == (l = t.artist) || null == (o = l.cover) ? void 0 : o.uri,
                                            isAvailable: !t.artist || (0, iH.f)(t.artist).available,
                                        },
                                    };
                                }
                                case iU.K.Various: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: String(t.id),
                                            albumId: null == (c = t.albums) || null == (d = c[0]) ? void 0 : d.id,
                                            title: null != (p = t.title) ? p : '',
                                            type: t.type,
                                            coverUri: t.coverUri,
                                            isNonUserGenerated: t.trackSource !== iz.J.UGC && t.trackSource !== iz.J.OWN_REPLACED_TO_UGC,
                                            artistName: null == (_ = t.artists) || null == (u = _[0]) ? void 0 : u.name,
                                            artistId: (null == (m = t.artists) ? void 0 : m[0]) ? String(t.artists[0].id) : void 0,
                                        },
                                    };
                                }
                                case iU.K.Playlist: {
                                    let { meta: t } = e,
                                        [i, a] = String(t.id).split(':'),
                                        n = null != (A = t.uid) ? A : Number(i),
                                        r = null != (C = t.kind) ? C : Number(a);
                                    if (!Number.isFinite(n) || !Number.isFinite(r)) return;
                                    return {
                                        type: e.type,
                                        data: {
                                            uid: n,
                                            kind: r,
                                            uuid: null != (f = t.playlistUuid) ? f : t.uuid,
                                            title: t.title,
                                            coverUri: (null == (b = t.cover) ? void 0 : b.uri) || (null == (h = t.cover) || null == (v = h.itemsUri) ? void 0 : v[0]),
                                            visibility: t.visibility,
                                            isAvailable: null == (y = t.available) || y,
                                            ownerName: null == (g = t.owner) ? void 0 : g.name,
                                            ownerLogin: null == (x = t.owner) ? void 0 : x.login,
                                        },
                                    };
                                }
                                default:
                                    return;
                            }
                        })(
                            c ? (null == l || null == (t = l.state.currentContext.value) ? void 0 : t.data) : void 0,
                            m
                                ? null == l || null == (a = l.state.queueState.currentEntity.value) || null == (i = a.sourceContext)
                                    ? void 0
                                    : i.data.sourceContextType
                                : void 0,
                        ),
                        g = (0, p.useCallback)((e) => (0, u.jsx)(iq, { ...o, ...e, onReset: s }), [s, o]);
                    return b && (null == (n = d.meta) ? void 0 : n.stationType) === eb.q7
                        ? (0, u.jsx)(iV.w, { vibe: d.meta, context: o.context, className: iX().menuItem, renderContextButton: g }, v)
                        : b && (null == (r = d.meta) ? void 0 : r.isLikeEnabled)
                          ? (0, p.createElement)(iq, { ...o, key: v, onReset: s }, (0, u.jsx)(al, { vibe: d.meta }))
                          : (0, p.createElement)(iq, { ...o, key: v, onReset: s }, h && (0, u.jsx)(al, { target: h }));
                }),
                ac = (e) => {
                    var t;
                    return null != (t = e.fallbackMaxLines) ? t : e.maxLines;
                };
            var au = i(76533),
                a_ = i.n(au);
            let am = (e) => {
                    let { textOptions: t, children: i } = e,
                        { setContainerRef: a, lineClamp: n } = ((e) => {
                            let [t, i] = (0, T.d)(),
                                [a, n] = (0, p.useState)(() => ac(e));
                            return (
                                (0, p.useEffect)(() => {
                                    n(ac(e));
                                }, [e.fallbackMaxLines, e.maxLines]),
                                (0, ii.mf)(t, e, n),
                                { setContainerRef: i, lineClamp: a }
                            );
                        })(t);
                    return (0, u.jsx)('div', {
                        ref: a,
                        className: a_().root,
                        'data-test-id': f.e8.vibe.VIBE_DYNAMIC_ARTISTS,
                        children: (0, p.cloneElement)(i, { lineClamp: n }),
                    });
                },
                ap = {
                    src: '/_next/static/media/q2v-glow-w120.1677f964.png',
                    height: 256,
                    width: 400,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEX/e//qkv/7XPX4vv/0UO/nYPj6UO7sP+beSvr6Ren/VvL8k/nrff8yHG/VAAAADHRSTlMBZCkReHVo/v3OUx1DIc6HAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nGNggANmRlYWNiYGBgZGHg52Ti5kESgAAAflAFodTC0aAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 5,
                },
                ab = {
                    src: '/_next/static/media/q2v-glow-w160.81b6098e.png',
                    height: 256,
                    width: 480,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVMaXH/cf30Quf+Tu7ZTvDNZPvhlP/vdPdHyLt4AAAACHRSTlMADLtextdqZIlEHsoAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BgYGBgZGRkYGBgY2VhYmJmRGJApQAD1gA1KQvxbwAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                av = {
                    src: '/_next/static/media/q2v-glow-w200.3dd3deeb.png',
                    height: 256,
                    width: 560,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX/eftMaXH4P+X/T+3UUvTHZ/vflP/lS+7LLK/gAAAACHRSTlMIALNXwM9gvU78oPkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkZGRkYGBgZGBjZWFnYmJmQDBgUgAFNABFuS+NPAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                ah = {
                    src: '/_next/static/media/q2v-glow-w240.520a1100.png',
                    height: 256,
                    width: 640,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX6UfH/Vf/haPn0P+bZjf/6RefTVPX///7NfP79Qub/X/R17Zh8AAAAC3RSTlMtAyrZGzfsB8+eGFOiud8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkYWJiYGVgZGDnYGNjZubkYoCJAAAEdABTyJLycgAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                ag = {
                    src: '/_next/static/media/q2v-glow-w280.b6e7b279.png',
                    height: 256,
                    width: 720,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX/Su7kZfryVfLyP+bUUvXZf/v/ZvXjqv/9POLfof/Fb/xpkARsAAAAC3RSTlMvJCrT4R4MBLkx67AUSkUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BnZWRkYmBgY+DkYmFhZuZgYICJAAAE3wBW+41RHAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                ax = {
                    src: '/_next/static/media/q2v-glow-w320.6a3648a7.png',
                    height: 256,
                    width: 800,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEXAVtzfRsj2TcbFTtj+W8itbuvtQMWsa+uxWOTYQ83r0pUkAAAACnRSTlM6OjG2DjOtobi1kYtftgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB1JREFUeJxjYGVgYGBkZGJhYOdgZuZkY2NigIkAAAPUAEdB7RkuAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                aA = {
                    src: '/_next/static/media/q2v-glow-w360.fc3c68a3.png',
                    height: 256,
                    width: 880,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXkQ8uxYOfFUtv/UsWsg/ZbnY/NAAAABXRSTlNxcHMfH3sDujAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicBcEBAQAAAIIgs/5vDlgiUBYVegD3ABpDksaVAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                aC = {
                    src: '/_next/static/media/q2v-glow-w400.265dfc0a.png',
                    height: 256,
                    width: 960,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXjQ8u+VOCtZ+v3UsOsf/DSwDGDAAAABXRSTlNsbWoiImB3+hEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAATSURBVHicY2BhYmRkYGBgZoAxAADtABejooRHAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                af = (e, t) => ({ '--q2v-glow-image': 'url('.concat(e.src, ')'), '--q2v-glow-aspect-ratio': t }),
                ay = (0, m.PA)((e) => {
                    var t;
                    let { context: i, isResetAvailable: a, isHidden: n, onClick: r, className: s } = e,
                        { vibe: o, sonataState: l, main: d } = (0, Y.g)(),
                        { formatMessage: c } = (0, v.A)(),
                        [m, b] = (0, T.d)(),
                        [h, g] = (0, T.d)(),
                        [x, A] = (0, p.useState)(null);
                    (0, ii.mf)(m, iO);
                    let C = (0, ts.g)(),
                        y = c({ id: 'interface-actions.reset-context' }, { context: i }),
                        P = (0, j.c)(() => {
                            (r(), C());
                        }),
                        S = !!(null == (t = o.meta) ? void 0 : t.isQ2V) && l.isVibeContext;
                    (0, p.useLayoutEffect)(() => {
                        if (!S || !a || null === h) return void A(null);
                        let e = () => {
                            let { width: e } = h.getBoundingClientRect();
                            e > 0 && A(e);
                        };
                        e();
                        let t = new ResizeObserver(e);
                        return (
                            t.observe(h),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [h, i, S, a]);
                    let I = (0, k.L)(() => {
                            if (x)
                                return ((e) =>
                                    e < 120
                                        ? af(ap, '200 / 128')
                                        : e < 160
                                          ? af(ab, '240 / 128')
                                          : e < 200
                                            ? af(av, '280 / 128')
                                            : e < 240
                                              ? af(ah, '320 / 128')
                                              : e < 280
                                                ? af(ag, '360 / 128')
                                                : e < 320
                                                  ? af(ax, '400 / 128')
                                                  : e < 360
                                                    ? af(aA, '440 / 128')
                                                    : af(aC, '480 / 128'))(x);
                        }),
                        w = (0, k.L)(() =>
                            i
                                ? a
                                    ? (0, u.jsxs)(N.$, {
                                          ref: g,
                                          className: (0, _.$)(iY().button, { [iY().button_q2v]: S }),
                                          radius: 'xxxl',
                                          withHover: !0,
                                          withRipple: !S,
                                          onClick: P,
                                          'aria-label': y,
                                          'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                          children: [
                                              (0, u.jsx)(E.HL, {
                                                  variant: 'span',
                                                  className: (0, _.$)(iY().context, { [iY().context_q2v]: S }),
                                                  lineClamp: 2,
                                                  children: i,
                                              }),
                                              (0, u.jsx)(Z.I, {
                                                  variant: 'close_filled',
                                                  size: 'xs',
                                                  className: iY().icon,
                                                  'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON,
                                              }),
                                          ],
                                      })
                                    : (0, u.jsx)('div', {
                                          className: iY().container,
                                          children: (0, u.jsx)(E.HL, {
                                              variant: 'span',
                                              className: iY().context,
                                              lineClamp: 2,
                                              'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                              children: i,
                                          }),
                                      })
                                : null,
                        );
                    return (0, u.jsx)('div', {
                        className: (0, _.$)(iY().root, s, {
                            [iY().root_visible]: !n,
                            [iY().root_q2v]: S && null !== x,
                            [iY().root_withEntryPointButton]: d.withEntryPointButton,
                        }),
                        style: I,
                        ref: b,
                        'aria-hidden': !!n,
                        inert: !!n,
                        children: w,
                    });
                }),
                aj = L.default.default(() =>
                    Promise.all([i.e(7976), i.e(8872), i.e(1625), i.e(1631)])
                        .then(i.bind(i, 6493))
                        .then((e) => ({ default: e.Wheel })),
                );
            var aT = i(11372),
                ak = i(6900),
                aN = i(59064),
                aP = i.n(aN);
            let aS = (0, m.PA)(() => {
                let {
                        wizard: e,
                        settings: { isMobile: t },
                    } = (0, Y.g)(),
                    { formatMessage: i } = (0, v.A)(),
                    a = (0, j.c)(() => {
                        (e.introModal.close(), e.modal.open());
                    });
                return (0, u.jsxs)(aT.a, {
                    className: (0, _.$)((0, ak.J)(eK.S.Dark), aP().root, { [aP().root_mobile]: t }),
                    headerClassName: aP().header,
                    contentClassName: aP().content,
                    size: 'fitContent',
                    placement: t ? 'default' : 'center',
                    enableSwipe: t,
                    overlayColor: 'full',
                    restoreFocus: !1,
                    labelClose: i({ id: 'interface-actions.close' }),
                    open: e.introModal.isOpened,
                    onOpenChange: e.introModal.onOpenChange,
                    onClose: e.introModal.close,
                    children: [
                        (0, u.jsx)(P._V, {
                            src: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a15a60535ffcf283a9da9e0/%%',
                            srcSet: ''.concat('avatars.mds.yandex.net/get-music-misc/70683/img.6a15a60f5d36c3160a7fb52a/%%', ' 2x'),
                            className: aP().image,
                            size: 375,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            fit: 'contain',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                        (0, u.jsxs)('div', {
                            className: aP().text,
                            children: [
                                (0, u.jsx)(E.DZ, { variant: 'h2', size: 'xl', className: aP().title, children: i({ id: 'wizard.title' }) }),
                                (0, u.jsx)(E.HL, { variant: 'span', size: 'm', className: aP().description, children: i({ id: 'wizard.description' }) }),
                            ],
                        }),
                        (0, u.jsx)(N.$, { className: aP().button, color: 'primary', size: 'm', radius: 'xxxl', onClick: a, children: i({ id: 'wizard.buttonText' }) }),
                    ],
                });
            });
            var aI = i(87819),
                aE = i(49176),
                aw = i(7123);
            let aB = (e) => {
                    let { queueState: t, direction: i, batchSize: a } = e,
                        { trackIds: n, currentIndex: r } = t,
                        s = [],
                        o = 0,
                        l = 0;
                    'forward' === i ? ((o = r + 1), (l = Math.min(n.length - 1, o + a - 1))) : (o = Math.max(0, (l = r - 1) - a + 1));
                    for (let e = o; e <= l; e++) {
                        let t = n[e];
                        t && s.push(t);
                    }
                    return s;
                },
                aM = (e) => {
                    let { queueState: t, backwardSize: i, forwardSize: a } = e,
                        n = Math.max(0, t.currentIndex - i),
                        r = Math.min(t.trackIds.length - 1, t.currentIndex + a),
                        s = [];
                    for (let e = n; e <= r; e++) {
                        let i = t.trackIds[e];
                        i && s.push(i);
                    }
                    return s;
                },
                aO = (e) => {
                    let { queueState: t, direction: i, isRequested: a } = e,
                        n = 'forward' === i ? 1 : -1,
                        r = 0;
                    for (let e = t.currentIndex + n; e >= 0 && e < t.trackIds.length; e += n) {
                        let i = t.trackIds[e];
                        if (i && a(i)) r++;
                        else break;
                    }
                    return r <= 3;
                };
            var aR = i(9519),
                aL = i(93609),
                aW = i(74567);
            let aV = 'viewedCards',
                aD = 'viewedBigCards';
            class aF extends aW.F {
                async addViewedIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aV], 'readwrite').objectStore(aV);
                        return Promise.all(e.map((e) => i.put({ uid: this.uid, cardId: e }))).then(() => i.index('uid').count(this.uid));
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedCardsOverLimit() : Promise.resolve()))
                        .catch(aL.A);
                }
                async addViewedBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aD], 'readwrite').objectStore(aD);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => ({ uid: this.uid, cardId: e.cardId, bigCardId: t }))).map((e) => i.put(e))).then(() =>
                            i.index('uid').count(this.uid),
                        );
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedBigCardsOverLimit() : Promise.resolve()))
                        .catch(aL.A);
                }
                async getViewedIds() {
                    return this.executeTransaction((e) => e.getAllFromIndex(aV, 'uid', this.uid).then((e) => e.map((e) => e.cardId)), { defaultValue: [] }).catch(
                        () => [],
                    );
                }
                async getViewedBigCards() {
                    return this.executeTransaction(
                        (e) =>
                            e.getAllFromIndex(aD, 'uid', this.uid).then((e) => {
                                let t = new Map();
                                return (
                                    e.forEach((e) => {
                                        var i;
                                        let a = null != (i = t.get(e.cardId)) ? i : [];
                                        (a.push(e.bigCardId), t.set(e.cardId, a));
                                    }),
                                    Array.from(t.entries()).map((e) => {
                                        let [t, i] = e;
                                        return { cardId: t, bigCardIds: i };
                                    })
                                );
                            }),
                        { defaultValue: [] },
                    ).catch(() => []);
                }
                async clearSentIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aV], 'readwrite').objectStore(aV);
                        return Promise.all(e.map((e) => i.delete([this.uid, e]))).then(aL.A);
                    }).catch(aL.A);
                }
                async clearSentBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aD], 'readwrite').objectStore(aD);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => [this.uid, e.cardId, t])).map((e) => i.delete(e))).then(aL.A);
                    }).catch(aL.A);
                }
                async evictViewedCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([aV], 'readwrite').objectStore(aV).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                a = 0,
                                n = (e) =>
                                    !e || a >= i
                                        ? Promise.resolve()
                                        : (a++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(n));
                            return t.openCursor(this.uid).then(n);
                        });
                    }).catch(aL.A);
                }
                async evictViewedBigCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([aD], 'readwrite').objectStore(aD).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                a = 0,
                                n = (e) =>
                                    !e || a >= i
                                        ? Promise.resolve()
                                        : (a++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(n));
                            return t.openCursor(this.uid).then(n);
                        });
                    }).catch(aL.A);
                }
                constructor(e) {
                    (super({
                        dbName: 'music_words',
                        dbVersion: 2,
                        onUpgrade: (e) => {
                            (e.objectStoreNames.contains(aV) || e.createObjectStore(aV, { keyPath: ['uid', 'cardId'] }).createIndex('uid', 'uid', { unique: !1 }),
                                e.objectStoreNames.contains(aD) ||
                                    e.createObjectStore(aD, { keyPath: ['uid', 'cardId', 'bigCardId'] }).createIndex('uid', 'uid', { unique: !1 }));
                        },
                    }),
                        (0, aR._)(this, 'uid', void 0),
                        (this.uid = e));
                }
            }
            var aU = i(62414),
                az = i(81438),
                aH = i(48404),
                aK = i(29595),
                aY = i(74965),
                aG = i(66943);
            let aX = (e) => {
                let { card: t, onClose: i } = e,
                    { notify: a } = (0, aY.l)(),
                    [n, r] = (0, p.useState)(null),
                    { formatMessage: s } = (0, v.A)(),
                    o = (0, j.c)((e) => {
                        (r(e), setTimeout(() => r(null), 3e3));
                    }),
                    l = (0, j.c)(async (e, n) => {
                        if (t && !t.isFeedbackPending)
                            try {
                                (await t.sendFeedback(e), i(), n && o(n));
                            } catch (e) {
                                a((0, u.jsx)(aG.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: aK.u.ERROR });
                            }
                    });
                return {
                    handleLike: (0, j.c)(async () => {
                        (null == t ? void 0 : t.isLiked) ? await l(aH.a.NEUTRAL) : await l(aH.a.LIKE, s({ id: 'words.like-feedback' }));
                    }),
                    handleDislike: (0, j.c)(async () => {
                        await l(aH.a.DISLIKE, s({ id: 'words.dislike-feedback' }));
                    }),
                    feedbackMessage: n,
                };
            };
            var aq = i(69850),
                a$ = i.n(aq);
            function aZ() {
                return (aZ = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let aJ = function (e) {
                return p.createElement(
                    'svg',
                    aZ({ viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    r ||
                        (r = p.createElement('path', {
                            d: 'M10.0002 0.3125C7.25741 0.3125 4.69896 2.90254 2.43499 6.67723C0.171015 10.4519 -0.760012 14.016 0.707594 16.2922C2.17517 18.5683 5.69374 19.6874 9.99984 19.6875L10.0002 19.6875C14.3063 19.6874 17.8248 18.5683 19.2924 16.2922C20.76 14.016 19.829 10.4519 17.565 6.67723C15.3011 2.90269 12.7429 0.3125 10.0002 0.3125Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function aQ() {
                return (aQ = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let a0 = function (e) {
                return p.createElement(
                    'svg',
                    aQ({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    s ||
                        (s = p.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M9.42032 25.4019C9.14037 21.0934 5.66809 17.6882 1.42578 17.6882V16.5741C5.8511 16.5741 9.43853 12.8687 9.43853 8.29785H10.5171C10.5171 12.8687 14.1045 16.5741 18.5299 16.5741V17.6882C14.2876 17.6882 10.8153 21.0934 10.5353 25.4019H9.42032Z',
                            fill: 'currentColor',
                        })),
                    o ||
                        (o = p.createElement('path', {
                            d: 'M19.8267 3.83H21.4167L23.9567 11H22.7067L22.0467 9.12H19.0267L18.3667 11H17.2967L19.8267 3.83ZM21.6767 8.08L20.5367 4.85L19.3967 8.08H21.6767ZM27.0991 3.83V11H25.8891V3.83H27.0991Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function a1() {
                return (a1 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let a2 = function (e) {
                return p.createElement(
                    'svg',
                    a1({ viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    l || (l = p.createElement('path', { d: 'M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z', fill: 'currentColor' })),
                );
            };
            function a8() {
                return (a8 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let a5 = function (e) {
                    return p.createElement(
                        'svg',
                        a8({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                        d ||
                            (d = p.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M9.42032 25.4029C9.14037 21.0944 5.66809 17.6891 1.42578 17.6891V16.5751C5.8511 16.5751 9.43853 12.8697 9.43853 8.29883H10.5171C10.5171 12.8697 14.1045 16.5751 18.5299 16.5751V17.6891C14.2876 17.6891 10.8153 21.0944 10.5353 25.4029H9.42032Z',
                                fill: 'currentColor',
                            })),
                        c ||
                            (c = p.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M22.4961 12.0999C22.3406 9.70631 20.4115 7.81449 18.0547 7.81449V7.19557C20.5132 7.19557 22.5062 5.13701 22.5062 2.59766H23.1054C23.1054 5.13701 25.0984 7.19557 27.5569 7.19557V7.81449C25.2001 7.81449 23.2711 9.70631 23.1155 12.0999H22.4961Z',
                                fill: 'currentColor',
                            })),
                    );
                },
                a6 = (0, m.PA)((e) => {
                    let { className: t, dimmed: i, isFact: a } = e,
                        { experiments: n } = (0, Y.g)(),
                        r = n.checkExperiment(G.z.WebNextWaveScreenWordsInWave, 'on_with_onyx'),
                        s = n.checkExperiment(G.z.WebNextWaveScreenWordsInWave, 'on'),
                        o = r && i,
                        l = (0, k.L)(() =>
                            r
                                ? (0, u.jsx)(aJ, { className: (0, _.$)(a$().icon, a$().icon_okniks) })
                                : s
                                  ? a && !i
                                      ? (0, u.jsx)(a0, { className: (0, _.$)(a$().icon, a$().icon_sparkles) })
                                      : (0, u.jsx)(a5, { className: (0, _.$)(a$().icon, a$().icon_sparkles) })
                                  : void 0,
                        );
                    return (0, u.jsxs)('div', {
                        className: (0, _.$)(a$().root, { [a$().root_dimmed]: i }, t),
                        'aria-hidden': !0,
                        'data-test-id': f.Kq.words.WORDS_AI_BADGE,
                        children: [
                            (0, u.jsx)(P._V, {
                                src: 'avatars.mds.yandex.net/get-music-misc/2413828/img.69c13075ab25d7410604f669/%%',
                                size: 200,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                className: a$().glow,
                            }),
                            l,
                            o &&
                                (0, u.jsxs)('div', {
                                    className: a$().sparkles,
                                    children: [
                                        (0, u.jsx)(a2, { className: a$().sparkle }),
                                        (0, u.jsx)(a2, { className: a$().sparkle }),
                                        (0, u.jsx)(a2, { className: a$().sparkle }),
                                        (0, u.jsx)(a2, { className: a$().sparkle }),
                                    ],
                                }),
                        ],
                    });
                });
            var a9 = i(24190),
                a4 = i.n(a9);
            let a7 = (e) => {
                let { children: t } = e;
                return (0, u.jsx)('div', {
                    className: a4().root,
                    children: (0, u.jsx)(E.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: a4().text, children: t }),
                });
            };
            var a3 = i(67758),
                ne = i.n(a3);
            let nt = (e) => {
                    let { url: t, title: i, className: a, ref: n } = e,
                        r = (0, tk.S)(),
                        s = (0, j.c)((e) => {
                            (e.stopPropagation(), r({ to: x.AppScreen.Link, deepLink: t }));
                        }),
                        o = (0, j.c)((e) => {
                            e.stopPropagation();
                        });
                    return (0, u.jsx)(tP.N, {
                        ref: n,
                        href: t,
                        className: a,
                        onClick: s,
                        onKeyDown: o,
                        'data-test-id': f.Kq.words.WORDS_CARD_ACTION,
                        children: (0, u.jsx)(E.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', children: i }),
                    });
                },
                ni = (e) => {
                    let { url: t, title: i, className: a, analyticObjectId: n } = e,
                        r = (0, aU.D)(),
                        { object: s } = (0, O.j)(),
                        o = (0, u.jsx)(nt, { ref: r, url: t, title: i, className: a });
                    return s ? (0, u.jsx)(tn.B, { ...s, objectId: null != n ? n : s.objectId, objectPosY: 1, children: o }) : o;
                },
                na = (e) => {
                    let { actionType: t, onClick: i, children: a, ...n } = e,
                        r = (0, to.D)(),
                        s = (0, j.c)((e) => {
                            (r({ actionType: t, userInteractionType: x.UserInteractionType.Tap }), null == i || i(e));
                        });
                    return (0, u.jsx)(N.$, { onClick: s, ...n, children: a });
                },
                nn = (e) => {
                    let { url: t, className: i, children: a } = e,
                        n = (0, tk.S)(),
                        r = (0, j.c)(() => {
                            n({ to: x.AppScreen.Link, deepLink: t });
                        });
                    return (0, u.jsx)(tP.N, { href: t, className: i, onClick: r, 'data-test-id': f.Kq.words.WORDS_CARD_LINK, children: a });
                };
            var nr = i(25871),
                ns = i.n(nr);
            let no = (e) => {
                let { className: t } = e;
                return (0, u.jsx)('div', {
                    className: (0, _.$)(ns().root, t),
                    'data-test-id': f.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER,
                    children: (0, u.jsx)(E.HL, {
                        variant: 'div',
                        type: 'text',
                        size: 's',
                        weight: 'medium',
                        className: ns().description,
                        'data-test-id': f.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER_AI_TEXT,
                        children: (0, u.jsx)(M.A, { id: 'words.ai-description' }),
                    }),
                });
            };
            var nl = i(64310),
                nd = i(81933),
                nc = i.n(nd);
            let nu = (e) => {
                let { isActive: t } = e;
                return (0, u.jsxs)('div', {
                    className: nc().root,
                    'aria-busy': t,
                    'aria-live': t ? 'polite' : 'off',
                    children: [
                        (0, u.jsxs)('div', {
                            className: nc().topGroup,
                            children: [
                                (0, u.jsx)(nl.n, { isActive: t, className: nc().line, textClassName: nc().topLinePrimary }),
                                (0, u.jsx)(nl.n, { isActive: t, className: nc().line, textClassName: nc().topLineSecondary }),
                            ],
                        }),
                        (0, u.jsx)(nl.n, { isActive: t, className: nc().main, textClassName: nc().mainLine }),
                        (0, u.jsx)(nl.n, { isActive: t, className: nc().bottom, textClassName: nc().bottomLine }),
                    ],
                });
            };
            var n_ = i(83295);
            let nm = (e) => {
                    let { text: t, forwardRef: i } = e,
                        a = (0, aU.D)(),
                        n = (0, n_.S)([a, i]);
                    return (0, u.jsx)(E.HL, { ref: n, variant: 'div', className: ne().message, 'data-test-id': f.Kq.words.WORDS_CARD_FULLSCREEN_MESSAGE, children: t });
                },
                np = (0, p.forwardRef)((e, t) => (0, u.jsx)(nm, { forwardRef: t, ...e })),
                nb = (0, m.PA)((e) => {
                    var t, i;
                    let { card: a, feedbackMessage: n, onLike: r, onDislike: s, onClose: o, onScreenClosed: l } = e,
                        { words: d } = (0, Y.g)(),
                        { formatMessage: c } = (0, v.A)(),
                        m = null != n ? n : null == (t = d.activeBigCard) ? void 0 : t.text,
                        b = null != (i = d.activeBigCardId) ? i : '',
                        h = (0, p.useRef)(null),
                        g = (0, p.useRef)(null),
                        [A, y] = (0, p.useState)(!1);
                    (0, ta.u)();
                    let T = (0, k.L)(() => {
                        var e, t, i;
                        return (null == (t = d.activeBigCard) || null == (e = t.actions) ? void 0 : e.length)
                            ? d.activeBigCard.actions
                            : null != (i = null == a ? void 0 : a.actions)
                              ? i
                              : [];
                    });
                    (0, p.useEffect)(() => () => l(), [l]);
                    let S = (0, j.c)(() => {
                            o();
                        }),
                        I = (0, j.c)((e) => {
                            e.stopPropagation();
                        }),
                        w = (0, j.c)(() => {
                            let e = h.current;
                            if (!e) return void y(!1);
                            y(e.scrollHeight > e.clientHeight);
                        }),
                        B = (0, j.c)((e) => {
                            var t;
                            if (((h.current = e), null == (t = g.current) || t.disconnect(), (g.current = null), !e)) return void y(!1);
                            w();
                            let i = new ResizeObserver(w);
                            (i.observe(e), (g.current = i));
                        }),
                        O = (0, k.L)(() =>
                            d.isShimmerVisible
                                ? (0, u.jsx)('div', { className: ne().content, onClick: I, children: (0, u.jsx)(nu, { isActive: d.isShimmerActive }) })
                                : (0, u.jsxs)('div', {
                                      className: ne().content,
                                      onClick: I,
                                      children: [
                                          (0, u.jsx)('div', {
                                              className: (0, _.$)(ne().messageScroll, { [ne().messageScroll_scrollable]: A }),
                                              children: (0, u.jsx)(tn.B, {
                                                  objectType: x.DomainObjectType.BigFact,
                                                  objectId: b,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  children: (0, u.jsx)(np, { ref: B, text: m }),
                                              }),
                                          }),
                                          (0, u.jsxs)('div', {
                                              className: ne().actions,
                                              children: [
                                                  (null == a ? void 0 : a.action) &&
                                                      a.action.url &&
                                                      (0, u.jsx)(tn.B, {
                                                          objectType: x.DomainObjectType.BigFact,
                                                          objectId: b,
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          children: (0, u.jsx)(ni, { url: a.action.url, title: a.action.title, className: ne().primaryAction }),
                                                      }),
                                                  T.length > 0 &&
                                                      (0, u.jsx)(C.F, {
                                                          blockId: x.EntityTypes.WordsInWave,
                                                          blockType: x.EntityTypes.WordsInWave,
                                                          blockPosX: 1,
                                                          blockPosY: 1,
                                                          objectsCount: T.length,
                                                          children: T.map((e, t) =>
                                                              (0, u.jsx)(
                                                                  tn.B,
                                                                  {
                                                                      objectType: x.DomainObjectType.Link,
                                                                      objectId: b,
                                                                      objectPosX: t + 1,
                                                                      objectPosY: 1,
                                                                      children: (0, u.jsxs)(nn, {
                                                                          url: e.url,
                                                                          className: (0, _.$)(ne().sourceItem, { [ne().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                          children: [
                                                                              e.faviconUrl &&
                                                                                  (0, u.jsx)(P._V, {
                                                                                      src: e.faviconUrl,
                                                                                      fit: 'cover',
                                                                                      'aria-hidden': !0,
                                                                                      className: ne().sourceIcon,
                                                                                      'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                                  }),
                                                                              (0, u.jsx)(E.HL, {
                                                                                  variant: 'span',
                                                                                  type: 'text',
                                                                                  size: 'l',
                                                                                  weight: 'medium',
                                                                                  lineClamp: 1,
                                                                                  className: ne().actionText,
                                                                                  'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                                  children: e.title,
                                                                              }),
                                                                          ],
                                                                      }),
                                                                  },
                                                                  e.url,
                                                              ),
                                                          ),
                                                      }),
                                              ],
                                          }),
                                          a &&
                                              (0, u.jsx)(C.F, {
                                                  blockId: x.EntityTypes.WordsInWave,
                                                  blockType: x.EntityTypes.WordsInWave,
                                                  blockPosX: 1,
                                                  blockPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, u.jsx)(tn.B, {
                                                      objectType: x.DomainObjectType.BigFact,
                                                      objectId: b,
                                                      objectPosX: 1,
                                                      objectPosY: 1,
                                                      children: (0, u.jsxs)('div', {
                                                          className: ne().feedback,
                                                          children: [
                                                              (0, u.jsxs)(na, {
                                                                  actionType: a.isLiked ? x.ActionType.Unlike : x.ActionType.Like,
                                                                  'aria-pressed': a.isLiked,
                                                                  variant: 'text',
                                                                  withRipple: !1,
                                                                  className: (0, _.$)(ne().feedbackButton, { [ne().feedbackButton_active]: a.isLiked }),
                                                                  onClick: r,
                                                                  'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                                  children: [
                                                                      (0, u.jsx)(Z.I, {
                                                                          variant: 'thumbUp',
                                                                          size: 'xxs',
                                                                          'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                      }),
                                                                      (0, u.jsx)(E.HL, {
                                                                          variant: 'span',
                                                                          type: 'text',
                                                                          size: 'l',
                                                                          weight: 'medium',
                                                                          'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                                          children: (0, u.jsx)(M.A, { id: 'words.like' }),
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, u.jsx)('div', { className: ne().feedbackDivider }),
                                                              (0, u.jsxs)(na, {
                                                                  actionType: x.ActionType.Dislike,
                                                                  'aria-pressed': a.isDisliked,
                                                                  variant: 'text',
                                                                  withRipple: !1,
                                                                  className: (0, _.$)(ne().feedbackButton, { [ne().feedbackButton_active]: a.isDisliked }),
                                                                  onClick: s,
                                                                  'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                                  children: [
                                                                      (0, u.jsx)(Z.I, {
                                                                          variant: 'thumbDown',
                                                                          size: 'xxs',
                                                                          'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                      }),
                                                                      (0, u.jsx)(E.HL, {
                                                                          variant: 'span',
                                                                          type: 'text',
                                                                          size: 'l',
                                                                          weight: 'medium',
                                                                          'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                                          children: (0, u.jsx)(M.A, { id: 'words.dislike' }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                              }),
                                      ],
                                  }),
                        );
                    return (
                        (0, p.useEffect)(() => {
                            w();
                        }, [m, w]),
                        (0, u.jsxs)(u.Fragment, {
                            children: [
                                (0, u.jsx)('div', {
                                    className: ne().closeButtonWrapper,
                                    children: (0, u.jsx)(N.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'm',
                                        icon: (0, u.jsx)(Z.I, { variant: 'close', size: 'xs' }),
                                        onClick: o,
                                        'aria-label': c({ id: 'interface-actions.close' }),
                                        'data-test-id': f.Kq.words.WORDS_CARD_FULLSCREEN_CLOSE_BUTTON,
                                    }),
                                }),
                                (0, u.jsxs)('div', {
                                    className: ne().layout,
                                    children: [
                                        (0, u.jsx)('div', {
                                            className: (0, _.$)(ne().contentArea, { [ne().contentArea_withMessageScroll]: A }),
                                            onClick: S,
                                            children: O,
                                        }),
                                        (null == a ? void 0 : a.isFact) && (0, u.jsx)(no, { className: ne().disclaimer }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                nv = (0, m.PA)((e) => {
                    let { card: t, feedbackMessage: i, onLike: a, onDislike: n, onClose: r, onScreenClosed: s } = e,
                        {
                            words: o,
                            settings: { isMobile: l },
                        } = (0, Y.g)(),
                        d = (0, j.c)((e) => {
                            (o.bigCardFullscreen.onOpenChange(e), e || r());
                        });
                    return (0, u.jsx)(aT.a, {
                        className: ne().root,
                        open: o.bigCardFullscreen.isOpened,
                        onOpenChange: d,
                        onClose: r,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        contentClassName: ne().modalContent,
                        'data-test-id': f.Kq.words.WORDS_CARD_FULLSCREEN_MODAL,
                        children: (0, u.jsx)(C.F, {
                            blockId: x.EntityTypes.WordsInWave,
                            blockType: x.EntityTypes.WordsInWave,
                            blockPosX: 1,
                            blockPosY: 1,
                            objectsCount: 1,
                            children: (0, u.jsx)(nb, { card: t, feedbackMessage: i, onLike: a, onDislike: n, onClose: r, onScreenClosed: s }),
                        }),
                    });
                });
            var nh = i(12799),
                ng = i.n(nh);
            let nx = (0, m.PA)((e) => {
                let { card: t, onLike: i, onDislike: a } = e,
                    n = t.actions;
                return (
                    (0, ta.u)(),
                    (0, u.jsxs)('div', {
                        className: ng().root,
                        'data-test-id': f.Kq.words.WORDS_CARD_POPOVER_DESKTOP,
                        children: [
                            n &&
                                n.length > 0 &&
                                (0, u.jsxs)(u.Fragment, {
                                    children: [
                                        n.map((e, t) =>
                                            (0, u.jsx)(
                                                C.F,
                                                {
                                                    blockId: x.EntityTypes.WordsInWave,
                                                    blockType: x.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: n.length,
                                                    children: (0, u.jsx)(tn.B, {
                                                        objectType: x.DomainObjectType.Link,
                                                        objectId: e.url,
                                                        objectPosX: t + 1,
                                                        objectPosY: 1,
                                                        children: (0, u.jsxs)(nn, {
                                                            url: e.url,
                                                            className: (0, _.$)(ng().item, ng().actionItem, ng().sourceItem, {
                                                                [ng().sourceItem_withoutIcon]: !e.faviconUrl,
                                                            }),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, u.jsx)(P._V, {
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: ng().sourceIcon,
                                                                        'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                    }),
                                                                (0, u.jsx)(E.HL, {
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'l',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            ),
                                        ),
                                        (0, u.jsx)('div', { className: ng().divider }),
                                    ],
                                }),
                            (0, u.jsxs)(C.F, {
                                blockId: x.EntityTypes.WordsInWave,
                                blockType: x.EntityTypes.WordsInWave,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: 2,
                                children: [
                                    (0, u.jsx)(tn.B, {
                                        objectType: x.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, u.jsxs)(na, {
                                            actionType: t.isLiked ? x.ActionType.Unlike : x.ActionType.Like,
                                            'aria-pressed': t.isLiked,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, _.$)(ng().item, ng().actionItem, { [ng().actionItem_active]: t.isLiked }),
                                            onClick: i,
                                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                            children: [
                                                (0, u.jsx)(Z.I, { variant: 'thumbUp', size: 'xs', 'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON }),
                                                (0, u.jsx)(E.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                    children: (0, u.jsx)(M.A, { id: 'words.like' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, u.jsx)(tn.B, {
                                        objectType: x.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectPosX: 1,
                                        objectPosY: 2,
                                        children: (0, u.jsxs)(na, {
                                            actionType: x.ActionType.Dislike,
                                            'aria-pressed': t.isDisliked,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, _.$)(ng().item, ng().actionItem, { [ng().actionItem_active]: t.isDisliked }),
                                            onClick: a,
                                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                            children: [
                                                (0, u.jsx)(Z.I, {
                                                    variant: 'thumbDown',
                                                    size: 'xs',
                                                    'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                }),
                                                (0, u.jsx)(E.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                    children: (0, u.jsx)(M.A, { id: 'words.dislike' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            t.isFact && (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)('div', { className: ng().divider }), (0, u.jsx)(no, {})] }),
                        ],
                    })
                );
            });
            var nA = i(90437),
                nC = i.n(nA);
            let nf = (0, m.PA)((e) => {
                let { card: t, onLike: i, onDislike: a } = e,
                    { formatMessage: n } = (0, v.A)(),
                    r = t.actions;
                (0, ta.u)();
                let s = n({ id: 'words.like' }),
                    o = n({ id: 'words.dislike' });
                return (0, u.jsxs)('div', {
                    className: nC().root,
                    'data-test-id': f.Kq.words.WORDS_CARD_POPOVER_MOBILE,
                    children: [
                        (0, u.jsxs)('div', {
                            className: nC().container,
                            children: [
                                (0, u.jsx)(E.DZ, { variant: 'div', size: 'xs', weight: 'bold', lineClamp: 5, className: nC().text, children: t.text }),
                                t.action &&
                                    t.action.url &&
                                    (0, u.jsx)(C.F, {
                                        blockId: x.EntityTypes.WordsInWave,
                                        blockType: x.EntityTypes.WordsInWave,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        objectsCount: 1,
                                        children: (0, u.jsx)(tn.B, {
                                            objectType: x.DomainObjectType.Link,
                                            objectId: t.action.url,
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            children: (0, u.jsx)(nn, {
                                                url: t.action.url,
                                                className: nC().action,
                                                children: (0, u.jsx)(E.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    lineClamp: 2,
                                                    children: t.action.title,
                                                }),
                                            }),
                                        }),
                                    }),
                                r &&
                                    r.length > 0 &&
                                    (0, u.jsx)('div', {
                                        className: nC().sources,
                                        children: r.map((e, t) =>
                                            (0, u.jsx)(
                                                C.F,
                                                {
                                                    blockId: x.EntityTypes.WordsInWave,
                                                    blockType: x.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 2,
                                                    objectsCount: r.length,
                                                    children: (0, u.jsx)(tn.B, {
                                                        objectType: x.DomainObjectType.Link,
                                                        objectId: e.url,
                                                        objectPosX: t + 1,
                                                        objectPosY: 1,
                                                        children: (0, u.jsxs)(nn, {
                                                            url: e.url,
                                                            className: (0, _.$)(nC().sourceItem, { [nC().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, u.jsx)(P._V, {
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: nC().sourceIcon,
                                                                        'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                    }),
                                                                (0, u.jsx)(E.HL, {
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            ),
                                        ),
                                    }),
                            ],
                        }),
                        (0, u.jsxs)('div', {
                            children: [
                                (0, u.jsxs)('div', {
                                    className: nC().feedbackSection,
                                    children: [
                                        (0, u.jsx)(E.HL, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            className: nC().feedbackQuestion,
                                            children: (0, u.jsx)(M.A, { id: 'words.show-more' }),
                                        }),
                                        (0, u.jsx)('div', {
                                            className: nC().feedbackButtons,
                                            children: (0, u.jsxs)(C.F, {
                                                blockId: x.EntityTypes.WordsInWave,
                                                blockType: x.EntityTypes.WordsInWave,
                                                blockPosX: 1,
                                                blockPosY: 3,
                                                objectsCount: 2,
                                                children: [
                                                    (0, u.jsx)(tn.B, {
                                                        objectType: x.DomainObjectType.Fact,
                                                        objectId: t.id,
                                                        objectPosX: 1,
                                                        objectPosY: 1,
                                                        children: (0, u.jsx)(na, {
                                                            actionType: t.isLiked ? x.ActionType.Unlike : x.ActionType.Like,
                                                            variant: 'text',
                                                            color: 'secondary',
                                                            size: 'l',
                                                            radius: 'round',
                                                            withRipple: !1,
                                                            className: (0, _.$)(nC().feedbackButton, { [nC().feedbackButton_active]: t.isLiked }),
                                                            'aria-label': s,
                                                            'aria-pressed': t.isLiked,
                                                            onClick: i,
                                                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                            children: (0, u.jsx)(Z.I, {
                                                                variant: 'thumbUp',
                                                                size: 'xs',
                                                                'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, u.jsx)(tn.B, {
                                                        objectType: x.DomainObjectType.Fact,
                                                        objectId: t.id,
                                                        objectPosX: 1,
                                                        objectPosY: 2,
                                                        children: (0, u.jsx)(na, {
                                                            actionType: x.ActionType.Dislike,
                                                            variant: 'text',
                                                            size: 'l',
                                                            radius: 'round',
                                                            withRipple: !1,
                                                            className: (0, _.$)(nC().feedbackButton, { [nC().feedbackButton_active]: t.isDisliked }),
                                                            'aria-label': o,
                                                            'aria-pressed': t.isDisliked,
                                                            onClick: a,
                                                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                            children: (0, u.jsx)(Z.I, {
                                                                variant: 'thumbDown',
                                                                size: 'xs',
                                                                'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                t.isFact && (0, u.jsx)(no, {}),
                            ],
                        }),
                    ],
                });
            });
            var ny = i(75042),
                nj = i.n(ny);
            let nT = (e) => {
                    let { text: t, faceCover: i, className: a } = e,
                        n = (0, aU.D)();
                    return (0, u.jsxs)(E.HL, {
                        ref: n,
                        variant: 'span',
                        type: 'text',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 3,
                        className: a,
                        'data-test-id': f.Kq.words.WORDS_CARD_TEXT,
                        children: [
                            i &&
                                (0, u.jsx)(P._V, {
                                    src: i,
                                    size: 'orig',
                                    fit: 'contain',
                                    withAvatarReplace: !0,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                    className: nj().lumenAvatar,
                                    'aria-hidden': !0,
                                }),
                            t,
                        ],
                    });
                },
                nk = (0, m.PA)((e) => {
                    var t, i, a, n;
                    let { card: r, trackId: s, isLoading: o, className: l } = e,
                        {
                            words: d,
                            settings: { isMobile: c },
                        } = (0, Y.g)(),
                        { faceCover: m } = (0, az.x)(),
                        b = (() => {
                            var e;
                            let { words: t } = (0, Y.g)(),
                                i = (0, tk.S)(),
                                [a, n] = (0, p.useState)(),
                                [r, s] = (0, p.useState)(),
                                o = null == (e = t.activeBigCard) ? void 0 : e.id,
                                l = (0, j.c)(() => {
                                    t.bigCardFullscreen.close();
                                }),
                                d = (0, j.c)(() => {
                                    t.bigCardFullscreen.isOpened || (n(void 0), s(void 0));
                                }),
                                c = (0, j.c)((e, a) => {
                                    var r;
                                    let o = Array.from(null != (r = e.bigCardIds) ? r : [])[0];
                                    o && (s(o), n(e), i({ to: x.AppScreen.FactScreen }), t.bigCardFullscreen.open(), t.loadBigCard(o, a, e.id));
                                });
                            ((0, p.useEffect)(() => {
                                t.bigCardFullscreen.isOpened && t.bigCardLoadingState.isRejected && l();
                            }, [l, t.bigCardLoadingState.isRejected, t.bigCardFullscreen.isOpened]),
                                (0, p.useEffect)(() => {
                                    t.bigCardFullscreen.isOpened && t.bigCardLoadingState.isResolved && a && r && o === r && t.markBigCardViewed(a.id, r);
                                }, [o, r, a, t, t.bigCardLoadingState.isResolved, t.bigCardFullscreen.isOpened]));
                            let u = aX({ card: a, onClose: l });
                            return { openedCard: a, open: c, close: l, onScreenClosed: d, feedback: u };
                        })(),
                        h = (0, tk.S)(),
                        g = (0, aU.D)(),
                        [C, y] = (0, p.useState)(!1),
                        [T, N] = (0, p.useState)(void 0),
                        P = (0, p.useRef)(null),
                        S = ((e) => {
                            let { formatMessage: t } = (0, v.A)(),
                                i = (0, p.useMemo)(
                                    () => [
                                        t({ id: 'words.loading-phrase-collecting-interesting' }),
                                        t({ id: 'words.loading-phrase-tuning' }),
                                        t({ id: 'words.loading-phrase-catching' }),
                                        t({ id: 'words.loading-phrase-reading' }),
                                        t({ id: 'words.loading-phrase-studying' }),
                                    ],
                                    [t],
                                ),
                                a = (0, p.useRef)(0),
                                [n, r] = (0, p.useState)(() => {
                                    var t;
                                    if (!e) return null;
                                    let n = Math.floor(Math.random() * i.length);
                                    return ((a.current = n), null != (t = i[n]) ? t : null);
                                }),
                                s = (0, p.useRef)(e),
                                o = (0, p.useRef)(null),
                                l = (0, p.useRef)(e);
                            if (((s.current = e), e && !l.current)) {
                                var d;
                                let e = Math.floor(Math.random() * i.length);
                                ((a.current = e), r(null != (d = i[e]) ? d : null));
                            }
                            return (
                                (l.current = e),
                                (0, p.useEffect)(() => {
                                    if (null !== n && !o.current)
                                        return (
                                            (o.current = setTimeout(() => {
                                                if (((o.current = null), s.current)) {
                                                    var e;
                                                    ((a.current = (a.current + 1) % i.length), r(null != (e = i[a.current]) ? e : i[0]));
                                                    return;
                                                }
                                                r(null);
                                            }, 2500)),
                                            () => {
                                                o.current && (clearTimeout(o.current), (o.current = null));
                                            }
                                        );
                                }, [i, n]),
                                n
                            );
                        })(!!o),
                        I = null !== S,
                        w = !!((null == r ? void 0 : r.isBigCardFullscreenEnabled) || (null == (t = b.openedCard) ? void 0 : t.isBigCardFullscreenEnabled)),
                        B =
                            (null == r ? void 0 : r.withBigCardPanel) ||
                            (null == r ? void 0 : r.isBigCardFullscreenEnabled) ||
                            (null == r ? void 0 : r.withDirectLinkNavigation),
                        {
                            handleLike: M,
                            handleDislike: O,
                            feedbackMessage: R,
                        } = aX({
                            card: r,
                            onClose: (0, j.c)(() => {
                                y(!1);
                            }),
                        }),
                        { feedbackMessage: L } = b.feedback,
                        W = !!(R || L),
                        V = !(r && (!(null == r ? void 0 : r.isDisliked) || W)) && !I,
                        D = !r || (null == r ? void 0 : r.isDisliked) || W || I,
                        F = !o && !I && (!r || r.isDisliked),
                        U = d.isBigCardPanelEnabled ? F : !(null == r ? void 0 : r.withBigCardPanel),
                        z = (null == r ? void 0 : r.isLumenFaceAvatarEnabled) && !!m,
                        H = I ? 'loading' : 'content-'.concat(null == r ? void 0 : r.id),
                        K = (null == r ? void 0 : r.isPersonal) ? x.DomainObjectType.PersonalFact : x.DomainObjectType.Fact,
                        G = (0, j.c)((e) => {
                            (!e || !D) &&
                                ((e && null != r && r.withDirectLinkNavigation) ||
                                    (e && c && P.current && N(window.innerHeight - P.current.getBoundingClientRect().top + 12),
                                    e && h({ to: x.AppScreen.FactScreen }),
                                    y(e)));
                        }),
                        X = (0, eH.Z)(null != (a = null == r || null == (i = r.action) ? void 0 : i.url) ? a : ''),
                        q = (0, j.c)(() => {
                            var e;
                            (null == r || null == (e = r.action) ? void 0 : e.url) && (h({ to: x.AppScreen.Link, deepLink: r.action.url }), X());
                        }),
                        $ = (0, j.c)(() => {
                            if (!D && r) {
                                if (r.isInformer && !r.withBigCardPanel) return void q();
                                !d.bigCardPanel.card &&
                                    !d.bigCardFullscreen.isOpened &&
                                    (r.withBigCardPanel
                                        ? (d.bigCardPanel.open(s), d.bigCardPanel.isOpened && d.bigCardPanel.trackId === s && h({ to: x.AppScreen.LumenFactScreen }))
                                        : (null == r ? void 0 : r.isBigCardFullscreenEnabled) && b.open(r, s));
                            }
                        }),
                        Z = (0, j.c)((e) => {
                            e.target === e.currentTarget && (e.code === aE.v.SPACE || e.code === aE.v.ENTER) && (e.preventDefault(), $());
                        }),
                        J = (0, k.L)(() => {
                            var e, t, i, a;
                            return I
                                ? (0, u.jsx)(a7, { children: S })
                                : W
                                  ? (0, u.jsx)(E.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'medium',
                                        lineClamp: 3,
                                        className: nj().text,
                                        'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_MESSAGE,
                                        children: R || L,
                                    })
                                  : null != r && r.isDisliked
                                    ? void 0
                                    : (0, u.jsxs)(u.Fragment, {
                                          children: [
                                              (null == r ? void 0 : r.text) &&
                                                  (0, u.jsx)(
                                                      tn.B,
                                                      {
                                                          objectType: null != (e = r.domainObjectType) ? e : K,
                                                          objectId: null != (t = null == r ? void 0 : r.analyticObjectId) ? t : '',
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          children: (0, u.jsx)(nT, { text: r.text, faceCover: z ? m : void 0, className: nj().text }, H),
                                                      },
                                                      null == r ? void 0 : r.id,
                                                  ),
                                              (null == r ? void 0 : r.action) &&
                                                  r.action.url &&
                                                  (0, u.jsx)(
                                                      tn.B,
                                                      {
                                                          objectType: null != (i = null == r ? void 0 : r.domainObjectType) ? i : x.DomainObjectType.Link,
                                                          objectId: r.action.url,
                                                          objectPosX: 1,
                                                          objectPosY: 2,
                                                          children: (0, u.jsx)(
                                                              ni,
                                                              {
                                                                  url: r.action.url,
                                                                  title: r.action.title,
                                                                  className: nj().action,
                                                                  analyticObjectId: null != (a = r.analyticObjectId) ? a : '',
                                                              },
                                                              ''.concat(H, '-action'),
                                                          ),
                                                      },
                                                      r.action.url,
                                                  ),
                                          ],
                                      });
                        }),
                        Q = (0, k.L)(() => {
                            if (c && T) return { '--words-popover-height': ''.concat(T, 'px') };
                        }),
                        ee = c ? nf : nx,
                        et = (0, u.jsxs)('div', {
                            ref: d.isBigCardPanelEnabled || r || o ? void 0 : g,
                            className: (0, _.$)(nj().root, { [nj().root_disabled]: D }, l),
                            role: 'button',
                            tabIndex: 0,
                            onClick: B ? $ : void 0,
                            onKeyDown: B ? Z : void 0,
                            'data-test-id': f.Kq.words.WORDS_CARD,
                            children: [
                                U &&
                                    (0, u.jsx)(a6, {
                                        className: (0, _.$)(nj().badge, {
                                            [nj().badge_centered]: V,
                                            [nj().badge_centeredSparkles]: V && d.withSparkles,
                                            [nj().badge_loading]: I,
                                        }),
                                        dimmed: V,
                                        isFact: (null == r ? void 0 : r.isFact) && !D,
                                    }),
                                (0, u.jsx)('div', { className: (0, _.$)(nj().content, { [nj().content_hidden]: V }), ref: P, children: J }),
                            ],
                        });
                    return w
                        ? (0, u.jsxs)(u.Fragment, {
                              children: [
                                  et,
                                  (0, u.jsx)(A.a, {
                                      pageId: x.AppScreen.FactScreen,
                                      pageIdForFrom: eF.b.FACT_SCREEN,
                                      mainObjectId: null == (n = b.openedCard) ? void 0 : n.id,
                                      mainObjectType: x.DomainObjectType.Fact,
                                      pageStyle: x.PageStyles.Fullscreen,
                                      pagePlacement: x.PagePlacements.Fullscreen,
                                      children: (0, u.jsx)(nv, {
                                          card: b.openedCard,
                                          feedbackMessage: L,
                                          onLike: b.feedback.handleLike,
                                          onDislike: b.feedback.handleDislike,
                                          onClose: b.close,
                                          onScreenClosed: b.onScreenClosed,
                                      }),
                                  }),
                              ],
                          })
                        : (null == r ? void 0 : r.withBigCardPanel)
                          ? et
                          : (0, u.jsxs)(em.AM, {
                                isMobile: c,
                                placement: c ? 'bottom' : 'top',
                                open: C,
                                onOpenChange: G,
                                positionElement: c ? void 0 : P.current,
                                offsetOptions: c ? void 0 : 12,
                                style: Q,
                                children: [
                                    et,
                                    (0, u.jsx)(em.hl, {
                                        className: nj().popoverContent,
                                        children: (0, u.jsx)(A.a, {
                                            pageId: x.AppScreen.FactScreen,
                                            pageIdForFrom: eF.b.FACT_SCREEN,
                                            mainObjectId: null == r ? void 0 : r.id,
                                            mainObjectType: x.DomainObjectType.Fact,
                                            pageStyle: c ? x.PageStyles.Sheet : x.PageStyles.Popup,
                                            pagePlacement: c ? x.PagePlacements.Bottom : x.PagePlacements.Floating,
                                            children: r && (0, u.jsx)(ee, { card: r, onLike: M, onDislike: O }),
                                        }),
                                    }),
                                ],
                            });
                }),
                nN = (0, m.PA)((e) => {
                    var t, i, a, n;
                    let { className: r, trackId: s } = e,
                        { words: o } = (0, Y.g)(),
                        l = (() => {
                            let e = (0, H.N)();
                            return (0, p.useMemo)(() => {
                                let t = e.get(z.WA),
                                    i = null == t ? void 0 : t.getPassportUid();
                                if (!i) return;
                                let a = new aF(String(i));
                                return (a.openDatabase(), a);
                            }, [e]);
                        })();
                    (() => {
                        let e = (0, th.e)(),
                            { words: t, sonataState: i } = (0, Y.g)();
                        (0, p.useEffect)(() => {
                            if (!e) return;
                            let a = e.state.queueState,
                                n = () => {
                                    let e = a.entityList.value,
                                        t = a.order.value,
                                        i = a.index.value;
                                    return e && null != i
                                        ? ((e, t, i) => ({
                                              trackIds: Array.from({ length: t.length > 0 ? t.length : e.length }, (i, a) => {
                                                  var n, r, s, o, l;
                                                  let d =
                                                      null == (o = e[t.length > 0 && null != (l = t[a]) ? l : a]) ||
                                                      null == (s = o.entity) ||
                                                      null == (r = s.data) ||
                                                      null == (n = r.meta)
                                                          ? void 0
                                                          : n.id;
                                                  return void 0 !== d ? String(d) : void 0;
                                              }),
                                              currentIndex: i,
                                          }))(e, t || [], i)
                                        : null;
                                },
                                r = a.currentEntity.onChange((e) => {
                                    ((e) => {
                                        if (i.isGenerativeContext) return;
                                        let a = n();
                                        if (!a) return;
                                        let r = aM({ queueState: a, backwardSize: 3, forwardSize: 17 });
                                        t.evict(new Set(r));
                                        let s =
                                                e === aw.So.MOVE_FORWARD ||
                                                e === aw.So.DISLIKE_MOVE_FORWARD ||
                                                e === aw.So.AUTO_MOVE_FORWARD ||
                                                e === aw.So.ERROR_MOVE_FORWARD,
                                            o = e === aw.So.MOVE_BACKWARD,
                                            l = [];
                                        (s && aO({ queueState: a, direction: 'forward', isRequested: t.isTrackRequested })
                                            ? (l = aB({ queueState: a, direction: 'forward', batchSize: 17 }))
                                            : o && aO({ queueState: a, direction: 'backward', isRequested: t.isTrackRequested })
                                              ? (l = aB({ queueState: a, direction: 'backward', batchSize: 3 }))
                                              : s || o || (l = r),
                                            l.length > 0 && t.loadCards(l));
                                    })(null == e ? void 0 : e.lastChangeMethod);
                                }),
                                s = a.entityList.onChange(() => {
                                    (() => {
                                        if (i.isGenerativeContext) return;
                                        let e = n();
                                        if (!e) return;
                                        let a = aM({ queueState: e, backwardSize: 3, forwardSize: 17 });
                                        a.length > 0 && t.loadCards(a);
                                    })();
                                });
                            return () => {
                                (null == r || r(), null == s || s());
                            };
                        }, [e, i, t]);
                    })();
                    let d = o.getCardForTrack(s);
                    if (
                        ((0, p.useEffect)(() => {
                            o.setWordsViewedStore(l);
                        }, [o, l]),
                        (0, p.useEffect)(() => {
                            d && o.markCardViewed(d.id);
                        }, [d, o]),
                        !s)
                    )
                        return null;
                    let c = String(s),
                        _ = !d && o.isLoading(c),
                        m = o.isBigCardPanelEnabled ? void 0 : x.DomainObjectType.SleepingAlice,
                        b = (null == d ? void 0 : d.isPersonal) ? x.DomainObjectType.PersonalFact : void 0,
                        v = null != (t = null != b ? b : m) ? t : x.DomainObjectType.Fact,
                        h = null != (i = null == d ? void 0 : d.domainObjectType) ? i : v,
                        g = null != (n = null != (a = null == d ? void 0 : d.analyticObjectId) ? a : m) ? n : '';
                    return (0, u.jsx)(C.F, {
                        blockId: x.EntityTypes.WordsInWave,
                        blockType: x.EntityTypes.WordsInWave,
                        blockPosX: 1,
                        blockPosY: 2,
                        objectsCount: (null == d ? void 0 : d.action) ? 2 : 1,
                        children: (0, u.jsx)(tn.B, {
                            objectType: h,
                            objectId: g,
                            objectPosX: 1,
                            objectPosY: (null == d ? void 0 : d.action) && d.action.url ? 2 : 1,
                            children: (0, u.jsx)(nk, { card: d, trackId: c, isLoading: _, className: r }),
                        }),
                    });
                });
            var nP = i(16967),
                nS = i(56194),
                nI = i.n(nS),
                nE = i(73170),
                nw = i(5120),
                nB = i(99954),
                nM = i.n(nB);
            let nO = (0, m.PA)((e) => {
                let { className: t } = e,
                    {
                        words: { bigCardPanel: i },
                    } = (0, Y.g)(),
                    { formatMessage: a } = (0, v.A)(),
                    { handleLike: n, handleDislike: r } = (() => {
                        let {
                                words: { bigCardPanel: e },
                            } = (0, Y.g)(),
                            { notify: t } = (0, aY.l)(),
                            { formatMessage: i } = (0, v.A)(),
                            a = (0, j.c)(async (a) => {
                                let n = e.card;
                                if (!(!n || !e.isOpened || e.isFeedbackMessageVisible || n.isFeedbackPending))
                                    try {
                                        (a !== aH.a.NEUTRAL && e.showFeedbackMessage(a), await n.sendFeedback(a, !0));
                                    } catch (a) {
                                        if (!(0, nw._n)(e) || !e.isOpened || e.card !== n) return;
                                        (e.hideFeedbackMessage(),
                                            t((0, u.jsx)(aG.h, { error: i({ id: 'error-messages.error-during-action' }) }), { containerId: aK.u.ERROR }));
                                    }
                            });
                        return {
                            handleLike: (0, j.c)(() => {
                                var t;
                                return a((null == (t = e.card) ? void 0 : t.isLiked) ? aH.a.NEUTRAL : aH.a.LIKE);
                            }),
                            handleDislike: (0, j.c)(() => a(aH.a.DISLIKE)),
                        };
                    })(),
                    { card: s, isFeedbackDisabled: o } = i;
                return (0, u.jsxs)('div', {
                    className: (0, _.$)(nM().root, t),
                    children: [
                        (0, u.jsx)(na, {
                            actionType: (null == s ? void 0 : s.isLiked) ? x.ActionType.Unlike : x.ActionType.Like,
                            variant: 'text',
                            size: 'm',
                            withRipple: !1,
                            disabled: o,
                            'aria-label': a({ id: 'words.like' }),
                            'aria-pressed': null == s ? void 0 : s.isLiked,
                            className: (0, _.$)(nM().button, { [nM().button_active]: null == s ? void 0 : s.isLiked }),
                            onClick: n,
                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                            children: (0, u.jsx)(Z.I, { variant: 'thumbUp', size: 'xxs' }),
                        }),
                        (0, u.jsx)('div', { className: nM().divider, 'aria-hidden': !0 }),
                        (0, u.jsx)(na, {
                            actionType: x.ActionType.Dislike,
                            variant: 'text',
                            size: 'm',
                            withRipple: !1,
                            disabled: o,
                            'aria-label': a({ id: 'words.dislike' }),
                            'aria-pressed': null == s ? void 0 : s.isDisliked,
                            className: (0, _.$)(nM().button, { [nM().button_active]: null == s ? void 0 : s.isDisliked }),
                            onClick: r,
                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                            children: (0, u.jsx)(Z.I, { variant: 'thumbDown', size: 'xxs' }),
                        }),
                    ],
                });
            });
            var nR = i(19994),
                nL = i(22136),
                nW = i.n(nL);
            let nV = (0, m.PA)((e) => {
                let { className: t } = e,
                    { lumen: i } = (0, Y.g)(),
                    { fullCover: a } = (0, az.x)(),
                    n = i.isNeededToLoad || i.isLoading,
                    r = (0, k.L)(() =>
                        n
                            ? (0, u.jsx)(nR.W, { className: nW().image, radius: 'l', isActive: !0 })
                            : (0, u.jsx)(P._V, { src: a, fit: 'contain', size: 'orig', withAvatarReplace: !0, withLoadingIndicator: !0, className: nW().image }),
                    );
                return (0, u.jsx)('div', { className: (0, _.$)(nW().root, t), 'aria-hidden': !0, children: r });
            });
            var nD = i(71066),
                nF = i.n(nD);
            let nU = (0, m.PA)((e) => {
                let { className: t, objectPosY: i } = e,
                    { words: a } = (0, Y.g)(),
                    { sourceItems: n, bigCard: r } = a.bigCardPanel;
                return (0, u.jsx)(C.F, {
                    blockId: x.EntityTypes.WordsInWave,
                    blockType: x.EntityTypes.WordsInWave,
                    blockPosX: 1,
                    blockPosY: 1,
                    objectsCount: n.length,
                    children: n.map((e, a) => {
                        var n;
                        return (0, u.jsx)(
                            tn.B,
                            {
                                objectType: x.DomainObjectType.Link,
                                objectId: null != (n = null == r ? void 0 : r.id) ? n : '',
                                objectPosX: a + 1,
                                objectPosY: i,
                                children: (0, u.jsxs)(nn, {
                                    url: e.url,
                                    className: (0, _.$)(nF().root, t),
                                    children: [
                                        e.faviconUrl && (0, u.jsx)(P._V, { src: e.faviconUrl, fit: 'cover', className: nF().icon, 'aria-hidden': !0 }),
                                        (0, u.jsx)(E.HL, {
                                            variant: 'span',
                                            type: 'text',
                                            size: 'm',
                                            weight: 'medium',
                                            lineClamp: 1,
                                            className: nF().title,
                                            children: e.title,
                                        }),
                                    ],
                                }),
                            },
                            e.url,
                        );
                    }),
                });
            });
            var nz = i(69515),
                nH = i.n(nz);
            let nK = (e) => {
                let { text: t, className: i, isContentVisible: a } = e,
                    {
                        textRef: n,
                        withTopFade: r,
                        withBottomFade: s,
                        updateScrollEdges: o,
                    } = ((e) => {
                        let { text: t, isContentVisible: i } = e,
                            a = (0, p.useRef)(null),
                            [n, r] = (0, p.useState)(!1),
                            [s, o] = (0, p.useState)(!1),
                            l = (0, j.c)(() => {
                                let e = a.current;
                                if (!e) return;
                                let { scrollTop: t, scrollHeight: i, clientHeight: n } = e,
                                    s = n > 0 && i > n + 1;
                                (r(s && t > 1), o(s && t + n < i - 1));
                            });
                        return (
                            (0, p.useLayoutEffect)(() => {
                                l();
                            }, [i, t, l]),
                            (0, p.useEffect)(() => {
                                let e = a.current;
                                if (!e) return;
                                let t = new ResizeObserver(l);
                                return (
                                    t.observe(e),
                                    document.fonts.addEventListener('loadingdone', l),
                                    () => {
                                        (t.disconnect(), document.fonts.removeEventListener('loadingdone', l));
                                    }
                                );
                            }, [l]),
                            { textRef: a, withTopFade: n, withBottomFade: s, updateScrollEdges: l }
                        );
                    })({ text: t, isContentVisible: a }),
                    l = (0, aU.D)({ enabled: a }),
                    d = (0, n_.S)([n, l]);
                return (0, u.jsx)(E.HL, {
                    ref: d,
                    variant: 'div',
                    size: 'l',
                    weight: 'bold',
                    className: (0, _.$)(nH().root, i, { [nH().root_withTopFade]: r, [nH().root_withBottomFade]: s }),
                    tabIndex: 0,
                    onScroll: o,
                    children: t,
                });
            };
            var nY = i(17114),
                nG = i.n(nY);
            let nX = (e) => {
                let { className: t, isActive: i, motionClassName: a } = e;
                return (0, u.jsx)('div', {
                    className: t,
                    'aria-hidden': !0,
                    children: (0, u.jsxs)('div', {
                        className: (0, _.$)(nG().root, a),
                        children: [
                            (0, u.jsx)(nR.W, { className: nG().item, radius: 'l', isActive: i }),
                            (0, u.jsx)(nR.W, { className: nG().item, radius: 'l', isActive: i }),
                            (0, u.jsx)(nR.W, { className: nG().item, radius: 'l', isActive: i }),
                            (0, u.jsx)(nR.W, { className: nG().item, radius: 'l', isActive: i }),
                        ],
                    }),
                });
            };
            var nq = i(37880),
                n$ = i.n(nq);
            let nZ = (0, m.PA)(() => {
                    var e, t, i, a, n, r, s;
                    let {
                            words: o,
                            settings: { isMobile: l },
                        } = (0, Y.g)(),
                        { formatMessage: d } = (0, v.A)(),
                        c = (() => {
                            let {
                                    words: { bigCardPanel: e },
                                } = (0, Y.g)(),
                                { card: t, isOpened: i, submittedFeedback: a, isFeedbackMessageVisible: n } = e;
                            return (
                                (0, p.useEffect)(() => {
                                    if (!i || !n) return;
                                    let r = setTimeout(() => {
                                        e.isOpened && e.isFeedbackMessageVisible && e.card === t && (a === aH.a.DISLIKE ? e.close() : e.hideFeedbackMessage());
                                    }, 3e3);
                                    return () => clearTimeout(r);
                                }, [e, t, n, i, a]),
                                (0, k.L)(() => (a === aH.a.DISLIKE ? (0, u.jsx)(M.A, { id: 'words.dislike-feedback' }) : (0, u.jsx)(M.A, { id: 'words.like-feedback' })))
                            );
                        })(),
                        { card: m, bigCard: b, objectType: h, mainObjectType: g, isContentReady: A, isFeedbackMessageVisible: C, isOpened: f, text: y } = o.bigCardPanel,
                        [j, T] = (0, p.useState)(() => A),
                        P = !j && (o.isShimmerVisible || A),
                        S = j && A && void 0 !== m,
                        I = j && !C,
                        w = S && f && void 0 !== b && o.bigCardLoadingState.isResolved,
                        {
                            contentAreaRef: B,
                            lumenRef: O,
                            cardContentRef: R,
                            isFeedbackLayout: L,
                        } = ((e) => {
                            let { isFeedbackMessageVisible: t, isPanelOpened: i } = e,
                                a = (0, p.useRef)(null),
                                n = (0, p.useRef)(null),
                                r = (0, p.useRef)(null),
                                s = (0, p.useRef)(null),
                                o = (0, p.useRef)(null),
                                [l, d] = (0, p.useState)(t),
                                c = (0, e1.U)('(prefers-reduced-motion: reduce)');
                            return (
                                (0, p.useLayoutEffect)(() => {
                                    var e, u;
                                    let _ = a.current,
                                        m = n.current;
                                    if (!_ || !m) return;
                                    if (l !== t) {
                                        let e = r.current;
                                        if (!e || !i) return;
                                        o.current = m.getBoundingClientRect().top;
                                        let a = m.offsetHeight;
                                        if (t) {
                                            let t = e.offsetTop,
                                                i = e.offsetHeight;
                                            (_.style.setProperty('--card-content-top', ''.concat(t, 'px')),
                                                _.style.setProperty('--card-content-height', ''.concat(i, 'px')));
                                        }
                                        (_.style.setProperty('--lumen-height', ''.concat(a, 'px')), d(t));
                                        return;
                                    }
                                    let p = o.current;
                                    if (((o.current = null), c)) {
                                        null == (u = s.current) || u.cancel();
                                        return;
                                    }
                                    if (null === p) return;
                                    null == (e = s.current) || e.cancel();
                                    let b = _.getBoundingClientRect().height / _.offsetHeight,
                                        v = (p - m.getBoundingClientRect().top) / b;
                                    if (!Number.isFinite(v) || !v) return;
                                    let h = Number.parseFloat(getComputedStyle(_).getPropertyValue('--words-big-card-panel-motion-duration'));
                                    s.current = m.animate([{ transform: 'translateY('.concat(v, 'px)') }, { transform: 'translateY(0)' }], {
                                        duration: h,
                                        easing: 'ease-out',
                                    });
                                }, [l, t, i, c]),
                                (0, p.useEffect)(
                                    () => () => {
                                        var e;
                                        return null == (e = s.current) ? void 0 : e.cancel();
                                    },
                                    [],
                                ),
                                { contentAreaRef: a, lumenRef: n, cardContentRef: r, isFeedbackLayout: l }
                            );
                        })({ isFeedbackMessageVisible: C, isPanelOpened: f });
                    return (
                        (0, ta.u)(),
                        (0, p.useEffect)(() => {
                            f && A && T(!0);
                        }, [A, f]),
                        (0, p.useEffect)(() => {
                            w && o.markBigCardViewed(m.id, b.id);
                        }, [b, m, w, o]),
                        (0, u.jsxs)('div', {
                            className: n$().root,
                            'data-words-panel-dismiss': !0,
                            children: [
                                (0, u.jsx)(nE.q, { children: (0, u.jsx)('div', { role: 'status', 'aria-atomic': 'true', children: C && c }) }),
                                (0, u.jsxs)('div', {
                                    ref: B,
                                    className: (0, _.$)(n$().contentArea, { [n$().contentArea_mobile]: l, [n$().contentArea_feedback]: L }),
                                    'data-words-panel-dismiss': !0,
                                    children: [
                                        (0, u.jsx)('div', {
                                            ref: O,
                                            className: (0, _.$)(n$().lumen, { [n$().lumen_mobile]: l }),
                                            'aria-hidden': !0,
                                            children: (0, u.jsx)(nV, { className: n$().contentMotion }),
                                        }),
                                        (0, u.jsxs)('div', {
                                            className: (0, _.$)(n$().contentStack, { [n$().contentStack_mobile]: l }),
                                            'aria-busy': P,
                                            'data-words-panel-dismiss': !0,
                                            children: [
                                                (0, u.jsx)(nX, {
                                                    className: (0, _.$)(n$().contentLayer, n$().shimmer, { [n$().contentLayer_visible]: P }),
                                                    motionClassName: n$().contentMotion,
                                                    isActive: P,
                                                }),
                                                (0, u.jsxs)('div', {
                                                    ref: R,
                                                    className: (0, _.$)(n$().contentLayer, n$().content, n$().cardContent, { [n$().contentLayer_visible]: j }),
                                                    'aria-hidden': !I,
                                                    inert: !I,
                                                    'data-words-panel-dismiss': !0,
                                                    children: [
                                                        (0, u.jsxs)('div', {
                                                            className: (0, _.$)(n$().textContainer, n$().contentMotion, { [n$().textContainer_hidden]: !I }),
                                                            'data-words-panel-dismiss': !0,
                                                            children: [
                                                                S &&
                                                                    y &&
                                                                    (0, u.jsx)(tn.B, {
                                                                        objectType: h,
                                                                        objectId: null != (i = null != (t = null == b ? void 0 : b.id) ? t : m.analyticObjectId) ? i : '',
                                                                        objectPosX: 1,
                                                                        objectPosY: 1,
                                                                        children: (0, u.jsx)(
                                                                            nK,
                                                                            { text: y, isContentVisible: f && I },
                                                                            null != (a = null == b ? void 0 : b.id) ? a : m.id,
                                                                        ),
                                                                    }),
                                                                S &&
                                                                    (null == (e = m.action) ? void 0 : e.url) &&
                                                                    (0, u.jsx)(tn.B, {
                                                                        objectType: null != (n = m.domainObjectType) ? n : x.DomainObjectType.Link,
                                                                        objectId: m.action.url,
                                                                        objectPosX: 1,
                                                                        objectPosY: 2,
                                                                        children: (0, u.jsx)(ni, {
                                                                            url: m.action.url,
                                                                            title: m.action.title,
                                                                            className: n$().action,
                                                                            analyticObjectId: null != (r = m.analyticObjectId) ? r : '',
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, u.jsx)('div', {
                                                            className: (0, _.$)(n$().feedbackButtons, n$().contentLayer, { [n$().contentLayer_visible]: I }),
                                                            'data-words-panel-dismiss': !0,
                                                            children:
                                                                S &&
                                                                (0, u.jsx)(tn.B, {
                                                                    objectType: b ? h : g,
                                                                    objectId: null != (s = null == b ? void 0 : b.id) ? s : m.id,
                                                                    objectPosX: 1,
                                                                    objectPosY: 3,
                                                                    children: (0, u.jsx)(nO, { className: n$().contentMotion }),
                                                                }),
                                                        }),
                                                    ],
                                                }),
                                                (0, u.jsx)('div', {
                                                    className: (0, _.$)(n$().contentLayer, n$().content, n$().feedback, { [n$().contentLayer_visible]: C }),
                                                    'aria-hidden': !0,
                                                    'data-words-panel-dismiss': !0,
                                                    children: (0, u.jsx)(E.DZ, {
                                                        variant: 'div',
                                                        size: 'm',
                                                        weight: 'bold',
                                                        className: (0, _.$)(n$().feedbackMessage, n$().contentMotion),
                                                        children: c,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, u.jsx)('div', {
                                            className: (0, _.$)(n$().contentLayer, n$().sources, { [n$().contentLayer_visible]: j, [n$().sources_hidden]: !I }),
                                            'aria-hidden': !I,
                                            inert: !I,
                                            'data-words-panel-dismiss': !0,
                                            children: S && (0, u.jsx)(nU, { objectPosY: 4 }),
                                        }),
                                    ],
                                }),
                                (0, u.jsx)(N.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    variant: l ? 'text' : 'default',
                                    size: 'm',
                                    icon: (0, u.jsx)(Z.I, { variant: 'arrowDown', size: 'xs', className: (0, _.$)(n$().closeIcon, { [n$().closeIcon_mobile]: l }) }),
                                    onClick: o.bigCardPanel.close,
                                    disabled: !f,
                                    'aria-label': d({ id: 'interface-actions.close' }),
                                    className: (0, _.$)(n$().closeButton, n$().controlsMotion, { [n$().closeButton_mobile]: l }),
                                }),
                                (null == m ? void 0 : m.isLumen) &&
                                    (0, u.jsx)(E.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 's',
                                        weight: 'medium',
                                        role: 'note',
                                        tabIndex: 0,
                                        className: (0, _.$)(n$().disclaimer, n$().controlsMotion, { [n$().disclaimer_mobile]: l }),
                                        children: (0, u.jsx)(M.A, { id: 'words.lumen-description' }),
                                    }),
                            ],
                        })
                    );
                }),
                nJ = { appear: 500, enter: 500, exit: 300 },
                nQ = {
                    appear: nI().enter,
                    appearActive: nI().enter_active,
                    enter: nI().enter,
                    enterActive: nI().enter_active,
                    exit: nI().exit,
                    exitActive: nI().exit_active,
                },
                n0 = (0, m.PA)((e) => {
                    let { onRestoreFocus: t } = e,
                        {
                            words: { bigCardPanel: i },
                            settings: { isMobile: a },
                        } = (0, Y.g)(),
                        { formatMessage: n } = (0, v.A)(),
                        {
                            ref: r,
                            focusPanel: s,
                            restoreFocus: o,
                            handleFocusCapture: l,
                        } = ((e) => {
                            let { onRestoreFocus: t } = e,
                                {
                                    words: { bigCardPanel: i },
                                } = (0, Y.g)(),
                                a = (0, p.useRef)(null),
                                n = (0, p.useRef)(null),
                                { isOpened: r, isFeedbackMessageVisible: s, isFeedbackDisabled: o } = i,
                                l = (0, j.c)(() => {
                                    var e;
                                    null == (e = a.current) || e.focus({ preventScroll: !0 });
                                }),
                                d = (0, j.c)((e) => {
                                    n.current = e.target;
                                }),
                                c = (0, j.c)(() => {
                                    var e;
                                    (document.activeElement === document.body || (null == (e = a.current) ? void 0 : e.contains(document.activeElement))) && t();
                                });
                            return (
                                (0, p.useEffect)(() => {
                                    let e = n.current;
                                    r &&
                                        (s || o) &&
                                        (null == e ? void 0 : e.closest('[inert], :disabled')) &&
                                        (document.activeElement === document.body || document.activeElement === e) &&
                                        l();
                                }, [l, o, s, r]),
                                { ref: a, focusPanel: l, restoreFocus: c, handleFocusCapture: d }
                            );
                        })({ onRestoreFocus: t }),
                        d = (0, e1.U)('(prefers-reduced-motion: reduce)'),
                        c = (0, j.c)(() => {
                            !i.isOpened && i.trackId && (o(), i.reset());
                        });
                    return (
                        (0, p.useEffect)(() => () => i.reset(), [i]),
                        (0, u.jsx)(nP.A, {
                            in: i.isOpened,
                            nodeRef: r,
                            timeout: d ? 0 : nJ,
                            mountOnEnter: !0,
                            unmountOnExit: !0,
                            appear: !0,
                            classNames: nQ,
                            onEnter: s,
                            onExited: c,
                            children: (0, u.jsx)('div', {
                                ref: r,
                                className: (0, _.$)(nI().root, { [nI().root_mobile]: a }),
                                role: 'region',
                                'aria-label': n({ id: 'a11y-regions.words' }),
                                tabIndex: -1,
                                inert: !i.isOpened,
                                onFocusCapture: l,
                                'data-words-panel-dismiss': !0,
                                children: (0, u.jsx)(A.a, {
                                    pageId: x.AppScreen.LumenFactScreen,
                                    pageIdForFrom: eF.b.LUMEN_FACT_SCREEN,
                                    mainObjectType: i.mainObjectType,
                                    mainObjectId: i.cardId,
                                    pageStyle: a ? x.PageStyles.Fullscreen : x.PageStyles.Sheet,
                                    pagePlacement: a ? x.PagePlacements.Fullscreen : x.PagePlacements.Right,
                                    children: (0, u.jsx)(C.F, {
                                        blockId: x.EntityTypes.WordsInWave,
                                        blockType: x.EntityTypes.WordsInWave,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        objectsCount: 1,
                                        children: (0, u.jsx)(nZ, {}),
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var n1 = i(59927),
                n2 = i(40634),
                n8 = i(82194),
                n5 = i.n(n8);
            let n6 = (0, m.PA)((e) => {
                let { artists: t, open: i, positionElement: a, onOpenChange: n } = e,
                    { formatMessage: r } = (0, v.A)(),
                    {
                        settings: { isMobile: s },
                    } = (0, Y.g)();
                return (0, u.jsxs)(em.AM, {
                    isMobile: s,
                    placement: s ? 'bottom' : 'top',
                    open: i,
                    onOpenChange: n,
                    positionElement: s ? void 0 : a,
                    transform: s,
                    customRoleProps: { role: 'menu' },
                    children: [
                        null,
                        (0, u.jsx)(em.hl, {
                            className: n5().root,
                            'aria-label': r({ id: 'interface-actions.context-menu-artists' }),
                            'data-test-id': f.OA.artists.ARTISTS_MENU,
                            children: (0, u.jsx)('div', {
                                className: n5().menuList,
                                children: t.map((e) => (0, u.jsx)(n2.V, { artist: e, className: n5().menuItem }, e.id)),
                            }),
                        }),
                    ],
                });
            });
            var n9 = i(34375),
                n4 = i.n(n9),
                n7 = i(13946);
            let n3 = (0, m.PA)((e) => {
                let {
                        lineClamp: t,
                        shouldShowMyVibeTitle: i,
                        isNonMusic: a,
                        isGenerative: n,
                        withLink: r,
                        hasMultipleArtists: s,
                        mainAlbum: o,
                        entityTitle: l,
                        artists: d,
                        artistsRef: c,
                        isArtistsMenuOpen: m,
                        onArtistsMenuClick: p,
                    } = e,
                    { formatMessage: b } = (0, v.A)();
                if (i)
                    return (0, u.jsx)(E.HL, {
                        variant: 'span',
                        className: (0, _.$)(n4().text, n4().important),
                        lineClamp: 1,
                        'data-test-id': f.Xk.vibe.VIBE_DYNAMIC_TITLE_VIBE,
                        children: b({ id: 'entity-names.my-vibe' }),
                    });
                if (a && o)
                    return (0, u.jsx)(tP.N, {
                        href: o.url,
                        className: (0, _.$)(n4().text, n4().important),
                        'data-test-id': f.Xk.vibe.VIBE_DYNAMIC_TITLE_NON_MUSIC_ENTITY_TITLE,
                        children: (0, u.jsx)(E.HL, { variant: 'span', className: (0, _.$)(n4().text, n4().important), lineClamp: t, children: o.title }),
                    });
                if (n && l)
                    return (0, u.jsx)(E.HL, {
                        variant: 'span',
                        className: (0, _.$)(n4().text, n4().important),
                        lineClamp: t,
                        'data-test-id': f.Xk.vibe.VIBE_DYNAMIC_TITLE_GENERATIVE,
                        children: l,
                    });
                if (d) {
                    let e = (0, u.jsx)(n7.i, {
                        artists: d,
                        captionClassName: (0, _.$)(n4().text, n4().important),
                        linkClassName: (0, _.$)(n4().text, n4().important),
                        className: (0, _.$)(n4().text, n4().important),
                        lineClamp: t,
                        withLink: r,
                        withCustomTooltip: !1,
                        variant: 'breakWord',
                    });
                    return s
                        ? (0, u.jsx)(N.$, {
                              className: n4().button,
                              variant: 'text',
                              'aria-label': b({ id: 'interface-actions.context-menu-artists' }),
                              'aria-haspopup': 'menu',
                              'aria-expanded': m,
                              withRipple: !1,
                              onClick: p,
                              ref: c,
                              'data-test-id': f.Xk.vibe.VIBE_DYNAMIC_TITLE_MULTIPLE_ARTISTS_BUTTON,
                              children: e,
                          })
                        : e;
                }
                return null;
            });
            var re = i(94345),
                rt = i.n(re);
            let ri = 'vibe-freemium-block',
                ra = (0, m.PA)((e) => {
                    let { className: t } = e,
                        { user: i } = (0, Y.g)(),
                        [a, n] = (0, T.d)(),
                        {
                            openPaymentWidgetModal: r,
                            isShimmerActive: s,
                            isShimmerVisible: o,
                            mainText: l,
                            mainTextA11y: d,
                            additionText: c,
                        } = (0, U.D)({ storeName: 'music', isEnabled: i.isAuthorized && !i.hasPlus, offerElement: { element: a, intersectionPropertyId: ri } }),
                        m = (0, k.L)(() =>
                            i.isAuthorized
                                ? (0, u.jsx)(q.b, {
                                      ref: n,
                                      'data-intersection-property-id': ri,
                                      mainText: l,
                                      ariaLabel: d,
                                      additionText: c,
                                      isShimmerActive: s,
                                      isShimmerVisible: o,
                                      onClick: r,
                                      className: rt().button,
                                      mainTextClassName: rt().buttonMainText,
                                      additionTextClassName: rt().buttonAdditionText,
                                      'data-test-id': f.Xk.vibe.VIBE_FREEMIUM_BUTTON,
                                  })
                                : (0, u.jsx)($.H, {
                                      size: 'l',
                                      variant: 'default',
                                      buttonText: (0, u.jsx)(E.HL, {
                                          variant: 'span',
                                          size: 'l',
                                          children: (0, u.jsx)(M.A, { id: 'authorization.enter-and-listen-button' }),
                                      }),
                                      className: rt().button,
                                  }),
                        );
                    return (0, u.jsxs)('div', {
                        className: (0, _.$)(rt().root, t),
                        'data-test-id': f.Xk.vibe.VIBE_FREEMIUM_BLOCK,
                        children: [
                            m,
                            (0, u.jsx)(E.HL, {
                                variant: 'span',
                                size: 'l',
                                className: rt().description,
                                'data-test-id': f.Xk.vibe.VIBE_FREEMIUM_BLOCK_DESCRIPTION,
                                children: (0, u.jsx)(M.A, { id: 'buy-subscription.new-vibe-description', values: { nbsp: ' ' } }),
                            }),
                        ],
                    });
                }),
                rn = (0, m.PA)(() => {
                    var e, t, i, a, n, r, s, o, l, d, c, m, b, g, A, y, T;
                    let { formatMessage: N } = (0, v.A)(),
                        P = (() => {
                            let {
                                    words: { bigCardPanel: e },
                                } = (0, Y.g)(),
                                t = (0, p.useRef)(null),
                                i = (0, p.useRef)(!1),
                                a = (0, p.useRef)(null),
                                { isOpened: n } = e,
                                r = (0, j.c)((t) => {
                                    t || ((i.current = !0), e.close());
                                }),
                                { context: s, refs: o } = (0, aI.useFloating)({ open: n, onOpenChange: r }),
                                l = (0, aI.useDismiss)(s, { escapeKey: !1, outsidePressEvent: 'click' }),
                                { getFloatingProps: d } = (0, aI.useInteractions)([l]),
                                c = (0, j.c)((e) => {
                                    a.current = e.target;
                                }),
                                u = (0, j.c)((t) => {
                                    var i;
                                    let n = a.current;
                                    ((a.current = null),
                                        e.isOpened &&
                                            !t.defaultPrevented &&
                                            0 !== t.detail &&
                                            t.target === n &&
                                            t.target instanceof HTMLElement &&
                                            t.currentTarget.contains(t.target) &&
                                            t.target.hasAttribute('data-words-panel-dismiss') &&
                                            (null == (i = window.getSelection()) ? void 0 : i.isCollapsed) !== !1 &&
                                            e.close());
                                }),
                                _ = (0, j.c)((t) => {
                                    t.code === aE.v.ESCAPE &&
                                        !t.defaultPrevented &&
                                        e.isOpened &&
                                        t.currentTarget.contains(document.activeElement) &&
                                        (t.preventDefault(), t.stopPropagation(), e.close());
                                }),
                                m = (0, j.c)((i) => {
                                    e.isOpened || (t.current = i.target);
                                }),
                                b = (0, j.c)(() => {
                                    var e;
                                    if (i.current) return;
                                    let a = t.current;
                                    (null == a ||
                                        !a.isConnected ||
                                        a.closest('[inert], [aria-hidden="true"]') ||
                                        (a.focus({ preventScroll: !0 }), document.activeElement !== a)) &&
                                        (null == (e = o.floating.current) || e.focus({ preventScroll: !0 }));
                                });
                            return (
                                (0, p.useEffect)(() => {
                                    n && (i.current = !1);
                                }, [n]),
                                {
                                    regionRef: o.setFloating,
                                    regionProps: d({ onKeyDown: _, onPointerDownCapture: c, onClick: u }),
                                    handleFocusCapture: m,
                                    restoreFocus: b,
                                }
                            );
                        })(),
                        {
                            sonataState: S,
                            experiments: I,
                            words: E,
                            lumen: w,
                            settings: { isMobile: B },
                            user: M,
                            paywall: { modal: R },
                            vibe: L,
                        } = (0, Y.g)(),
                        { screen: W } = (0, O.j)(),
                        V = null == W ? void 0 : W.pageIdForFrom;
                    (0, ta.u)();
                    let { resetContext: U } = (0, K.B)({ seeds: [eb.M1], pageIdForFrom: V, blockIdForFrom: ''.concat(x.EntityTypes.MyWave, '-').concat(eV.U.RADIO) }),
                        { isEnabled: X } = (0, tg.e)(),
                        q = I.checkExperiment(G.z.WebNextWaveLikesAndShares, 'on') ? ad : ay,
                        $ = L.isShuffleVibe && S.isVibeContext,
                        Z = (0, tr.OH)($ || null == (e = S.entityMeta) ? void 0 : e.averageColor),
                        {
                            context: J,
                            isContextResetAvailable: Q,
                            shouldShowMyVibeTitle: ee,
                            shouldHideResetButton: et,
                            player: ei,
                            isTrackColors: ea,
                            fallbackAppearance: en,
                        } = ((e) => {
                            let {
                                    experiments: t,
                                    sonataState: i,
                                    user: a,
                                    vibe: n,
                                    settings: { isMobile: r },
                                } = (0, Y.g)(),
                                { formatMessage: s } = (0, v.A)(),
                                { isMyVibeContext: o, isInitialState: l } = (() => {
                                    var e, t;
                                    let i = (0, th.e)(),
                                        { sonataState: a } = (0, Y.g)(),
                                        n = (0, p.useCallback)(
                                            (e) => {
                                                var t;
                                                return null != (t = null == i ? void 0 : i.state.currentContext.onChange(e)) ? t : () => void 0;
                                            },
                                            [i],
                                        ),
                                        r = (0, p.useSyncExternalStore)(
                                            n,
                                            () => (null == i ? void 0 : i.state.currentContext.value),
                                            () => void 0,
                                        ),
                                        s =
                                            (null == r ? void 0 : r.data.type) === iU.K.Vibe
                                                ? null == (t = r.data.meta.session) || null == (e = t.wave)
                                                    ? void 0
                                                    : e.seeds
                                                : void 0,
                                        o = (null == s ? void 0 : s.length) === 1 ? s[0] : void 0,
                                        l = o === eb.M1 || !!(null == o ? void 0 : o.includes(eb.yx)),
                                        d = null == i ? void 0 : i.state.queueState.currentEntity.value;
                                    return { isMyVibeContext: l, isInitialState: !r && !d && !a.entityMeta };
                                })(),
                                d = (() => {
                                    var e, t, i, a, n, r;
                                    let { sonataState: s } = (0, Y.g)(),
                                        o = (0, th.e)(),
                                        { formatMessage: l } = (0, v.A)(),
                                        d = null == o ? void 0 : o.state.currentContext.value,
                                        c = null == o ? void 0 : o.state.queueState.currentEntity.value,
                                        u = null == c ? void 0 : c.sourceContext;
                                    if (!(null == d ? void 0 : d.data.type)) return;
                                    let _ = (function (e, t) {
                                        switch (t) {
                                            case iF.h.SEARCH:
                                                return e({ id: 'entity-names.search' });
                                            case iF.h.MUSIC_HISTORY:
                                            case iF.h.MUSIC_HISTORY_SEARCH:
                                                return e({ id: 'entity-names.music-history' });
                                            case iF.h.DOWNLOADED_TRACKS:
                                            case iF.h.USER_TRACKS:
                                                return e({ id: 'entity-names.collection' });
                                            case iF.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                return e({ id: 'page.familiar-vibe' });
                                            case iF.h.ARTIST_MY_COLLECTION:
                                                return e({ id: 'page.familiar-collection' });
                                            default:
                                                return;
                                        }
                                    })(l, null == u ? void 0 : u.data.sourceContextType);
                                    if (_) return _;
                                    switch (d.data.type) {
                                        case iU.K.Album:
                                            if (null == (e = s.entityMeta) ? void 0 : e.isPodcast) return l({ id: 'entity-names.podcast' });
                                            if (null == (t = s.entityMeta) ? void 0 : t.isAudiobook) return l({ id: 'entity-names.book' });
                                            if (null == (i = s.entityMeta) ? void 0 : i.isFairyTale) return l({ id: 'entity-names.fairytale' });
                                            return d.data.meta.title;
                                        case iU.K.Playlist:
                                            return d.data.meta.title;
                                        case iU.K.Vibe: {
                                            let e = null == (a = d.data.meta.session) ? void 0 : a.wave;
                                            if (!e) return;
                                            if (1 === e.seeds.length && e.seeds[0] === eb.M1) return l({ id: 'entity-names.my-vibe' });
                                            return l({ id: 'vibe-actions.vibe-context' }, { type: e.type, name: e.name });
                                        }
                                        case iU.K.Artist:
                                            return l({ id: 'entity-names.artist-popular-tracks' });
                                        case iU.K.Various:
                                            return null == (r = s.entityMeta) || null == (n = r.mainAlbum) ? void 0 : n.title;
                                        case iU.K.Generative:
                                            return l({ id: 'entity-names.generative' });
                                        default:
                                            return;
                                    }
                                })(),
                                { isPlaying: c, isVibeContext: u, entityMeta: _ } = i,
                                m = !!(n.isShuffleVibe && u),
                                b = !o,
                                h = s({ id: 'entity-names.my-vibe' }),
                                g = !c && (o || l),
                                x = {
                                    context: o ? h : d,
                                    isContextResetAvailable: b,
                                    shouldShowMyVibeTitle: g,
                                    shouldHideResetButton: g,
                                    player: {
                                        playButtonVariant: r && !_ ? 'standalone' : 'inline',
                                        shouldShowTrackInfo: !r || !!_,
                                        shouldShowArtists: g,
                                        shouldShowArtistsWithTrackTitle: !0,
                                        shouldKeepMobileSpacingOnPause: !0,
                                    },
                                    isTrackColors: a.isAuthorized,
                                    fallbackAppearance: { image: a.isAuthorized && m ? 'reshuffle' : 'default', color: a.isAuthorized && !m ? e : void 0 },
                                };
                            return t.checkExperiment(G.z.WebNextWavePauseState, 'on')
                                ? x
                                : {
                                      context: d && m ? h : d,
                                      isContextResetAvailable: b,
                                      shouldShowMyVibeTitle: !c && (u || !_),
                                      shouldHideResetButton: !c && !b,
                                      player: {
                                          playButtonVariant: r && !c ? 'cover' : 'inline',
                                          shouldShowTrackInfo: !0,
                                          shouldShowArtists: !c && u,
                                          shouldShowArtistsWithTrackTitle: !1,
                                          shouldKeepMobileSpacingOnPause: !1,
                                      },
                                      isTrackColors: c || m,
                                      fallbackAppearance: { image: m ? 'reshuffle' : 'default', blendMode: c && !m ? 'luminosity' : void 0 },
                                  };
                        })(Z.primary),
                        er = null == (t = S.entityMeta) ? void 0 : t.mainArtist,
                        es = null == (i = S.entityMeta) ? void 0 : i.mainAlbum,
                        eo = null == (a = S.entityMeta) ? void 0 : a.artists,
                        el = !!(null == (n = S.entityMeta) ? void 0 : n.isNonUserGenerated),
                        ed = !!(null == (r = S.entityMeta) ? void 0 : r.isNonMusic),
                        ec = S.isGenerativeContext,
                        eu = null == (o = S.entityMeta) || null == (s = o.cutoutCover) ? void 0 : s.uri,
                        e_ = ((e) => {
                            let { artistCutoutCoverUri: t, hasMainArtist: i, releaseCutoutCoverUri: a } = e;
                            return i && (null != a ? a : t) ? (void 0 === a ? 'cutout_artist' : 'cutout_release') : 'text';
                        })({ artistCutoutCoverUri: null == er || null == (l = er.cutoutCover) ? void 0 : l.uri, hasMainArtist: !!er, releaseCutoutCoverUri: eu }),
                        em = !!(null != eu ? eu : null == er || null == (d = er.cutoutCover) ? void 0 : d.uri) && !ee,
                        ep = em && er,
                        ev = (0, n1.A)(null != eo ? eo : []) > 1,
                        eh = el && !ev,
                        eg = (0, p.useRef)(null),
                        {
                            isArtistsMenuOpen: ex,
                            artistsMenuPosition: eA,
                            handleArtistsMenuClick: eC,
                            handleArtistsMenuOpenChange: ef,
                        } = ((e) => {
                            let { ref: t } = e,
                                [i, a] = (0, p.useState)(!1),
                                [n, r] = (0, p.useState)(null);
                            return {
                                isArtistsMenuOpen: i,
                                artistsMenuPosition: n,
                                handleArtistsMenuClick: (0, j.c)((e) => {
                                    if (e.detail > 0) {
                                        let { clientX: t, clientY: i } = e;
                                        r({ getBoundingClientRect: () => new DOMRect(t, i, 0, 0) });
                                    } else r(t.current);
                                    a(!0);
                                }),
                                handleArtistsMenuOpenChange: (0, j.c)((e) => {
                                    (a(e), e || r(null));
                                }),
                            };
                        })({ ref: eg });
                    ((e) => {
                        let { albumId: t, displayType: i, trackId: a } = e,
                            n = (0, H.N)(),
                            r = n.get(z.Zf),
                            s = n.get(z.UB),
                            o = (0, p.useRef)(void 0);
                        (0, p.useEffect)(() => {
                            if (!a) {
                                o.current = void 0;
                                return;
                            }
                            let e = ''.concat(a, ':').concat(i);
                            s &&
                                o.current !== e &&
                                ((o.current = e),
                                s
                                    .send(
                                        { name: 'TECH_EVENT_CUTOUT_PHOTO_SHOWN', data: { ...(void 0 === t ? {} : { albumId: String(t) }), displayType: i, trackId: a } },
                                        { topLevelParameter: 'tech-metrics' },
                                    )
                                    .catch((e) => {
                                        r.error(e instanceof Error ? e : String(e));
                                    }));
                        }, [t, i, r, a, s]);
                    })({ albumId: null == (c = S.entityMeta) ? void 0 : c.albumId, displayType: e_, trackId: null == (m = S.entityMeta) ? void 0 : m.id });
                    let ey = !M.hasPlus || !M.isAuthorized,
                        ej = (0, k.L)(() => (ee ? iM : em ? iw : iB)),
                        eT = (0, k.L)(() => (ey ? { ...ej, maxFontSize: Math.min(ej.maxFontSize, 72), fallbackMaxLines: 2 } : ej)),
                        ek =
                            M.hasPlus &&
                            (I.checkExperiment(G.z.WebNextWaveScreenWordsInWave, 'on') || I.checkExperiment(G.z.WebNextWaveScreenWordsInWave, 'on_with_onyx')),
                        eN = E.isBigCardPanelEnabled && w.isNeededToLoad,
                        eP = E.bigCardPanel.isOpened,
                        eS = eP && B,
                        { solidColor: eI } = (0, az.x)(),
                        eE = { '--track-color': Z.primary, '--lumen-color': null != eI ? eI : 'transparent' };
                    ((0, p.useEffect)(() => {
                        eN && w.getData();
                    }, [w, eN]),
                        (0, p.useEffect)(() => {
                            ev || ef(!1);
                        }, [ef, ev]));
                    let ew = (0, k.L)(() =>
                            I.checkExperiment(G.z.WebNextShaderFallbackEnabled, 'on')
                                ? (0, u.jsx)(D, { className: n4().vibeAnimation, appearance: en })
                                : (0, u.jsx)(F, { className: n4().vibeAnimation, averageColor: Z.primary, isTrackColors: ea, fallbackAppearance: en }),
                        ),
                        eB = (0, j.c)(() => {
                            (M.hasPlus || h.$3, U());
                        }),
                        eM = (0, k.L)(() => {
                            let e = S.entityMeta,
                                t = (0, u.jsx)('div', {
                                    className: (0, _.$)(n4().textContainer, { [n4().textContainer_withCover]: em && e, [n4().textContainer_playing]: !ee }),
                                    children: (0, u.jsx)(am, {
                                        textOptions: eT,
                                        children: (0, u.jsx)(n3, {
                                            shouldShowMyVibeTitle: ee,
                                            isNonMusic: ed,
                                            isGenerative: ec,
                                            withLink: eh,
                                            hasMultipleArtists: ev,
                                            mainAlbum: es,
                                            entityTitle: null == e ? void 0 : e.title,
                                            artists: eo,
                                            artistsRef: eg,
                                            isArtistsMenuOpen: ex,
                                            onArtistsMenuClick: eC,
                                        }),
                                    }),
                                });
                            return e
                                ? (0, u.jsx)(C.F, {
                                      blockId: x.EntityTypes.MyWave,
                                      blockType: x.EntityTypes.MyWave,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      children: (0, u.jsxs)(tn.B, {
                                          objectType: x.DomainObjectType.Artist,
                                          objectId: e.id,
                                          objectPosX: 1,
                                          objectPosY: 1,
                                          children: [
                                              t,
                                              ep &&
                                                  (0, u.jsx)('div', {
                                                      className: n4().artistCover,
                                                      children: (0, u.jsx)(iW, { artist: er, withLink: eh, onClick: eC, featCoverUri: eu }),
                                                  }),
                                              eo && ev && (0, u.jsx)(n6, { artists: eo, open: ex, onOpenChange: ef, positionElement: eA }),
                                          ],
                                      }),
                                  })
                                : t;
                        });
                    return (0, u.jsxs)(eR.r, {
                        page: eL.l.HOME_SCREEN,
                        places: [eW.R.MY_WAVE],
                        children: [
                            X && (0, u.jsx)(aS, {}),
                            (0, u.jsxs)('div', {
                                className: (0, _.$)(n4().root, n4().bigCardPanel, {
                                    [n4().root_reshuffle]: $,
                                    [n4().root_withoutPlus]: !M.hasPlus,
                                    [n4().bigCardPanel_opened]: eP,
                                }),
                                onFocusCapture: P.handleFocusCapture,
                                children: [
                                    (0, u.jsx)(aj, { inert: eS, className: (0, _.$)(n4().wheel, { [n4().wheel_hidden]: eS }) }),
                                    (0, u.jsxs)('div', {
                                        ...P.regionProps,
                                        ref: P.regionRef,
                                        className: (0, _.$)(n4().meta, { [n4().meta_noPlus]: !M.hasPlus }),
                                        tabIndex: -1,
                                        role: 'region',
                                        'aria-label': N({ id: 'entity-names.my-vibe' }),
                                        'data-test-id': f.Xk.vibe.VIBE_META,
                                        'data-words-panel-dismiss': !0,
                                        children: [
                                            (0, u.jsx)('div', {
                                                className: (0, _.$)(n4().bigCardPanelBackground, { [n4().bigCardPanelBackground_visible]: eP }),
                                                style: eE,
                                                'aria-hidden': !0,
                                            }),
                                            (0, u.jsx)(C.F, {
                                                blockId: x.EntityTypes.Toolbar,
                                                blockType: x.EntityTypes.Toolbar,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 1,
                                                children: (0, u.jsx)(tn.B, {
                                                    objectType: x.DomainObjectType.Wave,
                                                    objectId: eb.M1,
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    children: (0, u.jsx)(q, {
                                                        className: (0, _.$)(n4().context, { [n4().context_hidden]: eP, [n4().context_mobile]: B }),
                                                        context: J,
                                                        isResetAvailable: Q,
                                                        isHidden: et || eP,
                                                        onClick: eB,
                                                    }),
                                                }),
                                            }),
                                            (0, u.jsxs)('div', {
                                                className: n4().entityMeta,
                                                'aria-hidden': eP,
                                                inert: eP,
                                                children: [
                                                    ew,
                                                    (0, u.jsx)(
                                                        'div',
                                                        {
                                                            className: (0, _.$)(n4().entityMetaBody, {
                                                                [n4().entityMetaBody_hidden]: eP,
                                                                [n4().entityMetaBody_mobile]: B,
                                                            }),
                                                            children: eM,
                                                        },
                                                        ''.concat(null != (y = null == (b = S.entityMeta) ? void 0 : b.idWithContext) ? y : 'default', '-').concat(ee),
                                                    ),
                                                ],
                                            }),
                                            (0, u.jsxs)('div', {
                                                className: (0, _.$)(n4().playerBlock, {
                                                    [n4().playerBlock_withFreemium]: !M.hasPlus,
                                                    [n4().playerBlock_shifted]: eP && !B,
                                                }),
                                                inert: eS,
                                                'data-words-panel-dismiss': !0,
                                                children: [
                                                    (0, u.jsx)(C.F, {
                                                        blockId: x.EntityTypes.MyWave,
                                                        blockType: x.EntityTypes.MyWave,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        children: (0, u.jsx)(tn.B, {
                                                            objectType: x.DomainObjectType.Track,
                                                            objectId: null != (T = null == (g = S.entityMeta) ? void 0 : g.id) ? T : '',
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            children: (0, u.jsx)(iE, {
                                                                presentation: ei,
                                                                className: (0, _.$)(n4().player, { [n4().player_hidden]: eS }),
                                                                albumCoverClassName: (0, _.$)(n4().albumCover, { [n4().albumCover_hidden]: eP }),
                                                            }),
                                                        }),
                                                    }),
                                                    ek &&
                                                        (0, u.jsx)('div', {
                                                            className: (0, _.$)(n4().words, { [n4().words_hidden]: eP, [n4().words_mobile]: B }),
                                                            'aria-hidden': eP,
                                                            inert: eP,
                                                            children: (0, u.jsx)(nN, { trackId: null == (A = S.entityMeta) ? void 0 : A.id }),
                                                        }),
                                                    !M.hasPlus && (0, u.jsx)(ra, { className: n4().freemiumBlock }),
                                                ],
                                            }),
                                            (0, u.jsx)(n0, { onRestoreFocus: P.restoreFocus }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                rr = (0, m.PA)((e) => {
                    var t, i;
                    let { withVideoModal: a } = e,
                        {
                            main: n,
                            user: r,
                            words: s,
                            experiments: o,
                            releaseNotes: l,
                            fullscreenVideoPlayer: d,
                            sonataState: { entityMeta: c },
                            settings: { isMobile: m },
                        } = (0, Y.g)(),
                        { formatMessage: b } = (0, v.A)(),
                        M = (0, ez.B)(),
                        { contentScrollRef: O, setContentScrollRef: R } = (0, ep.g)(),
                        [L, W] = (0, T.d)(),
                        V = (0, eM.d)(),
                        D = (0, eB.C)(),
                        { theme: F } = (0, eY.W)(),
                        { isNewWaveTabEnabled: U } = n,
                        z = (0, eH.Z)(null != (i = null == (t = n.specialHeader) ? void 0 : t.url) ? i : '');
                    ((0, p.useEffect)(() => {
                        var e, t;
                        if (!a || !V) return;
                        let i = (0, eX.j)(),
                            n = null != (e = null == i ? void 0 : i.get(eG.K.IDS)) ? e : null,
                            r = null != (t = null == i ? void 0 : i.get(eG.K.ACTIVE_INDEX)) ? t : null,
                            { clipIds: s, activeClipIndex: o } = (0, eI.V)(n, r);
                        (D(s, o), d.setOpenedFromMain());
                    }, [a, V, d, D]),
                        (0, p.useEffect)(
                            () => () => {
                                (n.reset(), U || n.landing.reset());
                            },
                            [n, n.landing, U],
                        ),
                        (0, eU.J)(n.landing.isResolved),
                        (() => {
                            let { main: e } = (0, Y.g)(),
                                { entryPoint: t, isNewWaveTabEnabled: i } = e,
                                a = t.isEnabled,
                                n = t.isNeededToLoad;
                            (0, p.useEffect)(() => {
                                i && a && n && t.getData();
                            }, [t, a, n, i]);
                        })());
                    let H = o.checkExperiment(G.z.WebNextDisableVibe, 'on'),
                        K = (0, j.c)(() => {
                            l.isReady && l.modal.open();
                        }),
                        X = (0, p.useMemo)(() => (H ? { 'margin-block-start': '1vh' } : {}), [H]),
                        q = (0, p.useMemo)(() => {
                            if (o.checkExperiment(G.z.WebNextBetaLabel, 'off')) return null;
                            {
                                let e = o.checkExperiment(G.z.WebNextBetaLabel, 'version'),
                                    t = b({ id: 'desktop.app-version' }, { version: M }),
                                    i = e ? M : 'Beta';
                                return (0, u.jsxs)(I.m_, {
                                    placement: 'left',
                                    offsetOptions: 4,
                                    children: [
                                        (0, u.jsx)(N.$, {
                                            color: 'secondary',
                                            radius: 'xl',
                                            'aria-label': e ? t : 'Beta '.concat(t),
                                            className: (0, _.$)(eJ().beta, { [eJ().beta_withReleaseNotes]: l.isReady }),
                                            onClick: K,
                                            'data-test-id': f.Xk.main.RELEASE_NOTES_BUTTON,
                                            children: (0, u.jsx)(E.HL, { variant: 'div', type: 'text', size: 's', weight: 'medium', children: i }),
                                        }),
                                        (0, u.jsx)(I.ZI, { children: M }),
                                    ],
                                });
                            }
                        }, [o, b, K, l.isReady, M]),
                        $ = (0, _.$)(eJ().betaSlot, { [eJ().betaSlot_newVibe]: U }),
                        Z = (0, p.useMemo)(() => {
                            if (!n.specialHeader) return {};
                            let e = F === eK.S.Light ? n.specialHeader.lightTheme : n.specialHeader.darkTheme;
                            return { '--special-button-background': e.backgroundColor, '--special-button-color': e.textColor };
                        }, [n.specialHeader, F]),
                        J = (0, k.L)(() => {
                            let e = o.checkExperiment(G.z.WebNextRewind2024, 'on');
                            return n.specialHeader
                                ? (0, u.jsxs)('div', {
                                      className: eJ().specialHeaderContainer,
                                      children: [
                                          e &&
                                              (0, u.jsx)(P._V, {
                                                  src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69203c15cffc41172f18a125/orig',
                                                  withAvatarReplace: !0,
                                                  className: eJ().specialHeaderImage,
                                                  fit: 'contain',
                                              }),
                                          (0, u.jsx)(N.$, {
                                              color: 'secondary',
                                              size: 'default',
                                              radius: 'xxxl',
                                              role: 'link',
                                              className: eJ().specialHeader,
                                              withHover: !1,
                                              style: Z,
                                              onClick: z,
                                              children: n.specialHeader.title,
                                          }),
                                      ],
                                  })
                                : null;
                        }),
                        Q = (0, k.L)(() =>
                            U
                                ? null
                                : o.checkExperiment(G.z.WebNextFooterDisclaimer, 'on')
                                  ? (0, u.jsx)(eq.w, { className: eJ().footer })
                                  : (0, u.jsx)(e$.A, { children: (0, u.jsx)(eq.w, { className: eJ().footer }) }),
                        ),
                        ee = (0, j.c)(() => {
                            if (!n.landing.isLoaded) return;
                            let e = r.isAuthorized ? y.p.MAIN : y.p.MAIN_NOLOGIN;
                            return n.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        }),
                        et = (0, j.c)(() => {
                            if (n.landing.isLoaded) return n.landing.getSkeleton({ id: y.p.WEB_MAIN, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    if (((0, eE.y)(et), n.landing.isNeededToLoad && !U)) {
                        let e = r.isAuthorized ? y.p.MAIN : y.p.MAIN_NOLOGIN,
                            t = [n.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 }), n.getSpecialHeader()];
                        (0, p.use)(Promise.allSettled(t));
                    }
                    a && !V && (0, g.notFound)();
                    let ei = (0, k.L)(() => {
                        if (U) {
                            var e;
                            return (0, u.jsx)(A.a, {
                                pageId: x.AppScreen.WaveLandingScreen,
                                pageIdForFrom: eF.b.WAVE_LANDING_SCREEN,
                                mainObjectId: null != (e = null == c ? void 0 : c.id) ? e : '',
                                mainObjectType: c ? x.DomainObjectType.Track : x.DomainObjectType.NonApplicable,
                                children: (0, u.jsxs)('div', {
                                    className: eJ().vibeWidgetContainer,
                                    'data-test-id': f.Xk.main.MAIN_PAGE,
                                    children: [
                                        (0, u.jsxs)('div', {
                                            className: (0, _.$)(eJ().actionsBar, { [eJ().actionsBar_desktop]: h.NN, [eJ().actionsBar_hidden]: s.bigCardPanel.isOpened }),
                                            'aria-hidden': s.bigCardPanel.isOpened,
                                            children: [
                                                m && (0, u.jsx)(eO.F, { withMeta: !1, variant: 'mobile', className: eJ().userProfile }),
                                                n.withEntryPointButton && (0, u.jsx)(ti, {}),
                                            ],
                                        }),
                                        (0, u.jsx)(rn, {}),
                                        (0, u.jsx)('div', { className: $, children: q }),
                                    ],
                                }),
                            });
                        }
                        return (0, u.jsx)(A.a, {
                            pageId: x.AppScreen.MainScreen,
                            pageIdForFrom: eF.b.HOME,
                            children: (0, u.jsx)(ew.h, {
                                scrollElement: O,
                                headerElement: L,
                                children: (0, u.jsxs)(S.N, {
                                    className: eJ().root,
                                    containerClassName: eJ().content,
                                    ref: R,
                                    'data-test-id': f.Xk.main.MAIN_PAGE,
                                    children: [
                                        J,
                                        (0, u.jsx)('div', { className: $, children: q }),
                                        !H &&
                                            (0, u.jsx)(C.F, {
                                                blockIdForFrom: eD.h.RUP_MAIN_RADIO,
                                                blockId: eV.U.RUP,
                                                blockType: eV.U.RUP,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 0,
                                                children: (0, u.jsx)(eP, { className: eJ().vibe }),
                                            }),
                                        (0, u.jsx)(w.E, {
                                            landing: n.landing,
                                            headerConcealerComponent: (0, u.jsx)('div', { ref: W }),
                                            errorComponent: (0, u.jsx)(B.SomethingWentWrong, { className: eJ().error, withBackwardControl: !1 }),
                                            containerClassName: eJ().landing,
                                            containerStyle: X,
                                            tabWithHeadingTitle: !0,
                                            tabWithCovers: !0,
                                            tabWithSubtitle: !0,
                                        }),
                                        Q,
                                    ],
                                }),
                            }),
                        });
                    });
                    return (0, u.jsxs)(eR.r, { page: eL.l.HOME_SCREEN, places: [eW.R.MY_WAVE], children: [ei, (0, u.jsx)(eS.p, { onFinishSuccess: ee })] });
                });
        },
        5818: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        6215: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => n });
            var a = i(42078);
            let n = (e) => ''.concat(a._.ARTIST_ITEM).concat(e);
        },
        7147: (e) => {
            e.exports = {
                artists: 'VibePlayerbarMeta_artists__2laQI',
                artists_hidden: 'VibePlayerbarMeta_artists_hidden__cvI_7',
                generativeTitle: 'VibePlayerbarMeta_generativeTitle__ksCD6',
                slider: 'VibePlayerbarMeta_slider__pyonb',
                artists_visibleOnCompact: 'VibePlayerbarMeta_artists_visibleOnCompact__KXJ2j',
                generativeIcon: 'VibePlayerbarMeta_generativeIcon__Taac7',
            };
        },
        8413: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var a = i(61691);
            let n = (e) => e === a._.PODCAST || e === a._.AUDIOBOOK || e === a._.FAIRY_TALE;
        },
        12799: (e) => {
            e.exports = {
                root: 'WordsCardPopoverDesktop_root__vm3hv',
                item: 'WordsCardPopoverDesktop_item__eZPj9',
                actionItem: 'WordsCardPopoverDesktop_actionItem__l25qD',
                actionItem_active: 'WordsCardPopoverDesktop_actionItem_active__BORi3',
                divider: 'WordsCardPopoverDesktop_divider__Vy2GN',
                sourceItem: 'WordsCardPopoverDesktop_sourceItem__fUPoo',
                sourceItem_withoutIcon: 'WordsCardPopoverDesktop_sourceItem_withoutIcon__earG1',
                sourceIcon: 'WordsCardPopoverDesktop_sourceIcon__QSr8h',
            };
        },
        15461: (e) => {
            e.exports = {
                root: 'VibeResetButton_root__ju8pE',
                root_visible: 'VibeResetButton_root_visible__OHA1w',
                'fade-in': 'VibeResetButton_fade-in__4Dgxq',
                root_q2v: 'VibeResetButton_root_q2v__K9GdD',
                root_withEntryPointButton: 'VibeResetButton_root_withEntryPointButton__kqOH1',
                container: 'VibeResetButton_container__JO2j1',
                icon: 'VibeResetButton_icon__2FkgG',
                button: 'VibeResetButton_button__i8Cvy',
                button_q2v: 'VibeResetButton_button_q2v__NX6iG',
                context: 'VibeResetButton_context__hsTlv',
                context_q2v: 'VibeResetButton_context_q2v__OVhK6',
            };
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        17114: (e) => {
            e.exports = { root: 'WordsBigCardPanelTextShimmer_root__2ZH7z', item: 'WordsBigCardPanelTextShimmer_item__rrFNo' };
        },
        18243: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            var a = i(42078);
            let n = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(a._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        20129: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => U });
            var a = i(88800),
                n = i(65724),
                r = i(84961),
                s = i(53548),
                o = i(2058),
                l = i(88969),
                d = i(17392),
                c = i(50408),
                u = i(96817),
                _ = i(11372),
                m = i(98225),
                p = i(29504),
                b = i(32353),
                v = i(29595),
                h = i(74965),
                g = i(51318),
                x = i(17071),
                A = i(38860),
                C = i(72288),
                f = i(27506),
                y = i(74773),
                j = i(66943),
                T = i(94058),
                k = i(37770),
                N = i(87366),
                P = i(76099),
                S = i(79418),
                I = i(62414),
                E = i(29832),
                w = i(52300),
                B = i(7555),
                M = i(81877),
                O = i(60978),
                R = i(5818),
                L = i.n(R);
            let W = (0, r.PA)((e) => {
                let { className: t, artist: i } = e,
                    r = (0, I.D)(),
                    {
                        wizard: { toggleArtistLike: o, isArtistLiked: l },
                    } = (0, C.g)(),
                    { id: c, name: _, coverUri: m } = i,
                    b = (0, s.useCallback)(() => {
                        o(c);
                    }, [o, c]),
                    v = l(c),
                    h = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(B.t, {
                                className: L().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, a.jsxs)(u.$, {
                                    radius: 'round',
                                    className: L().coverBlock,
                                    variant: 'default',
                                    onClick: b,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': v,
                                    'aria-label': _,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, a.jsx)(M.B, { className: L().image, src: m || O.A.src, fit: 'cover', alt: _, withAvatarReplace: !!m, 'aria-hidden': !0 }),
                                        (0, a.jsx)('div', {
                                            className: (0, n.$)(L().like),
                                            children: (0, a.jsx)(w.I, { variant: 'likedVariant', size: 's', className: L().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [v, m, _, b],
                    );
                return (0, a.jsx)(E.MN, {
                    ref: r,
                    className: (0, n.$)(L().root, { [L().root_selected]: v }, t),
                    textPosition: 'center',
                    title: (0, a.jsx)(p.HL, {
                        'aria-hidden': !0,
                        className: L().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: _,
                    }),
                    view: h,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var V = i(63442),
                D = i.n(V);
            let F = { [b.u.Desktop]: { start: 40, end: 40 }, [b.u.Mobile]: { start: 40, end: 40 } },
                U = (0, r.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: i } = (0, o.A)(),
                        {
                            wizard: r,
                            settings: { isMobile: b, isWindowsApplication: I, isLinuxApplication: E },
                            user: w,
                        } = (0, C.g)(),
                        { notify: B } = (0, h.l)(),
                        M = (0, A.z)(),
                        [O, R] = (0, c.d)(),
                        L = (0, s.useRef)(!1),
                        V = (0, m.zb)(0),
                        U = (0, s.useMemo)(
                            () => (e) => {
                                var t;
                                if (!V.onTabChange || e === V.value) return;
                                V.onTabChange(e);
                                let i = null == (t = r.genres[e]) ? void 0 : t.id;
                                (r.setFilter(i), null == O || O.scrollTo({ top: 0 }));
                            },
                            [r, V, O],
                        ),
                        z = (0, s.useMemo)(() => {
                            switch (r.remainingLikesToFinish) {
                                case 0:
                                    return i({ id: 'wizard.button-done' });
                                case 1:
                                    return i({ id: 'wizard.button-one-more' });
                                default:
                                    return 0 === r.selectedArtistsQuantity ? i({ id: 'wizard.button-tune' }) : i({ id: 'wizard.button-little-more' });
                            }
                        }, [r.remainingLikesToFinish, r.selectedArtistsQuantity, i]),
                        H = (0, s.useMemo)(
                            () =>
                                (0, a.jsx)(P.wI, {
                                    className: D().tabCarousel,
                                    ...V,
                                    onTabChange: U,
                                    isShimmerVisible: r.loadingState === y.G.PENDING,
                                    shimmer: (0, a.jsx)(P.zr, { isActive: !0, className: D().tabCarousel, count: b ? 2 : 3 }),
                                    children: r.genres.map((e, t) =>
                                        (0, a.jsx)(
                                            N.o,
                                            {
                                                className: (0, n.$)(D().filter, { [D().filter_selected]: t === V.value }),
                                                titleClassName: D().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [r.genres, V, U, r.loadingState, b],
                        ),
                        K = (0, s.useCallback)(() => {
                            r.loadArtists(60);
                        }, [r]);
                    (0, s.useEffect)(() => {
                        r.filter && K();
                    }, [r.filter, K]);
                    let Y = (0, s.useCallback)(async () => {
                        (await r.loadGenres(), K());
                    }, [r, K]);
                    ((0, s.useEffect)(() => {
                        r.modal.isOpened && Y();
                    }, [r, r.modal.isOpened, Y]),
                        (0, s.useEffect)(() => {
                            r.loadingState === y.G.REJECT &&
                                (r.modal.close(), B((0, a.jsx)(j.h, { error: i({ id: 'error-messages.error-load-wizard' }) }), { containerId: v.u.ERROR }));
                        }, [r, r.loadGenres, r.loadingState, i, B]));
                    let G = (0, s.useMemo)(
                            () =>
                                (0, a.jsx)(p.DZ, {
                                    className: D().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, a.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        X = (0, s.useCallback)(async () => {
                            if (!L.current) {
                                L.current = !0;
                                try {
                                    ((await r.finish()) === f.F.OK && (await w.getSettings(), await (null == t ? void 0 : t())), r.modal.close());
                                } finally {
                                    L.current = !1;
                                }
                            }
                        }, [t, w, r]);
                    return (
                        (0, s.useEffect)(
                            () => (
                                null == M ||
                                    M.addShortcutsListener(x.M.MAIN, g.l.CLOSE, () => {
                                        r.modal.isOpened && X();
                                    }),
                                () => {
                                    null == M || M.removeShortcutsListener(x.M.MAIN, g.l.CLOSE);
                                }
                            ),
                            [X, r.modal.isOpened, M],
                        ),
                        (0, a.jsxs)(_.a, {
                            className: (0, n.$)(D().root, { [D().root_withCustomControls]: I || E }),
                            headerClassName: D().modalHeader,
                            contentClassName: D().modalContent,
                            open: r.modal.isOpened,
                            onOpenChange: r.modal.onOpenChange,
                            onClose: X,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: i({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: b && G,
                            escapeKey: !1,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: D().wrapper,
                                    children: [
                                        !b && G,
                                        (0, a.jsx)(p.HL, {
                                            className: D().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, a.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, a.jsx)(u.$, {
                                            className: D().button,
                                            size: b ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: X,
                                            disabled: !r.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, a.jsx)(p.HL, { variant: 'div', size: 'm', weight: 'medium', children: z }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: D().mainContainer,
                                    children: [
                                        (0, a.jsx)(T.F, { className: D().carousel, carouselElement: H, scrollPadding: F }),
                                        (0, a.jsx)(S.$, {
                                            withFooter: !1,
                                            className: (0, n.$)(D().scrollContainer, D().important),
                                            itemContentCallback: (e) => {
                                                let t = r.artistsByGenre[e];
                                                if (!t) {
                                                    let e = i({ id: 'loading-messages.entity-is-loading' }, { entityName: i({ id: 'entity-names.artist' }) });
                                                    return (0, a.jsx)(k.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, a.jsx)(W, { artist: t }, t.id);
                                            },
                                            data: r.artistsByGenre,
                                            endReached: K,
                                            listClassName: D().content,
                                            itemClassName: D().item,
                                            pageSize: 60,
                                            handleRef: R,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        22136: (e) => {
            e.exports = { root: 'WordsBigCardPanelLumen_root__xuEFd', image: 'WordsBigCardPanelLumen_image__j1sDJ' };
        },
        22696: (e) => {
            e.exports = { timecode: 'VibePlayerbarTimecodeWithTooltip_timecode__GbXTA', timecode_visible: 'VibePlayerbarTimecodeWithTooltip_timecode_visible__5dcu_' };
        },
        24190: (e) => {
            e.exports = { root: 'LoadingPhrase_root__0ML0A', 'gradient-sweep': 'LoadingPhrase_gradient-sweep__SncsP', text: 'LoadingPhrase_text__Ne1FD' };
        },
        24337: (e) => {
            e.exports = {
                root: 'VibeSettings_root__ufZlV',
                popover: 'VibeSettings_popover__VKqUc',
                overlay: 'VibeSettings_overlay__pusb4',
                toggleSettingsButton: 'VibeSettings_toggleSettingsButton__j6fIU',
                header: 'VibeSettings_header__OAWe2',
                actions: 'VibeSettings_actions__ckbMt',
                swipeableArea: 'VibeSettings_swipeableArea__Xx0nx',
                ripple: 'VibeSettings_ripple__kmFX6',
            };
        },
        25871: (e) => {
            e.exports = { root: 'WordsCardPopoverDisclaimer_root__yyXMs', description: 'WordsCardPopoverDisclaimer_description__0RhrR' };
        },
        33355: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => s });
            var a = i(29993),
                n = i(72288),
                r = i(97956);
            let s = () => {
                let { experiments: e, user: t, wizard: i, sonataState: s } = (0, n.g)(),
                    o = i.isAvailable && e.checkExperiment(r.z.WebNextNewWaveWizard, 'on'),
                    l = o && t.hasPlus && t.settings.showWizard && !s.entityMeta,
                    d = (0, a.c)(() => !!l && (i.introModal.open(), !0)),
                    c = (0, a.c)(() => {
                        o && i.introModal.open();
                    });
                return { isEnabled: o, shouldOpenIntroFromPlay: l, openIntroModalFromPlay: d, openWizard: c };
            };
        },
        34375: (e) => {
            e.exports = {
                root: 'VibePage_root__dGvPX',
                root_reshuffle: 'VibePage_root_reshuffle__gz97v',
                root_withoutPlus: 'VibePage_root_withoutPlus__xZ8r4',
                artistCover: 'VibePage_artistCover__RQee1',
                textContainer_withCover: 'VibePage_textContainer_withCover__U2z1l',
                freemiumBlock: 'VibePage_freemiumBlock__uhLoT',
                bigCardPanel: 'VibePage_bigCardPanel__RwmQ5',
                meta: 'VibePage_meta__kWwRE',
                context: 'VibePage_context__CoYut',
                meta_noPlus: 'VibePage_meta_noPlus__YtQX1',
                bigCardPanelBackground: 'VibePage_bigCardPanelBackground__fr_gE',
                bigCardPanelBackground_visible: 'VibePage_bigCardPanelBackground_visible__QbEy5',
                entityMeta: 'VibePage_entityMeta__dhDch',
                entityMetaBody: 'VibePage_entityMetaBody__EITDL',
                'meta-fade-in': 'VibePage_meta-fade-in__H0xeT',
                entityMetaBody_mobile: 'VibePage_entityMetaBody_mobile__xT3M1',
                entityMetaBody_hidden: 'VibePage_entityMetaBody_hidden__4_ZfY',
                vibeAnimation: 'VibePage_vibeAnimation__qQ6ci',
                bigCardPanel_opened: 'VibePage_bigCardPanel_opened__zs_Tl',
                textContainer: 'VibePage_textContainer__odK0M',
                context_mobile: 'VibePage_context_mobile__w0tfB',
                context_hidden: 'VibePage_context_hidden__8NtHL',
                text: 'VibePage_text__sPFhf',
                important: 'VibePage_important__qFvbL',
                button: 'VibePage_button__ZWQxy',
                player_hidden: 'VibePage_player_hidden__pPWGJ',
                player: 'VibePage_player__i4MeM',
                playerBlock: 'VibePage_playerBlock__b6ZRu',
                playerBlock_withFreemium: 'VibePage_playerBlock_withFreemium__8Avmc',
                playerBlock_shifted: 'VibePage_playerBlock_shifted__afwnY',
                albumCover: 'VibePage_albumCover__dHtVi',
                albumCover_hidden: 'VibePage_albumCover_hidden__qcSqu',
                words: 'VibePage_words__39Mii',
                words_mobile: 'VibePage_words_mobile__fxtu0',
                words_hidden: 'VibePage_words_hidden__4_uEt',
                wheel: 'VibePage_wheel__E_p8_',
                wheel_hidden: 'VibePage_wheel_hidden__Yd8xW',
                textContainer_playing: 'VibePage_textContainer_playing__xJphv',
            };
        },
        35948: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => a, y: () => n });
            let a = '(prefers-reduced-motion: reduce)',
                n = () => window.matchMedia(a).matches;
        },
        37880: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelContent_root__X1SOG',
                lumen: 'WordsBigCardPanelContent_lumen__BjuEA',
                lumen_mobile: 'WordsBigCardPanelContent_lumen_mobile__AUxXt',
                contentStack: 'WordsBigCardPanelContent_contentStack__ntqdP',
                contentStack_mobile: 'WordsBigCardPanelContent_contentStack_mobile__UYLbo',
                contentLayer: 'WordsBigCardPanelContent_contentLayer__cdB9J',
                contentLayer_visible: 'WordsBigCardPanelContent_contentLayer_visible__yppQy',
                content: 'WordsBigCardPanelContent_content__GIIoE',
                textContainer: 'WordsBigCardPanelContent_textContainer__R5onX',
                textContainer_hidden: 'WordsBigCardPanelContent_textContainer_hidden__Bz79u',
                contentMotion: 'WordsBigCardPanelContent_contentMotion__ltpFF',
                action: 'WordsBigCardPanelContent_action__qwVs5',
                feedbackButtons: 'WordsBigCardPanelContent_feedbackButtons__kzT5Y',
                feedback: 'WordsBigCardPanelContent_feedback__bAIGa',
                feedbackMessage: 'WordsBigCardPanelContent_feedbackMessage__s2APT',
                controlsMotion: 'WordsBigCardPanelContent_controlsMotion__t1B1D',
                closeIcon: 'WordsBigCardPanelContent_closeIcon__u7C2z',
                closeIcon_mobile: 'WordsBigCardPanelContent_closeIcon_mobile__DcdRR',
                closeButton: 'WordsBigCardPanelContent_closeButton__qgbyc',
                closeButton_mobile: 'WordsBigCardPanelContent_closeButton_mobile__kI2FS',
                sources: 'WordsBigCardPanelContent_sources__rrt5c',
                sources_hidden: 'WordsBigCardPanelContent_sources_hidden__cFbrG',
                contentArea: 'WordsBigCardPanelContent_contentArea__nzOu_',
                contentArea_mobile: 'WordsBigCardPanelContent_contentArea_mobile__hFChP',
                contentArea_feedback: 'WordsBigCardPanelContent_contentArea_feedback__QBVpK',
                cardContent: 'WordsBigCardPanelContent_cardContent__1R3U_',
                shimmer: 'WordsBigCardPanelContent_shimmer__jPakx',
                disclaimer: 'WordsBigCardPanelContent_disclaimer__bWpjy',
                disclaimer_mobile: 'WordsBigCardPanelContent_disclaimer_mobile__zIUTh',
            };
        },
        38035: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => f });
            var a = i(88800),
                n = i(65724),
                r = i(84961),
                s = i(79390),
                o = i(29993),
                l = i(79070),
                d = i(25555),
                c = i(87762),
                u = i(72288),
                _ = i(98953),
                m = i(18130),
                p = i(93091),
                b = i(27817),
                v = i(74064),
                h = i(44988),
                g = i(88943),
                x = i(8413),
                A = i(96295),
                C = i(25883);
            let f = (0, r.PA)((e) => {
                let { album: t, className: i, iconClassName: r, likeActiveClassName: f, shareMenuClassName: y, artistName: j, artistId: T } = e,
                    {
                        user: k,
                        library: N,
                        pinsCollection: P,
                        paywall: S,
                        settings: { isMobile: I },
                        albumCPA: { isPlusCPAEnabled: E },
                    } = (0, u.g)(),
                    { pageAlbumId: w } = (0, c.T)(),
                    B = (0, x.a)(t.type),
                    { shareLink: M, pathname: O } = (0, m.b)('/album/:albumId', { params: { albumId: t.id } }),
                    R = E({ pageAlbumId: w, albumId: t.id, isNonMusic: B }),
                    L = N.isAlbumLiked(t.id),
                    W = (0, d.I)({
                        action: async () => (await N.toggleAlbumLike({ entityId: t.id, userId: k.account.data.uid })) === s.f.OK,
                        notification: (0, a.jsx)(A.T, { album: { ...t, url: O, isLiked: !L } }),
                    }),
                    V = (0, o.c)(() => (R ? void S.openModal() : W())),
                    D = (0, g.i)(t.id),
                    F = P.isPinned(D),
                    U = (0, d.I)({
                        action: async () => !!(await P.toggleAlbumPin({ id: t.id }, D)),
                        notification: (0, a.jsx)(C.l, { album: { ...t, url: O, isPinned: !F } }),
                    }),
                    z = (0, l.L)(() =>
                        B
                            ? (0, a.jsx)(h.U, { className: (0, n.$)(i, L && f), iconClassName: r, onClick: V, isLiked: L, albumType: t.type })
                            : (0, a.jsx)(p.T, { className: (0, n.$)(i, L && f), iconClassName: r, onClick: V, isLiked: L, disabled: !R && !k.isAuthorized }),
                    );
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        !I && (0, a.jsx)(b.L, { className: i, iconClassName: r, onClick: U, isPinned: F }),
                        z,
                        (0, a.jsx)(v.H, {
                            withNotification: !I,
                            withSubmenu: !I,
                            className: i,
                            iconClassName: r,
                            shareLink: M,
                            menuClassName: y,
                            entityMeta: { variant: _.Y.ALBUM, albumArtistName: j, albumArtistId: T, id: t.id, title: t.title, path: O },
                        }),
                    ],
                });
            });
        },
        42205: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => a });
            let a = (e, t) => {
                let i = Number(t);
                return !Number.isNaN(i) && i > 0 && i < e.length ? i : 0;
            };
        },
        48404: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { a: () => a }),
                (function (e) {
                    ((e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral'));
                })(a || (a = {})));
        },
        50681: (e) => {
            e.exports = {
                scrollingTrackName: 'VibePlayerbarTrackName_scrollingTrackName__CU2P_',
                trackNameText_multiline: 'VibePlayerbarTrackName_trackNameText_multiline__6zrzu',
                trackNameText: 'VibePlayerbarTrackName_trackNameText__lWQBn',
            };
        },
        51147: (e) => {
            e.exports = { divider: 'VibeContextMenu_divider__45urL', item_active: 'VibeContextMenu_item_active__DnFoW' };
        },
        51363: (e) => {
            e.exports = {
                root: 'VibeContext_root__dbiNv',
                context: 'VibeContext_context__Z_82k',
                pinButton: 'VibeContext_pinButton__b6SNF',
                resetButton: 'VibeContext_resetButton__9KK4S',
            };
        },
        51724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => {
                var t, i, a, n, r, s;
                let o = null == (t = e.available) || t,
                    l = null != (i = e.disclaimers) ? i : [];
                return (
                    e.contentRestrictions &&
                        ((o = null == (r = null == (a = e.contentRestrictions) ? void 0 : a.available) || r),
                        (l = null != (s = null == (n = e.contentRestrictions) ? void 0 : n.disclaimers) ? s : [])),
                    { available: o, disclaimers: l }
                );
            };
        },
        53301: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => n });
            var a = i(42205);
            let n = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let i = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    n = (0, a.z)(i, t);
                return { clipIds: i, activeClipIndex: n };
            };
        },
        53845: (e) => {
            e.exports = {
                root: 'VibeContextButton_root__v5s9n',
                staticContext: 'VibeContextButton_staticContext__0CMKs',
                triggerContainer: 'VibeContextButton_triggerContainer__WpSRT',
                triggerContainer_hidden: 'VibeContextButton_triggerContainer_hidden___Ul2b',
                trigger: 'VibeContextButton_trigger___2s5g',
                label: 'VibeContextButton_label__4XZl3',
                arrow: 'VibeContextButton_arrow__p7g4L',
                arrow_open: 'VibeContextButton_arrow_open__hatJQ',
                resetButton: 'VibeContextButton_resetButton___AVuW',
                menu: 'VibeContextButton_menu__LBKK7',
                shareMenu: 'VibeContextButton_shareMenu__cSmec',
                menuItem: 'VibeContextButton_menuItem__ZdYMs',
                menuItem_active: 'VibeContextButton_menuItem_active__eVy8T',
                menu_touch: 'VibeContextButton_menu_touch__Z_sBE',
                menuItemIcon: 'VibeContextButton_menuItemIcon__6KW3o',
            };
        },
        53961: (e) => {
            e.exports = {
                root: 'PlayButton_root__nYKdN',
                root_isLoading: 'PlayButton_root_isLoading__925Sa',
                'applying-setting': 'PlayButton_applying-setting__3nbT9',
                icon: 'PlayButton_icon__t_THQ',
            };
        },
        54152: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            let a = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ', ';
                return e
                    .map((e) =>
                        e.decomposed
                            ? e.name +
                              e.decomposed
                                  .map((e) => {
                                      var t;
                                      return ''.concat(null != (t = e.separator) ? t : '').concat(e.name);
                                  })
                                  .join('')
                            : e.name,
                    )
                    .join(t);
            };
        },
        55842: (e) => {
            e.exports = { timecode: 'VibePlayerbarTimecodeWithOverlay_timecode__0bGkz', timecode_visible: 'VibePlayerbarTimecodeWithOverlay_timecode_visible__oVrkw' };
        },
        56194: (e) => {
            e.exports = {
                root: 'WordsBigCardPanel_root__sOTFq',
                root_mobile: 'WordsBigCardPanel_root_mobile__G4xsF',
                enter: 'WordsBigCardPanel_enter__etXny',
                enter_active: 'WordsBigCardPanel_enter_active__03VXN',
                exit: 'WordsBigCardPanel_exit__UGMAh',
                exit_active: 'WordsBigCardPanel_exit_active__3eAPR',
            };
        },
        58495: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a });
            let a = (e, t) => ''.concat(e, ':').concat(t);
        },
        59064: (e) => {
            e.exports = {
                root: 'WizardIntroModal_root__P1uIH',
                root_mobile: 'WizardIntroModal_root_mobile__Ax8HO',
                header: 'WizardIntroModal_header__qtpcO',
                content: 'WizardIntroModal_content__0A1Ox',
                image: 'WizardIntroModal_image__SOJa7',
                text: 'WizardIntroModal_text___yvOo',
                title: 'WizardIntroModal_title__NWQaj',
                description: 'WizardIntroModal_description__rDfHs',
                button: 'WizardIntroModal_button__b9jJT',
            };
        },
        60492: (e) => {
            e.exports = {
                root: 'VibePlayerBar_root__G3MOe',
                progress: 'VibePlayerBar_progress__Cri6E',
                progress_visible: 'VibePlayerBar_progress_visible__EfP1V',
                button: 'VibePlayerBar_button__GLhJ_',
                important: 'VibePlayerBar_important__XGV7k',
                ripple: 'VibePlayerBar_ripple__8YHn7',
                likeButton_mobilePaused: 'VibePlayerBar_likeButton_mobilePaused__ufI2D',
                button_play: 'VibePlayerBar_button_play__vx8Ni',
                button_standalone: 'VibePlayerBar_button_standalone__xaTBg',
                standalonePlayButtonIcon: 'VibePlayerBar_standalonePlayButtonIcon__kvJ9z',
                playButtonIcon: 'VibePlayerBar_playButtonIcon__ShYm1',
                playButton: 'VibePlayerBar_playButton__rzsIr',
                changeVolume: 'VibePlayerBar_changeVolume__x7FHC',
                verticalSlider: 'VibePlayerBar_verticalSlider__JPDlB',
            };
        },
        61180: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r, q: () => n });
            let a = new Set(),
                n = (e) => (
                    a.add(e),
                    () => {
                        a.delete(e);
                    }
                ),
                r = () => {
                    a.forEach((e) => {
                        e();
                    });
                };
        },
        63442: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        66522: (e) => {
            e.exports = {
                content: 'MainPage_content__kskSM',
                root: 'MainPage_root__STXqc',
                container: 'MainPage_container__CB86l',
                vibe: 'MainPage_vibe__XEBbh',
                landing: 'MainPage_landing___FGNm',
                actionsBar: 'MainPage_actionsBar__agoxp',
                actionsBar_desktop: 'MainPage_actionsBar_desktop__zctj6',
                actionsBar_hidden: 'MainPage_actionsBar_hidden__6ik4S',
                userProfile: 'MainPage_userProfile__8JzS3',
                vibeWidgetContainer: 'MainPage_vibeWidgetContainer__i5T4X',
                beta: 'MainPage_beta__y32vb',
                beta_withReleaseNotes: 'MainPage_beta_withReleaseNotes__WOjUk',
                betaSlot: 'MainPage_betaSlot__JwbmM',
                betaSlot_newVibe: 'MainPage_betaSlot_newVibe__DGtXm',
                specialHeaderContainer: 'MainPage_specialHeaderContainer__L3C6E',
                specialHeader: 'MainPage_specialHeader__aqdvj',
                specialHeaderImage: 'MainPage_specialHeaderImage__4GlXq',
                footer: 'MainPage_footer__2rGy2',
                error: 'MainPage_error__u_UCm',
            };
        },
        67758: (e) => {
            e.exports = {
                root: 'WordsCardFullscreen_root__CiG4W',
                modalContent: 'WordsCardFullscreen_modalContent__1SYUO',
                closeButtonWrapper: 'WordsCardFullscreen_closeButtonWrapper__iH_IT',
                layout: 'WordsCardFullscreen_layout__KJMiD',
                contentArea: 'WordsCardFullscreen_contentArea__CKea4',
                contentArea_withMessageScroll: 'WordsCardFullscreen_contentArea_withMessageScroll__td5cI',
                content: 'WordsCardFullscreen_content__JA2fN',
                messageScroll: 'WordsCardFullscreen_messageScroll__uUYjh',
                message: 'WordsCardFullscreen_message__UmEx9',
                messageScroll_scrollable: 'WordsCardFullscreen_messageScroll_scrollable__CfU_t',
                primaryAction: 'WordsCardFullscreen_primaryAction__HxPI9',
                actions: 'WordsCardFullscreen_actions__cT5Cp',
                sourceItem: 'WordsCardFullscreen_sourceItem__WL48h',
                sourceItem_withoutIcon: 'WordsCardFullscreen_sourceItem_withoutIcon__os6rv',
                sourceIcon: 'WordsCardFullscreen_sourceIcon__IDX9f',
                actionText: 'WordsCardFullscreen_actionText__09dJk',
                feedback: 'WordsCardFullscreen_feedback__E7bsR',
                feedbackButton: 'WordsCardFullscreen_feedbackButton__HwM10',
                feedbackButton_active: 'WordsCardFullscreen_feedbackButton_active__fE5dO',
                feedbackDivider: 'WordsCardFullscreen_feedbackDivider__xBnSf',
                disclaimer: 'WordsCardFullscreen_disclaimer__NTfeR',
            };
        },
        67858: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => r });
            var a = i(53548);
            i(30282);
            var n = i(61180);
            let r = (e) => {
                (0, a.useEffect)(() => (0, n.q)(e), [e]);
            };
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        69515: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelText_root__TU85D',
                root_withTopFade: 'WordsBigCardPanelText_root_withTopFade__2ngjw',
                root_withBottomFade: 'WordsBigCardPanelText_root_withBottomFade__OFuZ7',
            };
        },
        69850: (e) => {
            e.exports = {
                root: 'AiBadge_root__EfKG1',
                root_dimmed: 'AiBadge_root_dimmed__XLGvP',
                glow: 'AiBadge_glow__R6cQa',
                icon: 'AiBadge_icon__dhZpE',
                icon_okniks: 'AiBadge_icon_okniks__HM5CC',
                icon_sparkles: 'AiBadge_icon_sparkles__cS_kL',
                sparkles: 'AiBadge_sparkles__Yua7j',
                sparkle: 'AiBadge_sparkle__5EMmQ',
                'sparkle-carousel': 'AiBadge_sparkle-carousel__fMVfW',
            };
        },
        71066: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelSourceButtons_root__RmVWO',
                icon: 'WordsBigCardPanelSourceButtons_icon__kUrTX',
                title: 'WordsBigCardPanelSourceButtons_title__OAZar',
            };
        },
        73171: (e, t, i) => {
            'use strict';
            i.d(t, { mf: () => l });
            var a,
                n = i(53548),
                r = {
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useDynamicText = o.findOptimalFontSize = void 0));
                let e = (function e(t) {
                        var i = s[t];
                        if (void 0 !== i) return i.exports;
                        var a = (s[t] = { exports: {} });
                        return (r[t](a, a.exports, e), a.exports);
                    })(810),
                    t = (e) => {
                        ((e.style.wordBreak = 'keep-all'),
                            (e.style.overflowWrap = 'normal'),
                            (e.style.maxHeight = 'none'),
                            (e.style.height = 'auto'),
                            (e.style.overflow = 'visible'),
                            Array.from(e.children).forEach((e) => {
                                e instanceof HTMLElement && t(e);
                            }));
                    },
                    i = (e, t, i, a, n, r) => {
                        (e.style.setProperty('--dynamic-font-size', ''.concat(a, 'px')), e.style.setProperty('--dynamic-line-height', String(n)));
                        let s = 'number' == typeof r ? e.scrollHeight <= Math.min(r * a * n, i) + 1 : e.scrollHeight <= i + 1,
                            o = e.scrollWidth <= t + 1;
                        return s && o;
                    },
                    a = (e) => {
                        let { container: a, containerWidth: n, containerHeight: r, minFontSize: s, maxFontSize: o, lineHeight: l, maxLines: d, styleVariants: c } = e,
                            u = ((e, i, a) => {
                                let n = e.cloneNode(!0);
                                return (
                                    (n.style.cssText =
                                        '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                            i,
                                            'px !important;\n    ',
                                        )),
                                    t(n),
                                    n.style.setProperty('--dynamic-line-height', String(a)),
                                    document.body.appendChild(n),
                                    n
                                );
                            })(a, n, l);
                        try {
                            if (null == c ? void 0 : c.length) {
                                var _;
                                let e = [...c].sort((e, t) => t.fontSize - e.fontSize),
                                    t = null != (_ = e[e.length - 1]) ? _ : { fontSize: s, lineHeight: l };
                                for (let t of e) if (i(u, n, r, t.fontSize, t.lineHeight, d)) return { ...t, fits: !0 };
                                return { ...t, fits: !1 };
                            }
                            let e = s,
                                t = o,
                                a = null;
                            for (; e <= t;) {
                                let s = Math.floor((e + t) / 2);
                                i(u, n, r, s, l, d) ? ((a = s), (e = s + 1)) : (t = s - 1);
                            }
                            if (null === a) return { fontSize: s, lineHeight: l, fits: !1 };
                            return { fontSize: Math.max(s, a - 1), lineHeight: l, fits: !0 };
                        } finally {
                            u.remove();
                        }
                    };
                ((o.findOptimalFontSize = (e) => a(e).fontSize),
                    (o.useDynamicText = (t, i, n) => {
                        let { minFontSize: r, maxFontSize: s, lineHeight: o, maxLines: l, fallbackMaxLines: d, styleVariants: c } = i;
                        (0, e.useLayoutEffect)(() => {
                            if (null === t) return;
                            t.style.setProperty('--dynamic-line-height', String(o));
                            let e = () => {
                                    let e = t.clientWidth,
                                        i = t.clientHeight,
                                        u = t.childNodes.length > 0;
                                    if (0 === e || 0 === i || !u) return;
                                    let {
                                        maxLines: _,
                                        fontSize: m,
                                        lineHeight: p,
                                    } = ((e) => {
                                        let { fallbackMaxLines: t, maxLines: i } = e,
                                            n = a({ ...e, maxLines: i });
                                        if (void 0 === t || n.fits) return { maxLines: i, fontSize: n.fontSize, lineHeight: n.lineHeight };
                                        let r = a({ ...e, maxLines: t });
                                        return { maxLines: t, fontSize: r.fontSize, lineHeight: r.lineHeight };
                                    })({
                                        container: t,
                                        containerWidth: e,
                                        containerHeight: i,
                                        minFontSize: r,
                                        maxFontSize: s,
                                        lineHeight: o,
                                        maxLines: l,
                                        fallbackMaxLines: d,
                                        styleVariants: c,
                                    });
                                    (null == n || n(_),
                                        t.style.setProperty('--dynamic-font-size', ''.concat(m, 'px')),
                                        t.style.setProperty('--dynamic-line-height', String(p)));
                                },
                                i = new ResizeObserver(e),
                                u = new MutationObserver(e);
                            return (
                                i.observe(t),
                                u.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
                                document.fonts.ready.then(e),
                                e(),
                                () => {
                                    (i.disconnect(), u.disconnect());
                                }
                            );
                        }, [t, n, d, o, s, l, r, c]);
                    }));
            })(),
                o.__esModule,
                o.findOptimalFontSize);
            var l = o.useDynamicText;
        },
        74567: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var a = i(9519),
                n = i(93609),
                r = i(81969);
            class s {
                async openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                async deleteDatabase() {
                    let { dbName: e } = this.config;
                    return window.indexedDB
                        .databases()
                        .then((t) => (t.find((t) => e === t.name) ? new r.h(e).deleteDB({ onBlocked: n.A }) : Promise.resolve()))
                        .catch(n.A);
                }
                async executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((i) => (i ? e(i) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    ((this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        })));
                }
                async openIdb(e) {
                    let { dbName: t, dbVersion: i, onUpgrade: a } = this.config;
                    try {
                        let n = await new r.h(t).openDB(i, {
                            onBlocked: (t, i, a) => {
                                var n;
                                null == e || null == (n = e.onBlocked) || n.call(e, t, i, a);
                            },
                            onTerminated: () => {
                                var t;
                                null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                a(e);
                            },
                        });
                        return ((this.idbIsAvailable = !0), n);
                    } catch (e) {
                        this.idbIsAvailable = !1;
                    }
                }
                async closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch(n.A)
                        : Promise.resolve();
                }
                constructor(e) {
                    ((0, a._)(this, 'config', void 0),
                        (0, a._)(this, 'idb', void 0),
                        (0, a._)(this, 'idbIsAvailable', void 0),
                        (this.config = e),
                        (this.idbIsAvailable = !1));
                }
            }
        },
        75042: (e) => {
            e.exports = {
                root: 'WordsCard_root__6r3u2',
                root_disabled: 'WordsCard_root_disabled__Kgxb_',
                badge: 'WordsCard_badge__Y5HRe',
                badge_centered: 'WordsCard_badge_centered__7GMKP',
                badge_centeredSparkles: 'WordsCard_badge_centeredSparkles__sebgi',
                badge_loading: 'WordsCard_badge_loading__pDoTb',
                pulse: 'WordsCard_pulse__sKXAl',
                content: 'WordsCard_content__AUDsR',
                content_hidden: 'WordsCard_content_hidden__WhUsT',
                text: 'WordsCard_text__ZquMQ',
                appear: 'WordsCard_appear__AISMP',
                lumenAvatar: 'WordsCard_lumenAvatar__ifelA',
                action: 'WordsCard_action__v4Jp1',
                popoverContent: 'WordsCard_popoverContent__NHYuc',
            };
        },
        76533: (e) => {
            e.exports = { root: 'VibeDynamicArtists_root__Wbigy' };
        },
        78429: (e) => {
            e.exports = {
                vibeAnimation: 'VibeBlock_vibeAnimation__XVEE6',
                controls: 'VibeBlock_controls__BpDFL',
                root: 'VibeBlock_root__z7LtR',
                root_freemium: 'VibeBlock_root_freemium__4i2rV',
                playButton: 'VibeBlock_playButton__6xU55',
                settingsButton: 'VibeBlock_settingsButton__GeMtO',
                subscriptionText: 'VibeBlock_subscriptionText__ODUZN',
                button: 'VibeBlock_button__fWXM_',
            };
        },
        78991: (e) => {
            e.exports = {
                root: 'MainPageEntryPointButton_root__3tLWr',
                caption: 'MainPageEntryPointButton_caption__luOma',
                imageContainer: 'MainPageEntryPointButton_imageContainer__uaNh8',
                imageContent: 'MainPageEntryPointButton_imageContent__Ykq8G',
                image: 'MainPageEntryPointButton_image__0xGtQ',
                animation: 'MainPageEntryPointButton_animation__QDzPe',
            };
        },
        79396: (e) => {
            e.exports = {
                root: 'VibePlayerbarTimecodeContent_root__arFLi',
                trackName: 'VibePlayerbarTimecodeContent_trackName__xElzm',
                'fade-in': 'VibePlayerbarTimecodeContent_fade-in__dpWz8',
                center: 'VibePlayerbarTimecodeContent_center__bHoKj',
                center_active: 'VibePlayerbarTimecodeContent_center_active__66xB0',
                center_withTimecode: 'VibePlayerbarTimecodeContent_center_withTimecode__4cl9j',
                center_withExplicitMark: 'VibePlayerbarTimecodeContent_center_withExplicitMark__6igrT',
                center_withoutExplicitMark: 'VibePlayerbarTimecodeContent_center_withoutExplicitMark__fepYG',
                center_spacious: 'VibePlayerbarTimecodeContent_center_spacious__Gax_U',
                center_playing: 'VibePlayerbarTimecodeContent_center_playing__dwPJn',
                explicitMarkContainer: 'VibePlayerbarTimecodeContent_explicitMarkContainer__4WIrr',
                explicitMark: 'VibePlayerbarTimecodeContent_explicitMark__Jcwcx',
            };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var a = i(88800),
                n = i(65724),
                r = i(61013),
                s = i(53548);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: n, ...r } = e,
                        s = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        o = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': s, style: { ...t }, ref: i, ...r });
                },
                l = (0, s.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
            var d = i(16434),
                c = i.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: s, withForceScroll: o, ...l } = e;
                    return (0, a.jsx)('div', {
                        className: (0, n.$)(c().scroller, { [c().scroller_withFooter]: r, [c().scroller_withHeader]: s, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                p = i(75151);
            let b = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: n,
                            debounceDurationInMs: r = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [_, b] = (0, s.useState)(null),
                        v = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == n || n(e), l.length > 0 && b(e), t && i)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < a; e++) i(e);
                                    }
                                }, r),
                            [r, n, t, i, l],
                        );
                    (0, s.useEffect)(() => {
                        l.length > 0 && _ && v(_);
                    }, l);
                    let h = (0, s.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, r);
                    }, [d, r]);
                    return (0, a.jsx)(p.sN, { ref: c, rangeChanged: v, totalCount: o, endReached: h, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: h = 20,
                            totalCount: g,
                            totalRequests: x,
                            debounceDurationInMs: A,
                            initialItemCount: C,
                            minInitialItemCount: f = 20,
                            handleRef: y,
                            alwaysShowScrollbar: j = !1,
                            testId: T,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: N,
                            ...P
                        } = e,
                        [S, I] = (0, s.useState)(!1),
                        E = (0, s.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    I(e);
                                }, 100),
                            [],
                        ),
                        w = (0, s.useMemo)(() => {
                            var e, t;
                            return k
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : l,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : l,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, x, k]),
                        B = C ? Math.min(C, f) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, n.$)(c().root, { [c().root_scrolling]: S || j, [c().root_notScrolling]: !S && !j }, t),
                        'data-test-id': T,
                        children: [
                            k && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, a.jsx)(b, {
                                overscan: v,
                                components: w,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: m,
                                scrollerRef: y,
                                totalCount: g,
                                pageSize: h,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: A,
                                initialItemCount: B,
                                shouldTriggerRangeChangedOn: N,
                                ...P,
                            }),
                            k && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        81933: (e) => {
            e.exports = {
                root: 'WordsCardFullscreenShimmer_root__QYKVQ',
                topGroup: 'WordsCardFullscreenShimmer_topGroup__wA7gB',
                line: 'WordsCardFullscreenShimmer_line__5pJmz',
                topLinePrimary: 'WordsCardFullscreenShimmer_topLinePrimary__EZtz5',
                topLineSecondary: 'WordsCardFullscreenShimmer_topLineSecondary___ov_Y',
                main: 'WordsCardFullscreenShimmer_main__QGRY4',
                mainLine: 'WordsCardFullscreenShimmer_mainLine__alNOP',
                bottom: 'WordsCardFullscreenShimmer_bottom__1YoRA',
                bottomLine: 'WordsCardFullscreenShimmer_bottomLine__jTQt4',
            };
        },
        82194: (e) => {
            e.exports = { root: 'ArtistsMenu_root__j5U2g', menuList: 'ArtistsMenu_menuList__4v6Uo', menuItem: 'ArtistsMenu_menuItem__lievm' };
        },
        83210: (e, t, i) => {
            'use strict';
            function a() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            i.d(t, { B: () => a });
        },
        88943: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => n });
            var a = i(42078);
            let n = (e) => ''.concat(a._.ALBUM_ITEM).concat(e);
        },
        90437: (e) => {
            e.exports = {
                root: 'WordsCardPopoverMobile_root__iHBbJ',
                container: 'WordsCardPopoverMobile_container___Eq_i',
                text: 'WordsCardPopoverMobile_text__j52Bl',
                sources: 'WordsCardPopoverMobile_sources__fKNrx',
                sourceItem: 'WordsCardPopoverMobile_sourceItem__XBH1a',
                sourceItem_withoutIcon: 'WordsCardPopoverMobile_sourceItem_withoutIcon__QM7Ht',
                action: 'WordsCardPopoverMobile_action__c_FPQ',
                sourceIcon: 'WordsCardPopoverMobile_sourceIcon__aWdrm',
                feedbackSection: 'WordsCardPopoverMobile_feedbackSection__25RsC',
                feedbackQuestion: 'WordsCardPopoverMobile_feedbackQuestion__NKSto',
                feedbackButtons: 'WordsCardPopoverMobile_feedbackButtons__Cd9Yf',
                feedbackButton: 'WordsCardPopoverMobile_feedbackButton__tejta',
                feedbackButton_active: 'WordsCardPopoverMobile_feedbackButton_active__XJl7S',
            };
        },
        92633: (e) => {
            e.exports = {
                root: 'AlbumCover_root__hkDPz',
                coverContainer: 'AlbumCover_coverContainer__NOd_o',
                link: 'AlbumCover_link__5qqFN',
                cover: 'AlbumCover_cover__bif8b',
                'fade-in': 'AlbumCover_fade-in__5kJy7',
                cover_generative: 'AlbumCover_cover_generative__5siVB',
                cover_hiddenOnCompactPause: 'AlbumCover_cover_hiddenOnCompactPause__2BQxY',
                button: 'AlbumCover_button__mX59n',
                ripple: 'AlbumCover_ripple__q41JO',
                playButtonContainer: 'AlbumCover_playButtonContainer__rC_Wa',
            };
        },
        93135: (e) => {
            e.exports = {
                root: 'PromoButton_root__kDDyz',
                caption: 'PromoButton_caption__p6nwX',
                imageContainer: 'PromoButton_imageContainer__XIwZc',
                image: 'PromoButton_image__S8uoV',
            };
        },
        94345: (e) => {
            e.exports = {
                root: 'VibePageFreemiumBlock_root__HCPuh',
                button: 'VibePageFreemiumBlock_button__ULD2Z',
                description: 'VibePageFreemiumBlock_description__AaZUt',
            };
        },
        95147: (e) => {
            e.exports = {
                root: 'VibePlayerControls_root__qr97B',
                skipButton: 'VibePlayerControls_skipButton__z57B_',
                playButtonIcon: 'VibePlayerControls_playButtonIcon__OXCWN',
                playButton: 'VibePlayerControls_playButton__vnoer',
                playButton_playing: 'VibePlayerControls_playButton_playing__qPeBv',
            };
        },
        96046: (e) => {
            e.exports = { root: 'SpeedMenuItem_root__7j8VN', icon: 'SpeedMenuItem_icon__EyXPA' };
        },
        98017: (e) => {
            e.exports = { root: 'VibeArtistCover_root__LSPPQ', cover: 'VibeArtistCover_cover__AEtTV' };
        },
        99007: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var a = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => r, UC: () => s, dM: () => o, uV: () => l });
            var a = i(89916),
                n = i(67990);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                s = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof a.m5) || !(0, n.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, n.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        99954: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelFeedbackButtons_root__cwi4d',
                button: 'WordsBigCardPanelFeedbackButtons_button___NrVf',
                button_active: 'WordsBigCardPanelFeedbackButtons_button_active__F5x_N',
                divider: 'WordsBigCardPanelFeedbackButtons_divider__qFjeT',
            };
        },
    },
]);
