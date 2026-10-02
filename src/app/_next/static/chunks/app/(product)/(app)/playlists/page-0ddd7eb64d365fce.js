(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8134],
    {
        305: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 46474));
        },
        46474: (e, s, a) => {
            'use strict';
            (a.r(s), a.d(s, { default: () => m }));
            var t = a(25839),
                r = a(84059),
                i = a(74631),
                l = a(18382),
                n = a(10944),
                f = a(10603),
                u = a(73698),
                h = a.n(u);
            let c = () => (0, t.jsxs)('div', { className: h().root, children: [(0, t.jsx)(f.Y, { className: h().header }), (0, t.jsx)(n.c, { isActive: !0 })] }),
                d = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
                o = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
                _ = /^[a-z]{2}\.$/i,
                m = () => {
                    let e = (0, r.useSearchParams)().get('playlistUuid');
                    return (
                        (e &&
                            (function (e) {
                                if (!e || (36 !== e.length && 39 !== e.length)) return !1;
                                if (39 === e.length) {
                                    let s = e.substring(0, 3),
                                        a = e.substring(3);
                                    return _.test(s) && d.test(a);
                                }
                                return o.test(e);
                            })(e)) ||
                            (0, r.notFound)(),
                        (0, t.jsxs)(i.Suspense, { fallback: (0, t.jsx)(c, {}), children: [(0, t.jsx)(l.S, { playlistUuid: e }), ';'] })
                    );
                };
        },
        73698: (e) => {
            e.exports = { root: 'PlaylistShimmersPage_root__RsNRj', header: 'PlaylistShimmersPage_header__vm4q3' };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7349, 2961, 6749, 7339, 6287, 3472, 2121, 4585, 1107, 3397, 2048, 1317, 1583, 8451, 8113, 2741, 6706, 1311, 5201, 9212, 260, 4512, 9004, 4985,
                7839, 7957, 9761, 9479, 1817, 3257, 4305, 8234, 4268, 4761, 3269, 4163, 3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 2533, 8222,
                4932, 9973, 6095, 7198, 3545, 9318, 4475, 5056, 7358,
            ],
            () => e((e.s = 305)),
        ),
            (_N_E = e.O()));
    },
]);
