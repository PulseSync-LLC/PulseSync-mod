(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3266, 6170],
    {
        1045: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            let r = 100;
        },
        2125: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var r = a(37862),
                i = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(r.U.RUP, '_').concat(r.U.MAIN, '-').concat(r.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(r.U.DISCOGRAPHY, '_').concat(r.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(r.U.ALBUMS, '_').concat(r.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(r.U.COMPILATIONS, '_').concat(r.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(r.U.ARTISTS, '_').concat(r.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(r.U.CLIPS, '_').concat(r.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(r.U.DISCOVERY, '_').concat(r.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(r.U.SEARCH, '_').concat(r.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.SIMILAR, '_').concat(r.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(r.U.SEARCH, '_').concat(r.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(r.U.SEARCH, '_').concat(r.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        3237: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => n, RA: () => i, kz: () => l, m_: () => s, tn: () => o, w_: () => r });
            let r = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                i = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                l = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                n = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                s = 'adfox_176504636866914259',
                o = 'adfox_176053846725924259';
        },
        3266: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => h });
            var r,
                i,
                l = a(30782),
                n = a(63670);
            function s(e, t) {
                var a = t && t.cache ? t.cache : m,
                    r = t && t.serializer ? t.serializer : d;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var a,
                                  r,
                                  i = 1 === e.length ? o : c;
                              return (a = t.cache.create()), (r = t.serializer), i.bind(this, e, a, r);
                          }
                )(e, { cache: a, serializer: r });
            }
            function o(e, t, a, r) {
                var i = null == r || 'number' == typeof r || 'boolean' == typeof r ? r : a(r),
                    l = t.get(i);
                return void 0 === l && ((l = e.call(this, r)), t.set(i, l)), l;
            }
            function c(e, t, a) {
                var r = Array.prototype.slice.call(arguments, 3),
                    i = a(r),
                    l = t.get(i);
                return void 0 === l && ((l = e.apply(this, r)), t.set(i, l)), l;
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
                p = {
                    variadic: function (e, t) {
                        var a, r;
                        return (a = t.cache.create()), (r = t.serializer), c.bind(this, e, a, r);
                    },
                    monadic: function (e, t) {
                        var a, r;
                        return (a = t.cache.create()), (r = t.serializer), o.bind(this, e, a, r);
                    },
                };
            !(function (e) {
                (e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API');
            })(r || (r = {}));
            var _ = (function (e) {
                    function t(t, a, r) {
                        var i = e.call(this, t) || this;
                        return (i.code = a), (i.originalMessage = r), i;
                    }
                    return (
                        (0, l.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                y = (function (e) {
                    function t(t, a, i, l) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(a, '". Options are "').concat(Object.keys(i).join('", "'), '"'),
                                r.INVALID_VALUE,
                                l,
                            ) || this
                        );
                    }
                    return (0, l.__extends)(t, e), t;
                })(_),
                g = (function (e) {
                    function t(t, a, i) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(a), r.INVALID_VALUE, i) || this;
                    }
                    return (0, l.__extends)(t, e), t;
                })(_),
                v = (function (e) {
                    function t(t, a) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(a, '"'), r.MISSING_VALUE, a) || this
                        );
                    }
                    return (0, l.__extends)(t, e), t;
                })(_);
            function f(e) {
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
                (e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object');
            })(i || (i = {}));
            var h = (function () {
                function e(t, a, o, c) {
                    var d,
                        u,
                        m = this;
                    if (
                        (void 0 === a && (a = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var a = t.reduce(function (e, t) {
                                return e.length && t.type === i.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e;
                            }, []);
                            return a.length <= 1 ? a[0] || '' : a;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, a, l, s, o, c, d) {
                                if (1 === t.length && (0, n.isLiteralElement)(t[0])) return [{ type: i.literal, value: t[0].value }];
                                for (var u = [], m = 0; m < t.length; m++) {
                                    var p = t[m];
                                    if ((0, n.isLiteralElement)(p)) {
                                        u.push({ type: i.literal, value: p.value });
                                        continue;
                                    }
                                    if ((0, n.isPoundElement)(p)) {
                                        'number' == typeof c && u.push({ type: i.literal, value: l.getNumberFormat(a).format(c) });
                                        continue;
                                    }
                                    var f = p.value;
                                    if (!(o && f in o)) throw new v(f, d);
                                    var h = o[f];
                                    if ((0, n.isArgumentElement)(p)) {
                                        (h && 'string' != typeof h && 'number' != typeof h) || (h = 'string' == typeof h || 'number' == typeof h ? String(h) : ''),
                                            u.push({ type: 'string' == typeof h ? i.literal : i.object, value: h });
                                        continue;
                                    }
                                    if ((0, n.isDateElement)(p)) {
                                        var A = 'string' == typeof p.style ? s.date[p.style] : (0, n.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        u.push({ type: i.literal, value: l.getDateTimeFormat(a, A).format(h) });
                                        continue;
                                    }
                                    if ((0, n.isTimeElement)(p)) {
                                        var A = 'string' == typeof p.style ? s.time[p.style] : (0, n.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : s.time.medium;
                                        u.push({ type: i.literal, value: l.getDateTimeFormat(a, A).format(h) });
                                        continue;
                                    }
                                    if ((0, n.isNumberElement)(p)) {
                                        var A = 'string' == typeof p.style ? s.number[p.style] : (0, n.isNumberSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        A && A.scale && (h *= A.scale || 1), u.push({ type: i.literal, value: l.getNumberFormat(a, A).format(h) });
                                        continue;
                                    }
                                    if ((0, n.isTagElement)(p)) {
                                        var C = p.children,
                                            x = p.value,
                                            P = o[x];
                                        if ('function' != typeof P) throw new g(x, 'function', d);
                                        var E = P(
                                            e(C, a, l, s, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        Array.isArray(E) || (E = [E]),
                                            u.push.apply(
                                                u,
                                                E.map(function (e) {
                                                    return { type: 'string' == typeof e ? i.literal : i.object, value: e };
                                                }),
                                            );
                                    }
                                    if ((0, n.isSelectElement)(p)) {
                                        var b = p.options[h] || p.options.other;
                                        if (!b) throw new y(p.value, h, Object.keys(p.options), d);
                                        u.push.apply(u, e(b.value, a, l, s, o));
                                        continue;
                                    }
                                    if ((0, n.isPluralElement)(p)) {
                                        var b = p.options['='.concat(h)];
                                        if (!b) {
                                            if (!Intl.PluralRules)
                                                throw new _(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    r.MISSING_INTL_API,
                                                    d,
                                                );
                                            var T = l.getPluralRules(a, { type: p.pluralType }).select(h - (p.offset || 0));
                                            b = p.options[T] || p.options.other;
                                        }
                                        if (!b) throw new y(p.value, h, Object.keys(p.options), d);
                                        u.push.apply(u, e(b.value, a, l, s, o, h - (p.offset || 0)));
                                        continue;
                                    }
                                }
                                return u.length < 2
                                    ? u
                                    : u.reduce(function (e, t) {
                                          var a = e[e.length - 1];
                                          return a && a.type === i.literal && t.type === i.literal ? (a.value += t.value) : e.push(t), e;
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
                        var h = c || {},
                            A = (h.formatters, (0, l.__rest)(h, ['formatters']));
                        this.ast = e.__parse(t, (0, l.__assign)((0, l.__assign)({}, A), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    (this.formats =
                        ((d = e.formats),
                        o
                            ? Object.keys(d).reduce(
                                  function (e, t) {
                                      var a, r;
                                      return (
                                          (e[t] =
                                              ((a = d[t]),
                                              (r = o[t])
                                                  ? (0, l.__assign)(
                                                        (0, l.__assign)((0, l.__assign)({}, a || {}), r || {}),
                                                        Object.keys(a).reduce(function (e, t) {
                                                            return (e[t] = (0, l.__assign)((0, l.__assign)({}, a[t]), r[t] || {})), e;
                                                        }, {}),
                                                    )
                                                  : a)),
                                          e
                                      );
                                  },
                                  (0, l.__assign)({}, d),
                              )
                            : d)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (u = this.formatterCache) && (u = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: s(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, l.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(u.number), strategy: p.variadic },
                                ),
                                getDateTimeFormat: s(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, l.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(u.dateTime), strategy: p.variadic },
                                ),
                                getPluralRules: s(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, l.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(u.pluralRules), strategy: p.variadic },
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
        3313: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => c });
            var r = a(11386),
                i = a(49364),
                l = a(55178),
                n = a(86562),
                s = a(91945);
            class o extends r.uN {}
            (0, s._)(o, 'activators', [
                {
                    eventName: 'onKeyDown',
                    handler: (e) => {
                        let { nativeEvent: t } = e;
                        return (!(t.target instanceof HTMLElement) || 'button' !== t.target.tagName.toLowerCase()) && t.code === n.v.ENTER;
                    },
                },
            ]);
            let c = () => {
                let [e, t] = (0, l.useState)(null),
                    a = (0, l.useCallback)((e) => {
                        let { active: a } = e;
                        t(a.id);
                    }, []);
                return {
                    activeId: e,
                    handleDragStart: a,
                    handleDragCancel: (0, l.useCallback)(() => {
                        t(null);
                    }, []),
                    sensors: (0, r.FR)(
                        (0, r.MS)(r.cA, { activationConstraint: { distance: { y: 1 }, tolerance: 5 } }),
                        (0, r.MS)(r.IG, { activationConstraint: { delay: 250, tolerance: 5 } }),
                        (0, r.MS)(o, { coordinateGetter: i.JR, keyboardCodes: { start: [n.v.ENTER], cancel: [n.v.ESCAPE], end: [n.v.ENTER] } }),
                    ),
                };
            };
        },
        4823: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var r = a(55178),
                i = a(88763);
            let l = () => (0, r.useContext)(i.G);
        },
        6706: (e) => {
            e.exports = { button: 'PageHeaderPlaylistUgcUploadButton_button__mWtCr', form: 'PageHeaderPlaylistUgcUploadButton_form__V64Yu' };
        },
        6759: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => n });
            var r = a(14257),
                i = a(50),
                l = a(55509);
            let n = (e) => {
                let { theme: t } = (0, i.W)(),
                    a = t === r.S.Light ? 0.48 : 0.4;
                return { '--cover-color': (0, l.e)(e, 0.8, a) };
            };
        },
        7050: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            let r = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        8294: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylistMeta_root__9SHZ0',
                description: 'PageHeaderPlaylistMeta_description__edoVx',
                descriptionButton: 'PageHeaderPlaylistMeta_descriptionButton__Jkbg9',
                descriptionLink: 'PageHeaderPlaylistMeta_descriptionLink__OcY5m',
                updatedText: 'PageHeaderPlaylistMeta_updatedText__FSo_0',
                descriptionActionLink: 'PageHeaderPlaylistMeta_descriptionActionLink__aGgtK',
                addDescription: 'PageHeaderPlaylistMeta_addDescription__bFw2Y',
                textField: 'PageHeaderPlaylistMeta_textField__J5QMd',
                actionButtons: 'PageHeaderPlaylistMeta_actionButtons__EYX8Z',
                saveButton: 'PageHeaderPlaylistMeta_saveButton__rZbPS',
                cancelButton: 'PageHeaderPlaylistMeta_cancelButton__Qc5lG',
            };
        },
        8868: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => d });
            var r = a(55178),
                i = a(16172),
                l = a(52068),
                n = a(91027),
                s = a(62376),
                o = a(79374),
                c = a(37240);
            let d = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    a = (0, l.st)(),
                    d = (0, s.U)(),
                    { hash: u } = (0, l.gf)(),
                    { pageId: m } = (0, c.$)(),
                    p = (0, n.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !a ||
                            !m ||
                            !u ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = o.W[m];
                        if (!t) return;
                        let r = {
                                hash: u,
                                pageId: i.QT.Link,
                                entityType: i.LA.Deeplink,
                                entityId: i.LA.Deeplink,
                                from: i.QT.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            l = (0, i.Fx)({ params: r, logger: d, context: 'useSendDeeplinkNavigationEvent' });
                        l && (0, i.ID)(a.evgenInstance, l);
                    });
                return (
                    (0, r.useEffect)(() => {
                        t && p();
                    }, [t, p]),
                    (0, n.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || p({ deepLink: e });
                    })
                );
            };
        },
        15027: (e) => {
            e.exports = {
                root: 'SearchPlaylistInput_root__o14iM',
                content: 'SearchPlaylistInput_content__iDyfU',
                catalog: 'SearchPlaylistInput_catalog__5r6Xm',
                catalog_withTracks: 'SearchPlaylistInput_catalog_withTracks__B2ZYF',
                track: 'SearchPlaylistInput_track__2TGLS',
                shimmerItem: 'SearchPlaylistInput_shimmerItem__V0cOt',
                emptyBlockContainer: 'SearchPlaylistInput_emptyBlockContainer__NSQKG',
                disappearingTrack: 'SearchPlaylistInput_disappearingTrack__D6ja5',
                disappearing: 'SearchPlaylistInput_disappearing__w48Cd',
                appearingTrack: 'SearchPlaylistInput_appearingTrack__CYHzN',
                appearing: 'SearchPlaylistInput_appearing__SafaE',
            };
        },
        15358: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => s });
            var r = a(32290),
                i = a(80451);
            let l = /\[([^([\])]+)\]\(((?:https?:\/)?\/[^(()\s)]+)\)/g,
                n = /\[[^([\])]+\]\((?:https?:\/)?\/[^(()\s)]+\)/,
                s = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e || !t) return [];
                    let s = (0, i.sanitizeDOM)(e).toString(),
                        o = [...s.matchAll(l)];
                    return s.split(n).reduce((e, i, l) => {
                        e.push(i);
                        let { 1: n, 2: s } = o[l] || [];
                        return n && s && e.push((0, r.jsx)(t, { href: s, ...a, children: n })), e;
                    }, []);
                };
        },
        15523: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        16915: (e) => {
            e.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        18870: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { $: () => r }),
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
                })(r || (r = {}));
        },
        19088: (e) => {
            e.exports = {
                stickyFilters: 'PlaylistPageFilters_stickyFilters__SfT9C',
                staticFilters: 'PlaylistPageFilters_staticFilters__sk7JJ',
                staticFiltersCarousel: 'PlaylistPageFilters_staticFiltersCarousel__vJQXE',
            };
        },
        19875: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => u });
            var r = a(55178),
                i = a(16172),
                l = a(52068),
                n = a(62376),
                s = a(79374),
                o = a(84782),
                c = a(37240),
                d = a(51012);
            let u = () => {
                let e = (0, l.st)(),
                    t = (0, n.U)(),
                    { hash: a } = (0, l.gf)(),
                    { pageId: u } = (0, c.$)(),
                    { mainObjectType: m, mainObjectId: p } = (0, o.N)(),
                    { skeleton: _ } = (0, d.b)();
                return (0, r.useCallback)(
                    (r) => {
                        let { tabId: l = '', tabPos: n = 1, isTabSelectedByDefault: o = !1 } = r;
                        if (!e || !u) return;
                        let c = { hash: a, pageId: s.W[u], tabId: l, tabPos: n, isTabSelectedByDefault: o };
                        _ && (c.skeletonId = _), p && m && ((c.mainObjectType = m), (c.mainObjectId = p));
                        let d = (0, i.Fx)({ params: c, logger: t, context: 'useSendEventOnTabOpened' });
                        d && (0, i.TV)(e.evgenInstance, d);
                    },
                    [e, u, a, _, p, m, t],
                );
            };
        },
        22266: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            var r = (function (e) {
                return (
                    (e.VIDEO = 'VIDEO'),
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        25168: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDList_root__6Fryw',
                draggableItemWrapper: 'PlaylistPageDnDList_draggableItemWrapper__vvEWL',
                dots: 'PlaylistPageDnDList_dots__F4qh2',
                noHoverItem: 'PlaylistPageDnDList_noHoverItem__dbPTH',
            };
        },
        26749: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => r });
            var r = (function (e) {
                return (e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e;
            })({});
        },
        27478: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => n });
            var r = a(14257),
                i = a(50),
                l = a(55509);
            let n = (e) => {
                let { theme: t } = (0, i.W)(),
                    a = t === r.S.Light ? 0.6 : 0.35;
                return { '--trailer-color': (0, l.e)(e, 0.8, a) };
            };
        },
        28015: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i, l: () => r });
            let r = 'yandex_rtb',
                i = 256152;
        },
        28563: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => x });
            var r = a(32290),
                i = a(63618),
                l = a(42157),
                n = a(96103),
                s = a(55178),
                o = a.t(s, 2),
                c = a(21732),
                d = a(45807),
                u = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                m = {},
                p = {};
            (() => {
                Object.defineProperty(p, '__esModule', { value: !0 }), (p.useForwardRef = void 0);
                let e = (function e(t) {
                    var a = m[t];
                    if (void 0 !== a) return a.exports;
                    var r = (m[t] = { exports: {} });
                    return u[t](r, r.exports, e), r.exports;
                })(810);
                p.useForwardRef = function (t, a) {
                    let r = (0, e.useRef)(a);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(r.current) : (t.current = r.current));
                        }, [t]),
                        r
                    );
                };
            })(),
                p.__esModule;
            var _ = p.useForwardRef,
                y = a(54667),
                g = a(57594),
                v = a(49522),
                f = a(61954),
                h = a.n(f);
            let A = { [y.u.Desktop]: { start: 40, end: 20 }, [y.u.Mobile]: { start: 40, end: 40 } },
                C = (0, n.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: a,
                            forwardRef: n,
                            scrollPadding: o,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: m,
                            buttonSize: p,
                            buttonVariant: f,
                            withSecondaryColor: C,
                        } = e,
                        {
                            settings: { isMobile: x },
                        } = (0, g.g)(),
                        P = _(n, null),
                        { shouldBackwardButtonBeDisabled: E, shouldForwardButtonBeDisabled: b, shouldHideControls: T } = (0, d.Y)(P),
                        [L, S] = (0, s.useMemo)(() => {
                            let e = (0, l.A)(A, o);
                            return [x ? e[y.u.Mobile].start : e[y.u.Desktop].start, x ? e[y.u.Mobile].end : e[y.u.Desktop].end];
                        }, [o, x]),
                        k = (0, s.useCallback)(
                            (e) => {
                                var t;
                                let a = null == (t = P.current) ? void 0 : t.children[e],
                                    { current: r } = P;
                                if (!r || !(a instanceof HTMLElement)) return;
                                if (a.offsetLeft - r.scrollLeft < L) {
                                    r.scrollLeft = a.offsetLeft - L;
                                    return;
                                }
                                let i = r.scrollLeft + r.clientWidth - a.offsetLeft - a.offsetWidth;
                                i < S && (r.scrollLeft -= i - S);
                            },
                            [P, S, L],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                var t, r;
                                k(e), null == (t = (r = a.props).onTabChange) || t.call(r, e);
                            },
                            [a, k],
                        ),
                        D = (0, s.cloneElement)(a, { forwardRef: P, className: (0, i.$)(h().wrapper, a.props.className, h().carousel, h().important), onTabChange: I });
                    return (0, r.jsxs)('div', {
                        className: (0, i.$)(
                            h().root,
                            {
                                [h().root_carouselBetweenArrows]: u,
                                [h().root_arrowLeft_hidden]: E,
                                [h().root_arrowRight_hidden]: b,
                                [h().root_arrow_hidden]: E && b && T,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, r.jsx)('div', { className: h().list, children: D }),
                            !x &&
                                (0, r.jsx)(v.X, {
                                    className: (0, i.$)(h().buttons, m),
                                    carouselRef: P,
                                    backwardControlClassName: h().control,
                                    forwardControlClassName: h().control,
                                    withSecondaryColor: C,
                                    buttonSize: p,
                                    buttonVariant: f,
                                }),
                        ],
                    });
                }),
                x = (0, s.forwardRef)((e, t) => (0, r.jsx)(C, { forwardRef: t, ...e }));
        },
        29542: (e) => {
            e.exports = {
                emptyBlockContainer: 'PlaylistPageItem_emptyBlockContainer__K5xRV',
                shimmerItem: 'PlaylistPageItem_shimmerItem__s_fFo',
                isDuplicate: 'PlaylistPageItem_isDuplicate__Fhcc1',
            };
        },
        30247: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylist_root__yJBii',
                trailerControl: 'PageHeaderPlaylist_trailerControl__grrD9',
                pinControl: 'PageHeaderPlaylist_pinControl__hJOde',
                downloadControl: 'PageHeaderPlaylist_downloadControl__ijcAx',
                menuControl: 'PageHeaderPlaylist_menuControl__RGH0G',
                likeControl: 'PageHeaderPlaylist_likeControl__bCypn',
                controls: 'PageHeaderPlaylist_controls__uSwwK',
                mainControls: 'PageHeaderPlaylist_mainControls__k_S_i',
                ugcControls: 'PageHeaderPlaylist_ugcControls__9q8Ne',
            };
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
        31035: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        32087: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => l });
            var r = a(57594),
                i = a(79406);
            let l = () => {
                var e, t, a;
                let { user: l, experiments: n, settings: s } = (0, r.g)();
                return (
                    !n.checkExperiment(i.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = s.browserInfo) ? void 0 : e.isTouch) &&
                    l.isAuthorized &&
                    !l.hasPlus &&
                    (null == (a = n.getExperiment(i.z.WebNextDesktopWebFreemium)) || null == (t = a.value) ? void 0 : t.closeCollection) === 'on'
                );
            };
        },
        32369: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => j });
            var r = a(32290),
                i = a(63618),
                l = a(96103),
                n = a(55178),
                s = a(6752),
                o = a(54667),
                c = a(83920),
                d = a(57594),
                u = a(28563),
                m = a(8946),
                p = a(86168),
                _ = a(16172),
                y = a(52068),
                g = a(62376),
                v = a(79374),
                f = a(84782),
                h = a(37240),
                A = a(51012),
                C = a(45180),
                x = a(42701),
                P = a.n(x);
            let E = (e) => {
                let { filter: t, tabsState: a, index: l, isSticky: s, ...o } = e,
                    c = (() => {
                        let e = (0, n.useRef)(!1),
                            t = (0, y.st)(),
                            a = (0, g.U)(),
                            { hash: r } = (0, y.gf)(),
                            { pageId: i } = (0, h.$)(),
                            { mainObjectType: l, mainObjectId: s } = (0, f.N)(),
                            { skeleton: o } = (0, A.b)();
                        return (0, n.useCallback)(
                            (n) => {
                                let { tabId: c = '', tabPos: d = 1, isTabSelectedByDefault: u = !1 } = n;
                                if (!t || !i || e.current) return;
                                let m = { hash: r, pageId: v.W[i], tabId: c, tabPos: d, isTabSelectedByDefault: u };
                                o && (m.skeletonId = o), s && l && ((m.mainObjectType = l), (m.mainObjectId = s));
                                let p = (0, _.Fx)({ params: m, logger: a, context: 'useSendEventOnTabLoaded' });
                                p && ((0, _.hc)(t.evgenInstance, p), (e.current = !0));
                            },
                            [t, i, r, o, s, l, a],
                        );
                    })();
                return (
                    (0, n.useEffect)(() => {
                        c({ tabId: t.id, tabPos: l + 1, isTabSelectedByDefault: t.id === p.Q.ALL });
                    }, [t.id, l, c]),
                    (0, r.jsx)(C.o, { tabIndex: s ? -1 : 0, className: (0, i.$)(P().root, { [P().root_selected]: l === a.value }), title: t.name, value: l, ...o }, l)
                );
            };
            var b = a(80389),
                T = a.n(b);
            let L = (0, l.PA)((e) => {
                let { className: t, isActive: a = !0, shimmerClassName: l } = e;
                return (0, r.jsx)(m.wI, {
                    className: (0, i.$)(T().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, r.jsx)(m.zr, { className: (0, i.$)(T().root, l), shimmerClassName: T().shimmer, count: 3, isActive: a }),
                });
            });
            var S = a(15523),
                k = a.n(S);
            let I = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 40, end: 40 } },
                D = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 20, end: 50 } },
                N = (0, l.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: a,
                            className: l,
                            forwardRef: o,
                            carouselClassName: p,
                            shimmerClassName: _,
                            isSticky: y,
                            items: g,
                            isShimmerVisible: v,
                            isShimmerActive: f,
                            skipSearchCheck: h = !1,
                        } = e,
                        {
                            playlist: A,
                            settings: { isMobile: C },
                        } = (0, d.g)(),
                        { playlistStickyFiltersRef: x, playlistStaticFiltersRef: P, contentScrollRef: b } = (0, c.g)(),
                        T = null != g ? g : A.filters.items,
                        S = (0, s.L)(() =>
                            (0, r.jsx)(m.wI, {
                                ref: o,
                                className: (0, i.$)(k().carousel, p),
                                ...t,
                                onTabChange: a,
                                children: null == T ? void 0 : T.map((e, a) => (0, r.jsx)(E, { filter: e, tabsState: t, index: a, isSticky: y }, e.id)),
                            }),
                        ),
                        N = (0, n.useCallback)(() => {
                            P && x && (P.scrollLeft = x.scrollLeft);
                        }, [P, x]),
                        j = (0, n.useCallback)(() => {
                            P && x && (x.classList.add(k().carousel_noSmooth), (x.scrollLeft = P.scrollLeft), x.classList.remove(k().carousel_noSmooth));
                        }, [P, x]),
                        [B, R] = (0, n.useState)(!1);
                    (0, n.useEffect)(() => {
                        B && j();
                    }, [B, j]);
                    let F = (0, n.useCallback)(() => {
                        R((null == x ? void 0 : x.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [x]);
                    return (
                        (0, n.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                y
                                    ? (null == x || x.addEventListener('scroll', N, t), null == x || x.addEventListener('resize', N, t))
                                    : C
                                      ? (window.addEventListener('scroll', F, t), window.addEventListener('resize', F, t))
                                      : (null == b || b.addEventListener('scroll', F, t), null == b || b.addEventListener('resize', F, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [y, b, x, F, N, C]),
                        (null != v ? v : A.filters.isShimmerVisible)
                            ? (0, r.jsx)(L, { isActive: null == f || f, shimmerClassName: _ })
                            : T && 0 !== T.length && (h || A.search.isNeededToLoad)
                              ? (0, r.jsx)(u.F, { className: l, carouselElement: S, ref: o, scrollPadding: y ? D : I })
                              : void 0
                    );
                }),
                j = (0, n.forwardRef)((e, t) => (0, r.jsx)(N, { forwardRef: t, ...e }));
        },
        32804: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => p });
            var r = a(32290),
                i = a(91027),
                l = a(72676),
                n = a(9480),
                s = a(60214),
                o = a(45477),
                c = a(75582),
                d = a(44128),
                u = a(57594);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function p(e, t, a, p) {
                let _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: y } = (0, c.l)(),
                    { fullscreenPlayer: g } = (0, u.g)(),
                    v = (0, d.e)();
                return (0, i.c)(() => {
                    let i = e.reduce((e, t) => {
                        let a = _(t);
                        return a && e.push({ type: l.z4.Unloaded, meta: { id: a } }), e;
                    }, []);
                    if (!i.length) return;
                    switch (t) {
                        case n.N.LAST:
                            null == v || v.injectLast({ entitiesData: i, sourceContextData: null != a ? a : void 0 });
                            break;
                        case n.N.NEXT:
                            null == v || v.injectNext({ entitiesData: i, sourceContextData: null != a ? a : void 0 });
                    }
                    let c = g.modal.isOpened ? o.u.FULLSCREEN_INFO : o.u.INFO;
                    y((0, r.jsx)(s.l, { entityVariant: p.entityVariant, variant: t, entityTitle: p.entityTitle, coverUri: p.coverUri }), { containerId: c });
                });
            }
        },
        37318: (e) => {
            e.exports = {
                root: 'PageHeaderShimmer_root__kqSwa',
                cover: 'PageHeaderShimmer_cover__ay2cr',
                content: 'PageHeaderShimmer_content__SdBKK',
                info: 'PageHeaderShimmer_info__cZkS2',
                entityName: 'PageHeaderShimmer_entityName__tlWnA',
                title: 'PageHeaderShimmer_title__xKG4e',
                meta: 'PageHeaderShimmer_meta__YWx0m',
                controls: 'PageHeaderShimmer_controls__gPErM',
                desktopPlayButton: 'PageHeaderShimmer_desktopPlayButton__R7EmH',
                button: 'PageHeaderShimmer_button__13qrG',
            };
        },
        38278: (e) => {
            e.exports = {
                header: 'PlaylistPageHeader_header__Fgqns',
                header_branded: 'PlaylistPageHeader_header_branded__WyJ4k',
                header_brandedAxe: 'PlaylistPageHeader_header_brandedAxe__RDLB2',
                content: 'PlaylistPageHeader_content__boBkt',
                emptyPlaylist: 'PlaylistPageHeader_emptyPlaylist__oiG4B',
            };
        },
        39454: (e) => {
            e.exports = { root: 'PageHeaderPlaylistBrandingLink_root__7dQVL' };
        },
        40783: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => i });
            var r = a(55178);
            let i = (e, t) => ({
                topColorStyle: (0, r.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, r.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        41190: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => i });
            var r = a(72676);
            let i = (e) => ({ type: r.z4.Unloaded, meta: { id: e.entityId } });
        },
        42701: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        45333: (e) => {
            e.exports = { root: 'ContextMenuPlaylistPrivacyItem_root__kz3gc', caption: 'ContextMenuPlaylistPrivacyItem_caption__0VuXh' };
        },
        48753: (e) => {
            e.exports = {
                menuContent: 'ContextMenuAddTracksToPlaylistItem_menuContent__xq7AW',
                playlistList: 'ContextMenuAddTracksToPlaylistItem_playlistList__B4kxD',
                searchSection: 'ContextMenuAddTracksToPlaylistItem_searchSection__XKQcm',
                searchField: 'ContextMenuAddTracksToPlaylistItem_searchField__02VVy',
                playlistItemIcon: 'ContextMenuAddTracksToPlaylistItem_playlistItemIcon__76dbD',
                playlistItem: 'ContextMenuAddTracksToPlaylistItem_playlistItem___kFlm',
                emptyState: 'ContextMenuAddTracksToPlaylistItem_emptyState__vrM8b',
                createPlaylistButton: 'ContextMenuAddTracksToPlaylistItem_createPlaylistButton__IlAeY',
                menuDivider: 'ContextMenuAddTracksToPlaylistItem_menuDivider__oZg1N',
            };
        },
        50168: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var r = a(32290),
                i = a(63618),
                l = a(96103),
                n = a(55178),
                s = a(79856),
                o = a(57594),
                c = a(37318),
                d = a.n(c);
            let u = (0, l.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: l } = e,
                    {
                        settings: { isMobile: c },
                    } = (0, o.g)(),
                    u = (0, n.useMemo)(
                        () =>
                            c
                                ? (0, r.jsxs)('div', {
                                      className: d().controls,
                                      children: [
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                      ],
                                  })
                                : (0, r.jsxs)('div', {
                                      className: d().controls,
                                      children: [
                                          (0, r.jsx)(s.W, { className: d().desktopPlayButton, isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                          (0, r.jsx)(s.W, { className: d().button, radius: 'round', isActive: l }),
                                      ],
                                  }),
                        [l, c],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(d().root, t),
                    children: [
                        (0, r.jsx)(s.W, { className: d().cover, radius: a, isActive: l }),
                        (0, r.jsxs)('div', {
                            className: d().content,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: d().info,
                                    children: [
                                        (0, r.jsx)(s.W, { className: d().entityName, radius: 's', isActive: l }),
                                        (0, r.jsx)(s.W, { className: d().title, radius: 'xl', isActive: l }),
                                        (0, r.jsx)(s.W, { className: d().meta, radius: 's', isActive: l }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        51496: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { U: () => r }),
                (function (e) {
                    (e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female');
                })(r || (r = {}));
        },
        54578: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => s });
            var r = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (i && (i += ' '), (i += r));
                                            else for (a in t) t[a] && (i && (i += ' '), (i += a));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        a.r(t), a.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    9201: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = { root: 'sLuudThzDxW_5ARYjgjx', horizontal: 'xd6ji7lvp0et4nirt0TL', hasLabel: 'abbPp8VtL2D_PdW0Q_Wc', vertical: 'sMz62rSqViFDkXAMfGeO' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var l in ((r = {}), t)) 'key' !== l && (r[l] = t[l]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5455: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Divider = void 0);
                        let i = a(4377),
                            l = a(5881),
                            n = r(a(9201));
                        t.Divider = (e) => {
                            let { className: t, orientation: a = 'horizontal', children: r, ...s } = e,
                                o = r && (0, i.jsx)('span', { children: r });
                            return (0, i.jsx)('div', {
                                className: (0, l.clsx)(n.default.root, { [n.default[a]]: a, [n.default.hasLabel]: o }, t),
                                ...s,
                                role: 'separator',
                                'aria-orientation': a,
                                children: o,
                            });
                        };
                    },
                },
                i = {};
            function l(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var a = (i[e] = { exports: {} });
                return r[e].call(a.exports, a, a.exports, l), a.exports;
            }
            (l.d = (e, t) => {
                for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var n = {};
            (() => {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.Divider = void 0);
                var e = l(5455);
                Object.defineProperty(n, 'Divider', {
                    enumerable: !0,
                    get: function () {
                        return e.Divider;
                    },
                });
            })();
            var s = n.Divider;
            n.__esModule;
        },
        54667: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r, u: () => i });
            var r = (function (e) {
                    return (e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e;
                })({}),
                i = (function (e) {
                    return (e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e;
                })({});
        },
        55509: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => i });
            var r = a(73295);
            let i = (e, t, a) => {
                let i = null != t ? t : r.wT,
                    l = null != a ? a : r.by,
                    n = (0, r.de)((0, r.aq)(e), i, l),
                    s = Math.round(255 * n[0]),
                    o = Math.round(255 * n[1]),
                    c = Math.round(255 * n[2]);
                return 'rgb('.concat(s, ', ').concat(o, ', ').concat(c, ')');
            };
        },
        56958: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var r = a(55178),
                i = a(71483),
                l = a(46673);
            let n = (e) => {
                let { playlistId: t, filter: a } = e;
                return (0, r.useMemo)(() => (t ? (0, l.t)({ contextType: i.K.Playlist, contextId: t, filter: a }) : null), [t, a]);
            };
        },
        57594: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => l, g: () => n });
            var r = a(29222),
                i = a(55178);
            let l = (0, i.createContext)(null);
            function n() {
                let e = (0, i.useContext)(l);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58094: (e) => {
            e.exports = {
                root: 'PlaylistPageFooter_root__h6jh8',
                carouselContainer: 'PlaylistPageFooter_carouselContainer__fIwg5',
                carouselBlock: 'PlaylistPageFooter_carouselBlock__OFRtz',
                carouselBlockHeader: 'PlaylistPageFooter_carouselBlockHeader__HbjLr',
                footer: 'PlaylistPageFooter_footer__Mqwre',
            };
        },
        59564: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => m });
            var r = a(55178),
                i = a(91027);
            let l = null,
                n = [],
                s = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === l)
                        return void n.push((e) => {
                            e.context.AdvManager.render(...t);
                        });
                    l.context.AdvManager.render(...t);
                },
                o = function () {
                    for (var e, t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                    let [i, ...s] = a;
                    if (null === l)
                        return void n.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == l ? void 0 : l.cspNonce) ? t : void 0, ...i }, ...s);
                        });
                    l.code.create({ cspNonce: null != (e = l.cspNonce) ? e : void 0, ...i }, ...s);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === l)
                        return void n.push((e) => {
                            e.code.reload(...t);
                        });
                    l.code.reload(...t);
                },
                d = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === l)
                        return void n.push((e) => {
                            e.code.destroy(...t);
                        });
                    l.code.destroy(...t);
                },
                u = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === l)
                        return void n.push((e) => {
                            e.code.initialize(...t);
                        });
                    l.code.initialize(...t);
                },
                m = () => {
                    let [e, t] = (0, r.useState)(null !== l),
                        a = (0, i.c)((a) => {
                            var r, i, s;
                            let { cspNonce: o } = a;
                            void 0 === (null == (r = window) ? void 0 : r.Ya.Context) ||
                                void 0 === (null == (i = window) ? void 0 : i.Ya.adfoxCode) ||
                                e ||
                                ((window.yaContextCb = window.yaContextCb || []),
                                (l = { context: window.Ya.Context, code: window.Ya.adfoxCode, cspNonce: o }),
                                t(!0),
                                (s = l),
                                n.forEach((e) => {
                                    e(s);
                                }),
                                (n = []));
                        });
                    return { isLoaded: e, init: a, render: s, create: o, reload: c, destroy: d, initialize: u };
                };
        },
        60277: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => r });
            let r = 1e3;
        },
        61954: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        62336: (e) => {
            e.exports = {
                brandedPlaylistBannerWrapper: 'PlaylistPageHeaderBranding_brandedPlaylistBannerWrapper__S8BTI',
                creative: 'PlaylistPageHeaderBranding_creative__5OXtq',
            };
        },
        63351: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => rs });
            var r = a(32290),
                i = a(63618),
                l = a(96103),
                n = a(21916),
                s = a(55178),
                o = a(60900),
                c = a(16172),
                d = a(21732),
                u = a(66075),
                m = a(64170),
                p = a(4823),
                _ = a(93192),
                y = a(40783),
                g = a(7999),
                v = a(48922),
                f = a(8868),
                h = a(84051),
                A = a(71610),
                C = a(22714),
                x = a(13882),
                P = a(94805),
                E = a(83920),
                b = a(3796),
                T = a(57594),
                L = a(74694),
                S = a(45257),
                k = a(22556),
                I = a(96151),
                D = a(2047),
                N = a(44242),
                j = a(42125),
                B = a(24535),
                R = a(47216),
                F = a(94821),
                O = a(31995),
                w = a(26365);
            async function U(e, t) {
                var a, r, i, l, n;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let s = await (0, j.W)(t.locale),
                    o = null != (r = e.ogTitle) ? r : (0, O.Y)(e.title, 48, !1),
                    c = s({ id: 'metadata.playlist-title' }, { playlistTitle: e.title });
                return (null == (a = e.owner) ? void 0 : a.verified)
                    ? {
                          title: c,
                          description: c,
                          openGraph: (0, B.i)({
                              ogTitle: o,
                              ogDescription: (function (e) {
                                  var t;
                                  let { playlistMeta: a, messageFormatter: r } = e,
                                      i = '';
                                  return (
                                      a.ogDescription ? (i = a.ogDescription) : a.description && (i = a.description.replace(/\[(.*?)\]\(.*?\)/gi, '$1')),
                                      [
                                          (i = (0, O.Y)(i, 96, !1)),
                                          r({ id: 'metadata.playlist' }),
                                          (null != (t = a.likesCount) ? t : 0) > 0 && r({ id: 'metadata.likes-counter' }, { counter: a.likesCount }),
                                      ]
                                          .filter(Boolean)
                                          .join(' • ')
                                  );
                              })({ playlistMeta: e, messageFormatter: s }),
                              fullUrl: null != (i = t.fullUrl) ? i : '',
                              locale: t.locale,
                              ogImage: e.ogImage,
                              siteName: s({ id: 'metadata.yandex-music' }),
                              ogType: 'music.playlist',
                          }),
                          twitter: (0, R.H)({ cardType: F.W.APP, title: o, url: t.url, appName: s({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, N.X)({
                              additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                              appName: s({ id: 'metadata.yandex-music' }),
                          }),
                          alternates: (0, w.S)('/playlists/:playlistUuid', t.tld, { params: { playlistUuid: e.playlistUuid } }),
                      }
                    : { robots: { index: !1, follow: !1 } };
            }
            var M = a(32087),
                H = a(55509),
                Y = a(14257),
                z = a(50),
                W = a(31010),
                K = a(36477),
                G = a(66318),
                V = a.n(G),
                q = a(49364),
                X = a(73540),
                $ = a.n(X);
            let Q = (0, l.PA)(
                (0, s.forwardRef)((e, t) => {
                    var a;
                    let { children: l, 'data-index': n, ...o } = e,
                        { playlist: c } = (0, T.g)(),
                        {
                            isDragging: d,
                            listeners: u,
                            setNodeRef: m,
                            transform: p,
                            transition: _,
                            attributes: y,
                        } = (0, q.gl)({ id: String(null == (a = c.items[n]) ? void 0 : a.key) }),
                        g = (0, s.useCallback)(
                            (e) => {
                                m(e), 'function' == typeof t && t(e);
                            },
                            [t, m],
                        ),
                        v = { transition: _, '--translate-y': p ? ''.concat(Math.round(p.y), 'px') : void 0 };
                    return (0, r.jsx)('div', {
                        ref: g,
                        'data-index': n,
                        style: v,
                        ...o,
                        className: $().root,
                        children: (0, r.jsx)('div', { className: (0, i.$)($().inner, { [$().dragging]: d }), ...u, ...y, children: l }),
                    });
                }),
            );
            var Z = a(11386),
                J = a(79259),
                ee = a(51767),
                et = a(3313);
            let ea = (e, t) => {
                var a;
                let r = t - 1;
                if (!e.items.length || r < 0 || r > e.items.length) return '';
                let i = e.items[r];
                return (null == i || null == (a = i.data) ? void 0 : a.title) || '';
            };
            var er = a(20168),
                ei = a(66920),
                el = a(14482),
                en = a(45477),
                es = a(75582),
                eo = a(90357),
                ec = a(71483),
                ed = a(83917),
                eu = a(37862),
                em = a(95226),
                ep = a(26042),
                e_ = a(72396),
                ey = a(98350),
                eg = a(34223),
                ev = a(29542),
                ef = a.n(ev),
                eh = a(18729),
                eA = a(94631),
                eC = a(71926),
                ex = a(79406),
                eP = a(72694),
                eE = a.n(eP);
            let eb = (0, l.PA)((e) => {
                    var t, a, i, l, n;
                    let { item: o } = e,
                        { playlist: c, experiments: d } = (0, T.g)(),
                        { shouldShowMajor: u, shouldShowGenre: m, shouldShowDuplicate: p } = c.editorFeature,
                        _ = d.checkExperiment(ex.z.WebEditorsFeatures, 'on'),
                        y = p && c.editorFeature.getNumberGroupTrackDuplicated(o);
                    if (!_ || !o || (!m && !u && !y)) return null;
                    let g = [],
                        v = null == (a = o.data) || null == (t = a.major) ? void 0 : t.name,
                        f = null == (n = o.data) || null == (l = n.albums) || null == (i = l[0]) ? void 0 : i.genre;
                    if ((y && g.push('№'.concat(y)), u && v)) {
                        let e = c.editorFeature.getColorForMajor(v),
                            t = (0, r.jsx)('span', { className: eE().major, style: { '--major-color': e }, children: v });
                        g.push(t);
                    }
                    if ((m && f && g.push(f), !g.length)) return null;
                    let h = g.map((e, t, a) => (0, r.jsxs)(s.Fragment, { children: [e, t < a.length - 1 && '; '] }, t));
                    return (0, r.jsxs)(eC.HL, { className: eE().root, type: 'entity', size: 'm', weight: 'medium', variant: 'span', children: ['[', h, '] \xa0'] });
                }),
                eT = (0, l.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: i, isDragging: l, draggingClassName: n, from: s, utmLink: c, index: d, className: u } = e,
                        { playlist: m, sonataState: p } = (0, T.g)(),
                        { formatMessage: _ } = (0, o.A)(),
                        { removeTrackFromPlaylist: y, canRemoveTrackFromPlaylist: g } = (0, eh.s)();
                    return (0, r.jsx)(eA.K, {
                        beforeTitle: (0, r.jsx)(eb, { item: t }),
                        withPodcastName: !0,
                        withDNDBlock: i,
                        isDragging: l,
                        track: a,
                        handleRemove: g ? y : void 0,
                        draggingClassName: n,
                        playContextParams: {
                            contextData: { type: ec.K.Playlist, meta: m.contextMeta, from: s, utmLink: c },
                            entitiesData: p.unloadedEntitiesDataFromModels,
                            queueParams: { index: d },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: _({ id: 'playlist-actions.remove-from-playlist' }),
                        className: u,
                    });
                });
            var eL = a(69951);
            let eS = (0, l.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: l, isDragging: n, draggingClassName: s, from: c, utmLink: d, index: u, className: m } = e,
                        { playlist: p, sonataState: _ } = (0, T.g)(),
                        { formatMessage: y } = (0, o.A)(),
                        { removeTrackFromPlaylist: g, canRemoveTrackFromPlaylist: v } = (0, eh.s)();
                    return (0, r.jsx)(eL.K, {
                        beforeTitle: (0, r.jsx)(eb, { item: t }),
                        withDNDBlock: l,
                        isDragging: n,
                        track: a,
                        handleRemove: v ? g : void 0,
                        draggingClassName: s,
                        playContextParams: {
                            contextData: {
                                type: ec.K.Playlist,
                                meta: p.contextMeta,
                                from: c,
                                utmLink: d,
                                filter: p.filters.activeFilter,
                                filterName: p.filters.activeFilterName,
                                enableVariousAutoFlow: p.enableVariousAutoFlow,
                            },
                            entitiesData: _.unloadedEntitiesDataFromModels,
                            queueParams: { index: u },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: y({ id: 'playlist-actions.remove-from-playlist' }),
                        className: (0, i.$)(m, { [ef().isDuplicate]: p.editorFeature.shouldHighlightDublicatedTrack(t) }),
                    });
                }),
                ek = (0, l.PA)((e) => {
                    var t, a, l, n, s;
                    let o,
                        { index: d, className: u, isDragging: m, draggingClassName: p } = e,
                        { playlist: _ } = (0, T.g)(),
                        y = (null == (t = _.meta) ? void 0 : t.uuid) || _.uuid,
                        { from: g, utmLink: f } = (0, e_.f)({ pageId: v._Q.PLAYLIST, blockId: eu.U.PLAYLIST, pageEntityId: y, contextType: ec.K.Playlist, contextId: y }),
                        h = _.isDragAndDropEnabled,
                        A = null == (a = _.items) ? void 0 : a[d];
                    return (
                        (o =
                            A && A.data && _.meta
                                ? A.data.isTrackNonMusic || (null == (l = A.data.mainAlbum) ? void 0 : l.isNonMusic)
                                    ? (0, r.jsx)(eT, {
                                          item: A,
                                          withDNDBlock: h,
                                          isDragging: m,
                                          from: g,
                                          index: d,
                                          track: A.data,
                                          utmLink: f,
                                          draggingClassName: p,
                                          className: u,
                                      })
                                    : (0, r.jsx)(eS, {
                                          item: A,
                                          from: g,
                                          index: d,
                                          track: A.data,
                                          withDNDBlock: h,
                                          isDragging: m,
                                          draggingClassName: p,
                                          className: (0, i.$)(u, { [ef().isDuplicate]: _.editorFeature.shouldHighlightDublicatedTrack(A) }),
                                      })
                                : (0, r.jsx)(eg.D, { isActive: !0, className: ef().shimmerItem, variant: ey.X.PLAYLIST })),
                        (0, r.jsx)(ed.x.Provider, {
                            value: { playlist: _.meta, trackIndex: d },
                            children: (0, r.jsx)(em.F, {
                                blockType: c.LA.Tracks,
                                blockId: c.LA.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectId: String(null == _ || null == (n = _.meta) ? void 0 : n.uuid),
                                mainObjectType: c.ky.Playlist,
                                children: (0, r.jsx)(ep.B, {
                                    objectType: c.ky.Track,
                                    objectId: String(null == A || null == (s = A.data) ? void 0 : s.id),
                                    objectPosX: 1,
                                    objectPosY: d + 1,
                                    objectsCount: _.items.length,
                                    children: o,
                                }),
                            }),
                        })
                    );
                });
            var eI = a(25168),
                eD = a.n(eI);
            let eN = (0, l.PA)((e) => {
                let { children: t, playlist: a } = e,
                    { announcements: i, screenReaderInstructions: l } = ((e) => {
                        let { formatMessage: t } = (0, o.A)();
                        return {
                            screenReaderInstructions: { draggable: t({ id: 'drag-and-drop.playlist-move-instructions' }) },
                            announcements: {
                                onDragStart(a) {
                                    let { active: r } = a;
                                    return t({ id: 'drag-and-drop.playlist-on-move-start' }, { trackName: ea(e, Number(r.id)), index: r.id });
                                },
                                onDragOver(a) {
                                    let { active: r, over: i } = a,
                                        l = ea(e, Number(r.id));
                                    return i
                                        ? t({ id: 'drag-and-drop.playlist-on-move' }, { trackName: l, index: i.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-fail' }, { trackName: l });
                                },
                                onDragEnd(a) {
                                    let { active: r, over: i } = a,
                                        l = ea(e, Number(r.id));
                                    return i
                                        ? t({ id: 'drag-and-drop.playlist-on-move-end-with-index' }, { trackName: l, index: i.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-end' }, { trackName: l });
                                },
                                onDragCancel: () => t({ id: 'drag-and-drop.playlist-on-move-cancel' }),
                            },
                        };
                    })(a),
                    n = ((e) => {
                        let { notify: t } = (0, es.l)(),
                            { formatMessage: a } = (0, o.A)();
                        return (0, s.useCallback)(
                            async (i) => {
                                var l, n, s, o;
                                let { from: c, to: d } = i;
                                if (c < 0 || d < 0 || c >= e.items.length || d >= e.items.length) return;
                                let u = String(null == (l = e.items[c]) ? void 0 : l.id);
                                if (!u) return;
                                let m = (null == (n = e.items[c]) ? void 0 : n.albumId) ? Number(null == (s = e.items[c]) ? void 0 : s.albumId) : void 0;
                                e.moveTrack(c, d);
                                let p = await (null == (o = e.meta)
                                    ? void 0
                                    : o.changePlaylist((0, ei.M)({ operation: el.y.MOVE, startPosition: c, endPosition: d, tracks: [{ id: u, albumId: m }] })));
                                (p && p === er.Y.OK) ||
                                    (p === er.Y.RELOAD ? e.refresh() : e.moveTrack(d, c),
                                    t((0, r.jsx)(eo.h, { error: a({ id: 'drag-and-drop.failed-to-move' }) }), { containerId: en.u.ERROR }));
                            },
                            [a, t, e],
                        );
                    })(a),
                    { activeId: c, handleDragStart: d, handleDragCancel: u, sensors: m } = (0, et.Y)(),
                    p = (0, s.useCallback)(
                        (e) => {
                            let { active: t, over: r } = e;
                            if (!t.id || !(null == r ? void 0 : r.id)) return;
                            let i = a.itemsKeys.indexOf(String(t.id)),
                                l = a.itemsKeys.indexOf(String(r.id));
                            Number.isInteger(i) && Number.isInteger(l) && n({ from: i, to: l });
                        },
                        [n, a.itemsKeys],
                    ),
                    _ = (0, s.useMemo)(() => a.itemsKeys.indexOf(String(c)), [c, a.itemsKeys]);
                return a.isDragAndDropEnabled
                    ? (0, r.jsxs)(Z.Mp, {
                          sensors: m,
                          collisionDetection: Z.fp,
                          onDragStart: d,
                          onDragEnd: p,
                          onDragCancel: u,
                          modifiers: [J.FN, J.gj],
                          accessibility: { announcements: i, screenReaderInstructions: l },
                          children: [
                              (0, r.jsx)('div', { className: eD().root, children: (0, r.jsx)(q.gB, { items: a.itemsKeys, strategy: q._G, children: t }) }),
                              (0, ee.createPortal)(
                                  (0, r.jsx)(Z.Hd, {
                                      dropAnimation: { duration: 0 },
                                      children: c
                                          ? (0, r.jsx)('div', {
                                                className: eD().draggableItemWrapper,
                                                children: (0, r.jsx)(ek, { index: _, className: eD().noHoverItem, isDragging: !0, draggingClassName: eD().dots }),
                                            })
                                          : null,
                                  }),
                                  window.document.body,
                              ),
                          ],
                      })
                    : t;
            });
            var ej = a(6752),
                eB = a(71079),
                eR = a(64538),
                eF = a(2125),
                eO = a(58054),
                ew = a(32468),
                eU = a(58094),
                eM = a.n(eU);
            let eH = (0, l.PA)((e) => {
                let { playlist: t } = e,
                    { formatMessage: a } = (0, o.A)(),
                    l = (0, ej.L)(() => {
                        var e, l, n;
                        let s = [],
                            o = 3;
                        return (
                            t.hasSimilarEntities &&
                                (s.push(
                                    (0, r.jsx)(
                                        em.F,
                                        {
                                            blockType: c.LA.SimilarEntities,
                                            blockId: c.LA.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            objectsCount: null == (e = t.similarEntities.data) ? void 0 : e.items.length,
                                            mainObjectId: String(null == (l = t.meta) ? void 0 : l.uuid),
                                            mainObjectType: c.ky.Playlist,
                                            children: (0, r.jsx)(eB.Q, {
                                                ...t.similarEntities,
                                                meta: { title: a({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: 'h2',
                                                className: eM().carouselContainer,
                                                headerClassName: (0, i.$)(eM().carouselBlock, eM().carouselBlockHeader),
                                                containerClassName: eM().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                isLoaded: t.similarEntities.isLoaded,
                                                setHasSentAnalyticsOnLoaded: t.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        c.LA.SimilarEntities,
                                    ),
                                ),
                                o++),
                            t.hasSimilarPlaylists &&
                                (s.push(
                                    (0, r.jsx)(
                                        em.F,
                                        {
                                            blockId: c.LA.SimilarPlaylists,
                                            blockType: c.LA.SimilarPlaylists,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            blockIdForFrom: eF.h.PLAYLISTS_SIMILAR_PLAYLIST,
                                            objectsCount: t.similarPlaylists.length,
                                            mainObjectId: String(null == (n = t.meta) ? void 0 : n.uuid),
                                            mainObjectType: c.ky.Playlist,
                                            children: (0, r.jsx)(eR.E, {
                                                headingVariant: 'h2',
                                                isShimmerVisible: t.isLoading,
                                                isShimmerActive: !0,
                                                className: eM().carouselContainer,
                                                headerClassName: (0, i.$)(eM().carouselBlockHeader, eM().carouselBlock),
                                                containerClassName: eM().carouselBlock,
                                                title: a({ id: 'entity-names.similar-playlists' }),
                                                playlists: t.similarPlaylists,
                                                shouldSendAnalyticsOnLoaded: !0,
                                            }),
                                        },
                                        c.LA.SimilarPlaylists,
                                    ),
                                ),
                                o++),
                            s
                        );
                    });
                return (0, r.jsxs)('div', {
                    className: eM().root,
                    children: [(0, r.jsx)('div', { children: l }), (0, r.jsx)(ew.A, { children: (0, r.jsx)(eO.w, { className: eM().footer }) })],
                });
            });
            var eY = a(50168),
                ez = a(55425),
                eW = a(39407),
                eK = a(91027),
                eG = a(82586),
                eV = a(1045),
                eq = a(73141),
                eX = a(73192),
                e$ = a(71735),
                eQ = a(95481),
                eZ = a(54391),
                eJ = a(46200),
                e0 = a(5537),
                e1 = a(27478),
                e2 = a(90169),
                e5 = a(58008),
                e3 = a(97201),
                e4 = a(92744),
                e6 = a(10180),
                e7 = a(90326),
                e8 = a(29268),
                e9 = a(11260),
                te = a(87863),
                tt = a(73395),
                ta = a(31035),
                tr = a.n(ta),
                ti = a(63423),
                tl = a(19740),
                tn = a(77327),
                ts = a(70675),
                to = a(70204),
                tc = a(34186),
                td = a(84199),
                tu = a(38420),
                tm = a(71536),
                tp = a.n(tm);
            let t_ = (0, l.PA)((e) => {
                let { trackIds: t, className: a, onRemove: l } = e,
                    { slam: n } = (0, T.g)(),
                    c = (0, td.A)(),
                    { formatMessage: u } = (0, o.A)(),
                    m = (0, tc.N)(),
                    [p, _] = (0, s.useState)(!1),
                    y = m.get(to.vg),
                    g = n.isPlaylistDownloaded(t),
                    v = n.isPlaylistDownloading(t),
                    f = n.getPlaylistDownloadingProgress(t),
                    h = (0, eK.c)(() => {
                        if (v) {
                            null == c || c.stopDownload(t);
                            return;
                        }
                        if (g) return void _(!0);
                        null == c || c.download(t), y.count(tn.x.MY_FAVORITES_PLAYLIST_DOWNLOAD, ts.l);
                    }),
                    A = (0, eK.c)(() => {
                        null == c || c.delete(t), y.count(tn.x.MY_FAVORITES_PLAYLIST_DELETE, ts.l), null == l || l();
                    }),
                    C = (0, s.useMemo)(
                        () =>
                            g
                                ? (0, r.jsx)(eG.I, { variant: 'check', size: 'xxs', className: tp().downloadedIcon })
                                : v
                                  ? (0, r.jsx)(tu.A, {
                                        value: null != f ? f : 0,
                                        size: 26,
                                        withCancelIcon: !0,
                                        className: tp().downloadingProgress,
                                        progressBarClassName: tp().progress,
                                        cancelIconClassName: tp().cancelIcon,
                                    })
                                  : (0, r.jsx)(eG.I, { variant: 'download', size: 'xxs' }),
                        [g, v, f],
                    ),
                    x = (0, s.useMemo)(() => (v ? u({ id: 'offline.stop-downloading' }) : u({ id: 'offline.download' })), [u, v]);
                return g
                    ? (0, r.jsx)(tl.W1, {
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: C,
                          offsetOptions: 10,
                          open: p,
                          onOpenChange: _,
                          wrapperClassName: a,
                          ariaLabel: u({ id: 'offline.delete-from-device' }),
                          'data-test-id': d.e8.pageHeader.PLAYLIST_HEADER_DOWNLOADED_BUTTON,
                          children: (0, r.jsx)(tl.Dr, {
                              icon: (0, r.jsx)(eG.I, { variant: 'upload', size: 'xxs' }),
                              onClick: A,
                              children: (0, r.jsx)(eW.A, { id: 'offline.delete-from-device' }),
                          }),
                      })
                    : (0, r.jsx)(ti.$, {
                          className: (0, i.$)(tp().root, { [tp().root_downloading]: v }, a),
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: C,
                          'aria-label': x,
                          onClick: h,
                          'data-test-id': v ? d.e8.pageHeader.PLAYLIST_HEADER_STOP_DOWNLOAD_BUTTON : d.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_BUTTON,
                          children:
                              v &&
                              (0, r.jsx)(eC.HL, {
                                  variant: 'div',
                                  className: tp().progressText,
                                  'data-test-id': d.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_PROGRESS_TEXT,
                                  children: (0, r.jsx)(eW.A, { id: 'offline.downloading-progress', values: { value: f } }),
                              }),
                      });
            });
            var ty = a(30247),
                tg = a.n(ty),
                tv = a(63887),
                tf = a(52068),
                th = a(62376),
                tA = a(79374),
                tC = a(39454),
                tx = a.n(tC);
            let tP = (0, l.PA)((e) => {
                var t, a, i;
                let { playlistUuid: l } = e,
                    n = (0, p.Q)(),
                    o = ((e) => {
                        let t = (0, tf.st)(),
                            a = (0, th.U)(),
                            { hash: r } = (0, tf.gf)();
                        return (0, s.useCallback)(() => {
                            if (!t || !e.link) return;
                            let i = {
                                    hash: r,
                                    pageId: tA.W[v._Q.PLAYLIST],
                                    mainObjectType: c.ky.Playlist,
                                    mainObjectId: e.objectId,
                                    entityId: 'playlist_branded_action_button',
                                    pageStyle: c.QL.Fullscreen,
                                    pagePlacement: c.c4.Fullscreen,
                                    from: tA.W[v._Q.PLAYLIST],
                                    to: c.QT.Link,
                                    deepLink: e.link,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                l = (0, c.Fx)({ params: i, logger: a, context: 'useSendEventOnPlaylistBrandingLinkNavigated' });
                            l && (0, c.Mu)(t.evgenInstance, l);
                        }, [t, r, a, e]);
                    })({ objectId: l, link: null == (a = n.data) || null == (t = a.button) ? void 0 : t.href });
                return n.isEnabled && (null == (i = n.data) ? void 0 : i.button)
                    ? (0, r.jsx)(tv.N, {
                          className: tx().root,
                          href: n.data.button.href,
                          target: '_blank',
                          onClick: o,
                          children: (0, r.jsx)(eC.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: n.data.button.text }),
                      })
                    : null;
            });
            var tE = a(80451),
                tb = a(86269),
                tT = a(6759),
                tL = a(11323);
            let tS = ['image/png', 'image/jpeg', 'image/jpg'];
            var tk = a(93878),
                tI = a.n(tk);
            let tD = (0, l.PA)((e) => {
                let { className: t, playlist: a } = e,
                    {
                        settings: { isMobile: l },
                        playlist: { isRewind2024Playlist: n },
                        modals: { imageSliderModal: c },
                    } = (0, T.g)(),
                    u = a.coverUri,
                    m = a.canUserChange && !l,
                    { notify: p } = (0, es.l)(),
                    { formatMessage: _ } = (0, o.A)(),
                    y = (0, s.useRef)(null),
                    [g, v] = (0, s.useState)(u || ''),
                    [f, h] = (0, s.useState)(m),
                    [A, C] = (0, s.useState)(new FormData()),
                    x = (0, tE.createAvatarUrl)(u || '', 600, !1),
                    P = (0, tE.createAvatarUrl)(u || '', 300, !1),
                    [E, b] = (0, s.useState)(x),
                    [L, S] = (0, s.useState)(!1),
                    k = !!u,
                    I = (0, s.useMemo)(() => {
                        if (n && a.personalColor) return (0, tT.m)(a.personalColor);
                    }, [n, a.personalColor]);
                (0, s.useEffect)(() => {
                    f !== m && h(m);
                }, [m, f]);
                let D = (0, s.useCallback)(
                        () => p((0, r.jsx)(eo.h, { error: _({ id: 'playlist-errors.failed-to-change-poster' }) }), { containerId: en.u.ERROR }),
                        [p, _],
                    ),
                    N = (0, eK.c)(() => {
                        u && !L && c.openImages({ images: [u] });
                    }),
                    j = (0, eK.c)((e) => {
                        var t;
                        null == e || e.stopPropagation(), null == y || null == (t = y.current) || t.click();
                    }),
                    B = (0, eK.c)((e) => {
                        e.stopPropagation(), 'Enter' === e.key && j();
                    }),
                    R = (0, eK.c)((e) => {
                        e.stopPropagation();
                    }),
                    F = (0, eK.c)((e) => {
                        let t,
                            a = e.target,
                            r = (a.files || [])[0] || null;
                        if (((a.value = ''), !r || ((t = r.type), !tS.includes(t)) || !((e) => e > 0 && e <= 2e7)(r.size))) return void D();
                        g && b(g), h(!1), v(URL.createObjectURL(r));
                        let i = new FormData();
                        i.append('image', r), C(i);
                    }),
                    O = (0, s.useCallback)(
                        async (e) => {
                            let t = e.target,
                                r = () => {
                                    v(E), D(), h(!0);
                                };
                            if ((u && (t.currentSrc === x || t.currentSrc === P)) || !m || E === t.currentSrc) return;
                            if (
                                !((e) => {
                                    if (!e) return;
                                    let t = 2 * e.naturalHeight || e.height,
                                        a = 2 * e.naturalWidth || e.width;
                                    return t < 5e3 && a < 5e3;
                                })(t)
                            )
                                return void r();
                            S(!0);
                            let i = await a.changePlaylistCover(A);
                            S(!1), i === e5.F.ERROR ? r() : h(!0);
                        },
                        [D, E, a, A, u, m, x, P],
                    ),
                    w = (0, s.useMemo)(() => (g ? _({ id: 'playlist-actions.change-poster' }) : _({ id: 'playlist-actions.add-poster' })), [g, _]);
                return (0, r.jsxs)(tb.t, {
                    radius: 'm',
                    className: (0, i.$)(tI().root, t, { [tI().root_hoverable]: k }),
                    children: [
                        (0, r.jsx)('div', {
                            className: tI().backCoverColor,
                            style: I,
                            children: (0, r.jsx)(ti.$, {
                                onClick: N,
                                'aria-label': k ? _({ id: 'slider.view-cover' }) : void 0,
                                tabIndex: k ? 0 : -1,
                                disabled: !k,
                                className: tI().coverButton,
                                children: (0, r.jsx)(tL.B, { fit: 'cover', src: g, size: 300, className: tI().coverImage, withAvatarReplace: !0, onLoad: O }),
                            }),
                        }),
                        f &&
                            (0, r.jsx)('div', {
                                className: (0, i.$)(tI().buttonContainer, { [tI().buttonContainer_withCursorPointer]: g }),
                                onClick: k ? N : void 0,
                                children: (0, r.jsxs)('div', {
                                    className: (0, i.$)(tI().fileUploadContainer, { [tI().fileUploadContainer_hovered]: g }),
                                    children: [
                                        (0, r.jsx)(ti.$, {
                                            className: tI().button,
                                            radius: 'xxxl',
                                            size: 'xxs',
                                            color: 'secondary',
                                            withRipple: !1,
                                            onClick: j,
                                            onKeyUp: B,
                                            'aria-label': _({ id: 'playlist-actions.add-poster' }),
                                            'data-test-id': d.e8.pageHeader.PLAYLIST_HEADER_ADD_COVER_BUTTON,
                                            children: w,
                                        }),
                                        (0, r.jsx)('form', {
                                            className: tI().formFile,
                                            encType: 'multipart/form-data',
                                            children: (0, r.jsx)('input', {
                                                ref: y,
                                                type: 'file',
                                                name: 'file',
                                                accept: 'image/jpeg, image/png, image/jpg',
                                                onChange: F,
                                                onClick: R,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                    ],
                });
            });
            var tN = a(44989),
                tj = a(60277),
                tB = a(15358),
                tR = a(61258),
                tF = a(85832),
                tO = a(8294),
                tw = a.n(tO),
                tU = a(51496),
                tM = a(13757);
            let tH = (0, l.PA)((e) => {
                    let { playlist: t, className: a } = e,
                        { formatMessage: i } = (0, o.A)(),
                        l = (0, s.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.playlistReceiver))
                                    switch (e) {
                                        case tM.r.TODAY:
                                            return i({ id: 'interface-actions.playlist-made-today' }, t);
                                        case tM.r.YESTERDAY:
                                            return i({ id: 'interface-actions.playlist-made-yesterday' }, t);
                                        case tM.r.DATE_WITH_YEAR:
                                            return i({ id: 'interface-actions.playlist-made-date-with-year' }, t);
                                        default:
                                            return i({ id: 'interface-actions.playlist-made-date' }, t);
                                    }
                                switch (e) {
                                    case tM.r.TODAY:
                                        return i({ id: 'interface-actions.playlist-made-for-today' }, t);
                                    case tM.r.YESTERDAY:
                                        return i({ id: 'interface-actions.playlist-made-for-yesterday' }, t);
                                    case tM.r.DATE_WITH_YEAR:
                                        return i({ id: 'interface-actions.playlist-made-for-date-with-year' }, t);
                                    default:
                                        return i({ id: 'interface-actions.playlist-made-for-date' }, t);
                                }
                            },
                            [i],
                        ),
                        n = (0, s.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.ownerName))
                                    switch (e) {
                                        case tM.r.TODAY:
                                            return i({ id: 'interface-actions.updated-anonymously-playlist-today' }, t);
                                        case tM.r.YESTERDAY:
                                            return i({ id: 'interface-actions.updated-anonymously-playlist-yesterday' }, t);
                                        case tM.r.DATE_WITH_YEAR:
                                            return i({ id: 'interface-actions.updated-anonymously-playlist-date-with-year' }, t);
                                        default:
                                            return i({ id: 'interface-actions.updated-anonymously-playlist-date' }, t);
                                    }
                                switch (e) {
                                    case tM.r.TODAY:
                                        return i({ id: 'interface-actions.updated-playlist-today' }, t);
                                    case tM.r.YESTERDAY:
                                        return i({ id: 'interface-actions.updated-playlist-yesterday' }, t);
                                    case tM.r.DATE_WITH_YEAR:
                                        return i({ id: 'interface-actions.updated-playlist-date-with-year' }, t);
                                    default:
                                        return i({ id: 'interface-actions.updated-playlist-date' }, t);
                                }
                            },
                            [i],
                        ),
                        c = (0, s.useMemo)(() => {
                            var e, a, r, i, s;
                            let o = new Date(t.modified),
                                c = (0, tM.L)(o);
                            return t.madeFor
                                ? l(c, {
                                      playlistReceiver: (null == t || null == (i = t.madeFor) || null == (r = i.caseForms) ? void 0 : r.genitive) || '',
                                      updateDate: o,
                                  })
                                : t.isFavouritePlaylist
                                  ? (null == (s = t.owner) ? void 0 : s.name) || ''
                                  : n(c, {
                                        updateDate: new Date(t.modified),
                                        ownerName: (null == (e = t.owner) ? void 0 : e.name) || '',
                                        gender: (null == (a = t.owner) ? void 0 : a.sex) === tU.U.FEMALE ? 'female' : 'male',
                                    });
                        }, [t, l, n]);
                    return (0, r.jsx)(eC.HL, {
                        variant: 'span',
                        className: a,
                        type: 'text',
                        size: 'm',
                        weight: 'medium',
                        lineClamp: 1,
                        'data-test-id': d.e8.pageHeader.PLAYLIST_HEADER_UPDATED_TEXT,
                        children: c,
                    });
                }),
                tY = (0, l.PA)((e) => {
                    let { playlist: t } = e,
                        { formatMessage: a } = (0, o.A)(),
                        {
                            settings: { isMobile: l },
                        } = (0, T.g)(),
                        { notify: n } = (0, es.l)(),
                        c = t.canUserChange && !l,
                        u = !!t.description,
                        { state: m, toggleTrue: p, toggleFalse: _ } = (0, tN.e)(!1),
                        [y, g] = (0, s.useState)(t.description || ''),
                        v = (0, s.useCallback)(async () => {
                            _(),
                                (await t.changeDescription(y)) === e5.F.ERROR &&
                                    n((0, r.jsx)(eo.h, { error: a({ id: 'playlist-errors.failed-to-change-description' }) }), { containerId: en.u.ERROR });
                        }, [a, y, n, t, _]),
                        f = (0, s.useCallback)((e) => {
                            g(e);
                        }, []),
                        h = (0, s.useMemo)(() => (0, tB.r)(t.description, tR.N, { className: tw().descriptionLink }), [t.description]),
                        A = (0, s.useMemo)(
                            () =>
                                t.tagsString
                                    ? (0, r.jsx)(eC.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, r.jsx)(eW.A, { id: 'entity-names.tags', values: { tags: t.tagsString } }),
                                      })
                                    : null,
                            [t.tagsString],
                        );
                    return (0, r.jsxs)('div', {
                        className: tw().root,
                        children: [
                            u &&
                                !m &&
                                (0, r.jsxs)(eC.HL, {
                                    variant: 'span',
                                    className: tw().description,
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    children: [
                                        h,
                                        c &&
                                            (0, r.jsx)(ti.$, {
                                                variant: 'text',
                                                withRipple: !1,
                                                onClick: p,
                                                className: (0, i.$)(tw().descriptionActionLink, tw().addDescription),
                                                'aria-label': a({ id: 'playlist-actions.change-description' }),
                                                color: 'primary',
                                                'data-test-id': d.e8.pageHeader.PLAYLIST_HEADER_CHANGE_DESCRIPTION_BUTTON,
                                                children: (0, r.jsx)(eC.HL, {
                                                    variant: 'span',
                                                    size: 'm',
                                                    type: 'text',
                                                    className: tw().button,
                                                    children: (0, r.jsx)(eW.A, { id: 'playlist-actions.change-description-abbr' }),
                                                }),
                                            }),
                                    ],
                                }),
                            !u &&
                                c &&
                                !m &&
                                (0, r.jsx)(ti.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    onClick: p,
                                    className: tw().descriptionActionLink,
                                    'aria-label': a({ id: 'playlist-actions.add-description' }),
                                    color: 'primary',
                                    'data-test-id': d.e8.pageHeader.PLAYLIST_HEADER_ADD_DESCRIPTION_BUTTON,
                                    children: (0, r.jsxs)(eC.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: tw().button,
                                        children: [(0, r.jsx)(eW.A, { id: 'playlist-actions.add-description' }), '...'],
                                    }),
                                }),
                            c &&
                                m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(tF.A, {
                                            text: t.description,
                                            className: tw().textField,
                                            placeholder: ''.concat(a({ id: 'playlist-actions.add-description' }), '...'),
                                            maxTextLength: tj.i,
                                            onChangeFinish: f,
                                            variant: 'textarea',
                                            withOutline: !0,
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: tw().actionButtons,
                                            children: [
                                                (0, r.jsx)(ti.$, {
                                                    className: tw().saveButton,
                                                    color: 'secondary',
                                                    radius: 'xxxl',
                                                    size: 's',
                                                    'aria-label': a({ id: 'interface-actions.save' }),
                                                    onClick: v,
                                                    withHover: !0,
                                                    children: (0, r.jsx)(eW.A, { id: 'interface-actions.save' }),
                                                }),
                                                (0, r.jsx)(ti.$, {
                                                    variant: 'text',
                                                    withRipple: !1,
                                                    onClick: _,
                                                    className: tw().cancelButton,
                                                    'aria-label': a({ id: 'interface-actions.cancel' }),
                                                    color: 'primary',
                                                    children: (0, r.jsx)(eC.HL, {
                                                        variant: 'span',
                                                        size: 'm',
                                                        type: 'text',
                                                        className: tw().button,
                                                        children: (0, r.jsx)(eW.A, { id: 'interface-actions.cancel' }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(tH, { className: tw().updatedText, playlist: t }),
                            A,
                        ],
                    });
                });
            var tz = a(6706),
                tW = a.n(tz);
            let tK = (0, l.PA)((e) => {
                let { playlist: t } = e,
                    a = (0, s.useRef)(null),
                    { ugcUploadCenter: i } = (0, T.g)(),
                    { formatMessage: l } = (0, o.A)(),
                    n = (0, s.useCallback)(() => {
                        var e;
                        null == a || null == (e = a.current) || e.click();
                    }, [a]),
                    c = (0, s.useCallback)(
                        (e) => {
                            let a = e.target.files;
                            a && a.length > 0 && i.appendFiles([...a], t), (e.target.value = '');
                        },
                        [t, i],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ti.$, {
                            size: 's',
                            radius: 'xxxl',
                            'aria-label': l({ id: 'ugc.upload-track' }),
                            className: tW().button,
                            onClick: n,
                            'data-test-id': d.e8.pageHeader.PLAYLIST_HEADER_UPLOAD_UGC_BUTTON,
                            children: l({ id: 'ugc.upload-track' }),
                        }),
                        (0, r.jsx)('form', {
                            className: tW().form,
                            encType: 'multipart/form-data',
                            children: (0, r.jsx)('input', { ref: a, type: 'file', accept: 'audio/*', onChange: c, multiple: !0 }),
                        }),
                    ],
                });
            });
            var tG = a(79490),
                tV = a(62386),
                tq = a(32804),
                tX = a(9017),
                t$ = a(65477),
                tQ = a(54578),
                tZ = a(5771),
                tJ = a(48753),
                t0 = a.n(tJ),
                t1 = a(58534),
                t2 = a(78099),
                t5 = a.n(t2);
            let t3 = () =>
                (0, r.jsx)(t1.$, {
                    message: (0, r.jsx)(eC.HL, {
                        className: t5().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, r.jsx)(eW.A, { id: 'playlist-errors.failed-add-tracks-to-playlist' }),
                    }),
                });
            var t4 = a(61),
                t6 = a.n(t4);
            let t7 = (0, l.PA)((e) => {
                    let { playlistTitle: t = '', playlistUrl: a, closeToast: i } = e,
                        { fullscreenPlayer: l } = (0, T.g)(),
                        n = (0, eK.c)(() => {
                            l.modal.isOpened && l.modal.close();
                        }),
                        o = (0, s.useMemo)(
                            () =>
                                (0, r.jsx)(eC.HL, {
                                    className: t6().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, r.jsx)(eW.A, {
                                        id: 'notifications-info.added-tracks-to-playlist',
                                        values: {
                                            playlistName: (0, r.jsx)(tR.N, {
                                                className: t6().link,
                                                href: a,
                                                onClick: n,
                                                children: (0, r.jsxs)(eC.HL, {
                                                    className: t6().playlistTitle,
                                                    variant: 'div',
                                                    type: 'controls',
                                                    size: 'm',
                                                    lineClamp: 1,
                                                    children: ['\xa0', t, '\xa0'],
                                                }),
                                            }),
                                        },
                                    }),
                                }),
                            [n, t, a],
                        );
                    return (0, r.jsx)(t1.$, { closeToast: i, message: o });
                }),
                t8 = () =>
                    (0, r.jsx)(t1.$, {
                        message: (0, r.jsx)(eC.HL, {
                            className: t6().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, r.jsx)(eW.A, { id: 'notifications-info.already-added-tracks' }),
                        }),
                    }),
                t9 = (0, l.PA)((e) => {
                    let { playlistItem: t } = e,
                        {
                            fullscreenPlayer: a,
                            playlist: { itemsForCopy: i },
                        } = (0, T.g)(),
                        { notify: l } = (0, es.l)(),
                        n = (0, eK.c)(async () => {
                            var e, n;
                            if (0 === i.length) return;
                            let s = { containerId: a.modal.isOpened ? en.u.FULLSCREEN_INFO : en.u.INFO },
                                o = new Set(null != (n = null == t || null == (e = t.tracks) ? void 0 : e.map((e) => e.id.toString())) ? n : []),
                                c = i.filter((e) => !o.has(e.id));
                            return c.length
                                ? (await t.changePlaylist((0, ei.M)({ operation: el.y.INSERT, position: 0, tracks: c }))) === er.Y.OK
                                    ? void l((0, r.jsx)(t7, { playlistTitle: t.title, playlistUrl: t.url }), s)
                                    : void l((0, r.jsx)(t3, {}), s)
                                : void l((0, r.jsx)(t8, {}), s);
                        });
                    return (0, r.jsx)(tl.Dr, {
                        onClick: n,
                        icon: (0, r.jsx)(eG.I, { variant: 'add', size: 'xxs', className: t0().playlistItemIcon }),
                        className: t0().playlistItem,
                        'data-test-id': d.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_ITEM,
                        children: (0, r.jsx)(eC.HL, { variant: 'div', size: 'm', lineClamp: 1, children: t.title }),
                    });
                }),
                ae = (0, l.PA)((e) => {
                    let { searchQuery: t, sourcePlaylistUuid: a } = e,
                        { contextMenuPlaylists: i } = (0, T.g)(),
                        l = (0, s.useMemo)(() => {
                            let e = [];
                            return (
                                i.items.forEach((t) => {
                                    null !== t && t.uuid !== a && e.push(t);
                                }),
                                e
                            );
                        }, [i.items, a]),
                        n = (0, s.useMemo)(() => {
                            if (!t) return l;
                            let e = t.trim().toLowerCase();
                            return e
                                ? l.filter((t) => {
                                      var a;
                                      return (null != (a = t.title) ? a : '').toLowerCase().includes(e);
                                  })
                                : l;
                        }, [l, t]);
                    return n.length
                        ? (0, r.jsx)('div', {
                              className: t0().playlistList,
                              'data-test-id': d.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_LIST,
                              children: n.map((e) => (0, r.jsx)(t9, { playlistItem: e }, e.uuid)),
                          })
                        : (0, r.jsx)('div', {
                              className: t0().emptyState,
                              'data-test-id': d.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_EMPTY_STATE,
                              children: (0, r.jsx)(eW.A, { id: 'search-results.not-found-title' }),
                          });
                }),
                at = (0, l.PA)((e) => {
                    let { disabled: t, className: a, sourcePlaylistUuid: i } = e,
                        {
                            settings: { isMobile: l },
                            user: c,
                            contextMenuPlaylists: u,
                            playlist: { items: m, itemsForCopy: p },
                        } = (0, T.g)(),
                        { formatMessage: _ } = (0, o.A)(),
                        [y, g] = (0, s.useState)(''),
                        v = t || !c.isAuthorized || !m.length;
                    (0, s.useEffect)(
                        () => () => {
                            u.reset();
                        },
                        [u],
                    );
                    let f = ((e) => {
                            let { createPlaylist: t, fullscreenPlayer: a } = (0, T.g)(),
                                { notify: i } = (0, es.l)(),
                                l = (0, n.useRouter)(),
                                { formatMessage: s } = (0, o.A)();
                            return (0, eK.c)(async () => {
                                if (!(null == e ? void 0 : e.length)) return;
                                let n = { containerId: a.modal.isOpened ? en.u.FULLSCREEN_INFO : en.u.INFO };
                                await t.create({ title: s({ id: 'entity-names.new-playlist' }), visibility: D.L.PUBLIC });
                                let o = t.meta;
                                if (!(null == o ? void 0 : o.uuid)) {
                                    i((0, r.jsx)(t3, {}), n), t.reset();
                                    return;
                                }
                                if ((await o.changePlaylist((0, ei.M)({ operation: el.y.INSERT, position: 0, tracks: e }))) === er.Y.OK) {
                                    let { href: e } = (0, K.u)('/playlists/:playlistUuid', { params: { playlistUuid: o.uuid } });
                                    t.reset(), a.modal.isOpened && a.modal.close(), l.push(e);
                                    return;
                                }
                                t.reset(), i((0, r.jsx)(t3, {}), n);
                            });
                        })(p),
                        h = (0, eK.c)((e) => {
                            g(e);
                        }),
                        A = (0, eK.c)(() => {
                            g('');
                        }),
                        C = (0, eK.c)((e) => {
                            e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
                        }),
                        x = (0, eK.c)(async () => {
                            let e = c.account.data.uid;
                            e && (await u.getData({ userId: e, page: 0, pageSize: 20 }));
                        });
                    return (0, r.jsxs)(tl.W1, {
                        offsetOptions: 3,
                        isMobile: l,
                        className: a,
                        label: _({ id: 'interface-actions.add-tracks-to-playlist' }),
                        icon: (0, r.jsx)(eG.I, { variant: 'addToPlaylist', size: 'xxs' }),
                        disabled: v,
                        listClassName: t0().menuContent,
                        onShow: x,
                        containerProps: { 'data-test-id': d.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST },
                        'data-test-id': d.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON,
                        children: [
                            (0, r.jsx)('div', {
                                className: t0().searchSection,
                                children: (0, r.jsx)(tZ.D, {
                                    className: t0().searchField,
                                    initialValue: y,
                                    correctedValue: null,
                                    placeholder: _({ id: 'search.playlist-placeholder' }),
                                    onChange: h,
                                    resetButtonAriaLabel: _({ id: 'interface-actions.reset-search-input' }),
                                    onResetClick: A,
                                    shouldPreventAutoFocusScroll: !0,
                                    innerInputProps: { onKeyDown: C, 'data-test-id': d.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_SEARCH_INPUT },
                                }),
                            }),
                            (0, r.jsx)(tl.Dr, {
                                onClick: f,
                                icon: (0, r.jsx)(eG.I, { variant: 'add', size: 'xxs' }),
                                className: t0().createPlaylistButton,
                                'data-test-id': d.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_CREATE_BUTTON,
                                children: (0, r.jsx)(eC.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, r.jsx)(eW.A, { id: 'playlist-actions.create-playlist' }),
                                }),
                            }),
                            (0, r.jsx)(tQ.c, { className: t0().menuDivider }),
                            (0, r.jsx)(ae, { searchQuery: y, sourcePlaylistUuid: i }),
                        ],
                    });
                });
            var aa = a(99311),
                ar = a(45333),
                ai = a.n(ar);
            let al = (0, l.PA)((e) => {
                let { className: t, playlist: a } = e,
                    { notify: l } = (0, es.l)(),
                    { formatMessage: n } = (0, o.A)(),
                    c = (0, s.useCallback)(async () => {
                        (await a.toggleVisibility()) === e5.F.ERROR &&
                            l((0, r.jsx)(eo.h, { error: n({ id: 'playlist-errors.failed-to-change-privacy-settings' }) }), { containerId: en.u.ERROR });
                    }, [n, l, a]);
                return (0, r.jsxs)(tl.Dr, {
                    className: (0, i.$)(ai().root, t),
                    onClick: c,
                    icon: (0, r.jsx)(eG.I, { variant: 'eye_crossed', size: 'xxs' }),
                    'data-test-id': d.S7.CONTEXT_MENU_PLAYLIST_PRIVACY_BUTTON,
                    role: 'menuitemcheckbox',
                    'aria-checked': !a.isPublic,
                    isSubMenu: !0,
                    isBlock: !0,
                    children: [
                        (0, r.jsx)('span', { className: ai().caption, children: (0, r.jsx)(eW.A, { id: 'playlist-actions.privacy' }) }),
                        (0, r.jsx)(aa.l, { isChecked: !a.isPublic, ariaLabel: n({ id: 'playlist-actions.privacy-label' }), tabIndex: -1 }),
                    ],
                });
            });
            var an = a(9480),
                as = a(20472),
                ao = a(27120),
                ac = a(43564),
                ad = a(44128),
                au = a(56958),
                am = a(95134),
                ap = a(51675),
                a_ = a(48027),
                ay = a(89384),
                ag = a(97647),
                av = a(58237),
                af = a(56367),
                ah = a(4914),
                aA = a(83755),
                aC = a(25160);
            let ax = (0, l.PA)((e) => {
                    var t, a, i, l;
                    let { playlist: u, onOpenChange: m, open: p, wrapperClassName: _, ...y } = e,
                        { shouldShowBuySubscriptionModal: g, showBuySubscriptionModal: f } = (0, eJ.q)(),
                        {
                            settings: { isMobile: h },
                            trailer: A,
                            playlist: {
                                filters: { activeFilter: C, analyticsParamsActiveFilterIndex: x },
                                items: P,
                            },
                            user: E,
                            experiments: b,
                            sonataState: { entityMeta: L },
                        } = (0, T.g)(),
                        S = (0, ad.e)(),
                        k = (0, eq.K)(u),
                        I = b.checkExperiment(ex.z.WebEditorsFeatures, 'on'),
                        D = (0, eX.A)(u),
                        N = (0, eZ.F)(),
                        j = ''.concat(eu.U.PLAYLIST, '-').concat(u.uid, '_').concat(u.kind),
                        B = u.canUserChange,
                        { utmLink: R } = (0, e_.f)({
                            pageId: v._Q.PLAYLIST,
                            blockId: eu.U.PLAYLIST,
                            contextType: ec.K.Playlist,
                            contextId: u.uuid,
                            pageEntityId: u.uuid,
                        }),
                        F = (0, e$.P)(),
                        O = u.isOwnFavouritePlaylist && b.checkExperiment(ex.z.WebNextToggleFavouritePlaylistVisibility, 'on'),
                        w = b.checkExperiment(ex.z.WebNextUseWaveQueue, 'on'),
                        U = null == S ? void 0 : S.state.currentContext.value,
                        M = !!((0, tG.S)(U) || ((0, tV.i)(U) && !w)),
                        H = L && !M,
                        Y = (0, au.i)({ playlistId: u.id, filter: C }),
                        z = (0, eK.c)((e) =>
                            e.data
                                ? !e.data.isRemoved && e.data.isAvailable
                                    ? e.data.entityId
                                    : void 0
                                : null !== e.albumId
                                  ? ''.concat(e.id, ':').concat(e.albumId)
                                  : String(e.id),
                        ),
                        W = (0, tq.m)(P, an.N.NEXT, Y, { entityVariant: ag.c.PLAYLIST, entityTitle: u.title, coverUri: u.coverUri }, z),
                        K = (0, tq.m)(P, an.N.LAST, Y, { entityVariant: ag.c.PLAYLIST, entityTitle: u.title, coverUri: u.coverUri }, z),
                        { notify: G } = (0, es.l)(),
                        { formatMessage: V } = (0, o.A)(),
                        q = (0, n.useRouter)(),
                        X = ((e) => {
                            let t = (0, tf.st)(),
                                a = (0, th.U)(),
                                { hash: r } = (0, tf.gf)();
                            return (0, s.useCallback)(() => {
                                if (!t || !e.objectId) return;
                                let i = {
                                        hash: r,
                                        pageId: tA.W[v._Q.PLAYLIST],
                                        mainObjectType: c.ky.Wave,
                                        mainObjectId: e.objectId,
                                        tabId: e.tabId || '',
                                        tabPos: e.tabPos || 1,
                                    },
                                    l = (0, c.Fx)({ params: i, logger: a, context: 'useSendEventOnPlaylistWaveStarted' });
                                l && (0, c.e7)(t.evgenInstance, l);
                            }, [t, r, a, e]);
                        })((0, s.useMemo)(() => ({ objectId: u.seeds[0], tabId: C, tabPos: x }), [u.seeds, C, x])),
                        { shareLink: $, pathname: Q } = (0, ay.b)('/playlists/:playlistUuid', { params: { playlistUuid: u.uuid } }),
                        Z = (0, tX.A)({ entityVariant: am.D.PLAYLIST, urlParams: { id: u.uid, kind: u.kind } }),
                        { isPlaying: J, togglePlay: ee } = (0, ac.B)({
                            seeds: null != (l = u.seeds) ? l : [],
                            pageIdForFrom: v._Q.RADIO,
                            blockIdForFrom: j,
                            parentContextId: u.uuid,
                        }),
                        et = (0, eK.c)(() => {
                            if (g && E.isAuthorized) return void f();
                            !F() && (J || (ee(), X()));
                        }),
                        ea = (0, eK.c)(() => {
                            if (g) return void f();
                            F() || (A.setUtmLink(R), A.openPlaylistTrailer(u.id), N(c.ky.Playlist, u.id));
                        }),
                        er = (0, eK.c)(async () => {
                            if ((await u.deletePlaylist()) === e5.F.ERROR)
                                return void G((0, r.jsx)(eo.h, { error: V({ id: 'playlist-errors.failed-to-remove-playlist' }) }), { containerId: en.u.ERROR });
                            q.push(as.Z.collection.href);
                        });
                    (0, ao.N)(p);
                    let ei = (u.isPublic || u.isFavouritePlaylist) && u.isAvailable,
                        el = {
                            variant: ap.Y.PLAYLIST,
                            id: u.kind,
                            title: u.title,
                            path: Q,
                            playlistOwnerName: null == (t = u.owner) ? void 0 : t.name,
                            playlistOwnerLogin: null == (a = u.owner) ? void 0 : a.login,
                        };
                    return (0, r.jsxs)(tl.W1, {
                        isMobile: h,
                        offsetOptions: 10,
                        open: p,
                        onOpenChange: m,
                        ariaLabel: V({ id: 'interface-actions.context-menu' }),
                        wrapperClassName: _,
                        ...y,
                        containerProps: { 'data-test-id': d.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                        children: [
                            I && (0, r.jsx)(t$.d, { entityVariant: am.D.PLAYLIST, adminUrl: u.isFavouritePlaylist ? void 0 : Z, withPlaylistPageFeatures: !0 }),
                            (0, r.jsx)(at, { sourcePlaylistUuid: u.uuid }),
                            !h && (0, r.jsx)(af.L, { onClick: D, isPinned: u.isPinned }),
                            !u.isFavouritePlaylist && (0, r.jsx)(av.T, { onClick: k, isLiked: u.isLiked, disabled: !E.isAuthorized }),
                            (null == (i = u.trailer) ? void 0 : i.isAvailable) && (0, r.jsx)(aA.N, { onClick: ea }),
                            (0, r.jsx)(aC.C, { disabled: !u.isAvailable, onClick: et, variant: a_.I.PLAYLIST }),
                            H &&
                                (0, r.jsx)(tl.Dr, {
                                    onClick: W,
                                    icon: (0, r.jsx)(eG.I, { variant: 'playNext', size: 'xxs' }),
                                    disabled: !E.isAuthorized,
                                    'data-test-id': d.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                    children: (0, r.jsx)(eW.A, { id: 'play-queue.play-next' }),
                                }),
                            H &&
                                (0, r.jsx)(tl.Dr, {
                                    onClick: K,
                                    icon: (0, r.jsx)(eG.I, { variant: 'playLast', size: 'xxs' }),
                                    disabled: !E.isAuthorized,
                                    'data-test-id': d.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                    children: (0, r.jsx)(eW.A, { id: 'play-queue.play-last' }),
                                }),
                            (0, r.jsx)(ah.H, { disabled: !ei, shareLink: $, entityMeta: el }),
                            B &&
                                (0, r.jsx)(tl.Dr, {
                                    icon: (0, r.jsx)(eG.I, { variant: 'bucket', size: 'xxs' }),
                                    onClick: er,
                                    children: (0, r.jsx)(eW.A, { id: 'playlist-actions.remove-playlist' }),
                                }),
                            (B || O) && (0, r.jsx)(al, { playlist: u }),
                        ],
                    });
                }),
                aP = (0, l.PA)((e) => {
                    var t, a;
                    let { playlist: l, isDisabled: u, className: m, forwardRef: p } = e,
                        { shouldShowBuySubscriptionModal: _, showBuySubscriptionModal: y } = (0, eJ.q)(),
                        { from: g, utmLink: f } = (0, e_.f)({
                            pageId: v._Q.PLAYLIST,
                            blockId: eu.U.PLAYLIST,
                            contextType: ec.K.Playlist,
                            contextId: l.uuid,
                            pageEntityId: l.uuid,
                        }),
                        {
                            settings: { isMobile: h },
                            sonataState: A,
                            trailer: C,
                            playlist: {
                                filters: { activeFilter: x, activeFilterName: P },
                                enableVariousAutoFlow: E,
                                trackIds: b,
                                isRewind2024Playlist: L,
                                setShouldShowTrailerOnboarding: S,
                            },
                            user: k,
                            paywall: { modal: I },
                        } = (0, T.g)(),
                        D = h && !k.isAuthorized,
                        N = h && !k.hasPlus && k.isAuthorized,
                        j = D || N,
                        B = (0, e0.N)(),
                        { formatMessage: R, formatNumber: F } = (0, o.A)(),
                        [O, w] = (0, s.useState)(!1),
                        U = (0, eq.K)(l),
                        M = (0, eX.A)(l),
                        H = (0, eZ.F)(),
                        Y = !h,
                        z = (0, s.useRef)(null),
                        W = (0, eQ.f)(),
                        K = (0, e$.P)(),
                        { controlSize: G, iconSize: V } = (0, te.q)(h),
                        { notify: q } = (0, es.l)(),
                        X = l.canUserChange && !h,
                        $ = (0, n.useSearchParams)(),
                        Q = (0, s.useMemo)(() => {
                            if (L && l.personalColor) return (0, e1.R)(l.personalColor);
                        }, [L, l.personalColor]),
                        Z = (0, eK.c)(() => {
                            var e;
                            null == (e = z.current) || e.focus();
                        });
                    (0, s.useEffect)(() => {
                        W();
                    }, [W]);
                    let J = (0, eK.c)(async (e) => {
                            (await l.changeTitle(e)) === e5.F.ERROR &&
                                q((0, r.jsx)(eo.h, { error: R({ id: 'playlist-errors.failed-to-change-title' }) }), { containerId: en.u.ERROR });
                        }),
                        { isPlaying: ee, togglePlay: et } = (0, e2.D)({
                            playContextParams: {
                                contextData: {
                                    type: ec.K.Playlist,
                                    meta: { id: l.id, uuid: l.uuid },
                                    filter: x,
                                    filterName: P,
                                    enableVariousAutoFlow: E,
                                    from: g,
                                    utmLink: f,
                                },
                                loadContextMeta: !0,
                                entitiesData: A.unloadedEntitiesDataFromModels,
                            },
                        }),
                        [ea, er] = (0, s.useState)(ee),
                        ei = (0, eK.c)(() => {
                            if (!K()) {
                                if (_) return void y();
                                if (B) return void I.open();
                                et(), A.setPlaylistFilter(x);
                            }
                        });
                    (0, s.useEffect)(() => {
                        ee && (A.playlistFilter === x || ((0, ez.A)(A.playlistFilter) && (0, ez.A)(x))) ? er(!0) : er(!1);
                    }, [ee, A.playlistFilter, x]);
                    let el = (0, s.useMemo)(() => {
                            if (l.actualLikesCount && l.actualLikesCount > 0)
                                return (0, r.jsx)(eC.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 's',
                                    weight: 'medium',
                                    children: l.actualLikesCount && F(l.actualLikesCount),
                                });
                        }, [l.actualLikesCount, F]),
                        ed = (0, s.useMemo)(
                            () =>
                                h
                                    ? (0, r.jsx)(e7.D, {
                                          ref: z,
                                          className: (0, i.$)(tr().playControl, { [tr().playControl_withLogin]: j }),
                                          color: j ? 'secondary' : 'primary',
                                          buttonVariant: 'default',
                                          iconSize: j ? V : 'xxl',
                                          size: j ? G : void 0,
                                          isPlaying: ea,
                                          variant: j ? 'default' : 'filled',
                                          onClick: ei,
                                          disabled: u,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                      })
                                    : (0, r.jsx)(e7.D, {
                                          ref: z,
                                          className: tr().playControl,
                                          withRipple: !0,
                                          buttonVariant: 'default',
                                          radius: 'xxxl',
                                          size: 's',
                                          color: 'primary',
                                          iconSize: 'xxs',
                                          isPlaying: ea,
                                          onClick: ei,
                                          disabled: u,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                          children: (0, r.jsx)(eW.A, { id: 'player-actions.listen' }),
                                      }),
                            [u, h, ei, ea, j, V, G],
                        ),
                        em = (0, eK.c)(() => {
                            K() || (C.setUtmLink(f), C.openPlaylistTrailer(l.id), H(c.ky.Playlist, l.id));
                        }),
                        ey = (0, eK.c)(() => {
                            if (_) return void y();
                            em();
                        });
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = l.trailer) ? void 0 : e.isAvailable) && 'true' === $.get(e3.K.OPEN_TRAILER) && em();
                    }, [L, l.personalColor, em, $, S, null == (t = l.trailer) ? void 0 : t.isAvailable]);
                    let eg = (0, s.useMemo)(() => {
                            var e;
                            return (null == (e = l.trailer) ? void 0 : e.isAvailable) && !h
                                ? (0, r.jsx)(e9.L, {
                                      children: (0, r.jsx)(e8.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: tg().trailerControl,
                                          onClick: ey,
                                          disabled: !l.isAvailable,
                                          style: Q,
                                          children: (0, r.jsx)(eW.A, { id: 'entity-names.trailer' }),
                                      }),
                                  })
                                : null;
                        }, [ey, h, null == (a = l.trailer) ? void 0 : a.isAvailable, l.isAvailable, Q]),
                        ev = (0, s.useMemo)(() => {
                            if (l.canUserChange) return (0, r.jsx)('div', { className: tg().ugcControls, children: (0, r.jsx)(tK, { playlist: l }) });
                        }, [l]),
                        ef = (0, s.useMemo)(() => R({ id: 'entity-names.likes-count-description' }, { count: l.actualLikesCount }), [R, l.actualLikesCount]),
                        eh = (0, ej.L)(() => {
                            if (!l.isFavouritePlaylist)
                                return h
                                    ? (0, r.jsx)(e4.c, {
                                          className: tg().likeControl,
                                          isLiked: l.isLiked,
                                          onClick: U,
                                          variant: 'default',
                                          size: G,
                                          iconSize: V,
                                          iconClassName: tg().likeIcon,
                                          disabled: !k.isAuthorized,
                                      })
                                    : (0, r.jsx)(e4.c, {
                                          className: tg().likeControl,
                                          isLiked: l.isLiked,
                                          onClick: U,
                                          withRipple: !0,
                                          iconSize: V,
                                          size: G,
                                          variant: 'default',
                                          'aria-label': ef,
                                          iconClassName: tg().likeIcon,
                                          disabled: !k.isAuthorized,
                                          children: el,
                                      });
                        }),
                        eA = k.hasPlus && !h, // && o.isFavouritePlaylist && o.isOwnPlaylist Add download button to all playlists,
                        ex = (0, s.useMemo)(
                            () =>
                                (0, r.jsxs)('div', {
                                    className: tg().controls,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: tg().mainControls,
                                            children: [
                                                (0, r.jsx)(ep.B, {
                                                    objectType: c.ky.Playlist,
                                                    objectId: String(l.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: ed,
                                                }),
                                                (0, r.jsx)(tP, { playlistUuid: l.uuid }),
                                                eg,
                                                (0, r.jsx)(ep.B, {
                                                    objectType: c.ky.Playlist,
                                                    objectId: String(l.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: eh,
                                                }),
                                                Y && (0, r.jsx)(e6.O, { onClick: M, isPinned: l.isPinned, className: tg().pinControl }),
                                                (0, r.jsx)(ax, {
                                                    playlist: l,
                                                    open: O,
                                                    onOpenChange: w,
                                                    wrapperClassName: tg().menuControl,
                                                    size: G,
                                                    icon: (0, r.jsx)(eG.I, { size: V, variant: 'more' }),
                                                    'data-test-id': d.e8.pageHeader.PLAYLIST_HEADER_CONTEXT_MENU_BUTTON,
                                                }),
                                                eA && (0, r.jsx)(t_, { trackIds: b, className: tg().downloadControl, onRemove: Z }),
                                            ],
                                        }),
                                        ev,
                                    ],
                                }),
                            [ed, eg, eh, M, l, eA, b, O, G, V, ev, Y, Z],
                        );
                    return (0, r.jsx)('div', {
                        className: tg().root,
                        children: (0, r.jsx)(tt.k, {
                            headingVariant: 'h1',
                            ref: p,
                            className: m,
                            controls: ex,
                            meta: (0, r.jsx)(tY, { playlist: l }),
                            entityName: R({ id: 'entity-names.playlist' }),
                            title: l.title,
                            canChangeTitle: X,
                            maxTitleLength: eV.k,
                            onTitleChange: J,
                            cover: (0, r.jsx)(tD, { playlist: l }),
                            showMobileLoginButton: D,
                            showMobileSubscriptionButton: N,
                        }),
                    });
                }),
                aE = (0, s.forwardRef)((e, t) => (0, r.jsx)(aP, { forwardRef: t, ...e }));
            var ab = a(62060),
                aT = a(16915),
                aL = a.n(aT);
            let aS = (e) => {
                let { className: t, isEmptySearch: a } = e,
                    l = (0, s.useMemo)(
                        () =>
                            a ? (0, r.jsx)(eW.A, { id: 'search-results.not-found-title' }) : (0, r.jsx)(eW.A, { id: 'error-messages.empty-collection-playlist-title' }),
                        [a],
                    ),
                    n = (0, s.useMemo)(
                        () =>
                            a
                                ? (0, r.jsx)(eW.A, { id: 'search-results.not-found-description' })
                                : (0, r.jsx)(eW.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [a],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(aL().root, t),
                    'data-test-id': d.Kq.playlist.PLAYLIST_EMPTY_BLOCK,
                    children: [
                        (0, r.jsx)('div', {
                            className: aL().iconBackground,
                            children: (0, r.jsx)(eG.I, { variant: 'search', size: 'l', className: aL().icon, 'data-test-id': d.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON }),
                        }),
                        (0, r.jsx)(eC.DZ, { variant: 'h3', size: 'xs', className: aL().title, 'data-test-id': d.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE, children: l }),
                        (0, r.jsx)(eC.HL, { variant: 'span', size: 'l', className: aL().subtitle, 'data-test-id': d.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT, children: n }),
                    ],
                });
            };
            var ak = a(58139),
                aI = a(40229),
                aD = a(68912),
                aN = a(92102),
                aj = a(99649),
                aB = a.n(aj);
            let aR = (0, l.PA)((e) => {
                let { className: t, track: a, playContextParams: i, onClick: l } = e,
                    { formatMessage: n } = (0, o.A)(),
                    {
                        settings: { isMobile: c },
                    } = (0, T.g)(),
                    u = (0, e2.D)({ playContextParams: i, entityId: a.entityId }),
                    m = (0, s.useCallback)(
                        (e) =>
                            (0, r.jsx)(aI.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: aB().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [a],
                    ),
                    p = (0, s.useCallback)(
                        (e) => {
                            e.stopPropagation(), null == l || l(a);
                        },
                        [a, l],
                    ),
                    _ = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)('div', {
                                className: aB().controls,
                                children: (0, r.jsx)(ti.$, {
                                    className: aB().button,
                                    variant: 'text',
                                    size: 'xs',
                                    radius: 'xxxl',
                                    'aria-label': n({ id: 'interface-actions.add-track-to-playlist' }),
                                    onClick: p,
                                    icon: (0, r.jsx)(eG.I, { size: 'xxs', variant: 'add' }),
                                }),
                            }),
                        [n, p],
                    );
                return (0, r.jsx)(aN.C, {
                    className: t,
                    track: a,
                    meta: (0, r.jsx)(aD.j, { withArtistLink: !c, track: a }),
                    playButtonCellRender: m,
                    controls: _,
                    ...u,
                    'data-test-id': d.Kq.track.TRACK_PLAYLIST_ADDITION,
                });
            });
            var aF = a(41190);
            let aO = (e) => {
                let { item: t, from: a, tracks: r } = e,
                    i = r
                        .map((e) => {
                            if (e) return (0, aF.$)(e);
                        })
                        .filter((e) => e);
                return {
                    contextData: { type: ec.K.Various, meta: { id: t.entityId }, from: a },
                    queueParams: { entityId: t.entityId },
                    loadContextMeta: !0,
                    entitiesData: i,
                };
            };
            var aw = a(15027),
                aU = a.n(aw);
            let aM = (0, l.PA)((e) => {
                var t, a, l, n, u, m, p, _, y;
                let { autoFocus: g, className: f } = e,
                    { formatMessage: h } = (0, o.A)(),
                    { playlist: A } = (0, T.g)(),
                    { search: C } = A,
                    x = (0, ak.R)(),
                    P = (0, s.useRef)(0),
                    E = (null == (t = A.meta) ? void 0 : t.isOwnPlaylist) ? v._Q.OWN_PLAYLISTS : v._Q.PLAYLIST,
                    { from: b } = (0, e_.f)({ pageId: E, blockId: eu.U.FILTERED }),
                    { from: L } = (0, e_.f)({ pageId: E, blockId: eu.U.SUGGESTED }),
                    [S, k] = (0, s.useState)(!1);
                (0, s.useEffect)(
                    () => () => {
                        window.clearTimeout(P.current);
                    },
                    [],
                );
                let I = (0, s.useMemo)(
                        () =>
                            (0, ab.A)((e) => {
                                let t = e.trim();
                                C.setText(t),
                                    t && (null == A ? void 0 : A.meta) && (C.reset(), C.getTracks({ uid: A.meta.uid, kind: A.meta.kind })),
                                    (t && 0 !== t.length) || (S && (k(!1), A.refreshTracks()), C.setIdleState());
                            }, 100),
                        [C, A, S],
                    ),
                    D = (0, s.useCallback)(
                        async (e) => {
                            if (A.meta) {
                                C.setAdditionTrackAnimation(e.id);
                                let t = x({ track: e, playlist: A.meta, withSuccessNotification: !1, withPageRefresh: !1 }),
                                    a = new Promise((e) => {
                                        P.current = window.setTimeout(e, 300);
                                    }),
                                    [r] = await Promise.all([t, a]);
                                r === er.Y.OK ? (C.replaceAdditionTrackInProggress(), k(!0)) : C.resetAdditionTrackAnimation();
                            }
                        },
                        [x, A.meta, C],
                    ),
                    N = (0, s.useMemo)(() => {
                        var e;
                        return C.isLoading
                            ? (0, r.jsx)(eg.D, { isActive: !0, className: aU().shimmerItem, variant: ey.X.PLAYLIST })
                            : null == (e = C.playlistTracks)
                              ? void 0
                              : e.map((e, t) => {
                                    var a, l;
                                    return e
                                        ? e.isTrackNonMusic
                                            ? (0, r.jsx)(
                                                  ep.B,
                                                  {
                                                      objectType: c.ky.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (l = C.playlistTracks) ? void 0 : l.length,
                                                      children: (0, r.jsx)(eA.K, {
                                                          withPodcastName: !0,
                                                          track: e,
                                                          playContextParams: aO({ item: e, from: b, tracks: C.playlistTracks }),
                                                          className: (0, i.$)(aU().track, { [aU().appearingTrack]: e.id === C.additionTrackInProggress }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                            : (0, r.jsx)(
                                                  ep.B,
                                                  {
                                                      objectType: c.ky.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (a = C.playlistTracks) ? void 0 : a.length,
                                                      children: (0, r.jsx)(eL.K, {
                                                          className: (0, i.$)(aU().track, { [aU().appearingTrack]: e.id === C.additionTrackInProggress }),
                                                          track: e,
                                                          playContextParams: aO({ item: e, from: b, tracks: C.playlistTracks }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                        : null;
                                });
                    }, [C.isLoading, C.playlistTracks, C.additionTrackInProggress, b]),
                    j = (0, s.useMemo)(() => {
                        var e, t;
                        if (null == (e = A.meta) ? void 0 : e.canUserChange)
                            return C.isLoading
                                ? (0, r.jsx)(eg.D, { isActive: !0, className: aU().shimmerItem, variant: ey.X.PLAYLIST })
                                : null == (t = C.suggestedTracks)
                                  ? void 0
                                  : t.map((e) =>
                                        e
                                            ? (0, r.jsx)(
                                                  aR,
                                                  {
                                                      track: e,
                                                      className: (0, i.$)({ [aU().disappearingTrack]: e.id === C.additionTrackInProggress }),
                                                      playContextParams: ((e, t) => ({
                                                          contextData: { type: ec.K.Various, meta: { id: e.entityId }, from: t },
                                                          queueParams: { index: 0, entityId: e.entityId },
                                                          loadContextMeta: !0,
                                                      }))(e, L),
                                                      onClick: D,
                                                  },
                                                  e.id,
                                              )
                                            : null,
                                    );
                    }, [null == (a = A.meta) ? void 0 : a.canUserChange, C.isLoading, C.suggestedTracks, C.additionTrackInProggress, L, D]),
                    B = (0, s.useMemo)(() => {
                        var e, t, a;
                        let i = !(null == (e = C.suggestedTracks) ? void 0 : e.length) || !(null == (t = A.meta) ? void 0 : t.canUserChange);
                        return (null == (a = C.playlistTrackIds) ? void 0 : a.length) || !i || C.isLoading
                            ? null
                            : (0, r.jsx)(aS, { className: aU().emptyBlockContainer, isEmptySearch: !0 });
                    }, [
                        null == (l = C.suggestedTracks) ? void 0 : l.length,
                        null == (n = C.playlistTrackIds) ? void 0 : n.length,
                        C.isLoading,
                        null == (u = A.meta) ? void 0 : u.canUserChange,
                    ]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(tZ.D, {
                            className: (0, i.$)(aU().root, f),
                            autoFocus: g,
                            initialValue: C.text,
                            correctedValue: null,
                            placeholder: h({ id: 'search.track-placeholder' }),
                            onChange: I,
                            resetButtonAriaLabel: h({ id: 'interface-actions.reset-search-input' }),
                            onResetClick: C.reset,
                            innerInputProps: { 'data-test-id': d.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT },
                            resetButtonProps: { 'data-test-id': d.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_RESET_BUTTON },
                            searchIconProps: { 'data-test-id': d.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_ICON },
                            shouldPreventAutoFocusScroll: !0,
                        }),
                        C.text &&
                            (0, r.jsxs)('div', {
                                className: aU().content,
                                children: [
                                    B,
                                    (0, r.jsx)(em.F, {
                                        blockType: c.LA.Tracks,
                                        blockId: c.LA.Tracks,
                                        blockPosX: 1,
                                        blockPosY: 2,
                                        mainObjectId: String(null == A || null == (m = A.meta) ? void 0 : m.uuid),
                                        mainObjectType: c.ky.Playlist,
                                        children: N,
                                    }),
                                    Number(null == (p = C.suggestedTracks) ? void 0 : p.length) > 0 &&
                                        (null == (_ = A.meta) ? void 0 : _.canUserChange) &&
                                        (0, r.jsx)(
                                            eC.DZ,
                                            {
                                                variant: 'h3',
                                                className: (0, i.$)(aU().catalog, { [aU().catalog_withTracks]: null == (y = C.playlistTrackIds) ? void 0 : y.length }),
                                                children: (0, r.jsx)(eW.A, { id: 'search.search-catalog' }),
                                            },
                                            'search.search-catalog-caption',
                                        ),
                                    j,
                                ],
                            }),
                    ],
                });
            });
            var aH = a(26749),
                aY = a(15299),
                az = a(85377);
            let aW = (e) => {
                let { children: t, child: a, className: i } = e,
                    { setChildElement: l, setChild: n } = (0, s.useContext)(az.B),
                    o = (0, s.useRef)(null);
                return (
                    (0, s.useEffect)(() => {
                        (null == o ? void 0 : o.current) && l(o), a && n(a);
                    }, [o, a, l, n]),
                    (0, s.useEffect)(
                        () => () => {
                            n(null);
                        },
                        [n],
                    ),
                    (0, r.jsx)('div', { ref: o, className: i, children: t })
                );
            };
            var aK = a(32369),
                aG = a(19875),
                aV = a(19088),
                aq = a.n(aV);
            let aX = (0, l.PA)((e) => {
                var t;
                let { playlist: a } = e,
                    { setPlaylistStickyFiltersRef: i, setPlaylistStaticFiltersRef: l } = (0, E.g)(),
                    n = (0, aY.zb)(a.filters.activeFilterIndex),
                    o = (0, s.useRef)(null),
                    c = (0, aG.$)();
                (0, s.useEffect)(() => {
                    a.isResolved && a.filters.getFilters();
                }, [a, a.loadingState]);
                let d = (0, eK.c)((e) => {
                        var t;
                        if (!n.onTabChange || e === n.value) return;
                        setTimeout(() => {
                            var t, a, r;
                            null == (r = o.current) || null == (a = r.children[e]) || null == (t = a.focus) || t.call(a);
                        }),
                            n.onTabChange(e);
                        let r = null == (t = a.filters.items) ? void 0 : t[e];
                        r && (a.filters.handleFilterClick(r), c({ tabId: r.id, tabPos: e + 1 }));
                    }),
                    u = null == (t = a.filters.items) ? void 0 : t.map((e) => ({ id: e.id, name: e.name }));
                return (0, r.jsx)(aW, {
                    child: (0, r.jsx)(aK.A, { className: aq().stickyFilters, tabsState: n, handleFilterClick: d, ref: i, isSticky: !0, items: u }),
                    children: (0, r.jsx)(aK.A, {
                        className: aq().staticFilters,
                        tabsState: n,
                        handleFilterClick: d,
                        ref: l,
                        carouselClassName: aq().staticFiltersCarousel,
                        items: u,
                    }),
                });
            });
            var a$ = a(28015),
                aQ = a(80792),
                aZ = a(3237);
            let aJ = (0, l.PA)((e) => {
                let { className: t, creativeClassName: a, gradientClassName: i } = e,
                    {
                        advertBanners: {
                            banners: { brandedPlaylistBanner: l },
                        },
                    } = (0, T.g)(),
                    { formatMessage: n } = (0, o.A)(),
                    c = (0, eK.c)(() => {
                        l.setType(aH.h.BRANDING);
                    });
                return (
                    (0, s.useEffect)(
                        () => () => {
                            l.reset();
                        },
                        [l],
                    ),
                    (0, r.jsxs)('div', {
                        className: t,
                        'aria-label': n({ id: 'advert.banner' }),
                        role: 'banner',
                        children: [
                            (0, r.jsx)(aQ.N, {
                                className: i,
                                ownerId: a$.P,
                                containerId: 'adfox_173998931315812570',
                                params: aZ.w_,
                                onLoad: c,
                                onError: l.toggleHasErrorTrue,
                                onNoAds: l.toggleNoAdsTrue,
                            }),
                            (0, r.jsx)(aQ.N, {
                                className: a,
                                ownerId: a$.P,
                                containerId: 'adfox_174043316511852570',
                                params: aZ.RA,
                                onLoad: c,
                                onError: l.toggleHasErrorTrue,
                                onNoAds: l.toggleNoAdsTrue,
                            }),
                        ],
                    })
                );
            });
            var a0 = a(22266),
                a1 = a(62336),
                a2 = a.n(a1);
            let a5 = (0, l.PA)(() => {
                var e;
                let {
                        advert: t,
                        advertBanners: {
                            banners: { brandedPlaylistBanner: a },
                        },
                    } = (0, T.g)(),
                    l = (0, p.Q)(),
                    n = a.isVisible && l.isEnabled;
                return t.isAdvertDisabled(a0.f.PLAYLIST_BRANDING)
                    ? null
                    : (0, r.jsx)('div', {
                          className: (0, i.$)({ [a2().brandedPlaylistBannerWrapper]: n }),
                          style: null == (e = l.data) ? void 0 : e.style,
                          children: (0, r.jsx)(aJ, { creativeClassName: a2().creative }),
                      });
            });
            var a3 = a(71062),
                a4 = a(1444),
                a6 = a(97409),
                a7 = a.n(a6);
            let a8 = (0, l.PA)((e) => {
                    var t;
                    let { className: a, track: l } = e,
                        { formatMessage: n } = (0, o.A)(),
                        c = null == (t = l.file) ? void 0 : t.name,
                        u = (0, s.useCallback)(() => {
                            l.abortUpload();
                        }, [l]),
                        m = (0, s.useCallback)(() => {
                            l.retryUpload();
                        }, [l]),
                        p = (0, s.useMemo)(
                            () =>
                                (0, r.jsx)(ti.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': n({ id: 'ugc.cancel-upload' }),
                                    color: 'primary',
                                    onClick: u,
                                    'data-test-id': d.Kq.track.UGC_TRACK_CANCEL_UPLOAD_BUTTON,
                                    children: (0, r.jsx)(eC.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: a7().button,
                                        children: (0, r.jsx)(eW.A, { id: 'ugc.cancel-upload' }),
                                    }),
                                }),
                            [u, n],
                        ),
                        _ = (0, s.useMemo)(
                            () =>
                                (0, r.jsx)(ti.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': n({ id: 'ugc.repeat-upload' }),
                                    color: 'primary',
                                    onClick: m,
                                    'data-test-id': d.Kq.track.UGC_TRACK_RETRY_UPLOAD_BUTTON,
                                    children: (0, r.jsx)(eC.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: a7().button,
                                        children: (0, r.jsx)(eW.A, { id: 'ugc.repeat-upload' }),
                                    }),
                                }),
                            [n, m],
                        ),
                        y = (0, s.useMemo)(() => {
                            switch (l.loadingState) {
                                case a3.p.IDLE:
                                case a3.p.PREPARE:
                                case a3.p.UPLOADING:
                                    return p;
                                case a3.p.REJECT:
                                    return _;
                                default:
                                    return null;
                            }
                        }, [p, _, l.loadingState]),
                        g = (0, s.useMemo)(() => {
                            switch (l.loadingState) {
                                case a3.p.IDLE:
                                case a3.p.PREPARE:
                                case a3.p.UPLOADING:
                                    return (0, r.jsx)(eC.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: a7().status,
                                        'data-test-id': d.Kq.track.UGS_TRACK_UPLOADING_PENDING_STATUS_TEXT,
                                        children: (0, r.jsx)(eW.A, { id: 'ugc.track-uploading-pending-status' }),
                                    });
                                case a3.p.PROCESSING:
                                case a3.p.RESOLVE:
                                    return (0, r.jsx)(eC.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: a7().status,
                                        children: (0, r.jsx)(eW.A, { id: 'ugc.track-uploading-processing-status' }),
                                    });
                                case a3.p.REJECT:
                                    return (0, r.jsx)(eC.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: a7().status,
                                        'data-test-id': d.Kq.track.UGC_TRACK_UPLOADING_ERROR_STATUS_TEXT,
                                        children: (0, r.jsx)(eW.A, { id: 'ugc.track-uploading-error-status' }),
                                    });
                                default:
                                    return null;
                            }
                        }, [l.loadingState]);
                    return (0, r.jsxs)(a4.C, {
                        'aria-label': c,
                        className: (0, i.$)(a7().root, a7().card, a7().important, a),
                        'data-test-id': d.Kq.track.UGC_TRACK,
                        children: [
                            (0, r.jsx)(aI.q, { title: c, radius: 'xs', className: a7().playButton }),
                            (0, r.jsxs)('div', {
                                className: a7().meta,
                                children: [
                                    (0, r.jsx)(eC.HL, { variant: 'div', size: 'm', className: a7().title, 'data-test-id': d.Kq.track.UGC_TRACK_TITLE, children: c }),
                                    g,
                                ],
                            }),
                            (0, r.jsx)('div', { className: a7().controls, children: y }),
                        ],
                    });
                }),
                a9 = (0, l.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        { ugcUploadCenter: i, playlist: l } = (0, T.g)();
                    if (!(null == (t = l.meta) ? void 0 : t.kind) || !l.search.isNeededToLoad) return;
                    let n = i.getUploadingTracksByPlaylistKind(l.meta.kind);
                    if (0 !== n.length) return (0, r.jsx)('div', { className: a, children: n.map((e, t) => (0, r.jsx)(a8, { track: e }, t)) });
                });
            var re = a(38278),
                rt = a.n(re);
            let ra = (0, l.PA)((e) => {
                var t;
                let { playlistHeaderRef: a } = e,
                    {
                        playlist: l,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: n },
                        },
                    } = (0, T.g)(),
                    o = (0, p.Q)();
                return ((0, s.useEffect)(() => {
                    l.search.isFocused && l.search.removeFocus();
                }, [l.search.isFocused, l.search]),
                l.isLoading || !l.meta || l.isRejected)
                    ? (0, r.jsx)(eY.c, { className: rt().header })
                    : (0, r.jsxs)(em.F, {
                          blockType: c.LA.Header,
                          blockId: c.LA.Header,
                          blockPosX: 1,
                          blockPosY: 1,
                          mainObjectId: String(null == (t = l.meta) ? void 0 : t.uuid),
                          mainObjectType: c.ky.Playlist,
                          objectsCount: 1,
                          children: [
                              (0, r.jsx)(a5, {}),
                              (0, r.jsx)(aE, {
                                  className: (0, i.$)(rt().header, {
                                      [rt().header_branded]: o.isEnabled,
                                      [rt().header_brandedAxe]: n.isVisible && n.type === aH.h.BRANDING,
                                  }),
                                  playlist: l.meta,
                                  isDisabled: l.isDisabled,
                                  ref: a,
                              }),
                              (0, r.jsx)(aM, { autoFocus: !!(!l.items.length || l.search.isFocused) }),
                              l.isFiltersAvailable && (0, r.jsx)(aX, { playlist: l }),
                              (0, r.jsx)(a9, { className: rt().content }),
                              l.shouldShowEmptyBlock && (0, r.jsx)(aS, { className: rt().emptyPlaylist }),
                          ],
                      });
            });
            var rr = a(82273),
                ri = a(90048);
            let rl = (0, l.PA)((e) => {
                    var t;
                    let { user: a, playlist: i } = e,
                        { formatMessage: l } = (0, o.A)(),
                        n = (0, tc.N)().get(to.tw),
                        c = (0, rr._)(n.oldWebHost),
                        d = (0, s.useMemo)(() => {
                            let e =
                                    i.actualLikesCount > 0
                                        ? l({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount })
                                        : l({ id: 'entity-names.likes-counter-empty' }),
                                t = ''.concat(l({ id: 'entity-names.playlist' }), ' • ').concat(e);
                            return i.description ? ''.concat(i.description, ' • ').concat(t) : t;
                        }, [l, i.actualLikesCount, i.description]);
                    if (a.isAuthorized) return null;
                    let { href: u } = (0, tE.getLinkAttributesBase)('/playlists/:playlistUuid', {
                            params: { playlistUuid: i.uuid },
                            options: { host: 'https://'.concat(c) },
                        }),
                        m = {
                            '@type': 'MusicPlaylist',
                            name: i.title,
                            url: u,
                            description: d,
                            ...(i.modified && { datePublished: i.modified }),
                            ...(i.tracksCount && { numTracks: i.tracksCount }),
                            ...((null == (t = i.owner) ? void 0 : t.name) && { author: { '@type': 'Person', name: i.owner.name } }),
                        };
                    return (0, r.jsx)(ri.S, { value: m });
                }),
                rn = (0, l.PA)((e) => {
                    var t, a, l, _, v;
                    let { userId: A, kind: C, playlistUuid: N, preloadedPlaylistByUuid: j } = e,
                        {
                            user: B,
                            playlist: R,
                            settings: { isMobile: F },
                        } = (0, T.g)(),
                        { formatMessage: O } = (0, o.A)(),
                        { contentScrollRef: w, setContentScrollRef: G } = (0, E.g)(),
                        { forceUpdateRefCallback: q, offsetY: X } = (0, u.G)(w),
                        $ = (0, h.l)({ mainObjectType: c.ky.Playlist }),
                        Z = (0, P.y)(null == R || null == (t = R.meta) ? void 0 : t.averageColor),
                        J = (0, s.useMemo)(() => {
                            var e;
                            return R.isRewind2024Playlist && (null == (e = R.meta) ? void 0 : e.personalColor)
                                ? ((e) => {
                                      let { theme: t } = (0, z.W)(),
                                          a = t === Y.S.Light ? 0.7 : 0.36;
                                      return (0, H.e)(e, 0.6, a);
                                  })(R.meta.personalColor)
                                : Z;
                        }, [R.isRewind2024Playlist, null == (a = R.meta) ? void 0 : a.personalColor, Z]),
                        { topColorStyle: ee, headerStyle: et } = (0, y.Q)(J, X);
                    ((e) => {
                        var t;
                        let { setDeeplink: a } = null != (t = (0, W.P)()) ? t : {};
                        (0, s.useEffect)(() => {
                            if (e) {
                                let { href: t } = (0, K.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                null == a || a(t);
                            }
                            return () => {
                                null == a || a(null);
                            };
                        }, [e, a]);
                    })(N),
                        (0, b.J)(R.isResolved),
                        ((e) => {
                            (0, s.useEffect)(() => {
                                (null == e ? void 0 : e.meta) &&
                                    !e.isLoading &&
                                    U(
                                        ((e) => {
                                            var t, a, r, i, l, n, s, o, c, d, u, m, p;
                                            let _ = e.items.map((e) => ({ id: Number(e.id), albumId: Number(e.albumId) || void 0 }));
                                            return {
                                                owner: null == (t = e.meta) ? void 0 : t.owner,
                                                uid: (null == (a = e.meta) ? void 0 : a.uid) || 0,
                                                kind: (null == (r = e.meta) ? void 0 : r.kind) || 0,
                                                title: (null == (i = e.meta) ? void 0 : i.title) || '',
                                                description: null == (l = e.meta) ? void 0 : l.description,
                                                revision: (null == (n = e.meta) ? void 0 : n.revision) || 0,
                                                snapshot: 0,
                                                trackCount: _.length,
                                                cover: { uri: (null == (s = e.meta) ? void 0 : s.coverUri) || '', prefix: '', type: I.Q.FROM_ALBUM_COVER, custom: !1 },
                                                playlistUuid: (null == (o = e.meta) ? void 0 : o.uuid) || '',
                                                available: (null == (c = e.meta) ? void 0 : c.isAvailable) || !0,
                                                visibility: (null == (d = e.meta) ? void 0 : d.visibility) || D.L.PUBLIC,
                                                likesCount: null == (u = e.meta) ? void 0 : u.likesCount,
                                                modified: (null == (m = e.meta) ? void 0 : m.modified) || '',
                                                created: '',
                                                isBanner: !1,
                                                isPremiere: !1,
                                                durationMs: 0,
                                                collective: !1,
                                                ogImage: (null == (p = e.meta) ? void 0 : p.coverUri) || '',
                                                tags: [],
                                                tracks: _,
                                            };
                                        })(e),
                                        { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                    ).then((e) => {
                                        (0, k.j)(e);
                                    });
                            }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading, e]);
                        })(R),
                        (0, f.A)(),
                        ((e) => {
                            let t = (0, M.n)(),
                                { paywall: a } = (0, T.g)(),
                                r = t && e;
                            (0, s.useEffect)(
                                () => (
                                    r && a.openFreemiumCollectionPaywall(),
                                    () => {
                                        a.clearFreemiumCollectionBarrier();
                                    }
                                ),
                                [r, a],
                            );
                        })(R.isFavouritePlaylist),
                        (0, s.useEffect)(
                            () => (
                                $(!0),
                                () => {
                                    $(!1);
                                }
                            ),
                            [$],
                        ),
                        (0, s.useEffect)(
                            () => () => {
                                R.reset();
                            },
                            [R, N, A, C],
                        );
                    let ea = (0, s.useMemo)(
                            () => ({
                                Header: () => (0, r.jsx)(ra, { playlistHeaderRef: q }),
                                Item: R.isDragAndDropEnabled ? Q : void 0,
                                Footer: () => (0, r.jsx)(eH, { playlist: R }),
                            }),
                            [q, R, R.isDragAndDropEnabled],
                        ),
                        er = (0, s.useCallback)(
                            (e) => {
                                R.getTracksByRange(e);
                            },
                            [R],
                        ),
                        ei = (0, s.useCallback)(
                            (e) => {
                                var t;
                                return null == (t = R.items[e]) ? void 0 : t.key;
                            },
                            [R.items],
                        ),
                        el = (0, s.useCallback)((e) => e, []),
                        en = (0, p.Q)();
                    if (
                        (R.isNeededToLoad &&
                            ('string' == typeof N
                                ? (0, s.use)(R.getPlaylistByUuid({ playlistUuid: N, resumeStream: !1, preloadedPlaylist: j }))
                                : 'string' == typeof A &&
                                  'string' == typeof C &&
                                  (0, s.use)(R.getPlaylistByUserIdAndKind({ userId: A, playlistKind: Number(C), resumeStream: !1 }))),
                        R.uuid &&
                            R.isResolved &&
                            R.similarEntities.isNeededToLoad &&
                            R.isSimilarEntitiesEnabled &&
                            (0, s.use)(R.getSimilarEntities({ playlistUuid: R.uuid })),
                        R.isNotFound && (0, n.notFound)(),
                        R.isRejected)
                    )
                        return (0, r.jsx)(m.SomethingWentWrong, {});
                    let es = en.isEnabled ? L.V.BRANDED_PLAYLIST : L.V.INNER;
                    return (0, r.jsxs)(x.h, {
                        tabId: R.filters.activeFilter || '',
                        tabPos: R.filters.analyticsParamsActiveFilterIndex,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, r.jsx)(g.h, {
                                scrollElement: w,
                                children: (0, r.jsxs)('div', {
                                    className: V().wrapper,
                                    style: null == (l = en.data) ? void 0 : l.style,
                                    children: [
                                        (0, r.jsx)(L.Y, { variant: es, style: et }),
                                        !en.isEnabled && (0, r.jsx)('div', { className: V().averageColorBackground, style: ee }),
                                        (0, r.jsx)(eN, {
                                            playlist: R,
                                            children: (0, r.jsx)(S.$, {
                                                context: {
                                                    listAriaLabel: O(
                                                        { id: 'entity-names.playlist-tracks-list' },
                                                        { playlistName: (null == (_ = R.meta) ? void 0 : _.title) || '' },
                                                    ),
                                                },
                                                className: (0, i.$)(V().root, V().important),
                                                listClassName: V().content,
                                                customComponents: ea,
                                                computeItemKey: R.isDragAndDropEnabled ? ei : el,
                                                totalCount: R.virtualListItemsCount,
                                                itemContentCallback: (e) => (0, r.jsx)(ek, { index: e }),
                                                onGetDataByRange: er,
                                                debounceDurationInMs: 300,
                                                initialItemCount: null == (v = R.items) ? void 0 : v.length,
                                                handleRef: G,
                                                shouldTriggerRangeChangedOn: [R.filters.activeFilter, R.virtualListItemsCount],
                                                testId: d.Xk.playlist.PLAYLIST_PAGE,
                                                isMobileLayout: F,
                                                useWindowScroll: F,
                                                withFooter: !0,
                                                withForceScroll: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            R.meta && (0, r.jsx)(rl, { user: B, playlist: R.meta }),
                        ],
                    });
                }),
                rs = (0, l.PA)((e) =>
                    (0, r.jsx)(_.A, {
                        children: (0, r.jsx)(C.n, {
                            pageId: v._Q.PLAYLIST,
                            pageEntityId: e.playlistUuid,
                            children: (0, r.jsx)(A.j, { children: (0, r.jsx)(rn, { ...e }) }),
                        }),
                    }),
                );
        },
        63670: (e, t, a) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0);
            var r = a(30782);
            (t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                r.__exportStar(a(88222), t),
                (t._Parser = void 0);
        },
        64170: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => C });
            var r = a(32290),
                i = a(63618),
                l = a(96103),
                n = a(55178),
                s = a(60900),
                o = a(39407),
                c = a(63423),
                d = a(82586),
                u = a(71926),
                m = a(16172),
                p = a(52068),
                _ = a(62376),
                y = a(37240),
                g = a(83920),
                v = a(20472),
                f = a(12894),
                h = a(30310),
                A = a.n(h);
            let C = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: l } = (0, s.A)(),
                    h = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: a } = (0, p.gf)(),
                        { pageId: r } = (0, y.$)(),
                        i = (0, _.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !a || !r) return;
                        let l = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: r,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, m.z5)(t.evgenInstance, l);
                    }, [t, e, a, r, i]);
                })(h);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: a } = (0, y.$)(),
                            r = (0, _.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let i = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, m.bv)(e.evgenInstance, i);
                            }, [e, t, a, r]),
                        };
                    })(),
                    x = (0, n.useCallback)(() => {
                        C(), (window.location.href = v.Z.main.href);
                    }, [C]),
                    { contentRef: P } = (0, g.g)();
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(A().root, t),
                    children: [
                        a &&
                            (0, r.jsx)(f.L, { withBackwardFallback: '/', className: (0, i.$)(A().navigation, { [A().navigation_desktop]: !P }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, i.$)(A().content, { [A().content_shrink]: !a }),
                            children: [
                                (0, r.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, i.$)(A().title, A().important), variant: 'h3', size: 'xs', children: h }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, i.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: x,
                                    className: A().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        64538: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var r = a(32290),
                i = a(55178),
                l = a(16172),
                n = a(95481),
                s = a(26042),
                o = a(98148),
                c = a(83460);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: p,
                            containerClassName: _,
                            className: y,
                            headerClassName: g,
                            viewAllActionLink: v,
                            headingVariant: f,
                            shouldSendAnalyticsOnLoaded: h,
                            ...A
                        } = e,
                        C = (0, n.f)();
                    return (
                        (0, i.useEffect)(() => {
                            h && !a && C();
                        }, [a, C, h]),
                        (0, r.jsx)(o.O, {
                            isShimmerVisible: a,
                            isShimmerActive: d,
                            className: y,
                            headerClassName: g,
                            containerClassName: _,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: v,
                            headingVariant: f,
                            ...A,
                            children:
                                null == p
                                    ? void 0
                                    : p.map((e, t) =>
                                          (0, r.jsx)(
                                              s.B,
                                              {
                                                  objectType: l.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: p.length,
                                                  children: (0, r.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, i.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        66075: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => d });
            var r,
                i = a(72812),
                l = a(55178),
                n = {
                    6699: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let r = a(352),
                            i = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: l } = e,
                                n = (0, i.useRef)(null),
                                [s, o] = (0, i.useState)(!!a),
                                c = (0, i.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            o(!a),
                                                n.current && window.clearTimeout(n.current),
                                                (n.current = window.setTimeout(() => {
                                                    o(!!a);
                                                }, t));
                                        }, l),
                                    [t, a, l],
                                ),
                                d = (0, i.useCallback)(() => {
                                    o(!!a), n.current && window.clearTimeout(n.current);
                                }, [a]);
                            return (
                                (0, i.useEffect)(
                                    () => () => {
                                        n.current && window.clearTimeout(n.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: c, reset: d }
                            );
                        };
                    },
                    2767: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0);
                        let r = a(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    2067: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0);
                        let r = a(810),
                            i = a(361),
                            l = a(6699);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: a, elementRef: n } = e,
                                { state: s, handleDebouncedToggle: o } = (0, l.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                c = (0, r.useCallback)(() => {
                                    a && o(), null == t || t();
                                }, [a, o, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    let e = (0, i.getElementFromRefOrElement)(n);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        a = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', c, a), () => t.removeEventListener('scroll', c, a);
                                }, [n, c]),
                                s
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(l, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return n[e](a, a.exports, o), a.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, '__esModule', { value: !0 }), (c.useElementOffsetY = void 0);
                let e = o(810),
                    t = o(2067),
                    a = o(2767);
                c.useElementOffsetY = (r) => {
                    let [i, l] = (0, a.useForceUpdateRef)(),
                        [n, s] = (0, e.useState)(),
                        o = (0, e.useCallback)(() => {
                            let e = null == i ? void 0 : i.getBoundingClientRect();
                            e && s(e.y);
                        }, [i]);
                    return (0, e.useLayoutEffect)(o), (0, t.useScroll)({ onScroll: o, elementRef: r }), { forceUpdateRefCallback: l, offsetY: n };
                };
            })(),
                c.__esModule;
            var d = c.useElementOffsetY;
        },
        66318: (e) => {
            e.exports = {
                root: 'PlaylistPage_root__ajyaP',
                important: 'PlaylistPage_important__1Xpl5',
                wrapper: 'PlaylistPage_wrapper__XLjbD',
                averageColorBackground: 'PlaylistPage_averageColorBackground__3wEkw',
                content: 'PlaylistPage_content__T7zOm',
                brandedPlaylistBannerCreative: 'PlaylistPage_brandedPlaylistBannerCreative__fr6ZP',
            };
        },
        69951: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => v });
            var r = a(32290),
                i = a(63618),
                l = a(96103),
                n = a(55178),
                s = a(21732),
                o = a(90169),
                c = a(57594),
                d = a(40229),
                u = a(43565),
                m = a(8677),
                p = a(68912),
                _ = a(92102),
                y = a(85673),
                g = a.n(y);
            let v = (0, l.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: l,
                        className: y,
                        withDNDBlock: v,
                        isDragging: f,
                        draggingClassName: h,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: C,
                        handleRemove: x,
                        withDislike: P,
                        withTrailer: E = !0,
                        beforeTitle: b,
                        removeButtonAriaLabel: T,
                        hideControls: L,
                    } = e,
                    S = (0, o.D)({ playContextParams: l, entityId: a.entityId }),
                    {
                        settings: { isMobile: k },
                    } = (0, c.g)(),
                    I = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: g().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, r.jsx)(_.C, {
                    className: (0, i.$)(y, { [g().trackWithDots]: v, [g().important]: v }),
                    track: a,
                    beforeBlock: v ? (0, r.jsx)(u.O, { className: (0, i.$)(g().dots, h), isDragging: f }) : void 0,
                    meta: (0, r.jsx)(p.j, { withArtistLink: !k, beforeTitle: b, track: a, ignoreDislikedStyles: A, withSecondaryColor: C }),
                    playButtonCellRender: I,
                    controls: (0, r.jsx)(m.Q, {
                        track: a,
                        className: g().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = l.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: x,
                        withDislike: P,
                        withTrailer: E,
                        removeButtonAriaLabel: T,
                        hideControls: L,
                    }),
                    ...S,
                    'data-test-id': s.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        71062: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => r });
            var r = (function (e) {
                return (
                    (e.IDLE = 'IDLE'),
                    (e.PREPARE = 'PREPARE'),
                    (e.UPLOADING = 'UPLOADING'),
                    (e.PROCESSING = 'PROCESSING'),
                    (e.RESOLVE = 'RESOLVE'),
                    (e.REJECT = 'REJECT'),
                    (e.CANCELLED = 'CANCELLED'),
                    e
                );
            })({});
        },
        71536: (e) => {
            e.exports = {
                cancelIcon: 'DownloadButton_cancelIcon__MR36M',
                root_downloading: 'DownloadButton_root_downloading__H8Eh7',
                root: 'DownloadButton_root__AU5eq',
                downloadingProgress: 'DownloadButton_downloadingProgress__eenjt',
                progress: 'DownloadButton_progress__MM72T',
                progressText: 'DownloadButton_progressText__aQ12B',
                downloadedIcon: 'DownloadButton_downloadedIcon__tETl2',
            };
        },
        72694: (e) => {
            e.exports = { root: 'PlaylistPageItemEditorialBeforeTitle_root__DcMpV', major: 'PlaylistPageItemEditorialBeforeTitle_major__lifWe' };
        },
        73540: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDItemWrapper_root__eBm1E',
                inner: 'PlaylistPageDnDItemWrapper_inner__UXQZf',
                dragging: 'PlaylistPageDnDItemWrapper_dragging__Pl94m',
                dragOverlay: 'PlaylistPageDnDItemWrapper_dragOverlay__tWQut',
            };
        },
        80389: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        80792: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => p });
            var r = a(32290),
                i = a(96103),
                l = a(21916),
                n = a(55178),
                s = a(26749),
                o = a(59564),
                c = a(62376),
                d = a(57594),
                u = a(14257),
                m = a(50);
            let p = (0, i.PA)((e) => {
                let { className: t, ownerId: a, containerId: i, params: p, onLoad: _, onRender: y, onNoAds: g, onError: v } = e,
                    { user: f } = (0, d.g)(),
                    h = (0, l.usePathname)(),
                    A = (0, l.useSearchParams)(),
                    { create: C, destroy: x, initialize: P } = (0, o.s)(),
                    { theme: E } = (0, m.W)(),
                    b = (0, c.U)(),
                    T = (0, n.useRef)(!0),
                    L = { ...p };
                return (
                    (L.puid1 = f.advertRole),
                    (0, n.useEffect)(() => {
                        C({
                            ownerId: a,
                            containerId: i,
                            params: L,
                            insertionCodeParams: { darkTheme: E === u.S.Dark, additionalClasses: E ? [E] : [] },
                            onClose: () => {
                                b.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((b.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
                                    null == _ || _(s.h.EMPTY);
                                    return;
                                }
                                if ((null == e ? void 0 : e.bundleName) === 'banner.direct') {
                                    null == _ || _(s.h.DIRECT);
                                    return;
                                }
                                null == _ || _(s.h.CREATIVE);
                            },
                            onRender: () => {
                                b.log('[AdvertBanner] Render'), null == y || y();
                            },
                            onStub: () => {
                                b.log('[AdvertBanner] Stub'), null == g || g();
                            },
                            onError: (e) => {
                                b.log('[AdvertBanner] Error', { error: e }), null == v || v();
                            },
                        });
                    }, []),
                    (0, n.useEffect)(() => {
                        if (T.current) {
                            T.current = !1;
                            return;
                        }
                        b.log('[AdvertBanner] Destroy'), x(i), b.log('[AdvertBanner] Initialize'), P(i);
                    }, [h, A, i, x, P, b]),
                    (0, r.jsx)('div', { id: i, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        84199: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l, m: () => i });
            var r = a(55178);
            let i = (0, r.createContext)(null);
            function l() {
                return (0, r.useContext)(i);
            }
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
        86168: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var r = (function (e) {
                return (e.ALL = 'all'), e;
            })({});
        },
        86562: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var r = (function (e) {
                return (e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e;
            })({});
        },
        88222: (e, t) => {
            'use strict';
            var a, r;
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
                })(a || (t.TYPE = a = {})),
                (function (e) {
                    (e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime');
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
                });
        },
        88763: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => r });
            let r = (0, a(55178).createContext)({ data: null, isEnabled: !1 });
        },
        90048: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => l });
            var r = a(32290),
                i = a(80451);
            let l = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, r.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, i.stringifyJSONSafely)(a) } });
            };
        },
        93192: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => y });
            var r = a(32290),
                i = a(96103),
                l = a(55178),
                n = a(26749),
                s = a(57594),
                o = a(50),
                c = a(88763),
                d = a(14257);
            let u = (e, t) => (t === d.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                m = (e) => e.toString(16).padStart(2, '0');
            var p = a(7050),
                _ = (function (e) {
                    return (e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e;
                })({});
            let y = (0, i.PA)((e) => {
                let { children: t } = e,
                    {
                        advertBanners: {
                            banners: { brandedPlaylistBanner: a, brandedEntityAxeBanner: i },
                        },
                    } = (0, s.g)(),
                    { theme: d } = (0, o.W)(),
                    [y, g] = (0, l.useState)(null),
                    v = (e) => {
                        ((e) =>
                            (0, p.m)(e) &&
                            (e.type === _.PLAYLIST_GRADIENT || e.type === _.AXE_GRADIENT) &&
                            'object' == typeof e.payload &&
                            null !== e.payload &&
                            !Array.isArray(e.payload) &&
                            'color' in e.payload)(e.data) && g(e.data);
                    };
                (0, l.useEffect)(
                    () => (
                        window.addEventListener('message', v),
                        () => {
                            window.removeEventListener('message', v);
                        }
                    ),
                    [],
                );
                let f = (0, l.useMemo)(() => {
                        if ((null == y ? void 0 : y.payload.color) === void 0) return {};
                        let e = {
                            '--entity-branding-gradient-color-from':
                                i.isVisible && i.type !== n.h.EMPTY && d
                                    ? ((e, t) => {
                                          let a = e.replace('#', '');
                                          if (
                                              (3 === a.length &&
                                                  (a = a
                                                      .split('')
                                                      .map((e) => e + e)
                                                      .join('')),
                                              6 !== a.length)
                                          )
                                              return e;
                                          let r = parseInt(a.substring(0, 2), 16),
                                              i = parseInt(a.substring(2, 4), 16),
                                              l = parseInt(a.substring(4, 6), 16),
                                              n = u(r, t),
                                              s = u(i, t),
                                              o = u(l, t);
                                          return '#'.concat(m(n)).concat(m(s)).concat(m(o));
                                      })(y.payload.color, d)
                                    : y.payload.color,
                            '--entity-branding-gradient-color-to': 'transparent',
                        };
                        return null === y.payload.button
                            ? e
                            : {
                                  ...e,
                                  '--entity-branding-button-background-color': y.payload.button.backgroundColor,
                                  '--entity-branding-button-text-color': y.payload.button.textColor,
                              };
                    }, [null == y ? void 0 : y.payload.color, null == y ? void 0 : y.payload.button, d, i.isVisible, i.type]),
                    h = (0, l.useMemo)(() => {
                        let e = a.isVisible && a.type !== n.h.EMPTY,
                            t = i.isVisible && i.type !== n.h.EMPTY,
                            r = e || t;
                        return r && null !== y ? { data: { type: y.type, style: f, button: y.payload.button }, isEnabled: r } : { data: null, isEnabled: !1 };
                    }, [y, f, a.isVisible, a.type, i.isVisible, i.type]);
                return (0, r.jsx)(c.G.Provider, { value: h, children: t });
            });
        },
        93878: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylistCover_root__Vdn75',
                coverButton: 'PageHeaderPlaylistCover_coverButton__dw0rj',
                root_hoverable: 'PageHeaderPlaylistCover_root_hoverable__ZeqpX',
                coverImage: 'PageHeaderPlaylistCover_coverImage__OC58K',
                backCoverColor: 'PageHeaderPlaylistCover_backCoverColor__7z3dk',
                button: 'PageHeaderPlaylistCover_button__vCYgD',
                fileUploadContainer: 'PageHeaderPlaylistCover_fileUploadContainer___JnqP',
                fileUploadContainer_hovered: 'PageHeaderPlaylistCover_fileUploadContainer_hovered__RtD_X',
                buttonContainer: 'PageHeaderPlaylistCover_buttonContainer__OkEaT',
                buttonContainer_withCursorPointer: 'PageHeaderPlaylistCover_buttonContainer_withCursorPointer__pnzha',
                formFile: 'PageHeaderPlaylistCover_formFile__1xnry',
            };
        },
        94218: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => m });
            var r = a(32290),
                i = a(21916),
                l = a(39407),
                n = a(21732),
                s = a(91027),
                o = a(63423),
                c = a(71926),
                d = a(70204),
                u = a(34186);
            let m = (e) => {
                let { size: t = 'm', variant: a = 'default', withRipple: m = !0, buttonText: p, isBlock: _, key: y, className: g } = e,
                    v = (0, i.useRouter)(),
                    f = (0, u.N)().get(d.QG),
                    h = (0, s.c)(() => {
                        f.authorizationUrl && v.push(f.authorizationUrl);
                    });
                return (0, r.jsx)(
                    o.$,
                    {
                        onClick: h,
                        className: g,
                        isBlock: _,
                        color: 'primary',
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    y,
                );
            };
        },
        94805: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var r = a(80451),
                i = a(14257),
                l = a(50);
            let n = (e) => {
                let { theme: t } = (0, l.W)();
                if (e) {
                    let { r: a, g: l, b: n } = (0, r.hexToRgb)(e),
                        s = t === i.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(l, ', ').concat(n, ', ').concat(s, ')');
                }
            };
        },
        96151: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { Q: () => r }),
                (function (e) {
                    (e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic');
                })(r || (r = {}));
        },
        97409: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                card: 'TrackUgcUpload_card__bidIG',
                important: 'TrackUgcUpload_important__RQkp0',
                playButton: 'TrackUgcUpload_playButton__3l2I7',
                meta: 'TrackUgcUpload_meta__aHQv9',
                title: 'TrackUgcUpload_title__Xq3UP',
                status: 'TrackUgcUpload_status__aFGvl',
                controls: 'TrackUgcUpload_controls__Ie2Ox',
            };
        },
        99311: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => d });
            var r,
                i = a(80451),
                l = a(55178),
                n = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (i && (i += ' '), (i += r));
                                            else for (a in t) t[a] && (i && (i += ' '), (i += a));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        a.r(t), a.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    7122: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    9775: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => r });
                        let r = {
                            root: 'rqUESGQ8jp3tbDawOzuG',
                            root_checked: 'GJh5PwV9GyFuKhlG6pQz',
                            icon: 'aw9IoPC0GuAC7Hmf825u',
                            icon_checked: 'KC8t9NStVmQ1_VY54KH4',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var l in ((r = {}), t)) 'key' !== l && (r[l] = t[l]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    7858: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, r) =>
                                    ((e, a, r) => (r === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, r),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            });
                    },
                    8796: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let r = null != a ? a : e.currentTarget,
                                    i = document.createElement('span'),
                                    l = Math.max(r.clientWidth, r.clientHeight),
                                    n = l / 2,
                                    s = r.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                (i.style.width = ''.concat(l, 'px')),
                                    (i.style.height = ''.concat(l, 'px')),
                                    (i.style.left = 0 === e.clientX ? '0px' : ''.concat(o - n, 'px')),
                                    (i.style.top = ''.concat(c - n, 'px')),
                                    i.classList.add(t);
                                let d = r.getElementsByClassName(t)[0];
                                d && d.remove(), r.insertBefore(i, r.firstChild);
                            });
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    768: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0);
                        let r = a(2660),
                            i = a(7858);
                        (t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            });
                        let l = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        (t.getVibePaletteByBucketName = (e) => {
                            let a = (0, i.findColorBucketByName)(e);
                            return a ? l(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, r.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, i.findColorBucketByHue)(t.h) : (0, i.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? l(a) : t.FALLBACK_PALETTE;
                            });
                    },
                    8216: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0);
                        var r = a(8796);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return r.createRipple;
                            },
                        });
                        var i = a(361);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return i.getElementFromRefOrElement;
                            },
                        });
                        var l = a(768);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return l.getVibePaletteColors;
                            },
                        });
                    },
                    8119: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        let i = a(4377),
                            l = a(810),
                            n = a(5881),
                            s = a(8216),
                            o = r(a(7122)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: a,
                                        iconPosition: r = 'left',
                                        children: c,
                                        className: d,
                                        color: u = 'secondary',
                                        flexIcon: m,
                                        icon: p,
                                        spinner: _,
                                        role: y,
                                        onClick: g,
                                        radius: v = 'm',
                                        size: f,
                                        type: h = 'button',
                                        variant: A = 'default',
                                        withRipple: C = !0,
                                        withHover: x = !0,
                                        withBorder: P = !1,
                                        disabled: E,
                                        iconClassName: b,
                                        contentContainerClassName: T,
                                        ...L
                                    } = e,
                                    S = (0, l.useId)(),
                                    k = !l.Children.toArray(c).filter(Boolean).length,
                                    I = 'left' === r,
                                    D = null,
                                    N = (0, l.isValidElement)(_);
                                if (p) {
                                    var j, B;
                                    D = (0, l.cloneElement)(p, {
                                        className: (0, n.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(r)]]: r && !k,
                                                [o.default.icon_withButtonSize]: !(null == (j = p.props) ? void 0 : j.size),
                                            },
                                            null == (B = p.props) ? void 0 : B.className,
                                            b,
                                        ),
                                        key: S,
                                    });
                                }
                                let R = (0, l.useMemo)(() => (N ? (0, i.jsx)('div', { className: o.default.spinnerContainer, children: _ }) : null), [N, _]),
                                    F = (0, l.useCallback)(
                                        (e) => {
                                            N || (C && (0, s.createRipple)(e, o.default.ripple), null == g || g(e));
                                        },
                                        [N, g, C],
                                    );
                                return (0, i.jsx)('button', {
                                    ref: t,
                                    className: (0, n.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(u, '_').concat(A)],
                                        o.default['root_radius_'.concat(v)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(u, '_withHover_').concat(A)]]: x && !E && !N,
                                            [o.default['root_size_'.concat(f)]]: f,
                                            [o.default.root_withoutBorder]: !P,
                                            [o.default.root_withActiveSpinner]: N,
                                            [o.default.block]: a,
                                            [o.default.flexIcon]: m,
                                            [o.default.iconOnly]: k,
                                            [o.default.root_icon_left]: p && !k && I,
                                            [o.default.root_icon_right]: p && !k && !I,
                                        },
                                        d,
                                    ),
                                    type: h,
                                    role: y,
                                    onClick: F,
                                    ...L,
                                    disabled: E,
                                    'aria-live': N ? 'polite' : 'off',
                                    'aria-busy': N,
                                    children:
                                        p || N
                                            ? (0, i.jsxs)('span', {
                                                  className: (0, n.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: a }, T),
                                                  children: [p && I && D, !k && c, p && !I && D, R],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, l.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
                    },
                    5928: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0);
                        var r = a(8119);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return r.Button;
                            },
                        });
                    },
                    7459: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Toggle = void 0);
                        let i = a(4377),
                            l = a(5881),
                            n = a(810),
                            s = a(5928),
                            o = r(a(9775)),
                            c = (e) => {
                                let { isChecked: t } = e;
                                return (0, i.jsx)('div', { className: (0, l.clsx)(o.default.icon, { [o.default.icon_checked]: t }) });
                            };
                        t.Toggle = (e) => {
                            let { className: t, isChecked: a = !1, onChange: r, 'aria-label': d, 'aria-describedby': u, ...m } = e,
                                [p, _] = (0, n.useState)(a),
                                y = (0, n.useCallback)(() => {
                                    let e = !p;
                                    _(e), null == r || r(e);
                                }, [p, r]);
                            return (
                                (0, n.useEffect)(() => {
                                    _(a);
                                }, [a]),
                                (0, i.jsx)(s.Button, {
                                    className: (0, l.clsx)(o.default.root, { [o.default.root_checked]: p }, t),
                                    radius: 'xxxl',
                                    variant: 'default',
                                    icon: (0, i.jsx)(c, { isChecked: p }),
                                    withRipple: !1,
                                    onClick: y,
                                    role: 'switch',
                                    'aria-checked': p,
                                    'aria-label': d,
                                    'aria-describedby': u,
                                    ...m,
                                    color: p ? 'primary' : 'secondary',
                                })
                            );
                        };
                    },
                    2660: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(l, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return n[e].call(a.exports, a, a.exports, o), a.exports;
            }
            (o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.Z = void 0);
                var e = o(7459);
                Object.defineProperty(c, 'Z', {
                    enumerable: !0,
                    get: function () {
                        return e.Toggle;
                    },
                });
            })();
            var d = c.Z;
            c.X;
        },
        99649: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylistAddition_playButtonCell__Ocnhq',
                controls: 'TrackPlaylistAddition_controls__S346Y',
                button: 'TrackPlaylistAddition_button__fsY9k',
            };
        },
    },
]);
