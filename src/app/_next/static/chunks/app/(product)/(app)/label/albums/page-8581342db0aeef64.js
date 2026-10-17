(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3008, 3580],
    {
        1466: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => _ });
            var n = r(25839),
                a = r(82298),
                o = r(74631),
                l = r(39004),
                i = r(8487),
                s = r(4071),
                u = r(66738),
                c = r(4254),
                m = r(51790),
                d = r(12558),
                f = r.n(d);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    d = (0, o.useRef)(null),
                    { formatMessage: _ } = (0, l.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = d.current) || e.focus();
                }, []);
                let p = (0, o.useMemo)(
                    () =>
                        (0, n.jsxs)('div', {
                            className: f().message,
                            children: [
                                (0, n.jsx)(c.HL, {
                                    className: f().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, n.jsx)(i.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, n.jsx)(s.$, {
                                    ref: d,
                                    className: f().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, n.jsx)(u.I, { variant: 'reset', size: 'xxs', className: f().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, n.jsx)(m.$, { className: (0, a.$)(f().root, f().important), message: p, closeToast: r });
            };
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => h });
            var n = r(25839),
                a = r(82298),
                o = r(28631),
                l = r(74631);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: a, ...o } = e,
                        l = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        i = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': l, style: { ...t }, ref: r, ...o });
                },
                s = (0, l.forwardRef)((e, t) => (0, n.jsx)(i, { forwardRef: t, ...e }));
            var u = r(45300),
                c = r.n(u);
            let m = (e) => {
                    let { style: t, forwardRef: r, withFooter: o, withHeader: l, withForceScroll: i, ...s } = e;
                    return (0, n.jsx)('div', {
                        className: (0, a.$)(c().scroller, { [c().scroller_withFooter]: o, [c().scroller_withHeader]: l, [c().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: r,
                        ...s,
                        tabIndex: -1,
                    });
                },
                d = (0, l.forwardRef)((e, t) => (0, n.jsx)(m, { forwardRef: t, ...e }));
            var f = r(10508),
                _ = r(63257);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: a,
                            debounceDurationInMs: o = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: s = [],
                            endReached: u,
                            virtuosoRef: c,
                            ...m
                        } = e,
                        [d, p] = (0, l.useState)(null),
                        h = (0, l.useMemo)(
                            () =>
                                (0, f.A)((e) => {
                                    if ((null == a || a(e), s.length > 0 && p(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < n; e++) r(e);
                                    }
                                }, o),
                            [o, a, t, r, s],
                        );
                    (0, l.useEffect)(() => {
                        s.length > 0 && d && h(d);
                    }, s);
                    let g = (0, l.useMemo)(() => {
                        if (u)
                            return (0, f.A)((e) => {
                                u(e);
                            }, o);
                    }, [u, o]);
                    return (0, n.jsx)(_.sN, { ref: c, rangeChanged: h, totalCount: i, endReached: g, ...m });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: u,
                            itemClassName: m,
                            itemContentCallback: f,
                            listClassName: _,
                            overscan: h = 700,
                            pageSize: g = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: b,
                            initialItemCount: N,
                            minInitialItemCount: S = 20,
                            handleRef: E,
                            alwaysShowScrollbar: A = !1,
                            testId: x,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...I
                        } = e,
                        [j, w] = (0, l.useState)(!1),
                        R = (0, l.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    w(e);
                                }, 100),
                            [],
                        ),
                        P = (0, l.useMemo)(() => {
                            var e, t;
                            return L
                                ? {
                                      Scroller: d,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : s,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: d,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : s,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, y, L]),
                        C = N ? Math.min(N, S) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, a.$)(c().root, { [c().root_scrolling]: j || A, [c().root_notScrolling]: !j && !A }, t),
                        'data-test-id': x,
                        children: [
                            L && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(p, {
                                overscan: h,
                                components: P,
                                listClassName: _,
                                itemClassName: m,
                                isScrolling: R,
                                itemContent: f,
                                scrollerRef: E,
                                totalCount: v,
                                pageSize: g,
                                onPageHandler: i,
                                onRangeHandler: u,
                                debounceDurationInMs: b,
                                initialItemCount: C,
                                shouldTriggerRangeChangedOn: T,
                                ...I,
                            }),
                            L && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        6969: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => n });
            var n = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        8266: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => n });
            let n = (e, t) => {
                let r = new URL(window.location.href),
                    n = r.searchParams;
                return (n.set(e, t), (r.search = n.toString()), r.toString());
            };
        },
        12558: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        13580: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => y });
            var n,
                a,
                o = r(23198),
                l = r(46254);
            function i(e, t) {
                var r = t && t.cache ? t.cache : d,
                    n = t && t.serializer ? t.serializer : c;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var r,
                                  n,
                                  a = 1 === e.length ? s : u;
                              return ((r = t.cache.create()), (n = t.serializer), a.bind(this, e, r, n));
                          }
                )(e, { cache: r, serializer: n });
            }
            function s(e, t, r, n) {
                var a = null == n || 'number' == typeof n || 'boolean' == typeof n ? n : r(n),
                    o = t.get(a);
                return (void 0 === o && ((o = e.call(this, n)), t.set(a, o)), o);
            }
            function u(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    a = r(n),
                    o = t.get(a);
                return (void 0 === o && ((o = e.apply(this, n)), t.set(a, o)), o);
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
            var d = {
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
                        return ((r = t.cache.create()), (n = t.serializer), s.bind(this, e, r, n));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(n || (n = {}));
            var _ = (function (e) {
                    function t(t, r, n) {
                        var a = e.call(this, t) || this;
                        return ((a.code = r), (a.originalMessage = n), a);
                    }
                    return (
                        (0, o.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                p = (function (e) {
                    function t(t, r, a, o) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(a).join('", "'), '"'),
                                n.INVALID_VALUE,
                                o,
                            ) || this
                        );
                    }
                    return ((0, o.__extends)(t, e), t);
                })(_),
                h = (function (e) {
                    function t(t, r, a) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), n.INVALID_VALUE, a) || this;
                    }
                    return ((0, o.__extends)(t, e), t);
                })(_),
                g = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
                        );
                    }
                    return ((0, o.__extends)(t, e), t);
                })(_);
            function v(e) {
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
            var y = (function () {
                function e(t, r, s, u) {
                    var c,
                        m,
                        d = this;
                    if (
                        (void 0 === r && (r = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = d.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function (e, t) {
                                return (e.length && t.type === a.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return r.length <= 1 ? r[0] || '' : r;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, r, o, i, s, u, c) {
                                if (1 === t.length && (0, l.isLiteralElement)(t[0])) return [{ type: a.literal, value: t[0].value }];
                                for (var m = [], d = 0; d < t.length; d++) {
                                    var f = t[d];
                                    if ((0, l.isLiteralElement)(f)) {
                                        m.push({ type: a.literal, value: f.value });
                                        continue;
                                    }
                                    if ((0, l.isPoundElement)(f)) {
                                        'number' == typeof u && m.push({ type: a.literal, value: o.getNumberFormat(r).format(u) });
                                        continue;
                                    }
                                    var v = f.value;
                                    if (!(s && v in s)) throw new g(v, c);
                                    var y = s[v];
                                    if ((0, l.isArgumentElement)(f)) {
                                        ((y && 'string' != typeof y && 'number' != typeof y) || (y = 'string' == typeof y || 'number' == typeof y ? String(y) : ''),
                                            m.push({ type: 'string' == typeof y ? a.literal : a.object, value: y }));
                                        continue;
                                    }
                                    if ((0, l.isDateElement)(f)) {
                                        var b = 'string' == typeof f.style ? i.date[f.style] : (0, l.isDateTimeSkeleton)(f.style) ? f.style.parsedOptions : void 0;
                                        m.push({ type: a.literal, value: o.getDateTimeFormat(r, b).format(y) });
                                        continue;
                                    }
                                    if ((0, l.isTimeElement)(f)) {
                                        var b = 'string' == typeof f.style ? i.time[f.style] : (0, l.isDateTimeSkeleton)(f.style) ? f.style.parsedOptions : i.time.medium;
                                        m.push({ type: a.literal, value: o.getDateTimeFormat(r, b).format(y) });
                                        continue;
                                    }
                                    if ((0, l.isNumberElement)(f)) {
                                        var b = 'string' == typeof f.style ? i.number[f.style] : (0, l.isNumberSkeleton)(f.style) ? f.style.parsedOptions : void 0;
                                        (b && b.scale && (y *= b.scale || 1), m.push({ type: a.literal, value: o.getNumberFormat(r, b).format(y) }));
                                        continue;
                                    }
                                    if ((0, l.isTagElement)(f)) {
                                        var N = f.children,
                                            S = f.value,
                                            E = s[S];
                                        if ('function' != typeof E) throw new h(S, 'function', c);
                                        var A = E(
                                            e(N, r, o, i, s, u).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(A) || (A = [A]),
                                            m.push.apply(
                                                m,
                                                A.map(function (e) {
                                                    return { type: 'string' == typeof e ? a.literal : a.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, l.isSelectElement)(f)) {
                                        var x = f.options[y] || f.options.other;
                                        if (!x) throw new p(f.value, y, Object.keys(f.options), c);
                                        m.push.apply(m, e(x.value, r, o, i, s));
                                        continue;
                                    }
                                    if ((0, l.isPluralElement)(f)) {
                                        var x = f.options['='.concat(y)];
                                        if (!x) {
                                            if (!Intl.PluralRules)
                                                throw new _(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    n.MISSING_INTL_API,
                                                    c,
                                                );
                                            var L = o.getPluralRules(r, { type: f.pluralType }).select(y - (f.offset || 0));
                                            x = f.options[L] || f.options.other;
                                        }
                                        if (!x) throw new p(f.value, y, Object.keys(f.options), c);
                                        m.push.apply(m, e(x.value, r, o, i, s, y - (f.offset || 0)));
                                        continue;
                                    }
                                }
                                return m.length < 2
                                    ? m
                                    : m.reduce(function (e, t) {
                                          var r = e[e.length - 1];
                                          return (r && r.type === a.literal && t.type === a.literal ? (r.value += t.value) : e.push(t), e);
                                      }, []);
                            })(d.ast, d.locales, d.formatters, d.formats, e, void 0, d.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = d.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(d.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return d.ast;
                        }),
                        (this.locales = r),
                        (this.resolvedLocale = e.resolveLocale(r)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var y = u || {},
                            b = (y.formatters, (0, o.__rest)(y, ['formatters']));
                        this.ast = e.__parse(t, (0, o.__assign)((0, o.__assign)({}, b), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((c = e.formats),
                        s
                            ? Object.keys(c).reduce(
                                  function (e, t) {
                                      var r, n;
                                      return (
                                          (e[t] =
                                              ((r = c[t]),
                                              (n = s[t])
                                                  ? (0, o.__assign)(
                                                        (0, o.__assign)((0, o.__assign)({}, r || {}), n || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, o.__assign)((0, o.__assign)({}, r[t]), n[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : r)),
                                          e
                                      );
                                  },
                                  (0, o.__assign)({}, c),
                              )
                            : c)),
                        (this.formatters =
                            (u && u.formatters) ||
                            (void 0 === (m = this.formatterCache) && (m = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: i(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, o.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.number), strategy: f.variadic },
                                ),
                                getDateTimeFormat: i(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, o.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.dateTime), strategy: f.variadic },
                                ),
                                getPluralRules: i(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, o.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.pluralRules), strategy: f.variadic },
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
                    (e.__parse = l.parse),
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
        20717: (e) => {
            e.exports = {
                root: 'LabelAlbumsPage_root__xyWi4',
                scrollContainer: 'LabelAlbumsPage_scrollContainer__zRUlM',
                important: 'LabelAlbumsPage_important__s18oL',
                shimmerScrollContainer: 'LabelAlbumsPage_shimmerScrollContainer__v_um_',
                footer: 'LabelAlbumsPage_footer__dcXFk',
                item: 'LabelAlbumsPage_item__Qjz9F',
                content: 'LabelAlbumsPage_content__jOWKZ',
                shimmerTitle: 'LabelAlbumsPage_shimmerTitle__jbYXl',
                shimmerSortDropdown: 'LabelAlbumsPage_shimmerSortDropdown__LKtgF',
            };
        },
        34383: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        37114: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => q }));
            var n = r(25839),
                a = r(84059),
                o = r(74631),
                l = r(82298),
                i = r(88204),
                s = r(39004),
                u = r(61493),
                c = r(71035),
                m = r(4254),
                d = r(64715),
                f = r(76939),
                _ = r(1407),
                p = r(78111),
                h = r(6969),
                g = r(8266),
                v = r(83918),
                y = r(65455),
                b = r(8487),
                N = r(4071),
                S = r(32750),
                E = r(66738),
                A = r(27954),
                x = r(34383),
                L = r.n(x);
            let T = { [p.g.RATING]: (0, n.jsx)(b.A, { id: 'sort.sort-by-rating' }), [p.g.YEAR]: (0, n.jsx)(b.A, { id: 'sort.sort-by-year' }) },
                I = (0, i.PA)((e) => {
                    var t;
                    let { sortModel: r, onSort: a } = e,
                        {
                            settings: { isMobile: l },
                        } = (0, A.g)(),
                        i = (0, c.c)((e) => {
                            (0, y.W)(e.id) && r.sortBy !== e.id && (r.setSortBy(e.id), a());
                        }),
                        s = (0, o.useMemo)(
                            () =>
                                l
                                    ? (0, n.jsx)(N.$, { radius: 'xxxl', className: L().button, icon: (0, n.jsx)(E.I, { variant: 'filter', size: 'xs' }) })
                                    : (0, n.jsxs)(N.$, {
                                          radius: 'xxxl',
                                          className: L().button,
                                          'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON,
                                          children: [
                                              (0, n.jsx)(m.HL, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION,
                                                  children: r.sortBy ? T[r.sortBy] : (0, n.jsx)(b.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, n.jsx)(E.I, { size: 'xxs', variant: 'arrowDown', 'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON_ICON }),
                                          ],
                                      }),
                            [l, r.sortBy],
                        );
                    return (0, n.jsx)(S.ms, {
                        placement: l ? 'bottom' : 'top',
                        isMobile: l,
                        strategy: 'fixed',
                        className: L().root,
                        onSelect: i,
                        reference: s,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = r.sortBy) ? t : p.g.YEAR,
                        containerClassName: L().container,
                        header: l ? (0, n.jsx)('div', { className: L().header }) : void 0,
                        'data-test-id': u.Kq.sort.SORT_DROPDOWN,
                        children: Object.values(p.g).map((e) => (0, n.jsx)(S.c$, { id: e, label: T[e], 'data-test-id': u.Kq.sort.SORT_DROPDOWN_ITEM }, e)),
                    });
                });
            var j = r(20258),
                w = r(10322),
                R = r(21784),
                P = r(89192),
                C = r(30716),
                O = r(80499),
                D = r(82706),
                k = r(60678),
                B = r(99401),
                M = r(26076),
                F = r(10603),
                V = r(19412),
                U = r(6968),
                z = r(90250),
                W = r(20717),
                K = r.n(W);
            let Y = (0, i.PA)((e) => {
                let { labelId: t, preloadedLabel: r, preloadedAlbums: i, sortBy: b } = e,
                    { id: N, type: S, name: E, albumsSubpage: x, reset: L, isNeededToLoad: T, getData: W, isPublisher: Y } = (0, O.s)(D.n.LABEL),
                    {
                        settings: { isMobile: G },
                    } = (0, A.g)(),
                    { formatMessage: X } = (0, s.A)(),
                    { contentScrollRef: $, setContentScrollRef: H } = (0, P.g)(),
                    q = (0, R.W)(),
                    Q = Y ? X({ id: 'page.label-podcast-header' }, { labelName: E }) : X({ id: 'page.label-albums-header' }, { labelName: E }),
                    Z = (0, c.c)((e) => {
                        var r;
                        x.getData({ labelId: Number(t), page: e, pageSize: 20, sortBy: null != (r = x.sort.sortBy) ? r : b });
                    }),
                    J = (0, c.c)(() => {
                        (x.reset(), Z(0));
                    });
                (((e) => {
                    let { sortModel: t } = e,
                        r = (0, v.X)();
                    ((0, o.useLayoutEffect)(() => {
                        let e = new URL(window.location.href).searchParams.get(h.K.SORT);
                        e && (0, y.W)(e) ? t.setSortBy(e) : t.setSortBy(p.g.YEAR);
                    }, [t]),
                        (0, o.useEffect)(() => {
                            if (t.sortBy) {
                                let e = (0, g.b)(h.K.SORT, t.sortBy);
                                e && r(e);
                            }
                        }, [r, t.sortBy]));
                })({ sortModel: x.sort }),
                    (0, k.X)(x.pagesLoader, Z),
                    (0, o.useEffect)(
                        () => () => {
                            (L(), x.reset());
                        },
                        [L, x],
                    ),
                    x.isNotFound && (0, a.notFound)(),
                    (0, z.Q)({ id: Number(N), name: null != E ? E : '', type: null != S ? S : '' }, z.T.ALBUMS),
                    (0, C.J)(x.isResolved));
                let ee = (0, o.useMemo)(() => ({ Footer: () => (0, n.jsx)(M.A, { children: (0, n.jsx)(B.w, { className: K().footer }) }) }), []),
                    et = X({ id: 'entity-names.label-albums-list' }),
                    er = [];
                if (x.isNeededToLoad) {
                    var en;
                    let e = x.sort.sortBy === b || void 0 === x.sort.sortBy;
                    er.push(x.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedAlbums: e ? i : void 0, sortBy: null != (en = x.sort.sortBy) ? en : b }));
                }
                if (
                    (T && er.push(W({ labelId: Number(t), preloadedLabel: r, withLabelEntities: !1 })),
                    er.length && (0, o.use)(Promise.allSettled(er)),
                    x.isRejected && !x.isNotFound)
                )
                    return (0, n.jsx)(d.SomethingWentWrong, {});
                let ea = x.isShimmerVisible ? 20 : x.totalCount;
                return (0, n.jsx)(w.n, {
                    pageId: j._Q.LABEL_ALBUMS,
                    children: (0, n.jsx)(_.h, {
                        scrollElement: $,
                        outerTitle: Q,
                        children: (0, n.jsxs)('div', {
                            className: K().root,
                            'data-test-id': u.Xk.label.LABEL_ALBUMS_PAGE,
                            children: [
                                (0, n.jsxs)(F.Y, {
                                    variant: F.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: q.canBack,
                                    children: [
                                        (0, n.jsx)(m.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: Q }),
                                        (0, n.jsx)(I, { sortModel: x.sort, onSort: J }),
                                    ],
                                }),
                                (0, n.jsx)(U.$, {
                                    className: (0, l.$)(K().scrollContainer, K().important),
                                    listClassName: K().content,
                                    itemClassName: K().item,
                                    customComponents: ee,
                                    itemContentCallback: (e) => {
                                        let t = x.items[e],
                                            r = X({ id: 'loading-messages.entity-is-loading' }, { entityName: X({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, n.jsx)(f.a, { album: t, contentLinesCount: 4, withAddition: !t.isNonMusic, withLikesCount: t.isNonMusic }, t.id)
                                            : (0, n.jsx)(V.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: ea,
                                    initialItemCount: ea,
                                    onGetDataByPage: Z,
                                    pageSize: 20,
                                    totalRequests: x.requestsCount,
                                    handleRef: H,
                                    context: { listAriaLabel: et },
                                    isMobileLayout: G,
                                    useWindowScroll: G,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var G = r(23976),
                X = r(95772);
            let $ = () => {
                let e = (0, R.W)(),
                    { formatMessage: t } = (0, s.A)(),
                    r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                return (0, n.jsx)(_.h, {
                    scrollElement: null,
                    children: (0, n.jsxs)('div', {
                        className: K().root,
                        children: [
                            (0, n.jsxs)(F.Y, {
                                variant: F.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: [
                                    (0, n.jsx)(G.W, { className: K().shimmerTitle, radius: 'l' }),
                                    (0, n.jsx)(G.W, { className: K().shimmerSortDropdown, radius: 'xxxl' }),
                                ],
                            }),
                            (0, n.jsx)('div', {
                                className: (0, l.$)(K().scrollContainer, K().important, K().shimmerScrollContainer),
                                children: (0, n.jsx)('div', {
                                    className: K().content,
                                    children: (0, n.jsx)(X.e, { isActive: !0, itemClassName: K().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var H = r(61288);
            let q = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return ((e && (0, H.L)(e)) || (0, a.notFound)(), (0, n.jsx)(o.Suspense, { fallback: (0, n.jsx)($, {}), children: (0, n.jsx)(Y, { labelId: e }) }));
            };
        },
        38902: (e, t) => {
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
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        46254: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var n = r(23198);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                n.__exportStar(r(38902), t),
                (t._Parser = void 0));
        },
        60678: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => c });
            var n = r(25839),
                a = r(74631),
                o = r(71035),
                l = r(1466),
                i = r(91149),
                s = r(92942),
                u = r(36159);
            let c = (e, t) => {
                let { notify: r, dismiss: c } = (0, s.l)(),
                    m = (0, a.useRef)(void 0),
                    d = (0, o.c)(() => {
                        var r;
                        (c({ notificationId: m.current }), (m.current = 0));
                        let n = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === u.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            n.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !m.current && (m.current = r((0, n.jsx)(l.L, { reloadBlocks: d }), { containerId: i.u.ERROR, autoClose: !1 }));
                }, [c, d, r, e.rejectedPagesCount]);
            };
        },
        65455: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => a });
            var n = r(78111);
            let a = (e) => !!e && (e === n.g.RATING || e === n.g.YEAR);
        },
        73711: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 37114));
        },
        78111: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { g: () => n }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(n || (n = {})));
        },
        83918: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => a });
            var n = r(74631);
            let a = () =>
                (0, n.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => o });
            var n = r(36484),
                a = r(62562);
            let o = () => (0, a.N)().get(n.Zf);
        },
        95772: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => o });
            var n = r(25839),
                a = r(19412);
            let o = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: o,
                    centered: l,
                    withInfo: i,
                    count: s = 10,
                    shimmerClassName: u,
                    linesCount: c,
                    'aria-label': m,
                    withSubcover: d,
                } = e;
                return Array.from(Array(s).keys()).map((e) =>
                    (0, n.jsx)(
                        a.V,
                        { isActive: t, linesCount: c, className: r, round: o, centered: l, withInfo: i, withSubcover: d, 'aria-label': m, shimmerClassName: u },
                        e,
                    ),
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7055, 7339, 740, 6287, 2121, 3472, 2767, 3112, 8881, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 3257, 2038,
                4163, 3246, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 6361, 5898, 2750, 5997, 4475, 5056, 7358,
            ],
            () => e((e.s = 73711)),
        ),
            (_N_E = e.O()));
    },
]);
