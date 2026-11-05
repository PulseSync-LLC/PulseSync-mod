(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6890],
    {
        3878: (e, s, t) => {
            'use strict';
            (t.r(s), t.d(s, { default: () => u }));
            var a = t(88800),
                d = t(58390),
                r = t(57328),
                i = t(68647),
                n = t(50355);
            let u = () => {
                let e = (0, d.useSearchParams)().get('podcastId');
                return (
                    e || (0, d.notFound)(),
                    (0, a.jsx)(r.WithAuth, { withRedirectToMainPage: !1, children: (0, a.jsx)(i.SlidesPage, { slidesConsumer: n.z.PODCAST, podcastId: e }) })
                );
            };
        },
        14028: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 3878));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4814, 2766, 7437, 6580, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 9380, 8872, 8515, 4732, 9087, 3979, 1928, 9091, 9124, 4683,
                9386, 7979, 763, 2670, 7358,
            ],
            () => e((e.s = 14028)),
        ),
            (_N_E = e.O()));
    },
]);
