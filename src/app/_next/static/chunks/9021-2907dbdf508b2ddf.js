(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9021],
    {
        5245: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => a });
            var r = n(60754),
                i = n(55178);
            let a = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: a } = e,
                    o = (0, i.useRef)([]),
                    [l] = (0, i.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, i.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(l, e);
                        };
                        return e(), window.addEventListener(a, e), () => window.removeEventListener(a, e);
                    }, [n, a, l]),
                    { store: l, patchesRef: o }
                );
            };
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
            (i.keys = () => Object.keys(r)), (i.id = 12526), (e.exports = i);
        },
        14190: (e, t, n) => {
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
        18870: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { $: () => r }),
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
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var r = n(36477);
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
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        22556: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => i });
            let r = (e, t) => {
                    let n = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (n) return n;
                    let r = window.document.createElement('meta');
                    return r.setAttribute(e, t), r;
                },
                i = (e) => {
                    let { title: t, description: n, openGraph: i } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof n)) {
                        let e = r('name', 'description');
                        e.setAttribute('content', n), window.document.head.appendChild(e);
                    }
                    let a = '';
                    if (i) {
                        let e = 'string' == typeof i.title ? i.title : '',
                            t = 'string' == typeof i.description ? i.description : '',
                            n = Array.isArray(i.images) ? i.images[0] : null;
                        a = n && 'object' == typeof n && 'url' in n ? String(n.url) : '';
                        let o = r('property', 'og:title'),
                            l = r('property', 'og:description'),
                            s = r('property', 'og:image');
                        o.setAttribute('content', e),
                            l.setAttribute('content', t),
                            s.setAttribute('content', a),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(s);
                    }
                };
        },
        24535: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => a });
            var r = n(80451),
                i = n(73422);
            function a(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: a, locale: o, ogImage: l, siteName: s, ogType: c, customImage: u } = e,
                    g = l ? { url: (0, r.createAvatarUrl)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: a,
                    ...(c && { type: c }),
                    siteName: s,
                    locale: (o || i.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: g || u,
                };
            }
        },
        26365: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => a });
            var r = n(36477);
            let i = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                a = function (e, t) {
                    for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o];
                    let [l] = a,
                        s = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        u = {},
                        { href: g } = (0, r.u)(s, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(i)) {
                        let { href: n } = (0, r.u)(s, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = n;
                    }
                    return { canonical: g, languages: u };
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
        31726: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => l });
            var r = n(54280),
                i = n(70204),
                a = n(34186),
                o = n(62376);
            let l = () => {
                let e = (0, a.N)(),
                    t = e.get(i.oo),
                    n = e.get(i.uM),
                    l = e.get(i.ff),
                    s = e.get(i.tw),
                    c = e.get(i.P0),
                    u = (() => {
                        let e = (0, a.N)(),
                            t = e.get(i.$I),
                            n = e.get(i.EN),
                            r = e.get(i.N1),
                            o = e.get(i._1),
                            l = e.get(i.V3),
                            s = e.get(i.Lb),
                            c = e.get(i.wK),
                            u = e.get(i.tz),
                            g = e.get(i.$8),
                            d = e.get(i.Oo),
                            h = e.get(i.X4),
                            p = e.get(i.O9),
                            f = e.get(i.E),
                            m = e.get(i.wH),
                            y = e.get(i.ok),
                            _ = e.get(i.X8),
                            v = e.get(i.yq),
                            E = e.get(i.NN),
                            A = e.get(i.qN),
                            S = e.get(i.ro),
                            w = e.get(i.nM),
                            k = e.get(i.Ut),
                            L = e.get(i.K1),
                            x = e.get(i.eu),
                            T = e.get(i.aE),
                            O = e.get(i.ki),
                            b = e.get(i.c9),
                            N = e.get(i.en),
                            P = e.get(i.jQ),
                            j = e.get(i.cZ),
                            C = e.get(i.Zl),
                            I = e.get(i.CN),
                            R = e.get(i.P1),
                            M = e.get(i.zj),
                            W = e.get(i.re),
                            U = e.get(i.JM),
                            D = e.get(i.Lk),
                            G = e.get(i.$$),
                            H = e.get(i.sv),
                            K = e.get(i.gd),
                            z = e.get(i.Ez),
                            F = e.get(i.u2),
                            $ = e.get(i.TD),
                            B = e.get(i.dh),
                            Y = e.get(i.LC),
                            Z = e.get(i.PL),
                            J = e.get(i.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: r,
                            usersResource: o,
                            landingResource: l,
                            landing3Resource: s,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: g,
                            tracksResource: d,
                            topResource: h,
                            artistsResource: p,
                            slidesResource: f,
                            redAlertResource: m,
                            rotorResource: y,
                            waveResource: _,
                            searchResource: v,
                            searchPlaylistResource: E,
                            playlistResource: A,
                            playlistsResource: S,
                            pinResource: w,
                            metatagsResource: k,
                            tagResource: L,
                            feedResource: x,
                            pinsResource: T,
                            musicHistoryResource: O,
                            dynamicPagesResource: b,
                            chartResource: N,
                            clipsResource: P,
                            lyricViewsResource: j,
                            nonMusicResource: C,
                            donationResource: I,
                            loaderResource: R,
                            lumenResource: M,
                            prefixlessResource: W,
                            streamsResource: U,
                            filtersResource: D,
                            ugcResource: G,
                            collectionResource: H,
                            adsResource: K,
                            personalResource: z,
                            familyResource: F,
                            childrenLandingResource: $,
                            promoResource: B,
                            telemetryResource: Y,
                            labelsResource: Z,
                            concertsResource: J,
                            wordsResource: e.get(i.dA),
                            wheelResource: e.get(i.$Y),
                        };
                    })(),
                    g = (0, o.U)(),
                    d = (0, a.N)().get(i.TK),
                    h = e.get(i.ni),
                    p = new r.si(),
                    f = new r.fW();
                return {
                    ...u,
                    acqOffers: n,
                    disclaimerDictionary: l,
                    logger: g,
                    modelActionsLogger: d,
                    localStorage: p,
                    sessionStorage: f,
                    containerStorage: t,
                    config: s,
                    clientSafeConfig: c,
                    landingSdk: h,
                };
            };
        },
        31995: (e, t, n) => {
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
        42125: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => u });
            var r = n(3266),
                i = n(55178),
                a = n(14190),
                o = n(73422),
                l = n(84570),
                s = n(64552);
            let c = (0, i.cache)(async (e) => (0, s.M)(e, s.X)),
                u = async (e) => {
                    let t = (e || o.E.getDefaultLocale()).language,
                        n = (0, l.k)(a.pE[a.cy], t),
                        i = await c(n);
                    return (e, t) => {
                        let a = null == i ? void 0 : i[e.id],
                            o = '';
                        return (Array.isArray(a) || 'string' == typeof a) && (o = new r.S(a, n).format(t)), Array.isArray(o) ? o.join('') : o;
                    };
                };
        },
        43993: (e, t, n) => {
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
        44242: (e, t, n) => {
            'use strict';
            function r(e) {
                return { ios: { app_name: e.appName, app_store_id: '520797969', url: 'yandexmusic:/'.concat(e.additional.url) }, web: { url: e.additional.fullUrl } };
            }
            n.d(t, { X: () => r });
        },
        44338: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => i });
            var r = n(31995);
            function i(e, t) {
                var n;
                return (0, r.Y)(e, null != (n = null == t ? void 0 : t.maxLength) ? n : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        45066: (e, t, n) => {
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
        46646: (e, t, n) => {
            var r = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
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
            (i.keys = () => Object.keys(r)), (i.id = 46646), (e.exports = i);
        },
        47216: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a });
            var r = n(94821);
            let i = '@yandexmusic';
            function a(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: i, title: e.title, description: e.description }
                    : { card: r.W.APP, site: i, title: e.title, app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: 'yandexmusic:/'.concat(e.url) } } };
            }
        },
        49259: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => m, s: () => y });
            var r = n(32290),
                i = n(29222),
                a = n(96103),
                o = n(21916),
                l = n(55178),
                s = n(80451),
                c = n(96218),
                u = n(5245),
                g = n(57594),
                d = n(31726);
            (0, a.eO)(!1);
            let h = (0, l.createContext)(null),
                p = (e) => {
                    let { children: t, store: n, storeKey: i } = e,
                        a = (0, l.useMemo)(() => ({ store: n, storeKey: i }), [n, i]);
                    return (0, r.jsx)(h.Provider, { value: a, children: t });
                },
                f = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: i } = e;
                    return (
                        (0, o.useServerInsertedHTML)(() => {
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
                                                  .concat((0, s.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
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
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: o } = e,
                                l = (0, d.Y)(),
                                s = (0, g.g)(),
                                { store: h, patchesRef: m } = (0, u.m)({
                                    createStore: () => t({ ...l, rootStore: s }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(f, { nonce: o, patchKey: n, patchesRef: m }), (0, r.jsx)(p, { store: h, storeKey: n, children: a })],
                            });
                        },
                    };
                };
            function y(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, l.useContext)(h);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new i.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == n ? void 0 : n.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        54280: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => a, si: () => l, fW: () => d, MJ: () => g, jU: () => p, Bx: () => h });
            var r = n(78061);
            function i(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return console.error(e), null;
                }
            }
            class a {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let o = (0, r.Jt)(e);
                        if (t) {
                            var n, a;
                            return null != (a = null == (n = i(o)) ? void 0 : n.value) ? a : null;
                        }
                        return null != o ? o : null;
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
            function o(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = o('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let a = n.getItem(e) || void 0;
                        if (!t) return a;
                        let o = i(a);
                        if (!o) return null;
                        let l = null != (r = null == o ? void 0 : o.value) ? r : null;
                        if ((null == o ? void 0 : o.expires) && Date.now() > new Date(o.expires).getTime()) return this.remove(e), null;
                        return l;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e);
                    }
                    let r = o('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = o('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var s = n(91945),
                c = n(29222);
            class u extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, s._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype);
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
                    (0, s._)(this, 'platform', ''), (0, s._)(this, 'type', ''), (this.platform = e), (this.type = t);
                }
            }
            class d {
                get(e) {
                    let t = o('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, a;
                        let o = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (a = null == (n = i(o)) ? void 0 : n.value) ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = o('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = o('sessionStorage');
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
        64170: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => A });
            var r = n(32290),
                i = n(63618),
                a = n(96103),
                o = n(55178),
                l = n(60900),
                s = n(39407),
                c = n(63423),
                u = n(82586),
                g = n(71926),
                d = n(16172),
                h = n(52068),
                p = n(62376),
                f = n(37240),
                m = n(83920),
                y = n(20472),
                _ = n(12894),
                v = n(30310),
                E = n.n(v);
            let A = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: a } = (0, l.A)(),
                    v = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        { pageId: r } = (0, f.$)(),
                        i = (0, p.U)();
                    (0, o.useEffect)(() => {
                        if (!t || !n || !r) return;
                        let a = (0, d.Fx)({
                            params: {
                                entityType: d.LA.Error,
                                entityId: d.LA.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: r,
                                pageStyle: d.QL.Fullscreen,
                                pagePlacement: d.c4.Fullscreen,
                                mainObjectType: d.ky.NonApplicable,
                                mainObjectId: d.ky.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, d.z5)(t.evgenInstance, a);
                    }, [t, e, n, r, i]);
                })(v);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: n } = (0, f.$)(),
                            r = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, o.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let i = (0, d.Fx)({
                                    params: {
                                        actionType: d.X2.Refresh,
                                        userInteractionType: d.gi.Tap,
                                        entityType: d.LA.Error,
                                        entityId: d.LA.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: d.QL.Fullscreen,
                                        pagePlacement: d.c4.Fullscreen,
                                        mainObjectType: d.ky.NonApplicable,
                                        mainObjectId: d.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, d.bv)(e.evgenInstance, i);
                            }, [e, t, n, r]),
                        };
                    })(),
                    S = (0, o.useCallback)(() => {
                        A(), (window.location.href = y.Z.main.href);
                    }, [A]),
                    { contentRef: w } = (0, m.g)();
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(E().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(_.L, { withBackwardFallback: '/', className: (0, i.$)(E().navigation, { [E().navigation_desktop]: !w }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, i.$)(E().content, { [E().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(u.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(g.DZ, { className: (0, i.$)(E().title, E().important), variant: 'h3', size: 'xs', children: v }),
                                (0, r.jsxs)(g.HL, {
                                    className: (0, i.$)(E().text, E().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(s.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: S,
                                    className: E().button,
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
        64552: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, X: () => s });
            var r = n(29222),
                i = n(14190);
            let a = async (e) => e.then((e) => e.default),
                o = i.pE[i.cy],
                l = o.langs.reduce((e, t) => (e.set(t, async () => a(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                s = o.langs.reduce((e, t) => (e.set(t, async () => a(n(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        n = t.get(e),
                        i = t.get('ru');
                    if (n) return n();
                    if (i) return i();
                    throw new r.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        73422: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => g });
            var r = n(91945),
                i = n(14190),
                a = n(84570),
                o = n(40363);
            let l = (e) => o.U.parseAcceptLanguage(null != e ? e : void 0);
            var s = n(18870);
            let c = (e) => {
                var t;
                return null != (t = { ru: s.$.RU, en: s.$.EN, uz: s.$.UZ, kk: s.$.KK }[e]) ? t : s.$.RU;
            };
            var u = n(64552);
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
                        t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {});
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
                            u = ((e = this.config), new o.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (g = this.storage) ? void 0 : g.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [u] = l(e) || [];
                    this.language = (0, a.k)(this.config, u);
                }
            }
        },
        78061: (e, t, n) => {
            'use strict';
            n.d(t, { Jt: () => a, TF: () => l, hZ: () => o });
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
            function o(e, t, n) {
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
                                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t);
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
            function l(e, t) {
                o(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        84570: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => r });
            let r = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        94821: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => r });
            var r = (function (e) {
                return (e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e;
            })({});
        },
        96151: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { Q: () => r }),
                (function (e) {
                    (e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic');
                })(r || (r = {}));
        },
        96218: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => i, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                i = 'yMusicPageStatePatchesUpdated';
        },
    },
]);
