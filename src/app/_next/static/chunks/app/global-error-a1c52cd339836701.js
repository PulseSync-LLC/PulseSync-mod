(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4219],
    {
        12818: () => {},
        31958: (e, t, s) => {
            'use strict';
            s.d(t, { r: () => a });
            var r = s(91945),
                o = s(42592),
                n = s(42369);
            class a extends n.q {
                info(e, t) {
                    this.maxLogLevel >= o.c.INFO && this.logToConsole(o.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= o.c.DEBUG && this.logToConsole(o.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= o.c.TRACE && this.logToConsole(o.c.TRACE, e, t);
                }
                warn(e, t) {
                    this.maxLogLevel >= o.c.WARNING && this.logToConsole(o.c.WARNING, e, t), this.sendToErrorBooster(o.c.WARNING, e, t);
                }
                error(e, t) {
                    this.maxLogLevel >= o.c.ERROR && this.logToConsole(o.c.ERROR, e, t), this.sendToErrorBooster(o.c.ERROR, e, t);
                }
                log(e, t) {
                    this.logToConsole(o.c.INFO, e, t);
                }
                logToConsole(e, t, s) {
                    if (this.disableLogToConsole) return;
                    let r = o.Q[e];
                    console[r](...this.formatMessage(e, t, s));
                }
                sendToErrorBooster(e, t, s) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: s ? this.obfuscateData({ ...this.additionalData, ...s }) : {} } });
                }
                constructor(e) {
                    super(e), (0, r._)(this, 'disableLogToConsole', void 0), (this.disableLogToConsole = e.disableLogToConsole);
                }
            }
        },
        32024: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            let r = s(75492).A.Symbol;
        },
        36177: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => o });
            var r = s(52803);
            let o = function (e, t, s) {
                return null == e ? e : (0, r.A)(e, t, s);
            };
        },
        39645: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        40141: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => o });
            var r = s(50807);
            let o = function (e, t, s) {
                var o = null == e ? void 0 : (0, r.A)(e, t);
                return void 0 === o ? s : o;
            };
        },
        42369: (e, t, s) => {
            'use strict';
            s.d(t, { q: () => c });
            var r = s(91945),
                o = s(77769),
                n = s(40141),
                a = s(36177),
                i = s(2774);
            let l = () => 'SECRET';
            class c {
                formatMessage(e, t) {
                    let s,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, i.A)({ ...this.additionalData, ...r });
                    return (Object.keys(l).length && (s = this.obfuscateData(l)), n) ? ''.concat(a, ' ').concat(o(s)) : [a, s];
                }
                obfuscateData(e) {
                    var t;
                    if (null == (t = this.secureFields) ? void 0 : t.length) for (let t of this.secureFields) void 0 !== (0, n.A)(e, t) && (0, a.A)(e, t, l());
                    return e;
                }
                constructor({ additionalData: e, maxLogLevel: t, secureFields: s }) {
                    (0, r._)(this, 'maxLogLevel', void 0),
                        (0, r._)(this, 'secureFields', void 0),
                        (0, r._)(this, 'additionalData', void 0),
                        (this.maxLogLevel = t),
                        (this.secureFields = s),
                        (this.additionalData = e);
                }
            }
        },
        42592: (e, t, s) => {
            'use strict';
            var r;
            s.d(t, { Q: () => o, c: () => r }),
                (function (e) {
                    (e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE');
                })(r || (r = {}));
            let o = { [r.ERROR]: 'error', [r.WARNING]: 'warn', [r.INFO]: 'info', [r.DEBUG]: 'debug', [r.TRACE]: 'trace' };
        },
        47256: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            let r = Array.isArray;
        },
        47755: (e, t, s) => {
            'use strict';
            s.d(t, { cm: () => r.c });
            var r = s(42592);
            s(42369);
        },
        50807: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => n });
            var r = s(97608),
                o = s(85172);
            let n = function (e, t) {
                t = (0, r.A)(t, e);
                for (var s = 0, n = t.length; null != e && s < n; ) e = e[(0, o.A)(t[s++])];
                return s && s == n ? e : void 0;
            };
        },
        52803: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => l });
            var r = s(46346),
                o = s(97608),
                n = s(15640),
                a = s(83556),
                i = s(85172);
            let l = function (e, t, s, l) {
                if (!(0, a.A)(e)) return e;
                t = (0, o.A)(t, e);
                for (var c = -1, u = t.length, d = u - 1, h = e; null != h && ++c < u; ) {
                    var f = (0, i.A)(t[c]),
                        v = s;
                    if ('__proto__' === f || 'constructor' === f || 'prototype' === f) break;
                    if (c != d) {
                        var g = h[f];
                        void 0 === (v = l ? l(g, f, h) : void 0) && (v = (0, a.A)(g) ? g : (0, n.A)(t[c + 1]) ? [] : {});
                    }
                    (0, r.A)(h, f, v), (h = h[f]);
                }
                return e;
            };
        },
        60058: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => d });
            var r = s(32024),
                o = Object.prototype,
                n = o.hasOwnProperty,
                a = o.toString,
                i = r.A ? r.A.toStringTag : void 0;
            let l = function (e) {
                var t = n.call(e, i),
                    s = e[i];
                try {
                    e[i] = void 0;
                    var r = !0;
                } catch (e) {}
                var o = a.call(e);
                return r && (t ? (e[i] = s) : delete e[i]), o;
            };
            var c = Object.prototype.toString,
                u = r.A ? r.A.toStringTag : void 0;
            let d = function (e) {
                return null == e ? (void 0 === e ? '[object Undefined]' : '[object Null]') : u && u in Object(e) ? l(e) : c.call(e);
            };
        },
        62385: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            let r = 'object' == typeof global && global && global.Object === Object && global;
        },
        70253: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => a, x: () => n });
            var r = s(91945),
                o = s(39645);
            let n = [
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
            class a {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    (0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'beforeRequestHook', void 0),
                        (0, r._)(this, 'beforeRetryHook', void 0),
                        (0, r._)(this, 'afterResponseHook', void 0),
                        (0, r._)(this, 'beforeErrorHook', void 0),
                        (this.logger = e),
                        (this.beforeRequestHook = (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (this.beforeRetryHook = (e, t) => {
                            let s = e.cause;
                            if ((0, o.N)(s)) {
                                var r, n, a, i, l, c, u, d, h, f, v, g, p, m;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = s.request) ? void 0 : r.method) || (null == (n = s.options) ? void 0 : n.method),
                                        url: (null == (a = s.request) ? void 0 : a.url) || (null == (i = s.options) ? void 0 : i.url),
                                        headers: this.getHeaders((null == (l = s.request) ? void 0 : l.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (u = s.request) ? void 0 : u.json) || (null == (d = s.options) ? void 0 : d.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== s.response &&
                                    (o.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (m = s.response.timings) || null == (p = m.phases) ? void 0 : p.total,
                                    });
                                let A = this.getUrl((null == (h = s.request) ? void 0 : h.url) || (null == (f = s.options) ? void 0 : f.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (v = s.request) ? void 0 : v.method) || (null == (g = s.options) ? void 0 : g.method), ' ')
                                        .concat(A.origin, ' ')
                                        .concat(A.pathname)
                                        .concat(A.search),
                                    o,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (this.afterResponseHook = (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, s;
                                let r = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(r.origin, ' ')
                                        .concat(r.pathname)
                                        .concat(r.search),
                                    {
                                        request: { method: e.request.method, url: e.url, headers: this.getHeaders(e.request.headers), body: e.request.body },
                                        response: {
                                            statusCode: e.statusCode || e.status,
                                            headers: this.getHeaders(e.headers),
                                            time: null == (s = e.timings) || null == (t = s.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (this.beforeErrorHook = (e) => {
                            let t = e.cause;
                            if ((0, o.N)(t)) {
                                var s, r, n, a, i, l, c, u, d, h, f, v, g, p;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = t.request) ? void 0 : s.method) || (null == (r = t.options) ? void 0 : r.method),
                                        url: (null == (n = t.request) ? void 0 : n.url) || (null == (a = t.options) ? void 0 : a.url),
                                        headers: this.getHeaders((null == (i = t.request) ? void 0 : i.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (u = t.options) ? void 0 : u.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (o.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (p = t.response.timings) || null == (g = p.phases) ? void 0 : g.total,
                                    });
                                let m = this.getUrl((null == (d = t.request) ? void 0 : d.url) || (null == (h = t.options) ? void 0 : h.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (f = t.request) ? void 0 : f.method) || (null == (v = t.options) ? void 0 : v.method), ' ')
                                        .concat(m.origin, ' ')
                                        .concat(m.pathname)
                                        .concat(m.search, ', reason: ')
                                        .concat(e.name),
                                    o,
                                );
                            } else
                                this.logger.error('[Resource] Request failed (unknown), reason: '.concat(e.name), {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                            return e;
                        });
                }
            }
        },
        70411: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => i });
            var r = s(47256),
                o = s(86867),
                n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            let i = function (e, t) {
                if ((0, r.A)(e)) return !1;
                var s = typeof e;
                return !!('number' == s || 'symbol' == s || 'boolean' == s || null == e || (0, o.A)(e)) || a.test(e) || !n.test(e) || (null != t && e in Object(t));
            };
        },
        75492: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => n });
            var r = s(62385),
                o = 'object' == typeof self && self && self.Object === Object && self;
            let n = r.A || o || Function('return this')();
        },
        77769: (e, t) => {
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
                    function (o, n) {
                        if (s.length > 0) {
                            var a = s.indexOf(this);
                            ~a ? s.splice(a + 1) : s.push(this), ~a ? r.splice(a, 1 / 0, o) : r.push(o), ~s.indexOf(n) && (n = t.call(this, o, n));
                        } else s.push(n);
                        return null == e ? n : e.call(this, o, n);
                    }
                );
            }
        },
        78769: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 91477));
        },
        83107: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            let r = function (e) {
                return null != e && 'object' == typeof e;
            };
        },
        83556: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            let r = function (e) {
                var t = typeof e;
                return null != e && ('object' == t || 'function' == t);
            };
        },
        85172: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => n });
            var r = s(86867),
                o = 1 / 0;
            let n = function (e) {
                if ('string' == typeof e || (0, r.A)(e)) return e;
                var t = e + '';
                return '0' == t && 1 / e == -o ? '-0' : t;
            };
        },
        86867: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => n });
            var r = s(60058),
                o = s(83107);
            let n = function (e) {
                return 'symbol' == typeof e || ((0, o.A)(e) && '[object Symbol]' == (0, r.A)(e));
            };
        },
        87505: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => a });
            var r = s(98761),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                n = /\\(\\)?/g;
            let a = (function (e) {
                var t = (0, r.A)(e, function (e) {
                        return 500 === s.size && s.clear(), e;
                    }),
                    s = t.cache;
                return t;
            })(function (e) {
                var t = [];
                return (
                    46 === e.charCodeAt(0) && t.push(''),
                    e.replace(o, function (e, s, r, o) {
                        t.push(r ? o.replace(n, '$1') : s || e);
                    }),
                    t
                );
            });
        },
        91477: (e, t, s) => {
            'use strict';
            s.r(t), s.d(t, { default: () => u });
            var r = s(32290),
                o = s(55178),
                n = s(47755),
                a = s(31958),
                i = s(70253);
            s(12818);
            var l = s(49124);
            let c = new a.r({ maxLogLevel: n.cm.DEBUG, secureFields: i.x, disableLogToConsole: !0 });
            function u(e) {
                let { error: t } = e,
                    s = l.env.ASSET_PREFIX || '';
                return (
                    (0, o.useEffect)(() => {
                        c.error('[Desktop application fatal error] '.concat(t.message), { additional: t, type: 'error-boundary' });
                    }, [t]),
                    (0, r.jsxs)('html', {
                        children: [
                            (0, r.jsxs)('head', {
                                children: [
                                    (0, r.jsx)('link', {
                                        rel: 'preload',
                                        as: 'font',
                                        href: ''.concat(s, '/fonts/YSText-Regular.woff2'),
                                        type: 'font/woff2',
                                        crossOrigin: '',
                                    }),
                                    (0, r.jsx)('link', {
                                        rel: 'preload',
                                        as: 'font',
                                        href: ''.concat(s, '/fonts/YSText-Medium.woff2'),
                                        type: 'font/woff2',
                                        crossOrigin: '',
                                    }),
                                    (0, r.jsx)('link', {
                                        rel: 'preload',
                                        as: 'font',
                                        href: ''.concat(s, '/fonts/YSText-Bold.woff2'),
                                        type: 'font/woff2',
                                        crossOrigin: '',
                                    }),
                                    (0, r.jsx)('link', {
                                        rel: 'preload',
                                        as: 'font',
                                        href: ''.concat(s, '/fonts/YSMusic-HeadlineBold.woff2'),
                                        type: 'font/woff2',
                                        crossOrigin: '',
                                    }),
                                    (0, r.jsx)('link', { rel: 'stylesheet', href: ''.concat(s, '/styles/fonts.css') }),
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
            }
        },
        91945: (e, t, s) => {
            'use strict';
            function r(e, t, s) {
                return t in e ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = s), e;
            }
            s.d(t, { _: () => r });
        },
        97608: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => i });
            var r = s(47256),
                o = s(70411),
                n = s(87505),
                a = s(85599);
            let i = function (e, t) {
                return (0, r.A)(e) ? e : (0, o.A)(e, t) ? [e] : (0, n.A)((0, a.A)(e));
            };
        },
        98761: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => n });
            var r = s(33661);
            function o(e, t) {
                if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError('Expected a function');
                var s = function () {
                    var r = arguments,
                        o = t ? t.apply(this, r) : r[0],
                        n = s.cache;
                    if (n.has(o)) return n.get(o);
                    var a = e.apply(this, r);
                    return (s.cache = n.set(o, a) || n), a;
                };
                return (s.cache = new (o.Cache || r.A)()), s;
            }
            o.Cache = r.A;
            let n = o;
        },
    },
    (e) => {
        e.O(0, [8153, 7182, 2497, 2536, 4220, 9562, 7358], () => e((e.s = 78769))), (_N_E = e.O());
    },
]);
