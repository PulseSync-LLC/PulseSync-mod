(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8134],
    {
        46474: (e, s, a) => {
            'use strict';
            (a.r(s), a.d(s, { default: () => m }));
            var t = a(25839),
                r = a(74631),
                i = a(84059),
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
                    let e = (0, i.useSearchParams)().get('playlistUuid');
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
                            (0, i.notFound)(),
                        (0, t.jsxs)(r.Suspense, { fallback: (0, t.jsx)(c, {}), children: [(0, t.jsx)(l.S, { playlistUuid: e }), ';'] })
                    );
                };
        },
        73698: (e) => {
            e.exports = { root: 'PlaylistShimmersPage_root__RsNRj', header: 'PlaylistShimmersPage_header__vm4q3' };
        },
        98213: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 46474));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8803, 3112, 2961, 6749, 6392, 6287, 3472, 2121, 7170, 9122, 3397, 2048, 1317, 1583, 8451, 5782, 2741, 6706, 4771, 1311, 5201, 8398, 260, 6702, 9004,
                7511, 9414, 3595, 1251, 1817, 6215, 3257, 8234, 9220, 4268, 2038, 4163, 3246, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 8372, 5898, 1808, 8222,
                8892, 4932, 3268, 6095, 7198, 7793, 338, 3424, 4475, 5056, 7358,
            ],
            () => e((e.s = 98213)),
        ),
            (_N_E = e.O()));
    },
]);
