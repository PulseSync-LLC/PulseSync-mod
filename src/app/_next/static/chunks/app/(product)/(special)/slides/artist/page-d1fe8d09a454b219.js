(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2833],
    {
        27750: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 32355));
        },
        32355: (e, s, t) => {
            'use strict';
            (t.r(s), t.d(s, { default: () => u }));
            var r = t(25839),
                a = t(84059),
                i = t(30871),
                d = t(77995),
                n = t(73017);
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
                7055, 9857, 3349, 8198, 2216, 6706, 1311, 8398, 260, 6702, 9004, 7511, 7839, 3595, 1251, 8234, 6002, 3443, 2038, 4163, 3246, 3482, 6680, 2247, 7856, 6095,
                4533, 4475, 5056, 7358,
            ],
            () => e((e.s = 27750)),
        ),
            (_N_E = e.O()));
    },
]);
