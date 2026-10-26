(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5997],
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
        10959: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => r });
            var a = n(44806);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: n, getExplicitContent: r, userRegion: l } = e;
                return 'ru' === l && t(a.z.WebNextFooterDisclaimer, 'on') ? n() : r();
            };
        },
        12234: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => r });
            var a = n(71872);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(a.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, n) => {
            var a = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 9088] };
            function r(e) {
                if (!n.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    r = t[0];
                return n.e(t[1]).then(() => n.t(r, 19));
            }
            ((r.keys = () => Object.keys(a)), (r.id = 12526), (e.exports = r));
        },
        14514: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => a });
            let a = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        22413: (e, t, n) => {
            'use strict';
            n.d(t, { Jt: () => l, TF: () => s, hZ: () => i });
            var a = function () {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, a = arguments.length; n < a; n++)
                            for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e;
                    }).apply(this, arguments);
            };
            function r(e, t) {
                if (!t) return '';
                var n = '; ' + e;
                return !0 === t ? n : n + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, n = e ? e.split('; ') : [], a = 0; a < n.length; a++) {
                        var r = n[a].split('='),
                            l = r.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(r[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function i(e, t, n) {
                var l;
                document.cookie =
                    ((l = a({ path: '/' }, n)),
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
                                r('Expires', e.expires ? e.expires.toUTCString() : '') +
                                r('Domain', e.domain) +
                                r('Path', e.path) +
                                r('Secure', e.secure) +
                                r('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function s(e, t) {
                i(e, '', a(a({}, t), { expires: -1 }));
            }
        },
        26076: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => i });
            var a = n(25839);
            n(93588);
            var r = n(400),
                l = n.n(r);
            let i = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: l().empty });
            };
        },
        27935: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => l });
            var a = n(89288),
                r = n(28869);
            function l(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: l, locale: i, ogImage: s, siteName: o, ogType: c, customImage: u } = e,
                    d = s ? { url: (0, a.lU)(s, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: l,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (i || r.E.getDefaultLocale()).toString().replace('-', '_'),
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
        28869: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => d });
            var a = n(58025),
                r = n(78773),
                l = n(14514),
                i = n(56107);
            let s = (e) => i.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = n(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var u = n(55040);
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
                    return c((0, l.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, l.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, n, a;
                    let r = (0, l.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (n = this.storage) || n.set(r), null == (a = this.changeLanguageHandler) || a.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, l.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, l.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, u.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: n, changeLanguageHandler: o, logger: c }) {
                    let u;
                    if (
                        ((0, a._)(this, 'language', void 0),
                        (0, a._)(this, 'storage', void 0),
                        (0, a._)(this, 'dictionary', void 0),
                        (0, a._)(this, 'config', void 0),
                        (0, a._)(this, 'logger', void 0),
                        (0, a._)(this, 'changeLanguageHandler', void 0),
                        (0, a._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = n),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var d;
                            let e;
                            u = ((e = this.config), new i.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: s(navigator.languages.join()),
                            });
                        }
                    } else [u] = s(e) || [];
                    this.language = (0, l.k)(this.config, u);
                }
            }
        },
        41016: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => i });
            var a = n(71872),
                r = n(80461);
            let l = '@yandexmusic';
            function i(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: l, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: l,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(a.Lz, '/').concat(e.url) } },
                      };
            }
        },
        43354: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => r, P: () => l });
            var a = n(74631);
            let r = (0, a.createContext)(null),
                l = () => (0, a.useContext)(r);
        },
        46646: (e, t, n) => {
            var a = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!n.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    r = t[0];
                return n.e(t[1]).then(() => n.t(r, 19));
            }
            ((r.keys = () => Object.keys(a)), (r.id = 46646), (e.exports = r));
        },
        53712: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => r });
            var a = n(25895);
            let r = {
                main: (0, a.u)('/'),
                chart: (0, a.u)('/chart'),
                chartPodcasts: (0, a.u)('/chart/podcasts'),
                collection: (0, a.u)('/collection'),
                collectionAlbums: (0, a.u)('/collection/albums'),
                collectionArtists: (0, a.u)('/collection/artists'),
                collectionClips: (0, a.u)('/collection/clips'),
                collectionDislikes: (0, a.u)('/collection/dislikes'),
                collectionKids: (0, a.u)('/collection/kids'),
                collectionKidsAlbums: (0, a.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, a.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, a.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, a.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, a.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, a.u)('/collection/multivibes'),
                collectionPlaylists: (0, a.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, a.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, a.u)('/collection/playlists/liked'),
                collectionShelf: (0, a.u)('/collection/shelf'),
                collectionShelfLiked: (0, a.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, a.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, a.u)('/collection/shelf/recently-played'),
                concerts: (0, a.u)('/concerts'),
                kids: (0, a.u)('/kids'),
                mixes: (0, a.u)('/mixes'),
                musicHistory: (0, a.u)('/music-history'),
                muzmarket: (0, a.u)('/muzmarket'),
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                multivibe: (0, a.u)('/multivibe'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        55040: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, X: () => o });
            var a = n(36432),
                r = n(78773);
            let l = async (e) => e.then((e) => e.default),
                i = r.pE[r.cy],
                s = i.langs.reduce((e, t) => (e.set(t, async () => l(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = i.langs.reduce((e, t) => (e.set(t, async () => l(n(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                        n = t.get(e),
                        r = t.get('ru');
                    if (n) return n();
                    if (r) return r();
                    throw new a.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        61288: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => r });
            let a = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        61732: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => r });
            let a = (e, t) => {
                    let n = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (n) return n;
                    let a = window.document.createElement('meta');
                    return (a.setAttribute(e, t), a);
                },
                r = (e) => {
                    let { title: t, description: n, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof n)) {
                        let e = a('name', 'description');
                        (e.setAttribute('content', n), window.document.head.appendChild(e));
                    }
                    let l = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            n = Array.isArray(r.images) ? r.images[0] : null;
                        l = n && 'object' == typeof n && 'url' in n ? String(n.url) : '';
                        let i = a('property', 'og:title'),
                            s = a('property', 'og:description'),
                            o = a('property', 'og:image');
                        (i.setAttribute('content', e),
                            s.setAttribute('content', t),
                            o.setAttribute('content', l),
                            window.document.head.appendChild(i),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(o));
                    }
                };
        },
        64715: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => P });
            var a = n(25839),
                r = n(82298),
                l = n(88204),
                i = n(74631),
                s = n(39004),
                o = n(8487);
            n(93588);
            var c = n(4071),
                u = n(66738),
                d = n(4254),
                g = n(67379),
                p = n(44031),
                h = n(87277),
                m = n(59450),
                _ = n(84e3),
                y = n(97952),
                f = n(89192),
                E = n(53712),
                v = n(27954),
                x = n(44806),
                k = n(15270),
                T = n(23818),
                S = n(85686);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var L = n(27990),
                w = n.n(L);
            let b = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { slam: l } = (0, v.g)(),
                    { contentRef: i } = (0, f.g)(),
                    s = (0, S.Z)(E.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(w().root, t),
                    children: [
                        n &&
                            (0, a.jsx)(k.L, { withBackwardFallback: '/', className: (0, r.$)(w().navigation, { [w().navigation_desktop]: !i }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, r.$)(w().content, { [w().content_shrink]: !n }),
                            children: [
                                (0, a.jsx)(T._V, { className: w().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: w().message,
                                    children: [
                                        (0, a.jsx)(d.DZ, {
                                            className: w().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(d.HL, {
                                            className: w().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: w().button,
                                        onClick: s,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(d.HL, {
                                            className: w().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var N = n(68854),
                O = n.n(N);
            let P = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: l } = (0, s.A)(),
                    T = (0, i.useContext)(v.P),
                    S = null == T ? void 0 : T.experiments.checkExperiment(x.z.WebNextUnstableMusicScreen, 'on'),
                    A = l(S ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: n } = (0, m.gf)(),
                        { pageId: a } = (0, y.$)(),
                        r = (0, _.U)();
                    (0, i.useEffect)(() => {
                        if (!t || !n || !a) return;
                        let l = (0, g.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: a,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, h.z5)(t.evgenInstance, l);
                    }, [t, e, n, a, r]);
                })(A);
                let { sendRefreshEvent: L } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: n } = (0, y.$)(),
                            a = (0, _.U)();
                        return {
                            sendRefreshEvent: (0, i.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let r = (0, g.F)({
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
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, h.bv)(e.evgenInstance, r);
                            }, [e, t, n, a]),
                        };
                    })(),
                    w = (0, i.useCallback)(() => {
                        (L(), (window.location.href = E.Z.main.href));
                    }, [L]),
                    { contentRef: N } = (0, f.g)();
                return S
                    ? (0, a.jsx)(b, { className: t, withBackwardControl: n })
                    : (0, a.jsxs)('div', {
                          className: (0, r.$)(O().root, t),
                          children: [
                              n &&
                                  (0, a.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(O().navigation, { [O().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, r.$)(O().content, { [O().content_shrink]: !n }),
                                  children: [
                                      (0, a.jsx)(u.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(d.DZ, { className: (0, r.$)(O().title, O().important), variant: 'h3', size: 'xs', children: A }),
                                      (0, a.jsxs)(d.HL, {
                                          className: (0, r.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: w,
                                          className: O().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(o.A, { id: 'page-error.restart-app-button' })],
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
            n.d(t, { V8: () => l, si: () => s, fW: () => g, MJ: () => d, jU: () => h, Bx: () => p });
            var a = n(22413);
            function r(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let i = (0, a.Jt)(e);
                        if (t) {
                            var n, l;
                            return null != (l = null == (n = r(i)) ? void 0 : n.value) ? l : null;
                        }
                        return null != i ? i : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let l = r ? JSON.stringify({ value: t }) : t;
                        (0, a.hZ)(e, l, n);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, a.TF)(e);
                    } catch (e) {}
                }
            }
            function i(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = i('localStorage');
                    if (!n) return null;
                    try {
                        var a;
                        let l = n.getItem(e) || void 0;
                        if (!t) return l;
                        let i = r(l);
                        if (!i) return null;
                        let s = null != (a = null == i ? void 0 : i.value) ? a : null;
                        if ((null == i ? void 0 : i.expires) && Date.now() > new Date(i.expires).getTime()) return (this.remove(e), null);
                        return s;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e));
                    }
                    let a = i('localStorage');
                    if (a)
                        try {
                            a.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = n(58025),
                c = n(36432);
            class u extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...a } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...a }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
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
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = i('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, a, l;
                        let i = null != (a = t.getItem(e)) ? a : void 0;
                        return null != (l = null == (n = r(i)) ? void 0 : n.value) ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = i('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('sessionStorage');
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
                            a = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            r = e.get(n);
                        null != r && e.set(n, r, a);
                    });
            }
            function h(e) {
                let { name: t, group: n, value: a } = e;
                return a && 0 !== Object.keys(a).length
                    ? a.title
                        ? { [t]: { group: n, value: { ...a, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: a } } }
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
        78773: (e, t, n) => {
            'use strict';
            n.d(t, { Xn: () => l, cy: () => r, pE: () => a });
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
                l = 'ru-RU';
        },
        80461: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => a });
            var a = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        80499: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => _, s: () => y });
            var a = n(25839),
                r = n(88204),
                l = n(84059),
                i = n(74631),
                s = n(89288),
                o = n(36432),
                c = n(94421),
                u = n(99989),
                d = n(27954),
                g = n(83382);
            (0, r.eO)(!1);
            let p = (0, i.createContext)(null),
                h = (e) => {
                    let { children: t, store: n, storeKey: r } = e,
                        l = (0, i.useMemo)(() => ({ store: n, storeKey: r }), [n, r]);
                    return (0, a.jsx)(p.Provider, { value: l, children: t });
                },
                m = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: r } = e;
                    return (
                        (0, l.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, a.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, s.Gr)(t), ");\n        window.dispatchEvent(new Event('")
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
                        r = () => {
                            var e, t;
                            let a = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], a);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: l, nonce: i } = e,
                                s = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: p, patchesRef: _ } = (0, u.m)({
                                    createStore: () => t({ ...s, rootStore: o }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(m, { nonce: i, patchKey: n, patchesRef: _ }), (0, a.jsx)(h, { store: p, storeKey: n, children: l })],
                            });
                        },
                    };
                };
            function y(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, i.useContext)(p);
                if (!n || n.storeKey !== e) {
                    var a;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (a = null == n ? void 0 : n.storeKey) ? a : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        82706: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => a });
            let a = {
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
            n.d(t, { Y: () => s });
            var a = n(67311),
                r = n(36484),
                l = n(62562),
                i = n(84e3);
            let s = () => {
                let e = (0, l.N)(),
                    t = e.get(r.oo),
                    n = e.get(r.QG),
                    s = e.get(r.uM),
                    o = e.get(r.ff),
                    c = e.get(r.V4),
                    u = e.get(r.P0),
                    d = (() => {
                        let e = (0, l.N)(),
                            t = e.get(r.$I),
                            n = e.get(r.EN),
                            a = e.get(r.N1),
                            i = e.get(r._1),
                            s = e.get(r.V3),
                            o = e.get(r.Lb),
                            c = e.get(r.wK),
                            u = e.get(r.tz),
                            d = e.get(r.$8),
                            g = e.get(r.Oo),
                            p = e.get(r.X4),
                            h = e.get(r.O9),
                            m = e.get(r.E),
                            _ = e.get(r.wH),
                            y = e.get(r.ok),
                            f = e.get(r.X8),
                            E = e.get(r.yq),
                            v = e.get(r.NN),
                            x = e.get(r.qN),
                            k = e.get(r.ro),
                            T = e.get(r.nM),
                            S = e.get(r.Ut),
                            A = e.get(r.K1),
                            L = e.get(r.eu),
                            w = e.get(r.SD),
                            b = e.get(r.aE),
                            N = e.get(r.ki),
                            O = e.get(r.c9),
                            P = e.get(r.en),
                            R = e.get(r.jQ),
                            j = e.get(r.cZ),
                            I = e.get(r.Zl),
                            C = e.get(r.CN),
                            M = e.get(r.P1),
                            U = e.get(r.zj),
                            D = e.get(r.re),
                            H = e.get(r.JM),
                            W = e.get(r.Lk),
                            G = e.get(r.$$),
                            Y = e.get(r.sv),
                            F = e.get(r.gd),
                            z = e.get(r.Ez),
                            K = e.get(r.u2),
                            X = e.get(r.TD),
                            $ = e.get(r.dh),
                            J = e.get(r.LC),
                            B = e.get(r.PL),
                            Z = e.get(r.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: a,
                            usersResource: i,
                            landingResource: s,
                            landing3Resource: o,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: p,
                            artistsResource: h,
                            slidesResource: m,
                            redAlertResource: _,
                            rotorResource: y,
                            waveResource: f,
                            searchResource: E,
                            searchPlaylistResource: v,
                            playlistResource: x,
                            playlistsResource: k,
                            pinResource: T,
                            metatagsResource: S,
                            tagResource: A,
                            feedResource: L,
                            wizard3Resource: w,
                            pinsResource: b,
                            musicHistoryResource: N,
                            dynamicPagesResource: O,
                            chartResource: P,
                            clipsResource: R,
                            lyricViewsResource: j,
                            nonMusicResource: I,
                            donationResource: C,
                            loaderResource: M,
                            lumenResource: U,
                            prefixlessResource: D,
                            streamsResource: H,
                            filtersResource: W,
                            ugcResource: G,
                            collectionResource: Y,
                            adsResource: F,
                            personalResource: z,
                            familyResource: K,
                            childrenLandingResource: X,
                            promoResource: $,
                            telemetryResource: J,
                            labelsResource: B,
                            concertsResource: Z,
                            wordsResource: e.get(r.dA),
                            wheelResource: e.get(r.$Y),
                        };
                    })(),
                    g = (0, i.U)(),
                    p = (0, l.N)().get(r.TK),
                    h = e.get(r.ni),
                    m = new a.si(),
                    _ = new a.fW();
                return {
                    ...d,
                    acqOffers: s,
                    disclaimerDictionary: o,
                    logger: g,
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
            var a;
            (n.d(t, { $: () => a }),
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
                })(a || (a = {})));
        },
        89221: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => u });
            var a = n(13580),
                r = n(74631),
                l = n(78773),
                i = n(28869),
                s = n(14514),
                o = n(55040);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                u = async (e) => {
                    let t = (e || i.E.getDefaultLocale()).language,
                        n = (0, s.k)(l.pE[l.cy], t),
                        r = await c(n);
                    return (e, t) => {
                        let l = null == r ? void 0 : r[e.id],
                            i = '';
                        return ((Array.isArray(l) || 'string' == typeof l) && (i = new a.S(l, n).format(t)), Array.isArray(i) ? i.join('') : i);
                    };
                };
        },
        89514: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        90250: (e, t, n) => {
            'use strict';
            n.d(t, { T: () => h, Q: () => m });
            var a = n(74631),
                r = n(61732),
                l = n(12234),
                i = n(89221),
                s = n(27935),
                o = n(41016),
                c = n(80461),
                u = n(95445);
            async function d(e, t) {
                var n, a, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, i.W)(t.locale),
                    g = d({ id: 'metadata.label-albums-title' }, { labelName: e.name, labelType: e.type }),
                    p = d({ id: 'metadata.label-albums-description' }, { labelName: e.name, labelType: e.type });
                return {
                    title: g,
                    description: p,
                    openGraph: (0, s.i)({
                        ogTitle: g,
                        ogDescription: p,
                        fullUrl: null != (n = t.fullUrl) ? n : '',
                        locale: t.locale,
                        siteName: d({ id: 'metadata.yandex-music' }),
                        ogType: 'music.playlist',
                    }),
                    twitter: (0, o.H)({ cardType: c.W.APP, title: g, url: t.url, appName: d({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, l.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: d({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, u.S)('/label/:labelId/albums', t.tld, { params: { labelId: e.id } }),
                };
            }
            async function g(e, t) {
                var n, a, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, i.W)(t.locale),
                    g = d({ id: 'metadata.label-artists-title' }, { labelName: e.name, labelType: e.type }),
                    p = d({ id: 'metadata.label-artists-description' }, { labelName: e.name, labelType: e.type });
                return {
                    title: g,
                    description: p,
                    openGraph: (0, s.i)({
                        ogTitle: g,
                        ogDescription: p,
                        fullUrl: null != (n = t.fullUrl) ? n : '',
                        locale: t.locale,
                        siteName: d({ id: 'metadata.yandex-music' }),
                        ogType: 'music.playlist',
                    }),
                    twitter: (0, o.H)({ cardType: c.W.APP, title: g, url: t.url, appName: d({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, l.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: d({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, u.S)('/label/:labelId/artists', t.tld, { params: { labelId: e.id } }),
                };
            }
            async function p(e, t) {
                var n, a, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, i.W)(t.locale),
                    g = d({ id: 'metadata.label-title' }, { labelTitle: e.name, labelType: e.type }),
                    p = d({ id: 'metadata.label-description' }, { labelTitle: e.name, labelType: e.type });
                return {
                    title: g,
                    description: p,
                    openGraph: (0, s.i)({
                        ogTitle: g,
                        ogDescription: p,
                        fullUrl: null != (n = t.fullUrl) ? n : '',
                        locale: t.locale,
                        siteName: d({ id: 'metadata.yandex-music' }),
                        ogType: 'music.playlist',
                    }),
                    twitter: (0, o.H)({ cardType: c.W.APP, title: g, url: t.url, appName: d({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, l.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: d({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, u.S)('/label/:labelId', t.tld, { params: { labelId: e.id } }),
                };
            }
            var h = (function (e) {
                return ((e.ROOT = 'root'), (e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), e);
            })({});
            let m = (e, t) => {
                (0, a.useEffect)(() => {
                    switch (t) {
                        case 'root':
                            p(e, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, r.j)(e);
                            });
                            break;
                        case 'albums':
                            d(e, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, r.j)(e);
                            });
                            break;
                        case 'artists':
                            g(e, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, r.j)(e);
                            });
                    }
                }, [null == e ? void 0 : e.id, null == e ? void 0 : e.type, null == e ? void 0 : e.name, t, e]);
            };
        },
        94421: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => r, s: () => a });
            let a = 'yMusicStatePatchesUpdated',
                r = 'yMusicPageStatePatchesUpdated';
        },
        95445: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => l });
            var a = n(25895);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                l = function (e, t) {
                    for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) l[i - 2] = arguments[i];
                    let [s] = l,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != s ? s : {}), options: e }),
                        u = {},
                        { href: d } = (0, a.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: n } = (0, a.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = n;
                    }
                    return { canonical: d, languages: u };
                };
        },
        99401: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => A });
            var a = n(25839),
                r = n(82298),
                l = n(88204),
                i = n(39004),
                s = n(93588),
                o = n(43354),
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
            let u = (e, t, n) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(n);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(n);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(n);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(n);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(n);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: n, tld: a, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, a, n) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, a, n) },
                    };
                };
            var g = n(10959),
                p = n(89514);
            let h = (e) => e(new Date(), (0, p.m)());
            var m = n(96433),
                _ = n(27954),
                y = n(400),
                f = n.n(y),
                E = n(61493),
                v = n(4254),
                x = n(97522);
            let k = (e) => {
                    let { className: t, data: n } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(f().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, a.jsx)(x.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, r.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(x.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, a.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: f().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: r } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, a.jsx)(x.N, { target: '_blank', href: r, className: f().link, 'data-test-id': E.S7.FOOTER_LINK, children: n }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: n } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, r.$)(f().root, f().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, a.jsx)(T, { links: n.links, disclaimer: n.disclaimer }), (0, a.jsx)(k, { data: n.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, _.g)(),
                    { formatDate: r, formatMessage: l } = (0, i.A)(),
                    { language: s } = (0, m.h)(),
                    o = d({ formatMessage: l, language: s, tld: n.tld, year: h(r) });
                return (0, a.jsx)(k, { className: t, data: o });
            });
            let A = (0, l.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: l, location: p, user: y } = (0, _.g)(),
                    { formatDate: E, formatMessage: v } = (0, i.A)(),
                    { isEnabled: x } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, m.h)(),
                    T = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: a, language: r, tld: l, userRegion: i, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: a, language: r, userRegion: l } = e,
                                    i = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, a, r) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, a, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, a, r) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, a, r) },
                                    g = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, a, r) },
                                    p = [i, o, d];
                                return (n && 'ru' === l && p.push(s), p.push(g), p);
                            })({ formatMessage: n, isWebApplication: a, language: r, tld: l, userRegion: i }),
                            disclaimer: (0, g.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => n({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => n({ id: 'footer.explicit-content' }),
                                userRegion: i,
                            }),
                            copyrights: d({ formatMessage: n, language: r, tld: l, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: s.$3,
                        tld: p.tld,
                        language: k,
                        userRegion: y.account.data.userSessionRegionIso,
                        year: h(E),
                    });
                return (0, a.jsx)(S, { className: (0, r.$)({ [f().root_withOffsetForDeeplink]: x }, n), data: T });
            });
        },
        99989: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => l });
            var a = n(28410),
                r = n(74631);
            let l = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: l } = e,
                    i = (0, r.useRef)([]),
                    [s] = (0, r.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, a.X6)(e, t);
                        return e;
                    });
                return (
                    (0, r.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, a.X6)(s, e);
                        };
                        return (e(), window.addEventListener(l, e), () => window.removeEventListener(l, e));
                    }, [n, l, s]),
                    { store: s, patchesRef: i }
                );
            };
        },
    },
]);
