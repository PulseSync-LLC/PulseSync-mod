'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9289],
    {
        79289: (t, e, r) => {
            r.d(e, { WebTracerProvider: () => tA });
            let n = Function.prototype.toString,
                i = n.call(Object),
                s = Object.getPrototypeOf,
                o = Object.prototype,
                a = o.hasOwnProperty,
                l = Symbol ? Symbol.toStringTag : void 0,
                u = o.toString;
            function c(t) {
                var e, r, o;
                if (
                    null == (e = t) ||
                    'object' != typeof e ||
                    '[object Object]' !==
                        (null == (r = t)
                            ? void 0 === r
                                ? '[object Undefined]'
                                : '[object Null]'
                            : l && l in Object(r)
                              ? (function (t) {
                                    let e = a.call(t, l),
                                        r = t[l],
                                        n = !1;
                                    try {
                                        ((t[l] = void 0), (n = !0));
                                    } catch {}
                                    let i = u.call(t);
                                    return (n && (e ? (t[l] = r) : delete t[l]), i);
                                })(r)
                              : ((o = r), u.call(o)))
                )
                    return !1;
                let c = s(t);
                if (null === c) return !0;
                let p = a.call(c, 'constructor') && c.constructor;
                return 'function' == typeof p && p instanceof p && n.call(p) === i;
            }
            function p(t) {
                return h(t) ? t.slice() : t;
            }
            function d(t, e, r) {
                let n = r.get(t[e]) || [];
                for (let r = 0, i = n.length; r < i; r++) {
                    let i = n[r];
                    if (i.key === e && i.obj === t) return !0;
                }
                return !1;
            }
            function h(t) {
                return Array.isArray(t);
            }
            function _(t) {
                return 'function' == typeof t;
            }
            function f(t) {
                return !m(t) && !h(t) && !_(t) && 'object' == typeof t;
            }
            function m(t) {
                return 'string' == typeof t || 'number' == typeof t || 'boolean' == typeof t || void 0 === t || t instanceof Date || t instanceof RegExp || null === t;
            }
            var g,
                S,
                E,
                T,
                L,
                b,
                y = r(71730),
                O = r(20636),
                P = r(36697),
                v = r(76798),
                w = r(36715),
                C = r(14005);
            (!(function (t) {
                ((t[(t.INTERNAL = 0)] = 'INTERNAL'),
                    (t[(t.SERVER = 1)] = 'SERVER'),
                    (t[(t.CLIENT = 2)] = 'CLIENT'),
                    (t[(t.PRODUCER = 3)] = 'PRODUCER'),
                    (t[(t.CONSUMER = 4)] = 'CONSUMER'));
            })(g || (g = {})),
                (function (t) {
                    ((t[(t.NOT_RECORD = 0)] = 'NOT_RECORD'), (t[(t.RECORD = 1)] = 'RECORD'), (t[(t.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED'));
                })(S || (S = {})));
            var R = r(62760),
                A = r(73492);
            function N(t) {
                let e = {};
                if ('object' != typeof t || null == t) return e;
                for (let n in t) {
                    var r;
                    if (!Object.prototype.hasOwnProperty.call(t, n)) continue;
                    if ('string' != typeof (r = n) || '' === r) {
                        w.s.warn(`Invalid attribute key: ${n}`);
                        continue;
                    }
                    let i = t[n];
                    if (!I(i)) {
                        w.s.warn(`Invalid attribute value set for key: ${n}`);
                        continue;
                    }
                    Array.isArray(i) ? (e[n] = i.slice()) : (e[n] = i);
                }
                return e;
            }
            function I(t) {
                return (
                    null == t ||
                    (Array.isArray(t)
                        ? (function (t) {
                              let e;
                              for (let r of t) {
                                  if (null == r) continue;
                                  let t = typeof r;
                                  if (t !== e) {
                                      if (!e && k(t)) {
                                          e = t;
                                          continue;
                                      }
                                      return !1;
                                  }
                              }
                              return !0;
                          })(t)
                        : k(typeof t))
                );
            }
            function k(t) {
                switch (t) {
                    case 'number':
                    case 'boolean':
                    case 'string':
                        return !0;
                }
                return !1;
            }
            !(function (t) {
                ((t[(t.UNSET = 0)] = 'UNSET'), (t[(t.OK = 1)] = 'OK'), (t[(t.ERROR = 2)] = 'ERROR'));
            })(E || (E = {}));
            var D = r(53093),
                M = r(99785),
                x = r(47702);
            class U {
                _spanContext;
                kind;
                parentSpanContext;
                attributes = {};
                links = [];
                events = [];
                startTime;
                resource;
                instrumentationScope;
                _droppedAttributesCount = 0;
                _droppedEventsCount = 0;
                _droppedLinksCount = 0;
                _attributesCount = 0;
                name;
                status = { code: E.UNSET };
                endTime = [0, 0];
                _ended = !1;
                _duration = [-1, -1];
                _spanProcessor;
                _spanLimits;
                _attributeValueLengthLimit;
                _recordEndMetrics;
                _performanceStartTime;
                _performanceOffset;
                _startTimeProvided;
                constructor(t) {
                    let e = Date.now();
                    if (
                        ((this._spanContext = t.spanContext),
                        (this._performanceStartTime = D.ug.now()),
                        (this._performanceOffset = e - (this._performanceStartTime + D.ug.timeOrigin)),
                        (this._startTimeProvided = null != t.startTime),
                        (this._spanLimits = t.spanLimits),
                        (this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit ?? 0),
                        (this._spanProcessor = t.spanProcessor),
                        (this.name = t.name),
                        (this.parentSpanContext = t.parentSpanContext),
                        (this.kind = t.kind),
                        t.links)
                    )
                        for (let e of t.links) this.addLink(e);
                    ((this.startTime = this._getTime(t.startTime ?? e)),
                        (this.resource = t.resource),
                        (this.instrumentationScope = t.scope),
                        (this._recordEndMetrics = t.recordEndMetrics),
                        null != t.attributes && this.setAttributes(t.attributes),
                        this._spanProcessor.onStart(this, t.context));
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(t, e) {
                    if (null == e || this._isSpanEnded()) return this;
                    if (0 === t.length) return (w.s.warn(`Invalid attribute key: ${t}`), this);
                    if (!I(e)) return (w.s.warn(`Invalid attribute value set for key: ${t}`), this);
                    let { attributeCountLimit: r } = this._spanLimits,
                        n = !Object.prototype.hasOwnProperty.call(this.attributes, t);
                    return (
                        void 0 !== r && this._attributesCount >= r && n
                            ? this._droppedAttributesCount++
                            : ((this.attributes[t] = this._truncateToSize(e)), n && this._attributesCount++),
                        this
                    );
                }
                setAttributes(t) {
                    for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && this.setAttribute(e, t[e]);
                    return this;
                }
                addEvent(t, e, r) {
                    if (this._isSpanEnded()) return this;
                    let { eventCountLimit: n } = this._spanLimits;
                    if (0 === n) return (w.s.warn('No events allowed.'), this._droppedEventsCount++, this);
                    (void 0 !== n &&
                        this.events.length >= n &&
                        (0 === this._droppedEventsCount && w.s.debug('Dropping extra events.'), this.events.shift(), this._droppedEventsCount++),
                        (0, M.Ir)(e) && ((0, M.Ir)(r) || (r = e), (e = void 0)));
                    let i = N(e),
                        { attributePerEventCountLimit: s } = this._spanLimits,
                        o = {},
                        a = 0,
                        l = 0;
                    for (let t in i) {
                        if (!Object.prototype.hasOwnProperty.call(i, t)) continue;
                        let e = i[t];
                        if (void 0 !== s && l >= s) {
                            a++;
                            continue;
                        }
                        ((o[t] = this._truncateToSize(e)), l++);
                    }
                    return (this.events.push({ name: t, attributes: o, time: this._getTime(r), droppedAttributesCount: a }), this);
                }
                addLink(t) {
                    if (this._isSpanEnded()) return this;
                    let { linkCountLimit: e } = this._spanLimits;
                    if (0 === e) return (this._droppedLinksCount++, this);
                    void 0 !== e &&
                        this.links.length >= e &&
                        (0 === this._droppedLinksCount && w.s.debug('Dropping extra links.'), this.links.shift(), this._droppedLinksCount++);
                    let { attributePerLinkCountLimit: r } = this._spanLimits,
                        n = N(t.attributes),
                        i = {},
                        s = 0,
                        o = 0;
                    for (let t in n) {
                        if (!Object.prototype.hasOwnProperty.call(n, t)) continue;
                        let e = n[t];
                        if (void 0 !== r && o >= r) {
                            s++;
                            continue;
                        }
                        ((i[t] = this._truncateToSize(e)), o++);
                    }
                    let a = { context: t.context };
                    return (o > 0 && (a.attributes = i), s > 0 && (a.droppedAttributesCount = s), this.links.push(a), this);
                }
                addLinks(t) {
                    for (let e of t) this.addLink(e);
                    return this;
                }
                setStatus(t) {
                    if (this._isSpanEnded() || t.code === E.UNSET || this.status.code === E.OK) return this;
                    let e = { code: t.code };
                    return (
                        t.code === E.ERROR &&
                            ('string' == typeof t.message
                                ? (e.message = t.message)
                                : null != t.message && w.s.warn(`Dropping invalid status.message of type '${typeof t.message}', expected 'string'`)),
                        (this.status = e),
                        this
                    );
                }
                updateName(t) {
                    return (this._isSpanEnded() || (this.name = t), this);
                }
                end(t) {
                    if (this._isSpanEnded())
                        return void w.s.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
                    ((this.endTime = this._getTime(t)),
                        (this._duration = (0, M.W5)(this.startTime, this.endTime)),
                        this._duration[0] < 0 &&
                            (w.s.warn('Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.', this.startTime, this.endTime),
                            (this.endTime = this.startTime.slice()),
                            (this._duration = [0, 0])),
                        this._droppedEventsCount > 0 && w.s.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`),
                        this._droppedLinksCount > 0 && w.s.warn(`Dropped ${this._droppedLinksCount} links because linkCountLimit reached`),
                        this._spanProcessor.onEnding && this._spanProcessor.onEnding(this),
                        this._recordEndMetrics?.(),
                        (this._ended = !0),
                        this._spanProcessor.onEnd(this));
                }
                _getTime(t) {
                    if ('number' == typeof t && t <= D.ug.now()) return (0, M._5)(t + this._performanceOffset);
                    if ('number' == typeof t) return (0, M.lg)(t);
                    if (t instanceof Date) return (0, M.lg)(t.getTime());
                    if ((0, M.VL)(t)) return t;
                    if (this._startTimeProvided) return (0, M.lg)(Date.now());
                    let e = D.ug.now() - this._performanceStartTime;
                    return (0, M.mw)(this.startTime, (0, M.lg)(e));
                }
                isRecording() {
                    return !1 === this._ended;
                }
                recordException(t, e) {
                    let r = {};
                    ('string' == typeof t
                        ? (r[x.wL] = t)
                        : t &&
                          (t.code ? (r[x.d6] = t.code.toString()) : t.name && (r[x.d6] = t.name), t.message && (r[x.wL] = t.message), t.stack && (r[x.Mb] = t.stack)),
                        r[x.d6] || r[x.wL] ? this.addEvent('exception', r, e) : w.s.warn(`Failed to record an exception ${t}`));
                }
                get duration() {
                    return this._duration;
                }
                get ended() {
                    return this._ended;
                }
                get droppedAttributesCount() {
                    return this._droppedAttributesCount;
                }
                get droppedEventsCount() {
                    return this._droppedEventsCount;
                }
                get droppedLinksCount() {
                    return this._droppedLinksCount;
                }
                _isSpanEnded() {
                    if (this._ended) {
                        let t = Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
                        w.s.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, t);
                    }
                    return this._ended;
                }
                _truncateToLimitUtil(t, e) {
                    return t.length <= e ? t : t.substring(0, e);
                }
                _truncateToSize(t) {
                    let e = this._attributeValueLengthLimit;
                    return e <= 0
                        ? (w.s.warn(`Attribute value limit must be positive, got ${e}`), t)
                        : 'string' == typeof t
                          ? this._truncateToLimitUtil(t, e)
                          : Array.isArray(t)
                            ? t.map((t) => ('string' == typeof t ? this._truncateToLimitUtil(t, e) : t))
                            : t;
                }
            }
            var j = r(39232);
            !(function (t) {
                ((t[(t.NOT_RECORD = 0)] = 'NOT_RECORD'), (t[(t.RECORD = 1)] = 'RECORD'), (t[(t.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED'));
            })(T || (T = {}));
            class $ {
                shouldSample() {
                    return { decision: T.NOT_RECORD };
                }
                toString() {
                    return 'AlwaysOffSampler';
                }
            }
            class B {
                shouldSample() {
                    return { decision: T.RECORD_AND_SAMPLED };
                }
                toString() {
                    return 'AlwaysOnSampler';
                }
            }
            var G = r(45922),
                V = r(20829);
            class F {
                _root;
                _remoteParentSampled;
                _remoteParentNotSampled;
                _localParentSampled;
                _localParentNotSampled;
                constructor(t) {
                    ((this._root = t.root),
                        this._root || ((0, V.s)(Error('ParentBasedSampler must have a root sampler configured')), (this._root = new B())),
                        (this._remoteParentSampled = t.remoteParentSampled ?? new B()),
                        (this._remoteParentNotSampled = t.remoteParentNotSampled ?? new $()),
                        (this._localParentSampled = t.localParentSampled ?? new B()),
                        (this._localParentNotSampled = t.localParentNotSampled ?? new $()));
                }
                shouldSample(t, e, r, n, i, s) {
                    let o = v.u.getSpanContext(t);
                    return o && (0, G.YA)(o)
                        ? o.isRemote
                            ? o.traceFlags & R.X.SAMPLED
                                ? this._remoteParentSampled.shouldSample(t, e, r, n, i, s)
                                : this._remoteParentNotSampled.shouldSample(t, e, r, n, i, s)
                            : o.traceFlags & R.X.SAMPLED
                              ? this._localParentSampled.shouldSample(t, e, r, n, i, s)
                              : this._localParentNotSampled.shouldSample(t, e, r, n, i, s)
                        : this._root.shouldSample(t, e, r, n, i, s);
                }
                toString() {
                    return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
                }
            }
            class J {
                _ratio;
                _upperBound;
                constructor(t = 0) {
                    ((this._ratio = this._normalize(t)), (this._upperBound = Math.floor(0xffffffff * this._ratio)));
                }
                shouldSample(t, e) {
                    return { decision: (0, G.hX)(e) && this._accumulate(e) < this._upperBound ? T.RECORD_AND_SAMPLED : T.NOT_RECORD };
                }
                toString() {
                    return `TraceIdRatioBased{${this._ratio}}`;
                }
                _normalize(t) {
                    return 'number' != typeof t || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t;
                }
                _accumulate(t) {
                    let e = 0;
                    for (let r = 0; r < 32; r += 8) {
                        let n = 0;
                        for (let e = 0; e < 8; e++) {
                            let i = t.charCodeAt(r + e);
                            n = (n << 4) | (i < 58 ? i - 48 : i < 71 ? i - 55 : i - 87);
                        }
                        e = (e ^ n) >>> 0;
                    }
                    return e;
                }
            }
            function K() {
                return {
                    sampler: z(),
                    forceFlushTimeoutMillis: 3e4,
                    generalLimits: {
                        attributeValueLengthLimit: (0, j.Jk)('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? 1 / 0,
                        attributeCountLimit: (0, j.Jk)('OTEL_ATTRIBUTE_COUNT_LIMIT') ?? 128,
                    },
                    spanLimits: {
                        attributeValueLengthLimit: (0, j.Jk)('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? 1 / 0,
                        attributeCountLimit: (0, j.Jk)('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ?? 128,
                        linkCountLimit: (0, j.Jk)('OTEL_SPAN_LINK_COUNT_LIMIT') ?? 128,
                        eventCountLimit: (0, j.Jk)('OTEL_SPAN_EVENT_COUNT_LIMIT') ?? 128,
                        attributePerEventCountLimit: (0, j.Jk)('OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT') ?? 128,
                        attributePerLinkCountLimit: (0, j.Jk)('OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT') ?? 128,
                    },
                };
            }
            function z() {
                let t = (0, j.HF)('OTEL_TRACES_SAMPLER') ?? L.ParentBasedAlwaysOn;
                switch (t) {
                    case L.AlwaysOn:
                        return new B();
                    case L.AlwaysOff:
                        return new $();
                    case L.ParentBasedAlwaysOn:
                        return new F({ root: new B() });
                    case L.ParentBasedAlwaysOff:
                        return new F({ root: new $() });
                    case L.TraceIdRatio:
                        return new J(H());
                    case L.ParentBasedTraceIdRatio:
                        return new F({ root: new J(H()) });
                    default:
                        return (w.s.error(`OTEL_TRACES_SAMPLER value "${t}" invalid, defaulting to "${L.ParentBasedAlwaysOn}".`), new F({ root: new B() }));
                }
            }
            function H() {
                let t = (0, j.Jk)('OTEL_TRACES_SAMPLER_ARG');
                return null == t
                    ? (w.s.error('OTEL_TRACES_SAMPLER_ARG is blank, defaulting to 1.'), 1)
                    : t < 0 || t > 1
                      ? (w.s.error(`OTEL_TRACES_SAMPLER_ARG=${t} was given, but it is out of range ([0..1]), defaulting to 1.`), 1)
                      : t;
            }
            !(function (t) {
                ((t.AlwaysOff = 'always_off'),
                    (t.AlwaysOn = 'always_on'),
                    (t.ParentBasedAlwaysOff = 'parentbased_always_off'),
                    (t.ParentBasedAlwaysOn = 'parentbased_always_on'),
                    (t.ParentBasedTraceIdRatio = 'parentbased_traceidratio'),
                    (t.TraceIdRatio = 'traceidratio'));
            })(L || (L = {}));
            let X = 1 / 0,
                Y = new Uint8Array(16),
                W = new Uint8Array(8),
                Z = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, '0'));
            function q(t) {
                for (let e = 0; e < t.length; e++) t[e] = (256 * Math.random()) >>> 0;
                for (let e = 0; e < t.length; e++) if (t[e] > 0) return;
                t[t.length - 1] = 1;
            }
            function Q(t) {
                let e = '';
                for (let r = 0; r < t.length; r++) e += Z[t[r]];
                return e;
            }
            class tt {
                generateTraceId() {
                    return (q(Y), Q(Y));
                }
                generateSpanId() {
                    return (q(W), Q(W));
                }
            }
            let te = 'otel.span.sampling_result';
            class tr {
                startedSpans;
                liveSpans;
                constructor(t) {
                    ((this.startedSpans = t.createCounter('otel.sdk.span.started', { unit: '{span}', description: 'The number of created spans.' })),
                        (this.liveSpans = t.createUpDownCounter('otel.sdk.span.live', { unit: '{span}', description: 'The number of currently live spans.' })));
                }
                startSpan(t, e) {
                    var r;
                    let n = (function (t) {
                        switch (t) {
                            case T.RECORD_AND_SAMPLED:
                                return 'RECORD_AND_SAMPLE';
                            case T.RECORD:
                                return 'RECORD_ONLY';
                            case T.NOT_RECORD:
                                return 'DROP';
                        }
                    })(e);
                    if ((this.startedSpans.add(1, { 'otel.span.parent.origin': (r = t) ? (r.isRemote ? 'remote' : 'local') : 'none', [te]: n }), e === T.NOT_RECORD))
                        return () => {};
                    let i = { [te]: n };
                    return (
                        this.liveSpans.add(1, i),
                        () => {
                            this.liveSpans.add(-1, i);
                        }
                    );
                }
            }
            class tn {
                _sampler;
                _generalLimits;
                _spanLimits;
                _idGenerator;
                instrumentationScope;
                _resource;
                _spanProcessor;
                _tracerMetrics;
                constructor(t, e, r, n) {
                    let i = (function (t) {
                        let e = { sampler: z() },
                            r = K(),
                            n = Object.assign({}, r, e, t);
                        return (
                            (n.generalLimits = Object.assign({}, r.generalLimits, t.generalLimits || {})),
                            (n.spanLimits = Object.assign({}, r.spanLimits, t.spanLimits || {})),
                            n
                        );
                    })(e);
                    ((this._sampler = i.sampler),
                        (this._generalLimits = i.generalLimits),
                        (this._spanLimits = i.spanLimits),
                        (this._idGenerator = e.idGenerator || new tt()),
                        (this._resource = r),
                        (this._spanProcessor = n),
                        (this.instrumentationScope = t));
                    let s = i.meterProvider ? i.meterProvider.getMeter('@opentelemetry/sdk-trace', '2.7.1') : O.Ac();
                    this._tracerMetrics = new tr(s);
                }
                startSpan(t, e = {}, r = P._.active()) {
                    let n, i, s;
                    e.root && (r = v.u.deleteSpan(r));
                    let o = v.u.getSpan(r);
                    if ((0, A.Zf)(r)) return (w.s.debug('Instrumentation suppressed, returning Noop Span'), v.u.wrapSpanContext(C.dM));
                    let a = o?.spanContext(),
                        l = this._idGenerator.generateSpanId();
                    a && v.u.isSpanContextValid(a) ? ((i = a.traceId), (s = a.traceState), (n = a)) : (i = this._idGenerator.generateTraceId());
                    let u = e.kind ?? g.INTERNAL,
                        c = (e.links ?? []).map((t) => ({ context: t.context, attributes: N(t.attributes) })),
                        p = N(e.attributes),
                        d = this._sampler.shouldSample(r, i, t, u, p, c),
                        h = this._tracerMetrics.startSpan(a, d.decision);
                    s = d.traceState ?? s;
                    let _ = { traceId: i, spanId: l, traceFlags: d.decision === S.RECORD_AND_SAMPLED ? R.X.SAMPLED : R.X.NONE, traceState: s };
                    if (d.decision === S.NOT_RECORD) return (w.s.debug('Recording is off, propagating context in a non-recording span'), v.u.wrapSpanContext(_));
                    let f = N(Object.assign(p, d.attributes));
                    return new U({
                        resource: this._resource,
                        scope: this.instrumentationScope,
                        context: r,
                        spanContext: _,
                        name: t,
                        kind: u,
                        links: c,
                        parentSpanContext: n,
                        attributes: f,
                        startTime: e.startTime,
                        spanProcessor: this._spanProcessor,
                        spanLimits: this._spanLimits,
                        recordEndMetrics: h,
                    });
                }
                startActiveSpan(t, e, r, n) {
                    let i, s, o;
                    if (arguments.length < 2) return;
                    2 == arguments.length ? (o = e) : 3 == arguments.length ? ((i = e), (o = r)) : ((i = e), (s = r), (o = n));
                    let a = s ?? P._.active(),
                        l = this.startSpan(t, i, a),
                        u = v.u.setSpan(a, l);
                    return P._.with(u, o, void 0, l);
                }
                getGeneralLimits() {
                    return this._generalLimits;
                }
                getSpanLimits() {
                    return this._spanLimits;
                }
            }
            class ti {
                _spanProcessors;
                constructor(t) {
                    this._spanProcessors = t;
                }
                forceFlush() {
                    let t = [];
                    for (let e of this._spanProcessors) t.push(e.forceFlush());
                    return new Promise((e) => {
                        Promise.all(t)
                            .then(() => {
                                e();
                            })
                            .catch((t) => {
                                ((0, V.s)(t || Error('MultiSpanProcessor: forceFlush failed')), e());
                            });
                    });
                }
                onStart(t, e) {
                    for (let r of this._spanProcessors) r.onStart(t, e);
                }
                onEnding(t) {
                    for (let e of this._spanProcessors) e.onEnding && e.onEnding(t);
                }
                onEnd(t) {
                    for (let e of this._spanProcessors) e.onEnd(t);
                }
                shutdown() {
                    let t = [];
                    for (let e of this._spanProcessors) t.push(e.shutdown());
                    return new Promise((e, r) => {
                        Promise.all(t).then(() => {
                            e();
                        }, r);
                    });
                }
            }
            !(function (t) {
                ((t[(t.resolved = 0)] = 'resolved'), (t[(t.timeout = 1)] = 'timeout'), (t[(t.error = 2)] = 'error'), (t[(t.unresolved = 3)] = 'unresolved'));
            })(b || (b = {}));
            class ts {
                _config;
                _tracers = new Map();
                _resource;
                _activeSpanProcessor;
                constructor(t = {}) {
                    let e = (function (...t) {
                        let e = t.shift(),
                            r = new WeakMap();
                        for (; t.length > 0;)
                            e = (function t(e, r, n = 0, i) {
                                let s;
                                if (!(n > 20)) {
                                    if ((n++, m(e) || m(r) || _(r))) s = p(r);
                                    else if (h(e)) {
                                        if (((s = e.slice()), h(r))) for (let t = 0, e = r.length; t < e; t++) s.push(p(r[t]));
                                        else if (f(r)) {
                                            let t = Object.keys(r);
                                            for (let e = 0, n = t.length; e < n; e++) {
                                                let n = t[e];
                                                '__proto__' !== n && 'constructor' !== n && 'prototype' !== n && (s[n] = p(r[n]));
                                            }
                                        }
                                    } else if (f(e))
                                        if (f(r)) {
                                            var o, a;
                                            if (((o = e), (a = r), !(c(o) && c(a)))) return r;
                                            s = Object.assign({}, e);
                                            let l = Object.keys(r);
                                            for (let o = 0, a = l.length; o < a; o++) {
                                                let a = l[o];
                                                if ('__proto__' === a || 'constructor' === a || 'prototype' === a) continue;
                                                let u = r[a];
                                                if (m(u)) void 0 === u ? delete s[a] : (s[a] = u);
                                                else {
                                                    let o = s[a];
                                                    if (d(e, a, i) || d(r, a, i)) delete s[a];
                                                    else {
                                                        if (f(o) && f(u)) {
                                                            let t = i.get(o) || [],
                                                                n = i.get(u) || [];
                                                            (t.push({ obj: e, key: a }), n.push({ obj: r, key: a }), i.set(o, t), i.set(u, n));
                                                        }
                                                        s[a] = t(s[a], u, n, i);
                                                    }
                                                }
                                            }
                                        } else s = r;
                                    return s;
                                }
                            })(e, t.shift(), 0, r);
                        return e;
                    })(
                        {},
                        K(),
                        (function (t) {
                            let e = Object.assign({}, t.spanLimits);
                            return (
                                (e.attributeCountLimit =
                                    t.spanLimits?.attributeCountLimit ??
                                    t.generalLimits?.attributeCountLimit ??
                                    (0, j.Jk)('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ??
                                    (0, j.Jk)('OTEL_ATTRIBUTE_COUNT_LIMIT') ??
                                    128),
                                (e.attributeValueLengthLimit =
                                    t.spanLimits?.attributeValueLengthLimit ??
                                    t.generalLimits?.attributeValueLengthLimit ??
                                    (0, j.Jk)('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ??
                                    (0, j.Jk)('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ??
                                    X),
                                Object.assign({}, t, { spanLimits: e })
                            );
                        })(t),
                    );
                    ((this._resource = e.resource ?? (0, y.gk)()), (this._config = Object.assign({}, e, { resource: this._resource })));
                    let r = [];
                    (t.spanProcessors?.length && r.push(...t.spanProcessors), (this._activeSpanProcessor = new ti(r)));
                }
                getTracer(t, e, r) {
                    let n = `${t}@${e || ''}:${r?.schemaUrl || ''}`;
                    return (
                        this._tracers.has(n) ||
                            this._tracers.set(n, new tn({ name: t, version: e, schemaUrl: r?.schemaUrl }, this._config, this._resource, this._activeSpanProcessor)),
                        this._tracers.get(n)
                    );
                }
                forceFlush() {
                    let t = this._config.forceFlushTimeoutMillis,
                        e = this._activeSpanProcessor._spanProcessors.map(
                            (e) =>
                                new Promise((r) => {
                                    let n,
                                        i = setTimeout(() => {
                                            (r(Error(`Span processor did not completed within timeout period of ${t} ms`)), (n = b.timeout));
                                        }, t);
                                    e.forceFlush()
                                        .then(() => {
                                            (clearTimeout(i), n !== b.timeout && r((n = b.resolved)));
                                        })
                                        .catch((t) => {
                                            (clearTimeout(i), (n = b.error), r(t));
                                        });
                                }),
                        );
                    return new Promise((t, r) => {
                        Promise.all(e)
                            .then((e) => {
                                let n = e.filter((t) => t !== b.resolved);
                                n.length > 0 ? r(n) : t();
                            })
                            .catch((t) => r([t]));
                    });
                }
                shutdown() {
                    return this._activeSpanProcessor.shutdown();
                }
            }
            var to = r(92556),
                ta = r(3225),
                tl = (function () {
                    function t() {}
                    return (
                        (t.prototype.inject = function (t, e) {}),
                        (t.prototype.extract = function (t, e) {
                            return t;
                        }),
                        (t.prototype.fields = function () {
                            return [];
                        }),
                        t
                    );
                })(),
                tu = r(1308),
                tc = r(34431),
                tp = (0, r(84300).n)('OpenTelemetry Baggage Key');
            function td(t) {
                return t.getValue(tp) || void 0;
            }
            function th() {
                return td(tc._.getInstance().active());
            }
            function t_(t, e) {
                return t.setValue(tp, e);
            }
            function tf(t) {
                return t.deleteValue(tp);
            }
            var tm = r(28802),
                tg = function (t, e) {
                    var r = 'function' == typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var n,
                        i,
                        s = r.call(t),
                        o = [];
                    try {
                        for (; (void 0 === e || e-- > 0) && !(n = s.next()).done;) o.push(n.value);
                    } catch (t) {
                        i = { error: t };
                    } finally {
                        try {
                            n && !n.done && (r = s.return) && r.call(s);
                        } finally {
                            if (i) throw i.error;
                        }
                    }
                    return o;
                },
                tS = function (t) {
                    var e = 'function' == typeof Symbol && Symbol.iterator,
                        r = e && t[e],
                        n = 0;
                    if (r) return r.call(t);
                    if (t && 'number' == typeof t.length)
                        return {
                            next: function () {
                                return (t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t });
                            },
                        };
                    throw TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
                },
                tE = (function () {
                    function t(t) {
                        this._entries = t ? new Map(t) : new Map();
                    }
                    return (
                        (t.prototype.getEntry = function (t) {
                            var e = this._entries.get(t);
                            if (e) return Object.assign({}, e);
                        }),
                        (t.prototype.getAllEntries = function () {
                            return Array.from(this._entries.entries()).map(function (t) {
                                var e = tg(t, 2);
                                return [e[0], e[1]];
                            });
                        }),
                        (t.prototype.setEntry = function (e, r) {
                            var n = new t(this._entries);
                            return (n._entries.set(e, r), n);
                        }),
                        (t.prototype.removeEntry = function (e) {
                            var r = new t(this._entries);
                            return (r._entries.delete(e), r);
                        }),
                        (t.prototype.removeEntries = function () {
                            for (var e, r, n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                            var s = new t(this._entries);
                            try {
                                for (var o = tS(n), a = o.next(); !a.done; a = o.next()) {
                                    var l = a.value;
                                    s._entries.delete(l);
                                }
                            } catch (t) {
                                e = { error: t };
                            } finally {
                                try {
                                    a && !a.done && (r = o.return) && r.call(o);
                                } finally {
                                    if (e) throw e.error;
                                }
                            }
                            return s;
                        }),
                        (t.prototype.clear = function () {
                            return new t();
                        }),
                        t
                    );
                })(),
                tT = Symbol('BaggageEntryMetadata'),
                tL = tm.K.instance();
            function tb(t) {
                return (void 0 === t && (t = {}), new tE(new Map(Object.entries(t))));
            }
            var ty = 'propagation',
                tO = new tl(),
                tP = (function () {
                    function t() {
                        ((this.createBaggage = tb), (this.getBaggage = td), (this.getActiveBaggage = th), (this.setBaggage = t_), (this.deleteBaggage = tf));
                    }
                    return (
                        (t.getInstance = function () {
                            return (this._instance || (this._instance = new t()), this._instance);
                        }),
                        (t.prototype.setGlobalPropagator = function (t) {
                            return (0, ta.$G)(ty, t, tm.K.instance());
                        }),
                        (t.prototype.inject = function (t, e, r) {
                            return (void 0 === r && (r = tu.U), this._getGlobalPropagator().inject(t, e, r));
                        }),
                        (t.prototype.extract = function (t, e, r) {
                            return (void 0 === r && (r = tu.q), this._getGlobalPropagator().extract(t, e, r));
                        }),
                        (t.prototype.fields = function () {
                            return this._getGlobalPropagator().fields();
                        }),
                        (t.prototype.disable = function () {
                            (0, ta.kv)(ty, tm.K.instance());
                        }),
                        (t.prototype._getGlobalPropagator = function () {
                            return (0, ta.mS)(ty) || tO;
                        }),
                        t
                    );
                })().getInstance();
            class tv {
                _propagators;
                _fields;
                constructor(t = {}) {
                    this._propagators = t.propagators ?? [];
                    let e = new Set();
                    for (let t of this._propagators) for (let r of 'function' == typeof t.fields ? t.fields() : []) e.add(r);
                    this._fields = Array.from(e);
                }
                inject(t, e, r) {
                    for (let n of this._propagators)
                        try {
                            n.inject(t, e, r);
                        } catch (t) {
                            w.s.warn(`Failed to inject with ${n.constructor.name}. Err: ${t.message}`);
                        }
                }
                extract(t, e, r) {
                    return this._propagators.reduce((t, n) => {
                        try {
                            return n.extract(t, e, r);
                        } catch (t) {
                            w.s.warn(`Failed to extract with ${n.constructor.name}. Err: ${t.message}`);
                        }
                        return t;
                    }, t);
                }
                fields() {
                    return this._fields.slice();
                }
            }
            var tw = r(99443);
            let tC = 'baggage';
            class tR {
                inject(t, e, r) {
                    let n = tP.getBaggage(t);
                    if (!n || (0, A.Zf)(t)) return;
                    let i = n
                        .getAllEntries()
                        .map(([t, e]) => {
                            let r = `${encodeURIComponent(t)}=${encodeURIComponent(e.value)}`;
                            return (void 0 !== e.metadata && (r += ';' + e.metadata.toString()), r);
                        })
                        .filter((t) => t.length <= 4096)
                        .slice(0, 180)
                        .reduce((t, e) => {
                            let r = `${t}${'' !== t ? ',' : ''}${e}`;
                            return r.length > 8192 ? t : r;
                        }, '');
                    i.length > 0 && r.set(e, tC, i);
                }
                extract(t, e, r) {
                    let n = r.get(e, tC),
                        i = Array.isArray(n) ? n.join(',') : n;
                    if (!i) return t;
                    let s = {};
                    return 0 === i.length ||
                        (i.split(',').forEach((t) => {
                            let e = (function (t) {
                                let e, r, n;
                                if (!t) return;
                                let i = t.indexOf(';'),
                                    s = -1 === i ? t : t.substring(0, i),
                                    o = s.indexOf('=');
                                if (o <= 0) return;
                                let a = s.substring(0, o).trim(),
                                    l = s.substring(o + 1).trim();
                                if (a && l) {
                                    try {
                                        ((e = decodeURIComponent(a)), (r = decodeURIComponent(l)));
                                    } catch {
                                        return;
                                    }
                                    if (-1 !== i && i < t.length - 1) {
                                        var u;
                                        ('string' != typeof (u = t.substring(i + 1)) &&
                                            (tL.error('Cannot create baggage metadata from unknown type: ' + typeof u), (u = '')),
                                            (n = {
                                                __TYPE__: tT,
                                                toString: function () {
                                                    return u;
                                                },
                                            }));
                                    }
                                    return { key: e, value: r, metadata: n };
                                }
                            })(t);
                            if (e) {
                                let t = { value: e.value };
                                (e.metadata && (t.metadata = e.metadata), (s[e.key] = t));
                            }
                        }),
                        0 === Object.entries(s).length)
                        ? t
                        : tP.setBaggage(t, tP.createBaggage(s));
                }
                fields() {
                    return [tC];
                }
            }
            class tA extends ts {
                constructor(t = {}) {
                    super(t);
                }
                register(t = {}) {
                    (v.u.setGlobalTracerProvider(this),
                        (function (t) {
                            if (null !== t) {
                                if (void 0 === t) return tP.setGlobalPropagator(new tv({ propagators: [new tw.lm(), new tR()] }));
                                tP.setGlobalPropagator(t);
                            }
                        })(t.propagator),
                        (function (t) {
                            if (null !== t) {
                                if (void 0 === t) {
                                    let t = new to.D();
                                    (t.enable(), P._.setGlobalContextManager(t));
                                    return;
                                }
                                (t.enable(), P._.setGlobalContextManager(t));
                            }
                        })(t.contextManager));
                }
            }
        },
    },
]);
