(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1750],
    {
        3225: (e, t, r) => {
            'use strict';
            r.d(t, { mS: () => l, $G: () => u, kv: () => c });
            var o = 'object' == typeof globalThis ? globalThis : 'object' == typeof self ? self : 'object' == typeof window ? window : 'object' == typeof r.g ? r.g : {},
                n = '1.9.0',
                s = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,
                i = (function (e) {
                    var t = new Set([e]),
                        r = new Set(),
                        o = e.match(s);
                    if (!o)
                        return function () {
                            return !1;
                        };
                    var n = { major: +o[1], minor: +o[2], patch: +o[3], prerelease: o[4] };
                    if (null != n.prerelease)
                        return function (t) {
                            return t === e;
                        };
                    function i(e) {
                        return (r.add(e), !1);
                    }
                    return function (e) {
                        if (t.has(e)) return !0;
                        if (r.has(e)) return !1;
                        var o = e.match(s);
                        if (!o) return i(e);
                        var a = { major: +o[1], minor: +o[2], patch: +o[3], prerelease: o[4] };
                        if (null != a.prerelease || n.major !== a.major) return i(e);
                        if (0 === n.major) return n.minor === a.minor && n.patch <= a.patch ? (t.add(e), !0) : i(e);
                        return n.minor <= a.minor ? (t.add(e), !0) : i(e);
                    };
                })(n),
                a = Symbol.for('opentelemetry.js.api.' + n.split('.')[0]);
            function u(e, t, r, s) {
                void 0 === s && (s = !1);
                var i,
                    u = (o[a] = null != (i = o[a]) ? i : { version: n });
                if (!s && u[e]) {
                    var l = Error('@opentelemetry/api: Attempted duplicate registration of API: ' + e);
                    return (r.error(l.stack || l.message), !1);
                }
                if (u.version !== n) {
                    var l = Error('@opentelemetry/api: Registration of version v' + u.version + ' for ' + e + ' does not match previously registered API v' + n);
                    return (r.error(l.stack || l.message), !1);
                }
                return ((u[e] = t), r.debug('@opentelemetry/api: Registered a global for ' + e + ' v' + n + '.'), !0);
            }
            function l(e) {
                var t,
                    r,
                    n = null == (t = o[a]) ? void 0 : t.version;
                if (n && i(n)) return null == (r = o[a]) ? void 0 : r[e];
            }
            function c(e, t) {
                t.debug('@opentelemetry/api: Unregistering a global for ' + e + ' v' + n + '.');
                var r = o[a];
                r && delete r[e];
            }
        },
        4401: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => s });
            var o = r(88039),
                n = r(6807);
            class s extends n.q {
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
                    let n = o.Q[e];
                    console[n](...this.formatMessage(e, t, r));
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
                n = r(99245),
                s = r(40241),
                i = r(77270);
            let a = () => 'SECRET';
            class u {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, n) {
                    let s,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        u = (0, i.A)({ ...this.additionalData, ...r });
                    return (Object.keys(u).length && (s = this.obfuscateData(u)), n) ? `${a} ${o(s)}` : [a, s];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, n.A)(e, t) && (0, s.A)(e, t, a());
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
        9997: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => c });
            var o = r(92064),
                n = r(47702),
                s = r(30375),
                i = r(18867);
            function a(e, t, r) {
                let o = {};
                if (void 0 === e) return o;
                for (let [n, s] of Object.entries(e)) {
                    let e = r ? `${r}.${n}` : n;
                    switch (typeof s) {
                        case 'string':
                        case 'number':
                        case 'boolean':
                            o[e] = s;
                            break;
                        case 'object': {
                            if (Array.isArray(s)) {
                                o[e] = s.map((e) => ('object' == typeof e ? u(e) : String(e)));
                                break;
                            }
                            let r = u(s);
                            if (r.includes('[Circular]')) {
                                o[e] = '[Circular]';
                                break;
                            }
                            if (t <= 0 || null === s) {
                                o[e] = r;
                                break;
                            }
                            Object.assign(o, a(s, t - 1, e));
                            break;
                        }
                        case 'undefined':
                            o[e] = 'undefined';
                            break;
                        default:
                            o[e] = void 0;
                    }
                }
                return o;
            }
            function u(e) {
                return null === e ? 'null' : i(e);
            }
            var l = { trace: s.F.TRACE, debug: s.F.DEBUG, info: s.F.INFO, warn: s.F.WARN, error: s.F.ERROR, fatal: s.F.FATAL },
                c = class e {
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
                        let t = (0, o.n)();
                        t.internalLogger
                            ? (this.internalLogger = t.internalLogger)
                            : t.sdkReady || t.onReadyCallbacks?.push(({ logger: e }) => this.setInternalLogger(e));
                    }
                    getLogLevel(e) {
                        return 'string' == typeof e ? l[e] || s.F.INFO : (e ?? s.F.INFO);
                    }
                    child(t = {}) {
                        let r = 'function' == typeof this.attributes || 'function' == typeof t.commonAttributes,
                            o = () => ({ ...this.getAttributes(this.attributes), ...this.getAttributes(t.commonAttributes) });
                        return new e({
                            commonAttributes: void 0 === this.attributes && void 0 === t.commonAttributes ? void 0 : r ? o : o(),
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
                        let o = 'object' == typeof e || t >= s.F.ERROR ? this.processErrorInput(e) : {};
                        if (t >= this.level) {
                            let n = this.getAttributes(this.attributes),
                                i = { 'labels.logger': this.name, ...n, ...o, ...r },
                                u = {
                                    severityNumber: t,
                                    severityText: s.F[t],
                                    body: 'string' == typeof e ? e : e.message,
                                    attributes: this.maxAttributesDepth ? a(i, this.maxAttributesDepth) : i,
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
                        this.log(e, s.F.FATAL, t);
                    }
                    error(e, t) {
                        this.log(e, s.F.ERROR, t);
                    }
                    warn(e, t) {
                        this.log(e, s.F.WARN, t);
                    }
                    info(e, t) {
                        this.log(e, s.F.INFO, t);
                    }
                    debug(e, t) {
                        this.log(e, s.F.DEBUG, t);
                    }
                    trace(e, t) {
                        this.log(e, s.F.TRACE, t);
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
                                ? ((t[n.wL] = e), (t[n.Mb] = Error('noop').stack))
                                : ((t[n.oJ] = e.name),
                                  (t[n.d6] = e.name),
                                  (t[n.wL] = e.message),
                                  (t[n.Mb] = e.stack || this.extractCauseStack(e?.cause) || Error('noop').stack),
                                  e?.cause && (t['error.cause'] = a(e?.cause, 3))),
                            t
                        );
                    }
                };
        },
        15530: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => n, P: () => o });
            class o {
                emit(e) {}
                enabled() {
                    return !1;
                }
            }
            let n = new o();
        },
        17117: (e, t, r) => {
            'use strict';
            var o;
            (r.d(t, { V: () => o }),
                (function (e) {
                    ((e[(e.SUCCESS = 0)] = 'SUCCESS'), (e[(e.FAILED = 1)] = 'FAILED'));
                })(o || (o = {})));
        },
        18422: (e, t, r) => {
            'use strict';
            function o(e, ...t) {
                let r = e('i18n-jwt-token', t[0]);
                return r ? { 'X-Authorization': r } : {};
            }
            (r.d(t, { e: () => o }), r(71650));
        },
        18867: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function r(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function o(e) {
                var o = [];
                return (function e(n) {
                    if (null === n || 'object' != typeof n) return n;
                    if (-1 !== o.indexOf(n)) return '[Circular]';
                    if ((o.push(n), 'function' == typeof n.toJSON))
                        try {
                            var s = e(n.toJSON());
                            return (o.pop(), s);
                        } catch (e) {
                            return r(e);
                        }
                    if (Array.isArray(n)) {
                        var i = n.map(e);
                        return (o.pop(), i);
                    }
                    var a = Object.keys(n).reduce(function (o, s) {
                        return (
                            (o[s] = e(
                                (function (e, o) {
                                    if (t.call(e, o))
                                        try {
                                            return e[o];
                                        } catch (e) {
                                            return r(e);
                                        }
                                    return e[o];
                                })(n, s),
                            )),
                            o
                        );
                    }, {});
                    return (o.pop(), a);
                })(e);
            }
            ((e.exports = function (e, t, r) {
                return JSON.stringify(o(e), t, r);
            }),
                (e.exports.ensureProperties = o));
        },
        20636: (e, t, r) => {
            'use strict';
            r.d(t, { Ac: () => A, Dq: () => d });
            var o = (function () {
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
                        function o() {
                            this.constructor = t;
                        }
                        (e(t, r), (t.prototype = null === r ? Object.create(r) : ((o.prototype = r.prototype), new o())));
                    };
                })(),
                n = (function () {
                    function e() {}
                    return (
                        (e.prototype.createGauge = function (e, t) {
                            return y;
                        }),
                        (e.prototype.createHistogram = function (e, t) {
                            return m;
                        }),
                        (e.prototype.createCounter = function (e, t) {
                            return g;
                        }),
                        (e.prototype.createUpDownCounter = function (e, t) {
                            return b;
                        }),
                        (e.prototype.createObservableGauge = function (e, t) {
                            return w;
                        }),
                        (e.prototype.createObservableCounter = function (e, t) {
                            return v;
                        }),
                        (e.prototype.createObservableUpDownCounter = function (e, t) {
                            return R;
                        }),
                        (e.prototype.addBatchObservableCallback = function (e, t) {}),
                        (e.prototype.removeBatchObservableCallback = function (e) {}),
                        e
                    );
                })(),
                s = function () {},
                i = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (o(t, e), (t.prototype.add = function (e, t) {}), t);
                })(s),
                a = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (o(t, e), (t.prototype.add = function (e, t) {}), t);
                })(s),
                u = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (o(t, e), (t.prototype.record = function (e, t) {}), t);
                })(s),
                l = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (o(t, e), (t.prototype.record = function (e, t) {}), t);
                })(s),
                c = (function () {
                    function e() {}
                    return ((e.prototype.addCallback = function (e) {}), (e.prototype.removeCallback = function (e) {}), e);
                })(),
                h = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (o(t, e), t);
                })(c),
                f = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (o(t, e), t);
                })(c),
                p = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (o(t, e), t);
                })(c),
                d = new n(),
                g = new i(),
                y = new u(),
                m = new l(),
                b = new a(),
                v = new h(),
                w = new f(),
                R = new p();
            function A() {
                return d;
            }
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
                    function n() {
                        (o.off(e, n), t.apply(r, arguments));
                    }
                    return ((n._ = t), this.on(e, n, r));
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, n = r.length; o < n; o++)
                        r[o].fn.apply(r[o].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var r = this.e || (this.e = {}),
                        o = r[e],
                        n = [];
                    if (o && t) for (var s = 0, i = o.length; s < i; s++) o[s].fn !== t && o[s].fn._ !== t && n.push(o[s]);
                    return (n.length ? (r[e] = n) : delete r[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        28802: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var o,
                n = r(3225),
                s = function (e, t) {
                    var r = 'function' == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var o,
                        n,
                        s = r.call(e),
                        i = [];
                    try {
                        for (; (void 0 === t || t-- > 0) && !(o = s.next()).done;) i.push(o.value);
                    } catch (e) {
                        n = { error: e };
                    } finally {
                        try {
                            o && !o.done && (r = s.return) && r.call(s);
                        } finally {
                            if (n) throw n.error;
                        }
                    }
                    return i;
                },
                i = function (e, t, r) {
                    if (r || 2 == arguments.length)
                        for (var o, n = 0, s = t.length; n < s; n++) (!o && n in t) || (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
                    return e.concat(o || Array.prototype.slice.call(t));
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
                var o = (0, n.mS)('diag');
                if (o) return (r.unshift(t), o[e].apply(o, i([], s(r), !1)));
            }
            !(function (e) {
                ((e[(e.NONE = 0)] = 'NONE'),
                    (e[(e.ERROR = 30)] = 'ERROR'),
                    (e[(e.WARN = 50)] = 'WARN'),
                    (e[(e.INFO = 60)] = 'INFO'),
                    (e[(e.DEBUG = 70)] = 'DEBUG'),
                    (e[(e.VERBOSE = 80)] = 'VERBOSE'),
                    (e[(e.ALL = 9999)] = 'ALL'));
            })(o || (o = {}));
            var l = function (e, t) {
                    var r = 'function' == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var o,
                        n,
                        s = r.call(e),
                        i = [];
                    try {
                        for (; (void 0 === t || t-- > 0) && !(o = s.next()).done;) i.push(o.value);
                    } catch (e) {
                        n = { error: e };
                    } finally {
                        try {
                            o && !o.done && (r = s.return) && r.call(s);
                        } finally {
                            if (n) throw n.error;
                        }
                    }
                    return i;
                },
                c = function (e, t, r) {
                    if (r || 2 == arguments.length)
                        for (var o, n = 0, s = t.length; n < s; n++) (!o && n in t) || (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
                    return e.concat(o || Array.prototype.slice.call(t));
                },
                h = (function () {
                    function e() {
                        function e(e) {
                            return function () {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                var o = (0, n.mS)('diag');
                                if (o) return o[e].apply(o, c([], l(t), !1));
                            };
                        }
                        var t = this;
                        ((t.setLogger = function (e, r) {
                            if ((void 0 === r && (r = { logLevel: o.INFO }), e === t)) {
                                var s,
                                    i,
                                    a,
                                    u = Error(
                                        'Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation',
                                    );
                                return (t.error(null != (s = u.stack) ? s : u.message), !1);
                            }
                            'number' == typeof r && (r = { logLevel: r });
                            var l = (0, n.mS)('diag'),
                                c = (function (e, t) {
                                    function r(r, o) {
                                        var n = t[r];
                                        return 'function' == typeof n && e >= o ? n.bind(t) : function () {};
                                    }
                                    return (
                                        e < o.NONE ? (e = o.NONE) : e > o.ALL && (e = o.ALL),
                                        (t = t || {}),
                                        {
                                            error: r('error', o.ERROR),
                                            warn: r('warn', o.WARN),
                                            info: r('info', o.INFO),
                                            debug: r('debug', o.DEBUG),
                                            verbose: r('verbose', o.VERBOSE),
                                        }
                                    );
                                })(null != (i = r.logLevel) ? i : o.INFO, e);
                            if (l && !r.suppressOverrideMessage) {
                                var h = null != (a = Error().stack) ? a : '<failed to generate stacktrace>';
                                (l.warn('Current logger will be overwritten from ' + h), c.warn('Current logger will overwrite one already registered from ' + h));
                            }
                            return (0, n.$G)('diag', c, t, !0);
                        }),
                            (t.disable = function () {
                                (0, n.kv)('diag', t);
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
        30375: (e, t, r) => {
            'use strict';
            var o;
            (r.d(t, { F: () => o }),
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
                })(o || (o = {})));
        },
        30850: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => u });
            var o = r(20636),
                n = new ((function () {
                    function e() {}
                    return (
                        (e.prototype.getMeter = function (e, t, r) {
                            return o.Dq;
                        }),
                        e
                    );
                })())(),
                s = r(3225),
                i = r(28802),
                a = 'metrics',
                u = (function () {
                    function e() {}
                    return (
                        (e.getInstance = function () {
                            return (this._instance || (this._instance = new e()), this._instance);
                        }),
                        (e.prototype.setGlobalMeterProvider = function (e) {
                            return (0, s.$G)(a, e, i.K.instance());
                        }),
                        (e.prototype.getMeterProvider = function () {
                            return (0, s.mS)(a) || n;
                        }),
                        (e.prototype.getMeter = function (e, t, r) {
                            return this.getMeterProvider().getMeter(e, t, r);
                        }),
                        (e.prototype.disable = function () {
                            (0, s.kv)(a, i.K.instance());
                        }),
                        e
                    );
                })().getInstance();
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
            r.d(t, { pL: () => s });
            var n = (function e(t, r) {
                function n(e, n, s) {
                    if ('undefined' != typeof document) {
                        ('number' == typeof (s = o({}, r, s)).expires && (s.expires = new Date(Date.now() + 864e5 * s.expires)),
                            s.expires && (s.expires = s.expires.toUTCString()),
                            (e = encodeURIComponent(e)
                                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[()]/g, escape)));
                        var i = '';
                        for (var a in s) s[a] && ((i += '; ' + a), !0 !== s[a] && (i += '=' + s[a].split(';')[0]));
                        return (document.cookie = e + '=' + t.write(n, e) + i);
                    }
                }
                return Object.create(
                    {
                        set: n,
                        get: function (e) {
                            if ('undefined' != typeof document && (!arguments.length || e)) {
                                for (var r = document.cookie ? document.cookie.split('; ') : [], o = {}, n = 0; n < r.length; n++) {
                                    var s = r[n].split('='),
                                        i = s.slice(1).join('=');
                                    try {
                                        var a = decodeURIComponent(s[0]);
                                        if (((o[a] = t.read(i, a)), e === a)) break;
                                    } catch (e) {}
                                }
                                return e ? o[e] : o;
                            }
                        },
                        remove: function (e, t) {
                            n(e, '', o({}, t, { expires: -1 }));
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
            let s = (e) => {
                if (!(typeof window > 'u')) return n.get(e);
            };
        },
        36715: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => o });
            var o = r(28802).K.instance();
        },
        40241: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var o = r(62243);
            let n = function (e, t, r) {
                return null == e ? e : (0, o.A)(e, t, r);
            };
        },
        40466: (e, t, r) => {
            'use strict';
            r.d(t, { K9: () => h });
            let o = Symbol.for('io.opentelemetry.js.api.logs'),
                n = globalThis;
            var s = r(15530);
            class i {
                getLogger(e, t, r) {
                    return new s.P();
                }
            }
            let a = new i();
            class u {
                constructor(e, t, r, o) {
                    ((this._provider = e), (this.name = t), (this.version = r), (this.options = o));
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
                    return e ? ((this._delegate = e), this._delegate) : s.G;
                }
            }
            class l {
                getLogger(e, t, r) {
                    var o;
                    return null != (o = this._getDelegateLogger(e, t, r)) ? o : new u(this, e, t, r);
                }
                _getDelegate() {
                    var e;
                    return null != (e = this._delegate) ? e : a;
                }
                _setDelegate(e) {
                    this._delegate = e;
                }
                _getDelegateLogger(e, t, r) {
                    var o;
                    return null == (o = this._delegate) ? void 0 : o.getLogger(e, t, r);
                }
            }
            class c {
                constructor() {
                    this._proxyLoggerProvider = new l();
                }
                static getInstance() {
                    return (this._instance || (this._instance = new c()), this._instance);
                }
                setGlobalLoggerProvider(e) {
                    return n[o] ? this.getLoggerProvider() : ((n[o] = (t) => (1 === t ? e : a)), this._proxyLoggerProvider._setDelegate(e), e);
                }
                getLoggerProvider() {
                    var e, t;
                    return null != (t = null == (e = n[o]) ? void 0 : e.call(n, 1)) ? t : this._proxyLoggerProvider;
                }
                getLogger(e, t, r) {
                    return this.getLoggerProvider().getLogger(e, t, r);
                }
                disable() {
                    (delete n[o], (this._proxyLoggerProvider = new l()));
                }
            }
            let h = c.getInstance();
        },
        41769: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var o = r(77663);
            function n(e, t) {
                if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError('Expected a function');
                var r = function () {
                    var o = arguments,
                        n = t ? t.apply(this, o) : o[0],
                        s = r.cache;
                    if (s.has(n)) return s.get(n);
                    var i = e.apply(this, o);
                    return ((r.cache = s.set(n, i) || s), i);
                };
                return ((r.cache = new (n.Cache || o.A)()), r);
            }
            n.Cache = o.A;
            let s = n;
        },
        47702: (e, t, r) => {
            'use strict';
            r.d(t, { E$: () => l, HZ: () => u, Mb: () => s, UX: () => a, aJ: () => f, aO: () => h, d6: () => i, oJ: () => o, qV: () => c, wL: () => n });
            var o = 'error.type',
                n = 'exception.message',
                s = 'exception.stacktrace',
                i = 'exception.type',
                a = 'service.name',
                u = 'service.version',
                l = 'telemetry.sdk.language',
                c = 'webjs',
                h = 'telemetry.sdk.name',
                f = 'telemetry.sdk.version';
        },
        48660: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var o = r(95539),
                n = 1 / 0;
            let s = function (e) {
                if ('string' == typeof e || (0, o.A)(e)) return e;
                var t = e + '';
                return '0' == t && 1 / e == -n ? '-0' : t;
            };
        },
        56481: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var o = r(41769),
                n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                s = /\\(\\)?/g;
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
                    e.replace(n, function (e, r, o, n) {
                        t.push(o ? n.replace(s, '$1') : r || e);
                    }),
                    t
                );
            });
        },
        59353: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => i });
            var o = r(95919),
                n = r(76481),
                s = r(88091);
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
                    let t = new n.m('GET method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: o.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'GET', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'GET' }, void 0, t), Promise.reject(t));
                }
                async put(e) {
                    let t = new n.m('PUT method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: o.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'PUT', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'PUT' }, void 0, t), Promise.reject(t));
                }
                async patch(e) {
                    let t = new n.m('PATCH method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: o.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'PATCH', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'PATCH' }, void 0, t), Promise.reject(t));
                }
                async delete(e) {
                    let t = new n.m('DELETE method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: o.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'DELETE', supportedMethods: ['POST'] },
                    });
                    return (await this.executeBeforeErrorHooks(t), this.executeRequestDoneHooks(e, { method: 'DELETE' }, void 0, t), Promise.reject(t));
                }
                async head(e) {
                    let t = new n.m('HEAD method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
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
                        s,
                        i = t.method || 'GET';
                    if ('POST' !== i)
                        throw new n.m(`${i} method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.`, {
                            code: o.Z.METHOD_NOT_SUPPORTED,
                            cause: { method: i, supportedMethods: ['POST'] },
                        });
                    if ('undefined' == typeof navigator || 'function' != typeof navigator.sendBeacon)
                        throw new n.m('navigator.sendBeacon is not available in this environment', { code: o.Z.NOT_AVAILABLE });
                    try {
                        let o = this.mergeOptions(t),
                            n = this.buildUrl(e, o);
                        await this.executeBeforeRequestHooks(n, o);
                        let s = this.prepareBeaconData(o);
                        return (r = await this.executeWithRetries(n, s, o));
                    } catch (e) {
                        throw ((s = e), await this.executeBeforeErrorHooks(e, t), e);
                    } finally {
                        this.executeRequestDoneHooks(e, t, r, s);
                    }
                }
                mergeOptions(e) {
                    return { ...this.defaultOptions, ...e, headers: { ...this.defaultOptions.headers, ...e.headers } };
                }
                buildUrl(e, t) {
                    let r = e;
                    if (t.prefixUrl) {
                        let o = t.prefixUrl.toString().replace(/\/$/, ''),
                            n = e.replace(/^\//, '');
                        r = `${o}/${n}`;
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
                        o = e instanceof n.m ? e : new n.m(e instanceof Error ? e.message : 'Unknown error', { cause: e });
                    for (let e of r) {
                        let t = await e(o);
                        t instanceof n.m && Object.assign(o, t);
                    }
                }
                executeRequestDoneHooks(e, t, r, o) {
                    this.requestDoneHooks.forEach((n) => {
                        n({ url: e, options: t, response: r, error: o });
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
                                    new n.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: o.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            text: async () =>
                                Promise.reject(
                                    new n.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: o.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            arrayBuffer: async () =>
                                Promise.reject(
                                    new n.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: o.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            clone: () => this.createMockResponse(e, t),
                            request: { prefixUrl: t.prefixUrl, headers: t.headers, searchParams: t.searchParams, method: t.method },
                        }
                    );
                }
                async executeWithRetries(e, t, r) {
                    let s = r.retry?.config,
                        i = s?.totalRequestsLimit ?? 1,
                        a = new n.m('All retry attempts failed', { code: o.Z.RETRY_EXHAUSTED });
                    for (let a = 1; a <= i; a++)
                        try {
                            if (!navigator.sendBeacon(e, t)) {
                                let e = new n.m('Failed to queue beacon request.', { code: o.Z.QUEUE_FAILED });
                                if (await this.handleRetryableError(e, a, i, s)) continue;
                                throw e;
                            }
                            return this.createMockResponse(e, r);
                        } catch (t) {
                            let e = t instanceof n.m ? t : new n.m(t instanceof Error ? t.message : 'Unknown error', { cause: t, code: o.Z.RETRY_EXHAUSTED });
                            if (await this.handleRetryableError(e, a, i, s, r)) continue;
                            throw e;
                        }
                    throw a;
                }
                async handleRetryableError(e, t, r, o, n) {
                    if (t < r && this.shouldRetryForError(e, o)) {
                        await this.executeBeforeRetryHooks(e, t, n);
                        let r = this.getRetryDelay(e, t - 1, o);
                        return (r > 0 && (await (0, s.c)(r)), !0);
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
                        n = o?.attempts;
                    return !n || t >= n.length ? 0 : (n[t] ?? 0);
                }
            }
        },
        62243: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => u });
            var o = r(38794),
                n = r(93096),
                s = r(22232),
                i = r(13764),
                a = r(48660);
            let u = function (e, t, r, u) {
                if (!(0, i.A)(e)) return e;
                t = (0, n.A)(t, e);
                for (var l = -1, c = t.length, h = c - 1, f = e; null != f && ++l < c;) {
                    var p = (0, a.A)(t[l]),
                        d = r;
                    if ('__proto__' === p || 'constructor' === p || 'prototype' === p) break;
                    if (l != h) {
                        var g = f[p];
                        void 0 === (d = u ? u(g, p, f) : void 0) && (d = (0, i.A)(g) ? g : (0, s.A)(t[l + 1]) ? [] : {});
                    }
                    ((0, o.A)(f, p, d), (f = f[p]));
                }
                return e;
            };
        },
        68811: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            var o = r(54968),
                n = r(95539),
                s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                i = /^\w*$/;
            let a = function (e, t) {
                if ((0, o.A)(e)) return !1;
                var r = typeof e;
                return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || (0, n.A)(e)) || i.test(e) || !s.test(e) || (null != t && e in Object(t));
            };
        },
        71650: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => s, M: () => u, a: () => i, b: () => a, c: () => o, d: () => n, g: () => c });
            let o = 'i18n-geo-widget-device-id',
                n = 'i18n-geo-widget-replacements',
                s = 'i18n-enabled-replacement',
                i = 'i18n-jwt-token',
                a = 'i18n-geo-widget-replacement-cleared',
                u = 3,
                l = {
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
                c = (e, t) => l[t][e];
        },
        71730: (e, t, r) => {
            'use strict';
            let o;
            r.d(t, { gk: () => c, QZ: () => l });
            var n = r(36715),
                s = r(47702);
            let i = { [s.aO]: 'opentelemetry', 'process.runtime.name': 'browser', [s.E$]: s.qV, [s.aJ]: '2.7.1' },
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
                            n.s.warn('Schema URL must be string or undefined, got %s. Schema URL will be ignored.', e);
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
                    if ((this.asyncAttributesPending && n.s.error('Accessing resource attributes before async attributes settled'), this._memoizedAttributes))
                        return this._memoizedAttributes;
                    let e = {};
                    for (let [t, r] of this._rawAttributes) {
                        if (a(r)) {
                            n.s.debug(`Unsettled resource attribute ${t} skipped`);
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
                            o = t?.schemaUrl,
                            s = void 0 === o || '' === o;
                        return void 0 === r || '' === r
                            ? o
                            : s || r === o
                              ? r
                              : void n.s.warn(
                                    'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
                                    r,
                                    o,
                                );
                    })(this, e);
                    return u.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], t ? { schemaUrl: t } : void 0);
                }
            }
            function l(e, t) {
                return u.FromAttributeList(Object.entries(e), t);
            }
            function c() {
                return l({
                    [s.UX]: (function () {
                        if (void 0 === o)
                            try {
                                let e = globalThis.process.argv0;
                                o = e ? `unknown_service:${e}` : 'unknown_service';
                            } catch {
                                o = 'unknown_service';
                            }
                        return o;
                    })(),
                    [s.E$]: i[s.E$],
                    [s.aO]: i[s.aO],
                    [s.aJ]: i[s.aJ],
                });
            }
            function h(e) {
                return e.map(([e, t]) =>
                    a(t)
                        ? [
                              e,
                              t.catch((t) => {
                                  n.s.debug('promise rejection for resource attribute: %s - %s', e, t);
                              }),
                          ]
                        : [e, t],
                );
            }
        },
        73829: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => x });
            class o extends Error {
                constructor(e, t, r) {
                    let o = e.status || 0 === e.status ? e.status : '',
                        n = e.statusText || '',
                        s = `${o} ${n}`.trim();
                    (super(`Request failed with ${s ? `status code ${s}` : 'an unknown error'}`),
                        Object.defineProperty(this, 'response', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'HTTPError'),
                        (this.response = e),
                        (this.request = t),
                        (this.options = r));
                }
            }
            class n extends Error {
                constructor(e) {
                    (super('Request timed out'),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'TimeoutError'),
                        (this.request = e));
                }
            }
            let s = (e) => null !== e && 'object' == typeof e,
                i = (...e) => {
                    for (let t of e) if ((!s(t) || Array.isArray(t)) && void 0 !== t) throw TypeError('The `options` argument must be an object');
                    return u({}, ...e);
                },
                a = (e = {}, t = {}) => {
                    let r = new globalThis.Headers(e),
                        o = t instanceof globalThis.Headers;
                    for (let [e, n] of new globalThis.Headers(t).entries()) (o && 'undefined' === n) || void 0 === n ? r.delete(e) : r.set(e, n);
                    return r;
                },
                u = (...e) => {
                    let t = {},
                        r = {};
                    for (let o of e)
                        if (Array.isArray(o)) (Array.isArray(t) || (t = []), (t = [...t, ...o]));
                        else if (s(o)) {
                            for (let [e, r] of Object.entries(o)) (s(r) && e in t && (r = u(t[e], r)), (t = { ...t, [e]: r }));
                            s(o.headers) && ((r = a(r, o.headers)), (t.headers = r));
                        }
                    return t;
                },
                l = (() => {
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
                c = 'function' == typeof globalThis.AbortController,
                h = 'function' == typeof globalThis.ReadableStream,
                f = 'function' == typeof globalThis.FormData,
                p = ['get', 'post', 'put', 'patch', 'head', 'delete'],
                d = { json: 'application/json', text: 'text/*', formData: 'multipart/form-data', arrayBuffer: '*/*', blob: '*/*' },
                g = Symbol('stop'),
                y = [413, 429, 503],
                m = {
                    limit: 2,
                    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
                    statusCodes: [408, 413, 429, 500, 502, 503, 504],
                    afterStatusCodes: y,
                    maxRetryAfter: 1 / 0,
                    backoffLimit: 1 / 0,
                };
            async function b(e, t, r) {
                return new Promise((o, s) => {
                    let i = setTimeout(() => {
                        (t && t.abort(), s(new n(e)));
                    }, r.timeout);
                    r.fetch(e)
                        .then(o)
                        .catch(s)
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
                        t.addEventListener('abort', n, { once: !0 });
                    }
                    function n() {
                        (o(w(t)), clearTimeout(s));
                    }
                    let s = setTimeout(() => {
                        (t?.removeEventListener('abort', n), r());
                    }, e);
                });
            }
            class A {
                static create(e, t) {
                    let r = new A(e, t),
                        n = async () => {
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
                                if (!h) throw Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                                return r._stream(e.clone(), r._options.onDownloadProgress);
                            }
                            return e;
                        },
                        s = r._options.retry.methods.includes(r.request.method.toLowerCase()) ? r._retry(n) : n();
                    for (let [e, o] of Object.entries(d))
                        s[e] = async () => {
                            r.request.headers.set('accept', r.request.headers.get('accept') || o);
                            let n = (await s).clone();
                            if ('json' === e) {
                                if (204 === n.status || 0 === (await n.clone().arrayBuffer()).byteLength) return '';
                                if (t.parseJson) return t.parseJson(await n.text());
                            }
                            return n[e]();
                        };
                    return s;
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
                        (this._options.prefixUrl.endsWith('/') || (this._options.prefixUrl += '/'), (this._input = this._options.prefixUrl + this._input));
                    }
                    if (c) {
                        if (((this.abortController = new globalThis.AbortController()), this._options.signal)) {
                            let e = this._options.signal;
                            this._options.signal.addEventListener('abort', () => {
                                this.abortController.abort(e.reason);
                            });
                        }
                        this._options.signal = this.abortController.signal;
                    }
                    if ((l && (this._options.duplex = 'half'), (this.request = new globalThis.Request(this._input, this._options)), this._options.searchParams)) {
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
                    if ((this._retryCount++, this._retryCount < this._options.retry.limit && !(e instanceof n))) {
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
                    return !1 === this._options.timeout ? this._options.fetch(this.request.clone()) : b(this.request.clone(), this.abortController, this._options);
                }
                _stream(e, t) {
                    let r = Number(e.headers.get('content-length')) || 0,
                        o = 0;
                    return 204 === e.status
                        ? (t && t({ percent: 1, totalBytes: r, transferredBytes: o }, new Uint8Array()),
                          new globalThis.Response(null, { status: e.status, statusText: e.statusText, headers: e.headers }))
                        : new globalThis.Response(
                              new globalThis.ReadableStream({
                                  async start(n) {
                                      let s = e.body.getReader();
                                      async function i() {
                                          let { done: e, value: a } = await s.read();
                                          if (e) return void n.close();
                                          (t && ((o += a.byteLength), t({ percent: 0 === r ? 0 : o / r, transferredBytes: o, totalBytes: r }, a)),
                                              n.enqueue(a),
                                              await i());
                                      }
                                      (t && t({ percent: 0, transferredBytes: 0, totalBytes: r }, new Uint8Array()), await i());
                                  },
                              }),
                              { status: e.status, statusText: e.statusText, headers: e.headers },
                          );
                }
            }
            let E = (e) => {
                    let t = (t, r) => A.create(t, i(e, r));
                    for (let r of p) t[r] = (t, o) => A.create(t, i(e, o, { method: r }));
                    return ((t.create = (e) => E(i(e))), (t.extend = (t) => E(i(e, t))), (t.stop = g), t);
                },
                _ = E();
            var T = r(77920),
                O = r(76481),
                k = r(91626);
            let L = { retryLimit: 0, retryDelay: 0 };
            var C = r(88091);
            let P = async ({ options: e, error: t, retryAttempt: r, clientRetryConfig: o }) => {
                    if (t?.response?.headers?.get('Retry-After')) return;
                    let n = (({ retryAttempt: e, error: t, retryAfter: r, retryPolicyConfig: o }) => {
                        if (!o) return L;
                        if (r) return o.totalRequestsLimit > e ? { retryLimit: o.totalRequestsLimit, retryDelay: r } : L;
                        if (o.statusCodes[t]) {
                            let r = o.statusCodes[t];
                            if (r?.attempts?.length && r.attempts.length >= e) return { retryLimit: r.attempts.length + 1, retryDelay: r.attempts[e - 1] || 1 };
                        }
                        return L;
                    })({
                        error: ((e) => (e?.code === 'ETIMEDOUT' ? 'TIMEOUT' : (e.response && (e.response.status || e.response.statusCode)) || 'NON_HTTP_ERROR'))(t),
                        retryAttempt: r,
                        retryPolicyConfig: o?.config,
                    });
                    ((e.retry.limit = n.retryLimit), await (0, C.c)(n.retryDelay));
                },
                D = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'get', 'post', 'put', 'patch', 'delete', 'head'];
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
                    let r, s;
                    try {
                        let o = Date.now(),
                            n = await this.client(e, this.optionsConverter(t)),
                            s = Date.now() - o;
                        return (r = this.responseConverter(n, t, { start: o, response: s }));
                    } catch (e) {
                        if (e instanceof o) throw (s = this.errorConverter(e));
                        if (e instanceof n)
                            throw (
                                this.afterTimeoutHooks.forEach((t) => {
                                    t(this.errorConverter(e));
                                }),
                                (s = this.errorConverter(e))
                            );
                        throw ((s = e), e);
                    } finally {
                        this.requestDoneHooks.forEach((o) => {
                            o({ url: e, options: t, response: r, error: s });
                        });
                    }
                }
                optionsConverter(e) {
                    let {
                            prefixUrl: t,
                            method: r,
                            searchParams: o,
                            headers: n,
                            json: s,
                            hooks: i,
                            retry: a,
                            timeout: u,
                            body: l,
                            credentials: c,
                            signal: h,
                            excludeHeaders: f,
                        } = e,
                        p = {};
                    if (
                        (void 0 !== c && (p.credentials = c),
                        void 0 !== t && (p.prefixUrl = t),
                        void 0 !== r && (p.method = r),
                        void 0 !== n && (p.headers = { ...n, 'user-agent': n['user-agent'] ?? n['User-Agent'] }),
                        void 0 !== o && (p.searchParams = o),
                        void 0 !== s && (p.json = s),
                        'number' == typeof u && (p.timeout = u),
                        void 0 !== l && (p.body = l),
                        void 0 !== h && (p.signal = h),
                        a?.config &&
                            ((p.retry = {
                                limit: a.config.totalRequestsLimit,
                                backoffLimit: 1,
                                statusCodes: Object.keys(a.config.statusCodes)
                                    .filter((e) => !isNaN(Number(e)))
                                    .map((e) => parseInt(e, 10)),
                                methods: D,
                            }),
                            (p.hooks = p.hooks || {}),
                            (p.hooks.beforeRetry = p.hooks.beforeRetry || []),
                            p.hooks.beforeRetry.push(async (e) => {
                                await P({ request: e.request, options: e.options, error: e.error, retryAttempt: e.retryCount, clientRetryConfig: a });
                            })),
                        i)
                    ) {
                        let e,
                            { beforeRequest: t, beforeRetry: r, beforeError: o, afterResponse: n } = i;
                        (void 0 === p.hooks && (p.hooks = {}),
                            Array.isArray(t) &&
                                (p.hooks.beforeRequest = t.map((t) => async (r, o) => {
                                    e = Date.now();
                                    let n = { ...this.normalizeOptions(r, o), headers: r.headers };
                                    await t(n);
                                })),
                            Array.isArray(r) &&
                                ((p.hooks.beforeRetry = p.hooks.beforeRetry || []),
                                (p.hooks.beforeRetry = p.hooks.beforeRetry.concat(
                                    r.map((e) => async ({ request: t, options: r, error: o, retryCount: n }) => {
                                        await e(this.errorConverter(o, t, r), n);
                                    }),
                                ))),
                            Array.isArray(o) && (p.hooks.beforeError = o.map((e) => async (t) => (await e(this.errorConverter(t)), t))),
                            Array.isArray(n) &&
                                (p.hooks.afterResponse = n.map((t) => async (r, o, n) => {
                                    let s = this.normalizeOptions(r, o),
                                        i = Date.now();
                                    return (await t(this.responseConverter(n, s, { start: e, response: i })), n);
                                })));
                    }
                    return (
                        void 0 !== f &&
                            (void 0 === p.hooks && (p.hooks = {}),
                            void 0 === p.hooks.beforeRequest && (p.hooks.beforeRequest = []),
                            p.hooks.beforeRequest.push((e) => {
                                if (f) for (let t of f) e.headers.has(t) && e.headers.delete(t);
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
                    if (e instanceof o || e instanceof n) return new k.G(e.message, { statusCode: e instanceof n ? T.X.REQUEST_TIMEOUT : e.response.status, cause: e });
                    let s = null;
                    return (
                        t && r && (s = { headers: r?.headers, originalRequestHeaders: t.headers, url: t?.url, method: t?.method }),
                        new O.m(e.message, { cause: { error: e, request: s } })
                    );
                }
                convertMethod(e) {
                    return void 0 !== e && D.includes(e) ? e.toUpperCase() : 'GET';
                }
                convertMethods(e) {
                    let t = new Set();
                    return (
                        e.forEach((e) => {
                            D.includes(e) && t.add(e.toUpperCase());
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
                n = (function () {
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
                                this.observableValue.subscribe(function (n) {
                                    if (n !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && o) {
                                            o = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, n), e(n));
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
                            this.observableValue.subscribe(function (n) {
                                if (n !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && o) {
                                        o = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, n), e(n));
                                }
                            })
                        );
                    }));
            })();
            let s = 'counter',
                i = () => {
                    let e = null,
                        t = new n(!1),
                        r = [];
                    return {
                        isLoaded: t,
                        init: (o) => {
                            if ('undefined' != typeof window && void 0 !== window.Ya?.Metrika2 && !t.value)
                                try {
                                    var n;
                                    ((e = new window.Ya.Metrika2({ ...o })),
                                        (t.value = !0),
                                        (n = e),
                                        r.forEach((e) => {
                                            e(n);
                                        }),
                                        (r.length = 0));
                                } catch (e) {
                                    ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                                }
                        },
                        count: (t, o = s) => {
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
            (e.exports = function (e, t, o, n) {
                return JSON.stringify(e, r(t, n), o);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    o = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + o.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (n, s) {
                        if (r.length > 0) {
                            var i = r.indexOf(this);
                            (~i ? r.splice(i + 1) : r.push(this), ~i ? o.splice(i, 1 / 0, n) : o.push(n), ~r.indexOf(s) && (s = t.call(this, n, s)));
                        } else r.push(s);
                        return null == e ? s : e.call(this, n, s);
                    }
                );
            }
        },
        87223: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var o = r(93096),
                n = r(48660);
            let s = function (e, t) {
                t = (0, o.A)(t, e);
                for (var r = 0, s = t.length; null != e && r < s;) e = e[(0, n.A)(t[r++])];
                return r && r == s ? e : void 0;
            };
        },
        88039: (e, t, r) => {
            'use strict';
            var o;
            (r.d(t, { Q: () => n, c: () => o }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(o || (o = {})));
            let n = { [o.ERROR]: 'error', [o.WARNING]: 'warn', [o.INFO]: 'info', [o.DEBUG]: 'debug', [o.TRACE]: 'trace' };
        },
        88091: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => o });
            let o = async (e) => new Promise((t) => setTimeout(t, e));
        },
        91496: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => i });
            var o = r(92064),
                n = r(47702),
                s = r(71730),
                i = async ({ app: e, environment: t, traces: i, logs: a, metrics: u, instrumentations: l, traceparent: c }) => {
                    let h,
                        f,
                        p,
                        d = (0, s.QZ)({
                            'service.instance.id': e.hostname,
                            'host.name': e.hostname,
                            [n.HZ]: e.version,
                            'deployment.environment.name': t,
                            [n.UX]: e.name,
                        });
                    if (i) {
                        let { initBrowserTraces: e } = await Promise.all([r.e(1095), r.e(2210)]).then(r.bind(r, 2210));
                        h = await e(d, i, c);
                    }
                    if (a) {
                        let { initBrowserLogs: e } = await Promise.all([r.e(1095), r.e(5117)]).then(r.bind(r, 95117));
                        f = e(d, a);
                    }
                    if (u) {
                        let { initBrowserMetrics: e } = await Promise.all([r.e(1095), r.e(2659)]).then(r.bind(r, 12659));
                        p = e(d, u);
                    }
                    let g = () => {};
                    if (l) {
                        let { enableInstrumentations: e } = await r.e(4738).then(r.bind(r, 24738));
                        g = e(l, h, p, f);
                    }
                    return ((0, o.r)(), { shutdown: g });
                };
        },
        92064: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => a, r: () => u });
            var o = r(30850),
                n = r(40466),
                s = '__OtelSdk',
                i = void 0 === globalThis.window ? globalThis : globalThis.window;
            function a() {
                return (
                    i.__OtelSdk || (i[s] = {}),
                    i.__OtelSdk.sdkReady || (i[s].sdkReady = !1),
                    Array.isArray(i.__OtelSdk.onReadyCallbacks) || (i[s].onReadyCallbacks = []),
                    i[s]
                );
            }
            function u() {
                let e = a();
                if (((e.internalLogger = n.K9.getLogger('otel-sdk')), (e.internalMeter = o.q.getMeter('otel-sdk')), (e.sdkReady = !0), e.onReadyCallbacks?.length)) {
                    let t = { logger: e.internalLogger, meter: e.internalMeter };
                    for (let r of e.onReadyCallbacks) 'function' == typeof r && r(t);
                    e.onReadyCallbacks.length = 0;
                }
            }
        },
        93096: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            var o = r(54968),
                n = r(68811),
                s = r(56481),
                i = r(24351);
            let a = function (e, t) {
                return (0, o.A)(e) ? e : (0, n.A)(e, t) ? [e] : (0, s.A)((0, i.A)(e));
            };
        },
        99245: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var o = r(87223);
            let n = function (e, t, r) {
                var n = null == e ? void 0 : (0, o.A)(e, t);
                return void 0 === n ? r : n;
            };
        },
    },
]);
