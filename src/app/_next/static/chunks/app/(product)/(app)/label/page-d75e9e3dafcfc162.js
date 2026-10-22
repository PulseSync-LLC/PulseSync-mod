(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3580, 9995],
    {
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(40207);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(25839),
                a = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                u = i(27954),
                d = i(57549),
                m = i(63149);
            let h = (e) => {
                let { user: t } = (0, u.g)(),
                    { notify: i } = (0, c.l)(),
                    [h, _] = (0, n.useState)(!1),
                    { formatMessage: f } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: f({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (h) return;
                    let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    _(!0);
                    let s = await e.toggleLike();
                    (_(!1),
                        s === l.f.OK
                            ? i((0, r.jsx)(m.T, { artist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: f({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, h, f, i]);
            };
        },
        13580: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => x });
            var r,
                a,
                n = i(23198),
                s = i(46254);
            function l(e, t) {
                var i = t && t.cache ? t.cache : m,
                    r = t && t.serializer ? t.serializer : u;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var i,
                                  r,
                                  a = 1 === e.length ? o : c;
                              return ((i = t.cache.create()), (r = t.serializer), a.bind(this, e, i, r));
                          }
                )(e, { cache: i, serializer: r });
            }
            function o(e, t, i, r) {
                var a = null == r || 'number' == typeof r || 'boolean' == typeof r ? r : i(r),
                    n = t.get(a);
                return (void 0 === n && ((n = e.call(this, r)), t.set(a, n)), n);
            }
            function c(e, t, i) {
                var r = Array.prototype.slice.call(arguments, 3),
                    a = i(r),
                    n = t.get(a);
                return (void 0 === n && ((n = e.apply(this, r)), t.set(a, n)), n);
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
                h = {
                    variadic: function (e, t) {
                        var i, r;
                        return ((i = t.cache.create()), (r = t.serializer), c.bind(this, e, i, r));
                    },
                    monadic: function (e, t) {
                        var i, r;
                        return ((i = t.cache.create()), (r = t.serializer), o.bind(this, e, i, r));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(r || (r = {}));
            var _ = (function (e) {
                    function t(t, i, r) {
                        var a = e.call(this, t) || this;
                        return ((a.code = i), (a.originalMessage = r), a);
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
                    function t(t, i, a, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(i, '". Options are "').concat(Object.keys(a).join('", "'), '"'),
                                r.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_),
                p = (function (e) {
                    function t(t, i, a) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(i), r.INVALID_VALUE, a) || this;
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_),
                g = (function (e) {
                    function t(t, i) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(i, '"'), r.MISSING_VALUE, i) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_);
            function v(e) {
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
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(a || (a = {}));
            var x = (function () {
                function e(t, i, o, c) {
                    var u,
                        d,
                        m = this;
                    if (
                        (void 0 === i && (i = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var i = t.reduce(function (e, t) {
                                return (e.length && t.type === a.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return i.length <= 1 ? i[0] || '' : i;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, i, n, l, o, c, u) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: a.literal, value: t[0].value }];
                                for (var d = [], m = 0; m < t.length; m++) {
                                    var h = t[m];
                                    if ((0, s.isLiteralElement)(h)) {
                                        d.push({ type: a.literal, value: h.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(h)) {
                                        'number' == typeof c && d.push({ type: a.literal, value: n.getNumberFormat(i).format(c) });
                                        continue;
                                    }
                                    var v = h.value;
                                    if (!(o && v in o)) throw new g(v, u);
                                    var x = o[v];
                                    if ((0, s.isArgumentElement)(h)) {
                                        ((x && 'string' != typeof x && 'number' != typeof x) || (x = 'string' == typeof x || 'number' == typeof x ? String(x) : ''),
                                            d.push({ type: 'string' == typeof x ? a.literal : a.object, value: x }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(h)) {
                                        var b = 'string' == typeof h.style ? l.date[h.style] : (0, s.isDateTimeSkeleton)(h.style) ? h.style.parsedOptions : void 0;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(i, b).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(h)) {
                                        var b = 'string' == typeof h.style ? l.time[h.style] : (0, s.isDateTimeSkeleton)(h.style) ? h.style.parsedOptions : l.time.medium;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(i, b).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(h)) {
                                        var b = 'string' == typeof h.style ? l.number[h.style] : (0, s.isNumberSkeleton)(h.style) ? h.style.parsedOptions : void 0;
                                        (b && b.scale && (x *= b.scale || 1), d.push({ type: a.literal, value: n.getNumberFormat(i, b).format(x) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(h)) {
                                        var y = h.children,
                                            T = h.value,
                                            j = o[T];
                                        if ('function' != typeof j) throw new p(T, 'function', u);
                                        var k = j(
                                            e(y, i, n, l, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(k) || (k = [k]),
                                            d.push.apply(
                                                d,
                                                k.map(function (e) {
                                                    return { type: 'string' == typeof e ? a.literal : a.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(h)) {
                                        var N = h.options[x] || h.options.other;
                                        if (!N) throw new f(h.value, x, Object.keys(h.options), u);
                                        d.push.apply(d, e(N.value, i, n, l, o));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(h)) {
                                        var N = h.options['='.concat(x)];
                                        if (!N) {
                                            if (!Intl.PluralRules)
                                                throw new _(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    r.MISSING_INTL_API,
                                                    u,
                                                );
                                            var A = n.getPluralRules(i, { type: h.pluralType }).select(x - (h.offset || 0));
                                            N = h.options[A] || h.options.other;
                                        }
                                        if (!N) throw new f(h.value, x, Object.keys(h.options), u);
                                        d.push.apply(d, e(N.value, i, n, l, o, x - (h.offset || 0)));
                                        continue;
                                    }
                                }
                                return d.length < 2
                                    ? d
                                    : d.reduce(function (e, t) {
                                          var i = e[e.length - 1];
                                          return (i && i.type === a.literal && t.type === a.literal ? (i.value += t.value) : e.push(t), e);
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
                            b = (x.formatters, (0, n.__rest)(x, ['formatters']));
                        this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, b), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((u = e.formats),
                        o
                            ? Object.keys(u).reduce(
                                  function (e, t) {
                                      var i, r;
                                      return (
                                          (e[t] =
                                              ((i = u[t]),
                                              (r = o[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, i || {}), r || {}),
                                                        Object.keys(i).reduce(function (e, t) {
                                                            return ((e[t] = (0, n.__assign)((0, n.__assign)({}, i[t]), r[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : i)),
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
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(d.number), strategy: h.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(d.dateTime), strategy: h.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(d.pluralRules), strategy: h.variadic },
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
        21971: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var r = i(25839),
                a = i(88204),
                n = i(39004),
                s = i(44031),
                l = i(61493),
                o = i(22939),
                c = i(71035),
                u = i(66738),
                d = i(10820),
                m = i(33660),
                h = i(74631),
                _ = i(31860),
                f = i(91149),
                p = i(92942),
                g = i(27954),
                v = i(57549),
                x = i(86869),
                b = i(69084),
                y = i(4254),
                T = i(51790),
                j = i(6323),
                k = i(24596),
                N = i.n(k);
            let A = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: l } = (0, n.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(T.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, r.jsx)(b.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(x.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, r.jsx)(j.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(y.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var L = i(7361),
                C = i(90613),
                I = i(3210),
                E = i(11609),
                P = i(79367),
                S = i(40110),
                O = i(20258),
                R = i(34159),
                w = i(30290),
                B = i(29872),
                D = i(56120),
                z = i(87201),
                H = i(83014),
                F = i(44806),
                U = i(55491),
                V = i(44851),
                W = i(14240),
                M = i(56615),
                K = i(16386),
                $ = i(67303),
                X = i(74682),
                q = i(59043),
                Y = i(2144),
                G = i(6304);
            let Z = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: x, onOpenChange: b, open: y, ...T } = e,
                    { shouldShowBuySubscriptionModal: j, showBuySubscriptionModal: k } = (0, B.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: Z },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, g.g)(),
                    et = (0, C.A)(x),
                    ei = (0, L.K)(x),
                    er = ((e) => {
                        let { user: t } = (0, g.g)(),
                            { notify: i } = (0, p.l)(),
                            [a, s] = (0, h.useState)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(v.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: f.u.ERROR });
                            if (a) return;
                            let n = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === _.f.OK
                                    ? i((0, r.jsx)(A, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: f.u.INFO })
                                    : i((0, r.jsx)(v.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: f.u.ERROR }));
                        });
                    })(x),
                    ea = (0, R.F)(),
                    en = ''.concat(S.U.ARTIST, '-').concat(null == x ? void 0 : x.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: el } = (0, w.f)({ blockId: S.U.ARTIST, contextType: o.K.Artist, contextId: null == x ? void 0 : x.id }),
                    { shareLink: eo, pathname: ec } = (0, W.b)('/artist/:artistId', { params: { artistId: null != (i = null == x ? void 0 : x.id) ? i : '' } }),
                    eu = (0, I.A)({ entityVariant: H.D.ARTIST, urlParams: { id: null == x ? void 0 : x.id } }),
                    { isPlaying: ed, togglePlay: em } = (0, z.B)({
                        seeds: null != (a = null == x ? void 0 : x.seeds) ? a : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == x ? void 0 : x.id,
                    }),
                    eh = (0, P.P)(),
                    e_ = es((null == x ? void 0 : x.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ef = (0, c.c)(() => {
                        if (j && Q.isAuthorized) return void k();
                        ed || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!eh()) {
                            if (j) return void k();
                            (null == x ? void 0 : x.id) && (J.setUtmLink(el), J.openArtistTrailer(x.id), ea(s.DomainObjectType.Artist, x.id));
                        }
                    }),
                    eg = (0, c.c)(() => {
                        Z.open(null == x ? void 0 : x.id);
                    });
                (0, D.N)(y);
                let ev = { variant: U.Y.ARTIST, id: null == x ? void 0 : x.id, title: null == x ? void 0 : x.name, path: ec },
                    ex = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    eb = null == x || null == (t = x.trailer) ? void 0 : t.isAvailable,
                    ey = ee.checkExperiment(F.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(F.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(d.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: y,
                    onOpenChange: b,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        ex && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(E.d, { entityVariant: H.D.ARTIST, adminUrl: eu }) }),
                        !N && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)($.L, { onClick: et, isPinned: null == x ? void 0 : x.isPinned }) }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(K.T, {
                                onClick: ei,
                                isLiked: null == x ? void 0 : x.isLiked,
                                disabled: !Q.isAuthorized || !(null == x ? void 0 : x.isAvailable),
                            }),
                        }),
                        eb && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(q.N, { onClick: ep }) }),
                        eT &&
                            (0, r.jsx)(G.WithOffline, {
                                fallback: (0, r.jsx)(Y.C, { onClick: ef, disabled: !(null == x ? void 0 : x.isAvailable), variant: V.I.ARTIST, onOpenMenuChange: b }),
                            }),
                        (0, r.jsx)(X.H, { disabled: !x, shareLink: eo, entityMeta: ev }),
                        ey &&
                            (0, r.jsx)(G.WithOffline, {
                                fallback: (0, r.jsx)(d.Dr, {
                                    onClick: eg,
                                    icon: (0, r.jsx)(u.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: e_,
                                }),
                            }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(M.D, { onClick: er, isDisliked: null == x ? void 0 : x.isDisliked, disabled: !(null == x ? void 0 : x.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        38902: (e, t) => {
            'use strict';
            var i, r;
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
                })(i || (t.TYPE = i = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(r || (t.SKELETON_TYPE = r = {})),
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
                    return !!(e && 'object' == typeof e && e.type === r.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === r.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: i.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: i.number, value: e, style: t };
                }));
        },
        46254: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var r = i(23198);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                r.__exportStar(i(38902), t),
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
        56615: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => u });
            var r = i(25839),
                a = i(88204),
                n = i(8487),
                s = i(61493),
                l = i(66738),
                o = i(10820),
                c = i(27954);
            let u = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: u } = e,
                    { user: d } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: u,
                    icon: (0, r.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !d.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(n.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        59884: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => T });
            var r = i(25839),
                a = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(61493),
                c = i(71035),
                u = i(49656),
                d = i(4071),
                m = i(66738),
                h = i(4254),
                _ = i(27625);
            let f = (e) => {
                let { children: t, title: i, className: a } = e,
                    { setTitleElement: n, setTitle: l } = (0, s.useContext)(_.B),
                    o = (0, s.useRef)(null);
                return (
                    (0, s.useEffect)(() => {
                        ((null == o ? void 0 : o.current) && n(o), i && l(i));
                    }, [o, i, n, l]),
                    (0, s.useEffect)(
                        () => () => {
                            l('');
                        },
                        [l],
                    ),
                    (0, r.jsx)('div', { ref: o, className: a, children: t })
                );
            };
            var p = i(85686),
                g = i(27954),
                v = i(97522),
                x = i(72720),
                b = i(50362),
                y = i.n(b);
            let T = (0, n.PA)((e) => {
                let {
                        title: t = '',
                        'aria-labelledby': i,
                        canChange: n = !1,
                        onChange: _,
                        maxTitleLength: b,
                        version: T = '',
                        onVersionClick: j,
                        className: k,
                        headingVariant: N = 'h2',
                        withHeadingClamp: A = !0,
                        link: L,
                        onTitleLinkClick: C,
                    } = e,
                    {
                        settings: { isMobile: I },
                    } = (0, g.g)(),
                    { formatMessage: E } = (0, l.A)(),
                    [P, S] = (0, s.useState)(!1),
                    O = (0, s.useRef)(null),
                    R = t.length + T.length > 25,
                    w = (0, p.Z)(null != L ? L : ''),
                    B = (0, c.c)((e) => {
                        (null == C || C(), w(e));
                    }),
                    D = (0, s.useMemo)(
                        () =>
                            I
                                ? { font: y().font_mobile, iconLink: y().arrowWrapper_mobile }
                                : R
                                  ? { font: y().font_long, iconLink: y().arrowWrapper_long }
                                  : { font: y().font_short, iconLink: y().arrowWrapper_short },
                        [I, R],
                    ),
                    z = !I && n && P,
                    H = (0, s.useCallback)(() => {
                        var e;
                        (S(!0), null == (e = O.current) || e.focus());
                    }, []),
                    F = (0, s.useCallback)(
                        (e) => {
                            (S(!1), null == _ || _(e));
                        },
                        [_],
                    ),
                    U = (0, u.L)(() =>
                        (0, r.jsx)('span', {
                            className: (0, a.$)(y().arrowWrapper, D.iconLink),
                            children: (0, r.jsx)(m.I, { className: y().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    V = (0, u.L)(() =>
                        (0, r.jsxs)(h.DZ, {
                            variant: N,
                            id: i,
                            lineClamp: I && A ? 2 : void 0,
                            className: (0, a.$)(y().heading, { [y().heading_withVersion]: T }),
                            'data-test-id': o.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, r.jsx)(h.HL, { className: (0, a.$)(y().font, D.font, y().title), variant: 'span', children: t }),
                                T &&
                                    (0, r.jsx)(h.HL, {
                                        onClick: j,
                                        className: (0, a.$)(y().font, D.font, y().version, { [y().version_withOtherVersions]: j }),
                                        variant: 'span',
                                        'data-test-id': o.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(T),
                                    }),
                                L && !I && U,
                            ],
                        }),
                    ),
                    W = (0, u.L)(() =>
                        L
                            ? (0, r.jsxs)(v.N, {
                                  className: y().titleWithLink,
                                  containerClassName: y().linkContainer,
                                  textClassName: y().linkText,
                                  href: L,
                                  onClick: B,
                                  children: [V, I && U],
                              })
                            : V,
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !z &&
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(y().root, k),
                                children: [
                                    (0, r.jsx)(f, { title: t, className: y().stickyTitle, children: W }),
                                    n &&
                                        (0, r.jsx)('div', {
                                            className: (0, a.$)(y().editButton, { [y().editButton_centered]: !R && !I }),
                                            children: (0, r.jsx)(d.$, {
                                                onClick: H,
                                                'aria-label': E({ id: 'playlist-actions.change-title' }),
                                                icon: (0, r.jsx)(m.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': o.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ],
                            }),
                        z &&
                            (0, r.jsx)('div', {
                                className: y().textFieldContainer,
                                children: (0, r.jsx)(x.A, {
                                    text: t,
                                    className: (0, a.$)(y().font, D.font, y().textField, y().title, { [y().textField_long]: R && !I }),
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
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(25839),
                a = i(53712),
                n = i(35015),
                s = i(3163);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        66284: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => x });
            var r = i(25839),
                a = i(82298),
                n = i(74631),
                s = i(89288),
                l = i(44031),
                o = i(49656),
                c = i(5365),
                u = i(23976),
                d = i(26742),
                m = i(95314),
                h = i(18412),
                _ = i(80986),
                f = i(95388),
                p = i(99024),
                g = i.n(p);
            let v = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: p,
                            isShimmerActive: v,
                            isShimmerWithSubcover: x,
                            isShimmerCentered: b,
                            isShimmerRounded: y,
                            title: T,
                            description: j,
                            coverUrl: k,
                            viewAllActionLink: N,
                            titleChildren: A,
                            headerChildren: L,
                            children: C,
                            className: I,
                            containerClassName: E,
                            headerClassName: P,
                            itemClassName: S,
                            showHeaderShimmer: O = !1,
                            showShimmerInfo: R = !0,
                            showControls: w = !0,
                            headingRef: B,
                            headingVariant: D,
                            customShimmer: z,
                            ...H
                        } = e,
                        F = (0, n.useId)(),
                        U = (0, n.useRef)(null),
                        { objectsCount: V } = (0, d.N)(),
                        W = (0, n.useMemo)(
                            () =>
                                O && p
                                    ? (0, r.jsx)('div', { className: P, children: (0, r.jsx)(u.W, { isActive: v, className: g().shimmerTitle, radius: 'l' }) })
                                    : T || j || A || L
                                      ? (0, r.jsx)(m.B, {
                                            objectType: l.DomainObjectType.Shortcut,
                                            objectId: String(N),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != V ? V : 0,
                                            children: (0, r.jsx)(h.T, {
                                                className: P,
                                                labeledForId: F,
                                                title: T,
                                                description: j,
                                                coverUrl: k,
                                                viewAllActionLink: N,
                                                controls: w && (0, r.jsx)(_.X, { className: g().controls, carouselRef: U }),
                                                headingRef: B,
                                                headingVariant: D,
                                                withDescription: !!j,
                                                titleChildren: A,
                                                children: L,
                                            }),
                                        })
                                      : void 0,
                            [k, j, P, B, D, F, v, p, V, w, O, T, A, L, N],
                        ),
                        M = (0, o.L)(() => z || (0, f.k)({ className: i, isActive: v, withInfo: R, withSubcover: x, centered: b, round: y }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(g().root, I),
                        ...(0, s.OZ)(H),
                        children: [
                            W,
                            (0, r.jsx)(c.F, {
                                className: E,
                                ref: U,
                                itemClassName: (0, a.$)(g().item, g().important, S),
                                'aria-labelledby': ''.concat(F, ' ').concat(F, '-description'),
                                children: p ? M : C,
                            }),
                        ],
                    });
                },
                x = (0, n.forwardRef)((e, t) => (0, r.jsx)(v, { forwardRef: t, ...e }));
        },
        72675: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => K }));
            var r = i(25839),
                a = i(74631),
                n = i(84059),
                s = i(82298),
                l = i(88204),
                o = i(39004),
                c = i(8487),
                u = i(61493),
                d = i(71035),
                m = i(4071),
                h = i(66738),
                _ = i(13833),
                f = i(4254),
                p = i(59884),
                g = i(64715),
                v = i(77635),
                x = i(84058),
                b = i(1407),
                y = i(20258),
                T = i(10322),
                j = i(89192),
                k = i(30716),
                N = i(91149),
                A = i(92942),
                L = i(80499),
                C = i(82706),
                I = i(27954),
                E = i(55491),
                P = i(14240),
                S = i(57549),
                O = i(66284),
                R = i(70849),
                w = i(99401),
                B = i(26076),
                D = i(10603),
                z = i(90250),
                H = i(88180),
                F = i.n(H);
            let U = (0, l.PA)((e) => {
                var t, i, l, H;
                let { labelId: U, preloadedLabel: V } = e,
                    W = (0, L.s)(C.n.LABEL),
                    {
                        settings: { isMobile: M },
                    } = (0, I.g)(),
                    { formatMessage: K } = (0, o.A)(),
                    { contentScrollRef: $, setContentScrollRef: X } = (0, j.g)(),
                    { notify: q } = (0, A.l)(),
                    { shareLink: Y } = (0, P.b)('/label/:labelId', { params: { labelId: null != (i = W.id) ? i : '' } }),
                    G = (0, a.useRef)(null),
                    Z = (0, a.useRef)(0);
                (0, z.Q)({ id: Number(W.id), name: null != (l = W.name) ? l : '', type: null != (H = W.type) ? H : '' }, z.T.ROOT);
                let J = (0, d.c)(async () => {
                        (await window.navigator.clipboard.writeText(Y),
                            q((0, r.jsx)(R.D, { entityVariant: E.Y.LABEL, entityTitle: W.name || '' }), { containerId: N.u.INFO }));
                    }),
                    Q = (0, a.useMemo)(
                        () =>
                            M
                                ? (0, r.jsx)(m.$, {
                                      className: F().button,
                                      onClick: J,
                                      icon: (0, r.jsx)(h.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': u.Xk.label.SHARE_COPY_LINK_BUTTON,
                                  })
                                : (0, r.jsx)(m.$, {
                                      className: F().button,
                                      onClick: J,
                                      icon: (0, r.jsx)(h.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': u.Xk.label.SHARE_COPY_LINK_BUTTON,
                                      children: (0, r.jsx)(c.A, { id: 'interface-actions.share' }),
                                  }),
                        [M, J],
                    ),
                    ee = W.isPublisher ? K({ id: 'entity-names.publisher' }) : K({ id: 'entity-names.label' }),
                    et = W.isPublisher ? K({ id: 'entity-names.non-music-releases' }) : K({ id: 'entity-names.releases' });
                return ((0, a.useEffect)(
                    () => () => {
                        W.reset();
                    },
                    [W],
                ),
                W.isNotFound && (0, n.notFound)(),
                (0, a.useEffect)(
                    () => () => {
                        Z.current = 0;
                    },
                    [W],
                ),
                (0, a.useEffect)(() => {
                    W.isRejected &&
                        Z &&
                        !(Z.current > 0) &&
                        (q((0, r.jsx)(S.h, { error: K({ id: 'error-messages.error-load-part-page' }) }), { containerId: N.u.ERROR }), Z.current++);
                }, [W.isRejected, q, K]),
                (0, k.J)(W.isResolved),
                W.isNeededToLoad && (0, a.use)(W.getData({ labelId: Number(U), preloadedLabel: V })),
                W.isRejected && !W.isNotFound)
                    ? (0, r.jsx)(g.SomethingWentWrong, {})
                    : (0, r.jsx)(T.n, {
                          pageId: y._Q.LABEL,
                          children: (0, r.jsxs)(b.h, {
                              scrollElement: $,
                              children: [
                                  (0, r.jsx)(D.Y, { innerHeaderRef: G }),
                                  (0, r.jsxs)(_.N, {
                                      className: F().root,
                                      containerClassName: F().content,
                                      ref: X,
                                      'data-test-id': u.Xk.label.LABEL_PAGE,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: F().header,
                                              children: [
                                                  (0, r.jsx)(f.HL, { variant: 'div', type: 'text', size: 'm', weight: 'medium', children: ee }),
                                                  (0, r.jsx)(p.R, { className: F().title, title: W.name || '', headingVariant: 'h1' }),
                                                  Q,
                                              ],
                                          }),
                                          W.hasAlbums &&
                                              W.albums &&
                                              (0, r.jsx)(v.p, {
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
                                              (0, r.jsx)(O.O, {
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
                                                  children: null == (t = W.artists) ? void 0 : t.map((e) => (0, r.jsx)(x.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                              }),
                                          (0, r.jsx)(B.A, { children: (0, r.jsx)(w.w, { className: F().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
            var V = i(23976);
            let W = () => {
                let { contentScrollRef: e, setContentScrollRef: t } = (0, j.g)(),
                    {
                        settings: { isMobile: i },
                    } = (0, I.g)();
                return (0, r.jsxs)(b.h, {
                    scrollElement: e,
                    children: [
                        (0, r.jsx)(D.Y, {}),
                        (0, r.jsxs)(_.N, {
                            className: F().root,
                            containerClassName: F().content,
                            ref: t,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: F().header,
                                    children: [
                                        (0, r.jsx)(V.W, { className: F().shimmerLabelText, radius: 's' }),
                                        (0, r.jsx)(V.W, { className: F().shimmerPageTitle, radius: 'l' }),
                                        (0, r.jsx)(V.W, { className: F().shimmerButton, radius: i ? 'round' : 'xxxl' }),
                                    ],
                                }),
                                (0, r.jsx)(O.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    className: F().carouselContainer,
                                    headerClassName: (0, s.$)(F().carouselBlockHeader, F().carouselBlock),
                                    containerClassName: F().carouselBlock,
                                }),
                                (0, r.jsx)(O.O, {
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
            var M = i(61288);
            let K = () => {
                let e = (0, n.useSearchParams)().get('labelId');
                return ((e && (0, M.L)(e)) || (0, n.notFound)(), (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(W, {}), children: (0, r.jsx)(U, { labelId: e }) }));
            };
        },
        72720: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var r = i(25839),
                a = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(94572),
                o = i.n(l);
            let c = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: n,
                        minTextLength: l,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: u = !1,
                        placeholder: d,
                        onChangeFinish: m,
                        withOutline: h = !1,
                        readOnly: _ = !1,
                        'aria-label': f,
                        'data-test-id': p,
                    } = e,
                    [g, v] = (0, s.useState)(i),
                    x = (0, s.useRef)(!1),
                    b = (0, s.useRef)(null),
                    y = (0, s.useCallback)((e) => {
                        v(e.target.value);
                    }, []),
                    T = (0, s.useCallback)(
                        (e) => {
                            if (u && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (x.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [u],
                    ),
                    j = (0, s.useCallback)(() => {
                        let e = g.trim();
                        x.current || (l && e.length < l) ? ((x.current = !1), null == m || m(i)) : null == m || m(e);
                    }, [g, x, l, m, i]);
                ((0, s.useEffect)(() => {
                    b.current && ((b.current.selectionStart = b.current.value.length), (b.current.selectionEnd = b.current.value.length));
                }, []),
                    (0, s.useLayoutEffect)(() => {
                        let e = b.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [b, g]));
                let k = (0, s.useMemo)(() => ('textarea' === c ? (e) => (0, r.jsx)('textarea', { ref: b, rows: 6, ...e }) : (e) => (0, r.jsx)('input', { ...e })), [c]);
                return (0, r.jsx)(k, {
                    className: (0, a.$)(o().root, t, { [o().root_textarea]: 'textarea' === c, [o().root_outline]: h }),
                    type: 'text',
                    value: g,
                    readOnly: _,
                    maxLength: n,
                    onBlur: j,
                    onChange: y,
                    onKeyDown: T,
                    placeholder: d,
                    'aria-label': f,
                    autoFocus: !0,
                    'data-test-id': p,
                });
            });
        },
        77635: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => d });
            var r = i(25839),
                a = i(74631),
                n = i(44031),
                s = i(61777),
                l = i(95314),
                o = i(66284),
                c = i(76939);
            let u = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: u,
                            title: d,
                            description: m,
                            albums: h,
                            className: _,
                            containerClassName: f,
                            headerClassName: p,
                            viewAllActionLink: g,
                            headingRef: v,
                            headingVariant: x,
                            shouldSendAnalyticsOnLoaded: b,
                            ...y
                        } = e,
                        T = (0, s.f)();
                    return (
                        (0, a.useEffect)(() => {
                            b && T();
                        }, [T, b]),
                        (0, r.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: u,
                            className: _,
                            headerClassName: p,
                            containerClassName: f,
                            ref: t,
                            title: d,
                            description: m,
                            viewAllActionLink: g,
                            headingRef: v,
                            headingVariant: x,
                            ...y,
                            children:
                                null == h
                                    ? void 0
                                    : h.map((e, t) =>
                                          (0, r.jsx)(
                                              l.B,
                                              {
                                                  objectType: n.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: h.length,
                                                  children: (0, r.jsx)(c.a, {
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
                d = (0, a.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
        },
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(25839),
                a = i(35015),
                n = i(10546);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        84058: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var r = i(25839),
                a = i(82298),
                n = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(44031),
                c = i(61493),
                u = i(22939),
                d = i(71035),
                m = i(49656),
                h = i(51246),
                _ = i(66738),
                f = i(86869),
                p = i(4254),
                g = i(1797),
                v = i(7361),
                x = i(90613),
                b = i(79367),
                y = i(29481),
                T = i(47009),
                j = i(34159),
                k = i(52512),
                N = i(30290),
                A = i(61561),
                L = i(85686),
                C = i(85743),
                I = i(50209),
                E = i(27954),
                P = i(6323),
                S = i(64720),
                O = i(97522),
                R = i(41580),
                w = i(49438),
                B = i(71996),
                D = i(78437),
                z = i(21971),
                H = i(13936),
                F = i.n(H);
            let U = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: H, topTitleElement: U, bottomTitleElement: V } = e,
                    { ref: W, intersectionPropertyId: M } = (0, k.n)(),
                    {
                        trailer: K,
                        user: $,
                        paywall: { modal: X },
                    } = (0, E.g)(),
                    { from: q, utmLink: Y } = (0, N.f)({ contextId: t.id, contextType: u.K.Artist }),
                    { formatMessage: G } = (0, l.A)(),
                    [Z, J] = (0, s.useState)(!1),
                    [Q, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, C.z)(),
                    es = (0, y.N)(),
                    el = (0, T.b)(),
                    eo = (0, v.K)(t),
                    ec = (0, x.A)(t),
                    { id: eu, name: ed, coverUri: em, isLiked: eh } = t,
                    e_ = (0, L.Z)(t.url),
                    [ef, ep] = (0, s.useState)(!1),
                    eg = (0, j.F)(),
                    ev = (0, b.P)(),
                    ex = (0, d.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        (K.openArtistTrailer(t.id), eg(o.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, s.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = eh ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, eh, G]),
                    { isPlaying: ey, togglePlay: eT } = (0, I.D)({
                        playContextParams: { contextData: { type: u.K.Artist, meta: { id: Number(eu) }, from: q, utmLink: Y }, loadContextMeta: !0 },
                    }),
                    ej = (0, g.S)({ artist: t, callback: e_ }),
                    ek = (0, g.S)({ artist: t, callback: eT }),
                    eN = (0, d.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), ej(e));
                    }),
                    eA = (0, A.N)(),
                    eL = (0, d.c)(() => {
                        if (!ev()) {
                            if (eA) return void X.open();
                            (Z || ey || (J(!0), null == en || en()), ek(), el(!ey));
                        }
                    }),
                    eC = (0, d.c)(() => {
                        (Q || eh || (ee(!0), null == er || er()), eo());
                    }),
                    eI = (0, d.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eE = (0, d.c)((e) => {
                        (ei(e), ep(e));
                    }),
                    eP = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eE,
                                    open: et,
                                    onClick: eI,
                                    className: (0, a.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eI, eE, et],
                    ),
                    eS = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(B.k, {
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
                    eO = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                R.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eR = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                h.hg,
                                {
                                    isVisible: et || ef,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eL,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        S.c,
                                        {
                                            className: (0, a.$)(F().likeButton, F().control),
                                            isLiked: eh,
                                            onClick: eC,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !$.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eP,
                                    pinControl: eO,
                                    trailerControl: eS,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(f.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: eN,
                                    children: [
                                        (0, r.jsx)(P.B, {
                                            className: F().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eR,
                                    ],
                                }),
                            }),
                        [eN, em, eb, t.isAvailable, eR],
                    );
                return (0, r.jsx)(h.MN, {
                    ref: W,
                    className: (0, a.$)(F().root, i),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(O.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: eN,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            V,
                        ],
                    }),
                    srTitle: (0, r.jsx)(O.N, { className: F().srTitleLink, href: t.url, onClick: eN, children: eb }),
                    'data-intersection-property-id': M,
                    contentLinesCount: H,
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
        88638: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 72675));
        },
        90613: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(25839),
                a = i(33660),
                n = i(74631),
                s = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                u = i(57549),
                d = i(80477);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [h, _] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (h) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    _(!0);
                    let s = await e.togglePin();
                    (_(!1),
                        s
                            ? i((0, r.jsx)(d.l, { artist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, h, m, i]);
            };
        },
        94572: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        95314: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            var r = i(25839),
                a = i(74631),
                n = i(66192);
            let s = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: u, mainObjectType: d, children: m } = e,
                    h = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: u, mainObjectType: d }),
                        [t, i, s, l, o, c, u, d],
                    );
                return (0, r.jsx)(n.l.Provider, { value: h, children: m });
            };
        },
        95388: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var r = i(25839),
                a = i(19412);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, r.jsx)(a.V, { ...e }, i));
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
                6749, 3112, 3349, 8803, 6392, 7170, 6287, 2121, 3472, 9122, 4607, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 2038, 4163,
                3246, 7848, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 8372, 5898, 8892, 5997, 4475, 5056, 7358,
            ],
            () => e((e.s = 88638)),
        ),
            (_N_E = e.O()));
    },
]);
