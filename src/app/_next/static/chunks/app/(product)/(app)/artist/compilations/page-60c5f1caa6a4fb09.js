(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [813, 3580],
    {
        3666: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 25055));
        },
        4562: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => r });
            var r = (function (e) {
                return ((e.DISCOGRAPHY = 'discography'), (e.ALBUMS = 'albums'), (e.COMPILATIONS = 'compilations'), e);
            })({});
        },
        13580: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => b });
            var r,
                i,
                n = a(23198),
                l = a(46254);
            function s(e, t) {
                var a = t && t.cache ? t.cache : d,
                    r = t && t.serializer ? t.serializer : c;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var a,
                                  r,
                                  i = 1 === e.length ? o : u;
                              return ((a = t.cache.create()), (r = t.serializer), i.bind(this, e, a, r));
                          }
                )(e, { cache: a, serializer: r });
            }
            function o(e, t, a, r) {
                var i = null == r || 'number' == typeof r || 'boolean' == typeof r ? r : a(r),
                    n = t.get(i);
                return (void 0 === n && ((n = e.call(this, r)), t.set(i, n)), n);
            }
            function u(e, t, a) {
                var r = Array.prototype.slice.call(arguments, 3),
                    i = a(r),
                    n = t.get(i);
                return (void 0 === n && ((n = e.apply(this, r)), t.set(i, n)), n);
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
                        var a, r;
                        return ((a = t.cache.create()), (r = t.serializer), u.bind(this, e, a, r));
                    },
                    monadic: function (e, t) {
                        var a, r;
                        return ((a = t.cache.create()), (r = t.serializer), o.bind(this, e, a, r));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(r || (r = {}));
            var f = (function (e) {
                    function t(t, a, r) {
                        var i = e.call(this, t) || this;
                        return ((i.code = a), (i.originalMessage = r), i);
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
                    function t(t, a, i, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(a, '". Options are "').concat(Object.keys(i).join('", "'), '"'),
                                r.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(f),
                h = (function (e) {
                    function t(t, a, i) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(a), r.INVALID_VALUE, i) || this;
                    }
                    return ((0, n.__extends)(t, e), t);
                })(f),
                y = (function (e) {
                    function t(t, a) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(a, '"'), r.MISSING_VALUE, a) || this
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
                            set: function (t, a) {
                                e[t] = a;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(i || (i = {}));
            var b = (function () {
                function e(t, a, o, u) {
                    var c,
                        m,
                        d = this;
                    if (
                        (void 0 === a && (a = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = d.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var a = t.reduce(function (e, t) {
                                return (e.length && t.type === i.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return a.length <= 1 ? a[0] || '' : a;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, a, n, s, o, u, c) {
                                if (1 === t.length && (0, l.isLiteralElement)(t[0])) return [{ type: i.literal, value: t[0].value }];
                                for (var m = [], d = 0; d < t.length; d++) {
                                    var p = t[d];
                                    if ((0, l.isLiteralElement)(p)) {
                                        m.push({ type: i.literal, value: p.value });
                                        continue;
                                    }
                                    if ((0, l.isPoundElement)(p)) {
                                        'number' == typeof u && m.push({ type: i.literal, value: n.getNumberFormat(a).format(u) });
                                        continue;
                                    }
                                    var v = p.value;
                                    if (!(o && v in o)) throw new y(v, c);
                                    var b = o[v];
                                    if ((0, l.isArgumentElement)(p)) {
                                        ((b && 'string' != typeof b && 'number' != typeof b) || (b = 'string' == typeof b || 'number' == typeof b ? String(b) : ''),
                                            m.push({ type: 'string' == typeof b ? i.literal : i.object, value: b }));
                                        continue;
                                    }
                                    if ((0, l.isDateElement)(p)) {
                                        var _ = 'string' == typeof p.style ? s.date[p.style] : (0, l.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        m.push({ type: i.literal, value: n.getDateTimeFormat(a, _).format(b) });
                                        continue;
                                    }
                                    if ((0, l.isTimeElement)(p)) {
                                        var _ = 'string' == typeof p.style ? s.time[p.style] : (0, l.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : s.time.medium;
                                        m.push({ type: i.literal, value: n.getDateTimeFormat(a, _).format(b) });
                                        continue;
                                    }
                                    if ((0, l.isNumberElement)(p)) {
                                        var _ = 'string' == typeof p.style ? s.number[p.style] : (0, l.isNumberSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        (_ && _.scale && (b *= _.scale || 1), m.push({ type: i.literal, value: n.getNumberFormat(a, _).format(b) }));
                                        continue;
                                    }
                                    if ((0, l.isTagElement)(p)) {
                                        var S = p.children,
                                            I = p.value,
                                            A = o[I];
                                        if ('function' != typeof A) throw new h(I, 'function', c);
                                        var N = A(
                                            e(S, a, n, s, o, u).map(function (e) {
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
                                    if ((0, l.isSelectElement)(p)) {
                                        var E = p.options[b] || p.options.other;
                                        if (!E) throw new g(p.value, b, Object.keys(p.options), c);
                                        m.push.apply(m, e(E.value, a, n, s, o));
                                        continue;
                                    }
                                    if ((0, l.isPluralElement)(p)) {
                                        var E = p.options['='.concat(b)];
                                        if (!E) {
                                            if (!Intl.PluralRules)
                                                throw new f(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    r.MISSING_INTL_API,
                                                    c,
                                                );
                                            var L = n.getPluralRules(a, { type: p.pluralType }).select(b - (p.offset || 0));
                                            E = p.options[L] || p.options.other;
                                        }
                                        if (!E) throw new g(p.value, b, Object.keys(p.options), c);
                                        m.push.apply(m, e(E.value, a, n, s, o, b - (p.offset || 0)));
                                        continue;
                                    }
                                }
                                return m.length < 2
                                    ? m
                                    : m.reduce(function (e, t) {
                                          var a = e[e.length - 1];
                                          return (a && a.type === i.literal && t.type === i.literal ? (a.value += t.value) : e.push(t), e);
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
                        (this.locales = a),
                        (this.resolvedLocale = e.resolveLocale(a)),
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
                                      var a, r;
                                      return (
                                          (e[t] =
                                              ((a = c[t]),
                                              (r = o[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, a || {}), r || {}),
                                                        Object.keys(a).reduce(function (e, t) {
                                                            return ((e[t] = (0, n.__assign)((0, n.__assign)({}, a[t]), r[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : a)),
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
                                getNumberFormat: s(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.number), strategy: p.variadic },
                                ),
                                getDateTimeFormat: s(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(m.dateTime), strategy: p.variadic },
                                ),
                                getPluralRules: s(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
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
        25055: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => o }));
            var r = a(25839),
                i = a(84059),
                n = a(64940),
                l = a(4562),
                s = a(61288);
            let o = () => {
                let e = (0, i.useSearchParams)().get('artistId');
                return ((e && (0, s.L)(e)) || (0, i.notFound)(), (0, r.jsx)(n.r, { artistId: e, variant: l.h.COMPILATIONS }));
            };
        },
        33709: (e) => {
            e.exports = {
                root: 'ArtistAlbumsPage_root__UVZDz',
                scrollContainer: 'ArtistAlbumsPage_scrollContainer__2FrjI',
                important: 'ArtistAlbumsPage_important__Id_vh',
                footer: 'ArtistAlbumsPage_footer__6Nrct',
                item: 'ArtistAlbumsPage_item__kiegh',
                content: 'ArtistAlbumsPage_content__65D6P',
            };
        },
        38902: (e, t) => {
            'use strict';
            var a, r;
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
                })(r || (t.SKELETON_TYPE = r = {})),
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
                    return !!(e && 'object' == typeof e && e.type === r.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === r.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: a.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: a.number, value: e, style: t };
                }));
        },
        46254: (e, t, a) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var r = a(23198);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                r.__exportStar(a(38902), t),
                (t._Parser = void 0));
        },
        64940: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => Q });
            var r = a(25839),
                i = a(82298),
                n = a(88204),
                l = a(84059),
                s = a(74631),
                o = a(39004),
                u = a(61493),
                c = a(78111),
                m = a(71035),
                d = a(4254),
                p = a(78299),
                f = a(76939),
                g = a(31447),
                h = a(1407),
                y = a(1797),
                v = a(20258),
                b = a(10322),
                _ = a(21784),
                S = a(89192),
                I = a(30716),
                A = a(27954),
                N = a(4562),
                E = a(60678),
                L = a(56412),
                T = a(99401),
                P = a(26076),
                w = a(10603),
                O = a(19412),
                j = a(6968),
                k = a(17951),
                M = a(61732),
                D = a(12234),
                R = a(64595),
                C = a(26208),
                U = a(89221),
                x = a(27935),
                G = a(41016),
                F = a(80461),
                Y = a(95445);
            async function V(e, t) {
                var a, r, i;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, U.W)(t.locale),
                    l = n({ id: 'metadata.artist-albums-title' }, { artistName: e.artist.name }),
                    s = n({ id: 'metadata.artist-albums-description' }, { artistName: e.artist.name });
                return {
                    title: l,
                    description: s,
                    openGraph: (0, x.i)({
                        ogTitle: l,
                        ogDescription: s,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, C.v)({ tld: t.tld }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, G.H)({ cardType: F.W.SUMMARY_LARGE_IMAGE, title: l, description: s }),
                    facebook: (0, R.k)(),
                    appLinks: (0, D.X)({
                        additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (i = t.fullUrl) ? i : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, Y.S)('/artist/:artistId/albums', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            async function z(e, t) {
                var a, r, i;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, U.W)(t.locale),
                    l = n({ id: 'metadata.artist-compilations-title' }, { artistName: e.artist.name }),
                    s = n({ id: 'metadata.artist-compilations-description' }, { artistName: e.artist.name });
                return {
                    title: l,
                    description: s,
                    openGraph: (0, x.i)({
                        ogTitle: l,
                        ogDescription: s,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, C.v)({ tld: t.tld }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, G.H)({ cardType: F.W.SUMMARY_LARGE_IMAGE, title: l, description: s }),
                    facebook: (0, R.k)(),
                    appLinks: (0, D.X)({
                        additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (i = t.fullUrl) ? i : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, Y.S)('/artist/:artistId/compilations', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            async function B(e, t) {
                var a, r, i;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, U.W)(t.locale),
                    l = n({ id: 'metadata.artist-discography-title' }, { artistName: e.artist.name }),
                    s = n({ id: 'metadata.artist-discography-description' }, { artistName: e.artist.name });
                return {
                    title: l,
                    description: s,
                    openGraph: (0, x.i)({
                        ogTitle: l,
                        ogDescription: s,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, C.v)({ tld: t.tld }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, G.H)({ cardType: F.W.SUMMARY_LARGE_IMAGE, title: l, description: s }),
                    facebook: (0, R.k)(),
                    appLinks: (0, D.X)({
                        additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (i = t.fullUrl) ? i : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, Y.S)('/artist/:artistId/discography', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var H = a(28604),
                W = a(19386),
                X = a(33709),
                Z = a.n(X);
            let Q = (0, n.PA)((e) => {
                var t, a, n;
                let { artistId: D, variant: R, preloadedArtist: C, preloadedAlbums: U } = e,
                    {
                        artist: x,
                        disclaimerModalState: G,
                        settings: { isMobile: F },
                    } = (0, A.g)(),
                    { formatMessage: Y } = (0, o.A)(),
                    { contentScrollRef: X, setContentScrollRef: Q } = (0, S.g)(),
                    q = (0, _.W)(),
                    J = x.albumsSubpage.isShimmerVisible ? g.r3 : x.albumsSubpage.items.length,
                    K = (0, m.c)((e) => {
                        x.albumsSubpage.getData({ artistId: D, page: e, pageSize: g.r3, sort: { sortBy: c.g.YEAR } });
                    });
                (0, E.X)(x.albumsSubpage.pagesLoader, K);
                let $ = (0, y.S)({ artist: null == (t = x.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, W.G)(D),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = x.meta) ? void 0 : e.artist.isUnsafeLegal) && $();
                    }, [null == (a = x.meta) ? void 0 : a.artist.isUnsafeLegal, $]),
                    (0, H._)(x, D),
                    (0, s.useEffect)(
                        () => () => {
                            x.albumsSubpage.reset();
                        },
                        [x, x.albumsSubpage],
                    ),
                    x.albumsSubpage.isNotFound && (0, l.notFound)(),
                    (0, I.J)(x.albumsSubpage.isResolved),
                    ((e, t) => {
                        var a;
                        (0, s.useEffect)(() => {
                            if (!(null == e ? void 0 : e.meta) || e.infoLoadingState.isLoading || !e.meta.artist) return;
                            let a = (0, k.E)(e.meta.artist);
                            switch (t) {
                                case N.h.ALBUMS:
                                    V({ artist: a }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, M.j)(e);
                                    });
                                    break;
                                case N.h.COMPILATIONS:
                                    z({ artist: a }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, M.j)(e);
                                    });
                                    break;
                                case N.h.DISCOGRAPHY:
                                    B({ artist: a }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, M.j)(e);
                                    });
                            }
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, t, null == e || null == (a = e.meta) ? void 0 : a.artist]);
                    })(x, R));
                let ee = (0, s.useMemo)(() => ({ Footer: () => (0, r.jsx)(P.A, { children: (0, r.jsx)(T.w, { className: Z().footer }) }) }), []),
                    et = (0, s.useMemo)(() => {
                        switch (R) {
                            case N.h.DISCOGRAPHY:
                                return Y({ id: 'page.artist-discography-header' }, { artistName: x.commonSubPage.artistName });
                            case N.h.COMPILATIONS:
                                return Y({ id: 'page.artist-compilations-header' }, { artistName: x.commonSubPage.artistName });
                            default:
                                return Y({ id: 'page.artist-albums-header' }, { artistName: x.commonSubPage.artistName });
                        }
                    }, [x.commonSubPage.artistName, Y, R]),
                    ea = (0, s.useMemo)(() => {
                        switch (R) {
                            case N.h.DISCOGRAPHY:
                                return Y({ id: 'entity-names.artist-studio-albums-list' });
                            case N.h.COMPILATIONS:
                                return Y({ id: 'entity-names.artist-compilations-list' });
                            default:
                                return Y({ id: 'entity-names.artist-albums-list' });
                        }
                    }, [Y, R]),
                    er = (0, s.useMemo)(() => {
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
                return (D &&
                    x.albumsSubpage.isNeededToLoad &&
                    (x.albumsSubpage.setVariant(R),
                    ei.push(x.albumsSubpage.getData({ artistId: D, page: 0, pageSize: g.r3, sort: { sortBy: c.g.YEAR }, preloadedAlbums: U }))),
                D && x.infoLoadingState.isNeededToLoad && ei.push(x.getInfo({ artistId: D, preloadedArtist: C })),
                ei.length && (0, s.use)(Promise.allSettled(ei)),
                null == (n = x.meta) ? void 0 : n.artist.isLegalRejected)
                    ? (0, r.jsx)(L.M, { modalState: G })
                    : x.albumsSubpage.isRejected && !x.albumsSubpage.isNotFound
                      ? (0, r.jsx)(p.SomethingWentWrong, {})
                      : (0, r.jsx)(b.n, {
                            pageId: er,
                            pageEntityId: D,
                            children: (0, r.jsx)(h.h, {
                                scrollElement: X,
                                outerTitle: et,
                                children: (0, r.jsxs)('div', {
                                    className: Z().root,
                                    'data-test-id': u.Xk.artist.ARTIST_ALBUMS_PAGE,
                                    children: [
                                        (0, r.jsx)(w.Y, {
                                            variant: w.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: q.canBack,
                                            children: (0, r.jsx)(d.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: et }),
                                        }),
                                        (0, r.jsx)(j.$, {
                                            className: (0, i.$)(Z().scrollContainer, Z().important),
                                            listClassName: Z().content,
                                            itemClassName: Z().item,
                                            customComponents: ee,
                                            itemContentCallback: (e) => {
                                                let t = x.albumsSubpage.items[e],
                                                    a = Y({ id: 'loading-messages.entity-is-loading' }, { entityName: Y({ id: 'entity-names.playlist' }) });
                                                return t
                                                    ? (0, r.jsx)(f.a, { album: t, contentLinesCount: 4 }, t.id)
                                                    : (0, r.jsx)(O.V, { 'aria-label': a, linesCount: 4 });
                                            },
                                            totalCount: J,
                                            onGetDataByPage: K,
                                            pageSize: g.r3,
                                            totalRequests: x.albumsSubpage.requestsCount,
                                            handleRef: Q,
                                            context: { listAriaLabel: ea },
                                            isMobileLayout: F,
                                            useWindowScroll: F,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        78111: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { g: () => r }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(r || (r = {})));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7339, 6749, 6287, 2121, 3472, 1107, 7349, 1274, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 4245, 3269, 4163,
                3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 4588, 4475, 5056, 7358,
            ],
            () => e((e.s = 3666)),
        ),
            (_N_E = e.O()));
    },
]);
