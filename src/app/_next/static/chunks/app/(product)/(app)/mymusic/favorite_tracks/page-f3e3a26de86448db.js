(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4368, 8062],
    {
        9939: (e, o, r) => {
            'use strict';
            r.d(o, { M: () => s.NotFound });
            var s = r(91455);
        },
        43528: (e, o, r) => {
            'use strict';
            r.d(o, { a: () => n });
            var s = r(43696);
            let n = () => {
                let e = null,
                    o = new s.cJ(!1),
                    r = [];
                return {
                    isLoaded: o,
                    init: (s) => {
                        var n, i;
                        if (void 0 !== (null == (n = window.Ya) ? void 0 : n.Metrika2) && !o.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...s })),
                                    (o.value = !0),
                                    (i = e),
                                    r.forEach((e) => {
                                        e(i);
                                    }),
                                    (r.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && s.logger.error(e);
                            }
                    },
                    count: function (o) {
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [s]: o })
                            : r.push((e) => {
                                  e.params({ [s]: o });
                              });
                    },
                    hit: (o) => {
                        e
                            ? e.hit(o)
                            : r.push((e) => {
                                  e.hit(o);
                              });
                    },
                    reachGoal: (o, s) => {
                        if (!e) return void r.push((e) => e.reachGoal(o, s));
                        e.reachGoal(o, s);
                    },
                };
            };
        },
        48320: (e, o, r) => {
            'use strict';
            var s;
            r.d(o, { L: () => s }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(s || (s = {}));
        },
        54368: (e, o, r) => {
            'use strict';
            r.r(o), r.d(o, { default: () => a });
            var s = r(62936),
                n = r(79950),
                i = r(44020),
                t = r(4497),
                l = r(32980),
                d = r(42561),
                h = r(81176),
                v = r.n(h),
                m = r(49124);
            let a = (e) => {
                let { children: o } = e,
                    { state: r, toggleTrue: h } = (0, t.e)(!1),
                    { state: a, toggleTrue: b } = (0, t.e)(!1),
                    { getThemeFromStorage: P } = (0, d.QDo)(new l.si()),
                    c = (0, i.useMemo)(() => {
                        var e;
                        return null != (e = P()) ? e : (0, d.VDQ)();
                    }, [P]),
                    u = (0, i.useCallback)(
                        (e) => {
                            let o = m.env.ASSET_PREFIX || '';
                            return ''.concat(o, '/media/splash_screen/splash_screen_').concat(c, '.').concat(e);
                        },
                        [c],
                    ),
                    _ = (0, i.useMemo)(() => ({ isVisible: !r }), [r]);
                return (0, s.jsxs)(d.nlO.Provider, {
                    value: _,
                    children: [
                        !r &&
                            (0, s.jsx)('div', {
                                className: (0, n.$)(v().root, v()['root_'.concat(c)], { [v().root_hidden]: a }),
                                onAnimationEnd: h,
                                children: (0, s.jsxs)('video', {
                                    className: v().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: b,
                                    onError: h,
                                    children: [(0, s.jsx)('source', { src: u('webm'), type: 'video/webm' }), (0, s.jsx)('source', { src: u('mp4'), type: 'video/mp4' })],
                                }),
                            }),
                        o,
                    ],
                });
            };
        },
        54802: (e, o, r) => {
            'use strict';
            let s;
            r.d(o, { useMetrika: () => t });
            var n = r(44020),
                i = r(43528);
            let t = () => {
                let e = (s || (s = (0, i.a)()), s),
                    o = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: o }), [o]);
            };
        },
        81176: (e) => {
            e.exports = {
                root: 'SplashScreen_root__3jzFk',
                root_dark: 'SplashScreen_root_dark__0OcZj',
                root_light: 'SplashScreen_root_light__XAJTf',
                root_hidden: 'SplashScreen_root_hidden__BO7tp',
                'fade-out': 'SplashScreen_fade-out__uNMY4',
                video: 'SplashScreen_video__wFSy5',
            };
        },
        88933: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        91455: (e, o, r) => {
            'use strict';
            r.d(o, { NotFound: () => c });
            var s = r(62936),
                n = r(79950),
                i = r(19718),
                t = r(26731),
                l = r(5099),
                d = r(85742),
                h = r(20418),
                v = r(42561),
                m = r(85906),
                a = r(44020),
                b = r(88933),
                P = r.n(b);
            let c = (0, i.PA)((e) => {
                let { className: o, title: r, description: i, iconVariant: b = 'musicLogo', iconClassName: c, iconSize: u } = e,
                    { contentRef: _ } = (0, v.gKY)(),
                    p = (0, v.ZpR)(v.Zyd.main.href);
                (0, v.LZB)();
                let { handleNavigateToMain: x } = (0, v.D5F)(p);
                return (
                    (0, v.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, v.Pjs)();
                        (0, a.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, n.$)(P().root, { [P().root_desktop]: !_ }, o),
                        children: [
                            (0, s.jsx)(m.Lh, { withBackwardFallback: '/', className: P().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: P().content,
                                children: [
                                    (0, s.jsx)(d.Icon, { className: (0, n.$)(P().icon, c), variant: b, size: u }),
                                    (0, s.jsx)(h.Heading, {
                                        className: (0, n.$)(P().title, P().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: r || (0, s.jsx)(t.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, s.jsx)(h.Caption, {
                                        className: (0, n.$)(P().text, P().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: i || (0, s.jsx)(t.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, s.jsx)(l.$, {
                                        onClick: x,
                                        className: P().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(h.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(t.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        94628: (e, o, r) => {
            Promise.resolve().then(r.bind(r, 24571)),
                Promise.resolve().then(r.bind(r, 46950)),
                Promise.resolve().then(r.bind(r, 50576)),
                Promise.resolve().then(r.bind(r, 59260)),
                Promise.resolve().then(r.bind(r, 54802)),
                Promise.resolve().then(r.bind(r, 49283)),
                Promise.resolve().then(r.bind(r, 34705)),
                Promise.resolve().then(r.bind(r, 6814)),
                Promise.resolve().then(r.bind(r, 19448)),
                Promise.resolve().then(r.bind(r, 19404)),
                Promise.resolve().then(r.bind(r, 77778)),
                Promise.resolve().then(r.bind(r, 54368)),
                Promise.resolve().then(r.bind(r, 98072)),
                Promise.resolve().then(r.bind(r, 70900)),
                Promise.resolve().then(r.bind(r, 11182)),
                Promise.resolve().then(r.bind(r, 95368)),
                Promise.resolve().then(r.bind(r, 12331)),
                Promise.resolve().then(r.bind(r, 52589)),
                Promise.resolve().then(r.bind(r, 83132)),
                Promise.resolve().then(r.bind(r, 7670)),
                Promise.resolve().then(r.bind(r, 395)),
                Promise.resolve().then(r.bind(r, 83543)),
                Promise.resolve().then(r.bind(r, 99303)),
                Promise.resolve().then(r.bind(r, 45648)),
                Promise.resolve().then(r.bind(r, 35042)),
                Promise.resolve().then(r.bind(r, 94311)),
                Promise.resolve().then(r.bind(r, 46650)),
                Promise.resolve().then(r.bind(r, 33405)),
                Promise.resolve().then(r.bind(r, 32101)),
                Promise.resolve().then(r.bind(r, 63329)),
                Promise.resolve().then(r.bind(r, 941)),
                Promise.resolve().then(r.bind(r, 58991)),
                Promise.resolve().then(r.bind(r, 42297)),
                Promise.resolve().then(r.bind(r, 7551)),
                Promise.resolve().then(r.bind(r, 75695)),
                Promise.resolve().then(r.bind(r, 42323)),
                Promise.resolve().then(r.bind(r, 91135)),
                Promise.resolve().then(r.bind(r, 14878)),
                Promise.resolve().then(r.bind(r, 26467)),
                Promise.resolve().then(r.bind(r, 41970)),
                Promise.resolve().then(r.bind(r, 16847)),
                Promise.resolve().then(r.bind(r, 78780)),
                Promise.resolve().then(r.bind(r, 16782)),
                Promise.resolve().then(r.bind(r, 77966)),
                Promise.resolve().then(r.bind(r, 31148)),
                Promise.resolve().then(r.bind(r, 76532)),
                Promise.resolve().then(r.bind(r, 38076)),
                Promise.resolve().then(r.bind(r, 94158)),
                Promise.resolve().then(r.bind(r, 14124)),
                Promise.resolve().then(r.bind(r, 86100)),
                Promise.resolve().then(r.bind(r, 59736)),
                Promise.resolve().then(r.bind(r, 20532)),
                Promise.resolve().then(r.bind(r, 80222)),
                Promise.resolve().then(r.bind(r, 93148)),
                Promise.resolve().then(r.bind(r, 43898)),
                Promise.resolve().then(r.bind(r, 23164)),
                Promise.resolve().then(r.bind(r, 71637)),
                Promise.resolve().then(r.bind(r, 87894)),
                Promise.resolve().then(r.bind(r, 72964)),
                Promise.resolve().then(r.bind(r, 2760)),
                Promise.resolve().then(r.bind(r, 31927)),
                Promise.resolve().then(r.bind(r, 97248)),
                Promise.resolve().then(r.bind(r, 57612)),
                Promise.resolve().then(r.bind(r, 5670)),
                Promise.resolve().then(r.bind(r, 70915)),
                Promise.resolve().then(r.bind(r, 8148)),
                Promise.resolve().then(r.bind(r, 32634)),
                Promise.resolve().then(r.bind(r, 508)),
                Promise.resolve().then(r.bind(r, 36363)),
                Promise.resolve().then(r.bind(r, 15958)),
                Promise.resolve().then(r.bind(r, 78685)),
                Promise.resolve().then(r.bind(r, 34476)),
                Promise.resolve().then(r.bind(r, 60917)),
                Promise.resolve().then(r.bind(r, 62520)),
                Promise.resolve().then(r.bind(r, 21389)),
                Promise.resolve().then(r.bind(r, 85546)),
                Promise.resolve().then(r.bind(r, 80185)),
                Promise.resolve().then(r.bind(r, 38285)),
                Promise.resolve().then(r.bind(r, 792)),
                Promise.resolve().then(r.bind(r, 34291)),
                Promise.resolve().then(r.bind(r, 31299)),
                Promise.resolve().then(r.bind(r, 56209)),
                Promise.resolve().then(r.bind(r, 44162)),
                Promise.resolve().then(r.bind(r, 93427)),
                Promise.resolve().then(r.bind(r, 57861)),
                Promise.resolve().then(r.bind(r, 30615)),
                Promise.resolve().then(r.bind(r, 34990)),
                Promise.resolve().then(r.bind(r, 16395)),
                Promise.resolve().then(r.bind(r, 75020)),
                Promise.resolve().then(r.bind(r, 32746)),
                Promise.resolve().then(r.bind(r, 2552)),
                Promise.resolve().then(r.bind(r, 7323)),
                Promise.resolve().then(r.bind(r, 68270)),
                Promise.resolve().then(r.bind(r, 99525)),
                Promise.resolve().then(r.bind(r, 44276)),
                Promise.resolve().then(r.bind(r, 49452)),
                Promise.resolve().then(r.bind(r, 68834)),
                Promise.resolve().then(r.bind(r, 67484)),
                Promise.resolve().then(r.bind(r, 6987)),
                Promise.resolve().then(r.bind(r, 748)),
                Promise.resolve().then(r.bind(r, 94756)),
                Promise.resolve().then(r.bind(r, 5798)),
                Promise.resolve().then(r.bind(r, 44817)),
                Promise.resolve().then(r.bind(r, 6181)),
                Promise.resolve().then(r.bind(r, 40846)),
                Promise.resolve().then(r.bind(r, 43762));
        },
        98072: (e, o, r) => {
            'use strict';
            r.d(o, { FavoriteTracksPage: () => h });
            var s = r(62936),
                n = r(19718),
                i = r(44020),
                t = r(42561),
                l = r(9939);
            let d = (0, n.PA)(() => (0, s.jsx)(l.M, {})),
                h = (0, n.PA)(() => {
                    let { favoriteTracks: e } = (0, t.Pjs)(),
                        o = (0, t.ZpR)(e.playlistUrl);
                    if (
                        ((0, i.useEffect)(
                            () => () => {
                                e.reset();
                            },
                            [e],
                        ),
                        (0, i.useEffect)(() => {
                            e.playlistUrl && o();
                        }, [e.playlistUrl, o]),
                        e.isNeededToLoad && (0, i.use)(e.getPlaylistUrl()),
                        e.isRejected)
                    )
                        return (0, s.jsx)(d, {});
                });
        },
    },
    (e) => {
        e.O(0, [260, 85, 3196, 403, 226, 5771, 1970, 1311, 7764, 6706, 2899, 5419, 3359, 9550, 2561, 5906, 4690, 4501, 2290, 2687, 5128, 629, 1009, 4670, 7358], () =>
            e((e.s = 94628)),
        ),
            (_N_E = e.O());
    },
]);
