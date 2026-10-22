(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6890],
    {
        66161: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 82752));
        },
        82752: (e, s, t) => {
            'use strict';
            (t.r(s), t.d(s, { default: () => u }));
            var a = t(25839),
                d = t(84059),
                r = t(30871),
                i = t(77995),
                n = t(73017);
            let u = () => {
                let e = (0, d.useSearchParams)().get('podcastId');
                return (
                    e || (0, d.notFound)(),
                    (0, a.jsx)(r.WithAuth, { withRedirectToMainPage: !1, children: (0, a.jsx)(i.SlidesPage, { slidesConsumer: n.z.PODCAST, podcastId: e }) })
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8803, 9857, 3349, 8198, 2216, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 8234, 6002, 3443, 2038, 4163, 3246, 3482, 6680, 2247, 4345,
                6095, 4533, 4475, 5056, 7358,
            ],
            () => e((e.s = 66161)),
        ),
            (_N_E = e.O()));
    },
]);
