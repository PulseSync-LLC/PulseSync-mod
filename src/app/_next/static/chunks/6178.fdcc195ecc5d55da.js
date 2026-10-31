'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6178],
    {
        16018: (e, t, s) => {
            s.d(t, { U: () => r, q: () => n });
            var n = {
                    get: function (e, t) {
                        if (null != e) return e[t];
                    },
                    keys: function (e) {
                        return null == e ? [] : Object.keys(e);
                    },
                },
                r = {
                    set: function (e, t, s) {
                        null != e && (e[t] = s);
                    },
                };
        },
        79306: (e, t, s) => {
            function n(e) {}
            function r(e) {}
            s.d(t, { HF: () => n, Jk: () => r });
        },
        84625: (e, t, s) => {
            s.d(t, { I: () => r });
            class n {
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
            class r {
                _isCalled = !1;
                _deferred = new n();
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
        96178: (e, t, s) => {
            s.d(t, { initBrowserTraces: () => A });
            var n = s(15489),
                r = s(52490),
                i = s(16018),
                a = s(88223),
                o = s(77107);
            class h {
                export(e, t) {
                    return this._sendSpans(e, t);
                }
                shutdown() {
                    return (this._sendSpans([]), this.forceFlush());
                }
                forceFlush() {
                    return Promise.resolve();
                }
                _exportInfo(e) {
                    return {
                        resource: { attributes: e.resource.attributes },
                        instrumentationScope: e.instrumentationScope,
                        traceId: e.spanContext().traceId,
                        parentSpanContext: e.parentSpanContext,
                        traceState: e.spanContext().traceState?.serialize(),
                        name: e.name,
                        id: e.spanContext().spanId,
                        kind: e.kind,
                        timestamp: (0, a.w_)(e.startTime),
                        duration: (0, a.w_)(e.duration),
                        attributes: e.attributes,
                        status: e.status,
                        events: e.events,
                        links: e.links,
                    };
                }
                _sendSpans(e, t) {
                    for (let t of e) console.dir(this._exportInfo(t), { depth: 3 });
                    if (t) return t({ code: o.V.SUCCESS });
                }
            }
            class u {
                _finishedSpans = [];
                _stopped = !1;
                export(e, t) {
                    if (this._stopped) return t({ code: o.V.FAILED, error: Error('Exporter has been stopped') });
                    (this._finishedSpans.push(...e), setTimeout(() => t({ code: o.V.SUCCESS }), 0));
                }
                shutdown() {
                    return ((this._stopped = !0), (this._finishedSpans = []), this.forceFlush());
                }
                forceFlush() {
                    return Promise.resolve();
                }
                reset() {
                    this._finishedSpans = [];
                }
                getFinishedSpans() {
                    return this._finishedSpans;
                }
            }
            var l = s(29518),
                c = s(84625),
                d = s(62413),
                p = s(91618);
            class _ {
                _exporter;
                _shutdownOnce;
                _pendingExports;
                constructor(e) {
                    ((this._exporter = e), (this._shutdownOnce = new c.I(this._shutdown, this)), (this._pendingExports = new Set()));
                }
                async forceFlush() {
                    (await Promise.all(Array.from(this._pendingExports)), this._exporter.forceFlush && (await this._exporter.forceFlush()));
                }
                onStart(e, t) {}
                onEnd(e) {
                    if (this._shutdownOnce.isCalled || (e.spanContext().traceFlags & l.X.SAMPLED) == 0) return;
                    let t = this._doExport(e).catch((e) => (0, d.s)(e));
                    (this._pendingExports.add(t), t.finally(() => this._pendingExports.delete(t)));
                }
                async _doExport(e) {
                    e.resource.asyncAttributesPending && (await e.resource.waitForAsyncAttributes?.());
                    let t = await p.mM._export(this._exporter, [e]);
                    if (t.code !== o.V.SUCCESS) throw t.error ?? Error(`SimpleSpanProcessor: span export failed (status ${t})`);
                }
                shutdown() {
                    return this._shutdownOnce.call();
                }
                _shutdown() {
                    return this._exporter.shutdown();
                }
            }
            var m = s(85853),
                x = s(95855),
                S = s(79306),
                f = s(51342);
            class b {
                _maxExportBatchSize;
                _maxQueueSize;
                _scheduledDelayMillis;
                _exportTimeoutMillis;
                _exporter;
                _isExporting = !1;
                _finishedSpans = [];
                _timer;
                _shutdownOnce;
                _droppedSpansCount = 0;
                constructor(e, t) {
                    ((this._exporter = e),
                        (this._maxExportBatchSize =
                            'number' == typeof t?.maxExportBatchSize ? t.maxExportBatchSize : ((0, S.Jk)('OTEL_BSP_MAX_EXPORT_BATCH_SIZE') ?? 512)),
                        (this._maxQueueSize = 'number' == typeof t?.maxQueueSize ? t.maxQueueSize : ((0, S.Jk)('OTEL_BSP_MAX_QUEUE_SIZE') ?? 2048)),
                        (this._scheduledDelayMillis =
                            'number' == typeof t?.scheduledDelayMillis ? t.scheduledDelayMillis : ((0, S.Jk)('OTEL_BSP_SCHEDULE_DELAY') ?? 5e3)),
                        (this._exportTimeoutMillis = 'number' == typeof t?.exportTimeoutMillis ? t.exportTimeoutMillis : ((0, S.Jk)('OTEL_BSP_EXPORT_TIMEOUT') ?? 3e4)),
                        (this._shutdownOnce = new c.I(this._shutdown, this)),
                        this._maxExportBatchSize > this._maxQueueSize &&
                            (m.s.warn(
                                'BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize',
                            ),
                            (this._maxExportBatchSize = this._maxQueueSize)));
                }
                forceFlush() {
                    return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
                }
                onStart(e, t) {}
                onEnd(e) {
                    this._shutdownOnce.isCalled || ((e.spanContext().traceFlags & l.X.SAMPLED) != 0 && this._addToBuffer(e));
                }
                shutdown() {
                    return this._shutdownOnce.call();
                }
                _shutdown() {
                    return Promise.resolve()
                        .then(() => this.onShutdown())
                        .then(() => this._flushAll())
                        .then(() => this._exporter.shutdown());
                }
                _addToBuffer(e) {
                    if (this._finishedSpans.length >= this._maxQueueSize) {
                        (0 === this._droppedSpansCount && m.s.debug('maxQueueSize reached, dropping spans'), this._droppedSpansCount++);
                        return;
                    }
                    (this._droppedSpansCount > 0 && (m.s.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`), (this._droppedSpansCount = 0)),
                        this._finishedSpans.push(e),
                        this._maybeStartTimer());
                }
                _flushAll() {
                    return new Promise((e, t) => {
                        let s = [],
                            n = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
                        for (let e = 0; e < n; e++) s.push(this._flushOneBatch());
                        Promise.all(s)
                            .then(() => {
                                e();
                            })
                            .catch(t);
                    });
                }
                _flushOneBatch() {
                    return (this._clearTimer(), 0 === this._finishedSpans.length)
                        ? Promise.resolve()
                        : new Promise((e, t) => {
                              let s = setTimeout(() => {
                                  t(Error('Timeout'));
                              }, this._exportTimeoutMillis);
                              x._.with((0, f.M1)(x._.active()), () => {
                                  let n;
                                  this._finishedSpans.length <= this._maxExportBatchSize
                                      ? ((n = this._finishedSpans), (this._finishedSpans = []))
                                      : (n = this._finishedSpans.splice(0, this._maxExportBatchSize));
                                  let r = () =>
                                          this._exporter.export(n, (n) => {
                                              (clearTimeout(s), n.code === o.V.SUCCESS ? e() : t(n.error ?? Error('BatchSpanProcessor: span export failed')));
                                          }),
                                      i = null;
                                  for (let e = 0, t = n.length; e < t; e++) {
                                      let t = n[e];
                                      t.resource.asyncAttributesPending && t.resource.waitForAsyncAttributes && (i ??= []).push(t.resource.waitForAsyncAttributes());
                                  }
                                  null === i
                                      ? r()
                                      : Promise.all(i).then(r, (e) => {
                                            ((0, d.s)(e), t(e));
                                        });
                              });
                          });
                }
                _maybeStartTimer() {
                    if (this._isExporting) return;
                    let e = () => {
                        ((this._isExporting = !0),
                            this._flushOneBatch()
                                .finally(() => {
                                    ((this._isExporting = !1), this._finishedSpans.length > 0 && (this._clearTimer(), this._maybeStartTimer()));
                                })
                                .catch((e) => {
                                    ((this._isExporting = !1), (0, d.s)(e));
                                }));
                    };
                    if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
                    void 0 === this._timer && ((this._timer = setTimeout(() => e(), this._scheduledDelayMillis)), 'number' != typeof this._timer && this._timer.unref());
                }
                _clearTimer() {
                    void 0 !== this._timer && (clearTimeout(this._timer), (this._timer = void 0));
                }
            }
            class C extends b {
                _visibilityChangeListener;
                _pageHideListener;
                constructor(e, t) {
                    (super(e, t), this.onInit(t));
                }
                onInit(e) {
                    e?.disableAutoFlushOnDocumentHide !== !0 &&
                        'undefined' != typeof document &&
                        ((this._visibilityChangeListener = () => {
                            'hidden' === document.visibilityState &&
                                this.forceFlush().catch((e) => {
                                    (0, d.s)(e);
                                });
                        }),
                        (this._pageHideListener = () => {
                            this.forceFlush().catch((e) => {
                                (0, d.s)(e);
                            });
                        }),
                        document.addEventListener('visibilitychange', this._visibilityChangeListener),
                        document.addEventListener('pagehide', this._pageHideListener));
                }
                onShutdown() {
                    'undefined' != typeof document &&
                        (this._visibilityChangeListener && document.removeEventListener('visibilitychange', this._visibilityChangeListener),
                        this._pageHideListener && document.removeEventListener('pagehide', this._pageHideListener));
                }
            }
            var w = s(97778),
                g = s(55818),
                E = s(77728);
            function v(e, t) {
                let s = (255 & e) | 256;
                return (t && (s |= 512), s);
            }
            var y = s(99240);
            let T = {
                serializeRequest: (e) => {
                    let t = {
                        resourceSpans: (function (e, t) {
                            let s = (function (e) {
                                    let t = new Map();
                                    for (let s of e) {
                                        let e = t.get(s.resource);
                                        e || ((e = new Map()), t.set(s.resource, e));
                                        let n = `${s.instrumentationScope.name}@${s.instrumentationScope.version || ''}:${s.instrumentationScope.schemaUrl || ''}`,
                                            r = e.get(n);
                                        (r || ((r = []), e.set(n, r)), r.push(s));
                                    }
                                    return t;
                                })(e),
                                n = [],
                                r = s.entries(),
                                i = r.next();
                            for (; !i.done;) {
                                let [e, s] = i.value,
                                    a = [],
                                    o = s.values(),
                                    h = o.next();
                                for (; !h.done;) {
                                    let e = h.value;
                                    if (e.length > 0) {
                                        let s = e.map((e) =>
                                            (function (e, t) {
                                                let s = e.spanContext(),
                                                    n = e.status,
                                                    r = e.parentSpanContext?.spanId ? t.encodeSpanContext(e.parentSpanContext?.spanId) : void 0;
                                                return {
                                                    traceId: t.encodeSpanContext(s.traceId),
                                                    spanId: t.encodeSpanContext(s.spanId),
                                                    parentSpanId: r,
                                                    traceState: s.traceState?.serialize(),
                                                    name: e.name,
                                                    kind: null == e.kind ? 0 : e.kind + 1,
                                                    startTimeUnixNano: t.encodeHrTime(e.startTime),
                                                    endTimeUnixNano: t.encodeHrTime(e.endTime),
                                                    attributes: (0, E.Zs)(e.attributes, t),
                                                    droppedAttributesCount: e.droppedAttributesCount,
                                                    events: e.events.map((e) => {
                                                        var s, n;
                                                        return (
                                                            (s = e),
                                                            (n = t),
                                                            {
                                                                attributes: s.attributes ? (0, E.Zs)(s.attributes, n) : [],
                                                                name: s.name,
                                                                timeUnixNano: n.encodeHrTime(s.time),
                                                                droppedAttributesCount: s.droppedAttributesCount || 0,
                                                            }
                                                        );
                                                    }),
                                                    droppedEventsCount: e.droppedEventsCount,
                                                    status: { code: n.code, message: n.message },
                                                    links: e.links.map((e) => {
                                                        var s, n;
                                                        return (
                                                            (s = e),
                                                            (n = t),
                                                            {
                                                                attributes: s.attributes ? (0, E.Zs)(s.attributes, n) : [],
                                                                spanId: n.encodeSpanContext(s.context.spanId),
                                                                traceId: n.encodeSpanContext(s.context.traceId),
                                                                traceState: s.context.traceState?.serialize(),
                                                                droppedAttributesCount: s.droppedAttributesCount || 0,
                                                                flags: v(s.context.traceFlags, s.context.isRemote),
                                                            }
                                                        );
                                                    }),
                                                    droppedLinksCount: e.droppedLinksCount,
                                                    flags: v(s.traceFlags, e.parentSpanContext?.isRemote),
                                                };
                                            })(e, t),
                                        );
                                        a.push({ scope: (0, E.d1)(e[0].instrumentationScope), spans: s, schemaUrl: e[0].instrumentationScope.schemaUrl });
                                    }
                                    h = o.next();
                                }
                                let u = (0, E.Zg)(e, t),
                                    l = { resource: u, scopeSpans: a, schemaUrl: u.schemaUrl };
                                (n.push(l), (i = r.next()));
                            }
                            return n;
                        })(e, y.w9),
                    };
                    return new TextEncoder().encode(JSON.stringify(t));
                },
                deserializeResponse: (e) => {
                    if (0 === e.length) return {};
                    let t = new TextDecoder();
                    try {
                        return JSON.parse(t.decode(e));
                    } catch (e) {
                        return (m.s.warn(`Failed to parse trace export response: ${e.message}. Returning empty response`), {});
                    }
                },
            };
            var k = s(83081);
            class z extends g.S {
                constructor(e = {}) {
                    super((0, k.M)(e, T, 'v1/traces', { 'Content-Type': 'application/json' }));
                }
            }
            var P = class extends w.D {
                defaultContext;
                constructor(e = r.l) {
                    (super(), (this.defaultContext = e));
                }
                active() {
                    let e = super.active();
                    return e === r.l ? this.defaultContext : e;
                }
                enable() {
                    return super.enable();
                }
                disable() {
                    return super.disable();
                }
            };
            async function A(e, t, a) {
                let { WebTracerProvider: o } = await s.e(5966).then(s.bind(s, 45966)),
                    { W3CTraceContextPropagator: l } = await Promise.resolve().then(s.bind(s, 91618)),
                    c = new l(),
                    d = a ? c.extract(r.l, { traceparent: a }, i.q) : r.l,
                    p = (function (e) {
                        let t;
                        switch (e.type) {
                            case 'otlp':
                                t = new z({ url: e.url, headers: (0, n.t)(e.auth) });
                                break;
                            case 'console':
                                t = new h();
                                break;
                            case 'in-memory':
                                t = new u();
                                break;
                            default:
                                return;
                        }
                        return !1 === e.batch ? new _(t) : new C(t, 'object' == typeof e.batch ? e.batch : void 0);
                    })(t),
                    m = new o({ resource: e, spanProcessors: p ? [p] : [] });
                return (m.register({ contextManager: new P(d), propagator: c }), m);
            }
        },
        97778: (e, t, s) => {
            s.d(t, { D: () => r });
            var n = s(52490);
            class r {
                _enabled = !1;
                _currentContext = n.l;
                _bindFunction(e = n.l, t) {
                    let s = this,
                        r = function (...n) {
                            return s.with(e, () => t.apply(this, n));
                        };
                    return (Object.defineProperty(r, 'length', { enumerable: !1, configurable: !0, writable: !1, value: t.length }), r);
                }
                active() {
                    return this._currentContext;
                }
                bind(e, t) {
                    return (void 0 === e && (e = this.active()), 'function' == typeof t) ? this._bindFunction(e, t) : t;
                }
                disable() {
                    return ((this._currentContext = n.l), (this._enabled = !1), this);
                }
                enable() {
                    return (this._enabled || ((this._enabled = !0), (this._currentContext = n.l)), this);
                }
                with(e, t, s, ...r) {
                    let i = this._currentContext;
                    this._currentContext = e || n.l;
                    try {
                        return t.call(s, ...r);
                    } finally {
                        this._currentContext = i;
                    }
                }
            }
        },
    },
]);
