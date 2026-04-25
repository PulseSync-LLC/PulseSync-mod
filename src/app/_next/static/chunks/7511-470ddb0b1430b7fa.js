(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7511],
    {
        410: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopPoster_root__d__YD', cover: 'FullscreenPlayerDesktopPoster_cover__CDmhM' };
        },
        5379: (e) => {
            e.exports = {
                root: 'QualitySettingsModal_root__f3gE2',
                modalContent: 'QualitySettingsModal_modalContent__R_JNT',
                overlay: 'QualitySettingsModal_overlay__8pjOO',
                button: 'QualitySettingsModal_button__BCHBi',
            };
        },
        6562: (e) => {
            e.exports = { root: 'PlayerBar_root__cXUnU', adPopup: 'PlayerBar_adPopup__BrBC6' };
        },
        9602: (e) => {
            e.exports = {
                imageContainer: 'AudioAd_imageContainer__ZmZsg',
                image: 'AudioAd_image__f6DJR',
                image_fallback: 'AudioAd_image_fallback__7ufC3',
                backgroundImage: 'AudioAd_backgroundImage__aqvQd',
                contextMenuButton: 'AudioAd_contextMenuButton__fbb47',
                contextMenuIcon: 'AudioAd_contextMenuIcon__KTxE1',
                contextMenuHeader: 'AudioAd_contextMenuHeader__97XqU',
            };
        },
        10163: (e, t, a) => {
            'use strict';
            a.d(t, { s$: () => q, zP: () => X, LL: () => m });
            var i = a(42561),
                n = a(51606),
                r = a(54690);
            let s = (e) => {
                    let { type: t, tag: a } = e.id;
                    return { title: e.name, seed: ''.concat(t, ':').concat(a), specialContext: e.specialContext, specialContextImage: e.specialContextImage };
                },
                o = (e, t) => {
                    let a = [];
                    return (
                        t.possibleValues.forEach((e) => {
                            e.unspecified || a.push(((e) => ({ value: e.value, title: e.name, seed: e.serializedSeed, imageUrl: e.imageUrl }))(e));
                        }),
                        { type: e, title: t.name, values: (0, n.wg)(a) }
                    );
                };
            var l = (function (e) {
                return (e.DIVERSITY = 'diversity'), (e.MOOD_ENERGY = 'moodEnergy'), (e.LANGUAGE = 'language'), e;
            })({});
            let c = n.gK.model('ContextItem', {
                    title: n.gK.string,
                    seed: n.gK.string,
                    specialContext: n.gK.boolean,
                    specialContextImage: n.gK.optional(n.gK.string, ''),
                }),
                d = n.gK.model('RestrictonValue', { value: n.gK.string, title: n.gK.string, seed: n.gK.string, imageUrl: n.gK.maybe(n.gK.string) }),
                u = n.gK.model('Restricton', { type: n.gK.enumeration(Object.values(l)), title: n.gK.string, values: n.gK.array(d) }),
                m = n.gK
                    .compose(
                        n.gK.model('VibeSettings', {
                            contextItems: n.gK.array(c),
                            diversity: n.gK.maybeNull(u),
                            moodEnergy: n.gK.maybeNull(u),
                            language: n.gK.maybeNull(u),
                            modal: r.qt,
                        }),
                        r.XT,
                    )
                    .actions((e) => ({
                        getData: (0, n.L3)(function* (t) {
                            let { rotorResource: a, modelActionsLogger: r } = (0, n._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    var c, d, u, m;
                                    e.loadingState = i.GuX.PENDING;
                                    let r = yield a.waveSettings(t);
                                    (null == r || null == (c = r.settingRestrictions) ? void 0 : c.diversity) &&
                                        (e.diversity = o(l.DIVERSITY, r.settingRestrictions.diversity)),
                                        (null == r || null == (d = r.settingRestrictions) ? void 0 : d.moodEnergy) &&
                                            (e.moodEnergy = o(l.MOOD_ENERGY, r.settingRestrictions.moodEnergy)),
                                        (null == r || null == (u = r.settingRestrictions) ? void 0 : u.language) &&
                                            (e.language = o(l.LANGUAGE, r.settingRestrictions.language));
                                    let _ =
                                        Array.isArray(null == r ? void 0 : r.blocks) &&
                                        (null == r || null == (m = r.blocks) ? void 0 : m.find((e) => (null == e ? void 0 : e.type) === 'contexts'));
                                    _ && Array.isArray(_.items) && (e.contextItems = (0, n.wg)(_.items.map(s))),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE);
                                } catch (t) {
                                    r.error(t), e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE),
                                (e.contextItems = (0, n.wg)([])),
                                (e.diversity = null),
                                (e.moodEnergy = null),
                                (e.language = null),
                                e.modal.close();
                        },
                    }));
            var _ = a(62936),
                p = a(19718),
                v = a(44020),
                y = a.t(v, 2),
                h = a(47480),
                g = a(26731),
                x = a(8669),
                b = a(59935),
                f = {
                    4490: (e, t, a) => {
                        a.r(t), a.d(t, { DOWN: () => o, LEFT: () => n, RIGHT: () => r, UP: () => s, useSwipeable: () => _ });
                        var i = a(810);
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
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            d = 'mousemove',
                            u = 'mouseup';
                        function m(e, t) {
                            if (0 === t) return e;
                            let a = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(a) + e[1] * Math.sin(a), e[1] * Math.cos(a) - e[0] * Math.sin(a)];
                        }
                        function _(e) {
                            var t, a, _;
                            let p,
                                { trackMouse: v } = e,
                                y = i.useRef(Object.assign({}, c)),
                                h = i.useRef(Object.assign({}, l)),
                                g = i.useRef(Object.assign({}, h.current));
                            for (p in ((g.current = Object.assign({}, h.current)), (h.current = Object.assign(Object.assign({}, l), e)), l))
                                void 0 === h.current[p] && (h.current[p] = l[p]);
                            let [x, b] = i.useMemo(
                                () =>
                                    (function (e, t) {
                                        let a = (t) => {
                                                let a = 'touches' in t;
                                                (a && t.touches.length > 1) ||
                                                    e((e, n) => {
                                                        n.trackMouse && !a && (document.addEventListener(d, i), document.addEventListener(u, p));
                                                        let { clientX: r, clientY: s } = a ? t.touches[0] : t,
                                                            o = m([r, s], n.rotationAngle);
                                                        return (
                                                            n.onTouchStartOrOnMouseDown && n.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: o.slice(), xy: o, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            i = (t) => {
                                                e((e, a) => {
                                                    var i, c, d, u;
                                                    let _ = 'touches' in t;
                                                    if (_ && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > a.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: p, clientY: v } = _ ? t.touches[0] : t,
                                                        [y, h] = m([p, v], a.rotationAngle),
                                                        g = y - e.xy[0],
                                                        x = h - e.xy[1],
                                                        b = Math.abs(g),
                                                        f = Math.abs(x),
                                                        C = (t.timeStamp || 0) - e.start,
                                                        k = Math.sqrt(b * b + f * f) / (C || 1),
                                                        j = [g / (C || 1), x / (C || 1)],
                                                        A = ((i = b), (c = f), (d = g), (u = x), i > c ? (d > 0 ? r : n) : u > 0 ? o : s),
                                                        P = 'number' == typeof a.delta ? a.delta : a.delta[A.toLowerCase()] || l.delta;
                                                    if (b < P && f < P && !e.swiping) return e;
                                                    let N = {
                                                        absX: b,
                                                        absY: f,
                                                        deltaX: g,
                                                        deltaY: x,
                                                        dir: A,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: k,
                                                        vxvy: j,
                                                    };
                                                    N.first && a.onSwipeStart && a.onSwipeStart(N), a.onSwiping && a.onSwiping(N);
                                                    let S = !1;
                                                    return (
                                                        (a.onSwiping || a.onSwiped || a['onSwiped'.concat(A)]) && (S = !0),
                                                        S && a.preventScrollOnSwipe && a.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: N, swiping: !0 })
                                                    );
                                                });
                                            },
                                            _ = (t) => {
                                                e((e, a) => {
                                                    let i;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < a.swipeDuration) {
                                                            (i = Object.assign(Object.assign({}, e.eventData), { event: t })), a.onSwiped && a.onSwiped(i);
                                                            let n = a['onSwiped'.concat(i.dir)];
                                                            n && n(i);
                                                        }
                                                    } else a.onTap && a.onTap({ event: t });
                                                    return (
                                                        a.onTouchEndOrOnMouseUp && a.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: i })
                                                    );
                                                });
                                            },
                                            p = (e) => {
                                                document.removeEventListener(d, i), document.removeEventListener(u, p), _(e);
                                            },
                                            v = (e, t) => {
                                                let n = () => {};
                                                if (e && e.addEventListener) {
                                                    let r = Object.assign(Object.assign({}, l.touchEventOptions), t.touchEventOptions),
                                                        s = [
                                                            ['touchstart', a, r],
                                                            ['touchmove', i, Object.assign(Object.assign({}, r), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', _, r],
                                                        ];
                                                    s.forEach((t) => {
                                                        let [a, i, n] = t;
                                                        return e.addEventListener(a, i, n);
                                                    }),
                                                        (n = () =>
                                                            s.forEach((t) => {
                                                                let [a, i] = t;
                                                                return e.removeEventListener(a, i);
                                                            }));
                                                }
                                                return n;
                                            },
                                            y = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, a) => {
                                                            if (e.el === t) return e;
                                                            let i = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (i.cleanUpTouch = void 0)),
                                                                a.trackTouch && t && (i.cleanUpTouch = v(t, a)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), i)
                                                            );
                                                        });
                                                },
                                            };
                                        return t.trackMouse && (y.onMouseDown = a), [y, v];
                                    })((e) => (y.current = e(y.current, h.current)), { trackMouse: v }),
                                [v],
                            );
                            return (
                                (t = y.current),
                                (a = h.current),
                                (_ = g.current),
                                (y.current =
                                    a.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? a.preventScrollOnSwipe !== _.preventScrollOnSwipe || a.touchEventOptions.passive !== _.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: b(t.el, a) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: b(t.el, a) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                x
                            );
                        }
                    },
                    8691: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0);
                        let i = a(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, a = Array(e), i = 0; i < e; i++) a[i] = arguments[i];
                                    return t.current.callback(...a);
                                },
                                callback: e,
                            });
                            return (
                                (0, i.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    1381: (e, t, a) => {
                        var i;
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
                        let n = a(4490),
                            r = a(8691);
                        !(function (e) {
                            (e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left');
                        })(i || (t.SwipeablePlacement = i = {}));
                        let s = (e) => {
                                let { ref: t, deltaY: a, deltaX: n, placement: r } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            r === i.TOP || r === i.BOTTOM ? 'translateY('.concat(a || 0, 'px)') : 'translateX('.concat(n || 0, 'px)')));
                                });
                            },
                            o = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: a = {}, onClose: l, disableSwipe: c, placement: d, threshold: u } = e,
                                m = (0, r.useCallbackRef)(() => {
                                    l && (o(t), l());
                                }),
                                _ = (0, r.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: a, deltaX: n, placement: r } = e;
                                            switch (r) {
                                                case i.TOP:
                                                    a <= 0 && s({ ref: t, deltaY: a, deltaX: n, placement: r });
                                                    break;
                                                case i.RIGHT:
                                                    n >= 0 && s({ ref: t, deltaY: a, deltaX: n, placement: r });
                                                    break;
                                                case i.LEFT:
                                                    n <= 0 && s({ ref: t, deltaY: a, deltaX: n, placement: r });
                                                    break;
                                                default:
                                                    a >= 0 && s({ ref: t, deltaY: a, deltaX: n, placement: r });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d });
                                }),
                                p = (0, r.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: a, deltaX: n, placement: r, threshold: s = 25 } = e;
                                            if (!t.current) return !1;
                                            let o = (s / 100) * (r === i.TOP || r === i.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (r) {
                                                case i.TOP:
                                                    return a < 0 && Math.abs(a) >= o;
                                                case i.RIGHT:
                                                    return n > 0 && n >= o;
                                                case i.LEFT:
                                                    return n < 0 && Math.abs(n) >= o;
                                                default:
                                                    return a > 0 && a >= o;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d, threshold: u })
                                            ? l && (o(t), l())
                                            : o(t));
                                });
                            return { handlers: (0, n.useSwipeable)({ onSwiped: p, onSwiping: _, trackMouse: !0, trackTouch: !0, ...a }), onCloseCallback: m };
                        };
                    },
                    810: (e) => {
                        e.exports = y;
                    },
                },
                C = {};
            function k(e) {
                var t = C[e];
                if (void 0 !== t) return t.exports;
                var a = (C[e] = { exports: {} });
                return f[e](a, a.exports, k), a.exports;
            }
            (k.d = (e, t) => {
                for (var a in t) k.o(t, a) && !k.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (k.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (k.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var j = {};
            (() => {
                Object.defineProperty(j, '__esModule', { value: !0 }), (j.usePopoverSwipeable = void 0);
                let e = k(810),
                    t = k(1381);
                j.usePopoverSwipeable = (a) => {
                    let { ref: i, swipeableProps: n = {}, onClose: r, disableSwipe: s, placement: o, threshold: l } = a,
                        c = (0, e.useMemo)(() => {
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
                    return (0, t.useComponentSwipeable)({ ref: i, swipeableProps: n, onClose: r, disableSwipe: s, placement: c, threshold: l });
                };
            })(),
                j.__esModule;
            var A = j.usePopoverSwipeable,
                P = a(4497),
                N = a(49923),
                S = a(5099),
                T = a(85742),
                w = a(57282),
                I = a(62828),
                E = a(20418);
            let L = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, a] = (0, v.useState)(e),
                    { contentRef: n } = (0, i.gKY)();
                return (
                    (0, v.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [i] = e || [];
                            i && i.contentRect.height !== t && a(i.contentRect.height);
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
            var B = a(18534),
                M = a(79950),
                O = a(13030);
            let R = (e) => {
                var t, a, n;
                let { seed: r, title: s, isStation: o } = e,
                    { vibe: l } = (0, i.Pjs)(),
                    { applySetting: c } = (0, i.B0S)({
                        seeds: null != (n = null == (t = l.meta) ? void 0 : t.seeds) ? n : [],
                        pageIdForFrom: i._Q$.HOME,
                        blockIdForFrom: i.hf$.RUP_MAIN_RADIO,
                    }),
                    { formatMessage: d } = (0, h.A)(),
                    u = !!(null == (a = l.meta) ? void 0 : a.seeds.includes(r)),
                    m = l.applyingSetting === r,
                    _ = (0, v.useMemo)(
                        () => (u ? ''.concat(d({ id: 'vibe-actions.remove' }), ' ').concat(s) : ''.concat(d({ id: 'vibe-actions.apply' }), ' ').concat(s)),
                        [u, s, d],
                    );
                return {
                    isApplying: m,
                    isSelected: u,
                    ariaLabel: _,
                    ariaPressed: u,
                    onClickHandler: (0, v.useCallback)(async () => {
                        l.setApplyingSetting(r), await c(r, o), l.setApplyingSetting();
                    }, [c, o, r, l]),
                };
            };
            var D = a(58419),
                F = a.n(D);
            let K = (0, p.PA)((e) => {
                    let { item: t } = e,
                        { vibe: a } = (0, i.Pjs)(),
                        n = (0, v.useRef)(null),
                        { isApplying: r, isSelected: s, ariaPressed: o, onClickHandler: l } = R({ seed: t.seed, title: t.title, isStation: !0 }),
                        c = (0, v.useCallback)(
                            (e) => {
                                a.isApplying || (n.current && (0, N.P)(e, F().ripple, n.current), l());
                            },
                            [l, a.isApplying],
                        );
                    return (0, _.jsxs)(S.$, {
                        radius: 'xxxl',
                        className: (0, M.$)(F().button, F().textButton, { [F().button_selected]: s, [F().button_applying]: r, [F().specialButton]: t.specialContext }),
                        onClick: c,
                        'aria-disabled': a.isApplying,
                        'aria-pressed': o,
                        withRipple: !1,
                        ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON),
                        children: [
                            t.specialContext &&
                                (0, _.jsx)(O.Image, { className: F().specialImage, src: t.specialContextImage, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            (0, _.jsx)(E.Caption, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: F().title, children: t.title }),
                            (0, _.jsx)('div', { className: F().rippleContainer, ref: n }),
                        ],
                    });
                }),
                V = (0, p.PA)((e) => {
                    let { type: t, restrictionValue: a } = e,
                        { vibe: n } = (0, i.Pjs)(),
                        r = (0, v.useRef)(null),
                        { isApplying: s, isSelected: o, ariaPressed: c, onClickHandler: d } = R({ seed: a.seed, title: a.title }),
                        u = (0, v.useCallback)(
                            (e) => {
                                n.isApplying || (r.current && (0, N.P)(e, F().ripple, r.current), d());
                            },
                            [d, n.isApplying],
                        ),
                        m = (0, v.useMemo)(
                            () => (0, _.jsx)(E.Caption, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: F().title, children: a.title }),
                            [a.title],
                        );
                    switch (t) {
                        case l.DIVERSITY:
                            return (0, _.jsxs)(S.$, {
                                className: (0, M.$)(F().button, F().diversityButton, { [F().button_selected]: o, [F().button_applying]: s }),
                                radius: 'xl',
                                'aria-disabled': n.isApplying,
                                'aria-pressed': c,
                                onClick: u,
                                withRipple: !1,
                                ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BUTTON),
                                children: [
                                    (0, _.jsx)(O.Image, {
                                        'aria-hidden': !0,
                                        src: a.imageUrl,
                                        fit: 'contain',
                                        width: 40,
                                        height: 40,
                                        withAvatarReplace: !0,
                                        className: F().diversityButtonImage,
                                    }),
                                    m,
                                    (0, _.jsx)('div', { className: F().rippleContainer, ref: r }),
                                ],
                            });
                        case l.MOOD_ENERGY:
                            return (0, _.jsxs)('div', {
                                className: F().moodEnergy,
                                ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BUTTON),
                                children: [
                                    (0, _.jsx)(S.$, {
                                        variant: 'text',
                                        className: (0, M.$)(F().button, F().moodEnergyButton, { [F().button_selected]: o, [F().button_applying]: s }),
                                        radius: 'round',
                                        onClick: u,
                                        withRipple: !1,
                                        'aria-disabled': n.isApplying,
                                        'aria-pressed': c,
                                        'aria-label': a.title,
                                        children: (0, _.jsx)(O.Image, {
                                            src: a.imageUrl,
                                            fit: 'contain',
                                            width: 52,
                                            height: 52,
                                            'aria-hidden': !0,
                                            withAvatarReplace: !0,
                                            className: F().moodEnergyButtonImage,
                                        }),
                                    }),
                                    (0, _.jsx)('span', { 'aria-hidden': !0, children: m }),
                                ],
                            });
                        case l.LANGUAGE:
                            return (0, _.jsxs)(S.$, {
                                radius: 'xxxl',
                                className: (0, M.$)(F().button, F().textButton, { [F().button_selected]: o, [F().button_applying]: s }),
                                onClick: u,
                                withRipple: !1,
                                'aria-disabled': n.isApplying,
                                'aria-pressed': c,
                                ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BUTTON),
                                children: [m, (0, _.jsx)('div', { className: F().rippleContainer, ref: r })],
                            });
                        default:
                            return null;
                    }
                });
            var z = a(38331),
                W = a.n(z);
            let U = (0, p.PA)(() => {
                let { vibeSettings: e } = (0, i.Pjs)(),
                    { formatMessage: t } = (0, h.A)();
                return (
                    e.isNeededToLoad && e.getData(),
                    (0, _.jsxs)('div', {
                        className: W().root,
                        children: [
                            e.contextItems.length > 0 &&
                                (0, _.jsx)(B.m, {
                                    title: t({ id: 'interface-actions.my-vibe-context-settings' }),
                                    restrictionsClassName: W().contextItems,
                                    ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK),
                                    children: e.contextItems.map((e) => (0, _.jsx)(K, { item: e, ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON) }, e.seed)),
                                }),
                            e.diversity &&
                                (0, _.jsx)(B.m, {
                                    title: e.diversity.title,
                                    restrictionsClassName: W().diversity,
                                    ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK),
                                    children: e.diversity.values.map((t) => {
                                        var a;
                                        return (0, _.jsx)(V, { type: null == (a = e.diversity) ? void 0 : a.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.moodEnergy &&
                                (0, _.jsx)(B.m, {
                                    title: e.moodEnergy.title,
                                    restrictionsClassName: W().moodEnergy,
                                    ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK),
                                    children: e.moodEnergy.values.map((t) => {
                                        var a;
                                        return (0, _.jsx)(V, { type: null == (a = e.moodEnergy) ? void 0 : a.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.language &&
                                (0, _.jsx)(B.m, {
                                    title: e.language.title,
                                    restrictionsClassName: W().contextItems,
                                    ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BLOCK),
                                    children: e.language.values.map((t) => {
                                        var a;
                                        return (0, _.jsx)(V, { type: null == (a = e.language) ? void 0 : a.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                        ],
                    })
                );
            });
            var Q = a(28251),
                G = a.n(Q);
            let q = (0, p.PA)(() => {
                var e, t, a, n;
                let { formatMessage: r } = (0, h.A)(),
                    {
                        vibe: s,
                        settings: { isMobile: o },
                        vibeSettings: l,
                    } = (0, i.Pjs)(),
                    { pageId: c } = (0, i.$au)(),
                    { blockIdForFrom: d } = (0, i.N8n)(),
                    u = (0, v.useRef)(null),
                    m = (0, v.useRef)(null),
                    p = (0, v.useRef)(null),
                    { resetSettings: y } = (0, i.B0S)({ seeds: null != (n = null == (e = s.meta) ? void 0 : e.seeds) ? n : [], pageIdForFrom: c, blockIdForFrom: d }),
                    { contentRef: f } = (0, i.gKY)(),
                    { contentHeight: C } = L(0),
                    { state: k, setState: j, toggleFalse: B } = (0, P.e)(!1);
                (0, v.useEffect)(
                    () => () => {
                        l.reset();
                    },
                    [l],
                );
                let M = (0, v.useMemo)(
                        () => (o ? { height: '88vh', transitionProperty: 'opacity' } : f ? { insetInlineEnd: 7, insetBlockStart: f.offsetTop + 7, height: C - 16 } : {}),
                        [C, f, o],
                    ),
                    O = !!(s.isApplying || s.isMyVibe),
                    R = (0, b.c)((e) => {
                        if (!s.isApplying) {
                            var t;
                            u.current && (0, N.P)(e, G().ripple, u.current), y(), null == (t = m.current) || t.focus();
                        }
                    }),
                    D = (0, v.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] = (null == e ? void 0 : e.split(':')) || [];
                                    return e === i.M19 || (t && i.UMA.includes(t));
                                }))(null == (e = s.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = s.meta) ? void 0 : t.context)
                                ? (0, _.jsx)(S.$, {
                                      className: G().toggleSettingsButton,
                                      size: 'm',
                                      radius: 'round',
                                      icon: (0, _.jsx)(T.Icon, { variant: 'filter', size: 'xs' }),
                                      'aria-label': r({ id: 'vibe-actions.aria-label-settings' }),
                                      ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_BUTTON),
                                  })
                                : (0, _.jsx)(S.$, {
                                      className: G().toggleSettingsButton,
                                      size: 'default',
                                      radius: 'xxxl',
                                      icon: (0, _.jsx)(T.Icon, { variant: 'filter', size: 'xxs' }),
                                      'aria-label': r({ id: 'vibe-actions.aria-label-settings' }),
                                      ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_BUTTON),
                                      children: (0, _.jsx)(E.Caption, {
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, _.jsx)(g.A, { id: 'interface-actions.configure-my-vibe' }),
                                      }),
                                  });
                    }, [r, null == (t = s.meta) ? void 0 : t.context, null == (a = s.meta) ? void 0 : a.seeds]),
                    { handlers: F } = A({ ref: p, onClose: B, placement: 'bottom', disableSwipe: !o, swipeableProps: { preventScrollOnSwipe: !0 } });
                return (0, _.jsxs)(w.AM, {
                    placement: o ? 'bottom' : 'right',
                    isMobile: o,
                    strategy: 'fixed',
                    transform: !1,
                    portalNode: f,
                    positionElement: f,
                    disableFloatingStyles: !o,
                    open: k,
                    onOpenChange: j,
                    style: M,
                    overlayClassName: G().overlay,
                    popoverContentRef: p,
                    children: [
                        D,
                        (0, _.jsx)(w.hl, {
                            className: G().popover,
                            ref: p,
                            ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_BLOCK),
                            children: (0, _.jsxs)('div', {
                                className: G().root,
                                children: [
                                    o && (0, _.jsx)('div', { ref: F.ref, onMouseDown: F.onMouseDown, className: G().swipeableArea }),
                                    (0, _.jsxs)('div', {
                                        className: G().header,
                                        children: [
                                            (0, _.jsx)(E.Heading, {
                                                variant: 'h3',
                                                size: 's',
                                                weight: 'bold',
                                                ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_TITLE),
                                                children: (0, _.jsx)(g.A, { id: 'interface-actions.my-vibe-settings' }),
                                            }),
                                            (0, _.jsxs)('div', {
                                                className: G().actions,
                                                children: [
                                                    (0, _.jsx)(I.m_, {
                                                        offsetOptions: 4,
                                                        placement: 'left',
                                                        text: r({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                        children: (0, _.jsx)(S.$, {
                                                            variant: 'outline',
                                                            radius: 'round',
                                                            size: 'xxxs',
                                                            icon: (0, _.jsx)(T.Icon, { variant: 'reset', size: 'xxxs' }),
                                                            onClick: R,
                                                            disabled: !!s.isMyVibe,
                                                            'aria-hidden': !!s.isMyVibe,
                                                            'aria-disabled': O,
                                                            'aria-label': r({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                            ref: u,
                                                            ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON),
                                                        }),
                                                    }),
                                                    (0, _.jsx)(S.$, {
                                                        radius: 'round',
                                                        color: 'secondary',
                                                        size: 'xxs',
                                                        icon: (0, _.jsx)(T.Icon, { variant: 'close', size: 'xxs' }),
                                                        onClick: B,
                                                        'aria-label': r({ id: 'interface-actions.close-my-vibe-settings' }),
                                                        ref: m,
                                                        ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, _.jsx)(U, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
            var $ = a(4714),
                Y = a(61363),
                H = a.n(Y);
            let X = (0, p.PA)(() => {
                var e, t;
                let { formatMessage: a } = (0, h.A)(),
                    {
                        vibe: n,
                        settings: { isMobile: r },
                        vibeSettings: s,
                    } = (0, i.Pjs)(),
                    { pageId: o } = (0, i.$au)(),
                    { blockIdForFrom: l } = (0, i.N8n)(),
                    c = (0, v.useRef)(null),
                    d = (0, v.useRef)(null),
                    { resetSettings: u } = (0, i.B0S)({ seeds: null != (t = null == (e = n.meta) ? void 0 : e.seeds) ? t : [], pageIdForFrom: o, blockIdForFrom: l }),
                    { contentRef: m } = (0, i.gKY)();
                (0, v.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s],
                );
                let p = !!(n.isApplying || n.isMyVibe),
                    y = (0, b.c)((e) => {
                        var t;
                        n.isApplying || (c.current && (0, N.P)(e, H().ripple, c.current), u(), null == (t = d.current) || t.focus());
                    });
                return (0, _.jsx)($.a, {
                    size: 'fitContent',
                    placement: r ? 'default' : 'right',
                    open: s.modal.isOpened,
                    onOpenChange: s.modal.onOpenChange,
                    onClose: s.modal.close,
                    className: H().root,
                    contentClassName: H().modalContent,
                    overlayClassName: H().overlay,
                    portalNode: r ? null : m,
                    showHeader: !1,
                    restoreFocus: !0,
                    closeOnOutsidePress: !0,
                    containerProps: (0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_BLOCK),
                    children: (0, _.jsxs)('div', {
                        className: H().content,
                        children: [
                            (0, _.jsxs)('div', {
                                className: H().header,
                                children: [
                                    (0, _.jsx)(E.Heading, {
                                        variant: 'h3',
                                        size: 's',
                                        weight: 'bold',
                                        ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_TITLE),
                                        children: (0, _.jsx)(g.A, { id: 'interface-actions.my-vibe-settings' }),
                                    }),
                                    (0, _.jsxs)('div', {
                                        className: H().actions,
                                        children: [
                                            (0, _.jsx)(I.m_, {
                                                offsetOptions: 4,
                                                placement: 'left',
                                                text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                children: (0, _.jsx)(S.$, {
                                                    variant: 'outline',
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    icon: (0, _.jsx)(T.Icon, { variant: 'reset', size: 'xxxs' }),
                                                    onClick: y,
                                                    disabled: !!n.isMyVibe,
                                                    'aria-hidden': !!n.isMyVibe,
                                                    'aria-disabled': p,
                                                    'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                    ref: c,
                                                    ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON),
                                                }),
                                            }),
                                            (0, _.jsx)(S.$, {
                                                radius: 'round',
                                                color: 'secondary',
                                                size: 'xxs',
                                                icon: (0, _.jsx)(T.Icon, { variant: 'close', size: 'xxs' }),
                                                onClick: s.modal.close,
                                                'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                ref: d,
                                                ...(0, x.Am)(x.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, _.jsx)(U, {}),
                        ],
                    }),
                });
            });
        },
        11346: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(81959);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Playlist;
            }
        },
        11646: (e) => {
            e.exports = {
                root: 'PlayQueueAfterPlayingBlock_root__A7_wI',
                title: 'PlayQueueAfterPlayingBlock_title__nS_nG',
                title_withDnD: 'PlayQueueAfterPlayingBlock_title_withDnD__jsVTk',
                prevTrack: 'PlayQueueAfterPlayingBlock_prevTrack__wDAPP',
                animatedContent: 'PlayQueueAfterPlayingBlock_animatedContent__6rvOT',
                animatedContent_moveToTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveToTop__bW549',
                'move-to-top': 'PlayQueueAfterPlayingBlock_move-to-top__c_AzJ',
                animatedContent_moveFromTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTop__ZLgMV',
                'move-from-top': 'PlayQueueAfterPlayingBlock_move-from-top___8bwu',
                'move-prev-track-from-top': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top__XY1VA',
                animatedContent_moveFromTopSingleTrack: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTopSingleTrack__rrewW',
                'move-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-from-top-single-track__8po97',
                'move-prev-track-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top-single-track__ySSca',
            };
        },
        12793: (e) => {
            e.exports = {
                root: 'PlayerBarMobile_root__cdKy_',
                progressBar: 'PlayerBarMobile_progressBar___DmH8',
                info: 'PlayerBarMobile_info__WmdhZ',
                infoCard: 'PlayerBarMobile_infoCard__DCATu',
                coverContainer: 'PlayerBarMobile_coverContainer__a3JDF',
                cover: 'PlayerBarMobile_cover__pnJd1',
                description: 'PlayerBarMobile_description__IxQ9L',
                artists: 'PlayerBarMobile_artists__XVSBV',
                artistLink: 'PlayerBarMobile_artistLink__pieMq',
                infoButtons: 'PlayerBarMobile_infoButtons__JXxfv',
                sliderChangeTimeCode: 'PlayerBarMobile_sliderChangeTimeCode___2Vpu',
                backgroundProgress: 'PlayerBarMobile_backgroundProgress__jevhK',
                shimmerCover: 'PlayerBarMobile_shimmerCover__q1eXc',
                shimmerMeta: 'PlayerBarMobile_shimmerMeta__4vDEK',
                shimmerMetaTitle: 'PlayerBarMobile_shimmerMetaTitle__TsIb2',
                shimmerMetaDescription: 'PlayerBarMobile_shimmerMetaDescription__pIeAr',
            };
        },
        15715: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { b: () => i }),
                (function (e) {
                    (e.ALBUM = 'ALBUM'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.WAVE = 'WAVE'),
                        (e.CLIP = 'CLIP'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.OTHER = 'OTHER');
                })(i || (i = {}));
        },
        16569: (e) => {
            e.exports = {
                root: 'VibeContext_root__dbiNv',
                context: 'VibeContext_context__Z_82k',
                pinButton: 'VibeContext_pinButton__b6SNF',
                resetButton: 'VibeContext_resetButton__9KK4S',
            };
        },
        19521: (e) => {
            e.exports = {
                root: 'WordsCardPopoverDisclaimer_root__yyXMs',
                container: 'WordsCardPopoverDisclaimer_container__jOiri',
                text: 'WordsCardPopoverDisclaimer_text__p6tIH',
                gradient: 'WordsCardPopoverDisclaimer_gradient__9ejqH',
                description: 'WordsCardPopoverDisclaimer_description__0RhrR',
            };
        },
        20641: (e) => {
            e.exports = {
                root: 'VibePage_root__dGvPX',
                root_legacy: 'VibePage_root_legacy__zBmxf',
                root_reshuffle: 'VibePage_root_reshuffle__gz97v',
                hoveredButton: 'VibePage_hoveredButton__6VSqR',
                meta: 'VibePage_meta__kWwRE',
                entityMeta: 'VibePage_entityMeta__dhDch',
                'meta-fade-in': 'VibePage_meta-fade-in__H0xeT',
                textContainer: 'VibePage_textContainer__odK0M',
                textContainer_withCover: 'VibePage_textContainer_withCover__U2z1l',
                context: 'VibePage_context__CoYut',
                text: 'VibePage_text__sPFhf',
                text_paused: 'VibePage_text_paused__NyCpR',
                playerBlock: 'VibePage_playerBlock__b6ZRu',
                playerBlock_withFreemium: 'VibePage_playerBlock_withFreemium__8Avmc',
                freemiumBlock: 'VibePage_freemiumBlock__uhLoT',
                vibeAnimation: 'VibePage_vibeAnimation__qQ6ci',
                words: 'VibePage_words__39Mii',
                wheel: 'VibePage_wheel__E_p8_',
            };
        },
        21175: (e) => {
            e.exports = {
                root: 'PlayButton_root__nYKdN',
                root_isLoading: 'PlayButton_root_isLoading__925Sa',
                'applying-setting': 'PlayButton_applying-setting__3nbT9',
                icon: 'PlayButton_icon__t_THQ',
            };
        },
        22e3: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => x, q: () => i });
            var i = (function (e) {
                    return (e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal'), e;
                })({}),
                n = a(62936),
                r = a(79950),
                s = a(19718),
                o = a(44020),
                l = a(47480),
                c = a(8669),
                d = a(59935),
                u = a(60188),
                m = a(4497),
                _ = a(5099),
                p = a(85742),
                v = a(53030),
                y = a(42561),
                h = a(38598),
                g = a.n(h);
            let x = (0, s.PA)((e) => {
                let {
                        className: t,
                        horizontalSliderClassName: a,
                        verticalSliderClassName: s,
                        variant: h = i.HORIZONTAL,
                        playbackId: x,
                        onVolumeClick: b,
                        onVolumeSet: f,
                        sonataVolume: C,
                        buttonClassName: k,
                    } = e,
                    { formatMessage: j } = (0, l.A)(),
                    A = (0, y.eGp)(),
                    { state: P, toggleTrue: N, toggleFalse: S } = (0, m.e)(!1),
                    T = Math.round((null != C ? C : 1) * 100) / 100,
                    w = (0, d.c)((e) => {
                        null == A || A.setExponentVolume(e, x);
                    });
                (0, o.useEffect)(() => {
                    let e = () => {
                            S(), document.activeElement instanceof HTMLElement && document.activeElement.blur();
                        },
                        t = () => {
                            document.hidden && e();
                        };
                    return (
                        document.addEventListener('visibilitychange', t),
                        window.addEventListener('blur', e),
                        () => {
                            document.removeEventListener('visibilitychange', t), window.removeEventListener('blur', e);
                        }
                    );
                }, [S]);
                let I = (0, d.c)((e) => {
                        w(e), null == f || f(e);
                    }),
                    E = (0, d.c)(async () => {
                        await b(T);
                    }),
                    L = 0 === T ? 'volumeOff' : 'volume',
                    B = 0 === T ? j({ id: 'player-actions.volume-on' }) : j({ id: 'player-actions.volume-off' }),
                    M = (0, d.c)((e) => {
                        I(Math.max(0, Math.min(1, Math.round(100 * (T + (e.deltaY > 0 ? -1 : 1) * 0.01)) / 100)));
                    }),
                    O = (0, u.L)(() => {
                        if (h === i.HORIZONTAL)
                            return (0, n.jsx)(v.A, {
                                onWheel: M,
                                className: a,
                                thumbSize: 's',
                                trackSize: 's',
                                value: T,
                                maxValue: 1,
                                step: 0.01,
                                onChange: I,
                                'aria-label': j({ id: 'player-actions.volume-control' }),
                                ...(0, c.Am)(c.Kq.changeVolume.CHANGE_VOLUME_SLIDER),
                            });
                    }),
                    R = (0, u.L)(() => {
                        if (h === i.VERTICAL)
                            return (0, n.jsx)('div', {
                                onWheel: M,
                                className: (0, r.$)(g().sliderContainer, { [g().sliderContainer_focusVisible]: P }),
                                children: [
                                    (0, n.jsx)('span', {
                                        children: `${Math.round(T.toFixed(2) * 100)}%`,
                                        style: {
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            'margin-inline': 'auto',
                                            width: 'fit-content',
                                            top: '0.7rem',
                                        },
                                    }),
                                    (0, n.jsx)('div', {
                                        className: (0, r.$)(g().wrapperSlider, s),
                                        children: (0, n.jsx)(v.A, {
                                            onMouseLeave: S,
                                            className: (0, r.$)(g().slider, g().important),
                                            thumbSize: 's',
                                            onFocus: N,
                                            onBlur: S,
                                            trackSize: 's',
                                            value: T,
                                            maxValue: 1,
                                            step: 0.01,
                                            onChange: I,
                                            'aria-label': j({ id: 'player-actions.volume-control' }),
                                            ...(0, c.Am)(c.Kq.changeVolume.CHANGE_VOLUME_SLIDER),
                                        }),
                                    }),
                                ],
                            });
                    });
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(g().root, t),
                    children: [
                        R,
                        (0, n.jsx)(_.$, {
                            onWheel: M,
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            withRipple: !1,
                            onClick: E,
                            'aria-label': B,
                            icon: (0, n.jsx)(p.Icon, { size: 'xs', className: g().icon, variant: L }),
                            className: (0, r.$)(g().button, k),
                            ...(0, c.Am)(c.Kq.changeVolume.CHANGE_VOLUME_BUTTON),
                        }),
                        O,
                    ],
                });
            });
        },
        24450: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => i });
            let i = (e) => {
                let { palette: t, isPlaying: a } = e;
                return (a ? t.primaryStops : t.primaryDarkIdleStops).reduce((e, t, a) => ((e['--vibe-gradient-stop-'.concat(a)] = t), e), {});
            };
        },
        25728: (e) => {
            e.exports = {
                root: 'SyncLyricsLoader_root__I2hTe',
                element: 'SyncLyricsLoader_element___Luwv',
                pulse: 'SyncLyricsLoader_pulse__5AqRf',
                'change-opacity': 'SyncLyricsLoader_change-opacity__vscya',
                element_withIcon: 'SyncLyricsLoader_element_withIcon__iiSBo',
                element_withDefaultElement: 'SyncLyricsLoader_element_withDefaultElement__WmP80',
                element_paused: 'SyncLyricsLoader_element_paused__LFpD0',
            };
        },
        26141: (e) => {
            e.exports = {
                root: 'PlayerBarDesktopWithBackgroundProgressBar_root__bpmwN',
                important: 'PlayerBarDesktopWithBackgroundProgressBar_important__HzXrK',
                ripple: 'PlayerBarDesktopWithBackgroundProgressBar_ripple__FcmrF',
                progressBar: 'PlayerBarDesktopWithBackgroundProgressBar_progressBar___Q6eK',
                slider: 'PlayerBarDesktopWithBackgroundProgressBar_slider__SezFn',
                player: 'PlayerBarDesktopWithBackgroundProgressBar_player__ASKKs',
                playerBar: 'PlayerBarDesktopWithBackgroundProgressBar_playerBar__mp0p9',
                info: 'PlayerBarDesktopWithBackgroundProgressBar_info__YnvZ_',
                infoCard: 'PlayerBarDesktopWithBackgroundProgressBar_infoCard__i0cbW',
                coverContainer: 'PlayerBarDesktopWithBackgroundProgressBar_coverContainer__dkNCG',
                cover: 'PlayerBarDesktopWithBackgroundProgressBar_cover__MKmEt',
                description: 'PlayerBarDesktopWithBackgroundProgressBar_description__5jHke',
                artists: 'PlayerBarDesktopWithBackgroundProgressBar_artists__wKsF6',
                artistLink: 'PlayerBarDesktopWithBackgroundProgressBar_artistLink__l9Bk_',
                infoButtons: 'PlayerBarDesktopWithBackgroundProgressBar_infoButtons__OxPBy',
                sonata: 'PlayerBarDesktopWithBackgroundProgressBar_sonata__mGFb_',
                sonata_withReversedControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonata_withReversedControls__9TjDN',
                meta: 'PlayerBarDesktopWithBackgroundProgressBar_meta__FhKTC',
                sonataControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonataControls__rSmXQ',
                settingsButton: 'PlayerBarDesktopWithBackgroundProgressBar_settingsButton__HnCgK',
                trackContextMenuIcon: 'PlayerBarDesktopWithBackgroundProgressBar_trackContextMenuIcon__xBJxI',
                triggerModal: 'PlayerBarDesktopWithBackgroundProgressBar_triggerModal__EVv5d',
            };
        },
        27270: (e) => {
            e.exports = {
                root: 'VideoAd_root__e7gla',
                root_hidden: 'VideoAd_root_hidden__78CPl',
                videoBlock: 'VideoAd_videoBlock__bqNRq',
                video: 'VideoAd_video__j1f_y',
                content: 'VideoAd_content__QroDp',
                close: 'VideoAd_close__sMGlV',
                notifyClose: 'VideoAd_notifyClose__w82mE',
                cover: 'VideoAd_cover__kQwxh',
                important: 'VideoAd_important__VZkA_',
                icon: 'VideoAd_icon__o_Hzn',
                text: 'VideoAd_text__rjKqZ',
            };
        },
        27511: (e, t, a) => {
            'use strict';
            a.d(t, { MainPage: () => Y });
            var i = a(62936),
                n = a(79950),
                r = a(19718),
                s = a(69526),
                o = a(44020),
                l = a(47480),
                c = a(26731),
                d = a(8669),
                u = a(44262),
                m = a(56874),
                _ = a(60188),
                p = a(5099),
                v = a(13030),
                y = a(55619),
                h = a(14501),
                g = a(62828),
                x = a(20418),
                b = a(22991),
                f = a(65438),
                C = a(60228),
                k = a(66281),
                j = a(92229),
                A = a(25099),
                P = a(42687),
                N = a(42561),
                S = a(85906),
                T = a(33556),
                w = a.n(T),
                I = a(23480),
                E = a(59935),
                L = a(93790),
                B = a(35796),
                M = a(46410),
                O = a(99072),
                R = a(81628),
                D = a(32632),
                F = a(24450),
                K = a(12998),
                V = a(81959),
                z = a(20641),
                W = a.n(z),
                U = a(32655),
                Q = a.n(U);
            let G = 'vibe-freemium-block',
                q = (0, r.PA)((e) => {
                    let { className: t } = e,
                        { user: a } = (0, N.Pjs)(),
                        [r, s] = (0, m.d)(),
                        {
                            openPaymentWidgetModal: o,
                            isShimmerActive: l,
                            isShimmerVisible: d,
                            mainText: u,
                            mainTextA11y: p,
                            additionText: v,
                        } = (0, N.DpZ)({ storeName: 'music', isEnabled: a.isAuthorized && !a.hasPlus, offerElement: { element: r, intersectionPropertyId: G } }),
                        y = (0, _.L)(() =>
                            a.isAuthorized
                                ? (0, i.jsx)(S.b4, {
                                      ref: s,
                                      'data-intersection-property-id': G,
                                      mainText: u,
                                      ariaLabel: p,
                                      additionText: v,
                                      isShimmerActive: l,
                                      isShimmerVisible: d,
                                      onClick: o,
                                      className: Q().button,
                                      mainTextClassName: Q().buttonMainText,
                                      additionTextClassName: Q().buttonAdditionText,
                                  })
                                : (0, i.jsx)(S.Hi, {
                                      size: 'l',
                                      variant: 'default',
                                      buttonText: (0, i.jsx)(x.Caption, {
                                          variant: 'span',
                                          size: 'l',
                                          children: (0, i.jsx)(c.A, { id: 'authorization.enter-and-listen-button' }),
                                      }),
                                      className: Q().button,
                                  }),
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(Q().root, t),
                        children: [
                            y,
                            (0, i.jsx)(x.Caption, {
                                variant: 'span',
                                size: 'l',
                                className: Q().description,
                                children: (0, i.jsx)(c.A, { id: 'buy-subscription.new-vibe-description', values: { nbsp: ' ' } }),
                            }),
                        ],
                    });
                }),
                $ = (0, r.PA)(() => {
                    var e, t, a, r, s, c, d, u, m, v, y, h;
                    let {
                            sonataState: g,
                            experiments: b,
                            user: f,
                            paywall: { modal: k },
                            vibe: j,
                        } = (0, N.Pjs)(),
                        { pageId: A, pageEntityId: P } = (0, N.$au)(),
                        { blockIdForFrom: T } = (0, N.N8n)(),
                        w = (0, N.l$t)({ mainObjectType: I.ky.Track }),
                        { resetSettings: z } = (0, N.B0S)({ seeds: [N.M19], pageIdForFrom: A, blockIdForFrom: T }),
                        { formatMessage: U } = (0, l.A)(),
                        Q = (() => {
                            var e, t, a, i, n, r;
                            let { sonataState: s } = (0, N.Pjs)(),
                                o = (0, N.eGp)(),
                                { formatMessage: c } = (0, l.A)(),
                                d = null == o ? void 0 : o.state.currentContext.value,
                                u = null == o ? void 0 : o.state.queueState.currentEntity.value,
                                m = null == u ? void 0 : u.sourceContext;
                            if (!(null == d ? void 0 : d.data.type)) return;
                            let _ = (function (e, t) {
                                switch (t) {
                                    case K.h.SEARCH:
                                        return e({ id: 'entity-names.search' });
                                    case K.h.MUSIC_HISTORY:
                                    case K.h.MUSIC_HISTORY_SEARCH:
                                        return e({ id: 'entity-names.music-history' });
                                    case K.h.DOWNLOADED_TRACKS:
                                    case K.h.USER_TRACKS:
                                        return e({ id: 'entity-names.collection' });
                                    case K.h.ARTIST_FAMILIAR_FROM_WAVE:
                                        return e({ id: 'page.familiar-vibe' });
                                    case K.h.ARTIST_MY_COLLECTION:
                                        return e({ id: 'page.familiar-collection' });
                                    default:
                                        return;
                                }
                            })(c, null == m ? void 0 : m.data.sourceContextType);
                            if (_) return _;
                            switch (d.data.type) {
                                case V.K.Album:
                                    if (null == (e = s.entityMeta) ? void 0 : e.isPodcast) return c({ id: 'entity-names.podcast' });
                                    if (null == (t = s.entityMeta) ? void 0 : t.isAudiobook) return c({ id: 'entity-names.book' });
                                    if (null == (a = s.entityMeta) ? void 0 : a.isFairyTale) return c({ id: 'entity-names.fairytale' });
                                    return d.data.meta.title;
                                case V.K.Playlist:
                                    return d.data.meta.title;
                                case V.K.Vibe: {
                                    let e = null == (i = d.data.meta.session) ? void 0 : i.wave;
                                    if ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === N.M19)
                                        return c({ id: 'entity-names.my-vibe' });
                                    return c({ id: 'vibe-actions.vibe-context' }, { type: null == e ? void 0 : e.type, name: null == e ? void 0 : e.name });
                                }
                                case V.K.Artist:
                                    return c({ id: 'entity-names.artist-popular-tracks' });
                                case V.K.Various:
                                    return null == (r = s.entityMeta) || null == (n = r.mainAlbum) ? void 0 : n.title;
                                case V.K.Generative:
                                    return c({ id: 'entity-names.generative' });
                                default:
                                    return;
                            }
                        })(),
                        G = (() => {
                            let e = (0, N.eGp)(),
                                t = null == e ? void 0 : e.state.currentContext.value;
                            if ((null == t ? void 0 : t.data.type) === V.K.Vibe) {
                                var a, i;
                                let e = null == (a = t.data.meta.session) ? void 0 : a.wave;
                                if (
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === N.M19) ||
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e || null == (i = e.seeds[0]) ? void 0 : i.includes(N.yxZ)))
                                )
                                    return !1;
                            }
                            return !0;
                        })(),
                        $ = !g.isPlaying && g.isVibeContext,
                        Y = !g.isPlaying && !G,
                        H = null == (e = g.entityMeta) ? void 0 : e.mainArtist,
                        X = null == (t = g.entityMeta) ? void 0 : t.mainAlbum,
                        Z = null == (a = g.entityMeta) ? void 0 : a.artists,
                        J = !!(null == (r = g.entityMeta) ? void 0 : r.isNonUserGenerated),
                        ee = !!(null == (s = g.entityMeta) ? void 0 : s.isNonMusic),
                        et = g.isGenerativeContext,
                        ea = !!(null == H || null == (c = H.cutoutCover) ? void 0 : c.uri) && !$,
                        ei = ea && H,
                        en = (0, R.AX)(null != Z ? Z : []) > 1,
                        er = (0, o.useRef)(null),
                        { isArtistsMenuOpen: es, artistsMenuPosition: eo, handleArtistsMenuClick: el, handleArtistsMenuOpenChange: ec } = (0, R.Bn)({ ref: er }),
                        ed = (0, _.L)(() => ($ ? C.rM : ea ? C.sr : C.S0)),
                        eu =
                            f.hasPlus &&
                            (b.checkExperiment(N.zal.WebNextWaveScreenWordsInWave, 'on') || b.checkExperiment(N.zal.WebNextWaveScreenWordsInWave, 'on_with_onyx')),
                        em = b.checkExperiment(N.zal.WebNextNewWaveTabRedesign, 'on'),
                        e_ = j.isShuffleVibe && g.isVibeContext,
                        ep = (0, D.OH)(e_ || null == (d = g.entityMeta) ? void 0 : d.averageColor),
                        ev = em ? void 0 : (0, F.a)({ palette: ep, isPlaying: g.isPlaying });
                    (0, o.useEffect)(() => {
                        en || ec(!1);
                    }, [ec, en]),
                        (0, o.useEffect)(() => {
                            P && w(!0);
                        }, [w, P]),
                        (0, o.useEffect)(
                            () => () => {
                                w(!1);
                            },
                            [w],
                        );
                    let ey = (0, _.L)(() => {
                            if (!em)
                                return b.checkExperiment(N.zal.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, i.jsx)(M.LW, { className: W().vibeAnimation })
                                    : (0, i.jsx)(M.pA, { className: W().vibeAnimation, averageColor: ep.primary });
                        }),
                        eh = (0, _.L)(() => {
                            var e;
                            if ($)
                                return (0, i.jsx)(x.Caption, {
                                    variant: 'span',
                                    className: (0, n.$)(W().text, W().text_paused),
                                    lineClamp: 1,
                                    children: U({ id: 'entity-names.my-vibe' }),
                                });
                            if (ee && X)
                                return (0, i.jsx)(S.N_, {
                                    href: X.url,
                                    className: W().text,
                                    children: (0, i.jsx)(x.Caption, { variant: 'span', className: W().text, lineClamp: ed.maxLines, children: X.title }),
                                });
                            if (et && (null == (e = g.entityMeta) ? void 0 : e.title))
                                return (0, i.jsx)(x.Caption, { variant: 'span', className: W().text, lineClamp: ed.maxLines, children: g.entityMeta.title });
                            if (Z) {
                                let e = (0, i.jsx)(R.iQ, {
                                    artists: Z,
                                    captionClassName: W().text,
                                    linkClassName: W().text,
                                    className: W().text,
                                    lineClamp: ed.maxLines,
                                    withLink: J && !en,
                                    withCustomTooltip: !1,
                                    variant: 'breakWord',
                                });
                                return en
                                    ? (0, i.jsx)(p.$, {
                                          variant: 'text',
                                          'aria-label': U({ id: 'interface-actions.context-menu-artists' }),
                                          'aria-haspopup': 'menu',
                                          'aria-expanded': es,
                                          withRipple: !1,
                                          onClick: el,
                                          ref: er,
                                          children: e,
                                      })
                                    : e;
                            }
                            return null;
                        }),
                        eg = (0, E.c)(() => {
                            f.hasPlus, z();
                        }),
                        ex = (0, _.L)(() => {
                            var e, t;
                            return g.entityMeta
                                ? (0, i.jsx)(N.FoH, {
                                      blockId: I.LA.MyWave,
                                      blockType: I.LA.MyWave,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      mainObjectType: I.ky.Track,
                                      mainObjectId: null == (e = g.entityMeta) ? void 0 : e.id,
                                      children: (0, i.jsxs)(N.Bki, {
                                          objectType: I.ky.Artist,
                                          objectId: null == (t = g.entityMeta) ? void 0 : t.id,
                                          objectPosX: 1,
                                          objectPosY: 1,
                                          objectsCount: 1,
                                          children: [
                                              (0, i.jsx)('div', {
                                                  className: (0, n.$)(W().textContainer, { [W().textContainer_withCover]: ea }),
                                                  children: (0, i.jsx)(C.mx, { options: ed, children: eh }),
                                              }),
                                              ei && (0, i.jsx)(C.hY, { artist: H, withLink: J && !en, onClick: el }),
                                              Z && en && (0, i.jsx)(R.MJ, { artists: Z, open: es, onOpenChange: ec, positionElement: eo }),
                                          ],
                                      }),
                                  })
                                : null;
                        });
                    return (0, i.jsx)(N.rtM, {
                        page: N.l7W.HOME_SCREEN,
                        places: [N.RBW.MY_WAVE],
                        children: (0, i.jsxs)('div', {
                            className: (0, n.$)(W().root, { [W().root_legacy]: !em, [W().root_reshuffle]: e_ }),
                            style: ev,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: W().meta,
                                    children: [
                                        ey,
                                        (0, i.jsx)(N.FoH, {
                                            blockId: I.LA.Toolbar,
                                            blockType: I.LA.Toolbar,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: 1,
                                            children: (0, i.jsx)(N.Bki, {
                                                objectType: I.ky.Wave,
                                                objectId: N.M19,
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                children: (0, i.jsx)(C.KA, { className: W().context, context: Q, isResetAvailable: G, isHidden: Y, onClick: eg }),
                                            }),
                                        }),
                                        (0, i.jsx)(
                                            'div',
                                            { className: W().entityMeta, children: ex },
                                            ''.concat(null != (h = null == (u = g.entityMeta) ? void 0 : u.idWithContext) ? h : 'default', '-').concat($),
                                        ),
                                        (0, i.jsxs)('div', {
                                            className: (0, n.$)(W().playerBlock, { [W().playerBlock_withFreemium]: !f.hasPlus }),
                                            children: [
                                                em &&
                                                    (0, i.jsx)(N.FoH, {
                                                        blockId: I.LA.MyWave,
                                                        blockType: I.LA.MyWave,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: I.ky.Track,
                                                        mainObjectId: null == (m = g.entityMeta) ? void 0 : m.id,
                                                        children: (0, i.jsx)(N.Bki, {
                                                            objectType: I.ky.Track,
                                                            objectId: null == (v = g.entityMeta) ? void 0 : v.id,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            objectsCount: 1,
                                                            children: (0, i.jsx)(L.j3, { hoveredButtonClassName: W().hoveredButton }),
                                                        }),
                                                    }),
                                                eu &&
                                                    (0, i.jsx)('div', {
                                                        className: W().words,
                                                        children: (0, i.jsx)(O.UG, { trackId: null == (y = g.entityMeta) ? void 0 : y.id }),
                                                    }),
                                                !f.hasPlus && (0, i.jsx)(q, { className: W().freemiumBlock }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(B.Q, { className: W().wheel }),
                            ],
                        }),
                    });
                }),
                Y = (0, r.PA)((e) => {
                    var t, a;
                    let { withVideoModal: r } = e,
                        {
                            main: T,
                            user: I,
                            experiments: E,
                            releaseNotes: L,
                            fullscreenVideoPlayer: B,
                            sonataState: { entityMeta: M },
                        } = (0, N.Pjs)(),
                        { formatMessage: O } = (0, l.A)(),
                        R = (0, N.HFS)(),
                        { contentScrollRef: D, setContentScrollRef: F } = (0, N.gKY)(),
                        [K, V] = (0, m.d)(),
                        z = (0, A.df)(),
                        W = (0, A.Cc)(),
                        { theme: U } = (0, N.DPo)(),
                        Q = E.checkExperiment(N.zal.WebNextNewWaveTab, 'on') || E.checkExperiment(N.zal.WebNextNewWaveTab, 'on1'),
                        G = (0, N.ZpR)(null != (a = null == (t = T.specialHeader) ? void 0 : t.url) ? a : ''),
                        q = E.checkExperiment(N.zal.WebNextNewWaveTabFeedbackForm, 'on'),
                        Y = (0, N.ZpR)('/slides/special/my_vibe_onboarding');
                    (0, o.useEffect)(() => {
                        var e, t;
                        if (!r || !z) return;
                        let a = (0, N.jrm)(),
                            i = null != (e = null == a ? void 0 : a.get(N.K3F.IDS)) ? e : null,
                            n = null != (t = null == a ? void 0 : a.get(N.K3F.ACTIVE_INDEX)) ? t : null,
                            { clipIds: s, activeClipIndex: o } = (0, k.V1)(i, n);
                        W(s, o), B.setOpenedFromMain();
                    }, [r, z, B, W]),
                        (0, o.useEffect)(
                            () => () => {
                                T.reset(), Q || T.landing.reset();
                            },
                            [T, T.landing, Q],
                        ),
                        (0, N.Jzs)(T.landing.isResolved);
                    let H = E.checkExperiment(N.zal.WebNextDisableVibe, 'on'),
                        X = (0, o.useCallback)(() => {
                            L.isReady && L.modal.open();
                        }, [L.isReady, L.modal]),
                        Z = (0, o.useMemo)(() => (H ? { 'margin-block-start': '1vh' } : {}), [H]),
                        J = (0, o.useMemo)(() => {
                            if (E.checkExperiment(N.zal.WebNextBetaLabel, 'off')) return null;
                            {
                                let e = E.checkExperiment(N.zal.WebNextBetaLabel, 'version'),
                                    t = O({ id: 'desktop.app-version' }, { version: R }),
                                    a = e ? R : 'Beta';
                                return (0, i.jsxs)(g.m_, {
                                    placement: 'left',
                                    offsetOptions: 4,
                                    children: [
                                        (0, i.jsx)(p.$, {
                                            color: 'secondary',
                                            radius: 'xl',
                                            'aria-label': e ? t : 'Beta '.concat(t),
                                            className: (0, n.$)(w().beta, { [w().beta_withReleaseNotes]: L.isReady }),
                                            onClick: X,
                                            children: (0, i.jsx)(x.Caption, { variant: 'div', type: 'text', size: 's', weight: 'medium', children: a }),
                                        }),
                                        (0, i.jsx)(g.ZI, { children: R }),
                                    ],
                                });
                            }
                        }, [E, O, X, L.isReady, R]),
                        ee = (0, o.useMemo)(
                            () =>
                                q
                                    ? (0, i.jsxs)(y.N, {
                                          onClick: Y,
                                          className: w().feedbackForm,
                                          children: [
                                              (0, i.jsx)(x.Caption, {
                                                  className: w().feedbackFormCaption,
                                                  lineClamp: 2,
                                                  size: 'l',
                                                  variant: 'span',
                                                  weight: 'bold',
                                                  children: (0, i.jsx)(c.A, { id: 'page.new-wave-feedback-form-title' }),
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: w().feedbackFormImageContainer,
                                                  children: (0, i.jsx)(v.Image, {
                                                      className: w().feedbackFormImage,
                                                      fit: 'cover',
                                                      src: 'avatars.mds.yandex.net/get-music-misc/34161/img.69ca9db7d94e941d5a255f17/orig',
                                                      withAvatarReplace: !0,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                            [Y, q],
                        ),
                        et = (0, o.useMemo)(() => {
                            if (!T.specialHeader) return {};
                            let e = U === N.Sxu.Light ? T.specialHeader.lightTheme : T.specialHeader.darkTheme;
                            return { '--special-button-background': e.backgroundColor, '--special-button-color': e.textColor };
                        }, [T.specialHeader, U]),
                        ea = (0, _.L)(() => {
                            let e = E.checkExperiment(N.zal.WebNextRewind2024, 'on');
                            return T.specialHeader
                                ? (0, i.jsxs)('div', {
                                      className: w().specialHeaderContainer,
                                      children: [
                                          e &&
                                              (0, i.jsx)(v.Image, {
                                                  src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69203c15cffc41172f18a125/orig',
                                                  withAvatarReplace: !0,
                                                  className: w().specialHeaderImage,
                                                  fit: 'contain',
                                              }),
                                          (0, i.jsx)(p.$, {
                                              color: 'secondary',
                                              size: 'default',
                                              radius: 'xxxl',
                                              role: 'link',
                                              className: w().specialHeader,
                                              withHover: !1,
                                              style: et,
                                              onClick: G,
                                              children: T.specialHeader.title,
                                          }),
                                      ],
                                  })
                                : null;
                        }),
                        ei = (0, _.L)(() =>
                            Q
                                ? null
                                : E.checkExperiment(N.zal.WebNextFooterDisclaimer, 'on')
                                  ? (0, i.jsx)(S.wi, { className: w().footer })
                                  : (0, i.jsx)(S.A, { children: (0, i.jsx)(S.wi, { className: w().footer }) }),
                        );
                    if (T.landing.isNeededToLoad && !Q) {
                        let e = I.isAuthorized ? u.p.MAIN : u.p.MAIN_NOLOGIN,
                            t = [T.landing.getSkeleton({ id: e, showWizard: I.settings.showWizard }, { preloadBlocksCount: 2 }), T.getSpecialHeader()];
                        (0, o.use)(Promise.allSettled(t));
                    }
                    r && !z && (0, s.notFound)();
                    let en = (0, _.L)(() =>
                        Q
                            ? (0, i.jsx)(N.nVz, {
                                  pageId: N._Q$.WAVE_LANDING_SCREEN,
                                  pageEntityId: null == M ? void 0 : M.id,
                                  children: (0, i.jsx)(N.jPc, {
                                      children: (0, i.jsxs)('div', {
                                          className: w().vibeWidgetContainer,
                                          ...(0, d.Am)(d.Xk.main.MAIN_PAGE),
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: w().actionsContainer,
                                                  children: [
                                                      (0, i.jsxs)('div', {
                                                          className: w().actionsContainerLeft,
                                                          children: [(0, i.jsx)(P.YS, { withMeta: !1, variant: 'mobile', className: w().userProfile }), ee],
                                                      }),
                                                      (0, i.jsxs)('div', { className: w().actionsContainerRight, children: [ee, J] }),
                                                  ],
                                              }),
                                              (0, i.jsx)($, {}),
                                          ],
                                      }),
                                  }),
                              })
                            : (0, i.jsx)(N.nVz, {
                                  pageId: N._Q$.HOME,
                                  children: (0, i.jsx)(j.hO, {
                                      scrollElement: D,
                                      headerElement: K,
                                      children: (0, i.jsxs)(h.N, {
                                          className: w().root,
                                          containerClassName: w().content,
                                          ref: F,
                                          ...(0, d.Am)(d.Xk.main.MAIN_PAGE),
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: w().actionsContainer,
                                                  children: [ea, (0, i.jsx)('div', { className: w().actionsContainerRight, children: J })],
                                              }),
                                              !H &&
                                                  (0, i.jsx)(N.FoH, {
                                                      blockIdForFrom: N.hf$.RUP_MAIN_RADIO,
                                                      blockId: N.UfI.RUP,
                                                      blockType: N.UfI.RUP,
                                                      blockPosX: 0,
                                                      blockPosY: 0,
                                                      objectsCount: 0,
                                                      children: (0, i.jsx)(C.CT, { className: w().vibe }),
                                                  }),
                                              (0, i.jsx)(b.EA, {
                                                  landing: T.landing,
                                                  headerConcealerComponent: (0, i.jsx)('div', { ref: V }),
                                                  errorComponent: (0, i.jsx)(f.w, { className: w().error, withBackwardControl: !1 }),
                                                  containerClassName: w().landing,
                                                  containerStyle: Z,
                                                  tabWithHeadingTitle: !0,
                                                  tabWithCovers: !0,
                                                  tabWithSubtitle: !0,
                                              }),
                                              ei,
                                          ],
                                      }),
                                  }),
                              }),
                    );
                    return (0, i.jsx)(N.rtM, { page: N.l7W.HOME_SCREEN, places: [N.RBW.MY_WAVE], children: en });
                });
        },
        28251: (e) => {
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
        28354: (e) => {
            e.exports = { root: 'SyncLyricsLine_root__r62BN' };
        },
        28367: (e) => {
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
        28587: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { D: () => i }),
                (function (e) {
                    (e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING');
                })(i || (i = {}));
        },
        28964: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => x, J: () => w });
            var i = a(62936),
                n = a(79950),
                r = a(44020),
                s = a(47480),
                o = a(8669),
                l = a(59935),
                c = a(60188),
                d = a(53030),
                u = a(42561),
                m = a(84872),
                _ = a.n(m),
                p = a(20418),
                v = a(81165),
                y = a.n(v);
            let h = (e) => {
                    let { value: t, variant: a, className: r, forwardRef: s, ...l } = e,
                        c = 'start' === a ? o.Kq.changeTimecode.TIMECODE_TIME_START : o.Kq.changeTimecode.TIMECODE_TIME_END;
                    return (0, i.jsx)(p.Caption, {
                        style: window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.() ? { opacity: 1 } : undefined,
                        ref: s,
                        tabIndex: 0,
                        className: (0, n.$)(y().root, y()['root_'.concat(a)], r),
                        variant: 'span',
                        size: 's',
                        type: 'entity',
                        weight: 'medium',
                        ...(0, o.Am)(c),
                        ...l,
                        children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: t }),
                    });
                },
                g = (0, r.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e })),
                x = (e) => {
                    var t, a, m, p;
                    let {
                            className: v,
                            sliderClassName: y,
                            disabled: h,
                            isFullscreen: x,
                            isMobile: b,
                            showThumbVariant: f,
                            withTimecode: C = !0,
                            sonataPlaybackId: k,
                            customDuration: j,
                            canMoveForward: A,
                        } = e,
                        P = (0, u.eGp)(),
                        N = (x || !b) && C,
                        S = (0, r.useRef)(!1),
                        { sonataState: T } = (0, u.Pjs)(),
                        [w, I] = (0, r.useState)(null != (m = T.position) ? m : 0),
                        [E, L] = (0, r.useState)(null != (p = T.duration) ? p : 0),
                        [B, M] = (0, r.useState)(0),
                        { formatMessage: O } = (0, s.A)(),
                        { advert: R } = (0, u.Pjs)(),
                        D = (0, u.rs2)(),
                        F = w && E ? (100 * Math.min(w, E)) / E : 0,
                        K = null == P ? void 0 : P.getState(k),
                        V = (0, u.PMf)(w),
                        z = (0, u.E4p)(Math.round(w), Math.round(E)),
                        W = (0, u.PMf)(E),
                        U = j && w > j,
                        Q = (0, l.c)((e, t) => {
                            R.isAdvertShown || ((S.current = !t), t ? null == P || P.setProgress(e, k) : I(e));
                        });
                    (0, r.useEffect)(() => {
                        U && (A ? null == P || P.moveForward(k) : (null == P || P.moveBackward(k), null == P || P.pause(k)));
                    }, [A, U, P, k]);
                    let G = (0, r.useCallback)(
                        (e) => {
                            e &&
                                (e.duration === 1 / 0
                                    ? (L(0), I(0), M(0))
                                    : (L(j && !R.isAdvertShown ? j : e.duration), I((t) => (S.current ? t : e.position)), M(e.loaded)));
                        },
                        [j, R.isAdvertShown],
                    );
                    (0, r.useEffect)(() => {
                        var e, t;
                        let a = null == D || null == (e = D.audioAdvertPlayback) ? void 0 : e.state.playerState.progress.onChange(G),
                            i = null == K || null == (t = K.playerState) ? void 0 : t.progress.onChange(G);
                        return () => {
                            null == i || i(), null == a || a();
                        };
                    }, [
                        null == D || null == (t = D.audioAdvertPlayback) ? void 0 : t.state.playerState.progress,
                        G,
                        null == K || null == (a = K.playerState) ? void 0 : a.progress,
                    ]);
                    let q = (0, c.L)(() => {
                        if (0 !== E) return j && j <= E ? Math.round(j) : Math.round(E);
                    });
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(_().root, { [_().root_fullscreen]: x, [_().root_mobile]: b, [_().root_withTimecode]: C }, v),
                        style: { '--track-progress': ''.concat(F, '%') },
                        ...(0, o.Am)(o.Kq.changeTimecode.TIMECODE_WRAPPER),
                        children: [
                            N && (0, i.jsx)(g, { role: 'text', 'aria-label': V, value: z, variant: 'start', className: _().timecode }),
                            (0, i.jsx)(d.A, {
                                'aria-valuetext': V,
                                className: (0, n.$)(_().slider, { [_()['slider_thumbSize_'.concat(b ? 'xs' : 'm')]]: !0 }, y),
                                disabled: h,
                                thumbSize: b ? 'xs' : 's',
                                trackSize: b ? 'xs' : 's',
                                value: Math.round(w),
                                mode: 'deferred',
                                secondaryValue: Math.round(B),
                                maxValue: q,
                                onChange: Q,
                                'aria-label': O({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: f,
                                ...(0, o.Am)(o.Kq.changeTimecode.TIMECODE_SLIDER),
                            }),
                            N &&
                                (0, i.jsx)(g, {
                                    role: 'text',
                                    'aria-label': W,
                                    value: (0, u.E4p)(Math.round(E), Math.round(E)),
                                    variant: 'end',
                                    className: _().timecode,
                                }),
                        ],
                    });
                };
            var b = a(19718),
                f = a(4497),
                C = a(46663),
                k = a(92022),
                j = a(78936),
                A = a(47380),
                P = a.n(A),
                N = a(36371),
                S = a.n(N);
            let T = (e) => {
                    let { progress: t, position: a, duration: s, timecodeClassName: o, currentTimecodeClassName: l, progressElementWidth: d, shouldHoldTimecode: m } = e,
                        _ = (0, u.PMf)(a),
                        p = (0, u.PMf)(s),
                        v = (0, r.useRef)(null),
                        [y, h] = (0, r.useState)(0),
                        x = (0, u.E4p)(Math.round(s), Math.round(s));
                    (0, r.useEffect)(() => {
                        v.current && h(Math.round(v.current.getBoundingClientRect().width));
                    }, [x.length, d]);
                    let b = Math.round((t / 100) * d),
                        f = 0 !== d ? d - y : 0,
                        C = Math.min(Math.max(b - y / 2, 0), f),
                        k = (0, c.L)(() => {
                            if (!m)
                                return {
                                    '--timecode-position': ''.concat(C, 'px'),
                                    ...(window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.() ? { opacity: 1 } : {}),
                                };
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(g, {
                                style: window.ALWAYS_SHOW_PLAYER_TIMESTAMPS?.() ? { opacity: 1 } : undefined,
                                role: 'text',
                                'aria-label': p,
                                value: x,
                                variant: 'end',
                                className: (0, n.$)(S().timecode, o, S().timecode_end, { [S().timecode_end_hidden]: !(b < f - y / 2) }),
                            }),
                            (0, i.jsx)(g, {
                                role: 'text',
                                'aria-label': _,
                                style: k,
                                ref: v,
                                value: (0, u.E4p)(Math.round(a), Math.round(s)),
                                variant: 'start',
                                className: (0, n.$)(S().timecode, S().timecode_current, o, l, {
                                    [S().timecode_current_animation]: y > 0,
                                    [S().timecode_current_hidden]: m && !(b > 2 * y),
                                }),
                            }),
                        ],
                    });
                },
                w = (0, b.PA)((e) => {
                    var t, a;
                    let { sliderClassName: m, disabled: _, isMobile: p, progressbarClassName: v, showThumbVariant: y, withTimecode: h = !0 } = e,
                        g = (0, u.eGp)(),
                        x = (0, r.useRef)(!1),
                        {
                            advert: b,
                            sonataState: A,
                            settings: N,
                            advertBanners: {
                                banners: { brandedPlayerBanner: S },
                            },
                        } = (0, u.Pjs)(),
                        { formatMessage: w } = (0, s.A)(),
                        I = (0, u.rs2)(),
                        [E, L] = (0, r.useState)(A.position),
                        [B, M] = (0, r.useState)(A.duration),
                        O = (0, u.PMf)(Math.round(null != E ? E : 0)),
                        R = E && B ? (100 * Math.min(E, B)) / B : 0,
                        D = (0, r.useRef)(null),
                        [F, K] = (0, r.useState)(0),
                        V = F > 0,
                        { state: z, toggleTrue: W, toggleFalse: U } = (0, f.e)(!1),
                        { state: Q, toggleTrue: G, toggleFalse: q } = (0, f.e)(!1),
                        $ = (0, c.L)(() => {
                            var e, t;
                            return S.isVisible && (null == (e = S.payload) ? void 0 : e.thumb)
                                ? { thumb: S.payload.thumb, onThumbAction: S.modal.open }
                                : N.selectedThumbId && N.selectedThumbId !== u.TZj.DEFAULT
                                  ? { thumb: null == (t = (0, k.rI)(w).get(N.selectedThumbId)) ? void 0 : t.thumb }
                                  : void 0;
                        });
                    (0, r.useEffect)(() => {
                        (null == g ? void 0 : g.state.playerState.status.value) === C.MT.PLAYING && q();
                    }, [q, null == g ? void 0 : g.state.playerState.status.value]),
                        (0, r.useEffect)(() => {
                            let e = null == g ? void 0 : g.state.queueState.currentEntity.onChange(G);
                            return (
                                q(),
                                () => {
                                    null == e || e();
                                }
                            );
                        }, [G, q, null == g ? void 0 : g.state.queueState.currentEntity]);
                    let Y = (0, l.c)((e, t) => {
                            b.isAdvertShown || ((x.current = !t), t ? null == g || g.setProgress(e) : L(e));
                        }),
                        H = (0, l.c)((e, t) => {
                            null !== e && null !== t && (e === 1 / 0 ? (M(0), L(0)) : (M(e), x.current || L(t)));
                        });
                    (0, r.useEffect)(() => {
                        H(A.duration, A.position);
                    }, [A.duration, A.position, H]),
                        (0, r.useEffect)(() => {
                            var e;
                            let t =
                                null == I || null == (e = I.audioAdvertPlayback)
                                    ? void 0
                                    : e.state.playerState.progress.onChange((e) => {
                                          e && b.isAdvertShown && H(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [null == I || null == (t = I.audioAdvertPlayback) ? void 0 : t.state.playerState.progress, H, b.isAdvertShown]);
                    let X = (R / 100) * F - 6;
                    (0, r.useEffect)(() => {
                        let e = new ResizeObserver(() => {
                            var e, t;
                            K(Math.round(null != (t = null == (e = D.current) ? void 0 : e.clientWidth) ? t : 0));
                        });
                        return (
                            D.current && e.observe(D.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, []);
                    let Z = {
                        '--size-thumb': ''.concat(12, 'px'),
                        '--track-progress': ''.concat(R, '%'),
                        '--thumb-position': ''.concat(X, 'px'),
                        ...(Q && { '--transition-disabled': 'none' }),
                    };
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(P().root, { [P().root_focusVisible]: z, [P().root_isPlayingTrack]: !b.isAdvertShown }),
                        style: Z,
                        ...(0, o.Am)(o.Kq.changeTimecode.TIMECODE_WRAPPER),
                        children: [
                            !p &&
                                h &&
                                V &&
                                (0, i.jsx)(T, {
                                    currentTimecodeClassName: $ ? void 0 : (0, n.$)(P().timecodeGroupCurrent, P().important),
                                    timecodeClassName: P().timecodeGroup,
                                    progress: R,
                                    position: null != E ? E : 0,
                                    duration: null != B ? B : 0,
                                    progressElementWidth: F,
                                    shouldHoldTimecode: !!$,
                                }),
                            (0, i.jsx)('div', { ref: D, className: (0, n.$)(P().progressbar, v) }),
                            V && !$ && (0, i.jsx)('div', { className: P().thumb }),
                            $ &&
                                (0, i.jsx)(k.Th, {
                                    className: P().brandedThumb,
                                    thumbData: null == $ ? void 0 : $.thumb,
                                    onThumbAction: null == $ ? void 0 : $.onThumbAction,
                                }),
                            (null == (a = S.payload) ? void 0 : a.modal) && (0, i.jsx)(j.N1, { modal: S.payload.modal }),
                            (0, i.jsx)(d.A, {
                                'aria-valuetext': O,
                                onClick: U,
                                onBlur: U,
                                onFocus: W,
                                className: (0, n.$)(P().slider, P().important, m),
                                disabled: _ || b.isAdvertShown,
                                'aria-label': w({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: y,
                                onChange: Y,
                                maxValue: B ? Math.round(B) : 0,
                                mode: 'deferred',
                                value: Math.round(null != E ? E : 0),
                                trackSize: 's',
                                thumbSize: 's',
                                ...(0, o.Am)(o.Kq.changeTimecode.TIMECODE_SLIDER),
                            }),
                            (0, i.jsx)('div', { className: P().backgroundProgressbar }),
                        ],
                    });
                });
        },
        29068: (e) => {
            e.exports = {
                root: 'PlayQueueBeforePlayingBlock_root__QIIfB',
                prevTrack: 'PlayQueueBeforePlayingBlock_prevTrack__5b6o4',
                animatedContent: 'PlayQueueBeforePlayingBlock_animatedContent__C04_K',
                animatedContent_moveToBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveToBottom__2gKF7',
                'move-to-bottom': 'PlayQueueBeforePlayingBlock_move-to-bottom__7EZIY',
                animatedContent_moveFromBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottom__0kTuW',
                'move-from-bottom': 'PlayQueueBeforePlayingBlock_move-from-bottom__8mDwi',
                'move-prev-track-from-bottom': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom__mFqMq',
                animatedContent_moveFromBottomSingleTrack: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottomSingleTrack__MIEIc',
                'move-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-from-bottom-single-track__YhsMT',
                'move-prev-track-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom-single-track__NGI9j',
            };
        },
        29553: (e) => {
            e.exports = {
                root: 'WordsCardPopoverDesktop_root__vm3hv',
                item: 'WordsCardPopoverDesktop_item__eZPj9',
                actionItem: 'WordsCardPopoverDesktop_actionItem__l25qD',
                actionItem_active: 'WordsCardPopoverDesktop_actionItem_active__BORi3',
                divider: 'WordsCardPopoverDesktop_divider__Vy2GN',
                sourceItem: 'WordsCardPopoverDesktop_sourceItem__fUPoo',
                sourceIcon: 'WordsCardPopoverDesktop_sourceIcon__QSr8h',
            };
        },
        32024: (e) => {
            e.exports = {
                root: 'PlayQueueTitle_root__E2XOW',
                root_withDnD: 'PlayQueueTitle_root_withDnD__8kctq',
                linkContainer: 'PlayQueueTitle_linkContainer__xqLIj',
                titleIcon: 'PlayQueueTitle_titleIcon__z1B_p',
                title: 'PlayQueueTitle_title__q3ppG',
                linkText: 'PlayQueueTitle_linkText__9mgvM',
                heading: 'PlayQueueTitle_heading__JrzQq',
                heading_withOffset: 'PlayQueueTitle_heading_withOffset__ZRyEr',
                subTitle: 'PlayQueueTitle_subTitle__RzrJA',
                modeTitle: 'PlayQueueTitle_modeTitle__KixWV',
            };
        },
        32655: (e) => {
            e.exports = {
                root: 'VibePageFreemiumBlock_root__HCPuh',
                button: 'VibePageFreemiumBlock_button__ULD2Z',
                description: 'VibePageFreemiumBlock_description__AaZUt',
            };
        },
        33134: (e) => {
            e.exports = {
                root: 'PlayQueueDnDDraggableTrack_root__ysTVY',
                dots: 'PlayQueueDnDDraggableTrack_dots__enjOX',
                noHoverItem: 'PlayQueueDnDDraggableTrack_noHoverItem__uHRh1',
            };
        },
        33322: (e) => {
            e.exports = {
                message: 'NotificationChangeQuality_message__coCvn',
                changeButton: 'NotificationChangeQuality_changeButton__Hzc3y',
                icon: 'NotificationChangeQuality_icon__bOfQO',
            };
        },
        33556: (e) => {
            e.exports = {
                content: 'MainPage_content__kskSM',
                root: 'MainPage_root__STXqc',
                container: 'MainPage_container__CB86l',
                vibe: 'MainPage_vibe__XEBbh',
                landing: 'MainPage_landing___FGNm',
                feedbackForm: 'MainPage_feedbackForm__fdo2L',
                feedbackFormCaption: 'MainPage_feedbackFormCaption__w4oAv',
                feedbackFormImageContainer: 'MainPage_feedbackFormImageContainer__kln7G',
                feedbackFormImage: 'MainPage_feedbackFormImage__Fzfsc',
                actionsContainer: 'MainPage_actionsContainer__t90JB',
                actionsContainerLeft: 'MainPage_actionsContainerLeft__kid2i',
                userProfile: 'MainPage_userProfile__8JzS3',
                actionsContainerRight: 'MainPage_actionsContainerRight__mCluH',
                vibeWidgetContainer: 'MainPage_vibeWidgetContainer__i5T4X',
                beta: 'MainPage_beta__y32vb',
                beta_withReleaseNotes: 'MainPage_beta_withReleaseNotes__WOjUk',
                specialHeaderContainer: 'MainPage_specialHeaderContainer__L3C6E',
                specialHeader: 'MainPage_specialHeader__aqdvj',
                specialHeaderImage: 'MainPage_specialHeaderImage__4GlXq',
                footer: 'MainPage_footer__2rGy2',
                error: 'MainPage_error__u_UCm',
            };
        },
        35096: (e) => {
            e.exports = {
                icon: 'PlayQueueButton_icon__7fc0G',
                icon_active: 'PlayQueueButton_icon_active__4A8H2',
                animation_scaled: 'PlayQueueButton_animation_scaled__w_Wir',
                scale: 'PlayQueueButton_scale__dXShR',
                animation_unscaled: 'PlayQueueButton_animation_unscaled__Lt_j9',
                unscale: 'PlayQueueButton_unscale__BlmKQ',
            };
        },
        35796: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => j, T: () => k });
            var i,
                n = a(49351),
                r = a(51606),
                s = a(15715),
                o = a(42561),
                l = a(54690),
                c = a(28587),
                d = a(58412),
                u = a(90914),
                m = a(32632);
            let _ = (e) =>
                e.items
                    .map((e, t) => {
                        var a, i, n, s;
                        switch (e.type) {
                            case c.D.WAVE:
                                return (0, r.wg)({
                                    id: e.id,
                                    index: t,
                                    type: c.D.WAVE,
                                    style: null != (a = e.style) ? a : d.y.DEFAULT,
                                    description: e.description,
                                    data: (0, m.lb)(e.data.wave, e.data.agent),
                                });
                            case c.D.ALBUM:
                                return (0, r.wg)({
                                    id: e.id,
                                    index: t,
                                    type: c.D.ALBUM,
                                    style: null != (i = e.style) ? i : d.y.DEFAULT,
                                    description: e.description,
                                    data: (0, u.sK)({ album: e.data.album }),
                                });
                            case c.D.PROMO_LINK:
                                return (0, r.wg)({
                                    id: e.id,
                                    index: t,
                                    type: c.D.PROMO_LINK,
                                    style: null != (n = e.style) ? n : d.y.DEFAULT,
                                    description: e.description,
                                    data: ((e) =>
                                        (0, r.wg)({ id: e.id, title: e.title, description: e.description, url: e.action.weblink, cover: e.cover, color: e.color }))(
                                        e.data,
                                    ),
                                });
                            case c.D.SETTING:
                                return (0, r.wg)({
                                    id: e.id,
                                    index: t,
                                    type: c.D.SETTING,
                                    style: null != (s = e.style) ? s : d.y.DEFAULT,
                                    description: e.description,
                                    data: { title: e.data.title, cover: e.data.cover },
                                });
                            default:
                                return null;
                        }
                    })
                    .filter((e) => null !== e);
            var p = a(9280);
            !(function (e) {
                (e.CLICK = 'CLICK'), (e.VIEW = 'VIEW');
            })(i || (i = {}));
            let v = r.gK
                    .model('BaseWheelItem', {
                        id: r.gK.string,
                        index: r.gK.number,
                        type: r.gK.enumeration(Object.values(c.D)),
                        style: r.gK.enumeration(Object.values(d.y)),
                        description: r.gK.maybe(r.gK.string),
                    })
                    .actions((e) => ({
                        handleFeedbackView() {
                            let { wheel: t } = (0, r.Zn)(e);
                            t.addFeedback(i.VIEW, e.type, e.id, e.index);
                        },
                        handleFeedbackClick() {
                            let { wheel: t } = (0, r.Zn)(e);
                            t.addFeedback(i.CLICK, e.type, e.id, e.index);
                        },
                    })),
                y = v.props({ type: r.gK.literal(c.D.ALBUM), data: p.J }),
                h = r.gK
                    .model('PromoLink', {
                        id: r.gK.string,
                        title: r.gK.string,
                        description: r.gK.maybe(r.gK.string),
                        url: r.gK.maybeNull(r.gK.string),
                        cover: l.$B,
                        color: r.gK.string,
                    })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) })),
                g = v.props({ type: r.gK.literal(c.D.PROMO_LINK), data: h }),
                x = r.gK.model('Setting', { title: r.gK.string, cover: l.$B }).actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.title) })),
                b = v.props({ type: r.gK.literal(c.D.SETTING), data: x }),
                f = v.props({ type: r.gK.literal(c.D.WAVE), data: m.Gh }),
                C = r.gK.union(f, y, g, b),
                k = r.gK
                    .compose(
                        r.gK.model('Wheel', {
                            wheelId: r.gK.optional(r.gK.string, ''),
                            items: r.gK.array(C),
                            activeIndex: r.gK.optional(r.gK.number, 1),
                            lastRequestId: r.gK.optional(r.gK.string, ''),
                        }),
                        l.XT,
                        l.pl,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading;
                        },
                        get isEmpty() {
                            return 0 === e.items.length;
                        },
                    }))
                    .actions((e) => {
                        let t = Array(100),
                            a = 0,
                            i = 0;
                        return {
                            setActiveIndex(t) {
                                e.activeIndex = t;
                            },
                            addFeedback(n, r, s, o) {
                                (t[a] = { wheelId: e.wheelId, timestamp: Date.now(), eventType: n, item: { type: r, id: s }, position: o }),
                                    (a = (a + 1) % 100),
                                    i < 100 && i++;
                            },
                            getData: (0, r.L3)(function* (n, l) {
                                let { context: d } = n,
                                    u = ((e) => {
                                        switch (e.type) {
                                            case s.b.ALBUM:
                                            case s.b.ARTIST:
                                                return ''.concat(e.type, ':').concat(e.data.id);
                                            case s.b.PLAYLIST:
                                                return ''.concat(e.type, ':').concat(e.data.playlistUuid);
                                            case s.b.WAVE:
                                                return ''.concat(e.type, ':').concat(e.data.seeds.join(','));
                                            case s.b.GENERATIVE:
                                            case s.b.CLIP:
                                                return e.type;
                                            case s.b.OTHER:
                                                var t, a;
                                                return ''.concat(e.type, ':').concat(null != (a = null == (t = e.data) ? void 0 : t.id) ? a : '');
                                        }
                                    })(d);
                                if (u === e.lastRequestId) return;
                                let { wheelResource: m, modelActionsLogger: p } = (0, r._$)(e);
                                e.loadingState = o.GuX.PENDING;
                                let v = (() => {
                                    if (0 === i) return [];
                                    let e = Array(i),
                                        n = (a - i + 100) % 100;
                                    for (let a = 0; a < i; a++) {
                                        let i = t[(n + a) % 100];
                                        i && (e[a] = i);
                                    }
                                    return e;
                                })();
                                try {
                                    let t = yield m.wheelNew({ context: d, feedbacks: v });
                                    (i = 0),
                                        (e.wheelId = t.wheelId),
                                        (e.items = (0, r.wg)(_(t))),
                                        (e.activeIndex = 1),
                                        (e.lastRequestId = u),
                                        (e.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    if ((p.error(t), e.isEmpty && l)) {
                                        let t = ((e) => {
                                            let t = e({ id: 'vibe-wheel.activity-description' }),
                                                a = e({ id: 'vibe-wheel.mood-description' });
                                            return {
                                                wheelId: 'PUMPKIN',
                                                items: [
                                                    {
                                                        id: 'activity:wake-up',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-wake-up' }), description: t, seeds: ['activity:wake-up'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/JVsyUlrs9Y',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/28592/rotor-activity-wake-up-agent-cover-RSUMc/%%',
                                                                    color: '#FFFFD6',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:road-trip',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-road-trip' }), description: t, seeds: ['activity:road-trip'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/Foah9sRLsS',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-activity-road-trip-agent-cover-S1vPp/%%',
                                                                    color: '#FFFFDF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:work-background',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: {
                                                                name: e({ id: 'vibe-wheel.activity-work-background' }),
                                                                description: t,
                                                                seeds: ['activity:work-background'],
                                                            },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/tsXpFHIBjM',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/2413828/rotor-activity-work-background-agent-cover-5t6qb/%%',
                                                                    color: '#FFFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:workout',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-workout' }), description: t, seeds: ['activity:workout'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/PexWCCcEc9',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/2413828/rotor-activity-workout-agent-cover-Wcrjo/%%',
                                                                    color: '#EBFFFE',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:fall-asleep',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-fall-asleep' }), description: t, seeds: ['activity:fall-asleep'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/J9QAoYnnPe',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/28592/rotor-activity-fall-asleep-agent-cover-XaOnj/%%',
                                                                    color: '#FAFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:energetic',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-energetic' }), description: a, seeds: ['mood:energetic'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/e6Ptlara08',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-mood-energetic-agent-cover-NrJtV/%%',
                                                                    color: '#FDFAFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:happy',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-happy' }), description: a, seeds: ['mood:happy'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/EzOBeQmIXi',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-mood-happy-agent-cover-JWFjr/%%',
                                                                    color: '#FFFFE8',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:sad',
                                                        type: c.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-sad' }), description: a, seeds: ['mood:sad'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/rrF2I4tUvZ',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/30221/rotor-mood-sad-agent-cover-IN0O6/%%',
                                                                    color: '#EAFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                ],
                                            };
                                        })(l);
                                        (e.wheelId = t.wheelId), (e.items = (0, r.wg)(_(t))), (e.activeIndex = 1);
                                    }
                                    e.loadingState = o.GuX.REJECT;
                                }
                            }),
                        };
                    }),
                j = n.default.default(
                    () =>
                        Promise.all([a.e(3598), a.e(6345), a.e(6602)])
                            .then(a.bind(a, 72694))
                            .then((e) => ({ default: e.Wheel })),
                    { ssr: !1 },
                );
        },
        36371: (e) => {
            e.exports = {
                timecode: 'TimecodeGroup_timecode__IJXpy',
                timecode_current: 'TimecodeGroup_timecode_current__wv9pb',
                timecode_current_animation: 'TimecodeGroup_timecode_current_animation__kZUW_',
                timecode_current_hidden: 'TimecodeGroup_timecode_current_hidden__D88_K',
                timecode_end: 'TimecodeGroup_timecode_end__kzP5g',
                timecode_end_hidden: 'TimecodeGroup_timecode_end_hidden__BxQ5h',
            };
        },
        38320: (e) => {
            e.exports = { root: 'LoadingPhrase_root__0ML0A', 'gradient-sweep': 'LoadingPhrase_gradient-sweep__SncsP', text: 'LoadingPhrase_text__Ne1FD' };
        },
        38331: (e) => {
            e.exports = {
                root: 'VibeRestrictions_root__efJez',
                diversity: 'VibeRestrictions_diversity__qfOls',
                moodEnergy: 'VibeRestrictions_moodEnergy__Le0Cy',
                contextItems: 'VibeRestrictions_contextItems__JrF7D',
            };
        },
        38598: (e) => {
            e.exports = {
                button: 'ChangeVolume_button__4HLEr',
                icon: 'ChangeVolume_icon__5Zv2a',
                sliderContainer: 'ChangeVolume_sliderContainer__pvOZa',
                sliderContainer_focusVisible: 'ChangeVolume_sliderContainer_focusVisible__1JxI9',
                wrapperSlider: 'ChangeVolume_wrapperSlider__9S1Vi',
                root: 'ChangeVolume_root__HDxtA',
                slider: 'ChangeVolume_slider__fCKGZ',
                important: 'ChangeVolume_important__ZIYpu',
            };
        },
        39946: (e) => {
            e.exports = {
                root: 'QualitySettings_root__bsEFH',
                root_withEqualizer: 'QualitySettings_root_withEqualizer__KF0Ng',
                root_withNewQuality: 'QualitySettings_root_withNewQuality__wP_x5',
                header: 'QualitySettings_header__azQ0H',
                list: 'QualitySettings_list__ggzI6',
                equalizer: 'QualitySettings_equalizer__bt11k',
                headerWithCloseButton: 'QualitySettings_headerWithCloseButton__VHskw',
                itemWrapper: 'QualitySettings_itemWrapper__3KKwt',
                item: 'QualitySettings_item__2SGU_',
                item_option: 'QualitySettings_item_option__KuE4e',
                item_type: 'QualitySettings_item_type___96WF',
                expandedItem: 'QualitySettings_expandedItem__kCxQb',
                itemSubTitle: 'QualitySettings_itemSubTitle__rNJL_',
                menuContent: 'QualitySettings_menuContent__SzqoC',
                button_active: 'QualitySettings_button_active__Nivv_',
            };
        },
        40688: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => n });
            var i = a(81959);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Various;
            }
        },
        43143: (e) => {
            e.exports = { root: 'VibeDynamicArtists_root__Wbigy' };
        },
        45588: (e) => {
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
        45983: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktop_root___8vo1',
                important: 'FullscreenPlayerDesktop_important__dGfiL',
                header: 'FullscreenPlayerDesktop_header__OBhzq',
                modalContent: 'FullscreenPlayerDesktop_modalContent__Zs_LC',
                notification: 'FullscreenPlayerDesktop_notification__luD_J',
                closeButton: 'FullscreenPlayerDesktop_closeButton__MQ64s',
            };
        },
        46410: (e, t, a) => {
            'use strict';
            a.d(t, { LW: () => o, NY: () => s, pA: () => l, t$: () => r });
            var i = a(49351),
                n = a(44020);
            let r = (0, n.lazy)(async () =>
                    Promise.all([a.e(337), a.e(9815)])
                        .then(a.bind(a, 19815))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                s = (0, n.lazy)(async () =>
                    Promise.all([a.e(337), a.e(3668)])
                        .then(a.bind(a, 23668))
                        .then((e) => ({ default: e.VibeAnimation })),
                ),
                o = i.default.default(
                    () =>
                        Promise.all([a.e(337), a.e(1276)])
                            .then(a.bind(a, 11276))
                            .then((e) => ({ default: e.VibeWidgetFallbackAnimation })),
                    { ssr: !1 },
                ),
                l = i.default.default(
                    () =>
                        Promise.all([a.e(337), a.e(1356)])
                            .then(a.bind(a, 51356))
                            .then((e) => ({ default: e.VibeWidgetAnimation })),
                    { ssr: !1 },
                );
        },
        47380: (e) => {
            e.exports = {
                backgroundProgressbar: 'ChangeTimecodeBackground_backgroundProgressbar__hT_QP',
                progressbar: 'ChangeTimecodeBackground_progressbar__M93Ie',
                timecodeGroup: 'ChangeTimecodeBackground_timecodeGroup__2VQ1N',
                thumb: 'ChangeTimecodeBackground_thumb__vx6J0',
                timecodeGroupCurrent: 'ChangeTimecodeBackground_timecodeGroupCurrent__aGlrB',
                important: 'ChangeTimecodeBackground_important__OSzLR',
                root_focusVisible: 'ChangeTimecodeBackground_root_focusVisible__RLp5i',
                root: 'ChangeTimecodeBackground_root__B89FS',
                root_isPlayingTrack: 'ChangeTimecodeBackground_root_isPlayingTrack__2naHL',
                brandedThumb: 'ChangeTimecodeBackground_brandedThumb__igXsO',
                slider: 'ChangeTimecodeBackground_slider__Jdu3l',
            };
        },
        47624: (e) => {
            e.exports = { root: 'SyncLyricsFooter_root__STCKQ', major: 'SyncLyricsFooter_major__QMZmT', writers: 'SyncLyricsFooter_writers__c7zhj' };
        },
        53089: (e) => {
            e.exports = {
                root: 'VibeContextMenu_root__872YP',
                menuList: 'VibeContextMenu_menuList__xL0gF',
                divider: 'VibeContextMenu_divider__45urL',
                menuItem: 'VibeContextMenu_menuItem__RK1Sg',
                important: 'VibeContextMenu_important__77XRm',
                important_active: 'VibeContextMenu_important_active__hkGqq',
                menuItemIcon: 'VibeContextMenu_menuItemIcon__JLT2w',
            };
        },
        54231: (e) => {
            e.exports = {
                root: 'WordsCardPopoverMobile_root__iHBbJ',
                container: 'WordsCardPopoverMobile_container___Eq_i',
                text: 'WordsCardPopoverMobile_text__j52Bl',
                sources: 'WordsCardPopoverMobile_sources__fKNrx',
                sourceItem: 'WordsCardPopoverMobile_sourceItem__XBH1a',
                action: 'WordsCardPopoverMobile_action__c_FPQ',
                sourceIcon: 'WordsCardPopoverMobile_sourceIcon__aWdrm',
                feedbackSection: 'WordsCardPopoverMobile_feedbackSection__25RsC',
                feedbackQuestion: 'WordsCardPopoverMobile_feedbackQuestion__NKSto',
                feedbackButtons: 'WordsCardPopoverMobile_feedbackButtons__Cd9Yf',
                feedbackButton: 'WordsCardPopoverMobile_feedbackButton__tejta',
                feedbackButton_active: 'WordsCardPopoverMobile_feedbackButton_active__XJl7S',
            };
        },
        54762: (e) => {
            e.exports = {
                icon: 'SyncLyricsButton_icon__m0Gdk',
                icon_active: 'SyncLyricsButton_icon_active__6WcWG',
                animation_scaled: 'SyncLyricsButton_animation_scaled__vwsc_',
                scale: 'SyncLyricsButton_scale__FGAYV',
                animation_unscaled: 'SyncLyricsButton_animation_unscaled__eM1Wb',
                unscale: 'SyncLyricsButton_unscale__ceLQu',
            };
        },
        56013: (e) => {
            e.exports = {
                root: 'PlayQueueVibeBlock_root__cVjcM',
                ripple: 'PlayQueueVibeBlock_ripple__Ig_pb',
                vibeCover: 'PlayQueueVibeBlock_vibeCover__THxKz',
                title: 'PlayQueueVibeBlock_title__G3kir',
                vibeTitle: 'PlayQueueVibeBlock_vibeTitle__C5fWp',
            };
        },
        58412: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { y: () => i }),
                (function (e) {
                    (e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT');
                })(i || (i = {}));
        },
        58419: (e) => {
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
        59244: (e) => {
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
                action: 'WordsCard_action__v4Jp1',
                popoverContent: 'WordsCard_popoverContent__NHYuc',
            };
        },
        60228: (e, t, a) => {
            'use strict';
            a.d(t, { rM: () => r, S0: () => n, sr: () => i, D7: () => m, hY: () => C, CT: () => $, mx: () => et, KA: () => en });
            let i = { minFontSize: 24, maxFontSize: 64, maxLines: 2, lineHeight: 1.1 },
                n = { minFontSize: 48, maxFontSize: 200, maxLines: 5, lineHeight: 1.1 },
                r = { minFontSize: 48, maxFontSize: 104, maxLines: void 0, lineHeight: 1.1 },
                s = { maxFontSize: 24, minFontSize: 14, lineHeight: 1 };
            var o,
                l = a(51606);
            (o || (o = {})).OK = 'ok';
            var c = a(32632),
                d = a(42561),
                u = a(54690);
            let m = l.gK
                .compose(
                    l.gK.model('VibeActions', {
                        meta: l.gK.maybeNull(c.Gh),
                        applyingSetting: l.gK.maybeNull(l.gK.string),
                        isApplying: l.gK.boolean,
                        vibeResetLoadingState: l.gK.enumeration(Object.values(d.GuX)),
                    }),
                    u.XT,
                )
                .views((e) => ({
                    get isMyVibe() {
                        return e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === d.M19;
                    },
                    get isShuffleVibe() {
                        var t;
                        return e.meta && 1 === e.meta.seeds.length && (null == (t = e.meta.seeds[0]) ? void 0 : t.includes(d.yxZ));
                    },
                }))
                .actions((e) => ({
                    getLastVibe: (0, l.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, l._$)(e);
                        if (e.loadingState !== d.GuX.PENDING)
                            try {
                                e.loadingState = d.GuX.PENDING;
                                let a = yield t.waveLast();
                                (e.meta = (0, c.lb)(a)), (e.loadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.loadingState = d.GuX.REJECT);
                            }
                    }),
                    vibeReset: (0, l.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, l._$)(e);
                        if (e.vibeResetLoadingState !== d.GuX.PENDING)
                            try {
                                (e.vibeResetLoadingState = d.GuX.PENDING),
                                    (yield t.waveLastReset()) === o.OK && (e.meta = (0, c.lb)({ name: '', seeds: [d.M19] })),
                                    (e.vibeResetLoadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.vibeResetLoadingState = d.GuX.REJECT);
                            }
                    }),
                    setApplyingSetting(t) {
                        t ? (e.applyingSetting = (0, l.wg)(t)) : (e.applyingSetting = null);
                    },
                    setIsApplying(t) {
                        e.isApplying = t;
                    },
                    setVibe(t) {
                        e.meta = (0, c.lb)(t);
                    },
                    reset() {
                        (e.meta = null), (e.vibeResetLoadingState = d.GuX.IDLE), (e.loadingState = d.GuX.IDLE);
                    },
                }));
            var _ = a(62936),
                p = a(19718),
                v = a(47480),
                y = a(23480),
                h = a(59935),
                g = a(13030),
                x = a(85906),
                b = a(98483),
                f = a.n(b);
            let C = (0, p.PA)((e) => {
                var t;
                let { artist: a, withLink: i, onClick: n } = e,
                    { formatMessage: r } = (0, v.A)(),
                    s = (0, d.NKK)(),
                    o = null == (t = a.cutoutCover) ? void 0 : t.uri,
                    l = r({ id: 'entity-names.artist-name' }, { artistName: a.name }),
                    c = (0, h.c)(() => {
                        s({ to: y.QT.ArtistScreen });
                    }),
                    u = (0, _.jsx)(g.Image, {
                        className: f().cover,
                        fit: 'contain',
                        src: o,
                        size: 'orig',
                        withAvatarReplace: !0,
                        alt: l,
                        'aria-hidden': !0,
                        withLoadingIndicator: !1,
                    });
                return i
                    ? (0, _.jsx)(x.N_, { className: f().root, href: a.url, onClick: c, 'aria-hidden': !0, children: u })
                    : (0, _.jsx)('div', { className: f().root, onClick: n, 'aria-hidden': !0, children: u });
            });
            var k = a(79950),
                j = a(69526),
                A = a(44020),
                P = a.t(A, 2),
                N = a(26731),
                S = a(8669),
                T = a(56874),
                w = a(97378),
                I = a(5099),
                E = a(20418),
                L = a(46410),
                B = a(85742),
                M = a(21175),
                O = a.n(M);
            let R = !0,
                D = (0, p.PA)((e) => {
                    let { isPlaying: t, onClick: a, ariaDisabled: i, className: n } = e,
                        { vibe: r } = (0, d.Pjs)(),
                        { formatMessage: s } = (0, v.A)(),
                        o = (0, d.W6M)(),
                        l = (0, d.D60)(),
                        c = t ? 'pauseVibe' : 'playVibe',
                        u = t ? S.e8.vibe.MY_VIBE_PAUSE_BUTTON : S.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        m = (0, A.useMemo)(() => (t ? s({ id: 'vibe-actions.aria-label-pause' }) : s({ id: 'vibe-actions.aria-label-play' })), [s, t]),
                        p = (0, A.useCallback)(
                            (e) => {
                                r.isApplying || null == a || a(), e.stopPropagation(), e.preventDefault();
                            },
                            [a, r.isApplying],
                        );
                    return (
                        (0, A.useEffect)(() => {
                            if ('production' === l && 1 === o.length && R) {
                                var e, t;
                                let a = Math.round(performance.now());
                                null == (t = window.Ya) || null == (e = t.Rum) || e.sendTimeMark('my-vibe-button-loading-time', a), (R = !1);
                            }
                        }, []),
                        (0, _.jsx)(I.$, {
                            className: (0, k.$)(O().root, { [O().root_isVibeLoading]: r.isApplying }, n),
                            withRipple: !1,
                            withHover: !1,
                            onClick: p,
                            variant: 'text',
                            'aria-disabled': r.isApplying || i,
                            'aria-label': m,
                            icon: (0, _.jsx)(B.Icon, { size: 's', className: O().icon, variant: c }),
                            ...(0, S.Am)(u),
                            children: (0, _.jsx)(N.A, { id: 'entity-names.my-vibe' }),
                        })
                    );
                });
            D.displayName = 'PlayButton';
            var F = a(28367),
                K = a.n(F),
                V = a(60188),
                z = a(10163),
                W = a(16569),
                U = a.n(W);
            let Q = (0, p.PA)((e) => {
                    var t;
                    let { context: a, onResetClick: i, className: n } = e,
                        {
                            vibe: r,
                            settings: { isMobile: s },
                            experiments: o,
                        } = (0, d.Pjs)(),
                        { formatMessage: l } = (0, v.A)(),
                        u = (0, c.A7)(r.meta),
                        m = a && !s,
                        p = (0, V.L)(() => {
                            var e;
                            return o.checkExperiment(d.zal.WebNextVibeDescription, 'on') && (null == (e = r.meta) ? void 0 : e.isMix)
                                ? l({ id: 'vibe-actions.vibe-context' }, { type: r.meta.type, name: a })
                                : a;
                        });
                    return (0, _.jsxs)('div', {
                        className: (0, k.$)(U().root, n),
                        children: [
                            m &&
                                (0, _.jsx)(x.O0, {
                                    size: 'm',
                                    iconSize: 'xs',
                                    withScaleAnimation: !1,
                                    isPinned: null == (t = r.meta) ? void 0 : t.isPinned,
                                    onClick: u,
                                    className: U().pinButton,
                                }),
                            (0, _.jsx)(z.s$, {}),
                            a &&
                                (0, _.jsxs)('div', {
                                    className: (0, k.$)(U().context),
                                    ...(0, S.Am)(S.e8.vibe.VIBE_CONTEXT),
                                    children: [
                                        (0, _.jsx)(E.Caption, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', lineClamp: 1, children: p }),
                                        (0, _.jsx)(I.$, {
                                            className: U().resetButton,
                                            variant: 'text',
                                            radius: 'round',
                                            withRipple: !1,
                                            icon: (0, _.jsx)(B.Icon, { variant: 'close', size: 'xxs' }),
                                            onClick: i,
                                            'aria-label': ''.concat(l({ id: 'vibe-actions.reset-settings' }), ' ').concat(p),
                                            ...(0, S.Am)(S.e8.vibe.RESET_VIBE_CONTEXT_BUTTON),
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                G = 'vibe-block',
                q = 'vibe-block-controls',
                $ = (0, p.PA)((e) => {
                    var t, a, i, n;
                    let { className: r } = e,
                        s = (0, j.useRouter)(),
                        { vibe: o, experiments: l, user: c } = (0, d.Pjs)(),
                        u = (0, A.useRef)(null),
                        [m, p] = (0, T.d)(),
                        { pageId: v } = (0, d.$au)(),
                        { blockIdForFrom: y } = (0, d.N8n)(),
                        { isFreemium: g } = (0, d.XCI)(),
                        {
                            openPaymentWidgetModal: b,
                            saveOfferAndAuthorize: f,
                            isShimmerActive: C,
                            isShimmerVisible: P,
                            mainText: B,
                            mainTextA11y: M,
                            additionText: O,
                        } = (0, d.DpZ)({ storeName: 'music', isEnabled: g, offerElement: { element: m, intersectionPropertyId: q } }),
                        { isIntersecting: R } = null != (i = (0, w.BL)([u], { preflightCheck: !1 }, !u.current)[G]) ? i : {},
                        F = (0, d.NFA)().get(d.QGx),
                        {
                            isVibeContext: V,
                            isPlaying: z,
                            togglePlay: W,
                            resetSettings: U,
                        } = (0, d.B0S)({ seeds: null != (n = null == (t = o.meta) ? void 0 : t.seeds) ? n : [], pageIdForFrom: v, blockIdForFrom: y }),
                        $ = l.checkExperiment(d.zal.WebNextDisableVibeSettings, 'on') || g || !c.isAuthorized,
                        Y = (0, A.useCallback)(() => {
                            V ? U() : o.vibeResetLoadingState !== d.GuX.PENDING && o.vibeReset();
                        }, [V, o, U]),
                        H = (0, A.useCallback)(() => {
                            if (!c.isAuthorized) {
                                if (!F.authorizationUrl) return;
                                s.push(F.authorizationUrl);
                                return;
                            }
                            g && b();
                        }, [c.isAuthorized, F.authorizationUrl, s, g, b]),
                        X = (0, A.useCallback)(
                            (e) => {
                                e.stopPropagation(), e.preventDefault(), H();
                            },
                            [H],
                        ),
                        Z = (0, A.useCallback)(() => {
                            if (g || !c.isAuthorized) return void H();
                            W();
                        }, [g, c.isAuthorized, W, H]),
                        J = (0, A.useMemo)(
                            () =>
                                l.checkExperiment(d.zal.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, _.jsx)(L.t$, { className: K().vibeAnimation })
                                    : (0, _.jsx)(L.NY, { isIntersecting: R, className: K().vibeAnimation }),
                            [l, R],
                        ),
                        ee = (0, h.c)(() => {
                            if (!c.isAuthorized) return void f();
                            b();
                        }),
                        et = (0, A.useMemo)(
                            () =>
                                l.checkExperiment(d.zal.WebNextUnauthorizedSubscriptionButton, 'on')
                                    ? (0, _.jsxs)(I.$, {
                                          isBlock: !0,
                                          radius: 'xxxl',
                                          size: 'l',
                                          color: 'plus',
                                          className: K().button,
                                          onClick: ee,
                                          ...(0, S.Am)(S.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON_UNAUTH),
                                          children: [
                                              (0, _.jsx)(E.Caption, { className: K().text_main, variant: 'div', size: 'l', children: B }),
                                              O && (0, _.jsx)(E.Caption, { className: K().text_addition, variant: 'div', size: 'm', children: O }),
                                          ],
                                      })
                                    : (0, _.jsx)(x.Hi, { size: 'l', className: K().button }),
                            [O, l, ee, B],
                        );
                    return (
                        (0, A.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        c.isAuthorized && o.isNeededToLoad && (0, A.use)(o.getLastVibe()),
                        (0, _.jsxs)('div', {
                            className: (0, k.$)(K().root, { [K().root_freemium]: g || !c.isAuthorized }, r),
                            ref: u,
                            'data-intersection-property-id': G,
                            ...(0, S.Am)(S.e8.vibe.VIBE_BLOCK),
                            children: [
                                J,
                                (0, _.jsxs)('div', {
                                    className: K().controls,
                                    onClick: X,
                                    ref: p,
                                    'data-intersection-property-id': q,
                                    children: [
                                        (0, _.jsx)(D, { className: K().playButton, isPlaying: z, ariaDisabled: g || !c.isAuthorized, onClick: Z }),
                                        !$ && (0, _.jsx)(Q, { className: K().settingsButton, context: null == (a = o.meta) ? void 0 : a.context, onResetClick: Y }),
                                        (g || !c.isAuthorized) &&
                                            (0, _.jsx)(E.Caption, {
                                                className: K().subscriptionText,
                                                variant: 'div',
                                                size: 'l',
                                                ...(0, S.Am)(S.e8.vibe.MY_VIBE_SUBSCRIPTION_TEXT),
                                                children: (0, _.jsx)(N.A, { id: 'vibe-freemium.available-in-plus', values: { br: (0, _.jsx)('br', {}) } }),
                                            }),
                                        !c.isAuthorized && et,
                                        c.isAuthorized &&
                                            g &&
                                            (0, _.jsx)(x.b4, {
                                                isShimmerActive: C,
                                                isShimmerVisible: P,
                                                onClick: b,
                                                mainText: B,
                                                ariaLabel: M,
                                                additionText: O,
                                                className: K().button,
                                                ...(0, S.Am)(S.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON),
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            $.displayName = 'VibeBlock';
            var Y = {
                    5969: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0);
                        let i = a(810),
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
                            let { container: t, containerWidth: a, containerHeight: i, minFontSize: r, maxFontSize: s, lineHeight: o, maxLines: l } = e,
                                c = ((e, t, a) => {
                                    let i = e.cloneNode(!0);
                                    return (
                                        (i.style.cssText =
                                            '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                t,
                                                'px !important;\n    ',
                                            )),
                                        n(i),
                                        i.style.setProperty('--dynamic-line-height', String(a)),
                                        document.body.appendChild(i),
                                        i
                                    );
                                })(t, a, o);
                            try {
                                let e = r,
                                    t = s,
                                    n = r;
                                for (; e <= t; ) {
                                    let r = Math.floor((e + t) / 2);
                                    c.style.setProperty('--dynamic-font-size', ''.concat(r, 'px'));
                                    let s = 'number' == typeof l ? c.scrollHeight <= Math.min(l * r * o, i) : c.scrollHeight <= i,
                                        d = c.scrollWidth <= a + 1;
                                    s && d ? ((n = r), (e = r + 1)) : (t = r - 1);
                                }
                                return n - 1;
                            } finally {
                                c.remove();
                            }
                        }),
                            (t.useDynamicText = (e, a) => {
                                (0, i.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(a.lineHeight));
                                    let i = () => {
                                            let { width: i, height: n } = e.getBoundingClientRect(),
                                                r = e.childNodes.length > 0;
                                            if (0 === i || 0 === n || !r) return;
                                            let s = (0, t.findOptimalFontSize)({ container: e, containerWidth: i, containerHeight: n, ...a });
                                            e.style.setProperty('--dynamic-font-size', ''.concat(s, 'px'));
                                        },
                                        n = new ResizeObserver(i),
                                        r = new MutationObserver(i);
                                    return (
                                        n.observe(e),
                                        r.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(i),
                                        i(),
                                        () => {
                                            n.disconnect(), r.disconnect();
                                        }
                                    );
                                }, [e, a]);
                            });
                    },
                    810: (e) => {
                        e.exports = P;
                    },
                },
                H = {},
                X = (function e(t) {
                    var a = H[t];
                    if (void 0 !== a) return a.exports;
                    var i = (H[t] = { exports: {} });
                    return Y[t](i, i.exports, e), i.exports;
                })(5969);
            X.__esModule, X.findOptimalFontSize;
            var Z = X.useDynamicText,
                J = a(43143),
                ee = a.n(J);
            let et = (e) => {
                let { options: t, children: a } = e,
                    [i, n] = (0, T.d)();
                return Z(i, t), (0, _.jsx)('div', { ref: n, className: ee().root, children: a });
            };
            var ea = a(84375),
                ei = a.n(ea);
            let en = (0, p.PA)((e) => {
                let { context: t, isResetAvailable: a, isHidden: i, onClick: n, className: r } = e,
                    { vibe: o, sonataState: l } = (0, d.Pjs)(),
                    { formatMessage: c } = (0, v.A)(),
                    [u, m] = (0, T.d)();
                Z(u, s);
                let p = (0, d.brA)(),
                    y = c({ id: 'interface-actions.reset-context' }, { context: t }),
                    g = (0, h.c)(() => {
                        n(), p(!0);
                    }),
                    x = o.isShuffleVibe && l.isVibeContext,
                    b = (0, V.L)(() => (x ? c({ id: 'entity-names.my-vibe' }) : t));
                return (0, _.jsx)('div', {
                    className: (0, k.$)(ei().root, r, { [ei().root_visible]: !i }),
                    ref: m,
                    children:
                        !!t &&
                        (0, _.jsxs)('div', {
                            className: (0, k.$)(ei().container, { [ei().container_withReset]: a }),
                            children: [
                                (0, _.jsx)('div', {
                                    className: (0, k.$)(ei().contextWrapper, { [ei().contextWrapper_withReset]: a }),
                                    children: (0, _.jsx)(E.Caption, { variant: 'span', className: ei().context, lineClamp: 2, children: b }),
                                }),
                                a &&
                                    (0, _.jsx)(I.$, {
                                        variant: 'text',
                                        className: ei().button,
                                        radius: 'xxxl',
                                        withHover: !1,
                                        withRipple: !1,
                                        onClick: g,
                                        'aria-label': y,
                                        children: (0, _.jsx)(B.Icon, { variant: 'close_filled', size: 'xs' }),
                                    }),
                            ],
                        }),
                });
            });
        },
        60714: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktopContent_root__tKNGK',
                fullscreenContent: 'FullscreenPlayerDesktopContent_fullscreenContent__Nvety',
                fullscreenContent_enter: 'FullscreenPlayerDesktopContent_fullscreenContent_enter__xMN2Y',
                'enter-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_enter-fade-fullscreen-content__eOCyM',
                fullscreenContent_leave: 'FullscreenPlayerDesktopContent_fullscreenContent_leave__6HeZ_',
                'leave-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_leave-fade-fullscreen-content__kswW5',
                fullscreenContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_fullscreenContent_withDisabledInsetTransition___gd__',
                additionalContent: 'FullscreenPlayerDesktopContent_additionalContent__tuuy7',
                additionalContent_enter: 'FullscreenPlayerDesktopContent_additionalContent_enter__WQmXC',
                additionalContent_enter_active: 'FullscreenPlayerDesktopContent_additionalContent_enter_active__a3nOf',
                'enter-fade-additional-content': 'FullscreenPlayerDesktopContent_enter-fade-additional-content__awk7_',
                additionalContent_exit: 'FullscreenPlayerDesktopContent_additionalContent_exit__aM4Or',
                additionalContent_exit_active: 'FullscreenPlayerDesktopContent_additionalContent_exit_active__vokVE',
                'leave-fade-additional-content': 'FullscreenPlayerDesktopContent_leave-fade-additional-content__dlFhp',
                additionalContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_additionalContent_withDisabledInsetTransition__kvSmh',
                info: 'FullscreenPlayerDesktopContent_info__Dq69p',
                artists: 'FullscreenPlayerDesktopContent_artists__a_2G3',
                nonMusicAuthors: 'FullscreenPlayerDesktopContent_nonMusicAuthors__JhhPY',
                meta: 'FullscreenPlayerDesktopContent_meta__3jDTy',
                title: 'FullscreenPlayerDesktopContent_title__I2JrP',
                meta_isSplitMode: 'FullscreenPlayerDesktopContent_meta_isSplitMode__zPC2S',
                ellipsis: 'FullscreenPlayerDesktopContent_ellipsis__2Qk2b',
                sliderContainer: 'FullscreenPlayerDesktopContent_sliderContainer__FtBZ7',
                slider: 'FullscreenPlayerDesktopContent_slider__FJscl',
                syncLyrics: 'FullscreenPlayerDesktopContent_syncLyrics__6dTfH',
                syncLyricsContent: 'FullscreenPlayerDesktopContent_syncLyricsContent__H_enX',
                syncLyricsLoader: 'FullscreenPlayerDesktopContent_syncLyricsLoader__EQ8o9',
                syncLyricsScroller: 'FullscreenPlayerDesktopContent_syncLyricsScroller__JslVK',
                syncLyricsFooter: 'FullscreenPlayerDesktopContent_syncLyricsFooter__HS8JZ',
                syncLyricsCounter: 'FullscreenPlayerDesktopContent_syncLyricsCounter__CnB_k',
            };
        },
        60902: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopButton_root__qGgoC', button: 'FullscreenPlayerDesktopButton_button__7NEl6' };
        },
        61363: (e) => {
            e.exports = {
                root: 'VibeSettingsModal_root__oX6Av',
                modalContent: 'VibeSettingsModal_modalContent__KObkt',
                overlay: 'VibeSettingsModal_overlay__qKFx_',
                content: 'VibeSettingsModal_content__Uchn7',
                header: 'VibeSettingsModal_header__J4FUk',
                actions: 'VibeSettingsModal_actions__hCGT7',
                ripple: 'VibeSettingsModal_ripple__zQXGo',
            };
        },
        61762: (e) => {
            e.exports = {
                line: 'SyncLyricsScroller_line__Vh6WN',
                counter: 'SyncLyricsScroller_counter__B2E7K',
                counterLine: 'SyncLyricsScroller_counterLine__NpBT4',
                root: 'SyncLyricsScroller_root__amiLm',
                root_withVisibleUpperLyrics: 'SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO',
                root_withVisibleScrolledLyrics: 'SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE',
                root_intro: 'SyncLyricsScroller_root_intro__13gls',
                root_outro: 'SyncLyricsScroller_root_outro__XlDH5',
                line_last: 'SyncLyricsScroller_line_last__liS_1',
                root_prepare: 'SyncLyricsScroller_root_prepare__h0Gf1',
                line_active: 'SyncLyricsScroller_line_active__6lLvH',
            };
        },
        62973: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobile_root__Sqyh0',
                important: 'FullscreenPlayerMobile_important__1lAN3',
                header: 'FullscreenPlayerMobile_header__8KH28',
                headerCenter: 'FullscreenPlayerMobile_headerCenter___EqSP',
                modalContent: 'FullscreenPlayerMobile_modalContent__m2cbB',
                castButton: 'FullscreenPlayerMobile_castButton__3ZgER',
                footer: 'FullscreenPlayerMobile_footer__LRvhK',
                footerContainer: 'FullscreenPlayerMobile_footerContainer__aupK1',
                playQueueButton_active: 'FullscreenPlayerMobile_playQueueButton_active__CG2s8',
                syncLyricsButton_active: 'FullscreenPlayerMobile_syncLyricsButton_active__6L4YF',
                notification: 'FullscreenPlayerMobile_notification__V1cxP',
            };
        },
        67202: (e) => {
            e.exports = { root: 'SyncLyrics_root__6KZg4', content: 'SyncLyrics_content__lbkWP' };
        },
        68443: (e) => {
            e.exports = {
                root: 'PlayerBarDesktop_root__d2Hwi',
                info: 'PlayerBarDesktop_info__56v53',
                infoCard: 'PlayerBarDesktop_infoCard__tnLS6',
                coverContainer: 'PlayerBarDesktop_coverContainer__2Z5nQ',
                cover: 'PlayerBarDesktop_cover__IYLwR',
                description: 'PlayerBarDesktop_description__eQ_tA',
                artists: 'PlayerBarDesktop_artists__N5vpf',
                artistLink: 'PlayerBarDesktop_artistLink__Btgdq',
                infoButtons: 'PlayerBarDesktop_infoButtons__iSpa_',
                sonata: 'PlayerBarDesktop_sonata__sJHY_',
                meta: 'PlayerBarDesktop_meta__6sm58',
                settingsButton: 'PlayerBarDesktop_settingsButton__jLkVn',
            };
        },
        71070: (e) => {
            e.exports = {
                root: 'PlayQueueDnDTrackWrapper_root__CithE',
                inner: 'PlayQueueDnDTrackWrapper_inner__xq3xM',
                dragging: 'PlayQueueDnDTrackWrapper_dragging__Tk9uP',
                dragOverlay: 'PlayQueueDnDTrackWrapper_dragOverlay__ulF2W',
            };
        },
        73630: (e) => {
            e.exports = {
                root: 'PlayQueueNowPlayingBlock_root__aJSb8',
                important: 'PlayQueueNowPlayingBlock_important__sxxvA',
                track: 'PlayQueueNowPlayingBlock_track__ClZLs',
                track_withDnD: 'PlayQueueNowPlayingBlock_track_withDnD__D8h0r',
                track_moveFromTop: 'PlayQueueNowPlayingBlock_track_moveFromTop__pBBJt',
                'move-from-top': 'PlayQueueNowPlayingBlock_move-from-top__O5e0S',
                track_moveFromBottom: 'PlayQueueNowPlayingBlock_track_moveFromBottom__Jj2UO',
                'move-from-bottom': 'PlayQueueNowPlayingBlock_move-from-bottom__Cz7lV',
            };
        },
        74914: (e) => {
            e.exports = { root: 'PlayQueue_root__ponhw', content: 'PlayQueue_content__zIUvd', scrollContent: 'PlayQueue_scrollContent__2dI0v' };
        },
        78936: (e, t, a) => {
            'use strict';
            a.d(t, { N1: () => x, i_: () => r, h9: () => i });
            let i = (e) =>
                null === e ||
                !!(
                    'object' == typeof e &&
                    'imageUri' in e &&
                    'string' == typeof e.imageUri &&
                    'content' in e &&
                    'string' == typeof e.content &&
                    'primaryHref' in e &&
                    'string' == typeof e.primaryHref &&
                    'shouldShowSecondaryButton' in e &&
                    'boolean' == typeof e.shouldShowSecondaryButton &&
                    'secondaryText' in e &&
                    'string' == typeof e.secondaryText
                );
            var n = a(51606);
            let r = n.gK.model('BrandedPlayerModal', {
                imageUri: n.gK.maybeNull(n.gK.string),
                content: n.gK.string,
                primaryHref: n.gK.string,
                shouldShowSecondaryButton: n.gK.boolean,
                secondaryText: n.gK.maybeNull(n.gK.string),
            });
            var s = a(62936),
                o = a(19718),
                l = a(47480),
                c = a(26731),
                d = a(59935),
                u = a(5099),
                m = a(85742),
                _ = a(13030),
                p = a(4714),
                v = a(20418),
                y = a(42561),
                h = a(84280),
                g = a.n(h);
            let x = (0, o.PA)((e) => {
                var t;
                let { modal: a } = e,
                    {
                        paywall: i,
                        advertBanners: {
                            banners: { brandedPlayerBanner: n },
                        },
                    } = (0, y.Pjs)(),
                    { contentRootRef: r } = (0, y.gKY)(),
                    { formatMessage: o } = (0, l.A)(),
                    h = (0, y.ZpR)(a.primaryHref),
                    x = (0, d.c)((e) => {
                        var t, a;
                        null == (t = (a = n.modal).onOpenChange) || t.call(a, e);
                    }),
                    b = { '--modal-bottom-offset': ''.concat(null == (t = n.payload) ? void 0 : t.thumb.height, 'px') };
                return (0, s.jsxs)(p.a, {
                    size: 'fitContent',
                    placement: 'default',
                    open: n.modal.isOpened,
                    onOpenChange: x,
                    className: g().root,
                    contentClassName: g().modalContent,
                    portalNode: r,
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    lockScroll: !1,
                    withOverlay: !1,
                    enableSwipe: !0,
                    style: b,
                    onClose: n.modal.close,
                    shouldCloseOnNavigate: !0,
                    children: [
                        (0, s.jsxs)('header', {
                            children: [
                                a.imageUri && (0, s.jsx)(_.Image, { src: a.imageUri, className: g().image }),
                                (0, s.jsx)(u.$, {
                                    className: g().closeButton,
                                    color: 'primary',
                                    variant: 'text',
                                    radius: 'round',
                                    size: 'xxs',
                                    onClick: n.modal.close,
                                    icon: (0, s.jsx)(m.Icon, { variant: 'close', size: 'xs' }),
                                    'aria-label': o({ id: 'interface-actions.close' }),
                                }),
                            ],
                        }),
                        (0, s.jsx)(v.Caption, { variant: 'span', className: g().content, lineClamp: 2, children: a.content }),
                        (0, s.jsxs)('div', {
                            className: g().actions,
                            children: [
                                (0, s.jsx)(u.$, {
                                    size: 's',
                                    color: 'primary',
                                    variant: 'default',
                                    radius: 'xxxl',
                                    onClick: h,
                                    className: g().button,
                                    children: (0, s.jsx)(v.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(c.A, { id: 'branded-player.to-website' }),
                                    }),
                                }),
                                a.shouldShowSecondaryButton &&
                                    (0, s.jsx)(u.$, {
                                        size: 's',
                                        color: 'secondary',
                                        variant: 'default',
                                        radius: 'xxxl',
                                        onClick: i.openModal,
                                        className: g().button,
                                        children: (0, s.jsx)(v.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            lineClamp: 1,
                                            children: a.secondaryText || (0, s.jsx)(c.A, { id: 'branded-player.hide' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
        },
        80110: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobileContent_root__RITqv',
                wrapper: 'FullscreenPlayerMobileContent_wrapper__JPmBe',
                syncLyrics: 'FullscreenPlayerMobileContent_syncLyrics__HKUm0',
                trackInfoCoverContainer: 'FullscreenPlayerMobileContent_trackInfoCoverContainer__Y2hly',
                trackInfoCover: 'FullscreenPlayerMobileContent_trackInfoCover__zsEEq',
                contentContainer: 'FullscreenPlayerMobileContent_contentContainer__ILyg5',
                contentContainer_withSplitMode: 'FullscreenPlayerMobileContent_contentContainer_withSplitMode__Rdv5T',
                trackInfo: 'FullscreenPlayerMobileContent_trackInfo__IPGjo',
                metaContainer: 'FullscreenPlayerMobileContent_metaContainer__B2vTr',
                infoBlock: 'FullscreenPlayerMobileContent_infoBlock__ZcRdn',
                infoBlock_withExpandedSyncLyrics: 'FullscreenPlayerMobileContent_infoBlock_withExpandedSyncLyrics__qlbKX',
                coverWrapper: 'FullscreenPlayerMobileContent_coverWrapper___Y6ll',
                coverWrapper_enter: 'FullscreenPlayerMobileContent_coverWrapper_enter__oFtHh',
                coverWrapper_enter_active: 'FullscreenPlayerMobileContent_coverWrapper_enter_active__GM_of',
                'enter-fade': 'FullscreenPlayerMobileContent_enter-fade__Q0KNn',
                coverWrapper_exit: 'FullscreenPlayerMobileContent_coverWrapper_exit__QDk1i',
                coverWrapper_exit_active: 'FullscreenPlayerMobileContent_coverWrapper_exit_active__9S_wE',
                'exit-fade': 'FullscreenPlayerMobileContent_exit-fade__uS0jT',
                cover: 'FullscreenPlayerMobileContent_cover__W6pz2',
                metaText: 'FullscreenPlayerMobileContent_metaText__Fr74D',
                timeline: 'FullscreenPlayerMobileContent_timeline__Pta9W',
                content: 'FullscreenPlayerMobileContent_content__EAteH',
                syncLyricsContent: 'FullscreenPlayerMobileContent_syncLyricsContent__qhWG_',
                syncLyricsLoader: 'FullscreenPlayerMobileContent_syncLyricsLoader__0_W2j',
                syncLyricsScroller: 'FullscreenPlayerMobileContent_syncLyricsScroller__EqiCL',
                syncLyricsFooter: 'FullscreenPlayerMobileContent_syncLyricsFooter__bi9vY',
                syncLyricsCounter: 'FullscreenPlayerMobileContent_syncLyricsCounter___wm5g',
            };
        },
        81165: (e) => {
            e.exports = { root: 'Timecode_root__TLT75', root_start: 'Timecode_root_start__pHG5N', root_end: 'Timecode_root_end__LLQsh' };
        },
        81533: (e) => {
            e.exports = {
                root: 'AdContainer_root__ti4rk',
                container: 'AdContainer_container__DLRij',
                title: 'AdContainer_title__AsPky',
                subtitle: 'AdContainer_subtitle__LIOif',
                info: 'AdContainer_info__EKKWS',
                favicon: 'AdContainer_favicon__ry_3I',
                buttonContainer: 'AdContainer_buttonContainer__SvDt3',
                button: 'AdContainer_button__nQcMg',
                linkButton: 'AdContainer_linkButton__rabLN',
            };
        },
        82828: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => n });
            var i = a(81959);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Artist;
            }
        },
        84280: (e) => {
            e.exports = {
                root: 'BrandedPlayerModal_root__hejJx',
                modalContent: 'BrandedPlayerModal_modalContent__xcXKK',
                image: 'BrandedPlayerModal_image__paBEA',
                closeButton: 'BrandedPlayerModal_closeButton__W3QRx',
                content: 'BrandedPlayerModal_content__b9e2P',
                actions: 'BrandedPlayerModal_actions__6aeD7',
                button: 'BrandedPlayerModal_button__WZTH7',
            };
        },
        84375: (e) => {
            e.exports = {
                root: 'VibeResetButton_root__ju8pE',
                root_visible: 'VibeResetButton_root_visible__OHA1w',
                container: 'VibeResetButton_container__JO2j1',
                container_withReset: 'VibeResetButton_container_withReset__6OW2k',
                button: 'VibeResetButton_button__i8Cvy',
                context: 'VibeResetButton_context__hsTlv',
                contextWrapper: 'VibeResetButton_contextWrapper__6jW4i',
                contextWrapper_withReset: 'VibeResetButton_contextWrapper_withReset__doA0q',
            };
        },
        84872: (e) => {
            e.exports = {
                timecode: 'ChangeTimecode_timecode__UScFt',
                root: 'ChangeTimecode_root__QxEw_',
                root_withTimecode: 'ChangeTimecode_root_withTimecode__eJhYI',
                root_mobile: 'ChangeTimecode_root_mobile__SzOdx',
                root_fullscreen: 'ChangeTimecode_root_fullscreen__FA6r0',
                slider: 'ChangeTimecode_slider__P4qmT',
            };
        },
        85218: (e) => {
            e.exports = {
                root: 'VibePlayerBar_root__G3MOe',
                progress: 'VibePlayerBar_progress__Cri6E',
                progress_visible: 'VibePlayerBar_progress_visible__EfP1V',
                button: 'VibePlayerBar_button__GLhJ_',
                important: 'VibePlayerBar_important__XGV7k',
                center: 'VibePlayerBar_center__yug8i',
                center_withExplicitMark: 'VibePlayerBar_center_withExplicitMark__mLKl3',
                trackName: 'VibePlayerBar_trackName__dSu1A',
                'fade-in': 'VibePlayerBar_fade-in__WgRwV',
                trackName_withExplicitMark: 'VibePlayerBar_trackName_withExplicitMark___HRNZ',
                scrollingTrackName: 'VibePlayerBar_scrollingTrackName__MOL3Q',
                trackNameText: 'VibePlayerBar_trackNameText__s83EV',
                explicitMarkContainer: 'VibePlayerBar_explicitMarkContainer__H27Yy',
                explicitMark: 'VibePlayerBar_explicitMark__T2J0c',
                changeVolume: 'VibePlayerBar_changeVolume__x7FHC',
                verticalSlider: 'VibePlayerBar_verticalSlider__JPDlB',
            };
        },
        86468: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => n });
            var i = a(81959);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Album;
            }
        },
        87392: (e) => {
            e.exports = {
                root: 'PlayingNow_root__0lQa8',
                textBlock: 'PlayingNow_textBlock___CfRh',
                title: 'PlayingNow_title__82csz',
                subTitle: 'PlayingNow_subTitle__JNJfh',
                link: 'PlayingNow_link__4gLK9',
            };
        },
        88129: (e) => {
            e.exports = {
                bottomRightButtonsWrapper: 'FullscreenPlayerDesktopControls_bottomRightButtonsWrapper__EvGiZ',
                root: 'FullscreenPlayerDesktopControls_root__tviu4',
                root_visible: 'FullscreenPlayerDesktopControls_root_visible__1b9xD',
                sonataControls: 'FullscreenPlayerDesktopControls_sonataControls__9AIki',
                menuWrapper: 'FullscreenPlayerDesktopControls_menuWrapper__ifxNx',
                syncLyricsButton: 'FullscreenPlayerDesktopControls_syncLyricsButton__g6E6g',
                playQueueButton: 'FullscreenPlayerDesktopControls_playQueueButton__reNOW',
                speedButton: 'FullscreenPlayerDesktopControls_speedButton__uTbyy',
                likeButton: 'FullscreenPlayerDesktopControls_likeButton__vpJ7S',
                menuButton: 'FullscreenPlayerDesktopControls_menuButton__R4cXl',
                likeButton_active: 'FullscreenPlayerDesktopControls_likeButton_active__XltBK',
                menuButton_active: 'FullscreenPlayerDesktopControls_menuButton_active__YZ8M8',
                playQueueButton_active: 'FullscreenPlayerDesktopControls_playQueueButton_active___SA85',
                speedButton_active: 'FullscreenPlayerDesktopControls_speedButton_active__H_EXl',
                syncLyricsButton_active: 'FullscreenPlayerDesktopControls_syncLyricsButton_active__VMvEH',
                fullscreenPlayerButton: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton__0UjpS',
                fullscreenPlayerButton_visible: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton_visible__qjQ0X',
            };
        },
        89599: (e) => {
            e.exports = {
                root: 'AlbumCover_root__hkDPz',
                coverContainer: 'AlbumCover_coverContainer__NOd_o',
                cover: 'AlbumCover_cover__bif8b',
                cover_visible: 'AlbumCover_cover_visible___8hK9',
                'fade-in': 'AlbumCover_fade-in__5kJy7',
                cover_generative: 'AlbumCover_cover_generative__5siVB',
                button: 'AlbumCover_button__mX59n',
                playButtonContainer: 'AlbumCover_playButtonContainer__rC_Wa',
                playButtonContainer_withoutBackground: 'AlbumCover_playButtonContainer_withoutBackground__ChM8o',
                playButtonIcon: 'AlbumCover_playButtonIcon__2b7_R',
                playButton: 'AlbumCover_playButton__N2FOS',
                playButton_playing: 'AlbumCover_playButton_playing__W9Uib',
            };
        },
        93790: (e, t, a) => {
            'use strict';
            a.d(t, { kn: () => f, vR: () => tX, uZ: () => M, LN: () => ap, Hq: () => ax, OK: () => O, j3: () => aD, BG: () => aV, so: () => i });
            var i = (function (e) {
                    return (e.VIDEO = 'video-ad-player'), (e.SLOT = 'video-ad-container'), e;
                })({}),
                n = a(42561);
            let r = (e) => {
                let t = (0, n.eGp)(),
                    {
                        fullscreenPlayer: {
                            playQueue: { trackMap: a },
                        },
                    } = (0, n.Pjs)(),
                    i = null == t ? void 0 : t.state.queueState.entityList.value,
                    r = null == i ? void 0 : i[e];
                if (!r) return null;
                let {
                        context: { data: s },
                    } = r,
                    o = a.get(String(r.entity.data.meta.id));
                return o ? { track: o, playContextParams: { contextData: s, queueParams: { index: e } } } : null;
            };
            var s = a(51606);
            let o = s.gK.model('AdContainer', {
                adTitle: s.gK.maybe(s.gK.string),
                iconSrc: s.gK.maybe(s.gK.string),
                clickThroughUrl: s.gK.maybe(s.gK.string),
                src: s.gK.maybe(s.gK.string),
                clientLegalInfo: s.gK.maybe(s.gK.string),
                advertiserInfoUrl: s.gK.maybe(s.gK.string),
            });
            var l = a(62936),
                c = a(79950),
                d = a(19718),
                u = a(44020),
                m = a.t(u, 2),
                _ = a(26731),
                p = a(5099),
                v = a(13030),
                y = a(20418),
                h = a(85906),
                g = a(81533),
                x = a.n(g);
            let b = (0, d.PA)((e) => {
                    let { className: t, data: a, mediaContent: i, linkClassName: r } = e,
                        {
                            settings: { isMobile: s },
                        } = (0, n.Pjs)(),
                        o = (0, n.rs2)(),
                        d = (0, u.useMemo)(
                            () =>
                                (null == o ? void 0 : o.state.clickThrough)
                                    ? (0, l.jsx)(p.$, {
                                          className: (0, c.$)(x().button, r),
                                          variant: 'default',
                                          radius: 'xxxl',
                                          onClick: o.state.clickThrough,
                                          children: (0, l.jsx)(_.A, { id: 'ads.learn-more' }),
                                      })
                                    : (null == a ? void 0 : a.clickThroughUrl)
                                      ? (0, l.jsx)(h.N_, {
                                            target: '_blank',
                                            href: a.clickThroughUrl,
                                            className: (0, c.$)(x().button, x().linkButton, r),
                                            children: (0, l.jsx)(_.A, { id: 'ads.learn-more' }),
                                        })
                                      : (0, l.jsx)(p.$, {
                                            className: (0, c.$)(x().button, r),
                                            variant: 'default',
                                            radius: 'xxxl',
                                            disabled: !0,
                                            children: (0, l.jsx)(_.A, { id: 'ads.learn-more' }),
                                        }),
                            [null == a ? void 0 : a.clickThroughUrl, null == o ? void 0 : o.state.clickThrough, r],
                        );
                    return (0, l.jsxs)('div', {
                        className: (0, c.$)(x().root, t),
                        children: [
                            i,
                            (0, l.jsxs)('div', {
                                className: x().container,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: x().info,
                                        children: [
                                            (0, l.jsx)(v.Image, {
                                                className: x().favicon,
                                                withAspectRatio: !0,
                                                'aria-hidden': !0,
                                                fit: 'cover',
                                                src: (null == a ? void 0 : a.iconSrc) || '',
                                                alt: '',
                                                fallbackIconVariant: 'picture',
                                            }),
                                            (0, l.jsxs)('div', {
                                                className: x().text,
                                                children: [
                                                    (0, l.jsx)(y.Caption, {
                                                        variant: 'div',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        className: x().title,
                                                        lineClamp: s ? 5 : void 0,
                                                        children: null == a ? void 0 : a.adTitle,
                                                    }),
                                                    (0, l.jsx)(y.Caption, {
                                                        variant: 'div',
                                                        type: 'text',
                                                        size: 'm',
                                                        weight: 'medium',
                                                        className: x().subtitle,
                                                        children: (0, l.jsx)(_.A, { id: 'ads.ad' }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)('div', { className: x().buttonContainer, children: d }),
                                ],
                            }),
                        ],
                    });
                }),
                f = s.gK
                    .model('Advert', {
                        data: s.gK.maybeNull(o),
                        isAdvertShown: s.gK.maybe(s.gK.boolean),
                        isAdvertPlaying: s.gK.maybe(s.gK.boolean),
                        isAdvertPlaybackCreated: s.gK.boolean,
                        type: s.gK.maybeNull(s.gK.enumeration(Object.values(n.I1A))),
                    })
                    .views((e) => ({
                        get isAudioAdvert() {
                            return e.type === n.I1A.AUDIO;
                        },
                        get isVideoAdvert() {
                            return e.type === n.I1A.VIDEO;
                        },
                    }))
                    .actions((e) => ({
                        setData: (t) => {
                            e.data = (0, s.wg)({
                                adTitle: null == t ? void 0 : t.adTitle,
                                iconSrc: null == t ? void 0 : t.iconSrc,
                                clickThroughUrl: null == t ? void 0 : t.clickThroughUrl,
                                clientLegalInfo: null == t ? void 0 : t.clientLegalInfo,
                                advertiserInfoUrl: null == t ? void 0 : t.advertiserInfoUrl,
                            });
                        },
                        setType(t) {
                            e.type = t;
                        },
                        setAdvertShown: (t) => {
                            e.isAdvertShown = t;
                        },
                        setAdvertPlaying: (t) => {
                            e.isAdvertPlaying = t;
                        },
                        setIsAdvertPlaybackCreated(t) {
                            e.isAdvertPlaybackCreated = t;
                        },
                        reset: () => {
                            (e.data = null), (e.isAdvertPlaying = !0), (e.isAdvertShown = !1), (e.type = null);
                        },
                    }));
            var C = a(54690),
                k = (function (e) {
                    return (e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e;
                })({}),
                j = a(81959),
                A = a(46663),
                P = a(41094);
            let N = s.gK
                .compose(
                    s.gK.model('PlayQueue', {
                        isVisible: s.gK.optional(s.gK.boolean, !1),
                        beforeTracksIds: s.gK.maybeNull(s.gK.array(s.gK.number)),
                        afterTracksIds: s.gK.optional(s.gK.frozen(), []),
                        hiddenTrackIds: s.gK.array(s.gK.number),
                        currentIndex: s.gK.optional(s.gK.number, 0),
                        trackMap: s.gK.optional(s.gK.map(P.x5), {}),
                    }),
                    C.pl,
                )
                .views((e) => ({
                    get isVibeBlockShowed() {
                        let {
                            sonataState: { isVibeContext: t },
                        } = (0, s.Zn)(e);
                        return !t && 0 === e.afterTracksIds.length;
                    },
                    get itemsKeys() {
                        var t, a;
                        return null != (a = null == (t = e.beforeTracksIds) ? void 0 : t.concat(e.afterTracksIds).map(String)) ? a : [];
                    },
                    get isDragAndDropEnabled() {
                        let {
                            experiments: t,
                            sonataState: { isVibeContext: a },
                        } = (0, s.Zn)(e);
                        return t.checkExperiment(n.zal.WebNextPlayQueueDnD, 'on') && !a;
                    },
                }))
                .actions((e) => {
                    let t = (t, a) => {
                            let i = t[a];
                            if (!i || (0, A.Re)(i)) return null;
                            let { entity: n } = i,
                                r = (0, P.pE)(n);
                            return !r || r.isHiddenFromSonataQueue ? null : (e.trackMap.has(r.id) || e.trackMap.set(r.id, (0, s.wg)(r)), a);
                        },
                        a = {
                            setVisible() {
                                e.isVisible = !0;
                            },
                            setInvisible() {
                                e.isVisible = !1;
                            },
                            updateTracks(e, t, i, n) {
                                a.setCurrentTrackId(e, t), a.setBeforeTracksIds(e, i), a.setAfterTracksIds(e, i, n), a.setHiddenTrackIds(e);
                            },
                            setCurrentTrackId(a, i) {
                                (e.currentIndex = i), t(a, i);
                            },
                            setBeforeTracksIds(a, i) {
                                let n = Math.max(0, e.currentIndex - 125) - 1,
                                    r = [];
                                for (let s = e.currentIndex - 1; s > n; s--) {
                                    let e = i[s];
                                    if ('number' != typeof e) break;
                                    let n = t(a, e);
                                    null !== n && r.unshift(n);
                                }
                                e.beforeTracksIds = (0, s.wg)(r);
                            },
                            setAfterTracksIds(a, i, n) {
                                let r = n === j.K.Vibe ? 1 : 125,
                                    s = [];
                                for (let n = e.currentIndex + 1; n < i.length && s.length < r; n++) {
                                    let e = i[n];
                                    if ('number' != typeof e) break;
                                    let r = t(a, e);
                                    null !== r && s.push(r);
                                }
                                e.afterTracksIds = s;
                            },
                            setHiddenTrackIds(t) {
                                let a = [];
                                for (let e = 0; e < t.length; e++) {
                                    let i = t[e];
                                    i && i.entity.hidden && a.push(e);
                                }
                                e.hiddenTrackIds = (0, s.wg)(a);
                            },
                            reset() {
                                e.destroyItems([e.beforeTracksIds, e.hiddenTrackIds]), (e.afterTracksIds = []), e.trackMap.clear();
                            },
                        };
                    return a;
                });
            var S = a(33782),
                T = a(21385),
                w = a(66161),
                I = a(43026);
            let E = (e) => {
                    if (!e) return;
                    let t = e.split(':'),
                        a = parseInt(t[0] || '0', 10),
                        i = parseFloat(t[1] || '0');
                    return a > 0 ? parseFloat((60 * a + i).toFixed(2)) : i;
                },
                L = s.gK.model('SyncLyricsLine', { text: s.gK.string, fromSec: s.gK.number, toSec: s.gK.maybe(s.gK.number) }).views((e) => ({
                    get key() {
                        return ''.concat(e.fromSec, ':').concat(e.toSec);
                    },
                })),
                B = s.gK
                    .compose(
                        s.gK.model('SyncLyrics', {
                            isVisible: s.gK.optional(s.gK.boolean, !1),
                            lines: s.gK.maybeNull(s.gK.array(L)),
                            major: s.gK.maybeNull(I.t$),
                            writers: s.gK.maybeNull(s.gK.array(s.gK.string)),
                            lyricId: s.gK.maybeNull(s.gK.number),
                            externalLyricId: s.gK.maybeNull(s.gK.string),
                            currentTrackId: s.gK.maybeNull(s.gK.union(s.gK.string, s.gK.number)),
                            hasLyricsViewed: s.gK.optional(s.gK.boolean, !1),
                        }),
                        C.XT,
                    )
                    .views((e) => ({
                        get startSec() {
                            var t;
                            let a = null == (t = e.lines) ? void 0 : t.at(0);
                            return null == a ? void 0 : a.fromSec;
                        },
                        get endSec() {
                            var a;
                            let t = null == (a = e.lines) ? void 0 : a.at(-1);
                            return null == t ? void 0 : t.toSec;
                        },
                        get hasWriters() {
                            var i;
                            return !!(e.writers && (null == (i = e.writers) ? void 0 : i.length) > 0);
                        },
                        get hasInvalidLyrics() {
                            var n;
                            return !!(e.isResolved && (null == (n = e.lines) ? void 0 : n.length) === 0);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setVisible() {
                                e.isVisible = !0;
                            },
                            setInvisible() {
                                e.isVisible = !1;
                            },
                            getActiveLineIndex: (t) => {
                                if ((e.startSec && t < e.startSec) || (e.endSec && t > e.endSec)) return null;
                                let a = (e.lines || []).findIndex((e) => (void 0 === e.toSec ? t >= e.fromSec : !!(t >= e.fromSec) && !!(e.toSec >= t)));
                                return a >= 0 ? a : null;
                            },
                            getData: (0, s.L3)(function* (a) {
                                let { tracksResource: i, modelActionsLogger: r } = (0, s._$)(e);
                                if (a)
                                    try {
                                        e.loadingState = n.GuX.PENDING;
                                        let { downloadUrl: r, major: o, externalLyricId: l, lyricId: c, writers: d } = yield i.getLyrics((0, w.h3)(a, T.o.LRC));
                                        (e.major = (0, I.LT)(o)),
                                            (e.externalLyricId = l),
                                            (e.lyricId = c),
                                            (e.writers = (0, s.wg)(d)),
                                            (e.currentTrackId = a),
                                            (e.hasLyricsViewed = !1),
                                            yield t.downloadSyncLyrics(r),
                                            (e.loadingState = n.GuX.RESOLVE);
                                    } catch (t) {
                                        (e.loadingState = n.GuX.REJECT), r.error(t);
                                    }
                            }),
                            downloadSyncLyrics: (0, s.L3)(function* (t) {
                                let { prefixlessResource: a } = (0, s._$)(e),
                                    i = yield a.getLyricsText(t);
                                e.lines = (0, s.wg)(
                                    ((e) => {
                                        try {
                                            return (
                                                ((e) => {
                                                    if ('string' != typeof e) throw TypeError('expect first argument to be a string');
                                                    let t = e.split('\n'),
                                                        a = /\[(\d*:\d*\.?\d*)\]/,
                                                        i = new RegExp(a.source + /(.+)/.source),
                                                        n = [],
                                                        r = [],
                                                        s = { scripts: [] };
                                                    for (let e = 0; e < t.length; e++) {
                                                        let a = t[e];
                                                        if (a && !1 === i.test(a)) n.push(a);
                                                        else break;
                                                    }
                                                    n.reduce((e, t) => {
                                                        let a = t.trim().slice(1, -1).split(': '),
                                                            i = a[0],
                                                            n = a[1];
                                                        return void 0 !== i && (e[i] = n), e;
                                                    }, s),
                                                        t.splice(0, n.length);
                                                    let o = new RegExp(''.concat(i.source, '|').concat(a.source));
                                                    t = t.filter((e) => e && o.test(e));
                                                    for (let e = 0, n = t.length; e < n; e++) {
                                                        let s = t[e],
                                                            o = e + 1 < n ? t[e + 1] : null;
                                                        if (s) {
                                                            let e = i.exec(s),
                                                                t = o ? a.exec(o) : null;
                                                            if (e) {
                                                                let [, a, i] = e,
                                                                    n = null == t ? void 0 : t[1];
                                                                a && r.push({ start: E(a), text: i || '', end: E(n) });
                                                            }
                                                        }
                                                    }
                                                    return (s.scripts = r), s;
                                                })(e).scripts || []
                                            ).map((e) => {
                                                let { start: t, end: a, text: i } = e;
                                                return (0, s.wg)({ text: i.trim(), fromSec: t, toSec: a });
                                            });
                                        } catch (e) {
                                            return [];
                                        }
                                    })(i),
                                );
                            }),
                            sendViews: (0, s.L3)(function* (t) {
                                let { contextId: a, contextType: i } = t,
                                    { lyricViewsResource: r, modelActionsLogger: o } = (0, s._$)(e);
                                if (e.loadingState === n.GuX.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        yield r.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, S.A)(),
                                                    trackId: e.currentTrackId,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId: e.externalLyricId,
                                                    lyricFormat: T.o.LRC,
                                                    albumId: i === j.K.Album && a ? a : void 0,
                                                    playlistId: i === j.K.Playlist && a ? a : void 0,
                                                },
                                            ],
                                        }),
                                            (e.hasLyricsViewed = !0);
                                    } catch (e) {
                                        o.error(e);
                                    }
                            }),
                        };
                        return t;
                    }),
                M = s.gK
                    .model('FullscreenPlayer', { mode: s.gK.maybeNull(s.gK.enumeration(Object.values(k))), syncLyrics: B, playQueue: N, modal: C.qt })
                    .views((e) => ({
                        get isSplitMode() {
                            return this.isPlayQueueMode || this.isSyncLyricsMode;
                        },
                        get isSyncLyricsMode() {
                            var t;
                            let { sonataState: a } = (0, s.Zn)(e);
                            return e.mode === k.SYNC_LYRICS && !!(null == a || null == (t = a.entityMeta) ? void 0 : t.isSyncLyricsAvailable);
                        },
                        get isPlayQueueMode() {
                            return e.mode === k.PLAY_QUEUE;
                        },
                    }))
                    .actions((e) => ({
                        setMode(t) {
                            e.mode = t;
                        },
                        showFullscreenPlayerModal() {
                            e.syncLyrics.setInvisible(), e.modal.open();
                        },
                        showSyncLyrics() {
                            (e.mode = k.SYNC_LYRICS), e.syncLyrics.setVisible(), e.modal.isOpened || e.modal.open();
                        },
                        hideSyncLyrics() {
                            (e.mode = null), e.syncLyrics.setInvisible();
                        },
                        showPlayQueue() {
                            (e.mode = k.PLAY_QUEUE), e.playQueue.setVisible(), e.modal.isOpened || e.modal.open();
                        },
                        hidePlayQueue() {
                            (e.mode = null), e.playQueue.setInvisible();
                        },
                        isModeActive: (t) => e.mode === t,
                        reset() {
                            e.mode = null;
                        },
                    })),
                O = s.gK.model('QualitySettings', { modal: C.qt });
            var R = a(47480),
                D = a(8669),
                F = a(85742),
                K = a(4714),
                V = a(59260);
            let z = (e) => ({ '--player-average-color-background': (0, w.ye)(null == e || (window.DISABLE_PER_TRACK_COLORS?.() ?? !1) ? void 0 : e.averageColor) });
            const qualityMap = {
                lq: 'LQ',
                nq: 'NQ',
                hq: 'HQ',
                lossless: 'HQ+',
            };
            const codecMap = {
                mp3: 'MP3',
                'he-aac': 'HE-AAC',
                aac: 'AAC',
                flac: 'FLAC',
                'aac-mp4': 'AAC',
                'he-aac-mp4': 'HE-AAC',
                'flac-mp4': 'FLAC',
            };
            const deviceTypeMap = {
                UNSPECIFIED: 'Неизвестного устройства',
                WEB: 'Сайта',
                ANDROID: 'Android приложения',
                IOS: 'IOS приложения',
                SMART_SPEAKER: 'Умной колонки',
                WEB_TV: 'ТВ',
                ANDROID_TV: 'Android ТВ',
                APPLE_TV: 'Apple ТВ',
                ANDROID_WEAR: 'Android часов',
                WEB_DESKTOP: 'ПК приложения',
            };
            var W = a(45983),
                U = a.n(W),
                Q = a(32474),
                G = a(4497),
                q = a(28964),
                $ = a(59935);
            let Y = (0, u.createContext)({ difference: 0, isSingleTrackSwitch: !1 }),
                H = () => (0, u.useContext)(Y);
            var X = a(74914),
                Z = a.n(X),
                J = a(99760);
            let ee = (0, d.PA)((e) => {
                let { children: t } = e,
                    {
                        fullscreenPlayer: {
                            playQueue: { itemsKeys: a, isDragAndDropEnabled: i },
                        },
                    } = (0, n.Pjs)();
                return i ? (0, l.jsx)(J.gB, { items: a, strategy: J._G, children: t }) : t;
            });
            var et = a(60188),
                ea = a(71070),
                ei = a.n(ea);
            let en = (0, d.PA)(
                    (0, u.forwardRef)((e, t) => {
                        let { children: a, 'data-index': i, className: n, ...r } = e,
                            { isDragging: s, listeners: o, setNodeRef: d, transform: m, transition: _, attributes: p } = (0, J.gl)({ id: String(i) }),
                            v = (0, u.useCallback)(
                                (e) => {
                                    d(e), 'function' == typeof t && t(e);
                                },
                                [t, d],
                            ),
                            y = { transition: _, '--translate-y': m ? ''.concat(Math.round(m.y), 'px') : void 0 };
                        return (0, l.jsx)('div', {
                            ref: v,
                            'data-index': i,
                            style: y,
                            ...r,
                            className: (0, c.$)(ei().root, n),
                            children: (0, l.jsx)('div', { ref: t, className: (0, c.$)(ei().inner, { [ei().dragging]: s }), ...o, ...p, role: 'listitem', children: a }),
                        });
                    }),
                ),
                er = (e) => {
                    let { index: t, isDragAndDropEnabled: a, blockRef: i, className: s, isRemoveAvailable: o, hideControls: c } = e,
                        d = (0, n.eGp)(),
                        m = a && !c,
                        _ = (0, u.useMemo)(() => {
                            let e = null == d ? void 0 : d.state.queueState.order.value.indexOf(t);
                            return 'number' == typeof e ? [e] : [];
                        }, [t, null == d ? void 0 : d.state.queueState.order.value]),
                        p = r(t),
                        v = null == p ? void 0 : p.track,
                        y = null == p ? void 0 : p.playContextParams,
                        h = (0, I.iQ)(null != v ? v : null, I.NM.HIDE, _),
                        g = (0, $.c)(() => {
                            h(), (null == i ? void 0 : i.current) && i.current.focus();
                        }),
                        x = (0, et.L)(() =>
                            v && y
                                ? (0, l.jsx)(w.Kt, {
                                      track: v,
                                      playContextParams: y,
                                      className: s,
                                      withDNDBlock: m,
                                      handleRemove: o ? g : void 0,
                                      withSecondaryColor: !0,
                                      hideControls: c,
                                  })
                                : null,
                        );
                    return x ? (m ? (0, l.jsx)(en, { 'data-index': t, children: x }) : x) : null;
                };
            var es = a(11646),
                eo = a.n(es),
                el = a(49923),
                ec = a(32632),
                ed = a(7862),
                eu = a(40688),
                em = a(82265),
                e_ = a(51046),
                ep = a(12998),
                ev = a(86468),
                ey = a(82828),
                eh = a(11346);
            let eg = (e) => !!(e && 'object' == typeof e && ('playlistUuid' in e || 'playlistTitle' in e));
            var ex = (function (e) {
                return (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Album = 'album'), (e.Track = 'track'), e;
            })({});
            let eb = () => {
                    let { formatMessage: e } = (0, R.A)(),
                        {
                            experiments: t,
                            sonataState: { entityMeta: a },
                            vibe: i,
                        } = (0, n.Pjs)(),
                        r = (0, n.eGp)(),
                        s = null == r ? void 0 : r.state.currentContext.value,
                        o = null == s ? void 0 : s.data.meta,
                        c = null == r ? void 0 : r.state.queueState.currentEntity.value,
                        d = null == a ? void 0 : a.mainArtist,
                        m = (null == s ? void 0 : s.data.type) === j.K.Artist ? s.data.meta.artist : void 0,
                        p = (null == m ? void 0 : m.name) ? m : d,
                        v = null == a ? void 0 : a.mainAlbum,
                        y = null == a ? void 0 : a.isPodcast,
                        h = t.checkExperiment(n.zal.WebNextUseWaveQueue, 'on'),
                        g = (function (e) {
                            let { isWaveQueueEnabled: t } = e,
                                a = (0, n.eGp)(),
                                i = null == a ? void 0 : a.state.queueState.currentEntity.value;
                            return (0, u.useMemo)(
                                () =>
                                    t
                                        ? (function (e) {
                                              if (!e) return { title: void 0, type: void 0, sourceContextType: void 0 };
                                              let t = e.data.sourceContextType;
                                              if ((0, ev.F)(e)) {
                                                  let a = e.data.meta.title;
                                                  if (a) return { title: a, type: j.K.Album, sourceContextType: t };
                                              }
                                              if ((0, eh.K)(e)) {
                                                  let a = e.data.meta.title;
                                                  if (a) return { title: a, type: j.K.Playlist, sourceContextType: t };
                                              }
                                              if ((0, ey.T)(e)) {
                                                  var a;
                                                  let i = null == (a = e.data.meta.artist) ? void 0 : a.name;
                                                  if (i) return { title: i, type: j.K.Artist, sourceContextType: t };
                                              }
                                              return { title: void 0, type: void 0, sourceContextType: t };
                                          })(null == i ? void 0 : i.sourceContext)
                                        : { title: void 0, type: void 0, sourceContextType: void 0 },
                                [null == i ? void 0 : i.sourceContext, t],
                            );
                        })({ isWaveQueueEnabled: h }),
                        x = (0, et.L)(() => {
                            if (h && g.type)
                                return (function (e) {
                                    let { sourceType: t, sourceContext: a } = e;
                                    if (a)
                                        switch (t) {
                                            case j.K.Album: {
                                                if (!(0, ev.F)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, n.uvd)('/album/:albumId', { params: { albumId: String(e) } });
                                                return t;
                                            }
                                            case j.K.Artist: {
                                                if (!(0, ey.T)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, n.uvd)('/artist/:artistId', { params: { artistId: String(e) } });
                                                return t;
                                            }
                                            case j.K.Playlist: {
                                                if (!(0, eh.K)(a)) return;
                                                let e = a.data.meta.playlistUuid;
                                                if (!e) return;
                                                let { href: t } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                                return t;
                                            }
                                            default:
                                                return;
                                        }
                                })({ sourceType: g.type, sourceContext: null == c ? void 0 : c.sourceContext });
                            switch (null == s ? void 0 : s.data.type) {
                                case j.K.Vibe:
                                    var e;
                                    return ((e, t) => {
                                        var a, i;
                                        let r = (0, ed.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null,
                                            s = (0, ed.i)(t) ? (null == t ? void 0 : t.data.parentContextId) : null;
                                        if (r || s)
                                            switch (e) {
                                                case ex.Artist: {
                                                    let { href: e } = (0, n.uvd)('/artist/:artistId', {
                                                        params: { artistId: (null != (a = null == r ? void 0 : r.data.meta.id) ? a : s) || '' },
                                                    });
                                                    return e;
                                                }
                                                case ex.Playlist: {
                                                    let e = null == r ? void 0 : r.data.meta,
                                                        t = eg(e) ? e.playlistUuid : s;
                                                    if (!t) return;
                                                    let { href: a } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: String(t) } });
                                                    return a;
                                                }
                                                case ex.Album: {
                                                    if (!(null == r ? void 0 : r.data.meta.id) && !s) return;
                                                    let { href: e } = (0, n.uvd)('/album/:albumId', {
                                                        params: { albumId: (null != (i = null == r ? void 0 : r.data.meta.id) ? i : s) || '' },
                                                    });
                                                    return e;
                                                }
                                                case ex.Track: {
                                                    if (!s) return;
                                                    if (String(s).includes(':')) {
                                                        let [e, t] = String(s).split(':'),
                                                            { href: a } = (0, n.uvd)('/album/:albumId/track/:trackId', {
                                                                params: { albumId: e || '', trackId: t || '' },
                                                            });
                                                        return a;
                                                    }
                                                    let { href: e } = (0, n.uvd)('/track/:trackId', { params: { trackId: s } });
                                                    return e;
                                                }
                                                default:
                                                    return;
                                            }
                                    })(null == i || null == (e = i.meta) ? void 0 : e.stationType, s);
                                case j.K.Artist: {
                                    if (!(null == p ? void 0 : p.id)) return;
                                    let { href: e } = (0, n.uvd)('/artist/:artistId', { params: { artistId: String(p.id) } });
                                    return e;
                                }
                                case j.K.Playlist: {
                                    if (!eg(o)) return;
                                    let { href: e } = (0, n.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: null == o ? void 0 : o.playlistUuid } });
                                    return e;
                                }
                                case j.K.Album: {
                                    if (!(null == v ? void 0 : v.id)) return;
                                    let { href: e } = (0, n.uvd)('/album/:albumId', { params: { albumId: v.id } });
                                    return e;
                                }
                                default:
                                    return;
                            }
                        }),
                        b = (0, et.L)(() => {
                            if (h && g.title) return g.title;
                            switch (null == s ? void 0 : s.data.type) {
                                case j.K.Vibe:
                                    var e, t;
                                    return ((e, t) => (t && e ? t : (0, l.jsx)(_.A, { id: 'entity-names.my-vibe' })))(
                                        null == i || null == (e = i.meta) ? void 0 : e.stationType,
                                        null == i || null == (t = i.meta) ? void 0 : t.title,
                                    );
                                case j.K.Artist:
                                    return null == p ? void 0 : p.name;
                                case j.K.Playlist:
                                    if (!eg(o)) return;
                                    return null == o ? void 0 : o.title;
                                case j.K.Album:
                                    return null == v ? void 0 : v.title;
                                case j.K.Various:
                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing' });
                                default:
                                    return (0, l.jsx)(_.A, { id: 'entity-names.my-vibe' });
                            }
                        }),
                        f = (0, et.L)(() => {
                            if (h && g.type) {
                                let e = (function (e) {
                                    let { sourceType: t, sourceContext: a, sourceContextType: i } = e,
                                        n = (function (e) {
                                            switch (e) {
                                                case ep.h.SEARCH:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-search' });
                                                case ep.h.DOWNLOADED_TRACKS:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-downloads' });
                                                case ep.h.MUSIC_HISTORY:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-history' });
                                                case ep.h.MUSIC_HISTORY_SEARCH:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-history-search' });
                                                case ep.h.ARTIST_MY_COLLECTION:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-artist-collection' });
                                                case ep.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-artist-wave' });
                                                default:
                                                    return;
                                            }
                                        })(i);
                                    if (n) return n;
                                    if (i === ep.h.BASED_ON_ENTITY_BY_DEFAULT || void 0 === i)
                                        switch (t) {
                                            case j.K.Album:
                                                if ((0, ev.F)(a) && a.data.meta.type === em._.PODCAST)
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-podcast' });
                                                return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-album' });
                                            case j.K.Artist:
                                                return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                            case j.K.Playlist:
                                                return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-playlist' });
                                        }
                                })({ sourceType: g.type, sourceContext: null == c ? void 0 : c.sourceContext, sourceContextType: g.sourceContextType });
                                if (e) return e;
                            }
                            switch (null == s ? void 0 : s.data.type) {
                                case j.K.Vibe:
                                    var a, r;
                                    if (!t.checkExperiment(n.zal.WebNextVibeDescription, 'on') || void 0 === (null == i || null == (a = i.meta) ? void 0 : a.description))
                                        return ((e, t) => {
                                            let a = (0, ed.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null;
                                            switch (e) {
                                                case ex.Artist:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-my-wave-by-artist' });
                                                case ex.Playlist:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-my-wave-by-playlist' });
                                                case ex.Album:
                                                    if ((null == a ? void 0 : a.data.type) === em._.PODCAST)
                                                        return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-my-wave-by-podcast' });
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-my-wave-by-album' });
                                                case ex.Track:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-my-wave-by-track' });
                                                default:
                                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing' });
                                            }
                                        })(null == i || null == (r = i.meta) ? void 0 : r.stationType, s);
                                    if (null == i ? void 0 : i.isMyVibe) return e({ id: 'play-queue.now-playing' });
                                    return e({ id: 'play-queue.now-playing-by-entity' }, { entity: null == i ? void 0 : i.meta.getDescription() });
                                case j.K.Artist:
                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                case j.K.Playlist:
                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-playlist' });
                                case j.K.Album:
                                    if (y) return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-podcast' });
                                    return (0, l.jsx)(_.A, { id: 'play-queue.now-playing-from-album' });
                                default:
                                    return;
                            }
                        }),
                        C = (0, et.L)(() => ((0, eu.p)(s) ? (0, l.jsx)(_.A, { id: 'entity-names.my-vibe' }) : b));
                    return {
                        url: x,
                        title: b,
                        subTitle: f,
                        vibeBlockTitle: C,
                        vibeBlockSubTitle: (0, et.L)(() => {
                            switch (null == s ? void 0 : s.data.type) {
                                case j.K.Artist:
                                    return (0, l.jsx)(_.A, { id: 'play-queue.my-wave-by-artist' });
                                case j.K.Playlist:
                                    return (0, l.jsx)(_.A, { id: 'play-queue.my-wave-by-playlist' });
                                case j.K.Album:
                                    return (0, l.jsx)(_.A, { id: 'play-queue.my-wave-by-album' });
                                default:
                                    return;
                            }
                        }),
                        vibeBlockAgent: (0, et.L)(() => {
                            var e, t, a;
                            switch (null == s ? void 0 : s.data.type) {
                                case j.K.Album:
                                    return (0, ec.KU)({ animationUri: '', cover: { uri: s.data.meta.coverUri }, entity: { type: e_.h.ALBUM } });
                                case j.K.Artist:
                                    return (0, ec.KU)({
                                        animationUri: '',
                                        cover: { uri: null == (t = s.data.meta.artist) || null == (e = t.cover) ? void 0 : e.uri },
                                        entity: { type: e_.h.ARTIST },
                                    });
                                case j.K.Playlist:
                                    return (0, ec.KU)({
                                        animationUri: '',
                                        cover: { uri: null == (a = s.data.meta.cover) ? void 0 : a.uri },
                                        entity: { type: e_.h.PLAYLIST },
                                    });
                                case j.K.Various:
                                    return (0, ec.KU)({
                                        animationUri: '',
                                        cover: { uri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%' },
                                        entity: { type: e_.h.TRACK },
                                    });
                            }
                        }),
                    };
                },
                ef = { src: '/_next/static/media/vibeCover.c55d574d.png' };
            var eC = a(56013),
                ek = a.n(eC);
            let ej = (0, d.PA)(() => {
                    let { experiments: e } = (0, n.Pjs)(),
                        t = (0, n.eGp)(),
                        { vibeBlockTitle: a, vibeBlockSubTitle: i, vibeBlockAgent: r } = eb(),
                        s = (0, u.useCallback)(
                            (e) => {
                                (0, el.P)(e, ek().ripple), null == t || t.moveForward();
                            },
                            [t],
                        ),
                        o = (0, et.L)(() =>
                            e.checkExperiment(n.zal.WebNextWaveAgentExperiment, 'on') && r
                                ? (0, l.jsx)(ec.nr, { agent: r, shouldShowControl: !1 })
                                : (0, l.jsx)(v.Image, {
                                      src: ef.src,
                                      className: ek().vibeCover,
                                      fit: 'cover',
                                      'aria-hidden': !0,
                                      ...(0, D.Am)(D.e8.player.PLAY_QUEUE_VIBE_BLOCK_IMAGE),
                                  }),
                        );
                    return (0, l.jsxs)('div', {
                        className: ek().root,
                        onClick: s,
                        ...(0, D.Am)(D.e8.player.PLAY_QUEUE_VIBE_BLOCK),
                        children: [
                            o,
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)(y.Caption, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ek().title,
                                        ...(0, D.Am)(D.e8.player.PLAY_QUEUE_VIBE_BLOCK_TITLE),
                                        children: a,
                                    }),
                                    (0, l.jsx)(y.Caption, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ek().vibeTitle,
                                        ...(0, D.Am)(D.e8.player.PLAY_QUEUE_VIBE_BLOCK_VIBE_TITLE),
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                eA = (0, d.PA)(() => {
                    var e;
                    let {
                            fullscreenPlayer: {
                                playQueue: { afterTracksIds: t, isVibeBlockShowed: a, isDragAndDropEnabled: i, currentIndex: r },
                            },
                            sonataState: { isContextRepeatMode: s, isVibeContext: o },
                            experiments: d,
                        } = (0, n.Pjs)(),
                        m = (0, n.eGp)(),
                        p = null == m ? void 0 : m.state.queueState.order.value,
                        v = null != (e = null == m ? void 0 : m.state.queueState.livePlayableIndex.value) ? e : 0,
                        h = null == m ? void 0 : m.state.queueState.entityList.value,
                        g = d.checkExperiment(n.zal.WebNextUseWaveQueue, 'on'),
                        x = !o || g,
                        { isMovingForward: b, isMovingBackward: f, difference: C, isSingleTrackSwitch: k } = H(),
                        j = r - C,
                        A = (0, u.useId)(),
                        P = (0, u.useRef)(null);
                    return s && 0 === t.length
                        ? (0, l.jsx)('div', { className: eo().root, ...(0, D.Am)(D.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK) })
                        : (0, l.jsxs)('div', {
                              className: eo().root,
                              ...(0, D.Am)(D.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK),
                              children: [
                                  (0, l.jsx)(y.Caption, {
                                      variant: 'div',
                                      size: 'm',
                                      className: (0, c.$)(eo().title, { [eo().title_withDnD]: i }),
                                      ...(0, D.Am)(D.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK_TITLE),
                                      children: (0, l.jsx)(_.A, { id: 'play-queue.next-in' }),
                                  }),
                                  (0, l.jsx)(ee, {
                                      children: (0, l.jsxs)('div', {
                                          tabIndex: 0,
                                          ref: P,
                                          className: (0, c.$)(eo().animatedContent, {
                                              [eo().animatedContent_moveToTop]: b,
                                              [eo().animatedContent_moveFromTop]: f && !k,
                                              [eo().animatedContent_moveFromTopSingleTrack]: f && k,
                                          }),
                                          children: [
                                              t.map((e) => {
                                                  let t = ((e) => {
                                                      var t, a;
                                                      let { index: i, order: n, livePlayableIndex: r, isVibeContext: s, isWaveQueueEnabled: o, entityList: l } = e,
                                                          c = null != (a = null == n ? void 0 : n.indexOf(i)) ? a : -1,
                                                          d = !!(null == l || null == (t = l[i]) ? void 0 : t.sourceContext);
                                                      return s && o && c > r && !d;
                                                  })({ index: e, order: p, livePlayableIndex: v, isVibeContext: o, isWaveQueueEnabled: g, entityList: h });
                                                  return (null == p ? void 0 : p[j]) === e
                                                      ? (0, l.jsx)(
                                                            'div',
                                                            {
                                                                className: eo().prevTrack,
                                                                children: (0, l.jsx)(er, { index: e, isDragAndDropEnabled: i, isRemoveAvailable: x, hideControls: t }, e),
                                                            },
                                                            A,
                                                        )
                                                      : (0, l.jsx)(er, { index: e, isDragAndDropEnabled: i, blockRef: P, isRemoveAvailable: x, hideControls: t }, e);
                                              }),
                                              a && (0, l.jsx)(ej, {}),
                                          ],
                                      }),
                                  }),
                              ],
                          });
                });
            var eP = a(29068),
                eN = a.n(eP);
            let eS = (0, d.PA)((e) => {
                    let { forwardRef: t, scrollToNowPlayingBlock: a } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { beforeTracksIds: i, isDragAndDropEnabled: r, currentIndex: s },
                            },
                            sonataState: { isVibeContext: o },
                            experiments: d,
                        } = (0, n.Pjs)(),
                        m = (0, n.eGp)(),
                        _ = null == m ? void 0 : m.state.queueState.order.value,
                        p = d.checkExperiment(n.zal.WebNextUseWaveQueue, 'on'),
                        v = !o || p;
                    (0, u.useEffect)(() => {
                        a();
                        let e = new ResizeObserver(() => a());
                        return (
                            'function' != typeof t && (null == t ? void 0 : t.current) && e.observe(t.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]);
                    let { isMovingForward: y, isMovingBackward: h, difference: g, isSingleTrackSwitch: x } = H(),
                        b = s - g,
                        f = (0, u.useId)();
                    return (0, l.jsx)('div', {
                        className: eN().root,
                        ref: t,
                        children: (0, l.jsx)(ee, {
                            children: (0, l.jsx)('div', {
                                className: (0, c.$)(eN().animatedContent, {
                                    [eN().animatedContent_moveToBottom]: h,
                                    [eN().animatedContent_moveFromBottom]: y && !x,
                                    [eN().animatedContent_moveFromBottomSingleTrack]: y && x,
                                }),
                                ...(0, D.Am)(D.e8.player.PLAY_QUEUE_BEFORE_PLAYING_BLOCK),
                                children:
                                    null == i
                                        ? void 0
                                        : i.map((e) =>
                                              (null == _ ? void 0 : _[b]) === e
                                                  ? (0, l.jsx)(
                                                        'div',
                                                        {
                                                            className: eN().prevTrack,
                                                            children: (0, l.jsx)(er, { index: e, isDragAndDropEnabled: r, isRemoveAvailable: v }, e),
                                                        },
                                                        f,
                                                    )
                                                  : (0, l.jsx)(er, { index: e, isDragAndDropEnabled: r, isRemoveAvailable: v }, e),
                                          ),
                            }),
                        }),
                    });
                }),
                eT = (0, u.forwardRef)((e, t) => (0, l.jsx)(eS, { forwardRef: t, ...e }));
            var ew = a(49814),
                eI = a(71935),
                eE = a(2933),
                eL = a(33134),
                eB = a.n(eL);
            let eM = (e) => {
                    let { index: t } = e,
                        a = r(t),
                        i = null == a ? void 0 : a.track,
                        n = null == a ? void 0 : a.playContextParams;
                    return i && n
                        ? (0, l.jsx)('div', {
                              className: eB().root,
                              children: (0, l.jsx)(w.Kt, {
                                  track: i,
                                  playContextParams: n,
                                  draggingClassName: eB().dots,
                                  className: eB().noHoverItem,
                                  withDNDBlock: !0,
                                  isDragging: !0,
                                  withSecondaryColor: !0,
                              }),
                          })
                        : null;
                },
                eO = (0, d.PA)((e) => {
                    let { children: t } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { isDragAndDropEnabled: a },
                            },
                        } = (0, n.Pjs)(),
                        { activeId: i, handleDragStart: r, handleDragCancel: s, sensors: o } = (0, n.YcA)(),
                        c = (0, u.useCallback)((e) => {
                            let { active: t, over: a } = e;
                            if (!t.id || !(null == a ? void 0 : a.id)) return;
                        }, []),
                        d = (0, u.useMemo)(() => {
                            if (i)
                                return (0, eE.createPortal)(
                                    (0, l.jsx)(ew.Hd, { dropAnimation: { duration: 0 }, children: (0, l.jsx)(eM, { index: Number(i) }) }),
                                    window.document.body,
                                );
                        }, [i]);
                    return a
                        ? (0, l.jsxs)(ew.Mp, {
                              sensors: o,
                              collisionDetection: ew.fp,
                              onDragStart: r,
                              onDragEnd: c,
                              onDragCancel: s,
                              modifiers: [eI.FN],
                              children: [t, d],
                          })
                        : t;
                });
            var eR = a(32024),
                eD = a.n(eR);
            let eF = (0, d.PA)(() => {
                let {
                        fullscreenPlayer: {
                            modal: e,
                            playQueue: { isDragAndDropEnabled: t },
                        },
                        sonataState: { isContextRepeatMode: a, isOneRepeatMode: i, shuffle: r },
                    } = (0, n.Pjs)(),
                    { formatMessage: s } = (0, R.A)(),
                    { url: o, title: d, subTitle: m } = eb(),
                    _ = (0, n.Cz$)({ onClick: e.close }),
                    p = (0, u.useMemo)(() => {
                        let e = o ? {} : (0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                            t = (0, l.jsx)(y.Heading, {
                                variant: 'h2',
                                size: 'm',
                                weight: 'bold',
                                lineClamp: 1,
                                className: (0, c.$)(eD().heading, { [eD().heading_withOffset]: !m }),
                                ...e,
                                children: d,
                            });
                        return o
                            ? (0, l.jsx)(h.N_, {
                                  className: eD().title,
                                  containerClassName: eD().linkContainer,
                                  textClassName: eD().linkText,
                                  icon: (0, l.jsx)(F.Icon, { className: eD().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                  iconPosition: 'right',
                                  href: o,
                                  onClick: _,
                                  ...(0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                                  children: t,
                              })
                            : t;
                    }, [_, m, d, o]),
                    v = (0, et.L)(() =>
                        a ? s({ id: 'play-queue.repeat-context' }) : i ? s({ id: 'play-queue.repeat-one' }) : r ? s({ id: 'play-queue.shuffle' }) : null,
                    );
                return (0, l.jsxs)('div', {
                    className: (0, c.$)(eD().root, { [eD().root_withDnD]: t }),
                    children: [
                        (0, l.jsx)(y.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: eD().subTitle,
                            ...(0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE),
                            children: m,
                        }),
                        p,
                        (0, l.jsx)(y.Caption, {
                            variant: 'div',
                            size: 'm',
                            className: eD().modeTitle,
                            ...(0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_MODE_TITLE),
                            children: v,
                        }),
                    ],
                });
            });
            var eK = a(73630),
                eV = a.n(eK);
            let ez = (0, d.PA)(() => {
                    var e, t;
                    let { from: a } = (0, n.fyy)(),
                        {
                            fullscreenPlayer: {
                                playQueue: { currentIndex: i, isDragAndDropEnabled: r },
                            },
                            sonataState: { entityMeta: s },
                        } = (0, n.Pjs)(),
                        { isMovingForward: o, isMovingBackward: d } = H(),
                        u = (0, n.eGp)(),
                        m = null == u || null == (t = u.state.currentContext) || null == (e = t.value) ? void 0 : e.data;
                    if (!m || !s) return null;
                    let _ = { contextData: { ...m, from: a }, queueParams: { index: i, entityId: s.id } };
                    return (0, l.jsxs)('div', {
                        className: eV().root,
                        ...(0, D.Am)(D.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK),
                        children: [
                            (0, l.jsx)(eF, {}),
                            (0, l.jsx)(w.Kt, {
                                track: s,
                                playContextParams: _,
                                className: (0, c.$)(eV().track, eV().important, { [eV().track_withDnD]: r, [eV().track_moveFromTop]: d, [eV().track_moveFromBottom]: o }),
                                withSecondaryColor: !0,
                            }),
                        ],
                    });
                }),
                eW = () => {
                    let { style: e, contextValue: t } = (() => {
                            var e;
                            let {
                                    fullscreenPlayer: {
                                        playQueue: { updateTracks: t, hiddenTrackIds: a },
                                    },
                                } = (0, n.Pjs)(),
                                i = (0, n.eGp)(),
                                [r, s] = (0, u.useState)(),
                                o = (0, u.useRef)(void 0),
                                l = (0, u.useRef)(void 0),
                                c = (0, u.useRef)(void 0),
                                { state: d, handleDebouncedToggle: m } = (0, Q.F)({ delay: 600, throttleTimeout: 600 }),
                                { state: _, handleDebouncedToggle: p } = (0, Q.F)({ delay: 600, throttleTimeout: 600 }),
                                v = (0, $.c)(() => {
                                    var e;
                                    let a = null == i ? void 0 : i.state.queueState.entityList.value,
                                        n = null == i ? void 0 : i.state.queueState.index.value,
                                        r = null == i ? void 0 : i.state.queueState.order.value,
                                        s = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type;
                                    a && 'number' == typeof n && r && s && t(a, n, r, s);
                                }),
                                y = (0, $.c)(() => {
                                    var e;
                                    let t = null == i ? void 0 : i.state.queueState.index.value,
                                        n = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type,
                                        r = o.current;
                                    if ('number' == typeof t && 'number' == typeof r) {
                                        let e = a.reduce((e, t) => (t < r ? e + 1 : e - 1), 0),
                                            i = t - r;
                                        c.current = i;
                                        let o = n !== l.current,
                                            d = 1 === Math.abs(i) ? i : i + e;
                                        i > 0 || o ? (m(), s(o ? 1 : d)) : i < 0 && (p(), s(d));
                                    }
                                    (o.current = t), (l.current = n);
                                });
                            (0, u.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.state.queueState.index.onChange(() => {
                                              v(), y();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [y, v, null == i ? void 0 : i.state.queueState.index]),
                                (0, u.useEffect)(() => {
                                    let e = null == i ? void 0 : i.state.queueState.shuffle.onChange(v),
                                        t = null == i ? void 0 : i.state.queueState.entityList.onChange(v),
                                        a = null == i ? void 0 : i.state.queueState.order.onChange(v);
                                    return () => {
                                        null == e || e(), null == t || t(), null == a || a();
                                    };
                                }, [
                                    v,
                                    null == i ? void 0 : i.state.queueState.entityList,
                                    null == i ? void 0 : i.state.queueState.index,
                                    null == i ? void 0 : i.state.queueState.order,
                                    null == i ? void 0 : i.state.queueState.shuffle,
                                ]);
                            let h = (0, u.useMemo)(() => {
                                    let e = 56 * (r || 1);
                                    return {
                                        '--play-queue-transition-duration-s': ''.concat(0.6, 's'),
                                        '--now-playing-title-height-px': ''.concat(90, 'px'),
                                        '--next-in-title-height-px': ''.concat(52, 'px'),
                                        '--track-height-px': ''.concat(56, 'px'),
                                        '--move-to-top-start-position': ''.concat(e, 'px'),
                                        '--move-from-top-start-position': ''.concat(e - 142, 'px'),
                                        '--move-to-bottom-start-position': ''.concat(e, 'px'),
                                        '--move-from-bottom-start-position': ''.concat(e + 52 + 90, 'px'),
                                        '--move-from-top-now-playing-block-start-position': ''.concat(e - 90, 'px'),
                                        '--move-from-bottom-now-playing-block-start-position': ''.concat(e + 52, 'px'),
                                    };
                                }, [r]),
                                g = 1 === Math.abs(null != r ? r : 0);
                            return {
                                style: h,
                                contextValue: { isMovingForward: d, isMovingBackward: _, difference: null != (e = c.current) ? e : 0, isSingleTrackSwitch: g },
                            };
                        })(),
                        a = (0, u.useRef)(null),
                        i = (0, u.useRef)(null),
                        { state: r, handleDebouncedToggle: s, reset: o } = (0, Q.F)({ delay: 1e4, throttleTimeout: 2e3 }),
                        c = (0, u.useCallback)(function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'instant';
                            if (i.current && a.current) {
                                let t = i.current.clientHeight;
                                a.current.scrollTo({ top: t, behavior: e });
                            }
                        }, []);
                    return (
                        (0, u.useEffect)(() => {
                            r || (c('smooth'), o());
                        }, [r, o, c]),
                        (0, u.useEffect)(() => {
                            let e = a.current;
                            return (
                                null == e || e.addEventListener('scroll', s),
                                () => {
                                    null == e || e.removeEventListener('scroll', s);
                                }
                            );
                        }, [s]),
                        (0, l.jsx)(eO, {
                            children: (0, l.jsx)(Y.Provider, {
                                value: t,
                                children: (0, l.jsx)('div', {
                                    className: Z().root,
                                    style: e,
                                    ...(0, D.Am)(D.e8.player.PLAY_QUEUE),
                                    children: (0, l.jsx)('div', {
                                        className: Z().content,
                                        ref: a,
                                        children: (0, l.jsxs)('div', {
                                            className: Z().scrollContent,
                                            children: [(0, l.jsx)(eT, { ref: i, scrollToNowPlayingBlock: c }), (0, l.jsx)(ez, {}), (0, l.jsx)(eA, {})],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                },
                eU = (0, u.createContext)({});
            var eQ = a(67202),
                eG = a.n(eQ),
                eq = a(25728),
                e$ = a.n(eq);
            let eY = (0, d.PA)((e) => {
                let { className: t, icon: a } = e,
                    { sonataState: i } = (0, n.Pjs)(),
                    r = (0, u.useCallback)(
                        (e) => {
                            let t = { animationDelay: ''.concat((e + 1) * 0.275, 's'), animationDuration: ''.concat(1.1, 's, ').concat(1.1, 's') };
                            return a
                                ? (0, u.cloneElement)(a, {
                                      className: (0, c.$)(e$().element, e$().element_withIcon, { [e$().element_paused]: i.isPaused }),
                                      key: e,
                                      style: t,
                                  })
                                : (0, l.jsx)(
                                      'div',
                                      { className: (0, c.$)(e$().element, e$().element_withDefaultElement, { [e$().element_paused]: i.isPaused }), style: t },
                                      e,
                                  );
                        },
                        [a, i],
                    );
                return (0, l.jsx)('div', { className: (0, c.$)(e$().root, t), children: Array.from({ length: 4 }, (e, t) => r(t)) });
            });
            var eH = a(90163),
                eX = a(11576),
                eZ = (function (e) {
                    return (e.INTRO = 'intro'), (e.PREPARE = 'prepare'), (e.PLAYING = 'playing'), (e.OUTRO = 'outro'), e;
                })({}),
                eJ = a(47624),
                e0 = a.n(eJ);
            let e1 = (0, d.PA)(() => {
                var e, t, a;
                let { formatMessage: i } = (0, R.A)(),
                    {
                        fullscreenPlayer: { syncLyrics: r },
                    } = (0, n.Pjs)();
                return (0, l.jsxs)('footer', {
                    className: e0().root,
                    children: [
                        r.hasWriters &&
                            (0, l.jsx)(y.Caption, {
                                className: e0().writers,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.authors' }, { authors: null == (e = r.writers) ? void 0 : e.join(', ') }),
                            }),
                        (null == (t = r.major) ? void 0 : t.prettyName) &&
                            (0, l.jsx)(y.Caption, {
                                className: e0().major,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.source' }, { source: null == (a = r.major) ? void 0 : a.prettyName }),
                            }),
                    ],
                });
            });
            var e2 = a(28354),
                e8 = a.n(e2);
            let e6 = (e) => {
                let { className: t, text: a } = e;
                return (0, l.jsx)('span', { className: (0, c.$)(e8().root, t), children: a });
            };
            var e9 = a(61762),
                e5 = a.n(e9);
            let e3 = (0, d.PA)((e) => {
                var t, a;
                let { state: i, progressPosition: r, shouldShowScrolledLyrics: s, setProgressPosition: o } = e,
                    d = (0, n.eGp)(),
                    m = (0, eX.Mn)(),
                    {
                        fullscreenPlayer: { syncLyrics: _ },
                    } = (0, n.Pjs)(),
                    p = (0, u.useCallback)(
                        (e) => (t) => {
                            s &&
                                (t.stopPropagation(),
                                o(e + 0.01),
                                null == d ||
                                    d.setProgress(e + 0.01).catch(() => {
                                        o(r);
                                    }));
                        },
                        [r, o, s, d],
                    ),
                    v = _.getActiveLineIndex(r);
                return (
                    ((e) => {
                        let t = (0, u.useRef)(0),
                            {
                                fullscreenPlayer: { syncLyrics: a },
                                sonataState: { contextId: i, contextType: r },
                            } = (0, n.Pjs)();
                        (0, u.useEffect)(() => {
                            !a.hasLyricsViewed &&
                                null !== e &&
                                'visible' === document.visibilityState &&
                                (t.current++, t.current >= 2 && a.sendViews({ contextId: i, contextType: r }));
                        }, [e, i, r, a]);
                    })(v),
                    (0, u.useEffect)(() => {
                        if (!s) {
                            if (((i === eZ.INTRO || i === eZ.PREPARE) && m.slideTo(0), i === eZ.OUTRO)) {
                                var e;
                                m.slideTo(Number(null == (e = _.lines) ? void 0 : e.length));
                            }
                            null !== v && m.slideTo(v + 1);
                        }
                    }, [v, s, i, m, null == (t = _.lines) ? void 0 : t.length]),
                    null == (a = _.lines)
                        ? void 0
                        : a.map((e, t) => {
                              var a;
                              return (0, l.jsx)(
                                  eX.qr,
                                  {
                                      onClickCapture: p(e.fromSec),
                                      className: (0, c.$)(e5().line, {
                                          [e5().line_last]: t === Number(null == (a = _.lines) ? void 0 : a.length) - 1 && !s,
                                          [e5().line_active]: t === v && !s,
                                      }),
                                      ...(0, D.Am)(D.e8.player.SYNC_LYRICS_LINE),
                                      children: (0, l.jsx)(e6, { text: e.text }),
                                  },
                                  e.key,
                              );
                          })
                );
            });
            e3.displayName = 'SwiperSlide';
            let e4 = { forceToAxis: !0 },
                e7 = (0, d.PA)(() => {
                    let {
                            fullscreenPlayer: { syncLyrics: e },
                            settings: { isMobile: t },
                        } = (0, n.Pjs)(),
                        { progressPosition: a, setProgressPosition: i } = (() => {
                            var e;
                            let t = (0, n.eGp)(),
                                [a, i] = (0, u.useState)(null != (e = null == t ? void 0 : t.state.playerState.progress.value.position) ? e : 0),
                                r = (0, u.useCallback)((e) => {
                                    i(e);
                                }, []);
                            return (
                                (0, u.useEffect)(() => {
                                    let e =
                                        null == t
                                            ? void 0
                                            : t.state.playerState.progress.onChange(() => {
                                                  i(t.state.playerState.progress.value.position);
                                              });
                                    return () => {
                                        null == e || e();
                                    };
                                }, [t]),
                                { progressPosition: a, setProgressPosition: r }
                            );
                        })(),
                        { state: r } = ((e) => {
                            let { position: t } = e,
                                {
                                    fullscreenPlayer: { syncLyrics: a },
                                } = (0, n.Pjs)();
                            return {
                                state: (0, u.useMemo)(() => {
                                    let { startSec: e, endSec: i } = a;
                                    return e && e >= 3 && e - t > 0 && e - t <= 3 ? eZ.PREPARE : e && e > t ? eZ.INTRO : i && t > i ? eZ.OUTRO : eZ.PLAYING;
                                }, [t, a]),
                            };
                        })({ position: a }),
                        { scrollerClassName: s, footerClassName: o, counterClassName: d } = (0, u.useContext)(eU),
                        { state: m, handleDebouncedToggle: _, reset: p } = (0, Q.F)({ delay: 3e3, throttleTimeout: 300 }),
                        { state: v, handleDebouncedToggle: y, reset: h } = (0, Q.F)({ delay: 3e3, throttleTimeout: 300 }),
                        g = (0, u.useCallback)(() => {
                            v || _();
                        }, [_, v]),
                        x = (0, u.useCallback)(() => {
                            m && p(), y();
                        }, [y, p, m]),
                        b = (0, u.useCallback)(
                            (e) => {
                                switch (e.code) {
                                    case n.Y_O.KEY_L:
                                    case n.Y_O.KEY_J:
                                    case n.Y_O.ARROW_LEFT:
                                    case n.Y_O.ARROW_RIGHT:
                                        _();
                                }
                            },
                            [_],
                        ),
                        f = (0, u.useMemo)(() => (r === eZ.PREPARE ? Math.ceil(Number(e.startSec) - a) : null), [a, r, e.startSec]),
                        C = (0, u.useMemo)(
                            () => (r === eZ.PREPARE ? (0, l.jsx)(e6, { className: e5().counterLine, text: f }) : r === eZ.INTRO ? (0, l.jsx)(eY, {}) : null),
                            [f, r],
                        );
                    return (
                        ((e) => {
                            let { onSetProgressEventChange: t } = e,
                                a = (0, n.eGp)();
                            (0, u.useEffect)(() => {
                                let e =
                                    null == a
                                        ? void 0
                                        : a.state.playerState.event.onChange((e) => {
                                              e === A.Iu.SET_PROGRESS && t();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, a]);
                        })({ onSetProgressEventChange: h }),
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('keydown', b),
                                () => {
                                    window.removeEventListener('keydown', b);
                                }
                            ),
                            [b],
                        ),
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('mousemove', g),
                                () => {
                                    window.removeEventListener('mousemove', g);
                                }
                            ),
                            [g],
                        ),
                        (0, l.jsxs)(eX.RC, {
                            className: (0, c.$)(
                                e5().root,
                                { [e5()['root_'.concat(r)]]: !v, [e5().root_withVisibleUpperLyrics]: m, [e5().root_withVisibleScrolledLyrics]: v },
                                s,
                            ),
                            modules: [eH.FJ, eH.U1],
                            slidesPerView: 'auto',
                            spaceBetween: 32,
                            direction: 'vertical',
                            mousewheel: e4,
                            freeMode: !0,
                            onScroll: x,
                            onTouchMove: t ? x : void 0,
                            allowTouchMove: t,
                            children: [
                                (0, l.jsx)(eX.qr, { className: (0, c.$)(e5().counter, d), children: C }),
                                (0, l.jsx)(e3, { setProgressPosition: i, shouldShowScrolledLyrics: v, state: r, progressPosition: a }),
                                (0, l.jsx)(eX.qr, { className: o, children: (0, l.jsx)(e1, {}) }),
                            ],
                        })
                    );
                }),
                te = (0, d.PA)((e) => {
                    let { className: t, counterClassName: a, footerClassName: i, scrollerClassName: r, contentClassName: s, loaderClassName: o } = e,
                        d = (0, u.useRef)(null),
                        {
                            sonataState: { entityMeta: m },
                            fullscreenPlayer: { syncLyrics: _, hideSyncLyrics: p },
                        } = (0, n.Pjs)();
                    (0, u.useEffect)(() => {
                        _.currentTrackId !== (null == m ? void 0 : m.id) && (null == m ? void 0 : m.isSyncLyricsAvailable) && _.getData(null == m ? void 0 : m.id);
                    }, [null == m ? void 0 : m.isSyncLyricsAvailable, null == m ? void 0 : m.id, _]);
                    let v = (0, u.useMemo)(
                            () => (_.isResolved ? (0, l.jsx)(e7, {}) : ((_.isRejected || _.hasInvalidLyrics) && p(), (0, l.jsx)(eY, { className: o }))),
                            [_.isResolved, _.isRejected, _.hasInvalidLyrics, _.setInvisible, o],
                        ),
                        y = (0, u.useMemo)(() => ({ counterClassName: a, scrollerClassName: r, footerClassName: i }), [a, i, r]);
                    return (0, l.jsx)(eU.Provider, {
                        value: y,
                        children: (0, l.jsx)('div', {
                            ref: d,
                            className: (0, c.$)(eG().root, t),
                            children: (0, l.jsx)('div', { className: (0, c.$)(eG().content, s), ...(0, D.Am)(D.e8.player.SYNC_LYRICS_CONTENT), children: v }),
                        }),
                    });
                });
            var tt = a(80157),
                ta = a(35096),
                ti = a.n(ta);
            let tn = (0, d.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: r,
                            withRipple: s = !1,
                            size: o = 's',
                            forwardRef: d,
                            children: m,
                            color: _,
                            disabled: v = !1,
                        } = e,
                        { formatMessage: y } = (0, R.A)(),
                        {
                            fullscreenPlayer: { isPlayQueueMode: h, hidePlayQueue: g, showPlayQueue: x },
                        } = (0, n.Pjs)(),
                        b = (0, u.useCallback)(() => (h ? g() : x()), [g, h, x]),
                        { scaleAnimation: f, unscaleAnimation: C, handleAnimationEnd: k, handleClick: j } = (0, tt.C)({ shouldStartFromUnscale: h, onClick: b });
                    return (0, l.jsx)(p.$, {
                        className: (0, c.$)(ti().root, { [ti().animation_scaled]: f, [ti().animation_unscaled]: C }, t),
                        color: _,
                        onAnimationEnd: k,
                        withRipple: s,
                        variant: a,
                        size: o,
                        radius: 'xxxl',
                        'aria-label': y({ id: 'play-queue.title' }),
                        'aria-pressed': h,
                        onClick: j,
                        icon: (0, l.jsx)(F.Icon, { size: i, className: (0, c.$)(ti().icon, r, { [ti().icon_active]: h }), variant: 'playQueue' }),
                        ref: d,
                        disabled: v,
                        ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_QUEUE_BUTTON),
                        children: m,
                    });
                }),
                tr = (0, u.forwardRef)((e, t) => (0, l.jsx)(tn, { forwardRef: t, ...e }));
            var ts = a(54762),
                to = a.n(ts);
            let tl = (0, d.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: r,
                            withRipple: s = !1,
                            size: o = 's',
                            forwardRef: d,
                            children: m,
                            color: _,
                            disabled: v = !1,
                        } = e,
                        { formatMessage: y } = (0, R.A)(),
                        {
                            fullscreenPlayer: { isSyncLyricsMode: h, hideSyncLyrics: g, showSyncLyrics: x },
                        } = (0, n.Pjs)(),
                        b = (0, u.useCallback)(() => (h ? g() : x()), [g, h, x]),
                        { scaleAnimation: f, unscaleAnimation: C, handleAnimationEnd: k, handleClick: j } = (0, tt.C)({ shouldStartFromUnscale: h, onClick: b }),
                        A = ''.concat(y({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(y({ id: 'warning-messages.can-break-accessibility' }));
                    return (0, l.jsx)(p.$, {
                        className: (0, c.$)(to().root, { [to().animation_scaled]: f, [to().animation_unscaled]: C }, t),
                        color: _,
                        onAnimationEnd: k,
                        withRipple: s,
                        variant: a,
                        size: o,
                        radius: 'xxxl',
                        'aria-label': A,
                        'aria-pressed': h,
                        onClick: j,
                        icon: (0, l.jsx)(F.Icon, { size: i, className: (0, c.$)(to().icon, r, { [to().icon_active]: h }), variant: 'syncLyrics' }),
                        ref: d,
                        disabled: v,
                        ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
                        children: m,
                    });
                }),
                tc = (0, u.forwardRef)((e, t) => (0, l.jsx)(tl, { forwardRef: t, ...e }));
            var td = a(88129),
                tu = a.n(td);
            let tm = (0, d.PA)(() => {
                var e;
                let [t, a] = (0, u.useState)(!1),
                    { sonataState: i, user: r } = (0, n.Pjs)(),
                    { entityMeta: s } = i,
                    { handleDebouncedToggle: o } = (0, Q.F)({ delay: 1500, throttleTimeout: 300 }),
                    d = i.canSpeed && ((null == s ? void 0 : s.isNonMusic) || (null == s || null == (e = s.mainAlbum) ? void 0 : e.isNonMusic)),
                    m = (0, I.KX)(s),
                    _ = (0, u.useCallback)((e) => {
                        e.stopPropagation();
                    }, []),
                    p = (0, et.L)(() => {
                        if ((null == s || !s.isRemoved) && (null == s ? void 0 : s.isAvailable))
                            return (0, l.jsx)(w._Y, {
                                dismissSettings: { bubbles: { escapeKey: !1 } },
                                track: s,
                                open: t,
                                onOpenChange: a,
                                placement: 'left',
                                icon: (0, l.jsx)(F.Icon, { variant: 'more', size: 'm' }),
                                className: (0, c.$)(tu().menuButton, { [tu().menuButton_active]: t }),
                                wrapperClassName: tu().menuWrapper,
                                onClick: _,
                                size: 'l',
                                ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
                            });
                    }),
                    v = (0, u.useMemo)(() => {
                        if (null == s ? void 0 : s.isSyncLyricsAvailable)
                            return (0, l.jsx)(tc, {
                                className: tu().syncLyricsButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !r.isAuthorized,
                            });
                    }, [null == s ? void 0 : s.isSyncLyricsAvailable, r.isAuthorized]);
                return (
                    (0, u.useEffect)(
                        () => (
                            window.addEventListener('mousemove', o),
                            () => {
                                window.removeEventListener('mousemove', o);
                            }
                        ),
                        [o],
                    ),
                    (0, l.jsxs)('div', {
                        className: (0, c.$)(tu().root, { [tu().root_visible]: t }),
                        children: [
                            (0, l.jsx)(tr, {
                                className: tu().playQueueButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !r.isAuthorized,
                            }),
                            (0, l.jsx)(P.$u, { className: tu().sonataControls, isMobile: !1, entityMeta: s, isFullscreen: !0 }),
                            p,
                            v,
                            (0, l.jsxs)('div', {
                                className: tu().bottomRightButtonsWrapper,
                                children: [
                                    d && (0, l.jsx)(h.ig, { className: tu().speedButton, size: 'l', iconSize: 'm', isIconCentered: !0 }),
                                    (0, l.jsx)(h.aQ, {
                                        fallback: (0, l.jsx)(h.cy, {
                                            className: tu().likeButton,
                                            isLiked: null == s ? void 0 : s.isLiked,
                                            onClick: m,
                                            iconSize: 'm',
                                            size: 'l',
                                            variant: 'default',
                                            color: 'secondary',
                                            disabled: !r.isAuthorized,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var t_ = a(56721),
                tp = a(410),
                tv = a.n(tp);
            let ty = (e) => {
                let { className: t, children: a, coverUri: i } = e;
                return (0, l.jsxs)(t_.Paper, {
                    radius: 'm',
                    className: (0, c.$)(tv().root, t),
                    ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_POSTER_CONTENT),
                    children: [(0, l.jsx)(h.BW, { className: tv().cover, src: i, size: 400, fit: 'cover', withAvatarReplace: !0 }), a],
                });
            };
            var th = a(60714),
                tg = a.n(th),
                tx = a(53058);
            let tb = {
                    enter: tg().additionalContent_enter,
                    enterActive: tg().additionalContent_enter_active,
                    exit: tg().additionalContent_exit,
                    exitActive: tg().additionalContent_exit_active,
                    appear: tg().additionalContent_enter,
                    appearActive: tg().additionalContent_enter_active,
                },
                tf = (e) => {
                    let { isModeActive: t, shouldDisableInsetTransition: a, children: i } = e,
                        n = (0, u.useRef)(null);
                    return (0, l.jsx)(tx.A, {
                        in: t,
                        nodeRef: n,
                        timeout: 800,
                        unmountOnExit: !0,
                        appear: !0,
                        classNames: tb,
                        children: (0, l.jsx)('div', {
                            ref: n,
                            className: (0, c.$)(tg().additionalContent, { [tg().additionalContent_withDisabledInsetTransition]: a }),
                            children: i,
                        }),
                    });
                },
                tC = (0, d.PA)(() => {
                    var e;
                    let { state: t, handleDebouncedToggle: a } = (0, Q.F)({ delay: 150, throttleTimeout: 100 }),
                        {
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: r,
                        } = (0, n.Pjs)(),
                        { state: s, toggleTrue: o } = (0, G.e)(!1),
                        [isRemoteDeviceConnected, setIsRemoteDeviceConnected] = (0, u.useState)(window.isRemoteDeviceConnected ?? !1),
                        [remoteDevice, setRemoteDevice] = (0, u.useState)(window.remoteDevice ?? null),
                        d = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (e = i.mainAlbum) ? void 0 : e.isPodcast),
                        m = null == i ? void 0 : i.isTrackAudiobook,
                        _ = {
                            [k.PLAY_QUEUE]: { component: (0, l.jsx)(eW, {}), isActive: r.isPlayQueueMode },
                            [k.SYNC_LYRICS]: {
                                component: (0, l.jsx)(te, {
                                    className: tg().syncLyrics,
                                    loaderClassName: tg().syncLyricsLoader,
                                    contentClassName: tg().syncLyricsContent,
                                    scrollerClassName: tg().syncLyricsScroller,
                                    counterClassName: tg().syncLyricsCounter,
                                    footerClassName: tg().syncLyricsFooter,
                                }),
                                isActive: r.isSyncLyricsMode,
                            },
                        },
                        p = (0, u.useMemo)(
                            () =>
                                i
                                    ? m
                                        ? (0, l.jsx)(w.ZS, {
                                              hasLineClamp: !1,
                                              className: (0, c.$)(tg().meta, { [tg().meta_isSplitMode]: r.isSplitMode }),
                                              titleContainerClassName: tg().title,
                                              track: i,
                                              withSecondaryColor: !0,
                                              captionSize: 'l',
                                              explicitSize: 'xs',
                                              withAuthor: !0,
                                              textClassName: (0, c.$)(tg().nonMusicAuthors, tg().ellipsis),
                                              withContextMenuArtists: !0,
                                          })
                                        : d
                                          ? (0, l.jsx)(w.wo, {
                                                className: (0, c.$)(tg().meta, { [tg().meta_isSplitMode]: r.isSplitMode }),
                                                titleContainerClassName: tg().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withDate: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withPodcastName: !0,
                                                textClassName: tg().nonMusicAuthors,
                                            })
                                          : (0, l.jsx)(w.j7, {
                                                hasLineClamp: !1,
                                                className: (0, c.$)(tg().meta, { [tg().meta_isSplitMode]: r.isSplitMode }),
                                                titleContainerClassName: tg().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withAlbumLink: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withAllArtistsTitle: !0,
                                                artistsClassName: tg().artists,
                                                textClassName: tg().ellipsis,
                                                withContextMenuArtists: !0,
                                            })
                                    : null,
                            [i, null == i ? void 0 : i.id, d, m, r.isSplitMode],
                        );
                    return (
                        (0, u.useEffect)(() => {
                            let e = (device_info) => {
                                    setIsRemoteDeviceConnected(!0), setRemoteDevice(device_info);
                                },
                                t = () => {
                                    setIsRemoteDeviceConnected(!1), setRemoteDevice(null);
                                };
                            return (
                                (window.onRemoteDeviceConnected || (window.onRemoteDeviceConnected = [])).push(e),
                                (window.onRemoteDeviceDisconnected || (window.onRemoteDeviceDisconnected = [])).push(t),
                                () => {
                                    (window.onRemoteDeviceConnected = window.onRemoteDeviceConnected.filter((t) => t !== e)),
                                        (window.onRemoteDeviceDisconnected = window.onRemoteDeviceDisconnected.filter((e) => e !== t));
                                }
                            );
                        }, []),
                        (0, u.useEffect)(
                            () => (
                                window.addEventListener('resize', a),
                                () => {
                                    window.removeEventListener('resize', a);
                                }
                            ),
                            [a],
                        ),
                        (0, u.useEffect)(() => {
                            r.isSplitMode && o();
                        }, [r.isSplitMode, r.mode, o]),
                        (0, u.useEffect)(
                            () => () => {
                                r.reset(), r.playQueue.reset();
                            },
                            [r],
                        ),
                        (0, l.jsxs)('div', {
                            className: tg().root,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: (0, c.$)(tg().fullscreenContent, {
                                        [tg().fullscreenContent_withDisabledInsetTransition]: t,
                                        [tg().fullscreenContent_enter]: r.isSplitMode,
                                        [tg().fullscreenContent_leave]: !r.isSplitMode && s,
                                    }),
                                    ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_FULLSCREEN_CONTENT),
                                    children: [
                                        isRemoteDeviceConnected &&
                                            (0, l.jsxs)('div', {
                                                style: {
                                                    position: 'absolute',
                                                    top: '-25px',
                                                    color: 'var(--ym-controls-color-primary-default-enabled)',
                                                },
                                                children: [
                                                    (0, l.jsx)('span', {
                                                        children: `Управление с ${deviceTypeMap?.[remoteDevice?.info?.type] ?? ''}: ${remoteDevice?.info?.title}`,
                                                    }),
                                                ],
                                            }),
                                        (0, l.jsx)(ty, {
                                            className: (0, c.$)(tg().poster, tg().important),
                                            coverUri: null == i ? void 0 : i.coverUri,
                                            children: (0, l.jsx)(tm, {}),
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: tg().info,
                                            children: [
                                                p,
                                                (0, l.jsx)(q.v, {
                                                    className: tg().sliderContainer,
                                                    sliderClassName: tg().slider,
                                                    disabled: !i,
                                                    isMobile: !1,
                                                    isFullscreen: r.isSplitMode,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object.entries(_).map((e) => {
                                    let [a, { component: i, isActive: n }] = e;
                                    return (0, l.jsx)(tf, { isModeActive: n, shouldDisableInsetTransition: t, children: i }, a);
                                }),
                            ],
                        })
                    );
                }),
                tk = (0, d.PA)(() => {
                    let { formatMessage: e } = (0, R.A)(),
                        {
                            currentTrackInfo: { modal: t },
                            sonataState: { entityMeta: a },
                            fullscreenPlayer: i,
                            fullscreenVideoPlayer: r,
                            advert: s,
                        } = (0, n.Pjs)(),
                        o = z(a);
                    (0, u.useEffect)(() => {
                        s.isAdvertShown && i.modal.close();
                    }, [s.isAdvertShown, i.modal]);
                    let d = !t.isOpened && !r.modal.isOpened;
                    return (0, l.jsxs)(K.a, {
                        className: (0, c.$)(U().root, U().important),
                        open: i.modal.isOpened,
                        onOpenChange: d ? i.modal.onOpenChange : void 0,
                        onClose: i.modal.close,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        style: o,
                        contentClassName: U().modalContent,
                        closeOnOutsidePress: !1,
                        ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_MODAL),
                        children: [
                            (0, l.jsx)('header', {
                                className: U().header,
                                children: (0, l.jsx)(p.$, {
                                    className: U().closeButton,
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'm',
                                    icon: (0, l.jsx)(F.Icon, { variant: 'arrowDown', size: 'xs' }),
                                    onClick: i.modal.close,
                                    'aria-label': e({ id: 'interface-actions.close' }),
                                    ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_CLOSE_BUTTON),
                                }),
                            }),
                            (0, l.jsx)(tC, {}),
                            (0, l.jsx)(V.Notification, {
                                className: U().notification,
                                enableMultiContainer: !0,
                                containerId: n.uQT.FULLSCREEN_INFO,
                                position: 'bottom-center',
                            }),
                            (0, l.jsx)(V.Notification, {
                                className: U().notification,
                                enableMultiContainer: !0,
                                containerId: n.uQT.FULLSCREEN_ERROR,
                                position: 'bottom-center',
                            }),
                        ],
                    });
                });
            var tj = a(62973),
                tA = a.n(tj),
                tP = a(45460),
                tN = a(64304),
                tS = a(20512),
                tT = a(64647),
                tw = a(23480),
                tI = a(11584),
                tSwitch = a(18099);
            let tE = () => {
                let e = (0, tI.st)(),
                    t = (0, n.UlF)(),
                    { hash: a } = (0, tI.gf)(),
                    { pageId: i } = (0, n.$au)();
                return (0, u.useCallback)(
                    (r, s) => {
                        if (!e || !i || !n.Wft[i] || !a) return;
                        let o = { hash: a, pageId: n.Wft[i], propertyKey: 'sound_quality', propertyValueNew: r, propertyValueOld: s },
                            l = (0, tw.Fx)({ params: o, logger: t, context: 'useSendEventOnQualitySettingsChanged' });
                        l && (0, tw.Bl)(e.evgenInstance, l);
                    },
                    [e, a, t, i],
                );
            };
            var tL = a(33322),
                tB = a.n(tL);
            let tM = (e) => {
                let { closeToast: t, onOpenQualitySettingsMenu: a, message: i, ariaLabel: n, isMobile: r } = e,
                    { formatMessage: s } = (0, R.A)(),
                    o = (0, u.useCallback)(() => {
                        a(), null == t || t();
                    }, [t, a]),
                    c = (0, u.useMemo)(
                        () =>
                            (0, l.jsxs)('div', {
                                className: tB().message,
                                children: [
                                    (0, l.jsx)(tS.q, { children: (0, l.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                                    (0, l.jsx)(y.Caption, {
                                        variant: 'div',
                                        size: 'm',
                                        'aria-hidden': !0,
                                        ...(0, D.Am)(D.e8.player.NOTIFICATION_CHANGE_QUALITY_TEXT),
                                        children: i,
                                    }),
                                    !r &&
                                        (0, l.jsx)(p.$, {
                                            className: tB().changeButton,
                                            onClick: o,
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': s({ id: 'interface-actions.change' }),
                                            children: (0, l.jsx)(y.Caption, { variant: 'div', size: 'm', children: (0, l.jsx)(_.A, { id: 'interface-actions.change' }) }),
                                        }),
                                ],
                            }),
                        [n, s, o, i, r],
                    );
                return (0, l.jsx)(h.$W, {
                    closeToast: t,
                    cover: (0, l.jsx)(F.Icon, { className: tB().icon, size: 'xs', variant: 'settings' }),
                    message: c,
                    coverRadius: 's',
                });
            };
            var tO = a(39946),
                tR = a.n(tO);
            let tD = [
                    {
                        type: tP.e.HIGH_QUALITY,
                        text: (0, l.jsx)(_.A, { id: 'player-actions.audio-quality-maximum' }),
                        qualityMessageId: 'player-actions.audio-quality-maximum',
                    },
                    {
                        type: tP.e.BALANCED,
                        text: (0, l.jsx)(_.A, { id: 'player-actions.audio-quality-optimal' }),
                        qualityMessageId: 'player-actions.audio-quality-optimal',
                    },
                    {
                        type: tP.e.EFFICIENT,
                        text: (0, l.jsx)(_.A, { id: 'player-actions.audio-quality-economical' }),
                        qualityMessageId: 'player-actions.audio-quality-economical',
                    },
                ],
                tF = {
                    [tP.e.HIGH_QUALITY]: (0, l.jsx)(_.A, { id: 'player-actions.audio-quality-maximum-description' }),
                    [tP.e.BALANCED]: (0, l.jsx)(_.A, { id: 'player-actions.audio-quality-optimal-description' }),
                    [tP.e.EFFICIENT]: (0, l.jsx)(_.A, { id: 'player-actions.audio-quality-economical-description' }),
                },
                tK = (0, d.PA)((e) => {
                    let { onOpenChange: t, open: a, placement: i, size: r, referenceClassName: s, icon: o, referenceLabel: d, disabled: m } = e;
                    (0, n.NBO)(a);
                    let v = (0, u.useId)(),
                        { formatMessage: y } = (0, R.A)(),
                        { notify: g } = (0, n.lkh)(),
                        x = (0, n.NFA)().get(n.ooW),
                        {
                            sonataState: b,
                            user: f,
                            settings: { isMobile: C },
                            quality: k,
                        } = (0, n.Pjs)(),
                        j = (0, tT.Sq)(),
                        A = (0, n.gQL)(),
                        P = tE(),
                        { state: N, setState: S } = (0, G.e)(!1),
                        T = (0, u.useCallback)(() => {
                            null == t || t(!0);
                        }, [t]),
                        w = (0, u.useCallback)(
                            (e) => {
                                P(e, b.quality), b.setQuality(e), null == A || A.setQuality(e), x.set(n.cYZ.YmPlayerQuality, e, { expires: 365 });
                            },
                            [A, b, x, P],
                        ),
                        I = (0, u.useCallback)(
                            (e) => {
                                let t = y({ id: e }).toLowerCase();
                                return {
                                    message: (0, l.jsx)(_.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                    ariaLabel: y({ id: 'notifications-info.quality-changed' }, { quality: t }),
                                };
                            },
                            [y],
                        ),
                        E = (0, u.useCallback)(
                            (e, t) => () => {
                                if (b.quality === e) return;
                                w(e);
                                let { message: a, ariaLabel: i } = I(t);
                                g((0, l.jsx)(tM, { onOpenQualitySettingsMenu: T, message: a, ariaLabel: i, isMobile: C }), { containerId: n.uQT.INFO });
                            },
                            [I, T, g, b.quality, w, C],
                        ),
                        L = (0, u.useCallback)(
                            (e) => {
                                let { selectedItemIcon: t, type: a, qualityMessageId: i, ariaSelected: n, text: r } = e;
                                return (e) => {
                                    let { isPopoverEnabled: s, popoverText: o } = e;
                                    return (0, l.jsx)(tN.Dr, {
                                        isBlock: !0,
                                        disabled: s,
                                        className: (0, c.$)(tR().item, tR().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: E(a, i),
                                        role: 'option',
                                        'aria-selected': n,
                                        children: (0, l.jsxs)('span', {
                                            className: tR().itemWrapper,
                                            children: [
                                                (0, l.jsxs)('span', { className: tR().item_option, children: [r, ' ', (0, l.jsx)(tS.q, { children: o })] }),
                                                (0, l.jsx)('span', { className: (0, c.$)(tR().item_option, tR().itemSubTitle), children: tF[a] }),
                                            ],
                                        }),
                                    });
                                };
                            },
                            [E],
                        ),
                        B = !f.hasPlus,
                        M = (0, u.useMemo)(
                            () =>
                                tD.map((e) => {
                                    let { type: t, text: a, qualityMessageId: i } = e,
                                        n = t === b.quality ? (0, l.jsx)(F.Icon, { variant: 'check', size: 'xxs' }) : null,
                                        r = t === b.quality;
                                    return (0, l.jsx)(
                                        h.SU,
                                        {
                                            isNested: !0,
                                            isEnabled: B && !C,
                                            placement: 'left',
                                            textVariant: 'highQuality',
                                            renderChildren: L({ selectedItemIcon: n, type: t, qualityMessageId: i, ariaSelected: r, text: a }),
                                        },
                                        t,
                                    );
                                }),
                            [b.quality, B, C, L],
                        ),
                        O = (0, u.useMemo)(
                            () => ({
                                listClassName: (0, c.$)(tR().root, tR().root_withNewQuality, { [tR().root_withEqualizer]: j.isAvailable }),
                                menuClassName: (0, c.$)({ [tR().menuContent]: !C }),
                            }),
                            [j.isAvailable, C],
                        ),
                        K = (0, u.useMemo)(() => {
                            if (j.isAvailable && !C)
                                return (0, l.jsx)(tT.rk, { isExpanded: j.isEnabled, isDisabled: !1, className: tR().equalizer, title: y({ id: 'equalizer.title' }) }, v);
                        }, [j.isEnabled, v, y, j.isAvailable, C]),
                        V = (0, u.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: n } = e;
                                if (!C)
                                    return (0, l.jsx)(p.$, {
                                        className: (0, c.$)(s, { [tR().button_active]: k.modal.isOpened }),
                                        radius: 'round',
                                        color: 'secondary',
                                        size: r,
                                        icon: o,
                                        variant: 'text',
                                        onClick: k.modal.open,
                                        'aria-label': y({ id: 'player-actions.audio-quality' }),
                                        withRipple: !1,
                                        ...(0, D.Am)(D.e8.player.SOUND_QUALITY_BUTTON),
                                    });
                                let u = n ? S : t;
                                return (0, l.jsx)(tN.W1, {
                                    wrapperClassName: s,
                                    size: r,
                                    icon: o,
                                    placement: i,
                                    open: a,
                                    onOpenChange: u,
                                    ariaLabel: y({ id: 'player-actions.audio-quality' }),
                                    footer: K,
                                    label: d,
                                    variant: 'text',
                                    ...O,
                                    containerProps: (0, D.Am)(D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU),
                                    isMobile: C,
                                    lockScroll: !C,
                                    disabled: m,
                                    ...(0, D.Am)(D.e8.player.SOUND_QUALITY_BUTTON),
                                    children: M,
                                });
                            },
                            [C, S, t, s, r, o, i, a, y, K, d, O, M, k.modal.open, k.modal.isOpened, m],
                        );
                    return (0, l.jsx)(h.Zr, {
                        isEnabled: !f.isAuthorized,
                        isOpened: N,
                        onOpenChange: S,
                        placement: 'top',
                        textVariant: 'changeQuality',
                        renderChildren: V,
                    });
                }),
                tV = (0, d.PA)((e) => {
                    var t, a, i, r;
                    let { className: s, onSyncLyricsButtonClick: o } = e,
                        {
                            sonataState: d,
                            settings: { isLandscape: m },
                            fullscreenPlayer: { isSyncLyricsMode: _ },
                            user: { hasPlus: v },
                        } = (0, n.Pjs)(),
                        { formatMessage: y } = (0, R.A)(),
                        [g, x] = (0, u.useState)(!1),
                        b = (0, P.AA)(),
                        f = (0, P.e9)(),
                        C = null === d.entityMeta,
                        k = (null == (t = d.entityMeta) ? void 0 : t.isNonMusic) || (null == (i = d.entityMeta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic),
                        j = d.canSpeed && k,
                        A = (0, $.c)(() => {
                            f(d);
                        }),
                        N = (0, $.c)(() => {
                            b(d);
                        }),
                        S = (0, u.useMemo)(() => {
                            var e;
                            if (k) return;
                            let t = ''.concat(y({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(y({ id: 'warning-messages.can-break-accessibility' }));
                            return (0, l.jsx)(p.$, {
                                className: (0, c.$)(tA().syncLyricsButton, { [tA().syncLyricsButton_active]: _ }),
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !(null == (e = d.entityMeta) ? void 0 : e.isSyncLyricsAvailable) || m,
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': t,
                                icon: (0, l.jsx)(F.Icon, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: o,
                            });
                        }, [y, k, _, o, m, null == (r = d.entityMeta) ? void 0 : r.isSyncLyricsAvailable]);
                    return (0, l.jsx)('div', {
                        className: (0, c.$)(tA().footer, s),
                        children: (0, l.jsxs)('div', {
                            className: tA().footerContainer,
                            children: [
                                (C || d.canChangeRepeatMode) && (0, l.jsx)(P.s_, { onClick: N, isDisabled: C, repeatMode: d.repeatMode, variant: 'text' }),
                                j && (0, l.jsx)(h.ig, { size: 'xxxs', iconSize: 'l' }),
                                (0, l.jsx)(tK, { open: g, onOpenChange: x, icon: (0, l.jsx)(F.Icon, { variant: 'settings', size: 'xs' }), size: 'xxxs', disabled: !v }),
                                S,
                                (C || d.canShuffle) && (0, l.jsx)(P.uP, { onClick: A, isDisabled: C, shuffle: d.shuffle, variant: 'text' }),
                            ],
                        }),
                    });
                });
            var tz = a(80110),
                tW = a.n(tz);
            let tU = {
                    enter: tW().coverWrapper_enter,
                    enterActive: tW().coverWrapper_enter_active,
                    exit: tW().coverWrapper_exit,
                    exitActive: tW().coverWrapper_exit_active,
                },
                tQ = (0, d.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        i = (0, u.useRef)(null),
                        [r, s] = (0, u.useState)(!1),
                        { state: o, handleDebouncedToggle: d, reset: m } = (0, Q.F)({ delay: 7e3, throttleTimeout: 0 }),
                        {
                            fullscreenPlayer: { isSplitMode: _, isSyncLyricsMode: p, showSyncLyrics: v, hideSyncLyrics: y, isPlayQueueMode: g, syncLyrics: x },
                            sonataState: { entityMeta: b },
                            settings: { isLandscape: f },
                        } = (0, n.Pjs)(),
                        C = (null == b ? void 0 : b.isTrackPodcast) || (null == b || null == (t = b.mainAlbum) ? void 0 : t.isPodcast),
                        k = null == b ? void 0 : b.isTrackAudiobook,
                        j = (o || !_ || f) && !g,
                        A = (0, u.useCallback)(() => {
                            p && !f && (o ? m() : d());
                        }, [p, o, m, d, f]),
                        N = (0, u.useCallback)(() => {
                            p && !f && o && d();
                        }, [d, p, o, f]),
                        S = (0, u.useCallback)(() => {
                            if (null == b ? void 0 : b.isSyncLyricsAvailable) return p ? y() : v();
                        }, [null == b ? void 0 : b.isSyncLyricsAvailable, y, p, v]),
                        T = (0, u.useMemo)(() => {
                            if (b)
                                return k
                                    ? (0, l.jsx)(w.ZS, {
                                          textClassName: tW().metaText,
                                          track: b,
                                          withSecondaryColor: !0,
                                          captionSize: 'l',
                                          explicitSize: 'xs',
                                          withAuthor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : C
                                      ? (0, l.jsx)(w.wo, {
                                            textClassName: tW().metaText,
                                            track: b,
                                            withSecondaryColor: !0,
                                            withDate: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withPodcastName: !0,
                                        })
                                      : (0, l.jsx)(w.j7, {
                                            textClassName: tW().metaText,
                                            track: b,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withAllArtistsTitle: !0,
                                            withContextMenuArtists: !0,
                                        });
                        }, [b, k, C]);
                    return (
                        (0, u.useEffect)(() => {
                            p && f && x.setInvisible();
                        }, [f, p, x]),
                        (0, u.useLayoutEffect)(() => {
                            p && !f && d();
                        }, [d, p, f]),
                        (0, l.jsxs)('div', {
                            onTouchEnd: N,
                            className: (0, c.$)(tW().root, a),
                            children: [
                                (0, l.jsx)('div', {
                                    className: tW().content,
                                    children: (0, l.jsxs)('div', {
                                        className: tW().wrapper,
                                        children: [
                                            (0, l.jsxs)('div', {
                                                className: (0, c.$)(tW().infoBlock, { [tW().infoBlock_withExpandedSyncLyrics]: !o && p && !f }),
                                                children: [
                                                    (0, l.jsxs)('div', {
                                                        onClick: A,
                                                        className: (0, c.$)(tW().contentContainer, { [tW().contentContainer_withSplitMode]: _ }),
                                                        children: [
                                                            p &&
                                                                !f &&
                                                                (0, l.jsx)(te, {
                                                                    className: tW().syncLyrics,
                                                                    scrollerClassName: tW().syncLyricsScroller,
                                                                    contentClassName: tW().syncLyricsContent,
                                                                    loaderClassName: tW().syncLyricsLoader,
                                                                    footerClassName: tW().syncLyricsFooter,
                                                                    counterClassName: tW().syncLyricsCounter,
                                                                }),
                                                            g && (0, l.jsx)(eW, {}),
                                                            (0, l.jsx)(tx.A, {
                                                                in: !_ || (f && p),
                                                                nodeRef: i,
                                                                timeout: 200,
                                                                unmountOnExit: !0,
                                                                classNames: tU,
                                                                children: (0, l.jsx)(t_.Paper, {
                                                                    ref: i,
                                                                    radius: 'm',
                                                                    className: tW().coverWrapper,
                                                                    children: (0, l.jsx)(h.BW, {
                                                                        className: tW().cover,
                                                                        src: null == b ? void 0 : b.coverUri,
                                                                        size: 400,
                                                                        fit: 'cover',
                                                                        withAvatarReplace: !0,
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    !g &&
                                                        (0, l.jsxs)('div', {
                                                            className: tW().trackInfo,
                                                            children: [
                                                                !o &&
                                                                    p &&
                                                                    !f &&
                                                                    (0, l.jsx)(t_.Paper, {
                                                                        className: tW().trackInfoCoverContainer,
                                                                        radius: 'xs',
                                                                        children: (0, l.jsx)(h.BW, {
                                                                            className: tW().trackInfoCover,
                                                                            src: null == b ? void 0 : b.coverUri,
                                                                            size: 200,
                                                                            fit: 'cover',
                                                                            withAvatarReplace: !0,
                                                                        }),
                                                                    }),
                                                                (0, l.jsxs)('div', {
                                                                    className: tW().metaContainer,
                                                                    children: [
                                                                        T,
                                                                        !(null == b ? void 0 : b.isRemoved) &&
                                                                            (null == b ? void 0 : b.isAvailable) &&
                                                                            (0, l.jsx)(w._Y, {
                                                                                className: (0, c.$)(tW().contextMenu, { [tW().contextMenu_visible]: r }),
                                                                                track: b,
                                                                                open: r,
                                                                                onOpenChange: s,
                                                                                placement: 'bottom',
                                                                                isFullscreenMobile: !0,
                                                                                size: 'xs',
                                                                                icon: (0, l.jsx)(F.Icon, { variant: 'more', size: 'xxs' }),
                                                                                ...(0, D.Am)(D.e8.player.MOBILE_FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON),
                                                                            }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            j && (0, l.jsx)(q.v, { className: tW().timeline, disabled: !b, isMobile: !0, isFullscreen: !0, showThumbVariant: 'always' }),
                                            j && (0, l.jsx)(P.$u, { className: tW().buttonsBlock, isMobile: !0, entityMeta: b, isFullscreen: !0 }),
                                        ],
                                    }),
                                }),
                                j && (0, l.jsx)(tV, { onSyncLyricsButtonClick: S }),
                            ],
                        })
                    );
                });
            var tG = a(87392),
                tq = a.n(tG);
            let t$ = (0, d.PA)((e) => {
                    let { children: t, className: a } = e,
                        { url: i, title: r, subTitle: s } = eb(),
                        { fullscreenPlayer: o } = (0, n.Pjs)(),
                        d = (0, $.c)((e) => {
                            e.stopPropagation(), o.modal.isOpened && o.modal.close();
                        }),
                        m = (0, u.useMemo)(() => {
                            let e = (0, l.jsx)(y.Caption, {
                                variant: 'span',
                                size: 'm',
                                className: tq().title,
                                lineClamp: 1,
                                ...(0, D.Am)(D.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE),
                                children: r,
                            });
                            return i ? (0, l.jsx)(h.N_, { href: i, target: '_self', onClick: d, className: tq().link, children: e }) : e;
                        }, [d, r, i]);
                    return (0, l.jsxs)('div', {
                        className: (0, c.$)(tq().root, a),
                        ...(0, D.Am)(D.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK),
                        children: [
                            (0, l.jsxs)('div', {
                                className: tq().textBlock,
                                children: [
                                    (0, l.jsx)(y.Caption, {
                                        variant: 'span',
                                        size: 's',
                                        weight: 'normal',
                                        className: tq().subTitle,
                                        ...(0, D.Am)(D.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE),
                                        children: s,
                                    }),
                                    m,
                                ],
                            }),
                            t,
                        ],
                    });
                }),
                tY = (0, d.PA)(() => {
                    let { formatMessage: e } = (0, R.A)(),
                        {
                            fullscreenPlayer: { modal: t, showPlayQueue: a, isPlayQueueMode: i, hidePlayQueue: r },
                            user: s,
                        } = (0, n.Pjs)(),
                        o = (0, u.useCallback)(() => (i ? r() : a()), [r, i, a]);
                    return (0, l.jsxs)('header', {
                        className: tA().header,
                        children: [
                            (0, l.jsx)(p.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 's',
                                variant: 'text',
                                icon: (0, l.jsx)(F.Icon, { variant: 'arrowDown', size: 'xs' }),
                                onClick: t.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                ...(0, D.Am)(D.e8.player.MOBILE_FULLSCREEN_PLAYER_CLOSE_BUTTON),
                            }),
                            (0, l.jsx)(t$, {
                                className: tA().headerCenter,
                                children: (0, l.jsx)(h.hj, {
                                    title: e({ id: 'player-actions.cast' }),
                                    description: e({ id: 'future-feature.message' }),
                                    children: (0, l.jsx)(p.$, {
                                        className: tA().castButton,
                                        radius: 'round',
                                        size: 's',
                                        variant: 'text',
                                        disabled: !0,
                                        withRipple: !1,
                                        'aria-label': e({ id: 'player-actions.cast' }),
                                        icon: (0, l.jsx)(F.Icon, { variant: 'cast', size: 'xs' }),
                                    }),
                                }),
                            }),
                            (0, l.jsx)(p.$, {
                                className: (0, c.$)(tA().playQueueButton, { [tA().playQueueButton_active]: i }),
                                radius: 'round',
                                size: 's',
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': e({ id: 'play-queue.title' }),
                                onClick: o,
                                icon: (0, l.jsx)(F.Icon, { variant: 'playQueue', size: 'xs' }),
                                disabled: !s.isAuthorized,
                                ...(0, D.Am)(D.e8.player.MOBILE_FULLSCREEN_PLAYER_QUEUE_BUTTON),
                            }),
                        ],
                    });
                }),
                tH = (0, d.PA)(() => {
                    let {
                            sonataState: { entityMeta: e },
                            fullscreenPlayer: t,
                            advert: a,
                            settings: { isMobile: i },
                        } = (0, n.Pjs)(),
                        r = z(e);
                    return (
                        (0, u.useEffect)(() => {
                            a.isAdvertShown && t.modal.close();
                        }, [a.isAdvertShown, t.modal]),
                        (0, l.jsxs)(K.a, {
                            className: (0, c.$)(tA().root, tA().important),
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            style: r,
                            contentClassName: tA().modalContent,
                            lockScroll: i,
                            ...(0, D.Am)(D.e8.player.MOBILE_FULLSCREEN_PLAYER_MODAL),
                            children: [
                                (0, l.jsx)(tY, {}),
                                (0, l.jsx)(tQ, {}),
                                (0, l.jsx)(V.Notification, {
                                    className: tA().notification,
                                    enableMultiContainer: !0,
                                    containerId: n.uQT.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, l.jsx)(V.Notification, {
                                    className: tA().notification,
                                    enableMultiContainer: !0,
                                    containerId: n.uQT.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                tX = (0, d.PA)(() => {
                    let {
                            settings: { isMobileLandscapeHeight: e, layout: t },
                        } = (0, n.Pjs)(),
                        a = t === n.u40.Mobile;
                    return (!a && e) || a ? (0, l.jsx)(tH, {}) : (0, l.jsx)(tk, {});
                });
            var tZ = a(97693),
                tJ = a(26397);
            let t0 = () => {
                var e, t;
                let { sonataState: a } = (0, n.Pjs)(),
                    i = (0, I.KX)(a.entityMeta),
                    r = (0, I.mW)(a.entityMeta),
                    { isGenerativeLiked: s, isGenerativeDisliked: o, onGenerativeLikeClick: l, onGenerativeDislikeClick: c } = (0, tJ.nD)();
                return a.isGenerativeContext
                    ? { isLiked: s, isDisliked: o, handleLike: l, handleDislike: c }
                    : {
                          isLiked: null == (e = a.entityMeta) ? void 0 : e.isLiked,
                          isDisliked: null == (t = a.entityMeta) ? void 0 : t.isDisliked,
                          handleLike: i,
                          handleDislike: r,
                      };
            };
            var t1 = a(9602),
                t2 = a.n(t1);
            let t8 = (0, d.PA)((e) => {
                    let { advertData: t } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, n.Pjs)(),
                        { formatMessage: i } = (0, R.A)(),
                        r = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
                        s = (0, u.useCallback)(() => {
                            window.open(t.advertiserInfoUrl, '_blank', 'noreferrer noopener');
                        }, [t.advertiserInfoUrl]);
                    return r
                        ? (0, l.jsxs)(tN.W1, {
                              className: t2().contextMenuButton,
                              size: 'xxs',
                              icon: (0, l.jsx)(F.Icon, { size: 'xxs', variant: 'more', className: t2().contextMenuIcon }),
                              isMobile: a,
                              ariaLabel: i({ id: 'interface-actions.context-menu' }),
                              children: [
                                  t.clientLegalInfo &&
                                      (0, l.jsx)(y.Caption, { variant: 'div', size: 's', className: t2().contextMenuHeader, children: t.clientLegalInfo }),
                                  t.advertiserInfoUrl &&
                                      (0, l.jsx)(tN.Dr, {
                                          onClick: s,
                                          icon: (0, l.jsx)(F.Icon, { variant: 'info', size: 'xxs' }),
                                          children: (0, l.jsx)(_.A, { id: 'ads.about-advertiser' }),
                                      }),
                              ],
                          })
                        : null;
                }),
                t6 = (0, d.PA)((e) => {
                    var t, a, i;
                    let { className: r } = e,
                        { advert: s } = (0, n.Pjs)();
                    return s.data && s.isAudioAdvert
                        ? (0, l.jsx)('div', {
                              className: r,
                              children: (0, l.jsx)(b, {
                                  data: s.data,
                                  mediaContent: (0, l.jsxs)('div', {
                                      className: t2().imageContainer,
                                      children: [
                                          (0, l.jsx)(v.Image, {
                                              className: (0, c.$)(t2().image, { [t2().image_fallback]: !(null == (t = s.data) ? void 0 : t.iconSrc) }),
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (a = s.data) ? void 0 : a.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, l.jsx)(v.Image, {
                                              className: t2().backgroundImage,
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (i = s.data) ? void 0 : i.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, l.jsx)(t8, { advertData: s.data }),
                                      ],
                                  }),
                                  linkClassName: t2().linkButton,
                              }),
                          })
                        : null;
                });
            var t9 = a(5379),
                t5 = a.n(t9);
            let t3 = (0, d.PA)(() => {
                let {
                        settings: { isMobile: e },
                        sonataState: t,
                        user: a,
                        quality: i,
                    } = (0, n.Pjs)(),
                    r = (0, tT.Sq)(),
                    { contentRootRef: s } = (0, n.gKY)(),
                    { formatMessage: o } = (0, R.A)(),
                    d = (0, n.NFA)(),
                    { notify: m } = (0, n.lkh)(),
                    v = (0, u.useId)(),
                    g = (0, n.gQL)(),
                    x = d.get(n.ooW),
                    b = tE(),
                    f = (0, u.useCallback)(
                        (e) => {
                            (b(e, t.quality), t.setQuality(e), null == g || g.setQuality(e), x.set(n.cYZ.YmPlayerQuality, e, { expires: 365 }));
                        },
                        [g, t, x, b],
                    ),
                    C = (0, u.useCallback)(
                        (e) => {
                            let t = o({ id: e }).toLowerCase();
                            return {
                                message: (0, l.jsx)(_.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                ariaLabel: o({ id: 'notifications-info.quality-changed' }, { quality: t }),
                            };
                        },
                        [o],
                    ),
                    k = (0, u.useCallback)(
                        (e, a) => () => {
                            if (t.quality === e) return;
                            (i.modal.close(), f(e));
                            let { message: r, ariaLabel: s } = C(a);
                            m((0, l.jsx)(tM, { onOpenQualitySettingsMenu: i.modal.open, message: r, ariaLabel: s }), { containerId: n.uQT.INFO });
                        },
                        [C, m, t.quality, f, i.modal],
                    ),
                    j = (0, $.c)((e) => {
                        switch (e) {
                            case tP.e.HIGH_QUALITY:
                                return D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_HIGH_QUALITY;
                            case tP.e.BALANCED:
                                return D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_BALANCED;
                            default:
                                return D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_EFFICIENT;
                        }
                    }),
                    A = (0, u.useCallback)(
                        (e) => {
                            let { selectedItemIcon: t, type: a, qualityMessageId: i, ariaSelected: n, text: r } = e;
                            return (e) => {
                                let { isPopoverEnabled: s, popoverText: o } = e;
                                return (0, l.jsx)(
                                    p.$,
                                    {
                                        isBlock: !0,
                                        disabled: s,
                                        className: (0, c.$)(tR().item, t5().button, tR().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: k(a, i),
                                        role: 'option',
                                        'aria-selected': n,
                                        variant: 'text',
                                        ...(0, D.Am)(j(a)),
                                        children: (0, l.jsxs)('span', {
                                            className: tR().itemWrapper,
                                            children: [
                                                (0, l.jsxs)('span', { className: tR().item_option, children: [r, ' ', (0, l.jsx)(tS.q, { children: o })] }),
                                                (0, l.jsx)('span', { className: (0, c.$)(tR().item_option, tR().itemSubTitle), children: tF[a] }),
                                            ],
                                        }),
                                    },
                                    a,
                                );
                            };
                        },
                        [k, j],
                    );
                (0, u.useEffect)(
                    () => () => {
                        i.modal.close();
                    },
                    [i.modal],
                );
                (0, u.useEffect)(() => {
                    let e = !1;
                    return (
                        i.modal.isOpened &&
                            window.nativeSettings.getAsync('modSettings.r128Normalization').then((t) => {
                                e || setR128Enabled(t ?? !0);
                            }),
                        () => {
                            e = !0;
                        }
                    );
                }, [i.modal.isOpened]);
                let r128Audio = 'function' == typeof n.iIU ? (0, n.iIU)() : null,
                    [r128Enabled, setR128Enabled] = (0, u.useState)(!0),
                    onR128NormalizationToggle = (0, u.useCallback)(
                        (e) => {
                            var a, r, s, o, d;
                            let c = 'boolean' == typeof e ? e : !r128Enabled;
                            setR128Enabled(c), void window.nativeSettings.set('modSettings.r128Normalization', c);
                            let m = null == (a = t.state) || null == (r = a.queueState) || null == (s = r.currentEntity) || null == (o = s.value) ? void 0 : o.entity,
                                _ = null == m || null == (d = m.data) ? void 0 : d.meta.r128,
                                p = null == m ? void 0 : m.data.meta,
                                v =
                                    !_ &&
                                    ('UGC' === (null == p ? void 0 : p.trackSource) ||
                                        'OWN_REPLACED_TO_UGC' === (null == p ? void 0 : p.trackSource) ||
                                        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(null == p ? void 0 : p.id)))
                                        ? { i: 0, tp: 0 }
                                        : _;
                            null == r128Audio ||
                                null == r128Audio.graphs ||
                                r128Audio.graphs.forEach((e) => {
                                    e.setR128Gain(v, c);
                                });
                        },
                        [t.state, r128Audio, r128Enabled],
                    );
                let P = !a.hasPlus,
                    N = (0, u.useMemo)(
                        () =>
                            tD.map((a) => {
                                let { type: i, text: n, qualityMessageId: r } = a,
                                    s = i === t.quality ? (0, l.jsx)(F.Icon, { variant: 'check', size: 'xxs' }) : null,
                                    o = i === t.quality;
                                return (0, l.jsx)(
                                    h.SU,
                                    {
                                        isNested: !0,
                                        isEnabled: P && !e,
                                        placement: 'left',
                                        textVariant: 'highQuality',
                                        renderChildren: A({ selectedItemIcon: s, type: i, qualityMessageId: r, ariaSelected: o, text: n }),
                                    },
                                    i,
                                );
                            }),
                        [t.quality, P, e, A],
                    ),
                    S = (0, u.useMemo)(() => {
                        if (r.isAvailable && !e)
                            return (0, l.jsx)(
                                tT.rk,
                                {
                                    isExpanded: r.isEnabled,
                                    isDisabled: !1,
                                    className: (0, c.$)(tR().equalizer, tR().equalizer_withNewQuality),
                                    title: o({ id: 'equalizer.title' }),
                                },
                                v,
                            );
                    }, [v, o, e, r.isEnabled, r.isAvailable]),
                    X = (0, u.useMemo)(() => {
                        if (e || !r.isAvailable) return null;
                        return (0, l.jsxs)('div', {
                            className: tR().equalizer,
                            style: { display: 'flex', 'align-items': 'center', 'justify-content': 'space-between', gap: '0.5rem' },
                            children: [
                                (0, l.jsx)(y.Caption, {
                                    className: tR().item_option,
                                    style: {
                                        width: 'unset',
                                    },
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    children: 'Нормализация громкости',
                                }),
                                (0, l.jsx)(tSwitch.l, {
                                    isChecked: r128Enabled,
                                    onChange: onR128NormalizationToggle,
                                    'aria-label': 'Нормализация громкости',
                                }),
                            ],
                        });
                    }, [e, r.isAvailable, r128Enabled, onR128NormalizationToggle]);
                return (0, l.jsxs)(K.a, {
                    size: 'fitContent',
                    placement: e ? 'default' : 'right',
                    open: i.modal.isOpened,
                    onOpenChange: i.modal.onOpenChange,
                    onClose: i.modal.close,
                    className: t5().root,
                    contentClassName: t5().modalContent,
                    portalNode: e ? null : s,
                    showHeader: !1,
                    overlayClassName: t5().overlay,
                    containerProps: (0, D.Am)(D.e8.player.QUALITY_SETTINGS_CONTEXT_MENU),
                    children: [
                        !e &&
                            (0, l.jsxs)(y.Heading, {
                                className: (0, c.$)(tR().header, tR().headerWithCloseButton),
                                variant: 'h4',
                                size: 'xs',
                                weight: 'bold',
                                children: [
                                    (0, l.jsx)(_.A, { id: 'player-actions.audio-quality' }),
                                    (0, l.jsx)(p.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, l.jsx)(F.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: i.modal.close,
                                        'aria-label': o({ id: 'interface-actions.close-quality-settings' }),
                                    }),
                                ],
                            }),
                        N,
                        X,
                        S,
                    ],
                });
            });
            var electronBridgeModule = a(18085),
                t4 = a(6562),
                t7 = a.n(t4),
                ae = a(62828),
                at = a(22e3);
            let aa = 'player-region';
            var ai = a(60902),
                an = a.n(ai);
            let ar = (e) => {
                    let { className: t, ariaLabel: a, onClick: i, forwardRef: n } = e;
                    return (0, l.jsx)('div', {
                        ref: n,
                        className: (0, c.$)(an().root, t),
                        children: (0, l.jsx)(p.$, {
                            className: an().button,
                            radius: 'round',
                            size: 's',
                            color: 'secondary',
                            withRipple: !1,
                            'aria-label': a,
                            icon: (0, l.jsx)(F.Icon, { variant: 'fullscreen', size: 'xs' }),
                            onClick: i,
                            ...(0, D.Am)(D.e8.player.FULLSCREEN_PLAYER_BUTTON),
                        }),
                    });
                },
                as = (0, u.forwardRef)((e, t) => (0, l.jsx)(ar, { forwardRef: t, ...e }));
            var ao = a(26141),
                al = a.n(ao);
            let ac = (0, d.PA)((e) => {
                var t;
                let [, forcePlayerBarRerender] = (0, u.useReducer)((e) => e + 1, 0);
                window.forcePlayerBarRerender = forcePlayerBarRerender;
                let { className: a, entityMeta: i, isLiked: r, isDisliked: s, onLikeClick: o, onDislikeClick: d } = e,
                    {
                        user: m,
                        sonataState: v,
                        fullscreenPlayer: g,
                        settings: { isMobileLandscapeHeight: x },
                        advert: b,
                        track: f,
                        experiments: C,
                    } = (0, n.Pjs)(),
                    theState = (0, n.eGp)(),
                    [k, j] = (0, u.useState)(!1),
                    [A, N] = (0, u.useState)(!1),
                    [downloadProgress, setDownloadProgress] = (0, u.useState)(0),
                    [downloadInfo, setDownloadInfo] = (0, u.useState)(theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data),
                    [realBitrate, setRealBitrate] = (0, u.useState)(null),
                    [isRemoteDeviceConnected, setIsRemoteDeviceConnected] = (0, u.useState)(window.isRemoteDeviceConnected ?? !1),
                    [remoteDevice, setRemoteDevice] = (0, u.useState)(window.remoteDevice ?? null),
                    { formatMessage: S } = (0, R.A)(),
                    T = !v.isGenerativeContext,
                    I = v.canSpeed && (null == i ? void 0 : i.isNonMusic),
                    E = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                    L = null == i ? void 0 : i.isTrackAudiobook,
                    B = (0, P.d0)(),
                    M = z(i),
                    O = (0, $.c)(() => {
                        f.open({ trackId: null == i ? void 0 : i.id, albumId: null == i ? void 0 : i.albumId });
                    }),
                    K = (0, $.c)((e) => {
                        e.stopPropagation();
                    }),
                    V = (0, $.c)(async (e) => {
                        await B(v, e);
                    }),
                    onDownloadClick = (0, u.useCallback)(() => {
                        i?.id && electronBridgeModule.sendDownloadCurrentTrack(i.id);
                    }, [i]),
                    updateRealBitrate = (0, u.useCallback)(() => {
                        const instance = window?.Ya?.YaspAudioElement?.instances?.find((e) => e.yaspSrc);
                        if (!instance) {
                            setTimeout(updateRealBitrate, 1000);
                            return console.debug('YaspAudioElement not found, retrying...');
                        }
                        setTimeout(() => {
                            instance.yaspRequestDebugInfo().then((e) => {
                                const t = e.sources.find((e) => e.attached)?.abr?.abrDecisionsLog?.tracks;
                                if (!t) return;
                                let a = Math.round((Object.values(t)?.[0]?.bitrate ?? 0) / 1000);
                                setRealBitrate(a), console.debug('Bitrate Updated:', a);
                            });
                        }, 100);
                    }, [i]),
                    W = (0, $.c)((e) => {
                        let t = e.target,
                            a = t instanceof Element && ['DIV', 'SECTION', 'SPAN'].includes(t.tagName);
                        i && T && a && !b.isAdvertShown && g.showFullscreenPlayerModal();
                    }),
                    U = (0, $.c)((e) => {
                        if (!v.isGenerativeContext && i) {
                            if (((0, el.P)(e, al().ripple), 2 === e.detail)) {
                                f.close(), W(e);
                                return;
                            }
                            1 === e.detail && (null == i ? void 0 : i.hasTrackLink) && !g.modal.isOpened && O();
                        }
                    }),
                    Q = (0, u.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = ''.concat(S({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(S({ id: 'warning-messages.can-break-accessibility' })),
                                n = t ? void 0 : g.showSyncLyrics;
                            return (0, l.jsx)(p.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature) || x,
                                'aria-hidden': !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature),
                                withRipple: !1,
                                'aria-label': a,
                                icon: (0, l.jsx)(F.Icon, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: n,
                                ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON),
                            });
                        },
                        [S, g.showSyncLyrics, null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature, x],
                    ),
                    G = (0, u.useMemo)(
                        () =>
                            (null == i ? void 0 : i.isNonMusic) || b.isAdvertShown
                                ? null
                                : m.isAuthorized && !m.hasPlus
                                  ? (0, l.jsx)(h.SU, { placement: 'top', textVariant: 'sync-lyrics', renderChildren: Q })
                                  : (0, l.jsx)(h.Zr, { isEnabled: !m.isAuthorized, placement: 'top', textVariant: 'sync-lyrics', renderChildren: Q }),
                        [null == i ? void 0 : i.isNonMusic, b.isAdvertShown, m.isAuthorized, Q, m.hasPlus],
                    ),
                    Y = (0, u.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = t ? void 0 : g.showPlayQueue;
                            return (0, l.jsx)(p.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !i,
                                withRipple: !1,
                                'aria-label': S({ id: 'play-queue.title' }),
                                icon: (0, l.jsx)(F.Icon, { variant: 'playQueue', size: 'xs' }),
                                onClick: a,
                                ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON),
                            });
                        },
                        [i, g.showPlayQueue, S],
                    ),
                    H = (0, u.useMemo)(
                        () => (b.isAdvertShown ? null : (0, l.jsx)(h.Zr, { isEnabled: !m.isAuthorized, placement: 'top', textVariant: 'openQueue', renderChildren: Y })),
                        [b.isAdvertShown, m.isAuthorized, Y],
                    ),
                    X = (0, u.useMemo)(() => {
                        if (i && !v.isGenerativeContext && !b.isAdvertShown)
                            return (0, l.jsx)('div', {
                                onDoubleClick: K,
                                children: (0, l.jsx)(w._Y, {
                                    track: i,
                                    placement: 'top',
                                    className: al().trackContextMenuIcon,
                                    open: k,
                                    onOpenChange: j,
                                    icon: (0, l.jsx)(F.Icon, { size: 'xxs', variant: 'more' }),
                                    size: 'xs',
                                    ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON),
                                }),
                            });
                    }, [b.isAdvertShown, i, K, k, v.isGenerativeContext]),
                    Z = (0, u.useMemo)(
                        () =>
                            i
                                ? L
                                    ? (0, l.jsx)(w.ZS, {
                                          afterTitle: X,
                                          explicitSize: 'xxxs',
                                          track: i,
                                          withAuthor: !0,
                                          withSecondaryColor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : E
                                      ? (0, l.jsx)(w.wo, { afterTitle: X, explicitSize: 'xxxs', track: i, withDate: !1, withSecondaryColor: !0, withPodcastName: !0 })
                                      : (0, l.jsx)(w.j7, {
                                            afterTitle: X,
                                            track: i,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            withTrackLink: !v.isGenerativeContext,
                                            withContextMenuArtists: !0,
                                        })
                                : null,
                        [X, i, L, E, v.isGenerativeContext],
                    ),
                    J =
                        (C.checkExperiment(n.zal.WebNextNewWaveTab, 'on') || C.checkExperiment(n.zal.WebNextNewWaveTab, 'on1')) &&
                        C.checkExperiment(n.zal.WebNextNewWaveTabRedesign, 'on');
                updateRealBitrate();
                (0, u.useEffect)(() => {
                    let e = (e, t, a) => {
                        'trackDownloadCurrent' === t && setDownloadProgress(a);
                    };
                    return (
                        window.desktopEvents?.on?.(n.EE.PROGRESS_BAR_CHANGE, e),
                        () => {
                            window.desktopEvents?.off?.(n.EE.PROGRESS_BAR_CHANGE, e);
                        }
                    );
                }, []);
                (0, u.useEffect)(() => {
                    let e;
                    const t = () => {
                            let a = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data,
                                i = JSON.stringify(a),
                                n = JSON.stringify(downloadInfo);
                            if (i !== n)
                                if (void 0 === a) {
                                    let i = 5;
                                    e = setInterval(() => {
                                        const n = theState?.state?.queueState?.currentEntity?.value?.entity?.mediaSourceData?.data;
                                        (i <= 0 || void 0 !== n) && (setDownloadInfo(n), clearInterval(e));
                                        i -= 1;
                                    }, 200);
                                } else setDownloadInfo(a);
                        },
                        a = theState?.state?.queueState?.currentEntity.onChange(t),
                        i = theState?.state?.playerState?.status?.onChange(t),
                        r = theState?.state?.playerState?.event?.onChange(t);
                    return (
                        t(),
                        () => {
                            e && clearInterval(e), 'function' == typeof a && a(), 'function' == typeof i && i(), 'function' == typeof r && r();
                        }
                    );
                }, [theState, downloadInfo]);
                (0, u.useEffect)(() => {
                    let e = (device_info) => {
                            (setIsRemoteDeviceConnected(!0), setRemoteDevice(device_info), (window.isRemoteDeviceConnected = !0), (window.remoteDevice = device_info));
                        },
                        t = () => {
                            (setIsRemoteDeviceConnected(!1), setRemoteDevice(null), (window.isRemoteDeviceConnected = !1), (window.remoteDevice = null));
                        };
                    return (
                        (window.onRemoteDeviceConnected || (window.onRemoteDeviceConnected = [])).push(e),
                        (window.onRemoteDeviceDisconnected || (window.onRemoteDeviceDisconnected = [])).push(t),
                        () => {
                            ((window.onRemoteDeviceConnected = window.onRemoteDeviceConnected.filter((t) => t !== e)),
                                (window.onRemoteDeviceDisconnected = window.onRemoteDeviceDisconnected.filter((e) => e !== t)));
                        }
                    );
                }, []);
                return (0, l.jsx)('section', {
                    style: b.isAdvertShown ? void 0 : M,
                    className: (0, c.$)(al().root, al().important, a),
                    ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP),
                    'aria-labelledby': aa,
                    children: (0, l.jsxs)('div', {
                        className: al().playerBar,
                        children: [
                            !v.isGenerativeContext &&
                                (0, l.jsx)(q.J, { sliderClassName: al().slider, progressbarClassName: al().progressBar, disabled: !i, isMobile: !1 }),
                            (0, l.jsxs)('div', {
                                className: (0, c.$)(al().player, { [al().player_disabled]: !i }),
                                children: [
                                    (0, l.jsx)('div', { onClick: U, className: al().triggerModal }),
                                    (0, l.jsx)(tS.q, {
                                        children: (0, l.jsx)(y.Heading, { variant: 'h3', id: aa, children: (0, l.jsx)(_.A, { id: 'a11y-regions.player' }) }),
                                    }),
                                    (0, l.jsx)('div', {
                                        className: al().info,
                                        children: (0, l.jsx)('div', {
                                            className: al().infoCard,
                                            children:
                                                i &&
                                                !b.isAdvertShown &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        (0, l.jsxs)(t_.Paper, {
                                                            radius: 's',
                                                            className: al().coverContainer,
                                                            ...(0, D.Am)(D.e8.player.PLAYERBAR_DESKTOP_COVER_CONTAINER),
                                                            children: [
                                                                (0, l.jsx)(h.BW, {
                                                                    className: al().cover,
                                                                    src: i.coverUri,
                                                                    size: 100,
                                                                    fit: 'cover',
                                                                    withAvatarReplace: !0,
                                                                }),
                                                                T &&
                                                                    (0, l.jsxs)(ae.m_, {
                                                                        placement: 'top',
                                                                        offsetOptions: 4,
                                                                        children: [
                                                                            (0, l.jsx)(as, {
                                                                                ariaLabel: S({ id: 'player-actions.fullscreen-button' }),
                                                                                onClick: g.showFullscreenPlayerModal,
                                                                            }),
                                                                            (0, l.jsx)(ae.ZI, { children: (0, l.jsx)(_.A, { id: 'player-actions.fullscreen' }) }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, l.jsx)('div', { className: al().description, children: Z }),
                                                    ],
                                                }),
                                        }),
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: (0, c.$)(al().sonata, { [al().sonata_withReversedControls]: J }),
                                        children: [
                                            !window.CHANGE_DISLIKE_BUTTON_POS?.()
                                                ? (0, l.jsx)(h.aQ, {
                                                      fallback: (0, l.jsx)(h._I, { disabled: !i || b.isAdvertShown, isDisliked: s, onClick: d, iconSize: 'xs' }),
                                                  })
                                                : (0, l.jsx)(h.aQ, {
                                                      fallback: (0, l.jsx)(h.cy, { disabled: !i || b.isAdvertShown, isLiked: r, onClick: o, iconSize: 'xs' }),
                                                  }),
                                            (0, l.jsx)(P.$u, {
                                                className: (0, c.$)(al().sonataControls, al().important),
                                                withRepeat: !0,
                                                withShuffle: !0,
                                                isMobile: !1,
                                                entityMeta: i,
                                            }),
                                            !window.CHANGE_DISLIKE_BUTTON_POS?.()
                                                ? (0, l.jsx)(h.aQ, {
                                                      fallback: (0, l.jsx)(h.cy, { disabled: !i || b.isAdvertShown, isLiked: r, onClick: o, iconSize: 'xs' }),
                                                  })
                                                : (0, l.jsx)(h.aQ, {
                                                      fallback: (0, l.jsx)(h._I, { disabled: !i || b.isAdvertShown, isDisliked: s, onClick: d, iconSize: 'xs' }),
                                                  }),
                                            isRemoteDeviceConnected &&
                                                (0, l.jsx)('div', {
                                                    style: {
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        color: 'var(--ym-controls-color-primary-default-enabled)',
                                                        fontSize: 'small',
                                                    },
                                                    children: (0, l.jsxs)('span', {
                                                        children: [
                                                            'Управление с ',
                                                            null != deviceTypeMap?.[remoteDevice?.info?.type] ? deviceTypeMap?.[remoteDevice?.info?.type] : '',
                                                            ': ',
                                                            remoteDevice?.info?.title,
                                                        ],
                                                    }),
                                                }),
                                        ],
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: al().meta,
                                        children: [
                                            !v.isGenerativeContext &&
                                                !b.isAdvertShown &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        I && (0, l.jsx)(h.ig, { iconSize: 'l' }),
                                                        G,
                                                        H,
                                                        (0, l.jsx)(h.hj, {
                                                            title: 'Скачать трек в файл',
                                                            description: i?.id ? 'Скачать трек в читаемый файл на вашем ПК' : 'Не удалось получить данные о треке',
                                                            children: (0, l.jsxs)('button', {
                                                                disabled: !i?.id,
                                                                className: `cpeagBA1_PblpJn8Xgtv UDMYhpDjiAFT3xUx268O ${!i?.id ? '' : 'HbaqudSqu7Q3mv3zMPGr'} qU2apWBO1yyEK0lZ3lPO`,
                                                                style: {
                                                                    display: 'flex',
                                                                    'flex-direction': 'column',
                                                                    gap: '2px',
                                                                    'align-self': 'center',
                                                                    'padding-top': '5px',
                                                                    'padding-inline': '2px',
                                                                },
                                                                children: [
                                                                    (0, l.jsx)('span', {
                                                                        className: 'JjlbHZ4FaP9EAcR_1DxF',
                                                                        children: (0, l.jsx)(F.Icon, {
                                                                            variant: 'download',
                                                                            size: 'xxs',
                                                                            style: {
                                                                                width: '24px',
                                                                                height: '24px',
                                                                            },
                                                                        }),
                                                                    }),
                                                                    (0, l.jsx)('div', {
                                                                        style: {
                                                                            'background-color': 'var(--ym-controls-color-secondary-text-enabled)',
                                                                            width: `${downloadProgress === -100 ? 0 : downloadProgress}%`,
                                                                            transition:
                                                                                downloadProgress >= 0 && downloadProgress < 100
                                                                                    ? 'width 0.3s'
                                                                                    : 'width 0.3s, opacity 0.3s linear 0.5s',
                                                                            opacity: downloadProgress >= 0 && downloadProgress < 100 ? '1' : '0',
                                                                            height: '2px',
                                                                            'border-radius': '10px',
                                                                        },
                                                                    }),
                                                                ],
                                                                onClick: onDownloadClick,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(h.hj, {
                                                            title: 'Качество трека',
                                                            description: downloadInfo?.quality
                                                                ? `${qualityMap[null == downloadInfo ? void 0 : downloadInfo.quality]}: ${codecMap[null == downloadInfo ? void 0 : downloadInfo.codec]}` +
                                                                  ((null == downloadInfo ? void 0 : downloadInfo.bitrate)
                                                                      ? `-${null == downloadInfo ? void 0 : downloadInfo.bitrate}`
                                                                      : '') +
                                                                  ('mp3' !== (null == downloadInfo ? void 0 : downloadInfo.codec) && realBitrate
                                                                      ? ` ${realBitrate} kbps`
                                                                      : '')
                                                                : 'Не удалось получить качество трека',
                                                            children: (0, l.jsx)('div', {
                                                                className: 'cpeagBA1_PblpJn8Xgtv HbaqudSqu7Q3mv3zMPGr',
                                                                children: (0, l.jsx)(tK, {
                                                                    placement: 'bottom',
                                                                    open: A,
                                                                    onOpenChange: N,
                                                                    icon: (
                                                                        window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK?.()
                                                                            ? codecMap[null == downloadInfo ? void 0 : downloadInfo.codec]
                                                                            : qualityMap[null == downloadInfo ? void 0 : downloadInfo.quality]
                                                                    )
                                                                        ? (0, l.jsx)('span', {
                                                                              className: al().settingsButton,
                                                                              style: { width: 'auto', height: 'auto', alignContent: 'center' },
                                                                              children:
                                                                                  (window?.SHOW_CODEC_INSTEAD_OF_QUALITY_MARK?.()
                                                                                      ? codecMap[null == downloadInfo ? void 0 : downloadInfo.codec]
                                                                                      : qualityMap[null == downloadInfo ? void 0 : downloadInfo.quality]) ?? 'NONE',
                                                                          })
                                                                        : (0, l.jsx)(F.Icon, { variant: 'settings', size: 'xs' }),
                                                                    referenceLabel: 'Качество трека',
                                                                    size: 'xxxs',
                                                                    referenceClassName: al().settingsButton,
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            (0, l.jsx)(at.r, { variant: at.q.VERTICAL, sonataVolume: v.volume, onVolumeClick: V }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var ad = a(30388),
                au = a(12793),
                am = a.n(au);
            let a_ = (0, d.PA)((e) => {
                    var t;
                    let { className: a, entityMeta: i, isLiked: r, onLikeClick: s } = e,
                        { user: o, sonataState: d, fullscreenPlayer: m, advert: p } = (0, n.Pjs)(),
                        v = o.isAuthorized && i && !p.isAdvertShown,
                        g = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                        x = null == i ? void 0 : i.isTrackAudiobook,
                        b = z(i),
                        f = (0, u.useCallback)(
                            (e) => {
                                if (p.isAdvertShown) return;
                                let t = e.target,
                                    a = t instanceof Element && ['DIV', 'SECTION', 'IMG', 'SPAN'].includes(t.tagName);
                                i && a && !d.isGenerativeContext && m.showFullscreenPlayerModal();
                            },
                            [i, m, d.isGenerativeContext, p.isAdvertShown],
                        ),
                        C = (0, u.useMemo)(
                            () =>
                                p.isAdvertShown
                                    ? null
                                    : i
                                      ? x
                                          ? (0, l.jsx)(w.ZS, { explicitSize: 'xxxs', track: i, withAuthor: !0, withSecondaryColor: !0, withArtistLink: !1 })
                                          : g
                                            ? (0, l.jsx)(w.wo, {
                                                  explicitSize: 'xxxs',
                                                  track: i,
                                                  withDate: !1,
                                                  withSecondaryColor: !0,
                                                  withPodcastName: !0,
                                                  withAlbumTitleLink: !1,
                                              })
                                            : (0, l.jsx)(w.j7, { withArtistLink: !1, track: i, withSecondaryColor: !0, withAlbumLink: !1 })
                                      : (0, l.jsxs)('div', {
                                            className: am().shimmerMeta,
                                            children: [
                                                (0, l.jsx)(ad.Shimmer, { className: am().shimmerMetaTitle }),
                                                (0, l.jsx)(ad.Shimmer, { className: am().shimmerMetaDescription }),
                                            ],
                                        }),
                            [p.isAdvertShown, i, x, g],
                        ),
                        k = (0, et.L)(() =>
                            p.isAdvertShown
                                ? (0, l.jsx)('div', { className: am().infoCard })
                                : i
                                  ? (0, l.jsxs)('div', {
                                        className: am().infoCard,
                                        children: [
                                            (0, l.jsx)(t_.Paper, {
                                                radius: 's',
                                                className: am().coverContainer,
                                                children: (0, l.jsx)(h.BW, { className: am().cover, src: i.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                            }),
                                            (0, l.jsx)('div', { className: am().description, children: C }),
                                        ],
                                    })
                                  : (0, l.jsxs)('div', {
                                        className: am().infoCard,
                                        children: [
                                            (0, l.jsx)(t_.Paper, {
                                                radius: 's',
                                                className: am().coverContainer,
                                                children: (0, l.jsx)(ad.Shimmer, { className: am().shimmerCover }),
                                            }),
                                            (0, l.jsx)('div', { className: am().description, children: C }),
                                        ],
                                    }),
                        );
                    return (0, l.jsxs)('section', {
                        style: p.isAdvertShown ? void 0 : b,
                        className: (0, c.$)(am().root, a),
                        onClick: f,
                        ...(0, D.Am)(D.e8.player.MOBILE_PLAYERBAR),
                        children: [
                            (0, l.jsx)(tS.q, { children: (0, l.jsx)(y.Heading, { variant: 'h3', id: aa, children: (0, l.jsx)(_.A, { id: 'a11y-regions.player' }) }) }),
                            !d.isGenerativeContext &&
                                (0, l.jsx)(q.v, {
                                    className: am().backgroundProgress,
                                    sliderClassName: am().sliderChangeTimeCode,
                                    isMobile: !0,
                                    isFullscreen: !1,
                                    disabled: !i,
                                }),
                            (0, l.jsxs)('div', {
                                className: am().info,
                                children: [
                                    k,
                                    (0, l.jsxs)('div', {
                                        className: am().infoButtons,
                                        children: [
                                            i &&
                                                v &&
                                                !p.isAdvertShown &&
                                                (0, l.jsx)(h.aQ, { fallback: (0, l.jsx)(h.cy, { isLiked: r, iconSize: 'xs', onClick: s, disabled: !o.isAuthorized }) }),
                                            (0, l.jsx)(P.$u, { isMobile: !0, entityMeta: i }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ap = (0, d.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            sonataState: i,
                            fullscreenPlayer: r,
                        } = (0, n.Pjs)(),
                        { isLiked: s, handleLike: o, isDisliked: d, handleDislike: m } = t0(),
                        _ = (0, n.zwV)(),
                        p = (0, $.c)(() => {
                            if (i.entityMeta) {
                                if (r.modal.isOpened) return void r.modal.close();
                                r.modal.open();
                            }
                        });
                    return (
                        (0, u.useEffect)(() => {
                            if (!i.isGenerativeContext)
                                return (
                                    null == _ || _.addShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER, p),
                                    null == _ || _.addShortcutsListener(n.Mo.MAIN, n.lbr.LIKE, o),
                                    null == _ || _.addShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE, m),
                                    () => {
                                        null == _ || _.removeShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER),
                                            null == _ || _.removeShortcutsListener(n.Mo.MAIN, n.lbr.LIKE),
                                            null == _ || _.removeShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE);
                                    }
                                );
                        }, [m, o, _, i.isGenerativeContext, i.entityMeta, p]),
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(a ? a_ : ac, {
                                    className: (0, c.$)(t, t7().root),
                                    entityMeta: i.entityMeta,
                                    isLiked: s,
                                    isDisliked: d,
                                    onDislikeClick: m,
                                    onLikeClick: o,
                                }),
                                (0, l.jsx)(t6, { className: t7().adPopup }),
                                (0, l.jsx)(tZ.M, {}),
                                (0, l.jsx)(t3, {}),
                            ],
                        })
                    );
                });
            var av = a(68443),
                ay = a.n(av);
            let ah = (0, d.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, className: i } = e,
                        {
                            promolanding: { state: r },
                        } = (0, n.Pjs)(),
                        s = z(t),
                        o = (0, P.d0)(),
                        d = (0, $.c)(async (e) => {
                            await o(r, e, n.V_r.PROMO_LANDING);
                        }),
                        u = (0, et.L)(() =>
                            t ? (0, l.jsx)(w.j7, { track: t, withSecondaryColor: !0, withAlbumLink: !1, withTrackLink: !1, withArtistLink: !1 }) : null,
                        );
                    return (0, l.jsxs)('section', {
                        style: s,
                        className: (0, c.$)(ay().root, i),
                        'aria-labelledby': aa,
                        ...(0, D.Am)(D.e8.player.PROMOLANDING_PLAYERBAR_DESKTOP),
                        children: [
                            (0, l.jsx)(tS.q, { children: (0, l.jsx)(y.Heading, { variant: 'h3', id: aa, children: (0, l.jsx)(_.A, { id: 'a11y-regions.player' }) }) }),
                            t &&
                                (0, l.jsxs)('div', {
                                    className: ay().info,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: ay().infoCard,
                                            children: [
                                                (0, l.jsx)(t_.Paper, {
                                                    radius: 's',
                                                    className: ay().coverContainer,
                                                    children: (0, l.jsx)(h.BW, {
                                                        className: ay().cover,
                                                        src: t.coverUri,
                                                        size: 100,
                                                        fit: 'cover',
                                                        withAvatarReplace: !0,
                                                    }),
                                                }),
                                                (0, l.jsx)('div', { className: ay().description, children: u }),
                                            ],
                                        }),
                                        (0, l.jsx)('div', {
                                            className: ay().infoButtons,
                                            children: (0, l.jsx)(h.cy, { className: ay().likeButton, isLiked: t.isLiked, onClick: a, iconSize: 'xs' }),
                                        }),
                                    ],
                                }),
                            (0, l.jsxs)('div', {
                                className: ay().sonata,
                                children: [
                                    (0, l.jsx)(P.jh, { isMobile: !1, entityMeta: t }),
                                    (0, l.jsx)(q.v, { disabled: !t, isMobile: !1, isFullscreen: !1, sonataPlaybackId: n.V_r.PROMO_LANDING }),
                                ],
                            }),
                            (0, l.jsx)('div', {
                                className: ay().meta,
                                children: (0, l.jsx)(at.r, { sonataVolume: r.volume, onVolumeClick: d, playbackId: n.V_r.PROMO_LANDING }),
                            }),
                        ],
                    });
                }),
                ag = (0, d.PA)((e) => {
                    let { onLikeClick: t, entityMeta: a, className: i } = e,
                        r = z(a),
                        s = (0, et.L)(() =>
                            a ? (0, l.jsx)(w.j7, { track: a, withSecondaryColor: !0, withAlbumLink: !1, withTrackLink: !1, withArtistLink: !1 }) : null,
                        );
                    return (0, l.jsxs)('section', {
                        style: r,
                        className: (0, c.$)(am().root, i),
                        children: [
                            (0, l.jsx)(tS.q, { children: (0, l.jsx)(y.Heading, { variant: 'h3', id: aa, children: (0, l.jsx)(_.A, { id: 'a11y-regions.player' }) }) }),
                            (0, l.jsx)(q.v, {
                                className: am().progressBar,
                                sliderClassName: am().progressBar,
                                isMobile: !0,
                                isFullscreen: !1,
                                disabled: !a,
                                sonataPlaybackId: n.V_r.PROMO_LANDING,
                            }),
                            (0, l.jsxs)('div', {
                                className: am().info,
                                children: [
                                    a &&
                                        (0, l.jsxs)('div', {
                                            className: am().infoCard,
                                            children: [
                                                (0, l.jsx)(t_.Paper, {
                                                    radius: 's',
                                                    className: am().coverContainer,
                                                    children: (0, l.jsx)(h.BW, { className: am().cover, src: a.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                                }),
                                                (0, l.jsx)('div', { className: am().description, children: s }),
                                            ],
                                        }),
                                    (0, l.jsxs)('div', {
                                        className: am().infoButtons,
                                        children: [
                                            a && (0, l.jsx)(h.cy, { isLiked: a.isLiked, iconSize: 'xs', onClick: t }),
                                            (0, l.jsx)(P.jh, { isMobile: !0, entityMeta: a }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ax = (0, d.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            promolanding: { state: i },
                        } = (0, n.Pjs)(),
                        r = (0, n.zwV)(),
                        s = (0, I.c5)(i.entityMeta);
                    (0, u.useEffect)(
                        () => (
                            null == r || r.addShortcutsListener(n.Mo.PROMO_LANDING, n.lbr.LIKE, s),
                            () => {
                                null == r || r.removeShortcutsListener(n.Mo.PROMO_LANDING, n.lbr.LIKE);
                            }
                        ),
                        [s, r],
                    );
                    let o = (0, et.L)(() => (a ? ag : ah));
                    return (0, l.jsx)(o, { onLikeClick: s, entityMeta: i.entityMeta, className: (0, c.$)(t7().root, t) });
                });
            var ab = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        a.r(t), a.d(t, { clsx: () => i, default: () => n });
                        let n = i;
                    },
                    383: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
                            root: 'MoGQRtOtKDQCJc5HZNLw',
                            marquee: 'eYOrGFuz5P6VSNQ_IgdM',
                            content: 'eY9nVaCYr1nX7vFMBaaD',
                            content_static: 'NuV8xfAyyQwIpvv3W2Gy',
                            measure: 'CapcUKn78Iu2s1O6joam',
                        };
                    },
                    1269: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        var i = a(810),
                            n = (function (e) {
                                return e && 'object' == typeof e && 'default' in e ? e : { default: e };
                            })(i);
                        !(function (e) {
                            if (!e) return;
                            let t = document.createElement('style');
                            t.setAttribute('type', 'text/css'), (t.innerHTML = e), document.head.appendChild(t);
                        })(
                            '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
                        ),
                            (t.default = i.forwardRef(function (e, t) {
                                let {
                                        style: a = {},
                                        className: r = '',
                                        autoFill: s = !1,
                                        play: o = !0,
                                        pauseOnHover: l = !1,
                                        pauseOnClick: c = !1,
                                        direction: d = 'left',
                                        speed: u = 50,
                                        delay: m = 0,
                                        loop: _ = 0,
                                        gradient: p = !1,
                                        gradientColor: v = 'white',
                                        gradientWidth: y = 200,
                                        onFinish: h,
                                        onCycleComplete: g,
                                        onMount: x,
                                        children: b,
                                    } = e,
                                    [f, C] = i.useState(0),
                                    [k, j] = i.useState(0),
                                    [A, P] = i.useState(1),
                                    [N, S] = i.useState(!1),
                                    T = i.useRef(null),
                                    w = t || T,
                                    I = i.useRef(null),
                                    E = i.useCallback(() => {
                                        if (I.current && w.current) {
                                            let e = w.current.getBoundingClientRect(),
                                                t = I.current.getBoundingClientRect(),
                                                a = e.width,
                                                i = t.width;
                                            ('up' === d || 'down' === d) && ((a = e.height), (i = t.height)),
                                                s && a && i ? P(i < a ? Math.ceil(a / i) : 1) : P(1),
                                                C(a),
                                                j(i);
                                        }
                                    }, [s, w, d]);
                                i.useEffect(() => {
                                    if (N && (E(), I.current && w.current)) {
                                        let e = new ResizeObserver(() => E());
                                        return (
                                            e.observe(w.current),
                                            e.observe(I.current),
                                            () => {
                                                e && e.disconnect();
                                            }
                                        );
                                    }
                                }, [E, w, N]),
                                    i.useEffect(() => {
                                        E();
                                    }, [E, b]),
                                    i.useEffect(() => {
                                        S(!0);
                                    }, []),
                                    i.useEffect(() => {
                                        'function' == typeof x && x();
                                    }, []);
                                let L = i.useMemo(() => (s ? (k * A) / u : k < f ? f / u : k / u), [s, f, k, A, u]),
                                    B = i.useMemo(
                                        () =>
                                            Object.assign(Object.assign({}, a), {
                                                '--pause-on-hover': !o || l ? 'paused' : 'running',
                                                '--pause-on-click': !o || (l && !c) || c ? 'paused' : 'running',
                                                '--width': 'up' === d || 'down' === d ? '100vh' : '100%',
                                                '--transform': 'up' === d ? 'rotate(-90deg)' : 'down' === d ? 'rotate(90deg)' : 'none',
                                            }),
                                        [a, o, l, c, d],
                                    ),
                                    M = i.useMemo(() => ({ '--gradient-color': v, '--gradient-width': 'number' == typeof y ? ''.concat(y, 'px') : y }), [v, y]),
                                    O = i.useMemo(
                                        () => ({
                                            '--play': o ? 'running' : 'paused',
                                            '--direction': 'left' === d ? 'normal' : 'reverse',
                                            '--duration': ''.concat(L, 's'),
                                            '--delay': ''.concat(m, 's'),
                                            '--iteration-count': _ ? ''.concat(_) : 'infinite',
                                            '--min-width': s ? 'auto' : '100%',
                                        }),
                                        [o, d, L, m, _, s],
                                    ),
                                    R = i.useMemo(() => ({ '--transform': 'up' === d ? 'rotate(90deg)' : 'down' === d ? 'rotate(-90deg)' : 'none' }), [d]),
                                    D = i.useCallback(
                                        (e) =>
                                            [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                                                n.default.createElement(
                                                    i.Fragment,
                                                    { key: t },
                                                    i.Children.map(b, (e) => n.default.createElement('div', { style: R, className: 'rfm-child' }, e)),
                                                ),
                                            ),
                                        [R, b],
                                    );
                                return N
                                    ? n.default.createElement(
                                          'div',
                                          { ref: w, style: B, className: 'rfm-marquee-container ' + r },
                                          p && n.default.createElement('div', { style: M, className: 'rfm-overlay' }),
                                          n.default.createElement(
                                              'div',
                                              { className: 'rfm-marquee', style: O, onAnimationIteration: g, onAnimationEnd: h },
                                              n.default.createElement(
                                                  'div',
                                                  { className: 'rfm-initial-child-container', ref: I },
                                                  i.Children.map(b, (e) => n.default.createElement('div', { style: R, className: 'rfm-child' }, e)),
                                              ),
                                              D(A - 1),
                                          ),
                                          n.default.createElement('div', { className: 'rfm-marquee', style: O }, D(A)),
                                      )
                                    : null;
                            }));
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    998: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e());
                    },
                    9598: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.OverflowMarquee = void 0);
                        let n = a(4377),
                            r = a(5881),
                            s = a(810),
                            o = i(a(1269)),
                            l = a(998),
                            c = i(a(383));
                        t.OverflowMarquee = (e) => {
                            let {
                                    children: t,
                                    className: a,
                                    contentClassName: i,
                                    scrollingClassName: d,
                                    speed: u = 50,
                                    delay: m = 0,
                                    pauseOnHover: _ = !0,
                                    pauseOnClick: p = !1,
                                    loop: v = 0,
                                    direction: y = 'left',
                                    autoFill: h = !1,
                                    gradient: g = !1,
                                    gradientColor: x,
                                    gradientWidth: b,
                                    gap: f = 12,
                                    ...C
                                } = e,
                                k = (0, s.useRef)(null),
                                j = (0, s.useRef)(null),
                                [A, P] = (0, s.useState)(!1),
                                [N, S] = (0, s.useState)(!1);
                            (0, s.useEffect)(() => {
                                let e = window.matchMedia('(prefers-reduced-motion: reduce)'),
                                    t = () => {
                                        S(e.matches);
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
                                    let e = k.current,
                                        t = j.current;
                                    if (null === e || null === t) return;
                                    let a = () => {
                                        let a = e.clientWidth,
                                            i = t.scrollWidth;
                                        if (0 === a || 0 === i) return void P(!1);
                                        P(i > a);
                                    };
                                    if ((a(), 'undefined' == typeof ResizeObserver)) return;
                                    let i = new ResizeObserver(a);
                                    return (
                                        i.observe(e),
                                        i.observe(t),
                                        () => {
                                            i.disconnect();
                                        }
                                    );
                                }, []);
                            let T = A && !N,
                                w = T && void 0 !== f ? { marginInlineEnd: ''.concat(f, 'px') } : void 0,
                                I = (0, l.useReturnValue)(() =>
                                    T
                                        ? (0, n.jsx)(o.default, {
                                              className: c.default.marquee,
                                              play: T,
                                              speed: u,
                                              delay: m / 1e3,
                                              loop: v,
                                              direction: y,
                                              autoFill: h,
                                              pauseOnHover: _,
                                              pauseOnClick: p,
                                              gradient: g,
                                              gradientColor: x,
                                              gradientWidth: b,
                                              children: (0, n.jsx)('div', { className: (0, r.clsx)(c.default.content, i), style: w, children: t }),
                                          })
                                        : (0, n.jsx)('div', { className: (0, r.clsx)(c.default.content, c.default.content_static, i), style: w, children: t }),
                                );
                            return (0, n.jsxs)('div', {
                                ref: k,
                                className: (0, r.clsx)(c.default.root, a, T && d),
                                ...C,
                                children: [
                                    (0, n.jsx)('div', { ref: j, className: (0, r.clsx)(c.default.measure, c.default.content, i), 'aria-hidden': !0, children: t }),
                                    I,
                                ],
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = m;
                    },
                },
                af = {};
            function aC(e) {
                var t = af[e];
                if (void 0 !== t) return t.exports;
                var a = (af[e] = { exports: {} });
                return ab[e].call(a.exports, a, a.exports, aC), a.exports;
            }
            (aC.d = (e, t) => {
                for (var a in t) aC.o(t, a) && !aC.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (aC.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (aC.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var ak = {};
            (() => {
                Object.defineProperty(ak, 'X', { value: !0 }), (ak.W = void 0);
                var e = aC(9598);
                Object.defineProperty(ak, 'W', {
                    enumerable: !0,
                    get: function () {
                        return e.OverflowMarquee;
                    },
                });
            })();
            var aj = ak.W;
            ak.X;
            var aA = a(81628),
                aP = a(25270),
                aN = a(89599),
                aS = a.n(aN);
            let aT = 'https://avatars.mds.yandex.net/get-music-misc/29541/img.698c9ec84f02b819695579e7/orig',
                aw = (0, d.PA)((e) => {
                    var t, a, i, r;
                    let { album: s, hoveredButtonClassName: o } = e,
                        {
                            vibe: d,
                            sonataState: m,
                            advert: _,
                            modals: { popoverOverPlayer: y },
                        } = (0, n.Pjs)(),
                        { formatMessage: g } = (0, R.A)(),
                        x = (0, n.eGp)(),
                        b = (0, n.zwV)(),
                        f = (0, n.PT7)(),
                        C = (0, n.brA)(),
                        k = (0, n.rs2)(),
                        j = (0, n.mFl)(),
                        { togglePlay: A } = (0, n.B0S)({
                            seeds: null != (i = null == (t = d.meta) ? void 0 : t.seeds) ? i : [],
                            pageIdForFrom: n._Q$.HOME,
                            blockIdForFrom: n.hf$.RUP_MAIN_RADIO,
                            onPlayInterrupted: y.open,
                        }),
                        P = (0, aP.r_)(null == s ? void 0 : s.type),
                        N = ''.concat(P, ' ').concat(null == s ? void 0 : s.title),
                        S = m.entityMeta,
                        T = (0, $.c)((e) => {
                            e.stopPropagation(), null == x || x.moveForward(), j({ actionType: tw.X2.Skip });
                        }),
                        w = (0, $.c)((e) => {
                            e.stopPropagation(), null == x || x.moveBackward(), j({ actionType: tw.X2.Backskip });
                        }),
                        I = (0, $.c)(() => {
                            if (_.isAdvertShown) {
                                var e;
                                null == k || null == (e = k.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            S ? (null == x || x.togglePause(), j({ actionType: m.isPlaying ? tw.X2.Pause : tw.X2.Play })) : (A(), C(!m.isPlaying));
                        }),
                        E = (0, $.c)(() => {
                            f() || I();
                        }),
                        L = (0, et.L)(() => (m.isGenerativeContext ? (null == S ? void 0 : S.coverUri) || aT : (null == s ? void 0 : s.coverUri) || aT));
                    return (
                        (0, u.useEffect)(
                            () => (
                                null == b || b.addShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_PLAY, I),
                                () => {
                                    null == b || b.removeShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_PLAY);
                                }
                            ),
                            [I, b],
                        ),
                        (0, l.jsxs)('div', {
                            className: aS().root,
                            'aria-label': N,
                            children: [
                                !m.isGenerativeContext &&
                                    (0, l.jsx)(p.$, {
                                        className: (0, c.$)(aS().button, aS().button_backward, o),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !m.canMoveBackward,
                                        'aria-hidden': !m.canMoveBackward,
                                        withRipple: !1,
                                        'aria-label': g({ id: 'player-actions.previous-track' }),
                                        icon: (0, l.jsx)(F.Icon, { variant: 'previous', size: 'xs' }),
                                        onClick: w,
                                        ...(0, D.Am)(D.Kq.sonata.PREVIOUS_TRACK_BUTTON),
                                    }),
                                (0, l.jsxs)('div', {
                                    className: aS().coverContainer,
                                    children: [
                                        (0, l.jsx)(
                                            v.Image,
                                            {
                                                src: L,
                                                className: (0, c.$)(aS().cover, { [aS().cover_visible]: m.isPlaying, [aS().cover_generative]: m.isGenerativeContext }),
                                                fit: 'cover',
                                                size: 400,
                                                withAvatarReplace: !0,
                                                alt: N,
                                                'aria-hidden': !0,
                                            },
                                            null != (r = null == (a = m.entityMeta) ? void 0 : a.idWithContext) ? r : 'default',
                                        ),
                                        (0, l.jsx)('div', {
                                            className: (0, c.$)(aS().playButtonContainer, m.isPlaying && o, {
                                                [aS().playButtonContainer_withoutBackground]: !m.isPlaying || m.isGenerativeContext,
                                            }),
                                            children: (0, l.jsx)(h.DM, {
                                                className: (0, c.$)(aS().playButton, { [aS().playButton_playing]: m.isPlaying }),
                                                isPlaying: m.isPlaying,
                                                iconClassName: aS().playButtonIcon,
                                                color: 'secondary',
                                                onClick: E,
                                            }),
                                        }),
                                    ],
                                }),
                                !m.isGenerativeContext &&
                                    (0, l.jsx)(p.$, {
                                        className: (0, c.$)(aS().button, aS().button_forward, o),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !m.canMoveForward,
                                        'aria-hidden': !m.canMoveForward,
                                        withRipple: !1,
                                        'aria-label': g({ id: 'player-actions.next-track' }),
                                        icon: (0, l.jsx)(F.Icon, { variant: 'next', size: 'xs' }),
                                        onClick: T,
                                        ...(0, D.Am)(D.Kq.sonata.NEXT_TRACK_BUTTON),
                                    }),
                            ],
                        })
                    );
                });
            var aI = a(92720),
                aE = a(57282),
                aL = a(53089),
                aB = a.n(aL);
            let aM = (0, d.PA)((e) => {
                var t, a;
                let { buttonClassName: i } = e,
                    { sonataState: r, advert: s, fullscreenPlayer: o, quality: d, vibe: u } = (0, n.Pjs)(),
                    { formatMessage: m } = (0, R.A)(),
                    v = (0, P.e9)(),
                    y = (0, P.AA)(),
                    g = (0, ec.A7)(u.meta),
                    { state: x, setState: b, toggleFalse: f } = (0, G.e)(!1),
                    C = (0, n.NKK)(),
                    k = (0, n.mFl)(),
                    j = r.entityMeta,
                    A = null !== j,
                    N = (0, $.c)((e) => {
                        b(e);
                    }),
                    S = (0, $.c)(() => {
                        o.showPlayQueue(), C({ to: tw.QT.PlayerScreen }), f();
                    }),
                    T = (0, $.c)(() => {
                        d.modal.open(), f();
                    }),
                    w = (0, $.c)(() => {
                        o.showSyncLyrics(), C({ to: tw.QT.PlayerScreen }), f();
                    }),
                    I = (0, $.c)(() => {
                        v(r), k({ actionType: tw.X2.ChangeShuffle });
                    }),
                    E = (0, $.c)(() => {
                        y(r), k({ actionType: tw.X2.ChangeRepeatSettings });
                    }),
                    L = (0, $.c)(() => {
                        g(), f();
                    }),
                    B = r.repeatMode === aI.pM.ONE ? 'repeat_one' : 'repeat',
                    M = r.repeatMode !== aI.pM.NONE,
                    O = r.shuffle,
                    D = o.isSyncLyricsMode,
                    K = !!(null == (t = u.meta) ? void 0 : t.isPinned),
                    V = !!(u.isMyVibe || u.isShuffleVibe),
                    z = !!u.meta && r.isVibeContext && !V,
                    W = r.canSpeed && ((null == j ? void 0 : j.isNonMusic) || (null == j || null == (a = j.mainAlbum) ? void 0 : a.isNonMusic)),
                    U = ''.concat(m({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(m({ id: 'warning-messages.can-break-accessibility' })),
                    Q = (0, et.L)(() => {
                        if (!W && !z) return;
                        let e = [];
                        return (
                            W &&
                                (e.push((0, l.jsx)(h.Kc, { className: (0, c.$)(aB().menuItem, aB().important) }, 'speed')),
                                e.push((0, l.jsx)('div', { className: aB().divider }, 'divider-after-speed'))),
                            z &&
                                (e.push(
                                    (0, l.jsx)(
                                        tN.Dr,
                                        {
                                            className: (0, c.$)(aB().menuItem, aB().important),
                                            onClick: L,
                                            icon: (0, l.jsx)(F.Icon, { variant: K ? 'pin_filled' : 'pin', size: 'xs', className: aB().menuItemIcon }),
                                            children: K
                                                ? (0, l.jsx)(_.A, { id: 'interface-actions.unpin-my-vibe' })
                                                : (0, l.jsx)(_.A, { id: 'interface-actions.pin-my-vibe' }),
                                        },
                                        'pin',
                                    ),
                                ),
                                W || e.push((0, l.jsx)('div', { className: aB().divider }, 'divider-after-pin'))),
                            e.map((e) => e)
                        );
                    });
                return (0, l.jsxs)(aE.AM, {
                    placement: 'top',
                    offsetOptions: 10,
                    open: x,
                    onOpenChange: N,
                    children: [
                        (0, l.jsx)(p.$, {
                            type: 'button',
                            className: i,
                            variant: 'text',
                            withRipple: !1,
                            icon: (0, l.jsx)(F.Icon, { variant: 'more', size: 'xs' }),
                            radius: 'xxxl',
                            'aria-label': m({ id: 'interface-actions.context-menu' }),
                        }),
                        (0, l.jsx)(aE.hl, {
                            className: aB().root,
                            children: (0, l.jsxs)('div', {
                                className: aB().menuList,
                                role: 'menu',
                                children: [
                                    Q,
                                    r.canShuffle &&
                                        (0, l.jsx)(tN.Dr, {
                                            className: (0, c.$)(aB().menuItem, aB().important, { [aB().important_active]: O }),
                                            'aria-label': m({ id: 'player-actions.shuffle' }),
                                            onClick: I,
                                            icon: (0, l.jsx)(F.Icon, { variant: 'shuffle', size: 'xs', className: aB().menuItemIcon }),
                                            isSubMenu: !0,
                                            children: (0, l.jsx)(_.A, { id: 'player-actions.mix' }),
                                        }),
                                    r.canChangeRepeatMode &&
                                        (0, l.jsx)(tN.Dr, {
                                            className: (0, c.$)(aB().menuItem, aB().important, { [aB().important_active]: M }),
                                            'aria-label': (0, P.zM)(r.repeatMode, m),
                                            onClick: E,
                                            icon: (0, l.jsx)(F.Icon, { variant: B, size: 'xs', className: aB().menuItemIcon }),
                                            isSubMenu: !0,
                                            children: (0, l.jsx)(_.A, { id: 'player-actions.repeat-action' }),
                                        }),
                                    !r.isGenerativeContext &&
                                        !s.isAdvertShown &&
                                        (null == j ? void 0 : j.isSyncLyricsAvailable) &&
                                        (0, l.jsx)(tN.Dr, {
                                            className: (0, c.$)(aB().menuItem, aB().important, { [aB().important_active]: D }),
                                            'aria-label': U,
                                            onClick: w,
                                            icon: (0, l.jsx)(F.Icon, { variant: 'syncLyrics', size: 'xs', className: aB().menuItemIcon }),
                                            children: (0, l.jsx)(_.A, { id: 'interface-actions.open-sync-lyrics' }),
                                        }),
                                    !r.isGenerativeContext &&
                                        !s.isAdvertShown &&
                                        (0, l.jsx)(tN.Dr, {
                                            className: (0, c.$)(aB().menuItem, aB().important),
                                            'aria-label': m({ id: 'interface-actions.open-play-queue' }),
                                            onClick: S,
                                            disabled: !A,
                                            icon: (0, l.jsx)(F.Icon, { variant: 'playQueue', size: 'xs', className: aB().menuItemIcon }),
                                            children: (0, l.jsx)(_.A, { id: 'interface-actions.open-play-queue' }),
                                        }),
                                    (0, l.jsx)(tN.Dr, {
                                        className: (0, c.$)(aB().menuItem, aB().important),
                                        onClick: T,
                                        icon: (0, l.jsx)(F.Icon, { variant: 'settings', size: 'xs', className: aB().menuItemIcon }),
                                        children: (0, l.jsx)(_.A, { id: 'player-actions.audio-quality' }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            });
            var aO = a(85218),
                aR = a.n(aO);
            let aD = (0, d.PA)((e) => {
                var t, a, i, r;
                let { hoveredButtonClassName: s } = e,
                    {
                        sonataState: o,
                        advert: d,
                        fullscreenPlayer: m,
                        settings: { isMobile: _ },
                    } = (0, n.Pjs)(),
                    { formatMessage: p } = (0, R.A)(),
                    v = (0, n.zwV)(),
                    y = (0, P.d0)(),
                    { isLiked: g, handleLike: x, isDisliked: b, handleDislike: f } = t0(),
                    C = (0, n.NKK)(),
                    k = o.entityMeta,
                    j = null == k ? void 0 : k.mainAlbum,
                    A = !o.isPlaying && o.isVibeContext,
                    N = null != (a = o.position) ? a : 0,
                    S = null != (i = o.duration) ? i : 0,
                    T = S > 0 ? (Math.min(N, S) / S) * 100 : 0,
                    w = !o.isPlaying && !k,
                    I = (0, $.c)(() => {
                        if (o.entityMeta) {
                            if (m.modal.isOpened) return void m.modal.close();
                            m.modal.open();
                        }
                    });
                (0, u.useEffect)(() => {
                    if (!o.isGenerativeContext)
                        return (
                            null == v || v.addShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER, I),
                            null == v || v.addShortcutsListener(n.Mo.MAIN, n.lbr.LIKE, x),
                            null == v || v.addShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE, f),
                            () => {
                                null == v || v.removeShortcutsListener(n.Mo.MAIN, n.lbr.TOGGLE_FULLSCREEN_PLAYER),
                                    null == v || v.removeShortcutsListener(n.Mo.MAIN, n.lbr.LIKE),
                                    null == v || v.removeShortcutsListener(n.Mo.MAIN, n.lbr.DISLIKE);
                            }
                        );
                }, [f, x, v, o.isGenerativeContext, o.entityMeta, I]);
                let E = (0, et.L)(() => {
                        if (o.isGenerativeContext) return (0, l.jsx)(F.Icon, { size: 'xs', variant: 'infinity' });
                        let e = [];
                        return (
                            A && k && (e.push((0, aA.XV)(k.artists)), e.push(' — ')),
                            (null == k ? void 0 : k.title) && e.push(k.title),
                            !(null == k ? void 0 : k.isRemoved) && (null == k ? void 0 : k.version) && e.push('('.concat(k.version, ')')),
                            e.join(' ')
                        );
                    }),
                    L = (0, $.c)(() => {
                        !k || o.isGenerativeContext || d.isAdvertShown || (m.showFullscreenPlayerModal(), C({ to: tw.QT.PlayerScreen }));
                    }),
                    B = (0, $.c)((e) => {
                        (e.code === n.vLr.SPACE || e.code === n.vLr.ENTER) && (e.preventDefault(), L());
                    }),
                    M = (0, $.c)(async (e) => {
                        await y(o, e);
                    }),
                    O = { '--track-progress': ''.concat(T, '%') };
                return (0, l.jsxs)('section', {
                    role: 'region',
                    'aria-label': p({ id: 'a11y-regions.player' }),
                    className: aR().root,
                    style: O,
                    children: [
                        (0, l.jsx)(aw, { album: j, hoveredButtonClassName: s }),
                        (0, l.jsxs)('div', {
                            className: (0, c.$)(aR().progress, { [aR().progress_visible]: !w }),
                            style: O,
                            children: [
                                !_ &&
                                    (0, l.jsx)(at.r, {
                                        className: aR().changeVolume,
                                        buttonClassName: aR().button,
                                        verticalSliderClassName: aR().verticalSlider,
                                        variant: at.q.VERTICAL,
                                        sonataVolume: o.volume,
                                        onVolumeSet: o.setVolume,
                                        onVolumeClick: M,
                                    }),
                                (0, l.jsx)(h._I, { className: aR().button, disabled: !k || d.isAdvertShown, isDisliked: b, onClick: f, iconSize: 'xs' }),
                                (0, l.jsxs)('div', {
                                    className: (0, c.$)(aR().center, { [aR().center_withExplicitMark]: null == k ? void 0 : k.explicitDisclaimer }),
                                    onClick: L,
                                    onKeyDown: B,
                                    role: 'button',
                                    tabIndex: 0,
                                    'aria-label': p({ id: 'player-actions.fullscreen-button' }),
                                    children: [
                                        (0, l.jsx)(
                                            aj,
                                            {
                                                className: aR().trackName,
                                                scrollingClassName: aR().scrollingTrackName,
                                                contentClassName: aR().trackNameText,
                                                pauseOnHover: !1,
                                                speed: 35,
                                                gap: 32,
                                                children: E,
                                            },
                                            ''.concat(null != (r = null == (t = o.entityMeta) ? void 0 : t.idWithContext) ? r : 'default', '-').concat(A),
                                        ),
                                        (null == k ? void 0 : k.explicitDisclaimer) &&
                                            (0, l.jsx)(h.Nq, {
                                                containerClassName: aR().explicitMarkContainer,
                                                getDescriptionTexts: k.getDescriptionTexts,
                                                size: 'xxxs',
                                                variant: k.explicitDisclaimer,
                                                className: aR().explicitMark,
                                                trackId: k.id,
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(h.cy, { className: aR().button, disabled: !k || d.isAdvertShown, isLiked: g, onClick: x, iconSize: 'xs' }),
                                !_ && (0, l.jsx)(aM, { buttonClassName: (0, c.$)(aR().button, aR().important) }),
                                (0, l.jsx)(t3, {}),
                            ],
                        }),
                    ],
                });
            });
            var aF = a(27270),
                aK = a.n(aF);
            let aV = (0, d.PA)((e) => {
                let { className: t } = e,
                    {
                        advert: a,
                        user: r,
                        paywall: { modal: s },
                    } = (0, n.Pjs)(),
                    { notify: o, dismiss: d } = (0, n.lkh)(),
                    { formatMessage: m } = (0, R.A)(),
                    v = (0, n.zwV)(),
                    g = (0, n.rs2)(),
                    [x, f] = (0, u.useState)(!1),
                    C = (0, u.useRef)(null),
                    k = (0, u.useCallback)(
                        (e) => {
                            e.stopPropagation(), e.preventDefault(), s.open(), f(!0), null == g || g.pauseVideoAdvert(), d();
                        },
                        [g, d, s],
                    );
                (0, u.useEffect)(() => {
                    x && !s.isOpened && (f(!1), null == g || g.resumeVideoAdvert());
                }, [g, x, s.isOpened]);
                let j = (0, u.useCallback)(() => {
                    o(
                        (0, l.jsx)(h.$W, {
                            className: aK().notify,
                            message: (0, l.jsx)(y.Caption, {
                                className: aK().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                children: (0, l.jsx)(_.A, { id: 'ads.notification' }),
                            }),
                            cover: (0, l.jsx)(F.Icon, { className: aK().icon, variant: 'plusColor' }),
                            coverRadius: 'round',
                            withDefaultCloseButton: !1,
                            coverClassName: (0, c.$)(aK().cover, aK().important),
                            closeButton: (0, l.jsx)(p.$, {
                                className: aK().notifyClose,
                                variant: 'text',
                                color: 'primary',
                                size: 'xxs',
                                onClick: k,
                                withRipple: !1,
                                ref: C,
                                'data-intersection-property-id': 'video-ad-button',
                                children: (0, l.jsx)(_.A, { id: 'ads.disable-ads' }),
                            }),
                        }),
                        { containerId: n.uQT.AD_INFO },
                    );
                }, [k, o]);
                if (
                    ((0, u.useEffect)(() => {
                        if (!r.hasPlus)
                            return (
                                null == v ||
                                    v.addShortcutsListener(n.Mo.MAIN, n.lbr.CLOSE, () => {
                                        a.isAdvertShown && a.isVideoAdvert && j();
                                    }),
                                () => {
                                    null == v || v.removeShortcutsListener(n.Mo.MAIN, n.lbr.CLOSE);
                                }
                            );
                    }, [j, v, a.isAdvertShown, a.isVideoAdvert, r.hasPlus]),
                    r.hasPlus)
                )
                    return;
                let A = a.isAdvertShown && a.isVideoAdvert;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(K.a, {
                            className: (0, c.$)(aK().root, { [aK().root_hidden]: !A }, t),
                            contentClassName: aK().content,
                            placement: 'center',
                            showHeader: !1,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            withOverlay: A,
                            open: !0,
                            lockScroll: A,
                            overlayColor: 'full',
                            disableGuards: !A,
                            disableFocusTrap: !A,
                            ...(0, D.Am)(D.e8.ad.VIDEO_AD),
                            children: (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(p.$, {
                                        className: aK().close,
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, l.jsx)(F.Icon, { variant: 'close', size: 'xxs' }),
                                        onClick: j,
                                        'aria-label': m({ id: 'interface-actions.close-ad' }),
                                        withRipple: !1,
                                    }),
                                    (0, l.jsx)(b, {
                                        data: a.data,
                                        mediaContent: (0, l.jsx)('div', {
                                            className: aK().videoBlock,
                                            id: i.SLOT,
                                            children: (0, l.jsx)('video', { id: i.VIDEO, className: aK().video }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(V.Notification, { enableMultiContainer: !0, containerId: n.uQT.AD_INFO, position: 'bottom-center' }),
                    ],
                });
            });
            aV.displayName = 'VideoAd';
        },
        97693: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => h, v: () => l });
            var i = a(51606),
                n = a(92022),
                r = a(78936),
                s = a(42561),
                o = a(54690);
            let l = i.gK
                .compose(i.gK.model('BrandedPlayerBanner', { payload: i.gK.maybeNull(i.gK.model({ thumb: n.KB, modal: i.gK.maybeNull(r.i_) })), modal: o.qt }), o.JE)
                .views((e) => ({
                    get isVisible() {
                        let { experiments: t, settings: a, user: n } = (0, i.Zn)(e);
                        if (e.noAds || e.hasError || t.checkExperiment(s.zal.WebNextDisableAds, 'on') || !t.checkExperiment(s.zal.WebNextPlayerBranding, 'on')) return !1;
                        return !n.hasPlus && !a.isMobile;
                    },
                }))
                .actions((e) => ({
                    setPayload: (t) => {
                        let { settings: a } = (0, i.Zn)(e);
                        a.setCustomPlayerThumb(s.TZj.BRANDED), (e.payload = (0, i.wg)(t));
                    },
                }));
            var c = a(62936),
                d = a(19718),
                u = a(44020),
                m = a(59935),
                _ = a(85906);
            let p = { pp: 'g', ps: 'clni', p2: 'joqc', puid1: '', puid2: '', puid3: '' };
            var v = a(84326),
                y = (function (e) {
                    return (e.PLAYER = 'branded_player'), e;
                })({});
            let h = (0, d.PA)(() => {
                let {
                        advertBanners: {
                            banners: { brandedPlayerBanner: e },
                        },
                    } = (0, s.Pjs)(),
                    t = (0, m.c)(() => {
                        e.setType(s.h8o.BRANDING);
                    }),
                    a = (0, m.c)((t) => {
                        ((e) =>
                            (0, v.m)(e) &&
                            e.type === y.PLAYER &&
                            'object' == typeof e.payload &&
                            null !== e.payload &&
                            !Array.isArray(e.payload) &&
                            'thumb' in e.payload &&
                            (0, n.ls)(e.payload.thumb) &&
                            'modal' in e.payload &&
                            (0, r.h9)(e.payload.modal))(t.data) && e.setPayload(t.data.payload);
                    });
                return ((0, u.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, u.useEffect)(
                    () => (
                        window.addEventListener('message', a),
                        () => {
                            window.removeEventListener('message', a);
                        }
                    ),
                    [a],
                ),
                e.isVisible)
                    ? (0, c.jsx)(_.NX, {
                          ownerId: s.PVv,
                          containerId: 'adfox_175861261312993498',
                          params: p,
                          onLoad: t,
                          onError: e.toggleHasErrorTrue,
                          onNoAds: e.toggleNoAdsTrue,
                      })
                    : null;
            });
        },
        98483: (e) => {
            e.exports = { root: 'VibeArtistCover_root__LSPPQ', cover: 'VibeArtistCover_cover__AEtTV' };
        },
        99072: (e, t, a) => {
            'use strict';
            a.d(t, { UG: () => eh, LO: () => h });
            var i,
                n,
                r,
                s,
                o,
                l,
                c,
                d,
                u = a(51606),
                m = a(42561);
            !(function (e) {
                (e.DONATION = 'DONATION'), (e.CONCERT = 'CONCERT'), (e.FACT = 'FACT');
            })(i || (i = {}));
            let _ = (e) => {
                var t;
                return { title: e.title, url: e.url, faviconUrl: null != (t = e.faviconUrl) ? t : null };
            };
            !(function (e) {
                (e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral');
            })(n || (n = {}));
            let p = u.gK.model('WordsCardAction', { title: u.gK.string, url: u.gK.string }),
                v = u.gK.model('WordsCardSource', { title: u.gK.string, url: u.gK.string, faviconUrl: u.gK.maybeNull(u.gK.string) }),
                y = u.gK
                    .model('WordsCard', {
                        id: u.gK.string,
                        text: u.gK.string,
                        tags: u.gK.maybe(u.gK.array(u.gK.string)),
                        action: u.gK.maybe(p),
                        sources: u.gK.maybe(u.gK.array(v)),
                        feedbackState: u.gK.maybe(u.gK.string),
                    })
                    .views((e) => ({
                        get isFact() {
                            var t;
                            if (!(0, u._n)(e)) return !1;
                            return null == (t = e.tags) ? void 0 : t.includes(i.FACT);
                        },
                        get isLiked() {
                            return e.feedbackState === n.LIKE;
                        },
                        get isDisliked() {
                            return e.feedbackState === n.DISLIKE;
                        },
                    }))
                    .actions((e) => ({
                        sendFeedback: (0, u.L3)(function* (t) {
                            if (!(0, u._n)(e)) return;
                            let { wordsResource: a } = (0, u._$)(e);
                            yield a.cardsFeedback({ feedback: [{ id: e.id, feedbackState: t }] }), (0, u._n)(e) && (e.feedbackState = t);
                        }),
                    })),
                h = u.gK
                    .model('Words', { cards: u.gK.map(y), loadingState: u.gK.enumeration(Object.values(m.GuX)), loadingTrackIds: u.gK.map(u.gK.boolean) })
                    .volatile(() => ({ requestedTrackIds: new Set(), viewedCardIds: new Set(), viewedStore: void 0 }))
                    .views((e) => ({
                        getCardForTrack(t) {
                            if (t) return e.cards.get(String(t));
                        },
                        isTrackRequested: (t) => e.requestedTrackIds.has(t),
                        isLoading: (t) => e.loadingTrackIds.has(t),
                    }))
                    .actions((e) => ({
                        setWordsViewedStore(t) {
                            e.viewedStore = t;
                        },
                        markCardViewed(t) {
                            var a;
                            e.viewedCardIds.add(t), null == (a = e.viewedStore) || a.addViewedIds([t]);
                        },
                        evict(t) {
                            Array.from(e.cards.keys()).forEach((a) => {
                                t.has(a) || (e.cards.delete(a), e.requestedTrackIds.delete(a), e.loadingTrackIds.delete(a));
                            });
                        },
                        loadCards: (0, u.L3)(function* (t) {
                            let { wordsResource: a, modelActionsLogger: n } = (0, u._$)(e),
                                r = t.filter((t) => !e.requestedTrackIds.has(t));
                            if (0 !== r.length) {
                                r.forEach((t) => {
                                    e.requestedTrackIds.add(t), e.loadingTrackIds.set(t, !0);
                                });
                                try {
                                    var s, o, l;
                                    e.loadingState = m.GuX.PENDING;
                                    let t = yield null != (o = null == (s = e.viewedStore) ? void 0 : s.getViewedIds()) ? o : Promise.resolve([]),
                                        n = Array.from(new Set([...e.viewedCardIds, ...t])),
                                        c = yield a.cards({ trackIds: r, viewedCards: n });
                                    e.viewedCardIds.clear(),
                                        n.length > 0 && (null == (l = e.viewedStore) || l.clearSentIds(n)),
                                        c.forEach((t) => {
                                            let a = t.cards[0];
                                            a &&
                                                e.cards.set(
                                                    t.id,
                                                    ((e) => {
                                                        var t, a, n, r;
                                                        let { card: s, feedbackState: o } = e,
                                                            l = s.action
                                                                ? ((a = s.action),
                                                                  (null == (t = s.tags) ? void 0 : t.includes(i.DONATION))
                                                                      ? (0, m.Kgy)(a.link)
                                                                          ? { title: a.title, url: a.link }
                                                                          : void 0
                                                                      : { title: a.title, url: null != (r = null != (n = a.weblink) ? n : a.link) ? r : '' })
                                                                : void 0,
                                                            c = Array.isArray(s.tags) ? s.tags.filter((e) => 'string' == typeof e) : void 0,
                                                            d = Array.isArray(s.sources) ? s.sources.map(_) : void 0;
                                                        return (0, u.wg)({ id: s.id, text: s.text, tags: c, action: l, sources: d, feedbackState: o });
                                                    })(a),
                                                );
                                        }),
                                        r.forEach((t) => e.loadingTrackIds.delete(t)),
                                        (e.loadingState = m.GuX.RESOLVE);
                                } catch (t) {
                                    (e.loadingState = m.GuX.REJECT),
                                        r.forEach((t) => {
                                            e.requestedTrackIds.delete(t), e.loadingTrackIds.delete(t);
                                        }),
                                        n.error(t);
                                }
                            }
                        }),
                    }));
            var g = a(62936),
                x = a(79950),
                b = a(19718),
                f = a(60188),
                C = a(13030),
                k = a(45588),
                j = a.n(k),
                A = a(44020);
            function P() {
                return (P = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let N = function (e) {
                return A.createElement(
                    'svg',
                    P({ viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    r ||
                        (r = A.createElement('path', {
                            d: 'M10.0002 0.3125C7.25741 0.3125 4.69896 2.90254 2.43499 6.67723C0.171015 10.4519 -0.760012 14.016 0.707594 16.2922C2.17517 18.5683 5.69374 19.6874 9.99984 19.6875L10.0002 19.6875C14.3063 19.6874 17.8248 18.5683 19.2924 16.2922C20.76 14.016 19.829 10.4519 17.565 6.67723C15.3011 2.90269 12.7429 0.3125 10.0002 0.3125Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function S() {
                return (S = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let T = function (e) {
                return A.createElement(
                    'svg',
                    S({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    s ||
                        (s = A.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M9.42032 25.4019C9.14037 21.0934 5.66809 17.6882 1.42578 17.6882V16.5741C5.8511 16.5741 9.43853 12.8687 9.43853 8.29785H10.5171C10.5171 12.8687 14.1045 16.5741 18.5299 16.5741V17.6882C14.2876 17.6882 10.8153 21.0934 10.5353 25.4019H9.42032Z',
                            fill: 'currentColor',
                        })),
                    o ||
                        (o = A.createElement('path', {
                            d: 'M19.8267 3.83H21.4167L23.9567 11H22.7067L22.0467 9.12H19.0267L18.3667 11H17.2967L19.8267 3.83ZM21.6767 8.08L20.5367 4.85L19.3967 8.08H21.6767ZM27.0991 3.83V11H25.8891V3.83H27.0991Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function w() {
                return (w = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let I = function (e) {
                return A.createElement(
                    'svg',
                    w({ viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    l || (l = A.createElement('path', { d: 'M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z', fill: 'currentColor' })),
                );
            };
            function E() {
                return (E = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let L = function (e) {
                    return A.createElement(
                        'svg',
                        E({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                        c ||
                            (c = A.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M9.42032 25.4029C9.14037 21.0944 5.66809 17.6891 1.42578 17.6891V16.5751C5.8511 16.5751 9.43853 12.8697 9.43853 8.29883H10.5171C10.5171 12.8697 14.1045 16.5751 18.5299 16.5751V17.6891C14.2876 17.6891 10.8153 21.0944 10.5353 25.4029H9.42032Z',
                                fill: 'currentColor',
                            })),
                        d ||
                            (d = A.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M22.4961 12.0999C22.3406 9.70631 20.4115 7.81449 18.0547 7.81449V7.19557C20.5132 7.19557 22.5062 5.13701 22.5062 2.59766H23.1054C23.1054 5.13701 25.0984 7.19557 27.5569 7.19557V7.81449C25.2001 7.81449 23.2711 9.70631 23.1155 12.0999H22.4961Z',
                                fill: 'currentColor',
                            })),
                    );
                },
                B = (0, b.PA)((e) => {
                    let { className: t, dimmed: a, isFact: i } = e,
                        { experiments: n } = (0, m.Pjs)(),
                        r = n.checkExperiment(m.zal.WebNextWaveScreenWordsInWave, 'on_with_onyx'),
                        s = n.checkExperiment(m.zal.WebNextWaveScreenWordsInWave, 'on'),
                        o = r && a,
                        l = (0, f.L)(() =>
                            r
                                ? (0, g.jsx)(N, { className: (0, x.$)(j().icon, j().icon_okniks) })
                                : s
                                  ? i && !a
                                      ? (0, g.jsx)(T, { className: (0, x.$)(j().icon, j().icon_sparkles) })
                                      : (0, g.jsx)(L, { className: (0, x.$)(j().icon, j().icon_sparkles) })
                                  : void 0,
                        );
                    return (0, g.jsxs)('div', {
                        className: (0, x.$)(j().root, { [j().root_dimmed]: a }, t),
                        'aria-hidden': !0,
                        children: [
                            (0, g.jsx)(C.Image, {
                                src: 'avatars.mds.yandex.net/get-music-misc/2413828/img.69c13075ab25d7410604f669/%%',
                                size: 200,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                className: j().glow,
                            }),
                            l,
                            o &&
                                (0, g.jsxs)('div', {
                                    className: j().sparkles,
                                    children: [
                                        (0, g.jsx)(I, { className: j().sparkle }),
                                        (0, g.jsx)(I, { className: j().sparkle }),
                                        (0, g.jsx)(I, { className: j().sparkle }),
                                        (0, g.jsx)(I, { className: j().sparkle }),
                                    ],
                                }),
                        ],
                    });
                });
            var M = a(23480),
                O = a(46663);
            let R = (e) => {
                    let { queueState: t, direction: a, batchSize: i } = e,
                        { trackIds: n, currentIndex: r } = t,
                        s = [],
                        o = 0,
                        l = 0;
                    'forward' === a ? ((o = r + 1), (l = Math.min(n.length - 1, o + i - 1))) : (o = Math.max(0, (l = r - 1) - i + 1));
                    for (let e = o; e <= l; e++) {
                        let t = n[e];
                        t && s.push(t);
                    }
                    return s;
                },
                D = (e) => {
                    let { queueState: t, backwardSize: a, forwardSize: i } = e,
                        n = Math.max(0, t.currentIndex - a),
                        r = Math.min(t.trackIds.length - 1, t.currentIndex + i),
                        s = [];
                    for (let e = n; e <= r; e++) {
                        let a = t.trackIds[e];
                        a && s.push(a);
                    }
                    return s;
                },
                F = (e) => {
                    let { queueState: t, direction: a, isRequested: i } = e,
                        n = 'forward' === a ? 1 : -1,
                        r = 0;
                    for (let e = t.currentIndex + n; e >= 0 && e < t.trackIds.length; e += n) {
                        let a = t.trackIds[e];
                        if (a && i(a)) r++;
                        else break;
                    }
                    return r <= 3;
                };
            var K = a(30141),
                V = a(54123);
            let z = 'viewedCards';
            class W extends m.Fjw {
                async addViewedIds(e) {
                    return this.executeTransaction((t) => {
                        let a = t.transaction([z], 'readwrite').objectStore(z);
                        return Promise.all(e.map((e) => a.put({ uid: this.uid, cardId: e }))).then(() => a.index('uid').count(this.uid));
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictOverLimit() : Promise.resolve()))
                        .catch(V.A);
                }
                async getViewedIds() {
                    return this.executeTransaction((e) => e.getAllFromIndex(z, 'uid', this.uid).then((e) => e.map((e) => e.cardId)), { defaultValue: [] }).catch(
                        () => [],
                    );
                }
                async clearSentIds(e) {
                    return this.executeTransaction((t) => {
                        let a = t.transaction([z], 'readwrite').objectStore(z);
                        return Promise.all(e.map((e) => a.delete([this.uid, e]))).then(V.A);
                    }).catch(V.A);
                }
                async evictOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([z], 'readwrite').objectStore(z).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let a = e - 30,
                                i = 0,
                                n = (e) =>
                                    !e || i >= a
                                        ? Promise.resolve()
                                        : (i++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(n));
                            return t.openCursor(this.uid).then(n);
                        });
                    }).catch(V.A);
                }
                constructor(e) {
                    super({
                        dbName: 'music_words',
                        dbVersion: 1,
                        onUpgrade: (e) => {
                            e.createObjectStore(z, { keyPath: ['uid', 'cardId'] }).createIndex('uid', 'uid', { unique: !1 });
                        },
                    }),
                        (0, K._)(this, 'uid', void 0),
                        (this.uid = e);
                }
            }
            var U = a(59935),
                Q = a(57282),
                G = a(20418),
                q = a(47480),
                $ = a(85906),
                Y = a(38320),
                H = a.n(Y);
            let X = (e) => {
                let { children: t } = e;
                return (0, g.jsx)('div', {
                    className: H().root,
                    children: (0, g.jsx)(G.Caption, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: H().text, children: t }),
                });
            };
            var Z = a(26731),
                J = a(85742),
                ee = a(5099);
            let et = (e) => {
                    let { actionType: t, onClick: a, children: i, ...n } = e,
                        r = (0, m.mFl)(),
                        s = (0, U.c)((e) => {
                            r({ actionType: t }), null == a || a(e);
                        });
                    return (0, g.jsx)(ee.$, { onClick: s, ...n, children: i });
                },
                ea = (e) => {
                    let { url: t, className: a, children: i } = e,
                        n = (0, m.NKK)(),
                        r = (0, U.c)(() => {
                            n({ to: M.QT.Link, deepLink: t });
                        });
                    return (0, g.jsx)($.N_, { href: t, className: a, onClick: r, children: i });
                };
            var ei = a(19521),
                en = a.n(ei);
            let er = (0, b.PA)(() => {
                let {
                        settings: { isMobile: e },
                    } = (0, m.Pjs)(),
                    t = e ? 's' : 'l';
                return (0, g.jsxs)('div', {
                    className: en().root,
                    children: [
                        (0, g.jsxs)('div', {
                            className: en().container,
                            children: [
                                (0, g.jsx)(G.Caption, {
                                    variant: 'span',
                                    type: 'text',
                                    size: t,
                                    weight: 'medium',
                                    className: en().text,
                                    children: (0, g.jsx)(Z.A, { id: 'words.option' }),
                                }),
                                (0, g.jsx)(G.Caption, {
                                    variant: 'span',
                                    type: 'text',
                                    size: t,
                                    weight: 'medium',
                                    className: en().gradient,
                                    children: (0, g.jsx)(Z.A, { id: 'words.alice-plus' }),
                                }),
                            ],
                        }),
                        (0, g.jsx)(G.Caption, {
                            variant: 'div',
                            type: 'text',
                            size: 's',
                            weight: 'medium',
                            className: en().description,
                            children: (0, g.jsx)(Z.A, { id: 'words.ai-description' }),
                        }),
                    ],
                });
            });
            var es = a(29553),
                eo = a.n(es);
            let el = (0, b.PA)((e) => {
                let { card: t, onLike: a, onDislike: i } = e,
                    n = (0, m.l$t)({ mainObjectType: M.ky.Fact });
                return (
                    (0, A.useEffect)(
                        () => (
                            n(!0),
                            () => {
                                n(!1);
                            }
                        ),
                        [n],
                    ),
                    (0, g.jsxs)('div', {
                        className: eo().root,
                        children: [
                            t.sources &&
                                t.sources.length > 0 &&
                                (0, g.jsxs)(g.Fragment, {
                                    children: [
                                        t.sources.map((e, a) => {
                                            var i, n;
                                            return (0, g.jsx)(
                                                m.FoH,
                                                {
                                                    blockId: M.LA.WordsInWave,
                                                    blockType: M.LA.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    mainObjectType: M.ky.Fact,
                                                    mainObjectId: t.id,
                                                    children: (0, g.jsx)(m.Bki, {
                                                        objectType: M.ky.Link,
                                                        objectId: e.url,
                                                        objectPosX: a + 1,
                                                        objectPosY: 1,
                                                        objectsCount: null != (n = null == (i = t.sources) ? void 0 : i.length) ? n : 0,
                                                        children: (0, g.jsxs)(ea, {
                                                            url: e.url,
                                                            className: (0, x.$)(eo().item, eo().actionItem, eo().sourceItem),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, g.jsx)(C.Image, {
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: eo().sourceIcon,
                                                                    }),
                                                                (0, g.jsx)(G.Caption, {
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'l',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            );
                                        }),
                                        (0, g.jsx)('div', { className: eo().divider }),
                                    ],
                                }),
                            (0, g.jsxs)(m.FoH, {
                                blockId: M.LA.WordsInWave,
                                blockType: M.LA.WordsInWave,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectType: M.ky.Fact,
                                mainObjectId: t.id,
                                children: [
                                    (0, g.jsx)(m.Bki, {
                                        objectType: M.ky.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, g.jsxs)(et, {
                                            actionType: t.isLiked ? M.X2.Unlike : M.X2.Like,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, x.$)(eo().item, eo().actionItem, { [eo().actionItem_active]: t.isLiked }),
                                            onClick: a,
                                            children: [
                                                (0, g.jsx)(J.Icon, { variant: 'thumbUp', size: 'xs' }),
                                                (0, g.jsx)(G.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    children: (0, g.jsx)(Z.A, { id: 'words.like' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, g.jsx)(m.Bki, {
                                        objectType: M.ky.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 2,
                                        children: (0, g.jsxs)(et, {
                                            actionType: M.X2.Dislike,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, x.$)(eo().item, eo().actionItem, { [eo().actionItem_active]: t.isDisliked }),
                                            onClick: i,
                                            children: [
                                                (0, g.jsx)(J.Icon, { variant: 'thumbDown', size: 'xs' }),
                                                (0, g.jsx)(G.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    children: (0, g.jsx)(Z.A, { id: 'words.dislike' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            t.isFact && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)('div', { className: eo().divider }), (0, g.jsx)(er, {})] }),
                        ],
                    })
                );
            });
            var ec = a(54231),
                ed = a.n(ec);
            let eu = (0, b.PA)((e) => {
                let { card: t, onLike: a, onDislike: i } = e,
                    { formatMessage: n } = (0, q.A)(),
                    r = (0, m.l$t)({ mainObjectType: M.ky.Fact }),
                    s = n({ id: 'words.like' }),
                    o = n({ id: 'words.dislike' });
                return (
                    (0, A.useEffect)(
                        () => (
                            r(!0),
                            () => {
                                r(!1);
                            }
                        ),
                        [r],
                    ),
                    (0, g.jsxs)('div', {
                        className: ed().root,
                        children: [
                            (0, g.jsxs)('div', {
                                className: ed().container,
                                children: [
                                    (0, g.jsx)(G.Heading, { variant: 'div', size: 'xs', weight: 'bold', lineClamp: 5, className: ed().text, children: t.text }),
                                    t.action &&
                                        t.action.url &&
                                        (0, g.jsx)(m.FoH, {
                                            blockId: M.LA.WordsInWave,
                                            blockType: M.LA.WordsInWave,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            mainObjectType: M.ky.Fact,
                                            mainObjectId: t.id,
                                            children: (0, g.jsx)(m.Bki, {
                                                objectType: M.ky.Link,
                                                objectId: t.action.url,
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                children: (0, g.jsx)(ea, {
                                                    url: t.action.url,
                                                    className: ed().action,
                                                    children: (0, g.jsx)(G.Caption, {
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
                                    t.sources &&
                                        t.sources.length > 0 &&
                                        (0, g.jsx)('div', {
                                            className: ed().sources,
                                            children: t.sources.map((e, a) => {
                                                var i, n;
                                                return (0, g.jsx)(
                                                    m.FoH,
                                                    {
                                                        blockId: M.LA.WordsInWave,
                                                        blockType: M.LA.WordsInWave,
                                                        blockPosX: 1,
                                                        blockPosY: 2,
                                                        mainObjectType: M.ky.Fact,
                                                        mainObjectId: t.id,
                                                        children: (0, g.jsx)(m.Bki, {
                                                            objectType: M.ky.Link,
                                                            objectId: e.url,
                                                            objectPosX: a + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null != (n = null == (i = t.sources) ? void 0 : i.length) ? n : 0,
                                                            children: (0, g.jsxs)(ea, {
                                                                url: e.url,
                                                                className: ed().sourceItem,
                                                                children: [
                                                                    e.faviconUrl &&
                                                                        (0, g.jsx)(C.Image, {
                                                                            src: e.faviconUrl,
                                                                            fit: 'cover',
                                                                            'aria-hidden': !0,
                                                                            className: ed().sourceIcon,
                                                                        }),
                                                                    (0, g.jsx)(G.Caption, {
                                                                        variant: 'span',
                                                                        type: 'text',
                                                                        size: 'm',
                                                                        weight: 'medium',
                                                                        lineClamp: 1,
                                                                        children: e.title,
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    },
                                                    e.url,
                                                );
                                            }),
                                        }),
                                ],
                            }),
                            (0, g.jsxs)('div', {
                                children: [
                                    (0, g.jsxs)('div', {
                                        className: ed().feedbackSection,
                                        children: [
                                            (0, g.jsx)(G.Caption, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                className: ed().feedbackQuestion,
                                                children: (0, g.jsx)(Z.A, { id: 'words.show-more' }),
                                            }),
                                            (0, g.jsx)('div', {
                                                className: ed().feedbackButtons,
                                                children: (0, g.jsxs)(m.FoH, {
                                                    blockId: M.LA.WordsInWave,
                                                    blockType: M.LA.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 3,
                                                    mainObjectType: M.ky.Fact,
                                                    mainObjectId: t.id,
                                                    children: [
                                                        (0, g.jsx)(m.Bki, {
                                                            objectType: M.ky.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            children: (0, g.jsx)(et, {
                                                                actionType: t.isLiked ? M.X2.Unlike : M.X2.Like,
                                                                variant: 'text',
                                                                color: 'secondary',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, x.$)(ed().feedbackButton, { [ed().feedbackButton_active]: t.isLiked }),
                                                                'aria-label': s,
                                                                onClick: a,
                                                                children: (0, g.jsx)(J.Icon, { variant: 'thumbUp', size: 'xs' }),
                                                            }),
                                                        }),
                                                        (0, g.jsx)(m.Bki, {
                                                            objectType: M.ky.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 2,
                                                            children: (0, g.jsx)(et, {
                                                                actionType: M.X2.Dislike,
                                                                variant: 'text',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, x.$)(ed().feedbackButton, { [ed().feedbackButton_active]: t.isDisliked }),
                                                                'aria-label': o,
                                                                onClick: i,
                                                                children: (0, g.jsx)(J.Icon, { variant: 'thumbDown', size: 'xs' }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    t.isFact && (0, g.jsx)(er, {}),
                                ],
                            }),
                        ],
                    })
                );
            });
            var em = a(59244),
                e_ = a.n(em);
            let ep = (e) => {
                    let { url: t, title: a, prevTitle: i, className: n } = e,
                        r = (0, m.D5X)(),
                        s = (0, m.NKK)();
                    (0, A.useEffect)(() => {
                        i.current !== a && ((i.current = a), r(!0, ''));
                    }, [i, r, a]);
                    let o = (0, U.c)((e) => {
                        e.stopPropagation(), s({ to: M.QT.Link, deepLink: t });
                    });
                    return (0, g.jsx)($.N_, {
                        href: t,
                        className: n,
                        onClick: o,
                        onKeyDown: o,
                        children: (0, g.jsx)(G.Caption, { variant: 'span', type: 'text', size: 'l', weight: 'medium', children: a }),
                    });
                },
                ev = (e) => {
                    let { text: t, prevText: a, className: i } = e,
                        n = (0, m.D5X)();
                    return (
                        (0, A.useEffect)(() => {
                            a.current !== t && ((a.current = t), n(!0, ''));
                        }, [a, n, t]),
                        (0, g.jsx)(G.Caption, { variant: 'span', type: 'text', size: 'l', weight: 'medium', lineClamp: 3, className: i, children: t })
                    );
                },
                ey = (0, b.PA)((e) => {
                    let { card: t, isLoading: a, className: i } = e,
                        {
                            settings: { isMobile: r },
                            experiments: s,
                        } = (0, m.Pjs)(),
                        o = (0, m.NKK)(),
                        l = (0, A.useRef)(null),
                        c = (0, A.useRef)(null),
                        [d, u] = (0, A.useState)(!1),
                        [_, p] = (0, A.useState)(void 0),
                        v = (0, A.useRef)(null),
                        y = ((e) => {
                            let { formatMessage: t } = (0, q.A)(),
                                a = (0, A.useMemo)(
                                    () => [
                                        t({ id: 'words.loading-phrase-collecting-interesting' }),
                                        t({ id: 'words.loading-phrase-alice-plus' }),
                                        t({ id: 'words.loading-phrase-tuning' }),
                                        t({ id: 'words.loading-phrase-catching' }),
                                        t({ id: 'words.loading-phrase-reading' }),
                                        t({ id: 'words.loading-phrase-studying' }),
                                    ],
                                    [t],
                                ),
                                i = (0, A.useRef)(0),
                                [n, r] = (0, A.useState)(() => {
                                    var t;
                                    if (!e) return null;
                                    let n = Math.floor(Math.random() * a.length);
                                    return (i.current = n), null != (t = a[n]) ? t : null;
                                }),
                                s = (0, A.useRef)(e),
                                o = (0, A.useRef)(null),
                                l = (0, A.useRef)(e);
                            if (((s.current = e), e && !l.current)) {
                                var c;
                                let e = Math.floor(Math.random() * a.length);
                                (i.current = e), r(null != (c = a[e]) ? c : null);
                            }
                            return (
                                (l.current = e),
                                (0, A.useEffect)(() => {
                                    if (null !== n && !o.current)
                                        return (
                                            (o.current = setTimeout(() => {
                                                if (((o.current = null), s.current)) {
                                                    var e;
                                                    (i.current = (i.current + 1) % a.length), r(null != (e = a[i.current]) ? e : a[0]);
                                                    return;
                                                }
                                                r(null);
                                            }, 2500)),
                                            () => {
                                                o.current && (clearTimeout(o.current), (o.current = null));
                                            }
                                        );
                                }, [a, n]),
                                n
                            );
                        })(!!a),
                        h = null !== y,
                        {
                            handleLike: b,
                            handleDislike: C,
                            feedbackMessage: k,
                        } = ((e) => {
                            let { card: t, onClose: a } = e,
                                { notify: i } = (0, m.lkh)(),
                                [r, s] = (0, A.useState)(!1),
                                [o, l] = (0, A.useState)(null),
                                { formatMessage: c } = (0, q.A)(),
                                d = (0, U.c)((e) => {
                                    l(e), setTimeout(() => l(null), 3e3);
                                }),
                                u = (0, U.c)(async (e, n) => {
                                    if (t && !r) {
                                        s(!0);
                                        try {
                                            await t.sendFeedback(e), a(), n && d(n);
                                        } catch (e) {
                                            i((0, g.jsx)($.hT, { error: c({ id: 'error-messages.error-during-action' }) }), { containerId: m.uQT.ERROR });
                                        } finally {
                                            s(!1);
                                        }
                                    }
                                });
                            return {
                                handleLike: (0, U.c)(async () => {
                                    (null == t ? void 0 : t.isLiked) ? await u(n.NEUTRAL) : await u(n.LIKE, c({ id: 'words.like-feedback' }));
                                }),
                                handleDislike: (0, U.c)(async () => {
                                    await u(n.DISLIKE, c({ id: 'words.dislike-feedback' }));
                                }),
                                feedbackMessage: o,
                            };
                        })({
                            card: t,
                            onClose: (0, U.c)(() => {
                                u(!1);
                            }),
                        }),
                        j = !(t && (!(null == t ? void 0 : t.isDisliked) || k)) && !h,
                        P = !t || (null == t ? void 0 : t.isDisliked) || !!k || h,
                        N = h ? 'loading' : 'content-'.concat(null == t ? void 0 : t.id),
                        S = s.checkExperiment(m.zal.WebNextWaveScreenWordsInWave, 'on'),
                        T = (0, U.c)((e) => {
                            (e && P) || (e && r && v.current && p(v.current.getBoundingClientRect().top + 12), e && o({ to: M.QT.FactScreen }), u(e));
                        }),
                        w = (0, f.L)(() => {
                            var e;
                            return h
                                ? (0, g.jsx)(X, { children: y })
                                : k
                                  ? (0, g.jsx)(G.Caption, { variant: 'span', type: 'text', size: 'l', weight: 'medium', lineClamp: 3, className: e_().text, children: k })
                                  : null != t && t.isDisliked
                                    ? void 0
                                    : (0, g.jsxs)(g.Fragment, {
                                          children: [
                                              (null == t ? void 0 : t.text) &&
                                                  (0, g.jsx)(
                                                      m.Bki,
                                                      {
                                                          objectType: M.ky.Fact,
                                                          objectId: null != (e = null == t ? void 0 : t.id) ? e : '',
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          objectsCount: (null == t ? void 0 : t.action) ? 2 : 1,
                                                          children: (0, g.jsx)(ev, { text: t.text, prevText: l, className: e_().text }, N),
                                                      },
                                                      null == t ? void 0 : t.id,
                                                  ),
                                              (null == t ? void 0 : t.action) &&
                                                  t.action.url &&
                                                  (0, g.jsx)(
                                                      m.Bki,
                                                      {
                                                          objectType: M.ky.Link,
                                                          objectId: t.action.url,
                                                          objectPosX: 1,
                                                          objectPosY: 2,
                                                          objectsCount: (null == t ? void 0 : t.action) ? 2 : 1,
                                                          children: (0, g.jsx)(
                                                              ep,
                                                              { url: t.action.url, title: t.action.title, prevTitle: c, className: e_().action },
                                                              ''.concat(N, '-action'),
                                                          ),
                                                      },
                                                      t.action.url,
                                                  ),
                                          ],
                                      });
                        }),
                        I = (0, f.L)(() => {
                            if (r && _) return { '--words-popover-height': ''.concat(_, 'px') };
                        }),
                        E = r ? eu : el;
                    return (0, g.jsxs)(Q.AM, {
                        isMobile: r,
                        placement: r ? 'bottom' : 'top',
                        open: d,
                        onOpenChange: T,
                        positionElement: r ? void 0 : v.current,
                        offsetOptions: r ? void 0 : 12,
                        style: I,
                        children: [
                            (0, g.jsxs)('div', {
                                className: (0, x.$)(e_().root, { [e_().root_disabled]: P }, i),
                                role: 'button',
                                tabIndex: 0,
                                children: [
                                    (0, g.jsx)(B, {
                                        className: (0, x.$)(e_().badge, { [e_().badge_centered]: j, [e_().badge_centeredSparkles]: j && S, [e_().badge_loading]: h }),
                                        dimmed: j,
                                        isFact: (null == t ? void 0 : t.isFact) && !P,
                                    }),
                                    (0, g.jsx)('div', { className: (0, x.$)(e_().content, { [e_().content_hidden]: j }), ref: v, children: w }),
                                ],
                            }),
                            (0, g.jsx)(Q.hl, {
                                className: e_().popoverContent,
                                children: (0, g.jsx)(m.nVz, {
                                    pageId: m._Q$.FACT_SCREEN,
                                    pageEntityId: null == t ? void 0 : t.id,
                                    pageStyle: r ? M.QL.Sheet : M.QL.Popup,
                                    pagePlacement: r ? M.c4.Bottom : M.c4.Floating,
                                    children: t && (0, g.jsx)(E, { card: t, onLike: b, onDislike: C }),
                                }),
                            }),
                        ],
                    });
                }),
                eh = (0, b.PA)((e) => {
                    let { className: t, trackId: a } = e,
                        { words: i } = (0, m.Pjs)(),
                        n = (() => {
                            let e = (0, m.NFA)();
                            return (0, A.useMemo)(() => {
                                let t = e.get(m.WA$),
                                    a = null == t ? void 0 : t.getPassportUid();
                                if (!a) return;
                                let i = new W(String(a));
                                return i.openDatabase(), i;
                            }, [e]);
                        })();
                    (() => {
                        let e = (0, m.eGp)(),
                            { words: t } = (0, m.Pjs)();
                        (0, A.useEffect)(() => {
                            if (!e) return;
                            let a = e.state.queueState,
                                i = () => {
                                    let e = a.entityList.value,
                                        t = a.order.value,
                                        i = a.index.value;
                                    return e && null != i
                                        ? ((e, t, a) => ({
                                              trackIds: Array.from({ length: t.length > 0 ? t.length : e.length }, (a, i) => {
                                                  var n, r, s, o, l;
                                                  let c =
                                                      null == (o = e[t.length > 0 && null != (l = t[i]) ? l : i]) ||
                                                      null == (s = o.entity) ||
                                                      null == (r = s.data) ||
                                                      null == (n = r.meta)
                                                          ? void 0
                                                          : n.id;
                                                  return void 0 !== c ? String(c) : void 0;
                                              }),
                                              currentIndex: a,
                                          }))(e, t || [], i)
                                        : null;
                                },
                                n = a.currentEntity.onChange((e) => {
                                    ((e) => {
                                        let a = i();
                                        if (!a) return;
                                        let n = D({ queueState: a, backwardSize: 3, forwardSize: 17 });
                                        t.evict(new Set(n));
                                        let r = e === O.So.MOVE_FORWARD || e === O.So.AUTO_MOVE_FORWARD || e === O.So.ERROR_MOVE_FORWARD,
                                            s = e === O.So.MOVE_BACKWARD,
                                            o = [];
                                        r && F({ queueState: a, direction: 'forward', isRequested: t.isTrackRequested })
                                            ? (o = R({ queueState: a, direction: 'forward', batchSize: 17 }))
                                            : s && F({ queueState: a, direction: 'backward', isRequested: t.isTrackRequested })
                                              ? (o = R({ queueState: a, direction: 'backward', batchSize: 3 }))
                                              : r || s || (o = n),
                                            o.length > 0 && t.loadCards(o);
                                    })(null == e ? void 0 : e.lastChangeMethod);
                                }),
                                r = a.entityList.onChange(() => {
                                    (() => {
                                        let e = i();
                                        if (!e) return;
                                        let a = D({ queueState: e, backwardSize: 3, forwardSize: 17 });
                                        a.length > 0 && t.loadCards(a);
                                    })();
                                });
                            return () => {
                                null == n || n(), null == r || r();
                            };
                        }, [e, t]);
                    })();
                    let r = i.getCardForTrack(a);
                    (0, A.useEffect)(() => {
                        i.setWordsViewedStore(n);
                    }, [i, n]),
                        (0, A.useEffect)(() => {
                            r && i.markCardViewed(r.id);
                        }, [r, i]);
                    let s = !r && i.isLoading(String(a));
                    return a
                        ? (0, g.jsx)(m.FoH, {
                              blockId: M.LA.WordsInWave,
                              blockType: M.LA.WordsInWave,
                              blockPosX: 1,
                              blockPosY: 2,
                              mainObjectType: M.ky.Track,
                              mainObjectId: null != a ? a : void 0,
                              children: (0, g.jsx)(m.Bki, {
                                  objectType: M.ky.Fact,
                                  objectId: null == r ? void 0 : r.id,
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  objectsCount: (null == r ? void 0 : r.action) ? 2 : 1,
                                  children: (0, g.jsx)(ey, { card: r, isLoading: s, className: t }),
                              }),
                          })
                        : null;
                });
        },
    },
]);
