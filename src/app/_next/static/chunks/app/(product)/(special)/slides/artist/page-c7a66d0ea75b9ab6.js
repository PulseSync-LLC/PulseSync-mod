(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2833],
    {
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
        50722: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 32355));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 9857, 3349, 8198, 2216, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9479, 8234, 6002, 3443, 3269, 4163, 3246, 3482, 6680, 6504, 5329, 6095,
                4533, 4475, 5056, 7358,
            ],
            () => e((e.s = 50722)),
        ),
            (_N_E = e.O()));
    },
]);
