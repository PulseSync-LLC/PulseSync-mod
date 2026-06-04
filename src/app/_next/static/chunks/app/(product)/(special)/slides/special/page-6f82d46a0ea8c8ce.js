(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        2047: (e, s, t) => {
            'use strict';
            var a;
            t.d(s, { L: () => a }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(a || (a = {}));
        },
        18123: (e, s, t) => {
            'use strict';
            t.r(s), t.d(s, { default: () => n });
            var a = t(32290),
                r = t(21916),
                i = t(65957),
                u = t(86546),
                d = t(25870);
            let n = () => {
                let e = (0, r.useSearchParams)().get('campaignId');
                return (
                    e || (0, r.notFound)(), (0, a.jsx)(i.ZH, { withRedirectToMainPage: !1, children: (0, a.jsx)(u.C, { slidesConsumer: d.z6.SPECIAL, campaignId: e }) })
                );
            };
        },
        65957: (e, s, t) => {
            'use strict';
            t.d(s, { ZH: () => a.WithAuth });
            var a = t(89523);
            t(19338),
                t(76202),
                t(67299),
                t(7200),
                t(72038),
                t(65493).default.default(async () => Promise.all([t.e(9580), t.e(9476)]).then(t.bind(t, 19476)), { ssr: !1 });
        },
        80317: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 18123));
        },
        80719: (e, s, t) => {
            'use strict';
            t.d(s, { M: () => a.NotFound });
            var a = t(12119);
        },
        86546: (e, s, t) => {
            'use strict';
            t.d(s, { C: () => a.SlidesPage }), t(32290), t(80719), t(39904);
            var a = t(82427);
        },
    },
    (e) => {
        e.O(
            0,
            [
                3445, 1670, 9143, 6351, 9580, 4903, 1311, 7764, 6706, 3267, 9769, 1675, 5283, 764, 9574, 4574, 5428, 6049, 4942, 2127, 6687, 3057, 5870, 9220, 4220, 9562,
                7358,
            ],
            () => e((e.s = 80317)),
        ),
            (_N_E = e.O());
    },
]);
