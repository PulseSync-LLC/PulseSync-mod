(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4347],
    {
        17013: (e, r, t) => {
            Promise.resolve().then(t.bind(t, 51751));
        },
        21916: (e, r, t) => {
            'use strict';
            var n = t(23948);
            t.o(n, 'ServerInsertedHTMLContext') &&
                t.d(r, {
                    ServerInsertedHTMLContext: function () {
                        return n.ServerInsertedHTMLContext;
                    },
                }),
                t.o(n, 'notFound') &&
                    t.d(r, {
                        notFound: function () {
                            return n.notFound;
                        },
                    }),
                t.o(n, 'redirect') &&
                    t.d(r, {
                        redirect: function () {
                            return n.redirect;
                        },
                    }),
                t.o(n, 'usePathname') &&
                    t.d(r, {
                        usePathname: function () {
                            return n.usePathname;
                        },
                    }),
                t.o(n, 'useRouter') &&
                    t.d(r, {
                        useRouter: function () {
                            return n.useRouter;
                        },
                    }),
                t.o(n, 'useSearchParams') &&
                    t.d(r, {
                        useSearchParams: function () {
                            return n.useSearchParams;
                        },
                    }),
                t.o(n, 'useServerInsertedHTML') &&
                    t.d(r, {
                        useServerInsertedHTML: function () {
                            return n.useServerInsertedHTML;
                        },
                    });
        },
        51751: (e, r, t) => {
            'use strict';
            t.r(r), t.d(r, { default: () => a });
            var n = t(32290),
                u = t(21916),
                s = t(36477);
            let o = (e) => {
                    let { categoryId: r } = e,
                        { href: t } = (0, s.u)('/landing/:skeleton', { params: { skeleton: 'category_kids_'.concat(r) } });
                    (0, u.redirect)(t);
                },
                a = () => {
                    let e = (0, u.useSearchParams)().get('categoryId');
                    return e || (0, u.notFound)(), (0, n.jsx)(o, { categoryId: e });
                };
        },
    },
    (e) => {
        e.O(0, [8892, 6477, 4220, 9562, 7358], () => e((e.s = 17013))), (_N_E = e.O());
    },
]);
