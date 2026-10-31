'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7087],
    {
        355: (t, e, r) => {
            r.d(e, { d: () => i });
            var n = r(63695),
                i = (function () {
                    function t(t) {
                        (void 0 === t && (t = n.dM), (this._spanContext = t));
                    }
                    return (
                        (t.prototype.spanContext = function () {
                            return this._spanContext;
                        }),
                        (t.prototype.setAttribute = function (t, e) {
                            return this;
                        }),
                        (t.prototype.setAttributes = function (t) {
                            return this;
                        }),
                        (t.prototype.addEvent = function (t, e) {
                            return this;
                        }),
                        (t.prototype.addLink = function (t) {
                            return this;
                        }),
                        (t.prototype.addLinks = function (t) {
                            return this;
                        }),
                        (t.prototype.setStatus = function (t) {
                            return this;
                        }),
                        (t.prototype.updateName = function (t) {
                            return this;
                        }),
                        (t.prototype.end = function (t) {}),
                        (t.prototype.isRecording = function () {
                            return !1;
                        }),
                        (t.prototype.recordException = function (t, e) {}),
                        t
                    );
                })();
        },
        15489: (t, e, r) => {
            r.d(e, { t: () => n });
            function n({ key: t, project: e, cluster: r, service: n }) {
                return { Authorization: `Application-Key ${t}`, 'x-monium-project': e, 'x-monium-cluster': r, 'x-monium-service': n };
            }
        },
        29518: (t, e, r) => {
            var n;
            (r.d(e, { X: () => n }),
                (function (t) {
                    ((t[(t.NONE = 0)] = 'NONE'), (t[(t.SAMPLED = 1)] = 'SAMPLED'));
                })(n || (n = {})));
        },
        51342: (t, e, r) => {
            r.d(e, { M1: () => i, Zf: () => o });
            let n = (0, r(52490).n)('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
            function i(t) {
                return t.setValue(n, !0);
            }
            function o(t) {
                return !0 === t.getValue(n);
            }
        },
        52490: (t, e, r) => {
            function n(t) {
                return Symbol.for(t);
            }
            r.d(e, { l: () => i, n: () => n });
            var i = new (function t(e) {
                var r = this;
                ((r._currentContext = e ? new Map(e) : new Map()),
                    (r.getValue = function (t) {
                        return r._currentContext.get(t);
                    }),
                    (r.setValue = function (e, n) {
                        var i = new t(r._currentContext);
                        return (i._currentContext.set(e, n), i);
                    }),
                    (r.deleteValue = function (e) {
                        var n = new t(r._currentContext);
                        return (n._currentContext.delete(e), n);
                    }));
            })();
        },
        54625: (t, e, r) => {
            r.d(e, { u: () => x });
            var n = r(39160),
                i = r(63820),
                o = r(52490),
                a = r(355),
                s = (0, o.n)('OpenTelemetry Context Key SPAN');
            function u(t) {
                return t.getValue(s) || void 0;
            }
            function c() {
                return u(i._.getInstance().active());
            }
            function l(t, e) {
                return t.setValue(s, e);
            }
            function p(t) {
                return t.deleteValue(s);
            }
            function f(t, e) {
                return l(t, new a.d(e));
            }
            function h(t) {
                var e;
                return null == (e = u(t)) ? void 0 : e.spanContext();
            }
            var d = r(76704),
                g = i._.getInstance(),
                y = (function () {
                    function t() {}
                    return (
                        (t.prototype.startSpan = function (t, e, r) {
                            if ((void 0 === r && (r = g.active()), null == e ? void 0 : e.root)) return new a.d();
                            var n,
                                i = r && h(r);
                            return 'object' == typeof (n = i) &&
                                'string' == typeof n.spanId &&
                                'string' == typeof n.traceId &&
                                'number' == typeof n.traceFlags &&
                                (0, d.YA)(i)
                                ? new a.d(i)
                                : new a.d();
                        }),
                        (t.prototype.startActiveSpan = function (t, e, r, n) {
                            if (!(arguments.length < 2)) {
                                2 == arguments.length ? (a = e) : 3 == arguments.length ? ((i = e), (a = r)) : ((i = e), (o = r), (a = n));
                                var i,
                                    o,
                                    a,
                                    s = null != o ? o : g.active(),
                                    u = this.startSpan(t, i, s),
                                    c = l(s, u);
                                return g.with(c, a, void 0, u);
                            }
                        }),
                        t
                    );
                })(),
                m = new y(),
                _ = (function () {
                    function t(t, e, r, n) {
                        ((this._provider = t), (this.name = e), (this.version = r), (this.options = n));
                    }
                    return (
                        (t.prototype.startSpan = function (t, e, r) {
                            return this._getTracer().startSpan(t, e, r);
                        }),
                        (t.prototype.startActiveSpan = function (t, e, r, n) {
                            var i = this._getTracer();
                            return Reflect.apply(i.startActiveSpan, i, arguments);
                        }),
                        (t.prototype._getTracer = function () {
                            if (this._delegate) return this._delegate;
                            var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
                            return t ? ((this._delegate = t), this._delegate) : m;
                        }),
                        t
                    );
                })(),
                v = new ((function () {
                    function t() {}
                    return (
                        (t.prototype.getTracer = function (t, e, r) {
                            return new y();
                        }),
                        t
                    );
                })())(),
                w = (function () {
                    function t() {}
                    return (
                        (t.prototype.getTracer = function (t, e, r) {
                            var n;
                            return null != (n = this.getDelegateTracer(t, e, r)) ? n : new _(this, t, e, r);
                        }),
                        (t.prototype.getDelegate = function () {
                            var t;
                            return null != (t = this._delegate) ? t : v;
                        }),
                        (t.prototype.setDelegate = function (t) {
                            this._delegate = t;
                        }),
                        (t.prototype.getDelegateTracer = function (t, e, r) {
                            var n;
                            return null == (n = this._delegate) ? void 0 : n.getTracer(t, e, r);
                        }),
                        t
                    );
                })(),
                b = r(58785),
                S = 'trace',
                x = (function () {
                    function t() {
                        ((this._proxyTracerProvider = new w()),
                            (this.wrapSpanContext = d.IP),
                            (this.isSpanContextValid = d.YA),
                            (this.deleteSpan = p),
                            (this.getSpan = u),
                            (this.getActiveSpan = c),
                            (this.getSpanContext = h),
                            (this.setSpan = l),
                            (this.setSpanContext = f));
                    }
                    return (
                        (t.getInstance = function () {
                            return (this._instance || (this._instance = new t()), this._instance);
                        }),
                        (t.prototype.setGlobalTracerProvider = function (t) {
                            var e = (0, n.$G)(S, this._proxyTracerProvider, b.K.instance());
                            return (e && this._proxyTracerProvider.setDelegate(t), e);
                        }),
                        (t.prototype.getTracerProvider = function () {
                            return (0, n.mS)(S) || this._proxyTracerProvider;
                        }),
                        (t.prototype.getTracer = function (t, e) {
                            return this.getTracerProvider().getTracer(t, e);
                        }),
                        (t.prototype.disable = function () {
                            ((0, n.kv)(S, b.K.instance()), (this._proxyTracerProvider = new w()));
                        }),
                        t
                    );
                })().getInstance();
        },
        55818: (t, e, r) => {
            r.d(e, { S: () => n });
            class n {
                _delegate;
                constructor(t) {
                    this._delegate = t;
                }
                export(t, e) {
                    this._delegate.export(t, e);
                }
                forceFlush() {
                    return this._delegate.forceFlush();
                }
                shutdown() {
                    return this._delegate.shutdown();
                }
            }
        },
        62413: (t, e, r) => {
            r.d(e, { s: () => i });
            var n = r(85853);
            function i(t) {
                try {
                    var e;
                    n.s.error(
                        ((e = t),
                        'string' == typeof e
                            ? e
                            : JSON.stringify(
                                  (function (t) {
                                      let e = {},
                                          r = t;
                                      for (; null !== r;)
                                          (Object.getOwnPropertyNames(r).forEach((t) => {
                                              if (e[t]) return;
                                              let n = r[t];
                                              n && (e[t] = String(n));
                                          }),
                                              (r = Object.getPrototypeOf(r)));
                                      return e;
                                  })(e),
                              )),
                    );
                } catch {}
            }
        },
        63695: (t, e, r) => {
            r.d(e, { RH: () => o, dM: () => a, w9: () => i });
            var n = r(29518),
                i = '0000000000000000',
                o = '00000000000000000000000000000000',
                a = { traceId: o, spanId: i, traceFlags: n.X.NONE };
        },
        63820: (t, e, r) => {
            r.d(e, { _: () => h });
            var n = r(52490),
                i = function (t, e) {
                    var r = 'function' == typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var n,
                        i,
                        o = r.call(t),
                        a = [];
                    try {
                        for (; (void 0 === e || e-- > 0) && !(n = o.next()).done;) a.push(n.value);
                    } catch (t) {
                        i = { error: t };
                    } finally {
                        try {
                            n && !n.done && (r = o.return) && r.call(o);
                        } finally {
                            if (i) throw i.error;
                        }
                    }
                    return a;
                },
                o = function (t, e, r) {
                    if (r || 2 == arguments.length)
                        for (var n, i = 0, o = e.length; i < o; i++) (!n && i in e) || (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
                    return t.concat(n || Array.prototype.slice.call(e));
                },
                a = (function () {
                    function t() {}
                    return (
                        (t.prototype.active = function () {
                            return n.l;
                        }),
                        (t.prototype.with = function (t, e, r) {
                            for (var n = [], a = 3; a < arguments.length; a++) n[a - 3] = arguments[a];
                            return e.call.apply(e, o([r], i(n), !1));
                        }),
                        (t.prototype.bind = function (t, e) {
                            return e;
                        }),
                        (t.prototype.enable = function () {
                            return this;
                        }),
                        (t.prototype.disable = function () {
                            return this;
                        }),
                        t
                    );
                })(),
                s = r(39160),
                u = r(58785),
                c = function (t, e) {
                    var r = 'function' == typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var n,
                        i,
                        o = r.call(t),
                        a = [];
                    try {
                        for (; (void 0 === e || e-- > 0) && !(n = o.next()).done;) a.push(n.value);
                    } catch (t) {
                        i = { error: t };
                    } finally {
                        try {
                            n && !n.done && (r = o.return) && r.call(o);
                        } finally {
                            if (i) throw i.error;
                        }
                    }
                    return a;
                },
                l = function (t, e, r) {
                    if (r || 2 == arguments.length)
                        for (var n, i = 0, o = e.length; i < o; i++) (!n && i in e) || (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
                    return t.concat(n || Array.prototype.slice.call(e));
                },
                p = 'context',
                f = new a(),
                h = (function () {
                    function t() {}
                    return (
                        (t.getInstance = function () {
                            return (this._instance || (this._instance = new t()), this._instance);
                        }),
                        (t.prototype.setGlobalContextManager = function (t) {
                            return (0, s.$G)(p, t, u.K.instance());
                        }),
                        (t.prototype.active = function () {
                            return this._getContextManager().active();
                        }),
                        (t.prototype.with = function (t, e, r) {
                            for (var n, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                            return (n = this._getContextManager()).with.apply(n, l([t, e, r], c(i), !1));
                        }),
                        (t.prototype.bind = function (t, e) {
                            return this._getContextManager().bind(t, e);
                        }),
                        (t.prototype._getContextManager = function () {
                            return (0, s.mS)(p) || f;
                        }),
                        (t.prototype.disable = function () {
                            (this._getContextManager().disable(), (0, s.kv)(p, u.K.instance()));
                        }),
                        t
                    );
                })();
        },
        75675: (t, e, r) => {
            r.d(e, { ug: () => n });
            let n = performance;
        },
        76704: (t, e, r) => {
            r.d(e, { IP: () => c, YA: () => u, hX: () => s });
            var n = r(63695),
                i = r(355),
                o = /^([0-9a-f]{32})$/i,
                a = /^[0-9a-f]{16}$/i;
            function s(t) {
                return o.test(t) && t !== n.RH;
            }
            function u(t) {
                var e;
                return s(t.traceId) && ((e = t.spanId), a.test(e) && e !== n.w9);
            }
            function c(t) {
                return new i.d(t);
            }
        },
        77728: (t, e, r) => {
            function n(t, e) {
                let r = { attributes: o(t.attributes, e), droppedAttributesCount: 0 },
                    n = t.schemaUrl;
                return (n && '' !== n && (r.schemaUrl = n), r);
            }
            function i(t) {
                return { name: t.name, version: t.version };
            }
            function o(t, e) {
                return Object.keys(t).map((r) => a(r, t[r], e));
            }
            function a(t, e, r) {
                return { key: t, value: s(e, r) };
            }
            function s(t, e) {
                let r = typeof t;
                if ('string' === r) return { stringValue: t };
                if ('number' === r) return Number.isInteger(t) ? { intValue: t } : { doubleValue: t };
                if ('boolean' === r) return { boolValue: t };
                if (t instanceof Uint8Array) return { bytesValue: e.encodeUint8Array(t) };
                if (Array.isArray(t)) {
                    let r = Array(t.length);
                    for (let n = 0; n < t.length; n++) r[n] = s(t[n], e);
                    return { arrayValue: { values: r } };
                }
                if ('object' === r && null != t) {
                    let r = Object.keys(t),
                        n = Array(r.length);
                    for (let i = 0; i < r.length; i++) n[i] = { key: r[i], value: s(t[r[i]], e) };
                    return { kvlistValue: { values: n } };
                }
                return {};
            }
            r.d(e, { EB: () => a, Ff: () => s, Zg: () => n, Zs: () => o, d1: () => i });
        },
        83081: (t, e, r) => {
            r.d(e, { M: () => f });
            var n = r(85853);
            class i {
                _transport;
                constructor(t) {
                    this._transport = t;
                }
                retry(t, e, r) {
                    return new Promise((n, i) => {
                        setTimeout(() => {
                            this._transport.send(t, e).then(n, i);
                        }, r);
                    });
                }
                async send(t, e) {
                    let r = 5,
                        i = 1e3,
                        o = Date.now() + e,
                        a = await this._transport.send(t, e);
                    for (; 'retryable' === a.status && r > 0;) {
                        r--;
                        let e = Math.max(Math.min(i * (1 + (0.4 * Math.random() - 0.2)), 5e3), 0);
                        i *= 1.5;
                        let s = a.retryInMillis ?? e,
                            u = o - Date.now();
                        if (s > u) return (n.s.info(`Export retry time ${Math.round(s)}ms exceeds remaining timeout ${Math.round(u)}ms, not retrying further.`), a);
                        (n.s.verbose(`Scheduling export retry in ${Math.round(s)}ms`), (a = await this.retry(t, u, s)));
                    }
                    return (
                        'success' === a.status
                            ? n.s.verbose(`Export succeeded after ${5 - r} retry attempts.`)
                            : 'retryable' === a.status
                              ? n.s.info('Export failed after maximum retry attempts (5).')
                              : n.s.info(`Export failed with non-retryable error: ${a.error}`),
                        a
                    );
                }
                shutdown() {
                    return this._transport.shutdown();
                }
            }
            class o {
                _concurrencyLimit;
                _sendingPromises = [];
                constructor(t) {
                    this._concurrencyLimit = t;
                }
                pushPromise(t) {
                    if (this.hasReachedLimit()) throw Error('Concurrency Limit reached');
                    this._sendingPromises.push(t);
                    let e = () => {
                        let e = this._sendingPromises.indexOf(t);
                        this._sendingPromises.splice(e, 1);
                    };
                    t.then(e, e);
                }
                hasReachedLimit() {
                    return this._sendingPromises.length >= this._concurrencyLimit;
                }
                async awaitAll() {
                    await Promise.all(this._sendingPromises);
                }
            }
            var a = r(77107);
            class s extends Error {
                code;
                name = 'OTLPExporterError';
                data;
                constructor(t, e, r) {
                    (super(t), (this.data = r), (this.code = e));
                }
            }
            class u {
                _diagLogger;
                _transport;
                _serializer;
                _responseHandler;
                _promiseQueue;
                _timeout;
                constructor(t, e, r, i, o) {
                    ((this._transport = t),
                        (this._serializer = e),
                        (this._responseHandler = r),
                        (this._promiseQueue = i),
                        (this._timeout = o),
                        (this._diagLogger = n.s.createComponentLogger({ namespace: 'OTLPExportDelegate' })));
                }
                export(t, e) {
                    if ((this._diagLogger.debug('items to be sent', t), this._promiseQueue.hasReachedLimit()))
                        return void e({ code: a.V.FAILED, error: Error('Concurrent export limit reached') });
                    let r = this._serializer.serializeRequest(t);
                    if (null == r) return void e({ code: a.V.FAILED, error: Error('Nothing to send') });
                    this._promiseQueue.pushPromise(
                        this._transport.send(r, this._timeout).then(
                            (t) => {
                                if ('success' === t.status) {
                                    if (null != t.data)
                                        try {
                                            this._responseHandler.handleResponse(this._serializer.deserializeResponse(t.data));
                                        } catch (e) {
                                            this._diagLogger.warn(
                                                'Export succeeded but could not deserialize response - is the response specification compliant?',
                                                e,
                                                t.data,
                                            );
                                        }
                                    e({ code: a.V.SUCCESS });
                                    return;
                                }
                                if ('failure' === t.status && t.error) return void e({ code: a.V.FAILED, error: t.error });
                                'retryable' === t.status
                                    ? e({ code: a.V.FAILED, error: t.error ?? new s('Export failed with retryable status') })
                                    : e({ code: a.V.FAILED, error: new s('Export failed with unknown error') });
                            },
                            (t) => e({ code: a.V.FAILED, error: t }),
                        ),
                    );
                }
                forceFlush() {
                    return this._promiseQueue.awaitAll();
                }
                async shutdown() {
                    (this._diagLogger.debug('shutdown started'), await this.forceFlush(), this._transport.shutdown());
                }
            }
            let c = 0,
                l = 0;
            class p {
                _parameters;
                constructor(t) {
                    this._parameters = t;
                }
                async send(t, e) {
                    var r, i;
                    let o = new AbortController(),
                        a = setTimeout(() => o.abort(), e),
                        s = globalThis.fetch;
                    'function' == typeof s.__original && (s = s.__original);
                    let u = t.byteLength,
                        p = c + u > 61440,
                        f = l >= 9,
                        h = !p && !f;
                    h ? ((c += u), l++) : n.s.debug(`keepalive disabled: ${(u / 1024).toFixed(1)}KB payload, ${l} pending (${p ? 'size limit' : 'count limit'})`);
                    try {
                        let e = new URL(this._parameters.url),
                            i = await s(e.href, {
                                method: 'POST',
                                headers: await this._parameters.headers(),
                                body: t,
                                signal: o.signal,
                                keepalive: h,
                                mode: globalThis.location ? (globalThis.location.origin === e.origin ? 'same-origin' : 'cors') : 'no-cors',
                            });
                        if (i.status >= 200 && i.status <= 299) return (n.s.debug(`export response success (status: ${i.status})`), { status: 'success' });
                        if (((r = i.status), 429 === r || 502 === r || 503 === r || 504 === r)) {
                            n.s.warn(`export response retryable (status: ${i.status})`);
                            let t = i.headers.get('Retry-After'),
                                e = (function (t) {
                                    if (null == t) return;
                                    let e = Number.parseInt(t, 10);
                                    if (Number.isInteger(e)) return e > 0 ? 1e3 * e : -1;
                                    let r = new Date(t).getTime() - Date.now();
                                    return r >= 0 ? r : 0;
                                })(t);
                            return { status: 'retryable', retryInMillis: e };
                        }
                        return (
                            n.s.error(`export response failure (status: ${i.status})`),
                            { status: 'failure', error: Error(`Fetch request failed with non-retryable status ${i.status}`) }
                        );
                    } catch (t) {
                        if ((i = t) instanceof TypeError && !i.cause)
                            return (
                                n.s.warn(`export request retryable (network error: ${t})`),
                                { status: 'retryable', error: Error('Fetch request encountered a network error', { cause: t }) }
                            );
                        return (n.s.error(`export request failure (error: ${t})`), { status: 'failure', error: Error('Fetch request errored', { cause: t }) });
                    } finally {
                        (clearTimeout(a), h && ((c -= u), l--));
                    }
                }
                shutdown() {}
            }
            function f(t, e, r, a) {
                var s, c, l, f, h, d, g, y, m, _;
                return (
                    (g =
                        ((s = {
                            url: t.url,
                            timeoutMillis: t.timeoutMillis,
                            headers: (function (t) {
                                if ('function' == typeof t.headers) return t.headers;
                                var e = t.headers;
                                return null != e ? async () => e : void 0;
                            })(t),
                            concurrencyLimit: t.concurrencyLimit,
                        }),
                        {
                            ...((c = {}),
                            (l = { timeoutMillis: 1e4, concurrencyLimit: 30, compression: 'none', headers: async () => a, url: 'http://localhost:4318/' + r }),
                            {
                                timeoutMillis: (function (t) {
                                    if (Number.isFinite(t) && t > 0) return t;
                                    throw Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${t}')`);
                                })(s.timeoutMillis ?? c.timeoutMillis ?? l.timeoutMillis),
                                concurrencyLimit: s.concurrencyLimit ?? c.concurrencyLimit ?? l.concurrencyLimit,
                                compression: s.compression ?? c.compression ?? l.compression,
                            }),
                            headers:
                                ((f = s.headers),
                                (h = c.headers),
                                (d = l.headers),
                                async () => {
                                    let t = { ...(await d()) },
                                        e = {};
                                    return (
                                        null != h && Object.assign(e, await h()),
                                        null != f &&
                                            Object.assign(
                                                e,
                                                (function (t) {
                                                    let e = {};
                                                    return (
                                                        Object.entries(t ?? {}).forEach(([t, r]) => {
                                                            void 0 !== r ? (e[t] = String(r)) : n.s.warn(`Header "${t}" has invalid value (${r}) and will be ignored`);
                                                        }),
                                                        e
                                                    );
                                                })(await f()),
                                            ),
                                        Object.assign(e, t)
                                    );
                                }),
                            url:
                                (function (t) {
                                    if (null != t)
                                        try {
                                            let e = globalThis.location?.href;
                                            return new URL(t, e).href;
                                        } catch {
                                            throw Error(`Configuration: Could not parse user-provided export URL: '${t}'`);
                                        }
                                })(s.url) ??
                                c.url ??
                                l.url,
                        })),
                    (y = e),
                    (m = { transport: new i({ transport: new p(g) }.transport), serializer: y, promiseHandler: new o(g.concurrencyLimit) }),
                    (_ = { timeout: g.timeoutMillis }),
                    new u(
                        m.transport,
                        m.serializer,
                        {
                            handleResponse(t) {
                                null != t &&
                                    Object.prototype.hasOwnProperty.call(t, 'partialSuccess') &&
                                    null != t.partialSuccess &&
                                    0 !== Object.keys(t.partialSuccess).length &&
                                    n.s.warn('Received Partial Success response:', JSON.stringify(t.partialSuccess));
                            },
                        },
                        m.promiseHandler,
                        _.timeout,
                    )
                );
            }
        },
        88223: (t, e, r) => {
            r.d(e, { Ir: () => p, KJ: () => a, VL: () => l, W5: () => s, _5: () => o, lg: () => i, mw: () => f, u5: () => u, w_: () => c });
            var n = r(75675);
            function i(t) {
                return [Math.trunc(t / 1e3), Math.round((t % 1e3) * 1e6)];
            }
            function o(t) {
                return f(i(n.ug.timeOrigin), i('number' == typeof t ? t : n.ug.now()));
            }
            function a(t) {
                if (l(t)) return t;
                if ('number' == typeof t)
                    if (t < n.ug.timeOrigin) return o(t);
                    else return i(t);
                if (t instanceof Date) return i(t.getTime());
                throw TypeError('Invalid input type');
            }
            function s(t, e) {
                let r = e[0] - t[0],
                    n = e[1] - t[1];
                return (n < 0 && ((r -= 1), (n += 1e9)), [r, n]);
            }
            function u(t) {
                return 1e9 * t[0] + t[1];
            }
            function c(t) {
                return 1e6 * t[0] + t[1] / 1e3;
            }
            function l(t) {
                return Array.isArray(t) && 2 === t.length && 'number' == typeof t[0] && 'number' == typeof t[1];
            }
            function p(t) {
                return l(t) || 'number' == typeof t || t instanceof Date;
            }
            function f(t, e) {
                let r = [t[0] + e[0], t[1] + e[1]];
                return (r[1] >= 1e9 && ((r[1] -= 1e9), (r[0] += 1)), r);
            }
        },
        91618: (t, e, r) => {
            r.d(e, { W3CTraceContextPropagator: () => n.lm, mM: () => a });
            var n = r(98339),
                i = r(95855),
                o = r(51342);
            let a = {
                _export: function (t, e) {
                    return new Promise((r) => {
                        i._.with((0, o.M1)(i._.active()), () => {
                            t.export(e, r);
                        });
                    });
                },
            };
        },
        95855: (t, e, r) => {
            r.d(e, { _: () => n });
            var n = r(63820)._.getInstance();
        },
        98339: (t, e, r) => {
            r.d(e, { lm: () => _ });
            var n = r(54625),
                i = r(76704),
                o = r(29518),
                a = r(51342);
            let s = '[_0-9a-z-*/]',
                u = `[a-z]${s}{0,255}`,
                c = `[a-z0-9]${s}{0,240}@[a-z]${s}{0,13}`,
                l = RegExp(`^(?:${u}|${c})$`),
                p = /^[ -~]{0,255}[!-~]$/,
                f = /,|=/;
            function h(t) {
                return p.test(t) && !f.test(t);
            }
            class d {
                _length;
                _rawTraceState;
                _internalState;
                constructor(t) {
                    ((this._rawTraceState = 'string' == typeof t ? t : ''), (this._length = this._rawTraceState.length));
                }
                set(t, e) {
                    if (!l.test(t) || !h(e)) return this;
                    let r = this._getState(),
                        n = r.get(t),
                        i = this._length;
                    if (('string' == typeof n ? (i += e.length - n.length) : (i += t.length + e.length + (r.size > 0 ? 2 : 1)), i > 512)) return this;
                    let o = new Map(r);
                    return (o.delete(t), o.set(t, e), this._fromState(o, i));
                }
                unset(t) {
                    let e = this._getState(),
                        r = e.get(t);
                    if ('string' != typeof r) return this;
                    let n = this._length - (t.length + r.length + 1);
                    e.size > 1 && (n -= 1);
                    let i = new Map(e);
                    return (i.delete(t), this._fromState(i, n));
                }
                get(t) {
                    return this._getState().get(t);
                }
                serialize() {
                    let t = '',
                        e = 0;
                    for (let r of this._getState()) (e > 0 && (t = ',' + t), (t = `${r[0]}=${r[1]}` + t), e++);
                    return t;
                }
                _getState() {
                    if (this._internalState) return this._internalState;
                    let t = this._rawTraceState.split(','),
                        e = new Map(),
                        r = 0;
                    for (let n of t) {
                        let t = n.trim(),
                            i = t.indexOf('=');
                        if (-1 === i) continue;
                        let o = t.slice(0, i),
                            a = t.slice(i + 1);
                        if (!l.test(o) || !h(a)) continue;
                        let s = r + t.length + +(e.size > 0);
                        if (!(s > 512) && (e.set(o, a), (r = s), e.size >= 32)) break;
                    }
                    return ((this._length = r), (this._internalState = new Map(Array.from(e.entries()).reverse())), this._internalState);
                }
                _fromState(t, e) {
                    let r = Object.create(d.prototype);
                    return ((r._internalState = t), (r._length = e), r);
                }
            }
            let g = 'traceparent',
                y = 'tracestate',
                m = RegExp('^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$');
            class _ {
                inject(t, e, r) {
                    let s = n.u.getSpanContext(t);
                    if (!s || (0, a.Zf)(t) || !(0, i.YA)(s)) return;
                    let u = `00-${s.traceId}-${s.spanId}-0${Number(s.traceFlags || o.X.NONE).toString(16)}`;
                    (r.set(e, g, u), s.traceState && r.set(e, y, s.traceState.serialize()));
                }
                extract(t, e, r) {
                    let i = r.get(e, g);
                    if (!i) return t;
                    let o = Array.isArray(i) ? i[0] : i;
                    if ('string' != typeof o) return t;
                    let a = (function (t) {
                        let e = m.exec(t);
                        return !e || ('00' === e[1] && e[5]) ? null : { traceId: e[2], spanId: e[3], traceFlags: parseInt(e[4], 16) };
                    })(o);
                    if (!a) return t;
                    a.isRemote = !0;
                    let s = r.get(e, y);
                    if (s) {
                        let t = Array.isArray(s) ? s.join(',') : s;
                        a.traceState = new d('string' == typeof t ? t : void 0);
                    }
                    return n.u.setSpanContext(t, a);
                }
                fields() {
                    return [g, y];
                }
            }
        },
        99240: (t, e, r) => {
            r.d(e, { w9: () => a });
            var n = r(88223),
                i = r(66261).Buffer;
            function o(t) {
                return t;
            }
            let a = {
                encodeHrTime:
                    'undefined' != typeof BigInt
                        ? function (t) {
                              return (function (t) {
                                  let e = BigInt(1e9);
                                  return BigInt(Math.trunc(t[0])) * e + BigInt(Math.trunc(t[1]));
                              })(t).toString();
                          }
                        : n.u5,
                encodeSpanContext: o,
                encodeOptionalSpanContext: o,
                encodeUint8Array: (t) => {
                    if (void 0 !== i) return i.from(t).toString('base64');
                    let e = Array(t.length);
                    for (let r = 0; r < t.length; r++) e[r] = String.fromCharCode(t[r]);
                    return btoa(e.join(''));
                },
            };
        },
    },
]);
