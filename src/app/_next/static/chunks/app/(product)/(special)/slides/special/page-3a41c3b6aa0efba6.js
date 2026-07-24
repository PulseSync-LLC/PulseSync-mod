(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        18123: (e, s, a) => {
            'use strict';
            a.r(s), a.d(s, { default: () => u });
            var t = a(32290),
                i = a(21916),
                n = a(3377),
                r = a(55681),
                d = a(9105);
            let u = () => {
                let e = (0, i.useSearchParams)().get('campaignId');
                return (
                    e || (0, i.notFound)(),
                    (0, t.jsx)(n.WithAuth, { withRedirectToMainPage: !1, children: (0, t.jsx)(r.SlidesPage, { slidesConsumer: d.z.SPECIAL, campaignId: e }) })
                );
            };
        },
        74651: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 18123));
        },
    },
    (e) => {
        e.O(
            0,
            [5718, 7709, 7034, 485, 6706, 1311, 8892, 2536, 66, 5835, 2812, 551, 1561, 2551, 6477, 7275, 2586, 8347, 7702, 6874, 861, 782, 3295, 2513, 4220, 9562, 7358],
            () => e((e.s = 74651)),
        ),
            (_N_E = e.O());
    },
]);
