(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7312],
    {
        36118: (t, n, e) => {
            'use strict';
            e.d(n, { SomethingWentWrong: () => W });
            var o = e(62936),
                i = e(79950),
                a = e(19718),
                r = e(44020),
                s = e(47480),
                _ = e(26731),
                l = e(5099),
                g = e(85742),
                c = e(20418),
                h = e(42561),
                m = e(85906),
                d = e(52166),
                p = e.n(d);
            let W = (0, a.PA)((t) => {
                let { className: n, withBackwardControl: e = !0 } = t,
                    { formatMessage: a } = (0, s.A)(),
                    d = a({ id: 'error-messages.something-went-wrong' });
                (0, h.CgZ)(d);
                let { sendRefreshEvent: W } = (0, h.cYT)(),
                    x = (0, r.useCallback)(() => {
                        W(), (window.location.href = h.Zyd.main.href);
                    }, [W]),
                    { contentRef: k } = (0, h.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, i.$)(p().root, n),
                    children: [
                        e &&
                            (0, o.jsx)(m.Lh, {
                                withBackwardFallback: '/',
                                className: (0, i.$)(p().navigation, { [p().navigation_desktop]: !k }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, i.$)(p().content, { [p().content_shrink]: !e }),
                            children: [
                                (0, o.jsx)(g.Icon, { className: p().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(c.Heading, { className: (0, i.$)(p().title, p().important), variant: 'h3', size: 'xs', children: d }),
                                (0, o.jsxs)(c.Caption, {
                                    className: (0, i.$)(p().text, p().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(_.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(l.$, {
                                    onClick: x,
                                    className: p().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(c.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(_.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        41739: (t, n, e) => {
            Promise.resolve().then(e.bind(e, 36118));
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
    },
    (t) => {
        t.O(0, [85, 260, 3196, 403, 2670, 1311, 7764, 6706, 2899, 5419, 2561, 5906, 1009, 4670, 7358], () => t((t.s = 41739))), (_N_E = t.O());
    },
]);
