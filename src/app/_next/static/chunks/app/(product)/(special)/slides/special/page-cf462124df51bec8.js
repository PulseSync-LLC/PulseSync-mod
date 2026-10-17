(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        17860: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 70339));
        },
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
    },
    (e) => {
        (e.O(
            0,
            [
                7055, 9857, 3349, 8198, 2216, 6706, 1311, 8398, 260, 6702, 9004, 7511, 7839, 3595, 1251, 8234, 6002, 3443, 2038, 4163, 3246, 3482, 6680, 2247, 7856, 6095,
                4533, 4475, 5056, 7358,
            ],
            () => e((e.s = 17860)),
        ),
            (_N_E = e.O()));
    },
]);
