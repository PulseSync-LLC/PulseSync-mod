(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4219],
    {
        2374: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => i });
            var r = s(11475),
                o = 'object' == typeof self && self && self.Object === Object && self;
            let i = r.A || o || Function('return this')();
        },
        3176: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => u });
            var r = s(51338),
                o = Object.prototype,
                i = o.hasOwnProperty,
                a = o.toString,
                n = r.A ? r.A.toStringTag : void 0;
            let l = function (e) {
                var t = i.call(e, n),
                    s = e[n];
                try {
                    e[n] = void 0;
                    var r = !0;
                } catch (e) {}
                var o = a.call(e);
                return (r && (t ? (e[n] = s) : delete e[n]), o);
            };
            var c = Object.prototype.toString,
                d = r.A ? r.A.toStringTag : void 0;
            let u = function (e) {
                return null == e ? (void 0 === e ? '[object Undefined]' : '[object Null]') : d && d in Object(e) ? l(e) : c.call(e);
            };
        },
        11475: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            let r = 'object' == typeof global && global && global.Object === Object && global;
        },
        14567: (e, t) => {
            (e.exports = function (e, t, r, o) {
                return JSON.stringify(e, s(t, o), r);
            }).getSerialize = s;
            function s(e, t) {
                var s = [],
                    r = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return s[0] === t ? '[Circular ~]' : '[Circular ~.' + r.slice(0, s.indexOf(t)).join('.') + ']';
                        }),
                    function (o, i) {
                        if (s.length > 0) {
                            var a = s.indexOf(this);
                            (~a ? s.splice(a + 1) : s.push(this), ~a ? r.splice(a, 1 / 0, o) : r.push(o), ~s.indexOf(i) && (i = t.call(this, o, i)));
                        } else s.push(i);
                        return null == e ? i : e.call(this, o, i);
                    }
                );
            }
        },
        22834: () => {},
        23877: (e, t, s) => {
            'use strict';
            var r;
            (s.d(t, { Q: () => o, c: () => r }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(r || (r = {})));
            let o = { [r.ERROR]: 'error', [r.WARNING]: 'warn', [r.INFO]: 'info', [r.DEBUG]: 'debug', [r.TRACE]: 'trace' };
        },
        37533: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 70433));
        },
        44084: (e, t, s) => {
            'use strict';
            s.d(t, { r: () => i });
            var r = s(23877),
                o = s(74021);
            class i extends o.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= r.c.INFO && this.logToConsole(r.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= r.c.DEBUG && this.logToConsole(r.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= r.c.TRACE && this.logToConsole(r.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= r.c.WARNING && this.logToConsole(r.c.WARNING, e, t), this.sendToErrorBooster(r.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= r.c.ERROR && this.logToConsole(r.c.ERROR, e, t), this.sendToErrorBooster(r.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(r.c.INFO, e, t);
                }
                logToConsole(e, t, s) {
                    if (this.disableLogToConsole) return;
                    let o = r.Q[e];
                    console[o](...this.formatMessage(e, t, s));
                }
                sendToErrorBooster(e, t, s) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: s ? this.obfuscateData({ ...this.additionalData, ...s }) : {} } });
                }
            }
        },
        50273: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            let r = function (e) {
                return null != e && 'object' == typeof e;
            };
        },
        51338: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            let r = s(2374).A.Symbol;
        },
        53613: (e, t, s) => {
            'use strict';
            s.d(t, { cm: () => r.c });
            var r = s(23877);
            s(74021);
        },
        68900: (e, t, s) => {
            'use strict';
            s.d(t, { x: () => r });
            let r = [
                'request.headers.cookie',
                'request.headers.x-ya-service-ticket',
                'request.headers.x-ya-user-ticket',
                'request.headers.authorization',
                'request.headers.x-authorization',
                'request.headers.content-security-policy',
                'request.headers.x-ya-balancer-service-ticket',
                'request.headers.x-balancer-tvm-service-ticket',
                'response.headers.set-cookie',
                'response.headers.x-ya-service-ticket',
                'response.headers.x-ya-user-ticket',
                'response.headers.x-ya-balancer-service-ticket',
                'response.headers.x-balancer-tvm-service-ticket',
                'response.headers.x-authorization',
                'response.headers.content-security-policy',
            ];
        },
        70433: (e, t, s) => {
            'use strict';
            (s.r(t), s.d(t, { default: () => d }));
            var r = s(88800),
                o = s(53548),
                i = s(53613),
                a = s(44084),
                n = s(68900);
            let l = new a.r({ maxLogLevel: i.cm.DEBUG, secureFields: n.x, disableLogToConsole: !0 }),
                c = (e) => {
                    let { error: t, logPrefix: s, assetPrefix: i } = e;
                    return (
                        (0, o.useEffect)(() => {
                            l.error('['.concat(s, '] ').concat(t.message), { additional: t, type: 'error-boundary' });
                        }, [t, s]),
                        (0, r.jsxs)('html', {
                            children: [
                                (0, r.jsxs)('head', {
                                    children: [
                                        (0, r.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(i, '/fonts/YSText-Regular.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, r.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(i, '/fonts/YSText-Medium.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, r.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(i, '/fonts/YSText-Bold.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, r.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(i, '/fonts/YSMusic-HeadlineBold.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, r.jsx)('link', { rel: 'stylesheet', href: ''.concat(i, '/styles/fonts.css') }),
                                    ],
                                }),
                                (0, r.jsx)('body', {
                                    className: 'ym-font-music',
                                    children: (0, r.jsx)('div', {
                                        style: { display: 'grid', placeItems: 'center', height: '100dvh', textAlign: 'center', margin: '0.5rem' },
                                        children: '\xabApplication error: a client-side exception has occurred (see the browser console for more information)\xbb',
                                    }),
                                }),
                            ],
                        })
                    );
                };
            function d(e) {
                let { error: t } = e;
                return (0, r.jsx)(c, { error: t, logPrefix: 'Desktop application fatal error', assetPrefix: '' });
            }
            s(22834);
        },
        74021: (e, t, s) => {
            'use strict';
            s.d(t, { q: () => l });
            var r = s(14567),
                o = s(243),
                i = s(62151),
                a = s(33396);
            let n = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: s }) {
                    ((this.maxLogLevel = t), (this.secureFields = s), (this.additionalData = e));
                }
                formatMessage(e, t, s = {}, o) {
                    let i,
                        n = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, a.A)({ ...this.additionalData, ...s });
                    return (Object.keys(l).length && (i = this.obfuscateData(l)), o) ? `${n} ${r(i)}` : [n, i];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, o.A)(e, t) && (0, i.A)(e, t, n());
                    return e;
                }
            }
        },
        88710: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            let r = Array.isArray;
        },
    },
    (e) => {
        (e.O(0, [4389, 4146, 4493, 6904, 763, 2670, 7358], () => e((e.s = 37533))), (_N_E = e.O()));
    },
]);
