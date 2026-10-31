'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3552],
    {
        13552: (a, s, t) => {
            (t.r(s), t.d(s, { config: () => f }));
            var e = t(14231),
                c = t(16399),
                n = t(42668),
                i = t(7536),
                o = t.n(i),
                r = t(74168),
                d = t(31884),
                u = t(17451);
            let { MEDIA: l, CONNECT: p, FRAME: h } = o(),
                m = (0, u.P)(['*.mdst.yandex.net', 'localhost.music.yandex.'.concat(n.B, ':3000')], d.q, n.B),
                x = (0, u.P)(
                    [
                        'wss://localhost.music.yandex.'.concat(n.B, ':3000'),
                        '*.music.yandex-team.'.concat(n.B),
                        'http://music-landing-stress-music-landing-79.sas.yp-c.yandex.net:8080',
                    ],
                    d.q,
                    n.B,
                ),
                y = (0, u.P)(['music.qa.yandex.'.concat(n.B)], d.q, n.B);
            var B = t(92728);
            let f = {
                ...(0, e.A)((0, B.Z)(), {
                    resources: { musicExternalApi: { allowCustomPrefixUrl: !0, prefixUrl: c.Y } },
                    player: { overembed: !1, externalDomain: 'localhost.music.yandex.ru' },
                    passportCredentials: { host: 'https://passport.yandex.'.concat(n.B), origin: 'music' },
                    webHost: 'music.qa.yandex.'.concat(n.B),
                    afisha: { host: 'https://widget.afisha.yandex.ru' },
                    iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(n.B) },
                    feedbackForm: { host: 'https://music.qa.yandex.'.concat(n.B) },
                }),
                csp: (() => {
                    let a = (0, r.$)(),
                        s = a[l],
                        t = a[p],
                        e = a[h];
                    return (void 0 !== s && s.push(...m), void 0 !== t && t.push(...x), void 0 !== e && e.push(...y), a);
                })(),
            };
        },
        16399: (a, s, t) => {
            t.d(s, { Y: () => c });
            var e = t(42668);
            let c = `https://api.music.qa.yandex.${e.B}`;
        },
    },
]);
