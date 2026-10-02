(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8706],
    {
        12234: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => i });
            var r = n(71872);
            function i(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(r.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, n) => {
            var r = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function i(e) {
                if (!n.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    i = t[0];
                return n.e(t[1]).then(() => n.t(i, 19));
            }
            ((i.keys = () => Object.keys(r)), (i.id = 12526), (e.exports = i));
        },
        14514: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => r });
            let r = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        22403: (e, t, n) => {
            'use strict';
            function r(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (e.length <= t) return e;
                let r = e.substring(0, t),
                    i = n ? r.lastIndexOf(' ') : t,
                    a = ~i ? r.substring(0, i) : r;
                return ''.concat(a, '...');
            }
            n.d(t, { Y: () => r });
        },
        27935: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => a });
            var r = n(89288),
                i = n(28869);
            function a(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: a, locale: l, ogImage: o, siteName: s, ogType: c, customImage: u } = e,
                    g = o ? { url: (0, r.lU)(o, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: a,
                    ...(c && { type: c }),
                    siteName: s,
                    locale: (l || i.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: g || u,
                };
            }
        },
        28869: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => g });
            var r = n(58025),
                i = n(78773),
                a = n(14514),
                l = n(56107);
            let o = (e) => l.U.parseAcceptLanguage(null != e ? e : void 0);
            var s = n(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: s.$.RU, en: s.$.EN, uz: s.$.UZ, kk: s.$.KK }[e]) ? t : s.$.RU;
            };
            var u = n(55040);
            class g {
                static getDefaultLocale() {
                    return new Intl.Locale(i.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = g.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, a.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, a.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, n, r;
                    let i = (0, a.k)(this.config, e);
                    i !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (n = this.storage) || n.set(i), null == (r = this.changeLanguageHandler) || r.onChangeLanguage(i));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, a.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, a.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, u.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: n, changeLanguageHandler: s, logger: c }) {
                    let u;
                    if (
                        ((0, r._)(this, 'language', void 0),
                        (0, r._)(this, 'storage', void 0),
                        (0, r._)(this, 'dictionary', void 0),
                        (0, r._)(this, 'config', void 0),
                        (0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'changeLanguageHandler', void 0),
                        (0, r._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = n),
                        (this.logger = c),
                        (this.changeLanguageHandler = s),
                        (this.serverDetectedLocale = e),
                        (this.config = i.pE[i.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var g;
                            let e;
                            u = ((e = this.config), new l.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (g = this.storage) ? void 0 : g.get()) || void 0,
                                acceptLangs: o(navigator.languages.join()),
                            });
                        }
                    } else [u] = o(e) || [];
                    this.language = (0, a.k)(this.config, u);
                }
            }
        },
        41016: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => l });
            var r = n(71872),
                i = n(80461);
            let a = '@yandexmusic';
            function l(e) {
                return e.cardType === i.W.SUMMARY_LARGE_IMAGE
                    ? { card: i.W.SUMMARY_LARGE_IMAGE, site: a, title: e.title, description: e.description }
                    : {
                          card: i.W.APP,
                          site: a,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(r.Lz, '/').concat(e.url) } },
                      };
            }
        },
        41242: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => i });
            var r = n(22403);
            function i(e, t) {
                var n;
                return (0, r.Y)(e, null != (n = null == t ? void 0 : t.maxLength) ? n : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        46646: (e, t, n) => {
            var r = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function i(e) {
                if (!n.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    i = t[0];
                return n.e(t[1]).then(() => n.t(i, 19));
            }
            ((i.keys = () => Object.keys(r)), (i.id = 46646), (e.exports = i));
        },
        47127: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { Q: () => r }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(r || (r = {})));
        },
        53712: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var r = n(25895);
            let i = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        55040: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, X: () => s });
            var r = n(36432),
                i = n(78773);
            let a = async (e) => e.then((e) => e.default),
                l = i.pE[i.cy],
                o = l.langs.reduce((e, t) => (e.set(t, async () => a(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                s = l.langs.reduce((e, t) => (e.set(t, async () => a(n(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        n = t.get(e),
                        i = t.get('ru');
                    if (n) return n();
                    if (i) return i();
                    throw new r.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        61732: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => i });
            let r = (e, t) => {
                    let n = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (n) return n;
                    let r = window.document.createElement('meta');
                    return (r.setAttribute(e, t), r);
                },
                i = (e) => {
                    let { title: t, description: n, openGraph: i } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof n)) {
                        let e = r('name', 'description');
                        (e.setAttribute('content', n), window.document.head.appendChild(e));
                    }
                    let a = '';
                    if (i) {
                        let e = 'string' == typeof i.title ? i.title : '',
                            t = 'string' == typeof i.description ? i.description : '',
                            n = Array.isArray(i.images) ? i.images[0] : null;
                        a = n && 'object' == typeof n && 'url' in n ? String(n.url) : '';
                        let l = r('property', 'og:title'),
                            o = r('property', 'og:description'),
                            s = r('property', 'og:image');
                        (l.setAttribute('content', e),
                            o.setAttribute('content', t),
                            s.setAttribute('content', a),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(s));
                    }
                };
        },
        67311: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => a, si: () => o, fW: () => d, MJ: () => g, jU: () => p, Bx: () => h });
            var r = n(22413);
            function i(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class a {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let l = (0, r.Jt)(e);
                        if (t) {
                            var n, a;
                            return null != (a = null == (n = i(l)) ? void 0 : n.value) ? a : null;
                        }
                        return null != l ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let a = i ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, a, n);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function l(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = l('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let a = n.getItem(e) || void 0;
                        if (!t) return a;
                        let l = i(a);
                        if (!l) return null;
                        let o = null != (r = null == l ? void 0 : l.value) ? r : null;
                        if ((null == l ? void 0 : l.expires) && Date.now() > new Date(l.expires).getTime()) return (this.remove(e), null);
                        return o;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e));
                    }
                    let r = l('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var s = n(58025),
                c = n(36432);
            class u extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, s._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class g {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, n) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, s._)(this, 'platform', ''), (0, s._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class d {
                get(e) {
                    let t = l('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, a;
                        let l = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (a = null == (n = i(l)) ? void 0 : n.value) ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = l('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            i = e.get(n);
                        null != i && e.set(n, i, r);
                    });
            }
            function p(e) {
                let { name: t, group: n, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: n, value: { ...r, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: r } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
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
        71121: (e, t, n) => {
            'use strict';
            function r(e) {
                let { genreTitle: t, artists: n, messageFormatter: r } = e,
                    i = null;
                return (
                    Array.isArray(n) &&
                        (i = n
                            .slice(0, 3)
                            .map((e) => ('artist' in e ? e.artist.name : e.name))
                            .join(', ')),
                    i ? r({ id: 'metadata.genre-description' }, { genreTitle: t, artistsList: i }) : r({ id: 'metadata.genre-description-short' }, { genreTitle: t })
                );
            }
            n.d(t, { f: () => r });
        },
        78299: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => A });
            var r = n(25839),
                i = n(82298),
                a = n(88204),
                l = n(74631),
                o = n(39004),
                s = n(8487);
            n(93588);
            var c = n(4071),
                u = n(66738),
                g = n(4254),
                d = n(67379),
                h = n(36619),
                p = n(76945),
                y = n(59450),
                m = n(84e3),
                f = n(97952),
                _ = n(89192),
                v = n(53712),
                E = n(15270),
                w = n(68854),
                S = n.n(w);
            let A = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    w = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, y.st)(),
                        { hash: n } = (0, y.gf)(),
                        { pageId: r } = (0, f.$)(),
                        i = (0, m.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !n || !r) return;
                        let a = (0, d.F)({
                            params: {
                                entityType: h.EntityTypes.Error,
                                entityId: h.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: r,
                                pageStyle: h.PageStyles.Fullscreen,
                                pagePlacement: h.PagePlacements.Fullscreen,
                                mainObjectType: h.DomainObjectType.NonApplicable,
                                mainObjectId: h.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, p.z5)(t.evgenInstance, a);
                    }, [t, e, n, r, i]);
                })(w);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, y.st)(),
                            { hash: t } = (0, y.gf)(),
                            { pageId: n } = (0, f.$)(),
                            r = (0, m.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let i = (0, d.F)({
                                    params: {
                                        actionType: h.ActionType.Refresh,
                                        userInteractionType: h.UserInteractionType.Tap,
                                        entityType: h.EntityTypes.Error,
                                        entityId: h.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: h.PageStyles.Fullscreen,
                                        pagePlacement: h.PagePlacements.Fullscreen,
                                        mainObjectType: h.DomainObjectType.NonApplicable,
                                        mainObjectId: h.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, p.bv)(e.evgenInstance, i);
                            }, [e, t, n, r]),
                        };
                    })(),
                    k = (0, l.useCallback)(() => {
                        (A(), (window.location.href = v.Z.main.href));
                    }, [A]),
                    { contentRef: L } = (0, _.g)();
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(S().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(E.L, { withBackwardFallback: '/', className: (0, i.$)(S().navigation, { [S().navigation_desktop]: !L }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, i.$)(S().content, { [S().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(u.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(g.DZ, { className: (0, i.$)(S().title, S().important), variant: 'h3', size: 'xs', children: w }),
                                (0, r.jsxs)(g.HL, {
                                    className: (0, i.$)(S().text, S().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(s.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: k,
                                    className: S().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(g.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(s.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        78773: (e, t, n) => {
            'use strict';
            n.d(t, { Xn: () => a, cy: () => i, pE: () => r });
            let r = {
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
                i = 'yandex',
                a = 'ru-RU';
        },
        80461: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => r });
            var r = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        80499: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => m, s: () => f });
            var r = n(25839),
                i = n(88204),
                a = n(84059),
                l = n(74631),
                o = n(89288),
                s = n(36432),
                c = n(94421),
                u = n(99989),
                g = n(27954),
                d = n(83382);
            (0, i.eO)(!1);
            let h = (0, l.createContext)(null),
                p = (e) => {
                    let { children: t, store: n, storeKey: i } = e,
                        a = (0, l.useMemo)(() => ({ store: n, storeKey: i }), [n, i]);
                    return (0, r.jsx)(h.Provider, { value: a, children: t });
                },
                y = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: i } = e;
                    return (
                        (0, a.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(n, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        i = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: l } = e,
                                o = (0, d.Y)(),
                                s = (0, g.g)(),
                                { store: h, patchesRef: m } = (0, u.m)({
                                    createStore: () => t({ ...o, rootStore: s }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(y, { nonce: l, patchKey: n, patchesRef: m }), (0, r.jsx)(p, { store: h, storeKey: n, children: a })],
                            });
                        },
                    };
                };
            function f(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, l.useContext)(h);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new s.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == n ? void 0 : n.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        82706: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        83382: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => o });
            var r = n(67311),
                i = n(36484),
                a = n(62562),
                l = n(84e3);
            let o = () => {
                let e = (0, a.N)(),
                    t = e.get(i.oo),
                    n = e.get(i.uM),
                    o = e.get(i.ff),
                    s = e.get(i.V4),
                    c = e.get(i.P0),
                    u = (() => {
                        let e = (0, a.N)(),
                            t = e.get(i.$I),
                            n = e.get(i.EN),
                            r = e.get(i.N1),
                            l = e.get(i._1),
                            o = e.get(i.V3),
                            s = e.get(i.Lb),
                            c = e.get(i.wK),
                            u = e.get(i.tz),
                            g = e.get(i.$8),
                            d = e.get(i.Oo),
                            h = e.get(i.X4),
                            p = e.get(i.O9),
                            y = e.get(i.E),
                            m = e.get(i.wH),
                            f = e.get(i.ok),
                            _ = e.get(i.X8),
                            v = e.get(i.yq),
                            E = e.get(i.NN),
                            w = e.get(i.qN),
                            S = e.get(i.ro),
                            A = e.get(i.nM),
                            k = e.get(i.Ut),
                            L = e.get(i.K1),
                            T = e.get(i.eu),
                            x = e.get(i.aE),
                            O = e.get(i.ki),
                            b = e.get(i.c9),
                            P = e.get(i.en),
                            N = e.get(i.jQ),
                            j = e.get(i.cZ),
                            M = e.get(i.Zl),
                            I = e.get(i.CN),
                            R = e.get(i.P1),
                            W = e.get(i.zj),
                            C = e.get(i.re),
                            U = e.get(i.JM),
                            D = e.get(i.Lk),
                            G = e.get(i.$$),
                            z = e.get(i.sv),
                            H = e.get(i.gd),
                            K = e.get(i.Ez),
                            $ = e.get(i.u2),
                            F = e.get(i.TD),
                            Y = e.get(i.dh),
                            Z = e.get(i.LC),
                            B = e.get(i.PL),
                            J = e.get(i.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: r,
                            usersResource: l,
                            landingResource: o,
                            landing3Resource: s,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: g,
                            tracksResource: d,
                            topResource: h,
                            artistsResource: p,
                            slidesResource: y,
                            redAlertResource: m,
                            rotorResource: f,
                            waveResource: _,
                            searchResource: v,
                            searchPlaylistResource: E,
                            playlistResource: w,
                            playlistsResource: S,
                            pinResource: A,
                            metatagsResource: k,
                            tagResource: L,
                            feedResource: T,
                            pinsResource: x,
                            musicHistoryResource: O,
                            dynamicPagesResource: b,
                            chartResource: P,
                            clipsResource: N,
                            lyricViewsResource: j,
                            nonMusicResource: M,
                            donationResource: I,
                            loaderResource: R,
                            lumenResource: W,
                            prefixlessResource: C,
                            streamsResource: U,
                            filtersResource: D,
                            ugcResource: G,
                            collectionResource: z,
                            adsResource: H,
                            personalResource: K,
                            familyResource: $,
                            childrenLandingResource: F,
                            promoResource: Y,
                            telemetryResource: Z,
                            labelsResource: B,
                            concertsResource: J,
                            wordsResource: e.get(i.dA),
                            wheelResource: e.get(i.$Y),
                        };
                    })(),
                    g = (0, l.U)(),
                    d = (0, a.N)().get(i.TK),
                    h = e.get(i.ni),
                    p = new r.si(),
                    y = new r.fW();
                return {
                    ...u,
                    acqOffers: n,
                    disclaimerDictionary: o,
                    logger: g,
                    modelActionsLogger: d,
                    localStorage: p,
                    sessionStorage: y,
                    containerStorage: t,
                    config: s,
                    clientSafeConfig: c,
                    landingSdk: h,
                };
            };
        },
        86166: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { $: () => r }),
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
                })(r || (r = {})));
        },
        89221: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => u });
            var r = n(13580),
                i = n(74631),
                a = n(78773),
                l = n(28869),
                o = n(14514),
                s = n(55040);
            let c = (0, i.cache)(async (e) => (0, s.M)(e, s.X)),
                u = async (e) => {
                    let t = (e || l.E.getDefaultLocale()).language,
                        n = (0, o.k)(a.pE[a.cy], t),
                        i = await c(n);
                    return (e, t) => {
                        let a = null == i ? void 0 : i[e.id],
                            l = '';
                        return ((Array.isArray(a) || 'string' == typeof a) && (l = new r.S(a, n).format(t)), Array.isArray(l) ? l.join('') : l);
                    };
                };
        },
        94421: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => i, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                i = 'yMusicPageStatePatchesUpdated';
        },
        95445: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => a });
            var r = n(25895);
            let i = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                a = function (e, t) {
                    for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) a[l - 2] = arguments[l];
                    let [o] = a,
                        s = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != o ? o : {}), options: e }),
                        u = {},
                        { href: g } = (0, r.u)(s, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(i)) {
                        let { href: n } = (0, r.u)(s, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = n;
                    }
                    return { canonical: g, languages: u };
                };
        },
        99989: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => a });
            var r = n(28410),
                i = n(74631);
            let a = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: a } = e,
                    l = (0, i.useRef)([]),
                    [o] = (0, i.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, i.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(o, e);
                        };
                        return (e(), window.addEventListener(a, e), () => window.removeEventListener(a, e));
                    }, [n, a, o]),
                    { store: o, patchesRef: l }
                );
            };
        },
    },
]);
