(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9973],
    {
        1134: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(25839),
                a = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, v] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let n = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    v(!0);
                    let s = await e.togglePin();
                    (v(!1),
                        s
                            ? i((0, r.jsx)(u.l, { playlist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, m, e, i, _]);
            };
        },
        1271: (e) => {
            e.exports = {
                root: 'VibeAgentCard_root__GVtqu',
                cover: 'VibeAgentCard_cover__In0Nz',
                controls: 'VibeAgentCard_controls__yXgoW',
                additionals_hide: 'VibeAgentCard_additionals_hide__GpV7Z',
                control: 'VibeAgentCard_control__toXgO',
                playButton: 'VibeAgentCard_playButton__5YkZS',
                pinButton: 'VibeAgentCard_pinButton___f4vw',
            };
        },
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(40207);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        4111: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        5365: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var r,
                a = i(74631),
                n = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (a && (a += ' '), (a += r));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (i.r(t), i.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    2876: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var n in ((r = {}), t)) 'key' !== n && (r[n] = t[n]);
                            else r = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    4014: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let a = i(4377),
                            n = i(5881),
                            s = i(810),
                            l = r(i(2876)),
                            o = (e) => {
                                let { className: t, itemClassName: i, children: r, forwardRef: o, role: c, ...d } = e;
                                return (0, a.jsx)('ol', {
                                    ref: o,
                                    className: (0, n.clsx)(l.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: s.Children.map(r, (e) => (0, a.jsx)('li', { className: (0, n.clsx)(l.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, s.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, l), i.exports);
            }
            ((l.d = (e, t) => {
                for (var i in t) l.o(t, i) && !l.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.l = void 0));
                var e = l(4014);
                Object.defineProperty(o, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = o.l;
            o.X;
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var r = i(25839),
                a = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(63149);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, v] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    v(!0);
                    let s = await e.toggleLike();
                    (v(!1),
                        s === l.f.OK
                            ? i((0, r.jsx)(_.T, { artist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, p, i]);
            };
        },
        8900: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => c });
            var r = i(74631),
                a = i(91886),
                n = i(36484),
                s = i(62562),
                l = i(49984),
                o = i(75167);
            let c = (e) => {
                var t;
                let { id: i, ref: c } = e,
                    { config: d, isOnboardingOpened: u, setIsOnboardingOpened: _ } = (0, o.w)(),
                    m = (0, r.useRef)(!1),
                    v = (0, a.BL)([{ current: c }], !c),
                    { isIntersecting: p } = null != (t = v[l.N]) ? t : {},
                    h = (0, s.N)().get(n.U2);
                for (let { id: e, storageKey: t, enabled: a } of ((0, r.useEffect)(() => {
                    if (m.current && p) {
                        let e = d.find((e) => {
                            let { id: t } = e;
                            return t === i;
                        });
                        e && h.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [d, i, p, h, v, c]),
                d)) {
                    let r = h.get(t);
                    if (a) {
                        if (null == u ? void 0 : u.current) return !1;
                        if (i === e) {
                            if (r) return !1;
                            return ((m.current = !0), _(!0), !0);
                        }
                        if (!r) break;
                    }
                }
                return !1;
            };
        },
        9911: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var r,
                a = i(6274),
                n = i(74631),
                s = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(n, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return (s[e](i, i.exports, o), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (i) => {
                    let [r, a] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (a(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        l();
                    }, [i, l]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    (null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l));
                                }
                            );
                        }, [i, l]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: r,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: r && n,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        10557: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => j });
            var r = i(25839),
                a = i(10648),
                n = i(57249),
                s = i(82298),
                l = i(88204),
                o = i(13624),
                c = i(74631),
                d = i(61493),
                u = i(50314),
                _ = i(71035),
                m = i(49656),
                v = i(14693),
                p = i(23818),
                h = i(23976),
                x = i(96618),
                f = i(89288);
            let C = (e, t, i) => {
                let r = (r) => {
                    let a = (r + e / 30) % 12,
                        n = t * Math.min(i, 1 - i);
                    return i - n * Math.max(-1, Math.min(a - 3, 9 - a, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var g = i(49337);
            let y = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var b = i(15283),
                T = i.n(b),
                k = i(49124);
            let A = o.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 10648))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = k.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(n, e).href);
            }
            let j = (0, l.PA)((e) => {
                let { agent: t, isPlaying: i } = e,
                    [a, n] = (0, c.useState)(null),
                    { state: l, toggleTrue: o } = (0, v.e)(!1),
                    { state: b, toggleTrue: k, toggleFalse: j } = (0, v.e)(!1),
                    { theme: I } = (0, x.W)(),
                    N = (0, c.useRef)(null),
                    L = t.entityType === u.h.ARTIST,
                    P = t.entityType === u.h.ALBUM || t.entityType === u.h.TRACK || t.entityType === u.h.PLAYLIST,
                    R = t.cover.color,
                    S = t.cover.uri,
                    O = (0, _.c)(async () => {
                        if (l && R && I) {
                            j();
                            let {
                                    color: e,
                                    glow1: i,
                                    glow2: r,
                                } = ((e) => {
                                    let { averageColor: t, theme: i, custom: r } = e,
                                        { h: a, s: n, l: s } = (0, f.g8)(t);
                                    if (r) {
                                        if (i === g.S.Dark) {
                                            let e = y(n + 5, 50, 100);
                                            return { color: C(a, e, y(s - 40, 12, 25)), glow1: C(a, e, y(s - 5, 45, 60)), glow2: C(a, e, y(s + 35, 80, 90)) };
                                        }
                                        let e = y(n - 2, 50, 100);
                                        return { color: C(a, e, y(s + 43, 80, 95)), glow1: C(a, e, y(s + 5, 45, 75)), glow2: C(a, e, y(s, 35, 55)) };
                                    }
                                    return { color: C(a, (n > 25 ? Math.min(n + 25, 60) : n) / 100, (s > 20 ? Math.min(s + 15, 60) : s) / 100) };
                                })({ averageColor: R, theme: I, custom: !t.entityType }),
                                n = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: i },
                                        { id: 'glow_2', type: 'Color', value: r },
                                    ],
                                });
                            (await (null == a ? void 0 : a.setThemeData(n)), k());
                        }
                    }),
                    E = (0, _.c)(() => {
                        (o(), O());
                    });
                ((0, c.useEffect)(() => {
                    i ? null == a || a.play() : null == a || a.pause();
                }, [a, i]),
                    (0, c.useEffect)(() => {
                        O();
                    }, [R, O, I, l]),
                    (0, c.useEffect)(() => {
                        if (a)
                            return (
                                a.setUseFrameInterpolation(!1),
                                a.setRenderConfig({ devicePixelRatio: 0.1 }),
                                a.addEventListener('load', E),
                                () => {
                                    a.removeEventListener('load', E);
                                }
                            );
                    }, [a, E]));
                let w = !l || !b,
                    B = (0, m.L)(() => {
                        if (!N.current) return;
                        let e = L ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(N.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: N,
                    className: (0, s.$)(T().root, { [T().root_loading]: w }),
                    style: B,
                    'data-test-id': w ? d.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(T().cover, { [T().cover_round]: L, [T().cover_square]: P, [T().cover_loading]: w }),
                            children: [
                                t.entityType &&
                                    S &&
                                    (0, r.jsx)(p._V, { src: S, size: 200, fit: 'cover', withAvatarReplace: !0, className: T().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(A, { src: t.animationUri, loop: !0, dotLottieRefCallback: n, className: T().animation }),
                            ],
                        }),
                        (0, r.jsx)(h.W, { className: (0, s.$)(T().shimmer, { [T().shimmer_loading]: w }), isActive: !0, radius: L ? 'round' : 'm' }),
                    ],
                });
            });
        },
        13936: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        14693: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            var r,
                a = i(74631),
                n = {
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0));
                let e = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var r = (s[t] = { exports: {} });
                    return (n[t](r, r.exports, e), r.exports);
                })(810);
                l.useToggle = (t) => {
                    let [i, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: i, toggle: a, setState: r, toggleTrue: n, toggleFalse: s };
                };
            })(),
                l.__esModule);
            var o = l.useToggle;
        },
        15283: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        15787: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        18412: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => C });
            var r = i(25839),
                a = i(82298),
                n = i(74631),
                s = i(36619),
                l = i(61493),
                o = i(66738),
                c = i(23818),
                d = i(86869),
                u = i(23976),
                _ = i(4254),
                m = i(61777),
                v = i(29481),
                p = i(97522),
                h = i(73208),
                x = i.n(h);
            let f = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: h,
                            subTitle: f,
                            title: C,
                            description: g,
                            viewAllActionLink: y,
                            controls: b,
                            titleSize: T = 'm',
                            coverBackgroundColor: k,
                            coverRadius: A = 's',
                            titleClassName: j,
                            titleLineClamp: I,
                            fallbackIconVariant: N,
                            available: L = !0,
                            onViewAllAction: P,
                            titleChildren: R,
                            children: S,
                            headingRef: O,
                            coverContainerClassName: E,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: B = !0,
                            isShimmerVisible: M,
                            isShimmerActive: D,
                            withCover: z,
                            withDescription: V,
                            forwardRef: U,
                            shimmerCoverClassName: K,
                            shouldSendAnalyticsOnLoaded: H,
                            ...$
                        } = e,
                        F = (0, m.f)(),
                        W = (0, n.useRef)(null),
                        q = i || z,
                        Y = g || V,
                        X = (0, n.useCallback)(() => {
                            W.current && 'focus' in W.current && W.current.focus();
                        }, []),
                        G = (0, v.N)(),
                        Q = (0, n.useCallback)(() => {
                            P ? P() : G({ to: s.AppScreen.Link });
                        }, [G, P]);
                    (0, n.useEffect)(() => {
                        H && F();
                    }, [H, F]);
                    let Z = (0, n.useMemo)(
                            () =>
                                C && y && L
                                    ? (0, r.jsxs)(p.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, r.jsx)(o.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: y,
                                          onClick: Q,
                                          'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(_.DZ, {
                                                  id: h,
                                                  className: (0, a.$)(x().heading, j),
                                                  variant: w,
                                                  size: T,
                                                  weight: 'bold',
                                                  lineClamp: I,
                                                  ref: O,
                                                  children: C,
                                              }),
                                              R,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, r.jsx)(_.DZ, {
                                                  id: h,
                                                  className: (0, a.$)(x().heading, j, { [x().heading_notAvailable]: !L }),
                                                  variant: w,
                                                  size: T,
                                                  weight: 'bold',
                                                  lineClamp: I,
                                                  ref: O,
                                                  'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                                  children: C,
                                              }),
                                              R,
                                          ],
                                      }),
                            [L, Q, O, w, h, C, j, I, T, y, R],
                        ),
                        J = (0, n.useMemo)(() => (V && M ? (0, r.jsx)(u.W, { isActive: D, className: x().shimmerDescription }) : g), [V, M, g, D]),
                        ee = (0, n.useMemo)(
                            () =>
                                z && M
                                    ? (0, r.jsx)(u.W, { isActive: D, className: (0, a.$)(x().shimmerCover, K), radius: 's' })
                                    : (0, r.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: N,
                                          style: { backgroundColor: k },
                                          className: x().cover,
                                          ref: W,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': l.S7.BLOCK_HEADER_COVER,
                                      }),
                            [k, i, N, X, D, M, K, z],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(x().root, t),
                        ref: U,
                        ...$,
                        'data-test-id': l.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: x().start,
                                children: [
                                    q && (0, r.jsx)(d.t, { radius: A, className: (0, a.$)(x().coverContainer, E), children: ee }),
                                    (0, r.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            f,
                                            Z,
                                            Y &&
                                                (0, r.jsx)(_.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: B ? 2 : void 0,
                                                    className: (0, a.$)(x().description, { [x().description_widthLimit]: B }),
                                                    'data-test-id': l.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            b || S,
                        ],
                    });
                },
                C = (0, n.forwardRef)((e, t) => (0, r.jsx)(f, { forwardRef: t, ...e }));
        },
        19966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => a });
            var r = i(79497);
            let a = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, r.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        21971: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Q });
            var r = i(25839),
                a = i(88204),
                n = i(39004),
                s = i(36619),
                l = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                _ = i(33660),
                m = i(74631),
                v = i(31860),
                p = i(91149),
                h = i(92942),
                x = i(27954),
                f = i(57549),
                C = i(86869),
                g = i(69084),
                y = i(4254),
                b = i(51790),
                T = i(6323),
                k = i(24596),
                A = i.n(k);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: l } = (0, n.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(b.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: A().message,
                        children: [
                            (0, r.jsx)(g.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(C.t, {
                                className: A().cover,
                                radius: 'round',
                                children: (0, r.jsx)(T.B, { className: A().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(y.HL, { className: A().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(7361),
                N = i(90613),
                L = i(3210),
                P = i(11609),
                R = i(79367),
                S = i(40110),
                O = i(20258),
                E = i(34159),
                w = i(30290),
                B = i(29872),
                M = i(56120),
                D = i(87201),
                z = i(83014),
                V = i(44806),
                U = i(55491),
                K = i(44851),
                H = i(14240),
                $ = i(56615),
                F = i(16386),
                W = i(67303),
                q = i(74682),
                Y = i(59043),
                X = i(2144),
                G = i(6304);
            let Q = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: C, onOpenChange: g, open: y, ...b } = e,
                    { shouldShowBuySubscriptionModal: T, showBuySubscriptionModal: k } = (0, B.q)(),
                    {
                        settings: { isMobile: A },
                        modals: { artistAboutModal: Q },
                        trailer: Z,
                        user: J,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, N.A)(C),
                    ei = (0, I.K)(C),
                    er = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, h.l)(),
                            [a, s] = (0, m.useState)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(f.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let n = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === v.f.OK
                                    ? i((0, r.jsx)(j, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, r.jsx)(f.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(C),
                    ea = (0, E.F)(),
                    en = ''.concat(S.U.ARTIST, '-').concat(null == C ? void 0 : C.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: el } = (0, w.f)({ blockId: S.U.ARTIST, contextType: o.K.Artist, contextId: null == C ? void 0 : C.id }),
                    { shareLink: eo, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == C ? void 0 : C.id) ? i : '' } }),
                    ed = (0, L.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == C ? void 0 : C.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, D.B)({
                        seeds: null != (a = null == C ? void 0 : C.seeds) ? a : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == C ? void 0 : C.id,
                    }),
                    em = (0, R.P)(),
                    ev = es((null == C ? void 0 : C.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (T && J.isAuthorized) return void k();
                        eu || e_();
                    }),
                    eh = (0, c.c)(() => {
                        if (!em()) {
                            if (T) return void k();
                            (null == C ? void 0 : C.id) && (Z.setUtmLink(el), Z.openArtistTrailer(C.id), ea(s.DomainObjectType.Artist, C.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        Q.open(null == C ? void 0 : C.id);
                    });
                (0, M.N)(y);
                let ef = { variant: U.Y.ARTIST, id: null == C ? void 0 : C.id, title: null == C ? void 0 : C.name, path: ec },
                    eC = ee.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    eg = null == C || null == (t = C.trailer) ? void 0 : t.isAvailable,
                    ey = ee.checkExperiment(V.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: A,
                    offsetOptions: 10,
                    open: y,
                    onOpenChange: g,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...b,
                    children: [
                        eC && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(P.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !A && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(W.L, { onClick: et, isPinned: null == C ? void 0 : C.isPinned }) }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(F.T, {
                                onClick: ei,
                                isLiked: null == C ? void 0 : C.isLiked,
                                disabled: !J.isAuthorized || !(null == C ? void 0 : C.isAvailable),
                            }),
                        }),
                        eg && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(Y.N, { onClick: eh }) }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(X.C, { onClick: ep, disabled: !(null == C ? void 0 : C.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: g }),
                        }),
                        (0, r.jsx)(q.H, { disabled: !C, shareLink: eo, entityMeta: ef }),
                        ey &&
                            (0, r.jsx)(G.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)($.D, { onClick: er, isDisliked: null == C ? void 0 : C.isDisliked, disabled: !(null == C ? void 0 : C.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        27089: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => k });
            var r = i(25839),
                a = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(61493),
                o = i(49656),
                c = i(51246),
                d = i(4254),
                u = i(47009),
                _ = i(26742),
                m = i(52512),
                v = i(97952),
                p = i(87201),
                h = i(27954),
                x = i(5668),
                f = i(41580),
                C = i(49438),
                g = i(75159),
                y = i(10557),
                b = i(1271),
                T = i.n(b);
            let k = (0, n.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: i = !0, shouldShowAdditionals: n = !0, additionalsLinesCount: b = 3, className: k } = e,
                    { pageId: A } = (0, v.$)(),
                    { blockIdForFrom: j } = (0, _.N)(),
                    { ref: I, intersectionPropertyId: N } = (0, m.n)(),
                    { freeAccess: L } = (0, h.g)(),
                    [P, R] = (0, s.useState)(!1),
                    S = (0, g.A)(t),
                    { isPlaying: O, togglePlay: E } = (0, p.B)({ seeds: t.seeds, pageIdForFrom: A, blockIdForFrom: j }),
                    w = (0, u.b)(),
                    B = (0, s.useCallback)(() => {
                        L.isVibeStartRestricted || (E(), w(!O));
                    }, [L.isVibeStartRestricted, E, w, O]),
                    M = (0, s.useCallback)(
                        () =>
                            (0, r.jsx)(
                                C.D,
                                {
                                    className: (0, a.$)(T().playButton, T().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: B,
                                    isPlaying: O,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, B, O],
                    ),
                    D = (0, o.L)(() =>
                        (0, r.jsx)(
                            x.S,
                            {
                                isEnabled: L.isVibeStartRestricted,
                                isOpened: P,
                                onOpenChange: R,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: t.stationType,
                                renderChildren: M,
                            },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    z = (0, o.L)(() =>
                        (0, r.jsx)(f.O, { onClick: S, isPinned: t.isPinned, className: (0, a.$)(T().pinButton, T().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    V = (0, o.L)(() =>
                        (0, r.jsxs)('div', {
                            className: T().cover,
                            onClick: B,
                            children: [
                                t.agent && (0, r.jsx)(y.s, { agent: t.agent, isPlaying: O }),
                                (0, r.jsx)(c.hg, { isVisible: P, className: T().controls, playControl: i ? D : void 0, pinControl: z }),
                            ],
                        }),
                    );
                return (0, r.jsx)(c.MN, {
                    ref: I,
                    className: (0, a.$)(T().root, k),
                    'data-intersection-property-id': N,
                    contentLinesCount: b,
                    view: V,
                    textPosition: 'center',
                    wrapperClassName: (0, a.$)({ [T().additionals_hide]: !n }),
                    title: (0, r.jsx)(d.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, r.jsx)(
                        d.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    'data-test-id': l.OA.vibe.VIBE_AGENT_CARD,
                });
            });
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(25839),
                a = i(35015),
                n = i(10546);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        28664: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        37922: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        39058: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var r = i(25839),
                a = i(74631),
                n = i(53424);
            let s = (e) => {
                let { tabId: t, tabPos: i, children: s, isTabSelectedByDefault: l } = e,
                    o = (0, a.useMemo)(() => ({ tabId: t, tabPos: i, isTabSelectedByDefault: l }), [t, i, l]);
                return (0, r.jsx)(n.F.Provider, { value: o, children: s });
            };
        },
        41459: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var r = i(74631),
                a = i(39004);
            let n = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        41544: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => j });
            var r = i(25839),
                a = i(82298),
                n = i(88204),
                s = i(84059),
                l = i(74631),
                o = i(39004),
                c = i(8487),
                d = i(61493),
                u = i(49656),
                _ = i(3392),
                m = i(4254),
                v = i(4331),
                p = i(85743),
                h = i(27954),
                x = i(19410),
                f = i(12929),
                C = i(62926),
                g = i(97522),
                y = i(40846),
                b = i(91171),
                T = i(87221),
                k = i(12752),
                A = i.n(k);
            let j = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: k,
                        withExplicitMark: j,
                        withSecondaryColor: I,
                        captionSize: N = 'm',
                        explicitSize: L = 'xxxs',
                        withAllArtistsTitle: P,
                        textClassName: R,
                        artistsClassName: S,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: E = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: B,
                        beforeTitle: M,
                        withArtistLink: D,
                        withTrackLink: z,
                        afterTitle: V,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: K } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, p.z)(),
                    {
                        settings: { isMobile: $ },
                        slam: F,
                    } = (0, h.g)(),
                    W = (0, b.$)({ withCustomTooltip: E }),
                    q = (0, s.useSearchParams)(),
                    Y = (0, y.B)(n, {
                        isMobile: $,
                        isOfflineModeEnabled: F.isOfflineModeEnabled,
                        albumArtists: k,
                        withTrackLink: z,
                        withArtistLink: D,
                        withExplicitMark: j,
                        query: B ? Object.fromEntries(q) : void 0,
                    }),
                    X = (0, l.useMemo)(() => {
                        var e;
                        let t = K({ id: 'entity-names.track-name' }, { trackName: n.title });
                        return ''.concat(t, ' ').concat(null != (e = n.version) ? e : '');
                    }, [K, n.title, n.version]),
                    G = (0, T.O)({ track: n, onNavigate: H, withSavingQueryParams: B, entityType: f.n.TRACK }),
                    Q = (0, l.useCallback)(
                        (e) => {
                            var t;
                            let i = ''.concat(Y.title, ' ').concat(null != (t = Y.version) ? t : '');
                            return (0, r.jsx)(_.m_, {
                                enabled: W && !$,
                                offsetOptions: 4,
                                placement: 'top',
                                text: i,
                                hoverSettings: x.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, a.$)(A().text, A().title),
                                    type: 'entity',
                                    size: N,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: Y.title,
                                }),
                            });
                        },
                        [$, W, N, Y.title, Y.version],
                    ),
                    Z = (0, u.L)(() => {
                        var e;
                        let t = ''.concat(Y.title, ' ').concat(null != (e = Y.version) ? e : '');
                        return Y.shouldShowRemovedTitle
                            ? (0, r.jsx)(_.m_, {
                                  enabled: W && !$,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: K({ id: 'track-title.error-not-found' }),
                                  hoverSettings: x.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, a.$)(A().text, A().title),
                                      type: 'entity',
                                      size: N,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: W ? void 0 : K({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : Y.link
                              ? (0, r.jsx)(g.N, {
                                    onClick: G,
                                    className: A().albumLink,
                                    href: Y.link.href,
                                    'aria-label': X,
                                    title: W ? void 0 : t,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: Q(),
                                })
                              : Q({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }),
                    J = (0, l.useMemo)(() => +!!w, [w]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_disliked]: n.isDisliked && !O, [A().root_withSecondaryColor]: I }, t),
                    children: (0, r.jsxs)('div', {
                        className: A().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(A().titleContainer, { [A().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, a.$)(A().text, R),
                                        type: 'entity',
                                        size: N,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            Z,
                                            Y.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, a.$)(A().text, A().version),
                                                    type: 'entity',
                                                    size: N,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: W ? void 0 : Y.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, r.jsx)(C.N, {
                                            containerClassName: A().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: L,
                                            variant: Y.explicitMark,
                                            className: A().explicitMark,
                                            trackId: n.id,
                                        }),
                                    V,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, r.jsx)(v.i, {
                                    className: (0, a.$)(A().text, { [A().artists]: w }, S, R),
                                    withAllArtistsTitle: P,
                                    linkClassName: (0, a.$)(A().text, A().link),
                                    captionClassName: (0, a.$)(A().text, A().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: J,
                                    captionSize: N,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        41707: (e, t, i) => {
            'use strict';

            var pulseSyncPlaylistDownloadIcons = i(66738);
            i.d(t, { B: () => J });
            var pulseSyncMenuJsx = i(25839),
                pulseSyncMenuItems = i(10820),
                pulseSyncMenuIcons = i(66738);
            var r = i(25839),
                a = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                v = i(66738),
                p = i(86869),
                h = i(4254),
                x = i(4331),
                f = i(62948),
                C = i(1134),
                g = i(79367),
                y = i(29481),
                b = i(47009),
                T = i(34159),
                k = i(52512),
                A = i(30290),
                j = i(61561),
                I = i(85686),
                N = i(85743),
                L = i(50209),
                P = i(27954),
                R = i(74760),
                S = i(6323),
                O = i(64720),
                E = i(97522),
                w = i(41580),
                B = i(49438),
                M = i(71996),
                D = i(78437),
                z = i(41459),
                V = i(10820),
                U = i(3210),
                K = i(11609),
                H = i(29872),
                $ = i(56120),
                F = i(83014),
                W = i(44806),
                q = i(16386),
                Y = i(67303),
                X = i(59043);
            let G = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: n, ...s } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, H.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: v },
                        trailer: p,
                        user: h,
                    } = (0, P.g)(),
                    x = (0, f.K)(i),
                    y = (0, C.A)(i),
                    b = (0, T.F)(),
                    { formatMessage: k } = (0, l.A)(),
                    A = (0, g.P)(),
                    j = m.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    I = (0, U.A)({ entityVariant: F.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, $.N)(n);
                let N = (0, u.c)(() => {
                    if (d) return void _();
                    A() || (p.openPlaylistTrailer(i.id), b(o.DomainObjectType.Playlist, i.id));
                });
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), a?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                return (0, r.jsxs)(V.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: n,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: k({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...s,
                    children: pulseSyncInjectPlaylistMenuItems([
                        j && (0, r.jsx)(K.d, { entityVariant: F.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : I }),
                        !v && (0, r.jsx)(Y.L, { onClick: y, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(q.T, { onClick: x, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(V.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(X.N, { onClick: N, disabled: !i.isAvailable }),
                    ]),
                });
            });
            var Q = i(15787),
                Z = i.n(Q);
            let J = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: V, customDescription: U, onCoverMouseDown: K } = e,
                    { ref: H, intersectionPropertyId: $ } = (0, k.n)(),
                    {
                        trailer: F,
                        user: W,
                        paywall: { modal: q },
                    } = (0, P.g)(),
                    { from: Y, utmLink: X } = (0, A.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Q } = (0, l.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, N.z)(),
                    [ei, er] = (0, s.useState)(!1),
                    [ea, en] = (0, s.useState)(!1),
                    [es, el] = (0, s.useState)(!1),
                    eo = (0, z.r)(i),
                    ec = (0, f.K)(i),
                    ed = (0, C.A)(i),
                    eu = (0, y.N)(),
                    e_ = (0, b.b)(),
                    em = (0, I.Z)(i.url),
                    ev = (0, T.F)(),
                    ep = (0, g.P)(),
                    eh = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (F.setUtmLink(X), F.openPlaylistTrailer(i.id), ev(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, ef] = (0, s.useState)(!1),
                    { isPlaying: eC, togglePlay: eg } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: Y, utmLink: X }, loadContextMeta: !0 },
                    }),
                    ey = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eb = (0, u.c)((e) => {
                        (ey(), em(e));
                    }),
                    eT = (0, j.N)(),
                    ek = (0, u.c)(() => {
                        if (!ep()) {
                            if (eT) return void q.open();
                            (ei || eC || (er(!0), null == et || et()), eg(), e_(!eC));
                        }
                    }),
                    eA = (0, u.c)(() => {
                        (ea || i.isLiked || (en(!0), null == J || J()), ec());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, u.c)((e) => {
                        (el(e), ef(e));
                    }),
                    eN = (0, s.useMemo)(() => {
                        var e;
                        return U
                            ? (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    x.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    eL = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                O.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eA,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(
                                        M.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eS = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eb,
                                    onMouseDown: K,
                                    children: [
                                        (0, r.jsx)(S.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(m.hg, {
                                            isVisible: es || ex,
                                            className: Z().controls,
                                            playControl: (0, r.jsx)(
                                                B.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ek,
                                                    isPlaying: eC,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, r.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eI,
                                                    open: es,
                                                    onClick: ej,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [eb, K, i, eo, es, ex, ek, eC, eL, eI, ej, eR, eP],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(m.MN, {
                    ref: H,
                    'aria-label': eo,
                    className: (0, a.$)(Z().root, t),
                    title: (0, r.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(E.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: ey, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(E.N, { className: Z().srTitleLink, href: i.url, onClick: ey, children: i.title }),
                    'data-intersection-property-id': $,
                    contentLinesCount: V,
                    view: eS,
                    description: eN,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, r.jsx)(R.x, {
                                ariaLabel: Q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        n,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(25839),
                a = i(35015),
                n = i(3163);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        49337: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var r = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        49807: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => x });
            var r = i(25839),
                a = i(88204),
                n = i(74631),
                s = i(36619),
                l = i(98436),
                o = i(76939),
                c = i(84058),
                d = i(41707),
                u = i(27089),
                _ = i(61777),
                m = i(95314),
                v = i(89514),
                p = i(66284);
            let h = (0, a.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: h,
                            containerClassName: x,
                            headerClassName: f,
                            meta: C,
                            data: g,
                            headingVariant: y,
                            className: b,
                            isLoaded: T,
                            shouldSendAnalyticsOnLoaded: k,
                            hasSentAnalyticsOnLoaded: A,
                            setHasSentAnalyticsOnLoaded: j,
                            ...I
                        } = e,
                        N = (0, _.f)();
                    return (
                        (0, n.useEffect)(() => {
                            k && !A && T && (N(), j(!0));
                        }, [A, T, N, j, k]),
                        (0, r.jsx)(p.O, {
                            className: b,
                            ...I,
                            isShimmerVisible: a,
                            isShimmerActive: h,
                            containerClassName: x,
                            headerClassName: f,
                            title: C.title,
                            description: C.description,
                            viewAllActionLink: C.viewAllActionLink,
                            ref: i,
                            headingVariant: y,
                            children:
                                null == g || null == (t = g.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          switch (e.type) {
                                              case l._.LIKED_PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(d.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case l._.ALBUM_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Album,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(o.a, { album: e.data, contentLinesCount: 3, releaseDateFormatter: v.m }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case l._.ARTIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Artist,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(c.a, { artist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case l._.WAVE_AGENT_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Wave,
                                                          objectId: e.data.stationId,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(u.y, { vibe: e.data }),
                                                      },
                                                      e.data.stationId,
                                                  );
                                              case l._.PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(d.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case l._.QUERY_TO_VIBE_ITEM:
                                                  return (0, r.jsx)(n.Fragment, {}, e.data.stationId);
                                          }
                                      }),
                        })
                    );
                }),
                x = (0, n.forwardRef)((e, t) => (0, r.jsx)(h, { forwardRef: t, ...e }));
        },
        50314: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { h: () => r }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(r || (r = {})));
        },
        57138: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var r = i(25839),
                a = i(74631),
                n = i(14482);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: s,
                        blockPosX: l,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    v = (0, a.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: s,
                            blockPosX: l,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, i, s, l, o, c, d, u, m],
                    );
                return (0, r.jsx)(n.p.Provider, { value: v, children: _ });
            };
        },
        61777: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => f });
            var r = i(74631),
                a = i(67379),
                n = i(17850),
                s = i(59450),
                l = i(49656),
                o = i(84e3),
                c = i(58069),
                d = i(20258),
                u = i(26742),
                _ = i(25195),
                m = i(37314),
                v = i(97952),
                p = i(10764),
                h = i(72594);
            let x = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                f = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, s.st)(),
                        i = (0, o.U)(),
                        { hash: f } = (0, s.gf)(),
                        { pageId: C } = (0, v.$)(),
                        { tabId: g, tabPos: y, isTabSelectedByDefault: b } = (0, h.R)(),
                        { offsetBlockPosY: T } = (0, _.u)(),
                        { blockId: k, blockType: A, blockPosX: j, blockPosY: I, mainObjectType: N, mainObjectId: L, objectsCount: P } = (0, u.N)(),
                        { filterKey: R, filterValue: S, filterPos: O } = (0, m.G)(),
                        { skeleton: E } = (0, p.b)(),
                        w = (0, l.L)(() => (void 0 !== T && void 0 !== I ? T + I : I));
                    return (0, r.useCallback)(() => {
                        if (!t || !C || !d.xK.includes(C) || !x.includes(C) || e.current) return;
                        let r = { hash: f, pageId: c.F[C], entityType: A, entityId: k, entityPosX: j, entityPosY: w, objectsCount: P };
                        (void 0 !== R && ((r.filterKey = R), (r.filterValue = S), (r.filterPos = O)),
                            d.qG.includes(C) && ((r.tabId = g), (r.tabPos = y), (r.isTabSelectedByDefault = b)),
                            E && (r.skeletonId = E),
                            L && N && ((r.mainObjectType = N), (r.mainObjectId = L)));
                        let s = (0, a.F)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, n.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, C, f, A, k, j, w, R, S, O, P, E, L, N, i, g, y, b]);
                };
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var r = i(25839),
                a = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(42190);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, v] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let n = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    v(!0);
                    let s = await e.toggleLike();
                    (v(!1),
                        s === l.f.OK
                            ? i((0, r.jsx)(_.T, { playlist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, p, i]);
            };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(25839),
                a = i(53712),
                n = i(35015),
                s = i(3163);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        66284: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => C });
            var r = i(25839),
                a = i(82298),
                n = i(74631),
                s = i(89288),
                l = i(36619),
                o = i(49656),
                c = i(5365),
                d = i(23976),
                u = i(26742),
                _ = i(95314),
                m = i(18412),
                v = i(80986),
                p = i(95388),
                h = i(99024),
                x = i.n(h);
            let f = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: h,
                            isShimmerActive: f,
                            isShimmerWithSubcover: C,
                            isShimmerCentered: g,
                            isShimmerRounded: y,
                            title: b,
                            description: T,
                            coverUrl: k,
                            viewAllActionLink: A,
                            titleChildren: j,
                            headerChildren: I,
                            children: N,
                            className: L,
                            containerClassName: P,
                            headerClassName: R,
                            itemClassName: S,
                            showHeaderShimmer: O = !1,
                            showShimmerInfo: E = !0,
                            showControls: w = !0,
                            headingRef: B,
                            headingVariant: M,
                            customShimmer: D,
                            ...z
                        } = e,
                        V = (0, n.useId)(),
                        U = (0, n.useRef)(null),
                        { objectsCount: K } = (0, u.N)(),
                        H = (0, n.useMemo)(
                            () =>
                                O && h
                                    ? (0, r.jsx)('div', { className: R, children: (0, r.jsx)(d.W, { isActive: f, className: x().shimmerTitle, radius: 'l' }) })
                                    : b || T || j || I
                                      ? (0, r.jsx)(_.B, {
                                            objectType: l.DomainObjectType.Shortcut,
                                            objectId: String(A),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != K ? K : 0,
                                            children: (0, r.jsx)(m.T, {
                                                className: R,
                                                labeledForId: V,
                                                title: b,
                                                description: T,
                                                coverUrl: k,
                                                viewAllActionLink: A,
                                                controls: w && (0, r.jsx)(v.X, { className: x().controls, carouselRef: U }),
                                                headingRef: B,
                                                headingVariant: M,
                                                withDescription: !!T,
                                                titleChildren: j,
                                                children: I,
                                            }),
                                        })
                                      : void 0,
                            [k, T, R, B, M, V, f, h, K, w, O, b, j, I, A],
                        ),
                        $ = (0, o.L)(() => D || (0, p.k)({ className: i, isActive: f, withInfo: E, withSubcover: C, centered: g, round: y }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(x().root, L),
                        ...(0, s.OZ)(z),
                        children: [
                            H,
                            (0, r.jsx)(c.F, {
                                className: P,
                                ref: U,
                                itemClassName: (0, a.$)(x().item, x().important, S),
                                'aria-labelledby': ''.concat(V, ' ').concat(V, '-description'),
                                children: h ? $ : N,
                            }),
                        ],
                    });
                },
                C = (0, n.forwardRef)((e, t) => (0, r.jsx)(f, { forwardRef: t, ...e }));
        },
        72720: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var r = i(25839),
                a = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(94572),
                o = i.n(l);
            let c = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: n,
                        minTextLength: l,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: d = !1,
                        placeholder: u,
                        onChangeFinish: _,
                        withOutline: m = !1,
                        'data-test-id': v,
                    } = e,
                    [p, h] = (0, s.useState)(i),
                    x = (0, s.useRef)(!1),
                    f = (0, s.useRef)(null),
                    C = (0, s.useCallback)((e) => {
                        h(e.target.value);
                    }, []),
                    g = (0, s.useCallback)(
                        (e) => {
                            if (d && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (x.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [d],
                    ),
                    y = (0, s.useCallback)(() => {
                        let e = p.trim();
                        x.current || (l && e.length < l) ? ((x.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [p, x, l, _, i]);
                ((0, s.useEffect)(() => {
                    f.current && ((f.current.selectionStart = f.current.value.length), (f.current.selectionEnd = f.current.value.length));
                }, []),
                    (0, s.useLayoutEffect)(() => {
                        let e = f.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [f, p]));
                let b = (0, s.useMemo)(() => ('textarea' === c ? (e) => (0, r.jsx)('textarea', { ref: f, rows: 6, ...e }) : (e) => (0, r.jsx)('input', { ...e })), [c]);
                return (0, r.jsx)(b, {
                    className: (0, a.$)(o().root, t, { [o().root_textarea]: 'textarea' === c, [o().root_outline]: m }),
                    type: 'text',
                    value: p,
                    maxLength: n,
                    onBlur: y,
                    onChange: C,
                    onKeyDown: g,
                    placeholder: u,
                    autoFocus: !0,
                    'data-test-id': v,
                });
            });
        },
        73208: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        73544: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        75159: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => j });
            var r = i(25839),
                a = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(98436),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(82298),
                m = i(88204),
                v = i(61493),
                p = i(49656),
                h = i(23818),
                x = i(44806),
                f = i(51514),
                C = i(35015),
                g = i(10546),
                y = i(86209),
                b = i(97779),
                T = i.n(b);
            let k = (0, m.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: a } = (0, d.g)(),
                    n = a.checkExperiment(x.z.WebNextWaveAgentExperiment, 'on'),
                    s = t.type === f.q7,
                    l = (0, p.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, r.jsx)(y.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(T().view, { [T().multivibeContainer]: s }),
                                  coverClassName: (0, _.$)({ [T().multivibeCover]: s }),
                                  entityCoverClassName: (0, _.$)({ [T().multivibeAvatar]: s }),
                                  controlClassName: (0, _.$)({ [T().multivibeControl]: s }),
                              })
                            : (0, r.jsx)(h._V, {
                                  className: T().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': v.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    o = n && t.agent ? void 0 : 'round';
                return (0, r.jsx)(g.k, {
                    closeToast: i,
                    entityVariant: C.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: l,
                    radius: o,
                    className: T().root,
                });
            });
            var A = i(19966);
            let j = (e) => {
                let { user: t, pinsCollection: i } = (0, d.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [v, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, r.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        s = i.get(e.pinId);
                    p(!0);
                    let c = await e.togglePin();
                    (p(!1),
                        s &&
                            s.type === l._.WAVE_ITEM &&
                            s.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = s.data.backgroundImageUrl), (n.colors = s.data.colors), (n.agent = s.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (n.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (n.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (n.agent = (0, A.K)(c.data.agent))),
                        c
                            ? _((0, r.jsx)(k, { vibe: n }), { containerId: o.u.INFO })
                            : _((0, r.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [m, _, v, i, t.isAuthorized, e]);
            };
        },
        75167: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a, w: () => n });
            var r = i(74631);
            let a = (0, r.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                n = () => (0, r.useContext)(a);
        },
        79497: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => n });
            var r = i(28410),
                a = i(73544);
            let n = (e) => {
                let t = (0, a.e)(e);
                return (0, r.wg)(t);
            };
        },
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(25839),
                a = i(35015),
                n = i(10546);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        80986: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => _ });
            var r = i(25839),
                a = i(82298),
                n = i(74631),
                s = i(61493),
                l = i(9911),
                o = i(4071),
                c = i(66738),
                d = i(37922),
                u = i.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: x, shouldBackwardButtonBeDisabled: f, shouldForwardButtonBeDisabled: C, shouldHideControls: g } = (0, l.Y)(t),
                    y = (0, n.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    b = (0, n.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, _),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, i, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: y,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: f,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, d, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: C,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        83243: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => m });
            var r = i(74631),
                a = i(67379),
                n = i(36619),
                s = i(76945),
                l = i(59450),
                o = i(71035),
                c = i(84e3),
                d = i(79670),
                u = i(97952),
                _ = i(72594);
            let m = (e) => {
                let { mainObjectType: t } = e,
                    i = (0, r.useRef)(!1),
                    m = (0, r.useRef)(!1),
                    v = (0, l.st)(),
                    p = (0, c.U)(),
                    { hash: h } = (0, l.gf)(),
                    { pageId: x, pageEntityId: f, pageStyle: C, pagePlacement: g } = (0, u.$)(),
                    { tabId: y, tabPos: b, isTabSelectedByDefault: T } = (0, _.R)();
                return (0, o.c)((e) => {
                    if (!v || !x || 'string' != typeof f) return;
                    let r = {
                        hash: h,
                        pageId: d.W[x],
                        pageStyle: C || n.PageStyles.Fullscreen,
                        pagePlacement: g || n.PagePlacements.Fullscreen,
                        mainObjectType: t,
                        mainObjectId: f,
                    };
                    void 0 !== y && ((r.tabId = y), (r.tabPos = b), (r.isTabSelectedByDefault = T));
                    let l = (0, a.F)({ params: r, logger: p, context: 'useSendEventOnScreenOpenedOrClosed' });
                    l && (e && !i.current && ((0, s.w5)(v.evgenInstance, l), (i.current = !0)), e || m.current || ((0, s.XB)(v.evgenInstance, l), (m.current = !0)));
                });
            };
        },
        84058: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var r = i(25839),
                a = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                v = i(66738),
                p = i(86869),
                h = i(4254),
                x = i(1797),
                f = i(7361),
                C = i(90613),
                g = i(79367),
                y = i(29481),
                b = i(47009),
                T = i(34159),
                k = i(52512),
                A = i(30290),
                j = i(61561),
                I = i(85686),
                N = i(85743),
                L = i(50209),
                P = i(27954),
                R = i(6323),
                S = i(64720),
                O = i(97522),
                E = i(41580),
                w = i(49438),
                B = i(71996),
                M = i(78437),
                D = i(21971),
                z = i(13936),
                V = i.n(z);
            let U = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: z, topTitleElement: U, bottomTitleElement: K } = e,
                    { ref: H, intersectionPropertyId: $ } = (0, k.n)(),
                    {
                        trailer: F,
                        user: W,
                        paywall: { modal: q },
                    } = (0, P.g)(),
                    { from: Y, utmLink: X } = (0, A.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: G } = (0, l.A)(),
                    [Q, Z] = (0, s.useState)(!1),
                    [J, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, N.z)(),
                    es = (0, y.N)(),
                    el = (0, b.b)(),
                    eo = (0, f.K)(t),
                    ec = (0, C.A)(t),
                    { id: ed, name: eu, coverUri: e_, isLiked: em } = t,
                    ev = (0, I.Z)(t.url),
                    [ep, eh] = (0, s.useState)(!1),
                    ex = (0, T.F)(),
                    ef = (0, g.P)(),
                    eC = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ef())) return void e.preventDefault();
                        (F.openArtistTrailer(t.id), ex(o.DomainObjectType.Artist, t.id));
                    }),
                    eg = (0, s.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, G]),
                    { isPlaying: ey, togglePlay: eb } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: Y, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eT = (0, x.S)({ artist: t, callback: ev }),
                    ek = (0, x.S)({ artist: t, callback: eb }),
                    eA = (0, u.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), eT(e));
                    }),
                    ej = (0, j.N)(),
                    eI = (0, u.c)(() => {
                        if (!ef()) {
                            if (ej) return void q.open();
                            (Q || ey || (Z(!0), null == en || en()), ek(), el(!ey));
                        }
                    }),
                    eN = (0, u.c)(() => {
                        (J || em || (ee(!0), null == er || er()), eo());
                    }),
                    eL = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, u.c)((e) => {
                        (ei(e), eh(e));
                    }),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eP,
                                    open: et,
                                    onClick: eL,
                                    className: (0, a.$)(V().menuButton, V().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eL, eP, et],
                    ),
                    eS = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                M.n,
                                {
                                    children: (0, r.jsx)(B.k, {
                                        className: (0, a.$)(V().trailerButton, V().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eC,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eC]),
                    eO = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                E.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(V().pinButton, V().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eE = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                m.hg,
                                {
                                    isVisible: et || ep,
                                    className: V().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(V().playButton, V().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eI,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        S.c,
                                        {
                                            className: (0, a.$)(V().likeButton, V().control),
                                            isLiked: em,
                                            onClick: eN,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eO,
                                    trailerControl: eS,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: V().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: V().coverBlock,
                                    onClick: eA,
                                    children: [
                                        (0, r.jsx)(R.B, {
                                            className: V().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eg,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eE,
                                    ],
                                }),
                            }),
                        [eA, e_, eg, t.isAvailable, eE],
                    );
                return (0, r.jsx)(m.MN, {
                    ref: H,
                    className: (0, a.$)(V().root, i),
                    textPosition: 'center',
                    'aria-label': eg,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(h.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(O.N, {
                                    className: V().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eg,
                                    onClick: eA,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, r.jsx)(O.N, { className: V().srTitleLink, href: t.url, onClick: eA, children: eg }),
                    'data-intersection-property-id': $,
                    contentLinesCount: z,
                    view: ew,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        86209: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => d });
            var r = i(25839),
                a = i(82298),
                n = i(50314),
                s = i(49656),
                l = i(6349),
                o = i(4111),
                c = i.n(o);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: o,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: h,
                        controlClassName: x,
                        fallbackIconSize: f,
                    } = e,
                    C = (0, s.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, r.jsx)(l.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, a.$)(c().root, c()['root_radius_'.concat(C)], { [c().root_withShadow]: !!t.entityType }, v),
                    radius: C,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: o,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: f,
                    coverClassName: p,
                    entityCoverClassName: h,
                    controlClassName: x,
                });
            };
        },
        90613: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(25839),
                a = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, v] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    v(!0);
                    let s = await e.togglePin();
                    (v(!1),
                        s
                            ? i((0, r.jsx)(u.l, { artist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
            };
        },
        91062: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => r });
            var r = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        94572: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        95314: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            var r = i(25839),
                a = i(74631),
                n = i(66192);
            let s = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    m = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, s, l, o, c, d, u],
                    );
                return (0, r.jsx)(n.l.Provider, { value: m, children: _ });
            };
        },
        95388: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var r = i(25839),
                a = i(19412);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, r.jsx)(a.V, { ...e }, i));
            };
        },
        95858: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => o });
            var r = i(25839),
                a = i(74631),
                n = i(59342),
                s = i(91886),
                l = i(13232);
            let o = (e) => {
                let { children: t } = e,
                    i = (0, a.useRef)({}),
                    o = (0, a.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    r = i.current[t];
                                if (r) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, n.A)());
                                            (r.callback(!0, e), (r.showed = !0), (r.viewUuid = e));
                                        }, 1e3);
                                        r.timerId = e;
                                    }
                                    (!e.isIntersecting && r.showed && (r.callback(!1, r.viewUuid), (r.showed = !1), (r.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(r.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, a.useCallback)((e) => {
                        var t;
                        !i.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (i.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, a.useCallback)((e) => {
                        let t = i.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete i.current[e]);
                    }, []);
                (0, a.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, a.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, r.jsx)(l.B.Provider, { value: u, children: t });
            };
        },
        95924: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => g });
            var r = i(25839),
                a = i(88204),
                n = i(74631),
                s = i(39004),
                l = i(8487),
                o = i(68934),
                c = i(4071),
                d = i(66738),
                u = i(3392),
                _ = i(4254),
                m = i(89192),
                v = i(91062),
                p = i(8900),
                h = i(75167),
                x = i(28664),
                f = i.n(x);
            let C = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                g = (0, a.PA)((e) => {
                    let { children: t, customMessage: i, shouldForceOpenTooltip: a } = e,
                        { formatMessage: x } = (0, s.A)(),
                        { contentRef: g } = (0, m.g)(),
                        { setIsOnboardingOpened: y } = (0, h.w)(),
                        [b, T] = (0, o.d)(),
                        k = (0, p.z)({ id: v.h.TRAILER_BUTTON, ref: b }) || !!a,
                        [A, j] = (0, n.useState)(k),
                        I = (0, n.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), j(!1), y(!1));
                            },
                            [y],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                e || I();
                            },
                            [I],
                        );
                    return (0, r.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: C,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: A,
                        onOpenChange: N,
                        enableAriaDescribedby: !0,
                        referenceRef: T,
                        children: [
                            t,
                            (0, r.jsxs)(u.ZI, {
                                className: f().root,
                                rootNode: g,
                                children: [
                                    (0, r.jsx)(c.$, {
                                        icon: (0, r.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: I,
                                        variant: 'text',
                                        className: f().close,
                                        withRipple: !1,
                                        'aria-label': x({ id: 'interface-actions.close' }),
                                    }),
                                    (0, r.jsx)(_.HL, {
                                        variant: 'span',
                                        className: f().text,
                                        children: i || (0, r.jsx)(l.A, { id: 'onboarding.trailer', values: { br: (0, r.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        96618: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a, W: () => n });
            var r = i(74631);
            let a = (0, r.createContext)({ theme: null, setTheme: () => {} }),
                n = () => (0, r.useContext)(a);
        },
        97779: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        98436: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
        99024: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
    },
]);
