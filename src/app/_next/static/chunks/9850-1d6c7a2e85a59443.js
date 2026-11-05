(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9850],
    {
        7: (e, t, r) => {
            let { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: a } = r(28179),
                o = r(66489),
                s = ((t = e.exports = {}).re = []),
                l = (t.safeRe = []),
                E = (t.src = []),
                m = (t.t = {}),
                c = 0,
                u = '[a-zA-Z0-9-]',
                f = [
                    ['\\s', 1],
                    ['\\d', a],
                    [u, i],
                ],
                h = (e, t, r) => {
                    let n = ((e) => {
                            for (let [t, r] of f) e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                            return e;
                        })(t),
                        i = c++;
                    (o(e, i, t), (m[e] = i), (E[i] = t), (s[i] = new RegExp(t, r ? 'g' : void 0)), (l[i] = new RegExp(n, r ? 'g' : void 0)));
                };
            (h('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
                h('NUMERICIDENTIFIERLOOSE', '\\d+'),
                h('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${u}*`),
                h('MAINVERSION', `(${E[m.NUMERICIDENTIFIER]})\\.(${E[m.NUMERICIDENTIFIER]})\\.(${E[m.NUMERICIDENTIFIER]})`),
                h('MAINVERSIONLOOSE', `(${E[m.NUMERICIDENTIFIERLOOSE]})\\.(${E[m.NUMERICIDENTIFIERLOOSE]})\\.(${E[m.NUMERICIDENTIFIERLOOSE]})`),
                h('PRERELEASEIDENTIFIER', `(?:${E[m.NUMERICIDENTIFIER]}|${E[m.NONNUMERICIDENTIFIER]})`),
                h('PRERELEASEIDENTIFIERLOOSE', `(?:${E[m.NUMERICIDENTIFIERLOOSE]}|${E[m.NONNUMERICIDENTIFIER]})`),
                h('PRERELEASE', `(?:-(${E[m.PRERELEASEIDENTIFIER]}(?:\\.${E[m.PRERELEASEIDENTIFIER]})*))`),
                h('PRERELEASELOOSE', `(?:-?(${E[m.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${E[m.PRERELEASEIDENTIFIERLOOSE]})*))`),
                h('BUILDIDENTIFIER', `${u}+`),
                h('BUILD', `(?:\\+(${E[m.BUILDIDENTIFIER]}(?:\\.${E[m.BUILDIDENTIFIER]})*))`),
                h('FULLPLAIN', `v?${E[m.MAINVERSION]}${E[m.PRERELEASE]}?${E[m.BUILD]}?`),
                h('FULL', `^${E[m.FULLPLAIN]}$`),
                h('LOOSEPLAIN', `[v=\\s]*${E[m.MAINVERSIONLOOSE]}${E[m.PRERELEASELOOSE]}?${E[m.BUILD]}?`),
                h('LOOSE', `^${E[m.LOOSEPLAIN]}$`),
                h('GTLT', '((?:<|>)?=?)'),
                h('XRANGEIDENTIFIERLOOSE', `${E[m.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
                h('XRANGEIDENTIFIER', `${E[m.NUMERICIDENTIFIER]}|x|X|\\*`),
                h(
                    'XRANGEPLAIN',
                    `[v=\\s]*(${E[m.XRANGEIDENTIFIER]})(?:\\.(${E[m.XRANGEIDENTIFIER]})(?:\\.(${E[m.XRANGEIDENTIFIER]})(?:${E[m.PRERELEASE]})?${E[m.BUILD]}?)?)?`,
                ),
                h(
                    'XRANGEPLAINLOOSE',
                    `[v=\\s]*(${E[m.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[m.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[m.XRANGEIDENTIFIERLOOSE]})(?:${E[m.PRERELEASELOOSE]})?${E[m.BUILD]}?)?)?`,
                ),
                h('XRANGE', `^${E[m.GTLT]}\\s*${E[m.XRANGEPLAIN]}$`),
                h('XRANGELOOSE', `^${E[m.GTLT]}\\s*${E[m.XRANGEPLAINLOOSE]}$`),
                h('COERCE', `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),
                h('COERCERTL', E[m.COERCE], !0),
                h('LONETILDE', '(?:~>?)'),
                h('TILDETRIM', `(\\s*)${E[m.LONETILDE]}\\s+`, !0),
                (t.tildeTrimReplace = '$1~'),
                h('TILDE', `^${E[m.LONETILDE]}${E[m.XRANGEPLAIN]}$`),
                h('TILDELOOSE', `^${E[m.LONETILDE]}${E[m.XRANGEPLAINLOOSE]}$`),
                h('LONECARET', '(?:\\^)'),
                h('CARETTRIM', `(\\s*)${E[m.LONECARET]}\\s+`, !0),
                (t.caretTrimReplace = '$1^'),
                h('CARET', `^${E[m.LONECARET]}${E[m.XRANGEPLAIN]}$`),
                h('CARETLOOSE', `^${E[m.LONECARET]}${E[m.XRANGEPLAINLOOSE]}$`),
                h('COMPARATORLOOSE', `^${E[m.GTLT]}\\s*(${E[m.LOOSEPLAIN]})$|^$`),
                h('COMPARATOR', `^${E[m.GTLT]}\\s*(${E[m.FULLPLAIN]})$|^$`),
                h('COMPARATORTRIM', `(\\s*)${E[m.GTLT]}\\s*(${E[m.LOOSEPLAIN]}|${E[m.XRANGEPLAIN]})`, !0),
                (t.comparatorTrimReplace = '$1$2$3'),
                h('HYPHENRANGE', `^\\s*(${E[m.XRANGEPLAIN]})\\s+-\\s+(${E[m.XRANGEPLAIN]})\\s*$`),
                h('HYPHENRANGELOOSE', `^\\s*(${E[m.XRANGEPLAINLOOSE]})\\s+-\\s+(${E[m.XRANGEPLAINLOOSE]})\\s*$`),
                h('STAR', '(<|>)?=?\\s*\\*'),
                h('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
                h('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$'));
        },
        28179: (e) => {
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
        31869: (e, t, r) => {
            let n = r(66489),
                { MAX_LENGTH: i, MAX_SAFE_INTEGER: a } = r(28179),
                { safeRe: o, t: s } = r(7),
                l = r(45242),
                { compareIdentifiers: E } = r(54402);
            class m {
                constructor(e, t) {
                    if (((t = l(t)), e instanceof m))
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
                    if ((n('SemVer.compare', this.version, this.options, e), !(e instanceof m))) {
                        if ('string' == typeof e && e === this.version) return 0;
                        e = new m(e, this.options);
                    }
                    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
                }
                compareMain(e) {
                    return (e instanceof m || (e = new m(e, this.options)), E(this.major, e.major) || E(this.minor, e.minor) || E(this.patch, e.patch));
                }
                comparePre(e) {
                    if ((e instanceof m || (e = new m(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
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
                        else return E(r, i);
                    } while (++t);
                }
                compareBuild(e) {
                    e instanceof m || (e = new m(e, this.options));
                    let t = 0;
                    do {
                        let r = this.build[t],
                            i = e.build[t];
                        if ((n('prerelease compare', t, r, i), void 0 === r && void 0 === i)) return 0;
                        if (void 0 === i) return 1;
                        if (void 0 === r) return -1;
                        else if (r === i) continue;
                        else return E(r, i);
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
                                (!1 === r && (n = [t]), 0 === E(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : (this.prerelease = n));
                            }
                            break;
                        }
                        default:
                            throw Error(`invalid increment argument: ${e}`);
                    }
                    return ((this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join('.')}`), this);
                }
            }
            e.exports = m;
        },
        42547: (e, t, r) => {
            let n = r(83193);
            e.exports = (e, t, r) => n(t, e, r);
        },
        45242: (e) => {
            let t = Object.freeze({ loose: !0 }),
                r = Object.freeze({});
            e.exports = (e) => (e ? ('object' != typeof e ? t : e) : r);
        },
        54402: (e) => {
            let t = /^[0-9]+$/,
                r = (e, r) => {
                    let n = t.test(e),
                        i = t.test(r);
                    return (n && i && ((e *= 1), (r *= 1)), e === r ? 0 : n && !i ? -1 : i && !n ? 1 : e < r ? -1 : 1);
                };
            e.exports = { compareIdentifiers: r, rcompareIdentifiers: (e, t) => r(t, e) };
        },
        66310: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => k });
            var n = r(88092),
                i = r(32660),
                a = r(53548),
                o = r(84014),
                s = r(30697),
                l = r(635),
                E = r(30335);
            function m(e, t) {
                return Object.keys(e).reduce(function (r, i) {
                    return ((r[i] = (0, n.__assign)({ timeZone: t }, e[i])), r);
                }, {});
            }
            function c(e, t) {
                return Object.keys((0, n.__assign)((0, n.__assign)({}, e), t)).reduce(function (r, i) {
                    return ((r[i] = (0, n.__assign)((0, n.__assign)({}, e[i] || {}), t[i] || {})), r);
                }, {});
            }
            function u(e, t) {
                if (!t) return e;
                var r = l.S.formats;
                return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r), e), {
                    date: c(m(r.date, t), m(e.date || {}, t)),
                    time: c(m(r.time, t), m(e.time || {}, t)),
                });
            }
            var f = function (e, t, r, a, o) {
                    var l = e.locale,
                        m = e.formats,
                        c = e.messages,
                        f = e.defaultLocale,
                        h = e.defaultFormats,
                        p = e.fallbackOnEmptyString,
                        g = e.onError,
                        I = e.timeZone,
                        d = e.defaultRichTextElements;
                    void 0 === r && (r = { id: '' });
                    var R = r.id,
                        N = r.defaultMessage;
                    (0, i.V1)(
                        !!R,
                        '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue',
                    );
                    var L = String(R),
                        v = c && Object.prototype.hasOwnProperty.call(c, L) && c[L];
                    if (Array.isArray(v) && 1 === v.length && v[0].type === s.TYPE.literal) return v[0].value;
                    if (!a && v && 'string' == typeof v && !d) return v.replace(/'\{(.*?)\}'/gi, '{$1}');
                    if (((a = (0, n.__assign)((0, n.__assign)({}, d), a || {})), (m = u(m, I)), (h = u(h, I)), !v)) {
                        if (!1 === p && '' === v) return v;
                        if (((!N || (l && l.toLowerCase() !== f.toLowerCase())) && g(new E.sb(r, l)), N))
                            try {
                                var T = t.getMessageFormat(N, f, h, o);
                                return T.format(a);
                            } catch (e) {
                                return (
                                    g(new E.Ho('Error formatting default message for: "'.concat(L, '", rendering default message verbatim'), l, r, e)),
                                    'string' == typeof N ? N : L
                                );
                            }
                        return L;
                    }
                    try {
                        var T = t.getMessageFormat(v, l, m, (0, n.__assign)({ formatters: t }, o || {}));
                        return T.format(a);
                    } catch (e) {
                        g(new E.Ho('Error formatting message: "'.concat(L, '", using ').concat(N ? 'default message' : 'id', ' as fallback.'), l, r, e));
                    }
                    if (N)
                        try {
                            var T = t.getMessageFormat(N, f, h, o);
                            return T.format(a);
                        } catch (e) {
                            g(new E.Ho('Error formatting the default message for: "'.concat(L, '", rendering message verbatim'), l, r, e));
                        }
                    return 'string' == typeof v ? v : 'string' == typeof N ? N : L;
                },
                h = [
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
                    E = e.timeZone;
                void 0 === a && (a = {});
                var m = a.format,
                    c = (0, n.__assign)((0, n.__assign)({}, E && { timeZone: E }), m && (0, i.F3)(s, t, m, l)),
                    u = (0, i.J9)(a, h, c);
                return (
                    'time' !== t ||
                        u.hour ||
                        u.minute ||
                        u.second ||
                        u.timeStyle ||
                        u.dateStyle ||
                        (u = (0, n.__assign)((0, n.__assign)({}, u), { hour: 'numeric', minute: 'numeric' })),
                    r(o, u)
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
                    e.onError(new E.pg('Error formatting date.', e.locale, t));
                }
                return String(o);
            }
            function I(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    o = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'time', t, void 0 === a ? {} : a).format(o);
                } catch (t) {
                    e.onError(new E.pg('Error formatting time.', e.locale, t));
                }
                return String(o);
            }
            function d(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    o = r[2],
                    s = 'string' == typeof i ? new Date(i || 0) : i,
                    l = 'string' == typeof a ? new Date(a || 0) : a;
                try {
                    return p(e, 'dateTimeRange', t, void 0 === o ? {} : o).formatRange(s, l);
                } catch (t) {
                    e.onError(new E.pg('Error formatting date time range.', e.locale, t));
                }
                return String(s);
            }
            function R(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    o = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'date', t, void 0 === a ? {} : a).formatToParts(o);
                } catch (t) {
                    e.onError(new E.pg('Error formatting date.', e.locale, t));
                }
                return [];
            }
            function N(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = r[0],
                    a = r[1],
                    o = 'string' == typeof i ? new Date(i || 0) : i;
                try {
                    return p(e, 'time', t, void 0 === a ? {} : a).formatToParts(o);
                } catch (t) {
                    e.onError(new E.pg('Error formatting time.', e.locale, t));
                }
                return [];
            }
            var L = r(36118),
                v = ['style', 'type', 'fallback', 'languageDisplay'];
            function T(e, t, r, n) {
                var a = e.locale,
                    o = e.onError;
                Intl.DisplayNames ||
                    o(
                        new L.IF(
                            'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
                            L.O4.MISSING_INTL_API,
                        ),
                    );
                var s = (0, i.J9)(n, v);
                try {
                    return t(a, s).of(r);
                } catch (e) {
                    o(new E.pg('Error formatting display name.', a, e));
                }
            }
            var O = ['type', 'style'],
                y = Date.now();
            function $(e, t, r, n) {
                void 0 === n && (n = {});
                var i = S(e, t, r, n).reduce(function (e, t) {
                    var r = t.value;
                    return ('string' != typeof r ? e.push(r) : 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += r) : e.push(r), e);
                }, []);
                return 1 === i.length ? i[0] : 0 === i.length ? '' : i;
            }
            function S(e, t, r, a) {
                var o = e.locale,
                    s = e.onError;
                (void 0 === a && (a = {}),
                    Intl.ListFormat ||
                        s(
                            new L.IF(
                                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                                L.O4.MISSING_INTL_API,
                            ),
                        ));
                var l = (0, i.J9)(a, O);
                try {
                    var m = {},
                        c = r.map(function (e, t) {
                            if ('object' == typeof e) {
                                var r = ''.concat(y, '_').concat(t, '_').concat(y);
                                return ((m[r] = e), r);
                            }
                            return String(e);
                        });
                    return t(o, l)
                        .formatToParts(c)
                        .map(function (e) {
                            return 'literal' === e.type ? e : (0, n.__assign)((0, n.__assign)({}, e), { value: m[e.value] || e.value });
                        });
                } catch (e) {
                    s(new E.pg('Error formatting list.', o, e));
                }
                return r;
            }
            var A = [
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
            function b(e, t, r) {
                var n = e.locale,
                    a = e.formats,
                    o = e.onError;
                void 0 === r && (r = {});
                var s = r.format,
                    l = (s && (0, i.F3)(a, 'number', s, o)) || {};
                return t(n, (0, i.J9)(r, A, l));
            }
            function _(e, t, r, n) {
                void 0 === n && (n = {});
                try {
                    return b(e, t, n).format(r);
                } catch (t) {
                    e.onError(new E.pg('Error formatting number.', e.locale, t));
                }
                return String(r);
            }
            function D(e, t, r, n) {
                void 0 === n && (n = {});
                try {
                    return b(e, t, n).formatToParts(r);
                } catch (t) {
                    e.onError(new E.pg('Error formatting number.', e.locale, t));
                }
                return [];
            }
            var F = ['type'];
            function P(e, t, r, n) {
                var a = e.locale,
                    o = e.onError;
                (void 0 === n && (n = {}),
                    Intl.PluralRules ||
                        o(
                            new L.IF(
                                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                L.O4.MISSING_INTL_API,
                            ),
                        ));
                var s = (0, i.J9)(n, F);
                try {
                    return t(a, s).select(r);
                } catch (e) {
                    o(new E.pg('Error formatting plural.', a, e));
                }
                return 'other';
            }
            var w = ['numeric', 'style'];
            function M(e, t, r, n, a) {
                (void 0 === a && (a = {}),
                    n || (n = 'second'),
                    Intl.RelativeTimeFormat ||
                        e.onError(
                            new L.IF(
                                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                                L.O4.MISSING_INTL_API,
                            ),
                        ));
                try {
                    var o, s, l, m, c, u;
                    return ((o = a),
                    (s = e.locale),
                    (l = e.formats),
                    (m = e.onError),
                    void 0 === o && (o = {}),
                    (u = (!!(c = o.format) && (0, i.F3)(l, 'relative', c, m)) || {}),
                    t(s, (0, i.J9)(o, w, u))).format(r, n);
                } catch (t) {
                    e.onError(new E.pg('Error formatting relative time.', e.locale, t));
                }
                return String(r);
            }
            var C = r(15563);
            function G(e) {
                return e
                    ? Object.keys(e).reduce(function (t, r) {
                          var n = e[r];
                          return ((t[r] = (0, C.RK)(n) ? (0, o.yU)(n) : n), t);
                      }, {})
                    : e;
            }
            var j = function (e, t, r, i) {
                    for (var a = [], s = 4; s < arguments.length; s++) a[s - 4] = arguments[s];
                    var l = G(i),
                        E = f.apply(void 0, (0, n.__spreadArray)([e, t, r, l], a, !1));
                    return Array.isArray(E) ? (0, o.SP)(E) : E;
                },
                U = function (e, t) {
                    var r,
                        a,
                        s,
                        l,
                        m,
                        c,
                        u,
                        h = e.defaultRichTextElements,
                        p = (0, n.__rest)(e, ['defaultRichTextElements']),
                        L = G(h),
                        v =
                            ((r = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, o.JF), p), { defaultRichTextElements: L })),
                            (a = (0, i.GT)(t)),
                            (l = (s = (0, n.__assign)((0, n.__assign)({}, i.JF), r)).locale),
                            (m = s.defaultLocale),
                            (c = s.onError),
                            l
                                ? !Intl.NumberFormat.supportedLocalesOf(l).length && c
                                    ? c(
                                          new E.hr(
                                              'Missing locale data for locale: "'
                                                  .concat(l, '" in Intl.NumberFormat. Using default locale: "')
                                                  .concat(m, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'),
                                          ),
                                      )
                                    : !Intl.DateTimeFormat.supportedLocalesOf(l).length &&
                                      c &&
                                      c(
                                          new E.hr(
                                              'Missing locale data for locale: "'
                                                  .concat(l, '" in Intl.DateTimeFormat. Using default locale: "')
                                                  .concat(m, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'),
                                          ),
                                      )
                                : (c &&
                                      c(
                                          new E.uo(
                                              '"locale" was not configured, using "'.concat(
                                                  m,
                                                  '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details',
                                              ),
                                          ),
                                      ),
                                  (s.locale = s.defaultLocale || 'en')),
                            s.onWarn &&
                                s.defaultRichTextElements &&
                                'string' == typeof (u = s.messages || {})[Object.keys(u)[0]] &&
                                s.onWarn(
                                    '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution',
                                ),
                            (0, n.__assign)((0, n.__assign)({}, s), {
                                formatters: a,
                                formatNumber: _.bind(null, s, a.getNumberFormat),
                                formatNumberToParts: D.bind(null, s, a.getNumberFormat),
                                formatRelativeTime: M.bind(null, s, a.getRelativeTimeFormat),
                                formatDate: g.bind(null, s, a.getDateTimeFormat),
                                formatDateToParts: R.bind(null, s, a.getDateTimeFormat),
                                formatTime: I.bind(null, s, a.getDateTimeFormat),
                                formatDateTimeRange: d.bind(null, s, a.getDateTimeFormat),
                                formatTimeToParts: N.bind(null, s, a.getDateTimeFormat),
                                formatPlural: P.bind(null, s, a.getPluralRules),
                                formatMessage: f.bind(null, s, a),
                                $t: f.bind(null, s, a),
                                formatList: $.bind(null, s, a.getListFormat),
                                formatListToParts: S.bind(null, s, a.getListFormat),
                                formatDisplayName: T.bind(null, s, a.getDisplayNames),
                            })),
                        O = {
                            locale: v.locale,
                            timeZone: v.timeZone,
                            fallbackOnEmptyString: v.fallbackOnEmptyString,
                            formats: v.formats,
                            defaultLocale: v.defaultLocale,
                            defaultFormats: v.defaultFormats,
                            messages: v.messages,
                            onError: v.onError,
                            defaultRichTextElements: L,
                        };
                    return (0, n.__assign)((0, n.__assign)({}, v), { formatMessage: j.bind(null, O, v.formatters), $t: j.bind(null, O, v.formatters) });
                },
                x = r(53152);
            function X(e) {
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
            let k = (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return ((t.cache = (0, i.MT)()), (t.state = { cache: t.cache, intl: U(X(t.props), t.cache), prevConfig: X(t.props) }), t);
                }
                return (
                    (0, n.__extends)(t, e),
                    (t.getDerivedStateFromProps = function (e, t) {
                        var r = t.prevConfig,
                            n = t.cache,
                            i = X(e);
                        return (0, o.bN)(r, i) ? null : { intl: U(i, n), prevConfig: i };
                    }),
                    (t.prototype.render = function () {
                        return ((0, o.HM)(this.state.intl), a.createElement(x.Kq, { value: this.state.intl }, this.props.children));
                    }),
                    (t.displayName = 'IntlProvider'),
                    (t.defaultProps = o.JF),
                    t
                );
            })(a.PureComponent);
        },
        66489: (e, t, r) => {
            var n = r(49124);
            e.exports = 'object' == typeof n && n.env && n.env.NODE_DEBUG && /\bsemver\b/i.test(n.env.NODE_DEBUG) ? (...e) => console.error('SEMVER', ...e) : () => {};
        },
        83193: (e, t, r) => {
            let n = r(31869);
            e.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
        },
    },
]);
