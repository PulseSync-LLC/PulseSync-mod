(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4368, 5097, 9550],
    {
        9939: (e, r, n) => {
            'use strict';
            n.d(r, { M: () => o.NotFound });
            var o = n(91455);
        },
        10076: (e, r, n) => {
            'use strict';
            Object.defineProperty(r, '__esModule', { value: !0 }),
                Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    get: function () {
                        return t;
                    },
                });
            let o = n(36283)._(n(23772));
            function t(e, r) {
                var n;
                let t = {};
                'function' == typeof e && (t.loader = e);
                let i = { ...t, ...r };
                return (0, o.default)({ ...i, modules: null == (n = i.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
                void 0 === r.default.__esModule &&
                (Object.defineProperty(r.default, '__esModule', { value: !0 }), Object.assign(r.default, r), (e.exports = r.default));
        },
        23772: (e, r, n) => {
            'use strict';
            Object.defineProperty(r, '__esModule', { value: !0 }),
                Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let o = n(62936),
                t = n(44020),
                i = n(24571);
            function s(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(46950);
            let l = { loader: () => Promise.resolve(s(() => null)), loading: null, ssr: !0 },
                a = function (e) {
                    let r = { ...l, ...e },
                        n = (0, t.lazy)(() => r.loader().then(s)),
                        a = r.loading;
                    function m(e) {
                        let s = a ? (0, o.jsx)(a, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            l = !r.ssr || !!r.loading,
                            m = l ? t.Suspense : t.Fragment,
                            d = r.ssr
                                ? (0, o.jsxs)(o.Fragment, { children: [null, (0, o.jsx)(n, { ...e })] })
                                : (0, o.jsx)(i.BailoutToCSR, { reason: 'next/dynamic', children: (0, o.jsx)(n, { ...e }) });
                        return (0, o.jsx)(m, { ...(l ? { fallback: s } : {}), children: d });
                    }
                    return (m.displayName = 'LoadableComponent'), m;
                };
        },
        29550: (e, r, n) => {
            'use strict';
            n.d(r, { A: () => $ });
            var o = n(62986),
                t = n(35386),
                i = n(44020),
                s = n(85488),
                l = n(8779),
                a = n(12109),
                m = n(26649);
            function d(e, r) {
                return Object.keys(e).reduce(function (n, t) {
                    return (n[t] = (0, o.__assign)({ timeZone: r }, e[t])), n;
                }, {});
            }
            function v(e, r) {
                return Object.keys((0, o.__assign)((0, o.__assign)({}, e), r)).reduce(function (n, t) {
                    return (n[t] = (0, o.__assign)((0, o.__assign)({}, e[t] || {}), r[t] || {})), n;
                }, {});
            }
            function h(e, r) {
                if (!r) return e;
                var n = a.S.formats;
                return (0, o.__assign)((0, o.__assign)((0, o.__assign)({}, n), e), {
                    date: v(d(n.date, r), d(e.date || {}, r)),
                    time: v(d(n.time, r), d(e.time || {}, r)),
                });
            }
            var b = function (e, r, n, i, s) {
                    var a = e.locale,
                        d = e.formats,
                        v = e.messages,
                        b = e.defaultLocale,
                        P = e.defaultFormats,
                        u = e.fallbackOnEmptyString,
                        c = e.onError,
                        f = e.timeZone,
                        g = e.defaultRichTextElements;
                    void 0 === n && (n = { id: '' });
                    var p = n.id,
                        _ = n.defaultMessage;
                    (0, t.V1)(
                        !!p,
                        '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue',
                    );
                    var y = String(p),
                        F = v && Object.prototype.hasOwnProperty.call(v, y) && v[y];
                    if (Array.isArray(F) && 1 === F.length && F[0].type === l.TYPE.literal) return F[0].value;
                    if (!i && F && 'string' == typeof F && !g) return F.replace(/'\{(.*?)\}'/gi, '{$1}');
                    if (((i = (0, o.__assign)((0, o.__assign)({}, g), i || {})), (d = h(d, f)), (P = h(P, f)), !F)) {
                        if (!1 === u && '' === F) return F;
                        if (((!_ || (a && a.toLowerCase() !== b.toLowerCase())) && c(new m.sb(n, a)), _))
                            try {
                                var E = r.getMessageFormat(_, b, P, s);
                                return E.format(i);
                            } catch (e) {
                                return (
                                    c(new m.Ho('Error formatting default message for: "'.concat(y, '", rendering default message verbatim'), a, n, e)),
                                    'string' == typeof _ ? _ : y
                                );
                            }
                        return y;
                    }
                    try {
                        var E = r.getMessageFormat(F, a, d, (0, o.__assign)({ formatters: r }, s || {}));
                        return E.format(i);
                    } catch (e) {
                        c(new m.Ho('Error formatting message: "'.concat(y, '", using ').concat(_ ? 'default message' : 'id', ' as fallback.'), a, n, e));
                    }
                    if (_)
                        try {
                            var E = r.getMessageFormat(_, b, P, s);
                            return E.format(i);
                        } catch (e) {
                            c(new m.Ho('Error formatting the default message for: "'.concat(y, '", rendering message verbatim'), a, n, e));
                        }
                    return 'string' == typeof F ? F : 'string' == typeof _ ? _ : y;
                },
                P = [
                    'formatMatcher',
                    'timeZone',
                    'hour12',
                    'weekday',
                    'era',
                    'year',
                    'month',
                    'day',
                    'hour',
                    'minute',
                    'second',
                    'timeZoneName',
                    'hourCycle',
                    'dateStyle',
                    'timeStyle',
                    'calendar',
                    'numberingSystem',
                    'fractionalSecondDigits',
                ];
            function u(e, r, n, i) {
                var s = e.locale,
                    l = e.formats,
                    a = e.onError,
                    m = e.timeZone;
                void 0 === i && (i = {});
                var d = i.format,
                    v = (0, o.__assign)((0, o.__assign)({}, m && { timeZone: m }), d && (0, t.F3)(l, r, d, a)),
                    h = (0, t.J9)(i, P, v);
                return (
                    'time' !== r ||
                        h.hour ||
                        h.minute ||
                        h.second ||
                        h.timeStyle ||
                        h.dateStyle ||
                        (h = (0, o.__assign)((0, o.__assign)({}, h), { hour: 'numeric', minute: 'numeric' })),
                    n(s, h)
                );
            }
            function c(e, r) {
                for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
                var t = n[0],
                    i = n[1],
                    s = 'string' == typeof t ? new Date(t || 0) : t;
                try {
                    return u(e, 'date', r, void 0 === i ? {} : i).format(s);
                } catch (r) {
                    e.onError(new m.pg('Error formatting date.', e.locale, r));
                }
                return String(s);
            }
            function f(e, r) {
                for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
                var t = n[0],
                    i = n[1],
                    s = 'string' == typeof t ? new Date(t || 0) : t;
                try {
                    return u(e, 'time', r, void 0 === i ? {} : i).format(s);
                } catch (r) {
                    e.onError(new m.pg('Error formatting time.', e.locale, r));
                }
                return String(s);
            }
            function g(e, r) {
                for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
                var t = n[0],
                    i = n[1],
                    s = n[2],
                    l = 'string' == typeof t ? new Date(t || 0) : t,
                    a = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return u(e, 'dateTimeRange', r, void 0 === s ? {} : s).formatRange(l, a);
                } catch (r) {
                    e.onError(new m.pg('Error formatting date time range.', e.locale, r));
                }
                return String(l);
            }
            function p(e, r) {
                for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
                var t = n[0],
                    i = n[1],
                    s = 'string' == typeof t ? new Date(t || 0) : t;
                try {
                    return u(e, 'date', r, void 0 === i ? {} : i).formatToParts(s);
                } catch (r) {
                    e.onError(new m.pg('Error formatting date.', e.locale, r));
                }
                return [];
            }
            function _(e, r) {
                for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
                var t = n[0],
                    i = n[1],
                    s = 'string' == typeof t ? new Date(t || 0) : t;
                try {
                    return u(e, 'time', r, void 0 === i ? {} : i).formatToParts(s);
                } catch (r) {
                    e.onError(new m.pg('Error formatting time.', e.locale, r));
                }
                return [];
            }
            var y = n(18736),
                F = ['style', 'type', 'fallback', 'languageDisplay'];
            function E(e, r, n, o) {
                var i = e.locale,
                    s = e.onError;
                Intl.DisplayNames ||
                    s(
                        new y.IF(
                            'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
                            y.O4.MISSING_INTL_API,
                        ),
                    );
                var l = (0, t.J9)(o, F);
                try {
                    return r(i, l).of(n);
                } catch (e) {
                    s(new m.pg('Error formatting display name.', i, e));
                }
            }
            var N = ['type', 'style'],
                T = Date.now();
            function w(e, r, n, o) {
                void 0 === o && (o = {});
                var t = x(e, r, n, o).reduce(function (e, r) {
                    var n = r.value;
                    return 'string' != typeof n ? e.push(n) : 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += n) : e.push(n), e;
                }, []);
                return 1 === t.length ? t[0] : 0 === t.length ? '' : t;
            }
            function x(e, r, n, i) {
                var s = e.locale,
                    l = e.onError;
                void 0 === i && (i = {}),
                    Intl.ListFormat ||
                        l(
                            new y.IF(
                                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                                y.O4.MISSING_INTL_API,
                            ),
                        );
                var a = (0, t.J9)(i, N);
                try {
                    var d = {},
                        v = n.map(function (e, r) {
                            if ('object' == typeof e) {
                                var n = ''.concat(T, '_').concat(r, '_').concat(T);
                                return (d[n] = e), n;
                            }
                            return String(e);
                        });
                    return r(s, a)
                        .formatToParts(v)
                        .map(function (e) {
                            return 'literal' === e.type ? e : (0, o.__assign)((0, o.__assign)({}, e), { value: d[e.value] || e.value });
                        });
                } catch (e) {
                    l(new m.pg('Error formatting list.', s, e));
                }
                return n;
            }
            var j = [
                'style',
                'currency',
                'unit',
                'unitDisplay',
                'useGrouping',
                'minimumIntegerDigits',
                'minimumFractionDigits',
                'maximumFractionDigits',
                'minimumSignificantDigits',
                'maximumSignificantDigits',
                'compactDisplay',
                'currencyDisplay',
                'currencySign',
                'notation',
                'signDisplay',
                'unit',
                'unitDisplay',
                'numberingSystem',
                'trailingZeroDisplay',
                'roundingPriority',
                'roundingIncrement',
                'roundingMode',
            ];
            function S(e, r, n) {
                var o = e.locale,
                    i = e.formats,
                    s = e.onError;
                void 0 === n && (n = {});
                var l = n.format,
                    a = (l && (0, t.F3)(i, 'number', l, s)) || {};
                return r(o, (0, t.J9)(n, j, a));
            }
            function D(e, r, n, o) {
                void 0 === o && (o = {});
                try {
                    return S(e, r, o).format(n);
                } catch (r) {
                    e.onError(new m.pg('Error formatting number.', e.locale, r));
                }
                return String(n);
            }
            function I(e, r, n, o) {
                void 0 === o && (o = {});
                try {
                    return S(e, r, o).formatToParts(n);
                } catch (r) {
                    e.onError(new m.pg('Error formatting number.', e.locale, r));
                }
                return [];
            }
            var k = ['type'];
            function L(e, r, n, o) {
                var i = e.locale,
                    s = e.onError;
                void 0 === o && (o = {}),
                    Intl.PluralRules ||
                        s(
                            new y.IF(
                                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                y.O4.MISSING_INTL_API,
                            ),
                        );
                var l = (0, t.J9)(o, k);
                try {
                    return r(i, l).select(n);
                } catch (e) {
                    s(new m.pg('Error formatting plural.', i, e));
                }
                return 'other';
            }
            var M = ['numeric', 'style'];
            function O(e, r, n, o, i) {
                void 0 === i && (i = {}),
                    o || (o = 'second'),
                    Intl.RelativeTimeFormat ||
                        e.onError(
                            new y.IF(
                                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                                y.O4.MISSING_INTL_API,
                            ),
                        );
                try {
                    var s, l, a, d, v, h;
                    return ((s = i),
                    (l = e.locale),
                    (a = e.formats),
                    (d = e.onError),
                    void 0 === s && (s = {}),
                    (h = (!!(v = s.format) && (0, t.F3)(a, 'relative', v, d)) || {}),
                    r(l, (0, t.J9)(s, M, h))).format(n, o);
                } catch (r) {
                    e.onError(new m.pg('Error formatting relative time.', e.locale, r));
                }
                return String(n);
            }
            var R = n(70861);
            function C(e) {
                return e
                    ? Object.keys(e).reduce(function (r, n) {
                          var o = e[n];
                          return (r[n] = (0, R.RK)(o) ? (0, s.yU)(o) : o), r;
                      }, {})
                    : e;
            }
            var A = function (e, r, n, t) {
                    for (var i = [], l = 4; l < arguments.length; l++) i[l - 4] = arguments[l];
                    var a = C(t),
                        m = b.apply(void 0, (0, o.__spreadArray)([e, r, n, a], i, !1));
                    return Array.isArray(m) ? (0, s.SP)(m) : m;
                },
                Z = function (e, r) {
                    var n,
                        i,
                        l,
                        a,
                        d,
                        v,
                        h,
                        P = e.defaultRichTextElements,
                        u = (0, o.__rest)(e, ['defaultRichTextElements']),
                        y = C(P),
                        F =
                            ((n = (0, o.__assign)((0, o.__assign)((0, o.__assign)({}, s.JF), u), { defaultRichTextElements: y })),
                            (i = (0, t.GT)(r)),
                            (a = (l = (0, o.__assign)((0, o.__assign)({}, t.JF), n)).locale),
                            (d = l.defaultLocale),
                            (v = l.onError),
                            a
                                ? !Intl.NumberFormat.supportedLocalesOf(a).length && v
                                    ? v(
                                          new m.hr(
                                              'Missing locale data for locale: "'
                                                  .concat(a, '" in Intl.NumberFormat. Using default locale: "')
                                                  .concat(d, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'),
                                          ),
                                      )
                                    : !Intl.DateTimeFormat.supportedLocalesOf(a).length &&
                                      v &&
                                      v(
                                          new m.hr(
                                              'Missing locale data for locale: "'
                                                  .concat(a, '" in Intl.DateTimeFormat. Using default locale: "')
                                                  .concat(d, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'),
                                          ),
                                      )
                                : (v &&
                                      v(
                                          new m.uo(
                                              '"locale" was not configured, using "'.concat(
                                                  d,
                                                  '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details',
                                              ),
                                          ),
                                      ),
                                  (l.locale = l.defaultLocale || 'en')),
                            l.onWarn &&
                                l.defaultRichTextElements &&
                                'string' == typeof (h = l.messages || {})[Object.keys(h)[0]] &&
                                l.onWarn(
                                    '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution',
                                ),
                            (0, o.__assign)((0, o.__assign)({}, l), {
                                formatters: i,
                                formatNumber: D.bind(null, l, i.getNumberFormat),
                                formatNumberToParts: I.bind(null, l, i.getNumberFormat),
                                formatRelativeTime: O.bind(null, l, i.getRelativeTimeFormat),
                                formatDate: c.bind(null, l, i.getDateTimeFormat),
                                formatDateToParts: p.bind(null, l, i.getDateTimeFormat),
                                formatTime: f.bind(null, l, i.getDateTimeFormat),
                                formatDateTimeRange: g.bind(null, l, i.getDateTimeFormat),
                                formatTimeToParts: _.bind(null, l, i.getDateTimeFormat),
                                formatPlural: L.bind(null, l, i.getPluralRules),
                                formatMessage: b.bind(null, l, i),
                                $t: b.bind(null, l, i),
                                formatList: w.bind(null, l, i.getListFormat),
                                formatListToParts: x.bind(null, l, i.getListFormat),
                                formatDisplayName: E.bind(null, l, i.getDisplayNames),
                            })),
                        N = {
                            locale: F.locale,
                            timeZone: F.timeZone,
                            fallbackOnEmptyString: F.fallbackOnEmptyString,
                            formats: F.formats,
                            defaultLocale: F.defaultLocale,
                            defaultFormats: F.defaultFormats,
                            messages: F.messages,
                            onError: F.onError,
                            defaultRichTextElements: y,
                        };
                    return (0, o.__assign)((0, o.__assign)({}, F), { formatMessage: A.bind(null, N, F.formatters), $t: A.bind(null, N, F.formatters) });
                },
                G = n(98842);
            function J(e) {
                return {
                    locale: e.locale,
                    timeZone: e.timeZone,
                    fallbackOnEmptyString: e.fallbackOnEmptyString,
                    formats: e.formats,
                    textComponent: e.textComponent,
                    messages: e.messages,
                    defaultLocale: e.defaultLocale,
                    defaultFormats: e.defaultFormats,
                    onError: e.onError,
                    onWarn: e.onWarn,
                    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
                    defaultRichTextElements: e.defaultRichTextElements,
                };
            }
            let $ = (function (e) {
                function r() {
                    var r = (null !== e && e.apply(this, arguments)) || this;
                    return (r.cache = (0, t.MT)()), (r.state = { cache: r.cache, intl: Z(J(r.props), r.cache), prevConfig: J(r.props) }), r;
                }
                return (
                    (0, o.__extends)(r, e),
                    (r.getDerivedStateFromProps = function (e, r) {
                        var n = r.prevConfig,
                            o = r.cache,
                            t = J(e);
                        return (0, s.bN)(n, t) ? null : { intl: Z(t, o), prevConfig: t };
                    }),
                    (r.prototype.render = function () {
                        return (0, s.HM)(this.state.intl), i.createElement(G.Kq, { value: this.state.intl }, this.props.children);
                    }),
                    (r.displayName = 'IntlProvider'),
                    (r.defaultProps = s.JF),
                    r
                );
            })(i.PureComponent);
        },
        36179: (e, r, n) => {
            'use strict';
            n.d(r, { XU: () => v });
            var o,
                t,
                i = n(62986),
                s = n(44020),
                l = n(47480);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(o || (o = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(t || (t = {}));
            var a = function (e) {
                var r = (0, l.A)(),
                    n = e.value,
                    o = e.children,
                    t = (0, i.__rest)(e, ['value', 'children']);
                return o(r.formatNumberToParts(n, t));
            };
            function m(e) {
                var r = function (r) {
                    var n = (0, l.A)(),
                        o = r.value,
                        t = r.children,
                        s = (0, i.__rest)(r, ['value', 'children']),
                        a = 'string' == typeof o ? new Date(o || 0) : o;
                    return t('formatDate' === e ? n.formatDateToParts(a, s) : n.formatTimeToParts(a, s));
                };
                return (r.displayName = t[e]), r;
            }
            function d(e) {
                var r = function (r) {
                    var n = (0, l.A)(),
                        o = r.value,
                        t = r.children,
                        a = (0, i.__rest)(r, ['value', 'children']),
                        m = n[e](o, a);
                    if ('function' == typeof t) return t(m);
                    var d = n.textComponent || s.Fragment;
                    return s.createElement(d, null, m);
                };
                return (r.displayName = o[e]), r;
            }
            (a.displayName = 'FormattedNumberParts'), (a.displayName = 'FormattedNumberParts');
            var v = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), m('formatDate'), m('formatTime');
        },
        43528: (e, r, n) => {
            'use strict';
            n.d(r, { a: () => t });
            var o = n(43696);
            let t = () => {
                let e = null,
                    r = new o.cJ(!1),
                    n = [];
                return {
                    isLoaded: r,
                    init: (o) => {
                        var t, i;
                        if (void 0 !== (null == (t = window.Ya) ? void 0 : t.Metrika2) && !r.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...o })),
                                    (r.value = !0),
                                    (i = e),
                                    n.forEach((e) => {
                                        e(i);
                                    }),
                                    (n.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                            }
                    },
                    count: function (r) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [o]: r })
                            : n.push((e) => {
                                  e.params({ [o]: r });
                              });
                    },
                    hit: (r) => {
                        e
                            ? e.hit(r)
                            : n.push((e) => {
                                  e.hit(r);
                              });
                    },
                    reachGoal: (r, o) => {
                        if (!e) return void n.push((e) => e.reachGoal(r, o));
                        e.reachGoal(r, o);
                    },
                };
            };
        },
        49351: (e, r, n) => {
            'use strict';
            n.d(r, { default: () => t.a });
            var o = n(10076),
                t = n.n(o);
        },
        51788: (e, r, n) => {
            Promise.resolve().then(n.bind(n, 24571)),
                Promise.resolve().then(n.bind(n, 46950)),
                Promise.resolve().then(n.bind(n, 21153)),
                Promise.resolve().then(n.bind(n, 85742)),
                Promise.resolve().then(n.bind(n, 13030)),
                Promise.resolve().then(n.bind(n, 50576)),
                Promise.resolve().then(n.bind(n, 59260)),
                Promise.resolve().then(n.bind(n, 56721)),
                Promise.resolve().then(n.bind(n, 30388)),
                Promise.resolve().then(n.bind(n, 85023)),
                Promise.resolve().then(n.bind(n, 20418)),
                Promise.resolve().then(n.bind(n, 54802)),
                Promise.resolve().then(n.bind(n, 49283)),
                Promise.resolve().then(n.bind(n, 34705)),
                Promise.resolve().then(n.bind(n, 6814)),
                Promise.resolve().then(n.bind(n, 19448)),
                Promise.resolve().then(n.bind(n, 19404)),
                Promise.resolve().then(n.bind(n, 77778)),
                Promise.resolve().then(n.bind(n, 54368)),
                Promise.resolve().then(n.bind(n, 70036)),
                Promise.resolve().then(n.bind(n, 62967)),
                Promise.resolve().then(n.bind(n, 91738)),
                Promise.resolve().then(n.bind(n, 25467)),
                Promise.resolve().then(n.bind(n, 87740)),
                Promise.resolve().then(n.bind(n, 89457)),
                Promise.resolve().then(n.bind(n, 70892)),
                Promise.resolve().then(n.bind(n, 90031)),
                Promise.resolve().then(n.bind(n, 90339)),
                Promise.resolve().then(n.bind(n, 57297)),
                Promise.resolve().then(n.bind(n, 14848)),
                Promise.resolve().then(n.bind(n, 82447)),
                Promise.resolve().then(n.bind(n, 61387)),
                Promise.resolve().then(n.bind(n, 31011)),
                Promise.resolve().then(n.bind(n, 1624)),
                Promise.resolve().then(n.bind(n, 41338)),
                Promise.resolve().then(n.bind(n, 18460)),
                Promise.resolve().then(n.bind(n, 79078)),
                Promise.resolve().then(n.bind(n, 89774)),
                Promise.resolve().then(n.bind(n, 462)),
                Promise.resolve().then(n.bind(n, 71851)),
                Promise.resolve().then(n.bind(n, 2545)),
                Promise.resolve().then(n.bind(n, 81940)),
                Promise.resolve().then(n.bind(n, 43345)),
                Promise.resolve().then(n.bind(n, 47893)),
                Promise.resolve().then(n.bind(n, 91629)),
                Promise.resolve().then(n.bind(n, 2816)),
                Promise.resolve().then(n.bind(n, 7932)),
                Promise.resolve().then(n.bind(n, 55959)),
                Promise.resolve().then(n.bind(n, 21654)),
                Promise.resolve().then(n.bind(n, 4233)),
                Promise.resolve().then(n.t.bind(n, 80799, 23)),
                Promise.resolve().then(n.t.bind(n, 14877, 23)),
                Promise.resolve().then(n.t.bind(n, 11602, 23)),
                Promise.resolve().then(n.bind(n, 60438)),
                Promise.resolve().then(n.bind(n, 52583)),
                Promise.resolve().then(n.bind(n, 55324)),
                Promise.resolve().then(n.bind(n, 30284)),
                Promise.resolve().then(n.bind(n, 39086)),
                Promise.resolve().then(n.t.bind(n, 52615, 23)),
                Promise.resolve().then(n.bind(n, 94481)),
                Promise.resolve().then(n.bind(n, 51099)),
                Promise.resolve().then(n.bind(n, 28865)),
                Promise.resolve().then(n.bind(n, 28311)),
                Promise.resolve().then(n.bind(n, 65185)),
                Promise.resolve().then(n.bind(n, 87395)),
                Promise.resolve().then(n.bind(n, 74351)),
                Promise.resolve().then(n.bind(n, 55880)),
                Promise.resolve().then(n.bind(n, 79845)),
                Promise.resolve().then(n.bind(n, 51945)),
                Promise.resolve().then(n.bind(n, 14144)),
                Promise.resolve().then(n.bind(n, 34753)),
                Promise.resolve().then(n.bind(n, 34211)),
                Promise.resolve().then(n.bind(n, 63065)),
                Promise.resolve().then(n.bind(n, 31441)),
                Promise.resolve().then(n.bind(n, 37577)),
                Promise.resolve().then(n.bind(n, 9451)),
                Promise.resolve().then(n.bind(n, 64987)),
                Promise.resolve().then(n.bind(n, 77188)),
                Promise.resolve().then(n.bind(n, 50509)),
                Promise.resolve().then(n.bind(n, 16945)),
                Promise.resolve().then(n.bind(n, 11503)),
                Promise.resolve().then(n.bind(n, 60131)),
                Promise.resolve().then(n.bind(n, 3873)),
                Promise.resolve().then(n.bind(n, 41936)),
                Promise.resolve().then(n.bind(n, 32322)),
                Promise.resolve().then(n.bind(n, 69410)),
                Promise.resolve().then(n.bind(n, 80210)),
                Promise.resolve().then(n.bind(n, 91638)),
                Promise.resolve().then(n.bind(n, 86482)),
                Promise.resolve().then(n.bind(n, 70505)),
                Promise.resolve().then(n.bind(n, 67226)),
                Promise.resolve().then(n.bind(n, 85253)),
                Promise.resolve().then(n.bind(n, 21895)),
                Promise.resolve().then(n.bind(n, 67939)),
                Promise.resolve().then(n.bind(n, 78533)),
                Promise.resolve().then(n.bind(n, 50823)),
                Promise.resolve().then(n.bind(n, 56159)),
                Promise.resolve().then(n.bind(n, 33801)),
                Promise.resolve().then(n.bind(n, 79438)),
                Promise.resolve().then(n.bind(n, 28751)),
                Promise.resolve().then(n.bind(n, 91441)),
                Promise.resolve().then(n.bind(n, 75481)),
                Promise.resolve().then(n.bind(n, 69546)),
                Promise.resolve().then(n.bind(n, 52625)),
                Promise.resolve().then(n.bind(n, 75502)),
                Promise.resolve().then(n.bind(n, 96072)),
                Promise.resolve().then(n.bind(n, 88634)),
                Promise.resolve().then(n.bind(n, 76807)),
                Promise.resolve().then(n.bind(n, 10945)),
                Promise.resolve().then(n.bind(n, 85845)),
                Promise.resolve().then(n.bind(n, 31899)),
                Promise.resolve().then(n.bind(n, 15545)),
                Promise.resolve().then(n.bind(n, 51089)),
                Promise.resolve().then(n.bind(n, 29025)),
                Promise.resolve().then(n.bind(n, 21897)),
                Promise.resolve().then(n.bind(n, 18037)),
                Promise.resolve().then(n.bind(n, 88913)),
                Promise.resolve().then(n.t.bind(n, 18843, 23)),
                Promise.resolve().then(n.bind(n, 15589)),
                Promise.resolve().then(n.bind(n, 93469)),
                Promise.resolve().then(n.bind(n, 30948)),
                Promise.resolve().then(n.bind(n, 95565)),
                Promise.resolve().then(n.bind(n, 9066)),
                Promise.resolve().then(n.bind(n, 88587)),
                Promise.resolve().then(n.bind(n, 20433)),
                Promise.resolve().then(n.bind(n, 35736)),
                Promise.resolve().then(n.bind(n, 87030)),
                Promise.resolve().then(n.bind(n, 91118)),
                Promise.resolve().then(n.bind(n, 25139)),
                Promise.resolve().then(n.bind(n, 27371)),
                Promise.resolve().then(n.bind(n, 14413)),
                Promise.resolve().then(n.bind(n, 63150)),
                Promise.resolve().then(n.bind(n, 45060)),
                Promise.resolve().then(n.bind(n, 32961)),
                Promise.resolve().then(n.bind(n, 25025)),
                Promise.resolve().then(n.bind(n, 98065)),
                Promise.resolve().then(n.bind(n, 84038)),
                Promise.resolve().then(n.bind(n, 65471)),
                Promise.resolve().then(n.bind(n, 47286)),
                Promise.resolve().then(n.bind(n, 70977)),
                Promise.resolve().then(n.bind(n, 27917)),
                Promise.resolve().then(n.bind(n, 58480)),
                Promise.resolve().then(n.bind(n, 60415)),
                Promise.resolve().then(n.bind(n, 63019)),
                Promise.resolve().then(n.bind(n, 22228)),
                Promise.resolve().then(n.bind(n, 37284)),
                Promise.resolve().then(n.bind(n, 7124)),
                Promise.resolve().then(n.bind(n, 93883)),
                Promise.resolve().then(n.bind(n, 60472)),
                Promise.resolve().then(n.bind(n, 91092)),
                Promise.resolve().then(n.bind(n, 36550)),
                Promise.resolve().then(n.bind(n, 12435)),
                Promise.resolve().then(n.bind(n, 1170)),
                Promise.resolve().then(n.bind(n, 98636)),
                Promise.resolve().then(n.bind(n, 96780)),
                Promise.resolve().then(n.bind(n, 47665)),
                Promise.resolve().then(n.bind(n, 34722)),
                Promise.resolve().then(n.bind(n, 23339)),
                Promise.resolve().then(n.bind(n, 76411)),
                Promise.resolve().then(n.bind(n, 55475)),
                Promise.resolve().then(n.bind(n, 23740)),
                Promise.resolve().then(n.bind(n, 2947)),
                Promise.resolve().then(n.bind(n, 92647)),
                Promise.resolve().then(n.bind(n, 35141)),
                Promise.resolve().then(n.bind(n, 68089)),
                Promise.resolve().then(n.bind(n, 23959)),
                Promise.resolve().then(n.bind(n, 41664)),
                Promise.resolve().then(n.bind(n, 81153)),
                Promise.resolve().then(n.bind(n, 25986)),
                Promise.resolve().then(n.bind(n, 81550)),
                Promise.resolve().then(n.bind(n, 60060)),
                Promise.resolve().then(n.bind(n, 90474)),
                Promise.resolve().then(n.bind(n, 28224)),
                Promise.resolve().then(n.bind(n, 47476)),
                Promise.resolve().then(n.bind(n, 72490)),
                Promise.resolve().then(n.bind(n, 46610)),
                Promise.resolve().then(n.bind(n, 94254)),
                Promise.resolve().then(n.bind(n, 71868)),
                Promise.resolve().then(n.bind(n, 42571)),
                Promise.resolve().then(n.bind(n, 35434)),
                Promise.resolve().then(n.bind(n, 18488)),
                Promise.resolve().then(n.bind(n, 46534)),
                Promise.resolve().then(n.bind(n, 99628)),
                Promise.resolve().then(n.bind(n, 70900)),
                Promise.resolve().then(n.bind(n, 11182)),
                Promise.resolve().then(n.bind(n, 95368)),
                Promise.resolve().then(n.bind(n, 12331)),
                Promise.resolve().then(n.bind(n, 52589)),
                Promise.resolve().then(n.bind(n, 83132)),
                Promise.resolve().then(n.bind(n, 7670)),
                Promise.resolve().then(n.bind(n, 395)),
                Promise.resolve().then(n.bind(n, 83543)),
                Promise.resolve().then(n.bind(n, 99303)),
                Promise.resolve().then(n.bind(n, 45648)),
                Promise.resolve().then(n.bind(n, 35042)),
                Promise.resolve().then(n.bind(n, 94311)),
                Promise.resolve().then(n.bind(n, 46650)),
                Promise.resolve().then(n.bind(n, 33405)),
                Promise.resolve().then(n.bind(n, 32101)),
                Promise.resolve().then(n.bind(n, 63329)),
                Promise.resolve().then(n.bind(n, 941)),
                Promise.resolve().then(n.bind(n, 58991)),
                Promise.resolve().then(n.bind(n, 42297)),
                Promise.resolve().then(n.bind(n, 7551)),
                Promise.resolve().then(n.bind(n, 75695)),
                Promise.resolve().then(n.bind(n, 42323)),
                Promise.resolve().then(n.bind(n, 91135)),
                Promise.resolve().then(n.bind(n, 14878)),
                Promise.resolve().then(n.bind(n, 26467)),
                Promise.resolve().then(n.bind(n, 41970)),
                Promise.resolve().then(n.bind(n, 16847)),
                Promise.resolve().then(n.bind(n, 78780)),
                Promise.resolve().then(n.bind(n, 16782)),
                Promise.resolve().then(n.bind(n, 77966)),
                Promise.resolve().then(n.bind(n, 31148)),
                Promise.resolve().then(n.bind(n, 76532)),
                Promise.resolve().then(n.bind(n, 38076)),
                Promise.resolve().then(n.bind(n, 94158)),
                Promise.resolve().then(n.bind(n, 14124)),
                Promise.resolve().then(n.bind(n, 86100)),
                Promise.resolve().then(n.bind(n, 59736)),
                Promise.resolve().then(n.bind(n, 20532)),
                Promise.resolve().then(n.bind(n, 80222)),
                Promise.resolve().then(n.bind(n, 93148)),
                Promise.resolve().then(n.bind(n, 43898)),
                Promise.resolve().then(n.bind(n, 23164)),
                Promise.resolve().then(n.bind(n, 71637)),
                Promise.resolve().then(n.bind(n, 87894)),
                Promise.resolve().then(n.bind(n, 72964)),
                Promise.resolve().then(n.bind(n, 2760)),
                Promise.resolve().then(n.bind(n, 31927)),
                Promise.resolve().then(n.bind(n, 97248)),
                Promise.resolve().then(n.bind(n, 57612)),
                Promise.resolve().then(n.bind(n, 5670)),
                Promise.resolve().then(n.bind(n, 70915)),
                Promise.resolve().then(n.bind(n, 8148)),
                Promise.resolve().then(n.bind(n, 32634)),
                Promise.resolve().then(n.bind(n, 508)),
                Promise.resolve().then(n.bind(n, 36363)),
                Promise.resolve().then(n.bind(n, 15958)),
                Promise.resolve().then(n.bind(n, 78685)),
                Promise.resolve().then(n.bind(n, 34476)),
                Promise.resolve().then(n.bind(n, 60917)),
                Promise.resolve().then(n.bind(n, 62520)),
                Promise.resolve().then(n.bind(n, 21389)),
                Promise.resolve().then(n.bind(n, 85546)),
                Promise.resolve().then(n.bind(n, 80185)),
                Promise.resolve().then(n.bind(n, 38285)),
                Promise.resolve().then(n.bind(n, 792)),
                Promise.resolve().then(n.bind(n, 34291)),
                Promise.resolve().then(n.bind(n, 31299)),
                Promise.resolve().then(n.bind(n, 56209)),
                Promise.resolve().then(n.bind(n, 44162)),
                Promise.resolve().then(n.bind(n, 93427)),
                Promise.resolve().then(n.bind(n, 57861)),
                Promise.resolve().then(n.bind(n, 30615)),
                Promise.resolve().then(n.bind(n, 34990)),
                Promise.resolve().then(n.bind(n, 16395)),
                Promise.resolve().then(n.bind(n, 75020)),
                Promise.resolve().then(n.bind(n, 32746)),
                Promise.resolve().then(n.bind(n, 2552)),
                Promise.resolve().then(n.bind(n, 7323)),
                Promise.resolve().then(n.bind(n, 68270)),
                Promise.resolve().then(n.bind(n, 99525)),
                Promise.resolve().then(n.bind(n, 44276)),
                Promise.resolve().then(n.bind(n, 49452)),
                Promise.resolve().then(n.bind(n, 68834)),
                Promise.resolve().then(n.bind(n, 67484)),
                Promise.resolve().then(n.bind(n, 6987)),
                Promise.resolve().then(n.bind(n, 748)),
                Promise.resolve().then(n.bind(n, 94756)),
                Promise.resolve().then(n.bind(n, 5798)),
                Promise.resolve().then(n.bind(n, 44817)),
                Promise.resolve().then(n.bind(n, 6181)),
                Promise.resolve().then(n.bind(n, 40846)),
                Promise.resolve().then(n.bind(n, 43762)),
                Promise.resolve().then(n.bind(n, 12364)),
                Promise.resolve().then(n.bind(n, 13660)),
                Promise.resolve().then(n.bind(n, 31543)),
                Promise.resolve().then(n.bind(n, 38224)),
                Promise.resolve().then(n.bind(n, 63210)),
                Promise.resolve().then(n.bind(n, 44697)),
                Promise.resolve().then(n.bind(n, 64802)),
                Promise.resolve().then(n.bind(n, 1443)),
                Promise.resolve().then(n.bind(n, 95297)),
                Promise.resolve().then(n.bind(n, 4552)),
                Promise.resolve().then(n.bind(n, 92648)),
                Promise.resolve().then(n.bind(n, 73572)),
                Promise.resolve().then(n.bind(n, 29992)),
                Promise.resolve().then(n.bind(n, 66230)),
                Promise.resolve().then(n.bind(n, 18611)),
                Promise.resolve().then(n.bind(n, 36082)),
                Promise.resolve().then(n.bind(n, 42398)),
                Promise.resolve().then(n.bind(n, 21155)),
                Promise.resolve().then(n.bind(n, 44161)),
                Promise.resolve().then(n.bind(n, 38317)),
                Promise.resolve().then(n.bind(n, 22883)),
                Promise.resolve().then(n.bind(n, 59790)),
                Promise.resolve().then(n.bind(n, 47933)),
                Promise.resolve().then(n.bind(n, 88586)),
                Promise.resolve().then(n.bind(n, 34414)),
                Promise.resolve().then(n.bind(n, 41855)),
                Promise.resolve().then(n.bind(n, 10668)),
                Promise.resolve().then(n.bind(n, 51969)),
                Promise.resolve().then(n.bind(n, 93319)),
                Promise.resolve().then(n.bind(n, 6644)),
                Promise.resolve().then(n.bind(n, 73416)),
                Promise.resolve().then(n.bind(n, 6043)),
                Promise.resolve().then(n.bind(n, 98216)),
                Promise.resolve().then(n.bind(n, 68808)),
                Promise.resolve().then(n.bind(n, 94584)),
                Promise.resolve().then(n.bind(n, 77272)),
                Promise.resolve().then(n.bind(n, 20908)),
                Promise.resolve().then(n.bind(n, 26216)),
                Promise.resolve().then(n.bind(n, 62440)),
                Promise.resolve().then(n.bind(n, 99270)),
                Promise.resolve().then(n.bind(n, 55046)),
                Promise.resolve().then(n.bind(n, 32856)),
                Promise.resolve().then(n.bind(n, 2726)),
                Promise.resolve().then(n.bind(n, 75690)),
                Promise.resolve().then(n.bind(n, 39695)),
                Promise.resolve().then(n.bind(n, 84929)),
                Promise.resolve().then(n.bind(n, 24301)),
                Promise.resolve().then(n.bind(n, 21485)),
                Promise.resolve().then(n.bind(n, 25992)),
                Promise.resolve().then(n.bind(n, 51692)),
                Promise.resolve().then(n.bind(n, 79374)),
                Promise.resolve().then(n.bind(n, 13514)),
                Promise.resolve().then(n.bind(n, 99974)),
                Promise.resolve().then(n.bind(n, 42260)),
                Promise.resolve().then(n.bind(n, 72866)),
                Promise.resolve().then(n.bind(n, 81338)),
                Promise.resolve().then(n.bind(n, 82630)),
                Promise.resolve().then(n.bind(n, 49058)),
                Promise.resolve().then(n.bind(n, 39857)),
                Promise.resolve().then(n.bind(n, 48167)),
                Promise.resolve().then(n.bind(n, 40461)),
                Promise.resolve().then(n.bind(n, 59884)),
                Promise.resolve().then(n.bind(n, 73144)),
                Promise.resolve().then(n.bind(n, 66458)),
                Promise.resolve().then(n.bind(n, 77286)),
                Promise.resolve().then(n.bind(n, 53431)),
                Promise.resolve().then(n.bind(n, 22605)),
                Promise.resolve().then(n.bind(n, 94714)),
                Promise.resolve().then(n.bind(n, 90479)),
                Promise.resolve().then(n.bind(n, 64697)),
                Promise.resolve().then(n.bind(n, 5356)),
                Promise.resolve().then(n.bind(n, 6374)),
                Promise.resolve().then(n.bind(n, 39260)),
                Promise.resolve().then(n.bind(n, 68816)),
                Promise.resolve().then(n.bind(n, 20372)),
                Promise.resolve().then(n.bind(n, 85208)),
                Promise.resolve().then(n.bind(n, 95296)),
                Promise.resolve().then(n.bind(n, 78029)),
                Promise.resolve().then(n.bind(n, 6063)),
                Promise.resolve().then(n.bind(n, 14876)),
                Promise.resolve().then(n.bind(n, 86216)),
                Promise.resolve().then(n.bind(n, 18744)),
                Promise.resolve().then(n.bind(n, 32438)),
                Promise.resolve().then(n.bind(n, 18792)),
                Promise.resolve().then(n.bind(n, 84520)),
                Promise.resolve().then(n.bind(n, 85816)),
                Promise.resolve().then(n.bind(n, 71193)),
                Promise.resolve().then(n.bind(n, 37934)),
                Promise.resolve().then(n.bind(n, 92852)),
                Promise.resolve().then(n.bind(n, 34740)),
                Promise.resolve().then(n.bind(n, 83373)),
                Promise.resolve().then(n.bind(n, 9322)),
                Promise.resolve().then(n.bind(n, 25641)),
                Promise.resolve().then(n.bind(n, 96579)),
                Promise.resolve().then(n.bind(n, 17389)),
                Promise.resolve().then(n.bind(n, 41817)),
                Promise.resolve().then(n.bind(n, 87413)),
                Promise.resolve().then(n.bind(n, 40739)),
                Promise.resolve().then(n.t.bind(n, 60738, 23));
        },
        54368: (e, r, n) => {
            'use strict';
            n.r(r), n.d(r, { default: () => h });
            var o = n(62936),
                t = n(79950),
                i = n(44020),
                s = n(4497),
                l = n(32980),
                a = n(42561),
                m = n(81176),
                d = n.n(m),
                v = n(49124);
            let h = (e) => {
                let { children: r } = e,
                    { state: n, toggleTrue: m } = (0, s.e)(!1),
                    { state: h, toggleTrue: b } = (0, s.e)(!1),
                    { getThemeFromStorage: P } = (0, a.QDo)(new l.si()),
                    u = (0, i.useMemo)(() => {
                        var e;
                        return null != (e = P()) ? e : (0, a.VDQ)();
                    }, [P]),
                    c = (0, i.useCallback)(
                        (e) => {
                            let r = v.env.ASSET_PREFIX || '';
                            return ''.concat(r, '/media/splash_screen/splash_screen_').concat(u, '.').concat(e);
                        },
                        [u],
                    ),
                    f = (0, i.useMemo)(() => ({ isVisible: !n }), [n]);
                return (0, o.jsxs)(a.nlO.Provider, {
                    value: f,
                    children: [
                        !n &&
                            (0, o.jsx)('div', {
                                className: (0, t.$)(d().root, d()['root_'.concat(u)], { [d().root_hidden]: h }),
                                onAnimationEnd: m,
                                children: (0, o.jsxs)('video', {
                                    className: d().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: b,
                                    onError: m,
                                    children: [(0, o.jsx)('source', { src: c('webm'), type: 'video/webm' }), (0, o.jsx)('source', { src: c('mp4'), type: 'video/mp4' })],
                                }),
                            }),
                        r,
                    ],
                });
            };
        },
        54802: (e, r, n) => {
            'use strict';
            let o;
            n.d(r, { useMetrika: () => s });
            var t = n(44020),
                i = n(43528);
            let s = () => {
                let e = (o || (o = (0, i.a)()), o),
                    r = (0, t.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, t.useMemo)(() => ({ ...e, isLoaded: r }), [r]);
            };
        },
        57249: (e, r, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        81176: (e) => {
            e.exports = {
                root: 'SplashScreen_root__3jzFk',
                root_dark: 'SplashScreen_root_dark__0OcZj',
                root_light: 'SplashScreen_root_light__XAJTf',
                root_hidden: 'SplashScreen_root_hidden__BO7tp',
                'fade-out': 'SplashScreen_fade-out__uNMY4',
                video: 'SplashScreen_video__wFSy5',
            };
        },
        88933: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        91455: (e, r, n) => {
            'use strict';
            n.d(r, { NotFound: () => u });
            var o = n(62936),
                t = n(79950),
                i = n(19718),
                s = n(26731),
                l = n(5099),
                a = n(85742),
                m = n(20418),
                d = n(42561),
                v = n(85906),
                h = n(44020),
                b = n(88933),
                P = n.n(b);
            let u = (0, i.PA)((e) => {
                let { className: r, title: n, description: i, iconVariant: b = 'musicLogo', iconClassName: u, iconSize: c } = e,
                    { contentRef: f } = (0, d.gKY)(),
                    g = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: p } = (0, d.D5F)(g);
                return (
                    (0, d.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, d.Pjs)();
                        (0, h.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, o.jsxs)('div', {
                        className: (0, t.$)(P().root, { [P().root_desktop]: !f }, r),
                        children: [
                            (0, o.jsx)(v.Lh, { withBackwardFallback: '/', className: P().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: P().content,
                                children: [
                                    (0, o.jsx)(a.Icon, { className: (0, t.$)(P().icon, u), variant: b, size: c }),
                                    (0, o.jsx)(m.Heading, {
                                        className: (0, t.$)(P().title, P().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, o.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(m.Caption, {
                                        className: (0, t.$)(P().text, P().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: i || (0, o.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(l.$, {
                                        onClick: p,
                                        className: P().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(m.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
    },
]);
