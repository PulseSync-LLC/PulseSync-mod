(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7706, 9202],
    {
        16166: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => o }));
            var a = r(88800),
                i = r(58390),
                n = r(47450),
                s = r(87128),
                l = r(21438);
            let o = () => {
                let e = (0, i.useSearchParams)().get('artistId');
                return ((e && (0, l.L)(e)) || (0, i.notFound)(), (0, a.jsx)(n.r, { artistId: e, variant: s.h.DISCOGRAPHY }));
            };
        },
        27794: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => b });
            var a,
                i,
                n = r(88092),
                s = r(68436);
            function l(e, t) {
                var r = t && t.cache ? t.cache : p,
                    a = t && t.serializer ? t.serializer : c;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var r,
                                  a,
                                  i = 1 === e.length ? o : u;
                              return ((r = t.cache.create()), (a = t.serializer), i.bind(this, e, r, a));
                          }
                )(e, { cache: r, serializer: a });
            }
            function o(e, t, r, a) {
                var i = null == a || 'number' == typeof a || 'boolean' == typeof a ? a : r(a),
                    n = t.get(i);
                return (void 0 === n && ((n = e.call(this, a)), t.set(i, n)), n);
            }
            function u(e, t, r) {
                var a = Array.prototype.slice.call(arguments, 3),
                    i = r(a),
                    n = t.get(i);
                return (void 0 === n && ((n = e.apply(this, a)), t.set(i, n)), n);
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
            var p = {
                    create: function () {
                        return new m();
                    },
                },
                d = {
                    variadic: function (e, t) {
                        var r, a;
                        return ((r = t.cache.create()), (a = t.serializer), u.bind(this, e, r, a));
                    },
                    monadic: function (e, t) {
                        var r, a;
                        return ((r = t.cache.create()), (a = t.serializer), o.bind(this, e, r, a));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(a || (a = {}));
            var f = (function (e) {
                    function t(t, r, a) {
                        var i = e.call(this, t) || this;
                        return ((i.code = r), (i.originalMessage = a), i);
                    }
                    return (
                        (0, n.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                g = (function (e) {
                    function t(t, r, i, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'),
                                a.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(f),
                h = (function (e) {
                    function t(t, r, i) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), a.INVALID_VALUE, i) || this;
                    }
                    return ((0, n.__extends)(t, e), t);
                })(f),
                y = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), a.MISSING_VALUE, r) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
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
            })(i || (i = {}));
            var b = (function () {
                function e(t, r, o, u) {
                    var c,
                        m,
                        p = this;
                    if (
                        (void 0 === r && (r = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = p.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function (e, t) {
                                return (e.length && t.type === i.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return r.length <= 1 ? r[0] || '' : r;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, r, n, l, o, u, c) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: i.literal, value: t[0].value }];
                                for (var m = [], p = 0; p < t.length; p++) {
                                    var d = t[p];
                                    if ((0, s.isLiteralElement)(d)) {
                                        m.push({ type: i.literal, value: d.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(d)) {
                                        'number' == typeof u && m.push({ type: i.literal, value: n.getNumberFormat(r).format(u) });
                                        continue;
                                    }
                                    var v = d.value;
                                    if (!(o && v in o)) throw new y(v, c);
                                    var b = o[v];
                                    if ((0, s.isArgumentElement)(d)) {
                                        ((b && 'string' != typeof b && 'number' != typeof b) || (b = 'string' == typeof b || 'number' == typeof b ? String(b) : ''),
                                            m.push({ type: 'string' == typeof b ? i.literal : i.object, value: b }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(d)) {
                                        var _ = 'string' == typeof d.style ? l.date[d.style] : (0, s.isDateTimeSkeleton)(d.style) ? d.style.parsedOptions : void 0;
                                        m.push({ type: i.literal, value: n.getDateTimeFormat(r, _).format(b) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(d)) {
                                        var _ = 'string' == typeof d.style ? l.time[d.style] : (0, s.isDateTimeSkeleton)(d.style) ? d.style.parsedOptions : l.time.medium;
                                        m.push({ type: i.literal, value: n.getDateTimeFormat(r, _).format(b) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(d)) {
                                        var _ = 'string' == typeof d.style ? l.number[d.style] : (0, s.isNumberSkeleton)(d.style) ? d.style.parsedOptions : void 0;
                                        (_ && _.scale && (b *= _.scale || 1), m.push({ type: i.literal, value: n.getNumberFormat(r, _).format(b) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(d)) {
                                        var S = d.children,
                                            I = d.value,
                                            A = o[I];
                                        if ('function' != typeof A) throw new h(I, 'function', c);
                                        var N = A(
                                            e(S, r, n, l, o, u).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(N) || (N = [N]),
                                            m.push.apply(
                                                m,
                                                N.map(function (e) {
                                                    return { type: 'string' == typeof e ? i.literal : i.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(d)) {
                                        var E = d.options[b] || d.options.other;
                                        if (!E) throw new g(d.value, b, Object.keys(d.options), c);
                                        m.push.apply(m, e(E.value, r, n, l, o));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(d)) {
                                        var E = d.options['='.concat(b)];
                                        if (!E) {
                                            if (!Intl.PluralRules)
                                                throw new f(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    a.MISSING_INTL_API,
                                                    c,
                                                );
                                            var L = n.getPluralRules(r, { type: d.pluralType }).select(b - (d.offset || 0));
                                            E = d.options[L] || d.options.other;
                                        }
                                        if (!E) throw new g(d.value, b, Object.keys(d.options), c);
                                        m.push.apply(m, e(E.value, r, n, l, o, b - (d.offset || 0)));
                                        continue;
                                    }
                                }
                                return m.length < 2
                                    ? m
                                    : m.reduce(function (e, t) {
                                          var r = e[e.length - 1];
                                          return (r && r.type === i.literal && t.type === i.literal ? (r.value += t.value) : e.push(t), e);
                                      }, []);
                            })(p.ast, p.locales, p.formatters, p.formats, e, void 0, p.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = p.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(p.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return p.ast;
                        }),
                        (this.locales = r),
                        (this.resolvedLocale = e.resolveLocale(r)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var b = u || {},
                            _ = (b.formatters, (0, n.__rest)(b, ['formatters']));
                        this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, _), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((c = e.formats),
                        o
                            ? Object.keys(c).reduce(
                                  function (e, t) {
                                      var r, a;
                                      return (
                                          (e[t] =
                                              ((r = c[t]),
                                              (a = o[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, r || {}), a || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, n.__assign)((0, n.__assign)({}, r[t]), a[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : r)),
                                          e
                                      );
                                  },
                                  (0, n.__assign)({}, c),
                              )
                            : c)),
                        (this.formatters =
                            (u && u.formatters) ||
                            (void 0 === (m = this.formatterCache) && (m = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.number), strategy: d.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.dateTime), strategy: d.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.pluralRules), strategy: d.variadic },
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
        45700: (e, t) => {
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
        46591: (e) => {
            e.exports = {
                root: 'ArtistAlbumsPage_root__UVZDz',
                scrollContainer: 'ArtistAlbumsPage_scrollContainer__2FrjI',
                important: 'ArtistAlbumsPage_important__Id_vh',
                footer: 'ArtistAlbumsPage_footer__6Nrct',
                item: 'ArtistAlbumsPage_item__kiegh',
                content: 'ArtistAlbumsPage_content__65D6P',
            };
        },
        47450: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => Q });
            var a = r(88800),
                i = r(65724),
                n = r(84961),
                s = r(53548),
                l = r(2058),
                o = r(58390),
                u = r(17392),
                c = r(63565),
                m = r(29993),
                p = r(29504),
                d = r(32596),
                f = r(10079),
                g = r(96237),
                h = r(69630),
                y = r(91959),
                v = r(12816),
                b = r(59844),
                _ = r(46422),
                S = r(44230),
                I = r(37670),
                A = r(72288),
                N = r(87128),
                E = r(54320),
                L = r(19998),
                T = r(86790),
                P = r(60266),
                w = r(93317),
                O = r(37770),
                k = r(79418),
                D = r(81685),
                j = r(30144),
                M = r(324),
                R = r(53073),
                C = r(83418),
                x = r(46511),
                G = r(57297),
                U = r(2218),
                F = r(77863),
                Y = r(45383);
            async function V(e, t) {
                var r, a, i;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, x.W)(t.locale),
                    s = n({ id: 'metadata.artist-albums-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-albums-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, G.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (r = t.fullUrl) ? r : '',
                        locale: t.locale,
                        customImage: (0, C.v)({ host: t.host }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, U.H)({ cardType: F.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, R.k)(),
                    appLinks: (0, M.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (i = t.fullUrl) ? i : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, Y.S)('/artist/:artistId/albums', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            async function z(e, t) {
                var r, a, i;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, x.W)(t.locale),
                    s = n({ id: 'metadata.artist-compilations-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-compilations-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, G.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (r = t.fullUrl) ? r : '',
                        locale: t.locale,
                        customImage: (0, C.v)({ host: t.host }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, U.H)({ cardType: F.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, R.k)(),
                    appLinks: (0, M.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (i = t.fullUrl) ? i : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, Y.S)('/artist/:artistId/compilations', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            async function H(e, t) {
                var r, a, i;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, x.W)(t.locale),
                    s = n({ id: 'metadata.artist-discography-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-discography-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, G.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (r = t.fullUrl) ? r : '',
                        locale: t.locale,
                        customImage: (0, C.v)({ host: t.host }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, U.H)({ cardType: F.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, R.k)(),
                    appLinks: (0, M.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (i = t.fullUrl) ? i : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, Y.S)('/artist/:artistId/discography', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var B = r(27342),
                W = r(63512),
                X = r(46591),
                Z = r.n(X);
            let Q = (0, n.PA)((e) => {
                var t, r, n;
                let { artistId: M, variant: R, preloadedArtist: C, preloadedAlbums: x } = e,
                    {
                        artist: G,
                        disclaimerModalState: U,
                        settings: { isMobile: F },
                    } = (0, A.g)(),
                    { formatMessage: Y } = (0, l.A)(),
                    { contentScrollRef: X, setContentScrollRef: Q } = (0, S.g)(),
                    q = (0, _.W)(),
                    J = G.albumsSubpage.isShimmerVisible ? g.r3 : G.albumsSubpage.items.length,
                    K = (0, m.c)((e) => {
                        G.albumsSubpage.getData({ artistId: M, page: e, pageSize: g.r3, sort: { sortBy: c.g.YEAR } });
                    });
                (0, E.X)(G.albumsSubpage.pagesLoader, K);
                let $ = (0, y.S)({ artist: null == (t = G.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, W.G)(M),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = G.meta) ? void 0 : e.artist.isUnsafeLegal) && $();
                    }, [null == (r = G.meta) ? void 0 : r.artist.isUnsafeLegal, $]),
                    (0, B._)(G, M),
                    (0, s.useEffect)(
                        () => () => {
                            G.albumsSubpage.reset();
                        },
                        [G, G.albumsSubpage],
                    ),
                    G.albumsSubpage.isNotFound && (0, o.notFound)(),
                    (0, I.J)(G.albumsSubpage.isResolved),
                    ((e, t) => {
                        var r;
                        let { fullscreenVideoPlayer: a } = (0, A.g)(),
                            i = null == e || null == (r = e.meta) ? void 0 : r.artist,
                            n = null == e ? void 0 : e.infoLoadingState.isLoading,
                            l = null == e ? void 0 : e.infoLoadingState.isRejected,
                            o = (0, s.useCallback)(
                                (e) => {
                                    if (l) return {};
                                    if (!i || n) return;
                                    let r = (0, D.E)(i);
                                    switch (t) {
                                        case N.h.ALBUMS:
                                            return V({ artist: r }, e);
                                        case N.h.COMPILATIONS:
                                            return z({ artist: r }, e);
                                        case N.h.DISCOGRAPHY:
                                            return H({ artist: r }, e);
                                    }
                                },
                                [i, n, l, t],
                            );
                        (0, j.C)(a.modal.isOpened ? null : o);
                    })(G, R));
                let ee = (0, s.useMemo)(() => ({ Footer: () => (0, a.jsx)(P.A, { children: (0, a.jsx)(T.w, { className: Z().footer }) }) }), []),
                    et = (0, s.useMemo)(() => {
                        switch (R) {
                            case N.h.DISCOGRAPHY:
                                return Y({ id: 'page.artist-discography-header' }, { artistName: G.commonSubPage.artistName });
                            case N.h.COMPILATIONS:
                                return Y({ id: 'page.artist-compilations-header' }, { artistName: G.commonSubPage.artistName });
                            default:
                                return Y({ id: 'page.artist-albums-header' }, { artistName: G.commonSubPage.artistName });
                        }
                    }, [G.commonSubPage.artistName, Y, R]),
                    er = (0, s.useMemo)(() => {
                        switch (R) {
                            case N.h.DISCOGRAPHY:
                                return Y({ id: 'entity-names.artist-studio-albums-list' });
                            case N.h.COMPILATIONS:
                                return Y({ id: 'entity-names.artist-compilations-list' });
                            default:
                                return Y({ id: 'entity-names.artist-albums-list' });
                        }
                    }, [Y, R]),
                    ea = (0, s.useMemo)(() => {
                        switch (R) {
                            case N.h.DISCOGRAPHY:
                                return v._Q.ARTIST_DISCOGRAPHY;
                            case N.h.COMPILATIONS:
                                return v._Q.ARTIST_COMPILATIONS;
                            default:
                                return v._Q.ARTIST_ALBUMS;
                        }
                    }, [R]),
                    ei = [];
                return (M &&
                    G.albumsSubpage.isNeededToLoad &&
                    (G.albumsSubpage.setVariant(R),
                    ei.push(G.albumsSubpage.getData({ artistId: M, page: 0, pageSize: g.r3, sort: { sortBy: c.g.YEAR }, preloadedAlbums: x }))),
                M && G.infoLoadingState.isNeededToLoad && ei.push(G.getInfo({ artistId: M, preloadedArtist: C })),
                ei.length && (0, s.use)(Promise.allSettled(ei)),
                null == (n = G.meta) ? void 0 : n.artist.isLegalRejected)
                    ? (0, a.jsx)(L.M, { modalState: U })
                    : G.albumsSubpage.isRejected && !G.albumsSubpage.isNotFound
                      ? (0, a.jsx)(d.SomethingWentWrong, {})
                      : (0, a.jsx)(b.n, {
                            pageId: ea,
                            pageEntityId: M,
                            children: (0, a.jsx)(h.h, {
                                scrollElement: X,
                                outerTitle: et,
                                children: (0, a.jsxs)('div', {
                                    className: Z().root,
                                    'data-test-id': u.Xk.artist.ARTIST_ALBUMS_PAGE,
                                    children: [
                                        (0, a.jsx)(w.Y, {
                                            variant: w.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: q.canBack,
                                            children: (0, a.jsx)(p.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: et }),
                                        }),
                                        (0, a.jsx)(k.$, {
                                            className: (0, i.$)(Z().scrollContainer, Z().important),
                                            listClassName: Z().content,
                                            itemClassName: Z().item,
                                            customComponents: ee,
                                            itemContentCallback: (e) => {
                                                let t = G.albumsSubpage.items[e],
                                                    r = Y({ id: 'loading-messages.entity-is-loading' }, { entityName: Y({ id: 'entity-names.playlist' }) });
                                                return t
                                                    ? (0, a.jsx)(f.a, { album: t, contentLinesCount: 4 }, t.id)
                                                    : (0, a.jsx)(O.V, { 'aria-label': r, linesCount: 4 });
                                            },
                                            totalCount: J,
                                            onGetDataByPage: K,
                                            pageSize: g.r3,
                                            totalRequests: G.albumsSubpage.requestsCount,
                                            handleRef: Q,
                                            context: { listAriaLabel: er },
                                            isMobileLayout: F,
                                            useWindowScroll: F,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        63565: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { g: () => a }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(a || (a = {})));
        },
        68436: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var a = r(88092);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                a.__exportStar(r(45700), t),
                (t._Parser = void 0));
        },
        84766: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 16166));
        },
        87128: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => a });
            var a = (function (e) {
                return ((e.DISCOGRAPHY = 'discography'), (e.ALBUMS = 'albums'), (e.COMPILATIONS = 'compilations'), e);
            })({});
        },
        88349: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => a });
            let a = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 5108, 8380, 127, 1931, 1191, 7617, 3637, 206, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 2837, 4732, 1195,
                1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 8130, 763, 2670, 7358,
            ],
            () => e((e.s = 84766)),
        ),
            (_N_E = e.O()));
    },
]);
