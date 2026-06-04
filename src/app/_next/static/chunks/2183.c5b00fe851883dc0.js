'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2183],
    {
        24770: (e, t, r) => {
            r.d(t, { I: () => a, M: () => i, a: () => l, b: () => s, c: () => n, d: () => o, g: () => u });
            let n = 'i18n-geo-widget-device-id',
                o = 'i18n-geo-widget-replacements',
                a = 'i18n-enabled-replacement',
                l = 'i18n-jwt-token',
                s = 'i18n-geo-widget-replacement-cleared',
                i = 3,
                c = {
                    yandex: {
                        testing: 'https://plus-i18n-token.tst.plus.yandex-team.ru',
                        prestable: 'https://plus-i18n-token.prestable.plus.yandex-team.ru',
                        production: 'https://plus-i18n-token.plus.yandex-team.ru',
                    },
                    yango: {
                        testing: 'https://plus-i18n-token.plus.yango.com',
                        prestable: 'https://plus-i18n-token.plus.yango.com',
                        production: 'https://plus-i18n-token.plus.yango.com',
                    },
                },
                u = (e, t) => c[t][e];
        },
        58784: (e, t, r) => {
            r.d(t, { j: () => a, u: () => l });
            var n = r(55178);
            class o extends Error {}
            function a(e, t) {
                let r;
                if ('string' != typeof e) throw new o('Invalid token specified: must be a string');
                t || (t = {});
                let n = +(!0 !== t.header),
                    a = e.split('.')[n];
                if ('string' != typeof a) throw new o(`Invalid token specified: missing part #${n + 1}`);
                try {
                    r = (function (e) {
                        let t = e.replace(/-/g, '+').replace(/_/g, '/');
                        switch (t.length % 4) {
                            case 0:
                                break;
                            case 2:
                                t += '==';
                                break;
                            case 3:
                                t += '=';
                                break;
                            default:
                                throw Error('base64 string is not of the correct length');
                        }
                        try {
                            var r;
                            return (
                                (r = t),
                                decodeURIComponent(
                                    atob(r).replace(/(.)/g, (e, t) => {
                                        let r = t.charCodeAt(0).toString(16).toUpperCase();
                                        return r.length < 2 && (r = '0' + r), '%' + r;
                                    }),
                                )
                            );
                        } catch {
                            return atob(t);
                        }
                    })(a);
                } catch (e) {
                    throw new o(`Invalid token specified: invalid base64 for part #${n + 1} (${e.message})`);
                }
                try {
                    return JSON.parse(r);
                } catch (e) {
                    throw new o(`Invalid token specified: invalid json for part #${n + 1} (${e.message})`);
                }
            }
            function l(e, t, r = {}) {
                let { skipFalsyWrites: o = !1 } = r,
                    a = (0, n.useRef)(t),
                    s = (0, n.useCallback)(() => {
                        let e = a.current;
                        return e instanceof Function ? e() : e;
                    }, []),
                    [i, c] = (0, n.useState)(() => {
                        if (typeof window > 'u') return s();
                        try {
                            let t = localStorage.getItem(e);
                            if (null !== t) return JSON.parse(t);
                            let r = s();
                            return (!o || r) && localStorage.setItem(e, JSON.stringify(r)), r;
                        } catch (t) {
                            return console.error(`Failed to read localStorage key "${e}":`, t), s();
                        }
                    });
                return (
                    (0, n.useEffect)(() => {
                        let t = (t) => {
                            if (t.key === e || null === t.key)
                                try {
                                    let t = localStorage.getItem(e);
                                    null !== t && c(JSON.parse(t));
                                } catch (t) {
                                    console.error(`Failed to sync localStorage key "${e}":`, t);
                                }
                        };
                        return window.addEventListener('storage', t), () => window.removeEventListener('storage', t);
                    }, [e]),
                    {
                        value: i,
                        set: (0, n.useCallback)(
                            (t) => {
                                c((r) => {
                                    let n = t instanceof Function ? t(r) : t;
                                    try {
                                        o && !n ? localStorage.removeItem(e) : localStorage.setItem(e, JSON.stringify(n));
                                    } catch (t) {
                                        console.error(`Failed to write localStorage key "${e}":`, t);
                                    }
                                    return n;
                                });
                            },
                            [e, o],
                        ),
                        remove: (0, n.useCallback)(() => {
                            try {
                                localStorage.removeItem(e);
                            } catch (t) {
                                console.error(`Failed to remove localStorage key "${e}":`, t);
                            }
                            c(s());
                        }, [s, e]),
                    }
                );
            }
            o.prototype.name = 'InvalidTokenError';
        },
    },
]);
