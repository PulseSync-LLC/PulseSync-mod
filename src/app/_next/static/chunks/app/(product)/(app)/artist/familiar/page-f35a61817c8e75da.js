(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3580, 7722],
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
        1797: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => r });
            var i = a(40207);
            let r = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: r } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        2096: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => P });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(39004),
                o = a(44031),
                c = a(61493),
                u = a(71035),
                d = a(66738),
                m = a(3392),
                _ = a(4254),
                p = a(17545),
                h = a(4071);
            let g = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: n, iconSize: o, size: u = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    g = (0, s.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, i.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: u,
                    radius: 'round',
                    'aria-label': p,
                    onClick: g,
                    icon: (0, i.jsx)(d.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var f = a(79367),
                v = a(34159),
                x = a(85743),
                y = a(27954),
                b = a(64720),
                A = a(71996),
                C = a(6304),
                k = a(65165),
                N = a(38097),
                T = a(91907),
                E = a(3407),
                L = a(34826),
                I = a.n(L),
                S = a(82684),
                j = a(85957),
                O = a.n(j);
            let w = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(d.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(S.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                P = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: n,
                            withLightning: h,
                            ignoreDislikedStyles: L,
                            onLikeClick: S,
                            utmLink: j,
                            withSecondaryColor: O,
                            handleRemove: P,
                            withTrailer: R = !0,
                            likeIconSize: D = 'xxs',
                            removeButtonAriaLabel: M,
                            hideControls: B,
                        } = e,
                        { user: F, trailer: U } = (0, y.g)(),
                        { formatMessage: H } = (0, l.A)(),
                        { sendLikeSearchFeedback: z } = (0, x.z)(),
                        [W, Y] = (0, s.useState)(!1),
                        [$, K] = (0, s.useState)(!1),
                        V = (0, f.P)(),
                        G = (0, p.K)(n),
                        {
                            duration: X,
                            lightning: Z,
                            ugc: q,
                        } = ((e, t, a) => {
                            var i;
                            let { withLightning: r, isUGC: n } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / N.k7);
                                              return (0, T.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, k.j)(Math.round((null != (i = e.durationMs) ? i : 0) / 1e3), a) } : null,
                                lightning: r ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: h, isUGC: n.isUGC }, H),
                        J = (0, v.F)(),
                        Q = F.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !B,
                        et = (0, u.c)(async () => {
                            (W || n.isLiked || (Y(!0), null == z || z()), await G(), null == S || S(n.isLiked));
                        }),
                        ea = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, u.c)((e) => {
                            if ((e.stopPropagation(), V())) return void e.preventDefault();
                            (U.openTrackTrailer(n.id), J(o.DomainObjectType.Track, n.id));
                        }),
                        er = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(E._, {
                                        track: n,
                                        open: $,
                                        onOpenChange: K,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(d.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: j,
                                        className: (0, r.$)(I().contextMenu, { [I().contextMenu_visible]: $ }),
                                        handleRemove: P,
                                        withTrailer: R,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, P, $, ee, R, n, j]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(I().root, I().controls, a, {
                            [I().controls_dislikedControls]: n.isDisliked,
                            [I().controls_dislikedColors]: n.isDisliked && !L,
                            [I().controls_disabled]: !n.isAvailable,
                            [I().root_withSecondaryColor]: O,
                        }),
                        children: [
                            Z && (0, i.jsx)(d.I, { 'aria-label': Z.label, size: 'xxs', className: I().lightning, variant: 'lightning' }),
                            q &&
                                (0, i.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(d.I, {
                                            'aria-label': q.label,
                                            size: 'xxs',
                                            className: I().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(m.ZI, { children: q.label }),
                                    ],
                                }),
                            Q && (0, i.jsx)('div', { className: (0, r.$)(I().item, I().downloadIcon), children: (0, i.jsx)(w, { track: n }) }),
                            P && !B && (0, i.jsx)(g, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(I().item, I().removeButton), onClick: P, ariaLabel: M }),
                            ee &&
                                (0, i.jsx)(C.WithOffline, {
                                    fallback: (0, i.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: D,
                                        className: (0, r.$)(I().item, I().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !F.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, i.jsx)(C.WithOffline, {
                                    fallback: (0, i.jsx)(A.k, {
                                        className: (0, r.$)(I().item, I().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(I().item, I().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, i.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(I().duration, { [I().duration_hidden]: $ && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        7929: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        10959: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var i = a(44806);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: r, userRegion: n } = e;
                return 'ru' === n && t(i.z.WebNextFooterDisclaimer, 'on') ? a() : r();
            };
        },
        12234: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(71872);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(i.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, a) => {
            var i = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!a.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 12526), (e.exports = r));
        },
        13580: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => x });
            var i,
                r,
                n = a(23198),
                s = a(46254);
            function l(e, t) {
                var a = t && t.cache ? t.cache : m,
                    i = t && t.serializer ? t.serializer : u;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var a,
                                  i,
                                  r = 1 === e.length ? o : c;
                              return ((a = t.cache.create()), (i = t.serializer), r.bind(this, e, a, i));
                          }
                )(e, { cache: a, serializer: i });
            }
            function o(e, t, a, i) {
                var r = null == i || 'number' == typeof i || 'boolean' == typeof i ? i : a(i),
                    n = t.get(r);
                return (void 0 === n && ((n = e.call(this, i)), t.set(r, n)), n);
            }
            function c(e, t, a) {
                var i = Array.prototype.slice.call(arguments, 3),
                    r = a(i),
                    n = t.get(r);
                return (void 0 === n && ((n = e.apply(this, i)), t.set(r, n)), n);
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
                        var a, i;
                        return ((a = t.cache.create()), (i = t.serializer), c.bind(this, e, a, i));
                    },
                    monadic: function (e, t) {
                        var a, i;
                        return ((a = t.cache.create()), (i = t.serializer), o.bind(this, e, a, i));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(i || (i = {}));
            var p = (function (e) {
                    function t(t, a, i) {
                        var r = e.call(this, t) || this;
                        return ((r.code = a), (r.originalMessage = i), r);
                    }
                    return (
                        (0, n.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                h = (function (e) {
                    function t(t, a, r, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(a, '". Options are "').concat(Object.keys(r).join('", "'), '"'),
                                i.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(p),
                g = (function (e) {
                    function t(t, a, r) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(a), i.INVALID_VALUE, r) || this;
                    }
                    return ((0, n.__extends)(t, e), t);
                })(p),
                f = (function (e) {
                    function t(t, a) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(a, '"'), i.MISSING_VALUE, a) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(p);
            function v(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, a) {
                                e[t] = a;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(r || (r = {}));
            var x = (function () {
                function e(t, a, o, c) {
                    var u,
                        d,
                        m = this;
                    if (
                        (void 0 === a && (a = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var a = t.reduce(function (e, t) {
                                return (e.length && t.type === r.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return a.length <= 1 ? a[0] || '' : a;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, a, n, l, o, c, u) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: r.literal, value: t[0].value }];
                                for (var d = [], m = 0; m < t.length; m++) {
                                    var _ = t[m];
                                    if ((0, s.isLiteralElement)(_)) {
                                        d.push({ type: r.literal, value: _.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(_)) {
                                        'number' == typeof c && d.push({ type: r.literal, value: n.getNumberFormat(a).format(c) });
                                        continue;
                                    }
                                    var v = _.value;
                                    if (!(o && v in o)) throw new f(v, u);
                                    var x = o[v];
                                    if ((0, s.isArgumentElement)(_)) {
                                        ((x && 'string' != typeof x && 'number' != typeof x) || (x = 'string' == typeof x || 'number' == typeof x ? String(x) : ''),
                                            d.push({ type: 'string' == typeof x ? r.literal : r.object, value: x }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(_)) {
                                        var y = 'string' == typeof _.style ? l.date[_.style] : (0, s.isDateTimeSkeleton)(_.style) ? _.style.parsedOptions : void 0;
                                        d.push({ type: r.literal, value: n.getDateTimeFormat(a, y).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(_)) {
                                        var y = 'string' == typeof _.style ? l.time[_.style] : (0, s.isDateTimeSkeleton)(_.style) ? _.style.parsedOptions : l.time.medium;
                                        d.push({ type: r.literal, value: n.getDateTimeFormat(a, y).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(_)) {
                                        var y = 'string' == typeof _.style ? l.number[_.style] : (0, s.isNumberSkeleton)(_.style) ? _.style.parsedOptions : void 0;
                                        (y && y.scale && (x *= y.scale || 1), d.push({ type: r.literal, value: n.getNumberFormat(a, y).format(x) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(_)) {
                                        var b = _.children,
                                            A = _.value,
                                            C = o[A];
                                        if ('function' != typeof C) throw new g(A, 'function', u);
                                        var k = C(
                                            e(b, a, n, l, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(k) || (k = [k]),
                                            d.push.apply(
                                                d,
                                                k.map(function (e) {
                                                    return { type: 'string' == typeof e ? r.literal : r.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(_)) {
                                        var N = _.options[x] || _.options.other;
                                        if (!N) throw new h(_.value, x, Object.keys(_.options), u);
                                        d.push.apply(d, e(N.value, a, n, l, o));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(_)) {
                                        var N = _.options['='.concat(x)];
                                        if (!N) {
                                            if (!Intl.PluralRules)
                                                throw new p(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    i.MISSING_INTL_API,
                                                    u,
                                                );
                                            var T = n.getPluralRules(a, { type: _.pluralType }).select(x - (_.offset || 0));
                                            N = _.options[T] || _.options.other;
                                        }
                                        if (!N) throw new h(_.value, x, Object.keys(_.options), u);
                                        d.push.apply(d, e(N.value, a, n, l, o, x - (_.offset || 0)));
                                        continue;
                                    }
                                }
                                return d.length < 2
                                    ? d
                                    : d.reduce(function (e, t) {
                                          var a = e[e.length - 1];
                                          return (a && a.type === r.literal && t.type === r.literal ? (a.value += t.value) : e.push(t), e);
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
                        (this.locales = a),
                        (this.resolvedLocale = e.resolveLocale(a)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var x = c || {},
                            y = (x.formatters, (0, n.__rest)(x, ['formatters']));
                        this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, y), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((u = e.formats),
                        o
                            ? Object.keys(u).reduce(
                                  function (e, t) {
                                      var a, i;
                                      return (
                                          (e[t] =
                                              ((a = u[t]),
                                              (i = o[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, a || {}), i || {}),
                                                        Object.keys(a).reduce(function (e, t) {
                                                            return ((e[t] = (0, n.__assign)((0, n.__assign)({}, a[t]), i[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : a)),
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
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(d.number), strategy: _.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(d.dateTime), strategy: _.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(d.pluralRules), strategy: _.variadic },
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
        14514: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        17951: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            var i = a(61399);
            let r = (e) => {
                var t, a;
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
                                            disclaimers: (0, i.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (a = e.isAvailable) || a, disclaimers: (0, i.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        18421: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { C: () => n }),
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
                })(i || (i = {})));
            let r = new Set(Object.values(i)),
                n = (e) => 'string' == typeof e && r.has(e);
        },
        19e3: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var i = a(25839),
                r = a(74631),
                n = a(10407);
            let s = (e) => {
                let { sourceContextData: t, children: a } = e,
                    s = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, i.jsx)(n.l.Provider, { value: s, children: a });
            };
        },
        19386: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => s });
            var i = a(74631),
                r = a(43354),
                n = a(25895);
            let s = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, r.P)()) ? t : {};
                (0, i.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, n.u)('/artist/:artistId', { params: { artistId: e } });
                        null == a || a(t);
                    }
                    return () => {
                        null == a || a(null);
                    };
                }, [e, a]);
            };
        },
        21460: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => eR }));
            var i = a(25839),
                r = a(84059),
                n = a(88204),
                s = a(74631),
                l = a(61493),
                o = a(5867),
                c = a(64715),
                u = a(1407),
                d = a(1797),
                m = a(40110),
                _ = a(20258),
                p = a(57138),
                h = a(10322),
                g = a(89192),
                f = a(30716),
                v = a(27954),
                x = a(61342),
                y = a(6969),
                b = a(56412),
                A = a(17951),
                C = a(61732),
                k = a(12234),
                N = a(64595),
                T = a(26208),
                E = a(89221),
                L = a(27935),
                I = a(41016),
                S = a(80461),
                j = a(95445);
            async function O(e, t) {
                var a, i, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, E.W)(t.locale),
                    s = n({ id: 'metadata.artist-familiar-you-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-familiar-you-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, L.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, T.v)({ tld: t.tld }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, I.H)({ cardType: S.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, N.k)(),
                    appLinks: (0, k.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, j.S)('/artist/:artistId/familiar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var w = (function (e) {
                    return ((e[(e.COLLECTION = 0)] = 'COLLECTION'), (e[(e.VIBE = 1)] = 'VIBE'), e);
                })({}),
                P = a(28604),
                R = a(19386),
                D = a(69695),
                M = a.n(D),
                B = a(82298),
                F = a(39004),
                U = a(57954),
                H = a(22939),
                z = a(42324),
                W = a(13833),
                Y = a(23976),
                $ = a(76939),
                K = a(82967),
                V = a(30290),
                G = a(19e3),
                X = a(3718),
                Z = a(18412),
                q = a(66284),
                J = a(99401),
                Q = a(26076),
                ee = a(89288),
                et = a(97805),
                ea = a(44222),
                ei = a.n(ea);
            let er = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                    return Array.from({ length: a }, (a, r) => (0, i.jsx)(et.D, { variant: t, className: ei().shimmer, isActive: e }, r));
                },
                en = (e) => {
                    let { isShimmerVisible: t, isShimmerActive: a, variant: r, shimmersCount: n, className: s, children: l, ...o } = e;
                    return (0, i.jsx)('div', { className: (0, B.$)(ei().root, s), ...(0, ee.OZ)(o), children: t ? er(a, r, n) : l });
                };
            var es = a(70825);
            let el = (e) => {
                let { artistId: t, entityContextType: a } = e;
                return (0, s.useMemo)(() => (t ? (0, es.t)({ contextType: H.K.Artist, contextId: t, entityContextType: a }) : null), [t, a]);
            };
            var eo = a(8487),
                ec = a(4254),
                eu = a(21784),
                ed = a(27625),
                em = a(15270),
                e_ = a(79396),
                ep = a(9931),
                eh = a(71035),
                eg = a(30787),
                ef = a(83918);
            let ev = (e) => {
                let t = (0, ef.X)(),
                    a = (0, r.useSearchParams)();
                return (0, eh.c)((i) => {
                    var r;
                    let n = new URLSearchParams(a);
                    switch ((null == (r = e.onTabChange) || r.call(e, i), i)) {
                        case w.COLLECTION:
                            (n.set(y.K.TAB, x.J.COLLECTION), t((0, eg.C)(window.location.pathname, n)));
                            break;
                        case w.VIBE:
                            (n.set(y.K.TAB, x.J.VIBE), t((0, eg.C)(window.location.pathname, n)));
                    }
                });
            };
            var ex = a(29279),
                ey = a.n(ex);
            let eb = () =>
                    (0, i.jsxs)('div', {
                        className: ey().tabsShimmer,
                        children: [(0, i.jsx)(Y.W, { className: ey().tabShimmer }), (0, i.jsx)(Y.W, { className: ey().tabShimmer })],
                    }),
                eA = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, v.g)(),
                        { formatMessage: n } = (0, F.A)(),
                        o = (0, eu.W)(),
                        { isScrolling: c } = (0, s.useContext)(ed.B),
                        u = ev(t);
                    return (0, i.jsxs)('header', {
                        className: ey().root,
                        'aria-hidden': c,
                        'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: ey().container,
                                children: [
                                    o.canBack && (0, i.jsx)(em.L, { withForwardControl: !1, withBackwardControl: o.canBack, shouldFocusOnMount: !c }),
                                    (0, i.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: ey().title,
                                        'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, i.jsx)(eo.A, { id: 'page.familiar-you' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(ep.wI, {
                                isShimmerVisible: r.familiarSubpage.isLoading,
                                shimmer: (0, i.jsx)(eb, {}),
                                className: ey().tabs,
                                elementId: a,
                                ...t,
                                onTabChange: u,
                                children: [
                                    (0, i.jsx)(e_.o, {
                                        className: ey().tab,
                                        value: w.COLLECTION,
                                        title: n({ id: 'page.familiar-collection' }),
                                        'aria-hidden': c,
                                        tabIndex: c ? -1 : 0,
                                    }),
                                    (0, i.jsx)(e_.o, {
                                        className: ey().tab,
                                        value: w.VIBE,
                                        title: n({ id: 'page.familiar-vibe' }),
                                        'aria-hidden': c,
                                        tabIndex: c ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var eC = a(32033),
                ek = a.n(eC);
            let eN = (0, n.PA)((e) => {
                    var t;
                    let { forwardRef: a, tabsState: r, tabElementId: n, artistId: c } = e,
                        { artist: u } = (0, v.g)(),
                        { formatMessage: d } = (0, F.A)(),
                        { from: m } = (0, V.f)(),
                        _ = el({ artistId: c, entityContextType: U.h.ARTIST_MY_COLLECTION }),
                        p = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: H.K.Various,
                                    meta: { id: String(c) },
                                    from: m,
                                    overrideAutoflowSeeds: ['artist:'.concat(c)],
                                    overrideContextType: z.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: u.familiarSubpage.collectionEntitiesData,
                            }),
                            [u.familiarSubpage.collectionEntitiesData, c, m],
                        ),
                        h = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(en, {
                                isShimmerVisible: u.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: X.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, B.$)(ek().block, ek().tracksBlock),
                                children:
                                    null == (e = u.familiarSubpage.collectionTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(K.K, { track: e, playContextParams: p(e, t) }, e.id)),
                            });
                        }, [u.familiarSubpage.collectionTracks, u.familiarSubpage.isLoading, p]),
                        g = (0, s.useMemo)(() => {
                            if (u.familiarSubpage.shouldShowTitleBlocks)
                                return u.familiarSubpage.isLoading
                                    ? (0, i.jsx)('div', {
                                          className: (0, B.$)(ek().block, ek().blockHeader),
                                          children: (0, i.jsx)(Y.W, { isActive: u.familiarSubpage.isLoading, className: ek().shimmerTitle, radius: 'l' }),
                                      })
                                    : (0, i.jsx)(Z.T, { className: (0, B.$)(ek().block, ek().blockHeader), title: d({ id: 'entity-names.tracks' }) });
                        }, [u.familiarSubpage.isLoading, u.familiarSubpage.shouldShowTitleBlocks, d]),
                        f = (0, s.useMemo)(() => {
                            if (u.familiarSubpage.shouldShowTitleBlocks) return d({ id: 'entity-names.albums' });
                        }, [u.familiarSubpage.shouldShowTitleBlocks, d]);
                    return (0, i.jsx)(G._, {
                        sourceContextData: _,
                        children: (0, i.jsxs)(W.N, {
                            className: ek().root,
                            containerClassName: (0, B.$)(ek().scrollContainer, ek().important),
                            ref: a,
                            'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_COLLECTION,
                            children: [
                                (0, i.jsx)(eA, { tabsState: r, tabElementId: n }),
                                (0, i.jsxs)(o.Kp, {
                                    value: r.value,
                                    name: w.COLLECTION,
                                    elementId: n,
                                    className: ek().content,
                                    children: [
                                        (0, i.jsxs)('section', { 'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SECTION_TRACK, children: [g, h] }),
                                        (0, i.jsx)(q.O, {
                                            isShimmerVisible: u.familiarSubpage.isLoading,
                                            isShimmerActive: !0,
                                            headerClassName: ek().blockHeader,
                                            containerClassName: ek().block,
                                            title: f,
                                            showHeaderShimmer: u.familiarSubpage.shouldShowTitleBlocks,
                                            'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SECTION_ALBUM,
                                            children:
                                                null == (t = u.familiarSubpage.collectionAlbums)
                                                    ? void 0
                                                    : t.map((e) => (0, i.jsx)($.a, { album: e, contentLinesCount: 3 }, e.id)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(Q.A, { children: (0, i.jsx)(J.w, { className: ek().footer }) }),
                            ],
                        }),
                    });
                }),
                eT = (0, n.PA)((e) => {
                    let { forwardRef: t, tabsState: a, tabElementId: r, artistId: n } = e,
                        { artist: c } = (0, v.g)(),
                        { from: u } = (0, V.f)(),
                        d = el({ artistId: n, entityContextType: U.h.ARTIST_FAMILIAR_FROM_WAVE }),
                        m = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: H.K.Various,
                                    meta: { id: String(n) },
                                    from: u,
                                    overrideAutoflowSeeds: ['artist:'.concat(n)],
                                    overrideContextType: z.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: c.familiarSubpage.vibeEntitiesData,
                            }),
                            [c.familiarSubpage.vibeEntitiesData, n, u],
                        ),
                        _ = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(en, {
                                isShimmerVisible: c.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: X.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, B.$)(ek().block, ek().tracksBlock),
                                children:
                                    null == (e = c.familiarSubpage.vibeTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(K.K, { track: e, playContextParams: m(e, t) }, e.id)),
                            });
                        }, [c.familiarSubpage.isLoading, c.familiarSubpage.vibeTracks, m]);
                    return (0, i.jsx)(G._, {
                        sourceContextData: d,
                        children: (0, i.jsxs)(W.N, {
                            className: ek().root,
                            containerClassName: (0, B.$)(ek().scrollContainer, ek().important),
                            ref: t,
                            'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_VIBE,
                            children: [
                                (0, i.jsx)(eA, { tabsState: a, tabElementId: r }),
                                (0, i.jsx)(o.Kp, { value: a.value, name: w.VIBE, elementId: r, className: ek().content, children: _ }),
                                (0, i.jsx)(Q.A, { children: (0, i.jsx)(J.w, { className: ek().footer }) }),
                            ],
                        }),
                    });
                });
            var eE = a(66738),
                eL = a(31249),
                eI = a.n(eL);
            let eS = (e) => {
                let { tabsState: t, tabElementId: a } = e,
                    r = (0, s.useMemo)(() => {
                        switch (t.value) {
                            case w.COLLECTION:
                                return (0, i.jsx)(eo.A, { id: 'error-messages.empty-artist-familiar-collection-title' });
                            case w.VIBE:
                                return (0, i.jsx)(eo.A, { id: 'error-messages.empty-artist-familiar-vibe-title' });
                        }
                    }, [t.value]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eA, { tabsState: t, tabElementId: a }),
                        (0, i.jsxs)('div', {
                            className: eI().root,
                            children: [
                                (0, i.jsx)(eE.I, { className: eI().icon, variant: 'attention', size: 'xxxl' }),
                                (0, i.jsx)(ec.DZ, { className: eI().title, variant: 'h3', size: 'xs', children: r }),
                            ],
                        }),
                    ],
                });
            };
            var ej = a(10603);
            let eO = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, v.g)(),
                        { formatMessage: n } = (0, F.A)(),
                        { isScrolling: o } = (0, s.useContext)(ed.B),
                        c = (0, eu.W)(),
                        u = ev(t);
                    return (0, i.jsx)(ej.Y, {
                        variant: ej.V.COMPOSITE,
                        staticClassName: (0, B.$)(ey().staticHeader, ey().important),
                        'aria-hidden': !o,
                        stickyClassName: (0, B.$)(ey().stickyHeader, ey().important),
                        stickyChild: (0, i.jsxs)('div', {
                            className: ey().container,
                            'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE_STICKY_HEADER,
                            children: [
                                c.canBack && (0, i.jsx)(em.L, { withForwardControl: !1, withBackwardControl: c.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(ep.wI, {
                                    isShimmerVisible: r.familiarSubpage.isLoading,
                                    shimmer: (0, i.jsx)(eb, {}),
                                    className: ey().tabs,
                                    elementId: a,
                                    onTabChange: u,
                                    ...t,
                                    children: [
                                        (0, i.jsx)(e_.o, {
                                            className: ey().tab,
                                            value: w.COLLECTION,
                                            title: n({ id: 'page.familiar-collection' }),
                                            'aria-hidden': !o,
                                            tabIndex: o ? 0 : -1,
                                        }),
                                        (0, i.jsx)(e_.o, {
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
                    var t, a, n;
                    let { artistId: k, preloadedArtist: N, preloadedFamiliar: T } = e,
                        E = (0, r.useSearchParams)(),
                        { artist: L, disclaimerModalState: I } = (0, v.g)(),
                        { contentScrollRef: S, setContentScrollRef: j } = (0, g.g)(),
                        D = (0, s.useId)(),
                        B = (0, s.useMemo)(() => {
                            switch (E.get(y.K.TAB)) {
                                case x.J.COLLECTION:
                                    break;
                                case x.J.VIBE:
                                    return w.VIBE;
                            }
                            return w.COLLECTION;
                        }, [E]),
                        F = (0, o.zb)(B),
                        U = (0, d.S)({ artist: null == (t = L.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                    ((0, R.G)(k),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = L.meta) ? void 0 : e.artist.isUnsafeLegal) && U();
                        }, [null == (a = L.meta) ? void 0 : a.artist.isUnsafeLegal, U]),
                        (0, P._)(L, k),
                        (0, s.useEffect)(
                            () => () => {
                                L.familiarSubpage.reset();
                            },
                            [L],
                        ),
                        (0, f.J)(L.familiarSubpage.isResolved),
                        L.familiarSubpage.isNotFound && (0, r.notFound)());
                    let H = (0, s.useMemo)(() => {
                            switch (F.value) {
                                case w.COLLECTION:
                                    if (L.familiarSubpage.isResolved && !L.familiarSubpage.hasCollectionEntities)
                                        return (0, i.jsx)(eS, { tabsState: F, tabElementId: D });
                                    return (0, i.jsx)(eN, { tabsState: F, forwardRef: j, tabElementId: D, artistId: k });
                                case w.VIBE:
                                    if (L.familiarSubpage.isResolved && !L.familiarSubpage.hasVibeTracks) return (0, i.jsx)(eS, { tabsState: F, tabElementId: D });
                                    return (0, i.jsx)(eT, { tabsState: F, forwardRef: j, tabElementId: D, artistId: k });
                            }
                        }, [L.familiarSubpage.hasCollectionEntities, L.familiarSubpage.hasVibeTracks, L.familiarSubpage.isResolved, k, j, D, F]),
                        z = [];
                    return (L.familiarSubpage.isNeededToLoad && z.push(L.familiarSubpage.getData({ preloadedFamiliar: T, artistId: k })),
                    L.infoLoadingState.isNeededToLoad && z.push(L.getInfo({ artistId: k, preloadedArtist: N })),
                    ((e) => {
                        var t;
                        (0, s.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                O({ artist: (0, A.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, C.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(L),
                    z.length && (0, s.use)(Promise.allSettled(z)),
                    L.familiarSubpage.isRejected && !L.familiarSubpage.isNotFound)
                        ? (0, i.jsx)(c.SomethingWentWrong, {})
                        : (null == (n = L.meta) ? void 0 : n.artist.isLegalRejected)
                          ? (0, i.jsx)(b.M, { modalState: I })
                          : (0, i.jsx)(h.n, {
                                pageId: _._Q.FAMILIAR_YOU,
                                pageEntityId: k,
                                children: (0, i.jsx)(u.h, {
                                    scrollElement: S,
                                    headerThreshold: 148,
                                    children: (0, i.jsxs)('div', {
                                        className: M().root,
                                        'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE,
                                        children: [(0, i.jsx)(eO, { tabElementId: D, tabsState: F }), (0, i.jsx)(p.F, { blockIdForFrom: m.U.DEFAULT, children: H })],
                                    }),
                                }),
                            });
                });
            var eP = a(61288);
            let eR = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, eP.L)(e)) || (0, r.notFound)(), (0, i.jsx)(ew, { artistId: e }));
            };
        },
        26076: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            var i = a(25839);
            a(93588);
            var r = a(400),
                n = a.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: n().empty });
            };
        },
        26115: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(40207),
                r = a(12929);
            let n = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: r.n.TRACK, callback: a, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        26208: (e, t, a) => {
            'use strict';
            function i(e) {
                let { tld: t, url: a } = e;
                return a || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            a.d(t, { v: () => i });
        },
        27935: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var i = a(89288),
                r = a(28869);
            function n(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: n, locale: s, ogImage: l, siteName: o, ogType: c, customImage: u } = e,
                    d = l ? { url: (0, i.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: n,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: d || u,
                };
            }
        },
        27990: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        28257: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        28604: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => r });
            var i = a(74631);
            let r = (e, t) => {
                (0, i.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28869: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => d });
            var i = a(58025),
                r = a(78773),
                n = a(14514),
                s = a(56107);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = a(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var u = a(55040);
            class d {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = d.getDefaultLocale().region;
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
                    var t, a, i;
                    let r = (0, n.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(r), null == (i = this.changeLanguageHandler) || i.onChangeLanguage(r));
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
                        this.dictionary = await (0, u.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: o, logger: c }) {
                    let u;
                    if (
                        ((0, i._)(this, 'language', void 0),
                        (0, i._)(this, 'storage', void 0),
                        (0, i._)(this, 'dictionary', void 0),
                        (0, i._)(this, 'config', void 0),
                        (0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'changeLanguageHandler', void 0),
                        (0, i._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var d;
                            let e;
                            u = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [u] = l(e) || [];
                    this.language = (0, n.k)(this.config, u);
                }
            }
        },
        29279: (e) => {
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
        30787: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    r = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) r.set(e, a);
                let n = r.toString();
                return ''.concat(a).concat(n ? '?'.concat(n) : '');
            };
        },
        31249: (e) => {
            e.exports = { root: 'ArtistFamiliarPageEmpty_root__s5xX9', icon: 'ArtistFamiliarPageEmpty_icon__b7kR5', title: 'ArtistFamiliarPageEmpty_title__wvBGS' };
        },
        32033: (e) => {
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
        34546: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            let i = (e) => e.map((e) => e.name).join(', ');
        },
        34826: (e) => {
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
        38902: (e, t) => {
            'use strict';
            var a, i;
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
                })(a || (t.TYPE = a = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(i || (t.SKELETON_TYPE = i = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === a.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === a.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === a.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === a.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === a.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === a.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === a.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === a.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === a.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === i.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === i.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: a.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: a.number, value: e, style: t };
                }));
        },
        41016: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => s });
            var i = a(71872),
                r = a(80461);
            let n = '@yandexmusic';
            function s(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: n,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(i.Lz, '/').concat(e.url) } },
                      };
            }
        },
        42324: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search'));
                })(i || (i = {})));
        },
        43354: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => n });
            var i = a(74631);
            let r = (0, i.createContext)(null),
                n = () => (0, i.useContext)(r);
        },
        44222: (e) => {
            e.exports = { shimmer: 'TracksList_shimmer__jD4N4' };
        },
        46254: (e, t, a) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var i = a(23198);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                i.__exportStar(a(38902), t),
                (t._Parser = void 0));
        },
        46646: (e, t, a) => {
            var i = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!a.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 46646), (e.exports = r));
        },
        47399: (e) => {
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
        51027: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        55040: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c, X: () => o });
            var i = a(36432),
                r = a(78773);
            let n = async (e) => e.then((e) => e.default),
                s = r.pE[r.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => n(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => n(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        a = t.get(e),
                        r = t.get('ru');
                    if (a) return a();
                    if (r) return r();
                    throw new i.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => C });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(8487),
                o = a(61493),
                c = a(71035),
                u = a(4071),
                d = a(4254),
                m = a(36484),
                _ = a(62562),
                p = a(21784),
                h = a(53712),
                g = a(85686),
                f = a(12929),
                v = a(95067),
                x = a(97522),
                y = a(71472),
                b = a.n(y);
            let A = {
                    [f.n.ALBUM]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [f.n.PODCAST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [f.n.ARTIST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [f.n.TRACK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [f.n.AUDIOBOOK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [f.n.CLIP]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                C = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: y, className: C } = e,
                        k = null != n ? n : null == a ? void 0 : a.modalData,
                        N = (0, p.W)(),
                        T = (0, g.Z)(h.Z.main.href),
                        E = (0, _.N)().get(m.U2),
                        L = (0, c.c)(() => {
                            if (y) return y();
                            (N.canBack && N.back(), T());
                        }),
                        I = (null == k || null == (t = k.details) ? void 0 : t.url) && k.details.text,
                        S = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = E.get(v.c.ExEx),
                                i = new Date(),
                                r = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? E.set(v.c.ExEx, [...t, n], { expires: new Date(r) }) : E.set(v.c.ExEx, [n], { expires: new Date(r) }),
                                null == y || y(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        j = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == y || y(), N.canBack && N.back(), T()) : null == y || y(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (k) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(b().title, b().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: k.title,
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: b().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: k.description,
                                        }),
                                        I &&
                                            (0, i.jsx)(x.N, {
                                                href: null == (e = k.details) ? void 0 : e.url,
                                                className: b().link,
                                                children: (0, i.jsx)(d.HL, {
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
                        }, [k, I]),
                        w = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === f.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: b().buttons,
                                          children: [
                                              (0, i.jsx)(u.$, {
                                                  color: 'primary',
                                                  onClick: j,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(u.$, {
                                                  color: 'secondary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && A[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: b().buttons,
                                          children: (0, i.jsx)(u.$, {
                                              color: 'primary',
                                              onClick: L,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: b().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [S, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, L, j],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(b().root, C),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: b().container, children: [O, w] }),
                    });
                });
        },
        57138: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => s });
            var i = a(25839),
                r = a(74631),
                n = a(14482);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: a,
                        blockIdForFrom: s,
                        blockPosX: l,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: u,
                        mainObjectId: d,
                        children: m,
                        displayReasonId: _,
                    } = e,
                    p = (0, r.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: a,
                            blockIdForFrom: s,
                            blockPosX: l,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: u,
                            mainObjectId: d,
                            displayReasonId: _,
                        }),
                        [t, a, s, l, o, c, u, d, _],
                    );
                return (0, i.jsx)(n.p.Provider, { value: p, children: m });
            };
        },
        61288: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => r });
            let i = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        61342: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var i = (function (e) {
                return ((e.COLLECTION = 'collection'), (e.VIBE = 'vibe'), e);
            })({});
        },
        61399: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r });
            var i = a(18421);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61732: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            let i = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let i = window.document.createElement('meta');
                    return (i.setAttribute(e, t), i);
                },
                r = (e) => {
                    let { title: t, description: a, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = i('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let n = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            a = Array.isArray(r.images) ? r.images[0] : null;
                        n = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let s = i('property', 'og:title'),
                            l = i('property', 'og:description'),
                            o = i('property', 'og:image');
                        (s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o));
                    }
                };
        },
        62661: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(25839),
                r = a(82298),
                n = a(66738),
                s = a(28257),
                l = a.n(s);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        64595: (e, t, a) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => i });
        },
        64715: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => j });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(39004),
                o = a(8487);
            a(93588);
            var c = a(4071),
                u = a(66738),
                d = a(4254),
                m = a(67379),
                _ = a(44031),
                p = a(87277),
                h = a(59450),
                g = a(84e3),
                f = a(97952),
                v = a(89192),
                x = a(53712),
                y = a(27954),
                b = a(44806),
                A = a(15270),
                C = a(23818),
                k = a(85686);
            let N = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var T = a(27990),
                E = a.n(T);
            let L = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { slam: n } = (0, y.g)(),
                    { contentRef: s } = (0, v.g)(),
                    l = (0, k.Z)(x.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(E().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(A.L, { withBackwardFallback: '/', className: (0, r.$)(E().navigation, { [E().navigation_desktop]: !s }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(E().content, { [E().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(C._V, { className: E().image, src: N.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: E().message,
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            className: E().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            className: E().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: E().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(d.HL, {
                                            className: E().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var I = a(68854),
                S = a.n(I);
            let j = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: n } = (0, l.A)(),
                    C = (0, s.useContext)(y.P),
                    k = null == C ? void 0 : C.experiments.checkExperiment(b.z.WebNextUnstableMusicScreen, 'on'),
                    N = n(k ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: a } = (0, h.gf)(),
                        { pageId: i } = (0, f.$)(),
                        r = (0, g.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let n = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, p.z5)(t.evgenInstance, n);
                    }, [t, e, a, i, r]);
                })(N);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: a } = (0, f.$)(),
                            i = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let r = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, p.bv)(e.evgenInstance, r);
                            }, [e, t, a, i]),
                        };
                    })(),
                    E = (0, s.useCallback)(() => {
                        (T(), (window.location.href = x.Z.main.href));
                    }, [T]),
                    { contentRef: I } = (0, v.g)();
                return k
                    ? (0, i.jsx)(L, { className: t, withBackwardControl: a })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(S().root, t),
                          children: [
                              a &&
                                  (0, i.jsx)(A.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(S().navigation, { [S().navigation_desktop]: !I }),
                                      withForwardControl: !1,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(S().content, { [S().content_shrink]: !a }),
                                  children: [
                                      (0, i.jsx)(u.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(d.DZ, { className: (0, r.$)(S().title, S().important), variant: 'h3', size: 'xs', children: N }),
                                      (0, i.jsxs)(d.HL, {
                                          className: (0, r.$)(S().text, S().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: E,
                                          className: S().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        64813: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        66284: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => x });
            var i = a(25839),
                r = a(82298),
                n = a(74631),
                s = a(89288),
                l = a(44031),
                o = a(49656),
                c = a(5365),
                u = a(23976),
                d = a(26742),
                m = a(95314),
                _ = a(18412),
                p = a(80986),
                h = a(95388),
                g = a(99024),
                f = a.n(g);
            let v = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: a,
                            isShimmerVisible: g,
                            isShimmerActive: v,
                            isShimmerWithSubcover: x,
                            isShimmerCentered: y,
                            isShimmerRounded: b,
                            title: A,
                            description: C,
                            coverUrl: k,
                            viewAllActionLink: N,
                            titleChildren: T,
                            headerChildren: E,
                            children: L,
                            className: I,
                            containerClassName: S,
                            headerClassName: j,
                            itemClassName: O,
                            showHeaderShimmer: w = !1,
                            showShimmerInfo: P = !0,
                            showControls: R = !0,
                            headingRef: D,
                            headingVariant: M,
                            customShimmer: B,
                            ...F
                        } = e,
                        U = (0, n.useId)(),
                        H = (0, n.useRef)(null),
                        { objectsCount: z } = (0, d.N)(),
                        W = (0, n.useMemo)(
                            () =>
                                w && g
                                    ? (0, i.jsx)('div', { className: j, children: (0, i.jsx)(u.W, { isActive: v, className: f().shimmerTitle, radius: 'l' }) })
                                    : A || C || T || E
                                      ? (0, i.jsx)(m.B, {
                                            objectType: l.DomainObjectType.Shortcut,
                                            objectId: String(N),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != z ? z : 0,
                                            children: (0, i.jsx)(_.T, {
                                                className: j,
                                                labeledForId: U,
                                                title: A,
                                                description: C,
                                                coverUrl: k,
                                                viewAllActionLink: N,
                                                controls: R && (0, i.jsx)(p.X, { className: f().controls, carouselRef: H }),
                                                headingRef: D,
                                                headingVariant: M,
                                                withDescription: !!C,
                                                titleChildren: T,
                                                children: E,
                                            }),
                                        })
                                      : void 0,
                            [k, C, j, D, M, U, v, g, z, R, w, A, T, E, N],
                        ),
                        Y = (0, o.L)(() => B || (0, h.k)({ className: a, isActive: v, withInfo: P, withSubcover: x, centered: y, round: b }));
                    return (0, i.jsxs)('section', {
                        ref: t,
                        className: (0, r.$)(f().root, I),
                        ...(0, s.OZ)(F),
                        children: [
                            W,
                            (0, i.jsx)(c.F, {
                                className: S,
                                ref: H,
                                itemClassName: (0, r.$)(f().item, f().important, O),
                                'aria-labelledby': ''.concat(U, ' ').concat(U, '-description'),
                                children: g ? Y : L,
                            }),
                        ],
                    });
                },
                x = (0, n.forwardRef)((e, t) => (0, i.jsx)(v, { forwardRef: t, ...e }));
        },
        68854: (e) => {
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
        69215: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 21460));
        },
        69695: (e) => {
            e.exports = { root: 'ArtistFamiliarPage_root__9Zjo0' };
        },
        69730: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => C });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(71035),
                o = a(11823),
                c = a(79367),
                u = a(47009),
                d = a(52512),
                m = a(29872),
                _ = a(61561),
                p = a(85743),
                h = a(16886),
                g = a(27954),
                f = a(18284),
                v = a(39004),
                x = a(34546),
                y = a(26115),
                b = a(51027),
                A = a.n(b);
            let C = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: b,
                        beforeBlock: C,
                        controls: k,
                        playButtonCellRender: N,
                        withLightning: T,
                        isPlaying: E,
                        isCurrent: L,
                        togglePlay: I,
                        restartPlay: S,
                        onPlayClick: j,
                        playButtonIconSize: O,
                        skipFreemiumCloseListeningPaywall: w = !1,
                        ...P
                    } = e,
                    { shouldShowBuySubscriptionModal: R, showBuySubscriptionModal: D } = (0, m.q)(),
                    {
                        track: M,
                        fullscreenPlayer: B,
                        settings: { isMobile: F },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: H },
                        paywall: { modal: z },
                    } = (0, g.g)(),
                    { ref: W, intersectionPropertyId: Y } = (0, d.n)(),
                    $ = (0, u.b)(),
                    K = (0, c.P)(),
                    V = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, v.A)();
                        return ((e, t, a) => {
                            var i;
                            let { withLightning: r } = t,
                                n = (0, x.j)(null != (i = e.artists) ? i : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, r && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: a }, i);
                    })({ withLightning: T, track: n }),
                    G = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            a = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    X = H(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    Z = n.isAvailable && R && !X,
                    q = (0, _.N)(),
                    J = n.isAvailable && q && !X && !w,
                    Q = (0, y.w)({ track: n, callback: I }),
                    ee = (0, l.c)(() => {
                        M.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    et = (0, y.w)({ track: n, callback: ee }),
                    { sendPlaySearchFeedback: ea } = (0, p.z)(),
                    [ei, er] = (0, s.useState)(!1),
                    en = (0, l.c)(() => {
                        if (!K()) {
                            if (Z) return void D();
                            if (J) return void z.open();
                            (ei || E || (er(!0), null == ea || ea()), Q(), $(!E), null == j || j(!E));
                        }
                    }),
                    es = (0, l.c)(() => {
                        if (E) return void S();
                        en();
                    }),
                    el = (0, l.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (R && n.isAvailableOnlyForPlus && D(), q && n.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (Z) return void D();
                        let t = !F && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !B.modal.isOpened));
                        return J && !t
                            ? void z.open()
                            : ((0, o.P)(e, A().ripple), F)
                              ? void en()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && n.hasTrackLink && !B.modal.isOpened && (et(), J && z.open()));
                    }),
                    eo = null == N ? void 0 : N({ onPlayButtonClick: en, isPlaying: E, isCurrent: L, isLoading: G, playButtonIconSize: O });
                return (0, i.jsxs)(f.C, {
                    ref: W,
                    'aria-label': V,
                    'data-intersection-property-id': Y,
                    onClick: el,
                    className: (0, r.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_current]: L && F }, a),
                    ...P,
                    children: [C, eo, b, k],
                });
            });
        },
        71472: (e) => {
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
        77737: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => N });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(84059),
                l = a(74631),
                o = a(39004),
                c = a(61493),
                u = a(49656),
                d = a(3392),
                m = a(4254),
                _ = a(56348),
                p = a(85743),
                h = a(27954),
                g = a(19410),
                f = a(12929),
                v = a(32652),
                x = a(97522),
                y = a(40846),
                b = a(61755),
                A = a(87221),
                C = a(12752),
                k = a.n(C);
            let N = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: n,
                        albumArtists: C,
                        withExplicitMark: N,
                        withSecondaryColor: T,
                        captionSize: E = 'm',
                        explicitSize: L = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: S,
                        artistsClassName: j,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: w = !0,
                        hasLineClamp: P = !0,
                        withSavingQueryParams: R,
                        beforeTitle: D,
                        withArtistLink: M,
                        variant: B,
                        withTrackLink: F,
                        afterTitle: U,
                        withContextMenuArtists: H,
                    } = e,
                    { formatMessage: z } = (0, o.A)(),
                    { sendNavigateSearchFeedback: W } = (0, p.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: $,
                    } = (0, h.g)(),
                    K = (0, b.$)({ withCustomTooltip: w }),
                    V = (0, s.useSearchParams)(),
                    G = (0, y.B)(n, {
                        isMobile: Y,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: C,
                        withTrackLink: F,
                        withArtistLink: M,
                        variant: B,
                        withExplicitMark: N,
                        query: R ? Object.fromEntries(V) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: Z,
                        tooltipText: q,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, a, i) => {
                        var r, n;
                        let { canEnableCustomTooltip: s, isMobile: l } = a,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, i),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (r = t.version) ? r : ''),
                            u = i({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(u, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: s && !l,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(n, G, { canEnableCustomTooltip: K, isMobile: Y }, z),
                    et = (0, A.O)({ track: n, onNavigate: W, withSavingQueryParams: R, entityType: f.n.TRACK }),
                    ea = (0, l.useCallback)(
                        (e) =>
                            (0, i.jsx)(d.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: q,
                                hoverSettings: g.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, r.$)(k().text, k().title),
                                    type: 'entity',
                                    size: E,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [E, X, q, ee],
                    ),
                    ei = (0, u.L)(() =>
                        G.shouldShowRemovedTitle
                            ? (0, i.jsx)(d.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: q,
                                  hoverSettings: g.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, r.$)(k().text, k().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: X,
                                  }),
                              })
                            : G.link
                              ? (0, i.jsx)(x.N, {
                                    onClick: et,
                                    className: k().albumLink,
                                    href: G.link.href,
                                    'aria-label': Z,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, l.useMemo)(() => +!!P, [P]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(k().root, { [k().root_disabled]: !n.isAvailable, [k().root_disliked]: n.isDisliked && !O, [k().root_withSecondaryColor]: T }, t),
                    children: (0, i.jsxs)('div', {
                        className: k().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(k().titleContainer, { [k().titleContainer_withVersion]: n.version }, a),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, r.$)(k().text, S),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            ei,
                                            G.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, r.$)(k().text, k().version),
                                                    type: 'entity',
                                                    size: E,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, i.jsx)(v.N, {
                                            containerClassName: k().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: L,
                                            variant: G.explicitMark,
                                            className: k().explicitMark,
                                            trackId: n.id,
                                        }),
                                    U,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, i.jsx)(_.i, {
                                    className: (0, r.$)(k().text, { [k().artists]: P }, j, S),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, r.$)(k().text, k().link),
                                    captionClassName: (0, r.$)(k().text, k().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: er,
                                    captionSize: E,
                                    withContextMenu: H,
                                }),
                        ],
                    }),
                });
            });
        },
        78773: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => n, cy: () => r, pE: () => i });
            let i = {
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
        80461: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => i });
            var i = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        82967: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => v });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(74631),
                l = a(61493),
                o = a(54880),
                c = a(50209),
                u = a(27954),
                d = a(6349),
                m = a(62661),
                _ = a(2096),
                p = a(77737),
                h = a(69730),
                g = a(7929),
                f = a.n(g);
            let v = (0, n.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: n,
                        className: g,
                        withDNDBlock: v,
                        isDragging: x,
                        draggingClassName: y,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: A,
                        handleRemove: C,
                        withDislike: k,
                        withTrailer: N = !0,
                        beforeTitle: T,
                        removeButtonAriaLabel: E,
                        hideControls: L,
                    } = e,
                    I = (0, c.D)({ playContextParams: n, entityId: a.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, u.g)(),
                    j = (0, o.X)(a.trackSource, { isMobile: S }),
                    O = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(d.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: f().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(h.C, {
                    className: (0, r.$)(g, { [f().trackWithDots]: v, [f().important]: v }),
                    track: a,
                    beforeBlock: v ? (0, i.jsx)(m.O, { className: (0, r.$)(f().dots, y), isDragging: x }) : void 0,
                    meta: (0, i.jsx)(p.j, { withArtistLink: j, beforeTitle: T, track: a, ignoreDislikedStyles: b, withSecondaryColor: A }),
                    playButtonCellRender: O,
                    controls: (0, i.jsx)(_.Q, {
                        track: a,
                        className: f().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: C,
                        withDislike: k,
                        withTrailer: N,
                        removeButtonAriaLabel: E,
                        hideControls: L,
                    }),
                    ...I,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        83918: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(74631);
            let r = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        86166: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { $: () => i }),
                (function (e) {
                    ((e.RU = 'ru'),
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
                        (e.AR = 'ar'));
                })(i || (i = {})));
        },
        89221: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => u });
            var i = a(13580),
                r = a(74631),
                n = a(78773),
                s = a(28869),
                l = a(14514),
                o = a(55040);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                u = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        a = (0, l.k)(n.pE[n.cy], t),
                        r = await c(a);
                    return (e, t) => {
                        let n = null == r ? void 0 : r[e.id],
                            s = '';
                        return ((Array.isArray(n) || 'string' == typeof n) && (s = new i.S(n, a).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        89514: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        95388: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => n });
            var i = a(25839),
                r = a(19412);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, a) => (0, i.jsx)(r.V, { ...e }, a));
            };
        },
        95445: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(25895);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var a = arguments.length, n = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) n[s - 2] = arguments[s];
                    let [l] = n,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        u = {},
                        { href: d } = (0, i.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: a } = (0, i.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = a;
                    }
                    return { canonical: d, languages: u };
                };
        },
        97805: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => h });
            var i = a(25839),
                r = a(3718),
                n = a(82298),
                s = a(74631),
                l = a(39004),
                o = a(23976),
                c = a(47399),
                u = a.n(c);
            let d = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(u().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: u().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: u().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: u().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: u().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: u().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: u().action, radius: 'l' }),
                    ],
                });
            };
            var m = a(64813),
                _ = a.n(m);
            let p = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(_().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: _().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: a, className: n } = e;
                    switch (a) {
                        case r.X.PLAYLIST:
                            return (0, i.jsx)(p, { isActive: t, className: n });
                        case r.X.ALBUM:
                            return (0, i.jsx)(d, { isActive: t, className: n });
                    }
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
        99401: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => N });
            var i = a(25839),
                r = a(82298),
                n = a(88204),
                s = a(39004),
                l = a(93588),
                o = a(43354),
                c = (function (e) {
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
            let u = (e, t, a) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: a, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, i, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, i, a) },
                    };
                };
            var m = a(10959),
                _ = a(89514);
            let p = (e) => e(new Date(), (0, _.m)());
            var h = a(96433),
                g = a(27954),
                f = a(400),
                v = a.n(f),
                x = a(61493),
                y = a(4254),
                b = a(97522);
            let A = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(v().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, i.jsx)(b.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(b.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, i.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: v().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, i.jsx)(b.N, { target: '_blank', href: r, className: v().link, 'data-test-id': x.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(v().root, v().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, i.jsx)(C, { links: a.links, disclaimer: a.disclaimer }), (0, i.jsx)(A, { data: a.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, g.g)(),
                    { formatDate: r, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, h.h)(),
                    o = d({ formatMessage: n, language: l, tld: a.tld, year: p(r) });
                return (0, i.jsx)(A, { className: t, data: o });
            });
            let N = (0, n.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: n, location: _, user: f } = (0, g.g)(),
                    { formatDate: x, formatMessage: y } = (0, s.A)(),
                    { isEnabled: b } = null != (t = (0, o.P)()) ? t : {},
                    { language: A } = (0, h.h)(),
                    C = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: i, language: r, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, i, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, i, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, i, r) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, i, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, i, r) },
                                    _ = [s, o, d];
                                return (a && 'ru' === n && _.push(l), _.push(m), _);
                            })({ formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: a, language: r, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: A,
                        userRegion: f.account.data.userSessionRegionIso,
                        year: p(x),
                    });
                return (0, i.jsx)(k, { className: (0, r.$)({ [v().root_withOffsetForDeeplink]: b }, a), data: C });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7055, 2767, 7339, 740, 6287, 2121, 3472, 5128, 3112, 1865, 8451, 1583, 2668, 6706, 4771, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817,
                6215, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 6361, 5898, 1808, 5232, 4932, 4475, 5056, 7358,
            ],
            () => e((e.s = 69215)),
        ),
            (_N_E = e.O()));
    },
]);
