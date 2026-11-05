(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2717],
    {
        26827: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        54721: (e, t, n) => {
            'use strict';
            n.d(t, { u: () => u });
            var o = n(53548),
                a = n(47149),
                s = n(63582),
                i = n(59791),
                r = n(7695),
                c = n(53534),
                l = n(89846),
                d = n(64543),
                p = n(56374);
            let u = (0, s.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, o.useContext)(i.I),
                    { hash: t } = (0, l.g)(),
                    { screen: n, tab: s } = (0, d.j)(),
                    u = (0, o.useContext)(c.k)?.session,
                    { current: _ } = (0, o.useRef)(Symbol()),
                    N = !!n,
                    m = (o) => {
                        if (!e || !u || !n?.pageId || void 0 === t || !N) return !1;
                        let i = {
                            hash: t,
                            pageId: n.pageId,
                            pageStyle: n.pageStyle,
                            pagePlacement: n.pagePlacement,
                            mainObjectType: n.mainObjectType,
                            mainObjectId: n.mainObjectId,
                            skeletonId: n.skeletonId,
                            viewUuid: n.screenViewUuid,
                            ...(s ?? r.Ve),
                        };
                        return (o ? u.open(_, () => (0, a.Fn)(e, i)) : u.close(_, () => (0, a.PO)(e, i)), !0);
                    },
                    [g, F] = (0, o.useState)(() => ({ session: u, send: m, opened: !1 })),
                    b = g;
                (g.session !== u && F((b = { session: u, send: m, opened: !1 })),
                    (0, o.useInsertionEffect)(() => {
                        N && void 0 !== t && (b.send = m);
                    }, [b, t, N, m]));
                let j = (0, p.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, o.useEffect)(
                    () => (
                        j(b, !0),
                        () => {
                            (b.opened && j(b, !1), b.session?.release(_));
                        }
                    ),
                    [_, b, j],
                ),
                    (0, o.useEffect)(() => {
                        j(b, !0);
                    }, [b, t, N, j]));
            });
        },
        57278: (e, t, n) => {
            (Promise.resolve().then(n.bind(n, 3922)), Promise.resolve().then(n.bind(n, 64462)));
        },
        64462: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => T }));
            var o = n(88800),
                a = n(65724),
                s = n(84961),
                i = n(88969);
            n(30282);
            var r = n(87999),
                c = n(54721),
                l = n(76903),
                d = n(17392),
                p = n(96817),
                u = n(52300),
                _ = n(66719),
                N = n(29504),
                m = n(98427),
                g = n(53548),
                F = n(47149),
                b = n(84423),
                j = n(89846);
            let v = (0, n(63582).n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function (e) {
                var t;
                let n = null == (t = (0, b.s)()) ? void 0 : t.evgenInstance,
                    { hash: o } = (0, j.g)();
                return {
                    handleNavigateToMain: (0, g.useCallback)(() => {
                        if (!n || !o) return;
                        let t = {
                            hash: o,
                            pageId: r.AppScreen.PageNotFoundScreen,
                            pageStyle: r.PageStyles.Fullscreen,
                            pagePlacement: r.PagePlacements.Fullscreen,
                            mainObjectType: r.DomainObjectType.NonApplicable,
                            mainObjectId: r.DomainObjectType.NonApplicable,
                            from: r.AppScreen.PageNotFoundScreen,
                            to: r.AppScreen.MainScreen,
                            entityType: r.EntityTypes.Error,
                            entityId: r.EntityTypes.Error,
                        };
                        (Object.values(t).some((e) => void 0 === e) || (0, F.Mu)(n, t), e());
                    }, [n, o, e]),
                };
            });
            var x = n(44230),
                y = n(4370),
                O = n(78940),
                S = n(95210),
                h = n(56248),
                k = n(72288),
                I = n(26827),
                f = n.n(I);
            let P = (0, s.PA)((e) => {
                    let { className: t, title: n, description: s, iconVariant: r = 'musicLogo', iconClassName: l, iconSize: m } = e,
                        { contentRef: F, setContentScrollRef: b } = (0, x.g)(),
                        j = (0, O.Z)(y.Z.main.href);
                    (0, c.u)();
                    let { handleNavigateToMain: I } = v(j);
                    return (
                        (0, S.N)(!0),
                        !(function () {
                            let { location: e } = (0, k.g)();
                            (0, g.useEffect)(
                                () => (
                                    e.setNotFound(!0),
                                    () => {
                                        e.setNotFound(!1);
                                    }
                                ),
                                [e],
                            );
                        })(),
                        (0, o.jsxs)(_.N, {
                            className: (0, a.$)(f().root, { [f().root_desktop]: !F }, t),
                            containerClassName: f().container,
                            ref: b,
                            'data-test-id': d.e8.notFound.NOT_FOUND,
                            children: [
                                (0, o.jsx)(h.L, { withBackwardFallback: '/', className: f().navigation, withForwardControl: !1 }),
                                (0, o.jsxs)('div', {
                                    className: f().content,
                                    children: [
                                        (0, o.jsx)(u.I, { className: (0, a.$)(f().icon, l), variant: r, size: m }),
                                        (0, o.jsx)(N.DZ, {
                                            className: (0, a.$)(f().title, f().important),
                                            variant: 'h3',
                                            size: 'xs',
                                            'data-test-id': d.e8.notFound.NOT_FOUND_TITLE,
                                            children: n || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                        }),
                                        (0, o.jsx)(N.HL, {
                                            className: (0, a.$)(f().text, f().important),
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'normal',
                                            children: s || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                        }),
                                        (0, o.jsx)(p.$, {
                                            onClick: I,
                                            className: f().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 'l',
                                            radius: 'xxxl',
                                            children: (0, o.jsx)(N.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, o.jsx)(i.A, { id: 'navigation.page-main' }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                T = (e) =>
                    (0, o.jsx)(l.a, {
                        pageId: r.AppScreen.PageNotFoundScreen,
                        pageIdForFrom: m.b.PAGE_NOT_FOUND_SCREEN,
                        pageStyle: r.PageStyles.Fullscreen,
                        pagePlacement: r.PagePlacements.Fullscreen,
                        mainObjectType: r.DomainObjectType.NonApplicable,
                        mainObjectId: r.DomainObjectType.NonApplicable,
                        children: (0, o.jsx)(P, { ...e }),
                    });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 8194, 9079, 1833, 918, 3469, 2753, 3883, 1041, 8150, 8655, 5081, 4597, 8500, 1191, 2968, 8936, 6706, 4771, 1311, 5201, 8832, 6904, 4495, 2058,
                3578, 8628, 4827, 8283, 1800, 7746, 1848, 3919, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 7670, 4441, 9337, 818, 1372, 5638, 2288, 8128, 7371,
                3684, 7e3, 763, 2670, 7358,
            ],
            () => e((e.s = 57278)),
        ),
            (_N_E = e.O()));
    },
]);
