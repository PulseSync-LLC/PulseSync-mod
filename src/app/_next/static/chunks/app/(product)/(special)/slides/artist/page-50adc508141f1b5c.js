(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2833],
    {
        58253: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 67657));
        },
        67657: (e, s, t) => {
            'use strict';
            (t.r(s), t.d(s, { default: () => u }));
            var r = t(88800),
                a = t(58390),
                i = t(57328),
                d = t(68647),
                n = t(50355);
            let u = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return (
                    e || (0, a.notFound)(),
                    (0, r.jsx)(i.WithAuth, { withRedirectToMainPage: !1, children: (0, r.jsx)(d.SlidesPage, { slidesConsumer: n.z.ARTIST, artistId: e }) })
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4814, 2766, 7437, 6580, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 9380, 8872, 8515, 4732, 9087, 3979, 1928, 9091, 9124, 4683,
                9386, 7979, 763, 2670, 7358,
            ],
            () => e((e.s = 58253)),
        ),
            (_N_E = e.O()));
    },
]);
