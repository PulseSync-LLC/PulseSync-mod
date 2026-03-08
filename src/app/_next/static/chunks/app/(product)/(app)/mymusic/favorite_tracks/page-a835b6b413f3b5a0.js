(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8062, 9618],
    {
        29406: (e) => {
            e.exports = {
                root: 'SplashScreen_root__3jzFk',
                root_dark: 'SplashScreen_root_dark__0OcZj',
                root_light: 'SplashScreen_root_light__XAJTf',
                root_hidden: 'SplashScreen_root_hidden__BO7tp',
                'fade-out': 'SplashScreen_fade-out__uNMY4',
                video: 'SplashScreen_video__wFSy5',
            };
        },
        31905: (e, r, s) => {
            'use strict';
            var o;
            s.d(r, { L: () => o }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(o || (o = {}));
        },
        39618: (e, r, s) => {
            'use strict';
            s.r(r), s.d(r, { default: () => P });
            var o = s(54486),
                n = s(50420),
                i = s(61910),
                t = s(62443),
                l = s(78420),
                d = s(83252),
                h = s(29406),
                v = s.n(h),
                m = s(49124);
            let P = (e) => {
                let { children: r } = e;
                let { state: s, toggleTrue: h } = (0, t.e)(!1),
                    { state: P, toggleTrue: b } = (0, t.e)(!1),
                    { getThemeFromStorage: a } = (0, d.QDo)(new l.si()),
                    c = (0, i.useMemo)(() => {
                        var e;
                        return null != (e = a()) ? e : (0, d.VDQ)();
                    }, [a]),
                    u = (0, i.useCallback)(
                        (e) => {
                            let r = m.env.ASSET_PREFIX || '';
                            return ''.concat(r, '/media/splash_screen/splash_screen_').concat(c, '.').concat(e);
                        },
                        [c],
                    ),
                    _ = (0, i.useMemo)(() => ({ isVisible: !s }), [s]);
                return (0, o.jsxs)(d.nlO.Provider, {
                    value: _,
                    children: [
                        !s &&
                            (0, o.jsx)('div', {
                                className: (0, n.$)(v().root, v()['root_'.concat(c)], { [v().root_hidden]: P }),
                                onAnimationEnd: h,
                                children: (0, o.jsxs)('video', {
                                    className: v().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: b,
                                    onError: h,
                                    children: [(0, o.jsx)('source', { src: u('webm'), type: 'video/webm' }), (0, o.jsx)('source', { src: u('mp4'), type: 'video/mp4' })],
                                }),
                            }),
                        r,
                    ],
                });
            };
        },
        42421: (e, r, s) => {
            'use strict';
            s.d(r, { M: () => o.NotFound });
            var o = s(65034);
        },
        42520: (e, r, s) => {
            'use strict';
            let o;
            s.d(r, { useMetrika: () => t });
            var n = s(61910),
                i = s(80506);
            let t = () => {
                let e = (o || (o = (0, i.a)()), o),
                    r = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: r }), [r]);
            };
        },
        80506: (e, r, s) => {
            'use strict';
            s.d(r, { a: () => n });
            var o = s(87965);
            let n = () => {
                let e = null,
                    r = new o.cJ(!1),
                    s = [];
                return {
                    isLoaded: r,
                    init: (o) => {
                        var n, i;
                        if (void 0 !== (null == (n = window.Ya) ? void 0 : n.Metrika2) && !r.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...o })),
                                    (r.value = !0),
                                    (i = e),
                                    s.forEach((e) => {
                                        e(i);
                                    }),
                                    (s.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                            }
                    },
                    count: function (r) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [o]: r })
                            : s.push((e) => {
                                  e.params({ [o]: r });
                              });
                    },
                    hit: (r) => {
                        e
                            ? e.hit(r)
                            : s.push((e) => {
                                  e.hit(r);
                              });
                    },
                    reachGoal: (r, o) => {
                        if (!e) return void s.push((e) => e.reachGoal(r, o));
                        e.reachGoal(r, o);
                    },
                };
            };
        },
        95208: (e, r, s) => {
            Promise.resolve().then(s.bind(s, 91165)),
                Promise.resolve().then(s.bind(s, 98944)),
                Promise.resolve().then(s.bind(s, 14342)),
                Promise.resolve().then(s.bind(s, 62662)),
                Promise.resolve().then(s.bind(s, 42520)),
                Promise.resolve().then(s.bind(s, 19781)),
                Promise.resolve().then(s.bind(s, 22329)),
                Promise.resolve().then(s.bind(s, 73488)),
                Promise.resolve().then(s.bind(s, 88495)),
                Promise.resolve().then(s.bind(s, 5594)),
                Promise.resolve().then(s.bind(s, 53376)),
                Promise.resolve().then(s.bind(s, 39618)),
                Promise.resolve().then(s.bind(s, 99893)),
                Promise.resolve().then(s.bind(s, 8394)),
                Promise.resolve().then(s.bind(s, 3192)),
                Promise.resolve().then(s.bind(s, 7286)),
                Promise.resolve().then(s.bind(s, 60305)),
                Promise.resolve().then(s.bind(s, 47203)),
                Promise.resolve().then(s.bind(s, 34286)),
                Promise.resolve().then(s.bind(s, 224)),
                Promise.resolve().then(s.bind(s, 24449)),
                Promise.resolve().then(s.bind(s, 79893)),
                Promise.resolve().then(s.bind(s, 81789)),
                Promise.resolve().then(s.bind(s, 87466)),
                Promise.resolve().then(s.bind(s, 34028)),
                Promise.resolve().then(s.bind(s, 99564)),
                Promise.resolve().then(s.bind(s, 95348)),
                Promise.resolve().then(s.bind(s, 52347)),
                Promise.resolve().then(s.bind(s, 61015)),
                Promise.resolve().then(s.bind(s, 1771)),
                Promise.resolve().then(s.bind(s, 80043)),
                Promise.resolve().then(s.bind(s, 65729)),
                Promise.resolve().then(s.bind(s, 12235)),
                Promise.resolve().then(s.bind(s, 60793)),
                Promise.resolve().then(s.bind(s, 74565)),
                Promise.resolve().then(s.bind(s, 8941)),
                Promise.resolve().then(s.bind(s, 38433)),
                Promise.resolve().then(s.bind(s, 8732)),
                Promise.resolve().then(s.bind(s, 43369)),
                Promise.resolve().then(s.bind(s, 47564)),
                Promise.resolve().then(s.bind(s, 41017)),
                Promise.resolve().then(s.bind(s, 27252)),
                Promise.resolve().then(s.bind(s, 65286)),
                Promise.resolve().then(s.bind(s, 45198)),
                Promise.resolve().then(s.bind(s, 46814)),
                Promise.resolve().then(s.bind(s, 92508)),
                Promise.resolve().then(s.bind(s, 40126)),
                Promise.resolve().then(s.bind(s, 83726)),
                Promise.resolve().then(s.bind(s, 90410)),
                Promise.resolve().then(s.bind(s, 13246)),
                Promise.resolve().then(s.bind(s, 26040)),
                Promise.resolve().then(s.bind(s, 92446)),
                Promise.resolve().then(s.bind(s, 42593)),
                Promise.resolve().then(s.bind(s, 70570)),
                Promise.resolve().then(s.bind(s, 88416)),
                Promise.resolve().then(s.bind(s, 24174)),
                Promise.resolve().then(s.bind(s, 78458)),
                Promise.resolve().then(s.bind(s, 59457)),
                Promise.resolve().then(s.bind(s, 6690)),
                Promise.resolve().then(s.bind(s, 88370)),
                Promise.resolve().then(s.bind(s, 66904)),
                Promise.resolve().then(s.bind(s, 39937)),
                Promise.resolve().then(s.bind(s, 33019)),
                Promise.resolve().then(s.bind(s, 38808)),
                Promise.resolve().then(s.bind(s, 58094)),
                Promise.resolve().then(s.bind(s, 78009)),
                Promise.resolve().then(s.bind(s, 33427)),
                Promise.resolve().then(s.bind(s, 30878)),
                Promise.resolve().then(s.bind(s, 53115)),
                Promise.resolve().then(s.bind(s, 52398)),
                Promise.resolve().then(s.bind(s, 82327)),
                Promise.resolve().then(s.bind(s, 17012)),
                Promise.resolve().then(s.bind(s, 9275)),
                Promise.resolve().then(s.bind(s, 17658)),
                Promise.resolve().then(s.bind(s, 36578)),
                Promise.resolve().then(s.bind(s, 66989)),
                Promise.resolve().then(s.bind(s, 58863)),
                Promise.resolve().then(s.bind(s, 60899)),
                Promise.resolve().then(s.bind(s, 59437)),
                Promise.resolve().then(s.bind(s, 43367)),
                Promise.resolve().then(s.bind(s, 66446)),
                Promise.resolve().then(s.bind(s, 86840)),
                Promise.resolve().then(s.bind(s, 75181)),
                Promise.resolve().then(s.bind(s, 99538)),
                Promise.resolve().then(s.bind(s, 45252)),
                Promise.resolve().then(s.bind(s, 59226)),
                Promise.resolve().then(s.bind(s, 75961)),
                Promise.resolve().then(s.bind(s, 33964)),
                Promise.resolve().then(s.bind(s, 33967)),
                Promise.resolve().then(s.bind(s, 64410)),
                Promise.resolve().then(s.bind(s, 91350)),
                Promise.resolve().then(s.bind(s, 4500)),
                Promise.resolve().then(s.bind(s, 55846)),
                Promise.resolve().then(s.bind(s, 65689)),
                Promise.resolve().then(s.bind(s, 99386)),
                Promise.resolve().then(s.bind(s, 5222)),
                Promise.resolve().then(s.bind(s, 60440)),
                Promise.resolve().then(s.bind(s, 37271)),
                Promise.resolve().then(s.bind(s, 66688)),
                Promise.resolve().then(s.bind(s, 76472));
        },
        99893: (e, r, s) => {
            'use strict';
            s.d(r, { FavoriteTracksPage: () => h });
            var o = s(54486),
                n = s(28303),
                i = s(61910),
                t = s(83252),
                l = s(42421);
            let d = (0, n.PA)(() => (0, o.jsx)(l.M, {})),
                h = (0, n.PA)(() => {
                    let { favoriteTracks: e } = (0, t.Pjs)(),
                        r = (0, t.ZpR)(e.playlistUrl);
                    if (
                        ((0, i.useEffect)(
                            () => () => {
                                e.reset();
                            },
                            [e],
                        ),
                        (0, i.useEffect)(() => {
                            e.playlistUrl && r();
                        }, [e.playlistUrl, r]),
                        e.isNeededToLoad && (0, i.use)(e.getPlaylistUrl()),
                        e.isRejected)
                    )
                        return (0, o.jsx)(d, {});
                });
        },
    },
    (e) => {
        e.O(
            0,
            [9834, 6041, 5355, 1023, 4354, 1621, 7999, 1776, 1311, 7764, 6706, 5148, 3005, 5973, 722, 3252, 585, 6433, 6231, 5284, 9320, 8387, 3205, 5843, 3290, 7358],
            () => e((e.s = 95208)),
        ),
            (_N_E = e.O());
    },
]);
