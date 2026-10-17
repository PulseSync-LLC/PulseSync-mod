'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6214],
    {
        66214: (t, s, a) => {
            (a.r(s), a.d(s, { config: () => b }));
            var e = a(46189),
                n = a(15968),
                c = a(52830),
                o = a(60586),
                u = a.n(o),
                i = a(57010),
                p = a(78634),
                d = a(71673);
            let { MEDIA: r, CONNECT: l, FRAME: h, WORKER: x, SCRIPT: B } = u(),
                y = (0, d.P)(['*.mdst.yandex.net', 'localhost.music.yandex.'.concat(c.B, ':3000')], p.q, c.B),
                m = [
                    'music.qa.yandex.'.concat(c.B),
                    'widget.afisha.tst.yandex.'.concat(c.B),
                    '*.music.yandex.'.concat(c.B),
                    '*.plus.tst.yandex.'.concat(c.B),
                    'plus.tst.yandex.'.concat(c.B),
                ],
                _ = ['*.music.yandex.'.concat(c.B, ':3000')],
                v = [
                    'wss://localhost.music.yandex.'.concat(c.B, ':3000'),
                    'https://api.events.plus.tst.yandex.net',
                    'https://plus-i18n-token.tst.plus.yandex-team.ru',
                    'https://plus-i18n-token.plus.yandex-team.ru',
                ],
                C = ['*.plus.tst.yandex.'.concat(c.B), 'plus.tst.yandex.'.concat(c.B)],
                P = (0, d.P)(v, p.q, c.B),
                f = (0, d.P)(m, p.q, c.B),
                k = (0, d.P)(_, p.q, c.B),
                E = (0, d.P)(C, p.q, c.B);
            var q = a(21198),
                w = a(49124);
            let U = n.$,
                b = {
                    ...(0, e.A)((0, q.Z)(), {
                        resources: { musicExternalApi: { allowCustomPrefixUrl: !1, prefixUrl: U } },
                        player: { overembed: !1, externalDomain: 'localhost.music.yandex.ru' },
                        passportCredentials: { host: 'https://passport.yandex.'.concat(c.B), origin: 'music_desktop' },
                        webHost: 'music.yandex.'.concat(c.B),
                        afisha: { host: 'https://widget.afisha.yandex.ru' },
                        iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(c.B) },
                        feedbackForm: { host: 'https://music.qa.yandex.'.concat(c.B) },
                        rsc: { useCache: !1 },
                        mocks: {
                            enabled: 'true' === w.env.NEXT_PUBLIC_MOCKS_ENABLED,
                            urlCapturePattern: w.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat(U, '/*'),
                        },
                    }),
                    csp: (() => {
                        let t = (0, i.$)(),
                            s = t[r],
                            a = t[l],
                            e = t[h],
                            n = t[x],
                            c = t[B];
                        return (
                            void 0 !== n && n.push(...k),
                            void 0 !== s && s.push(...y),
                            void 0 !== a && a.push(...P),
                            void 0 !== e && e.push(...f),
                            void 0 !== c && c.push(...E),
                            t
                        );
                    })(),
                };
        },
    },
]);
