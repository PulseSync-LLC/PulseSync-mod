(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        70339: (e, s, a) => {
            'use strict';
            (a.r(s), a.d(s, { default: () => u }));
            var t = a(25839),
                i = a(84059),
                n = a(30871),
                r = a(77995),
                d = a(73017);
            let u = () => {
                let e = (0, i.useSearchParams)().get('campaignId');
                return (
                    e || (0, i.notFound)(),
                    (0, t.jsx)(n.WithAuth, { withRedirectToMainPage: !1, children: (0, t.jsx)(r.SlidesPage, { slidesConsumer: d.z.SPECIAL, campaignId: e }) })
                );
            };
        },
        86712: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 70339));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 9857, 3349, 8198, 2216, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9479, 8234, 6002, 3443, 3269, 4163, 3246, 3482, 6680, 6504, 5329, 6095,
                4533, 4475, 5056, 7358,
            ],
            () => e((e.s = 86712)),
        ),
            (_N_E = e.O()));
    },
]);
