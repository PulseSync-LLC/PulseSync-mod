'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2978],
    {
        16399: (t, e, a) => {
            a.d(e, { Y: () => n });
            var s = a(42668);
            let n = `https://api.music.qa.yandex.${s.B}`;
        },
        82978: (t, e, a) => {
            (a.r(e), a.d(e, { config: () => C, getMocksEnabled: () => k }));
            var s = a(14231),
                n = a(16399),
                c = a(42668),
                u = a(7536),
                d = a.n(u),
                o = a(74168),
                r = a(31884),
                i = a(17451);
            let { MEDIA: p, FRAME: l, CONNECT: x, SCRIPT: h, WORKER: y } = d(),
                m = (0, i.P)(
                    [
                        'music.qa.yandex.'.concat(c.B),
                        'widget.afisha.tst.yandex.'.concat(c.B),
                        '*.music.yandex.'.concat(c.B),
                        '*.plus.tst.yandex.'.concat(c.B),
                        'plus.tst.yandex.'.concat(c.B),
                    ],
                    r.q,
                    c.B,
                ),
                B = [
                    'wss://localhost.music.yandex.'.concat(c.B, ':3000'),
                    'https://api.events.plus.tst.yandex.net',
                    'https://plus-i18n-token.tst.plus.yandex-team.ru',
                    'https://plus-i18n-token.plus.yandex-team.ru',
                ],
                v = ['*.plus.tst.yandex.'.concat(c.B), 'plus.tst.yandex.'.concat(c.B)],
                _ = (0, i.P)(B, r.q, c.B),
                f = (0, i.P)(v, r.q, c.B);
            var q = a(92728),
                E = a(49124);
            let k = () => {
                    var t;
                    return (null != (t = E.env.NEXT_PUBLIC_MOCKS_ENABLED) ? t : 'true') === 'true';
                },
                C = {
                    ...(0, s.A)((0, q.Z)(), {
                        resources: { musicExternalApi: { allowCustomPrefixUrl: !0, prefixUrl: n.Y } },
                        player: { overembed: !1, externalDomain: 'next.qa.music.yandex.ru' },
                        webHost: 'music.qa.yandex.'.concat(c.B),
                        afisha: { host: 'https://widget.afisha.tst.yandex.ru' },
                        iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(c.B) },
                        feedbackForm: { host: 'https://music.qa.yandex.'.concat(c.B) },
                        mocks: { enabled: k(), urlCapturePattern: E.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat(n.Y, '/*') },
                    }),
                    csp: (() => {
                        let t = (0, o.$)(),
                            e = t[p],
                            a = t[l],
                            s = t[x],
                            n = t[h],
                            c = t[y];
                        return (
                            void 0 !== e && e.push('*.mdst.yandex.net'),
                            void 0 !== a && a.push(...m),
                            void 0 !== s && s.push(..._),
                            void 0 !== n && n.push(...f),
                            void 0 !== c && c.push('music.qa.yandex.ru'),
                            t
                        );
                    })(),
                };
        },
    },
]);
