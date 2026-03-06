(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4540],
    {
        7032: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => d });
            var a = i(54486),
                n = i(50420),
                s = i(15209),
                r = i(39610),
                l = i(97800),
                o = i(18433),
                c = i.n(o);
            let d = (e) => {
                let { title: t, children: i, restrictionsClassName: o, ...d } = e;
                return (0, a.jsxs)('section', {
                    className: c().root,
                    ...(0, s.getDataAttrFromProps)(d),
                    children: [
                        t &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(l.Caption, { variant: 'span', type: 'text', size: 'm', weight: 'medium', 'aria-hidden': !0, children: t }),
                                    (0, a.jsx)(r.q, { children: (0, a.jsx)(l.Heading, { variant: 'h4', children: t }) }),
                                ],
                            }),
                        (0, a.jsx)('div', { className: (0, n.$)(c().restrictions, o), children: i }),
                    ],
                });
            };
        },
        16020: (e, t, i) => {
            'use strict';
            i.d(t, { s$: () => H, LL: () => m });
            var a = i(83252),
                n = i(93064),
                s = i(26433);
            let r = (e) => {
                    let { type: t, tag: i } = e.id;
                    return { title: e.name, seed: ''.concat(t, ':').concat(i), specialContext: e.specialContext, specialContextImage: e.specialContextImage };
                },
                l = (e, t) => {
                    let i = [];
                    return (
                        t.possibleValues.forEach((e) => {
                            e.unspecified || i.push(((e) => ({ value: e.value, title: e.name, seed: e.serializedSeed, imageUrl: e.imageUrl }))(e));
                        }),
                        { type: e, title: t.name, values: (0, n.wg)(i) }
                    );
                };
            var o = (function (e) {
                return (e.DIVERSITY = 'diversity'), (e.MOOD_ENERGY = 'moodEnergy'), (e.LANGUAGE = 'language'), e;
            })({});
            let c = n.gK.model('ContextItem', {
                    title: n.gK.string,
                    seed: n.gK.string,
                    specialContext: n.gK.boolean,
                    specialContextImage: n.gK.optional(n.gK.string, ''),
                }),
                d = n.gK.model('RestrictonValue', { value: n.gK.string, title: n.gK.string, seed: n.gK.string, imageUrl: n.gK.maybe(n.gK.string) }),
                u = n.gK.model('Restricton', { type: n.gK.enumeration(Object.values(o)), title: n.gK.string, values: n.gK.array(d) }),
                m = n.gK
                    .compose(
                        n.gK.model('VibeSettings', {
                            contextItems: n.gK.array(c),
                            diversity: n.gK.maybeNull(u),
                            moodEnergy: n.gK.maybeNull(u),
                            language: n.gK.maybeNull(u),
                        }),
                        s.XT,
                    )
                    .actions((e) => ({
                        getData: (0, n.L3)(function* (t) {
                            let { rotorResource: i, modelActionsLogger: s } = (0, n._$)(e);
                            if (e.loadingState !== a.GuX.PENDING)
                                try {
                                    var c, d, u, m;
                                    e.loadingState = a.GuX.PENDING;
                                    let s = yield i.waveSettings(t);
                                    (null == s || null == (c = s.settingRestrictions) ? void 0 : c.diversity) &&
                                        (e.diversity = l(o.DIVERSITY, s.settingRestrictions.diversity)),
                                        (null == s || null == (d = s.settingRestrictions) ? void 0 : d.moodEnergy) &&
                                            (e.moodEnergy = l(o.MOOD_ENERGY, s.settingRestrictions.moodEnergy)),
                                        (null == s || null == (u = s.settingRestrictions) ? void 0 : u.language) &&
                                            (e.language = l(o.LANGUAGE, s.settingRestrictions.language));
                                    let _ =
                                        Array.isArray(null == s ? void 0 : s.blocks) &&
                                        (null == s || null == (m = s.blocks) ? void 0 : m.find((e) => (null == e ? void 0 : e.type) === 'contexts'));
                                    _ && Array.isArray(_.items) && (e.contextItems = (0, n.wg)(_.items.map(r))),
                                        e.loadingState !== a.GuX.IDLE && (e.loadingState = a.GuX.RESOLVE);
                                } catch (t) {
                                    s.error(t), e.loadingState !== a.GuX.IDLE && (e.loadingState = a.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = a.GuX.IDLE), (e.contextItems = (0, n.wg)([])), (e.diversity = null), (e.moodEnergy = null), (e.language = null);
                        },
                    }));
            var _ = i(54486),
                p = i(28303),
                b = i(61910),
                v = i.t(b, 2),
                g = i(43426),
                h = i(47713),
                x = i(31500),
                y = i(8817),
                f = {
                    4490: (e, t, i) => {
                        i.r(t), i.d(t, { DOWN: () => l, LEFT: () => n, RIGHT: () => s, UP: () => r, useSwipeable: () => _ });
                        var a = i(810);
                        let n = 'Left',
                            s = 'Right',
                            r = 'Up',
                            l = 'Down',
                            o = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            d = 'mousemove',
                            u = 'mouseup';
                        function m(e, t) {
                            if (0 === t) return e;
                            let i = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(i) + e[1] * Math.sin(i), e[1] * Math.cos(i) - e[0] * Math.sin(i)];
                        }
                        function _(e) {
                            var t, i, _;
                            let p,
                                { trackMouse: b } = e,
                                v = a.useRef(Object.assign({}, c)),
                                g = a.useRef(Object.assign({}, o)),
                                h = a.useRef(Object.assign({}, g.current));
                            for (p in ((h.current = Object.assign({}, g.current)), (g.current = Object.assign(Object.assign({}, o), e)), o))
                                void 0 === g.current[p] && (g.current[p] = o[p]);
                            let [x, y] = a.useMemo(
                                () =>
                                    (function (e, t) {
                                        let i = (t) => {
                                                let i = 'touches' in t;
                                                (i && t.touches.length > 1) ||
                                                    e((e, n) => {
                                                        n.trackMouse && !i && (document.addEventListener(d, a), document.addEventListener(u, p));
                                                        let { clientX: s, clientY: r } = i ? t.touches[0] : t,
                                                            l = m([s, r], n.rotationAngle);
                                                        return (
                                                            n.onTouchStartOrOnMouseDown && n.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: l.slice(), xy: l, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            a = (t) => {
                                                e((e, i) => {
                                                    var a, c, d, u;
                                                    let _ = 'touches' in t;
                                                    if (_ && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > i.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: p, clientY: b } = _ ? t.touches[0] : t,
                                                        [v, g] = m([p, b], i.rotationAngle),
                                                        h = v - e.xy[0],
                                                        x = g - e.xy[1],
                                                        y = Math.abs(h),
                                                        f = Math.abs(x),
                                                        N = (t.timeStamp || 0) - e.start,
                                                        C = Math.sqrt(y * y + f * f) / (N || 1),
                                                        j = [h / (N || 1), x / (N || 1)],
                                                        S = ((a = y), (c = f), (d = h), (u = x), a > c ? (d > 0 ? s : n) : u > 0 ? l : r),
                                                        A = 'number' == typeof i.delta ? i.delta : i.delta[S.toLowerCase()] || o.delta;
                                                    if (y < A && f < A && !e.swiping) return e;
                                                    let E = {
                                                        absX: y,
                                                        absY: f,
                                                        deltaX: h,
                                                        deltaY: x,
                                                        dir: S,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: C,
                                                        vxvy: j,
                                                    };
                                                    E.first && i.onSwipeStart && i.onSwipeStart(E), i.onSwiping && i.onSwiping(E);
                                                    let M = !1;
                                                    return (
                                                        (i.onSwiping || i.onSwiped || i['onSwiped'.concat(S)]) && (M = !0),
                                                        M && i.preventScrollOnSwipe && i.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: E, swiping: !0 })
                                                    );
                                                });
                                            },
                                            _ = (t) => {
                                                e((e, i) => {
                                                    let a;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < i.swipeDuration) {
                                                            (a = Object.assign(Object.assign({}, e.eventData), { event: t })), i.onSwiped && i.onSwiped(a);
                                                            let n = i['onSwiped'.concat(a.dir)];
                                                            n && n(a);
                                                        }
                                                    } else i.onTap && i.onTap({ event: t });
                                                    return (
                                                        i.onTouchEndOrOnMouseUp && i.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: a })
                                                    );
                                                });
                                            },
                                            p = (e) => {
                                                document.removeEventListener(d, a), document.removeEventListener(u, p), _(e);
                                            },
                                            b = (e, t) => {
                                                let n = () => {};
                                                if (e && e.addEventListener) {
                                                    let s = Object.assign(Object.assign({}, o.touchEventOptions), t.touchEventOptions),
                                                        r = [
                                                            ['touchstart', i, s],
                                                            ['touchmove', a, Object.assign(Object.assign({}, s), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', _, s],
                                                        ];
                                                    r.forEach((t) => {
                                                        let [i, a, n] = t;
                                                        return e.addEventListener(i, a, n);
                                                    }),
                                                        (n = () =>
                                                            r.forEach((t) => {
                                                                let [i, a] = t;
                                                                return e.removeEventListener(i, a);
                                                            }));
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
                                        return t.trackMouse && (v.onMouseDown = i), [v, b];
                                    })((e) => (v.current = e(v.current, g.current)), { trackMouse: b }),
                                [b],
                            );
                            return (
                                (t = v.current),
                                (i = g.current),
                                (_ = h.current),
                                (v.current =
                                    i.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? i.preventScrollOnSwipe !== _.preventScrollOnSwipe || i.touchEventOptions.passive !== _.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: y(t.el, i) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: y(t.el, i) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                x
                            );
                        }
                    },
                    8691: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0);
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
                    1381: (e, t, i) => {
                        var a;
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
                        let n = i(4490),
                            s = i(8691);
                        !(function (e) {
                            (e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left');
                        })(a || (t.SwipeablePlacement = a = {}));
                        let r = (e) => {
                                let { ref: t, deltaY: i, deltaX: n, placement: s } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            s === a.TOP || s === a.BOTTOM ? 'translateY('.concat(i || 0, 'px)') : 'translateX('.concat(n || 0, 'px)')));
                                });
                            },
                            l = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: i = {}, onClose: o, disableSwipe: c, placement: d, threshold: u } = e,
                                m = (0, s.useCallbackRef)(() => {
                                    o && (l(t), o());
                                }),
                                _ = (0, s.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: i, deltaX: n, placement: s } = e;
                                            switch (s) {
                                                case a.TOP:
                                                    i <= 0 && r({ ref: t, deltaY: i, deltaX: n, placement: s });
                                                    break;
                                                case a.RIGHT:
                                                    n >= 0 && r({ ref: t, deltaY: i, deltaX: n, placement: s });
                                                    break;
                                                case a.LEFT:
                                                    n <= 0 && r({ ref: t, deltaY: i, deltaX: n, placement: s });
                                                    break;
                                                default:
                                                    i >= 0 && r({ ref: t, deltaY: i, deltaX: n, placement: s });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d });
                                }),
                                p = (0, s.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: i, deltaX: n, placement: s, threshold: r = 25 } = e;
                                            if (!t.current) return !1;
                                            let l = (r / 100) * (s === a.TOP || s === a.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (s) {
                                                case a.TOP:
                                                    return i < 0 && Math.abs(i) >= l;
                                                case a.RIGHT:
                                                    return n > 0 && n >= l;
                                                case a.LEFT:
                                                    return n < 0 && Math.abs(n) >= l;
                                                default:
                                                    return i > 0 && i >= l;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d, threshold: u })
                                            ? o && (l(t), o())
                                            : l(t));
                                });
                            return { handlers: (0, n.useSwipeable)({ onSwiped: p, onSwiping: _, trackMouse: !0, trackTouch: !0, ...i }), onCloseCallback: m };
                        };
                    },
                    810: (e) => {
                        e.exports = v;
                    },
                },
                N = {};
            function C(e) {
                var t = N[e];
                if (void 0 !== t) return t.exports;
                var i = (N[e] = { exports: {} });
                return f[e](i, i.exports, C), i.exports;
            }
            (C.d = (e, t) => {
                for (var i in t) C.o(t, i) && !C.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (C.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (C.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var j = {};
            (() => {
                Object.defineProperty(j, '__esModule', { value: !0 }), (j.usePopoverSwipeable = void 0);
                let e = C(810),
                    t = C(1381);
                j.usePopoverSwipeable = (i) => {
                    let { ref: a, swipeableProps: n = {}, onClose: s, disableSwipe: r, placement: l, threshold: o } = i,
                        c = (0, e.useMemo)(() => {
                            switch (l) {
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
                        }, [l]);
                    return (0, t.useComponentSwipeable)({ ref: a, swipeableProps: n, onClose: s, disableSwipe: r, placement: c, threshold: o });
                };
            })(),
                j.__esModule;
            var S = j.usePopoverSwipeable,
                A = i(62443),
                E = i(73633),
                M = i(77881),
                I = i(5956),
                T = i(92304),
                w = i(93666),
                V = i(97800);
            let k = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, i] = (0, b.useState)(e),
                    { contentRef: n } = (0, a.gKY)();
                return (
                    (0, b.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [a] = e || [];
                            a && a.contentRect.height !== t && i(a.contentRect.height);
                        });
                        return (
                            n && e.observe(n),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, n]),
                    { contentHeight: t }
                );
            };
            var O = i(7032),
                B = i(50420),
                R = i(58360);
            let P = (e) => {
                var t, i, n;
                let { seed: s, title: r, isStation: l } = e,
                    { vibe: o } = (0, a.Pjs)(),
                    { applySetting: c } = (0, a.B0S)({
                        seeds: null != (n = null == (t = o.meta) ? void 0 : t.seeds) ? n : [],
                        pageIdForFrom: a._Q$.HOME,
                        blockIdForFrom: a.hf$.RUP_MAIN_RADIO,
                    }),
                    { formatMessage: d } = (0, g.A)(),
                    u = !!(null == (i = o.meta) ? void 0 : i.seeds.includes(s)),
                    m = o.applyingSetting === s,
                    _ = (0, b.useMemo)(
                        () => (u ? ''.concat(d({ id: 'vibe-actions.remove' }), ' ').concat(r) : ''.concat(d({ id: 'vibe-actions.apply' }), ' ').concat(r)),
                        [u, r, d],
                    );
                return {
                    isApplying: m,
                    isSelected: u,
                    ariaLabel: _,
                    ariaPressed: u,
                    onClickHandler: (0, b.useCallback)(async () => {
                        o.setApplyingSetting(s), await c(s, l), o.setApplyingSetting();
                    }, [c, l, s, o]),
                };
            };
            var L = i(65061),
                W = i.n(L);
            let K = (0, p.PA)((e) => {
                    let { item: t } = e,
                        { vibe: i } = (0, a.Pjs)(),
                        n = (0, b.useRef)(null),
                        { isApplying: s, isSelected: r, ariaPressed: l, onClickHandler: o } = P({ seed: t.seed, title: t.title, isStation: !0 }),
                        c = (0, b.useCallback)(
                            (e) => {
                                i.isApplying || (n.current && (0, E.P)(e, W().ripple, n.current), o());
                            },
                            [o, i.isApplying],
                        );
                    return (0, _.jsxs)(M.$, {
                        radius: 'xxxl',
                        className: (0, B.$)(W().button, W().textButton, { [W().button_selected]: r, [W().button_applying]: s, [W().specialButton]: t.specialContext }),
                        onClick: c,
                        'aria-disabled': i.isApplying,
                        'aria-pressed': l,
                        withRipple: !1,
                        ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON),
                        children: [
                            t.specialContext &&
                                (0, _.jsx)(R.Image, { className: W().specialImage, src: t.specialContextImage, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            (0, _.jsx)(V.Caption, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: W().title, children: t.title }),
                            (0, _.jsx)('div', { className: W().rippleContainer, ref: n }),
                        ],
                    });
                }),
                z = (0, p.PA)((e) => {
                    let { type: t, restrictionValue: i } = e,
                        { vibe: n } = (0, a.Pjs)(),
                        s = (0, b.useRef)(null),
                        { isApplying: r, isSelected: l, ariaPressed: c, onClickHandler: d } = P({ seed: i.seed, title: i.title }),
                        u = (0, b.useCallback)(
                            (e) => {
                                n.isApplying || (s.current && (0, E.P)(e, W().ripple, s.current), d());
                            },
                            [d, n.isApplying],
                        ),
                        m = (0, b.useMemo)(
                            () => (0, _.jsx)(V.Caption, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: W().title, children: i.title }),
                            [i.title],
                        );
                    switch (t) {
                        case o.DIVERSITY:
                            return (0, _.jsxs)(M.$, {
                                className: (0, B.$)(W().button, W().diversityButton, { [W().button_selected]: l, [W().button_applying]: r }),
                                radius: 'xl',
                                'aria-disabled': n.isApplying,
                                'aria-pressed': c,
                                onClick: u,
                                withRipple: !1,
                                ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BUTTON),
                                children: [
                                    (0, _.jsx)(R.Image, {
                                        'aria-hidden': !0,
                                        src: i.imageUrl,
                                        fit: 'contain',
                                        width: 40,
                                        height: 40,
                                        withAvatarReplace: !0,
                                        className: W().diversityButtonImage,
                                    }),
                                    m,
                                    (0, _.jsx)('div', { className: W().rippleContainer, ref: s }),
                                ],
                            });
                        case o.MOOD_ENERGY:
                            return (0, _.jsxs)('div', {
                                className: W().moodEnergy,
                                ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BUTTON),
                                children: [
                                    (0, _.jsx)(M.$, {
                                        variant: 'text',
                                        className: (0, B.$)(W().button, W().moodEnergyButton, { [W().button_selected]: l, [W().button_applying]: r }),
                                        radius: 'round',
                                        onClick: u,
                                        withRipple: !1,
                                        'aria-disabled': n.isApplying,
                                        'aria-pressed': c,
                                        'aria-label': i.title,
                                        children: (0, _.jsx)(R.Image, {
                                            src: i.imageUrl,
                                            fit: 'contain',
                                            width: 52,
                                            height: 52,
                                            'aria-hidden': !0,
                                            withAvatarReplace: !0,
                                            className: W().moodEnergyButtonImage,
                                        }),
                                    }),
                                    (0, _.jsx)('span', { 'aria-hidden': !0, children: m }),
                                ],
                            });
                        case o.LANGUAGE:
                            return (0, _.jsxs)(M.$, {
                                radius: 'xxxl',
                                className: (0, B.$)(W().button, W().textButton, { [W().button_selected]: l, [W().button_applying]: r }),
                                onClick: u,
                                withRipple: !1,
                                'aria-disabled': n.isApplying,
                                'aria-pressed': c,
                                ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BUTTON),
                                children: [m, (0, _.jsx)('div', { className: W().rippleContainer, ref: s })],
                            });
                        default:
                            return null;
                    }
                });
            var U = i(87709),
                D = i.n(U);
            let F = (0, p.PA)(() => {
                let { vibeSettings: e } = (0, a.Pjs)(),
                    { formatMessage: t } = (0, g.A)();
                return (
                    e.isNeededToLoad && e.getData(),
                    (0, _.jsxs)('div', {
                        className: D().root,
                        children: [
                            e.contextItems.length > 0 &&
                                (0, _.jsx)(O.m, {
                                    title: t({ id: 'interface-actions.my-vibe-context-settings' }),
                                    restrictionsClassName: D().contextItems,
                                    ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK),
                                    children: e.contextItems.map((e) => (0, _.jsx)(K, { item: e, ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON) }, e.seed)),
                                }),
                            e.diversity &&
                                (0, _.jsx)(O.m, {
                                    title: e.diversity.title,
                                    restrictionsClassName: D().diversity,
                                    ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK),
                                    children: e.diversity.values.map((t) => {
                                        var i;
                                        return (0, _.jsx)(z, { type: null == (i = e.diversity) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.moodEnergy &&
                                (0, _.jsx)(O.m, {
                                    title: e.moodEnergy.title,
                                    restrictionsClassName: D().moodEnergy,
                                    ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK),
                                    children: e.moodEnergy.values.map((t) => {
                                        var i;
                                        return (0, _.jsx)(z, { type: null == (i = e.moodEnergy) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.language &&
                                (0, _.jsx)(O.m, {
                                    title: e.language.title,
                                    restrictionsClassName: D().contextItems,
                                    ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BLOCK),
                                    children: e.language.values.map((t) => {
                                        var i;
                                        return (0, _.jsx)(z, { type: null == (i = e.language) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                        ],
                    })
                );
            });
            var G = i(77901),
                $ = i.n(G);
            let H = (0, p.PA)(() => {
                var e, t, i, n;
                let { formatMessage: s } = (0, g.A)(),
                    {
                        vibe: r,
                        settings: { isMobile: l },
                        vibeSettings: o,
                    } = (0, a.Pjs)(),
                    { pageId: c } = (0, a.$au)(),
                    { blockIdForFrom: d } = (0, a.N8n)(),
                    u = (0, b.useRef)(null),
                    m = (0, b.useRef)(null),
                    p = (0, b.useRef)(null),
                    { resetSettings: v } = (0, a.B0S)({ seeds: null != (n = null == (e = r.meta) ? void 0 : e.seeds) ? n : [], pageIdForFrom: c, blockIdForFrom: d }),
                    { contentRef: f } = (0, a.gKY)(),
                    { contentHeight: N } = k(0),
                    { state: C, setState: j, toggleFalse: O } = (0, A.e)(!1);
                (0, b.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                );
                let B = (0, b.useMemo)(
                        () => (l ? { height: '88vh', transitionProperty: 'opacity' } : f ? { insetInlineEnd: 7, insetBlockStart: f.offsetTop + 7, height: N - 16 } : {}),
                        [N, f, l],
                    ),
                    R = !!(r.isApplying || r.isMyVibe),
                    P = (0, y.c)((e) => {
                        if (!r.isApplying) {
                            var t;
                            u.current && (0, E.P)(e, $().ripple, u.current), v(), null == (t = m.current) || t.focus();
                        }
                    }),
                    L = (0, b.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] = (null == e ? void 0 : e.split(':')) || [];
                                    return e === a.M19 || (t && a.UMA.includes(t));
                                }))(null == (e = r.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = r.meta) ? void 0 : t.context)
                                ? (0, _.jsx)(M.$, {
                                      className: $().toggleSettingsButton,
                                      size: 'm',
                                      radius: 'round',
                                      icon: (0, _.jsx)(I.Icon, { variant: 'filter', size: 'xs' }),
                                      'aria-label': s({ id: 'vibe-actions.aria-label-settings' }),
                                      ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_BUTTON),
                                  })
                                : (0, _.jsx)(M.$, {
                                      className: $().toggleSettingsButton,
                                      size: 'default',
                                      radius: 'xxxl',
                                      icon: (0, _.jsx)(I.Icon, { variant: 'filter', size: 'xxs' }),
                                      'aria-label': s({ id: 'vibe-actions.aria-label-settings' }),
                                      ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_BUTTON),
                                      children: (0, _.jsx)(V.Caption, {
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, _.jsx)(h.A, { id: 'interface-actions.configure-my-vibe' }),
                                      }),
                                  });
                    }, [s, null == (t = r.meta) ? void 0 : t.context, null == (i = r.meta) ? void 0 : i.seeds]),
                    { handlers: W } = S({ ref: p, onClose: O, placement: 'bottom', disableSwipe: !l, swipeableProps: { preventScrollOnSwipe: !0 } });
                return (0, _.jsxs)(T.AM, {
                    placement: l ? 'bottom' : 'right',
                    isMobile: l,
                    strategy: 'fixed',
                    transform: !1,
                    portalNode: f,
                    positionElement: f,
                    disableFloatingStyles: !l,
                    open: C,
                    onOpenChange: j,
                    style: B,
                    overlayClassName: $().overlay,
                    popoverContentRef: p,
                    children: [
                        L,
                        (0, _.jsx)(T.hl, {
                            className: $().popover,
                            ref: p,
                            ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_BLOCK),
                            children: (0, _.jsxs)('div', {
                                className: $().root,
                                children: [
                                    l && (0, _.jsx)('div', { ref: W.ref, onMouseDown: W.onMouseDown, className: $().swipeableArea }),
                                    (0, _.jsxs)('div', {
                                        className: $().header,
                                        children: [
                                            (0, _.jsx)(V.Heading, {
                                                variant: 'h3',
                                                size: 's',
                                                weight: 'bold',
                                                ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_TITLE),
                                                children: (0, _.jsx)(h.A, { id: 'interface-actions.my-vibe-settings' }),
                                            }),
                                            (0, _.jsxs)('div', {
                                                className: $().actions,
                                                children: [
                                                    (0, _.jsx)(w.m_, {
                                                        offsetOptions: 4,
                                                        placement: 'left',
                                                        text: s({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                        children: (0, _.jsx)(M.$, {
                                                            variant: 'outline',
                                                            radius: 'round',
                                                            size: 'xxxs',
                                                            icon: (0, _.jsx)(I.Icon, { variant: 'reset', size: 'xxxs' }),
                                                            onClick: P,
                                                            disabled: !!r.isMyVibe,
                                                            'aria-hidden': !!r.isMyVibe,
                                                            'aria-disabled': R,
                                                            'aria-label': s({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                            ref: u,
                                                            ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON),
                                                        }),
                                                    }),
                                                    (0, _.jsx)(M.$, {
                                                        radius: 'round',
                                                        color: 'secondary',
                                                        size: 'xxs',
                                                        icon: (0, _.jsx)(I.Icon, { variant: 'close', size: 'xxs' }),
                                                        onClick: O,
                                                        'aria-label': s({ id: 'interface-actions.close-my-vibe-settings' }),
                                                        ref: m,
                                                        ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, _.jsx)(F, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
        },
        17492: (e) => {
            e.exports = {
                root: 'VibeWheelItem_root__wTv1s',
                important: 'VibeWheelItem_important__suOta',
                coverContainer: 'VibeWheelItem_coverContainer__P9z3X',
                cover: 'VibeWheelItem_cover__Xz2g2',
                title: 'VibeWheelItem_title__up_jS',
                description: 'VibeWheelItem_description__I0mNY',
                titleContainer: 'VibeWheelItem_titleContainer__3Vdi5',
                titleContainer_withExplicitMark: 'VibeWheelItem_titleContainer_withExplicitMark__wMs5l',
                explicitMark: 'VibeWheelItem_explicitMark__uFbV6',
                explicitMarkContainer: 'VibeWheelItem_explicitMarkContainer___3fIc',
                entityMeta: 'VibeWheelItem_entityMeta__Mi7li',
                icon: 'VibeWheelItem_icon__TU7_d',
            };
        },
        18433: (e) => {
            e.exports = { root: 'RestrictionBlock_root__qzBtp', restrictions: 'RestrictionBlock_restrictions__6V1zc' };
        },
        18467: (e) => {
            e.exports = { root: 'VibeWidget_root__Chpsm', meta: 'VibeWidget_meta__WQ7zn', wheel: 'VibeWidget_wheel__SrYUt' };
        },
        22317: (e) => {
            e.exports = {
                root: 'PlayButton_root__nYKdN',
                root_isLoading: 'PlayButton_root_isLoading__925Sa',
                'applying-setting': 'PlayButton_applying-setting__3nbT9',
                icon: 'PlayButton_icon__t_THQ',
            };
        },
        23296: (e) => {
            e.exports = { root: 'VibeWidgetAlbumCover_root__VT_Qy', cover: 'VibeWidgetAlbumCover_cover__vvCyE' };
        },
        24435: (e) => {
            e.exports = { root: 'VibePetal_root__CBSOt' };
        },
        29015: (e) => {
            e.exports = {
                root: 'VibeContext_root__dbiNv',
                context: 'VibeContext_context__Z_82k',
                pinButton: 'VibeContext_pinButton__b6SNF',
                resetButton: 'VibeContext_resetButton__9KK4S',
            };
        },
        35929: (e) => {
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
        37281: (e, t, i) => {
            'use strict';
            i.d(t, { D7: () => c, CT: () => et, Hn: () => f, jF: () => e4 });
            var a,
                n,
                s = i(93064);
            (a || (a = {})).OK = 'ok';
            var r = i(76866),
                l = i(83252),
                o = i(26433);
            let c = s.gK
                .compose(
                    s.gK.model('VibeActions', {
                        meta: s.gK.maybeNull(r.Gh),
                        applyingSetting: s.gK.maybeNull(s.gK.string),
                        isApplying: s.gK.boolean,
                        vibeResetLoadingState: s.gK.enumeration(Object.values(l.GuX)),
                    }),
                    o.XT,
                )
                .views((e) => ({
                    get isMyVibe() {
                        return e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === l.M19;
                    },
                }))
                .actions((e) => ({
                    getLastVibe: (0, s.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: i } = (0, s._$)(e);
                        if (e.loadingState !== l.GuX.PENDING)
                            try {
                                e.loadingState = l.GuX.PENDING;
                                let i = yield t.waveLast();
                                (e.meta = (0, r.lb)(i)), (e.loadingState = l.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t), (e.loadingState = l.GuX.REJECT);
                            }
                    }),
                    vibeReset: (0, s.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: i } = (0, s._$)(e);
                        if (e.vibeResetLoadingState !== l.GuX.PENDING)
                            try {
                                (e.vibeResetLoadingState = l.GuX.PENDING),
                                    (yield t.waveLastReset()) === a.OK && (e.meta = (0, r.lb)({ name: '', seeds: [l.M19] })),
                                    (e.vibeResetLoadingState = l.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t), (e.vibeResetLoadingState = l.GuX.REJECT);
                            }
                    }),
                    setApplyingSetting(t) {
                        t ? (e.applyingSetting = (0, s.wg)(t)) : (e.applyingSetting = null);
                    },
                    setIsApplying(t) {
                        e.isApplying = t;
                    },
                    setVibe(t) {
                        e.meta = (0, r.lb)(t);
                    },
                    reset() {
                        (e.meta = null), (e.vibeResetLoadingState = l.GuX.IDLE), (e.loadingState = l.GuX.IDLE);
                    },
                }));
            !(function (e) {
                (e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK');
            })(n || (n = {}));
            var d = i(79899),
                u = i(14148),
                m = i(15099),
                _ = i(80156),
                p = i(29350);
            let b = s.gK.model('WheelAlbumItem', { type: s.gK.literal(n.ALBUM), data: p.J }).actions((e) => ({ getKey: (t) => ''.concat(e.type, '-').concat(t) })),
                v = s.gK.model('PromoLink', {
                    id: s.gK.string,
                    title: s.gK.string,
                    description: s.gK.maybe(s.gK.string),
                    url: s.gK.maybeNull(s.gK.string),
                    cover: o.$B,
                    color: s.gK.string,
                }),
                g = s.gK.model('WheelPromoItem', { type: s.gK.literal(n.PROMO_LINK), data: v }).actions((e) => ({ getKey: (t) => ''.concat(e.type, '-').concat(t) })),
                h = s.gK.model('WheelWaveItem', { type: s.gK.literal(n.WAVE), data: r.Gh }).actions((e) => ({ getKey: (t) => ''.concat(e.type, '-').concat(t) })),
                x = s.gK.union(h, b, g),
                y = {
                    items: [
                        {
                            type: n.ALBUM,
                            data: {
                                album: {
                                    id: 7142,
                                    title: 'Murder On The Dance Floor Hit Pac',
                                    contentWarning: d.K.EXPLICIT,
                                    contentRestrictions: {
                                        available: !0,
                                        disclaimers: ['explicit', 'exclamationIcon:671a23afcec5646906723a52', 'descriptionText:673320cfb0a503624eeea083'],
                                    },
                                },
                            },
                        },
                        {
                            type: n.WAVE,
                            data: {
                                wave: { name: 'Ramin Bahrami', seeds: ['artist:2586320'], stationId: 'artist:2586320', description: 'Моя волна по исполнителю' },
                                agent: {
                                    animationUri: 'https://music-custom-wave-media.music.yandex.net/vibe_agent_artist1.json',
                                    cover: { uri: 'avatars.mds.yandex.net/get-music-content/5559490/cc511db0.a.18345029-1/%%', color: '#E0D1BE' },
                                    entity: { type: 'artist' },
                                },
                            },
                        },
                        {
                            type: n.PROMO_LINK,
                            data: {
                                id: '123',
                                title: 'Итоги года',
                                description: 'Начинаем распаковку',
                                action: { weblink: '/slides/user' },
                                cover: { uri: 'avatars.yandex.net/get-music-misc/70683/rotor-mood-happy-agent-cover-JWFjr/%%', color: '#FFFFE8' },
                                color: '#BC413A',
                            },
                        },
                        {
                            type: n.ALBUM,
                            data: {
                                album: {
                                    id: 4294416,
                                    title: 'DAMN. (Explicit)',
                                    cover: { uri: 'avatars.yandex.net/get-music-content/163479/0f5e16b0.a.4294416-2/%%', color: '#774a51' },
                                    contentWarning: d.K.EXPLICIT,
                                    contentRestrictions: {
                                        available: !0,
                                        disclaimers: ['explicit', 'exclamationIcon:671a23afcec5646906723a52', 'descriptionText:67370c8e13b92b0a60256675'],
                                    },
                                },
                            },
                        },
                        {
                            type: n.WAVE,
                            data: {
                                wave: { name: 'Рок', seeds: ['genre:allrock'], stationId: 'genre:allrock', description: 'Моя волна по жанру' },
                                agent: {
                                    animationUri: 'https://music-custom-wave-media.music.yandex.net/LTdOvVfmvi',
                                    cover: { uri: 'avatars.yandex.net/get-music-misc/40584/rotor-genre-allrock-agent-cover-TvqvI/%%', color: '#FFFFFF' },
                                },
                            },
                        },
                        {
                            type: n.ALBUM,
                            data: {
                                album: {
                                    id: 9967,
                                    title: 'THE E.N.D. (THE ENERGY NEVER DIES) Long title with Explicit',
                                    cover: { uri: 'avatars.yandex.net/get-music-content/108289/08dee433.a.9967-3/%%', color: '#196636' },
                                    contentWarning: d.K.EXPLICIT,
                                    contentRestrictions: {
                                        available: !0,
                                        disclaimers: ['exclamationIcon:671a23afcec5646906723a52', 'explicit', 'descriptionText:67370c8e13b92b0a60256675'],
                                    },
                                },
                            },
                        },
                        {
                            type: n.WAVE,
                            data: {
                                wave: { name: 'IOWA', seeds: ['artist:717399'], stationId: 'artist:717399', description: 'Моя волна по исполнителю' },
                                agent: {
                                    animationUri: 'https://music-custom-wave-media.music.yandex.net/uRnBcjNzZS',
                                    cover: { uri: 'avatars.yandex.net/get-music-content/10129881/0c727ef8.p.717399/%%', color: '#BD3923' },
                                    entity: { type: u.h.ARTIST },
                                },
                            },
                        },
                        {
                            type: n.ALBUM,
                            data: {
                                album: {
                                    id: 5905756,
                                    title: 'Great Depression No Explicit',
                                    cover: { uri: 'avatars.yandex.net/get-music-content/16334817/bc8ead69.a.5905756-3/%%', color: '#82402d' },
                                    contentWarning: d.K.CLEAN,
                                    contentRestrictions: { available: !0, disclaimers: [] },
                                    albumType: m._.ALBUM,
                                    listeningFinished: !1,
                                },
                            },
                        },
                        {
                            type: n.WAVE,
                            data: {
                                wave: { name: 'В дороге', seeds: ['activity:road-trip'], stationId: 'activity:road-trip', description: 'Моя волна под занятие' },
                                agent: {
                                    animationUri: 'https://music-custom-wave-media.music.yandex.net/Foah9sRLsS',
                                    cover: { uri: 'avatars.yandex.net/get-music-misc/70683/rotor-activity-road-trip-agent-cover-S1vPp/%%', color: '#FFFFDF' },
                                },
                            },
                        },
                    ],
                },
                f = s.gK.model('VibeWheel', { items: s.gK.array(x) }).actions((e) => ({
                    getData() {
                        e.items = (0, s.wg)(
                            y.items
                                .map((e) => {
                                    switch (e.type) {
                                        case n.WAVE:
                                            return (0, s.wg)({ type: n.WAVE, data: (0, r.lb)(e.data.wave, e.data.agent) });
                                        case n.ALBUM:
                                            return (0, s.wg)({ type: n.ALBUM, data: (0, _.sK)({ album: e.data.album }) });
                                        case n.PROMO_LINK:
                                            let t;
                                            return (0, s.wg)({
                                                type: n.PROMO_LINK,
                                                data:
                                                    ((t = e.data),
                                                    (0, s.wg)({
                                                        id: t.id,
                                                        title: t.title,
                                                        description: t.description,
                                                        url: t.action.weblink,
                                                        cover: t.cover,
                                                        color: t.color,
                                                    })),
                                            });
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null !== e),
                        );
                    },
                }));
            var N = i(54486),
                C = i(50420),
                j = i(28303),
                S = i(97396),
                A = i(61910),
                E = i.t(A, 2),
                M = i(47713),
                I = i(31500),
                T = i(8817),
                w = i(67648),
                V = i(85360),
                k = i(77881),
                O = i(97800);
            let B = (0, A.lazy)(async () =>
                    Promise.all([i.e(5713), i.e(7533)])
                        .then(i.bind(i, 7533))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                R = (0, A.lazy)(async () =>
                    Promise.all([i.e(5713), i.e(3244)])
                        .then(i.bind(i, 73244))
                        .then((e) => ({ default: e.VibeAnimation })),
                ),
                P = (0, A.lazy)(async () =>
                    Promise.all([i.e(5713), i.e(5266)])
                        .then(i.bind(i, 15266))
                        .then((e) => ({ default: e.VibeWidgetFallbackAnimation })),
                ),
                L = (0, A.lazy)(async () =>
                    Promise.all([i.e(5713), i.e(9335)])
                        .then(i.bind(i, 29335))
                        .then((e) => ({ default: e.VibeWidgetAnimation })),
                );
            var W = i(80585),
                K = i(43426),
                z = i(5956),
                U = i(22317),
                D = i.n(U);
            let F = !0,
                G = (0, j.PA)((e) => {
                    let { isPlaying: t, onClick: i, ariaDisabled: a, className: n } = e,
                        { vibe: s } = (0, l.Pjs)(),
                        { formatMessage: r } = (0, K.A)(),
                        o = (0, l.W6M)(),
                        c = (0, l.D60)(),
                        d = t ? 'pauseVibe' : 'playVibe',
                        u = t ? I.e8.vibe.MY_VIBE_PAUSE_BUTTON : I.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        m = (0, A.useMemo)(() => (t ? r({ id: 'vibe-actions.aria-label-pause' }) : r({ id: 'vibe-actions.aria-label-play' })), [r, t]),
                        _ = (0, A.useCallback)(
                            (e) => {
                                s.isApplying || null == i || i(), e.stopPropagation(), e.preventDefault();
                            },
                            [i, s.isApplying],
                        );
                    return (
                        (0, A.useEffect)(() => {
                            if ('production' === c && 1 === o.length && F) {
                                var e, t;
                                let i = Math.round(performance.now());
                                null == (t = window.Ya) || null == (e = t.Rum) || e.sendTimeMark('my-vibe-button-loading-time', i), (F = !1);
                            }
                        }, []),
                        (0, N.jsx)(k.$, {
                            className: (0, C.$)(D().root, { [D().root_isVibeLoading]: s.isApplying }, n),
                            withRipple: !1,
                            withHover: !1,
                            onClick: _,
                            variant: 'text',
                            'aria-disabled': s.isApplying || a,
                            'aria-label': m,
                            icon: (0, N.jsx)(z.Icon, { size: 's', className: D().icon, variant: d }),
                            ...(0, I.Am)(u),
                            children: (0, N.jsx)(M.A, { id: 'entity-names.my-vibe' }),
                        })
                    );
                });
            G.displayName = 'PlayButton';
            var $ = i(35929),
                H = i.n($),
                X = i(27510),
                q = i(16020),
                Y = i(29015),
                J = i.n(Y);
            let Q = (0, j.PA)((e) => {
                    var t;
                    let { context: i, onResetClick: a, className: n } = e,
                        {
                            vibe: s,
                            settings: { isMobile: o },
                            experiments: c,
                        } = (0, l.Pjs)(),
                        { formatMessage: d } = (0, K.A)(),
                        u = (0, r.A7)(s.meta),
                        m = i && !o,
                        _ = (0, X.L)(() => {
                            var e;
                            return c.checkExperiment(l.zal.WebNextVibeDescription, 'on') && (null == (e = s.meta) ? void 0 : e.isMix)
                                ? d({ id: 'vibe-actions.vibe-context' }, { type: s.meta.type, name: i })
                                : i;
                        });
                    return (0, N.jsxs)('div', {
                        className: (0, C.$)(J().root, n),
                        children: [
                            m &&
                                (0, N.jsx)(W.O0, {
                                    size: 'm',
                                    iconSize: 'xs',
                                    withScaleAnimation: !1,
                                    isPinned: null == (t = s.meta) ? void 0 : t.isPinned,
                                    onClick: u,
                                    className: J().pinButton,
                                }),
                            (0, N.jsx)(q.s$, {}),
                            i &&
                                (0, N.jsxs)('div', {
                                    className: (0, C.$)(J().context),
                                    ...(0, I.Am)(I.e8.vibe.VIBE_CONTEXT),
                                    children: [
                                        (0, N.jsx)(O.Caption, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', lineClamp: 1, children: _ }),
                                        (0, N.jsx)(k.$, {
                                            className: J().resetButton,
                                            variant: 'text',
                                            radius: 'round',
                                            withRipple: !1,
                                            icon: (0, N.jsx)(z.Icon, { variant: 'close', size: 'xxs' }),
                                            onClick: a,
                                            'aria-label': ''.concat(d({ id: 'vibe-actions.reset-settings' }), ' ').concat(_),
                                            ...(0, I.Am)(I.e8.vibe.RESET_VIBE_CONTEXT_BUTTON),
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                Z = 'vibe-block',
                ee = 'vibe-block-controls',
                et = (0, j.PA)((e) => {
                    var t, i, a, n;
                    let { className: s } = e,
                        r = (0, S.useRouter)(),
                        { vibe: o, experiments: c, user: d } = (0, l.Pjs)(),
                        u = (0, A.useRef)(null),
                        [m, _] = (0, w.d)(),
                        { pageId: p } = (0, l.$au)(),
                        { blockIdForFrom: b } = (0, l.N8n)(),
                        { isFreemium: v } = (0, l.XCI)(),
                        {
                            openPaymentWidgetModal: g,
                            saveOfferAndAuthorize: h,
                            isShimmerActive: x,
                            isShimmerVisible: y,
                            mainText: f,
                            mainTextA11y: j,
                            additionText: E,
                        } = (0, l.DpZ)({ storeName: 'music', isEnabled: v, offerElement: { element: m, intersectionPropertyId: ee } }),
                        { isIntersecting: P } = null != (a = (0, V.BL)([u], { preflightCheck: !1 }, !u.current)[Z]) ? a : {},
                        L = (0, l.NFA)().get(l.QGx),
                        {
                            isVibeContext: K,
                            isPlaying: z,
                            togglePlay: U,
                            resetSettings: D,
                        } = (0, l.B0S)({ seeds: null != (n = null == (t = o.meta) ? void 0 : t.seeds) ? n : [], pageIdForFrom: p, blockIdForFrom: b }),
                        F = c.checkExperiment(l.zal.WebNextDisableVibeSettings, 'on') || v || !d.isAuthorized,
                        $ = (0, A.useCallback)(() => {
                            K ? D() : o.vibeResetLoadingState !== l.GuX.PENDING && o.vibeReset();
                        }, [K, o, D]),
                        X = (0, A.useCallback)(() => {
                            if (!d.isAuthorized) {
                                if (!L.authorizationUrl) return;
                                r.push(L.authorizationUrl);
                                return;
                            }
                            v && g();
                        }, [d.isAuthorized, L.authorizationUrl, r, v, g]),
                        q = (0, A.useCallback)(
                            (e) => {
                                e.stopPropagation(), e.preventDefault(), X();
                            },
                            [X],
                        ),
                        Y = (0, A.useCallback)(() => {
                            if (v || !d.isAuthorized) return void X();
                            U();
                        }, [v, d.isAuthorized, U, X]),
                        J = (0, A.useMemo)(
                            () =>
                                c.checkExperiment(l.zal.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, N.jsx)(B, { className: H().vibeAnimation })
                                    : (0, N.jsx)(R, { isIntersecting: P, className: H().vibeAnimation }),
                            [c, P],
                        ),
                        et = (0, T.c)(() => {
                            if (!d.isAuthorized) return void h();
                            g();
                        }),
                        ei = (0, A.useMemo)(
                            () =>
                                c.checkExperiment(l.zal.WebNextUnauthorizedSubscriptionButton, 'on')
                                    ? (0, N.jsxs)(k.$, {
                                          isBlock: !0,
                                          radius: 'xxxl',
                                          size: 'l',
                                          color: 'plus',
                                          className: H().button,
                                          onClick: et,
                                          ...(0, I.Am)(I.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON_UNAUTH),
                                          children: [
                                              (0, N.jsx)(O.Caption, { className: H().text_main, variant: 'div', size: 'l', children: f }),
                                              E && (0, N.jsx)(O.Caption, { className: H().text_addition, variant: 'div', size: 'm', children: E }),
                                          ],
                                      })
                                    : (0, N.jsx)(W.Hi, { size: 'l', className: H().button }),
                            [E, c, et, f],
                        );
                    return (
                        (0, A.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        d.isAuthorized && o.isNeededToLoad && (0, A.use)(o.getLastVibe()),
                        (0, N.jsxs)('div', {
                            className: (0, C.$)(H().root, { [H().root_freemium]: v || !d.isAuthorized }, s),
                            ref: u,
                            'data-intersection-property-id': Z,
                            ...(0, I.Am)(I.e8.vibe.VIBE_BLOCK),
                            children: [
                                J,
                                (0, N.jsxs)('div', {
                                    className: H().controls,
                                    onClick: q,
                                    ref: _,
                                    'data-intersection-property-id': ee,
                                    children: [
                                        (0, N.jsx)(G, { className: H().playButton, isPlaying: z, ariaDisabled: v || !d.isAuthorized, onClick: Y }),
                                        !F && (0, N.jsx)(Q, { className: H().settingsButton, context: null == (i = o.meta) ? void 0 : i.context, onResetClick: $ }),
                                        (v || !d.isAuthorized) &&
                                            (0, N.jsx)(O.Caption, {
                                                className: H().subscriptionText,
                                                variant: 'div',
                                                size: 'l',
                                                ...(0, I.Am)(I.e8.vibe.MY_VIBE_SUBSCRIPTION_TEXT),
                                                children: (0, N.jsx)(M.A, { id: 'vibe-freemium.available-in-plus', values: { br: (0, N.jsx)('br', {}) } }),
                                            }),
                                        !d.isAuthorized && ei,
                                        d.isAuthorized &&
                                            v &&
                                            (0, N.jsx)(W.b4, {
                                                isShimmerActive: x,
                                                isShimmerVisible: y,
                                                onClick: g,
                                                mainText: f,
                                                ariaLabel: j,
                                                additionText: E,
                                                className: H().button,
                                                ...(0, I.Am)(I.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON),
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            et.displayName = 'VibeBlock';
            let ei = '#5C7B9B';
            var ea = i(91657),
                en = i(36553),
                es = i(65969),
                er = i.n(es),
                el = i(63585),
                eo = i(46423),
                ec = i(17492),
                ed = i.n(ec);
            let eu = (0, j.PA)((e) => {
                let { album: t, shouldPlayOnClick: i = !0 } = e,
                    {
                        settings: { isMobile: a },
                    } = (0, l.Pjs)(),
                    { pageId: n } = (0, l.$au)(),
                    s = (0, eo.r_)(t.type),
                    { ref: r, intersectionPropertyId: o } = (0, l.nMI)(),
                    { from: c } = (0, l.fyy)({ pageId: n }),
                    d = (0, l.brA)(),
                    u = (0, l.PT7)(),
                    {
                        isPlaying: m,
                        isCurrent: _,
                        togglePlay: p,
                    } = (0, l.Dx4)({ playContextParams: { contextData: { type: el.K.Album, meta: { id: t.id }, from: c }, loadContextMeta: !0 } }),
                    b = (0, eo.cp)({ album: t, callback: p }),
                    v = (0, T.c)(() => {
                        i && (u() || (b(), d(!m)));
                    }),
                    g = (0, A.useCallback)(
                        (e) =>
                            (0, N.jsx)('div', {
                                className: ed().coverContainer,
                                children: (0, N.jsx)(W.q1, {
                                    isAvailable: t.isAvailable,
                                    isDisliked: !1,
                                    coverUri: t.coverUri,
                                    title: t.title,
                                    className: (0, C.$)(W.$f.playButtonCell, ed().cover, ed().important),
                                    alt: ''.concat(s, ' ').concat(t.title),
                                    radius: 'xs',
                                    playButtonIconSize: 'l',
                                    fallbackIconSize: 'l',
                                    ...e,
                                }),
                            }),
                        [t.coverUri, t.isAvailable, t.title, s],
                    ),
                    h = null == g ? void 0 : g({ onPlayButtonClick: v, isPlaying: m, isCurrent: _ }),
                    x = (0, X.L)(() =>
                        a
                            ? null
                            : (0, N.jsx)(O.Caption, {
                                  className: ed().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  children: (0, N.jsx)(M.A, { id: 'album.entire-album' }),
                              }),
                    );
                return (0, N.jsxs)(W.Cj, {
                    ref: r,
                    'data-intersection-property-id': o,
                    className: (0, C.$)(W.$f.root, ed().root, ed().important),
                    'aria-label': t.title,
                    onClick: v,
                    children: [
                        h,
                        (0, N.jsxs)('div', {
                            className: ed().entityMeta,
                            children: [
                                (0, N.jsxs)('div', {
                                    className: (0, C.$)(ed().titleContainer, { [ed().titleContainer_withExplicitMark]: t.explicitDisclaimer }),
                                    children: [
                                        (0, N.jsx)(O.Caption, { className: ed().title, variant: 'span', lineClamp: 2, children: t.title }),
                                        t.explicitDisclaimer &&
                                            (0, N.jsx)(W.Nq, {
                                                className: ed().explicitMark,
                                                containerClassName: ed().explicitMarkContainer,
                                                getDescriptionTexts: t.getDescriptionTexts,
                                                variant: t.explicitDisclaimer,
                                            }),
                                    ],
                                }),
                                x,
                            ],
                        }),
                    ],
                });
            });
            var em = i(43350);
            let e_ = (0, j.PA)((e) => {
                    var t;
                    let { promoLink: i, shouldNavigateOnClick: a = !0 } = e,
                        {
                            settings: { isMobile: n },
                        } = (0, l.Pjs)(),
                        s = (0, l.NKK)(),
                        r = (0, l.ZpR)(null != (t = i.url) ? t : ''),
                        o = (0, X.L)(() => (n ? null : (0, N.jsx)(O.Caption, { className: ed().description, variant: 'span', lineClamp: 1, children: i.description }))),
                        c = (0, T.c)((e) => {
                            var t;
                            a && (r(e), s({ to: em.QT.Link, deepLink: null != (t = i.url) ? t : void 0 }));
                        });
                    return (0, N.jsxs)(W.Cj, {
                        className: (0, C.$)(W.$f.root, ed().root, ed().important),
                        'aria-label': i.title,
                        onClick: c,
                        children: [
                            (0, N.jsx)('div', {
                                className: ed().coverContainer,
                                children: (0, N.jsx)(W.BW, {
                                    className: (0, C.$)(ed().cover, ed().important),
                                    src: i.cover.uri,
                                    size: 100,
                                    alt: i.title,
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    withLoadingIndicator: !1,
                                }),
                            }),
                            (0, N.jsxs)('div', {
                                className: ed().entityMeta,
                                children: [
                                    (0, N.jsxs)('div', {
                                        className: ed().titleContainer,
                                        children: [
                                            (0, N.jsx)(O.Caption, { className: ed().title, variant: 'span', lineClamp: 2, children: i.title }),
                                            (0, N.jsx)(z.Icon, { className: ed().icon, variant: 'link_rounded', size: 'xxs' }),
                                        ],
                                    }),
                                    o,
                                ],
                            }),
                        ],
                    });
                }),
                ep = (0, j.PA)((e) => {
                    let { vibe: t, shouldPlayOnClick: i = !0 } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, l.Pjs)(),
                        { pageId: n } = (0, l.$au)(),
                        s = (0, l.PT7)(),
                        { isFreemium: o } = (0, l.XCI)(),
                        [c, d] = (0, A.useState)(!1),
                        u = (0, l.brA)(),
                        { ref: m, intersectionPropertyId: _ } = (0, l.nMI)(),
                        { isPlaying: p, togglePlay: b, isCurrent: v } = (0, l.B0S)({ seeds: t.seeds, pageIdForFrom: n }),
                        g = (0, T.c)(() => {
                            if (i && !s()) {
                                if (o) return void d(!0);
                                b(), u(!p);
                            }
                        }),
                        h = (0, A.useCallback)(
                            () =>
                                t.agent
                                    ? (0, N.jsx)('div', {
                                          className: ed().coverContainer,
                                          children: (0, N.jsx)(r.nr, {
                                              agent: t.agent,
                                              isPlaying: p,
                                              isCurrent: v,
                                              onPlayButtonClick: g,
                                              className: (0, C.$)(W.$f.playButtonCell, ed().cover, ed().important),
                                              playButtonIconSize: 'l',
                                          }),
                                      })
                                    : (0, N.jsx)(A.Fragment, {}),
                            [t.agent, p, v, g],
                        ),
                        x = (0, X.L)(() => (a ? null : (0, N.jsx)(O.Caption, { className: ed().description, variant: 'span', lineClamp: 1, children: t.description })));
                    return (0, N.jsxs)(W.Cj, {
                        ref: m,
                        'data-intersection-property-id': _,
                        className: (0, C.$)(W.$f.root, ed().root, ed().important),
                        'aria-label': t.title,
                        onClick: g,
                        children: [
                            (0, N.jsx)(W.SU, {
                                isOpened: c,
                                onOpenChange: d,
                                isEnabled: o,
                                placement: 'bottom',
                                textVariant: 'vibe',
                                vibeTextVariant: t.stationType,
                                renderChildren: h,
                            }),
                            (0, N.jsxs)('div', {
                                className: ed().entityMeta,
                                children: [
                                    (0, N.jsx)('div', {
                                        className: ed().titleContainer,
                                        children: (0, N.jsx)(O.Caption, { className: ed().title, variant: 'span', lineClamp: 2, children: t.title }),
                                    }),
                                    x,
                                ],
                            }),
                        ],
                    });
                }),
                eb = (e) => {
                    let { item: t, shouldActionOnClick: i } = e;
                    switch (t.type) {
                        case n.WAVE:
                            return (0, N.jsx)(ep, { vibe: t.data, shouldPlayOnClick: i });
                        case n.ALBUM:
                            return (0, N.jsx)(eu, { album: t.data, shouldPlayOnClick: i });
                        case n.PROMO_LINK:
                            return (0, N.jsx)(e_, { promoLink: t.data, shouldNavigateOnClick: i });
                    }
                },
                ev = (e) => {
                    let { className: t, items: i } = e,
                        [a, n] = (0, A.useState)(1),
                        s = (0, A.useRef)(null),
                        r = ((e) => (0 === e.length ? e : Array.from({ length: Math.ceil(20 / e.length) }, () => e).flat()))(i),
                        l = (0, T.c)((e) => {
                            n(e.realIndex);
                        }),
                        o = (0, T.c)((e) => {
                            n(e.realIndex);
                        }),
                        c = (0, T.c)((e) => {
                            n(e.realIndex);
                        }),
                        d = (0, T.c)((e) => {
                            s.current = e;
                        }),
                        u = (0, T.c)((e, t) => () => {
                            t >= 3 && s.current && s.current.slideToLoop(e);
                        });
                    return (0, N.jsx)(en.RC, {
                        direction: 'vertical',
                        centeredSlides: !0,
                        loop: !0,
                        loopAdditionalSlides: 7,
                        slidesPerView: 7,
                        spaceBetween: 16,
                        initialSlide: 1,
                        modules: [ea.FJ, ea.U1],
                        freeMode: { enabled: !0, sticky: !0 },
                        mousewheel: { forceToAxis: !0, sensitivity: 0.3, thresholdDelta: 5 },
                        className: (0, C.$)(er().root, t),
                        wrapperClass: er().wrapper,
                        onSwiper: d,
                        onRealIndexChange: l,
                        onSliderMove: o,
                        onTransitionEnd: c,
                        children: r.map((e, t) => {
                            let i = ((e, t, i) => {
                                    let a = Math.abs(e - t);
                                    return Math.min(a, i - a);
                                })(t, a, r.length),
                                n = ((e, t, i) => {
                                    let a = e - t;
                                    return Math.abs(a) <= i / 2 ? (a < 0 ? 'above' : 'below') : a < 0 ? 'below' : 'above';
                                })(t, a, r.length),
                                s = u(t, i);
                            return (0, N.jsx)(
                                en.qr,
                                {
                                    className: (0, C.$)(
                                        er().slide,
                                        ((e, t) =>
                                            e < 1
                                                ? er().slide_active
                                                : e < 2
                                                  ? er().slide_near
                                                  : e < 3
                                                    ? er().slide_medium
                                                    : e < 4
                                                      ? (0, C.$)(er().slide_far, er()['slide_far_'.concat(t)])
                                                      : (0, C.$)(er().slide_farthest, er()['slide_farthest_'.concat(t)]))(i, n),
                                    ),
                                    onClick: s,
                                    children: (0, N.jsx)(eb, { item: e, shouldActionOnClick: i < 3 }),
                                },
                                e.getKey(t),
                            );
                        }),
                    });
                };
            var eg = i(44837),
                eh = i.n(eg),
                ex = i(817);
            let ey = (e, t, i) => Math.min(Math.max(e, t), i),
                ef = (e) => ((e % 360) + 360) % 360,
                eN = (e, t, i) => 'hsl('.concat(e, ', ').concat(t, '%, ').concat(i, '%)');
            var eC = i(24435),
                ej = i.n(eC);
            let eS = (e) => {
                let { color: t } = e;
                return (0, N.jsx)('div', {
                    className: ej().root,
                    style: ((e) => {
                        let { h: t, s: i, l: a } = (0, ex.g)(e);
                        return {
                            '--petal-top-color': eN(ef(t), ey(i + 30, 0, 100), ey(a + 5, 0, 100)),
                            '--petal-bottom-color': eN(ef(t - 25), ey(i + 5, 0, 100), ey(a + 25, 0, 100)),
                            '--petal-middle-color': eN(ef(t + 20), ey(i + 20, 0, 100), ey(a - 5, 0, 100)),
                            '--petal-border-color': eN(ef(t + 10), ey(i + 25, 0, 100), ey(a + 25, 0, 100)),
                        };
                    })(t),
                });
            };
            var eA = i(75691),
                eE = i.n(eA);
            let eM = (e) => {
                    let { item: t } = e,
                        i = (0, X.L)(() => {
                            switch (t.type) {
                                case n.WAVE:
                                    return (0, N.jsx)(ep, { vibe: t.data });
                                case n.ALBUM:
                                    return (0, N.jsx)(eu, { album: t.data });
                                case n.PROMO_LINK:
                                    return (0, N.jsx)(e_, { promoLink: t.data });
                            }
                        }),
                        a = (0, X.L)(() => {
                            switch (t.type) {
                                case n.WAVE:
                                    var e;
                                    return (null == (e = t.data.agent) ? void 0 : e.cover.color) || ei;
                                case n.ALBUM:
                                    return t.data.averageColor || ei;
                                case n.PROMO_LINK:
                                    return t.data.color || ei;
                                default:
                                    return ei;
                            }
                        });
                    return (0, N.jsxs)('div', {
                        className: eE().root,
                        children: [(0, N.jsx)(eS, { color: a }), (0, N.jsx)('div', { className: eE().content, children: i })],
                    });
                },
                eI = (e) => {
                    let { className: t, items: i } = e,
                        a = i.length,
                        [n, s] = (0, A.useState)(a),
                        [r, l] = (0, A.useState)(null),
                        o = (0, A.useMemo)(() => ((e) => [...e, ...e, ...e])(i), [i]),
                        c = (0, T.c)((e) => {
                            s(e.realIndex);
                        }),
                        d = (0, T.c)((e) => {
                            s(e.realIndex);
                        }),
                        u = (0, T.c)((e) => {
                            s(e.realIndex);
                        }),
                        m = (0, T.c)((e) => {
                            l(e.clickedIndex);
                        }),
                        _ = (0, T.c)(() => {
                            l(null);
                        });
                    return (0, N.jsx)(en.RC, {
                        direction: 'horizontal',
                        centeredSlides: !0,
                        slideToClickedSlide: !0,
                        loopAdditionalSlides: 4,
                        slidesPerView: 4,
                        spaceBetween: 0,
                        initialSlide: a,
                        modules: [ea.U1],
                        freeMode: { enabled: !0, sticky: !0 },
                        className: (0, C.$)(eh().root, t),
                        wrapperClass: eh().wrapper,
                        virtualTranslate: !0,
                        onRealIndexChange: c,
                        onSliderMove: d,
                        onTransitionEnd: u,
                        onTap: m,
                        children: o.map((e, t) => {
                            let i = Math.abs(t - n);
                            return (0, N.jsx)(
                                en.qr,
                                {
                                    className: (0, C.$)(
                                        eh().slide,
                                        ((e, t) =>
                                            e < 1
                                                ? eh().slide_active
                                                : e < 2
                                                  ? (0, C.$)(eh().slide_near, eh()['slide_near_'.concat(t)])
                                                  : e < 3
                                                    ? (0, C.$)(eh().slide_medium, eh()['slide_medium_'.concat(t)])
                                                    : (0, C.$)(eh().slide_far, eh()['slide_far_'.concat(t)]))(i, t < n ? 'above' : 'below'),
                                        { [eh().slide_tap]: t === r },
                                    ),
                                    onAnimationEnd: _,
                                    children: (0, N.jsx)(eM, { item: e }),
                                },
                                e.getKey(t),
                            );
                        }),
                    });
                },
                eT = (0, j.PA)((e) => {
                    let { className: t } = e,
                        {
                            vibeWheel: i,
                            settings: { isMobile: a },
                        } = (0, l.Pjs)();
                    return (i.getData(), a) ? (0, N.jsx)(eI, { className: t, items: i.items }) : (0, N.jsx)(ev, { className: t, items: i.items });
                });
            var ew = i(18467),
                eV = i.n(ew),
                ek = i(22674),
                eO = i(63695);
            let eB = { minFontSize: 24, maxFontSize: 64, maxLines: 2, lineHeight: 1.1 },
                eR = { minFontSize: 48, maxFontSize: 200, maxLines: 5, lineHeight: 1.1 },
                eP = { maxFontSize: 20, minFontSize: 14, lineHeight: 1 };
            var eL = i(29064),
                eW = i(58360),
                eK = i(23296),
                ez = i.n(eK);
            let eU = (0, j.PA)((e) => {
                let { album: t, className: i } = e,
                    a = (0, eo.r_)(t.type),
                    n = ''.concat(a, ' ').concat(t.title);
                return (0, N.jsx)(W.N_, {
                    href: t.url,
                    className: (0, C.$)(ez().root, i),
                    'aria-label': n,
                    children: (0, N.jsx)(eW.Image, { src: t.coverUri, className: ez().cover, fit: 'cover', size: 400, withAvatarReplace: !0, alt: n, 'aria-hidden': !0 }),
                });
            });
            var eD = i(58202),
                eF = i.n(eD);
            let eG = (0, j.PA)((e) => {
                var t;
                let { artist: i } = e,
                    { formatMessage: a } = (0, K.A)(),
                    n = null == (t = i.cutoutCover) ? void 0 : t.uri,
                    s = i.coverUri,
                    r = a({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                    l = (0, X.L)(() =>
                        n
                            ? (0, N.jsx)(eW.Image, {
                                  className: (0, C.$)(eF().root, eF().cutout),
                                  fit: 'contain',
                                  src: n,
                                  size: 400,
                                  withAvatarReplace: !0,
                                  alt: r,
                                  'aria-hidden': !0,
                              })
                            : s
                              ? (0, N.jsx)(W.jL, {
                                    className: (0, C.$)(eF().root, eF().circle),
                                    fit: 'cover',
                                    src: s,
                                    maskSrc: 'avatars.mds.yandex.net/get-music-misc/70683/img.6985fe688f488f26128bbd64/%%',
                                    size: 400,
                                    withAvatarReplace: !0,
                                    alt: r,
                                    'aria-hidden': !0,
                                })
                              : null,
                    );
                return l ? (0, N.jsx)(W.N_, { className: eF().root, href: i.url, 'aria-label': r, children: l }) : null;
            });
            var e$ = {
                    5969: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0);
                        let a = i(810),
                            n = (e) => {
                                (e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && n(e);
                                    });
                            };
                        (t.findOptimalFontSize = (e) => {
                            let { container: t, containerWidth: i, containerHeight: a, minFontSize: s, maxFontSize: r, lineHeight: l, maxLines: o } = e,
                                c = ((e, t, i) => {
                                    let a = e.cloneNode(!0);
                                    return (
                                        (a.style.cssText =
                                            '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                t,
                                                'px !important;\n    ',
                                            )),
                                        n(a),
                                        a.style.setProperty('--dynamic-line-height', String(i)),
                                        document.body.appendChild(a),
                                        a
                                    );
                                })(t, i, l);
                            try {
                                let e = s,
                                    t = r,
                                    n = s;
                                for (; e <= t; ) {
                                    let s = Math.floor((e + t) / 2);
                                    c.style.setProperty('--dynamic-font-size', ''.concat(s, 'px'));
                                    let r = 'number' == typeof o ? c.scrollHeight <= Math.min(o * s * l, a) : c.scrollHeight <= a,
                                        d = c.scrollWidth <= i + 1;
                                    r && d ? ((n = s), (e = s + 1)) : (t = s - 1);
                                }
                                return n - 1;
                            } finally {
                                c.remove();
                            }
                        }),
                            (t.useDynamicText = (e, i) => {
                                (0, a.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(i.lineHeight));
                                    let a = () => {
                                            let { width: a, height: n } = e.getBoundingClientRect(),
                                                s = e.childNodes.length > 0;
                                            if (0 === a || 0 === n || !s) return;
                                            let r = (0, t.findOptimalFontSize)({ container: e, containerWidth: a, containerHeight: n, ...i });
                                            e.style.setProperty('--dynamic-font-size', ''.concat(r, 'px'));
                                        },
                                        n = new ResizeObserver(a),
                                        s = new MutationObserver(a);
                                    return (
                                        n.observe(e),
                                        s.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(a),
                                        a(),
                                        () => {
                                            n.disconnect(), s.disconnect();
                                        }
                                    );
                                }, [e, i]);
                            });
                    },
                    810: (e) => {
                        e.exports = E;
                    },
                },
                eH = {},
                eX = (function e(t) {
                    var i = eH[t];
                    if (void 0 !== i) return i.exports;
                    var a = (eH[t] = { exports: {} });
                    return e$[t](a, a.exports, e), a.exports;
                })(5969);
            eX.__esModule, eX.findOptimalFontSize;
            var eq = eX.useDynamicText,
                eY = i(82682),
                eJ = i.n(eY);
            let eQ = (e) => {
                let { hasCover: t, children: i } = e,
                    [a, n] = (0, w.d)();
                return eq(a, t ? eB : eR), (0, N.jsx)('div', { ref: n, className: eJ().root, children: i });
            };
            var eZ = i(86298),
                e0 = i.n(eZ);
            let e1 = (e) => {
                let { context: t, onClick: i, className: a } = e,
                    { formatMessage: n } = (0, K.A)(),
                    [s, r] = (0, w.d)();
                eq(s, eP);
                let l = n({ id: 'interface-actions.reset-context' }, { context: t });
                return (0, N.jsx)('div', {
                    className: (0, C.$)(e0().container, a),
                    ref: r,
                    children: (0, N.jsxs)(k.$, {
                        className: e0().root,
                        radius: 'xxxl',
                        withHover: !1,
                        withRipple: !1,
                        onClick: i,
                        'aria-label': l,
                        children: [
                            (0, N.jsx)(O.Caption, { variant: 'span', className: e0().context, lineClamp: 2, children: t }),
                            (0, N.jsx)(z.Icon, { variant: 'close_filled', size: 'xs', className: e0().icon }),
                        ],
                    }),
                });
            };
            var e2 = i(47486),
                e6 = i.n(e2);
            let e3 = (0, j.PA)((e) => {
                    var t, i, a, n, s, r, o;
                    let { className: c } = e,
                        { sonataState: d, experiments: u } = (0, l.Pjs)(),
                        { pageId: m } = (0, l.$au)(),
                        { blockIdForFrom: _ } = (0, l.N8n)(),
                        { resetSettings: p } = (0, l.B0S)({ seeds: [l.M19], pageIdForFrom: m, blockIdForFrom: _ }),
                        b = (() => {
                            var e, t, i, a, n, s;
                            let { sonataState: r } = (0, l.Pjs)(),
                                o = (0, l.eGp)(),
                                { formatMessage: c } = (0, K.A)(),
                                d = null == o ? void 0 : o.state.currentContext.value,
                                u = null == o ? void 0 : o.state.queueState.currentEntity.value,
                                m = null == u ? void 0 : u.sourceContext;
                            if (!(null == d ? void 0 : d.data.type)) return;
                            let _ = (function (e, t) {
                                switch (t) {
                                    case eL.h.SEARCH:
                                        return e({ id: 'entity-names.search' });
                                    case eL.h.MUSIC_HISTORY:
                                    case eL.h.MUSIC_HISTORY_SEARCH:
                                        return e({ id: 'entity-names.music-history' });
                                    case eL.h.DOWNLOADED_TRACKS:
                                    case eL.h.USER_TRACKS:
                                        return e({ id: 'entity-names.collection' });
                                    case eL.h.ARTIST_FAMILIAR_FROM_WAVE:
                                        return e({ id: 'page.familiar-vibe' });
                                    case eL.h.ARTIST_MY_COLLECTION:
                                        return e({ id: 'page.familiar-collection' });
                                    default:
                                        return;
                                }
                            })(c, null == m ? void 0 : m.data.sourceContextType);
                            if (_) return _;
                            switch (d.data.type) {
                                case el.K.Album:
                                    if (null == (e = r.entityMeta) ? void 0 : e.isPodcast) return c({ id: 'entity-names.podcast' });
                                    if (null == (t = r.entityMeta) ? void 0 : t.isAudiobook) return c({ id: 'entity-names.book' });
                                    if (null == (i = r.entityMeta) ? void 0 : i.isFairyTale) return c({ id: 'entity-names.fairytale' });
                                    return d.data.meta.title;
                                case el.K.Playlist:
                                    return d.data.meta.title;
                                case el.K.Vibe: {
                                    let e = null == (a = d.data.meta.session) ? void 0 : a.wave;
                                    if ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === l.M19) return;
                                    return null == e ? void 0 : e.name;
                                }
                                case el.K.Artist:
                                    return c({ id: 'entity-names.artist-popular-tracks' });
                                case el.K.Various:
                                    return null == (s = r.entityMeta) || null == (n = s.mainAlbum) ? void 0 : n.title;
                                case el.K.Generative:
                                    return c({ id: 'entity-names.generative' });
                                default:
                                    return;
                            }
                        })(),
                        v = null == (t = d.entityMeta) ? void 0 : t.mainArtist,
                        g = null == (i = d.entityMeta) ? void 0 : i.mainAlbum,
                        h = null == (a = d.entityMeta) ? void 0 : a.artists,
                        x = !!(null == (n = d.entityMeta) ? void 0 : n.isNonUserGenerated),
                        y = !!(null == (s = d.entityMeta) ? void 0 : s.isNonMusic),
                        f = d.isGenerativeContext,
                        j = !!((null == v ? void 0 : v.coverUri) && !v.isCoverFromAlbum && x),
                        S = j && v,
                        A = j ? eB : eR,
                        E = (0, X.L)(() => {
                            var e;
                            return u.checkExperiment(l.zal.WebNextShaderFallbackEnabled, 'on')
                                ? (0, N.jsx)(P, { className: e6().vibeAnimation })
                                : (0, N.jsx)(L, {
                                      className: e6().vibeAnimation,
                                      averageColor: (null == (e = d.entityMeta) ? void 0 : e.averageColor) || ei,
                                      hasCover: j,
                                  });
                        }),
                        M = (0, X.L)(() => {
                            var e;
                            return y && g
                                ? (0, N.jsx)(W.N_, {
                                      href: g.url,
                                      className: e6().text,
                                      children: (0, N.jsx)(O.Caption, { variant: 'span', className: e6().text, lineClamp: A.maxLines, children: g.title }),
                                  })
                                : f && (null == (e = d.entityMeta) ? void 0 : e.title)
                                  ? (0, N.jsx)(O.Caption, { variant: 'span', className: e6().text, lineClamp: A.maxLines, children: d.entityMeta.title })
                                  : h
                                    ? (0, N.jsx)(eO.iQ, {
                                          artists: h,
                                          captionClassName: e6().text,
                                          linkClassName: e6().text,
                                          className: e6().text,
                                          lineClamp: A.maxLines,
                                          withLink: x,
                                          variant: 'breakWord',
                                      })
                                    : null;
                        }),
                        I = (0, X.L)(() =>
                            d.entityMeta
                                ? (0, N.jsxs)(N.Fragment, {
                                      children: [
                                          (0, N.jsx)('div', {
                                              className: (0, C.$)(e6().textContainer, { [e6().textContainer_withCover]: j }),
                                              children: (0, N.jsx)(eQ, { hasCover: j, children: M }),
                                          }),
                                          S && (0, N.jsx)(eG, { artist: v }),
                                          g && (0, N.jsx)(eU, { album: g, className: (0, C.$)(e6().albumCover, { [e6().albumCover_withCover]: j }) }),
                                      ],
                                  })
                                : (0, N.jsxs)(N.Fragment, {
                                      children: [
                                          (0, N.jsx)('div', {
                                              className: e6().textContainer,
                                              children: (0, N.jsx)(ek.Shimmer, { isActive: !0, className: e6().shimmerText, radius: 'xxxl' }),
                                          }),
                                          (0, N.jsx)(ek.Shimmer, { isActive: !0, className: e6().shimmerArtistCover, radius: 'round' }),
                                          (0, N.jsx)(ek.Shimmer, { isActive: !0, className: (0, C.$)(e6().albumCover, e6().shimmerAlbumCover), radius: 'l' }),
                                      ],
                                  }),
                        );
                    return (0, N.jsx)('div', {
                        className: (0, C.$)(e6().root, { [e6().root_withCover]: j }, c),
                        children: (0, N.jsxs)('div', {
                            className: (0, C.$)(e6().artist, { [e6().artist_withCover]: j }),
                            children: [
                                E,
                                b && (0, N.jsx)(e1, { context: b, onClick: p, className: (0, C.$)(e6().context, { [e6().context_withCover]: j }) }),
                                (0, N.jsx)(
                                    'div',
                                    { className: e6().entityMeta, children: I },
                                    null != (o = null == (r = d.entityMeta) ? void 0 : r.idWithContext) ? o : 'default',
                                ),
                            ],
                        }),
                    });
                }),
                e4 = (0, j.PA)(() => {
                    var e;
                    let { sonataState: t } = (0, l.Pjs)();
                    return (0, N.jsxs)('div', {
                        className: eV().root,
                        style: ((e) => {
                            if (!e) return { '--vibe-widget-background-color': ei };
                            let { h: t, s: i, l: a } = (0, l.g8k)(e);
                            return {
                                '--vibe-widget-background-color': 'hsl('
                                    .concat(t, ', ')
                                    .concat(i + 15, '%, ')
                                    .concat(a + 5, '%)'),
                                '--vibe-widget-text-color': 'hsla('.concat(t, ', ').concat(i, '%, 90%, 0.9)'),
                            };
                        })(null == (e = t.entityMeta) ? void 0 : e.averageColor),
                        children: [(0, N.jsx)(e3, { className: eV().meta }), (0, N.jsx)(eT, { className: eV().wheel })],
                    });
                });
        },
        44837: (e) => {
            e.exports = {
                root: 'VibeWheelMobile_root__JGj90',
                wrapper: 'VibeWheelMobile_wrapper__QPL3b',
                slide: 'VibeWheelMobile_slide__qGUJw',
                slide_active: 'VibeWheelMobile_slide_active__Dl9y9',
                slide_near_above: 'VibeWheelMobile_slide_near_above__LkUkg',
                slide_near_below: 'VibeWheelMobile_slide_near_below__vh4Cx',
                slide_medium_above: 'VibeWheelMobile_slide_medium_above__9XQLe',
                slide_medium_below: 'VibeWheelMobile_slide_medium_below__8sZ_X',
                slide_far: 'VibeWheelMobile_slide_far__4AUTV',
                slide_far_above: 'VibeWheelMobile_slide_far_above__25Ub_',
                slide_far_below: 'VibeWheelMobile_slide_far_below__ijILk',
                slide_tap: 'VibeWheelMobile_slide_tap__N74Rm',
                'tap-scale': 'VibeWheelMobile_tap-scale__JDdoq',
            };
        },
        47198: (e) => {
            e.exports = {
                content: 'MainPage_content__kskSM',
                root: 'MainPage_root__STXqc',
                container: 'MainPage_container__CB86l',
                vibe: 'MainPage_vibe__XEBbh',
                vibeWidgetContainer: 'MainPage_vibeWidgetContainer__i5T4X',
                landing: 'MainPage_landing___FGNm',
                actionsContainer: 'MainPage_actionsContainer__t90JB',
                beta: 'MainPage_beta__y32vb',
                beta_withReleaseNotes: 'MainPage_beta_withReleaseNotes__WOjUk',
                userProfile: 'MainPage_userProfile__8JzS3',
                specialHeaderContainer: 'MainPage_specialHeaderContainer__L3C6E',
                specialHeader: 'MainPage_specialHeader__aqdvj',
                specialHeaderImage: 'MainPage_specialHeaderImage__4GlXq',
                footer: 'MainPage_footer__2rGy2',
                error: 'MainPage_error__u_UCm',
            };
        },
        47486: (e) => {
            e.exports = {
                root: 'VibeWidgetMeta_root__7N4Yf',
                root_withCover: 'VibeWidgetMeta_root_withCover__aQm_j',
                artist: 'VibeWidgetMeta_artist__qN0Fe',
                artist_withCover: 'VibeWidgetMeta_artist_withCover__sDztn',
                entityMeta: 'VibeWidgetMeta_entityMeta__7cqgc',
                'meta-fade-in': 'VibeWidgetMeta_meta-fade-in__yziTr',
                textContainer: 'VibeWidgetMeta_textContainer__e_3Ml',
                textContainer_withCover: 'VibeWidgetMeta_textContainer_withCover__confd',
                context: 'VibeWidgetMeta_context__4eHas',
                context_withCover: 'VibeWidgetMeta_context_withCover__3P6de',
                text: 'VibeWidgetMeta_text__nTf_a',
                vibeAnimation: 'VibeWidgetMeta_vibeAnimation__0g1lF',
                albumCover: 'VibeWidgetMeta_albumCover__byakX',
                albumCover_withCover: 'VibeWidgetMeta_albumCover_withCover__qeld2',
                shimmerText: 'VibeWidgetMeta_shimmerText__Ys6fk',
                shimmerArtistCover: 'VibeWidgetMeta_shimmerArtistCover__7YpZ5',
                shimmerAlbumCover: 'VibeWidgetMeta_shimmerAlbumCover__Tbur8',
            };
        },
        58202: (e) => {
            e.exports = { root: 'VibeWidgetArtistCover_root__t7N4A', cutout: 'VibeWidgetArtistCover_cutout__82qxa', circle: 'VibeWidgetArtistCover_circle__NnPhZ' };
        },
        65061: (e) => {
            e.exports = {
                button: 'RestrictionButton_button__eLMkU',
                button_selected: 'RestrictionButton_button_selected__LHD20',
                button_applying: 'RestrictionButton_button_applying___ik5f',
                'applying-setting': 'RestrictionButton_applying-setting__utqyc',
                diversityButton: 'RestrictionButton_diversityButton__uclSi',
                diversityButtonImage: 'RestrictionButton_diversityButtonImage__21oME',
                moodEnergy: 'RestrictionButton_moodEnergy__q_I4y',
                moodEnergyButton: 'RestrictionButton_moodEnergyButton__yKkaS',
                moodEnergyButtonImage: 'RestrictionButton_moodEnergyButtonImage__zxT2C',
                textButton: 'RestrictionButton_textButton__HC_AE',
                title: 'RestrictionButton_title__UZn0O',
                specialButton: 'RestrictionButton_specialButton__Di6B9',
                specialImage: 'RestrictionButton_specialImage__0E3x2',
                rippleContainer: 'RestrictionButton_rippleContainer__xPANO',
                ripple: 'RestrictionButton_ripple__Rsu8b',
            };
        },
        65969: (e) => {
            e.exports = {
                root: 'VibeWheelDesktop_root__zxYkU',
                wrapper: 'VibeWheelDesktop_wrapper__NZRW5',
                slide: 'VibeWheelDesktop_slide__ru5t7',
                slide_active: 'VibeWheelDesktop_slide_active__gqzVj',
                slide_near: 'VibeWheelDesktop_slide_near__wKRG1',
                slide_medium: 'VibeWheelDesktop_slide_medium__jUXf2',
                slide_far: 'VibeWheelDesktop_slide_far__C_LPY',
                slide_far_above: 'VibeWheelDesktop_slide_far_above__cc3bS',
                slide_far_below: 'VibeWheelDesktop_slide_far_below__PCBXB',
                slide_farthest: 'VibeWheelDesktop_slide_farthest__LPdKz',
                slide_farthest_above: 'VibeWheelDesktop_slide_farthest_above__uKizL',
                slide_farthest_below: 'VibeWheelDesktop_slide_farthest_below__z_SaI',
            };
        },
        75691: (e) => {
            e.exports = { root: 'VibeWheelMobileItem_root__k0_M9', content: 'VibeWheelMobileItem_content__joXin' };
        },
        77901: (e) => {
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
        82682: (e) => {
            e.exports = { root: 'VibeWidgetDynamicArtists_root__kPBES' };
        },
        86298: (e) => {
            e.exports = {
                root: 'VibeWidgetResetButton_root__HeN9Q',
                container: 'VibeWidgetResetButton_container__2WpVx',
                icon: 'VibeWidgetResetButton_icon__Q_fRl',
                context: 'VibeWidgetResetButton_context__5b0JR',
            };
        },
        87709: (e) => {
            e.exports = {
                root: 'VibeRestrictions_root__efJez',
                diversity: 'VibeRestrictions_diversity__qfOls',
                moodEnergy: 'VibeRestrictions_moodEnergy__Le0Cy',
                contextItems: 'VibeRestrictions_contextItems__JrF7D',
            };
        },
        94540: (e, t, i) => {
            'use strict';
            i.d(t, { MainPage: () => I });
            var a = i(54486),
                n = i(50420),
                s = i(28303),
                r = i(97396),
                l = i(61910),
                o = i(43426),
                c = i(31500),
                d = i(6024),
                u = i(67648),
                m = i(27510),
                _ = i(77881),
                p = i(58360),
                b = i(56231),
                v = i(93666),
                g = i(97800),
                h = i(6664),
                x = i(82644),
                y = i(37281),
                f = i(65779),
                N = i(33276),
                C = i(54830),
                j = i(49320),
                S = i(83252),
                A = i(80585),
                E = i(47198),
                M = i.n(E);
            let I = (0, s.PA)((e) => {
                var t, i;
                let { withVideoModal: s } = e,
                    {
                        main: E,
                        user: I,
                        experiments: T,
                        releaseNotes: w,
                        fullscreenVideoPlayer: V,
                        settings: { isMobile: k },
                    } = (0, S.Pjs)(),
                    { formatMessage: O } = (0, o.A)(),
                    B = (0, S.HFS)(),
                    { contentScrollRef: R, setContentScrollRef: P } = (0, S.gKY)(),
                    [L, W] = (0, u.d)(),
                    K = (0, r.useSearchParams)(),
                    z = K.get(S.K3F.IDS),
                    U = K.get(S.K3F.ACTIVE_INDEX),
                    { clipIds: D, activeClipIndex: F } = (0, f.V1)(z, U),
                    G = (0, C.df)(),
                    $ = (0, C.Cc)(),
                    { theme: H } = (0, S.DPo)(),
                    X = T.checkExperiment(S.zal.WebNextNewWaveTab, 'on'),
                    q = (0, S.ZpR)(null != (i = null == (t = E.specialHeader) ? void 0 : t.url) ? i : '');
                (0, l.useLayoutEffect)(() => {
                    s && G && ($(D, F), V.setOpenedFromMain());
                }, [s, G, V, D, F, $]),
                    (0, l.useEffect)(
                        () => () => {
                            E.reset(), X || E.landing.reset();
                        },
                        [E, E.landing, X],
                    ),
                    (0, S.Jzs)(E.landing.isResolved);
                let Y = T.checkExperiment(S.zal.WebNextDisableVibe, 'on'),
                    J = (0, l.useCallback)(() => {
                        w.isReady && w.modal.open();
                    }, [w.isReady, w.modal]),
                    Q = (0, l.useMemo)(() => (Y ? { 'margin-block-start': '1vh' } : {}), [Y]),
                    Z = (0, l.useMemo)(() => {
                        if (T.checkExperiment(S.zal.WebNextBetaLabel, 'off')) return null;
                        {
                            let e = T.checkExperiment(S.zal.WebNextBetaLabel, 'version'),
                                t = O({ id: 'desktop.app-version' }, { version: B }),
                                i = e ? B : 'Beta';
                            return (0, a.jsxs)(v.m_, {
                                placement: 'left',
                                offsetOptions: 4,
                                children: [
                                    (0, a.jsx)(_.$, {
                                        color: 'secondary',
                                        radius: 'xl',
                                        'aria-label': e ? t : 'Beta '.concat(t),
                                        className: (0, n.$)(M().beta, { [M().beta_withReleaseNotes]: w.isReady }),
                                        onClick: J,
                                        children: (0, a.jsx)(g.Caption, { variant: 'div', type: 'text', size: 's', weight: 'medium', children: i }),
                                    }),
                                    (0, a.jsx)(v.ZI, { children: B }),
                                ],
                            });
                        }
                    }, [T, O, J, w.isReady, B]),
                    ee = (0, l.useMemo)(() => {
                        if (!E.specialHeader) return {};
                        let e = H === S.Sxu.Light ? E.specialHeader.lightTheme : E.specialHeader.darkTheme;
                        return { '--special-button-background': e.backgroundColor, '--special-button-color': e.textColor };
                    }, [E.specialHeader, H]),
                    et = (0, m.L)(() => {
                        let e = T.checkExperiment(S.zal.WebNextRewind2024, 'on');
                        return E.specialHeader
                            ? (0, a.jsxs)('div', {
                                  className: M().specialHeaderContainer,
                                  children: [
                                      e &&
                                          (0, a.jsx)(p.Image, {
                                              src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69203c15cffc41172f18a125/orig',
                                              withAvatarReplace: !0,
                                              className: M().specialHeaderImage,
                                              fit: 'contain',
                                          }),
                                      (0, a.jsx)(_.$, {
                                          color: 'secondary',
                                          size: 'default',
                                          radius: 'xxxl',
                                          role: 'link',
                                          className: M().specialHeader,
                                          withHover: !1,
                                          style: ee,
                                          onClick: q,
                                          children: E.specialHeader.title,
                                      }),
                                  ],
                              })
                            : null;
                    }),
                    ei = (0, m.L)(() =>
                        X
                            ? null
                            : T.checkExperiment(S.zal.WebNextFooterDisclaimer, 'on')
                              ? (0, a.jsx)(A.wi, { className: M().footer })
                              : (0, a.jsx)(A.A, { children: (0, a.jsx)(A.wi, { className: M().footer }) }),
                    );
                if (E.landing.isNeededToLoad && !X) {
                    let e = I.isAuthorized ? d.p.MAIN : d.p.MAIN_NOLOGIN,
                        t = [E.landing.getSkeleton({ id: e, showWizard: I.settings.showWizard }, { preloadBlocksCount: 2 }), E.getSpecialHeader()];
                    (0, l.use)(Promise.allSettled(t));
                }
                s && !G && (0, r.notFound)();
                let ea = (0, m.L)(() =>
                    X
                        ? (0, a.jsxs)('div', {
                              className: M().vibeWidgetContainer,
                              ...(0, c.Am)(c.Xk.main.MAIN_PAGE),
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: M().actionsContainer,
                                      children: [k && (0, a.jsx)(j.YS, { withMeta: !1, variant: 'mobile', className: M().userProfile }), Z],
                                  }),
                                  (0, a.jsx)(y.jF, {}),
                              ],
                          })
                        : (0, a.jsx)(N.hO, {
                              scrollElement: R,
                              headerElement: L,
                              children: (0, a.jsxs)(b.N, {
                                  className: M().root,
                                  containerClassName: M().content,
                                  ref: P,
                                  ...(0, c.Am)(c.Xk.main.MAIN_PAGE),
                                  children: [
                                      (0, a.jsxs)('div', { className: M().actionsContainer, children: [et, Z] }),
                                      !Y &&
                                          (0, a.jsx)(S.FoH, {
                                              blockIdForFrom: S.hf$.RUP_MAIN_RADIO,
                                              blockId: S.UfI.RUP,
                                              blockType: S.UfI.RUP,
                                              blockPosX: 0,
                                              blockPosY: 0,
                                              objectsCount: 0,
                                              children: (0, a.jsx)(y.CT, { className: M().vibe }),
                                          }),
                                      (0, a.jsx)(h.EA, {
                                          landing: E.landing,
                                          headerConcealerComponent: (0, a.jsx)('div', { ref: W }),
                                          errorComponent: (0, a.jsx)(x.w, { className: M().error, withBackwardControl: !1 }),
                                          containerClassName: M().landing,
                                          containerStyle: Q,
                                          tabWithHeadingTitle: !0,
                                          tabWithCovers: !0,
                                          tabWithSubtitle: !0,
                                      }),
                                      ei,
                                  ],
                              }),
                          }),
                );
                return (0, a.jsx)(S.nVz, { pageId: S._Q$.HOME, children: (0, a.jsx)(S.rtM, { page: S.l7W.HOME_SCREEN, places: [S.RBW.MY_WAVE], children: ea }) });
            });
        },
    },
]);
