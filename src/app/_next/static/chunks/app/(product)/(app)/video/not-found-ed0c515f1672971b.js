(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [677, 3414, 9573],
    {
        7960: (t, o, n) => {
            Promise.resolve().then(n.bind(n, 12119));
        },
        12119: (t, o, n) => {
            'use strict';
            n.d(o, { NotFound: () => N });
            var e = n(32290),
                s = n(63618),
                a = n(96103),
                i = n(39407),
                r = n(63423),
                _ = n(82586),
                d = n(71926),
                l = n(49574),
                c = n(44574),
                u = n(55178),
                p = n(55365),
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
        55365: (t) => {
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
    },
    (t) => {
        t.O(0, [1670, 3445, 1311, 7764, 6706, 3267, 9769, 9574, 4574, 4220, 9562, 7358], () => t((t.s = 7960))), (_N_E = t.O());
    },
]);
