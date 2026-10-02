(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7911],
    {
        4401: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => n });
            var o = r(88039),
                s = r(6807);
            class n extends s.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
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
                    (this.maxLogLevel >= o.c.WARNING && this.logToConsole(o.c.WARNING, e, t), this.sendToErrorBooster(o.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= o.c.ERROR && this.logToConsole(o.c.ERROR, e, t), this.sendToErrorBooster(o.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(o.c.INFO, e, t);
                }
                logToConsole(e, t, r) {
                    if (this.disableLogToConsole) return;
                    let s = o.Q[e];
                    console[s](...this.formatMessage(e, t, r));
                }
                sendToErrorBooster(e, t, r) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: r ? this.obfuscateData({ ...this.additionalData, ...r }) : {} } });
                }
            }
        },
        6807: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => u });
            var o = r(79041),
                s = r(99245),
                n = r(40241),
                i = r(77270);
            let a = () => 'SECRET';
            class u {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, s) {
                    let n,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        u = (0, i.A)({ ...this.additionalData, ...r });
                    return (Object.keys(u).length && (n = this.obfuscateData(u)), s) ? `${a} ${o(n)}` : [a, n];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, s.A)(e, t) && (0, n.A)(e, t, a());
                    return e;
                }
            }
        },
        9248: (e, t, r) => {
            'use strict';
            r.d(t, { cm: () => o.c });
            var o = r(88039);
            r(6807);
        },
        18422: (e, t, r) => {
            'use strict';
            function o(e, ...t) {
                let r = e('i18n-jwt-token', t[0]);
                return r ? { 'X-Authorization': r } : {};
            }
            (r.d(t, { e: () => o }), r(71650));
        },
        21217: (e) => {
            function t() {}
            ((t.prototype = {
                on: function (e, t, r) {
                    var o = this.e || (this.e = {});
                    return ((o[e] || (o[e] = [])).push({ fn: t, ctx: r }), this);
                },
                once: function (e, t, r) {
                    var o = this;
                    function s() {
                        (o.off(e, s), t.apply(r, arguments));
                    }
                    return ((s._ = t), this.on(e, s, r));
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, s = r.length; o < s; o++)
                        r[o].fn.apply(r[o].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var r = this.e || (this.e = {}),
                        o = r[e],
                        s = [];
                    if (o && t) for (var n = 0, i = o.length; n < i; n++) o[n].fn !== t && o[n].fn._ !== t && s.push(o[n]);
                    return (s.length ? (r[e] = s) : delete r[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        35757: (e, t, r) => {
            'use strict';
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) e[o] = r[o];
                }
                return e;
            }
            r.d(t, { pL: () => n });
            var s = (function e(t, r) {
                function s(e, s, n) {
                    if ('undefined' != typeof document) {
                        ('number' == typeof (n = o({}, r, n)).expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)),
                            n.expires && (n.expires = n.expires.toUTCString()),
                            (e = encodeURIComponent(e)
                                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[()]/g, escape)));
                        var i = '';
                        for (var a in n) n[a] && ((i += '; ' + a), !0 !== n[a] && (i += '=' + n[a].split(';')[0]));
                        return (document.cookie = e + '=' + t.write(s, e) + i);
                    }
                }
                return Object.create(
                    {
                        set: s,
                        get: function (e) {
                            if ('undefined' != typeof document && (!arguments.length || e)) {
                                for (var r = document.cookie ? document.cookie.split('; ') : [], o = {}, s = 0; s < r.length; s++) {
                                    var n = r[s].split('='),
                                        i = n.slice(1).join('=');
                                    try {
                                        var a = decodeURIComponent(n[0]);
                                        if (((o[a] = t.read(i, a)), e === a)) break;
                                    } catch (e) {}
                                }
                                return e ? o[e] : o;
                            }
                        },
                        remove: function (e, t) {
                            s(e, '', o({}, t, { expires: -1 }));
                        },
                        withAttributes: function (t) {
                            return e(this.converter, o({}, this.attributes, t));
                        },
                        withConverter: function (t) {
                            return e(o({}, this.converter, t), this.attributes);
                        },
                    },
                    { attributes: { value: Object.freeze(r) }, converter: { value: Object.freeze(t) } },
                );
            })(
                {
                    read: function (e) {
                        return ('"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent));
                    },
                    write: function (e) {
                        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
                    },
                },
                { path: '/' },
            );
            let n = (e) => {
                if (!(typeof window > 'u')) return s.get(e);
            };
        },
        40241: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var o = r(62243);
            let s = function (e, t, r) {
                return null == e ? e : (0, o.A)(e, t, r);
            };
        },
        41769: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var o = r(77663);
            function s(e, t) {
                if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError('Expected a function');
                var r = function () {
                    var o = arguments,
                        s = t ? t.apply(this, o) : o[0],
                        n = r.cache;
                    if (n.has(s)) return n.get(s);
                    var i = e.apply(this, o);
                    return ((r.cache = n.set(s, i) || n), i);
                };
                return ((r.cache = new (s.Cache || o.A)()), r);
            }
            s.Cache = o.A;
            let n = s;
        },
        48660: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var o = r(95539),
                s = 1 / 0;
            let n = function (e) {
                if ('string' == typeof e || (0, o.A)(e)) return e;
                var t = e + '';
                return '0' == t && 1 / e == -s ? '-0' : t;
            };
        },
        56481: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var o = r(41769),
                s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                n = /\\(\\)?/g;
            let i = (function (e) {
                var t = (0, o.A)(e, function (e) {
                        return (500 === r.size && r.clear(), e);
                    }),
                    r = t.cache;
                return t;
            })(function (e) {
                var t = [];
                return (
                    46 === e.charCodeAt(0) && t.push(''),
                    e.replace(s, function (e, r, o, s) {
                        t.push(o ? s.replace(n, '$1') : r || e);
                    }),
                    t
                );
            });
        },
        59353: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => i });
            var o = r(95919),
                s = r(76481),
                n = r(88091);
            class i {
                requestDoneHooks = [];
                beforeRequestHooks = [];
                beforeErrorHooks = [];
                beforeRetryHooks = [];
                defaultOptions;
                constructor(e = {}) {
                    ((this.defaultOptions = e),
                        (this.beforeRequestHooks = e.hooks?.beforeRequest ?? []),
                        (this.beforeErrorHooks = e.hooks?.beforeError ?? []),
                        (this.beforeRetryHooks = e.hooks?.beforeRetry ?? []),
                        (this.requestDoneHooks = e.hooks?.onRequestDone ?? []));
                }
                async get(e) {
                    let t = new s.m('GET method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: o.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'GET', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'GET' }, void 0, t), Promise.reject(t));
                }
                async put(e) {
                    let t = new s.m('PUT method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: o.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'PUT', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'PUT' }, void 0, t), Promise.reject(t));
                }
                async patch(e) {
                    let t = new s.m('PATCH method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: o.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'PATCH', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'PATCH' }, void 0, t), Promise.reject(t));
                }
                async delete(e) {
                    let t = new s.m('DELETE method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: o.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'DELETE', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'DELETE' }, void 0, t), Promise.reject(t));
                }
                async head(e) {
                    let t = new s.m('HEAD method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: o.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'HEAD', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'HEAD' }, void 0, t), Promise.reject(t));
                }
                async post(e, t = {}) {
                    return this.request(e, { ...t, method: 'POST' });
                }
                async request(e, t) {
                    let r,
                        n,
                        i = t.method || 'GET';
                    if ('POST' !== i)
                        throw new s.m(`${i} method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.`, {
                            code: o.Z.METHOD_NOT_SUPPORTED,
                            cause: { method: i, supportedMethods: ['POST'] },
                        });
                    if ('undefined' == typeof navigator || 'function' != typeof navigator.sendBeacon)
                        throw new s.m('navigator.sendBeacon is not available in this environment', { code: o.Z.NOT_AVAILABLE });
                    try {
                        let o = this.mergeOptions(t),
                            s = this.buildUrl(e, o);
                        await this.executeBeforeRequestHooks(s, o);
                        let n = this.prepareBeaconData(o);
                        return (r = await this.executeWithRetries(s, n, o));
                    } catch (e) {
                        throw ((n = e), await this.executeBeforeErrorHooks(e, t), e);
                    } finally {
                        this.executeRequestDoneHooks(e, t, r, n);
                    }
                }
                mergeOptions(e) {
                    return { ...this.defaultOptions, ...e, headers: { ...this.defaultOptions.headers, ...e.headers } };
                }
                buildUrl(e, t) {
                    let r = e;
                    if (t.prefixUrl) {
                        let o = t.prefixUrl.toString().replace(/\/$/, ''),
                            s = e.replace(/^\//, '');
                        r = `${o}/${s}`;
                    }
                    if (t.searchParams) {
                        let e = new URL(r);
                        (('string' == typeof t.searchParams ? new URLSearchParams(t.searchParams) : t.searchParams).forEach((t, r) => {
                            e.searchParams.set(r, t);
                        }),
                            (r = e.toString()));
                    }
                    return r;
                }
                async executeBeforeRequestHooks(e, t) {
                    for (let r of [...this.beforeRequestHooks, ...(t.hooks?.beforeRequest ?? [])]) {
                        let o = {
                            url: e,
                            method: t.method,
                            headers: new Headers(t.headers || {}),
                            searchParams: t.searchParams
                                ? 'string' == typeof t.searchParams
                                    ? new URLSearchParams(t.searchParams)
                                    : t.searchParams
                                : new URLSearchParams(),
                            json: t.json,
                            timeout: t.timeout,
                        };
                        await r(o);
                    }
                }
                async executeBeforeErrorHooks(e, t) {
                    let r = [...this.beforeErrorHooks, ...(t?.hooks?.beforeError ?? [])],
                        o = e instanceof s.m ? e : new s.m(e instanceof Error ? e.message : 'Unknown error', { cause: e });
                    for (let e of r) {
                        let t = await e(o);
                        t instanceof s.m && Object.assign(o, t);
                    }
                }
                executeRequestDoneHooks(e, t, r, o) {
                    this.requestDoneHooks.forEach((s) => {
                        s({ url: e, options: t, response: r, error: o });
                    });
                }
                prepareBeaconData(e) {
                    return void 0 !== e.body
                        ? e.body instanceof Blob ||
                          e.body instanceof ArrayBuffer ||
                          e.body instanceof FormData ||
                          e.body instanceof URLSearchParams ||
                          'string' == typeof e.body
                            ? e.body
                            : String(e.body)
                        : void 0 !== e.json
                          ? JSON.stringify(e.json)
                          : null;
                }
                createMockResponse(e, t) {
                    let r = {};
                    return (
                        void 0 !== t.json
                            ? (r['content-type'] = 'application/json')
                            : t.body instanceof FormData
                              ? (r['content-type'] = 'multipart/form-data')
                              : t.body instanceof URLSearchParams && (r['content-type'] = 'application/x-www-form-urlencoded'),
                        {
                            headers: r,
                            statusCode: 204,
                            statusMessage: 'No Content',
                            url: e,
                            json: async () =>
                                Promise.reject(
                                    new s.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: o.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            text: async () =>
                                Promise.reject(
                                    new s.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: o.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            arrayBuffer: async () =>
                                Promise.reject(
                                    new s.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: o.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            clone: () => this.createMockResponse(e, t),
                            request: { prefixUrl: t.prefixUrl, headers: t.headers, searchParams: t.searchParams, method: t.method },
                        }
                    );
                }
                async executeWithRetries(e, t, r) {
                    let n = r.retry?.config,
                        i = n?.totalRequestsLimit ?? 1,
                        a = new s.m('All retry attempts failed', { code: o.Z.RETRY_EXHAUSTED });
                    for (let a = 1; a <= i; a++)
                        try {
                            if (!navigator.sendBeacon(e, t)) {
                                let e = new s.m('Failed to queue beacon request.', { code: o.Z.QUEUE_FAILED });
                                if (await this.handleRetryableError(e, a, i, n)) continue;
                                throw e;
                            }
                            return this.createMockResponse(e, r);
                        } catch (t) {
                            let e = t instanceof s.m ? t : new s.m(t instanceof Error ? t.message : 'Unknown error', { cause: t, code: o.Z.RETRY_EXHAUSTED });
                            if (await this.handleRetryableError(e, a, i, n, r)) continue;
                            throw e;
                        }
                    throw a;
                }
                async handleRetryableError(e, t, r, o, s) {
                    if (t < r && this.shouldRetryForError(e, o)) {
                        await this.executeBeforeRetryHooks(e, t, s);
                        let r = this.getRetryDelay(e, t - 1, o);
                        return (r > 0 && (await (0, n.c)(r)), !0);
                    }
                    return !1;
                }
                async executeBeforeRetryHooks(e, t, r) {
                    for (let o of [...this.beforeRetryHooks, ...(r?.hooks?.beforeRetry ?? [])]) await o(e, t);
                }
                shouldRetryForError(e, t) {
                    return !!t && !!t.statusCodes.NON_HTTP_ERROR && e.code === o.Z.QUEUE_FAILED;
                }
                getRetryDelay(e, t, r) {
                    if (!r) return 0;
                    let o = r.statusCodes.NON_HTTP_ERROR,
                        s = o?.attempts;
                    return !s || t >= s.length ? 0 : (s[t] ?? 0);
                }
            }
        },
        62243: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => u });
            var o = r(38794),
                s = r(93096),
                n = r(22232),
                i = r(13764),
                a = r(48660);
            let u = function (e, t, r, u) {
                if (!(0, i.A)(e)) return e;
                t = (0, s.A)(t, e);
                for (var h = -1, l = t.length, c = l - 1, f = e; null != f && ++h < l;) {
                    var d = (0, a.A)(t[h]),
                        p = r;
                    if ('__proto__' === d || 'constructor' === d || 'prototype' === d) break;
                    if (h != c) {
                        var y = f[d];
                        void 0 === (p = u ? u(y, d, f) : void 0) && (p = (0, i.A)(y) ? y : (0, n.A)(t[h + 1]) ? [] : {});
                    }
                    ((0, o.A)(f, d, p), (f = f[d]));
                }
                return e;
            };
        },
        68811: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            var o = r(54968),
                s = r(95539),
                n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                i = /^\w*$/;
            let a = function (e, t) {
                if ((0, o.A)(e)) return !1;
                var r = typeof e;
                return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || (0, s.A)(e)) || i.test(e) || !n.test(e) || (null != t && e in Object(t));
            };
        },
        71650: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => n, M: () => u, a: () => i, b: () => a, c: () => o, d: () => s, g: () => l });
            let o = 'i18n-geo-widget-device-id',
                s = 'i18n-geo-widget-replacements',
                n = 'i18n-enabled-replacement',
                i = 'i18n-jwt-token',
                a = 'i18n-geo-widget-replacement-cleared',
                u = 3,
                h = {
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
                l = (e, t) => h[t][e];
        },
        73829: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => D });
            class o extends Error {
                constructor(e, t, r) {
                    let o = e.status || 0 === e.status ? e.status : '',
                        s = e.statusText || '',
                        n = `${o} ${s}`.trim();
                    (super(`Request failed with ${n ? `status code ${n}` : 'an unknown error'}`),
                        Object.defineProperty(this, 'response', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'HTTPError'),
                        (this.response = e),
                        (this.request = t),
                        (this.options = r));
                }
            }
            class s extends Error {
                constructor(e) {
                    (super('Request timed out'),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'TimeoutError'),
                        (this.request = e));
                }
            }
            let n = (e) => null !== e && 'object' == typeof e,
                i = (...e) => {
                    for (let t of e) if ((!n(t) || Array.isArray(t)) && void 0 !== t) throw TypeError('The `options` argument must be an object');
                    return u({}, ...e);
                },
                a = (e = {}, t = {}) => {
                    let r = new globalThis.Headers(e),
                        o = t instanceof globalThis.Headers;
                    for (let [e, s] of new globalThis.Headers(t).entries()) (o && 'undefined' === s) || void 0 === s ? r.delete(e) : r.set(e, s);
                    return r;
                },
                u = (...e) => {
                    let t = {},
                        r = {};
                    for (let o of e)
                        if (Array.isArray(o)) (Array.isArray(t) || (t = []), (t = [...t, ...o]));
                        else if (n(o)) {
                            for (let [e, r] of Object.entries(o)) (n(r) && e in t && (r = u(t[e], r)), (t = { ...t, [e]: r }));
                            n(o.headers) && ((r = a(r, o.headers)), (t.headers = r));
                        }
                    return t;
                },
                h = (() => {
                    let e = !1,
                        t = !1,
                        r = 'function' == typeof globalThis.Request;
                    return (
                        'function' == typeof globalThis.ReadableStream &&
                            r &&
                            (t = new globalThis.Request('https://a.com', {
                                body: new globalThis.ReadableStream(),
                                method: 'POST',
                                get duplex() {
                                    return ((e = !0), 'half');
                                },
                            }).headers.has('Content-Type')),
                        e && !t
                    );
                })(),
                l = 'function' == typeof globalThis.AbortController,
                c = 'function' == typeof globalThis.ReadableStream,
                f = 'function' == typeof globalThis.FormData,
                d = ['get', 'post', 'put', 'patch', 'head', 'delete'],
                p = { json: 'application/json', text: 'text/*', formData: 'multipart/form-data', arrayBuffer: '*/*', blob: '*/*' },
                y = Symbol('stop'),
                m = [413, 429, 503],
                b = {
                    limit: 2,
                    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
                    statusCodes: [408, 413, 429, 500, 502, 503, 504],
                    afterStatusCodes: m,
                    maxRetryAfter: 1 / 0,
                    backoffLimit: 1 / 0,
                };
            async function g(e, t, r) {
                return new Promise((o, n) => {
                    let i = setTimeout(() => {
                        (t && t.abort(), n(new s(e)));
                    }, r.timeout);
                    r.fetch(e)
                        .then(o)
                        .catch(n)
                        .then(() => {
                            clearTimeout(i);
                        });
                });
            }
            let v = !!globalThis.DOMException;
            function w(e) {
                if (v) return new DOMException(e?.reason ?? 'The operation was aborted.', 'AbortError');
                let t = Error(e?.reason ?? 'The operation was aborted.');
                return ((t.name = 'AbortError'), t);
            }
            async function R(e, { signal: t }) {
                return new Promise((r, o) => {
                    if (t) {
                        if (t.aborted) return void o(w(t));
                        t.addEventListener('abort', s, { once: !0 });
                    }
                    function s() {
                        (o(w(t)), clearTimeout(n));
                    }
                    let n = setTimeout(() => {
                        (t?.removeEventListener('abort', s), r());
                    }, e);
                });
            }
            class E {
                static create(e, t) {
                    let r = new E(e, t),
                        s = async () => {
                            if (r._options.timeout > 0x7fffffff) throw RangeError('The `timeout` option cannot be greater than 2147483647');
                            await Promise.resolve();
                            let e = await r._fetch();
                            for (let t of r._options.hooks.afterResponse) {
                                let o = await t(r.request, r._options, r._decorateResponse(e.clone()));
                                o instanceof globalThis.Response && (e = o);
                            }
                            if ((r._decorateResponse(e), !e.ok && r._options.throwHttpErrors)) {
                                let t = new o(e, r.request, r._options);
                                for (let e of r._options.hooks.beforeError) t = await e(t);
                                throw t;
                            }
                            if (r._options.onDownloadProgress) {
                                if ('function' != typeof r._options.onDownloadProgress) throw TypeError('The `onDownloadProgress` option must be a function');
                                if (!c) throw Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                                return r._stream(e.clone(), r._options.onDownloadProgress);
                            }
                            return e;
                        },
                        n = r._options.retry.methods.includes(r.request.method.toLowerCase()) ? r._retry(s) : s();
                    for (let [e, o] of Object.entries(p))
                        n[e] = async () => {
                            r.request.headers.set('accept', r.request.headers.get('accept') || o);
                            let s = (await n).clone();
                            if ('json' === e) {
                                if (204 === s.status || 0 === (await s.clone().arrayBuffer()).byteLength) return '';
                                if (t.parseJson) return t.parseJson(await s.text());
                            }
                            return s[e]();
                        };
                    return n;
                }
                constructor(e, t = {}) {
                    if (
                        (Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'abortController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, '_retryCount', { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
                        Object.defineProperty(this, '_input', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, '_options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this._input = e),
                        (this._options = {
                            credentials: this._input.credentials || 'same-origin',
                            ...t,
                            headers: a(this._input.headers, t.headers),
                            hooks: u({ beforeRequest: [], beforeRetry: [], beforeError: [], afterResponse: [] }, t.hooks),
                            method: ((e) => (d.includes(e) ? e.toUpperCase() : e))(t.method ?? this._input.method),
                            prefixUrl: String(t.prefixUrl || ''),
                            retry: ((e = {}) => {
                                if ('number' == typeof e) return { ...b, limit: e };
                                if (e.methods && !Array.isArray(e.methods)) throw Error('retry.methods must be an array');
                                if (e.statusCodes && !Array.isArray(e.statusCodes)) throw Error('retry.statusCodes must be an array');
                                return { ...b, ...e, afterStatusCodes: m };
                            })(t.retry),
                            throwHttpErrors: !1 !== t.throwHttpErrors,
                            timeout: void 0 === t.timeout ? 1e4 : t.timeout,
                            fetch: t.fetch ?? globalThis.fetch.bind(globalThis),
                        }),
                        'string' != typeof this._input && !(this._input instanceof URL || this._input instanceof globalThis.Request))
                    )
                        throw TypeError('`input` must be a string, URL, or Request');
                    if (this._options.prefixUrl && 'string' == typeof this._input) {
                        if (this._input.startsWith('/')) throw Error('`input` must not begin with a slash when using `prefixUrl`');
                        (this._options.prefixUrl.endsWith('/') || (this._options.prefixUrl += '/'), (this._input = this._options.prefixUrl + this._input));
                    }
                    if (l) {
                        if (((this.abortController = new globalThis.AbortController()), this._options.signal)) {
                            let e = this._options.signal;
                            this._options.signal.addEventListener('abort', () => {
                                this.abortController.abort(e.reason);
                            });
                        }
                        this._options.signal = this.abortController.signal;
                    }
                    if ((h && (this._options.duplex = 'half'), (this.request = new globalThis.Request(this._input, this._options)), this._options.searchParams)) {
                        let e =
                                'string' == typeof this._options.searchParams
                                    ? this._options.searchParams.replace(/^\?/, '')
                                    : new URLSearchParams(this._options.searchParams).toString(),
                            t = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, '?' + e);
                        (((f && this._options.body instanceof globalThis.FormData) || this._options.body instanceof URLSearchParams) &&
                            !(this._options.headers && this._options.headers['content-type']) &&
                            this.request.headers.delete('content-type'),
                            (this.request = new globalThis.Request(new globalThis.Request(t, { ...this.request }), this._options)));
                    }
                    void 0 !== this._options.json &&
                        ((this._options.body = JSON.stringify(this._options.json)),
                        this.request.headers.set('content-type', this._options.headers.get('content-type') ?? 'application/json'),
                        (this.request = new globalThis.Request(this.request, { body: this._options.body })));
                }
                _calculateRetryDelay(e) {
                    if ((this._retryCount++, this._retryCount < this._options.retry.limit && !(e instanceof s))) {
                        if (e instanceof o) {
                            if (!this._options.retry.statusCodes.includes(e.response.status)) return 0;
                            let t = e.response.headers.get('Retry-After');
                            if (t && this._options.retry.afterStatusCodes.includes(e.response.status)) {
                                let e = Number(t);
                                return (Number.isNaN(e) ? (e = Date.parse(t) - Date.now()) : (e *= 1e3),
                                void 0 !== this._options.retry.maxRetryAfter && e > this._options.retry.maxRetryAfter)
                                    ? 0
                                    : e;
                            }
                            if (413 === e.response.status) return 0;
                        }
                        return Math.min(this._options.retry.backoffLimit, 0.3 * 2 ** (this._retryCount - 1) * 1e3);
                    }
                    return 0;
                }
                _decorateResponse(e) {
                    return (this._options.parseJson && (e.json = async () => this._options.parseJson(await e.text())), e);
                }
                async _retry(e) {
                    try {
                        return await e();
                    } catch (r) {
                        let t = Math.min(this._calculateRetryDelay(r), 0x7fffffff);
                        if (0 !== t && this._retryCount > 0) {
                            for (let e of (await R(t, { signal: this._options.signal }), this._options.hooks.beforeRetry))
                                if ((await e({ request: this.request, options: this._options, error: r, retryCount: this._retryCount })) === y) return;
                            return this._retry(e);
                        }
                        throw r;
                    }
                }
                async _fetch() {
                    for (let e of this._options.hooks.beforeRequest) {
                        let t = await e(this.request, this._options);
                        if (t instanceof Request) {
                            this.request = t;
                            break;
                        }
                        if (t instanceof Response) return t;
                    }
                    return !1 === this._options.timeout ? this._options.fetch(this.request.clone()) : g(this.request.clone(), this.abortController, this._options);
                }
                _stream(e, t) {
                    let r = Number(e.headers.get('content-length')) || 0,
                        o = 0;
                    return 204 === e.status
                        ? (t && t({ percent: 1, totalBytes: r, transferredBytes: o }, new Uint8Array()),
                          new globalThis.Response(null, { status: e.status, statusText: e.statusText, headers: e.headers }))
                        : new globalThis.Response(
                              new globalThis.ReadableStream({
                                  async start(s) {
                                      let n = e.body.getReader();
                                      async function i() {
                                          let { done: e, value: a } = await n.read();
                                          if (e) return void s.close();
                                          (t && ((o += a.byteLength), t({ percent: 0 === r ? 0 : o / r, transferredBytes: o, totalBytes: r }, a)),
                                              s.enqueue(a),
                                              await i());
                                      }
                                      (t && t({ percent: 0, transferredBytes: 0, totalBytes: r }, new Uint8Array()), await i());
                                  },
                              }),
                              { status: e.status, statusText: e.statusText, headers: e.headers },
                          );
                }
            }
            let T = (e) => {
                    let t = (t, r) => E.create(t, i(e, r));
                    for (let r of d) t[r] = (t, o) => E.create(t, i(e, o, { method: r }));
                    return ((t.create = (e) => T(i(e))), (t.extend = (t) => T(i(e, t))), (t.stop = y), t);
                },
                _ = T();
            var A = r(77920),
                C = r(76481),
                k = r(91626);
            let P = { retryLimit: 0, retryDelay: 0 };
            var O = r(88091);
            let q = async ({ options: e, error: t, retryAttempt: r, clientRetryConfig: o }) => {
                    if (t?.response?.headers?.get('Retry-After')) return;
                    let s = (({ retryAttempt: e, error: t, retryAfter: r, retryPolicyConfig: o }) => {
                        if (!o) return P;
                        if (r) return o.totalRequestsLimit > e ? { retryLimit: o.totalRequestsLimit, retryDelay: r } : P;
                        if (o.statusCodes[t]) {
                            let r = o.statusCodes[t];
                            if (r?.attempts?.length && r.attempts.length >= e) return { retryLimit: r.attempts.length + 1, retryDelay: r.attempts[e - 1] || 1 };
                        }
                        return P;
                    })({
                        error: ((e) => (e?.code === 'ETIMEDOUT' ? 'TIMEOUT' : (e.response && (e.response.status || e.response.statusCode)) || 'NON_HTTP_ERROR'))(t),
                        retryAttempt: r,
                        retryPolicyConfig: o?.config,
                    });
                    ((e.retry.limit = s.retryLimit), await (0, O.c)(s.retryDelay));
                },
                x = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'get', 'post', 'put', 'patch', 'delete', 'head'];
            class D {
                client;
                afterTimeoutHooks = [];
                requestDoneHooks = [];
                constructor(e = {}) {
                    ((this.client = _.create(this.optionsConverter(e))),
                        (this.afterTimeoutHooks = e.hooks?.afterTimeout ?? []),
                        (this.requestDoneHooks = e.hooks?.onRequestDone ?? []));
                }
                async get(e, t = {}) {
                    return this.request(e, { ...t, method: 'GET' });
                }
                async post(e, t = {}) {
                    return this.request(e, { ...t, method: 'POST' });
                }
                async put(e, t = {}) {
                    return this.request(e, { ...t, method: 'PUT' });
                }
                async patch(e, t = {}) {
                    return this.request(e, { ...t, method: 'PATCH' });
                }
                async delete(e, t = {}) {
                    return this.request(e, { ...t, method: 'DELETE' });
                }
                async head(e, t = {}) {
                    return this.request(e, { ...t, method: 'HEAD' });
                }
                async request(e, t) {
                    let r, n;
                    try {
                        let o = Date.now(),
                            s = await this.client(e, this.optionsConverter(t)),
                            n = Date.now() - o;
                        return (r = this.responseConverter(s, t, { start: o, response: n }));
                    } catch (e) {
                        if (e instanceof o) throw (n = this.errorConverter(e));
                        if (e instanceof s)
                            throw (
                                this.afterTimeoutHooks.forEach((t) => {
                                    t(this.errorConverter(e));
                                }),
                                (n = this.errorConverter(e))
                            );
                        throw ((n = e), e);
                    } finally {
                        this.requestDoneHooks.forEach((o) => {
                            o({ url: e, options: t, response: r, error: n });
                        });
                    }
                }
                optionsConverter(e) {
                    let {
                            prefixUrl: t,
                            method: r,
                            searchParams: o,
                            headers: s,
                            json: n,
                            hooks: i,
                            retry: a,
                            timeout: u,
                            body: h,
                            credentials: l,
                            signal: c,
                            excludeHeaders: f,
                        } = e,
                        d = {};
                    if (
                        (void 0 !== l && (d.credentials = l),
                        void 0 !== t && (d.prefixUrl = t),
                        void 0 !== r && (d.method = r),
                        void 0 !== s && (d.headers = { ...s, 'user-agent': s['user-agent'] ?? s['User-Agent'] }),
                        void 0 !== o && (d.searchParams = o),
                        void 0 !== n && (d.json = n),
                        'number' == typeof u && (d.timeout = u),
                        void 0 !== h && (d.body = h),
                        void 0 !== c && (d.signal = c),
                        a?.config &&
                            ((d.retry = {
                                limit: a.config.totalRequestsLimit,
                                backoffLimit: 1,
                                statusCodes: Object.keys(a.config.statusCodes)
                                    .filter((e) => !isNaN(Number(e)))
                                    .map((e) => parseInt(e, 10)),
                                methods: x,
                            }),
                            (d.hooks = d.hooks || {}),
                            (d.hooks.beforeRetry = d.hooks.beforeRetry || []),
                            d.hooks.beforeRetry.push(async (e) => {
                                await q({ request: e.request, options: e.options, error: e.error, retryAttempt: e.retryCount, clientRetryConfig: a });
                            })),
                        i)
                    ) {
                        let e,
                            { beforeRequest: t, beforeRetry: r, beforeError: o, afterResponse: s } = i;
                        (void 0 === d.hooks && (d.hooks = {}),
                            Array.isArray(t) &&
                                (d.hooks.beforeRequest = t.map((t) => async (r, o) => {
                                    e = Date.now();
                                    let s = { ...this.normalizeOptions(r, o), headers: r.headers };
                                    await t(s);
                                })),
                            Array.isArray(r) &&
                                ((d.hooks.beforeRetry = d.hooks.beforeRetry || []),
                                (d.hooks.beforeRetry = d.hooks.beforeRetry.concat(
                                    r.map((e) => async ({ request: t, options: r, error: o, retryCount: s }) => {
                                        await e(this.errorConverter(o, t, r), s);
                                    }),
                                ))),
                            Array.isArray(o) && (d.hooks.beforeError = o.map((e) => async (t) => (await e(this.errorConverter(t)), t))),
                            Array.isArray(s) &&
                                (d.hooks.afterResponse = s.map((t) => async (r, o, s) => {
                                    let n = this.normalizeOptions(r, o),
                                        i = Date.now();
                                    return (await t(this.responseConverter(s, n, { start: e, response: i })), s);
                                })));
                    }
                    return (
                        void 0 !== f &&
                            (void 0 === d.hooks && (d.hooks = {}),
                            void 0 === d.hooks.beforeRequest && (d.hooks.beforeRequest = []),
                            d.hooks.beforeRequest.push((e) => {
                                if (f) for (let t of f) e.headers.has(t) && e.headers.delete(t);
                            })),
                        d
                    );
                }
                responseConverter(e, t, r) {
                    return {
                        headers: Object.fromEntries(e.headers.entries()),
                        statusCode: e.status,
                        statusMessage: e.statusText,
                        url: e.url,
                        json: e.json.bind(e),
                        text: e.text.bind(e),
                        arrayBuffer: e.arrayBuffer.bind(e),
                        timings: r,
                        clone: () => this.responseConverter(e.clone(), t, r),
                        request: { prefixUrl: t.prefixUrl, headers: t.headers, searchParams: t.searchParams, method: t.method },
                    };
                }
                normalizeOptions(e, t) {
                    let r = new URL(e.url);
                    return {
                        headers: this.normalizeHeaders(t.headers),
                        searchParams: new URLSearchParams(r.search),
                        json: e.json,
                        url: e.url,
                        method: this.convertMethod(t.method),
                        timeout: void 0,
                    };
                }
                normalizeHeaders(e) {
                    return void 0 === e ? {} : e instanceof Headers ? Object.fromEntries(e.entries()) : Array.isArray(e) ? Object.fromEntries(e) : e;
                }
                errorConverter(e, t, r) {
                    if (e instanceof o || e instanceof s) return new k.G(e.message, { statusCode: e instanceof s ? A.X.REQUEST_TIMEOUT : e.response.status, cause: e });
                    let n = null;
                    return (
                        t && r && (n = { headers: r?.headers, originalRequestHeaders: t.headers, url: t?.url, method: t?.method }),
                        new C.m(e.message, { cause: { error: e, request: n } })
                    );
                }
                convertMethod(e) {
                    return void 0 !== e && x.includes(e) ? e.toUpperCase() : 'GET';
                }
                convertMethods(e) {
                    let t = new Set();
                    return (
                        e.forEach((e) => {
                            x.includes(e) && t.add(e.toUpperCase());
                        }),
                        [...t]
                    );
                }
            }
        },
        78321: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => i });
            var o = r(30691),
                s = (function () {
                    function e(e) {
                        ((this.observableValue = (0, o.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var o = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && o) {
                                            o = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, s), e(s));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, o.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var o = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && o) {
                                        o = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            let n = 'counter',
                i = () => {
                    let e = null,
                        t = new s(!1),
                        r = [];
                    return {
                        isLoaded: t,
                        init: (o) => {
                            if ('undefined' != typeof window && void 0 !== window.Ya?.Metrika2 && !t.value)
                                try {
                                    var s;
                                    ((e = new window.Ya.Metrika2({ ...o })),
                                        (t.value = !0),
                                        (s = e),
                                        r.forEach((e) => {
                                            e(s);
                                        }),
                                        (r.length = 0));
                                } catch (e) {
                                    ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                                }
                        },
                        count: (t, o = n) => {
                            e
                                ? e.params({ [o]: t })
                                : r.push((e) => {
                                      e.params({ [o]: t });
                                  });
                        },
                        hit: (t) => {
                            e
                                ? e.hit(t)
                                : r.push((e) => {
                                      e.hit(t);
                                  });
                        },
                        reachGoal: (t, o) => {
                            if (!e) return void r.push((e) => e.reachGoal(t, o));
                            e.reachGoal(t, o);
                        },
                    };
                };
            r(74631);
        },
        79041: (e, t) => {
            (e.exports = function (e, t, o, s) {
                return JSON.stringify(e, r(t, s), o);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    o = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + o.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (s, n) {
                        if (r.length > 0) {
                            var i = r.indexOf(this);
                            (~i ? r.splice(i + 1) : r.push(this), ~i ? o.splice(i, 1 / 0, s) : o.push(s), ~r.indexOf(n) && (n = t.call(this, s, n)));
                        } else r.push(n);
                        return null == e ? n : e.call(this, s, n);
                    }
                );
            }
        },
        87223: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var o = r(93096),
                s = r(48660);
            let n = function (e, t) {
                t = (0, o.A)(t, e);
                for (var r = 0, n = t.length; null != e && r < n;) e = e[(0, s.A)(t[r++])];
                return r && r == n ? e : void 0;
            };
        },
        88039: (e, t, r) => {
            'use strict';
            var o;
            (r.d(t, { Q: () => s, c: () => o }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(o || (o = {})));
            let s = { [o.ERROR]: 'error', [o.WARNING]: 'warn', [o.INFO]: 'info', [o.DEBUG]: 'debug', [o.TRACE]: 'trace' };
        },
        88091: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => o });
            let o = async (e) => new Promise((t) => setTimeout(t, e));
        },
        93096: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            var o = r(54968),
                s = r(68811),
                n = r(56481),
                i = r(24351);
            let a = function (e, t) {
                return (0, o.A)(e) ? e : (0, s.A)(e, t) ? [e] : (0, n.A)((0, i.A)(e));
            };
        },
        99245: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var o = r(87223);
            let s = function (e, t, r) {
                var s = null == e ? void 0 : (0, o.A)(e, t);
                return void 0 === s ? r : s;
            };
        },
    },
]);
