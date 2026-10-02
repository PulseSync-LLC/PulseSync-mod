'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1901, 3580, 4245, 4282],
    {
        13580: (e, t, r) => {
            r.d(t, { S: () => b });
            var n,
                i,
                a = r(23198),
                s = r(46254);
            function o(e, t) {
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
                    a = t.get(i);
                return (void 0 === a && ((a = e.call(this, n)), t.set(i, a)), a);
            }
            function u(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    i = r(n),
                    a = t.get(i);
                return (void 0 === a && ((a = e.apply(this, n)), t.set(i, a)), a);
            }
            var c = function () {
                return JSON.stringify(arguments);
            };
            function m() {
                this.cache = Object.create(null);
            }
            ((m.prototype.get = function (e) {
                return this.cache[e];
            }),
                (m.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var p = {
                    create: function () {
                        return new m();
                    },
                },
                f = {
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
            var d = (function (e) {
                    function t(t, r, n) {
                        var i = e.call(this, t) || this;
                        return ((i.code = r), (i.originalMessage = n), i);
                    }
                    return (
                        (0, a.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                h = (function (e) {
                    function t(t, r, i, a) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'),
                                n.INVALID_VALUE,
                                a,
                            ) || this
                        );
                    }
                    return ((0, a.__extends)(t, e), t);
                })(d),
                y = (function (e) {
                    function t(t, r, i) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), n.INVALID_VALUE, i) || this;
                    }
                    return ((0, a.__extends)(t, e), t);
                })(d),
                v = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
                        );
                    }
                    return ((0, a.__extends)(t, e), t);
                })(d);
            function g(e) {
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
                        m,
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
                            return (function e(t, r, a, o, l, u, c) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: i.literal, value: t[0].value }];
                                for (var m = [], p = 0; p < t.length; p++) {
                                    var f = t[p];
                                    if ((0, s.isLiteralElement)(f)) {
                                        m.push({ type: i.literal, value: f.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(f)) {
                                        'number' == typeof u && m.push({ type: i.literal, value: a.getNumberFormat(r).format(u) });
                                        continue;
                                    }
                                    var g = f.value;
                                    if (!(l && g in l)) throw new v(g, c);
                                    var b = l[g];
                                    if ((0, s.isArgumentElement)(f)) {
                                        ((b && 'string' != typeof b && 'number' != typeof b) || (b = 'string' == typeof b || 'number' == typeof b ? String(b) : ''),
                                            m.push({ type: 'string' == typeof b ? i.literal : i.object, value: b }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(f)) {
                                        var _ = 'string' == typeof f.style ? o.date[f.style] : (0, s.isDateTimeSkeleton)(f.style) ? f.style.parsedOptions : void 0;
                                        m.push({ type: i.literal, value: a.getDateTimeFormat(r, _).format(b) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(f)) {
                                        var _ = 'string' == typeof f.style ? o.time[f.style] : (0, s.isDateTimeSkeleton)(f.style) ? f.style.parsedOptions : o.time.medium;
                                        m.push({ type: i.literal, value: a.getDateTimeFormat(r, _).format(b) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(f)) {
                                        var _ = 'string' == typeof f.style ? o.number[f.style] : (0, s.isNumberSkeleton)(f.style) ? f.style.parsedOptions : void 0;
                                        (_ && _.scale && (b *= _.scale || 1), m.push({ type: i.literal, value: a.getNumberFormat(r, _).format(b) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(f)) {
                                        var I = f.children,
                                            E = f.value,
                                            O = l[E];
                                        if ('function' != typeof O) throw new y(E, 'function', c);
                                        var L = O(
                                            e(I, r, a, o, l, u).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(L) || (L = [L]),
                                            m.push.apply(
                                                m,
                                                L.map(function (e) {
                                                    return { type: 'string' == typeof e ? i.literal : i.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(f)) {
                                        var A = f.options[b] || f.options.other;
                                        if (!A) throw new h(f.value, b, Object.keys(f.options), c);
                                        m.push.apply(m, e(A.value, r, a, o, l));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(f)) {
                                        var A = f.options['='.concat(b)];
                                        if (!A) {
                                            if (!Intl.PluralRules)
                                                throw new d(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    n.MISSING_INTL_API,
                                                    c,
                                                );
                                            var N = a.getPluralRules(r, { type: f.pluralType }).select(b - (f.offset || 0));
                                            A = f.options[N] || f.options.other;
                                        }
                                        if (!A) throw new h(f.value, b, Object.keys(f.options), c);
                                        m.push.apply(m, e(A.value, r, a, o, l, b - (f.offset || 0)));
                                        continue;
                                    }
                                }
                                return m.length < 2
                                    ? m
                                    : m.reduce(function (e, t) {
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
                            _ = (b.formatters, (0, a.__rest)(b, ['formatters']));
                        this.ast = e.__parse(t, (0, a.__assign)((0, a.__assign)({}, _), { locale: this.resolvedLocale }));
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
                                                  ? (0, a.__assign)(
                                                        (0, a.__assign)((0, a.__assign)({}, r || {}), n || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, a.__assign)((0, a.__assign)({}, r[t]), n[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : r)),
                                          e
                                      );
                                  },
                                  (0, a.__assign)({}, c),
                              )
                            : c)),
                        (this.formatters =
                            (u && u.formatters) ||
                            (void 0 === (m = this.formatterCache) && (m = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, a.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: g(m.number), strategy: f.variadic },
                                ),
                                getDateTimeFormat: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, a.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: g(m.dateTime), strategy: f.variadic },
                                ),
                                getPluralRules: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, a.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: g(m.pluralRules), strategy: f.variadic },
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
                    (e.__parse = s.parse),
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
        22413: (e, t, r) => {
            r.d(t, { Jt: () => a, TF: () => o, hZ: () => s });
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
            function a(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var i = r[n].split('='),
                            a = i.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, r) {
                var a;
                document.cookie =
                    ((a = n({ path: '/' }, r)),
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
                        })(a));
            }
            function o(e, t) {
                s(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        38902: (e, t) => {
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
        46254: (e, t, r) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var n = r(23198);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                n.__exportStar(r(38902), t),
                (t._Parser = void 0));
        },
        59126: (e, t, r) => {
            r.d(t, { t: () => n });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: i = {}, ...a } = t,
                        s = e || 'Internal error';
                    (super(s, a), (this.message = s), (this.code = r), (this.data = i), (this.stack = Error(s).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
        },
        74245: (e, t, r) => {
            r.d(t, { AS: () => p, Yw: () => n, JU: () => i, DQ: () => h, Ve: () => y });
            var n,
                i,
                a = r(30691),
                s = (function () {
                    function e(e) {
                        ((this.observableValue = (0, a.vP)(e)), (this.prevValueByListener = new Map()));
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
                    ((this.observableValue = (0, a.EW)(e)), (this.prevValueByListener = new Map()));
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
            var o = r(59126);
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
            })(n || (n = {}));
            let c = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, n] = r.split(':');
                        e && n && t.push({ type: e, id: n });
                    }
                    return t;
                },
                m = (e, t) => c(e).filter((e) => e.type === t);
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
                        (this.itemsObservable = new s(null)),
                        (this.isLoadingObservable = new s(!1)),
                        (this.errorObservable = new s(null)),
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
                    let r = m(e, t);
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
            let f = new Map([
                    [n.EXPLICIT_ICON, i.E],
                    [n.AGE_18_ICON, i.AGE_18],
                    [n.AGE_16_ICON, i.AGE_16],
                    [n.AGE_12_ICON, i.AGE_12],
                    [n.EXCLAMATION_ICON, i.EXCLAMATION],
                ]),
                d = [n.EXPLICIT_ICON, n.AGE_18_ICON, n.AGE_16_ICON, n.AGE_12_ICON, n.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = m(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, d);
                    if (null === t) return null;
                    let r = f.get(t.type);
                    return void 0 !== r ? r : null;
                },
                y = (e, t) => m(e, t).length > 0;
        },
    },
]);
