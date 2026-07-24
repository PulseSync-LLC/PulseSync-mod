(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2833],
    {
        69183: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 92792));
        },
        92792: (e, s, t) => {
            'use strict';
            t.r(s), t.d(s, { default: () => u });
            var r = t(32290),
                a = t(21916),
                i = t(3377),
                d = t(55681),
                n = t(9105);
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
        e.O(
            0,
            [5718, 7709, 7034, 485, 6706, 1311, 8892, 2536, 66, 5835, 2812, 551, 1561, 2551, 6477, 7275, 2586, 8347, 7702, 6874, 861, 782, 3295, 2513, 4220, 9562, 7358],
            () => e((e.s = 69183)),
        ),
            (_N_E = e.O());
    },
]);
