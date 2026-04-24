(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2833],
    {
        9939: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => r.NotFound });
            var r = s(91455);
        },
        19531: (e, t, s) => {
            'use strict';
            s.d(t, { ZH: () => r.WithAuth });
            var r = s(49283);
            s(34705),
                s(6814),
                s(19448),
                s(19404),
                s(77778),
                s(49351).default.default(async () => Promise.all([s.e(5771), s.e(4368)]).then(s.bind(s, 54368)), { ssr: !1 });
        },
        20077: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 22535));
        },
        22535: (e, t, s) => {
            'use strict';
            s.r(t), s.d(t, { default: () => n });
            var r = s(62936),
                a = s(69526),
                i = s(19531),
                u = s(99309),
                d = s(75135);
            let n = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return e || (0, a.notFound)(), (0, r.jsx)(i.ZH, { withRedirectToMainPage: !1, children: (0, r.jsx)(u.C, { slidesConsumer: d.z6.ARTIST, artistId: e }) });
            };
        },
        48320: (e, t, s) => {
            'use strict';
            var r;
            s.d(t, { L: () => r }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(r || (r = {}));
        },
        99309: (e, t, s) => {
            'use strict';
            s.d(t, { C: () => r.SlidesPage }), s(62936), s(9939), s(29792);
            var r = s(49993);
        },
    },
    (e) => {
        e.O(
            0,
            [260, 85, 3196, 403, 226, 1970, 1311, 7764, 6706, 2899, 5419, 3359, 5980, 9550, 2561, 5906, 4690, 4501, 2290, 2687, 5128, 629, 5135, 6242, 1009, 4670, 7358],
            () => e((e.s = 20077)),
        ),
            (_N_E = e.O());
    },
]);
