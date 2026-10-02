(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4219],
    {
        4401: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => n });
            var s = r(88039),
                o = r(6807);
            class n extends o.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= s.c.INFO && this.logToConsole(s.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= s.c.DEBUG && this.logToConsole(s.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= s.c.TRACE && this.logToConsole(s.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= s.c.WARNING && this.logToConsole(s.c.WARNING, e, t), this.sendToErrorBooster(s.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= s.c.ERROR && this.logToConsole(s.c.ERROR, e, t), this.sendToErrorBooster(s.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(s.c.INFO, e, t);
                }
                logToConsole(e, t, r) {
                    if (this.disableLogToConsole) return;
                    let o = s.Q[e];
                    console[o](...this.formatMessage(e, t, r));
                }
                sendToErrorBooster(e, t, r) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: r ? this.obfuscateData({ ...this.additionalData, ...r }) : {} } });
                }
            }
        },
        4652: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => d });
            var s = r(62072),
                o = Object.prototype,
                n = o.hasOwnProperty,
                i = o.toString,
                a = s.A ? s.A.toStringTag : void 0;
            let c = function (e) {
                var t = n.call(e, a),
                    r = e[a];
                try {
                    e[a] = void 0;
                    var s = !0;
                } catch (e) {}
                var o = i.call(e);
                return (s && (t ? (e[a] = r) : delete e[a]), o);
            };
            var l = Object.prototype.toString,
                u = s.A ? s.A.toStringTag : void 0;
            let d = function (e) {
                return null == e ? (void 0 === e ? '[object Undefined]' : '[object Null]') : u && u in Object(e) ? c(e) : l.call(e);
            };
        },
        6807: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var s = r(79041),
                o = r(99245),
                n = r(40241),
                i = r(77270);
            let a = () => 'SECRET';
            class c {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, o) {
                    let n,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        c = (0, i.A)({ ...this.additionalData, ...r });
                    return (Object.keys(c).length && (n = this.obfuscateData(c)), o) ? `${a} ${s(n)}` : [a, n];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, o.A)(e, t) && (0, n.A)(e, t, a());
                    return e;
                }
            }
        },
        9248: (e, t, r) => {
            'use strict';
            r.d(t, { cm: () => s.c });
            var s = r(88039);
            r(6807);
        },
        22084: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var s = r(62513),
                o = 'object' == typeof self && self && self.Object === Object && self;
            let n = s.A || o || Function('return this')();
        },
        22234: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => u }));
            var s = r(25839),
                o = r(74631),
                n = r(9248),
                i = r(4401),
                a = r(44342);
            let c = new i.r({ maxLogLevel: n.cm.DEBUG, secureFields: a.x, disableLogToConsole: !0 }),
                l = (e) => {
                    let { error: t, logPrefix: r, assetPrefix: n } = e;
                    return (
                        (0, o.useEffect)(() => {
                            c.error('['.concat(r, '] ').concat(t.message), { additional: t, type: 'error-boundary' });
                        }, [t, r]),
                        (0, s.jsxs)('html', {
                            children: [
                                (0, s.jsxs)('head', {
                                    children: [
                                        (0, s.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(n, '/fonts/YSText-Regular.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, s.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(n, '/fonts/YSText-Medium.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, s.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(n, '/fonts/YSText-Bold.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, s.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(n, '/fonts/YSMusic-HeadlineBold.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, s.jsx)('link', { rel: 'stylesheet', href: ''.concat(n, '/styles/fonts.css') }),
                                    ],
                                }),
                                (0, s.jsx)('body', {
                                    className: 'ym-font-music',
                                    children: (0, s.jsx)('div', {
                                        style: { display: 'grid', placeItems: 'center', height: '100dvh', textAlign: 'center', margin: '0.5rem' },
                                        children: '\xabApplication error: a client-side exception has occurred (see the browser console for more information)\xbb',
                                    }),
                                }),
                            ],
                        })
                    );
                };
            function u(e) {
                let { error: t } = e;
                return (0, s.jsx)(l, { error: t, logPrefix: 'Desktop application fatal error', assetPrefix: '' });
            }
            r(74266);
        },
        38531: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            let s = function (e) {
                return null != e && 'object' == typeof e;
            };
        },
        40241: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => o });
            var s = r(62243);
            let o = function (e, t, r) {
                return null == e ? e : (0, s.A)(e, t, r);
            };
        },
        41512: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 22234));
        },
        41769: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var s = r(77663);
            function o(e, t) {
                if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError('Expected a function');
                var r = function () {
                    var s = arguments,
                        o = t ? t.apply(this, s) : s[0],
                        n = r.cache;
                    if (n.has(o)) return n.get(o);
                    var i = e.apply(this, s);
                    return ((r.cache = n.set(o, i) || n), i);
                };
                return ((r.cache = new (o.Cache || s.A)()), r);
            }
            o.Cache = s.A;
            let n = o;
        },
        44342: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => s });
            let s = [
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
        48660: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var s = r(95539),
                o = 1 / 0;
            let n = function (e) {
                if ('string' == typeof e || (0, s.A)(e)) return e;
                var t = e + '';
                return '0' == t && 1 / e == -o ? '-0' : t;
            };
        },
        54968: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            let s = Array.isArray;
        },
        56481: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var s = r(41769),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                n = /\\(\\)?/g;
            let i = (function (e) {
                var t = (0, s.A)(e, function (e) {
                        return (500 === r.size && r.clear(), e);
                    }),
                    r = t.cache;
                return t;
            })(function (e) {
                var t = [];
                return (
                    46 === e.charCodeAt(0) && t.push(''),
                    e.replace(o, function (e, r, s, o) {
                        t.push(s ? o.replace(n, '$1') : r || e);
                    }),
                    t
                );
            });
        },
        62072: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            let s = r(22084).A.Symbol;
        },
        62243: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => c });
            var s = r(38794),
                o = r(93096),
                n = r(22232),
                i = r(13764),
                a = r(48660);
            let c = function (e, t, r, c) {
                if (!(0, i.A)(e)) return e;
                t = (0, o.A)(t, e);
                for (var l = -1, u = t.length, d = u - 1, f = e; null != f && ++l < u;) {
                    var h = (0, a.A)(t[l]),
                        v = r;
                    if ('__proto__' === h || 'constructor' === h || 'prototype' === h) break;
                    if (l != d) {
                        var p = f[h];
                        void 0 === (v = c ? c(p, h, f) : void 0) && (v = (0, i.A)(p) ? p : (0, n.A)(t[l + 1]) ? [] : {});
                    }
                    ((0, s.A)(f, h, v), (f = f[h]));
                }
                return e;
            };
        },
        62513: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            let s = 'object' == typeof global && global && global.Object === Object && global;
        },
        68811: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            var s = r(54968),
                o = r(95539),
                n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                i = /^\w*$/;
            let a = function (e, t) {
                if ((0, s.A)(e)) return !1;
                var r = typeof e;
                return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || (0, o.A)(e)) || i.test(e) || !n.test(e) || (null != t && e in Object(t));
            };
        },
        74266: () => {},
        79041: (e, t) => {
            (e.exports = function (e, t, s, o) {
                return JSON.stringify(e, r(t, o), s);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (o, n) {
                        if (r.length > 0) {
                            var i = r.indexOf(this);
                            (~i ? r.splice(i + 1) : r.push(this), ~i ? s.splice(i, 1 / 0, o) : s.push(o), ~r.indexOf(n) && (n = t.call(this, o, n)));
                        } else r.push(n);
                        return null == e ? n : e.call(this, o, n);
                    }
                );
            }
        },
        87223: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var s = r(93096),
                o = r(48660);
            let n = function (e, t) {
                t = (0, s.A)(t, e);
                for (var r = 0, n = t.length; null != e && r < n;) e = e[(0, o.A)(t[r++])];
                return r && r == n ? e : void 0;
            };
        },
        88039: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { Q: () => o, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let o = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
        },
        93096: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            var s = r(54968),
                o = r(68811),
                n = r(56481),
                i = r(24351);
            let a = function (e, t) {
                return (0, s.A)(e) ? e : (0, o.A)(e, t) ? [e] : (0, n.A)((0, i.A)(e));
            };
        },
        99245: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => o });
            var s = r(87223);
            let o = function (e, t, r) {
                var o = null == e ? void 0 : (0, s.A)(e, t);
                return void 0 === o ? r : o;
            };
        },
    },
    (e) => {
        (e.O(0, [1733, 4834, 2877, 260, 4475, 5056, 7358], () => e((e.s = 41512))), (_N_E = e.O()));
    },
]);
