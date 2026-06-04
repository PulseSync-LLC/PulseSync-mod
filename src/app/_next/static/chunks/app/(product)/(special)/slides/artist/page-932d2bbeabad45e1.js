(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2833],
    {
        2047: (e, t, s) => {
            'use strict';
            var r;
            s.d(t, { L: () => r }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(r || (r = {}));
        },
        54301: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 92792));
        },
        65957: (e, t, s) => {
            'use strict';
            s.d(t, { ZH: () => r.WithAuth });
            var r = s(89523);
            s(19338),
                s(76202),
                s(67299),
                s(7200),
                s(72038),
                s(65493).default.default(async () => Promise.all([s.e(9580), s.e(9476)]).then(s.bind(s, 19476)), { ssr: !1 });
        },
        80719: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => r.NotFound });
            var r = s(12119);
        },
        86546: (e, t, s) => {
            'use strict';
            s.d(t, { C: () => r.SlidesPage }), s(32290), s(80719), s(39904);
            var r = s(82427);
        },
        92792: (e, t, s) => {
            'use strict';
            s.r(t), s.d(t, { default: () => n });
            var r = s(32290),
                a = s(21916),
                i = s(65957),
                u = s(86546),
                d = s(25870);
            let n = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return e || (0, a.notFound)(), (0, r.jsx)(i.ZH, { withRedirectToMainPage: !1, children: (0, r.jsx)(u.C, { slidesConsumer: d.z6.ARTIST, artistId: e }) });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                3445, 1670, 9143, 6351, 9580, 4903, 1311, 7764, 6706, 3267, 9769, 1675, 5283, 764, 9574, 4574, 5428, 6049, 4942, 2127, 6687, 3057, 5870, 9220, 4220, 9562,
                7358,
            ],
            () => e((e.s = 54301)),
        ),
            (_N_E = e.O());
    },
]);
