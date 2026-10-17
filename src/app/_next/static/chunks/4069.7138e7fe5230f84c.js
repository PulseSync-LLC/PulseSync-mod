'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4069],
    {
        74069: (e, a, n) => {
            (n.r(a), n.d(a, { config: () => p, getMocksEnabled: () => u }));
            var s = n(46189),
                r = n(89288),
                t = n(15968),
                c = n(52830),
                i = n(57010),
                o = n(21198),
                l = n(49124);
            let u = () => (0, r.G4)(l.env.NEXT_PUBLIC_FORCE_ENABLE_DEV_PANEL),
                p = {
                    ...(0, s.A)((0, o.Z)(), {
                        resources: { musicExternalApi: { allowCustomPrefixUrl: !0, prefixUrl: t.$ } },
                        player: { overembed: !1, externalDomain: 'next.music.yandex.ru' },
                        webHost: 'music.yandex.'.concat(c.B),
                        afisha: { host: 'https://widget.afisha.yandex.ru' },
                        payment: { environment: 'production' },
                        mocks: { enabled: u() },
                    }),
                    csp: (0, i.$)(),
                };
        },
    },
]);
