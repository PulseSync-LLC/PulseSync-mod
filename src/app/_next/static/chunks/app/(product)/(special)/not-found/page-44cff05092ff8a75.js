(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2717],
    {
        24053: (e) => {
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
        87751: (e, n, t) => {
            (Promise.resolve().then(t.bind(t, 61183)), Promise.resolve().then(t.bind(t, 96634)));
        },
        96634: (e, n, t) => {
            'use strict';
            (t.r(n), t.d(n, { NotFound: () => P }));
            var o = t(25839),
                a = t(82298),
                r = t(88204),
                i = t(8487);
            t(93588);
            var s = t(4071),
                c = t(66738),
                l = t(13833),
                p = t(4254),
                d = t(74631),
                u = t(67379),
                _ = t(36619),
                m = t(76945),
                N = t(59450),
                g = t(84e3),
                F = t(59342),
                b = t(89192),
                y = t(53712),
                x = t(85686),
                v = t(56120),
                j = t(15270),
                S = t(27954),
                h = t(24053),
                O = t.n(h);
            let P = (0, r.PA)((e) => {
                let { className: n, title: t, description: r, iconVariant: h = 'musicLogo', iconClassName: P, iconSize: f } = e,
                    { contentRef: A, setContentScrollRef: k } = (0, b.g)(),
                    E = (0, x.Z)(y.Z.main.href);
                !(function () {
                    let e = (0, N.st)(),
                        { hash: n } = (0, N.gf)(),
                        t = (0, g.U)(),
                        o = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !n) return;
                        o.current = (0, F.A)();
                        let a = (0, u.F)({
                            params: {
                                hash: n,
                                pageId: _.AppScreen.PageNotFoundScreen,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                                viewUuid: o.current,
                            },
                            logger: t,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, m.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, u.F)({
                                    params: {
                                        hash: n,
                                        pageId: _.AppScreen.PageNotFoundScreen,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                        viewUuid: o.current,
                                    },
                                    logger: t,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, m.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, n, t]);
                })();
                let { handleNavigateToMain: T } = (function (e) {
                    let n = (0, N.st)(),
                        { hash: t } = (0, N.gf)(),
                        o = (0, g.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!n || !t) return;
                            let a = (0, u.F)({
                                params: {
                                    hash: t,
                                    pageId: _.AppScreen.PageNotFoundScreen,
                                    pageStyle: _.PageStyles.Fullscreen,
                                    pagePlacement: _.PagePlacements.Fullscreen,
                                    mainObjectType: _.DomainObjectType.NonApplicable,
                                    mainObjectId: _.DomainObjectType.NonApplicable,
                                    from: _.AppScreen.PageNotFoundScreen,
                                    to: _.AppScreen.MainScreen,
                                    entityType: _.EntityTypes.Error,
                                    entityId: _.EntityTypes.Error,
                                },
                                logger: o,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (a && (0, m.Mu)(n.evgenInstance, a), e());
                        }, [n, t, o, e]),
                    };
                })(E);
                return (
                    (0, v.N)(!0),
                    !(function () {
                        let { location: e } = (0, S.g)();
                        (0, d.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, o.jsxs)(l.N, {
                        className: (0, a.$)(O().root, { [O().root_desktop]: !A }, n),
                        containerClassName: O().container,
                        ref: k,
                        children: [
                            (0, o.jsx)(j.L, { withBackwardFallback: '/', className: O().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: O().content,
                                children: [
                                    (0, o.jsx)(c.I, { className: (0, a.$)(O().icon, P), variant: h, size: f }),
                                    (0, o.jsx)(p.DZ, {
                                        className: (0, a.$)(O().title, O().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: t || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(p.HL, {
                                        className: (0, a.$)(O().text, O().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: r || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(s.$, {
                                        onClick: T,
                                        className: O().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(p.HL, {
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
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 2121, 7339, 6749, 6287, 9256, 4064, 5918, 1107, 5700, 1592, 3472, 146, 6706, 1311, 5201, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479,
                1817, 4305, 4098, 3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 48, 862, 2533, 5622, 2750, 286, 2239, 8353, 7169, 6702, 4475, 5056, 7358,
            ],
            () => e((e.s = 87751)),
        ),
            (_N_E = e.O()));
    },
]);
