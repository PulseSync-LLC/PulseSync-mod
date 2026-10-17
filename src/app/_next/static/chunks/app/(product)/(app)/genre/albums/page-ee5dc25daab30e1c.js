(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3580, 3763],
    {
        400: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        1466: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => f });
            var a = r(25839),
                l = r(82298),
                i = r(74631),
                n = r(39004),
                o = r(8487),
                s = r(4071),
                u = r(66738),
                c = r(4254),
                m = r(51790),
                d = r(12558),
                p = r.n(d);
            let f = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    d = (0, i.useRef)(null),
                    { formatMessage: f } = (0, n.A)();
                (0, i.useEffect)(() => {
                    var e;
                    null == (e = d.current) || e.focus();
                }, []);
                let _ = (0, i.useMemo)(
                    () =>
                        (0, a.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, a.jsx)(c.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, a.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, a.jsx)(s.$, {
                                    ref: d,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': f({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, a.jsx)(u.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [f, t],
                );
                return (0, a.jsx)(m.$, { className: (0, l.$)(p().root, p().important), message: _, closeToast: r });
            };
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => g });
            var a = r(25839),
                l = r(82298),
                i = r(28631),
                n = r(74631);
            let o = (e) => {
                    let { style: t, forwardRef: r, context: l, ...i } = e,
                        n = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        o = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': n, style: { ...t }, ref: r, ...i });
                },
                s = (0, n.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
            var u = r(45300),
                c = r.n(u);
            let m = (e) => {
                    let { style: t, forwardRef: r, withFooter: i, withHeader: n, withForceScroll: o, ...s } = e;
                    return (0, a.jsx)('div', {
                        className: (0, l.$)(c().scroller, { [c().scroller_withFooter]: i, [c().scroller_withHeader]: n, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: r,
                        ...s,
                        tabIndex: -1,
                    });
                },
                d = (0, n.forwardRef)((e, t) => (0, a.jsx)(m, { forwardRef: t, ...e }));
            var p = r(10508),
                f = r(63257);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: l,
                            debounceDurationInMs: i = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: s = [],
                            endReached: u,
                            virtuosoRef: c,
                            ...m
                        } = e,
                        [d, _] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == l || l(e), s.length > 0 && _(e), t && r)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < a; e++) r(e);
                                    }
                                }, i),
                            [i, l, t, r, s],
                        );
                    (0, n.useEffect)(() => {
                        s.length > 0 && d && g(d);
                    }, s);
                    let h = (0, n.useMemo)(() => {
                        if (u)
                            return (0, p.A)((e) => {
                                u(e);
                            }, i);
                    }, [u, i]);
                    return (0, a.jsx)(f.sN, { ref: c, rangeChanged: g, totalCount: o, endReached: h, ...m });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: o,
                            onGetDataByRange: u,
                            itemClassName: m,
                            itemContentCallback: p,
                            listClassName: f,
                            overscan: g = 700,
                            pageSize: h = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: E,
                            initialItemCount: N,
                            minInitialItemCount: b = 20,
                            handleRef: x,
                            alwaysShowScrollbar: I = !1,
                            testId: A,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...L
                        } = e,
                        [C, P] = (0, n.useState)(!1),
                        R = (0, n.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        O = (0, n.useMemo)(() => {
                            var e, t;
                            return T
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
                        }, [r, y, T]),
                        k = N ? Math.min(N, b) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(c().root, { [c().root_scrolling]: C || I, [c().root_notScrolling]: !C && !I }, t),
                        'data-test-id': A,
                        children: [
                            T && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, a.jsx)(_, {
                                overscan: g,
                                components: O,
                                listClassName: f,
                                itemClassName: m,
                                isScrolling: R,
                                itemContent: p,
                                scrollerRef: x,
                                totalCount: v,
                                pageSize: h,
                                onPageHandler: o,
                                onRangeHandler: u,
                                debounceDurationInMs: E,
                                initialItemCount: k,
                                shouldTriggerRangeChangedOn: S,
                                ...L,
                            }),
                            T && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => l });
            var a = r(44806);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: l, userRegion: i } = e;
                return 'ru' === i && t(a.z.WebNextFooterDisclaimer, 'on') ? r() : l();
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
            var a,
                l,
                i = r(23198),
                n = r(46254);
            function o(e, t) {
                var r = t && t.cache ? t.cache : d,
                    a = t && t.serializer ? t.serializer : c;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var r,
                                  a,
                                  l = 1 === e.length ? s : u;
                              return ((r = t.cache.create()), (a = t.serializer), l.bind(this, e, r, a));
                          }
                )(e, { cache: r, serializer: a });
            }
            function s(e, t, r, a) {
                var l = null == a || 'number' == typeof a || 'boolean' == typeof a ? a : r(a),
                    i = t.get(l);
                return (void 0 === i && ((i = e.call(this, a)), t.set(l, i)), i);
            }
            function u(e, t, r) {
                var a = Array.prototype.slice.call(arguments, 3),
                    l = r(a),
                    i = t.get(l);
                return (void 0 === i && ((i = e.apply(this, a)), t.set(l, i)), i);
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
                p = {
                    variadic: function (e, t) {
                        var r, a;
                        return ((r = t.cache.create()), (a = t.serializer), u.bind(this, e, r, a));
                    },
                    monadic: function (e, t) {
                        var r, a;
                        return ((r = t.cache.create()), (a = t.serializer), s.bind(this, e, r, a));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(a || (a = {}));
            var f = (function (e) {
                    function t(t, r, a) {
                        var l = e.call(this, t) || this;
                        return ((l.code = r), (l.originalMessage = a), l);
                    }
                    return (
                        (0, i.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                _ = (function (e) {
                    function t(t, r, l, i) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(l).join('", "'), '"'),
                                a.INVALID_VALUE,
                                i,
                            ) || this
                        );
                    }
                    return ((0, i.__extends)(t, e), t);
                })(f),
                g = (function (e) {
                    function t(t, r, l) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), a.INVALID_VALUE, l) || this;
                    }
                    return ((0, i.__extends)(t, e), t);
                })(f),
                h = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), a.MISSING_VALUE, r) || this
                        );
                    }
                    return ((0, i.__extends)(t, e), t);
                })(f);
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
            })(l || (l = {}));
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
                                return (e.length && t.type === l.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return r.length <= 1 ? r[0] || '' : r;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, r, i, o, s, u, c) {
                                if (1 === t.length && (0, n.isLiteralElement)(t[0])) return [{ type: l.literal, value: t[0].value }];
                                for (var m = [], d = 0; d < t.length; d++) {
                                    var p = t[d];
                                    if ((0, n.isLiteralElement)(p)) {
                                        m.push({ type: l.literal, value: p.value });
                                        continue;
                                    }
                                    if ((0, n.isPoundElement)(p)) {
                                        'number' == typeof u && m.push({ type: l.literal, value: i.getNumberFormat(r).format(u) });
                                        continue;
                                    }
                                    var v = p.value;
                                    if (!(s && v in s)) throw new h(v, c);
                                    var y = s[v];
                                    if ((0, n.isArgumentElement)(p)) {
                                        ((y && 'string' != typeof y && 'number' != typeof y) || (y = 'string' == typeof y || 'number' == typeof y ? String(y) : ''),
                                            m.push({ type: 'string' == typeof y ? l.literal : l.object, value: y }));
                                        continue;
                                    }
                                    if ((0, n.isDateElement)(p)) {
                                        var E = 'string' == typeof p.style ? o.date[p.style] : (0, n.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        m.push({ type: l.literal, value: i.getDateTimeFormat(r, E).format(y) });
                                        continue;
                                    }
                                    if ((0, n.isTimeElement)(p)) {
                                        var E = 'string' == typeof p.style ? o.time[p.style] : (0, n.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : o.time.medium;
                                        m.push({ type: l.literal, value: i.getDateTimeFormat(r, E).format(y) });
                                        continue;
                                    }
                                    if ((0, n.isNumberElement)(p)) {
                                        var E = 'string' == typeof p.style ? o.number[p.style] : (0, n.isNumberSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        (E && E.scale && (y *= E.scale || 1), m.push({ type: l.literal, value: i.getNumberFormat(r, E).format(y) }));
                                        continue;
                                    }
                                    if ((0, n.isTagElement)(p)) {
                                        var N = p.children,
                                            b = p.value,
                                            x = s[b];
                                        if ('function' != typeof x) throw new g(b, 'function', c);
                                        var I = x(
                                            e(N, r, i, o, s, u).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(I) || (I = [I]),
                                            m.push.apply(
                                                m,
                                                I.map(function (e) {
                                                    return { type: 'string' == typeof e ? l.literal : l.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, n.isSelectElement)(p)) {
                                        var A = p.options[y] || p.options.other;
                                        if (!A) throw new _(p.value, y, Object.keys(p.options), c);
                                        m.push.apply(m, e(A.value, r, i, o, s));
                                        continue;
                                    }
                                    if ((0, n.isPluralElement)(p)) {
                                        var A = p.options['='.concat(y)];
                                        if (!A) {
                                            if (!Intl.PluralRules)
                                                throw new f(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    a.MISSING_INTL_API,
                                                    c,
                                                );
                                            var T = i.getPluralRules(r, { type: p.pluralType }).select(y - (p.offset || 0));
                                            A = p.options[T] || p.options.other;
                                        }
                                        if (!A) throw new _(p.value, y, Object.keys(p.options), c);
                                        m.push.apply(m, e(A.value, r, i, o, s, y - (p.offset || 0)));
                                        continue;
                                    }
                                }
                                return m.length < 2
                                    ? m
                                    : m.reduce(function (e, t) {
                                          var r = e[e.length - 1];
                                          return (r && r.type === l.literal && t.type === l.literal ? (r.value += t.value) : e.push(t), e);
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
                            E = (y.formatters, (0, i.__rest)(y, ['formatters']));
                        this.ast = e.__parse(t, (0, i.__assign)((0, i.__assign)({}, E), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((c = e.formats),
                        s
                            ? Object.keys(c).reduce(
                                  function (e, t) {
                                      var r, a;
                                      return (
                                          (e[t] =
                                              ((r = c[t]),
                                              (a = s[t])
                                                  ? (0, i.__assign)(
                                                        (0, i.__assign)((0, i.__assign)({}, r || {}), a || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, i.__assign)((0, i.__assign)({}, r[t]), a[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : r)),
                                          e
                                      );
                                  },
                                  (0, i.__assign)({}, c),
                              )
                            : c)),
                        (this.formatters =
                            (u && u.formatters) ||
                            (void 0 === (m = this.formatterCache) && (m = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, i.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.number), strategy: p.variadic },
                                ),
                                getDateTimeFormat: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, i.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.dateTime), strategy: p.variadic },
                                ),
                                getPluralRules: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, i.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.pluralRules), strategy: p.variadic },
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
                    (e.__parse = n.parse),
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
        18421: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { C: () => i }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        // for PulseSync: BEGIN substituted-track enum extension
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                        // for PulseSync: END substituted-track enum extension
                })(a || (a = {})));
            let l = new Set(Object.values(a)),
                i = (e) => 'string' == typeof e && l.has(e);
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var a = r(25839);
            r(93588);
            var l = r(400),
                i = r.n(l);
            let n = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: i().empty });
            };
        },
        38902: (e, t) => {
            'use strict';
            var r, a;
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
                })(a || (t.SKELETON_TYPE = a = {})),
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
                    return !!(e && 'object' == typeof e && e.type === a.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === a.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: r.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: r.number, value: e, style: t };
                }));
        },
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l, P: () => i });
            var a = r(74631);
            let l = (0, a.createContext)(null),
                i = () => (0, a.useContext)(l);
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
            var a = r(23198);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                a.__exportStar(r(38902), t),
                (t._Parser = void 0));
        },
        60678: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => c });
            var a = r(25839),
                l = r(74631),
                i = r(71035),
                n = r(1466),
                o = r(91149),
                s = r(92942),
                u = r(36159);
            let c = (e, t) => {
                let { notify: r, dismiss: c } = (0, s.l)(),
                    m = (0, l.useRef)(void 0),
                    d = (0, i.c)(() => {
                        var r;
                        (c({ notificationId: m.current }), (m.current = 0));
                        let a = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === u.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            a.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !m.current && (m.current = r((0, a.jsx)(n.L, { reloadBlocks: d }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [c, d, r, e.rejectedPagesCount]);
            };
        },
        61399: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l });
            var a = r(18421);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        72590: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => B }));
            var a = r(25839),
                l = r(84059),
                i = r(74631),
                n = r(82298),
                o = r(88204),
                s = r(39004),
                u = r(61493),
                c = r(4254),
                m = r(64715),
                d = r(76939),
                p = r(1407),
                f = r(20258),
                _ = r(10322),
                g = r(21784),
                h = r(89192),
                v = r(30716),
                y = r(80499),
                E = r(82706),
                N = r(27954),
                b = r(60678),
                x = r(99401),
                I = r(26076),
                A = r(10603),
                T = r(19412),
                S = r(6968),
                L = r(94540),
                C = r(61732),
                P = r(12234),
                R = r(89221),
                O = r(41242),
                k = r(27935),
                j = r(41016),
                w = r(80461),
                F = r(95445),
                D = r(71121);
            async function M(e, t) {
                let { locale: r, fullUrl: a, url: l, tld: i, host: n } = t,
                    o = await (0, R.W)(r),
                    s = e.title.fullTitle,
                    u = o({ id: 'metadata.genre-title' }, { genreTitle: s }),
                    c = (0, D.f)({ genreTitle: s, messageFormatter: o }),
                    m = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(n)).href;
                return {
                    title: u,
                    description: c,
                    openGraph: (0, k.i)({
                        ogTitle: (0, O.N)(s),
                        ogDescription: c,
                        fullUrl: null != a ? a : '',
                        locale: r,
                        siteName: o({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, j.H)({ cardType: w.W.APP, title: u, url: null != l ? l : '', appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, P.X)({
                        additional: { tld: i, url: null != l ? l : '', fullUrl: null != a ? a : '', host: n },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, F.S)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var Y = r(88720),
                G = r(73807),
                H = r.n(G);
            let U = (0, o.PA)((e) => {
                let { metatagId: t, preloadedMeta: r } = e,
                    { albumsSubpage: o } = (0, y.s)(E.n.GENRE),
                    {
                        settings: { isMobile: P },
                    } = (0, N.g)(),
                    { formatMessage: R } = (0, s.A)(),
                    { contentScrollRef: O, setContentScrollRef: k } = (0, h.g)(),
                    j = (0, g.W)(),
                    w = (0, i.useCallback)(
                        (e) => {
                            t && o.getData({ metatagId: t, page: e, pageSize: L.cM });
                        },
                        [o, t],
                    );
                ((0, b.X)(o.pagesLoader, w),
                    (0, i.useEffect)(
                        () => () => {
                            o.reset();
                        },
                        [o],
                    ),
                    o.isNotFound && (0, l.notFound)(),
                    (0, v.J)(o.isResolved),
                    ((e) => {
                        (0, i.useEffect)(() => {
                            e &&
                                M(
                                    ((e) => {
                                        var t, r, a;
                                        return {
                                            id: '',
                                            title: { title: '', fullTitle: e.fullTitle || '' },
                                            albums: e.items.map(Y.f),
                                            pager: {
                                                page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                perPage: (null == (r = e.pagesLoader.pager) ? void 0 : r.perPage) || 0,
                                                total: (null == (a = e.pagesLoader.pager) ? void 0 : a.total) || 0,
                                            },
                                        };
                                    })(e),
                                    { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                ).then((e) => {
                                    (0, C.j)(e);
                                });
                        }, [e]);
                    })(o));
                let F = (0, i.useMemo)(() => ({ Footer: () => (0, a.jsx)(I.A, { children: (0, a.jsx)(x.w, { className: H().footer }) }) }), []);
                if ((t && o.isNeededToLoad && (0, i.use)(o.getData({ preloadedMeta: r, metatagId: t, page: 0, pageSize: L.cM })), o.isSomethingWrong))
                    return (0, a.jsx)(m.SomethingWentWrong, {});
                let D = o.isShimmerVisible ? 20 : o.totalCount;
                return (0, a.jsx)(_.n, {
                    pageId: f._Q.GENRE_ALBUMS,
                    children: (0, a.jsx)(p.h, {
                        scrollElement: O,
                        outerTitle: o.fullTitle,
                        children: (0, a.jsxs)('div', {
                            className: H().root,
                            'data-test-id': u.Xk.genre.GENRE_ALBUMS_PAGE,
                            children: [
                                (0, a.jsx)(A.Y, {
                                    variant: A.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: j.canBack,
                                    children: (0, a.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: o.fullTitle }),
                                }),
                                (0, a.jsx)(S.$, {
                                    className: (0, n.$)(H().scrollContainer, H().important),
                                    customComponents: F,
                                    itemContentCallback: (e) => {
                                        let t = o.items[e],
                                            r = R({ id: 'loading-messages.entity-is-loading' }, { entityName: R({ id: 'entity-names.album' }) });
                                        return t ? (0, a.jsx)(d.a, { album: t, contentLinesCount: 4 }, t.id) : (0, a.jsx)(T.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: D,
                                    initialItemCount: D,
                                    onGetDataByPage: w,
                                    pageSize: L.cM,
                                    totalRequests: o.requestsCount,
                                    listClassName: H().content,
                                    itemClassName: H().item,
                                    handleRef: k,
                                    context: { listAriaLabel: R({ id: 'mixes.albums-list' }, { genreName: o.fullTitle || '' }) },
                                    isMobileLayout: P,
                                    useWindowScroll: P,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var V = r(23976),
                X = r(95772);
            let z = () => {
                    let e = (0, g.W)(),
                        { formatMessage: t } = (0, s.A)(),
                        r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                    return (0, a.jsx)(p.h, {
                        scrollElement: null,
                        children: (0, a.jsxs)('div', {
                            className: H().root,
                            children: [
                                (0, a.jsx)(A.Y, {
                                    variant: A.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, a.jsx)(V.W, { className: H().shimmerTitle, radius: 'l' }),
                                }),
                                (0, a.jsx)('div', {
                                    className: (0, n.$)(H().scrollContainer, H().important, H().shimmerScrollContainer),
                                    children: (0, a.jsx)('div', {
                                        className: H().content,
                                        children: (0, a.jsx)(X.e, { isActive: !0, itemClassName: H().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                B = () => {
                    let e = (0, l.useSearchParams)().get('metatagId');
                    return (e || (0, l.notFound)(), (0, a.jsx)(i.Suspense, { fallback: (0, a.jsx)(z, {}), children: (0, a.jsx)(U, { metatagId: e }) }));
                };
        },
        73807: (e) => {
            e.exports = {
                root: 'GenreAlbumsPage_root__r_Sts',
                scrollContainer: 'GenreAlbumsPage_scrollContainer__K_v_b',
                important: 'GenreAlbumsPage_important__r3P2T',
                shimmerScrollContainer: 'GenreAlbumsPage_shimmerScrollContainer__IpQeU',
                footer: 'GenreAlbumsPage_footer__vmCiR',
                item: 'GenreAlbumsPage_item__zRzB0',
                content: 'GenreAlbumsPage_content__PRJUm',
                shimmerTitle: 'GenreAlbumsPage_shimmerTitle__UW_D5',
            };
        },
        75568: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var a = r(47127),
                l = r(61399);
            let i = (e) => {
                var t, r, i, n, o;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, l.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, l.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (r = e.counts) ? void 0 : r.albums) || 0,
                              alsoAlbums: (null == (i = e.counts) ? void 0 : i.compilations) || 0,
                              tracks: (null == (n = e.counts) ? void 0 : n.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var a = r(36484),
                l = r(62562);
            let i = () => (0, l.N)().get(a.Zf);
        },
        88720: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => l });
            var a = r(75568);
            let l = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let r = (null == (t = e.artists) ? void 0 : t.map((e) => (0, a.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: r,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        90242: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 72590));
        },
        94540: (e, t, r) => {
            'use strict';
            r.d(t, { El: () => o, I7: () => s, K$: () => n, cM: () => c, fZ: () => l, tA: () => i, vX: () => a, xi: () => u });
            let a = 16,
                l = 16,
                i = 315,
                n = 170,
                o = 270,
                s = 7,
                u = 30,
                c = 30;
        },
        95772: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            var a = r(25839),
                l = r(19412);
            let i = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: i,
                    centered: n,
                    withInfo: o,
                    count: s = 10,
                    shimmerClassName: u,
                    linesCount: c,
                    'aria-label': m,
                    withSubcover: d,
                } = e;
                return Array.from(Array(s).keys()).map((e) =>
                    (0, a.jsx)(
                        l.V,
                        { isActive: t, linesCount: c, className: r, round: i, centered: n, withInfo: o, withSubcover: d, 'aria-label': m, shimmerClassName: u },
                        e,
                    ),
                );
            };
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => A });
            var a = r(25839),
                l = r(82298),
                i = r(88204),
                n = r(39004),
                o = r(93588),
                s = r(43354),
                u = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let c = (e, t, r) => {
                    switch (e) {
                        case u.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case u.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case u.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case u.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case u.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case u.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case u.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                m = (e) => {
                    let { formatMessage: t, language: r, tld: a, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: u.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(u.YANDEX, a, r) },
                        yandexProjects: { id: u.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(u.YANDEX_PROJECTS, a, r) },
                    };
                };
            var d = r(10959),
                p = r(89514);
            let f = (e) => e(new Date(), (0, p.m)());
            var _ = r(96433),
                g = r(27954),
                h = r(400),
                v = r.n(h),
                y = r(61493),
                E = r(4254),
                N = r(97522);
            let b = (e) => {
                    let { className: t, data: r } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(v().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, a.jsx)(N.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, l.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(N.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                x = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, a.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: v().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: l } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, a.jsx)(N.N, { target: '_blank', href: l, className: v().link, 'data-test-id': y.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                I = (e) => {
                    let { className: t, data: r } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, l.$)(v().root, v().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, a.jsx)(x, { links: r.links, disclaimer: r.disclaimer }), (0, a.jsx)(b, { data: r.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, g.g)(),
                    { formatDate: l, formatMessage: i } = (0, n.A)(),
                    { language: o } = (0, _.h)(),
                    s = m({ formatMessage: i, language: o, tld: r.tld, year: f(l) });
                return (0, a.jsx)(b, { className: t, data: s });
            });
            let A = (0, i.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: i, location: p, user: h } = (0, g.g)(),
                    { formatDate: y, formatMessage: E } = (0, n.A)(),
                    { isEnabled: N } = null != (t = (0, s.P)()) ? t : {},
                    { language: b } = (0, _.h)(),
                    x = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: a, language: l, tld: i, userRegion: n, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: a, language: l, userRegion: i } = e,
                                    n = { id: u.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(u.COPYRIGHT_HOLDER, a, l) },
                                    o = { id: u.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(u.PRIVACY_POLICY, a, l) },
                                    s = { id: u.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(u.AGREEMENT, a, l) },
                                    m = { id: u.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(u.RECOMMENDATION_RULES, a, l) },
                                    d = { id: u.HELP, title: t({ id: 'footer.links-help' }), url: c(u.HELP, a, l) },
                                    p = [n, s, m];
                                return (r && 'ru' === i && p.push(o), p.push(d), p);
                            })({ formatMessage: r, isWebApplication: a, language: l, tld: i, userRegion: n }),
                            disclaimer: (0, d.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: m({ formatMessage: r, language: l, tld: i, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: E,
                        isWebApplication: o.$3,
                        tld: p.tld,
                        language: b,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: f(y),
                    });
                return (0, a.jsx)(I, { className: (0, l.$)({ [v().root_withOffsetForDeeplink]: N }, r), data: x });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7055, 7339, 740, 6287, 2121, 3472, 2767, 3112, 9716, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 3257, 2038,
                4163, 3246, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 6361, 5898, 5382, 4475, 5056, 7358,
            ],
            () => e((e.s = 90242)),
        ),
            (_N_E = e.O()));
    },
]);
