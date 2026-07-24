(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6890],
    {
        48681: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 88056));
        },
        88056: (e, s, t) => {
            'use strict';
            t.r(s), t.d(s, { default: () => u });
            var a = t(32290),
                d = t(21916),
                r = t(3377),
                i = t(55681),
                n = t(9105);
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
        e.O(
            0,
            [5718, 7709, 7034, 485, 6706, 1311, 8892, 2536, 66, 5835, 2812, 551, 1561, 2551, 6477, 7275, 2586, 8347, 7702, 6874, 861, 782, 3295, 2513, 4220, 9562, 7358],
            () => e((e.s = 48681)),
        ),
            (_N_E = e.O());
    },
]);
