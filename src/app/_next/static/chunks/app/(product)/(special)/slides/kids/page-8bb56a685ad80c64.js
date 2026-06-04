(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4113, 8747, 9476],
    {
        2047: (e, r, o) => {
            'use strict';
            var n;
            o.d(r, { L: () => n }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(n || (n = {}));
        },
        19476: (e, r, o) => {
            'use strict';
            o.r(r), o.d(r, { default: () => b });
            var n = o(32290),
                s = o(63618),
                i = o(55178),
                t = o(44989),
                l = o(54280),
                d = o(49574),
                h = o(91288),
                v = o.n(h),
                m = o(49124);
            let b = (e) => {
                let { children: r } = e,
                    { state: o, toggleTrue: h } = (0, t.e)(!1),
                    { state: b, toggleTrue: P } = (0, t.e)(!1),
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
                    _ = (0, i.useMemo)(() => ({ isVisible: !o }), [o]);
                return (0, n.jsxs)(d.nlO.Provider, {
                    value: _,
                    children: [
                        !o &&
                            (0, n.jsx)('div', {
                                className: (0, s.$)(v().root, v()['root_'.concat(c)], { [v().root_hidden]: b }),
                                onAnimationEnd: h,
                                children: (0, n.jsxs)('video', {
                                    className: v().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: P,
                                    onError: h,
                                    children: [(0, n.jsx)('source', { src: u('webm'), type: 'video/webm' }), (0, n.jsx)('source', { src: u('mp4'), type: 'video/mp4' })],
                                }),
                            }),
                        r,
                    ],
                });
            };
        },
        19684: (e, r, o) => {
            Promise.resolve().then(o.bind(o, 63397)),
                Promise.resolve().then(o.bind(o, 46456)),
                Promise.resolve().then(o.bind(o, 7276)),
                Promise.resolve().then(o.bind(o, 29680)),
                Promise.resolve().then(o.bind(o, 76822)),
                Promise.resolve().then(o.bind(o, 89523)),
                Promise.resolve().then(o.bind(o, 19338)),
                Promise.resolve().then(o.bind(o, 76202)),
                Promise.resolve().then(o.bind(o, 67299)),
                Promise.resolve().then(o.bind(o, 7200)),
                Promise.resolve().then(o.bind(o, 72038)),
                Promise.resolve().then(o.bind(o, 19476)),
                Promise.resolve().then(o.bind(o, 47450)),
                Promise.resolve().then(o.t.bind(o, 39904, 23)),
                Promise.resolve().then(o.bind(o, 82427)),
                Promise.resolve().then(o.bind(o, 71768)),
                Promise.resolve().then(o.bind(o, 65650)),
                Promise.resolve().then(o.bind(o, 59564)),
                Promise.resolve().then(o.bind(o, 9471)),
                Promise.resolve().then(o.bind(o, 78305)),
                Promise.resolve().then(o.bind(o, 70632)),
                Promise.resolve().then(o.bind(o, 35058)),
                Promise.resolve().then(o.bind(o, 85743)),
                Promise.resolve().then(o.bind(o, 90923)),
                Promise.resolve().then(o.bind(o, 17595)),
                Promise.resolve().then(o.bind(o, 41540)),
                Promise.resolve().then(o.bind(o, 48462)),
                Promise.resolve().then(o.bind(o, 8868)),
                Promise.resolve().then(o.bind(o, 12350)),
                Promise.resolve().then(o.bind(o, 95481)),
                Promise.resolve().then(o.bind(o, 47745)),
                Promise.resolve().then(o.bind(o, 12989)),
                Promise.resolve().then(o.bind(o, 2969)),
                Promise.resolve().then(o.bind(o, 84051)),
                Promise.resolve().then(o.bind(o, 27789)),
                Promise.resolve().then(o.bind(o, 70435)),
                Promise.resolve().then(o.bind(o, 19875)),
                Promise.resolve().then(o.bind(o, 54391)),
                Promise.resolve().then(o.bind(o, 63529)),
                Promise.resolve().then(o.bind(o, 73818)),
                Promise.resolve().then(o.bind(o, 20599)),
                Promise.resolve().then(o.bind(o, 84782)),
                Promise.resolve().then(o.bind(o, 30915)),
                Promise.resolve().then(o.bind(o, 70608)),
                Promise.resolve().then(o.bind(o, 18746)),
                Promise.resolve().then(o.bind(o, 71610)),
                Promise.resolve().then(o.bind(o, 23352)),
                Promise.resolve().then(o.bind(o, 10936)),
                Promise.resolve().then(o.bind(o, 2792)),
                Promise.resolve().then(o.bind(o, 22714)),
                Promise.resolve().then(o.bind(o, 37240)),
                Promise.resolve().then(o.bind(o, 3064)),
                Promise.resolve().then(o.bind(o, 51012)),
                Promise.resolve().then(o.bind(o, 9848)),
                Promise.resolve().then(o.bind(o, 47498)),
                Promise.resolve().then(o.bind(o, 8152)),
                Promise.resolve().then(o.bind(o, 43474)),
                Promise.resolve().then(o.bind(o, 46200)),
                Promise.resolve().then(o.bind(o, 5537)),
                Promise.resolve().then(o.bind(o, 34186)),
                Promise.resolve().then(o.bind(o, 56008)),
                Promise.resolve().then(o.bind(o, 67732)),
                Promise.resolve().then(o.bind(o, 30787)),
                Promise.resolve().then(o.bind(o, 65476)),
                Promise.resolve().then(o.bind(o, 83416)),
                Promise.resolve().then(o.bind(o, 31010)),
                Promise.resolve().then(o.bind(o, 19383)),
                Promise.resolve().then(o.bind(o, 3313)),
                Promise.resolve().then(o.bind(o, 81619)),
                Promise.resolve().then(o.bind(o, 83808)),
                Promise.resolve().then(o.bind(o, 22191)),
                Promise.resolve().then(o.bind(o, 14858)),
                Promise.resolve().then(o.bind(o, 61945)),
                Promise.resolve().then(o.bind(o, 83920)),
                Promise.resolve().then(o.bind(o, 49545)),
                Promise.resolve().then(o.bind(o, 3796)),
                Promise.resolve().then(o.bind(o, 40953)),
                Promise.resolve().then(o.bind(o, 30542)),
                Promise.resolve().then(o.bind(o, 59121)),
                Promise.resolve().then(o.bind(o, 71773)),
                Promise.resolve().then(o.bind(o, 34284)),
                Promise.resolve().then(o.bind(o, 46151)),
                Promise.resolve().then(o.bind(o, 32087)),
                Promise.resolve().then(o.bind(o, 5701)),
                Promise.resolve().then(o.bind(o, 10659)),
                Promise.resolve().then(o.bind(o, 68135)),
                Promise.resolve().then(o.bind(o, 75265)),
                Promise.resolve().then(o.bind(o, 36321)),
                Promise.resolve().then(o.bind(o, 29098)),
                Promise.resolve().then(o.bind(o, 92191)),
                Promise.resolve().then(o.bind(o, 27120)),
                Promise.resolve().then(o.bind(o, 53022)),
                Promise.resolve().then(o.bind(o, 22748)),
                Promise.resolve().then(o.bind(o, 84199)),
                Promise.resolve().then(o.bind(o, 81218)),
                Promise.resolve().then(o.bind(o, 90169)),
                Promise.resolve().then(o.bind(o, 6429)),
                Promise.resolve().then(o.bind(o, 44128)),
                Promise.resolve().then(o.bind(o, 31286)),
                Promise.resolve().then(o.bind(o, 92496)),
                Promise.resolve().then(o.bind(o, 21183)),
                Promise.resolve().then(o.bind(o, 59888)),
                Promise.resolve().then(o.bind(o, 95112)),
                Promise.resolve().then(o.bind(o, 57594)),
                Promise.resolve().then(o.bind(o, 26069)),
                Promise.resolve().then(o.bind(o, 4433)),
                Promise.resolve().then(o.bind(o, 50)),
                Promise.resolve().then(o.bind(o, 11262)),
                Promise.resolve().then(o.bind(o, 12119));
        },
        43740: (e, r, o) => {
            'use strict';
            o.d(r, { a: () => s });
            var n = o(46862);
            let s = () => {
                let e = null,
                    r = new n.cJ(!1),
                    o = [];
                return {
                    isLoaded: r,
                    init: (n) => {
                        var s, i;
                        if (void 0 !== (null == (s = window.Ya) ? void 0 : s.Metrika2) && !r.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...n })),
                                    (r.value = !0),
                                    (i = e),
                                    o.forEach((e) => {
                                        e(i);
                                    }),
                                    (o.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && n.logger.error(e);
                            }
                    },
                    count: function (r) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [n]: r })
                            : o.push((e) => {
                                  e.params({ [n]: r });
                              });
                    },
                    hit: (r) => {
                        e
                            ? e.hit(r)
                            : o.push((e) => {
                                  e.hit(r);
                              });
                    },
                    reachGoal: (r, n) => {
                        if (!e) return void o.push((e) => e.reachGoal(r, n));
                        e.reachGoal(r, n);
                    },
                };
            };
        },
        76822: (e, r, o) => {
            'use strict';
            let n;
            o.d(r, { useMetrika: () => t });
            var s = o(55178),
                i = o(43740);
            let t = () => {
                let e = (n || (n = (0, i.a)()), n),
                    r = (0, s.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, s.useMemo)(() => ({ ...e, isLoaded: r }), [r]);
            };
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
    },
    (e) => {
        e.O(
            0,
            [
                3445, 1670, 9143, 6351, 9580, 4903, 1311, 7764, 6706, 3267, 9769, 1675, 5283, 764, 9574, 4574, 5428, 6049, 4942, 2127, 6687, 3057, 5870, 9220, 4220, 9562,
                7358,
            ],
            () => e((e.s = 19684)),
        ),
            (_N_E = e.O());
    },
]);
