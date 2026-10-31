(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        51455: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 52341));
        },
        52341: (e, s, a) => {
            'use strict';
            (a.r(s), a.d(s, { default: () => u }));
            var t = a(88800),
                i = a(58390),
                n = a(57328),
                r = a(10712),
                d = a(50355);
            let u = () => {
                let e = (0, i.useSearchParams)().get('campaignId');
                return (
                    e || (0, i.notFound)(),
                    (0, t.jsx)(n.WithAuth, { withRedirectToMainPage: !1, children: (0, t.jsx)(r.SlidesPage, { slidesConsumer: d.z.SPECIAL, campaignId: e }) })
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 8034, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 9380, 8872, 120, 4732, 1195, 1598, 1928, 7627, 9124, 7967, 4683, 5487,
                763, 2670, 7358,
            ],
            () => e((e.s = 51455)),
        ),
            (_N_E = e.O()));
    },
]);
