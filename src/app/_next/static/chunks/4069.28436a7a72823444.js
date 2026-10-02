'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4069],
    {
        74069: (e, a, s) => {
            (s.r(a), s.d(a, { config: () => u, getMocksEnabled: () => l }));
            var n = s(46189),
                r = s(89288),
                t = s(15968),
                c = s(52830),
                i = s(57010),
                o = s(21198);
            let l = () => (0, r.G4)('false'),
                u = {
                    ...(0, n.A)((0, o.Z)(), {
                        resources: { musicExternalApi: { allowCustomPrefixUrl: !0, prefixUrl: t.$ } },
                        player: { overembed: !1, externalDomain: 'next.music.yandex.ru' },
                        webHost: 'music.yandex.'.concat(c.B),
                        afisha: { host: 'https://widget.afisha.yandex.ru' },
                        payment: { environment: 'production' },
                        mocks: { enabled: l() },
                    }),
                    csp: (0, i.$)(),
                };
        },
    },
]);
