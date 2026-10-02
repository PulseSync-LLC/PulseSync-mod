(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3580, 9995],
    {
        1797: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => a });
            var i = r(40207);
            let a = (e) => {
                let { artist: t, callback: r, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: r, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        5365: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => c });
            var i,
                a = r(74631),
                n = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (a && (a += ' '), (a += i));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => a }));
                        let a = i;
                    },
                    2876: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var a = null;
                            if ((void 0 !== i && (a = '' + i), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    4014: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let a = r(4377),
                            n = r(5881),
                            s = r(810),
                            l = i(r(2876)),
                            o = (e) => {
                                let { className: t, itemClassName: r, children: i, forwardRef: o, role: c, ...u } = e;
                                return (0, a.jsx)('ol', {
                                    ref: o,
                                    className: (0, n.clsx)(l.default.root, t),
                                    ...u,
                                    role: null != c ? c : 'list',
                                    children: s.Children.map(i, (e) => (0, a.jsx)('li', { className: (0, n.clsx)(l.default.item, r), children: e })),
                                });
                            };
                        t.Carousel = (0, s.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (n[e].call(r.exports, r, r.exports, l), r.exports);
            }
            ((l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.l = void 0));
                var e = l(4014);
                Object.defineProperty(o, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = o.l;
            o.X;
        },
        7361: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => _ });
            var i = r(25839),
                a = r(33660),
                n = r(74631),
                s = r(39004),
                l = r(31860),
                o = r(91149),
                c = r(92942),
                u = r(27954),
                d = r(57549),
                m = r(63149);
            let _ = (e) => {
                let { user: t } = (0, u.g)(),
                    { notify: r } = (0, c.l)(),
                    [_, h] = (0, n.useState)(!1),
                    { formatMessage: f } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void r((0, i.jsx)(d.h, { error: f({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    h(!0);
                    let s = await e.toggleLike();
                    (h(!1),
                        s === l.f.OK
                            ? r((0, i.jsx)(m.T, { artist: n }), { containerId: o.u.INFO })
                            : r((0, i.jsx)(d.h, { error: f({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, f, r]);
            };
        },
        9911: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => u });
            var i,
                a = r(6274),
                n = r(74631),
                s = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(n, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return (s[e](r, r.exports, o), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (r) => {
                    let [i, a] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (a(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        l();
                    }, [r, l]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    (null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l));
                                }
                            );
                        }, [r, l]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: i && n,
                    };
                };
            })(),
                c.X);
            var u = c.l;
        },
        13580: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => x });
            var i,
                a,
                n = r(23198),
                s = r(46254);
            function l(e, t) {
                var r = t && t.cache ? t.cache : m,
                    i = t && t.serializer ? t.serializer : u;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var r,
                                  i,
                                  a = 1 === e.length ? o : c;
                              return ((r = t.cache.create()), (i = t.serializer), a.bind(this, e, r, i));
                          }
                )(e, { cache: r, serializer: i });
            }
            function o(e, t, r, i) {
                var a = null == i || 'number' == typeof i || 'boolean' == typeof i ? i : r(i),
                    n = t.get(a);
                return (void 0 === n && ((n = e.call(this, i)), t.set(a, n)), n);
            }
            function c(e, t, r) {
                var i = Array.prototype.slice.call(arguments, 3),
                    a = r(i),
                    n = t.get(a);
                return (void 0 === n && ((n = e.apply(this, i)), t.set(a, n)), n);
            }
            var u = function () {
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
            var m = {
                    create: function () {
                        return new d();
                    },
                },
                _ = {
                    variadic: function (e, t) {
                        var r, i;
                        return ((r = t.cache.create()), (i = t.serializer), c.bind(this, e, r, i));
                    },
                    monadic: function (e, t) {
                        var r, i;
                        return ((r = t.cache.create()), (i = t.serializer), o.bind(this, e, r, i));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(i || (i = {}));
            var h = (function (e) {
                    function t(t, r, i) {
                        var a = e.call(this, t) || this;
                        return ((a.code = r), (a.originalMessage = i), a);
                    }
                    return (
                        (0, n.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                f = (function (e) {
                    function t(t, r, a, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(a).join('", "'), '"'),
                                i.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(h),
                p = (function (e) {
                    function t(t, r, a) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), i.INVALID_VALUE, a) || this;
                    }
                    return ((0, n.__extends)(t, e), t);
                })(h),
                v = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), i.MISSING_VALUE, r) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(h);
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
            })(a || (a = {}));
            var x = (function () {
                function e(t, r, o, c) {
                    var u,
                        d,
                        m = this;
                    if (
                        (void 0 === r && (r = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function (e, t) {
                                return (e.length && t.type === a.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return r.length <= 1 ? r[0] || '' : r;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, r, n, l, o, c, u) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: a.literal, value: t[0].value }];
                                for (var d = [], m = 0; m < t.length; m++) {
                                    var _ = t[m];
                                    if ((0, s.isLiteralElement)(_)) {
                                        d.push({ type: a.literal, value: _.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(_)) {
                                        'number' == typeof c && d.push({ type: a.literal, value: n.getNumberFormat(r).format(c) });
                                        continue;
                                    }
                                    var g = _.value;
                                    if (!(o && g in o)) throw new v(g, u);
                                    var x = o[g];
                                    if ((0, s.isArgumentElement)(_)) {
                                        ((x && 'string' != typeof x && 'number' != typeof x) || (x = 'string' == typeof x || 'number' == typeof x ? String(x) : ''),
                                            d.push({ type: 'string' == typeof x ? a.literal : a.object, value: x }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(_)) {
                                        var b = 'string' == typeof _.style ? l.date[_.style] : (0, s.isDateTimeSkeleton)(_.style) ? _.style.parsedOptions : void 0;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(r, b).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(_)) {
                                        var b = 'string' == typeof _.style ? l.time[_.style] : (0, s.isDateTimeSkeleton)(_.style) ? _.style.parsedOptions : l.time.medium;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(r, b).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(_)) {
                                        var b = 'string' == typeof _.style ? l.number[_.style] : (0, s.isNumberSkeleton)(_.style) ? _.style.parsedOptions : void 0;
                                        (b && b.scale && (x *= b.scale || 1), d.push({ type: a.literal, value: n.getNumberFormat(r, b).format(x) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(_)) {
                                        var y = _.children,
                                            T = _.value,
                                            k = o[T];
                                        if ('function' != typeof k) throw new p(T, 'function', u);
                                        var N = k(
                                            e(y, r, n, l, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(N) || (N = [N]),
                                            d.push.apply(
                                                d,
                                                N.map(function (e) {
                                                    return { type: 'string' == typeof e ? a.literal : a.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(_)) {
                                        var j = _.options[x] || _.options.other;
                                        if (!j) throw new f(_.value, x, Object.keys(_.options), u);
                                        d.push.apply(d, e(j.value, r, n, l, o));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(_)) {
                                        var j = _.options['='.concat(x)];
                                        if (!j) {
                                            if (!Intl.PluralRules)
                                                throw new h(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    i.MISSING_INTL_API,
                                                    u,
                                                );
                                            var C = n.getPluralRules(r, { type: _.pluralType }).select(x - (_.offset || 0));
                                            j = _.options[C] || _.options.other;
                                        }
                                        if (!j) throw new f(_.value, x, Object.keys(_.options), u);
                                        d.push.apply(d, e(j.value, r, n, l, o, x - (_.offset || 0)));
                                        continue;
                                    }
                                }
                                return d.length < 2
                                    ? d
                                    : d.reduce(function (e, t) {
                                          var r = e[e.length - 1];
                                          return (r && r.type === a.literal && t.type === a.literal ? (r.value += t.value) : e.push(t), e);
                                      }, []);
                            })(m.ast, m.locales, m.formatters, m.formats, e, void 0, m.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = m.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(m.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return m.ast;
                        }),
                        (this.locales = r),
                        (this.resolvedLocale = e.resolveLocale(r)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var x = c || {},
                            b = (x.formatters, (0, n.__rest)(x, ['formatters']));
                        this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, b), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((u = e.formats),
                        o
                            ? Object.keys(u).reduce(
                                  function (e, t) {
                                      var r, i;
                                      return (
                                          (e[t] =
                                              ((r = u[t]),
                                              (i = o[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, r || {}), i || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, n.__assign)((0, n.__assign)({}, r[t]), i[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : r)),
                                          e
                                      );
                                  },
                                  (0, n.__assign)({}, u),
                              )
                            : u)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (d = this.formatterCache) && (d = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: g(d.number), strategy: _.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: g(d.dateTime), strategy: _.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: g(d.pluralRules), strategy: _.variadic },
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
        13936: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        18412: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => x });
            var i = r(25839),
                a = r(82298),
                n = r(74631),
                s = r(36619),
                l = r(61493),
                o = r(66738),
                c = r(23818),
                u = r(86869),
                d = r(23976),
                m = r(4254),
                _ = r(61777),
                h = r(29481),
                f = r(97522),
                p = r(73208),
                v = r.n(p);
            let g = (e) => {
                    let {
                            className: t,
                            coverUrl: r,
                            labeledForId: p,
                            subTitle: g,
                            title: x,
                            description: b,
                            viewAllActionLink: y,
                            controls: T,
                            titleSize: k = 'm',
                            coverBackgroundColor: N,
                            coverRadius: j = 's',
                            titleClassName: C,
                            titleLineClamp: A,
                            fallbackIconVariant: L,
                            available: S = !0,
                            onViewAllAction: E,
                            titleChildren: I,
                            children: O,
                            headingRef: R,
                            coverContainerClassName: P,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: B = !0,
                            isShimmerVisible: D,
                            isShimmerActive: H,
                            withCover: z,
                            withDescription: F,
                            forwardRef: U,
                            shimmerCoverClassName: M,
                            shouldSendAnalyticsOnLoaded: W,
                            ...V
                        } = e,
                        K = (0, _.f)(),
                        $ = (0, n.useRef)(null),
                        X = r || z,
                        Y = b || F,
                        q = (0, n.useCallback)(() => {
                            $.current && 'focus' in $.current && $.current.focus();
                        }, []),
                        G = (0, h.N)(),
                        Z = (0, n.useCallback)(() => {
                            E ? E() : G({ to: s.AppScreen.Link });
                        }, [G, E]);
                    (0, n.useEffect)(() => {
                        W && K();
                    }, [W, K]);
                    let Q = (0, n.useMemo)(
                            () =>
                                x && y && S
                                    ? (0, i.jsxs)(f.N, {
                                          className: v().title,
                                          containerClassName: v().linkContainer,
                                          textClassName: v().linkText,
                                          icon: (0, i.jsx)(o.I, { className: v().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: y,
                                          onClick: Z,
                                          'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: p,
                                                  className: (0, a.$)(v().heading, C),
                                                  variant: w,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: A,
                                                  ref: R,
                                                  children: x,
                                              }),
                                              I,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: v().title,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: p,
                                                  className: (0, a.$)(v().heading, C, { [v().heading_notAvailable]: !S }),
                                                  variant: w,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: A,
                                                  ref: R,
                                                  'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                                  children: x,
                                              }),
                                              I,
                                          ],
                                      }),
                            [S, Z, R, w, p, x, C, A, k, y, I],
                        ),
                        J = (0, n.useMemo)(() => (F && D ? (0, i.jsx)(d.W, { isActive: H, className: v().shimmerDescription }) : b), [F, D, b, H]),
                        ee = (0, n.useMemo)(
                            () =>
                                z && D
                                    ? (0, i.jsx)(d.W, { isActive: H, className: (0, a.$)(v().shimmerCover, M), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: r,
                                          fallbackIconVariant: L,
                                          style: { backgroundColor: N },
                                          className: v().cover,
                                          ref: $,
                                          onClick: q,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': l.S7.BLOCK_HEADER_COVER,
                                      }),
                            [N, r, L, q, H, D, M, z],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(v().root, t),
                        ref: U,
                        ...V,
                        'data-test-id': l.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v().start,
                                children: [
                                    X && (0, i.jsx)(u.t, { radius: j, className: (0, a.$)(v().coverContainer, P), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: v().textContainer,
                                        children: [
                                            g,
                                            Q,
                                            Y &&
                                                (0, i.jsx)(m.HL, {
                                                    id: ''.concat(p, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: B ? 2 : void 0,
                                                    className: (0, a.$)(v().description, { [v().description_widthLimit]: B }),
                                                    'data-test-id': l.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            T || O,
                        ],
                    });
                },
                x = (0, n.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
        },
        21971: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => Z });
            var i = r(25839),
                a = r(88204),
                n = r(39004),
                s = r(36619),
                l = r(61493),
                o = r(22939),
                c = r(71035),
                u = r(66738),
                d = r(10820),
                m = r(33660),
                _ = r(74631),
                h = r(31860),
                f = r(91149),
                p = r(92942),
                v = r(27954),
                g = r(57549),
                x = r(86869),
                b = r(69084),
                y = r(4254),
                T = r(51790),
                k = r(6323),
                N = r(24596),
                j = r.n(N);
            let C = (e) => {
                let { coverUri: t, title: r, isDisliked: a, closeToast: s } = e,
                    { formatMessage: l } = (0, n.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, i.jsx)(T.$, {
                    closeToast: s,
                    message: (0, i.jsxs)('div', {
                        className: j().message,
                        children: [
                            (0, i.jsx)(b.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, i.jsx)(x.t, {
                                className: j().cover,
                                radius: 'round',
                                children: (0, i.jsx)(k.B, { className: j().image, src: t, alt: r, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, i.jsx)(y.HL, { className: j().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var A = r(7361),
                L = r(90613),
                S = r(3210),
                E = r(11609),
                I = r(79367),
                O = r(40110),
                R = r(20258),
                P = r(34159),
                w = r(30290),
                B = r(29872),
                D = r(56120),
                H = r(87201),
                z = r(83014),
                F = r(44806),
                U = r(55491),
                M = r(44851),
                W = r(14240),
                V = r(56615),
                K = r(16386),
                $ = r(67303),
                X = r(74682),
                Y = r(59043),
                q = r(2144),
                G = r(6304);
            let Z = (0, a.PA)((e) => {
                var t, r, a;
                let { artist: x, onOpenChange: b, open: y, ...T } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: N } = (0, B.q)(),
                    {
                        settings: { isMobile: j },
                        modals: { artistAboutModal: Z },
                        trailer: Q,
                        user: J,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, L.A)(x),
                    er = (0, A.K)(x),
                    ei = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: r } = (0, p.l)(),
                            [a, s] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void r((0, i.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: f.u.ERROR });
                            if (a) return;
                            let n = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === h.f.OK
                                    ? r((0, i.jsx)(C, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: f.u.INFO })
                                    : r((0, i.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: f.u.ERROR }));
                        });
                    })(x),
                    ea = (0, P.F)(),
                    en = ''.concat(O.U.ARTIST, '-').concat(null == x ? void 0 : x.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: el } = (0, w.f)({ blockId: O.U.ARTIST, contextType: o.K.Artist, contextId: null == x ? void 0 : x.id }),
                    { shareLink: eo, pathname: ec } = (0, W.b)('/artist/:artistId', { params: { artistId: null != (r = null == x ? void 0 : x.id) ? r : '' } }),
                    eu = (0, S.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == x ? void 0 : x.id } }),
                    { isPlaying: ed, togglePlay: em } = (0, H.B)({
                        seeds: null != (a = null == x ? void 0 : x.seeds) ? a : [],
                        pageIdForFrom: R._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == x ? void 0 : x.id,
                    }),
                    e_ = (0, I.P)(),
                    eh = es((null == x ? void 0 : x.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ef = (0, c.c)(() => {
                        if (k && J.isAuthorized) return void N();
                        ed || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!e_()) {
                            if (k) return void N();
                            (null == x ? void 0 : x.id) && (Q.setUtmLink(el), Q.openArtistTrailer(x.id), ea(s.DomainObjectType.Artist, x.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        Z.open(null == x ? void 0 : x.id);
                    });
                (0, D.N)(y);
                let eg = { variant: U.Y.ARTIST, id: null == x ? void 0 : x.id, title: null == x ? void 0 : x.name, path: ec },
                    ex = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    eb = null == x || null == (t = x.trailer) ? void 0 : t.isAvailable,
                    ey = ee.checkExperiment(F.z.WebNextArtistInfo, 'on');
                return (0, i.jsxs)(d.W1, {
                    isMobile: j,
                    offsetOptions: 10,
                    open: y,
                    onOpenChange: b,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        ex && (0, i.jsx)(G.WithOffline, { fallback: (0, i.jsx)(E.d, { entityVariant: z.D.ARTIST, adminUrl: eu }) }),
                        !j && (0, i.jsx)(G.WithOffline, { fallback: (0, i.jsx)($.L, { onClick: et, isPinned: null == x ? void 0 : x.isPinned }) }),
                        (0, i.jsx)(G.WithOffline, {
                            fallback: (0, i.jsx)(K.T, {
                                onClick: er,
                                isLiked: null == x ? void 0 : x.isLiked,
                                disabled: !J.isAuthorized || !(null == x ? void 0 : x.isAvailable),
                            }),
                        }),
                        eb && (0, i.jsx)(G.WithOffline, { fallback: (0, i.jsx)(Y.N, { onClick: ep }) }),
                        (0, i.jsx)(G.WithOffline, {
                            fallback: (0, i.jsx)(q.C, { onClick: ef, disabled: !(null == x ? void 0 : x.isAvailable), variant: M.I.ARTIST, onOpenMenuChange: b }),
                        }),
                        (0, i.jsx)(X.H, { disabled: !x, shareLink: eo, entityMeta: eg }),
                        ey &&
                            (0, i.jsx)(G.WithOffline, {
                                fallback: (0, i.jsx)(d.Dr, {
                                    onClick: ev,
                                    icon: (0, i.jsx)(u.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, i.jsx)(G.WithOffline, {
                            fallback: (0, i.jsx)(V.D, { onClick: ei, isDisliked: null == x ? void 0 : x.isDisliked, disabled: !(null == x ? void 0 : x.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        22413: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => n, TF: () => l, hZ: () => s });
            var i = function () {
                return (i =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, i = arguments.length; r < i; r++)
                            for (var a in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function n(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], i = 0; i < r.length; i++) {
                        var a = r[i].split('='),
                            n = a.slice(1).join('=');
                        '"' === n[0] && (n = n.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, r) {
                var n;
                document.cookie =
                    ((n = i({ path: '/' }, r)),
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
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(n));
            }
            function l(e, t) {
                s(e, '', i(i({}, t), { expires: -1 }));
            }
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        37922: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        38902: (e, t) => {
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
        46254: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var i = r(23198);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                i.__exportStar(r(38902), t),
                (t._Parser = void 0));
        },
        50362: (e) => {
            e.exports = {
                root: 'PageHeaderTitle_root__ESu2q',
                editButton: 'PageHeaderTitle_editButton__KF4eh',
                editButton_centered: 'PageHeaderTitle_editButton_centered__W9EwU',
                textField: 'PageHeaderTitle_textField__LXJ3X',
                textField_long: 'PageHeaderTitle_textField_long__ReeJz',
                title: 'PageHeaderTitle_title__caKyB',
                version: 'PageHeaderTitle_version__g5BeO',
                version_withOtherVersions: 'PageHeaderTitle_version_withOtherVersions__Amfwk',
                heading: 'PageHeaderTitle_heading__UADXi',
                heading_withVersion: 'PageHeaderTitle_heading_withVersion__jw12r',
                textFieldContainer: 'PageHeaderTitle_textFieldContainer__FSD_B',
                font_long: 'PageHeaderTitle_font_long__q9Leq',
                font_short: 'PageHeaderTitle_font_short__76VRG',
                font_mobile: 'PageHeaderTitle_font_mobile__M1__v',
                stickyTitle: 'PageHeaderTitle_stickyTitle__CL1m4',
                titleWithLinkIcon: 'PageHeaderTitle_titleWithLinkIcon__mBP_B',
                titleWithLink: 'PageHeaderTitle_titleWithLink__pJZN5',
                linkContainer: 'PageHeaderTitle_linkContainer__KUyIF',
                linkText: 'PageHeaderTitle_linkText__rSUmw',
                arrowWrapper: 'PageHeaderTitle_arrowWrapper__cadS3',
                arrowWrapper_long: 'PageHeaderTitle_arrowWrapper_long__xhAjB',
                arrowWrapper_short: 'PageHeaderTitle_arrowWrapper_short__45ema',
                arrowWrapper_mobile: 'PageHeaderTitle_arrowWrapper_mobile__iYnjq',
            };
        },
        56615: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => u });
            var i = r(25839),
                a = r(88204),
                n = r(8487),
                s = r(61493),
                l = r(66738),
                o = r(10820),
                c = r(27954);
            let u = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: r, disabled: a, className: u } = e,
                    { user: d } = (0, c.g)();
                return (0, i.jsx)(o.Dr, {
                    onClick: r,
                    className: u,
                    icon: (0, i.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !d.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, i.jsx)(n.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        59884: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => T });
            var pulseSyncHeaderReact = r(74631),
                pulseSyncHeaderJsx = r(25839),
                pulseSyncHeaderText = r(4254),
                pulseSyncHeaderIcon = r(66738);

            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(39004),
                o = r(61493),
                c = r(71035),
                u = r(49656),
                d = r(4071),
                m = r(66738),
                _ = r(4254),
                h = r(27625);
            let f = (e) => {
                let { children: t, title: r, className: a } = e,
                    { setTitleElement: n, setTitle: l } = (0, s.useContext)(h.B),
                    o = (0, s.useRef)(null);
                return (
                    (0, s.useEffect)(() => {
                        ((null == o ? void 0 : o.current) && n(o), r && l(r));
                    }, [o, r, n, l]),
                    (0, s.useEffect)(
                        () => () => {
                            l('');
                        },
                        [l],
                    ),
                    (0, i.jsx)('div', { ref: o, className: a, children: t })
                );
            };
            var p = r(85686),
                v = r(27954),
                g = r(97522),
                x = r(72720),
                b = r(50362),
                y = r.n(b);
            let T = (0, n.PA)((e) => {
                let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                (0, pulseSyncHeaderReact.useEffect)(() => {
                    const onNativeSlotChange = (e) => {
                        if (e.detail === 'headerTitleItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);

                let {
                        title: t = '',
                        'aria-labelledby': r,
                        canChange: n = !1,
                        onChange: h,
                        maxTitleLength: b,
                        version: T = '',
                        onVersionClick: k,
                        className: N,
                        headingVariant: j = 'h2',
                        withHeadingClamp: C = !0,
                        link: A,
                        onTitleLinkClick: L,
                    } = e,
                    {
                        settings: { isMobile: S },
                    } = (0, v.g)(),
                    { formatMessage: E } = (0, l.A)(),
                    [I, O] = (0, s.useState)(!1),
                    R = (0, s.useRef)(null),
                    P = t.length + T.length > 25,
                    w = (0, p.Z)(null != A ? A : ''),
                    B = (0, c.c)((e) => {
                        (null == L || L(), w(e));
                    }),
                    D = (0, s.useMemo)(
                        () =>
                            S
                                ? { font: y().font_mobile, iconLink: y().arrowWrapper_mobile }
                                : P
                                  ? { font: y().font_long, iconLink: y().arrowWrapper_long }
                                  : { font: y().font_short, iconLink: y().arrowWrapper_short },
                        [S, P],
                    ),
                    H = !S && n && I,
                    z = (0, s.useCallback)(() => {
                        var e;
                        (O(!0), null == (e = R.current) || e.focus());
                    }, []),
                    F = (0, s.useCallback)(
                        (e) => {
                            (O(!1), null == h || h(e));
                        },
                        [h],
                    ),
                    U = (0, u.L)(() =>
                        (0, i.jsx)('span', {
                            className: (0, a.$)(y().arrowWrapper, D.iconLink),
                            children: (0, i.jsx)(m.I, { className: y().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    M = (0, u.L)(() =>
                        (0, i.jsxs)(_.DZ, {
                            variant: j,
                            id: r,
                            lineClamp: S && C ? 2 : void 0,
                            className: (0, a.$)(y().heading, { [y().heading_withVersion]: T }),
                            'data-test-id': o.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, i.jsx)(_.HL, { className: (0, a.$)(y().font, D.font, y().title), variant: 'span', children: t }),
                                T &&
                                    (0, i.jsx)(_.HL, {
                                        onClick: k,
                                        className: (0, a.$)(y().font, D.font, y().version, { [y().version_withOtherVersions]: k }),
                                        variant: 'span',
                                        'data-test-id': o.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(T),
                                    }),
                                A && !S && U,
                            ],
                        }),
                    ),
                    W = (0, u.L)(() =>
                        A
                            ? (0, i.jsxs)(g.N, {
                                  className: y().titleWithLink,
                                  containerClassName: y().linkContainer,
                                  textClassName: y().linkText,
                                  href: A,
                                  onClick: B,
                                  children: [M, S && U],
                              })
                            : M,
                    );
                const pulseSyncInjectHeaderTitleItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('headerTitleItems', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, positionIndex }) => {
                            const text = String(payload?.text ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim(),
                                label = String(payload?.label ?? text).trim();
                            if (!text && !icon) return null;
                            return (0, pulseSyncHeaderJsx.jsxs)(
                                pulseSyncHeaderText.HL,
                                {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    ...(label
                                        ? {
                                              'aria-label': label,
                                          }
                                        : {}),
                                    'data-pulsesync-addon-header-item': 'title',
                                    children: [
                                        icon &&
                                            (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxs',
                                            }),
                                        text,
                                    ],
                                },
                                key,
                            );
                        },
                    }) ?? items;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !H &&
                            (0, i.jsxs)('div', {
                                className: (0, a.$)(y().root, N),
                                children: pulseSyncInjectHeaderTitleItems([
                                    (0, i.jsx)(f, { title: t, className: y().stickyTitle, children: W }),
                                    n &&
                                        (0, i.jsx)('div', {
                                            className: (0, a.$)(y().editButton, { [y().editButton_centered]: !P && !S }),
                                            children: (0, i.jsx)(d.$, {
                                                onClick: z,
                                                'aria-label': E({ id: 'playlist-actions.change-title' }),
                                                icon: (0, i.jsx)(m.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': o.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ]),
                            }),
                        H &&
                            (0, i.jsx)('div', {
                                className: y().textFieldContainer,
                                children: (0, i.jsx)(x.A, {
                                    text: t,
                                    className: (0, a.$)(y().font, D.font, y().textField, y().title, { [y().textField_long]: P && !S }),
                                    onChangeFinish: F,
                                    maxTextLength: b,
                                    minTextLength: 1,
                                    placeholder: E({ id: 'playlist-actions.enter-title' }),
                                    shouldFinishOnKeyPress: !0,
                                    withOutline: !0,
                                }),
                            }),
                    ],
                });
            });
        },
        61777: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => g });
            var i = r(74631),
                a = r(67379),
                n = r(17850),
                s = r(59450),
                l = r(49656),
                o = r(84e3),
                c = r(58069),
                u = r(20258),
                d = r(26742),
                m = r(25195),
                _ = r(37314),
                h = r(97952),
                f = r(10764),
                p = r(72594);
            let v = [
                    u._Q.HOME,
                    u._Q.LANDING,
                    u._Q.NON_MUSIC,
                    u._Q.OWN_COLLECTION,
                    u._Q.SEARCH,
                    u._Q.ARTIST,
                    u._Q.CONCERTS,
                    u._Q.CONCERT,
                    u._Q.ALBUM,
                    u._Q.PLAYLIST,
                    u._Q.SLIDES_SCREEN,
                    u._Q.PROMOLANDING_ALBUM,
                    u._Q.WAVE_LANDING_SCREEN,
                ],
                g = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, s.st)(),
                        r = (0, o.U)(),
                        { hash: g } = (0, s.gf)(),
                        { pageId: x } = (0, h.$)(),
                        { tabId: b, tabPos: y, isTabSelectedByDefault: T } = (0, p.R)(),
                        { offsetBlockPosY: k } = (0, m.u)(),
                        { blockId: N, blockType: j, blockPosX: C, blockPosY: A, mainObjectType: L, mainObjectId: S, objectsCount: E } = (0, d.N)(),
                        { filterKey: I, filterValue: O, filterPos: R } = (0, _.G)(),
                        { skeleton: P } = (0, f.b)(),
                        w = (0, l.L)(() => (void 0 !== k && void 0 !== A ? k + A : A));
                    return (0, i.useCallback)(() => {
                        if (!t || !x || !u.xK.includes(x) || !v.includes(x) || e.current) return;
                        let i = { hash: g, pageId: c.F[x], entityType: j, entityId: N, entityPosX: C, entityPosY: w, objectsCount: E };
                        (void 0 !== I && ((i.filterKey = I), (i.filterValue = O), (i.filterPos = R)),
                            u.qG.includes(x) && ((i.tabId = b), (i.tabPos = y), (i.isTabSelectedByDefault = T)),
                            P && (i.skeletonId = P),
                            S && L && ((i.mainObjectType = L), (i.mainObjectId = S)));
                        let s = (0, a.F)({ params: i, logger: r, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, n.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, x, g, j, N, C, w, I, O, R, E, P, S, L, r, b, y, T]);
                };
        },
        63149: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => l });
            var i = r(25839),
                a = r(53712),
                n = r(35015),
                s = r(3163);
            let l = (e) => {
                let { artist: t, closeToast: r } = e;
                return (0, i.jsx)(s.O, {
                    closeToast: r,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        66284: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => x });
            var i = r(25839),
                a = r(82298),
                n = r(74631),
                s = r(89288),
                l = r(36619),
                o = r(49656),
                c = r(5365),
                u = r(23976),
                d = r(26742),
                m = r(95314),
                _ = r(18412),
                h = r(80986),
                f = r(95388),
                p = r(99024),
                v = r.n(p);
            let g = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: r,
                            isShimmerVisible: p,
                            isShimmerActive: g,
                            isShimmerWithSubcover: x,
                            isShimmerCentered: b,
                            isShimmerRounded: y,
                            title: T,
                            description: k,
                            coverUrl: N,
                            viewAllActionLink: j,
                            titleChildren: C,
                            headerChildren: A,
                            children: L,
                            className: S,
                            containerClassName: E,
                            headerClassName: I,
                            itemClassName: O,
                            showHeaderShimmer: R = !1,
                            showShimmerInfo: P = !0,
                            showControls: w = !0,
                            headingRef: B,
                            headingVariant: D,
                            customShimmer: H,
                            ...z
                        } = e,
                        F = (0, n.useId)(),
                        U = (0, n.useRef)(null),
                        { objectsCount: M } = (0, d.N)(),
                        W = (0, n.useMemo)(
                            () =>
                                R && p
                                    ? (0, i.jsx)('div', { className: I, children: (0, i.jsx)(u.W, { isActive: g, className: v().shimmerTitle, radius: 'l' }) })
                                    : T || k || C || A
                                      ? (0, i.jsx)(m.B, {
                                            objectType: l.DomainObjectType.Shortcut,
                                            objectId: String(j),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != M ? M : 0,
                                            children: (0, i.jsx)(_.T, {
                                                className: I,
                                                labeledForId: F,
                                                title: T,
                                                description: k,
                                                coverUrl: N,
                                                viewAllActionLink: j,
                                                controls: w && (0, i.jsx)(h.X, { className: v().controls, carouselRef: U }),
                                                headingRef: B,
                                                headingVariant: D,
                                                withDescription: !!k,
                                                titleChildren: C,
                                                children: A,
                                            }),
                                        })
                                      : void 0,
                            [N, k, I, B, D, F, g, p, M, w, R, T, C, A, j],
                        ),
                        V = (0, o.L)(() => H || (0, f.k)({ className: r, isActive: g, withInfo: P, withSubcover: x, centered: b, round: y }));
                    return (0, i.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(v().root, S),
                        ...(0, s.OZ)(z),
                        children: [
                            W,
                            (0, i.jsx)(c.F, {
                                className: E,
                                ref: U,
                                itemClassName: (0, a.$)(v().item, v().important, O),
                                'aria-labelledby': ''.concat(F, ' ').concat(F, '-description'),
                                children: p ? V : L,
                            }),
                        ],
                    });
                },
                x = (0, n.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
        },
        72675: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => K }));
            var i = r(25839),
                a = r(84059),
                n = r(74631),
                s = r(82298),
                l = r(88204),
                o = r(39004),
                c = r(8487),
                u = r(61493),
                d = r(71035),
                m = r(4071),
                _ = r(66738),
                h = r(13833),
                f = r(4254),
                p = r(59884),
                v = r(78299),
                g = r(77635),
                x = r(84058),
                b = r(1407),
                y = r(20258),
                T = r(10322),
                k = r(89192),
                N = r(30716),
                j = r(91149),
                C = r(92942),
                A = r(80499),
                L = r(82706),
                S = r(27954),
                E = r(55491),
                I = r(14240),
                O = r(57549),
                R = r(66284),
                P = r(70849),
                w = r(99401),
                B = r(26076),
                D = r(10603),
                H = r(90250),
                z = r(88180),
                F = r.n(z);
            let U = (0, l.PA)((e) => {
                var t, r, l, z;
                let { labelId: U, preloadedLabel: M } = e,
                    W = (0, A.s)(L.n.LABEL),
                    {
                        settings: { isMobile: V },
                    } = (0, S.g)(),
                    { formatMessage: K } = (0, o.A)(),
                    { contentScrollRef: $, setContentScrollRef: X } = (0, k.g)(),
                    { notify: Y } = (0, C.l)(),
                    { shareLink: q } = (0, I.b)('/label/:labelId', { params: { labelId: null != (r = W.id) ? r : '' } }),
                    G = (0, n.useRef)(null),
                    Z = (0, n.useRef)(0);
                (0, H.Q)({ id: Number(W.id), name: null != (l = W.name) ? l : '', type: null != (z = W.type) ? z : '' }, H.T.ROOT);
                let Q = (0, d.c)(async () => {
                        (await window.navigator.clipboard.writeText(q),
                            Y((0, i.jsx)(P.D, { entityVariant: E.Y.LABEL, entityTitle: W.name || '' }), { containerId: j.u.INFO }));
                    }),
                    J = (0, n.useMemo)(
                        () =>
                            V
                                ? (0, i.jsx)(m.$, {
                                      className: F().button,
                                      onClick: Q,
                                      icon: (0, i.jsx)(_.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': u.Xk.label.SHARE_COPY_LINK_BUTTON,
                                  })
                                : (0, i.jsx)(m.$, {
                                      className: F().button,
                                      onClick: Q,
                                      icon: (0, i.jsx)(_.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': u.Xk.label.SHARE_COPY_LINK_BUTTON,
                                      children: (0, i.jsx)(c.A, { id: 'interface-actions.share' }),
                                  }),
                        [V, Q],
                    ),
                    ee = W.isPublisher ? K({ id: 'entity-names.publisher' }) : K({ id: 'entity-names.label' }),
                    et = W.isPublisher ? K({ id: 'entity-names.non-music-releases' }) : K({ id: 'entity-names.releases' });
                return ((0, n.useEffect)(
                    () => () => {
                        W.reset();
                    },
                    [W],
                ),
                W.isNotFound && (0, a.notFound)(),
                (0, n.useEffect)(
                    () => () => {
                        Z.current = 0;
                    },
                    [W],
                ),
                (0, n.useEffect)(() => {
                    W.isRejected &&
                        Z &&
                        !(Z.current > 0) &&
                        (Y((0, i.jsx)(O.h, { error: K({ id: 'error-messages.error-load-part-page' }) }), { containerId: j.u.ERROR }), Z.current++);
                }, [W.isRejected, Y, K]),
                (0, N.J)(W.isResolved),
                W.isNeededToLoad && (0, n.use)(W.getData({ labelId: Number(U), preloadedLabel: M })),
                W.isRejected && !W.isNotFound)
                    ? (0, i.jsx)(v.SomethingWentWrong, {})
                    : (0, i.jsx)(T.n, {
                          pageId: y._Q.LABEL,
                          children: (0, i.jsxs)(b.h, {
                              scrollElement: $,
                              children: [
                                  (0, i.jsx)(D.Y, { innerHeaderRef: G }),
                                  (0, i.jsxs)(h.N, {
                                      className: F().root,
                                      containerClassName: F().content,
                                      ref: X,
                                      'data-test-id': u.Xk.label.LABEL_PAGE,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: F().header,
                                              children: [
                                                  (0, i.jsx)(f.HL, { variant: 'div', type: 'text', size: 'm', weight: 'medium', children: ee }),
                                                  (0, i.jsx)(p.R, { className: F().title, title: W.name || '', headingVariant: 'h1' }),
                                                  J,
                                              ],
                                          }),
                                          W.hasAlbums &&
                                              W.albums &&
                                              (0, i.jsx)(g.p, {
                                                  isShimmerVisible: W.isLoading,
                                                  isShimmerActive: !0,
                                                  className: F().carouselContainer,
                                                  headerClassName: (0, s.$)(F().carouselBlock, F().carouselBlockHeader),
                                                  containerClassName: F().carouselBlock,
                                                  title: et,
                                                  viewAllActionLink: W.albumsUrl,
                                                  albums: W.albums,
                                                  headingVariant: 'h2',
                                                  'data-test-id': u.Xk.label.RELEASES_CAROUSEL,
                                              }),
                                          W.hasArtists &&
                                              (0, i.jsx)(R.O, {
                                                  isShimmerVisible: W.isLoading,
                                                  isShimmerActive: !0,
                                                  isShimmerCentered: !0,
                                                  isShimmerRounded: !0,
                                                  headerClassName: (0, s.$)(F().carouselBlockHeader, F().carouselBlock),
                                                  containerClassName: F().carouselBlock,
                                                  viewAllActionLink: W.artistsUrl,
                                                  title: K({ id: 'entity-names.artists' }),
                                                  headingVariant: 'h2',
                                                  'data-test-id': u.Xk.label.ARTISTS_CAROUSEL,
                                                  children: null == (t = W.artists) ? void 0 : t.map((e) => (0, i.jsx)(x.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                              }),
                                          (0, i.jsx)(B.A, { children: (0, i.jsx)(w.w, { className: F().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
            var M = r(23976);
            let W = () => {
                let { contentScrollRef: e, setContentScrollRef: t } = (0, k.g)(),
                    {
                        settings: { isMobile: r },
                    } = (0, S.g)();
                return (0, i.jsxs)(b.h, {
                    scrollElement: e,
                    children: [
                        (0, i.jsx)(D.Y, {}),
                        (0, i.jsxs)(h.N, {
                            className: F().root,
                            containerClassName: F().content,
                            ref: t,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: F().header,
                                    children: [
                                        (0, i.jsx)(M.W, { className: F().shimmerLabelText, radius: 's' }),
                                        (0, i.jsx)(M.W, { className: F().shimmerPageTitle, radius: 'l' }),
                                        (0, i.jsx)(M.W, { className: F().shimmerButton, radius: r ? 'round' : 'xxxl' }),
                                    ],
                                }),
                                (0, i.jsx)(R.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    className: F().carouselContainer,
                                    headerClassName: (0, s.$)(F().carouselBlockHeader, F().carouselBlock),
                                    containerClassName: F().carouselBlock,
                                }),
                                (0, i.jsx)(R.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    isShimmerCentered: !0,
                                    isShimmerRounded: !0,
                                    headerClassName: (0, s.$)(F().carouselBlockHeader, F().carouselBlock),
                                    containerClassName: F().carouselBlock,
                                }),
                            ],
                        }),
                    ],
                });
            };
            var V = r(61288);
            let K = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return ((e && (0, V.L)(e)) || (0, a.notFound)(), (0, i.jsx)(n.Suspense, { fallback: (0, i.jsx)(W, {}), children: (0, i.jsx)(U, { labelId: e }) }));
            };
        },
        72720: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => c });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(94572),
                o = r.n(l);
            let c = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: r = '',
                        maxTextLength: n,
                        minTextLength: l,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: u = !1,
                        placeholder: d,
                        onChangeFinish: m,
                        withOutline: _ = !1,
                        'data-test-id': h,
                    } = e,
                    [f, p] = (0, s.useState)(r),
                    v = (0, s.useRef)(!1),
                    g = (0, s.useRef)(null),
                    x = (0, s.useCallback)((e) => {
                        p(e.target.value);
                    }, []),
                    b = (0, s.useCallback)(
                        (e) => {
                            if (u && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (v.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [u],
                    ),
                    y = (0, s.useCallback)(() => {
                        let e = f.trim();
                        v.current || (l && e.length < l) ? ((v.current = !1), null == m || m(r)) : null == m || m(e);
                    }, [f, v, l, m, r]);
                ((0, s.useEffect)(() => {
                    g.current && ((g.current.selectionStart = g.current.value.length), (g.current.selectionEnd = g.current.value.length));
                }, []),
                    (0, s.useLayoutEffect)(() => {
                        let e = g.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [g, f]));
                let T = (0, s.useMemo)(() => ('textarea' === c ? (e) => (0, i.jsx)('textarea', { ref: g, rows: 6, ...e }) : (e) => (0, i.jsx)('input', { ...e })), [c]);
                return (0, i.jsx)(T, {
                    className: (0, a.$)(o().root, t, { [o().root_textarea]: 'textarea' === c, [o().root_outline]: _ }),
                    type: 'text',
                    value: f,
                    maxLength: n,
                    onBlur: y,
                    onChange: x,
                    onKeyDown: b,
                    placeholder: d,
                    autoFocus: !0,
                    'data-test-id': h,
                });
            });
        },
        73114: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 72675));
        },
        73208: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        77635: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => d });
            var i = r(25839),
                a = r(74631),
                n = r(36619),
                s = r(61777),
                l = r(95314),
                o = r(66284),
                c = r(76939);
            let u = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: r,
                            isShimmerActive: u,
                            title: d,
                            description: m,
                            albums: _,
                            className: h,
                            containerClassName: f,
                            headerClassName: p,
                            viewAllActionLink: v,
                            headingRef: g,
                            headingVariant: x,
                            shouldSendAnalyticsOnLoaded: b,
                            ...y
                        } = e,
                        T = (0, s.f)();
                    return (
                        (0, a.useEffect)(() => {
                            b && T();
                        }, [T, b]),
                        (0, i.jsx)(o.O, {
                            isShimmerVisible: r,
                            isShimmerActive: u,
                            className: h,
                            headerClassName: p,
                            containerClassName: f,
                            ref: t,
                            title: d,
                            description: m,
                            viewAllActionLink: v,
                            headingRef: g,
                            headingVariant: x,
                            ...y,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, i.jsx)(
                                              l.B,
                                              {
                                                  objectType: n.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, i.jsx)(c.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                d = (0, a.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        80477: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => s });
            var i = r(25839),
                a = r(35015),
                n = r(10546);
            let s = (e) => {
                let { artist: t, closeToast: r } = e;
                return (0, i.jsx)(n.k, {
                    closeToast: r,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        80986: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => m });
            var i = r(25839),
                a = r(82298),
                n = r(74631),
                s = r(61493),
                l = r(9911),
                o = r(4071),
                c = r(66738),
                u = r(37922),
                d = r.n(u);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: u,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: h = 'xxxs',
                        buttonVariant: f = 'outline',
                    } = e,
                    { swipeBackward: p, swipeForward: v, shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: x, shouldHideControls: b } = (0, l.Y)(t),
                    y = (0, n.useCallback)(
                        (e) => {
                            (p(), e.stopPropagation());
                        },
                        [p],
                    ),
                    T = (0, n.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(d().root, m),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(d().control, r, { [d().control_hidden]: b, [d().control_withSecondaryColor]: _ }),
                            onClick: y,
                            size: h,
                            radius: 'round',
                            variant: f,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: g,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(d().control, u, { [d().control_hidden]: b, [d().control_withSecondaryColor]: _ }),
                            onClick: T,
                            size: h,
                            radius: 'round',
                            variant: f,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: x,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        84058: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => U });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(39004),
                o = r(36619),
                c = r(61493),
                u = r(22939),
                d = r(71035),
                m = r(49656),
                _ = r(51246),
                h = r(66738),
                f = r(86869),
                p = r(4254),
                v = r(1797),
                g = r(7361),
                x = r(90613),
                b = r(79367),
                y = r(29481),
                T = r(47009),
                k = r(34159),
                N = r(52512),
                j = r(30290),
                C = r(61561),
                A = r(85686),
                L = r(85743),
                S = r(50209),
                E = r(27954),
                I = r(6323),
                O = r(64720),
                R = r(97522),
                P = r(41580),
                w = r(49438),
                B = r(71996),
                D = r(78437),
                H = r(21971),
                z = r(13936),
                F = r.n(z);
            let U = (0, n.PA)((e) => {
                let { artist: t, className: r, children: n, contentLinesCount: z, topTitleElement: U, bottomTitleElement: M } = e,
                    { ref: W, intersectionPropertyId: V } = (0, N.n)(),
                    {
                        trailer: K,
                        user: $,
                        paywall: { modal: X },
                    } = (0, E.g)(),
                    { from: Y, utmLink: q } = (0, j.f)({ contextId: t.id, contextType: u.K.Artist }),
                    { formatMessage: G } = (0, l.A)(),
                    [Z, Q] = (0, s.useState)(!1),
                    [J, ee] = (0, s.useState)(!1),
                    [et, er] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, L.z)(),
                    es = (0, y.N)(),
                    el = (0, T.b)(),
                    eo = (0, g.K)(t),
                    ec = (0, x.A)(t),
                    { id: eu, name: ed, coverUri: em, isLiked: e_ } = t,
                    eh = (0, A.Z)(t.url),
                    [ef, ep] = (0, s.useState)(!1),
                    ev = (0, k.F)(),
                    eg = (0, b.P)(),
                    ex = (0, d.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (K.openArtistTrailer(t.id), ev(o.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, s.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = e_ ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, e_, G]),
                    { isPlaying: ey, togglePlay: eT } = (0, S.D)({
                        playContextParams: { contextData: { type: u.K.Artist, meta: { id: Number(eu) }, from: Y, utmLink: q }, loadContextMeta: !0 },
                    }),
                    ek = (0, v.S)({ artist: t, callback: eh }),
                    eN = (0, v.S)({ artist: t, callback: eT }),
                    ej = (0, d.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), ek(e));
                    }),
                    eC = (0, C.N)(),
                    eA = (0, d.c)(() => {
                        if (!eg()) {
                            if (eC) return void X.open();
                            (Z || ey || (Q(!0), null == en || en()), eN(), el(!ey));
                        }
                    }),
                    eL = (0, d.c)(() => {
                        (J || e_ || (ee(!0), null == ei || ei()), eo());
                    }),
                    eS = (0, d.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eE = (0, d.c)((e) => {
                        (er(e), ep(e));
                    }),
                    eI = (0, s.useMemo)(
                        () =>
                            (0, i.jsx)(
                                H.g,
                                {
                                    artist: t,
                                    onOpenChange: eE,
                                    open: et,
                                    onClick: eS,
                                    className: (0, a.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, i.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eS, eE, et],
                    ),
                    eO = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, i.jsx)(
                                D.n,
                                {
                                    children: (0, i.jsx)(B.k, {
                                        className: (0, a.$)(F().trailerButton, F().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ex,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ex]),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, i.jsx)(
                                P.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eP = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, i.jsx)(
                                _.hg,
                                {
                                    isVisible: et || ef,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, i.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eA,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, i.jsx)(
                                        O.c,
                                        {
                                            className: (0, a.$)(F().likeButton, F().control),
                                            isLiked: e_,
                                            onClick: eL,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !$.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eI,
                                    pinControl: eR,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, i.jsx)(f.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, i.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: ej,
                                    children: [
                                        (0, i.jsx)(I.B, {
                                            className: F().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eP,
                                    ],
                                }),
                            }),
                        [ej, em, eb, t.isAvailable, eP],
                    );
                return (0, i.jsx)(_.MN, {
                    ref: W,
                    className: (0, a.$)(F().root, r),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, i.jsxs)(i.Fragment, {
                        children: [
                            U,
                            (0, i.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, i.jsx)(R.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: ej,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            M,
                        ],
                    }),
                    srTitle: (0, i.jsx)(R.N, { className: F().srTitleLink, href: t.url, onClick: ej, children: eb }),
                    'data-intersection-property-id': V,
                    contentLinesCount: z,
                    view: ew,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        88180: (e) => {
            e.exports = {
                root: 'LabelPage_root__jquyP',
                content: 'LabelPage_content__9st_X',
                header: 'LabelPage_header__G2xY_',
                title: 'LabelPage_title__BNxeX',
                button: 'LabelPage_button__JXw3C',
                shimmerLabelText: 'LabelPage_shimmerLabelText__rog2x',
                shimmerPageTitle: 'LabelPage_shimmerPageTitle__rSKGh',
                shimmerButton: 'LabelPage_shimmerButton__9ZaQr',
                carouselBlock: 'LabelPage_carouselBlock__zPJmW',
                carouselBlockHeader: 'LabelPage_carouselBlockHeader__dvYqJ',
                carouselContainer: 'LabelPage_carouselContainer__bRVMp',
                footer: 'LabelPage_footer__lvKmF',
            };
        },
        90613: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => m });
            var i = r(25839),
                a = r(33660),
                n = r(74631),
                s = r(39004),
                l = r(91149),
                o = r(92942),
                c = r(27954),
                u = r(57549),
                d = r(80477);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: r } = (0, o.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [_, h] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void r((0, i.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    h(!0);
                    let s = await e.togglePin();
                    (h(!1),
                        s
                            ? r((0, i.jsx)(d.l, { artist: n }), { containerId: l.u.INFO })
                            : r((0, i.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, m, r]);
            };
        },
        94572: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        95314: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => s });
            var i = r(25839),
                a = r(74631),
                n = r(66192);
            let s = (e) => {
                let { objectId: t, objectPosX: r, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: u, mainObjectType: d, children: m } = e,
                    _ = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: r, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: u, mainObjectType: d }),
                        [t, r, s, l, o, c, u, d],
                    );
                return (0, i.jsx)(n.l.Provider, { value: _, children: m });
            };
        },
        95388: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => n });
            var i = r(25839),
                a = r(19412);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, r) => (0, i.jsx)(a.V, { ...e }, r));
            };
        },
        99024: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                6749, 7349, 3349, 1676, 7339, 6287, 2121, 3472, 1107, 4607, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 4245, 3269, 4163,
                3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 6237, 4475, 5056, 7358,
            ],
            () => e((e.s = 73114)),
        ),
            (_N_E = e.O()));
    },
]);
