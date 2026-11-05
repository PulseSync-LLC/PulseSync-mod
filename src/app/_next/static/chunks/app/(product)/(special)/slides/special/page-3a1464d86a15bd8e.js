(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        52341: (e, s, a) => {
            'use strict';
            (a.r(s), a.d(s, { default: () => u }));
            var t = a(88800),
                i = a(58390),
                n = a(57328),
                r = a(68647),
                d = a(50355);
            let u = () => {
                let e = (0, i.useSearchParams)().get('campaignId');
                return (
                    e || (0, i.notFound)(),
                    (0, t.jsx)(n.WithAuth, { withRedirectToMainPage: !1, children: (0, t.jsx)(r.SlidesPage, { slidesConsumer: d.z.SPECIAL, campaignId: e }) })
                );
            };
        },
        71533: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 52341));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4814, 2766, 7437, 6580, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 9380, 8872, 8515, 4732, 9087, 3979, 1928, 9091, 9124, 4683,
                9386, 7979, 763, 2670, 7358,
            ],
            () => e((e.s = 71533)),
        ),
            (_N_E = e.O()));
    },
]);
