'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7860],
    {
        37860: (e, t, r) => {
            r.d(t, { initBrowserLogs: () => Q });
            var s = r(89525),
                i = class {
                    constructor(e = {}) {
                        this.showAttributes = e.showAttributes ?? !1;
                    }
                    showAttributes;
                    logAnyValue(e) {
                        return 'object' == typeof e ? JSON.stringify(e) : e;
                    }
                    async shutdown() {}
                    async forceFlush() {}
                    colorByLevel(e = s.F.INFO) {
                        return e >= s.F.ERROR ? '\x1b[31m' : e >= s.F.WARN ? '\x1b[33m' : e < s.F.INFO ? '\x1b[36m' : '';
                    }
                    createConsoleMethodByLevel(e = s.F.ERROR) {
                        return e < s.F.INFO ? 'debug' : e < s.F.WARN ? 'info' : e < s.F.ERROR ? 'warn' : 'error';
                    }
                },
                o = r(15489),
                n = r(77096),
                h = r(84625),
                a = r(91618),
                l = r(77107),
                u = r(62413);
            class c {
                _exporter;
                _shutdownOnce;
                _unresolvedExports;
                constructor(e) {
                    ((this._exporter = e), (this._shutdownOnce = new h.I(this._shutdown, this)), (this._unresolvedExports = new Set()));
                }
                onEmit(e, t) {
                    if (this._shutdownOnce.isCalled) return;
                    let r = () =>
                        a.mM
                            ._export(this._exporter, [e])
                            .then((e) => {
                                e.code !== l.V.SUCCESS && (0, u.s)(e.error ?? Error(`SimpleLogRecordProcessor: log record export failed (status ${e})`));
                            })
                            .catch(u.s);
                    if (e.resource.asyncAttributesPending) {
                        let t = e.resource.waitForAsyncAttributes?.().then(() => (this._unresolvedExports.delete(t), r()), u.s);
                        null != t && this._unresolvedExports.add(t);
                    } else r();
                }
                async forceFlush() {
                    await Promise.all(Array.from(this._unresolvedExports));
                }
                shutdown() {
                    return this._shutdownOnce.call();
                }
                _shutdown() {
                    return this._exporter.shutdown();
                }
            }
            var d = r(95855),
                _ = r(85853),
                m = r(51342);
            async function p(e) {
                let t = [];
                for (let r = 0, s = e.length; r < s; r++) {
                    let s = e[r];
                    s.resource.asyncAttributesPending && s.resource.waitForAsyncAttributes && t.push(s.resource.waitForAsyncAttributes());
                }
                null != t && t.length > 0 && (await Promise.all(t));
            }
            class g {
                _exportCompleted;
                _exportScheduledPromise;
                _exportScheduledResolve;
                constructor(e, t, r) {
                    ((this._exportScheduledPromise = new Promise((e) => {
                        this._exportScheduledResolve = e;
                    })),
                        (this._exportCompleted = this._executeExport(e, t, r)));
                }
                get exportCompleted() {
                    return this._exportCompleted;
                }
                get exportScheduled() {
                    return this._exportScheduledPromise;
                }
                async _executeExport(e, t, r) {
                    try {
                        (await p(t), await d._.with((0, m.M1)(d._.active()), async () => this._exportWithTimeout(e, t, r)));
                    } catch (e) {
                        ((0, u.s)(e), this._exportScheduledResolve());
                    }
                }
                async _exportWithTimeout(e, t, r) {
                    return new Promise((s, i) => {
                        let o = setTimeout(() => {
                            i(Error('Timeout'));
                        }, r);
                        (e.export(t, (e) => {
                            (clearTimeout(o), e.code === l.V.SUCCESS ? s() : i(e.error ?? Error('BatchLogRecordProcessor: log record export failed')));
                        }),
                            this._exportScheduledResolve());
                    });
                }
            }
            class f {
                _maxExportBatchSize;
                _maxQueueSize;
                _scheduledDelayMillis;
                _exportTimeoutMillis;
                _exporter;
                _currentExport = null;
                _finishedLogRecords = [];
                _timer;
                _shutdownOnce;
                _flushing = !1;
                constructor(e, t) {
                    ((this._exporter = e),
                        (this._maxExportBatchSize = t?.maxExportBatchSize ?? 512),
                        (this._maxQueueSize = t?.maxQueueSize ?? 2048),
                        (this._scheduledDelayMillis = t?.scheduledDelayMillis ?? 5e3),
                        (this._exportTimeoutMillis = t?.exportTimeoutMillis ?? 3e4),
                        (this._shutdownOnce = new h.I(this._shutdown, this)),
                        this._maxExportBatchSize > this._maxQueueSize &&
                            (_.s.warn(
                                'BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize',
                            ),
                            (this._maxExportBatchSize = this._maxQueueSize)));
                }
                onEmit(e) {
                    this._shutdownOnce.isCalled || this._addToBuffer(e);
                }
                forceFlush() {
                    return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
                }
                _addToBuffer(e) {
                    this._finishedLogRecords.length >= this._maxQueueSize || (this._finishedLogRecords.push(e), this._maybeStartTimer());
                }
                shutdown() {
                    return this._shutdownOnce.call();
                }
                async _shutdown() {
                    (this.onShutdown(), await this._flushAll(), await this._exporter.shutdown());
                }
                async _flushAll() {
                    if (this._flushing) return;
                    this._flushing = !0;
                    let e = this._finishedLogRecords;
                    for (
                        this._finishedLogRecords = [],
                            this._clearTimer(),
                            null !== this._currentExport && (await this._exporter.forceFlush(), await this._currentExport.exportCompleted, (this._currentExport = null));
                        e.length > 0;
                    ) {
                        let t;
                        e.length <= this._maxExportBatchSize ? ((t = e), (e = [])) : (t = e.splice(0, this._maxExportBatchSize));
                        let r = new g(this._exporter, t, this._exportTimeoutMillis);
                        this._currentExport = r;
                        try {
                            (await r.exportScheduled, await this._exporter.forceFlush(), await r.exportCompleted);
                        } catch (e) {
                            (0, u.s)(e);
                        } finally {
                            this._currentExport = null;
                        }
                    }
                    ((this._flushing = !1), this._maybeStartTimer());
                }
                _extractBatch() {
                    if (0 === this._finishedLogRecords.length) return null;
                    if (!(this._finishedLogRecords.length <= this._maxExportBatchSize)) return this._finishedLogRecords.splice(0, this._maxExportBatchSize);
                    {
                        let e = this._finishedLogRecords;
                        return ((this._finishedLogRecords = []), e);
                    }
                }
                _exportOneBatch() {
                    this._clearTimer();
                    let e = this._extractBatch();
                    if (null === e) return;
                    let t = new g(this._exporter, e, this._exportTimeoutMillis);
                    ((this._currentExport = t),
                        t.exportCompleted
                            .then(() => {
                                ((this._currentExport = null), this._maybeStartTimer());
                            })
                            .catch((e) => {
                                ((this._currentExport = null), (0, u.s)(e), this._maybeStartTimer());
                            }));
                }
                _maybeStartTimer() {
                    if (!this._shutdownOnce.isCalled && !this._flushing && 0 !== this._finishedLogRecords.length && null === this._currentExport) {
                        if (this._finishedLogRecords.length >= this._maxExportBatchSize) return void this._exportOneBatch();
                        void 0 === this._timer &&
                            ((this._timer = setTimeout(() => {
                                ((this._timer = void 0), this._exportOneBatch());
                            }, this._scheduledDelayMillis)),
                            'number' != typeof this._timer && this._timer.unref());
                    }
                }
                _clearTimer() {
                    void 0 !== this._timer && (clearTimeout(this._timer), (this._timer = void 0));
                }
            }
            class b extends f {
                _visibilityChangeListener;
                _pageHideListener;
                constructor(e, t) {
                    (super(e, t), this._onInit(t));
                }
                onShutdown() {
                    'undefined' != typeof document &&
                        (this._visibilityChangeListener && document.removeEventListener('visibilitychange', this._visibilityChangeListener),
                        this._pageHideListener && document.removeEventListener('pagehide', this._pageHideListener));
                }
                _onInit(e) {
                    e?.disableAutoFlushOnDocumentHide !== !0 &&
                        'undefined' != typeof document &&
                        ((this._visibilityChangeListener = () => {
                            'hidden' === document.visibilityState && this.forceFlush();
                        }),
                        (this._pageHideListener = () => {
                            this.forceFlush();
                        }),
                        document.addEventListener('visibilitychange', this._visibilityChangeListener),
                        document.addEventListener('pagehide', this._pageHideListener));
                }
            }
            var x = r(66832),
                y = r(87125),
                w = r(54625),
                v = r(76704),
                S = r(29518),
                L = r(88223);
            class C {
                hrTime;
                hrTimeObserved;
                spanContext;
                resource;
                instrumentationScope;
                attributes = {};
                _severityText;
                _severityNumber;
                _body;
                _eventName;
                _attributesCount = 0;
                _droppedAttributesCount = 0;
                _isReadonly = !1;
                _logRecordLimits;
                set severityText(e) {
                    this._isLogRecordReadonly() || (this._severityText = e);
                }
                get severityText() {
                    return this._severityText;
                }
                set severityNumber(e) {
                    this._isLogRecordReadonly() || (this._severityNumber = e);
                }
                get severityNumber() {
                    return this._severityNumber;
                }
                set body(e) {
                    this._isLogRecordReadonly() || (this._body = e);
                }
                get body() {
                    return this._body;
                }
                get eventName() {
                    return this._eventName;
                }
                set eventName(e) {
                    this._isLogRecordReadonly() || (this._eventName = e);
                }
                get droppedAttributesCount() {
                    return this._droppedAttributesCount;
                }
                constructor(e, t, r) {
                    let {
                            timestamp: s,
                            observedTimestamp: i,
                            eventName: o,
                            severityNumber: n,
                            severityText: h,
                            body: a,
                            attributes: l = {},
                            exception: u,
                            context: c,
                        } = r,
                        d = Date.now();
                    if (((this.hrTime = (0, L.KJ)(s ?? d)), (this.hrTimeObserved = (0, L.KJ)(i ?? d)), c)) {
                        let e = w.u.getSpanContext(c);
                        e && v.YA(e) && (this.spanContext = e);
                    }
                    ((this.severityNumber = n),
                        (this.severityText = h),
                        (this.body = a),
                        (this.resource = e.resource),
                        (this.instrumentationScope = t),
                        (this._logRecordLimits = e.logRecordLimits),
                        (this._eventName = o),
                        this.setAttributes(l),
                        null != u && this._setException(u));
                }
                setAttribute(e, t) {
                    if (this._isLogRecordReadonly()) return this;
                    if (0 === e.length) return (_.s.warn(`Invalid attribute key: ${e}`), this);
                    if (
                        !(function e(t, r) {
                            return (
                                !!(null == t || 'string' == typeof t || 'number' == typeof t || 'boolean' == typeof t || t instanceof Uint8Array) ||
                                ('object' == typeof t &&
                                    !r.has(t) &&
                                    ((r.add(t), Array.isArray(t))
                                        ? t.every((t) => e(t, r))
                                        : (t.constructor === Object || void 0 === t.constructor) && Object.values(t).every((t) => e(t, r))))
                            );
                        })(t, new WeakSet())
                    )
                        return (_.s.warn(`Invalid attribute value set for key: ${e}`), this);
                    let r = !Object.prototype.hasOwnProperty.call(this.attributes, e);
                    return (
                        r && this._attributesCount >= this._logRecordLimits.attributeCountLimit
                            ? (this._droppedAttributesCount++, 1 === this._droppedAttributesCount && _.s.warn('Dropping extra attributes.'))
                            : ((this.attributes[e] = this._truncateToSize(t)), r && this._attributesCount++),
                        this
                    );
                }
                setAttributes(e) {
                    for (let [t, r] of Object.entries(e)) this.setAttribute(t, r);
                    return this;
                }
                setBody(e) {
                    return ((this.body = e), this);
                }
                setEventName(e) {
                    return ((this.eventName = e), this);
                }
                setSeverityNumber(e) {
                    return ((this.severityNumber = e), this);
                }
                setSeverityText(e) {
                    return ((this.severityText = e), this);
                }
                _makeReadonly() {
                    this._isReadonly = !0;
                }
                _truncateToSize(e) {
                    let t = this._logRecordLimits.attributeValueLengthLimit;
                    if (t <= 0) return (_.s.warn(`Attribute value limit must be positive, got ${t}`), e);
                    if (null == e) return e;
                    if ('string' == typeof e) return this._truncateToLimitUtil(e, t);
                    if (e instanceof Uint8Array) return e;
                    if (Array.isArray(e)) return e.map((e) => this._truncateToSize(e));
                    if ('object' == typeof e) {
                        let t = {};
                        for (let [r, s] of Object.entries(e)) t[r] = this._truncateToSize(s);
                        return t;
                    }
                    return e;
                }
                _setException(e) {
                    let t = !1;
                    ('string' == typeof e || 'number' == typeof e
                        ? (Object.hasOwn(this.attributes, n.wL) || this.setAttribute(n.wL, String(e)), (t = !0))
                        : e &&
                          'object' == typeof e &&
                          (e.code
                              ? (Object.hasOwn(this.attributes, n.d6) || this.setAttribute(n.d6, e.code.toString()), (t = !0))
                              : e.name && (Object.hasOwn(this.attributes, n.d6) || this.setAttribute(n.d6, e.name), (t = !0)),
                          e.message && (Object.hasOwn(this.attributes, n.wL) || this.setAttribute(n.wL, e.message), (t = !0)),
                          e.stack && (Object.hasOwn(this.attributes, n.Mb) || this.setAttribute(n.Mb, e.stack), (t = !0))),
                        t || _.s.warn(`Failed to record an exception ${e}`));
                }
                _truncateToLimitUtil(e, t) {
                    return e.length <= t ? e : e.substring(0, t);
                }
                _isLogRecordReadonly() {
                    return (this._isReadonly && _.s.warn('Can not execute the operation on emitted log record'), this._isReadonly);
                }
            }
            class R {
                instrumentationScope;
                _sharedState;
                _loggerConfig;
                constructor(e, t) {
                    ((this.instrumentationScope = e), (this._sharedState = t), (this._loggerConfig = this._sharedState.getLoggerConfig(this.instrumentationScope)));
                }
                emit(e) {
                    let t = e.context || d._.active();
                    if (!this.enabled(e)) return;
                    let r = new C(this._sharedState, this.instrumentationScope, { context: t, ...e });
                    (this._sharedState.loggerMetrics.emitLog(), this._sharedState.activeProcessor.onEmit(r, t), r._makeReadonly());
                }
                enabled(e) {
                    let t = this._loggerConfig;
                    if (t.disabled) return !1;
                    let r = e?.severityNumber;
                    if ('number' == typeof r && r !== s.F.UNSPECIFIED && r < t.minimumSeverity) return !1;
                    let i = e?.context || d._.active();
                    if (t.traceBased) {
                        let e = w.u.getSpanContext(i);
                        if (e && (0, v.YA)(e) && (e.traceFlags & S.X.SAMPLED) !== S.X.SAMPLED) return !1;
                    }
                    let o = { context: i, instrumentationScope: this.instrumentationScope, severityNumber: e?.severityNumber, eventName: e?.eventName };
                    for (let e of this._sharedState.processors) if (!e.enabled || e.enabled(o)) return !0;
                    return !1;
                }
            }
            var E = r(72886);
            class T {
                forceFlush() {
                    return Promise.resolve();
                }
                onEmit(e, t) {}
                shutdown() {
                    return Promise.resolve();
                }
                enabled(e) {
                    return !1;
                }
            }
            class O extends Error {
                constructor(e) {
                    (super(e), Object.setPrototypeOf(this, O.prototype));
                }
            }
            class A {
                processors;
                forceFlushTimeoutMillis;
                constructor(e, t) {
                    ((this.processors = e), (this.forceFlushTimeoutMillis = t));
                }
                async forceFlush() {
                    let e = this.forceFlushTimeoutMillis;
                    await Promise.all(
                        this.processors.map((t) => {
                            var r;
                            let s;
                            return (
                                (r = t.forceFlush()),
                                Promise.race([
                                    r,
                                    new Promise(function (t, r) {
                                        s = setTimeout(function () {
                                            r(new O('Operation timed out.'));
                                        }, e);
                                    }),
                                ]).then(
                                    (e) => (clearTimeout(s), e),
                                    (e) => {
                                        throw (clearTimeout(s), e);
                                    },
                                )
                            );
                        }),
                    );
                }
                onEmit(e, t) {
                    this.processors.forEach((r) => r.onEmit(e, t));
                }
                async shutdown() {
                    await Promise.all(this.processors.map((e) => e.shutdown()));
                }
                enabled(e) {
                    for (let t of this.processors) if (!t.enabled || t.enabled(e)) return !0;
                    return !1;
                }
            }
            class F {
                createdLogs;
                constructor(e) {
                    this.createdLogs = e.createCounter('otel.sdk.log.created', {
                        unit: '{log_record}',
                        description: 'The number of logs submitted to enabled SDK Loggers.',
                    });
                }
                emitLog() {
                    this.createdLogs.add(1);
                }
            }
            let P = { disabled: !1, minimumSeverity: s.F.UNSPECIFIED, traceBased: !1 },
                N = () => ({ ...P });
            class M {
                loggers = new Map();
                activeProcessor;
                registeredLogRecordProcessors = [];
                resource;
                forceFlushTimeoutMillis;
                logRecordLimits;
                processors;
                loggerMetrics;
                _loggerConfigurator;
                _loggerConfigs = new Map();
                constructor(e, t, r, s, i, o) {
                    ((this.resource = e),
                        (this.forceFlushTimeoutMillis = t),
                        (this.logRecordLimits = r),
                        (this.processors = s),
                        s.length > 0
                            ? ((this.registeredLogRecordProcessors = s), (this.activeProcessor = new A(this.registeredLogRecordProcessors, this.forceFlushTimeoutMillis)))
                            : (this.activeProcessor = new T()),
                        (this._loggerConfigurator = i ?? N));
                    let n = o ? o.getMeter('@opentelemetry/sdk-logs', '0.218.0') : (0, E.Ac)();
                    this.loggerMetrics = new F(n);
                }
                getLoggerConfig(e) {
                    let t = `${e.name}@${e.version || ''}:${e.schemaUrl || ''}`,
                        r = this._loggerConfigs.get(t);
                    return (r || ((r = this._loggerConfigurator(e)), this._loggerConfigs.set(t, r)), r);
                }
            }
            class B {
                _shutdownOnce;
                _sharedState;
                constructor(e = {}) {
                    let t = {
                        resource: e.resource ?? (0, y.gk)(),
                        forceFlushTimeoutMillis: e.forceFlushTimeoutMillis ?? 3e4,
                        logRecordLimits: {
                            attributeCountLimit: e.logRecordLimits?.attributeCountLimit ?? 128,
                            attributeValueLengthLimit: e.logRecordLimits?.attributeValueLengthLimit ?? 1 / 0,
                        },
                        loggerConfigurator: e.loggerConfigurator ?? N,
                        processors: e.processors ?? [],
                        meterProvider: e.meterProvider,
                    };
                    ((this._sharedState = new M(t.resource, t.forceFlushTimeoutMillis, t.logRecordLimits, t.processors, t.loggerConfigurator, t.meterProvider)),
                        (this._shutdownOnce = new h.I(this._shutdown, this)));
                }
                getLogger(e, t, r) {
                    if (this._shutdownOnce.isCalled) return (_.s.warn('A shutdown LoggerProvider cannot provide a Logger'), x.G);
                    e || _.s.warn('Logger requested without instrumentation scope name.');
                    let s = e || 'unknown',
                        i = `${s}@${t || ''}:${r?.schemaUrl || ''}`;
                    return (
                        this._sharedState.loggers.has(i) || this._sharedState.loggers.set(i, new R({ name: s, version: t, schemaUrl: r?.schemaUrl }, this._sharedState)),
                        this._sharedState.loggers.get(i)
                    );
                }
                forceFlush() {
                    return this._shutdownOnce.isCalled
                        ? (_.s.warn('invalid attempt to force flush after LoggerProvider shutdown'), this._shutdownOnce.promise)
                        : this._sharedState.activeProcessor.forceFlush();
                }
                shutdown() {
                    return this._shutdownOnce.isCalled
                        ? (_.s.warn('shutdown may only be called once per LoggerProvider'), this._shutdownOnce.promise)
                        : this._shutdownOnce.call();
                }
                _shutdown() {
                    return this._sharedState.activeProcessor.shutdown();
                }
            }
            var j = r(12990),
                z = r(55818),
                k = r(77728),
                $ = r(99240);
            let I = {
                serializeRequest: (e) => {
                    let t = {
                        resourceLogs: (function (e, t) {
                            return Array.from(
                                (function (e) {
                                    let t = new Map();
                                    for (let r of e) {
                                        let {
                                                resource: e,
                                                instrumentationScope: { name: s, version: i = '', schemaUrl: o = '' },
                                            } = r,
                                            n = t.get(e);
                                        n || ((n = new Map()), t.set(e, n));
                                        let h = `${s}@${i}:${o}`,
                                            a = n.get(h);
                                        (a || ((a = []), n.set(h, a)), a.push(r));
                                    }
                                    return t;
                                })(e),
                                ([e, r]) => {
                                    let s = (0, k.Zg)(e, t);
                                    return {
                                        resource: s,
                                        scopeLogs: Array.from(r, ([, e]) => ({
                                            scope: (0, k.d1)(e[0].instrumentationScope),
                                            logRecords: e.map((e) => {
                                                var r, s, i, o;
                                                return (
                                                    (r = e),
                                                    {
                                                        timeUnixNano: (s = t).encodeHrTime(r.hrTime),
                                                        observedTimeUnixNano: s.encodeHrTime(r.hrTimeObserved),
                                                        severityNumber: r.severityNumber,
                                                        severityText: r.severityText,
                                                        body: (0, k.Ff)(r.body, s),
                                                        eventName: r.eventName,
                                                        attributes: ((i = r.attributes), (o = s), Object.keys(i).map((e) => (0, k.EB)(e, i[e], o))),
                                                        droppedAttributesCount: r.droppedAttributesCount,
                                                        flags: r.spanContext?.traceFlags,
                                                        traceId: s.encodeOptionalSpanContext(r.spanContext?.traceId),
                                                        spanId: s.encodeOptionalSpanContext(r.spanContext?.spanId),
                                                    }
                                                );
                                            }),
                                            schemaUrl: e[0].instrumentationScope.schemaUrl,
                                        })),
                                        schemaUrl: s.schemaUrl,
                                    };
                                },
                            );
                        })(e, $.w9),
                    };
                    return new TextEncoder().encode(JSON.stringify(t));
                },
                deserializeResponse: (e) => {
                    if (0 === e.length) return {};
                    let t = new TextDecoder();
                    try {
                        return JSON.parse(t.decode(e));
                    } catch (e) {
                        return (_.s.warn(`Failed to parse logs export response: ${e.message}. Returning empty response`), {});
                    }
                },
            };
            var U = r(83081);
            class D extends z.S {
                constructor(e = {}) {
                    super((0, U.M)(e, I, 'v1/logs', { 'Content-Type': 'application/json' }));
                }
            }
            var V = class extends i {
                export(e, t) {
                    for (let t of e) {
                        let { severityNumber: e, severityText: r, attributes: s, body: i, resource: o } = t,
                            h = { ...(o.attributes ?? {}), ...s },
                            a = `${r} > ${this.logAnyValue(i)}`;
                        if ((console[this.createConsoleMethodByLevel(e)](a), this.showAttributes && Object.keys(h).length > 0))
                            for (let [e, t] of (console.groupCollapsed('Attributes:'), Object.entries(h))) console.log(`${e}: ${this.logAnyValue(t)}`);
                        else s?.[n.Mb] && console.log(`${s[n.Mb]}`);
                        console.groupEnd();
                    }
                    t?.({ code: l.V.SUCCESS });
                }
            };
            function H(e) {
                let t;
                return 'logRecordProcessor' in e
                    ? e.logRecordProcessor
                    : 'type' in e && 'none' === e.type
                      ? void 0
                      : ((t =
                            'logRecordExporter' in e
                                ? e.logRecordExporter
                                : 'otlp' === e.type
                                  ? new D({ url: e.url, headers: (0, o.t)(e.auth) })
                                  : new V({ showAttributes: e.showAttributes })),
                        !1 === e.batch ? new c(t) : new b(t, 'object' == typeof e.batch ? e.batch : void 0));
            }
            function Q(e, t) {
                let r = new B({ resource: e, logRecordLimits: {}, processors: Array.isArray(t) ? t.map((e) => H(e)).filter((e) => !!e) : [H(t)].filter((e) => !!e) });
                return (j.K9.setGlobalLoggerProvider(r), r);
            }
        },
        84625: (e, t, r) => {
            r.d(t, { I: () => i });
            class s {
                _promise;
                _resolve;
                _reject;
                constructor() {
                    this._promise = new Promise((e, t) => {
                        ((this._resolve = e), (this._reject = t));
                    });
                }
                get promise() {
                    return this._promise;
                }
                resolve(e) {
                    this._resolve(e);
                }
                reject(e) {
                    this._reject(e);
                }
            }
            class i {
                _isCalled = !1;
                _deferred = new s();
                _callback;
                _that;
                constructor(e, t) {
                    ((this._callback = e), (this._that = t));
                }
                get isCalled() {
                    return this._isCalled;
                }
                get promise() {
                    return this._deferred.promise;
                }
                call(...e) {
                    if (!this._isCalled) {
                        this._isCalled = !0;
                        try {
                            Promise.resolve(this._callback.call(this._that, ...e)).then(
                                (e) => this._deferred.resolve(e),
                                (e) => this._deferred.reject(e),
                            );
                        } catch (e) {
                            this._deferred.reject(e);
                        }
                    }
                    return this._deferred.promise;
                }
            }
        },
    },
]);
