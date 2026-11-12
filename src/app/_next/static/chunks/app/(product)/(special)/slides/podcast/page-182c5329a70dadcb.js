(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6890],
    {
        3878: (e, s, t) => {
            'use strict';
            (t.r(s), t.d(s, { default: () => h }));
            var d = t(88800),
                i = t(58390),
                r = t(57328),
                n = t(4300),
                a = t(68647),
                l = t(50355);
            let h = () => {
                let e = (0, i.useSearchParams)().get('podcastId');
                return (
                    e || (0, i.notFound)(),
                    (0, d.jsx)(r.WithAuth, {
                        withRedirectToMainPage: !1,
                        children: (0, d.jsx)(n.WithSlidesWebView, {
                            slidesConsumer: l.z.PODCAST,
                            entityId: e,
                            children: (0, d.jsx)(a.SlidesPage, { slidesConsumer: l.z.PODCAST, podcastId: e }),
                        }),
                    })
                );
            };
        },
        40537: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 3878));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 1147, 6580, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 9380, 8872, 7362, 8515, 4732, 9087, 3979, 1928, 9091, 9124,
                4683, 2473, 8490, 763, 2670, 7358,
            ],
            () => e((e.s = 40537)),
        ),
            (_N_E = e.O()));
    },
]);
