'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7848],
    {
        13833: (e, t, n) => {
            n.d(t, { N: () => f });
            var r,
                o = n(33049),
                i = n(6274),
                l = n(74631),
                u = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length;)
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (o && (o += ' '), (o += r));
                                            else for (n in t) t[n] && (o && (o += ' '), (o += n));
                                        return o;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (n.r(t), n.d(t, { clsx: () => r, default: () => o }));
                        let o = r;
                    },
                    5429: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = {
                            root: 'By12CU9obvaH0jYtauNw',
                            root_scrolling: 'MFfv7uDaaJhS_oiAzQNT',
                            root_notScrolling: 'pnFSEGiRmI9JuhUxbfVe',
                            container: 'YsFmmSnMXb5VMh5VyqeV',
                        };
                    },
                    4490: (e, t, n) => {
                        (n.r(t), n.d(t, { DOWN: () => u, LEFT: () => o, RIGHT: () => i, UP: () => l, useSwipeable: () => p }));
                        var r = n(810);
                        let o = 'Left',
                            i = 'Right',
                            l = 'Up',
                            u = 'Down',
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
                            let n = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(n) + e[1] * Math.sin(n), e[1] * Math.cos(n) - e[0] * Math.sin(n)];
                        }
                        function p(e) {
                            var t, n, p;
                            let b,
                                { trackMouse: v } = e,
                                m = r.useRef(Object.assign({}, s)),
                                g = r.useRef(Object.assign({}, a)),
                                h = r.useRef(Object.assign({}, g.current));
                            for (b in ((h.current = Object.assign({}, g.current)), (g.current = Object.assign(Object.assign({}, a), e)), a))
                                void 0 === g.current[b] && (g.current[b] = a[b]);
                            let [y, O] = r.useMemo(
                                () =>
                                    (function (e, t) {
                                        let n = (t) => {
                                                let n = 'touches' in t;
                                                (n && t.touches.length > 1) ||
                                                    e((e, o) => {
                                                        o.trackMouse && !n && (document.addEventListener(c, r), document.addEventListener(f, b));
                                                        let { clientX: i, clientY: l } = n ? t.touches[0] : t,
                                                            u = d([i, l], o.rotationAngle);
                                                        return (
                                                            o.onTouchStartOrOnMouseDown && o.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), s), { initial: u.slice(), xy: u, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            r = (t) => {
                                                e((e, n) => {
                                                    var r, s, c, f;
                                                    let p = 'touches' in t;
                                                    if (p && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > n.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: b, clientY: v } = p ? t.touches[0] : t,
                                                        [m, g] = d([b, v], n.rotationAngle),
                                                        h = m - e.xy[0],
                                                        y = g - e.xy[1],
                                                        O = Math.abs(h),
                                                        w = Math.abs(y),
                                                        S = (t.timeStamp || 0) - e.start,
                                                        E = Math.sqrt(O * O + w * w) / (S || 1),
                                                        j = [h / (S || 1), y / (S || 1)],
                                                        T = ((r = O), (s = w), (c = h), (f = y), r > s ? (c > 0 ? i : o) : f > 0 ? u : l),
                                                        P = 'number' == typeof n.delta ? n.delta : n.delta[T.toLowerCase()] || a.delta;
                                                    if (O < P && w < P && !e.swiping) return e;
                                                    let M = {
                                                        absX: O,
                                                        absY: w,
                                                        deltaX: h,
                                                        deltaY: y,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: E,
                                                        vxvy: j,
                                                    };
                                                    (M.first && n.onSwipeStart && n.onSwipeStart(M), n.onSwiping && n.onSwiping(M));
                                                    let R = !1;
                                                    return (
                                                        (n.onSwiping || n.onSwiped || n['onSwiped'.concat(T)]) && (R = !0),
                                                        R && n.preventScrollOnSwipe && n.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: M, swiping: !0 })
                                                    );
                                                });
                                            },
                                            p = (t) => {
                                                e((e, n) => {
                                                    let r;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < n.swipeDuration) {
                                                            ((r = Object.assign(Object.assign({}, e.eventData), { event: t })), n.onSwiped && n.onSwiped(r));
                                                            let o = n['onSwiped'.concat(r.dir)];
                                                            o && o(r);
                                                        }
                                                    } else n.onTap && n.onTap({ event: t });
                                                    return (
                                                        n.onTouchEndOrOnMouseUp && n.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), s), { eventData: r })
                                                    );
                                                });
                                            },
                                            b = (e) => {
                                                (document.removeEventListener(c, r), document.removeEventListener(f, b), p(e));
                                            },
                                            v = (e, t) => {
                                                let o = () => {};
                                                if (e && e.addEventListener) {
                                                    let i = Object.assign(Object.assign({}, a.touchEventOptions), t.touchEventOptions),
                                                        l = [
                                                            ['touchstart', n, i],
                                                            ['touchmove', r, Object.assign(Object.assign({}, i), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', p, i],
                                                        ];
                                                    (l.forEach((t) => {
                                                        let [n, r, o] = t;
                                                        return e.addEventListener(n, r, o);
                                                    }),
                                                        (o = () =>
                                                            l.forEach((t) => {
                                                                let [n, r] = t;
                                                                return e.removeEventListener(n, r);
                                                            })));
                                                }
                                                return o;
                                            },
                                            m = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, n) => {
                                                            if (e.el === t) return e;
                                                            let r = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                                                                n.trackTouch && t && (r.cleanUpTouch = v(t, n)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), r)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (m.onMouseDown = n), [m, v]);
                                    })((e) => (m.current = e(m.current, g.current)), { trackMouse: v }),
                                [v],
                            );
                            return (
                                (t = m.current),
                                (n = g.current),
                                (p = h.current),
                                (m.current =
                                    n.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? n.preventScrollOnSwipe !== p.preventScrollOnSwipe || n.touchEventOptions.passive !== p.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: O(t.el, n) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: O(t.el, n) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                y
                            );
                        }
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var o = null;
                            if ((void 0 !== r && (o = '' + r), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    9580: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useLongPress =
                                t.useDynamicText =
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
                        var r = n(189);
                        Object.defineProperty(t, 'useForwardRef', {
                            enumerable: !0,
                            get: function () {
                                return r.useForwardRef;
                            },
                        });
                        var o = n(3830);
                        Object.defineProperty(t, 'useScroll', {
                            enumerable: !0,
                            get: function () {
                                return o.useScroll;
                            },
                        });
                        var i = n(3298);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return i.useKeyboardNavigation;
                            },
                        });
                        var l = n(597);
                        (Object.defineProperty(t, 'useIntersectionObserver', {
                            enumerable: !0,
                            get: function () {
                                return l.useIntersectionObserver;
                            },
                        }),
                            Object.defineProperty(t, 'createIntersectionObserver', {
                                enumerable: !0,
                                get: function () {
                                    return l.createIntersectionObserver;
                                },
                            }),
                            Object.defineProperty(t, 'getElementNameByDataAttribute', {
                                enumerable: !0,
                                get: function () {
                                    return l.getElementNameByDataAttribute;
                                },
                            }));
                        var u = n(7293);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return u.useElementOffsetY;
                            },
                        });
                        var a = n(3940);
                        Object.defineProperty(t, 'useForceUpdateRef', {
                            enumerable: !0,
                            get: function () {
                                return a.useForceUpdateRef;
                            },
                        });
                        var s = n(4482);
                        Object.defineProperty(t, 'useIsomorphicEffect', {
                            enumerable: !0,
                            get: function () {
                                return s.useIsomorphicEffect;
                            },
                        });
                        var c = n(588);
                        Object.defineProperty(t, 'useResize', {
                            enumerable: !0,
                            get: function () {
                                return c.useResize;
                            },
                        });
                        var f = n(8612);
                        Object.defineProperty(t, 'useDebouncedToggle', {
                            enumerable: !0,
                            get: function () {
                                return f.useDebouncedToggle;
                            },
                        });
                        var d = n(792);
                        Object.defineProperty(t, 'useCallbackRef', {
                            enumerable: !0,
                            get: function () {
                                return d.useCallbackRef;
                            },
                        });
                        var p = n(7497);
                        Object.defineProperty(t, 'useReturnValue', {
                            enumerable: !0,
                            get: function () {
                                return p.useReturnValue;
                            },
                        });
                        var b = n(2380);
                        Object.defineProperty(t, 'usePopoverSwipeable', {
                            enumerable: !0,
                            get: function () {
                                return b.usePopoverSwipeable;
                            },
                        });
                        var v = n(6585);
                        Object.defineProperty(t, 'useDynamicText', {
                            enumerable: !0,
                            get: function () {
                                return v.useDynamicText;
                            },
                        });
                        var m = n(9966);
                        Object.defineProperty(t, 'useLongPress', {
                            enumerable: !0,
                            get: function () {
                                return m.useLongPress;
                            },
                        });
                    },
                    792: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let r = n(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, r.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    return t.current.callback(...n);
                                },
                                callback: e,
                            });
                            return (
                                (0, r.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    2458: (e, t, n) => {
                        var r;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let o = n(4490),
                            i = n(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(r || (t.SwipeablePlacement = r = {}));
                        let l = (e) => {
                                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            i === r.TOP || i === r.BOTTOM ? 'translateY('.concat(n || 0, 'px)') : 'translateX('.concat(o || 0, 'px)')));
                                });
                            },
                            u = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: n = {}, onClose: a, disableSwipe: s, placement: c, threshold: f } = e,
                                d = (0, i.useCallbackRef)(() => {
                                    a && (u(t), a());
                                }),
                                p = (0, i.useCallbackRef)((e) => {
                                    s ||
                                        ((e) => {
                                            let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                                            switch (i) {
                                                case r.TOP:
                                                    n <= 0 && l({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                case r.RIGHT:
                                                    o >= 0 && l({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                case r.LEFT:
                                                    o <= 0 && l({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                default:
                                                    n >= 0 && l({ ref: t, deltaY: n, deltaX: o, placement: i });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c });
                                }),
                                b = (0, i.useCallbackRef)((e) => {
                                    !s &&
                                        (((e) => {
                                            let { ref: t, deltaY: n, deltaX: o, placement: i, threshold: l = 25 } = e;
                                            if (!t.current) return !1;
                                            let u = (l / 100) * (i === r.TOP || i === r.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (i) {
                                                case r.TOP:
                                                    return n < 0 && Math.abs(n) >= u;
                                                case r.RIGHT:
                                                    return o > 0 && o >= u;
                                                case r.LEFT:
                                                    return o < 0 && Math.abs(o) >= u;
                                                default:
                                                    return n > 0 && n >= u;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c, threshold: f })
                                            ? a && (u(t), a())
                                            : u(t));
                                });
                            return { handlers: (0, o.useSwipeable)({ onSwiped: b, onSwiping: p, trackMouse: !0, trackTouch: !0, ...n }), onCloseCallback: d };
                        };
                    },
                    8612: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let r = n(352),
                            o = n(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: n, throttleTimeout: i } = e,
                                l = (0, o.useRef)(null),
                                [u, a] = (0, o.useState)(!!n),
                                s = (0, o.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            (a(!n),
                                                l.current && window.clearTimeout(l.current),
                                                (l.current = window.setTimeout(() => {
                                                    a(!!n);
                                                }, t)));
                                        }, i),
                                    [t, n, i],
                                ),
                                c = (0, o.useCallback)(() => {
                                    (a(!!n), l.current && window.clearTimeout(l.current));
                                }, [n]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        l.current && window.clearTimeout(l.current);
                                    },
                                    [],
                                ),
                                { state: u, handleDebouncedToggle: s, reset: c }
                            );
                        };
                    },
                    6585: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0));
                        let r = n(810),
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
                            i = (e, t, n, r, o, i) => {
                                (e.style.setProperty('--dynamic-font-size', ''.concat(r, 'px')), e.style.setProperty('--dynamic-line-height', String(o)));
                                let l = 'number' == typeof i ? e.scrollHeight <= Math.min(i * r * o, n) + 1 : e.scrollHeight <= n + 1,
                                    u = e.scrollWidth <= t + 1;
                                return l && u;
                            },
                            l = (e) => {
                                let {
                                        container: t,
                                        containerWidth: n,
                                        containerHeight: r,
                                        minFontSize: l,
                                        maxFontSize: u,
                                        lineHeight: a,
                                        maxLines: s,
                                        styleVariants: c,
                                    } = e,
                                    f = ((e, t, n) => {
                                        let r = e.cloneNode(!0);
                                        return (
                                            (r.style.cssText =
                                                '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                    t,
                                                    'px !important;\n    ',
                                                )),
                                            o(r),
                                            r.style.setProperty('--dynamic-line-height', String(n)),
                                            document.body.appendChild(r),
                                            r
                                        );
                                    })(t, n, a);
                                try {
                                    if (null == c ? void 0 : c.length) {
                                        var d;
                                        let e = [...c].sort((e, t) => t.fontSize - e.fontSize),
                                            t = null != (d = e[e.length - 1]) ? d : { fontSize: l, lineHeight: a };
                                        for (let t of e) if (i(f, n, r, t.fontSize, t.lineHeight, s)) return { ...t, fits: !0 };
                                        return { ...t, fits: !1 };
                                    }
                                    let e = l,
                                        t = u,
                                        o = null;
                                    for (; e <= t;) {
                                        let l = Math.floor((e + t) / 2);
                                        i(f, n, r, l, a, s) ? ((o = l), (e = l + 1)) : (t = l - 1);
                                    }
                                    if (null === o) return { fontSize: l, lineHeight: a, fits: !1 };
                                    return { fontSize: Math.max(l, o - 1), lineHeight: a, fits: !0 };
                                } finally {
                                    f.remove();
                                }
                            };
                        ((t.findOptimalFontSize = (e) => l(e).fontSize),
                            (t.useDynamicText = (e, t, n) => {
                                let { minFontSize: o, maxFontSize: i, lineHeight: u, maxLines: a, fallbackMaxLines: s, styleVariants: c } = t;
                                (0, r.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(u));
                                    let t = () => {
                                            let t = e.clientWidth,
                                                r = e.clientHeight,
                                                f = e.childNodes.length > 0;
                                            if (0 === t || 0 === r || !f) return;
                                            let {
                                                maxLines: d,
                                                fontSize: p,
                                                lineHeight: b,
                                            } = ((e) => {
                                                let { fallbackMaxLines: t, maxLines: n } = e,
                                                    r = l({ ...e, maxLines: n });
                                                if (void 0 === t || r.fits) return { maxLines: n, fontSize: r.fontSize, lineHeight: r.lineHeight };
                                                let o = l({ ...e, maxLines: t });
                                                return { maxLines: t, fontSize: o.fontSize, lineHeight: o.lineHeight };
                                            })({
                                                container: e,
                                                containerWidth: t,
                                                containerHeight: r,
                                                minFontSize: o,
                                                maxFontSize: i,
                                                lineHeight: u,
                                                maxLines: a,
                                                fallbackMaxLines: s,
                                                styleVariants: c,
                                            });
                                            (null == n || n(d),
                                                e.style.setProperty('--dynamic-font-size', ''.concat(p, 'px')),
                                                e.style.setProperty('--dynamic-line-height', String(b)));
                                        },
                                        r = new ResizeObserver(t),
                                        f = new MutationObserver(t);
                                    return (
                                        r.observe(e),
                                        f.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(t),
                                        t(),
                                        () => {
                                            (r.disconnect(), f.disconnect());
                                        }
                                    );
                                }, [e, n, s, u, i, a, o, c]);
                            }));
                    },
                    7293: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0));
                        let r = n(810),
                            o = n(3830),
                            i = n(3940);
                        t.useElementOffsetY = (e) => {
                            let [t, n] = (0, i.useForceUpdateRef)(),
                                [l, u] = (0, r.useState)(),
                                a = (0, r.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && u(e.y);
                                }, [t]);
                            return ((0, r.useLayoutEffect)(a), (0, o.useScroll)({ onScroll: a, elementRef: e }), { forceUpdateRefCallback: n, offsetY: l });
                        };
                    },
                    3940: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let r = n(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    189: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForwardRef = void 0));
                        let r = n(810);
                        t.useForwardRef = function (e, t) {
                            let n = (0, r.useRef)(t);
                            return (
                                (0, r.useEffect)(() => {
                                    e && ('function' == typeof e ? e(n.current) : (e.current = n.current));
                                }, [e]),
                                n
                            );
                        };
                    },
                    597: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let r = n(810),
                            { innerWidth: o = 0, innerHeight: i = 0 } = window;
                        function l(e) {
                            let { top: t, right: n, bottom: r, left: l } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= i) || (r >= 0 && r <= i)) && ((l >= 0 && l <= o) || (n >= 0 && n <= o));
                        }
                        function u(e) {
                            var t, n;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, r)) ? n : e.attributes[0];
                        }
                        function a(e, t) {
                            let n = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, n);
                                });
                            }, t);
                            return n;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = l),
                            (t.getElementNameByDataAttribute = u),
                            (t.createIntersectionObserver = a),
                            (t.useIntersectionObserver = function (e, n, o) {
                                let [{ freezeOnceVisible: i, preflightCheck: s, ...c }, f = !1] =
                                        'boolean' == typeof n || void 0 === n ? [t.defaultOptions, n] : [{ ...t.defaultOptions, ...n }, o],
                                    [d, p] = (0, r.useState)({}),
                                    b = (0, r.useRef)(new Set()),
                                    v = (0, r.useMemo)(
                                        () =>
                                            f
                                                ? null
                                                : a((e) => {
                                                      let t = u(e.target);
                                                      if (t && v) {
                                                          if (b.current.has(t)) return;
                                                          (p((n) => ({ ...n, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (b.current.add(t), v.unobserve(e.target)));
                                                      }
                                                  }, c),
                                        [f],
                                    );
                                return (
                                    (0, r.useLayoutEffect)(
                                        () => (
                                            v &&
                                                !f &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (s && (t = l(e.current))) {
                                                            let t = u(e.current);
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
                    4482: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useIsomorphicEffect = void 0));
                        let r = n(810);
                        t.useIsomorphicEffect = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
                    },
                    3298: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useKeyboardNavigation = void 0));
                        let r = n(810);
                        function o(e, t) {
                            return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                { navigationItemsSelector: n, activeAttributeName: i = 'aria-selected' } = t,
                                l = (0, r.useCallback)(
                                    (t) => {
                                        let r = o(e, n);
                                        if (!r.length) return;
                                        let i = t.target,
                                            l = r.indexOf(i);
                                        if (-1 === l) return;
                                        let [u] = r,
                                            a = r.at(-1),
                                            s = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                s = r[l - 1] || a;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                s = r[l + 1] || u;
                                                break;
                                            case 'Home':
                                                s = u;
                                                break;
                                            case 'End':
                                                s = a;
                                        }
                                        null !== s && (s.focus(), t.preventDefault());
                                    },
                                    [n, e],
                                );
                            ((0, r.useEffect)(() => {
                                let t = e.current;
                                return (null == t || t.addEventListener('keydown', l), () => (null == t ? void 0 : t.removeEventListener('keydown', l)));
                            }, [e, l]),
                                (0, r.useEffect)(() => {
                                    o(e, n).forEach((e) => {
                                        e.hasAttribute(i) && ('true' === e.getAttribute(i) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                }));
                        };
                    },
                    9966: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useLongPress = void 0));
                        let r = n(810),
                            o = n(792),
                            i = n(3940),
                            l = n(4012);
                        t.useLongPress = function () {
                            let {
                                    ref: e,
                                    onLongPress: t,
                                    delay: n = 500,
                                    movementThreshold: u = 10,
                                    disabled: a = !1,
                                    allowMouse: s = !1,
                                    scale: c,
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                [f, d] = (0, i.useForceUpdateRef)(),
                                p = (0, l.useMergeRefs)([d, e]),
                                [b, v] = (0, r.useState)(!1),
                                [m, g] = (0, r.useState)(!1),
                                h = (0, r.useRef)(void 0),
                                y = (0, o.useCallbackRef)((e, n) => (null == t ? void 0 : t(e, n))),
                                O = (0, o.useCallbackRef)(() => {
                                    var e;
                                    (null == (e = h.current) || e.call(h), g(!1));
                                });
                            return (
                                (0, r.useEffect)(() => {
                                    let e, t, r, o;
                                    if (!f || a) return;
                                    let i = f.ownerDocument,
                                        l = i.defaultView;
                                    if (!l) return;
                                    let d = new AbortController();
                                    function p() {
                                        (l.clearTimeout(r),
                                            (r = void 0),
                                            null == o || o.cancel(),
                                            (o = void 0),
                                            (e = void 0),
                                            v(!1),
                                            null == t || t.abort(),
                                            (t = void 0));
                                    }
                                    function b(t) {
                                        e && t.pointerId === e.pointerId && Math.hypot(t.clientX - e.clientX, t.clientY - e.clientY) > u && p();
                                    }
                                    function m(t) {
                                        t.pointerId === (null == e ? void 0 : e.pointerId) && p();
                                    }
                                    function O(t) {
                                        t.pointerId !== (null == e ? void 0 : e.pointerId) && p();
                                    }
                                    function w() {
                                        'hidden' === i.visibilityState && p();
                                    }
                                    return (
                                        (h.current = p),
                                        f.addEventListener(
                                            'pointerdown',
                                            (u) => {
                                                var a;
                                                let d = 'touch' === u.pointerType || 'pen' === u.pointerType || (s && 'mouse' === u.pointerType);
                                                if (e || !u.isPrimary || 0 !== u.button || !d) return;
                                                ((e = u),
                                                    (t = new AbortController()),
                                                    v(!0),
                                                    g(!1),
                                                    void 0 !== c &&
                                                        c > 0 &&
                                                        Number.isFinite(c) &&
                                                        !(null == (a = l.matchMedia) ? void 0 : a.call(l, '(prefers-reduced-motion: reduce)').matches) &&
                                                        f.animate &&
                                                        (o = f.animate([{ transform: 'scale(1)' }, { transform: 'scale('.concat(c, ')') }], {
                                                            duration: 150,
                                                            easing: 'ease-out',
                                                            fill: 'forwards',
                                                            composite: 'add',
                                                        })));
                                                let h = t.signal;
                                                (i.addEventListener('pointermove', b, { capture: !0, passive: !0, signal: h }),
                                                    i.addEventListener('pointerup', m, { capture: !0, signal: h }),
                                                    i.addEventListener('pointercancel', m, { capture: !0, signal: h }),
                                                    i.addEventListener('lostpointercapture', m, { capture: !0, signal: h }),
                                                    i.addEventListener('pointerdown', O, { capture: !0, signal: h }),
                                                    i.addEventListener('scroll', p, { capture: !0, passive: !0, signal: h }),
                                                    i.addEventListener('visibilitychange', w, { signal: h }),
                                                    l.addEventListener('scroll', p, { passive: !0, signal: h }),
                                                    l.addEventListener('blur', p, { signal: h }),
                                                    (r = l.setTimeout(() => {
                                                        if (((r = void 0), !f.isConnected)) return void p();
                                                        (((e, t) => {
                                                            let n,
                                                                r = e.ownerDocument,
                                                                o = r.defaultView;
                                                            if (!o) return;
                                                            let i = new AbortController(),
                                                                l = !1;
                                                            function u() {
                                                                (o.clearTimeout(n), i.abort());
                                                            }
                                                            function a(e) {
                                                                e.pointerId === t.pointerId && ((l = !0), o.clearTimeout(n), (n = o.setTimeout(u, 750)));
                                                            }
                                                            n = o.setTimeout(u, 6e4);
                                                            let s = i.signal;
                                                            (r.addEventListener(
                                                                'click',
                                                                function (n) {
                                                                    let r = 'pointerId' in n ? n.pointerId === t.pointerId : n.composedPath().includes(e);
                                                                    0 !== n.detail && r && (n.preventDefault(), n.stopPropagation(), u());
                                                                },
                                                                { capture: !0, signal: s },
                                                            ),
                                                                r.addEventListener(
                                                                    'pointerdown',
                                                                    function () {
                                                                        l && u();
                                                                    },
                                                                    { capture: !0, signal: s },
                                                                ),
                                                                r.addEventListener(
                                                                    'contextmenu',
                                                                    function (n) {
                                                                        'mouse' !== t.pointerType && n.composedPath().includes(e) && n.preventDefault();
                                                                    },
                                                                    { capture: !0, signal: s },
                                                                ),
                                                                r.addEventListener('pointerup', a, { capture: !0, signal: s }),
                                                                r.addEventListener('pointercancel', a, { capture: !0, signal: s }),
                                                                o.addEventListener('blur', u, { signal: s }));
                                                        })(f, u),
                                                            g(!0),
                                                            y(u, f));
                                                    }, n)));
                                            },
                                            { passive: !0, signal: d.signal },
                                        ),
                                        f.addEventListener(
                                            'contextmenu',
                                            (t) => {
                                                e && 'mouse' !== e.pointerType && t.preventDefault();
                                            },
                                            { signal: d.signal },
                                        ),
                                        () => {
                                            (p(), (h.current = void 0), d.abort());
                                        }
                                    );
                                }, [f, a, n, u, s, c, y]),
                                { ref: p, isPressing: b, isLongPressed: m, reset: O }
                            );
                        };
                    },
                    4012: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var r = n(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return r.useMergeRefs;
                            },
                        });
                    },
                    2380: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0));
                        let r = n(810),
                            o = n(2458);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: n = {}, onClose: i, disableSwipe: l, placement: u, threshold: a } = e,
                                s = (0, r.useMemo)(() => {
                                    switch (u) {
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
                                }, [u]);
                            return (0, o.useComponentSwipeable)({ ref: t, swipeableProps: n, onClose: i, disableSwipe: l, placement: s, threshold: a });
                        };
                    },
                    588: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let r = n(810),
                            o = n(1848);
                        t.useResize = (e, t) => {
                            (0, r.useEffect)(() => {
                                let n = (0, o.getElementFromRefOrElement)(t);
                                if (null === n) return;
                                let r = null != n ? n : document.documentElement,
                                    i = new ResizeObserver(e);
                                return (i.observe(r), () => i.disconnect());
                            }, [t, e]);
                        };
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    3830: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let r = n(810),
                            o = n(1848),
                            i = n(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: n, elementRef: l } = e,
                                { state: u, handleDebouncedToggle: a } = (0, i.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                s = (0, r.useCallback)(() => {
                                    (n && a(), null == t || t());
                                }, [n, a, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(l);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        n = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', s, n), () => t.removeEventListener('scroll', s, n));
                                }, [l, s]),
                                u
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
                    6438: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.ScrollableContent = t.ScrollableContentComponent = void 0));
                        let o = n(4377),
                            i = n(810),
                            l = n(5881),
                            u = n(9580),
                            a = r(n(5429));
                        ((t.ScrollableContentComponent = (e) => {
                            let { forwardRef: t, className: n, containerClassName: r, children: i, ...s } = e,
                                c = (0, u.useForwardRef)(t, null),
                                f = (0, u.useScroll)({ listenIsScrolling: !0, elementRef: c });
                            return (0, o.jsx)('div', {
                                className: (0, l.clsx)(a.default.root, { [a.default.root_scrolling]: f, [a.default.root_notScrolling]: !f }, n),
                                ref: c,
                                ...s,
                                children: (0, o.jsx)('div', { className: (0, l.clsx)(a.default.container, r), children: i }),
                            });
                        }),
                            (t.ScrollableContent = (0, i.forwardRef)((e, n) => (0, o.jsx)(t.ScrollableContentComponent, { forwardRef: n, ...e }))));
                    },
                    1964: (e) => {
                        e.exports = o;
                    },
                    352: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(l, 2));
                    },
                },
                a = {};
            function s(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var n = (a[e] = { exports: {} });
                return (u[e].call(n.exports, n, n.exports, s), n.exports);
            }
            ((s.d = (e, t) => {
                for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.t = void 0));
                var e = s(6438);
                Object.defineProperty(c, 't', {
                    enumerable: !0,
                    get: function () {
                        return e.ScrollableContent;
                    },
                });
            })();
            var f = c.t;
            c.X;
        },
        84e3: (e, t, n) => {
            n.d(t, { U: () => i });
            var r = n(36484),
                o = n(62562);
            let i = () => (0, o.N)().get(r.Zf);
        },
    },
]);
