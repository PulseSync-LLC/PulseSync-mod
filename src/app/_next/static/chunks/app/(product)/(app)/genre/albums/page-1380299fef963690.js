(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3763],
    {
        9939: (t, n, o) => {
            'use strict';
            o.d(n, { M: () => e.NotFound });
            var e = o(91455);
        },
        36118: (t, n, o) => {
            'use strict';
            o.d(n, { SomethingWentWrong: () => p });
            var e = o(62936),
                a = o(79950),
                i = o(19718),
                s = o(44020),
                r = o(47480),
                _ = o(26731),
                l = o(5099),
                c = o(85742),
                d = o(20418),
                g = o(42561),
                m = o(85906),
                h = o(52166),
                x = o.n(h);
            let p = (0, i.PA)((t) => {
                let { className: n, withBackwardControl: o = !0 } = t,
                    { formatMessage: i } = (0, r.A)(),
                    h = i({ id: 'error-messages.something-went-wrong' });
                (0, g.CgZ)(h);
                let { sendRefreshEvent: p } = (0, g.cYT)(),
                    u = (0, s.useCallback)(() => {
                        p(), (window.location.href = g.Zyd.main.href);
                    }, [p]),
                    { contentRef: N } = (0, g.gKY)();
                return (0, e.jsxs)('div', {
                    className: (0, a.$)(x().root, n),
                    children: [
                        o &&
                            (0, e.jsx)(m.Lh, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(x().navigation, { [x().navigation_desktop]: !N }),
                                withForwardControl: !1,
                            }),
                        (0, e.jsxs)('div', {
                            className: (0, a.$)(x().content, { [x().content_shrink]: !o }),
                            children: [
                                (0, e.jsx)(c.Icon, { className: x().icon, variant: 'attention', size: 'xxl' }),
                                (0, e.jsx)(d.Heading, { className: (0, a.$)(x().title, x().important), variant: 'h3', size: 'xs', children: h }),
                                (0, e.jsxs)(d.Caption, {
                                    className: (0, a.$)(x().text, x().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, e.jsx)(_.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, e.jsx)(l.$, {
                                    onClick: u,
                                    className: x().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, e.jsxs)(d.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, e.jsx)(_.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        48337: (t, n, o) => {
            'use strict';
            o.r(n), o.d(n, { default: () => s });
            var e = o(62936),
                a = o(69526),
                i = o(1039);
            let s = () => {
                let t = (0, a.useSearchParams)().get('metatagId');
                return t || (0, a.notFound)(), (0, e.jsx)(i.Z3, { metatagId: t });
            };
        },
        52166: (t) => {
            t.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        65438: (t, n, o) => {
            'use strict';
            o.d(n, { w: () => e.SomethingWentWrong });
            var e = o(36118);
        },
        68427: (t, n, o) => {
            Promise.resolve().then(o.bind(o, 48337));
        },
        88933: (t) => {
            t.exports = {
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
        91455: (t, n, o) => {
            'use strict';
            o.d(n, { NotFound: () => x });
            var e = o(62936),
                a = o(79950),
                i = o(19718),
                s = o(26731),
                r = o(5099),
                _ = o(85742),
                l = o(20418),
                c = o(42561),
                d = o(85906),
                g = o(44020),
                m = o(88933),
                h = o.n(m);
            let x = (0, i.PA)((t) => {
                let { className: n, title: o, description: i, iconVariant: m = 'musicLogo', iconClassName: x, iconSize: p } = t,
                    { contentRef: u } = (0, c.gKY)(),
                    N = (0, c.ZpR)(c.Zyd.main.href);
                (0, c.LZB)();
                let { handleNavigateToMain: v } = (0, c.D5F)(N);
                return (
                    (0, c.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, c.Pjs)();
                        (0, g.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, e.jsxs)('div', {
                        className: (0, a.$)(h().root, { [h().root_desktop]: !u }, n),
                        children: [
                            (0, e.jsx)(d.Lh, { withBackwardFallback: '/', className: h().navigation, withForwardControl: !1 }),
                            (0, e.jsxs)('div', {
                                className: h().content,
                                children: [
                                    (0, e.jsx)(_.Icon, { className: (0, a.$)(h().icon, x), variant: m, size: p }),
                                    (0, e.jsx)(l.Heading, {
                                        className: (0, a.$)(h().title, h().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: o || (0, e.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, e.jsx)(l.Caption, {
                                        className: (0, a.$)(h().text, h().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: i || (0, e.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, e.jsx)(r.$, {
                                        onClick: v,
                                        className: h().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, e.jsx)(l.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, e.jsx)(s.A, { id: 'navigation.page-main' }),
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
    (t) => {
        t.O(
            0,
            [85, 260, 3196, 403, 2537, 3789, 2670, 1970, 1311, 7764, 6706, 2899, 5419, 5064, 2561, 5906, 4690, 4501, 9154, 914, 3197, 3912, 5932, 1039, 1009, 4670, 7358],
            () => t((t.s = 68427)),
        ),
            (_N_E = t.O());
    },
]);
