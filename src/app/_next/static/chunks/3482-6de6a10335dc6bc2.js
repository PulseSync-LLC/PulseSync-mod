'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3482],
    {
        21784: (e, t, r) => {
            r.d(t, { Q: () => s, W: () => a });
            var n = r(74631);
            let s = (0, n.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function a() {
                return (0, n.useContext)(s);
            }
        },
        23818: (e, t, r) => {
            r.d(t, { Ab: () => x, _V: () => d });
            var n,
                s = r(33049),
                a = r(95759),
                i = r(6274),
                l = r(74631),
                o = {
                    5728: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        var n,
                            s,
                            a = r(810);
                        function i() {
                            return (i = Object.assign
                                ? Object.assign.bind()
                                : function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var r = arguments[t];
                                          for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                      }
                                      return e;
                                  }).apply(null, arguments);
                        }
                        let l = (0, a.forwardRef)(function (e, t) {
                            return a.createElement(
                                'svg',
                                i({ fill: 'none', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', ref: t }, e),
                                n ||
                                    (n = a.createElement(
                                        'g',
                                        { clipPath: 'url(#plusBadge_svg__a)' },
                                        a.createElement('path', { fill: 'url(#plusBadge_svg__b)', d: 'M0 0h24v24H0z' }),
                                        a.createElement('path', {
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                            d: 'm12.636 16.794 1.559-4.797h5.797a7.996 7.996 0 1 1-5.525-7.606l-1.822 5.607H7.324l-.65 1.999h5.322l-1.56 4.797h2.2Zm2.208-6.796 1.526-4.694a8.004 8.004 0 0 1 3.37 4.694h-4.896Z',
                                            fill: '#fff',
                                        }),
                                    )),
                                s ||
                                    (s = a.createElement(
                                        'defs',
                                        null,
                                        a.createElement(
                                            'linearGradient',
                                            { id: 'plusBadge_svg__b', x1: 0, y1: 10.4, x2: 24, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                            a.createElement('stop', { stopColor: '#FF5C4D' }),
                                            a.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                            a.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                                        ),
                                        a.createElement('clipPath', { id: 'plusBadge_svg__a' }, a.createElement('rect', { width: 24, height: 24, rx: 6, fill: '#fff' })),
                                    )),
                            );
                        });
                    },
                    9877: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        var n,
                            s,
                            a = r(810);
                        function i() {
                            return (i = Object.assign
                                ? Object.assign.bind()
                                : function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var r = arguments[t];
                                          for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                      }
                                      return e;
                                  }).apply(null, arguments);
                        }
                        let l = (0, a.forwardRef)(function (e, t) {
                            return a.createElement(
                                'svg',
                                i({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', ref: t }, e),
                                n ||
                                    (n = a.createElement(
                                        'g',
                                        { clipPath: 'url(#plusColor_svg__a)' },
                                        a.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                                        a.createElement('path', {
                                            fill: 'url(#plusColor_svg__b)',
                                            fillRule: 'evenodd',
                                            d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                            clipRule: 'evenodd',
                                        }),
                                    )),
                                s ||
                                    (s = a.createElement(
                                        'defs',
                                        null,
                                        a.createElement(
                                            'linearGradient',
                                            { id: 'plusColor_svg__b', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                            a.createElement('stop', { stopColor: '#FF5C4D' }),
                                            a.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                            a.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                                        ),
                                        a.createElement('clipPath', { id: 'plusColor_svg__a' }, a.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                                    )),
                            );
                        });
                    },
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (s && (s += ' '), (s += n));
                                            else for (r in t) t[r] && (s && (s += ' '), (s += r));
                                        return s;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => s }));
                        let s = n;
                    },
                    4257: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root_size_xxxs: 'Rkdd2vKC_3xa1eUdRdHP',
                            root_size_xxs: 'l3tE1hAMmBj2aoPPwU08',
                            root_size_xs: 'UwnL5AJBMMAp6NwMDdZk',
                            root_size_s: 'DzJFnuf7XgdkFh28JAsM',
                            root_size_m: 'o_v2ds2BaqtzAsRuCVjw',
                            root_size_l: 'YjRa1ZjM_lXFlrfS7jcu',
                            root_size_xl: 'Seq0GowcqQmiA9LdLP_g',
                            root_size_xxl: 'mfy69_BvBIamD0e22rCQ',
                            root_size_xxxl: 'JY1OniQewgW9iHgfllZS',
                        };
                    },
                    5763: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'qQ7GQU14EkggPBC6jdeS',
                            root_withContainPaint: 'rWaMH5WAcj6HcPXwO6_g',
                            root_fit_cover: 'fosYvyLDok3Kjj9OWmxG',
                            root_fit_contain: 'qq6y6t3GDqWHbY9QpSrd',
                            root_fit_fill: 'tqnS8b3151lnOu_CX7kk',
                            fallback: 'iha4fse_uYSR5XdCNFvU',
                            fallbackIcon: 'IXo8WeM40YvVigqgCP7J',
                            loading: 'POCNC8sLlvh3j1hU13Ct',
                            'gradient-horizontal': 'K2VhfffBoVbgaaugfOoH',
                        };
                    },
                    4490: (e, t, r) => {
                        (r.r(t), r.d(t, { DOWN: () => l, LEFT: () => s, RIGHT: () => a, UP: () => i, useSwipeable: () => d }));
                        var n = r(810);
                        let s = 'Left',
                            a = 'Right',
                            i = 'Up',
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
                            f = 'mousemove',
                            u = 'mouseup';
                        function x(e, t) {
                            if (0 === t) return e;
                            let r = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(r) + e[1] * Math.sin(r), e[1] * Math.cos(r) - e[0] * Math.sin(r)];
                        }
                        function d(e) {
                            var t, r, d;
                            let p,
                                { trackMouse: g } = e,
                                v = n.useRef(Object.assign({}, c)),
                                m = n.useRef(Object.assign({}, o)),
                                _ = n.useRef(Object.assign({}, m.current));
                            for (p in ((_.current = Object.assign({}, m.current)), (m.current = Object.assign(Object.assign({}, o), e)), o))
                                void 0 === m.current[p] && (m.current[p] = o[p]);
                            let [b, k] = n.useMemo(
                                () =>
                                    (function (e, t) {
                                        let r = (t) => {
                                                let r = 'touches' in t;
                                                (r && t.touches.length > 1) ||
                                                    e((e, s) => {
                                                        s.trackMouse && !r && (document.addEventListener(f, n), document.addEventListener(u, p));
                                                        let { clientX: a, clientY: i } = r ? t.touches[0] : t,
                                                            l = x([a, i], s.rotationAngle);
                                                        return (
                                                            s.onTouchStartOrOnMouseDown && s.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: l.slice(), xy: l, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            n = (t) => {
                                                e((e, r) => {
                                                    var n, c, f, u;
                                                    let d = 'touches' in t;
                                                    if (d && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > r.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: p, clientY: g } = d ? t.touches[0] : t,
                                                        [v, m] = x([p, g], r.rotationAngle),
                                                        _ = v - e.xy[0],
                                                        b = m - e.xy[1],
                                                        k = Math.abs(_),
                                                        E = Math.abs(b),
                                                        y = (t.timeStamp || 0) - e.start,
                                                        w = Math.sqrt(k * k + E * E) / (y || 1),
                                                        O = [_ / (y || 1), b / (y || 1)],
                                                        R = ((n = k), (c = E), (f = _), (u = b), n > c ? (f > 0 ? a : s) : u > 0 ? l : i),
                                                        j = 'number' == typeof r.delta ? r.delta : r.delta[R.toLowerCase()] || o.delta;
                                                    if (k < j && E < j && !e.swiping) return e;
                                                    let h = {
                                                        absX: k,
                                                        absY: E,
                                                        deltaX: _,
                                                        deltaY: b,
                                                        dir: R,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: w,
                                                        vxvy: O,
                                                    };
                                                    (h.first && r.onSwipeStart && r.onSwipeStart(h), r.onSwiping && r.onSwiping(h));
                                                    let N = !1;
                                                    return (
                                                        (r.onSwiping || r.onSwiped || r['onSwiped'.concat(R)]) && (N = !0),
                                                        N && r.preventScrollOnSwipe && r.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: h, swiping: !0 })
                                                    );
                                                });
                                            },
                                            d = (t) => {
                                                e((e, r) => {
                                                    let n;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < r.swipeDuration) {
                                                            ((n = Object.assign(Object.assign({}, e.eventData), { event: t })), r.onSwiped && r.onSwiped(n));
                                                            let s = r['onSwiped'.concat(n.dir)];
                                                            s && s(n);
                                                        }
                                                    } else r.onTap && r.onTap({ event: t });
                                                    return (
                                                        r.onTouchEndOrOnMouseUp && r.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: n })
                                                    );
                                                });
                                            },
                                            p = (e) => {
                                                (document.removeEventListener(f, n), document.removeEventListener(u, p), d(e));
                                            },
                                            g = (e, t) => {
                                                let s = () => {};
                                                if (e && e.addEventListener) {
                                                    let a = Object.assign(Object.assign({}, o.touchEventOptions), t.touchEventOptions),
                                                        i = [
                                                            ['touchstart', r, a],
                                                            ['touchmove', n, Object.assign(Object.assign({}, a), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', d, a],
                                                        ];
                                                    (i.forEach((t) => {
                                                        let [r, n, s] = t;
                                                        return e.addEventListener(r, n, s);
                                                    }),
                                                        (s = () =>
                                                            i.forEach((t) => {
                                                                let [r, n] = t;
                                                                return e.removeEventListener(r, n);
                                                            })));
                                                }
                                                return s;
                                            },
                                            v = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, r) => {
                                                            if (e.el === t) return e;
                                                            let n = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                                                r.trackTouch && t && (n.cleanUpTouch = g(t, r)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), n)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (v.onMouseDown = r), [v, g]);
                                    })((e) => (v.current = e(v.current, m.current)), { trackMouse: g }),
                                [g],
                            );
                            return (
                                (t = v.current),
                                (r = m.current),
                                (d = _.current),
                                (v.current =
                                    r.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? r.preventScrollOnSwipe !== d.preventScrollOnSwipe || r.touchEventOptions.passive !== d.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: k(t.el, r) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: k(t.el, r) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                b
                            );
                        }
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var s = null;
                            if ((void 0 !== n && (s = '' + n), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: r, type: e, key: s, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5282: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'addToPlaylist_xxs', xlinkHref: '/icons/sprite.svg#addToPlaylist_xxs' }),
                            ]);
                        });
                    },
                    6150: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'add_l', xlinkHref: '/icons/sprite.svg#add_l' }),
                            ]);
                        });
                    },
                    3735: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'add_xxs', xlinkHref: '/icons/sprite.svg#add_xxs' }),
                            ]);
                        });
                    },
                    7177: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'add_xxxs', xlinkHref: '/icons/sprite.svg#add_xxxs' }),
                            ]);
                        });
                    },
                    6970: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'adult_s', xlinkHref: '/icons/sprite.svg#adult_s' }),
                            ]);
                        });
                    },
                    4121: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'adult_xs', xlinkHref: '/icons/sprite.svg#adult_xs' }),
                            ]);
                        });
                    },
                    4920: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'adult_xxs', xlinkHref: '/icons/sprite.svg#adult_xxs' }),
                            ]);
                        });
                    },
                    8897: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'adult_xxxs', xlinkHref: '/icons/sprite.svg#adult_xxxs' }),
                            ]);
                        });
                    },
                    3848: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_l', xlinkHref: '/icons/sprite.svg#album_l' }),
                            ]);
                        });
                    },
                    7397: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_s', xlinkHref: '/icons/sprite.svg#album_s' }),
                            ]);
                        });
                    },
                    4348: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_xl', xlinkHref: '/icons/sprite.svg#album_xl' }),
                            ]);
                        });
                    },
                    4227: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_xs', xlinkHref: '/icons/sprite.svg#album_xs' }),
                            ]);
                        });
                    },
                    3512: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'album_xxs', xlinkHref: '/icons/sprite.svg#album_xxs' }),
                            ]);
                        });
                    },
                    7581: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowDown_xs', xlinkHref: '/icons/sprite.svg#arrowDown_xs' }),
                            ]);
                        });
                    },
                    205: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowDown_xxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxs' }),
                            ]);
                        });
                    },
                    3691: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowDown_xxxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxxs' }),
                            ]);
                        });
                    },
                    8705: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowLeft_xs', xlinkHref: '/icons/sprite.svg#arrowLeft_xs' }),
                            ]);
                        });
                    },
                    9400: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowLeft_xxs', xlinkHref: '/icons/sprite.svg#arrowLeft_xxs' }),
                            ]);
                        });
                    },
                    5993: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowRight_xs', xlinkHref: '/icons/sprite.svg#arrowRight_xs' }),
                            ]);
                        });
                    },
                    7423: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowRight_xxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxs' }),
                            ]);
                        });
                    },
                    2402: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'arrowRight_xxxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxxs' }),
                            ]);
                        });
                    },
                    249: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'artist_xxs', xlinkHref: '/icons/sprite.svg#artist_xxs' }),
                            ]);
                        });
                    },
                    5543: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'attention_xxl', xlinkHref: '/icons/sprite.svg#attention_xxl' }),
                            ]);
                        });
                    },
                    3057: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'attention_xxxl', xlinkHref: '/icons/sprite.svg#attention_xxxl' }),
                            ]);
                        });
                    },
                    3715: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'bandlink', xlinkHref: '/icons/sprite.svg#bandlink' }),
                            ]);
                        });
                    },
                    7457: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'bucket_xxs', xlinkHref: '/icons/sprite.svg#bucket_xxs' }),
                            ]);
                        });
                    },
                    3902: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'cast_xs', xlinkHref: '/icons/sprite.svg#cast_xs' }),
                            ]);
                        });
                    },
                    9608: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chain_xs', xlinkHref: '/icons/sprite.svg#chain_xs' }),
                            ]);
                        });
                    },
                    2540: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chain_xxs', xlinkHref: '/icons/sprite.svg#chain_xxs' }),
                            ]);
                        });
                    },
                    5093: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chartDown_xxs', xlinkHref: '/icons/sprite.svg#chartDown_xxs' }),
                            ]);
                        });
                    },
                    5791: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chartNew_xxs', xlinkHref: '/icons/sprite.svg#chartNew_xxs' }),
                            ]);
                        });
                    },
                    1027: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chartSame_xxs', xlinkHref: '/icons/sprite.svg#chartSame_xxs' }),
                            ]);
                        });
                    },
                    6276: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'chartUp_xxs', xlinkHref: '/icons/sprite.svg#chartUp_xxs' }),
                            ]);
                        });
                    },
                    6311: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'check_xs', xlinkHref: '/icons/sprite.svg#check_xs' }),
                            ]);
                        });
                    },
                    272: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'check_xxl', xlinkHref: '/icons/sprite.svg#check_xxl' }),
                            ]);
                        });
                    },
                    154: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'check_xxs', xlinkHref: '/icons/sprite.svg#check_xxs' }),
                            ]);
                        });
                    },
                    1557: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'check_xxxs', xlinkHref: '/icons/sprite.svg#check_xxxs' }),
                            ]);
                        });
                    },
                    8836: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'clip_xl', xlinkHref: '/icons/sprite.svg#clip_xl' }),
                            ]);
                        });
                    },
                    2866: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'clip_xxs', xlinkHref: '/icons/sprite.svg#clip_xxs' }),
                            ]);
                        });
                    },
                    1595: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'close_filled_xs', xlinkHref: '/icons/sprite.svg#close_filled_xs' }),
                            ]);
                        });
                    },
                    6547: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'close_xs', xlinkHref: '/icons/sprite.svg#close_xs' }),
                            ]);
                        });
                    },
                    4777: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'close_xxs', xlinkHref: '/icons/sprite.svg#close_xxs' }),
                            ]);
                        });
                    },
                    9271: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'close_xxxs', xlinkHref: '/icons/sprite.svg#close_xxxs' }),
                            ]);
                        });
                    },
                    2390: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'code_xxs', xlinkHref: '/icons/sprite.svg#code_xxs' }),
                            ]);
                        });
                    },
                    4717: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'collections_m', xlinkHref: '/icons/sprite.svg#collections_m' }),
                            ]);
                        });
                    },
                    5561: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'collections_selected_m', xlinkHref: '/icons/sprite.svg#collections_selected_m' }),
                            ]);
                        });
                    },
                    7656: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_l', xlinkHref: '/icons/sprite.svg#complain_l' }),
                            ]);
                        });
                    },
                    2777: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_m', xlinkHref: '/icons/sprite.svg#complain_m' }),
                            ]);
                        });
                    },
                    2364: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_s', xlinkHref: '/icons/sprite.svg#complain_s' }),
                            ]);
                        });
                    },
                    6823: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xl', xlinkHref: '/icons/sprite.svg#complain_xl' }),
                            ]);
                        });
                    },
                    4955: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xs', xlinkHref: '/icons/sprite.svg#complain_xs' }),
                            ]);
                        });
                    },
                    5842: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xxl', xlinkHref: '/icons/sprite.svg#complain_xxl' }),
                            ]);
                        });
                    },
                    7067: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xxs', xlinkHref: '/icons/sprite.svg#complain_xxs' }),
                            ]);
                        });
                    },
                    4247: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xxxl', xlinkHref: '/icons/sprite.svg#complain_xxxl' }),
                            ]);
                        });
                    },
                    4941: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'complain_xxxs', xlinkHref: '/icons/sprite.svg#complain_xxxs' }),
                            ]);
                        });
                    },
                    3790: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'crown_xxs', xlinkHref: '/icons/sprite.svg#crown_xxs' }),
                            ]);
                        });
                    },
                    8202: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'dislike_s', xlinkHref: '/icons/sprite.svg#dislike_s' }),
                            ]);
                        });
                    },
                    2528: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'dislike_xs', xlinkHref: '/icons/sprite.svg#dislike_xs' }),
                            ]);
                        });
                    },
                    2901: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'dislike_xxs', xlinkHref: '/icons/sprite.svg#dislike_xxs' }),
                            ]);
                        });
                    },
                    1552: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'disliked_s', xlinkHref: '/icons/sprite.svg#disliked_s' }),
                            ]);
                        });
                    },
                    8499: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'disliked_xs', xlinkHref: '/icons/sprite.svg#disliked_xs' }),
                            ]);
                        });
                    },
                    6682: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'disliked_xxs', xlinkHref: '/icons/sprite.svg#disliked_xxs' }),
                            ]);
                        });
                    },
                    20: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'donation_xxxs', xlinkHref: '/icons/sprite.svg#donation_xxxs' }),
                            ]);
                        });
                    },
                    1605: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'download_l', xlinkHref: '/icons/sprite.svg#download_l' }),
                            ]);
                        });
                    },
                    9299: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'download_xxs', xlinkHref: '/icons/sprite.svg#download_xxs' }),
                            ]);
                        });
                    },
                    1126: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'downloaded_xxs', xlinkHref: '/icons/sprite.svg#downloaded_xxs' }),
                            ]);
                        });
                    },
                    5294: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'dragDots_xxs', xlinkHref: '/icons/sprite.svg#dragDots_xxs' }),
                            ]);
                        });
                    },
                    9551: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'edit_xxs', xlinkHref: '/icons/sprite.svg#edit_xxs' }),
                            ]);
                        });
                    },
                    6070: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'exclamation_s', xlinkHref: '/icons/sprite.svg#exclamation_s' }),
                            ]);
                        });
                    },
                    837: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'exclamation_xs', xlinkHref: '/icons/sprite.svg#exclamation_xs' }),
                            ]);
                        });
                    },
                    1578: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'exclamation_xxs', xlinkHref: '/icons/sprite.svg#exclamation_xxs' }),
                            ]);
                        });
                    },
                    8871: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'exclamation_xxxs', xlinkHref: '/icons/sprite.svg#exclamation_xxxs' }),
                            ]);
                        });
                    },
                    2098: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'explicit_s', xlinkHref: '/icons/sprite.svg#explicit_s' }),
                            ]);
                        });
                    },
                    4623: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'explicit_xs', xlinkHref: '/icons/sprite.svg#explicit_xs' }),
                            ]);
                        });
                    },
                    1654: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'explicit_xxs', xlinkHref: '/icons/sprite.svg#explicit_xxs' }),
                            ]);
                        });
                    },
                    6639: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'explicit_xxxs', xlinkHref: '/icons/sprite.svg#explicit_xxxs' }),
                            ]);
                        });
                    },
                    7162: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'eye_crossed_xxs', xlinkHref: '/icons/sprite.svg#eye_crossed_xxs' }),
                            ]);
                        });
                    },
                    2756: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'filter_xs', xlinkHref: '/icons/sprite.svg#filter_xs' }),
                            ]);
                        });
                    },
                    9807: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'filter_xxs', xlinkHref: '/icons/sprite.svg#filter_xxs' }),
                            ]);
                        });
                    },
                    8473: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'fullscreen_xs', xlinkHref: '/icons/sprite.svg#fullscreen_xs' }),
                            ]);
                        });
                    },
                    9833: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'gift_xxs', xlinkHref: '/icons/sprite.svg#gift_xxs' }),
                            ]);
                        });
                    },
                    3286: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'googlePlay', xlinkHref: '/icons/sprite.svg#googlePlay' }),
                            ]);
                        });
                    },
                    3003: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'history_m', xlinkHref: '/icons/sprite.svg#history_m' }),
                            ]);
                        });
                    },
                    4561: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'home_m', xlinkHref: '/icons/sprite.svg#home_m' }),
                            ]);
                        });
                    },
                    4355: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'home_selected_m', xlinkHref: '/icons/sprite.svg#home_selected_m' }),
                            ]);
                        });
                    },
                    3331: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'huaweiAppGallery', xlinkHref: '/icons/sprite.svg#huaweiAppGallery' }),
                            ]);
                        });
                    },
                    7662: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'infinity_xs', xlinkHref: '/icons/sprite.svg#infinity_xs' }),
                            ]);
                        });
                    },
                    4959: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'info_xxs', xlinkHref: '/icons/sprite.svg#info_xxs' }),
                            ]);
                        });
                    },
                    9642: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'kids_m', xlinkHref: '/icons/sprite.svg#kids_m' }),
                            ]);
                        });
                    },
                    2244: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'kids_selected_m', xlinkHref: '/icons/sprite.svg#kids_selected_m' }),
                            ]);
                        });
                    },
                    7722: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'kinopoiskEn', xlinkHref: '/icons/sprite.svg#kinopoiskEn' }),
                            ]);
                        });
                    },
                    362: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'kinopoiskRu', xlinkHref: '/icons/sprite.svg#kinopoiskRu' }),
                            ]);
                        });
                    },
                    2086: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lightning_xxs', xlinkHref: '/icons/sprite.svg#lightning_xxs' }),
                            ]);
                        });
                    },
                    5035: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'likeVariant_xxs', xlinkHref: '/icons/sprite.svg#likeVariant_xxs' }),
                            ]);
                        });
                    },
                    1423: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'like_l', xlinkHref: '/icons/sprite.svg#like_l' }),
                            ]);
                        });
                    },
                    2845: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'like_m', xlinkHref: '/icons/sprite.svg#like_m' }),
                            ]);
                        });
                    },
                    4933: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'like_xs', xlinkHref: '/icons/sprite.svg#like_xs' }),
                            ]);
                        });
                    },
                    835: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'like_xxs', xlinkHref: '/icons/sprite.svg#like_xxs' }),
                            ]);
                        });
                    },
                    6707: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'likedVariant_s', xlinkHref: '/icons/sprite.svg#likedVariant_s' }),
                            ]);
                        });
                    },
                    6036: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'likedVariant_xxs', xlinkHref: '/icons/sprite.svg#likedVariant_xxs' }),
                            ]);
                        });
                    },
                    9503: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'liked_m', xlinkHref: '/icons/sprite.svg#liked_m' }),
                            ]);
                        });
                    },
                    2138: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'liked_xs', xlinkHref: '/icons/sprite.svg#liked_xs' }),
                            ]);
                        });
                    },
                    7526: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'liked_xxs', xlinkHref: '/icons/sprite.svg#liked_xxs' }),
                            ]);
                        });
                    },
                    9130: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'link_rounded_xxs', xlinkHref: '/icons/sprite.svg#link_rounded_xxs' }),
                            ]);
                        });
                    },
                    9825: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'link_xxs', xlinkHref: '/icons/sprite.svg#link_xxs' }),
                            ]);
                        });
                    },
                    8426: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'listen_xxxs', xlinkHref: '/icons/sprite.svg#listen_xxxs' }),
                            ]);
                        });
                    },
                    3791: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'liteVersion_xs', xlinkHref: '/icons/sprite.svg#liteVersion_xs' }),
                            ]);
                        });
                    },
                    7419: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lock_m', xlinkHref: '/icons/sprite.svg#lock_m' }),
                            ]);
                        });
                    },
                    9376: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lock_xs', xlinkHref: '/icons/sprite.svg#lock_xs' }),
                            ]);
                        });
                    },
                    2506: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lock_xxs', xlinkHref: '/icons/sprite.svg#lock_xxs' }),
                            ]);
                        });
                    },
                    3708: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'lyrics_xxs', xlinkHref: '/icons/sprite.svg#lyrics_xxs' }),
                            ]);
                        });
                    },
                    6407: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'macos', xlinkHref: '/icons/sprite.svg#macos' }),
                            ]);
                        });
                    },
                    5200: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'macos_xxs', xlinkHref: '/icons/sprite.svg#macos_xxs' }),
                            ]);
                        });
                    },
                    513: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'menuArrow_xxs', xlinkHref: '/icons/sprite.svg#menuArrow_xxs' }),
                            ]);
                        });
                    },
                    4374: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'moreOutlined_xxs', xlinkHref: '/icons/sprite.svg#moreOutlined_xxs' }),
                            ]);
                        });
                    },
                    6393: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'moreOutlined_xxxs', xlinkHref: '/icons/sprite.svg#moreOutlined_xxxs' }),
                            ]);
                        });
                    },
                    2570: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'more_m', xlinkHref: '/icons/sprite.svg#more_m' }),
                            ]);
                        });
                    },
                    6465: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'more_xs', xlinkHref: '/icons/sprite.svg#more_xs' }),
                            ]);
                        });
                    },
                    6760: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'more_xxs', xlinkHref: '/icons/sprite.svg#more_xxs' }),
                            ]);
                        });
                    },
                    740: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogo', xlinkHref: '/icons/sprite.svg#musicLogo' }),
                            ]);
                        });
                    },
                    2747: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogoCenterEn', xlinkHref: '/icons/sprite.svg#musicLogoCenterEn' }),
                            ]);
                        });
                    },
                    3590: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogoCenterRu', xlinkHref: '/icons/sprite.svg#musicLogoCenterRu' }),
                            ]);
                        });
                    },
                    5656: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogoLeftEn', xlinkHref: '/icons/sprite.svg#musicLogoLeftEn' }),
                            ]);
                        });
                    },
                    9723: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'musicLogoLeftRu', xlinkHref: '/icons/sprite.svg#musicLogoLeftRu' }),
                            ]);
                        });
                    },
                    3725: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationCollection_selected_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_selected_xs' }),
                            ]);
                        });
                    },
                    3982: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationCollection_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_xs' }),
                            ]);
                        });
                    },
                    2410: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationConcerts_selected_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_selected_xs' }),
                            ]);
                        });
                    },
                    7516: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationConcerts_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_xs' }),
                            ]);
                        });
                    },
                    3270: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', {
                                    key: 'navigationForYouAndTrends_selected_xs',
                                    xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_selected_xs',
                                }),
                            ]);
                        });
                    },
                    1581: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationForYouAndTrends_xs', xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_xs' }),
                            ]);
                        });
                    },
                    6586: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationKids_selected_xs', xlinkHref: '/icons/sprite.svg#navigationKids_selected_xs' }),
                            ]);
                        });
                    },
                    473: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationKids_xs', xlinkHref: '/icons/sprite.svg#navigationKids_xs' }),
                            ]);
                        });
                    },
                    7145: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationMuzmarket_m', xlinkHref: '/icons/sprite.svg#navigationMuzmarket_m' }),
                            ]);
                        });
                    },
                    553: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationMuzmarket_xs', xlinkHref: '/icons/sprite.svg#navigationMuzmarket_xs' }),
                            ]);
                        });
                    },
                    9697: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationMyVibeNDA_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibeNDA_xs' }),
                            ]);
                        });
                    },
                    49: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationMyVibe_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibe_xs' }),
                            ]);
                        });
                    },
                    4085: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationNonMusic_selected_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_selected_xs' }),
                            ]);
                        });
                    },
                    9954: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationNonMusic_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_xs' }),
                            ]);
                        });
                    },
                    4281: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationPlus_xs', xlinkHref: '/icons/sprite.svg#navigationPlus_xs' }),
                            ]);
                        });
                    },
                    1568: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'navigationSearch_xs', xlinkHref: '/icons/sprite.svg#navigationSearch_xs' }),
                            ]);
                        });
                    },
                    2554: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'next_xs', xlinkHref: '/icons/sprite.svg#next_xs' }),
                            ]);
                        });
                    },
                    4400: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'next_xxl', xlinkHref: '/icons/sprite.svg#next_xxl' }),
                            ]);
                        });
                    },
                    8803: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'next_xxs', xlinkHref: '/icons/sprite.svg#next_xxs' }),
                            ]);
                        });
                    },
                    2060: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'non_music_m', xlinkHref: '/icons/sprite.svg#non_music_m' }),
                            ]);
                        });
                    },
                    5407: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'non_music_selected_m', xlinkHref: '/icons/sprite.svg#non_music_selected_m' }),
                            ]);
                        });
                    },
                    4526: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_l', xlinkHref: '/icons/sprite.svg#note_l' }),
                            ]);
                        });
                    },
                    6187: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_m', xlinkHref: '/icons/sprite.svg#note_m' }),
                            ]);
                        });
                    },
                    2020: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_s', xlinkHref: '/icons/sprite.svg#note_s' }),
                            ]);
                        });
                    },
                    1235: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_xl', xlinkHref: '/icons/sprite.svg#note_xl' }),
                            ]);
                        });
                    },
                    5108: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_xs', xlinkHref: '/icons/sprite.svg#note_xs' }),
                            ]);
                        });
                    },
                    9119: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_xxs', xlinkHref: '/icons/sprite.svg#note_xxs' }),
                            ]);
                        });
                    },
                    3581: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'note_xxxs', xlinkHref: '/icons/sprite.svg#note_xxxs' }),
                            ]);
                        });
                    },
                    9189: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'offline_xxl', xlinkHref: '/icons/sprite.svg#offline_xxl' }),
                            ]);
                        });
                    },
                    7488: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause', xlinkHref: '/icons/sprite.svg#pause' }),
                            ]);
                        });
                    },
                    5879: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pauseVibe_s', xlinkHref: '/icons/sprite.svg#pauseVibe_s' }),
                            ]);
                        });
                    },
                    3908: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_l', xlinkHref: '/icons/sprite.svg#pause_filled_l' }),
                            ]);
                        });
                    },
                    3728: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_m', xlinkHref: '/icons/sprite.svg#pause_filled_m' }),
                            ]);
                        });
                    },
                    1540: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_xl', xlinkHref: '/icons/sprite.svg#pause_filled_xl' }),
                            ]);
                        });
                    },
                    8972: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_xs', xlinkHref: '/icons/sprite.svg#pause_filled_xs' }),
                            ]);
                        });
                    },
                    9051: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_filled_xxl', xlinkHref: '/icons/sprite.svg#pause_filled_xxl' }),
                            ]);
                        });
                    },
                    8831: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_m', xlinkHref: '/icons/sprite.svg#pause_m' }),
                            ]);
                        });
                    },
                    3874: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_xs', xlinkHref: '/icons/sprite.svg#pause_xs' }),
                            ]);
                        });
                    },
                    8406: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pause_xxs', xlinkHref: '/icons/sprite.svg#pause_xxs' }),
                            ]);
                        });
                    },
                    7525: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pencil_xxs', xlinkHref: '/icons/sprite.svg#pencil_xxs' }),
                            ]);
                        });
                    },
                    2629: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'picture_s', xlinkHref: '/icons/sprite.svg#picture_s' }),
                            ]);
                        });
                    },
                    7514: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'picture_xl', xlinkHref: '/icons/sprite.svg#picture_xl' }),
                            ]);
                        });
                    },
                    4338: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'picture_xs', xlinkHref: '/icons/sprite.svg#picture_xs' }),
                            ]);
                        });
                    },
                    3310: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pin_filled_xs', xlinkHref: '/icons/sprite.svg#pin_filled_xs' }),
                            ]);
                        });
                    },
                    9180: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pin_filled_xxs', xlinkHref: '/icons/sprite.svg#pin_filled_xxs' }),
                            ]);
                        });
                    },
                    6179: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pin_xs', xlinkHref: '/icons/sprite.svg#pin_xs' }),
                            ]);
                        });
                    },
                    6286: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'pin_xxs', xlinkHref: '/icons/sprite.svg#pin_xxs' }),
                            ]);
                        });
                    },
                    7288: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play', xlinkHref: '/icons/sprite.svg#play' }),
                            ]);
                        });
                    },
                    85: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playLast_xxs', xlinkHref: '/icons/sprite.svg#playLast_xxs' }),
                            ]);
                        });
                    },
                    3686: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playNext_xxs', xlinkHref: '/icons/sprite.svg#playNext_xxs' }),
                            ]);
                        });
                    },
                    7833: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playQueue_m', xlinkHref: '/icons/sprite.svg#playQueue_m' }),
                            ]);
                        });
                    },
                    2023: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playQueue_xs', xlinkHref: '/icons/sprite.svg#playQueue_xs' }),
                            ]);
                        });
                    },
                    6758: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playQueue_xxs', xlinkHref: '/icons/sprite.svg#playQueue_xxs' }),
                            ]);
                        });
                    },
                    7863: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playVibe_s', xlinkHref: '/icons/sprite.svg#playVibe_s' }),
                            ]);
                        });
                    },
                    759: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_l', xlinkHref: '/icons/sprite.svg#play_filled_l' }),
                            ]);
                        });
                    },
                    5310: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_m', xlinkHref: '/icons/sprite.svg#play_filled_m' }),
                            ]);
                        });
                    },
                    221: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_xl', xlinkHref: '/icons/sprite.svg#play_filled_xl' }),
                            ]);
                        });
                    },
                    2855: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_xs', xlinkHref: '/icons/sprite.svg#play_filled_xs' }),
                            ]);
                        });
                    },
                    2551: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_filled_xxl', xlinkHref: '/icons/sprite.svg#play_filled_xxl' }),
                            ]);
                        });
                    },
                    727: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_m', xlinkHref: '/icons/sprite.svg#play_m' }),
                            ]);
                        });
                    },
                    1516: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_xs', xlinkHref: '/icons/sprite.svg#play_xs' }),
                            ]);
                        });
                    },
                    9095: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_xxs', xlinkHref: '/icons/sprite.svg#play_xxs' }),
                            ]);
                        });
                    },
                    9556: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'play_xxxs', xlinkHref: '/icons/sprite.svg#play_xxxs' }),
                            ]);
                        });
                    },
                    206: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playlist_s', xlinkHref: '/icons/sprite.svg#playlist_s' }),
                            ]);
                        });
                    },
                    9139: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playlist_xl', xlinkHref: '/icons/sprite.svg#playlist_xl' }),
                            ]);
                        });
                    },
                    8642: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'playlist_xs', xlinkHref: '/icons/sprite.svg#playlist_xs' }),
                            ]);
                        });
                    },
                    6623: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'plus', xlinkHref: '/icons/sprite.svg#plus' }),
                            ]);
                        });
                    },
                    839: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'plusOutlined', xlinkHref: '/icons/sprite.svg#plusOutlined' }),
                            ]);
                        });
                    },
                    3739: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'plusOutlined_m', xlinkHref: '/icons/sprite.svg#plusOutlined_m' }),
                            ]);
                        });
                    },
                    4544: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'podcasts_xxs', xlinkHref: '/icons/sprite.svg#podcasts_xxs' }),
                            ]);
                        });
                    },
                    5079: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'previous_xs', xlinkHref: '/icons/sprite.svg#previous_xs' }),
                            ]);
                        });
                    },
                    2913: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'previous_xxl', xlinkHref: '/icons/sprite.svg#previous_xxl' }),
                            ]);
                        });
                    },
                    8454: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'previous_xxs', xlinkHref: '/icons/sprite.svg#previous_xxs' }),
                            ]);
                        });
                    },
                    139: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'repeat_one_xs', xlinkHref: '/icons/sprite.svg#repeat_one_xs' }),
                            ]);
                        });
                    },
                    2744: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'repeat_one_xxs', xlinkHref: '/icons/sprite.svg#repeat_one_xxs' }),
                            ]);
                        });
                    },
                    7719: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'repeat_xs', xlinkHref: '/icons/sprite.svg#repeat_xs' }),
                            ]);
                        });
                    },
                    9498: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'repeat_xxs', xlinkHref: '/icons/sprite.svg#repeat_xxs' }),
                            ]);
                        });
                    },
                    825: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'reset_xxs', xlinkHref: '/icons/sprite.svg#reset_xxs' }),
                            ]);
                        });
                    },
                    3893: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'reset_xxxs', xlinkHref: '/icons/sprite.svg#reset_xxxs' }),
                            ]);
                        });
                    },
                    8959: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'rewindBackwards_xs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xs' }),
                            ]);
                        });
                    },
                    1686: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'rewindBackwards_xxs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xxs' }),
                            ]);
                        });
                    },
                    852: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'rewindForward_xs', xlinkHref: '/icons/sprite.svg#rewindForward_xs' }),
                            ]);
                        });
                    },
                    9322: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'rewindForward_xxs', xlinkHref: '/icons/sprite.svg#rewindForward_xxs' }),
                            ]);
                        });
                    },
                    1798: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ruble_m', xlinkHref: '/icons/sprite.svg#ruble_m' }),
                            ]);
                        });
                    },
                    2187: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ruble_xxs', xlinkHref: '/icons/sprite.svg#ruble_xxs' }),
                            ]);
                        });
                    },
                    1764: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ruble_xxxs', xlinkHref: '/icons/sprite.svg#ruble_xxxs' }),
                            ]);
                        });
                    },
                    3753: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_l', xlinkHref: '/icons/sprite.svg#search_l' }),
                            ]);
                        });
                    },
                    3222: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_m', xlinkHref: '/icons/sprite.svg#search_m' }),
                            ]);
                        });
                    },
                    6230: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_selected_m', xlinkHref: '/icons/sprite.svg#search_selected_m' }),
                            ]);
                        });
                    },
                    4380: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_xs', xlinkHref: '/icons/sprite.svg#search_xs' }),
                            ]);
                        });
                    },
                    8002: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'search_xxl', xlinkHref: '/icons/sprite.svg#search_xxl' }),
                            ]);
                        });
                    },
                    4553: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'settings_xs', xlinkHref: '/icons/sprite.svg#settings_xs' }),
                            ]);
                        });
                    },
                    // for PulseSync: BEGIN settings gear SVG component
                    9901: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'settingsGear_xs', xlinkHref: '/icons/sprite.svg#settingsGear_xs' }),
                            ]);
                        });
                    },
                    // for PulseSync: END settings gear SVG component
                    7241: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'settings_xxs', xlinkHref: '/icons/sprite.svg#settings_xxs' }),
                            ]);
                        });
                    },
                    9620: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'share_m', xlinkHref: '/icons/sprite.svg#share_m' }),
                            ]);
                        });
                    },
                    1655: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'share_xxs', xlinkHref: '/icons/sprite.svg#share_xxs' }),
                            ]);
                        });
                    },
                    7873: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'shuffle_xs', xlinkHref: '/icons/sprite.svg#shuffle_xs' }),
                            ]);
                        });
                    },
                    1506: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'shuffle_xxs', xlinkHref: '/icons/sprite.svg#shuffle_xxs' }),
                            ]);
                        });
                    },
                    6898: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'site_xs', xlinkHref: '/icons/sprite.svg#site_xs' }),
                            ]);
                        });
                    },
                    9879: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_25x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_m' }),
                            ]);
                        });
                    },
                    3278: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_25x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_xs' }),
                            ]);
                        });
                    },
                    2705: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_25x_l', xlinkHref: '/icons/sprite.svg#speed_1_25x_l' }),
                            ]);
                        });
                    },
                    4484: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_5x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_m' }),
                            ]);
                        });
                    },
                    1468: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_5x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_xs' }),
                            ]);
                        });
                    },
                    8671: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_5x_l', xlinkHref: '/icons/sprite.svg#speed_1_5x_l' }),
                            ]);
                        });
                    },
                    2922: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_75x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_m' }),
                            ]);
                        });
                    },
                    8279: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_75x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_xs' }),
                            ]);
                        });
                    },
                    6413: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1_75x_l', xlinkHref: '/icons/sprite.svg#speed_1_75x_l' }),
                            ]);
                        });
                    },
                    2434: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1x_centered_m' }),
                            ]);
                        });
                    },
                    9074: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1x_centered_xs' }),
                            ]);
                        });
                    },
                    8254: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_1x_l', xlinkHref: '/icons/sprite.svg#speed_1x_l' }),
                            ]);
                        });
                    },
                    9173: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_2x_centered_m', xlinkHref: '/icons/sprite.svg#speed_2x_centered_m' }),
                            ]);
                        });
                    },
                    182: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_2x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_2x_centered_xs' }),
                            ]);
                        });
                    },
                    8297: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'speed_2x_l', xlinkHref: '/icons/sprite.svg#speed_2x_l' }),
                            ]);
                        });
                    },
                    9711: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'syncLyrics_m', xlinkHref: '/icons/sprite.svg#syncLyrics_m' }),
                            ]);
                        });
                    },
                    8056: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'syncLyrics_xs', xlinkHref: '/icons/sprite.svg#syncLyrics_xs' }),
                            ]);
                        });
                    },
                    2764: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'syncLyrics_xxs', xlinkHref: '/icons/sprite.svg#syncLyrics_xxs' }),
                            ]);
                        });
                    },
                    8353: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'thumbDown_xs', xlinkHref: '/icons/sprite.svg#thumbDown_xs' }),
                            ]);
                        });
                    },
                    7193: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'thumbDown_xxs', xlinkHref: '/icons/sprite.svg#thumbDown_xxs' }),
                            ]);
                        });
                    },
                    3293: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'thumbUp_xs', xlinkHref: '/icons/sprite.svg#thumbUp_xs' }),
                            ]);
                        });
                    },
                    9748: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'thumbUp_xxs', xlinkHref: '/icons/sprite.svg#thumbUp_xxs' }),
                            ]);
                        });
                    },
                    6374: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ticket_m', xlinkHref: '/icons/sprite.svg#ticket_m' }),
                            ]);
                        });
                    },
                    1116: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'ticket_selected_m', xlinkHref: '/icons/sprite.svg#ticket_selected_m' }),
                            ]);
                        });
                    },
                    2378: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'trailer_xs', xlinkHref: '/icons/sprite.svg#trailer_xs' }),
                            ]);
                        });
                    },
                    7377: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'trailer_xxs', xlinkHref: '/icons/sprite.svg#trailer_xxs' }),
                            ]);
                        });
                    },
                    7960: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'twoUsers_xxs', xlinkHref: '/icons/sprite.svg#twoUsers_xxs' }),
                            ]);
                        });
                    },
                    9938: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'unavailable_xl', xlinkHref: '/icons/sprite.svg#unavailable_xl' }),
                            ]);
                        });
                    },
                    9261: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'unavailable_xs', xlinkHref: '/icons/sprite.svg#unavailable_xs' }),
                            ]);
                        });
                    },
                    701: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'unpin_xxs', xlinkHref: '/icons/sprite.svg#unpin_xxs' }),
                            ]);
                        });
                    },
                    1484: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'upload_xxs', xlinkHref: '/icons/sprite.svg#upload_xxs' }),
                            ]);
                        });
                    },
                    8382: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'users_xxxs', xlinkHref: '/icons/sprite.svg#users_xxxs' }),
                            ]);
                        });
                    },
                    582: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'vibe_xxs', xlinkHref: '/icons/sprite.svg#vibe_xxs' }),
                            ]);
                        });
                    },
                    1786: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'volumeOff_xs', xlinkHref: '/icons/sprite.svg#volumeOff_xs' }),
                            ]);
                        });
                    },
                    4527: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'volume_xs', xlinkHref: '/icons/sprite.svg#volume_xs' }),
                            ]);
                        });
                    },
                    4298: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'windows', xlinkHref: '/icons/sprite.svg#windows' }),
                            ]);
                        });
                    },
                    4419: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'windows_xs', xlinkHref: '/icons/sprite.svg#windows_xs' }),
                            ]);
                        });
                    },
                    790: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexBooksEn', xlinkHref: '/icons/sprite.svg#yandexBooksEn' }),
                            ]);
                        });
                    },
                    9342: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexBooksRu', xlinkHref: '/icons/sprite.svg#yandexBooksRu' }),
                            ]);
                        });
                    },
                    4403: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexPayEn', xlinkHref: '/icons/sprite.svg#yandexPayEn' }),
                            ]);
                        });
                    },
                    4960: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexPayRu', xlinkHref: '/icons/sprite.svg#yandexPayRu' }),
                            ]);
                        });
                    },
                    1601: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexPlusEn', xlinkHref: '/icons/sprite.svg#yandexPlusEn' }),
                            ]);
                        });
                    },
                    8163: (e, t, r) => {
                        var n = r(810);
                        e.exports = n.forwardRef(function (e, t) {
                            return n.createElement('svg', Object.assign({}, e, { ref: t }), [
                                n.createElement('use', { key: 'yandexPlusRu', xlinkHref: '/icons/sprite.svg#yandexPlusRu' }),
                            ]);
                        });
                    },
                    9580: (e, t, r) => {
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
                        var n = r(189);
                        Object.defineProperty(t, 'useForwardRef', {
                            enumerable: !0,
                            get: function () {
                                return n.useForwardRef;
                            },
                        });
                        var s = r(3830);
                        Object.defineProperty(t, 'useScroll', {
                            enumerable: !0,
                            get: function () {
                                return s.useScroll;
                            },
                        });
                        var a = r(3298);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return a.useKeyboardNavigation;
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
                        var l = r(7293);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return l.useElementOffsetY;
                            },
                        });
                        var o = r(3940);
                        Object.defineProperty(t, 'useForceUpdateRef', {
                            enumerable: !0,
                            get: function () {
                                return o.useForceUpdateRef;
                            },
                        });
                        var c = r(4482);
                        Object.defineProperty(t, 'useIsomorphicEffect', {
                            enumerable: !0,
                            get: function () {
                                return c.useIsomorphicEffect;
                            },
                        });
                        var f = r(588);
                        Object.defineProperty(t, 'useResize', {
                            enumerable: !0,
                            get: function () {
                                return f.useResize;
                            },
                        });
                        var u = r(8612);
                        Object.defineProperty(t, 'useDebouncedToggle', {
                            enumerable: !0,
                            get: function () {
                                return u.useDebouncedToggle;
                            },
                        });
                        var x = r(792);
                        Object.defineProperty(t, 'useCallbackRef', {
                            enumerable: !0,
                            get: function () {
                                return x.useCallbackRef;
                            },
                        });
                        var d = r(7497);
                        Object.defineProperty(t, 'useReturnValue', {
                            enumerable: !0,
                            get: function () {
                                return d.useReturnValue;
                            },
                        });
                        var p = r(2380);
                        Object.defineProperty(t, 'usePopoverSwipeable', {
                            enumerable: !0,
                            get: function () {
                                return p.usePopoverSwipeable;
                            },
                        });
                        var g = r(6585);
                        Object.defineProperty(t, 'useDynamicText', {
                            enumerable: !0,
                            get: function () {
                                return g.useDynamicText;
                            },
                        });
                        var v = r(9966);
                        Object.defineProperty(t, 'useLongPress', {
                            enumerable: !0,
                            get: function () {
                                return v.useLongPress;
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
                        let s = r(4490),
                            a = r(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(n || (t.SwipeablePlacement = n = {}));
                        let i = (e) => {
                                let { ref: t, deltaY: r, deltaX: s, placement: a } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            a === n.TOP || a === n.BOTTOM ? 'translateY('.concat(r || 0, 'px)') : 'translateX('.concat(s || 0, 'px)')));
                                });
                            },
                            l = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: o, disableSwipe: c, placement: f, threshold: u } = e,
                                x = (0, a.useCallbackRef)(() => {
                                    o && (l(t), o());
                                }),
                                d = (0, a.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: r, deltaX: s, placement: a } = e;
                                            switch (a) {
                                                case n.TOP:
                                                    r <= 0 && i({ ref: t, deltaY: r, deltaX: s, placement: a });
                                                    break;
                                                case n.RIGHT:
                                                    s >= 0 && i({ ref: t, deltaY: r, deltaX: s, placement: a });
                                                    break;
                                                case n.LEFT:
                                                    s <= 0 && i({ ref: t, deltaY: r, deltaX: s, placement: a });
                                                    break;
                                                default:
                                                    r >= 0 && i({ ref: t, deltaY: r, deltaX: s, placement: a });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: f });
                                }),
                                p = (0, a.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: r, deltaX: s, placement: a, threshold: i = 25 } = e;
                                            if (!t.current) return !1;
                                            let l = (i / 100) * (a === n.TOP || a === n.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (a) {
                                                case n.TOP:
                                                    return r < 0 && Math.abs(r) >= l;
                                                case n.RIGHT:
                                                    return s > 0 && s >= l;
                                                case n.LEFT:
                                                    return s < 0 && Math.abs(s) >= l;
                                                default:
                                                    return r > 0 && r >= l;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: f, threshold: u })
                                            ? o && (l(t), o())
                                            : l(t));
                                });
                            return { handlers: (0, s.useSwipeable)({ onSwiped: p, onSwiping: d, trackMouse: !0, trackTouch: !0, ...r }), onCloseCallback: x };
                        };
                    },
                    8612: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let n = r(352),
                            s = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: a } = e,
                                i = (0, s.useRef)(null),
                                [l, o] = (0, s.useState)(!!r),
                                c = (0, s.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            (o(!r),
                                                i.current && window.clearTimeout(i.current),
                                                (i.current = window.setTimeout(() => {
                                                    o(!!r);
                                                }, t)));
                                        }, a),
                                    [t, r, a],
                                ),
                                f = (0, s.useCallback)(() => {
                                    (o(!!r), i.current && window.clearTimeout(i.current));
                                }, [r]);
                            return (
                                (0, s.useEffect)(
                                    () => () => {
                                        i.current && window.clearTimeout(i.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: c, reset: f }
                            );
                        };
                    },
                    6585: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0));
                        let n = r(810),
                            s = (e) => {
                                ((e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && s(e);
                                    }));
                            },
                            a = (e, t, r, n, s, a) => {
                                (e.style.setProperty('--dynamic-font-size', ''.concat(n, 'px')), e.style.setProperty('--dynamic-line-height', String(s)));
                                let i = 'number' == typeof a ? e.scrollHeight <= Math.min(a * n * s, r) + 1 : e.scrollHeight <= r + 1,
                                    l = e.scrollWidth <= t + 1;
                                return i && l;
                            },
                            i = (e) => {
                                let {
                                        container: t,
                                        containerWidth: r,
                                        containerHeight: n,
                                        minFontSize: i,
                                        maxFontSize: l,
                                        lineHeight: o,
                                        maxLines: c,
                                        styleVariants: f,
                                    } = e,
                                    u = ((e, t, r) => {
                                        let n = e.cloneNode(!0);
                                        return (
                                            (n.style.cssText =
                                                '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                    t,
                                                    'px !important;\n    ',
                                                )),
                                            s(n),
                                            n.style.setProperty('--dynamic-line-height', String(r)),
                                            document.body.appendChild(n),
                                            n
                                        );
                                    })(t, r, o);
                                try {
                                    if (null == f ? void 0 : f.length) {
                                        var x;
                                        let e = [...f].sort((e, t) => t.fontSize - e.fontSize),
                                            t = null != (x = e[e.length - 1]) ? x : { fontSize: i, lineHeight: o };
                                        for (let t of e) if (a(u, r, n, t.fontSize, t.lineHeight, c)) return { ...t, fits: !0 };
                                        return { ...t, fits: !1 };
                                    }
                                    let e = i,
                                        t = l,
                                        s = null;
                                    for (; e <= t;) {
                                        let i = Math.floor((e + t) / 2);
                                        a(u, r, n, i, o, c) ? ((s = i), (e = i + 1)) : (t = i - 1);
                                    }
                                    if (null === s) return { fontSize: i, lineHeight: o, fits: !1 };
                                    return { fontSize: Math.max(i, s - 1), lineHeight: o, fits: !0 };
                                } finally {
                                    u.remove();
                                }
                            };
                        ((t.findOptimalFontSize = (e) => i(e).fontSize),
                            (t.useDynamicText = (e, t, r) => {
                                let { minFontSize: s, maxFontSize: a, lineHeight: l, maxLines: o, fallbackMaxLines: c, styleVariants: f } = t;
                                (0, n.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(l));
                                    let t = () => {
                                            let t = e.clientWidth,
                                                n = e.clientHeight,
                                                u = e.childNodes.length > 0;
                                            if (0 === t || 0 === n || !u) return;
                                            let {
                                                maxLines: x,
                                                fontSize: d,
                                                lineHeight: p,
                                            } = ((e) => {
                                                let { fallbackMaxLines: t, maxLines: r } = e,
                                                    n = i({ ...e, maxLines: r });
                                                if (void 0 === t || n.fits) return { maxLines: r, fontSize: n.fontSize, lineHeight: n.lineHeight };
                                                let s = i({ ...e, maxLines: t });
                                                return { maxLines: t, fontSize: s.fontSize, lineHeight: s.lineHeight };
                                            })({
                                                container: e,
                                                containerWidth: t,
                                                containerHeight: n,
                                                minFontSize: s,
                                                maxFontSize: a,
                                                lineHeight: l,
                                                maxLines: o,
                                                fallbackMaxLines: c,
                                                styleVariants: f,
                                            });
                                            (null == r || r(x),
                                                e.style.setProperty('--dynamic-font-size', ''.concat(d, 'px')),
                                                e.style.setProperty('--dynamic-line-height', String(p)));
                                        },
                                        n = new ResizeObserver(t),
                                        u = new MutationObserver(t);
                                    return (
                                        n.observe(e),
                                        u.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(t),
                                        t(),
                                        () => {
                                            (n.disconnect(), u.disconnect());
                                        }
                                    );
                                }, [e, r, c, l, a, o, s, f]);
                            }));
                    },
                    7293: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0));
                        let n = r(810),
                            s = r(3830),
                            a = r(3940);
                        t.useElementOffsetY = (e) => {
                            let [t, r] = (0, a.useForceUpdateRef)(),
                                [i, l] = (0, n.useState)(),
                                o = (0, n.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && l(e.y);
                                }, [t]);
                            return ((0, n.useLayoutEffect)(o), (0, s.useScroll)({ onScroll: o, elementRef: e }), { forceUpdateRefCallback: r, offsetY: i });
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
                            { innerWidth: s = 0, innerHeight: a = 0 } = window;
                        function i(e) {
                            let { top: t, right: r, bottom: n, left: i } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= a) || (n >= 0 && n <= a)) && ((i >= 0 && i <= s) || (r >= 0 && r <= s));
                        }
                        function l(e) {
                            var t, r;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, n)) ? r : e.attributes[0];
                        }
                        function o(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = i),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, r, s) {
                                let [{ freezeOnceVisible: a, preflightCheck: c, ...f }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, s],
                                    [x, d] = (0, n.useState)({}),
                                    p = (0, n.useRef)(new Set()),
                                    g = (0, n.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && g) {
                                                          if (p.current.has(t)) return;
                                                          (d((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              a && e.isIntersecting && (p.current.add(t), g.unobserve(e.target)));
                                                      }
                                                  }, f),
                                        [u],
                                    );
                                return (
                                    (0, n.useLayoutEffect)(
                                        () => (
                                            g &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = i(e.current))) {
                                                            let t = l(e.current);
                                                            d((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || g.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                g && g.disconnect();
                                            }
                                        ),
                                        [u, g, e.length],
                                    ),
                                    x
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
                        function s(e, t) {
                            return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                { navigationItemsSelector: r, activeAttributeName: a = 'aria-selected' } = t,
                                i = (0, n.useCallback)(
                                    (t) => {
                                        let n = s(e, r);
                                        if (!n.length) return;
                                        let a = t.target,
                                            i = n.indexOf(a);
                                        if (-1 === i) return;
                                        let [l] = n,
                                            o = n.at(-1),
                                            c = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                c = n[i - 1] || o;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                c = n[i + 1] || l;
                                                break;
                                            case 'Home':
                                                c = l;
                                                break;
                                            case 'End':
                                                c = o;
                                        }
                                        null !== c && (c.focus(), t.preventDefault());
                                    },
                                    [r, e],
                                );
                            ((0, n.useEffect)(() => {
                                let t = e.current;
                                return (null == t || t.addEventListener('keydown', i), () => (null == t ? void 0 : t.removeEventListener('keydown', i)));
                            }, [e, i]),
                                (0, n.useEffect)(() => {
                                    s(e, r).forEach((e) => {
                                        e.hasAttribute(a) && ('true' === e.getAttribute(a) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                }));
                        };
                    },
                    9966: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useLongPress = void 0));
                        let n = r(810),
                            s = r(792),
                            a = r(3940),
                            i = r(4012);
                        t.useLongPress = function () {
                            let {
                                    ref: e,
                                    onLongPress: t,
                                    delay: r = 500,
                                    movementThreshold: l = 10,
                                    disabled: o = !1,
                                    allowMouse: c = !1,
                                    scale: f,
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                [u, x] = (0, a.useForceUpdateRef)(),
                                d = (0, i.useMergeRefs)([x, e]),
                                [p, g] = (0, n.useState)(!1),
                                [v, m] = (0, n.useState)(!1),
                                _ = (0, n.useRef)(void 0),
                                b = (0, s.useCallbackRef)((e, r) => (null == t ? void 0 : t(e, r))),
                                k = (0, s.useCallbackRef)(() => {
                                    var e;
                                    (null == (e = _.current) || e.call(_), m(!1));
                                });
                            return (
                                (0, n.useEffect)(() => {
                                    let e, t, n, s;
                                    if (!u || o) return;
                                    let a = u.ownerDocument,
                                        i = a.defaultView;
                                    if (!i) return;
                                    let x = new AbortController();
                                    function d() {
                                        (i.clearTimeout(n),
                                            (n = void 0),
                                            null == s || s.cancel(),
                                            (s = void 0),
                                            (e = void 0),
                                            g(!1),
                                            null == t || t.abort(),
                                            (t = void 0));
                                    }
                                    function p(t) {
                                        e && t.pointerId === e.pointerId && Math.hypot(t.clientX - e.clientX, t.clientY - e.clientY) > l && d();
                                    }
                                    function v(t) {
                                        t.pointerId === (null == e ? void 0 : e.pointerId) && d();
                                    }
                                    function k(t) {
                                        t.pointerId !== (null == e ? void 0 : e.pointerId) && d();
                                    }
                                    function E() {
                                        'hidden' === a.visibilityState && d();
                                    }
                                    return (
                                        (_.current = d),
                                        u.addEventListener(
                                            'pointerdown',
                                            (l) => {
                                                var o;
                                                let x = 'touch' === l.pointerType || 'pen' === l.pointerType || (c && 'mouse' === l.pointerType);
                                                if (e || !l.isPrimary || 0 !== l.button || !x) return;
                                                ((e = l),
                                                    (t = new AbortController()),
                                                    g(!0),
                                                    m(!1),
                                                    void 0 !== f &&
                                                        f > 0 &&
                                                        Number.isFinite(f) &&
                                                        !(null == (o = i.matchMedia) ? void 0 : o.call(i, '(prefers-reduced-motion: reduce)').matches) &&
                                                        u.animate &&
                                                        (s = u.animate([{ transform: 'scale(1)' }, { transform: 'scale('.concat(f, ')') }], {
                                                            duration: 150,
                                                            easing: 'ease-out',
                                                            fill: 'forwards',
                                                            composite: 'add',
                                                        })));
                                                let _ = t.signal;
                                                (a.addEventListener('pointermove', p, { capture: !0, passive: !0, signal: _ }),
                                                    a.addEventListener('pointerup', v, { capture: !0, signal: _ }),
                                                    a.addEventListener('pointercancel', v, { capture: !0, signal: _ }),
                                                    a.addEventListener('lostpointercapture', v, { capture: !0, signal: _ }),
                                                    a.addEventListener('pointerdown', k, { capture: !0, signal: _ }),
                                                    a.addEventListener('scroll', d, { capture: !0, passive: !0, signal: _ }),
                                                    a.addEventListener('visibilitychange', E, { signal: _ }),
                                                    i.addEventListener('scroll', d, { passive: !0, signal: _ }),
                                                    i.addEventListener('blur', d, { signal: _ }),
                                                    (n = i.setTimeout(() => {
                                                        if (((n = void 0), !u.isConnected)) return void d();
                                                        (((e, t) => {
                                                            let r,
                                                                n = e.ownerDocument,
                                                                s = n.defaultView;
                                                            if (!s) return;
                                                            let a = new AbortController(),
                                                                i = !1;
                                                            function l() {
                                                                (s.clearTimeout(r), a.abort());
                                                            }
                                                            function o(e) {
                                                                e.pointerId === t.pointerId && ((i = !0), s.clearTimeout(r), (r = s.setTimeout(l, 750)));
                                                            }
                                                            r = s.setTimeout(l, 6e4);
                                                            let c = a.signal;
                                                            (n.addEventListener(
                                                                'click',
                                                                function (r) {
                                                                    let n = 'pointerId' in r ? r.pointerId === t.pointerId : r.composedPath().includes(e);
                                                                    0 !== r.detail && n && (r.preventDefault(), r.stopPropagation(), l());
                                                                },
                                                                { capture: !0, signal: c },
                                                            ),
                                                                n.addEventListener(
                                                                    'pointerdown',
                                                                    function () {
                                                                        i && l();
                                                                    },
                                                                    { capture: !0, signal: c },
                                                                ),
                                                                n.addEventListener(
                                                                    'contextmenu',
                                                                    function (r) {
                                                                        'mouse' !== t.pointerType && r.composedPath().includes(e) && r.preventDefault();
                                                                    },
                                                                    { capture: !0, signal: c },
                                                                ),
                                                                n.addEventListener('pointerup', o, { capture: !0, signal: c }),
                                                                n.addEventListener('pointercancel', o, { capture: !0, signal: c }),
                                                                s.addEventListener('blur', l, { signal: c }));
                                                        })(u, l),
                                                            m(!0),
                                                            b(l, u));
                                                    }, r)));
                                            },
                                            { passive: !0, signal: x.signal },
                                        ),
                                        u.addEventListener(
                                            'contextmenu',
                                            (t) => {
                                                e && 'mouse' !== e.pointerType && t.preventDefault();
                                            },
                                            { signal: x.signal },
                                        ),
                                        () => {
                                            (d(), (_.current = void 0), x.abort());
                                        }
                                    );
                                }, [u, o, r, l, c, f, b]),
                                { ref: d, isPressing: p, isLongPressed: v, reset: k }
                            );
                        };
                    },
                    4012: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var n = r(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return n.useMergeRefs;
                            },
                        });
                    },
                    2380: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0));
                        let n = r(810),
                            s = r(2458);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: a, disableSwipe: i, placement: l, threshold: o } = e,
                                c = (0, n.useMemo)(() => {
                                    switch (l) {
                                        case 'top':
                                        case 'top-end':
                                        case 'top-start':
                                            return s.SwipeablePlacement.TOP;
                                        case 'right':
                                        case 'right-end':
                                        case 'right-start':
                                            return s.SwipeablePlacement.RIGHT;
                                        case 'left':
                                        case 'left-end':
                                        case 'left-start':
                                            return s.SwipeablePlacement.LEFT;
                                        default:
                                            return s.SwipeablePlacement.BOTTOM;
                                    }
                                }, [l]);
                            return (0, s.useComponentSwipeable)({ ref: t, swipeableProps: r, onClose: a, disableSwipe: i, placement: c, threshold: o });
                        };
                    },
                    588: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let n = r(810),
                            s = r(1848);
                        t.useResize = (e, t) => {
                            (0, n.useEffect)(() => {
                                let r = (0, s.getElementFromRefOrElement)(t);
                                if (null === r) return;
                                let n = null != r ? r : document.documentElement,
                                    a = new ResizeObserver(e);
                                return (a.observe(n), () => a.disconnect());
                            }, [t, e]);
                        };
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    3830: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let n = r(810),
                            s = r(1848),
                            a = r(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: i } = e,
                                { state: l, handleDebouncedToggle: o } = (0, a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                c = (0, n.useCallback)(() => {
                                    (r && o(), null == t || t());
                                }, [r, o, t]);
                            return (
                                (0, n.useEffect)(() => {
                                    let e = (0, s.getElementFromRefOrElement)(i);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', c, r), () => t.removeEventListener('scroll', c, r));
                                }, [i, c]),
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
                    1064: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = t.IconComponent = void 0));
                        let s = r(4377),
                            a = r(810),
                            i = r(5881),
                            l = r(7638),
                            o = n(r(4257));
                        ((t.IconComponent = (e) => {
                            let { 'aria-label': t, className: r, focusable: n = !1, variant: a, size: c, forwardRef: f, ...u } = e,
                                x = c ? ''.concat(a, '_').concat(c) : a,
                                d = l.iconsCollection[x];
                            return d
                                ? (0, s.jsx)(d, {
                                      className: (0, i.clsx)(o.default.root, r, o.default['root_size_'.concat(c)]),
                                      focusable: n,
                                      'aria-label': t,
                                      ...u,
                                      'aria-hidden': !t,
                                      ref: f,
                                  })
                                : null;
                        }),
                            (t.Icon = (0, a.forwardRef)((e, r) => (0, s.jsx)(t.IconComponent, { forwardRef: r, ...e }))));
                    },
                    7638: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.iconsCollection = t.iconsCollectionBySize = void 0));
                        let s = n(r(7177)),
                            a = n(r(8897)),
                            i = n(r(3691)),
                            l = n(r(2402)),
                            o = n(r(1557)),
                            c = n(r(9271)),
                            f = n(r(4941)),
                            u = n(r(20)),
                            x = n(r(8871)),
                            d = n(r(6639)),
                            p = n(r(8426)),
                            g = n(r(6393)),
                            v = n(r(3581)),
                            m = n(r(9556)),
                            _ = n(r(3893)),
                            b = n(r(1764)),
                            k = n(r(8382)),
                            E = n(r(3735)),
                            y = n(r(5282)),
                            w = n(r(4920)),
                            O = n(r(3512)),
                            R = n(r(205)),
                            j = n(r(9400)),
                            h = n(r(7423)),
                            N = n(r(249)),
                            W = n(r(7457)),
                            H = n(r(2540)),
                            P = n(r(5093)),
                            S = n(r(5791)),
                            L = n(r(1027)),
                            C = n(r(6276)),
                            T = n(r(154)),
                            D = n(r(2866)),
                            M = n(r(4777)),
                            I = n(r(2390)),
                            A = n(r(7067)),
                            F = n(r(3790)),
                            V = n(r(2901)),
                            B = n(r(6682)),
                            U = n(r(9299)),
                            z = n(r(1126)),
                            Y = n(r(5294)),
                            Q = n(r(9551)),
                            K = n(r(1578)),
                            G = n(r(1654)),
                            X = n(r(7162)),
                            q = n(r(9807)),
                            Z = n(r(9833)),
                            J = n(r(4959)),
                            $ = n(r(2086)),
                            ee = n(r(835)),
                            et = n(r(5035)),
                            er = n(r(7526)),
                            en = n(r(6036)),
                            es = n(r(9825)),
                            ea = n(r(9130)),
                            ei = n(r(2506)),
                            el = n(r(3708)),
                            eo = n(r(5200)),
                            ec = n(r(513)),
                            ef = n(r(6760)),
                            eu = n(r(4374)),
                            ex = n(r(8803)),
                            ed = n(r(9119)),
                            ep = n(r(8406)),
                            eg = n(r(7525)),
                            ev = n(r(6286)),
                            em = n(r(9180)),
                            e_ = n(r(9095)),
                            eb = n(r(85)),
                            ek = n(r(3686)),
                            eE = n(r(6758)),
                            ey = n(r(4544)),
                            ew = n(r(8454)),
                            eO = n(r(9498)),
                            eR = n(r(2744)),
                            ej = n(r(825)),
                            eh = n(r(1686)),
                            eN = n(r(9322)),
                            eW = n(r(2187)),
                            eH = n(r(7241)),
                            eP = n(r(1655)),
                            eS = n(r(1506)),
                            eL = n(r(2764)),
                            eC = n(r(7193)),
                            eT = n(r(9748)),
                            eD = n(r(7377)),
                            eM = n(r(7960)),
                            eI = n(r(701)),
                            eA = n(r(1484)),
                            eF = n(r(582)),
                            eV = n(r(4121)),
                            eB = n(r(4227)),
                            eU = n(r(7581)),
                            ez = n(r(8705)),
                            eY = n(r(5993)),
                            eQ = n(r(3902)),
                            eK = n(r(9608)),
                            eG = n(r(6311)),
                            eX = n(r(6547)),
                            eq = n(r(1595)),
                            eZ = n(r(4955)),
                            eJ = n(r(2528)),
                            e$ = n(r(8499)),
                            e0 = n(r(837)),
                            e1 = n(r(4623)),
                            e8 = n(r(2756)),
                            e2 = n(r(8473)),
                            e7 = n(r(7662)),
                            e5 = n(r(4933)),
                            e4 = n(r(2138)),
                            e3 = n(r(3791)),
                            e9 = n(r(9376)),
                            e6 = n(r(6465)),
                            te = n(r(3982)),
                            tt = n(r(3725)),
                            tr = n(r(7516)),
                            tn = n(r(2410)),
                            ts = n(r(1581)),
                            ta = n(r(3270)),
                            ti = n(r(473)),
                            tl = n(r(6586)),
                            to = n(r(553)),
                            tc = n(r(49)),
                            tf = n(r(9697)),
                            tu = n(r(9954)),
                            tx = n(r(4085)),
                            td = n(r(4281)),
                            tp = n(r(1568)),
                            tg = n(r(2554)),
                            tv = n(r(5108)),
                            tm = n(r(3874)),
                            t_ = n(r(8972)),
                            tb = n(r(4338)),
                            tk = n(r(6179)),
                            tE = n(r(3310)),
                            ty = n(r(1516)),
                            tw = n(r(2023)),
                            tO = n(r(2855)),
                            tR = n(r(8642)),
                            tj = n(r(5079)),
                            th = n(r(7719)),
                            tN = n(r(139)),
                            tW = n(r(8959)),
                            tH = n(r(852)),
                            tP = n(r(4380)),
                            tS = n(r(4553)),
                            tL = n(r(7873)),
                            tC = n(r(6898)),
                            tT = n(r(3278)),
                            tD = n(r(1468)),
                            tM = n(r(8279)),
                            tI = n(r(9074)),
                            // for PulseSync: BEGIN import the settings gear SVG component
                            tSettingsGear = n(r(9901)),
                            // for PulseSync: END import the settings gear SVG component
                            tA = n(r(182)),
                            tF = n(r(8056)),
                            tV = n(r(8353)),
                            tB = n(r(3293)),
                            tU = n(r(2378)),
                            tz = n(r(9261)),
                            tY = n(r(4527)),
                            tQ = n(r(1786)),
                            tK = n(r(4419)),
                            tG = n(r(6970)),
                            tX = n(r(7397)),
                            tq = n(r(2364)),
                            tZ = n(r(8202)),
                            tJ = n(r(1552)),
                            t$ = n(r(6070)),
                            t0 = n(r(2098)),
                            t1 = n(r(6707)),
                            t8 = n(r(2020)),
                            t2 = n(r(5879)),
                            t7 = n(r(2629)),
                            t5 = n(r(7863)),
                            t4 = n(r(206)),
                            t3 = n(r(4717)),
                            t9 = n(r(5561)),
                            t6 = n(r(2777)),
                            re = n(r(3003)),
                            rt = n(r(4561)),
                            rr = n(r(4355)),
                            rn = n(r(9642)),
                            rs = n(r(2244)),
                            ra = n(r(2845)),
                            ri = n(r(9503)),
                            rl = n(r(7419)),
                            ro = n(r(2570)),
                            rc = n(r(7145)),
                            rf = n(r(2060)),
                            ru = n(r(5407)),
                            rx = n(r(6187)),
                            rd = n(r(8831)),
                            rp = n(r(3728)),
                            rg = n(r(727)),
                            rv = n(r(7833)),
                            rm = n(r(5310)),
                            r_ = n(r(3739)),
                            rb = n(r(1798)),
                            rk = n(r(3222)),
                            rE = n(r(6230)),
                            ry = n(r(9620)),
                            rw = n(r(9879)),
                            rO = n(r(4484)),
                            rR = n(r(2922)),
                            rj = n(r(2434)),
                            rh = n(r(9173)),
                            rN = n(r(9711)),
                            rW = n(r(6374)),
                            rH = n(r(1116)),
                            rP = n(r(6150)),
                            rS = n(r(3848)),
                            rL = n(r(7656)),
                            rC = n(r(1605)),
                            rT = n(r(1423)),
                            rD = n(r(4526)),
                            rM = n(r(3908)),
                            rI = n(r(759)),
                            rA = n(r(3753)),
                            rF = n(r(2705)),
                            rV = n(r(8671)),
                            rB = n(r(6413)),
                            rU = n(r(8254)),
                            rz = n(r(8297)),
                            rY = n(r(4348)),
                            rQ = n(r(8836)),
                            rK = n(r(6823)),
                            rG = n(r(1235)),
                            rX = n(r(1540)),
                            rq = n(r(7514)),
                            rZ = n(r(221)),
                            rJ = n(r(9139)),
                            r$ = n(r(9938)),
                            r0 = n(r(5543)),
                            r1 = n(r(272)),
                            r8 = n(r(5842)),
                            r2 = n(r(4400)),
                            r7 = n(r(9189)),
                            r5 = n(r(9051)),
                            r4 = n(r(2551)),
                            r3 = n(r(2913)),
                            r9 = n(r(8002)),
                            r6 = n(r(3057)),
                            ne = n(r(4247)),
                            nt = n(r(3715)),
                            nr = n(r(3286)),
                            nn = n(r(3331)),
                            ns = n(r(7722)),
                            na = n(r(362)),
                            ni = n(r(6407)),
                            nl = n(r(740)),
                            no = n(r(2747)),
                            nc = n(r(3590)),
                            nf = n(r(5656)),
                            nu = n(r(9723)),
                            nx = n(r(7488)),
                            nd = n(r(7288)),
                            np = n(r(6623)),
                            ng = n(r(5728)),
                            nv = n(r(9877)),
                            nm = n(r(839)),
                            n_ = n(r(4298)),
                            nb = n(r(790)),
                            nk = n(r(9342)),
                            nE = n(r(4403)),
                            ny = n(r(4960)),
                            nw = n(r(1601)),
                            nO = n(r(8163));
                        ((t.iconsCollectionBySize = {
                            xxxs: [
                                'add',
                                'adult',
                                'arrowDown',
                                'arrowRight',
                                'check',
                                'close',
                                'complain',
                                'donation',
                                'exclamation',
                                'explicit',
                                'listen',
                                'moreOutlined',
                                'note',
                                'play',
                                'reset',
                                'ruble',
                                'users',
                            ],
                            xxs: [
                                'add',
                                'addToPlaylist',
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'artist',
                                'bucket',
                                'chain',
                                'chartDown',
                                'chartNew',
                                'chartSame',
                                'chartUp',
                                'check',
                                'clip',
                                'close',
                                'code',
                                'complain',
                                'crown',
                                'dislike',
                                'disliked',
                                'download',
                                'downloaded',
                                'dragDots',
                                'edit',
                                'exclamation',
                                'explicit',
                                'eye_crossed',
                                'filter',
                                'gift',
                                'info',
                                'lightning',
                                'like',
                                'likeVariant',
                                'liked',
                                'likedVariant',
                                'link',
                                'link_rounded',
                                'lock',
                                'lyrics',
                                'macos',
                                'menuArrow',
                                'more',
                                'moreOutlined',
                                'next',
                                'note',
                                'pause',
                                'pencil',
                                'pin',
                                'pin_filled',
                                'play',
                                'playLast',
                                'playNext',
                                'playQueue',
                                'podcasts',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'reset',
                                'rewindBackwards',
                                'rewindForward',
                                'ruble',
                                'settings',
                                'share',
                                'shuffle',
                                'syncLyrics',
                                'thumbDown',
                                'thumbUp',
                                'trailer',
                                'twoUsers',
                                'unpin',
                                'upload',
                                'vibe',
                            ],
                            xs: [
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'cast',
                                'chain',
                                'check',
                                'close',
                                'close_filled',
                                'complain',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'filter',
                                'fullscreen',
                                'infinity',
                                'like',
                                'liked',
                                'liteVersion',
                                'lock',
                                'more',
                                'navigationCollection',
                                'navigationCollection_selected',
                                'navigationConcerts',
                                'navigationConcerts_selected',
                                'navigationForYouAndTrends',
                                'navigationForYouAndTrends_selected',
                                'navigationKids',
                                'navigationKids_selected',
                                'navigationMuzmarket',
                                'navigationMyVibe',
                                'navigationMyVibeNDA',
                                'navigationNonMusic',
                                'navigationNonMusic_selected',
                                'navigationPlus',
                                'navigationSearch',
                                'next',
                                'note',
                                'pause',
                                'pause_filled',
                                'picture',
                                'pin',
                                'pin_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'playlist',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'rewindBackwards',
                                'rewindForward',
                                'search',
                                'settings',
                                // for PulseSync: BEGIN register the settings gear icon name
                                'settingsGear',
                                // for PulseSync: END register the settings gear icon name
                                'shuffle',
                                'site',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'thumbDown',
                                'thumbUp',
                                'trailer',
                                'unavailable',
                                'volume',
                                'volumeOff',
                                'windows',
                            ],
                            s: [
                                'adult',
                                'album',
                                'complain',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'likedVariant',
                                'note',
                                'pauseVibe',
                                'picture',
                                'playVibe',
                                'playlist',
                            ],
                            m: [
                                'collections',
                                'collections_selected',
                                'complain',
                                'history',
                                'home',
                                'home_selected',
                                'kids',
                                'kids_selected',
                                'like',
                                'liked',
                                'lock',
                                'more',
                                'navigationMuzmarket',
                                'non_music',
                                'non_music_selected',
                                'note',
                                'pause',
                                'pause_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'plusOutlined',
                                'ruble',
                                'search',
                                'search_selected',
                                'share',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'ticket',
                                'ticket_selected',
                            ],
                            l: [
                                'add',
                                'album',
                                'complain',
                                'download',
                                'like',
                                'note',
                                'pause_filled',
                                'play_filled',
                                'search',
                                'speed_1_25x',
                                'speed_1_5x',
                                'speed_1_75x',
                                'speed_1x',
                                'speed_2x',
                            ],
                            xl: ['album', 'clip', 'complain', 'note', 'pause_filled', 'picture', 'play_filled', 'playlist', 'unavailable'],
                            xxl: ['attention', 'check', 'complain', 'next', 'offline', 'pause_filled', 'play_filled', 'previous', 'search'],
                            xxxl: ['attention', 'complain'],
                            '': [
                                'bandlink',
                                'googlePlay',
                                'huaweiAppGallery',
                                'kinopoiskEn',
                                'kinopoiskRu',
                                'macos',
                                'musicLogo',
                                'musicLogoCenterEn',
                                'musicLogoCenterRu',
                                'musicLogoLeftEn',
                                'musicLogoLeftRu',
                                'pause',
                                'play',
                                'plus',
                                'plusBadge',
                                'plusColor',
                                'plusOutlined',
                                'windows',
                                'yandexBooksEn',
                                'yandexBooksRu',
                                'yandexPayEn',
                                'yandexPayRu',
                                'yandexPlusEn',
                                'yandexPlusRu',
                            ],
                        }),
                            (t.iconsCollection = {
                                add_xxxs: s.default,
                                adult_xxxs: a.default,
                                arrowDown_xxxs: i.default,
                                arrowRight_xxxs: l.default,
                                check_xxxs: o.default,
                                close_xxxs: c.default,
                                complain_xxxs: f.default,
                                donation_xxxs: u.default,
                                exclamation_xxxs: x.default,
                                explicit_xxxs: d.default,
                                listen_xxxs: p.default,
                                moreOutlined_xxxs: g.default,
                                note_xxxs: v.default,
                                play_xxxs: m.default,
                                reset_xxxs: _.default,
                                ruble_xxxs: b.default,
                                users_xxxs: k.default,
                                add_xxs: E.default,
                                addToPlaylist_xxs: y.default,
                                adult_xxs: w.default,
                                album_xxs: O.default,
                                arrowDown_xxs: R.default,
                                arrowLeft_xxs: j.default,
                                arrowRight_xxs: h.default,
                                artist_xxs: N.default,
                                bucket_xxs: W.default,
                                chain_xxs: H.default,
                                chartDown_xxs: P.default,
                                chartNew_xxs: S.default,
                                chartSame_xxs: L.default,
                                chartUp_xxs: C.default,
                                check_xxs: T.default,
                                clip_xxs: D.default,
                                close_xxs: M.default,
                                code_xxs: I.default,
                                complain_xxs: A.default,
                                crown_xxs: F.default,
                                dislike_xxs: V.default,
                                disliked_xxs: B.default,
                                download_xxs: U.default,
                                downloaded_xxs: z.default,
                                dragDots_xxs: Y.default,
                                edit_xxs: Q.default,
                                exclamation_xxs: K.default,
                                explicit_xxs: G.default,
                                eye_crossed_xxs: X.default,
                                filter_xxs: q.default,
                                gift_xxs: Z.default,
                                info_xxs: J.default,
                                lightning_xxs: $.default,
                                like_xxs: ee.default,
                                likeVariant_xxs: et.default,
                                liked_xxs: er.default,
                                likedVariant_xxs: en.default,
                                link_xxs: es.default,
                                link_rounded_xxs: ea.default,
                                lock_xxs: ei.default,
                                lyrics_xxs: el.default,
                                macos_xxs: eo.default,
                                menuArrow_xxs: ec.default,
                                more_xxs: ef.default,
                                moreOutlined_xxs: eu.default,
                                next_xxs: ex.default,
                                note_xxs: ed.default,
                                pause_xxs: ep.default,
                                pencil_xxs: eg.default,
                                pin_xxs: ev.default,
                                pin_filled_xxs: em.default,
                                play_xxs: e_.default,
                                playLast_xxs: eb.default,
                                playNext_xxs: ek.default,
                                playQueue_xxs: eE.default,
                                podcasts_xxs: ey.default,
                                previous_xxs: ew.default,
                                repeat_xxs: eO.default,
                                repeat_one_xxs: eR.default,
                                reset_xxs: ej.default,
                                rewindBackwards_xxs: eh.default,
                                rewindForward_xxs: eN.default,
                                ruble_xxs: eW.default,
                                settings_xxs: eH.default,
                                share_xxs: eP.default,
                                shuffle_xxs: eS.default,
                                syncLyrics_xxs: eL.default,
                                thumbDown_xxs: eC.default,
                                thumbUp_xxs: eT.default,
                                trailer_xxs: eD.default,
                                twoUsers_xxs: eM.default,
                                unpin_xxs: eI.default,
                                upload_xxs: eA.default,
                                vibe_xxs: eF.default,
                                adult_xs: eV.default,
                                album_xs: eB.default,
                                arrowDown_xs: eU.default,
                                arrowLeft_xs: ez.default,
                                arrowRight_xs: eY.default,
                                cast_xs: eQ.default,
                                chain_xs: eK.default,
                                check_xs: eG.default,
                                close_xs: eX.default,
                                close_filled_xs: eq.default,
                                complain_xs: eZ.default,
                                dislike_xs: eJ.default,
                                disliked_xs: e$.default,
                                exclamation_xs: e0.default,
                                explicit_xs: e1.default,
                                filter_xs: e8.default,
                                fullscreen_xs: e2.default,
                                infinity_xs: e7.default,
                                like_xs: e5.default,
                                liked_xs: e4.default,
                                liteVersion_xs: e3.default,
                                lock_xs: e9.default,
                                more_xs: e6.default,
                                navigationCollection_xs: te.default,
                                navigationCollection_selected_xs: tt.default,
                                navigationConcerts_xs: tr.default,
                                navigationConcerts_selected_xs: tn.default,
                                navigationForYouAndTrends_xs: ts.default,
                                navigationForYouAndTrends_selected_xs: ta.default,
                                navigationKids_xs: ti.default,
                                navigationKids_selected_xs: tl.default,
                                navigationMuzmarket_xs: to.default,
                                navigationMyVibe_xs: tc.default,
                                navigationMyVibeNDA_xs: tf.default,
                                navigationNonMusic_xs: tu.default,
                                navigationNonMusic_selected_xs: tx.default,
                                navigationPlus_xs: td.default,
                                navigationSearch_xs: tp.default,
                                next_xs: tg.default,
                                note_xs: tv.default,
                                pause_xs: tm.default,
                                pause_filled_xs: t_.default,
                                picture_xs: tb.default,
                                pin_xs: tk.default,
                                pin_filled_xs: tE.default,
                                play_xs: ty.default,
                                playQueue_xs: tw.default,
                                play_filled_xs: tO.default,
                                playlist_xs: tR.default,
                                previous_xs: tj.default,
                                repeat_xs: th.default,
                                repeat_one_xs: tN.default,
                                rewindBackwards_xs: tW.default,
                                rewindForward_xs: tH.default,
                                search_xs: tP.default,
                                settings_xs: tS.default,
                                shuffle_xs: tL.default,
                                site_xs: tC.default,
                                speed_1_25x_centered_xs: tT.default,
                                speed_1_5x_centered_xs: tD.default,
                                speed_1_75x_centered_xs: tM.default,
                                speed_1x_centered_xs: tI.default,
                                // for PulseSync: BEGIN register the settings gear icon component
                                settingsGear_xs: tSettingsGear.default,
                                // for PulseSync: END register the settings gear icon component
                                speed_2x_centered_xs: tA.default,
                                syncLyrics_xs: tF.default,
                                thumbDown_xs: tV.default,
                                thumbUp_xs: tB.default,
                                trailer_xs: tU.default,
                                unavailable_xs: tz.default,
                                volume_xs: tY.default,
                                volumeOff_xs: tQ.default,
                                windows_xs: tK.default,
                                adult_s: tG.default,
                                album_s: tX.default,
                                complain_s: tq.default,
                                dislike_s: tZ.default,
                                disliked_s: tJ.default,
                                exclamation_s: t$.default,
                                explicit_s: t0.default,
                                likedVariant_s: t1.default,
                                note_s: t8.default,
                                pauseVibe_s: t2.default,
                                picture_s: t7.default,
                                playVibe_s: t5.default,
                                playlist_s: t4.default,
                                collections_m: t3.default,
                                collections_selected_m: t9.default,
                                complain_m: t6.default,
                                history_m: re.default,
                                home_m: rt.default,
                                home_selected_m: rr.default,
                                kids_m: rn.default,
                                kids_selected_m: rs.default,
                                like_m: ra.default,
                                liked_m: ri.default,
                                lock_m: rl.default,
                                more_m: ro.default,
                                navigationMuzmarket_m: rc.default,
                                non_music_m: rf.default,
                                non_music_selected_m: ru.default,
                                note_m: rx.default,
                                pause_m: rd.default,
                                pause_filled_m: rp.default,
                                play_m: rg.default,
                                playQueue_m: rv.default,
                                play_filled_m: rm.default,
                                plusOutlined_m: r_.default,
                                ruble_m: rb.default,
                                search_m: rk.default,
                                search_selected_m: rE.default,
                                share_m: ry.default,
                                speed_1_25x_centered_m: rw.default,
                                speed_1_5x_centered_m: rO.default,
                                speed_1_75x_centered_m: rR.default,
                                speed_1x_centered_m: rj.default,
                                speed_2x_centered_m: rh.default,
                                syncLyrics_m: rN.default,
                                ticket_m: rW.default,
                                ticket_selected_m: rH.default,
                                add_l: rP.default,
                                album_l: rS.default,
                                complain_l: rL.default,
                                download_l: rC.default,
                                like_l: rT.default,
                                note_l: rD.default,
                                pause_filled_l: rM.default,
                                play_filled_l: rI.default,
                                search_l: rA.default,
                                speed_1_25x_l: rF.default,
                                speed_1_5x_l: rV.default,
                                speed_1_75x_l: rB.default,
                                speed_1x_l: rU.default,
                                speed_2x_l: rz.default,
                                album_xl: rY.default,
                                clip_xl: rQ.default,
                                complain_xl: rK.default,
                                note_xl: rG.default,
                                pause_filled_xl: rX.default,
                                picture_xl: rq.default,
                                play_filled_xl: rZ.default,
                                playlist_xl: rJ.default,
                                unavailable_xl: r$.default,
                                attention_xxl: r0.default,
                                check_xxl: r1.default,
                                complain_xxl: r8.default,
                                next_xxl: r2.default,
                                offline_xxl: r7.default,
                                pause_filled_xxl: r5.default,
                                play_filled_xxl: r4.default,
                                previous_xxl: r3.default,
                                search_xxl: r9.default,
                                attention_xxxl: r6.default,
                                complain_xxxl: ne.default,
                                bandlink: nt.default,
                                googlePlay: nr.default,
                                huaweiAppGallery: nn.default,
                                kinopoiskEn: ns.default,
                                kinopoiskRu: na.default,
                                macos: ni.default,
                                musicLogo: nl.default,
                                musicLogoCenterEn: no.default,
                                musicLogoCenterRu: nc.default,
                                musicLogoLeftEn: nf.default,
                                musicLogoLeftRu: nu.default,
                                pause: nx.default,
                                play: nd.default,
                                plus: np.default,
                                plusBadge: ng.default,
                                plusColor: nv.default,
                                plusOutlined: nm.default,
                                windows: n_.default,
                                yandexBooksEn: nb.default,
                                yandexBooksRu: nk.default,
                                yandexPayEn: nE.default,
                                yandexPayRu: ny.default,
                                yandexPlusEn: nw.default,
                                yandexPlusRu: nO.default,
                            }));
                    },
                    5404: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = void 0));
                        var n = r(1064);
                        Object.defineProperty(t, 'Icon', {
                            enumerable: !0,
                            get: function () {
                                return n.Icon;
                            },
                        });
                    },
                    9834: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.FallbackImage = void 0));
                        let s = r(4377),
                            a = r(5881),
                            i = r(810),
                            l = r(5404),
                            o = n(r(5763)),
                            c = (e) => {
                                let { forwardRef: t, className: r, iconVariant: n = 'note', iconSize: i = 'xl', ...c } = e;
                                return (0, s.jsx)('div', {
                                    className: (0, a.clsx)(o.default.fallback, r),
                                    ref: t,
                                    ...c,
                                    children: (0, s.jsx)(l.Icon, { variant: n, size: i, className: o.default.fallbackIcon }),
                                });
                            };
                        t.FallbackImage = (0, i.forwardRef)((e, t) => (0, s.jsx)(c, { forwardRef: t, ...e }));
                    },
                    3601: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Image = t.ImageComponent = void 0));
                        let s = r(4377),
                            a = r(5881),
                            i = r(810),
                            l = r(2660),
                            o = r(9580),
                            c = r(9834),
                            f = r(8600),
                            u = n(r(5763));
                        ((t.ImageComponent = (e) => {
                            let {
                                    forwardRef: t,
                                    className: r,
                                    size: n = l.AVATAR_DEFAULT_SIZE,
                                    withAvatarReplace: x,
                                    fit: d,
                                    fallbackIconVariant: p,
                                    withAspectRatio: g = !1,
                                    withFallback: v = !0,
                                    withLoadingIndicator: m,
                                    fallbackIconSize: _,
                                    alt: b = '',
                                    src: k,
                                    srcSet: E,
                                    withSrcSet: y = !0,
                                    createUrlReplacer: w = l.createAvatarUrl,
                                    loading: O = 'eager',
                                    onLoadBySrc: R,
                                    ...j
                                } = e,
                                h = (0, o.useForwardRef)(t, null),
                                [N, W] = (0, f.useImageLoading)(h, m),
                                [H, P] = (0, i.useState)(!1),
                                [S, L] = (0, i.useState)(!k),
                                C = k,
                                T = E;
                            if (k && k.startsWith('blob:')) ((C = k), (T = ''.concat(C, ', ').concat(C, ' 2x')));
                            else if (x && k) {
                                let e = 'orig' === n ? n : 2 * n;
                                ((C = w(k, n, g)), (T = ''.concat(C, ', ').concat(w(k, e, g), ' 2x')));
                            }
                            y || (T = void 0);
                            let D = (0, o.useCallbackRef)(() => {
                                (null == R || R(k), W());
                            });
                            ((0, i.useEffect)(() => {
                                h.current && H && C && (h.current.src = C);
                            }, [k, H, C, h]),
                                (0, i.useEffect)(() => {
                                    P(!0);
                                }, []),
                                (0, i.useEffect)(() => {
                                    L(!1);
                                }, [k]));
                            let M = (0, i.useCallback)(() => {
                                L(!0);
                            }, []);
                            return S || !k
                                ? v
                                    ? (0, s.jsx)(c.FallbackImage, { className: r, iconSize: _, iconVariant: p, ref: h })
                                    : null
                                : (0, s.jsx)('img', {
                                      ref: h,
                                      className: (0, a.clsx)(
                                          u.default.root,
                                          u.default['root_fit_'.concat(d)],
                                          { [u.default.loading]: N, [u.default.root_withContainPaint]: m },
                                          r,
                                      ),
                                      src: C,
                                      srcSet: T,
                                      onError: M,
                                      onLoad: D,
                                      alt: b,
                                      loading: O,
                                      ...j,
                                  });
                        }),
                            (t.Image = (0, i.forwardRef)((e, r) => (0, s.jsx)(t.ImageComponent, { forwardRef: r, ...e }))));
                    },
                    8600: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useImageLoading = void 0));
                        var n = r(4989);
                        Object.defineProperty(t, 'useImageLoading', {
                            enumerable: !0,
                            get: function () {
                                return n.useImageLoading;
                            },
                        });
                    },
                    4989: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useImageLoading = void 0));
                        let n = r(810),
                            s = r(9580);
                        t.useImageLoading = function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                [r, a] = (0, n.useState)(t),
                                i = (0, s.useCallbackRef)(() => {
                                    a(!1);
                                });
                            return (
                                (0, n.useLayoutEffect)(() => {
                                    var t;
                                    (null == (t = e.current) ? void 0 : t.complete) && a(!1);
                                }, [e, a]),
                                [r, i]
                            );
                        };
                    },
                    1964: (e) => {
                        e.exports = s;
                    },
                    2660: (e) => {
                        e.exports = a;
                    },
                    352: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(l, 2));
                    },
                },
                c = {};
            function f(e) {
                var t = c[e];
                if (void 0 !== t) return t.exports;
                var r = (c[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, f), r.exports);
            }
            ((f.d = (e, t) => {
                for (var r in t) f.o(t, r) && !f.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (f.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var u = {};
            (() => {
                (Object.defineProperty(u, 'X$', { value: !0 }), (u.vL = u.Ee = void 0));
                var e = f(3601);
                Object.defineProperty(u, 'Ee', {
                    enumerable: !0,
                    get: function () {
                        return e.Image;
                    },
                });
                var t = f(9834);
                Object.defineProperty(u, 'vL', {
                    enumerable: !0,
                    get: function () {
                        return t.FallbackImage;
                    },
                });
            })();
            var x = u.vL,
                d = u.Ee;
            u.X$;
        },
        44806: (e, t, r) => {
            r.d(t, { z: () => n });
            var n = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextForcedLogin = 'WebNextForcedLogin'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextProductWithoutRecommendation = 'WebNextProductWithoutRecommendation'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextBrandedPlayerErids = 'WebNextBrandedPlayerErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextLatestGenreAlbumsDegradation = 'WebNextLatestGenreAlbumsDegradation'),
                    (e.WebNextPlaylistFiltersDegradation = 'WebNextPlaylistFiltersDegradation'),
                    (e.WebNextUgcUploadDegradation = 'WebNextUgcUploadDegradation'),
                    (e.WebNextLibrarySyncLimits = 'WebNextLibrarySyncLimits'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextShaderV3 = 'WebNextShaderV3'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
                    (e.WebNextTrackNotModified = 'WebNextTrackNotModified'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextResourcesFileInfo = 'WebNextResourcesFileInfo'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextYnisonEnabled = 'WebNextYnisonEnabled'),
                    (e.WebNextYnisonRestoreMusicAsVibe = 'WebNextYnisonRestoreMusicAsVibe'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextVibeTerminated = 'WebNextVibeTerminated'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.WebNextMarketLanding = 'WebNextMarketLanding'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallDisclaimer = 'WebNextPaywallDisclaimer'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextWaveLikesAndShares = 'WebNextWaveLikesAndShares'),
                    // for PulseSync: BEGIN yellow play button experiment ID for mod settings
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    // for PulseSync: END yellow play button experiment ID for mod settings
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextReplicsLumenUI = 'WebNextReplicsLumenUI'),
                    (e.WebNextReplicsLumenOption = 'WebNextReplicsLumenOption'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion13766 = 'WebNextYaspVersion13766'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextYnisonNewConnector = 'WebNextYnisonNewConnector'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextWizard3 = 'WebNextWizard3'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextWaveForTwoOnboarding = 'WebNextWaveForTwoOnboarding'),
                    (e.WebNextNewWaveTabFeatCover = 'WebNextNewWaveTabFeatCover'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    (e.WebNextSendVibeFeedbacksWithTracks = 'WebNextSendVibeFeedbacksWithTracks'),
                    (e.WebNextArtistRecommendationsAutoScroll = 'WebNextArtistRecommendationsAutoScroll'),
                    (e.WebNextOtelTechMetrics = 'WebNextOtelTechMetrics'),
                    (e.WebNextMainPlayerTitle = 'WebNextMainPlayerTitle'),
                    (e.WebNextUnstableMusicScreen = 'WebNextUnstableMusicScreen'),
                    e
                );
            })({});
        },
    },
]);
