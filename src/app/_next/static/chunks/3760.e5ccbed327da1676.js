'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3760],
    {
        33760: (e, a, s) => {
            (s.r(a), s.d(a, { config: () => u, getMocksEnabled: () => l }));
            var n = s(14231),
                r = s(35412),
                t = s(94846),
                c = s(42668),
                i = s(74168),
                o = s(92728);
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
