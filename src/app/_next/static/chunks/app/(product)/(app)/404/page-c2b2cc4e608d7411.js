(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [677, 3414, 9573],
    {
        46215: (t) => {
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
        47317: (t, o, n) => {
            Promise.resolve().then(n.bind(n, 65034));
        },
        65034: (t, o, n) => {
            'use strict';
            n.d(o, { NotFound: () => N });
            var e = n(54486),
                s = n(50420),
                a = n(28303),
                i = n(47713),
                r = n(77881),
                _ = n(5956),
                d = n(97800),
                l = n(83252),
                c = n(80585),
                u = n(61910),
                p = n(46215),
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
        t.O(0, [6041, 9834, 5355, 1023, 1776, 1311, 7764, 6706, 5148, 3005, 3252, 585, 5843, 3290, 7358], () => t((t.s = 47317))), (_N_E = t.O());
    },
]);
