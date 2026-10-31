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
        78805: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => f }));
            var o = n(88800),
                a = n(65724),
                i = n(84961),
                r = n(88969);
            n(30282);
            var s = n(17392),
                c = n(96817),
                l = n(52300),
                d = n(66719),
                p = n(29504),
                u = n(53548),
                _ = n(78793),
                N = n(92716),
                m = n(99984),
                g = n(90780),
                F = n(65523),
                b = n(54020),
                y = n(44230),
                x = n(4370),
                v = n(78940),
                j = n(95210),
                O = n(56248),
                S = n(72288),
                h = n(26827),
                P = n.n(h);
            let f = (0, i.PA)((e) => {
                let { className: t, title: n, description: i, iconVariant: h = 'musicLogo', iconClassName: f, iconSize: T } = e,
                    { contentRef: A, setContentScrollRef: k } = (0, y.g)(),
                    E = (0, v.Z)(x.Z.main.href);
                !(function () {
                    let e = (0, g.st)(),
                        { hash: t } = (0, g.gf)(),
                        n = (0, F.U)(),
                        o = (0, u.useRef)(void 0);
                    (0, u.useEffect)(() => {
                        if (!e || !t) return;
                        o.current = (0, b.A)();
                        let a = (0, _.F)({
                            params: {
                                hash: t,
                                pageId: N.AppScreen.PageNotFoundScreen,
                                pageStyle: N.PageStyles.Fullscreen,
                                pagePlacement: N.PagePlacements.Fullscreen,
                                mainObjectType: N.DomainObjectType.NonApplicable,
                                mainObjectId: N.DomainObjectType.NonApplicable,
                                viewUuid: o.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, m.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, _.F)({
                                    params: {
                                        hash: t,
                                        pageId: N.AppScreen.PageNotFoundScreen,
                                        pageStyle: N.PageStyles.Fullscreen,
                                        pagePlacement: N.PagePlacements.Fullscreen,
                                        mainObjectType: N.DomainObjectType.NonApplicable,
                                        mainObjectId: N.DomainObjectType.NonApplicable,
                                        viewUuid: o.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, m.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: I } = (function (e) {
                    let t = (0, g.st)(),
                        { hash: n } = (0, g.gf)(),
                        o = (0, F.U)();
                    return {
                        handleNavigateToMain: (0, u.useCallback)(() => {
                            if (!t || !n) return;
                            let a = (0, _.F)({
                                params: {
                                    hash: n,
                                    pageId: N.AppScreen.PageNotFoundScreen,
                                    pageStyle: N.PageStyles.Fullscreen,
                                    pagePlacement: N.PagePlacements.Fullscreen,
                                    mainObjectType: N.DomainObjectType.NonApplicable,
                                    mainObjectId: N.DomainObjectType.NonApplicable,
                                    from: N.AppScreen.PageNotFoundScreen,
                                    to: N.AppScreen.MainScreen,
                                    entityType: N.EntityTypes.Error,
                                    entityId: N.EntityTypes.Error,
                                },
                                logger: o,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (a && (0, m.Mu)(t.evgenInstance, a), e());
                        }, [t, n, o, e]),
                    };
                })(E);
                return (
                    (0, j.N)(!0),
                    !(function () {
                        let { location: e } = (0, S.g)();
                        (0, u.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, o.jsxs)(d.N, {
                        className: (0, a.$)(P().root, { [P().root_desktop]: !A }, t),
                        containerClassName: P().container,
                        ref: k,
                        'data-test-id': s.e8.notFound.NOT_FOUND,
                        children: [
                            (0, o.jsx)(O.L, { withBackwardFallback: '/', className: P().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: P().content,
                                children: [
                                    (0, o.jsx)(l.I, { className: (0, a.$)(P().icon, f), variant: h, size: T }),
                                    (0, o.jsx)(p.DZ, {
                                        className: (0, a.$)(P().title, P().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        'data-test-id': s.e8.notFound.NOT_FOUND_TITLE,
                                        children: n || (0, o.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(p.HL, {
                                        className: (0, a.$)(P().text, P().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: i || (0, o.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(c.$, {
                                        onClick: I,
                                        className: P().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(p.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(r.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        80518: (e, t, n) => {
            (Promise.resolve().then(n.bind(n, 16278)), Promise.resolve().then(n.bind(n, 78805)));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 1931, 5108, 8380, 4596, 127, 2753, 3883, 5898, 7617, 4597, 8500, 1191, 6706, 4771, 1311, 5201, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326,
                8283, 1714, 4129, 4732, 1195, 1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 4561, 9337, 818, 1372, 5638, 2288, 9079, 8128, 7760, 258, 763, 2670, 7358,
            ],
            () => e((e.s = 80518)),
        ),
            (_N_E = e.O()));
    },
]);
