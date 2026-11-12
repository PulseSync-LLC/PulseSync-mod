(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2833],
    {
        67657: (e, s, t) => {
            'use strict';
            (t.r(s), t.d(s, { default: () => h }));
            var i = t(88800),
                r = t(58390),
                d = t(57328),
                n = t(4300),
                a = t(68647),
                l = t(50355);
            let h = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return (
                    e || (0, r.notFound)(),
                    (0, i.jsx)(d.WithAuth, {
                        withRedirectToMainPage: !1,
                        children: (0, i.jsx)(n.WithSlidesWebView, {
                            slidesConsumer: l.z.ARTIST,
                            entityId: e,
                            children: (0, i.jsx)(a.SlidesPage, { slidesConsumer: l.z.ARTIST, artistId: e }),
                        }),
                    })
                );
            };
        },
        69342: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 67657));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 1147, 6580, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 9380, 8872, 7362, 8515, 4732, 9087, 3979, 1928, 9091, 9124,
                4683, 2473, 8490, 763, 2670, 7358,
            ],
            () => e((e.s = 69342)),
        ),
            (_N_E = e.O()));
    },
]);
