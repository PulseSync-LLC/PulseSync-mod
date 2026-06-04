(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4219],
    {
        12818: () => {},
        31958: (e, o, s) => {
            'use strict';
            s.d(o, { r: () => n });
            var t = s(91945),
                r = s(42592),
                i = s(42369);
            class n extends i.q {
                info(e, o) {
                    this.maxLogLevel >= r.c.INFO && this.logToConsole(r.c.INFO, e, o);
                }
                debug(e, o) {
                    this.maxLogLevel >= r.c.DEBUG && this.logToConsole(r.c.DEBUG, e, o);
                }
                trace(e, o) {
                    this.maxLogLevel >= r.c.TRACE && this.logToConsole(r.c.TRACE, e, o);
                }
                warn(e, o) {
                    this.maxLogLevel >= r.c.WARNING && this.logToConsole(r.c.WARNING, e, o), this.sendToErrorBooster(r.c.WARNING, e, o);
                }
                error(e, o) {
                    this.maxLogLevel >= r.c.ERROR && this.logToConsole(r.c.ERROR, e, o), this.sendToErrorBooster(r.c.ERROR, e, o);
                }
                log(e, o) {
                    this.logToConsole(r.c.INFO, e, o);
                }
                logToConsole(e, o, s) {
                    if (this.disableLogToConsole) return;
                    let t = r.Q[e];
                    console[t](...this.formatMessage(e, o, s));
                }
                sendToErrorBooster(e, o, s) {
                    window.Ya.Rum.logError({ message: o, level: e, additional: { data: s ? this.obfuscateData({ ...this.additionalData, ...s }) : {} } });
                }
                constructor(e) {
                    super(e), (0, t._)(this, 'disableLogToConsole', void 0), (this.disableLogToConsole = e.disableLogToConsole);
                }
            }
        },
        42369: (e, o, s) => {
            'use strict';
            s.d(o, { q: () => c });
            var t = s(91945),
                r = s(77769),
                i = s(40141),
                n = s(36177),
                l = s(2774);
            let a = () => 'SECRET';
            class c {
                formatMessage(e, o) {
                    let s,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        n = String(o instanceof Error && o.stack ? o.stack : o),
                        a = (0, l.A)({ ...this.additionalData, ...t });
                    return (Object.keys(a).length && (s = this.obfuscateData(a)), i) ? ''.concat(n, ' ').concat(r(s)) : [n, s];
                }
                obfuscateData(e) {
                    var o;
                    if (null == (o = this.secureFields) ? void 0 : o.length) for (let o of this.secureFields) void 0 !== (0, i.A)(e, o) && (0, n.A)(e, o, a());
                    return e;
                }
                constructor({ additionalData: e, maxLogLevel: o, secureFields: s }) {
                    (0, t._)(this, 'maxLogLevel', void 0),
                        (0, t._)(this, 'secureFields', void 0),
                        (0, t._)(this, 'additionalData', void 0),
                        (this.maxLogLevel = o),
                        (this.secureFields = s),
                        (this.additionalData = e);
                }
            }
        },
        42592: (e, o, s) => {
            'use strict';
            var t;
            s.d(o, { Q: () => r, c: () => t }),
                (function (e) {
                    (e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE');
                })(t || (t = {}));
            let r = { [t.ERROR]: 'error', [t.WARNING]: 'warn', [t.INFO]: 'info', [t.DEBUG]: 'debug', [t.TRACE]: 'trace' };
        },
        47755: (e, o, s) => {
            'use strict';
            s.d(o, { cm: () => t.c });
            var t = s(42592);
            s(42369);
        },
        59811: (e, o, s) => {
            Promise.resolve().then(s.bind(s, 91477));
        },
        77769: (e, o) => {
            (e.exports = function (e, o, t, r) {
                return JSON.stringify(e, s(o, r), t);
            }).getSerialize = s;
            function s(e, o) {
                var s = [],
                    t = [];
                return (
                    null == o &&
                        (o = function (e, o) {
                            return s[0] === o ? '[Circular ~]' : '[Circular ~.' + t.slice(0, s.indexOf(o)).join('.') + ']';
                        }),
                    function (r, i) {
                        if (s.length > 0) {
                            var n = s.indexOf(this);
                            ~n ? s.splice(n + 1) : s.push(this), ~n ? t.splice(n, 1 / 0, r) : t.push(r), ~s.indexOf(i) && (i = o.call(this, r, i));
                        } else s.push(i);
                        return null == e ? i : e.call(this, r, i);
                    }
                );
            }
        },
        91477: (e, o, s) => {
            'use strict';
            s.r(o), s.d(o, { default: () => d });
            var t = s(32290),
                r = s(55178),
                i = s(47755),
                n = s(31958),
                l = s(49574);
            s(12818);
            var a = s(49124);
            let c = new n.r({ maxLogLevel: i.cm.DEBUG, secureFields: l.xWh, disableLogToConsole: !0 });
            function d(e) {
                let { error: o } = e,
                    s = a.env.ASSET_PREFIX || '';
                return (
                    (0, r.useEffect)(() => {
                        c.error('[Desktop application fatal error] '.concat(o.message), { additional: o, type: 'error-boundary' });
                    }, [o]),
                    (0, t.jsxs)('html', {
                        children: [
                            (0, t.jsxs)('head', {
                                children: [
                                    (0, t.jsx)('link', {
                                        rel: 'preload',
                                        as: 'font',
                                        href: ''.concat(s, '/fonts/YSText-Regular.woff2'),
                                        type: 'font/woff2',
                                        crossOrigin: '',
                                    }),
                                    (0, t.jsx)('link', {
                                        rel: 'preload',
                                        as: 'font',
                                        href: ''.concat(s, '/fonts/YSText-Medium.woff2'),
                                        type: 'font/woff2',
                                        crossOrigin: '',
                                    }),
                                    (0, t.jsx)('link', {
                                        rel: 'preload',
                                        as: 'font',
                                        href: ''.concat(s, '/fonts/YSText-Bold.woff2'),
                                        type: 'font/woff2',
                                        crossOrigin: '',
                                    }),
                                    (0, t.jsx)('link', {
                                        rel: 'preload',
                                        as: 'font',
                                        href: ''.concat(s, '/fonts/YSMusic-HeadlineBold.woff2'),
                                        type: 'font/woff2',
                                        crossOrigin: '',
                                    }),
                                    (0, t.jsx)('link', { rel: 'stylesheet', href: ''.concat(s, '/styles/fonts.css') }),
                                ],
                            }),
                            (0, t.jsx)('body', {
                                className: 'ym-font-music',
                                children: (0, t.jsx)('div', {
                                    style: { display: 'grid', placeItems: 'center', height: '100dvh', textAlign: 'center', margin: '0.5rem' },
                                    children: '\xabApplication error: a client-side exception has occurred (see the browser console for more information)\xbb',
                                }),
                            }),
                        ],
                    })
                );
            }
        },
    },
    (e) => {
        e.O(0, [1670, 3445, 8153, 7182, 2497, 1311, 7764, 6706, 3267, 9574, 4220, 9562, 7358], () => e((e.s = 59811))), (_N_E = e.O());
    },
]);
