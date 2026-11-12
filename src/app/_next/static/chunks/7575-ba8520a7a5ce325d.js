(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 3707, 6088, 7575, 8673, 9202],
    {
        7833: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => u });
            var n = r(88800),
                i = r(53548),
                s = r(63582),
                o = r(99875),
                a = r(66109),
                l = r(245);
            let u = (0, s.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: r, objectPosY: s, objectType: u }) => {
                    let c = (0, l.N)(),
                        d = (0, i.useContext)(o.p)?.loadedSession,
                        p = [u, t, r, s].join(':'),
                        [m, h] = (0, i.useState)(() => ({ client: c, identity: p, blockSession: d, viewSession: c.createBlockViewSession() }));
                    (m.client !== c || m.identity !== p || m.blockSession !== d) &&
                        h({ client: c, identity: p, blockSession: d, viewSession: c.createBlockViewSession() });
                    let f = (0, i.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: r, objectPosY: s, objectType: u }, viewSession: m.viewSession }),
                        [t, r, s, u, m.viewSession],
                    );
                    return (0, n.jsx)(a.l, { value: f, children: e });
                },
            );
        },
        14567: (e, t) => {
            (e.exports = function (e, t, n, i) {
                return JSON.stringify(e, r(t, i), n);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    n = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + n.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (i, s) {
                        if (r.length > 0) {
                            var o = r.indexOf(this);
                            (~o ? r.splice(o + 1) : r.push(this), ~o ? n.splice(o, 1 / 0, i) : n.push(i), ~r.indexOf(s) && (s = t.call(this, i, s)));
                        } else r.push(s);
                        return null == e ? s : e.call(this, i, s);
                    }
                );
            }
        },
        14965: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => n });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: i = {}, ...s } = t,
                        o = e || 'Internal error';
                    (super(o, s), (this.message = o), (this.code = r), (this.data = i), (this.stack = Error(o).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
        },
        23877: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { Q: () => i, c: () => n }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(n || (n = {})));
            let i = { [n.ERROR]: 'error', [n.WARNING]: 'warn', [n.INFO]: 'info', [n.DEBUG]: 'debug', [n.TRACE]: 'trace' };
        },
        27794: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => b });
            var n,
                i,
                s = r(88092),
                o = r(68436);
            function a(e, t) {
                var r = t && t.cache ? t.cache : p,
                    n = t && t.serializer ? t.serializer : c;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var r,
                                  n,
                                  i = 1 === e.length ? l : u;
                              return ((r = t.cache.create()), (n = t.serializer), i.bind(this, e, r, n));
                          }
                )(e, { cache: r, serializer: n });
            }
            function l(e, t, r, n) {
                var i = null == n || 'number' == typeof n || 'boolean' == typeof n ? n : r(n),
                    s = t.get(i);
                return (void 0 === s && ((s = e.call(this, n)), t.set(i, s)), s);
            }
            function u(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    i = r(n),
                    s = t.get(i);
                return (void 0 === s && ((s = e.apply(this, n)), t.set(i, s)), s);
            }
            var c = function () {
                return JSON.stringify(arguments);
            };
            function d() {
                this.cache = Object.create(null);
            }
            ((d.prototype.get = function (e) {
                return this.cache[e];
            }),
                (d.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var p = {
                    create: function () {
                        return new d();
                    },
                },
                m = {
                    variadic: function (e, t) {
                        var r, n;
                        return ((r = t.cache.create()), (n = t.serializer), u.bind(this, e, r, n));
                    },
                    monadic: function (e, t) {
                        var r, n;
                        return ((r = t.cache.create()), (n = t.serializer), l.bind(this, e, r, n));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(n || (n = {}));
            var h = (function (e) {
                    function t(t, r, n) {
                        var i = e.call(this, t) || this;
                        return ((i.code = r), (i.originalMessage = n), i);
                    }
                    return (
                        (0, s.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                f = (function (e) {
                    function t(t, r, i, s) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'),
                                n.INVALID_VALUE,
                                s,
                            ) || this
                        );
                    }
                    return ((0, s.__extends)(t, e), t);
                })(h),
                v = (function (e) {
                    function t(t, r, i) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), n.INVALID_VALUE, i) || this;
                    }
                    return ((0, s.__extends)(t, e), t);
                })(h),
                g = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
                        );
                    }
                    return ((0, s.__extends)(t, e), t);
                })(h);
            function y(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, r) {
                                e[t] = r;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(i || (i = {}));
            var b = (function () {
                function e(t, r, l, u) {
                    var c,
                        d,
                        p = this;
                    if (
                        (void 0 === r && (r = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = p.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function (e, t) {
                                return (e.length && t.type === i.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return r.length <= 1 ? r[0] || '' : r;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, r, s, a, l, u, c) {
                                if (1 === t.length && (0, o.isLiteralElement)(t[0])) return [{ type: i.literal, value: t[0].value }];
                                for (var d = [], p = 0; p < t.length; p++) {
                                    var m = t[p];
                                    if ((0, o.isLiteralElement)(m)) {
                                        d.push({ type: i.literal, value: m.value });
                                        continue;
                                    }
                                    if ((0, o.isPoundElement)(m)) {
                                        'number' == typeof u && d.push({ type: i.literal, value: s.getNumberFormat(r).format(u) });
                                        continue;
                                    }
                                    var y = m.value;
                                    if (!(l && y in l)) throw new g(y, c);
                                    var b = l[y];
                                    if ((0, o.isArgumentElement)(m)) {
                                        ((b && 'string' != typeof b && 'number' != typeof b) || (b = 'string' == typeof b || 'number' == typeof b ? String(b) : ''),
                                            d.push({ type: 'string' == typeof b ? i.literal : i.object, value: b }));
                                        continue;
                                    }
                                    if ((0, o.isDateElement)(m)) {
                                        var I = 'string' == typeof m.style ? a.date[m.style] : (0, o.isDateTimeSkeleton)(m.style) ? m.style.parsedOptions : void 0;
                                        d.push({ type: i.literal, value: s.getDateTimeFormat(r, I).format(b) });
                                        continue;
                                    }
                                    if ((0, o.isTimeElement)(m)) {
                                        var I = 'string' == typeof m.style ? a.time[m.style] : (0, o.isDateTimeSkeleton)(m.style) ? m.style.parsedOptions : a.time.medium;
                                        d.push({ type: i.literal, value: s.getDateTimeFormat(r, I).format(b) });
                                        continue;
                                    }
                                    if ((0, o.isNumberElement)(m)) {
                                        var I = 'string' == typeof m.style ? a.number[m.style] : (0, o.isNumberSkeleton)(m.style) ? m.style.parsedOptions : void 0;
                                        (I && I.scale && (b *= I.scale || 1), d.push({ type: i.literal, value: s.getNumberFormat(r, I).format(b) }));
                                        continue;
                                    }
                                    if ((0, o.isTagElement)(m)) {
                                        var E = m.children,
                                            O = m.value,
                                            _ = l[O];
                                        if ('function' != typeof _) throw new v(O, 'function', c);
                                        var T = _(
                                            e(E, r, s, a, l, u).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(T) || (T = [T]),
                                            d.push.apply(
                                                d,
                                                T.map(function (e) {
                                                    return { type: 'string' == typeof e ? i.literal : i.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, o.isSelectElement)(m)) {
                                        var L = m.options[b] || m.options.other;
                                        if (!L) throw new f(m.value, b, Object.keys(m.options), c);
                                        d.push.apply(d, e(L.value, r, s, a, l));
                                        continue;
                                    }
                                    if ((0, o.isPluralElement)(m)) {
                                        var L = m.options['='.concat(b)];
                                        if (!L) {
                                            if (!Intl.PluralRules)
                                                throw new h(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    n.MISSING_INTL_API,
                                                    c,
                                                );
                                            var N = s.getPluralRules(r, { type: m.pluralType }).select(b - (m.offset || 0));
                                            L = m.options[N] || m.options.other;
                                        }
                                        if (!L) throw new f(m.value, b, Object.keys(m.options), c);
                                        d.push.apply(d, e(L.value, r, s, a, l, b - (m.offset || 0)));
                                        continue;
                                    }
                                }
                                return d.length < 2
                                    ? d
                                    : d.reduce(function (e, t) {
                                          var r = e[e.length - 1];
                                          return (r && r.type === i.literal && t.type === i.literal ? (r.value += t.value) : e.push(t), e);
                                      }, []);
                            })(p.ast, p.locales, p.formatters, p.formats, e, void 0, p.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = p.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(p.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return p.ast;
                        }),
                        (this.locales = r),
                        (this.resolvedLocale = e.resolveLocale(r)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var b = u || {},
                            I = (b.formatters, (0, s.__rest)(b, ['formatters']));
                        this.ast = e.__parse(t, (0, s.__assign)((0, s.__assign)({}, I), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((c = e.formats),
                        l
                            ? Object.keys(c).reduce(
                                  function (e, t) {
                                      var r, n;
                                      return (
                                          (e[t] =
                                              ((r = c[t]),
                                              (n = l[t])
                                                  ? (0, s.__assign)(
                                                        (0, s.__assign)((0, s.__assign)({}, r || {}), n || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, s.__assign)((0, s.__assign)({}, r[t]), n[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : r)),
                                          e
                                      );
                                  },
                                  (0, s.__assign)({}, c),
                              )
                            : c)),
                        (this.formatters =
                            (u && u.formatters) ||
                            (void 0 === (d = this.formatterCache) && (d = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: a(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, s.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: y(d.number), strategy: m.variadic },
                                ),
                                getDateTimeFormat: a(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, s.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: y(d.dateTime), strategy: m.variadic },
                                ),
                                getPluralRules: a(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, s.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: y(d.pluralRules), strategy: m.variadic },
                                ),
                            })));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return (e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.memoizedDefaultLocale = null),
                    (e.resolveLocale = function (e) {
                        if (void 0 !== Intl.Locale) {
                            var t = Intl.NumberFormat.supportedLocalesOf(e);
                            return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
                        }
                    }),
                    (e.__parse = o.parse),
                    (e.formats = {
                        number: { integer: { maximumFractionDigits: 0 }, currency: { style: 'currency' }, percent: { style: 'percent' } },
                        date: {
                            short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                            medium: { month: 'short', day: 'numeric', year: 'numeric' },
                            long: { month: 'long', day: 'numeric', year: 'numeric' },
                            full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                        },
                        time: {
                            short: { hour: 'numeric', minute: 'numeric' },
                            medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                            long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                            full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                        },
                    }),
                    e
                );
            })();
        },
        44084: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => s });
            var n = r(23877),
                i = r(74021);
            class s extends i.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= n.c.INFO && this.logToConsole(n.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= n.c.DEBUG && this.logToConsole(n.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= n.c.TRACE && this.logToConsole(n.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= n.c.WARNING && this.logToConsole(n.c.WARNING, e, t), this.sendToErrorBooster(n.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= n.c.ERROR && this.logToConsole(n.c.ERROR, e, t), this.sendToErrorBooster(n.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(n.c.INFO, e, t);
                }
                logToConsole(e, t, r) {
                    if (this.disableLogToConsole) return;
                    let i = n.Q[e];
                    console[i](...this.formatMessage(e, t, r));
                }
                sendToErrorBooster(e, t, r) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: r ? this.obfuscateData({ ...this.additionalData, ...r }) : {} } });
                }
            }
        },
        45700: (e, t) => {
            'use strict';
            var r, n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNumberElement =
                    t.createLiteralElement =
                    t.isDateTimeSkeleton =
                    t.isNumberSkeleton =
                    t.isTagElement =
                    t.isPoundElement =
                    t.isPluralElement =
                    t.isSelectElement =
                    t.isTimeElement =
                    t.isDateElement =
                    t.isNumberElement =
                    t.isArgumentElement =
                    t.isLiteralElement =
                    t.SKELETON_TYPE =
                    t.TYPE =
                        void 0),
                (function (e) {
                    ((e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag'));
                })(r || (t.TYPE = r = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(n || (t.SKELETON_TYPE = n = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === r.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === r.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === r.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === r.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === r.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === r.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === r.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === r.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === r.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === n.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === n.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: r.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: r.number, value: e, style: t };
                }));
        },
        49784: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => l });
            var n = r(53548),
                i = r(63582),
                s = r(89846),
                o = r(245),
                a = r(22681);
            let l = (0, i.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, n.useRef)(!1),
                    r = (0, o.N)(),
                    { hash: i } = (0, s.g)(),
                    l = (0, a.w)(),
                    u = (0, n.useMemo)(() => (l ? r.createBlockReporter(l.snapshot) : null), [r, l]);
                (0, n.useEffect)(() => {
                    e && l && u && !t.current && u.loaded({ objectsCount: l.snapshot.block.objectsCount, viewUuid: l.block.loadedSession.start() }) && (t.current = !0);
                }, [e, i, u, l]);
            });
        },
        62837: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => p, Yw: () => n, JU: () => i, DQ: () => f, Ve: () => v });
            var n,
                i,
                s = r(43297),
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
                            var n = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (i) {
                                    if (i !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && n) {
                                            n = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, i), e(i));
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
                        var n = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (i) {
                                if (i !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && n) {
                                        n = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, i), e(i));
                                }
                            })
                        );
                    }));
            })();
            var a = r(14965);
            class l extends a.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            class u extends a.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'));
            })(n || (n = {}));
            let c = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, n] = r.split(':');
                        e && n && t.push({ type: e, id: n });
                    }
                    return t;
                },
                d = (e, t) => c(e).filter((e) => e.type === t);
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
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new o(null)),
                        (this.isLoadingObservable = new o(!1)),
                        (this.errorObservable = new o(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
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
                    ((this.loadingPromise = e), await e);
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
                    let r = d(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = c(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        n = {};
                    for (let e of r)
                        if (e) {
                            let t = n[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (n[e.disclaimerType] = t));
                        }
                    return n;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'));
            })(i || (i = {}));
            let m = new Map([
                    [n.EXPLICIT_ICON, i.E],
                    [n.AGE_18_ICON, i.AGE_18],
                    [n.AGE_16_ICON, i.AGE_16],
                    [n.AGE_12_ICON, i.AGE_12],
                    [n.EXCLAMATION_ICON, i.EXCLAMATION],
                ]),
                h = [n.EXPLICIT_ICON, n.AGE_18_ICON, n.AGE_16_ICON, n.AGE_12_ICON, n.EXCLAMATION_ICON],
                f = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = d(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let r = m.get(t.type);
                    return void 0 !== r ? r : null;
                },
                v = (e, t) => d(e, t).length > 0;
        },
        68436: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var n = r(88092);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                n.__exportStar(r(45700), t),
                (t._Parser = void 0));
        },
        70621: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => l });
            var n = r(53548),
                i = r(63582),
                s = r(245),
                o = r(22681),
                a = r(56374);
            let l = (0, i.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, s.N)(),
                    t = (0, o.w)(),
                    r = (0, n.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && r && r.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74021: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => l });
            var n = r(14567),
                i = r(243),
                s = r(62151),
                o = r(33396);
            let a = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, i) {
                    let s,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, o.A)({ ...this.additionalData, ...r });
                    return (Object.keys(l).length && (s = this.obfuscateData(l)), i) ? `${a} ${n(s)}` : [a, s];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, i.A)(e, t) && (0, s.A)(e, t, a());
                    return e;
                }
            }
        },
        76903: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => d });
            var n = r(88800),
                i = r(53548),
                s = r(53534),
                o = r(63582),
                a = r(245);
            let l = new WeakMap();
            class u {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let r =
                        l.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                r = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                n = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                r();
                                            } finally {
                                                ((t = !1), e.length > 0 && n());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (r(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), n());
                                },
                            };
                        })();
                    (l.set(t, r), (this.queue = r));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var c = r(87999);
            let d = (0, o.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let r = (0, a.N)(),
                        o = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === c.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, d] = (0, i.useState)(() => {
                            let e = new u(r.createScreenSession().screenViewUuid, r);
                            return { client: r, input: t, isReady: o, scope: o ? r.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== r ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let i = new u(r.createScreenSession().screenViewUuid, r),
                            a = { client: r, input: t, isReady: o, scope: o ? r.createScreenScope(t, i) : null, session: i };
                        return (d(a), (0, n.jsx)(s.k, { value: a, children: e }));
                    }
                    if (
                        l.isReady !== o ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let i = { ...l, input: t, isReady: o, scope: o ? r.createScreenScope(t, l.session) : null };
                        return (d(i), (0, n.jsx)(s.k, { value: i, children: e }));
                    }
                    return (0, n.jsx)(s.k, { value: l, children: e });
                },
            );
        },
        77451: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => s, TF: () => a, hZ: () => o });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function s(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var i = r[n].split('='),
                            s = i.slice(1).join('=');
                        '"' === s[0] && (s = s.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function o(e, t, r) {
                var s;
                document.cookie =
                    ((s = n({ path: '/' }, r)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                i('Expires', e.expires ? e.expires.toUTCString() : '') +
                                i('Domain', e.domain) +
                                i('Path', e.path) +
                                i('Secure', e.secure) +
                                i('SameSite', e.sameSite)
                            );
                        })(s));
            }
            function a(e, t) {
                o(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        88349: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => n });
            let n = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
    },
]);
