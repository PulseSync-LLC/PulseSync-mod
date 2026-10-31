(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8134],
    {
        37732: (e, s, a) => {
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
                8752, 7435, 3637, 4596, 8380, 5108, 127, 1191, 1931, 7933, 7617, 3005, 1532, 2465, 5083, 7759, 6706, 4771, 1311, 5201, 8832, 6904, 5977, 2058, 2881, 8628,
                9693, 6326, 8283, 5151, 1714, 9380, 7618, 3837, 4732, 1195, 1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 818, 7053, 9425, 4322,
                3547, 4683, 2690, 9079, 8576, 2539, 763, 2670, 7358,
            ],
            () => e((e.s = 37732)),
        ),
            (_N_E = e.O()));
    },
]);
