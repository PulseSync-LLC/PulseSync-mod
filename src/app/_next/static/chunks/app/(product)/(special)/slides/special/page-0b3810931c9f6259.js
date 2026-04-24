(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        8255: (e, s, t) => {
            'use strict';
            t.r(s), t.d(s, { default: () => n });
            var a = t(62936),
                r = t(69526),
                i = t(19531),
                u = t(99309),
                d = t(75135);
            let n = () => {
                let e = (0, r.useSearchParams)().get('campaignId');
                return (
                    e || (0, r.notFound)(), (0, a.jsx)(i.ZH, { withRedirectToMainPage: !1, children: (0, a.jsx)(u.C, { slidesConsumer: d.z6.SPECIAL, campaignId: e }) })
                );
            };
        },
        9939: (e, s, t) => {
            'use strict';
            t.d(s, { M: () => a.NotFound });
            var a = t(91455);
        },
        19531: (e, s, t) => {
            'use strict';
            t.d(s, { ZH: () => a.WithAuth });
            var a = t(49283);
            t(34705),
                t(6814),
                t(19448),
                t(19404),
                t(77778),
                t(49351).default.default(async () => Promise.all([t.e(5771), t.e(4368)]).then(t.bind(t, 54368)), { ssr: !1 });
        },
        48320: (e, s, t) => {
            'use strict';
            var a;
            t.d(s, { L: () => a }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(a || (a = {}));
        },
        48429: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 8255));
        },
        99309: (e, s, t) => {
            'use strict';
            t.d(s, { C: () => a.SlidesPage }), t(62936), t(9939), t(29792);
            var a = t(49993);
        },
    },
    (e) => {
        e.O(
            0,
            [260, 85, 3196, 403, 226, 1970, 1311, 7764, 6706, 2899, 5419, 3359, 5980, 9550, 2561, 5906, 4690, 4501, 2290, 2687, 5128, 629, 5135, 6242, 1009, 4670, 7358],
            () => e((e.s = 48429)),
        ),
            (_N_E = e.O());
    },
]);
