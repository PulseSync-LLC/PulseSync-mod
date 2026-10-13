'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5531],
    {
        5531: (e, t, r) => {
            r.d(t, { p: () => c });
            var n,
                o = r(6274),
                i = r(74631),
                u = {
                    5881: (e, t, r) => {
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
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    3707: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'kAYDswAvA1AJoAzRV4rY',
                            root_disabled: 'vkAwJpSGxne16yE82eHh',
                            root_size_xxxs: 'i690pcQGptnPbYcI77fh',
                            root_size_xxs: 'K2cOFeQVOaRzGAOv6gWL',
                            input: 'GRggPQ1rZgvcyCxPPgvw',
                            root_variant_secondary: 'o9HhnHzukPG4e94AXBNT',
                            textShadowing: 'ceR_9q_roxCLdCPR87Qw',
                            actions: 'XsBFSZAjR3ZRN8oqetex',
                        };
                    },
                    4490: (e, t, r) => {
                        (r.r(t), r.d(t, { DOWN: () => l, LEFT: () => o, RIGHT: () => i, UP: () => u, useSwipeable: () => p }));
                        var n = r(810);
                        let o = 'Left',
                            i = 'Right',
                            u = 'Up',
                            l = 'Down',
                            a = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            s = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            c = 'mousemove',
                            f = 'mouseup';
                        function d(e, t) {
                            if (0 === t) return e;
                            let r = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(r) + e[1] * Math.sin(r), e[1] * Math.cos(r) - e[0] * Math.sin(r)];
                        }
                        function p(e) {
                            var t, r, p;
                            let b,
                                { trackMouse: v } = e,
                                g = n.useRef(Object.assign({}, s)),
                                m = n.useRef(Object.assign({}, a)),
                                h = n.useRef(Object.assign({}, m.current));
                            for (b in ((h.current = Object.assign({}, m.current)), (m.current = Object.assign(Object.assign({}, a), e)), a))
                                void 0 === m.current[b] && (m.current[b] = a[b]);
                            let [O, y] = n.useMemo(
                                () =>
                                    (function (e, t) {
                                        let r = (t) => {
                                                let r = 'touches' in t;
                                                (r && t.touches.length > 1) ||
                                                    e((e, o) => {
                                                        o.trackMouse && !r && (document.addEventListener(c, n), document.addEventListener(f, b));
                                                        let { clientX: i, clientY: u } = r ? t.touches[0] : t,
                                                            l = d([i, u], o.rotationAngle);
                                                        return (
                                                            o.onTouchStartOrOnMouseDown && o.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), s), { initial: l.slice(), xy: l, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            n = (t) => {
                                                e((e, r) => {
                                                    var n, s, c, f;
                                                    let p = 'touches' in t;
                                                    if (p && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > r.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: b, clientY: v } = p ? t.touches[0] : t,
                                                        [g, m] = d([b, v], r.rotationAngle),
                                                        h = g - e.xy[0],
                                                        O = m - e.xy[1],
                                                        y = Math.abs(h),
                                                        w = Math.abs(O),
                                                        S = (t.timeStamp || 0) - e.start,
                                                        j = Math.sqrt(y * y + w * w) / (S || 1),
                                                        E = [h / (S || 1), O / (S || 1)],
                                                        P = ((n = y), (s = w), (c = h), (f = O), n > s ? (c > 0 ? i : o) : f > 0 ? l : u),
                                                        T = 'number' == typeof r.delta ? r.delta : r.delta[P.toLowerCase()] || a.delta;
                                                    if (y < T && w < T && !e.swiping) return e;
                                                    let R = {
                                                        absX: y,
                                                        absY: w,
                                                        deltaX: h,
                                                        deltaY: O,
                                                        dir: P,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: j,
                                                        vxvy: E,
                                                    };
                                                    (R.first && r.onSwipeStart && r.onSwipeStart(R), r.onSwiping && r.onSwiping(R));
                                                    let _ = !1;
                                                    return (
                                                        (r.onSwiping || r.onSwiped || r['onSwiped'.concat(P)]) && (_ = !0),
                                                        _ && r.preventScrollOnSwipe && r.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: R, swiping: !0 })
                                                    );
                                                });
                                            },
                                            p = (t) => {
                                                e((e, r) => {
                                                    let n;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < r.swipeDuration) {
                                                            ((n = Object.assign(Object.assign({}, e.eventData), { event: t })), r.onSwiped && r.onSwiped(n));
                                                            let o = r['onSwiped'.concat(n.dir)];
                                                            o && o(n);
                                                        }
                                                    } else r.onTap && r.onTap({ event: t });
                                                    return (
                                                        r.onTouchEndOrOnMouseUp && r.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), s), { eventData: n })
                                                    );
                                                });
                                            },
                                            b = (e) => {
                                                (document.removeEventListener(c, n), document.removeEventListener(f, b), p(e));
                                            },
                                            v = (e, t) => {
                                                let o = () => {};
                                                if (e && e.addEventListener) {
                                                    let i = Object.assign(Object.assign({}, a.touchEventOptions), t.touchEventOptions),
                                                        u = [
                                                            ['touchstart', r, i],
                                                            ['touchmove', n, Object.assign(Object.assign({}, i), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', p, i],
                                                        ];
                                                    (u.forEach((t) => {
                                                        let [r, n, o] = t;
                                                        return e.addEventListener(r, n, o);
                                                    }),
                                                        (o = () =>
                                                            u.forEach((t) => {
                                                                let [r, n] = t;
                                                                return e.removeEventListener(r, n);
                                                            })));
                                                }
                                                return o;
                                            },
                                            g = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, r) => {
                                                            if (e.el === t) return e;
                                                            let n = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                                                r.trackTouch && t && (n.cleanUpTouch = v(t, r)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), n)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (g.onMouseDown = r), [g, v]);
                                    })((e) => (g.current = e(g.current, m.current)), { trackMouse: v }),
                                [v],
                            );
                            return (
                                (t = g.current),
                                (r = m.current),
                                (p = h.current),
                                (g.current =
                                    r.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? r.preventScrollOnSwipe !== p.preventScrollOnSwipe || r.touchEventOptions.passive !== p.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: y(t.el, r) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: y(t.el, r) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                O
                            );
                        }
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    9580: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useDynamicText =
                                t.usePopoverSwipeable =
                                t.useReturnValue =
                                t.useCallbackRef =
                                t.useDebouncedToggle =
                                t.useResize =
                                t.useIsomorphicEffect =
                                t.useForceUpdateRef =
                                t.useElementOffsetY =
                                t.getElementNameByDataAttribute =
                                t.createIntersectionObserver =
                                t.useIntersectionObserver =
                                t.useKeyboardNavigation =
                                t.useScroll =
                                t.useForwardRef =
                                    void 0));
                        var n = r(189);
                        Object.defineProperty(t, 'useForwardRef', {
                            enumerable: !0,
                            get: function () {
                                return n.useForwardRef;
                            },
                        });
                        var o = r(3830);
                        Object.defineProperty(t, 'useScroll', {
                            enumerable: !0,
                            get: function () {
                                return o.useScroll;
                            },
                        });
                        var i = r(3298);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return i.useKeyboardNavigation;
                            },
                        });
                        var u = r(597);
                        (Object.defineProperty(t, 'useIntersectionObserver', {
                            enumerable: !0,
                            get: function () {
                                return u.useIntersectionObserver;
                            },
                        }),
                            Object.defineProperty(t, 'createIntersectionObserver', {
                                enumerable: !0,
                                get: function () {
                                    return u.createIntersectionObserver;
                                },
                            }),
                            Object.defineProperty(t, 'getElementNameByDataAttribute', {
                                enumerable: !0,
                                get: function () {
                                    return u.getElementNameByDataAttribute;
                                },
                            }));
                        var l = r(7293);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return l.useElementOffsetY;
                            },
                        });
                        var a = r(3940);
                        Object.defineProperty(t, 'useForceUpdateRef', {
                            enumerable: !0,
                            get: function () {
                                return a.useForceUpdateRef;
                            },
                        });
                        var s = r(4482);
                        Object.defineProperty(t, 'useIsomorphicEffect', {
                            enumerable: !0,
                            get: function () {
                                return s.useIsomorphicEffect;
                            },
                        });
                        var c = r(588);
                        Object.defineProperty(t, 'useResize', {
                            enumerable: !0,
                            get: function () {
                                return c.useResize;
                            },
                        });
                        var f = r(8612);
                        Object.defineProperty(t, 'useDebouncedToggle', {
                            enumerable: !0,
                            get: function () {
                                return f.useDebouncedToggle;
                            },
                        });
                        var d = r(792);
                        Object.defineProperty(t, 'useCallbackRef', {
                            enumerable: !0,
                            get: function () {
                                return d.useCallbackRef;
                            },
                        });
                        var p = r(7497);
                        Object.defineProperty(t, 'useReturnValue', {
                            enumerable: !0,
                            get: function () {
                                return p.useReturnValue;
                            },
                        });
                        var b = r(2380);
                        Object.defineProperty(t, 'usePopoverSwipeable', {
                            enumerable: !0,
                            get: function () {
                                return b.usePopoverSwipeable;
                            },
                        });
                        var v = r(6585);
                        Object.defineProperty(t, 'useDynamicText', {
                            enumerable: !0,
                            get: function () {
                                return v.useDynamicText;
                            },
                        });
                    },
                    792: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let n = r(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, n.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                                    return t.current.callback(...r);
                                },
                                callback: e,
                            });
                            return (
                                (0, n.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    2458: (e, t, r) => {
                        var n;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let o = r(4490),
                            i = r(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(n || (t.SwipeablePlacement = n = {}));
                        let u = (e) => {
                                let { ref: t, deltaY: r, deltaX: o, placement: i } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            i === n.TOP || i === n.BOTTOM ? 'translateY('.concat(r || 0, 'px)') : 'translateX('.concat(o || 0, 'px)')));
                                });
                            },
                            l = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: a, disableSwipe: s, placement: c, threshold: f } = e,
                                d = (0, i.useCallbackRef)(() => {
                                    a && (l(t), a());
                                }),
                                p = (0, i.useCallbackRef)((e) => {
                                    s ||
                                        ((e) => {
                                            let { ref: t, deltaY: r, deltaX: o, placement: i } = e;
                                            switch (i) {
                                                case n.TOP:
                                                    r <= 0 && u({ ref: t, deltaY: r, deltaX: o, placement: i });
                                                    break;
                                                case n.RIGHT:
                                                    o >= 0 && u({ ref: t, deltaY: r, deltaX: o, placement: i });
                                                    break;
                                                case n.LEFT:
                                                    o <= 0 && u({ ref: t, deltaY: r, deltaX: o, placement: i });
                                                    break;
                                                default:
                                                    r >= 0 && u({ ref: t, deltaY: r, deltaX: o, placement: i });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c });
                                }),
                                b = (0, i.useCallbackRef)((e) => {
                                    !s &&
                                        (((e) => {
                                            let { ref: t, deltaY: r, deltaX: o, placement: i, threshold: u = 25 } = e;
                                            if (!t.current) return !1;
                                            let l = (u / 100) * (i === n.TOP || i === n.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (i) {
                                                case n.TOP:
                                                    return r < 0 && Math.abs(r) >= l;
                                                case n.RIGHT:
                                                    return o > 0 && o >= l;
                                                case n.LEFT:
                                                    return o < 0 && Math.abs(o) >= l;
                                                default:
                                                    return r > 0 && r >= l;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c, threshold: f })
                                            ? a && (l(t), a())
                                            : l(t));
                                });
                            return { handlers: (0, o.useSwipeable)({ onSwiped: b, onSwiping: p, trackMouse: !0, trackTouch: !0, ...r }), onCloseCallback: d };
                        };
                    },
                    8612: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let n = r(352),
                            o = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: i } = e,
                                u = (0, o.useRef)(null),
                                [l, a] = (0, o.useState)(!!r),
                                s = (0, o.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            (a(!r),
                                                u.current && window.clearTimeout(u.current),
                                                (u.current = window.setTimeout(() => {
                                                    a(!!r);
                                                }, t)));
                                        }, i),
                                    [t, r, i],
                                ),
                                c = (0, o.useCallback)(() => {
                                    (a(!!r), u.current && window.clearTimeout(u.current));
                                }, [r]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        u.current && window.clearTimeout(u.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: s, reset: c }
                            );
                        };
                    },
                    6585: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0));
                        let n = r(810),
                            o = (e) => {
                                ((e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && o(e);
                                    }));
                            },
                            i = (e, t, r, n, o, i) => {
                                (e.style.setProperty('--dynamic-font-size', ''.concat(n, 'px')), e.style.setProperty('--dynamic-line-height', String(o)));
                                let u = 'number' == typeof i ? e.scrollHeight <= Math.min(i * n * o, r) + 1 : e.scrollHeight <= r + 1,
                                    l = e.scrollWidth <= t + 1;
                                return u && l;
                            },
                            u = (e) => {
                                let {
                                        container: t,
                                        containerWidth: r,
                                        containerHeight: n,
                                        minFontSize: u,
                                        maxFontSize: l,
                                        lineHeight: a,
                                        maxLines: s,
                                        styleVariants: c,
                                    } = e,
                                    f = ((e, t, r) => {
                                        let n = e.cloneNode(!0);
                                        return (
                                            (n.style.cssText =
                                                '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                    t,
                                                    'px !important;\n    ',
                                                )),
                                            o(n),
                                            n.style.setProperty('--dynamic-line-height', String(r)),
                                            document.body.appendChild(n),
                                            n
                                        );
                                    })(t, r, a);
                                try {
                                    if (null == c ? void 0 : c.length) {
                                        var d;
                                        let e = [...c].sort((e, t) => t.fontSize - e.fontSize),
                                            t = null != (d = e[e.length - 1]) ? d : { fontSize: u, lineHeight: a };
                                        for (let t of e) if (i(f, r, n, t.fontSize, t.lineHeight, s)) return { ...t, fits: !0 };
                                        return { ...t, fits: !1 };
                                    }
                                    let e = u,
                                        t = l,
                                        o = null;
                                    for (; e <= t;) {
                                        let u = Math.floor((e + t) / 2);
                                        i(f, r, n, u, a, s) ? ((o = u), (e = u + 1)) : (t = u - 1);
                                    }
                                    if (null === o) return { fontSize: u, lineHeight: a, fits: !1 };
                                    return { fontSize: Math.max(u, o - 1), lineHeight: a, fits: !0 };
                                } finally {
                                    f.remove();
                                }
                            };
                        ((t.findOptimalFontSize = (e) => u(e).fontSize),
                            (t.useDynamicText = (e, t, r) => {
                                let { minFontSize: o, maxFontSize: i, lineHeight: l, maxLines: a, fallbackMaxLines: s, styleVariants: c } = t;
                                (0, n.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(l));
                                    let t = () => {
                                            let t = e.clientWidth,
                                                n = e.clientHeight,
                                                f = e.childNodes.length > 0;
                                            if (0 === t || 0 === n || !f) return;
                                            let {
                                                maxLines: d,
                                                fontSize: p,
                                                lineHeight: b,
                                            } = ((e) => {
                                                let { fallbackMaxLines: t, maxLines: r } = e,
                                                    n = u({ ...e, maxLines: r });
                                                if (void 0 === t || n.fits) return { maxLines: r, fontSize: n.fontSize, lineHeight: n.lineHeight };
                                                let o = u({ ...e, maxLines: t });
                                                return { maxLines: t, fontSize: o.fontSize, lineHeight: o.lineHeight };
                                            })({
                                                container: e,
                                                containerWidth: t,
                                                containerHeight: n,
                                                minFontSize: o,
                                                maxFontSize: i,
                                                lineHeight: l,
                                                maxLines: a,
                                                fallbackMaxLines: s,
                                                styleVariants: c,
                                            });
                                            (null == r || r(d),
                                                e.style.setProperty('--dynamic-font-size', ''.concat(p, 'px')),
                                                e.style.setProperty('--dynamic-line-height', String(b)));
                                        },
                                        n = new ResizeObserver(t),
                                        f = new MutationObserver(t);
                                    return (
                                        n.observe(e),
                                        f.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(t),
                                        t(),
                                        () => {
                                            (n.disconnect(), f.disconnect());
                                        }
                                    );
                                }, [e, r, s, l, i, a, o, c]);
                            }));
                    },
                    7293: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0));
                        let n = r(810),
                            o = r(3830),
                            i = r(3940);
                        t.useElementOffsetY = (e) => {
                            let [t, r] = (0, i.useForceUpdateRef)(),
                                [u, l] = (0, n.useState)(),
                                a = (0, n.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && l(e.y);
                                }, [t]);
                            return ((0, n.useLayoutEffect)(a), (0, o.useScroll)({ onScroll: a, elementRef: e }), { forceUpdateRefCallback: r, offsetY: u });
                        };
                    },
                    3940: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let n = r(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, n.useState)(null);
                            return [
                                e,
                                (0, n.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    189: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForwardRef = void 0));
                        let n = r(810);
                        t.useForwardRef = function (e, t) {
                            let r = (0, n.useRef)(t);
                            return (
                                (0, n.useEffect)(() => {
                                    e && ('function' == typeof e ? e(r.current) : (e.current = r.current));
                                }, [e]),
                                r
                            );
                        };
                    },
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let n = r(810),
                            { innerWidth: o = 0, innerHeight: i = 0 } = window;
                        function u(e) {
                            let { top: t, right: r, bottom: n, left: u } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= i) || (n >= 0 && n <= i)) && ((u >= 0 && u <= o) || (r >= 0 && r <= o));
                        }
                        function l(e) {
                            var t, r;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, n)) ? r : e.attributes[0];
                        }
                        function a(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = u),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = a),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [{ freezeOnceVisible: i, preflightCheck: s, ...c }, f = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, o],
                                    [d, p] = (0, n.useState)({}),
                                    b = (0, n.useRef)(new Set()),
                                    v = (0, n.useMemo)(
                                        () =>
                                            f
                                                ? null
                                                : a((e) => {
                                                      let t = l(e.target);
                                                      if (t && v) {
                                                          if (b.current.has(t)) return;
                                                          (p((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (b.current.add(t), v.unobserve(e.target)));
                                                      }
                                                  }, c),
                                        [f],
                                    );
                                return (
                                    (0, n.useLayoutEffect)(
                                        () => (
                                            v &&
                                                !f &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (s && (t = u(e.current))) {
                                                            let t = l(e.current);
                                                            p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || v.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                v && v.disconnect();
                                            }
                                        ),
                                        [f, v, e.length],
                                    ),
                                    d
                                );
                            }));
                    },
                    4482: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useIsomorphicEffect = void 0));
                        let n = r(810);
                        t.useIsomorphicEffect = 'undefined' != typeof document ? n.useLayoutEffect : n.useEffect;
                    },
                    3298: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useKeyboardNavigation = void 0));
                        let n = r(810);
                        function o(e, t) {
                            return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                { navigationItemsSelector: r, activeAttributeName: i = 'aria-selected' } = t,
                                u = (0, n.useCallback)(
                                    (t) => {
                                        let n = o(e, r);
                                        if (!n.length) return;
                                        let i = t.target,
                                            u = n.indexOf(i);
                                        if (-1 === u) return;
                                        let [l] = n,
                                            a = n.at(-1),
                                            s = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                s = n[u - 1] || a;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                s = n[u + 1] || l;
                                                break;
                                            case 'Home':
                                                s = l;
                                                break;
                                            case 'End':
                                                s = a;
                                        }
                                        null !== s && (s.focus(), t.preventDefault());
                                    },
                                    [r, e],
                                );
                            ((0, n.useEffect)(() => {
                                let t = e.current;
                                return (null == t || t.addEventListener('keydown', u), () => (null == t ? void 0 : t.removeEventListener('keydown', u)));
                            }, [e, u]),
                                (0, n.useEffect)(() => {
                                    o(e, r).forEach((e) => {
                                        e.hasAttribute(i) && ('true' === e.getAttribute(i) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                }));
                        };
                    },
                    2380: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0));
                        let n = r(810),
                            o = r(2458);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: i, disableSwipe: u, placement: l, threshold: a } = e,
                                s = (0, n.useMemo)(() => {
                                    switch (l) {
                                        case 'top':
                                        case 'top-end':
                                        case 'top-start':
                                            return o.SwipeablePlacement.TOP;
                                        case 'right':
                                        case 'right-end':
                                        case 'right-start':
                                            return o.SwipeablePlacement.RIGHT;
                                        case 'left':
                                        case 'left-end':
                                        case 'left-start':
                                            return o.SwipeablePlacement.LEFT;
                                        default:
                                            return o.SwipeablePlacement.BOTTOM;
                                    }
                                }, [l]);
                            return (0, o.useComponentSwipeable)({ ref: t, swipeableProps: r, onClose: i, disableSwipe: u, placement: s, threshold: a });
                        };
                    },
                    588: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let n = r(810),
                            o = r(1848);
                        t.useResize = (e, t) => {
                            (0, n.useEffect)(() => {
                                let r = (0, o.getElementFromRefOrElement)(t);
                                if (null === r) return;
                                let n = null != r ? r : document.documentElement,
                                    i = new ResizeObserver(e);
                                return (i.observe(n), () => i.disconnect());
                            }, [t, e]);
                        };
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    3830: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let n = r(810),
                            o = r(1848),
                            i = r(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: u } = e,
                                { state: l, handleDebouncedToggle: a } = (0, i.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                s = (0, n.useCallback)(() => {
                                    (r && a(), null == t || t());
                                }, [r, a, t]);
                            return (
                                (0, n.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(u);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', s, r), () => t.removeEventListener('scroll', s, r));
                                }, [u, s]),
                                l
                            );
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    9557: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Input = void 0));
                        let o = r(4377),
                            i = r(5881),
                            u = r(810),
                            l = r(9580),
                            a = n(r(3707)),
                            s = (e) => {
                                let {
                                        containerClassName: t,
                                        inputClassName: r,
                                        actionsClassName: n,
                                        icon: s = null,
                                        actions: c = null,
                                        disabled: f,
                                        forwardRef: d,
                                        value: p,
                                        size: b = 'xxxs',
                                        variant: v = 'primary',
                                        ...g
                                    } = e,
                                    m = (0, l.useForwardRef)(d, null),
                                    h = (0, u.useCallback)(() => {
                                        var e;
                                        null == (e = m.current) || e.focus();
                                    }, [m]);
                                return (0, o.jsxs)('div', {
                                    className: (0, i.clsx)(
                                        a.default.root,
                                        { [a.default.root_disabled]: f, [a.default['root_size_'.concat(b)]]: b, [a.default['root_variant_'.concat(v)]]: v },
                                        t,
                                    ),
                                    onClick: h,
                                    children: [
                                        s,
                                        (0, o.jsx)('input', {
                                            className: (0, i.clsx)(a.default.input, r, { [a.default.textShadowing]: g.readOnly }),
                                            ref: m,
                                            value: p,
                                            disabled: f,
                                            ...g,
                                        }),
                                        (0, o.jsx)('div', { className: (0, i.clsx)(a.default.actions, n), children: c }),
                                    ],
                                });
                            };
                        t.Input = (0, u.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e }));
                    },
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(i, 2));
                    },
                },
                l = {};
            function a(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return (u[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.Input = void 0));
                var e = a(9557);
                Object.defineProperty(s, 'Input', {
                    enumerable: !0,
                    get: function () {
                        return e.Input;
                    },
                });
            })();
            var c = s.Input;
            s.__esModule;
        },
    },
]);
