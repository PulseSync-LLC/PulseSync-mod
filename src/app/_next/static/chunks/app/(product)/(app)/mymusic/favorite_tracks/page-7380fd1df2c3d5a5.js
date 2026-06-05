(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8062, 9476],
    {
        2047: (e, o, r) => {
            'use strict';
            var s;
            r.d(o, { L: () => s }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(s || (s = {}));
        },
        12119: (e, o, r) => {
            'use strict';
            r.d(o, { NotFound: () => c });
            var s = r(32290),
                n = r(63618),
                i = r(96103),
                t = r(39407),
                l = r(63423),
                d = r(82586),
                h = r(71926),
                v = r(49574),
                m = r(44574),
                a = r(55178),
                b = r(55365),
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
        19476: (e, o, r) => {
            'use strict';
            r.r(o), r.d(o, { default: () => a });
            var s = r(32290),
                n = r(63618),
                i = r(55178),
                t = r(44989),
                l = r(54280),
                d = r(49574),
                h = r(91288),
                v = r.n(h),
                m = r(49124);
            let a = (e) => {
                let { children: o } = e,
                    { state: r, toggleTrue: h } = (0, t.e)(Boolean(window.nativeSettings?.get?.('modSettings.window.minimizedStart'))),
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
        43740: (e, o, r) => {
            'use strict';
            r.d(o, { a: () => n });
            var s = r(46862);
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
        55365: (e) => {
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
        76822: (e, o, r) => {
            'use strict';
            let s;
            r.d(o, { useMetrika: () => t });
            var n = r(55178),
                i = r(43740);
            let t = () => {
                let e = (s || (s = (0, i.a)()), s),
                    o = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: o }), [o]);
            };
        },
        80719: (e, o, r) => {
            'use strict';
            r.d(o, { M: () => s.NotFound });
            var s = r(12119);
        },
        91288: (e) => {
            e.exports = {
                root: 'SplashScreen_root__3jzFk',
                root_dark: 'SplashScreen_root_dark__0OcZj',
                root_light: 'SplashScreen_root_light__XAJTf',
                root_hidden: 'SplashScreen_root_hidden__BO7tp',
                'fade-out': 'SplashScreen_fade-out__uNMY4',
                video: 'SplashScreen_video__wFSy5',
            };
        },
        94392: (e, o, r) => {
            Promise.resolve().then(r.bind(r, 63397)),
                Promise.resolve().then(r.bind(r, 46456)),
                Promise.resolve().then(r.bind(r, 7276)),
                Promise.resolve().then(r.bind(r, 29680)),
                Promise.resolve().then(r.bind(r, 76822)),
                Promise.resolve().then(r.bind(r, 89523)),
                Promise.resolve().then(r.bind(r, 19338)),
                Promise.resolve().then(r.bind(r, 76202)),
                Promise.resolve().then(r.bind(r, 67299)),
                Promise.resolve().then(r.bind(r, 7200)),
                Promise.resolve().then(r.bind(r, 72038)),
                Promise.resolve().then(r.bind(r, 19476)),
                Promise.resolve().then(r.bind(r, 95324)),
                Promise.resolve().then(r.bind(r, 71768)),
                Promise.resolve().then(r.bind(r, 65650)),
                Promise.resolve().then(r.bind(r, 59564)),
                Promise.resolve().then(r.bind(r, 9471)),
                Promise.resolve().then(r.bind(r, 78305)),
                Promise.resolve().then(r.bind(r, 70632)),
                Promise.resolve().then(r.bind(r, 35058)),
                Promise.resolve().then(r.bind(r, 85743)),
                Promise.resolve().then(r.bind(r, 90923)),
                Promise.resolve().then(r.bind(r, 17595)),
                Promise.resolve().then(r.bind(r, 41540)),
                Promise.resolve().then(r.bind(r, 48462)),
                Promise.resolve().then(r.bind(r, 8868)),
                Promise.resolve().then(r.bind(r, 12350)),
                Promise.resolve().then(r.bind(r, 95481)),
                Promise.resolve().then(r.bind(r, 47745)),
                Promise.resolve().then(r.bind(r, 12989)),
                Promise.resolve().then(r.bind(r, 2969)),
                Promise.resolve().then(r.bind(r, 84051)),
                Promise.resolve().then(r.bind(r, 27789)),
                Promise.resolve().then(r.bind(r, 70435)),
                Promise.resolve().then(r.bind(r, 19875)),
                Promise.resolve().then(r.bind(r, 54391)),
                Promise.resolve().then(r.bind(r, 63529)),
                Promise.resolve().then(r.bind(r, 73818)),
                Promise.resolve().then(r.bind(r, 20599)),
                Promise.resolve().then(r.bind(r, 84782)),
                Promise.resolve().then(r.bind(r, 30915)),
                Promise.resolve().then(r.bind(r, 70608)),
                Promise.resolve().then(r.bind(r, 18746)),
                Promise.resolve().then(r.bind(r, 71610)),
                Promise.resolve().then(r.bind(r, 23352)),
                Promise.resolve().then(r.bind(r, 10936)),
                Promise.resolve().then(r.bind(r, 2792)),
                Promise.resolve().then(r.bind(r, 22714)),
                Promise.resolve().then(r.bind(r, 37240)),
                Promise.resolve().then(r.bind(r, 3064)),
                Promise.resolve().then(r.bind(r, 51012)),
                Promise.resolve().then(r.bind(r, 9848)),
                Promise.resolve().then(r.bind(r, 47498)),
                Promise.resolve().then(r.bind(r, 8152)),
                Promise.resolve().then(r.bind(r, 43474)),
                Promise.resolve().then(r.bind(r, 46200)),
                Promise.resolve().then(r.bind(r, 5537)),
                Promise.resolve().then(r.bind(r, 34186)),
                Promise.resolve().then(r.bind(r, 56008)),
                Promise.resolve().then(r.bind(r, 67732)),
                Promise.resolve().then(r.bind(r, 30787)),
                Promise.resolve().then(r.bind(r, 65476)),
                Promise.resolve().then(r.bind(r, 83416)),
                Promise.resolve().then(r.bind(r, 31010)),
                Promise.resolve().then(r.bind(r, 19383)),
                Promise.resolve().then(r.bind(r, 3313)),
                Promise.resolve().then(r.bind(r, 81619)),
                Promise.resolve().then(r.bind(r, 83808)),
                Promise.resolve().then(r.bind(r, 22191)),
                Promise.resolve().then(r.bind(r, 14858)),
                Promise.resolve().then(r.bind(r, 61945)),
                Promise.resolve().then(r.bind(r, 83920)),
                Promise.resolve().then(r.bind(r, 49545)),
                Promise.resolve().then(r.bind(r, 3796)),
                Promise.resolve().then(r.bind(r, 40953)),
                Promise.resolve().then(r.bind(r, 30542)),
                Promise.resolve().then(r.bind(r, 59121)),
                Promise.resolve().then(r.bind(r, 71773)),
                Promise.resolve().then(r.bind(r, 34284)),
                Promise.resolve().then(r.bind(r, 46151)),
                Promise.resolve().then(r.bind(r, 32087)),
                Promise.resolve().then(r.bind(r, 5701)),
                Promise.resolve().then(r.bind(r, 10659)),
                Promise.resolve().then(r.bind(r, 68135)),
                Promise.resolve().then(r.bind(r, 75265)),
                Promise.resolve().then(r.bind(r, 36321)),
                Promise.resolve().then(r.bind(r, 29098)),
                Promise.resolve().then(r.bind(r, 92191)),
                Promise.resolve().then(r.bind(r, 27120)),
                Promise.resolve().then(r.bind(r, 53022)),
                Promise.resolve().then(r.bind(r, 22748)),
                Promise.resolve().then(r.bind(r, 84199)),
                Promise.resolve().then(r.bind(r, 81218)),
                Promise.resolve().then(r.bind(r, 90169)),
                Promise.resolve().then(r.bind(r, 6429)),
                Promise.resolve().then(r.bind(r, 44128)),
                Promise.resolve().then(r.bind(r, 31286)),
                Promise.resolve().then(r.bind(r, 92496)),
                Promise.resolve().then(r.bind(r, 21183)),
                Promise.resolve().then(r.bind(r, 59888)),
                Promise.resolve().then(r.bind(r, 95112)),
                Promise.resolve().then(r.bind(r, 57594)),
                Promise.resolve().then(r.bind(r, 26069)),
                Promise.resolve().then(r.bind(r, 4433)),
                Promise.resolve().then(r.bind(r, 50)),
                Promise.resolve().then(r.bind(r, 11262));
        },
        95324: (e, o, r) => {
            'use strict';
            r.d(o, { FavoriteTracksPage: () => h });
            var s = r(32290),
                n = r(96103),
                i = r(55178),
                t = r(49574),
                l = r(80719);
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
        e.O(0, [3445, 1670, 9143, 6351, 9580, 1311, 7764, 6706, 3267, 9769, 1675, 764, 9574, 4574, 5428, 6049, 4942, 2127, 6687, 3057, 4220, 9562, 7358], () =>
            e((e.s = 94392)),
        ),
            (_N_E = e.O());
    },
]);
