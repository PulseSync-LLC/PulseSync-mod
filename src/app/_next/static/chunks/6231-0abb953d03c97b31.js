'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6231],
    {
        56231: (e, t, r) => {
            r.d(t, { N: () => c });
            var n,
                o = r(94377),
                l = r(61910),
                u = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length; )
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
                        r.r(t), r.d(t, { clsx: () => n, default: () => o });
                        let o = n;
                    },
                    8239: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => n });
                        let n = {
                            root: 'By12CU9obvaH0jYtauNw',
                            root_scrolling: 'MFfv7uDaaJhS_oiAzQNT',
                            root_notScrolling: 'pnFSEGiRmI9JuhUxbfVe',
                            container: 'YsFmmSnMXb5VMh5VyqeV',
                        };
                    },
                    4490: (e, t, r) => {
                        r.r(t), r.d(t, { DOWN: () => a, LEFT: () => o, RIGHT: () => l, UP: () => u, useSwipeable: () => p });
                        var n = r(810);
                        let o = 'Left',
                            l = 'Right',
                            u = 'Up',
                            a = 'Down',
                            i = {
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
                                m = n.useRef(Object.assign({}, s)),
                                g = n.useRef(Object.assign({}, i)),
                                O = n.useRef(Object.assign({}, g.current));
                            for (b in ((O.current = Object.assign({}, g.current)), (g.current = Object.assign(Object.assign({}, i), e)), i))
                                void 0 === g.current[b] && (g.current[b] = i[b]);
                            let [h, y] = n.useMemo(
                                () =>
                                    (function (e, t) {
                                        let r = (t) => {
                                                let r = 'touches' in t;
                                                (r && t.touches.length > 1) ||
                                                    e((e, o) => {
                                                        o.trackMouse && !r && (document.addEventListener(c, n), document.addEventListener(f, b));
                                                        let { clientX: l, clientY: u } = r ? t.touches[0] : t,
                                                            a = d([l, u], o.rotationAngle);
                                                        return (
                                                            o.onTouchStartOrOnMouseDown && o.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), s), { initial: a.slice(), xy: a, start: t.timeStamp || 0 })
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
                                                        [m, g] = d([b, v], r.rotationAngle),
                                                        O = m - e.xy[0],
                                                        h = g - e.xy[1],
                                                        y = Math.abs(O),
                                                        w = Math.abs(h),
                                                        S = (t.timeStamp || 0) - e.start,
                                                        j = Math.sqrt(y * y + w * w) / (S || 1),
                                                        E = [O / (S || 1), h / (S || 1)],
                                                        T = ((n = y), (s = w), (c = O), (f = h), n > s ? (c > 0 ? l : o) : f > 0 ? a : u),
                                                        P = 'number' == typeof r.delta ? r.delta : r.delta[T.toLowerCase()] || i.delta;
                                                    if (y < P && w < P && !e.swiping) return e;
                                                    let R = {
                                                        absX: y,
                                                        absY: w,
                                                        deltaX: O,
                                                        deltaY: h,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: j,
                                                        vxvy: E,
                                                    };
                                                    R.first && r.onSwipeStart && r.onSwipeStart(R), r.onSwiping && r.onSwiping(R);
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
                                                            (n = Object.assign(Object.assign({}, e.eventData), { event: t })), r.onSwiped && r.onSwiped(n);
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
                                                document.removeEventListener(c, n), document.removeEventListener(f, b), p(e);
                                            },
                                            v = (e, t) => {
                                                let o = () => {};
                                                if (e && e.addEventListener) {
                                                    let l = Object.assign(Object.assign({}, i.touchEventOptions), t.touchEventOptions),
                                                        u = [
                                                            ['touchstart', r, l],
                                                            ['touchmove', n, Object.assign(Object.assign({}, l), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', p, l],
                                                        ];
                                                    u.forEach((t) => {
                                                        let [r, n, o] = t;
                                                        return e.addEventListener(r, n, o);
                                                    }),
                                                        (o = () =>
                                                            u.forEach((t) => {
                                                                let [r, n] = t;
                                                                return e.removeEventListener(r, n);
                                                            }));
                                                }
                                                return o;
                                            },
                                            m = {
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
                                        return t.trackMouse && (m.onMouseDown = r), [m, v];
                                    })((e) => (m.current = e(m.current, g.current)), { trackMouse: v }),
                                [v],
                            );
                            return (
                                (t = m.current),
                                (r = g.current),
                                (p = O.current),
                                (m.current =
                                    r.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? r.preventScrollOnSwipe !== p.preventScrollOnSwipe || r.touchEventOptions.passive !== p.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: y(t.el, r) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: y(t.el, r) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                h
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
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    9110: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
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
                                    void 0);
                        var n = r(245);
                        Object.defineProperty(t, 'useForwardRef', {
                            enumerable: !0,
                            get: function () {
                                return n.useForwardRef;
                            },
                        });
                        var o = r(2067);
                        Object.defineProperty(t, 'useScroll', {
                            enumerable: !0,
                            get: function () {
                                return o.useScroll;
                            },
                        });
                        var l = r(5188);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return l.useKeyboardNavigation;
                            },
                        });
                        var u = r(5663);
                        Object.defineProperty(t, 'useIntersectionObserver', {
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
                            });
                        var a = r(2101);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return a.useElementOffsetY;
                            },
                        });
                        var i = r(2767);
                        Object.defineProperty(t, 'useForceUpdateRef', {
                            enumerable: !0,
                            get: function () {
                                return i.useForceUpdateRef;
                            },
                        });
                        var s = r(9019);
                        Object.defineProperty(t, 'useIsomorphicEffect', {
                            enumerable: !0,
                            get: function () {
                                return s.useIsomorphicEffect;
                            },
                        });
                        var c = r(2947);
                        Object.defineProperty(t, 'useResize', {
                            enumerable: !0,
                            get: function () {
                                return c.useResize;
                            },
                        });
                        var f = r(6699);
                        Object.defineProperty(t, 'useDebouncedToggle', {
                            enumerable: !0,
                            get: function () {
                                return f.useDebouncedToggle;
                            },
                        });
                        var d = r(8691);
                        Object.defineProperty(t, 'useCallbackRef', {
                            enumerable: !0,
                            get: function () {
                                return d.useCallbackRef;
                            },
                        });
                        var p = r(998);
                        Object.defineProperty(t, 'useReturnValue', {
                            enumerable: !0,
                            get: function () {
                                return p.useReturnValue;
                            },
                        });
                        var b = r(4395);
                        Object.defineProperty(t, 'usePopoverSwipeable', {
                            enumerable: !0,
                            get: function () {
                                return b.usePopoverSwipeable;
                            },
                        });
                        var v = r(5969);
                        Object.defineProperty(t, 'useDynamicText', {
                            enumerable: !0,
                            get: function () {
                                return v.useDynamicText;
                            },
                        });
                    },
                    8691: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0);
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
                    1381: (e, t, r) => {
                        var n;
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0);
                        let o = r(4490),
                            l = r(8691);
                        !(function (e) {
                            (e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left');
                        })(n || (t.SwipeablePlacement = n = {}));
                        let u = (e) => {
                                let { ref: t, deltaY: r, deltaX: o, placement: l } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            l === n.TOP || l === n.BOTTOM ? 'translateY('.concat(r || 0, 'px)') : 'translateX('.concat(o || 0, 'px)')));
                                });
                            },
                            a = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: i, disableSwipe: s, placement: c, threshold: f } = e,
                                d = (0, l.useCallbackRef)(() => {
                                    i && (a(t), i());
                                }),
                                p = (0, l.useCallbackRef)((e) => {
                                    s ||
                                        ((e) => {
                                            let { ref: t, deltaY: r, deltaX: o, placement: l } = e;
                                            switch (l) {
                                                case n.TOP:
                                                    r <= 0 && u({ ref: t, deltaY: r, deltaX: o, placement: l });
                                                    break;
                                                case n.RIGHT:
                                                    o >= 0 && u({ ref: t, deltaY: r, deltaX: o, placement: l });
                                                    break;
                                                case n.LEFT:
                                                    o <= 0 && u({ ref: t, deltaY: r, deltaX: o, placement: l });
                                                    break;
                                                default:
                                                    r >= 0 && u({ ref: t, deltaY: r, deltaX: o, placement: l });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c });
                                }),
                                b = (0, l.useCallbackRef)((e) => {
                                    !s &&
                                        (((e) => {
                                            let { ref: t, deltaY: r, deltaX: o, placement: l, threshold: u = 25 } = e;
                                            if (!t.current) return !1;
                                            let a = (u / 100) * (l === n.TOP || l === n.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (l) {
                                                case n.TOP:
                                                    return r < 0 && Math.abs(r) >= a;
                                                case n.RIGHT:
                                                    return o > 0 && o >= a;
                                                case n.LEFT:
                                                    return o < 0 && Math.abs(o) >= a;
                                                default:
                                                    return r > 0 && r >= a;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c, threshold: f })
                                            ? i && (a(t), i())
                                            : a(t));
                                });
                            return { handlers: (0, o.useSwipeable)({ onSwiped: b, onSwiping: p, trackMouse: !0, trackTouch: !0, ...r }), onCloseCallback: d };
                        };
                    },
                    6699: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let n = r(352),
                            o = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: l } = e,
                                u = (0, o.useRef)(null),
                                [a, i] = (0, o.useState)(!!r),
                                s = (0, o.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            i(!r),
                                                u.current && window.clearTimeout(u.current),
                                                (u.current = window.setTimeout(() => {
                                                    i(!!r);
                                                }, t));
                                        }, l),
                                    [t, r, l],
                                ),
                                c = (0, o.useCallback)(() => {
                                    i(!!r), u.current && window.clearTimeout(u.current);
                                }, [r]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        u.current && window.clearTimeout(u.current);
                                    },
                                    [],
                                ),
                                { state: a, handleDebouncedToggle: s, reset: c }
                            );
                        };
                    },
                    5969: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0);
                        let n = r(810),
                            o = (e) => {
                                (e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && o(e);
                                    });
                            };
                        (t.findOptimalFontSize = (e) => {
                            let { container: t, containerWidth: r, containerHeight: n, minFontSize: l, maxFontSize: u, lineHeight: a, maxLines: i } = e,
                                s = ((e, t, r) => {
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
                                let e = l,
                                    t = u,
                                    o = l;
                                for (; e <= t; ) {
                                    let l = Math.floor((e + t) / 2);
                                    s.style.setProperty('--dynamic-font-size', ''.concat(l, 'px'));
                                    let u = 'number' == typeof i ? s.scrollHeight <= Math.min(i * l * a, n) : s.scrollHeight <= n,
                                        c = s.scrollWidth <= r + 1;
                                    u && c ? ((o = l), (e = l + 1)) : (t = l - 1);
                                }
                                return o - 1;
                            } finally {
                                s.remove();
                            }
                        }),
                            (t.useDynamicText = (e, r) => {
                                (0, n.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(r.lineHeight));
                                    let n = () => {
                                            let { width: n, height: o } = e.getBoundingClientRect(),
                                                l = e.childNodes.length > 0;
                                            if (0 === n || 0 === o || !l) return;
                                            let u = (0, t.findOptimalFontSize)({ container: e, containerWidth: n, containerHeight: o, ...r });
                                            e.style.setProperty('--dynamic-font-size', ''.concat(u, 'px'));
                                        },
                                        o = new ResizeObserver(n),
                                        l = new MutationObserver(n);
                                    return (
                                        o.observe(e),
                                        l.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(n),
                                        n(),
                                        () => {
                                            o.disconnect(), l.disconnect();
                                        }
                                    );
                                }, [e, r]);
                            });
                    },
                    2101: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0);
                        let n = r(810),
                            o = r(2067),
                            l = r(2767);
                        t.useElementOffsetY = (e) => {
                            let [t, r] = (0, l.useForceUpdateRef)(),
                                [u, a] = (0, n.useState)(),
                                i = (0, n.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && a(e.y);
                                }, [t]);
                            return (0, n.useLayoutEffect)(i), (0, o.useScroll)({ onScroll: i, elementRef: e }), { forceUpdateRefCallback: r, offsetY: u };
                        };
                    },
                    2767: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0);
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
                    245: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForwardRef = void 0);
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
                    5663: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0);
                        let n = r(810),
                            { innerWidth: o = 0, innerHeight: l = 0 } = window;
                        function u(e) {
                            let { top: t, right: r, bottom: n, left: u } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= l) || (n >= 0 && n <= l)) && ((u >= 0 && u <= o) || (r >= 0 && r <= o));
                        }
                        function a(e) {
                            var t, r;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, n)) ? r : e.attributes[0];
                        }
                        function i(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = u),
                            (t.getElementNameByDataAttribute = a),
                            (t.createIntersectionObserver = i),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [{ freezeOnceVisible: l, preflightCheck: s, ...c }, f = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, o],
                                    [d, p] = (0, n.useState)({}),
                                    b = (0, n.useRef)(new Set()),
                                    v = (0, n.useMemo)(
                                        () =>
                                            f
                                                ? null
                                                : i((e) => {
                                                      let t = a(e.target);
                                                      if (t && v) {
                                                          if (b.current.has(t)) return;
                                                          p((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              l && e.isIntersecting && (b.current.add(t), v.unobserve(e.target));
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
                                                            let t = a(e.current);
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
                            });
                    },
                    9019: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useIsomorphicEffect = void 0);
                        let n = r(810);
                        t.useIsomorphicEffect = 'undefined' != typeof document ? n.useLayoutEffect : n.useEffect;
                    },
                    5188: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useKeyboardNavigation = void 0);
                        let n = r(810);
                        function o(e, t) {
                            return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                { navigationItemsSelector: r, activeAttributeName: l = 'aria-selected' } = t,
                                u = (0, n.useCallback)(
                                    (t) => {
                                        let n = o(e, r);
                                        if (!n.length) return;
                                        let l = t.target,
                                            u = n.indexOf(l);
                                        if (-1 === u) return;
                                        let [a] = n,
                                            i = n.at(-1),
                                            s = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                s = n[u - 1] || i;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                s = n[u + 1] || a;
                                                break;
                                            case 'Home':
                                                s = a;
                                                break;
                                            case 'End':
                                                s = i;
                                        }
                                        null !== s && (s.focus(), t.preventDefault());
                                    },
                                    [r, e],
                                );
                            (0, n.useEffect)(() => {
                                let t = e.current;
                                return null == t || t.addEventListener('keydown', u), () => (null == t ? void 0 : t.removeEventListener('keydown', u));
                            }, [e, u]),
                                (0, n.useEffect)(() => {
                                    o(e, r).forEach((e) => {
                                        e.hasAttribute(l) && ('true' === e.getAttribute(l) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                });
                        };
                    },
                    4395: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0);
                        let n = r(810),
                            o = r(1381);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: l, disableSwipe: u, placement: a, threshold: i } = e,
                                s = (0, n.useMemo)(() => {
                                    switch (a) {
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
                                }, [a]);
                            return (0, o.useComponentSwipeable)({ ref: t, swipeableProps: r, onClose: l, disableSwipe: u, placement: s, threshold: i });
                        };
                    },
                    2947: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0);
                        let n = r(810),
                            o = r(361);
                        t.useResize = (e, t) => {
                            (0, n.useEffect)(() => {
                                let r = (0, o.getElementFromRefOrElement)(t);
                                if (null === r) return;
                                let n = null != r ? r : document.documentElement,
                                    l = new ResizeObserver(e);
                                return l.observe(n), () => l.disconnect();
                            }, [t, e]);
                        };
                    },
                    998: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e());
                    },
                    2067: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0);
                        let n = r(810),
                            o = r(361),
                            l = r(6699);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: u } = e,
                                { state: a, handleDebouncedToggle: i } = (0, l.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                s = (0, n.useCallback)(() => {
                                    r && i(), null == t || t();
                                }, [r, i, t]);
                            return (
                                (0, n.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(u);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', s, r), () => t.removeEventListener('scroll', s, r);
                                }, [u, s]),
                                a
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    8429: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.ScrollableContent = t.ScrollableContentComponent = void 0);
                        let o = r(4377),
                            l = r(810),
                            u = r(5881),
                            a = r(9110),
                            i = n(r(8239));
                        (t.ScrollableContentComponent = (e) => {
                            let { forwardRef: t, className: r, containerClassName: n, children: l, ...s } = e,
                                c = (0, a.useForwardRef)(t, null),
                                f = (0, a.useScroll)({ listenIsScrolling: !0, elementRef: c });
                            return (0, o.jsx)('div', {
                                className: (0, u.clsx)(i.default.root, { [i.default.root_scrolling]: f, [i.default.root_notScrolling]: !f }, r),
                                ref: c,
                                ...s,
                                children: (0, o.jsx)('div', { className: (0, u.clsx)(i.default.container, n), children: l }),
                            });
                        }),
                            (t.ScrollableContent = (0, l.forwardRef)((e, r) => (0, o.jsx)(t.ScrollableContentComponent, { forwardRef: r, ...e })));
                    },
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(l, 2));
                    },
                },
                a = {};
            function i(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return u[e].call(r.exports, r, r.exports, i), r.exports;
            }
            (i.d = (e, t) => {
                for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (i.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var s = {};
            (() => {
                Object.defineProperty(s, 'X', { value: !0 }), (s.t = void 0);
                var e = i(8429);
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
    },
]);
