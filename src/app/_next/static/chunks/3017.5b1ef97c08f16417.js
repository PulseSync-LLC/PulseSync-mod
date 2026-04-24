(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3017],
    {
        5034: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s });
            class s extends Error {
                constructor(e, t, r) {
                    let s = e.status || 0 === e.status ? e.status : '',
                        i = e.statusText || '',
                        o = `${s} ${i}`.trim();
                    super(`Request failed with ${o ? `status code ${o}` : 'an unknown error'}`),
                        Object.defineProperty(this, 'response', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'HTTPError'),
                        (this.response = e),
                        (this.request = t),
                        (this.options = r);
                }
            }
        },
        9997: (e, t) => {
            (e.exports = function (e, t, s, i) {
                return JSON.stringify(e, r(t, i), s);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (i, o) {
                        if (r.length > 0) {
                            var n = r.indexOf(this);
                            ~n ? r.splice(n + 1) : r.push(this), ~n ? s.splice(n, 1 / 0, i) : s.push(i), ~r.indexOf(o) && (o = t.call(this, i, o));
                        } else r.push(o);
                        return null == e ? o : e.call(this, i, o);
                    }
                );
            }
        },
        14174: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => p, Yw: () => s, JU: () => i, bC: () => f, DQ: () => b, Ve: () => y });
            var s,
                i,
                o = r(80567),
                n = (function () {
                    function e(e) {
                        (this.observableValue = (0, o.vP)(e)), (this.prevValueByListener = new Map());
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
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (i) {
                                    if (i !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        r.prevValueByListener.set(e, i), e(i);
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    (this.observableValue = (0, o.EW)(e)), (this.prevValueByListener = new Map());
                }
                Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (i) {
                                if (i !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    r.prevValueByListener.set(e, i), e(i);
                                }
                            })
                        );
                    });
            })();
            class a extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: s = {}, ...i } = t,
                        o = e || 'Internal error';
                    super(o, i), (this.message = o), (this.code = r), (this.data = s), (this.stack = Error(o).stack), Object.setPrototypeOf(this, a.prototype);
                }
            }
            class l extends a {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype);
                }
            }
            class u extends a {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, u.prototype);
                }
            }
            !(function (e) {
                (e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon');
            })(s || (s = {}));
            let h = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, s] = r.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                f = (e, t) => h(e).filter((e) => e.type === t);
            class p {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    (this.dataSource = e.dataSource),
                        (this.itemsObservable = new n(null)),
                        (this.isLoadingObservable = new n(!1)),
                        (this.errorObservable = new n(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable);
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    (this.isLoadingObservable.value = !0), (this.errorObservable.value = null);
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new l(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    (this.loadingPromise = e), await e;
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new u(e, !0);
                }
                async resolveByType(e, t) {
                    let r = f(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = h(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of r)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            t.push(e.disclaimerItem), (s[e.disclaimerType] = t);
                        }
                    return s;
                }
                destroy() {
                    (this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null);
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                (e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!');
            })(i || (i = {}));
            let c = new Map([
                    [s.EXPLICIT_ICON, i.E],
                    [s.AGE_18_ICON, i.AGE_18],
                    [s.AGE_16_ICON, i.AGE_16],
                    [s.AGE_12_ICON, i.AGE_12],
                    [s.EXCLAMATION_ICON, i.EXCLAMATION],
                ]),
                d = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.EXCLAMATION_ICON],
                b = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = f(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, d);
                    if (null === t) return null;
                    let r = c.get(t.type);
                    return void 0 !== r ? r : null;
                },
                y = (e, t) => f(e, t).length > 0;
        },
        23886: (e, t, r) => {
            'use strict';
            r.d(t, { Ay: () => T });
            var s = r(5034),
                i = r(70579);
            let o = (e) => null !== e && 'object' == typeof e,
                n = (...e) => {
                    for (let t of e) if ((!o(t) || Array.isArray(t)) && void 0 !== t) throw TypeError('The `options` argument must be an object');
                    return l({}, ...e);
                },
                a = (e = {}, t = {}) => {
                    let r = new globalThis.Headers(e),
                        s = t instanceof globalThis.Headers;
                    for (let [e, i] of new globalThis.Headers(t).entries()) (s && 'undefined' === i) || void 0 === i ? r.delete(e) : r.set(e, i);
                    return r;
                },
                l = (...e) => {
                    let t = {},
                        r = {};
                    for (let s of e)
                        if (Array.isArray(s)) Array.isArray(t) || (t = []), (t = [...t, ...s]);
                        else if (o(s)) {
                            for (let [e, r] of Object.entries(s)) o(r) && e in t && (r = l(t[e], r)), (t = { ...t, [e]: r });
                            o(s.headers) && ((r = a(r, s.headers)), (t.headers = r));
                        }
                    return t;
                },
                u = (() => {
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
                                    return (e = !0), 'half';
                                },
                            }).headers.has('Content-Type')),
                        e && !t
                    );
                })(),
                h = 'function' == typeof globalThis.AbortController,
                f = 'function' == typeof globalThis.ReadableStream,
                p = 'function' == typeof globalThis.FormData,
                c = ['get', 'post', 'put', 'patch', 'head', 'delete'],
                d = { json: 'application/json', text: 'text/*', formData: 'multipart/form-data', arrayBuffer: '*/*', blob: '*/*' },
                b = Symbol('stop'),
                y = [413, 429, 503],
                m = {
                    limit: 2,
                    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
                    statusCodes: [408, 413, 429, 500, 502, 503, 504],
                    afterStatusCodes: y,
                    maxRetryAfter: 1 / 0,
                    backoffLimit: 1 / 0,
                };
            async function _(e, t, r) {
                return new Promise((s, o) => {
                    let n = setTimeout(() => {
                        t && t.abort(), o(new i.M(e));
                    }, r.timeout);
                    r.fetch(e)
                        .then(s)
                        .catch(o)
                        .then(() => {
                            clearTimeout(n);
                        });
                });
            }
            let g = !!globalThis.DOMException;
            function v(e) {
                if (g) return new DOMException(e?.reason ?? 'The operation was aborted.', 'AbortError');
                let t = Error(e?.reason ?? 'The operation was aborted.');
                return (t.name = 'AbortError'), t;
            }
            async function w(e, { signal: t }) {
                return new Promise((r, s) => {
                    if (t) {
                        if (t.aborted) return void s(v(t));
                        t.addEventListener('abort', i, { once: !0 });
                    }
                    function i() {
                        s(v(t)), clearTimeout(o);
                    }
                    let o = setTimeout(() => {
                        t?.removeEventListener('abort', i), r();
                    }, e);
                });
            }
            class O {
                static create(e, t) {
                    let r = new O(e, t),
                        i = async () => {
                            if (r._options.timeout > 0x7fffffff) throw RangeError('The `timeout` option cannot be greater than 2147483647');
                            await Promise.resolve();
                            let e = await r._fetch();
                            for (let t of r._options.hooks.afterResponse) {
                                let s = await t(r.request, r._options, r._decorateResponse(e.clone()));
                                s instanceof globalThis.Response && (e = s);
                            }
                            if ((r._decorateResponse(e), !e.ok && r._options.throwHttpErrors)) {
                                let t = new s.H(e, r.request, r._options);
                                for (let e of r._options.hooks.beforeError) t = await e(t);
                                throw t;
                            }
                            if (r._options.onDownloadProgress) {
                                if ('function' != typeof r._options.onDownloadProgress) throw TypeError('The `onDownloadProgress` option must be a function');
                                if (!f) throw Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                                return r._stream(e.clone(), r._options.onDownloadProgress);
                            }
                            return e;
                        },
                        o = r._options.retry.methods.includes(r.request.method.toLowerCase()) ? r._retry(i) : i();
                    for (let [e, s] of Object.entries(d))
                        o[e] = async () => {
                            r.request.headers.set('accept', r.request.headers.get('accept') || s);
                            let i = (await o).clone();
                            if ('json' === e) {
                                if (204 === i.status || 0 === (await i.clone().arrayBuffer()).byteLength) return '';
                                if (t.parseJson) return t.parseJson(await i.text());
                            }
                            return i[e]();
                        };
                    return o;
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
                            hooks: l({ beforeRequest: [], beforeRetry: [], beforeError: [], afterResponse: [] }, t.hooks),
                            method: ((e) => (c.includes(e) ? e.toUpperCase() : e))(t.method ?? this._input.method),
                            prefixUrl: String(t.prefixUrl || ''),
                            retry: ((e = {}) => {
                                if ('number' == typeof e) return { ...m, limit: e };
                                if (e.methods && !Array.isArray(e.methods)) throw Error('retry.methods must be an array');
                                if (e.statusCodes && !Array.isArray(e.statusCodes)) throw Error('retry.statusCodes must be an array');
                                return { ...m, ...e, afterStatusCodes: y };
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
                        this._options.prefixUrl.endsWith('/') || (this._options.prefixUrl += '/'), (this._input = this._options.prefixUrl + this._input);
                    }
                    if (h) {
                        if (((this.abortController = new globalThis.AbortController()), this._options.signal)) {
                            let e = this._options.signal;
                            this._options.signal.addEventListener('abort', () => {
                                this.abortController.abort(e.reason);
                            });
                        }
                        this._options.signal = this.abortController.signal;
                    }
                    if ((u && (this._options.duplex = 'half'), (this.request = new globalThis.Request(this._input, this._options)), this._options.searchParams)) {
                        let e =
                                'string' == typeof this._options.searchParams
                                    ? this._options.searchParams.replace(/^\?/, '')
                                    : new URLSearchParams(this._options.searchParams).toString(),
                            t = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, '?' + e);
                        ((p && this._options.body instanceof globalThis.FormData) || this._options.body instanceof URLSearchParams) &&
                            !(this._options.headers && this._options.headers['content-type']) &&
                            this.request.headers.delete('content-type'),
                            (this.request = new globalThis.Request(new globalThis.Request(t, { ...this.request }), this._options));
                    }
                    void 0 !== this._options.json &&
                        ((this._options.body = JSON.stringify(this._options.json)),
                        this.request.headers.set('content-type', this._options.headers.get('content-type') ?? 'application/json'),
                        (this.request = new globalThis.Request(this.request, { body: this._options.body })));
                }
                _calculateRetryDelay(e) {
                    if ((this._retryCount++, this._retryCount < this._options.retry.limit && !(e instanceof i.M))) {
                        if (e instanceof s.H) {
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
                    return this._options.parseJson && (e.json = async () => this._options.parseJson(await e.text())), e;
                }
                async _retry(e) {
                    try {
                        return await e();
                    } catch (r) {
                        let t = Math.min(this._calculateRetryDelay(r), 0x7fffffff);
                        if (0 !== t && this._retryCount > 0) {
                            for (let e of (await w(t, { signal: this._options.signal }), this._options.hooks.beforeRetry))
                                if ((await e({ request: this.request, options: this._options, error: r, retryCount: this._retryCount })) === b) return;
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
                    return !1 === this._options.timeout ? this._options.fetch(this.request.clone()) : _(this.request.clone(), this.abortController, this._options);
                }
                _stream(e, t) {
                    let r = Number(e.headers.get('content-length')) || 0,
                        s = 0;
                    return 204 === e.status
                        ? (t && t({ percent: 1, totalBytes: r, transferredBytes: s }, new Uint8Array()),
                          new globalThis.Response(null, { status: e.status, statusText: e.statusText, headers: e.headers }))
                        : new globalThis.Response(
                              new globalThis.ReadableStream({
                                  async start(i) {
                                      let o = e.body.getReader();
                                      async function n() {
                                          let { done: e, value: a } = await o.read();
                                          if (e) return void i.close();
                                          t && ((s += a.byteLength), t({ percent: 0 === r ? 0 : s / r, transferredBytes: s, totalBytes: r }, a)), i.enqueue(a), await n();
                                      }
                                      t && t({ percent: 0, transferredBytes: 0, totalBytes: r }, new Uint8Array()), await n();
                                  },
                              }),
                              { status: e.status, statusText: e.statusText, headers: e.headers },
                          );
                }
            }
            let E = (e) => {
                    let t = (t, r) => O.create(t, n(e, r));
                    for (let r of c) t[r] = (t, s) => O.create(t, n(e, s, { method: r }));
                    return (t.create = (e) => E(n(e))), (t.extend = (t) => E(n(e, t))), (t.stop = b), t;
                },
                T = E();
        },
        70579: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => s });
            class s extends Error {
                constructor(e) {
                    super('Request timed out'),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'TimeoutError'),
                        (this.request = e);
                }
            }
        },
        96013: (e) => {
            function t() {}
            (t.prototype = {
                on: function (e, t, r) {
                    var s = this.e || (this.e = {});
                    return (s[e] || (s[e] = [])).push({ fn: t, ctx: r }), this;
                },
                once: function (e, t, r) {
                    var s = this;
                    function i() {
                        s.off(e, i), t.apply(r, arguments);
                    }
                    return (i._ = t), this.on(e, i, r);
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), s = 0, i = r.length; s < i; s++)
                        r[s].fn.apply(r[s].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var r = this.e || (this.e = {}),
                        s = r[e],
                        i = [];
                    if (s && t) for (var o = 0, n = s.length; o < n; o++) s[o].fn !== t && s[o].fn._ !== t && i.push(s[o]);
                    return i.length ? (r[e] = i) : delete r[e], this;
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t);
        },
    },
]);
