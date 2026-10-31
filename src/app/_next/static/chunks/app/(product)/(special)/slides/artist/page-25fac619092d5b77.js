(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2833],
    {
        67657: (e, s, t) => {
            'use strict';
            (t.r(s), t.d(s, { default: () => u }));
            var r = t(88800),
                a = t(58390),
                i = t(57328),
                d = t(10712),
                n = t(50355);
            let u = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return (
                    e || (0, a.notFound)(),
                    (0, r.jsx)(i.WithAuth, { withRedirectToMainPage: !1, children: (0, r.jsx)(d.SlidesPage, { slidesConsumer: n.z.ARTIST, artistId: e }) })
                );
            };
        },
        96731: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 67657));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 8034, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 9380, 8872, 120, 4732, 1195, 1598, 1928, 7627, 9124, 7967, 4683, 5487,
                763, 2670, 7358,
            ],
            () => e((e.s = 96731)),
        ),
            (_N_E = e.O()));
    },
]);
