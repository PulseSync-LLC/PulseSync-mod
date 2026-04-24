(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1784],
    {
        83: (e, o, s) => {
            'use strict';
            s.d(o, { PlaylistPersonalPage: () => a });
            var i = s(62936),
                n = s(19718),
                r = s(69526),
                t = s(44020),
                l = s(42561),
                d = s(3535);
            let a = (0, n.PA)((e) => {
                let { params: o, searchParams: s } = e,
                    { playlistPersonal: n } = (0, l.Pjs)(),
                    a = n.getUrl(s);
                if (
                    ((0, t.useEffect)(() => {
                        n.isNeededToLoad && n.getPlaylistPersonalDetails(o.playlistId);
                    }, [n.isNeededToLoad, o.playlistId, n]),
                    (0, t.useEffect)(
                        () => () => {
                            n.reset();
                        },
                        [n],
                    ),
                    (0, l.Jzs)(n.isResolved),
                    (n.isNotFound || n.isRejected) && (0, r.notFound)(),
                    n.isResolved && !n.isReady)
                )
                    return n.dummyDescription || (0, r.notFound)(), (0, i.jsx)(d.PlaylistPersonalDummyPage, {});
                n.isResolved && n.isReady && (0, r.redirect)(a);
            });
        },
        3535: (e, o, s) => {
            'use strict';
            s.d(o, { PlaylistPersonalDummyPage: () => h });
            var i = s(62936),
                n = s(79950),
                r = s(19718),
                t = s(20418),
                l = s(42561),
                d = s(85906),
                a = s(67341),
                m = s.n(a);
            let h = (0, r.PA)(() => {
                let {
                    playlistPersonal: { dummyCoverUrl: e, dummyDescription: o, title: s },
                } = (0, l.Pjs)();
                return (0, i.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, i.jsx)(d.Y9, {}),
                        (0, i.jsx)(d.BW, { src: e, size: 200, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: m().cover }),
                        s && (0, i.jsx)(t.Heading, { className: (0, n.$)(m().title, m().important), variant: 'h1', size: 'xs', children: s }),
                        o &&
                            (0, i.jsx)(t.Caption, {
                                className: (0, n.$)(m().text, m().important),
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: o,
                            }),
                    ],
                });
            });
        },
        43528: (e, o, s) => {
            'use strict';
            s.d(o, { a: () => n });
            var i = s(43696);
            let n = () => {
                let e = null,
                    o = new i.cJ(!1),
                    s = [];
                return {
                    isLoaded: o,
                    init: (i) => {
                        var n, r;
                        if (void 0 !== (null == (n = window.Ya) ? void 0 : n.Metrika2) && !o.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...i })),
                                    (o.value = !0),
                                    (r = e),
                                    s.forEach((e) => {
                                        e(r);
                                    }),
                                    (s.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && i.logger.error(e);
                            }
                    },
                    count: function (o) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [i]: o })
                            : s.push((e) => {
                                  e.params({ [i]: o });
                              });
                    },
                    hit: (o) => {
                        e
                            ? e.hit(o)
                            : s.push((e) => {
                                  e.hit(o);
                              });
                    },
                    reachGoal: (o, i) => {
                        if (!e) return void s.push((e) => e.reachGoal(o, i));
                        e.reachGoal(o, i);
                    },
                };
            };
        },
        54802: (e, o, s) => {
            'use strict';
            let i;
            s.d(o, { useMetrika: () => t });
            var n = s(44020),
                r = s(43528);
            let t = () => {
                let e = (i || (i = (0, r.a)()), i),
                    o = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: o }), [o]);
            };
        },
        67341: (e) => {
            e.exports = {
                root: 'PlaylistPersonalDummyPage_root__tGxHG',
                cover: 'PlaylistPersonalDummyPage_cover__XcCD1',
                title: 'PlaylistPersonalDummyPage_title__ZSf9O',
                important: 'PlaylistPersonalDummyPage_important__uEHGe',
                text: 'PlaylistPersonalDummyPage_text__ci30d',
            };
        },
        85286: (e, o, s) => {
            Promise.resolve().then(s.bind(s, 50576)),
                Promise.resolve().then(s.bind(s, 59260)),
                Promise.resolve().then(s.bind(s, 54802)),
                Promise.resolve().then(s.bind(s, 3535)),
                Promise.resolve().then(s.bind(s, 83)),
                Promise.resolve().then(s.bind(s, 70900)),
                Promise.resolve().then(s.bind(s, 11182)),
                Promise.resolve().then(s.bind(s, 95368)),
                Promise.resolve().then(s.bind(s, 12331)),
                Promise.resolve().then(s.bind(s, 52589)),
                Promise.resolve().then(s.bind(s, 83132)),
                Promise.resolve().then(s.bind(s, 7670)),
                Promise.resolve().then(s.bind(s, 395)),
                Promise.resolve().then(s.bind(s, 83543)),
                Promise.resolve().then(s.bind(s, 99303)),
                Promise.resolve().then(s.bind(s, 45648)),
                Promise.resolve().then(s.bind(s, 35042)),
                Promise.resolve().then(s.bind(s, 94311)),
                Promise.resolve().then(s.bind(s, 46650)),
                Promise.resolve().then(s.bind(s, 33405)),
                Promise.resolve().then(s.bind(s, 32101)),
                Promise.resolve().then(s.bind(s, 63329)),
                Promise.resolve().then(s.bind(s, 941)),
                Promise.resolve().then(s.bind(s, 58991)),
                Promise.resolve().then(s.bind(s, 42297)),
                Promise.resolve().then(s.bind(s, 7551)),
                Promise.resolve().then(s.bind(s, 75695)),
                Promise.resolve().then(s.bind(s, 42323)),
                Promise.resolve().then(s.bind(s, 91135)),
                Promise.resolve().then(s.bind(s, 14878)),
                Promise.resolve().then(s.bind(s, 26467)),
                Promise.resolve().then(s.bind(s, 41970)),
                Promise.resolve().then(s.bind(s, 16847)),
                Promise.resolve().then(s.bind(s, 78780)),
                Promise.resolve().then(s.bind(s, 16782)),
                Promise.resolve().then(s.bind(s, 77966)),
                Promise.resolve().then(s.bind(s, 31148)),
                Promise.resolve().then(s.bind(s, 76532)),
                Promise.resolve().then(s.bind(s, 38076)),
                Promise.resolve().then(s.bind(s, 94158)),
                Promise.resolve().then(s.bind(s, 14124)),
                Promise.resolve().then(s.bind(s, 86100)),
                Promise.resolve().then(s.bind(s, 59736)),
                Promise.resolve().then(s.bind(s, 20532)),
                Promise.resolve().then(s.bind(s, 80222)),
                Promise.resolve().then(s.bind(s, 93148)),
                Promise.resolve().then(s.bind(s, 43898)),
                Promise.resolve().then(s.bind(s, 23164)),
                Promise.resolve().then(s.bind(s, 71637)),
                Promise.resolve().then(s.bind(s, 87894)),
                Promise.resolve().then(s.bind(s, 72964)),
                Promise.resolve().then(s.bind(s, 2760)),
                Promise.resolve().then(s.bind(s, 31927)),
                Promise.resolve().then(s.bind(s, 97248)),
                Promise.resolve().then(s.bind(s, 57612)),
                Promise.resolve().then(s.bind(s, 5670)),
                Promise.resolve().then(s.bind(s, 70915)),
                Promise.resolve().then(s.bind(s, 8148)),
                Promise.resolve().then(s.bind(s, 32634)),
                Promise.resolve().then(s.bind(s, 508)),
                Promise.resolve().then(s.bind(s, 36363)),
                Promise.resolve().then(s.bind(s, 15958)),
                Promise.resolve().then(s.bind(s, 78685)),
                Promise.resolve().then(s.bind(s, 34476)),
                Promise.resolve().then(s.bind(s, 60917)),
                Promise.resolve().then(s.bind(s, 62520)),
                Promise.resolve().then(s.bind(s, 21389)),
                Promise.resolve().then(s.bind(s, 85546)),
                Promise.resolve().then(s.bind(s, 80185)),
                Promise.resolve().then(s.bind(s, 38285)),
                Promise.resolve().then(s.bind(s, 792)),
                Promise.resolve().then(s.bind(s, 34291)),
                Promise.resolve().then(s.bind(s, 31299)),
                Promise.resolve().then(s.bind(s, 56209)),
                Promise.resolve().then(s.bind(s, 44162)),
                Promise.resolve().then(s.bind(s, 93427)),
                Promise.resolve().then(s.bind(s, 57861)),
                Promise.resolve().then(s.bind(s, 30615)),
                Promise.resolve().then(s.bind(s, 34990)),
                Promise.resolve().then(s.bind(s, 16395)),
                Promise.resolve().then(s.bind(s, 75020)),
                Promise.resolve().then(s.bind(s, 32746)),
                Promise.resolve().then(s.bind(s, 2552)),
                Promise.resolve().then(s.bind(s, 7323)),
                Promise.resolve().then(s.bind(s, 68270)),
                Promise.resolve().then(s.bind(s, 99525)),
                Promise.resolve().then(s.bind(s, 44276)),
                Promise.resolve().then(s.bind(s, 49452)),
                Promise.resolve().then(s.bind(s, 68834)),
                Promise.resolve().then(s.bind(s, 67484)),
                Promise.resolve().then(s.bind(s, 6987)),
                Promise.resolve().then(s.bind(s, 748)),
                Promise.resolve().then(s.bind(s, 94756)),
                Promise.resolve().then(s.bind(s, 5798)),
                Promise.resolve().then(s.bind(s, 44817)),
                Promise.resolve().then(s.bind(s, 6181)),
                Promise.resolve().then(s.bind(s, 40846)),
                Promise.resolve().then(s.bind(s, 43762)),
                Promise.resolve().then(s.bind(s, 91455));
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
        91455: (e, o, s) => {
            'use strict';
            s.d(o, { NotFound: () => c });
            var i = s(62936),
                n = s(79950),
                r = s(19718),
                t = s(26731),
                l = s(5099),
                d = s(85742),
                a = s(20418),
                m = s(42561),
                h = s(85906),
                v = s(44020),
                P = s(88933),
                b = s.n(P);
            let c = (0, r.PA)((e) => {
                let { className: o, title: s, description: r, iconVariant: P = 'musicLogo', iconClassName: c, iconSize: u } = e,
                    { contentRef: _ } = (0, m.gKY)(),
                    p = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: x } = (0, m.D5F)(p);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, v.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, i.jsxs)('div', {
                        className: (0, n.$)(b().root, { [b().root_desktop]: !_ }, o),
                        children: [
                            (0, i.jsx)(h.Lh, { withBackwardFallback: '/', className: b().navigation, withForwardControl: !1 }),
                            (0, i.jsxs)('div', {
                                className: b().content,
                                children: [
                                    (0, i.jsx)(d.Icon, { className: (0, n.$)(b().icon, c), variant: P, size: u }),
                                    (0, i.jsx)(a.Heading, {
                                        className: (0, n.$)(b().title, b().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: s || (0, i.jsx)(t.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, i.jsx)(a.Caption, {
                                        className: (0, n.$)(b().text, b().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: r || (0, i.jsx)(t.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, i.jsx)(l.$, {
                                        onClick: x,
                                        className: b().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(a.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, i.jsx)(t.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
    },
    (e) => {
        e.O(0, [85, 260, 3196, 403, 4103, 1970, 1311, 7764, 6706, 2899, 5419, 2561, 5906, 1009, 4670, 7358], () => e((e.s = 85286))), (_N_E = e.O());
    },
]);
