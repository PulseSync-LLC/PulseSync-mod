(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [951],
    {
        526: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => s });
            var n = r(23198),
                i = r(74631),
                a = r(81517),
                o = r(57159);
            function s(e, t) {
                var r,
                    s = function (r) {
                        var s = r.onOpen,
                            l = r.onClose,
                            u = (0, n.__read)((0, i.useState)(!1), 2),
                            c = u[0],
                            d = u[1],
                            f = (0, i.useCallback)(
                                function () {
                                    (d(!0), null == s || s());
                                },
                                [d, s],
                            ),
                            h = (0, i.useCallback)(
                                function () {
                                    (d(!1), null == l || l());
                                },
                                [d, l],
                            ),
                            m = (0, o.w)((0, n.__assign)((0, n.__assign)({}, r), { visible: c, onOpen: f, onClose: h })),
                            p = m.avatarProps,
                            g = m.contentProps,
                            v = m.dialogProps;
                        return i.createElement(
                            e,
                            (0, n.__assign)({}, r, p),
                            r.children,
                            i.createElement(t, (0, n.__assign)({}, v, { onClose: h }), i.createElement(a.U, (0, n.__assign)({}, g))),
                        );
                    };
                return ((s.displayName = "'withUserID(" + (null != (r = e.displayName) ? r : e) + ")'"), s);
            }
        },
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
                o = r(39004);
            function s(e) {
                var t = (0, o.A)(),
                    r = t.formatMessage,
                    n = t.textComponent,
                    a = void 0 === n ? i.Fragment : n,
                    s = e.id,
                    l = e.description,
                    u = e.defaultMessage,
                    c = e.values,
                    d = e.children,
                    f = e.tagName,
                    h = void 0 === f ? a : f,
                    m = r({ id: s, description: l, defaultMessage: u }, c, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(m) ? m : [m]) : h ? i.createElement(h, null, m) : i.createElement(i.Fragment, null, m);
            }
            s.displayName = 'FormattedMessage';
            var l = i.memo(s, function (e, t) {
                var r = e.values,
                    i = (0, n.__rest)(e, ['values']),
                    o = t.values,
                    s = (0, n.__rest)(t, ['values']);
                return (0, a.bN)(o, r) && (0, a.bN)(i, s);
            });
            l.displayName = 'MemoizedFormattedMessage';
            let u = l;
        },
        13459: (e, t, r) => {
            let n = r(68899);
            e.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
        },
        13933: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => u });
            var n = r(74631),
                i = r(85936),
                a = r(97926);
            r(69827);
            var o = (0, i.cn)('UserID', 'CloseButton'),
                s = function (e) {
                    var t = e.onClick,
                        r = e.colorScheme;
                    return n.createElement(
                        'button',
                        { className: o({ colorScheme: r }), onClick: t, 'aria-label': 'Закрыть', tabIndex: 1 },
                        n.createElement(
                            'svg',
                            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', focusable: 'false', 'aria-hidden': 'true' },
                            n.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z',
                                fill: 'currentColor',
                            }),
                        ),
                    );
                };
            r(33533);
            var l = (0, i.cn)('UserWidget', 'Dialog'),
                u = (0, n.forwardRef)(function (e, t) {
                    var r,
                        i,
                        o = e.visible,
                        u = e.loading,
                        c = e.colorScheme,
                        d = e.platform,
                        f = e.onClose,
                        h = e.className;
                    return (
                        (0, a.H)({ enabled: o && 'touch' === d }),
                        (r = { onScroll: f }),
                        ((i = (0, n.useRef)(r)).current = r),
                        (0, n.useEffect)(function () {
                            var e = function () {
                                var e, t;
                                null == (t = (e = i.current).onScroll) || t.call(e);
                            };
                            if (i.current.onScroll)
                                return (
                                    document.addEventListener('scroll', e),
                                    function () {
                                        document.removeEventListener('scroll', e);
                                    }
                                );
                        }, []),
                        n.createElement(
                            'div',
                            {
                                role: 'dialog',
                                'aria-busy': u,
                                'aria-modal': 'true',
                                className: l('Dialog', { visible: o, loading: u, colorScheme: c, platform: d }, [h]),
                                ref: t,
                            },
                            u && n.createElement(s, { colorScheme: c, onClick: f }),
                            e.children,
                        )
                    );
                });
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
        20319: () => {},
        20454: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => o });
            let n =
                !(function (e, t = !1) {
                    if (!e) return !1;
                    let r = t ? Function.prototype.toString.call(e) : e.toString ? e.toString() : '';
                    return /\[native code\]/.test(r) || /\/\* source code not available \*\//.test(r);
                })(Math.random) || Math.random() === Math.random();
            var i = r(68728);
            let a = ((0, i.x3)() * (0, i.lh)()) % 0x7fffffff,
                o = n
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
                    if (n && t) for (var a = 0, o = n.length; a < o; a++) n[a].fn !== t && n[a].fn._ !== t && i.push(n[a]);
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
                o = r(30236),
                s = r(90967),
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
            function f(e, t) {
                if (!t) return e;
                var r = l.S.formats;
                return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r), e), {
                    date: d(c(r.date, t), c(e.date || {}, t)),
                    time: d(c(r.time, t), c(e.time || {}, t)),
                });
            }
            var h = function (e, t, r, a, o) {
                    var l = e.locale,
                        c = e.formats,
                        d = e.messages,
                        h = e.defaultLocale,
                        m = e.defaultFormats,
                        p = e.fallbackOnEmptyString,
                        g = e.onError,
                        v = e.timeZone,
                        E = e.defaultRichTextElements;
                    void 0 === r && (r = { id: '' });
                    var y = r.id,
                        S = r.defaultMessage;
                    (0, i.V1)(
                        !!y,
                        '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue',
                    );
                    var I = String(y),
                        b = d && Object.prototype.hasOwnProperty.call(d, I) && d[I];
                    if (Array.isArray(b) && 1 === b.length && b[0].type === s.TYPE.literal) return b[0].value;
                    if (!a && b && 'string' == typeof b && !E) return b.replace(/'\{(.*?)\}'/gi, '{$1}');
                    if (((a = (0, n.__assign)((0, n.__assign)({}, E), a || {})), (c = f(c, v)), (m = f(m, v)), !b)) {
                        if (!1 === p && '' === b) return b;
                        if (((!S || (l && l.toLowerCase() !== h.toLowerCase())) && g(new u.sb(r, l)), S))
                            try {
                                var w = t.getMessageFormat(S, h, m, o);
                                return w.format(a);
                            } catch (e) {
                                return (
                                    g(new u.Ho('Error formatting default message for: "'.concat(I, '", rendering default message verbatim'), l, r, e)),
                                    'string' == typeof S ? S : I
                                );
                            }
                        return I;
                    }
                    try {
                        var w = t.getMessageFormat(b, l, c, (0, n.__assign)({ formatters: t }, o || {}));
                        return w.format(a);
                    } catch (e) {
                        g(new u.Ho('Error formatting message: "'.concat(I, '", using ').concat(S ? 'default message' : 'id', ' as fallback.'), l, r, e));
                    }
                    if (S)
                        try {
                            var w = t.getMessageFormat(S, h, m, o);
                            return w.format(a);
                        } catch (e) {
                            g(new u.Ho('Error formatting the default message for: "'.concat(I, '", rendering message verbatim'), l, r, e));
                        }
                    return 'string' == typeof b ? b : 'string' == typeof S ? S : I;
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
                var o = e.locale,
                    s = e.formats,
                    l = e.onError,
                    u = e.timeZone;
                void 0 === a && (a = {});
                var c = a.format,
                    d = (0, n.__assign)((0, n.__assign)({}, u && { timeZone: u }), c && (0, i.F3)(s, t, c, l)),
                    f = (0, i.J9)(a, m, d);
                return (
                    'time' !== t ||
                        f.hour ||
                        f.minute ||
                        f.second ||
                        f.timeStyle ||
                        f.dateStyle ||
                        (f = (0, n.__assign)((0, n.__assign)({}, f), { hour: 'numeric', minute: 'numeric' })),
                    r(o, f)
                );
            }
            function g(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    o = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'date', t, void 0 === a ? {} : a).format(o);
                } catch (t) {
                    e.onError(new u.pg('Error formatting date.', e.locale, t));
                }
                return String(o);
            }
            function v(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    o = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'time', t, void 0 === a ? {} : a).format(o);
                } catch (t) {
                    e.onError(new u.pg('Error formatting time.', e.locale, t));
                }
                return String(o);
            }
            function E(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    o = r[2],
                    s = 'string' == typeof i ? new Date(i || 0) : i,
                    l = 'string' == typeof a ? new Date(a || 0) : a;
                try {
                    return p(e, 'dateTimeRange', t, void 0 === o ? {} : o).formatRange(s, l);
                } catch (t) {
                    e.onError(new u.pg('Error formatting date time range.', e.locale, t));
                }
                return String(s);
            }
            function y(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    o = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'date', t, void 0 === a ? {} : a).formatToParts(o);
                } catch (t) {
                    e.onError(new u.pg('Error formatting date.', e.locale, t));
                }
                return [];
            }
            function S(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    o = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'time', t, void 0 === a ? {} : a).formatToParts(o);
                } catch (t) {
                    e.onError(new u.pg('Error formatting time.', e.locale, t));
                }
                return [];
            }
            var I = r(69044),
                b = ['style', 'type', 'fallback', 'languageDisplay'];
            function w(e, t, r, n) {
                var a = e.locale,
                    o = e.onError;
                Intl.DisplayNames ||
                    o(
                        new I.IF(
                            'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
                            I.O4.MISSING_INTL_API,
                        ),
                    );
                var s = (0, i.J9)(n, b);
                try {
                    return t(a, s).of(r);
                } catch (e) {
                    o(new u.pg('Error formatting display name.', a, e));
                }
            }
            var T = ['type', 'style'],
                O = Date.now();
            function L(e, t, r, n) {
                void 0 === n && (n = {});
                var i = _(e, t, r, n).reduce(function (e, t) {
                    var r = t.value;
                    return ('string' != typeof r ? e.push(r) : 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += r) : e.push(r), e);
                }, []);
                return 1 === i.length ? i[0] : 0 === i.length ? '' : i;
            }
            function _(e, t, r, a) {
                var o = e.locale,
                    s = e.onError;
                (void 0 === a && (a = {}),
                    Intl.ListFormat ||
                        s(
                            new I.IF(
                                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                                I.O4.MISSING_INTL_API,
                            ),
                        ));
                var l = (0, i.J9)(a, T);
                try {
                    var c = {},
                        d = r.map(function (e, t) {
                            if ('object' == typeof e) {
                                var r = ''.concat(O, '_').concat(t, '_').concat(O);
                                return ((c[r] = e), r);
                            }
                            return String(e);
                        });
                    return t(o, l)
                        .formatToParts(d)
                        .map(function (e) {
                            return 'literal' === e.type ? e : (0, n.__assign)((0, n.__assign)({}, e), { value: c[e.value] || e.value });
                        });
                } catch (e) {
                    s(new u.pg('Error formatting list.', o, e));
                }
                return r;
            }
            var x = [
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
            function N(e, t, r) {
                var n = e.locale,
                    a = e.formats,
                    o = e.onError;
                void 0 === r && (r = {});
                var s = r.format,
                    l = (s && (0, i.F3)(a, 'number', s, o)) || {};
                return t(n, (0, i.J9)(r, x, l));
            }
            function R(e, t, r, n) {
                void 0 === n && (n = {});
                try {
                    return N(e, t, n).format(r);
                } catch (t) {
                    e.onError(new u.pg('Error formatting number.', e.locale, t));
                }
                return String(r);
            }
            function P(e, t, r, n) {
                void 0 === n && (n = {});
                try {
                    return N(e, t, n).formatToParts(r);
                } catch (t) {
                    e.onError(new u.pg('Error formatting number.', e.locale, t));
                }
                return [];
            }
            var C = ['type'];
            function k(e, t, r, n) {
                var a = e.locale,
                    o = e.onError;
                (void 0 === n && (n = {}),
                    Intl.PluralRules ||
                        o(
                            new I.IF(
                                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                I.O4.MISSING_INTL_API,
                            ),
                        ));
                var s = (0, i.J9)(n, C);
                try {
                    return t(a, s).select(r);
                } catch (e) {
                    o(new u.pg('Error formatting plural.', a, e));
                }
                return 'other';
            }
            var M = ['numeric', 'style'];
            function A(e, t, r, n, a) {
                (void 0 === a && (a = {}),
                    n || (n = 'second'),
                    Intl.RelativeTimeFormat ||
                        e.onError(
                            new I.IF(
                                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                                I.O4.MISSING_INTL_API,
                            ),
                        ));
                try {
                    var o, s, l, c, d, f;
                    return ((o = a),
                    (s = e.locale),
                    (l = e.formats),
                    (c = e.onError),
                    void 0 === o && (o = {}),
                    (f = (!!(d = o.format) && (0, i.F3)(l, 'relative', d, c)) || {}),
                    t(s, (0, i.J9)(o, M, f))).format(r, n);
                } catch (t) {
                    e.onError(new u.pg('Error formatting relative time.', e.locale, t));
                }
                return String(r);
            }
            var D = r(25417);
            function j(e) {
                return e
                    ? Object.keys(e).reduce(function (t, r) {
                          var n = e[r];
                          return ((t[r] = (0, D.RK)(n) ? (0, o.yU)(n) : n), t);
                      }, {})
                    : e;
            }
            var F = function (e, t, r, i) {
                    for (var a = [], s = 4; s < arguments.length; s++) a[s - 4] = arguments[s];
                    var l = j(i),
                        u = h.apply(void 0, (0, n.__spreadArray)([e, t, r, l], a, !1));
                    return Array.isArray(u) ? (0, o.SP)(u) : u;
                },
                $ = function (e, t) {
                    var r,
                        a,
                        s,
                        l,
                        c,
                        d,
                        f,
                        m = e.defaultRichTextElements,
                        p = (0, n.__rest)(e, ['defaultRichTextElements']),
                        I = j(m),
                        b =
                            ((r = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, o.JF), p), { defaultRichTextElements: I })),
                            (a = (0, i.GT)(t)),
                            (l = (s = (0, n.__assign)((0, n.__assign)({}, i.JF), r)).locale),
                            (c = s.defaultLocale),
                            (d = s.onError),
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
                                  (s.locale = s.defaultLocale || 'en')),
                            s.onWarn &&
                                s.defaultRichTextElements &&
                                'string' == typeof (f = s.messages || {})[Object.keys(f)[0]] &&
                                s.onWarn(
                                    '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution',
                                ),
                            (0, n.__assign)((0, n.__assign)({}, s), {
                                formatters: a,
                                formatNumber: R.bind(null, s, a.getNumberFormat),
                                formatNumberToParts: P.bind(null, s, a.getNumberFormat),
                                formatRelativeTime: A.bind(null, s, a.getRelativeTimeFormat),
                                formatDate: g.bind(null, s, a.getDateTimeFormat),
                                formatDateToParts: y.bind(null, s, a.getDateTimeFormat),
                                formatTime: v.bind(null, s, a.getDateTimeFormat),
                                formatDateTimeRange: E.bind(null, s, a.getDateTimeFormat),
                                formatTimeToParts: S.bind(null, s, a.getDateTimeFormat),
                                formatPlural: k.bind(null, s, a.getPluralRules),
                                formatMessage: h.bind(null, s, a),
                                $t: h.bind(null, s, a),
                                formatList: L.bind(null, s, a.getListFormat),
                                formatListToParts: _.bind(null, s, a.getListFormat),
                                formatDisplayName: w.bind(null, s, a.getDisplayNames),
                            })),
                        T = {
                            locale: b.locale,
                            timeZone: b.timeZone,
                            fallbackOnEmptyString: b.fallbackOnEmptyString,
                            formats: b.formats,
                            defaultLocale: b.defaultLocale,
                            defaultFormats: b.defaultFormats,
                            messages: b.messages,
                            onError: b.onError,
                            defaultRichTextElements: I,
                        };
                    return (0, n.__assign)((0, n.__assign)({}, b), { formatMessage: F.bind(null, T, b.formatters), $t: F.bind(null, T, b.formatters) });
                },
                U = r(9406);
            function B(e) {
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
                    return ((t.cache = (0, i.MT)()), (t.state = { cache: t.cache, intl: $(B(t.props), t.cache), prevConfig: B(t.props) }), t);
                }
                return (
                    (0, n.__extends)(t, e),
                    (t.getDerivedStateFromProps = function (e, t) {
                        var r = t.prevConfig,
                            n = t.cache,
                            i = B(e);
                        return (0, o.bN)(r, i) ? null : { intl: $(i, n), prevConfig: i };
                    }),
                    (t.prototype.render = function () {
                        return ((0, o.HM)(this.state.intl), a.createElement(U.Kq, { value: this.state.intl }, this.props.children));
                    }),
                    (t.displayName = 'IntlProvider'),
                    (t.defaultProps = o.JF),
                    t
                );
            })(a.PureComponent);
        },
        22413: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => a, TF: () => s, hZ: () => o });
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
            function o(e, t, r) {
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
            function s(e, t) {
                o(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        24450: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => i });
            var n = r(74631),
                i = r(84932).O ? n.useLayoutEffect : n.useEffect;
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
        26895: (e, t) => {
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
        27930: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { User: () => m, UserBase: () => f }));
            var n = r(74631),
                i = r(85936),
                a = r(62596),
                o = r(23198),
                s = function (e, t, r) {
                    return (void 0 === t && (t = '0/0-0'), 'prod_yateam' === e)
                        ? 'https://center.yandex-team.ru/api/v1/user/' + ('0/0-0' === t ? '404' : t) + '/avatar/' + (r ? '85' : '42') + '.jpg'
                        : ('test' !== e ? 'https://avatars.mds.yandex.net' : 'https://avatars.mdst.yandex.net') +
                              '/get-yapic/' +
                              t +
                              '/' +
                              (r ? 'islands-retina-middle' : 'islands-middle');
                };
            r(28291);
            var l = (0, i.cn)('UserID', 'Avatar'),
                u = function (e) {
                    var t,
                        r,
                        i,
                        a,
                        u = e.env,
                        c = e.avatarId,
                        d = e.plus,
                        f = e.child,
                        h = e.colorScheme,
                        m = e.className,
                        p = (0, o.__read)((0, n.useState)(!1), 2),
                        g = p[0],
                        v = p[1],
                        E =
                            ((r = (t = { avatarId: c, env: u }).env),
                            (i = t.avatarId),
                            {
                                src: (a = (0, n.useMemo)(
                                    function () {
                                        return s(r, i, !1);
                                    },
                                    [r, i],
                                )),
                                srcSet:
                                    a +
                                    ' 1x, ' +
                                    (0, n.useMemo)(
                                        function () {
                                            return s(r, i, !0);
                                        },
                                        [r, i],
                                    ) +
                                    ' 2x',
                            }),
                        y = E.src,
                        S = E.srcSet,
                        I = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(
                            function () {
                                var e = I.current;
                                window && f && e && v(e.getBoundingClientRect().width <= 36);
                            },
                            [f, I],
                        ),
                        n.createElement(
                            'div',
                            { className: l({ child: f, plus: d, small: g, dark: 'dark' === h }, [m]), ref: I },
                            n.createElement('img', { src: y, className: 'UserID-Avatar-Image', srcSet: S }),
                            f &&
                                n.createElement(
                                    'svg',
                                    { className: 'UserID-Avatar-ChildStroke', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 300 300' },
                                    n.createElement('path', {
                                        fillRule: 'evenodd',
                                        clipRule: 'evenodd',
                                        d: 'M165.9 37.9822L166.068 38.0049C166.221 38.0257 166.442 38.0562 166.726 38.0968C167.295 38.1778 168.118 38.2987 169.162 38.4618C171.249 38.7878 174.224 39.283 177.813 39.9651C184.975 41.3261 194.666 43.4461 204.678 46.4778C214.632 49.492 225.211 53.4982 233.986 58.7338C242.568 63.8543 250.611 70.8545 253.512 80.3646C262.231 108.946 272.638 153.705 267.746 188.864C263.821 217.084 243.295 239.946 214.374 255.633C185.337 271.383 152.717 277.077 132.993 274.341C113.268 271.605 83.4377 257.247 59.8001 234.191C36.2561 211.225 22.7482 183.642 26.674 155.422C33.0239 109.778 55.8032 71.8059 70.7041 51.2431C76.2121 43.6422 85.9125 39.8089 95.3615 37.7283C105.121 35.5793 116.278 34.95 126.593 35.003C136.965 35.0564 146.789 35.8036 153.998 36.5322C157.61 36.8972 160.584 37.2595 162.664 37.5319C163.704 37.6681 164.522 37.782 165.085 37.8627C165.367 37.903 165.585 37.9351 165.736 37.9575L165.9 37.9822ZM210.975 249.385C238.745 234.322 257.19 213.071 260.694 187.886C265.355 154.381 255.388 110.913 246.701 82.4364C238.203 54.5778 164.895 45.0216 164.895 45.0216C164.895 45.0216 92.1316 33.8026 76.4727 55.4113C61.8934 75.5303 39.8488 112.394 33.7267 156.401C30.2229 181.586 42.1687 207.053 64.7756 229.104C87.5594 251.328 116.05 264.812 133.973 267.298C151.895 269.784 182.987 264.566 210.975 249.385Z',
                                    }),
                                ),
                        )
                    );
                };
            ((u.displayName = 'UserIDAvatar'), r(93175));
            var c = function (e) {
                var t = e.children,
                    r = e.fetchMail,
                    i = e.tld,
                    a = e.showCounter,
                    s = e.counterVariant,
                    l = void 0 === s ? 'number' : s,
                    u = e.colorScheme,
                    c = (0, o.__read)((0, n.useState)(0), 2),
                    d = c[0],
                    f = c[1];
                (0, n.useEffect)(
                    function () {
                        r &&
                            a &&
                            fetch('https://mail.yandex.' + i + '/api/v2/userid/counters?silent', { credentials: 'include' })
                                .then(function (e) {
                                    return e.json();
                                })
                                .then(function (e) {
                                    return f(e.counters.unread);
                                })
                                .catch(function (e) {});
                    },
                    [i, r, a],
                );
                var h = r && d > 0 ? Math.min(d, 99) : void 0,
                    m = !!(r && h && d > h),
                    p = h && a ? '' + h + (m ? '+' : '') : null,
                    g = r || a,
                    v = ['UserID-Badge-Dot', 'UserID-Badge-Dot_colorScheme_' + u, 'UserID-Badge-Dot_variant_' + l].join(' ');
                return n.createElement('div', { className: 'UserID-Badge' }, t, g && n.createElement('div', { className: v }, 'number' === l && p));
            };
            ((c.displayName = 'UserIDBadge'), r(42183));
            var d = (0, i.cn)('UserID', 'Wrapper'),
                f = (0, n.forwardRef)(function (e, t) {
                    var r = e.tld,
                        i = e.tabIndex,
                        o = e.children,
                        s = e.env,
                        l = e.colorScheme,
                        f = e.userData,
                        h = e.onClick,
                        m = e.onPointerEnter,
                        p = e.className,
                        g = e.fetchMail,
                        v = e.showCounter,
                        E = e.counterVariant,
                        y = e.visible,
                        S = e.ariaLabel,
                        I = e.avatarSize,
                        b = e.platform,
                        w = e.beforeAvatar,
                        T = e.afterAvatar,
                        O = f || {},
                        L = O.child,
                        _ = O.plus,
                        x = O.avatarId,
                        N = (0, n.useRef)(null);
                    return (
                        (0, a.N)(N, t),
                        n.createElement(
                            'div',
                            { className: d({ child: L, plus: _, default: !_ }, [p]), style: null !== I ? { '--user-id-size': (I || 42) + 'px' } : void 0 },
                            n.createElement(
                                'button',
                                {
                                    'aria-expanded': y,
                                    'aria-haspopup': !0,
                                    'aria-label': S || 'Ваш профиль',
                                    className: 'UserID-Account',
                                    ref: N,
                                    role: 'button',
                                    tabIndex: void 0 === i ? 0 : i,
                                    onClick: h,
                                    onPointerEnter: m,
                                },
                                w,
                                n.createElement(
                                    c,
                                    {
                                        fetchMail: g && 'test' !== s,
                                        counterVariant: E,
                                        tld: void 0 === r ? 'ru' : r,
                                        colorScheme: l,
                                        showCounter: 'touch' !== b && (g || !0 === v),
                                    },
                                    n.createElement(u, { env: s, avatarId: x, plus: _, child: L, colorScheme: l }),
                                ),
                                T,
                            ),
                            o,
                        )
                    );
                });
            f.displayName = 'UserBase';
            var h = r(13933),
                m = (0, r(526).B)(f, h.l);
        },
        28291: () => {},
        30956: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { useUserID: () => n.w }));
            var n = r(57159);
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
                        return E;
                    },
                    MissingStaticPage: function () {
                        return v;
                    },
                    NormalizeError: function () {
                        return p;
                    },
                    PageNotFoundError: function () {
                        return g;
                    },
                    SP: function () {
                        return f;
                    },
                    ST: function () {
                        return h;
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
                        return o;
                    },
                    getURL: function () {
                        return s;
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
            function o() {
                let { protocol: e, hostname: t, port: r } = window.location;
                return e + '//' + t + (r ? ':' + r : '');
            }
            function s() {
                let { href: e } = window.location,
                    t = o();
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
            let f = 'undefined' != typeof performance,
                h = f && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
            class m extends Error {}
            class p extends Error {}
            class g extends Error {
                constructor(e) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e));
                }
            }
            class v extends Error {
                constructor(e, t) {
                    (super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t));
                }
            }
            class E extends Error {
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
        33533: () => {},
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
                        return s;
                    },
                    urlObjectKeys: function () {
                        return o;
                    },
                }));
            let n = r(78868)._(r(31935)),
                i = /https?|ftp|gopher|file/;
            function a(e) {
                let { auth: t, hostname: r } = e,
                    a = e.protocol || '',
                    o = e.pathname || '',
                    s = e.hash || '',
                    l = e.query || '',
                    u = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (u = t + e.host) : r && ((u = t + (~r.indexOf(':') ? '[' + r + ']' : r)), e.port && (u += ':' + e.port)),
                    l && 'object' == typeof l && (l = String(n.urlQueryToSearchParams(l))));
                let c = e.search || (l && '?' + l) || '';
                return (
                    a && !a.endsWith(':') && (a += ':'),
                    e.slashes || ((!a || i.test(a)) && !1 !== u) ? ((u = '//' + (u || '')), o && '/' !== o[0] && (o = '/' + o)) : u || (u = ''),
                    s && '#' !== s[0] && (s = '#' + s),
                    c && '?' !== c[0] && (c = '?' + c),
                    '' + a + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace('#', '%23')) + s
                );
            }
            let o = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function s(e) {
                return a(e);
            }
        },
        37953: (e) => {
            'use strict';
            e.exports =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array
                    ? function (e, t) {
                          return ((e.__proto__ = t), e);
                      }
                    : function (e, t) {
                          for (var r in t) Object.prototype.hasOwnProperty.call(e, r) || (e[r] = t[r]);
                          return e;
                      });
        },
        40637: (e, t, r) => {
            let n = r(13459);
            e.exports = (e, t, r) => n(t, e, r);
        },
        40788: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { Content: () => n.U, cnUserID: () => n.K }));
            var n = r(81517);
        },
        42183: () => {},
        43391: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => d });
            var n = r(26256);
            let i = ['', '-webkit-', '-ms-', '-moz-', '-o-'],
                a = {}.toString,
                o = /\[object (\w+)\]/;
            function s(e, t) {
                var r;
                if (
                    'function' != typeof (r = e.matchMedia) &&
                    'Function' !==
                        ((e) => {
                            let t = a.call(e);
                            if (!t) return null;
                            let r = t.match(o);
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
                                                            s(e, l) ||
                                                            s(e, u) ||
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
        46450: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    bindSnapshot: function () {
                        return o;
                    },
                    createAsyncLocalStorage: function () {
                        return a;
                    },
                    createSnapshot: function () {
                        return s;
                    },
                }));
            let r = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class n {
                disable() {
                    throw r;
                }
                getStore() {}
                run() {
                    throw r;
                }
                exit() {
                    throw r;
                }
                enterWith() {
                    throw r;
                }
                static bind(e) {
                    return e;
                }
            }
            let i = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function a() {
                return i ? new i() : new n();
            }
            function o(e) {
                return i ? i.bind(e) : n.bind(e);
            }
            function s() {
                return i
                    ? i.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        49971: (e, t, r) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(25839),
                r(71910),
                r(65780),
                r(4865));
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
        53855: (e, t) => {
            'use strict';
            t.cn = (function (e) {
                function t(t, i, a, o) {
                    var s = i ? r + t + e.e + i : r + t,
                        l = s;
                    if (a) {
                        var u = ' ' + l + e.m;
                        for (var c in a)
                            if (a.hasOwnProperty(c)) {
                                var d = a[c];
                                !0 === d ? (l += u + c) : d && (l += u + c + n + d);
                            }
                    }
                    if (void 0 !== o)
                        for (var f = 0, h = o.length; f < h; f++) {
                            var m = o[f];
                            if (m && 'string' == typeof m.valueOf())
                                for (var p = m.valueOf().split(' '), g = 0; g < p.length; g++) {
                                    var v = p[g];
                                    v !== s && (l += ' ' + v);
                                }
                        }
                    return l;
                }
                var r = e.n || '',
                    n = e.v || e.m;
                return function (e, r) {
                    return function (n, i, a) {
                        return 'string' == typeof n ? (Array.isArray(i) ? t(e, n, void 0, i) : t(e, n, i, a)) : t(e, r, n, i);
                    };
                };
            })({ e: '-', m: '_' });
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
        56111: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { useIsomorphicLayoutEffect: () => n.E }));
            var n = r(24450);
        },
        56443: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { withUserID: () => n.B }));
            var n = r(526);
        },
        57159: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => _ });
            var n,
                i,
                a = r(23198),
                o = r(74631),
                s = r(62596),
                l = r(24450),
                u = [],
                c = null,
                d = null;
            function f() {
                return u[u.length - 1];
            }
            function h(e, t, r) {
                var n,
                    i,
                    a = f();
                a &&
                    a.onClose &&
                    (!r || r === a.closeStrategy) &&
                    (('click' === t &&
                        ((n = a.refs),
                        (i = e.target),
                        n.some(function (e) {
                            return e.current instanceof HTMLElement && e.current.contains(i);
                        }))) ||
                        a.onClose({ nativeEvent: e, source: t }));
            }
            function m(e) {
                var t = e.key;
                ('Escape' === t || 'Esc' === t) && h(e, 'esc');
            }
            function p(e) {
                ((c = e.target), (d = f()), h(e, 'click', 'pressdown'));
            }
            function g(e) {
                var t = c;
                c = null;
                var r = d;
                ((d = null), e.button > 0 || r !== f() || (t === e.target && h(e, 'click', 'pressup')));
            }
            var v = Object.freeze({
                    count: function () {
                        return u.length;
                    },
                    addOverlay: function (e) {
                        (0 === u.length &&
                            (document.addEventListener('keyup', m), document.addEventListener('pointerdown', p, !0), document.addEventListener('click', g, !0)),
                            u.push(e));
                    },
                    removeOverlay: function (e) {
                        (u.splice(u.indexOf(e), 1),
                            0 === u.length &&
                                (document.removeEventListener('keyup', m),
                                document.removeEventListener('pointerdown', p, !0),
                                document.removeEventListener('click', g, !0)));
                    },
                    getTopOverlayOptions: f,
                }),
                E = Date.now(),
                y = 'undefined' != typeof performance ? performance : null;
            (null == (n = null == y ? void 0 : y.timing) ? void 0 : n.navigationStart) &&
                (E = null == (i = null == performance ? void 0 : performance.timing) ? void 0 : i.navigationStart);
            var S =
                    y && 'function' == typeof y.now
                        ? function () {
                              return y.now();
                          }
                        : 'function' == typeof Date.now
                          ? function () {
                                return Date.now() - E;
                            }
                          : function () {
                                return new Date().getTime() - E;
                            },
                I = 'undefined' != typeof window,
                b = function () {
                    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                },
                w = function (e) {
                    var t = e.enabled,
                        r = e.onHeightChange,
                        n = (0, a.__read)((0, o.useState)(I ? b() : void 0), 2),
                        i = n[0],
                        s = n[1],
                        u = (0, o.useCallback)(
                            function () {
                                var e = b();
                                i !== e && (s(b()), r(e));
                            },
                            [i, r],
                        );
                    (0, l.E)(
                        function () {
                            if (t)
                                return (
                                    window.addEventListener('resize', u),
                                    function () {
                                        window.removeEventListener('resize', u);
                                    }
                                );
                        },
                        [u, t],
                    );
                },
                T = function (e) {
                    var t = e.touchBreakpointWidth,
                        r = void 0 === t ? 520 : t,
                        n = e.platform,
                        i = void 0 === n ? 'auto' : n,
                        s = (0, a.__read)((0, o.useState)(), 2),
                        u = s[0],
                        c = s[1];
                    return (
                        (0, o.useEffect)(
                            function () {
                                if ('auto' !== i) return void c(i);
                                I && c(window.matchMedia('(max-width: ' + r + 'px)').matches ? 'touch' : 'desktop');
                            },
                            [r, i],
                        ),
                        (0, l.E)(
                            function () {
                                if (I && 'auto' === i) {
                                    var e = window.matchMedia('(max-width: ' + r + 'px)');
                                    return (
                                        t(e),
                                        e.addEventListener ? e.addEventListener('change', t) : e.addListener(t),
                                        function () {
                                            e.removeEventListener ? e.removeEventListener('change', t) : e.removeListener(t);
                                        }
                                    );
                                }
                                function t(e) {
                                    e.matches ? c('touch') : c('desktop');
                                }
                            },
                            [u, c, r],
                        ),
                        u
                    );
                },
                O = ['tr', 'am', 'ge'],
                L = ['il'];
            function _(e) {
                var t,
                    r,
                    n,
                    i,
                    u,
                    c,
                    d,
                    f,
                    h,
                    m,
                    p,
                    g,
                    E,
                    y,
                    _,
                    x = e.avatarRef,
                    N = e.avatarSize,
                    R = void 0 === N ? [42, 22] : N,
                    P = e.colorScheme,
                    C = void 0 === P ? 'light' : P,
                    k = e.dialogClassName,
                    M = e.dialogRef,
                    A = e.dir,
                    D = void 0 === A ? 'ltr' : A,
                    j = e.env,
                    F = void 0 === j ? 'prod' : j,
                    $ = e.essentialRef,
                    U = e.features,
                    B = e.fetchUserData,
                    W = e.host,
                    H = e.iframeRef,
                    G = e.lang,
                    X = e.onClose,
                    Y = e.onLoad,
                    V = e.onMenuItemClick,
                    K = e.onOpen,
                    z = e.onThemeChange,
                    J = e.onLocaleChange,
                    q = e.platform,
                    Q = e.preload,
                    Z = void 0 !== Q && Q,
                    ee = e.project,
                    et = e.queryParams,
                    er = e.dynamicParams,
                    en = e.retpath,
                    ei = e.rpcHandlers,
                    ea = e.theme,
                    eo = e.tld,
                    es = e.touchBreakpointWidth,
                    el = e.userData,
                    eu = e.visible,
                    ec = void 0 !== eu && eu,
                    ed = (0, o.useRef)({}),
                    ef = (0, o.useRef)(null),
                    eh = (0, o.useRef)(null),
                    em = (0, o.useRef)(null),
                    ep =
                        ((t = void 0 === eo ? 'ru' : eo),
                        (0, o.useMemo)(
                            function () {
                                return O.includes(t) ? 'com.' + t : L.includes(t) ? 'co.' + t : t;
                            },
                            [t],
                        ));
                ((0, s.N)(ef, x || (0, o.createRef)()), (eh = null != M ? M : eh), (em = null != H ? H : em));
                var eg = (0, a.__read)((0, o.useState)(!0), 2),
                    ev = eg[0],
                    eE = eg[1],
                    ey = (0, o.useMemo)(
                        function () {
                            return I ? en || location.href : en;
                        },
                        [en],
                    ),
                    eS = (0, a.__read)((0, o.useState)(Z), 2),
                    eI = eS[0],
                    eb = eS[1],
                    ew = (0, o.useRef)({ colorScheme: C, theme: ea, retpath: ey }),
                    eT = (0, o.useMemo)(
                        function () {
                            if (W) return 'https://' + W;
                            if ('prod_yateam' === F) return 'https://user-id.yandex-team.ru';
                            if (I) {
                                var e = new URL(location.href).searchParams.get('user_id_host');
                                if (e) return 'https://' + e;
                            }
                            return 'https://yandex.' + ep;
                        },
                        [W, ep, F],
                    ),
                    eO = (0, o.useMemo)(
                        function () {
                            eI ||
                                (ew.current.colorScheme === C && ew.current.theme === ea && ew.current.retpath === ey) ||
                                (ew.current = { colorScheme: C, theme: ea, retpath: ey });
                            var e = new URL('user-id', eT);
                            if (
                                (ew.current.retpath && e.searchParams.set('encodedRetpath', encodeURIComponent(ew.current.retpath)),
                                ew.current.colorScheme && e.searchParams.set('colorScheme', ew.current.colorScheme),
                                ew.current.theme && e.searchParams.set('theme', ew.current.theme),
                                G && e.searchParams.set('l10n', G),
                                Array.isArray(U))
                            ) {
                                var t = U.join(',');
                                e.searchParams.set('exp_flags', t);
                            }
                            for (var r in (ee && e.searchParams.set('project', ee), F && e.searchParams.set('env', F), e.searchParams.set('dir', D), et))
                                e.searchParams.set(r, et[r]);
                            for (var r in er) e.searchParams.set(r, er[r]);
                            return e.toString();
                        },
                        [eT, U, ee, et, er, C, ea, ey, eI, F, D, G],
                    );
                (0, o.useEffect)(
                    function () {
                        !eI && (Z || B) && eb(!0);
                    },
                    [eI, Z, B],
                );
                var eL = T({ platform: q, touchBreakpointWidth: es }),
                    e_ = (0, o.useCallback)(
                        function () {
                            eI || eb(!0);
                        },
                        [eI],
                    ),
                    ex = (0, o.useMemo)(
                        function () {
                            return null === R ? null : 'number' == typeof R ? R : 'touch' === eL ? R[1] : R[0];
                        },
                        [eL, R],
                    ),
                    eN = (0, o.useCallback)(
                        function () {
                            var e;
                            (null == (e = ef.current) || e.focus(), null == X || X());
                        },
                        [X],
                    ),
                    eR = (0, a.__read)((0, o.useState)(), 2),
                    eP = eR[0],
                    eC = eR[1],
                    ek = (0, a.__read)((0, o.useState)(el), 2),
                    eM = ek[0],
                    eA = ek[1];
                (0, o.useEffect)(
                    function () {
                        eA(el);
                    },
                    [el],
                );
                var eD = (0, o.useCallback)(
                    function (e) {
                        if (I) {
                            if ('desktop' === eL) return void eC(e);
                            eC(b());
                        }
                    },
                    [eL],
                );
                w({ enabled: 'touch' === eL, onHeightChange: eD });
                var ej = (0, o.useRef)(),
                    eF = ((n = (r = {
                        loading: ev,
                        iframeRef: em,
                        origin: eT,
                        rpcHandler: (0, o.useCallback)(
                            function (e, t) {
                                var r;
                                switch (e.methodCall) {
                                    case 'onInit':
                                        (B && eA(e.params[0]), null == Y || Y());
                                        break;
                                    case 'onDataLoad':
                                        var n = ed.current;
                                        if ('number' == typeof n.start && 'number' != typeof n.end && ej.current) {
                                            n.end = S();
                                            var i = n.end - n.start;
                                            ej.current({ methodCall: 'onSendTimeToInteractive', params: [{ delta: i }] });
                                        }
                                    case 'updateUserHeight':
                                        (eD(e.params[0].height), eE(!1));
                                        break;
                                    case 'ITEM_CLICK':
                                        var o = e.params[0];
                                        null == V || V(o.item, o, { onClose: eN });
                                        break;
                                    case 'closeUserID':
                                        null == eN || eN();
                                        break;
                                    case 'updateTheme':
                                        var s = e.params[0].theme;
                                        null == z || z(s);
                                        break;
                                    case 'updateLocale':
                                        var l = e.params[0].locale;
                                        null == J || J(l);
                                        break;
                                    default:
                                        if (!(null == ei ? void 0 : ei[e.methodCall])) return;
                                        Promise.resolve(
                                            null == (r = null == ei ? void 0 : ei[e.methodCall]) ? void 0 : r.call.apply(r, (0, a.__spread)([ei], e.params)),
                                        ).then(t);
                                }
                            },
                            [ei, V, eN, z, J, eD, eA, B, Y],
                        ),
                    }).loading),
                    (i = r.iframeRef),
                    (u = r.origin),
                    (c = r.rpcHandler),
                    (d = (0, o.useRef)([])),
                    (f = (0, o.useCallback)(
                        function (e) {
                            var t,
                                r,
                                a = JSON.stringify(e);
                            n ? d.current.push(a) : null == (r = null == (t = i.current) ? void 0 : t.contentWindow) || r.postMessage(a, '*');
                        },
                        [n, i],
                    )),
                    (h = (0, o.useCallback)(
                        function (e) {
                            var t;
                            if (e.origin === u) {
                                try {
                                    t = JSON.parse(e.data);
                                } catch (e) {
                                    return;
                                }
                                t.methodCall &&
                                    (null == c ||
                                        c((0, a.__assign)({}, t), function (e) {
                                            var r;
                                            f({
                                                returnCall: !0,
                                                params: [e],
                                                resultCallbackIndex: (null == (r = t.resultCallbackIndex) ? void 0 : r.__callbackId) || -1,
                                            });
                                        }));
                            }
                        },
                        [u, c, f],
                    )),
                    (0, o.useEffect)(
                        function () {
                            return (
                                window.addEventListener('message', h),
                                function () {
                                    window.removeEventListener('message', h);
                                }
                            );
                        },
                        [h],
                    ),
                    (0, o.useEffect)(
                        function () {
                            i &&
                                !n &&
                                0 !== d.current.length &&
                                (d.current.forEach(function (e) {
                                    var t, r;
                                    null == (r = null == (t = i.current) ? void 0 : t.contentWindow) || r.postMessage(e, '*');
                                }),
                                (d.current = []));
                        },
                        [n, i],
                    ),
                    { sendMessage: f }).sendMessage;
                ((ej.current = eF),
                    (0, o.useEffect)(
                        function () {
                            eF({ methodCall: 'updateRetpath', params: [{ retpath: ey }] });
                        },
                        [ey, eF],
                    ),
                    (0, o.useEffect)(
                        function () {
                            eF({ methodCall: 'onParamsChange', params: [(0, a.__assign)({}, er)] });
                        },
                        [er, eF],
                    ),
                    (0, o.useEffect)(
                        function () {
                            eF({ methodCall: 'updateTheme', params: [{ colorScheme: C, theme: ea }] });
                        },
                        [C, eF, ea],
                    ));
                var e$ = (0, o.useCallback)(
                        function (e) {
                            eF({ methodCall: 'focusFirst', params: [{ fromKeyboard: e }] });
                        },
                        [eF],
                    ),
                    eU = (0, o.useCallback)(
                        function () {
                            ec ? (e$(!0), eN()) : (eI || eb(!0), e$(!1), null == K || K());
                        },
                        [e$, K, eI, ec, eN],
                    );
                ((p = (m = {
                    visible: ec,
                    onClose: eN,
                    essentialRefs: (0, o.useMemo)(
                        function () {
                            var e = [eh, ef];
                            return ($ && e.push($), e);
                        },
                        [eh, ef, $],
                    ),
                }).visible),
                    (g = m.onClose),
                    (E = m.essentialRefs),
                    (y = m.unsafe_strategy),
                    ((_ = (0, o.useRef)({ onClose: g, refs: E, closeStrategy: void 0 === y ? 'pressdown' : y })).current.onClose = g),
                    (_.current.refs = E),
                    (0, o.useEffect)(
                        function () {
                            if (p) {
                                var e = _.current;
                                return (
                                    v.addOverlay(e),
                                    function () {
                                        v.removeOverlay(e);
                                    }
                                );
                            }
                        },
                        [p],
                    ),
                    (0, l.E)(
                        function () {
                            var e;
                            ec && (null != (e = ed.current).start || (e.start = S()));
                        },
                        [ec],
                    ));
                var eB = { colorScheme: C, height: eP, loading: ev, preload: eI, ref: em, src: eO, width: 'desktop' === eL ? 320 : '100%' },
                    eW = { className: k, colorScheme: C, platform: eL, ref: eh, visible: ec, onClose: eN, loading: ev };
                return {
                    avatarProps: { avatarSize: ex, env: F, onClick: eU, onPointerEnter: e_, platform: eL, ref: ef, retpath: ey, userData: eM, visible: ec, tld: ep },
                    contentProps: eB,
                    dialogProps: eW,
                };
            }
        },
        57751: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    default: function () {
                        return v;
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
                o = n._(r(71910)),
                s = i._(r(74631)),
                l = r(67354),
                u = r(91142),
                c = r(4698),
                d = new Map(),
                f = new Set(),
                h = (e) => {
                    let {
                            src: t,
                            id: r,
                            onLoad: n = () => {},
                            onReady: i = null,
                            dangerouslySetInnerHTML: a,
                            children: s = '',
                            strategy: l = 'afterInteractive',
                            onError: c,
                            stylesheets: h,
                        } = e,
                        m = r || t;
                    if (m && f.has(m)) return;
                    if (d.has(t)) {
                        (f.add(m), d.get(t).then(n, c));
                        return;
                    }
                    let p = () => {
                            (i && i(), f.add(m));
                        },
                        g = document.createElement('script'),
                        v = new Promise((e, t) => {
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
                        : s
                          ? ((g.textContent = 'string' == typeof s ? s : Array.isArray(s) ? s.join('') : ''), p())
                          : t && ((g.src = t), d.set(t, v)),
                        (0, u.setAttributesFromProps)(g, e),
                        'worker' === l && g.setAttribute('type', 'text/partytown'),
                        g.setAttribute('data-nscript', l),
                        h &&
                            ((e) => {
                                if (o.default.preinit)
                                    return e.forEach((e) => {
                                        o.default.preinit(e, { as: 'style' });
                                    });
                                {
                                    let t = document.head;
                                    e.forEach((e) => {
                                        let r = document.createElement('link');
                                        ((r.type = 'text/css'), (r.rel = 'stylesheet'), (r.href = e), t.appendChild(r));
                                    });
                                }
                            })(h),
                        document.body.appendChild(g));
                };
            function m(e) {
                let { strategy: t = 'afterInteractive' } = e;
                'lazyOnload' === t
                    ? window.addEventListener('load', () => {
                          (0, c.requestIdleCallback)(() => h(e));
                      })
                    : h(e);
            }
            function p(e) {
                (e.forEach(m),
                    [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(
                        (e) => {
                            let t = e.id || e.getAttribute('src');
                            f.add(t);
                        },
                    ));
            }
            function g(e) {
                let { id: t, src: r = '', onLoad: n = () => {}, onReady: i = null, strategy: u = 'afterInteractive', onError: d, stylesheets: m, ...p } = e,
                    { updateScripts: g, scripts: v, getIsSsr: E, appDir: y, nonce: S } = (0, s.useContext)(l.HeadManagerContext);
                S = p.nonce || S;
                let I = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let e = t || r;
                    I.current || (i && e && f.has(e) && i(), (I.current = !0));
                }, [i, t, r]);
                let b = (0, s.useRef)(!1);
                if (
                    ((0, s.useEffect)(() => {
                        if (!b.current) {
                            if ('afterInteractive' === u) h(e);
                            else
                                'lazyOnload' === u &&
                                    ('complete' === document.readyState
                                        ? (0, c.requestIdleCallback)(() => h(e))
                                        : window.addEventListener('load', () => {
                                              (0, c.requestIdleCallback)(() => h(e));
                                          }));
                            b.current = !0;
                        }
                    }, [e, u]),
                    ('beforeInteractive' === u || 'worker' === u) &&
                        (g
                            ? ((v[u] = (v[u] || []).concat([{ id: t, src: r, onLoad: n, onReady: i, onError: d, ...p, nonce: S }])), g(v))
                            : E && E()
                              ? f.add(t || r)
                              : E && !E() && h({ ...e, nonce: S })),
                    y)
                ) {
                    if (
                        (m &&
                            m.forEach((e) => {
                                o.default.preinit(e, { as: 'style' });
                            }),
                        'beforeInteractive' === u)
                    )
                        if (!r)
                            return (
                                p.dangerouslySetInnerHTML && ((p.children = p.dangerouslySetInnerHTML.__html), delete p.dangerouslySetInnerHTML),
                                (0, a.jsx)('script', {
                                    nonce: S,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([0, { ...p, id: t }]) + ')' },
                                })
                            );
                        else
                            return (
                                o.default.preload(
                                    r,
                                    p.integrity
                                        ? { as: 'script', integrity: p.integrity, nonce: S, crossOrigin: p.crossOrigin }
                                        : { as: 'script', nonce: S, crossOrigin: p.crossOrigin },
                                ),
                                (0, a.jsx)('script', {
                                    nonce: S,
                                    dangerouslySetInnerHTML: { __html: '(self.__next_s=self.__next_s||[]).push(' + JSON.stringify([r, { ...p, id: t }]) + ')' },
                                })
                            );
                    'afterInteractive' === u &&
                        r &&
                        o.default.preload(
                            r,
                            p.integrity
                                ? { as: 'script', integrity: p.integrity, nonce: S, crossOrigin: p.crossOrigin }
                                : { as: 'script', nonce: S, crossOrigin: p.crossOrigin },
                        );
                }
                return null;
            }
            Object.defineProperty(g, '__nextScript', { value: !0 });
            let v = g;
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
                        return E;
                    },
                }));
            let n = r(78868),
                i = r(25839),
                a = n._(r(74631)),
                o = r(37697),
                s = r(91543),
                l = r(37502),
                u = r(55050),
                c = r(31803),
                d = r(94005);
            r(1978);
            let f = r(52278),
                h = r(51556),
                m = r(1326);
            function p(e) {
                return 'string' == typeof e ? e : (0, o.formatUrl)(e);
            }
            function g(e) {
                let t,
                    r,
                    n,
                    [o, g] = (0, a.useOptimistic)(f.IDLE_LINK_STATUS),
                    E = (0, a.useRef)(null),
                    {
                        href: y,
                        as: S,
                        children: I,
                        prefetch: b = null,
                        passHref: w,
                        replace: T,
                        shallow: O,
                        scroll: L,
                        onClick: _,
                        onMouseEnter: x,
                        onTouchStart: N,
                        legacyBehavior: R = !1,
                        onNavigate: P,
                        ref: C,
                        unstable_dynamicOnHover: k,
                        ...M
                    } = e;
                ((t = I), R && ('string' == typeof t || 'number' == typeof t) && (t = (0, i.jsx)('a', { children: t })));
                let A = a.default.useContext(s.AppRouterContext),
                    D = !1 !== b,
                    j = null === b || 'auto' === b ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
                    { href: F, as: $ } = a.default.useMemo(() => {
                        let e = p(y);
                        return { href: e, as: S ? p(S) : e };
                    }, [y, S]);
                R && (r = a.default.Children.only(t));
                let U = R ? r && 'object' == typeof r && r.ref : C,
                    B = a.default.useCallback(
                        (e) => (
                            null !== A && (E.current = (0, f.mountLinkInstance)(e, F, A, j, D, g)),
                            () => {
                                (E.current && ((0, f.unmountLinkForCurrentNavigation)(E.current), (E.current = null)), (0, f.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [D, F, A, j, g],
                    ),
                    W = {
                        ref: (0, u.useMergedRef)(B, U),
                        onClick(e) {
                            (R || 'function' != typeof _ || _(e),
                                R && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
                                A &&
                                    (e.defaultPrevented ||
                                        (function (e, t, r, n, i, o, s) {
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
                                                if (!(0, h.isLocalURL)(t)) {
                                                    i && (e.preventDefault(), location.replace(t));
                                                    return;
                                                }
                                                if ((e.preventDefault(), s)) {
                                                    let e = !1;
                                                    if (
                                                        (s({
                                                            preventDefault: () => {
                                                                e = !0;
                                                            },
                                                        }),
                                                        e)
                                                    )
                                                        return;
                                                }
                                                a.default.startTransition(() => {
                                                    (0, m.dispatchNavigateAction)(r || t, i ? 'replace' : 'push', null == o || o, n.current);
                                                });
                                            }
                                        })(e, F, $, E, T, L, P)));
                        },
                        onMouseEnter(e) {
                            (R || 'function' != typeof x || x(e),
                                R && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                                A && D && (0, f.onNavigationIntent)(e.currentTarget, !0 === k));
                        },
                        onTouchStart: function (e) {
                            (R || 'function' != typeof N || N(e),
                                R && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                                A && D && (0, f.onNavigationIntent)(e.currentTarget, !0 === k));
                        },
                    };
                return (
                    (0, c.isAbsoluteUrl)($) ? (W.href = $) : (R && !w && ('a' !== r.type || 'href' in r.props)) || (W.href = (0, d.addBasePath)($)),
                    (n = R ? a.default.cloneElement(r, W) : (0, i.jsx)('a', { ...M, ...W, children: t })),
                    (0, i.jsx)(v.Provider, { value: o, children: n })
                );
            }
            r(82848);
            let v = (0, a.createContext)(f.IDLE_LINK_STATUS),
                E = () => (0, a.useContext)(v);
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
            function o(e) {
                return i(Math.floor(e));
            }
            r.d(t, { WQ: () => d, Qr: () => m, lw: () => h, gL: () => f, bY: () => u, Wj: () => c, Lp: () => l, fP: () => s, PY: () => a, Pn: () => o });
            let s = n,
                l = n,
                u = n,
                c = n,
                d = (e, ...t) => {
                    let r = e;
                    for (let e = 0; e < t.length; e++) r += t[e];
                    return r;
                };
            d.operator = '+';
            let f = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r -= t[e];
                return r;
            };
            f.operator = '-';
            let h = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r *= t[e];
                return r;
            };
            h.operator = '*';
            let m = (e, ...t) => {
                let r = e;
                for (let e = 0; e < t.length; e++) r /= t[e];
                return r;
            };
            m.operator = '/';
        },
        61666: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => h });
            let n = {}.toString,
                i = /\[object (\w+)\]/,
                a = (e) => {
                    let t = n.call(e);
                    if (!t) return null;
                    let r = t.match(i);
                    if (!r) return null;
                    let a = r[1];
                    return a || null;
                };
            function o(e) {
                return 'string' == typeof e;
            }
            function s(e) {
                let t = typeof e;
                return !!e && ('object' === t || 'function' === t);
            }
            let l = [].find,
                u = !(function (e) {
                    if (!(null == e ? void 0 : e.toString)) return !1;
                    try {
                        let t = e.toString();
                        return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t);
                    } catch (e) {
                        return !1;
                    }
                })(l)
                    ? (e, t) => {
                          for (let r = 0; r < e.length; r++) {
                              let n = e[r];
                              if (t(n, r, e)) return n;
                          }
                      }
                    : (e, t) => l.call(e, t);
            var c = r(37953),
                d = r.n(c);
            let f = { message: 'DEFAULT_ERROR_MESSAGE', code: '0', details: '', stack: '?:?:?' };
            class h extends Error {
                constructor(...e) {
                    let t = 2 === e.length ? e[0] : void 0,
                        r = 2 === e.length ? e[1] : e[0],
                        n =
                            ((e) => !!s(e) && !!o(e.name) && !!o(e.message))(t) || ('object' == typeof t && t && 'code' in t && 'details' in t)
                                ? t
                                : { message: String(t || f.message) };
                    (super(),
                        Object.defineProperty(this, 'originalError', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'message', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'code', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'details', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'stack', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'toString', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'toJSON', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.originalError = 'object' == typeof t && t ? t : { unknown: t, unknownStr: String(t) }),
                        d()(this, h.prototype));
                    let i = r.code || n.code || n.id || f.code,
                        l = r.message || n.message || f.message;
                    ((this.message = `VAS Error [${i}]` + (l ? `[${l}]` : '')), (this.code = i), (this.details = r.details || n.details || f.details));
                    let c =
                            n.stack ||
                            (function (e) {
                                let { url: t, line: r, col: n, fileName: i, columnNumber: a, lineNumber: o } = e;
                                return `${t || i || '?'}:${r || o || '?'}:${n || a || '?'}`;
                            })(n),
                        m = c === f.stack ? this.stack : c;
                    if (m && m !== f.stack) this.stack = m;
                    else if (!this.stack)
                        try {
                            throw Error(this.message);
                        } catch (e) {
                            this.stack = m = e.stack || f.stack;
                        }
                    ((this.toString = () =>
                        JSON.stringify(
                            this.toJSON(),
                            (function () {
                                let e = [],
                                    t = (function () {
                                        let e = 'undefined' == typeof WeakMap ? void 0 : new WeakMap(),
                                            t = [];
                                        return {
                                            set: (r, n) => {
                                                if (void 0 === e) return void t.push({ path: n, value: r });
                                                try {
                                                    e.set(r, n);
                                                } catch (e) {
                                                    t.push({ path: n, value: r });
                                                }
                                            },
                                            get: (r) => {
                                                let n = u(t, (e) => e.value === r);
                                                return void 0 !== e && void 0 === n ? e.get(r) : n ? n.path : void 0;
                                            },
                                        };
                                    })();
                                return (r, n) => {
                                    if ('function' == typeof n || 'Function' === a(n)) return o(n.name) ? n.name : '[Function]';
                                    if (n instanceof Error || 'Error' === a(n)) return { name: n.name, message: n.message, stack: n.stack };
                                    if (!s(n)) return n;
                                    if (
                                        ((e) => {
                                            try {
                                                let t = (function (e, t = window) {
                                                    return ('function' == typeof t.getComputedStyle ? t.getComputedStyle(e, null) : e.currentStyle) || {};
                                                })(e);
                                                return 'display' in t;
                                            } catch (e) {
                                                return !1;
                                            }
                                        })(n)
                                    ) {
                                        var i;
                                        return (i = n).id ? i.id : i.className ? i.className : 'HTML Element';
                                    }
                                    let l = t.get(n);
                                    if (o(l) && l.length > 0) return `[Circular ${l}]`;
                                    for (; e.length > 0 && e[e.length - 1].value[r] !== n;) e.pop();
                                    let u = (e.length > 0 ? e[e.length - 1].path : '') + (r ? `/${r}` : '~');
                                    return (e.push({ path: u, value: n }), t.set(n, u), n);
                                };
                            })(),
                        )),
                        (this.toJSON = () => ({ originalError: this.originalError, message: this.message, code: this.code, details: this.details, stack: m })));
                }
            }
        },
        62596: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var n = r(74631);
            function i(e, t) {
                (0, n.useImperativeHandle)(t, function () {
                    return e.current;
                });
            }
        },
        65239: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
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
            class o {
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
            function s(e) {
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
                                            return s(window.localStorage);
                                        case 'session':
                                            return s(window.sessionStorage);
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
                    return new o();
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
                            return new o();
                    }
                }
            }
            let u = new l().getStorage(),
                c = new l(['local', 'memory']).getStorage(),
                d = new l(['session', 'memory']).getStorage();
            function f(e) {
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
            let h = f(u);
            (f(c), f(d));
            var m = r(20454);
            let p = 'qwertyuiopasdfghjklzxcvbnm0123456789',
                g =
                    -1 === n.indexOf('__VPUID')
                        ? n
                        : (h.getItem(i) ??
                          (function () {
                              let e = [];
                              for (let t = 0; t < 10; t++) e.push(p[Math.floor((0, m.y)() * p.length)]);
                              return e.join('');
                          })());
            h.setItem(i, g);
        },
        65712: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { lock: () => v, unlock: () => E }));
            var n,
                i = r(84932);
            function a(e) {
                return 'undefined' != typeof window && null != window.navigator && e.test(window.navigator.userAgent);
            }
            function o() {
                return a(/iphone|ipod|ipad/i) || (a(/macintosh/i) && navigator.maxTouchPoints > 1);
            }
            function s(e, t) {
                var r = {};
                for (var n in t) t.hasOwnProperty(n) && (r[n] = e.style[n]);
                for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n]);
                return r;
            }
            function l(e) {
                return e === document.body || e === document.documentElement;
            }
            var u = Math.random().toString(36).slice(2),
                c = '__scrollLockState$'.concat(u),
                d = !(function () {
                    var e = !1;
                    if (!i.O) return !1;
                    try {
                        var t = function () {
                            return null;
                        };
                        (window.addEventListener('testPassive', t, {
                            get passive() {
                                e = !0;
                                return;
                            },
                        }),
                            window.removeEventListener('testPassive', t));
                    } catch (e) {}
                    return e;
                })()
                    ? void 0
                    : { passive: !1 },
                f = { count: 0, lastX: 0, lastY: 0, scrollable: null, scrollX: 0, scrollY: 0 };
            function h(e) {
                1 === e.changedTouches.length &&
                    ((f.scrollable = (function (e) {
                        for (var t; e && ((t = getComputedStyle(e)), !/(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY));) e = e.parentElement;
                        return e || document.documentElement;
                    })(e.target)),
                    l(f.scrollable) || ((f.lastX = e.changedTouches[0].pageX), (f.lastY = e.changedTouches[0].pageY)));
            }
            function m(e) {
                var t = f.scrollable,
                    r = f.lastX,
                    n = f.lastY;
                if (!(e.changedTouches.length > 1)) {
                    if (!t || l(t)) return void e.preventDefault();
                    var i = e.changedTouches[0].pageX,
                        a = e.changedTouches[0].pageY,
                        o = Math.abs(n - a) > Math.abs(r - i),
                        s = t.scrollTop,
                        u = t.scrollHeight - t.clientHeight,
                        c = t.scrollLeft,
                        d = t.scrollWidth - t.clientWidth,
                        h = !o && ((c <= 0 && i > r) || (c >= d && i < r));
                    (((o && ((s <= 0 && a > n) || (s >= u && a < n))) || h) && e.preventDefault(), (f.lastX = i), (f.lastY = a));
                }
            }
            function p() {
                f.scrollable && (f.scrollable = null);
            }
            function g(e) {
                return e || document.body;
            }
            function v(e) {
                if (i.O) {
                    var t = g(e);
                    (!(function (e) {
                        var t = e[c];
                        if (t) return t.count++;
                        var r = (function (e) {
                                var t,
                                    r = l(e) && window.innerWidth - document.documentElement.clientWidth > 0,
                                    i = e.scrollHeight > e.clientHeight;
                                if (r || i || ((t = getComputedStyle(e).overflowY), /scroll/.test(t))) {
                                    if ('undefined' == typeof document) return 0;
                                    if (void 0 === n) {
                                        var a = document.createElement('div');
                                        ((a.style.width = '100%'), (a.style.height = '200px'));
                                        var o = document.createElement('div');
                                        ((o.style.position = 'absolute'),
                                            (o.style.top = '0'),
                                            (o.style.left = '0'),
                                            (o.style.pointerEvents = 'none'),
                                            (o.style.visibility = 'hidden'),
                                            (o.style.width = '200px'),
                                            (o.style.height = '150px'),
                                            (o.style.overflow = 'hidden'),
                                            o.appendChild(a),
                                            document.body.appendChild(o));
                                        var s = a.offsetWidth;
                                        o.style.overflow = 'scroll';
                                        var u = a.offsetWidth;
                                        (s === u && (u = o.clientWidth), document.body.removeChild(o), (n = s - u));
                                    }
                                    return n;
                                }
                                return 0;
                            })(e),
                            i = parseInt(getComputedStyle(e).getPropertyValue('padding-right'), 10),
                            a = s(e, { paddingRight: ''.concat(i + r, 'px'), overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' });
                        e[c] = { initialStyle: a, count: 1 };
                    })(t),
                        o() &&
                            l(t) &&
                            (f.count++,
                            1 === f.count &&
                                ((f.scrollX = window.pageXOffset),
                                (f.scrollY = window.pageYOffset),
                                document.addEventListener('touchstart', h, d),
                                document.addEventListener('touchmove', m, d),
                                document.addEventListener('touchend', p, d))));
                }
            }
            function E(e) {
                if (i.O) {
                    var t = g(e),
                        r = t[c];
                    (r && (r.count--, 0 === r.count) && (s(t, r.initialStyle), delete t[c]),
                        o() &&
                            l(t) &&
                            0 !== f.count &&
                            (f.count--,
                            0 === f.count &&
                                (document.removeEventListener('touchstart', h),
                                document.removeEventListener('touchmove', m),
                                document.removeEventListener('touchend', p),
                                window.scrollTo(f.scrollX, f.scrollY))));
                }
            }
        },
        65780: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                }));
            let n = r(90720);
        },
        65839: (e) => {
            'use strict';
            var t = Array.isArray,
                r = Object.keys,
                n = Object.prototype.hasOwnProperty;
            e.exports = function e(i, a) {
                if (i === a) return !0;
                if (i && a && 'object' == typeof i && 'object' == typeof a) {
                    var o,
                        s,
                        l,
                        u = t(i),
                        c = t(a);
                    if (u && c) {
                        if ((s = i.length) != a.length) return !1;
                        for (o = s; 0 != o--;) if (!e(i[o], a[o])) return !1;
                        return !0;
                    }
                    if (u != c) return !1;
                    var d = i instanceof Date,
                        f = a instanceof Date;
                    if (d != f) return !1;
                    if (d && f) return i.getTime() == a.getTime();
                    var h = i instanceof RegExp,
                        m = a instanceof RegExp;
                    if (h != m) return !1;
                    if (h && m) return i.toString() == a.toString();
                    var p = r(i);
                    if ((s = p.length) !== r(a).length) return !1;
                    for (o = s; 0 != o--;) if (!n.call(a, p[o])) return !1;
                    for (o = s; 0 != o--;) if (!e(i[(l = p[o])], a[l])) return !1;
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
            r.d(t, { x3: () => s, lh: () => h });
            var n = r(58435);
            let i = {}.toString,
                a = /\[object (\w+)\]/;
            function o(e) {
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
            let s = Date && o(Date.now) ? () => Date.now() : () => new Date().getTime(),
                l = 'undefined' == typeof window ? void 0 : window.performance,
                u = l && o(l.now),
                c = l && l.timing && l.timing.navigationStart,
                d = l && l.timeOrigin ? l.timeOrigin : c ? l.timing.navigationStart : s(),
                f = 0,
                h = () => (0, n.Wj)(u ? l.now() : (f = Math.max(s() - d, f)));
        },
        68899: (e, t, r) => {
            let n = r(15159),
                { MAX_LENGTH: i, MAX_SAFE_INTEGER: a } = r(75465),
                { safeRe: o, t: s } = r(80157),
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
                    let r = e.trim().match(t.loose ? o[s.LOOSE] : o[s.FULL]);
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
        69827: () => {},
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
                o = r(15159),
                s = ((t = e.exports = {}).re = []),
                l = (t.safeRe = []),
                u = (t.src = []),
                c = (t.t = {}),
                d = 0,
                f = '[a-zA-Z0-9-]',
                h = [
                    ['\\s', 1],
                    ['\\d', a],
                    [f, i],
                ],
                m = (e, t, r) => {
                    let n = ((e) => {
                            for (let [t, r] of h) e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                            return e;
                        })(t),
                        i = d++;
                    (o(e, i, t), (c[e] = i), (u[i] = t), (s[i] = new RegExp(t, r ? 'g' : void 0)), (l[i] = new RegExp(n, r ? 'g' : void 0)));
                };
            (m('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
                m('NUMERICIDENTIFIERLOOSE', '\\d+'),
                m('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${f}*`),
                m('MAINVERSION', `(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})`),
                m('MAINVERSIONLOOSE', `(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})`),
                m('PRERELEASEIDENTIFIER', `(?:${u[c.NUMERICIDENTIFIER]}|${u[c.NONNUMERICIDENTIFIER]})`),
                m('PRERELEASEIDENTIFIERLOOSE', `(?:${u[c.NUMERICIDENTIFIERLOOSE]}|${u[c.NONNUMERICIDENTIFIER]})`),
                m('PRERELEASE', `(?:-(${u[c.PRERELEASEIDENTIFIER]}(?:\\.${u[c.PRERELEASEIDENTIFIER]})*))`),
                m('PRERELEASELOOSE', `(?:-?(${u[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[c.PRERELEASEIDENTIFIERLOOSE]})*))`),
                m('BUILDIDENTIFIER', `${f}+`),
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
        81517: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => a, U: () => o });
            var n = r(74631),
                i = r(85936);
            r(20319);
            var a = (0, i.cn)('UserWidget', 'Content'),
                o = n.forwardRef(function (e, t) {
                    var r = e.loading,
                        i = e.preload,
                        o = e.height,
                        s = e.colorScheme,
                        l = e.className,
                        u = e.src,
                        c = e.width;
                    return n.createElement(
                        'div',
                        { className: a({ loading: r, colorScheme: s }, [l]) },
                        i && n.createElement('iframe', { className: 'UserWidget-Iframe', ref: t, width: c, src: u, height: r ? 300 : o }),
                        r && n.createElement('div', { className: 'UserWidget-Spin' }),
                    );
                });
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
        84281: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { Dialog: () => n.l }));
            var n = r(13933);
        },
        84932: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => n });
            var n = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
        },
        85344: (e) => {
            let t = Object.freeze({ loose: !0 }),
                r = Object.freeze({});
            e.exports = (e) => (e ? ('object' != typeof e ? t : e) : r);
        },
        85936: (e, t, r) => {
            'use strict';
            e.exports = r(53855);
        },
        89111: (e, t, r) => {
            'use strict';
            r.d(t, { yv: () => Y, YT: () => et, FM: () => l });
            var n,
                i,
                a,
                o,
                s,
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
            class f {
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
            var h = r(65839);
            let m = (0, u.Wj)(1e4),
                p = (0, u.Wj)(1e3),
                g = (0, u.Wj)(5e3),
                v = (0, u.Wj)(3e4);
            var E = r(68728);
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
                        (this.startTime = this.lastFlushTime = (0, E.lh)()),
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
                    this.needFlush() && (this.onFlush(), (this.lastFlushTime = this.wasFirstFlush ? (0, E.lh)() : this.startTime), (this.wasFirstFlush = !0));
                }
                needFlush() {
                    let e = (0, E.lh)();
                    return this.wasFirstFlush ? e - this.lastFlushTime >= v : e - this.startTime >= m;
                }
                getTimeout() {
                    return (0, E.lh)() - this.startTime < m ? p : g;
                }
            }
            let S = (0, u.PY)((0, u.fP)(Math.abs(0))),
                I = {
                    remainingBufferedTime: (0, u.PY)((0, u.fP)(Math.abs(0))),
                    state: i.BUFFERING,
                    currentTime: S,
                    watchedTime: (0, u.PY)((0, u.fP)(Math.abs(0))),
                    duration: (0, u.PY)((0, u.fP)(0)),
                },
                b = NaN;
            function w() {}
            (!(function (e) {
                ((e[(e.PLAYING = 1)] = 'PLAYING'), (e[(e.NOT_PLAYING = 2)] = 'NOT_PLAYING'));
            })(a || (a = {})),
                (function (e) {
                    ((e.preroll = 'preroll'), (e.midroll = 'midroll'), (e.postPauseroll = 'postPauseroll'), (e.postroll = 'postroll'), (e.inroll = 'inroll'));
                })(o || (o = {})));
            class T {
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
                        a = w;
                    function o() {
                        (null !== i && clearTimeout(i), (i = null));
                    }
                    let s = function () {
                        let s = arguments;
                        ((n = n || this),
                            (a = () => {
                                (o(), (a = w), e.apply(n, s));
                            }),
                            r && null === i && e.apply(n, s),
                            o(),
                            (i = window.setTimeout(function () {
                                (r || e.apply(n, s), (i = null));
                            }, t)));
                    };
                    return (
                        (s.cancel = o),
                        (s.now = () => {
                            a();
                        }),
                        s
                    );
                })(() => {
                    (this.writeState(), this.timer.next());
                }, 0);
                writeState() {
                    let e = this.getPlayerAliveState();
                    h(this.prevState, e) || ((this.prevState = e), this.states.push({ ...e, timestamp: (0, u.Wj)(this.props.getTimestamp()) }));
                }
                getPlayerAliveState() {
                    let e = {
                            ...I,
                            saveData: (function (e = window) {
                                let { navigator: t } = e,
                                    { connection: r = {} } = t;
                                return !!r.saveData;
                            })(),
                            rtt: (function (e = window) {
                                var t;
                                if (!e.navigator) return b;
                                let { connection: r = {} } = e.navigator;
                                return 'number' == typeof (t = r.rtt) && isFinite(t) ? r.rtt : b;
                            })(),
                            ...this.props.stalledController.getStalledHistory(),
                        },
                        t = this.props.getState();
                    if (!t) return { ...e };
                    let {
                            currentTime: r,
                            duration: n,
                            muted: i,
                            playingState: o,
                            remainingBufferedTime: s,
                            adState: l,
                            liveLatency: c,
                            videoTracks: d,
                            audioTrack: f,
                            videoSize: h,
                            isVisible: m,
                            capHeight: p,
                            capWidth: g,
                            containerHeight: v,
                            containerWidth: E,
                            bandwidthEstimate: y,
                            bandwidthSource: S,
                            droppedFrames: w,
                            shownFrames: T,
                            isFullscreen: O,
                            isPictureInPicture: L,
                            volume: _,
                            playbackRate: x,
                        } = t,
                        N = d.find((e) => e.selected),
                        R = [...d].sort((e, t) => t.bitrate - e.bitrate),
                        P = l?.state === a.PLAYING,
                        C = !P,
                        k = this.props.getWatchedTime();
                    return {
                        ...e,
                        watchedTime: Math.max(0, k),
                        currentTime: isNaN(r) ? (0, u.fP)(0) : Math.max(0, r),
                        duration: isNaN(n) ? (0, u.fP)(0) : Math.max(0, n),
                        isMuted: i,
                        state: o,
                        remainingBufferedTime: s?.total || (0, u.fP)(0),
                        remainingAudioBufferedTime: s?.audio === void 0 ? void 0 : Math.max(0, s.audio),
                        remainingVideoBufferedTime: s?.video === void 0 ? void 0 : Math.max(0, s.video),
                        ad: P ? l?.type : void 0,
                        liveLatency: void 0 === c ? void 0 : Math.max(0, c),
                        stalledReason: this.props.stalledController.getCurrentStalledReason(),
                        auto: N?.auto === void 0 ? void 0 : N.auto,
                        isVisible: m,
                        bitrate: N?.bitrate ? Math.max(0, Math.floor((0, u.lw)(N.bitrate, 1e3))) : void 0,
                        width: h?.videoWidth === void 0 || isNaN(h?.videoWidth) ? void 0 : Math.max(0, Math.floor((0, u.Lp)(h?.videoWidth))),
                        height: h?.videoHeight === void 0 || isNaN(h?.videoHeight) ? void 0 : Math.max(0, Math.floor((0, u.Lp)(h?.videoHeight))),
                        maxWidth: C && R[0]?.width ? Math.max(0, Math.floor((0, u.Lp)(R[0].width))) : void 0,
                        maxHeight: C && R[0]?.height ? Math.max(0, Math.floor((0, u.Lp)(R[0].height))) : void 0,
                        audioTrack: f?.value || void 0,
                        audioLang: f?.lang || void 0,
                        audioBitrate: f?.bitrate ? Math.max(0, Math.floor((0, u.lw)(f.bitrate, 1e3))) : void 0,
                        capHeight: C && p ? Math.max(0, Math.floor((0, u.Lp)(p))) : void 0,
                        capWidth: C && g ? Math.max(0, Math.floor((0, u.Lp)(g))) : void 0,
                        containerHeight: void 0 !== v ? Math.max(0, Math.floor(v)) : void 0,
                        containerWidth: void 0 !== E ? Math.max(0, Math.floor(E)) : void 0,
                        bandwidthEstimate: void 0 === y || isNaN(y) ? void 0 : Math.max(0, (0, u.bY)(Math.round(y))),
                        bandwidthSource: S || void 0,
                        droppedFrames: void 0 === w ? void 0 : Math.max(0, Math.floor(w)),
                        shownFrames: void 0 === T ? void 0 : Math.max(0, Math.floor(T)),
                        viewport: O ? 'fullscreen' : L ? 'pip' : 'default',
                        volume: _,
                        playbackRate: x,
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
            })(s || (s = {}));
            let O = [0, 1, 4, 5],
                L = (0, u.fP)(0),
                _ = O.map((e) => (L = (0, u.WQ)((0, u.fP)(e), L))),
                x = (0, u.lw)(_[_.length - 1], 1e3),
                N = [s.Init];
            function R(e) {
                setTimeout(() => {
                    throw e;
                }, 0);
            }
            function P(e, t) {
                try {
                    return e();
                } catch (e) {
                    'function' == typeof t && t(e);
                }
            }
            class C {
                setTimeout(e, t) {
                    if (t <= 0) return void P(e, R);
                    let r = window.setTimeout(e, t);
                    return () => window.clearTimeout(r);
                }
                now() {
                    return (0, E.x3)();
                }
            }
            class k {
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
                constructor(e, t = new C()) {
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
            function M(e = E.lh) {
                let t = e();
                return () => (0, u.Wj)(Math.max(0, e() - t));
            }
            function A(e, t) {
                return { reason: e, details: t, getElapsedTime: M() };
            }
            class D {
                isBuffering = !1;
                timer = void 0;
                stalledId = 1;
                stalledDurationRemainder = (0, u.fP)(0);
                getState;
                logEvent;
                expectedStalled = A(s.Init, {});
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
                                r = O.filter((r, n) => {
                                    let i = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled(),
                                        a = _[n];
                                    if ((0, u.Qr)(t, 1e3) > a) {
                                        let e = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        return (
                                            !this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: e, expectedStalled: i, duration: a, getElapsedTime: M() }),
                                            this.send(!1, i, a, e),
                                            !1
                                        );
                                    }
                                    return (e.push(a), !0);
                                });
                            (this.currentStalled && (this.stalledDurationRemainder = (0, u.gL)((0, u.Qr)(t, 1e3), this.currentStalled.duration)),
                                r.length && (r[0] = r[0] - this.stalledDurationRemainder),
                                (this.timer = new k(({ count: t }) => {
                                    let n = this.currentStalled ? this.currentStalled.expectedStalled : this.getExpectedStalled();
                                    if (t > 0) {
                                        let r = (0, u.fP)(e[t - 1]),
                                            i = this.currentStalled ? this.currentStalled.id : this.stalledId++;
                                        (!this.currentStalled && this.stalledCount++,
                                            (this.currentStalled = { id: i, expectedStalled: n, duration: r, getElapsedTime: M() }),
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
                                let i = this.getState()?.adState?.state === a.PLAYING ? s.AdOther : s.Other;
                                this.setExpectedStalled(A(i, void 0));
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
                    return !(N.indexOf(r) > -1) && (!this.currentStalled || this.currentStalled.expectedStalled !== e) && t() >= x;
                }
                getExpectedStalled() {
                    let e = this.expectedStalled;
                    return this.isExpiredStalled(e) ? A(s.Other, void 0) : e;
                }
                destroyTimer() {
                    this.timer && (this.timer.destroy(), (this.timer = void 0));
                }
                send(e, t, r, n) {
                    let { reason: i, details: a } = t,
                        o = { ...a, stalledDuration: r, stalledId: n },
                        s = this.getState();
                    if (s) {
                        let { muted: e, remainingBufferedTime: t, videoTracks: r } = s,
                            n = r.find((e) => e.selected);
                        o = { ...o, remainingBufferedTime: t, videoTrack: n, isMuted: e };
                    }
                    this.logEvent({ name: e ? 'StalledEnd' : 'Stalled', data: o, labels: { reason: i } });
                }
            }
            let j = (e) => ('hidden' in e ? 'hidden' : 'webkitHidden' in e ? 'webkitHidden' : void 0);
            function F(e, t = !0) {
                let r = j(e);
                return r ? !e[r] : t;
            }
            let $ = ['Start', '4SecWatched', '10SecWatched', '20SecWatched', '30SecHeartbeat', 'End'];
            function U(e, t, r) {
                return e && 'number' == typeof e ? e + t - r : e;
            }
            let B = {}.toString,
                W = /\[object (\w+)\]/;
            function H(e) {
                return (
                    'function' == typeof e ||
                    'Function' ===
                        ((e) => {
                            let t = B.call(e);
                            if (!t) return null;
                            let r = t.match(W);
                            if (!r) return null;
                            let n = r[1];
                            return n || null;
                        })(e)
                );
            }
            let G = RegExp(
                    `^https?:\\/\\/([^\\/]+\\.)?(${'boolean' == typeof CLOUD_BUILD && CLOUD_BUILD ? ['video\\.cloud\\.yandex\\.net'] : '(an|strm)\\.yandex\\.(ru|net)|yastatic\\.net|strm-ott\\.akamaized\\.net|cdn\\.ngenix\\.net|strm\\.yandex\\.cdnga\\.net|strm-yandex\\.gcdn\\.co|(widevine|playready|fairplay)-proxy\\.ott\\.yandex\\.ru|drm\\.yandex-team\\.ru'})\\/(?!log|perf|jstracer)`,
                ),
                X = (0, u.Wj)(3e4);
            class Y {
                config;
                intervalId = void 0;
                contexts = [];
                constructor(e) {
                    this.config = e;
                }
                attach(e) {
                    e.performance &&
                        (H(e.performance.getEntriesByType) || H(e.performance.webkitGetEntriesByType)) &&
                        (H(e.performance.clearResourceTimings) || H(e.performance.webkitClearResourceTimings)) &&
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
                        t = this.contexts.map(V),
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
                            G.test(n.name) &&
                                e.push(
                                    (function (e, t, r) {
                                        let {
                                            duration: n,
                                            entryType: i,
                                            name: a,
                                            startTime: o,
                                            connectEnd: s,
                                            connectStart: l,
                                            decodedBodySize: u,
                                            domainLookupEnd: c,
                                            domainLookupStart: d,
                                            encodedBodySize: f,
                                            fetchStart: h,
                                            initiatorType: m,
                                            nextHopProtocol: p,
                                            redirectEnd: g,
                                            redirectStart: v,
                                            requestStart: E,
                                            responseEnd: y,
                                            responseStart: S,
                                            secureConnectionStart: I,
                                            transferSize: b,
                                            workerStart: w,
                                            serverTiming: T,
                                            responseStatus: O,
                                            deliveryType: L,
                                            renderBlockingStatus: _,
                                            firstInterimResponseStart: x,
                                        } = e;
                                        return {
                                            duration: n,
                                            entryType: i,
                                            name: a,
                                            encodedBodySize: f,
                                            decodedBodySize: u,
                                            initiatorType: m,
                                            transferSize: b,
                                            nextHopProtocol: p,
                                            serverTiming: T,
                                            responseStatus: O,
                                            deliveryType: L,
                                            renderBlockingStatus: _,
                                            startTime: U(o, t, r),
                                            connectEnd: U(s, t, r),
                                            connectStart: U(l, t, r),
                                            domainLookupEnd: U(c, t, r),
                                            domainLookupStart: U(d, t, r),
                                            fetchStart: U(h, t, r),
                                            redirectEnd: U(g, t, r),
                                            redirectStart: U(v, t, r),
                                            requestStart: U(E, t, r),
                                            responseEnd: U(y, t, r),
                                            responseStart: U(S, t, r),
                                            secureConnectionStart: U(I, t, r),
                                            workerStart: U(w, t, r),
                                            firstInterimResponseStart: U(x, t, r),
                                        };
                                    })(n, t[i], r),
                                );
                        });
                    }),
                        0 !== e.length && this.config.sendLog(e, { perfnow: String((0, E.x3)()), navstart: String(r) }));
                }
            }
            function V(e) {
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
                    this.lastUpdate = r ? { getElapsedTime: M(), videoTime: e } : void 0;
                }
                get() {
                    return this.watchedTime;
                }
                restoreLastUpdate() {
                    this.lastUpdate = void 0;
                }
            }
            class z {
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
                    let { currentTime: t, playbackRate: r = 1, playingState: n, adState: o } = e,
                        s = o?.state === a.PLAYING;
                    (this.watchedTimeCounter.calc(t, r, n === i.PLAY && !s), this.onChange?.(this.watchedTimeCounter.get()));
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
            var J = r(65517);
            function q() {
                return (0, u.Wj)((0, E.x3)());
            }
            class Q {
                lastDateNow;
                lastPerformanceNow;
                total = (0, u.Wj)(0);
                interval;
                getTime;
                constructor(e = E.lh) {
                    ((this.getTime = e), (this.lastDateNow = q()), (this.lastPerformanceNow = e()), (this.interval = setInterval(this.now, 1e3)));
                }
                now = () => {
                    let e = q(),
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
                    return J.$;
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
                        (this.stalledController = new D({ getState: this.getState, logEvent: (e) => this.logEvent(e) })),
                        (this.watchedTimeTracker = new z(r, (e) => this.playbackTracker.onWatchedTimeChange(e))),
                        (this.playerAliveController = new T({
                            getState: r,
                            onFlushStates: (e) => this.logEvent({ name: 'PlayerAlive', data: { states: e } }),
                            getTimestamp: () => this.getLogTimestamp(),
                            stalledController: this.stalledController,
                            getWatchedTime: () => this.watchedTimeTracker.getWatchedTime(),
                        })),
                        (this.fatalTracker = new f()),
                        this.initOnVisibilityChangeHandling(),
                        (this.timer = new Q()));
                }
                getLogTimestamp() {
                    return Math.round(this.timerStartTime + this.timer.now());
                }
                initOnVisibilityChangeHandling() {
                    let e = (function (e, t) {
                        let r = (function (e) {
                            let t = j(e);
                            if (t) return t.replace(/hidden/i, 'visibilitychange');
                        })(e);
                        if (!r) return w;
                        let n = () => {
                            t(F(e));
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
                        R(Error('Deprecated method used. Method is Telemetry#updateWatchedTime(). Just remove. Telemetry calculates watchedTime itself now.')));
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
                            vpuid: J.$,
                            eventType: 'event',
                            eventName: e.name,
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: F(document),
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
                        (e.details = P(() => ('string' == typeof e.details ? e.details : JSON.stringify(e.details))) || e.details),
                        {
                            ...ee,
                            ...this.playerInfo,
                            ...this.staticParams,
                            ...r,
                            vpuid: J.$,
                            eventType: e.isFatal ? 'fatal' : 'error',
                            eventName: String(e.code),
                            timestamp: this.getLogTimestamp(),
                            documentIsVisible: F(document),
                            eventIndex: this.eventIndex,
                            data: e,
                            labels: i,
                            sourceIndex: n ?? this.sourceIndexes.current,
                        }
                    );
                }
                getDataToSend(e) {
                    if (!e) return {};
                    let { duration: t, currentTime: r, utcStartTime: n, isFullscreen: i, volume: a, muted: o } = e;
                    return {
                        watchedSec: this.watchedTimeTracker.getWatchedTime(),
                        duration: isNaN(t) ? void 0 : t,
                        time: r,
                        utcTime: void 0 === n ? void 0 : n + r,
                        isFullscreen: i,
                        isMuted: o || 0 === a,
                    };
                }
                sendData(e, t) {
                    void 0 !== e && (P(() => this.sendLog(e, t), R), this.eventIndex++);
                }
                checkStalledReason(e) {
                    return this.stalledController.getCurrentStalledReason() === e;
                }
                setBuffering(e, t) {
                    this.stalledController.setBuffering(e, t);
                }
                setExpectedBuffering({ reason: e, details: t }) {
                    switch ((this.checkInitBuffering(e), e)) {
                        case s.SetSource:
                            (this.setBuffering(!1), this.clearBufferingHistory());
                            break;
                        case s.Init:
                            break;
                        default:
                            this.checkStalledReason(e) || this.setBuffering(!1);
                    }
                    return this.stalledController.setExpectedStalled(A(e, t));
                }
                checkInitBuffering(e) {
                    this.wasInitBufferingLogged || e === s.Init || this.onInitBuffering();
                }
                setExternalStalledDuration(e) {
                    let t = this.getExpectedStalled();
                    t.reason === s.Init && e && ((t.details = { externalStalledDuration: (0, u.Qr)(e, 1e3) }), this.setExpectedBuffering(t));
                }
                startInitBufferingTimer() {
                    this.initialStalledTimestamp = (0, u.Wj)((0, E.lh)());
                }
                stopInitBufferingTimer() {
                    this.initialStalledTimestampStop = (0, u.Wj)((0, E.lh)());
                }
                onInitBuffering(e) {
                    if (this.wasInitBufferingLogged) return;
                    let t = this.initialStalledTimestamp && !this.initialStalledTimestampStop,
                        r = this.initialStalledTimestamp && this.initialStalledTimestampStop;
                    ((this.initialStalledDuration = t
                        ? (0, u.gL)((0, u.Wj)((0, E.lh)()), this.initialStalledTimestamp)
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
                        R(Error('Deprecated method used. Method is Telemetry#setPreloadDetails(). Just remove it.')));
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
                        this.setExpectedBuffering({ reason: s.SetSource, details: t }));
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
                    return (this.checkInitBuffering(e), this.stalledController.setExpectedStalled(A(e, t)));
                }
                onSeek(e) {
                    this.setExpectedBuffering({ reason: s.Seek, details: e });
                }
                onVideoTrackChange(e) {
                    this.setExpectedBuffering({ reason: s.VideoTrackChange, details: e });
                }
                onAudioTrackChange(e) {
                    this.setExpectedBuffering({ reason: s.AudioTrackChange, details: e });
                }
                onRecover(e) {
                    this.setExpectedBuffering({ reason: s.Recover, details: e });
                }
                onMediaError(e) {
                    this.setExpectedBuffering({ reason: s.MediaError, details: e });
                }
                onNetworkStatusChange(e) {
                    this.setExpectedBuffering({ reason: s.Offline, details: e });
                }
                onRepresentationsChange(e) {
                    this.setExpectedBuffering({ reason: s.RepresentationsChange, details: e });
                }
                onLiveEdge(e) {
                    this.setExpectedBuffering({ reason: s.LiveEdge, details: e });
                }
                onAdStart(e) {
                    this.setExpectedBuffering({ reason: s.AdStart, details: e });
                }
                onAdBetween(e) {
                    this.setExpectedBuffering({ reason: s.AdBetween, details: e });
                }
                onAdEnd(e) {
                    this.setExpectedBuffering({ reason: s.AdEnd, details: e });
                }
            }
        },
        90720: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (0, r(46450).createAsyncLocalStorage)();
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
                for (let [a, o] of Object.entries(t)) {
                    if (!t.hasOwnProperty(a) || n.includes(a) || void 0 === o) continue;
                    let s = r[a] || a.toLowerCase();
                    ('SCRIPT' === e.tagName && i(s) ? (e[s] = !!o) : e.setAttribute(s, String(o)),
                        (!1 === o || ('SCRIPT' === e.tagName && i(s) && (!o || 'false' === o))) && (e.setAttribute(s, ''), e.removeAttribute(s)));
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        91638: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n = r(23198);
            (n.__exportStar(r(40788), t),
                n.__exportStar(r(84281), t),
                n.__exportStar(r(65239), t),
                n.__exportStar(r(27930), t),
                n.__exportStar(r(30956), t),
                n.__exportStar(r(56443), t));
        },
        93175: () => {},
        95102: (e, t, r) => {
            'use strict';
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(29834));
        },
        97926: (e, t, r) => {
            'use strict';
            t.H = void 0;
            var n = r(23198),
                i = r(74631),
                a = r(56111),
                o = n.__importStar(r(65712));
            t.H = function (e) {
                var t = e.enabled,
                    r = e.containerRef,
                    n = (0, i.useRef)(null),
                    s = (0, i.useRef)(!1);
                ((0, a.useIsomorphicLayoutEffect)(function () {
                    var e = r ? r.current : null;
                    n.current !== e && (t && s.current && (o.unlock(n.current), o.lock(e)), (n.current = e));
                }),
                    (0, a.useIsomorphicLayoutEffect)(
                        function () {
                            if (t)
                                return (
                                    (s.current = !0),
                                    o.lock(n.current),
                                    function () {
                                        ((s.current = !1), o.unlock(n.current));
                                    }
                                );
                        },
                        [t],
                    ));
            };
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
