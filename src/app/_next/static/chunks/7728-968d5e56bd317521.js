(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7728],
    {
        4698: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    cancelIdleCallback: function () {
                        return n;
                    },
                    requestIdleCallback: function () {
                        return r;
                    },
                }));
            let r =
                    ('undefined' != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
                    function (e) {
                        let t = Date.now();
                        return self.setTimeout(function () {
                            e({
                                didTimeout: !1,
                                timeRemaining: function () {
                                    return Math.max(0, 50 - (Date.now() - t));
                                },
                            });
                        }, 1);
                    },
                n =
                    ('undefined' != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
                    function (e) {
                        return clearTimeout(e);
                    };
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        8487: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => u });
            var n = r(23198),
                i = r(74631),
                a = r(30236),
                s = r(39004);
            function o(e) {
                var t = (0, s.A)(),
                    r = t.formatMessage,
                    n = t.textComponent,
                    a = void 0 === n ? i.Fragment : n,
                    o = e.id,
                    l = e.description,
                    u = e.defaultMessage,
                    c = e.values,
                    d = e.children,
                    h = e.tagName,
                    f = void 0 === h ? a : h,
                    m = r({ id: o, description: l, defaultMessage: u }, c, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(m) ? m : [m]) : f ? i.createElement(f, null, m) : i.createElement(i.Fragment, null, m);
            }
            o.displayName = 'FormattedMessage';
            var l = i.memo(o, function (e, t) {
                var r = e.values,
                    i = (0, n.__rest)(e, ['values']),
                    s = t.values,
                    o = (0, n.__rest)(t, ['values']);
                return (0, a.bN)(s, r) && (0, a.bN)(i, o);
            });
            l.displayName = 'MemoizedFormattedMessage';
            let u = l;
        },
        13459: (e, t, r) => {
            let n = r(68899);
            e.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
        },
        15159: (e, t, r) => {
            var n = r(49124);
            e.exports = 'object' == typeof n && n.env && n.env.NODE_DEBUG && /\bsemver\b/i.test(n.env.NODE_DEBUG) ? (...e) => console.error('SEMVER', ...e) : () => {};
        },
        20278: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => i.a });
            var n = r(57751),
                i = r.n(n);
        },
        20454: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => s });
            let n =
                !(function (e, t = !1) {
                    if (!e) return !1;
                    let r = t ? Function.prototype.toString.call(e) : e.toString ? e.toString() : '';
                    return /\[native code\]/.test(r) || /\/\* source code not available \*\//.test(r);
                })(Math.random) || Math.random() === Math.random();
            var i = r(68728);
            let a = ((0, i.x3)() * (0, i.lh)()) % 0x7fffffff,
                s = n
                    ? function () {
                          return ((a = (16807 * a) % 0x7fffffff) - 1) / 0x7ffffffe;
                      }
                    : function () {
                          return Math.random();
                      };
        },
        21217: (e) => {
            function t() {}
            ((t.prototype = {
                on: function (e, t, r) {
                    var n = this.e || (this.e = {});
                    return ((n[e] || (n[e] = [])).push({ fn: t, ctx: r }), this);
                },
                once: function (e, t, r) {
                    var n = this;
                    function i() {
                        (n.off(e, i), t.apply(r, arguments));
                    }
                    return ((i._ = t), this.on(e, i, r));
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, i = r.length; n < i; n++)
                        r[n].fn.apply(r[n].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var r = this.e || (this.e = {}),
                        n = r[e],
                        i = [];
                    if (n && t) for (var a = 0, s = n.length; a < s; a++) n[a].fn !== t && n[a].fn._ !== t && i.push(n[a]);
                    return (i.length ? (r[e] = i) : delete r[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        21878: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => W });
            var n = r(23198),
                i = r(21582),
                a = r(74631),
                s = r(30236),
                o = r(90967),
                l = r(76105),
                u = r(90725);
            function c(e, t) {
                return Object.keys(e).reduce(function (r, i) {
                    return ((r[i] = (0, n.__assign)({ timeZone: t }, e[i])), r);
                }, {});
            }
            function d(e, t) {
                return Object.keys((0, n.__assign)((0, n.__assign)({}, e), t)).reduce(function (r, i) {
                    return ((r[i] = (0, n.__assign)((0, n.__assign)({}, e[i] || {}), t[i] || {})), r);
                }, {});
            }
            function h(e, t) {
                if (!t) return e;
                var r = l.S.formats;
                return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r), e), {
                    date: d(c(r.date, t), c(e.date || {}, t)),
                    time: d(c(r.time, t), c(e.time || {}, t)),
                });
            }
            var f = function (e, t, r, a, s) {
                    var l = e.locale,
                        c = e.formats,
                        d = e.messages,
                        f = e.defaultLocale,
                        m = e.defaultFormats,
                        p = e.fallbackOnEmptyString,
                        g = e.onError,
                        E = e.timeZone,
                        v = e.defaultRichTextElements;
                    void 0 === r && (r = { id: '' });
                    var y = r.id,
                        I = r.defaultMessage;
                    (0, i.V1)(
                        !!y,
                        '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue',
                    );
                    var S = String(y),
                        T = d && Object.prototype.hasOwnProperty.call(d, S) && d[S];
                    if (Array.isArray(T) && 1 === T.length && T[0].type === o.TYPE.literal) return T[0].value;
                    if (!a && T && 'string' == typeof T && !v) return T.replace(/'\{(.*?)\}'/gi, '{$1}');
                    if (((a = (0, n.__assign)((0, n.__assign)({}, v), a || {})), (c = h(c, E)), (m = h(m, E)), !T)) {
                        if (!1 === p && '' === T) return T;
                        if (((!I || (l && l.toLowerCase() !== f.toLowerCase())) && g(new u.sb(r, l)), I))
                            try {
                                var b = t.getMessageFormat(I, f, m, s);
                                return b.format(a);
                            } catch (e) {
                                return (
                                    g(new u.Ho('Error formatting default message for: "'.concat(S, '", rendering default message verbatim'), l, r, e)),
                                    'string' == typeof I ? I : S
                                );
                            }
                        return S;
                    }
                    try {
                        var b = t.getMessageFormat(T, l, c, (0, n.__assign)({ formatters: t }, s || {}));
                        return b.format(a);
                    } catch (e) {
                        g(new u.Ho('Error formatting message: "'.concat(S, '", using ').concat(I ? 'default message' : 'id', ' as fallback.'), l, r, e));
                    }
                    if (I)
                        try {
                            var b = t.getMessageFormat(I, f, m, s);
                            return b.format(a);
                        } catch (e) {
                            g(new u.Ho('Error formatting the default message for: "'.concat(S, '", rendering message verbatim'), l, r, e));
                        }
                    return 'string' == typeof T ? T : 'string' == typeof I ? I : S;
                },
                m = [
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
            function p(e, t, r, a) {
                var s = e.locale,
                    o = e.formats,
                    l = e.onError,
                    u = e.timeZone;
                void 0 === a && (a = {});
                var c = a.format,
                    d = (0, n.__assign)((0, n.__assign)({}, u && { timeZone: u }), c && (0, i.F3)(o, t, c, l)),
                    h = (0, i.J9)(a, m, d);
                return (
                    'time' !== t ||
                        h.hour ||
                        h.minute ||
                        h.second ||
                        h.timeStyle ||
                        h.dateStyle ||
                        (h = (0, n.__assign)((0, n.__assign)({}, h), { hour: 'numeric', minute: 'numeric' })),
                    r(s, h)
                );
            }
            function g(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    s = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'date', t, void 0 === a ? {} : a).format(s);
                } catch (t) {
                    e.onError(new u.pg('Error formatting date.', e.locale, t));
                }
                return String(s);
            }
            function E(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    s = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'time', t, void 0 === a ? {} : a).format(s);
                } catch (t) {
                    e.onError(new u.pg('Error formatting time.', e.locale, t));
                }
                return String(s);
            }
            function v(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    s = r[2],
                    o = 'string' == typeof i ? new Date(i || 0) : i,
                    l = 'string' == typeof a ? new Date(a || 0) : a;
                try {
                    return p(e, 'dateTimeRange', t, void 0 === s ? {} : s).formatRange(o, l);
                } catch (t) {
                    e.onError(new u.pg('Error formatting date time range.', e.locale, t));
                }
                return String(o);
            }
            function y(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    s = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'date', t, void 0 === a ? {} : a).formatToParts(s);
                } catch (t) {
                    e.onError(new u.pg('Error formatting date.', e.locale, t));
                }
                return [];
            }
            function I(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    s = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'time', t, void 0 === a ? {} : a).formatToParts(s);
                } catch (t) {
                    e.onError(new u.pg('Error formatting time.', e.locale, t));
                }
                return [];
            }
            var S = r(69044),
                T = ['style', 'type', 'fallback', 'languageDisplay'];
            function b(e, t, r, n) {
                var a = e.locale,
                    s = e.onError;
                Intl.DisplayNames ||
                    s(
                        new S.IF(
                            'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
                            S.O4.MISSING_INTL_API,
                        ),
                    );
                var o = (0, i.J9)(n, T);
                try {
                    return t(a, o).of(r);
                } catch (e) {
                    s(new u.pg('Error formatting display name.', a, e));
                }
            }
            var w = ['type', 'style'],
                x = Date.now();
            function L(e, t, r, n) {
                void 0 === n && (n = {});
                var i = N(e, t, r, n).reduce(function (e, t) {
                    var r = t.value;
                    return ('string' != typeof r ? e.push(r) : 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += r) : e.push(r), e);
                }, []);
                return 1 === i.length ? i[0] : 0 === i.length ? '' : i;
            }
            function N(e, t, r, a) {
                var s = e.locale,
                    o = e.onError;
                (void 0 === a && (a = {}),
                    Intl.ListFormat ||
                        o(
                            new S.IF(
                                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                                S.O4.MISSING_INTL_API,
                            ),
                        ));
                var l = (0, i.J9)(a, w);
                try {
                    var c = {},
                        d = r.map(function (e, t) {
                            if ('object' == typeof e) {
                                var r = ''.concat(x, '_').concat(t, '_').concat(x);
                                return ((c[r] = e), r);
                            }
                            return String(e);
                        });
                    return t(s, l)
                        .formatToParts(d)
                        .map(function (e) {
                            return 'literal' === e.type ? e : (0, n.__assign)((0, n.__assign)({}, e), { value: c[e.value] || e.value });
                        });
                } catch (e) {
                    o(new u.pg('Error formatting list.', s, e));
                }
                return r;
            }
            var O = [
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
            function R(e, t, r) {
                var n = e.locale,
                    a = e.formats,
                    s = e.onError;
                void 0 === r && (r = {});
                var o = r.format,
                    l = (o && (0, i.F3)(a, 'number', o, s)) || {};
                return t(n, (0, i.J9)(r, O, l));
            }
            function P(e, t, r, n) {
                void 0 === n && (n = {});
                try {
                    return R(e, t, n).format(r);
                } catch (t) {
                    e.onError(new u.pg('Error formatting number.', e.locale, t));
                }
                return String(r);
            }
            function _(e, t, r, n) {
                void 0 === n && (n = {});
                try {
                    return R(e, t, n).formatToParts(r);
                } catch (t) {
                    e.onError(new u.pg('Error formatting number.', e.locale, t));
                }
                return [];
            }
            var A = ['type'];
            function M(e, t, r, n) {
                var a = e.locale,
                    s = e.onError;
                (void 0 === n && (n = {}),
                    Intl.PluralRules ||
                        s(
                            new S.IF(
                                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                S.O4.MISSING_INTL_API,
                            ),
                        ));
                var o = (0, i.J9)(n, A);
                try {
                    return t(a, o).select(r);
                } catch (e) {
                    s(new u.pg('Error formatting plural.', a, e));
                }
                return 'other';
            }
            var k = ['numeric', 'style'];
            function D(e, t, r, n, a) {
                (void 0 === a && (a = {}),
                    n || (n = 'second'),
                    Intl.RelativeTimeFormat ||
                        e.onError(
                            new S.IF(
                                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                                S.O4.MISSING_INTL_API,
                            ),
                        ));
                try {
                    var s, o, l, c, d, h;
                    return ((s = a),
                    (o = e.locale),
                    (l = e.formats),
                    (c = e.onError),
                    void 0 === s && (s = {}),
                    (h = (!!(d = s.format) && (0, i.F3)(l, 'relative', d, c)) || {}),
                    t(o, (0, i.J9)(s, k, h))).format(r, n);
                } catch (t) {
                    e.onError(new u.pg('Error formatting relative time.', e.locale, t));
                }
                return String(r);
            }
            var C = r(25417);
            function F(e) {
                return e
                    ? Object.keys(e).reduce(function (t, r) {
                          var n = e[r];
                          return ((t[r] = (0, C.RK)(n) ? (0, s.yU)(n) : n), t);
                      }, {})
                    : e;
            }
            var j = function (e, t, r, i) {
                    for (var a = [], o = 4; o < arguments.length; o++) a[o - 4] = arguments[o];
                    var l = F(i),
                        u = f.apply(void 0, (0, n.__spreadArray)([e, t, r, l], a, !1));
                    return Array.isArray(u) ? (0, s.SP)(u) : u;
                },
                $ = function (e, t) {
                    var r,
                        a,
                        o,
                        l,
                        c,
                        d,
                        h,
                        m = e.defaultRichTextElements,
                        p = (0, n.__rest)(e, ['defaultRichTextElements']),
                        S = F(m),
                        T =
                            ((r = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, s.JF), p), { defaultRichTextElements: S })),
                            (a = (0, i.GT)(t)),
                            (l = (o = (0, n.__assign)((0, n.__assign)({}, i.JF), r)).locale),
                            (c = o.defaultLocale),
                            (d = o.onError),
                            l
                                ? !Intl.NumberFormat.supportedLocalesOf(l).length && d
                                    ? d(
                                          new u.hr(
                                              'Missing locale data for locale: "'
                                                  .concat(l, '" in Intl.NumberFormat. Using default locale: "')
                                                  .concat(c, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'),
                                          ),
                                      )
                                    : !Intl.DateTimeFormat.supportedLocalesOf(l).length &&
                                      d &&
                                      d(
                                          new u.hr(
                                              'Missing locale data for locale: "'
                                                  .concat(l, '" in Intl.DateTimeFormat. Using default locale: "')
                                                  .concat(c, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'),
                                          ),
                                      )
                                : (d &&
                                      d(
                                          new u.uo(
                                              '"locale" was not configured, using "'.concat(
                                                  c,
                                                  '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details',
                                              ),
                                          ),
                                      ),
                                  (o.locale = o.defaultLocale || 'en')),
                            o.onWarn &&
                                o.defaultRichTextElements &&
                                'string' == typeof (h = o.messages || {})[Object.keys(h)[0]] &&
                                o.onWarn(
                                    '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution',
                                ),
                            (0, n.__assign)((0, n.__assign)({}, o), {
                                formatters: a,
                                formatNumber: P.bind(null, o, a.getNumberFormat),
                                formatNumberToParts: _.bind(null, o, a.getNumberFormat),
                                formatRelativeTime: D.bind(null, o, a.getRelativeTimeFormat),
                                formatDate: g.bind(null, o, a.getDateTimeFormat),
                                formatDateToParts: y.bind(null, o, a.getDateTimeFormat),
                                formatTime: E.bind(null, o, a.getDateTimeFormat),
                                formatDateTimeRange: v.bind(null, o, a.getDateTimeFormat),
                                formatTimeToParts: I.bind(null, o, a.getDateTimeFormat),
                                formatPlural: M.bind(null, o, a.getPluralRules),
                                formatMessage: f.bind(null, o, a),
                                $t: f.bind(null, o, a),
                                formatList: L.bind(null, o, a.getListFormat),
                                formatListToParts: N.bind(null, o, a.getListFormat),
                                formatDisplayName: b.bind(null, o, a.getDisplayNames),
                            })),
                        w = {
                            locale: T.locale,
                            timeZone: T.timeZone,
                            fallbackOnEmptyString: T.fallbackOnEmptyString,
                            formats: T.formats,
                            defaultLocale: T.defaultLocale,
                            defaultFormats: T.defaultFormats,
                            messages: T.messages,
                            onError: T.onError,
                            defaultRichTextElements: S,
                        };
                    return (0, n.__assign)((0, n.__assign)({}, T), { formatMessage: j.bind(null, w, T.formatters), $t: j.bind(null, w, T.formatters) });
                },
                B = r(9406);
            function U(e) {
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
            let W = (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return ((t.cache = (0, i.MT)()), (t.state = { cache: t.cache, intl: $(U(t.props), t.cache), prevConfig: U(t.props) }), t);
                }
                return (
                    (0, n.__extends)(t, e),
                    (t.getDerivedStateFromProps = function (e, t) {
                        var r = t.prevConfig,
                            n = t.cache,
                            i = U(e);
                        return (0, s.bN)(r, i) ? null : { intl: $(i, n), prevConfig: i };
                    }),
                    (t.prototype.render = function () {
                        return ((0, s.HM)(this.state.intl), a.createElement(B.Kq, { value: this.state.intl }, this.props.children));
                    }),
                    (t.displayName = 'IntlProvider'),
                    (t.defaultProps = s.JF),
                    t
                );
            })(a.PureComponent);
        },
        26256: (e) => {
            e.exports = function () {
                var e = window.navigator.userAgent,
                    t = e.indexOf('MSIE ');
                if (t > 0) return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10);
                if (e.indexOf('Trident/') > 0) {
                    var r = e.indexOf('rv:');
                    return parseInt(e.substring(r + 3, e.indexOf('.', r)), 10);
                }
                var n = e.indexOf('Edge/');
                return n > 0 && parseInt(e.substring(n + 5, e.indexOf('.', n)), 10);
            };
        },
        31803: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    DecodeError: function () {
                        return m;
                    },
                    MiddlewareNotFoundError: function () {
                        return v;
                    },
                    MissingStaticPage: function () {
                        return E;
                    },
                    NormalizeError: function () {
                        return p;
                    },
                    PageNotFoundError: function () {
                        return g;
                    },
                    SP: function () {
                        return h;
                    },
                    ST: function () {
                        return f;
                    },
                    WEB_VITALS: function () {
                        return r;
                    },
                    execOnce: function () {
                        return n;
                    },
                    getDisplayName: function () {
                        return l;
                    },
                    getLocationOrigin: function () {
                        return s;
                    },
                    getURL: function () {
                        return o;
                    },
                    isAbsoluteUrl: function () {
                        return a;
                    },
                    isResSent: function () {
                        return u;
                    },
                    loadGetInitialProps: function () {
                        return d;
                    },
                    normalizeRepeatedSlashes: function () {
                        return c;
                    },
                    stringifyError: function () {
                        return y;
                    },
                }));
            let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
            function n(e) {
                let t,
                    r = !1;
                return function () {
                    for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return (r || ((r = !0), (t = e(...i))), t);
                };
            }
            let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                a = (e) => i.test(e);
            function s() {
                let { protocol: e, hostname: t, port: r } = window.location;
                return e + '//' + t + (r ? ':' + r : '');
            }
            function o() {
                let { href: e } = window.location,
                    t = s();
                return e.substring(t.length);
            }
            function l(e) {
                return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
            }
            function u(e) {
                return e.finished || e.headersSent;
            }
            function c(e) {
                let t = e.split('?');
                return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
            }
            async function d(e, t) {
                let r = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await d(t.Component, t.ctx) } : {};
                let n = await e.getInitialProps(t);
                if (r && u(r)) return n;
                if (!n)
                    throw Object.defineProperty(
                        Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return n;
            }
            let h = 'undefined' != typeof performance,
                f = h && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
            class m extends Error {}
            class p extends Error {}
            class g extends Error {
                constructor(e) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e));
                }
            }
            class E extends Error {
                constructor(e, t) {
                    (super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t));
                }
            }
            class v extends Error {
                constructor() {
                    (super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
                }
            }
            function y(e) {
                return JSON.stringify({ message: e.message, stack: e.stack });
            }
        },
        31935: (e, t) => {
            'use strict';
            function r(e) {
                let t = {};
                for (let [r, n] of e.entries()) {
                    let e = t[r];
                    void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n]);
                }
                return t;
            }
            function n(e) {
                return 'string' == typeof e ? e : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e ? '' : String(e);
            }
            function i(e) {
                let t = new URLSearchParams();
                for (let [r, i] of Object.entries(e))
                    if (Array.isArray(i)) for (let e of i) t.append(r, n(e));
                    else t.set(r, n(i));
                return t;
            }
            function a(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                for (let t of r) {
                    for (let r of t.keys()) e.delete(r);
                    for (let [r, n] of t.entries()) e.append(r, n);
                }
                return e;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    assign: function () {
                        return a;
                    },
                    searchParamsToUrlQuery: function () {
                        return r;
                    },
                    urlQueryToSearchParams: function () {
                        return i;
                    },
                }));
        },
        37697: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    formatUrl: function () {
                        return a;
                    },
                    formatWithValidation: function () {
                        return o;
                    },
                    urlObjectKeys: function () {
                        return s;
                    },
                }));
            let n = r(78868)._(r(31935)),
                i = /https?|ftp|gopher|file/;
            function a(e) {
                let { auth: t, hostname: r } = e,
                    a = e.protocol || '',
                    s = e.pathname || '',
                    o = e.hash || '',
                    l = e.query || '',
                    u = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (u = t + e.host) : r && ((u = t + (~r.indexOf(':') ? '[' + r + ']' : r)), e.port && (u += ':' + e.port)),
                    l && 'object' == typeof l && (l = String(n.urlQueryToSearchParams(l))));
                let c = e.search || (l && '?' + l) || '';
                return (
                    a && !a.endsWith(':') && (a += ':'),
                    e.slashes || ((!a || i.test(a)) && !1 !== u) ? ((u = '//' + (u || '')), s && '/' !== s[0] && (s = '/' + s)) : u || (u = ''),
                    o && '#' !== o[0] && (o = '#' + o),
                    c && '?' !== c[0] && (c = '?' + c),
                    '' + a + u + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace('#', '%23')) + o
                );
            }
            let s = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function o(e) {
                return a(e);
            }
        },
        40637: (e, t, r) => {
            let n = r(13459);
            e.exports = (e, t, r) => n(t, e, r);
        },
        43391: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => d });
            var n = r(26256);
            let i = ['', '-webkit-', '-ms-', '-moz-', '-o-'],
                a = {}.toString,
                s = /\[object (\w+)\]/;
            function o(e, t) {
                var r;
                if (
                    'function' != typeof (r = e.matchMedia) &&
                    'Function' !==
                        ((e) => {
                            let t = a.call(e);
                            if (!t) return null;
                            let r = t.match(s);
                            if (!r) return null;
                            let n = r[1];
                            return n || null;
                        })(r)
                )
                    return !1;
                let n = e.matchMedia(t);
                return (
                    (function (e) {
                        let t = typeof e;
                        return !!e && ('object' === t || 'function' === t);
                    })(n) && !!n.matches
                );
            }
            let l = i.map((e) => `(${e}any-pointer:coarse)`).join(','),
                u = i.map((e) => `(${e}touch-enabled)`).join(',');
            var c = r(70539);
            function d(e) {
                let t = '',
                    r = '';
                return (
                    e &&
                        (function (e) {
                            let t = (function (e, t = !0) {
                                if (
                                    (function (e = window) {
                                        return (
                                            ((e = window) => {
                                                let t = (function (e = window) {
                                                    try {
                                                        return (e.navigator || {}).userAgent || '';
                                                    } catch (e) {
                                                        return '';
                                                    }
                                                })(e).toLowerCase();
                                                if (t.indexOf('android') > -1) return !1;
                                                let r = t
                                                    .replace(/\(.+?\)/gi, '')
                                                    .split(' ')
                                                    .map((e) => e.trim().split('/')[0])
                                                    .filter((e) => e && 'mobile' !== e);
                                                return 4 === r.length && 'mozilla' === r[0] && 'applewebkit' === r[1] && 'version' === r[2] && 'safari' === r[3];
                                            })(e) ||
                                            (function (e = window) {
                                                let t = e.navigator.userAgent.toLowerCase();
                                                return /ipad|iphone|ipod/.test(t) && !e.MSStream && !((e = window) => e.navigator.userAgent.indexOf('UCBrowser') > -1)(e);
                                            })(e) ||
                                            (function (e = window) {
                                                return (
                                                    /Apple/.test(e.navigator.vendor) &&
                                                    (function (e = window) {
                                                        var t;
                                                        return (
                                                            (!!(t = e).PointerEvent &&
                                                                (function (e) {
                                                                    let { msMaxTouchPoints: t, maxTouchPoints: r } = e.navigator || {};
                                                                    return t || r || 0;
                                                                })(t) > 0 &&
                                                                !((e = window) =>
                                                                    ((e = window) => {
                                                                        let t = n(e);
                                                                        return 'boolean' == typeof t ? -1 : t;
                                                                    })(e) > 11)(t)) ||
                                                            o(e, l) ||
                                                            o(e, u) ||
                                                            (function (e) {
                                                                let { DocumentTouch: t } = e;
                                                                return !!t && e.document instanceof t;
                                                            })(e) ||
                                                            'ontouchstart' in e
                                                        );
                                                    })(e)
                                                );
                                            })(e)
                                        );
                                    })() &&
                                    t
                                )
                                    return [];
                                let r = [],
                                    i = e;
                                for (;;)
                                    try {
                                        if (!(i = i.ownerDocument.defaultView.frameElement)) return r;
                                        r.push(i);
                                    } catch (e) {
                                        return r;
                                    }
                            })(e.documentElement).map((e) => e.ownerDocument);
                            return (t.unshift(e), t.map((e) => ({ location: (0, c.K)(e.defaultView), referrer: e.referrer })));
                        })(e)
                            .reverse()
                            .forEach(({ location: e, referrer: n }) => {
                                ((t = t || e), (r = r || n));
                            }),
                    { location: t, referrer: r }
                );
            }
        },
        51556: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isLocalURL', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let n = r(31803),
                i = r(91434);
            function a(e) {
                if (!(0, n.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, n.getLocationOrigin)(),
                        r = new URL(e, t);
                    return r.origin === t && (0, i.hasBasePath)(r.pathname);
                } catch (e) {
                    return !1;
                }
            }
        },
        55050: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'useMergedRef', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let n = r(74631);
            function i(e, t) {
                let r = (0, n.useRef)(null),
                    i = (0, n.useRef)(null);
                return (0, n.useCallback)(
                    (n) => {
                        if (null === n) {
                            let e = r.current;
                            e && ((r.current = null), e());
                            let t = i.current;
                            t && ((i.current = null), t());
                        } else (e && (r.current = a(e, n)), t && (i.current = a(t, n)));
                    },
                    [e, t],
                );
            }
            function a(e, t) {
                if ('function' != typeof e)
                    return (
                        (e.current = t),
                        () => {
                            e.current = null;
                        }
                    );
                {
                    let r = e(t);
                    return 'function' == typeof r ? r : () => e(null);
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        57751: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    default: function () {
                        return E;
                    },
                    handleClientScriptLoad: function () {
                        return m;
                    },
                    initScriptLoader: function () {
                        return p;
                    },
                }));
            let n = r(20567),
                i = r(78868),
                a = r(25839),
                s = n._(r(71910)),
                o = i._(r(74631)),
                l = r(67354),
                u = r(91142),
                c = r(4698),
                d = new Map(),
                h = new Set(),
                f = (e) => {
                    let {
                            src: t,
                            id: r,
                            onLoad: n = () => {},
                            onReady: i = null,
                            dangerouslySetInnerHTML: a,
                            children: o = '',
                            strategy: l = 'afterInteractive',
                            onError: c,
                            stylesheets: f,
                        } = e,
                        m = r || t;
                    if (m && h.has(m)) return;
                    if (d.has(t)) {
                        (h.add(m), d.get(t).then(n, c));
                        return;
                    }
                    let p = () => {
                            (i && i(), h.add(m));
                        },
                        g = document.createElement('script'),
                        E = new Promise((e, t) => {
                            (g.addEventListener('load', function (t) {
                                (e(), n && n.call(this, t), p());
                            }),
                                g.addEventListener('error', function (e) {
                                    t(e);
                                }));
                        }).catch(function (e) {
                            c && c(e);
                        });
                    (a
                        ? ((g.innerHTML = a.__html || ''), p())
                        : o
                          ? ((g.textContent = 'string' == typeof o ? o : Array.isArray(o) ? o.join('') : ''), p())
                          : t && ((g.src = t), d.set(t, E)),
                        (0, u.setAttributesFromProps)(g, e),
                        'worker' === l && g.setAttribute('type', 'text/partytown'),
                        g.setAttribute('data-nscript', l),
                        f &&
                            ((e) => {
                                if (s.default.preinit)
                                    return e.forEach((e) => {
                                        s.default.preinit(e, { as: 'style' });
                                    });
                                {
                                    let t = document.head;
                                    e.forEach((e) => {
                                        let r = document.createElement('link');
                                        ((r.type = 'text/css'), (r.rel = 'stylesheet'), (r.href = e), t.appendChild(r));
                                    });
                                }
                            })(f),
                        document.body.appendChild(g));
                };
            function m(e) {
                let { strategy: t = 'afterInteractive' } = e;
                'lazyOnload' === t
                    ? window.addEventListener('load', () => {
                          (0, c.requestIdleCallback)(() => f(e));
                      })
                    : f(e);
            }
            function p(e) {
                (e.forEach(m),
                    [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(
                        (e) => {
                            let t = e.id || e.getAttribute('src');
                            h.add(t);
                        },
                    ));
            }
            function g(e) {
                let { id: t, src: r = '', onLoad: n = () => {}, onReady: i = null, strategy: u = 'afterInteractive', onError: d, stylesheets: m, ...p } = e,
                    { updateScripts: g, scripts: E, getIsSsr: v, appDir: y, nonce: I } = (0, o.useContext)(l.HeadManagerContext);
                I = p.nonce || I;
                let S = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    let e = t || r;
                    S.current || (i && e && h.has(e) && i(), (S.current = !0));
                }, [i, t, r]);
                let T = (0, o.useRef)(!1);
                if (
                    ((0, o.useEffect)(() => {
                        if (!T.current) {
                            if ('afterInteractive' === u) f(e);
                            else
                                'lazyOnload' === u &&
                                    ('complete' === document.readyState
                                        ? (0, c.requestIdleCallback)(() => f(e))
                                        : window.addEventListener('load', () => {
                                              (0, c.requestIdleCallback)(() => f(e));
                                          }));
                            T.current = !0;
                        }
                    }, [e, u]),
                    ('beforeInteractive' === u || 'worker' === u) &&
                        (g
                            ? ((E[u] = (E[u] || []).concat([{ id: t, src: r, onLoad: n, onReady: i, onError: d, ...p, nonce: I }])), g(E))
                            : v && v()
                              ? h.add(t || r)
                              : v && !v() && f({ ...e, nonce: I })),
                    y)
                ) {
                    if (
                        (m &&
                            m.forEach((e) => {
                                s.default.preinit(e, { as: 'style' });
                            }),
                        'beforeInteractive' === u)
                    )
                        if (!r)
                            return (
                                p.dangerouslySetInnerHTML && ((p.children = p.dangerouslySetInnerHTML.__html), delete p.dangerouslySetInnerHTML),
                                (0, a.jsx)('script', {
                                    nonce: I,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([0, { ...p, id: t }]) + ')' },
                                })
                            );
                        else
                            return (
                                s.default.preload(
                                    r,
                                    p.integrity
                                        ? { as: 'script', integrity: p.integrity, nonce: I, crossOrigin: p.crossOrigin }
                                        : { as: 'script', nonce: I, crossOrigin: p.crossOrigin },
                                ),
                                (0, a.jsx)('script', {
                                    nonce: I,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([r, { ...p, id: t }]) + ')' },
                                })
                            );
                    'afterInteractive' === u &&
                        r &&
                        s.default.preload(
                            r,
                            p.integrity
                                ? { as: 'script', integrity: p.integrity, nonce: I, crossOrigin: p.crossOrigin }
                                : { as: 'script', nonce: I, crossOrigin: p.crossOrigin },
                        );
                }
                return null;
            }
            Object.defineProperty(g, '__nextScript', { value: !0 });
            let E = g;
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        58038: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    default: function () {
                        return g;
                    },
                    useLinkStatus: function () {
                        return v;
                    },
                }));
            let n = r(78868),
                i = r(25839),
                a = n._(r(74631)),
                s = r(37697),
                o = r(91543),
                l = r(37502),
                u = r(55050),
                c = r(31803),
                d = r(94005);
            r(1978);
            let h = r(52278),
                f = r(51556),
                m = r(1326);
            function p(e) {
                return 'string' == typeof e ? e : (0, s.formatUrl)(e);
            }
            function g(e) {
                let t,
                    r,
                    n,
                    [s, g] = (0, a.useOptimistic)(h.IDLE_LINK_STATUS),
                    v = (0, a.useRef)(null),
                    {
                        href: y,
                        as: I,
                        children: S,
                        prefetch: T = null,
                        passHref: b,
                        replace: w,
                        shallow: x,
                        scroll: L,
                        onClick: N,
                        onMouseEnter: O,
                        onTouchStart: R,
                        legacyBehavior: P = !1,
                        onNavigate: _,
                        ref: A,
                        unstable_dynamicOnHover: M,
                        ...k
                    } = e;
                ((t = S), P && ('string' == typeof t || 'number' == typeof t) && (t = (0, i.jsx)('a', { children: t })));
                let D = a.default.useContext(o.AppRouterContext),
                    C = !1 !== T,
                    F = null === T || 'auto' === T ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
                    { href: j, as: $ } = a.default.useMemo(() => {
                        let e = p(y);
                        return { href: e, as: I ? p(I) : e };
                    }, [y, I]);
                P && (r = a.default.Children.only(t));
                let B = P ? r && 'object' == typeof r && r.ref : A,
                    U = a.default.useCallback(
                        (e) => (
                            null !== D && (v.current = (0, h.mountLinkInstance)(e, j, D, F, C, g)),
                            () => {
                                (v.current && ((0, h.unmountLinkForCurrentNavigation)(v.current), (v.current = null)), (0, h.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [C, j, D, F, g],
                    ),
                    W = {
                        ref: (0, u.useMergedRef)(U, B),
                        onClick(e) {
                            (P || 'function' != typeof N || N(e),
                                P && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
                                D &&
                                    (e.defaultPrevented ||
                                        (function (e, t, r, n, i, s, o) {
                                            let { nodeName: l } = e.currentTarget;
                                            if (
                                                !(
                                                    ('A' === l.toUpperCase() &&
                                                        (function (e) {
                                                            let t = e.currentTarget.getAttribute('target');
                                                            return (
                                                                (t && '_self' !== t) ||
                                                                e.metaKey ||
                                                                e.ctrlKey ||
                                                                e.shiftKey ||
                                                                e.altKey ||
                                                                (e.nativeEvent && 2 === e.nativeEvent.which)
                                                            );
                                                        })(e)) ||
                                                    e.currentTarget.hasAttribute('download')
                                                )
                                            ) {
                                                if (!(0, f.isLocalURL)(t)) {
                                                    i && (e.preventDefault(), location.replace(t));
                                                    return;
                                                }
                                                if ((e.preventDefault(), o)) {
                                                    let e = !1;
                                                    if (
                                                        (o({
                                                            preventDefault: () => {
                                                                e = !0;
                                                            },
                                                        }),
                                                        e)
                                                    )
                                                        return;
                                                }
                                                a.default.startTransition(() => {
                                                    (0, m.dispatchNavigateAction)(r || t, i ? 'replace' : 'push', null == s || s, n.current);
                                                });
                                            }
                                        })(e, j, $, v, w, L, _)));
                        },
                        onMouseEnter(e) {
                            (P || 'function' != typeof O || O(e),
                                P && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                                D && C && (0, h.onNavigationIntent)(e.currentTarget, !0 === M));
                        },
                        onTouchStart: function (e) {
                            (P || 'function' != typeof R || R(e),
                                P && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                                D && C && (0, h.onNavigationIntent)(e.currentTarget, !0 === M));
                        },
                    };
                return (
                    (0, c.isAbsoluteUrl)($) ? (W.href = $) : (P && !b && ('a' !== r.type || 'href' in r.props)) || (W.href = (0, d.addBasePath)($)),
                    (n = P ? a.default.cloneElement(r, W) : (0, i.jsx)('a', { ...k, ...W, children: t })),
                    (0, i.jsx)(E.Provider, { value: s, children: n })
                );
            }
            r(82848);
            let E = (0, a.createContext)(h.IDLE_LINK_STATUS),
                v = () => (0, a.useContext)(E);
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        58435: (e, t, r) => {
            'use strict';
            function n(e) {
                return e;
            }
            function i(e) {
                return Math.max(e, 0);
            }
            function a(e) {
                return i(e);
            }
            function s(e) {
                return i(Math.floor(e));
            }
            r.d(t, { WQ: () => d, Qr: () => m, lw: () => f, gL: () => h, bY: () => u, Wj: () => c, Lp: () => l, fP: () => o, PY: () => a, Pn: () => s });
            let o = n,
                l = n,
                u = n,
                c = n,
                d = (e, ...t) => {
                    let r = e;
                    for (let e = 0; e < t.length; e++) r += t[e];
                    return r;
                };
            d.operator = '+';
            let h = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r -= t[e];
                return r;
            };
            h.operator = '-';
            let f = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r *= t[e];
                return r;
            };
            f.operator = '*';
            let m = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r /= t[e];
                return r;
            };
            m.operator = '/';
        },
        65517: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => g });
            let n = '__VPUID_INLINE__',
                i = 'vpuid';
            class a {
                prefix;
                path;
                constructor(e = {}) {
                    ((this.prefix = e.prefix || 'ss_'), (this.path = e.path || '/'));
                }
                getItem(e) {
                    let t = `${this.prefix}${e}=`,
                        r = document.cookie.indexOf(t);
                    if (-1 === r) return null;
                    let n = r + t.length,
                        i = document.cookie.indexOf(';', n);
                    return document.cookie.substring(n, -1 === i ? document.cookie.length : i);
                }
                setItem(e, t) {
                    let r = `${this.prefix}${e}=${t}; path=${this.path}; samesite=strict`;
                    document.cookie = r;
                }
                removeItem(e) {
                    document.cookie = `${this.prefix}${e}=; path=${this.path}; max-age=-1`;
                }
                clear() {
                    let e = document.cookie;
                    if (!e) return;
                    let t = e.split(';');
                    for (let e = 0; e < t.length; e++) {
                        let r = t[e].indexOf('=');
                        if (-1 === r) continue;
                        let n = t[e].substring(0, r).trim();
                        n.startsWith(this.prefix) && this.removeItem(n.substring(this.prefix.length));
                    }
                }
                get length() {
                    let e = 0,
                        t = document.cookie;
                    if (!t) return e;
                    let r = t.split(';');
                    for (let t = 0; t < r.length; t++) {
                        let n = r[t].indexOf('=');
                        -1 !== n && r[t].substring(0, n).trim().startsWith(this.prefix) && e++;
                    }
                    return e;
                }
                key(e) {
                    if (e < 0) return null;
                    let t = -1,
                        r = document.cookie;
                    if (!r) return null;
                    let n = r.split(';');
                    for (let r = 0; r < n.length; r++) {
                        let i = n[r].indexOf('=');
                        if (-1 === i) continue;
                        let a = n[r].substring(0, i).trim();
                        if (a.startsWith(this.prefix) && ++t === e) return a.substring(this.prefix.length);
                    }
                    return null;
                }
                static isSupported() {
                    try {
                        let e = '__test_cookie__',
                            t = new a();
                        t.setItem(e, '1');
                        let r = t.getItem(e);
                        return (t.removeItem(e), '1' === r);
                    } catch {
                        return !1;
                    }
                }
            }
            class s {
                data = {};
                getItem(e) {
                    return this.data[e] || null;
                }
                setItem(e, t) {
                    this.data[e] = t;
                }
                removeItem(e) {
                    delete this.data[e];
                }
                clear() {
                    this.data = {};
                }
                get length() {
                    return Object.keys(this.data).length;
                }
                key(e) {
                    let t = Object.keys(this.data);
                    return e >= 0 && e < t.length ? t[e] : null;
                }
            }
            function o(e) {
                let t = '__test_storage__';
                try {
                    return (e.setItem(t, 'test'), e.removeItem(t), !0);
                } catch {
                    return !1;
                }
            }
            class l {
                fallbackOrder;
                constructor(e = ['local', 'session', 'cookie', 'memory']) {
                    this.fallbackOrder = e;
                }
                getStorage() {
                    for (let e of this.fallbackOrder)
                        if (
                            (function (e) {
                                try {
                                    switch (e) {
                                        case 'local':
                                            return o(window.localStorage);
                                        case 'session':
                                            return o(window.sessionStorage);
                                        case 'cookie':
                                            return a.isSupported();
                                        case 'memory':
                                            return !0;
                                        default:
                                            throw Error(`Unsupported storage type: ${e}`);
                                    }
                                } catch {
                                    return !1;
                                }
                            })(e)
                        )
                            return this.createStorage(e);
                    return new s();
                }
                createStorage(e) {
                    switch (e) {
                        case 'local':
                        default:
                            return window.localStorage;
                        case 'session':
                            return window.sessionStorage;
                        case 'cookie':
                            return new a();
                        case 'memory':
                            return new s();
                    }
                }
            }
            let u = new l().getStorage(),
                c = new l(['local', 'memory']).getStorage(),
                d = new l(['session', 'memory']).getStorage();
            function h(e) {
                return {
                    getItem(t) {
                        try {
                            return e.getItem(t);
                        } catch {
                            return null;
                        }
                    },
                    setItem(t, r) {
                        try {
                            e.setItem(t, r);
                        } catch {}
                    },
                    removeItem(t) {
                        try {
                            e.removeItem(t);
                        } catch {}
                    },
                    clear() {
                        try {
                            e.clear();
                        } catch {}
                    },
                    hasItem(t) {
                        try {
                            return null !== e.getItem(t);
                        } catch {
                            return !1;
                        }
                    },
                    get length() {
                        try {
                            return e.length;
                        } catch {
                            return 0;
                        }
                    },
                    key(t) {
                        try {
                            return e.key(t);
                        } catch {
                            return null;
                        }
                    },
                };
            }
            let f = h(u);
            (h(c), h(d));
            var m = r(20454);
            let p = 'qwertyuiopasdfghjklzxcvbnm0123456789',
                g =
                    -1 === n.indexOf('__VPUID')
                        ? n
                        : (f.getItem(i) ??
                          (function () {
                              let e = [];
                              for (let t = 0; t < 10; t++) e.push(p[Math.floor((0, m.y)() * p.length)]);
                              return e.join('');
                          })());
            f.setItem(i, g);
        },
        65839: (e) => {
            'use strict';
            var t = Array.isArray,
                r = Object.keys,
                n = Object.prototype.hasOwnProperty;
            e.exports = function e(i, a) {
                if (i === a) return !0;
                if (i && a && 'object' == typeof i && 'object' == typeof a) {
                    var s,
                        o,
                        l,
                        u = t(i),
                        c = t(a);
                    if (u && c) {
                        if ((o = i.length) != a.length) return !1;
                        for (s = o; 0 != s--;) if (!e(i[s], a[s])) return !1;
                        return !0;
                    }
                    if (u != c) return !1;
                    var d = i instanceof Date,
                        h = a instanceof Date;
                    if (d != h) return !1;
                    if (d && h) return i.getTime() == a.getTime();
                    var f = i instanceof RegExp,
                        m = a instanceof RegExp;
                    if (f != m) return !1;
                    if (f && m) return i.toString() == a.toString();
                    var p = r(i);
                    if ((o = p.length) !== r(a).length) return !1;
                    for (s = o; 0 != s--;) if (!n.call(a, p[s])) return !1;
                    for (s = o; 0 != s--;) if (!e(i[(l = p[s])], a[l])) return !1;
                    return !0;
                }
                return i != i && a != a;
            };
        },
        66032: (e) => {
            let t = /^[0-9]+$/,
                r = (e, r) => {
                    let n = t.test(e),
                        i = t.test(r);
                    return (n && i && ((e *= 1), (r *= 1)), e === r ? 0 : n && !i ? -1 : i && !n ? 1 : e < r ? -1 : 1);
                };
            e.exports = { compareIdentifiers: r, rcompareIdentifiers: (e, t) => r(t, e) };
        },
        68728: (e, t, r) => {
            'use strict';
            r.d(t, { x3: () => o, lh: () => f });
            var n = r(58435);
            let i = {}.toString,
                a = /\[object (\w+)\]/;
            function s(e) {
                return (
                    'function' == typeof e ||
                    'Function' ===
                        ((e) => {
                            let t = i.call(e);
                            if (!t) return null;
                            let r = t.match(a);
                            if (!r) return null;
                            let n = r[1];
                            return n || null;
                        })(e)
                );
            }
            let o = Date && s(Date.now) ? () => Date.now() : () => new Date().getTime(),
                l = 'undefined' == typeof window ? void 0 : window.performance,
                u = l && s(l.now),
                c = l && l.timing && l.timing.navigationStart,
                d = l && l.timeOrigin ? l.timeOrigin : c ? l.timing.navigationStart : o(),
                h = 0,
                f = () => (0, n.Wj)(u ? l.now() : (h = Math.max(o() - d, h)));
        },
        68899: (e, t, r) => {
            let n = r(15159),
                { MAX_LENGTH: i, MAX_SAFE_INTEGER: a } = r(75465),
                { safeRe: s, t: o } = r(80157),
                l = r(85344),
                { compareIdentifiers: u } = r(66032);
            class c {
                constructor(e, t) {
                    if (((t = l(t)), e instanceof c))
                        if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
                        else e = e.version;
                    else if ('string' != typeof e) throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                    if (e.length > i) throw TypeError(`version is longer than ${i} characters`);
                    (n('SemVer', e, t), (this.options = t), (this.loose = !!t.loose), (this.includePrerelease = !!t.includePrerelease));
                    let r = e.trim().match(t.loose ? s[o.LOOSE] : s[o.FULL]);
                    if (!r) throw TypeError(`Invalid Version: ${e}`);
                    if (((this.raw = e), (this.major = +r[1]), (this.minor = +r[2]), (this.patch = +r[3]), this.major > a || this.major < 0))
                        throw TypeError('Invalid major version');
                    if (this.minor > a || this.minor < 0) throw TypeError('Invalid minor version');
                    if (this.patch > a || this.patch < 0) throw TypeError('Invalid patch version');
                    (r[4]
                        ? (this.prerelease = r[4].split('.').map((e) => {
                              if (/^[0-9]+$/.test(e)) {
                                  let t = +e;
                                  if (t >= 0 && t < a) return t;
                              }
                              return e;
                          }))
                        : (this.prerelease = []),
                        (this.build = r[5] ? r[5].split('.') : []),
                        this.format());
                }
                format() {
                    return (
                        (this.version = `${this.major}.${this.minor}.${this.patch}`),
                        this.prerelease.length && (this.version += `-${this.prerelease.join('.')}`),
                        this.version
                    );
                }
                toString() {
                    return this.version;
                }
                compare(e) {
                    if ((n('SemVer.compare', this.version, this.options, e), !(e instanceof c))) {
                        if ('string' == typeof e && e === this.version) return 0;
                        e = new c(e, this.options);
                    }
                    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
                }
                compareMain(e) {
                    return (e instanceof c || (e = new c(e, this.options)), u(this.major, e.major) || u(this.minor, e.minor) || u(this.patch, e.patch));
                }
                comparePre(e) {
                    if ((e instanceof c || (e = new c(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
                    if (!this.prerelease.length && e.prerelease.length) return 1;
                    if (!this.prerelease.length && !e.prerelease.length) return 0;
                    let t = 0;
                    do {
                        let r = this.prerelease[t],
                            i = e.prerelease[t];
                        if ((n('prerelease compare', t, r, i), void 0 === r && void 0 === i)) return 0;
                        if (void 0 === i) return 1;
                        if (void 0 === r) return -1;
                        else if (r === i) continue;
                        else return u(r, i);
                    } while (++t);
                }
                compareBuild(e) {
                    e instanceof c || (e = new c(e, this.options));
                    let t = 0;
                    do {
                        let r = this.build[t],
                            i = e.build[t];
                        if ((n('prerelease compare', t, r, i), void 0 === r && void 0 === i)) return 0;
                        if (void 0 === i) return 1;
                        if (void 0 === r) return -1;
                        else if (r === i) continue;
                        else return u(r, i);
                    } while (++t);
                }
                inc(e, t, r) {
                    switch (e) {
                        case 'premajor':
                            ((this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc('pre', t, r));
                            break;
                        case 'preminor':
                            ((this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', t, r));
                            break;
                        case 'prepatch':
                            ((this.prerelease.length = 0), this.inc('patch', t, r), this.inc('pre', t, r));
                            break;
                        case 'prerelease':
                            (0 === this.prerelease.length && this.inc('patch', t, r), this.inc('pre', t, r));
                            break;
                        case 'major':
                            ((0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++,
                                (this.minor = 0),
                                (this.patch = 0),
                                (this.prerelease = []));
                            break;
                        case 'minor':
                            ((0 !== this.patch || 0 === this.prerelease.length) && this.minor++, (this.patch = 0), (this.prerelease = []));
                            break;
                        case 'patch':
                            (0 === this.prerelease.length && this.patch++, (this.prerelease = []));
                            break;
                        case 'pre': {
                            let e = +!!Number(r);
                            if (!t && !1 === r) throw Error('invalid increment argument: identifier is empty');
                            if (0 === this.prerelease.length) this.prerelease = [e];
                            else {
                                let n = this.prerelease.length;
                                for (; --n >= 0;) 'number' == typeof this.prerelease[n] && (this.prerelease[n]++, (n = -2));
                                if (-1 === n) {
                                    if (t === this.prerelease.join('.') && !1 === r) throw Error('invalid increment argument: identifier already exists');
                                    this.prerelease.push(e);
                                }
                            }
                            if (t) {
                                let n = [t, e];
                                (!1 === r && (n = [t]), 0 === u(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : (this.prerelease = n));
                            }
                            break;
                        }
                        default:
                            throw Error(`invalid increment argument: ${e}`);
                    }
                    return ((this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join('.')}`), this);
                }
            }
            e.exports = c;
        },
        70539: (e, t, r) => {
            'use strict';
            function n(e) {
                if (e && e.location) {
                    let { location: t } = e;
                    return 'function' == typeof t.toString ? t.toString() : t.href || '';
                }
                return '';
            }
            r.d(t, { K: () => n });
        },
        75465: (e) => {
            e.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: 16,
                MAX_SAFE_BUILD_LENGTH: 250,
                MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
                RELEASE_TYPES: ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'],
                SEMVER_SPEC_VERSION: '2.0.0',
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2,
            };
        },
        80157: (e, t, r) => {
            let { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: a } = r(75465),
                s = r(15159),
                o = ((t = e.exports = {}).re = []),
                l = (t.safeRe = []),
                u = (t.src = []),
                c = (t.t = {}),
                d = 0,
                h = '[a-zA-Z0-9-]',
                f = [
                    ['\\s', 1],
                    ['\\d', a],
                    [h, i],
                ],
                m = (e, t, r) => {
                    let n = ((e) => {
                            for (let [t, r] of f) e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                            return e;
                        })(t),
                        i = d++;
                    (s(e, i, t), (c[e] = i), (u[i] = t), (o[i] = new RegExp(t, r ? 'g' : void 0)), (l[i] = new RegExp(n, r ? 'g' : void 0)));
                };
            (m('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
                m('NUMERICIDENTIFIERLOOSE', '\\d+'),
                m('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${h}*`),
                m('MAINVERSION', `(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})`),
                m('MAINVERSIONLOOSE', `(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})`),
                m('PRERELEASEIDENTIFIER', `(?:${u[c.NUMERICIDENTIFIER]}|${u[c.NONNUMERICIDENTIFIER]})`),
                m('PRERELEASEIDENTIFIERLOOSE', `(?:${u[c.NUMERICIDENTIFIERLOOSE]}|${u[c.NONNUMERICIDENTIFIER]})`),
                m('PRERELEASE', `(?:-(${u[c.PRERELEASEIDENTIFIER]}(?:\\.${u[c.PRERELEASEIDENTIFIER]})*))`),
                m('PRERELEASELOOSE', `(?:-?(${u[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[c.PRERELEASEIDENTIFIERLOOSE]})*))`),
                m('BUILDIDENTIFIER', `${h}+`),
                m('BUILD', `(?:\\+(${u[c.BUILDIDENTIFIER]}(?:\\.${u[c.BUILDIDENTIFIER]})*))`),
                m('FULLPLAIN', `v?${u[c.MAINVERSION]}${u[c.PRERELEASE]}?${u[c.BUILD]}?`),
                m('FULL', `^${u[c.FULLPLAIN]}$`),
                m('LOOSEPLAIN', `[v=\\s]*${u[c.MAINVERSIONLOOSE]}${u[c.PRERELEASELOOSE]}?${u[c.BUILD]}?`),
                m('LOOSE', `^${u[c.LOOSEPLAIN]}$`),
                m('GTLT', '((?:<|>)?=?)'),
                m('XRANGEIDENTIFIERLOOSE', `${u[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
                m('XRANGEIDENTIFIER', `${u[c.NUMERICIDENTIFIER]}|x|X|\\*`),
                m(
                    'XRANGEPLAIN',
                    `[v=\\s]*(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:${u[c.PRERELEASE]})?${u[c.BUILD]}?)?)?`,
                ),
                m(
                    'XRANGEPLAINLOOSE',
                    `[v=\\s]*(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:${u[c.PRERELEASELOOSE]})?${u[c.BUILD]}?)?)?`,
                ),
                m('XRANGE', `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAIN]}$`),
                m('XRANGELOOSE', `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAINLOOSE]}$`),
                m('COERCE', `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),
                m('COERCERTL', u[c.COERCE], !0),
                m('LONETILDE', '(?:~>?)'),
                m('TILDETRIM', `(\\s*)${u[c.LONETILDE]}\\s+`, !0),
                (t.tildeTrimReplace = '$1~'),
                m('TILDE', `^${u[c.LONETILDE]}${u[c.XRANGEPLAIN]}$`),
                m('TILDELOOSE', `^${u[c.LONETILDE]}${u[c.XRANGEPLAINLOOSE]}$`),
                m('LONECARET', '(?:\\^)'),
                m('CARETTRIM', `(\\s*)${u[c.LONECARET]}\\s+`, !0),
                (t.caretTrimReplace = '$1^'),
                m('CARET', `^${u[c.LONECARET]}${u[c.XRANGEPLAIN]}$`),
                m('CARETLOOSE', `^${u[c.LONECARET]}${u[c.XRANGEPLAINLOOSE]}$`),
                m('COMPARATORLOOSE', `^${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]})$|^$`),
                m('COMPARATOR', `^${u[c.GTLT]}\\s*(${u[c.FULLPLAIN]})$|^$`),
                m('COMPARATORTRIM', `(\\s*)${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]}|${u[c.XRANGEPLAIN]})`, !0),
                (t.comparatorTrimReplace = '$1$2$3'),
                m('HYPHENRANGE', `^\\s*(${u[c.XRANGEPLAIN]})\\s+-\\s+(${u[c.XRANGEPLAIN]})\\s*$`),
                m('HYPHENRANGELOOSE', `^\\s*(${u[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[c.XRANGEPLAINLOOSE]})\\s*$`),
                m('STAR', '(<|>)?=?\\s*\\*'),
                m('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
                m('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$'));
        },
        82848: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'errorOnce', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let r = (e) => {};
        },
        85344: (e) => {
            let t = Object.freeze({ loose: !0 }),
                r = Object.freeze({});
            e.exports = (e) => (e ? ('object' != typeof e ? t : e) : r);
        },
        89111: (e, t, r) => {
            'use strict';
            r.d(t, { yv: () => V, YT: () => et, FM: () => l });
            var n,
                i,
                a,
                s,
                o,
                l = {};
            (r.r(l),
                r.d(l, { g: () => n, r: () => i }),
                (function (e) {
                    ((e.Start = 'Start'),
                        (e.Watched4Sec = '4SecWatched'),
                        (e.Watched10Sec = '10SecWatched'),
                        (e.Watched20Sec = '20SecWatched'),
                        (e.Heartbeat30Sec = '30SecHeartbeat'),
                        (e.End = 'End'));
                })(n || (n = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.PAUSE = 'pause'), (e.BUFFERING = 'buffering'), (e.END = 'end'));
                })(i || (i = {})));
            var u = r(58435);
            function c(e) {
                return Math.floor(e / 30);
            }
            class d {
                params;
                previousWatchedTime = (0, u.fP)(0);
                constructor(e) {
                    this.params = e;
                }
                onWatchedTimeChange(e) {
                    let { previousWatchedTime: t } = this;
                    t !== e &&
                        (0 === t && e > 0
                            ? this.params.onEvent(n.Start)
                            : t < 4 && e >= 4
                              ? this.params.onEvent(n.Watched4Sec)
                              : t < 10 && e >= 10
                                ? this.params.onEvent(n.Watched10Sec)
                                : t < 20 && e >= 20
                                  ? this.params.onEvent(n.Watched20Sec)
                                  : c(t) < c(e) && this.params.onEvent(n.Heartbeat30Sec),
                        (this.previousWatchedTime = e));
                }
                onPlayingStateChange(e) {
                    e === i.END && this.params.onEvent(n.End);
                }
            }
            class h {
                lastSourceIndexWithFatal = null;
                extractSourceIndex(e) {
                    let t = e.split('?')[1];
                    if (t)
                        for (let e of t.split('&')) {
                            let [t, r] = e.split('=');
                            if ('source_index' === t) return r ? Number(r) : null;
                        }
                    return null;
                }
                checkIsFatal(e, t) {
                    if (!e || !t) return e;
                    let r = this.extractSourceIndex(t);
                    return null === r ? e : (null === this.lastSourceIndexWithFatal || r > this.lastSourceIndexWithFatal) && ((this.lastSourceIndexWithFatal = r), !0);
                }
            }
            var f = r(65839);
            let m = (0, u.Wj)(1e4),
                p = (0, u.Wj)(1e3),
                g = (0, u.Wj)(5e3),
                E = (0, u.Wj)(3e4);
            var v = r(68728);
            class y {
                onTick;
                onFlush;
                wasFirstFlush = !1;
                isDestroyed = !1;
                lastFlushTime;
                startTime;
                timer;
                constructor(e, t) {
                    ((this.onTick = e),
                        (this.onFlush = t),
                        (this.startTime = this.lastFlushTime = (0, v.lh)()),
                        (this.timer = window.setTimeout(() => {
                            (this.onTick(), this.nextTick());
                        }, 0)));
                }
                next() {
                    this.isDestroyed || (window.clearTimeout(this.timer), this.handleFlush(), this.nextTick());
                }
                destroy() {
                    (window.clearTimeout(this.timer), (this.isDestroyed = !0));
                }
                nextTick() {
                    this.isDestroyed || (window.clearTimeout(this.timer), (this.timer = window.setTimeout(this.handleTimeout, this.getTimeout())));
                }
                handleTimeout = () => {
                    (this.onTick(), this.handleFlush(), this.nextTick());
                };
                handleFlush() {
                    this.needFlush() && (this.onFlush(), (this.lastFlushTime = this.wasFirstFlush ? (0, v.lh)() : this.startTime), (this.wasFirstFlush = !0));
                }
                needFlush() {
                    let e = (0, v.lh)();
                    return this.wasFirstFlush ? e - this.lastFlushTime >= E : e - this.startTime >= m;
                }
                getTimeout() {
                    return (0, v.lh)() - this.startTime < m ? p : g;
                }
            }
            let I = (0, u.PY)((0, u.fP)(Math.abs(0))),
                S = {
                    remainingBufferedTime: (0, u.PY)((0, u.fP)(Math.abs(0))),
                    state: i.BUFFERING,
                    currentTime: I,
                    watchedTime: (0, u.PY)((0, u.fP)(Math.abs(0))),
                    duration: (0, u.PY)((0, u.fP)(0)),
                },
                T = NaN;
            function b() {}
            (!(function (e) {
                ((e[(e.PLAYING = 1)] = 'PLAYING'), (e[(e.NOT_PLAYING = 2)] = 'NOT_PLAYING'));
            })(a || (a = {})),
                (function (e) {
                    ((e.preroll = 'preroll'), (e.midroll = 'midroll'), (e.postPauseroll = 'postPauseroll'), (e.postroll = 'postroll'), (e.inroll = 'inroll'));
                })(s || (s = {})));
            class w {
                props;
                prevState = void 0;
                states = [];
                timer;
                destroyHandlers = [];
                constructor(e) {
                    ((this.props = e),
                        (this.timer = new y(
                            () => this.writeState(),
                            () => this.flushStates(),
                        )));
                }
                addDestroyHandler(e) {
                    this.destroyHandlers.push(e);
                }
                destroy() {
                    (this.timer.destroy(),
                        this.flushStates(),
                        this.destroyHandlers.forEach((e) => {
                            e();
                        }),
                        (this.destroyHandlers = []));
                }
                getStates() {
                    return [...this.states];
                }
                flushStates() {
                    this.writeStateManually.now();
                    let e = this.getStates();
                    (e.length > 0 && this.props.onFlushStates(e), (this.states.length = 0));
                }
                writeStateManually = (function (e, t, r, n) {
                    3 == arguments.length && 'boolean' != typeof r && ((n = r), (r = !1));
                    let i = null,
                        a = b;
                    function s() {
                        (null !== i && clearTimeout(i), (i = null));
                    }
                    let o = function () {
                        let o = arguments;
                        ((n = n || this),
                            (a = () => {
                                (s(), (a = b), e.apply(n, o));
                            }),
                            r && null === i && e.apply(n, o),
                            s(),
                            (i = window.setTimeout(function () {
                                (r || e.apply(n, o), (i = null));
                            }, t)));
                    };
                    return (
                        (o.cancel = s),
                        (o.now = () => {
                            a();
                        }),
                        o
                    );
                })(() => {
                    (this.writeState(), this.timer.next());
                }, 0);
                writeState() {
                    let e = this.getPlayerAliveState();
                    f(this.prevState, e) || ((this.prevState = e), this.states.push({ ...e, timestamp: (0, u.Wj)(this.props.getTimestamp()) }));
                }
                getPlayerAliveState() {
                    let e = {
                            ...S,
                            saveData: (function (e = window) {
                                let { navigator: t } = e,
                                    { connection: r = {} } = t;
                                return !!r.saveData;
                            })(),
                            rtt: (function (e = window) {
                                var t;
                                if (!e.navigator) return T;
                                let { connection: r = {} } = e.navigator;
                                return 'number' == typeof (t = r.rtt) && isFinite(t) ? r.rtt : T;
                            })(),
                            ...this.props.stalledController.getStalledHistory(),
                        },
                        t = this.props.getState();
                    if (!t) return { ...e };
                    let {
                            currentTime: r,
                            duration: n,
                            muted: i,
                            playingState: s,
                            remainingBufferedTime: o,
                            adState: l,
                            liveLatency: c,
                            videoTracks: d,
                            audioTrack: h,
                            videoSize: f,
                            isVisible: m,
                            capHeight: p,
                            capWidth: g,
                            containerHeight: E,
                            containerWidth: v,
                            bandwidthEstimate: y,
                            bandwidthSource: I,
                            droppedFrames: b,
                            shownFrames: w,
                            isFullscreen: x,
                            isPictureInPicture: L,
                            volume: N,
                            playbackRate: O,
                        } = t,
                        R = d.find((e) => e.selected),
                        P = [...d].sort((e, t) => t.bitrate - e.bitrate),
                        _ = l?.state === a.PLAYING,
                        A = !_,
                        M = this.props.getWatchedTime();
                    return {
                        ...e,
                        watchedTime: Math.max(0, M),
                        currentTime: isNaN(r) ? (0, u.fP)(0) : Math.max(0, r),
                        duration: isNaN(n) ? (0, u.fP)(0) : Math.max(0, n),
                        isMuted: i,
                        state: s,
                        remainingBufferedTime: o?.total || (0, u.fP)(0),
                        remainingAudioBufferedTime: o?.audio === void 0 ? void 0 : Math.max(0, o.audio),
                        remainingVideoBufferedTime: o?.video === void 0 ? void 0 : Math.max(0, o.video),
                        ad: _ ? l?.type : void 0,
                        liveLatency: void 0 === c ? void 0 : Math.max(0, c),
                        stalledReason: this.props.stalledController.getCurrentStalledReason(),
                        auto: R?.auto === void 0 ? void 0 : R.auto,
                        isVisible: m,
                        bitrate: R?.bitrate ? Math.max(0, Math.floor((0, u.lw)(R.bitrate, 1e3))) : void 0,
                        width: f?.videoWidth === void 0 || isNaN(f?.videoWidth) ? void 0 : Math.max(0, Math.floor((0, u.Lp)(f?.videoWidth))),
                        height: f?.videoHeight === void 0 || isNaN(f?.videoHeight) ? void 0 : Math.max(0, Math.floor((0, u.Lp)(f?.videoHeight))),
                        maxWidth: A && P[0]?.width ? Math.max(0, Math.floor((0, u.Lp)(P[0].width))) : void 0,
                        maxHeight: A && P[0]?.height ? Math.max(0, Math.floor((0, u.Lp)(P[0].height))) : void 0,
                        audioTrack: h?.value || void 0,
                        audioLang: h?.lang || void 0,
                        audioBitrate: h?.bitrate ? Math.max(0, Math.floor((0, u.lw)(h.bitrate, 1e3))) : void 0,
                        capHeight: A && p ? Math.max(0, Math.floor((0, u.Lp)(p))) : void 0,
                        capWidth: A && g ? Math.max(0, Math.floor((0, u.Lp)(g))) : void 0,
                        containerHeight: void 0 !== E ? Math.max(0, Math.floor(E)) : void 0,
                        containerWidth: void 0 !== v ? Math.max(0, Math.floor(v)) : void 0,
                        bandwidthEstimate: void 0 === y || isNaN(y) ? void 0 : Math.max(0, (0, u.bY)(Math.round(y))),
                        bandwidthSource: I || void 0,
                        droppedFrames: void 0 === b ? void 0 : Math.max(0, Math.floor(b)),
                        shownFrames: void 0 === w ? void 0 : Math.max(0, Math.floor(w)),
                        viewport: x ? 'fullscreen' : L ? 'pip' : 'default',
                        volume: N,
                        playbackRate: O,
                    };
                }
            }
            !(function (e) {
                ((e.Init = 'Init'),
                    (e.SetSource = 'SetSource'),
                    (e.Seek = 'Seek'),
                    (e.VideoTrackChange = 'VideoTrackChange'),
                    (e.AudioTrackChange = 'AudioTrackChange'),
                    (e.Recover = 'Recover'),
                    (e.MediaError = 'MediaError'),
                    (e.Offline = 'Offline'),
                    (e.Other = 'Other'),
                    (e.Render = 'Render'),
                    (e.RepresentationsChange = 'RepresentationsChange'),
                    (e.LiveEdge = 'LiveEdge'),
                    (e.AdStart = 'AdStart'),
                    (e.AdOther = 'AdOther'),
                    (e.AdBetween = 'AdBetween'),
                    (e.AdEnd = 'AdEnd'));
            })(o || (o = {}));
            let x = [0, 1, 4, 5],
                L = (0, u.fP)(0),
                N = x.map((e) => (L = (0, u.WQ)((0, u.fP)(e), L))),
                O = (0, u.lw)(N[N.length - 1], 1e3),
                R = [o.Init];
            function P(e) {
                setTimeout(() => {
                    throw e;
                }, 0);
            }
            function _(e, t) {
                try {
                    return e();
                } catch (e) {
                    'function' == typeof t && t(e);
                }
            }
            class A {
                setTimeout(e, t) {
                    if (t <= 0) return void _(e, P);
                    let r = window.setTimeout(e, t);
                    return () => window.clearTimeout(r);
                }
                now() {
                    return (0, v.x3)();
                }
            }
            class M {
                distributionFunction;
                clock;
                stopped = !0;
                cancel;
                lastNow = 0;
                lastKnockTime;
                lastTimeout = 0;
                restTime = 0;
                destroyed = !1;
                isFirstKnock = !0;
                count = 0;
                constructor(e, t = new A()) {
                    ((this.distributionFunction = e), (this.clock = t));
                }
                setEnabled(e) {
                    return (e ? this.start() : this.stop(), this);
                }
                stop() {
                    return (
                        this.stopped ||
                            ((this.stopped = !0), this.cancelTimeout(), (this.restTime = Math.max(this.restTime - (this.clock.now() - this.lastKnockTime), 0))),
                        this
                    );
                }
                start() {
                    return (
                        this.stopped &&
                            !this.destroyed &&
                            ((this.stopped = !1),
                            (this.lastKnockTime = this.clock.now()),
                            this.setTimeout(() => this.knock(this.lastNow + this.lastTimeout), this.restTime)),
                        this
                    );
                }
                destroy() {
                    (this.cancelTimeout(), (this.stopped = !0), (this.destroyed = !0));
                }
                knock(e) {
                    ((this.lastNow = e), (this.lastKnockTime = this.clock.now()), this.isFirstKnock ? (this.isFirstKnock = !1) : this.count++);
                    let t = (this.restTime = this.lastTimeout = this.distributionFunction({ time: e, count: this.count }));
                    this.stopped || this.destroyed || this.setTimeout(() => this.knock(e + t), t);
                }
                cancelTimeout() {
                    (void 0 !== this.cancel && this.cancel(), (this.cancel = void 0));
                }
                setTimeout(e, t) {
                    this.cancelTimeout();
                    let r = this.clock.setTimeout(e, t);
                    void 0 !== r && (this.cancelTimeout(), (this.cancel = r));
                }
            }
            function k(e = v.lh) {
                let t = e();
                return () => (0, u.Wj)(Math.max(0, e() - t));
            }
            function D(e, t) {
                return { reason: e, details: t, getElapsedTime: k() };
            }
            class C {
                isBuffering = !1;
                timer = void 0;
                stalledId = 1;
                stalledDurationRemainder = (0, u.fP)(0);
                getState;
                logEvent;
                expectedStalled = D(o.Init, {});
                currentStalled = void 0;
                stalledTime = (0, u.fP)(0);
                stalledCount = 0;
                constructor({ getState: e, logEvent: t }) {
                    ((this.getState = e), (this.logEvent = t));
                }
                setBuffering(e, t = (0, u.Wj)(0)) {
                    if (e !== this.isBuffering)
                        if (((this.isBuffering = e), this.isBuffering)) {
                            let e = [],
                                r = x.filter((r, n) => {
                                    let i = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled(),
                                        a = N[n];
                                    if ((0, u.Qr)(t, 1e3) > a) {
                                        let e = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        return (
                                            !this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: e, expectedStalled: i, duration: a, getElapsedTime: k() }),
                                            this.send(!1, i, a, e),
                                            !1
                                        );
                                    }
                                    return (e.push(a), !0);
                                });
                            (this.currentStalled && (this.stalledDurationRemainder = (0, u.gL)((0, u.Qr)(t, 1e3), this.currentStalled.duration)),
                                r.length && (r[0] = r[0] - this.stalledDurationRemainder),
                                (this.timer = new M(({ count: t }) => {
                                    let n = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled();
                                    if (t > 0) {
                                        let r = (0, u.fP)(e[t - 1]),
                                            i = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        (!this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: i, expectedStalled: n, duration: r, getElapsedTime: k() }),
                                            this.send(!1, n, r, i));
                                    }
                                    return t >= r.length ? (this.destroyTimer(), 1 / 0) : 1e3 * r[t];
                                })),
                                this.timer.start());
                        } else {
                            if (this.currentStalled) {
                                var r;
                                let { expectedStalled: e, id: t } = this.currentStalled,
                                    n = (0, u.WQ)(
                                        void 0 === (r = this.currentStalled) ? (0, u.fP)(0) : (0, u.WQ)(r.duration, (0, u.Qr)(r.getElapsedTime(), 1e3)),
                                        this.stalledDurationRemainder,
                                    );
                                (this.send(!0, e, (0, u.WQ)(n), t),
                                    (this.currentStalled = void 0),
                                    (this.stalledDurationRemainder = (0, u.fP)(0)),
                                    (this.stalledTime = (0, u.WQ)(n, this.stalledTime)));
                                let i = this.getState()?.adState?.state === a.PLAYING ? o.AdOther : o.Other;
                                this.setExpectedStalled(D(i, void 0));
                            }
                            this.destroyTimer();
                        }
                }
                getStalledHistory() {
                    let { stalledCount: e, stalledTime: t } = this;
                    return { stalledCount: (0, u.Pn)(e), stalledTime: (0, u.PY)(t) };
                }
                clearStalledHistory() {
                    ((this.stalledCount = 0), (this.stalledTime = (0, u.fP)(0)));
                }
                destroy() {
                    this.destroyTimer();
                }
                getCurrentStalledReason() {
                    return this.currentStalled?.expectedStalled.reason;
                }
                setExpectedStalled(e) {
                    this.expectedStalled = e;
                }
                isExpiredStalled(e) {
                    let { getElapsedTime: t, reason: r } = e;
                    return !(R.indexOf(r) > -1) && (!this.currentStalled || this.currentStalled.expectedStalled !== e) && t() >= O;
                }
                getExpectedStalled() {
                    let e = this.expectedStalled;
                    return this.isExpiredStalled(e) ? D(o.Other, void 0) : e;
                }
                destroyTimer() {
                    this.timer && (this.timer.destroy(), (this.timer = void 0));
                }
                send(e, t, r, n) {
                    let { reason: i, details: a } = t,
                        s = { ...a, stalledDuration: r, stalledId: n },
                        o = this.getState();
                    if (o) {
                        let { muted: e, remainingBufferedTime: t, videoTracks: r } = o,
                            n = r.find((e) => e.selected);
                        s = { ...s, remainingBufferedTime: t, videoTrack: n, isMuted: e };
                    }
                    this.logEvent({ name: e ? 'StalledEnd' : 'Stalled', data: s, labels: { reason: i } });
                }
            }
            let F = (e) => ('hidden' in e ? 'hidden' : 'webkitHidden' in e ? 'webkitHidden' : void 0);
            function j(e, t = !0) {
                let r = F(e);
                return r ? !e[r] : t;
            }
            let $ = ['Start', '4SecWatched', '10SecWatched', '20SecWatched', '30SecHeartbeat', 'End'];
            function B(e, t, r) {
                return e && 'number' == typeof e ? e + t - r : e;
            }
            let U = {}.toString,
                W = /\[object (\w+)\]/;
            function G(e) {
                return (
                    'function' == typeof e ||
                    'Function' ===
                        ((e) => {
                            let t = U.call(e);
                            if (!t) return null;
                            let r = t.match(W);
                            if (!r) return null;
                            let n = r[1];
                            return n || null;
                        })(e)
                );
            }
            let H = RegExp(
                    `^https?:\\/\\/([^\\/]+\\.)?(${'boolean' == typeof CLOUD_BUILD && CLOUD_BUILD ? ['video\\.cloud\\.yandex\\.net'] : '(an|strm)\\.yandex\\.(ru|net)|yastatic\\.net|strm-ott\\.akamaized\\.net|cdn\\.ngenix\\.net|strm\\.yandex\\.cdnga\\.net|strm-yandex\\.gcdn\\.co|(widevine|playready|fairplay)-proxy\\.ott\\.yandex\\.ru|drm\\.yandex-team\\.ru'})\\/(?!log|perf|jstracer)`,
                ),
                X = (0, u.Wj)(3e4);
            class V {
                config;
                intervalId = void 0;
                contexts = [];
                constructor(e) {
                    this.config = e;
                }
                attach(e) {
                    e.performance &&
                        (G(e.performance.getEntriesByType) || G(e.performance.webkitGetEntriesByType)) &&
                        (G(e.performance.clearResourceTimings) || G(e.performance.webkitClearResourceTimings)) &&
                        -1 === this.contexts.indexOf(e) &&
                        (0 === this.contexts.length && (this.intervalId = setInterval(() => this.flush(), X)), this.contexts.push(e));
                }
                detach(e) {
                    let t = this.contexts.indexOf(e);
                    (-1 !== t && this.contexts.splice(t, 1), 0 === this.contexts.length && clearInterval(this.intervalId));
                }
                destroy() {
                    (this.flush(), (this.contexts.length = 0), clearInterval(this.intervalId));
                }
                flush() {
                    let e = [],
                        t = this.contexts.map(Y),
                        r = Math.min(...t);
                    (this.contexts.forEach((n, i) => {
                        (function (e) {
                            try {
                                let t = e.performance.getEntriesByType ?? e.performance.webkitGetEntriesByType,
                                    r = e.performance.clearResourceTimings ?? e.performance.webkitClearResourceTimings,
                                    n = t.call(e.performance, 'resource');
                                return (r.call(e.performance), n);
                            } catch {
                                return [];
                            }
                        })(n).forEach((n) => {
                            H.test(n.name) &&
                                e.push(
                                    (function (e, t, r) {
                                        let {
                                            duration: n,
                                            entryType: i,
                                            name: a,
                                            startTime: s,
                                            connectEnd: o,
                                            connectStart: l,
                                            decodedBodySize: u,
                                            domainLookupEnd: c,
                                            domainLookupStart: d,
                                            encodedBodySize: h,
                                            fetchStart: f,
                                            initiatorType: m,
                                            nextHopProtocol: p,
                                            redirectEnd: g,
                                            redirectStart: E,
                                            requestStart: v,
                                            responseEnd: y,
                                            responseStart: I,
                                            secureConnectionStart: S,
                                            transferSize: T,
                                            workerStart: b,
                                            serverTiming: w,
                                            responseStatus: x,
                                            deliveryType: L,
                                            renderBlockingStatus: N,
                                            firstInterimResponseStart: O,
                                        } = e;
                                        return {
                                            duration: n,
                                            entryType: i,
                                            name: a,
                                            encodedBodySize: h,
                                            decodedBodySize: u,
                                            initiatorType: m,
                                            transferSize: T,
                                            nextHopProtocol: p,
                                            serverTiming: w,
                                            responseStatus: x,
                                            deliveryType: L,
                                            renderBlockingStatus: N,
                                            startTime: B(s, t, r),
                                            connectEnd: B(o, t, r),
                                            connectStart: B(l, t, r),
                                            domainLookupEnd: B(c, t, r),
                                            domainLookupStart: B(d, t, r),
                                            fetchStart: B(f, t, r),
                                            redirectEnd: B(g, t, r),
                                            redirectStart: B(E, t, r),
                                            requestStart: B(v, t, r),
                                            responseEnd: B(y, t, r),
                                            responseStart: B(I, t, r),
                                            secureConnectionStart: B(S, t, r),
                                            workerStart: B(b, t, r),
                                            firstInterimResponseStart: B(O, t, r),
                                        };
                                    })(n, t[i], r),
                                );
                        });
                    }),
                        0 !== e.length && this.config.sendLog(e, { perfnow: String((0, v.x3)()), navstart: String(r) }));
                }
            }
            function Y(e) {
                return e.performance?.timeOrigin ?? e.performance?.timing?.navigationStart;
            }
            class K {
                lastUpdate = void 0;
                watchedTime = (0, u.fP)(0);
                calc(e, t, r) {
                    if (void 0 !== this.lastUpdate) {
                        var n, i;
                        let r =
                            ((n = (0, u.Qr)((0, u.gL)(e, this.lastUpdate.videoTime), t)),
                            (i = (0, u.Qr)((0, u.Wj)(this.lastUpdate.getElapsedTime()), 1e3)),
                            (0, u.fP)(Math.max(0, n >= 0 && n <= i + 0.5 ? n : i)));
                        this.watchedTime = (0, u.WQ)(this.watchedTime, r);
                    }
                    this.lastUpdate = r ? { getElapsedTime: k(), videoTime: e } : void 0;
                }
                get() {
                    return this.watchedTime;
                }
                restoreLastUpdate() {
                    this.lastUpdate = void 0;
                }
            }
            class Q {
                getState;
                onChange;
                intervalId = void 0;
                watchedTimeCounter = new K();
                constructor(e, t) {
                    ((this.getState = e), (this.onChange = t), (this.intervalId = setInterval(this.onTick, 100)));
                }
                onTick = () => {
                    let e = this.getState();
                    if (!e) return;
                    let { currentTime: t, playbackRate: r = 1, playingState: n, adState: s } = e,
                        o = s?.state === a.PLAYING;
                    (this.watchedTimeCounter.calc(t, r, n === i.PLAY && !o), this.onChange?.(this.watchedTimeCounter.get()));
                };
                reset() {
                    ((this.watchedTimeCounter = new K()), this.onChange?.(this.watchedTimeCounter.get()));
                }
                getWatchedTime() {
                    return this.watchedTimeCounter.get();
                }
                destroy() {
                    (clearInterval(this.intervalId), (this.intervalId = void 0));
                }
            }
            var q = r(65517);
            function z() {
                return (0, u.Wj)((0, v.x3)());
            }
            class J {
                lastDateNow;
                lastPerformanceNow;
                total = (0, u.Wj)(0);
                interval;
                getTime;
                constructor(e = v.lh) {
                    ((this.getTime = e), (this.lastDateNow = z()), (this.lastPerformanceNow = e()), (this.interval = setInterval(this.now, 1e3)));
                }
                now = () => {
                    let e = z(),
                        t = this.getTime(),
                        r = (0, u.gL)(t, this.lastPerformanceNow),
                        n = (0, u.gL)(e, this.lastDateNow),
                        i = (r) => ((this.lastDateNow = e), (this.lastPerformanceNow = t), (this.total = (0, u.WQ)(this.total, r)), this.total);
                    return i(n <= 0 ? r : n);
                };
                stop() {
                    clearInterval(this.interval);
                }
            }
            r(20454);
            let Z = { enabled: !0, events: [n.Watched10Sec, n.Watched20Sec, n.Heartbeat30Sec] },
                ee = { logVersion: '1.2.0' };
            class et {
                static getVpuid() {
                    return q.$;
                }
                watchedTimeTracker;
                fatalTracker;
                playbackTracker;
                playerAliveController;
                stalledController;
                remoteProgressSavingInfo = Z;
                staticParams = {};
                playerInfo;
                useOfDeprecatedMethodIsLogged = !1;
                timer;
                timerStartTime = Date.now();
                sendLog;
                getState;
                destroyed = !1;
                wasInitBufferingLogged = !1;
                externalStalledDuration = (0, u.Wj)(0);
                initialStalledDuration = (0, u.Wj)(0);
                wasInitBufferingHandled = !1;
                initialStalledTimestamp;
                initialStalledTimestampStop;
                eventIndex = 0;
                reportNumber = 0;
                sourceIndexes = { current: 0, last: 0 };
                constructor({ sendLog: e, playerInfo: t, getState: r }) {
                    ((this.playerInfo = t),
                        (this.sendLog = e),
                        (this.getState = r),
                        (this.playbackTracker = new d({ onEvent: (e) => this.logEvent({ name: e }) })),
                        (this.stalledController = new C({ getState: this.getState, logEvent: (e) => this.logEvent(e) })),
                        (this.watchedTimeTracker = new Q(r, (e) => this.playbackTracker.onWatchedTimeChange(e))),
                        (this.playerAliveController = new w({
                            getState: r,
                            onFlushStates: (e) => this.logEvent({ name: 'PlayerAlive', data: { states: e } }),
                            getTimestamp: () => this.getLogTimestamp(),
                            stalledController: this.stalledController,
                            getWatchedTime: () => this.watchedTimeTracker.getWatchedTime(),
                        })),
                        (this.fatalTracker = new h()),
                        this.initOnVisibilityChangeHandling(),
                        (this.timer = new J()));
                }
                getLogTimestamp() {
                    return Math.round(this.timerStartTime + this.timer.now());
                }
                initOnVisibilityChangeHandling() {
                    let e = (function (e, t) {
                        let r = (function (e) {
                            let t = F(e);
                            if (t) return t.replace(/hidden/i, 'visibilitychange');
                        })(e);
                        if (!r) return b;
                        let n = () => {
                            t(j(e));
                        };
                        return (e.addEventListener(r, n), () => e.removeEventListener(r, n));
                    })(document, (e) => {
                        e || this.playerAliveController.flushStates();
                    });
                    this.playerAliveController.addDestroyHandler(e);
                }
                setStaticParams(e, t) {
                    t ? (this.staticParams = { ...e }) : (this.staticParams = { ...this.staticParams, ...e });
                }
                enableRemoteProgressSaving(e) {
                    this.remoteProgressSavingInfo.enabled = e;
                }
                updateWatchedTime() {
                    (this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({ name: 'DeprecatedTelemetryMethodUsed', data: { method: 'updateWatchedTime' } }), (this.useOfDeprecatedMethodIsLogged = !0)),
                        P(Error('Deprecated method used. Method is Telemetry#updateWatchedTime(). Just remove. Telemetry calculates watchedTime itself now.')));
                }
                setPlayingState(e) {
                    (this.playbackTracker.onPlayingStateChange(e), this.handleInitialBuffering(), e === i.BUFFERING ? this.setBuffering(!0) : this.setBuffering(!1));
                }
                logEvent(e, t) {
                    if (this.destroyed) return;
                    let r = this.getFullEventLog(e, t),
                        n = this.getUrlParams(r.eventType, r.eventName, e.labels);
                    this.sendData(r, n);
                }
                logError({ error: e, labels: t, extraRootFields: r }, n) {
                    if (this.destroyed) return;
                    e.isFatal = this.fatalTracker.checkIsFatal(e.isFatal, this.staticParams.streamUrl);
                    let i = this.getFullErrorLog({ error: e, labels: t, extraRootFields: r, sourceIndex: n }),
                        a = this.getUrlParams(i.eventType, i.eventName, t);
                    this.sendData(i, a);
                }
                getUrlParams(e, t, r) {
                    return { ...r, [this.playerInfo.service]: this.playerInfo.version, [e]: String(t) };
                }
                getFullEventLog(e, t) {
                    let r = this.getState(),
                        n = { ...this.staticParams.labels, ...e.labels, videoType: r?.videoType },
                        i = $.includes(e.name) ? { ...e.data, ...this.getDataToSend(r) } : e.data,
                        a = {};
                    return (
                        this.remoteProgressSavingInfo.events.includes(e.name) && r && (a.playbackProgress = { time: r.currentTime }),
                        {
                            ...ee,
                            ...this.staticParams,
                            ...e.extraRootFields,
                            ...a,
                            ...this.playerInfo,
                            vpuid: q.$,
                            eventType: 'event',
                            eventName: e.name,
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: j(document),
                            eventIndex: this.eventIndex,
                            data: i,
                            labels: n,
                            sourceIndex: t ?? this.sourceIndexes.current,
                        }
                    );
                }
                getFullErrorLog({ error: e, labels: t, extraRootFields: r, sourceIndex: n }) {
                    let i = { ...this.staticParams.labels, ...t };
                    return (
                        (e.details = _(() => ('string' == typeof e.details ? e.details : JSON.stringify(e.details))) || e.details),
                        {
                            ...ee,
                            ...this.playerInfo,
                            ...this.staticParams,
                            ...r,
                            vpuid: q.$,
                            eventType: e.isFatal ? 'fatal' : 'error',
                            eventName: String(e.code),
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: j(document),
                            eventIndex: this.eventIndex,
                            data: e,
                            labels: i,
                            sourceIndex: n ?? this.sourceIndexes.current,
                        }
                    );
                }
                getDataToSend(e) {
                    if (!e) return {};
                    let { duration: t, currentTime: r, utcStartTime: n, isFullscreen: i, volume: a, muted: s } = e;
                    return {
                        watchedSec: this.watchedTimeTracker.getWatchedTime(),
                        duration: isNaN(t) ? void 0 : t,
                        time: r,
                        utcTime: void 0 === n ? void 0 : n + r,
                        isFullscreen: i,
                        isMuted: s || 0 === a,
                    };
                }
                sendData(e, t) {
                    void 0 !== e && (_(() => this.sendLog(e, t), P), this.eventIndex++);
                }
                checkStalledReason(e) {
                    return this.stalledController.getCurrentStalledReason() === e;
                }
                setBuffering(e, t) {
                    this.stalledController.setBuffering(e, t);
                }
                setExpectedBuffering({ reason: e, details: t }) {
                    switch ((this.checkInitBuffering(e), e)) {
                        case o.SetSource:
                            (this.setBuffering(!1), this.clearBufferingHistory());
                            break;
                        case o.Init:
                            break;
                        default:
                            this.checkStalledReason(e) || this.setBuffering(!1);
                    }
                    return this.stalledController.setExpectedStalled(D(e, t));
                }
                checkInitBuffering(e) {
                    this.wasInitBufferingLogged || e === o.Init || this.onInitBuffering();
                }
                setExternalStalledDuration(e) {
                    let t = this.getExpectedStalled();
                    t.reason === o.Init && e && ((t.details = { externalStalledDuration: (0, u.Qr)(e, 1e3) }), this.setExpectedBuffering(t));
                }
                startInitBufferingTimer() {
                    this.initialStalledTimestamp = (0, u.Wj)((0, v.lh)());
                }
                stopInitBufferingTimer() {
                    this.initialStalledTimestampStop = (0, u.Wj)((0, v.lh)());
                }
                onInitBuffering(e) {
                    if (this.wasInitBufferingLogged) return;
                    let t = this.initialStalledTimestamp && !this.initialStalledTimestampStop,
                        r = this.initialStalledTimestamp && this.initialStalledTimestampStop;
                    ((this.initialStalledDuration = t
                        ? (0, u.gL)((0, u.Wj)((0, v.lh)()), this.initialStalledTimestamp)
                        : r
                          ? (0, u.gL)(this.initialStalledTimestampStop, this.initialStalledTimestamp)
                          : (0, u.Wj)(0)),
                        (this.externalStalledDuration = e ?? (0, u.Wj)(0)));
                    let { playingState: n } = this.getState() || {};
                    ('pause' !== n && this.handleInitialBuffering(),
                        (this.wasInitBufferingLogged = !0),
                        (this.initialStalledTimestamp = void 0),
                        (this.initialStalledTimestampStop = void 0));
                }
                handleInitialBuffering() {
                    this.wasInitBufferingHandled ||
                        (this.externalStalledDuration && this.setExternalStalledDuration(this.externalStalledDuration),
                        this.setBuffering(!0, this.initialStalledDuration),
                        (this.wasInitBufferingHandled = !0));
                }
                destroy(e) {
                    (this.stalledController.destroy(),
                        this.playerAliveController.destroy(),
                        this.watchedTimeTracker.destroy(),
                        this.logEvent({ name: 'DestroyPlayer', data: { reason: e?.reason } }),
                        this.timer.stop(),
                        (this.destroyed = !0));
                }
                getExpectedStalled() {
                    return this.stalledController.getExpectedStalled();
                }
                clearBufferingHistory() {
                    return this.stalledController.clearStalledHistory();
                }
                setPreloadDetails() {
                    (this.useOfDeprecatedMethodIsLogged ||
                        (this.logEvent({ name: 'DeprecatedTelemetryMethodUsed', data: { method: 'setPreloadDetails' } }), (this.useOfDeprecatedMethodIsLogged = !0)),
                        P(Error('Deprecated method used. Method is Telemetry#setPreloadDetails(). Just remove it.')));
                }
                writePlayerAliveStateManually() {
                    return this.playerAliveController.writeStateManually();
                }
                flushStates() {
                    return this.playerAliveController.flushStates();
                }
                onCreatePlayer(e, t) {
                    this.logEvent({ name: 'CreatePlayer', data: e, extraRootFields: t });
                }
                onBeforePreload() {
                    return ++this.sourceIndexes.last;
                }
                getSourceIndex() {
                    return this.sourceIndexes.current;
                }
                onBeforeSetSource() {
                    return ++this.sourceIndexes.last;
                }
                onSetSource(e, t, r) {
                    (this.flushStates(),
                        (this.sourceIndexes.current = this.sourceIndexes.last > this.sourceIndexes.current ? this.sourceIndexes.last : ++this.sourceIndexes.last),
                        this.watchedTimeTracker.reset(),
                        r && this.setStaticParams(r),
                        this.logEvent({ name: 'SetSource', data: e }),
                        this.setExpectedBuffering({ reason: o.SetSource, details: t }));
                    let n = this.getState()?.playingState;
                    n !== i.PAUSE && n !== i.END && this.setBuffering(!0);
                }
                sendReportLog(e, t, r = !0) {
                    let n = t ?? this.generateReportId();
                    return (this.logEvent({ name: 'ReportLog', data: { reportId: n, reported: r, reportData: e } }), n);
                }
                generateReportId() {
                    return `${this.playerInfo.vsid}x${this.reportNumber++}`;
                }
                onExpectedBuffering({ reason: e, details: t }) {
                    return (this.checkInitBuffering(e), this.stalledController.setExpectedStalled(D(e, t)));
                }
                onSeek(e) {
                    this.setExpectedBuffering({ reason: o.Seek, details: e });
                }
                onVideoTrackChange(e) {
                    this.setExpectedBuffering({ reason: o.VideoTrackChange, details: e });
                }
                onAudioTrackChange(e) {
                    this.setExpectedBuffering({ reason: o.AudioTrackChange, details: e });
                }
                onRecover(e) {
                    this.setExpectedBuffering({ reason: o.Recover, details: e });
                }
                onMediaError(e) {
                    this.setExpectedBuffering({ reason: o.MediaError, details: e });
                }
                onNetworkStatusChange(e) {
                    this.setExpectedBuffering({ reason: o.Offline, details: e });
                }
                onRepresentationsChange(e) {
                    this.setExpectedBuffering({ reason: o.RepresentationsChange, details: e });
                }
                onLiveEdge(e) {
                    this.setExpectedBuffering({ reason: o.LiveEdge, details: e });
                }
                onAdStart(e) {
                    this.setExpectedBuffering({ reason: o.AdStart, details: e });
                }
                onAdBetween(e) {
                    this.setExpectedBuffering({ reason: o.AdBetween, details: e });
                }
                onAdEnd(e) {
                    this.setExpectedBuffering({ reason: o.AdEnd, details: e });
                }
            }
        },
        91142: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'setAttributesFromProps', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let r = { acceptCharset: 'accept-charset', className: 'class', htmlFor: 'for', httpEquiv: 'http-equiv', noModule: 'noModule' },
                n = ['onLoad', 'onReady', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'stylesheets'];
            function i(e) {
                return ['async', 'defer', 'noModule'].includes(e);
            }
            function a(e, t) {
                for (let [a, s] of Object.entries(t)) {
                    if (!t.hasOwnProperty(a) || n.includes(a) || void 0 === s) continue;
                    let o = r[a] || a.toLowerCase();
                    ('SCRIPT' === e.tagName && i(o) ? (e[o] = !!s) : e.setAttribute(o, String(s)),
                        (!1 === s || ('SCRIPT' === e.tagName && i(o) && (!s || 'false' === s))) && (e.setAttribute(o, ''), e.removeAttribute(o)));
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        96195: (e, t) => {
            'use strict';
            var r;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, r) {
                    return {
                        trackEvent: (n, i) => {
                            let a = { ...i, ...t.getGlobalParams(), ...r.getPlatformParams() };
                            e.trackEvent(n, a);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(r || (t.MiniappConfig = r = {})));
        },
        99163: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => n });
            let n = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
    },
]);
