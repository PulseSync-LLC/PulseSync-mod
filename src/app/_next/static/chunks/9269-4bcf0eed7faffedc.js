(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9269],
    {
        324: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => r });
            var a = n(28166);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(a.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        1220: (e, t, n) => {
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
        2218: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => l });
            var a = n(28166),
                r = n(77863);
            let i = '@yandexmusic';
            function l(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: i, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: i,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(a.Lz, '/').concat(e.url) } },
                      };
            }
        },
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => r });
            var a = n(67174);
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
        9184: (e) => {
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
        12526: (e, t, n) => {
            var a = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
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
        13012: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => r });
            var a = n(19049);
            function r(e, t) {
                var n;
                return (0, a.Y)(e, null != (n = null == t ? void 0 : t.maxLength) ? n : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        16818: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => o });
            var a = n(53647),
                r = n(4086),
                i = n(41928),
                l = n(65523),
                s = n(57448);
            let o = () => {
                let e = (0, i.N)(),
                    t = e.get(r.oo),
                    n = e.get(r.QG),
                    o = e.get(r.uM),
                    c = e.get(r.ff),
                    u = e.get(r.V4),
                    d = e.get(r.P0),
                    g = (0, s.f)(),
                    h = (0, l.U)(),
                    p = (0, i.N)().get(r.TK),
                    m = e.get(r.ni),
                    f = e.get(r.RD),
                    y = new a.si(),
                    _ = new a.fW();
                return {
                    ...g,
                    acqOffers: o,
                    disclaimerDictionary: c,
                    logger: h,
                    modelActionsLogger: p,
                    localStorage: y,
                    sessionStorage: _,
                    containerStorage: t,
                    authorization: n,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: m,
                    tagSandbox: f,
                };
            };
        },
        19049: (e, t, n) => {
            'use strict';
            function a(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (e.length <= t) return e;
                let a = e.substring(0, t),
                    r = n ? a.lastIndexOf(' ') : t,
                    i = ~r ? a.substring(0, r) : a;
                return ''.concat(i, '...');
            }
            n.d(t, { Y: () => a });
        },
        21424: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => a });
            let a = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        27169: (e, t, n) => {
            'use strict';
            var a;
            (n.d(t, { Q: () => a }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(a || (a = {})));
        },
        30144: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => p });
            var a = n(53548),
                r = n(58390),
                i = n(51611),
                l = n(65523);
            let s = {
                other: {
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-mobile-web-app-status-bar-style': 'black',
                    'apple-mobile-web-app-title': 'Яндекс Музыка',
                    robots: 'noyaca',
                },
            };
            var o = n(46511);
            async function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fullUrl: null, locale: null, url: null, tld: 'net', host: 'music.yandex.ru' },
                    t = await (0, o.W)(e.locale);
                return {
                    ...s,
                    title: t({ id: 'metadata.yandex-music-default-title' }),
                    description: t({ id: 'metadata.yandex-music-default-description' }),
                    alternates: { canonical: e.canonical },
                };
            }
            var u = n(88349),
                d = n(91241);
            let g = (e, t) => {
                    let n = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (n) return n;
                    let a = window.document.createElement('meta');
                    return (a.setAttribute(e, t), a);
                },
                h = (e) => {
                    let { title: t, description: n, openGraph: a } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof n)) {
                        let e = g('name', 'description');
                        (e.setAttribute('content', n), window.document.head.appendChild(e));
                    }
                    let r = '';
                    if (a) {
                        let e = 'string' == typeof a.title ? a.title : '',
                            t = 'string' == typeof a.description ? a.description : '',
                            n = Array.isArray(a.images) ? a.images[0] : null;
                        r = n && 'object' == typeof n && 'url' in n ? String(n.url) : '';
                        let i = g('property', 'og:title'),
                            l = g('property', 'og:description'),
                            s = g('property', 'og:image');
                        (i.setAttribute('content', e),
                            l.setAttribute('content', t),
                            s.setAttribute('content', r),
                            window.document.head.appendChild(i),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(s));
                    }
                },
                p = (e) => {
                    let { language: t } = (0, i.h)(),
                        n = (0, l.U)(),
                        s = (0, r.usePathname)(),
                        o = (0, r.useSearchParams)().toString();
                    (0, a.useEffect)(() => {
                        if (!e) return;
                        let a = !0,
                            r = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, u.f)(e.host) || d.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            i = window.location.pathname + window.location.search,
                            l = () => a && i === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(r);
                                    if (!l() || !t) return;
                                    let n = 'string' == typeof t.title && t.title.trim() ? t.title : (await c(r)).title;
                                    l() && h({ ...t, title: n });
                                } catch (e) {
                                    if (!l()) return;
                                    n.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(r);
                                        l() && h(e);
                                    } catch (e) {
                                        l() && n.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                a = !1;
                            }
                        );
                    }, [e, t, n, s, o]);
                };
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => O });
            var a = n(88800),
                r = n(65724),
                i = n(84961),
                l = n(53548),
                s = n(2058),
                o = n(88969);
            n(30282);
            var c = n(96817),
                u = n(52300),
                d = n(29504),
                g = n(87999),
                h = n(47149),
                p = n(84423),
                m = n(89846),
                f = n(64543),
                y = n(63582);
            let _ = (0, y.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: n } = (0, m.g)(),
                        { screen: a } = (0, f.j)();
                    return {
                        sendRefreshEvent: (0, l.useCallback)(() => {
                            if (!t || !n || !(null == a ? void 0 : a.pageId)) return;
                            let e = {
                                actionType: g.ActionType.Refresh,
                                userInteractionType: g.UserInteractionType.Tap,
                                entityType: g.EntityTypes.Error,
                                entityId: g.EntityTypes.SomethingWrong,
                                hash: n,
                                pageId: a.pageId,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, h.bv)(t, e);
                        }, [t, n, null == a ? void 0 : a.pageId]),
                    };
                }),
                v = (0, y.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let n = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: a } = (0, m.g)(),
                        { screen: r } = (0, f.j)();
                    (0, l.useEffect)(() => {
                        if (!n || !a || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: g.EntityTypes.Error,
                            entityId: g.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: a,
                            pageId: r.pageId,
                            pageStyle: g.PageStyles.Fullscreen,
                            pagePlacement: g.PagePlacements.Fullscreen,
                            mainObjectType: g.DomainObjectType.NonApplicable,
                            mainObjectId: g.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, h.z5)(n, t);
                    }, [n, e, a, null == r ? void 0 : r.pageId]);
                });
            var w = n(44230),
                k = n(4370),
                S = n(72288),
                E = n(97956),
                b = n(56248),
                A = n(90688),
                x = n(78940);
            let L = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var T = n(96856),
                j = n.n(T);
            let N = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: i } = e,
                    { slam: l } = (0, S.g)(),
                    { contentRef: s } = (0, w.g)(),
                    u = (0, x.Z)(k.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(j().root, t),
                    children: [
                        n &&
                            (0, a.jsx)(b.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(j().navigation, { [j().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: i,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, r.$)(j().content, { [j().content_shrink]: !n }),
                            children: [
                                (0, a.jsx)(A._V, { className: j().image, src: L.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, a.jsx)(d.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(d.HL, {
                                            className: j().text,
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
                                        className: j().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(d.HL, {
                                            className: j().buttonText,
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
            var P = n(9184),
                M = n.n(P);
            let O = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: i } = e,
                    { formatMessage: g } = (0, s.A)(),
                    h = (0, l.useContext)(S.P),
                    p = null == h ? void 0 : h.experiments.checkExperiment(E.z.WebNextUnstableMusicScreen, 'on'),
                    m = g(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                v(m);
                let { sendRefreshEvent: f } = _(),
                    y = (0, l.useCallback)(() => {
                        (f(), (window.location.href = k.Z.main.href));
                    }, [f]),
                    { contentRef: A } = (0, w.g)();
                return p
                    ? (0, a.jsx)(N, { className: t, withBackwardControl: n, onBack: i })
                    : (0, a.jsxs)('div', {
                          className: (0, r.$)(M().root, t),
                          children: [
                              n &&
                                  (0, a.jsx)(b.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(M().navigation, { [M().navigation_desktop]: !A }),
                                      withForwardControl: !1,
                                      onBackwardClick: i,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, r.$)(M().content, { [M().content_shrink]: !n }),
                                  children: [
                                      (0, a.jsx)(u.I, { className: M().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(d.DZ, { className: (0, r.$)(M().title, M().important), variant: 'h3', size: 'xs', children: m }),
                                      (0, a.jsxs)(d.HL, {
                                          className: (0, r.$)(M().text, M().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: y,
                                          className: M().button,
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
        34961: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => f, s: () => y });
            var a = n(88800),
                r = n(84961),
                i = n(58390),
                l = n(53548),
                s = n(35412),
                o = n(39499),
                c = n(89108),
                u = n(70003),
                d = n(72288),
                g = n(16818);
            (0, r.eO)(!1);
            let h = (0, l.createContext)(null),
                p = (e) => {
                    let { children: t, store: n, storeKey: r } = e,
                        i = (0, l.useMemo)(() => ({ store: n, storeKey: r }), [n, r]);
                    return (0, a.jsx)(h.Provider, { value: i, children: t });
                },
                m = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: r } = e;
                    return (
                        (0, i.useServerInsertedHTML)(() => {
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
                f = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        r = () => {
                            var e, t;
                            let a = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], a);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: i, nonce: l } = e,
                                s = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: h, patchesRef: f } = (0, u.m)({
                                    createStore: () => t({ ...s, rootStore: o }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(m, { nonce: l, patchKey: n, patchesRef: f }), (0, a.jsx)(p, { store: h, storeKey: n, children: i })],
                            });
                        },
                    };
                };
            function y(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, l.useContext)(h);
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
        40883: (e, t, n) => {
            'use strict';
            function a(e) {
                let { genreTitle: t, artists: n, messageFormatter: a } = e,
                    r = null;
                return (
                    Array.isArray(n) &&
                        (r = n
                            .slice(0, 3)
                            .map((e) => ('artist' in e ? e.artist.name : e.name))
                            .join(', ')),
                    r ? a({ id: 'metadata.genre-description' }, { genreTitle: t, artistsList: r }) : a({ id: 'metadata.genre-description-short' }, { genreTitle: t })
                );
            }
            n.d(t, { f: () => a });
        },
        45383: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => i });
            var a = n(67174);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                i = function (e, t) {
                    for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) i[l - 2] = arguments[l];
                    let [s] = i,
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
        46511: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => u });
            var a = n(27794),
                r = n(53548),
                i = n(72542),
                l = n(83602),
                s = n(21424),
                o = n(95330);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                u = async (e) => {
                    let t = (e || l.E.getDefaultLocale()).language,
                        n = (0, s.k)(i.pE[i.cy], t),
                        r = await c(n);
                    return (e, t) => {
                        let i = null == r ? void 0 : r[e.id],
                            l = '';
                        return ((Array.isArray(i) || 'string' == typeof i) && (l = new a.S(i, n).format(t)), Array.isArray(l) ? l.join('') : l);
                    };
                };
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
        53647: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => i, si: () => s, fW: () => g, MJ: () => d, jU: () => p, Bx: () => h });
            var a = n(77451);
            function r(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class i {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let l = (0, a.Jt)(e);
                        if (t) {
                            var n, i;
                            return null != (i = null == (n = r(l)) ? void 0 : n.value) ? i : null;
                        }
                        return null != l ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let i = r ? JSON.stringify({ value: t }) : t;
                        (0, a.hZ)(e, i, n);
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
            function l(e) {
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
                        n = l('localStorage');
                    if (!n) return null;
                    try {
                        var a;
                        let i = n.getItem(e) || void 0;
                        if (!t) return i;
                        let l = r(i);
                        if (!l) return null;
                        let s = null != (a = null == l ? void 0 : l.value) ? a : null;
                        if ((null == l ? void 0 : l.expires) && Date.now() > new Date(l.expires).getTime()) return (this.remove(e), null);
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
                    let a = l('localStorage');
                    if (a)
                        try {
                            a.setItem(e, JSON.stringify({ value: t, ...n }));
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
            var o = n(9519),
                c = n(39499);
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
                    let t = l('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, a, i;
                        let l = null != (a = t.getItem(e)) ? a : void 0;
                        return null != (i = null == (n = r(l)) ? void 0 : n.value) ? i : null;
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
                            a = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            r = e.get(n);
                        null != r && e.set(n, r, a);
                    });
            }
            function p(e) {
                let { name: t, group: n, value: a } = e;
                return a && 0 !== Object.keys(a).length
                    ? a.title
                        ? { [t]: { group: n, value: { ...a, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: a } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
        },
        53892: (e, t, n) => {
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
        57297: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => i });
            var a = n(35412),
                r = n(83602);
            function i(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: i, locale: l, ogImage: s, siteName: o, ogType: c, customImage: u } = e,
                    d = s ? { url: (0, a.lU)(s, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: i,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (l || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: d || u,
                };
            }
        },
        57448: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => i });
            var a = n(4086),
                r = n(41928);
            let i = () => {
                let e = (0, r.N)(),
                    t = e.get(a.$I),
                    n = e.get(a.EN),
                    i = e.get(a.N1),
                    l = e.get(a._1),
                    s = e.get(a.V3),
                    o = e.get(a.Lb),
                    c = e.get(a.wK),
                    u = e.get(a.tz),
                    d = e.get(a.$8),
                    g = e.get(a.Oo),
                    h = e.get(a.X4),
                    p = e.get(a.O9),
                    m = e.get(a.E),
                    f = e.get(a.wH),
                    y = e.get(a.ok),
                    _ = e.get(a.X8),
                    v = e.get(a.yq),
                    w = e.get(a.NN),
                    k = e.get(a.qN),
                    S = e.get(a.ro),
                    E = e.get(a.nM),
                    b = e.get(a.Ut),
                    A = e.get(a.K1),
                    x = e.get(a.eu),
                    L = e.get(a.SD),
                    T = e.get(a.aE),
                    j = e.get(a.ki),
                    N = e.get(a.c9),
                    P = e.get(a.en),
                    M = e.get(a.jQ),
                    O = e.get(a.cZ),
                    I = e.get(a.Zl),
                    U = e.get(a.CN),
                    C = e.get(a.P1),
                    R = e.get(a.zj),
                    W = e.get(a.re),
                    D = e.get(a.JM),
                    z = e.get(a.Lk),
                    H = e.get(a.$$),
                    G = e.get(a.sv),
                    K = e.get(a.gd),
                    $ = e.get(a.Ez),
                    B = e.get(a.u2),
                    Z = e.get(a.TD),
                    F = e.get(a.dh),
                    Y = e.get(a.LC),
                    J = e.get(a.PL),
                    X = e.get(a.DT);
                return {
                    accountResource: t,
                    afterTrackResource: n,
                    disclaimersResource: i,
                    usersResource: l,
                    landingResource: s,
                    landing3Resource: o,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: g,
                    topResource: h,
                    artistsResource: p,
                    slidesResource: m,
                    redAlertResource: f,
                    rotorResource: y,
                    waveResource: _,
                    searchResource: v,
                    searchPlaylistResource: w,
                    playlistResource: k,
                    playlistsResource: S,
                    pinResource: E,
                    metatagsResource: b,
                    tagResource: A,
                    feedResource: x,
                    wizard3Resource: L,
                    pinsResource: T,
                    musicHistoryResource: j,
                    dynamicPagesResource: N,
                    chartResource: P,
                    clipsResource: M,
                    lyricViewsResource: O,
                    nonMusicResource: I,
                    donationResource: U,
                    loaderResource: C,
                    lumenResource: R,
                    prefixlessResource: W,
                    streamsResource: D,
                    filtersResource: z,
                    ugcResource: H,
                    collectionResource: G,
                    adsResource: K,
                    personalResource: $,
                    familyResource: B,
                    childrenLandingResource: Z,
                    promoResource: F,
                    telemetryResource: Y,
                    labelsResource: J,
                    concertsResource: X,
                    wordsResource: e.get(a.dA),
                    wheelResource: e.get(a.$Y),
                };
            };
        },
        65523: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => s });
            var a = n(4086),
                r = n(41928),
                i = n(44084);
            let l = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof i.r) return e;
                        let t = l.get(e);
                        if (t) return t;
                        let n = {
                            log: (t, n) => e.info(t, n),
                            trace: (t, n) => e.trace(t, n),
                            debug: (t, n) => e.debug(t, n),
                            info: (t, n) => e.info(t, n),
                            warn: (t, n) => e.warn(t, n),
                            error: (t, n) => e.error(t, n),
                            fatal: (t, n) => e.fatal(t, n),
                            child: (t) => e.child(t),
                        };
                        return (l.set(e, n), n);
                    })((0, r.N)().get(a.Zf));
        },
        70003: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => i });
            var a = n(5120),
                r = n(53548);
            let i = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: i } = e,
                    l = (0, r.useRef)([]),
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
                        return (e(), window.addEventListener(i, e), () => window.removeEventListener(i, e));
                    }, [n, i, s]),
                    { store: s, patchesRef: l }
                );
            };
        },
        72542: (e, t, n) => {
            'use strict';
            n.d(t, { Xn: () => i, cy: () => r, pE: () => a });
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
                i = 'ru-RU';
        },
        77863: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => a });
            var a = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        83602: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => d });
            var a = n(9519),
                r = n(72542),
                i = n(21424),
                l = n(4653);
            let s = (e) => l.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = n(1220);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var u = n(95330);
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
                    return c((0, i.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, i.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, n, a;
                    let r = (0, i.k)(this.config, e);
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
                    return this.config.langs.map((e) => c((0, i.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, i.k)(this.config, this.language);
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
                            u = ((e = this.config), new l.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: s(navigator.languages.join()),
                            });
                        }
                    } else [u] = s(e) || [];
                    this.language = (0, i.k)(this.config, u);
                }
            }
        },
        89108: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => r, s: () => a });
            let a = 'yMusicStatePatchesUpdated',
                r = 'yMusicPageStatePatchesUpdated';
        },
        91241: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => a });
            let a = 'ru';
        },
        95330: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, X: () => o });
            var a = n(39499),
                r = n(72542);
            let i = async (e) => e.then((e) => e.default),
                l = r.pE[r.cy],
                s = l.langs.reduce((e, t) => (e.set(t, async () => i(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = l.langs.reduce((e, t) => (e.set(t, async () => i(n(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                        n = t.get(e),
                        r = t.get('ru');
                    if (n) return n();
                    if (r) return r();
                    throw new a.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        96856: (e) => {
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
    },
]);
