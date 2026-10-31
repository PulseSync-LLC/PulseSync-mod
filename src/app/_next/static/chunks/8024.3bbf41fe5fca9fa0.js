(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8024],
    {
        5360: (e, t, r) => {
            'use strict';
            function s(e, ...t) {
                let r = e('i18n-jwt-token', t[0]);
                return r ? { 'X-Authorization': r } : {};
            }
            r.d(t, { e: () => s });
        },
        8819: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => n });
            var s = r(17017),
                o = r(91136),
                i = r(20969);
            class n {
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
                    let t = new o.m('GET method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: s.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'GET', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'GET' }, void 0, t), Promise.reject(t));
                }
                async put(e) {
                    let t = new o.m('PUT method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: s.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'PUT', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'PUT' }, void 0, t), Promise.reject(t));
                }
                async patch(e) {
                    let t = new o.m('PATCH method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: s.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'PATCH', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'PATCH' }, void 0, t), Promise.reject(t));
                }
                async delete(e) {
                    let t = new o.m('DELETE method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: s.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'DELETE', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'DELETE' }, void 0, t), Promise.reject(t));
                }
                async head(e) {
                    let t = new o.m('HEAD method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: s.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'HEAD', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'HEAD' }, void 0, t), Promise.reject(t));
                }
                async post(e, t = {}) {
                    return this.request(e, { ...t, method: 'POST' });
                }
                async request(e, t) {
                    let r,
                        i,
                        n = t.method || 'GET';
                    if ('POST' !== n)
                        throw new o.m(`${n} method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.`, {
                            code: s.Z.METHOD_NOT_SUPPORTED,
                            cause: { method: n, supportedMethods: ['POST'] },
                        });
                    if ('undefined' == typeof navigator || 'function' != typeof navigator.sendBeacon)
                        throw new o.m('navigator.sendBeacon is not available in this environment', { code: s.Z.NOT_AVAILABLE });
                    try {
                        let s = this.mergeOptions(t),
                            o = this.buildUrl(e, s);
                        await this.executeBeforeRequestHooks(o, s);
                        let i = this.prepareBeaconData(s);
                        return (r = await this.executeWithRetries(o, i, s));
                    } catch (e) {
                        throw ((i = e), await this.executeBeforeErrorHooks(e, t), e);
                    } finally {
                        this.executeRequestDoneHooks(e, t, r, i);
                    }
                }
                mergeOptions(e) {
                    return { ...this.defaultOptions, ...e, headers: { ...this.defaultOptions.headers, ...e.headers } };
                }
                buildUrl(e, t) {
                    let r = e;
                    if (t.prefixUrl) {
                        let s = t.prefixUrl.toString().replace(/\/$/, ''),
                            o = e.replace(/^\//, '');
                        r = `${s}/${o}`;
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
                        let s = {
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
                        await r(s);
                    }
                }
                async executeBeforeErrorHooks(e, t) {
                    let r = [...this.beforeErrorHooks, ...(t?.hooks?.beforeError ?? [])],
                        s = e instanceof o.m ? e : new o.m(e instanceof Error ? e.message : 'Unknown error', { cause: e });
                    for (let e of r) {
                        let t = await e(s);
                        t instanceof o.m && Object.assign(s, t);
                    }
                }
                executeRequestDoneHooks(e, t, r, s) {
                    this.requestDoneHooks.forEach((o) => {
                        o({ url: e, options: t, response: r, error: s });
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
                                    new o.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: s.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            text: async () =>
                                Promise.reject(
                                    new o.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: s.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            arrayBuffer: async () =>
                                Promise.reject(
                                    new o.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: s.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            clone: () => this.createMockResponse(e, t),
                            request: { prefixUrl: t.prefixUrl, headers: t.headers, searchParams: t.searchParams, method: t.method },
                        }
                    );
                }
                async executeWithRetries(e, t, r) {
                    let i = r.retry?.config,
                        n = i?.totalRequestsLimit ?? 1,
                        a = new o.m('All retry attempts failed', { code: s.Z.RETRY_EXHAUSTED });
                    for (let a = 1; a <= n; a++)
                        try {
                            if (!navigator.sendBeacon(e, t)) {
                                let e = new o.m('Failed to queue beacon request.', { code: s.Z.QUEUE_FAILED });
                                if (await this.handleRetryableError(e, a, n, i)) continue;
                                throw e;
                            }
                            return this.createMockResponse(e, r);
                        } catch (t) {
                            let e = t instanceof o.m ? t : new o.m(t instanceof Error ? t.message : 'Unknown error', { cause: t, code: s.Z.RETRY_EXHAUSTED });
                            if (await this.handleRetryableError(e, a, n, i, r)) continue;
                            throw e;
                        }
                    throw a;
                }
                async handleRetryableError(e, t, r, s, o) {
                    if (t < r && this.shouldRetryForError(e, s)) {
                        await this.executeBeforeRetryHooks(e, t, o);
                        let r = this.getRetryDelay(e, t - 1, s);
                        return (r > 0 && (await (0, i.c)(r)), !0);
                    }
                    return !1;
                }
                async executeBeforeRetryHooks(e, t, r) {
                    for (let s of [...this.beforeRetryHooks, ...(r?.hooks?.beforeRetry ?? [])]) await s(e, t);
                }
                shouldRetryForError(e, t) {
                    return !!t && !!t.statusCodes.NON_HTTP_ERROR && e.code === s.Z.QUEUE_FAILED;
                }
                getRetryDelay(e, t, r) {
                    if (!r) return 0;
                    let s = r.statusCodes.NON_HTTP_ERROR,
                        o = s?.attempts;
                    return !o || t >= o.length ? 0 : (o[t] ?? 0);
                }
            }
        },
        11107: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => l });
            var s = r(94114),
                o = r(77096),
                i = r(89525),
                n = r(69629);
            function a(e, t, r) {
                let s = {};
                if (void 0 === e) return s;
                for (let [o, i] of Object.entries(e)) {
                    let e = r ? `${r}.${o}` : o;
                    switch (typeof i) {
                        case 'string':
                        case 'number':
                        case 'boolean':
                            s[e] = i;
                            break;
                        case 'object': {
                            if (Array.isArray(i)) {
                                s[e] = i.map((e) => ('object' == typeof e ? u(e) : String(e)));
                                break;
                            }
                            let r = u(i);
                            if (r.includes('[Circular]')) {
                                s[e] = '[Circular]';
                                break;
                            }
                            if (t <= 0 || null === i) {
                                s[e] = r;
                                break;
                            }
                            Object.assign(s, a(i, t - 1, e));
                            break;
                        }
                        case 'undefined':
                            s[e] = 'undefined';
                            break;
                        default:
                            s[e] = void 0;
                    }
                }
                return s;
            }
            function u(e) {
                return null === e ? 'null' : n(e);
            }
            var c = { trace: i.F.TRACE, debug: i.F.DEBUG, info: i.F.INFO, warn: i.F.WARN, error: i.F.ERROR, fatal: i.F.FATAL },
                l = class e {
                    level;
                    maxAttributesDepth;
                    name;
                    attributes;
                    pendingLogs = [];
                    pendingLogsBufferMaxSize;
                    internalLogger;
                    constructor(e = {}) {
                        ((this.attributes = e.commonAttributes),
                            (this.maxAttributesDepth = e.maxAttributesDepth || 0),
                            (this.name = e.name || 'otel-sdk'),
                            (this.level = this.getLogLevel(e.level)),
                            (this.pendingLogsBufferMaxSize = void 0 === e.pendingLogsBufferMaxSize ? 1e3 : Math.max(0, e.pendingLogsBufferMaxSize)));
                        let t = (0, s.n)();
                        t.internalLogger
                            ? (this.internalLogger = t.internalLogger)
                            : t.sdkReady || t.onReadyCallbacks?.push(({ logger: e }) => this.setInternalLogger(e));
                    }
                    getLogLevel(e) {
                        return 'string' == typeof e ? c[e] || i.F.INFO : (e ?? i.F.INFO);
                    }
                    child(t = {}) {
                        let r = 'function' == typeof this.attributes || 'function' == typeof t.commonAttributes,
                            s = () => ({ ...this.getAttributes(this.attributes), ...this.getAttributes(t.commonAttributes) });
                        return new e({
                            commonAttributes: void 0 === this.attributes && void 0 === t.commonAttributes ? void 0 : r ? s : s(),
                            name: t.name || `${this.name}-child`,
                            level: t.level ?? this.level,
                            maxAttributesDepth: t.maxAttributesDepth ?? this.maxAttributesDepth,
                            pendingLogsBufferMaxSize: t.pendingLogsBufferMaxSize ?? this.pendingLogsBufferMaxSize,
                        });
                    }
                    getAttributes(e) {
                        return void 0 === e ? {} : 'function' == typeof e ? e() : e;
                    }
                    log(e, t, r) {
                        let s = 'object' == typeof e || t >= i.F.ERROR ? this.processErrorInput(e) : {};
                        if (t >= this.level) {
                            let o = this.getAttributes(this.attributes),
                                n = { 'labels.logger': this.name, ...o, ...s, ...r },
                                u = {
                                    severityNumber: t,
                                    severityText: i.F[t],
                                    body: 'string' == typeof e ? e : e.message,
                                    attributes: this.maxAttributesDepth ? a(n, this.maxAttributesDepth) : n,
                                    timestamp: Date.now(),
                                };
                            this.internalLogger
                                ? this.internalLogger.emit(u)
                                : this.pendingLogs.length < this.pendingLogsBufferMaxSize
                                  ? this.pendingLogs.push(u)
                                  : console.warn(`[OtelLogger:${this.name}] Pending logs buffer overflow (max ${this.pendingLogsBufferMaxSize}), dropping log:`, u.body);
                        }
                    }
                    setInternalLogger(e) {
                        if (((this.internalLogger = e), 0 !== this.pendingLogs.length)) {
                            for (let t of this.pendingLogs) e.emit(t);
                            this.pendingLogs.length = 0;
                        }
                    }
                    fatal(e, t) {
                        this.log(e, i.F.FATAL, t);
                    }
                    error(e, t) {
                        this.log(e, i.F.ERROR, t);
                    }
                    warn(e, t) {
                        this.log(e, i.F.WARN, t);
                    }
                    info(e, t) {
                        this.log(e, i.F.INFO, t);
                    }
                    debug(e, t) {
                        this.log(e, i.F.DEBUG, t);
                    }
                    trace(e, t) {
                        this.log(e, i.F.TRACE, t);
                    }
                    extractCauseStack(e, t = 0) {
                        if (e && 'object' == typeof e && !(t >= 10)) {
                            if ('stack' in e && 'string' == typeof e.stack) return e.stack;
                            if ('cause' in e) return this.extractCauseStack(e.cause, t + 1);
                        }
                    }
                    processErrorInput(e) {
                        let t = {};
                        return (
                            'string' == typeof e
                                ? ((t[o.wL] = e), (t[o.Mb] = Error('noop').stack))
                                : ((t[o.oJ] = e.name),
                                  (t[o.d6] = e.name),
                                  (t[o.wL] = e.message),
                                  (t[o.Mb] = e.stack || this.extractCauseStack(e?.cause) || Error('noop').stack),
                                  e?.cause && (t['error.cause'] = a(e?.cause, 3))),
                            t
                        );
                    }
                };
        },
        12073: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => a });
            var s = r(88109),
                o = r(51729),
                i = r(97295);
            let n = ['fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
            class a {
                iframe;
                constructor({ pixelId: e, ...t }) {
                    this.iframe = new o.K({ ...t, connection: { tagSystem: s.d.FbqV1, args: { pixelId: e } }, prepareIframeUrl: this.prepareIframeUrl.bind(this) });
                }
                connect() {
                    this.iframe.connect();
                }
                send(e, t) {
                    this.iframe.send({ event: e, data: t });
                }
                dispose() {
                    this.iframe.dispose();
                }
                prepareIframeUrl(e) {
                    (0, i.B)(new URL(window.location.href), e, n);
                }
            }
        },
        12990: (e, t, r) => {
            'use strict';
            r.d(t, { K9: () => h });
            let s = Symbol.for('io.opentelemetry.js.api.logs'),
                o = globalThis;
            var i = r(66832);
            class n {
                getLogger(e, t, r) {
                    return new i.P();
                }
            }
            let a = new n();
            class u {
                constructor(e, t, r, s) {
                    ((this._provider = e), (this.name = t), (this.version = r), (this.options = s));
                }
                emit(e) {
                    this._getLogger().emit(e);
                }
                enabled(e) {
                    return this._getLogger().enabled(e);
                }
                _getLogger() {
                    if (this._delegate) return this._delegate;
                    let e = this._provider._getDelegateLogger(this.name, this.version, this.options);
                    return e ? ((this._delegate = e), this._delegate) : i.G;
                }
            }
            class c {
                getLogger(e, t, r) {
                    var s;
                    return null != (s = this._getDelegateLogger(e, t, r)) ? s : new u(this, e, t, r);
                }
                _getDelegate() {
                    var e;
                    return null != (e = this._delegate) ? e : a;
                }
                _setDelegate(e) {
                    this._delegate = e;
                }
                _getDelegateLogger(e, t, r) {
                    var s;
                    return null == (s = this._delegate) ? void 0 : s.getLogger(e, t, r);
                }
            }
            class l {
                constructor() {
                    this._proxyLoggerProvider = new c();
                }
                static getInstance() {
                    return (this._instance || (this._instance = new l()), this._instance);
                }
                setGlobalLoggerProvider(e) {
                    return o[s] ? this.getLoggerProvider() : ((o[s] = (t) => (1 === t ? e : a)), this._proxyLoggerProvider._setDelegate(e), e);
                }
                getLoggerProvider() {
                    var e, t;
                    return null != (t = null == (e = o[s]) ? void 0 : e.call(o, 1)) ? t : this._proxyLoggerProvider;
                }
                getLogger(e, t, r) {
                    return this.getLoggerProvider().getLogger(e, t, r);
                }
                disable() {
                    (delete o[s], (this._proxyLoggerProvider = new c()));
                }
            }
            let h = l.getInstance();
        },
        14372: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => o });
            var s = r(24897);
            class o extends s.t {
                name = 'InvalidArgumentException';
                constructor(e, t) {
                    (super(`Invalid argument "${e}": ${t}`, { code: 'E_TAG_SANDBOX_INVALID_ARGUMENT', data: { argument: e, reason: t } }),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        16936: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => n });
            var s = r(94114),
                o = r(77096),
                i = r(87125),
                n = async ({ app: e, environment: t, traces: n, logs: a, metrics: u, instrumentations: c, traceparent: l }) => {
                    let h,
                        d,
                        p,
                        f = (0, i.QZ)({
                            'service.instance.id': e.hostname,
                            'host.name': e.hostname,
                            [o.HZ]: e.version,
                            'deployment.environment.name': t,
                            [o.UX]: e.name,
                        });
                    if (n) {
                        let { initBrowserTraces: e } = await Promise.all([r.e(7087), r.e(6178)]).then(r.bind(r, 96178));
                        h = await e(f, n, l);
                    }
                    if (a) {
                        let { initBrowserLogs: e } = await Promise.all([r.e(7087), r.e(7860)]).then(r.bind(r, 37860));
                        d = e(f, a);
                    }
                    if (u) {
                        let { initBrowserMetrics: e } = await Promise.all([r.e(7087), r.e(7932)]).then(r.bind(r, 7932));
                        p = e(f, u);
                    }
                    let g = () => {};
                    if (c) {
                        let { enableInstrumentations: e } = await r.e(6092).then(r.bind(r, 26092));
                        g = e(c, h, p, d);
                    }
                    return ((0, s.r)(), { shutdown: g });
                };
        },
        20969: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => s });
            let s = async (e) => new Promise((t) => setTimeout(t, e));
        },
        24897: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: o = {}, ...i } = t,
                        n = e || 'Internal error';
                    (super(n, i), (this.message = n), (this.code = r), (this.data = o), (this.stack = Error(n).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        28961: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => u });
            var s = r(72886),
                o = new ((function () {
                    function e() {}
                    return (
                        (e.prototype.getMeter = function (e, t, r) {
                            return s.Dq;
                        }),
                        e
                    );
                })())(),
                i = r(39160),
                n = r(58785),
                a = 'metrics',
                u = (function () {
                    function e() {}
                    return (
                        (e.getInstance = function () {
                            return (this._instance || (this._instance = new e()), this._instance);
                        }),
                        (e.prototype.setGlobalMeterProvider = function (e) {
                            return (0, i.$G)(a, e, n.K.instance());
                        }),
                        (e.prototype.getMeterProvider = function () {
                            return (0, i.mS)(a) || o;
                        }),
                        (e.prototype.getMeter = function (e, t, r) {
                            return this.getMeterProvider().getMeter(e, t, r);
                        }),
                        (e.prototype.disable = function () {
                            (0, i.kv)(a, n.K.instance());
                        }),
                        e
                    );
                })().getInstance();
        },
        32813: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => x });
            class s extends Error {
                constructor(e, t, r) {
                    let s = e.status || 0 === e.status ? e.status : '',
                        o = e.statusText || '',
                        i = `${s} ${o}`.trim();
                    (super(`Request failed with ${i ? `status code ${i}` : 'an unknown error'}`),
                        Object.defineProperty(this, 'response', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'HTTPError'),
                        (this.response = e),
                        (this.request = t),
                        (this.options = r));
                }
            }
            class o extends Error {
                constructor(e) {
                    (super('Request timed out'),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'TimeoutError'),
                        (this.request = e));
                }
            }
            let i = (e) => null !== e && 'object' == typeof e,
                n = (...e) => {
                    for (let t of e) if ((!i(t) || Array.isArray(t)) && void 0 !== t) throw TypeError('The `options` argument must be an object');
                    return u({}, ...e);
                },
                a = (e = {}, t = {}) => {
                    let r = new globalThis.Headers(e),
                        s = t instanceof globalThis.Headers;
                    for (let [e, o] of new globalThis.Headers(t).entries()) (s && 'undefined' === o) || void 0 === o ? r.delete(e) : r.set(e, o);
                    return r;
                },
                u = (...e) => {
                    let t = {},
                        r = {};
                    for (let s of e)
                        if (Array.isArray(s)) (Array.isArray(t) || (t = []), (t = [...t, ...s]));
                        else if (i(s)) {
                            for (let [e, r] of Object.entries(s)) (i(r) && e in t && (r = u(t[e], r)), (t = { ...t, [e]: r }));
                            i(s.headers) && ((r = a(r, s.headers)), (t.headers = r));
                        }
                    return t;
                },
                c = (() => {
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
                h = 'function' == typeof globalThis.ReadableStream,
                d = 'function' == typeof globalThis.FormData,
                p = ['get', 'post', 'put', 'patch', 'head', 'delete'],
                f = { json: 'application/json', text: 'text/*', formData: 'multipart/form-data', arrayBuffer: '*/*', blob: '*/*' },
                g = Symbol('stop'),
                m = [413, 429, 503],
                b = {
                    limit: 2,
                    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
                    statusCodes: [408, 413, 429, 500, 502, 503, 504],
                    afterStatusCodes: m,
                    maxRetryAfter: 1 / 0,
                    backoffLimit: 1 / 0,
                };
            async function y(e, t, r) {
                return new Promise((s, i) => {
                    let n = setTimeout(() => {
                        (t && t.abort(), i(new o(e)));
                    }, r.timeout);
                    r.fetch(e)
                        .then(s)
                        .catch(i)
                        .then(() => {
                            clearTimeout(n);
                        });
                });
            }
            let v = !!globalThis.DOMException;
            function w(e) {
                if (v) return new DOMException(e?.reason ?? 'The operation was aborted.', 'AbortError');
                let t = Error(e?.reason ?? 'The operation was aborted.');
                return ((t.name = 'AbortError'), t);
            }
            async function E(e, { signal: t }) {
                return new Promise((r, s) => {
                    if (t) {
                        if (t.aborted) return void s(w(t));
                        t.addEventListener('abort', o, { once: !0 });
                    }
                    function o() {
                        (s(w(t)), clearTimeout(i));
                    }
                    let i = setTimeout(() => {
                        (t?.removeEventListener('abort', o), r());
                    }, e);
                });
            }
            class R {
                static create(e, t) {
                    let r = new R(e, t),
                        o = async () => {
                            if (r._options.timeout > 0x7fffffff) throw RangeError('The `timeout` option cannot be greater than 2147483647');
                            await Promise.resolve();
                            let e = await r._fetch();
                            for (let t of r._options.hooks.afterResponse) {
                                let s = await t(r.request, r._options, r._decorateResponse(e.clone()));
                                s instanceof globalThis.Response && (e = s);
                            }
                            if ((r._decorateResponse(e), !e.ok && r._options.throwHttpErrors)) {
                                let t = new s(e, r.request, r._options);
                                for (let e of r._options.hooks.beforeError) t = await e(t);
                                throw t;
                            }
                            if (r._options.onDownloadProgress) {
                                if ('function' != typeof r._options.onDownloadProgress) throw TypeError('The `onDownloadProgress` option must be a function');
                                if (!h) throw Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                                return r._stream(e.clone(), r._options.onDownloadProgress);
                            }
                            return e;
                        },
                        i = r._options.retry.methods.includes(r.request.method.toLowerCase()) ? r._retry(o) : o();
                    for (let [e, s] of Object.entries(f))
                        i[e] = async () => {
                            r.request.headers.set('accept', r.request.headers.get('accept') || s);
                            let o = (await i).clone();
                            if ('json' === e) {
                                if (204 === o.status || 0 === (await o.clone().arrayBuffer()).byteLength) return '';
                                if (t.parseJson) return t.parseJson(await o.text());
                            }
                            return o[e]();
                        };
                    return i;
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
                            method: ((e) => (p.includes(e) ? e.toUpperCase() : e))(t.method ?? this._input.method),
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
                    if ((c && (this._options.duplex = 'half'), (this.request = new globalThis.Request(this._input, this._options)), this._options.searchParams)) {
                        let e =
                                'string' == typeof this._options.searchParams
                                    ? this._options.searchParams.replace(/^\?/, '')
                                    : new URLSearchParams(this._options.searchParams).toString(),
                            t = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, '?' + e);
                        (((d && this._options.body instanceof globalThis.FormData) || this._options.body instanceof URLSearchParams) &&
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
                    if ((this._retryCount++, this._retryCount < this._options.retry.limit && !(e instanceof o))) {
                        if (e instanceof s) {
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
                            for (let e of (await E(t, { signal: this._options.signal }), this._options.hooks.beforeRetry))
                                if ((await e({ request: this.request, options: this._options, error: r, retryCount: this._retryCount })) === g) return;
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
                    return !1 === this._options.timeout ? this._options.fetch(this.request.clone()) : y(this.request.clone(), this.abortController, this._options);
                }
                _stream(e, t) {
                    let r = Number(e.headers.get('content-length')) || 0,
                        s = 0;
                    return 204 === e.status
                        ? (t && t({ percent: 1, totalBytes: r, transferredBytes: s }, new Uint8Array()),
                          new globalThis.Response(null, { status: e.status, statusText: e.statusText, headers: e.headers }))
                        : new globalThis.Response(
                              new globalThis.ReadableStream({
                                  async start(o) {
                                      let i = e.body.getReader();
                                      async function n() {
                                          let { done: e, value: a } = await i.read();
                                          if (e) return void o.close();
                                          (t && ((s += a.byteLength), t({ percent: 0 === r ? 0 : s / r, transferredBytes: s, totalBytes: r }, a)),
                                              o.enqueue(a),
                                              await n());
                                      }
                                      (t && t({ percent: 0, transferredBytes: 0, totalBytes: r }, new Uint8Array()), await n());
                                  },
                              }),
                              { status: e.status, statusText: e.statusText, headers: e.headers },
                          );
                }
            }
            let A = (e) => {
                    let t = (t, r) => R.create(t, n(e, r));
                    for (let r of p) t[r] = (t, s) => R.create(t, n(e, s, { method: r }));
                    return ((t.create = (e) => A(n(e))), (t.extend = (t) => A(n(e, t))), (t.stop = g), t);
                },
                _ = A();
            var O = r(46606),
                T = r(91136),
                L = r(19840);
            let D = { retryLimit: 0, retryDelay: 0 };
            var S = r(20969);
            let I = async ({ options: e, error: t, retryAttempt: r, clientRetryConfig: s }) => {
                    if (t?.response?.headers?.get('Retry-After')) return;
                    let o = (({ retryAttempt: e, error: t, retryAfter: r, retryPolicyConfig: s }) => {
                        if (!s) return D;
                        if (r) return s.totalRequestsLimit > e ? { retryLimit: s.totalRequestsLimit, retryDelay: r } : D;
                        if (s.statusCodes[t]) {
                            let r = s.statusCodes[t];
                            if (r?.attempts?.length && r.attempts.length >= e) return { retryLimit: r.attempts.length + 1, retryDelay: r.attempts[e - 1] || 1 };
                        }
                        return D;
                    })({
                        error: ((e) => (e?.code === 'ETIMEDOUT' ? 'TIMEOUT' : (e.response && (e.response.status || e.response.statusCode)) || 'NON_HTTP_ERROR'))(t),
                        retryAttempt: r,
                        retryPolicyConfig: s?.config,
                    });
                    ((e.retry.limit = o.retryLimit), await (0, S.c)(o.retryDelay));
                },
                P = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'get', 'post', 'put', 'patch', 'delete', 'head'];
            class x {
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
                    let r, i;
                    try {
                        let s = Date.now(),
                            o = await this.client(e, this.optionsConverter(t)),
                            i = Date.now() - s;
                        return (r = this.responseConverter(o, t, { start: s, response: i }));
                    } catch (e) {
                        if (e instanceof s) throw (i = this.errorConverter(e));
                        if (e instanceof o)
                            throw (
                                this.afterTimeoutHooks.forEach((t) => {
                                    t(this.errorConverter(e));
                                }),
                                (i = this.errorConverter(e))
                            );
                        throw ((i = e), e);
                    } finally {
                        this.requestDoneHooks.forEach((s) => {
                            s({ url: e, options: t, response: r, error: i });
                        });
                    }
                }
                optionsConverter(e) {
                    let {
                            prefixUrl: t,
                            method: r,
                            searchParams: s,
                            headers: o,
                            json: i,
                            hooks: n,
                            retry: a,
                            timeout: u,
                            body: c,
                            credentials: l,
                            signal: h,
                            excludeHeaders: d,
                        } = e,
                        p = {};
                    if (
                        (void 0 !== l && (p.credentials = l),
                        void 0 !== t && (p.prefixUrl = t),
                        void 0 !== r && (p.method = r),
                        void 0 !== o && (p.headers = { ...o, 'user-agent': o['user-agent'] ?? o['User-Agent'] }),
                        void 0 !== s && (p.searchParams = s),
                        void 0 !== i && (p.json = i),
                        'number' == typeof u && (p.timeout = u),
                        void 0 !== c && (p.body = c),
                        void 0 !== h && (p.signal = h),
                        a?.config &&
                            ((p.retry = {
                                limit: a.config.totalRequestsLimit,
                                backoffLimit: 1,
                                statusCodes: Object.keys(a.config.statusCodes)
                                    .filter((e) => !isNaN(Number(e)))
                                    .map((e) => parseInt(e, 10)),
                                methods: P,
                            }),
                            (p.hooks = p.hooks || {}),
                            (p.hooks.beforeRetry = p.hooks.beforeRetry || []),
                            p.hooks.beforeRetry.push(async (e) => {
                                await I({ request: e.request, options: e.options, error: e.error, retryAttempt: e.retryCount, clientRetryConfig: a });
                            })),
                        n)
                    ) {
                        let e,
                            { beforeRequest: t, beforeRetry: r, beforeError: s, afterResponse: o } = n;
                        (void 0 === p.hooks && (p.hooks = {}),
                            Array.isArray(t) &&
                                (p.hooks.beforeRequest = t.map((t) => async (r, s) => {
                                    e = Date.now();
                                    let o = { ...this.normalizeOptions(r, s), headers: r.headers };
                                    await t(o);
                                })),
                            Array.isArray(r) &&
                                ((p.hooks.beforeRetry = p.hooks.beforeRetry || []),
                                (p.hooks.beforeRetry = p.hooks.beforeRetry.concat(
                                    r.map((e) => async ({ request: t, options: r, error: s, retryCount: o }) => {
                                        await e(this.errorConverter(s, t, r), o);
                                    }),
                                ))),
                            Array.isArray(s) && (p.hooks.beforeError = s.map((e) => async (t) => (await e(this.errorConverter(t)), t))),
                            Array.isArray(o) &&
                                (p.hooks.afterResponse = o.map((t) => async (r, s, o) => {
                                    let i = this.normalizeOptions(r, s),
                                        n = Date.now();
                                    return (await t(this.responseConverter(o, i, { start: e, response: n })), o);
                                })));
                    }
                    return (
                        void 0 !== d &&
                            (void 0 === p.hooks && (p.hooks = {}),
                            void 0 === p.hooks.beforeRequest && (p.hooks.beforeRequest = []),
                            p.hooks.beforeRequest.push((e) => {
                                if (d) for (let t of d) e.headers.has(t) && e.headers.delete(t);
                            })),
                        p
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
                    if (e instanceof s || e instanceof o) return new L.G(e.message, { statusCode: e instanceof o ? O.X.REQUEST_TIMEOUT : e.response.status, cause: e });
                    let i = null;
                    return (
                        t && r && (i = { headers: r?.headers, originalRequestHeaders: t.headers, url: t?.url, method: t?.method }),
                        new T.m(e.message, { cause: { error: e, request: i } })
                    );
                }
                convertMethod(e) {
                    return void 0 !== e && P.includes(e) ? e.toUpperCase() : 'GET';
                }
                convertMethods(e) {
                    let t = new Set();
                    return (
                        e.forEach((e) => {
                            P.includes(e) && t.add(e.toUpperCase());
                        }),
                        [...t]
                    );
                }
            }
        },
        39160: (e, t, r) => {
            'use strict';
            r.d(t, { mS: () => c, $G: () => u, kv: () => l });
            var s = 'object' == typeof globalThis ? globalThis : 'object' == typeof self ? self : 'object' == typeof window ? window : 'object' == typeof r.g ? r.g : {},
                o = '1.9.0',
                i = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,
                n = (function (e) {
                    var t = new Set([e]),
                        r = new Set(),
                        s = e.match(i);
                    if (!s)
                        return function () {
                            return !1;
                        };
                    var o = { major: +s[1], minor: +s[2], patch: +s[3], prerelease: s[4] };
                    if (null != o.prerelease)
                        return function (t) {
                            return t === e;
                        };
                    function n(e) {
                        return (r.add(e), !1);
                    }
                    return function (e) {
                        if (t.has(e)) return !0;
                        if (r.has(e)) return !1;
                        var s = e.match(i);
                        if (!s) return n(e);
                        var a = { major: +s[1], minor: +s[2], patch: +s[3], prerelease: s[4] };
                        if (null != a.prerelease || o.major !== a.major) return n(e);
                        if (0 === o.major) return o.minor === a.minor && o.patch <= a.patch ? (t.add(e), !0) : n(e);
                        return o.minor <= a.minor ? (t.add(e), !0) : n(e);
                    };
                })(o),
                a = Symbol.for('opentelemetry.js.api.' + o.split('.')[0]);
            function u(e, t, r, i) {
                void 0 === i && (i = !1);
                var n,
                    u = (s[a] = null != (n = s[a]) ? n : { version: o });
                if (!i && u[e]) {
                    var c = Error('@opentelemetry/api: Attempted duplicate registration of API: ' + e);
                    return (r.error(c.stack || c.message), !1);
                }
                if (u.version !== o) {
                    var c = Error('@opentelemetry/api: Registration of version v' + u.version + ' for ' + e + ' does not match previously registered API v' + o);
                    return (r.error(c.stack || c.message), !1);
                }
                return ((u[e] = t), r.debug('@opentelemetry/api: Registered a global for ' + e + ' v' + o + '.'), !0);
            }
            function c(e) {
                var t,
                    r,
                    o = null == (t = s[a]) ? void 0 : t.version;
                if (o && n(o)) return null == (r = s[a]) ? void 0 : r[e];
            }
            function l(e, t) {
                t.debug('@opentelemetry/api: Unregistering a global for ' + e + ' v' + o + '.');
                var r = s[a];
                r && delete r[e];
            }
        },
        48769: (e, t, r) => {
            'use strict';
            r.d(t, { OO: () => n, kY: () => o });
            let s = { NO_HANDLER: 40401, INTERNAL: 5e4 };
            function o(e) {
                return null != e && 'object' == typeof e && 'code' in e && 'message' in e;
            }
            function i() {
                return 'u' > typeof crypto && 'randomUUID' in crypto
                    ? crypto.randomUUID()
                    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (e) => {
                          let t = (16 * Math.random()) | 0;
                          return ('x' === e ? t : (3 & t) | 8).toString(16);
                      });
            }
            function n(e) {
                let { timeout: t, transport: r, compatibility: n } = e,
                    a = t ?? 1e4,
                    u = new Map(),
                    c = (function () {
                        let e = new Map();
                        return {
                            enqueue(t, r) {
                                let s,
                                    o,
                                    i = e.get(t);
                                if (i) return i.promise;
                                let n = new Promise((e, t) => {
                                    let i,
                                        n = (e, t) => {
                                            (i && (i(), (i = void 0)), e(t));
                                        };
                                    ((s = (t) => n(e, t)),
                                        (o = (e) => n(t, e)),
                                        r?.signal &&
                                            (i = (function (e, t) {
                                                if (e.aborted) return (t(e.reason ?? new DOMException('Aborted', 'AbortError')), () => {});
                                                let r = () => {
                                                    t(e.reason ?? new DOMException('Aborted', 'AbortError'));
                                                };
                                                return (
                                                    e.addEventListener('abort', r, { once: !0 }),
                                                    () => {
                                                        e.removeEventListener('abort', r);
                                                    }
                                                );
                                            })(r.signal, o)));
                                }).finally(() => {
                                    e.delete(t);
                                });
                                return (e.set(t, { promise: n, resolve: s, reject: o }), n);
                            },
                            resolve(t, r) {
                                let s = e.get(t);
                                return !!s && (s.resolve(r), !0);
                            },
                            reject(t, r) {
                                let s = e.get(t);
                                return !!s && (s.reject(r), !0);
                            },
                            clear() {
                                if (!e.size) return;
                                let t = new DOMException('Aborted', 'AbortError');
                                for (let r of e.values()) r.reject(t);
                            },
                        };
                    })(),
                    l = async (e) => {
                        let t = JSON.parse(e);
                        if (!('object' == typeof t && 'id' in t && 'refId' in t && 'type' in t && 'action' in t && 'payload' in t && 'error' in t)) return;
                        if ('res' === t.type && t.refId) return void (t.error ? c.reject(t.refId, t.error) : c.resolve(t.refId, t.payload));
                        let r = u.get(t.action);
                        if (!r || r.type !== t.type) {
                            if ('req' !== t.type) return;
                            let e = { code: s.NO_HANDLER, message: `No handler for action "${t.action}"` };
                            h({ id: i(), type: 'res', refId: t.id, action: t.action, payload: null, error: e });
                            return;
                        }
                        if ('cmd' === t.type) return void r.callback(t.payload);
                        try {
                            let e = await r.callback(t.payload);
                            h({ id: i(), type: 'res', refId: t.id, action: t.action, payload: e, error: null });
                        } catch (r) {
                            let e;
                            ((e = o(r) ? { code: r.code, message: r.message, details: r.details } : { code: s.INTERNAL, message: 'Internal error' }),
                                h({ id: i(), type: 'res', refId: t.id, action: t.action, payload: null, error: e }));
                        }
                    },
                    h = (e) => {
                        let t = JSON.stringify(e);
                        r.post(t);
                    },
                    d = (e, t) => n?.supports(e, t) ?? !0,
                    p = !1;
                return {
                    registerRequest: (e, t) => (u.set(e, { type: 'req', action: e, callback: t }), () => u.delete(e)),
                    sendRequest(e, t, r) {
                        if (!d(e, 'req')) return Promise.reject(Error(`Bridge request is not supported: ${e}`));
                        let s = i();
                        h({ id: s, refId: null, error: null, type: 'req', action: e, payload: t });
                        let o = [];
                        return (
                            r?.timeout !== 0 && o.push(AbortSignal.timeout(r?.timeout ?? a)), r?.signal && o.push(r.signal), c.enqueue(s, { signal: AbortSignal.any(o) })
                        );
                    },
                    registerCommand: (e, t) => (u.set(e, { type: 'cmd', action: e, callback: t }), () => u.delete(e)),
                    sendCommand(e, t) {
                        d(e, 'cmd') && h({ id: i(), refId: null, error: null, type: 'cmd', action: e, payload: t });
                    },
                    start() {
                        p || (r.onMessage(l), r.start(), (p = !0));
                    },
                    stop() {
                        p && (r.stop(), c.clear(), (p = !1));
                    },
                    supports: d,
                };
            }
        },
        51729: (e, t, r) => {
            'use strict';
            (r.d(t, { K: () => x }),
                r(61610),
                r(80565),
                !(function (e) {
                    ((e.INVALID_URL = 'invalid-url'), (e.DISALLOWED_PROTOCOL = 'disallowed-protocol'), (e.CREDENTIALS_NOT_ALLOWED = 'credentials-not-allowed'));
                })(n || (n = {})),
                !(function (e) {
                    ((e.HTTP = 'http:'), (e.HTTPS = 'https:'), (e.MAILTO = 'mailto:'), (e.TEL = 'tel:'));
                })(a || (a = {})),
                (function (e) {
                    ((e.COMMAND = 'cmd'), (e.REQUEST = 'req'));
                })(u || (u = {})));
            let s = { name: 'tag-sandbox:connect', type: u.REQUEST },
                o = { name: 'tag-sandbox:events', type: u.COMMAND },
                i = [s, o];
            var n,
                a,
                u,
                c,
                l,
                h,
                d,
                p = r(24897);
            class f extends p.t {
                name = 'ConnectionTimeoutException';
                constructor(e) {
                    (super('connection timed out', { code: 'E_TAG_SANDBOX_CONNECTION_TIMEOUT', data: { timeoutMs: e } }), Object.setPrototypeOf(this, f.prototype));
                }
            }
            class g extends p.t {
                name = 'IframeInitializationException';
                constructor(e) {
                    (super(e, { code: 'E_TAG_SANDBOX_IFRAME_INITIALIZATION' }), Object.setPrototypeOf(this, g.prototype));
                }
            }
            class m extends p.t {
                name = 'IframeRuntimeException';
                constructor(e) {
                    (super(e, { code: 'E_TAG_SANDBOX_IFRAME_RUNTIME' }), Object.setPrototypeOf(this, m.prototype));
                }
            }
            var b = r(14372);
            class y extends p.t {
                name = 'InvalidIframeUrlException';
                constructor(e) {
                    (super(`invalid iframe URL: ${e}`, { code: 'E_TAG_SANDBOX_INVALID_IFRAME_URL', data: { reason: e } }), Object.setPrototypeOf(this, y.prototype));
                }
            }
            class v extends p.t {
                name = 'UnsupportedActionException';
                constructor(e) {
                    (super(`Tag sandbox does not support the action "${e}"`, { code: 'E_TAG_SANDBOX_UNSUPPORTED_ACTION', data: { action: e } }),
                        Object.setPrototypeOf(this, v.prototype));
                }
            }
            !(function (e) {
                ((e.OPEN = 'session:open'), (e.INIT = 'session:init'));
            })(c || (c = {}));
            var w = r(48769);
            !(function (e) {
                ((e[(e.NOT_READY = 40001)] = 'NOT_READY'),
                    (e[(e.INVALID_CONFIGURATION = 40003)] = 'INVALID_CONFIGURATION'),
                    (e[(e.DISPOSED = 40004)] = 'DISPOSED'),
                    (e[(e.INVALID_HANDSHAKE = 40005)] = 'INVALID_HANDSHAKE'),
                    (e[(e.NO_HANDLER = 40401)] = 'NO_HANDLER'),
                    (e[(e.TIMEOUT = 40801)] = 'TIMEOUT'),
                    (e[(e.INTERNAL = 5e4)] = 'INTERNAL'),
                    (e[(e.TRANSPORT_UNAVAILABLE = 50301)] = 'TRANSPORT_UNAVAILABLE'));
            })(l || (l = {}));
            let E =
                    (e, t, { session: r, logger: s }) =>
                    async (o) => {
                        try {
                            r.assertReady();
                            let e = await t(o);
                            return void 0 === e ? null : e;
                        } catch (t) {
                            if ((s?.error('WebView SDK request handler failed', { ...r.getLogData(t), action: e }), t instanceof p.t))
                                throw Object.assign(new p.t(t.message, { code: t.code, cause: t }), { details: t.data });
                            throw t;
                        }
                    },
                R = (e, t, { session: r, logger: s }) => {
                    let o = (t) => {
                        s?.error('WebView SDK command handler failed', { ...r.getLogData(t), action: e });
                    };
                    return (e) => {
                        try {
                            (r.assertReady(), Promise.resolve(t(e)).catch(o));
                        } catch (e) {
                            o(e);
                        }
                    };
                },
                A = (e, t, r) => {
                    let s,
                        o = new AbortController(),
                        i = AbortSignal.any(r ? [o.signal, t, r] : [o.signal, t]),
                        n = () => {
                            (void 0 !== s && clearTimeout(s), (s = void 0), i.removeEventListener('abort', n));
                        };
                    return (
                        i.aborted ||
                            (i.addEventListener('abort', n, { once: !0 }), (s = setTimeout(() => o.abort(new p.t('Request timed out', { code: l.TIMEOUT })), e))),
                        {
                            signal: i,
                            cleanup: n,
                            get timedOut() {
                                return o.signal.aborted;
                            },
                        }
                    );
                },
                _ = async (e, t, r, s) => {
                    try {
                        return await e.sendRequest(t, r, { timeout: 0, signal: s });
                    } catch (e) {
                        if (s?.aborted) throw s.reason;
                        if (e instanceof p.t) throw e;
                        if ((0, w.kY)(e)) throw new p.t(e.message, { code: e.code, cause: e });
                        throw e;
                    }
                },
                O = (e) => ({
                    client: { ...e.client },
                    theme: e.theme,
                    locale: e.locale,
                    safeArea: { ...e.safeArea },
                    capabilities: [...e.capabilities],
                    appSessionId: e.appSessionId,
                });
            !(function (e) {
                ((e.CREATED = 'created'), (e.STARTING = 'starting'), (e.READY = 'ready'), (e.FAILED = 'failed'), (e.DISPOSED = 'disposed'));
            })(h || (h = {}));
            class T {
                constructor(e) {
                    ((this.options = e),
                        (this.lifetime = new AbortController()),
                        (this.state = h.CREATED),
                        (this.peerCapabilities = []),
                        (this.startedAt = 0),
                        (this.resolveStartup = () => {}),
                        (this.rejectStartup = () => {}),
                        (this.removeStartupAbort = () => {}));
                }
                get signal() {
                    return this.lifetime.signal;
                }
                get handshakeSignal() {
                    return this.handshakeScope?.signal;
                }
                start() {
                    if (this.state === h.DISPOSED) return Promise.reject(new p.t('SDK is disposed', { code: l.DISPOSED }));
                    if (
                        this.startup ||
                        ((this.state = h.STARTING),
                        (this.startedAt = Date.now()),
                        (this.startup = new Promise((e, t) => {
                            ((this.resolveStartup = e), (this.rejectStartup = t));
                        })),
                        this.options.logger?.info('WebView SDK starting'),
                        this.lifetime.signal.aborted)
                    )
                        return this.startup;
                    try {
                        this.handshakeScope = A(this.options.timeout, this.lifetime.signal);
                        let e = this.handshakeScope.signal,
                            t = () => this.fail(e.reason);
                        (e.addEventListener('abort', t, { once: !0 }), (this.removeStartupAbort = () => e.removeEventListener('abort', t)), this.onStart?.());
                    } catch (e) {
                        this.fail(e);
                    }
                    return this.startup;
                }
                ready() {
                    this.state === h.STARTING &&
                        this.context &&
                        ((this.state = h.READY),
                        this.removeStartupAbort(),
                        this.handshakeScope?.cleanup(),
                        this.resolveStartup(this.context),
                        this.options.logger?.info('WebView SDK ready', { ...this.getLogData(), elapsedMs: Date.now() - this.startedAt }));
                }
                fail(e) {
                    this.state === h.STARTING &&
                        ((this.state = h.FAILED),
                        this.lifetime.abort(e),
                        this.rejectStartup(e),
                        this.cleanup(),
                        this.options.logger?.error('WebView SDK startup failed', { ...this.getLogData(e), elapsedMs: Date.now() - this.startedAt }));
                }
                dispose() {
                    if (this.state === h.DISPOSED) return;
                    this.state = h.DISPOSED;
                    let e = new p.t('SDK is disposed', { code: l.DISPOSED });
                    (this.lifetime.abort(e), this.rejectStartup(e), this.cleanup(), this.options.logger?.info('WebView SDK disposed', this.getLogData()));
                }
                acceptContext(e, t) {
                    ((this.context = O(e)), (this.peerCapabilities = [...t]));
                }
                assertReady() {
                    if (this.state === h.DISPOSED) throw new p.t('SDK is disposed', { code: l.DISPOSED });
                    if (this.state !== h.READY) throw new p.t('SDK is not ready', { code: l.NOT_READY });
                }
                supports(e) {
                    return this.state === h.READY && this.peerCapabilities.includes(e);
                }
                getLogData(e) {
                    return { ...(this.context && { appSessionId: this.context.appSessionId }), ...(e instanceof p.t && { code: e.code }) };
                }
                cleanup() {
                    (this.removeStartupAbort(), this.handshakeScope?.cleanup(), this.onStop?.());
                }
            }
            class L {
                constructor(e) {
                    ((this.options = e), (this.pending = new Set()), (this.active = !1));
                }
                start() {
                    if (!this.active) {
                        this.active = !0;
                        try {
                            this.options.transport.start();
                        } catch (e) {
                            throw (this.options.onFailure(e), e);
                        }
                    }
                }
                stop() {
                    if (!this.active) return;
                    for (let e of ((this.active = !1), this.pending)) clearTimeout(e);
                    this.pending.clear();
                    let e = this.unsubscribe;
                    this.unsubscribe = void 0;
                    try {
                        e?.();
                    } catch (e) {
                        this.options.onFailure(e);
                    } finally {
                        try {
                            this.options.transport.stop();
                        } catch (e) {
                            this.options.onFailure(e);
                        }
                    }
                }
                post(e) {
                    if (this.active) {
                        try {
                            this.options.transport.post(e);
                        } catch (e) {
                            throw (this.options.onFailure(e), e);
                        }
                        this.onPosted?.();
                    }
                }
                onMessage(e) {
                    let t = this.options.transport.onMessage((t) => {
                        if (!this.active) return;
                        let r = setTimeout(() => {
                            (this.pending.delete(r),
                                this.active &&
                                    Promise.resolve()
                                        .then(() => e(t))
                                        .catch(this.options.onFailure));
                        }, 0);
                        this.pending.add(r);
                    });
                    return (
                        (this.unsubscribe = () => {
                            ((this.unsubscribe = void 0), t());
                        }),
                        this.unsubscribe
                    );
                }
            }
            class D {
                constructor(e, t) {
                    this.handshakeRegistrations = [];
                    let { handshakeTimeout: r = 1e4, requestTimeout: s = 1e4, logger: o } = e,
                        { actions: i, handlers: n } = ((e) => {
                            let t = new Map();
                            for (let r of e.actions ?? []) {
                                if (t.has(r.name) || r.name === c.OPEN || r.name === c.INIT)
                                    throw new p.t(`Duplicate or reserved action: ${r.name}`, { code: l.INVALID_CONFIGURATION });
                                t.set(r.name, { ...r });
                            }
                            let r = new Map();
                            for (let [s, o] of Object.entries(e.handlers ?? {}))
                                if (void 0 !== o) {
                                    if (!t.has(s)) throw new p.t(`Invalid incoming handler: ${s}`, { code: l.INVALID_CONFIGURATION });
                                    r.set(s, o);
                                }
                            return { actions: t, handlers: r };
                        })(e);
                    ((this.command = this.command.bind(this)),
                        (this.supports = this.supports.bind(this)),
                        (this.actions = i),
                        (this.logger = o),
                        (this.session = new T({ timeout: r, logger: o })),
                        (this.transport = new L({ transport: e.transport, onFailure: this.onTransportFailure.bind(this) })),
                        (this.bridge = (0, w.OO)({ transport: this.transport, compatibility: { supports: this.supportsBridgeAction.bind(this) } })),
                        (this.unregisterHandlers = ((e) => {
                            let { bridge: t, actions: r, handlers: s } = e,
                                o = [];
                            for (let [i, n] of s)
                                if (r.get(i)?.type === u.REQUEST) {
                                    let r = E(i, n, e);
                                    o.push(t.registerRequest(i, r));
                                } else {
                                    let r = R(i, n, e);
                                    o.push(t.registerCommand(i, r));
                                }
                            return () => {
                                for (let e of o.splice(0)) e();
                            };
                        })({ bridge: this.bridge, actions: i, handlers: n, session: this.session, logger: o })),
                        (this.handshake = t(this.createSessionController([...n.keys()]))),
                        (this.session.onStart = this.onStart.bind(this)),
                        (this.session.onStop = this.onStop.bind(this)),
                        (this.transport.onPosted = this.handshake.posted),
                        (this.start = this.session.start.bind(this.session)),
                        (this.dispose = this.session.dispose.bind(this.session)),
                        (this.request = (
                            ({ bridge: e, session: t, timeout: r, supports: s, logger: o }) =>
                            async (i, n, a = {}) => {
                                let c,
                                    h = Date.now();
                                try {
                                    if ((t.assertReady(), !s(i, u.REQUEST))) throw new p.t(`Bridge request is not supported: ${i}`, { code: l.NO_HANDLER });
                                    if ((c = A(void 0 === a.timeout ? r : a.timeout, t.signal, a.signal)).signal.aborted) throw c.signal.reason;
                                    let d = await _(e, i, n, c.signal);
                                    return (o?.debug('WebView SDK request completed', { ...t.getLogData(), action: i, elapsedMs: Date.now() - h }), d);
                                } catch (r) {
                                    let e = 'WebView SDK request failed';
                                    throw (
                                        c?.timedOut ? (e = 'WebView SDK request timed out') : c?.signal.aborted && (e = 'WebView SDK request cancelled'),
                                        o?.error(e, { ...t.getLogData(r), action: i, elapsedMs: Date.now() - h }),
                                        r
                                    );
                                } finally {
                                    c?.cleanup();
                                }
                            }
                        )({ bridge: this.bridge, session: this.session, timeout: s, supports: this.supports, logger: o })));
                }
                command(e, t) {
                    (this.session.assertReady(), this.supports(e, u.COMMAND) && this.bridge.sendCommand(e, t));
                }
                supports(e, t) {
                    let r = this.actions.get(e);
                    return void 0 !== r && (void 0 === t || r.type === t) && this.session.supports(e);
                }
                supportsBridgeAction(e, t) {
                    return e === c.OPEN || e === c.INIT || this.supports(e, t);
                }
                onStart() {
                    (this.bridge.start(), this.handshake.start?.());
                }
                onStop() {
                    for (let e of (this.bridge.stop(), this.transport.stop(), this.unregisterHandlers(), this.handshakeRegistrations.splice(0))) e();
                }
                onTransportFailure(e) {
                    (this.logger?.error('WebView SDK transport failed', this.session.getLogData(e)), this.session.fail(e));
                }
                createSessionController(e) {
                    return {
                        capabilities: e,
                        registerCommand: (e, t) => {
                            this.handshakeRegistrations.push(this.bridge.registerCommand(e, t));
                        },
                        registerRequest: (e, t) => {
                            this.handshakeRegistrations.push(this.bridge.registerRequest(e, async (e) => await t(e)));
                        },
                        sendCommand: (e, t) => this.bridge.sendCommand(e, t),
                        sendRequest: async (e, t) => await _(this.bridge, e, t, this.session.handshakeSignal),
                        acceptContext: this.session.acceptContext.bind(this.session),
                        ready: this.session.ready.bind(this.session),
                        fail: this.session.fail.bind(this.session),
                    };
                }
            }
            class S {
                constructor({ targetWindow: e, expectedOrigin: t = '*' }) {
                    if (
                        ((this.listeners = new Set()),
                        'function' != typeof e?.postMessage ||
                            ('function' != typeof t &&
                                '*' !== t &&
                                !((e) => {
                                    try {
                                        let t = new URL(e).origin;
                                        return 'null' !== t && t === e;
                                    } catch {
                                        return !1;
                                    }
                                })(t)))
                    )
                        throw new p.t('Invalid iframe transport configuration', { code: l.INVALID_CONFIGURATION });
                    ((this.targetWindow = e), (this.expectedOrigin = t), (this.handleMessage = this.handleMessage.bind(this)));
                }
                start() {
                    window.addEventListener('message', this.handleMessage);
                }
                stop() {
                    (window.removeEventListener('message', this.handleMessage), this.listeners.clear(), (this.origin = void 0));
                }
                post(e) {
                    let t = this.origin ?? this.expectedOrigin;
                    this.targetWindow.postMessage(e, 'string' == typeof t ? t : '*');
                }
                onMessage(e) {
                    return (this.listeners.add(e), () => this.listeners.delete(e));
                }
                handleMessage(e) {
                    if (e.source !== this.targetWindow || 'string' != typeof e.data) return;
                    let t = this.origin ?? this.expectedOrigin;
                    if ('function' == typeof t || '*' === t) {
                        if (
                            !e.origin ||
                            'null' === e.origin ||
                            !((e) => {
                                try {
                                    let t = JSON.parse(e);
                                    return 'object' == typeof t && null !== t && 'type' in t && t.type === u.REQUEST && 'action' in t && t.action === c.INIT;
                                } catch {
                                    return !1;
                                }
                            })(e.data) ||
                            ('function' == typeof t && !t(e.origin))
                        )
                            return;
                        this.origin = e.origin;
                    } else if (e.origin !== t) return;
                    for (let t of this.listeners) t(e.data);
                }
            }
            let I = { production: 'music-frontend-static', testing: 'music-frontend-static-unstable' },
                P = new Set([a.HTTP, a.HTTPS]);
            !(function (e) {
                ((e.Init = 'init'), (e.Connecting = 'connecting'), (e.Ready = 'ready'), (e.Disposed = 'disposed'));
            })(d || (d = {}));
            class x {
                state = d.Init;
                logger;
                iframeUrl;
                connection;
                prepareIframeUrl;
                connectionTimeoutMs;
                queue = [];
                queueLimit;
                host;
                iframe;
                timeout;
                constructor({ environment: e = 'production', logger: t, connection: r, prepareIframeUrl: s, queueLimit: o = 100, connectionTimeoutMs: i = 3e4 }) {
                    let n;
                    if (
                        ((this.iframeUrl = ((n = r.tagSystem), `https://yastatic-net.ru/s3/${I[e]}/tag-sandbox/${n}/index.html`)),
                        (this.logger = t),
                        (this.connection = r),
                        (this.prepareIframeUrl = s),
                        (this.queueLimit = o),
                        !Number.isInteger(this.queueLimit) || this.queueLimit < 0)
                    )
                        throw new b.Q('queueLimit', 'must be a non-negative integer');
                    ((this.connectionTimeoutMs = i), (this.openIframe = this.openIframe.bind(this)), (this.onIframeLoadError = this.onIframeLoadError.bind(this)));
                }
                connect() {
                    this.state === d.Init &&
                        'undefined' != typeof window &&
                        'undefined' != typeof document &&
                        ((this.state = d.Connecting),
                        (this.timeout = setTimeout(() => this.fail(new f(this.connectionTimeoutMs)), this.connectionTimeoutMs)),
                        document.body ? this.openIframe() : document.addEventListener('DOMContentLoaded', this.openIframe, { once: !0 }));
                }
                send(e) {
                    if (this.state !== d.Disposed) {
                        if ('undefined' == typeof window) return void this.logger?.warn('Tag sandbox send called on the server; event dropped');
                        if (this.state === d.Ready) return void this.sendEvents([e]);
                        (this.queue.length < this.queueLimit
                            ? this.queue.push(e)
                            : this.logger?.warn('Tag sandbox event queue limit reached; event dropped', { queueLimit: this.queueLimit }),
                            this.connect());
                    }
                }
                dispose() {
                    this.state !== d.Disposed && ((this.state = d.Disposed), this.cleanup());
                }
                openIframe() {
                    if (this.state !== d.Connecting) return;
                    let e = ((e, t) => {
                        let r;
                        try {
                            r = void 0 === t.baseUrl ? new URL(e) : new URL(e, t.baseUrl);
                        } catch {
                            return { isAllowed: !1, reason: n.INVALID_URL };
                        }
                        return t.allowedProtocols.has(r.protocol)
                            ? t.allowCredentials || ('' === r.username && '' === r.password)
                                ? { isAllowed: !0, url: r }
                                : { isAllowed: !1, reason: n.CREDENTIALS_NOT_ALLOWED }
                            : { isAllowed: !1, reason: n.DISALLOWED_PROTOCOL };
                    })(this.iframeUrl, { allowedProtocols: P });
                    if (!e.isAllowed) return void this.fail(new y(e.reason));
                    let { url: t } = e;
                    if ((this.prepareIframeUrl(t), t.origin === window.location.origin)) return void this.fail(new y('must be cross-origin'));
                    let r = this.createPixelIframe();
                    if (((this.iframe = r), r.addEventListener('error', this.onIframeLoadError), document.body.appendChild(r), !r.contentWindow))
                        return void this.fail(new g('iframe has no content window'));
                    ((this.host = (({ targetWindow: e, expectedOrigin: t, timeoutMs: r, logger: s }) => {
                        let o;
                        return new D(
                            (o = {
                                transport: new S({ targetWindow: e, expectedOrigin: t }),
                                context: {
                                    client: { name: 'tag-sandbox-bridge', version: '0.1.0' },
                                    theme: 'system',
                                    locale: 'en',
                                    safeArea: { top: 0, right: 0, bottom: 0, left: 0 },
                                    appSessionId: crypto.randomUUID(),
                                },
                                actions: i,
                                handshakeTimeout: r,
                                requestTimeout: r,
                                logger: s,
                            }),
                            (e) => {
                                let t = O({ ...o.context, capabilities: e.capabilities }),
                                    r = !1;
                                return (
                                    e.registerCommand(c.OPEN, (s) => {
                                        r || ((r = !0), e.acceptContext(t, s.capabilities), e.sendRequest(c.INIT, t).then(e.ready, e.fail));
                                    }),
                                    {}
                                );
                            },
                        );
                    })({ targetWindow: r.contentWindow, expectedOrigin: t.origin, timeoutMs: this.connectionTimeoutMs, logger: this.logger })),
                        this.initialize(this.host).catch((e) => this.fail(e)),
                        (r.src = t.href));
                }
                async initialize(e) {
                    if ((await e.start(), this.state === d.Connecting)) {
                        if (!e.supports(o.name)) throw new v(o.name);
                        (await e.request(s.name, this.connection),
                            this.state === d.Connecting &&
                                (clearTimeout(this.timeout),
                                (this.timeout = void 0),
                                (this.state = d.Ready),
                                this.queue.length > 0 && this.sendEvents(this.queue.splice(0))));
                    }
                }
                sendEvents(e) {
                    try {
                        this.host?.command(o.name, { events: e });
                    } catch (e) {
                        this.fail(e);
                    }
                }
                onIframeLoadError() {
                    this.fail(new m('iframe failed to load'));
                }
                fail(e) {
                    this.state !== d.Disposed && (this.dispose(), this.logger?.error('tag-sandbox-bridge failure', { error: e }));
                }
                createPixelIframe() {
                    let e = document.createElement('iframe');
                    ((e.width = '1'), (e.height = '1'), (e.ariaHidden = 'true'), (e.tabIndex = -1));
                    let t = e.style;
                    return (
                        (t.position = 'absolute'),
                        (t.top = '0'),
                        (t.left = '0'),
                        (t.width = '1px'),
                        (t.height = '1px'),
                        (t.border = '0'),
                        (t.opacity = '0'),
                        (t.pointerEvents = 'none'),
                        e
                    );
                }
                cleanup() {
                    (clearTimeout(this.timeout),
                        (this.timeout = void 0),
                        'undefined' != typeof document && document.removeEventListener('DOMContentLoaded', this.openIframe),
                        this.host?.dispose(),
                        (this.host = void 0),
                        this.iframe?.removeEventListener('error', this.onIframeLoadError),
                        this.iframe?.remove(),
                        (this.iframe = void 0),
                        (this.queue.length = 0));
                }
            }
        },
        53613: (e, t, r) => {
            'use strict';
            r.d(t, { cm: () => s.c });
            var s = r(23877);
            r(74021);
        },
        58785: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var s,
                o = r(39160),
                i = function (e, t) {
                    var r = 'function' == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var s,
                        o,
                        i = r.call(e),
                        n = [];
                    try {
                        for (; (void 0 === t || t-- > 0) && !(s = i.next()).done;) n.push(s.value);
                    } catch (e) {
                        o = { error: e };
                    } finally {
                        try {
                            s && !s.done && (r = i.return) && r.call(i);
                        } finally {
                            if (o) throw o.error;
                        }
                    }
                    return n;
                },
                n = function (e, t, r) {
                    if (r || 2 == arguments.length)
                        for (var s, o = 0, i = t.length; o < i; o++) (!s && o in t) || (s || (s = Array.prototype.slice.call(t, 0, o)), (s[o] = t[o]));
                    return e.concat(s || Array.prototype.slice.call(t));
                },
                a = (function () {
                    function e(e) {
                        this._namespace = e.namespace || 'DiagComponentLogger';
                    }
                    return (
                        (e.prototype.debug = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return u('debug', this._namespace, e);
                        }),
                        (e.prototype.error = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return u('error', this._namespace, e);
                        }),
                        (e.prototype.info = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return u('info', this._namespace, e);
                        }),
                        (e.prototype.warn = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return u('warn', this._namespace, e);
                        }),
                        (e.prototype.verbose = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return u('verbose', this._namespace, e);
                        }),
                        e
                    );
                })();
            function u(e, t, r) {
                var s = (0, o.mS)('diag');
                if (s) return (r.unshift(t), s[e].apply(s, n([], i(r), !1)));
            }
            !(function (e) {
                ((e[(e.NONE = 0)] = 'NONE'),
                    (e[(e.ERROR = 30)] = 'ERROR'),
                    (e[(e.WARN = 50)] = 'WARN'),
                    (e[(e.INFO = 60)] = 'INFO'),
                    (e[(e.DEBUG = 70)] = 'DEBUG'),
                    (e[(e.VERBOSE = 80)] = 'VERBOSE'),
                    (e[(e.ALL = 9999)] = 'ALL'));
            })(s || (s = {}));
            var c = function (e, t) {
                    var r = 'function' == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var s,
                        o,
                        i = r.call(e),
                        n = [];
                    try {
                        for (; (void 0 === t || t-- > 0) && !(s = i.next()).done;) n.push(s.value);
                    } catch (e) {
                        o = { error: e };
                    } finally {
                        try {
                            s && !s.done && (r = i.return) && r.call(i);
                        } finally {
                            if (o) throw o.error;
                        }
                    }
                    return n;
                },
                l = function (e, t, r) {
                    if (r || 2 == arguments.length)
                        for (var s, o = 0, i = t.length; o < i; o++) (!s && o in t) || (s || (s = Array.prototype.slice.call(t, 0, o)), (s[o] = t[o]));
                    return e.concat(s || Array.prototype.slice.call(t));
                },
                h = (function () {
                    function e() {
                        function e(e) {
                            return function () {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                var s = (0, o.mS)('diag');
                                if (s) return s[e].apply(s, l([], c(t), !1));
                            };
                        }
                        var t = this;
                        ((t.setLogger = function (e, r) {
                            if ((void 0 === r && (r = { logLevel: s.INFO }), e === t)) {
                                var i,
                                    n,
                                    a,
                                    u = Error(
                                        'Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation',
                                    );
                                return (t.error(null != (i = u.stack) ? i : u.message), !1);
                            }
                            'number' == typeof r && (r = { logLevel: r });
                            var c = (0, o.mS)('diag'),
                                l = (function (e, t) {
                                    function r(r, s) {
                                        var o = t[r];
                                        return 'function' == typeof o && e >= s ? o.bind(t) : function () {};
                                    }
                                    return (
                                        e < s.NONE ? (e = s.NONE) : e > s.ALL && (e = s.ALL),
                                        (t = t || {}),
                                        {
                                            error: r('error', s.ERROR),
                                            warn: r('warn', s.WARN),
                                            info: r('info', s.INFO),
                                            debug: r('debug', s.DEBUG),
                                            verbose: r('verbose', s.VERBOSE),
                                        }
                                    );
                                })(null != (n = r.logLevel) ? n : s.INFO, e);
                            if (c && !r.suppressOverrideMessage) {
                                var h = null != (a = Error().stack) ? a : '<failed to generate stacktrace>';
                                (c.warn('Current logger will be overwritten from ' + h), l.warn('Current logger will overwrite one already registered from ' + h));
                            }
                            return (0, o.$G)('diag', l, t, !0);
                        }),
                            (t.disable = function () {
                                (0, o.kv)('diag', t);
                            }),
                            (t.createComponentLogger = function (e) {
                                return new a(e);
                            }),
                            (t.verbose = e('verbose')),
                            (t.debug = e('debug')),
                            (t.info = e('info')),
                            (t.warn = e('warn')),
                            (t.error = e('error')));
                    }
                    return (
                        (e.instance = function () {
                            return (this._instance || (this._instance = new e()), this._instance);
                        }),
                        e
                    );
                })();
        },
        66832: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => o, P: () => s });
            class s {
                emit(e) {}
                enabled() {
                    return !1;
                }
            }
            let o = new s();
        },
        68173: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => s });
            class s {
                sinks;
                constructor(e) {
                    this.sinks = [...e];
                }
                connect() {
                    for (let e of this.sinks) e.connect();
                }
                send(e, t) {
                    for (let r of this.sinks) r.send(e, t);
                }
                dispose() {
                    for (let e of this.sinks) e.dispose();
                }
            }
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function r(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function s(e) {
                var s = [];
                return (function e(o) {
                    if (null === o || 'object' != typeof o) return o;
                    if (-1 !== s.indexOf(o)) return '[Circular]';
                    if ((s.push(o), 'function' == typeof o.toJSON))
                        try {
                            var i = e(o.toJSON());
                            return (s.pop(), i);
                        } catch (e) {
                            return r(e);
                        }
                    if (Array.isArray(o)) {
                        var n = o.map(e);
                        return (s.pop(), n);
                    }
                    var a = Object.keys(o).reduce(function (s, i) {
                        return (
                            (s[i] = e(
                                (function (e, s) {
                                    if (t.call(e, s))
                                        try {
                                            return e[s];
                                        } catch (e) {
                                            return r(e);
                                        }
                                    return e[s];
                                })(o, i),
                            )),
                            s
                        );
                    }, {});
                    return (s.pop(), a);
                })(e);
            }
            ((e.exports = function (e, t, r) {
                return JSON.stringify(s(e), t, r);
            }),
                (e.exports.ensureProperties = s));
        },
        70844: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => n });
            var s = r(43297),
                o = (function () {
                    function e(e) {
                        ((this.observableValue = (0, s.vP)(e)), (this.prevValueByListener = new Map()));
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
                                this.observableValue.subscribe(function (o) {
                                    if (o !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, o), e(o));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, s.EW)(e)), (this.prevValueByListener = new Map()));
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
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (o) {
                                if (o !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, o), e(o));
                                }
                            })
                        );
                    }));
            })();
            let i = 'counter',
                n = () => {
                    let e = null,
                        t = new o(!1),
                        r = [];
                    return {
                        isLoaded: t,
                        init: (s) => {
                            if ('undefined' != typeof window && void 0 !== window.Ya?.Metrika2 && !t.value)
                                try {
                                    var o;
                                    ((e = new window.Ya.Metrika2({ ...s })),
                                        (t.value = !0),
                                        (o = e),
                                        r.forEach((e) => {
                                            e(o);
                                        }),
                                        (r.length = 0));
                                } catch (e) {
                                    ('string' == typeof e || e instanceof Error) && s.logger.error(e);
                                }
                        },
                        count: (t, s = i) => {
                            e
                                ? e.params({ [s]: t })
                                : r.push((e) => {
                                      e.params({ [s]: t });
                                  });
                        },
                        hit: (t) => {
                            e
                                ? e.hit(t)
                                : r.push((e) => {
                                      e.hit(t);
                                  });
                        },
                        reachGoal: (t, s) => {
                            if (!e) return void r.push((e) => e.reachGoal(t, s));
                            e.reachGoal(t, s);
                        },
                    };
                };
            r(53548);
        },
        72886: (e, t, r) => {
            'use strict';
            r.d(t, { Ac: () => R, Dq: () => f });
            var s = (function () {
                    var e = function (t, r) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            })(t, r);
                    };
                    return function (t, r) {
                        if ('function' != typeof r && null !== r) throw TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
                        function s() {
                            this.constructor = t;
                        }
                        (e(t, r), (t.prototype = null === r ? Object.create(r) : ((s.prototype = r.prototype), new s())));
                    };
                })(),
                o = (function () {
                    function e() {}
                    return (
                        (e.prototype.createGauge = function (e, t) {
                            return m;
                        }),
                        (e.prototype.createHistogram = function (e, t) {
                            return b;
                        }),
                        (e.prototype.createCounter = function (e, t) {
                            return g;
                        }),
                        (e.prototype.createUpDownCounter = function (e, t) {
                            return y;
                        }),
                        (e.prototype.createObservableGauge = function (e, t) {
                            return w;
                        }),
                        (e.prototype.createObservableCounter = function (e, t) {
                            return v;
                        }),
                        (e.prototype.createObservableUpDownCounter = function (e, t) {
                            return E;
                        }),
                        (e.prototype.addBatchObservableCallback = function (e, t) {}),
                        (e.prototype.removeBatchObservableCallback = function (e) {}),
                        e
                    );
                })(),
                i = function () {},
                n = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (s(t, e), (t.prototype.add = function (e, t) {}), t);
                })(i),
                a = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (s(t, e), (t.prototype.add = function (e, t) {}), t);
                })(i),
                u = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (s(t, e), (t.prototype.record = function (e, t) {}), t);
                })(i),
                c = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (s(t, e), (t.prototype.record = function (e, t) {}), t);
                })(i),
                l = (function () {
                    function e() {}
                    return ((e.prototype.addCallback = function (e) {}), (e.prototype.removeCallback = function (e) {}), e);
                })(),
                h = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (s(t, e), t);
                })(l),
                d = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (s(t, e), t);
                })(l),
                p = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (s(t, e), t);
                })(l),
                f = new o(),
                g = new n(),
                m = new u(),
                b = new c(),
                y = new a(),
                v = new h(),
                w = new d(),
                E = new p();
            function R() {
                return f;
            }
        },
        73898: (e, t, r) => {
            'use strict';
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var s in r) e[s] = r[s];
                }
                return e;
            }
            r.d(t, { pL: () => i });
            var o = (function e(t, r) {
                function o(e, o, i) {
                    if ('undefined' != typeof document) {
                        ('number' == typeof (i = s({}, r, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                            i.expires && (i.expires = i.expires.toUTCString()),
                            (e = encodeURIComponent(e)
                                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[()]/g, escape)));
                        var n = '';
                        for (var a in i) i[a] && ((n += '; ' + a), !0 !== i[a] && (n += '=' + i[a].split(';')[0]));
                        return (document.cookie = e + '=' + t.write(o, e) + n);
                    }
                }
                return Object.create(
                    {
                        set: o,
                        get: function (e) {
                            if ('undefined' != typeof document && (!arguments.length || e)) {
                                for (var r = document.cookie ? document.cookie.split('; ') : [], s = {}, o = 0; o < r.length; o++) {
                                    var i = r[o].split('='),
                                        n = i.slice(1).join('=');
                                    try {
                                        var a = decodeURIComponent(i[0]);
                                        if (((s[a] = t.read(n, a)), e === a)) break;
                                    } catch (e) {}
                                }
                                return e ? s[e] : s;
                            }
                        },
                        remove: function (e, t) {
                            o(e, '', s({}, t, { expires: -1 }));
                        },
                        withAttributes: function (t) {
                            return e(this.converter, s({}, this.attributes, t));
                        },
                        withConverter: function (t) {
                            return e(s({}, this.converter, t), this.attributes);
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
            let i = (e) => {
                if (!(typeof window > 'u')) return o.get(e);
            };
        },
        77096: (e, t, r) => {
            'use strict';
            r.d(t, { E$: () => c, HZ: () => u, Mb: () => i, UX: () => a, aJ: () => d, aO: () => h, d6: () => n, oJ: () => s, qV: () => l, wL: () => o });
            var s = 'error.type',
                o = 'exception.message',
                i = 'exception.stacktrace',
                n = 'exception.type',
                a = 'service.name',
                u = 'service.version',
                c = 'telemetry.sdk.language',
                l = 'webjs',
                h = 'telemetry.sdk.name',
                d = 'telemetry.sdk.version';
        },
        77107: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { V: () => s }),
                (function (e) {
                    ((e[(e.SUCCESS = 0)] = 'SUCCESS'), (e[(e.FAILED = 1)] = 'FAILED'));
                })(s || (s = {})));
        },
        83579: (e) => {
            function t() {}
            ((t.prototype = {
                on: function (e, t, r) {
                    var s = this.e || (this.e = {});
                    return ((s[e] || (s[e] = [])).push({ fn: t, ctx: r }), this);
                },
                once: function (e, t, r) {
                    var s = this;
                    function o() {
                        (s.off(e, o), t.apply(r, arguments));
                    }
                    return ((o._ = t), this.on(e, o, r));
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), s = 0, o = r.length; s < o; s++)
                        r[s].fn.apply(r[s].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var r = this.e || (this.e = {}),
                        s = r[e],
                        o = [];
                    if (s && t) for (var i = 0, n = s.length; i < n; i++) s[i].fn !== t && s[i].fn._ !== t && o.push(s[i]);
                    return (o.length ? (r[e] = o) : delete r[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        85539: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => u });
            var s = r(88109),
                o = r(51729),
                i = r(14372),
                n = r(97295);
            let a = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
            class u {
                iframe;
                conversionId;
                measurementId;
                conversionLabels;
                constructor({ conversionId: e, measurementId: t, conversionLabels: r, ...n }) {
                    if (!e && !t) throw new i.Q('conversionId/measurementId', 'at least one ID must be provided');
                    if (void 0 !== r && !e) throw new i.Q('conversionLabels', 'requires conversionId');
                    ((this.conversionId = e),
                        (this.measurementId = t),
                        (this.conversionLabels = { ...r }),
                        (this.iframe = new o.K({
                            ...n,
                            connection: { tagSystem: s.d.GtagV1, args: { tagId: e, measurementId: t } },
                            prepareIframeUrl: this.prepareIframeUrl.bind(this),
                        })));
                }
                connect() {
                    this.iframe.connect();
                }
                send(e, t) {
                    let r = e,
                        s = { ...t },
                        o = Object.hasOwn(this.conversionLabels, e) ? this.conversionLabels[e] : void 0;
                    (void 0 !== this.conversionId && void 0 !== o
                        ? ((r = 'conversion'), (s.send_to = `${this.conversionId}/${o}`))
                        : void 0 !== this.measurementId && (s.send_to = this.measurementId),
                        this.iframe.send({ event: r, data: s }));
                }
                dispose() {
                    this.iframe.dispose();
                }
                prepareIframeUrl(e) {
                    (0, n.B)(new URL(window.location.href), e, a);
                }
            }
        },
        85853: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => s });
            var s = r(58785).K.instance();
        },
        87125: (e, t, r) => {
            'use strict';
            let s;
            r.d(t, { gk: () => l, QZ: () => c });
            var o = r(85853),
                i = r(77096);
            let n = { [i.aO]: 'opentelemetry', 'process.runtime.name': 'browser', [i.E$]: i.qV, [i.aJ]: '2.7.1' },
                a = (e) => null !== e && 'object' == typeof e && 'function' == typeof e.then;
            class u {
                _rawAttributes;
                _asyncAttributesPending = !1;
                _schemaUrl;
                _memoizedAttributes;
                static FromAttributeList(e, t) {
                    let r = new u({}, t);
                    return ((r._rawAttributes = h(e)), (r._asyncAttributesPending = e.filter(([e, t]) => a(t)).length > 0), r);
                }
                constructor(e, t) {
                    let r = e.attributes ?? {};
                    ((this._rawAttributes = Object.entries(r).map(([e, t]) => (a(t) && (this._asyncAttributesPending = !0), [e, t]))),
                        (this._rawAttributes = h(this._rawAttributes)),
                        (this._schemaUrl = (function (e) {
                            if ('string' == typeof e || void 0 === e) return e;
                            o.s.warn('Schema URL must be string or undefined, got %s. Schema URL will be ignored.', e);
                        })(t?.schemaUrl)));
                }
                get asyncAttributesPending() {
                    return this._asyncAttributesPending;
                }
                async waitForAsyncAttributes() {
                    if (this.asyncAttributesPending) {
                        for (let e = 0; e < this._rawAttributes.length; e++) {
                            let [t, r] = this._rawAttributes[e];
                            this._rawAttributes[e] = [t, a(r) ? await r : r];
                        }
                        this._asyncAttributesPending = !1;
                    }
                }
                get attributes() {
                    if ((this.asyncAttributesPending && o.s.error('Accessing resource attributes before async attributes settled'), this._memoizedAttributes))
                        return this._memoizedAttributes;
                    let e = {};
                    for (let [t, r] of this._rawAttributes) {
                        if (a(r)) {
                            o.s.debug(`Unsettled resource attribute ${t} skipped`);
                            continue;
                        }
                        null != r && (e[t] ??= r);
                    }
                    return (this._asyncAttributesPending || (this._memoizedAttributes = e), e);
                }
                getRawAttributes() {
                    return this._rawAttributes;
                }
                get schemaUrl() {
                    return this._schemaUrl;
                }
                merge(e) {
                    if (null == e) return this;
                    let t = (function (e, t) {
                        let r = e?.schemaUrl,
                            s = t?.schemaUrl,
                            i = void 0 === s || '' === s;
                        return void 0 === r || '' === r
                            ? s
                            : i || r === s
                              ? r
                              : void o.s.warn(
                                    'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
                                    r,
                                    s,
                                );
                    })(this, e);
                    return u.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], t ? { schemaUrl: t } : void 0);
                }
            }
            function c(e, t) {
                return u.FromAttributeList(Object.entries(e), t);
            }
            function l() {
                return c({
                    [i.UX]: (function () {
                        if (void 0 === s)
                            try {
                                let e = globalThis.process.argv0;
                                s = e ? `unknown_service:${e}` : 'unknown_service';
                            } catch {
                                s = 'unknown_service';
                            }
                        return s;
                    })(),
                    [i.E$]: n[i.E$],
                    [i.aO]: n[i.aO],
                    [i.aJ]: n[i.aJ],
                });
            }
            function h(e) {
                return e.map(([e, t]) =>
                    a(t)
                        ? [
                              e,
                              t.catch((t) => {
                                  o.s.debug('promise rejection for resource attribute: %s - %s', e, t);
                              }),
                          ]
                        : [e, t],
                );
            }
        },
        88109: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => s });
            let s = { YtmV1: 'ytm-1', GtagV1: 'gtag-1', FbqV1: 'fbq-1' };
        },
        89525: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { F: () => s }),
                (function (e) {
                    ((e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'),
                        (e[(e.TRACE = 1)] = 'TRACE'),
                        (e[(e.TRACE2 = 2)] = 'TRACE2'),
                        (e[(e.TRACE3 = 3)] = 'TRACE3'),
                        (e[(e.TRACE4 = 4)] = 'TRACE4'),
                        (e[(e.DEBUG = 5)] = 'DEBUG'),
                        (e[(e.DEBUG2 = 6)] = 'DEBUG2'),
                        (e[(e.DEBUG3 = 7)] = 'DEBUG3'),
                        (e[(e.DEBUG4 = 8)] = 'DEBUG4'),
                        (e[(e.INFO = 9)] = 'INFO'),
                        (e[(e.INFO2 = 10)] = 'INFO2'),
                        (e[(e.INFO3 = 11)] = 'INFO3'),
                        (e[(e.INFO4 = 12)] = 'INFO4'),
                        (e[(e.WARN = 13)] = 'WARN'),
                        (e[(e.WARN2 = 14)] = 'WARN2'),
                        (e[(e.WARN3 = 15)] = 'WARN3'),
                        (e[(e.WARN4 = 16)] = 'WARN4'),
                        (e[(e.ERROR = 17)] = 'ERROR'),
                        (e[(e.ERROR2 = 18)] = 'ERROR2'),
                        (e[(e.ERROR3 = 19)] = 'ERROR3'),
                        (e[(e.ERROR4 = 20)] = 'ERROR4'),
                        (e[(e.FATAL = 21)] = 'FATAL'),
                        (e[(e.FATAL2 = 22)] = 'FATAL2'),
                        (e[(e.FATAL3 = 23)] = 'FATAL3'),
                        (e[(e.FATAL4 = 24)] = 'FATAL4'));
                })(s || (s = {})));
        },
        94114: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => a, r: () => u });
            var s = r(28961),
                o = r(12990),
                i = '__OtelSdk',
                n = void 0 === globalThis.window ? globalThis : globalThis.window;
            function a() {
                return (
                    n.__OtelSdk || (n[i] = {}),
                    n.__OtelSdk.sdkReady || (n[i].sdkReady = !1),
                    Array.isArray(n.__OtelSdk.onReadyCallbacks) || (n[i].onReadyCallbacks = []),
                    n[i]
                );
            }
            function u() {
                let e = a();
                if (((e.internalLogger = o.K9.getLogger('otel-sdk')), (e.internalMeter = s.q.getMeter('otel-sdk')), (e.sdkReady = !0), e.onReadyCallbacks?.length)) {
                    let t = { logger: e.internalLogger, meter: e.internalMeter };
                    for (let r of e.onReadyCallbacks) 'function' == typeof r && r(t);
                    e.onReadyCallbacks.length = 0;
                }
            }
        },
        97295: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => s });
            let s = (e, t, r) => {
                for (let s of r) {
                    let r = e.searchParams.get(s);
                    null !== r && t.searchParams.set(s, r);
                }
            };
        },
    },
]);
