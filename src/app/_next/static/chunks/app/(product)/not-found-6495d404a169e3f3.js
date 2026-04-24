(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [677, 3414, 9573],
    {
        49576: (t, o, n) => {
            Promise.resolve().then(n.bind(n, 91455));
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
        91455: (t, o, n) => {
            'use strict';
            n.d(o, { NotFound: () => N });
            var e = n(62936),
                s = n(79950),
                a = n(19718),
                i = n(26731),
                r = n(5099),
                _ = n(85742),
                d = n(20418),
                l = n(42561),
                c = n(85906),
                u = n(44020),
                p = n(88933),
                x = n.n(p);
            let N = (0, a.PA)((t) => {
                let { className: o, title: n, description: a, iconVariant: p = 'musicLogo', iconClassName: N, iconSize: m } = t,
                    { contentRef: h } = (0, l.gKY)(),
                    F = (0, l.ZpR)(l.Zyd.main.href);
                (0, l.LZB)();
                let { handleNavigateToMain: g } = (0, l.D5F)(F);
                return (
                    (0, l.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, l.Pjs)();
                        (0, u.useEffect)(
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
                        className: (0, s.$)(x().root, { [x().root_desktop]: !h }, o),
                        children: [
                            (0, e.jsx)(c.Lh, { withBackwardFallback: '/', className: x().navigation, withForwardControl: !1 }),
                            (0, e.jsxs)('div', {
                                className: x().content,
                                children: [
                                    (0, e.jsx)(_.Icon, { className: (0, s.$)(x().icon, N), variant: p, size: m }),
                                    (0, e.jsx)(d.Heading, {
                                        className: (0, s.$)(x().title, x().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, e.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, e.jsx)(d.Caption, {
                                        className: (0, s.$)(x().text, x().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: a || (0, e.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, e.jsx)(r.$, {
                                        onClick: g,
                                        className: x().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, e.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, e.jsx)(i.A, { id: 'navigation.page-main' }),
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
        t.O(0, [85, 260, 3196, 403, 1970, 1311, 7764, 6706, 2899, 5419, 2561, 5906, 1009, 4670, 7358], () => t((t.s = 49576))), (_N_E = t.O());
    },
]);
