'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7216],
    {
        7216: (t, e, a) => {
            (a.r(e), a.d(e, { config: () => q, getMocksEnabled: () => k }));
            var s = a(46189),
                n = a(44101),
                c = a(52830),
                u = a(60586),
                o = a.n(u),
                r = a(57010),
                d = a(78634),
                i = a(71673);
            let { MEDIA: l, FRAME: p, CONNECT: x, SCRIPT: h } = o(),
                y = (0, i.P)(
                    [
                        'music.qa.yandex.'.concat(c.B),
                        'widget.afisha.tst.yandex.'.concat(c.B),
                        '*.music.yandex.'.concat(c.B),
                        '*.plus.tst.yandex.'.concat(c.B),
                        'plus.tst.yandex.'.concat(c.B),
                    ],
                    d.q,
                    c.B,
                ),
                B = [
                    'wss://localhost.music.yandex.'.concat(c.B, ':3000'),
                    'https://api.events.plus.tst.yandex.net',
                    'https://plus-i18n-token.tst.plus.yandex-team.ru',
                    'https://plus-i18n-token.plus.yandex-team.ru',
                ],
                m = ['*.plus.tst.yandex.'.concat(c.B), 'plus.tst.yandex.'.concat(c.B)],
                v = (0, i.P)(B, d.q, c.B),
                _ = (0, i.P)(m, d.q, c.B);
            var f = a(21198),
                E = a(49124);
            let k = () => {
                    var t;
                    return (null != (t = E.env.NEXT_PUBLIC_MOCKS_ENABLED) ? t : 'true') === 'true';
                },
                q = {
                    ...(0, s.A)((0, f.Z)(), {
                        resources: { musicExternalApi: { allowCustomPrefixUrl: !0, prefixUrl: n.Y } },
                        player: { overembed: !1, externalDomain: 'next.qa.music.yandex.ru' },
                        webHost: 'music.qa.yandex.'.concat(c.B),
                        afisha: { host: 'https://widget.afisha.tst.yandex.ru' },
                        iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(c.B) },
                        feedbackForm: { host: 'https://music.qa.yandex.'.concat(c.B) },
                        mocks: { enabled: k(), urlCapturePattern: E.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat(n.Y, '/*') },
                    }),
                    csp: (() => {
                        let t = (0, r.$)(),
                            e = t[l],
                            a = t[p],
                            s = t[x],
                            n = t[h];
                        return (void 0 !== e && e.push('*.mdst.yandex.net'), void 0 !== a && a.push(...y), void 0 !== s && s.push(...v), void 0 !== n && n.push(..._), t);
                    })(),
                };
        },
        44101: (t, e, a) => {
            a.d(e, { Y: () => n });
            var s = a(52830);
            let n = `https://api.music.qa.yandex.${s.B}`;
        },
    },
]);
