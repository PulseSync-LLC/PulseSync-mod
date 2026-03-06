(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2717],
    {
        7017: (o, t, e) => {
            Promise.resolve().then(e.bind(e, 19741)),
                Promise.resolve().then(e.bind(e, 607)),
                Promise.resolve().then(e.bind(e, 10209)),
                Promise.resolve().then(e.bind(e, 37491)),
                Promise.resolve().then(e.bind(e, 10877)),
                Promise.resolve().then(e.bind(e, 46865)),
                Promise.resolve().then(e.bind(e, 65034));
        },
        46215: (o) => {
            o.exports = {
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
        65034: (o, t, e) => {
            'use strict';
            e.d(t, { NotFound: () => x });
            var n = e(54486),
                s = e(50420),
                i = e(28303),
                a = e(47713),
                r = e(77881),
                d = e(5956),
                l = e(97800),
                _ = e(83252),
                c = e(80585),
                u = e(61910),
                p = e(46215),
                m = e.n(p);
            let x = (0, i.PA)((o) => {
                let { className: t, title: e, description: i, iconVariant: p = 'musicLogo', iconClassName: x, iconSize: N } = o,
                    { contentRef: h } = (0, _.gKY)(),
                    v = (0, _.ZpR)(_.Zyd.main.href);
                (0, _.LZB)();
                let { handleNavigateToMain: F } = (0, _.D5F)(v);
                return (
                    (0, _.NBO)(!0),
                    !(function () {
                        let { location: o } = (0, _.Pjs)();
                        (0, u.useEffect)(
                            () => (
                                o.setNotFound(!0),
                                () => {
                                    o.setNotFound(!1);
                                }
                            ),
                            [o],
                        );
                    })(),
                    (0, n.jsxs)('div', {
                        className: (0, s.$)(m().root, { [m().root_desktop]: !h }, t),
                        children: [
                            (0, n.jsx)(c.Lh, { withBackwardFallback: '/', className: m().navigation, withForwardControl: !1 }),
                            (0, n.jsxs)('div', {
                                className: m().content,
                                children: [
                                    (0, n.jsx)(d.Icon, { className: (0, s.$)(m().icon, x), variant: p, size: N }),
                                    (0, n.jsx)(l.Heading, {
                                        className: (0, s.$)(m().title, m().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: e || (0, n.jsx)(a.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, n.jsx)(l.Caption, {
                                        className: (0, s.$)(m().text, m().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: i || (0, n.jsx)(a.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, n.jsx)(r.$, {
                                        onClick: F,
                                        className: m().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(l.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, n.jsx)(a.A, { id: 'navigation.page-main' }),
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
    (o) => {
        o.O(
            0,
            [
                6041, 5355, 2398, 9834, 1023, 8748, 3384, 3146, 4915, 1426, 1604, 8210, 1621, 6552, 2184, 1469, 1017, 2036, 1776, 1311, 7764, 6706, 7724, 5201, 5148,
                3005, 3916, 5973, 3773, 3252, 585, 6433, 3286, 156, 4826, 1365, 3211, 7858, 5570, 7656, 5284, 9320, 1656, 8387, 3143, 928, 671, 5843, 3290, 7358,
            ],
            () => o((o.s = 7017)),
        ),
            (_N_E = o.O());
    },
]);
