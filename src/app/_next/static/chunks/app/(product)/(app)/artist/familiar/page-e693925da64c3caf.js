(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3266, 6252, 7722],
    {
        3266: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => x });
            var a,
                r,
                n = i(30782),
                s = i(63670);
            function o(e, t) {
                var i = t && t.cache ? t.cache : m,
                    a = t && t.serializer ? t.serializer : d;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var i,
                                  a,
                                  r = 1 === e.length ? l : c;
                              return (i = t.cache.create()), (a = t.serializer), r.bind(this, e, i, a);
                          }
                )(e, { cache: i, serializer: a });
            }
            function l(e, t, i, a) {
                var r = null == a || 'number' == typeof a || 'boolean' == typeof a ? a : i(a),
                    n = t.get(r);
                return void 0 === n && ((n = e.call(this, a)), t.set(r, n)), n;
            }
            function c(e, t, i) {
                var a = Array.prototype.slice.call(arguments, 3),
                    r = i(a),
                    n = t.get(r);
                return void 0 === n && ((n = e.apply(this, a)), t.set(r, n)), n;
            }
            var d = function () {
                return JSON.stringify(arguments);
            };
            function u() {
                this.cache = Object.create(null);
            }
            (u.prototype.get = function (e) {
                return this.cache[e];
            }),
                (u.prototype.set = function (e, t) {
                    this.cache[e] = t;
                });
            var m = {
                    create: function () {
                        return new u();
                    },
                },
                _ = {
                    variadic: function (e, t) {
                        var i, a;
                        return (i = t.cache.create()), (a = t.serializer), c.bind(this, e, i, a);
                    },
                    monadic: function (e, t) {
                        var i, a;
                        return (i = t.cache.create()), (a = t.serializer), l.bind(this, e, i, a);
                    },
                };
            !(function (e) {
                (e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API');
            })(a || (a = {}));
            var h = (function (e) {
                    function t(t, i, a) {
                        var r = e.call(this, t) || this;
                        return (r.code = i), (r.originalMessage = a), r;
                    }
                    return (
                        (0, n.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                p = (function (e) {
                    function t(t, i, r, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'),
                                a.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return (0, n.__extends)(t, e), t;
                })(h),
                f = (function (e) {
                    function t(t, i, r) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(i), a.INVALID_VALUE, r) || this;
                    }
                    return (0, n.__extends)(t, e), t;
                })(h),
                v = (function (e) {
                    function t(t, i) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(i, '"'), a.MISSING_VALUE, i) || this
                        );
                    }
                    return (0, n.__extends)(t, e), t;
                })(h);
            function g(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, i) {
                                e[t] = i;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                (e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object');
            })(r || (r = {}));
            var x = (function () {
                function e(t, i, l, c) {
                    var d,
                        u,
                        m = this;
                    if (
                        (void 0 === i && (i = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var i = t.reduce(function (e, t) {
                                return e.length && t.type === r.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e;
                            }, []);
                            return i.length <= 1 ? i[0] || '' : i;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, i, n, o, l, c, d) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: r.literal, value: t[0].value }];
                                for (var u = [], m = 0; m < t.length; m++) {
                                    var _ = t[m];
                                    if ((0, s.isLiteralElement)(_)) {
                                        u.push({ type: r.literal, value: _.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(_)) {
                                        'number' == typeof c && u.push({ type: r.literal, value: n.getNumberFormat(i).format(c) });
                                        continue;
                                    }
                                    var g = _.value;
                                    if (!(l && g in l)) throw new v(g, d);
                                    var x = l[g];
                                    if ((0, s.isArgumentElement)(_)) {
                                        (x && 'string' != typeof x && 'number' != typeof x) || (x = 'string' == typeof x || 'number' == typeof x ? String(x) : ''),
                                            u.push({ type: 'string' == typeof x ? r.literal : r.object, value: x });
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(_)) {
                                        var y = 'string' == typeof _.style ? o.date[_.style] : (0, s.isDateTimeSkeleton)(_.style) ? _.style.parsedOptions : void 0;
                                        u.push({ type: r.literal, value: n.getDateTimeFormat(i, y).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(_)) {
                                        var y = 'string' == typeof _.style ? o.time[_.style] : (0, s.isDateTimeSkeleton)(_.style) ? _.style.parsedOptions : o.time.medium;
                                        u.push({ type: r.literal, value: n.getDateTimeFormat(i, y).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(_)) {
                                        var y = 'string' == typeof _.style ? o.number[_.style] : (0, s.isNumberSkeleton)(_.style) ? _.style.parsedOptions : void 0;
                                        y && y.scale && (x *= y.scale || 1), u.push({ type: r.literal, value: n.getNumberFormat(i, y).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(_)) {
                                        var b = _.children,
                                            C = _.value,
                                            A = l[C];
                                        if ('function' != typeof A) throw new f(C, 'function', d);
                                        var k = A(
                                            e(b, i, n, o, l, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        Array.isArray(k) || (k = [k]),
                                            u.push.apply(
                                                u,
                                                k.map(function (e) {
                                                    return { type: 'string' == typeof e ? r.literal : r.object, value: e };
                                                }),
                                            );
                                    }
                                    if ((0, s.isSelectElement)(_)) {
                                        var N = _.options[x] || _.options.other;
                                        if (!N) throw new p(_.value, x, Object.keys(_.options), d);
                                        u.push.apply(u, e(N.value, i, n, o, l));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(_)) {
                                        var N = _.options['='.concat(x)];
                                        if (!N) {
                                            if (!Intl.PluralRules)
                                                throw new h(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    a.MISSING_INTL_API,
                                                    d,
                                                );
                                            var I = n.getPluralRules(i, { type: _.pluralType }).select(x - (_.offset || 0));
                                            N = _.options[I] || _.options.other;
                                        }
                                        if (!N) throw new p(_.value, x, Object.keys(_.options), d);
                                        u.push.apply(u, e(N.value, i, n, o, l, x - (_.offset || 0)));
                                        continue;
                                    }
                                }
                                return u.length < 2
                                    ? u
                                    : u.reduce(function (e, t) {
                                          var i = e[e.length - 1];
                                          return i && i.type === r.literal && t.type === r.literal ? (i.value += t.value) : e.push(t), e;
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
                        (this.locales = i),
                        (this.resolvedLocale = e.resolveLocale(i)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var x = c || {},
                            y = (x.formatters, (0, n.__rest)(x, ['formatters']));
                        this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, y), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    (this.formats =
                        ((d = e.formats),
                        l
                            ? Object.keys(d).reduce(
                                  function (e, t) {
                                      var i, a;
                                      return (
                                          (e[t] =
                                              ((i = d[t]),
                                              (a = l[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, i || {}), a || {}),
                                                        Object.keys(i).reduce(function (e, t) {
                                                            return (e[t] = (0, n.__assign)((0, n.__assign)({}, i[t]), a[t] || {})), e;
                                                        }, {}),
                                                    )
                                                  : i)),
                                          e
                                      );
                                  },
                                  (0, n.__assign)({}, d),
                              )
                            : d)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (u = this.formatterCache) && (u = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: o(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: g(u.number), strategy: _.variadic },
                                ),
                                getDateTimeFormat: o(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: g(u.dateTime), strategy: _.variadic },
                                ),
                                getPluralRules: o(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: g(u.pluralRules), strategy: _.variadic },
                                ),
                            }));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
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
        3785: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { M: () => a }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon');
                })(a || (a = {}));
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        8677: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => P });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(16172),
                d = i(21732),
                u = i(91027),
                m = i(82586),
                _ = i(70280),
                h = i(71926),
                p = i(17705),
                f = i(63423);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: n, iconSize: l, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    h = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    p = (0, s.useCallback)(
                        (e) => {
                            null == r || r(), e.stopPropagation();
                        },
                        [r],
                    );
                return (0, a.jsx)(f.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': h,
                    onClick: p,
                    icon: (0, a.jsx)(m.I, { size: l, className: n, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var g = i(71735),
                x = i(54391),
                y = i(22191),
                b = i(28999),
                C = i(57594),
                A = i(92744),
                k = i(29268),
                N = i(4008),
                I = i(53161),
                L = i(52843),
                E = i(39400),
                T = i(54714),
                O = i.n(T),
                S = i(38420),
                j = i(92565),
                w = i.n(j);
            let R = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(S.A, { value: t.downloadingProgress, size: 16, className: w().downloadingProgress, progressBarClassName: w().progress })
                          : null;
                }),
                P = (0, n.PA)((e) => {
                    var t, i;
                    let {
                            className: n,
                            track: f,
                            withLightning: T,
                            ignoreDislikedStyles: S,
                            onLikeClick: j,
                            utmLink: w,
                            withSecondaryColor: P,
                            handleRemove: D,
                            withTrailer: M = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: F,
                            hideControls: H,
                        } = e,
                        { user: U, trailer: z } = (0, C.g)(),
                        { formatMessage: W } = (0, o.A)(),
                        { sendLikeSearchFeedback: V } = (0, b.z)(),
                        [G, $] = (0, s.useState)(!1),
                        [K, Y] = (0, s.useState)(!1),
                        X = (0, g.P)(),
                        Q = (0, p.K)(f),
                        Z = (0, y.P)(Math.round((null != (i = f.durationMs) ? i : 0) / 1e3)),
                        q = (0, x.F)(),
                        J = U.hasPlus,
                        ee = !f.isRemoved && f.isAvailable && !H,
                        et = (0, u.c)(async () => {
                            G || f.isLiked || ($(!0), null == V || V()), await Q(), null == j || j(f.isLiked);
                        }),
                        ei = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, u.c)((e) => {
                            if ((e.stopPropagation(), X())) return void e.preventDefault();
                            z.openTrackTrailer(f.id), q(c.ky.Track, f.id);
                        }),
                        er = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(E._, {
                                        track: f,
                                        open: K,
                                        onOpenChange: Y,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: w,
                                        className: (0, r.$)(O().contextMenu, { [O().contextMenu_visible]: K }),
                                        handleRemove: D,
                                        withTrailer: M,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, D, K, ee, M, f, w]);
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(O().root, O().controls, n, {
                            [O().controls_dislikedControls]: f.isDisliked,
                            [O().controls_dislikedColors]: f.isDisliked && !S,
                            [O().controls_disabled]: !f.isAvailable,
                            [O().root_withSecondaryColor]: P,
                        }),
                        children: [
                            T &&
                                (0, a.jsx)(m.I, {
                                    'aria-label': W({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: O().lightning,
                                    variant: 'lightning',
                                }),
                            f.isUGC &&
                                (0, a.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(m.I, {
                                            'aria-label': W({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: O().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(_.ZI, { children: (0, a.jsx)(l.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, r.$)(O().item, O().downloadIcon), children: (0, a.jsx)(R, { track: f }) }),
                            D && !H && (0, a.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(O().item, O().removeButton), onClick: D, ariaLabel: F }),
                            ee &&
                                (0, a.jsx)(N.WithOffline, {
                                    fallback: (0, a.jsx)(A.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, r.$)(O().item, O().likeIcon),
                                        isLiked: f.isLiked,
                                        onClick: et,
                                        disabled: !U.isAuthorized,
                                    }),
                                }),
                            (null == (t = f.trailer) ? void 0 : t.isAvailable) &&
                                f.isAvailable &&
                                (0, a.jsx)(N.WithOffline, {
                                    fallback: (0, a.jsx)(k.k, {
                                        className: (0, r.$)(O().item, O().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(O().item, O().contextMenuWrapper),
                                children: [
                                    'number' == typeof f.durationMs &&
                                        (0, a.jsx)(h.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(O().duration, { [O().duration_hidden]: K && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Z,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / I.k7);
                                                    return (0, L.E)(t);
                                                })(f.durationMs),
                                            }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        12526: (e, t, i) => {
            var a = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    r = t[0];
                return i.e(t[1]).then(() => i.t(r, 19));
            }
            (r.keys = () => Object.keys(a)), (r.id = 12526), (e.exports = r);
        },
        14190: (e, t, i) => {
            'use strict';
            i.d(t, { Xn: () => n, cy: () => r, pE: () => a });
            let a = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                r = 'yandex',
                n = 'ru-RU';
        },
        14459: (e, t, i) => {
            'use strict';
            function a() {
                return { appId: '117328825040925' };
            }
            i.d(t, { k: () => a });
        },
        14858: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var a = i(60900),
                r = i(57594),
                n = i(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, a.A)(),
                    { user: i, experiments: s } = (0, r.g)(),
                    o = 'ru' === i.account.data.userSessionRegionIso && s.checkExperiment(n.z.WebNextFooterDisclaimer, 'on'),
                    l = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return o ? t({ id: 'footer.disclaimer-content' }) : l;
            };
        },
        17024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => r });
            let a = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        18870: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { $: () => a }),
                (function (e) {
                    (e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar');
                })(a || (a = {}));
        },
        19620: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => x });
            var a = i(32290),
                r = i(63618),
                n = i(55178),
                s = i(16172),
                o = i(21732),
                l = i(82586),
                c = i(50162),
                d = i(86269),
                u = i(79856),
                m = i(71926),
                _ = i(95481),
                h = i(47745),
                p = i(61258),
                f = i(69e3),
                v = i.n(f);
            let g = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: f,
                            subTitle: g,
                            title: x,
                            description: y,
                            viewAllActionLink: b,
                            controls: C,
                            titleSize: A = 'm',
                            coverBackgroundColor: k,
                            coverRadius: N = 's',
                            titleClassName: I,
                            titleLineClamp: L,
                            fallbackIconVariant: E,
                            available: T = !0,
                            onViewAllAction: O,
                            titleChildren: S,
                            children: j,
                            headingRef: w,
                            coverContainerClassName: R,
                            headingVariant: P = 'h3',
                            withDescriptionWidthLimit: D = !0,
                            isShimmerVisible: M,
                            isShimmerActive: B,
                            withCover: F,
                            withDescription: H,
                            forwardRef: U,
                            shimmerCoverClassName: z,
                            shouldSendAnalyticsOnLoaded: W,
                            ...V
                        } = e,
                        G = (0, _.f)(),
                        $ = (0, n.useRef)(null),
                        K = i || F,
                        Y = y || H,
                        X = (0, n.useCallback)(() => {
                            $.current && 'focus' in $.current && $.current.focus();
                        }, []),
                        Q = (0, h.N)(),
                        Z = (0, n.useCallback)(() => {
                            O ? O() : Q({ to: s.QT.Link });
                        }, [Q, O]);
                    (0, n.useEffect)(() => {
                        W && G();
                    }, [W, G]);
                    let q = (0, n.useMemo)(
                            () =>
                                x && b && T
                                    ? (0, a.jsxs)(p.N, {
                                          className: v().title,
                                          containerClassName: v().linkContainer,
                                          textClassName: v().linkText,
                                          icon: (0, a.jsx)(l.I, { className: v().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: b,
                                          onClick: Z,
                                          'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, a.jsx)(m.DZ, {
                                                  id: f,
                                                  className: (0, r.$)(v().heading, I),
                                                  variant: P,
                                                  size: A,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: w,
                                                  children: x,
                                              }),
                                              S,
                                          ],
                                      })
                                    : (0, a.jsxs)('div', {
                                          className: v().title,
                                          children: [
                                              (0, a.jsx)(m.DZ, {
                                                  id: f,
                                                  className: (0, r.$)(v().heading, I, { [v().heading_notAvailable]: !T }),
                                                  variant: P,
                                                  size: A,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: w,
                                                  'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                                  children: x,
                                              }),
                                              S,
                                          ],
                                      }),
                            [T, Z, w, P, f, x, I, L, A, b, S],
                        ),
                        J = (0, n.useMemo)(() => (H && M ? (0, a.jsx)(u.W, { isActive: B, className: v().shimmerDescription }) : y), [H, M, y, B]),
                        ee = (0, n.useMemo)(
                            () =>
                                F && M
                                    ? (0, a.jsx)(u.W, { isActive: B, className: (0, r.$)(v().shimmerCover, z), radius: 's' })
                                    : (0, a.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: E,
                                          style: { backgroundColor: k },
                                          className: v().cover,
                                          ref: $,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': o.S7.BLOCK_HEADER_COVER,
                                      }),
                            [k, i, E, X, B, M, z, F],
                        );
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(v().root, t),
                        ref: U,
                        ...V,
                        'data-test-id': o.S7.BLOCK_HEADER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: v().start,
                                children: [
                                    K && (0, a.jsx)(d.t, { radius: N, className: (0, r.$)(v().coverContainer, R), children: ee }),
                                    (0, a.jsxs)('div', {
                                        className: v().textContainer,
                                        children: [
                                            g,
                                            q,
                                            Y &&
                                                (0, a.jsx)(m.HL, {
                                                    id: ''.concat(f, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: D ? 2 : void 0,
                                                    className: (0, r.$)(v().description, { [v().description_widthLimit]: D }),
                                                    'data-test-id': o.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            C || j,
                        ],
                    });
                },
                x = (0, n.forwardRef)((e, t) => (0, a.jsx)(g, { forwardRef: t, ...e }));
        },
        20753: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        22556: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            let a = (e, t) => {
                    let i = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (i) return i;
                    let a = window.document.createElement('meta');
                    return a.setAttribute(e, t), a;
                },
                r = (e) => {
                    let { title: t, description: i, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof i)) {
                        let e = a('name', 'description');
                        e.setAttribute('content', i), window.document.head.appendChild(e);
                    }
                    let n = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            i = Array.isArray(r.images) ? r.images[0] : null;
                        n = i && 'object' == typeof i && 'url' in i ? String(i.url) : '';
                        let s = a('property', 'og:title'),
                            o = a('property', 'og:description'),
                            l = a('property', 'og:image');
                        s.setAttribute('content', e),
                            o.setAttribute('content', t),
                            l.setAttribute('content', n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(l);
                    }
                };
        },
        22644: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => r });
            var a = i(55178);
            let r = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        23025: (e) => {
            e.exports = {
                root: 'ArtistFamiliarPageContent_root__0Mc9t',
                scrollContainer: 'ArtistFamiliarPageContent_scrollContainer__TD6Kj',
                important: 'ArtistFamiliarPageContent_important__o2KTP',
                content: 'ArtistFamiliarPageContent_content__QquDA',
                block: 'ArtistFamiliarPageContent_block__Cr2H_',
                blockHeader: 'ArtistFamiliarPageContent_blockHeader__Z_uvq',
                tracksBlock: 'ArtistFamiliarPageContent_tracksBlock__SCCLT',
                footer: 'ArtistFamiliarPageContent_footer__nveR8',
                item: 'ArtistFamiliarPageContent_item__fyC2q',
                shimmerTitle: 'ArtistFamiliarPageContent_shimmerTitle__WU3vH',
            };
        },
        24535: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => n });
            var a = i(80451),
                r = i(73422);
            function n(e) {
                let { ogTitle: t, ogDescription: i, fullUrl: n, locale: s, ogImage: o, siteName: l, ogType: c, customImage: d } = e,
                    u = o ? { url: (0, a.createAvatarUrl)(o, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: i,
                    url: n,
                    ...(c && { type: c }),
                    siteName: l,
                    locale: (s || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        26042: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            var a = i(32290),
                r = i(55178),
                n = i(10936);
            let s = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: s, objectPos: o, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: s, objectPos: o, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, s, o, l, c, d, u],
                    );
                return (0, a.jsx)(n.l.Provider, { value: _, children: m });
            };
        },
        26252: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => a, JU: () => r, DQ: () => p, Ve: () => f });
            var a,
                r,
                n = i(98411),
                s = (function () {
                    function e(e) {
                        (this.observableValue = (0, n.vP)(e)), (this.prevValueByListener = new Map());
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
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var a = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (r) {
                                    if (r !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && a) {
                                            a = !1;
                                            return;
                                        }
                                        i.prevValueByListener.set(e, r), e(r);
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    (this.observableValue = (0, n.EW)(e)), (this.prevValueByListener = new Map());
                }
                Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var a = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (r) {
                                if (r !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && a) {
                                        a = !1;
                                        return;
                                    }
                                    i.prevValueByListener.set(e, r), e(r);
                                }
                            })
                        );
                    });
            })();
            class o extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: a = {}, ...r } = t,
                        n = e || 'Internal error';
                    super(n, r), (this.message = n), (this.code = i), (this.data = a), (this.stack = Error(n).stack), Object.setPrototypeOf(this, o.prototype);
                }
            }
            class l extends o {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype);
                }
            }
            class c extends o {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype);
                }
            }
            !(function (e) {
                (e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon');
            })(a || (a = {}));
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, a] = i.split(':');
                        e && a && t.push({ type: e, id: a });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class m {
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
                    (this.dataSource = e.dataSource),
                        (this.itemsObservable = new s(null)),
                        (this.isLoadingObservable = new s(!1)),
                        (this.errorObservable = new s(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable);
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    (this.isLoadingObservable.value = !0), (this.errorObservable.value = null);
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
                    (this.loadingPromise = e), await e;
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        a = {};
                    for (let e of i)
                        if (e) {
                            let t = a[e.disclaimerType] ?? [];
                            t.push(e.disclaimerItem), (a[e.disclaimerType] = t);
                        }
                    return a;
                }
                destroy() {
                    (this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null);
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                (e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!');
            })(r || (r = {}));
            let _ = new Map([
                    [a.EXPLICIT_ICON, r.E],
                    [a.AGE_18_ICON, r.AGE_18],
                    [a.AGE_16_ICON, r.AGE_16],
                    [a.AGE_12_ICON, r.AGE_12],
                    [a.EXCLAMATION_ICON, r.EXCLAMATION],
                ]),
                h = [a.EXPLICIT_ICON, a.AGE_18_ICON, a.AGE_16_ICON, a.AGE_12_ICON, a.EXCLAMATION_ICON],
                p = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let i = _.get(t.type);
                    return void 0 !== i ? i : null;
                },
                f = (e, t) => u(e, t).length > 0;
        },
        26365: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var a = i(36477);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) n[s - 2] = arguments[s];
                    let [o] = n,
                        l = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != o ? o : {}), options: e }),
                        d = {},
                        { href: u } = (0, a.u)(l, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: i } = (0, a.u)(l, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = i;
                    }
                    return { canonical: u, languages: d };
                };
        },
        28724: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => A });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(39407),
                l = i(21732),
                c = i(91027),
                d = i(63423),
                u = i(71926),
                m = i(70204),
                _ = i(34186),
                h = i(83808),
                p = i(20472),
                f = i(84062),
                v = i(85017),
                g = i(19379),
                x = i(61258),
                y = i(76768),
                b = i.n(y);
            let C = {
                    [v.n.ALBUM]: (0, a.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [v.n.PODCAST]: (0, a.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [v.n.ARTIST]: (0, a.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [v.n.TRACK]: (0, a.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [v.n.AUDIOBOOK]: (0, a.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [v.n.CLIP]: (0, a.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                A = (0, n.PA)((e) => {
                    var t;
                    let { modalState: i, data: n, onClose: y, className: A } = e,
                        k = null != n ? n : null == i ? void 0 : i.modalData,
                        N = (0, h.W)(),
                        I = (0, f.Z)(p.Z.main.href),
                        L = (0, _.N)().get(m.U2),
                        E = (0, c.c)(() => {
                            if (y) return y();
                            N.canBack && N.back(), I();
                        }),
                        T = (null == k || null == (t = k.details) ? void 0 : t.url) && k.details.text,
                        O = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = L.get(g.c.ExEx),
                                a = new Date(),
                                r = a.setMinutes(a.getMinutes() + 15),
                                n =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            t ? L.set(g.c.ExEx, [...t, n], { expires: new Date(r) }) : L.set(g.c.ExEx, [n], { expires: new Date(r) }),
                                null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler();
                        }),
                        S = (0, c.c)(() => {
                            (null == i ? void 0 : i.shouldHistoryBack) ? (null == y || y(), N.canBack && N.back(), I()) : null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerRejectHandler) && i.onDisclaimerRejectHandler();
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == i || i.reset();
                        },
                        [i],
                    );
                    let j = (0, s.useMemo)(() => {
                            if (k) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(b().title, b().text),
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: k.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: b().text,
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: k.description,
                                        }),
                                        T &&
                                            (0, a.jsx)(x.N, {
                                                href: null == (e = k.details) ? void 0 : e.url,
                                                className: b().link,
                                                children: (0, a.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = k.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [k, T]),
                        w = (0, s.useMemo)(
                            () =>
                                (null == i ? void 0 : i.type) === v.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: b().buttons,
                                          children: [
                                              (0, a.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(o.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: i.entityType && C[i.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: b().buttons,
                                          children: (0, a.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: E,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: b().button,
                                              'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [O, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, E, S],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, r.$)(b().root, A),
                        'data-test-id': l.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: b().container, children: [j, w] }),
                    });
                });
        },
        29775: (e) => {
            e.exports = { root: 'ArtistFamiliarPage_root__9Zjo0' };
        },
        30310: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        30564: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var a = i(32290),
                r = i(89020);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, a.jsx)(r.V, { ...e }, i));
            };
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => n });
            var a = i(55178);
            let r = (0, a.createContext)(null),
                n = () => (0, a.useContext)(r);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var a = i(32290),
                r = i(77088),
                n = i.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: n().empty });
            };
        },
        33696: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        34223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => p });
            var a = i(32290),
                r = i(98350),
                n = i(63618),
                s = i(55178),
                o = i(60900),
                l = i(79856),
                c = i(91063),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: r } = (0, o.A)(),
                    c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: d().coverContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: d().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(89661),
                _ = i.n(m);
            let h = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: r } = (0, o.A)(),
                        c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, a.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(_().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, a.jsx)(l.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: _().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(l.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                p = (e) => {
                    let { isActive: t, variant: i, className: n } = e;
                    switch (i) {
                        case r.X.PLAYLIST:
                            return (0, a.jsx)(h, { isActive: t, className: n });
                        case r.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        35587: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        36326: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => eP });
            var a = i(32290),
                r = i(21916),
                n = i(96103),
                s = i(55178),
                o = i(21732),
                l = i(15299),
                c = i(64170),
                d = i(7999),
                u = i(91853),
                m = i(37862),
                _ = i(48922),
                h = i(95226),
                p = i(22714),
                f = i(83920),
                v = i(3796),
                g = i(57594),
                x = i(86246),
                y = i(97201),
                b = i(28724),
                C = i(57815),
                A = i(22556),
                k = i(44242),
                N = i(14459),
                I = i(83992),
                L = i(42125),
                E = i(24535),
                T = i(47216),
                O = i(94821),
                S = i(26365);
            async function j(e, t) {
                var i, a, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, L.W)(t.locale),
                    s = n({ id: 'metadata.artist-familiar-you-title' }, { artistName: e.artist.name }),
                    o = n({ id: 'metadata.artist-familiar-you-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: o,
                    openGraph: (0, E.i)({
                        ogTitle: s,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, I.v)({ tld: t.tld }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, T.H)({ cardType: O.W.SUMMARY_LARGE_IMAGE, title: s, description: o }),
                    facebook: (0, N.k)(),
                    appLinks: (0, k.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, S.S)('/artist/:artistId/familiar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var w = (function (e) {
                    return (e[(e.COLLECTION = 0)] = 'COLLECTION'), (e[(e.VIBE = 1)] = 'VIBE'), e;
                })({}),
                R = i(22644),
                P = i(51714),
                D = i(29775),
                M = i.n(D),
                B = i(63618),
                F = i(60900),
                H = i(83778),
                U = i(71483),
                z = i(44884),
                W = i(46049),
                V = i(79856),
                G = i(24170),
                $ = i(69951),
                K = i(72396),
                Y = i(59888),
                X = i(98350),
                Q = i(19620),
                Z = i(98148),
                q = i(58054),
                J = i(32468),
                ee = i(80451),
                et = i(34223),
                ei = i(60814),
                ea = i.n(ei);
            let er = function (e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                    return Array.from({ length: i }, (i, r) => (0, a.jsx)(et.D, { variant: t, className: ea().shimmer, isActive: e }, r));
                },
                en = (e) => {
                    let { isShimmerVisible: t, isShimmerActive: i, variant: r, shimmersCount: n, className: s, children: o, ...l } = e;
                    return (0, a.jsx)('div', { className: (0, B.$)(ea().root, s), ...(0, ee.getDataAttrFromProps)(l), children: t ? er(i, r, n) : o });
                };
            var es = i(46673);
            let eo = (e) => {
                let { artistId: t, entityContextType: i } = e;
                return (0, s.useMemo)(() => (t ? (0, es.t)({ contextType: U.K.Artist, contextId: t, entityContextType: i }) : null), [t, i]);
            };
            var el = i(39407),
                ec = i(71926),
                ed = i(83808),
                eu = i(85377),
                em = i(12894),
                e_ = i(45180),
                eh = i(8946),
                ep = i(91027),
                ef = i(74523),
                ev = i(71670);
            let eg = (e) => {
                let t = (0, ev.X)(),
                    i = (0, r.useSearchParams)();
                return (0, ep.c)((a) => {
                    var r;
                    let n = new URLSearchParams(i);
                    switch ((null == (r = e.onTabChange) || r.call(e, a), a)) {
                        case w.COLLECTION:
                            n.set(y.K.TAB, x.J.COLLECTION), t((0, ef.C)(window.location.pathname, n));
                            break;
                        case w.VIBE:
                            n.set(y.K.TAB, x.J.VIBE), t((0, ef.C)(window.location.pathname, n));
                    }
                });
            };
            var ex = i(60367),
                ey = i.n(ex);
            let eb = () =>
                    (0, a.jsxs)('div', {
                        className: ey().tabsShimmer,
                        children: [(0, a.jsx)(V.W, { className: ey().tabShimmer }), (0, a.jsx)(V.W, { className: ey().tabShimmer })],
                    }),
                eC = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        { artist: r } = (0, g.g)(),
                        { formatMessage: n } = (0, F.A)(),
                        o = (0, ed.W)(),
                        { isScrolling: l } = (0, s.useContext)(eu.B),
                        c = eg(t);
                    return (0, a.jsxs)('header', {
                        className: ey().root,
                        'aria-hidden': l,
                        children: [
                            (0, a.jsxs)('div', {
                                className: ey().container,
                                children: [
                                    o.canBack && (0, a.jsx)(em.L, { withForwardControl: !1, withBackwardControl: o.canBack, shouldFocusOnMount: !l }),
                                    (0, a.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: ey().title,
                                        children: (0, a.jsx)(el.A, { id: 'page.familiar-you' }),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(eh.wI, {
                                isShimmerVisible: r.familiarSubpage.isLoading,
                                shimmer: (0, a.jsx)(eb, {}),
                                className: ey().tabs,
                                elementId: i,
                                ...t,
                                onTabChange: c,
                                children: [
                                    (0, a.jsx)(e_.o, {
                                        className: ey().tab,
                                        value: w.COLLECTION,
                                        title: n({ id: 'page.familiar-collection' }),
                                        'aria-hidden': l,
                                        tabIndex: l ? -1 : 0,
                                    }),
                                    (0, a.jsx)(e_.o, {
                                        className: ey().tab,
                                        value: w.VIBE,
                                        title: n({ id: 'page.familiar-vibe' }),
                                        'aria-hidden': l,
                                        tabIndex: l ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var eA = i(23025),
                ek = i.n(eA);
            let eN = (0, n.PA)((e) => {
                    var t;
                    let { forwardRef: i, tabsState: r, tabElementId: n, artistId: c } = e,
                        { artist: d } = (0, g.g)(),
                        { formatMessage: u } = (0, F.A)(),
                        { from: m } = (0, K.f)(),
                        _ = eo({ artistId: c, entityContextType: H.h.ARTIST_MY_COLLECTION }),
                        h = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: U.K.Various,
                                    meta: { id: String(c) },
                                    from: m,
                                    overrideAutoflowSeeds: ['artist:'.concat(c)],
                                    overrideContextType: z.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: d.familiarSubpage.collectionEntitiesData,
                            }),
                            [d.familiarSubpage.collectionEntitiesData, c, m],
                        ),
                        p = (0, s.useMemo)(() => {
                            var e;
                            return (0, a.jsx)(en, {
                                isShimmerVisible: d.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: X.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, B.$)(ek().block, ek().tracksBlock),
                                children:
                                    null == (e = d.familiarSubpage.collectionTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, a.jsx)($.K, { track: e, playContextParams: h(e, t) }, e.id)),
                            });
                        }, [d.familiarSubpage.collectionTracks, d.familiarSubpage.isLoading, h]),
                        f = (0, s.useMemo)(() => {
                            if (d.familiarSubpage.shouldShowTitleBlocks)
                                return d.familiarSubpage.isLoading
                                    ? (0, a.jsx)('div', {
                                          className: (0, B.$)(ek().block, ek().blockHeader),
                                          children: (0, a.jsx)(V.W, { isActive: d.familiarSubpage.isLoading, className: ek().shimmerTitle, radius: 'l' }),
                                      })
                                    : (0, a.jsx)(Q.T, { className: (0, B.$)(ek().block, ek().blockHeader), title: u({ id: 'entity-names.tracks' }) });
                        }, [d.familiarSubpage.isLoading, d.familiarSubpage.shouldShowTitleBlocks, u]),
                        v = (0, s.useMemo)(() => {
                            if (d.familiarSubpage.shouldShowTitleBlocks) return u({ id: 'entity-names.albums' });
                        }, [d.familiarSubpage.shouldShowTitleBlocks, u]);
                    return (0, a.jsx)(Y._, {
                        sourceContextData: _,
                        children: (0, a.jsxs)(W.N, {
                            className: ek().root,
                            containerClassName: (0, B.$)(ek().scrollContainer, ek().important),
                            ref: i,
                            'data-test-id': o.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_COLLECTION,
                            children: [
                                (0, a.jsx)(eC, { tabsState: r, tabElementId: n }),
                                (0, a.jsxs)(l.Kp, {
                                    value: r.value,
                                    name: w.COLLECTION,
                                    elementId: n,
                                    className: ek().content,
                                    children: [
                                        (0, a.jsxs)('section', { 'data-test-id': o.Xk.familiarYou.FAMILIAR_YOU_SECTION_TRACK, children: [f, p] }),
                                        (0, a.jsx)(Z.O, {
                                            isShimmerVisible: d.familiarSubpage.isLoading,
                                            isShimmerActive: !0,
                                            headerClassName: ek().blockHeader,
                                            containerClassName: ek().block,
                                            title: v,
                                            showHeaderShimmer: d.familiarSubpage.shouldShowTitleBlocks,
                                            'data-test-id': o.Xk.familiarYou.FAMILIAR_YOU_SECTION_ALBUM,
                                            children:
                                                null == (t = d.familiarSubpage.collectionAlbums)
                                                    ? void 0
                                                    : t.map((e) => (0, a.jsx)(G.a, { album: e, contentLinesCount: 3 }, e.id)),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(J.A, { children: (0, a.jsx)(q.w, { className: ek().footer }) }),
                            ],
                        }),
                    });
                }),
                eI = (0, n.PA)((e) => {
                    let { forwardRef: t, tabsState: i, tabElementId: r, artistId: n } = e,
                        { artist: c } = (0, g.g)(),
                        { from: d } = (0, K.f)(),
                        u = eo({ artistId: n, entityContextType: H.h.ARTIST_FAMILIAR_FROM_WAVE }),
                        m = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: U.K.Various,
                                    meta: { id: String(n) },
                                    from: d,
                                    overrideAutoflowSeeds: ['artist:'.concat(n)],
                                    overrideContextType: z.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: c.familiarSubpage.vibeEntitiesData,
                            }),
                            [c.familiarSubpage.vibeEntitiesData, n, d],
                        ),
                        _ = (0, s.useMemo)(() => {
                            var e;
                            return (0, a.jsx)(en, {
                                isShimmerVisible: c.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: X.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, B.$)(ek().block, ek().tracksBlock),
                                children:
                                    null == (e = c.familiarSubpage.vibeTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, a.jsx)($.K, { track: e, playContextParams: m(e, t) }, e.id)),
                            });
                        }, [c.familiarSubpage.isLoading, c.familiarSubpage.vibeTracks, m]);
                    return (0, a.jsx)(Y._, {
                        sourceContextData: u,
                        children: (0, a.jsxs)(W.N, {
                            className: ek().root,
                            containerClassName: (0, B.$)(ek().scrollContainer, ek().important),
                            ref: t,
                            'data-test-id': o.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_VIBE,
                            children: [
                                (0, a.jsx)(eC, { tabsState: i, tabElementId: r }),
                                (0, a.jsx)(l.Kp, { value: i.value, name: w.VIBE, elementId: r, className: ek().content, children: _ }),
                                (0, a.jsx)(J.A, { children: (0, a.jsx)(q.w, { className: ek().footer }) }),
                            ],
                        }),
                    });
                });
            var eL = i(82586),
                eE = i(68033),
                eT = i.n(eE);
            let eO = (e) => {
                let { tabsState: t, tabElementId: i } = e,
                    r = (0, s.useMemo)(() => {
                        switch (t.value) {
                            case w.COLLECTION:
                                return (0, a.jsx)(el.A, { id: 'error-messages.empty-artist-familiar-collection-title' });
                            case w.VIBE:
                                return (0, a.jsx)(el.A, { id: 'error-messages.empty-artist-familiar-vibe-title' });
                        }
                    }, [t.value]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(eC, { tabsState: t, tabElementId: i }),
                        (0, a.jsxs)('div', {
                            className: eT().root,
                            children: [
                                (0, a.jsx)(eL.I, { className: eT().icon, variant: 'attention', size: 'xxxl' }),
                                (0, a.jsx)(ec.DZ, { className: eT().title, variant: 'h3', size: 'xs', children: r }),
                            ],
                        }),
                    ],
                });
            };
            var eS = i(74694);
            let ej = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        { artist: r } = (0, g.g)(),
                        { formatMessage: n } = (0, F.A)(),
                        { isScrolling: o } = (0, s.useContext)(eu.B),
                        l = (0, ed.W)(),
                        c = eg(t);
                    return (0, a.jsx)(eS.Y, {
                        variant: eS.V.COMPOSITE,
                        staticClassName: (0, B.$)(ey().staticHeader, ey().important),
                        'aria-hidden': !o,
                        stickyClassName: (0, B.$)(ey().stickyHeader, ey().important),
                        stickyChild: (0, a.jsxs)('div', {
                            className: ey().container,
                            children: [
                                l.canBack && (0, a.jsx)(em.L, { withForwardControl: !1, withBackwardControl: l.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, a.jsxs)(eh.wI, {
                                    isShimmerVisible: r.familiarSubpage.isLoading,
                                    shimmer: (0, a.jsx)(eb, {}),
                                    className: ey().tabs,
                                    elementId: i,
                                    onTabChange: c,
                                    ...t,
                                    children: [
                                        (0, a.jsx)(e_.o, {
                                            className: ey().tab,
                                            value: w.COLLECTION,
                                            title: n({ id: 'page.familiar-collection' }),
                                            'aria-hidden': !o,
                                            tabIndex: o ? 0 : -1,
                                        }),
                                        (0, a.jsx)(e_.o, {
                                            className: ey().tab,
                                            value: w.VIBE,
                                            title: n({ id: 'page.familiar-vibe' }),
                                            'aria-hidden': !o,
                                            tabIndex: o ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                ew = (0, n.PA)((e) => {
                    var t, i, n;
                    let { artistId: k, preloadedArtist: N, preloadedFamiliar: I } = e,
                        L = (0, r.useSearchParams)(),
                        { artist: E, disclaimerModalState: T } = (0, g.g)(),
                        { contentScrollRef: O, setContentScrollRef: S } = (0, f.g)(),
                        D = (0, s.useId)(),
                        B = (0, s.useMemo)(() => {
                            switch (L.get(y.K.TAB)) {
                                case x.J.COLLECTION:
                                    break;
                                case x.J.VIBE:
                                    return w.VIBE;
                            }
                            return w.COLLECTION;
                        }, [L]),
                        F = (0, l.zb)(B),
                        H = (0, u.S)({ artist: null == (t = E.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                    (0, P.G)(k),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = E.meta) ? void 0 : e.artist.isUnsafeLegal) && H();
                        }, [null == (i = E.meta) ? void 0 : i.artist.isUnsafeLegal, H]),
                        (0, R._)(E, k),
                        (0, s.useEffect)(
                            () => () => {
                                E.familiarSubpage.reset();
                            },
                            [E],
                        ),
                        (0, v.J)(E.familiarSubpage.isResolved),
                        E.familiarSubpage.isNotFound && (0, r.notFound)();
                    let U = (0, s.useMemo)(() => {
                            switch (F.value) {
                                case w.COLLECTION:
                                    if (E.familiarSubpage.isResolved && !E.familiarSubpage.hasCollectionEntities)
                                        return (0, a.jsx)(eO, { tabsState: F, tabElementId: D });
                                    return (0, a.jsx)(eN, { tabsState: F, forwardRef: S, tabElementId: D, artistId: k });
                                case w.VIBE:
                                    if (E.familiarSubpage.isResolved && !E.familiarSubpage.hasVibeTracks) return (0, a.jsx)(eO, { tabsState: F, tabElementId: D });
                                    return (0, a.jsx)(eI, { tabsState: F, forwardRef: S, tabElementId: D, artistId: k });
                            }
                        }, [E.familiarSubpage.hasCollectionEntities, E.familiarSubpage.hasVibeTracks, E.familiarSubpage.isResolved, k, S, D, F]),
                        z = [];
                    return (E.familiarSubpage.isNeededToLoad && z.push(E.familiarSubpage.getData({ preloadedFamiliar: I, artistId: k })),
                    E.infoLoadingState.isNeededToLoad && z.push(E.getInfo({ artistId: k, preloadedArtist: N })),
                    ((e) => {
                        var t;
                        (0, s.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                j({ artist: (0, C.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, A.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(E),
                    z.length && (0, s.use)(Promise.allSettled(z)),
                    E.familiarSubpage.isRejected && !E.familiarSubpage.isNotFound)
                        ? (0, a.jsx)(c.SomethingWentWrong, {})
                        : (null == (n = E.meta) ? void 0 : n.artist.isLegalRejected)
                          ? (0, a.jsx)(b.M, { modalState: T })
                          : (0, a.jsx)(p.n, {
                                pageId: _._Q.FAMILIAR_YOU,
                                pageEntityId: k,
                                children: (0, a.jsx)(d.h, {
                                    scrollElement: O,
                                    headerThreshold: 148,
                                    children: (0, a.jsxs)('div', {
                                        className: M().root,
                                        'data-test-id': o.Xk.artist.ARTIST_FAMILIAR_PAGE,
                                        children: [(0, a.jsx)(ej, { tabElementId: D, tabsState: F }), (0, a.jsx)(h.F, { blockIdForFrom: m.U.DEFAULT, children: U })],
                                    }),
                                }),
                            });
                });
            var eR = i(17024);
            let eP = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return (e && (0, eR.L)(e)) || (0, r.notFound)(), (0, a.jsx)(ew, { artistId: e });
            };
        },
        42125: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => d });
            var a = i(3266),
                r = i(55178),
                n = i(14190),
                s = i(73422),
                o = i(84570),
                l = i(64552);
            let c = (0, r.cache)(async (e) => (0, l.M)(e, l.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        i = (0, o.k)(n.pE[n.cy], t),
                        r = await c(i);
                    return (e, t) => {
                        let n = null == r ? void 0 : r[e.id],
                            s = '';
                        return (Array.isArray(n) || 'string' == typeof n) && (s = new a.S(n, i).format(t)), Array.isArray(s) ? s.join('') : s;
                    };
                };
        },
        43565: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => l });
            var a = i(32290),
                r = i(63618),
                n = i(82586),
                s = i(20753),
                o = i.n(s);
            let l = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(o().root, { [o().root_active]: t }, i), 'aria-hidden': !0 });
            };
        },
        44242: (e, t, i) => {
            'use strict';
            function a(e) {
                return { ios: { app_name: e.appName, app_store_id: '520797969', url: 'yandexmusic:/'.concat(e.additional.url) }, web: { url: e.additional.fullUrl } };
            }
            i.d(t, { X: () => a });
        },
        44884: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { b: () => a }),
                (function (e) {
                    (e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search');
                })(a || (a = {}));
        },
        45807: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var a,
                r = i(72812),
                n = i(55178),
                s = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return s[e](i, i.exports, l), i.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0);
                let e = l(810),
                    t = l(352);
                c.l = (i) => {
                    let [a, r] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        o = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (r(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    (0, e.useEffect)(() => {
                        o();
                    }, [i, o]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', o),
                                window.addEventListener('resize', o),
                                () => {
                                    null == e || e.removeEventListener('scroll', o), window.removeEventListener('resize', o);
                                }
                            );
                        }, [i, o]);
                    let l = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: a,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: a && n,
                    };
                };
            })(),
                c.X;
            var d = c.l;
        },
        46646: (e, t, i) => {
            var a = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    r = t[0];
                return i.e(t[1]).then(() => i.t(r, 19));
            }
            (r.keys = () => Object.keys(a)), (r.id = 46646), (e.exports = r);
        },
        47216: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            var a = i(94821);
            let r = '@yandexmusic';
            function n(e) {
                return e.cardType === a.W.SUMMARY_LARGE_IMAGE
                    ? { card: a.W.SUMMARY_LARGE_IMAGE, site: r, title: e.title, description: e.description }
                    : { card: a.W.APP, site: r, title: e.title, app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: 'yandexmusic:/'.concat(e.url) } } };
            }
        },
        49522: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var a = i(32290),
                r = i(63618),
                n = i(55178),
                s = i(21732),
                o = i(45807),
                l = i(63423),
                c = i(82586),
                d = i(60178),
                u = i.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: h = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: f, swipeForward: v, shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: x, shouldHideControls: y } = (0, o.Y)(t),
                    b = (0, n.useCallback)(
                        (e) => {
                            f(), e.stopPropagation();
                        },
                        [f],
                    ),
                    C = (0, n.useCallback)(
                        (e) => {
                            v(), e.stopPropagation();
                        },
                        [v],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(u().root, m),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, a.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, i, { [u().control_hidden]: y, [u().control_withSecondaryColor]: _ }),
                            onClick: b,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: g,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, a.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: y, [u().control_withSecondaryColor]: _ }),
                            onClick: C,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: x,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        51714: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s });
            var a = i(55178),
                r = i(31010),
                n = i(36477);
            let s = (e) => {
                var t;
                let { setDeeplink: i } = null != (t = (0, r.P)()) ? t : {};
                (0, a.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, n.u)('/artist/:artistId', { params: { artistId: e } });
                        null == i || i(t);
                    }
                    return () => {
                        null == i || i(null);
                    };
                }, [e, i]);
            };
        },
        54171: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var a = i(19383),
                r = i(85017);
            let n = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: n } = e;
                return (0, a.l)({ entity: t, entityType: r.n.TRACK, callback: i, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        57815: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => r });
            var a = i(87151);
            let r = (e) => {
                var t, i;
                return e
                    ? {
                          id: Number(e.id),
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
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (i = e.isAvailable) || i, disclaimers: (0, a.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => b });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(60900),
                o = i(39407),
                l = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                m = i(31010),
                _ = i(61945),
                h = i(57594),
                p = (function (e) {
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
            let f = (e, t, i) => {
                switch (e) {
                    case p.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case p.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                    case p.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case p.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case p.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case p.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                    case p.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                }
            };
            var v = i(61258),
                g = i(77088),
                x = i.n(g);
            let y = (0, n.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, h.g)(),
                        { formatDate: n } = (0, s.A)(),
                        { language: d } = (0, _.h)();
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(x().copyrights, t),
                        'data-test-id': l.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    n(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, a.jsx)(v.N, {
                                        target: '_blank',
                                        href: f(p.YANDEX, i.tld, d),
                                        className: (0, r.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': l.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, a.jsx)(o.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(v.N, {
                                target: '_blank',
                                href: f(p.YANDEX_PROJECTS, i.tld, d),
                                className: x().copyrightLink,
                                'data-test-id': l.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, a.jsx)(o.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                b = (0, n.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: n, location: s } = (0, h.g)(),
                        { isEnabled: u } = null != (t = (0, m.P)()) ? t : {},
                        { language: g } = (0, _.h)(),
                        b = (0, d.w)(!0),
                        C = ((e) => {
                            let { platform: t, tld: i, language: r, userRegion: n } = e,
                                s = { title: (0, a.jsx)(o.A, { id: 'footer.links-copyright-holders' }), url: f(p.COPYRIGHT_HOLDER, i, r) },
                                l = { title: (0, a.jsx)(o.A, { id: 'footer.links-privacy-policy' }), url: f(p.PRIVACY_POLICY, i, r) },
                                c = { title: (0, a.jsx)(o.A, { id: 'footer.links-terms' }), url: f(p.AGREEMENT, i, r) },
                                d = { title: (0, a.jsx)(o.A, { id: 'footer.links-recommendation-rules' }), url: f(p.RECOMMENDATION_RULES, i, r) },
                                u = { title: (0, a.jsx)(o.A, { id: 'footer.links-help' }), url: f(p.HELP, i, r) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, d];
                                    return 'ru' === n && e.push(l), e.push(u), e;
                                }
                                case 'desktop':
                                    return [s, c, d, u];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: g, userRegion: n.account.data.userSessionRegionIso });
                    return (0, a.jsxs)('footer', {
                        className: (0, r.$)(x().root, x().important, { [x().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': l.S7.FOOTER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: x().links,
                                children: [
                                    (0, a.jsx)('ol', {
                                        className: x().list,
                                        'data-test-id': l.S7.FOOTER_LINKS_LIST,
                                        children: C.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, a.jsx)(
                                                'li',
                                                {
                                                    className: x().item,
                                                    children: (0, a.jsx)(v.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: x().link,
                                                        'data-test-id': l.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, a.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: x().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: b },
                                        'data-test-id': l.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(y, {}),
                        ],
                    });
                });
        },
        59888: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => s });
            var a = i(32290),
                r = i(55178),
                n = i(21183);
            let s = (e) => {
                let { sourceContextData: t, children: i } = e,
                    s = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, a.jsx)(n.l.Provider, { value: s, children: i });
            };
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        60367: (e) => {
            e.exports = {
                root: 'ArtistFamiliarPageHeader_root__0Wxyx',
                container: 'ArtistFamiliarPageHeader_container__HFQzt',
                title: 'ArtistFamiliarPageHeader_title__YpVQg',
                tabs: 'ArtistFamiliarPageHeader_tabs__CrnJC',
                tab: 'ArtistFamiliarPageHeader_tab__RK4OK',
                tabsShimmer: 'ArtistFamiliarPageHeader_tabsShimmer__cbLvV',
                tabShimmer: 'ArtistFamiliarPageHeader_tabShimmer__iLiqI',
                staticHeader: 'ArtistFamiliarPageHeader_staticHeader__LrzR8',
                important: 'ArtistFamiliarPageHeader_important__buc81',
                stickyHeader: 'ArtistFamiliarPageHeader_stickyHeader__u7JdF',
            };
        },
        60814: (e) => {
            e.exports = { shimmer: 'TracksList_shimmer__jD4N4' };
        },
        63670: (e, t, i) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0);
            var a = i(30782);
            (t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                a.__exportStar(i(88222), t),
                (t._Parser = void 0);
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => b });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(16172),
                _ = i(52068),
                h = i(62376),
                p = i(37240),
                f = i(83920),
                v = i(20472),
                g = i(12894),
                x = i(30310),
                y = i.n(x);
            let b = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: n } = (0, o.A)(),
                    x = n({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: i } = (0, _.gf)(),
                        { pageId: a } = (0, p.$)(),
                        r = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !a) return;
                        let n = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: a,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, m.z5)(t.evgenInstance, n);
                    }, [t, e, i, a, r]);
                })(x);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: i } = (0, p.$)(),
                            a = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, m.bv)(e.evgenInstance, r);
                            }, [e, t, i, a]),
                        };
                    })(),
                    C = (0, s.useCallback)(() => {
                        b(), (window.location.href = v.Z.main.href);
                    }, [b]),
                    { contentRef: A } = (0, f.g)();
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(y().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(g.L, { withBackwardFallback: '/', className: (0, r.$)(y().navigation, { [y().navigation_desktop]: !A }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, r.$)(y().content, { [y().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(d.I, { className: y().icon, variant: 'attention', size: 'xxl' }),
                                (0, a.jsx)(u.DZ, { className: (0, r.$)(y().title, y().important), variant: 'h3', size: 'xs', children: x }),
                                (0, a.jsxs)(u.HL, {
                                    className: (0, r.$)(y().text, y().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, a.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, a.jsx)(c.$, {
                                    onClick: C,
                                    className: y().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, a.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, a.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        64552: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c, X: () => l });
            var a = i(29222),
                r = i(14190);
            let n = async (e) => e.then((e) => e.default),
                s = r.pE[r.cy],
                o = s.langs.reduce((e, t) => (e.set(t, async () => n(i(12526)('./'.concat(t, '.json')))), e), new Map()),
                l = s.langs.reduce((e, t) => (e.set(t, async () => n(i(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        i = t.get(e),
                        r = t.get('ru');
                    if (i) return i();
                    if (r) return r();
                    throw new a.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        65024: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => r });
            let a = new Set(Object.values(i(3785).M)),
                r = (e) => 'string' == typeof e && a.has(e);
        },
        68033: (e) => {
            e.exports = { root: 'ArtistFamiliarPageEmpty_root__s5xX9', icon: 'ArtistFamiliarPageEmpty_icon__b7kR5', title: 'ArtistFamiliarPageEmpty_title__wvBGS' };
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => N });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(21916),
                o = i(55178),
                l = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                m = i(71926),
                _ = i(41677),
                h = i(28999),
                p = i(57594),
                f = i(53514),
                v = i(85017),
                g = i(13798),
                x = i(61258),
                y = i(25649),
                b = i(24760),
                C = i(84141),
                A = i(5856),
                k = i.n(A);
            let N = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: A,
                        withExplicitMark: N = !0,
                        withSecondaryColor: I,
                        captionSize: L = 'm',
                        explicitSize: E = 'xxxs',
                        withAllArtistsTitle: T,
                        textClassName: O,
                        artistsClassName: S,
                        ignoreDislikedStyles: j,
                        withCustomTooltip: w = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: P,
                        beforeTitle: D,
                        withArtistLink: M = !0,
                        withTrackLink: B = !0,
                        afterTitle: F,
                        withContextMenuArtists: H,
                    } = e,
                    { formatMessage: U } = (0, l.A)(),
                    { sendNavigateSearchFeedback: z } = (0, h.z)(),
                    {
                        settings: { isMobile: W },
                    } = (0, p.g)(),
                    V = (0, b.$)({ withCustomTooltip: w }),
                    G = (0, s.useSearchParams)(),
                    $ = n.getUrl(P ? Object.fromEntries(G) : void 0),
                    K = (0, o.useMemo)(() => {
                        var e;
                        let t = U({ id: 'entity-names.track-name' }, { trackName: n.title });
                        return ''.concat(t, ' ').concat(null != (e = n.version) ? e : '');
                    }, [U, n.title, n.version]),
                    Y = (0, C.O)({ track: n, onNavigate: z, withSavingQueryParams: P, entityType: v.n.TRACK }),
                    X = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                            return (0, a.jsx)(u.m_, {
                                enabled: V && !W,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: f.V,
                                children: (0, a.jsx)(m.HL, {
                                    className: (0, r.$)(k().text, k().title),
                                    type: 'entity',
                                    size: L,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: n.title,
                                }),
                            });
                        },
                        [W, V, L, n.isRemoved, n.title, n.version],
                    ),
                    Q = (0, o.useMemo)(() => {
                        let e = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                        return n.isRemoved
                            ? (0, a.jsx)(u.m_, {
                                  enabled: V && !W,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: U({ id: 'track-title.error-not-found' }),
                                  hoverSettings: f.V,
                                  children: (0, a.jsx)(m.HL, {
                                      className: (0, r.$)(k().text, k().title),
                                      type: 'entity',
                                      size: L,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: V ? void 0 : U({ id: 'track-title.error-not-found' }),
                                      children: (0, a.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : n.hasTrackLink && B
                              ? (0, a.jsx)(x.N, {
                                    onClick: Y,
                                    className: k().albumLink,
                                    href: $,
                                    'aria-label': K,
                                    title: V ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: X(),
                                })
                              : X({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [W, n.title, n.isRemoved, n.version, n.hasTrackLink, X, V, U, L, K, Y, $, B]),
                    Z = (0, y.s)(n.artists, A),
                    q = (0, o.useMemo)(() => +!!R, [R]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(k().root, { [k().root_disabled]: !n.isAvailable, [k().root_disliked]: n.isDisliked && !j, [k().root_withSecondaryColor]: I }, t),
                    children: (0, a.jsxs)('div', {
                        className: k().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(k().titleContainer, { [k().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, a.jsxs)(m.HL, {
                                        className: (0, r.$)(k().text, O),
                                        type: 'entity',
                                        size: L,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            Q,
                                            !n.isRemoved &&
                                                n.version &&
                                                (0, a.jsxs)(m.HL, {
                                                    className: (0, r.$)(k().text, k().version),
                                                    type: 'entity',
                                                    size: L,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: V ? void 0 : n.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', n.version],
                                                }),
                                        ],
                                    }),
                                    n.explicitDisclaimer &&
                                        N &&
                                        (0, a.jsx)(g.N, {
                                            containerClassName: k().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: E,
                                            variant: n.explicitDisclaimer,
                                            className: k().explicitMark,
                                            trackId: n.id,
                                        }),
                                    F,
                                ],
                            }),
                            Z.length > 0 &&
                                (0, a.jsx)(_.i, {
                                    className: (0, r.$)(k().text, { [k().artists]: R }, S, O),
                                    withAllArtistsTitle: T,
                                    linkClassName: (0, r.$)(k().text, k().link),
                                    captionClassName: (0, r.$)(k().text, k().artistCaption),
                                    artists: Z,
                                    withLink: n.isNonUserGenerated && M,
                                    lineClamp: q,
                                    captionSize: L,
                                    withContextMenu: H,
                                }),
                        ],
                    }),
                });
            });
        },
        69e3: (e) => {
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
        69951: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(21732),
                l = i(90169),
                c = i(57594),
                d = i(40229),
                u = i(43565),
                m = i(8677),
                _ = i(68912),
                h = i(92102),
                p = i(85673),
                f = i.n(p);
            let v = (0, n.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: n,
                        className: p,
                        withDNDBlock: v,
                        isDragging: g,
                        draggingClassName: x,
                        ignoreDislikedStyles: y,
                        withSecondaryColor: b,
                        handleRemove: C,
                        withDislike: A,
                        withTrailer: k = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: I,
                        hideControls: L,
                    } = e,
                    E = (0, l.D)({ playContextParams: n, entityId: i.entityId }),
                    {
                        settings: { isMobile: T },
                    } = (0, c.g)(),
                    O = (0, s.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: f().playButtonCell,
                                ignoreDislikedStyles: y,
                                radius: 'xs',
                                ...e,
                            }),
                        [y, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(h.C, {
                    className: (0, r.$)(p, { [f().trackWithDots]: v, [f().important]: v }),
                    track: i,
                    beforeBlock: v ? (0, a.jsx)(u.O, { className: (0, r.$)(f().dots, x), isDragging: g }) : void 0,
                    meta: (0, a.jsx)(_.j, { withArtistLink: !T, beforeTitle: N, track: i, ignoreDislikedStyles: y, withSecondaryColor: b }),
                    playButtonCellRender: O,
                    controls: (0, a.jsx)(m.Q, {
                        track: i,
                        className: f().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: b,
                        handleRemove: C,
                        withDislike: A,
                        withTrailer: k,
                        removeButtonAriaLabel: I,
                        hideControls: L,
                    }),
                    ...E,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        71670: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => r });
            var a = i(55178);
            let r = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        73422: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(91945),
                r = i(14190),
                n = i(84570),
                s = i(40363);
            let o = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var l = i(18870);
            let c = (e) => {
                var t;
                return null != (t = { ru: l.$.RU, en: l.$.EN, uz: l.$.UZ, kk: l.$.KK }[e]) ? t : l.$.RU;
            };
            var d = i(64552);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, n.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, n.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, i, a;
                    let r = (0, n.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (i = this.storage) || i.set(r), null == (a = this.changeLanguageHandler) || a.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, n.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, n.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {});
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: i, changeLanguageHandler: l, logger: c }) {
                    let d;
                    if (
                        ((0, a._)(this, 'language', void 0),
                        (0, a._)(this, 'storage', void 0),
                        (0, a._)(this, 'dictionary', void 0),
                        (0, a._)(this, 'config', void 0),
                        (0, a._)(this, 'logger', void 0),
                        (0, a._)(this, 'changeLanguageHandler', void 0),
                        (0, a._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = i),
                        (this.logger = c),
                        (this.changeLanguageHandler = l),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: o(navigator.languages.join()),
                            });
                        }
                    } else [d] = o(e) || [];
                    this.language = (0, n.k)(this.config, d);
                }
            }
        },
        74523: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => a });
            let a = (e, t) => {
                let [i, a] = e.split('?'),
                    r = new URLSearchParams(a || '');
                for (let [e, i] of new URLSearchParams(t).entries()) r.set(e, i);
                let n = r.toString();
                return ''.concat(i).concat(n ? '?'.concat(n) : '');
            };
        },
        75245: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var a,
                r = i(55178),
                n = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length; )
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        i.r(t), i.d(t, { clsx: () => a, default: () => r });
                        let r = a;
                    },
                    9058: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => a });
                        let a = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5056: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0);
                        let r = i(4377),
                            n = i(5881),
                            s = i(810),
                            o = a(i(9058)),
                            l = (e) => {
                                let { className: t, itemClassName: i, children: a, forwardRef: l, role: c, ...d } = e;
                                return (0, r.jsx)('ol', {
                                    ref: l,
                                    className: (0, n.clsx)(o.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: s.Children.map(a, (e) => (0, r.jsx)('li', { className: (0, n.clsx)(o.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, s.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return n[e].call(i.exports, i, i.exports, o), i.exports;
            }
            (o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var l = {};
            (() => {
                Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0);
                var e = o(5056);
                Object.defineProperty(l, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = l.l;
            l.X;
        },
        76768: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        77088: (e) => {
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
        83992: (e, t, i) => {
            'use strict';
            function a(e) {
                let { tld: t, url: i } = e;
                return i || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            i.d(t, { v: () => a });
        },
        84570: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        86246: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var a = (function (e) {
                return (e.COLLECTION = 'collection'), (e.VIBE = 'vibe'), e;
            })({});
        },
        87151: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            var a = i(65024);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        88222: (e, t) => {
            'use strict';
            var i, a;
            Object.defineProperty(t, '__esModule', { value: !0 }),
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
                    (e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag');
                })(i || (t.TYPE = i = {})),
                (function (e) {
                    (e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime');
                })(a || (t.SKELETON_TYPE = a = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === i.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === i.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === i.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === i.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === i.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === i.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === i.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === i.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === i.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === a.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === a.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: i.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: i.number, value: e, style: t };
                });
        },
        89661: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        91063: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        91226: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 36326));
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(19383);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        92102: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => C });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(91027),
                l = i(58359),
                c = i(71735),
                d = i(2969),
                u = i(23352),
                m = i(46200),
                _ = i(5537),
                h = i(28999),
                p = i(72676),
                f = i(57594),
                v = i(1444),
                g = i(60900),
                x = i(54171),
                y = i(35587),
                b = i.n(y);
            let C = (0, n.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: n,
                        meta: y,
                        beforeBlock: C,
                        controls: A,
                        playButtonCellRender: k,
                        withLightning: N,
                        isPlaying: I,
                        isCurrent: L,
                        togglePlay: E,
                        restartPlay: T,
                        onPlayClick: O,
                        playButtonIconSize: S,
                        skipFreemiumCloseListeningPaywall: j = !1,
                        ...w
                    } = e,
                    { shouldShowBuySubscriptionModal: R, showBuySubscriptionModal: P } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: M,
                        settings: { isMobile: B },
                        album: F,
                        albumCPA: { isPlusCPAPlayerBarEnabled: H },
                        paywall: { modal: U },
                    } = (0, f.g)(),
                    { ref: z, intersectionPropertyId: W } = (0, u.n)(),
                    V = (0, d.b)(),
                    G = (0, c.P)(),
                    $ = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: a } = (0, g.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, i && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: N, track: n }),
                    K = ((e) => {
                        let { sonataState: t } = (0, f.g)(),
                            i = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let a = t.entityMeta.entityId;
                            return i && a === e;
                        }
                        return i;
                    })(n.entityId),
                    Y = H(F.id, null == (t = F.meta) ? void 0 : t.isNonMusic),
                    X = n.isAvailable && R && !Y,
                    Q = (0, _.N)(),
                    Z = n.isAvailable && Q && !Y && !j,
                    q = (0, x.w)({ track: n, callback: E }),
                    J = (0, o.c)(() => {
                        D.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, x.w)({ track: n, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, h.z)(),
                    [ei, ea] = (0, s.useState)(!1),
                    er = (0, o.c)(() => {
                        if (!G()) {
                            if (X) return void P();
                            if (Z) return void U.open();
                            ei || I || (ea(!0), null == et || et()), q(), V(!I), null == O || O(!I);
                        }
                    }),
                    en = (0, o.c)(() => {
                        if (I) return void T();
                        er();
                    }),
                    es = (0, o.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            R && n.isAvailableOnlyForPlus && P(), Q && n.isAvailableOnlyForPlus && U.open();
                            return;
                        }
                        if (X) return void P();
                        let t = !B && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !M.modal.isOpened));
                        return Z && !t
                            ? void U.open()
                            : ((0, l.P)(e, b().ripple), B)
                              ? void er()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !M.modal.isOpened && (ee(), Z && U.open()));
                    }),
                    eo = null == k ? void 0 : k({ onPlayButtonClick: er, isPlaying: I, isCurrent: L, isLoading: K, playButtonIconSize: S });
                return (0, a.jsxs)(v.C, {
                    ref: z,
                    'aria-label': $,
                    'data-intersection-property-id': W,
                    onClick: es,
                    className: (0, r.$)(b().root, { [b().root_disabled]: !n.isAvailable, [b().root_current]: L && B }, i),
                    ...w,
                    children: [C, eo, y, A],
                });
            });
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        94821: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            var a = (function (e) {
                return (e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e;
            })({});
        },
        95226: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var a = i(32290),
                r = i(55178),
                n = i(73818);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: s,
                        blockPosX: o,
                        blockPosY: l,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: m,
                        displayReasonId: _,
                    } = e,
                    h = (0, r.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: s,
                            blockPosX: o,
                            blockPosY: l,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: _,
                        }),
                        [t, i, s, o, l, c, d, u, _],
                    );
                return (0, a.jsx)(n.p.Provider, { value: h, children: m });
            };
        },
        95481: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => v });
            var a = i(55178),
                r = i(16172),
                n = i(52068),
                s = i(6752),
                o = i(62376),
                l = i(1677),
                c = i(48922),
                d = i(84782),
                u = i(30915),
                m = i(18746),
                _ = i(37240),
                h = i(51012),
                p = i(47498);
            let f = [
                    c._Q.HOME,
                    c._Q.LANDING,
                    c._Q.NON_MUSIC,
                    c._Q.OWN_COLLECTION,
                    c._Q.SEARCH,
                    c._Q.ARTIST,
                    c._Q.CONCERTS,
                    c._Q.CONCERT,
                    c._Q.ALBUM,
                    c._Q.PLAYLIST,
                    c._Q.SLIDES_SCREEN,
                    c._Q.PROMOLANDING_ALBUM,
                    c._Q.WAVE_LANDING_SCREEN,
                ],
                v = () => {
                    let e = (0, a.useRef)(!1),
                        t = (0, n.st)(),
                        i = (0, o.U)(),
                        { hash: v } = (0, n.gf)(),
                        { pageId: g } = (0, _.$)(),
                        { tabId: x, tabPos: y, isTabSelectedByDefault: b } = (0, p.R)(),
                        { offsetBlockPosY: C } = (0, u.u)(),
                        { blockId: A, blockType: k, blockPosX: N, blockPosY: I, mainObjectType: L, mainObjectId: E, objectsCount: T } = (0, d.N)(),
                        { filterKey: O, filterValue: S, filterPos: j } = (0, m.G)(),
                        { skeleton: w } = (0, h.b)(),
                        R = (0, s.L)(() => (void 0 !== C && void 0 !== I ? C + I : I));
                    return (0, a.useCallback)(() => {
                        if (!t || !g || !c.xK.includes(g) || !f.includes(g) || e.current) return;
                        let a = { hash: v, pageId: l.F[g], entityType: k, entityId: A, entityPosX: N, entityPosY: R, objectsCount: T };
                        void 0 !== O && ((a.filterKey = O), (a.filterValue = S), (a.filterPos = j)),
                            c.qG.includes(g) && ((a.tabId = x), (a.tabPos = y), (a.isTabSelectedByDefault = b)),
                            w && (a.skeletonId = w),
                            E && L && ((a.mainObjectType = L), (a.mainObjectId = E));
                        let n = (0, r.Fx)({ params: a, logger: i, context: 'useSendEventOnBlockLoaded' });
                        n && ((0, r.uY)(t.evgenInstance, n), (e.current = !0));
                    }, [t, g, v, k, A, N, R, O, S, j, T, w, E, L, i, x, y, b]);
                };
        },
        98148: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => x });
            var a = i(32290),
                r = i(63618),
                n = i(55178),
                s = i(16172),
                o = i(80451),
                l = i(6752),
                c = i(75245),
                d = i(79856),
                u = i(84782),
                m = i(26042),
                _ = i(19620),
                h = i(49522),
                p = i(30564),
                f = i(33696),
                v = i.n(f);
            let g = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: f,
                            isShimmerActive: g,
                            isShimmerWithSubcover: x,
                            isShimmerCentered: y,
                            isShimmerRounded: b,
                            title: C,
                            description: A,
                            coverUrl: k,
                            viewAllActionLink: N,
                            titleChildren: I,
                            headerChildren: L,
                            children: E,
                            className: T,
                            containerClassName: O,
                            headerClassName: S,
                            itemClassName: j,
                            showHeaderShimmer: w = !1,
                            showShimmerInfo: R = !0,
                            showControls: P = !0,
                            headingRef: D,
                            headingVariant: M,
                            customShimmer: B,
                            ...F
                        } = e,
                        H = (0, n.useId)(),
                        U = (0, n.useRef)(null),
                        { objectsCount: z } = (0, u.N)(),
                        W = (0, n.useMemo)(
                            () =>
                                w && f
                                    ? (0, a.jsx)('div', { className: S, children: (0, a.jsx)(d.W, { isActive: g, className: v().shimmerTitle, radius: 'l' }) })
                                    : C || A || I || L
                                      ? (0, a.jsx)(m.B, {
                                            objectType: s.ky.Shortcut,
                                            objectId: String(N),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != z ? z : 0,
                                            children: (0, a.jsx)(_.T, {
                                                className: S,
                                                labeledForId: H,
                                                title: C,
                                                description: A,
                                                coverUrl: k,
                                                viewAllActionLink: N,
                                                controls: P && (0, a.jsx)(h.X, { className: v().controls, carouselRef: U }),
                                                headingRef: D,
                                                headingVariant: M,
                                                withDescription: !!A,
                                                titleChildren: I,
                                                children: L,
                                            }),
                                        })
                                      : void 0,
                            [k, A, S, D, M, H, g, f, z, P, w, C, I, L, N],
                        ),
                        V = (0, l.L)(() => B || (0, p.k)({ className: i, isActive: g, withInfo: R, withSubcover: x, centered: y, round: b }));
                    return (0, a.jsxs)('section', {
                        ref: t,
                        className: (0, r.$)(v().root, T),
                        ...(0, o.getDataAttrFromProps)(F),
                        children: [
                            W,
                            (0, a.jsx)(c.F, {
                                className: O,
                                ref: U,
                                itemClassName: (0, r.$)(v().item, v().important, j),
                                'aria-labelledby': ''.concat(H, ' ').concat(H, '-description'),
                                children: f ? V : E,
                            }),
                        ],
                    });
                },
                x = (0, n.forwardRef)((e, t) => (0, a.jsx)(g, { forwardRef: t, ...e }));
        },
        98350: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var a = (function (e) {
                return (e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e;
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 6639, 7231, 7972, 6347, 3183, 9763, 8868, 7258, 4505, 3379, 3647, 1096, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6477, 7275,
                2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 6341, 4797, 4220, 9562, 7358,
            ],
            () => e((e.s = 91226)),
        ),
            (_N_E = e.O());
    },
]);
