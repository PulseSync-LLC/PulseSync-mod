(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        52341: (e, s, i) => {
            'use strict';
            (i.r(s), i.d(s, { default: () => h }));
            var t = i(88800),
                n = i(58390),
                a = i(57328),
                d = i(4300),
                r = i(68647),
                l = i(50355);
            let h = () => {
                let e = (0, n.useSearchParams)().get('campaignId');
                return (
                    e || (0, n.notFound)(),
                    (0, t.jsx)(a.WithAuth, {
                        withRedirectToMainPage: !1,
                        children: (0, t.jsx)(d.WithSlidesWebView, {
                            slidesConsumer: l.z.SPECIAL,
                            entityId: e,
                            children: (0, t.jsx)(r.SlidesPage, { slidesConsumer: l.z.SPECIAL, campaignId: e }),
                        }),
                    })
                );
            };
        },
        61948: (e, s, i) => {
            Promise.resolve().then(i.bind(i, 52341));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 1147, 6580, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 9380, 8872, 7362, 8515, 4732, 9087, 3979, 1928, 9091, 9124,
                4683, 2473, 8490, 763, 2670, 7358,
            ],
            () => e((e.s = 61948)),
        ),
            (_N_E = e.O()));
    },
]);
