(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3042],
    {
        324: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => i });
            var r = a(28166);
            function i(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(r.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        1220: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { $: () => r }),
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
        2218: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => o });
            var r = a(28166),
                i = a(77863);
            let n = '@yandexmusic';
            function o(e) {
                return e.cardType === i.W.SUMMARY_LARGE_IMAGE
                    ? { card: i.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : {
                          card: i.W.APP,
                          site: n,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(r.Lz, '/').concat(e.url) } },
                      };
            }
        },
        4086: (e, t, a) => {
            'use strict';
            a.d(t, {
                $$: () => ed,
                $5: () => eN,
                $8: () => I,
                $I: () => p,
                $Y: () => eD,
                A4: () => m,
                CN: () => en,
                CR: () => N,
                DP: () => W,
                DT: () => eL,
                DV: () => ex,
                E: () => f,
                EN: () => r,
                Ez: () => em,
                GB: () => x,
                GV: () => E,
                Hm: () => l,
                JM: () => el,
                K1: () => z,
                LC: () => eC,
                Lb: () => v,
                Lk: () => ec,
                N1: () => e_,
                NN: () => Y,
                O9: () => w,
                OP: () => b,
                Oo: () => O,
                P0: () => A,
                P1: () => eo,
                PL: () => eR,
                QG: () => M,
                RD: () => eF,
                RG: () => ew,
                S1: () => n,
                SD: () => $,
                SX: () => ef,
                TD: () => ev,
                TK: () => s,
                Tq: () => ek,
                U2: () => L,
                UB: () => eO,
                Ut: () => K,
                V3: () => g,
                V4: () => T,
                VR: () => ej,
                W5: () => eE,
                WA: () => Z,
                X4: () => D,
                X8: () => F,
                Xc: () => ea,
                Zf: () => i,
                Zi: () => eW,
                Zl: () => ei,
                _1: () => _,
                aE: () => Q,
                by: () => eS,
                c9: () => et,
                cZ: () => er,
                dA: () => eP,
                dh: () => ey,
                en: () => J,
                eu: () => X,
                ff: () => eg,
                gd: () => eb,
                gu: () => c,
                iP: () => eM,
                jQ: () => ee,
                ki: () => q,
                mD: () => o,
                mr: () => u,
                nM: () => G,
                ni: () => eU,
                ok: () => U,
                oo: () => R,
                qN: () => H,
                qT: () => ep,
                qt: () => y,
                re: () => es,
                ro: () => V,
                s_: () => eA,
                sv: () => eu,
                tz: () => C,
                u2: () => eh,
                uM: () => eT,
                vH: () => P,
                vg: () => eI,
                wH: () => j,
                wK: () => h,
                xF: () => S,
                y$: () => d,
                yq: () => B,
                zj: () => k,
            });
            let r = 'AfterTrackResource',
                i = 'Logger',
                n = 'TechMetricsLogger',
                o = 'OtelSdk',
                s = 'ModelActionsLogger',
                l = 'HttpClient',
                c = 'HttpBeaconClient',
                d = 'Slam',
                u = 'UgcUploadHttpClient',
                b = 'BaseResourceHttpClient',
                m = 'ResourceHttpClient',
                N = 'ResourceBeaconClient',
                p = 'AccountResource',
                x = 'OutageNoticeResource',
                _ = 'UsersResource',
                g = 'LandingResource',
                h = 'LandingBlocksResource',
                v = 'Landing3Resource',
                C = 'AlbumResource',
                f = 'SlidesResource',
                y = 'MusicExternalApiPrefixUrl',
                E = 'MusicResourceFactory',
                T = 'PublicConfig',
                S = 'ServerConfig',
                A = 'TokenConfig',
                R = 'Storage',
                W = 'CookieStorage',
                L = 'LocalStorage',
                I = 'LibraryResource',
                k = 'LumenResource',
                O = 'TracksResource',
                P = 'SessionStorage',
                D = 'TopResource',
                w = 'ArtistsResource',
                M = 'Authorization',
                j = 'RedAlertResource',
                U = 'RotorResource',
                F = 'WaveResource',
                B = 'SearchResource',
                Y = 'SearchPlaylistResource',
                H = 'PlaylistResource',
                V = 'PlaylistsResource',
                G = 'PinResource',
                K = 'MetatagsResource',
                z = 'TagResource',
                X = 'FeedResource',
                $ = 'Wizard3Resource',
                Z = 'CONTAINER_USER_ID_TOKEN',
                Q = 'PinsResource',
                q = 'MusicHistoryResource',
                J = 'ChartResource',
                ee = 'ClipsResource',
                et = 'DynamicPagesResource',
                ea = 'CONTAINER_I18N_STORAGE',
                er = 'LyricViewsResource',
                ei = 'NonMusicResource',
                en = 'DonationResource',
                eo = 'LoaderResource',
                es = 'PrefixlessResource',
                el = 'StreamsResource',
                ec = 'FiltersResource',
                ed = 'UgcResource',
                eu = 'CollectionResource',
                eb = 'AdsResource',
                em = 'PersonalResource',
                eN = 'AvailabilityResource',
                ep = 'GetFileInfoResource',
                ex = 'ResourcesFileInfoResource',
                e_ = 'DisclaimersResource',
                eg = 'DisclaimerDictionary',
                eh = 'FamilyResource',
                ev = 'ChildrenLandingResource',
                eC = 'TelemetryResource',
                ef = 'Env',
                ey = 'PromoResource',
                eE = 'RumResource',
                eT = 'AcqOffers',
                eS = 'Ynison',
                eA = 'YnisonNewConnector',
                eR = 'LabelsResource',
                eW = 'RequestExecutionContext',
                eL = 'ConcertsResource',
                eI = 'YaMetrikaController',
                ek = 'RumTransport',
                eO = 'YaMetrikaTransport',
                eP = 'WordsResource',
                eD = 'WheelResource',
                ew = 'MocksInitializer',
                eM = 'CacheWorker',
                ej = 'NetworkMonitorFactory',
                eU = 'SkeletonSdk',
                eF = 'TagSandbox';
        },
        4370: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => i });
            var r = a(67174);
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
        7555: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => c });
            var r,
                i = a(53548),
                n = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
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
                        (a.r(t), a.d(t, { clsx: () => r, default: () => i }));
                        let i = r;
                    },
                    2095: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = {
                            root: 'qaIScXjx1qyXuaIHXQIo',
                            root_radius_xs: 'wdE2qVRIlWUesuBfzCis',
                            root_radius_s: '_7gw1qGE6BeUAdSMbhRx',
                            root_radius_m: 'emVxQKB1wJc9FwuIBG8o',
                            root_radius_l: 'NFJAa_h_EAjwQVY7bU5J',
                            root_radius_xl: 'SRpgu5IgfEGM_VHllm_6',
                            root_radius_round: 'QIWoHHDozGGG5w2JYImt',
                            root_withShadow: 'gtfPudKIIbfkwmuOBzwI',
                            root_variant_default: 'ZcpulvHgF_wsgzB8Hye9',
                            root_variant_outline: 'kPFFrHHxF3SOjiETAE6Q',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var n in ((r = {}), t)) 'key' !== n && (r[n] = t[n]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    6009: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let i = a(4377),
                            n = a(5881),
                            o = a(810),
                            s = r(a(2095)),
                            l = (e) => {
                                let { forwardRef: t, radius: a, variant: r = 'default', children: o, className: l, withShadow: c, style: d, ...u } = e;
                                return (0, i.jsx)('div', {
                                    className: (0, n.clsx)(
                                        s.default.root,
                                        s.default['root_radius_'.concat(a)],
                                        s.default['root_variant_'.concat(r)],
                                        { [s.default.root_withShadow]: c },
                                        l,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: o,
                                });
                            };
                        t.Paper = (0, o.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (n[e].call(a.exports, a, a.exports, s), a.exports);
            }
            ((s.d = (e, t) => {
                for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'U', { value: !0 }), (l.X = void 0));
                var e = s(6009);
                Object.defineProperty(l, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = l.X;
            l.U;
        },
        8672: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 25299));
        },
        10465: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            let r = () => ({ timeStyle: 'short' });
        },
        11006: (e) => {
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
        12526: (e, t, a) => {
            var r = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function i(e) {
                if (!a.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    i = t[0];
                return a.e(t[1]).then(() => a.t(i, 19));
            }
            ((i.keys = () => Object.keys(r)), (i.id = 12526), (e.exports = i));
        },
        12533: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => r });
            let r = (e, t) => {
                let [a, r] = e.split('?'),
                    i = new URLSearchParams(r || '');
                for (let [e, a] of new URLSearchParams(t).entries()) i.set(e, a);
                let n = i.toString();
                return ''.concat(a).concat(n ? '?'.concat(n) : '');
            };
        },
        12816: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => n, x: () => i });
            var r = a(98427);
            let i = [
                    r.b.HOME,
                    r.b.SIDEBAR,
                    r.b.OWN_COLLECTION,
                    r.b.LANDING,
                    r.b.OWN_ARTISTS,
                    r.b.ARTIST,
                    r.b.ARTIST_CONCERTS,
                    r.b.NON_MUSIC,
                    r.b.PLAYLIST,
                    r.b.SEARCH,
                    r.b.VIDEO_PLAYER,
                    r.b.LABEL,
                    r.b.CONCERTS,
                    r.b.CONCERT,
                    r.b.CONCERT_LOCATION_SELECTOR,
                    r.b.ALBUM,
                    r.b.PLAYLIST,
                    r.b.SLIDES_SCREEN,
                    r.b.PROMOLANDING_ALBUM,
                    r.b.WAVE_LANDING_SCREEN,
                    r.b.FACT_SCREEN,
                    r.b.LUMEN_FACT_SCREEN,
                    r.b.LUMEN_AWAKENING_SCREEN,
                    r.b.COLLECTION_VIBE_ROOMS,
                    r.b.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    r.b.MULTIVIBE_ACTION_SCREEN,
                    r.b.MULTIVIBE_UNIFIED_SCREEN,
                ],
                n = [r.b.HOME, r.b.LANDING, r.b.NON_MUSIC, r.b.OWN_COLLECTION, r.b.SEARCH, r.b.ARTIST, r.b.CONCERTS, r.b.CONCERT, r.b.ALBUM, r.b.PLAYLIST];
        },
        13060: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var r = a(88800),
                i = a(65724),
                n = a(17392),
                o = a(52300),
                s = a(29504),
                l = a(19872),
                c = a.n(l);
            let d = (e) => {
                let { title: t, className: a, titleClassName: l, valuePercent: d } = e;
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(c().root, a),
                    children: [
                        (0, r.jsx)(o.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, r.jsx)(s.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, i.$)(c().title, l),
                            'data-test-id': n.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        15947: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => s });
            var r = a(35412),
                i = a(28166),
                n = a(97261);
            let o = [r.cy.HTTP, r.cy.HTTPS, r.cy.MAILTO, r.cy.TEL, i.Lz],
                s = (e, t, a) => {
                    let s;
                    try {
                        s = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, r.Rj)(e, { allowedProtocols: new Set([...o, s.protocol]), baseUrl: s.href });
                    return l.isAllowed
                        ? l.url.protocol === i.Lz
                            ? { type: n.I.DEEPLINK, href: e }
                            : '_blank' !== a && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, s)
                              ? { type: n.I.INTERNAL, href: e }
                              : { type: n.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16661: (e) => {
            e.exports = {
                root: 'ConcertCard_root__fcR9B',
                root_withConcertsRedesign: 'ConcertCard_root_withConcertsRedesign__0g8bs',
                ripple: 'ConcertCard_ripple__PW4xI',
                date: 'ConcertCard_date__ECoa3',
                dateWithMask: 'ConcertCard_dateWithMask__si35m',
                important: 'ConcertCard_important__dQYxN',
                dateColor: 'ConcertCard_dateColor__muPRD',
                button: 'ConcertCard_button__GQxNL',
            };
        },
        19191: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => N });
            var r = a(53548),
                i = a(87999),
                n = a(24114),
                o = a(14668),
                s = a(84423),
                l = a(89846),
                c = a(64543),
                d = a(80643),
                u = a(63582),
                b = a(12816),
                m = a(98427);
            let N = (0, u.n)({ event: 'Artist.Concerts.Navigated', kind: 'hook', requiredScopes: ['screen', 'object'] }, function (e) {
                var t, a;
                let { artistId: u, viewUuid: N, objectPos: p } = e,
                    x = null == (t = (0, s.s)()) ? void 0 : t.evgenInstance,
                    { hash: _ } = (0, l.g)(),
                    { screen: g, block: h, object: v } = (0, c.j)(),
                    C =
                        null != (a = null == g ? void 0 : g.pageIdForFrom)
                            ? a
                            : (null == g ? void 0 : g.pageId) === i.AppScreen.SearchScreen
                              ? m.b.SEARCH
                              : null == g
                                ? void 0
                                : g.pageId,
                    f = null == h ? void 0 : h.objectsCount,
                    y = null == v ? void 0 : v.objectType,
                    E = null == v ? void 0 : v.objectId,
                    T = null == v ? void 0 : v.objectPosX,
                    S = null == v ? void 0 : v.objectPosY,
                    A = (0, d.S)(),
                    R = (0, r.useCallback)(
                        (e) => {
                            if (
                                !x ||
                                void 0 === _ ||
                                'string' != typeof u ||
                                void 0 === f ||
                                (y !== i.DomainObjectType.Concert && y !== i.DomainObjectType.Shortcut) ||
                                void 0 === E ||
                                void 0 === T ||
                                void 0 === S ||
                                void 0 === e
                            )
                                return;
                            let t = {
                                hash: _,
                                artistId: u,
                                objectsCount: f,
                                objectType: y === i.DomainObjectType.Concert ? i.ConcertBlockItemType.Concert : i.ConcertBlockItemType.Shortcut,
                                objectId: E,
                                objectPosX: T,
                                objectPosY: S,
                                to: e,
                            };
                            (0, n.U6)(x, t);
                        },
                        [x, u, _, E, T, S, y, f],
                    ),
                    W = (0, r.useCallback)(
                        (e) => {
                            if (
                                !x ||
                                void 0 === _ ||
                                'string' != typeof u ||
                                !N ||
                                void 0 === E ||
                                void 0 === p ||
                                !Number.isFinite(p) ||
                                (e !== i.FromArtistScreenTo.ConcertScreen && e !== i.FromArtistScreenTo.ConcertPurchaseScreen)
                            )
                                return;
                            let t = {
                                hash: _,
                                artistId: u,
                                viewUuid: N,
                                objectId: E,
                                objectPos: p,
                                to:
                                    e === i.FromArtistScreenTo.ConcertScreen
                                        ? i.FromArtistConcertsScreenTo.ConcertScreen
                                        : i.FromArtistConcertsScreenTo.ConcertPurchaseScreen,
                            };
                            (0, o.mh)(x, t);
                        },
                        [x, u, _, E, p, N],
                    );
                return (0, r.useCallback)(
                    (e) => {
                        if (x && C && b.x.includes(C))
                            switch (C) {
                                case m.b.ARTIST:
                                    R(e);
                                    break;
                                case m.b.ARTIST_CONCERTS:
                                    W(e);
                                    break;
                                case m.b.SEARCH:
                                    A({ to: i.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [x, C, A, W, R],
                );
            });
        },
        19872: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        19998: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => y });
            var r = a(88800),
                i = a(65724),
                n = a(84961),
                o = a(53548),
                s = a(88969),
                l = a(17392),
                c = a(29993),
                d = a(96817),
                u = a(29504),
                b = a(4086),
                m = a(41928),
                N = a(46422),
                p = a(4370),
                x = a(78940),
                _ = a(85587),
                g = a(15253),
                h = a(91292),
                v = a(28806),
                C = a.n(v);
            let f = {
                    [_.n.ALBUM]: (0, r.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [_.n.PODCAST]: (0, r.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [_.n.ARTIST]: (0, r.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [_.n.TRACK]: (0, r.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [_.n.AUDIOBOOK]: (0, r.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [_.n.CLIP]: (0, r.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                y = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: v, className: y } = e,
                        E = null != n ? n : null == a ? void 0 : a.modalData,
                        T = (0, N.W)(),
                        S = (0, x.Z)(p.Z.main.href),
                        A = (0, m.N)().get(b.U2),
                        R = (0, c.c)(() => {
                            if (v) return v();
                            (T.canBack && T.back(), S());
                        }),
                        W = (null == E || null == (t = E.details) ? void 0 : t.url) && E.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = A.get(g.c.ExEx),
                                r = new Date(),
                                i = r.setMinutes(r.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? A.set(g.c.ExEx, [...t, n], { expires: new Date(i) }) : A.set(g.c.ExEx, [n], { expires: new Date(i) }),
                                null == v || v(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        I = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == v || v(), T.canBack && T.back(), S()) : null == v || v(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, o.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let k = (0, o.useMemo)(() => {
                            if (E) {
                                var e, t;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, i.$)(C().title, C().text),
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: E.title,
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: C().text,
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: E.description,
                                        }),
                                        W &&
                                            (0, r.jsx)(h.N, {
                                                href: null == (e = E.details) ? void 0 : e.url,
                                                className: C().link,
                                                children: (0, r.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = E.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [E, W]),
                        O = (0, o.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === _.Z.UNSAFE
                                    ? (0, r.jsxs)('div', {
                                          className: C().buttons,
                                          children: [
                                              (0, r.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: C().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, r.jsx)(s.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, r.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: C().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && f[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)('div', {
                                          className: C().buttons,
                                          children: (0, r.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: R,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: C().button,
                                              'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, r.jsx)(s.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, R, I],
                        );
                    return (0, r.jsx)('div', {
                        className: (0, i.$)(C().root, y),
                        'data-test-id': l.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, r.jsxs)('div', { className: C().container, children: [k, O] }),
                    });
                });
        },
        20775: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => i });
            var r = a(62837);
            let i = (e, t) => !e && !!(t && (0, r.Ve)(t, r.Yw.MODAL));
        },
        21424: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            let r = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        21438: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => i });
            let r = /^(0|[1-9]\d*)$/;
            function i(e) {
                return void 0 !== e && !(e.length > 40) && r.test(e);
            }
        },
        22989: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        25299: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => ea }));
            var r = a(88800),
                i = a(58390),
                n = a(84961),
                o = a(53548),
                s = a(2058),
                l = a(54020),
                c = a(87999),
                d = a(7833),
                u = a(76903),
                b = a(37523),
                m = a(17392),
                N = a(66719),
                p = a(29504),
                x = a(69630),
                _ = a(91959),
                g = a(48911),
                h = a(27021),
                v = a(52018),
                C = a(98427),
                f = a(46422),
                y = a(44230),
                E = a(37670),
                T = a(72288),
                S = a(97956),
                A = a(19998),
                R = a(86790),
                W = a(60266),
                L = a(93317),
                I = a(63793),
                k = a(14668),
                O = a(84423),
                P = a(89846),
                D = a(63582);
            let w = (0, D.n)({ event: 'ArtistConcerts.Closed', kind: 'hook', requiredScopes: [] }, function (e) {
                    var t;
                    let { artistId: a, viewUuid: r } = e,
                        i = null == (t = (0, O.s)()) ? void 0 : t.evgenInstance,
                        { hash: n } = (0, P.g)();
                    return (0, o.useCallback)(() => {
                        i && a && void 0 !== n && void 0 !== r && (0, k.pe)(i, { hash: n, artistId: a, viewUuid: r });
                    }, [i, a, n, r]);
                }),
                M = (0, D.n)({ event: 'ArtistConcerts.Opened', kind: 'hook', requiredScopes: [] }, function (e) {
                    var t;
                    let { artistId: a, viewUuid: r } = e,
                        i = null == (t = (0, O.s)()) ? void 0 : t.evgenInstance,
                        { hash: n } = (0, P.g)();
                    return (0, o.useCallback)(() => {
                        i && a && void 0 !== n && void 0 !== r && (0, k.__)(i, { hash: n, artistId: a, viewUuid: r });
                    }, [i, a, n, r]);
                });
            var j = a(81685),
                U = a(30144),
                F = a(324),
                B = a(53073),
                Y = a(83418),
                H = a(46511),
                V = a(57297),
                G = a(2218),
                K = a(77863),
                z = a(45383),
                X = a(98774);
            async function $(e, t) {
                var a, r, i;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {} };
                let n = await (0, H.W)(t.locale),
                    o = n({ id: 'metadata.artist-concerts-title' }, { artistName: e.artist.name }),
                    s = n({ id: 'metadata.artist-concerts-description' }, { artistName: e.artist.name });
                return {
                    robots: (0, X.G)(e.artist),
                    title: o,
                    description: s,
                    openGraph: (0, V.i)({
                        ogTitle: o,
                        ogDescription: s,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, Y.v)({ host: t.host }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, G.H)({ cardType: K.W.SUMMARY_LARGE_IMAGE, title: o, description: s }),
                    facebook: (0, B.k)(),
                    appLinks: (0, F.X)({
                        additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (i = t.fullUrl) ? i : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, z.S)('/artist/:artistId/concerts', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var Z = a(27342),
                Q = a(63512),
                q = a(34713),
                J = a.n(q);
            let ee = (0, n.PA)((e) => {
                var t, a, n, k, O;
                let { artistId: P, preloadedArtist: D, preloadedConcerts: F } = e,
                    { artist: B, disclaimerModalState: Y, experiments: H } = (0, T.g)(),
                    V = H.checkExperiment(S.z.WebNextConcertsIdentityEventType, 'on'),
                    { formatMessage: G } = (0, s.A)(),
                    { contentScrollRef: K, setContentScrollRef: z } = (0, y.g)(),
                    X = (0, f.W)(),
                    q = (0, o.useRef)(String((0, l.A)())),
                    ee = M({ artistId: P, viewUuid: q.current }),
                    et = w({ artistId: P, viewUuid: q.current });
                (0, o.useEffect)(
                    () => (
                        ee(),
                        () => {
                            et();
                        }
                    ),
                    [et, ee],
                );
                let ea = (0, _.S)({ artist: null == (t = B.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, Q.G)(P),
                    (0, o.useEffect)(() => {
                        var e;
                        (null == (e = B.meta) ? void 0 : e.artist.isUnsafeLegal) && ea();
                    }, [null == (a = B.meta) ? void 0 : a.artist.isUnsafeLegal, ea]),
                    (0, Z._)(B, P),
                    (0, o.useEffect)(
                        () => () => {
                            B.concertsSubpage.reset();
                        },
                        [B],
                    ),
                    (0, E.J)(B.concertsSubpage.isResolved),
                    B.concertsSubpage.isNotFound && (0, i.notFound)());
                let er = (0, o.useMemo)(() => {
                        var e;
                        if (B.concertsSubpage.isLoading) return (0, I.T)(10);
                        let t = V ? v.M : h.Z;
                        return null == (e = B.concertsSubpage.concerts)
                            ? void 0
                            : e.map((e, a) =>
                                  (0, r.jsx)(
                                      d.B,
                                      {
                                          objectId: String(e.id),
                                          objectType: c.DomainObjectType.Concert,
                                          objectPosX: 1,
                                          objectPosY: a + 1,
                                          children: (0, r.jsx)(g.V, {
                                              artistId: P,
                                              concert: e,
                                              viewUuid: q.current,
                                              objectPos: a + 1,
                                              meta: (0, r.jsx)(t, { concert: e }),
                                              shouldShowMask: V,
                                          }),
                                      },
                                      e.id,
                                  ),
                              );
                    }, [B.concertsSubpage.concerts, B.concertsSubpage.isLoading, P, V, q]),
                    ei = [];
                if (
                    (B.concertsSubpage.isNeededToLoad && ei.push(B.concertsSubpage.getData({ artistId: Number(P), preloadedConcerts: F })),
                    B.infoLoadingState.isNeededToLoad && ei.push(B.getInfo({ artistId: P, preloadedArtist: D })),
                    ((e) => {
                        var t;
                        let { fullscreenVideoPlayer: a } = (0, T.g)(),
                            r = null == e || null == (t = e.meta) ? void 0 : t.artist,
                            i = null == e ? void 0 : e.infoLoadingState.isLoading,
                            n = null == e ? void 0 : e.infoLoadingState.isRejected,
                            s = (0, o.useCallback)((e) => (n ? {} : r && !i ? $({ artist: (0, j.E)(r) }, e) : void 0), [r, i, n]);
                        (0, U.C)(a.modal.isOpened ? null : s);
                    })(B),
                    ei.length && (0, o.use)(Promise.allSettled(ei)),
                    null == (n = B.meta) ? void 0 : n.artist.isLegalRejected)
                )
                    return (0, r.jsx)(A.M, { modalState: Y });
                let en = (0, o.useMemo)(
                    () =>
                        V && B.concertsSubpage.artistTitle
                            ? G({ id: 'page.artist-all-concerts-header' }, { artistName: B.concertsSubpage.artistTitle })
                            : G({ id: 'page.artist-concerts-header' }, { artistName: B.commonSubPage.artistName }),
                    [V, B.concertsSubpage.artistTitle, B.commonSubPage.artistName, G],
                );
                return (0, r.jsx)(u.a, {
                    pageId: c.AppScreen.ArtistScreen,
                    pageIdForFrom: C.b.ARTIST_CONCERTS,
                    mainObjectId: P,
                    mainObjectType: c.DomainObjectType.Artist,
                    children: (0, r.jsx)(x.h, {
                        scrollElement: K,
                        outerTitle: en,
                        children: (0, r.jsxs)('div', {
                            className: J().root,
                            'data-test-id': m.Xk.artist.ARTIST_CONCERTS_PAGE,
                            children: [
                                (0, r.jsx)(L.Y, {
                                    variant: L.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: X.canBack,
                                    children: (0, r.jsx)(p.DZ, { id: 'concerts-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: en }),
                                }),
                                (0, r.jsxs)(N.N, {
                                    ref: z,
                                    className: J().scrollableContent,
                                    containerClassName: J().container,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: J().content,
                                            'aria-labelledby': 'concerts-header',
                                            tabIndex: 0,
                                            children: (0, r.jsx)(b.F, {
                                                blockType: c.EntityTypes.Concerts,
                                                blockId: c.EntityTypes.Concerts,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: null != (O = null == (k = B.concertsSubpage.concerts) ? void 0 : k.length) ? O : 0,
                                                children: er,
                                            }),
                                        }),
                                        (0, r.jsx)(W.A, { children: (0, r.jsx)(R.w, { className: J().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            });
            var et = a(21438);
            let ea = () => {
                let e = (0, i.useSearchParams)().get('artistId');
                return ((e && (0, et.L)(e)) || (0, i.notFound)(), (0, r.jsx)(ee, { artistId: e }));
            };
        },
        27021: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => b });
            var r = a(88800),
                i = a(84961),
                n = a(53548),
                o = a(2058),
                s = a(29504),
                l = a(10465),
                c = a(13060),
                d = a(95960),
                u = a.n(d);
            let b = (0, i.PA)((e) => {
                let { id: t, concert: a } = e,
                    { formatDate: i } = (0, o.A)(),
                    d = [],
                    b = (0, r.jsx)(s.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == a ? void 0 : a.place) && d.push((0, r.jsx)(s.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.place })),
                    (null == a ? void 0 : a.datetime) &&
                        d.push(b, (0, r.jsx)(s.HL, { variant: 'span', size: 'm', weight: 'medium', className: u().time, children: i(a.datetime, (0, l.f)()) })),
                    (null == a ? void 0 : a.contentRating) && d.push(b, (0, r.jsx)(s.HL, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                    (0, r.jsxs)('div', {
                        className: u().root,
                        id: t,
                        children: [
                            (0, r.jsx)(s.HL, { variant: 'div', size: 'm', weight: 'medium', className: u().city, lineClamp: 1, children: null == a ? void 0 : a.city }),
                            (0, r.jsx)('div', { className: u().info, children: d.map((e, t) => (0, n.cloneElement)(e, { key: t })) }),
                            (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, r.jsx)(c.m, { className: u().cashback, valuePercent: a.cashbackValuePercent }),
                            !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, r.jsx)(c.m, { className: u().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        27342: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => i });
            var r = a(53548);
            let i = (e, t) => {
                (0, r.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28166: (e, t, a) => {
            'use strict';
            a.d(t, { Lz: () => r, ov: () => i });
            let r = ''.concat('yandexmusic', ':'),
                i = ''.concat(r, '//');
        },
        28806: (e) => {
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
        29201: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var r = a(35396);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        30144: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => N });
            var r = a(53548),
                i = a(58390),
                n = a(51611),
                o = a(65523);
            let s = {
                other: {
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-mobile-web-app-status-bar-style': 'black',
                    'apple-mobile-web-app-title': 'Яндекс Музыка',
                    robots: 'noyaca',
                },
            };
            var l = a(46511);
            async function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fullUrl: null, locale: null, url: null, tld: 'net', host: 'music.yandex.ru' },
                    t = await (0, l.W)(e.locale);
                return {
                    ...s,
                    title: t({ id: 'metadata.yandex-music-default-title' }),
                    description: t({ id: 'metadata.yandex-music-default-description' }),
                    alternates: { canonical: e.canonical },
                };
            }
            var d = a(88349),
                u = a(91241);
            let b = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let r = window.document.createElement('meta');
                    return (r.setAttribute(e, t), r);
                },
                m = (e) => {
                    let { title: t, description: a, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = b('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let i = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            a = Array.isArray(r.images) ? r.images[0] : null;
                        i = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let n = b('property', 'og:title'),
                            o = b('property', 'og:description'),
                            s = b('property', 'og:image');
                        (n.setAttribute('content', e),
                            o.setAttribute('content', t),
                            s.setAttribute('content', i),
                            window.document.head.appendChild(n),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(s));
                    }
                },
                N = (e) => {
                    let { language: t } = (0, n.h)(),
                        a = (0, o.U)(),
                        s = (0, i.usePathname)(),
                        l = (0, i.useSearchParams)().toString();
                    (0, r.useEffect)(() => {
                        if (!e) return;
                        let r = !0,
                            i = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, d.f)(e.host) || u.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            n = window.location.pathname + window.location.search,
                            o = () => r && n === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(i);
                                    if (!o() || !t) return;
                                    let a = 'string' == typeof t.title && t.title.trim() ? t.title : (await c(i)).title;
                                    o() && m({ ...t, title: a });
                                } catch (e) {
                                    if (!o()) return;
                                    a.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(i);
                                        o() && m(e);
                                    } catch (e) {
                                        o() && a.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                r = !1;
                            }
                        );
                    }, [e, t, a, s, l]);
                };
        },
        31423: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        32414: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        34303: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => r });
            var r = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        34713: (e) => {
            e.exports = {
                root: 'ArtistConcertsPage_root__DDTmb',
                scrollableContent: 'ArtistConcertsPage_scrollableContent__aiEjd',
                container: 'ArtistConcertsPage_container__ho6Fw',
                content: 'ArtistConcertsPage_content__Ynto2',
                footer: 'ArtistConcertsPage_footer__kQL7m',
            };
        },
        35396: (e, t, a) => {
            'use strict';
            var r;
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
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(r || (r = {})));
            let i = new Set(Object.values(r)),
                n = (e) => 'string' == typeof e && i.has(e);
        },
        37670: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var r = a(53548);
            a(30282);
            var i = a(58390);
            let n = (e) => {
                let t = (0, i.usePathname)(),
                    [a, n] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, a, t]));
            };
        },
        41928: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => n, N: () => o });
            var r = a(53548),
                i = a(39499);
            let n = (0, r.createContext)(null);
            function o() {
                let e = (0, r.useContext)(n);
                if (null === e) throw new i.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        44167: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => h });
            var r = a(88800),
                i = a(53548),
                n = a(2058),
                o = a(30282),
                s = a(17392),
                l = a(96817),
                c = a(11372),
                d = a(73170),
                u = a(4086),
                b = a(41928),
                m = a(12149),
                N = a(58390),
                p = a(12533),
                x = a(34303),
                _ = a(31423),
                g = a.n(_);
            let h = (e) => {
                let { dataSessionId: t, isOpened: a, onOpen: _, onClose: h } = e,
                    v = (0, b.N)().get(u.V4),
                    { formatMessage: C } = (0, n.A)(),
                    f = (() => {
                        let e = (0, N.useSearchParams)();
                        return (0, i.useCallback)(
                            (t) => {
                                let a = e.get(x.K.UTM_CAMPAIGN);
                                if (!a) return t;
                                let r = new URLSearchParams();
                                return (r.set(x.K.UTM_SOURCE, 'campaignid_'.concat(a)), (0, p.C)(t, r));
                            },
                            [e],
                        );
                    })(),
                    y = (0, i.useCallback)(
                        (e) => {
                            e.origin === v.afisha.host && 'close' === e.data.type && h();
                        },
                        [h, v.afisha.host],
                    );
                (0, i.useEffect)(
                    () => (
                        window.addEventListener('message', y),
                        () => {
                            window.removeEventListener('message', y);
                        }
                    ),
                    [y],
                );
                let E = (0, i.useCallback)(
                        (e) => {
                            e ? _() : h();
                        },
                        [h, _],
                    ),
                    T = (0, o.tE)(v, (0, m.u)()),
                    S = f(''.concat(v.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(T));
                return (0, r.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: a,
                    onOpenChange: E,
                    onClose: h,
                    showHeader: !1,
                    className: g().widget,
                    contentClassName: g().content,
                    overlayColor: 'full',
                    'data-test-id': s.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, r.jsx)(d.q, { children: (0, r.jsx)(l.$, { 'aria-label': C({ id: 'interface-actions.close' }), onClick: h }) }),
                        (0, r.jsx)('iframe', {
                            src: S,
                            className: g().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        45383: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var r = a(67174);
            let i = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var a = arguments.length, n = Array(a > 2 ? a - 2 : 0), o = 2; o < a; o++) n[o - 2] = arguments[o];
                    let [s] = n,
                        l = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != s ? s : {}), options: e }),
                        d = {},
                        { href: u } = (0, r.u)(l, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(i)) {
                        let { href: a } = (0, r.u)(l, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = a;
                    }
                    return { canonical: u, languages: d };
                };
        },
        46422: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => i, W: () => n });
            var r = a(53548);
            let i = (0, r.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function n() {
                return (0, r.useContext)(i);
            }
        },
        46511: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => d });
            var r = a(27794),
                i = a(53548),
                n = a(72542),
                o = a(83602),
                s = a(21424),
                l = a(95330);
            let c = (0, i.cache)(async (e) => (0, l.M)(e, l.X)),
                d = async (e) => {
                    let t = (e || o.E.getDefaultLocale()).language,
                        a = (0, s.k)(n.pE[n.cy], t),
                        i = await c(a);
                    return (e, t) => {
                        let n = null == i ? void 0 : i[e.id],
                            o = '';
                        return ((Array.isArray(n) || 'string' == typeof n) && (o = new r.S(n, a).format(t)), Array.isArray(o) ? o.join('') : o);
                    };
                };
        },
        46646: (e, t, a) => {
            var r = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function i(e) {
                if (!a.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    i = t[0];
                return a.e(t[1]).then(() => a.t(i, 19));
            }
            ((i.keys = () => Object.keys(r)), (i.id = 46646), (e.exports = i));
        },
        48911: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => P });
            var r = a(88800),
                i = a(65724),
                n = a(84961),
                o = a(53548),
                s = a(87999),
                l = a(62414),
                c = a(17392),
                d = a(29993),
                u = a(78275),
                b = a(52073),
                m = a(96817),
                N = a(7555),
                p = a(78940),
                x = a(72288),
                _ = a(97956),
                g = a(67174),
                h = a(19191),
                v = a(24114),
                C = a(14668),
                f = a(84423),
                y = a(89846),
                E = a(64543),
                T = a(63582),
                S = a(12816),
                A = a(98427);
            let R = (0, T.n)({ event: 'Artist.Concerts.Showed', kind: 'hook', requiredScopes: ['screen', 'object'] }, function (e) {
                var t, a;
                let { artistId: r, viewUuid: i, objectPos: n } = e,
                    l = null == (t = (0, f.s)()) ? void 0 : t.evgenInstance,
                    { hash: c } = (0, y.g)(),
                    { screen: d, block: u, object: b } = (0, E.j)(),
                    m = null != (a = null == d ? void 0 : d.pageIdForFrom) ? a : null == d ? void 0 : d.pageId,
                    N = null == u ? void 0 : u.objectsCount,
                    p = null == b ? void 0 : b.objectType,
                    x = null == b ? void 0 : b.objectId,
                    _ = null == b ? void 0 : b.objectPosX,
                    g = null == b ? void 0 : b.objectPosY,
                    h = (0, o.useCallback)(() => {
                        if (
                            !l ||
                            void 0 === c ||
                            'string' != typeof r ||
                            void 0 === N ||
                            (p !== s.DomainObjectType.Concert && p !== s.DomainObjectType.Shortcut) ||
                            void 0 === x ||
                            void 0 === _ ||
                            void 0 === g
                        )
                            return;
                        let e = {
                            hash: c,
                            artistId: r,
                            objectsCount: N,
                            objectType: p === s.DomainObjectType.Concert ? s.ConcertBlockItemType.Concert : s.ConcertBlockItemType.Shortcut,
                            objectId: x,
                            objectPosX: _,
                            objectPosY: g,
                        };
                        (0, v.HB)(l, e);
                    }, [l, r, c, x, _, g, p, N]),
                    T = (0, o.useCallback)(() => {
                        l &&
                            void 0 !== c &&
                            'string' == typeof r &&
                            i &&
                            void 0 !== x &&
                            void 0 !== n &&
                            Number.isFinite(n) &&
                            (0, C.Z4)(l, { hash: c, artistId: r, viewUuid: i, objectId: x, objectPos: n });
                    }, [l, r, c, x, n, i]);
                return (0, o.useCallback)(() => {
                    if (l && m && S.x.includes(m))
                        switch (m) {
                            case A.b.ARTIST:
                            case A.b.CONCERT:
                                h();
                                break;
                            case A.b.ARTIST_CONCERTS:
                                T();
                        }
                }, [l, m, T, h]);
            });
            var W = a(76484),
                L = a(44167),
                I = a(74250),
                k = a(16661),
                O = a.n(k);
            let P = (0, n.PA)((e) => {
                let {
                        artistId: t,
                        concert: a,
                        meta: n,
                        viewUuid: v,
                        objectPos: C,
                        radius: f = 'l',
                        className: y,
                        shouldSendAnalyticsOnHide: E,
                        forceAfishaWidget: T,
                        shouldShowMask: S,
                    } = e,
                    { state: A, toggleTrue: k, toggleFalse: P } = (0, u.e)(!1),
                    { experiments: D } = (0, x.g)(),
                    w = !T && D.checkExperiment(_.z.WebNextConcertPage, 'on'),
                    { href: M } = (0, g.u)('/concert/:concertId', { params: { concertId: a.id } }),
                    j = (0, p.Z)(M),
                    U = R({ artistId: t, viewUuid: v, objectPos: C }),
                    F = (0, h.m)({ artistId: t, viewUuid: v, objectPos: C }),
                    B = (0, o.useRef)(!1),
                    Y = (0, d.c)((e) => {
                        null !== t && e && (E || !B.current) && (U(), (B.current = !0));
                    }),
                    H = (0, l.D)({ onVisibilityChange: Y }),
                    V = (0, o.useId)(),
                    G = (0, o.useId)(),
                    K = (0, W.Y)()(a),
                    z = (0, d.c)((e) => {
                        ((0, b.P)(e, O().ripple), w && (j(e), F(s.FromArtistScreenTo.ConcertScreen)));
                    }),
                    X = (0, d.c)((e) => {
                        (k(), F(s.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, r.jsxs)(N.t, {
                    radius: f,
                    className: (0, i.$)(O().root, y, { [O().root_withConcertsRedesign]: a.isIdentityExperimentEnabled }),
                    ref: H,
                    onClick: z,
                    children: [
                        a.datetime &&
                            (0, r.jsx)(I.d, {
                                datetime: a.datetime,
                                id: V,
                                className: (0, i.$)(O().date, { [O().dateWithMask]: S, [O().important]: S }),
                                dayClassName: O().dateColor,
                                monthClassName: O().dateColor,
                            }),
                        (0, o.cloneElement)(n, { id: G, concert: a }),
                        a.dataSessionId &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(m.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: O().button,
                                        'aria-describedby': ''.concat(V, ' ').concat(G),
                                        'aria-label': K,
                                        onClick: X,
                                        'data-test-id': c.OA.concert.CONCERT_CARD_BUTTON,
                                        children: K,
                                    }),
                                    (0, r.jsx)(L.h, { dataSessionId: a.dataSessionId, isOpened: A, onOpen: k, onClose: P }),
                                ],
                            }),
                    ],
                });
            });
        },
        51724: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            let r = (e) => {
                var t, a, r, i, n, o;
                let s = null == (t = e.available) || t,
                    l = null != (a = e.disclaimers) ? a : [];
                return (
                    e.contentRestrictions &&
                        ((s = null == (n = null == (r = e.contentRestrictions) ? void 0 : r.available) || n),
                        (l = null != (o = null == (i = e.contentRestrictions) ? void 0 : i.disclaimers) ? o : [])),
                    { available: s, disclaimers: l }
                );
            };
        },
        51806: (e) => {
            e.exports = {
                root: 'ConcertShimmer_root__yp58v',
                date: 'ConcertShimmer_date__GEOK7',
                meta: 'ConcertShimmer_meta__y8Y2_',
                title: 'ConcertShimmer_title__Rj3Dc',
                description: 'ConcertShimmer_description__tJ4Qp',
                action: 'ConcertShimmer_action__6c4QF',
            };
        },
        52018: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => m });
            var r = a(88800),
                i = a(84961),
                n = a(53548),
                o = a(88969),
                s = a(17392),
                l = a(79070),
                c = a(29504),
                d = a(13060),
                u = a(95960),
                b = a.n(u);
            let m = (0, i.PA)((e) => {
                let { id: t, concert: a, withCashback: i = !0, withInlineMeta: u = !1, titleSize: m = 'm' } = e,
                    N = [],
                    p = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == a ? void 0 : a.eventKind) &&
                    N.push(
                        (0, r.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': s.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, r.jsx)(o.A, { id: 'concerts.event-kind', values: { kind: a.eventKind } }),
                        }),
                    ),
                    (null == a ? void 0 : a.contentRating) &&
                        N.push(
                            p,
                            (0, r.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': s.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: a.contentRating,
                            }),
                        ));
                let x = (0, l.L)(() =>
                    (null == a ? void 0 : a.city)
                        ? (0, r.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': s.OA.concert.CONCERT_CARD_LOCATION,
                              children: a.city,
                          })
                        : null,
                );
                return (
                    u && x && N.push(p, x),
                    (0, r.jsxs)('div', {
                        className: b().root,
                        id: t,
                        children: [
                            (0, r.jsx)(c.HL, {
                                variant: 'div',
                                size: m,
                                weight: 'medium',
                                className: b().city,
                                lineClamp: 1,
                                'data-test-id': s.OA.concert.CONCERT_CARD_TITLE,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, r.jsx)('div', { className: b().info, children: N.map((e, t) => (0, n.cloneElement)(e, { key: t })) }),
                            !u && x,
                            i &&
                                (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, r.jsx)(d.m, { className: b().cashback, valuePercent: a.cashbackValuePercent }),
                            i &&
                                !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, r.jsx)(d.m, { className: b().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        52073: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i });
            var r = {};
            (Object.defineProperty(r, '__esModule', { value: !0 }),
                (r.createRipple = void 0),
                (r.createRipple = function (e, t, a) {
                    let r = null != a ? a : e.currentTarget,
                        i = document.createElement('span'),
                        n = Math.max(r.clientWidth, r.clientHeight),
                        o = n / 2,
                        s = r.getBoundingClientRect(),
                        l = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                        c = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                    ((i.style.width = ''.concat(n, 'px')),
                        (i.style.height = ''.concat(n, 'px')),
                        (i.style.left = 0 === e.clientX ? '0px' : ''.concat(l - o, 'px')),
                        (i.style.top = ''.concat(c - o, 'px')),
                        i.classList.add(t));
                    let d = r.getElementsByClassName(t)[0];
                    (d && d.remove(), r.insertBefore(i, r.firstChild));
                }),
                r.__esModule);
            var i = r.createRipple;
        },
        53073: (e, t, a) => {
            'use strict';
            function r() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => r });
        },
        57297: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var r = a(35412),
                i = a(83602);
            function n(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: n, locale: o, ogImage: s, siteName: l, ogType: c, customImage: d } = e,
                    u = s ? { url: (0, r.lU)(s, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: n,
                    ...(c && { type: c }),
                    siteName: l,
                    locale: (o || i.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        58217: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => u });
            var r = a(53548),
                i = a(54020),
                n = a(29993),
                o = a(4086),
                s = a(41928),
                l = a(72288),
                c = a(85587),
                d = a(15253);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: a,
                        getStorageKey: u,
                        callback: b,
                        onAfterHandled: m,
                        onBeforeHandle: N,
                        onReject: p,
                        modalBehavior: x,
                        preventDefaultWhenSafe: _,
                    } = e,
                    {
                        disclaimerModalState: g,
                        modals: { disclaimerModal: h },
                    } = (0, l.g)(),
                    v = (0, r.useRef)(String((0, i.A)())),
                    C = (0, r.useRef)(!1),
                    f = (0, r.useRef)(!1),
                    y = (0, r.useRef)(0),
                    E = (0, r.useRef)(!0),
                    T = (0, s.N)().get(o.U2),
                    S = (0, n.c)((e) => {
                        (_ && (null == e || e.preventDefault()), b && b(e), m && m());
                    });
                return (
                    (0, r.useEffect)(() => {
                        g.isUnsafeDisclaimerConfirmed && g.id === v.current && !C.current && (S(), (C.current = !0));
                    }, [g.id, g.isUnsafeDisclaimerConfirmed, S]),
                    (0, r.useEffect)(() => {
                        g.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && g.setModalData(t.resolvedModalData);
                    }, [g, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, r.useEffect)(
                        () => () => {
                            E.current = !1;
                        },
                        [],
                    ),
                    (0, n.c)(async (e) => {
                        if (!f.current) {
                            f.current = !0;
                            try {
                                if ((null == N || N(e), t)) {
                                    var r, i, n;
                                    let o = t.getDisclaimerEntityRef(a),
                                        s = null != (r = null == u ? void 0 : u(t, o)) ? r : ''.concat(o.entityType, '_').concat(o.entityId),
                                        l = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = T.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(s)) return void S(e);
                                    }
                                    if (l) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && g.setType(c.Z.UNSAFE),
                                            g.setDisclaimerRejectHandler(null != p ? p : null),
                                            g.setId(v.current),
                                            g.setEntityKey(s),
                                            g.setCurrentEntityRef(o.entityType, o.entityId),
                                            g.setShouldHistoryBack(!!(null == x ? void 0 : x.shouldHistoryBack)),
                                            g.setShouldCloseModalOnOutsidePress(null == (i = null == x ? void 0 : x.closeOnOutside) || i),
                                            g.setShouldCloseModalOnEscape(null == (n = null == x ? void 0 : x.closeOnEscape) || n),
                                            (y.current += 1));
                                        let a = y.current,
                                            r = await t.getModalDisclaimerData();
                                        if (y.current !== a || !1 === E.current) return;
                                        (g.setModalData(null != r ? r : null), (C.current = !1), h.open());
                                        return;
                                    }
                                    (_ && (null == e || e.preventDefault()), S(e));
                                    return;
                                }
                                (_ && (null == e || e.preventDefault()), S(e));
                            } finally {
                                f.current = !1;
                            }
                        }
                    })
                );
            };
        },
        60266: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => o });
            var r = a(88800);
            a(30282);
            var i = a(11006),
                n = a.n(i);
            let o = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            var r = a(97956);
            let i = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: i, userRegion: n } = e;
                return 'ru' === n && t(r.z.WebNextFooterDisclaimer, 'on') ? a() : i();
            };
        },
        63512: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => o });
            var r = a(53548),
                i = a(94144),
                n = a(67174);
            let o = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, i.P)()) ? t : {};
                (0, r.useEffect)(() => {
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
        63793: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => n });
            var r = a(88800),
                i = a(68594);
            let n = (e) => Array.from({ length: e }, (e, t) => (0, r.jsx)(i.W, {}, t));
        },
        65523: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => s });
            var r = a(4086),
                i = a(41928),
                n = a(44084);
            let o = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
                        let t = o.get(e);
                        if (t) return t;
                        let a = {
                            log: (t, a) => e.info(t, a),
                            trace: (t, a) => e.trace(t, a),
                            debug: (t, a) => e.debug(t, a),
                            info: (t, a) => e.info(t, a),
                            warn: (t, a) => e.warn(t, a),
                            error: (t, a) => e.error(t, a),
                            fatal: (t, a) => e.fatal(t, a),
                            child: (t) => e.child(t),
                        };
                        return (o.set(e, a), a);
                    })((0, i.N)().get(r.Zf));
        },
        68594: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => c });
            var r = a(88800),
                i = a(65724),
                n = a(2058),
                o = a(19994),
                s = a(51806),
                l = a.n(s);
            let c = (e) => {
                let { className: t, isShimmerActive: a } = e,
                    { formatMessage: s } = (0, n.A)();
                return (0, r.jsxs)('div', {
                    'aria-label': s({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, i.$)(l().root, t),
                    children: [
                        (0, r.jsx)(o.W, { className: l().date, radius: 'm', isActive: a }),
                        (0, r.jsxs)('div', {
                            className: l().meta,
                            children: [
                                (0, r.jsx)(o.W, { className: l().title, radius: 's', isActive: a }),
                                (0, r.jsx)(o.W, { className: l().description, radius: 's', isActive: a }),
                            ],
                        }),
                        (0, r.jsx)(o.W, { className: l().action, radius: 'l', isActive: a }),
                    ],
                });
            };
        },
        72542: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => n, cy: () => i, pE: () => r });
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
                n = 'ru-RU';
        },
        73170: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var r,
                i = a(53548),
                n = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
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
                        (a.r(t), a.d(t, { clsx: () => r, default: () => i }));
                        let i = r;
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var n in ((r = {}), t)) 'key' !== n && (r[n] = t[n]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5531: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let i = a(4377),
                            n = a(5881),
                            o = a(810),
                            s = r(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: r, ...l } = e,
                                c = (0, n.clsx)(s.default.root, { [s.default.focusable]: a }, t);
                            return (0, o.isValidElement)(r)
                                ? (0, o.cloneElement)(r, { ...l, className: (0, n.clsx)(c, r.props.className) })
                                : (0, i.jsx)('span', { className: c, ...l, children: r });
                        };
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (n[e].call(a.exports, a, a.exports, s), a.exports);
            }
            ((s.d = (e, t) => {
                for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = s(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
        },
        74250: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var r = a(88800),
                i = a(65724),
                n = a(2058),
                o = a(17392),
                s = a(29504),
                l = a(32414),
                c = a(22989),
                d = a.n(c);
            let u = (e) => {
                let { datetime: t, className: a, monthClassName: c, dayClassName: u, weekdayClassName: b, withWeekday: m = !0, ...N } = e,
                    { formatDate: p } = (0, n.A)(),
                    x = ((e) => {
                        let { formatMessage: t } = (0, n.A)(),
                            a = {
                                0: t({ id: 'calendar.january-short' }),
                                1: t({ id: 'calendar.february-short' }),
                                2: t({ id: 'calendar.march-short' }),
                                3: t({ id: 'calendar.april-short' }),
                                4: t({ id: 'calendar.may-short' }),
                                5: t({ id: 'calendar.june-short' }),
                                6: t({ id: 'calendar.july-short' }),
                                7: t({ id: 'calendar.august-short' }),
                                8: t({ id: 'calendar.september-short' }),
                                9: t({ id: 'calendar.october-short' }),
                                10: t({ id: 'calendar.november-short' }),
                                11: t({ id: 'calendar.december-short' }),
                            };
                        if (e) return a[new Date(e).getMonth()];
                    })(t);
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(d().root, a),
                    'aria-label': p(t, (0, l.s)()),
                    ...N,
                    'data-test-id': o.OA.concert.CONCERT_DATE,
                    children: [
                        (0, r.jsx)(s.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, i.$)(d().month, c),
                            'data-test-id': o.OA.concert.CONCERT_DATE_MONTH,
                            children: x,
                        }),
                        (0, r.jsx)(s.HL, {
                            variant: 'div',
                            className: (0, i.$)(d().day, u),
                            'data-test-id': o.OA.concert.CONCERT_DATE_DAY,
                            children: p(t, { day: 'numeric' }),
                        }),
                        m &&
                            (0, r.jsx)(s.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, i.$)(d().weekday, b),
                                'data-test-id': o.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: p(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        74773: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => r });
            var r = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        76484: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => n });
            var r = a(2058),
                i = a(29993);
            let n = () => {
                let { formatMessage: e, formatNumber: t } = (0, r.A)();
                return (0, i.c)((a) => {
                    var r, i;
                    return (null == (r = a.price) ? void 0 : r.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(a.price.value, { style: 'currency', currency: null == (i = a.price) ? void 0 : i.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        77863: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => r });
            var r = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        78275: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var r,
                i = a(53548),
                n = {
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                o = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var a = o[t];
                    if (void 0 !== a) return a.exports;
                    var r = (o[t] = { exports: {} });
                    return (n[t](r, r.exports, e), r.exports);
                })(810);
                s.useToggle = (t) => {
                    let [a, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let i = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        o = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: a, toggle: i, setState: r, toggleTrue: n, toggleFalse: o };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        78940: (e, t, a) => {
            'use strict';
            (a.d(t, { Z: () => l }), a(30282));
            var r = a(58390),
                i = a(29993),
                n = a(67174),
                o = a(15947),
                s = a(97261);
            let l = (e) => {
                let t = (0, r.useRouter)(),
                    { href: a, target: l } = (0, n.u)(e);
                return (0, i.c)((e) => {
                    let r = (0, o.U)(a, window.location.href, l);
                    if (!r) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (r.type === s.I.EXTERNAL || r.type === s.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: a } = (0, n.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, a);
                              })(r.href)
                            : t.push(r.href));
                });
            };
        },
        79070: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => i });
            var r = {};
            (Object.defineProperty(r, '__esModule', { value: !0 }), (r.useReturnValue = void 0), (r.useReturnValue = (e) => e()), r.__esModule);
            var i = r.useReturnValue;
        },
        81685: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => i });
            var r = a(29201);
            let i = (e) => {
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
                                            disclaimers: (0, r.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (a = e.isAvailable) || a, disclaimers: (0, r.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        83418: (e, t, a) => {
            'use strict';
            function r(e) {
                let { host: t, url: a } = e;
                return a || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            a.d(t, { v: () => r });
        },
        83602: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var r = a(9519),
                i = a(72542),
                n = a(21424),
                o = a(4653);
            let s = (e) => o.U.parseAcceptLanguage(null != e ? e : void 0);
            var l = a(1220);
            let c = (e) => {
                var t;
                return null != (t = { ru: l.$.RU, en: l.$.EN, uz: l.$.UZ, kk: l.$.KK }[e]) ? t : l.$.RU;
            };
            var d = a(95330);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(i.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
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
                    var t, a, r;
                    let i = (0, n.k)(this.config, e);
                    i !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(i), null == (r = this.changeLanguageHandler) || r.onChangeLanguage(i));
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
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: l, logger: c }) {
                    let d;
                    if (
                        ((0, r._)(this, 'language', void 0),
                        (0, r._)(this, 'storage', void 0),
                        (0, r._)(this, 'dictionary', void 0),
                        (0, r._)(this, 'config', void 0),
                        (0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'changeLanguageHandler', void 0),
                        (0, r._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
                        (this.logger = c),
                        (this.changeLanguageHandler = l),
                        (this.serverDetectedLocale = e),
                        (this.config = i.pE[i.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new o.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: s(navigator.languages.join()),
                            });
                        }
                    } else [d] = s(e) || [];
                    this.language = (0, n.k)(this.config, d);
                }
            }
        },
        85587: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r, n: () => i });
            var r = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                i = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        86790: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => T });
            var r = a(88800),
                i = a(65724),
                n = a(84961),
                o = a(2058),
                s = a(30282),
                l = a(94144),
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
            let d = (e, t, a) => {
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
                u = (e) => {
                    let { formatMessage: t, language: a, tld: r, year: i } = e;
                    return {
                        year: i,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, a) },
                    };
                };
            var b = a(62293),
                m = a(99839);
            let N = (e) => e(new Date(), (0, m.m)());
            var p = a(51611),
                x = a(72288),
                _ = a(11006),
                g = a.n(_),
                h = a(17392),
                v = a(29504),
                C = a(91292);
            let f = (e) => {
                    let { className: t, data: a } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, i.$)(g().copyrights, t),
                        'data-test-id': h.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, r.jsx)(C.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, i.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': h.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(C.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': h.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, r.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: g().list,
                                'data-test-id': h.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: i } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, r.jsx)(C.N, { target: '_blank', href: i, className: g().link, 'data-test-id': h.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': h.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { className: t, data: a } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, i.$)(g().root, g().important, t),
                        'data-test-id': h.S7.FOOTER,
                        children: [(0, r.jsx)(y, { links: a.links, disclaimer: a.disclaimer }), (0, r.jsx)(f, { data: a.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, x.g)(),
                    { formatDate: i, formatMessage: n } = (0, o.A)(),
                    { language: s } = (0, p.h)(),
                    l = u({ formatMessage: n, language: s, tld: a.tld, year: N(i) });
                return (0, r.jsx)(f, { className: t, data: l });
            });
            let T = (0, n.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: n, location: m, user: _ } = (0, x.g)(),
                    { formatDate: h, formatMessage: v } = (0, o.A)(),
                    { isEnabled: C } = null != (t = (0, l.P)()) ? t : {},
                    { language: f } = (0, p.h)(),
                    y = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: r, language: i, tld: n, userRegion: o, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: r, language: i, userRegion: n } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, i) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, i) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, i) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, i) },
                                    b = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, i) },
                                    m = [o, l, u];
                                return (a && 'ru' === n && m.push(s), m.push(b), m);
                            })({ formatMessage: a, isWebApplication: r, language: i, tld: n, userRegion: o }),
                            disclaimer: (0, b.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: u({ formatMessage: a, language: i, tld: n, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: s.$3,
                        tld: m.tld,
                        language: f,
                        userRegion: _.account.data.userSessionRegionIso,
                        year: N(h),
                    });
                return (0, r.jsx)(E, { className: (0, i.$)({ [g().root_withOffsetForDeeplink]: C }, a), data: y });
            });
        },
        91241: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            let r = 'ru';
        },
        91959: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var r = a(58217);
            let i = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: i } = e;
                return (0, r.l)({ entity: t, callback: a, modalBehavior: void 0 === i ? void 0 : { shouldHistoryBack: i }, preventDefaultWhenSafe: !0 });
            };
        },
        94144: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i, P: () => n });
            var r = a(53548);
            let i = (0, r.createContext)(null),
                n = () => (0, r.useContext)(i);
        },
        95330: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c, X: () => l });
            var r = a(39499),
                i = a(72542);
            let n = async (e) => e.then((e) => e.default),
                o = i.pE[i.cy],
                s = o.langs.reduce((e, t) => (e.set(t, async () => n(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                l = o.langs.reduce((e, t) => (e.set(t, async () => n(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                        a = t.get(e),
                        i = t.get('ru');
                    if (a) return a();
                    if (i) return i();
                    throw new r.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        95960: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
                meta: 'ConcertMeta_meta__GteL_',
                title: 'ConcertMeta_title__cqonb',
                location: 'ConcertMeta_location__HuUgv',
                rating: 'ConcertMeta_rating__P4Ana',
                separator: 'ConcertMeta_separator__BcJsF',
            };
        },
        97261: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => r });
            var r = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        97956: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => r });
            var r = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextTagSandbox = 'WebNextTagSandbox'),
                    (e.WebNextServiceWorkerCache = 'WebNextServiceWorkerCache'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextForcedLogin = 'WebNextForcedLogin'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextProductWithoutRecommendation = 'WebNextProductWithoutRecommendation'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextBrandedPlayerErids = 'WebNextBrandedPlayerErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextLatestGenreAlbumsDegradation = 'WebNextLatestGenreAlbumsDegradation'),
                    (e.WebNextPlaylistFiltersDegradation = 'WebNextPlaylistFiltersDegradation'),
                    (e.WebNextUgcUploadDegradation = 'WebNextUgcUploadDegradation'),
                    (e.WebNextLibrarySyncLimits = 'WebNextLibrarySyncLimits'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextShaderV3 = 'WebNextShaderV3'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextAlbumImpulseBanner = 'WebNextAlbumImpulseBanner'),
                    (e.WebNextPlaylistImpulseBanner = 'WebNextPlaylistImpulseBanner'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
                    (e.WebNextTrackNotModified = 'WebNextTrackNotModified'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextResourcesFileInfo = 'WebNextResourcesFileInfo'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextYnisonEnabled = 'WebNextYnisonEnabled'),
                    (e.WebNextYnisonRestoreMusicAsVibe = 'WebNextYnisonRestoreMusicAsVibe'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextVibeTerminated = 'WebNextVibeTerminated'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.WebNextMarketLanding = 'WebNextMarketLanding'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallDisclaimer = 'WebNextPaywallDisclaimer'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextWaveLikesAndShares = 'WebNextWaveLikesAndShares'),
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextWavePauseState = 'WebNextWavePauseState'),
                    (e.WebNextNewWaveEntryPoint = 'WebNextNewWaveEntryPoint'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextPlayerTimecodeTooltip = 'WebNextPlayerTimecodeTooltip'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextReplicsLumenUI = 'WebNextReplicsLumenUI'),
                    (e.WebNextReplicsLumenOption = 'WebNextReplicsLumenOption'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion15267 = 'WebNextYaspVersion15267'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextYnisonNewConnector = 'WebNextYnisonNewConnector'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextWizard3 = 'WebNextWizard3'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextWaveForTwoOnboarding = 'WebNextWaveForTwoOnboarding'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    (e.WebNextSendVibeFeedbacksWithTracks = 'WebNextSendVibeFeedbacksWithTracks'),
                    (e.WebNextArtistRecommendationsAutoScroll = 'WebNextArtistRecommendationsAutoScroll'),
                    (e.WebNextOtelTechMetrics = 'WebNextOtelTechMetrics'),
                    (e.WebNextMainPlayerTitle = 'WebNextMainPlayerTitle'),
                    (e.WebNextUnstableMusicScreen = 'WebNextUnstableMusicScreen'),
                    (e.WebNextLumenCollectionEntryPoint = 'WebNextLumenCollectionEntryPoint'),
                    (e.WebNextWebView = 'WebNextWebView'),
                    e
                );
            })({});
        },
        98427: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => r });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
        },
        98774: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => n });
            var r = a(51724),
                i = a(20775);
            let n = (e) => {
                let { available: t, disclaimers: a } = (0, r.f)(e);
                return (0, i.x)(t, a) ? { index: !1, follow: !0 } : void 0;
            };
        },
        99839: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(0, [7437, 8655, 2344, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 8283, 9202, 4662, 4732, 9087, 3979, 6719, 900, 2470, 1372, 763, 2670, 7358], () =>
            e((e.s = 8672)),
        ),
            (_N_E = e.O()));
    },
]);
