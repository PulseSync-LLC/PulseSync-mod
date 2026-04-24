(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3889],
    {
        18534: (e, a, l) => {
            'use strict';
            l.d(a, { m: () => c });
            var r = l(62936),
                t = l(79950),
                u = l(33878),
                i = l(20512),
                s = l(20418),
                n = l(24635),
                o = l.n(n);
            let c = (e) => {
                let { title: a, children: l, restrictionsClassName: n, ...c } = e;
                return (0, r.jsxs)('section', {
                    className: o().root,
                    ...(0, u.getDataAttrFromProps)(c),
                    children: [
                        a &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(s.Caption, { variant: 'span', type: 'text', size: 'm', weight: 'medium', 'aria-hidden': !0, children: a }),
                                    (0, r.jsx)(i.q, { children: (0, r.jsx)(s.Heading, { variant: 'h4', children: a }) }),
                                ],
                            }),
                        (0, r.jsx)('div', { className: (0, t.$)(o().restrictions, n), children: l }),
                    ],
                });
            };
        },
        24635: (e) => {
            e.exports = { root: 'RestrictionBlock_root__qzBtp', restrictions: 'RestrictionBlock_restrictions__6V1zc' };
        },
        42118: (e) => {
            e.exports = {
                root: 'EqualizerPresets_root__b2gp7',
                buttonIcon: 'EqualizerPresets_buttonIcon__DgPG8',
                buttonText: 'EqualizerPresets_buttonText__cy2_S',
                button: 'EqualizerPresets_button__D8s_l',
                button_disabled: 'EqualizerPresets_button_disabled__BcN1s',
                container: 'EqualizerPresets_container__ABVY8',
            };
        },
        51384: (e) => {
            e.exports = {
                root: 'EqualizerSlider_root__oyr_3',
                container: 'EqualizerSlider_container__J9Te7',
                slider: 'EqualizerSlider_slider__YC0_X',
                important: 'EqualizerSlider_important____ilL',
                serif: 'EqualizerSlider_serif__CJgYC',
                label: 'EqualizerSlider_label__4wtBj',
                label_disabled: 'EqualizerSlider_label_disabled___26v5',
            };
        },
        53030: (e, a, l) => {
            'use strict';
            l.d(a, { A: () => o });
            var r,
                t = l(44020),
                u = {
                    5881: (e, a, l) => {
                        function r() {
                            for (var e, a, l = 0, r = ''; l < arguments.length; )
                                (e = arguments[l++]) &&
                                    (a = (function e(a) {
                                        var l,
                                            r,
                                            t = '';
                                        if ('string' == typeof a || 'number' == typeof a) t += a;
                                        else if ('object' == typeof a)
                                            if (Array.isArray(a)) for (l = 0; l < a.length; l++) a[l] && (r = e(a[l])) && (t && (t += ' '), (t += r));
                                            else for (l in a) a[l] && (t && (t += ' '), (t += l));
                                        return t;
                                    })(e)) &&
                                    (r && (r += ' '), (r += a));
                            return r;
                        }
                        l.r(a), l.d(a, { clsx: () => r, default: () => t });
                        let t = r;
                    },
                    4525: (e, a, l) => {
                        l.r(a), l.d(a, { default: () => r });
                        let r = {
                            root: 'JkKcxRVvjK7lcakkEliC',
                            root_alwaysThumb: 'cOKDtLfDZAuPXftfS2WM',
                            root_trackSize_xxs: 'd6VuG0HnwpGO47uPjPeb',
                            root_trackSize_xs: 'IB_XOYAyYPK4aszY9R1F',
                            root_trackSize_s: 'SHvrm0VRiLVwGqJJjNO8',
                            root_thumbSize_xs: 'BlvJwKLYTicnbJ3Qyuou',
                            root_neverThumb: 'dDJBVBTkzY5zY7vtSbyr',
                            root_thumbSize_s: 'qpvIbN4_hF6CqK0bjCq7',
                            root_thumbSize_m: 'P8_ABi1YnAOS8p8EY87f',
                            root_thumbSize_l: 'D21lBltSEiwHAaG39z6x',
                        };
                    },
                    9097: (e, a) => {
                        var l = Symbol.for('react.transitional.element');
                        function r(e, a, r) {
                            var t = null;
                            if ((void 0 !== r && (t = '' + r), void 0 !== a.key && (t = '' + a.key), 'key' in a))
                                for (var u in ((r = {}), a)) 'key' !== u && (r[u] = a[u]);
                            else r = a;
                            return { $$typeof: l, type: e, key: t, ref: void 0 !== (a = r.ref) ? a : null, props: r };
                        }
                        (a.Fragment = Symbol.for('react.fragment')), (a.jsx = r), (a.jsxs = r);
                    },
                    4377: (e, a, l) => {
                        e.exports = l(9097);
                    },
                    2342: (e, a) => {
                        Object.defineProperty(a, '__esModule', { value: !0 }),
                            (a.ThumbVariant = a.DEFAULT_MAX_VALUE = a.SliderMode = void 0),
                            (a.SliderMode = { NORMAL: 'normal', DEFERRED: 'deferred' }),
                            (a.DEFAULT_MAX_VALUE = 100),
                            (a.ThumbVariant = { HOVER: 'hover', NEVER: 'never', ALWAYS: 'always' });
                    },
                    7886: function (e, a, l) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(a, '__esModule', { value: !0 }), (a.Slider = void 0);
                        let t = l(4377),
                            u = l(5881),
                            i = l(810),
                            s = l(2342),
                            n = r(l(4525)),
                            o = (e) => {
                                let {
                                        forwardRef: a,
                                        className: l,
                                        value: r,
                                        secondaryValue: o = s.DEFAULT_MAX_VALUE,
                                        maxValue: c = s.DEFAULT_MAX_VALUE,
                                        thumbSize: v = 'l',
                                        trackSize: d = 's',
                                        mode: y = s.SliderMode.NORMAL,
                                        onChange: _,
                                        showThumbVariant: k = s.ThumbVariant.HOVER,
                                        ...m
                                    } = e,
                                    [E, p] = (0, i.useState)(null != r ? r : 0),
                                    [f, A] = (0, i.useState)(!1),
                                    [b, q] = (0, i.useState)(!1);
                                (0, i.useEffect)(() => {
                                    f || p(r);
                                }, [r, f]),
                                    (0, i.useEffect)(() => {
                                        !f && b && y === s.SliderMode.DEFERRED && (_(E, !0), q(!1));
                                    }, [y, f, _, E, b]);
                                let h = (0, i.useCallback)(
                                        (e) => {
                                            let a = Number(e.target.value);
                                            p(a), q(!0), 'normal' === y ? (_(a, !0), q(!1)) : _(a, !1);
                                        },
                                        [p, _, y],
                                    ),
                                    S = (0, i.useCallback)(
                                        (e) => {
                                            let a = !1,
                                                l = !1;
                                            e.stopPropagation(),
                                                e.nativeEvent instanceof window.MouseEvent
                                                    ? ((a = 0 === e.nativeEvent.button), (l = 'mousedown' === e.nativeEvent.type))
                                                    : ((a = 1 === e.nativeEvent.touches.length || 'touchend' === e.nativeEvent.type),
                                                      (l = 'touchstart' === e.nativeEvent.type)),
                                                a && A(l);
                                        },
                                        [A],
                                    ),
                                    C = (0, i.useCallback)(() => {
                                        A(!1);
                                    }, [A]),
                                    z = (0, i.useMemo)(() => {
                                        let e = (100 * Math.min(E, c)) / c,
                                            a = (100 * Math.min(o, c)) / c;
                                        return {
                                            backgroundSize: ''.concat(e, '% 100%'),
                                            '--seek-before-width': ''.concat(e, '%'),
                                            '--buffered-width': ''.concat(a, '%'),
                                        };
                                    }, [E, o, c]);
                                return (0, t.jsx)('input', {
                                    ref: a,
                                    className: (0, u.clsx)(
                                        n.default.root,
                                        {
                                            [n.default['root_thumbSize_'.concat(v)]]: v,
                                            [n.default['root_trackSize_'.concat(d)]]: d,
                                            [n.default['root_'.concat(k, 'Thumb')]]: k,
                                        },
                                        l,
                                    ),
                                    type: 'range',
                                    max: c,
                                    value: E,
                                    style: z,
                                    onTouchStart: S,
                                    onTouchEnd: S,
                                    onMouseDown: S,
                                    onMouseUp: S,
                                    onMouseOut: C,
                                    onBlur: C,
                                    onChange: h,
                                    ...m,
                                });
                            };
                        a.Slider = (0, i.forwardRef)((e, a) => (0, t.jsx)(o, { forwardRef: a, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = l.t(t, 2));
                    },
                },
                i = {};
            function s(e) {
                var a = i[e];
                if (void 0 !== a) return a.exports;
                var l = (i[e] = { exports: {} });
                return u[e].call(l.exports, l, l.exports, s), l.exports;
            }
            (s.d = (e, a) => {
                for (var l in a) s.o(a, l) && !s.o(e, l) && Object.defineProperty(e, l, { enumerable: !0, get: a[l] });
            }),
                (s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var n = {};
            (() => {
                Object.defineProperty(n, 'X', { value: !0 }), (n.i = void 0);
                var e = s(7886);
                Object.defineProperty(n, 'i', {
                    enumerable: !0,
                    get: function () {
                        return e.Slider;
                    },
                });
            })();
            var o = n.i;
            n.X;
        },
        64647: (e, a, l) => {
            'use strict';
            l.d(a, { rk: () => w, iV: () => i, MZ: () => M, ML: () => k, Sq: () => s });
            var r,
                t = l(63924),
                u = l(44020);
            let i = (0, u.createContext)(null),
                s = () => {
                    let e = (0, u.useContext)(i);
                    if (!e) throw new t.t('Equalizer cannot be null, please add a context provider', { code: 'E_CONTEXT_EQUALIZER_NULL' });
                    return e;
                };
            var n = l(16264),
                o = l(51606);
            !(function (e) {
                (e.CUSTOM = 'CUSTOM'),
                    (e.DEFAULT = 'DEFAULT'),
                    (e.CLASSICAL = 'CLASSICAL'),
                    (e.CLUB = 'CLUB'),
                    (e.DANCE = 'DANCE'),
                    (e.BASS_BOOST = 'BASS_BOOST'),
                    (e.BASS_AND_TREBLE_BOOST = 'BASS_AND_TREBLE_BOOST'),
                    (e.TREBLE_BOOST = 'TREBLE_BOOST'),
                    (e.SPEAKERS = 'SPEAKERS'),
                    (e.LARGE_HALL = 'LARGE_HALL'),
                    (e.CONCERT = 'CONCERT'),
                    (e.PARTY = 'PARTY'),
                    (e.POP = 'POP'),
                    (e.REGGAE = 'REGGAE'),
                    (e.ROCK = 'ROCK'),
                    (e.SKA = 'SKA'),
                    (e.SOFT = 'SOFT'),
                    (e.SOFT_ROCK = 'SOFT_ROCK'),
                    (e.TECHNO = 'TECHNO');
            })(r || (r = {}));
            let c = {
                [r.CUSTOM]: {
                    id: r.CUSTOM,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 0 },
                        { key: 170, value: 0 },
                        { key: 310, value: 0 },
                        { key: 600, value: 0 },
                        { key: 1e3, value: 0 },
                        { key: 3e3, value: 0 },
                        { key: 6e3, value: 0 },
                        { key: 12e3, value: 0 },
                        { key: 14e3, value: 0 },
                        { key: 16e3, value: 0 },
                    ],
                },
                [r.DEFAULT]: {
                    id: r.DEFAULT,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 0 },
                        { key: 170, value: 0 },
                        { key: 310, value: 0 },
                        { key: 600, value: 0 },
                        { key: 1e3, value: 0 },
                        { key: 3e3, value: 0 },
                        { key: 6e3, value: 0 },
                        { key: 12e3, value: 0 },
                        { key: 14e3, value: 0 },
                        { key: 16e3, value: 0 },
                    ],
                },
                [r.CLASSICAL]: {
                    id: r.CLASSICAL,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: -3.5 },
                        { key: 12e3, value: -3.5 },
                        { key: 14e3, value: -3.5 },
                        { key: 16e3, value: -4.5 },
                    ],
                },
                [r.CLUB]: {
                    id: r.CLUB,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: 4 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: 2.5 },
                        { key: 3e3, value: 2.5 },
                        { key: 6e3, value: 1.5 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [r.DANCE]: {
                    id: r.DANCE,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4.5 },
                        { key: 170, value: 3.5 },
                        { key: 310, value: 1 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -2.5 },
                        { key: 6e3, value: -3.5 },
                        { key: 12e3, value: -3.5 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [r.BASS_BOOST]: {
                    id: r.BASS_BOOST,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4 },
                        { key: 170, value: 4.5 },
                        { key: 310, value: 4.5 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: 0.5 },
                        { key: 3e3, value: -2 },
                        { key: 6e3, value: -4 },
                        { key: 12e3, value: -5 },
                        { key: 14e3, value: -5.5 },
                        { key: 16e3, value: -5.5 },
                    ],
                },
                [r.BASS_AND_TREBLE_BOOST]: {
                    id: r.BASS_AND_TREBLE_BOOST,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 3.5 },
                        { key: 170, value: 2.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -3.5 },
                        { key: 1e3, value: -2 },
                        { key: 3e3, value: 0.5 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 5.5 },
                        { key: 14e3, value: 6 },
                        { key: 16e3, value: 6 },
                    ],
                },
                [r.TREBLE_BOOST]: {
                    id: r.TREBLE_BOOST,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -4.5 },
                        { key: 170, value: -4.5 },
                        { key: 310, value: -4.5 },
                        { key: 600, value: -2 },
                        { key: 1e3, value: 1 },
                        { key: 3e3, value: 5.5 },
                        { key: 6e3, value: 8 },
                        { key: 12e3, value: 8 },
                        { key: 14e3, value: 8 },
                        { key: 16e3, value: 8 },
                    ],
                },
                [r.SPEAKERS]: {
                    id: r.SPEAKERS,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 2 },
                        { key: 170, value: 5.5 },
                        { key: 310, value: 2.5 },
                        { key: 600, value: -1.5 },
                        { key: 1e3, value: -1 },
                        { key: 3e3, value: 0.5 },
                        { key: 6e3, value: 2 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 6 },
                        { key: 16e3, value: 7 },
                    ],
                },
                [r.LARGE_HALL]: {
                    id: r.LARGE_HALL,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 5 },
                        { key: 170, value: 5 },
                        { key: 310, value: 2.5 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -2 },
                        { key: 6e3, value: -2 },
                        { key: 12e3, value: -2 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [r.CONCERT]: {
                    id: r.CONCERT,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -2 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: 2 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: 2.5 },
                        { key: 3e3, value: 2.5 },
                        { key: 6e3, value: 2 },
                        { key: 12e3, value: 1 },
                        { key: 14e3, value: 1 },
                        { key: 16e3, value: 1 },
                    ],
                },
                [r.PARTY]: {
                    id: r.PARTY,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 3.5 },
                        { key: 170, value: 3.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: -0.5 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: 3.5 },
                        { key: 16e3, value: 3.5 },
                    ],
                },
                [r.POP]: {
                    id: r.POP,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: 2 },
                        { key: 310, value: 3.5 },
                        { key: 600, value: 4 },
                        { key: 1e3, value: 2.5 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: -1 },
                        { key: 12e3, value: -1 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [r.REGGAE]: {
                    id: r.REGGAE,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -2.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: 3 },
                        { key: 6e3, value: 3 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [r.ROCK]: {
                    id: r.ROCK,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4 },
                        { key: 170, value: 2 },
                        { key: 310, value: -2.5 },
                        { key: 600, value: -4 },
                        { key: 1e3, value: -1.5 },
                        { key: 3e3, value: 2 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 5.5 },
                        { key: 14e3, value: 5.5 },
                        { key: 16e3, value: 5.5 },
                    ],
                },
                [r.SKA]: {
                    id: r.SKA,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -1 },
                        { key: 170, value: -2 },
                        { key: 310, value: -2 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: 2 },
                        { key: 3e3, value: 2.5 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 5.5 },
                        { key: 16e3, value: 4.5 },
                    ],
                },
                [r.SOFT]: {
                    id: r.SOFT,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 2 },
                        { key: 170, value: 0.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -1 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: 2 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 5.5 },
                        { key: 16e3, value: 6 },
                    ],
                },
                [r.SOFT_ROCK]: {
                    id: r.SOFT_ROCK,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 2 },
                        { key: 170, value: 2 },
                        { key: 310, value: 1 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -2 },
                        { key: 3e3, value: -2.5 },
                        { key: 6e3, value: -1.5 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: 1 },
                        { key: 16e3, value: 4 },
                    ],
                },
                [r.TECHNO]: {
                    id: r.TECHNO,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4 },
                        { key: 170, value: 2.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -2.5 },
                        { key: 1e3, value: -2 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 4.5 },
                        { key: 16e3, value: 4 },
                    ],
                },
            };
            var v = l(42561),
                d = l(54690);
            let y = o.gK.model('EqualizerFrequency', { key: o.gK.number, value: o.gK.number }),
                _ = o.gK.model('EqualizerPreset', { id: o.gK.enumeration(Object.values(r)), preamp: o.gK.number, frequencies: o.gK.array(y) }).actions((e) => ({
                    setPreamp(a) {
                        e.preamp = a;
                    },
                    setAmp(a, l) {
                        e.frequencies.forEach((e) => {
                            e.key === a && (e.value = l);
                        });
                    },
                })),
                k = o.gK
                    .model('Equalizer', {
                        modal: d.qt,
                        isAvailable: o.gK.optional(o.gK.boolean, !1),
                        isEnabled: o.gK.boolean,
                        currentPreset: o.gK.optional(_, c[r.DEFAULT]),
                        customPreset: o.gK.optional(_, c[r.CUSTOM]),
                    })
                    .actions((e) => ({
                        setIsAvailable(a) {
                            e.isAvailable = a;
                        },
                        setEnabled(a) {
                            let { localStorage: l } = (0, o._$)(e);
                            e.isEnabled = a;
                            let r = l.get(v.cYZ.EqualizerConfig);
                            l.set(v.cYZ.EqualizerConfig, { ...r, isEnabled: a, version: '6' });
                        },
                        loadPresets() {
                            let { localStorage: a } = (0, o._$)(e),
                                l = a.get(v.cYZ.EqualizerConfig);
                            if (
                                ((null == l ? void 0 : l.version) !== '6' && (a.remove(v.cYZ.EqualizerConfig), (l = null)),
                                l && ((e.isEnabled = l.isEnabled), l.customPreset && (e.customPreset = (0, o.wg)(l.customPreset)), l.lastPresetId))
                            ) {
                                if (l.lastPresetId === r.CUSTOM) {
                                    e.currentPreset = (0, o.o8)(e.customPreset);
                                    return;
                                }
                                let a = c[l.lastPresetId];
                                e.currentPreset = _.create(a);
                            }
                        },
                        changeCurrentPreset(a) {
                            let { localStorage: l } = (0, o._$)(e),
                                t = l.get(v.cYZ.EqualizerConfig);
                            if ((l.set(v.cYZ.EqualizerConfig, { ...t, lastPresetId: a, version: '6' }), a === r.CUSTOM)) {
                                e.currentPreset = (0, o.o8)(e.customPreset);
                                return;
                            }
                            let u = c[a];
                            e.currentPreset = _.create(u);
                        },
                        changePreamp(a) {
                            let { localStorage: l } = (0, o._$)(e),
                                t = (0, o.dV)(e.currentPreset);
                            (e.customPreset = (0, o.wg)({ ...t, id: r.CUSTOM })), e.customPreset.setPreamp(a), (e.currentPreset = (0, o.o8)(e.customPreset));
                            let u = l.get(v.cYZ.EqualizerConfig);
                            l.set(v.cYZ.EqualizerConfig, { ...u, customPreset: (0, n.HO)(e.customPreset), lastPresetId: r.CUSTOM, version: '6' });
                        },
                        changeAmp(a, l) {
                            let { localStorage: t } = (0, o._$)(e),
                                u = (0, o.dV)(e.currentPreset);
                            (e.customPreset = (0, o.wg)({ ...u, id: r.CUSTOM })), e.customPreset.setAmp(a, l), (e.currentPreset = (0, o.o8)(e.customPreset));
                            let i = t.get(v.cYZ.EqualizerConfig);
                            t.set(v.cYZ.EqualizerConfig, { ...i, customPreset: (0, n.HO)(e.customPreset), lastPresetId: r.CUSTOM, version: '6' });
                        },
                    }));
            var m = l(62936),
                E = l(79950),
                p = l(19718),
                f = l(47480),
                A = l(53058),
                b = l(8669),
                q = l(18099),
                h = l(20418),
                S = l(99289),
                C = l.n(S),
                z = l(26731),
                T = l(5099),
                x = l(81002),
                O = l(85742),
                P = l(42118),
                R = l.n(P);
            let g = {
                    [r.DEFAULT]: (0, m.jsx)(z.A, { id: 'equalizer.default-preset' }),
                    [r.CUSTOM]: (0, m.jsx)(z.A, { id: 'equalizer.custom-preset' }),
                    [r.CLASSICAL]: (0, m.jsx)(z.A, { id: 'equalizer.classical-preset' }),
                    [r.CLUB]: (0, m.jsx)(z.A, { id: 'equalizer.club-preset' }),
                    [r.DANCE]: (0, m.jsx)(z.A, { id: 'equalizer.dance-preset' }),
                    [r.BASS_BOOST]: (0, m.jsx)(z.A, { id: 'equalizer.bass-boost-preset' }),
                    [r.BASS_AND_TREBLE_BOOST]: (0, m.jsx)(z.A, { id: 'equalizer.bass-and-treble-boost-preset' }),
                    [r.TREBLE_BOOST]: (0, m.jsx)(z.A, { id: 'equalizer.treble-boost-preset' }),
                    [r.SPEAKERS]: (0, m.jsx)(z.A, { id: 'equalizer.speakers-preset' }),
                    [r.LARGE_HALL]: (0, m.jsx)(z.A, { id: 'equalizer.large-hall-preset' }),
                    [r.CONCERT]: (0, m.jsx)(z.A, { id: 'equalizer.concert-preset' }),
                    [r.PARTY]: (0, m.jsx)(z.A, { id: 'equalizer.party-preset' }),
                    [r.POP]: (0, m.jsx)(z.A, { id: 'equalizer.pop-preset' }),
                    [r.REGGAE]: (0, m.jsx)(z.A, { id: 'equalizer.reggae-preset' }),
                    [r.ROCK]: (0, m.jsx)(z.A, { id: 'equalizer.rock-preset' }),
                    [r.SKA]: (0, m.jsx)(z.A, { id: 'equalizer.ska-preset' }),
                    [r.SOFT]: (0, m.jsx)(z.A, { id: 'equalizer.soft-preset' }),
                    [r.SOFT_ROCK]: (0, m.jsx)(z.A, { id: 'equalizer.soft-rock-preset' }),
                    [r.TECHNO]: (0, m.jsx)(z.A, { id: 'equalizer.techno-preset' }),
                },
                L = (0, p.PA)((e) => {
                    let { isDisabled: a } = e,
                        l = s(),
                        t = (0, u.useCallback)(
                            (e) => {
                                l.changeCurrentPreset(e.id);
                            },
                            [l],
                        );
                    return (0, m.jsx)(x.ms, {
                        isDisabled: a,
                        className: R().root,
                        onSelect: t,
                        reference: (0, m.jsxs)(T.$, {
                            radius: 'xxxl',
                            className: (0, E.$)(R().button, { [R().button_disabled]: a }),
                            ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_PRESETS_BUTTON),
                            children: [
                                (0, m.jsx)(h.Caption, { className: R().buttonText, variant: 'span', size: 's', weight: 'medium', children: g[l.currentPreset.id] }),
                                (0, m.jsx)(O.Icon, { className: R().buttonIcon, size: 'xxs', variant: 'arrowDown' }),
                            ],
                        }),
                        placement: 'top',
                        offsetOptions: -40,
                        defaultValue: l.currentPreset.id,
                        containerClassName: R().container,
                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_PRESETS_DROPDOWN),
                        children: Object.values(r).map((e) => (0, m.jsx)(x.c$, { id: e, label: g[e] }, e)),
                    });
                });
            var j = l(53030),
                N = l(51384),
                Tooltip = l(85906),
                K = l.n(N);
            let B = (e) => {
                    let { minValue: a, maxValue: l, className: r, label: t, isDisabled: u, onChange: i, value: s, ...n } = e;
                    return (0, m.jsxs)('div', {
                        className: (0, E.$)(K().root, r),
                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_SLIDER_CONTAINER),
                        children: [
                            (0, m.jsxs)('div', {
                                className: K().container,
                                children: [
                                    (0, m.jsx)('div', { className: K().serif }),
                                    (0, m.jsx)(j.A, {
                                        disabled: u,
                                        className: (0, E.$)(K().slider, K().important),
                                        thumbSize: 'm',
                                        trackSize: 'xxs',
                                        onChange: i,
                                        value: s,
                                        showThumbVariant: 'always',
                                        step: 0.1,
                                        min: a,
                                        max: l,
                                        ...n,
                                    }),
                                ],
                            }),
                            (0, m.jsx)(h.Caption, {
                                'aria-hidden': !0,
                                className: (0, E.$)(K().label, { [K().label_disabled]: u }),
                                variant: 'div',
                                weight: 'normal',
                                size: 'xs',
                                children: t,
                            }),
                        ],
                    });
                },
                U = { enter: C().equalizer_enter, enterActive: C().equalizer_enter_active, exit: C().equalizer_exit, exitActive: C().equalizer_exit_active },
                w = (0, p.PA)((e) => {
                    let { title: a, className: l, isExpanded: r, isDisabled: t } = e,
                        i = (0, u.useRef)(null),
                        { formatMessage: n } = (0, f.A)(),
                        o = s(),
                        c = o.isEnabled ? n({ id: 'equalizer.disable-equalizer' }) : n({ id: 'equalizer.enable-equalizer' }),
                        v = (0, u.useCallback)(
                            (e) => {
                                o.setEnabled(e);
                            },
                            [o],
                        ),
                        d = (0, u.useCallback)(
                            (e) => (a) => {
                                o.changeAmp(e, a);
                            },
                            [o],
                        ),
                        y = (0, u.useCallback)(
                            (e) => {
                                o.changePreamp(e);
                            },
                            [o],
                        );
                    return (0, m.jsxs)('div', {
                        className: (0, E.$)(C().root, l),
                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_CONTAINER),
                        children: [
                            (0, m.jsxs)('div', {
                                className: C().header,
                                children: [
                                    (0, m.jsx)(h.Caption, {
                                        className: C().title,
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_TITLE),
                                        children: a,
                                    }),
                                    (0, m.jsx)(q.l, { 'aria-label': c, isChecked: o.isEnabled, onChange: v, ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_TOGGLE) }),
                                ],
                            }),
                            (0, m.jsx)(A.A, {
                                in: r,
                                nodeRef: i,
                                timeout: 200,
                                unmountOnExit: !0,
                                classNames: U,
                                children: (0, m.jsxs)('div', {
                                    ref: i,
                                    className: (0, E.$)(C().equalizer, { [C().equalizer_disabled]: t }),
                                    ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_FREQUENCIES_CONTAINER),
                                    children: [
                                        (0, m.jsxs)('div', {
                                            className: C().container,
                                            children: [
                                                (0, m.jsxs)('div', {
                                                    className: C().preamp,
                                                    children: [
                                                        (0, m.jsx)(B, {
                                                            isDisabled: t,
                                                            minValue: 0.5,
                                                            maxValue: 1.5,
                                                            value: o.currentPreset.preamp,
                                                            onChange: y,
                                                            label: n({ id: 'equalizer.preamp-level' }),
                                                            'aria-label': n({ id: 'equalizer.slider-preamp-label' }),
                                                            ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_PREAMP_SLIDER),
                                                        }),
                                                        (0, m.jsxs)('div', {
                                                            className: C().labels,
                                                            'aria-hidden': !0,
                                                            children: [
                                                                (0, m.jsx)(h.Caption, {
                                                                    className: C().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: n({ id: 'equalizer.amp-label' }, { value: 12 }),
                                                                }),
                                                                (0, m.jsx)(h.Caption, {
                                                                    className: C().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: n({ id: 'equalizer.amp-label' }, { value: 0 }),
                                                                }),
                                                                (0, m.jsx)(h.Caption, {
                                                                    className: C().label,
                                                                    variant: 'div',
                                                                    weight: 'normal',
                                                                    size: 'xs',
                                                                    children: n({ id: 'equalizer.amp-label' }, { value: -12 }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (0, m.jsx)('div', {
                                                    className: C().frequencies,
                                                    children: o.currentPreset.frequencies.map((e) => {
                                                        let a = ((e, a) =>
                                                                e < 1e3 ? e.toString() : a({ id: 'equalizer.frequency-label' }, { value: (e / 1e3).toFixed(0) }))(
                                                                e.key,
                                                                n,
                                                            ),
                                                            l = Math.round(10 * e.value) / 10;
                                                        return (0, m.jsx)(Tooltip.hj, {
                                                            title: `${(l ?? 0).toFixed(1)} dB`,
                                                            children: (0, m.jsx)('div', {
                                                                onWheel: (evt) => {
                                                                    const delta = (evt.deltaY / 1000) * -1;
                                                                    if (l === undefined) return;
                                                                    let value = (parseFloat(l) + parseFloat(delta)).toFixed(1);
                                                                    d(e.key)(Math.min(Math.max(value, -12), 12));
                                                                },
                                                                children: (0, m.jsx)(
                                                                    B,
                                                                    {
                                                                        isDisabled: t,
                                                                        minValue: -12,
                                                                        maxValue: 12,
                                                                        value: e.value,
                                                                        label: a,
                                                                        onChange: d(e.key),
                                                                        'aria-label': n(
                                                                            {
                                                                                id: 'equalizer.slider-frequency-label',
                                                                            },
                                                                            {
                                                                                label: a,
                                                                                value: l,
                                                                            },
                                                                        ),
                                                                        ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_FREQUENCY_SLIDER),
                                                                    },
                                                                    a,
                                                                ),
                                                            }),
                                                        });
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, m.jsx)(L, { isDisabled: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                });
            var D = l(4714);
            let M = (0, p.PA)(() => {
                let { formatMessage: e } = (0, f.A)(),
                    a = s();
                return (0, m.jsx)(D.a, {
                    className: C().modal,
                    headerClassName: C().modalHeader,
                    contentClassName: C().modalContent,
                    title: e({ id: 'equalizer.title' }),
                    open: a.modal.isOpened,
                    onOpenChange: a.modal.onOpenChange,
                    onClose: a.modal.close,
                    size: 'fitContent',
                    placement: 'center',
                    overlayColor: 'full',
                    labelClose: e({ id: 'interface-actions.close' }),
                    closeButtonProps: (0, b.Am)(b.Kq.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON),
                    ...(0, b.Am)(b.Kq.equalizer.EQUALIZER_MODAL),
                    children: (0, m.jsx)(w, { title: e({ id: 'equalizer.enable' }), isExpanded: !0, isDisabled: !a.isEnabled }),
                });
            });
        },
        67055: (e) => {
            e.exports = { root: 'CustomPlayerThumb_root__hZTw6', container: 'CustomPlayerThumb_container__lBm2j' };
        },
        92022: (e, a, l) => {
            'use strict';
            l.d(a, { zf: () => s, rI: () => n, Th: () => T, KB: () => u, ls: () => o, Jy: () => c });
            var r = l(42561),
                t = l(51606);
            let u = t.gK.model('CustomPlayerThumb', { href: t.gK.string, width: t.gK.number, height: t.gK.number }),
                i = t.gK.model('CustomPlayerThumbItem', { id: t.gK.enumeration(Object.values(r.TZj)), name: t.gK.string, thumb: u }),
                s = {
                    [r.TZj.DUCK]: () =>
                        l
                            .e(8962)
                            .then(l.t.bind(l, 68962, 17))
                            .then((e) => e.default),
                    [r.TZj.CAR]: () =>
                        l
                            .e(8765)
                            .then(l.t.bind(l, 68765, 17))
                            .then((e) => e.default),
                },
                n = (e) =>
                    new Map([
                        [r.TZj.DUCK, i.create({ id: r.TZj.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: r.TZj.DUCK, width: 50, height: 50 } })],
                        [r.TZj.CAR, i.create({ id: r.TZj.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: r.TZj.CAR, width: 143, height: 38 } })],
                    ]),
                o = (e) =>
                    !!(
                        'object' == typeof e &&
                        null !== e &&
                        'href' in e &&
                        'string' == typeof e.href &&
                        'width' in e &&
                        'number' == typeof e.width &&
                        'height' in e &&
                        'number' == typeof e.height
                    ),
                c = (e) => e.startsWith(r.nl3);
            var v = l(62936),
                d = l(31124),
                y = l(57249),
                _ = l(79950),
                k = l(19718),
                m = l(49351),
                E = l(44020),
                p = l(47480),
                f = l(59935),
                A = l(60188),
                b = l(5099),
                q = l(46663),
                h = l(67055),
                S = l.n(h),
                C = l(49124);
            let z = m.default.default(
                () =>
                    Promise.resolve()
                        .then(l.bind(l, 31124))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = C.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, d.setWasmUrl)(new URL(y, e).href);
            }
            let T = (0, k.PA)((e) => {
                let { className: a, thumbData: l, onThumbAction: t } = e,
                    { sonataState: u } = (0, r.Pjs)(),
                    { formatMessage: i } = (0, p.A)(),
                    [n, o] = (0, E.useState)(null),
                    [d, y] = (0, E.useState)(null),
                    k = (0, E.useRef)(null),
                    m = (0, E.useRef)(null),
                    h = (0, f.c)(() => {
                        u.status === q.MT.PLAYING ? null == n || n.play() : null == n || n.pause();
                    });
                (0, E.useEffect)(() => {
                    if (!l) return;
                    if (c(l.href)) return void y(l.href);
                    let e = s[l.href];
                    e
                        ? e().then((e) => {
                              c(e) ? y(e) : y(''.concat(window.location.origin).concat(e));
                          })
                        : y(l.href);
                }, [l]),
                    (0, E.useEffect)(() => {
                        n && (n.setUseFrameInterpolation(!1), n.setRenderConfig({ devicePixelRatio: 0.1 }));
                    }, [n]),
                    (0, E.useEffect)(() => {
                        if (n)
                            return (
                                n.addEventListener('load', h),
                                () => {
                                    n.removeEventListener('load', h);
                                }
                            );
                    }, [n, h, u.status]),
                    (0, E.useEffect)(() => {
                        h();
                    }, [n, h, u.status]),
                    (0, E.useEffect)(
                        () => () => {
                            m.current && clearTimeout(m.current);
                        },
                        [],
                    );
                let C = (0, f.c)(() => {
                        m.current && (clearTimeout(m.current), (m.current = null)), null == t || t();
                    }),
                    T = (0, f.c)(() => {
                        t &&
                            (m.current && clearTimeout(m.current),
                            (m.current = setTimeout(() => {
                                null == t || t(), (m.current = null);
                            }, 800)));
                    }),
                    x = (0, f.c)(() => {
                        m.current && (clearTimeout(m.current), (m.current = null));
                    }),
                    O = (0, A.L)(() => {
                        if (l)
                            return { '--thumb-width': ''.concat(l.width, 'px'), '--thumb-height': ''.concat(l.height, 'px'), '--thumb-cursor': t ? 'pointer' : 'auto' };
                    });
                return d
                    ? t
                        ? (0, v.jsx)('div', {
                              className: S().root,
                              style: O,
                              children: (0, v.jsx)(b.$, {
                                  ref: k,
                                  className: (0, _.$)(S().container, a),
                                  onClick: C,
                                  onMouseEnter: T,
                                  onMouseLeave: x,
                                  withRipple: !1,
                                  'aria-label': i({ id: 'branded-player.branding-integration' }),
                                  children: (0, v.jsx)(z, { src: d, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, d),
                              }),
                          })
                        : (0, v.jsx)('div', {
                              className: S().root,
                              style: O,
                              children: (0, v.jsx)('div', {
                                  ref: k,
                                  className: (0, _.$)(S().container, a),
                                  children: (0, v.jsx)(z, { src: d, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, d),
                              }),
                          })
                    : null;
            });
        },
        99289: (e) => {
            e.exports = {
                header: 'Equalizer_header__oL2Ii',
                modal: 'Equalizer_modal__yW0lz',
                modalHeader: 'Equalizer_modalHeader__BaeWi',
                modalContent: 'Equalizer_modalContent__xbClm',
                title: 'Equalizer_title__oP3e2',
                frequencies: 'Equalizer_frequencies__M9bt3',
                label: 'Equalizer_label__cAYfh',
                equalizer: 'Equalizer_equalizer__M9Utp',
                equalizer_disabled: 'Equalizer_equalizer_disabled__NciRX',
                equalizer_enter: 'Equalizer_equalizer_enter___0_xp',
                equalizer_enter_active: 'Equalizer_equalizer_enter_active__hRAgb',
                'enter-collapse': 'Equalizer_enter-collapse__Ypuhz',
                equalizer_exit: 'Equalizer_equalizer_exit__wroQI',
                equalizer_exit_active: 'Equalizer_equalizer_exit_active__68Faq',
                'exit-collapse': 'Equalizer_exit-collapse____a2I',
                preamp: 'Equalizer_preamp__hfuqj',
                container: 'Equalizer_container__wK7dV',
                labels: 'Equalizer_labels__rE8Hc',
            };
        },
    },
]);
