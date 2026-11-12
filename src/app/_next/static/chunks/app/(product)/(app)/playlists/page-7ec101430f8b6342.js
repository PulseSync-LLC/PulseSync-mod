(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8134],
    {
        3117: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 93849));
        },
        39608: (e) => {
            e.exports = { root: 'PlaylistShimmersPage_root__RsNRj', header: 'PlaylistShimmersPage_header__vm4q3' };
        },
        93849: (e, s, a) => {
            'use strict';
            (a.r(s), a.d(s, { default: () => m }));
            var t = a(88800),
                r = a(53548),
                i = a(58390),
                l = a(77887),
                n = a(88894),
                f = a(93317),
                u = a(39608),
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
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 5887, 2691, 245, 5038, 7065, 3248, 1147, 1191, 7072, 505, 4555, 7933, 9232, 3377, 8655, 3005, 527, 1532, 2465, 6706, 4771, 1311, 5201, 8832,
                6904, 4495, 2058, 3578, 8628, 4827, 8283, 1800, 5151, 7746, 1848, 9380, 7618, 4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088,
                79, 818, 7053, 4322, 7934, 812, 9473, 4683, 2690, 9522, 763, 2670, 7358,
            ],
            () => e((e.s = 3117)),
        ),
            (_N_E = e.O()));
    },
]);
