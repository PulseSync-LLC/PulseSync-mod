(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 8673, 9202],
    {
        14567: (e, t) => {
            (e.exports = function (e, t, i, n) {
                return JSON.stringify(e, r(t, n), i);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    i = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + i.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (n, s) {
                        if (r.length > 0) {
                            var a = r.indexOf(this);
                            (~a ? r.splice(a + 1) : r.push(this), ~a ? i.splice(a, 1 / 0, n) : i.push(n), ~r.indexOf(s) && (s = t.call(this, n, s)));
                        } else r.push(s);
                        return null == e ? s : e.call(this, n, s);
                    }
                );
            }
        },
        14965: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: n = {}, ...s } = t,
                        a = e || 'Internal error';
                    (super(a, s), (this.message = a), (this.code = r), (this.data = n), (this.stack = Error(a).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        23877: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { Q: () => n, c: () => i }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(i || (i = {})));
            let n = { [i.ERROR]: 'error', [i.WARNING]: 'warn', [i.INFO]: 'info', [i.DEBUG]: 'debug', [i.TRACE]: 'trace' };
        },
        27794: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => b });
            var i,
                n,
                s = r(88092),
                a = r(68436);
            function o(e, t) {
                var r = t && t.cache ? t.cache : p,
                    i = t && t.serializer ? t.serializer : c;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var r,
                                  i,
                                  n = 1 === e.length ? l : u;
                              return ((r = t.cache.create()), (i = t.serializer), n.bind(this, e, r, i));
                          }
                )(e, { cache: r, serializer: i });
            }
            function l(e, t, r, i) {
                var n = null == i || 'number' == typeof i || 'boolean' == typeof i ? i : r(i),
                    s = t.get(n);
                return (void 0 === s && ((s = e.call(this, i)), t.set(n, s)), s);
            }
            function u(e, t, r) {
                var i = Array.prototype.slice.call(arguments, 3),
                    n = r(i),
                    s = t.get(n);
                return (void 0 === s && ((s = e.apply(this, i)), t.set(n, s)), s);
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
                        var r, i;
                        return ((r = t.cache.create()), (i = t.serializer), u.bind(this, e, r, i));
                    },
                    monadic: function (e, t) {
                        var r, i;
                        return ((r = t.cache.create()), (i = t.serializer), l.bind(this, e, r, i));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(i || (i = {}));
            var h = (function (e) {
                    function t(t, r, i) {
                        var n = e.call(this, t) || this;
                        return ((n.code = r), (n.originalMessage = i), n);
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
                    function t(t, r, n, s) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'),
                                i.INVALID_VALUE,
                                s,
                            ) || this
                        );
                    }
                    return ((0, s.__extends)(t, e), t);
                })(h),
                g = (function (e) {
                    function t(t, r, n) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), i.INVALID_VALUE, n) || this;
                    }
                    return ((0, s.__extends)(t, e), t);
                })(h),
                v = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), i.MISSING_VALUE, r) || this
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
            })(n || (n = {}));
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
                                return (e.length && t.type === n.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return r.length <= 1 ? r[0] || '' : r;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, r, s, o, l, u, c) {
                                if (1 === t.length && (0, a.isLiteralElement)(t[0])) return [{ type: n.literal, value: t[0].value }];
                                for (var d = [], p = 0; p < t.length; p++) {
                                    var m = t[p];
                                    if ((0, a.isLiteralElement)(m)) {
                                        d.push({ type: n.literal, value: m.value });
                                        continue;
                                    }
                                    if ((0, a.isPoundElement)(m)) {
                                        'number' == typeof u && d.push({ type: n.literal, value: s.getNumberFormat(r).format(u) });
                                        continue;
                                    }
                                    var y = m.value;
                                    if (!(l && y in l)) throw new v(y, c);
                                    var b = l[y];
                                    if ((0, a.isArgumentElement)(m)) {
                                        ((b && 'string' != typeof b && 'number' != typeof b) || (b = 'string' == typeof b || 'number' == typeof b ? String(b) : ''),
                                            d.push({ type: 'string' == typeof b ? n.literal : n.object, value: b }));
                                        continue;
                                    }
                                    if ((0, a.isDateElement)(m)) {
                                        var I = 'string' == typeof m.style ? o.date[m.style] : (0, a.isDateTimeSkeleton)(m.style) ? m.style.parsedOptions : void 0;
                                        d.push({ type: n.literal, value: s.getDateTimeFormat(r, I).format(b) });
                                        continue;
                                    }
                                    if ((0, a.isTimeElement)(m)) {
                                        var I = 'string' == typeof m.style ? o.time[m.style] : (0, a.isDateTimeSkeleton)(m.style) ? m.style.parsedOptions : o.time.medium;
                                        d.push({ type: n.literal, value: s.getDateTimeFormat(r, I).format(b) });
                                        continue;
                                    }
                                    if ((0, a.isNumberElement)(m)) {
                                        var I = 'string' == typeof m.style ? o.number[m.style] : (0, a.isNumberSkeleton)(m.style) ? m.style.parsedOptions : void 0;
                                        (I && I.scale && (b *= I.scale || 1), d.push({ type: n.literal, value: s.getNumberFormat(r, I).format(b) }));
                                        continue;
                                    }
                                    if ((0, a.isTagElement)(m)) {
                                        var E = m.children,
                                            O = m.value,
                                            _ = l[O];
                                        if ('function' != typeof _) throw new g(O, 'function', c);
                                        var T = _(
                                            e(E, r, s, o, l, u).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(T) || (T = [T]),
                                            d.push.apply(
                                                d,
                                                T.map(function (e) {
                                                    return { type: 'string' == typeof e ? n.literal : n.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, a.isSelectElement)(m)) {
                                        var L = m.options[b] || m.options.other;
                                        if (!L) throw new f(m.value, b, Object.keys(m.options), c);
                                        d.push.apply(d, e(L.value, r, s, o, l));
                                        continue;
                                    }
                                    if ((0, a.isPluralElement)(m)) {
                                        var L = m.options['='.concat(b)];
                                        if (!L) {
                                            if (!Intl.PluralRules)
                                                throw new h(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    i.MISSING_INTL_API,
                                                    c,
                                                );
                                            var N = s.getPluralRules(r, { type: m.pluralType }).select(b - (m.offset || 0));
                                            L = m.options[N] || m.options.other;
                                        }
                                        if (!L) throw new f(m.value, b, Object.keys(m.options), c);
                                        d.push.apply(d, e(L.value, r, s, o, l, b - (m.offset || 0)));
                                        continue;
                                    }
                                }
                                return d.length < 2
                                    ? d
                                    : d.reduce(function (e, t) {
                                          var r = e[e.length - 1];
                                          return (r && r.type === n.literal && t.type === n.literal ? (r.value += t.value) : e.push(t), e);
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
                                      var r, i;
                                      return (
                                          (e[t] =
                                              ((r = c[t]),
                                              (i = l[t])
                                                  ? (0, s.__assign)(
                                                        (0, s.__assign)((0, s.__assign)({}, r || {}), i || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, s.__assign)((0, s.__assign)({}, r[t]), i[t] || {})), e);
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
                                getNumberFormat: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, s.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: y(d.number), strategy: m.variadic },
                                ),
                                getDateTimeFormat: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, s.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: y(d.dateTime), strategy: m.variadic },
                                ),
                                getPluralRules: o(
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
                    (e.__parse = a.parse),
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
            var i = r(23877),
                n = r(74021);
            class s extends n.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= i.c.INFO && this.logToConsole(i.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= i.c.DEBUG && this.logToConsole(i.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= i.c.TRACE && this.logToConsole(i.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= i.c.WARNING && this.logToConsole(i.c.WARNING, e, t), this.sendToErrorBooster(i.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= i.c.ERROR && this.logToConsole(i.c.ERROR, e, t), this.sendToErrorBooster(i.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(i.c.INFO, e, t);
                }
                logToConsole(e, t, r) {
                    if (this.disableLogToConsole) return;
                    let n = i.Q[e];
                    console[n](...this.formatMessage(e, t, r));
                }
                sendToErrorBooster(e, t, r) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: r ? this.obfuscateData({ ...this.additionalData, ...r }) : {} } });
                }
            }
        },
        45700: (e, t) => {
            'use strict';
            var r, i;
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
                })(i || (t.SKELETON_TYPE = i = {})),
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
                    return !!(e && 'object' == typeof e && e.type === i.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === i.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: r.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: r.number, value: e, style: t };
                }));
        },
        62837: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => p, Yw: () => i, JU: () => n, DQ: () => f, Ve: () => g });
            var i,
                n,
                s = r(43297),
                a = (function () {
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
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (n) {
                                    if (n !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
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
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (n) {
                                if (n !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, n), e(n));
                                }
                            })
                        );
                    }));
            })();
            var o = r(14965);
            class l extends o.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            class u extends o.t {
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
            })(i || (i = {}));
            let c = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, i] = r.split(':');
                        e && i && t.push({ type: e, id: i });
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
                        (this.itemsObservable = new a(null)),
                        (this.isLoadingObservable = new a(!1)),
                        (this.errorObservable = new a(null)),
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
                        i = {};
                    for (let e of r)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (i[e.disclaimerType] = t));
                        }
                    return i;
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
            })(n || (n = {}));
            let m = new Map([
                    [i.EXPLICIT_ICON, n.E],
                    [i.AGE_18_ICON, n.AGE_18],
                    [i.AGE_16_ICON, n.AGE_16],
                    [i.AGE_12_ICON, n.AGE_12],
                    [i.EXCLAMATION_ICON, n.EXCLAMATION],
                ]),
                h = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.EXCLAMATION_ICON],
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
                g = (e, t) => d(e, t).length > 0;
        },
        68436: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var i = r(88092);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                i.__exportStar(r(45700), t),
                (t._Parser = void 0));
        },
        70621: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => l });
            var i = r(53548),
                n = r(63582),
                s = r(245),
                a = r(22681),
                o = r(56374);
            let l = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, s.N)(),
                    t = (0, a.w)(),
                    r = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, o.c)((e) => {
                    t?.object && r && r.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74021: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => l });
            var i = r(14567),
                n = r(243),
                s = r(62151),
                a = r(33396);
            let o = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, n) {
                    let s,
                        o = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, a.A)({ ...this.additionalData, ...r });
                    return (Object.keys(l).length && (s = this.obfuscateData(l)), n) ? `${o} ${i(s)}` : [o, s];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, n.A)(e, t) && (0, s.A)(e, t, o());
                    return e;
                }
            }
        },
        76903: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => d });
            var i = r(88800),
                n = r(53548),
                s = r(53534),
                a = r(63582),
                o = r(245);
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
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                r();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (r(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
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
            let d = (0, a.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let r = (0, o.N)(),
                        a = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === c.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, d] = (0, n.useState)(() => {
                            let e = new u(r.createScreenSession().screenViewUuid, r);
                            return { client: r, input: t, isReady: a, scope: a ? r.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== r ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let n = new u(r.createScreenSession().screenViewUuid, r),
                            o = { client: r, input: t, isReady: a, scope: a ? r.createScreenScope(t, n) : null, session: n };
                        return (d(o), (0, i.jsx)(s.k, { value: o, children: e }));
                    }
                    if (
                        l.isReady !== a ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...l, input: t, isReady: a, scope: a ? r.createScreenScope(t, l.session) : null };
                        return (d(n), (0, i.jsx)(s.k, { value: n, children: e }));
                    }
                    return (0, i.jsx)(s.k, { value: l, children: e });
                },
            );
        },
        88349: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => i });
            let i = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
    },
]);
