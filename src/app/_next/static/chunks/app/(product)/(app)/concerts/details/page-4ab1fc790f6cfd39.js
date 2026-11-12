(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2849],
    {
        4086: (e, t, r) => {
            'use strict';
            r.d(t, {
                $$: () => eu,
                $5: () => eh,
                $8: () => O,
                $I: () => p,
                $Y: () => eM,
                A4: () => m,
                CN: () => eo,
                CR: () => h,
                DP: () => L,
                DT: () => eI,
                DV: () => eE,
                E: () => x,
                EN: () => n,
                Ez: () => em,
                GB: () => E,
                GV: () => S,
                Hm: () => a,
                JM: () => ea,
                K1: () => W,
                LC: () => eR,
                Lb: () => v,
                Lk: () => ec,
                N1: () => e_,
                NN: () => Y,
                O9: () => D,
                OP: () => g,
                Oo: () => k,
                P0: () => P,
                P1: () => el,
                PL: () => eA,
                QG: () => j,
                RD: () => eH,
                RG: () => eD,
                S1: () => o,
                SD: () => $,
                SX: () => ex,
                TD: () => ev,
                TK: () => i,
                Tq: () => eb,
                U2: () => I,
                UB: () => ek,
                Ut: () => z,
                V3: () => y,
                V4: () => N,
                VR: () => eK,
                W5: () => eS,
                WA: () => J,
                X4: () => M,
                X8: () => H,
                Xc: () => er,
                Zf: () => s,
                Zi: () => eL,
                Zl: () => es,
                _1: () => _,
                aE: () => Z,
                by: () => eC,
                c9: () => et,
                cZ: () => en,
                dA: () => ew,
                dh: () => eT,
                en: () => Q,
                eu: () => B,
                ff: () => ey,
                gd: () => eg,
                gu: () => c,
                iP: () => ej,
                jQ: () => ee,
                ki: () => q,
                mD: () => l,
                mr: () => d,
                nM: () => X,
                ni: () => eG,
                ok: () => G,
                oo: () => A,
                qN: () => F,
                qT: () => ep,
                qt: () => T,
                re: () => ei,
                ro: () => V,
                s_: () => eP,
                sv: () => ed,
                tz: () => R,
                u2: () => ef,
                uM: () => eN,
                vH: () => w,
                vg: () => eO,
                wH: () => K,
                wK: () => f,
                xF: () => C,
                y$: () => u,
                yq: () => U,
                zj: () => b,
            });
            let n = 'AfterTrackResource',
                s = 'Logger',
                o = 'TechMetricsLogger',
                l = 'OtelSdk',
                i = 'ModelActionsLogger',
                a = 'HttpClient',
                c = 'HttpBeaconClient',
                u = 'Slam',
                d = 'UgcUploadHttpClient',
                g = 'BaseResourceHttpClient',
                m = 'ResourceHttpClient',
                h = 'ResourceBeaconClient',
                p = 'AccountResource',
                E = 'OutageNoticeResource',
                _ = 'UsersResource',
                y = 'LandingResource',
                f = 'LandingBlocksResource',
                v = 'Landing3Resource',
                R = 'AlbumResource',
                x = 'SlidesResource',
                T = 'MusicExternalApiPrefixUrl',
                S = 'MusicResourceFactory',
                N = 'PublicConfig',
                C = 'ServerConfig',
                P = 'TokenConfig',
                A = 'Storage',
                L = 'CookieStorage',
                I = 'LocalStorage',
                O = 'LibraryResource',
                b = 'LumenResource',
                k = 'TracksResource',
                w = 'SessionStorage',
                M = 'TopResource',
                D = 'ArtistsResource',
                j = 'Authorization',
                K = 'RedAlertResource',
                G = 'RotorResource',
                H = 'WaveResource',
                U = 'SearchResource',
                Y = 'SearchPlaylistResource',
                F = 'PlaylistResource',
                V = 'PlaylistsResource',
                X = 'PinResource',
                z = 'MetatagsResource',
                W = 'TagResource',
                B = 'FeedResource',
                $ = 'Wizard3Resource',
                J = 'CONTAINER_USER_ID_TOKEN',
                Z = 'PinsResource',
                q = 'MusicHistoryResource',
                Q = 'ChartResource',
                ee = 'ClipsResource',
                et = 'DynamicPagesResource',
                er = 'CONTAINER_I18N_STORAGE',
                en = 'LyricViewsResource',
                es = 'NonMusicResource',
                eo = 'DonationResource',
                el = 'LoaderResource',
                ei = 'PrefixlessResource',
                ea = 'StreamsResource',
                ec = 'FiltersResource',
                eu = 'UgcResource',
                ed = 'CollectionResource',
                eg = 'AdsResource',
                em = 'PersonalResource',
                eh = 'AvailabilityResource',
                ep = 'GetFileInfoResource',
                eE = 'ResourcesFileInfoResource',
                e_ = 'DisclaimersResource',
                ey = 'DisclaimerDictionary',
                ef = 'FamilyResource',
                ev = 'ChildrenLandingResource',
                eR = 'TelemetryResource',
                ex = 'Env',
                eT = 'PromoResource',
                eS = 'RumResource',
                eN = 'AcqOffers',
                eC = 'Ynison',
                eP = 'YnisonNewConnector',
                eA = 'LabelsResource',
                eL = 'RequestExecutionContext',
                eI = 'ConcertsResource',
                eO = 'YaMetrikaController',
                eb = 'RumTransport',
                ek = 'YaMetrikaTransport',
                ew = 'WordsResource',
                eM = 'WheelResource',
                eD = 'MocksInitializer',
                ej = 'CacheWorker',
                eK = 'NetworkMonitorFactory',
                eG = 'SkeletonSdk',
                eH = 'TagSandbox';
        },
        4370: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => s });
            var n = r(67174);
            let s = {
                main: (0, n.u)('/'),
                chart: (0, n.u)('/chart'),
                chartPodcasts: (0, n.u)('/chart/podcasts'),
                collection: (0, n.u)('/collection'),
                collectionAlbums: (0, n.u)('/collection/albums'),
                collectionArtists: (0, n.u)('/collection/artists'),
                collectionClips: (0, n.u)('/collection/clips'),
                collectionDislikes: (0, n.u)('/collection/dislikes'),
                collectionKids: (0, n.u)('/collection/kids'),
                collectionKidsAlbums: (0, n.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, n.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, n.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, n.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, n.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, n.u)('/collection/multivibes'),
                collectionPlaylists: (0, n.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, n.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, n.u)('/collection/playlists/liked'),
                collectionShelf: (0, n.u)('/collection/shelf'),
                collectionShelfLiked: (0, n.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, n.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, n.u)('/collection/shelf/recently-played'),
                concerts: (0, n.u)('/concerts'),
                kids: (0, n.u)('/kids'),
                mixes: (0, n.u)('/mixes'),
                musicHistory: (0, n.u)('/music-history'),
                muzmarket: (0, n.u)('/muzmarket'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                multivibe: (0, n.u)('/multivibe'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        6466: (e) => {
            e.exports = {
                root: 'ConcertsDetailsPage_root__Uyap_',
                scrollContainer: 'ConcertsDetailsPage_scrollContainer__BKTRD',
                content: 'ConcertsDetailsPage_content__WsuVk',
                header: 'ConcertsDetailsPage_header__K7UVE',
                container: 'ConcertsDetailsPage_container__swjuX',
                column: 'ConcertsDetailsPage_column__EB1kA',
                row: 'ConcertsDetailsPage_row__oP8Xu',
                shimmerTitle: 'ConcertsDetailsPage_shimmerTitle__vjWfR',
                footer: 'ConcertsDetailsPage_footer__ooBj8',
            };
        },
        10363: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s });
            var n = r(19207);
            let s = (e) => (0, n.h)(e.data.concert, e.data.minPrice);
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
        15947: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var n = r(35412),
                s = r(28166),
                o = r(97261);
            let l = [n.cy.HTTP, n.cy.HTTPS, n.cy.MAILTO, n.cy.TEL, s.Lz],
                i = (e, t, r) => {
                    let i;
                    try {
                        i = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let a = (0, n.Rj)(e, { allowedProtocols: new Set([...l, i.protocol]), baseUrl: i.href });
                    return a.isAllowed
                        ? a.url.protocol === s.Lz
                            ? { type: o.I.DEEPLINK, href: e }
                            : '_blank' !== r && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(a.url, i)
                              ? { type: o.I.INTERNAL, href: e }
                              : { type: o.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16818: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => a });
            var n = r(53647),
                s = r(4086),
                o = r(41928),
                l = r(65523),
                i = r(57448);
            let a = () => {
                let e = (0, o.N)(),
                    t = e.get(s.oo),
                    r = e.get(s.QG),
                    a = e.get(s.uM),
                    c = e.get(s.ff),
                    u = e.get(s.V4),
                    d = e.get(s.P0),
                    g = (0, i.f)(),
                    m = (0, l.U)(),
                    h = (0, o.N)().get(s.TK),
                    p = e.get(s.ni),
                    E = e.get(s.RD),
                    _ = new n.si(),
                    y = new n.fW();
                return {
                    ...g,
                    acqOffers: a,
                    disclaimerDictionary: c,
                    logger: m,
                    modelActionsLogger: h,
                    localStorage: _,
                    sessionStorage: y,
                    containerStorage: t,
                    authorization: r,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: p,
                    tagSandbox: E,
                };
            };
        },
        19207: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => i });
            var n = r(5120),
                s = r(19815),
                o = r(58400),
                l = r(47255);
            let i = (e, t) => {
                var r, i, a, c;
                let { uri: u, color: d } = e.cover || {};
                return (0, n.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, o.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: u, color: d },
                    rank: e.rank,
                    cashbackTitle: null == (r = e.cashback) ? void 0 : r.title,
                    cashbackValuePercent: null == (i = e.cashback) ? void 0 : i.valuePercent,
                    price: (0, l.J)(t),
                    eventKind: null != (c = null == (a = e.eventInfo) ? void 0 : a.type) ? c : s.Z.UNSPECIFIED,
                });
            };
        },
        19815: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { Z: () => n }),
                (function (e) {
                    ((e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified'));
                })(n || (n = {})));
        },
        28166: (e, t, r) => {
            'use strict';
            r.d(t, { Lz: () => n, ov: () => s });
            let n = ''.concat('yandexmusic', ':'),
                s = ''.concat(n, '//');
        },
        30064: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => a });
            var n = r(5120),
                s = r(50633),
                o = r(97956),
                l = r(63425);
            let i = n.gK.model('Price', { value: n.gK.number, currency: n.gK.string }),
                a = n.gK
                    .model('Concert', {
                        id: n.gK.string,
                        dataSessionId: n.gK.maybe(n.gK.string),
                        datetime: n.gK.maybe(n.gK.string),
                        city: n.gK.maybe(n.gK.string),
                        place: n.gK.maybe(n.gK.string),
                        contentRating: n.gK.maybe(n.gK.string),
                        price: n.gK.maybe(i),
                        cashbackTitle: n.gK.maybe(n.gK.string),
                        cashbackValuePercent: n.gK.maybe(n.gK.number),
                        title: n.gK.maybe(n.gK.string),
                        cover: n.gK.maybe(l.$),
                        rank: n.gK.maybe(n.gK.number),
                        eventKind: n.gK.maybe(n.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, s.M)(e);
                            return t.checkExperiment(o.z.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, s.M)(e);
                            return t.checkExperiment(o.z.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        32414: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => n });
            let n = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        34303: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => n });
            var n = (function (e) {
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
        34961: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => E, s: () => _ });
            var n = r(88800),
                s = r(84961),
                o = r(58390),
                l = r(53548),
                i = r(35412),
                a = r(39499),
                c = r(89108),
                u = r(70003),
                d = r(72288),
                g = r(16818);
            (0, s.eO)(!1);
            let m = (0, l.createContext)(null),
                h = (e) => {
                    let { children: t, store: r, storeKey: s } = e,
                        o = (0, l.useMemo)(() => ({ store: r, storeKey: s }), [r, s]);
                    return (0, n.jsx)(m.Provider, { value: o, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: s } = e;
                    return (
                        (0, o.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, i.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                E = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        s = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: o, nonce: l } = e,
                                i = (0, g.Y)(),
                                a = (0, d.g)(),
                                { store: m, patchesRef: E } = (0, u.m)({
                                    createStore: () => t({ ...i, rootStore: a }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(p, { nonce: l, patchKey: r, patchesRef: E }), (0, n.jsx)(h, { store: m, storeKey: r, children: o })],
                            });
                        },
                    };
                };
            function _(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, l.useContext)(m);
                if (!r || r.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == r ? void 0 : r.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        41928: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => o, N: () => l });
            var n = r(53548),
                s = r(39499);
            let o = (0, n.createContext)(null);
            function l() {
                let e = (0, n.useContext)(o);
                if (null === e) throw new s.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        47255: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            let n = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        47969: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => c });
            var n = r(35802),
                s = r(79070),
                o = r(61013),
                l = r(53548);
            let i = (e) => {
                let { minColumnWidth: t, maxColumnWidth: r, containerWidth: n, totalCount: s, columnGap: o, minColumnCount: l, maxColumnCount: i } = e,
                    a = Math.max(1, Math.floor((n + o) / (t + o))),
                    c = Math.max(l, Math.floor((n + o) / ((r + t) * 0.5 + o)));
                for (let e = l; e <= a; e++) {
                    let s = (n - (e - 1) * o) / e;
                    if (s >= t && s <= r) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(s / (c = i ? Math.min(c, i) : c)), columnCount: c };
            };
            var a = r(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: r,
                        rowGap: c,
                        columnGap: u,
                        minColumnWidth: d,
                        maxColumnWidth: g,
                        minColumnCount: m,
                        maxColumnCount: h,
                        containerRef: p,
                    } = e,
                    { rowCount: E, columnCount: _ } = ((e) => {
                        let { containerRef: t, minColumnCount: r, maxColumnWidth: n, minColumnWidth: s, totalCount: a, columnGap: c, maxColumnCount: u } = e,
                            [d, g] = (0, l.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, l.useRef)(null),
                            h = (0, l.useMemo)(
                                () =>
                                    (0, o.A)(
                                        (e) => {
                                            g(
                                                i({
                                                    minColumnWidth: s,
                                                    maxColumnWidth: n,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: a,
                                                    columnGap: c,
                                                    minColumnCount: r,
                                                    maxColumnCount: u,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, u, n, r, s, a],
                            );
                        return (
                            (0, l.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(h);
                                    })),
                                    t &&
                                        (g(
                                            i({
                                                minColumnWidth: s,
                                                maxColumnWidth: n,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: a,
                                                columnGap: c,
                                                minColumnCount: r,
                                                maxColumnCount: u,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, h, u, n, r, s, a],
                            ),
                            d
                        );
                    })({ totalCount: t, columnGap: null != u ? u : 0, minColumnCount: m, maxColumnWidth: g, minColumnWidth: d, maxColumnCount: h, containerRef: p }),
                    { virtualizer: y, resizeObserver: f } = (0, a.r)({ count: E, getEstimateSize: r, gap: c, containerRef: p }),
                    v = (0, n.A)(
                        Array.from({ length: t }, (e, t) => t),
                        _,
                    ),
                    R = (0, s.L)(() => {
                        var e, t;
                        if (!y.range) return null;
                        let r = null == (e = v[y.range.startIndex]) ? void 0 : e.at(0),
                            n = null == (t = v[y.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== r && void 0 !== n ? { startIndex: r, endIndex: n } : null;
                    });
                return { virtualizer: y, rowResizeObserver: f, indices: v, columnCount: _, visibleRange: R };
            };
        },
        50633: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => s });
            var n = r(5120);
            let s = (e) => {
                let t = (0, n.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: r } = (0, n._$)(e);
                return r || t;
            };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => c });
            var n = r(88800),
                s = r(65724),
                o = r(84961),
                l = r(53548),
                i = r(51516),
                a = r.n(i);
            let c = (0, o.PA)((e) => {
                let { indices: t, virtualItem: r, renderItemByIndex: o, columnClassName: i, className: c, resizeObserver: u, scrollMargin: d } = e,
                    g = (0, l.useRef)(null),
                    m = t[r.index],
                    h = { '--virtual-grid-row-vertical-offset': ''.concat(r.start - d, 'px') };
                return (
                    (0, l.useEffect)(() => {
                        let e = g.current;
                        if (e)
                            return (
                                null == u || u.observe(e),
                                () => {
                                    null == u || u.unobserve(e);
                                }
                            );
                    }, [u]),
                    (0, n.jsx)('div', {
                        'data-index': r.index,
                        ref: g,
                        style: h,
                        className: (0, s.$)(a().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, n.jsx)('div', { className: i, children: o(e) }, ''.concat(r.key, '_').concat(e))),
                    })
                );
            });
        },
        53647: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => o, si: () => i, fW: () => g, MJ: () => d, jU: () => h, Bx: () => m });
            var n = r(77451);
            function s(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let l = (0, n.Jt)(e);
                        if (t) {
                            var r, o;
                            return null != (o = null == (r = s(l)) ? void 0 : r.value) ? o : null;
                        }
                        return null != l ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let o = s ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, o, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, n.TF)(e);
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
            class i {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = l('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let o = r.getItem(e) || void 0;
                        if (!t) return o;
                        let l = s(o);
                        if (!l) return null;
                        let i = null != (n = null == l ? void 0 : l.value) ? n : null;
                        if ((null == l ? void 0 : l.expires) && Date.now() > new Date(l.expires).getTime()) return (this.remove(e), null);
                        return i;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let n = l('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
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
            var a = r(9519),
                c = r(39499);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = l('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, o;
                        let l = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (o = null == (r = s(l)) ? void 0 : r.value) ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = l('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
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
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            s = e.get(r);
                        null != s && e.set(r, s, n);
                    });
            }
            function h(e) {
                let { name: t, group: r, value: n } = e;
                return n && 0 !== Object.keys(n).length
                    ? n.title
                        ? { [t]: { group: r, value: { ...n, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: n } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        53892: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            let n = {
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
        56792: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 78016));
        },
        57448: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => o });
            var n = r(4086),
                s = r(41928);
            let o = () => {
                let e = (0, s.N)(),
                    t = e.get(n.$I),
                    r = e.get(n.EN),
                    o = e.get(n.N1),
                    l = e.get(n._1),
                    i = e.get(n.V3),
                    a = e.get(n.Lb),
                    c = e.get(n.wK),
                    u = e.get(n.tz),
                    d = e.get(n.$8),
                    g = e.get(n.Oo),
                    m = e.get(n.X4),
                    h = e.get(n.O9),
                    p = e.get(n.E),
                    E = e.get(n.wH),
                    _ = e.get(n.ok),
                    y = e.get(n.X8),
                    f = e.get(n.yq),
                    v = e.get(n.NN),
                    R = e.get(n.qN),
                    x = e.get(n.ro),
                    T = e.get(n.nM),
                    S = e.get(n.Ut),
                    N = e.get(n.K1),
                    C = e.get(n.eu),
                    P = e.get(n.SD),
                    A = e.get(n.aE),
                    L = e.get(n.ki),
                    I = e.get(n.c9),
                    O = e.get(n.en),
                    b = e.get(n.jQ),
                    k = e.get(n.cZ),
                    w = e.get(n.Zl),
                    M = e.get(n.CN),
                    D = e.get(n.P1),
                    j = e.get(n.zj),
                    K = e.get(n.re),
                    G = e.get(n.JM),
                    H = e.get(n.Lk),
                    U = e.get(n.$$),
                    Y = e.get(n.sv),
                    F = e.get(n.gd),
                    V = e.get(n.Ez),
                    X = e.get(n.u2),
                    z = e.get(n.TD),
                    W = e.get(n.dh),
                    B = e.get(n.LC),
                    $ = e.get(n.PL),
                    J = e.get(n.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: o,
                    usersResource: l,
                    landingResource: i,
                    landing3Resource: a,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: g,
                    topResource: m,
                    artistsResource: h,
                    slidesResource: p,
                    redAlertResource: E,
                    rotorResource: _,
                    waveResource: y,
                    searchResource: f,
                    searchPlaylistResource: v,
                    playlistResource: R,
                    playlistsResource: x,
                    pinResource: T,
                    metatagsResource: S,
                    tagResource: N,
                    feedResource: C,
                    wizard3Resource: P,
                    pinsResource: A,
                    musicHistoryResource: L,
                    dynamicPagesResource: I,
                    chartResource: O,
                    clipsResource: b,
                    lyricViewsResource: k,
                    nonMusicResource: w,
                    donationResource: M,
                    loaderResource: D,
                    lumenResource: j,
                    prefixlessResource: K,
                    streamsResource: G,
                    filtersResource: H,
                    ugcResource: U,
                    collectionResource: Y,
                    adsResource: F,
                    personalResource: V,
                    familyResource: X,
                    childrenLandingResource: z,
                    promoResource: W,
                    telemetryResource: B,
                    labelsResource: $,
                    concertsResource: J,
                    wordsResource: e.get(n.dA),
                    wheelResource: e.get(n.$Y),
                };
            };
        },
        58400: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            let n = /[+-]\d{2}:?\d{2}/,
                s = (e) => (null == e ? void 0 : e.replace(n, ''));
        },
        59497: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var n = r(5120),
                s = r(74773);
            let o = n.gK.model('LoadingState', { loadingState: n.gK.enumeration(Object.values(s.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === s.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === s.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === s.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === s.G.REJECT;
                },
            }));
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => l });
            var n = r(88800);
            r(30282);
            var s = r(11006),
                o = r.n(s);
            let l = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: o().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => s });
            var n = r(97956);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: s, userRegion: o } = e;
                return 'ru' === o && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : s();
            };
        },
        63425: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => s });
            var n = r(5120);
            let s = n.gK.model('Cover', { uri: n.gK.maybe(n.gK.string), color: n.gK.maybe(n.gK.string), videoUrl: n.gK.maybe(n.gK.string) });
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var n = r(4086),
                s = r(41928),
                o = r(44084);
            let l = new WeakMap(),
                i = () =>
                    ((e) => {
                        if (e instanceof o.r) return e;
                        let t = l.get(e);
                        if (t) return t;
                        let r = {
                            log: (t, r) => e.info(t, r),
                            trace: (t, r) => e.trace(t, r),
                            debug: (t, r) => e.debug(t, r),
                            info: (t, r) => e.info(t, r),
                            warn: (t, r) => e.warn(t, r),
                            error: (t, r) => e.error(t, r),
                            fatal: (t, r) => e.fatal(t, r),
                            child: (t) => e.child(t),
                        };
                        return (l.set(e, r), r);
                    })((0, s.N)().get(n.Zf));
        },
        67311: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => s });
            var n = r(5120);
            let s = n.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, n.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, n.zr)(e);
                            });
                        }));
                },
            }));
        },
        70003: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => o });
            var n = r(5120),
                s = r(53548);
            let o = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: o } = e,
                    l = (0, s.useRef)([]),
                    [i] = (0, s.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, s.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(i, e);
                        };
                        return (e(), window.addEventListener(o, e), () => window.removeEventListener(o, e));
                    }, [r, o, i]),
                    { store: i, patchesRef: l }
                );
            };
        },
        73170: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var n,
                s = r(53548),
                o = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (s && (s += ' '), (s += n));
                                            else for (r in t) t[r] && (s && (s += ' '), (s += r));
                                        return s;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => s }));
                        let s = n;
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var s = null;
                            if ((void 0 !== n && (s = '' + n), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var o in ((n = {}), t)) 'key' !== o && (n[o] = t[o]);
                            else n = t;
                            return { $$typeof: r, type: e, key: s, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5531: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let s = r(4377),
                            o = r(5881),
                            l = r(810),
                            i = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...a } = e,
                                c = (0, o.clsx)(i.default.root, { [i.default.focusable]: r }, t);
                            return (0, l.isValidElement)(n)
                                ? (0, l.cloneElement)(n, { ...a, className: (0, o.clsx)(c, n.props.className) })
                                : (0, s.jsx)('span', { className: c, ...a, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(s, 2));
                    },
                },
                l = {};
            function i(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, i), r.exports);
            }
            ((i.d = (e, t) => {
                for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (i.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, '__esModule', { value: !0 }), (a.SROnly = void 0));
                var e = i(5531);
                Object.defineProperty(a, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = a.SROnly;
            a.__esModule;
        },
        74773: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => n });
            var n = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        78016: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => V }));
            var n = r(88800),
                s = r(53548),
                o = r(58390),
                l = r(34961),
                i = r(53892),
                a = r(5120),
                c = r(10363),
                u = r(30064),
                d = r(50633),
                g = r(74773),
                m = r(59497),
                h = r(67311);
            let p = a.gK
                    .compose(a.gK.model('ConcertsDetailsPage', { concerts: a.gK.maybeNull(a.gK.array(u.a)), title: a.gK.maybeNull(a.gK.string) }), m.X, h.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, a.L3)(function* (t) {
                            let { type: r, id: n } = t,
                                { concertsResource: s, modelActionsLogger: o } = (0, a._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = g.G.PENDING;
                                    let { concerts: t } = (0, d.M)(e),
                                        o = t.concertsLocationForRequest,
                                        { items: l, title: i } = yield s.getConcertsDetails({ type: r, id: n, locations: o });
                                    ((e.concerts = (0, a.wg)(l.map((e) => (0, c.H)(e)))), (e.title = null != i ? i : null), (e.loadingState = g.G.RESOLVE));
                                } catch (t) {
                                    (o.error(t), (e.loadingState = g.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = g.G.IDLE), (e.title = null), e.destroyItems([e.concerts]));
                        },
                    })),
                E = { loadingState: g.G.IDLE },
                { pageStoreProvider: _ } = (0, l.W)({ createStore: (e) => p.create(E, e), patchKey: i.n.CONCERTS_DETAILS });
            var y = r(84961),
                f = r(2058),
                v = r(49784),
                R = r(29993),
                x = r(50408),
                T = r(66719),
                S = r(29504),
                N = r(32596),
                C = r(69630),
                P = r(47969),
                A = r(53360),
                L = r(38371),
                I = r(36930),
                O = r(46422),
                b = r(44230),
                k = r(72288),
                w = r(97956),
                M = r(86790),
                D = r(60266),
                j = r(93317),
                K = r(6466),
                G = r.n(K);
            let H = (0, y.PA)((e) => {
                let { type: t, id: r } = e,
                    a = (0, s.useId)(),
                    c = (0, l.s)(i.n.CONCERTS_DETAILS),
                    { experiments: u } = (0, k.g)(),
                    { formatMessage: d } = (0, f.A)(),
                    { contentScrollRef: g, setContentScrollRef: m } = (0, b.g)(),
                    h = (0, O.W)(),
                    [p, E] = (0, x.d)();
                (0, v.W)({ enabled: c.isResolved });
                let _ = u.checkExperiment(w.z.WebNextConcertsIdentityEventType, 'on'),
                    y = (0, R.c)(() => {
                        var e;
                        return !c.isShimmerVisible && (null == (e = c.concerts) ? void 0 : e.length) ? c.concerts.length : 50;
                    }),
                    {
                        virtualizer: K,
                        rowResizeObserver: H,
                        columnCount: U,
                        indices: Y,
                    } = (0, P.L)({
                        count: y(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: p,
                    }),
                    F = { '--feed-concerts-height': ''.concat(K.getTotalSize(), 'px'), '--feed-concerts-column-count': U },
                    V = (0, s.useCallback)(
                        (e) => {
                            var t;
                            let r = null == (t = c.concerts) ? void 0 : t[e];
                            return !r || c.isShimmerVisible ? (0, n.jsx)(I.L, { isActive: c.isShimmerActive, withMeta: !0 }) : (0, n.jsx)(L.Q, { concert: r });
                        },
                        [c.concerts, c.isShimmerActive, c.isShimmerVisible],
                    );
                if (
                    ((0, s.useEffect)(
                        () => () => {
                            c.reset();
                        },
                        [c],
                    ),
                    c.isNeededToLoad && (0, s.use)(c.getData({ type: t, id: r })),
                    u.checkExperiment(w.z.WebNextConcertsDetailsPage, 'on') || (0, o.notFound)(),
                    c.isRejected)
                )
                    return (0, n.jsx)(N.SomethingWentWrong, {});
                let X = _ && c.title ? c.title : d({ id: 'concerts.details-title' });
                return (0, n.jsx)(C.h, {
                    scrollElement: g,
                    outerTitle: X,
                    children: (0, n.jsxs)('div', {
                        className: G().root,
                        children: [
                            (0, n.jsx)(j.Y, {
                                variant: j.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: h.canBack,
                                children: (0, n.jsx)(S.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: X }),
                            }),
                            (0, n.jsxs)(T.N, {
                                ref: m,
                                className: G().scrollContainer,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: G().content,
                                        children: (0, n.jsx)('div', {
                                            'aria-labelledby': a,
                                            ref: E,
                                            style: F,
                                            className: G().container,
                                            children: K.getVirtualItems().map((e) =>
                                                (0, n.jsx)(
                                                    A.U,
                                                    {
                                                        className: G().row,
                                                        columnClassName: G().column,
                                                        virtualItem: e,
                                                        resizeObserver: H,
                                                        indices: Y,
                                                        renderItemByIndex: V,
                                                        scrollMargin: K.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, n.jsx)(D.A, { children: (0, n.jsx)(M.w, { className: G().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var U = r(19994);
            let Y = (e) => (0, n.jsx)(I.L, { isActive: !0, withMeta: !0 }, e),
                F = () => {
                    let e = (0, O.W)(),
                        { contentScrollRef: t, setContentScrollRef: r } = (0, b.g)(),
                        [s, o] = (0, x.d)(),
                        { formatMessage: l } = (0, f.A)(),
                        i = l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.concert' }) }),
                        {
                            virtualizer: a,
                            rowResizeObserver: c,
                            columnCount: u,
                            indices: d,
                        } = (0, P.L)({
                            count: 50,
                            rowGap: 32,
                            columnGap: 16,
                            getEstimateRowSize: () => 371,
                            minColumnCount: 2,
                            minColumnWidth: 170,
                            maxColumnWidth: 227,
                            containerRef: s,
                        }),
                        g = { '--feed-concerts-height': ''.concat(a.getTotalSize(), 'px'), '--feed-concerts-column-count': u };
                    return (0, n.jsx)(C.h, {
                        scrollElement: t,
                        children: (0, n.jsxs)('div', {
                            className: G().root,
                            children: [
                                (0, n.jsx)(j.Y, {
                                    variant: j.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, n.jsx)(U.W, { className: G().shimmerTitle, radius: 'xxxl' }),
                                }),
                                (0, n.jsx)(T.N, {
                                    ref: r,
                                    className: G().scrollContainer,
                                    children: (0, n.jsx)('div', {
                                        className: G().content,
                                        children: (0, n.jsx)('div', {
                                            'aria-label': i,
                                            ref: o,
                                            style: g,
                                            className: G().container,
                                            children: a
                                                .getVirtualItems()
                                                .map((e) =>
                                                    (0, n.jsx)(
                                                        A.U,
                                                        {
                                                            className: G().row,
                                                            columnClassName: G().column,
                                                            virtualItem: e,
                                                            resizeObserver: c,
                                                            indices: d,
                                                            renderItemByIndex: Y,
                                                            scrollMargin: a.options.scrollMargin,
                                                        },
                                                        e.key,
                                                    ),
                                                ),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                V = () => {
                    let e = (0, o.useSearchParams)(),
                        t = e.get('type'),
                        r = e.get('id');
                    return (
                        (t && r) || (0, o.notFound)(),
                        (0, n.jsx)(_, { children: (0, n.jsx)(s.Suspense, { fallback: (0, n.jsx)(F, {}), children: (0, n.jsx)(H, { type: t, id: r }) }) })
                    );
                };
        },
        78275: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => a });
            var n,
                s = r(53548),
                o = {
                    810: (e) => {
                        e.exports = n || (n = r.t(s, 2));
                    },
                },
                l = {},
                i = {};
            ((() => {
                (Object.defineProperty(i, '__esModule', { value: !0 }), (i.useToggle = void 0));
                let e = (function e(t) {
                    var r = l[t];
                    if (void 0 !== r) return r.exports;
                    var n = (l[t] = { exports: {} });
                    return (o[t](n, n.exports, e), n.exports);
                })(810);
                i.useToggle = (t) => {
                    let [r, n] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        n(t);
                    }, [t]);
                    let s = (0, e.useCallback)(() => {
                            n((e) => !e);
                        }, []),
                        o = (0, e.useCallback)(() => {
                            n(!0);
                        }, []),
                        l = (0, e.useCallback)(() => {
                            n(!1);
                        }, []);
                    return { state: r, toggle: s, setState: n, toggleTrue: o, toggleFalse: l };
                };
            })(),
                i.__esModule);
            var a = i.useToggle;
        },
        78940: (e, t, r) => {
            'use strict';
            (r.d(t, { Z: () => a }), r(30282));
            var n = r(58390),
                s = r(29993),
                o = r(67174),
                l = r(15947),
                i = r(97261);
            let a = (e) => {
                let t = (0, n.useRouter)(),
                    { href: r, target: a } = (0, o.u)(e);
                return (0, s.c)((e) => {
                    let n = (0, l.U)(r, window.location.href, a);
                    if (!n) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (n.type === i.I.EXTERNAL || n.type === i.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: r } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, r);
                              })(n.href)
                            : t.push(n.href));
                });
            };
        },
        79070: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => s });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useReturnValue = void 0), (n.useReturnValue = (e) => e()), n.__esModule);
            var s = n.useReturnValue;
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => N });
            var n = r(88800),
                s = r(65724),
                o = r(84961),
                l = r(2058),
                i = r(30282),
                a = r(94144),
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
            let u = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var g = r(62293),
                m = r(99839);
            let h = (e) => e(new Date(), (0, m.m)());
            var p = r(51611),
                E = r(72288),
                _ = r(11006),
                y = r.n(_),
                f = r(17392),
                v = r(29504),
                R = r(91292);
            let x = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, s.$)(y().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(R.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, s.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(R.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: y().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: s } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, n.jsx)(R.N, { target: '_blank', href: s, className: y().link, 'data-test-id': f.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, s.$)(y().root, y().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, n.jsx)(T, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(x, { data: r.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, E.g)(),
                    { formatDate: s, formatMessage: o } = (0, l.A)(),
                    { language: i } = (0, p.h)(),
                    a = d({ formatMessage: o, language: i, tld: r.tld, year: h(s) });
                return (0, n.jsx)(x, { className: t, data: a });
            });
            let N = (0, o.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: o, location: m, user: _ } = (0, E.g)(),
                    { formatDate: f, formatMessage: v } = (0, l.A)(),
                    { isEnabled: R } = null != (t = (0, a.P)()) ? t : {},
                    { language: x } = (0, p.h)(),
                    T = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: s, tld: o, userRegion: l, year: i } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: s, userRegion: o } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, n, s) },
                                    i = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, n, s) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, n, s) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, n, s) },
                                    g = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, n, s) },
                                    m = [l, a, d];
                                return (r && 'ru' === o && m.push(i), m.push(g), m);
                            })({ formatMessage: r, isWebApplication: n, language: s, tld: o, userRegion: l }),
                            disclaimer: (0, g.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: d({ formatMessage: r, language: s, tld: o, year: i }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: i.$3,
                        tld: m.tld,
                        language: x,
                        userRegion: _.account.data.userSessionRegionIso,
                        year: h(f),
                    });
                return (0, n.jsx)(S, { className: (0, s.$)({ [y().root_withOffsetForDeeplink]: R }, r), data: T });
            });
        },
        89108: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => s, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                s = 'yMusicPageStatePatchesUpdated';
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s, P: () => o });
            var n = r(53548);
            let s = (0, n.createContext)(null),
                o = () => (0, n.useContext)(s);
        },
        97261: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => n });
            var n = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 2691, 8655, 9217, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 8283, 6949, 8205, 4732, 9087, 3979, 6719, 1928, 900, 2470, 1372,
                2816, 763, 2670, 7358,
            ],
            () => e((e.s = 56792)),
        ),
            (_N_E = e.O()));
    },
]);
