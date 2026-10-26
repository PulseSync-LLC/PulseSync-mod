(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5382],
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
            var r = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 9088] };
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
        22413: (e, t, n) => {
            'use strict';
            n.d(t, { Jt: () => a, TF: () => o, hZ: () => s });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var n = '; ' + e;
                return !0 === t ? n : n + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, n = e ? e.split('; ') : [], r = 0; r < n.length; r++) {
                        var i = n[r].split('='),
                            a = i.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, n) {
                var a;
                document.cookie =
                    ((a = r({ path: '/' }, n)),
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
            function o(e, t) {
                s(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        27935: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => a });
            var r = n(89288),
                i = n(28869);
            function a(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: a, locale: s, ogImage: o, siteName: l, ogType: c, customImage: u } = e,
                    g = o ? { url: (0, r.lU)(o, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: a,
                    ...(c && { type: c }),
                    siteName: l,
                    locale: (s || i.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: g || u,
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
        28869: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => g });
            var r = n(58025),
                i = n(78773),
                a = n(14514),
                s = n(56107);
            let o = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var l = n(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: l.$.RU, en: l.$.EN, uz: l.$.UZ, kk: l.$.KK }[e]) ? t : l.$.RU;
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
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: n, changeLanguageHandler: l, logger: c }) {
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
                        (this.changeLanguageHandler = l),
                        (this.serverDetectedLocale = e),
                        (this.config = i.pE[i.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var g;
                            let e;
                            u = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
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
            n.d(t, { H: () => s });
            var r = n(71872),
                i = n(80461);
            let a = '@yandexmusic';
            function s(e) {
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
            n.d(t, { M: () => c, X: () => l });
            var r = n(36432),
                i = n(78773);
            let a = async (e) => e.then((e) => e.default),
                s = i.pE[i.cy],
                o = s.langs.reduce((e, t) => (e.set(t, async () => a(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                l = s.langs.reduce((e, t) => (e.set(t, async () => a(n(46646)('./'.concat(t, '.json')))), e), new Map()),
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
                        let s = r('property', 'og:title'),
                            o = r('property', 'og:description'),
                            l = r('property', 'og:image');
                        (s.setAttribute('content', e),
                            o.setAttribute('content', t),
                            l.setAttribute('content', a),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(l));
                    }
                };
        },
        64715: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => O });
            var r = n(25839),
                i = n(82298),
                a = n(88204),
                s = n(74631),
                o = n(39004),
                l = n(8487);
            n(93588);
            var c = n(4071),
                u = n(66738),
                g = n(4254),
                d = n(67379),
                p = n(44031),
                h = n(87277),
                m = n(59450),
                _ = n(84e3),
                y = n(97952),
                f = n(89192),
                v = n(53712),
                S = n(27954),
                w = n(44806),
                E = n(15270),
                k = n(23818),
                x = n(85686);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var b = n(27990),
                L = n.n(b);
            let T = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { slam: a } = (0, S.g)(),
                    { contentRef: s } = (0, f.g)(),
                    o = (0, x.Z)(v.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(L().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(E.L, { withBackwardFallback: '/', className: (0, i.$)(L().navigation, { [L().navigation_desktop]: !s }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, i.$)(L().content, { [L().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(k._V, { className: L().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: L().message,
                                    children: [
                                        (0, r.jsx)(g.DZ, {
                                            className: L().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(g.HL, {
                                            className: L().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                a.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: L().button,
                                        onClick: o,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(g.HL, {
                                            className: L().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var j = n(68854),
                N = n.n(j);
            let O = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    k = (0, s.useContext)(S.P),
                    x = null == k ? void 0 : k.experiments.checkExperiment(w.z.WebNextUnstableMusicScreen, 'on'),
                    A = a(x ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: n } = (0, m.gf)(),
                        { pageId: r } = (0, y.$)(),
                        i = (0, _.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !n || !r) return;
                        let a = (0, d.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: r,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, h.z5)(t.evgenInstance, a);
                    }, [t, e, n, r, i]);
                })(A);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: n } = (0, y.$)(),
                            r = (0, _.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let i = (0, d.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, h.bv)(e.evgenInstance, i);
                            }, [e, t, n, r]),
                        };
                    })(),
                    L = (0, s.useCallback)(() => {
                        (b(), (window.location.href = v.Z.main.href));
                    }, [b]),
                    { contentRef: j } = (0, f.g)();
                return x
                    ? (0, r.jsx)(T, { className: t, withBackwardControl: n })
                    : (0, r.jsxs)('div', {
                          className: (0, i.$)(N().root, t),
                          children: [
                              n &&
                                  (0, r.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, i.$)(N().navigation, { [N().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, i.$)(N().content, { [N().content_shrink]: !n }),
                                  children: [
                                      (0, r.jsx)(u.I, { className: N().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(g.DZ, { className: (0, i.$)(N().title, N().important), variant: 'h3', size: 'xs', children: A }),
                                      (0, r.jsxs)(g.HL, {
                                          className: (0, i.$)(N().text, N().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: L,
                                          className: N().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(g.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        67311: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => a, si: () => o, fW: () => d, MJ: () => g, jU: () => h, Bx: () => p });
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
                        let s = (0, r.Jt)(e);
                        if (t) {
                            var n, a;
                            return null != (a = null == (n = i(s)) ? void 0 : n.value) ? a : null;
                        }
                        return null != s ? s : null;
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
            function s(e) {
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
                        n = s('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let a = n.getItem(e) || void 0;
                        if (!t) return a;
                        let s = i(a);
                        if (!s) return null;
                        let o = null != (r = null == s ? void 0 : s.value) ? r : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
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
                    let r = s('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var l = n(58025),
                c = n(36432);
            class u extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, l._)(this, 'name', 'Storage Exception'),
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
                    ((0, l._)(this, 'platform', ''), (0, l._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class d {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, a;
                        let s = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (a = null == (n = i(s)) ? void 0 : n.value) ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = s('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            i = e.get(n);
                        null != i && e.set(n, i, r);
                    });
            }
            function h(e) {
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
            n.d(t, { W: () => _, s: () => y });
            var r = n(25839),
                i = n(88204),
                a = n(84059),
                s = n(74631),
                o = n(89288),
                l = n(36432),
                c = n(94421),
                u = n(99989),
                g = n(27954),
                d = n(83382);
            (0, i.eO)(!1);
            let p = (0, s.createContext)(null),
                h = (e) => {
                    let { children: t, store: n, storeKey: i } = e,
                        a = (0, s.useMemo)(() => ({ store: n, storeKey: i }), [n, i]);
                    return (0, r.jsx)(p.Provider, { value: a, children: t });
                },
                m = (e) => {
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
                _ = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        i = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: s } = e,
                                o = (0, d.Y)(),
                                l = (0, g.g)(),
                                { store: p, patchesRef: _ } = (0, u.m)({
                                    createStore: () => t({ ...o, rootStore: l }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(m, { nonce: s, patchKey: n, patchesRef: _ }), (0, r.jsx)(h, { store: p, storeKey: n, children: a })],
                            });
                        },
                    };
                };
            function y(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, s.useContext)(p);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
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
                s = n(84e3);
            let o = () => {
                let e = (0, a.N)(),
                    t = e.get(i.oo),
                    n = e.get(i.QG),
                    o = e.get(i.uM),
                    l = e.get(i.ff),
                    c = e.get(i.V4),
                    u = e.get(i.P0),
                    g = (() => {
                        let e = (0, a.N)(),
                            t = e.get(i.$I),
                            n = e.get(i.EN),
                            r = e.get(i.N1),
                            s = e.get(i._1),
                            o = e.get(i.V3),
                            l = e.get(i.Lb),
                            c = e.get(i.wK),
                            u = e.get(i.tz),
                            g = e.get(i.$8),
                            d = e.get(i.Oo),
                            p = e.get(i.X4),
                            h = e.get(i.O9),
                            m = e.get(i.E),
                            _ = e.get(i.wH),
                            y = e.get(i.ok),
                            f = e.get(i.X8),
                            v = e.get(i.yq),
                            S = e.get(i.NN),
                            w = e.get(i.qN),
                            E = e.get(i.ro),
                            k = e.get(i.nM),
                            x = e.get(i.Ut),
                            A = e.get(i.K1),
                            b = e.get(i.eu),
                            L = e.get(i.SD),
                            T = e.get(i.aE),
                            j = e.get(i.ki),
                            N = e.get(i.c9),
                            O = e.get(i.en),
                            P = e.get(i.jQ),
                            M = e.get(i.cZ),
                            U = e.get(i.Zl),
                            C = e.get(i.CN),
                            I = e.get(i.P1),
                            R = e.get(i.zj),
                            W = e.get(i.re),
                            D = e.get(i.JM),
                            z = e.get(i.Lk),
                            H = e.get(i.$$),
                            G = e.get(i.sv),
                            K = e.get(i.gd),
                            $ = e.get(i.Ez),
                            F = e.get(i.u2),
                            B = e.get(i.TD),
                            Z = e.get(i.dh),
                            Y = e.get(i.LC),
                            J = e.get(i.PL),
                            X = e.get(i.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: r,
                            usersResource: s,
                            landingResource: o,
                            landing3Resource: l,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: g,
                            tracksResource: d,
                            topResource: p,
                            artistsResource: h,
                            slidesResource: m,
                            redAlertResource: _,
                            rotorResource: y,
                            waveResource: f,
                            searchResource: v,
                            searchPlaylistResource: S,
                            playlistResource: w,
                            playlistsResource: E,
                            pinResource: k,
                            metatagsResource: x,
                            tagResource: A,
                            feedResource: b,
                            wizard3Resource: L,
                            pinsResource: T,
                            musicHistoryResource: j,
                            dynamicPagesResource: N,
                            chartResource: O,
                            clipsResource: P,
                            lyricViewsResource: M,
                            nonMusicResource: U,
                            donationResource: C,
                            loaderResource: I,
                            lumenResource: R,
                            prefixlessResource: W,
                            streamsResource: D,
                            filtersResource: z,
                            ugcResource: H,
                            collectionResource: G,
                            adsResource: K,
                            personalResource: $,
                            familyResource: F,
                            childrenLandingResource: B,
                            promoResource: Z,
                            telemetryResource: Y,
                            labelsResource: J,
                            concertsResource: X,
                            wordsResource: e.get(i.dA),
                            wheelResource: e.get(i.$Y),
                        };
                    })(),
                    d = (0, s.U)(),
                    p = (0, a.N)().get(i.TK),
                    h = e.get(i.ni),
                    m = new r.si(),
                    _ = new r.fW();
                return {
                    ...g,
                    acqOffers: o,
                    disclaimerDictionary: l,
                    logger: d,
                    modelActionsLogger: p,
                    localStorage: m,
                    sessionStorage: _,
                    containerStorage: t,
                    authorization: n,
                    config: c,
                    clientSafeConfig: u,
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
                s = n(28869),
                o = n(14514),
                l = n(55040);
            let c = (0, i.cache)(async (e) => (0, l.M)(e, l.X)),
                u = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        n = (0, o.k)(a.pE[a.cy], t),
                        i = await c(n);
                    return (e, t) => {
                        let a = null == i ? void 0 : i[e.id],
                            s = '';
                        return ((Array.isArray(a) || 'string' == typeof a) && (s = new r.S(a, n).format(t)), Array.isArray(s) ? s.join('') : s);
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
                    for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) a[s - 2] = arguments[s];
                    let [o] = a,
                        l = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != o ? o : {}), options: e }),
                        u = {},
                        { href: g } = (0, r.u)(l, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(i)) {
                        let { href: n } = (0, r.u)(l, c({ linkType: 'alternate', host: t, lang: e }));
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
                    s = (0, i.useRef)([]),
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
                    { store: o, patchesRef: s }
                );
            };
        },
    },
]);
