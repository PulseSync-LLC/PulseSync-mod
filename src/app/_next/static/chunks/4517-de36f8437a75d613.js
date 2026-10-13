'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4517],
    {
        13833: (e, t, r) => {
            r.d(t, { N: () => c });
            var n,
                o = r(6274),
                l = r(74631),
                i = {
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
                    5429: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'By12CU9obvaH0jYtauNw',
                            root_scrolling: 'MFfv7uDaaJhS_oiAzQNT',
                            root_notScrolling: 'pnFSEGiRmI9JuhUxbfVe',
                            container: 'YsFmmSnMXb5VMh5VyqeV',
                        };
                    },
                    4490: (e, t, r) => {
                        (r.r(t), r.d(t, { DOWN: () => u, LEFT: () => o, RIGHT: () => l, UP: () => i, useSwipeable: () => p }));
                        var n = r(810);
                        let o = 'Left',
                            l = 'Right',
                            i = 'Up',
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
                                                        let { clientX: l, clientY: i } = r ? t.touches[0] : t,
                                                            u = d([l, i], o.rotationAngle);
                                                        return (
                                                            o.onTouchStartOrOnMouseDown && o.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), s), { initial: u.slice(), xy: u, start: t.timeStamp || 0 })
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
                                                        T = ((n = y), (s = w), (c = h), (f = O), n > s ? (c > 0 ? l : o) : f > 0 ? u : i),
                                                        P = 'number' == typeof r.delta ? r.delta : r.delta[T.toLowerCase()] || a.delta;
                                                    if (y < P && w < P && !e.swiping) return e;
                                                    let R = {
                                                        absX: y,
                                                        absY: w,
                                                        deltaX: h,
                                                        deltaY: O,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: j,
                                                        vxvy: E,
                                                    };
                                                    (R.first && r.onSwipeStart && r.onSwipeStart(R), r.onSwiping && r.onSwiping(R));
                                                    let M = !1;
                                                    return (
                                                        (r.onSwiping || r.onSwiped || r['onSwiped'.concat(T)]) && (M = !0),
                                                        M && r.preventScrollOnSwipe && r.trackTouch && t.cancelable && t.preventDefault(),
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
                                                    let l = Object.assign(Object.assign({}, a.touchEventOptions), t.touchEventOptions),
                                                        i = [
                                                            ['touchstart', r, l],
                                                            ['touchmove', n, Object.assign(Object.assign({}, l), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', p, l],
                                                        ];
                                                    (i.forEach((t) => {
                                                        let [r, n, o] = t;
                                                        return e.addEventListener(r, n, o);
                                                    }),
                                                        (o = () =>
                                                            i.forEach((t) => {
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
                                for (var l in ((n = {}), t)) 'key' !== l && (n[l] = t[l]);
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
                        var l = r(3298);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return l.useKeyboardNavigation;
                            },
                        });
                        var i = r(597);
                        (Object.defineProperty(t, 'useIntersectionObserver', {
                            enumerable: !0,
                            get: function () {
                                return i.useIntersectionObserver;
                            },
                        }),
                            Object.defineProperty(t, 'createIntersectionObserver', {
                                enumerable: !0,
                                get: function () {
                                    return i.createIntersectionObserver;
                                },
                            }),
                            Object.defineProperty(t, 'getElementNameByDataAttribute', {
                                enumerable: !0,
                                get: function () {
                                    return i.getElementNameByDataAttribute;
                                },
                            }));
                        var u = r(7293);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return u.useElementOffsetY;
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
                            l = r(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(n || (t.SwipeablePlacement = n = {}));
                        let i = (e) => {
                                let { ref: t, deltaY: r, deltaX: o, placement: l } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            l === n.TOP || l === n.BOTTOM ? 'translateY('.concat(r || 0, 'px)') : 'translateX('.concat(o || 0, 'px)')));
                                });
                            },
                            u = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: a, disableSwipe: s, placement: c, threshold: f } = e,
                                d = (0, l.useCallbackRef)(() => {
                                    a && (u(t), a());
                                }),
                                p = (0, l.useCallbackRef)((e) => {
                                    s ||
                                        ((e) => {
                                            let { ref: t, deltaY: r, deltaX: o, placement: l } = e;
                                            switch (l) {
                                                case n.TOP:
                                                    r <= 0 && i({ ref: t, deltaY: r, deltaX: o, placement: l });
                                                    break;
                                                case n.RIGHT:
                                                    o >= 0 && i({ ref: t, deltaY: r, deltaX: o, placement: l });
                                                    break;
                                                case n.LEFT:
                                                    o <= 0 && i({ ref: t, deltaY: r, deltaX: o, placement: l });
                                                    break;
                                                default:
                                                    r >= 0 && i({ ref: t, deltaY: r, deltaX: o, placement: l });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c });
                                }),
                                b = (0, l.useCallbackRef)((e) => {
                                    !s &&
                                        (((e) => {
                                            let { ref: t, deltaY: r, deltaX: o, placement: l, threshold: i = 25 } = e;
                                            if (!t.current) return !1;
                                            let u = (i / 100) * (l === n.TOP || l === n.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (l) {
                                                case n.TOP:
                                                    return r < 0 && Math.abs(r) >= u;
                                                case n.RIGHT:
                                                    return o > 0 && o >= u;
                                                case n.LEFT:
                                                    return o < 0 && Math.abs(o) >= u;
                                                default:
                                                    return r > 0 && r >= u;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c, threshold: f })
                                            ? a && (u(t), a())
                                            : u(t));
                                });
                            return { handlers: (0, o.useSwipeable)({ onSwiped: b, onSwiping: p, trackMouse: !0, trackTouch: !0, ...r }), onCloseCallback: d };
                        };
                    },
                    8612: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let n = r(352),
                            o = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: l } = e,
                                i = (0, o.useRef)(null),
                                [u, a] = (0, o.useState)(!!r),
                                s = (0, o.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            (a(!r),
                                                i.current && window.clearTimeout(i.current),
                                                (i.current = window.setTimeout(() => {
                                                    a(!!r);
                                                }, t)));
                                        }, l),
                                    [t, r, l],
                                ),
                                c = (0, o.useCallback)(() => {
                                    (a(!!r), i.current && window.clearTimeout(i.current));
                                }, [r]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        i.current && window.clearTimeout(i.current);
                                    },
                                    [],
                                ),
                                { state: u, handleDebouncedToggle: s, reset: c }
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
                            l = (e, t, r, n, o, l) => {
                                (e.style.setProperty('--dynamic-font-size', ''.concat(n, 'px')), e.style.setProperty('--dynamic-line-height', String(o)));
                                let i = 'number' == typeof l ? e.scrollHeight <= Math.min(l * n * o, r) + 1 : e.scrollHeight <= r + 1,
                                    u = e.scrollWidth <= t + 1;
                                return i && u;
                            },
                            i = (e) => {
                                let {
                                        container: t,
                                        containerWidth: r,
                                        containerHeight: n,
                                        minFontSize: i,
                                        maxFontSize: u,
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
                                            t = null != (d = e[e.length - 1]) ? d : { fontSize: i, lineHeight: a };
                                        for (let t of e) if (l(f, r, n, t.fontSize, t.lineHeight, s)) return { ...t, fits: !0 };
                                        return { ...t, fits: !1 };
                                    }
                                    let e = i,
                                        t = u,
                                        o = null;
                                    for (; e <= t;) {
                                        let i = Math.floor((e + t) / 2);
                                        l(f, r, n, i, a, s) ? ((o = i), (e = i + 1)) : (t = i - 1);
                                    }
                                    if (null === o) return { fontSize: i, lineHeight: a, fits: !1 };
                                    return { fontSize: Math.max(i, o - 1), lineHeight: a, fits: !0 };
                                } finally {
                                    f.remove();
                                }
                            };
                        ((t.findOptimalFontSize = (e) => i(e).fontSize),
                            (t.useDynamicText = (e, t, r) => {
                                let { minFontSize: o, maxFontSize: l, lineHeight: u, maxLines: a, fallbackMaxLines: s, styleVariants: c } = t;
                                (0, n.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(u));
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
                                                    n = i({ ...e, maxLines: r });
                                                if (void 0 === t || n.fits) return { maxLines: r, fontSize: n.fontSize, lineHeight: n.lineHeight };
                                                let o = i({ ...e, maxLines: t });
                                                return { maxLines: t, fontSize: o.fontSize, lineHeight: o.lineHeight };
                                            })({
                                                container: e,
                                                containerWidth: t,
                                                containerHeight: n,
                                                minFontSize: o,
                                                maxFontSize: l,
                                                lineHeight: u,
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
                                }, [e, r, s, u, l, a, o, c]);
                            }));
                    },
                    7293: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0));
                        let n = r(810),
                            o = r(3830),
                            l = r(3940);
                        t.useElementOffsetY = (e) => {
                            let [t, r] = (0, l.useForceUpdateRef)(),
                                [i, u] = (0, n.useState)(),
                                a = (0, n.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && u(e.y);
                                }, [t]);
                            return ((0, n.useLayoutEffect)(a), (0, o.useScroll)({ onScroll: a, elementRef: e }), { forceUpdateRefCallback: r, offsetY: i });
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
                            { innerWidth: o = 0, innerHeight: l = 0 } = window;
                        function i(e) {
                            let { top: t, right: r, bottom: n, left: i } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= l) || (n >= 0 && n <= l)) && ((i >= 0 && i <= o) || (r >= 0 && r <= o));
                        }
                        function u(e) {
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
                            (t.isInViewportNow = i),
                            (t.getElementNameByDataAttribute = u),
                            (t.createIntersectionObserver = a),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [{ freezeOnceVisible: l, preflightCheck: s, ...c }, f = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, o],
                                    [d, p] = (0, n.useState)({}),
                                    b = (0, n.useRef)(new Set()),
                                    v = (0, n.useMemo)(
                                        () =>
                                            f
                                                ? null
                                                : a((e) => {
                                                      let t = u(e.target);
                                                      if (t && v) {
                                                          if (b.current.has(t)) return;
                                                          (p((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              l && e.isIntersecting && (b.current.add(t), v.unobserve(e.target)));
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
                                                        if (s && (t = i(e.current))) {
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
                                { navigationItemsSelector: r, activeAttributeName: l = 'aria-selected' } = t,
                                i = (0, n.useCallback)(
                                    (t) => {
                                        let n = o(e, r);
                                        if (!n.length) return;
                                        let l = t.target,
                                            i = n.indexOf(l);
                                        if (-1 === i) return;
                                        let [u] = n,
                                            a = n.at(-1),
                                            s = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                s = n[i - 1] || a;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                s = n[i + 1] || u;
                                                break;
                                            case 'Home':
                                                s = u;
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
                                return (null == t || t.addEventListener('keydown', i), () => (null == t ? void 0 : t.removeEventListener('keydown', i)));
                            }, [e, i]),
                                (0, n.useEffect)(() => {
                                    o(e, r).forEach((e) => {
                                        e.hasAttribute(l) && ('true' === e.getAttribute(l) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                }));
                        };
                    },
                    2380: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0));
                        let n = r(810),
                            o = r(2458);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: l, disableSwipe: i, placement: u, threshold: a } = e,
                                s = (0, n.useMemo)(() => {
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
                            return (0, o.useComponentSwipeable)({ ref: t, swipeableProps: r, onClose: l, disableSwipe: i, placement: s, threshold: a });
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
                                    l = new ResizeObserver(e);
                                return (l.observe(n), () => l.disconnect());
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
                            l = r(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: i } = e,
                                { state: u, handleDebouncedToggle: a } = (0, l.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                s = (0, n.useCallback)(() => {
                                    (r && a(), null == t || t());
                                }, [r, a, t]);
                            return (
                                (0, n.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(i);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', s, r), () => t.removeEventListener('scroll', s, r));
                                }, [i, s]),
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
                    6438: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.ScrollableContent = t.ScrollableContentComponent = void 0));
                        let o = r(4377),
                            l = r(810),
                            i = r(5881),
                            u = r(9580),
                            a = n(r(5429));
                        ((t.ScrollableContentComponent = (e) => {
                            let { forwardRef: t, className: r, containerClassName: n, children: l, ...s } = e,
                                c = (0, u.useForwardRef)(t, null),
                                f = (0, u.useScroll)({ listenIsScrolling: !0, elementRef: c });
                            return (0, o.jsx)('div', {
                                className: (0, i.clsx)(a.default.root, { [a.default.root_scrolling]: f, [a.default.root_notScrolling]: !f }, r),
                                ref: c,
                                ...s,
                                children: (0, o.jsx)('div', { className: (0, i.clsx)(a.default.container, n), children: l }),
                            });
                        }),
                            (t.ScrollableContent = (0, l.forwardRef)((e, r) => (0, o.jsx)(t.ScrollableContentComponent, { forwardRef: r, ...e }))));
                    },
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(l, 2));
                    },
                },
                u = {};
            function a(e) {
                var t = u[e];
                if (void 0 !== t) return t.exports;
                var r = (u[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, a), r.exports);
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
                (Object.defineProperty(s, 'X', { value: !0 }), (s.t = void 0));
                var e = a(6438);
                Object.defineProperty(s, 't', {
                    enumerable: !0,
                    get: function () {
                        return e.ScrollableContent;
                    },
                });
            })();
            var c = s.t;
            s.X;
        },
        27954: (e, t, r) => {
            r.d(t, { P: () => l, g: () => i });
            var n = r(74631),
                o = r(36432);
            let l = (0, n.createContext)(null);
            function i() {
                let e = (0, n.useContext)(l);
                if (null === e) throw new o.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        84e3: (e, t, r) => {
            r.d(t, { U: () => l });
            var n = r(36484),
                o = r(62562);
            let l = () => (0, o.N)().get(n.Zf);
        },
    },
]);
